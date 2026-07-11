import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight,
  TrendingUp,
  Zap,
  CheckCircle2,
  BarChart3,
  BookOpen
} from 'lucide-react';
import { MockQuestion } from './MockQuestion';

interface LandingPageProps {
  onStart: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col min-h-screen bg-bg relative overflow-hidden">
      {/* Subtle Ambient Light Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

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
            onClick={onStart}
            className="text-xs font-bold text-white bg-primary px-4 py-2 rounded-lg hover:bg-primary-2 transition-all active:scale-95"
          >
            Começar
          </button>
        </div>
      </nav>

      <main className="relative z-10 flex-grow">
        {/* Hero Section */}
        <section className="pt-24 pb-12 sm:pt-36 sm:pb-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-mono text-[10px] tracking-wider uppercase font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    PROVAS DE RESIDÊNCIA & REVALIDA
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink leading-[1.1] tracking-tight">
                    A excelência na sua <br />
                    <span className="text-primary relative inline-block">
                      formação médica.
                    </span>
                  </h1>
                  
                  <p className="text-base sm:text-lg text-muted font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
                    Estude com simulados realistas, resoluções comentadas de alto nível e gráficos de desempenho clínico.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                    <button 
                      onClick={onStart}
                      className="btn btn-primary w-full sm:w-auto shadow-sm shadow-primary/10"
                    >
                      COMEÇAR SIMULADO
                      <ArrowRight size={16} />
                    </button>
                    <button 
                      onClick={onStart}
                      className="btn btn-ghost w-full sm:w-auto"
                    >
                      Personalizar Caderno
                    </button>
                  </div>

                  {/* Highlights Grid */}
                  <div className="pt-8 border-t border-line grid grid-cols-3 gap-4 sm:gap-8 text-left">
                    <div>
                      <div className="text-xl sm:text-3xl font-heading font-black text-ink leading-none">1.000+</div>
                      <div className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-muted mt-1.5 font-bold leading-tight">Questões</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-3xl font-heading font-black text-ink leading-none">100%</div>
                      <div className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-muted mt-1.5 font-bold leading-tight">Comentadas</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-3xl font-heading font-black text-ink leading-none">ENADE</div>
                      <div className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-muted mt-1.5 font-bold leading-tight">Atualizado</div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div className="lg:col-span-5 relative flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative z-10 w-full max-w-[380px] sm:max-w-[420px] aspect-square"
                >
                  <MockQuestion />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-24 bg-white border-y border-line">
          <div className="container-custom">
            <div className="section-head">
              <span className="eyebrow"><span className="dot"></span>Metodologia</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-ink mt-3">Estude de forma inteligente</h2>
              <p className="text-muted text-sm sm:text-base">Criamos um ecossistema projetado para simular o nível de dificuldade exigido nos grandes exames nacionais.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
              <div className="p-6 sm:p-8 rounded-2xl bg-bg border border-line flex flex-col space-y-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Zap size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink mb-2">Ciclos Dinâmicos</h3>
                  <p className="text-muted text-xs sm:text-sm leading-relaxed">
                    Simulados inteligentes que mapeiam seu desempenho de forma individual, gerando questões focadas nas suas áreas de maior oportunidade.
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-bg border border-line flex flex-col space-y-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <BarChart3 size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink mb-2">Estatísticas Reais</h3>
                  <p className="text-muted text-xs sm:text-sm leading-relaxed">
                    Veja sua evolução detalhada por eixo temático, tempo médio por questão e nível de preparação geral antes de encarar as provas.
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-bg border border-line flex flex-col space-y-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink mb-2">Comentários Clínicos</h3>
                  <p className="text-muted text-xs sm:text-sm leading-relaxed">
                    Não apenas gabaritos. Cada questão possui explicação conceitual detalhada com discussões sobre diagnósticos, condutas e diretrizes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insight Analytics Demo Section */}
        <section className="py-16 sm:py-24">
          <div className="container-custom">
            <div className="bg-white rounded-2xl p-6 sm:p-12 border border-line shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  <div className="eyebrow">
                    <span className="dot"></span>
                    Mapeamento Inteligente
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-ink leading-tight">
                    Direcione seus esforços para as áreas de maior peso.
                  </h2>
                  <p className="text-muted text-xs sm:text-sm leading-relaxed">
                    Identificamos as bancas e disciplinas onde você possui maior margem de evolução, orientando suas revisões através de estatísticas objetivas.
                  </p>
                  
                  <div className="space-y-3.5 pt-2">
                    {[
                      'Análise preditiva por especialidade',
                      'Taxa de acertos em tempo real',
                      'Comentários conceituais referenciados'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-bold text-ink">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                          <CheckCircle2 size={12} />
                        </div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-bg rounded-xl border border-line p-4 sm:p-8 flex flex-col justify-between gap-6 shadow-sm">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-black uppercase text-muted tracking-wider">Histórico de Performance</span>
                      <span className="text-emerald-600 font-bold text-xs bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">Meta atingida</span>
                    </div>
                    <div className="flex justify-between items-end gap-2 h-28 pt-2">
                      {[30, 45, 40, 65, 55, 80, 72, 90].map((h, i) => (
                        <motion.div 
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          key={i} 
                          className={`flex-grow rounded-t-md ${i === 7 ? 'bg-primary' : 'bg-primary/20'}`}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between text-[9px] uppercase font-mono font-bold text-muted px-1">
                      <span>Sem 1</span><span>Sem 3</span><span>Sem 5</span><span>Sem 7</span>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-line flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs font-bold text-ink">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></div>
                      <span>Índice de Acertos Geral</span>
                    </div>
                    <span className="text-primary font-black text-sm">82.4%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Elegant and Minimal */}
      <footer className="py-8 border-t border-line bg-white/50">
        <div className="container-custom text-center text-[11px] font-mono font-bold text-muted uppercase tracking-wider">
          DEsimulados · Preparação Inteligente para Medicina
        </div>
      </footer>
    </div>
  );
};
