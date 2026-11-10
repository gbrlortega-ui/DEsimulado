import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { RefreshCcw, Plus, Home, RotateCcw } from 'lucide-react';
import confeti from 'canvas-confetti';
import { Brand } from './Brand';
import { AnswerReview } from './AnswerReview';
import { Question, QuizResults, UserAnswer } from '../types';
import { cn } from '../lib/utils';

interface ResultsViewProps {
  results: QuizResults;
  questions: Question[];
  answers: UserAnswer[];
  onReset: () => void;
  /** Novo simulado só com as questões erradas e em branco. */
  onRetryMissed: (questions: Question[]) => void;
  onNew: () => void;
  onHome: () => void;
}

const formatDuration = (s: number) => {
  const m = Math.floor(s / 60);
  return m > 0 ? `${m} min ${s % 60} s` : `${s} s`;
};

export const ResultsView: React.FC<ResultsViewProps> = ({ results, questions, answers, onReset, onRetryMissed, onNew, onHome }) => {
  const score = Math.round(results.score);
  const blank = Math.max(0, results.totalQuestions - results.correctCount - results.wrongCount);
  const answered = results.correctCount + results.wrongCount;

  useEffect(() => {
    if (results.score >= 70 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      confeti({ particleCount: 90, spread: 60, origin: { y: 0.4 }, colors: ['#00bf75', '#009f57', '#0f2a1f'] });
    }
  }, [results.score]);

  const areas = (Object.entries(results.modulePerformance) as [string, { correct: number; total: number }][])
    .filter(([, p]) => p.total > 0)
    .map(([name, p]) => ({ name, ...p, perc: Math.round((p.correct / p.total) * 100) }))
    .sort((a, b) => a.perc - b.perc);
  const weakest = areas.length > 1 && areas[0].perc < areas[areas.length - 1].perc ? areas[0] : null;

  const title =
    answered === 0 ? 'Nenhuma questão respondida'
    : score >= 80 ? 'Ótimo resultado'
    : score >= 60 ? 'Bom resultado'
    : score >= 40 ? 'No caminho'
    : 'Hora de revisar';

  const advice =
    answered === 0
      ? 'Comece um novo simulado e responda pelo menos algumas questões para ver seu desempenho.'
      : weakest
      ? `Seu ponto mais fraco neste simulado foi ${weakest.name}: ${weakest.correct} de ${weakest.total}. Vale começar a revisão por ela.`
      : 'Antes do próximo simulado, volte aos temas das questões que você errou.';

  const missed = questions.filter((q) => !q.annulled && !answers.find((a) => a.questionId === q.id)?.isCorrect);
  const annulled = results.annulledCount ?? 0;

  const seg = (n: number) => (results.totalQuestions ? `${(n / results.totalQuestions) * 100}%` : "0%");

  return (
    <div className="min-h-screen bg-bg pb-16">
      <header className="sticky top-0 z-40 bg-bg/85 backdrop-blur-md border-b border-line">
        <div className="container-custom h-16 flex items-center justify-between">
          <Brand onClick={onHome} />
          <button onClick={onHome} className="text-sm font-semibold text-muted hover:text-ink transition-colors flex items-center gap-1.5">
            <Home size={15} />
            Início
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14">
        {/* Nota */}
        <section className="grid sm:grid-cols-[auto_1fr] gap-x-10 gap-y-4 items-end">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="font-heading font-extrabold text-ink leading-none tracking-[-0.05em] text-[7rem] sm:text-[9rem] tabular-nums"
          >
            {score}
            <span className="text-[0.4em] text-muted tracking-normal ml-1">%</span>
          </motion.div>
          <div className="pb-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold">{title}</h1>
            <p className="mt-3 text-ink-2 leading-relaxed">{advice}</p>
          </div>
        </section>

        {/* Distribuição */}
        <section className="mt-10">
          <div className="flex h-3 rounded-full overflow-hidden bg-line" role="img"
            aria-label={`${results.correctCount} acertos, ${results.wrongCount} erros e ${blank} em branco`}>
            <div className="bg-accent-green" style={{ width: seg(results.correctCount) }} />
            <div className="bg-accent-coral" style={{ width: seg(results.wrongCount) }} />
          </div>
          <dl className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Acertos', value: `${results.correctCount} de ${results.totalQuestions}`, dot: 'bg-accent-green' },
              { label: 'Erros', value: results.wrongCount, dot: 'bg-accent-coral' },
              { label: 'Em branco', value: blank, dot: 'bg-line-2' },
              { label: 'Tempo total', value: formatDuration(results.timeSpent), dot: null },
            ].map((s) => (
              <div key={s.label} className="border-t border-line pt-3">
                <dt className="flex items-center gap-1.5 text-sm text-muted">
                  {s.dot && <span className={cn('w-2 h-2 rounded-full', s.dot)} />}
                  {s.label}
                </dt>
                <dd className="mt-1 font-heading text-2xl font-bold text-ink tabular-nums">{s.value}</dd>
              </div>
            ))}
          </dl>
          {annulled > 0 && (
            <p className="mt-4 text-sm text-muted">
              {annulled === 1
                ? '1 questão anulada pela banca ficou fora da nota.'
                : `${annulled} questões anuladas pela banca ficaram fora da nota.`}
            </p>
          )}
        </section>

        {/* Por área */}
        {areas.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-extrabold">Desempenho por área</h2>
            <ul className="mt-5 space-y-4">
              {[...areas].sort((a, b) => b.total - a.total).map((a, i) => (
                <li key={a.name}>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-semibold text-ink">{a.name}</span>
                    <span className="text-sm text-muted tabular-nums">
                      {a.correct} de {a.total} <span className="text-ink font-semibold ml-1">{a.perc}%</span>
                    </span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-line overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${a.perc}%` }}
                      transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease: 'easeOut' }}
                      className={cn('h-full rounded-full', a.perc >= 60 ? 'bg-accent-green' : a.perc >= 40 ? 'bg-accent-amber' : 'bg-accent-coral')}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Ações */}
        <section className="mt-12 pt-8 border-t border-line flex flex-col sm:flex-row sm:flex-wrap gap-3">
          <button onClick={onNew} className="btn btn-primary sm:flex-1">
            <Plus size={18} />
            Novo simulado
          </button>
          {missed.length > 0 && missed.length < questions.length && (
            <button onClick={() => onRetryMissed(missed)} className="btn btn-ghost sm:flex-1">
              <RotateCcw size={17} />
              Refazer erradas e em branco ({missed.length})
            </button>
          )}
          <button onClick={onReset} className="btn btn-ghost sm:flex-1">
            <RefreshCcw size={17} />
            Refazer todas
          </button>
        </section>

        {questions.length > 0 && <AnswerReview questions={questions} answers={answers} />}
      </main>
    </div>
  );
};
