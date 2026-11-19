/**
 * Histórico de simulados feitos, guardado só no navegador do aluno (sem cadastro).
 * Alimenta o painel "Seu desempenho" da página inicial.
 */
export interface HistoryEntry {
  /** Quando o simulado foi entregue (ms). */
  at: number;
  /** "Clínica Médica", "Todas as áreas", nome do simulado sugerido ou da topografia. */
  title: string;
  /** Percentual de acerto (0–100), sem as anuladas. */
  score: number;
  correct: number;
  total: number;
  /** Segundos gastos. */
  timeSpent: number;
  /** Acertos por área neste simulado. */
  areas: Record<string, { correct: number; total: number }>;
  /**
   * IDs das questões respondidas que o aluno acertou / errou, separados por espaço (em branco e anuladas
   * ficam de fora). Alimentam "Minhas estatísticas". Ausentes nos simulados feitos antes de 11/2026.
   */
  certas?: string;
  erradas?: string;
}

const KEY = 'desimulados:historico';
const MAX = 100;

export function loadHistory(): HistoryEntry[] {
  try {
    const data = JSON.parse(localStorage.getItem(KEY) ?? '[]');
    return Array.isArray(data) ? data.filter((e) => e && typeof e.score === 'number' && e.total > 0) : [];
  } catch {
    return [];
  }
}

/** Acrescenta um simulado e devolve o histórico atualizado (mais antigo primeiro). */
export function addToHistory(entry: HistoryEntry): HistoryEntry[] {
  const next = [...loadHistory(), entry].slice(-MAX);
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // Navegação privada ou armazenamento cheio: só não guarda.
  }
  return next;
}

/** Substitui o histórico deste navegador (usado ao juntar com o da conta). */
export function saveHistory(list: HistoryEntry[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(list.slice(-MAX)));
  } catch {
    // ignora
  }
}

/** Junta dois históricos sem repetir simulados (mesmo horário de entrega), em ordem cronológica. */
export function mergeHistories(a: HistoryEntry[], b: HistoryEntry[]): HistoryEntry[] {
  const byTime = new Map<number, HistoryEntry>();
  [...a, ...b].forEach((e) => byTime.set(e.at, e));
  return [...byTime.values()].sort((x, y) => x.at - y.at).slice(-MAX);
}

export function clearHistory() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    // ignora
  }
}

/** Soma acertos e questões de todos os simulados, no total e por área. */
export function summarize(history: HistoryEntry[]) {
  const areas: Record<string, { correct: number; total: number }> = {};
  let correct = 0;
  let total = 0;
  for (const e of history) {
    correct += e.correct;
    total += e.total;
    for (const [name, a] of Object.entries(e.areas)) {
      areas[name] ??= { correct: 0, total: 0 };
      areas[name].correct += a.correct;
      areas[name].total += a.total;
    }
  }
  return { correct, total, perc: total ? Math.round((correct / total) * 100) : 0, areas };
}

/** Respostas questão a questão de todos os simulados (só os que guardam esse detalhe). */
export function answersFromHistory(history: HistoryEntry[]) {
  const respostas: { questionId: string; correct: boolean; at: number }[] = [];
  let comDetalhe = 0;
  for (const e of history) {
    if (e.certas === undefined && e.erradas === undefined) continue;
    comDetalhe++;
    for (const id of (e.certas ?? '').split(' ')) if (id) respostas.push({ questionId: id, correct: true, at: e.at });
    for (const id of (e.erradas ?? '').split(' ')) if (id) respostas.push({ questionId: id, correct: false, at: e.at });
  }
  return { respostas, comDetalhe, semDetalhe: history.length - comDetalhe };
}
