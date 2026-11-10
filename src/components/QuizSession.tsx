import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  AlertTriangle,
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
import { Explanation } from './Explanation';
import { Question, UserAnswer, QuizSettings, QuizResults, Module } from '../types';
import { cn, examLabel, isAccepted, scored, stripOptionLetter } from '../lib/utils';
import { playCorrect, playWrong } from '../lib/sounds';
import { clearProgress, progressFor, saveProgress } from '../lib/progress';

interface QuizSessionProps {
  questions: Question[];
  settings: QuizSettings;
  /** Simulado sugerido ou por topografia: título e aviso opcional. */
  info?: { title: string; warning?: string };
  onFinish: (results: QuizResults, answers: UserAnswer[]) => void;
  onExit: () => void;
}


export const QuizSession: React.FC<QuizSessionProps> = ({ questions, settings, info, onFinish, onExit }) => {
  // Retoma o progresso salvo deste simulado (página recarregada ou botão "voltar").
  const [restored] = useState(() => progressFor(questions.map((q) => q.id)));
  const [currentIndex, setCurrentIndex] = useState(() =>
    restored ? Math.min(Math.max(0, restored.currentIndex), questions.length - 1) : 0
  );
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>(() => restored?.answers ?? []);
  const [startTime] = useState(() => Date.now() - (restored?.elapsed ?? 0) * 1000);
  const [timeElapsed, setTimeElapsed] = useState(() => restored?.elapsed ?? 0);
  const scrollRef = useRef<HTMLElement>(null);
  /** Quando a questão atual apareceu na tela (para medir o tempo real gasto nela). */
  const questionShownAt = useRef(Date.now());
  const finishButtonRef = useRef<HTMLButtonElement>(null);
  const [questionTimeLeft, setQuestionTimeLeft] = useState(90);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isMobileMapOpen, setIsMobileMapOpen] = useState(false);

  const currentQuestion = questions[currentIndex];
  const currentAnswer = userAnswers.find(a => a.questionId === currentQuestion.id);

  // Salva a cada resposta, troca de questão e segundo do cronômetro.
  useEffect(() => {
    saveProgress({ settings, ids: questions.map((q) => q.id), answers: userAnswers, currentIndex, elapsed: timeElapsed });
  }, [settings, questions, userAnswers, currentIndex, timeElapsed]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(timer);
  }, [startTime]);

  // Nova questão: cronômetro da questão recomeça e a leitura volta para o topo do enunciado.
  useEffect(() => {
    setQuestionTimeLeft(90);
    questionShownAt.current = Date.now();
    scrollRef.current?.scrollTo({ top: 0 });
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

    const isCorrect = isAccepted(currentQuestion, optionIndex);

    if (settings.immediateFeedback) {
      if (isCorrect) playCorrect();
      else playWrong();
    }

    const newAnswer: UserAnswer = {
      questionId: currentQuestion.id,
      selectedOption: optionIndex,
      isCorrect,
      timeTaken: Math.round((Date.now() - questionShownAt.current) / 1000)
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

  // Atalhos de teclado: A–E (ou 1–5) marcam, ← → navegam, Esc fecha janelas.
  const onKey = (e: KeyboardEvent) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const target = e.target as HTMLElement | null;
    if (target?.closest('input, textarea, select, [contenteditable="true"]')) return;
    if (e.key === 'Escape') {
      setIsSubmitModalOpen(false);
      setIsMobileMapOpen(false);
      return;
    }
    if (isSubmitModalOpen || isMobileMapOpen) return;
    const key = e.key.toUpperCase();
    const option = 'ABCDE'.indexOf(key) !== -1 ? 'ABCDE'.indexOf(key) : '12345'.indexOf(key);
    if (key.length === 1 && option !== -1 && option < currentQuestion.options.length) {
      e.preventDefault();
      handleSelectOption(option);
    } else if (e.key === 'ArrowRight' && currentIndex < questions.length - 1) {
      e.preventDefault();
      setCurrentIndex((i) => i + 1);
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
      e.preventDefault();
      setCurrentIndex((i) => i - 1);
    }
  };
  const onKeyRef = useRef(onKey);
  onKeyRef.current = onKey;
  useEffect(() => {
    const listener = (e: KeyboardEvent) => onKeyRef.current(e);
    window.addEventListener('keydown', listener);
    return () => window.removeEventListener('keydown', listener);
  }, []);

  // Ao abrir a confirmação, o foco vai para o botão principal (Enter confirma).
  useEffect(() => {
    if (isSubmitModalOpen) finishButtonRef.current?.focus();
  }, [isSubmitModalOpen]);

  const calculateResults = (): QuizResults => {
    // Anuladas pela banca ficam fora da nota, do total e do desempenho por área.
    const counted = scored(questions);
    const countedIds = new Set(counted.map(q => q.id));
    const countedAnswers = userAnswers.filter(a => countedIds.has(a.questionId));
    const correctCount = countedAnswers.filter(a => a.isCorrect).length;
    const total = counted.length;

    const modulePerf: Record<string, { correct: number; total: number }> = {};
    const moduleList: Module[] = ['Pediatria', 'Clínica Médica', 'Cirurgia', 'Ginecologia e Obstetrícia', 'Saúde Coletiva', 'Ciências Básicas', 'ENAMED'];
    moduleList.forEach(m => modulePerf[m] = { correct: 0, total: 0 });

    counted.forEach(q => {
      if (!modulePerf[q.module]) modulePerf[q.module] = { correct: 0, total: 0 };
      modulePerf[q.module].total++;
      const ans = userAnswers.find(a => a.questionId === q.id);
      if (ans?.isCorrect) modulePerf[q.module].correct++;
    });

    return {
      score: total ? (correctCount / total) * 100 : 0,
      totalQuestions: total,
      correctCount,
      wrongCount: countedAnswers.length - correctCount,
      annulledCount: questions.length - total,
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
    <div className="bg-bg-2 text-ink font-sans antialiased overflow-hidden h-screen h-dvh flex flex-col">
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
        <section ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-5 sm:px-8 sm:py-10 space-y-6">
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
                {currentQuestion.annulled && (
                  <span className="bg-amber-soft text-ink border border-accent-amber/50 px-2 py-0.5 rounded-md font-semibold text-xs" title="Anulada pela banca: não conta na nota">
                    Anulada
                  </span>
                )}
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

            {info?.warning && currentIndex === 0 && (
              <div role="note" className="flex gap-3 rounded-xl border border-accent-amber/50 bg-amber-soft px-4 py-3 text-sm leading-relaxed text-ink">
                <AlertTriangle className="w-5 h-5 text-accent-amber shrink-0 mt-0.5" aria-hidden />
                <p><span className="font-semibold">{info.title}.</span> {info.warning}</p>
              </div>
            )}

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
                const isCorrectAnswer = isAccepted(currentQuestion, idx);
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

            <p className="hidden lg:block text-xs text-muted">
              Atalhos: <kbd className="font-mono">A</kbd>–<kbd className="font-mono">E</kbd> marcam a alternativa ·{' '}
              <kbd className="font-mono">←</kbd> <kbd className="font-mono">→</kbd> trocam de questão
            </p>

            {/* Explanations & Technical Commentary */}
            <AnimatePresence>
              {settings.immediateFeedback && currentAnswer && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "rounded-xl border bg-white overflow-hidden",
                    currentQuestion.annulled ? "border-accent-amber/50" : currentAnswer.isCorrect ? "border-accent-green/40" : "border-accent-coral/40"
                  )}
                >
                  <div className={cn(
                    "px-5 py-3 font-semibold text-[15px]",
                    currentQuestion.annulled ? "bg-amber-soft text-ink" : currentAnswer.isCorrect ? "bg-primary-soft text-primary-ink" : "bg-coral-soft text-accent-coral"
                  )}>
                    {currentQuestion.annulled
                      ? `Questão anulada pela banca: não conta na sua nota. Alternativa mais aceita: ${String.fromCharCode(65 + currentQuestion.correctAnswer)}.`
                      : currentAnswer.isCorrect
                      ? 'Você acertou.'
                      : `Resposta correta: ${String.fromCharCode(65 + currentQuestion.correctAnswer)}.`}
                  </div>

                  <div className="p-5">
                    <Explanation question={currentQuestion} />
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
                  if (settings.immediateFeedback && q.annulled) {
                    btnStyle = "bg-amber-soft text-ink border-accent-amber/50";
                  } else if (settings.immediateFeedback) {
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
            <div className="text-xs text-muted">{info ? 'Simulado' : 'Área'}</div>
            <div className="text-sm font-semibold text-ink mt-0.5">{info ? info.title : settings.module === 'Misto' ? 'Todas as áreas' : settings.module}</div>
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
              role="dialog"
              aria-modal="true"
              aria-labelledby="finalizar-titulo"
              className="relative w-full max-w-sm bg-white rounded-2xl shadow-xl p-6 overflow-hidden z-10"
            >
              <div className="text-center space-y-5">
                                <div>
                  <h3 id="finalizar-titulo" className="text-xl font-bold text-ink">Finalizar o simulado?</h3>
                  <p className="text-sm text-ink-2 leading-relaxed mt-2">
                    Você respondeu {userAnswers.length} de {questions.length} questões.{userAnswers.length < questions.length && ' As que ficaram em branco contam como não respondidas.'}
                  </p>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <button
                    ref={finishButtonRef}
                    onClick={() => {
                      clearProgress();
                      onFinish(calculateResults(), userAnswers);
                    }}
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
              role="dialog"
              aria-modal="true"
              aria-label="Suas respostas"
              className="relative w-full bg-white rounded-t-2xl shadow-xl p-5 flex flex-col z-10 max-h-[80vh] max-h-[80dvh]"
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
                      if (settings.immediateFeedback && q.annulled) {
                        btnStyle = "bg-amber-soft text-ink border-accent-amber/50";
                      } else if (settings.immediateFeedback) {
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
