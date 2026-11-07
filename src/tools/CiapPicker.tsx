import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import { Loader2, Search, X } from 'lucide-react';
import { cn } from '../lib/utils';

/** Um problema escolhido: [CIAP-2, descrição CIAP-2, CID-10, descrição CID-10]. */
export type CiapEntry = [string, string, string, string];

const norm = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();

/** "R688" → "R68.8"; "I10" fica igual. */
export const fmtCid = (c: string) => (c.length > 3 ? `${c.slice(0, 3)}.${c.slice(3)}` : c);

const SIGLAS = new Set(['hiv', 'aids', 'sida', 'vih', 'dheg', 'ivas', 'ne', 'diu']);
/** "HIPERTENSÃO SEM COMPLICAÇÕES" → "Hipertensão sem complicações" (siglas mantidas). */
export const sentence = (s: string) => {
  const t = s
    .toLowerCase()
    .split(/(\s+|\/|\(|\))/)
    .map((w) => (SIGLAS.has(w) ? w.toUpperCase() : w))
    .join('');
  return t.charAt(0).toUpperCase() + t.slice(1);
};

export function readCiap(value: string | undefined): CiapEntry[] {
  try {
    const v = JSON.parse(value || '[]');
    return Array.isArray(v) ? v : [];
  } catch {
    return [];
  }
}

/** Texto para PDF e e-mail: uma linha por problema. */
export const ciapText = (value: string) =>
  readCiap(value)
    .map(([c, cd, i, id]) => `${c} — ${sentence(cd)} (CID-10 ${fmtCid(i)} — ${sentence(id)})`)
    .join('\n');

let cache: CiapEntry[] | null = null;
async function loadTable(): Promise<CiapEntry[]> {
  if (!cache) cache = (await import('./ciapData')).CIAP_CID;
  return cache;
}

/**
 * Busca na relação CIAP-2 × CID-10 do e-SUS APS por código (K86, I10, I10.0…) ou por texto
 * ("hipertensao", "dor lombar"), sem diferenciar acentos. Cada escolha guarda CIAP e CID juntos.
 */
export const CiapPicker: React.FC<{ id?: string; value: string; onChange: (v: string) => void }> = ({ id, value, onChange }) => {
  const listId = useId();
  const [table, setTable] = useState<CiapEntry[] | null>(cache);
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const wrap = useRef<HTMLDivElement>(null);
  const chosen = readCiap(value);

  const ensure = () => {
    if (!table) loadTable().then(setTable).catch(() => setTable([]));
  };

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => {
      if (!wrap.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [open]);

  const results = useMemo(() => {
    if (!table || q.trim().length < 2) return [];
    const nq = norm(q.trim()).replace('.', '');
    const words = nq.split(/\s+/).filter(Boolean);
    const scored: { e: CiapEntry; score: number }[] = [];
    for (const e of table) {
      if (chosen.some((c) => c[0] === e[0])) continue;
      const code = e[0].toLowerCase();
      const cid = e[2].toLowerCase();
      let score = 0;
      if (code === nq || cid === nq) score = 100;
      else if (code.startsWith(nq) || cid.startsWith(nq)) score = 80;
      else {
        const ciapDesc = norm(e[1]);
        const hay = `${ciapDesc} ${norm(e[3])}`;
        if (words.every((w) => hay.includes(w))) {
          if (ciapDesc.startsWith(nq)) score = 60; // "hipertensao" → Hipertensão sem complicações antes de "Medo de hipertensão"
          else if (words.every((w) => ciapDesc.includes(w))) score = 50;
          else score = 30;
        }
      }
      if (score) scored.push({ e, score });
    }
    return scored
      .sort((a, b) => b.score - a.score || a.e[0].localeCompare(b.e[0]))
      .slice(0, 8)
      .map((x) => x.e);
  }, [table, q, value]); // eslint-disable-line react-hooks/exhaustive-deps

  const add = (e: CiapEntry) => {
    onChange(JSON.stringify([...chosen, e]));
    setQ('');
    setActive(0);
  };
  const remove = (code: string) => onChange(JSON.stringify(chosen.filter((c) => c[0] !== code)));

  return (
    <div ref={wrap} className="relative">
      {chosen.length > 0 && (
        <ul className="mb-2 space-y-1.5">
          {chosen.map(([c, cd, i, id]) => (
            <li key={c} className="flex items-start gap-2 rounded-lg border border-line bg-white px-3 py-2 text-sm">
              <span className="px-1.5 py-0.5 rounded bg-primary-soft text-primary-ink font-mono text-xs font-bold shrink-0">{c}</span>
              <span className="flex-1 min-w-0">
                <span className="block text-ink">{sentence(cd)}</span>
                <span className="block text-xs text-muted">
                  CID-10 <span className="font-mono font-semibold text-ink-2">{fmtCid(i)}</span> — {sentence(id)}
                </span>
              </span>
              <button type="button" onClick={() => remove(c)} aria-label={`Remover ${c}`} className="text-muted hover:text-accent-coral shrink-0 mt-0.5">
                <X size={15} />
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="relative">
        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
        <input
          id={id}
          role="combobox"
          aria-expanded={open && results.length > 0}
          aria-controls={listId}
          aria-autocomplete="list"
          value={q}
          onFocus={() => {
            ensure();
            setOpen(true);
          }}
          onChange={(e) => {
            ensure();
            setQ(e.target.value);
            setOpen(true);
            setActive(0);
          }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown') {
              e.preventDefault();
              setActive((a) => Math.min(a + 1, results.length - 1));
            } else if (e.key === 'ArrowUp') {
              e.preventDefault();
              setActive((a) => Math.max(a - 1, 0));
            } else if (e.key === 'Enter' && results[active]) {
              e.preventDefault();
              add(results[active]);
            } else if (e.key === 'Escape') setOpen(false);
          }}
          placeholder="Buscar CIAP-2 ou CID-10 por código ou nome (ex.: K86, I10, lombalgia)"
          autoComplete="off"
          className="w-full rounded-lg border border-line bg-bg/60 pl-9 pr-9 py-2 text-sm text-ink placeholder:text-muted/60 hover:border-line-2 focus:bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition"
        />
        {open && !table && <Loader2 size={15} className="absolute right-3 top-1/2 -translate-y-1/2 animate-spin text-muted" />}
      </div>

      {open && q.trim().length >= 2 && table && (
        <ul
          id={listId}
          role="listbox"
          className="absolute z-40 left-0 right-0 mt-1 max-h-80 overflow-y-auto bg-white border border-line-2 rounded-xl shadow-[0_18px_40px_-18px_oklch(30%_0.06_160/0.35)] p-1"
        >
          {results.length === 0 ? (
            <li className="px-3 py-2.5 text-sm text-muted">Nada encontrado. Tente outro termo ou o código.</li>
          ) : (
            results.map((e, i) => (
              <li key={e[0]} role="option" aria-selected={i === active}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onClick={() => add(e)}
                  className={cn('w-full flex items-start gap-2.5 text-left px-3 py-2 rounded-lg', i === active && 'bg-bg-2')}
                >
                  <span className="px-1.5 py-0.5 rounded bg-primary-soft text-primary-ink font-mono text-xs font-bold shrink-0">{e[0]}</span>
                  <span className="min-w-0">
                    <span className="block text-sm text-ink">{sentence(e[1])}</span>
                    <span className="block text-xs text-muted">
                      CID-10 <span className="font-mono font-semibold text-ink-2">{fmtCid(e[2])}</span> — {sentence(e[3])}
                    </span>
                  </span>
                </button>
              </li>
            ))
          )}
        </ul>
      )}
      <p className="mt-1.5 text-[11px] text-muted">Relação CIAP-2 × CID-10 do e-SUS APS. Pode escolher mais de um problema.</p>
    </div>
  );
};
