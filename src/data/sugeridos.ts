import { Question } from '../types';
import { SUGERIDO_ENAMED_1_QUESTIONS } from './sugerido_enamed1';

/**
 * Simulados sugeridos: listas fixas de questões, feitas na ordem, sem sorteio.
 * Ficam fora do banco geral (QUESTIONS): são listas fixas, com regras próprias de correção (alsoAccepted).
 */
export interface SuggestedExam {
  id: string;
  title: string;
  description: string;
  /** Aviso mostrado antes de começar e na primeira questão. */
  warning: string;
  questions: Question[];
}

export const SUGERIDOS: SuggestedExam[] = [
  {
    id: 'sugerido-enamed-1',
    title: 'ENAMED 1',
    description: 'Questões no formato do ENAMED, de todas as áreas, sempre na mesma ordem.',
    warning:
      'O gabarito deste simulado é o oficial, divulgado pelos organizadores. ' +
      'Onde ele é discutível, a questão tem um aviso no comentário e a alternativa tecnicamente defensável também conta como acerto.',
    questions: SUGERIDO_ENAMED_1_QUESTIONS,
  },
];

export const findSugerido = (id?: string) => SUGERIDOS.find((s) => s.id === id);
