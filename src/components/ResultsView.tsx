import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Trophy, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  RefreshCcw, 
  Plus,
  BarChart3,
  Award,
  TrendingUp,
  BrainCircuit,
  Timer,
  Home,
  Zap
} from 'lucide-react';
import { QuizResults, UserAnswer } from '../types';
import confeti from 'canvas-confetti';
import { cn } from '../lib/utils';
import { 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Tooltip 
} from 'recharts';

interface ResultsViewProps {
  results: QuizResults;
  onReset: () => void;
  onNew: () => void;
  onHome: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({ results, onReset, onNew, onHome }) => {
  useEffect(() => {
    if (results.score >= 70) {
      confeti({
        particleCount: 100,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#2E6CE3', '#10B981', '#F59E0B']
      });
    }
  }, [results.score]);

  // Exact theme matches
  const correctColor = '#10B981'; // sage/mint green
  const wrongColor = '#F43F5E';   // coral red
  const emptyColor = '#E2E8F0';   // light grey

  const pieData = [
    { name: 'Acertos', value: results.correctCount, color: correctColor },
    { name: 'Erros', value: results.wrongCount, color: wrongColor },
    { name: 'Sem resposta', value: Math.max(0, results.totalQuestions - (results.correctCount + results.wrongCount)), color: emptyColor },
  ];

  const getMessage = () => {
    if (results.score >= 90) return { title: 'Nível Consultor!', subtitle: 'Sua performance está no topo absoluto. Você demonstrou domínio brilhante.', icon: <Award className="w-12 h-12 text-primary" />, color: 'text-primary' };
    if (results.score >= 70) return { title: 'Excelente Trabalho!', subtitle: 'Você demonstrou domínio sólido e fundamentado sobre os temas.', icon: <Trophy className="w-12 h-12 text-emerald-500" />, color: 'text-emerald-600' };
    if (results.score >= 50) return { title: 'Bom Desempenho!', subtitle: 'Uma excelente base. Foco nas revisões para atingir a excelência.', icon: <TrendingUp className="w-12 h-12 text-primary" />, color: 'text-primary' };
    return { title: 'Continue Focado!', subtitle: 'Cada tentativa é uma evolução. Revise as resoluções comentadas para crescer.', icon: <BrainCircuit className="w-12 h-12 text-rose-500" />, color: 'text-ink' };
  };

  const message = getMessage();

  return (
    <div className="min-h-screen bg-bg relative overflow-x-hidden pb-16">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-bg/80 backdrop-blur-md border-b border-line">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-sm">
              <Zap size={16} />
            </div>
            <div className="text-lg font-heading font-extrabold text-ink notranslate" translate="no">DEsimulados</div>
          </div>
          <button 
            onClick={onHome}
            className="text-xs font-bold text-ink hover:text-primary transition-colors flex items-center gap-1.5 px-3.5 py-1.5 bg-white border border-line rounded-lg"
          >
            <Home size={14} />
            Início
          </button>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto pt-24 px-4 sm:px-6 relative z-10 space-y-8">
        
        {/* Results Hero */}
        <div className="text-center pt-4 pb-2 space-y-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto border border-line"
          >
            {message.icon}
          </motion.div>
          
          <div className="space-y-2">
            <h1 className={cn("text-2xl sm:text-4xl font-black font-heading", message.color)}>
              {message.title}
            </h1>
            <p className="text-xs sm:text-sm text-muted font-semibold max-w-md mx-auto leading-relaxed">
              {message.subtitle}
            </p>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {[
            { label: 'Nota Final', value: `${Math.round(results.score)}%`, icon: <Trophy className="text-primary w-4.5 h-4.5" />, color: 'bg-primary/10' },
            { label: 'Acertos', value: `${results.correctCount} / ${results.totalQuestions}`, icon: <CheckCircle2 className="text-emerald-500 w-4.5 h-4.5" />, color: 'bg-emerald-50' },
            { label: 'Erros / Gaps', value: results.wrongCount, icon: <XCircle className="text-rose-500 w-4.5 h-4.5" />, color: 'bg-rose-50' },
            { label: 'Tempo', value: `${Math.floor(results.timeSpent / 60)}m ${results.timeSpent % 60}s`, icon: <Timer className="text-primary w-4.5 h-4.5" />, color: 'bg-primary/10' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="bg-white p-4 rounded-xl border border-line shadow-sm flex flex-col items-center text-center space-y-2.5"
            >
              <div className={cn("p-2.5 rounded-lg shrink-0", stat.color)}>{stat.icon}</div>
              <div className="space-y-0.5">
                <span className="text-[9px] font-black text-muted uppercase tracking-wider">{stat.label}</span>
                <p className="text-lg sm:text-2xl font-black text-ink leading-none">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Analytics Rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Pie Chart Card */}
          <div className="bg-white p-5 sm:p-6 rounded-xl border border-line flex flex-col items-center">
            <div className="flex items-center gap-2 w-full mb-6 pb-2 border-b border-line">
              <BarChart3 className="w-4 h-4 text-primary" />
              <h3 className="text-xs font-black text-ink uppercase tracking-wider">Aproveitamento Geral</h3>
            </div>
            
            <div className="h-44 w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={75}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: '1px solid #E2E8F0', padding: '6px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-2xl font-black text-ink leading-none">{Math.round(results.score)}%</span>
                <span className="text-[8px] font-bold text-muted uppercase tracking-widest mt-0.5">Precisão</span>
              </div>
            </div>

            {/* Labels Legend */}
            <div className="grid grid-cols-3 gap-2 mt-4 w-full text-center">
              {pieData.map(d => (
                <div key={d.name} className="flex flex-col items-center space-y-0.5">
                  <div className="flex items-center gap-1.5 justify-center">
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: d.color }} />
                    <span className="text-[10px] font-bold text-muted">{d.name}</span>
                  </div>
                  <span className="text-xs font-black text-ink">{d.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Performance by Subject Area */}
          <div className="bg-white p-5 sm:p-6 rounded-xl border border-line">
            <div className="flex items-center gap-2 w-full mb-6 pb-2 border-b border-line">
              <BrainCircuit className="w-4 h-4 text-primary" />
              <h3 className="text-xs font-black text-ink uppercase tracking-wider">Performance por Área</h3>
            </div>

            <div className="space-y-4">
              {(Object.entries(results.modulePerformance) as [string, { correct: number; total: number }][])
                .filter(([_, perf]) => perf.total > 0) // Only show active modules in this setup
                .map(([name, perf], i) => {
                  const perc = perf.total > 0 ? Math.round((perf.correct / perf.total) * 100) : 0;
                  return (
                    <div key={name} className="space-y-1">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-ink">{name}</span>
                        <span className="text-[10px] font-bold text-muted">{perf.correct}/{perf.total} ({perc}%)</span>
                      </div>
                      <div className="w-full h-2 bg-bg-2 rounded-full overflow-hidden border border-line">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${perc}%` }}
                          transition={{ delay: 0.1 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                          className={cn(
                            "h-full rounded-full transition-all duration-500",
                            perc >= 70 ? "bg-emerald-500" : perc >= 45 ? "bg-primary" : "bg-rose-500"
                          )}
                        />
                      </div>
                    </div>
                  );
                })}
              
              {/* Fallback if no questions are logged yet */}
              {(Object.values(results.modulePerformance) as { correct: number; total: number }[]).every(p => p.total === 0) && (
                <div className="text-center py-6 text-xs text-muted font-medium">
                  Não há dados suficientes de eixos temáticos.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Responsive Action flow */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <button 
            onClick={onNew}
            className="flex-1 py-3.5 bg-primary hover:bg-primary-2 text-white font-black rounded-xl text-sm transition-all flex items-center justify-center gap-1.5 active:scale-[0.99] shadow-sm"
          >
            <Plus className="w-4 h-4" />
            NOVO SIMULADO
          </button>
          
          <button 
            onClick={onReset}
            className="flex-1 py-3.5 bg-white hover:bg-bg text-ink font-black rounded-xl text-sm border border-line transition-all flex items-center justify-center gap-1.5 active:scale-[0.99] shadow-sm"
          >
            <RefreshCcw className="w-4 h-4" />
            REVISAR ERROS
          </button>
          
          <button 
            onClick={onHome}
            className="sm:w-14 py-3.5 bg-white hover:bg-bg text-muted hover:text-ink font-bold rounded-xl text-sm border border-line transition-all flex items-center justify-center active:scale-[0.99] shadow-sm"
            title="Voltar ao início"
          >
            <Home className="w-4.5 h-4.5" />
          </button>
        </div>

        {/* Minimal Footer Info */}
        <div className="text-center pt-8 text-[10px] font-mono text-muted uppercase tracking-widest block">
          Inspirado nas diretrizes atualizadas do Enade e Residência Médica 2025/2026
        </div>
      </div>
    </div>
  );
};
