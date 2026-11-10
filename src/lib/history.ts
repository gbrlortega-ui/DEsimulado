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
