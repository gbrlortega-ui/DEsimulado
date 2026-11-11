import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Siglas de prova que não cabem no ID (só letras minúsculas): prefixo do ID em maiúsculas → nome exibido. */
const EXAM_NAMES: Record<string, string> = {
  HOSBOS: 'HOS-BOS',
  USPRP: 'USP-RP',
  SCMBH: 'SCM-BH',
};

/** Nome da prova a partir do ID: "tp2024-21" → "TP 2024"; "unifesp2025-4" → "UNIFESP 2025"; "enamed-2026-3" → "ENAMED 2026"; "sug-enamed1-5" → "ENAMED 1" (simulado sugerido). */
export function examLabel(id: string) {
  if (id.startsWith('topo-')) return 'Topografia';
  const sug = id.match(/^sug-([a-z]+)(\d+)-\d+$/i);
  if (sug) return `${sug[1].toUpperCase()} ${sug[2]}`;
  const tp = id.match(/^([a-zA-Z]+)(\d{4})-\d+$/);
  if (tp) {
    const prefix = tp[1].toUpperCase();
    return `${EXAM_NAMES[prefix] ?? prefix} ${tp[2]}`;
  }
  const enamed = id.match(/^enamed-(\d{4})-\d+$/i);
  if (enamed) return `ENAMED ${enamed[1]}`;
  return id.split('-')[0].toUpperCase();
}

/** Origem da prova a partir do ID: "tp2024-21" → "TP"; "enamed-2026-3" → "ENAMED"; "unifesp2025-4" → "UNIFESP". */
export function examSource(id: string) {
  return examLabel(id).split(' ')[0];
}

/** Áreas e origens efetivas de um simulado (inclui simulados antigos com module 'ENAMED'). */
export function settingsFilters(s: { module: string; areas?: string[]; sources?: string[] }) {
  const areas = s.areas?.length ? s.areas : s.module !== 'Misto' && s.module !== 'ENAMED' ? [s.module] : [];
  const sources = s.sources?.length ? s.sources : s.module === 'ENAMED' ? ['ENAMED'] : [];
  return { areas, sources };
}

/** Título do simulado montado: "Pediatria · ENAMED", "Todas as áreas", "3 áreas · TP + UNIFESP". */
export function settingsTitle(s: { module: string; areas?: string[]; sources?: string[] }) {
  const { areas, sources } = settingsFilters(s);
  const area = !areas.length ? 'Todas as áreas' : areas.length <= 2 ? areas.join(' + ') : `${areas.length} áreas`;
  return sources.length ? `${area} · ${sources.join(' + ')}` : area;
}

/** Primeiro parágrafo de um texto (para resumos curtos). */
export function firstParagraph(text: string) {
  return text.split(/\n\s*\n/)[0];
}

/** Remove o prefixo "(A) " do texto da alternativa — a letra já é exibida no marcador ao lado. */
export function stripOptionLetter(option: string) {
  return option.replace(/^\s*\([A-E]\)\s*/, '');
}

/** Questões que entram na nota (as anuladas pela banca ficam de fora). */
export function scored<T extends { annulled?: boolean }>(questions: T[]) {
  return questions.filter((q) => !q.annulled);
}

/** A alternativa conta como certa? (considera questões com mais de uma resposta válida) */
export function isAccepted(q: { correctAnswer: number; alsoAccepted?: number[] }, option: number) {
  return option === q.correctAnswer || (q.alsoAccepted?.includes(option) ?? false);
}
