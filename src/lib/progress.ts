import type { QuizSettings, UserAnswer } from '../types';

/**
 * Simulado em andamento, salvo no navegador do aluno a cada resposta.
 * Assim, recarregar a página ou tocar em "voltar" não perde o que já foi respondido.
 */
export interface SavedQuiz {
  v: 1;
  settings: QuizSettings;
  ids: string[];
  answers: UserAnswer[];
  currentIndex: number;
  /** Segundos já gastos no simulado. */
  elapsed: number;
  savedAt: number;
}

const KEY = 'desimulados:simulado-em-andamento';
const MAX_AGE = 14 * 24 * 60 * 60 * 1000; // 14 dias

export function loadProgress(): SavedQuiz | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as SavedQuiz;
    if (data?.v !== 1 || !Array.isArray(data.ids) || !data.ids.length || Date.now() - data.savedAt > MAX_AGE) {
      localStorage.removeItem(KEY);
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

export function saveProgress(data: Omit<SavedQuiz, 'v' | 'savedAt'>) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ ...data, v: 1, savedAt: Date.now() }));
  } catch {
    // Navegação privada ou armazenamento cheio: o simulado segue, só não fica salvo.
  }
}

export function clearProgress() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    // ignora
  }
}

/** O progresso salvo é deste simulado (mesmas questões, na mesma ordem)? */
export function progressFor(ids: string[]): SavedQuiz | null {
  const saved = loadProgress();
  return saved && saved.ids.join() === ids.join() ? saved : null;
}
