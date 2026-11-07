import React, { useMemo, useState } from 'react';
import {
  ArrowLeft,
  Check,
  Copy,
  FileDown,
  FlaskConical,
  LogOut,
  Mail,
  Plus,
  Save,
  Search,
  ShieldCheck,
  Trash2,
  TriangleAlert,
  X,
} from 'lucide-react';
import { Brand } from '../components/Brand';
import { cn } from '../lib/utils';
import {
  IDENTIFICACAO,
  TEMAS_SUGERIDOS,
  TOOLS,
  TOOL_ORDER,
  findIdentifiers,
  toInitials,
  type Field,
  type PrivacyHit,
  type ToolKind,
} from './forms';
import { TOOL_ICONS } from './ToolsMenu';
import {
  currentSession,
  deleteDoc,
  listDocs,
  newId,
  saveDoc,
  signIn,
  signOut,
  signUp,
  type Session,
  type ToolDoc,
} from './storage';

const inputCls =
  'w-full rounded-lg border border-line-2 bg-white px-3 py-2 text-[15px] text-ink placeholder:text-muted/70 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition';

const fmtDate = (t: number) =>
  new Date(t).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });

/* ---------- Faixa de "versão de teste" ---------- */
const TestBanner = () => (
  <div className="bg-accent-amber/15 border-b border-accent-amber/30 text-ink-2 text-xs">
    <div className="container-custom py-2 flex items-center gap-2">
      <FlaskConical size={14} className="shrink-0" />
      <span>
        <strong>Versão de teste.</strong> Conta e documentos ficam salvos só neste navegador. Na versão final, ficam na nuvem.
      </span>
    </div>
  </div>
);

/* ---------- Cadastro / login ---------- */
const AuthScreen: React.FC<{ onDone: (s: Session) => void; onHome: () => void }> = ({ onDone, onHome }) => {
  const [mode, setMode] = useState<'entrar' | 'cadastrar'>('cadastrar');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accept, setAccept] = useState(false);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (mode === 'cadastrar') {
      if (password.length < 6) return setError('A senha precisa ter pelo menos 6 caracteres.');
      if (!accept) return setError('Para criar a conta, aceite o compromisso de anonimização.');
    }
    setBusy(true);
    try {
      onDone(mode === 'cadastrar' ? await signUp(name, email, password) : await signIn(email, password));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Não foi possível continuar.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="container-custom py-10 sm:py-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
      <div>
        <button type="button" onClick={onHome} className="flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-ink">
          <ArrowLeft size={16} /> Voltar aos simulados
        </button>
        <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-[-0.03em]">Seus casos da UBS, organizados para estudar.</h1>
        <p className="mt-5 text-lg text-ink-2 leading-relaxed max-w-lg">
          Registre anamneses, SOAPs e portfólios reflexivos, marque o tema de cada caso e revise tudo antes da prova. Envie para colegas ou
          para o preceptor quando quiser discutir.
        </p>
        <div className="mt-8 flex gap-3 rounded-xl border border-line bg-white p-4 max-w-lg">
          <ShieldCheck size={20} className="text-primary-ink shrink-0 mt-0.5" />
          <p className="text-sm text-ink-2 leading-relaxed">
            <strong className="text-ink">O nome do paciente nunca é salvo.</strong> Você pode digitá-lo, mas ele é convertido em iniciais
            no seu próprio aparelho e não sai dele.
          </p>
        </div>
      </div>

      <form onSubmit={submit} className="bg-white rounded-2xl border border-line-2 p-6 sm:p-8 shadow-[0_24px_60px_-28px_oklch(30%_0.06_160/0.35)]">
        <div className="grid grid-cols-2 bg-bg-2 rounded-lg p-1 text-sm font-semibold">
          {(['cadastrar', 'entrar'] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => {
                setMode(m);
                setError('');
              }}
              className={cn('py-2 rounded-md transition-colors', mode === m ? 'bg-white text-ink shadow-sm' : 'text-muted hover:text-ink')}
            >
              {m === 'cadastrar' ? 'Criar conta' : 'Entrar'}
            </button>
          ))}
        </div>

        <div className="mt-6 space-y-4">
          {mode === 'cadastrar' && (
            <label className="block">
              <span className="text-sm font-semibold text-ink">Seu nome</span>
              <input className={cn(inputCls, 'mt-1.5')} value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" />
            </label>
          )}
          <label className="block">
            <span className="text-sm font-semibold text-ink">E-mail</span>
            <input
              className={cn(inputCls, 'mt-1.5')}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-ink">Senha</span>
            <input
              className={cn(inputCls, 'mt-1.5')}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete={mode === 'cadastrar' ? 'new-password' : 'current-password'}
            />
          </label>
          {mode === 'cadastrar' && (
            <label className="flex gap-2.5 items-start text-sm text-ink-2 leading-relaxed">
              <input type="checkbox" checked={accept} onChange={(e) => setAccept(e.target.checked)} className="mt-1 accent-[var(--color-primary)]" />
              <span>
                Comprometo-me a não registrar dados que identifiquem pacientes (nome, CPF, Cartão SUS, endereço, telefone) e a usar os
                documentos apenas para estudo.
              </span>
            </label>
          )}
        </div>

        {error && <p className="mt-4 text-sm font-medium text-accent-coral">{error}</p>}

        <button type="submit" disabled={busy} className="btn btn-primary w-full mt-6 disabled:opacity-60">
          {mode === 'cadastrar' ? 'Criar conta e entrar' : 'Entrar'}
        </button>
      </form>
    </div>
  );
};

/* ---------- Campo genérico ---------- */
const FieldInput: React.FC<{ field: Field; value: string; onChange: (v: string) => void }> = ({ field, value, onChange }) => (
  <label className={cn('block', field.wide && 'sm:col-span-2')}>
    <span className="text-sm font-semibold text-ink">{field.label}</span>
    {field.hint && <span className="block text-xs text-muted mt-0.5">{field.hint}</span>}
    {field.kind === 'textarea' ? (
      <textarea
        className={cn(inputCls, 'mt-1.5 resize-y leading-relaxed')}
        rows={field.rows ?? 3}
        value={value}
        placeholder={field.placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    ) : field.kind === 'select' ? (
      <select className={cn(inputCls, 'mt-1.5')} value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">Selecione…</option>
        {field.options?.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    ) : (
      <input className={cn(inputCls, 'mt-1.5')} value={value} placeholder={field.placeholder} onChange={(e) => onChange(e.target.value)} />
    )}
  </label>
);

/* ---------- Texto do documento (cópia, e-mail) ---------- */
function docToText(doc: ToolDoc, hideInitials: boolean): string {
  const def = TOOLS[doc.kind];
  const lines: string[] = [`${def.label.toUpperCase()} — ${doc.title || 'sem título'}`];
  if (doc.temas.length) lines.push(`Temas: ${doc.temas.join(', ')}`);
  if (def.hasPatient) {
    const id = [
      !hideInitials && doc.data.iniciais ? `Paciente: ${doc.data.iniciais}` : '',
      ...IDENTIFICACAO.map((f) => (doc.data[f.key] ? `${f.label}: ${doc.data[f.key]}` : '')),
    ].filter(Boolean);
    if (id.length) lines.push('', 'IDENTIFICAÇÃO', id.join(' · '));
  }
  for (const s of def.sections) {
    const filled = s.fields.filter((f) => doc.data[f.key]?.trim());
    if (!filled.length) continue;
    lines.push('', s.title.toUpperCase());
    for (const f of filled) lines.push(`${f.label}:`, doc.data[f.key].trim(), '');
  }
  lines.push('', 'Documento anonimizado, registrado para fins de estudo no DEsimulados.');
  return lines.join('\n');
}

/* ---------- Versão para impressão / PDF ---------- */
const PrintView: React.FC<{ doc: ToolDoc; author: string }> = ({ doc, author }) => {
  const def = TOOLS[doc.kind];
  return (
    <div className="print-doc hidden print:block text-black">
      <style>{`@page { margin: 18mm 16mm; } @media print { body { background: #fff !important; } }`}</style>
      <div className="flex items-baseline justify-between border-b-2 border-black pb-2">
        <h1 className="text-2xl font-bold">{def.label}</h1>
        <span className="text-xs">DEsimulados · {new Date(doc.updatedAt).toLocaleDateString('pt-BR')}</span>
      </div>
      <p className="mt-2 text-lg font-semibold">{doc.title}</p>
      <p className="text-xs">Registrado por: {author}{doc.temas.length ? ` · Temas: ${doc.temas.join(', ')}` : ''}</p>
      {def.hasPatient && (
        <div className="mt-4 text-sm">
          <h2 className="font-bold uppercase text-xs tracking-wide border-b border-black/30 mb-1">Identificação</h2>
          <p>
            {[doc.data.iniciais && `Paciente: ${doc.data.iniciais}`, ...IDENTIFICACAO.map((f) => doc.data[f.key] && `${f.label}: ${doc.data[f.key]}`)]
              .filter(Boolean)
              .join(' · ')}
          </p>
        </div>
      )}
      {def.sections.map((s) => {
        const filled = s.fields.filter((f) => doc.data[f.key]?.trim());
        if (!filled.length) return null;
        return (
          <div key={s.title} className="mt-4 text-sm">
            <h2 className="font-bold uppercase text-xs tracking-wide border-b border-black/30 mb-1">{s.title}</h2>
            {filled.map((f) => (
              <div key={f.key} className="mt-2 break-inside-avoid">
                <p className="font-semibold">{f.label}</p>
                <p className="whitespace-pre-line">{doc.data[f.key]}</p>
              </div>
            ))}
          </div>
        );
      })}
      <p className="mt-8 text-[10px]">Documento anonimizado, registrado para fins de estudo.</p>
    </div>
  );
};

/* ---------- Modal ---------- */
const Modal: React.FC<{ title: string; onClose: () => void; children: React.ReactNode }> = ({ title, onClose, children }) => (
  <div className="fixed inset-0 z-[60] bg-ink/40 flex items-end sm:items-center justify-center p-0 sm:p-4" onMouseDown={onClose}>
    <div
      role="dialog"
      aria-modal="true"
      className="bg-white w-full sm:max-w-lg rounded-t-2xl sm:rounded-2xl p-6 max-h-[90vh] overflow-y-auto"
      onMouseDown={(e) => e.stopPropagation()}
    >
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-xl font-extrabold">{title}</h2>
        <button type="button" onClick={onClose} aria-label="Fechar" className="text-muted hover:text-ink">
          <X size={20} />
        </button>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  </div>
);

/* ---------- Compartilhar ---------- */
const ShareModal: React.FC<{ doc: ToolDoc; onClose: () => void }> = ({ doc, onClose }) => {
  const [to, setTo] = useState('');
  const [hide, setHide] = useState(true);
  const [copied, setCopied] = useState(false);
  const text = docToText(doc, hide);
  const subject = `[DEsimulados] ${TOOLS[doc.kind].label}: ${doc.title || 'caso para discussão'}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignora */
    }
  };

  return (
    <Modal title="Enviar para colega ou preceptor" onClose={onClose}>
      <label className="block">
        <span className="text-sm font-semibold text-ink">E-mail do destinatário</span>
        <input className={cn(inputCls, 'mt-1.5')} type="email" value={to} onChange={(e) => setTo(e.target.value)} placeholder="colega@exemplo.com" />
      </label>
      {TOOLS[doc.kind].hasPatient && (
        <label className="mt-4 flex gap-2.5 items-center text-sm text-ink-2">
          <input type="checkbox" checked={hide} onChange={(e) => setHide(e.target.checked)} className="accent-[var(--color-primary)]" />
          Ocultar as iniciais do paciente no envio
        </label>
      )}
      <div className="mt-5 flex flex-col sm:flex-row gap-2">
        <a
          href={`mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`}
          className="btn btn-primary flex-1 !py-3"
        >
          <Mail size={17} /> Abrir no e-mail
        </a>
        <button type="button" onClick={copy} className="btn btn-ghost flex-1 !py-3">
          {copied ? <Check size={17} /> : <Copy size={17} />} {copied ? 'Copiado' : 'Copiar texto'}
        </button>
      </div>
      <p className="mt-4 text-xs text-muted leading-relaxed">
        Na versão final, também será possível compartilhar por link com colegas cadastrados e receber comentários do preceptor dentro do
        próprio documento.
      </p>
    </Modal>
  );
};

/* ---------- Aviso de dado identificável ---------- */
const PrivacyModal: React.FC<{ hits: PrivacyHit[]; onFix: () => void; onSaveAnyway: () => void }> = ({ hits, onFix, onSaveAnyway }) => (
  <Modal title="Possível dado identificável" onClose={onFix}>
    <div className="flex gap-3 rounded-xl bg-coral-soft p-3.5 text-sm text-ink-2">
      <TriangleAlert size={18} className="text-accent-coral shrink-0 mt-0.5" />
      <p>Encontramos trechos que podem identificar o paciente. Revise antes de salvar.</p>
    </div>
    <ul className="mt-4 divide-y divide-line border-y border-line text-sm">
      {hits.map((h, i) => (
        <li key={i} className="py-2.5">
          <span className="font-semibold text-ink">{h.field}</span>
          <span className="text-muted"> — {h.reason}: </span>
          <mark className="bg-accent-amber/30 rounded px-1">{h.excerpt}</mark>
        </li>
      ))}
    </ul>
    <div className="mt-5 flex flex-col sm:flex-row gap-2">
      <button type="button" onClick={onFix} className="btn btn-primary flex-1 !py-3">
        Voltar e corrigir
      </button>
      <button type="button" onClick={onSaveAnyway} className="btn btn-ghost flex-1 !py-3">
        Salvar mesmo assim
      </button>
    </div>
  </Modal>
);

/* ---------- Editor ---------- */
const Editor: React.FC<{
  session: Session;
  initial: ToolDoc;
  onSaved: (d: ToolDoc) => void;
  onBack: () => void;
  onDelete: (id: string) => void;
  isNew: boolean;
}> = ({ session, initial, onSaved, onBack, onDelete, isNew }) => {
  const def = TOOLS[initial.kind];
  const [doc, setDoc] = useState<ToolDoc>(initial);
  // O nome digitado vive SÓ aqui, na memória da tela. Nunca entra em `doc` nem é salvo.
  const [patientName, setPatientName] = useState('');
  const [temaInput, setTemaInput] = useState('');
  const [hits, setHits] = useState<PrivacyHit[] | null>(null);
  const [share, setShare] = useState(false);
  const [savedAt, setSavedAt] = useState<number | null>(isNew ? null : initial.updatedAt);
  const [dirty, setDirty] = useState(false);

  const labels = useMemo(() => {
    const m: Record<string, string> = { title: 'Título' };
    [...IDENTIFICACAO, ...def.sections.flatMap((s) => s.fields)].forEach((f) => (m[f.key] = f.label));
    return m;
  }, [def]);

  const set = (key: string, v: string) => {
    setDoc((d) => ({ ...d, data: { ...d.data, [key]: v } }));
    setDirty(true);
  };

  const onName = (v: string) => {
    setPatientName(v);
    set('iniciais', toInitials(v));
  };

  const addTema = (t: string) => {
    const v = t.trim().toLowerCase();
    if (!v || doc.temas.includes(v)) return;
    setDoc((d) => ({ ...d, temas: [...d.temas, v] }));
    setTemaInput('');
    setDirty(true);
  };

  const persist = () => {
    const final = { ...doc, updatedAt: Date.now() };
    saveDoc(session.email, final);
    setDoc(final);
    setSavedAt(final.updatedAt);
    setDirty(false);
    setHits(null);
    onSaved(final);
  };

  const trySave = () => {
    const found = findIdentifiers({ ...doc.data, title: doc.title }, labels, patientName);
    if (found.length) setHits(found);
    else persist();
  };

  return (
    <>
      <div className="print:hidden container-custom py-6 sm:py-10 max-w-4xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button type="button" onClick={onBack} className="flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-ink">
            <ArrowLeft size={16} /> Meus documentos
          </button>
          <span className="text-xs text-muted">
            {dirty ? 'Alterações não salvas' : savedAt ? `Salvo em ${fmtDate(savedAt)}` : 'Novo documento'}
          </span>
        </div>

        <input
          className="mt-5 w-full bg-transparent font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-ink placeholder:text-muted/50 focus:outline-none"
          placeholder={def.kind === 'portfolio' ? 'Título da reflexão' : 'Título do caso — ex.: HAS descompensada'}
          value={doc.title}
          onChange={(e) => {
            setDoc((d) => ({ ...d, title: e.target.value }));
            setDirty(true);
          }}
        />

        {/* Temas */}
        <div className="mt-4">
          <div className="flex flex-wrap gap-1.5 items-center">
            {doc.temas.map((t) => (
              <span key={t} className="inline-flex items-center gap-1 pl-2.5 pr-1.5 py-1 rounded-md bg-primary-soft text-primary-ink text-xs font-semibold">
                {t}
                <button
                  type="button"
                  aria-label={`Remover ${t}`}
                  onClick={() => {
                    setDoc((d) => ({ ...d, temas: d.temas.filter((x) => x !== t) }));
                    setDirty(true);
                  }}
                >
                  <X size={12} />
                </button>
              </span>
            ))}
            <input
              list="temas-sugeridos"
              value={temaInput}
              onChange={(e) => setTemaInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ',') {
                  e.preventDefault();
                  addTema(temaInput);
                }
              }}
              onBlur={() => addTema(temaInput)}
              placeholder="+ tema para revisão"
              className="text-xs px-2 py-1 rounded-md border border-dashed border-line-2 bg-white w-40 focus:outline-none focus:border-primary"
            />
            <datalist id="temas-sugeridos">
              {TEMAS_SUGERIDOS.map((t) => (
                <option key={t} value={t} />
              ))}
            </datalist>
          </div>
        </div>

        {/* Identificação */}
        {def.hasPatient && (
          <section className="mt-8 bg-white rounded-2xl border border-line p-5 sm:p-6">
            <h2 className="text-lg font-bold">Identificação</h2>
            <div className="mt-4 rounded-xl border border-primary/30 bg-primary-soft/60 p-4">
              <label className="block">
                <span className="text-sm font-semibold text-ink">Nome do paciente</span>
                <span className="block text-xs text-ink-2 mt-0.5">Opcional. Não é salvo: vira iniciais aqui no seu aparelho.</span>
                <input
                  className={cn(inputCls, 'mt-1.5')}
                  value={patientName}
                  onChange={(e) => onName(e.target.value)}
                  placeholder="ex.: Maria Aparecida da Silva"
                  autoComplete="off"
                  spellCheck={false}
                />
              </label>
              <div className="mt-3 flex items-center gap-2 text-sm">
                <ShieldCheck size={16} className="text-primary-ink" />
                <span className="text-ink-2">Será salvo como:</span>
                <strong className="font-mono text-ink">{doc.data.iniciais || '—'}</strong>
              </div>
            </div>
            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              {IDENTIFICACAO.map((f) => (
                <FieldInput key={f.key} field={f} value={doc.data[f.key] ?? ''} onChange={(v) => set(f.key, v)} />
              ))}
            </div>
          </section>
        )}

        {def.sections.map((s) => (
          <section key={s.title} className="mt-6 bg-white rounded-2xl border border-line p-5 sm:p-6">
            <h2 className="text-lg font-bold">{s.title}</h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {s.fields.map((f) => (
                <FieldInput key={f.key} field={f} value={doc.data[f.key] ?? ''} onChange={(v) => set(f.key, v)} />
              ))}
            </div>
          </section>
        ))}

        <p className="mt-6 text-xs text-muted leading-relaxed">
          Antes de salvar, o texto é verificado em busca do nome digitado, CPF, Cartão SUS, telefone, endereço e expressões como “Dona
          Maria”.
        </p>
      </div>

      {/* Barra de ações fixa */}
      <div className="print:hidden sticky bottom-0 z-30 bg-white/95 backdrop-blur border-t border-line">
        <div className="container-custom max-w-4xl py-3 flex items-center gap-2">
          <button type="button" onClick={trySave} className="btn btn-primary !px-5 !py-2.5">
            <Save size={17} /> Salvar
          </button>
          <button
            type="button"
            onClick={() => window.print()}
            disabled={!savedAt || dirty}
            title={!savedAt || dirty ? 'Salve antes de exportar' : undefined}
            className="btn btn-ghost !px-4 !py-2.5 disabled:opacity-50"
          >
            <FileDown size={17} /> <span className="hidden sm:inline">PDF</span>
          </button>
          <button
            type="button"
            onClick={() => setShare(true)}
            disabled={!savedAt || dirty}
            title={!savedAt || dirty ? 'Salve antes de enviar' : undefined}
            className="btn btn-ghost !px-4 !py-2.5 disabled:opacity-50"
          >
            <Mail size={17} /> <span className="hidden sm:inline">Enviar</span>
          </button>
          {!isNew && (
            <button
              type="button"
              onClick={() => {
                if (confirm('Excluir este documento? Não é possível desfazer.')) onDelete(doc.id);
              }}
              className="ml-auto text-muted hover:text-accent-coral p-2"
              aria-label="Excluir documento"
            >
              <Trash2 size={18} />
            </button>
          )}
        </div>
      </div>

      <PrintView doc={doc} author={session.name} />
      {hits && <PrivacyModal hits={hits} onFix={() => setHits(null)} onSaveAnyway={persist} />}
      {share && <ShareModal doc={doc} onClose={() => setShare(false)} />}
    </>
  );
};

/* ---------- Lista de documentos ---------- */
const DocList: React.FC<{ kind: ToolKind; docs: ToolDoc[]; onNew: () => void; onOpen: (d: ToolDoc) => void }> = ({
  kind,
  docs,
  onNew,
  onOpen,
}) => {
  const def = TOOLS[kind];
  const [q, setQ] = useState('');
  const [tema, setTema] = useState('');
  const mine = docs.filter((d) => d.kind === kind);
  const temas = Array.from(new Set(mine.flatMap((d) => d.temas))).sort();
  const shown = mine.filter(
    (d) =>
      (!tema || d.temas.includes(tema)) &&
      (!q || (d.title + ' ' + Object.values(d.data).join(' ')).toLowerCase().includes(q.toLowerCase())),
  );

  return (
    <div className="container-custom py-8 sm:py-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold">{def.label}</h1>
          <p className="mt-2 text-ink-2">{def.description}</p>
        </div>
        <button type="button" onClick={onNew} className="btn btn-primary !py-3 self-start sm:self-auto">
          <Plus size={18} /> {kind === 'anamnese' ? 'Nova anamnese' : kind === 'soap' ? 'Novo SOAP' : 'Novo portfólio'}
        </button>
      </div>

      {mine.length > 0 && (
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
            <input className={cn(inputCls, 'pl-9')} placeholder="Buscar nos documentos" value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
          {temas.length > 0 && (
            <select className={cn(inputCls, 'sm:w-56')} value={tema} onChange={(e) => setTema(e.target.value)}>
              <option value="">Todos os temas</option>
              {temas.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          )}
        </div>
      )}

      {mine.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-line-2 bg-white p-10 text-center">
          <p className="font-semibold text-ink">Nenhum documento ainda.</p>
          <p className="mt-1 text-sm text-muted">Cada paciente gera um documento novo e independente.</p>
        </div>
      ) : (
        <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {shown.map((d) => (
            <li key={d.id}>
              <button
                type="button"
                onClick={() => onOpen(d)}
                className="w-full h-full text-left bg-white rounded-xl border border-line p-4 hover:border-primary/60 transition-colors"
              >
                <p className="font-semibold text-ink line-clamp-2">{d.title || 'Sem título'}</p>
                <p className="mt-1 text-xs text-muted">
                  {[d.data.iniciais, d.data.sexo, d.data.idade].filter(Boolean).join(' · ') || d.data.cenario || '—'}
                </p>
                {d.temas.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1">
                    {d.temas.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-primary-soft text-primary-ink text-[11px] font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <p className="mt-3 text-[11px] text-muted">Atualizado em {fmtDate(d.updatedAt)}</p>
              </button>
            </li>
          ))}
          {shown.length === 0 && <li className="text-sm text-muted">Nada encontrado com esse filtro.</li>}
        </ul>
      )}
    </div>
  );
};

/* ---------- Página ---------- */
export const ToolsPage: React.FC<{ initialKind: ToolKind; onHome: () => void }> = ({ initialKind, onHome }) => {
  const [session, setSession] = useState<Session | null>(() => currentSession());
  const [kind, setKind] = useState<ToolKind>(initialKind);
  const [docs, setDocs] = useState<ToolDoc[]>(() => (session ? listDocs(session.email) : []));
  const [editing, setEditing] = useState<{ doc: ToolDoc; isNew: boolean } | null>(null);

  const refresh = (s: Session) => setDocs(listDocs(s.email));

  const startNew = () =>
    setEditing({
      isNew: true,
      doc: { id: newId(), kind, title: '', temas: [], data: {}, createdAt: Date.now(), updatedAt: Date.now() },
    });

  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <header className="print:hidden sticky top-0 z-40 bg-bg/85 backdrop-blur-md border-b border-line">
        <div className="container-custom h-16 flex items-center justify-between gap-3">
          <Brand onClick={onHome} />
          {session && (
            <div className="flex items-center gap-3 min-w-0">
              <span className="hidden sm:block text-sm text-ink-2 truncate">Olá, {session.name.split(' ')[0]}</span>
              <button
                type="button"
                onClick={() => {
                  signOut();
                  setSession(null);
                  setEditing(null);
                }}
                className="flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-ink"
              >
                <LogOut size={16} /> Sair
              </button>
            </div>
          )}
        </div>
        {session && !editing && (
          <nav className="container-custom flex gap-1 overflow-x-auto -mb-px">
            {TOOL_ORDER.map((k) => {
              const Icon = TOOL_ICONS[k];
              return (
                <button
                  key={k}
                  type="button"
                  onClick={() => setKind(k)}
                  className={cn(
                    'flex items-center gap-1.5 px-3 py-2.5 text-sm font-semibold border-b-2 whitespace-nowrap transition-colors',
                    kind === k ? 'border-primary text-ink' : 'border-transparent text-muted hover:text-ink',
                  )}
                >
                  <Icon size={15} /> {TOOLS[k].short}
                </button>
              );
            })}
          </nav>
        )}
      </header>
      <div className="print:hidden">
        <TestBanner />
      </div>

      <main className="flex-1">
        {!session ? (
          <AuthScreen
            onHome={onHome}
            onDone={(s) => {
              setSession(s);
              refresh(s);
            }}
          />
        ) : editing ? (
          <Editor
            key={editing.doc.id}
            session={session}
            initial={editing.doc}
            isNew={editing.isNew}
            onSaved={() => refresh(session)}
            onBack={() => {
              setEditing(null);
              refresh(session);
            }}
            onDelete={(id) => {
              deleteDoc(session.email, id);
              setEditing(null);
              refresh(session);
            }}
          />
        ) : (
          <DocList kind={kind} docs={docs} onNew={startNew} onOpen={(d) => setEditing({ doc: d, isNew: false })} />
        )}
      </main>
    </div>
  );
};
