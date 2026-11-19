/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Component, lazy, Suspense, useEffect, useMemo, useState, type ReactNode } from 'react';
import { MotionConfig } from 'motion/react';
import { LandingPage } from './components/LandingPage';
import { Module, Question, QuizSettings, QuizResults, UserAnswer } from './types';
import { SUGERIDOS_INFO } from './data/resumo';
import { findTopographyGroup, TOPOGRAPHY } from './data/topografia';
import { loadBank, pickQuestions, questionsByIds } from './data/banco';
import { clearProgress, loadProgress, type SavedQuiz } from './lib/progress';
import { addToHistory, answersFromHistory, clearHistory, loadHistory, summarize, type HistoryEntry } from './lib/history';
import { useAccount } from './lib/account';
import { scored, settingsTitle } from './lib/utils';

// Telas carregadas sob demanda: a página inicial abre sem esperar por elas.
const loadSetup = () => import('./components/QuizSetup');
const loadTopography = () => import('./components/TopographySetup');
const loadSession = () => import('./components/QuizSession');
const loadResults = () => import('./components/ResultsView');
const loadStats = () => import('./components/MinhasEstatisticas');
const QuizSetup = lazy(() => loadSetup().then((m) => ({ default: m.QuizSetup })));
const TopographySetup = lazy(() => loadTopography().then((m) => ({ default: m.TopographySetup })));
const QuizSession = lazy(() => loadSession().then((m) => ({ default: m.QuizSession })));
const ResultsView = lazy(() => loadResults().then((m) => ({ default: m.ResultsView })));
const MinhasEstatisticas = lazy(() => loadStats().then((m) => ({ default: m.MinhasEstatisticas })));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy').then((m) => ({ default: m.PrivacyPolicy })));

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

type AppState = 'landing' | 'setup' | 'topography' | 'quiz' | 'results' | 'privacy' | 'stats';

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
  /** Simulado em andamento salvo no navegador (aparece na página inicial para continuar). */
  const [saved, setSaved] = useState<SavedQuiz | null>(() => loadProgress());
  /** Simulados já feitos neste navegador (painel "Seu desempenho"). */
  const [history, setHistory] = useState<HistoryEntry[]>(() => loadHistory());
  /** Média de acerto antes do simulado atual, para comparar no resultado. */
  const [previousAverage, setPreviousAverage] = useState<number | null>(null);
  /** Respostas questão a questão do histórico (tela "Minhas estatísticas"). */
  const detalhe = useMemo(() => answersFromHistory(history), [history]);
  /** Conta opcional (login com Google): sincroniza histórico e simulado em andamento. */
  const account = useAccount({ onHistory: setHistory, onProgress: setSaved });

  /** Troca de tela registrando no histórico: o "voltar" do navegador/celular volta uma tela, sem sair do site. */
  const go = (next: AppState, replace = false) => {
    setState(next);
    const entry = { tela: next };
    if (replace) window.history.replaceState(entry, '');
    else if (window.history.state?.tela !== next) window.history.pushState(entry, '');
    window.scrollTo(0, 0);
  };

  // "Voltar"/"avançar" do navegador. O simulado em andamento fica salvo e pode ser retomado.
  useEffect(() => {
    const onPop = (e: PopStateEvent) => {
      const tela = (e.state?.tela as AppState | undefined) ?? 'landing';
      setStarting(null);
      setState(tela);
      if (tela === 'landing') setSaved(loadProgress());
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // Página recarregada no meio do simulado: volta direto para a questão em que o aluno estava.
  useEffect(() => {
    if (window.history.state?.tela === 'quiz' && saved) resumeQuiz(saved, true);
    else window.history.replaceState({ tela: 'landing' }, '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Depois que a página inicial aparece, baixa o resto em segundo plano.
  useEffect(() => {
    const preload = () => {
      loadBank().catch(() => {});
      account.prefetch(); // Firebase pronto para o login abrir a janela na hora do toque
      [loadSetup, loadTopography, loadSession, loadResults, loadStats].forEach((load) => load().catch(() => {}));
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
    go('setup');
  };

  const handleOpenTopography = () => go('topography');

  /** Título e aviso mostrados durante o simulado (sugerido ou por topografia). */
  const sessionInfo = (() => {
    const preset = SUGERIDOS_INFO.find((s) => s.id === settings?.presetId);
    if (preset) return { title: preset.title, warning: preset.warning };
    if (settings?.temaNome) return { title: settings.temaNome };
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
      clearProgress(); // um simulado novo substitui o que estava em andamento
      setSaved(null);
      setSettings(newSettings);
      setActiveQuestions(questions);
      go('quiz');
      setStarting(null);
    } catch {
      setLoadError(true);
    }
  };

  /** Continua o simulado salvo: mesmas questões, respostas e cronômetro. */
  const resumeQuiz = async (progress: SavedQuiz, replace = false) => {
    setStarting(progress.settings);
    setLoadError(false);
    try {
      const questions = await questionsByIds(progress.ids);
      if (!questions) {
        // Alguma questão saiu do banco: não dá para retomar com segurança.
        clearProgress();
        setSaved(null);
        setStarting(null);
        if (replace) window.history.replaceState({ tela: 'landing' }, '');
        return;
      }
      setSettings(progress.settings);
      setActiveQuestions(questions);
      go('quiz', replace);
      setStarting(null);
    } catch {
      setLoadError(true);
    }
  };

  const discardSaved = () => {
    clearProgress();
    setSaved(null);
  };

  /** "Treinar este tema" em Minhas estatísticas: simulado só com questões do tema. */
  const handleTrainTema = (tema: string, temaNome: string) =>
    startQuiz({ questionCount: 20, module: 'Misto', immediateFeedback: true, tema, temaNome });

  /** "Revisar as que errei": as questões erradas (do tema ou todas), com o comentário a cada resposta. */
  const handleReview = (ids: string[], nome: string) =>
    startQuiz({ questionCount: ids.length, module: 'Misto', immediateFeedback: true, ids, temaNome: `Revisão · ${nome}` });

  /** Simulado diagnóstico: 60 questões, 12 de cada grande área, com correção no fim (como a prova). */
  const handleDiagnostic = () =>
    startQuiz({ questionCount: 60, module: 'Misto', immediateFeedback: false, diagnostico: true, temaNome: 'Simulado diagnóstico' });

  const handleQuickStart = () => startQuiz({ questionCount: 10, module: 'Misto', immediateFeedback: true });

  const handleFinishQuiz = (finalResults: QuizResults, answers: UserAnswer[]) => {
    const answered = finalResults.correctCount + finalResults.wrongCount;
    // Questão a questão (para "Minhas estatísticas"): só as respondidas e que entram na nota.
    const byQuestion = new Map(answers.map((a) => [a.questionId, a]));
    const certas: string[] = [];
    const erradas: string[] = [];
    for (const q of scored(activeQuestions)) {
      const a = byQuestion.get(q.id);
      if (a?.selectedOption == null) continue;
      (a.isCorrect ? certas : erradas).push(q.id);
    }
    setPreviousAverage(history.length ? summarize(history).perc : null);
    if (answered > 0 && finalResults.totalQuestions > 0) {
      const updated = addToHistory({
          at: Date.now(),
          title: sessionInfo?.title ?? (settings ? settingsTitle(settings) : 'Todas as áreas'),
          score: finalResults.score,
          correct: finalResults.correctCount,
          total: finalResults.totalQuestions,
          timeSpent: finalResults.timeSpent,
          areas: Object.fromEntries(
            Object.entries(finalResults.modulePerformance).filter(([, p]) => p.total > 0)
          ),
          certas: certas.join(' '),
          erradas: erradas.join(' '),
      });
      setHistory(updated);
      account.pushHistory(updated);
    }
    setResults(finalResults);
    setUserAnswers(answers);
    setSaved(null);
    go('results', true); // "voltar" no resultado não reabre o simulado já entregue
  };

  // Refazer: mesmas questões, mesma ordem.
  const handleResetQuiz = () => {
    setUserAnswers([]);
    setResults(null);
    go('quiz', true);
  };

  // Refazer só o que errou ou deixou em branco, na mesma ordem.
  const handleRetryMissed = (missed: Question[]) => {
    if (!settings) return;
    setSettings({ ...settings, questionCount: missed.length });
    setActiveQuestions(missed);
    setUserAnswers([]);
    setResults(null);
    go('quiz', true);
  };

  const handleNewQuiz = () => {
    setSettings(null);
    setUserAnswers([]);
    setResults(null);
    go('setup');
  };

  const handleGoHome = () => {
    setSettings(null);
    setUserAnswers([]);
    setResults(null);
    setSaved(loadProgress());
    go('landing');
  };

  // Tela sem os dados de que precisa (ex.: "avançar" do navegador depois de sair): mostra a inicial.
  const screen: AppState = (state === 'quiz' && !settings) || (state === 'results' && !results) ? 'landing' : state;

  return (
    <MotionConfig reducedMotion="user">
    <div className="antialiased">
      <LoadBoundary>
      <Suspense fallback={<Loading />}>
      {screen === 'landing' && (
        <LandingPage
          onSetup={handleStartSetup}
          onQuickStart={handleQuickStart}
          history={history}
          account={account}
          onPrivacy={() => go('privacy')}
          onStats={() => go('stats')}
          onClearHistory={() => {
            clearHistory();
            setHistory([]);
            account.clearCloudHistory(); // com conta, apaga também na nuvem (e não volta de outro aparelho)
          }}
          resume={
            saved
              ? {
                  title: SUGERIDOS_INFO.find((s) => s.id === saved.settings.presetId)?.title,
                  answered: saved.answers.length,
                  total: saved.ids.length,
                  onResume: () => resumeQuiz(saved),
                  onDiscard: discardSaved,
                }
              : undefined
          }
        />
      )}

      {screen === 'setup' && (
        <QuizSetup
          initialModule={initialModule}
          onBack={handleGoHome}
          onStart={startQuiz}
          onTopography={handleOpenTopography}
        />
      )}

      {screen === 'topography' && (
        <TopographySetup onBack={() => handleStartSetup()} onHome={handleGoHome} onStart={startQuiz} />
      )}

      {screen === 'quiz' && settings && (
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

      {screen === 'results' && results && (
        <ResultsView
          results={results}
          questions={activeQuestions}
          answers={userAnswers}
          previousAverage={previousAverage}
          account={account}
          onReset={handleResetQuiz}
          onRetryMissed={handleRetryMissed}
          onNew={handleNewQuiz}
          onHome={handleGoHome}
        />
      )}
      {screen === 'privacy' && <PrivacyPolicy onHome={handleGoHome} />}
      {screen === 'stats' && (
        <MinhasEstatisticas
          respostas={detalhe.respostas}
          simulados={detalhe.comDetalhe}
          semDetalhe={detalhe.semDetalhe}
          account={account}
          onHome={handleGoHome}
          onSetup={() => handleStartSetup()}
          onTrain={handleTrainTema}
          onReview={handleReview}
          onDiagnostic={handleDiagnostic}
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
