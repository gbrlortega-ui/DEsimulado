import { useEffect, useMemo, useState } from 'react';
import { FlaskConical, RefreshCw } from 'lucide-react';
import type { Question } from '../types';
import { loadBank } from '../data/banco';
import { MinhasEstatisticas } from '../components/MinhasEstatisticas';
import { classify, GRANDES_AREAS, type Resposta } from '../lib/taxonomia';

/**
 * PÁGINA DE TESTE (/estatisticas-teste.html): a tela "Minhas estatísticas" com um aluno fictício,
 * sorteado das questões reais do banco. Não grava nada e não usa a conta.
 */

function rng(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function gerarAluno(questions: Question[], seed: number, quantidade: number): Resposta[] {
  const r = rng(seed);
  const base: Record<string, number> = {};
  GRANDES_AREAS.forEach((g) => (base[g.id] = 0.45 + r() * 0.3));
  const subs = GRANDES_AREAS.flatMap((g) => g.subareas.map((s) => `${g.id}/${s.id}`));
  const pick = () => subs[Math.floor(r() * subs.length)];
  const fracos = Array.from({ length: 5 }, pick);
  const fortes = Array.from({ length: 4 }, pick).filter((k) => !fracos.includes(k));
  const pool = questions.filter((q) => !q.annulled);
  const respostas: Resposta[] = [];
  for (let i = 0; i < quantidade && pool.length; i++) {
    const q = pool.splice(Math.floor(r() * pool.length), 1)[0];
    let p = 0;
    let n = 0;
    for (const { area, subareas } of classify(q).areas) {
      for (const sub of subareas) {
        const key = `${area}/${sub}`;
        p += base[area] + (fracos.includes(key) ? -0.3 : 0) + (fortes.includes(key) ? 0.22 : 0);
        n++;
      }
    }
    respostas.push({ questionId: q.id, correct: r() < Math.min(0.95, Math.max(0.08, n ? p / n : 0.55)) });
  }
  return respostas;
}

export function EstatisticasTeste() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [seed, setSeed] = useState(7);
  const [quantidade, setQuantidade] = useState(400);

  useEffect(() => {
    loadBank().then((b) => setQuestions(b.QUESTIONS)).catch(() => {});
  }, []);

  const respostas = useMemo(() => gerarAluno(questions, seed, quantidade), [questions, seed, quantidade]);
  const home = () => (window.location.href = '/');

  const banner = (
    <div className="bg-amber-soft border-b border-accent-amber/40">
      <div className="container-custom py-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
        <span className="inline-flex items-center gap-2 font-semibold text-ink">
          <FlaskConical size={16} aria-hidden />
          Página de teste
        </span>
        <span className="text-ink-2">Aluno fictício, sorteado das questões reais do banco. Nada é gravado.</span>
        <span className="flex items-center gap-2 ml-auto">
          <label className="text-ink-2" htmlFor="qtd">
            Questões respondidas
          </label>
          <select id="qtd" value={quantidade} onChange={(e) => setQuantidade(Number(e.target.value))} className="rounded-lg border border-line-2 bg-white px-2 py-1">
            {[0, 30, 100, 400, 1200].map((n) => (
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
  );

  return (
    <MinhasEstatisticas
      respostas={respostas}
      simulados={Math.ceil(quantidade / 30)}
      semDetalhe={0}
      onHome={home}
      onSetup={home}
      banner={banner}
    />
  );
}
