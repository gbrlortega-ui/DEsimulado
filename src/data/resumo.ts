// Arquivo gerado por `npm run gen` a partir do banco de questões. Não editar à mão.
// O build e o servidor local regeneram este arquivo sozinhos; o `npm run validate` acusa se ficar desatualizado.
import type { Question } from '../types';

export const TOTAL_QUESTIONS = 3304;

export const COUNT_BY_AREA: Record<string, number> = {
  "Pediatria": 623,
  "Clínica Médica": 696,
  "Cirurgia": 600,
  "Ginecologia e Obstetrícia": 620,
  "Saúde Coletiva": 605,
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
    "label": "ENARE 2025",
    "kind": "Residência",
    "year": 2025,
    "count": 100
  },
  {
    "label": "FAMEMA 2025",
    "kind": "Residência",
    "year": 2025,
    "count": 100
  },
  {
    "label": "FAMERP 2025",
    "kind": "Residência",
    "year": 2025,
    "count": 80
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
    "label": "FAMERP 2026",
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
    "key": "ENARE",
    "label": "ENARE",
    "kind": "Residência",
    "years": "2025",
    "count": 100
  },
  {
    "key": "FAMEMA",
    "label": "FAMEMA",
    "kind": "Residência",
    "years": "2025–2026",
    "count": 200
  },
  {
    "key": "FAMERP",
    "label": "FAMERP",
    "kind": "Residência",
    "years": "2025–2026",
    "count": 160
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
  "Clínica Médica|FAMERP": 32,
  "Ginecologia e Obstetrícia|FAMERP": 32,
  "Saúde Coletiva|FAMERP": 32,
  "Pediatria|FAMERP": 32,
  "Cirurgia|FAMERP": 32,
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
  "Saúde Coletiva|CERMAN": 38,
  "Clínica Médica|ENARE": 23,
  "Cirurgia|ENARE": 19,
  "Ginecologia e Obstetrícia|ENARE": 21,
  "Pediatria|ENARE": 17,
  "Saúde Coletiva|ENARE": 20
};

/** Questões por especialidade ou região da topografia ("1.1", "8"). */
export const TOPOGRAPHY_COUNT: Record<string, number> = {
  "8": 86,
  "9": 69,
  "10": 134,
  "11": 315,
  "12": 30,
  "13": 68,
  "14": 144,
  "15": 473,
  "16": 199,
  "1.2": 17,
  "1.3": 29,
  "7.2": 48,
  "4.2": 30,
  "1.1": 95,
  "1.5": 36,
  "6.1": 49,
  "3.1": 107,
  "4.1": 92,
  "2.1": 100,
  "6.2": 23,
  "2.2": 110,
  "3.2": 38,
  "3.3": 37,
  "7.1": 30,
  "1.4": 4,
  "3.4": 23,
  "5.1": 232,
  "5.2": 282
};

/** Questões por assunto, na chave "1.1|Cefaleias". */
export const TOPIC_COUNT: Record<string, number> = {
  "11|Puericultura": 35,
  "1.2|Catarata": 5,
  "11|Icterícia neonatal": 12,
  "11|Obesidade infantil": 9,
  "1.3|Amigdalite/faringoamigdalite": 13,
  "7.2|Urticária": 2,
  "1.2|Uveíte": 2,
  "4.2|Estenose de uretra": 3,
  "11|Calendário vacinal": 19,
  "1.1|TCE": 18,
  "11|Maus-tratos infantis": 18,
  "11|Prematuridade": 5,
  "11|Anemia ferropriva": 16,
  "9|Trombocitopenias": 6,
  "11|Aleitamento materno": 25,
  "1.5|Hipotireoidismo": 9,
  "11|Síndrome do desconforto respiratório neonatal": 8,
  "14|Emergências pediátricas": 16,
  "6.1|Artrite reumatoide": 7,
  "9|Talassemias": 2,
  "11|ITU pediátrica": 7,
  "11|Diarreia aguda": 11,
  "14|Trauma": 43,
  "11|Cardiopatias congênitas": 24,
  "3.1|Constipação intestinal": 7,
  "10|Raiva": 8,
  "1.1|Cefaleias": 10,
  "1.3|Surdez": 2,
  "11|Desenvolvimento neuropsicomotor": 22,
  "9|Anemia falciforme": 7,
  "11|Asma infantil": 21,
  "11|Doença de Kawasaki": 3,
  "1.5|Hipertireoidismo": 11,
  "11|Desidratação": 12,
  "11|Sepse neonatal": 8,
  "9|Leucemias": 9,
  "1.3|Otite média aguda": 2,
  "11|Convulsão febril": 6,
  "11|Pneumonia infantil": 14,
  "11|Refluxo gastroesofágico": 2,
  "11|Bronquiolite": 12,
  "11|Desnutrição": 4,
  "10|Sífilis": 22,
  "4.1|Síndrome nefrítica": 4,
  "2.1|Bronquiectasias": 2,
  "8|Insuficiência adrenal": 7,
  "6.2|Escoliose": 2,
  "14|Intoxicações": 18,
  "15|Ética médica": 22,
  "4.1|Síndrome nefrótica": 8,
  "1.3|Laringite": 3,
  "7.2|Dermatite atópica": 5,
  "14|Sepse e choque séptico": 14,
  "8|Síndrome de Cushing": 3,
  "4.2|Torção testicular": 6,
  "2.2|Arritmias": 7,
  "9|Anemias": 4,
  "10|Tétano": 1,
  "8|Feocromocitoma": 2,
  "9|Linfomas": 3,
  "8|Cetoacidose diabética": 20,
  "3.1|Diarreia crônica": 3,
  "1.2|Erros refrativos": 1,
  "10|Dengue": 21,
  "4.1|Distúrbios hidroeletrolíticos": 16,
  "4.1|Lesão renal aguda": 17,
  "8|Diabetes mellitus tipo 1 e 2": 30,
  "1.1|Demências": 8,
  "6.1|Lúpus eritematoso sistêmico": 9,
  "1.1|Epilepsia": 10,
  "10|Tuberculose": 25,
  "2.1|DPOC": 20,
  "9|Anemia ferropriva": 6,
  "3.2|Hepatites virais": 6,
  "2.2|Dislipidemia": 8,
  "2.2|Insuficiência cardíaca": 14,
  "2.2|Hipertensão arterial sistêmica": 26,
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
  "7.2|Melanoma": 5,
  "4.1|Nefrolitíase": 10,
  "2.2|Valvopatias": 5,
  "6.1|Fibromialgia": 3,
  "2.2|Infarto agudo do miocárdio": 11,
  "2.1|Embolia pulmonar": 9,
  "2.1|Câncer de pulmão": 7,
  "4.1|Pielonefrite": 6,
  "4.1|Doença renal crônica": 9,
  "3.1|Doença inflamatória intestinal": 12,
  "3.1|Doença celíaca": 4,
  "3.2|Cirrose hepática": 5,
  "1.1|Meningite": 12,
  "1.1|Parkinson": 3,
  "9|Anemia hemolítica": 3,
  "3.2|Encefalopatia hepática": 4,
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
  "2.1|Derrame pleural": 17,
  "13|Transtornos de ansiedade": 7,
  "1.5|Tempestade tireotóxica": 1,
  "12|Demências": 1,
  "13|Depressão maior": 11,
  "8|Hiperaldosteronismo primário": 3,
  "16|Feridas": 20,
  "16|Pré-operatório": 24,
  "16|Hérnias": 25,
  "3.3|Colangite aguda": 7,
  "3.1|Hemorragia digestiva baixa": 5,
  "7.1|Doença arterial periférica": 6,
  "6.2|Fraturas": 5,
  "1.1|Hipertensão intracraniana": 3,
  "14|Queimaduras": 13,
  "1.3|Câncer de cabeça e pescoço": 2,
  "1.2|Ceratite": 3,
  "14|Choque": 10,
  "16|Trauma abdominal": 22,
  "6.2|Hérnia de disco": 3,
  "16|Obstrução intestinal": 21,
  "7.1|Trombose venosa profunda": 10,
  "4.2|Câncer de próstata": 6,
  "3.1|Hemorragia digestiva alta": 12,
  "3.1|Doença hemorroidária": 8,
  "7.1|Aneurisma de aorta abdominal": 4,
  "3.2|Hepatocarcinoma": 6,
  "10|Doença de Chagas": 3,
  "1.4|Doença periodontal": 1,
  "3.3|Colecistite aguda": 6,
  "16|Trauma torácico": 23,
  "16|Apendicite aguda": 13,
  "16|Perfuração de víscera oca": 11,
  "3.3|Colangiocarcinoma": 3,
  "3.4|Pancreatite aguda": 13,
  "3.1|Câncer colorretal": 12,
  "8|Obesidade": 12,
  "7.1|Isquemia arterial aguda": 4,
  "7.2|Celulite": 2,
  "16|Pós-operatório": 25,
  "7.1|Insuficiência venosa crônica": 3,
  "6.2|Lesões do manguito rotador": 1,
  "16|Isquemia mesentérica": 4,
  "1.5|Nódulos tireoidianos": 5,
  "16|Abdome agudo": 6,
  "6.2|Lombalgia": 6,
  "7.2|Carcinoma espinocelular": 2,
  "6.2|Luxações": 1,
  "3.3|Colelitíase": 8,
  "5.1|Sangramento uterino anormal": 19,
  "5.1|Climatério e menopausa": 26,
  "5.1|Contracepção": 32,
  "5.1|Câncer de colo uterino": 37,
  "5.1|Vaginose bacteriana": 9,
  "5.2|Diabetes gestacional": 23,
  "5.2|Assistência ao parto": 15,
  "5.2|Puerpério": 18,
  "5.2|Infecções na gestação": 35,
  "5.2|Rotura prematura de membranas": 10,
  "15|Rastreamento": 27,
  "5.1|Câncer de endométrio": 11,
  "5.2|Gravidez ectópica": 12,
  "5.2|Diagnóstico de gravidez": 2,
  "5.2|Pré-natal": 42,
  "5.2|Hemorragia pós-parto": 14,
  "5.2|Trabalho de parto": 30,
  "5.1|Mioma uterino": 14,
  "5.1|Endometriose": 13,
  "5.1|Infertilidade": 13,
  "5.1|Prolapso genital": 9,
  "5.1|Câncer de ovário": 7,
  "15|Saúde da mulher": 12,
  "5.2|Pré-eclâmpsia": 19,
  "5.2|Abortamento": 21,
  "5.1|Síndrome dos ovários policísticos": 9,
  "5.1|Doença inflamatória pélvica": 10,
  "5.1|Candidíase vaginal": 4,
  "5.2|Eclâmpsia": 2,
  "5.2|Descolamento prematuro de placenta": 10,
  "5.2|Isoimunização Rh": 7,
  "5.1|Tricomoníase": 3,
  "5.2|Síndrome HELLP": 1,
  "5.1|Planejamento reprodutivo": 6,
  "8|Prolactinoma": 2,
  "10|Infecções sexualmente transmissíveis": 13,
  "15|Bioética": 7,
  "5.2|Idade gestacional": 5,
  "4.2|Incontinência urinária": 8,
  "5.2|Placenta prévia": 7,
  "15|Atenção Primária": 88,
  "15|Saúde do idoso": 7,
  "15|SUS": 64,
  "12|Polifarmácia": 4,
  "15|Imunização": 32,
  "15|Saúde do trabalhador": 36,
  "15|Estudos epidemiológicos": 38,
  "15|Epidemiologia": 44,
  "15|Vigilância epidemiológica": 36,
  "15|Testes diagnósticos": 27,
  "15|Estratégia Saúde da Família": 16,
  "12|Quedas": 3,
  "13|Risco de suicídio": 10,
  "13|Transtorno bipolar": 3,
  "10|Infecções relacionadas à assistência": 4,
  "15|Saúde da criança": 4,
  "2.2|Doença arterial coronariana crônica": 5,
  "3.2|Hipertensão portal": 7,
  "3.2|Icterícia": 2,
  "2.2|Febre reumática": 4,
  "4.1|Distúrbios ácido-base": 10,
  "14|Anafilaxia": 6,
  "10|Malária": 4,
  "9|Coagulopatias": 8,
  "4.2|Hiperplasia prostática benigna": 2,
  "2.1|Fibrose pulmonar": 2,
  "6.1|Artrite séptica": 2,
  "15|Bioestatística": 9,
  "3.2|Ascite": 3,
  "14|Crise hipertensiva": 2,
  "7.2|Dermatite de contato": 3,
  "1.1|Esclerose múltipla": 2,
  "3.1|Úlcera péptica": 4,
  "9|Neutropenia febril": 4,
  "13|Transtornos alimentares": 7,
  "4.2|Fimose": 1,
  "3.4|Câncer de pâncreas": 3,
  "3.4|Pancreatite crônica": 5,
  "3.1|Diverticulose/diverticulite": 10,
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
  "1.3|Vertigem": 5,
  "6.2|Lesão do ligamento cruzado anterior": 1,
  "8|Distúrbios do cálcio": 4,
  "14|Parada cardiorrespiratória": 14,
  "4.1|Nefropatia diabética": 3,
  "2.2|Choque cardiogênico": 1,
  "12|Cuidados paliativos": 11,
  "10|Toxoplasmose": 4,
  "1.5|Câncer de tireoide": 4,
  "2.2|Endocardite infecciosa": 7,
  "2.1|Tabagismo": 6,
  "1.5|Hiperparatireoidismo": 5,
  "3.3|Câncer de vesícula": 4,
  "3.1|Diarreia aguda": 3,
  "5.2|Restrição de crescimento fetal": 9,
  "11|Púrpura de Henoch-Schönlein": 3,
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
  "1.1|Encefalite": 2,
  "1.4|Sialolitíase": 1,
  "2.2|Síncope": 1,
  "1.2|Glaucoma": 1,
  "14|Insuficiência respiratória": 2,
  "2.1|SDRA": 2,
  "14|Distúrbios hidroeletrolíticos": 1,
  "13|TEPT": 1,
  "6.1|Pseudogota": 1,
  "2.2|Miocardite": 1,
  "3.3|Pancreatite biliar": 2,
  "8|SIADH": 1,
  "2.2|Cardiomiopatias": 1,
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
    "id": "tp2022-60",
    "topography": "11",
    "topic": "Refluxo gastroesofágico",
    "module": "Pediatria",
    "text": "Lactente de 8 meses, regurgitações desde nascimento, baixo ganho de peso (queda de percentil) e episódios de sibilância. Hipótese mais provável:",
    "options": [
      "(A) Estenose hipertrófica do piloro.",
      "(B) Refluxo fisiológico do lactente.",
      "(C) Atresia de esôfago.",
      "(D) Doença do refluxo gastroesofágico (DRGE)."
    ],
    "correctAnswer": 3,
    "explanation": "Lactente de 8 meses com regurgitações frequentes desde o nascimento, que não melhoraram com medidas posturais e dietéticas, queda no ganho de peso (de escore Z +1 para -1) e episódios repetidos de sibilância e otite. Quando o refluxo vem acompanhado de complicações, como prejuízo do crescimento ou sintomas respiratórios, deixa de ser fisiológico e passa a ser doença do refluxo gastroesofágico (DRGE).\n\nA prematuridade é fator de risco. A ultrassonografia normal e a ausência de engasgo ou disfagia ajudam a afastar causas anatômicas, e o teste do pezinho normal torna a fibrose cística menos provável.",
    "commentary": "Estenose hipertrófica do piloro (A): surge entre a 2ª e a 8ª semana de vida, com vômitos em jato, não biliosos, oliva pilórica palpável e piloro espessado ao ultrassom, que aqui era normal.\n\nRefluxo fisiológico (B): o bebê que regurgita mas cresce bem e não tem complicações tem refluxo fisiológico, que tende a melhorar até cerca de 1 ano; aqui há perda de peso e sintomas respiratórios.\n\nAtresia de esôfago (C): é diagnosticada logo ao nascer, com salivação excessiva, engasgos e impossibilidade de passar sonda até o estômago.",
    "tip": "Regurgitação + complicação (pouco ganho de peso, sibilância, esofagite) = DRGE. Regurgitação com bom crescimento = fisiológico.",
    "reference": "Guia Prático SBP - DRGE 2021.",
    "tags": [
      "gastroenterologia"
    ]
  },
  {
    "id": "tp2023-34",
    "topography": "2.1",
    "topic": "DPOC",
    "module": "Clínica Médica",
    "text": "Homem, 70 anos, queixa-se de dispneia aos pequenos esforços e tosse com expectoração clara matinal há cerca de 2 anos. Não apresenta comorbidades, nem usava medicações previamente. Tabagista de 40 maços/ano. Há cerca de 3 dias houve piora da dispneia, agora presente em repouso, com aumento e mudança da expectoração para amarelada, febre referida com calafrios e perda do apetite. Determine o diagnóstico mais provável para o quadro agudo:",
    "options": [
      "(A) Pleurite aguda",
      "(B) Crise de asma",
      "(C) Exacerbação de DPOC",
      "(D) Tuberculose pulmonar"
    ],
    "correctAnswer": 2,
    "explanation": "Homem idoso com carga tabágica alta (40 maços-ano), dispneia progressiva e tosse produtiva matinal há 2 anos: é o quadro de DPOC, que se confirma com espirometria mostrando obstrução que não reverte com broncodilatador (VEF1/CVF menor que 0,70 pós-broncodilatador).\n\nNos últimos 3 dias houve piora aguda da dispneia, aumento do volume e purulência do escarro e febre. Essa piora aguda dos sintomas respiratórios além da variação do dia a dia é a exacerbação da DPOC, na maioria das vezes desencadeada por infecção respiratória. Aumento da dispneia, do volume e da purulência do escarro (critérios de Anthonisen) indicam antibiótico, além de broncodilatador de curta ação e corticoide sistêmico.",
    "commentary": "Pleurite aguda (A): o sintoma principal é dor torácica que piora com a respiração, que o paciente não tem; não explica a história de 2 anos.\n\nCrise de asma (B): a asma costuma começar na infância ou juventude, com sintomas variáveis e episódicos; um tabagista pesado de 70 anos com sintomas contínuos tem DPOC.\n\nTuberculose pulmonar (D): tosse por mais de 3 semanas com febre vespertina, sudorese noturna e emagrecimento; aqui a febre e a mudança do escarro surgiram de forma aguda, há 3 dias.",
    "tip": "Tabagista com tosse e dispneia crônicas que piora em dias, com mais escarro e escarro purulento = exacerbação de DPOC.",
    "reference": "GLOBAL INITIATIVE FOR CHRONIC OBSTRUCTIVE LUNG DISEASE. Global strategy for Diagnosis, Management and Prevention of Chronic Obstructive Pulmonary Disease 2023 REPORT.",
    "tags": [
      "pneumologia"
    ]
  },
  {
    "id": "tp2026-34",
    "topography": "9",
    "topic": "Leucemias",
    "module": "Clínica Médica",
    "text": "Um adolescente de 16 anos é levado ao hospital com história de fadiga, febre e sangramentos gengivais há 3 semanas. Ao exame físico apresenta palidez, petéquias e linfadenomegalia cervical. Hemograma: Hb 8g/dL; Leucócitos 35.000/mm³; Plaquetas 40.000/mm³. Presença de blastos no sangue periférico. Qual é o exame diagnóstico confirmatório mais indicado?",
    "options": [
      "(A) Dosagem de ferritina",
      "(B) Mielograma",
      "(C) Biópsia de linfonodo",
      "(D) Eletroforese de hemoglobina"
    ],
    "correctAnswer": 1,
    "explanation": "O mielograma (aspirado de medula óssea) é o exame padrão ouro indispensável para a análise citomorfológica e confirmação diagnóstica das leucemias agudas pela identificação de infiltração por mais de 20% de blastos.",
    "commentary": "Comentários sobre a resposta correta:\n(B) A tríade clínica (febre, manifestações hemorrágicas por plaquetopenia, palidez por anemia) associada a leucocitose com presença de células imaturas (blastos) no sangue periférico indica fortemente um quadro de leucemia aguda. O mielograma é o exame inicial confirmatório padrão ouro, complementado pela imunofenotipagem para definição de linhagem mieloide ou linfoide.\n\nComentários sobre os distratores:\n(A) A dosagem de ferritina avalia as reservas orgânicas de ferro e não possui utilidade em diagnóstico de distúrbios linfoproliferativos agudos.\n(C) A biópsia de linfonodo é diagnóstica para linfomas, mas não deve atrasar a realização de mielograma diante de infiltração medular com pancitopenia periférica evidente.\n(D) A eletroforese de hemoglobina é indicada para identificação de hemoglobinopatias hereditárias (como anemia falciforme), sem relevância diagnóstica em suspeitas de leucemia.",
    "reference": "World Health Organization Classification of Tumours of Haematopoietic and Lymphoid Tissues. | Hoffbrand’s Essential Haematology, 8th edition, Wiley-Blackwell, 2020.",
    "tags": [
      "hematologia",
      "oncologia"
    ]
  },
  {
    "id": "tp2022-65",
    "topography": "16",
    "topic": "Pré-operatório",
    "module": "Cirurgia",
    "text": "Mulher, 30 anos, apresenta cefaleia pós-raquianestesia. Qual a conduta inicial recomendada?",
    "options": [
      "(A) Blood-patch imediato em enfermaria.",
      "(B) Blood-patch contraindicado pela idade.",
      "(C) Repouso no leito e hidratação cristaloide generosa.",
      "(D) Blood-patch imediato em UTI."
    ],
    "correctAnswer": 2,
    "explanation": "A cefaleia pós-raquianestesia ocorre porque o líquor vaza pelo orifício da dura-máter, a pressão liquórica cai e as estruturas sensíveis à dor são tracionadas. É típica a piora ao sentar ou ficar de pé e a melhora ao deitar. Mulheres jovens, agulhas mais calibrosas e cortantes e várias tentativas de punção aumentam o risco.\n\nA maioria dos casos melhora em poucos dias, e o tratamento inicial é conservador: repouso conforme o conforto, hidratação, analgésicos comuns e cafeína. Se a dor for incapacitante ou não ceder, indica-se o tampão sanguíneo peridural (blood patch), feito por anestesiologista em ambiente adequado, com injeção de sangue autólogo no espaço peridural.",
    "commentary": "Blood patch imediato na enfermaria (A): não é a primeira medida, fica para casos refratários ou muito incapacitantes; e é feito por anestesiologista, com técnica asséptica e ambiente apropriado.\n\nContraindicado pela idade (B): a idade não contraindica o procedimento; ser jovem é, na verdade, fator de risco para a cefaleia.\n\nBlood patch imediato na UTI pelo intensivista (D): não é a conduta inicial, a cefaleia pós-raqui não exige UTI e o procedimento é do anestesiologista.",
    "tip": "Cefaleia pós-raqui (piora em pé, alivia deitado): conservador primeiro; refratária, blood patch peridural.",
    "reference": "Manica, James - Anestesiologia - 4ª Ed.",
    "tags": [
      "anestesiologia"
    ]
  },
  {
    "id": "tp2026-76",
    "module": "Cirurgia",
    "text": "Menino de 2 anos, nascido a termo e com desenvolvimento adequado para a idade, é levado à Unidade Básica de Saúde para consulta de puericultura. A mãe relata que, desde o nascimento, acha que o testículo direito não está presente no escroto. Ao exame físico, observa-se bolsa testicular direita hipodesenvolvida, sem testículo palpável. O testículo esquerdo encontra-se normal, em posição habitual. Qual é a conduta mais adequada neste momento?",
    "options": [
      "(A) Manter acompanhamento clínico até a puberdade, pois há possibilidade de descida espontânea tardia.",
      "(B) Encaminhar para avaliação cirúrgica para realização de orquidopexia.",
      "(C) Solicitar dosagem de testosterona, LH e FSH.",
      "(D) Iniciar tratamento hormonal com gonadotrofina coriônica humana (hCG)."
    ],
    "correctAnswer": 1,
    "explanation": "Para crianças com criptorquidia unilateral persistente após os 6 a 12 meses de idade, a conduta recomendada é o encaminhamento para cirurgia de orquidopexia, para prevenir infertilidade futura e reduzir o risco de malignização/torção.",
    "commentary": "A descida testicular espontânea raramente ocorre após os 6 meses de vida pós-natal. No menino de 2 anos com testículo direito persistentemente impalpável e hemi-escroto hipodesenvolvido (confirmando criptorquidia verdadeira), a cirurgia de orquidopexia eletiva deve ser programada de imediato (preferencialmente idealizada entre os 6 e 18 meses de vida). A correção precoce preserva a espermatogênese residual, facilita o acompanhamento para detecção precoce de malignização e previne torções ou hérnias associadas. Sobre os distratores: (A) Aguardar até a puberdade é incorreto e resulta em atrofia testicular irreversível e esterilidade. (C) Dosagens hormonais não são necessárias rotineiramente para criptorquidia unilateral em paciente hígido. (D) O tratamento clínico com hCG tem baixíssima taxa de eficácia a longo prazo e não é indicado como primeira linha.",
    "reference": "American Urological Association Guidelines. ASHCRAFT, Keith W.; HOLCOMB, George W.; MURPHY, J. Patrick. Pediatric Surgery. 7. ed. Philadelphia: Elsevier, 2020.",
    "tags": [
      "pediatria",
      "cirurgia pediátrica",
      "criptorquidia"
    ]
  },
  {
    "id": "tp2022-82",
    "topography": "5.1",
    "topic": "Câncer de colo uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 32 anos, nuligesta, resultado de citologia oncótica: ASC-US (células escamosas atípicas de significado indeterminado). Conduta preconizada pelo Ministério da Saúde:",
    "options": [
      "(A) Repetir a colpocitologia em 6 meses.",
      "(B) Repetir a colpocitologia em 12 meses.",
      "(C) Fazer a colposcopia em 18 meses.",
      "(D) Colposcopia com biópsia dirigida."
    ],
    "correctAnswer": 0,
    "explanation": "ASC-US (atipias de células escamosas de significado indeterminado) é a alteração citológica mais frequente e, na maioria das vezes, corresponde a alterações transitórias ou lesões de baixo grau que regridem sozinhas. Só uma pequena parte esconde lesão de alto grau.\n\nPor isso, nas diretrizes brasileiras de rastreamento citológico (INCA/Ministério da Saúde), a conduta para mulheres de 30 anos ou mais com ASC-US é repetir a citologia em 6 meses. Se a repetição vier normal, faz-se outra em 6 meses e, com dois exames normais, ela volta ao rastreamento de rotina. Se a alteração persistir (ASC-US ou mais grave), encaminha-se para colposcopia. Entre 25 e 29 anos, o intervalo de repetição é de 12 meses.",
    "commentary": "Repetir em 12 meses (B): é o intervalo indicado para mulheres de 25 a 29 anos com ASC-US; esta paciente tem 32 anos.\n\nColposcopia em 18 meses (C): esse intervalo não existe nas diretrizes; a colposcopia é feita quando a atipia persiste na repetição, sem esperar tanto.\n\nColposcopia com biópsia de imediato (D): é a conduta para atipias mais suspeitas (ASC-H, lesão de alto grau, AGC); para um único ASC-US seria excesso de intervenção.",
    "tip": "ASC-US: 30 anos ou mais repete em 6 meses; 25 a 29 anos repete em 12 meses. Persistiu, colposcopia.",
    "reference": "Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero, INCA 2016.",
    "tags": [
      "ginecologia geral",
      "rastreamento"
    ]
  },
  {
    "id": "tp2021-95",
    "topography": "5.1",
    "topic": "Sangramento uterino anormal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Menina de 17 anos de idade vem acompanhada pela mãe para o ambulatório de ginecologia com queixa de nunca ter menstruado. A paciente não apresenta outras queixas. Nega doenças crônicas e uso de medicamentos. Ao exame: estatura = 1,47 m, mamas em estágio M1 e pelos pubianos em P1 (classificação de Tanner). Traz exames laboratoriais que mostram níveis muito elevados de FSH. O diagnóstico e conduta são:",
    "options": [
      "(A) Disgenesia gonadal – cariótipo.",
      "(B) Atraso puberal fisiológico – teste do progestogênio",
      "(C) Agenesia uterovaginal – ultrassonografia pélvica.",
      "(D) Hipogonadismo hipogonadotrófico – dosagem de prolactina e TSH."
    ],
    "correctAnswer": 0,
    "explanation": "A paciente apresenta amenorreia primária (ausência de menarca em menina com 15 anos ou mais) associada a infantilismo sexual completo de mamas e de pelos (estágio Tanner M1P1) com baixa estatura (1,47 m). A concomitância desses fatores com gonadotrofinas elevadas (FSH alto) ratifica o diagnóstico de hipogonadismo hipergonadotrófico secundário a falência ovariana (disgenesia gonadal), cuja conduta inicial indispensável é a solicitação do cariótipo.",
    "commentary": "Amenorreia primária sem desenvolvimento mamário aponta para disfunção do eixo gonadotrófico. O achado de FSH aumentado ratifica que o defeito situa-se diretamente nas gônadas (ovários estéreis resistentes/disgenéticos, sem secreção de estrogênios para Telarca, e eliminando o feedback negativo no hipotálamo/hipófise), configurando falência gonadal prematura hereditária ou disgenesia gonadal (ex: Síndrome de Turner, cariótipo 45,X). O cariótipo é o exame padrão decisivo para identificar cromossomopatias associadas. Na agenese uterovaginal (Rokitansky), os hormônios e caracteres Tanner (mamas) são plenamente normais e de desenvolvimento típico.",
    "reference": "Tratado de Ginecologia FEBRASGO / editores Cesar Eduardo Fernandes, Marcos Felipe Silva de Sá; coordenação Agnaldo Lopes da Silva Filho ...[et al.]. - 1. ed. - Rio de Janeiro : Elsevier, 2019. p. 496.",
    "tags": [
      "amenorreia primária",
      "disgenesia gonadal",
      "ginecologia infanto-puberal"
    ]
  },
  {
    "id": "tp2023-106",
    "topography": "15",
    "topic": "Estudos epidemiológicos",
    "module": "Saúde Coletiva",
    "text": "Os estudos epidemiológicos podem se diferenciar em relação à unidade de análise (individual ou agregado), posicionamento do investigador (observacional ou de intervenção) e dimensão temporal (instantâneo/corte ou serial/longitudinal). Em relação aos tipos de estudos, assinale a alternativa correta seguindo, respectivamente, a sequência descrita no enunciado:",
    "options": [
      "(A) Estudos caso-controle: agregado; de intervenção; longitudinal.",
      "(B) Ensaios clínicos: individual; de intervenção; longitudinal.",
      "(C) Estudos transversais: agregado; observacional; longitudinal.",
      "(D) Estudos de coorte: individual; observacional; instantâneo."
    ],
    "correctAnswer": 1,
    "explanation": "No ensaio clínico, o pesquisador decide quem recebe a intervenção (estudo de intervenção ou experimental), analisa dados de cada participante (unidade individual) e acompanha os grupos ao longo do tempo até o desfecho (longitudinal). Por isso a alternativa B é a única com as três classificações corretas.\n\nVale fixar o quadro: ecológico é o desenho de unidade agregada; transversal é instantâneo; coorte, caso-controle e ensaio clínico envolvem a dimensão temporal; e só os ensaios são de intervenção.",
    "commentary": "Caso-controle (A): usa dados individuais e é observacional, pois o pesquisador não atribui a exposição; não é agregado nem de intervenção.\n\nTransversal (C): é individual e observacional, mas instantâneo, já que exposição e desfecho são medidos no mesmo momento; não é longitudinal nem agregado.\n\nCoorte (D): é individual e observacional, mas longitudinal, pois acompanha expostos e não expostos ao longo do tempo até o desfecho.",
    "tip": "Ensaio clínico = individual + intervenção + longitudinal. Ecológico é o agregado; transversal é o instantâneo.",
    "reference": "MEDRONHO, R.A (ed) Epidemiologia. 2 ed. São Paulo: Atheneu, 2011.",
    "tags": [
      "epidemiologia",
      "bioestatística"
    ]
  },
  {
    "id": "tp2026-104",
    "topography": "13",
    "topic": "Risco de suicídio",
    "module": "Saúde Coletiva",
    "text": "Mulher de 32 anos procura a UBS com tristeza persistente, insônia e desesperança há dois meses. Durante a consulta, relata que “às vezes pensa que seria melhor não acordar”. Qual é a conduta no contexto da Atenção Primária com foco na promoção e prevenção em saúde?",
    "options": [
      "(A) Prescrever antidepressivo, orientar retorno programado e aguardar resposta clínica inicial ao tratamento.",
      "(B) Realizar avaliação estruturada do risco, fortalecer vínculo e organizar plano de cuidado na UBS.",
      "(C) Encaminhar ao CAPS para seguimento especializado e suspender acompanhamento na UBS.",
      "(D) Orientar medidas de autocuidado, incentivar rede de apoio e agendar reavaliação em longo prazo."
    ],
    "correctAnswer": 1,
    "explanation": "A paciente tem sintomas depressivos há dois meses e relata ideação de morte passiva (seria melhor não acordar). Toda menção a pensamentos de morte deve ser investigada de forma direta e estruturada: frequência, intenção, plano, acesso a meios, tentativas anteriores, fatores de proteção e rede de apoio. Perguntar sobre suicídio não aumenta o risco.\n\nCom o risco estimado, a equipe da UBS monta um plano de cuidado e de segurança, mantém o vínculo e o acompanhamento próximo e trata a depressão. Se o risco for alto, aciona-se o CAPS ou a urgência, sem que a APS deixe de acompanhar a paciente.",
    "commentary": "Prescrever antidepressivo e aguardar (A): o tratamento medicamentoso pode ser necessário, mas antes é preciso estimar o risco de suicídio; além disso, o efeito do antidepressivo demora semanas.\n\nEncaminhar ao CAPS e suspender o acompanhamento (C): o encaminhamento, quando indicado, é compartilhado; a UBS continua responsável pelo cuidado.\n\nAutocuidado e retorno distante (D): é insuficiente diante de ideação de morte; o seguimento precisa ser próximo e com avaliação de risco.",
    "tip": "Ideação de morte na APS: pergunte diretamente, estime o risco, faça plano de segurança e mantenha o vínculo.",
    "reference": "Ministério da Saúde. Prevenção do Suicídio: Manual dirigido a profissionais da APS.",
    "tags": [
      "saúde mental",
      "prevenção do suicídio",
      "acolhimento"
    ]
  },
  {
    "id": "tp2021-4",
    "module": "Ciências Básicas",
    "text": "Paciente foi submetida a tratamento cirúrgico de câncer de mama e apresentou uma complicação denominada “escápula alada”, resultante de lesão do nervo:",
    "options": [
      "(A) Toracodorsal.",
      "(B) Peitoral medial.",
      "(C) Torácico longo.",
      "(D) Peitoral lateral."
    ],
    "correctAnswer": 2,
    "explanation": "A complicação de \"escápula alada\" resulta da lesão do nervo torácico longo (que inerva o músculo serrátil anterior), frequentemente decorrente de dissecção axilar na mastectomia.",
    "commentary": "Durante a mastectomia com linfadenectomia axilar, o nervo torácico longo (nervo de Bell) pode ser lesionado pelo curso anatômico rente à parede lateral do tórax. Sua lesão suspende o suprimento motor ao serrátil anterior, músculo responsável por ancorar a borda medial da escápula contra a parede torácica posterior.",
    "reference": "MOORE, K. et al. Anatomia orientada para a clínica. 8. ed. São Paulo: Guanabara Koogan, 2019. ROHEN, J. et al. Anatomy: A photographic atlas. 8th ed. Philidelphia: Schattauer, 2016.",
    "tags": [
      "anatomia",
      "ginecologia",
      "cirurgia"
    ]
  },
  {
    "id": "enamed-2025-34",
    "topography": "15",
    "topic": "Testes diagnósticos",
    "module": "Saúde Coletiva",
    "text": "Uma instituição de saúde está pesquisando um novo teste de triagem para hanseníase, com sensibilidade de 92% e especificidade de 65%, aplicado em uma população com baixa prevalência da doença.\n\nNesse contexto, é correto afirmar que",
    "options": [
      "(A) quase todos os testes positivos indicarão verdadeiros casos de hanseníase, diante da elevada sensibilidade do teste.",
      "(B) o número de falsos-positivos será elevado, devido à baixa especificidade do teste e à baixa prevalência da doença.",
      "(C) o número de falsos-negativos será elevado, reduzindo a capacidade do teste em detectar casos reais.",
      "(D) a elevada sensibilidade do teste o torna ideal para a confirmação do diagnóstico de hanseníase."
    ],
    "correctAnswer": 1,
    "explanation": "A baixa especificidade de um teste (65%) gera uma proporção considerável de falsos-positivos. Ao aplicar este teste em uma população de baixa prevalência, onde a imensa maioria dos indivíduos é saudável, o número absoluto de pessoas saudáveis testadas falso-positivas será extremamente elevado em relação aos verdadeiros positivos, reduzindo drasticamente o Valor Preditivo Positivo (VPP).",
    "commentary": "A alta sensibilidade minimiza os falsos-negativos (portanto, a C está incorreta). Testes de alta sensibilidade são ideais para triagem (screening), mas não para confirmação diagnóstica, que exige alta especificidade para evitar iatrogenias e diagnósticos incorretos (o que invalida a D).",
    "reference": "Medicina Preventiva e Epidemiologia Clínica / Fletcher",
    "tags": [
      "saúde coletiva",
      "epidemiologia",
      "bioestatística",
      "testes diagnósticos"
    ]
  },
  {
    "id": "enamed-2026-61",
    "topography": "5.1",
    "topic": "Câncer de colo uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma paciente de 46 anos, sem comorbidades e assintomática, procura Unidade Básica de Saúde para mostrar resultado de exame realizado para prevenção do câncer de colo uterino: teste de DNA-HPV oncogênico positivo para HPV 51. Informa ter realizado citologia oncótica há 1 ano, sem alterações.\n\nQual é a conduta inicial indicada nesse caso?",
    "options": [
      "(A) Repetir o teste de DNA-HPV oncogênico.",
      "(B) Solicitar citologia reflexa.",
      "(C) Encaminhar para colposcopia.",
      "(D) Indicar vacina contra o HPV."
    ],
    "correctAnswer": 1,
    "explanation": "Pela nova diretriz de rastreamento com teste DNA-HPV oncogênico: positivo para HPV 16 e/ou 18 → colposcopia direta; positivo para outros tipos oncogênicos (como o 51) → citologia reflexa (no mesmo material).\n\nSe a citologia reflexa for normal, repete-se o teste DNA-HPV em 1 ano; se alterada, encaminha-se para colposcopia.",
    "commentary": "Repetir o DNA-HPV é a conduta após citologia reflexa negativa. A colposcopia direta é para HPV 16/18. A vacina não trata infecção existente. (Gabarito preliminar do INEP.)",
    "reference": "INCA/Ministério da Saúde. Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero — Parte I: rastreamento organizado com DNA-HPV, 2024",
    "tags": [
      "ginecologia",
      "rastreamento",
      "câncer de colo uterino"
    ]
  },
  {
    "id": "unifesp2025-56",
    "topography": "15",
    "topic": "Rastreamento",
    "module": "Saúde Coletiva",
    "text": "A Força Tarefa Americana para Serviços Preventivos (US Preventive Service Task Force) atualizou sua recomendação para rastreamento de câncer de mama em mulheres, sugerindo mamografias bienais a partir dos 40 anos de idade, ao invés dos 50 anos de idade.\n\nConsiderando que a prevalência de câncer de mama é menor em mulheres jovens, qual é o impacto esperado desta nova Recomendação na performance do teste diagnóstico?",
    "options": [
      "(A) A sensibilidade da mamografia será maior.",
      "(B) A especificidade da mamografia será menor.",
      "(C) O valor preditivo positivo da mamografia será menor.",
      "(D) A razão de verossimilhança positiva será menor."
    ],
    "correctAnswer": 2,
    "explanation": "Sensibilidade e especificidade são propriedades do teste e, em princípio, não variam com a prevalência. Já os valores preditivos dependem da prevalência da doença na população testada.\n\nAo incluir mulheres de 40 a 49 anos, em quem o câncer de mama é menos prevalente, a probabilidade de um exame positivo ser verdadeiramente câncer diminui. O valor preditivo positivo será menor, com mais falso-positivos, biópsias e ansiedade.",
    "commentary": "Sensibilidade maior (A): não depende da prevalência; na prática, a mama mais densa das jovens até reduz a sensibilidade da mamografia.\n\nEspecificidade menor (B): propriedade intrínseca do teste, não afetada pela prevalência.\n\nRazão de verossimilhança positiva menor (D): derivada de sensibilidade e especificidade, também independe da prevalência.",
    "reference": "USPSTF Breast Cancer Screening (2024) / Fletcher — Epidemiologia Clínica",
    "tags": [
      "epidemiologia",
      "rastreamento",
      "câncer de mama",
      "valor preditivo positivo"
    ]
  },
  {
    "id": "hosbos2027-53",
    "topography": "5.2",
    "topic": "Diabetes gestacional",
    "module": "Ginecologia e Obstetrícia",
    "text": "R.D.S., 30 anos, primigesta, idade gestacional de 12 semanas, vem em segunda consulta de pré natal com resultado de glicemia de jejum de 94 mg/dL.\n\nDe acordo com o resultado de glicemia, assinale a alternativa correta.",
    "options": [
      "(A) Deve-se solicitar o TOTG (teste oral de tolerância à glicose) com idade gestacional entre 24-28 semanas.",
      "(B) Trata-se de diabetes gestacional.",
      "(C) Trata-se de overt diabetes.",
      "(D) Deve-se solicitar a hemoglobina glicada para diagnóstico.",
      "(E) Deve-se introduzir insulina para controle glicêmico."
    ],
    "correctAnswer": 1,
    "explanation": "No protocolo brasileiro (OPAS/MS/Febrasgo/SBD, 2017), a glicemia de jejum colhida na primeira consulta (antes de 20 semanas) entre 92 e 125 mg/dL já define diabetes mellitus gestacional, sem necessidade de TOTG.\n\nCom 94 mg/dL, o diagnóstico é DMG. A conduta inicial é orientação nutricional, atividade física e automonitorização da glicemia.",
    "commentary": "TOTG com 24–28 semanas (A): reservado a quem tem jejum inicial < 92 mg/dL.\n\nOvert diabetes (C): exige jejum ≥ 126 mg/dL, HbA1c ≥ 6,5% ou glicemia aleatória ≥ 200 mg/dL.\n\nHbA1c para diagnóstico (D): não é usada para diagnosticar DMG.\n\nInsulina já (E): a primeira linha é dieta e atividade física; a insulina entra se a meta não for atingida.",
    "reference": "Rastreamento e diagnóstico de diabetes mellitus gestacional no Brasil — OPAS/MS/Febrasgo/SBD, 2017",
    "tags": [
      "obstetrícia",
      "diabetes mellitus gestacional",
      "pré-natal",
      "glicemia de jejum"
    ]
  },
  {
    "id": "hosbos2025-52",
    "topography": "5.1",
    "topic": "Climatério e menopausa",
    "module": "Ginecologia e Obstetrícia",
    "text": "E.T.O., 53 anos, vem à consulta ambulatorial referindo fogachos intensos, irritabilidade, insônia e falha de memória. Hipertensão crônica controlada, em uso de IECA. IMC 30 kg/m². Hipercolesterolemia. Sem outras comorbidades. Nega alteração de libido. Histerectomia anterior por miomatose uterina. De acordo com o caso, assinale a alternativa que apresenta o tratamento correto.",
    "options": [
      "(A) Estrogênio e progesterona via oral.",
      "(B) Estrogênio, progesterona e testosterona via transdérmica.",
      "(C) Estrogênio e testosterona via transdérmica.",
      "(D) Estrogênio via transdérmica.",
      "(E) Cloridrato de desvenlafaxina via oral."
    ],
    "correctAnswer": 3,
    "explanation": "Mulher histerectomizada não precisa de progestagênio (ele serve só para proteger o endométrio), então a terapia hormonal é com estrogênio isolado.\n\nPela obesidade, hipertensão e dislipidemia, prefere-se a via transdérmica, que evita a primeira passagem hepática, tem menor risco de tromboembolismo e efeito neutro sobre triglicérides e pressão.",
    "commentary": "Estrogênio + progesterona oral (A): progesterona desnecessária sem útero; a via oral é pior para quem tem risco cardiovascular.\n\nCom testosterona (B e C): testosterona é indicada apenas no transtorno do desejo sexual hipoativo; a paciente nega alteração da libido.\n\nDesvenlafaxina (E): alternativa não hormonal quando há contraindicação à terapia hormonal, o que não é o caso.",
    "reference": "Consenso Brasileiro de Terapêutica Hormonal da Menopausa (SOBRAC, 2018) / The 2022 Hormone Therapy Position Statement (NAMS)",
    "tags": [
      "climatério",
      "terapia hormonal",
      "estrogênio transdérmico",
      "histerectomia"
    ]
  },
  {
    "id": "scmbh2026-24",
    "topography": "4.1",
    "topic": "Cistite",
    "module": "Clínica Médica",
    "text": "Idosa de 68 anos, acamada por sequelas de AVC isquêmico, faz uso de sonda vesical há três semanas. A equipe de enfermagem relata sonolência, porém sem alteração importante do basal da paciente. Nega febre, dor lombar ou sintomas urinários. Exame físico: PA 128x76 mmHg, FC 84 bpm, SatO₂ 96%, afebril. Abdome flácido, bexiga não palpável. Exame de urina: leveduras ao microscópio; urocultura com 10⁵ UFC/mL de Candida albicans.\n\nQual a conduta MAIS adequada?",
    "options": [
      "(A) Iniciar fluconazol 200 mg ao dia por 14 dias.",
      "(B) Não tratar, manter a sonda.",
      "(C) Não tratar, apenas trocar ou retirar a sonda.",
      "(D) Caspofungina 70/50 mg por 14 dias."
    ],
    "correctAnswer": 2,
    "explanation": "Candidúria assintomática em paciente com sonda vesical de demora, sem febre nem sinais de infecção (a sonolência é basal).\n\nCandidúria assintomática não deve ser tratada, exceto em neutropênicos, recém-nascidos de baixo peso ou antes de procedimento urológico. A medida recomendada é remover ou trocar a sonda, o que resolve a maioria dos casos.",
    "commentary": "Fluconazol (A): sem indicação na candidúria assintomática.\n\nNão tratar e manter a sonda (B): a sonda é o fator de manutenção; deve ser retirada ou trocada.\n\nCaspofungina (D): equinocandinas têm baixa concentração urinária e não estão indicadas.",
    "reference": "IDSA — Clinical Practice Guideline for the Management of Candidiasis (2016)",
    "tags": [
      "infectologia",
      "candidúria",
      "sonda vesical",
      "infecção urinária"
    ]
  },
  {
    "id": "revalida-2025-1-28",
    "topography": "11",
    "topic": "Bronquiolite",
    "module": "Pediatria",
    "text": "Menino de cinco meses é levado para consulta de rotina. Nasceu com idade gestacional de 28 semanas, com boa evolução na internação e recebeu alta para acompanhamento ambulatorial. O bebê está bem, mas teve um episódio de infecção respiratória leve. A família está preocupada com eventuais complicações que o bebê possa ter, uma vez que o inverno está chegando e os pais querem proteger a criança. Nessa situação, a conduta médica mais adequada é indicar a",
    "options": [
      "(A) administração da vacina anti-influenza de imediato e a restrição de visitas.",
      "(B) administração de palivizumabe e orientar os cuidados essenciais de prevenção.",
      "(C) manutenção do calendário vacinal atualizado e o encaminhamento do bebê para a infectologia infantil.",
      "(D) manutenção do calendário vacinal atualizado e a administração de omalizumabe em caso de infecções."
    ],
    "correctAnswer": 1,
    "explanation": "Prematuro de 28 semanas com 5 meses na sazonalidade do vírus sincicial respiratório: tem indicação de palivizumabe (anticorpo monoclonal anti-VSR), que no SUS é indicado para prematuros ≤ 28 semanas até 1 ano de idade e para cardiopatas e pneumopatas crônicos até 2 anos. Associam-se cuidados como higiene das mãos, evitar aglomerações e fumaça e manter aleitamento.",
    "commentary": "Vacina da influenza de imediato (A): está indicada a partir dos 6 meses; a restrição de visitas isolada não basta.\n\nEncaminhar à infectologia (C): desnecessário; falta a imunoprofilaxia para VSR.\n\nOmalizumabe (D): é anti-IgE para asma alérgica grave, sem papel aqui.",
    "reference": "Ministério da Saúde — Protocolo de uso do palivizumabe / SBP",
    "tags": [
      "pediatria",
      "prematuridade",
      "vírus sincicial respiratório",
      "palivizumabe"
    ],
    "tip": "Palivizumabe: prematuro ≤ 28 sem até 1 ano; cardiopata/pneumopata até 2 anos."
  },
  {
    "id": "iog2026-41",
    "topography": "15",
    "topic": "Testes diagnósticos",
    "module": "Saúde Coletiva",
    "text": "Considere um determinado teste diagnóstico de uma infecção sendo utilizado em uma cidade onde sua prevalência é 10%. O que se espera dos valores preditivos positivo (VPP), negativo (VPN) e da especificidade (E) deste teste, se ele for aplicado em outra cidade onde a prevalência da infecção é 20%?",
    "options": [
      "Aumentará; diminuirá; será mantida.",
      "Diminuirá; aumentará; aumentará.",
      "Diminuirá; aumentará; será mantida.",
      "Aumentará; aumentará; diminuirá."
    ],
    "correctAnswer": 0,
    "explanation": "Sensibilidade e especificidade são propriedades do teste e não mudam com a prevalência. Já os valores preditivos dependem dela: quando a prevalência sobe (de 10% para 20%), o VPP aumenta (um positivo tem mais chance de ser verdadeiro) e o VPN diminui (um negativo tem mais chance de ser falso).\n\nResposta: VPP aumenta, VPN diminui, especificidade mantida.",
    "commentary": "B: o VPP não diminui e a especificidade não aumenta com a prevalência.\n\nC: inverte o comportamento do VPP e do VPN.\n\nD: o VPN não aumenta, e a especificidade não muda.",
    "reference": "Fletcher — Epidemiologia Clínica / Medronho — Epidemiologia",
    "tags": [
      "epidemiologia clínica",
      "testes diagnósticos",
      "valor preditivo",
      "prevalência"
    ],
    "tip": "Prevalência ↑ → VPP ↑ e VPN ↓. Sensibilidade e especificidade não mudam."
  },
  {
    "id": "sespe2026-96",
    "topography": "15",
    "module": "Saúde Coletiva",
    "text": "O Sistema de Informações Hospitalares do SUS (SIH/SUS) é um sistema, cujo principal instrumento é a Autorização de Internação Hospitalar (AIH).\n\nSobre esse sistema, é CORRETO afirmar que",
    "options": [
      "é o sistema responsável por registrar os atendimentos de urgência e emergência realizados nas unidades de saúde do país.",
      "sua principal finalidade é o controle e pagamento das internações hospitalares financiadas pelo SUS.",
      "sua base de dados contém informações detalhadas sobre o histórico médico de todos os usuários.",
      "é utilizado pelos hospitais para notificar as doenças e agravos de notificação compulsória.",
      "Nenhuma das alternativas."
    ],
    "correctAnswer": 1,
    "explanation": "O SIH/SUS, cujo documento base é a AIH, foi criado com finalidade administrativa: controle e pagamento das internações hospitalares financiadas pelo SUS. Apesar disso, é muito usado como fonte de dados de morbidade hospitalar.",
    "commentary": "Atendimentos de urgência (A): ambulatoriais e de urgência são registrados no SIA/SUS e no e-SUS.\n\nHistórico médico de todos os usuários (C): o SIH registra internações financiadas pelo SUS, não o prontuário completo.\n\nNotificar doenças (D): a notificação é feita no SINAN.\n\nNenhuma (E): a alternativa B está correta.",
    "reference": "Ministério da Saúde — DATASUS: Sistemas de informação em saúde",
    "tags": [
      "sistemas de informação em saúde",
      "SIH/SUS",
      "AIH",
      "DATASUS"
    ],
    "tip": "SIH/AIH = pagamento de internações. SINAN = notificação. SIM = óbitos. SINASC = nascidos vivos."
  },
  {
    "id": "hpp2026-76",
    "topography": "14",
    "topic": "Emergências obstétricas",
    "module": "Ginecologia e Obstetrícia",
    "text": "São situações clínicas de urgência/emergência obstétrica que devem ser avaliadas em contexto hospitalar de acordo com o Manual de Gestação de Alto Risco 2022:",
    "options": [
      "Vômitos incoercíveis não responsivos ao tratamento e anemia grave (Hb <8,5 g/dl).",
      "Prurido gestacional e Suspeita de pielonefrite.",
      "Idade gestacional de 40 semanas ou mais e sinais premonitórios de eclâmpsia.",
      "Crise hipertensiva e suspeita de trombose venosa superficial."
    ],
    "correctAnswer": 1,
    "explanation": "O Manual de Gestação de Alto Risco (2022) lista as situações que exigem avaliação hospitalar de urgência. Entre elas estão o prurido gestacional (suspeita de colestase intra-hepática, com risco de óbito fetal) e a suspeita de pielonefrite (risco de sepse e de trabalho de parto prematuro, exigindo antibiótico venoso).\n\nAs duas condições da alternativa B estão na lista.",
    "commentary": "Anemia com Hb < 8,5 g/dL (A): a anemia grave que exige avaliação hospitalar é Hb < 7 g/dL (ou sintomática).\n\nIdade gestacional de 40 semanas (C): o critério é IG ≥ 41 semanas.\n\nTrombose venosa superficial (D): o critério é a suspeita de trombose venosa profunda.",
    "reference": "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "tags": [
      "urgências obstétricas",
      "colestase gestacional",
      "pielonefrite na gestação"
    ],
    "tip": "Alto risco 2022: prurido, pielonefrite, Hb < 7, IG ≥ 41 sem, suspeita de TVP → hospital."
  },
  {
    "id": "famema2025-14",
    "topography": "2.2",
    "topic": "Insuficiência cardíaca",
    "module": "Clínica Médica",
    "text": "Paciente com quadro de descompensação da insuficiência cardíaca tem como causa desta a seguinte distribuição:",
    "options": [
      "10%, aproximadamente, por aparecimento de quadro infeccioso de qualquer natureza.",
      "20%, aproximadamente, por aumento na ingesta de água e sal.",
      "29%, aproximadamente, por má aderência ao tratamento.",
      "30%, aproximadamente, por desenvolvimento de arritmia cardíaca."
    ],
    "correctAnswer": 2,
    "explanation": "No registro brasileiro de insuficiência cardíaca descompensada (BREATHE), a principal causa de descompensação foi a má adesão ao tratamento medicamentoso, em cerca de 30% dos casos. Em seguida vieram infecções (cerca de 23%), excessos de sal e água e arritmias.\n\nO dado reforça o papel da educação do paciente e do seguimento próximo na prevenção de internações.",
    "commentary": "10% por infecção (A): as infecções responderam por cerca de um quinto a um quarto das descompensações, não 10%.\n\n20% por sal e água (B): a transgressão dietética aparece com frequência menor.\n\n30% por arritmia (D): arritmias, como a fibrilação atrial, ficam bem abaixo da má adesão.",
    "tip": "Causa nº 1 de descompensação de IC no Brasil: má adesão ao tratamento (~30%); depois, infecção.",
    "reference": "Albuquerque DC et al. I Registro Brasileiro de Insuficiência Cardíaca (BREATHE). Arq Bras Cardiol, 2015. Diretriz Brasileira de Insuficiência Cardíaca Crônica e Aguda (SBC), 2018.",
    "tags": [
      "insuficiência cardíaca descompensada",
      "adesão ao tratamento",
      "BREATHE"
    ]
  },
  {
    "id": "famema2026-17",
    "topography": "16",
    "topic": "Apendicite aguda",
    "module": "Cirurgia",
    "text": "Homem, 24 anos, previamente saudável, refere dor periumbilical há 12 horas que migrou para fossa ilíaca direita, acompanhada de anorexia, náuseas e febre (37,8 °C). À inspeção: dor à palpação e defesa localizada em FID, sinal de Blumberg positivo. Leucócitos 18.500/mm³ com desvio à esquerda; PCR levemente elevada.\n\nQual é a conduta mais adequada nesse cenário?",
    "options": [
      "Internar, analgesia e observar 48 horas antes de decidir cirurgia.",
      "Solicitar TC abdominopélvico com contraste e operar somente se confirmado por imagem.",
      "Realizar apendicectomia laparoscópica sem necessidade de exame de imagem adicional.",
      "Iniciar antibioticoterapia e programar apendicectomia eletiva em 2 – 4 semanas."
    ],
    "correctAnswer": 2,
    "explanation": "Homem jovem com dor periumbilical que migrou para a fossa ilíaca direita, anorexia, náuseas, febre, defesa e Blumberg positivo, com leucocitose e desvio: quadro clássico de apendicite aguda (escore de Alvarado alto, cerca de 9). Com diagnóstico clínico claro, não é preciso exame de imagem; a conduta é apendicectomia, de preferência laparoscópica, com antibiótico profilático.\n\nImagem fica para casos duvidosos, mulheres em idade fértil, idosos, crianças e suspeita de complicação.",
    "commentary": "Observar 48 horas (A): atrasar a cirurgia aumenta o risco de perfuração.\n\nTC obrigatória (B): em homem jovem com quadro típico, a TC apenas atrasa a cirurgia e expõe a radiação.\n\nAntibiótico e apendicectomia de intervalo (D): a cirurgia tardia é para plastrão ou abscesso; na apendicite não complicada a opção não operatória com antibiótico existe, mas com recidiva alta e não com cirurgia programada em 2–4 semanas.",
    "tip": "Apendicite com quadro típico em homem jovem (Alvarado ≥ 7): cirurgia sem necessidade de imagem.",
    "reference": "Di Saverio S et al. Diagnosis and treatment of acute appendicitis: 2020 update of the WSES Jerusalem guidelines. World J Emerg Surg, 2020.",
    "tags": [
      "apendicite aguda",
      "escore de Alvarado",
      "apendicectomia laparoscópica"
    ]
  },
  {
    "id": "famerp2025-28",
    "topography": "5.1",
    "topic": "Câncer de colo uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Jovem de 18 anos, G=0, com sinusiorragia, procura UBS onde foi submetida à coleta de citologia oncótica e colposcopia que revelou lesão aceto-branca em lábio anterior do colo do útero. Foi submetida à biópsia com resultado anátomo-patológico de Lesão Intraepitelial de Alto Grau (NIC-III).\n\nQual a alternativa correta nesta jovem, de acordo com as Diretrizes Brasileiras para Rastreamento de Câncer do Colo Uterino, 2016?",
    "options": [
      "Histerectomia Total",
      "Histerectomia ampliada com esvaziamento linfonodal ilíaco",
      "Seguimento semestral com citologia oncótica e colposcopia por 2 anos",
      "Conização do colo do útero (excisão da Zona de Transformação tipo 3)"
    ],
    "correctAnswer": 2,
    "explanation": "Mulher de 18 anos com NIC III na biópsia. Pelas Diretrizes Brasileiras de 2016, em mulheres até 24 anos as lesões de alto grau regridem com frequência e o tratamento excisional aumenta o risco de parto prematuro futuro. Por isso, a conduta preferencial é o seguimento citológico e colposcópico semestral por 2 anos; o tratamento excisional fica para persistência ou progressão, para suspeita de invasão, ou se a JEC não for visível.\n\nO gabarito adotou essa conduta conservadora.",
    "commentary": "Histerectomia total (A): não é tratamento de NIC, sobretudo numa nuligesta de 18 anos.\n\nHisterectomia ampliada com linfadenectomia (B): é cirurgia para câncer invasor, não para lesão precursora.\n\nConização (EZT tipo 3) (D): é o tratamento da NIC III na mulher ≥ 25 anos; nas jovens só entra se a lesão persistir, piorar ou houver suspeita de invasão.",
    "alert": "Questão com nuance: as Diretrizes de 2016 recomendam seguimento para NIC II em mulheres até 24 anos e permitem seguimento ou tratamento para NIC III. O gabarito oficial considerou o seguimento semestral (C).",
    "tip": "Até 24 anos com lesão de alto grau: preferir seguimento semestral por 2 anos; excisar se persistir ou progredir.",
    "reference": "INCA. Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero, 2ª ed., 2016 — Situações especiais: mulheres até 24 anos.",
    "tags": [
      "NIC III",
      "lesão intraepitelial de alto grau",
      "mulheres até 24 anos",
      "câncer de colo uterino"
    ]
  },
  {
    "id": "famerp2026-56",
    "topography": "1.5",
    "topic": "Nódulos tireoidianos",
    "module": "Clínica Médica",
    "text": "Paciente de 38 anos, gênero feminino, procura atendimento ambulatorial após realizar Ultrassom de tireoide feito pelo histórico familiar de carcinoma papilífero com evidência de nódulo tireoidiano de 0,9x0,7x0,6cm, em lobo esquerdo, TIRADS 5. Clinicamente está assintomática.\n\nQual deve ser a conduta correta neste momento?",
    "options": [
      "Cintilografia de tireoide",
      "PAAF guiada por US",
      "Dosagem de TSH",
      "Ultrassom anual"
    ],
    "correctAnswer": 3,
    "explanation": "Nódulo de 0,9 cm, TI-RADS 5 (altamente suspeito), em paciente assintomática. Pelo ACR TI-RADS, a PAAF no TR5 está indicada a partir de 1,0 cm; entre 0,5 e 0,9 cm, recomenda-se seguimento ultrassonográfico (anual, por até 5 anos). Por isso o gabarito escolheu o ultrassom anual.\n\nO histórico familiar de carcinoma papilífero aumenta o risco e, em algumas diretrizes, permite considerar PAAF em nódulos suspeitos menores, mas não muda a recomendação de base do TI-RADS. O TSH também faz parte da avaliação inicial de qualquer nódulo.",
    "commentary": "Cintilografia (A): só é indicada se o TSH estiver baixo (para identificar nódulo hiperfuncionante).\n\nPAAF (B): pelo ACR TI-RADS, no TR5 a punção é indicada a partir de 1 cm; abaixo disso, seguimento.\n\nDosagem de TSH (C): é feita na avaliação inicial de todo nódulo, mas não é a conduta que a questão pede para o nódulo TR5 subcentimétrico.",
    "alert": "Questão com nuance: o TSH deve ser dosado em todo nódulo, e o histórico familiar de câncer de tireoide é fator de risco que algumas diretrizes consideram para punção de nódulos suspeitos menores. O gabarito oficial é D (ultrassom anual pelo ACR TI-RADS).",
    "tip": "ACR TI-RADS PAAF: TR3 ≥ 2,5 cm; TR4 ≥ 1,5 cm; TR5 ≥ 1,0 cm. TR5 entre 0,5 e 0,9 cm = USG anual.",
    "reference": "Tessler FN et al. ACR Thyroid Imaging, Reporting and Data System (TI-RADS): White Paper. J Am Coll Radiol, 2017. Haugen BR et al. 2015 ATA Guidelines for thyroid nodules and differentiated thyroid cancer.",
    "tags": [
      "nódulo tireoidiano",
      "TI-RADS",
      "PAAF",
      "câncer de tireoide"
    ]
  },
  {
    "id": "amp2026-23",
    "topography": "5.2",
    "topic": "Infecções na gestação",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma gestante de 26 anos, G1P0, assintomática, realiza urocultura de rotina com 15 semanas de gestação, que detecta bacteriúria assintomática por Streptococcus agalactiae (10⁵ UFC/mL). A gestante não apresenta comorbidades e tem boa evolução pré-natal. Assinale a alternativa que considera a conduta atual e a implicação dessa infecção para o momento do parto.",
    "options": [
      "Tratar a bacteriúria e repetir urocultura mensalmente até o final da gestação.",
      "Tratar a bacteriúria e indicar antibioticoprofilaxia intraparto independente de cultura vaginal posterior.",
      "Tratar somente se houver sintomas urinários e considerar profilaxia intraparto se cultura vaginal for positiva.",
      "Não tratar a bacteriúria, pois a triagem para S. agalactiae deve ser feita apenas via cultura vaginal no 3º trimestre.",
      "Iniciar antibioticoterapia e solicitar cultura vaginal com 35 semanas para decidir sobre profilaxia intraparto."
    ],
    "correctAnswer": 1,
    "explanation": "Bacteriúria por Streptococcus agalactiae (estreptococo do grupo B) em qualquer momento da gestação deve ser tratada e indica colonização intensa. Essas gestantes recebem antibioticoprofilaxia intraparto para prevenir a sepse neonatal precoce, sem necessidade de cultura vaginal e retal com 35–37 semanas.",
    "commentary": "Repetir urocultura mensal (A): não muda a indicação de profilaxia intraparto, que já está estabelecida.\n\nTratar só se sintomática (C): a bacteriúria assintomática na gestação deve ser tratada.\n\nNão tratar (D): a bacteriúria é tratada e já define profilaxia; não depende da cultura vaginal.\n\nCultura vaginal com 35 semanas para decidir (E): desnecessária, pois a bacteriúria já indica profilaxia.",
    "reference": "ACOG Committee Opinion 797 (2020) / Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "tags": [
      "estreptococo do grupo B",
      "bacteriúria assintomática",
      "profilaxia intraparto"
    ],
    "tip": "GBS na urina em qualquer fase = profilaxia intraparto, sem precisar de swab."
  },
  {
    "id": "amrigs2025-38",
    "module": "Cirurgia",
    "text": "Sobre os hormônios dos eixos enteroencefálico e enteroinsular e a cirurgia bariátrica, assinale a alternativa correta.",
    "options": [
      "A grelina é produzida pelas células parietais do corpo gástrico.",
      "GLP-1 promove redução do esvaziamento gástrico.",
      "Após bypass gástrico, ocorre redução da expressão de PYY.",
      "A liberação de NPY não é influenciada pela grelina circulante."
    ],
    "correctAnswer": 1,
    "explanation": "O GLP-1, liberado pelas células L do íleo distal e do cólon, retarda o esvaziamento gástrico, aumenta a saciedade e estimula a secreção de insulina dependente de glicose (efeito incretina). Após o bypass gástrico, o alimento chega mais rápido ao íleo e o GLP-1 aumenta, o que contribui para a perda de peso e a melhora do diabetes.",
    "commentary": "Grelina das células parietais (A): é produzida pelas células X/A (P/D1) oxínticas do fundo gástrico, não pelas parietais.\n\nRedução de PYY após bypass (C): o PYY (também das células L) aumenta após o bypass.\n\nNPY independente da grelina (D): a grelina estimula neurônios NPY/AgRP do núcleo arqueado, aumentando a fome.",
    "reference": "Sabiston — Tratado de Cirurgia (cirurgia bariátrica e metabólica)",
    "tags": [
      "cirurgia bariátrica",
      "GLP-1",
      "grelina",
      "PYY",
      "incretinas"
    ],
    "tip": "Bypass: sobem GLP-1 e PYY, cai a grelina."
  },
  {
    "id": "amrigs2026-54",
    "module": "Ginecologia e Obstetrícia",
    "text": "Durante a primeira consulta de uma puérpera que está amamentando exclusivamente há 15 dias, ela relata dor intensa nos mamilos durante as mamadas e observa fissuras bilaterais. Ao exame físico, nota-se eritema ao redor dos mamilos e ausência de sinais de infecção. O manejo inicial deve incluir a correção da técnica de amamentação, especialmente no que diz respeito à:",
    "options": [
      "Pega do bebê e à posição da mãe e do bebê.",
      "Pega do bebê e à frequência das mamadas.",
      "Ordenha manual e à frequência das mamadas.",
      "Ordenha manual e à posição da mãe e do bebê."
    ],
    "correctAnswer": 0,
    "explanation": "Fissuras e dor mamilar nas primeiras semanas decorrem, na maioria das vezes, de pega e posicionamento inadequados. O manejo inicial é corrigir a pega (boca bem aberta, abocanhando boa parte da aréola, lábio inferior evertido) e a posição da mãe e do bebê (corpo alinhado, barriga com barriga).",
    "commentary": "Pega e frequência (B): a frequência das mamadas é livre demanda e não causa fissura.\n\nOrdenha manual e frequência (C) / ordenha e posição (D): a ordenha ajuda no ingurgitamento, mas não corrige a causa da fissura.",
    "reference": "Ministério da Saúde — Caderno de Atenção Básica nº 23: Saúde da criança — aleitamento materno",
    "tags": [
      "aleitamento materno",
      "fissura mamilar",
      "pega",
      "amamentação"
    ],
    "tip": "Fissura mamilar = corrigir pega e posição."
  },
  {
    "id": "cerman2025-57",
    "topography": "5.1",
    "topic": "Contracepção",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher 30 anos, diabética com vasculopatia, deseja iniciar anticoncepção. Não quer em nenhuma hipótese usar DIU. De acordo com os critérios de elegibilidade da OMS (2015), a conduta adequada é prescrever:",
    "options": [
      "(A) anel vaginal",
      "(B) Injetável mensal",
      "(C) adesivo semanal",
      "(D) Implante de etonogestrel"
    ],
    "correctAnswer": 3,
    "explanation": "Diabetes com vasculopatia contraindica métodos com estrogênio (categoria 3/4 da OMS). Os métodos só de progestagênio são preferíveis: o implante de etonogestrel é categoria 2 (benefício maior que o risco) e é muito eficaz. Como a paciente recusa DIU, o implante é a melhor opção.",
    "commentary": "Anel vaginal (A): contém estrogênio — categoria 3/4.\n\nInjetável mensal (B): combinado (estrogênio + progestagênio) — categoria 3/4.\n\nAdesivo semanal (C): contém estrogênio — categoria 3/4.",
    "reference": "OMS — Critérios Médicos de Elegibilidade para Uso de Métodos Anticoncepcionais, 5ª ed. (2015)",
    "tags": [
      "contracepção",
      "critérios de elegibilidade da OMS",
      "diabetes",
      "implante de etonogestrel"
    ]
  },
  {
    "id": "cerman2026-43",
    "topography": "5.1",
    "topic": "Câncer de endométrio",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 63 anos vai à consulta por sangramento vaginal, em pequena quantidade, com duração de dois dias. Nega outros episódios prévios desde a menopausa aos 53 anos. Nega uso de terapia hormonal e outras queixas. Foi solicitada ultrassonografia transvaginal que evidenciou endométrio homogêneo com 5,4 mm de espessura. Qual a conduta mais adequada nesse caso?",
    "options": [
      "(A) Indicar histerectomia por se tratar de paciente pós-menopausa.",
      "(B) Realizar nova ultrassonografia transvaginal de controle em 6 meses.",
      "(C) Tranquilizar a paciente, pois se trata de sangramento por atrofia.",
      "(D) Prosseguir investigação solicitando biópsia endometrial."
    ],
    "correctAnswer": 3,
    "explanation": "Sangramento pós-menopausa com endométrio > 4 mm (aqui 5,4 mm) à ultrassonografia transvaginal exige amostragem do endométrio para afastar hiperplasia e câncer — biópsia endometrial, idealmente guiada por histeroscopia.",
    "commentary": "Histerectomia (A): só depois de diagnóstico que a justifique.\n\nNova US em 6 meses (B): o endométrio acima do limite em sangramento pós-menopausa precisa de histologia agora.\n\nTranquilizar por atrofia (C): a atrofia é a causa mais comum, mas com endométrio > 4 mm não se pode presumi-la.",
    "reference": "ACOG Committee Opinion nº 734 (2018) / FEBRASGO — Sangramento pós-menopausa",
    "tags": [
      "sangramento pós-menopausa",
      "espessura endometrial",
      "biópsia endometrial"
    ]
  }
];
