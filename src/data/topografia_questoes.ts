import { Question } from '../types';

/**
 * Questões do "Simulado por topografia".
 * Cada uma tem `topography` (id da especialidade no roteiro, ex.: "1.1") e `topic` (o assunto).
 * Questões do banco geral também entram na topografia se tiverem `topography` preenchido.
 */
export const TOPOGRAPHY_QUESTIONS: Question[] = [];
