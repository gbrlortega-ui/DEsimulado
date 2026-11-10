import React, { useEffect, useRef, useState } from 'react';
import { Cloud, LogOut, ShieldCheck, Trash2 } from 'lucide-react';
import type { Account } from '../lib/account';
import { cn } from '../lib/utils';

/** Logo do Google (marca oficial em cores) para o botão "Entrar com Google". */
export const GoogleIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden>
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
    <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
  </svg>
);

interface AccountMenuProps {
  account: Account;
  onPrivacy: () => void;
}

/** Topo da página: "Entrar" para quem não tem conta; menu da conta para quem entrou. */
export const AccountMenu: React.FC<AccountMenuProps> = ({ account, onPrivacy }) => {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const { status, user } = account;

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent ? e.key === 'Escape' : !box.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    document.addEventListener('keydown', close);
    return () => {
      document.removeEventListener('mousedown', close);
      document.removeEventListener('keydown', close);
    };
  }, [open]);

  if (status !== 'in' || !user) {
    return (
      <button
        type="button"
        onClick={account.signIn}
        onPointerEnter={account.prefetch}
        onFocus={account.prefetch}
        disabled={status === 'loading'}
        className="flex items-center gap-2 text-[13px] sm:text-sm font-semibold px-2.5 sm:px-3.5 py-2 rounded-lg border border-line-2 bg-white text-ink hover:border-ink/30 transition-colors whitespace-nowrap disabled:opacity-60"
      >
        {status === 'loading' ? (
          <span className="w-4 h-4 rounded-full border-2 border-primary border-t-transparent animate-spin" aria-hidden />
        ) : (
          <GoogleIcon size={16} />
        )}
        Entrar
      </button>
    );
  }

  const remove = async () => {
    const ok = window.confirm(
      'Excluir sua conta e todos os seus dados (histórico e simulado em andamento)? Isso não pode ser desfeito.'
    );
    if (!ok) return;
    setBusy(true);
    try {
      await account.deleteAccount();
      setOpen(false);
      window.alert('Sua conta e seus dados foram excluídos.');
    } catch (err) {
      window.alert(
        (err as { code?: string }).code === 'auth/requires-recent-login'
          ? 'Por segurança, o Google pede um login recente: toque em "Sair", entre de novo e repita a exclusão logo em seguida.'
          : 'Não foi possível excluir agora. Tente de novo ou escreva para gbrl.ortega@hotmail.com.'
      );
    } finally {
      setBusy(false);
    }
  };

  const initial = user.name.trim().charAt(0).toUpperCase() || '?';

  return (
    <div ref={box} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={`Sua conta: ${user.name}`}
        className="flex items-center gap-2 rounded-full pl-1 pr-1 sm:pr-3 py-1 border border-line-2 bg-white hover:border-ink/30 transition-colors"
      >
        {user.photo ? (
          <img src={user.photo} alt="" referrerPolicy="no-referrer" className="w-7 h-7 rounded-full" />
        ) : (
          <span className="w-7 h-7 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">{initial}</span>
        )}
        <span className="hidden sm:inline text-sm font-semibold text-ink max-w-32 truncate">{user.name.split(' ')[0]}</span>
      </button>

      {open && (
        <div role="menu" className="absolute right-0 mt-2 w-72 rounded-xl border border-line bg-white shadow-xl p-2 z-50">
          <div className="px-3 py-2.5">
            <p className="font-semibold text-ink truncate">{user.name}</p>
            <p className="text-xs text-muted truncate">{user.email}</p>
            <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-primary-ink">
              <Cloud size={14} aria-hidden />
              Histórico salvo na sua conta
            </p>
          </div>
          <div className="h-px bg-line my-1" />
          {[
            { label: 'Política de privacidade', Icon: ShieldCheck, onClick: () => { setOpen(false); onPrivacy(); } },
            { label: 'Sair', Icon: LogOut, onClick: () => { setOpen(false); account.signOut(); } },
            { label: busy ? 'Excluindo…' : 'Excluir minha conta e meus dados', Icon: Trash2, onClick: remove, danger: true },
          ].map(({ label, Icon, onClick, danger }) => (
            <button
              key={label}
              type="button"
              role="menuitem"
              onClick={onClick}
              disabled={busy}
              className={cn(
                'w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-left hover:bg-bg-2 transition-colors',
                danger ? 'text-accent-coral' : 'text-ink'
              )}
            >
              <Icon size={16} aria-hidden />
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

/** Convite para criar conta: "Cadastre-se para salvar seu histórico". */
export const SaveHistoryCta: React.FC<{ account: Account; compact?: boolean }> = ({ account, compact }) => {
  if (account.status === 'in') return null;
  const loading = account.status === 'loading';
  return (
    <div
      className={cn(
        'flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 rounded-2xl border border-primary/30 bg-primary-soft',
        compact ? 'px-4 py-3.5' : 'px-5 py-4'
      )}
    >
      <Cloud className="hidden sm:block w-7 h-7 text-primary-ink shrink-0" aria-hidden />
      <div className="flex-1">
        <p className="font-semibold text-ink">Cadastre-se para salvar seu histórico</p>
        <p className="text-sm text-ink-2 mt-0.5">
          Entre com o Google e continue de onde parou em qualquer aparelho. É grátis e leva um toque.
        </p>
        {account.error && <p className="text-sm text-accent-coral mt-1">{account.error}</p>}
      </div>
      <button
        type="button"
        onClick={account.signIn}
        onPointerEnter={account.prefetch}
        onFocus={account.prefetch}
        disabled={loading}
        className="btn bg-white border border-line-2 text-ink hover:border-ink/30 shrink-0 disabled:opacity-60"
      >
        {loading ? (
          <span className="w-4 h-4 rounded-full border-2 border-primary border-t-transparent animate-spin" aria-hidden />
        ) : (
          <GoogleIcon />
        )}
        Entrar com Google
      </button>
    </div>
  );
};
