import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, RefreshCw, Check, X, PlayCircle } from 'lucide-react';
import { Brand } from './Brand';
import { Module, Question } from '../types';
import { AREAS, COUNT_BY_AREA, EDITIONS, TOTAL_QUESTIONS, randomSample } from '../data/stats';
import { cn, examLabel, firstParagraph, stripOptionLetter } from '../lib/utils';

interface ResumeInfo {
  /** Nome do simulado sugerido, quando for o caso. */
  title?: string;
  answered: number;
  total: number;
  onResume: () => void;
  onDiscard: () => void;
}

interface LandingPageProps {
  onSetup: (module?: Module) => void;
  onQuickStart: () => void;
  /** Simulado em andamento salvo neste navegador. */
  resume?: ResumeInfo;
}

/* ---------- Aviso de simulado em andamento ---------- */
const ResumeBanner: React.FC<{ resume: ResumeInfo }> = ({ resume }) => (
  <div className="container-custom pt-6">
    <div
      role="region"
      aria-label="Simulado em andamento"
      className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl border border-primary/40 bg-primary-soft px-5 py-4"
    >
      <PlayCircle className="hidden sm:block w-8 h-8 text-primary-ink shrink-0" aria-hidden />
      <div className="flex-1">
        <p className="font-semibold text-ink">
          Você tem um simulado em andamento{resume.title ? `: ${resume.title}` : ''}.
        </p>
        <p className="text-sm text-ink-2 mt-0.5 tabular-nums">
          {resume.answered} de {resume.total} questões respondidas.
        </p>
      </div>
      <div className="flex gap-2 shrink-0">
        <button type="button" onClick={resume.onResume} className="btn btn-primary flex-1 sm:flex-none">
          Continuar
        </button>
        <button type="button" onClick={resume.onDiscard} className="btn btn-ghost flex-1 sm:flex-none">
          Descartar
        </button>
      </div>
    </div>
  </div>
);

const fmt = (n: number) => n.toLocaleString('pt-BR');

/* ---------- Questão de amostra: o visitante responde ali mesmo ---------- */
const SampleQuestion: React.FC<{ onQuickStart: () => void }> = ({ onQuickStart }) => {
  const [q, setQ] = useState<Question>(() => randomSample());
  const [picked, setPicked] = useState<number | null>(null);
  const answered = picked !== null;
  const right = picked === q.correctAnswer;
  const letter = (i: number) => String.fromCharCode(65 + i);

  const next = () => {
    setQ(randomSample(q.id));
    setPicked(null);
  };

  return (
    <div className="bg-white rounded-2xl border border-line-2 shadow-[0_24px_60px_-28px_oklch(30%_0.06_160/0.35)] overflow-hidden">
      <div className="flex items-center justify-between gap-3 px-5 sm:px-6 pt-5">
        <div className="flex flex-wrap items-center gap-1.5 text-xs">
          <span className="px-2 py-0.5 rounded-md bg-primary-soft text-primary-ink font-semibold">{examLabel(q.id)}</span>
          {q.module !== 'ENAMED' && <span className="px-2 py-0.5 rounded-md bg-bg-2 text-ink-2 font-medium">{q.module}</span>}
        </div>
        <button
          type="button"
          onClick={next}
          className="flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-ink transition-colors"
        >
          <RefreshCw size={13} />
          Outra questão
        </button>
      </div>

      <p className="px-5 sm:px-6 pt-4 text-[15px] leading-relaxed text-ink whitespace-pre-line">{q.text}</p>

      <div className="px-5 sm:px-6 pt-4 space-y-2">
        {q.options.map((opt, i) => {
          const isRight = i === q.correctAnswer;
          const isPicked = i === picked;
          return (
            <button
              key={i}
              type="button"
              disabled={answered}
              onClick={() => setPicked(i)}
              className={cn(
                'option-btn w-full text-left gap-3 px-3.5 py-3',
                answered && 'locked',
                answered && isRight && 'correct',
                answered && isPicked && !isRight && 'incorrect',
                answered && !isRight && !isPicked && 'opacity-60'
              )}
            >
              <span
                className={cn(
                  'w-6 h-6 rounded-md border flex items-center justify-center text-xs font-semibold shrink-0',
                  answered && isRight
                    ? 'bg-accent-green border-accent-green text-white'
                    : answered && isPicked
                    ? 'bg-accent-coral border-accent-coral text-white'
                    : 'border-line-2 text-muted'
                )}
              >
                {answered && isRight ? <Check size={14} strokeWidth={3} /> : answered && isPicked ? <X size={14} strokeWidth={3} /> : letter(i)}
              </span>
              <span className="text-sm leading-snug text-ink pt-0.5">{stripOptionLetter(opt)}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence initial={false}>
        {answered && (
          <motion.div
            key={q.id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="mx-5 sm:mx-6 mt-4 pt-4 border-t border-line">
              <p className={cn('text-sm font-semibold', right ? 'text-primary-ink' : 'text-accent-coral')}>
                {right ? 'Você acertou.' : `Resposta correta: ${letter(q.correctAnswer)}.`}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-2">{firstParagraph(q.explanation)}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-5 px-5 sm:px-6 py-4 bg-bg-2 border-t border-line flex items-center justify-between gap-3">
        <span className="text-xs text-muted">{answered ? 'Gostou? Continue no mesmo ritmo.' : 'Escolha uma alternativa.'}</span>
        <button
          type="button"
          onClick={onQuickStart}
          className="text-sm font-semibold text-primary-ink hover:text-ink transition-colors flex items-center gap-1 shrink-0"
        >
          Fazer 10 questões
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

/* ---------- Página ---------- */
export const LandingPage: React.FC<LandingPageProps> = ({ onSetup, onQuickStart, resume }) => {
  const tp = EDITIONS.filter((e) => e.kind === 'TP');
  const enamed = EDITIONS.filter((e) => e.kind === 'ENAMED');
  const years = (list: typeof EDITIONS) => (list.length ? `${list[0].year}–${list[list.length - 1].year}` : '');

  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <header className="sticky top-0 z-40 bg-bg/85 backdrop-blur-md border-b border-line">
        <div className="container-custom h-16 flex items-center justify-between">
          <Brand />
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button onClick={() => onSetup()} className="text-[13px] sm:text-sm font-semibold px-2.5 sm:px-4 py-2 rounded-lg bg-ink text-white hover:bg-ink-2 transition-colors whitespace-nowrap">
              <span className="hidden sm:inline">Montar simulado</span>
              <span className="sm:hidden">Simulado</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {resume && <ResumeBanner resume={resume} />}
        {/* Abertura */}
        <section className="container-custom pt-10 pb-16 sm:pt-20 sm:pb-24 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-6">
            <h1 className="text-[2.75rem] leading-[1] sm:text-[4.25rem] font-extrabold text-ink tracking-[-0.04em]">
              Provas reais de Medicina, comentadas.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-2 max-w-[34rem]">
              {fmt(TOTAL_QUESTIONS)} questões do Teste de Progresso e do ENAMED, cada uma com gabarito, explicação e referência.
              Sem cadastro: escolha a área e comece a responder.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button onClick={() => onSetup()} className="btn btn-primary">
                Montar simulado
              </button>
              <button onClick={onQuickStart} className="btn btn-ghost">
                Simulado rápido de 10 questões
              </button>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-3 sm:gap-6 max-w-md">
              <div>
                <dt className="text-xs text-muted">Questões</dt>
                <dd className="font-heading text-xl sm:text-2xl font-bold text-ink mt-0.5 whitespace-nowrap tabular-nums">{fmt(TOTAL_QUESTIONS)}</dd>
              </div>
              <div>
                <dt className="text-xs text-muted">Teste de Progresso</dt>
                <dd className="font-heading text-xl sm:text-2xl font-bold text-ink mt-0.5 whitespace-nowrap tabular-nums">{years(tp)}</dd>
              </div>
              <div>
                <dt className="text-xs text-muted">ENAMED</dt>
                <dd className="font-heading text-xl sm:text-2xl font-bold text-ink mt-0.5 whitespace-nowrap tabular-nums">{years(enamed)}</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-6">
            <SampleQuestion onQuickStart={onQuickStart} />
          </div>
        </section>

        {/* O que tem no banco */}
        <section className="bg-white border-y border-line">
          <div className="container-custom py-16 sm:py-20 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl font-extrabold">Escolha por onde começar</h2>
              <p className="mt-3 text-ink-2 max-w-lg">Toque em uma área para montar um simulado só com ela.</p>
              <ul className="mt-8 divide-y divide-line border-y border-line">
                {AREAS.map((area) => {
                  const n = COUNT_BY_AREA[area] ?? 0;
                  return (
                    <li key={area}>
                      <button
                        type="button"
                        onClick={() => onSetup(area)}
                        className="group w-full flex items-center justify-between gap-4 py-4 text-left"
                      >
                        <span className="font-semibold text-lg text-ink group-hover:text-primary-ink transition-colors">{area}</span>
                        <span className="flex items-center gap-1 text-sm text-muted tabular-nums">
                          {fmt(n)} questões
                          <ChevronRight size={18} className="text-muted group-hover:text-primary-ink transition-colors" />
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <h2 className="text-2xl font-extrabold">Provas no banco</h2>
              <p className="mt-3 text-ink-2">Edições completas, com o gabarito oficial de cada banca.</p>
              {[
                { title: 'Teste de Progresso', list: tp },
                { title: 'ENAMED', list: enamed },
              ].map(({ title, list }) => (
                <div key={title} className="mt-7">
                  <h3 className="text-sm font-semibold font-sans text-ink">{title}</h3>
                  <div className="mt-3 grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {list.map((e) => (
                      <div key={e.label} className="rounded-lg border border-line px-2.5 py-2">
                        <div className="font-heading font-bold text-ink">{e.year}</div>
                        <div className="text-xs text-muted tabular-nums whitespace-nowrap">{e.count} questões</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section className="container-custom py-16 sm:py-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Como funciona</h2>
          <ol className="mt-10 grid md:grid-cols-3 gap-8 md:gap-10">
            {[
              ['Escolha a área e a quantidade', 'De 10 a 100 questões, de uma área só ou misturando todas.'],
              ['Responda e leia o comentário', 'Ao marcar, você vê o gabarito, a explicação e a referência da questão.'],
              ['Veja onde precisa revisar', 'No final, o resultado mostra seus acertos por área e o tempo gasto.'],
            ].map(([title, text], i) => (
              <li key={title} className="flex gap-4">
                <span className="w-9 h-9 rounded-full bg-primary-soft text-primary-ink font-heading font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="mt-1.5 text-ink-2 leading-relaxed">{text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-12">
            <button onClick={() => onSetup()} className="btn btn-primary">
              Montar simulado
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="container-custom py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <Brand size="sm" />
          <p className="text-sm text-muted">Questões de provas públicas, organizadas e comentadas para estudo.</p>
        </div>
      </footer>
    </div>
  );
};
