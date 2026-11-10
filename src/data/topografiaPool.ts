import { Question } from '../types';
import { QUESTIONS } from './questions';
import { SUGERIDOS } from './sugeridos';
import { TOPOGRAPHY_QUESTIONS } from './topografia_questoes';

/** Todas as questões com topografia marcada (sem repetir IDs). */
export const TOPOGRAPHY_POOL: Question[] = (() => {
  const seen = new Set<string>();
  return [...TOPOGRAPHY_QUESTIONS, ...QUESTIONS, ...SUGERIDOS.flatMap((s) => s.questions)].filter((q) => {
    if (!q.topography || seen.has(q.id)) return false;
    seen.add(q.id);
    return true;
  });
})();

/** Questões de uma especialidade ("1.1") ou de uma região inteira ("1"). */
export const topographyQuestions = (id: string) =>
  TOPOGRAPHY_POOL.filter((q) => q.topography === id || q.topography!.startsWith(id + '.'));

/** Quantas questões cada assunto tem, por chave "1.1|Cefaleias". */
export const TOPIC_COUNT: Record<string, number> = TOPOGRAPHY_POOL.reduce<Record<string, number>>((acc, q) => {
  if (q.topic) acc[`${q.topography}|${q.topic}`] = (acc[`${q.topography}|${q.topic}`] ?? 0) + 1;
  return acc;
}, {});

export const TOPOGRAPHY_COUNT: Record<string, number> = TOPOGRAPHY_POOL.reduce<Record<string, number>>((acc, q) => {
  acc[q.topography!] = (acc[q.topography!] ?? 0) + 1;
  return acc;
}, {});
