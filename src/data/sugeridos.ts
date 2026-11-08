import { Question } from '../types';
import { SUGERIDO_ENAMED_1_QUESTIONS } from './sugerido_enamed1';

/**
 * Simulados sugeridos: listas fixas de questões, feitas na ordem, sem sorteio.
 * Ficam fora do banco geral (QUESTIONS) para não misturar gabarito técnico com gabarito oficial.
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
    title: 'Sugerido ENAMED - 1',
    description: 'Questões no formato do ENAMED, de todas as áreas, sempre na mesma ordem.',
    warning:
      'O gabarito deste simulado é técnico, não oficial: nenhuma banca publicou respostas para estas questões. ' +
      'As questões com gabarito provisório têm um aviso no comentário, e as inéditas, escritas pelo DEsimulados, vêm indicadas no comentário.',
    questions: SUGERIDO_ENAMED_1_QUESTIONS,
  },
];

export const findSugerido = (id?: string) => SUGERIDOS.find((s) => s.id === id);
