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
  kind: 'text' | 'textarea' | 'select' | 'number';
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
    description: 'Reflexão guiada pelo ciclo de Gibbs sobre uma vivência da prática.',
    hasPatient: false,
    sections: [
      {
        title: 'Contexto',
        fields: [
          { key: 'cenario', label: 'Cenário de prática', kind: 'text', placeholder: 'ex.: UBS – visita domiciliar com ACS' },
          { key: 'dataVivencia', label: 'Data da vivência', kind: 'text', placeholder: 'dd/mm/aaaa' },
        ],
      },
      {
        title: 'Ciclo reflexivo de Gibbs',
        fields: [
          { key: 'descricao', label: '1. Descrição', kind: 'textarea', rows: 5, wide: true, hint: 'O que aconteceu? Quem estava envolvido (sem nomes)?' },
          { key: 'sentimentos', label: '2. Sentimentos', kind: 'textarea', rows: 4, wide: true, hint: 'O que você sentiu e pensou durante a situação?' },
          { key: 'avaliacao', label: '3. Avaliação', kind: 'textarea', rows: 4, wide: true, hint: 'O que foi bom e o que foi ruim na experiência?' },
          { key: 'analise', label: '4. Análise', kind: 'textarea', rows: 5, wide: true, hint: 'Por que aconteceu assim? Relacione com a literatura e as políticas de saúde.' },
          { key: 'conclusao', label: '5. Conclusão', kind: 'textarea', rows: 4, wide: true, hint: 'O que você aprendeu? O que poderia ter feito diferente?' },
          { key: 'plano', label: '6. Plano de ação', kind: 'textarea', rows: 4, wide: true, hint: 'O que fará da próxima vez numa situação parecida?' },
          { key: 'referencias', label: 'Referências', kind: 'textarea', rows: 3, wide: true },
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
    if (!value || key === 'iniciais') continue;
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
