/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Component, lazy, Suspense, useEffect, useState, type ReactNode } from 'react';
import { MotionConfig } from 'motion/react';
import { LandingPage } from './components/LandingPage';
import { Module, Question, QuizSettings, QuizResults, UserAnswer } from './types';
import { SUGERIDOS_INFO } from './data/resumo';
import { findTopographyGroup, TOPOGRAPHY } from './data/topografia';
import { loadBank, pickQuestions } from './data/banco';

// Telas carregadas sob demanda: a página inicial abre sem esperar por elas.
const loadSetup = () => import('./components/QuizSetup');
const loadTopography = () => import('./components/TopographySetup');
const loadSession = () => import('./components/QuizSession');
const loadResults = () => import('./components/ResultsView');
const QuizSetup = lazy(() => loadSetup().then((m) => ({ default: m.QuizSetup })));
const TopographySetup = lazy(() => loadTopography().then((m) => ({ default: m.TopographySetup })));
const QuizSession = lazy(() => loadSession().then((m) => ({ default: m.QuizSession })));
const ResultsView = lazy(() => loadResults().then((m) => ({ default: m.ResultsView })));

/** Se uma tela não carregar (sem internet ou depois de um deploy novo), oferece recarregar. */
class LoadBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? <Loading error /> : this.props.children;
  }
}

type AppState = 'landing' | 'setup' | 'topography' | 'quiz' | 'results';

const reload = () => window.location.reload();

/** Aparece só se o carregamento demorar (o atraso fica no CSS), para não piscar na tela. */
function Loading({ error, onCancel }: { error?: boolean; onCancel?: () => void }) {
  return (
    <div
      role="status"
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm animate-[fade-in_200ms_300ms_both]"
    >
      {error ? (
        <div className="text-center px-6">
          <p className="font-semibold text-ink">Não foi possível carregar as questões.</p>
          <p className="text-sm text-muted mt-1">Verifique sua conexão e recarregue a página.</p>
          <div className="mt-4 flex justify-center gap-2">
            <button type="button" onClick={reload} className="btn btn-primary">
              Recarregar a página
            </button>
            {onCancel && (
              <button type="button" onClick={onCancel} className="btn btn-ghost">
                Voltar
              </button>
            )}
          </div>
        </div>
      ) : (
        <p className="flex items-center gap-3 text-ink-2">
          <span className="w-5 h-5 rounded-full border-2 border-primary border-t-transparent animate-spin" aria-hidden />
          Carregando questões…
        </p>
      )}
    </div>
  );
}

export default function App() {
  const [state, setState] = useState<AppState>('landing');
  const [settings, setSettings] = useState<QuizSettings | null>(null);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [results, setResults] = useState<QuizResults | null>(null);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [initialModule, setInitialModule] = useState<Module>('Misto');
  const [starting, setStarting] = useState<QuizSettings | null>(null);
  const [loadError, setLoadError] = useState(false);

  // Depois que a página inicial aparece, baixa o resto em segundo plano.
  useEffect(() => {
    const preload = () => {
      loadBank().catch(() => {});
      [loadSetup, loadTopography, loadSession, loadResults].forEach((load) => load().catch(() => {}));
    };
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(preload, { timeout: 3000 });
      return () => window.cancelIdleCallback(id);
    }
    const id = setTimeout(preload, 1500);
    return () => clearTimeout(id);
  }, []);

  const handleStartSetup = (module?: Module) => {
    setInitialModule(module ?? 'Misto');
    setState('setup');
    window.scrollTo(0, 0);
  };

  const handleOpenTopography = () => {
    setState('topography');
    window.scrollTo(0, 0);
  };

  /** Título e aviso mostrados durante o simulado (sugerido ou por topografia). */
  const sessionInfo = (() => {
    const preset = SUGERIDOS_INFO.find((s) => s.id === settings?.presetId);
    if (preset) return { title: preset.title, warning: preset.warning };
    const t = settings?.topography;
    if (!t) return undefined;
    const name = findTopographyGroup(t)?.name ?? TOPOGRAPHY.find((r) => r.id === t)?.name;
    return name ? { title: name } : undefined;
  })();

  /** Sorteia as questões (o banco pode ainda estar chegando) e abre o simulado. */
  const startQuiz = async (newSettings: QuizSettings) => {
    setStarting(newSettings);
    setLoadError(false);
    try {
      const questions = await pickQuestions(newSettings);
      setSettings(newSettings);
      setActiveQuestions(questions);
      setState('quiz');
      setStarting(null);
    } catch {
      setLoadError(true);
    }
  };

  const handleQuickStart = () => startQuiz({ questionCount: 10, module: 'Misto', immediateFeedback: true });

  const handleFinishQuiz = (finalResults: QuizResults, answers: UserAnswer[]) => {
    setResults(finalResults);
    setUserAnswers(answers);
    setState('results');
  };

  // Refazer: mesmas questões, mesma ordem.
  const handleResetQuiz = () => {
    setUserAnswers([]);
    setResults(null);
    setState('quiz');
  };

  const handleNewQuiz = () => {
    setSettings(null);
    setUserAnswers([]);
    setResults(null);
    setState('setup');
  };

  const handleGoHome = () => {
    setSettings(null);
    setUserAnswers([]);
    setResults(null);
    setState('landing');
  };

  return (
    <MotionConfig reducedMotion="user">
    <div className="antialiased">
      <LoadBoundary>
      <Suspense fallback={<Loading />}>
      {state === 'landing' && <LandingPage onSetup={handleStartSetup} onQuickStart={handleQuickStart} />}

      {state === 'setup' && (
        <QuizSetup
          initialModule={initialModule}
          onBack={handleGoHome}
          onStart={startQuiz}
          onTopography={handleOpenTopography}
        />
      )}

      {state === 'topography' && (
        <TopographySetup onBack={() => handleStartSetup()} onHome={handleGoHome} onStart={startQuiz} />
      )}

      {state === 'quiz' && settings && (
        <QuizSession
          // Nova chave a cada sorteio: o simulado começa do zero mesmo com as mesmas configurações.
          key={activeQuestions.map((q) => q.id).join()}
          questions={activeQuestions}
          settings={settings}
          info={sessionInfo}
          onExit={handleGoHome}
          onFinish={handleFinishQuiz}
        />
      )}

      {state === 'results' && results && (
        <ResultsView
          results={results}
          onReset={handleResetQuiz}
          onNew={handleNewQuiz}
          onHome={handleGoHome}
        />
      )}
      </Suspense>
      </LoadBoundary>

      {starting && (
<Loading error={loadError} onCancel={() => setStarting(null)} />
      )}
    </div>
    </MotionConfig>
  );
}
