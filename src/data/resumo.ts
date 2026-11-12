// Arquivo gerado por `npm run gen` a partir do banco de questões. Não editar à mão.
// O build e o servidor local regeneram este arquivo sozinhos; o `npm run validate` acusa se ficar desatualizado.
import type { Question } from '../types';

export const TOTAL_QUESTIONS = 1579;

export const COUNT_BY_AREA: Record<string, number> = {
  "Pediatria": 282,
  "Clínica Médica": 318,
  "Cirurgia": 268,
  "Ginecologia e Obstetrícia": 278,
  "Saúde Coletiva": 273,
  "Ciências Básicas": 160
};

export interface ExamEdition {
  label: string; // "TP 2024", "ENAMED 2026", "UNIFESP 2025"
  kind: 'TP' | 'ENAMED' | 'Residência';
  year: number;
  count: number;
}

/** Provas presentes no banco, em ordem cronológica (TP, depois ENAMED, depois residência). */
export const EDITIONS: ExamEdition[] = [
  {
    "label": "TP 2019",
    "kind": "TP",
    "year": 2019,
    "count": 120
  },
  {
    "label": "TP 2020",
    "kind": "TP",
    "year": 2020,
    "count": 120
  },
  {
    "label": "TP 2021",
    "kind": "TP",
    "year": 2021,
    "count": 120
  },
  {
    "label": "TP 2022",
    "kind": "TP",
    "year": 2022,
    "count": 120
  },
  {
    "label": "TP 2023",
    "kind": "TP",
    "year": 2023,
    "count": 120
  },
  {
    "label": "TP 2024",
    "kind": "TP",
    "year": 2024,
    "count": 120
  },
  {
    "label": "TP 2025",
    "kind": "TP",
    "year": 2025,
    "count": 120
  },
  {
    "label": "TP 2026",
    "kind": "TP",
    "year": 2026,
    "count": 120
  },
  {
    "label": "ENAMED 2025",
    "kind": "ENAMED",
    "year": 2025,
    "count": 100
  },
  {
    "label": "ENAMED 2026",
    "kind": "ENAMED",
    "year": 2026,
    "count": 100
  },
  {
    "label": "SUS-BA 2025",
    "kind": "Residência",
    "year": 2025,
    "count": 45
  },
  {
    "label": "UNIFESP 2025",
    "kind": "Residência",
    "year": 2025,
    "count": 99
  },
  {
    "label": "USP-RP 2025",
    "kind": "Residência",
    "year": 2025,
    "count": 100
  },
  {
    "label": "SCM-BH 2026",
    "kind": "Residência",
    "year": 2026,
    "count": 75
  },
  {
    "label": "HOS-BOS 2027",
    "kind": "Residência",
    "year": 2027,
    "count": 100
  }
];

export interface ExamSource {
  key: string; // sigla usada no filtro: "TP", "ENAMED", "UNIFESP"
  label: string; // "Teste de Progresso", "ENAMED", "UNIFESP"
  kind: 'TP' | 'ENAMED' | 'Residência';
  years: string; // "2019–2026" ou "2025"
  count: number;
}

/** Origens da prova disponíveis no filtro do simulado. */
export const SOURCES: ExamSource[] = [
  {
    "key": "TP",
    "label": "Teste de Progresso",
    "kind": "TP",
    "years": "2019–2026",
    "count": 960
  },
  {
    "key": "ENAMED",
    "label": "ENAMED",
    "kind": "ENAMED",
    "years": "2025–2026",
    "count": 200
  },
  {
    "key": "SUS-BA",
    "label": "SUS-BA",
    "kind": "Residência",
    "years": "2025",
    "count": 45
  },
  {
    "key": "UNIFESP",
    "label": "UNIFESP",
    "kind": "Residência",
    "years": "2025",
    "count": 99
  },
  {
    "key": "USP-RP",
    "label": "USP-RP",
    "kind": "Residência",
    "years": "2025",
    "count": 100
  },
  {
    "key": "SCM-BH",
    "label": "SCM-BH",
    "kind": "Residência",
    "years": "2026",
    "count": 75
  },
  {
    "key": "HOS-BOS",
    "label": "HOS-BOS",
    "kind": "Residência",
    "years": "2027",
    "count": 100
  }
];

/** Questões por área e origem, na chave "Pediatria|ENAMED". */
export const COUNT_BY_AREA_SOURCE: Record<string, number> = {
  "Pediatria|TP": 160,
  "Clínica Médica|TP": 160,
  "Cirurgia|TP": 160,
  "Ginecologia e Obstetrícia|TP": 160,
  "Saúde Coletiva|TP": 160,
  "Ciências Básicas|TP": 160,
  "Clínica Médica|ENAMED": 60,
  "Pediatria|ENAMED": 39,
  "Cirurgia|ENAMED": 25,
  "Ginecologia e Obstetrícia|ENAMED": 33,
  "Saúde Coletiva|ENAMED": 43,
  "Cirurgia|UNIFESP": 19,
  "Saúde Coletiva|UNIFESP": 18,
  "Clínica Médica|UNIFESP": 26,
  "Ginecologia e Obstetrícia|UNIFESP": 17,
  "Pediatria|UNIFESP": 19,
  "Cirurgia|HOS-BOS": 20,
  "Clínica Médica|HOS-BOS": 20,
  "Ginecologia e Obstetrícia|HOS-BOS": 20,
  "Pediatria|HOS-BOS": 20,
  "Saúde Coletiva|HOS-BOS": 20,
  "Pediatria|USP-RP": 21,
  "Saúde Coletiva|USP-RP": 13,
  "Clínica Médica|USP-RP": 25,
  "Ginecologia e Obstetrícia|USP-RP": 21,
  "Cirurgia|USP-RP": 20,
  "Cirurgia|SCM-BH": 15,
  "Clínica Médica|SCM-BH": 15,
  "Ginecologia e Obstetrícia|SCM-BH": 15,
  "Saúde Coletiva|SCM-BH": 15,
  "Pediatria|SCM-BH": 15,
  "Clínica Médica|SUS-BA": 12,
  "Cirurgia|SUS-BA": 9,
  "Ginecologia e Obstetrícia|SUS-BA": 12,
  "Pediatria|SUS-BA": 8,
  "Saúde Coletiva|SUS-BA": 4
};

/** Questões por especialidade ou região da topografia ("1.1", "8"). */
export const TOPOGRAPHY_COUNT: Record<string, number> = {
  "8": 51,
  "9": 42,
  "10": 71,
  "11": 158,
  "12": 12,
  "13": 38,
  "14": 59,
  "15": 248,
  "16": 103,
  "1.2": 10,
  "1.3": 19,
  "7.2": 30,
  "4.2": 21,
  "1.1": 54,
  "1.5": 22,
  "6.1": 32,
  "3.1": 50,
  "4.1": 56,
  "2.1": 60,
  "6.2": 18,
  "2.2": 64,
  "3.2": 16,
  "3.3": 12,
  "7.1": 19,
  "1.4": 2,
  "3.4": 10,
  "5.1": 123,
  "5.2": 143
};

/** Questões por assunto, na chave "1.1|Cefaleias". */
export const TOPIC_COUNT: Record<string, number> = {
  "11|Puericultura": 14,
  "1.2|Catarata": 4,
  "11|Icterícia neonatal": 6,
  "11|Obesidade infantil": 4,
  "1.3|Amigdalite/faringoamigdalite": 10,
  "7.2|Urticária": 1,
  "1.2|Uveíte": 2,
  "4.2|Estenose de uretra": 2,
  "11|Calendário vacinal": 8,
  "1.1|TCE": 10,
  "11|Maus-tratos infantis": 11,
  "11|Prematuridade": 2,
  "11|Anemia ferropriva": 9,
  "9|Trombocitopenias": 4,
  "11|Aleitamento materno": 13,
  "1.5|Hipotireoidismo": 6,
  "11|Síndrome do desconforto respiratório neonatal": 6,
  "14|Emergências pediátricas": 9,
  "6.1|Artrite reumatoide": 6,
  "9|Talassemias": 1,
  "11|ITU pediátrica": 6,
  "11|Diarreia aguda": 7,
  "14|Trauma": 15,
  "11|Cardiopatias congênitas": 16,
  "3.1|Constipação intestinal": 4,
  "10|Raiva": 4,
  "1.1|Cefaleias": 6,
  "1.3|Surdez": 2,
  "11|Desenvolvimento neuropsicomotor": 13,
  "9|Anemia falciforme": 7,
  "11|Asma infantil": 12,
  "11|Doença de Kawasaki": 1,
  "1.5|Hipertireoidismo": 9,
  "11|Desidratação": 6,
  "11|Sepse neonatal": 6,
  "9|Leucemias": 6,
  "1.3|Otite média aguda": 2,
  "11|Convulsão febril": 5,
  "11|Pneumonia infantil": 3,
  "11|Refluxo gastroesofágico": 2,
  "11|Bronquiolite": 5,
  "11|Desnutrição": 2,
  "10|Sífilis": 11,
  "4.1|Síndrome nefrítica": 1,
  "2.1|Bronquiectasias": 1,
  "8|Insuficiência adrenal": 6,
  "6.2|Escoliose": 2,
  "14|Intoxicações": 10,
  "15|Ética médica": 10,
  "4.1|Síndrome nefrótica": 4,
  "1.3|Laringite": 3,
  "7.2|Dermatite atópica": 4,
  "14|Sepse e choque séptico": 5,
  "8|Síndrome de Cushing": 3,
  "4.2|Torção testicular": 5,
  "2.2|Arritmias": 5,
  "9|Anemias": 1,
  "10|Tétano": 1,
  "8|Feocromocitoma": 2,
  "9|Linfomas": 2,
  "8|Cetoacidose diabética": 11,
  "3.1|Diarreia crônica": 3,
  "1.2|Erros refrativos": 1,
  "10|Dengue": 12,
  "4.1|Distúrbios hidroeletrolíticos": 8,
  "4.1|Lesão renal aguda": 9,
  "8|Diabetes mellitus tipo 1 e 2": 19,
  "1.1|Demências": 5,
  "6.1|Lúpus eritematoso sistêmico": 6,
  "1.1|Epilepsia": 5,
  "10|Tuberculose": 15,
  "2.1|DPOC": 12,
  "9|Anemia ferropriva": 5,
  "3.2|Hepatites virais": 5,
  "2.2|Dislipidemia": 4,
  "2.2|Insuficiência cardíaca": 11,
  "2.2|Hipertensão arterial sistêmica": 14,
  "4.1|Cistite": 6,
  "13|Dependência química": 5,
  "3.1|DRGE": 7,
  "2.1|Asma": 8,
  "2.1|Pneumonia comunitária": 12,
  "13|Abstinência alcoólica": 4,
  "6.1|Osteoartrose": 2,
  "2.1|Tuberculose pulmonar": 1,
  "7.2|Herpes-zóster": 2,
  "1.1|AVC": 13,
  "7.2|Erisipela": 2,
  "7.2|Melanoma": 2,
  "4.1|Nefrolitíase": 8,
  "2.2|Valvopatias": 3,
  "6.1|Fibromialgia": 3,
  "2.2|Infarto agudo do miocárdio": 6,
  "2.1|Embolia pulmonar": 3,
  "2.1|Câncer de pulmão": 5,
  "4.1|Pielonefrite": 4,
  "4.1|Doença renal crônica": 7,
  "3.1|Doença inflamatória intestinal": 10,
  "3.1|Doença celíaca": 1,
  "3.2|Cirrose hepática": 2,
  "1.1|Meningite": 8,
  "1.1|Parkinson": 3,
  "9|Anemia hemolítica": 2,
  "3.2|Encefalopatia hepática": 1,
  "13|Esquizofrenia": 5,
  "6.1|Gota": 3,
  "7.2|Hanseníase": 6,
  "7.2|Escabiose": 4,
  "2.2|Síndrome coronariana aguda": 9,
  "4.1|Glomerulonefrite": 1,
  "10|HIV/AIDS": 7,
  "12|Delirium": 3,
  "3.1|Gastrite": 1,
  "9|Síndrome de lise tumoral": 1,
  "2.1|Insuficiência respiratória": 1,
  "10|Sepse": 4,
  "6.1|Osteoporose": 5,
  "7.2|Carcinoma basocelular": 2,
  "9|Anemia megaloblástica": 8,
  "2.1|Derrame pleural": 12,
  "13|Transtornos de ansiedade": 4,
  "1.5|Tempestade tireotóxica": 1,
  "12|Demências": 1,
  "13|Depressão maior": 5,
  "8|Hiperaldosteronismo primário": 3,
  "16|Feridas": 13,
  "16|Pré-operatório": 14,
  "16|Hérnias": 11,
  "3.3|Colangite aguda": 4,
  "3.1|Hemorragia digestiva baixa": 2,
  "7.1|Doença arterial periférica": 5,
  "6.2|Fraturas": 5,
  "1.1|Hipertensão intracraniana": 3,
  "14|Queimaduras": 6,
  "1.3|Câncer de cabeça e pescoço": 1,
  "1.2|Ceratite": 3,
  "14|Choque": 4,
  "16|Trauma abdominal": 10,
  "6.2|Hérnia de disco": 2,
  "16|Obstrução intestinal": 14,
  "7.1|Trombose venosa profunda": 6,
  "4.2|Câncer de próstata": 5,
  "3.1|Hemorragia digestiva alta": 7,
  "3.1|Doença hemorroidária": 4,
  "7.1|Aneurisma de aorta abdominal": 4,
  "3.2|Hepatocarcinoma": 2,
  "10|Doença de Chagas": 3,
  "1.4|Doença periodontal": 1,
  "3.3|Colecistite aguda": 2,
  "16|Trauma torácico": 14,
  "16|Apendicite aguda": 2,
  "16|Perfuração de víscera oca": 5,
  "3.3|Colangiocarcinoma": 2,
  "3.4|Pancreatite aguda": 5,
  "3.1|Câncer colorretal": 4,
  "8|Obesidade": 4,
  "7.1|Isquemia arterial aguda": 1,
  "7.2|Celulite": 2,
  "16|Pós-operatório": 13,
  "7.1|Insuficiência venosa crônica": 2,
  "6.2|Lesões do manguito rotador": 1,
  "16|Isquemia mesentérica": 4,
  "1.5|Nódulos tireoidianos": 2,
  "16|Abdome agudo": 3,
  "6.2|Lombalgia": 2,
  "7.2|Carcinoma espinocelular": 1,
  "6.2|Luxações": 1,
  "3.3|Colelitíase": 2,
  "5.1|Sangramento uterino anormal": 12,
  "5.1|Climatério e menopausa": 15,
  "5.1|Contracepção": 21,
  "5.1|Câncer de colo uterino": 19,
  "5.1|Vaginose bacteriana": 3,
  "5.2|Diabetes gestacional": 13,
  "5.2|Assistência ao parto": 5,
  "5.2|Puerpério": 11,
  "5.2|Infecções na gestação": 19,
  "5.2|Rotura prematura de membranas": 5,
  "15|Rastreamento": 15,
  "5.1|Câncer de endométrio": 3,
  "5.2|Gravidez ectópica": 6,
  "5.2|Diagnóstico de gravidez": 1,
  "5.2|Pré-natal": 18,
  "5.2|Hemorragia pós-parto": 5,
  "5.2|Trabalho de parto": 18,
  "5.1|Mioma uterino": 8,
  "5.1|Endometriose": 7,
  "5.1|Infertilidade": 8,
  "5.1|Prolapso genital": 4,
  "5.1|Câncer de ovário": 6,
  "15|Saúde da mulher": 8,
  "5.2|Pré-eclâmpsia": 12,
  "5.2|Abortamento": 12,
  "5.1|Síndrome dos ovários policísticos": 3,
  "5.1|Doença inflamatória pélvica": 4,
  "5.1|Candidíase vaginal": 3,
  "5.2|Eclâmpsia": 1,
  "5.2|Descolamento prematuro de placenta": 8,
  "5.2|Isoimunização Rh": 2,
  "5.1|Tricomoníase": 2,
  "5.2|Síndrome HELLP": 1,
  "5.1|Planejamento reprodutivo": 4,
  "8|Prolactinoma": 2,
  "10|Infecções sexualmente transmissíveis": 5,
  "15|Bioética": 3,
  "5.2|Idade gestacional": 3,
  "4.2|Incontinência urinária": 5,
  "5.2|Placenta prévia": 1,
  "15|Atenção Primária": 49,
  "15|Saúde do idoso": 3,
  "15|SUS": 37,
  "12|Polifarmácia": 2,
  "15|Imunização": 13,
  "15|Saúde do trabalhador": 15,
  "15|Estudos epidemiológicos": 16,
  "15|Epidemiologia": 35,
  "15|Vigilância epidemiológica": 22,
  "15|Testes diagnósticos": 11,
  "15|Estratégia Saúde da Família": 6,
  "12|Quedas": 3,
  "13|Risco de suicídio": 6,
  "13|Transtorno bipolar": 3,
  "10|Infecções relacionadas à assistência": 3,
  "15|Saúde da criança": 3,
  "2.2|Doença arterial coronariana crônica": 3,
  "3.2|Hipertensão portal": 2,
  "3.2|Icterícia": 1,
  "2.2|Febre reumática": 3,
  "4.1|Distúrbios ácido-base": 7,
  "14|Anafilaxia": 4,
  "10|Malária": 3,
  "9|Coagulopatias": 4,
  "4.2|Hiperplasia prostática benigna": 1,
  "2.1|Fibrose pulmonar": 2,
  "6.1|Artrite séptica": 2,
  "15|Bioestatística": 2,
  "3.2|Ascite": 1,
  "14|Crise hipertensiva": 1,
  "7.2|Dermatite de contato": 1,
  "1.1|Esclerose múltipla": 1,
  "3.1|Úlcera péptica": 2,
  "9|Neutropenia febril": 1,
  "13|Transtornos alimentares": 4,
  "4.2|Fimose": 1,
  "3.4|Câncer de pâncreas": 2,
  "3.4|Pancreatite crônica": 3,
  "3.1|Diverticulose/diverticulite": 4,
  "6.1|Espondilite anquilosante": 2,
  "3.2|Colestase": 1,
  "1.5|Tireoidites": 1,
  "13|TOC": 1,
  "3.1|Fissura anal": 1,
  "6.1|Vasculites": 2,
  "3.3|Coledocolitíase": 2,
  "14|Emergências obstétricas": 3,
  "13|Transtornos de personalidade": 1,
  "2.2|Fibrilação atrial": 2,
  "6.2|Síndrome da cauda equina": 1,
  "7.2|Impetigo": 2,
  "3.2|Peritonite bacteriana espontânea": 1,
  "7.1|Dissecção de aorta": 1,
  "4.2|Câncer de bexiga": 1,
  "4.2|Retenção urinária": 1,
  "1.3|Vertigem": 1,
  "6.2|Lesão do ligamento cruzado anterior": 1,
  "8|Distúrbios do cálcio": 1,
  "14|Parada cardiorrespiratória": 2,
  "4.1|Nefropatia diabética": 1,
  "2.2|Choque cardiogênico": 1,
  "12|Cuidados paliativos": 3,
  "10|Toxoplasmose": 1,
  "1.5|Câncer de tireoide": 2,
  "2.2|Endocardite infecciosa": 3,
  "2.1|Tabagismo": 2,
  "11|Púrpura de Henoch-Schönlein": 1,
  "5.2|Restrição de crescimento fetal": 2,
  "5.1|Adenomiose": 1,
  "7.2|Pênfigo e penfigoide": 1,
  "1.4|Câncer de boca": 1,
  "2.1|Pneumonia hospitalar": 1,
  "1.5|Hiperparatireoidismo": 1,
  "6.1|Esclerose sistêmica": 1,
  "10|Meningococcemia": 1,
  "6.2|Pé diabético": 3,
  "10|Chikungunya": 1
};

export interface SuggestedExamInfo {
  id: string;
  title: string;
  description: string;
  /** Aviso mostrado antes de começar e na primeira questão. */
  warning: string;
  count: number;
}

/** Simulados sugeridos, sem as questões (elas carregam junto com o banco). */
export const SUGERIDOS_INFO: SuggestedExamInfo[] = [
  {
    "id": "sugerido-enamed-1",
    "title": "ENAMED 1",
    "description": "Questões no formato do ENAMED, de todas as áreas, sempre na mesma ordem.",
    "warning": "O gabarito deste simulado é técnico, não oficial: nenhuma banca publicou respostas para estas questões. As questões com gabarito provisório têm um aviso no comentário.",
    "count": 100
  }
];

/** Amostra para a questão de exemplo da página inicial. */
export const SAMPLE_QUESTIONS: Question[] = [
  {
    "id": "tp2024-42",
    "topography": "11",
    "topic": "Puericultura",
    "module": "Pediatria",
    "text": "Menina com 1 ano e 6 meses de idade apresenta desenvolvimento de pilificação em região genital há 2 meses, associado a acne e odor axilar. Ao exame físico, há pelos grossos escuros e encaracolados em região de grandes lábios e pube, além de hipertrofia de clítoris; não há tecido mamário palpável. Qual o melhor exame a ser solicitado para a principal hipótese dessa paciente?",
    "options": [
      "(A) LH e FSH",
      "(B) Tomografia da glândula adrenal",
      "(C) Ultrassom pélvico",
      "(D) Idade óssea"
    ],
    "correctAnswer": 1,
    "explanation": "Pelos pubianos grossos, acne, odor axilar e aumento do clitóris em uma menina de 1 ano e meio, sem mamas, indicam excesso de andrógenos (virilização), e não puberdade verdadeira: se o eixo hipotálamo-hipófise-gônadas estivesse ativado, haveria telarca.\n\nA instalação rápida (2 meses) e a virilização intensa nessa idade levantam a suspeita de tumor adrenal produtor de andrógenos (carcinoma adrenocortical é o principal). Por isso o exame que investiga a principal hipótese é a imagem da adrenal, como a tomografia.",
    "commentary": "LH e FSH (A): servem para avaliar puberdade precoce central, que começa com telarca nas meninas — aqui não há tecido mamário.\n\nUltrassom pélvico (C): procura tumor ovariano ou sinais de estímulo estrogênico no útero e ovários; não é o exame da hipótese principal, que é adrenal.\n\nIdade óssea (D): mostra o quanto os andrógenos aceleraram a maturação e ajuda no prognóstico de altura, mas não identifica a causa.",
    "tip": "Virilização rápida sem mamas na lactente: pense em tumor de adrenal e peça imagem da adrenal.",
    "reference": "Tratado de pediatria / organização Sociedade Brasileira de Pediatria. - 5. ed. - Barueri [SP]: Manole, 2022. Seção 16 endocrinologia. Endocrinologia pediátrica / Crésio de Aragão Dantas Alves. - 1. ed. - Barueri [SP]: Manole, 2019.",
    "tags": [
      "endocrinologia"
    ]
  },
  {
    "id": "tp2023-51",
    "topography": "1.2",
    "topic": "Catarata",
    "module": "Pediatria",
    "text": "O teste do reflexo vermelho ou “teste do olhinho” é um exame simples, rápido, indolor e de baixo custo realizado em recém-nascidos, e seu objetivo é a detecção precoce de problemas oculares congênitos que comprometem a transparência dos meios oculares e que podem impedir o desenvolvimento visual cortical. Tem como objetivo detectar algumas patologias oculares. Assinale a alternativa que apresenta estas patologias:",
    "options": [
      "(A) Inflamações intraoculares da retina e vítreo e telecanto.",
      "(B) Catarata congênita, glaucoma congênito, retinoblastoma.",
      "(C) Retinopatia da prematuridade no estágio 1 e retinose pigmentar.",
      "(D) Descolamento de retina, vascularização fetal persistente e telecanto."
    ],
    "correctAnswer": 1,
    "explanation": "O teste do reflexo vermelho (teste do olhinho) usa um oftalmoscópio para ver o reflexo da luz que volta do fundo do olho. Para que ele seja vermelho e simétrico, a córnea, o cristalino e o vítreo precisam estar transparentes. Qualquer coisa que bloqueie a passagem da luz faz o reflexo ficar ausente, opaco ou branco (leucocoria).\n\nAs doenças que ele ajuda a detectar cedo são a catarata congênita, o glaucoma congênito (que deixa a córnea turva) e o retinoblastoma, além de outras opacidades. A SBP recomenda fazer o teste antes da alta da maternidade e repetir algumas vezes nos primeiros anos de vida. Reflexo alterado ou duvidoso pede encaminhamento rápido ao oftalmologista.",
    "commentary": "Inflamações de retina e vítreo e telecanto (A): telecanto é aumento da distância entre os cantos internos dos olhos, uma característica da face, que não muda o reflexo vermelho.\n\nRetinopatia da prematuridade estágio 1 e retinose pigmentar (C): são alterações da retina que exigem mapeamento de retina com oftalmoscopia indireta; não opacificam os meios do olho no início.\n\nDescolamento de retina, vascularização fetal persistente e telecanto (D): as duas primeiras podem alterar o reflexo, mas a inclusão do telecanto, que não tem relação com o teste, torna a alternativa errada.",
    "tip": "Teste do olhinho alterado (leucocoria) = pensar em catarata congênita, glaucoma congênito e retinoblastoma.",
    "reference": "Grupo de trabalho em Oftalmologia Pediátrica (2019-2021). Sociedade Brasileira de Pediatria. Teste do reflexo vermelho – Atualização: 27 abril de 2022.",
    "tags": [
      "oftalmologia"
    ]
  },
  {
    "id": "tp2022-59",
    "topography": "11",
    "topic": "Icterícia neonatal",
    "module": "Pediatria",
    "text": "Recém-nascido a termo (3530g), tipagem O- (mãe) e B+ (filho), Coombs e Eluato negativos. Icterícia Zona 4 com 48h (BI 15.5). Diagnóstico:",
    "options": [
      "(A) Icterícia por isoimunização ABO.",
      "(B) Icterícia por deficiência de G6PD.",
      "(C) Icterícia fisiológica do RN.",
      "(D) Icterícia precoce por incompatibilidade."
    ],
    "correctAnswer": 2,
    "explanation": "Com Coombs e Eluato negativos, afasta-se isoimunização; BI elevada aos 2 dias sem precocidade extrema sugere fisiologia.",
    "commentary": "Como não há evidência laboratorial de hemólise imune (Coombs/Eluato neg), trata-se de icterícia fisiológica, comum após 24h de vida.",
    "reference": "Manual de Neonatologia Cloherty.",
    "tags": [
      "neonatologia"
    ]
  },
  {
    "id": "tp2019-45",
    "topography": "11",
    "topic": "Aleitamento materno",
    "module": "Pediatria",
    "text": "Recém-nascido (RN) nascido a termo, sem queixas e sem alterações ao exame físico.\n\nConsiderando-se que os exames pré-natais ao final da gestação apontaram infecção materna pelo vírus da imunodeficiência humana, a recomendação correta em relação à alimentação desse RN é:",
    "options": [
      "(A) Indicar aleitamento materno em regime de livre demanda.",
      "(B) Contraindicar a amamentação e prescrever fórmula láctea.",
      "(C) Indicar aleitamento materno com leite ordenhado após congelamento.",
      "(D) Contraindicar a amamentação e indicar aleitamento humano cruzado."
    ],
    "correctAnswer": 1,
    "explanation": "No Brasil, a infecção materna pelo HIV é contraindicação ao aleitamento materno, pelo risco de transmissão vertical. O recém-nascido deve receber fórmula láctea, fornecida pelo SUS, e a lactação da mãe deve ser inibida.",
    "commentary": "Leite ordenhado congelado não elimina o vírus. O aleitamento cruzado (por outra mulher) não é recomendado.",
    "reference": "Tratado de Pediatria – Sociedade Brasileira de Pediatria 4ª Edição / Ministério da Saúde. Protocolo clínico e diretrizes terapêuticas para manejo da infecção pelo HIV em crianças e adolescentes. Brasília, 2018.",
    "tags": [
      "pediatria",
      "aleitamento materno",
      "HIV"
    ]
  },
  {
    "id": "tp2023-28",
    "topography": "13",
    "topic": "Dependência química",
    "module": "Clínica Médica",
    "text": "JM está em situação de rua e na primeira vez em que experimentou cocaína teve uma sensação de intensa euforia, bem-estar, desinibição, perda de apetite e aumento da energia e libido; porém, com o uso prolongado da droga, passou a ter que usar cada vez mais a cocaína para obter esses mesmos efeitos. O nome que corresponde a esse efeito causado pelo consumo prolongado de drogas é:",
    "options": [
      "(A) Abuso",
      "(B) Abstinência",
      "(C) Tolerância",
      "(D) Overdose"
    ],
    "correctAnswer": 2,
    "explanation": "Precisar de doses cada vez maiores para obter o mesmo efeito, ou ter efeito menor com a mesma dose, é a definição de tolerância. Ela surge com o uso repetido, por adaptação do organismo à substância (mudanças nos receptores, na neurotransmissão e no metabolismo).\n\nA tolerância é um dos critérios do transtorno por uso de substâncias e costuma andar junto com a abstinência e a perda de controle sobre o consumo, por isso é peça central na evolução para a dependência.",
    "commentary": "Abuso (A): designa um padrão de uso que traz prejuízos (sociais, legais, de saúde), não a necessidade de aumentar a dose; o DSM-5 substituiu abuso e dependência por transtorno por uso de substâncias.\n\nAbstinência (B): são os sintomas que surgem ao parar ou reduzir o uso; na cocaína, disforia, cansaço, sonolência, aumento do apetite e fissura.\n\nOverdose (D): é a intoxicação grave por dose excessiva, com risco de arritmia, infarto, convulsão e hipertermia.",
    "tip": "Mais droga para o mesmo efeito = tolerância. Sintomas ao parar = abstinência.",
    "reference": "DIEHL, A.; CORDEIRO, D. C.; LARANJEIRA, R. (Orgs.). Dependência química: prevenção, tratamento e políticas públicas. 2. ed. Porto Alegre: Artmed, 2018. 554 p.",
    "tags": [
      "psiquiatria"
    ]
  },
  {
    "id": "tp2025-36",
    "topography": "1.1",
    "topic": "Meningite",
    "module": "Clínica Médica",
    "text": "Adolescente de 16 anos é levado ao pronto-socorro com febre alta, cefaleia intensa, rigidez de nuca e rebaixamento do nível de consciência. Apresenta ainda vômitos em jato e pressão arterial de 150/100mmHg. O exame de fundo de olho revela papiledema. A conduta inicial mais apropriada é:",
    "options": [
      "(A) Administrar corticoide isolado para reduzir a resposta inflamatória.",
      "(B) Coletar hemoculturas e aguardar o resultado antes de iniciar antibiótico.",
      "(C) Realizar punção lombar imediatamente para análise do líquido cefalorraquidiano.",
      "(D) Iniciar antibioticoterapia empírica e solicitar tomografia de crânio."
    ],
    "correctAnswer": 3,
    "explanation": "Os sinais de hipertensão intracraniana grave (papiledema, rebaixamento e vômitos) contraindicam formalmente a realização de punção lombar imediata por risco de herniação. Deve-se iniciar antibioterapia e solicitar tomografia.",
    "commentary": "Na meningite bacteriana presumível com sinais focais ou de hipertensão intracraniana (HIC), a punção lombar cega é proscrita sob alto risco de herniação. Coleta-se hemocultura e institui-se de modo imediato antibioticoterapia empírica concomitante a corticoide, procedendo após à neuroimagem craniana de controle.",
    "reference": "Medicina Interna de Harrison. 21ª ed. Porto Alegre: Artmed; 2023.",
    "tags": [
      "infectologia",
      "neurologia",
      "emergência"
    ]
  },
  {
    "id": "tp2026-29",
    "topography": "1.1",
    "topic": "Cefaleias",
    "module": "Clínica Médica",
    "text": "Mulher de 32 anos procura pronto atendimento por cefaleia hemicraniana pulsátil há 10 horas, associada a náuseas, fotofobia e piora com esforços habituais. Refere episódios semelhantes nos últimos dois anos, com melhora espontânea entre as crises, sem febre, déficit focal ou alteração do nível de consciência. Indique a investigação diagnóstica:",
    "options": [
      "(A) Realizar o diagnóstico clínico de enxaqueca.",
      "(B) Solicitar tomografia computadorizada de crânio.",
      "(C) Indicar punção lombar para afastar causas secundárias.",
      "(D) Solicitar eletroencefalograma."
    ],
    "correctAnswer": 0,
    "explanation": "A enxaqueca é diagnosticada clinicamente com base em critérios estabelecidos (IHS), dispensando exames de imagem e laboratoriais na ausência de sinais de alerta (red flags).",
    "commentary": "Comentários sobre a resposta correta:\n(A) A enxaqueca (migrânea) típica apresenta sintomas clássicos (hemicraniana, pulsátil, associada a náuseas e fotofobia, recidivante há anos). Na ausência completa de sinais de alarme (\"red flags\", como febre, déficit focal, início súbito em trovão, edema de papila), o diagnóstico é estritamente clínico e exames complementares de imagem são desnecessários.\n\nComentários sobre os distratores:\n(B) A tomografia computadorizada de crânio não deve ser solicitada em cefaleias recorrentes típicas sem sinais de alerta ou mudança de padrão álgico.\n(C) A punção lombar é indicada na investigação de suspeitas infecciosas (meningite), hemorragia subaracnoidea de TC normal, ou hipertensão intracraniana, não se aplicando à crise migranosa típica.\n(D) O eletroencefalograma não possui sensibilidade, especificidade ou utilidade no diagnóstico da enxaqueca ou outras cefaleias primárias.",
    "reference": "INTERNATIONAL HEADACHE SOCIETY. The International Classification of Headache Disorders, 3rd edition. Cephalalgia, 2018. | HARRISON’S Principles of Internal Medicine. 21st ed. New York: McGraw-Hill, 2022.",
    "tags": [
      "neurologia"
    ]
  },
  {
    "id": "tp2024-70",
    "topography": "6.2",
    "topic": "Fraturas",
    "module": "Cirurgia",
    "text": "João, 7 anos, queda de bicicleta com fratura diafisária de rádio e ulna. Desvio angular pequeno (<10-15 graus). Pulsos e nervos OK. Qual a conduta?",
    "options": [
      "(A) Imobilização com tipoia simples.",
      "(B) Redução aberta e placas.",
      "(C) Redução fechada e imobilização gessada axilopalmar.",
      "(D) Redução fechada e haste intramedular."
    ],
    "correctAnswer": 2,
    "explanation": "Criança de 7 anos com fratura diafisária dos dois ossos do antebraço, fechada, sem lesão vascular ou nervosa e com pouca angulação (5 graus em AP e 10 graus em perfil). Em crianças pequenas, o osso tem grande capacidade de remodelação, e desvios desse tamanho estão dentro do limite aceitável para a idade.\n\nPor isso, o tratamento é conservador: redução fechada, se necessário, para alinhar a rotação e a angulação, e imobilização com gesso axilopalmar (braquiopalmar), com o cotovelo fletido, para bloquear a pronação e a supinação. O seguimento com radiografias nas primeiras semanas confirma que o alinhamento se mantém. A cirurgia fica para fraturas expostas, instáveis ou com desvio inaceitável após redução.",
    "commentary": "Tipoia simples (A): não imobiliza a fratura dos dois ossos nem controla a rotação; o desvio pode aumentar e consolidar em posição ruim.\n\nRedução aberta com placas (B): é reservada a adolescentes, fraturas expostas ou que não se mantêm reduzidas; numa criança de 7 anos com desvio aceitável, expõe a riscos sem benefício.\n\nRedução fechada com haste intramedular (D): a haste flexível é a opção cirúrgica para fraturas instáveis ou com desvio inaceitável, o que não é o caso.",
    "tip": "Fratura de antebraço em criança com pouco desvio: redução fechada e gesso axilopalmar; a remodelação corrige o resto.",
    "reference": "Beaty JH, Kasser JR. In Rockwood and Wilkins (ed). Fractures in Children. Baltimore: Lippincott Williams and Wilkins, 2001. Manual de trauma ortopédico / SBOT - Sociedade Brasileira de Ortopedia e Traumatologia; coordenadores, Isabel Pozzi... [et al.] - São Paulo: SBOT - Sociedade Brasileira de Ortopedia e Traumatologia, 2011.",
    "tags": [
      "ortopedia",
      "cirurgia pediátrica"
    ]
  },
  {
    "id": "tp2022-61",
    "topography": "16",
    "topic": "Feridas",
    "module": "Cirurgia",
    "text": "Paciente de 25 anos, masculino, será submetido a correção de hérnia inguinal direita por via convencional - inguinotomia. Visando a ligadura dos vasos superficiais do subcutâneo, o fechamento da aponeurose e o fechamento da pele, quais seriam os fios utilizados, respectivamente?",
    "options": [
      "(A) Algodão, PDS (polidioxanona), monocryl (poliglecaprona 25).",
      "(B) Vicryl (poliglactina 370), nylon, monocryl (poliglecaprona 25).",
      "(C) PDS (polidioxanona), monocryl (poligecaprina 25), algodão.",
      "(D) Catgut, monocryl (poliglecaprona 25), nylon."
    ],
    "correctAnswer": 0,
    "explanation": "Algodão para vasos superficiais, PDS (fio de longa absorção) para aponeurose e Monocryl para sutura intradérmica na pele.",
    "commentary": "Para ligaduras superficiais, o algodão é tradicional. A aponeurose exige um fio que suporte tração por tempo prolongado (PDS). Na pele, o monocryl evita cicatrizes exageradas.",
    "reference": "Sabiston - Tratado de Cirurgia - 18ª Ed.",
    "tags": [
      "cirurgia geral",
      "suturas"
    ]
  },
  {
    "id": "tp2025-70",
    "topography": "7.1",
    "topic": "Isquemia arterial aguda",
    "module": "Cirurgia",
    "text": "Homem, cisgênero, 60 anos, hipertenso, comparece ao serviço de urgência com dor intensa e súbita em membro inferior direito há 6 horas. Ao exame: ausculta cardíaca com bulhas arrítmicas; membro inferior direito com extremidade fria, pálida, sem pulsos palpáveis e sem alteração de trofismo. Qual conduta mais adequada?",
    "options": [
      "(A) Analgesia e anti-inflamatórios, aguardando melhora clínica para posterior avaliação cirúrgica.",
      "(B) Heparinização plena e angiotomografia do membro para decisão terapêutica com urgência.",
      "(C) Doppler arterial e fasciotomia profilática do membro para evitar síndrome compartimental.",
      "(D) Repouso físico e anticoagulação plena por três meses."
    ],
    "correctAnswer": 1,
    "explanation": "Na suspeita clínica de oclusão arterial aguda de membro (isquemia com viabilidade preservada), a conduta imediata consiste em heparinização plena (para cessar propagação do trombo) e angiotomografia urgente.",
    "commentary": "O doente apresenta quadro clássico de Oclusão Arterial Aguda de membro inferior, de importante etiologia provável embólica, sugerida pela associação de dor súbita severa e ritmo cardíaco arrítmico (sugestivo de fibrilamento atrial). A imediata heparinização sistêmica é indispensável para obstar a progressão de novos coágulos na vasculatura. A angiotomografia cervical/abdominal/ilíaco-femoral é fundamental na urgência para programar o desfecho operatório (trombectomia aberta, embolectomia de Fogarty ou terapia endovascular). Medidas conservadoras puras com repouso, sem o tratamento reconstrutivo imediato, estendem o tempo de anóxia tecidual à necrose irrecuperável.",
    "reference": "Rutherfords Vascular Surgery and Endovascular Therapy, 9ª ed., 2018.",
    "tags": [
      "cirurgia vascular",
      "emergência"
    ]
  },
  {
    "id": "tp2026-71",
    "topography": "7.1",
    "topic": "Insuficiência venosa crônica",
    "module": "Cirurgia",
    "text": "Uma mulher de 63 anos, obesa (IMC 32kg/m²), procura atendimento na UBS com queixa de dor, sensação de peso e edema em membros inferiores ao final do dia, com melhora ao elevar as pernas. Ao exame físico observam-se varizes bilaterais, edema maleolar e hiperpigmentação na região do tornozelo. Diante deste quadro clínico, qual o exame complementar mais indicado para avaliar a causa estrutural da doença?",
    "options": [
      "(A) Venografia contrastada dos membros inferiores.",
      "(B) Pletismografia venosa dos membros inferiores.",
      "(C) Angiotomografia venosa dos membros inferiores.",
      "(D) Ultrassonografia venosa com Doppler dos membros inferiores."
    ],
    "correctAnswer": 3,
    "explanation": "A ultrassonografia venosa com Doppler é o método de escolha (padrão-ouro não invasivo) para o diagnóstico e avaliação anatomofuncional da insuficiência venosa crônica.",
    "commentary": "A ultrassonografia venosa com Doppler (duplex scan) é o exame complementar de primeira linha. Permite a avaliação anatômica (presença de trombos, calibres venosos) e funcional (mapeamento do refluxo valvular no sistema venoso superficial, profundo e perfurante) com excelente acurácia, de forma não invasiva e sem contraste. Sobre os distratores: (A) A venografia retrógrada contrastada é invasiva e hoje reservada apenas para fins terapêuticos de exceção ou anatomia complexa. (B) A pletismografia avalia a hemodinâmica global do esvaziamento venoso, mas não provê detalhes anatômicos estruturais específicos. (C) A angiotomografia venosa é reservada para investigação de eixos venosos ilíaco-cavais (ex: Síndrome de May-Thurner) e não como exame inicial estrutural periférico.",
    "reference": "Eberhardt RT, Raffetto JD. Chronic Venous Insufficiency. Circulation. 2014;130:333-346. Wittens C et al. Management of Chronic Venous Disease: Clinical Practice Guidelines of the European Society for Vascular Surgery. Eur J Vasc Endovasc Surg. 2015. Gloviczki P et al. The care of patients with varicose veins and associated chronic venous diseases. J Vasc Surg. 2011.",
    "tags": [
      "vascular",
      "insuficiência venosa",
      "exames"
    ]
  },
  {
    "id": "tp2024-83",
    "topography": "5.1",
    "topic": "Climatério e menopausa",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher negra, 54 anos, menopausa há 15 anos. Asma grave (corticoide crônico), hipertensa (tiazídico), insônia (benzodiazepínico). Tabagista, sedentária. Mãe/avó com osteoporose. Fatores de risco para osteoporose presentes:",
    "options": [
      "(A) Raça negra, uso de benzodiazepínico e sedentarismo.",
      "(B) Menopausa precoce, antecedente familiar de osteoporose, tabagismo.",
      "(C) Uso de benzodiazepínico, antecedente familiar e obesidade.",
      "(D) História familiar de câncer de mama, sedentarismo e uso crônico de corticoide."
    ],
    "correctAnswer": 1,
    "explanation": "A paciente tem 54 anos e está na menopausa há 15 anos, ou seja, parou de menstruar por volta dos 39 anos: menopausa precoce (antes dos 40), que expõe o osso a longo período sem estrogênio. Somam-se o tabagismo e a história de osteoporose na mãe e na avó, todos fatores de risco reconhecidos.\n\nO uso crônico de corticoide sistêmico também é fator de risco importante, mas a única alternativa que reúne apenas fatores verdadeiros é a que cita menopausa precoce, história familiar e tabagismo. Ela tem indicação de densitometria óssea.",
    "commentary": "Raça negra e benzodiazepínico (A): mulheres negras têm, em média, maior massa óssea, o que é proteção, não risco. O benzodiazepínico aumenta o risco de quedas e fraturas, mas não é fator de risco para baixa massa óssea; sedentarismo também não completa a alternativa.\n\nObesidade (C): o caso não descreve obesidade, e o baixo peso (IMC abaixo de 18,5) é que se associa a osteoporose; o benzodiazepínico, como dito, não entra na lista.\n\nHistória familiar de câncer de mama (D): não tem relação com a massa óssea; o corticoide crônico é fator de risco, mas a alternativa traz um item errado.",
    "tip": "Menopausa antes dos 40, cigarro, corticoide, baixo peso e osteoporose ou fratura de quadril na família: fatores de risco para osteoporose.",
    "reference": "Manual brasileiro de osteoporose: orientações práticas para os profissionais de saúde / organização Adriana Orcesi Pedro , Perola Grinberg Plapler , Vera Lúcia Szejnfeld - 1. ed. - São Paulo: Editora Clannad, 2021, ISBN 978-65-89832-00-3",
    "tags": [
      "climatério",
      "osteoporose"
    ]
  },
  {
    "id": "tp2023-88",
    "topography": "5.2",
    "topic": "Infecções na gestação",
    "module": "Ginecologia e Obstetrícia",
    "text": "26 anos, secundigesta com 1 abortamento anterior há 3 anos, portadora do vírus HIV, em uso regular de tenofovir, lamivudina e dolutegravir. Apresenta carga viral menor que 1000 cópias/mL com 36 semanas, tendo indicação de zidovudina intravenosa até o clampeamento do cordão. Apresentação cefálica. A conduta em relação ao parto é:",
    "options": [
      "(A) Interromper por cesárea com 39 semanas.",
      "(B) Induzir com ocitocina na 37ª semana.",
      "(C) Aguardar pelo parto vaginal.",
      "(D) Iniciar prostaglandina via vaginal com 37 semanas."
    ],
    "correctAnswer": 2,
    "explanation": "Pelo protocolo do Ministério da Saúde para prevenção da transmissão vertical do HIV, a via de parto é decidida pela carga viral medida a partir de 34 semanas. Quando ela está inferior a 1.000 cópias/mL, a cesariana eletiva não reduz de forma relevante a transmissão, e a via de parto segue a indicação obstétrica.\n\nEsta gestante usa a terapia antirretroviral corretamente, tem carga viral inferior a 1.000 cópias/mL com 36 semanas e feto cefálico, então o correto é aguardar o trabalho de parto espontâneo e o parto vaginal. A cesariana nas mulheres vivendo com HIV tem mais complicações pós-operatórias e só é eletiva quando a carga viral é igual ou maior que 1.000 cópias/mL ou desconhecida.",
    "commentary": "Cesárea com 39 semanas (A): a cesariana eletiva por HIV fica para carga viral igual ou maior que 1.000 cópias/mL ou desconhecida após 34 semanas (nesse caso, programada com 38 semanas), não para esta paciente.\n\nIndução com ocitocina na 37ª semana (B): não há indicação obstétrica para antecipar o parto; o HIV controlado não justifica indução.\n\nProstaglandina vaginal com 37 semanas (D): da mesma forma, não há motivo para preparar o colo e induzir; o caminho é esperar o trabalho de parto espontâneo.",
    "tip": "HIV na gestação: carga viral abaixo de 1.000 após 34 semanas = parto vaginal; acima ou desconhecida = cesárea eletiva.",
    "reference": "Ministério da saúde. Protocolo clínico e diretrizes terapêuticas para prevenção da transmissão vertical de hiv, sífilis e hepatites virais. Página 108. 2022. Disponível em https://bvsms.saude.gov.br/bvs/publicacoes/protocolo_clinico_hiv_sifilis_hepatites.pdf",
    "tags": [
      "obstetrícia",
      "infecções"
    ]
  },
  {
    "id": "tp2022-96",
    "module": "Ginecologia e Obstetrícia",
    "text": "Após a ovulação, o corpo lúteo produz progesterona. Na evolução da gestação, qual estrutura assume essa produção a partir da 12ª semana?",
    "options": [
      "(A) Ovário.",
      "(B) Placenta.",
      "(C) Cordão umbilical.",
      "(D) Colo uterino."
    ],
    "correctAnswer": 1,
    "explanation": "A placenta torna-se o principal local de produção de progesterona após o primeiro trimestre (transição lúteo-placentária).",
    "commentary": "A partir da 12ª semana, a placenta assume a produção hormonal necessária para a manutenção da gravidez.",
    "reference": "Febrasgo.",
    "tags": [
      "obstetrícia",
      "fisiologia"
    ]
  },
  {
    "id": "tp2021-88",
    "topography": "5.2",
    "topic": "Descolamento prematuro de placenta",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, com idade gestacional de 32 semanas, chega à emergência com dor abdominal de início súbito, contínua, associada a sangramento transvaginal de coloração escura. Traz ultrassom do dia anterior mostrando feto vivo e placenta corporal posterior. Exame físico: PA = 160 x 90 mmHg, feto longitudinal, pélvico, BCF = 110 bpm constante, útero hipertônico, colo fechado. A conduta é:",
    "options": [
      "(A) Cesárea imediata.",
      "(B) Conduta expectante.",
      "(C) Inibição de trabalho de parto.",
      "(D) Indução do trabalho de parto."
    ],
    "correctAnswer": 0,
    "explanation": "O quadro de dor abdominal contínua súbita, hipertonia uterina (útero lenhoso), elevação da pressão arterial e sofrimento fetal agudo (BCF 110 bpm fixo) com sangramento escuro é típico de Descolamento Prematuro de Placenta (DPP). Sendo um feto vivo com sofrimento agudo e sem parto vaginal iminente, indica-se a cesariana imediata.",
    "commentary": "A suspeita clínica de DPP é essencialmente clínica (dor abdominal súbita intensa contínua + hipertonia uterina + sangramento escuro). Sendo o feto vivo, e na presença de sofrimento fetal agudo sem parto vaginal iminente (no caso o colo está impérvio e fechado), a conduta prioritária é a resolução cirúrgica por cesariana rápida, precedida de amniotomia que reduz a hipertensão intraútero e evita infiltração miometrial (útero de Couvelaire) e coagulação intravascular disseminada.",
    "reference": "Fernandes CE, Silva de Sá MF. Tratado de Obstetrícia FEBRASGO. São Paulo: Elsevier, 2018; Montenegro CABR. Rezende Obstetrícia. 13ª ED. Rio de Janeiro: Guanabara Koogan, 2017.",
    "tags": [
      "obstetrícia",
      "descolamento de placenta",
      "urgência"
    ]
  },
  {
    "id": "tp2019-86",
    "topography": "5.2",
    "topic": "Abortamento",
    "module": "Ginecologia e Obstetrícia",
    "text": "Primigesta, 28 anos de idade, gestação de 11 semanas, apresenta queixa de cólica em baixo ventre e sangramento vaginal de moderada intensidade há dois dias. Ao exame, encontra-se febril (37,8°C), PA: 110 x 70 mmHg e FC: 108bpm. Ao exame especular, observa-se grande quantidade de sangue vivo em fundo de saco vaginal, com odor fétido e orifício interno do colo uterino pérvio para 1 polpa digital.\n\nNesse caso, a conduta é:",
    "options": [
      "(A) Realizar esvaziamento uterino e antibioticoterapia.",
      "(B) Solicitar ultrassonografia e manter observação.",
      "(C) Iniciar antibioticoterapia e manter observação.",
      "(D) Realizar apenas aspiração manual intrauterina."
    ],
    "correctAnswer": 0,
    "explanation": "Abortamento com colo pérvio, sangramento, febre, taquicardia e odor fétido: abortamento infectado.\n\nA conduta é antibioticoterapia de amplo espectro e esvaziamento uterino (após o início dos antibióticos), para remover o foco infeccioso.",
    "commentary": "Observação expectante é inadequada diante da infecção. Antibiótico sem esvaziamento mantém o foco. Aspiração sem antibiótico expõe ao risco de sepse.",
    "reference": "Zugaib, M & Francisco RP. Obstetrícia. Editora Manole, 2017 Duarte G, et al. Protocolos de Conduta em Gestação de Alto Risco, 2003",
    "tags": [
      "obstetrícia",
      "abortamento"
    ]
  },
  {
    "id": "tp2024-116",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Sobre o Método Clínico Centrado na Pessoa (MCCP), é correto afirmar:",
    "options": [
      "O componente \"Sendo Realista\" foca apenas nos recursos financeiros do paciente.",
      "O acrônimo SIFE refere-se à anamnese técnica por sistemas.",
      "Deve-se seguir rigidamente a ordem dos quatro componentes em todas as consultas.",
      "O primeiro componente foca em entender a experiência da doença para o indivíduo (ideias, sentimentos, expectativas)."
    ],
    "correctAnswer": 3,
    "explanation": "O Método Clínico Centrado na Pessoa organiza a consulta em quatro componentes: explorar a saúde, a doença e a experiência de adoecer; entender a pessoa como um todo (história de vida, família, contexto); elaborar um plano conjunto de manejo; e intensificar a relação médico-pessoa.\n\nO primeiro componente vai além do diagnóstico biomédico: busca saber como a pessoa vive aquele problema. Para isso usa-se o acrônimo SIFE — Sentimentos, Ideias, Funcionalidade (o impacto no dia a dia) e Expectativas em relação à consulta. É essa compreensão que permite chegar a um plano que a pessoa aceite e consiga seguir.",
    "commentary": "Sendo realista restrito ao dinheiro do paciente (A): a ideia de ser realista diz respeito ao uso sensato do tempo, dos recursos do serviço e da equipe e das próprias habilidades do médico, e não só às finanças da pessoa.\n\nSIFE como anamnese por sistemas (B): o SIFE explora a experiência subjetiva da doença (sentimentos, ideias, funcionalidade e expectativas); o interrogatório sobre os diversos aparelhos é outra ferramenta.\n\nOrdem rígida dos componentes (C): os componentes se entrelaçam e são retomados conforme a conversa e o vínculo evoluem; não existe sequência obrigatória em cada consulta.",
    "tip": "MCCP, 1º componente = SIFE: Sentimentos, Ideias, Funcionalidade e Expectativas do paciente sobre a doença.",
    "reference": "Consulta centrada na pessoa, José Mauro Ceratti Lopes; Lêda Chaves Dias, Tratado de Medicina de Família e Comunidade, Capítulo 15, 2ª edição, Gustavo Gusso, 2019. Método clínico centrado na pessoa, Marcelo Garcia Kolling, Medicina Ambulatorial – Condutas de Atenção Primária baseadas em Evidências, Cap 11, 5ª edição, Artmed, 2022",
    "tags": [
      "MCCP",
      "relação médico-paciente",
      "APS"
    ]
  },
  {
    "id": "tp2022-107",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Idosa de 90 anos, analfabeta, diabética com dificuldade de locomoção. Mora com sobrinha que trabalha o dia todo. Qual o Plano Terapêutico Singular (PTS) mais seguro?",
    "options": [
      "(A) Insulina à noite com a sobrinha; exercícios em casa; metas glicêmicas mais flexíveis.",
      "(B) Insulina de manhã com a sobrinha; dieta restritiva; metas glicêmicas rigorosas.",
      "(C) Insulina antes do almoço com a vizinha; evitar atividade física devido a risco de queda.",
      "(D) Insulina à noite com a sobrinha; dieta restritiva; metas glicêmicas restritivas."
    ],
    "correctAnswer": 0,
    "explanation": "Em idosos frágeis, as metas devem ser flexíveis para evitar hipoglicemia e o tratamento deve ser adaptado à rede de apoio.",
    "commentary": "Flexibilizar metas e adaptar o horário da medicação à presença do cuidador são estratégias de segurança e adesão para o paciente idoso.",
    "reference": "Diretrizes SBD 2019-2020.",
    "tags": [
      "geriatria",
      "saúde da família"
    ]
  },
  {
    "id": "tp2021-107",
    "topography": "15",
    "topic": "Estratégia Saúde da Família",
    "module": "Saúde Coletiva",
    "text": "Foi instalada uma nova equipe de Estratégia de Saúde da família em uma área de risco. A equipe iniciou o trabalho percorrendo área, fazendo o levantamento dos recursos disponíveis, possíveis barreiras ao acesso e cadastrando os residentes da área. Que princípios norteadores da Estratégia de Saúde da Família foram utilizados nesse trabalho?",
    "options": [
      "(A) Territorialização e adscrição da clientela.",
      "(B) Hierarquização e integralidade.",
      "(C) Equidade e caráter substitutivo.",
      "(D) Referência e contrarreferência."
    ],
    "correctAnswer": 0,
    "explanation": "O processo de percorrer e mapear a área geográfica delimitada de atuação da equipe (definindo barreiras, vulnerabilidades e recursos) e identificar e cadastrar os habitantes da localidade caracteriza de maneira explícita os princípios norteadores de territorialização e adscrição da clientela.",
    "commentary": "No âmbito organizacional da Atenção Primária no Brasil, a territorialização define a área geográfica de corresponsabilidade da ESF e o mapeamento locorregional. Conectado a ela, a adscrição consagra o vínculo e responsabilidade permanente sobre uma população específica descrita (indivíduos cadastrados vinculados ao serviço no território demarcado).",
    "reference": "PNAB - Política Nacional de Atenção Básica, Portaria nº 2.436/2017.",
    "tags": [
      "estratégia saúde da família",
      "territorialização",
      "princípios do SUS"
    ]
  },
  {
    "id": "tp2019-108",
    "topography": "15",
    "topic": "Testes diagnósticos",
    "module": "Saúde Coletiva",
    "text": "Um pesquisador diz que um determinado exame laboratorial tem sensibilidade de 98% para o diagnóstico de uma doença.\n\nEle está dizendo que:",
    "options": [
      "(A) 98% dos indivíduos que não têm essa doença terão resultados negativos nesse exame.",
      "(B) 2% dos indivíduos que têm essa doença terão resultados negativos para ela.",
      "(C) 98% dos indivíduos que têm resultados positivos para essa doença serão verdadeiramente doentes.",
      "(D) 2% dos indivíduos que não têm essa doença terão resultados positivos para ela."
    ],
    "correctAnswer": 1,
    "explanation": "Sensibilidade é a proporção de doentes com teste positivo. Sensibilidade de 98% significa que 98% dos doentes testam positivo — e, portanto, 2% dos doentes terão resultado negativo (falsos negativos).",
    "commentary": "A alternativa A descreve especificidade. A C descreve valor preditivo positivo. A D descreve o complemento da especificidade (falsos positivos).",
    "reference": "Weiss, N S. Clinical Epidemiology. In: Rothman KJ, Organizador. Modern Epidemiology. 3o. Philadelphia: Lippincott Williams & Wilkins; 2008. p. 641.",
    "tags": [
      "saúde coletiva",
      "epidemiologia",
      "testes diagnósticos"
    ]
  },
  {
    "id": "tp2022-19",
    "topography": "2.1",
    "topic": "Pneumonia comunitária",
    "module": "Ciências Básicas",
    "text": "Homem de 55 anos, em situação de rua e etilista, foi internado devido a pneumonia multilobar grave. Desenvolveu quadro de insuficiência respiratória grave. Foi solicitada uma baciloscopia de escarro, que revelou bastonetes gram-negativos encapsulados. O organismo é fermentador de lactose em ágar de MacConkey e é muito mucoide. O agente etiológico mais provável é:",
    "options": [
      "(A) Nocardia abscessos",
      "(B) Clostridium difficile",
      "(C) Streptococcus pneumoniae",
      "(D) Klebsiella pneumoniae"
    ],
    "correctAnswer": 3,
    "explanation": "Klebsiella pneumoniae é um bacilo Gram-negativo encapsulado, fermentador de lactose, associado a pneumonias graves em etilistas.",
    "commentary": "A Klebsiella pneumoniae (família Enterobacteriaceae) é um bastonete Gram-negativo, lactose positivo e apresenta uma cápsula proeminente que resulta em colônias muito mucoides. O S. pneumoniae é Gram-positivo. Clostridium é anaeróbio.",
    "reference": "TRABULSI, L. R.; ALTERTHUM, F. (Ed.). Microbiologia. 5. ed. São Paulo: Atheneu, 2010.",
    "tags": [
      "microbiologia",
      "pneumologia",
      "infectologia"
    ]
  },
  {
    "id": "tp2021-20",
    "topography": "2.2",
    "topic": "Infarto agudo do miocárdio",
    "module": "Ciências Básicas",
    "text": "Homem, 44 anos, apresentou oclusão do ramo circunflexo da artéria coronária esquerda. Pode sofrer infarto do miocárdio prioritariamente em qual região cardíaca?",
    "options": [
      "(A) Ventrículos direito e esquerdo.",
      "(B) Átrio e ventrículo esquerdo.",
      "(C) Átrios direito e esquerdo.",
      "(D) Septo interventricular."
    ],
    "correctAnswer": 1,
    "explanation": "A artéria circunflexa, ramo da artéria coronária esquerda, é responsável prioritariamente por nutrir a parede lateral do ventrículo esquerdo e porções do átrio esquerdo.",
    "commentary": "A oclusão do ramo circunflexo da coronária esquerda (Cx) acarreta isquemia aguda (infarto) na parede lateral do ventrículo esquerdo e no átrio esquerdo. O septo interventricular e parede anterior são comumente nutridos pela interventricular anterior (ADA), enquanto o ventrículo direito é domínio da coronária direita (CD).",
    "reference": "Drake RL, Vogl AW, Mitchell AWM. Gray’s Anatomy for students. 2nd edition. Churchill Livingstone, Elsevier, Philadelphia, 2005.",
    "tags": [
      "anatomia",
      "cardiologia"
    ]
  },
  {
    "id": "tp2020-4",
    "topography": "10",
    "topic": "Doença de Chagas",
    "module": "Ciências Básicas",
    "text": "Clodoaldo, 66 anos, agricultor, é chagásico crônico há pelo menos 5 anos. Apesar da infecção ser acompanhada desde a fase aguda, foi obsevado apenas uma cardiomegalia leve que não interfere nas atividades diárias do paciente.\n\nComo podemos classificar a doença do paciente?",
    "options": [
      "(A) Oligossintomática",
      "(B) Determinada",
      "(C) Assintomática",
      "(D) Indeterminada"
    ],
    "correctAnswer": 3,
    "explanation": "Doença de Chagas crônica sem manifestações clínicas limitantes, com alteração cardíaca discreta que não interfere na vida diária: a banca a classifica como forma indeterminada.\n\nPela definição clássica, a forma indeterminada exige sorologia positiva com ECG e radiografias normais; cardiomegalia, mesmo leve, já indicaria forma cardíaca (determinada).",
    "commentary": "Observação: pelo II Consenso Brasileiro de Doença de Chagas, qualquer cardiomegalia caracteriza forma cardíaca, o que torna a alternativa B defensável — questão passível de recurso.",
    "reference": "REY, Luís. Parasitologia: parasitos e doenças parasitárias do homem nos trópicos ocidentais. 4. ed. Rio de Janeiro: Guanabara Koogan, 2008. / AMATO NETO, V. et al. Parasitologia: uma abordagem clínica. Rio de Janeiro: Elsevier, 2008.",
    "tags": [
      "parasitologia",
      "doença de chagas"
    ]
  },
  {
    "id": "enamed-2025-63",
    "topography": "15",
    "topic": "Estudos epidemiológicos",
    "module": "Saúde Coletiva",
    "text": "Uma equipe de Saúde da Família percebeu aumento do número de casos complicados de diabetes mellitus. Entre 3.500 pacientes cadastrados, 280 possuem diabetes tipo 2. A equipe elaborou um projeto de intervenção coletiva com orientação nutricional e incentivo à atividade física para reduzir complicações.\n\nQual é o desenho de pesquisa mais adequado para avaliar o impacto desse projeto?",
    "options": [
      "(A) Estudo de caso-controle aninhado.",
      "(B) Ensaio clínico não randomizado.",
      "(C) Estudo de coorte retrospectivo.",
      "(D) Ensaio clínico randomizado."
    ],
    "correctAnswer": 3,
    "explanation": "Para avaliar com o maior rigor metodológico possível o impacto de uma intervenção ativa (projeto educativo de orientação nutricional e atividade física), eliminando vieses de confusão e seleção, o Ensaio Clínico Randomizado (ECR) é considerado o delineamento experimental padrão-ouro. Nele, os indivíduos (ou as microáreas/grupos) são aleatorizados entre receber a intervenção e o cuidado habitual, permitindo inferir relação de causalidade direta sobre a redução de complicações.",
    "commentary": "Estudos observacionais como coorte retrospectivo (C) e caso-controle (A) apenas avaliam retrospectivamente associações de risco preexistentes, sem controle experimental ativo da intervenção. Ensaios não randomizados (B) sofrem com forte viés de seleção sistemático.",
    "reference": "Epidemiologia Clínica: Elementos Essenciais / Fletcher / Medronho",
    "tags": [
      "saúde coletiva",
      "metodologia científica",
      "epidemiologia",
      "ensaio clínico"
    ]
  },
  {
    "id": "enamed-2026-3",
    "topography": "14",
    "topic": "Emergências obstétricas",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante de 32 semanas é socorrida por equipe de atendimento pré-hospitalar após sofrer acidente automobilístico. A paciente está conversando. Apresenta: escala de Glasgow 12; FC 108 bpm; PA 90 x 60 mmHg. É imobilizada em prancha rígida com colar cervical.\n\nQual é a conduta indicada para otimizar o retorno venoso materno, durante o transporte, sem risco de comprometer a estabilização da coluna vertebral da paciente?",
    "options": [
      "(A) Colocá-la em posição de Trendelemburg.",
      "(B) Imobilizá-la na prancha em decúbito lateral esquerdo.",
      "(C) Realizar o deslocamento manual do útero para a esquerda.",
      "(D) Elevar os membros inferiores."
    ],
    "correctAnswer": 2,
    "explanation": "A partir da 20ª semana, o útero gravídico em decúbito dorsal comprime a veia cava inferior, reduzindo o retorno venoso e o débito cardíaco (síndrome da hipotensão supina). A paciente está imobilizada em prancha com colar cervical e já tem PA limítrofe e taquicardia.\n\nO deslocamento manual do útero para a esquerda alivia a compressão aortocava sem mobilizar a coluna, preservando a imobilização. Se não houver quem faça o deslocamento manual, a alternativa é inclinar toda a prancha (15–30°) para a esquerda, mantendo o alinhamento.",
    "commentary": "Trendelemburg e elevação de membros não descomprimem a cava. Imobilizar em decúbito lateral esquerdo fora da prancha comprometeria a estabilização da coluna. (Gabarito preliminar do INEP.)",
    "reference": "ATLS 10ª edição — trauma na gestante",
    "tags": [
      "obstetrícia",
      "trauma",
      "atendimento pré-hospitalar"
    ]
  },
  {
    "id": "enamed-2026-92",
    "module": "Pediatria",
    "text": "Lactente de 3 meses é levado a uma Unidade Básica de Saúde por apresentar crises de tosse intensa há 15 dias, acentuando-se há 10 dias em crises sucessivas, com associação de vômitos. Durante as crises, apresenta cianose, hemorragia conjuntival, petéquias e rubor facial. Foi realizada imunização somente ao nascimento.\n\nQual exame deve ser realizado para confirmação da hipótese diagnóstica nesse caso?",
    "options": [
      "(A) Bacterioscopia pelo Gram em amostra de swab de nasofaringe.",
      "(B) Hemograma com contagem de plaquetas.",
      "(C) Reação em cadeia da polimerase em amostra de swab de nasofaringe.",
      "(D) Sorologia para toxina em amostra de sangue."
    ],
    "correctAnswer": 2,
    "explanation": "Lactente de 3 meses com vacinação incompleta (sem pentavalente) e tosse paroxística com vômitos, cianose, hemorragia conjuntival e petéquias: coqueluche (Bordetella pertussis).\n\nA confirmação é feita por PCR em tempo real em swab de nasofaringe (ou cultura), coletados idealmente antes do antibiótico.",
    "commentary": "O Gram não identifica B. pertussis. O hemograma pode mostrar leucocitose com linfocitose, mas não confirma o diagnóstico. A sorologia não é usada para diagnóstico em lactentes. (Gabarito preliminar do INEP.)",
    "reference": "Ministério da Saúde. Guia de Vigilância em Saúde — Coqueluche",
    "tags": [
      "pediatria",
      "infectologia",
      "coqueluche"
    ]
  },
  {
    "id": "unifesp2025-28",
    "topography": "14",
    "topic": "Choque",
    "module": "Clínica Médica",
    "text": "Homem, 27 anos de idade, previamente hígido, foi vítima de acidente automobilístico com sangramentos. Apresenta, à avaliação, PA = 94/52 mmHg, oligúria, creatinina = 1,9 mg/dL (VR 0,7 a 1,3 mg/dL), ureia = 96 mg/dL (VR 20 a 50 mg/dL), K = 6,1 mEq/L (VR 3,5 a 5,1 mEq/L), densidade urinária = 1036 (VR 1005 a 1030), fração de excreção de ureia = 27% e urina I com presença de cilindros hialinos abundantes.\n\nQual é o tratamento mais adequado neste momento?",
    "options": [
      "(A) Diálise de urgência.",
      "(B) Reposição de volume.",
      "(C) Droga inotrópica.",
      "(D) Furosemida intravenosa."
    ],
    "correctAnswer": 1,
    "explanation": "Lesão renal aguda em politraumatizado hipotenso por sangramento, com urina concentrada (densidade 1036), fração de excreção de ureia de 27% (< 35% sugere causa pré-renal) e cilindros hialinos (sedimento 'inocente'): LRA pré-renal por hipovolemia.\n\nO tratamento é a reposição volêmica (com controle do sangramento), que deve reverter a azotemia. O K de 6,1 sem descrição de alterações eletrocardiográficas não justifica, por si só, diálise de urgência.",
    "commentary": "Diálise de urgência (A): indicada para hipercalemia refratária, acidose grave, hipervolemia refratária ou uremia sintomática, ausentes aqui.\n\nInotrópico (C): o choque é hipovolêmico; a primeira medida é repor volume.\n\nFurosemida (D): agrava a hipovolemia e piora a lesão pré-renal.",
    "reference": "KDIGO Clinical Practice Guideline for Acute Kidney Injury",
    "tags": [
      "nefrologia",
      "lesão renal aguda",
      "pré-renal",
      "fração de excreção de ureia"
    ]
  },
  {
    "id": "unifesp2025-67",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 44 anos de idade, multípara, realizou a primeira mamografia da vida (quatro incidências básicas) que mostrou mamas lipossubstituídas com presença de calcificações heterogêneas localizadas na região retroareolar da mama esquerda, BI-RADS 0.\n\nQual é o complemento mamográfico adicional necessário para a classificação adequada?",
    "options": [
      "(A) Compressão localizada",
      "(B) Incidência craniocaudal exagerada",
      "(C) Ampliação",
      "(D) Incidência em perfil absoluto"
    ],
    "correctAnswer": 2,
    "explanation": "Calcificações classificadas como BI-RADS 0 precisam de avaliação adicional da morfologia e da distribuição para serem categorizadas (benignas, suspeitas ou altamente suspeitas).\n\nO complemento específico para calcificações é a magnificação (ampliação), em geral associada a compressão localizada, que mostra o formato, o número e a distribuição das partículas.",
    "commentary": "Compressão localizada (A): indicada principalmente para assimetrias e nódulos, para diferenciar sobreposição de tecido de lesão real.\n\nCraniocaudal exagerada (B): usada para lesões nas porções lateral ou medial posteriores não incluídas na CC padrão.\n\nPerfil absoluto (D): ajuda a localizar a lesão e a identificar calcificações em 'leite de cálcio', mas não substitui a ampliação para estudar a morfologia.",
    "reference": "ACR BI-RADS Atlas, 5ª ed. / Colégio Brasileiro de Radiologia",
    "tags": [
      "mastologia",
      "mamografia",
      "BI-RADS",
      "microcalcificações"
    ]
  },
  {
    "id": "hosbos2027-27",
    "topography": "4.1",
    "topic": "Distúrbios ácido-base",
    "module": "Clínica Médica",
    "text": "Homem de 58 anos apresenta vômitos incoercíveis há 4 dias e, nas últimas 12 horas, confusão mental e taquipneia. AP: etilista crônico. Exame físico: PA: 90 x 58 mmHg, FC: 116 bpm, FR: 28 irpm e desidratação 3+/4+. Gasometria arterial: pH: 7,42, PaCO₂: 30 mmHg, bicarbonato: 19 mEq/L, sódio: 138 mEq/L, cloro: 92 mEq/L, potássio: 3,1 mEq/L, albumina: 3,0 g/dL.\n\nOs diagnósticos são",
    "options": [
      "(A) Acidose metabólica com ânion gap elevado, alcalose metabólica e alcalose respiratória.",
      "(B) Acidose metabólica com ânion gap normal, alcalose metabólica e acidose respiratória.",
      "(C) Alcalose metabólica e respiratória.",
      "(D) Acidose metabólica com ânion gap elevado, acidose metabólica com ânion gap normal e alcalose respiratória.",
      "(E) Alcalose respiratória e acidose respiratória."
    ],
    "correctAnswer": 0,
    "explanation": "pH normal não significa equilíbrio. Passo a passo:\n\n• Ânion-gap = 138 – (92 + 19) = 27; corrigido pela albumina de 3,0: cerca de 29,5. Está elevado: acidose metabólica de AG alto (cetoacidose alcoólica, lactato)\n• Delta-delta: o AG subiu cerca de 17 e o bicarbonato caiu só cerca de 5, indicando alcalose metabólica associada (vômitos, cloro baixo)\n• pCO₂ esperada para HCO₃⁻ de 19 = 1,5 × 19 + 8 ≈ 36,5; a medida é 30, logo há alcalose respiratória associada (taquipneia)\n\nSão três distúrbios: acidose metabólica de AG elevado, alcalose metabólica e alcalose respiratória.",
    "commentary": "AG normal e acidose respiratória (B): o AG está elevado e a pCO₂ está abaixo do esperado.\n\nSó alcalose metabólica e respiratória (C): ignora a acidose de AG alto.\n\nDuas acidoses metabólicas (D): não há acidose de AG normal; o delta-delta mostra alcalose metabólica.\n\nAlcalose e acidose respiratórias (E): é impossível ter as duas ao mesmo tempo.",
    "reference": "Harrison — Distúrbios ácido-base / Berend K et al. — Physiological approach to acid-base disturbances (NEJM 2014)",
    "tags": [
      "nefrologia",
      "distúrbios ácido-base",
      "ânion-gap",
      "delta-delta"
    ]
  },
  {
    "id": "hosbos2027-90",
    "topography": "15",
    "topic": "Epidemiologia",
    "module": "Saúde Coletiva",
    "text": "Uma doença X tem taxa de letalidade maior do que a doença Y.\n\nAssinale a alternativa correta sobre essa informação.",
    "options": [
      "(A) A doença X é aguda e a doença Y é crônica.",
      "(B) Morrem mais pessoas com a doença X na sua fase inicial do que pessoas com a doença Y.",
      "(C) A doença X é uma doença infecciosa e a doença Y não.",
      "(D) Morrem mais pessoas pela doença X em relação a pessoas que tiveram ou têm a doença.",
      "(E) A doença X acomete pessoas de mais idade."
    ],
    "correctAnswer": 3,
    "explanation": "Letalidade = número de óbitos pela doença dividido pelo número de doentes (casos), em determinado período. Expressa a gravidade da doença, ou seja, a proporção de doentes que morrem dela.\n\nSe X tem letalidade maior que Y, entre as pessoas que têm ou tiveram X, morre proporcionalmente mais gente do que entre os doentes de Y. Não confundir com mortalidade, que usa a população total no denominador.",
    "commentary": "X aguda e Y crônica (A): a letalidade não informa a evolução temporal da doença.\n\nMortes na fase inicial (B): a letalidade não indica em que fase os óbitos ocorrem.\n\nX infecciosa (C): a medida não define a natureza da doença.\n\nX acomete mais idosos (E): a letalidade não informa a faixa etária acometida.",
    "reference": "Rouquayrol — Epidemiologia & Saúde / Medronho — Epidemiologia",
    "tags": [
      "epidemiologia",
      "letalidade",
      "indicadores de saúde"
    ]
  }
];
