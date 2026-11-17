// Arquivo gerado por `npm run gen` a partir do banco de questões. Não editar à mão.
// O build e o servidor local regeneram este arquivo sozinhos; o `npm run validate` acusa se ficar desatualizado.
import type { Question } from '../types';

export const TOTAL_QUESTIONS = 3044;

export const COUNT_BY_AREA: Record<string, number> = {
  "Pediatria": 574,
  "Clínica Médica": 641,
  "Cirurgia": 549,
  "Ginecologia e Obstetrícia": 567,
  "Saúde Coletiva": 553,
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
    "label": "FAMEMA 2025",
    "kind": "Residência",
    "year": 2025,
    "count": 100
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
    "label": "FAMEMA 2026",
    "kind": "Residência",
    "year": 2026,
    "count": 100
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
    "key": "FAMEMA",
    "label": "FAMEMA",
    "kind": "Residência",
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
  "Clínica Médica|FAMEMA": 62,
  "Cirurgia|FAMEMA": 33,
  "Pediatria|FAMEMA": 35,
  "Ginecologia e Obstetrícia|FAMEMA": 36,
  "Saúde Coletiva|FAMEMA": 34,
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
  "8": 78,
  "9": 68,
  "10": 125,
  "11": 294,
  "12": 30,
  "13": 68,
  "14": 138,
  "15": 445,
  "16": 188,
  "1.2": 17,
  "1.3": 28,
  "7.2": 43,
  "4.2": 27,
  "1.1": 93,
  "1.5": 32,
  "6.1": 47,
  "3.1": 99,
  "4.1": 86,
  "2.1": 98,
  "6.2": 23,
  "2.2": 105,
  "3.2": 37,
  "3.3": 33,
  "7.1": 30,
  "1.4": 4,
  "3.4": 21,
  "5.1": 219,
  "5.2": 264
};

/** Questões por assunto, na chave "1.1|Cefaleias". */
export const TOPIC_COUNT: Record<string, number> = {
  "11|Puericultura": 34,
  "1.2|Catarata": 5,
  "11|Icterícia neonatal": 11,
  "11|Obesidade infantil": 9,
  "1.3|Amigdalite/faringoamigdalite": 13,
  "7.2|Urticária": 1,
  "1.2|Uveíte": 2,
  "4.2|Estenose de uretra": 2,
  "11|Calendário vacinal": 17,
  "1.1|TCE": 18,
  "11|Maus-tratos infantis": 17,
  "11|Prematuridade": 4,
  "11|Anemia ferropriva": 15,
  "9|Trombocitopenias": 6,
  "11|Aleitamento materno": 24,
  "1.5|Hipotireoidismo": 8,
  "11|Síndrome do desconforto respiratório neonatal": 8,
  "14|Emergências pediátricas": 15,
  "6.1|Artrite reumatoide": 7,
  "9|Talassemias": 2,
  "11|ITU pediátrica": 7,
  "11|Diarreia aguda": 11,
  "14|Trauma": 42,
  "11|Cardiopatias congênitas": 23,
  "3.1|Constipação intestinal": 7,
  "10|Raiva": 7,
  "1.1|Cefaleias": 10,
  "1.3|Surdez": 2,
  "11|Desenvolvimento neuropsicomotor": 22,
  "9|Anemia falciforme": 7,
  "11|Asma infantil": 19,
  "11|Doença de Kawasaki": 3,
  "1.5|Hipertireoidismo": 11,
  "11|Desidratação": 12,
  "11|Sepse neonatal": 8,
  "9|Leucemias": 9,
  "1.3|Otite média aguda": 2,
  "11|Convulsão febril": 6,
  "11|Pneumonia infantil": 12,
  "11|Refluxo gastroesofágico": 2,
  "11|Bronquiolite": 12,
  "11|Desnutrição": 4,
  "10|Sífilis": 20,
  "4.1|Síndrome nefrítica": 4,
  "2.1|Bronquiectasias": 2,
  "8|Insuficiência adrenal": 7,
  "6.2|Escoliose": 2,
  "14|Intoxicações": 18,
  "15|Ética médica": 21,
  "4.1|Síndrome nefrótica": 8,
  "1.3|Laringite": 3,
  "7.2|Dermatite atópica": 5,
  "14|Sepse e choque séptico": 14,
  "8|Síndrome de Cushing": 3,
  "4.2|Torção testicular": 6,
  "2.2|Arritmias": 7,
  "9|Anemias": 3,
  "10|Tétano": 1,
  "8|Feocromocitoma": 2,
  "9|Linfomas": 3,
  "8|Cetoacidose diabética": 18,
  "3.1|Diarreia crônica": 3,
  "1.2|Erros refrativos": 1,
  "10|Dengue": 19,
  "4.1|Distúrbios hidroeletrolíticos": 14,
  "4.1|Lesão renal aguda": 17,
  "8|Diabetes mellitus tipo 1 e 2": 29,
  "1.1|Demências": 8,
  "6.1|Lúpus eritematoso sistêmico": 8,
  "1.1|Epilepsia": 10,
  "10|Tuberculose": 23,
  "2.1|DPOC": 20,
  "9|Anemia ferropriva": 6,
  "3.2|Hepatites virais": 6,
  "2.2|Dislipidemia": 8,
  "2.2|Insuficiência cardíaca": 14,
  "2.2|Hipertensão arterial sistêmica": 25,
  "4.1|Cistite": 6,
  "13|Dependência química": 8,
  "3.1|DRGE": 12,
  "2.1|Asma": 10,
  "2.1|Pneumonia comunitária": 18,
  "13|Abstinência alcoólica": 6,
  "6.1|Osteoartrose": 4,
  "2.1|Tuberculose pulmonar": 1,
  "7.2|Herpes-zóster": 2,
  "1.1|AVC": 24,
  "7.2|Erisipela": 2,
  "7.2|Melanoma": 4,
  "4.1|Nefrolitíase": 10,
  "2.2|Valvopatias": 5,
  "6.1|Fibromialgia": 3,
  "2.2|Infarto agudo do miocárdio": 11,
  "2.1|Embolia pulmonar": 9,
  "2.1|Câncer de pulmão": 7,
  "4.1|Pielonefrite": 6,
  "4.1|Doença renal crônica": 8,
  "3.1|Doença inflamatória intestinal": 12,
  "3.1|Doença celíaca": 2,
  "3.2|Cirrose hepática": 5,
  "1.1|Meningite": 12,
  "1.1|Parkinson": 3,
  "9|Anemia hemolítica": 3,
  "3.2|Encefalopatia hepática": 3,
  "13|Esquizofrenia": 7,
  "6.1|Gota": 4,
  "7.2|Hanseníase": 10,
  "7.2|Escabiose": 6,
  "2.2|Síndrome coronariana aguda": 10,
  "4.1|Glomerulonefrite": 3,
  "10|HIV/AIDS": 11,
  "12|Delirium": 8,
  "3.1|Gastrite": 3,
  "9|Síndrome de lise tumoral": 1,
  "2.1|Insuficiência respiratória": 1,
  "10|Sepse": 5,
  "6.1|Osteoporose": 8,
  "7.2|Carcinoma basocelular": 3,
  "9|Anemia megaloblástica": 10,
  "2.1|Derrame pleural": 15,
  "13|Transtornos de ansiedade": 7,
  "1.5|Tempestade tireotóxica": 1,
  "12|Demências": 1,
  "13|Depressão maior": 11,
  "8|Hiperaldosteronismo primário": 3,
  "16|Feridas": 20,
  "16|Pré-operatório": 24,
  "16|Hérnias": 23,
  "3.3|Colangite aguda": 6,
  "3.1|Hemorragia digestiva baixa": 5,
  "7.1|Doença arterial periférica": 6,
  "6.2|Fraturas": 5,
  "1.1|Hipertensão intracraniana": 3,
  "14|Queimaduras": 13,
  "1.3|Câncer de cabeça e pescoço": 2,
  "1.2|Ceratite": 3,
  "14|Choque": 8,
  "16|Trauma abdominal": 18,
  "6.2|Hérnia de disco": 3,
  "16|Obstrução intestinal": 20,
  "7.1|Trombose venosa profunda": 10,
  "4.2|Câncer de próstata": 6,
  "3.1|Hemorragia digestiva alta": 11,
  "3.1|Doença hemorroidária": 8,
  "7.1|Aneurisma de aorta abdominal": 4,
  "3.2|Hepatocarcinoma": 6,
  "10|Doença de Chagas": 3,
  "1.4|Doença periodontal": 1,
  "3.3|Colecistite aguda": 5,
  "16|Trauma torácico": 21,
  "16|Apendicite aguda": 13,
  "16|Perfuração de víscera oca": 10,
  "3.3|Colangiocarcinoma": 3,
  "3.4|Pancreatite aguda": 12,
  "3.1|Câncer colorretal": 12,
  "8|Obesidade": 11,
  "7.1|Isquemia arterial aguda": 4,
  "7.2|Celulite": 2,
  "16|Pós-operatório": 25,
  "7.1|Insuficiência venosa crônica": 3,
  "6.2|Lesões do manguito rotador": 1,
  "16|Isquemia mesentérica": 4,
  "1.5|Nódulos tireoidianos": 4,
  "16|Abdome agudo": 6,
  "6.2|Lombalgia": 6,
  "7.2|Carcinoma espinocelular": 2,
  "6.2|Luxações": 1,
  "3.3|Colelitíase": 8,
  "5.1|Sangramento uterino anormal": 18,
  "5.1|Climatério e menopausa": 26,
  "5.1|Contracepção": 32,
  "5.1|Câncer de colo uterino": 33,
  "5.1|Vaginose bacteriana": 9,
  "5.2|Diabetes gestacional": 23,
  "5.2|Assistência ao parto": 13,
  "5.2|Puerpério": 18,
  "5.2|Infecções na gestação": 34,
  "5.2|Rotura prematura de membranas": 9,
  "15|Rastreamento": 26,
  "5.1|Câncer de endométrio": 10,
  "5.2|Gravidez ectópica": 11,
  "5.2|Diagnóstico de gravidez": 2,
  "5.2|Pré-natal": 41,
  "5.2|Hemorragia pós-parto": 11,
  "5.2|Trabalho de parto": 26,
  "5.1|Mioma uterino": 13,
  "5.1|Endometriose": 12,
  "5.1|Infertilidade": 11,
  "5.1|Prolapso genital": 9,
  "5.1|Câncer de ovário": 7,
  "15|Saúde da mulher": 11,
  "5.2|Pré-eclâmpsia": 19,
  "5.2|Abortamento": 20,
  "5.1|Síndrome dos ovários policísticos": 8,
  "5.1|Doença inflamatória pélvica": 10,
  "5.1|Candidíase vaginal": 4,
  "5.2|Eclâmpsia": 1,
  "5.2|Descolamento prematuro de placenta": 10,
  "5.2|Isoimunização Rh": 5,
  "5.1|Tricomoníase": 3,
  "5.2|Síndrome HELLP": 1,
  "5.1|Planejamento reprodutivo": 5,
  "8|Prolactinoma": 2,
  "10|Infecções sexualmente transmissíveis": 13,
  "15|Bioética": 7,
  "5.2|Idade gestacional": 5,
  "4.2|Incontinência urinária": 7,
  "5.2|Placenta prévia": 7,
  "15|Atenção Primária": 87,
  "15|Saúde do idoso": 7,
  "15|SUS": 63,
  "12|Polifarmácia": 4,
  "15|Imunização": 29,
  "15|Saúde do trabalhador": 24,
  "15|Estudos epidemiológicos": 36,
  "15|Epidemiologia": 44,
  "15|Vigilância epidemiológica": 32,
  "15|Testes diagnósticos": 26,
  "15|Estratégia Saúde da Família": 15,
  "12|Quedas": 3,
  "13|Risco de suicídio": 10,
  "13|Transtorno bipolar": 3,
  "10|Infecções relacionadas à assistência": 4,
  "15|Saúde da criança": 4,
  "2.2|Doença arterial coronariana crônica": 5,
  "3.2|Hipertensão portal": 7,
  "3.2|Icterícia": 2,
  "2.2|Febre reumática": 4,
  "4.1|Distúrbios ácido-base": 7,
  "14|Anafilaxia": 6,
  "10|Malária": 4,
  "9|Coagulopatias": 8,
  "4.2|Hiperplasia prostática benigna": 2,
  "2.1|Fibrose pulmonar": 2,
  "6.1|Artrite séptica": 2,
  "15|Bioestatística": 9,
  "3.2|Ascite": 3,
  "14|Crise hipertensiva": 2,
  "7.2|Dermatite de contato": 2,
  "1.1|Esclerose múltipla": 2,
  "3.1|Úlcera péptica": 4,
  "9|Neutropenia febril": 4,
  "13|Transtornos alimentares": 7,
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
  "3.2|Peritonite bacteriana espontânea": 3,
  "7.1|Dissecção de aorta": 3,
  "4.2|Câncer de bexiga": 1,
  "4.2|Retenção urinária": 2,
  "1.3|Vertigem": 4,
  "6.2|Lesão do ligamento cruzado anterior": 1,
  "8|Distúrbios do cálcio": 2,
  "14|Parada cardiorrespiratória": 12,
  "4.1|Nefropatia diabética": 3,
  "2.2|Choque cardiogênico": 1,
  "12|Cuidados paliativos": 11,
  "10|Toxoplasmose": 4,
  "1.5|Câncer de tireoide": 4,
  "2.2|Endocardite infecciosa": 5,
  "2.1|Tabagismo": 6,
  "1.5|Hiperparatireoidismo": 3,
  "3.3|Câncer de vesícula": 4,
  "3.1|Diarreia aguda": 3,
  "5.2|Restrição de crescimento fetal": 8,
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
  "10|Febre amarela": 3,
  "9|Transfusão sanguínea": 3,
  "7.2|Psoríase": 1,
  "1.2|Retinopatia diabética": 2,
  "8|Hipoglicemia": 1,
  "2.1|Pneumotórax": 2,
  "1.3|Sinusite/rinossinusite": 2,
  "16|Nutrição cirúrgica": 3,
  "10|Leptospirose": 1,
  "1.4|Herpes simples": 1,
  "3.1|Dispepsia funcional": 1,
  "1.1|Encefalite": 1,
  "1.4|Sialolitíase": 1,
  "2.2|Síncope": 1,
  "1.2|Glaucoma": 1,
  "14|Insuficiência respiratória": 2,
  "2.1|SDRA": 2,
  "14|Distúrbios hidroeletrolíticos": 1,
  "13|TEPT": 1,
  "10|Chikungunya": 2,
  "1.2|Conjuntivite": 2,
  "6.1|Bursites e tendinopatias": 1,
  "10|Endocardite": 1,
  "2.1|Apneia do sono": 1,
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
    "id": "tp2022-57",
    "topography": "1.2",
    "topic": "Uveíte",
    "module": "Pediatria",
    "text": "Menina de 6 anos com AIJ oligoarticular e FAN positivo. Qual a complicação crônica mais esperada?",
    "options": [
      "(A) Uveíte anterior aguda.",
      "(B) Uveíte anterior crônica.",
      "(C) Síndrome de ativação macrofágica.",
      "(D) Síndrome inflamatória sistêmica."
    ],
    "correctAnswer": 1,
    "explanation": "Menina pequena com artrite crônica que começou em um joelho e, ao longo do tempo, atingiu poucas grandes articulações, com FAN positivo em título alto e fator reumatoide negativo: é artrite idiopática juvenil (AIJ) oligoarticular.\n\nNesse subtipo, sobretudo em meninas pequenas com FAN positivo, a complicação mais temida é a uveíte anterior crônica. Ela é silenciosa, sem olho vermelho ou dor, e pode levar a catarata, glaucoma e perda visual se não for detectada. Por isso essas crianças precisam de avaliação oftalmológica periódica com lâmpada de fenda, mesmo sem queixas, com intervalo mais curto (a cada 3 meses) no grupo de maior risco.",
    "commentary": "Uveíte anterior aguda (A): é sintomática (olho vermelho, dor, fotofobia) e típica da AIJ relacionada a entesite, em meninos maiores com HLA-B27.\n\nSíndrome de ativação macrofágica (C): complicação grave associada principalmente à forma sistêmica da AIJ, com febre, exantema e serosite, não à oligoarticular.\n\nMIS-C (D): síndrome inflamatória multissistêmica pós-covid-19, sem relação com o quadro crônico descrito.",
    "tip": "AIJ oligoarticular + menina pequena + FAN positivo = uveíte anterior crônica silenciosa: lâmpada de fenda periódica.",
    "reference": "Sen ES, Ramanan AV. Juvenile idiopathic arthritis-associated uveitis. Clin Immunol. 2020;211:108322.",
    "tags": [
      "reumatologia",
      "oftalmologia"
    ]
  },
  {
    "id": "tp2024-32",
    "topography": "1.1",
    "topic": "Epilepsia",
    "module": "Clínica Médica",
    "text": "Homem de 32 anos procura a UBS, relatando ter apresentado primeira crise convulsiva há 1 mês, quando procurou o hospital. Na ocasião, foram descartadas causas agudas por meio de anamnese, exame físico, exames laboratoriais e de tomografia de crânio. Foi introduzido valproato em baixa dose (10mg/kg/dia). Evoluiu assintomático desde então. Exame físico sem alterações. A conduta adequada, de acordo com o protocolo do Ministério da Saúde, é:",
    "options": [
      "(A) Otimizar dose de valproato e reavaliar em 3 meses.",
      "(B) Manter dose de valproato e reavaliar em 3 meses.",
      "(C) Descontinuar valproato e reavaliar em 3 meses.",
      "(D) Manter valproato e realizar ressonância magnética de encéfalo."
    ],
    "correctAnswer": 2,
    "explanation": "O rapaz teve uma crise única, investigada sem causa aguda, tem exame físico normal e não há relato de lesão cerebral prévia, alteração no EEG nem crise durante o sono. Nessa situação, o risco de nova crise é relativamente baixo, e o protocolo do Ministério da Saúde não recomenda manter antiepiléptico após uma única crise sem fatores de risco.\n\nO valproato foi iniciado sem indicação clara e ainda traz efeitos adversos relevantes (ganho de peso, tremor, toxicidade hepática e teratogenicidade). A conduta é retirá-lo e reavaliar, orientando o paciente a procurar atendimento se houver nova crise; uma segunda crise não provocada define epilepsia e indica tratamento.",
    "commentary": "Otimizar a dose de valproato (A): não há indicação de tratar, então aumentar a dose expõe o paciente a efeitos adversos sem benefício.\n\nManter a dose (B): manter o fármaco sem indicação também não é recomendado após primeira crise sem fatores de risco.\n\nManter valproato e pedir ressonância (D): a ressonância pode completar a investigação, mas não justifica manter o antiepiléptico em um paciente sem critérios para tratamento.",
    "tip": "Primeira crise sem causa e sem fator de risco (EEG, lesão, exame, sono): não trate; espere a segunda.",
    "reference": "Tratado de Neurologia da Academia Brasileira de Neurologia, 2ª edição.",
    "tags": [
      "neurologia"
    ]
  },
  {
    "id": "tp2021-38",
    "topography": "2.2",
    "topic": "Infarto agudo do miocárdio",
    "module": "Clínica Médica",
    "text": "Homem, 58 anos, com antecedente de dislipidemia e tabagismo, apresenta dor epigástrica em queimação irradiada para região precordial, associada à náusea e sudorese há 7 horas. ECG: supradesnivelamento de ST em DII, DIII e AVF e infradesnivelamento em V1-V2. Evoluiu com hipotensão, dispneia intensa, sopro sistólico em foco mitral e crepitações pulmonares. A localização do IAM e possível complicação são:",
    "options": [
      "(A) Parede lateral; ruptura de septo interventricular.",
      "(B) Parede ínfero-dorsal; ruptura de músculo papilar.",
      "(C) Parede anterior; ruptura de músculo papilar.",
      "(D) Parede inferior; ruptura de septo interventricular."
    ],
    "correctAnswer": 1,
    "explanation": "O supradesnivelamento em DII, DIII e aVF representa infarto inferior do miocárdio, e o infradesnivelamento em espelho nas precordiais V1-V2 traduz acometimento dorsal concomitante (infarto ínfero-dorsal). A congestão súbita com hipotensão e o aparecimento de sopro de regurgitação mitral sela a complicação mecânica de insuficiência mitral aguda por isquemia/ruptura do músculo papilar.",
    "commentary": "A parede inferior e dorsal recebe irrigação habitual pela coronária direita ou pela artéria circunflexa, as quais são também as exclusivas condutoras de fluxo do músculo papilar posteromedial. Sendo assim, o infarto ínfero-dorsal predispõe fortemente a lesões agudas desse músculo papilar, induzindo insuficiência mitral aguda com congestão retrógrada catastrófica na monta descrita.",
    "reference": "ZIPES, MDP et al. Braunwald – Tratado de Doenças Cardiovasculares. 9ª ed. Rio de Janeiro: Elsevier, 2013",
    "tags": [
      "cardiologia",
      "emergência"
    ]
  },
  {
    "id": "tp2023-63",
    "topography": "16",
    "topic": "Trauma abdominal",
    "module": "Cirurgia",
    "text": "No trauma esplênico grau I, com estabilidade hemodinâmica e líquido na cavidade estimado em 500mL, que ocorreu 6 horas antes do atendimento, qual o tratamento recomendado?",
    "options": [
      "(A) Tratamento não-operatório em leito intensivo.",
      "(B) Punção abdominal.",
      "(C) Laparotomia com esplenectomia.",
      "(D) Laparoscopia diagnóstica e esplenectomia, se necessário."
    ],
    "correctAnswer": 0,
    "explanation": "Paciente com lesão esplênica grau I (hematoma ou laceração pequenos e superficiais), estável hemodinamicamente, avaliado 6 horas após o trauma, com cerca de 500 mL de líquido livre. Em pacientes estáveis, a maioria das lesões de baço para de sangrar sozinha, e o tratamento não operatório é o padrão, preservando o órgão e sua função imunológica.\n\nEsse tratamento exige vigilância: internação em local com monitorização (UTI ou unidade semi-intensiva), exames seriados (hemoglobina e exame abdominal), repouso e centro cirúrgico disponível. Se o paciente ficar instável ou tiver sinais de peritonite, indica-se a cirurgia; em casos selecionados com extravasamento de contraste, a angioembolização é uma alternativa.",
    "commentary": "Punção abdominal (B): a paracentese ou o lavado peritoneal só mostram que há sangue, o que a imagem já mostrou; não tratam nem mudam a conduta em paciente estável.\n\nLaparotomia com esplenectomia (C): é indicada em paciente instável ou com peritonite, não em lesão grau I estável.\n\nLaparoscopia com esplenectomia (D): procedimento invasivo sem indicação em paciente estável com lesão leve; a esplenectomia desnecessária ainda expõe a infecções graves por germes encapsulados.",
    "tip": "Trauma de baço com paciente estável = tratamento não operatório com monitorização; instabilidade = cirurgia.",
    "reference": "Sabiston: textbook of surgery; 21 edition, 2022; editora Elsevier",
    "tags": [
      "trauma"
    ]
  },
  {
    "id": "tp2021-74",
    "topography": "4.2",
    "topic": "Câncer de próstata",
    "module": "Cirurgia",
    "text": "Homem, 68 anos, refere jato urinário fraco e entrecortado, esforço para iniciar micção e noctúria há 6 meses. Antígeno prostático específico (PSA) do ano anterior de 1,2 ng/mL. PSA atual = 2,6 ng/mL. Toque retal: próstata com dimensões de aproximadamente 40 g de peso e consistência fibroelástica. Para descartar neoplasia maligna da próstata, deve-se solicitar inicialmente:",
    "options": [
      "(A) Tomografia computadorizada de abdome total.",
      "(B) Ressonância magnética multiparamétrica.",
      "(C) Ultrassom de abdome total e fosfatase alcalina.",
      "(D) Cintilografia com gálio-67."
    ],
    "correctAnswer": 1,
    "explanation": "Paciente com sintomas miccionais obstrutivos moderados, próstata de textura normal elástica ao toque, porém exibindo cinética de elevação rápida do PSA (ultrapassando velocidade limite aceitável de 0,75 ng/mL ao ano) tem indicação inicial de afastar adenocarcinoma por Ressonância Magnética Multiparamétrica (RMmp).",
    "commentary": "Apesar de exibir valor absoluto do PSA atual abaixo de 4,0 ng/mL, o paciente em tela apresenta critério de alta suspeição pela taxa de velocidade anual de ascensão sérica do antígeno prostático (que saltou de 1,2 para 2,6 ng/mL em apenas doze meses, um ganho bem acima do limite aceitável anualizado de 0,75 ng/mL). A conduta atual recomendada pelas sociedades de urologia e oncologia indica a feitura prévia de Ressonância Magnética Multiparamétrica (RMmp) para detecção de sítios suspeitos e cálculo do PI-RADS, permitindo orientar com precisão a posterior biópsia prostática dirigida. Tomografia e ultrassonografia simples de vias não dispõem de resolução ou acurácia estrutural fina para diagnóstico precoce de câncer intraprostático.",
    "reference": "Campbells Urology. 9th Edition. New York: Saunders Company, 2007. Zerati Filho M, Nardozza Jr A, Reis RB. Urologia fundamental. São Paulo: Planmark, 2010.",
    "tags": [
      "urologia",
      "oncologia",
      "ambulatório"
    ]
  },
  {
    "id": "tp2024-91",
    "topography": "5.2",
    "topic": "Puerpério",
    "module": "Ginecologia e Obstetrícia",
    "text": "Puérpera (45 dias) com COVID-19 leve. Preocupada com a amamentação exclusiva. Qual a orientação?",
    "options": [
      "(A) Interromper amamentação; usar fórmula.",
      "(B) Continuar amamentando com precauções de higiene (máscara e lavagem das mãos).",
      "(C) Amamentar apenas se estiver vacinada.",
      "(D) Amamentar apenas se o bebê já tiver sido exposto."
    ],
    "correctAnswer": 1,
    "explanation": "O leite materno não é considerado meio de passagem do SARS-CoV-2 para o bebê, e amamentar continua trazendo benefícios ao bebê, inclusive anticorpos. Por isso Ministério da Saúde, OMS e sociedades de pediatria recomendam que a mãe com COVID-19, suspeita ou confirmada, continue amamentando.\n\nO cuidado é evitar a transmissão por gotículas: usar máscara durante as mamadas, higienizar as mãos antes de pegar a criança e higienizar superfícies. Essa orientação vale independentemente de a mãe estar vacinada.",
    "commentary": "Interromper e usar fórmula (A): suspender o aleitamento não protege o bebê, já que o leite não transmite o vírus, e o priva dos benefícios da amamentação.\n\nAmamentar só se vacinada (C): a recomendação de manter o aleitamento não depende do estado vacinal da mãe.\n\nAmamentar só se o bebê já foi exposto (D): não há base para essa restrição; com as medidas de higiene, a amamentação deve continuar em qualquer caso.",
    "tip": "Mãe com COVID-19: continua amamentando, com máscara e mãos lavadas.",
    "reference": "Centers for Disease Control and Prevention. (2021). Care for Breastfeeding People: Interim Guidance on Breastfeeding and Breast Milk Feeds in the Context of COVID-19. CDC. World Health Organization. (2020). Breastfeeding and COVID19: Scientific Brief. WHO. American Academy of Pediatrics. (2021). Breastfeeding During the COVID-19 Pandemic. AAP. Ministério da Saúde do Brasil (2021) Campanha incentiva o aleitamento materno no Brasil",
    "tags": [
      "puerpério",
      "aleitamento"
    ]
  },
  {
    "id": "tp2025-86",
    "topography": "5.1",
    "topic": "Endometriose",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 33 anos, nuligesta, teve a menarca aos 13 anos. Refere vida sexual activa, em uso regular de preservativo. Relata que apresentava cólicas menstruais leves que melhoravam com analgésicos, mas há 2 anos as dores pioraram e atualmente não melhoram nem com anti-inflamatórios. Apresenta queixa de dispareunia de profundidade, que se iniciou há 1 ano. Diante do quadro descrito, assinale a conduta correta:",
    "options": [
      "(A) Ultrassonografia transvaginal",
      "(B) Introdução de anticoncepcional oral",
      "(C) Videolaparoscopia diagnóstica",
      "(D) Tomografia computadorizada de pelve"
    ],
    "correctAnswer": 0,
    "explanation": "A Ultrassonografia Transvaginal (com preparo intestinal prévio) consagra-se como o método propedêutico não invasivo de primeira escolha para iniciar a propedêutica de dismenorreia secundária refratária.",
    "commentary": "A progressão severa adquirida de dismenorreia refratária aos analgésicos e anti-inflamatórios em associação com dispareunia de profundidade sugere fortemente a hipótese de endometriose profunda infiltrativa (dismenorreia secundária). No itinerário de investigação diagnóstica inicial, a Ultrassonografia Transvaginal especializada com preparo intestinal constitui o primeiro exame complementar de imagem de escolha, dotado de alta sensibilidade diagnóstica. Métodos puramente empíricos terapêuticos ou videolaparoscopia direta ficam preteridos até o término do estudo por imagem.",
    "reference": "HOFFMAN, Barbara L. et al. Ginecologia de Williams. Grupo A, 2014; ACOG Practice Bulletin: Diagnosis and Management of Endometriosis, 2021.",
    "tags": [
      "ginecologia geral",
      "dor pélvica"
    ]
  },
  {
    "id": "tp2019-100",
    "topography": "5.1",
    "topic": "Câncer de colo uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 33 anos de idade, apresenta citologia cervical compatível com lesão intraepitelial de baixo grau (LIEBG/LSIL).\n\nDe acordo com as orientações do Instituto Nacional do Câncer (INCA), como deve ser o seguimento desta mulher?",
    "options": [
      "(A) Repetir a citologia imediatamente e, se persistir a alteração, encaminhar para colposcopia.",
      "(B) Repetir a citologia em 6 meses e, se persistir a alteração, encaminhar para colposcopia.",
      "(C) Ser encaminhada para a colposcopia imediata.",
      "(D) Colher exame de detecção de DNA-HPV."
    ],
    "correctAnswer": 1,
    "explanation": "Pelas diretrizes do INCA (2016) para rastreamento citológico, a lesão intraepitelial de baixo grau em mulheres com 25 anos ou mais deve ser seguida com repetição da citologia em 6 meses. Se a alteração persistir, a paciente é encaminhada para colposcopia.",
    "commentary": "A colposcopia imediata é para lesões de alto grau. Observação: com a nova diretriz de rastreamento por DNA-HPV (INCA, 2024), a conduta passa a depender do resultado do teste de HPV nos locais que já a adotaram.",
    "reference": "Diretrizes brasileiras para o rastreamento do câncer do colo do útero / Instituto Nacional de Câncer. Coordenação Geral de Ações Estratégicas. Divisão de Apoio à Rede de Atenção Oncológica. – Rio de Janeiro: INCA, 2011. ISBN 978-85-7318-184-5",
    "tags": [
      "ginecologia",
      "rastreamento",
      "câncer de colo uterino"
    ]
  },
  {
    "id": "tp2022-109",
    "topography": "5.2",
    "topic": "Infecções na gestação",
    "module": "Saúde Coletiva",
    "text": "Gestante de 32 semanas com HIV positivo recém-descoberto. CV desconhecida. Sobre as recomendações do Ministério da Saúde para o parto:",
    "options": [
      "(A) Parto natural induzido na 34ª semana.",
      "(B) Cesárea eletiva após a 38ª semana e AZT injetável 3h antes.",
      "(C) Parto induzido apenas se ultrapassar a 40ª semana com AZT injetável.",
      "(D) Cesárea eletiva após 34 semanas."
    ],
    "correctAnswer": 1,
    "explanation": "Gestante com HIV descoberto com 32 semanas e sem carga viral: a via de parto é decidida pela carga viral a partir de 34 semanas. Se nesse momento ela não é conhecida, ou passa de 1.000 cópias/mL, o Ministério da Saúde indica cesárea eletiva a partir de 38 semanas, antes do início do trabalho de parto e com bolsa íntegra, porque isso reduz a transmissão vertical.\n\nNessas gestantes, o AZT (zidovudina) intravenoso é iniciado pelo menos 3 horas antes da cesárea (ou no início do trabalho de parto) e mantido até o clampeamento do cordão. Ao mesmo tempo, ela deve começar já a terapia antirretroviral e colher a carga viral, que pode mudar o planejamento se vier baixa a tempo.",
    "commentary": "Parto natural induzido com 34 semanas (A): indução prematura não tem indicação, e o parto vaginal só é opção com carga viral abaixo de 1.000 cópias/mL; o dolutegravir oral não substitui o AZT intravenoso no parto.\n\nIndução só após 40 semanas (C): com carga viral desconhecida, a via indicada é a cesárea eletiva, não a espera pelo trabalho de parto.\n\nCesárea eletiva após 34 semanas (D): antecipar a cesárea traria riscos de prematuridade; ela é programada a partir de 38 semanas.",
    "tip": "HIV na gestação com carga viral desconhecida ou acima de 1.000 após 34 semanas: cesárea eletiva com 38 semanas + AZT IV 3 h antes.",
    "reference": "Protocolo Transmissão Vertical HIV/Sífilis/Hepatites, 2022.",
    "tags": [
      "obstetrícia",
      "infectologia"
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
    "id": "tp2021-15",
    "module": "Ciências Básicas",
    "text": "A fibrose cística é causada por mutações no gene CFTR. Algumas substituições de bases não resultam em doença. Isso é explicado por mutações:",
    "options": [
      "(A) De sentido trocado.",
      "(B) Compensadoras.",
      "(C) Sem sentido.",
      "(D) Silenciosas."
    ],
    "correctAnswer": 3,
    "explanation": "Mutações silenciosas caracterizam-se por substituições de nucleotídeos que mantêm a codificação do mesmo aminoácido original devido ao código genético degenerativo.",
    "commentary": "Sendo o código genético degenerativo/redundante, múltiplos códons de trincas de nucleotídeos especificam o mesmo aminoácido. Uma mutação silenciosa altera a base mas gera o mesmo aminoácido residual na proteína CFTR, preservando sua integridade funcional e biológica.",
    "reference": "Nussbaum RL, McInnes RR, Willard HF. Thompson & Thompson. Genética Médica, 7a. Ed., Guanabara Koogan, Rio de Janeiro, 2008.",
    "tags": [
      "genética",
      "biologia molecular"
    ]
  },
  {
    "id": "enamed-2025-52",
    "topography": "11",
    "topic": "Desenvolvimento neuropsicomotor",
    "module": "Pediatria",
    "text": "Mãe de menina de 11 meses, em consulta de puericultura, relata que não há queixas específicas no momento e refere que a criança está começando a trocar passos de maneira independente. Apresenta marcos do desenvolvimento anteriores a 11 meses dentro da normalidade e bom ganho pôndero-estatural. Gestação e parto sem intercorrências.\n\nO reflexo primitivo usualmente presente nessa faixa etária é o",
    "options": [
      "(A) reflexo plantar.",
      "(B) reflexo de Moro.",
      "(C) reflexo de procura.",
      "(D) reflexo tônico cervical."
    ],
    "correctAnswer": 0,
    "explanation": "O reflexo plantar (Babinski fisiológico) é um reflexo primitivo que normalmente permanece presente em lactentes e crianças pequenas, podendo persistir de forma fisiológica até aproximadamente 12 a 24 meses de idade devido à incompleta mielinização do trato corticoespinal (via piramidal).",
    "commentary": "Os demais reflexos primitivos desaparecem bem mais cedo no desenvolvimento do lactente normal: o reflexo de procura (C) some com 3 a 4 meses; o reflexo de Moro (B) desaparece entre 4 e 6 meses; e o reflexo tônico-cervical assimétrico (D) desaparece por volta dos 6 meses de idade.",
    "reference": "Nelson Tratado de Pediatria / Sociedade Brasileira de Pediatria (SBP)",
    "tags": [
      "pediatria",
      "puericultura",
      "desenvolvimento infantil",
      "reflexos primitivos"
    ]
  },
  {
    "id": "enamed-2026-63",
    "topography": "15",
    "topic": "Epidemiologia",
    "module": "Saúde Coletiva",
    "text": "Uma equipe técnica do Ministério da Saúde está avaliando os efeitos da redução do ponto de corte da medida de PA sistólica de 130 mmHg para 120 mmHg para o diagnóstico de hipertensão arterial (HA).\n\nConsiderando-se as mudanças nos valores de referência, o que se espera em relação ao diagnóstico de HA?",
    "options": [
      "(A) Aumento na detecção da HA e redução na frequência de falsos positivos.",
      "(B) Aumento na detecção da HA e aumento na frequência de falsos positivos.",
      "(C) Redução na detecção da HA e redução na frequência de falsos positivos.",
      "(D) Redução na detecção da HA e aumento na frequência de falsos positivos."
    ],
    "correctAnswer": 1,
    "explanation": "Reduzir o ponto de corte para o diagnóstico (de 130 para 120 mmHg) aumenta a sensibilidade e diminui a especificidade do critério.\n\nAssim, mais pessoas serão classificadas como hipertensas (aumento da detecção), mas também haverá mais falsos positivos.",
    "commentary": "Toda mudança de ponto de corte gera um trade-off: não é possível aumentar a detecção e reduzir falsos positivos ao mesmo tempo apenas deslocando o limiar. (Gabarito preliminar do INEP.)",
    "reference": "Fletcher RH. Epidemiologia Clínica — Testes diagnósticos e pontos de corte",
    "tags": [
      "saúde coletiva",
      "epidemiologia",
      "hipertensão"
    ]
  },
  {
    "id": "unifesp2025-51",
    "topography": "15",
    "topic": "Rastreamento",
    "module": "Saúde Coletiva",
    "text": "Para determinar se, de fato, um programa de rastreamento de câncer de próstata é benéfico para aumento da longevidade de homens (\"prolongar vidas\"), qual dos seguintes desfechos clínicos é o mais adequado?",
    "options": [
      "(A) Redução na mortalidade geral.",
      "(B) Redução na mortalidade específica por câncer de próstata.",
      "(C) Aumento na sobrevida em 5 anos."
    ],
    "correctAnswer": 0,
    "explanation": "Para saber se o rastreamento 'prolonga vidas', o desfecho mais adequado é a mortalidade geral (por todas as causas).\n\nA mortalidade específica pode cair sem ganho real de longevidade se o rastreamento e o tratamento (biópsias, prostatectomia, radioterapia) causarem mortes por outras causas, ou se houver erro na atribuição da causa do óbito. A mortalidade geral capta o efeito líquido.",
    "commentary": "Mortalidade específica (B): é o desfecho usual dos ensaios de rastreamento, mas não demonstra aumento da longevidade, pois ignora mortes causadas pela própria intervenção.\n\nSobrevida em 5 anos (C): sujeita aos vieses de tempo de antecipação (lead time), de duração (length bias) e de sobrediagnóstico; aumenta mesmo que ninguém viva mais.",
    "reference": "Fletcher — Epidemiologia Clínica (Prevenção) / USPSTF Prostate Cancer Screening",
    "tags": [
      "epidemiologia",
      "rastreamento",
      "câncer de próstata",
      "vieses"
    ]
  },
  {
    "id": "hosbos2027-49",
    "topography": "5.1",
    "topic": "Sangramento uterino anormal",
    "module": "Ginecologia e Obstetrícia",
    "text": "G.B.V., 18 anos, com queixa de amenorreia primária. Ao exame físico: estatura 1,75m, IMC 21 kg/m², mamas desenvolvidas (Tanner M4), pelos pubianos e axilares escassos (Tanner P1) e abaulamento sugestivo de hérnia inguinal bilateral. Paciente nega atividade sexual. Ultrassom pélvico revela: ausência de útero e ovários.\n\nDe acordo com o caso acima, assinale a alternativa que representa o diagnóstico mais provável.",
    "options": [
      "(A) Síndrome de Mayer-Rokitansky-Kuster-Hauser (Agenesia mulleriana).",
      "(B) Disgenesia gonadal pura (Síndrome de Swyer).",
      "(C) Síndrome da insensibilidade completa aos androgênios.",
      "(D) Hiperplasia adrenal congênita forma não-clássica.",
      "(E) Síndrome de Turner."
    ],
    "correctAnswer": 2,
    "explanation": "Amenorreia primária em fenótipo feminino alto, com mamas bem desenvolvidas, pelos pubianos e axilares ausentes ou escassos, hérnias inguinais bilaterais (testículos) e ausência de útero e ovários: síndrome de insensibilidade completa aos androgênios (cariótipo 46,XY).\n\nOs testículos produzem testosterona, que é aromatizada em estrogênio (por isso as mamas), mas os receptores androgênicos não funcionam (por isso não há pelos). O hormônio antimülleriano impede a formação de útero e trompas.",
    "commentary": "MRKH (A): agenesia mülleriana em 46,XX, com ovários normais e pelos normais.\n\nDisgenesia gonadal pura (B): gônadas em fita sem estrogênio, logo sem desenvolvimento mamário, e com útero presente.\n\nHAC não clássica (D): causa hiperandrogenismo, com útero e ovários presentes.\n\nTurner (E): baixa estatura, sem mamas (falência ovariana) e com útero presente.",
    "reference": "Speroff — Endocrinologia Ginecológica Clínica / Febrasgo — Amenorreia",
    "tags": [
      "ginecologia",
      "amenorreia primária",
      "insensibilidade androgênica",
      "distúrbios da diferenciação sexual"
    ]
  },
  {
    "id": "hosbos2025-38",
    "topography": "1.1",
    "topic": "AVC",
    "module": "Clínica Médica",
    "text": "Paciente vem a unidade de saúde com quadro de acidente vascular cerebral isquêmico. Considerando tal quadro, é correto afirmar que é critério atual de indicação de trombólise no AVC isquêmico o seguinte:",
    "options": [
      "(A) tempo < que 6 horas, desde o último momento visto assintomático.",
      "(B) entre 2 e 4 horas e meia, desde o último momento visto assintomático.",
      "(C) ≥ 18 anos.",
      "(D) paciente diabético com glicemia, no momento do evento > 50 e < 250 mg/dL.",
      "(E) pressão arterial 185 x 110 mmHg."
    ],
    "correctAnswer": 2,
    "explanation": "Critérios de inclusão para trombólise IV (alteplase ou tenecteplase) no AVC isquêmico: idade ≥ 18 anos, déficit neurológico mensurável, TC sem hemorragia e início dos sintomas (ou último momento visto bem) até 4,5 horas.",
    "commentary": "Até 6 horas (A): a janela da trombólise é de 4,5 h; 6 h (ou até 24 h em casos selecionados) é para trombectomia.\n\nEntre 2 e 4,5 horas (B): a janela começa no início dos sintomas — quanto mais cedo, melhor; não há limite inferior.\n\nGlicemia > 50 e < 250 (D): a glicemia < 50 ou > 400 mg/dL é que deve ser corrigida/excluir mimetizadores; o critério não está formulado assim.\n\nPA 185 × 110 mmHg (E): a PA deve estar ABAIXO de 185 × 110 antes da trombólise.",
    "reference": "AHA/ASA Guidelines for the Early Management of Acute Ischemic Stroke (2019) / Diretrizes da SBDCV",
    "tags": [
      "AVC isquêmico",
      "trombólise",
      "alteplase"
    ]
  },
  {
    "id": "usprp2025-85",
    "module": "Cirurgia",
    "text": "Menino, 8 meses de idade, vem encaminhado pelo pediatra para avaliação especializada, devido ao fato de não ter encontrado o testículo direito em bolsa escrotal. Criança nascida a termo, sem problemas de saúde. Exame físico geral sem anormalidades. Testículo esquerdo está tópico e aparentemente normotrófico. A bolsa escrotal direita está vazia.\n\nQual a medida mais adequada para condução deste paciente?",
    "options": [
      "(A) Solicitar ressonância magnética de abdome e pelve para pesquisa de gônadas.",
      "(B) Palpação do testículo no canal inguinal e tentar posicioná-lo na bolsa escrotal.",
      "(C) Indicar a cirurgia o mais rápido possível para preservar a fertilidade.",
      "(D) Solicitar ultrassom abdominal para pesquisa de gônadas."
    ],
    "correctAnswer": 2,
    "explanation": "Lactente de 8 meses com testículo direito fora da bolsa (criptorquidia unilateral). A descida espontânea ocorre quase sempre até os 3–6 meses de vida; depois dos 6 meses é muito rara.\n\nAs diretrizes de urologia pediátrica (AUA, EAU, SBU) recomendam a orquidopexia entre 6 e 12 meses (no máximo até 18 meses). A cirurgia precoce reduz o dano às células germinativas e facilita a vigilância do risco de neoplasia. Por isso, aos 8 meses, deve-se indicar a cirurgia o quanto antes.",
    "commentary": "RM (A): tem baixa acurácia para testículo intra-abdominal e não muda a conduta; testículo impalpável vai para laparoscopia.\n\nPalpar e posicionar na bolsa (B): faz parte do exame físico (diferencia o testículo retrátil), mas não é tratamento da criptorquidia já estabelecida aos 8 meses.\n\nUSG abdominal (D): não é recomendada de rotina (AUA, EAU), por não alterar a conduta.",
    "reference": "AUA Guideline — Evaluation and Treatment of Cryptorchidism (2014/2018) / EAU Paediatric Urology",
    "tags": [
      "cirurgia pediátrica",
      "urologia pediátrica",
      "criptorquidia",
      "orquidopexia"
    ],
    "alert": "O exame físico cuidadoso (alternativa B) é sempre o primeiro passo para diferenciar o testículo retrátil, que não precisa de cirurgia. O gabarito oficial (C) assume a criptorquidia já confirmada e enfatiza o momento da orquidopexia."
  },
  {
    "id": "hiae2025-25",
    "topography": "3.3",
    "topic": "Colelitíase",
    "module": "Cirurgia",
    "text": "Paciente do sexo feminino, 12 anos, com quadro de dor em cólica intermitente em hipocôndrio direito há 2 meses. Realizou ultrassom de abdome, que revelou vesícula biliar normodistendida, paredes com diâmetro normal, contendo múltiplos cálculos em seu interior. Dentre as condições listadas a seguir, aquela que mais provavelmente se relaciona com o diagnóstico de colelitíase nessa paciente é:",
    "options": [
      "(A) puberdade precoce.",
      "(B) história familiar de colelitíase.",
      "(C) hipercolesterolemia familiar.",
      "(D) anemia falciforme."
    ],
    "correctAnswer": 3,
    "explanation": "Colelitíase em criança deve levantar suspeita de doença hemolítica crônica (cálculos de bilirrubinato de cálcio, pigmentares). A anemia falciforme é a principal causa no Brasil; esferocitose e talassemias também.",
    "commentary": "Puberdade precoce (A) e hipercolesterolemia familiar (C): não se associam de forma importante a cálculos na infância.\n\nHistória familiar (B): pesa pouco na criança.",
    "reference": "SBP — Colelitíase na infância / Sabiston Tratado de Cirurgia",
    "tags": [
      "cirurgia pediátrica",
      "colelitíase",
      "anemia falciforme",
      "doença hemolítica"
    ],
    "tip": "Cálculo biliar em criança: pense em hemólise (falciforme, esferocitose)."
  },
  {
    "id": "unimedpb2026-57",
    "topography": "2.1",
    "topic": "Tabagismo",
    "module": "Saúde Coletiva",
    "text": "Durante atendimento de uma criança asmática com crise moderada, o médico nota forte odor de cigarro no pai. Após confirmar que o adulto é fumante ativo, decide iniciar abordagem motivacional. Qual a próxima pergunta mais adequada?",
    "options": [
      "“Você já considerou parar de fumar em algum momento?”",
      "“Quantos cigarros você fuma diariamente?”",
      "“Você tem consciência dos riscos do tabaco para sua saúde?”",
      "“Sabia que isso piora a asma do seu filho?”",
      "“Você percebe como o cigarro faz mal para sua família?”"
    ],
    "correctAnswer": 0,
    "explanation": "Na abordagem motivacional (entrevista motivacional), começa-se com perguntas abertas, sem julgamento, que explorem a ambivalência e a motivação do próprio paciente para mudar e permitam identificar o estágio de mudança (Prochaska e DiClemente). \"Você já considerou parar de fumar em algum momento?\" convida o pai a falar de sua própria disposição, sem confronto.",
    "commentary": "Quantos cigarros fuma (B): é pergunta de avaliação da carga tabágica e dependência, útil, mas fechada e não explora motivação.\n\nConsciência dos riscos (C): soa como teste e reprovação, gerando resistência.\n\n\"Isso piora a asma do seu filho\" (D): é confrontativa e culpabilizadora; a informação deve ser dada depois, com permissão e sem julgamento.\n\n\"Como o cigarro faz mal para a família\" (E): também é acusatória e pouco eficaz para iniciar a mudança.",
    "reference": "INCA/Ministério da Saúde — Protocolo Clínico e Diretrizes Terapêuticas do Tabagismo (2020) / Miller & Rollnick — Entrevista Motivacional",
    "tags": [
      "tabagismo",
      "entrevista motivacional",
      "estágios de mudança",
      "atenção primária"
    ],
    "tip": "Entrevista motivacional: pergunta aberta, sem julgamento, sobre a vontade de mudar."
  },
  {
    "id": "sespe2026-51",
    "topography": "5.1",
    "topic": "Prolapso genital",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 60 anos de idade chega ao consultório com queixa de bola na vagina há um ano e perda involuntária de urina aos esforços, além de referir frouxidão vaginal durante ato sexual. DUM há 10 anos, G4 P4, partos vaginais. No momento do exame, foi evidenciado o seguinte cenário, segundo o POP-Q:\n• Aa +3, Ba +10, C +11\n• gh 10, pb 3, tvl 11\n• Ap +3, Bp +10, D não aferido\n\nAssinale a alternativa com o diagnóstico e a conduta CORRETA.",
    "options": [
      "Prolapso genital E IV, rotura perineal. Realizar colpocleise + sling",
      "PPP E II, rotura perineal. Realizar colpocleise com sling.",
      "PPA E I, hipertrofia de colo. Realizar traquelectomia parcial",
      "Prolapso apical E II, rotura perineal. Realizar histerectomia vaginal",
      "Prolapso apical, IUE mista e rotura perineal. Realizar colpoplastia posterior"
    ],
    "correctAnswer": 0,
    "explanation": "No POP-Q, os pontos Ba (+10), C (+11) e Bp (+10) estão muito além do hímen, com comprimento vaginal total de 11 cm: o prolapso alcança quase toda a extensão da vagina (≥ TVL − 2 cm), ou seja, eversão completa — estágio IV. O corpo perineal curto e o hiato genital amplo indicam rotura perineal, e há incontinência urinária de esforço.\n\nEm idosa sem vida sexual ativa (a alternativa assume isso), a colpocleise (fechamento da vagina) com sling para a incontinência é uma opção cirúrgica com alta taxa de sucesso e baixa morbidade.",
    "commentary": "PPP estádio II (B): o prolapso não é estágio II; os pontos estão bem além do hímen.\n\nPPA estádio I e hipertrofia de colo (C): estadiamento errado.\n\nApical estádio II com histerectomia vaginal (D): estadiamento errado.\n\nColpoplastia posterior (E): não corrige o prolapso total de todos os compartimentos.\n\nAtenção: a paciente refere frouxidão vaginal durante o ato sexual, ou seja, tem vida sexual; a colpocleise impede a relação vaginal. A banca considerou a colpocleise correta, mas na prática ela só é indicada para quem não deseja mais vida sexual com penetração.",
    "reference": "IUGA/ICS — POP-Q / FEBRASGO — Prolapso genital",
    "tags": [
      "uroginecologia",
      "prolapso genital",
      "POP-Q",
      "colpocleise",
      "incontinência urinária"
    ],
    "tip": "POP-Q estágio IV: eversão total (ponto ≥ TVL − 2 cm)."
  },
  {
    "id": "hpp2026-32",
    "topography": "16",
    "topic": "Abdome agudo",
    "module": "Cirurgia",
    "text": "Menino com 2 anos de idade iniciou há 4 horas com episódios intermitentes de choro intenso, vômitos e evacuação com muco e sangue. No exame físico apresenta abdome distendido, doloroso à palpação e massa palpável em abdome à direita. O diagnóstico mais provável é:",
    "options": [
      "Doença de Hirschsprung.",
      "Diverticulite de Meckel.",
      "Apendicite aguda.",
      "Intussuscepção intestinal."
    ],
    "correctAnswer": 3,
    "explanation": "Lactente de 2 anos com crises de choro intenso e intermitente (cólica), vômitos, fezes com muco e sangue (\"geleia de framboesa\") e massa palpável em abdome direito (\"em salsicha\"): intussuscepção intestinal, geralmente ileocólica.\n\nO ultrassom mostra o sinal do alvo; sem sinais de peritonite, o tratamento é a redução hidrostática ou pneumática guiada por imagem.",
    "commentary": "Doença de Hirschsprung (A): constipação crônica desde o período neonatal (atraso na eliminação de mecônio), distensão; não cursa com crises de cólica e fezes em geleia.\n\nDiverticulite de Meckel (B): pode simular apendicite; o divertículo sangra de forma indolor (por mucosa gástrica ectópica), sem massa palpável.\n\nApendicite (C): dor contínua migratória para fossa ilíaca direita, febre; fezes com sangue e massa em salsicha não são típicas.",
    "reference": "Nelson Textbook of Pediatrics — Intussuscepção / SBP",
    "tags": [
      "intussuscepção intestinal",
      "abdome agudo pediátrico",
      "fezes em geleia de framboesa"
    ],
    "tip": "Cólica + geleia de framboesa + massa em salsicha = intussuscepção."
  },
  {
    "id": "cesupa2025-36",
    "topography": "5.1",
    "topic": "Mioma uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente 28 anos, casada há 05 anos, há 02 anos tentando engravidar sem sucesso. Parceiro com espermograma normal, afastados todos os fatores masculinos. Na histerossalpingografia, achado relevante de tumoração intra cavitária uterina em parede fúndica com obstrução do óstio tubário direito; prova de Cotté positiva à esquerda e negativa à direita.\n\nQual a conduta em relação à tumoração uterina, podendo-se tratar de um mioma submucoso, categoria FIGO Zero?",
    "options": [
      "Histerectomia.",
      "Miomectomia Histeroscópica.",
      "Miomectomia por laparotomia.",
      "Conduta expectante."
    ],
    "correctAnswer": 1,
    "explanation": "Infertilidade há 2 anos, parceiro normal, e histerossalpingografia com tumoração intracavitária no fundo uterino obstruindo o óstio tubário direito (prova de Cotté negativa à direita), compatível com mioma submucoso FIGO 0 (totalmente dentro da cavidade, pediculado).\n\nMiomas submucosos distorcem a cavidade e reduzem as taxas de implantação e gravidez; sua retirada melhora a fertilidade. Para os tipos 0 e 1 (e alguns tipo 2 pequenos), o tratamento de escolha é a miomectomia histeroscópica: minimamente invasiva, sem incisão no útero, preserva a fertilidade e permite gravidez com mais segurança.",
    "commentary": "Histerectomia (A): elimina a possibilidade de gravidez numa paciente que quer engravidar.\n\nMiomectomia por laparotomia (C): é para miomas intramurais ou subserosos grandes ou múltiplos; para mioma submucoso tipo 0, é mais invasiva, deixa cicatriz uterina e aderências, sem vantagem.\n\nConduta expectante (D): mioma submucoso em paciente infértil deve ser retirado; esperar mantém a causa da infertilidade.",
    "tip": "Mioma submucoso FIGO 0–1 + infertilidade ou sangramento = miomectomia histeroscópica.",
    "reference": "FEBRASGO. Leiomioma uterino – Protocolo nº 32, 2021. Munro MG et al. FIGO classification system (PALM-COEIN), 2018.",
    "tags": [
      "mioma submucoso",
      "infertilidade",
      "histeroscopia"
    ]
  },
  {
    "id": "famema2025-51",
    "topography": "5.1",
    "module": "Ginecologia e Obstetrícia",
    "text": "Assinale a alternativa que apresenta fator(es) de risco comprovado(s) para câncer mamário.",
    "options": [
      "Terapia hormonal estroprogestativa.",
      "Idade tardia da menarca e precoce da menopausa.",
      "Multiparidade e amamentação.",
      "Lesões mamárias não proliferativas sem antecedente familiar."
    ],
    "correctAnswer": 0,
    "explanation": "A terapia hormonal combinada (estrogênio + progestagênio) é fator de risco comprovado para câncer de mama: no estudo WHI, aumentou o risco após cerca de 5 anos de uso, e o risco cai após a suspensão. O estrogênio isolado, em mulheres histerectomizadas, praticamente não aumentou o risco.\n\nOutros fatores comprovados: idade, sexo feminino, mutações BRCA1/2, história familiar em parentes de 1º grau, exposição a radiação, menarca precoce, menopausa tardia, nuliparidade ou primeira gestação tardia, obesidade pós-menopausa, álcool e lesões proliferativas com atipia.",
    "commentary": "Menarca tardia e menopausa precoce (B): o risco aumenta com mais tempo de exposição estrogênica, ou seja, menarca precoce e menopausa tardia; as condições da alternativa são protetoras.\n\nMultiparidade e amamentação (C): ambas são fatores de proteção.\n\nLesões não proliferativas (D): cistos e fibroadenomas simples, sem história familiar, não aumentam o risco de forma relevante.",
    "tip": "Câncer de mama: mais estrogênio ao longo da vida = mais risco (menarca precoce, menopausa tardia, nuliparidade, TH combinada). Amamentação e multiparidade protegem.",
    "reference": "Instituto Nacional de Câncer (INCA). Câncer de mama: fatores de risco, 2022. Rossouw JE et al. Risks and benefits of estrogen plus progestin (WHI). JAMA, 2002.",
    "tags": [
      "câncer de mama",
      "fatores de risco",
      "terapia hormonal"
    ]
  },
  {
    "id": "famema2026-55",
    "topography": "5.1",
    "topic": "Prolapso genital",
    "module": "Ginecologia e Obstetrícia",
    "text": "Um fator de risco para incontinência urinária e prolapso de órgãos pélvicos é",
    "options": [
      "a síndrome de Marfan.",
      "o índice de massa corpórea (IMC) abaixo de 15.",
      "o parto cesáreo.",
      "a cor preta."
    ],
    "correctAnswer": 0,
    "explanation": "A síndrome de Marfan é uma doença do tecido conjuntivo (alteração da fibrilina) que deixa fáscias e ligamentos do assoalho pélvico mais frágeis; por isso aumenta o risco de prolapso de órgãos pélvicos e de incontinência urinária, como outras colagenopatias (Ehlers-Danlos). Os demais fatores de risco principais são parto vaginal (sobretudo múltiplo, com fórceps ou fetos grandes), idade, menopausa, obesidade e aumento crônico da pressão abdominal.",
    "commentary": "IMC abaixo de 15 (B): o fator de risco é o excesso de peso (obesidade), que aumenta a pressão abdominal.\n\nParto cesáreo (C): a cesárea tem menor risco de lesão do assoalho que o parto vaginal; o fator de risco é o parto vaginal.\n\nCor preta (D): mulheres negras têm menor prevalência de prolapso; mulheres brancas e hispânicas têm maior risco.",
    "tip": "Prolapso e incontinência: parto vaginal, idade, menopausa, obesidade, tosse/constipação crônicas e colagenopatias (Marfan, Ehlers-Danlos).",
    "reference": "FEBRASGO. Prolapso genital – Protocolo, 2021. Jelovsek JE et al. Pelvic organ prolapse. Lancet, 2007.",
    "tags": [
      "prolapso genital",
      "incontinência urinária",
      "síndrome de Marfan"
    ]
  },
  {
    "id": "hsrc2026-28",
    "topography": "3.4",
    "topic": "Pancreatite crônica",
    "module": "Cirurgia",
    "text": "Paciente etilista crônico, de 55 anos de idade, apresenta dor abdominal intensa na região de dorso, com piora progressiva há 6 meses. Exame de tomografia de abdome demonstra pâncreas aumentado de volume, com múltiplas pequenas calcificações em seu parênquima e moderada dilatação do ducto pancreático, sem dilatação das vias biliares. Assinale a alternativa que apresenta o diagnóstico mais provável.",
    "options": [
      "Pancreatite aguda",
      "Úlcera gástrica perfurada",
      "Doença cística mucinosa do pâncreas",
      "Adenocarcinoma de pâncreas",
      "Pancreatite crônica"
    ],
    "correctAnswer": 4,
    "explanation": "Etilista crônico com dor abdominal irradiada para o dorso há meses e tomografia mostrando calcificações no parênquima pancreático e dilatação do ducto pancreático principal: pancreatite crônica.\n\nAs calcificações são praticamente patognomônicas em contexto clínico compatível. A doença pode evoluir com insuficiência exócrina (esteatorreia) e endócrina (diabetes).",
    "commentary": "Pancreatite aguda (A): quadro agudo, com enzimas elevadas; calcificações e dilatação ductal indicam cronicidade.\n\nÚlcera perfurada (B): abdome agudo súbito com pneumoperitônio.\n\nNeoplasia cística mucinosa (C): lesão cística, geralmente em mulheres de meia-idade, no corpo/cauda.\n\nAdenocarcinoma de pâncreas (D): massa hipodensa, frequentemente com icterícia (cabeça) e perda de peso; calcificações difusas não são típicas.",
    "reference": "Sabiston — Pâncreas / Consenso brasileiro de pancreatite crônica",
    "tags": [
      "pancreatite crônica",
      "calcificações pancreáticas",
      "etilismo"
    ],
    "tip": "Etilista + dor crônica + calcificações pancreáticas = pancreatite crônica."
  },
  {
    "id": "amp2026-80",
    "topography": "16",
    "topic": "Trauma torácico",
    "module": "Cirurgia",
    "text": "Caso Clínico: Pessoa do sexo masculino, jovem, chega ao Pronto Socorro com ferimento aberto de 3 cm na parede torácica anterior. Apresenta-se dispnéico e presença de ruído de entrada de ar a cada movimento respiratório. Em sua avaliação qual a melhor conduta?",
    "options": [
      "Analgesia e alta.",
      "Apenas oxigênio suplementar.",
      "Antibioticoterapia profilática, sem curativo.",
      "Fechar hermeticamente com gaze e esparadrapo nos quatro lados.",
      "Cobrir com curativo de três lados e providenciar dreno em selo d’água."
    ],
    "correctAnswer": 4,
    "explanation": "Ferimento aberto no tórax com entrada de ar a cada respiração (ferida aspirativa) e dispneia: pneumotórax aberto. A conduta inicial é o curativo de três pontas (fixado em três lados), que funciona como válvula: deixa o ar sair na expiração e impede a entrada na inspiração. Em seguida, drenagem torácica em selo d'água longe do ferimento e, depois, fechamento cirúrgico da lesão.",
    "commentary": "Analgesia e alta (A), só oxigênio (B) ou antibiótico sem curativo (C): não tratam a lesão potencialmente fatal.\n\nFechar nos quatro lados (D): pode transformar o pneumotórax aberto em hipertensivo.",
    "reference": "ATLS — 11ª edição: Trauma torácico",
    "tags": [
      "pneumotórax aberto",
      "curativo de três pontas",
      "trauma torácico"
    ],
    "tip": "Pneumotórax aberto: curativo de 3 pontas + dreno longe da ferida."
  },
  {
    "id": "amrigs2025-78",
    "module": "Pediatria",
    "text": "Menina de 2 anos de idade, previamente hígida, com febre, apresenta uma crise convulsiva. O caso pode ser classificado como convulsão febril simples se tiver as seguintes características:\nI. Crise generalizada e sem história de convulsão afebril prévia.\nII. Tiver duração inferior a 15 minutos e sem déficit neurológico prévio.\nIII. Não tiver recorrência dentro de 24h e não tiver infecção no sistema nervoso central.\n\nQuais estão corretas?",
    "options": [
      "Apenas I.",
      "Apenas II.",
      "Apenas III.",
      "I, II e III."
    ],
    "correctAnswer": 3,
    "explanation": "Convulsão febril simples: criança de 6 meses a 5 anos, crise generalizada, duração inferior a 15 minutos, episódio único em 24 horas, sem infecção do sistema nervoso central, sem déficit neurológico ou crise afebril prévia. Todas as características listadas estão de acordo.",
    "commentary": "Apenas I (A), Apenas II (B), Apenas III (C): cada uma deixa de fora critérios que fazem parte da definição.",
    "reference": "SBP — Crise febril / American Academy of Pediatrics — Febrile Seizures (2011)",
    "tags": [
      "convulsão febril",
      "crise febril simples",
      "epilepsia",
      "pediatria"
    ],
    "tip": "Febril simples: generalizada, <15 min, única em 24 h, 6 meses a 5 anos."
  },
  {
    "id": "amrigs2026-76",
    "module": "Pediatria",
    "text": "Em uma criança vítima de acidente por submersão, a lesão que mais agressivamente deve ser tratada, por estar diretamente relacionada à morbimortalidade nesse tipo de acidente, é a:",
    "options": [
      "Hipernatremia por afogamento em água salgada.",
      "Hipoxemia sistêmica.",
      "Infecção por afogamento em águas contaminadas.",
      "Obstrução de via aérea pela aspiração de água."
    ],
    "correctAnswer": 1,
    "explanation": "No afogamento, a lesão central é a hipóxia: a aspiração de água lesa o surfactante e a membrana alveolocapilar, causando shunt e hipoxemia, que levam à parada cardíaca e à lesão cerebral. A correção agressiva da hipoxemia (ventilação, oxigênio, PEEP) é o que mais muda a morbimortalidade.",
    "commentary": "Hipernatremia em água salgada (A): a quantidade aspirada raramente causa distúrbio eletrolítico relevante.\n\nInfecção (C): complicação possível e tardia, não a prioridade.\n\nObstrução da via aérea por água (D): a água aspirada não obstrui a via aérea; manobras para \"retirar água\" (como Heimlich) não são indicadas.",
    "reference": "Sociedade Brasileira de Salvamento Aquático — Afogamento / AHA — Drowning (2019)",
    "tags": [
      "afogamento",
      "hipoxemia",
      "emergência pediátrica"
    ],
    "tip": "Afogamento: o problema é a hipóxia — ventile e oxigene."
  },
  {
    "id": "cerman2025-70",
    "topography": "11",
    "topic": "Icterícia neonatal",
    "module": "Pediatria",
    "text": "Recém-nascido com 18 dias de vida, em aleitamento materno exclusivo, evolui há 2 semanas com quadro de vômito, perda de peso, icterícia e colúria. Ao exame físico: peso - 2.700kg, comprimento - 50cm, icterícia 3+/4+, fígado palpável a 3 cm do RCD. A pesquisa urinaria de substâncias redutoras foi positiva. O diagnóstico em questão é GALACTOSEMIA, qual o tratamento a ser proposto:",
    "options": [
      "(A) Dieta isenta de lactose.",
      "(B) Dieta cetogênica.",
      "(C) Piloromiotomia.",
      "(D) Ganciclovir."
    ],
    "correctAnswer": 0,
    "explanation": "Na galactosemia clássica (deficiência de galactose-1-fosfato uridiltransferase), a galactose do leite acumula e causa vômitos, déficit de ganho de peso, icterícia, hepatomegalia, catarata e sepse por E. coli. A urina tem substâncias redutoras.\n\nO tratamento é a retirada imediata da galactose da dieta: suspender o leite materno e usar fórmula sem lactose (à base de soja ou hidrolisado).",
    "commentary": "Dieta cetogênica (B): indicada em epilepsias refratárias e deficiência de GLUT1.\n\nPiloromiotomia (C): tratamento da estenose hipertrófica de piloro, que causa vômitos em jato sem icterícia colestática.\n\nGanciclovir (D): tratamento do citomegalovírus congênito sintomático.",
    "reference": "Nelson Textbook of Pediatrics, 21ª ed. — Defeitos do metabolismo dos carboidratos",
    "tags": [
      "galactosemia",
      "erros inatos do metabolismo",
      "icterícia neonatal",
      "dieta isenta de lactose"
    ]
  }
];
