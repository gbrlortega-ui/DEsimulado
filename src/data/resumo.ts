// Arquivo gerado por `npm run gen` a partir do banco de questões. Não editar à mão.
// O build e o servidor local regeneram este arquivo sozinhos; o `npm run validate` acusa se ficar desatualizado.
import type { Question } from '../types';

export const TOTAL_QUESTIONS = 2844;

export const COUNT_BY_AREA: Record<string, number> = {
  "Pediatria": 539,
  "Clínica Médica": 579,
  "Cirurgia": 516,
  "Ginecologia e Obstetrícia": 531,
  "Saúde Coletiva": 519,
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
    "label": "AMRIGS 2025",
    "kind": "Residência",
    "year": 2025,
    "count": 100
  },
  {
    "label": "CERMAN 2025",
    "kind": "Residência",
    "year": 2025,
    "count": 100
  },
  {
    "label": "CESUPA 2025",
    "kind": "Residência",
    "year": 2025,
    "count": 50
  },
  {
    "label": "HIAE 2025",
    "kind": "Residência",
    "year": 2025,
    "count": 75
  },
  {
    "label": "HOS-BOS 2025",
    "kind": "Residência",
    "year": 2025,
    "count": 100
  },
  {
    "label": "REVALIDA 2025/1",
    "kind": "Residência",
    "year": 2025,
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
    "label": "AMP 2026",
    "kind": "Residência",
    "year": 2026,
    "count": 100
  },
  {
    "label": "AMRIGS 2026",
    "kind": "Residência",
    "year": 2026,
    "count": 100
  },
  {
    "label": "CERMAN 2026",
    "kind": "Residência",
    "year": 2026,
    "count": 100
  },
  {
    "label": "DANTE 2026",
    "kind": "Residência",
    "year": 2026,
    "count": 80
  },
  {
    "label": "HPP 2026",
    "kind": "Residência",
    "year": 2026,
    "count": 100
  },
  {
    "label": "HSRC 2026",
    "kind": "Residência",
    "year": 2026,
    "count": 50
  },
  {
    "label": "IOG 2026",
    "kind": "Residência",
    "year": 2026,
    "count": 50
  },
  {
    "label": "SCM-BH 2026",
    "kind": "Residência",
    "year": 2026,
    "count": 75
  },
  {
    "label": "SES-PE 2026",
    "kind": "Residência",
    "year": 2026,
    "count": 100
  },
  {
    "label": "UNIMED-PB 2026",
    "kind": "Residência",
    "year": 2026,
    "count": 60
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
    "key": "AMRIGS",
    "label": "AMRIGS",
    "kind": "Residência",
    "years": "2025–2026",
    "count": 200
  },
  {
    "key": "CERMAN",
    "label": "CERMAN",
    "kind": "Residência",
    "years": "2025–2026",
    "count": 200
  },
  {
    "key": "CESUPA",
    "label": "CESUPA",
    "kind": "Residência",
    "years": "2025",
    "count": 50
  },
  {
    "key": "HIAE",
    "label": "HIAE",
    "kind": "Residência",
    "years": "2025",
    "count": 75
  },
  {
    "key": "HOS-BOS",
    "label": "HOS-BOS",
    "kind": "Residência",
    "years": "2025–2027",
    "count": 200
  },
  {
    "key": "REVALIDA",
    "label": "REVALIDA",
    "kind": "Residência",
    "years": "2025/1",
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
    "key": "AMP",
    "label": "AMP",
    "kind": "Residência",
    "years": "2026",
    "count": 100
  },
  {
    "key": "DANTE",
    "label": "DANTE",
    "kind": "Residência",
    "years": "2026",
    "count": 80
  },
  {
    "key": "HPP",
    "label": "HPP",
    "kind": "Residência",
    "years": "2026",
    "count": 100
  },
  {
    "key": "HSRC",
    "label": "HSRC",
    "kind": "Residência",
    "years": "2026",
    "count": 50
  },
  {
    "key": "IOG",
    "label": "IOG",
    "kind": "Residência",
    "years": "2026",
    "count": 50
  },
  {
    "key": "SCM-BH",
    "label": "SCM-BH",
    "kind": "Residência",
    "years": "2026",
    "count": 75
  },
  {
    "key": "SES-PE",
    "label": "SES-PE",
    "kind": "Residência",
    "years": "2026",
    "count": 100
  },
  {
    "key": "UNIMED-PB",
    "label": "UNIMED-PB",
    "kind": "Residência",
    "years": "2026",
    "count": 60
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
  "Cirurgia|HOS-BOS": 40,
  "Clínica Médica|HOS-BOS": 40,
  "Ginecologia e Obstetrícia|HOS-BOS": 40,
  "Pediatria|HOS-BOS": 41,
  "Saúde Coletiva|HOS-BOS": 39,
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
  "Saúde Coletiva|REVALIDA": 22,
  "Pediatria|UNIMED-PB": 12,
  "Ginecologia e Obstetrícia|UNIMED-PB": 12,
  "Clínica Médica|UNIMED-PB": 12,
  "Cirurgia|UNIMED-PB": 12,
  "Saúde Coletiva|UNIMED-PB": 12,
  "Clínica Médica|IOG": 10,
  "Cirurgia|IOG": 10,
  "Ginecologia e Obstetrícia|IOG": 10,
  "Pediatria|IOG": 10,
  "Saúde Coletiva|IOG": 10,
  "Clínica Médica|SES-PE": 20,
  "Cirurgia|SES-PE": 20,
  "Ginecologia e Obstetrícia|SES-PE": 20,
  "Pediatria|SES-PE": 20,
  "Saúde Coletiva|SES-PE": 20,
  "Clínica Médica|HPP": 20,
  "Cirurgia|HPP": 20,
  "Pediatria|HPP": 20,
  "Ginecologia e Obstetrícia|HPP": 20,
  "Saúde Coletiva|HPP": 20,
  "Clínica Médica|CESUPA": 10,
  "Saúde Coletiva|CESUPA": 10,
  "Cirurgia|CESUPA": 10,
  "Ginecologia e Obstetrícia|CESUPA": 10,
  "Pediatria|CESUPA": 10,
  "Clínica Médica|DANTE": 16,
  "Cirurgia|DANTE": 16,
  "Pediatria|DANTE": 16,
  "Ginecologia e Obstetrícia|DANTE": 16,
  "Saúde Coletiva|DANTE": 16,
  "Clínica Médica|HSRC": 10,
  "Pediatria|HSRC": 10,
  "Cirurgia|HSRC": 10,
  "Ginecologia e Obstetrícia|HSRC": 10,
  "Saúde Coletiva|HSRC": 10,
  "Pediatria|AMP": 19,
  "Saúde Coletiva|AMP": 22,
  "Ginecologia e Obstetrícia|AMP": 20,
  "Clínica Médica|AMP": 19,
  "Cirurgia|AMP": 20,
  "Clínica Médica|AMRIGS": 47,
  "Cirurgia|AMRIGS": 40,
  "Ginecologia e Obstetrícia|AMRIGS": 39,
  "Pediatria|AMRIGS": 40,
  "Saúde Coletiva|AMRIGS": 34,
  "Clínica Médica|CERMAN": 41,
  "Cirurgia|CERMAN": 40,
  "Ginecologia e Obstetrícia|CERMAN": 40,
  "Pediatria|CERMAN": 41,
  "Saúde Coletiva|CERMAN": 38
};

/** Questões por especialidade ou região da topografia ("1.1", "8"). */
export const TOPOGRAPHY_COUNT: Record<string, number> = {
  "8": 72,
  "9": 67,
  "10": 115,
  "11": 279,
  "12": 27,
  "13": 53,
  "14": 119,
  "15": 421,
  "16": 168,
  "1.2": 15,
  "1.3": 26,
  "7.2": 41,
  "4.2": 27,
  "1.1": 81,
  "1.5": 31,
  "6.1": 47,
  "3.1": 93,
  "4.1": 79,
  "2.1": 92,
  "6.2": 23,
  "2.2": 100,
  "3.2": 33,
  "3.3": 33,
  "7.1": 29,
  "1.4": 3,
  "3.4": 21,
  "5.1": 203,
  "5.2": 247
};

/** Questões por assunto, na chave "1.1|Cefaleias". */
export const TOPIC_COUNT: Record<string, number> = {
  "11|Puericultura": 31,
  "1.2|Catarata": 5,
  "11|Icterícia neonatal": 10,
  "11|Obesidade infantil": 9,
  "1.3|Amigdalite/faringoamigdalite": 12,
  "7.2|Urticária": 1,
  "1.2|Uveíte": 2,
  "4.2|Estenose de uretra": 2,
  "11|Calendário vacinal": 17,
  "1.1|TCE": 15,
  "11|Maus-tratos infantis": 16,
  "11|Prematuridade": 3,
  "11|Anemia ferropriva": 15,
  "9|Trombocitopenias": 5,
  "11|Aleitamento materno": 22,
  "1.5|Hipotireoidismo": 8,
  "11|Síndrome do desconforto respiratório neonatal": 8,
  "14|Emergências pediátricas": 14,
  "6.1|Artrite reumatoide": 7,
  "9|Talassemias": 2,
  "11|ITU pediátrica": 7,
  "11|Diarreia aguda": 10,
  "14|Trauma": 39,
  "11|Cardiopatias congênitas": 22,
  "3.1|Constipação intestinal": 6,
  "10|Raiva": 6,
  "1.1|Cefaleias": 9,
  "1.3|Surdez": 2,
  "11|Desenvolvimento neuropsicomotor": 22,
  "9|Anemia falciforme": 7,
  "11|Asma infantil": 19,
  "11|Doença de Kawasaki": 3,
  "1.5|Hipertireoidismo": 11,
  "11|Desidratação": 12,
  "11|Sepse neonatal": 7,
  "9|Leucemias": 9,
  "1.3|Otite média aguda": 2,
  "11|Convulsão febril": 5,
  "11|Pneumonia infantil": 11,
  "11|Refluxo gastroesofágico": 2,
  "11|Bronquiolite": 11,
  "11|Desnutrição": 4,
  "10|Sífilis": 20,
  "4.1|Síndrome nefrítica": 4,
  "2.1|Bronquiectasias": 2,
  "8|Insuficiência adrenal": 6,
  "6.2|Escoliose": 2,
  "14|Intoxicações": 15,
  "15|Ética médica": 19,
  "4.1|Síndrome nefrótica": 8,
  "1.3|Laringite": 3,
  "7.2|Dermatite atópica": 4,
  "14|Sepse e choque séptico": 13,
  "8|Síndrome de Cushing": 3,
  "4.2|Torção testicular": 6,
  "2.2|Arritmias": 7,
  "9|Anemias": 3,
  "10|Tétano": 1,
  "8|Feocromocitoma": 2,
  "9|Linfomas": 3,
  "8|Cetoacidose diabética": 15,
  "3.1|Diarreia crônica": 3,
  "1.2|Erros refrativos": 1,
  "10|Dengue": 15,
  "4.1|Distúrbios hidroeletrolíticos": 10,
  "4.1|Lesão renal aguda": 14,
  "8|Diabetes mellitus tipo 1 e 2": 27,
  "1.1|Demências": 7,
  "6.1|Lúpus eritematoso sistêmico": 8,
  "1.1|Epilepsia": 9,
  "10|Tuberculose": 23,
  "2.1|DPOC": 20,
  "9|Anemia ferropriva": 6,
  "3.2|Hepatites virais": 5,
  "2.2|Dislipidemia": 8,
  "2.2|Insuficiência cardíaca": 13,
  "2.2|Hipertensão arterial sistêmica": 24,
  "4.1|Cistite": 6,
  "13|Dependência química": 6,
  "3.1|DRGE": 11,
  "2.1|Asma": 10,
  "2.1|Pneumonia comunitária": 16,
  "13|Abstinência alcoólica": 6,
  "6.1|Osteoartrose": 4,
  "2.1|Tuberculose pulmonar": 1,
  "7.2|Herpes-zóster": 2,
  "1.1|AVC": 21,
  "7.2|Erisipela": 2,
  "7.2|Melanoma": 4,
  "4.1|Nefrolitíase": 10,
  "2.2|Valvopatias": 5,
  "6.1|Fibromialgia": 3,
  "2.2|Infarto agudo do miocárdio": 9,
  "2.1|Embolia pulmonar": 8,
  "2.1|Câncer de pulmão": 7,
  "4.1|Pielonefrite": 6,
  "4.1|Doença renal crônica": 8,
  "3.1|Doença inflamatória intestinal": 12,
  "3.1|Doença celíaca": 2,
  "3.2|Cirrose hepática": 5,
  "1.1|Meningite": 10,
  "1.1|Parkinson": 3,
  "9|Anemia hemolítica": 3,
  "3.2|Encefalopatia hepática": 2,
  "13|Esquizofrenia": 7,
  "6.1|Gota": 4,
  "7.2|Hanseníase": 10,
  "7.2|Escabiose": 6,
  "2.2|Síndrome coronariana aguda": 10,
  "4.1|Glomerulonefrite": 3,
  "10|HIV/AIDS": 11,
  "12|Delirium": 5,
  "3.1|Gastrite": 3,
  "9|Síndrome de lise tumoral": 1,
  "2.1|Insuficiência respiratória": 1,
  "10|Sepse": 5,
  "6.1|Osteoporose": 8,
  "7.2|Carcinoma basocelular": 3,
  "9|Anemia megaloblástica": 10,
  "2.1|Derrame pleural": 15,
  "13|Transtornos de ansiedade": 5,
  "1.5|Tempestade tireotóxica": 1,
  "12|Demências": 1,
  "13|Depressão maior": 8,
  "8|Hiperaldosteronismo primário": 3,
  "16|Feridas": 19,
  "16|Pré-operatório": 19,
  "16|Hérnias": 21,
  "3.3|Colangite aguda": 6,
  "3.1|Hemorragia digestiva baixa": 5,
  "7.1|Doença arterial periférica": 6,
  "6.2|Fraturas": 5,
  "1.1|Hipertensão intracraniana": 3,
  "14|Queimaduras": 12,
  "1.3|Câncer de cabeça e pescoço": 2,
  "1.2|Ceratite": 3,
  "14|Choque": 7,
  "16|Trauma abdominal": 17,
  "6.2|Hérnia de disco": 3,
  "16|Obstrução intestinal": 19,
  "7.1|Trombose venosa profunda": 9,
  "4.2|Câncer de próstata": 6,
  "3.1|Hemorragia digestiva alta": 11,
  "3.1|Doença hemorroidária": 6,
  "7.1|Aneurisma de aorta abdominal": 4,
  "3.2|Hepatocarcinoma": 6,
  "10|Doença de Chagas": 3,
  "1.4|Doença periodontal": 1,
  "3.3|Colecistite aguda": 5,
  "16|Trauma torácico": 19,
  "16|Apendicite aguda": 12,
  "16|Perfuração de víscera oca": 8,
  "3.3|Colangiocarcinoma": 3,
  "3.4|Pancreatite aguda": 12,
  "3.1|Câncer colorretal": 12,
  "8|Obesidade": 11,
  "7.1|Isquemia arterial aguda": 4,
  "7.2|Celulite": 2,
  "16|Pós-operatório": 21,
  "7.1|Insuficiência venosa crônica": 3,
  "6.2|Lesões do manguito rotador": 1,
  "16|Isquemia mesentérica": 4,
  "1.5|Nódulos tireoidianos": 3,
  "16|Abdome agudo": 6,
  "6.2|Lombalgia": 6,
  "7.2|Carcinoma espinocelular": 2,
  "6.2|Luxações": 1,
  "3.3|Colelitíase": 8,
  "5.1|Sangramento uterino anormal": 18,
  "5.1|Climatério e menopausa": 23,
  "5.1|Contracepção": 31,
  "5.1|Câncer de colo uterino": 32,
  "5.1|Vaginose bacteriana": 8,
  "5.2|Diabetes gestacional": 22,
  "5.2|Assistência ao parto": 13,
  "5.2|Puerpério": 16,
  "5.2|Infecções na gestação": 32,
  "5.2|Rotura prematura de membranas": 8,
  "15|Rastreamento": 26,
  "5.1|Câncer de endométrio": 10,
  "5.2|Gravidez ectópica": 10,
  "5.2|Diagnóstico de gravidez": 2,
  "5.2|Pré-natal": 37,
  "5.2|Hemorragia pós-parto": 11,
  "5.2|Trabalho de parto": 24,
  "5.1|Mioma uterino": 12,
  "5.1|Endometriose": 12,
  "5.1|Infertilidade": 10,
  "5.1|Prolapso genital": 8,
  "5.1|Câncer de ovário": 7,
  "15|Saúde da mulher": 10,
  "5.2|Pré-eclâmpsia": 18,
  "5.2|Abortamento": 19,
  "5.1|Síndrome dos ovários policísticos": 6,
  "5.1|Doença inflamatória pélvica": 7,
  "5.1|Candidíase vaginal": 4,
  "5.2|Eclâmpsia": 1,
  "5.2|Descolamento prematuro de placenta": 10,
  "5.2|Isoimunização Rh": 5,
  "5.1|Tricomoníase": 3,
  "5.2|Síndrome HELLP": 1,
  "5.1|Planejamento reprodutivo": 4,
  "8|Prolactinoma": 2,
  "10|Infecções sexualmente transmissíveis": 11,
  "15|Bioética": 7,
  "5.2|Idade gestacional": 5,
  "4.2|Incontinência urinária": 7,
  "5.2|Placenta prévia": 6,
  "15|Atenção Primária": 83,
  "15|Saúde do idoso": 6,
  "15|SUS": 58,
  "12|Polifarmácia": 4,
  "15|Imunização": 27,
  "15|Saúde do trabalhador": 20,
  "15|Estudos epidemiológicos": 35,
  "15|Epidemiologia": 42,
  "15|Vigilância epidemiológica": 31,
  "15|Testes diagnósticos": 26,
  "15|Estratégia Saúde da Família": 14,
  "12|Quedas": 3,
  "13|Risco de suicídio": 8,
  "13|Transtorno bipolar": 3,
  "10|Infecções relacionadas à assistência": 4,
  "15|Saúde da criança": 4,
  "2.2|Doença arterial coronariana crônica": 5,
  "3.2|Hipertensão portal": 7,
  "3.2|Icterícia": 1,
  "2.2|Febre reumática": 4,
  "4.1|Distúrbios ácido-base": 7,
  "14|Anafilaxia": 5,
  "10|Malária": 4,
  "9|Coagulopatias": 8,
  "4.2|Hiperplasia prostática benigna": 2,
  "2.1|Fibrose pulmonar": 2,
  "6.1|Artrite séptica": 2,
  "15|Bioestatística": 9,
  "3.2|Ascite": 3,
  "14|Crise hipertensiva": 2,
  "7.2|Dermatite de contato": 1,
  "1.1|Esclerose múltipla": 2,
  "3.1|Úlcera péptica": 4,
  "9|Neutropenia febril": 4,
  "13|Transtornos alimentares": 5,
  "4.2|Fimose": 1,
  "3.4|Câncer de pâncreas": 3,
  "3.4|Pancreatite crônica": 5,
  "3.1|Diverticulose/diverticulite": 9,
  "6.1|Espondilite anquilosante": 4,
  "3.2|Colestase": 1,
  "1.5|Tireoidites": 1,
  "13|TOC": 1,
  "3.1|Fissura anal": 2,
  "6.1|Vasculites": 4,
  "3.3|Coledocolitíase": 7,
  "14|Emergências obstétricas": 4,
  "13|Transtornos de personalidade": 1,
  "2.2|Fibrilação atrial": 8,
  "6.2|Síndrome da cauda equina": 1,
  "7.2|Impetigo": 2,
  "3.2|Peritonite bacteriana espontânea": 2,
  "7.1|Dissecção de aorta": 3,
  "4.2|Câncer de bexiga": 1,
  "4.2|Retenção urinária": 2,
  "1.3|Vertigem": 3,
  "6.2|Lesão do ligamento cruzado anterior": 1,
  "8|Distúrbios do cálcio": 2,
  "14|Parada cardiorrespiratória": 7,
  "4.1|Nefropatia diabética": 3,
  "2.2|Choque cardiogênico": 1,
  "12|Cuidados paliativos": 11,
  "10|Toxoplasmose": 4,
  "1.5|Câncer de tireoide": 4,
  "2.2|Endocardite infecciosa": 5,
  "2.1|Tabagismo": 5,
  "1.5|Hiperparatireoidismo": 3,
  "3.3|Câncer de vesícula": 4,
  "3.1|Diarreia aguda": 1,
  "5.2|Restrição de crescimento fetal": 7,
  "11|Púrpura de Henoch-Schönlein": 2,
  "5.1|Adenomiose": 2,
  "7.2|Pênfigo e penfigoide": 1,
  "1.4|Câncer de boca": 1,
  "2.1|Pneumonia hospitalar": 1,
  "6.1|Esclerose sistêmica": 2,
  "10|Meningococcemia": 3,
  "6.2|Pé diabético": 3,
  "1.2|Perda visual súbita": 1,
  "11|Alimentação complementar": 6,
  "10|Febre amarela": 1,
  "9|Transfusão sanguínea": 3,
  "7.2|Psoríase": 1,
  "1.2|Retinopatia diabética": 1,
  "8|Hipoglicemia": 1,
  "2.1|Pneumotórax": 2,
  "1.3|Sinusite/rinossinusite": 2,
  "16|Nutrição cirúrgica": 2,
  "10|Leptospirose": 1,
  "1.4|Herpes simples": 1,
  "3.1|Dispepsia funcional": 1,
  "1.1|Encefalite": 1,
  "10|Chikungunya": 2,
  "1.2|Conjuntivite": 2,
  "6.1|Bursites e tendinopatias": 1,
  "10|Endocardite": 1,
  "2.1|Apneia do sono": 1,
  "2.1|SDRA": 1,
  "14|Insuficiência respiratória": 1,
  "12|Síndrome da fragilidade": 3
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
    "warning": "O gabarito deste simulado é o oficial, divulgado pelos organizadores. Onde ele é discutível, a alternativa contestada aparece em amarelo na correção (sem contar como acerto) e o comentário explica a controvérsia.",
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
    "id": "tp2022-54",
    "topography": "1.3",
    "topic": "Otite média aguda",
    "module": "Pediatria",
    "text": "Escolar de 7 anos com dificuldade escolar, fala que \"não entende\", retração timpânica e bolhas de ar na otoscopia. Hipóteses iniciais:",
    "options": [
      "(A) Dificuldade escolar; déficit auditivo; otite média com efusão; hipertrofia de adenoide.",
      "(B) Déficit auditivo; otite média aguda; transtorno do espectro autista.",
      "(C) T.D.H.A.; otite média aguda; hipertrofia de adenoide.",
      "(D) T.D.H.A.; otite externa aguda."
    ],
    "correctAnswer": 0,
    "explanation": "Escolar com dificuldade crescente na escola, que demora a responder a sons e aumenta o volume da TV, sugere déficit auditivo. A otoscopia mostra membrana timpânica retraída, sem triângulo luminoso e com bolhas de ar atrás dela, sem abaulamento nem dor: é otite média com efusão (secreção na orelha média sem infecção aguda), causa comum de perda auditiva condutiva na infância.\n\nA face alongada, respiração bucal, hipotonia do lábio e arcada estreita com apinhamento dentário são a fácies adenoideana: a hipertrofia de adenoide obstrui a tuba auditiva e favorece a efusão, além de piorar o sono. As hipóteses iniciais, portanto, são dificuldade escolar, déficit auditivo, otite média com efusão e hipertrofia de adenoide.",
    "commentary": "Otite média aguda e autismo (B): não há febre, dor nem membrana abaulada para falar em otite aguda; e a criança não tem alterações de interação social ou comportamentos restritos que sugiram autismo.\n\nTDAH, otite aguda e adenoide (C): a desatenção é explicada pela perda auditiva, e o TDAH só pode ser cogitado depois de excluir causas sensoriais; e a otite não é aguda.\n\nTDAH e otite externa (D): o conduto auditivo está apenas discretamente hiperemiado, sem sinais de otite externa; o problema está atrás da membrana timpânica.",
    "tip": "Dificuldade escolar: avalie a audição primeiro. Membrana retraída com bolhas de ar = otite média com efusão.",
    "reference": "Tratado de Pediatria SBP - 4ª Ed.",
    "tags": [
      "otorrinolaringologia",
      "educação"
    ]
  },
  {
    "id": "tp2020-78",
    "topography": "11",
    "topic": "Anemia ferropriva",
    "module": "Pediatria",
    "text": "Lactente de 6 meses está em aleitamento materno exclusivo e vai iniciar introdução de frutas. Nasceu com 2.300g, 47cm, de 38 semanas de gestação.\n\nQuanto à suplementação de Ferro elementar, deve-se prescrever neste momento:",
    "options": [
      "(A) Tratamento com 1 mg/kg de peso/dia de Ferro elementar.",
      "(B) Profilaxia com 3 mg/kg de peso/dia de Fe elementar.",
      "(C) Profilaxia com 2 mg/kg de peso/dia de Fe elementar.",
      "(D) O aleitamento materno exclusivo não indica prescrição de ferro nessa faixa etária."
    ],
    "correctAnswer": 2,
    "explanation": "Lactente a termo, porém com baixo peso ao nascer (2.300 g), em aleitamento materno exclusivo: pela SBP, recém-nascidos com peso < 2.500 g devem receber ferro profilático na dose de 2 mg/kg/dia de ferro elementar.",
    "commentary": "A dose de 1 mg/kg/dia é para RN a termo com peso adequado. 3 mg/kg/dia é para peso < 1.500 g. O aleitamento exclusivo não dispensa a profilaxia.",
    "reference": "Manual de Nutrição da Sociedade Brasileira de Pediatria / Consenso de Anemia da Sociedade Brasileira de Pediatria / Diretrizes Anemia do Ministério da Saúde",
    "tags": [
      "pediatria",
      "nutrição",
      "anemia ferropriva"
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
    "id": "tp2022-80",
    "topography": "14",
    "topic": "Queimaduras",
    "module": "Cirurgia",
    "text": "Queimadura por água fervente em face anterior do membro superior esquerdo e eritema no rosto. Qual a SCQ de 2º grau?",
    "options": [
      "(A) 4,5%",
      "(B) 7,5%",
      "(C) 9%",
      "(D) 18%"
    ],
    "correctAnswer": 0,
    "explanation": "Para calcular a superfície corporal queimada (SCQ), só entram as queimaduras de segundo e terceiro graus. O rosto tem apenas eritema, que é queimadura de primeiro grau, então fica fora da conta.\n\nAs bolhas aparecem em toda a face anterior do membro superior esquerdo. Pela regra dos nove (ou pelo diagrama de Lund-Browder), o membro superior inteiro vale 9% no adulto, sendo metade na face anterior e metade na posterior. Logo, a área com queimadura de segundo grau é de cerca de 4,5%.",
    "commentary": "7,5% (B): resultaria de incluir a hemiface (cerca de metade dos 9% da cabeça, por volta de 2 a 3%) junto com a face anterior do braço; mas o rosto teve só eritema, que não entra no cálculo.\n\n9% (C): corresponde ao membro superior inteiro, frente e verso; só a face anterior foi atingida.\n\n18% (D): equivaleria aos dois membros superiores inteiros, ou a um membro inferior inteiro; não corresponde a nenhuma área lesada.",
    "tip": "Primeiro grau não entra na SCQ. Membro superior = 9%; só a face anterior = 4,5%.",
    "reference": "Neligan - Cirurgia Plástica - Vol 6.",
    "tags": [
      "queimados",
      "emergência"
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
    "id": "tp2022-81",
    "topography": "5.1",
    "topic": "Câncer de colo uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 34 anos, G III C II, 10 semanas de gestação. Último preventivo há 5 anos (normal). Sobre a coleta de colpocitológico na gestação, é correto afirmar:",
    "options": [
      "(A) A coleta do colpocitológico do colo uterino durante a gestação é contraindicada.",
      "(B) O exame está dispensado por tratar-se de gestante, sendo facultativa a sua coleta.",
      "(C) Paciente deverá fazer a coleta do exame de colpocitologia oncológica do colo uterino.",
      "(D) A interpretação do exame colpocitológico fica prejudicada durante a gravidez."
    ],
    "correctAnswer": 2,
    "explanation": "A gravidez não muda o risco de câncer do colo do útero nem as regras do rastreamento. Pelas diretrizes brasileiras, a citologia é feita dos 25 aos 64 anos, a cada 3 anos depois de dois exames anuais normais. Esta paciente fez o último preventivo há 5 anos, então está com o rastreamento atrasado e deve colher o exame.\n\nO pré-natal é uma ótima oportunidade para isso, já que muitas mulheres só procuram o serviço de saúde nessa fase. A coleta é segura na gestação quando feita com técnica cuidadosa; como a junção escamocolunar costuma estar exteriorizada, a amostra da ectocérvice geralmente é adequada.",
    "commentary": "Coleta contraindicada na gestação (A): não há contraindicação; o exame com espátula e escova, feito com delicadeza, não aumenta o risco de perda gestacional.\n\nExame dispensado por ser gestante (B): a gestante segue a mesma periodicidade e faixa etária das demais mulheres; dispensar o exame atrasaria ainda mais um rastreamento já vencido.\n\nInterpretação prejudicada, adiar para depois do parto (D): as alterações da gravidez são conhecidas pelo citopatologista e não impedem a leitura; adiar faria perder uma chance de detectar lesões precursoras.",
    "tip": "Gestante segue o rastreamento normal do colo (25 a 64 anos, a cada 3 anos): se está vencido, colhe no pré-natal.",
    "reference": "Diretrizes brasileiras para o rastreamento do câncer do colo do útero, INCA 2020.",
    "tags": [
      "obstetrícia",
      "rastreamento"
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
    "id": "tp2022-119",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Qual estratégia favorece o cuidado longitudinal e humanizado, permitindo relações clínicas de longa duração na APS?",
    "options": [
      "(A) Hierarquização da rede.",
      "(B) Regionalização intermunicipal.",
      "(C) Criação de vínculos e relação clínica humanizada.",
      "(D) Prática de uma clínica flexneriana."
    ],
    "correctAnswer": 2,
    "explanation": "A longitudinalidade é um dos atributos essenciais da Atenção Primária: o acompanhamento da mesma pessoa pela mesma equipe ao longo do tempo, independentemente de haver ou não doença. Ela só se sustenta quando existe vínculo, isto é, uma relação de confiança entre usuário e profissionais.\n\nNo caso, a mulher sobrecarregada como cuidadora conseguiu expor medos e angústias porque a equipe construiu essa relação próxima e humanizada. O vínculo permite enxergar a pessoa além da doença (o diabetes descompensado) e planejar o cuidado junto com ela.",
    "commentary": "Hierarquização (A): organiza os serviços em níveis de complexidade crescente; é uma diretriz de organização da rede, não a ferramenta que cria uma relação clínica duradoura.\n\nRegionalização (B): distribui os serviços dentro de uma região de saúde, entre municípios; também é organizativa e não explica o vínculo construído na UBS.\n\nClínica flexneriana (D): o modelo de Flexner é biomédico, centrado na doença, no hospital e na especialização; vai na direção oposta ao cuidado integral e humanizado descrito.",
    "tip": "Longitudinalidade depende de vínculo: mesma equipe, ao longo do tempo, com relação de confiança.",
    "reference": "Política Nacional de Atenção Básica (PNAB).",
    "tags": [
      "atenção primária",
      "princípios"
    ]
  },
  {
    "id": "tp2020-22",
    "topography": "10",
    "topic": "Infecções relacionadas à assistência",
    "module": "Saúde Coletiva",
    "text": "Considerando as precauções indicadas para a assistência aos pacientes suspeitos ou confirmados de infecção pelo novo coronavírus, são indicados equipamentos de proteção individual (EPI).\n\nAssinale a alternativa correta:",
    "options": [
      "(A) O uso de luvas de procedimento pelo paciente suspeito é uma medida de precaução de contato e para gotículas.",
      "(B) A higiene das mãos com água e sabonete líquido não é considerada uma medida de precaução para aerossóis.",
      "(C) O uso da máscara N95/PFF2 ou equivalente pelo profissional de saúde é uma medida de precaução para aerossóis.",
      "(D) O uso de avental pelo profissional de saúde é uma medida de precaução para gotículas."
    ],
    "correctAnswer": 2,
    "explanation": "A máscara N95/PFF2 é a medida de precaução para aerossóis, indicada ao profissional em procedimentos geradores de aerossol em pacientes com COVID-19.",
    "commentary": "Luvas são precaução de contato, e o paciente não as usa. A higiene das mãos é medida-padrão, presente em todas as precauções. O avental é precaução de contato.",
    "reference": "Agência Nacional de Vigilância Sanitária. Nota técnica GVIMS/GGTES/ANVISA Nº 04/2020. Orientações para Serviços de Saúde: Medidas de prevenção e controle que devem ser adotadas durante a assistência aos casos suspeitos ou confirmados de infecção pelo novo Coronavírus (SARS-CoV-2). (Publicada em 30 de janeiro de 2020 e atualizada em 31/03/2020). 73p. Disponível em: http://portal.anvisa.gov.br; páginas 14, 15 e 19.",
    "tags": [
      "saúde coletiva",
      "biossegurança",
      "covid-19"
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
    "id": "enamed-2025-49",
    "topography": "5.1",
    "topic": "Contracepção",
    "module": "Ginecologia e Obstetrícia",
    "text": "Nulípara de 30 anos, com diagnóstico de lúpus eritematoso sistêmico e história recente de trombose venosa, apresenta ciclos menstruais prolongados de 8 a 10 dias, com intenso sangramento e cólicas fortes, buscando orientação sobre métodos contraceptivos.\n\nConsiderando os critérios de elegibilidade para uso de anticoncepção e o quadro clínico, qual é a melhor opção de contracepção?",
    "options": [
      "(A) DIU de cobre.",
      "(B) DIU de levonorgestrel.",
      "(C) Anticoncepcional injetável mensal.",
      "(D) Pílula anticoncepcional combinada contínua."
    ],
    "correctAnswer": 1,
    "explanation": "Pacientes com lúpus eritematoso sistêmico e antecedente de tromboembolismo venoso apresentam contraindicação formal ao uso de contraceptivos contendo estrogênio devido ao aumento acentuado do risco trombótico. O DIU liberador de levonorgestrel (SIU-LNG) constitui excelente opção nestes casos, pois apresenta elevada eficácia contraceptiva e reduz drasticamente o fluxo menstrual e as cólicas, tratando de forma ideal o sangramento abundante e a dismenorreia.",
    "commentary": "O DIU de cobre (A) pode agravar o fluxo menstrual e as cólicas intensas já relatadas pela paciente. Os anticoncepcionais combinados (C e D) contêm estrogênios e são contraindicados (Categoria 4 dos critérios da OMS) devido ao histórico de trombose.",
    "reference": "OMS e CDC. Medical Eligibility Criteria for Contraceptive Use.",
    "tags": [
      "ginecologia",
      "obstetrícia",
      "contracepção",
      "lúpus",
      "trombose"
    ]
  },
  {
    "id": "enamed-2026-50",
    "topography": "15",
    "topic": "Rastreamento",
    "module": "Clínica Médica",
    "text": "Homem de 34 anos, tabagista, sedentário, com IMC 43 kg/m² e assintomático, comparece a uma consulta em Unidade Básica de Saúde relatando que seu pai foi diagnosticado com câncer de cólon aos 53 anos. O paciente demonstra preocupação com a doença.\n\nConsiderando-se o rastreamento do câncer colorretal desse paciente pelo SUS, a conduta nesse caso é solicitar colonoscopia",
    "options": [
      "(A) na consulta atual.",
      "(B) a partir dos 43 anos.",
      "(C) a partir dos 50 anos.",
      "(D) se a pesquisa de sangue oculto tiver resultado positivo."
    ],
    "correctAnswer": 1,
    "explanation": "Paciente com parente de primeiro grau diagnosticado com câncer colorretal antes dos 60 anos tem risco aumentado. A recomendação adotada no gabarito é iniciar o rastreamento com colonoscopia 10 anos antes da idade em que o familiar foi diagnosticado: 53 − 10 = 43 anos.\n\nO paciente, hoje com 34 anos e assintomático, ainda não tem indicação de colonoscopia.",
    "commentary": "Diretrizes internacionais (ex.: US Multi-Society Task Force) recomendam iniciar aos 40 anos ou 10 anos antes do diagnóstico do familiar, o que ocorrer primeiro — o que daria 40 anos; a questão segue a regra dos 10 anos. Pesquisa de sangue oculto não substitui a colonoscopia no risco aumentado. (Gabarito preliminar do INEP.)",
    "reference": "INCA / US Multi-Society Task Force on Colorectal Cancer",
    "tags": [
      "gastroenterologia",
      "rastreamento",
      "câncer colorretal"
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
    "id": "hosbos2025-22",
    "module": "Clínica Médica",
    "text": "Com relação ao midazolam, muito utilizado em sedação, assinale a alternativa correta.",
    "options": [
      "(A) Sua diluição é obrigatória, e apenas com soro fisiológico.",
      "(B) Seu tempo de início de ação é, em média, de 3-4 minutos.",
      "(C) Seu tempo de ação é, em média, de 60 a 90 minutos.",
      "(D) Doses repetidas se acumulam no tecido adiposo, prolongando seu efeito sedativo.",
      "(E) O evento adverso mais encontrado durante seu uso é a hipotensão."
    ],
    "correctAnswer": 3,
    "explanation": "O midazolam é um benzodiazepínico lipossolúvel de início rápido (1–3 minutos IV) e efeito curto em dose única (cerca de 15–30 minutos, até 1–2 horas). Em doses repetidas ou infusão contínua, acumula-se no tecido adiposo e redistribui, prolongando a sedação — principalmente em obesos, idosos, hepatopatas e pacientes com disfunção renal (metabólito ativo).",
    "commentary": "Diluição obrigatória só em SF (A): pode ser feito sem diluir ou diluído em SF ou SG 5%.\n\nInício em 3–4 minutos (B): o início IV é mais rápido (1–3 min).\n\nDuração de 60–90 minutos (C): em dose única a sedação dura menos; a duração longa aparece com doses repetidas.\n\nHipotensão como evento mais comum (E): o efeito adverso mais relevante é a depressão respiratória, principalmente associada a opioides.",
    "reference": "Miller's Anesthesia, 9ª ed. — Benzodiazepínicos",
    "tags": [
      "midazolam",
      "sedação",
      "benzodiazepínicos",
      "farmacologia"
    ]
  },
  {
    "id": "hosbos2025-95",
    "topography": "15",
    "topic": "Imunização",
    "module": "Saúde Coletiva",
    "text": "Uma jovem de 17 anos de idade procura a unidade de saúde, solicitando informações sobre dose de reforço da vacina contra febre amarela. Relata que já foi vacinada contra essa doença anteriormente. Recomenda-se a aplicação da dose de reforço, caso ela",
    "options": [
      "(A) vá viajar para região ou país onde a doença seja endêmica.",
      "(B) esteja grávida.",
      "(C) tenha tomado a primeira dose há mais de 5 anos.",
      "(D) tenha tomado a primeira dose há mais de 10 anos.",
      "(E) tenha recebido a primeira dose antes de completar 5 anos de idade."
    ],
    "correctAnswer": 4,
    "explanation": "Pelo calendário do PNI, a vacina de febre amarela é feita aos 9 meses, com reforço aos 4 anos. Quem recebeu a primeira dose antes dos 5 anos e não tomou o reforço deve receber uma dose adicional. Quem foi vacinado a partir dos 5 anos tem dose única, sem reforço.",
    "commentary": "Viagem a área endêmica (A): quem tem esquema completo não precisa de reforço para viajar.\n\nGestação (B): a vacina é, em geral, contraindicada na gestação.\n\nPrimeira dose há mais de 5 anos (C) ou 10 anos (D): o reforço a cada 10 anos foi abolido; o critério é a idade em que a dose foi recebida.",
    "reference": "Ministério da Saúde — Calendário Nacional de Vacinação (2024) / Nota técnica sobre a vacina de febre amarela",
    "tags": [
      "febre amarela",
      "imunização",
      "calendário vacinal",
      "adolescente"
    ]
  },
  {
    "id": "scmbh2026-54",
    "topography": "15",
    "topic": "Estratégia Saúde da Família",
    "module": "Saúde Coletiva",
    "text": "São elementos de uma Linha De Cuidado efetiva na Estratégia de Saúde da Família (ESF), EXCETO:",
    "options": [
      "(A) Critérios de encaminhamento e retorno pactuados entre pontos de atenção.",
      "(B) Síntese clínica padronizada e prazos definidos para contrarreferência.",
      "(C) Contrarreferência facultativa, quando há sobrecarga no serviço especializado.",
      "(D) Registro multiprofissional com metas, responsáveis e indicadores de seguimento."
    ],
    "correctAnswer": 2,
    "explanation": "A questão pede a exceção. Uma linha de cuidado efetiva exige contrarreferência obrigatória e organizada, com retorno do paciente e de informações à APS, que coordena o cuidado. A contrarreferência 'facultativa' rompe a continuidade e gera o 'efeito velcro' e a fragmentação.",
    "commentary": "Critérios pactuados de encaminhamento e retorno (A): elemento essencial.\n\nSíntese clínica padronizada e prazos de contrarreferência (B): elemento essencial.\n\nRegistro multiprofissional com metas e indicadores (D): elemento essencial.",
    "reference": "Ministério da Saúde — Linhas de cuidado / Mendes EV — As redes de atenção à saúde",
    "tags": [
      "saúde coletiva",
      "linha de cuidado",
      "referência e contrarreferência",
      "ESF"
    ]
  },
  {
    "id": "revalida-2025-1-34",
    "module": "Ginecologia e Obstetrícia",
    "text": "Menina de 14 anos vai à consulta na unidade básica de saúde (UBS), acompanhada de sua mãe, relatando preocupação, pois todas as suas amigas da mesma faixa etária já menstruaram, exceto ela. A paciente apresenta as mamas desenvolvidas e alguns pelos pubianos e, durante a consulta, apresenta muitas dúvidas em relação à menstruação. Nesse caso, após orientar a menina sobre ciclo menstrual e sobre métodos contraceptivos, a conduta adequada é",
    "options": [
      "(A) solicitar exames complementares para investigação de amenorreia.",
      "(B) orientar a mãe e a filha a aguardarem a menstruação até os 16 anos.",
      "(C) indicar teste de progesterona oral para confirmar amenorreia primária.",
      "(D) solicitar ultrassonografia e dosagens hormonais para investigação de amenorreia."
    ],
    "correctAnswer": 1,
    "explanation": "Aos 14 anos, com mamas desenvolvidas e pelos pubianos, ainda não há amenorreia primária. Ela é investigada se não houver menstruação até os 15 anos com caracteres sexuais secundários (ou até 13 anos sem eles, ou 3 anos após a telarca). O gabarito considera adequado orientar e aguardar, com seguimento.",
    "commentary": "Investigar amenorreia agora (A e D) e teste de progesterona (C): ainda não há critério de amenorreia primária.\n\nObservação: diretrizes atuais (Febrasgo, ACOG) usam 15 anos como limite com desenvolvimento puberal; o enunciado do gabarito fala em 16 anos, critério mais antigo.",
    "reference": "Febrasgo — Amenorreias / ACOG — Menstruation in girls and adolescents",
    "tags": [
      "ginecologia",
      "ginecologia infanto-puberal",
      "amenorreia primária",
      "puberdade"
    ],
    "tip": "Amenorreia primária: sem menstruar aos 15 anos com caracteres sexuais (ou aos 13 sem eles).",
    "alert": "Gabarito discutível: as diretrizes atuais investigam amenorreia primária aos 15 anos (com caracteres sexuais); a alternativa do gabarito fala em 16 anos. Mantida a resposta do gabarito."
  },
  {
    "id": "iog2026-24",
    "topography": "5.2",
    "topic": "Assistência ao parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 25 anos de idade, primigesta, com idade gestacional de 40 semanas e 6 dias, está em período expulsivo do trabalho de parto. Neste momento, nota-se distocia de ombro.\n\nQual das manobras está indicada para a assistência ao caso neste momento?",
    "options": [
      "Rebater o feto sobre o ventre materno.",
      "Utilizar o vácuo extrator dorsal.",
      "Mudar a paciente para decúbito lateral.",
      "Pressão suprapúbica e hiperflexão de pernas."
    ],
    "correctAnswer": 3,
    "explanation": "Na distocia de ombro, a primeira linha é a manobra de McRoberts (hiperflexão das coxas sobre o abdome), associada à pressão suprapúbica (manobra de Rubin I), que desimpacta o ombro anterior da sínfise. Se falhar, seguem-se as manobras internas (Rubin II, Woods, retirada do braço posterior) e a de Gaskin (quatro apoios).",
    "commentary": "Rebater o feto sobre o ventre materno (A): manobra de Bracht, usada no parto pélvico.\n\nVácuo extrator (B): o problema é o ombro, não a cabeça; tracionar a cabeça aumenta lesão do plexo braquial.\n\nDecúbito lateral (C): não é manobra de resolução da distocia; a de Gaskin é em quatro apoios.",
    "reference": "FEBRASGO — Distocia de ombro (Protocolo) / RCOG Green-top Guideline 42",
    "tags": [
      "obstetrícia",
      "distocia de ombro",
      "manobra de McRoberts",
      "assistência ao parto"
    ],
    "tip": "Distocia de ombro: McRoberts + pressão suprapúbica primeiro."
  },
  {
    "id": "sespe2026-71",
    "topography": "10",
    "topic": "Tuberculose",
    "module": "Pediatria",
    "text": "Adolescente de 14 anos evoluiu com hepatotoxicidade, no 10º dia de tratamento para tuberculose com esquema RIPE, o que levou à suspensão de seu tratamento por 20 dias.\n\nNa condução clínica, após melhora das transaminases, a melhor conduta é a seguinte:",
    "options": [
      "Refazer teste tuberculínico, Rx de tórax e cultura de escarro.",
      "O tratamento deve ser reiniciado com as drogas previamente usadas.",
      "O tratamento deve ser substituído por outros fármacos tuberculostáticos.",
      "O esquema deve ser reintroduzido após avaliação de exame de sensibilidade.",
      "O tratamento deve ser reintroduzido na sequência R/E/I/P e acrescentado 20 dias do esquema suspenso."
    ],
    "correctAnswer": 4,
    "explanation": "Hepatotoxicidade pelo esquema RIPE, com suspensão do tratamento. Pelo Manual de Recomendações do Ministério da Saúde, após a melhora clínica e das transaminases o esquema é reintroduzido de forma sequencial, para identificar a droga responsável: primeiro rifampicina com etambutol; depois de 3 a 7 dias, isoniazida; e depois de mais 3 a 7 dias, pirazinamida (a mais hepatotóxica). O tempo em que o tratamento ficou suspenso deve ser acrescentado ao final.",
    "commentary": "Repetir PPD, RX e cultura (A): o diagnóstico está feito; não muda a conduta da hepatotoxicidade.\n\nReiniciar todas as drogas juntas (B): se as enzimas subirem de novo, não se sabe qual droga causou.\n\nTrocar por outros fármacos (C): reservado para hepatopatia grave ou falha da reintrodução.\n\nTeste de sensibilidade (D): avalia resistência bacteriana, não toxicidade ao paciente.",
    "reference": "Ministério da Saúde — Manual de Recomendações para o Controle da Tuberculose no Brasil (2019)",
    "tags": [
      "tuberculose",
      "hepatotoxicidade",
      "esquema RIPE",
      "reintrodução sequencial"
    ],
    "tip": "Hepatite por RIPE: reintroduz RE → I → P, um de cada vez."
  },
  {
    "id": "hpp2026-46",
    "topography": "11",
    "topic": "Cardiopatias congênitas",
    "module": "Pediatria",
    "text": "Um lactente de 6 meses é trazido ao ambulatório pediátrico pelos pais, que relatam que o bebê apresenta cansaço excessivo, sudorese durante a alimentação e ganho de peso inadequado. Durante o exame físico, nota-se um sopro sistólico de intensidade 3/6 na região pré-cordial e um desvio de pulsos. O paciente também apresenta sinais de insuficiência cardíaca, como taquicardia, respiração acelerada e hepatomegalia. Qual é o diagnóstico mais provável?",
    "options": [
      "Defeito do Septo Atrioventricular (DSAV).",
      "Comunicação Interventricular (CIV).",
      "Estenose Aórtica Congênita.",
      "Persistência do Canal Arterioso (PCA)."
    ],
    "correctAnswer": 2,
    "explanation": "Lactente de 6 meses com sinais de insuficiência cardíaca (cansaço e sudorese às mamadas, baixo ganho de peso, taquicardia, taquipneia e hepatomegalia) e sopro sistólico na região precordial.\n\nO quadro é típico de cardiopatia acianótica com hiperfluxo pulmonar, e a comunicação interventricular — a cardiopatia congênita mais comum — é o diagnóstico mais provável: com a queda da resistência pulmonar nos primeiros meses, o shunt esquerda-direita aumenta e surge insuficiência cardíaca, com sopro holossistólico na borda esternal esquerda baixa.",
    "commentary": "DSAV (A): também causa IC precoce, mas é muito associado à síndrome de Down, que não é mencionada; é bem menos comum que a CIV.\n\nEstenose aórtica (C): sopro sistólico ejetivo em foco aórtico com frêmito; quando crítica, se apresenta no período neonatal com baixo débito.\n\nPCA (D): sopro contínuo (\"em maquinaria\") e pulsos amplos, mais comum em prematuros.",
    "reference": "SBP — Cardiopatias congênitas / Nelson Textbook of Pediatrics",
    "tags": [
      "cardiopatias congênitas",
      "comunicação interventricular",
      "insuficiência cardíaca na infância"
    ],
    "tip": "Lactente com IC e sopro holossistólico em BEE baixa: CIV, a cardiopatia mais comum."
  },
  {
    "id": "cesupa2025-41",
    "topography": "11",
    "topic": "Calendário vacinal",
    "module": "Pediatria",
    "text": "“Criado nos anos 1980, o Zé Gotinha é uma marca da luta contra a poliomielite” (Ministério da saúde, 2024).\n\nSobre a vacina em questão, é correto afirmar que, segundo a partir do dia 4 de novembro de 2024:",
    "options": [
      "O esquema a ser seguido será 2 doses da vacina inativada (VIP) e 2 doses da vacina oral (VOP).",
      "O esquema a ser seguido será 3 doses da VIP aos 2,4,6 meses e 2 reforços com a VOP aos 15m e 4 anos.",
      "O esquema a ser seguido será somente com a vacina VIP aos 2,4 ,6 m e um reforço aos 15m.",
      "O esquema a ser seguido será somente com a vacina VIP aos 2,4,6m e reforços aos 15m e 4 anos."
    ],
    "correctAnswer": 2,
    "explanation": "Em 4 de novembro de 2024, o Ministério da Saúde substituiu a vacina oral (VOP, \"gotinha\") pela inativada injetável (VIP) em todo o esquema contra a poliomielite.\n\nO novo esquema:\n\n• Vacinação primária: VIP aos 2, 4 e 6 meses.\n• Reforço único: VIP aos 15 meses.\n\nO reforço dos 4 anos, que era feito com VOP, deixou de existir. A mudança elimina o risco, ainda que raro, de poliomielite associada à vacina oral e de poliovírus derivado da vacina.",
    "commentary": "2 doses de VIP e 2 de VOP (A): esquema antigo de transição; a VOP foi retirada do calendário de rotina.\n\nVIP aos 2, 4 e 6 meses e reforços com VOP aos 15 meses e 4 anos (B): esse era o esquema até outubro de 2024.\n\nVIP aos 2, 4 e 6 meses e reforços aos 15 meses e 4 anos (D): o reforço dos 4 anos foi retirado; agora é apenas um reforço aos 15 meses.",
    "tip": "Pólio desde 11/2024: só VIP — 2, 4 e 6 meses + reforço aos 15 meses. Fim da gotinha e do reforço dos 4 anos.",
    "reference": "Ministério da Saúde. Nota técnica sobre a substituição da VOP pela VIP no Calendário Nacional de Vacinação, 2024.",
    "tags": [
      "calendário vacinal",
      "poliomielite",
      "VIP"
    ]
  },
  {
    "id": "amp2026-4",
    "topography": "16",
    "topic": "Abdome agudo",
    "module": "Pediatria",
    "text": "Sobre a intussuscepção intestinal na infância, analise as afirmativas abaixo\nI – A forma mais comum é a íleo-cólica.\nII – O ultrassom é o padrão ouro para diagnóstico.\nIII – O ápice da intussuscepção pode se exteriorizar pelo ânus, em casos negligenciados.\n\nAssinale a alternativa correta.",
    "options": [
      "As afirmativas I e II estão corretas, a III está incorreta.",
      "As afirmativas I e III estão corretas, a II está incorreta.",
      "As afirmativas II e III estão corretas, a I está incorreta.",
      "As afirmativas I, II e III estão corretas.",
      "As afirmativas I, II e III estão incorretas."
    ],
    "correctAnswer": 3,
    "explanation": "As três afirmativas estão corretas.\n\nI: a forma ileocólica é a mais comum (cerca de 85–90%).\nII: a ultrassonografia (sinal do alvo / pseudorrim) tem sensibilidade e especificidade próximas de 100% e é o exame de escolha para o diagnóstico.\nIII: em casos negligenciados, o segmento invaginado pode chegar ao reto e até se exteriorizar pelo ânus, o que pode ser confundido com prolapso retal.",
    "commentary": "III incorreta (A): a exteriorização anal é rara, mas possível.\n\nII incorreta (B): o ultrassom é o padrão para diagnóstico.\n\nI incorreta (C): a ileocólica é a mais frequente.\n\nTodas incorretas (E): todas estão corretas.",
    "reference": "SBP / Nelson Textbook of Pediatrics — Intussuscepção",
    "tags": [
      "intussuscepção intestinal",
      "ultrassonografia",
      "abdome agudo pediátrico"
    ],
    "tip": "Intussuscepção: ileocólica, sinal do alvo no ultrassom."
  },
  {
    "id": "amrigs2025-9",
    "module": "Clínica Médica",
    "text": "A presença de bandas oligoclonais no líquor sugere fortemente o diagnóstico de:",
    "options": [
      "Alzheimer.",
      "Esclerose múltipla.",
      "Linfoma de células B.",
      "Meningite viral."
    ],
    "correctAnswer": 1,
    "explanation": "Bandas oligoclonais de IgG no líquor (ausentes no soro) indicam síntese intratecal de imunoglobulinas e estão presentes em mais de 90% dos pacientes com esclerose múltipla. Pelos critérios de McDonald 2017, podem substituir a disseminação no tempo.",
    "commentary": "Alzheimer (A): o líquor mostra queda de beta-amiloide 42 e aumento de tau, não bandas oligoclonais.\n\nLinfoma de células B (C): no líquor, busca-se citologia oncótica e citometria de fluxo.\n\nMeningite viral (D): pleocitose linfocitária, proteína pouco elevada e glicose normal; bandas podem surgir transitoriamente, mas não sugerem o diagnóstico.",
    "reference": "Critérios de McDonald 2017 / Consenso brasileiro de esclerose múltipla (ABN)",
    "tags": [
      "esclerose múltipla",
      "bandas oligoclonais",
      "líquor"
    ],
    "tip": "Bandas oligoclonais no líquor = pense em esclerose múltipla."
  },
  {
    "id": "amrigs2025-88",
    "module": "Saúde Coletiva",
    "text": "Assinale a alternativa que apresenta doenças ou agravos que se enquadram como situação de notificação compulsória imediata (até 24 horas) no Brasil.",
    "options": [
      "Tuberculose e intoxicação exógena.",
      "Esquistossomose e HIV/AIDS.",
      "Raiva humana e síndrome da rubéola congênita.",
      "Sífilis e casos de dengue."
    ],
    "correctAnswer": 2,
    "explanation": "Pela Lista Nacional de Notificação Compulsória (Portaria de Consolidação nº 4/2017, atualizada), raiva humana e síndrome da rubéola congênita são de notificação imediata (em até 24 horas) às três esferas de gestão.",
    "commentary": "Tuberculose e intoxicação exógena (A): notificação semanal.\n\nEsquistossomose e HIV/aids (B): notificação semanal (esquistossomose é imediata só em área não endêmica).\n\nSífilis e dengue (D): notificação semanal; a dengue só é imediata nos óbitos.",
    "reference": "Ministério da Saúde — Lista Nacional de Notificação Compulsória (Portaria GM/MS nº 217/2023 e atualizações)",
    "tags": [
      "notificação compulsória",
      "vigilância epidemiológica",
      "raiva humana",
      "rubéola congênita"
    ],
    "tip": "Imediatas clássicas: raiva, rubéola, sarampo, botulismo, cólera, febre amarela, pólio, PFA."
  },
  {
    "id": "amrigs2026-77",
    "module": "Pediatria",
    "text": "Gestante de 39 semanas chega em franco trabalho de parto ao centro obstétrico. Em sua carteira de pré-natal, consta resultado positivo para triagem de HTLV (teste ELISA) no segundo trimestre gestacional. As demais sorologias eram não reagentes.\n\nConsiderando o caso apresentado, qual é a medida mais eficaz para prevenir a infecção do neonato pelo HTLV?",
    "options": [
      "Indicar parto por cesariana.",
      "Orientar o clampeamento imediato do cordão umbilical após o nascimento.",
      "Prescrever zidovudina solução oral nos primeiros 28 dias do neonato.",
      "Contraindicar o aleitamento materno."
    ],
    "correctAnswer": 3,
    "explanation": "A principal via de transmissão vertical do HTLV-1 é o aleitamento materno (risco proporcional ao tempo de amamentação). A medida mais eficaz é contraindicar a amamentação e oferecer fórmula infantil, com inibição da lactação.",
    "commentary": "Cesárea (A): não há evidência de que reduza a transmissão do HTLV.\n\nClampeamento imediato do cordão (B): não previne a transmissão.\n\nZidovudina no neonato (C): é profilaxia do HIV, sem papel no HTLV.\n\nObservação: o ELISA de triagem deve ser confirmado (Western blot ou PCR); com o teste confirmado, a recomendação é suspender a amamentação.",
    "reference": "Ministério da Saúde — PCDT para Prevenção da Transmissão Vertical de HIV, Sífilis e Hepatites Virais (2022) e nota técnica sobre HTLV",
    "tags": [
      "HTLV",
      "transmissão vertical",
      "aleitamento materno",
      "recém-nascido"
    ],
    "tip": "HTLV na gestante: não amamentar."
  },
  {
    "id": "cerman2025-67",
    "topography": "11",
    "topic": "Aleitamento materno",
    "module": "Pediatria",
    "text": "Recém-nascido com quatro dias de vida, em aleitamento materno exclusivo, mãe relata dificuldade para mamar, hipotonia, alguns episódios de vômito e hiperirritabilidade. Na admissão no serviço de emergência, RN apresenta quadro de acidose metabólica, evoluindo para coma sendo encaminhado ao CTI. A mãe por sugestão de uma amiga segue dieta vegetariana. O quadro apresentado é secundário a carência de:",
    "options": [
      "(A) Biotina.",
      "(B) L. carnitina.",
      "(C) Hidroxifolato.",
      "(D) Cobalamina."
    ],
    "correctAnswer": 3,
    "explanation": "Lactente em aleitamento exclusivo, filho de mãe vegetariana, com dificuldade de sucção, hipotonia, vômitos, irritabilidade e acidose metabólica evoluindo para coma: deficiência de vitamina B12 (cobalamina). A B12 é cofator da metilmalonil-CoA mutase; sua falta causa acidemia metilmalônica e dano neurológico.\n\nA mãe vegetariana/vegana sem suplementação tem leite pobre em B12. O tratamento é repor B12 na criança e na mãe.",
    "commentary": "Biotina (A): a deficiência é rara e causa dermatite, alopecia e acidose; não se relaciona à dieta vegetariana materna.\n\nL-carnitina (B): deficiências são genéticas ou secundárias a erros inatos; não decorrem da dieta materna.\n\nFolato (C): a dieta vegetariana costuma ser rica em folato; a deficiência causa anemia megaloblástica sem acidose metabólica grave.",
    "reference": "SBP — Documento Científico: Alimentação vegetariana na infância e adolescência (2017)",
    "tags": [
      "deficiência de vitamina B12",
      "dieta vegetariana",
      "aleitamento materno",
      "acidemia metilmalônica"
    ]
  }
];
