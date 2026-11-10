/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { MotionConfig } from 'motion/react';
import { LandingPage } from './components/LandingPage';
import { QuizSetup } from './components/QuizSetup';
import { QuizSession } from './components/QuizSession';
import { ResultsView } from './components/ResultsView';
import { Module, QuizSettings, QuizResults, UserAnswer } from './types';
import { QUESTIONS } from './data/questions';
import { findSugerido } from './data/sugeridos';
import { findTopographyGroup, TOPOGRAPHY } from './data/topografia';
import { topographyQuestions } from './data/topografiaPool';
import { TopographySetup } from './components/TopographySetup';
type AppState = 'landing' | 'setup' | 'topography' | 'quiz' | 'results';

export default function App() {
  const [state, setState] = useState<AppState>('landing');
  const [settings, setSettings] = useState<QuizSettings | null>(null);
  const [results, setResults] = useState<QuizResults | null>(null);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [initialModule, setInitialModule] = useState<Module>('Misto');
  const [round, setRound] = useState(0);

  const activeQuestions = useMemo(() => {
    if (!settings) return [];

    // Simulado sugerido: lista fixa, na ordem original.
    const preset = findSugerido(settings.presetId);
    if (preset) return preset.questions;

    let filtered = settings.topography ? topographyQuestions(settings.topography) : [...QUESTIONS];
    if (settings.topography && settings.topics?.length) {
      filtered = filtered.filter((q) => q.topic && settings.topics!.includes(q.topic));
    }
    
    // Filter by module
    if (!settings.topography && settings.module !== 'Misto') {
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

  const handleOpenTopography = () => {
    setState('topography');
    window.scrollTo(0, 0);
  };

  /** Título e aviso mostrados durante o simulado (sugerido ou por topografia). */
  const sessionInfo = (() => {
    const preset = findSugerido(settings?.presetId);
    if (preset) return { title: preset.title, warning: preset.warning };
    const t = settings?.topography;
    if (!t) return undefined;
    const name = findTopographyGroup(t)?.name ?? TOPOGRAPHY.find((r) => r.id === t)?.name;
    return name ? { title: name } : undefined;
  })();

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
      {state === 'landing' && <LandingPage onSetup={handleStartSetup} onQuickStart={handleQuickStart} />}

      {state === 'setup' && (
        <QuizSetup 
          initialModule={initialModule}
          onBack={handleGoHome} 
          onStart={handleStartQuiz} 
          onTopography={handleOpenTopography}
        />
      )}

      {state === 'topography' && (
        <TopographySetup onBack={() => handleStartSetup()} onHome={handleGoHome} onStart={handleStartQuiz} />
      )}
      
      {state === 'quiz' && settings && (
        <QuizSession 
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
    </div>
    </MotionConfig>
  );
}

