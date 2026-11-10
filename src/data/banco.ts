import type { QuizSettings, Question } from '../types';

/**
 * O banco de questões (mais de 2 MB) fica num arquivo separado, baixado só quando precisa:
 * a página inicial abre rápido e o banco é pré-carregado em segundo plano logo depois.
 */
type Bank = typeof import('./bancoCompleto');

let loading: Promise<Bank> | null = null;

export function loadBank(): Promise<Bank> {
  loading ??= import('./bancoCompleto').catch((err) => {
    loading = null; // permite tentar de novo
    throw err;
  });
  return loading;
}

/** Sorteia (ou lista, no simulado sugerido) as questões do simulado. */
export async function pickQuestions(settings: QuizSettings): Promise<Question[]> {
  const { QUESTIONS, findSugerido, topographyQuestions } = await loadBank();

  // Simulado sugerido: lista fixa, na ordem original.
  const preset = findSugerido(settings.presetId);
  if (preset) return preset.questions;

  let filtered = settings.topography ? topographyQuestions(settings.topography) : [...QUESTIONS];
  if (settings.topography && settings.topics?.length) {
    filtered = filtered.filter((q) => q.topic && settings.topics!.includes(q.topic));
  }
  if (!settings.topography && settings.module !== 'Misto') {
    filtered = filtered.filter((q) => q.module === settings.module);
  }

  // Fisher-Yates: distribuição uniforme.
  const shuffled = [...filtered];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, settings.questionCount);
}
