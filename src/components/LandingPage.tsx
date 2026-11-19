import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Baby,
  BarChart3,
  BookOpenCheck,
  Check,
  ChevronRight,
  Cloud,
  GraduationCap,
  Map,
  Microscope,
  PlayCircle,
  RefreshCw,
  Scissors,
  Sparkles,
  Stethoscope,
  Users,
  Venus,
  X,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { Brand } from './Brand';
import { ProgressPanel } from './ProgressPanel';
import type { HistoryEntry } from '../lib/history';
import type { Account } from '../lib/account';
import { AccountMenu } from './AccountMenu';
import { Module, Question } from '../types';
import { AREAS, COUNT_BY_AREA, EDITIONS, SOURCES, TOTAL_QUESTIONS, randomSample } from '../data/stats';
import { TOPOGRAPHY_COUNT } from '../data/resumo';
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
  /** Abre "Minhas estatísticas". */
  onStats: () => void;
  /** Simulado em andamento salvo neste navegador. */
  resume?: ResumeInfo;
  /** Simulados já feitos neste navegador. */
  history: HistoryEntry[];
  onClearHistory: () => void;
  account: Account;
  onPrivacy: () => void;
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
    <div className="bg-white/90 backdrop-blur-xl rounded-[1.75rem] border border-white shadow-[0_30px_70px_-30px_oklch(30%_0.08_200/0.45),0_0_0_1px_oklch(90%_0.01_165)] overflow-hidden">
      <div className="flex items-center justify-between gap-3 px-5 sm:px-6 pt-5">
        <div className="flex flex-wrap items-center gap-1.5 text-xs">
          <span className="px-2.5 py-1 rounded-full bg-primary-soft text-primary-ink font-semibold">{examLabel(q.id)}</span>
          {q.module !== 'ENAMED' && <span className="px-2.5 py-1 rounded-full bg-violet-soft text-violet font-medium">{q.module}</span>}
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
                  'w-7 h-7 rounded-full border-[1.5px] flex items-center justify-center text-xs font-semibold shrink-0',
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

      <div className="mt-5 px-5 sm:px-6 py-4 bg-[linear-gradient(90deg,oklch(97%_0.03_160),oklch(97%_0.025_295))] border-t border-line flex items-center justify-between gap-3">
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

/* ---------- Peças da página ---------- */

const AREA_STYLE: Record<string, { Icon: LucideIcon; tint: string; ink: string }> = {
  'Clínica Médica': { Icon: Stethoscope, tint: 'bg-[oklch(93%_0.07_160)]', ink: 'text-[oklch(42%_0.12_160)]' },
  Cirurgia: { Icon: Scissors, tint: 'bg-[oklch(93.5%_0.05_230)]', ink: 'text-[oklch(42%_0.12_240)]' },
  Pediatria: { Icon: Baby, tint: 'bg-[oklch(94%_0.08_90)]', ink: 'text-[oklch(45%_0.11_65)]' },
  'Ginecologia e Obstetrícia': { Icon: Venus, tint: 'bg-[oklch(93.5%_0.05_350)]', ink: 'text-[oklch(45%_0.13_350)]' },
  'Saúde Coletiva': { Icon: Users, tint: 'bg-[oklch(93.5%_0.05_195)]', ink: 'text-[oklch(42%_0.1_200)]' },
  'Ciências Básicas': { Icon: Microscope, tint: 'bg-[oklch(93.5%_0.05_290)]', ink: 'text-[oklch(44%_0.13_290)]' },
  ENAMED: { Icon: GraduationCap, tint: 'bg-[oklch(94%_0.03_165)]', ink: 'text-ink' },
};

/** Fundo da abertura: brilhos verdes suaves + grade de pontos que some nas bordas. */
const HeroBackdrop = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute -top-40 -left-32 w-[38rem] h-[38rem] rounded-full bg-primary/25 blur-3xl" />
    <div className="absolute top-10 -right-32 w-[34rem] h-[34rem] rounded-full bg-violet/20 blur-3xl" />
    <div className="absolute top-72 left-1/3 w-[26rem] h-[26rem] rounded-full bg-lime/35 blur-3xl" />
    <div
      className="absolute inset-0 opacity-[0.35]"
      style={{
        backgroundImage: 'radial-gradient(oklch(70% 0.03 165) 1px, transparent 1px)',
        backgroundSize: '22px 22px',
        maskImage: 'radial-gradient(ellipse 70% 60% at 50% 35%, black 30%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 35%, black 30%, transparent 75%)',
      }}
    />
  </div>
);

/** Selo que flutua ao lado da questão de amostra. */
const FloatingBadge: React.FC<{ className: string; delay: number; rotate?: number; children: React.ReactNode }> = ({ className, delay, rotate = 0, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay, duration: 0.5, type: 'spring', bounce: 0.45 }}
    className={cn('absolute z-10 hidden sm:block', className)}
  >
    <div
      className="float-y flex items-center gap-2.5 rounded-2xl bg-white border-[1.5px] border-ink/10 shadow-[0_18px_40px_-18px_oklch(30%_0.08_200/0.5)] px-3.5 py-2.5"
      style={{ '--r': `${rotate}deg`, animationDelay: `${delay}s` } as React.CSSProperties}
    >
      {children}
    </div>
  </motion.div>
);

const SectionTitle: React.FC<{ eyebrow: string; title: string; text?: string; center?: boolean }> = ({ eyebrow, title, text, center }) => (
  <div className={cn('max-w-2xl', center && 'mx-auto text-center')}>
    <p className="inline-flex items-center gap-1.5 rounded-full bg-white border border-line-2 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary-ink shadow-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-[linear-gradient(135deg,var(--color-primary),var(--color-violet))]" />
      {eyebrow}
    </p>
    <h2 className="mt-3 text-3xl sm:text-[2.75rem] leading-[1.05] font-extrabold tracking-[-0.03em]">{title}</h2>
    {text && <p className="mt-4 text-lg text-ink-2 leading-relaxed">{text}</p>}
  </div>
);

/* ---------- Página ---------- */
export const LandingPage: React.FC<LandingPageProps> = ({ onSetup, onQuickStart, onStats, resume, history, onClearHistory, account, onPrivacy }) => {
  const tp = EDITIONS.filter((e) => e.kind === 'TP');
  const enamed = EDITIONS.filter((e) => e.kind === 'ENAMED');
  const years = (list: typeof EDITIONS) => (list.length ? `${list[0].year}–${list[list.length - 1].year}` : '');
  const topoOpen = Object.values(TOPOGRAPHY_COUNT).filter((n) => n > 0).length;

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.5, delay, ease: 'easeOut' as const },
  });

  return (
    <div className="min-h-screen flex flex-col bg-bg overflow-x-clip">
      <header className="sticky top-0 z-40 pt-3 px-3 sm:px-4">
        <div className="max-w-6xl mx-auto h-14 sm:h-16 pl-4 pr-2 sm:pl-5 sm:pr-2.5 flex items-center justify-between rounded-full bg-white/70 backdrop-blur-xl border border-white shadow-[0_10px_30px_-18px_oklch(30%_0.06_200/0.4),0_0_0_1px_oklch(92%_0.01_165)]">
          <Brand />
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-ink-2">
            <a href="#recursos" className="px-3 py-1.5 rounded-full hover:bg-bg-2 hover:text-ink transition-colors">Recursos</a>
            <a href="#areas" className="px-3 py-1.5 rounded-full hover:bg-bg-2 hover:text-ink transition-colors">Áreas</a>
            <a href="#como-funciona" className="px-3 py-1.5 rounded-full hover:bg-bg-2 hover:text-ink transition-colors">Como funciona</a>
          </nav>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <AccountMenu account={account} onPrivacy={onPrivacy} onStats={onStats} />
            <button onClick={() => onSetup()} className="text-[13px] sm:text-sm font-semibold px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-ink text-white hover:bg-ink-2 hover:-translate-y-0.5 active:scale-95 transition-all whitespace-nowrap">
              <span className="hidden sm:inline">Montar simulado</span>
              <span className="sm:hidden">Simulado</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {resume && <ResumeBanner resume={resume} />}

        {/* Abertura */}
        <section className="relative">
          <HeroBackdrop />
          <div className="relative container-custom pt-12 pb-20 sm:pt-20 sm:pb-28 grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 rounded-full border border-white bg-white/80 backdrop-blur pl-1.5 pr-3.5 py-1.5 text-xs sm:text-sm font-medium text-ink-2 shadow-[0_6px_20px_-12px_oklch(30%_0.06_200/0.5)]"
              >
                <span className="rounded-full bg-lime px-2 py-0.5 text-[11px] font-bold text-ink">100% GRÁTIS</span>
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-primary" />
                </span>
                {fmt(TOTAL_QUESTIONS)} questões · sem cadastro
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="mt-6 text-[2.9rem] leading-[0.98] sm:text-[4.6rem] font-extrabold text-ink tracking-[-0.045em]"
              >
                Provas reais de Medicina,{' '}
                <span className="relative inline-block">
                  <span className="text-gradient">comentadas</span>
                  <svg aria-hidden viewBox="0 0 300 18" preserveAspectRatio="none" className="absolute left-0 -bottom-2 w-full h-3 sm:h-4 text-lime">
                    <path d="M3 13 C 70 3, 150 3, 297 10" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
                  </svg>
                  <Sparkles aria-hidden className="absolute -top-3 -right-7 sm:-right-9 w-6 h-6 sm:w-8 sm:h-8 text-violet" fill="currentColor" />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12 }}
                className="mt-7 text-lg sm:text-xl leading-relaxed text-ink-2 max-w-[34rem]"
              >
                Treine com o Teste de Progresso e o ENAMED. Cada questão tem gabarito oficial, explicação e referência,
                e você vê na hora onde precisa revisar.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18 }}
                className="mt-9 flex flex-col sm:flex-row gap-3"
              >
                <button onClick={() => onSetup()} className="btn btn-primary group text-base px-7 py-4">
                  Montar meu simulado
                  <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
                <button onClick={onQuickStart} className="btn btn-ghost text-base px-7 py-4">
                  <Zap size={17} className="text-primary-ink" fill="currentColor" />
                  10 questões agora
                </button>
              </motion.div>

              <motion.dl
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-10 flex flex-wrap gap-3"
              >
                {[
                  ['Teste de Progresso', years(tp)],
                  ['ENAMED', years(enamed)],
                  ['Áreas', String(AREAS.length)],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-white/70 backdrop-blur border border-white px-4 py-2.5 shadow-[0_8px_24px_-16px_oklch(30%_0.06_200/0.5)]">
                    <dt className="text-xs text-muted">{label}</dt>
                    <dd className="font-heading text-2xl font-bold text-ink mt-0.5 tabular-nums">{value}</dd>
                  </div>
                ))}
              </motion.dl>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
              className="lg:col-span-6 relative"
            >
              <FloatingBadge className="top-0 left-0" delay={0.7} rotate={-5}>
                <span className="w-8 h-8 rounded-xl bg-lime text-ink flex items-center justify-center">
                  <BookOpenCheck size={17} />
                </span>
                <span className="text-sm">
                  <b className="block text-ink leading-tight">Comentário completo</b>
                  <span className="text-xs text-muted">em todas as questões</span>
                </span>
              </FloatingBadge>
              <FloatingBadge className="-top-2 right-4" delay={1.1} rotate={6}>
                <span className="text-sm font-bold text-ink">🎯 sem cadastro</span>
              </FloatingBadge>
              <FloatingBadge className="bottom-0 right-0" delay={0.9} rotate={4}>
                <span className="w-8 h-8 rounded-xl bg-violet text-white flex items-center justify-center">
                  <BarChart3 size={17} />
                </span>
                <span className="text-sm">
                  <b className="block text-ink leading-tight">Seu desempenho</b>
                  <span className="text-xs text-muted">acerto por área</span>
                </span>
              </FloatingBadge>
              <div className="relative sm:pt-10 sm:pb-10 sm:pl-8 sm:pr-6">
                <SampleQuestion onQuickStart={onQuickStart} />
              </div>
            </motion.div>
          </div>
        </section>

        {history.length > 0 && <ProgressPanel history={history} account={account} onTrain={onSetup} onClear={onClearHistory} onStats={onStats} />}

        {/* Faixa com as provas do banco */}
        <section aria-label="Provas no banco" className="relative py-5 bg-ink overflow-hidden -rotate-1 scale-[1.02] my-4">
          <p className="sr-only">Edições completas no banco: {EDITIONS.map((e) => e.label).join(', ')}</p>
          <div aria-hidden className="marquee flex w-max gap-3">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex gap-3 pr-3">
                <span className="px-4 py-2 rounded-full text-sm font-bold bg-lime text-ink whitespace-nowrap">✦ Edições completas no banco</span>
                {EDITIONS.map((e) => (
                  <span
                    key={e.label}
                    className={cn(
                      'px-4 py-2 rounded-full text-sm font-semibold tabular-nums whitespace-nowrap',
                      e.kind === 'ENAMED' ? 'bg-[linear-gradient(135deg,var(--color-primary),var(--color-violet))] text-white' : 'bg-white/10 text-white/85'
                    )}
                  >
                    {e.label}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Recursos (bento) */}
        <section id="recursos" className="container-custom py-20 sm:py-28 scroll-mt-16">
          <motion.div {...fadeUp()}>
            <SectionTitle
              eyebrow="Recursos"
              title="Tudo o que você precisa para treinar de verdade"
              text="Feito por quem estuda Medicina, para estudar do jeito que a prova cobra."
            />
          </motion.div>

          <div className="mt-12 grid md:grid-cols-6 gap-4">
            {/* Comentário */}
            <motion.article {...fadeUp(0)} className="md:col-span-4 rounded-[2rem] bg-white border border-line p-6 sm:p-8 overflow-hidden relative shadow-[0_20px_50px_-35px_oklch(30%_0.06_200/0.5)]">
              <div aria-hidden className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-lime/40 blur-3xl" />
              <span className="w-11 h-11 rounded-2xl bg-primary-soft text-primary-ink flex items-center justify-center"><BookOpenCheck size={22} /></span>
              <h3 className="mt-5 text-2xl font-extrabold">Gabarito comentado em cada questão</h3>
              <p className="mt-2 text-ink-2 leading-relaxed max-w-lg">
                Explicação do raciocínio, por que as outras alternativas erram, bizu e a diretriz de referência. No modo prova, tudo aparece na revisão final.
              </p>
              <div className="mt-6 rounded-2xl border border-line bg-bg-2/60 p-4 max-w-xl">
                <p className="text-sm font-semibold text-primary-ink flex items-center gap-1.5"><Check size={16} strokeWidth={3} /> Você acertou.</p>
                <p className="mt-2 text-sm text-ink-2 leading-relaxed">
                  A síndrome mão-pé-boca, caracterizada por febre e vesículas típicas, é causada pelo Coxsackievírus.
                </p>
                <p className="mt-3 text-xs text-muted"><b className="text-ink-2">Referência:</b> Tratado de Pediatria, Sociedade Brasileira de Pediatria, 5ª ed.</p>
              </div>
            </motion.article>

            {/* Desempenho */}
            <motion.article {...fadeUp(0.06)} className="md:col-span-2 rounded-[2rem] bg-ink text-white p-6 sm:p-8 relative overflow-hidden">
              <div aria-hidden className="absolute -right-10 -top-10 w-44 h-44 rounded-full bg-violet/40 blur-2xl" />
              <div aria-hidden className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-primary/30 blur-2xl" />
              <span className="relative w-11 h-11 rounded-2xl bg-white/10 text-primary flex items-center justify-center"><BarChart3 size={22} /></span>
              <h3 className="relative mt-5 text-2xl font-extrabold text-white">Veja sua evolução</h3>
              <p className="relative mt-2 text-white/70 leading-relaxed">Nota de cada simulado e acerto por área, com atalho para a mais fraca.</p>
              <div aria-hidden className="relative mt-6 flex items-end gap-1.5 h-24">
                {[38, 45, 42, 55, 61, 58, 70].map((h, i) => (
                  <span key={i} className={cn('flex-1 rounded-t-xl rounded-b-md', i === 6 ? 'bg-[linear-gradient(180deg,var(--color-lime),var(--color-primary))]' : 'bg-white/15')} style={{ height: `${h}%` }} />
                ))}
              </div>
            </motion.article>

            {/* Monte do seu jeito */}
            <motion.article {...fadeUp(0)} className="md:col-span-2 rounded-[2rem] bg-lime-soft border border-lime p-6 sm:p-7 hover:-rotate-1 transition-transform">
              <span className="w-11 h-11 rounded-2xl bg-lime text-ink flex items-center justify-center"><Sparkles size={22} /></span>
              <h3 className="mt-5 text-xl font-extrabold">Monte do seu jeito</h3>
              <p className="mt-2 text-ink-2 leading-relaxed">De 10 a 100 questões, uma área ou todas, modo estudo ou modo prova.</p>
            </motion.article>

            {/* Topografia */}
            <motion.article {...fadeUp(0.06)} className="md:col-span-2 rounded-[2rem] bg-violet-soft border border-violet/25 p-6 sm:p-7 hover:rotate-1 transition-transform">
              <span className="w-11 h-11 rounded-2xl bg-violet text-white flex items-center justify-center"><Map size={22} /></span>
              <h3 className="mt-5 text-xl font-extrabold">Por topografia</h3>
              <p className="mt-2 text-ink-2 leading-relaxed">
                Estude por região do corpo e escolha os assuntos.{topoOpen > 0 && ` ${topoOpen} ${topoOpen === 1 ? 'especialidade liberada' : 'especialidades liberadas'}.`}
              </p>
            </motion.article>

            {/* Nuvem */}
            <motion.article {...fadeUp(0.12)} className="md:col-span-2 rounded-[2rem] bg-primary-soft border border-primary/25 p-6 sm:p-7 hover:-rotate-1 transition-transform">
              <span className="w-11 h-11 rounded-2xl bg-primary text-white flex items-center justify-center"><Cloud size={22} /></span>
              <h3 className="mt-5 text-xl font-extrabold">Continue no celular</h3>
              <p className="mt-2 text-ink-2 leading-relaxed">Entre com o Google e seu histórico acompanha você em qualquer aparelho.</p>
            </motion.article>
          </div>
        </section>

        {/* Áreas */}
        <section id="areas" className="bg-white rounded-[2.5rem] mx-2 sm:mx-4 border border-line scroll-mt-16">
          <div className="container-custom py-20 sm:py-28">
            <motion.div {...fadeUp()} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <SectionTitle eyebrow="Áreas" title="Escolha por onde começar" text="Toque numa área para montar um simulado com ela e, se quiser, filtre pela prova de origem." />
              <button onClick={() => onSetup()} className="btn btn-ghost self-start md:self-auto">
                Todas as áreas misturadas
                <ArrowRight size={17} />
              </button>
            </motion.div>

            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {AREAS.map((area, i) => {
                const { Icon, tint, ink } = AREA_STYLE[area] ?? AREA_STYLE.ENAMED;
                return (
                  <motion.button
                    key={area}
                    {...fadeUp(i * 0.04)}
                    type="button"
                    onClick={() => onSetup(area)}
                    className={cn('group text-left rounded-[1.75rem] p-5 sm:p-6 border border-transparent transition-all hover:-translate-y-1 hover:rotate-[-1deg] hover:shadow-[0_22px_45px_-28px_oklch(30%_0.06_160/0.6)] hover:border-ink/10', tint)}
                  >
                    <span className={cn('w-12 h-12 rounded-2xl flex items-center justify-center bg-white shadow-sm transition-transform group-hover:scale-110 group-hover:rotate-6', ink)}>
                      <Icon size={22} />
                    </span>
                    <span className="mt-6 block font-heading text-lg sm:text-xl font-extrabold leading-tight text-ink">
                      {area}
                    </span>
                    <span className="mt-2 flex items-center justify-between gap-2 text-sm tabular-nums text-muted">
                      {fmt(COUNT_BY_AREA[area] ?? 0)} questões
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 text-primary-ink" />
                    </span>
                  </motion.button>
                );
              })}
              <motion.button
                {...fadeUp(AREAS.length * 0.04)}
                type="button"
                onClick={() => onSetup()}
                className="group text-left rounded-[1.75rem] p-5 sm:p-6 border bg-ink border-ink text-white col-span-2 relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_22px_45px_-28px_oklch(30%_0.06_160/0.5)]"
              >
                <span className="w-11 h-11 rounded-2xl flex items-center justify-center bg-white/10 text-primary">
                  <GraduationCap size={21} />
                </span>
                <span className="mt-6 block font-heading text-lg sm:text-xl font-extrabold leading-tight text-white">Filtre pela prova</span>
                <span className="mt-2 flex flex-wrap gap-1.5">
                  {SOURCES.map((src) => (
                    <span key={src.key} className="px-2.5 py-1 rounded-full bg-white/10 text-xs font-semibold text-white/85">
                      {src.key}
                    </span>
                  ))}
                </span>
                <span className="mt-3 flex items-center justify-between gap-2 text-sm tabular-nums text-white/65">
                  Combine área e origem no simulado
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 text-primary" />
                </span>
              </motion.button>
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section id="como-funciona" className="container-custom py-20 sm:py-28 scroll-mt-16">
          <motion.div {...fadeUp()}>
            <SectionTitle eyebrow="Como funciona" title="Três passos, nenhum cadastro" center />
          </motion.div>
          <ol className="mt-14 grid md:grid-cols-3 gap-5 relative">
            <span aria-hidden className="hidden md:block absolute top-7 left-[16%] right-[16%] border-t-2 border-dashed border-line-2" />
            {[
              ['Escolha a área e a quantidade', 'De 10 a 100 questões, de uma área só ou misturando todas.'],
              ['Responda e leia o comentário', 'Gabarito, explicação e referência a cada questão ou no fim, no modo prova.'],
              ['Veja onde precisa revisar', 'Acertos por área, revisão das erradas e um atalho para refazê-las.'],
            ].map(([title, text], i) => (
              <motion.li key={title} {...fadeUp(i * 0.08)} className="relative text-center px-4">
                <span className={cn('relative mx-auto w-14 h-14 rounded-2xl font-heading text-2xl font-extrabold flex items-center justify-center shadow-[0_14px_30px_-14px_oklch(40%_0.1_200/0.6)]', ['bg-primary text-white -rotate-6', 'bg-lime text-ink rotate-3', 'bg-violet text-white -rotate-3'][i])}>
                  {i + 1}
                </span>
                <h3 className="mt-6 text-xl font-extrabold">{title}</h3>
                <p className="mt-2 text-ink-2 leading-relaxed max-w-xs mx-auto">{text}</p>
              </motion.li>
            ))}
          </ol>
        </section>

        {/* Chamada final */}
        <section className="container-custom pb-20 sm:pb-28">
          <motion.div {...fadeUp()} className="relative overflow-hidden rounded-[2.5rem] bg-ink px-6 py-14 sm:px-14 sm:py-20 text-center">
            <div aria-hidden className="absolute -top-32 -left-20 w-[30rem] h-[30rem] rounded-full bg-primary/35 blur-3xl" />
            <div aria-hidden className="absolute -bottom-32 -right-20 w-[30rem] h-[30rem] rounded-full bg-violet/40 blur-3xl" />
            <div
              aria-hidden
              className="absolute inset-0 opacity-20"
              style={{ backgroundImage: 'radial-gradient(oklch(80% 0.05 165) 1px, transparent 1px)', backgroundSize: '22px 22px' }}
            />
            <h2 className="relative text-3xl sm:text-5xl font-extrabold text-white tracking-[-0.03em] max-w-2xl mx-auto">
              Seu próximo simulado começa <span className="text-lime">agora</span>.
            </h2>
            <p className="relative mt-4 text-lg text-white/70 max-w-xl mx-auto">
              {fmt(TOTAL_QUESTIONS)} questões comentadas esperando por você. Sem cadastro, sem custo.
            </p>
            <div className="relative mt-9 flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={() => onSetup()} className="btn btn-primary">
                Montar meu simulado
                <ArrowRight size={18} />
              </button>
              <button onClick={onQuickStart} className="btn border border-white/25 text-white hover:bg-white/10 transition-colors">
                <Zap size={17} fill="currentColor" className="text-primary" />
                10 questões agora
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="container-custom py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <Brand size="sm" />
          <p className="text-sm text-muted">
            Questões de provas públicas, organizadas e comentadas para estudo. ·{' '}
            <button type="button" onClick={onPrivacy} className="underline underline-offset-2 hover:text-ink">
              Política de privacidade
            </button>
          </p>
        </div>
      </footer>
    </div>
  );
};
