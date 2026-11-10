import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Brand } from './Brand';
import { Module, QuizSettings } from '../types';
import { AREAS, COUNT_BY_AREA, TOTAL_QUESTIONS } from '../data/stats';
import { SUGERIDOS, type SuggestedExam } from '../data/sugeridos';
import { TOPOGRAPHY_GROUPS } from '../data/topografia';
import { TOPOGRAPHY_COUNT } from '../data/topografiaPool';
import { cn } from '../lib/utils';

interface QuizSetupProps {
  initialModule?: Module;
  onBack: () => void;
  onStart: (settings: QuizSettings) => void;
  onTopography: () => void;
}

const questionCounts = [10, 20, 30, 40, 50, 60, 80, 100];
const fmt = (n: number) => n.toLocaleString('pt-BR');

/** Cartão de um simulado sugerido: lista fixa de questões, feita na ordem. */
const SuggestedCard: React.FC<{ exam: SuggestedExam; onStart: (settings: QuizSettings) => void }> = ({ exam, onStart }) => {
  const n = exam.questions.length;
  const start = (immediateFeedback: boolean) =>
    onStart({ questionCount: n, module: 'Misto', immediateFeedback, presetId: exam.id });
  return (
    <article className="rounded-2xl border border-line-2 bg-white p-5 sm:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-xl font-extrabold">{exam.title}</h3>
        <span className="text-sm text-muted tabular-nums">{n} questões</span>
      </div>
      <p className="mt-1.5 text-ink-2">{exam.description}</p>
      <div className="mt-5 flex flex-col sm:flex-row gap-3">
        <button type="button" onClick={() => start(true)} className="btn btn-primary">
          Fazer com gabarito a cada questão
        </button>
        <button type="button" onClick={() => start(false)} className="btn btn-ghost">
          Fazer em modo prova
        </button>
      </div>
    </article>
  );
};

export const QuizSetup: React.FC<QuizSetupProps> = ({ initialModule = 'Misto', onBack, onStart, onTopography }) => {
  const [settings, setSettings] = useState<QuizSettings>({
    questionCount: 20,
    module: initialModule,
    immediateFeedback: true,
  });

  const options: { value: Module; label: string; count: number }[] = [
    { value: 'Misto', label: 'Todas as áreas', count: TOTAL_QUESTIONS },
    ...AREAS.map((a) => ({ value: a, label: a, count: COUNT_BY_AREA[a] ?? 0 })),
  ];
  const pool = settings.module === 'Misto' ? TOTAL_QUESTIONS : COUNT_BY_AREA[settings.module] ?? 0;
  const areaText = settings.module === 'Misto' ? 'de todas as áreas' : settings.module === 'ENAMED' ? 'do ENAMED' : `de ${settings.module}`;

  return (
    <div className="min-h-screen bg-bg">
      <header className="sticky top-0 z-40 bg-bg/85 backdrop-blur-md border-b border-line">
        <div className="container-custom h-16 flex items-center justify-between">
          <Brand onClick={onBack} />
          <button onClick={onBack} className="text-sm font-semibold text-muted hover:text-ink transition-colors flex items-center gap-1">
            <ChevronLeft size={16} />
            Voltar
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 pb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.03em]">Monte seu simulado</h1>
        <p className="mt-3 text-ink-2 text-lg">Comece por um simulado sugerido ou monte o seu. No seu, as questões são sorteadas a cada vez.</p>

        {SUGERIDOS.length > 0 && (
          <section className="mt-10">
            <h2 className="text-base font-sans font-semibold">Simulados sugeridos</h2>
            <p className="mt-1 text-sm text-muted">Prontos para fazer, com as mesmas questões para todos.</p>
            <div className="mt-3 space-y-3">
              {SUGERIDOS.map((exam) => (
                <SuggestedCard key={exam.id} exam={exam} onStart={onStart} />
              ))}
            </div>
          </section>
        )}

        <section className="mt-10">
          <h2 className="text-base font-sans font-semibold">Por topografia</h2>
          <button
            type="button"
            onClick={onTopography}
            className="group mt-3 w-full flex items-center justify-between gap-4 rounded-2xl border border-line-2 bg-white p-5 sm:p-6 text-left hover:border-primary transition-colors"
          >
            <span>
              <span className="block text-xl font-extrabold font-heading text-ink group-hover:text-primary-ink transition-colors">Simulado por topografia</span>
              <span className="block mt-1.5 text-ink-2">Cabeça e pescoço, tórax, abdome… Escolha a região do corpo e a especialidade.</span>
              <span className="block mt-2 text-sm text-muted">
                {(() => {
                  const open = TOPOGRAPHY_GROUPS.filter((g) => (TOPOGRAPHY_COUNT[g.id] ?? 0) > 0).length;
                  return open === 0 ? 'Novidade: as especialidades serão liberadas aos poucos.' : `${open} de ${TOPOGRAPHY_GROUPS.length} especialidades disponíveis.`;
                })()}
              </span>
            </span>
            <ChevronRight size={22} className="shrink-0 text-muted group-hover:text-primary-ink transition-colors" />
          </button>
        </section>

        <section className="mt-12">
          <h2 className="text-base font-sans font-semibold">Monte o seu: área</h2>
          <div className="mt-3 grid sm:grid-cols-2 gap-2">
            {options.map((o) => {
              const active = settings.module === o.value;
              return (
                <button
                  key={o.value}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSettings({ ...settings, module: o.value })}
                  className={cn(
                    'flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl border text-left transition-colors',
                    active ? 'border-primary bg-primary-soft' : 'border-line bg-white hover:border-line-2'
                  )}
                >
                  <span>
                    <span className={cn('block font-semibold', active ? 'text-primary-ink' : 'text-ink')}>{o.label}</span>
                    <span className="block text-xs text-muted mt-0.5 tabular-nums">{fmt(o.count)} questões</span>
                  </span>
                  <span
                    className={cn(
                      'w-5 h-5 rounded-full border flex items-center justify-center shrink-0',
                      active ? 'bg-primary border-primary text-white' : 'border-line-2'
                    )}
                  >
                    {active && <Check size={12} strokeWidth={3} />}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-base font-sans font-semibold">Quantidade de questões</h2>
          <div className="mt-3 grid grid-cols-4 sm:grid-cols-8 gap-2">
            {questionCounts.map((count) => {
              const active = settings.questionCount === count;
              return (
                <button
                  key={count}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSettings({ ...settings, questionCount: count })}
                  className={cn(
                    'py-3 rounded-lg border font-heading font-bold tabular-nums transition-colors',
                    active ? 'bg-ink border-ink text-white' : 'bg-white border-line text-ink hover:border-line-2'
                  )}
                >
                  {count}
                </button>
              );
            })}
          </div>
        </section>

        <section className="mt-10">
          <button
            type="button"
            role="switch"
            aria-checked={settings.immediateFeedback}
            onClick={() => setSettings({ ...settings, immediateFeedback: !settings.immediateFeedback })}
            className="w-full flex items-center justify-between gap-4 px-4 py-4 rounded-xl border border-line bg-white text-left hover:border-line-2 transition-colors"
          >
            <span>
              <span className="block font-semibold text-ink">Mostrar o gabarito ao responder</span>
              <span className="block text-sm text-muted mt-0.5">
                {settings.immediateFeedback
                  ? 'Você vê a resposta e o comentário logo após marcar cada questão.'
                  : 'Modo prova: você responde tudo e vê seu desempenho só no final.'}
              </span>
            </span>
            <span className={cn('relative w-11 h-6 rounded-full transition-colors shrink-0', settings.immediateFeedback ? 'bg-primary' : 'bg-line-2')}>
              <span
                className={cn(
                  'absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform',
                  settings.immediateFeedback && 'translate-x-5'
                )}
              />
            </span>
          </button>
        </section>

        <div className="mt-10 pt-8 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-ink-2">
            <span className="font-semibold text-ink">{settings.questionCount} questões {areaText}</span>, sorteadas entre {fmt(pool)}.
          </p>
          <button onClick={() => onStart(settings)} className="btn btn-primary sm:px-10">
            Começar simulado
          </button>
        </div>
      </main>
    </div>
  );
};
