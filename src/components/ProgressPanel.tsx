import React from 'react';
import { ChevronRight, TrendingUp } from 'lucide-react';
import { Module } from '../types';
import { AREAS } from '../data/stats';
import { HistoryEntry, summarize } from '../lib/history';
import type { Account } from '../lib/account';
import { SaveHistoryCta } from './AccountMenu';
import { cn } from '../lib/utils';

interface ProgressPanelProps {
  history: HistoryEntry[];
  account: Account;
  onTrain: (area: Module) => void;
  onClear: () => void;
}

const fmt = (n: number) => n.toLocaleString('pt-BR');
const date = (ms: number) => new Date(ms).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
/** Mesmas faixas da tela de resultado: ≥ 60% bom, ≥ 40% atenção, abaixo disso revisar. */
const band = (perc: number) => (perc >= 60 ? 'bg-accent-green' : perc >= 40 ? 'bg-accent-amber' : 'bg-accent-coral');

const LAST = 12;

/** Painel "Seu desempenho": evolução das notas e acerto acumulado por área. */
export const ProgressPanel: React.FC<ProgressPanelProps> = ({ history, account, onTrain, onClear }) => {
  const { correct, total, perc, areas } = summarize(history);
  const recent = history.slice(-LAST);
  const byArea = AREAS.filter((a) => areas[a]?.total)
    .map((name) => ({ name, ...areas[name], perc: Math.round((areas[name].correct / areas[name].total) * 100) }))
    .sort((a, b) => a.perc - b.perc || b.total - a.total);
  const weakest = byArea.length > 1 ? byArea[0] : null;

  const clear = () => {
    if (window.confirm('Apagar o histórico de simulados deste navegador?')) onClear();
  };

  return (
    <section className="container-custom pt-6" aria-labelledby="desempenho-titulo">
      <div className="rounded-2xl border border-line-2 bg-white p-5 sm:p-7">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h2 id="desempenho-titulo" className="text-2xl font-extrabold flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary-ink" aria-hidden />
            Seu desempenho
          </h2>
          <p className="text-xs text-muted">
            {account.status === 'in' ? 'Salvo na sua conta' : 'Salvo só neste navegador'} ·{' '}
            <button type="button" onClick={clear} className="underline underline-offset-2 hover:text-ink">
              apagar histórico
            </button>
          </p>
        </div>

        <dl className="mt-5 grid grid-cols-3 gap-3 sm:gap-6 max-w-lg">
          {[
            ['Simulados', fmt(history.length)],
            ['Questões', fmt(total)],
            ['Acerto geral', `${perc}%`],
          ].map(([label, value]) => (
            <div key={label}>
              <dt className="text-xs text-muted">{label}</dt>
              <dd className="font-heading text-2xl font-bold text-ink tabular-nums mt-0.5">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-7 grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Evolução: uma barra por simulado, altura = % de acerto */}
          <div>
            <h3 className="text-sm font-semibold font-sans text-ink">
              {recent.length > 1 ? `Últimos ${recent.length} simulados` : 'Último simulado'}
            </h3>
            <div className="mt-4 flex gap-2">
              <div className="relative w-9 h-32 text-[11px] text-muted tabular-nums" aria-hidden>
                {[100, 50, 0].map((v) => (
                  <span key={v} className="absolute right-0 -translate-y-1/2" style={{ top: `${100 - v}%` }}>
                    {v}%
                  </span>
                ))}
              </div>
              <ol
                className="relative flex-1 flex items-end gap-[3px] h-32 border-b border-line-2"
                aria-label="Nota de cada simulado, do mais antigo ao mais recente"
              >
                <span className="absolute inset-x-0 top-0 border-t border-dashed border-line" aria-hidden />
                <span className="absolute inset-x-0 top-1/2 border-t border-dashed border-line" aria-hidden />
                {recent.map((e, i) => {
                  const label = `${date(e.at)} · ${e.title}: ${Math.round(e.score)}% (${e.correct} de ${e.total})`;
                  const last = i === recent.length - 1;
                  const h = Math.max(e.score, 2);
                  return (
                    <li key={e.at} className="group relative flex-1 max-w-10 h-full flex flex-col justify-end outline-none" title={label} aria-label={label} tabIndex={0}>
                      <span
                        className={cn(
                          'absolute left-1/2 -translate-x-1/2 text-xs font-semibold text-ink tabular-nums whitespace-nowrap bg-white/90 px-0.5 rounded',
                          last ? 'block' : 'hidden group-hover:block group-focus:block'
                        )}
                        style={{ bottom: `calc(${h}% + 3px)` }}
                      >
                        {Math.round(e.score)}%
                      </span>
                      <span
                        className={cn('relative block w-full rounded-t-[4px]', last ? 'bg-primary' : 'bg-primary/55 group-hover:bg-primary group-focus:bg-primary')}
                        style={{ height: `${h}%` }}
                      />
                    </li>
                  );
                })}
              </ol>
            </div>
            <p className="mt-3 text-xs text-muted">Passe o mouse ou toque numa barra para ver o simulado.</p>
          </div>

          {/* Acerto acumulado por área, do mais fraco ao mais forte */}
          <div>
            <h3 className="text-sm font-semibold font-sans text-ink">Acerto por área</h3>
            <ul className="mt-3 space-y-3">
              {byArea.map((a) => (
                <li key={a.name}>
                  <div className="flex items-baseline justify-between gap-3 text-sm">
                    <span className="font-medium text-ink">{a.name}</span>
                    <span className="text-muted tabular-nums">
                      {a.correct} de {a.total} <span className="text-ink font-semibold ml-1">{a.perc}%</span>
                    </span>
                  </div>
                  <div className="mt-1.5 h-2 rounded-full bg-line overflow-hidden">
                    <div className={cn('h-full rounded-full', band(a.perc))} style={{ width: `${a.perc}%` }} />
                  </div>
                </li>
              ))}
            </ul>
            {weakest && (
              <button
                type="button"
                onClick={() => onTrain(weakest.name)}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary-ink hover:text-ink transition-colors"
              >
                Treinar {weakest.name}, sua área mais fraca
                <ChevronRight size={16} />
              </button>
            )}
          </div>
        </div>

        {account.status !== 'in' && (
          <div className="mt-7">
            <SaveHistoryCta account={account} compact />
          </div>
        )}
      </div>
    </section>
  );
};
