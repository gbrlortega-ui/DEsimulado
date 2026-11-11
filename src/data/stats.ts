import { Module, Question } from '../types';
import { SAMPLE_QUESTIONS } from './resumo';

// Números das telas iniciais vêm do resumo gerado, para não carregar o banco inteiro no primeiro acesso.
export { COUNT_BY_AREA, COUNT_BY_AREA_SOURCE, EDITIONS, SOURCES, TOTAL_QUESTIONS, type ExamEdition, type ExamSource } from './resumo';

export const AREAS: Module[] = [
  'Clínica Médica',
  'Cirurgia',
  'Pediatria',
  'Ginecologia e Obstetrícia',
  'Saúde Coletiva',
  'Ciências Básicas',
];

export function randomSample(exceptId?: string): Question {
  const pool = SAMPLE_QUESTIONS.length > 1 ? SAMPLE_QUESTIONS.filter((q) => q.id !== exceptId) : SAMPLE_QUESTIONS;
  return pool[Math.floor(Math.random() * pool.length)];
}
