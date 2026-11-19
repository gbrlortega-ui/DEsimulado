import React from 'react';
import { cn } from '../lib/utils';

/** Cabeçalho flutuante (pílula translúcida) usado nas telas internas. */
export const FloatingHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <header className="sticky top-0 z-40 pt-3 px-3 sm:px-4">
    <div
      className={cn(
        'max-w-6xl mx-auto h-14 pl-4 pr-2 flex items-center justify-between gap-3 rounded-full bg-white/70 backdrop-blur-xl border border-white shadow-[0_10px_30px_-18px_oklch(30%_0.06_200/0.4),0_0_0_1px_oklch(92%_0.01_165)]',
        className
      )}
    >
      {children}
    </div>
  </header>
);

/** Botão discreto do cabeçalho (Voltar, Início). */
export const headerLink =
  'text-sm font-semibold text-ink-2 hover:text-ink hover:bg-bg-2 px-3.5 py-2 rounded-full transition-colors flex items-center gap-1.5';

/** Brilhos verde, violeta e lima no topo da página. */
export const PageGlow: React.FC = () => (
  <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] overflow-hidden">
    <div className="absolute -top-40 -left-32 w-[32rem] h-[32rem] rounded-full bg-primary/20 blur-3xl" />
    <div className="absolute -top-20 -right-32 w-[30rem] h-[30rem] rounded-full bg-violet/15 blur-3xl" />
    <div className="absolute top-40 left-1/2 w-[22rem] h-[22rem] rounded-full bg-lime/25 blur-3xl" />
  </div>
);
