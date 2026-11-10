import React, { useState } from 'react';
import { ChevronLeft, Check, Lock } from 'lucide-react';
import { Brand } from './Brand';
import { QuizSettings } from '../types';
import { TOPOGRAPHY, findTopographyGroup } from '../data/topografia';
import { TOPOGRAPHY_COUNT } from '../data/topografiaPool';
import { cn } from '../lib/utils';

interface TopographySetupProps {
  onBack: () => void;
  onHome: () => void;
  onStart: (settings: QuizSettings) => void;
}

const fmt = (n: number) => n.toLocaleString('pt-BR');
const COUNTS = [10, 20, 30, 40, 50];

export const TopographySetup: React.FC<TopographySetupProps> = ({ onBack, onHome, onStart }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [count, setCount] = useState<number | 'all'>('all');
  const [feedback, setFeedback] = useState(true);

  const available = TOPOGRAPHY.flatMap((r) => r.groups).filter((g) => (TOPOGRAPHY_COUNT[g.id] ?? 0) > 0).length;
  const pool = selected ? TOPOGRAPHY_COUNT[selected] ?? 0 : 0;
  const chips = COUNTS.filter((c) => c < pool);
  const total = count === 'all' || count > pool ? pool : count;
  const group = findTopographyGroup(selected ?? undefined);

  const pick = (id: string) => {
    setSelected(id);
    const n = TOPOGRAPHY_COUNT[id] ?? 0;
    setCount(n > 20 ? 20 : 'all');
  };

  return (
    <div className="min-h-screen bg-bg">
      <header className="sticky top-0 z-40 bg-bg/85 backdrop-blur-md border-b border-line">
        <div className="container-custom h-16 flex items-center justify-between">
          <Brand onClick={onHome} />
          <button onClick={onBack} className="text-sm font-semibold text-muted hover:text-ink transition-colors flex items-center gap-1">
            <ChevronLeft size={16} />
            Voltar
          </button>
        </div>
      </header>

      <main className={cn('max-w-3xl mx-auto px-4 sm:px-6 pt-10', selected ? 'pb-72 sm:pb-56' : 'pb-16')}>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.03em]">Simulado por topografia</h1>
        <p className="mt-3 text-ink-2 text-lg">
          Estude por região do corpo: escolha a especialidade e responda só questões dela.
        </p>
        <p className="mt-2 text-sm text-muted">
          {available === 0
            ? 'As especialidades estão sendo preparadas e serão liberadas aos poucos.'
            : `${available} de ${TOPOGRAPHY.flatMap((r) => r.groups).length} especialidades já disponíveis; as demais serão liberadas aos poucos.`}
        </p>

        <div className="mt-10 space-y-10">
          {TOPOGRAPHY.map((region) => (
            <section key={region.id}>
              <h2 className="text-xl font-extrabold">
                <span className="text-muted tabular-nums mr-2">{region.id}.</span>
                {region.name}
              </h2>
              <div className="mt-3 space-y-2">
                {region.groups.map((g) => {
                  const n = TOPOGRAPHY_COUNT[g.id] ?? 0;
                  const open = n > 0;
                  const active = selected === g.id;
                  return (
                    <button
                      key={g.id}
                      type="button"
                      disabled={!open}
                      aria-pressed={active}
                      onClick={() => pick(g.id)}
                      className={cn(
                        'w-full flex items-start justify-between gap-4 px-4 py-3.5 rounded-xl border text-left transition-colors',
                        active
                          ? 'border-primary bg-primary-soft'
                          : open
                          ? 'border-line bg-white hover:border-line-2'
                          : 'border-line bg-bg-2/60 cursor-not-allowed'
                      )}
                    >
                      <span className="min-w-0">
                        <span className={cn('block font-semibold', active ? 'text-primary-ink' : open ? 'text-ink' : 'text-muted')}>
                          {g.id !== region.id && <span className="tabular-nums mr-1.5">{g.id}</span>}
                          {g.name}
                        </span>
                        <span className="block text-xs text-muted mt-1 leading-relaxed line-clamp-2">
                          {g.topics.map((t) => t.name).join(' · ')}
                        </span>
                      </span>
                      <span className="shrink-0 flex items-center gap-2 pt-0.5">
                        {open ? (
                          <>
                            <span className="text-xs text-muted tabular-nums whitespace-nowrap">{fmt(n)} questões</span>
                            <span
                              className={cn(
                                'w-5 h-5 rounded-full border flex items-center justify-center',
                                active ? 'bg-primary border-primary text-white' : 'border-line-2'
                              )}
                            >
                              {active && <Check size={12} strokeWidth={3} />}
                            </span>
                          </>
                        ) : (
                          <span className="flex items-center gap-1 text-xs font-medium text-muted whitespace-nowrap">
                            <Lock size={12} aria-hidden />
                            Em breve
                          </span>
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </main>

      {selected && group && (
        <div className="fixed bottom-0 inset-x-0 z-40 bg-white border-t border-line shadow-[0_-12px_32px_-20px_oklch(30%_0.06_160/0.4)]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold text-ink mr-1">Questões:</span>
              {chips.map((c) => (
                <button
                  key={c}
                  type="button"
                  aria-pressed={count === c}
                  onClick={() => setCount(c)}
                  className={cn(
                    'px-3 py-1.5 rounded-lg border text-sm font-heading font-bold tabular-nums',
                    count === c ? 'bg-ink border-ink text-white' : 'bg-white border-line text-ink'
                  )}
                >
                  {c}
                </button>
              ))}
              <button
                type="button"
                aria-pressed={count === 'all'}
                onClick={() => setCount('all')}
                className={cn(
                  'px-3 py-1.5 rounded-lg border text-sm font-semibold',
                  count === 'all' ? 'bg-ink border-ink text-white' : 'bg-white border-line text-ink'
                )}
              >
                Todas ({fmt(pool)})
              </button>
            </div>
            <label className="flex items-center gap-2.5 text-sm text-ink-2 cursor-pointer select-none">
              <input type="checkbox" checked={feedback} onChange={(e) => setFeedback(e.target.checked)} className="w-4 h-4 accent-[var(--color-primary)]" />
              Mostrar o gabarito ao responder cada questão
            </label>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p className="text-ink-2 text-sm">
                <span className="font-semibold text-ink">{total} questões de {group.name}</span>, sorteadas entre {fmt(pool)}.
              </p>
              <button
                type="button"
                onClick={() => onStart({ questionCount: total, module: 'Misto', immediateFeedback: feedback, topography: group.id })}
                className="btn btn-primary sm:px-8"
              >
                Começar simulado
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
