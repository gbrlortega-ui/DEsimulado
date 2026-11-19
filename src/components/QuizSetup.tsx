import React, { useState } from 'react';
import {
  ArrowRight,
  Baby,
  BookOpenCheck,
  Building2,
  Check,
  ChevronLeft,
  ClipboardCheck,
  ClipboardList,
  GraduationCap,
  Layers,
  Map,
  Microscope,
  Scissors,
  Stethoscope,
  Timer,
  Users,
  Venus,
  type LucideIcon,
} from 'lucide-react';
import { Brand } from './Brand';
import { FloatingHeader, PageGlow, headerLink } from './PageChrome';
import { Module, QuizSettings } from '../types';
import { AREAS, COUNT_BY_AREA_SOURCE, SOURCES, type ExamSource } from '../data/stats';
import { SUGERIDOS_INFO, TOPOGRAPHY_COUNT, type SuggestedExamInfo } from '../data/resumo';
import { TOPOGRAPHY, TOPOGRAPHY_GROUPS } from '../data/topografia';
import { cn, settingsTitle } from '../lib/utils';

interface QuizSetupProps {
  initialModule?: Module;
  onBack: () => void;
  onStart: (settings: QuizSettings) => void;
  onTopography: () => void;
}

const questionCounts = [10, 20, 30, 40, 50, 60, 80, 100];
const fmt = (n: number) => n.toLocaleString('pt-BR');

/** Tempo estimado: 1 min 30 s por questão, como no cronômetro do simulado. */
const duration = (n: number) => {
  const min = Math.round(n * 1.5);
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m ? `${h}h${String(m).padStart(2, '0')}` : `${h}h`;
};

/** Cor de cada área (mesmas da página inicial). */
const AREA_TINT: Partial<Record<Module, string>> = {
  Misto: 'bg-[linear-gradient(135deg,oklch(93%_0.07_160),oklch(93.5%_0.05_295))] text-[oklch(40%_0.12_200)]',
  'Clínica Médica': 'bg-[oklch(93%_0.07_160)] text-[oklch(42%_0.12_160)]',
  Cirurgia: 'bg-[oklch(93.5%_0.05_230)] text-[oklch(42%_0.12_240)]',
  Pediatria: 'bg-[oklch(94%_0.08_90)] text-[oklch(45%_0.11_65)]',
  'Ginecologia e Obstetrícia': 'bg-[oklch(93.5%_0.05_350)] text-[oklch(45%_0.13_350)]',
  'Saúde Coletiva': 'bg-[oklch(93.5%_0.05_195)] text-[oklch(42%_0.1_200)]',
  'Ciências Básicas': 'bg-[oklch(93.5%_0.05_290)] text-[oklch(44%_0.13_290)]',
};

const AREA_ICON: Partial<Record<Module, LucideIcon>> = {
  Misto: Layers,
  'Clínica Médica': Stethoscope,
  Cirurgia: Scissors,
  Pediatria: Baby,
  'Ginecologia e Obstetrícia': Venus,
  'Saúde Coletiva': Users,
  'Ciências Básicas': Microscope,
  ENAMED: GraduationCap,
};

/** Cartão marcável dos filtros (área ou origem da prova). */
const FilterCard: React.FC<{
  active: boolean;
  disabled?: boolean;
  icon: LucideIcon;
  title: string;
  detail: string;
  tint?: string;
  onClick: () => void;
}> = ({ active, disabled, icon: Icon, title, detail, tint, onClick }) => (
  <button
    type="button"
    aria-pressed={active}
    disabled={disabled && !active}
    onClick={onClick}
    className={cn(
      'group relative flex flex-col items-start gap-3 p-3.5 sm:p-4 rounded-[1.25rem] border-[1.5px] text-left transition-all',
      active
        ? 'border-primary bg-primary-soft shadow-[0_0_0_4px_oklch(68%_0.2_160/0.14)]'
        : 'border-line bg-white hover:border-ink/15 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-22px_oklch(30%_0.08_200/0.6)]',
      disabled && !active && 'opacity-45 cursor-not-allowed hover:translate-y-0 hover:shadow-none hover:border-line'
    )}
  >
    <span
      className={cn(
        'w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-6',
        active ? 'bg-[linear-gradient(135deg,oklch(72%_0.2_150),oklch(62%_0.18_185))] text-white' : tint ?? 'bg-bg-2 text-ink-2'
      )}
    >
      <Icon size={19} aria-hidden />
    </span>
    <span>
      <span className={cn('block font-semibold leading-snug', active ? 'text-primary-ink' : 'text-ink')}>{title}</span>
      <span className="block text-xs text-muted mt-0.5 tabular-nums">{detail}</span>
    </span>
    {active && (
      <span className="absolute top-3 right-3 w-6 h-6 rounded-full bg-lime text-ink flex items-center justify-center shadow-sm">
        <Check size={12} strokeWidth={3} />
      </span>
    )}
  </button>
);

/** Etiqueta marcável (origem da prova). */
const FilterChip: React.FC<{ active: boolean; disabled?: boolean; label: string; count: number; title?: string; onClick: () => void }> = ({
  active,
  disabled,
  label,
  count,
  title,
  onClick,
}) => (
  <button
    type="button"
    aria-pressed={active}
    disabled={disabled && !active}
    title={title}
    onClick={onClick}
    className={cn(
      'inline-flex items-center gap-2 pl-3.5 pr-2 py-2 rounded-full border-[1.5px] text-sm font-semibold transition-all',
      active
        ? 'bg-ink border-ink text-white shadow-[0_8px_20px_-10px_oklch(20%_0.02_165/0.7)]'
        : 'bg-white border-line text-ink hover:border-ink/25 hover:-translate-y-0.5',
      disabled && !active && 'opacity-40 cursor-not-allowed hover:translate-y-0 hover:border-line'
    )}
  >
    {active && <Check size={14} strokeWidth={3} className="text-lime -ml-1" aria-hidden />}
    {label}
    <span className={cn('px-2 py-0.5 rounded-full text-xs tabular-nums', active ? 'bg-white/15 text-white' : 'bg-bg-2 text-muted')}>{fmt(count)}</span>
  </button>
);

const SOURCE_ICON: Record<ExamSource['kind'], LucideIcon> = {
  TP: ClipboardList,
  ENAMED: GraduationCap,
  Residência: Building2,
};

const Step: React.FC<{ n: number; title: string; hint?: string; children: React.ReactNode }> = ({ n, title, hint, children }) => (
  <section className="pt-7 first:pt-0">
    <div className="flex items-center gap-3">
      <span
        className={cn(
          'w-8 h-8 rounded-xl font-heading text-sm font-extrabold flex items-center justify-center shrink-0',
          ['bg-primary text-white -rotate-6', 'bg-lime text-ink rotate-3', 'bg-violet text-white -rotate-3', 'bg-ink text-white rotate-6'][(n - 1) % 4]
        )}
      >
        {n}
      </span>
      <h2 className="text-xl font-extrabold">{title}</h2>
      {hint && <span className="text-sm text-muted hidden sm:inline">{hint}</span>}
    </div>
    <div className="mt-3.5">{children}</div>
  </section>
);

/** Cartão do simulado sugerido: lista fixa de questões, feita na ordem. */
const SuggestedCard: React.FC<{ exam: SuggestedExamInfo; onStart: (settings: QuizSettings) => void }> = ({ exam, onStart }) => {
  const n = exam.count;
  const start = (immediateFeedback: boolean) =>
    onStart({ questionCount: n, module: 'Misto', immediateFeedback, presetId: exam.id });
  return (
    <article className="relative flex flex-col rounded-[2rem] bg-ink text-white p-6 sm:p-7 overflow-hidden">
      <div aria-hidden className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-violet/40 blur-3xl" />
      <div aria-hidden className="absolute -left-16 -bottom-16 w-56 h-56 rounded-full bg-primary/30 blur-3xl" />
      <div className="relative">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-lime px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-ink">
          <GraduationCap size={14} aria-hidden />
          Simulado sugerido
        </span>
        <h3 className="mt-2 text-3xl font-extrabold text-white">{exam.title}</h3>
        <p className="mt-2 text-white/75 leading-relaxed">{exam.description}</p>
        <dl className="mt-4 flex gap-6 text-sm">
          <div>
            <dt className="text-white/55 text-xs">Questões</dt>
            <dd className="font-heading font-bold text-lg tabular-nums">{n}</dd>
          </div>
          <div>
            <dt className="text-white/55 text-xs">Tempo estimado</dt>
            <dd className="font-heading font-bold text-lg tabular-nums">{duration(n)}</dd>
          </div>
        </dl>
      </div>
      <div className="relative mt-auto pt-6 flex flex-col gap-2.5">
        <button type="button" onClick={() => start(false)} className="btn btn-primary w-full">
          Fazer como prova
        </button>
        <button
          type="button"
          onClick={() => start(true)}
          className="btn w-full border border-white/25 text-white hover:bg-white/10 transition-colors"
        >
          Fazer com gabarito a cada questão
        </button>
      </div>
    </article>
  );
};

const TopographyCard: React.FC<{ onOpen: () => void }> = ({ onOpen }) => {
  const open = TOPOGRAPHY_GROUPS.filter((g) => (TOPOGRAPHY_COUNT[g.id] ?? 0) > 0).length;
  const regions = TOPOGRAPHY.slice(0, 6).map((r) => r.name);
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative overflow-hidden flex flex-col text-left rounded-[2rem] border border-violet/25 bg-violet-soft p-6 sm:p-7 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_oklch(40%_0.15_295/0.6)] transition-all"
    >
      <span className="self-start inline-flex items-center gap-1.5 rounded-full bg-violet px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white">
        <Map size={14} aria-hidden />
        Novo
      </span>
      <span className="mt-2 block text-3xl font-extrabold font-heading text-ink">Por topografia</span>
      <span className="mt-2 block text-ink-2 leading-relaxed">
        Estude por região do corpo: escolha a especialidade e os assuntos que quer treinar.
      </span>
      <span className="mt-4 flex flex-wrap gap-1.5">
        {regions.map((r) => (
          <span key={r} className="px-2.5 py-1 rounded-full bg-white text-xs font-medium text-ink-2">
            {r}
          </span>
        ))}
        <span className="px-2.5 py-1 rounded-full bg-white text-xs font-medium text-muted">+{TOPOGRAPHY.length - regions.length}</span>
      </span>
      <span className="mt-auto pt-6 flex items-center justify-between gap-3">
        <span className="text-sm text-muted">
          {open === 0 ? 'Especialidades liberadas aos poucos' : `${open} de ${TOPOGRAPHY_GROUPS.length} especialidades disponíveis`}
        </span>
        <span className="flex items-center gap-1.5 text-sm font-semibold text-violet shrink-0">
          Ver regiões
          <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
        </span>
      </span>
    </button>
  );
};

export const QuizSetup: React.FC<QuizSetupProps> = ({ initialModule = 'Misto', onBack, onStart, onTopography }) => {
  const [areas, setAreas] = useState<Module[]>(initialModule !== 'Misto' && AREAS.includes(initialModule) ? [initialModule] : []);
  const [sources, setSources] = useState<string[]>(initialModule === 'ENAMED' ? ['ENAMED'] : []);
  const [questionCount, setQuestionCount] = useState(20);
  const [immediateFeedback, setImmediateFeedback] = useState(true);

  const allSources = SOURCES.map((s) => s.key);
  const countFor = (as: Module[], ss: string[]) =>
    (as.length ? as : AREAS).reduce(
      (sum, a) => sum + (ss.length ? ss : allSources).reduce((n, s) => n + (COUNT_BY_AREA_SOURCE[`${a}|${s}`] ?? 0), 0),
      0
    );
  const pool = countFor(areas, sources);

  /** Marca/desmarca; marcar todas equivale a "Todas". */
  const toggle = <T,>(list: T[], item: T, all: T[]) => {
    const next = list.includes(item) ? list.filter((x) => x !== item) : [...list, item];
    return next.length === all.length ? [] : next;
  };

  const settings: QuizSettings = {
    questionCount,
    immediateFeedback,
    module: areas.length === 1 ? areas[0] : 'Misto',
    areas: areas.length ? areas : undefined,
    sources: sources.length ? sources : undefined,
  };

  const modes = [
    { value: true, icon: BookOpenCheck, title: 'Modo estudo', text: 'Gabarito e comentário logo após cada questão.' },
    { value: false, icon: ClipboardCheck, title: 'Modo prova', text: 'Responda tudo e veja o gabarito comentado só no final.' },
  ];

  return (
    <div className="relative min-h-screen bg-bg overflow-x-clip">
      <PageGlow />
      <FloatingHeader className="max-w-5xl">
          <Brand onClick={onBack} />
          <button onClick={onBack} className={headerLink}>
            <ChevronLeft size={16} />
            Voltar
          </button>
        </FloatingHeader>

      <main className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.04em]">
          Monte seu <span className="text-gradient">simulado</span>
        </h1>
        <p className="mt-3 text-ink-2 text-lg max-w-2xl">
          Escolha as áreas, a origem das provas, a quantidade e o jeito de responder. As questões são sorteadas a cada vez, então dá para repetir sem ver sempre as mesmas.
        </p>

        {/* Monte o seu */}
        <div className="mt-9 rounded-[2rem] border border-white bg-white/85 backdrop-blur-xl shadow-[0_30px_70px_-40px_oklch(30%_0.08_200/0.45),0_0_0_1px_oklch(92%_0.01_165)]">
          <div className="p-5 sm:p-8 divide-y divide-line [&>section]:pb-7 [&>section:last-child]:pb-0">
            <Step n={1} title="Áreas" hint="escolha uma ou mais">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                <FilterCard
                  active={!areas.length}
                  icon={Layers}
                  tint={AREA_TINT.Misto}
                  title="Todas as áreas"
                  detail={`${fmt(countFor([], sources))} questões`}
                  onClick={() => setAreas([])}
                />
                {AREAS.map((a) => {
                  const n = countFor([a], sources);
                  return (
                    <FilterCard
                      key={a}
                      active={areas.includes(a)}
                      disabled={n === 0}
                      icon={AREA_ICON[a] ?? Layers}
                      tint={AREA_TINT[a]}
                      title={a}
                      detail={n === 0 ? 'Sem questões nessa origem' : `${fmt(n)} questões`}
                      onClick={() => setAreas(toggle(areas, a, AREAS))}
                    />
                  );
                })}
              </div>
            </Step>

            <Step n={2} title="Origem da prova" hint="escolha uma ou mais">
              <div className="space-y-4">
                <FilterChip active={!sources.length} label="Todas as provas" count={countFor(areas, [])} onClick={() => setSources([])} />
                {(['TP', 'ENAMED', 'Residência'] as const).map((kind) => {
                  const list = SOURCES.filter((src) => src.kind === kind);
                  if (!list.length) return null;
                  const Icon = SOURCE_ICON[kind];
                  return (
                    <div key={kind}>
                      <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted mb-2">
                        <Icon size={14} aria-hidden />
                        {kind === 'TP' ? 'Teste de Progresso' : kind === 'ENAMED' ? 'ENAMED' : 'Residência e Revalida'}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {list.map((src) => {
                          const n = countFor(areas, [src.key]);
                          return (
                            <FilterChip
                              key={src.key}
                              active={sources.includes(src.key)}
                              disabled={n === 0}
                              label={src.label}
                              count={n}
                              title={`${src.label} · ${src.years}`}
                              onClick={() => setSources(toggle(sources, src.key, allSources))}
                            />
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Step>

            <Step n={3} title="Quantidade de questões">
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {questionCounts.map((count) => {
                  const active = questionCount === count;
                  return (
                    <button
                      key={count}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setQuestionCount(count)}
                      className={cn(
                        'py-3 rounded-full border-[1.5px] font-heading font-bold tabular-nums transition-all',
                        active
                          ? 'border-transparent text-white bg-[linear-gradient(135deg,oklch(70%_0.2_155),oklch(62%_0.18_180))] shadow-[0_10px_22px_-10px_oklch(60%_0.18_165/0.8)] scale-105'
                          : 'bg-white border-line text-ink hover:border-ink/25 hover:-translate-y-0.5'
                      )}
                    >
                      {count}
                    </button>
                  );
                })}
              </div>
              <p className="mt-2.5 flex items-center gap-1.5 text-sm text-muted">
                <Timer size={14} aria-hidden />
                Cerca de {duration(questionCount)} de prova
              </p>
            </Step>

            <Step n={4} title="Como responder">
              <div className="grid sm:grid-cols-2 gap-2">
                {modes.map((m) => {
                  const active = immediateFeedback === m.value;
                  return (
                    <button
                      key={m.title}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setImmediateFeedback(m.value)}
                      className={cn(
                        'flex items-start gap-3 p-4 rounded-[1.25rem] border-[1.5px] text-left transition-all',
                        active
                          ? 'border-primary bg-primary-soft shadow-[0_0_0_4px_oklch(68%_0.2_160/0.14)]'
                          : 'border-line bg-white hover:border-ink/15 hover:-translate-y-0.5'
                      )}
                    >
                      <span
                        className={cn(
                          'w-10 h-10 rounded-xl flex items-center justify-center shrink-0',
                          active ? 'bg-[linear-gradient(135deg,oklch(72%_0.2_150),oklch(62%_0.18_185))] text-white' : m.value ? 'bg-lime-soft text-[oklch(45%_0.12_130)]' : 'bg-violet-soft text-violet'
                        )}
                      >
                        <m.icon size={18} aria-hidden />
                      </span>
                      <span>
                        <span className={cn('block font-semibold', active ? 'text-primary-ink' : 'text-ink')}>{m.title}</span>
                        <span className="block text-sm text-muted mt-0.5">{m.text}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </Step>
          </div>

          <div className="sticky bottom-3 z-30 mx-2 sm:mx-3 mb-2 sm:mb-3 px-4 sm:px-6 py-3.5 sm:py-4 rounded-[1.5rem] bg-ink text-white shadow-[0_20px_40px_-18px_oklch(20%_0.03_200/0.7)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <p className="text-white/70 text-sm sm:text-base">
              {pool === 0 ? (
                <span className="font-semibold text-white">Nenhuma questão nessa combinação de área e prova.</span>
              ) : (
                <>
                  <span className="font-semibold text-white">
                    {Math.min(questionCount, pool)} questões · {settingsTitle(settings)}
                  </span>
                  , sorteadas entre {fmt(pool)} · {immediateFeedback ? 'modo estudo' : 'modo prova'}
                  {pool < questionCount && <span className="block text-sm text-lime mt-0.5">Essa combinação tem só {fmt(pool)} questões.</span>}
                </>
              )}
            </p>
            <button
              onClick={() => onStart(settings)}
              disabled={pool === 0}
              className="btn btn-primary sm:px-10 flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Começar simulado
              <ArrowRight size={18} aria-hidden />
            </button>
          </div>
        </div>

        {/* Outros jeitos de treinar */}
        <section className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Outros jeitos de treinar</h2>
          <p className="mt-2 text-ink-2">Um simulado pronto para medir seu nível ou um treino focado em uma região do corpo.</p>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {SUGERIDOS_INFO.map((exam) => (
              <SuggestedCard key={exam.id} exam={exam} onStart={onStart} />
            ))}
            <TopographyCard onOpen={onTopography} />
          </div>
        </section>
      </main>
    </div>
  );
};
