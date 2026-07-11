/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { LandingPage } from './components/LandingPage';
import { QuizSetup } from './components/QuizSetup';
import { QuizSession } from './components/QuizSession';
import { ResultsView } from './components/ResultsView';
import { QuizSettings, QuizResults, UserAnswer } from './types';
import { QUESTIONS } from './data/questions';

type AppState = 'landing' | 'setup' | 'quiz' | 'results';

export default function App() {
  const [state, setState] = useState<AppState>('landing');
  const [settings, setSettings] = useState<QuizSettings | null>(null);
  const [results, setResults] = useState<QuizResults | null>(null);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

  const activeQuestions = useMemo(() => {
    if (!settings) return [];
    
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
  }, [settings]);

  const handleStartSetup = () => setState('setup');
  
  const handleStartQuiz = (newSettings: QuizSettings) => {
    setSettings(newSettings);
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
    <div className="antialiased text-medical-primary">
      {state === 'landing' && <LandingPage onStart={handleStartSetup} />}
      
      {state === 'setup' && (
        <QuizSetup 
          onBack={handleGoHome} 
          onStart={handleStartQuiz} 
        />
      )}
      
      {state === 'quiz' && settings && (
        <QuizSession 
          questions={activeQuestions} 
          settings={settings}
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
  );
}

