/**
 * Página própria para os links que o Firebase manda por e-mail
 * (confirmar e-mail, redefinir senha, desfazer troca de e-mail).
 *
 * O Firebase acrescenta ?mode=...&oobCode=... à "URL de ação" configurada no console
 * (Authentication → Modelos → Personalizar URL de ação → https://www.desimulados.com.br/).
 * Aqui usamos a configuração do próprio app, então o link funciona mesmo que o
 * e-mail venha com o parâmetro apiKey vazio.
 */
import React, { useEffect, useState } from 'react';
import { CheckCircle2, KeyRound, Loader2, XCircle } from 'lucide-react';
import {
  applyActionCode,
  checkActionCode,
  confirmPasswordReset,
  verifyPasswordResetCode,
} from 'firebase/auth';
import { auth } from './firebase';
import { Brand } from '../components/Brand';

export interface AuthActionParams {
  mode: string;
  oobCode: string;
}

function actionError(err: unknown): string {
  const code = (err as { code?: string })?.code ?? '';
  if (code === 'auth/expired-action-code')
    return 'Este link expirou. Peça um novo e-mail e use o link mais recente.';
  if (code === 'auth/invalid-action-code')
    return 'Este link já foi usado ou não é mais válido. Se você já confirmou, é só entrar normalmente.';
  if (code === 'auth/user-disabled') return 'Esta conta está desativada.';
  if (code === 'auth/user-not-found') return 'Não encontramos a conta deste link.';
  if (code === 'auth/weak-password') return 'A senha precisa ter pelo menos 6 caracteres.';
  if (code === 'auth/network-request-failed') return 'Sem conexão com a internet. Tente de novo.';
  return 'Não foi possível concluir. Tente abrir o link de novo.';
}

type Status =
  | { kind: 'loading' }
  | { kind: 'done'; title: string; text: string }
  | { kind: 'error'; text: string }
  | { kind: 'reset'; email: string };

export const AuthAction: React.FC<{
  params: AuthActionParams;
  onTools: () => void;
  onHome: () => void;
}> = ({ params, onTools, onHome }) => {
  const [status, setStatus] = useState<Status>({ kind: 'loading' });
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    let alive = true;
    const set = (s: Status) => alive && setStatus(s);
    const { mode, oobCode } = params;

    (async () => {
      try {
        if (mode === 'verifyEmail' || mode === 'verifyAndChangeEmail') {
          await applyActionCode(auth, oobCode);
          // Se o aluno estiver logado neste navegador, atualiza o status na hora.
          await auth.currentUser?.reload().catch(() => undefined);
          set({
            kind: 'done',
            title: mode === 'verifyEmail' ? 'E-mail confirmado!' : 'E-mail alterado!',
            text:
              mode === 'verifyEmail'
                ? 'Sua conta está verificada. Já pode usar as ferramentas normalmente.'
                : 'Seu novo e-mail já está valendo para entrar.',
          });
        } else if (mode === 'resetPassword') {
          const email = await verifyPasswordResetCode(auth, oobCode);
          set({ kind: 'reset', email });
        } else if (mode === 'recoverEmail') {
          const info = await checkActionCode(auth, oobCode);
          await applyActionCode(auth, oobCode);
          set({
            kind: 'done',
            title: 'E-mail restaurado',
            text: `O e-mail da conta voltou a ser ${info.data.email ?? 'o anterior'}. Se não foi você quem pediu a troca, redefina sua senha.`,
          });
        } else {
          set({ kind: 'error', text: 'Este link não é reconhecido pelo DEsimulados.' });
        }
      } catch (err) {
        set({ kind: 'error', text: actionError(err) });
      }
    })();

    return () => {
      alive = false;
    };
  }, [params]);

  const submitReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    if (password.length < 6) {
      setFormError('A senha precisa ter pelo menos 6 caracteres.');
      return;
    }
    setBusy(true);
    try {
      await confirmPasswordReset(auth, params.oobCode, password);
      setStatus({ kind: 'done', title: 'Senha redefinida!', text: 'Entre com a nova senha.' });
    } catch (err) {
      setFormError(actionError(err));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <header className="border-b border-line bg-white">
        <div className="container-custom py-3">
          <Brand onClick={onHome} size="sm" />
        </div>
      </header>

      <main className="flex-1 flex items-start justify-center px-4 pt-16 pb-24">
        <div className="w-full max-w-sm rounded-2xl border border-line bg-white p-7 shadow-sm text-center">
          {status.kind === 'loading' && (
            <div className="py-8 flex flex-col items-center gap-3 text-muted text-sm">
              <Loader2 size={28} className="animate-spin text-primary" />
              Conferindo o link…
            </div>
          )}

          {status.kind === 'done' && (
            <>
              <CheckCircle2 size={40} className="mx-auto text-primary" />
              <h1 className="mt-4 font-heading text-xl font-bold text-ink">{status.title}</h1>
              <p className="mt-2 text-sm text-ink-2">{status.text}</p>
              <button type="button" onClick={onTools} className="btn btn-primary mt-6 w-full">
                Abrir Outras ferramentas
              </button>
              <button type="button" onClick={onHome} className="mt-3 text-sm font-semibold text-muted hover:text-ink">
                Ir para os simulados
              </button>
            </>
          )}

          {status.kind === 'error' && (
            <>
              <XCircle size={40} className="mx-auto text-accent-coral" />
              <h1 className="mt-4 font-heading text-xl font-bold text-ink">Não deu certo</h1>
              <p className="mt-2 text-sm text-ink-2">{status.text}</p>
              <button type="button" onClick={onTools} className="btn btn-primary mt-6 w-full">
                Entrar na minha conta
              </button>
            </>
          )}

          {status.kind === 'reset' && (
            <form onSubmit={submitReset} className="text-left">
              <KeyRound size={36} className="mx-auto text-primary" />
              <h1 className="mt-4 text-center font-heading text-xl font-bold text-ink">Nova senha</h1>
              <p className="mt-2 text-center text-sm text-ink-2">
                Para a conta <strong className="text-ink">{status.email}</strong>
              </p>
              <input
                type="password"
                autoComplete="new-password"
                autoFocus
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mínimo de 6 caracteres"
                className="mt-5 w-full rounded-lg border border-line-2 bg-white px-3 py-2 text-[15px] text-ink placeholder:text-muted/70 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
              />
              {formError && <p className="mt-2 text-xs text-accent-coral">{formError}</p>}
              <button type="submit" disabled={busy} className="btn btn-primary mt-5 w-full disabled:opacity-60">
                {busy ? <Loader2 size={16} className="animate-spin" /> : 'Salvar nova senha'}
              </button>
            </form>
          )}
        </div>
      </main>
    </div>
  );
};
