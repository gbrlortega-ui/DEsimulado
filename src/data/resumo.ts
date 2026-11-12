// Arquivo gerado por `npm run gen` a partir do banco de questões. Não editar à mão.
// O build e o servidor local regeneram este arquivo sozinhos; o `npm run validate` acusa se ficar desatualizado.
import type { Question } from '../types';

export const TOTAL_QUESTIONS = 1754;

export const COUNT_BY_AREA: Record<string, number> = {
  "Pediatria": 320,
  "Clínica Médica": 354,
  "Cirurgia": 298,
  "Ginecologia e Obstetrícia": 314,
  "Saúde Coletiva": 308,
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
    "label": "HIAE 2025",
    "kind": "Residência",
    "year": 2025,
    "count": 75
  },
  {
    "label": "REVALIDA 2025/1",
    "kind": "Residência",
    "year": null,
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
    "key": "HIAE",
    "label": "HIAE",
    "kind": "Residência",
    "years": "2025",
    "count": 75
  },
  {
    "key": "REVALIDA",
    "label": "REVALIDA",
    "kind": "Residência",
    "years": "NaN",
    "count": 100
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
  "Saúde Coletiva|SUS-BA": 4,
  "Clínica Médica|HIAE": 18,
  "Cirurgia|HIAE": 15,
  "Pediatria|HIAE": 14,
  "Saúde Coletiva|HIAE": 13,
  "Ginecologia e Obstetrícia|HIAE": 15,
  "Clínica Médica|REVALIDA": 18,
  "Cirurgia|REVALIDA": 15,
  "Pediatria|REVALIDA": 24,
  "Ginecologia e Obstetrícia|REVALIDA": 21,
  "Saúde Coletiva|REVALIDA": 22
};

/** Questões por especialidade ou região da topografia ("1.1", "8"). */
export const TOPOGRAPHY_COUNT: Record<string, number> = {
  "8": 52,
  "9": 46,
  "10": 79,
  "11": 178,
  "12": 15,
  "13": 41,
  "14": 67,
  "15": 273,
  "16": 112,
  "1.2": 11,
  "1.3": 20,
  "7.2": 32,
  "4.2": 23,
  "1.1": 57,
  "1.5": 23,
  "6.1": 35,
  "3.1": 57,
  "4.1": 58,
  "2.1": 68,
  "6.2": 19,
  "2.2": 71,
  "3.2": 17,
  "3.3": 15,
  "7.1": 20,
  "1.4": 2,
  "3.4": 12,
  "5.1": 136,
  "5.2": 160
};

/** Questões por assunto, na chave "1.1|Cefaleias". */
export const TOPIC_COUNT: Record<string, number> = {
  "11|Puericultura": 18,
  "1.2|Catarata": 4,
  "11|Icterícia neonatal": 7,
  "11|Obesidade infantil": 6,
  "1.3|Amigdalite/faringoamigdalite": 11,
  "7.2|Urticária": 1,
  "1.2|Uveíte": 2,
  "4.2|Estenose de uretra": 2,
  "11|Calendário vacinal": 8,
  "1.1|TCE": 10,
  "11|Maus-tratos infantis": 13,
  "11|Prematuridade": 2,
  "11|Anemia ferropriva": 11,
  "9|Trombocitopenias": 4,
  "11|Aleitamento materno": 15,
  "1.5|Hipotireoidismo": 6,
  "11|Síndrome do desconforto respiratório neonatal": 6,
  "14|Emergências pediátricas": 9,
  "6.1|Artrite reumatoide": 7,
  "9|Talassemias": 1,
  "11|ITU pediátrica": 6,
  "11|Diarreia aguda": 7,
  "14|Trauma": 23,
  "11|Cardiopatias congênitas": 16,
  "3.1|Constipação intestinal": 5,
  "10|Raiva": 5,
  "1.1|Cefaleias": 7,
  "1.3|Surdez": 2,
  "11|Desenvolvimento neuropsicomotor": 14,
  "9|Anemia falciforme": 7,
  "11|Asma infantil": 14,
  "11|Doença de Kawasaki": 1,
  "1.5|Hipertireoidismo": 9,
  "11|Desidratação": 7,
  "11|Sepse neonatal": 6,
  "9|Leucemias": 7,
  "1.3|Otite média aguda": 2,
  "11|Convulsão febril": 5,
  "11|Pneumonia infantil": 3,
  "11|Refluxo gastroesofágico": 2,
  "11|Bronquiolite": 6,
  "11|Desnutrição": 2,
  "10|Sífilis": 12,
  "4.1|Síndrome nefrítica": 2,
  "2.1|Bronquiectasias": 2,
  "8|Insuficiência adrenal": 6,
  "6.2|Escoliose": 2,
  "14|Intoxicações": 10,
  "15|Ética médica": 13,
  "4.1|Síndrome nefrótica": 4,
  "1.3|Laringite": 3,
  "7.2|Dermatite atópica": 4,
  "14|Sepse e choque séptico": 5,
  "8|Síndrome de Cushing": 3,
  "4.2|Torção testicular": 5,
  "2.2|Arritmias": 6,
  "9|Anemias": 1,
  "10|Tétano": 1,
  "8|Feocromocitoma": 2,
  "9|Linfomas": 3,
  "8|Cetoacidose diabética": 11,
  "3.1|Diarreia crônica": 3,
  "1.2|Erros refrativos": 1,
  "10|Dengue": 14,
  "4.1|Distúrbios hidroeletrolíticos": 8,
  "4.1|Lesão renal aguda": 9,
  "8|Diabetes mellitus tipo 1 e 2": 20,
  "1.1|Demências": 5,
  "6.1|Lúpus eritematoso sistêmico": 6,
  "1.1|Epilepsia": 5,
  "10|Tuberculose": 17,
  "2.1|DPOC": 15,
  "9|Anemia ferropriva": 6,
  "3.2|Hepatites virais": 5,
  "2.2|Dislipidemia": 4,
  "2.2|Insuficiência cardíaca": 11,
  "2.2|Hipertensão arterial sistêmica": 16,
  "4.1|Cistite": 6,
  "13|Dependência química": 6,
  "3.1|DRGE": 8,
  "2.1|Asma": 9,
  "2.1|Pneumonia comunitária": 13,
  "13|Abstinência alcoólica": 6,
  "6.1|Osteoartrose": 2,
  "2.1|Tuberculose pulmonar": 1,
  "7.2|Herpes-zóster": 2,
  "1.1|AVC": 15,
  "7.2|Erisipela": 2,
  "7.2|Melanoma": 3,
  "4.1|Nefrolitíase": 8,
  "2.2|Valvopatias": 3,
  "6.1|Fibromialgia": 3,
  "2.2|Infarto agudo do miocárdio": 7,
  "2.1|Embolia pulmonar": 4,
  "2.1|Câncer de pulmão": 5,
  "4.1|Pielonefrite": 5,
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
  "7.2|Escabiose": 5,
  "2.2|Síndrome coronariana aguda": 9,
  "4.1|Glomerulonefrite": 1,
  "10|HIV/AIDS": 8,
  "12|Delirium": 4,
  "3.1|Gastrite": 2,
  "9|Síndrome de lise tumoral": 1,
  "2.1|Insuficiência respiratória": 1,
  "10|Sepse": 4,
  "6.1|Osteoporose": 6,
  "7.2|Carcinoma basocelular": 2,
  "9|Anemia megaloblástica": 8,
  "2.1|Derrame pleural": 12,
  "13|Transtornos de ansiedade": 4,
  "1.5|Tempestade tireotóxica": 1,
  "12|Demências": 1,
  "13|Depressão maior": 5,
  "8|Hiperaldosteronismo primário": 3,
  "16|Feridas": 13,
  "16|Pré-operatório": 15,
  "16|Hérnias": 12,
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
  "3.1|Hemorragia digestiva alta": 9,
  "3.1|Doença hemorroidária": 4,
  "7.1|Aneurisma de aorta abdominal": 4,
  "3.2|Hepatocarcinoma": 2,
  "10|Doença de Chagas": 3,
  "1.4|Doença periodontal": 1,
  "3.3|Colecistite aguda": 2,
  "16|Trauma torácico": 14,
  "16|Apendicite aguda": 5,
  "16|Perfuração de víscera oca": 6,
  "3.3|Colangiocarcinoma": 3,
  "3.4|Pancreatite aguda": 6,
  "3.1|Câncer colorretal": 6,
  "8|Obesidade": 4,
  "7.1|Isquemia arterial aguda": 1,
  "7.2|Celulite": 2,
  "16|Pós-operatório": 16,
  "7.1|Insuficiência venosa crônica": 3,
  "6.2|Lesões do manguito rotador": 1,
  "16|Isquemia mesentérica": 4,
  "1.5|Nódulos tireoidianos": 3,
  "16|Abdome agudo": 3,
  "6.2|Lombalgia": 3,
  "7.2|Carcinoma espinocelular": 1,
  "6.2|Luxações": 1,
  "3.3|Colelitíase": 3,
  "5.1|Sangramento uterino anormal": 13,
  "5.1|Climatério e menopausa": 16,
  "5.1|Contracepção": 22,
  "5.1|Câncer de colo uterino": 22,
  "5.1|Vaginose bacteriana": 4,
  "5.2|Diabetes gestacional": 14,
  "5.2|Assistência ao parto": 6,
  "5.2|Puerpério": 12,
  "5.2|Infecções na gestação": 21,
  "5.2|Rotura prematura de membranas": 5,
  "15|Rastreamento": 16,
  "5.1|Câncer de endométrio": 6,
  "5.2|Gravidez ectópica": 7,
  "5.2|Diagnóstico de gravidez": 1,
  "5.2|Pré-natal": 20,
  "5.2|Hemorragia pós-parto": 6,
  "5.2|Trabalho de parto": 20,
  "5.1|Mioma uterino": 8,
  "5.1|Endometriose": 8,
  "5.1|Infertilidade": 8,
  "5.1|Prolapso genital": 4,
  "5.1|Câncer de ovário": 6,
  "15|Saúde da mulher": 8,
  "5.2|Pré-eclâmpsia": 13,
  "5.2|Abortamento": 14,
  "5.1|Síndrome dos ovários policísticos": 4,
  "5.1|Doença inflamatória pélvica": 5,
  "5.1|Candidíase vaginal": 3,
  "5.2|Eclâmpsia": 1,
  "5.2|Descolamento prematuro de placenta": 9,
  "5.2|Isoimunização Rh": 4,
  "5.1|Tricomoníase": 2,
  "5.2|Síndrome HELLP": 1,
  "5.1|Planejamento reprodutivo": 4,
  "8|Prolactinoma": 2,
  "10|Infecções sexualmente transmissíveis": 5,
  "15|Bioética": 4,
  "5.2|Idade gestacional": 3,
  "4.2|Incontinência urinária": 5,
  "5.2|Placenta prévia": 1,
  "15|Atenção Primária": 56,
  "15|Saúde do idoso": 4,
  "15|SUS": 39,
  "12|Polifarmácia": 2,
  "15|Imunização": 17,
  "15|Saúde do trabalhador": 15,
  "15|Estudos epidemiológicos": 21,
  "15|Epidemiologia": 35,
  "15|Vigilância epidemiológica": 22,
  "15|Testes diagnósticos": 12,
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
  "4.2|Hiperplasia prostática benigna": 2,
  "2.1|Fibrose pulmonar": 2,
  "6.1|Artrite séptica": 2,
  "15|Bioestatística": 2,
  "3.2|Ascite": 2,
  "14|Crise hipertensiva": 1,
  "7.2|Dermatite de contato": 1,
  "1.1|Esclerose múltipla": 1,
  "3.1|Úlcera péptica": 2,
  "9|Neutropenia febril": 1,
  "13|Transtornos alimentares": 4,
  "4.2|Fimose": 1,
  "3.4|Câncer de pâncreas": 2,
  "3.4|Pancreatite crônica": 4,
  "3.1|Diverticulose/diverticulite": 4,
  "6.1|Espondilite anquilosante": 3,
  "3.2|Colestase": 1,
  "1.5|Tireoidites": 1,
  "13|TOC": 1,
  "3.1|Fissura anal": 1,
  "6.1|Vasculites": 2,
  "3.3|Coledocolitíase": 3,
  "14|Emergências obstétricas": 3,
  "13|Transtornos de personalidade": 1,
  "2.2|Fibrilação atrial": 4,
  "6.2|Síndrome da cauda equina": 1,
  "7.2|Impetigo": 2,
  "3.2|Peritonite bacteriana espontânea": 1,
  "7.1|Dissecção de aorta": 1,
  "4.2|Câncer de bexiga": 1,
  "4.2|Retenção urinária": 2,
  "1.3|Vertigem": 1,
  "6.2|Lesão do ligamento cruzado anterior": 1,
  "8|Distúrbios do cálcio": 1,
  "14|Parada cardiorrespiratória": 2,
  "4.1|Nefropatia diabética": 1,
  "2.2|Choque cardiogênico": 1,
  "12|Cuidados paliativos": 5,
  "10|Toxoplasmose": 1,
  "1.5|Câncer de tireoide": 2,
  "2.2|Endocardite infecciosa": 4,
  "2.1|Tabagismo": 3,
  "11|Púrpura de Henoch-Schönlein": 2,
  "5.2|Restrição de crescimento fetal": 2,
  "5.1|Adenomiose": 1,
  "7.2|Pênfigo e penfigoide": 1,
  "1.4|Câncer de boca": 1,
  "2.1|Pneumonia hospitalar": 1,
  "1.5|Hiperparatireoidismo": 1,
  "6.1|Esclerose sistêmica": 1,
  "10|Meningococcemia": 1,
  "6.2|Pé diabético": 3,
  "1.2|Perda visual súbita": 1,
  "11|Alimentação complementar": 1,
  "10|Febre amarela": 1,
  "9|Transfusão sanguínea": 1,
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
    "id": "tp2023-58",
    "topography": "9",
    "topic": "Anemia falciforme",
    "module": "Pediatria",
    "text": "Qual o resultado característico para traço falciforme no teste do pezinho?",
    "options": [
      "(A) FA",
      "(B) SS",
      "(C) FAS",
      "(D) FAC"
    ],
    "correctAnswer": 2,
    "explanation": "No teste do pezinho, o resultado lista as hemoglobinas encontradas em ordem de quantidade. No recém-nascido predomina a hemoglobina fetal (F), por isso ela aparece primeiro em todos os laudos.\n\nO traço falciforme é o estado heterozigoto: a criança herdou um gene da hemoglobina normal (A) e um da hemoglobina S. Como produz mais A do que S, o laudo vem como FAS. Esse resultado não é doença: o portador não tem anemia nem precisa de tratamento, mas a família deve receber orientação e aconselhamento genético, porque dois portadores podem ter filho com doença falciforme.",
    "commentary": "FA (A): é o padrão normal do recém-nascido, só com hemoglobina fetal e hemoglobina adulta normal.\n\nSS (B): é o padrão (no recém-nascido, aparece como FS) da anemia falciforme (homozigose SS), sem hemoglobina A, e não do traço.\n\nFAC (D): indica traço de hemoglobina C (heterozigoto AC), outra hemoglobinopatia.",
    "tip": "Teste do pezinho: FA normal, FAS traço falciforme, FS anemia falciforme, FAC traço de Hb C.",
    "reference": "Brasil. Ministério da Saúde. Doença falciforme: condutas básicas para tratamento, Brasília: Ministério da Saúde, 2012.",
    "tags": [
      "hematologia",
      "triagem neonatal"
    ]
  },
  {
    "id": "tp2025-41",
    "topography": "11",
    "topic": "Cardiopatias congênitas",
    "module": "Pediatria",
    "text": "Recém-nascido do sexo masculino, nascido a termo, com 3 dias de vida, apresenta cianose central progressiva e taquipneia. A saturação de oxigênio está em 75%, sem melhora significativa com administração de oxigênio a 100%. O exame físico revela pulsos normais, sopro sistólico e hiperfonese da segunda bulha cardíaca. Qual das seguintes cardiopatias congênitas é a mais provável neste caso?",
    "options": [
      "(A) Coarctação de Aorta",
      "(B) Tetralogia de Fallot",
      "(C) Comunicação Interatrial",
      "(D) Transposição de Grandes Artérias"
    ],
    "correctAnswer": 3,
    "explanation": "A Transposição das Grandes Artérias (TGA) é a cardiopatia congênita cianótica mais comum no período neonatal. A hipoxemia grave e refratária à oxigenoterapia é um achado clássico, e o diagnóstico é confirmado pelo ecocardiograma.",
    "commentary": "A Transposição das Grandes Artérias (TGA) é a cardiopatia congênita cianótica mais comum no período neonatal. A hipoxemia grave e refratária à oxigenoterapia é um achado clássico, e o diagnóstico é confirmado pelo ecocardiograma. A Coarctação da Aorta pode se manifestar com insuficiência cardíaca e pulsos reduzidos em membros inferiores, mas não costuma causar cianose significativa como no caso apresentado. A Tetralogia de Fallot can cause cianose, mas geralmente não se manifesta de forma tão precoce. A Comunicação Interatrial (CIA) é uma cardiopatia acianogênica com hiperfluxo pulmonar, não sendo compatível com o quadro descrito.",
    "reference": "Pediatria SBD. Tratado de pediatria. (6a edição). Barueri - SP: Editora Manole; 2024.",
    "tags": [
      "cardiologia",
      "neonatologia"
    ]
  },
  {
    "id": "tp2019-53",
    "topography": "7.2",
    "topic": "Dermatite atópica",
    "module": "Pediatria",
    "text": "Pré-escolar, levado ao pediatra por apresentar lesão eritematosa em fossas antecubitais e poplíteas há 1 mês. Mãe refere que as lesões são acompanhadas por prurido que piora com o suor. Exame físico: placas e pápulas eritematosas que desaparecem à digitopressão nos locais descritos. Apresenta xerose cutânea e pitiríase alba em face.\n\nQual alteração laboratorial é critério diagnóstico para a doença apresentada?",
    "options": [
      "(A) Linfocitose",
      "(B) IgA sérica diminuída",
      "(C) IgE sérica elevada",
      "(D) Leucocitose com eosinofilia"
    ],
    "correctAnswer": 2,
    "explanation": "Lesões eczematosas pruriginosas em fossas antecubitais e poplíteas, xerose e pitiríase alba: dermatite atópica.\n\nA IgE sérica elevada é um dos critérios menores de Hanifin e Rajka, embora seja inespecífica.",
    "commentary": "Linfocitose e deficiência de IgA não fazem parte dos critérios. A eosinofilia pode ocorrer, mas leucocitose com eosinofilia não é critério diagnóstico.",
    "reference": "Tratado de Pediatria – Sociedade Brasileira de Pediatria 4a Edição. 2017.",
    "tags": [
      "pediatria",
      "dermatologia",
      "dermatite atópica"
    ]
  },
  {
    "id": "tp2022-27",
    "topography": "4.1",
    "topic": "Nefrolitíase",
    "module": "Clínica Médica",
    "text": "Feminino, 38 anos, dor lombar direita de forte intensidade, início há 12 horas, Giordano positivo à direita, afebril. Qual a principal hipótese diagnóstica?",
    "options": [
      "(A) Pielonefrite",
      "(B) Lombociatalgia",
      "(C) Cálculo ureteral",
      "(D) Abscesso renal"
    ],
    "correctAnswer": 2,
    "explanation": "Dor lombar unilateral intensa, de início súbito, sem febre e sem sintomas urinários, com Giordano positivo, é a apresentação típica da cólica renal por cálculo ureteral. A obstrução distende a pelve e a cápsula renal, o que explica a dor e o Giordano; a taquicardia acompanha a dor intensa.\n\nO exame de escolha para confirmar é a tomografia de abdome sem contraste; o ultrassom é alternativa, sobretudo em gestantes. O tratamento inicial é analgesia (anti-inflamatório e, se preciso, opioide). Se surgir febre com obstrução, é urgência: a via urinária precisa ser desobstruída.",
    "commentary": "Pielonefrite (A): também dá dor lombar e Giordano positivo, mas costuma vir com febre, calafrios e sintomas urinários, ausentes aqui.\n\nLombociatalgia (B): dor mecânica que piora com o movimento e pode irradiar para a perna; não costuma dar Giordano positivo.\n\nAbscesso renal (D): quadro infeccioso, com febre geralmente prolongada e estado geral comprometido.",
    "tip": "Dor lombar súbita, forte, unilateral, sem febre = cálculo ureteral. Febre + obstrução = desobstruir com urgência.",
    "reference": "ZERATI FILHO, Miguel et al. Urologia fundamental. 1. ed. São Paulo: Planmark, 2010.",
    "tags": [
      "urologia",
      "nefrologia"
    ]
  },
  {
    "id": "tp2021-21",
    "topography": "1.1",
    "topic": "AVC",
    "module": "Clínica Médica",
    "text": "Mulher, 56 anos, obesa, hipertensa e diabética, foi atendida no Pronto Atendimento com quadro agudo de afasia e hemiparesia direita iniciado há uma hora. PA = 150 x 73 mmHg, FC = 90 bpm, ritmo cardíaco irregular. Escore NIHSS (National Institutes of Health Stroke Scale) = 19. Tomografia computadorizada craniana: normal. O próximo passo no manejo dessa paciente é:",
    "options": [
      "(A) Hemicraniectomia descompressiva.",
      "(B) Anticoagulação com heparina endovenosa.",
      "(C) Trombolítico endovenoso.",
      "(D) Antiagregação dupla com aspirina e clopidogrel."
    ],
    "correctAnswer": 2,
    "explanation": "A paciente em questão tem apresentação clínica e achado de imagem compatíveis com um acidente vascular cerebral isquêmico. Como o quadro é de instalação recente, alterações na tomografia computadorizada ainda não são detectáveis. Ela é candidata a terapia trombolítica com ativador de plasminogênio tecidual (rt-PA) endovenoso que deve ser iniciado imediatamente.",
    "commentary": "A paciente apresenta déficit neurológico focal compatível com AVC isquêmico agudo em janela (1 hora do início, dentro de 4,5h) e tomografia computada de crânio normal. A terapia de escolha imediata é a trombólise endovenosa com rt-PA (Alteplase). Anticoagulação e dupla antiagregação estão contraindicadas nesta fase imediata pré-trombólise. A hemicraniectomia descompressiva reserva-se a infartos extensos com edema cerebral importante tardio.",
    "reference": "Launes J, Ketonen L. Dense middle cerebral artery sign: an indicator of poor outcome in middle cerebral artery area infarction. J Neurol Neurosurg Psychiatry 1987; 50(11):1550-1552. Pontes-Neto OM, Cougo P, Martins SCO, Abud DG, Nogueira RG, Miranda M, et al. Brazilian guidelines for endovascular treatment of patients with acute ischemic stroke. Arq Neuropsiquiatr 2017; 75 (1): 50-56. Powers WJ, Rabinstein AA, Ackerson T, Adeoye OM, Bambakidis NC, Becker K, et al. Guidelines for the early management of patients with acute ischemic stroke: a guideline for healthcare professionals from the American Heart Association/American Stroke Association. Stroke 2018;49(3):e46-110.",
    "tags": [
      "neurologia",
      "emergência"
    ]
  },
  {
    "id": "tp2026-39",
    "topography": "2.2",
    "topic": "Insuficiência cardíaca",
    "module": "Clínica Médica",
    "text": "Mulher cis, de 52 anos, chega ao pronto-socorro com dispneia súbita e ortopneia. PA 180/100mmHg, SatO₂ 86%. Radiografia de tórax mostra opacidades alveolares bilaterais perihilares simétricas. Gasometria: pH 7,30; pCO₂ 50mmHg; pO₂ 60mmHg. Qual a principal hipótese diagnóstica?",
    "options": [
      "(A) Edema agudo de pulmão cardiogênico",
      "(B) Síndrome do desconforto respiratório agudo",
      "(C) Pneumonia adquirida na comunidade",
      "(D) Tromboembolismo pulmonar"
    ],
    "correctAnswer": 0,
    "explanation": "A dispneia de instalação hiperaguda com ortopneia associada a crise hipertensiva sistêmica severa e imagem radiográfica clássica de infiltrado alveolar bilateral em \"asa de borboleta\" (perihilar simétrico) confirma Edema Agudo de Pulmão Cardiogênico.",
    "commentary": "Comentários sobre a resposta correta:\n(A) O quadro de insuficiência respiratória hipoxêmica e hipercápnica por fadiga muscular ventilatória, crise hipertensiva severa (PA 180/100 mmHg), ortopneia e radiologia de tórax exibindo o infiltrado alveolar simétrico perihilar clássico em \"asa de borboleta\" é a apresentação típica do Edema Agudo de Pulmão (EAP) cardiogênico secundário a disfunção ventricular aguda.\n\nComentários sobre os distratores:\n(B) A SDRA apresenta infiltrado bilateral difuso semelhante, porém tipicamente ocorre de forma subaguda após desencadeante sistêmico grave (ex.: sepse abdominal) e sem perfil de crise hipertensiva mecânica e ortopneia proeminente.\n(C) A pneumonia comunitária cursa de forma típica com febre, tosse produtiva mucopurulenta e consolidação lobar bem delimitada ao raio-X, sem infiltrado alveolar simétrico bilateral e hipertensão arterial concomitante.\n(D) O tromboembolismo pulmonar (TEP) gera dispneia súbita intensa e hipoxemia, mas cursa de forma típica com radiografia de tórax limpa ou com achados discretos e localizados (ex.: sinal de Westermark), sem edema alveolar difuso bilateral.",
    "reference": "Sociedade Brasileira de Cardiologia. Diretrizes de insuficiência cardíaca. Arquivos Brasileiros de Cardiologia, Rio de Janeiro, v. 111, n. 3, supl. 1, p. 1-436, 2018. | Braunwald’s Heart Disease: A Textbook of Cardiovascular Medicine. 12. ed. Philadelphia: Elsevier, 2022.",
    "tags": [
      "cardiologia",
      "emergência",
      "pneumologia"
    ]
  },
  {
    "id": "tp2024-77",
    "topography": "16",
    "topic": "Trauma abdominal",
    "module": "Cirurgia",
    "text": "Trauma de moto, inconsciente, choque, distensão abdominal e FAST positivo. Próximo passo?",
    "options": [
      "(A) Tomografia de abdome e pelve.",
      "(B) Estabilizar com fluidos e transfusão.",
      "(C) Laparotomia exploratória.",
      "(D) Lavado peritoneal."
    ],
    "correctAnswer": 2,
    "explanation": "Politraumatizado inconsciente, em choque hipovolêmico, com abdome distendido e doloroso e FAST positivo: há sangramento intra-abdominal com instabilidade hemodinâmica. Nessa combinação, o ATLS indica laparotomia exploratória imediata, porque só o controle cirúrgico da fonte resolve o choque.\n\nA reanimação com hemoderivados (de preferência concentrado de hemácias, plasma e plaquetas, com pouco cristaloide) acontece ao mesmo tempo, a caminho do centro cirúrgico, mas não deve atrasar a cirurgia. Em pacientes muito graves, a laparotomia pode seguir a estratégia de controle de danos.",
    "commentary": "Tomografia de abdome e pelve (A): é o exame do paciente estável; levar um paciente em choque ao tomógrafo atrasa o controle do sangramento e pode ser fatal.\n\nEstabilizar com fluidos e transfusão (B): a reposição é feita em paralelo, mas o paciente com sangramento abdominal ativo não estabiliza sem cirurgia, e cristaloide em excesso piora a coagulopatia e a hipotermia.\n\nLavado peritoneal (D): já se sabe que há sangue no abdome pelo FAST; o lavado é alternativa quando o FAST não está disponível ou é duvidoso.",
    "tip": "Trauma com choque + FAST positivo = laparotomia já. Estável com FAST positivo = tomografia.",
    "reference": "Sabiston - Tratado de Cirurgia - Townsend, Courtney; Beauchamp, Daniel - 2 Volumes - 18ª Ed. Cirurgia Vascular: Doenças Vasculares Periféricas, 4ª edição, volume 01 e 02 Maffei, Lastória, Yoshida, Rollo, Giannini, Moura.",
    "tags": [
      "trauma",
      "emergência"
    ]
  },
  {
    "id": "tp2022-72",
    "topography": "4.1",
    "topic": "Nefrolitíase",
    "module": "Cirurgia",
    "text": "Lombalgia súbita irradiada para testículo, acordando o paciente, associada a febre. Qual a investigação inicial?",
    "options": [
      "(A) USG de abdome e enzimas pancreáticas.",
      "(B) Ressonância Magnética e urina I.",
      "(C) Tomografia de abdome/pelve sem contraste, hemograma e urina I.",
      "(D) Raio X simples e amilase."
    ],
    "correctAnswer": 2,
    "explanation": "Dor lombar intensa e súbita, irradiada para o testículo, que acorda o paciente de madrugada, com punho-percussão dolorosa, é a apresentação típica de cólica ureteral por cálculo. A febre muda o cenário: sugere obstrução com infecção (pielonefrite obstrutiva), uma urgência urológica pelo risco de sepse.\n\nA tomografia de abdome e pelve sem contraste é o exame de referência para cálculo urinário: tem alta sensibilidade, mostra tamanho e localização do cálculo e o grau de dilatação. Hemograma, PCR e urina tipo I avaliam a infecção.\n\nConfirmada a litíase obstrutiva infectada, a conduta é antibiótico e desobstrução urgente da via urinária (cateter duplo J ou nefrostomia), deixando a retirada do cálculo para depois que a infecção for controlada.",
    "commentary": "Ultrassonografia com amilase e gama-GT (A): o ultrassom é alternativa útil (gestantes, crianças), mas depende do operador e enxerga mal cálculos no ureter médio; enzimas pancreáticas e hepáticas não têm relação com a hipótese.\n\nRessonância magnética (B): tem baixa sensibilidade para cálculos urinários, é mais demorada e mais cara; não é exame de pronto-socorro para essa suspeita.\n\nRaio X simples com amilase (D): não detecta cálculos radiotransparentes nem os sobrepostos a estruturas ósseas, e não mostra a dilatação da via urinária; amilase de novo é irrelevante.",
    "tip": "Cólica renal + febre = cálculo obstrutivo infectado: TC sem contraste, exames de infecção e desobstruir com urgência.",
    "reference": "Diretrizes SBU - Urolitíase.",
    "tags": [
      "urologia",
      "emergência"
    ]
  },
  {
    "id": "tp2021-69",
    "topography": "3.1",
    "topic": "Doença hemorroidária",
    "module": "Cirurgia",
    "text": "Homem, 50 anos, refere sangramento de cor vermelho “vivo” associado à evacuação, não misturado às fezes, há 1 semana. Relata também dor e abaulamento da região anal com concomitante prurido e ardência local. Ao exame físico: nodulação azulada/vinhosa, dolorosa ao toque, mas redutível com a manobra digital. A conduta é:",
    "options": [
      "(A) Escleroterapia.",
      "(B) Crioterapia.",
      "(C) Hemorroidectomia.",
      "(D) Ligadura elástica."
    ],
    "correctAnswer": 3,
    "explanation": "Na hemorroida interna que prolapsa sob esforço mas recua de forma redutível manualmente (Grau III), aliada a sangramento episódico vermelho vivo na evacuação, o tratamento ambulatorial intervencionista preferencial de primeira linha é a ligadura elástica.",
    "commentary": "Na doença hemorroidária, o sangramento é o sintoma mais comum e, na grande maioria das vezes, não é volumoso e sim intermitente e de pequena monta. O aumento crônico do esforço evacuatório aumenta a possibilidade de surgimento do prolapso hemorroidário devido à flacidez e relaxamento do tecido conjuntivo de fixação do canal anal. Quando há dor aguda persistente, deve-se afastar trombose hemorroidária. Existem várias formas de tratamento ambulatorial para hemorróidas internas: ligadura elástica, escleroterapia, crioterapia, coagulação infravermelha e laser. A ligadura elástica como método de escolha para o tratamento de hemorróidas internas, é o procedimento mais seguro e aceito na literatura médica para o tratamento do sangramento de repetição e prolapso nos graus I, II e III, mostrando melhores resultados consolidados a longo prazo, menor dor pós-procedimento quando comparado ao cirúrgico completo e baixas taxas de recidiva.",
    "reference": "TOWNSEND, CM et al. Sabiston, tratado de Cirurgia: a base biológica da moderna prática cirúrgica. 20ª ed. Rio de Janeiro: Elsevier, 2019.",
    "tags": [
      "coloproctologia",
      "ambulatório"
    ]
  },
  {
    "id": "tp2019-73",
    "topography": "16",
    "topic": "Perfuração de víscera oca",
    "module": "Cirurgia",
    "text": "Homem, 45 anos, tabagista, etilista, deu entrada no PS com queixa de dor de forte intensidade em região mesogástrica de início súbito há 6 horas, após vômitos intensos. Exame físico: hálito etílico, hipocorado 1+/4+, PA = 100 x 60 mmHg, FC = 110 bpm, abdome tenso, em tábua, doloroso à palpação em região de mesogástrio, sinal de Jobert positivo.\n\nO diagnóstico e o exame complementar a se solicitar são, respectivamente:",
    "options": [
      "(A) Gastrite aguda; endoscopia digestiva alta.",
      "(B) Úlcera perfurada; radiografia de tórax com cúpulas.",
      "(C) Úlcera terebrante; tomografia computadorizada de abdome.",
      "(D) Pancreatite aguda; amilase."
    ],
    "correctAnswer": 1,
    "explanation": "Dor abdominal súbita e intensa, abdome em tábua e sinal de Jobert (perda da macicez hepática por ar livre) em tabagista e etilista: úlcera péptica perfurada.\n\nA radiografia de tórax em pé com cúpulas diafragmáticas mostra pneumoperitônio.",
    "commentary": "Gastrite não causa peritonite com pneumoperitônio. A úlcera terebrante penetra órgão vizinho sem ar livre. A pancreatite não causa sinal de Jobert.",
    "reference": "Clínica Cirúrgica; Alipio Correia Neto, Manlio Esperanzini. Manual do Residente de Cirurgia.",
    "tags": [
      "cirurgia",
      "abdome agudo perfurativo"
    ]
  },
  {
    "id": "tp2024-94",
    "topography": "5.2",
    "topic": "Rotura prematura de membranas",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante, 30 semanas, com perda de líquido abrupta pela vagina há 4 horas. Afebril e normotensa, tônus uterino normal, frequência cardíaca fetal de 160 bpm. Ao exame especular, saída de líquido claro pelo colo, com odor de \"água sanitária\". Qual a conduta correta?",
    "options": [
      "(A) Corioamnionite; induzir parto imediatamente.",
      "(B) Iniciar tocólise imediatamente.",
      "(C) Cardiotocografia não tem valor antes de 32 semanas.",
      "(D) Administrar corticosteroides (betametasona ou dexametasona)."
    ],
    "correctAnswer": 3,
    "explanation": "Saída de líquido claro pelo colo, com o odor característico do líquido amniótico, confirma a rotura prematura das membranas ovulares (antes do trabalho de parto), aqui com 30 semanas. Não há febre, dor uterina nem líquido purulento, ou seja, nada que indique infecção, e não há quadro de trabalho de parto.\n\nNessa idade gestacional a conduta é expectante, com internação, e o corticoide para maturação pulmonar fetal é obrigatório entre 24 e 34 semanas: betametasona 12 mg IM, duas doses com 24 horas de intervalo, ou dexametasona 6 mg IM de 12 em 12 horas, quatro doses. Somam-se antibiótico de latência, vigilância de sinais de infecção e avaliação do bem-estar fetal.",
    "commentary": "Corioamnionite (A): exigiria sinais como febre, útero doloroso, líquido purulento ou fétido e taquicardia materna e fetal; a paciente está afebril, com tônus normal e líquido claro.\n\nTocólise imediata (B): não há diagnóstico de trabalho de parto (contrações regulares com modificação do colo); além disso, a tocólise não é rotina na rotura de membranas.\n\nCardiotocografia sem valor (C): o exame tem utilidade nessa idade gestacional, apenas com critérios de aceleração menores antes de 32 semanas; é importante para notar taquicardia fetal e perda de variabilidade, que podem ser os primeiros sinais de infecção.",
    "tip": "Rotura prematura de membranas entre 24 e 34 semanas, sem infecção: internar, corticoide, antibiótico de latência e vigiar infecção.",
    "reference": "Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO). Rotura prematura de membranas ovulares. São Paulo: FEBRASGO; 2021 (Protocolo FEBRASGO Obstetrícia, n. 45/ Comissão Nacional Especializada em Assistência Pré-Natal). Souza E, Fava JL, Musiello RB, Camano L. Trabalho de parto prematuro: uso racional da tocólise. São Paulo: Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO); 2018. Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO). Cardiotocografia anteparto. São Paulo: FEBRASGO; 2021. (Protocolo FEBRASGO-Obstetrícia, n. 17/Comissão Nacional Especializada em Medicina Fetal).",
    "tags": [
      "obstetrícia",
      "prematuridade"
    ]
  },
  {
    "id": "tp2022-88",
    "topography": "5.1",
    "topic": "Climatério e menopausa",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher 52 anos, menopausa há 4 anos, fogachos intensos. Útero presente, endométrio 3mm, mioma intramural de 10mm. Mamografia BI-RADS 2. Sobre TH:",
    "options": [
      "(A) Está indicada apenas a TH com estrogênio.",
      "(B) Pode receber TH combinada (estrogênio + progestagênio).",
      "(C) A presença de mioma contraindica o uso de TH.",
      "(D) Categoria 2 no BI-RADS contraindica o uso de estrogênio."
    ],
    "correctAnswer": 1,
    "explanation": "Mulher de 52 anos, menopausada há 4 anos, com fogachos intensos que atrapalham sua vida: tem indicação de terapia hormonal (TH). Ela está na chamada janela de oportunidade (menos de 60 anos e menos de 10 anos de menopausa), quando os benefícios superam os riscos, e não apresenta contraindicações: não tem câncer de mama, trombose, doença hepática grave nem sangramento genital sem explicação.\n\nComo tem útero, precisa receber estrogênio associado a progestagênio. O progestagênio protege o endométrio da hiperplasia e do câncer que o estrogênio isolado provocaria.",
    "commentary": "Apenas estrogênio (A): a TH só com estrogênio é reservada a mulheres sem útero (histerectomizadas); com útero, aumenta o risco de câncer de endométrio.\n\nMioma contraindica a TH (C): um mioma pequeno (10 mm) e assintomático não contraindica; recomenda-se apenas acompanhar o tamanho e os sintomas.\n\nBI-RADS 2 contraindica o estrogênio (D): a categoria 2 indica achado benigno; o que contraindica a TH é câncer de mama atual ou passado, não uma mamografia benigna.",
    "tip": "Fogacho, menos de 60 anos e menos de 10 anos de menopausa, sem contraindicação: TH. Tem útero? Estrogênio + progestagênio.",
    "reference": "Consenso Brasileiro de Terapêutica Hormonal da Menopausa, 2018.",
    "tags": [
      "climatério",
      "terapia hormonal"
    ]
  },
  {
    "id": "tp2025-100",
    "topography": "5.2",
    "topic": "Isoimunização Rh",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante de 23 anos, está em acompanhamento pré-natal e nega gestações anteriores ou abortamentos. Apresenta tipagem sanguínea AB Rh negativo, com parceiro O Rh positivo. Assinale a alternativa que indica o momento adequado para receber imunoglobulina anti-D, caso o Coombs indireto se mantenha negativo durante a gravidez:",
    "options": [
      "(A) Não há necessidade de imunoglobulina anti-D nessa situação.",
      "(B) Somente após o parto, se o RN for Rh positivo.",
      "(C) Somente no após parto, se o RN for RH positivo e se houver sangramento durante a gravidez.",
      "(D) Entre 28 e 32 semanas de gestação, se houver sangramento durante a gravidez e no pós-parto se o RN for Rh positivo."
    ],
    "correctAnswer": 3,
    "explanation": "A prevenção para isoimunização em gestantes com tipagem sanguínea Rh-negativo não sensibilizadas está balizada na dosagem de imunoglobulina anti-D entre 28 e 32 semanas se detectados sangramentos na gestação atual, devendo ser repetida no pós-parto imediato do concepto comprovado Rh-positivo.",
    "commentary": "A indicação profilática de imunoglobulina anti-D protege contra a produção pós-exposição de anticorpos anti-hemácia fetal Rh em gestantes Rh-negativo não imunizadas (Coombs indireto negativo persitente). O momento adequado para aplicação compreende as 28 a 32 semanas gestacionais se houver quaisquer indícios de hemorragias ou exames traumáticos intra-útero nas semanas precedentes. Igualmente, nova administração no puerpério imediato (em até 72 horas) está indicada se a tipagem do recém-nascido comprovar-se Rh-positivo.",
    "reference": "Freitas F, et al. Isoimunização Rh: abordagem e condutas. J Bras de Gin e Obs, 42(7), 439-445, 2020.",
    "tags": [
      "obstetrícia",
      "imunização na gestação"
    ]
  },
  {
    "id": "tp2026-91",
    "topography": "6.1",
    "topic": "Lúpus eritematoso sistêmico",
    "module": "Ginecologia e Obstetrícia",
    "text": "Primigesta de 24 semanas, com lúpus eritematoso sistêmico, em uso de hidroxicloroquina e azatioprina, refere artralgia em mãos e fadiga há 2 semanas; nega febre, edema ou sintomas urinários. PA 120/78mmHg, exame obstétrico normal. Identifique o próximo passo no planejamento diagnóstico para determinar atividade da doença.",
    "options": [
      "(A) Solicitar biópsia renal em associação com exame de urina e hemograma.",
      "(B) Solicitar ultrassonografia obstétrica com Doppler e avaliação do bem-estar fetal.",
      "(C) Solicitar punção lombar para excluir neurolúpus diante de fadiga em gestante lúpica.",
      "(D) Solicitar complemento sérico (C3/C4), anti-dsDNA, hemograma e provas de atividade inflamatória."
    ],
    "correctAnswer": 3,
    "explanation": "A suspeita de reativação de lúpus eritematoso sistêmico (LES) durante a gestação deve ser investigada laboratorialmente pela dosagem de frações de complemento (C3/C4), anticorpo anti-dsDNA, hemograma completo e provas inflamatórias para confirmar atividade imunológica.",
    "commentary": "Artralgia e fadiga em gestante com LES podem indicar atividade lúpica ativa. O monitoramento imunológico laboratorial com dosagem de complemento (C3 e C4) e títulos de anti-dsDNA é considerado o padrão-ouro; a redução de C3/C4 e a elevação do anti-dsDNA corroboram a atividade de doença. Hemograma e reagentes de fase aguda avaliam manifestações hematológicas (como anemia, plaquetopenia ou leucopenia) e inflamatórias sistêmicas. Sobre os distratores: (A) A biópsia renal é invasiva e só se justifica em caso de forte suspeita de nefrite lúpica ativa (como proteinúria nefrótica, hematúria e piora de função renal). (B) O Doppler avalia a repercussão fetal, mas não afere o grau de atividade da doença materna propriamente dita. (C) A punção lombar é invasiva e inadequada na ausência de sintomas neurológicos objetivos.",
    "reference": "BRASIL. Ministério da Saúde. Manual Técnico de Gestação de Alto Risco. Brasília: MS; 2022. FEBRASGO. Lúpus Eritematoso Sistêmico e Gravidez. São Paulo: FEBRASGO; 2025.",
    "tags": [
      "gestação de alto risco",
      "lúpus",
      "autoimunidade"
    ]
  },
  {
    "id": "tp2024-110",
    "topography": "15",
    "topic": "Imunização",
    "module": "Saúde Coletiva",
    "text": "Qual estratégia é mais abrangente para promover a adesão à imunização infantil, considerando os desafios atuais no Brasil?",
    "options": [
      "Programas de capacitação técnica apenas para vacinadores.",
      "Políticas de conscientização com foco na redução da desigualdade de acesso e determinantes sociais.",
      "Incentivos financeiros diretos para famílias que vacinam.",
      "Vigilância intensificada apenas em regiões com alta cobertura anterior."
    ],
    "correctAnswer": 1,
    "explanation": "A queda da cobertura vacinal infantil no Brasil tem várias causas: dificuldade de acesso (distância, horário de funcionamento das salas de vacina, falta de imunizantes), desigualdades sociais e regionais, desinformação e hesitação vacinal. Uma estratégia abrangente precisa atuar sobre esse conjunto.\n\nPor isso a melhor alternativa é a que une conscientização da população com redução das desigualdades de acesso, considerando os determinantes sociais da saúde. Ela segue o princípio constitucional de acesso universal e igualitário e alcança justamente os grupos com menor cobertura.",
    "commentary": "Capacitação só dos vacinadores (A): melhora a qualidade do atendimento, mas não resolve barreiras de acesso, desigualdade nem desinformação das famílias.\n\nIncentivo financeiro às famílias (C): é uma medida pontual, que depende de parceria privada e não atua sobre as causas estruturais da baixa adesão.\n\nVigilância só em regiões de alta cobertura (D): concentra o esforço justamente onde o problema é menor e deixa de lado as áreas com baixa cobertura.",
    "tip": "Pergunta sobre a estratégia \"mais abrangente\" em saúde coletiva: procure a que fala em determinantes sociais e redução de desigualdades.",
    "reference": "BRASIL. Constituição da República Federativa do Brasil. 18.ed. Brasília, DF: Senado, 1988. BRASIL. Lei 8.080, de 19 de setembro de 1990. Dispõe sobre as condições para a promoção, proteção e recuperação da saúde, a organização e o funcionamento dos serviços correspondentes e dá outras providências. Diário Oficial da União, Brasília, DF, 19 set. 1990a. Seção 1. GUSSO, Gustavo et al. Tratado de medicina de família e comunidade: princípios, formação e prática. 2. ed. V. 1 e 2. Porto Alegre: Artmed, 2019, xxii, 938. p",
    "tags": [
      "imunização",
      "saúde pública",
      "equidade"
    ]
  },
  {
    "id": "tp2022-103",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "Gestante atendida em UBS após crise convulsiva recebe medicação, cadastro no pré-natal e encaminhamento ao neurologista da rede municipal. Quais princípios doutrinários do SUS foram atendidos?",
    "options": [
      "(A) Universalidade e Regionalização.",
      "(B) Intersetorialidade e Equidade.",
      "(C) Universalidade e Integralidade.",
      "(D) Integralidade e Territorialização."
    ],
    "correctAnswer": 2,
    "explanation": "O acesso à UBS (Universalidade) e o cuidado que vai da atenção primária à especializada (Integralidade) exemplificam esses princípios.",
    "commentary": "A universalidade garante o acesso. A integralidade é vista no atendimento que considera todas as necessidades da paciente, articulando diferentes níveis de complexidade.",
    "reference": "Lei nº 8.080/1990.",
    "tags": [
      "SUS",
      "políticas de saúde"
    ]
  },
  {
    "id": "tp2021-104",
    "topography": "2.2",
    "topic": "Hipertensão arterial sistêmica",
    "module": "Saúde Coletiva",
    "text": "Mulher, 67 anos, PA = 160 x 90 mmHg, informa que é hipertensa e diabética há cerca de 10 anos. Teve infarto anterior do miocárdio (IAM) há dois anos. É tabagista e sedentária. O médico de família decide fazer a estratificação de risco cardiovascular, para definir sua estratégia de acompanhamento. O risco cardiovascular e o plano de cuidado a ser adotado, são respectivamente:",
    "options": [
      "(A) Risco moderado; mudança de estilo de vida e tratamento não medicamentoso.",
      "(B) Risco baixo; mudança de estilo de vida e tratamento não medicamentoso.",
      "(C) Risco alto; mudança de estilo de vida e tratamento medicamentoso.",
      "(D) Risco baixo; mudança de estilo de vida e tratamento medicamentoso."
    ],
    "correctAnswer": 2,
    "explanation": "Visto que a paciente possui diagnóstico estabelecido de diabetes mellitus associado a uma lesão em órgão-alvo em consequência de evento cardiovascular prévio (Infarto Agudo do Miocárdio), o seu risco cardiovascular é obrigatoriamente estratificado como Alto. Portanto, as diretrizes vigentes apontam para a implementação imediata de mudanças de estilo de vida (tratamento não medicamentoso) associada ao tratamento medicamentoso apropriado.",
    "commentary": "A classificação de Alto Risco Cardiovascular é compulsória na presença de doença cardiovascular clinicamente manifesta (como infarto prévio), lesão de órgão-alvo ou diabetes complicado. O plano de atenção à saúde para portadores de risco cardiovascular elevado deve, indubitavelmente, coordenar ampla intervenção farmacológica contínua em paralelo a mudanças dietéticas e de atividade física.",
    "reference": "Diretrizes Brasileiras de Hipertensão Arterial, SBC, 2020; Caderno de Atenção Básica nº 14, Prevenção Clínica de Doenças Cardiovasculares, Ministério da Saúde.",
    "tags": [
      "risco cardiovascular",
      "hipertensão",
      "diabetes"
    ]
  },
  {
    "id": "tp2019-103",
    "topography": "15",
    "topic": "Epidemiologia",
    "module": "Saúde Coletiva",
    "text": "No Brasil, o perfil de morbimortalidade passou do predomínio de doenças infectocontagiosas para o predomínio de doenças crônicas não transmissíveis.\n\nEsse fenômeno é denominado:",
    "options": [
      "(A) Falácia ecológica",
      "(B) Perfil de morbimortalidade da população",
      "(C) Transição epidemiológica",
      "(D) Evolução natural das doenças"
    ],
    "correctAnswer": 2,
    "explanation": "A transição epidemiológica é a mudança, a longo prazo, dos padrões de morbimortalidade de uma população — no Brasil, o predomínio passou das doenças infecciosas para as doenças crônicas não transmissíveis, acompanhando a transição demográfica.",
    "commentary": "A falácia ecológica é um erro de inferência em estudos ecológicos. 'Perfil de morbimortalidade' e 'evolução natural das doenças' não nomeiam o fenômeno.",
    "reference": "Medronho RA, Carvalho DM, Bloch KV, Luiz RR, Werneck GL. Epidemiologia. São Paulo: Atheneu, 2006. / Rouquayrol MZ, Gurgel M. Epidemiologia e saúde. 8ª Ed. Rio de Janeiro: MedBook, 2018.",
    "tags": [
      "saúde coletiva",
      "epidemiologia",
      "transição epidemiológica"
    ]
  },
  {
    "id": "tp2022-18",
    "topography": "1.1",
    "topic": "Meningite",
    "module": "Ciências Básicas",
    "text": "Criança de 4 anos é atendida no pronto-socorro com história de um dia de febre alta e cefaleia intensa. Ao exame, nota-se rigidez de nuca. A amostra colhida do líquor apresenta conteúdo turvo e na bacterioscopia visualizam-se diplococos Gram-negativos. O provável patógeno é:",
    "options": [
      "(A) Streptococcus pneumoniae",
      "(B) Staphylococcus aureus",
      "(C) Neisseria meningitidis",
      "(D) Haemophilus influenzae"
    ],
    "correctAnswer": 2,
    "explanation": "Febre alta, cefaleia intensa e rigidez de nuca com líquor turvo indicam meningite bacteriana. A bacterioscopia com diplococos Gram-negativos aponta para Neisseria meningitidis, o meningococo, que também pode causar meningococcemia com petéquias e choque.\n\nNa prática: iniciar ceftriaxona sem atraso, notificar imediatamente e fazer quimioprofilaxia dos contatos próximos (rifampicina é a opção mais usada).",
    "commentary": "Streptococcus pneumoniae (A): também causa meningite, mas aparece como diplococo Gram-positivo (lanceolado).\n\nStaphylococcus aureus (B): é coco Gram-positivo em cachos e é causa rara de meningite fora de contexto de neurocirurgia, trauma ou derivação.\n\nHaemophilus influenzae (D): causa meningite em crianças pequenas (hoje rara com a vacina), mas é cocobacilo Gram-negativo, não diplococo.",
    "tip": "Líquor com diplococo Gram-negativo = meningococo; Gram-positivo = pneumococo; cocobacilo Gram-negativo = Haemophilus.",
    "reference": "JAWETZ, E. et al. Microbiologia médica. 21. ed. Rio de Janeiro: Guanabara Koogan, 2000.",
    "tags": [
      "microbiologia",
      "pediatria",
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
    "id": "tp2020-8",
    "topography": "7.2",
    "topic": "Hanseníase",
    "module": "Ciências Básicas",
    "text": "Paciente do sexo feminino, 45 anos, apresenta-se em Unidade de Pronto Atendimento com queixa de perda da sensibilidade nas mãos. Ao exame físico foram evidenciados nódulos eritemato-acastanhados, com aspecto de queloides ou fibromas. Foi realizada uma biópsia com achados histopatológicos de macrófagos com citoplasma repleto de bacilos de Hansen, formando acúmulos denominados Globias.\n\nO diagnóstico definitivo é:",
    "options": [
      "(A) Hanseníase Dimorfa",
      "(B) Hanseníase Virchowiana",
      "(C) Hanseníase Tuberculoide",
      "(D) Hanseníase Indeterminada"
    ],
    "correctAnswer": 1,
    "explanation": "Macrófagos repletos de bacilos formando globias (aglomerados de bacilos) são achado típico da hanseníase virchowiana, o polo de baixa resposta imune celular, com nódulos e infiltração cutânea (hansenomas).",
    "commentary": "Na forma tuberculoide há granulomas epitelioides bem formados, com poucos ou nenhum bacilo. A dimorfa tem padrão intermediário. A indeterminada tem infiltrado inespecífico.",
    "reference": "KUMAR, V.; ABBAS, A. K.; FAUSTO, N.; MITCHELL, R. N. Robbins. Patologia básica. 8. ed. Rio de Janeiro: Elsevier, 2008.",
    "tags": [
      "patologia",
      "hanseníase"
    ]
  },
  {
    "id": "enamed-2025-66",
    "topography": "10",
    "topic": "Sífilis",
    "module": "Clínica Médica",
    "text": "Homem de 24 anos comparece à Unidade Básica de Saúde (UBS) para avaliação de lesão ulcerada em pênis com cerca de 10 dias de evolução. Refere relação sexual desprotegida há aproximadamente 3 semanas. Ao exame físico, observa-se úlcera única, de bordas elevadas, endurecidas, indolor e com fundo limpo. Linfonodos inguinais discretamente aumentados, móveis e indolores.\n\nO diagnóstico mais provável e o tratamento indicado são, respectivamente,",
    "options": [
      "(A) Cancro mole; azitromicina 1 g VO em dose única.",
      "(B) Herpes genital; aciclovir 400 mg VO por 7 dias.",
      "(C) Sífilis primária; penicilina benzatina 2,4 milhões UI IM em dose única.",
      "(D) Linfogranuloma venéreo; doxiciclina 100 mg VO por 21 dias."
    ],
    "correctAnswer": 2,
    "explanation": "A lesão descrita corresponde ao cancro duro, manifestação clássica da sífilis primária, causada pelo Treponema pallidum. Caracteriza-se por ser uma úlcera única, de bordas elevadas e endurecidas, indolor, de fundo limpo, frequentemente associada à linfadenomegalia inguinal indolor e bilateral. O tratamento de escolha recomendado pelo Ministério da Saúde é a penicilina G benzatina 2,4 milhões UI IM em dose única.",
    "commentary": "O cancro mole (A) apresenta lesões múltiplas, dolorosas, com fundo purulento e linfadenite que fistuliza por orifício único (asclere). O herpes genital (B) cursa com múltiplas vesículas que evoluem para úlceras rasas dolorosas e recorrentes. O linfogranuloma venéreo (D) se manifesta por pápula/pústula efêmera seguida por adenopatia inguinal dolorosa com múltiplos orifícios de drenagem (bico de regador).",
    "reference": "Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com Infecções Sexualmente Transmitíveis (PCDT-IST) - Ministério da Saúde",
    "tags": [
      "infectologia",
      "ginecologia",
      "urologia",
      "sífilis",
      "IST"
    ]
  },
  {
    "id": "enamed-2026-21",
    "topography": "13",
    "topic": "Transtorno bipolar",
    "module": "Clínica Médica",
    "text": "Mulher de 30 anos chega ao Centro de Atenção Psicossocial animada, inquieta e falante, andando de um lado para outro, cumprimentando todas as pessoas com sorrisos exagerados e fazendo comentários animados a respeito de coisas aleatórias, emendando os assuntos. O médico que costuma atendê-la percebe que ela está diferente, mais “elétrica” que seu habitual, sendo impossível interrompê-la.\n\nAs alterações psicopatológicas apresentadas por essa paciente incluem",
    "options": [
      "(A) humor disfórico, esterotipias vocais e agitação psicomotora.",
      "(B) humor hipotímico, apragmatismo e afrouxamento de associações.",
      "(C) humor eutímico, fuga de ideias e avolia.",
      "(D) humor hipertímico, taquipsiquismo e taquilalia."
    ],
    "correctAnswer": 3,
    "explanation": "A paciente está animada, expansiva, falante, sem possibilidade de ser interrompida e emendando assuntos — quadro de episódio maníaco/hipomaníaco.\n\nOs termos psicopatológicos corretos são humor hipertímico (elevado), taquipsiquismo (aceleração do pensamento) e taquilalia (aceleração do discurso).",
    "commentary": "Disforia é humor irritável/desagradável; hipotimia é humor deprimido; eutimia é humor normal. Estereotipias, apragmatismo e avolia não estão descritos. (Gabarito preliminar do INEP.)",
    "reference": "Dalgalarrondo P. Psicopatologia e semiologia dos transtornos mentais",
    "tags": [
      "psiquiatria",
      "psicopatologia",
      "transtorno bipolar"
    ]
  },
  {
    "id": "unifesp2025-3",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Homem, 24 anos de idade, é admitido no PS por acidente automobilístico. Exame físico: via aérea pérvia, pneumotórax esquerdo com fratura linear da 3ª, 4ª e 5ª costelas, estável hemodinamicamente, sinais de trauma raquimedular em L3-L4, múltiplas fraturas em membros superiores e inferiores. Exames de imagem: ausência de outras lesões no abdômen e na pelve.\n\nCom relação à drenagem da via urinária, qual é a conduta mais adequada?",
    "options": [
      "(A) Sondagem vesical de demora.",
      "(B) Cistostomia supra-púbica.",
      "(C) Cateterismo intermitente.",
      "(D) Nefrostomia bilateral guiada por radiointervenção."
    ],
    "correctAnswer": 0,
    "explanation": "Politraumatizado com trauma raquimedular lombar alto evolui com bexiga neurogênica na fase de choque medular (retenção urinária), e precisa de controle rigoroso da diurese na fase aguda.\n\nSem lesão uretral (não há sangue no meato, hematoma perineal ou fratura de pelve), a conduta é a sondagem vesical de demora. Ela garante a drenagem e permite medir o débito urinário durante a reanimação. O cateterismo intermitente fica para depois, quando o paciente estiver estável e a reposição volêmica estabilizada.",
    "commentary": "Cistostomia (B): reservada para lesão de uretra ou impossibilidade de cateterismo transuretral, ausentes no caso.\n\nCateterismo intermitente (C): é o método de escolha a longo prazo na bexiga neurogênica, mas não na fase aguda do politrauma, quando é preciso monitorar a diurese.\n\nNefrostomia bilateral (D): trata obstrução do trato urinário alto, que não existe aqui.",
    "reference": "ATLS — Advanced Trauma Life Support, 10ª ed. / Diretrizes de bexiga neurogênica no trauma raquimedular (SBU)",
    "tags": [
      "trauma",
      "trauma raquimedular",
      "bexiga neurogênica",
      "urologia"
    ]
  },
  {
    "id": "unifesp2025-35",
    "topography": "7.2",
    "topic": "Hanseníase",
    "module": "Clínica Médica",
    "text": "Homem, 40 anos de idade, está em tratamento para hanseníase dimorfo-virchowiana há 2 meses com poliquimioterapia multibacilar. Refere, há três dias, “caroços” dolorosos na face, tronco e membros, associados a febre de 38,5°C, edema nas mãos e pés, e dor no trajeto dos nervos ulnares bilateralmente.\n\nQual é a conduta mais adequada?",
    "options": [
      "(A) Suspender o tratamento para a hanseníase e iniciar anti-inflamatórios não hormonais.",
      "(B) Manter o tratamento para a hanseníase e associar claritromicina.",
      "(C) Suspender o tratamento para a hanseníase e iniciar metotrexato via oral.",
      "(D) Manter o tratamento para a hanseníase e iniciar prednisona e talidomida."
    ],
    "correctAnswer": 3,
    "explanation": "Paciente multibacilar (dimorfo-virchowiano) em tratamento que desenvolve nódulos dolorosos disseminados, febre, edema de extremidades e neurite: reação hansênica tipo 2 (eritema nodoso hansênico), com acometimento neural.\n\nA poliquimioterapia não deve ser suspensa durante as reações. A talidomida é a droga de escolha no ENH (homem, sem risco de gestação). Como há neurite, associa-se prednisona (1 mg/kg/dia), que protege o nervo.",
    "commentary": "Suspender PQT e usar AINE (A): a PQT nunca é suspensa por reação, e o AINE é insuficiente diante de neurite.\n\nAssociar claritromicina (B): é droga alternativa para a infecção (em resistência ou intolerância), não trata a reação imunológica.\n\nSuspender PQT e usar metotrexato (C): o tratamento não deve ser suspenso, e o metotrexato é opção de terceira linha em ENH refratário.",
    "reference": "Diretrizes para vigilância, atenção e eliminação da hanseníase — Ministério da Saúde, 2016 / Protocolo Clínico e Diretrizes Terapêuticas da Hanseníase (2022)",
    "tags": [
      "dermatologia",
      "hanseníase",
      "reação hansênica",
      "eritema nodoso hansênico"
    ]
  },
  {
    "id": "unifesp2025-75",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Secundigesta, 39 anos de idade, 26 semanas, diabética gestacional controlada com dieta, vem à consulta de pré-natal. Hemoglobina de 10,9 g/dL, hematócrito 32%, VCM 78 fL, HCM 25 pg, ferritina 10 ng/mL, eletroforese de hemoglobina normal.\n\nQual é a conduta mais adequada?",
    "options": [
      "(A) Ferro oral na dose de 30 mg/dia e reavaliação em 8 semanas.",
      "(B) Ferro oral na dose de 160 a 200 mg/dia e reavaliação em 4 semanas.",
      "(C) Sacarato de hidróxido de ferro parenteral e reavaliação em 1 semana.",
      "(D) Aumentar ingestão de ferro na dieta e reavaliação em 8 semanas."
    ],
    "correctAnswer": 1,
    "explanation": "Anemia ferropriva na gestação: Hb 10,9 g/dL (abaixo de 11 g/dL), microcitose e hipocromia, ferritina de 10 ng/mL e eletroforese normal (afasta talassemia).\n\nO tratamento é ferro elementar oral em dose terapêutica, que no protocolo do Ministério da Saúde para anemia leve a moderada é de cerca de 120 a 240 mg/dia (ex.: 5 drágeas de 40 mg de sulfato ferroso). Reavalia-se em 4 semanas, esperando elevação da Hb (cerca de 1 g/dL) e reticulocitose.",
    "commentary": "30 mg/dia (A): é a dose profilática, insuficiente para tratar anemia já instalada.\n\nFerro parenteral (C): reservado para intolerância ou falha do ferro oral, anemia grave ou necessidade de reposição rápida no fim da gestação.\n\nSó dieta (D): não corrige anemia ferropriva com estoques depletados.",
    "reference": "Manual de Gestação de Alto Risco — Ministério da Saúde, 2022 / Cadernos de Atenção Básica nº 32 — Pré-natal de baixo risco",
    "tags": [
      "obstetrícia",
      "anemia ferropriva",
      "pré-natal",
      "sulfato ferroso"
    ]
  },
  {
    "id": "hosbos2027-46",
    "module": "Ginecologia e Obstetrícia",
    "text": "O ciclo menstrual caracteriza-se por uma série de eventos que ocorrem em diversos níveis do eixo “hipotálamo-hipófise-ovário”.\n\nEm relação a esse ciclo, assinale a alternativa correta.",
    "options": [
      "(A) A hipófise posterior produz FSH, LH e TSH e cada hormônio é produzido por uma célula diferente.",
      "(B) A inibina é um peptídeo produzido no ovário pelas células da teca e está ligada a SHBG.",
      "(C) O GnRH é sintetizado no hipotálamo e é liberado de forma pulsátil na circulação porta-hipofisária.",
      "(D) O GnRH age sobre a neuro hipófise estimulando a secreção de FSH e LH.",
      "(E) Estrogênio e progesterona são gonadotrofinas que fazem feedback negativo na adeno-hipófise."
    ],
    "correctAnswer": 2,
    "explanation": "O GnRH é um decapeptídeo sintetizado no hipotálamo (núcleo arqueado) e liberado de forma pulsátil no sistema porta hipotálamo-hipofisário. A frequência e a amplitude desses pulsos determinam a secreção de FSH e LH pela adeno-hipófise.\n\nA liberação contínua, como ocorre com os análogos de GnRH, dessensibiliza os receptores e suprime o eixo.",
    "commentary": "Hipófise posterior produz FSH, LH e TSH (A): essas glicoproteínas são da adeno-hipófise (anterior); FSH e LH vêm do mesmo gonadotrofo.\n\nInibina da teca ligada à SHBG (B): a inibina é produzida pelas células da granulosa e não se liga à SHBG, que transporta esteroides sexuais.\n\nGnRH age sobre a neuro-hipófise (D): age sobre a adeno-hipófise.\n\nEstrogênio e progesterona são gonadotrofinas (E): são esteroides ovarianos; gonadotrofinas são FSH e LH.",
    "reference": "Speroff — Endocrinologia Ginecológica Clínica e Infertilidade / Febrasgo — Tratado de Ginecologia",
    "tags": [
      "ginecologia",
      "ciclo menstrual",
      "eixo hipotálamo-hipófise-ovário",
      "GnRH"
    ]
  },
  {
    "id": "usprp2025-50",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Secundigesta (G2P0A1), 26 anos, com atraso menstrual de 18 semanas, inicia pré-natal hoje após teste de gravidez positivo. Nega doenças ou intercorrências até o momento. Exame físico geral sem alterações. A altura uterina é de 26cm. Fez ultrassonografia hoje, com achado de gestação gemelar dicoriônica, com idade gestacional de 24 semanas, achados fetais e anexiais normais.\n\nCom relação à profilaxia de pré-eclâmpsia, nesse caso, a alternativa correta é:",
    "options": [
      "(A) Iniciar ácido acetilsalicílico e cálcio.",
      "(B) Prescrever ácido acetilsalicílico.",
      "(C) Prescrever ácido acetilsalicílico e enoxaparina.",
      "(D) Não deve ser prescrita."
    ],
    "correctAnswer": 3,
    "explanation": "A gestação gemelar é fator de alto risco para pré-eclâmpsia e indicaria AAS em dose baixa (com cálcio se a ingesta for baixa). Mas o benefício do AAS depende do início precoce, idealmente entre 12 e 16 semanas, pois ele atua na placentação.\n\nA ultrassonografia, mais confiável que a DUM incerta, data a gestação em 24 semanas. Fora da janela recomendada pelas diretrizes brasileiras (até 16–20 semanas), o gabarito entende que não deve ser prescrito.",
    "commentary": "AAS e cálcio (A): seria a conduta se a gestação estivesse dentro da janela de início.\n\nAAS isolado (B): mesmo problema de época de início.\n\nAAS e enoxaparina (C): a enoxaparina não previne pré-eclâmpsia.",
    "reference": "Febrasgo/RBEHG — Prevenção da pré-eclâmpsia / ACOG Committee Opinion 743",
    "tags": [
      "obstetrícia",
      "pré-eclâmpsia",
      "ácido acetilsalicílico",
      "gestação gemelar"
    ],
    "alert": "Gabarito discutível: a ACOG admite iniciar o AAS até 28 semanas (idealmente antes de 16). O gabarito segue a janela das diretrizes brasileiras e considera que, com 24 semanas, não se deve prescrever."
  },
  {
    "id": "scmbh2026-48",
    "topography": "15",
    "topic": "Testes diagnósticos",
    "module": "Saúde Coletiva",
    "text": "“Quanto maiores os coeficientes de verossimilhança (likelihood ratios, LR+) e quanto menores os LR−, __________ a capacidade do teste de modificar a probabilidade pós-teste.”\n\nAssinale a alternativa que preenche CORRETAMENTE a lacuna.",
    "options": [
      "(A) Menor",
      "(B) Maior",
      "(C) Igual",
      "(D) Irrelevante"
    ],
    "correctAnswer": 1,
    "explanation": "A razão de verossimilhança positiva (LR+ = sensibilidade / (1 – especificidade)) indica quanto um resultado positivo aumenta a chance da doença. A LR– ((1 – sensibilidade) / especificidade) indica quanto um negativo a reduz.\n\nQuanto maior a LR+ (acima de 10 é forte) e menor a LR– (abaixo de 0,1 é forte), maior a capacidade do teste de modificar a probabilidade pós-teste.",
    "commentary": "Menor (A): inverte a relação.\n\nIgual (C): as razões de verossimilhança alteram a probabilidade, salvo quando valem 1.\n\nIrrelevante (D): as razões de verossimilhança são justamente a medida desse poder de modificação.",
    "reference": "Fletcher — Epidemiologia Clínica (Diagnóstico) / Sackett — Medicina Baseada em Evidências",
    "tags": [
      "epidemiologia",
      "razão de verossimilhança",
      "testes diagnósticos",
      "probabilidade pós-teste"
    ]
  }
];
