/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, lazy, Suspense } from 'react';
import { MotionConfig } from 'motion/react';
import { LandingPage } from './components/LandingPage';
import { ErrorBoundary } from './components/ErrorBoundary';
import { QuizSetup } from './components/QuizSetup';
import { QuizSession } from './components/QuizSession';
import { ResultsView } from './components/ResultsView';
import { Module, QuizSettings, QuizResults, UserAnswer } from './types';
import { QUESTIONS } from './data/questions';
import { findSugerido } from './data/sugeridos';
// Área de ferramentas (com login) carregada só quando alguém abre — não pesa nos simulados.
const ToolsPage = lazy(() => import('./tools/ToolsPage').then((m) => ({ default: m.ToolsPage })));
import type { ToolKind } from './tools/forms';

type AppState = 'landing' | 'setup' | 'quiz' | 'results' | 'tools';

export default function App() {
  const [state, setState] = useState<AppState>('landing');
  const [settings, setSettings] = useState<QuizSettings | null>(null);
  const [results, setResults] = useState<QuizResults | null>(null);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [initialModule, setInitialModule] = useState<Module>('Misto');
  const [round, setRound] = useState(0);
  const [toolKind, setToolKind] = useState<ToolKind>('anamnese');

  const handleOpenTools = (kind: ToolKind) => {
    setToolKind(kind);
    setState('tools');
    window.scrollTo(0, 0);
  };

  const activeQuestions = useMemo(() => {
    if (!settings) return [];

    // Simulado sugerido: lista fixa, na ordem original.
    const preset = findSugerido(settings.presetId);
    if (preset) return preset.questions;

    let filtered = [...QUESTIONS];
    
    // Filter by module
    if (settings.module !== 'Misto') {
      filtered = filtered.filter(q => q.module === settings.module);
    }

    // Fisher-Yates shuffle for a perfectly uniform distribution
    const shuffled = [...filtered];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = temp;
    }
    
    return shuffled.slice(0, settings.questionCount);
  }, [settings, round]);

  const handleStartSetup = (module?: Module) => {
    setInitialModule(module ?? 'Misto');
    setState('setup');
    window.scrollTo(0, 0);
  };

  const handleQuickStart = () => {
    setSettings({ questionCount: 10, module: 'Misto', immediateFeedback: true });
    setRound(r => r + 1);
    setState('quiz');
  };
  
  const handleStartQuiz = (newSettings: QuizSettings) => {
    setSettings(newSettings);
    setRound(r => r + 1);
    setState('quiz');
  };

  const handleFinishQuiz = (finalResults: QuizResults, answers: UserAnswer[]) => {
    setResults(finalResults);
    setUserAnswers(answers);
    setState('results');
  };

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
      {state === 'landing' && <LandingPage onSetup={handleStartSetup} onQuickStart={handleQuickStart} onTools={handleOpenTools} />}

      {state === 'tools' && (
        <ErrorBoundary onHome={handleGoHome}>
          <Suspense fallback={<div className="min-h-screen bg-bg" />}>
            <ToolsPage initialKind={toolKind} onHome={handleGoHome} />
          </Suspense>
        </ErrorBoundary>
      )}
      
      {state === 'setup' && (
        <QuizSetup 
          initialModule={initialModule}
          onBack={handleGoHome} 
          onStart={handleStartQuiz} 
        />
      )}
      
      {state === 'quiz' && settings && (
        <QuizSession 
          questions={activeQuestions} 
          settings={settings}
          preset={findSugerido(settings.presetId)}
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
    </div>
    </MotionConfig>
  );
}

