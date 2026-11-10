import { useCallback, useEffect, useRef, useState } from 'react';
import { clearHistory, loadHistory, mergeHistories, saveHistory, type HistoryEntry } from './history';
import { clearProgress, loadProgress, writeProgress, type SavedQuiz } from './progress';
import type { CloudUser } from './cloud';

/**
 * Conta opcional do aluno. O Firebase (cloud.ts) só é baixado quando o aluno toca em "Entrar"
 * ou se já entrou antes neste navegador (marcado em FLAG).
 */
const FLAG = 'desimulados:conta';
const loadCloudModule = () => import('./cloud');

export type AccountStatus = 'off' | 'loading' | 'in';

export interface Account {
  status: AccountStatus;
  user: CloudUser | null;
  /** Mensagem de erro do último login/sincronização (para mostrar ao aluno). */
  error: string | null;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  deleteAccount: () => Promise<void>;
  /** Envia o histórico atualizado para a conta (depois de entregar um simulado). */
  pushHistory: (history: HistoryEntry[]) => void;
}

const flagged = () => {
  try {
    return localStorage.getItem(FLAG) === '1';
  } catch {
    return false;
  }
};
const setFlag = (on: boolean) => {
  try {
    if (on) localStorage.setItem(FLAG, '1');
    else localStorage.removeItem(FLAG);
  } catch {
    // ignora
  }
};

interface Handlers {
  /** Histórico local foi juntado com o da conta. */
  onHistory: (history: HistoryEntry[]) => void;
  /** Simulado em andamento mudou (veio de outro aparelho, ou foi apagado). */
  onProgress: (saved: SavedQuiz | null) => void;
}

export function useAccount(handlers: Handlers): Account {
  const [status, setStatus] = useState<AccountStatus>(() => (flagged() ? 'loading' : 'off'));
  const [user, setUser] = useState<CloudUser | null>(null);
  const [error, setError] = useState<string | null>(null);
  const userRef = useRef<CloudUser | null>(null);
  const handlersRef = useRef(handlers);
  handlersRef.current = handlers;
  const lastProgressSent = useRef<string>('');
  const [watching, setWatching] = useState(() => flagged());

  // Ao entrar (ou ao abrir o site já logado): junta os dados deste navegador com os da conta.
  const syncOnLogin = useCallback(async (u: CloudUser) => {
    const cloud = await loadCloudModule();
    const remote = await cloud.loadCloud(u.uid);
    const merged = mergeHistories(remote.historico, loadHistory());
    saveHistory(merged);
    handlersRef.current.onHistory(merged);

    const local = loadProgress();
    const newest = [local, remote.emAndamento]
      .filter((p): p is SavedQuiz => !!p)
      .sort((a, b) => b.savedAt - a.savedAt)[0] ?? null;
    if (newest && newest !== local) {
      writeProgress(newest);
      handlersRef.current.onProgress(loadProgress());
    }
    lastProgressSent.current = JSON.stringify(newest);
    await cloud.saveCloud(u, { historico: merged, emAndamento: newest }, !remote.exists);
  }, []);

  // Acompanha o login no Firebase (só depois que o módulo é baixado).
  useEffect(() => {
    if (!watching) return;
    let unsub: (() => void) | undefined;
    let alive = true;
    loadCloudModule()
      .then((cloud) => {
        if (!alive) return;
        unsub = cloud.watchUser((u) => {
          userRef.current = u;
          setUser(u);
          if (!u) {
            setFlag(false);
            setStatus('off');
            return;
          }
          setFlag(true);
          setStatus('in');
          syncOnLogin(u).catch(() => setError('Não foi possível sincronizar agora. Seus dados continuam salvos neste navegador.'));
        });
      })
      .catch(() => {
        if (alive) setStatus('off');
      });
    return () => {
      alive = false;
      unsub?.();
    };
  }, [watching, syncOnLogin]);

  // Simulado em andamento: sobe para a conta quando o aluno sai da aba/app (não a cada clique).
  useEffect(() => {
    const push = () => {
      const u = userRef.current;
      if (!u || document.visibilityState !== 'hidden') return;
      const progress = loadProgress();
      const json = JSON.stringify(progress);
      if (json === lastProgressSent.current) return;
      lastProgressSent.current = json;
      loadCloudModule()
        .then((cloud) => cloud.saveCloud(u, { emAndamento: progress }))
        .catch(() => {});
    };
    document.addEventListener('visibilitychange', push);
    return () => document.removeEventListener('visibilitychange', push);
  }, []);

  const signIn = useCallback(async () => {
    setError(null);
    setStatus('loading');
    // Marca antes: no celular o login pode ir pela própria aba (redirect) e a página recarrega.
    setFlag(true);
    setWatching(true);
    try {
      const cloud = await loadCloudModule();
      await cloud.signInWithGoogle();
      // Janela fechada sem entrar: volta ao estado anterior (o login com sucesso já mudou o status).
      await new Promise((r) => setTimeout(r, 800));
      if (!userRef.current) setStatus('off');
    } catch {
      setStatus(userRef.current ? 'in' : 'off');
      setError('Não foi possível entrar com o Google. Tente de novo.');
    }
  }, []);

  const signOut = useCallback(async () => {
    const cloud = await loadCloudModule();
    await cloud.signOut();
    // Os dados ficam na conta. Limpa este navegador para o próximo aluno (computador compartilhado)
    // não herdar o histórico nem juntá-lo à conta dele.
    clearHistory();
    clearProgress();
    lastProgressSent.current = '';
    handlersRef.current.onHistory([]);
    handlersRef.current.onProgress(null);
  }, []);

  const deleteAccount = useCallback(async () => {
    const cloud = await loadCloudModule();
    await cloud.deleteAccount();
    setFlag(false);
    clearHistory();
    clearProgress();
    handlersRef.current.onHistory([]);
    handlersRef.current.onProgress(null);
  }, []);

  const pushHistory = useCallback((history: HistoryEntry[]) => {
    const u = userRef.current;
    if (!u) return;
    const progress = loadProgress();
    lastProgressSent.current = JSON.stringify(progress);
    loadCloudModule()
      .then((cloud) => cloud.saveCloud(u, { historico: history, emAndamento: progress }))
      .catch(() => setError('Não foi possível salvar na sua conta agora. O resultado ficou salvo neste navegador.'));
  }, []);

  return { status, user, error, signIn, signOut, deleteAccount, pushHistory };
}
