// Arquivo gerado por `npm run gen` a partir do banco de questões. Não editar à mão.
// O build e o servidor local regeneram este arquivo sozinhos; o `npm run validate` acusa se ficar desatualizado.
import type { Question } from '../types';

export const TOTAL_QUESTIONS = 2944;

export const COUNT_BY_AREA: Record<string, number> = {
  "Pediatria": 557,
  "Clínica Médica": 610,
  "Cirurgia": 532,
  "Ginecologia e Obstetrícia": 549,
  "Saúde Coletiva": 536,
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
    "years": "2025",
    "count": 100
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
  "Clínica Médica|FAMEMA": 31,
  "Cirurgia|FAMEMA": 16,
  "Pediatria|FAMEMA": 18,
  "Ginecologia e Obstetrícia|FAMEMA": 18,
  "Saúde Coletiva|FAMEMA": 17,
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
  "8": 75,
  "9": 68,
  "10": 123,
  "11": 286,
  "12": 29,
  "13": 61,
  "14": 126,
  "15": 432,
  "16": 178,
  "1.2": 17,
  "1.3": 28,
  "7.2": 41,
  "4.2": 27,
  "1.1": 85,
  "1.5": 31,
  "6.1": 47,
  "3.1": 96,
  "4.1": 82,
  "2.1": 95,
  "6.2": 23,
  "2.2": 103,
  "3.2": 35,
  "3.3": 33,
  "7.1": 29,
  "1.4": 4,
  "3.4": 21,
  "5.1": 212,
  "5.2": 255
};

/** Questões por assunto, na chave "1.1|Cefaleias". */
export const TOPIC_COUNT: Record<string, number> = {
  "11|Puericultura": 32,
  "1.2|Catarata": 5,
  "11|Icterícia neonatal": 10,
  "11|Obesidade infantil": 9,
  "1.3|Amigdalite/faringoamigdalite": 13,
  "7.2|Urticária": 1,
  "1.2|Uveíte": 2,
  "4.2|Estenose de uretra": 2,
  "11|Calendário vacinal": 17,
  "1.1|TCE": 17,
  "11|Maus-tratos infantis": 17,
  "11|Prematuridade": 4,
  "11|Anemia ferropriva": 15,
  "9|Trombocitopenias": 6,
  "11|Aleitamento materno": 23,
  "1.5|Hipotireoidismo": 8,
  "11|Síndrome do desconforto respiratório neonatal": 8,
  "14|Emergências pediátricas": 14,
  "6.1|Artrite reumatoide": 7,
  "9|Talassemias": 2,
  "11|ITU pediátrica": 7,
  "11|Diarreia aguda": 11,
  "14|Trauma": 41,
  "11|Cardiopatias congênitas": 22,
  "3.1|Constipação intestinal": 7,
  "10|Raiva": 7,
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
  "11|Convulsão febril": 6,
  "11|Pneumonia infantil": 12,
  "11|Refluxo gastroesofágico": 2,
  "11|Bronquiolite": 11,
  "11|Desnutrição": 4,
  "10|Sífilis": 20,
  "4.1|Síndrome nefrítica": 4,
  "2.1|Bronquiectasias": 2,
  "8|Insuficiência adrenal": 7,
  "6.2|Escoliose": 2,
  "14|Intoxicações": 16,
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
  "10|Dengue": 18,
  "4.1|Distúrbios hidroeletrolíticos": 12,
  "4.1|Lesão renal aguda": 15,
  "8|Diabetes mellitus tipo 1 e 2": 29,
  "1.1|Demências": 7,
  "6.1|Lúpus eritematoso sistêmico": 8,
  "1.1|Epilepsia": 9,
  "10|Tuberculose": 23,
  "2.1|DPOC": 20,
  "9|Anemia ferropriva": 6,
  "3.2|Hepatites virais": 5,
  "2.2|Dislipidemia": 8,
  "2.2|Insuficiência cardíaca": 14,
  "2.2|Hipertensão arterial sistêmica": 24,
  "4.1|Cistite": 6,
  "13|Dependência química": 7,
  "3.1|DRGE": 11,
  "2.1|Asma": 10,
  "2.1|Pneumonia comunitária": 17,
  "13|Abstinência alcoólica": 6,
  "6.1|Osteoartrose": 4,
  "2.1|Tuberculose pulmonar": 1,
  "7.2|Herpes-zóster": 2,
  "1.1|AVC": 22,
  "7.2|Erisipela": 2,
  "7.2|Melanoma": 4,
  "4.1|Nefrolitíase": 10,
  "2.2|Valvopatias": 5,
  "6.1|Fibromialgia": 3,
  "2.2|Infarto agudo do miocárdio": 10,
  "2.1|Embolia pulmonar": 9,
  "2.1|Câncer de pulmão": 7,
  "4.1|Pielonefrite": 6,
  "4.1|Doença renal crônica": 8,
  "3.1|Doença inflamatória intestinal": 12,
  "3.1|Doença celíaca": 2,
  "3.2|Cirrose hepática": 5,
  "1.1|Meningite": 11,
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
  "12|Delirium": 7,
  "3.1|Gastrite": 3,
  "9|Síndrome de lise tumoral": 1,
  "2.1|Insuficiência respiratória": 1,
  "10|Sepse": 5,
  "6.1|Osteoporose": 8,
  "7.2|Carcinoma basocelular": 3,
  "9|Anemia megaloblástica": 10,
  "2.1|Derrame pleural": 15,
  "13|Transtornos de ansiedade": 6,
  "1.5|Tempestade tireotóxica": 1,
  "12|Demências": 1,
  "13|Depressão maior": 10,
  "8|Hiperaldosteronismo primário": 3,
  "16|Feridas": 20,
  "16|Pré-operatório": 21,
  "16|Hérnias": 22,
  "3.3|Colangite aguda": 6,
  "3.1|Hemorragia digestiva baixa": 5,
  "7.1|Doença arterial periférica": 6,
  "6.2|Fraturas": 5,
  "1.1|Hipertensão intracraniana": 3,
  "14|Queimaduras": 13,
  "1.3|Câncer de cabeça e pescoço": 2,
  "1.2|Ceratite": 3,
  "14|Choque": 7,
  "16|Trauma abdominal": 17,
  "6.2|Hérnia de disco": 3,
  "16|Obstrução intestinal": 19,
  "7.1|Trombose venosa profunda": 9,
  "4.2|Câncer de próstata": 6,
  "3.1|Hemorragia digestiva alta": 11,
  "3.1|Doença hemorroidária": 7,
  "7.1|Aneurisma de aorta abdominal": 4,
  "3.2|Hepatocarcinoma": 6,
  "10|Doença de Chagas": 3,
  "1.4|Doença periodontal": 1,
  "3.3|Colecistite aguda": 5,
  "16|Trauma torácico": 20,
  "16|Apendicite aguda": 12,
  "16|Perfuração de víscera oca": 9,
  "3.3|Colangiocarcinoma": 3,
  "3.4|Pancreatite aguda": 12,
  "3.1|Câncer colorretal": 12,
  "8|Obesidade": 11,
  "7.1|Isquemia arterial aguda": 4,
  "7.2|Celulite": 2,
  "16|Pós-operatório": 24,
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
  "5.1|Climatério e menopausa": 25,
  "5.1|Contracepção": 31,
  "5.1|Câncer de colo uterino": 33,
  "5.1|Vaginose bacteriana": 8,
  "5.2|Diabetes gestacional": 22,
  "5.2|Assistência ao parto": 13,
  "5.2|Puerpério": 17,
  "5.2|Infecções na gestação": 33,
  "5.2|Rotura prematura de membranas": 8,
  "15|Rastreamento": 26,
  "5.1|Câncer de endométrio": 10,
  "5.2|Gravidez ectópica": 10,
  "5.2|Diagnóstico de gravidez": 2,
  "5.2|Pré-natal": 39,
  "5.2|Hemorragia pós-parto": 11,
  "5.2|Trabalho de parto": 26,
  "5.1|Mioma uterino": 12,
  "5.1|Endometriose": 12,
  "5.1|Infertilidade": 11,
  "5.1|Prolapso genital": 8,
  "5.1|Câncer de ovário": 7,
  "15|Saúde da mulher": 11,
  "5.2|Pré-eclâmpsia": 18,
  "5.2|Abortamento": 20,
  "5.1|Síndrome dos ovários policísticos": 7,
  "5.1|Doença inflamatória pélvica": 9,
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
  "5.2|Placenta prévia": 6,
  "15|Atenção Primária": 84,
  "15|Saúde do idoso": 6,
  "15|SUS": 61,
  "12|Polifarmácia": 4,
  "15|Imunização": 29,
  "15|Saúde do trabalhador": 22,
  "15|Estudos epidemiológicos": 35,
  "15|Epidemiologia": 43,
  "15|Vigilância epidemiológica": 31,
  "15|Testes diagnósticos": 26,
  "15|Estratégia Saúde da Família": 15,
  "12|Quedas": 3,
  "13|Risco de suicídio": 8,
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
  "7.2|Dermatite de contato": 1,
  "1.1|Esclerose múltipla": 2,
  "3.1|Úlcera péptica": 4,
  "9|Neutropenia febril": 4,
  "13|Transtornos alimentares": 6,
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
  "1.3|Vertigem": 4,
  "6.2|Lesão do ligamento cruzado anterior": 1,
  "8|Distúrbios do cálcio": 2,
  "14|Parada cardiorrespiratória": 8,
  "4.1|Nefropatia diabética": 3,
  "2.2|Choque cardiogênico": 1,
  "12|Cuidados paliativos": 11,
  "10|Toxoplasmose": 4,
  "1.5|Câncer de tireoide": 4,
  "2.2|Endocardite infecciosa": 5,
  "2.1|Tabagismo": 6,
  "1.5|Hiperparatireoidismo": 3,
  "3.3|Câncer de vesícula": 4,
  "3.1|Diarreia aguda": 2,
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
  "10|Febre amarela": 2,
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
  "10|Chikungunya": 2,
  "1.2|Conjuntivite": 2,
  "6.1|Bursites e tendinopatias": 1,
  "10|Endocardite": 1,
  "2.1|Apneia do sono": 1,
  "2.1|SDRA": 1,
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
    "id": "tp2022-56",
    "topography": "11",
    "topic": "Pneumonia infantil",
    "module": "Pediatria",
    "text": "Recém-nascido de 21 dias com tosse seca, conjuntivite prévia com secreção e infiltrado intersticial no RX. Hemograma com eosinofilia. Diagnóstico e conduta:",
    "options": [
      "(A) Pneumonia por S. aureus; glicopeptídios.",
      "(B) Pneumonia por M. pneumoniae; macrolídeos.",
      "(C) Bronquiolite viral; macrolídeos.",
      "(D) Pneumonia por Chlamydia trachomatis; macrolídeos."
    ],
    "correctAnswer": 3,
    "explanation": "Recém-nascido de parto vaginal que teve conjuntivite com secreção por volta de 2 semanas de vida e agora, sem febre, tem tosse seca (em acessos, tipo staccato), taquipneia, infiltrado intersticial bilateral e eosinofilia: é a pneumonia afebril do lactente por Chlamydia trachomatis, adquirida na passagem pelo canal de parto.\n\nA pneumonia por clamídia costuma surgir entre 2 e 19 semanas de vida, com bom estado geral, e a conjuntivite prévia é uma pista importante. O tratamento é com macrolídeo (azitromicina por 3 dias ou eritromicina por 14 dias). Em menores de 6 semanas, os macrolídeos aumentam o risco de estenose hipertrófica do piloro, o que deve ser vigiado. A mãe e o parceiro também devem ser tratados.",
    "commentary": "S. aureus com glicopeptídeo (A): a pneumonia estafilocócica é grave, com febre alta, toxemia, pneumatoceles e derrame pleural, sem relação com conjuntivite neonatal tardia.\n\nMycoplasma pneumoniae (B): é agente típico de escolares e adolescentes, não de recém-nascidos.\n\nBronquiolite por VSR (C): não explica a conjuntivite com secreção nem a eosinofilia; e infecção viral não se trata com antibiótico.",
    "tip": "Recém-nascido afebril + conjuntivite prévia + tosse em staccato + eosinofilia = Chlamydia: macrolídeo.",
    "reference": "Tratado de Pediatria SBP - 4ª Ed.",
    "tags": [
      "infectologia",
      "pneumologia"
    ]
  },
  {
    "id": "tp2024-28",
    "topography": "1.1",
    "topic": "Demências",
    "module": "Clínica Médica",
    "text": "Paciente evoluindo com perda de memória importante acompanhado de incontinência urinária e quedas frequentes concomitantes ao início do déficit cognitivo. Qual a causa mais provável destas alterações?",
    "options": [
      "(A) Demência frontotemporal",
      "(B) Doença de Alzheimer",
      "(C) Demência vascular",
      "(D) Hidrocefalia de pressão normal"
    ],
    "correctAnswer": 3,
    "explanation": "A tríade de Hakim (alteração da marcha com quedas, incontinência urinária e declínio cognitivo) é a apresentação da hidrocefalia de pressão normal. O que chama a atenção é a marcha e a incontinência surgirem logo no começo, junto com o déficit cognitivo, o que não acontece nas demências degenerativas comuns.\n\nA imagem mostra ventrículos dilatados sem atrofia proporcional dos sulcos, e a punção lombar tem pressão normal. A melhora da marcha depois da retirada de líquor (tap test) ajuda a selecionar quem se beneficia da derivação ventriculoperitoneal; por ser uma causa tratável de demência, não pode passar despercebida.",
    "commentary": "Demência frontotemporal (A): começa com alteração de comportamento ou de linguagem; distúrbio de marcha e incontinência precoces não são típicos.\n\nDoença de Alzheimer (B): a perda de memória domina por anos, e quedas e incontinência só aparecem em fases avançadas.\n\nDemência vascular (C): pode ter alteração de marcha e incontinência, mas em geral com história de AVC, fatores de risco e déficits focais; a tríade de instalação conjunta sugere mais hidrocefalia de pressão normal.",
    "tip": "Marcha alterada + incontinência + demência (\"wacky, wobbly, wet\") = hidrocefalia de pressão normal, causa tratável.",
    "reference": "Normal Pressure Hidrocephalis - uptodate.com. Acta Neurochir Suppl Acta Neurochir Suppl. 2002:81:93-7. Neurosurgery. 2005;57(Suppl 3):S2-1-S2-52.",
    "tags": [
      "neurologia",
      "geriatria"
    ]
  },
  {
    "id": "tp2021-35",
    "topography": "3.1",
    "topic": "Doença inflamatória intestinal",
    "module": "Clínica Médica",
    "text": "Homem, 39 anos, há 8 semanas apresentando diarreia líquida com cólica abdominal e dores articulares. Procurou a emergência com queixa de dor predominante em quadrante inferior direito do abdome, que ameniza com a evacuação. Exame físico: febril, pálido, emagrecido. Massa palpável e dolorosa em fossa ilíaca direita. Leucocitose no hemograma. Mencionou ter sido operado de fístula anorretal há 1 ano. O diagnóstico e a opção terapêutica são:",
    "options": [
      "(A) Retocolite ulcerativa / hidrocortisona.",
      "(B) Doença de Crohn / sulfassalazina.",
      "(C) Apendicite aguda complicada / cirurgia.",
      "(D) Colite por Clostridium difficile / metronidazol."
    ],
    "correctAnswer": 1,
    "explanation": "O quadro de diarreia prolongada crônica e dor abdominal no quadrante inferior direito que melhora ao evacuar, associado a febre, emagrecimento, massa dolorosa palpável local e presença marcante de antecedente de cirurgia por fístula anal é típico de Doença de Crohn, cujo manejo medicamentoso de manutenção pode ser feito com sulfassalazina.",
    "commentary": "A Doença de Crohn é uma patologia inflamatória transmural que pode acometer de forma descontínua qualquer porção do trato digestório, exibindo robusta afinidade pela região ileocecal (comum mimetizar apendicite subaguda com plastrão palpável) e alta incidência de fístulas anorretais. A retocolite ulcerativa, em contrapartida, limita-se estritamente à mucosa colorretal e não gera fístulas profundas anal.",
    "reference": "FAUCI, AS et al. Harrison Medicina Interna. 18ªed. Rio de Janeiro: McGraw-Hill, 2013.",
    "tags": [
      "gastroenterologia"
    ]
  },
  {
    "id": "tp2024-78",
    "module": "Cirurgia",
    "text": "Disfagia progressiva (3 meses), perda ponderal > 20%, tabagista e etilista. Qual o principal diagnóstico?",
    "options": [
      "(A) Adenocarcinoma do esôfago",
      "(B) Carcinoma espinocelular do esôfago",
      "(C) Megaesôfago chagásico",
      "(D) Esôfago de Barrett"
    ],
    "correctAnswer": 1,
    "explanation": "Disfagia que progride rápido de sólidos para líquidos, emagrecimento acentuado (mais de 20% do peso) e história de tabagismo e etilismo apontam para câncer de esôfago, e o tipo histológico ligado a esses dois fatores é o carcinoma espinocelular (epidermoide), mais frequente no terço médio do esôfago.\n\nA investigação começa por endoscopia digestiva alta com biópsia, seguida de estadiamento (tomografia e, conforme o caso, ecoendoscopia e PET-CT). Como o esôfago não tem serosa e se distende muito, a disfagia costuma surgir só quando o tumor já ocupa boa parte da luz, por isso o diagnóstico é tardio na maioria dos casos.",
    "commentary": "Adenocarcinoma do esôfago (A): está associado a refluxo crônico, esôfago de Barrett e obesidade, e predomina no terço distal; tabaco e álcool pesam muito mais no carcinoma espinocelular.\n\nMegaesôfago chagásico (C): a disfagia é lenta e arrastada por anos, com regurgitação, e o emagrecimento é gradual; o paciente vem de área endêmica para Chagas.\n\nEsôfago de Barrett (D): é uma metaplasia sem sintomas próprios (as queixas são as do refluxo) e não causa disfagia progressiva com grande perda de peso, a não ser que já tenha evoluído para adenocarcinoma.",
    "tip": "Disfagia rápida de sólidos para líquidos + emagrecimento + tabaco e álcool = carcinoma espinocelular de esôfago.",
    "reference": "Engel LS, Chow WH, Vaughan TL, et al. Riscos atribuíveis à população de câncer de esôfago e gástrico. J Natl Cancer Inst. 2003;95(18):1404.",
    "tags": [
      "oncologia",
      "gastroenterologia"
    ]
  },
  {
    "id": "tp2025-77",
    "topography": "7.2",
    "topic": "Celulite",
    "module": "Cirurgia",
    "text": "Mulher de 50 anos, com diabetes mellitus tipo 2 descompensada, deu entrada no hospital com quadro de dor perianal e febre há 2 dias, sem sangramentos. Nega episódios anteriores semelhantes. Foi apendicectomizada há um ano. Ao exame físico, apresenta presença de tumor e sinais flogísticos e crepitação no períneo. A dor impossibilitou o toque retal. A hipótese diagnóstica mais provável é:",
    "options": [
      "(A) Vulvovaginite",
      "(B) Fissura anal",
      "(C) Síndrome de Fournier",
      "(D) Hemorroidas trombosadas"
    ],
    "correctAnswer": 2,
    "explanation": "A Síndrome de Fournier consiste em uma fasciite bacteriana necrotizante altamente invasiva que acomete o tecido celular subcutâneo do abdome e períneo, apresentando-se com crepitação ao toque e febre em doentes vulneráveis (diabéticos descompensados).",
    "commentary": "A Síndrome de Fournier (gangrena sinérgica necrotizante perineal) é uma emergência infecciosa em cirurgia. É potenciada por desequilíbrio imunossupressor do diabetes mellitus em portadores de focos proctológicos profundos invisíveis (como abscessos de fossas isquiorretais). O indicativo físico patognomônico é a crepitação tecidual local, reflexo da produção de hidrogênio e compostos moleculares gasosos por bacilos anaeróbias. Impõe ampla ressecção tecidual desbridante mecânica com antibioticoterapia agressiva de amplo espectro.",
    "reference": "Rev. Bras. Cir. Plást. 2012;27(4):600-4; Adson, Ciências da Saúde, Volume 29 - Edição 142/JAN 2025.",
    "tags": [
      "infectologia",
      "emergência"
    ]
  },
  {
    "id": "tp2024-85",
    "module": "Ginecologia e Obstetrícia",
    "text": "Adolescente, 17 anos, queixa-se de mamas pequenas. Exame: Tanner M5 e P5. Qual a orientação?",
    "options": [
      "(A) Iniciar estrogênios para acelerar crescimento.",
      "(B) Orientar que a telarca é o último evento puberal e aguardar.",
      "(C) A classificação de Tanner não é mais usada rotineiramente.",
      "(D) Desenvolvimento compatível com a idade; tamanho segue variantes físicas individuais."
    ],
    "correctAnswer": 3,
    "explanation": "Tanner M5 (mama adulta, com a aréola no mesmo contorno da mama) e P5 aos 17 anos indicam que a puberdade terminou e que o desenvolvimento está adequado para a idade. O estadiamento de Tanner avalia a maturação, não o volume: o tamanho final da mama varia muito entre mulheres e não indica doença.\n\nA conduta é tranquilizar a adolescente e explicar que a diferença em relação às irmãs é uma variação individual normal. Não há indicação de hormônio.",
    "commentary": "Estrogênio para acelerar o crescimento (A): a mama já está em estágio adulto; hormônio não muda o tamanho de uma mama normal e traria riscos sem benefício.\n\nTelarca como último evento (B): é o contrário; nas meninas, a telarca costuma ser o primeiro sinal da puberdade, e a menarca vem depois.\n\nTanner fora da rotina (C): o estadiamento de Tanner continua sendo parte do exame de rotina para acompanhar a maturação sexual de crianças e adolescentes.",
    "tip": "Telarca é o primeiro sinal da puberdade feminina. M5 aos 17 anos = mama adulta; tamanho é variação individual.",
    "reference": "Endocrinologia Feminina/ Fernandes CE, Pompei LM. Ed Manole 2016, pag. 173-82. Hormônios em Ginecologia/ Benetti-Pinto CL, Fernandes CE, Silva filhos AL. Ed Manole 2024, pag. 91-7.",
    "tags": [
      "ginecologia infanto-puberal",
      "puberdade"
    ]
  },
  {
    "id": "tp2022-95",
    "topography": "5.2",
    "topic": "Pré-eclâmpsia",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante (30 semanas), PA 150/90, feto < P3, oligoâmnio, Doppler normal. PA era normal no início. Diagnóstico?",
    "options": [
      "(A) Hipertensão gestacional.",
      "(B) Pré-Eclâmpsia.",
      "(C) Hipertensão Arterial Crônica (HAC).",
      "(D) Pré-eclâmpsia sobreposta a HAC."
    ],
    "correctAnswer": 1,
    "explanation": "Hipertensão após 20 semanas associada a repercussão fetal (RCF < P3) caracteriza pré-eclâmpsia, mesmo sem proteinúria descrita.",
    "commentary": "A presença de restrição de crescimento fetal (RCF) associada à hipertensão após 20 semanas fecha diagnóstico de pré-eclâmpsia.",
    "reference": "Tratado de Obstetrícia FEBRASGO.",
    "tags": [
      "obstetrícia",
      "hipertensão"
    ]
  },
  {
    "id": "tp2026-98",
    "topography": "5.2",
    "topic": "Infecções na gestação",
    "module": "Ginecologia e Obstetrícia",
    "text": "Primigesta de 32 anos, com 36 semanas de gestação, em acompanhamento por infecção pelo HIV, em uso regular de terapia antirretroviral (TARV) desde o primeiro trimestre, apresenta carga viral de 1.200 cópias/mL no último exame. Evolui sem intercorrências obstétricas. Diante desse cenário, qual a conduta para redução do risco de transmissão vertical?",
    "options": [
      "(A) Indicar cesariana eletiva a partir de 38 semanas e realizar zidovudina intravenosa intraparto.",
      "(B) Manter conduta expectante e indicar parto vaginal, pois está em uso regular de TARV.",
      "(C) Indicar parto vaginal com uso de fórceps para reduzir o tempo expulsivo.",
      "(D) Suspender TARV no intraparto e iniciar profilaxia apenas no recém-nascido."
    ],
    "correctAnswer": 0,
    "explanation": "Gestantes vivendo com HIV que apresentem Carga Viral indetectável ou desconhecida, ou ainda carga viral maior ou igual a 1.000 cópias/mL detectada próximo ao termo (após 34 semanas), têm indicação formal de parto por via cesariana eletiva (com membranas íntegras, a partir de 38 semanas de gestação) associada à infusão de Zidovudina (AZT) endovenosa intraparto.",
    "commentary": "O protocolo clínico brasileiro estabelece que a determinação da via de parto na gestante infectada pelo HIV baseia-se na aferição da Carga Viral (CV) colhida na idade gestacional de 34 semanas ou mais. Se a CV for maior ou igual a 1.000 cópias/mL (ou desconhecida), a via preferencial obrigatória de eleição é a cesariana eletiva (programada, realizada antes do início do trabalho de parto e de qualquer ruptura de membranas), devendo-se infundir o AZT venoso contínuo desde 3 horas antes da incisão cirúrgica até o clampeamento do cordão. Sobre os distratores: (B) O parto vaginal só é seguro e elegível quando a Carga Viral do terceiro trimestre encontra-se comprovadamente indetectável ou < 1.000 cópias/mL. (C) O fórceps de alívio e outros procedimentos invasivos (como amniotomia ou episiotomia) devem ser evitados devido ao risco de sangramento e infecção cruzada. (D) A TARV materna jamais deve ser suspensa, sendo somada à profilaxia infundida.",
    "reference": "BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde. Protocolo clínico e diretrizes terapêuticas para prevenção da transmissão vertical de HIV, sífilis e hepatites virais. Brasília: Ministério da Saúde, 2022.",
    "tags": [
      "HIV e gestação",
      "transmissão vertical",
      "cesariana eletiva"
    ]
  },
  {
    "id": "tp2023-120",
    "topography": "15",
    "topic": "Saúde do trabalhador",
    "module": "Saúde Coletiva",
    "text": "A saúde ambiental e do trabalhador é um campo de estudo que investiga as relações entre a produção industrial, o ambiente de trabalho e os impactos na saúde das pessoas. Nesse contexto, a epidemiologia desempenha um papel importante na compreensão dos riscos e na promoção de medidas preventivas. Qual dos seguintes cenários ilustra um exemplo de exposição ocupacional relacionada à saúde ambiental e do trabalhador?",
    "options": [
      "(A) Consumo de alimentos contaminados por pesticidas.",
      "(B) Exposição à radiação ultravioleta (UV) durante a prática de esportes ao ar livre.",
      "(C) Inalação de gases tóxicos provenientes da queima de combustíveis fósseis.",
      "(D) Uso inadequado de equipamentos de proteção individual em uma construção civil."
    ],
    "correctAnswer": 2,
    "explanation": "Saúde ambiental e do trabalhador estuda como o processo produtivo e os ambientes afetam a saúde. A banca considera que a inalação de gases tóxicos da queima de combustíveis fósseis representa esse tipo de exposição: um agente químico gerado pela produção e pelo uso de energia, ao qual muitos trabalhadores estão expostos (por exemplo, em indústrias, oficinas, garagens e no trânsito), com risco de doenças respiratórias, cardiovasculares e câncer.\n\nO raciocínio cobrado é distinguir uma exposição a agente nocivo, ligada ao ambiente e ao trabalho, de situações de lazer, de consumo ou de comportamento.",
    "commentary": "Alimentos com pesticidas (A): descreve a exposição do consumidor, pela dieta, e não a de quem trabalha com o agrotóxico.\n\nRadiação UV no esporte (B): é exposição durante o lazer, sem relação com a atividade de trabalho.\n\nUso inadequado de EPI na construção civil (D): a banca o trata como questão de segurança do trabalho (conduta de proteção), e não como uma exposição a agente ambiental.",
    "tip": "Exposição ocupacional e ambiental: agente nocivo (químico, físico, biológico) ligado ao processo produtivo.",
    "reference": "Peres, Frederico. Epidemiologia e Saúde. 2ª edição. Atheneu, 2017. Gomes, Maria Angélica de Salles. Saúde Ambiental e Trabalho: Guia para Estudo em Saúde Coletiva. Editora Fiocruz, 2015.",
    "tags": [
      "saúde do trabalhador",
      "saúde ambiental"
    ]
  },
  {
    "id": "tp2026-105",
    "topography": "13",
    "topic": "Transtorno bipolar",
    "module": "Saúde Coletiva",
    "text": "Homem de 28 anos é acompanhado na UBS com diagnóstico prévio de transtorno bipolar tipo I. Apresenta histórico recente de episódio maníaco com prejuízo funcional. Atualmente está eutímico. Qual estratégia terapêutica é mais adequada para prevenção de recaídas?",
    "options": [
      "(A) Prescrever antidepressivo isolado para estabilização do humor e reavaliar em consulta futura.",
      "(B) Iniciar estabilizador de humor, como lítio, e acompanhar na APS, em articulação com saúde mental.",
      "(C) Utilizar benzodiazepínico de uso prolongado como estratégia principal de manutenção clínica.",
      "(D) Suspender a farmacoterapia após estabilização e manter apenas acompanhamento psicossocial."
    ],
    "correctAnswer": 1,
    "explanation": "No transtorno bipolar tipo I, após um episódio maníaco, o objetivo é evitar novos episódios com tratamento de manutenção contínuo. O lítio é um estabilizador de humor de primeira linha para isso, reduz recaídas maníacas e depressivas e tem efeito comprovado na redução do risco de suicídio. Outras opções são valproato e alguns antipsicóticos atípicos, como a quetiapina.\n\nO lítio exige acompanhamento de nível sérico, função renal e tireoidiana. O seguimento pode ser feito na Atenção Primária em cuidado compartilhado com a equipe de saúde mental, associado a psicoeducação e atenção aos sinais precoces de recaída.",
    "commentary": "Antidepressivo isolado (A): sem estabilizador, pode precipitar virada maníaca e ciclagem rápida; não é tratamento de manutenção do bipolar.\n\nBenzodiazepínico prolongado (C): pode ajudar por pouco tempo na agitação ou insônia, mas não estabiliza o humor e traz risco de dependência.\n\nSuspender a medicação (D): o bipolar tipo I tem alto risco de recorrência, e parar o tratamento após a estabilização aumenta a chance de novo episódio.",
    "tip": "Bipolar I: manutenção com estabilizador (lítio é referência e reduz suicídio); nunca antidepressivo sozinho.",
    "reference": "Diretrizes da CANMAT; Ministério da Saúde. Caderno de Atenção Básica - Saúde Mental.",
    "tags": [
      "saúde mental",
      "transtorno bipolar",
      "farmacoterapia"
    ]
  },
  {
    "id": "tp2025-15",
    "topography": "9",
    "topic": "Linfomas",
    "module": "Ciências Básicas",
    "text": "Um paciente de 45 anos, previamente saudável, é encaminhado ao ambulatório por apresentar um nódulo indolor em região cervical, acompanhado de perda de peso inexplicada e fadiga. Exames laboratoriais revelam níveis elevados da proteína c-Myc. A biópsia do nódulo indica proliferação celular atípica. Qual o papel do gene c-Myc na oncogênese observada no paciente?",
    "options": [
      "(A) O gene c-Myc é um marcador da resposta imune adaptativa contra células tumorais.",
      "(B) O gene c-Myc funciona como um supressor tumoral, regulando negativamente o ciclo celular.",
      "(C) O gene c-Myc promove a apoptose celular em resposta ao dano no DNA.",
      "(D) O gene c-Myc atua como um oncogene, impulsionando a proliferação celular descontrolada."
    ],
    "correctAnswer": 3,
    "explanation": "O gene c-Myc é um conhecido proto-oncogene codificador de fator de transcrição nuclear que induz crescimento e duplicação ativa das ciclinas, impulsionando proliferação celular irrestrita.",
    "commentary": "A hiperexpressão ou amplificação do gene c-Myc suprime transitoriamente fatores de parada do ciclo e amplifica promotores de crescimento autônomo, agindo como oncogene primário na proliferação de linfomas.",
    "reference": "Baluapuri, A. et al. Target gene-independent functions of MYC oncoproteins. Nat Rev Mol Cell Biol, 2020.",
    "tags": [
      "genética",
      "patologia",
      "oncologia"
    ]
  },
  {
    "id": "enamed-2025-2",
    "topography": "4.1",
    "topic": "Distúrbios ácido-base",
    "module": "Pediatria",
    "text": "Lactente de 4 meses é levado ao serviço de emergência com história de vômitos, poliúria, episódios de fraqueza intensa e febre. Ao exame físico, apresenta-se com desidratação grave e déficit de crescimento significativo. Encontram-se, ainda, sinais radiológicos de osteopenia e raquitismo resistente à vitamina D.\n\nCom base na principal hipótese diagnóstica, o distúrbio ácido-básico relacionado ao caso é:",
    "options": [
      "(A) alcalose respiratória hipoclorêmica.",
      "(B) acidose metabólica hiperclorêmica.",
      "(C) alcalose respiratória hipocalêmica.",
      "(D) acidose metabólica hipercalêmica."
    ],
    "correctAnswer": 1,
    "explanation": "O quadro clínico é altamente sugestivo de acidose tubular renal (ATR), doença caracterizada por incapacidade dos túbulos renais em reabsorver bicarbonato ou secretar adequadamente íons hidrogênio. Como consequência, desenvolve-se uma acidose metabólica com ânion gap normal, também denominada acidose metabólica hiperclorêmica.\n\nEssa acidose crônica leva à mobilização de cálcio dos ossos, justificando a osteopenia, o raquitismo resistente à vitamina D e o importante déficit de crescimento. A poliúria, a desidratação recorrente e a fraqueza muscular também são manifestações frequentes dessa doença.",
    "commentary": "Observação: esta questão foi excluída do cálculo da nota pelo ENAMED devido a desajuste estatístico na prova oficial, mas seu conceito fisiopatológico e correlação clínica de ATR continuam extremamente educativos.",
    "reference": "Tratado de Pediatria da SBP / Manual de Nefrologia Pediátrica",
    "tags": [
      "pediatria",
      "nefrologia",
      "distúrbio ácido-básico"
    ]
  },
  {
    "id": "enamed-2026-6",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Em uma reunião de equipe, a enfermeira da Unidade Básica de Saúde (UBS) informa que, apesar de estar conseguindo manter os atendimentos de rotina, no último mês percebeu aumento de atendimentos por desidratação leve, exaustão pelo calor e descompensação de doenças crônicas, e que suspeita estarem relacionadas à onda de calor que está ocorrendo no município.\n\nO plano de intervenção para a população do território adstrito dessa UBS consiste em",
    "options": [
      "(A) separar o fluxo de atendimento da UBS para agilizar o atendimento da população atingida.",
      "(B) implementar hospital de campanha para atender a população por demanda espontânea.",
      "(C) encaminhar as pessoas afetadas para hidratação parenteral a fim de evitar descompensação clínica.",
      "(D) orientar hidratação, adaptação do domicílio, sinais de alerta, e monitoramento ativo dos susceptíveis."
    ],
    "correctAnswer": 3,
    "explanation": "Ondas de calor são eventos climáticos extremos com impacto previsível sobre grupos vulneráveis (idosos, crianças, portadores de doenças crônicas). A UBS mantém a capacidade de atendimento, então a resposta adequada é territorial e preventiva.\n\nO plano envolve orientar hidratação, adaptação do domicílio (ventilação, sombreamento, horários), reconhecimento de sinais de alerta e monitoramento ativo dos susceptíveis — por exemplo, por meio dos agentes comunitários de saúde.",
    "commentary": "Separar fluxos ou montar hospital de campanha são medidas de desastre com sobrecarga assistencial, o que não ocorre. Hidratação parenteral não é indicada para quadros leves. (Gabarito preliminar do INEP.)",
    "reference": "Ministério da Saúde. Guia de preparação e resposta aos efeitos do calor extremo na saúde",
    "tags": [
      "saúde coletiva",
      "clima e saúde",
      "atenção primária"
    ]
  },
  {
    "id": "unifesp2025-26",
    "topography": "1.1",
    "topic": "Demências",
    "module": "Clínica Médica",
    "text": "Mulher, 87 anos de idade, viúva, mora com a filha. A paciente apresenta quadro de perambulação noturna, choro fácil, agressividade verbal. Há 4 anos, apresenta perda de memória recente gradual e lentamente e, há 1 ano, piora da funcionalidade, com necessidade de ajuda para banho, higiene pessoal, alimentação e uso de fraldas.\n\nDiante da principal hipótese diagnóstica, quais são as escalas mais indicadas para avaliação do estágio da doença?",
    "options": [
      "(A) Avaliação Geriátrica Ampla e velocidade de marcha",
      "(B) Timed Up and Go Test e Clinical Dementia Rating",
      "(C) Estágio de Avaliação Funcional e Clinical Dementia Rating",
      "(D) Estágio de Avaliação Funcional e Short Physical Performance Battery"
    ],
    "correctAnswer": 2,
    "explanation": "Idosa com declínio de memória recente lento e progressivo há 4 anos, perda de funcionalidade e sintomas comportamentais (perambulação, agressividade, labilidade): demência de Alzheimer em fase moderada a grave.\n\nPara estadiar a demência usam-se o Clinical Dementia Rating (CDR), que gradua a gravidade em domínios cognitivos e funcionais, e o FAST (Functional Assessment Staging), que descreve a progressão funcional do Alzheimer em 7 estágios.",
    "commentary": "AGA e velocidade de marcha (A): a avaliação geriátrica ampla é abrangente, mas não estadia demência; a velocidade de marcha avalia fragilidade e mobilidade.\n\nTUG e CDR (B): o Timed Up and Go avalia mobilidade e risco de quedas, não o estágio da demência.\n\nFAST e SPPB (D): o SPPB avalia desempenho físico, não a gravidade da demência.",
    "reference": "Recomendações da Academia Brasileira de Neurologia para diagnóstico e tratamento da doença de Alzheimer (2022) / Tratado de Geriatria e Gerontologia",
    "tags": [
      "geriatria",
      "demência",
      "doença de Alzheimer",
      "escalas"
    ]
  },
  {
    "id": "unifesp2025-92",
    "topography": "11",
    "topic": "Síndrome do desconforto respiratório neonatal",
    "module": "Pediatria",
    "text": "Recém-nascido (RN) com 28 semanas de idade gestacional, peso de nascimento de 1000g, nasceu vigoroso, mas apresentou desconforto respiratório com 3 minutos de vida, com piora progressiva. Na UTI, RX de tórax apresenta infiltrado reticulogranular.\n\nConsiderando o diagnóstico mais provável, qual é a conduta recomendada?",
    "options": [
      "(A) Iniciar ventilação pulmonar invasiva imediatamente.",
      "(B) Iniciar antibioticoterapia após coleta da hemocultura.",
      "(C) Iniciar suporte ventilatório com o CPAP nasal.",
      "(D) Administrar surfactante exógeno apenas se o RN for intubado."
    ],
    "correctAnswer": 2,
    "explanation": "Prematuro de 28 semanas e 1.000 g com desconforto respiratório progressivo desde os primeiros minutos e infiltrado reticulogranular difuso: síndrome do desconforto respiratório (doença da membrana hialina), por deficiência de surfactante.\n\nNo RN que respira espontaneamente, a conduta inicial recomendada é o CPAP nasal precoce. O surfactante (de preferência por técnica minimamente invasiva, LISA/MIST) é dado se houver piora, por exemplo com FiO₂ > 0,30. Assim evita-se a ventilação invasiva e a lesão pulmonar.",
    "commentary": "Ventilação invasiva imediata (A): o RN nasceu vigoroso; intubação de rotina aumenta a displasia broncopulmonar comparada ao CPAP.\n\nAntibiótico após hemocultura (B): pode ser considerado na suspeita de sepse precoce, mas não é a conduta principal para o quadro descrito.\n\nSurfactante só se intubado (D): hoje existem técnicas de administração sem ventilação mecânica (LISA/MIST).",
    "reference": "Diretrizes da SBP — Síndrome do desconforto respiratório / European Consensus Guidelines on the Management of RDS (2022)",
    "tags": [
      "neonatologia",
      "prematuridade",
      "síndrome do desconforto respiratório",
      "CPAP"
    ]
  },
  {
    "id": "hosbos2025-17",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Mulher de 34 anos, vítima de tentativa de estrangulamento, deu entrada na emergência apresentando intensa dificuldade respiratória, rouquidão, estridor laríngeo, enfisema subcutâneo cervical e fratura palpável na região anterior do pescoço. Saturação de O₂: 88%; FR: 22 mrpm; PA: 125/75 mmHg; FC: 108 bpm. Demais segmentos do corpo sem lesões. A suspeita diagnóstica e a conduta a ser tomada na sala de emergência, respectivamente, são:",
    "options": [
      "(A) trauma da laringe e via aérea definitiva.",
      "(B) pneumotórax simples e drenagem torácica.",
      "(C) pneumotórax hipertensivo e toracocentese descompressiva.",
      "(D) lesão esofágica e endoscopia digestiva alta.",
      "(E) trauma brônquico e broncoscopia."
    ],
    "correctAnswer": 0,
    "explanation": "Trauma cervical anterior com rouquidão, estridor, enfisema subcutâneo e crepitação/fratura palpável é a tríade da fratura de laringe. Com dessaturação e desconforto, há risco iminente de perda da via aérea.\n\nA conduta é via aérea definitiva imediata — intubação orotraqueal cuidadosa (de preferência por profissional experiente, idealmente com visualização) ou, se falhar, traqueostomia de urgência; a cricotireoidostomia é evitada na fratura de laringe.",
    "commentary": "Pneumotórax simples (B): não explica rouquidão, estridor e fratura laríngea; o exame não descreve alteração torácica.\n\nPneumotórax hipertensivo (C): cursaria com hipotensão, turgência jugular e murmúrio abolido; a paciente está normotensa.\n\nLesão esofágica (D): pode coexistir, mas a prioridade (A do ABCDE) é a via aérea.\n\nTrauma brônquico (E): lesão intratorácica, com pneumotórax e fuga aérea persistente.",
    "reference": "ATLS — Advanced Trauma Life Support, 10ª ed. — Via aérea / Trauma cervical",
    "tags": [
      "trauma de laringe",
      "via aérea definitiva",
      "trauma cervical",
      "ATLS"
    ]
  },
  {
    "id": "hosbos2025-94",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "A instância de controle social do SUS, de caráter permanente e deliberativo, composta por representantes do governo, prestadores de serviço, profissionais de saúde e usuários, que atua na formulação de estratégias e no controle da execução da política de saúde no âmbito municipal, inclusive nos aspectos econômicos e financeiros, é",
    "options": [
      "(A) a Conferência Municipal de Saúde.",
      "(B) o Conselho Municipal de Saúde.",
      "(C) a Câmara Municipal de Vereadores.",
      "(D) a Secretaria Municipal de Saúde.",
      "(E) a Comissão Intergestores de Saúde."
    ],
    "correctAnswer": 1,
    "explanation": "Pela Lei nº 8.142/1990, o Conselho de Saúde tem caráter permanente e deliberativo, é composto por governo, prestadores, profissionais de saúde e usuários (estes com 50% das vagas) e atua na formulação de estratégias e no controle da execução da política de saúde, inclusive nos aspectos econômicos e financeiros.",
    "commentary": "Conferência de Saúde (A): reúne-se a cada 4 anos para avaliar a situação de saúde e propor diretrizes; não é permanente.\n\nCâmara de Vereadores (C): é o Poder Legislativo, não instância de controle social do SUS.\n\nSecretaria de Saúde (D): é o órgão gestor.\n\nComissão Intergestores (E): espaço de pactuação entre gestores (CIT, CIB, CIR), sem participação de usuários.",
    "reference": "Lei nº 8.142/1990, art. 1º",
    "tags": [
      "controle social",
      "conselho de saúde",
      "lei 8.142"
    ]
  },
  {
    "id": "scmbh2026-55",
    "topography": "15",
    "topic": "Epidemiologia",
    "module": "Saúde Coletiva",
    "text": "Assinale a alternativa que apresenta a conduta MAIS adequada como primeira resposta organizada a um surto suspeito de doença transmitida por alimento em uma escola.",
    "options": [
      "(A) Aplicar imediatamente questionário de dieta e calcular razão de chances sem definição de caso.",
      "(B) Suspender todas as atividades escolares e coletar amostras ambientais sem avaliação clínica.",
      "(C) Priorizar comunicação pública ampla antes de consolidar informações mínimas do evento.",
      "(D) Definir caso suspeito, confirmar diagnóstico e iniciar descrição por tempo, lugar e pessoa."
    ],
    "correctAnswer": 3,
    "explanation": "Na investigação de surto (incluindo doença transmitida por alimento), os primeiros passos são confirmar o diagnóstico e a existência do surto, definir caso (suspeito, provável, confirmado) e fazer a descrição por tempo (curva epidêmica), lugar e pessoa. Isso orienta as hipóteses, a coleta de amostras e as medidas de controle.",
    "commentary": "Questionário e odds ratio sem definição de caso (A): sem definição de caso a análise não tem validade.\n\nSuspender atividades e coletar amostras sem avaliação clínica (B): ações desorganizadas, sem base epidemiológica.\n\nComunicação ampla antes de consolidar informações (C): a comunicação de risco deve ser oportuna, mas baseada em dados mínimos consolidados.",
    "reference": "Guia de Vigilância em Saúde — MS / Manual integrado de vigilância de doenças transmitidas por alimentos (MS)",
    "tags": [
      "saúde coletiva",
      "investigação de surto",
      "doenças transmitidas por alimentos",
      "vigilância epidemiológica"
    ]
  },
  {
    "id": "revalida-2025-1-69",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Secundigesta com idade gestacional de 18 semanas comparece à consulta na unidade básica de saúde (UBS) para iniciar seu pré-natal. Está assintomática e, ao exame clínico, não são identificadas alterações. A paciente, no entanto, relata que entrou em trabalho de parto espontâneo com 32 semanas em sua primeira gestação.\n\nConsiderado o caso descrito, é indicado prescrever",
    "options": [
      "(A) indometacina por via oral diariamente.",
      "(B) pessário vaginal, após 22 semanas de gestação.",
      "(C) progesterona por via intramuscular semanalmente.",
      "(D) progesterona natural micronizada por via vaginal diariamente."
    ],
    "correctAnswer": 3,
    "explanation": "Antecedente de parto prematuro espontâneo é o principal fator de risco para nova prematuridade. Nessa situação, recomenda-se progesterona natural micronizada vaginal diária (200 mg) de 16 até 36 semanas, além de medir o colo uterino por ultrassonografia transvaginal no segundo trimestre.",
    "commentary": "Indometacina (A): é tocolítico usado no trabalho de parto prematuro, não na prevenção.\n\nPessário (B): é opção em colo curto, não indicação baseada só na história.\n\nProgesterona intramuscular semanal (C): o caproato de 17-hidroxiprogesterona não mostrou benefício consistente (estudo PROLONG) e não está disponível no Brasil.",
    "reference": "Febrasgo — Prevenção do parto prematuro / Ministério da Saúde — Gestação de alto risco (2022)",
    "tags": [
      "obstetrícia",
      "prematuridade",
      "progesterona vaginal",
      "pré-natal"
    ],
    "tip": "Prematuro espontâneo prévio ou colo < 25 mm: progesterona vaginal."
  },
  {
    "id": "iog2026-45",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Assinale o indicador utilizado para monitoramento da Atenção Básica.",
    "options": [
      "Proporção de encaminhamentos para internação hospitalar no mês.",
      "Taxa de mortalidade por doenças respiratórias no ano.",
      "Frequência de casos vítimas de violência doméstica no mês.",
      "Proporção de atendimentos a crianças nascidas a termo por mês."
    ],
    "correctAnswer": 0,
    "explanation": "Indicadores de monitoramento da Atenção Básica avaliam sua resolutividade e a coordenação do cuidado. A proporção de encaminhamentos para internação hospitalar reflete a capacidade da equipe de resolver problemas no próprio nível (espera-se resolver 80–90% das demandas) e relaciona-se às internações por condições sensíveis à atenção primária. É o indicador que monitora o funcionamento da AB entre as opções.",
    "commentary": "Mortalidade por doenças respiratórias no ano (B): indicador epidemiológico geral, influenciado por muitos fatores fora da AB.\n\nFrequência de violência doméstica (C): é dado de vigilância e notificação, não indicador de desempenho da AB.\n\nAtendimentos a crianças nascidas a termo (D): não é indicador consagrado; o que se monitora é cobertura de puericultura, vacinação, consultas de pré-natal etc.",
    "reference": "Ministério da Saúde — Sistema de Informação em Saúde para a Atenção Básica (SISAB) / Pacto de Indicadores da Atenção Básica",
    "tags": [
      "atenção primária",
      "indicadores de saúde",
      "resolutividade",
      "monitoramento"
    ],
    "tip": "Muitos encaminhamentos para internação = AB pouco resolutiva."
  },
  {
    "id": "sespe2026-94",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Saúde Coletiva",
    "text": "A Rede Alyne é uma iniciativa do Ministério da Saúde para reduzir a mortalidade materna e neonatal no Brasil, visando a um pré-natal de qualidade com consultas intercaladas entre médicos e enfermeiros, começando no primeiro trimestre, com o mínimo de",
    "options": [
      "5 consultas.",
      "6 consultas.",
      "7 consultas.",
      "8 consultas.",
      "Nenhuma das alternativas."
    ],
    "correctAnswer": 2,
    "explanation": "A Rede Alyne (Portaria GM/MS nº 5.350/2024), que substituiu a Rede Cegonha, ampliou o pré-natal de risco habitual para no mínimo 7 consultas, iniciando no 1º trimestre e intercalando consultas médicas e de enfermagem, além de prever exames e ao menos uma consulta odontológica.",
    "commentary": "5 consultas (A): número inferior ao mínimo.\n\n6 consultas (B): era o mínimo anterior (Rede Cegonha e PHPN).\n\n8 consultas (D): é a recomendação da OMS (2016) de contatos, não o mínimo da Rede Alyne.\n\nNenhuma (E): o número correto está na alternativa C.",
    "reference": "Ministério da Saúde — Portaria GM/MS nº 5.350/2024 (Rede Alyne)",
    "tags": [
      "saúde da mulher",
      "pré-natal",
      "rede de atenção materno-infantil",
      "mortalidade materna"
    ],
    "tip": "Rede Alyne: mínimo de 7 consultas de pré-natal."
  },
  {
    "id": "hpp2026-67",
    "topography": "5.1",
    "topic": "Doença inflamatória pélvica",
    "module": "Ginecologia e Obstetrícia",
    "text": "Algumas mulheres possuem indicação de tratamento de doença inflamatória pélvica em nível hospitalar. Assinale a alternativa que inclui critério para indicar tratamento hospitalar da DIP de acordo com o Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com Infecções Sexualmente Transmissíveis do Ministério da Saúde, 2022:",
    "options": [
      "Dor pélvica e à mobilização de anexos ao toque bimanual.",
      "Associação de infecção do trato urinário baixo.",
      "Colo friável e sangrante ao toque com espátula de Ayre.",
      "Ausência de resposta clínica após 72 horas do início do tratamento com antibioticoterapia oral."
    ],
    "correctAnswer": 3,
    "explanation": "O PCDT de IST (2022) lista os critérios para tratar a DIP em regime hospitalar: abscesso tubo-ovariano, gestação, ausência de resposta clínica após 72 horas de antibiótico oral, intolerância ao tratamento oral, estado geral grave (náuseas, vômitos, febre alta), dificuldade de excluir emergência cirúrgica (apendicite, gravidez ectópica) e imunodeficiência.\n\nA falha após 72 horas de tratamento oral é critério de internação.",
    "commentary": "Dor pélvica e à mobilização de anexos (A): são critérios diagnósticos da DIP, não de gravidade.\n\nITU baixa associada (B): não é critério de internação.\n\nColo friável e sangrante (C): sinal de cervicite, também usado no diagnóstico, não indica tratamento hospitalar.",
    "reference": "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022)",
    "tags": [
      "doença inflamatória pélvica",
      "infecções sexualmente transmissíveis",
      "critérios de internação"
    ],
    "tip": "DIP interna: abscesso, gestação, sem melhora em 72 h, não tolera VO, grave ou dúvida cirúrgica."
  },
  {
    "id": "famema2025-3",
    "topography": "3.1",
    "topic": "Diarreia aguda",
    "module": "Clínica Médica",
    "text": "Durante um cruzeiro de verão no litoral brasileiro, diversos pacientes apresentaram sintomas de intoxicação alimentar e precisaram ser atendidos por equipes de saúde. Eles relatam que comeram saladas diversas, além de carne e peixe, e que os sintomas tiveram início duas horas após a alimentação.\n\nO agente etiológico mais provavelmente envolvido é:",
    "options": [
      "rotavírus.",
      "norovirus.",
      "estafilococos.",
      "salmonela."
    ],
    "correctAnswer": 2,
    "explanation": "Surto de intoxicação alimentar com início muito rápido (2 horas após a refeição) aponta para toxina pré-formada no alimento. O Staphylococcus aureus contamina alimentos manipulados (saladas, carnes, maionese) e produz enterotoxina termoestável; o quadro começa 1–6 horas após a ingestão, com náuseas e vômitos intensos, cólica e diarreia, e se resolve em 24–48 horas.\n\nQuando o período de incubação é curto (horas), pense em toxina pré-formada (S. aureus, Bacillus cereus); quando é de 12 horas ou mais, em infecção que precisa se multiplicar no intestino.",
    "commentary": "Rotavírus (A): acomete principalmente crianças pequenas, com incubação de 1–3 dias; não é causa típica de surto em adultos após refeição.\n\nNorovírus (B): é a grande causa de surtos em navios, mas a incubação é de 12–48 horas, longa demais para sintomas em 2 horas.\n\nSalmonela (D): incubação de 6–72 horas (em geral 12–36 h), com febre e diarreia; não explica início em 2 horas.",
    "tip": "Intoxicação alimentar em 1–6 horas = toxina pré-formada (S. aureus, B. cereus). Surto em navio com 1–2 dias de incubação = norovírus.",
    "reference": "Ministério da Saúde. Manual Integrado de Vigilância, Prevenção e Controle de Doenças Transmitidas por Alimentos, 2010.",
    "tags": [
      "intoxicação alimentar",
      "staphylococcus aureus",
      "doenças transmitidas por alimentos"
    ]
  },
  {
    "id": "famema2025-93",
    "topography": "5.1",
    "topic": "Doença inflamatória pélvica",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 21 anos chega à unidade de emergência com sintomas sugestivos de sepse e doença inflamatória pélvica aguda. Não há histórico de alergias. Nesse momento, recomenda-se o uso",
    "options": [
      "apenas de ceftriaxona e metronidazol.",
      "apenas de ceftriaxona e doxiciclina.",
      "de ceftriaxona, doxiciclina e metronidazol.",
      "de clindamicina, ampicilina e cefotaxime."
    ],
    "correctAnswer": 2,
    "explanation": "DIP com sepse é DIP grave e exige internação e antibiótico parenteral. O esquema hospitalar recomendado pelo Ministério da Saúde (e pelo CDC) cobre gonococo, clamídia e anaeróbios: ceftriaxona 1 g EV ao dia + doxiciclina 100 mg de 12/12 h + metronidazol 400 mg (ou 500 mg) de 12/12 h, completando 14 dias.",
    "commentary": "Ceftriaxona + metronidazol (A): sem doxiciclina, a clamídia fica descoberta.\n\nCeftriaxona + doxiciclina (B): sem metronidazol, os anaeróbios, importantes na DIP grave e no abscesso tubo-ovariano, ficam descobertos.\n\nClindamicina + ampicilina + cefotaxima (D): não é esquema recomendado; o esquema alternativo com clindamicina associa gentamicina.",
    "tip": "DIP: ceftriaxona + doxiciclina + metronidazol por 14 dias (ambulatorial com ceftriaxona IM dose única; hospitalar com ceftriaxona EV).",
    "reference": "Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com IST, 2022. CDC. STI Treatment Guidelines, 2021.",
    "tags": [
      "doença inflamatória pélvica",
      "sepse",
      "antibioticoterapia"
    ]
  },
  {
    "id": "amp2026-7",
    "topography": "1.1",
    "topic": "Epilepsia",
    "module": "Pediatria",
    "text": "Paciente de dois anos vem a consulta por estar apresentando espasmos de membros, com piora recente. Tem antecedentes de rabdomioma cardíaco ao nascimento e recentemente perda de algumas habilidades. Ao exame lesões cutâneas hipocrômicas em formato de folha. Qual o diagnóstico mais provável?",
    "options": [
      "Neurofibromatose.",
      "Nevo hipocrômico.",
      "Esclerose tuberosa.",
      "Hanseníase sistêmica.",
      "Síndrome de Lennox-Gastaut."
    ],
    "correctAnswer": 2,
    "explanation": "Criança de 2 anos com espasmos (síndrome de West), regressão do desenvolvimento, rabdomioma cardíaco ao nascimento e manchas hipocrômicas em folha de freixo: esclerose tuberosa. É doença genética (TSC1/TSC2) com hamartomas em vários órgãos; o rabdomioma cardíaco costuma ser o primeiro achado (às vezes ainda no pré-natal). A vigabatrina é a droga de escolha para espasmos na esclerose tuberosa.",
    "commentary": "Neurofibromatose (A): manchas café com leite, efélides axilares e neurofibromas; não manchas hipocrômicas nem rabdomioma.\n\nNevo hipocrômico (B): lesão cutânea isolada, sem epilepsia ou acometimento cardíaco.\n\nHanseníase (D): não se apresenta assim em lactentes, nem com espasmos e rabdomioma.\n\nLennox-Gastaut (E): é uma síndrome epiléptica (pode suceder West), não explica o rabdomioma e as manchas; a causa de base é a esclerose tuberosa.",
    "reference": "SBP / International Tuberous Sclerosis Complex Consensus 2021",
    "tags": [
      "esclerose tuberosa",
      "síndrome de West",
      "rabdomioma cardíaco",
      "manchas hipocrômicas"
    ],
    "tip": "Espasmos + manchas em folha + rabdomioma = esclerose tuberosa."
  },
  {
    "id": "amrigs2025-24",
    "module": "Cirurgia",
    "text": "Em pacientes adultos, obstruções intestinais em cólon causadas por doença neoplásica são mais comuns no:",
    "options": [
      "Ângulo hepático.",
      "Ângulo esplênico.",
      "Cólon transverso.",
      "Cólon esquerdo."
    ],
    "correctAnswer": 3,
    "explanation": "A obstrução do cólon por câncer é mais frequente no cólon esquerdo (descendente e sigmoide): a luz é mais estreita, as fezes são mais sólidas e os tumores costumam ser anulares e estenosantes (\"em anel de guardanapo\"). No cólon direito, de luz maior e fezes líquidas, o tumor tende a sangrar (anemia) antes de obstruir.",
    "commentary": "Ângulo hepático (A): pertence ao cólon direito/transverso, menos sujeito a obstrução.\n\nÂngulo esplênico (B): é um ponto de estreitamento e pode obstruir, mas, isoladamente, não é a localização mais comum.\n\nCólon transverso (C): menos frequente que o cólon esquerdo como sede de câncer obstrutivo.",
    "reference": "Sabiston — Tratado de Cirurgia / Diretrizes da SBCP",
    "tags": [
      "câncer colorretal",
      "obstrução intestinal",
      "cólon esquerdo"
    ],
    "tip": "Cólon esquerdo obstrui; cólon direito sangra (anemia)."
  },
  {
    "id": "amrigs2025-97",
    "module": "Saúde Coletiva",
    "text": "O que é um teste “padrão-ouro”?",
    "options": [
      "Um teste com 100% de sensibilidade.",
      "Um teste com 100% de especificidade.",
      "Um teste usado como referência para avaliar outros testes.",
      "Um teste com 100% de acurácia."
    ],
    "correctAnswer": 2,
    "explanation": "Padrão-ouro (padrão de referência) é o melhor método disponível para definir quem tem e quem não tem a doença, usado como referência para avaliar a sensibilidade, a especificidade e os valores preditivos de novos testes. Não precisa ser perfeito.",
    "commentary": "100% de sensibilidade (A), 100% de especificidade (B), 100% de acurácia (D): nenhum teste real é perfeito; o padrão-ouro é apenas a melhor referência disponível.",
    "reference": "Fletcher — Epidemiologia Clínica: elementos essenciais",
    "tags": [
      "padrão-ouro",
      "testes diagnósticos",
      "acurácia"
    ],
    "tip": "Padrão-ouro = melhor referência disponível, não teste perfeito."
  },
  {
    "id": "cerman2025-12",
    "topography": "6.1",
    "topic": "Esclerose sistêmica",
    "module": "Clínica Médica",
    "text": "Na esclerose sistêmica é considerado fator de risco para acometimento renal; assinale a alternativa CORRETA:",
    "options": [
      "(A) Sexo masculino.",
      "(B) Forma limitada da doença.",
      "(C) Uso prévio de corticoesteroide.",
      "(D) Início da doença na pós menopausa."
    ],
    "correctAnswer": 2,
    "explanation": "A crise renal esclerodérmica (hipertensão acelerada e lesão renal aguda) tem como fatores de risco: forma cutânea difusa e de progressão rápida, doença inicial (primeiros 4 anos), anticorpo anti-RNA polimerase III e uso de corticoide em dose moderada ou alta (> 15 mg/dia de prednisona).",
    "commentary": "Sexo masculino (A): não é fator de risco clássico da crise renal.\n\nForma limitada (B): o risco é maior na forma difusa.\n\nInício na pós-menopausa (D): não é fator de risco descrito.",
    "reference": "EULAR recommendations for the treatment of systemic sclerosis (2023) / Consenso da SBR para esclerose sistêmica",
    "tags": [
      "esclerose sistêmica",
      "crise renal esclerodérmica",
      "corticoide"
    ]
  },
  {
    "id": "cerman2025-88",
    "topography": "10",
    "topic": "Sífilis",
    "module": "Saúde Coletiva",
    "text": "Pedro tem 30 anos e teve diagnóstico de sífilis por teste rápido durante o período de pré-natal da esposa. Realizou três doses de penicilina benzatina, e apresentava um VDRL inicial de 1:128. Seis meses após o tratamento seu VDRL estava em 1:16, mantendo a titulação no VDRL do 9o. mês. Todavia, ao realizar o VDRL no 12o. mês pós-tratamento, o valor encontrado foi de 1:64. Diante da situação apresentada, qual a conduta CORRETA?",
    "options": [
      "(A) Repetir VDRL daqui a três meses.",
      "(B) Indicar novo tratamento com penicilina benzatina.",
      "(C) Considerar o valor de VDRL do 12o. mês como cicatriz sorológica.",
      "(D) Repetir teste rápido de sífilis e tratar somente se resultado positivo."
    ],
    "correctAnswer": 1,
    "explanation": "Após o tratamento, o VDRL deve cair. Aumento de pelo menos duas diluições (aqui de 1:16 para 1:64) em relação ao último título indica reinfecção ou reativação: é preciso retratar com penicilina benzatina (e investigar neurossífilis se houver sinais ou em pessoas com HIV), além de tratar e testar as parcerias.",
    "commentary": "Repetir o VDRL em 3 meses (A): a elevação de duas diluições já define falha terapêutica ou reinfecção.\n\nCicatriz sorológica (C): cicatriz é título baixo e estável (geralmente ≤ 1:8), não um título que sobe.\n\nRepetir teste rápido (D): o teste treponêmico permanece reagente por toda a vida e não diferencia infecção ativa de passada.",
    "reference": "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022)",
    "tags": [
      "sífilis",
      "VDRL",
      "reinfecção",
      "retratamento"
    ]
  }
];
