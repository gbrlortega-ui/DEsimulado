import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ClipboardList, NotebookPen, Stethoscope } from 'lucide-react';
import { cn } from '../lib/utils';
import { TOOLS, TOOL_ORDER, type ToolKind } from './forms';

const ICONS: Record<ToolKind, React.ElementType> = {
  anamnese: Stethoscope,
  soap: ClipboardList,
  portfolio: NotebookPen,
};

/** Botão "Outras ferramentas" da testeira, com a aba que se abre abaixo. */
export const ToolsMenu: React.FC<{ onOpen: (kind: ToolKind) => void }> = ({ onOpen }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent ? e.key === 'Escape' : !ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    document.addEventListener('keydown', close);
    return () => {
      document.removeEventListener('mousedown', close);
      document.removeEventListener('keydown', close);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="menu"
        className={cn(
          'flex items-center gap-0.5 sm:gap-1 text-[13px] sm:text-sm font-semibold px-2.5 sm:px-4 py-2 rounded-lg border transition-colors whitespace-nowrap',
          open ? 'bg-primary-soft border-primary/40 text-primary-ink' : 'bg-white border-line-2 text-ink hover:border-ink/30',
        )}
      >
        <span className="hidden sm:inline">Outras ferramentas</span>
        <span className="sm:hidden">Ferramentas</span>
        <ChevronDown size={15} className={cn('shrink-0 transition-transform max-[379px]:hidden', open && 'rotate-180')} />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-[min(19rem,calc(100vw-2rem))] bg-white border border-line-2 rounded-xl shadow-[0_18px_40px_-18px_oklch(30%_0.06_160/0.35)] p-1.5 z-50"
        >
          {TOOL_ORDER.map((k) => {
            const Icon = ICONS[k];
            return (
              <button
                key={k}
                type="button"
                role="menuitem"
                onClick={() => {
                  setOpen(false);
                  onOpen(k);
                }}
                className="w-full flex items-start gap-3 text-left px-3 py-2.5 rounded-lg hover:bg-bg-2 transition-colors"
              >
                <span className="w-8 h-8 rounded-lg bg-primary-soft text-primary-ink flex items-center justify-center shrink-0">
                  <Icon size={16} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">{TOOLS[k].label}</span>
                  <span className="block text-xs text-muted leading-snug mt-0.5">{TOOLS[k].description}</span>
                </span>
              </button>
            );
          })}
          <p className="px-3 pt-2 pb-1.5 mt-1 border-t border-line text-[11px] text-muted">Requer cadastro gratuito com e-mail e senha.</p>
        </div>
      )}
    </div>
  );
};

export { ICONS as TOOL_ICONS };
