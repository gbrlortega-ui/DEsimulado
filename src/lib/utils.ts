import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Nome da prova a partir do ID: "tp2024-21" → "TP 2024"; "enamed-2026-3" → "ENAMED 2026"; "sug-enamed1-5" → "ENAMED 1" (simulado sugerido). */
export function examLabel(id: string) {
  const sug = id.match(/^sug-([a-z]+)(\d+)-\d+$/i);
  if (sug) return `${sug[1].toUpperCase()} ${sug[2]}`;
  const tp = id.match(/^([a-zA-Z]+)(\d{4})-\d+$/);
  if (tp) return `${tp[1].toUpperCase()} ${tp[2]}`;
  const enamed = id.match(/^enamed-(\d{4})-\d+$/i);
  if (enamed) return `ENAMED ${enamed[1]}`;
  return id.split('-')[0].toUpperCase();
}

/** Primeiro parágrafo de um texto (para resumos curtos). */
export function firstParagraph(text: string) {
  return text.split(/\n\s*\n/)[0];
}

/** Remove o prefixo "(A) " do texto da alternativa — a letra já é exibida no marcador ao lado. */
export function stripOptionLetter(option: string) {
  return option.replace(/^\s*\([A-E]\)\s*/, '');
}

/** A alternativa conta como certa? (considera questões com mais de uma resposta válida) */
export function isAccepted(q: { correctAnswer: number; alsoAccepted?: number[] }, option: number) {
  return option === q.correctAnswer || (q.alsoAccepted?.includes(option) ?? false);
}
