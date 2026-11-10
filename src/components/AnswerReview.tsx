import React, { useState } from 'react';
import { Ban, CheckCircle2, ChevronDown, CircleDashed, Maximize2, XCircle } from 'lucide-react';
import { Explanation } from './Explanation';
import { Question, UserAnswer } from '../types';
import { cn, examLabel, isAccepted, stripOptionLetter } from '../lib/utils';

type Status = 'correct' | 'wrong' | 'blank' | 'annulled';
type Filter = 'all' | Status;

interface Item {
  n: number;
  question: Question;
  answer?: UserAnswer;
  status: Status;
}

const letter = (i: number) => String.fromCharCode(65 + i);

const STATUS = {
  correct: { label: 'Acertou', Icon: CheckCircle2, color: 'text-accent-green' },
  wrong: { label: 'Errou', Icon: XCircle, color: 'text-accent-coral' },
  blank: { label: 'Em branco', Icon: CircleDashed, color: 'text-muted' },
  annulled: { label: 'Anulada', Icon: Ban, color: 'text-accent-amber' },
} as const;

/** Uma questão da revisão: fechada mostra o resumo; aberta mostra alternativas e comentário. */
const ReviewItem: React.FC<{ item: Item }> = ({ item }) => {
  const [open, setOpen] = useState(false);
  const { question: q, answer, status, n } = item;
  const { label, Icon, color } = STATUS[status];
  const picked = answer?.selectedOption ?? null;
  const panelId = `revisao-${q.id}`;

  return (
    <li className="rounded-xl border border-line bg-white overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full flex items-start gap-3 px-4 py-3.5 text-left hover:bg-bg-2/60 transition-colors"
      >
        <Icon className={cn('w-5 h-5 shrink-0 mt-0.5', color)} aria-label={label} />
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
            <span className="font-heading font-bold text-sm text-ink">Questão {n}</span>
            <span className="px-1.5 py-0.5 rounded bg-primary-soft text-primary-ink font-semibold">{examLabel(q.id)}</span>
            {q.module !== 'ENAMED' && <span className="text-muted">{q.module}</span>}
            {q.annulled && <span className="px-1.5 py-0.5 rounded bg-amber-soft text-ink font-semibold">Anulada · fora da nota</span>}
          </div>
          {!open && (
            <p className="mt-1 text-sm text-ink-2 line-clamp-2">{q.text}</p>
          )}
          {!open && (status === 'wrong' || status === 'blank') && (
            <p className="mt-1 text-xs text-muted">
              {picked !== null && <>Você marcou <b className="text-accent-coral">{letter(picked)}</b> · </>}
              Resposta: <b className="text-primary-ink">{letter(q.correctAnswer)}</b>
            </p>
          )}
        </div>
        <ChevronDown className={cn('w-5 h-5 text-muted shrink-0 mt-0.5 transition-transform', open && 'rotate-180')} aria-hidden />
      </button>

      {open && (
        <div id={panelId} className="px-4 pb-5 sm:px-5 space-y-4 border-t border-line pt-4">
          <p className="text-[15px] text-ink leading-[1.7] whitespace-pre-line">{q.text}</p>

          {q.image && (
            <figure className="relative bg-bg-2 border border-line rounded-xl p-2">
              <img
                src={q.image}
                alt={`Figura da questão ${n}`}
                loading="lazy"
                className="w-full max-h-[360px] object-contain rounded-lg mx-auto"
              />
              <a
                href={q.image}
                target="_blank"
                rel="noreferrer"
                className="absolute top-3 right-3 flex items-center gap-1 text-xs font-semibold text-ink bg-white/90 border border-line rounded-md px-2 py-1"
              >
                <Maximize2 size={12} />
                Ampliar
              </a>
            </figure>
          )}

          <ul className="space-y-2">
            {q.options.map((opt, i) => {
              const right = isAccepted(q, i);
              const mine = picked === i;
              return (
                <li
                  key={i}
                  className={cn(
                    'option-btn locked gap-3 px-3.5 py-3',
                    right ? 'correct' : mine ? 'incorrect' : 'opacity-60'
                  )}
                >
                  <span
                    className={cn(
                      'w-6 h-6 rounded-md border flex items-center justify-center text-xs font-semibold shrink-0',
                      right
                        ? 'bg-accent-green border-accent-green text-white'
                        : mine
                        ? 'bg-accent-coral border-accent-coral text-white'
                        : 'border-line-2 text-muted'
                    )}
                  >
                    {letter(i)}
                  </span>
                  <span className="text-sm leading-snug text-ink pt-0.5 flex-1">{stripOptionLetter(opt)}</span>
                  {mine && <span className="text-xs font-semibold text-ink-2 shrink-0 pt-1">Sua resposta</span>}
                </li>
              );
            })}
          </ul>

          <div className="pt-1">
            <Explanation question={q} />
          </div>
        </div>
      )}
    </li>
  );
};

interface AnswerReviewProps {
  questions: Question[];
  answers: UserAnswer[];
}

/** Revisão do simulado: gabarito e comentário de cada questão, com filtro por acerto. */
export const AnswerReview: React.FC<AnswerReviewProps> = ({ questions, answers }) => {
  const items: Item[] = questions.map((question, i) => {
    const answer = answers.find((a) => a.questionId === question.id);
    const status: Status = question.annulled
      ? 'annulled'
      : !answer || answer.selectedOption === null ? 'blank' : answer.isCorrect ? 'correct' : 'wrong';
    return { n: i + 1, question, answer, status };
  });
  const count = (s: Status) => items.filter((it) => it.status === s).length;
  const [filter, setFilter] = useState<Filter>(() => (count('wrong') ? 'wrong' : 'all'));

  const filters: { id: Filter; label: string; n: number }[] = [
    { id: 'wrong', label: 'Erradas', n: count('wrong') },
    { id: 'blank', label: 'Em branco', n: count('blank') },
    { id: 'correct', label: 'Acertadas', n: count('correct') },
    { id: 'annulled', label: 'Anuladas', n: count('annulled') },
    { id: 'all', label: 'Todas', n: items.length },
  ];
  const shown = filter === 'all' ? items : items.filter((it) => it.status === filter);

  return (
    <section className="mt-12" aria-labelledby="revisao-titulo">
      <h2 id="revisao-titulo" className="text-2xl font-extrabold">Revisão das questões</h2>
      <p className="mt-2 text-ink-2">Toque em uma questão para ver o gabarito e o comentário.</p>

      <div role="group" aria-label="Filtrar questões" className="mt-5 flex flex-wrap gap-2">
        {filters
          .filter((f) => f.n > 0 || f.id === 'all')
          .map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              aria-pressed={filter === f.id}
              className={cn(
                'px-3.5 py-2 rounded-lg text-sm font-semibold border transition-colors',
                filter === f.id ? 'bg-ink text-white border-ink' : 'bg-white text-ink-2 border-line-2 hover:border-ink/30'
              )}
            >
              {f.label} <span className="tabular-nums opacity-70">{f.n}</span>
            </button>
          ))}
      </div>

      <ul className="mt-5 space-y-2.5">
        {shown.map((it) => (
          <ReviewItem key={it.question.id} item={it} />
        ))}
      </ul>
    </section>
  );
};
