/**
 * Gera `src/data/resumo.ts` (contagens e amostras usadas nas telas iniciais).
 * Uso: npm run gen — roda sozinho antes de `npm run dev` e `npm run build`.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { SUMMARY_PATH, summarySource } from './summary';

const next = summarySource();
const current = existsSync(SUMMARY_PATH) ? readFileSync(SUMMARY_PATH, 'utf8') : '';
if (current.replace(/\r\n/g, '\n') === next) {
  console.log(`${SUMMARY_PATH} já está em dia.`);
} else {
  writeFileSync(SUMMARY_PATH, next);
  console.log(`${SUMMARY_PATH} atualizado.`);
}
