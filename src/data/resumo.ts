// Arquivo gerado por `npm run gen` a partir do banco de questões. Não editar à mão.
// O build e o servidor local regeneram este arquivo sozinhos; o `npm run validate` acusa se ficar desatualizado.
import type { Question } from '../types';

export const TOTAL_QUESTIONS = 3979;

export const COUNT_BY_AREA: Record<string, number> = {
  "Pediatria": 759,
  "Clínica Médica": 823,
  "Cirurgia": 735,
  "Ginecologia e Obstetrícia": 762,
  "Saúde Coletiva": 739,
  "Ciências Básicas": 161
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
    "label": "FUBOG 2025",
    "kind": "Residência",
    "year": 2025,
    "count": 100
  },
  {
    "label": "HCPA 2025",
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
    "label": "FAMERP 2026",
    "kind": "Residência",
    "year": 2026,
    "count": 80
  },
  {
    "label": "FMJ 2026",
    "kind": "Residência",
    "year": 2026,
    "count": 100
  },
  {
    "label": "HCPA 2026",
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
    "label": "VIV 2026",
    "kind": "Residência",
    "year": 2026,
    "count": 100
  },
  {
    "label": "FELUMA 2027",
    "kind": "Residência",
    "year": 2027,
    "count": 75
  },
  {
    "label": "FUBOG 2027",
    "kind": "Residência",
    "year": 2027,
    "count": 100
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
    "key": "FUBOG",
    "label": "FUBOG",
    "kind": "Residência",
    "years": "2025–2027",
    "count": 200
  },
  {
    "key": "HCPA",
    "label": "HCPA",
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
    "key": "FMJ",
    "label": "FMJ",
    "kind": "Residência",
    "years": "2026",
    "count": 100
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
  },
  {
    "key": "VIV",
    "label": "VIV",
    "kind": "Residência",
    "years": "2026",
    "count": 100
  },
  {
    "key": "FELUMA",
    "label": "FELUMA",
    "kind": "Residência",
    "years": "2027",
    "count": 75
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
  "Saúde Coletiva|ENARE": 20,
  "Cirurgia|FELUMA": 15,
  "Ginecologia e Obstetrícia|FELUMA": 16,
  "Clínica Médica|FELUMA": 14,
  "Pediatria|FELUMA": 15,
  "Saúde Coletiva|FELUMA": 15,
  "Clínica Médica|FUBOG": 28,
  "Pediatria|FUBOG": 41,
  "Ginecologia e Obstetrícia|FUBOG": 43,
  "Saúde Coletiva|FUBOG": 44,
  "Cirurgia|FUBOG": 43,
  "Ciências Básicas|FUBOG": 1,
  "Clínica Médica|VIV": 23,
  "Pediatria|VIV": 20,
  "Cirurgia|VIV": 17,
  "Ginecologia e Obstetrícia|VIV": 20,
  "Saúde Coletiva|VIV": 20,
  "Cirurgia|FMJ": 20,
  "Clínica Médica|FMJ": 22,
  "Ginecologia e Obstetrícia|FMJ": 23,
  "Pediatria|FMJ": 20,
  "Saúde Coletiva|FMJ": 15,
  "Pediatria|HCPA": 40,
  "Ginecologia e Obstetrícia|HCPA": 40,
  "Cirurgia|HCPA": 40,
  "Clínica Médica|HCPA": 40,
  "Saúde Coletiva|HCPA": 40
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
    "id": "tp2021-50",
    "topography": "1.1",
    "topic": "Cefaleias",
    "module": "Pediatria",
    "text": "Menino, 8 anos, atendido em Pronto Socorro, com queixa de cefaleia, inapetência e adinamia há cerca de 2 meses. Tem história patológica pregressa de rinite alérgica e IVAS de repetição. Nos últimos 15 dias apresenta irritabilidade, piora da cefaleia principalmente no período noturno e vômitos esporádicos. A conduta é:",
    "options": [
      "(A) Encaminhamento para o neurologista.",
      "(B) Solicitação de eletroencefalograma.",
      "(C) Encaminhamento para otorrinolaringologista.",
      "(D) Solicitação de tomografia computadorizada de crânio."
    ],
    "correctAnswer": 3,
    "explanation": "Cefaleia de caráter subagudo e progressivo, com despertares noturnos bem marcados por dor exuberante, acompanhada por alterações de comportamento (irritabilidade) e vômitos espontâneos constitui sinal clássico de alerta cerebral para hipertensão intracraniana. Demanda imediata realização de exame de imagem (TC de crânio) para descartar neoplasias do SNC.",
    "commentary": "Presença de sinais de alarme (\"red flags\") em cefaleias na infância (padrão progressivo em semanas, dor noturna relevante ou logo ao levantar, vômitos em jato, manifestações comportamentais) exigem de pronto a exclusão de lesão expansiva estrutural craniana, como meduloblastoma ou astrocitoma. A tomografia computadorizada craniocerebral é o exame mais ágil disponível para esse escopo de urgência.",
    "reference": "Cefaleias na Infância—Diretrizes do Departamento Científico de Neurologia Pediátrica, SBP.",
    "tags": [
      "neurologia",
      "oncologia",
      "urgência e emergência"
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
    "id": "tp2024-80",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Politraumatizado grave (fraturas expostas, dor abdominal, lacerações). Qual o primeiro passo prioritário no ATLS?",
    "options": [
      "(A) Avaliação primária com controle da via aérea.",
      "(B) Avaliação neurológica detalhada.",
      "(C) Fluidos IV rápidos.",
      "(D) Radiografia de tórax."
    ],
    "correctAnswer": 0,
    "explanation": "No ATLS, o atendimento ao politraumatizado grave começa pela avaliação primária, seguindo a sequência ABCDE: via aérea com proteção da coluna cervical, respiração e ventilação, circulação com controle de hemorragia, avaliação neurológica e exposição com controle da temperatura. O que mata mais rápido é tratado primeiro, à medida que é encontrado.\n\nO paciente está inconsciente, o que por si só ameaça a via aérea, e tem lacerações na face; garantir a via aérea (com restrição de movimento da coluna cervical) vem antes das fraturas expostas e da dor abdominal. Hemorragia externa grave, se presente, é controlada de imediato junto com esse primeiro passo, como enfatizam os protocolos de atendimento pré-hospitalar.",
    "commentary": "Avaliação neurológica detalhada (B): na avaliação primária, o D é rápido (Glasgow, pupilas e sinais de lateralização); o exame neurológico completo fica para a avaliação secundária.\n\nFluidos intravenosos rápidos (C): a circulação é a etapa C; além disso, a reanimação do trauma prioriza hemoderivados e evita grandes volumes de cristaloide.\n\nRadiografia de tórax (D): é exame complementar da avaliação primária, mas não vem antes de garantir a via aérea.",
    "tip": "Politrauma: ABCDE na ordem; A = via aérea com proteção da cervical, sempre primeiro.",
    "reference": "ATLS 10ª ed.",
    "tags": [
      "trauma",
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
    "id": "tp2022-86",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 40 anos, nódulo mamário palpável. Mamografia BI-RADS 0. USG: nódulo hipoecogênico, regular, 1,2 cm, BI-RADS 3. Seguimento?",
    "options": [
      "(A) Realizar ressonância mamária imediata.",
      "(B) Repetição da mamografia em 6 meses.",
      "(C) Indica-se biópsia com agulha grossa por ser palpável.",
      "(D) Repetição da ultrassonografia em 6 meses."
    ],
    "correctAnswer": 3,
    "explanation": "Mulher de 40 anos com nódulo palpável: a mamografia veio BI-RADS 0 (inconclusiva, precisa de complementação), e a ultrassonografia mostrou nódulo hipoecoico, de contornos regulares, paralelo à pele (mais largo que alto) e com 1,2 cm. Essas características são de lesão provavelmente benigna, como fibroadenoma, e por isso receberam BI-RADS 3.\n\nNa categoria 3, a chance de câncer é muito baixa (até 2%), e a recomendação é controle de curto prazo com o mesmo exame que mostrou a lesão: nova ultrassonografia em 6 meses, seguida de controles até completar cerca de 2 anos de estabilidade. Se a lesão crescer ou mudar de aspecto, passa a ter indicação de biópsia.\n\nO antecedente familiar (tia materna, segundo grau, diagnóstico aos 66 anos) não coloca a paciente em alto risco.",
    "commentary": "Ressonância mamária (A): é reservada a casos que a mamografia e a ultrassonografia não resolvem ou a mulheres de alto risco; uma tia com câncer depois da menopausa não configura alto risco.\n\nRepetir a mamografia em 6 meses (B): o nódulo foi caracterizado na ultrassonografia, então é ela que deve ser repetida para comparar a lesão.\n\nBiópsia com agulha grossa por ser palpável (C): o fato de ser palpável, isoladamente, não obriga a biópsia quando a imagem é típica de benignidade; a biópsia é indicada para BI-RADS 4 e 5 ou se houver mudança no controle.",
    "tip": "BI-RADS 3: controle com o mesmo exame em 6 meses. BI-RADS 4 e 5: biópsia.",
    "reference": "Sistema BI-RADS, ACR.",
    "tags": [
      "mastologia"
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
    "id": "enamed-2025-32",
    "topography": "5.2",
    "topic": "Pré-eclâmpsia",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente G5P3C1, 35 anos, idade gestacional de 15 semanas por ecografia realizada com 8 semanas, hipertensa crônica em uso de enalapril, antecedente de pré-eclâmpsia. Comparece à consulta de pré-natal na Unidade Básica de Saúde (UBS) com pressão arterial de 140 × 90 mmHg.\n\nQual é a conduta medicamentosa indicada para essa paciente?",
    "options": [
      "(A) Captopril, varfarina e ácido acetilsalicílico.",
      "(B) Furosemida, varfarina e carbonato de cálcio.",
      "(C) Losartana, enoxaparina e carbonato de cálcio.",
      "(D) Alfa-metildopa, ácido acetilsalicílico e carbonato de cálcio."
    ],
    "correctAnswer": 3,
    "explanation": "A paciente apresenta hipertensão arterial crônica na gestação e antecedente de pré-eclâmpsia, configurando alto risco obstétrico. O enalapril (IECA) deve ser suspenso imediatamente, pois inibidores da enzima conversora de angiotensina são teratogênicos e contraindicados na gravidez. Entre os anti-hipertensivos seguros, a alfa-metildopa é a escolha padrão de primeira linha. Adicionalmente, gestantes com alto risco para pré-eclâmpsia se beneficiam de ácido acetilsalicílico (AAS) em baixa dose (iniciado preferencialmente antes de 16 semanas) associado à suplementação de carbonato de cálcio.",
    "commentary": "As demais alternativas contêm fármacos formalmente contraindicados na gestação, como varfarina (anticoagulante oral altamente teratogênico), losartana (BRA) e captopril (IECA).",
    "reference": "Diretrizes da FEBRASGO / Sociedade Brasileira de Cardiologia",
    "tags": [
      "ginecologia",
      "obstetrícia",
      "hipertensão na gravidez",
      "pré-eclâmpsia"
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
    "id": "unifesp2025-84",
    "topography": "3.1",
    "topic": "DRGE",
    "module": "Pediatria",
    "text": "Menino, 7 anos de idade, apresenta queixa de refluxo, queimação retroesternal e dor epigástrica há 1 ano, que não melhoram com uso de inibidor da bomba de prótons. Tem antecedente de alergia à proteína do leite de vaca quando era lactente.\n\nConsiderando o diagnóstico mais provável, qual é o exame recomendado para a confirmação diagnóstica?",
    "options": [
      "(A) Cintilografia gastroesofágica com pesquisa de aspiração pulmonar.",
      "(B) Dosagem de IgE (RAST) para leite de vaca",
      "(C) Manometria esofágica.",
      "(D) Endoscopia digestiva alta com biópsias seriadas."
    ],
    "correctAnswer": 3,
    "explanation": "Criança com sintomas de refluxo (pirose, epigastralgia) refratários ao IBP e antecedente de alergia à proteína do leite de vaca (atopia): a principal hipótese é esofagite eosinofílica.\n\nO diagnóstico exige endoscopia digestiva alta com biópsias de vários níveis do esôfago (proximal, médio e distal), demonstrando 15 ou mais eosinófilos por campo de grande aumento.",
    "commentary": "Cintilografia (A): avalia esvaziamento gástrico e aspiração, não diagnostica esofagite eosinofílica.\n\nIgE específica para leite (B): a esofagite eosinofílica é predominantemente não mediada por IgE; o RAST não confirma o diagnóstico.\n\nManometria (C): avalia distúrbios motores (acalasia); não é exame diagnóstico aqui.",
    "reference": "Consenso Brasileiro sobre Alergia Alimentar (ASBAI/SBP, 2018) / Diretrizes internacionais de esofagite eosinofílica (AGREE, 2018)",
    "tags": [
      "pediatria",
      "esofagite eosinofílica",
      "gastroenterologia pediátrica",
      "endoscopia"
    ]
  },
  {
    "id": "hosbos2025-28",
    "topography": "2.1",
    "topic": "Pneumonia comunitária",
    "module": "Clínica Médica",
    "text": "Paciente vem a unidade de saúde com quadro de pneumonia de comunidade. É critério do escore CURB 65:",
    "options": [
      "(A) PAS < 80 mmHg.",
      "(B) PAD ≤ 60 mmHg.",
      "(C) frequência respiratória > 35 ipm.",
      "(D) idade > 65 anos.",
      "(E) ureia > 40 mg/dL."
    ],
    "correctAnswer": 1,
    "explanation": "CURB-65: Confusão, Ureia > 50 mg/dL (ou > 7 mmol/L), frequência Respiratória ≥ 30 irpm, pressão Baixa (PAS < 90 ou PAD ≤ 60 mmHg) e idade ≥ 65 anos. Cada item vale 1 ponto.\n\nA PAD ≤ 60 mmHg é critério.",
    "commentary": "PAS < 80 mmHg (A): o corte é PAS < 90.\n\nFR > 35 (C): o corte é ≥ 30.\n\nIdade > 65 (D): o corte é ≥ 65 anos.\n\nUreia > 40 mg/dL (E): o corte é > 50 mg/dL.",
    "reference": "Diretrizes Brasileiras para Pneumonia Adquirida na Comunidade em Adultos Imunocompetentes (SBPT, 2018)",
    "tags": [
      "pneumonia comunitária",
      "CURB-65",
      "estratificação de risco"
    ]
  },
  {
    "id": "usprp2025-92",
    "topography": "7.1",
    "topic": "Trombose venosa profunda",
    "module": "Cirurgia",
    "text": "Mulher, 60 anos com história de câncer de mama, submetida a mastectomia há 3 semanas e em inicio tratamento quimioterápico complementar. Na consulta ambulatorial observou-se edema súbito em perna direita, associada a dor local.\n\nQual a conduta mais adequada, considerando o diagnóstico mais provável?",
    "options": [
      "(A) Prescrever heparina de baixo peso molecular em dose terapêutica.",
      "(B) Implante de filtro de veia cava inferior.",
      "(C) Indicar uso de meia elástica e dose profilática de anticoagulante.",
      "(D) Internação para uso de heparina não fracionada subcutânea."
    ],
    "correctAnswer": 0,
    "explanation": "Paciente oncológica (câncer de mama), em pós-operatório recente e em quimioterapia, com edema súbito e dor na perna: trombose venosa profunda é o diagnóstico mais provável (alta probabilidade pré-teste), a ser confirmada por ultrassonografia Doppler.\n\nO tratamento do TEV associado ao câncer é a anticoagulação plena. A HBPM em dose terapêutica é tradicionalmente o padrão; os DOAC (apixabana, rivaroxabana, edoxabana) são alternativas, conforme o risco de sangramento.",
    "commentary": "Filtro de veia cava (B): só com contraindicação absoluta à anticoagulação.\n\nMeia e dose profilática (C): dose profilática não trata TVP estabelecida.\n\nInternação com HNF subcutânea (D): pode ser tratada ambulatorialmente; HBPM é preferível no câncer.",
    "reference": "ASCO Guideline — VTE Prophylaxis and Treatment in Patients with Cancer (2023) / ITAC",
    "tags": [
      "cirurgia vascular",
      "trombose venosa profunda",
      "câncer",
      "anticoagulação"
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
    "id": "sespe2026-20",
    "topography": "2.1",
    "topic": "DPOC",
    "module": "Clínica Médica",
    "text": "Mulher de 65 anos, ex-tabagista, com diagnóstico de DPOC moderada, usa broncodilatador de longa duração de forma regular. Apresentou três exacerbações no último ano, duas delas exigindo antibiótico. A contagem de eosinófilos é de 320 células/µL.\n\nQual é a conduta adicional mais adequada neste cenário?",
    "options": [
      "Iniciar corticosteroide sistêmico em dose contínua.",
      "Substituir broncodilatador por metilxantina.",
      "Introduzir corticosteroide inalado em associação à terapia atual.",
      "Suspender broncodilatador e iniciar fisioterapia respiratória exclusiva.",
      "Não modificar conduta atual, pois não há critérios de gravidade."
    ],
    "correctAnswer": 2,
    "explanation": "DPOC com exacerbações frequentes (3 no último ano, 2 com antibiótico) apesar de broncodilatador de longa duração, e eosinófilos de 320/µL. Pelo GOLD, eosinófilos ≥ 300 com exacerbações indicam acrescentar corticoide inalado ao broncodilatador (terapia tripla LABA + LAMA + CI), o que reduz exacerbações.",
    "commentary": "Corticoide sistêmico contínuo (A): muitos efeitos adversos e sem benefício na manutenção.\n\nMetilxantina (B): pouco eficaz e tóxica; não substitui broncodilatador de longa duração.\n\nSuspender o broncodilatador (D): o broncodilatador é a base do tratamento; reabilitação é complementar.\n\nNão mudar (E): exacerbações frequentes indicam escalonar o tratamento.",
    "reference": "GOLD 2025 — Global Strategy for COPD / SBPT — Diretrizes de DPOC",
    "tags": [
      "pneumologia",
      "DPOC",
      "exacerbação",
      "corticoide inalatório",
      "eosinófilos"
    ],
    "tip": "DPOC exacerbador com eosinófilos ≥ 300: acrescente corticoide inalado."
  },
  {
    "id": "hpp2026-40",
    "topography": "16",
    "topic": "Pré-operatório",
    "module": "Cirurgia",
    "text": "Segundo a Associação Americana de Anestesiologia (ASA), uma paciente com 40 anos, diabética bem controlada com medicamentos e que tem exame físico e laboratorial normal no pré-operatório, pode ser classificada como:",
    "options": [
      "ASA I.",
      "ASA II.",
      "ASA III.",
      "ASA IV."
    ],
    "correctAnswer": 1,
    "explanation": "Na classificação ASA, o ASA II corresponde ao paciente com doença sistêmica leve, sem limitação funcional: hipertensão ou diabetes bem controlados, tabagismo, obesidade leve, gestação.\n\nA diabética bem controlada com exames normais é ASA II.",
    "commentary": "ASA I (A): paciente saudável, sem doença sistêmica.\n\nASA III (C): doença sistêmica grave com limitação funcional (diabetes ou hipertensão mal controlados, DPOC, obesidade mórbida, IAM há mais de 3 meses).\n\nASA IV (D): doença sistêmica grave que é ameaça constante à vida (IAM recente, insuficiência cardíaca descompensada, sepse).",
    "reference": "American Society of Anesthesiologists — ASA Physical Status Classification System (2020)",
    "tags": [
      "classificação ASA",
      "avaliação pré-operatória",
      "risco anestésico"
    ],
    "tip": "Doença sistêmica controlada = ASA II; com limitação = ASA III."
  },
  {
    "id": "famema2025-2",
    "topography": "8",
    "topic": "Diabetes mellitus tipo 1 e 2",
    "module": "Clínica Médica",
    "text": "Paciente recentemente recebeu confirmação diagnóstica de diabetes melito. Com relação às insulinas, assinale a alternativa correta.",
    "options": [
      "Lispro tem ação prolongada e pico de ação com 1 - 2 horas.",
      "Regular tem ação intermediária e pico de ação com 2-4 horas.",
      "Levemir tem ação prolongada e pico de ação 5 – 15 minutos.",
      "Glargina tem ação prolongada, sem pico de ação."
    ],
    "correctAnswer": 3,
    "explanation": "A glargina é um análogo de insulina de ação longa: após a injeção forma microprecipitados no subcutâneo, que liberam a insulina de forma lenta e estável por cerca de 24 horas, praticamente sem pico. Por isso é usada como insulina basal, uma vez ao dia.",
    "commentary": "Lispro (A): é análogo de ação ultrarrápida; começa a agir em 5–15 minutos, pico em 30–90 minutos e dura 3–5 horas.\n\nRegular (B): é insulina de ação rápida (início 30–60 minutos, pico 2–3 horas, duração 5–8 horas); a de ação intermediária é a NPH, com pico em 4–10 horas.\n\nLevemir/detemir (C): é de ação prolongada, mas não tem pico em 5–15 minutos; esse é o início de ação dos análogos ultrarrápidos.",
    "tip": "Basal sem pico: glargina, detemir, degludeca. Ultrarrápidas (lispro, asparte, glulisina): início em 5–15 min. NPH: intermediária, pico em 4–10 h.",
    "reference": "Sociedade Brasileira de Diabetes. Diretriz Oficial da SBD, 2024 – Insulinoterapia no diabetes tipo 1 e 2.",
    "tags": [
      "insulina",
      "glargina",
      "diabetes mellitus"
    ]
  },
  {
    "id": "famema2026-12",
    "topography": "3.2",
    "topic": "Peritonite bacteriana espontânea",
    "module": "Clínica Médica",
    "text": "Paciente de 58 anos, portador de cirrose alcoólica (Child-Pugh B), apresenta ascite tensa, febre, associadas a dor abdominal difusa e rebaixamento leve. Realizou paracentese diagnóstica que evidenciou líquido amarelo citrino, PMN: 780 células/mm³, proteínas: 1,0 g/dL, cultura pendente.\n\nA conduta preconizada para esse paciente seria:",
    "options": [
      "ceftriaxona e albumina endovenosos.",
      "ciprofloxacino oral e albumina apenas se a cultura for positiva.",
      "piperacilina-tazobactam e diurético de alça.",
      "aguardar o resultado da cultura do líquido ascítico para definir antibiótico."
    ],
    "correctAnswer": 0,
    "explanation": "Cirrótico com ascite, febre, dor abdominal e confusão, e líquido ascítico com mais de 250 polimorfonucleares/mm³: peritonite bacteriana espontânea. O tratamento começa logo, sem esperar a cultura, com cefalosporina de 3ª geração (ceftriaxona ou cefotaxima) EV.\n\nA albumina EV (1,5 g/kg no 1º dia e 1 g/kg no 3º dia) reduz a síndrome hepatorrenal e a mortalidade, sobretudo se creatinina > 1, ureia > 30 ou bilirrubina > 4 mg/dL.",
    "commentary": "Ciprofloxacino oral e albumina só com cultura positiva (B): o paciente tem encefalopatia, o que exige antibiótico EV; e a albumina independe da cultura.\n\nPiperacilina-tazobactam e diurético de alça (C): o espectro amplo fica para infecção hospitalar ou resistência; diurético na PBE aumenta o risco de lesão renal.\n\nAguardar a cultura (D): o diagnóstico é feito pela contagem de PMN ≥ 250, e o atraso aumenta a mortalidade.",
    "tip": "PBE: PMN ≥ 250 no líquido ascítico → ceftriaxona/cefotaxima + albumina 1,5 g/kg (D1) e 1 g/kg (D3).",
    "reference": "Biggins SW et al. AASLD Practice Guidance on Ascites, SBP and Hepatorenal Syndrome. Hepatology, 2021. Sociedade Brasileira de Hepatologia. Recomendações sobre complicações da cirrose.",
    "tags": [
      "peritonite bacteriana espontânea",
      "cirrose",
      "albumina"
    ]
  },
  {
    "id": "famerp2025-52",
    "topography": "11",
    "topic": "Anemia ferropriva",
    "module": "Pediatria",
    "text": "Em uma consulta de puericultura de um lactente de 12 meses, a mãe questiona sobre a necessidade de exames para investigação de anemia. Lactente em aleitamento materno misto (recebe leite de vaca integral em algumas mamadas) e com boa aceitação alimentar. Recebe ferro profilático na dose de 1 mg/kg desde o 3º mês de vida e vitamina D 600 UI/dia desde o nascimento e com bom ganho pondero-estatural.\n\nQual a sua orientação:",
    "options": [
      "A triagem é indicada nessa faixa etária e devem ser colhidos, no mínimo: hemograma e ferritina.",
      "A triagem não está indicada para esse lactente pois ele já está recebendo ferro profilático",
      "A triagem é indicada nessa faixa etária e devem ser colhidos, no mínimo: hemograma, proteína C reativa e ferritina.",
      "Pode ser realizada nessa faixa etária, mas deve ser decisão da família se deverá ser pedida ou não."
    ],
    "correctAnswer": 2,
    "explanation": "A Sociedade Brasileira de Pediatria (2021) recomenda triagem laboratorial universal para anemia e deficiência de ferro aos 12 meses de idade, mesmo em crianças que recebem ferro profilático. Os exames mínimos são hemograma, ferritina e proteína C reativa — a PCR é necessária porque a ferritina é proteína de fase aguda e pode estar falsamente normal na presença de inflamação.\n\nEste lactente tem ainda um fator de risco adicional: o consumo de leite de vaca integral antes de 1 ano.",
    "commentary": "Hemograma e ferritina (A): falta a PCR, sem a qual a ferritina não pode ser interpretada.\n\nTriagem desnecessária pelo ferro profilático (B): a triagem aos 12 meses é universal, independentemente da profilaxia.\n\nDecisão da família (D): é uma recomendação da SBP, não opcional.",
    "tip": "SBP: triagem de anemia aos 12 meses para todos — hemograma + ferritina + PCR.",
    "reference": "Sociedade Brasileira de Pediatria. Consenso sobre anemia ferropriva: atualização — destaques 2021.",
    "tags": [
      "anemia ferropriva",
      "triagem",
      "ferritina",
      "puericultura"
    ]
  },
  {
    "id": "hsrc2026-21",
    "topography": "16",
    "topic": "Hérnias",
    "module": "Cirurgia",
    "text": "Paciente de 70 anos de idade, hipertenso e com arritmia, apresenta hérnia umbilical há 10 anos. Há 3 meses vem relatando incômodo e episódios de dor. Ao exame, apresenta hérnia umbilical de cerca de 2 cm. Nesse caso, a melhor estratégia para este paciente é",
    "options": [
      "Manter observação clínica e acompanhamento.",
      "Indicação cirúrgica de herniorrafia com fechamento primário da falha da aponeurose.",
      "Correção aberta com colocação de tela intraperitoneal.",
      "Correção da hérnia aberta com colocação de tela pré-peritoneal.",
      "Reparo laparoscópico primário sem colocação de tela."
    ],
    "correctAnswer": 3,
    "explanation": "Hérnia umbilical sintomática (dor e desconforto) tem indicação cirúrgica. Pelas diretrizes da European Hernia Society, defeitos ≥ 1 cm devem ser corrigidos com tela, que reduz a recidiva. Em hérnias pequenas a médias (1–4 cm) operadas por via aberta, a tela é colocada preferencialmente no espaço pré-peritoneal (ou retromuscular), longe das vísceras.",
    "commentary": "Observação (A): poderia ser considerada em hérnias pequenas e assintomáticas; aqui já há dor.\n\nFechamento primário sem tela (B): aceitável apenas em defeitos < 1 cm, pela recidiva maior.\n\nTela intraperitoneal na cirurgia aberta (C): o contato com as alças aumenta aderências, obstrução e fístula; é evitada.\n\nLaparoscopia sem tela (E): reparo sem tela tem mais recidiva, e a via laparoscópica é reservada a defeitos maiores.",
    "reference": "European Hernia Society/Americas Hernia Society — Guidelines for umbilical and epigastric hernias (2020)",
    "tags": [
      "hérnia umbilical",
      "tela pré-peritoneal",
      "hernioplastia"
    ],
    "tip": "Umbilical ≥ 1 cm: tela. Via aberta: pré-peritoneal, não intraperitoneal."
  },
  {
    "id": "amrigs2025-8",
    "module": "Clínica Médica",
    "text": "Dor crônica difusa, subjetividade dos sintomas, preponderância em mulheres e falta de dados objetivos de imagem e de exames laboratoriais fazem com que a principal suspeita clínica seja de:",
    "options": [
      "Artrite reumatoide.",
      "Polimialgia reumática.",
      "Fibromialgia.",
      "Depressão."
    ],
    "correctAnswer": 2,
    "explanation": "Dor crônica difusa, sintomas subjetivos (fadiga, sono não reparador, alterações cognitivas), predomínio em mulheres e exames laboratoriais e de imagem normais compõem o quadro clássico da fibromialgia, cujo diagnóstico é clínico (critérios ACR 2010/2016: índice de dor generalizada e escala de gravidade de sintomas, por pelo menos 3 meses).",
    "commentary": "Artrite reumatoide (A): há sinovite objetiva, provas inflamatórias e autoanticorpos alterados e erosões na imagem.\n\nPolimialgia reumática (B): acomete idosos (>50 anos), com dor e rigidez de cinturas e VHS/PCR elevados.\n\nDepressão (D): é comorbidade frequente, mas não explica sozinha a síndrome dolorosa difusa descrita.",
    "reference": "Recomendações da Sociedade Brasileira de Reumatologia para o diagnóstico e tratamento da fibromialgia / Critérios ACR 2016",
    "tags": [
      "fibromialgia",
      "dor crônica",
      "reumatologia"
    ],
    "tip": "Dor difusa + exames normais + mulher = fibromialgia."
  },
  {
    "id": "amrigs2026-15",
    "module": "Clínica Médica",
    "text": "Em relação à dengue, analise as seguintes assertivas:\nI. Na febre hemorrágica da dengue, a trombocitopenia com plaquetas abaixo de 100.000 células/ml e alargamento do tempo de protrombina são característicos.\nII. A leucopenia desenvolve-se no segundo dia de febre, caindo para 1.000 a 2.000 células/ml no quinto ou sexto dia.\nIII. O anticorpo IgM surge de 3 a 5 dias após a infecção, e o IgG, de 9 a 10 dias após.\n\nQuais estão corretas?",
    "options": [
      "Apenas I e II.",
      "Apenas I e III.",
      "Apenas II e III.",
      "I, II e III."
    ],
    "correctAnswer": 3,
    "explanation": "A banca considerou corretas as três assertivas, com dados clássicos do Harrison:\n\nI: na febre hemorrágica da dengue, plaquetas abaixo de 100.000/mm³ e alargamento do tempo de protrombina são característicos.\nII: a leucopenia começa por volta do segundo dia de febre e pode chegar a 1.000–2.000/mm³ no 5º–6º dia.\nIII: na infecção primária, IgM surge em 3 a 5 dias e IgG em cerca de 9 a 10 dias.",
    "commentary": "Apenas I e II (A), Apenas I e III (B), Apenas II e III (C): todas deixam de fora uma assertiva considerada correta.\n\nObservação: \"febre hemorrágica da dengue\" é terminologia antiga; a classificação atual (OMS 2009, MS) usa dengue sem sinais de alarme, com sinais de alarme e grave.",
    "reference": "Harrison — Medicina Interna (arboviroses) / Ministério da Saúde — Dengue: diagnóstico e manejo clínico (2024)",
    "tags": [
      "dengue",
      "plaquetopenia",
      "leucopenia",
      "sorologia"
    ],
    "tip": "Dengue: leucopenia precoce e plaquetopenia; IgM a partir do 5º–6º dia."
  },
  {
    "id": "cerman2025-59",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente 30 anos, assintomática, realizou exame de ultrassonografia mamaria de rotina que evidenciou nódulo sólido, hipoecóico, classificação BI-RADS 4A. Assinale a alternativa que representa a conduta adequada para o melhor cuidado com a paciente?",
    "options": [
      "(A) Core biopsy",
      "(B) Controle em 6 meses",
      "(C) Controle em 1 ano",
      "(D) Punção por agulha fina"
    ],
    "correctAnswer": 0,
    "explanation": "BI-RADS 4 (4A: baixa suspeição, 2–10% de malignidade) indica biópsia. Para nódulos sólidos, o método de escolha é a biópsia por agulha grossa (core biopsy) guiada por ultrassonografia, que fornece diagnóstico histológico.",
    "commentary": "Controle em 6 meses (B): conduta de BI-RADS 3.\n\nControle anual (C): conduta de BI-RADS 1 e 2.\n\nPunção por agulha fina (D): fornece apenas citologia, com mais resultados inconclusivos; é usada para cistos e linfonodos.",
    "reference": "ACR BI-RADS Atlas, 5ª ed. / Recomendações do CBR, SBM e FEBRASGO para o diagnóstico do câncer de mama",
    "tags": [
      "BI-RADS",
      "nódulo mamário",
      "core biopsy",
      "mastologia"
    ]
  },
  {
    "id": "cerman2026-61",
    "module": "Pediatria",
    "text": "Você é o pediatra da rotina na UTI e a enfermeira vem avisar sobre recém-nascido de 30 horas de vida que nasceu prematuro de 36 semanas, AIG, portador de Síndrome de Down. No pré-natal, mãe teve história de polidrâmnio. RN ainda não evacuou e somente eliminou pouca quantidade de mecônio ao toque retal. Vômitos biliosos e desidratado. Exame físico sem outras alterações. RX simples de abdome evidencia o sinal da dupla bolha. Este quadro indica:",
    "options": [
      "(A) Má rotação de intestino médio.",
      "(B) Invaginação intestinal.",
      "(C) Atresia duodenal.",
      "(D) Doença de Hirschsprung."
    ],
    "correctAnswer": 2,
    "explanation": "Recém-nascido com síndrome de Down, polidrâmnio no pré-natal, vômitos biliosos nas primeiras horas, pouca eliminação de mecônio e sinal da dupla bolha (estômago e duodeno distendidos, sem ar distal): atresia duodenal. Cerca de 30% dos casos têm trissomia do 21. O tratamento é a duodenoduodenostomia.",
    "commentary": "Má rotação intestinal (A): pode dar dupla bolha com ar distal, e o volvo causa vômitos biliosos com piora rápida; a associação com Down e polidrâmnio favorece a atresia.\n\nInvaginação (B): ocorre em lactentes, entre 6 meses e 2 anos.\n\nDoença de Hirschsprung (D): retarda a eliminação de mecônio, mas a radiografia mostra distensão difusa de alças, não dupla bolha.",
    "reference": "Nelson Textbook of Pediatrics, 21ª ed. — Atresia duodenal",
    "tags": [
      "atresia duodenal",
      "sinal da dupla bolha",
      "síndrome de Down",
      "obstrução intestinal neonatal"
    ]
  },
  {
    "id": "enare2025-78",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma mulher de 25 anos chega ao ambulatório com um exame de farmácia demonstrando gravidez. Ainda não realizou ultrassonografia e, pela data da última menstruação, estaria com aproximadamente 8 semanas de gestação.\n\nAo toque, nota-se um amolecimento acentuado no istmo, que configuraria o sinal de:",
    "options": [
      "Hegar",
      "Piskacek",
      "Osiander",
      "Nobile-Budin",
      "Puzos"
    ],
    "correctAnswer": 0,
    "explanation": "Os sinais de presunção e probabilidade da gravidez ao exame físico incluem alterações de consistência e forma do útero. O sinal de Hegar é o amolecimento acentuado do istmo uterino, percebido ao toque bimanual por volta de 6 a 8 semanas, que dá a sensação de que o corpo uterino está separado do colo.",
    "commentary": "Piskacek (B): assimetria uterina, com abaulamento no local de implantação do ovo.\n\nOsiander (C): percepção do pulso da artéria vaginal nos fundos de saco laterais.\n\nNobile-Budin (D): preenchimento dos fundos de saco laterais pelo útero globoso.\n\nPuzos (E): rechaço fetal intrauterino ao toque, perceptível a partir do 4º mês.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Rezende – Obstetrícia, 14ª ed.; Zugaib Obstetrícia, 5ª ed.",
    "tags": [
      "diagnóstico de gravidez",
      "sinais de gravidez",
      "semiologia obstétrica"
    ],
    "tip": "Hegar = istmo amolecido; Osiander = pulso vaginal; Piskacek = assimetria; Nobile-Budin = fundos de saco cheios."
  },
  {
    "id": "fubog2025-53",
    "module": "Cirurgia",
    "text": "Paciente, 35 anos, que chega ao pronto-socorro após um acidente de carro, com dificuldade respiratória e sinais de enfisema subcutâneo. Nesse caso, a conduta inicial para garantir a via aérea pérvia é:",
    "options": [
      "Realizar intubação orotraqueal imediatamente",
      "Realizar manobra de Jaw Thrust e aspirar secreções",
      "Administrar ventilação mecânica invasiva",
      "Aplicar máscara não reinalante de O2 e observar"
    ],
    "correctAnswer": 1,
    "explanation": "Na avaliação primária do trauma (ABCDE), o primeiro passo na via aérea é verificar sua permeabilidade e realizar manobras básicas: elevação da mandíbula (jaw thrust), mantendo a proteção da coluna cervical, e aspiração de secreções e sangue. Se essas medidas não forem suficientes ou houver indicação de via aérea definitiva, procede-se à intubação. O enfisema subcutâneo sugere pneumotórax ou lesão de via aérea, a ser avaliado no B.",
    "commentary": "Intubação imediata (A): a via aérea definitiva é indicada se as manobras básicas falharem, houver Glasgow ≤ 8, risco de obstrução ou insuficiência respiratória; não é o primeiro passo em todo paciente.\n\nVentilação mecânica invasiva (C): pressupõe via aérea definitiva e, com possível pneumotórax, pode agravá-lo sem drenagem.\n\nMáscara não reinalante e observar (D): oxigênio é indicado, mas antes é preciso garantir a permeabilidade da via aérea.",
    "reference": "ATLS – Advanced Trauma Life Support, 10ª ed.",
    "tags": [
      "via aérea",
      "trauma",
      "jaw thrust",
      "ATLS"
    ],
    "alert": "O enfisema subcutâneo com dificuldade respiratória levanta suspeita de pneumotórax ou lesão de via aérea; se houver lesão laringotraqueal ou deterioração, a via aérea definitiva deve ser precoce.",
    "tip": "Trauma: A = permeabilidade (jaw thrust, aspiração) com proteção cervical."
  },
  {
    "id": "viv2026-14",
    "module": "Clínica Médica",
    "text": "Paciente com insuficiência renal crônica em hemodiálise apresenta parada cardiorrespiratória. O monitor mostra ritmo de assistolia. A gasometria revela potássio de 8,5 mEq/L. Além das manobras de reanimação cardiopulmonar, a medida medicamentosa prioritária para estabilização de membrana é:",
    "options": [
      "Gluconato de cálcio intravenoso",
      "Bicarbonato de sódio",
      "Insulina regular com glicose",
      "Poliestireno sulfonato de cálcio (Sorcal)"
    ],
    "correctAnswer": 0,
    "explanation": "Parada cardiorrespiratória em paciente dialítico com potássio de 8,5 mEq/L: a hipercalemia é causa reversível (um dos “Hs”). Além da RCP, administra-se gluconato de cálcio (ou cloreto de cálcio) IV para estabilizar a membrana do miocárdio, seguido de medidas que deslocam o potássio para as células (insulina com glicose, bicarbonato na acidose) e de sua remoção (diálise).",
    "commentary": "Bicarbonato de sódio (B): ajuda a deslocar potássio, especialmente com acidose, mas não estabiliza a membrana.\n\nInsulina com glicose (C): desloca o potássio para dentro das células, em 15–30 minutos; não estabiliza a membrana.\n\nPoliestireno sulfonato de cálcio (D): remove potássio lentamente, em horas; não tem papel na parada.",
    "reference": "American Heart Association – ACLS (2020); UK Kidney Association – Hyperkalaemia guideline",
    "tags": [
      "hipercalemia",
      "parada cardiorrespiratória",
      "gluconato de cálcio",
      "nefrologia"
    ],
    "tip": "Hipercalemia: cálcio estabiliza; insulina, β2 e bicarbonato deslocam; resina e diálise removem."
  },
  {
    "id": "viv2026-69",
    "module": "Ginecologia e Obstetrícia",
    "text": "A causa mais comum de sangramento uterino anormal em mulheres na pós-menopausa é:",
    "options": [
      "Câncer de endométrio",
      "Hiperplasia endometrial",
      "Pólipos endometriais",
      "Atrofia endometrial"
    ],
    "correctAnswer": 3,
    "explanation": "A causa mais frequente de sangramento uterino na pós-menopausa é a atrofia endometrial (e vaginal), responsável por cerca de 60–80% dos casos. Ainda assim, todo sangramento pós-menopausa deve ser investigado (ultrassom transvaginal com medida endometrial e, se > 4 mm ou persistente, biópsia/histeroscopia) para excluir câncer de endométrio (cerca de 10%).",
    "commentary": "Câncer de endométrio (A): é a causa a ser excluída, mas não a mais comum.\n\nHiperplasia endometrial (B) e pólipos (C): causas menos frequentes que a atrofia.",
    "reference": "Febrasgo – Sangramento uterino na pós-menopausa; ACOG Committee Opinion nº 734 (2018)",
    "tags": [
      "sangramento pós-menopausa",
      "atrofia endometrial",
      "ginecologia"
    ],
    "tip": "Sangramento pós-menopausa: atrofia é a mais comum, mas câncer precisa ser excluído."
  },
  {
    "id": "fmj2026-54",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma mulher secundigesta, já com um parto normal realizado anteriormente, encontrava‑se com 33 semanas de idade gestacional e com diagnóstico de pré‑eclâmpsia. A paciente apresentou exames laboratoriais com AST 320, LDH alta e plaquetas 48.000.\n\nCom base nesse caso clínico hipotético, assinale a opção que apresenta a conduta adequada.",
    "options": [
      "manter conduta expectante até 37 semanas de idade gestacional",
      "induzir parto vaginal com misoprostol",
      "estabilização materna e resolução da gestação",
      "transfundir as plaquetas e aguardar a melhoria laboratorial para a resolução da gestação",
      "internação para cesárea imediata após diazepan, para a profilaxia de convulsão"
    ],
    "correctAnswer": 2,
    "explanation": "Pré-eclâmpsia com 33 semanas complicada por síndrome HELLP (AST muito elevada, LDH alto, plaquetas 48.000): a conduta é estabilizar a mãe (sulfato de magnésio, controle pressórico, avaliação de coagulopatia) e resolver a gestação. Com 33 semanas e paciente estável, pode-se fazer corticoide para maturação pulmonar sem atrasar indevidamente; a via de parto segue indicação obstétrica.",
    "commentary": "Expectante até 37 semanas (A): a HELLP indica interrupção da gestação.\n\nInduzir com misoprostol (B): a via vaginal pode ser tentada em condições favoráveis, mas a alternativa omite a estabilização materna.\n\nTransfundir plaquetas e aguardar melhora (D): os exames só melhoram após o parto; transfusão é feita se < 50.000 antes de cesárea ou com sangramento.\n\nCesárea imediata após diazepam (E): a profilaxia de convulsão é com sulfato de magnésio, e a via não precisa ser cesárea obrigatoriamente.",
    "reference": "Febrasgo/RBEHG – Pré-eclâmpsia (2023)",
    "tags": [
      "síndrome HELLP",
      "pré-eclâmpsia",
      "sulfato de magnésio",
      "obstetrícia"
    ],
    "tip": "HELLP: estabilizar (magnésio, PA) e resolver a gestação."
  }
];
