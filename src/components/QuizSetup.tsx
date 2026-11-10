import React, { useState } from 'react';
import {
  ArrowRight,
  Baby,
  BookOpenCheck,
  Check,
  ChevronLeft,
  ClipboardCheck,
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
import { Module, QuizSettings } from '../types';
import { AREAS, COUNT_BY_AREA, TOTAL_QUESTIONS } from '../data/stats';
import { SUGERIDOS_INFO, TOPOGRAPHY_COUNT, type SuggestedExamInfo } from '../data/resumo';
import { TOPOGRAPHY, TOPOGRAPHY_GROUPS } from '../data/topografia';
import { cn } from '../lib/utils';

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

const Step: React.FC<{ n: number; title: string; hint?: string; children: React.ReactNode }> = ({ n, title, hint, children }) => (
  <section className="pt-7 first:pt-0">
    <div className="flex items-center gap-3">
      <span className="w-6 h-6 rounded-full bg-ink text-white text-xs font-bold flex items-center justify-center shrink-0">{n}</span>
      <h2 className="text-lg font-extrabold">{title}</h2>
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
    <article className="relative flex flex-col rounded-2xl bg-ink text-white p-6 overflow-hidden">
      <div aria-hidden className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-primary/25 blur-2xl" />
      <div className="relative">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
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
      className="group flex flex-col text-left rounded-2xl border border-line-2 bg-white p-6 hover:border-primary hover:shadow-[0_20px_50px_-30px_oklch(30%_0.06_160/0.45)] transition-all"
    >
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-primary-ink">
        <Map size={14} aria-hidden />
        Novo
      </span>
      <span className="mt-2 block text-3xl font-extrabold font-heading text-ink">Por topografia</span>
      <span className="mt-2 block text-ink-2 leading-relaxed">
        Estude por região do corpo: escolha a especialidade e os assuntos que quer treinar.
      </span>
      <span className="mt-4 flex flex-wrap gap-1.5">
        {regions.map((r) => (
          <span key={r} className="px-2.5 py-1 rounded-full bg-bg-2 text-xs font-medium text-ink-2">
            {r}
          </span>
        ))}
        <span className="px-2.5 py-1 rounded-full bg-bg-2 text-xs font-medium text-muted">+{TOPOGRAPHY.length - regions.length}</span>
      </span>
      <span className="mt-auto pt-6 flex items-center justify-between gap-3">
        <span className="text-sm text-muted">
          {open === 0 ? 'Especialidades liberadas aos poucos' : `${open} de ${TOPOGRAPHY_GROUPS.length} especialidades disponíveis`}
        </span>
        <span className="flex items-center gap-1.5 text-sm font-semibold text-primary-ink shrink-0">
          Ver regiões
          <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
        </span>
      </span>
    </button>
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

  const modes = [
    { value: true, icon: BookOpenCheck, title: 'Modo estudo', text: 'Gabarito e comentário logo após cada questão.' },
    { value: false, icon: ClipboardCheck, title: 'Modo prova', text: 'Responda tudo e veja o gabarito comentado só no final.' },
  ];

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

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.03em]">Monte seu simulado</h1>
        <p className="mt-3 text-ink-2 text-lg max-w-2xl">
          Escolha a área, a quantidade e o jeito de responder. As questões são sorteadas a cada vez, então dá para repetir sem ver sempre as mesmas.
        </p>

        {/* Monte o seu */}
        <div className="mt-9 rounded-3xl border border-line-2 bg-white shadow-[0_30px_70px_-45px_oklch(30%_0.06_160/0.45)] overflow-hidden">
          <div className="p-5 sm:p-8 divide-y divide-line [&>section]:pb-7 [&>section:last-child]:pb-0">
            <Step n={1} title="Área" hint="toque para escolher">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                {options.map((o) => {
                  const active = settings.module === o.value;
                  const Icon = AREA_ICON[o.value] ?? Layers;
                  return (
                    <button
                      key={o.value}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setSettings({ ...settings, module: o.value })}
                      className={cn(
                        'relative flex flex-col items-start gap-3 p-3.5 sm:p-4 rounded-2xl border text-left transition-colors',
                        active ? 'border-primary bg-primary-soft' : 'border-line bg-white hover:border-line-2 hover:bg-bg'
                      )}
                    >
                      <span className={cn('w-9 h-9 rounded-xl flex items-center justify-center', active ? 'bg-primary text-white' : 'bg-bg-2 text-ink-2')}>
                        <Icon size={18} aria-hidden />
                      </span>
                      <span>
                        <span className={cn('block font-semibold leading-snug', active ? 'text-primary-ink' : 'text-ink')}>{o.label}</span>
                        <span className="block text-xs text-muted mt-0.5 tabular-nums">{fmt(o.count)} questões</span>
                      </span>
                      {active && (
                        <span className="absolute top-3 right-3 w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center">
                          <Check size={12} strokeWidth={3} />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </Step>

            <Step n={2} title="Quantidade de questões">
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {questionCounts.map((count) => {
                  const active = settings.questionCount === count;
                  return (
                    <button
                      key={count}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setSettings({ ...settings, questionCount: count })}
                      className={cn(
                        'py-3 rounded-xl border font-heading font-bold tabular-nums transition-colors',
                        active ? 'bg-ink border-ink text-white' : 'bg-white border-line text-ink hover:border-line-2'
                      )}
                    >
                      {count}
                    </button>
                  );
                })}
              </div>
              <p className="mt-2.5 flex items-center gap-1.5 text-sm text-muted">
                <Timer size={14} aria-hidden />
                Cerca de {duration(settings.questionCount)} de prova
              </p>
            </Step>

            <Step n={3} title="Como responder">
              <div className="grid sm:grid-cols-2 gap-2">
                {modes.map((m) => {
                  const active = settings.immediateFeedback === m.value;
                  return (
                    <button
                      key={m.title}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setSettings({ ...settings, immediateFeedback: m.value })}
                      className={cn(
                        'flex items-start gap-3 p-4 rounded-2xl border text-left transition-colors',
                        active ? 'border-primary bg-primary-soft' : 'border-line bg-white hover:border-line-2 hover:bg-bg'
                      )}
                    >
                      <span className={cn('w-9 h-9 rounded-xl flex items-center justify-center shrink-0', active ? 'bg-primary text-white' : 'bg-bg-2 text-ink-2')}>
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

          <div className="px-5 sm:px-8 py-5 bg-bg-2 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-ink-2">
              <span className="font-semibold text-ink">
                {settings.questionCount} questões {areaText}
              </span>
              , sorteadas entre {fmt(pool)} · {settings.immediateFeedback ? 'modo estudo' : 'modo prova'}
            </p>
            <button onClick={() => onStart(settings)} className="btn btn-primary sm:px-10 flex items-center justify-center gap-2">
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
