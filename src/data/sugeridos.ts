import { Question } from '../types';
import { SUGERIDO_ENAMED_1_QUESTIONS } from './sugerido_enamed1';

/**
 * Simulados sugeridos: listas fixas de questões, feitas na ordem, sem sorteio.
 * Ficam fora do banco geral (QUESTIONS): são listas fixas, com gabarito próprio (alternativas discutíveis em `disputed`).
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
      'Onde ele é discutível, a alternativa contestada aparece em amarelo na correção (sem contar como acerto) e o comentário explica a controvérsia.',
    questions: SUGERIDO_ENAMED_1_QUESTIONS,
  },
];

export const findSugerido = (id?: string) => SUGERIDOS.find((s) => s.id === id);
