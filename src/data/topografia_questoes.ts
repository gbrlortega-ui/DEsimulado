import { Question } from '../types';

/**
 * Questões do "Simulado por topografia".
 * Cada uma tem `topography` (id da especialidade no roteiro, ex.: "1.1") e `topic` (o assunto).
 * Questões do banco geral também entram na topografia se tiverem `topography` preenchido.
 *
 * Vazio por enquanto: as especialidades aparecem como "Em breve" até receberem questões.
 * O plano é preencher a topografia marcando `topography`/`topic` nas questões das provas do banco.
 * (As 80 questões inéditas de Cefaleias e AVC que ficavam aqui estão no histórico do git.)
 */
export const TOPOGRAPHY_QUESTIONS: Question[] = [];
