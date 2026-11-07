/**
 * Modelos dos documentos de "Outras ferramentas" (Anamnese, SOAP, Portfólio reflexivo),
 * pensados para a prática na UBS. Cada atendimento gera um documento independente.
 *
 * O nome do paciente NUNCA faz parte do documento: ele é digitado num campo à parte,
 * convertido em iniciais no próprio navegador, e só as iniciais entram aqui.
 */

export type ToolKind = 'anamnese' | 'soap' | 'portfolio';

export interface Field {
  key: string;
  label: string;
  kind: 'text' | 'textarea' | 'select' | 'number' | 'date';
  options?: string[];
  placeholder?: string;
  rows?: number;
  /** ocupa a linha inteira na grade */
  wide?: boolean;
  hint?: string;
  /** Dica para o estudante, mostrada abaixo do campo */
  tip?: string;
}

export interface Section {
  title: string;
  fields: Field[];
  /** Grade de 4 colunas (sinais vitais) */
  compact?: boolean;
  /** Permite adicionar exames físicos segmentares */
  addExams?: boolean;
}

export interface ToolDef {
  kind: ToolKind;
  label: string;
  short: string;
  description: string;
  /** Usa o bloco de identificação do paciente (nome → iniciais) */
  hasPatient: boolean;
  sections: Section[];
}

const SEXO = ['Feminino', 'Masculino', 'Outro / não informado'];
const ESTADO_CIVIL = ['Solteiro(a)', 'Casado(a) / união estável', 'Divorciado(a)', 'Viúvo(a)', 'Não informado'];
const ESCOLARIDADE = [
  'Sem escolaridade',
  'Fundamental incompleto',
  'Fundamental completo',
  'Médio incompleto',
  'Médio completo',
  'Superior incompleto',
  'Superior completo',
  'Não informado',
];

export const IDENTIFICACAO: Field[] = [
  { key: 'sexo', label: 'Sexo', kind: 'select', options: SEXO },
  { key: 'idade', label: 'Idade', kind: 'text', placeholder: 'ex.: 62 anos, 8 meses' },
  { key: 'naturalidade', label: 'Naturalidade', kind: 'text', placeholder: 'cidade/UF de nascimento' },
  { key: 'procedencia', label: 'Procedência', kind: 'text', placeholder: 'cidade ou região (sem endereço)' },
  { key: 'estadoCivil', label: 'Estado civil', kind: 'select', options: ESTADO_CIVIL },
  { key: 'escolaridade', label: 'Escolaridade', kind: 'select', options: ESCOLARIDADE },
  { key: 'ocupacao', label: 'Ocupação', kind: 'text', placeholder: 'genérica: aposentado, trabalhador rural…' },
];

export const TOOLS: Record<ToolKind, ToolDef> = {
  anamnese: {
    kind: 'anamnese',
    label: 'Anamnese',
    short: 'Anamnese',
    description: 'Anamnese completa com dicas de semiologia em cada campo e exame físico segmentar conforme a queixa.',
    hasPatient: true,
    sections: [
      {
        title: 'Queixa e história',
        fields: [
          {
            key: 'qd',
            label: 'QD — Queixa e duração',
            kind: 'textarea',
            rows: 2,
            wide: true,
            tip: 'Nas palavras do paciente, com o tempo de evolução. Ex.: “dor de cabeça há 3 dias”.',
          },
          {
            key: 'hma',
            label: 'HMA — História da moléstia atual',
            kind: 'textarea',
            rows: 7,
            wide: true,
            tip: 'Use o CLEARAST para caracterizar o sintoma: Cronologia (início e duração) · Localização · Evolução · Agravantes e Atenuantes · Radiação (irradiação) · Associados (sintomas) · Severidade (intensidade, 0–10) · Tipo (característica). Feche com o que já foi feito e o motivo da procura hoje.',
          },
          {
            key: 'isda',
            label: 'ISDA — Interrogatório sobre os diversos aparelhos',
            kind: 'textarea',
            rows: 4,
            wide: true,
            tip: 'Percorra por sistemas: geral (febre, astenia, perda de peso), pele, cabeça e pescoço, cardiovascular, respiratório, digestivo, geniturinário, musculoesquelético, neurológico e psíquico. Registre também as negativas relevantes.',
          },
        ],
      },
      {
        title: 'Antecedentes',
        fields: [
          {
            key: 'apFisiologico',
            label: 'Antecedentes pessoais fisiológicos',
            kind: 'textarea',
            rows: 3,
            wide: true,
            tip: 'Gestação e parto, desenvolvimento neuropsicomotor. Na mulher: menarca, ciclo menstrual, DUM, G_P_A, método contraceptivo, menopausa.',
          },
          {
            key: 'apPatologico',
            label: 'Antecedentes pessoais patológicos',
            kind: 'textarea',
            rows: 3,
            wide: true,
            tip: 'Doenças da infância e crônicas (HAS, DM, DPOC…), internações, cirurgias, traumas, transfusões, ISTs e alergias (a quê e qual reação).',
          },
          {
            key: 'medicamentos',
            label: 'Medicamentos em uso',
            kind: 'textarea',
            rows: 3,
            wide: true,
            tip: 'Nome, dose, posologia, desde quando e adesão. Pergunte por automedicação, fitoterápicos e anticoncepcional.',
          },
          {
            key: 'vacinacao',
            label: 'Vacinação',
            kind: 'textarea',
            rows: 2,
            wide: true,
            tip: 'Confira a caderneta pelo calendário do PNI para a faixa etária (e para gestantes, se for o caso). Anote o que está em atraso.',
          },
          {
            key: 'af',
            label: 'Antecedentes familiares',
            kind: 'textarea',
            rows: 2,
            wide: true,
            tip: 'Use o parentesco, nunca nomes: “mãe – DM2”, “irmão – IAM aos 50 anos”.',
          },
        ],
      },
      {
        title: 'Hábitos e contexto de vida',
        fields: [
          {
            key: 'habitos',
            label: 'Hábitos de vida',
            kind: 'textarea',
            rows: 3,
            wide: true,
            tip: 'Alimentação, atividade física, sono, tabagismo (anos-maço = maços por dia × anos de uso), etilismo (tipo, quantidade, CAGE) e outras substâncias.',
          },
          {
            key: 'contexto',
            label: 'Contexto familiar e social',
            kind: 'textarea',
            rows: 3,
            wide: true,
            tip: 'Com quem mora (papéis e idades, sem nomes), moradia e saneamento, renda, rede de apoio e acesso à UBS.',
          },
        ],
      },
      {
        title: 'Sinais vitais e medidas',
        compact: true,
        fields: [
          { key: 'pa', label: 'PA', kind: 'text', placeholder: 'mmHg' },
          { key: 'fc', label: 'FC', kind: 'text', placeholder: 'bpm' },
          { key: 'fr', label: 'FR', kind: 'text', placeholder: 'irpm' },
          { key: 'sat', label: 'Saturação', kind: 'text', placeholder: '% SpO₂' },
          { key: 'temp', label: 'Temperatura', kind: 'text', placeholder: '°C' },
          { key: 'peso', label: 'Peso', kind: 'text', placeholder: 'kg' },
          { key: 'altura', label: 'Altura', kind: 'text', placeholder: 'm' },
          { key: 'hgt', label: 'Glicemia capilar', kind: 'text', placeholder: 'mg/dL' },
        ],
      },
      {
        title: 'Exame físico',
        addExams: true,
        fields: [
          {
            key: 'exameGeral',
            label: 'Exame físico geral',
            kind: 'textarea',
            rows: 4,
            wide: true,
            tip: 'Estado geral, nível de consciência e orientação, hidratação, coloração, cianose, icterícia, febre, padrão respiratório, edema e linfonodos. Ex.: BEG, LOTE, corado, hidratado, acianótico, anictérico, afebril, eupneico.',
          },
        ],
      },
      {
        title: 'Raciocínio clínico',
        fields: [
          {
            key: 'hd',
            label: 'HD — Hipóteses diagnósticas',
            kind: 'textarea',
            rows: 4,
            wide: true,
            tip: 'Raciocine em etapas: diagnóstico sindrômico (qual síndrome?) → topográfico (onde está a lesão, qual órgão ou sistema?) → nosológico/etiológico (qual doença e causa?) → hipótese principal e diferenciais.',
          },
          {
            key: 'conduta',
            label: 'Conduta',
            kind: 'textarea',
            rows: 4,
            wide: true,
            tip: 'Medidas não farmacológicas, prescrição (dose e posologia), exames, encaminhamentos, orientações e retorno.',
          },
          { key: 'aprendizado', label: 'Pontos para estudar', kind: 'textarea', rows: 3, wide: true, hint: 'O que este caso mostrou que você precisa revisar.' },
        ],
      },
    ],
  },
  soap: {
    kind: 'soap',
    label: 'SOAP',
    short: 'SOAP',
    description: 'Registro de consulta no formato do e-SUS: Subjetivo, Objetivo, Avaliação e Plano.',
    hasPatient: true,
    sections: [
      {
        title: 'Registro SOAP',
        fields: [
          { key: 's', label: 'S — Subjetivo', kind: 'textarea', rows: 5, wide: true, placeholder: 'Motivo da consulta, queixas, evolução, adesão ao tratamento.' },
          { key: 'o', label: 'O — Objetivo', kind: 'textarea', rows: 5, wide: true, placeholder: 'Sinais vitais, exame físico, resultados de exames.' },
          { key: 'a', label: 'A — Avaliação', kind: 'textarea', rows: 4, wide: true, placeholder: 'Problemas avaliados e raciocínio clínico.' },
          { key: 'ciap', label: 'CIAP-2 / CID-10', kind: 'text', wide: true, placeholder: 'ex.: K86 – Hipertensão sem complicações' },
          { key: 'p', label: 'P — Plano', kind: 'textarea', rows: 5, wide: true, placeholder: 'Conduta, prescrição, exames solicitados, orientações, retorno.' },
          { key: 'aprendizado', label: 'Pontos para estudar', kind: 'textarea', rows: 3, wide: true },
        ],
      },
    ],
  },
  portfolio: {
    kind: 'portfolio',
    label: 'Portfólio reflexivo',
    short: 'Portfólio',
    description: 'Uma ficha por atividade, no modelo do portfólio do IESC. Selecione as que quiser e envie juntas.',
    hasPatient: false,
    sections: [
      {
        title: 'Cabeçalho',
        fields: [
          { key: 'disciplina', label: 'Disciplina', kind: 'text', placeholder: 'ex.: IESC' },
          { key: 'grupo', label: 'Grupo', kind: 'text', placeholder: 'ex.: Grupo A' },
          { key: 'modulo', label: 'Módulo', kind: 'text', placeholder: 'ex.: M13' },
        ],
      },
      {
        title: 'Atividade',
        fields: [
          { key: 'local', label: 'Local', kind: 'text', placeholder: 'ex.: UBS Bonsucesso' },
          { key: 'data', label: 'Data', kind: 'date' },
          { key: 'professor', label: 'Professor(a)', kind: 'text', placeholder: 'ex.: Prof. Welder' },
          { key: 'horario', label: 'Horário', kind: 'text', placeholder: 'ex.: 14h–17h' },
          { key: 'descricao', label: 'Descrição da atividade', kind: 'textarea', rows: 6, wide: true, hint: 'O que foi feito, com quem e onde. Sem nomes de pacientes.' },
        ],
      },
      {
        title: 'Área livre',
        fields: [
          { key: 'areaLivre', label: 'Área livre (colagens, desenhos, charges, poemas, músicas, fotos etc.)', kind: 'textarea', rows: 4, wide: true, hint: 'Escreva aqui e, se quiser, adicione imagens abaixo.' },
        ],
      },
      {
        title: 'Reflexão',
        fields: [
          { key: 'reflexao', label: 'Reflexão sobre a atividade', kind: 'textarea', rows: 7, wide: true, hint: 'O que você sentiu, o que aprendeu, o que faria diferente.' },
          { key: 'referencias', label: 'Referências bibliográficas / Assuntos a pesquisar', kind: 'textarea', rows: 3, wide: true },
        ],
      },
    ],
  },
};

/* ---------- Exames físicos segmentares (adicionados conforme a queixa) ---------- */

export const EXAMES: { id: string; label: string; tip: string }[] = [
  { id: 'cabeca', label: 'Cabeça e pescoço', tip: 'Inspeção, oroscopia, otoscopia, tireoide, linfonodos cervicais e jugulares.' },
  { id: 'cardio', label: 'Cardiovascular', tip: 'Ictus (inspeção e palpação), ausculta nos focos: ritmo, bulhas, sopros (fase, foco, intensidade, irradiação). Pulsos, perfusão e edema.' },
  { id: 'resp', label: 'Respiratório', tip: 'Inspeção (padrão, uso de musculatura acessória), expansibilidade, frêmito toracovocal, percussão e ausculta (MV e ruídos adventícios).' },
  { id: 'abdome', label: 'Abdominal', tip: 'Inspeção → ausculta → percussão → palpação. RHA, visceromegalias, massas, sinais de irritação peritoneal (Blumberg), Murphy, Giordano.' },
  { id: 'neuro', label: 'Neurológico', tip: 'Consciência (Glasgow), pares cranianos, força (0–5), tônus, reflexos, sensibilidade, coordenação, marcha e sinais meníngeos.' },
  { id: 'osteo', label: 'Osteoarticular', tip: 'Inspeção, palpação, mobilidade ativa e passiva, força e testes especiais da articulação acometida.' },
  { id: 'pele', label: 'Pele e fâneros', tip: 'Lesões elementares: tipo, cor, tamanho, distribuição e evolução. Unhas e cabelos.' },
  { id: 'vascular', label: 'Vascular periférico', tip: 'Pulsos, perfusão, varizes, edema (cacifo), sinais de TVP. No diabético: pé (monofilamento, sensibilidade, pulsos).' },
  { id: 'mamas', label: 'Mamas', tip: 'Inspeção estática e dinâmica, palpação, expressão papilar, axilas e fossas supraclaviculares.' },
  { id: 'gineco', label: 'Ginecológico', tip: 'Inspeção da vulva, exame especular (colo e conteúdo vaginal), toque bimanual. Coleta do citopatológico quando indicado.' },
  { id: 'obstetrico', label: 'Obstétrico', tip: 'Altura uterina, BCF, manobras de Leopold, movimentação fetal, edema e toque quando indicado.' },
  { id: 'urologico', label: 'Genital masculino / urológico', tip: 'Inspeção, palpação testicular, pesquisa de hérnias e toque retal quando indicado.' },
  { id: 'crianca', label: 'Crescimento e desenvolvimento', tip: 'Peso, estatura e perímetro cefálico nas curvas, fontanelas e marcos do desenvolvimento para a idade.' },
  { id: 'mental', label: 'Exame do estado mental', tip: 'Aparência, consciência, orientação, atenção, memória, humor e afeto, pensamento, sensopercepção e juízo crítico.' },
];

/** Exames segmentares que o aluno adicionou neste documento, como campos. */
export function examFields(data: Record<string, string>): Field[] {
  let ids: string[] = [];
  try {
    ids = JSON.parse(data.exames || '[]');
  } catch {
    ids = [];
  }
  return ids
    .map((id) => EXAMES.find((e) => e.id === id))
    .filter((e): e is (typeof EXAMES)[number] => !!e)
    .map((e) => ({ key: `ef_${e.id}`, label: e.label, kind: 'textarea' as const, rows: 4, wide: true, tip: e.tip }));
}

/** Campos de uma seção, incluindo os exames adicionados. */
export const sectionFields = (s: Section, data: Record<string, string>) => (s.addExams ? [...s.fields, ...examFields(data)] : s.fields);

export const TOOL_ORDER: ToolKind[] = ['anamnese', 'soap', 'portfolio'];

export const TEMAS_SUGERIDOS = [
  'hipertensão',
  'diabetes',
  'pré-natal',
  'puericultura',
  'saúde mental',
  'saúde do idoso',
  'saúde da mulher',
  'doenças respiratórias',
  'infecções',
  'saúde do trabalhador',
];

/* ---------- Nome → iniciais (roda só no navegador) ---------- */

const CONECTIVOS = new Set(['da', 'de', 'do', 'das', 'dos', 'e', 'di', 'du', "d'"]);

/** "Maria Aparecida da Silva" → "M.A.S." — conectivos (da, de, dos…) são ignorados. */
export function toInitials(fullName: string): string {
  return fullName
    .trim()
    .split(/\s+/)
    .filter((w) => w && !CONECTIVOS.has(w.toLowerCase()))
    .map((w) => w[0].toLocaleUpperCase('pt-BR') + '.')
    .join('');
}

/* ---------- Checagem de dados identificáveis antes de salvar ---------- */

export interface PrivacyHit {
  field: string;
  reason: string;
  excerpt: string;
}

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const PATTERNS: { re: RegExp; reason: string }[] = [
  { re: /\b\d{3}\.?\d{3}\.?\d{3}-?\d{2}\b/g, reason: 'parece um CPF' },
  { re: /\b\d{3}\s?\d{4}\s?\d{4}\s?\d{4}\b/g, reason: 'parece um número de Cartão SUS' },
  { re: /\(?\b\d{2}\)?\s?9?\d{4}-?\d{4}\b/g, reason: 'parece um telefone' },
  { re: /\b(?:Sr\.?|Sra\.?|Dona|Seu|D\.)\s+[A-ZÁÂÃÉÊÍÓÔÕÚÇ][a-záâãéêíóôõúç]+/g, reason: 'parece um nome próprio' },
  { re: /\b(?:Rua|Avenida|Av\.|Travessa|Alameda)\s+[A-ZÁÂÃÉÊÍÓÔÕÚÇ0-9]/g, reason: 'parece um endereço' },
];

/**
 * Procura nos campos de texto livre o nome digitado (ou partes dele), CPF, Cartão SUS,
 * telefone, endereço e tratamentos seguidos de nome ("Dona Maria").
 */
export function findIdentifiers(
  data: Record<string, string>,
  labels: Record<string, string>,
  typedName: string,
): PrivacyHit[] {
  const hits: PrivacyHit[] = [];
  const nameParts = typedName
    .trim()
    .split(/\s+/)
    .filter((w) => w.length >= 3 && !CONECTIVOS.has(w.toLowerCase()));

  for (const [key, value] of Object.entries(data)) {
    if (!value || key === 'iniciais' || key === 'imagens' || key === 'data' || key === 'exames') continue;
    const label = labels[key] ?? key;

    for (const part of nameParts) {
      const m = value.match(new RegExp(`(^|[^\\p{L}])(${escapeRe(part)})(?![\\p{L}])`, 'iu'));
      if (m) hits.push({ field: label, reason: 'contém parte do nome do paciente', excerpt: m[2] });
    }
    for (const { re, reason } of PATTERNS) {
      re.lastIndex = 0;
      const m = re.exec(value);
      if (m) hits.push({ field: label, reason, excerpt: m[0] });
    }
  }
  return hits;
}

/** "2026-08-06" → "06/08/2026" (outros valores passam como estão). */
export function fmtDateBR(v: string): string {
  const m = v.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  return m ? `${m[3]}/${m[2]}/${m[1]}` : v;
}

/** Valor de um campo pronto para exibir. */
export const showValue = (f: Field, v: string) => (f.kind === 'date' ? fmtDateBR(v) : v);
