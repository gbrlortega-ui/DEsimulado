/**
 * Valida o banco de questões antes de publicar.
 * Uso: npm run validate
 * Sai com código 1 se houver erro (bloqueia a verificação automática).
 */
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { QUESTIONS } from '../src/data/questions';
import type { Module } from '../src/types';

const MODULES: Module[] = [
  'Pediatria', 'Clínica Médica', 'Cirurgia', 'Ginecologia e Obstetrícia',
  'Saúde Coletiva', 'Ciências Básicas', 'ENAMED',
];
const ID_PATTERN = /^(tp\d{4}-\d+|enamed-\d{4}-\d+)$/;
const LETTERS = 'ABCDE';

const errors: string[] = [];
const warnings: string[] = [];
const seen = new Map<string, number>();

QUESTIONS.forEach((q, i) => {
  const where = q.id || `#${i}`;
  const err = (m: string) => errors.push(`${where}: ${m}`);
  const warn = (m: string) => warnings.push(`${where}: ${m}`);

  if (!ID_PATTERN.test(q.id)) err(`ID fora do padrão (tp2026-12 ou enamed-2026-12)`);
  seen.set(q.id, (seen.get(q.id) ?? 0) + 1);
  if (!MODULES.includes(q.module)) err(`módulo inválido: "${q.module}"`);
  if (!q.text?.trim()) err('enunciado vazio');
  if (q.options.length < 4 || q.options.length > 5) err(`${q.options.length} alternativas (esperado 4 ou 5)`);
  // O prefixo "(A) " é opcional (a interface remove), mas se existir precisa bater com a posição.
  q.options.forEach((o, j) => {
    const m = o.match(/^\s*\(([A-E])\)/);
    if (m && m[1] !== LETTERS[j]) err(`alternativa na posição ${LETTERS[j]} começa com "(${m[1]})"`);
    if (!o.replace(/^\s*\([A-E]\)\s*/, '').trim()) err(`alternativa ${LETTERS[j]} vazia`);
  });
  if (!Number.isInteger(q.correctAnswer) || q.correctAnswer < 0 || q.correctAnswer >= q.options.length)
    err(`correctAnswer ${q.correctAnswer} fora do intervalo`);
  if (!q.explanation?.trim()) err('sem explicação');
  if (!q.tags?.length) warn('sem tags');
  if (!q.reference?.trim()) warn('sem referência');
  if (q.image) {
    if (!q.image.startsWith('/images/')) err(`imagem fora de /images/: ${q.image}`);
    else if (!existsSync(join('public', q.image))) err(`imagem não encontrada: public${q.image}`);
  }
  if (/\b(SatO|SpO) \d/.test(q.text)) warn('"SatO"/"SpO" sem o ₂ (texto extraído de PDF?)');
  if (/QUESTÃO \d+|ÁREA LIVRE/.test(q.text)) err('resto de diagramação do PDF no enunciado');
});

seen.forEach((n, id) => n > 1 && errors.push(`${id}: ID duplicado (${n}x)`));

const byModule = QUESTIONS.reduce<Record<string, number>>((acc, q) => {
  acc[q.module] = (acc[q.module] ?? 0) + 1; return acc;
}, {});

console.log(`\n${QUESTIONS.length} questões`);
Object.entries(byModule).forEach(([m, n]) => console.log(`  ${m.padEnd(26)} ${n}`));
if (warnings.length) {
  console.log(`\n⚠ ${warnings.length} aviso(s):`);
  warnings.slice(0, 30).forEach((w) => console.log('  ' + w));
  if (warnings.length > 30) console.log(`  … e mais ${warnings.length - 30}`);
}
if (errors.length) {
  console.log(`\n✖ ${errors.length} erro(s):`);
  errors.forEach((e) => console.log('  ' + e));
  process.exit(1);
}
console.log('\n✔ Banco de questões válido.\n');
