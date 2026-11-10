/**
 * Converte as figuras novas (PNG/JPG) de public/images para WebP e atualiza as referências no banco.
 * Uso: npm run imagens
 * WebP com qualidade 85 fica cerca de 85% menor que o PNG, sem diferença visível em ECG, raio-X ou lâmina.
 */
import { readdirSync, readFileSync, statSync, unlinkSync, writeFileSync } from 'node:fs';
import { join, parse } from 'node:path';
import sharp from 'sharp';

const DIR = 'public/images';
const DATA = 'src/data';
const MAX_KB = 400;

const sources = readdirSync(DIR).filter((f) => /\.(png|jpe?g)$/i.test(f));
if (!sources.length) {
  console.log('Nenhuma imagem PNG/JPG para converter.');
  process.exit(0);
}

const renamed = new Map<string, string>();
for (const file of sources) {
  const { name } = parse(file);
  const out = `${name}.webp`;
  await sharp(join(DIR, file)).webp({ quality: 85, effort: 6 }).toFile(join(DIR, out));
  const before = statSync(join(DIR, file)).size / 1024;
  const after = statSync(join(DIR, out)).size / 1024;
  unlinkSync(join(DIR, file));
  renamed.set(`/images/${file}`, `/images/${out}`);
  console.log(`${file} → ${out}  ${before.toFixed(0)} KB → ${after.toFixed(0)} KB${after > MAX_KB ? '  ⚠ acima de 400 KB: recorte menor?' : ''}`);
}

for (const file of readdirSync(DATA).filter((f) => f.endsWith('.ts'))) {
  const path = join(DATA, file);
  const src = readFileSync(path, 'utf8');
  let next = src;
  renamed.forEach((to, from) => (next = next.split(from).join(to)));
  if (next !== src) {
    writeFileSync(path, next);
    console.log(`referências atualizadas em ${path}`);
  }
}
