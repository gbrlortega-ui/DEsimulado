import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Trophy,
  Clock,
  CheckCircle2,
  XCircle,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Maximize2
} from 'lucide-react';
import { Brand } from './Brand';
import { Question, UserAnswer, QuizSettings, QuizResults, Module } from '../types';
import { cn, examLabel, stripOptionLetter } from '../lib/utils';
import { Howl } from 'howler';

interface QuizSessionProps {
  questions: Question[];
  settings: QuizSettings;
  onFinish: (results: QuizResults, answers: UserAnswer[]) => void;
  onExit: () => void;
}


export const QuizSession: React.FC<QuizSessionProps> = ({ questions, settings, onFinish, onExit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [startTime] = useState(Date.now());
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [questionTimeLeft, setQuestionTimeLeft] = useState(90);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isMobileMapOpen, setIsMobileMapOpen] = useState(false);

  const currentQuestion = questions[currentIndex];
  const currentAnswer = userAnswers.find(a => a.questionId === currentQuestion.id);

  // Sound initialization wrapped safely
  let successSound: Howl | null = null;
  let errorSound: Howl | null = null;
  try {
    successSound = new Howl({ src: ['https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3'], volume: 0.15 });
    errorSound = new Howl({ src: ['https://assets.mixkit.co/active_storage/sfx/2003/2003-preview.mp3'], volume: 0.15 });
  } catch (e) {
    console.warn("Audio Context could not be initialized directly", e);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(timer);
  }, [startTime]);

  useEffect(() => {
    setQuestionTimeLeft(90);
  }, [currentIndex]);

  useEffect(() => {
    if (questionTimeLeft <= 0) return;
    const qTimer = setInterval(() => {
      setQuestionTimeLeft(prev => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(qTimer);
  }, [questionTimeLeft, currentIndex]);

  const handleSelectOption = (optionIndex: number) => {
    if (currentAnswer && settings.immediateFeedback) return;

    const isCorrect = optionIndex === currentQuestion.correctAnswer;

    if (settings.immediateFeedback) {
      if (isCorrect) successSound?.play();
      else errorSound?.play();
    }

    const newAnswer: UserAnswer = {
      questionId: currentQuestion.id,
      selectedOption: optionIndex,
      isCorrect,
      timeTaken: 90 - questionTimeLeft
    };

    setUserAnswers(prev => {
      const existing = prev.findIndex(a => a.questionId === currentQuestion.id);
      if (existing !== -1) {
        const next = [...prev];
        next[existing] = newAnswer;
        return next;
      }
      return [...prev, newAnswer];
    });
  };

  const calculateResults = (): QuizResults => {
    const correctCount = userAnswers.filter(a => a.isCorrect).length;
    const total = questions.length;

    const modulePerf: Record<string, { correct: number; total: number }> = {};
    const moduleList: Module[] = ['Pediatria', 'Clínica Médica', 'Cirurgia', 'Ginecologia e Obstetrícia', 'Saúde Coletiva', 'Ciências Básicas', 'ENAMED'];
    moduleList.forEach(m => modulePerf[m] = { correct: 0, total: 0 });

    questions.forEach(q => {
      if (!modulePerf[q.module]) modulePerf[q.module] = { correct: 0, total: 0 };
      modulePerf[q.module].total++;
      const ans = userAnswers.find(a => a.questionId === q.id);
      if (ans?.isCorrect) modulePerf[q.module].correct++;
    });

    return {
      score: (correctCount / total) * 100,
      totalQuestions: total,
      correctCount,
      wrongCount: userAnswers.length - correctCount,
      timeSpent: timeElapsed,
      modulePerformance: modulePerf
    };
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const answeredCount = userAnswers.length;
  const progressPercent = (answeredCount / questions.length) * 100;

  return (
    <div className="bg-bg-2 text-ink font-sans antialiased overflow-hidden h-screen flex flex-col">
      {/* Header bar */}
      <header className="sticky top-0 z-50 h-14 flex items-center bg-white border-b border-line shrink-0">
        <div className="w-full flex justify-between items-center px-4 sm:px-6 md:px-8">
          <Brand size="sm" onClick={onExit} />

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Elegant tiny Timer */}
            <div className="flex items-center gap-1.5 text-ink-2 px-2 py-1.5" title="Tempo total">
              <Clock className="w-4 h-4 text-muted shrink-0" />
              <span className="font-semibold text-sm tabular-nums">{formatTime(timeElapsed)}</span>
            </div>

            <button
              onClick={() => setIsSubmitModalOpen(true)}
              className="bg-ink text-white hover:bg-ink-2 px-4 py-2 rounded-lg font-semibold text-sm transition-colors shrink-0"
            >
              Finalizar
            </button>
          </div>
        </div>
      </header>

      {/* Discrete Progress Bar */}
      <div className="w-full bg-line h-1 shrink-0">
        <div
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          className="bg-primary h-full transition-all duration-300"
        />
      </div>

      {/* Main Layout Area */}
      <main className="flex-1 flex overflow-hidden min-h-0">
        {/* Scrollable Question Content */}
        <section className="flex-1 overflow-y-auto px-4 py-5 sm:px-8 sm:py-10 space-y-6">
          <div className="max-w-3xl mx-auto space-y-6">

            {/* Header / Badges Row */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="font-heading font-bold text-ink mr-1.5">
                  Questão {currentIndex + 1} <span className="text-muted font-sans font-medium">de {questions.length}</span>
                </span>
                {currentQuestion.module !== 'ENAMED' && (
                  <span className="bg-white text-ink-2 border border-line px-2 py-0.5 rounded-md font-medium text-xs">
                    {currentQuestion.module}
                  </span>
                )}
                <span className="bg-primary-soft text-primary-ink px-2 py-0.5 rounded-md font-semibold text-xs">
                  {examLabel(currentQuestion.id)}
                </span>
              </div>

              {/* Question Countdown */}
              <div className={cn(
                "flex items-center gap-1.5 px-2 py-0.5 rounded-md text-xs font-semibold tabular-nums shrink-0",
                questionTimeLeft > 30 ? "text-muted" :
                questionTimeLeft > 10 ? "text-accent-amber" :
                "text-accent-coral"
              )}>
                <Clock className="w-3.5 h-3.5" />
                <span title="Tempo sugerido por questão">{formatTime(questionTimeLeft)}</span>
              </div>
            </div>

            {/* Question Text & Media Content */}
            <div className="space-y-4">
              <p className="text-[17px] sm:text-lg text-ink leading-[1.7] whitespace-pre-line">
                {currentQuestion.text}
              </p>

              {currentQuestion.image && (
                <figure className="relative bg-white border border-line rounded-xl p-2 sm:p-3">
                  <img
                    alt={`Figura da questão ${currentIndex + 1}`}
                    className="w-full max-h-[300px] sm:max-h-[440px] object-contain rounded-lg mx-auto"
                    src={currentQuestion.image}
                  />
                  <a
                    href={currentQuestion.image}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-1 text-xs font-semibold text-ink bg-white/90 border border-line rounded-md px-2 py-1 hover:border-line-2"
                  >
                    <Maximize2 size={12} />
                    Ampliar
                  </a>
                </figure>
              )}
            </div>

            {/* Options List */}
            <div className="space-y-2.5 pt-2">
              {currentQuestion.options.map((option, idx) => {
                const letter = String.fromCharCode(65 + idx);
                const isSelected = currentAnswer?.selectedOption === idx;
                const isCorrectAnswer = currentQuestion.correctAnswer === idx;
                const showFeedback = settings.immediateFeedback && currentAnswer;

                return (
                  <button
                    key={idx}
                    type="button"
                    className={cn(
                      "option-btn w-full text-left gap-3 px-3.5 py-3.5 sm:px-4",
                      showFeedback
                        ? cn("locked", isCorrectAnswer ? "correct" : isSelected ? "incorrect" : "opacity-60")
                        : (isSelected ? "selected" : "")
                    )}
                    onClick={() => handleSelectOption(idx)}
                  >
                    <div className={cn(
                      "w-7 h-7 rounded-md border flex items-center justify-center font-semibold text-sm transition-colors shrink-0",
                      showFeedback
                        ? (isCorrectAnswer ? "bg-accent-green border-accent-green text-white" : isSelected ? "bg-accent-coral border-accent-coral text-white" : "border-line-2 text-muted")
                        : (isSelected ? "bg-primary border-primary text-white" : "border-line-2 text-muted")
                    )}>
                      {letter}
                    </div>

                    <span className={cn(
                      "text-[15px] leading-relaxed flex-grow text-ink pt-0.5",
                      isSelected && !showFeedback && "font-medium"
                    )}>
                      {stripOptionLetter(option)}
                    </span>

                    {showFeedback && isCorrectAnswer && (
                      <CheckCircle2 className="w-5 h-5 text-accent-green shrink-0 ml-1.5 mt-1" aria-label="Alternativa correta" />
                    )}
                    {showFeedback && isSelected && !isCorrectAnswer && (
                      <XCircle className="w-5 h-5 text-accent-coral shrink-0 ml-1.5 mt-1" aria-label="Sua resposta" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanations & Technical Commentary */}
            <AnimatePresence>
              {settings.immediateFeedback && currentAnswer && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "rounded-xl border bg-white overflow-hidden",
                    currentAnswer.isCorrect ? "border-accent-green/40" : "border-accent-coral/40"
                  )}
                >
                  <div className={cn(
                    "px-5 py-3 font-semibold text-[15px]",
                    currentAnswer.isCorrect ? "bg-primary-soft text-primary-ink" : "bg-coral-soft text-accent-coral"
                  )}>
                    {currentAnswer.isCorrect
                      ? 'Você acertou.'
                      : `Resposta correta: ${String.fromCharCode(65 + currentQuestion.correctAnswer)}.`}
                  </div>

                  <div className="p-5 space-y-5">
                    <section>
                      <h3 className="text-base font-bold">Comentário</h3>
                      <p className="mt-1.5 text-[15px] text-ink-2 leading-relaxed whitespace-pre-line">
                        {currentQuestion.explanation}
                      </p>
                    </section>

                    {currentQuestion.commentary && (
                      <section className="pl-4 border-l-2 border-line-2">
                        <h3 className="text-sm font-sans font-semibold text-ink">Para aprofundar</h3>
                        <p className="mt-1 text-sm text-ink-2 leading-relaxed whitespace-pre-line">
                          {currentQuestion.commentary}
                        </p>
                      </section>
                    )}

                    {currentQuestion.reference && (
                      <p className="text-xs text-muted leading-relaxed">
                        <span className="font-semibold text-ink-2">Referência:</span> {currentQuestion.reference}
                      </p>
                    )}

                    {currentQuestion.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {currentQuestion.tags.map(tag => (
                          <span key={tag} className="text-xs bg-bg-2 px-2 py-0.5 rounded-md text-muted">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Actions Footer */}
            <div className="flex items-center justify-between gap-3 pt-6 pb-20 sm:pb-8">
              <button
                onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
                className="flex items-center gap-1 px-3 py-2.5 text-ink-2 font-semibold text-sm hover:bg-white border border-transparent hover:border-line transition-colors rounded-lg disabled:opacity-30"
              >
                <ChevronLeft className="w-4 h-4" />
                Anterior
              </button>

              {/* Mobile Exam Map Drawer Button */}
              <button
                type="button"
                onClick={() => setIsMobileMapOpen(true)}
                className="lg:hidden flex items-center gap-1.5 px-3 py-2.5 bg-white border border-line rounded-lg text-sm font-semibold text-ink"
              >
                <LayoutGrid className="w-4 h-4 text-muted" />
                <span className="tabular-nums">{answeredCount}/{questions.length}</span>
              </button>

              {currentIndex < questions.length - 1 ? (
                <button
                  onClick={() => setCurrentIndex(prev => prev + 1)}
                  className="flex items-center gap-1 px-5 py-2.5 bg-primary text-white font-semibold text-sm rounded-lg hover:bg-primary-2 transition-colors"
                >
                  Próxima
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => setIsSubmitModalOpen(true)}
                  className="flex items-center gap-1 px-5 py-2.5 bg-primary text-white font-semibold text-sm rounded-lg hover:bg-primary-2 transition-colors"
                >
                  Concluir
                  <Trophy className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Exam Map Sidebar (Hidden on mobile/tablet) */}
        <aside className="w-72 bg-white border-l border-line hidden lg:flex flex-col shrink-0">
          <div className="p-5 border-b border-line space-y-3 shrink-0">
            <h3 className="text-base font-bold text-ink">Suas respostas</h3>
            <div className="flex justify-between items-center text-xs font-semibold text-muted">
              <span>Respondidas</span>
              <span className="text-ink font-semibold tabular-nums">{answeredCount} de {questions.length}</span>
            </div>
            <div className="w-full bg-bg h-1 rounded-full overflow-hidden">
              <div className="bg-primary h-full transition-all" style={{ width: `${progressPercent}%` }} />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <div className="grid grid-cols-5 gap-1.5">
              {questions.map((q, idx) => {
                const answer = userAnswers.find(a => a.questionId === q.id);
                const isActive = currentIndex === idx;

                let btnStyle = "bg-bg text-muted border border-line";
                if (answer) {
                  if (settings.immediateFeedback) {
                    btnStyle = answer.isCorrect
                      ? "bg-primary-soft text-primary-ink border-accent-green/40"
                      : "bg-coral-soft text-accent-coral border-accent-coral/40";
                  } else {
                    btnStyle = "bg-ink/10 text-ink border-ink/20";
                  }
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={cn(
                      "w-10 h-10 flex items-center justify-center rounded-lg text-xs font-bold transition-all shrink-0",
                      btnStyle,
                      isActive && "ring-2 ring-ink ring-offset-2 z-10"
                    )}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-4 border-t border-line bg-bg-2 shrink-0">
            <div className="text-xs text-muted">Área</div>
            <div className="text-sm font-semibold text-ink mt-0.5">{settings.module === 'Misto' ? 'Todas as áreas' : settings.module}</div>
          </div>
        </aside>
      </main>

      {/* Exit / Submit Confirmation Modal */}
      <AnimatePresence>
        {isSubmitModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-ink/35 backdrop-blur-sm"
              onClick={() => setIsSubmitModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-sm bg-white rounded-2xl shadow-xl p-6 overflow-hidden z-10"
            >
              <div className="text-center space-y-5">
                                <div>
                  <h3 className="text-xl font-bold text-ink">Finalizar o simulado?</h3>
                  <p className="text-sm text-ink-2 leading-relaxed mt-2">
                    Você respondeu {userAnswers.length} de {questions.length} questões.{userAnswers.length < questions.length && ' As que ficaram em branco contam como não respondidas.'}
                  </p>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <button
                    onClick={() => onFinish(calculateResults(), userAnswers)}
                    className="w-full py-3 bg-primary hover:bg-primary-2 text-white font-bold rounded-lg text-xs sm:text-sm shadow-sm"
                  >
                    Finalizar e ver resultado
                  </button>
                  <button
                    onClick={() => setIsSubmitModalOpen(false)}
                    className="w-full py-3 bg-bg hover:bg-line text-ink font-bold rounded-lg text-xs sm:text-sm"
                  >
                    Continuar respondendo
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Map Bottom Drawer */}
      <AnimatePresence>
        {isMobileMapOpen && (
          <div className="fixed inset-0 z-[60] flex items-end justify-center lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-ink/35 backdrop-blur-sm"
              onClick={() => setIsMobileMapOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full bg-white rounded-t-2xl shadow-xl p-5 flex flex-col z-10 max-h-[80vh]"
            >
              <div className="w-10 h-1 bg-line-2 rounded-full mx-auto mb-4 shrink-0" />

              <div className="flex justify-between items-center mb-4 shrink-0">
                <h3 className="text-base font-bold text-ink">Suas respostas</h3>
                <span className="text-sm text-muted tabular-nums">
                  {answeredCount} de {questions.length} respondidas
                </span>
              </div>

              {/* Scrollable list of questions */}
              <div className="flex-1 overflow-y-auto pb-4">
                <div className="grid grid-cols-5 gap-2 p-1">
                  {questions.map((q, idx) => {
                    const answer = userAnswers.find(a => a.questionId === q.id);
                    const isActive = currentIndex === idx;

                    let btnStyle = "bg-bg text-muted border border-line";
                    if (answer) {
                      if (settings.immediateFeedback) {
                        btnStyle = answer.isCorrect
                          ? "bg-primary-soft text-primary-ink border-accent-green/40"
                          : "bg-coral-soft text-accent-coral border-accent-coral/40";
                      } else {
                        btnStyle = "bg-ink/10 text-ink border-ink/20";
                      }
                    }

                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setCurrentIndex(idx);
                          setIsMobileMapOpen(false);
                        }}
                        className={cn(
                          "w-11 h-11 flex items-center justify-center rounded-lg text-xs font-bold transition-all",
                          btnStyle,
                          isActive && "ring-2 ring-ink ring-offset-2 z-10"
                        )}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quick Dismiss Button */}
              <button
                onClick={() => setIsMobileMapOpen(false)}
                className="w-full py-3 bg-bg hover:bg-line text-ink font-bold rounded-lg text-xs sm:text-sm shrink-0"
              >
                Voltar à questão
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
