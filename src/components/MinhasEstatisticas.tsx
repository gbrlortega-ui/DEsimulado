import React, { useEffect, useMemo, useState } from 'react';
import { ArrowRight, BarChart3, ChevronDown, Crosshair, Home, Info, Target, Trophy } from 'lucide-react';
import type { Question } from '../types';
import { loadBank } from '../data/banco';
import { Brand } from './Brand';
import { SaveHistoryCta } from './AccountMenu';
import type { Account } from '../lib/account';
import { cn } from '../lib/utils';
import {
  bankWeights,
  computeStats,
  focusList,
  GRANDES_AREAS,
  MIN_RESPOSTAS,
  perc,
  SINDROMES,
  type Placar,
  type Resposta,
} from '../lib/taxonomia';

interface Props {
  /** Respostas questão a questão (de todos os simulados que guardam esse detalhe). */
  respostas: Resposta[];
  /** Simulados com detalhe por questão. */
  simulados: number;
  /** Simulados antigos, só com acerto por área (não entram aqui). */
  semDetalhe: number;
  account?: Account;
  onHome: () => void;
  onSetup: () => void;
  /** Abre um simulado só com questões do tema. */
  onTrain?: (tema: string, nome: string) => void;
  /** Faixa extra no topo (usada na página de teste). */
  banner?: React.ReactNode;
}

const Name = () => <span translate="no">DEsimulados</span>;

const band = (p: number) => (p >= 60 ? 'bg-accent-green' : p >= 40 ? 'bg-accent-amber' : 'bg-accent-coral');
const bandText = (p: number) => (p >= 60 ? 'text-primary-ink' : p >= 40 ? 'text-[oklch(50%_0.12_70)]' : 'text-accent-coral');
const fmt = (n: number) => n.toLocaleString('pt-BR');

function Bar({ placar, compact }: { placar?: Placar; compact?: boolean }) {
  const p = perc(placar);
  const poucas = !placar || placar.total < MIN_RESPOSTAS;
  return (
    <div className={cn('rounded-full bg-line overflow-hidden', compact ? 'h-1.5' : 'h-2')}>
      {placar?.total ? (
        <div className={cn('h-full rounded-full', band(p), poucas && 'opacity-40')} style={{ width: `${Math.max(p, 2)}%` }} />
      ) : null}
    </div>
  );
}

function Linha({ name, sub, placar, peso, compact }: { name: string; sub?: string; placar?: Placar; peso?: number; compact?: boolean }) {
  const p = perc(placar);
  const vazio = !placar?.total;
  const poucas = !vazio && placar!.total < MIN_RESPOSTAS;
  return (
    <div className={cn(vazio && 'opacity-60')}>
      <div className="flex items-baseline justify-between gap-3 text-sm">
        <span className="min-w-0">
          <span className={cn('text-ink', compact ? 'font-normal' : 'font-medium')}>{name}</span>
          {sub && <span className="block text-xs text-muted truncate">{sub}</span>}
        </span>
        <span className="shrink-0 text-muted tabular-nums text-right">
          {vazio ? (
            <span className="text-xs">sem respostas{peso ? ` · ${fmt(peso)} no banco` : ''}</span>
          ) : (
            <>
              <span className="text-xs">
                {placar!.correct}/{placar!.total}
                {poucas && ' · poucas'}
              </span>
              <span className={cn('font-semibold ml-2', bandText(p))}>{p}%</span>
            </>
          )}
        </span>
      </div>
      <div className="mt-1.5">
        <Bar placar={placar} compact={compact} />
      </div>
    </div>
  );
}

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <section className={cn('rounded-2xl border border-line-2 bg-white p-5 sm:p-7', className)}>{children}</section>;
}

/** Área "Minhas estatísticas": acerto por grande área, subárea e síndrome, e onde focar. */
export const MinhasEstatisticas: React.FC<Props> = ({ respostas, simulados, semDetalhe, account, onHome, onSetup, onTrain, banner }) => {
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [erro, setErro] = useState(false);
  const [aberta, setAberta] = useState<string | null>(null);

  useEffect(() => {
    loadBank()
      .then((b) => setQuestions([...b.QUESTIONS, ...b.SUGERIDOS.flatMap((s) => s.questions), ...b.TOPOGRAPHY_QUESTIONS]))
      .catch(() => setErro(true));
  }, []);

  const byId = useMemo(() => new Map((questions ?? []).map((q) => [q.id, q])), [questions]);
  // Peso dos temas: só o banco geral (os sugeridos repetem questões de provas).
  const weights = useMemo(() => (questions ? bankWeights(questions.filter((q) => !q.id.startsWith('sug-'))) : null), [questions]);
  const st = useMemo(() => (questions ? computeStats(respostas, byId) : null), [questions, respostas, byId]);
  const foco = useMemo(() => (st && weights ? focusList(st, weights) : []), [st, weights]);

  const header = (
    <header className="sticky top-0 z-40 bg-bg/85 backdrop-blur-md border-b border-line">
      <div className="container-custom h-16 flex items-center justify-between">
        <Brand onClick={onHome} />
        <button onClick={onHome} className="text-sm font-semibold text-muted hover:text-ink transition-colors flex items-center gap-1.5">
          <Home size={15} />
          Início
        </button>
      </div>
    </header>
  );

  if (erro || !st || !weights) {
    return (
      <div className="min-h-screen bg-bg">
        {banner}
        {header}
        <p role="status" className="p-10 flex items-center justify-center gap-3 text-ink-2">
          {erro ? (
            'Não foi possível carregar as questões. Verifique sua conexão e recarregue a página.'
          ) : (
            <>
              <span className="w-5 h-5 rounded-full border-2 border-primary border-t-transparent animate-spin" aria-hidden />
              Carregando suas estatísticas…
            </>
          )}
        </p>
      </div>
    );
  }

  const vazio = st.geral.total === 0;

  const areas = GRANDES_AREAS.map((g) => ({ g, placar: st.areas[g.id] }))
    .filter((a) => a.placar?.total || weights.areas[a.g.id]?.total)
    .sort((a, b) => (b.placar?.total ? 1 : 0) - (a.placar?.total ? 1 : 0) || perc(a.placar) - perc(b.placar));

  const todasSubs = GRANDES_AREAS.flatMap((g) =>
    g.subareas.map((s) => ({ name: s.name, area: g.name, placar: st.subareas[`${g.id}/${s.id}`] }))
  ).filter((s) => s.placar && s.placar.total >= MIN_RESPOSTAS);
  const fortes = todasSubs
    .filter((s) => perc(s.placar) >= 60)
    .sort((a, b) => perc(b.placar) - perc(a.placar) || b.placar!.total - a.placar!.total)
    .slice(0, 4);

  const sindromes = SINDROMES.map((sy) => ({ sy, placar: st.sindromes[sy.id], peso: weights.sindromes[sy.id]?.total ?? 0 })).sort(
    (a, b) => (b.placar?.total ? 1 : 0) - (a.placar?.total ? 1 : 0) || perc(a.placar) - perc(b.placar)
  );

  return (
    <div className="min-h-screen bg-bg pb-16">
      {banner}
      {header}

      <main className="container-custom pt-8 space-y-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-primary-ink" aria-hidden />
            Minhas estatísticas
          </h1>
          <p className="mt-2 text-ink-2 max-w-2xl">
            Seu acerto por grande área, por subárea e pelas síndromes que as provas cobram — e onde vale a pena focar agora.
          </p>
          <p className="mt-2 text-xs text-muted">
            {account?.status === 'in' ? 'Dados da sua conta, em todos os aparelhos.' : 'Dados deste navegador.'} Contam as questões que você
            respondeu (em branco e anuladas ficam de fora).
          </p>
        </div>

        {account && account.status !== 'in' && <SaveHistoryCta account={account} compact />}

        {semDetalhe > 0 && (
          <p className="flex items-start gap-2 rounded-xl bg-bg-2 border border-line px-4 py-3 text-sm text-ink-2">
            <Info size={16} className="shrink-0 mt-0.5 text-muted" aria-hidden />
            {semDetalhe === 1 ? '1 simulado antigo guarda' : `${semDetalhe} simulados antigos guardam`} só o acerto por área e não entra
            {semDetalhe === 1 ? '' : 'm'} aqui (continua{semDetalhe === 1 ? '' : 'm'} no painel “Seu desempenho” da página inicial).
          </p>
        )}

        {vazio ? (
          <Card className="text-center py-12">
            <p className="font-heading text-2xl font-bold text-ink">Ainda não há respostas para analisar</p>
            <p className="mt-2 text-ink-2 max-w-md mx-auto">
              Faça um simulado no <Name />: a cada entrega, esta página mostra seu acerto por tema e onde focar.
            </p>
            <button type="button" onClick={onSetup} className="btn btn-primary mt-6">
              Montar meu simulado
              <ArrowRight size={18} />
            </button>
          </Card>
        ) : (
          <>
            <Card>
              <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {[
                  ['Simulados', fmt(simulados)],
                  ['Questões respondidas', fmt(st.geral.total)],
                  ['Acerto geral', `${perc(st.geral)}%`],
                  ['Temas com dados', `${todasSubs.length} de ${GRANDES_AREAS.reduce((n, g) => n + g.subareas.length, 0)}`],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-xs text-muted">{label}</dt>
                    <dd className="font-heading text-2xl sm:text-3xl font-bold text-ink tabular-nums mt-0.5">{value}</dd>
                  </div>
                ))}
              </dl>
            </Card>

            {/* Onde focar */}
            <Card className="border-primary/40">
              <h2 className="text-2xl font-extrabold flex items-center gap-2">
                <Crosshair className="w-5 h-5 text-primary-ink" aria-hidden />
                Onde focar agora
              </h2>
              <p className="mt-1 text-sm text-muted">
                Temas com acerto baixo e que mais caem nas provas (peso = questões do tema no banco). Só entram temas com pelo menos{' '}
                {MIN_RESPOSTAS} respostas.
              </p>
              {foco.length ? (
                <ol className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {foco.map((f, i) => (
                    <li key={f.key} className="rounded-xl border border-line-2 p-4 flex flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-xs font-semibold text-muted">
                          {i + 1}º · {f.kind === 'sindrome' ? 'Síndrome transversal' : f.area}
                        </span>
                        <span className={cn('font-heading text-xl font-bold tabular-nums', bandText(perc(f.placar)))}>{perc(f.placar)}%</span>
                      </div>
                      <p className="mt-1 font-semibold text-ink">{f.name}</p>
                      <p className="mt-1 text-xs text-muted">
                        {f.placar.correct} de {f.placar.total} certas · {fmt(f.peso)} questões no banco
                      </p>
                      <div className="mt-3">
                        <Bar placar={f.placar} compact />
                      </div>
                      <button
                        type="button"
                        onClick={() => onTrain?.(f.key, f.name)}
                        disabled={!onTrain}
                        className="mt-4 self-start inline-flex items-center gap-1 text-sm font-semibold text-primary-ink hover:text-ink transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        <Target size={15} aria-hidden />
                        Treinar este tema
                      </button>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="mt-5 text-sm text-ink-2">
                  {todasSubs.length
                    ? 'Nenhum tema com acerto abaixo de 70% por enquanto. Continue assim!'
                    : `Responda mais questões: um tema entra aqui a partir de ${MIN_RESPOSTAS} respostas.`}
                </p>
              )}

              {fortes.length > 0 && (
                <div className="mt-6 pt-5 border-t border-line">
                  <h3 className="text-sm font-semibold font-sans text-ink flex items-center gap-2">
                    <Trophy size={15} className="text-primary-ink" aria-hidden />
                    Seus pontos fortes
                  </h3>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {fortes.map((f) => (
                      <li key={f.name + f.area} className="rounded-full bg-primary-soft px-3 py-1 text-sm text-ink">
                        {f.name} <span className="font-semibold text-primary-ink tabular-nums">{perc(f.placar)}%</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Card>

            {/* Grandes áreas → subáreas */}
            <Card>
              <h2 className="text-2xl font-extrabold">Por grande área</h2>
              <p className="mt-1 text-sm text-muted">
                Da mais fraca para a mais forte. Toque numa área para ver as subáreas. Uma questão pode contar em mais de uma área (ex.:
                cetoacidose conta em Clínica e em Emergência).
              </p>
              <ul className="mt-5 divide-y divide-line">
                {areas.map(({ g, placar }) => {
                  const open = aberta === g.id;
                  const subs = [
                    ...g.subareas.map((s) => ({ id: s.id, name: s.name, temas: s.temas })),
                    ...(g.module ? [{ id: 'outros', name: 'Outros temas', temas: 'Questões da área sem subárea reconhecida' }] : []),
                  ]
                    .map((s) => ({ ...s, placar: st.subareas[`${g.id}/${s.id}`], peso: weights.subareas[`${g.id}/${s.id}`]?.total ?? 0 }))
                    .filter((s) => s.id !== 'outros' || s.placar?.total)
                    .sort((a, b) => (b.placar?.total ? 1 : 0) - (a.placar?.total ? 1 : 0) || perc(a.placar) - perc(b.placar));
                  return (
                    <li key={g.id} className="py-3">
                      <button
                        type="button"
                        onClick={() => setAberta(open ? null : g.id)}
                        aria-expanded={open}
                        className="w-full text-left flex items-center gap-3"
                      >
                        <div className="flex-1 min-w-0">
                          <Linha name={g.name} placar={placar} peso={weights.areas[g.id]?.total} />
                        </div>
                        <ChevronDown size={18} className={cn('shrink-0 text-muted transition-transform', open && 'rotate-180')} aria-hidden />
                      </button>
                      {open && (
                        <ul className="mt-4 mb-2 ml-1 sm:ml-4 pl-3 sm:pl-5 border-l-2 border-line grid sm:grid-cols-2 gap-x-8 gap-y-4">
                          {subs.map((s) => (
                            <li key={s.id}>
                              <Linha name={s.name} sub={s.temas} placar={s.placar} peso={s.peso} compact />
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </Card>

            {/* Síndromes transversais */}
            <Card>
              <h2 className="text-2xl font-extrabold">Síndromes e apresentações clínicas</h2>
              <p className="mt-1 text-sm text-muted">Questões que partem de uma queixa e pedem diagnóstico diferencial, de qualquer área.</p>
              <ul className="mt-5 grid sm:grid-cols-2 gap-x-10 gap-y-4">
                {sindromes.map(({ sy, placar, peso }) => (
                  <li key={sy.id}>
                    <Linha name={sy.name} sub={sy.diferenciais} placar={placar} peso={peso} compact />
                  </li>
                ))}
              </ul>
            </Card>

            <p className="text-xs text-muted flex items-start gap-1.5">
              <Info size={14} className="shrink-0 mt-px" aria-hidden />
              A classificação em subáreas e síndromes é automática, pelas tags e pela topografia de cada questão — um tema pode aparecer em
              questões de áreas diferentes.
            </p>
          </>
        )}
      </main>
    </div>
  );
};
