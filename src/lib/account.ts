import { useCallback, useEffect, useRef, useState } from 'react';
import { clearHistory, loadHistory, mergeHistories, saveHistory, type HistoryEntry } from './history';
import { clearProgress, loadProgress, writeProgress, type SavedQuiz } from './progress';
import type { CloudUser } from './cloud';

/**
 * Conta opcional do aluno. O Firebase (cloud.ts) só é baixado quando o aluno toca em "Entrar"
 * ou se já entrou antes neste navegador (marcado em FLAG).
 */
const FLAG = 'desimulados:conta';
/** De qual conta são os dados guardados neste navegador (evita juntar o histórico de outro aluno). */
const OWNER = 'desimulados:dono';
type CloudModule = typeof import('./cloud');
/** Módulo já baixado: o login precisa abrir a janela direto no toque, sem esperar download. */
let cloudModule: CloudModule | null = null;
const loadCloudModule = (): Promise<CloudModule> =>
  cloudModule
    ? Promise.resolve(cloudModule)
    : import('./cloud').then((m) => {
        cloudModule = m;
        return m;
      });

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
  /** Aluno apagou o histórico: apaga também na conta e impede que volte de outros aparelhos. */
  clearCloudHistory: () => void;
  /** Baixa o Firebase antes do clique (em segundo plano, depois que a página abre). */
  prefetch: () => void;
}

const get = (k: string) => {
  try {
    return localStorage.getItem(k);
  } catch {
    return null;
  }
};
const set = (k: string, v: string | null) => {
  try {
    if (v === null) localStorage.removeItem(k);
    else localStorage.setItem(k, v);
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
  const [status, setStatus] = useState<AccountStatus>(() => (get(FLAG) ? 'loading' : 'off'));
  const [user, setUser] = useState<CloudUser | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [watching, setWatching] = useState(() => !!get(FLAG));
  const userRef = useRef<CloudUser | null>(null);
  const signingIn = useRef(false);
  const handlersRef = useRef(handlers);
  handlersRef.current = handlers;
  /** Último simulado em andamento confirmado na conta (para não regravar o mesmo). */
  const lastProgressSent = useRef<string>('');

  const forgetLocal = useCallback(() => {
    clearHistory();
    clearProgress();
    lastProgressSent.current = '';
    handlersRef.current.onHistory([]);
    handlersRef.current.onProgress(null);
  }, []);

  // Ao entrar (ou ao abrir o site já logado): junta os dados deste navegador com os da conta.
  const syncOnLogin = useCallback(
    async (u: CloudUser) => {
      const cloud = await loadCloudModule();
      const remote = await cloud.loadCloud(u.uid);

      // Dados locais de outra conta (mesmo aparelho): não sobem para esta.
      const owner = get(OWNER);
      if (owner && owner !== u.uid) forgetLocal();
      set(OWNER, u.uid);

      // O que foi apagado (limpoEm) não volta de outro aparelho.
      const fresh = (list: HistoryEntry[]) => list.filter((e) => e.at > remote.limpoEm);
      const merged = mergeHistories(fresh(remote.historico), fresh(loadHistory()));
      saveHistory(merged);
      handlersRef.current.onHistory(merged);

      // Simulado em andamento: vale o mais recente. Se o local já foi entregue em outro aparelho
      // (há resultado na conta posterior a ele), descarta.
      let local = loadProgress();
      if (local && !remote.emAndamento && remote.historico.some((e) => e.at >= local!.savedAt)) {
        clearProgress();
        local = null;
      }
      const newest =
        [local, remote.emAndamento]
          .filter((p): p is SavedQuiz => !!p)
          .sort((a, b) => b.savedAt - a.savedAt)[0] ?? null;
      if (JSON.stringify(newest) !== JSON.stringify(local)) {
        if (newest) writeProgress(newest);
        else clearProgress();
      }
      handlersRef.current.onProgress(newest ? loadProgress() : null);

      // Só grava se algo mudou (plano gratuito: poucas gravações).
      const changed =
        !remote.exists ||
        merged.length !== remote.historico.length ||
        JSON.stringify(newest) !== JSON.stringify(remote.emAndamento);
      if (changed) await cloud.saveCloud(u, { historico: merged, emAndamento: newest }, !remote.exists);
      lastProgressSent.current = JSON.stringify(newest);
    },
    [forgetLocal]
  );

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
            // Durante o login por janela, o primeiro aviso é "ninguém logado": mantém o carregando.
            if (signingIn.current) return;
            set(FLAG, null);
            setStatus('off');
            return;
          }
          signingIn.current = false;
          set(FLAG, '1');
          setStatus('in');
          setError(null);
          syncOnLogin(u).catch(() =>
            setError('Não foi possível sincronizar agora. Seus dados continuam salvos neste navegador.')
          );
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
      loadCloudModule()
        .then((cloud) => cloud.saveCloud(u, { emAndamento: progress }))
        .then(() => {
          lastProgressSent.current = json; // só marca como enviado se deu certo
        })
        .catch(() => {});
    };
    document.addEventListener('visibilitychange', push);
    return () => document.removeEventListener('visibilitychange', push);
  }, []);

  const prefetch = useCallback(() => {
    loadCloudModule().catch(() => {});
  }, []);

  const signIn = useCallback(async () => {
    // Abre a janela do Google já no toque (se o módulo ainda não chegou, baixa e tenta mesmo assim).
    const pending = cloudModule ? cloudModule.signInWithGoogle() : loadCloudModule().then((m) => m.signInWithGoogle());
    setError(null);
    setStatus('loading');
    signingIn.current = true;
    setWatching(true);
    try {
      await pending;
      // Janela fechada sem entrar: volta ao estado anterior (o login com sucesso já mudou o status).
      await new Promise((r) => setTimeout(r, 800));
      if (!userRef.current) {
        signingIn.current = false;
        set(FLAG, null);
        setStatus('off');
      }
    } catch (err) {
      signingIn.current = false;
      if (!userRef.current) set(FLAG, null);
      setStatus(userRef.current ? 'in' : 'off');
      setError(
        (err as { code?: string }).code === 'auth/popup-blocked'
          ? 'O navegador bloqueou a janela do Google. Toque em "Entrar com Google" de novo.'
          : 'Não foi possível entrar com o Google. Tente de novo.'
      );
    }
  }, []);

  const signOut = useCallback(async () => {
    const cloud = await loadCloudModule();
    await cloud.signOut();
    // Os dados ficam na conta. Limpa este navegador para o próximo aluno (computador compartilhado).
    set(OWNER, null);
    forgetLocal();
  }, [forgetLocal]);

  const deleteAccount = useCallback(async () => {
    // Mesma regra do login: a confirmação da conta abre janela, então chama direto se já houver módulo.
    await (cloudModule ? cloudModule.deleteAccount() : loadCloudModule().then((m) => m.deleteAccount()));
    set(FLAG, null);
    set(OWNER, null);
    forgetLocal();
  }, [forgetLocal]);

  const pushHistory = useCallback((history: HistoryEntry[]) => {
    const u = userRef.current;
    if (!u) return;
    const progress = loadProgress();
    loadCloudModule()
      .then((cloud) => cloud.saveCloud(u, { historico: history, emAndamento: progress }))
      .then(() => {
        lastProgressSent.current = JSON.stringify(progress);
      })
      .catch(() => setError('Não foi possível salvar na sua conta agora. O resultado ficou salvo neste navegador.'));
  }, []);

  const clearCloudHistory = useCallback(() => {
    const u = userRef.current;
    if (!u) return;
    loadCloudModule()
      .then((cloud) => cloud.saveCloud(u, { historico: [], limpoEm: Date.now() }))
      .catch(() => setError('Não foi possível apagar o histórico da sua conta agora. Tente de novo.'));
  }, []);

  return { status, user, error, signIn, signOut, deleteAccount, pushHistory, clearCloudHistory, prefetch };
}
