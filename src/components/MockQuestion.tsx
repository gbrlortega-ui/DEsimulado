import React from 'react';
import { motion } from 'motion/react';
import { Clock, CheckCircle2, UserCircle2 } from 'lucide-react';

export const MockQuestion: React.FC = () => {
  return (
    <div className="w-full h-full bg-white rounded-[32px] overflow-hidden shadow-2xl flex flex-col font-sans border-8 border-white">
      {/* Header */}
      <div className="bg-primary-soft/45 px-4 py-3 flex justify-between items-center text-[11px] font-semibold text-ink-2/85 border-b border-line">
        <div className="flex items-center gap-1.5">
          <span className="bg-white px-1.5 py-0.5 rounded-md text-primary shadow-sm border border-slate-200">USP 2024</span>
          <span className="hidden sm:inline">Infectologia · Neurologia</span>
        </div>
        <div>47 / 120</div>
      </div>

      <div className="p-5 flex-grow space-y-4 overflow-hidden">
        {/* Timer */}
        <div className="flex items-center gap-2 text-slate-400 font-mono text-[10px] font-bold uppercase tracking-wider">
          <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-400">
            <Clock size={12} />
          </div>
          <span>00:42 restantes</span>
        </div>

        {/* Question */}
        <p className="text-slate-700 text-sm font-medium leading-normal">
          Paciente de 32 anos, sexo masculino, apresenta cefaleia intensa há 8 horas, rigidez de nuca, febre de 39,1°C e fotofobia. Exame neurológico sem déficit focal. Qual a conduta <span className="font-bold underline decoration-primary/30">inicial mais apropriada</span>?
        </p>

        {/* Options */}
        <div className="space-y-2">
          {[
            { id: 'A', text: 'Iniciar antibioticoterapia empírica' },
            { id: 'B', text: 'Realizar TC de crânio antes' },
            { id: 'C', text: 'Coletar líquor imediatamente', selected: true },
            { id: 'D', text: 'Solicitar hemoculturas' },
            { id: 'E', text: 'Iniciar aciclovir empírico' }
          ].map((opt) => (
            <div 
              key={opt.id}
              className={`flex items-center p-2.5 rounded-lg border transition-all ${
                opt.selected 
                  ? 'border-emerald-500 bg-emerald-50/50 shadow-sm' 
                  : 'border-slate-100 bg-white'
              }`}
            >
              <div className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold mr-3 shrink-0 ${
                opt.selected ? 'bg-emerald-500 text-white' : 'bg-slate-50 text-slate-400 border border-slate-200'
              }`}>
                {opt.id === 'C' && opt.selected ? <CheckCircle2 size={12} /> : opt.id}
              </div>
              <span className={`text-[12px] truncate ${opt.selected ? 'text-slate-800 font-semibold' : 'text-slate-500'}`}>
                {opt.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-slate-100 flex justify-between items-center bg-slate-50/50">
        <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <Clock size={12} className="text-slate-300" />
          <span>1m 12s</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-500 uppercase tracking-widest">
          <CheckCircle2 size={12} />
          <span>Gravada</span>
        </div>
      </div>

      {/* Floating UI feedback */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-white border border-line-2 shadow-lg sm:shadow-xl px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl flex items-center gap-2 sm:gap-3 z-20"
      >
        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
          <CheckCircle2 size={14} className="sm:w-[18px] sm:h-[18px]" />
        </div>
        <div className="text-xs sm:text-sm font-bold text-ink whitespace-nowrap">Acertou em 12s</div>
      </motion.div>
 
      <motion.div 
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 bg-white border border-line-2 shadow-lg sm:shadow-xl px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl flex items-center gap-2 sm:gap-3 z-20"
      >
        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
          <UserCircle2 size={14} className="sm:w-[18px] sm:h-[18px]" />
        </div>
        <div className="text-xs sm:text-sm font-bold text-ink whitespace-nowrap">83% de acerto na turma</div>
      </motion.div>
    </div>
  );
};
