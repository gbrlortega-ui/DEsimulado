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
}

export interface Section {
  title: string;
  fields: Field[];
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
    description: 'Anamnese completa de atenção primária, com contexto familiar e social.',
    hasPatient: true,
    sections: [
      {
        title: 'História clínica',
        fields: [
          { key: 'qp', label: 'Queixa principal (QP)', kind: 'textarea', rows: 2, wide: true, placeholder: 'Nas palavras do paciente e com a duração.' },
          { key: 'hda', label: 'História da doença atual (HDA)', kind: 'textarea', rows: 6, wide: true },
          { key: 'isda', label: 'Interrogatório sobre os diversos aparelhos (ISDA)', kind: 'textarea', rows: 4, wide: true },
        ],
      },
      {
        title: 'Antecedentes',
        fields: [
          { key: 'app', label: 'Antecedentes pessoais', kind: 'textarea', rows: 4, wide: true, placeholder: 'Doenças crônicas, internações, cirurgias, alergias, vacinação, gestações…' },
          { key: 'medicacoes', label: 'Medicações em uso', kind: 'textarea', rows: 3, wide: true, placeholder: 'Nome, dose e posologia.' },
          { key: 'af', label: 'Antecedentes familiares', kind: 'textarea', rows: 3, wide: true, placeholder: 'Use parentesco, nunca nomes: "mãe – DM2", "irmão – IAM aos 50".' },
        ],
      },
      {
        title: 'Contexto de vida',
        fields: [
          { key: 'habitos', label: 'Hábitos de vida', kind: 'textarea', rows: 3, wide: true, placeholder: 'Alimentação, atividade física, tabagismo (anos-maço), álcool, outras substâncias, sono.' },
          { key: 'familia', label: 'Composição familiar', kind: 'textarea', rows: 3, wide: true, placeholder: 'Só papéis e idades: "esposa, 55; neto, 8". Base para o genograma.' },
          { key: 'socioeconomico', label: 'Condições socioeconômicas e de moradia', kind: 'textarea', rows: 3, wide: true, placeholder: 'Renda aproximada, saneamento, nº de cômodos, rede de apoio, acesso à UBS.' },
        ],
      },
      {
        title: 'Exame e raciocínio',
        fields: [
          { key: 'exameFisico', label: 'Exame físico', kind: 'textarea', rows: 6, wide: true, placeholder: 'Sinais vitais, antropometria, exame geral e segmentar.' },
          { key: 'problemas', label: 'Lista de problemas / hipóteses diagnósticas', kind: 'textarea', rows: 3, wide: true },
          { key: 'conduta', label: 'Conduta', kind: 'textarea', rows: 4, wide: true },
          { key: 'aprendizado', label: 'Pontos para estudar', kind: 'textarea', rows: 3, wide: true, placeholder: 'O que este caso mostrou que você precisa revisar.' },
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
    if (!value || key === 'iniciais' || key === 'imagens' || key === 'data') continue;
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
