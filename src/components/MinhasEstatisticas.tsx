import React, { useEffect, useMemo, useState } from 'react';
import { ArrowRight, BarChart3, ChevronDown, Crosshair, Home, Info, RotateCcw, Stethoscope, Target, TrendingDown, TrendingUp, Trophy } from 'lucide-react';
import type { Question } from '../types';
import { loadBank } from '../data/banco';
import { Brand } from './Brand';
import { SaveHistoryCta } from './AccountMenu';
import type { Account } from '../lib/account';
import { cn } from '../lib/utils';
import {
  ALVOS,
  bankWeights,
  computeStats,
  evolucao,
  focusList,
  GRANDES_AREAS,
  MIN_RESPOSTAS,
  perc,
  questionsForAlvo,
  SINDROMES,
  type Alvo,
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
  /** Abre as questões erradas (do tema ou todas), com o comentário. */
  onReview?: (ids: string[], nome: string) => void;
  /** Abre o simulado diagnóstico (60 questões de todas as áreas). */
  onDiagnostic?: () => void;
  /** Faixa extra no topo (usada na página de teste). */
  banner?: React.ReactNode;
}

const Name = () => <span translate="no">DEsimulados</span>;

/** A partir de quantas respostas as recomendações ficam bem confiáveis (abaixo disso, oferece o diagnóstico). */
const META_RESPOSTAS = 150;
/** Uma revisão abre no máximo estas erradas (as mais recentes). */
const MAX_REVISAO = 50;
const ALVO_KEY = 'desimulados:prova-alvo';

const band = (p: number) => (p >= 60 ? 'bg-accent-green' : p >= 40 ? 'bg-accent-amber' : 'bg-accent-coral');
const bandText = (p: number) => (p >= 60 ? 'text-primary-ink' : p >= 40 ? 'text-[oklch(50%_0.12_70)]' : 'text-accent-coral');
const fmt = (n: number) => n.toLocaleString('pt-BR');
const plural = (n: number, um: string, varios: string) => `${fmt(n)} ${n === 1 ? um : varios}`;

function loadAlvo(): Alvo {
  try {
    const v = localStorage.getItem(ALVO_KEY);
    return ALVOS.some((a) => a.id === v) ? (v as Alvo) : 'todas';
  } catch {
    return 'todas';
  }
}

function Bar({ placar, compact }: { placar?: Placar; compact?: boolean }) {
  const p = perc(placar);
  const poucas = !placar || placar.total < MIN_RESPOSTAS;
  return (
    <div className={cn('rounded-full bg-bg-2 overflow-hidden', compact ? 'h-2' : 'h-2.5')}>
      {placar?.total ? (
        <div className={cn('h-full rounded-full', band(p), poucas && 'opacity-40')} style={{ width: `${Math.max(p, 2)}%` }} />
      ) : null}
    </div>
  );
}

/** Seta de evolução: acerto da metade mais antiga das respostas → metade mais recente. */
function Evolucao({ placar, long }: { placar?: Placar; long?: boolean }) {
  const ev = evolucao(placar);
  if (!ev) return null;
  const diff = ev.depois - ev.antes;
  if (Math.abs(diff) < 5) {
    return long ? <span className="text-xs text-muted">Estável: {ev.antes}% → {ev.depois}%</span> : null;
  }
  const up = diff > 0;
  const Icon = up ? TrendingUp : TrendingDown;
  return (
    <span
      className={cn('inline-flex items-center gap-1 text-xs font-semibold tabular-nums', up ? 'text-primary-ink' : 'text-accent-coral')}
      title={`Primeiras respostas: ${ev.antes}% · mais recentes: ${ev.depois}%`}
    >
      <Icon size={13} aria-hidden />
      {long ? `${up ? 'Melhorando' : 'Piorando'}: ${ev.antes}% → ${ev.depois}%` : `${up ? '+' : ''}${diff}`}
    </span>
  );
}

function Linha({
  name,
  sub,
  placar,
  peso,
  pesoLabel,
  compact,
  children,
}: {
  name: string;
  sub?: string;
  placar?: Placar;
  peso?: number;
  pesoLabel: string;
  compact?: boolean;
  children?: React.ReactNode;
}) {
  const p = perc(placar);
  const vazio = !placar?.total;
  const faltam = vazio ? 0 : Math.max(0, MIN_RESPOSTAS - placar!.total);
  return (
    <div className="min-w-0">
      <div className={cn(vazio && 'opacity-60')}>
        <div className="flex items-baseline justify-between gap-3 text-sm">
          <span className="min-w-0 flex-1 break-words">
            <span className={cn('text-ink', compact ? 'font-normal' : 'font-medium')}>{name}</span>
            {sub && <span className="block text-xs text-muted leading-snug mt-0.5">{sub}</span>}
          </span>
          <span className="shrink-0 text-muted tabular-nums text-right whitespace-nowrap">
            {vazio ? (
              <span className="text-xs">
                sem respostas
                {peso ? (
                  <span className="hidden sm:inline">
                    {' '}
                    · {fmt(peso)} {pesoLabel}
                  </span>
                ) : null}
              </span>
            ) : (
              <>
                <Evolucao placar={placar} />
                <span className="text-xs ml-2">{placar!.correct}/{placar!.total}</span>
                <span className={cn('font-semibold ml-2', faltam ? 'text-muted' : bandText(p))}>{p}%</span>
              </>
            )}
          </span>
        </div>
        <div className="mt-1.5">
          <Bar placar={placar} compact={compact} />
        </div>
      </div>
      {(faltam > 0 || children) && (
        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
          {faltam > 0 && (
            <span className="text-muted" title="Com poucas respostas, o percentual ainda pode ser obra do acaso">
              Dados insuficientes: responda mais {faltam}
            </span>
          )}
          {children}
        </div>
      )}
    </div>
  );
}

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <section
      className={cn(
        'rounded-[2rem] border border-white bg-white/85 backdrop-blur-xl p-5 sm:p-7 shadow-[0_24px_60px_-40px_oklch(30%_0.08_200/0.45),0_0_0_1px_oklch(92%_0.01_165)]',
        className
      )}
    >
      {children}
    </section>
  );
}

/** Anel de acerto geral. */
function Anel({ p }: { p: number }) {
  const r = 34;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 80 80" className="w-20 h-20 sm:w-24 sm:h-24 -rotate-90" aria-hidden>
      <defs>
        <linearGradient id="anel-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-lime)" />
          <stop offset="100%" stopColor="var(--color-primary)" />
        </linearGradient>
      </defs>
      <circle cx="40" cy="40" r={r} fill="none" stroke="oklch(100% 0 0 / 0.12)" strokeWidth="9" />
      <circle cx="40" cy="40" r={r} fill="none" stroke="url(#anel-grad)" strokeWidth="9" strokeLinecap="round" strokeDasharray={`${(p / 100) * c} ${c}`} />
    </svg>
  );
}

const linkCls = 'inline-flex items-center gap-1 rounded-full bg-white border border-line px-2.5 py-1 font-semibold text-primary-ink hover:bg-primary-soft hover:border-primary/40 hover:text-ink transition-colors';

/** Área "Minhas estatísticas": acerto por grande área, subárea e síndrome, e onde focar. */
export const MinhasEstatisticas: React.FC<Props> = ({
  respostas,
  simulados,
  semDetalhe,
  account,
  onHome,
  onSetup,
  onTrain,
  onReview,
  onDiagnostic,
  banner,
}) => {
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [erro, setErro] = useState(false);
  const [aberta, setAberta] = useState<string | null>(null);
  const [alvo, setAlvo] = useState<Alvo>(loadAlvo);

  useEffect(() => {
    loadBank()
      .then((b) => setQuestions([...b.QUESTIONS, ...b.SUGERIDOS.flatMap((s) => s.questions), ...b.TOPOGRAPHY_QUESTIONS]))
      .catch(() => setErro(true));
  }, []);

  const escolherAlvo = (a: Alvo) => {
    setAlvo(a);
    try {
      localStorage.setItem(ALVO_KEY, a);
    } catch {
      // ignora
    }
  };

  const byId = useMemo(() => new Map((questions ?? []).map((q) => [q.id, q])), [questions]);
  // Peso dos temas: questões da prova-alvo no banco geral (os sugeridos repetem questões de provas).
  const weights = useMemo(
    () => (questions ? bankWeights(questionsForAlvo(questions.filter((q) => !q.id.startsWith('sug-')), alvo)) : null),
    [questions, alvo]
  );
  const st = useMemo(() => (questions ? computeStats(respostas, byId) : null), [questions, respostas, byId]);
  const foco = useMemo(() => (st && weights ? focusList(st, weights) : []), [st, weights]);
  const pesoLabel = ALVOS.find((a) => a.id === alvo)!.curto;

  const header = (
    <header className="sticky top-0 z-40 pt-3 px-3 sm:px-4">
      <div className="max-w-6xl mx-auto h-14 pl-4 pr-2 flex items-center justify-between rounded-full bg-white/70 backdrop-blur-xl border border-white shadow-[0_10px_30px_-18px_oklch(30%_0.06_200/0.4),0_0_0_1px_oklch(92%_0.01_165)]">
        <Brand onClick={onHome} />
        <button onClick={onHome} className="text-sm font-semibold text-ink-2 hover:text-ink hover:bg-bg-2 px-3.5 py-2 rounded-full transition-colors flex items-center gap-1.5">
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
  const erradasGeral = st.erradas.geral ?? [];

  /** Links "Treinar" e "Revisar N erradas" de um tema. */
  const acoes = (key: string, nome: string, treinar = true) => {
    const erradas = st.erradas[key] ?? [];
    return (
      <>
        {treinar && onTrain && (
          <button type="button" onClick={() => onTrain(key, nome)} className={linkCls}>
            <Target size={13} aria-hidden />
            Treinar
          </button>
        )}
        {onReview && erradas.length > 0 && (
          <button type="button" onClick={() => onReview(erradas.slice(0, MAX_REVISAO), nome)} className={linkCls}>
            <RotateCcw size={13} aria-hidden />
            Revisar {plural(erradas.length, 'errada', 'erradas')}
          </button>
        )}
      </>
    );
  };

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

  const diagnostico = onDiagnostic && st.geral.total < META_RESPOSTAS && (
    <Card className="!bg-amber-soft !border-accent-amber/40">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
        <span className="hidden sm:flex w-12 h-12 rounded-2xl bg-accent-amber text-white items-center justify-center shrink-0 -rotate-6">
          <Stethoscope className="w-6 h-6" aria-hidden />
        </span>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-ink">Faça o simulado diagnóstico</p>
          <p className="mt-1 text-sm text-ink-2">
            60 questões, 12 de cada grande área, com correção no fim. Em uma sessão, ele dá dados para quase todos os temas e as
            recomendações ficam bem mais confiáveis.
          </p>
          {!vazio && (
            <div className="mt-3">
              <div className="flex justify-between text-xs text-muted tabular-nums">
                <span>Suas respostas até agora</span>
                <span>
                  {fmt(st.geral.total)} de {META_RESPOSTAS}
                </span>
              </div>
              <div className="mt-1 h-1.5 rounded-full bg-white overflow-hidden">
                <div className="h-full rounded-full bg-accent-amber" style={{ width: `${(st.geral.total / META_RESPOSTAS) * 100}%` }} />
              </div>
            </div>
          )}
        </div>
        <button type="button" onClick={onDiagnostic} className="btn btn-primary self-start sm:self-auto">
          Começar diagnóstico
          <ArrowRight size={18} />
        </button>
      </div>
    </Card>
  );

  return (
    <div className="relative min-h-screen bg-bg pb-16 overflow-x-clip">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] overflow-hidden">
        <div className="absolute -top-40 -left-32 w-[32rem] h-[32rem] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -top-20 -right-32 w-[30rem] h-[30rem] rounded-full bg-violet/15 blur-3xl" />
        <div className="absolute top-40 left-1/2 w-[22rem] h-[22rem] rounded-full bg-lime/25 blur-3xl" />
      </div>
      {banner}
      {header}

      <main className="relative container-custom pt-10 space-y-6">
        <div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.04em] flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-violet text-white flex items-center justify-center -rotate-6 shadow-[0_12px_26px_-12px_oklch(50%_0.2_295/0.8)]">
              <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden />
            </span>
            <span>
              Minhas <span className="text-gradient">estatísticas</span>
            </span>
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
          <p className="flex items-start gap-2 rounded-2xl bg-white/70 border border-line px-4 py-3 text-sm text-ink-2">
            <Info size={16} className="shrink-0 mt-0.5 text-muted" aria-hidden />
            {semDetalhe === 1 ? '1 simulado antigo guarda' : `${semDetalhe} simulados antigos guardam`} só o acerto por área e não entra
            {semDetalhe === 1 ? '' : 'm'} aqui (continua{semDetalhe === 1 ? '' : 'm'} no painel “Seu desempenho” da página inicial).
          </p>
        )}

        {vazio ? (
          <>
            <Card className="text-center py-12">
              <p className="font-heading text-2xl font-bold text-ink">Ainda não há respostas para analisar</p>
              <p className="mt-2 text-ink-2 max-w-md mx-auto">
                Faça um simulado no <Name />: a cada entrega, esta página mostra seu acerto por tema e onde focar.
              </p>
              <button type="button" onClick={onSetup} className="btn btn-ghost mt-6">
                Montar um simulado
                <ArrowRight size={18} />
              </button>
            </Card>
            {diagnostico}
          </>
        ) : (
          <>
            <Card>
              <dl className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="col-span-2 lg:col-span-1 lg:row-span-1 rounded-[1.5rem] bg-ink text-white p-4 sm:p-5 flex items-center justify-between gap-3 relative overflow-hidden">
                  <div aria-hidden className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-violet/40 blur-2xl" />
                  <div className="relative">
                    <dt className="text-xs text-white/60">Acerto geral</dt>
                    <dd className="font-heading text-4xl sm:text-5xl font-extrabold tabular-nums mt-1">{perc(st.geral)}%</dd>
                  </div>
                  <div className="relative">
                    <Anel p={perc(st.geral)} />
                  </div>
                </div>
                {[
                  ['Simulados', fmt(simulados), 'bg-primary-soft'],
                  ['Questões respondidas', fmt(st.geral.total), 'bg-lime-soft'],
                  ['Temas com dados', `${todasSubs.length} de ${GRANDES_AREAS.reduce((n, g) => n + g.subareas.length, 0)}`, 'bg-violet-soft'],
                ].map(([label, value, bg]) => (
                  <div key={label} className={cn('rounded-[1.5rem] p-4 sm:p-5 flex flex-col justify-between', bg)}>
                    <dt className="text-xs text-ink-2">{label}</dt>
                    <dd className="font-heading text-2xl sm:text-3xl font-extrabold text-ink tabular-nums mt-2">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 pt-4 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="text-sm text-ink-2">
                  <Evolucao placar={st.geral} long />
                  {!evolucao(st.geral) && <span className="text-muted">A evolução aparece a partir de 6 respostas.</span>}
                </div>
                {onReview && erradasGeral.length > 0 && (
                  <button
                    type="button"
                    onClick={() => onReview(erradasGeral.slice(0, MAX_REVISAO), 'questões que errei')}
                    className="inline-flex items-center gap-2 self-start sm:self-auto rounded-full bg-ink text-white px-4 py-2.5 text-sm sm:text-[15px] font-semibold text-left hover:bg-ink-2 hover:-translate-y-0.5 active:scale-[0.97] transition-all"
                  >
                    <RotateCcw size={16} className="shrink-0 text-lime" aria-hidden />
                    {erradasGeral.length > MAX_REVISAO
                      ? `Revisar as ${MAX_REVISAO} últimas que errei (de ${fmt(erradasGeral.length)})`
                      : `Revisar as ${fmt(erradasGeral.length)} que errei`}
                  </button>
                )}
              </div>
            </Card>

            {diagnostico}

            {/* Onde focar */}
            <Card className="relative overflow-hidden">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold flex items-center gap-2.5">
                    <span className="w-9 h-9 rounded-xl bg-accent-coral text-white flex items-center justify-center rotate-6">
                      <Crosshair className="w-5 h-5" aria-hidden />
                    </span>
                    Onde focar agora
                  </h2>
                  <p className="mt-1 text-sm text-muted max-w-xl">
                    Temas com acerto baixo e que mais caem na prova escolhida. Só entram temas com pelo menos {MIN_RESPOSTAS} respostas.
                  </p>
                </div>
                <div role="radiogroup" aria-label="Prova-alvo (peso dos temas)" className="flex flex-wrap gap-1.5">
                  <span className="w-full text-xs text-muted">Sua prova-alvo</span>
                  {ALVOS.map((a) => (
                    <button
                      key={a.id}
                      type="button"
                      role="radio"
                      aria-checked={alvo === a.id}
                      onClick={() => escolherAlvo(a.id)}
                      className={cn(
                        'rounded-full border-[1.5px] px-3.5 py-1.5 text-sm font-semibold transition-all',
                        alvo === a.id
                          ? 'bg-ink border-ink text-white shadow-[0_8px_20px_-10px_oklch(20%_0.02_165/0.7)]'
                          : 'bg-white border-line text-ink hover:border-ink/25 hover:-translate-y-0.5'
                      )}
                    >
                      {a.label}
                    </button>
                  ))}
                </div>
              </div>
              {foco.length ? (
                <ol className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {foco.map((f, i) => {
                    const placar = f.placar;
                    return (
                      <li
                        key={f.key}
                        className="rounded-[1.5rem] border-[1.5px] border-line bg-white p-4 sm:p-5 flex flex-col min-w-0 transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-26px_oklch(30%_0.08_200/0.6)]"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className="flex items-center gap-2 text-xs font-semibold text-muted">
                            <span
                              className={cn(
                                'w-7 h-7 rounded-lg font-heading text-sm font-extrabold flex items-center justify-center shrink-0',
                                ['bg-accent-coral text-white -rotate-6', 'bg-violet text-white rotate-3', 'bg-lime text-ink -rotate-3'][i % 3]
                              )}
                            >
                              {i + 1}
                            </span>
                            {f.kind === 'sindrome' ? 'Síndrome transversal' : f.area}
                          </span>
                          <span className={cn('font-heading text-2xl font-extrabold tabular-nums', bandText(perc(placar)))}>{perc(placar)}%</span>
                        </div>
                        <p className="mt-2 font-heading text-lg font-bold leading-snug text-ink">{f.name}</p>
                        <p className="mt-1 text-xs text-muted">
                          {placar.correct} de {placar.total} certas · {fmt(f.peso)} questões {pesoLabel}
                        </p>
                        <div className="mt-3">
                          <Bar placar={placar} compact />
                        </div>
                        <div className="mt-2 min-h-4">
                          <Evolucao placar={placar} long />
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2 text-sm">{acoes(f.key, f.name)}</div>
                      </li>
                    );
                  })}
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
                    <span className="w-7 h-7 rounded-lg bg-lime text-ink flex items-center justify-center -rotate-6">
                      <Trophy size={15} aria-hidden />
                    </span>
                    Seus pontos fortes
                  </h3>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {fortes.map((f) => (
                      <li key={f.name + f.area} className="rounded-full bg-lime-soft border border-lime px-3.5 py-1.5 text-sm font-medium text-ink">
                        {f.name} <span className="font-semibold text-primary-ink tabular-nums">{perc(f.placar)}%</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Card>

            {/* Grandes áreas → subáreas */}
            <Card>
              <h2 className="text-2xl sm:text-3xl font-extrabold">Por grande área</h2>
              <p className="mt-1 text-sm text-muted">
                Da mais fraca para a mais forte. Toque numa área para ver as subáreas. A seta mostra a evolução: acerto das suas respostas
                mais recentes em relação às primeiras.
              </p>
              <ul className="mt-5 space-y-2">
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
                    <li key={g.id} className={cn('rounded-[1.25rem] px-3 sm:px-4 py-3 transition-colors', open ? 'bg-bg-2' : 'hover:bg-bg-2/70')}>
                      <button
                        type="button"
                        onClick={() => setAberta(open ? null : g.id)}
                        aria-expanded={open}
                        className="w-full text-left flex items-center gap-3"
                      >
                        <div className="flex-1 min-w-0">
                          <Linha name={g.name} placar={placar} peso={weights.areas[g.id]?.total} pesoLabel={pesoLabel} />
                        </div>
                        <span className={cn('w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all', open ? 'bg-ink text-white rotate-180' : 'bg-white text-muted')}>
                          <ChevronDown size={17} aria-hidden />
                        </span>
                      </button>
                      {open && (
                        <ul className="mt-4 mb-2 ml-1 sm:ml-4 pl-3 sm:pl-5 border-l-2 border-primary/30 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                          {subs.map((s) => (
                            <li key={s.id} className="min-w-0">
                              <Linha name={s.name} sub={s.temas} placar={s.placar} peso={s.peso} pesoLabel={pesoLabel} compact>
                                {acoes(`${g.id}/${s.id}`, s.name, s.id !== 'outros')}
                              </Linha>
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
              <h2 className="text-2xl sm:text-3xl font-extrabold">Síndromes e apresentações clínicas</h2>
              <p className="mt-1 text-sm text-muted">Questões que partem de uma queixa e pedem diagnóstico diferencial, de qualquer área.</p>
              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
                {sindromes.map(({ sy, placar, peso }) => (
                  <li key={sy.id} className="min-w-0">
                    <Linha name={sy.name} sub={sy.diferenciais} placar={placar} peso={peso} pesoLabel={pesoLabel} compact>
                      {acoes(`sindrome/${sy.id}`, sy.name)}
                    </Linha>
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
