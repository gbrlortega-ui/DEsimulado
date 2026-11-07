import React, { useRef, useState } from 'react';
import { ImagePlus, X } from 'lucide-react';
import { fmtDateBR } from './forms';
import type { ToolDoc } from './storage';

/* ---------- Imagens da Área livre ---------- */

export const MAX_IMAGES = 4;

export function readImages(doc: ToolDoc): string[] {
  try {
    const v = JSON.parse(doc.data.imagens || '[]');
    return Array.isArray(v) ? v : [];
  } catch {
    return [];
  }
}

/** Reduz a imagem (máx. 1000 px, JPEG) para caber no armazenamento. */
function compress(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      const scale = Math.min(1, 1000 / Math.max(img.width, img.height));
      const c = document.createElement('canvas');
      c.width = Math.round(img.width * scale);
      c.height = Math.round(img.height * scale);
      const ctx = c.getContext('2d');
      if (!ctx) return reject(new Error('canvas'));
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.drawImage(img, 0, 0, c.width, c.height);
      URL.revokeObjectURL(url);
      resolve(c.toDataURL('image/jpeg', 0.72));
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('imagem inválida'));
    };
    img.src = url;
  });
}

export const ImagePicker: React.FC<{ images: string[]; onChange: (imgs: string[]) => void }> = ({ images, onChange }) => {
  const input = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);

  const add = async (files: FileList | null) => {
    if (!files?.length) return;
    setBusy(true);
    const room = MAX_IMAGES - images.length;
    const out: string[] = [];
    for (const f of Array.from(files).slice(0, room)) {
      try {
        out.push(await compress(f));
      } catch {
        /* ignora arquivo inválido */
      }
    }
    onChange([...images, ...out]);
    setBusy(false);
    if (input.current) input.current.value = '';
  };

  return (
    <div className="sm:col-span-2">
      <div className="flex flex-wrap gap-3">
        {images.map((src, i) => (
          <div key={i} className="relative w-28 h-28 rounded-lg overflow-hidden border border-line bg-bg-2">
            <img src={src} alt={`Imagem ${i + 1} da área livre`} className="w-full h-full object-cover" />
            <button
              type="button"
              onClick={() => onChange(images.filter((_, j) => j !== i))}
              aria-label="Remover imagem"
              className="absolute top-1 right-1 w-6 h-6 rounded-full bg-ink/70 text-white flex items-center justify-center"
            >
              <X size={13} />
            </button>
          </div>
        ))}
        {images.length < MAX_IMAGES && (
          <button
            type="button"
            onClick={() => input.current?.click()}
            disabled={busy}
            className="w-28 h-28 rounded-lg border border-dashed border-line-2 bg-white text-muted hover:text-ink hover:border-ink/30 flex flex-col items-center justify-center gap-1.5 text-xs font-semibold"
          >
            <ImagePlus size={20} />
            {busy ? 'Carregando…' : 'Adicionar imagem'}
          </button>
        )}
      </div>
      <input ref={input} type="file" accept="image/*" multiple hidden onChange={(e) => add(e.target.files)} />
      <p className="mt-2 text-xs text-muted">Até {MAX_IMAGES} imagens. Não use fotos em que pacientes possam ser reconhecidos.</p>
    </div>
  );
};

/* ---------- Ficha impressa (modelo do portfólio do IESC) ---------- */

/** Ordena as atividades pela data (as sem data vão para o fim). */
export const byActivityDate = (a: ToolDoc, b: ToolDoc) =>
  (a.data.data || '9999').localeCompare(b.data.data || '9999') || a.createdAt - b.createdAt;

const cell: React.CSSProperties = { border: '1px solid #000', padding: '4px 6px', verticalAlign: 'top' };
const label: React.CSSProperties = { fontWeight: 700, display: 'block', marginBottom: 3 };
const body: React.CSSProperties = { whiteSpace: 'pre-line' };

const Sheet: React.FC<{ doc: ToolDoc; n: number; total: number; author: string; last: boolean }> = ({ doc, n, total, author, last }) => {
  const d = doc.data;
  const imgs = readImages(doc);
  const head = ['PORTFÓLIO', d.disciplina, d.grupo, d.modulo].filter(Boolean);
  const pad = (x: number) => String(x).padStart(2, '0');
  const participantes = [d.grupo, d.professor && `Professor(a): ${d.professor}`, d.horario && `Horário: ${d.horario}`].filter(Boolean).join('  |  ');

  return (
    <section style={{ breakAfter: last ? 'auto' : 'page', fontFamily: 'Georgia, "Times New Roman", serif', fontSize: '10.5pt', color: '#000' }}>
      <p style={{ textAlign: 'right', fontSize: '8.5pt', margin: '0 0 6px' }}>
        {[head.slice(0, 2).join(' '), ...head.slice(2)].join(' • ').toUpperCase()} • {pad(n)}/{pad(total)}
      </p>
      <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
        <colgroup>
          <col style={{ width: '57%' }} />
          <col style={{ width: '25%' }} />
          <col style={{ width: '18%' }} />
        </colgroup>
        <tbody>
          <tr>
            <td style={cell}>
              <span style={label}>Atividade:</span>
              <span style={body}>{doc.title}</span>
            </td>
            <td style={cell}>
              <span style={label}>Local:</span>
              <span style={body}>{d.local}</span>
            </td>
            <td style={cell}>
              <span style={label}>Data:</span>
              <span style={body}>{d.data ? fmtDateBR(d.data) : ''}</span>
            </td>
          </tr>
          <tr>
            <td style={cell} colSpan={3}>
              <span style={label}>Participantes:</span>
              <span style={body}>{participantes}</span>
            </td>
          </tr>
          <tr>
            <td style={{ ...cell, height: '78mm' }}>
              <span style={label}>Descrição da atividade:</span>
              <span style={body}>{d.descricao}</span>
            </td>
            <td style={cell} colSpan={2}>
              <span style={label}>Área livre (colagens, desenhos, charges, poemas, músicas, fotos etc.):</span>
              {d.areaLivre && <span style={{ ...body, display: 'block' }}>{d.areaLivre}</span>}
              {imgs.map((src, i) => (
                <img key={i} src={src} alt="" style={{ display: 'block', maxWidth: '100%', maxHeight: imgs.length > 1 ? '38mm' : '70mm', margin: '4px auto 0' }} />
              ))}
            </td>
          </tr>
          <tr>
            <td style={{ ...cell, height: '62mm' }}>
              <span style={label}>Reflexão sobre a atividade:</span>
              <span style={body}>{d.reflexao}</span>
            </td>
            <td colSpan={2} />
          </tr>
          <tr>
            <td style={{ ...cell, height: '36mm' }}>
              <span style={label}>Referências bibliográficas/Assuntos a pesquisar:</span>
              <span style={body}>{d.referencias}</span>
            </td>
            <td colSpan={2} />
          </tr>
        </tbody>
      </table>
      <p style={{ fontSize: '7.5pt', fontStyle: 'italic', color: '#555', marginTop: 6 }}>
        Registrado por {author} no DEsimulados. Não registrar dados identificáveis dos pacientes.
      </p>
    </section>
  );
};

/** Uma ficha por página, numeradas 01/N na ordem das datas. */
export const PortfolioPrint: React.FC<{ docs: ToolDoc[]; author: string }> = ({ docs, author }) => {
  const sorted = [...docs].sort(byActivityDate);
  return (
    <div className="print-doc hidden print:block">
      <style>{`@page { size: A4; margin: 14mm 14mm; } @media print { body { background: #fff !important; } }`}</style>
      {sorted.map((d, i) => (
        <Sheet key={d.id} doc={d} n={i + 1} total={sorted.length} author={author} last={i === sorted.length - 1} />
      ))}
    </div>
  );
};
