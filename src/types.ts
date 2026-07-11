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
}

export interface QuizSettings {
  questionCount: number;
  module: Module;
  immediateFeedback: boolean;
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
  timeSpent: number; // in seconds
  modulePerformance: Record<string, { correct: number; total: number }>;
}
