export type Module = 
  | 'Pediatria' 
  | 'Clínica Médica' 
  | 'Cirurgia' 
  | 'Ginecologia e Obstetrícia' 
  | 'Saúde Coletiva' 
  | 'Ciências Básicas' 
  | 'ENAMED'
  | 'Misto';

export interface Question {
  id: string;
  module: Module;
  text: string;
  options: string[];
  correctAnswer: number; // Index 0-4 (A-E)
  explanation: string;
  reference?: string;
  commentary?: string;
  tags: string[];
  image?: string;
  /** Aviso destacado no comentário (ex.: gabarito provisório). */
  alert?: string;
  /** Outras alternativas aceitas como corretas (questões com duas respostas válidas). */
  alsoAccepted?: number[];
  /** Anulada pela banca: fica para estudo, mas não entra na nota do simulado. */
  annulled?: boolean;
  /** Bizu: dica curta para a tomada de decisão. */
  tip?: string;
  /** Especialidade no roteiro por topografia (ex.: "1.1" = Neurologia). */
  topography?: string;
  /** Assunto dentro da especialidade (ex.: "Cefaleias"). */
  topic?: string;
}

export interface QuizSettings {
  questionCount: number;
  /** Área única escolhida ou 'Misto'. Mantido para simulados salvos antes dos filtros. */
  module: Module;
  /** Áreas escolhidas (vazio ou ausente = todas). */
  areas?: Module[];
  /** Origens da prova pela sigla do ID: "TP", "ENAMED", "UNIFESP"… (vazio ou ausente = todas). */
  sources?: string[];
  immediateFeedback: boolean;
  /** Simulado sugerido (lista fixa de questões, sem sorteio). */
  presetId?: string;
  /** Simulado por topografia: id da especialidade ("1.1") ou da região ("1"). */
  topography?: string;
  /** Assuntos escolhidos dentro da topografia (vazio = todos). */
  topics?: string[];
}

export interface UserAnswer {
  questionId: string;
  selectedOption: number | null;
  isCorrect: boolean | null;
  timeTaken: number; // in seconds
}

export interface QuizResults {
  score: number;
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  /** Questões anuladas pela banca no simulado (fora da nota e do total). */
  annulledCount?: number;
  timeSpent: number; // in seconds
  modulePerformance: Record<string, { correct: number; total: number }>;
}
