import { Module, Question } from '../types';
import { QUESTIONS } from './questions';
import { examLabel } from '../lib/utils';

export const AREAS: Module[] = [
  'Clínica Médica',
  'Cirurgia',
  'Pediatria',
  'Ginecologia e Obstetrícia',
  'Saúde Coletiva',
  'Ciências Básicas',
  'ENAMED',
];

export const TOTAL_QUESTIONS = QUESTIONS.length;

export const COUNT_BY_AREA: Record<string, number> = QUESTIONS.reduce((acc, q) => {
  acc[q.module] = (acc[q.module] ?? 0) + 1;
  return acc;
}, {} as Record<string, number>);

export interface ExamEdition {
  label: string; // "TP 2024", "ENAMED 2026"
  kind: 'TP' | 'ENAMED';
  year: number;
  count: number;
}

/** Provas presentes no banco, em ordem cronológica (TP primeiro, depois ENAMED). */
export const EDITIONS: ExamEdition[] = (() => {
  const map = new Map<string, ExamEdition>();
  for (const q of QUESTIONS) {
    const label = examLabel(q.id);
    const [kind, year] = label.split(' ');
    const e = map.get(label) ?? { label, kind: kind as ExamEdition['kind'], year: Number(year), count: 0 };
    e.count++;
    map.set(label, e);
  }
  return [...map.values()].sort((a, b) => (a.kind === b.kind ? a.year - b.year : a.kind === 'TP' ? -1 : 1));
})();

/** Questões curtas, sem imagem, que cabem bem como amostra na página inicial. */
const SAMPLE_POOL: Question[] = QUESTIONS.filter(
  (q) =>
    !q.image &&
    q.text.length <= 460 &&
    q.options.every((o) => o.length <= 120) &&
    q.explanation.length >= 80
);

export function randomSample(exceptId?: string): Question {
  const pool = SAMPLE_POOL.length > 1 ? SAMPLE_POOL.filter((q) => q.id !== exceptId) : QUESTIONS;
  return pool[Math.floor(Math.random() * pool.length)];
}
