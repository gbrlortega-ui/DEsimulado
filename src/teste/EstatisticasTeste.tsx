import { useEffect, useMemo, useState } from 'react';
import { AlertTriangle, ChevronDown, Crosshair, FlaskConical, RefreshCw, Sparkles, Target, Trophy } from 'lucide-react';
import type { Question } from '../types';
import { loadBank } from '../data/banco';
import { loadHistory, summarize } from '../lib/history';
import { Brand } from '../components/Brand';
import { cn } from '../lib/utils';
import {
  bankWeights,
  classify,
  computeStats,
  focusList,
  GRANDES_AREAS,
  MIN_RESPOSTAS,
  perc,
  SINDROMES,
  type Estatisticas,
  type Placar,
  type Resposta,
} from '../lib/taxonomia';

/**
 * PÁGINA DE TESTE (/estatisticas-teste.html) — protótipo da área "Minhas estatísticas".
 * Não mexe no site: não grava nada, não usa a conta e não altera o painel "Seu desempenho".
 * Os números vêm de um aluno fictício gerado a partir das questões reais do banco.
 */

// ---------- Aluno fictício ----------

function rng(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

interface Demo {
  respostas: Resposta[];
  simulados: number;
  fracos: string[];
  fortes: string[];
}

function gerarAluno(questions: Question[], seed: number, quantidade: number): Demo {
  const r = rng(seed);
  const base: Record<string, number> = {};
  GRANDES_AREAS.forEach((g) => (base[g.id] = 0.45 + r() * 0.3));
  const subs = GRANDES_AREAS.flatMap((g) => g.subareas.map((s) => `${g.id}/${s.id}`));
  const pick = () => subs[Math.floor(r() * subs.length)];
  const fracos = Array.from({ length: 5 }, pick);
  const fortes = Array.from({ length: 4 }, pick).filter((k) => !fracos.includes(k));
  const pool = [...questions].filter((q) => !q.annulled);
  const respostas: Resposta[] = [];
  for (let i = 0; i < quantidade && pool.length; i++) {
    const q = pool.splice(Math.floor(r() * pool.length), 1)[0];
    const c = classify(q);
    let p = 0;
    let n = 0;
    for (const { area, subareas } of c.areas) {
      for (const sub of subareas) {
        const key = `${area}/${sub}`;
        p += base[area] + (fracos.includes(key) ? -0.3 : 0) + (fortes.includes(key) ? 0.22 : 0);
        n++;
      }
    }
    const chance = Math.min(0.95, Math.max(0.08, n ? p / n : 0.55));
    respostas.push({ questionId: q.id, correct: r() < chance });
  }
  return { respostas, simulados: Math.ceil(quantidade / 30), fracos, fortes };
}

// ---------- Visual ----------

const band = (p: number) => (p >= 60 ? 'bg-accent-green' : p >= 40 ? 'bg-accent-amber' : 'bg-accent-coral');
const bandText = (p: number) => (p >= 60 ? 'text-primary-ink' : p >= 40 ? 'text-[oklch(50%_0.12_70)]' : 'text-accent-coral');

function Bar({ placar, compact }: { placar?: Placar; compact?: boolean }) {
  const p = perc(placar);
  const poucas = !placar || placar.total < MIN_RESPOSTAS;
  return (
    <div className={cn('rounded-full bg-line overflow-hidden', compact ? 'h-1.5' : 'h-2')}>
      {placar?.total ? (
        <div className={cn('h-full rounded-full', band(p), poucas && 'opacity-40')} style={{ width: `${Math.max(p, 2)}%` }} />
      ) : null}
    </div>
  );
}

function Linha({ name, sub, placar, peso, compact }: { name: string; sub?: string; placar?: Placar; peso?: number; compact?: boolean }) {
  const p = perc(placar);
  const vazio = !placar?.total;
  const poucas = !vazio && placar!.total < MIN_RESPOSTAS;
  return (
    <div className={cn(vazio && 'opacity-60')}>
      <div className="flex items-baseline justify-between gap-3 text-sm">
        <span className="min-w-0">
          <span className={cn('text-ink', compact ? 'font-normal' : 'font-medium')}>{name}</span>
          {sub && <span className="block text-xs text-muted truncate">{sub}</span>}
        </span>
        <span className="shrink-0 text-muted tabular-nums text-right">
          {vazio ? (
            <span className="text-xs">sem respostas{peso ? ` · ${peso} no banco` : ''}</span>
          ) : (
            <>
              <span className="text-xs">
                {placar!.correct}/{placar!.total}
                {poucas && ' · poucas'}
              </span>
              <span className={cn('font-semibold ml-2', bandText(p))}>{p}%</span>
            </>
          )}
        </span>
      </div>
      <div className="mt-1.5">
        <Bar placar={placar} compact={compact} />
      </div>
    </div>
  );
}

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <section className={cn('rounded-2xl border border-line-2 bg-white p-5 sm:p-7', className)}>{children}</section>;
}

// ---------- Página ----------

export function EstatisticasTeste() {
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [erro, setErro] = useState(false);
  const [seed, setSeed] = useState(7);
  const [quantidade, setQuantidade] = useState(400);
  const [aberta, setAberta] = useState<string | null>(null);

  useEffect(() => {
    loadBank()
      .then((b) => setQuestions(b.QUESTIONS))
      .catch(() => setErro(true));
  }, []);

  const byId = useMemo(() => new Map((questions ?? []).map((q) => [q.id, q])), [questions]);
  const weights = useMemo(() => (questions ? bankWeights(questions) : null), [questions]);
  const demo = useMemo(() => (questions ? gerarAluno(questions, seed, quantidade) : null), [questions, seed, quantidade]);
  const st: Estatisticas | null = useMemo(() => (demo ? computeStats(demo.respostas, byId) : null), [demo, byId]);
  const foco = useMemo(() => (st && weights ? focusList(st, weights) : []), [st, weights]);

  const historicoReal = useMemo(() => loadHistory(), []);
  const resumoReal = summarize(historicoReal);

  if (erro) return <p className="p-8 text-center">Não foi possível carregar o banco de questões. Recarregue a página.</p>;
  if (!st || !weights || !demo) {
    return (
      <p role="status" className="p-8 flex items-center justify-center gap-3 text-ink-2">
        <span className="w-5 h-5 rounded-full border-2 border-primary border-t-transparent animate-spin" aria-hidden />
        Carregando questões…
      </p>
    );
  }

  const areas = GRANDES_AREAS.map((g) => ({ g, placar: st.areas[g.id] }))
    .filter((a) => a.placar?.total || weights.areas[a.g.id]?.total)
    .sort((a, b) => (b.placar?.total ? 1 : 0) - (a.placar?.total ? 1 : 0) || perc(a.placar) - perc(b.placar));

  const todasSubs = GRANDES_AREAS.flatMap((g) =>
    g.subareas.map((s) => ({ name: s.name, area: g.name, placar: st.subareas[`${g.id}/${s.id}`] }))
  ).filter((s) => s.placar && s.placar.total >= MIN_RESPOSTAS);
  const fortes = [...todasSubs].sort((a, b) => perc(b.placar) - perc(a.placar) || b.placar!.total - a.placar!.total).slice(0, 4);

  const sindromes = SINDROMES.map((sy) => ({ sy, placar: st.sindromes[sy.id], peso: weights.sindromes[sy.id]?.total ?? 0 })).sort(
    (a, b) => (b.placar?.total ? 1 : 0) - (a.placar?.total ? 1 : 0) || perc(a.placar) - perc(b.placar)
  );

  return (
    <div className="min-h-screen pb-16">
      <div className="bg-amber-soft border-b border-accent-amber/40">
        <div className="container-custom py-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <span className="inline-flex items-center gap-2 font-semibold text-ink">
            <FlaskConical size={16} aria-hidden />
            Página de teste
          </span>
          <span className="text-ink-2">
            Dados de um aluno fictício, sorteados das {byId.size.toLocaleString('pt-BR')} questões reais do banco. O site continua igual.
          </span>
          <span className="flex items-center gap-2 ml-auto">
            <label className="text-ink-2" htmlFor="qtd">
              Questões respondidas
            </label>
            <select
              id="qtd"
              value={quantidade}
              onChange={(e) => setQuantidade(Number(e.target.value))}
              className="rounded-lg border border-line-2 bg-white px-2 py-1"
            >
              {[30, 100, 400, 1200].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
            <button type="button" onClick={() => setSeed((s) => s + 1)} className="inline-flex items-center gap-1 rounded-lg border border-line-2 bg-white px-3 py-1 font-medium hover:border-ink/30">
              <RefreshCw size={14} aria-hidden />
              Outro aluno
            </button>
          </span>
        </div>
      </div>

      <header className="container-custom pt-6 flex items-center justify-between gap-4">
        <Brand onClick={() => (window.location.href = '/')} />
      </header>

      <main className="container-custom pt-6 space-y-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold">Minhas estatísticas</h1>
          <p className="mt-2 text-ink-2 max-w-2xl">
            Seu acerto por grande área, por subárea e pelas síndromes que as provas cobram — e onde vale a pena focar agora.
          </p>
        </div>

        <Card>
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              ['Simulados', demo.simulados.toLocaleString('pt-BR')],
              ['Questões respondidas', st.geral.total.toLocaleString('pt-BR')],
              ['Acerto geral', `${perc(st.geral)}%`],
              ['Temas com dados', `${todasSubs.length} de ${GRANDES_AREAS.reduce((n, g) => n + g.subareas.length, 0)}`],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-xs text-muted">{label}</dt>
                <dd className="font-heading text-2xl sm:text-3xl font-bold text-ink tabular-nums mt-0.5">{value}</dd>
              </div>
            ))}
          </dl>
        </Card>

        {/* Onde focar */}
        <Card className="border-primary/40">
          <h2 className="text-2xl font-extrabold flex items-center gap-2">
            <Crosshair className="w-5 h-5 text-primary-ink" aria-hidden />
            Onde focar agora
          </h2>
          <p className="mt-1 text-sm text-muted">
            Temas com acerto baixo e que mais caem nas provas (peso = questões do tema no banco). Só entram temas com pelo menos {MIN_RESPOSTAS} respostas.
          </p>
          {foco.length ? (
            <ol className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {foco.map((f, i) => (
                <li key={f.key} className="rounded-xl border border-line-2 p-4 flex flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-semibold text-muted">
                      {i + 1}º · {f.kind === 'sindrome' ? 'Síndrome transversal' : f.area}
                    </span>
                    <span className={cn('font-heading text-xl font-bold tabular-nums', bandText(perc(f.placar)))}>{perc(f.placar)}%</span>
                  </div>
                  <p className="mt-1 font-semibold text-ink">{f.name}</p>
                  <p className="mt-1 text-xs text-muted">
                    {f.placar.correct} de {f.placar.total} certas · {f.peso} questões no banco
                  </p>
                  <div className="mt-3">
                    <Bar placar={f.placar} compact />
                  </div>
                  <button
                    type="button"
                    disabled
                    title="Na versão final, abre um simulado só com questões deste tema"
                    className="mt-4 self-start inline-flex items-center gap-1 text-sm font-semibold text-primary-ink opacity-70 cursor-not-allowed"
                  >
                    <Target size={15} aria-hidden />
                    Treinar este tema
                  </button>
                </li>
              ))}
            </ol>
          ) : (
            <p className="mt-5 text-sm text-ink-2">Responda mais questões para aparecerem recomendações.</p>
          )}

          {fortes.length > 0 && (
            <div className="mt-6 pt-5 border-t border-line">
              <h3 className="text-sm font-semibold font-sans text-ink flex items-center gap-2">
                <Trophy size={15} className="text-primary-ink" aria-hidden />
                Seus pontos fortes
              </h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {fortes.map((f) => (
                  <li key={f.name + f.area} className="rounded-full bg-primary-soft px-3 py-1 text-sm text-ink">
                    {f.name} <span className="font-semibold text-primary-ink tabular-nums">{perc(f.placar)}%</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Card>

        {/* Grandes áreas → subáreas */}
        <Card>
          <h2 className="text-2xl font-extrabold">Por grande área</h2>
          <p className="mt-1 text-sm text-muted">
            Da mais fraca para a mais forte. Toque numa área para ver as subáreas. Uma questão pode contar em mais de uma área
            (ex.: cetoacidose conta em Clínica e em Emergência).
          </p>
          <ul className="mt-5 divide-y divide-line">
            {areas.map(({ g, placar }) => {
              const open = aberta === g.id;
              const subs = [...g.subareas.map((s) => ({ id: s.id, name: s.name, temas: s.temas })), ...(g.module ? [{ id: 'outros', name: 'Outros temas', temas: 'Questões da área sem subárea reconhecida' }] : [])]
                .map((s) => ({ ...s, placar: st.subareas[`${g.id}/${s.id}`], peso: weights.subareas[`${g.id}/${s.id}`]?.total ?? 0 }))
                .filter((s) => s.id !== 'outros' || s.placar?.total)
                .sort((a, b) => (b.placar?.total ? 1 : 0) - (a.placar?.total ? 1 : 0) || perc(a.placar) - perc(b.placar));
              return (
                <li key={g.id} className="py-3">
                  <button
                    type="button"
                    onClick={() => setAberta(open ? null : g.id)}
                    aria-expanded={open}
                    className="w-full text-left flex items-center gap-3 group"
                  >
                    <div className="flex-1 min-w-0">
                      <Linha name={g.name} placar={placar} peso={weights.areas[g.id]?.total} />
                    </div>
                    <ChevronDown size={18} className={cn('shrink-0 text-muted transition-transform', open && 'rotate-180')} aria-hidden />
                  </button>
                  {open && (
                    <ul className="mt-4 mb-2 ml-1 sm:ml-4 pl-3 sm:pl-5 border-l-2 border-line grid sm:grid-cols-2 gap-x-8 gap-y-4">
                      {subs.map((s) => (
                        <li key={s.id}>
                          <Linha name={s.name} sub={s.temas} placar={s.placar} peso={s.peso} compact />
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </Card>

        {/* Síndromes transversais */}
        <Card>
          <h2 className="text-2xl font-extrabold">Síndromes e apresentações clínicas</h2>
          <p className="mt-1 text-sm text-muted">
            Questões que partem de uma queixa e pedem diagnóstico diferencial, de qualquer área.
          </p>
          <ul className="mt-5 grid sm:grid-cols-2 gap-x-10 gap-y-4">
            {sindromes.map(({ sy, placar, peso }) => (
              <li key={sy.id}>
                <Linha name={sy.name} sub={sy.diferenciais} placar={placar} peso={peso} compact />
              </li>
            ))}
          </ul>
        </Card>

        {/* Dados reais deste navegador */}
        <Card className="bg-bg-2">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <Sparkles size={17} className="text-primary-ink" aria-hidden />
            E os meus dados de verdade?
          </h2>
          <p className="mt-2 text-sm text-ink-2 max-w-3xl">
            Hoje o histórico guarda só o acerto por área de cada simulado — não quais questões você respondeu. Por isso esta página usa um
            aluno fictício. Na versão final, cada simulado entregue passa a guardar as questões e se você acertou, e esta área mostra seus
            números reais (no navegador e, com login, na conta).
          </p>
          {historicoReal.length > 0 ? (
            <p className="mt-3 text-sm text-ink">
              Neste navegador: {historicoReal.length} simulado(s), {resumoReal.total} questões, {resumoReal.perc}% de acerto — por enquanto só
              por área.
            </p>
          ) : (
            <p className="mt-3 text-sm text-muted">Nenhum simulado feito neste navegador ainda.</p>
          )}
          <p className="mt-4 text-xs text-muted flex items-start gap-1.5">
            <AlertTriangle size={14} className="shrink-0 mt-px" aria-hidden />
            A classificação em subáreas e síndromes é automática, pelas tags e pela topografia de cada questão. Aluno fictício: pontos fracos
            sorteados = {demo.fracos.map((k) => k.split('/')[1]).join(', ')}.
          </p>
        </Card>
      </main>
    </div>
  );
}
