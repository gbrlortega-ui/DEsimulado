import { Question } from '../types';
import { PEDIATRIA_QUESTIONS } from './pediatria';
import { CLINICA_QUESTIONS } from './clinica';
import { CIRURGIA_QUESTIONS } from './cirurgia';
import { GINECOLOGIA_QUESTIONS } from './ginecologia';
import { SAUDE_COLETIVA_QUESTIONS } from './saude_coletiva';
import { BASICAS_QUESTIONS } from './basicas';
import { ENAMED_QUESTIONS } from './enamed';
import { ENAMED_2026_QUESTIONS } from './enamed2026';

export const QUESTIONS: Question[] = [
  ...PEDIATRIA_QUESTIONS,
  ...CLINICA_QUESTIONS,
  ...CIRURGIA_QUESTIONS,
  ...GINECOLOGIA_QUESTIONS,
  ...SAUDE_COLETIVA_QUESTIONS,
  ...BASICAS_QUESTIONS,
  ...ENAMED_QUESTIONS,
  ...ENAMED_2026_QUESTIONS
];
