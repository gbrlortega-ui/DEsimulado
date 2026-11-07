import React, { useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  CheckSquare,
  ChevronDown,
  Copy,
  FileDown,
  Loader2,
  MailCheck,
  Lightbulb,
  LogOut,
  Mail,
  Plus,
  Save,
  Search,
  Square,
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
  showValue,
  fullLabel,
  sectionFields,
  EXAMES,
  toInitials,
  type Field,
  type PrivacyHit,
  type Section,
  type ToolKind,
} from './forms';
import { TOOL_ICONS } from './ToolsMenu';
import { CiapPicker } from './CiapPicker';
import { ImagePicker, PortfolioPrint, byActivityDate, readImages } from './Portfolio';
import {
  authMessage,
  deleteDoc,
  listDocs,
  newId,
  resendVerification,
  resetPassword,
  saveDoc,
  signIn,
  signOut,
  signUp,
  watchSession,
  type Session,
  type ToolDoc,
} from './storage';

const inputCls =
  'w-full rounded-lg border border-line-2 bg-white px-3 py-2 text-[15px] text-ink placeholder:text-muted/70 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition';
/* Campos do editor: um pouco mais compactos */
const fieldCls =
  'w-full rounded-lg border border-line bg-bg/60 px-3 py-2 text-sm text-ink placeholder:text-muted/60 hover:border-line-2 focus:bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition';

const fmtDate = (t: number) =>
  new Date(t).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });

/* ---------- Aviso de e-mail não verificado ---------- */
const VerifyBanner: React.FC<{ email: string }> = ({ email }) => {
  const [sent, setSent] = useState(false);
  return (
    <div className="bg-primary-soft border-b border-primary/20 text-ink-2 text-xs">
      <div className="container-custom py-2 flex flex-wrap items-center gap-x-2 gap-y-1">
        <MailCheck size={14} className="shrink-0 text-primary-ink" />
        <span>
          Confirme seu e-mail pelo link que enviamos para <strong className="text-ink">{email}</strong>.
        </span>
        <button
          type="button"
          disabled={sent}
          onClick={async () => {
            try {
              await resendVerification();
              setSent(true);
            } catch {
              /* ignora */
            }
          }}
          className="font-semibold text-primary-ink hover:text-ink disabled:text-muted"
        >
          {sent ? 'Reenviado' : 'Reenviar'}
        </button>
      </div>
    </div>
  );
};

/* ---------- Cadastro / login ---------- */
const AuthScreen: React.FC<{ onDone: (s: Session) => void; onHome: () => void }> = ({ onDone, onHome }) => {
  const [mode, setMode] = useState<'entrar' | 'cadastrar' | 'recuperar'>('cadastrar');
  const [info, setInfo] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accept, setAccept] = useState(false);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setInfo('');
    if (mode === 'recuperar') {
      setBusy(true);
      try {
        await resetPassword(email);
        setInfo('Se houver uma conta com este e-mail, você vai receber um link para criar uma nova senha.');
      } catch (err) {
        setError(authMessage(err));
      } finally {
        setBusy(false);
      }
      return;
    }
    if (mode === 'cadastrar') {
      if (password.length < 6) return setError('A senha precisa ter pelo menos 6 caracteres.');
      if (!accept) return setError('Para criar a conta, aceite o compromisso de anonimização.');
    }
    setBusy(true);
    try {
      onDone(mode === 'cadastrar' ? await signUp(name, email, password) : await signIn(email, password));
    } catch (err) {
      setError(authMessage(err));
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
                setInfo('');
              }}
              className={cn('py-2 rounded-md transition-colors', mode === m || (m === 'entrar' && mode === 'recuperar') ? 'bg-white text-ink shadow-sm' : 'text-muted hover:text-ink')}
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
          {mode === 'recuperar' && (
            <p className="text-sm text-ink-2">Digite o e-mail da sua conta. Vamos enviar um link para você criar uma nova senha.</p>
          )}
          {mode !== 'recuperar' && <label className="block">
            <span className="flex items-center justify-between text-sm font-semibold text-ink">
              Senha
              {mode === 'entrar' && (
                <button
                  type="button"
                  onClick={() => {
                    setMode('recuperar');
                    setError('');
                  }}
                  className="text-xs font-semibold text-primary-ink hover:text-ink"
                >
                  Esqueci minha senha
                </button>
              )}
            </span>
            <input
              className={cn(inputCls, 'mt-1.5')}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete={mode === 'cadastrar' ? 'new-password' : 'current-password'}
            />
          </label>}
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
        {info && <p className="mt-4 text-sm font-medium text-primary-ink">{info}</p>}

        <button type="submit" disabled={busy} className="btn btn-primary w-full mt-6 disabled:opacity-60">
          {busy && <Loader2 size={17} className="animate-spin" />}
          {mode === 'cadastrar' ? 'Criar conta e entrar' : mode === 'recuperar' ? 'Enviar link' : 'Entrar'}
        </button>
        {mode === 'recuperar' && (
          <button type="button" onClick={() => setMode('entrar')} className="mt-3 w-full text-sm font-semibold text-muted hover:text-ink">
            Voltar para entrar
          </button>
        )}
      </form>
    </div>
  );
};

/* ---------- Texto que cresce conforme o conteúdo ---------- */
const AutoTextarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement> & { minRows?: number }> = ({ minRows = 2, className, value, ...rest }) => {
  const ref = useRef<HTMLTextAreaElement>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight + 2}px`;
  }, [value]);
  return <textarea ref={ref} rows={minRows} value={value} className={cn(className, 'resize-none overflow-hidden leading-relaxed')} {...rest} />;
};

/* ---------- Campo genérico ---------- */
/**
 * A dica aparece quando o campo está em uso (foco) ou quando o aluno fixa pelo botão "Dica";
 * assim a ficha fica limpa e a orientação surge na hora certa.
 */
const FieldInput: React.FC<{ field: Field; value: string; onChange: (v: string) => void }> = ({ field, value, onChange }) => {
  const id = useId();
  const [pinned, setPinned] = useState(false);
  const control = cn(fieldCls, field.unit && 'pr-14');
  return (
    <div className={cn('group', field.wide && 'col-span-full')}>
      <div className="flex items-center justify-between gap-2 min-h-6">
        <label htmlFor={id} className="flex items-center gap-2 text-[13px] font-semibold text-ink-2">
          {field.abbr && (
            <span className="px-1.5 py-0.5 rounded bg-primary-soft text-primary-ink font-mono text-[11px] font-bold tracking-wide">{field.abbr}</span>
          )}
          {field.label}
        </label>
        {field.tip && (
          <button
            type="button"
            onClick={() => setPinned((p) => !p)}
            aria-expanded={pinned}
            aria-controls={`${id}-tip`}
            className={cn(
              'flex items-center gap-1 text-[11px] font-semibold rounded-md px-1.5 py-0.5 transition-colors',
              pinned ? 'text-ink bg-accent-amber/20' : 'text-muted hover:text-ink',
            )}
          >
            <Lightbulb size={12} /> Dica
          </button>
        )}
      </div>
      {field.hint && <p className="text-xs text-muted mt-0.5">{field.hint}</p>}
      <div className="relative mt-1.5">
        {field.kind === 'textarea' ? (
          <AutoTextarea
            id={id}
            className={control}
            minRows={Math.min(field.rows ?? 2, 3)}
            value={value}
            placeholder={field.placeholder}
            onChange={(e) => onChange(e.target.value)}
          />
        ) : field.kind === 'select' ? (
          <select id={id} className={control} value={value} onChange={(e) => onChange(e.target.value)}>
            <option value="">Selecione…</option>
            {field.options?.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        ) : field.kind === 'ciap' ? (
          <CiapPicker id={id} value={value} onChange={onChange} />
        ) : field.kind === 'date' ? (
          <input id={id} className={control} type="date" value={value} onChange={(e) => onChange(e.target.value)} />
        ) : (
          <input
            id={id}
            className={cn(control, field.unit && 'tabular-nums')}
            value={value}
            placeholder={field.placeholder ?? (field.unit ? '—' : undefined)}
            onChange={(e) => onChange(e.target.value)}
          />
        )}
        {field.unit && (
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted">{field.unit}</span>
        )}
      </div>
      {field.tip && (
        <p
          id={`${id}-tip`}
          className={cn(
            'mt-2 gap-2 rounded-lg bg-accent-amber/10 px-3 py-2 text-xs leading-relaxed text-ink-2',
            pinned ? 'flex' : 'hidden group-focus-within:flex',
          )}
        >
          <Lightbulb size={13} className="shrink-0 mt-0.5 text-accent-amber" />
          <span>{field.tip}</span>
        </p>
      )}
    </div>
  );
};

/* ---------- Seção recolhível ---------- */
const SectionCard: React.FC<{
  id: string;
  n: number;
  title: string;
  summary: string;
  filled: number;
  total: number;
  open: boolean;
  onToggle: () => void;
  onNext?: () => void;
  children: React.ReactNode;
}> = ({ id, n, title, summary, filled, total, open, onToggle, onNext, children }) => {
  const done = total > 0 && filled === total;
  return (
    <section id={id} className={cn('scroll-mt-28 bg-white rounded-xl border transition-colors', open ? 'border-line-2 shadow-sm' : 'border-line')}>
      <button type="button" onClick={onToggle} aria-expanded={open} className="w-full flex items-center gap-3 px-4 sm:px-5 py-3.5 text-left">
        <span
          className={cn(
            'w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0',
            done ? 'bg-primary text-white' : filled > 0 ? 'bg-primary-soft text-primary-ink' : 'bg-bg-2 text-muted',
          )}
        >
          {done ? <Check size={14} strokeWidth={3} /> : n}
        </span>
        <span className="flex-1 min-w-0">
          <span className="block font-heading font-bold text-ink">{title}</span>
          {!open && <span className="block text-xs text-muted truncate">{summary}</span>}
        </span>
        {total > 0 && (
          <span className="text-xs tabular-nums text-muted shrink-0">
            {filled}/{total}
          </span>
        )}
        <ChevronDown size={18} className={cn('text-muted shrink-0 transition-transform', open && 'rotate-180')} />
      </button>
      {open && (
        <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-line">
          {children}
          {onNext && (
            <div className="mt-5 flex justify-end">
              <button type="button" onClick={onNext} className="text-sm font-semibold text-primary-ink hover:text-ink flex items-center gap-1">
                Próxima seção <ChevronDown size={16} className="-rotate-90" />
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

/* ---------- Texto do documento (cópia, e-mail) ---------- */
function docToText(doc: ToolDoc, hideInitials: boolean): string {
  const def = TOOLS[doc.kind];
  const lines: string[] = [
    def.kind === 'portfolio'
      ? `ATIVIDADE: ${doc.title || 'sem título'}`
      : `${def.label.toUpperCase()} — ${doc.title || 'sem título'}`,
  ];
  if (doc.temas.length) lines.push(`Temas: ${doc.temas.join(', ')}`);
  if (def.hasPatient) {
    const id = [
      !hideInitials && doc.data.iniciais ? `Paciente: ${doc.data.iniciais}` : '',
      ...IDENTIFICACAO.map((f) => (doc.data[f.key] ? `${f.label}: ${doc.data[f.key]}` : '')),
    ].filter(Boolean);
    if (id.length) lines.push('', 'IDENTIFICAÇÃO', id.join(' · '));
  }
  for (const s of def.sections) {
    const filled = sectionFields(s, doc.data).filter((f) => doc.data[f.key]?.trim());
    if (!filled.length) continue;
    lines.push('', s.title.toUpperCase());
    if (s.compact) {
      lines.push(filled.map((f) => `${f.label}: ${doc.data[f.key].trim()}${f.unit ? ' ' + f.unit : ''}`).join(' · '), '');
      continue;
    }
    for (const f of filled) lines.push(`${fullLabel(f)}:`, showValue(f, doc.data[f.key].trim()), '');
  }
  if (readImages(doc).length) lines.push('(Esta ficha tem imagens na área livre — veja o PDF.)');
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
        const filled = sectionFields(s, doc.data).filter((f) => doc.data[f.key]?.trim());
        if (!filled.length) return null;
        return (
          <div key={s.title} className="mt-4 text-sm">
            <h2 className="font-bold uppercase text-xs tracking-wide border-b border-black/30 mb-1">{s.title}</h2>
            {s.compact && <p>{filled.map((f) => `${f.label}: ${doc.data[f.key]}${f.unit ? ' ' + f.unit : ''}`).join(' · ')}</p>}
            {!s.compact && filled.map((f) => (
              <div key={f.key} className="mt-2 break-inside-avoid">
                <p className="font-semibold">{fullLabel(f)}</p>
                <p className="whitespace-pre-line">{showValue(f, doc.data[f.key])}</p>
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
const ShareModal: React.FC<{ docs: ToolDoc[]; onClose: () => void; onPdf?: () => void }> = ({ docs, onClose, onPdf }) => {
  const [to, setTo] = useState('');
  const [hide, setHide] = useState(true);
  const [copied, setCopied] = useState(false);
  const doc = docs[0];
  const isPortfolio = doc.kind === 'portfolio';
  const ordered = isPortfolio ? [...docs].sort(byActivityDate) : docs;
  const text =
    ordered.map((d, i) => (docs.length > 1 ? `— ${i + 1}/${docs.length} —\n` : '') + docToText(d, hide)).join('\n\n\n') +
    '\n\nDocumento anonimizado, registrado para fins de estudo no DEsimulados.';
  const subject = isPortfolio
    ? `[DEsimulados] Portfólio reflexivo — ${docs.length} atividade${docs.length > 1 ? 's' : ''}`
    : `[DEsimulados] ${TOOLS[doc.kind].label}: ${doc.title || 'caso para discussão'}`;

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
    <Modal title={docs.length > 1 ? `Enviar ${docs.length} atividades` : 'Enviar para colega ou preceptor'} onClose={onClose}>
      {isPortfolio && onPdf && (
        <div className="mb-5 rounded-xl bg-bg-2 p-4 text-sm text-ink-2 leading-relaxed">
          <p>
            Para enviar as fichas no modelo do portfólio, <strong className="text-ink">gere o PDF</strong> e anexe ao e-mail. Imagens da área
            livre só aparecem no PDF.
          </p>
          <button type="button" onClick={onPdf} className="btn btn-ghost !py-2 !px-4 mt-3 text-sm">
            <FileDown size={16} /> Gerar PDF {docs.length > 1 ? `das ${docs.length} fichas` : 'da ficha'}
          </button>
        </div>
      )}
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

/* ---------- IMC calculado ---------- */
const Imc: React.FC<{ peso?: string; altura?: string }> = ({ peso, altura }) => {
  const p = parseFloat((peso ?? '').replace(',', '.'));
  let a = parseFloat((altura ?? '').replace(',', '.'));
  if (a > 3) a = a / 100; // digitou em cm
  if (!p || !a) return null;
  const imc = p / (a * a);
  return (
    <p className="col-span-2 sm:col-span-4 text-sm text-ink-2">
      IMC: <strong className="text-ink tabular-nums">{imc.toFixed(1).replace('.', ',')} kg/m²</strong>
    </p>
  );
};

/* ---------- Exames físicos segmentares ---------- */
const ExamAdder: React.FC<{
  data: Record<string, string>;
  onChange: (key: string, v: string) => void;
  onSet: (ids: string[]) => void;
}> = ({ data, onChange, onSet }) => {
  let ids: string[] = [];
  try {
    ids = JSON.parse(data.exames || '[]');
  } catch {
    ids = [];
  }
  const available = EXAMES.filter((e) => !ids.includes(e.id));

  const remove = (id: string, label: string) => {
    if (data[`ef_${id}`]?.trim() && !confirm(`Remover o exame “${label}” e o que foi escrito nele?`)) return;
    onChange(`ef_${id}`, '');
    onSet(ids.filter((x) => x !== id));
  };

  return (
    <>
      {ids.map((id) => {
        const e = EXAMES.find((x) => x.id === id);
        if (!e) return null;
        return (
          <div key={id} className="col-span-full">
            <FieldInput
              field={{ key: `ef_${id}`, label: e.label, kind: 'textarea', rows: 3, wide: true, tip: e.tip }}
              value={data[`ef_${id}`] ?? ''}
              onChange={(v) => onChange(`ef_${id}`, v)}
            />
            <button type="button" onClick={() => remove(id, e.label)} className="mt-1 text-[11px] font-semibold text-muted hover:text-accent-coral">
              Remover este exame
            </button>
          </div>
        );
      })}
      {available.length > 0 && (
        <div className="col-span-full rounded-lg border border-dashed border-line-2 p-3">
          <p className="text-[13px] font-semibold text-ink-2">Exame segmentar conforme a queixa</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {available.map((e) => (
              <button
                key={e.id}
                type="button"
                onClick={() => onSet([...ids, e.id])}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-line bg-white text-xs font-medium text-ink-2 hover:border-primary hover:text-primary-ink hover:bg-primary-soft transition-colors"
              >
                <Plus size={12} /> {e.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

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

  // Blocos do formulário: identificação (se houver) + seções do modelo
  type Block = { id: string; title: string; section?: Section };
  const blocks: Block[] = [
    ...(def.hasPatient ? [{ id: 'sec-id', title: 'Identificação' }] : []),
    ...def.sections.map((sec, i) => ({ id: `sec-${i}`, title: sec.title, section: sec })),
  ];
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set([blocks[0]?.id]));
  const blockFields = (b: Block) => (b.section ? sectionFields(b.section, doc.data) : IDENTIFICACAO);
  const progress = (b: Block) => {
    const fs = blockFields(b);
    return { filled: fs.filter((f) => doc.data[f.key]?.trim()).length, total: fs.length };
  };
  const summary = (b: Block) => {
    const fs = blockFields(b);
    const first = fs.find((f) => doc.data[f.key]?.trim());
    if (first) return showValue(first, doc.data[first.key]).replace(/\s+/g, ' ');
    return fs.map((f) => f.abbr ?? f.label).join(' · ');
  };
  const toggle = (id: string) =>
    setOpenIds((cur) => {
      const n = new Set(cur);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });
  const goTo = (id: string) => {
    setOpenIds((cur) => new Set(cur).add(id));
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  };
  const totals = blocks.reduce(
    (acc, b) => {
      const p = progress(b);
      return { filled: acc.filled + p.filled, total: acc.total + p.total };
    },
    { filled: 0, total: 0 },
  );
  const pct = totals.total ? Math.round((totals.filled / totals.total) * 100) : 0;

  const labels = useMemo(() => {
    const m: Record<string, string> = { title: 'Título' };
    [...IDENTIFICACAO, ...def.sections.flatMap((s) => s.fields)].forEach((f) => (m[f.key] = f.label));
    EXAMES.forEach((e) => (m[`ef_${e.id}`] = e.label));
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

  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState('');

  const persist = async () => {
    const final = { ...doc, updatedAt: Date.now() };
    setHits(null);
    setSaving(true);
    setSaveError('');
    try {
      await saveDoc(session.uid, final);
    } catch (err) {
      setSaveError(
        (err as { code?: string })?.code === 'too-large'
          ? 'O documento ficou grande demais por causa das imagens. Remova uma ou duas e salve de novo.'
          : authMessage(err),
      );
      return;
    } finally {
      setSaving(false);
    }
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
      <div className="print:hidden container-custom py-6 sm:py-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button type="button" onClick={onBack} className="flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-ink">
            <ArrowLeft size={16} /> Meus documentos
          </button>
          <span className="text-xs text-muted">
            {dirty ? 'Alterações não salvas' : savedAt ? `Salvo em ${fmtDate(savedAt)}` : 'Novo documento'}
          </span>
        </div>

        <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-muted uppercase tracking-wider">
          {React.createElement(TOOL_ICONS[def.kind], { size: 14 })} {def.label}
        </div>
        <input
          className="mt-1.5 w-full bg-transparent font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-ink placeholder:text-muted/40 focus:outline-none"
          placeholder={def.kind === 'portfolio' ? 'Atividade — ex.: SAI – Agenda de atendimentos' : 'Título do caso — ex.: HAS descompensada'}
          value={doc.title}
          onChange={(e) => {
            setDoc((d) => ({ ...d, title: e.target.value }));
            setDirty(true);
          }}
        />

        {def.kind === 'portfolio' && <p className="mt-1 text-sm text-muted">Nome da atividade, como aparece no campo “Atividade” da ficha.</p>}

        {/* Temas */}
        <div className={cn('mt-4', def.kind === 'portfolio' && 'hidden')}>
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

        <div className="mt-6 grid lg:grid-cols-[14.5rem_1fr] gap-6 lg:gap-10 items-start">
          {/* Índice lateral */}
          <nav aria-label="Seções" className="hidden lg:block sticky top-24">
            <div className="flex items-center justify-between text-xs text-muted">
              <span>Preenchimento</span>
              <span className="tabular-nums font-semibold text-ink">{pct}%</span>
            </div>
            <div className="mt-1.5 h-1.5 rounded-full bg-bg-2 overflow-hidden">
              <div className="h-full bg-primary rounded-full transition-[width] duration-300" style={{ width: `${pct}%` }} />
            </div>
            <ol className="mt-5 space-y-0.5">
              {blocks.map((b, i) => {
                const pr = progress(b);
                return (
                  <li key={b.id}>
                    <button
                      type="button"
                      onClick={() => goTo(b.id)}
                      className="w-full flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-left text-sm text-ink-2 hover:bg-bg-2 hover:text-ink transition-colors"
                    >
                      {pr.total && pr.filled === pr.total ? (
                        <CheckCircle2 size={16} className="text-primary shrink-0" />
                      ) : (
                        <span
                          className={cn(
                            'w-4 h-4 rounded-full border-2 shrink-0',
                            pr.filled ? 'border-primary bg-primary-soft' : 'border-line-2',
                          )}
                        />
                      )}
                      <span className="truncate">
                        <span className="text-muted tabular-nums mr-1">{i + 1}.</span>
                        {b.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </nav>

          <div className="space-y-3 min-w-0">
            {blocks.map((b, i) => {
              const pr = progress(b);
              const next = blocks[i + 1];
              const sec = b.section;
              return (
                <SectionCard
                  key={b.id}
                  id={b.id}
                  n={i + 1}
                  title={b.title}
                  summary={summary(b)}
                  filled={pr.filled}
                  total={pr.total}
                  open={openIds.has(b.id)}
                  onToggle={() => toggle(b.id)}
                  onNext={next ? () => goTo(next.id) : undefined}
                >
                  {!sec ? (
                    <>
                      <div className="mt-4 flex flex-col sm:flex-row sm:items-end gap-3 rounded-lg bg-primary-soft/50 border border-primary/20 p-3">
                        <div className="flex-1">
                          <label htmlFor="nome-paciente" className="text-[13px] font-semibold text-ink-2">
                            Nome do paciente <span className="font-normal text-muted">(opcional, não é salvo)</span>
                          </label>
                          <input
                            id="nome-paciente"
                            className={cn(fieldCls, 'mt-1.5 bg-white')}
                            value={patientName}
                            onChange={(e) => onName(e.target.value)}
                            placeholder="Digite o nome completo"
                            autoComplete="off"
                            spellCheck={false}
                          />
                        </div>
                        <div className="flex items-center gap-2 text-sm sm:pb-2">
                          <ShieldCheck size={16} className="text-primary-ink shrink-0" />
                          <span className="text-ink-2">Salvo como</span>
                          <strong className="font-mono text-ink">{doc.data.iniciais || '—'}</strong>
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-3">
                        {IDENTIFICACAO.map((f) => (
                          <div key={f.key} className={cn(f.key === 'ocupacao' || f.key === 'procedencia' || f.key === 'naturalidade' ? 'col-span-2' : '')}>
                            <FieldInput field={f} value={doc.data[f.key] ?? ''} onChange={(v) => set(f.key, v)} />
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className={cn('mt-4 grid gap-x-4 gap-y-4', sec.compact ? 'grid-cols-2 sm:grid-cols-4 gap-y-3' : 'sm:grid-cols-2')}>
                      {sec.fields.map((f) => (
                        <FieldInput key={f.key} field={f} value={doc.data[f.key] ?? ''} onChange={(v) => set(f.key, v)} />
                      ))}
                      {sec.compact && <Imc peso={doc.data.peso} altura={doc.data.altura} />}
                      {sec.addExams && (
                        <ExamAdder data={doc.data} onChange={(key, v) => set(key, v)} onSet={(ids) => set('exames', JSON.stringify(ids))} />
                      )}
                      {def.kind === 'portfolio' && sec.title === 'Área livre' && (
                        <ImagePicker images={readImages(doc)} onChange={(imgs) => set('imagens', JSON.stringify(imgs))} />
                      )}
                    </div>
                  )}
                </SectionCard>
              );
            })}
        <p className="pt-3 text-xs text-muted leading-relaxed">
          Antes de salvar, o texto é verificado em busca do nome digitado, CPF, Cartão SUS, telefone, endereço e expressões como “Dona
          Maria”.
        </p>
          </div>
        </div>
      </div>

      {/* Barra de ações fixa */}
      <div className="print:hidden sticky bottom-0 z-30 bg-white/95 backdrop-blur border-t border-line">
        <div className="container-custom py-3 flex items-center gap-2">
          <button type="button" onClick={trySave} disabled={saving} className="btn btn-primary !px-5 !py-2.5 disabled:opacity-70">
            {saving ? <Loader2 size={17} className="animate-spin" /> : <Save size={17} />} {saving ? 'Salvando…' : 'Salvar'}
          </button>
          {saveError && <span className="text-xs font-medium text-accent-coral max-w-xs">{saveError}</span>}
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

      {def.kind === 'portfolio' ? <PortfolioPrint docs={[doc]} author={session.name} /> : <PrintView doc={doc} author={session.name} />}
      {hits && <PrivacyModal hits={hits} onFix={() => setHits(null)} onSaveAnyway={persist} />}
      {share && (
        <ShareModal
          docs={[doc]}
          onClose={() => setShare(false)}
          onPdf={() => {
            setShare(false);
            setTimeout(() => window.print(), 50);
          }}
        />
      )}
    </>
  );
};

/* ---------- Lista de documentos ---------- */
const DocList: React.FC<{ kind: ToolKind; docs: ToolDoc[]; author: string; onNew: () => void; onOpen: (d: ToolDoc) => void }> = ({
  kind,
  docs,
  author,
  onNew,
  onOpen,
}) => {
  const def = TOOLS[kind];
  const isPortfolio = kind === 'portfolio';
  const [q, setQ] = useState('');
  const [tema, setTema] = useState('');
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [share, setShare] = useState(false);
  const mine = docs.filter((d) => d.kind === kind);
  if (isPortfolio) mine.sort(byActivityDate);
  const temas = Array.from(new Set(mine.flatMap((d) => d.temas))).sort();
  const shown = mine.filter(
    (d) =>
      (!tema || d.temas.includes(tema)) &&
      (!q || (d.title + ' ' + Object.values(d.data).join(' ')).toLowerCase().includes(q.toLowerCase())),
  );
  const chosen = mine.filter((d) => selected.has(d.id));
  const allChosen = shown.length > 0 && shown.every((d) => selected.has(d.id));

  const toggle = (id: string) =>
    setSelected((cur) => {
      const n = new Set(cur);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });
  const toggleAll = () => setSelected(allChosen ? new Set() : new Set(shown.map((d) => d.id)));

  const subtitle = (d: ToolDoc) =>
    isPortfolio
      ? [d.data.data && showValue({ key: 'data', label: '', kind: 'date' }, d.data.data), d.data.local].filter(Boolean).join(' · ') || '—'
      : [d.data.iniciais, d.data.sexo, d.data.idade].filter(Boolean).join(' · ') || '—';

  return (
    <>
      <div className="print:hidden container-custom py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold">{def.label}</h1>
            <p className="mt-2 text-ink-2 max-w-xl">{def.description}</p>
          </div>
          <button type="button" onClick={onNew} className="btn btn-primary !py-3 self-start sm:self-auto">
            <Plus size={18} /> {kind === 'anamnese' ? 'Nova anamnese' : kind === 'soap' ? 'Novo SOAP' : 'Nova atividade'}
          </button>
        </div>

        {mine.length > 0 && (
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
              <input className={cn(inputCls, 'pl-9')} placeholder="Buscar" value={q} onChange={(e) => setQ(e.target.value)} />
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

        {isPortfolio && mine.length > 0 && (
          <div className="mt-4 flex items-center justify-between gap-3 text-sm">
            <button type="button" onClick={toggleAll} className="flex items-center gap-2 font-semibold text-ink-2 hover:text-ink">
              {allChosen ? <CheckSquare size={18} className="text-primary-ink" /> : <Square size={18} />}
              {allChosen ? 'Desmarcar todas' : 'Selecionar todas'}
            </button>
            <span className="text-muted">
              {mine.length} atividade{mine.length > 1 ? 's' : ''}
            </span>
          </div>
        )}

        {mine.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-line-2 bg-white p-10 text-center">
            <p className="font-semibold text-ink">{isPortfolio ? 'Nenhuma atividade ainda.' : 'Nenhum documento ainda.'}</p>
            <p className="mt-1 text-sm text-muted">
              {isPortfolio
                ? 'A cada atividade da prática, adicione uma ficha e faça a reflexão.'
                : 'Cada paciente gera um documento novo e independente.'}
            </p>
          </div>
        ) : (
          <ul className={cn('mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3', isPortfolio && chosen.length > 0 && 'pb-24')}>
            {shown.map((d) => {
              const on = selected.has(d.id);
              return (
                <li key={d.id} className="relative">
                  <button
                    type="button"
                    onClick={() => onOpen(d)}
                    className={cn(
                      'w-full h-full text-left bg-white rounded-xl border p-4 transition-colors',
                      on ? 'border-primary ring-1 ring-primary' : 'border-line hover:border-primary/60',
                      isPortfolio && 'pr-12',
                    )}
                  >
                    <p className="font-semibold text-ink line-clamp-2">{d.title || 'Sem título'}</p>
                    <p className="mt-1 text-xs text-muted">{subtitle(d)}</p>
                    {isPortfolio && d.data.reflexao && <p className="mt-2 text-xs text-ink-2 line-clamp-2">{d.data.reflexao}</p>}
                    {isPortfolio && !d.data.reflexao && <p className="mt-2 text-xs font-semibold text-accent-coral">Falta a reflexão</p>}
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
                  {isPortfolio && (
                    <button
                      type="button"
                      onClick={() => toggle(d.id)}
                      aria-pressed={on}
                      aria-label={on ? 'Desmarcar atividade' : 'Selecionar atividade'}
                      className="absolute top-3 right-3 p-1 text-muted hover:text-ink"
                    >
                      {on ? <CheckSquare size={22} className="text-primary-ink" /> : <Square size={22} />}
                    </button>
                  )}
                </li>
              );
            })}
            {shown.length === 0 && <li className="text-sm text-muted">Nada encontrado com esse filtro.</li>}
          </ul>
        )}
      </div>

      {isPortfolio && chosen.length > 0 && (
        <>
          <div className="print:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur border-t border-line">
            <div className="container-custom py-3 flex items-center gap-2">
              <span className="text-sm font-semibold text-ink mr-auto">
                {chosen.length} selecionada{chosen.length > 1 ? 's' : ''}
              </span>
              <button type="button" onClick={() => window.print()} className="btn btn-ghost !px-4 !py-2.5">
                <FileDown size={17} /> PDF
              </button>
              <button type="button" onClick={() => setShare(true)} className="btn btn-primary !px-4 !py-2.5">
                <Mail size={17} /> Enviar
              </button>
            </div>
          </div>
          <PortfolioPrint docs={chosen} author={author} />
          {share && (
            <ShareModal
              docs={chosen}
              onClose={() => setShare(false)}
              onPdf={() => {
                setShare(false);
                setTimeout(() => window.print(), 50);
              }}
            />
          )}
        </>
      )}
    </>
  );
};

/* ---------- Página ---------- */
export const ToolsPage: React.FC<{ initialKind: ToolKind; onHome: () => void }> = ({ initialKind, onHome }) => {
  // undefined = ainda verificando se há alguém logado
  const [session, setSession] = useState<Session | null | undefined>(undefined);
  const [kind, setKind] = useState<ToolKind>(initialKind);
  const [docs, setDocs] = useState<ToolDoc[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState('');
  const [editing, setEditing] = useState<{ doc: ToolDoc; isNew: boolean } | null>(null);

  const refresh = async (s: Session) => {
    setLoading(true);
    setLoadError('');
    try {
      setDocs(await listDocs(s.uid));
    } catch (err) {
      setLoadError(authMessage(err));
    } finally {
      setLoading(false);
    }
  };

  useEffect(
    () =>
      watchSession((s) => {
        setSession(s);
        if (s) refresh(s);
        else {
          setDocs([]);
          setEditing(null);
        }
      }),
    [],
  );

  const startNew = () => {
    // No portfólio, a nova ficha já vem com o cabeçalho e o professor da última atividade.
    const data: Record<string, string> = {};
    if (kind === 'portfolio') {
      const last = docs.find((d) => d.kind === 'portfolio');
      for (const k of ['disciplina', 'grupo', 'modulo', 'local', 'professor', 'horario', 'total']) if (last?.data[k]) data[k] = last.data[k];
      // sugere o próximo número da sequência
      const nums = docs.filter((d) => d.kind === 'portfolio').map((d) => parseInt(d.data.numero ?? '', 10)).filter((x) => x > 0);
      if (nums.length) data.numero = String(Math.max(...nums) + 1);
      if (!data.disciplina) data.disciplina = 'IESC';
    }
    setEditing({
      isNew: true,
      doc: { id: newId(), kind, title: '', temas: [], data, createdAt: Date.now(), updatedAt: Date.now() },
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg print:bg-white print:min-h-0">
      <header className="print:hidden sticky top-0 z-40 bg-bg/85 backdrop-blur-md border-b border-line">
        <div className="container-custom h-16 flex items-center justify-between gap-3">
          <Brand onClick={onHome} />
          {session && (
            <div className="flex items-center gap-3 min-w-0">
              <span className="hidden sm:block text-sm text-ink-2 truncate">Olá, {session.name.split(' ')[0]}</span>
              <button
                type="button"
                onClick={() => signOut()}
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
      {session && !session.verified && (
        <div className="print:hidden">
          <VerifyBanner email={session.email} />
        </div>
      )}

      <main className="flex-1">
        {session === undefined ? (
          <div className="py-24 flex justify-center text-muted">
            <Loader2 size={24} className="animate-spin" />
          </div>
        ) : !session ? (
          <AuthScreen onHome={onHome} onDone={(s) => setSession(s)} />
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
            onDelete={async (id) => {
              try {
                await deleteDoc(id);
              } catch (err) {
                alert(authMessage(err));
                return;
              }
              setEditing(null);
              refresh(session);
            }}
          />
        ) : loading && docs.length === 0 ? (
          <div className="py-24 flex justify-center text-muted">
            <Loader2 size={24} className="animate-spin" />
          </div>
        ) : loadError ? (
          <div className="container-custom py-16 text-center">
            <p className="font-semibold text-ink">{loadError}</p>
            <button type="button" onClick={() => refresh(session)} className="btn btn-ghost !py-2.5 mt-4">
              Tentar de novo
            </button>
          </div>
        ) : (
          <DocList key={kind} kind={kind} docs={docs} author={session.name} onNew={startNew} onOpen={(d) => setEditing({ doc: d, isNew: false })} />
        )}
      </main>
    </div>
  );
};
