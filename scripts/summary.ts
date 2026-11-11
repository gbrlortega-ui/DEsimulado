/**
 * Monta o conteúdo de `src/data/resumo.ts`: números e amostras que as telas iniciais
 * precisam, sem carregar o banco inteiro de questões no primeiro acesso.
 * Usado por `scripts/gen-summary.ts` (gera o arquivo) e pelo validador (confere se está em dia).
 */
import { QUESTIONS } from '../src/data/questions';
import { SUGERIDOS } from '../src/data/sugeridos';
import { TOPOGRAPHY_POOL } from '../src/data/topografiaPool';
import { examLabel } from '../src/lib/utils';
import type { Question } from '../src/types';

export const SUMMARY_PATH = 'src/data/resumo.ts';

/** Quantas questões de amostra vão para a página inicial. */
const SAMPLE_SIZE = 30;

const countBy = <T,>(list: T[], key: (item: T) => string | undefined) =>
  list.reduce<Record<string, number>>((acc, item) => {
    const k = key(item);
    if (k !== undefined) acc[k] = (acc[k] ?? 0) + 1;
    return acc;
  }, {});

export function summarySource(): string {
  type Kind = 'TP' | 'ENAMED' | 'Residência';
  const editions = new Map<string, { label: string; kind: Kind; year: number; count: number }>();
  for (const q of QUESTIONS) {
    const label = examLabel(q.id);
    const [prefix, year] = label.split(' ');
    const kind: Kind = prefix === 'TP' || prefix === 'ENAMED' ? prefix : 'Residência';
    const e = editions.get(label) ?? { label, kind, year: Number(year), count: 0 };
    e.count++;
    editions.set(label, e);
  }
  const ORDER: Kind[] = ['TP', 'ENAMED', 'Residência'];
  const EDITIONS = [...editions.values()].sort((a, b) =>
    a.kind === b.kind ? a.year - b.year || a.label.localeCompare(b.label) : ORDER.indexOf(a.kind) - ORDER.indexOf(b.kind)
  );

  // Questões curtas, sem imagem, que cabem bem como amostra na página inicial.
  // Escolhidas em intervalos regulares para o arquivo só mudar quando o banco mudar.
  const pool = QUESTIONS.filter(
    (q) =>
      !q.image &&
      !q.annulled &&
      q.text.length <= 460 &&
      q.options.every((o) => o.length <= 120) &&
      q.explanation.length >= 80
  );
  const step = Math.max(1, Math.floor(pool.length / SAMPLE_SIZE));
  const SAMPLE_QUESTIONS: Question[] = pool.filter((_, i) => i % step === 0).slice(0, SAMPLE_SIZE);

  const SUGERIDOS_INFO = SUGERIDOS.map(({ questions, ...info }) => ({ ...info, count: questions.length }));

  const json = (v: unknown) => JSON.stringify(v, null, 2);
  return `// Arquivo gerado por \`npm run gen\` a partir do banco de questões. Não editar à mão.
// O build e o servidor local regeneram este arquivo sozinhos; o \`npm run validate\` acusa se ficar desatualizado.
import type { Question } from '../types';

export const TOTAL_QUESTIONS = ${QUESTIONS.length};

export const COUNT_BY_AREA: Record<string, number> = ${json(countBy(QUESTIONS, (q) => q.module))};

export interface ExamEdition {
  label: string; // "TP 2024", "ENAMED 2026", "UNIFESP 2025"
  kind: 'TP' | 'ENAMED' | 'Residência';
  year: number;
  count: number;
}

/** Provas presentes no banco, em ordem cronológica (TP, depois ENAMED, depois residência). */
export const EDITIONS: ExamEdition[] = ${json(EDITIONS)};

/** Questões por especialidade ou região da topografia ("1.1", "8"). */
export const TOPOGRAPHY_COUNT: Record<string, number> = ${json(countBy(TOPOGRAPHY_POOL, (q) => q.topography))};

/** Questões por assunto, na chave "1.1|Cefaleias". */
export const TOPIC_COUNT: Record<string, number> = ${json(
    countBy(TOPOGRAPHY_POOL, (q) => (q.topic ? `${q.topography}|${q.topic}` : undefined))
  )};

export interface SuggestedExamInfo {
  id: string;
  title: string;
  description: string;
  /** Aviso mostrado antes de começar e na primeira questão. */
  warning: string;
  count: number;
}

/** Simulados sugeridos, sem as questões (elas carregam junto com o banco). */
export const SUGERIDOS_INFO: SuggestedExamInfo[] = ${json(SUGERIDOS_INFO)};

/** Amostra para a questão de exemplo da página inicial. */
export const SAMPLE_QUESTIONS: Question[] = ${json(SAMPLE_QUESTIONS)};
`;
}
