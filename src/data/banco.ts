import type { QuizSettings, Question } from '../types';
import { examSource, settingsFilters } from '../lib/utils';

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
  if (!settings.topography) {
    const { areas, sources } = settingsFilters(settings);
    if (areas.length) filtered = filtered.filter((q) => areas.includes(q.module));
    if (sources.length) filtered = filtered.filter((q) => sources.includes(examSource(q.id)));
  }

  // Fisher-Yates: distribuição uniforme.
  const shuffled = [...filtered];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  // O TP repete questões entre edições (ex.: tp2021-59 = tp2025-59): não sortear a mesma questão duas vezes.
  // Mesmo início de enunciado não basta: provas de residência fazem várias perguntas sobre o mesmo caso
  // (ex.: susba2025-1/2/3). Repetida = mesmo início e (mesmo final de enunciado ou mesmas alternativas).
  const seenEnd = new Set<string>();
  const seenOptions = new Set<string>();
  const picked: Question[] = [];
  for (const q of shuffled) {
    const { byEnd, byOptions } = repeatKeys(q);
    if (seenEnd.has(byEnd) || seenOptions.has(byOptions)) continue;
    seenEnd.add(byEnd);
    seenOptions.add(byOptions);
    picked.push(q);
    if (picked.length === settings.questionCount) break;
  }
  return picked;
}

/** Texto normalizado para comparar questões (ignora maiúsculas, acentos, espaços e pontuação). */
function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

/** Chaves para reconhecer a mesma questão em provas diferentes. */
function repeatKeys(q: Question) {
  const text = normalize(q.text);
  const start = text.slice(0, 200);
  const options = q.options.map((o) => normalize(o.replace(/^\(?[A-E]\)\s*/, ''))).join('|');
  return { byEnd: `${start}|${text.slice(-120)}`, byOptions: `${start}|${options.slice(0, 200)}` };
}

/** Recupera as questões de um simulado salvo, na mesma ordem. Retorna null se alguma não existir mais. */
export async function questionsByIds(ids: string[]): Promise<Question[] | null> {
  const { QUESTIONS, SUGERIDOS, TOPOGRAPHY_QUESTIONS } = await loadBank();
  const byId = new Map<string, Question>();
  [...QUESTIONS, ...SUGERIDOS.flatMap((s) => s.questions), ...TOPOGRAPHY_QUESTIONS].forEach((q) => byId.set(q.id, q));
  const found = ids.map((id) => byId.get(id));
  return found.every(Boolean) ? (found as Question[]) : null;
}
