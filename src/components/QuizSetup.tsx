import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Settings2, 
  Target, 
  Layers, 
  Play, 
  ChevronLeft,
  Info,
  CheckCircle2,
  Zap,
  Sparkles
} from 'lucide-react';
import { Module, QuizSettings } from '../types';

interface QuizSetupProps {
  onBack: () => void;
  onStart: (settings: QuizSettings) => void;
}

const questionCounts = [10, 20, 30, 40, 50, 60, 80, 100];
const modules: Module[] = [
  'Pediatria', 
  'Clínica Médica', 
  'Cirurgia', 
  'Ginecologia e Obstetrícia', 
  'Saúde Coletiva', 
  'Ciências Básicas', 
  'ENAMED',
  'Misto'
];

export const QuizSetup: React.FC<QuizSetupProps> = ({ onBack, onStart }) => {
  const [settings, setSettings] = useState<QuizSettings>({
    questionCount: 20,
    module: 'Misto',
    immediateFeedback: true
  });

  return (
    <div className="min-h-screen bg-bg relative overflow-x-hidden">
      {/* Subtle Ambient top light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[250px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-bg/80 backdrop-blur-md border-b border-line">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-sm shadow-primary/20">
              <Zap size={16} />
            </div>
            <div className="text-lg font-heading font-extrabold text-ink tracking-tight">DEsimulados</div>
          </div>
          <button 
            onClick={onBack}
            className="text-xs font-bold text-muted hover:text-primary transition-colors flex items-center gap-1"
          >
            <ChevronLeft size={14} />
            Voltar
          </button>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto pt-24 pb-16 px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl shadow-sm border border-line overflow-hidden"
        >
          <div className="p-5 sm:p-8 md:p-10">
            {/* Header Title */}
            <div className="flex items-start gap-4 mb-8 pb-6 border-b border-line">
              <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                <Settings2 className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-black text-ink">Configurar Caderno</h1>
                <p className="text-xs sm:text-sm text-muted font-medium mt-1">
                  Personalize a quantidade de itens, temas e modo de estudos.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {/* Question Count Selection */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-bold text-primary mb-3 uppercase tracking-wider">
                  <Target className="w-3.5 h-3.5" />
                  Quantidade de Questões
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                  {questionCounts.map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setSettings({ ...settings, questionCount: count })}
                      className={`py-3 rounded-lg font-bold text-xs sm:text-sm transition-all border ${
                        settings.questionCount === count
                          ? 'bg-primary border-primary text-white shadow-sm font-black'
                          : 'bg-white border-line text-ink hover:border-primary/50'
                      }`}
                    >
                      {count}
                    </button>
                  ))}
                </div>
              </div>

              {/* Module/Subject Selection */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-bold text-primary mb-3 uppercase tracking-wider">
                  <Layers className="w-3.5 h-3.5" />
                  Área Temática
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {modules.map((mod) => (
                    <button
                      key={mod}
                      type="button"
                      onClick={() => setSettings({ ...settings, module: mod })}
                      className={`p-3.5 rounded-xl font-bold text-xs sm:text-sm text-left transition-all flex items-center justify-between border ${
                        settings.module === mod
                          ? 'bg-primary-soft/40 border-2 border-primary text-primary font-black'
                          : 'bg-white border-line text-ink hover:border-primary/40'
                      }`}
                    >
                      <span>{mod}</span>
                      {settings.module === mod && <CheckCircle2 className="w-4 h-4 text-primary shrink-0 ml-2" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Feedback Toggle Switch */}
              <div>
                <label className="text-xs font-bold text-primary mb-3 block uppercase tracking-wider">
                  Configurações de Estudo
                </label>
                <div 
                  onClick={() => setSettings({ ...settings, immediateFeedback: !settings.immediateFeedback })}
                  className="flex items-center justify-between p-4 bg-bg-2 hover:bg-line/40 transition-colors rounded-xl border border-line cursor-pointer select-none"
                >
                  <div className="flex flex-col space-y-0.5">
                    <span className="text-xs sm:text-sm font-bold text-ink">Correção Comentada Instantânea</span>
                    <span className="text-[10px] text-muted font-medium">Veja o gabarito e explicação logo após responder</span>
                  </div>
                  <button
                    type="button"
                    className={`relative w-11 h-6 rounded-full transition-colors flex items-center px-0.5 shrink-0 ${
                      settings.immediateFeedback ? 'bg-primary' : 'bg-line-2'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform shadow-sm ${
                      settings.immediateFeedback ? 'translate-x-5' : 'translate-x-0'
                    }`} />
                  </button>
                </div>
              </div>
            </div>

            {/* Smart Tip */}
            <div className="mt-8 p-4 bg-primary-soft/20 rounded-xl border border-primary/10 flex items-start gap-3">
              <div className="p-1 bg-primary/10 rounded-lg text-primary shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-xs text-muted leading-relaxed font-medium">
                Sua seleção será cruzada com as diretrizes do <span className="font-bold text-primary">ENADE</span> e provas de Residência recente, focando em epidemiologia e condutas diagnósticas corretas.
              </div>
            </div>

            {/* Action Start Button */}
            <button
              onClick={() => onStart(settings)}
              className="w-full mt-8 py-4 sm:py-4.5 bg-primary hover:bg-primary-2 text-white font-black rounded-xl text-sm sm:text-base transition-all duration-150 flex items-center justify-center gap-2 active:scale-[0.99] shadow-sm hover:shadow-md"
            >
              <Play className="w-4.5 h-4.5 fill-current" />
              GERAR CADERNO DE QUESTÕES
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
