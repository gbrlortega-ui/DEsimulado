import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Question } from '../types';

/** Comentário completo da questão: aviso, explicação, aprofundamento, bizu, referência e tags. */
export const Explanation: React.FC<{ question: Question }> = ({ question: q }) => (
  <div className="space-y-5">
    {q.alert && (
      <div role="note" className="flex gap-3 rounded-lg border border-accent-amber/50 bg-amber-soft px-4 py-3 text-sm leading-relaxed text-ink">
        <AlertTriangle className="w-5 h-5 text-accent-amber shrink-0 mt-0.5" aria-hidden />
        <p>{q.alert}</p>
      </div>
    )}

    <section>
      <h3 className="text-base font-bold">Comentário</h3>
      <p className="mt-1.5 text-[15px] text-ink-2 leading-relaxed whitespace-pre-line">{q.explanation}</p>
    </section>

    {q.commentary && (
      <section className="pl-4 border-l-2 border-line-2">
        <h3 className="text-sm font-sans font-semibold text-ink">Para aprofundar</h3>
        <p className="mt-1 text-sm text-ink-2 leading-relaxed whitespace-pre-line">{q.commentary}</p>
      </section>
    )}

    {q.tip && (
      <div className="rounded-lg bg-primary-soft px-4 py-3">
        <h3 className="text-sm font-sans font-bold text-primary-ink">Bizu</h3>
        <p className="mt-1 text-sm text-ink leading-relaxed">{q.tip}</p>
      </div>
    )}

    {q.reference && (
      <p className="text-xs text-muted leading-relaxed">
        <span className="font-semibold text-ink-2">Referência:</span> {q.reference}
      </p>
    )}

    {q.tags.length > 0 && (
      <div className="flex flex-wrap gap-1.5">
        {q.tags.map((tag) => (
          <span key={tag} className="text-xs bg-bg-2 px-2 py-0.5 rounded-md text-muted">
            {tag}
          </span>
        ))}
      </div>
    )}
  </div>
);
