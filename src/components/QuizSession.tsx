import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  HelpCircle,
  Timer,
  Home,
  Zap,
  LayoutGrid,
  Image as ImageIcon
} from 'lucide-react';
import { Question, UserAnswer, QuizSettings, QuizResults, Module } from '../types';
import { cn } from '../lib/utils';
import { Howl } from 'howler';

interface QuizSessionProps {
  questions: Question[];
  settings: QuizSettings;
  onFinish: (results: QuizResults, answers: UserAnswer[]) => void;
  onExit: () => void;
}

const getExamInfo = (id: string) => {
  const match = id.match(/^([a-zA-Z]+)(\d{4})-\d+$/);
  if (match) {
    const type = match[1].toUpperCase(); // e.g., 'TP'
    const year = match[2]; // e.g., '2021'
    return `${type} ${year}`;
  }
  const enamedMatch = id.match(/^enamed-(\d{4})-\d+$/i);
  if (enamedMatch) {
    return `ENAMED ${enamedMatch[1]}`;
  }
  return id.split('-')[0].toUpperCase();
};

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
      <header className="sticky top-0 z-50 py-3 bg-white border-b border-line shadow-sm shrink-0">
        <div className="w-full flex justify-between items-center px-4 sm:px-6 md:px-8">
          <div className="flex items-center gap-2">
            <button 
              onClick={onExit}
              className="p-2 text-muted hover:bg-bg rounded-lg transition-colors"
              title="Voltar ao Início"
            >
              <Home className="w-5 h-5" />
            </button>
            <div className="w-0.5 h-4 bg-line hidden sm:block"></div>
            <div className="text-sm font-heading font-extrabold text-ink hidden sm:block">DEsimulados</div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Elegant tiny Timer */}
            <div className="flex items-center gap-1.5 text-muted bg-bg px-2.5 py-1.5 rounded-lg border border-line">
              <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
              <span className="font-bold font-mono text-xs sm:text-sm">{formatTime(timeElapsed)}</span>
            </div>
            
            <button 
              onClick={() => setIsSubmitModalOpen(true)}
              className="bg-primary text-white hover:bg-primary-2 px-3.5 py-1.5 sm:px-4.5 sm:py-2 rounded-lg font-bold text-xs sm:text-sm shadow-sm active:scale-95 transition-transform shrink-0"
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
                <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-md font-bold text-[10px] tracking-wider uppercase">
                  QUESTÃO {String(currentIndex + 1).padStart(2, '0')}
                </span>
                {currentQuestion.module !== 'ENAMED' && (
                  <span className="bg-bg text-ink border border-line px-2.5 py-0.5 rounded-md font-semibold text-[10px] tracking-wider uppercase">
                    {currentQuestion.module}
                  </span>
                )}
                <span className="bg-amber-500/10 text-amber-700 border border-amber-100 px-2.5 py-0.5 rounded-md font-bold text-[10px] tracking-wider uppercase">
                  {getExamInfo(currentQuestion.id)}
                </span>
              </div>
              
              {/* Question Countdown */}
              <div className={cn(
                "flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-bold border shrink-0",
                questionTimeLeft > 30 ? "bg-emerald-50 text-emerald-600 border-emerald-100" :
                questionTimeLeft > 10 ? "bg-amber-50 text-amber-600 border-amber-100" :
                "bg-rose-50 text-rose-600 border-rose-100 animate-pulse"
              )}>
                <Clock className="w-3 h-3" />
                <span>{formatTime(questionTimeLeft)}</span>
              </div>
            </div>

            {/* Question Text & Media Content */}
            <div className="space-y-4">
              <p className="text-base sm:text-lg font-medium text-ink leading-relaxed">
                {currentQuestion.text}
              </p>
              
              {currentQuestion.image && (
                <div className="bg-white border border-line rounded-xl p-3 shadow-sm max-w-lg mx-auto">
                  <div className="flex items-center gap-1.5 text-muted text-[10px] uppercase font-bold mb-2">
                    <ImageIcon size={12} />
                    <span>Material clínico de apoio</span>
                  </div>
                  <img 
                    alt="Anexo Médico" 
                    className="w-full max-h-[160px] sm:max-h-[350px] object-contain rounded-lg mx-auto hover:scale-[1.02] transition-transform duration-200" 
                    src={currentQuestion.image} 
                  />
                </div>
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
                  <div 
                    key={idx}
                    className={cn(
                      "option-btn text-left flex items-start gap-3 p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer",
                      showFeedback 
                        ? (isCorrectAnswer ? "correct" : isSelected ? "incorrect" : "opacity-80 border-line bg-white")
                        : (isSelected ? "selected" : "bg-white border-line")
                    )}
                    onClick={() => handleSelectOption(idx)}
                  >
                    <div className={cn(
                      "w-6 h-6 rounded-lg border flex items-center justify-center font-bold text-xs transition-all shrink-0 mt-0.5",
                      showFeedback 
                        ? (isCorrectAnswer ? "bg-accent-green border-accent-green text-white font-black" : isSelected ? "bg-accent-coral border-accent-coral text-white font-black" : "border-line text-muted")
                        : (isSelected ? "bg-primary border-primary text-white font-black" : "border-line text-muted group-hover:border-primary/50")
                    )}>
                      {letter}
                    </div>
                    
                    <span className={cn(
                      "text-xs sm:text-sm leading-relaxed flex-grow",
                      isSelected ? "text-primary font-bold" : "text-ink"
                    )}>
                      {option}
                    </span>

                    {showFeedback && isCorrectAnswer && (
                      <CheckCircle2 className="w-4 h-4 text-accent-green shrink-0 ml-1.5 self-center" />
                    )}
                    {showFeedback && isSelected && !isCorrectAnswer && (
                      <XCircle className="w-4 h-4 text-accent-coral shrink-0 ml-1.5 self-center" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Explanations & Technical Commentary */}
            <AnimatePresence>
              {settings.immediateFeedback && currentAnswer && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-5 bg-white rounded-xl border border-line space-y-4 shadow-sm"
                >
                  <div className="flex items-center gap-1.5 text-primary border-b border-line pb-2.5">
                    <HelpCircle className="w-4 h-4" />
                    <span className="text-xs font-black uppercase tracking-wider">Discussão Técnica do Especialista</span>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">
                      {currentQuestion.explanation}
                    </p>
                    
                    {currentQuestion.commentary && (
                      <div className="bg-bg-2 p-3.5 rounded-lg border border-line">
                        <span className="text-[10px] font-black text-primary uppercase tracking-wider block mb-1">Raciocínio Clínico</span>
                        <p className="text-xs text-muted italic leading-relaxed">
                          {currentQuestion.commentary}
                        </p>
                      </div>
                    )}
                    
                    {currentQuestion.reference && (
                      <div className="text-[11px] text-muted leading-relaxed">
                        <span className="font-bold text-ink">Diretriz/Referência:</span> {currentQuestion.reference}
                      </div>
                    )}
                  </div>

                  {/* Question Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {currentQuestion.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-bold bg-bg px-2 py-0.5 rounded-md border border-line text-muted">
                        #{tag.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Actions Footer */}
            <div className="flex items-center justify-between gap-3 pt-6 pb-20 sm:pb-8">
              <button 
                onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
                className="flex items-center gap-1 px-3 py-2 text-muted font-bold text-xs hover:bg-white border border-transparent hover:border-line hover:text-ink transition-all rounded-lg disabled:opacity-30"
              >
                <ChevronLeft className="w-4 h-4" />
                Anterior
              </button>
              
              {/* Mobile Exam Map Drawer Button */}
              <button
                type="button"
                onClick={() => setIsMobileMapOpen(true)}
                className="lg:hidden flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-bg border border-line rounded-lg text-xs font-bold text-ink transition-all shadow-sm"
              >
                <LayoutGrid className="w-3.5 h-3.5 text-primary" />
                <span>Mapa ({answeredCount}/{questions.length})</span>
              </button>

              {currentIndex < questions.length - 1 ? (
                <button 
                  onClick={() => setCurrentIndex(prev => prev + 1)}
                  className="flex items-center gap-1 px-4.5 py-2 bg-primary text-white font-bold text-xs rounded-lg hover:bg-primary-2 transition-all active:scale-95 shadow-sm"
                >
                  Próxima
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button 
                  onClick={() => setIsSubmitModalOpen(true)}
                  className="flex items-center gap-1 px-4.5 py-2 bg-primary text-white font-bold text-xs rounded-lg hover:bg-primary-2 transition-all active:scale-95 shadow-sm"
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
            <h3 className="text-sm font-heading font-extrabold text-ink">Mapa da Prova</h3>
            <div className="flex justify-between items-center text-xs font-semibold text-muted">
              <span>Progresso</span>
              <span className="text-primary font-black">{answeredCount}/{questions.length} ({Math.round(progressPercent)}%)</span>
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
                      ? "bg-accent-green/20 text-accent-green border-accent-green/30" 
                      : "bg-accent-coral/20 text-accent-coral border-accent-coral/30";
                  } else {
                    btnStyle = "bg-primary/25 text-primary border-primary/40";
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
                      isActive && "ring-2 ring-primary ring-offset-2 scale-105 font-black z-10 !bg-primary !text-white !border-primary shadow-sm"
                    )}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-4 border-t border-line bg-bg-2 shrink-0">
            <div className="text-[10px] font-bold text-muted uppercase tracking-wider block mb-1">MODALIDADE</div>
            <div className="text-xs font-black text-ink">{settings.module}</div>
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
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                  <AlertCircle className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-ink font-heading">Finalizar caderno?</h3>
                  <p className="text-xs sm:text-sm text-muted font-medium leading-relaxed mt-1.5">
                    Você respondeu <span className="font-bold text-primary">{userAnswers.length}</span> de <span className="font-bold text-primary">{questions.length}</span> questões do caderno. Deseja finalizar agora?
                  </p>
                </div>
                
                <div className="flex flex-col gap-2 pt-2">
                  <button 
                    onClick={() => onFinish(calculateResults(), userAnswers)}
                    className="w-full py-3 bg-primary hover:bg-primary-2 text-white font-bold rounded-lg text-xs sm:text-sm shadow-sm"
                  >
                    Sim, finalizar simulado
                  </button>
                  <button 
                    onClick={() => setIsSubmitModalOpen(false)}
                    className="w-full py-3 bg-bg hover:bg-line text-ink font-bold rounded-lg text-xs sm:text-sm"
                  >
                    Voltar às questões
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
                <h3 className="text-sm font-heading font-extrabold text-ink">Navegação do Caderno</h3>
                <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-md">
                  {answeredCount}/{questions.length} Respondidas
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
                          ? "bg-accent-green/20 text-accent-green border-accent-green/30" 
                          : "bg-accent-coral/20 text-accent-coral border-accent-coral/30";
                      } else {
                        btnStyle = "bg-primary/25 text-primary border-primary/40";
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
                          isActive && "ring-2 ring-primary ring-offset-2 scale-105 font-black z-10 !bg-primary !text-white !border-primary shadow-sm"
                        )}
                      >
                        {String(idx + 1).padStart(2, '0')}
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
                Voltar ao Caderno
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
