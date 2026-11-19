import React, { useState } from 'react';
import { ChevronLeft, Check, Lock } from 'lucide-react';
import { Brand } from './Brand';
import { FloatingHeader, PageGlow, headerLink } from './PageChrome';
import { QuizSettings } from '../types';
import { TOPOGRAPHY, findTopographyGroup } from '../data/topografia';
import { TOPIC_COUNT, TOPOGRAPHY_COUNT } from '../data/resumo';
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
  /** Assuntos marcados; vazio = todos os assuntos da especialidade. */
  const [topics, setTopics] = useState<string[]>([]);

  const available = TOPOGRAPHY.flatMap((r) => r.groups).filter((g) => (TOPOGRAPHY_COUNT[g.id] ?? 0) > 0).length;
  const pool = !selected
    ? 0
    : topics.length
    ? topics.reduce((s, t) => s + (TOPIC_COUNT[`${selected}|${t}`] ?? 0), 0)
    : TOPOGRAPHY_COUNT[selected] ?? 0;
  const chips = COUNTS.filter((c) => c < pool);
  const total = count === 'all' || count > pool ? pool : count;
  const group = findTopographyGroup(selected ?? undefined);

  const pick = (id: string) => {
    if (id === selected) return;
    setSelected(id);
    setTopics([]);
    const n = TOPOGRAPHY_COUNT[id] ?? 0;
    setCount(n > 20 ? 20 : 'all');
  };

  const toggleTopic = (t: string) =>
    setTopics((cur) => (cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t]));

  return (
    <div className="relative min-h-screen bg-bg overflow-x-clip">
      <PageGlow />
      <FloatingHeader className="max-w-3xl">
        <Brand onClick={onHome} />
        <button onClick={onBack} className={headerLink}>
          <ChevronLeft size={16} />
          Voltar
        </button>
      </FloatingHeader>

      <main className={cn('relative max-w-3xl mx-auto px-4 sm:px-6 pt-10', selected ? 'pb-80 sm:pb-64' : 'pb-16')}>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.04em]">
          Simulado por <span className="text-gradient">topografia</span>
        </h1>
        <p className="mt-3 text-ink-2 text-lg">
          Estude por região do corpo: escolha a especialidade e responda só questões dela.
        </p>
        <p className="mt-3 inline-flex rounded-full bg-white/80 border border-white px-3.5 py-1.5 text-sm text-ink-2 shadow-[0_6px_20px_-12px_oklch(30%_0.06_200/0.5)]">
          {available === 0
            ? 'As especialidades estão sendo preparadas e serão liberadas aos poucos.'
            : `${available} de ${TOPOGRAPHY.flatMap((r) => r.groups).length} especialidades já disponíveis; as demais serão liberadas aos poucos.`}
        </p>

        <div className="mt-10 space-y-10">
          {TOPOGRAPHY.map((region) => (
            <section key={region.id}>
              <h2 className="text-xl sm:text-2xl font-extrabold flex items-center gap-3">
                <span
                  className={cn(
                    'w-9 h-9 rounded-xl font-heading text-sm font-extrabold flex items-center justify-center shrink-0 tabular-nums',
                    ['bg-primary text-white -rotate-6', 'bg-lime text-ink rotate-3', 'bg-violet text-white -rotate-3', 'bg-ink text-white rotate-6'][(Number(region.id) - 1) % 4] ?? 'bg-ink text-white'
                  )}
                >
                  {region.id}
                </span>
                {region.name}
              </h2>
              <div className="mt-3 space-y-2">
                {region.groups.map((g) => {
                  const n = TOPOGRAPHY_COUNT[g.id] ?? 0;
                  const open = n > 0;
                  const active = selected === g.id;
                  return (
                    <div key={g.id}>
                    <button
                      type="button"
                      disabled={!open}
                      aria-pressed={active}
                      onClick={() => pick(g.id)}
                      className={cn(
                        'w-full flex items-start justify-between gap-4 px-4 sm:px-5 py-4 rounded-[1.25rem] border-[1.5px] text-left transition-all',
                        active
                          ? 'border-primary bg-primary-soft shadow-[0_0_0_4px_oklch(68%_0.2_160/0.14)]'
                          : open
                          ? 'border-line bg-white hover:border-ink/15 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-22px_oklch(30%_0.08_200/0.6)]'
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
                                'w-6 h-6 rounded-full border-[1.5px] flex items-center justify-center',
                                active ? 'bg-lime border-lime text-ink' : 'border-line-2'
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
                    {active && (
                      <div className="mt-2 rounded-[1.25rem] border border-line bg-white px-4 sm:px-5 py-4">
                        <p className="text-sm font-semibold text-ink">Assuntos</p>
                        <p className="text-xs text-muted mt-0.5">Marque os que quer treinar. Sem nenhum marcado, entram todos.</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          <button
                            type="button"
                            aria-pressed={topics.length === 0}
                            onClick={() => setTopics([])}
                            className={cn(
                              'px-3.5 py-1.5 rounded-full border-[1.5px] text-sm font-semibold transition-all',
                              topics.length === 0 ? 'bg-ink border-ink text-white' : 'bg-white border-line text-ink hover:border-ink/25'
                            )}
                          >
                            Todos
                          </button>
                          {g.topics.map((t) => {
                            const tn = TOPIC_COUNT[`${g.id}|${t.name}`] ?? 0;
                            const on = topics.includes(t.name);
                            return (
                              <button
                                key={t.name}
                                type="button"
                                disabled={tn === 0}
                                aria-pressed={on}
                                title={t.points}
                                onClick={() => toggleTopic(t.name)}
                                className={cn(
                                  'px-3.5 py-1.5 rounded-full border-[1.5px] text-sm transition-all',
                                  on
                                    ? 'bg-ink border-ink text-white font-semibold'
                                    : tn > 0
                                    ? 'bg-white border-line text-ink hover:border-primary'
                                    : 'bg-bg-2/60 border-line text-muted cursor-not-allowed'
                                )}
                              >
                                {t.name}
                                <span className={cn('ml-1.5 text-xs tabular-nums', on ? 'text-white/80' : 'text-muted')}>{tn > 0 ? tn : 'em breve'}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </main>

      {selected && group && (
        <div className="fixed bottom-3 inset-x-3 z-40">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 space-y-3 rounded-[1.75rem] bg-ink text-white shadow-[0_20px_40px_-18px_oklch(20%_0.03_200/0.7)]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold text-white mr-1">Questões:</span>
              {chips.map((c) => (
                <button
                  key={c}
                  type="button"
                  aria-pressed={count === c}
                  onClick={() => setCount(c)}
                  className={cn(
                    'px-3.5 py-1.5 rounded-full border text-sm font-heading font-bold tabular-nums transition-colors',
                    count === c ? 'bg-lime border-lime text-ink' : 'bg-white/10 border-white/15 text-white hover:bg-white/20'
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
                  'px-3.5 py-1.5 rounded-full border text-sm font-semibold transition-colors',
                  count === 'all' ? 'bg-lime border-lime text-ink' : 'bg-white/10 border-white/15 text-white hover:bg-white/20'
                )}
              >
                Todas ({fmt(pool)})
              </button>
            </div>
            <label className="flex items-center gap-2.5 text-sm text-white/75 cursor-pointer select-none">
              <input type="checkbox" checked={feedback} onChange={(e) => setFeedback(e.target.checked)} className="w-4 h-4 accent-[var(--color-primary)]" />
              Mostrar o gabarito ao responder cada questão
            </label>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p className="text-white/70 text-sm">
                <span className="font-semibold text-white">
                  {total} questões de {topics.length === 0 ? group.name : topics.length === 1 ? topics[0] : `${topics.length} assuntos de ${group.name}`}
                </span>, sorteadas entre {fmt(pool)}.
              </p>
              <button
                type="button"
                onClick={() => onStart({ questionCount: total, module: 'Misto', immediateFeedback: feedback, topography: group.id, topics: topics.length ? topics : undefined })}
                disabled={total === 0}
                className="btn btn-primary sm:px-8 disabled:opacity-50"
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
