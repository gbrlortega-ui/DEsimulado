// Arquivo gerado por `npm run gen` a partir do banco de questões. Não editar à mão.
// O build e o servidor local regeneram este arquivo sozinhos; o `npm run validate` acusa se ficar desatualizado.
import type { Question } from '../types';

export const TOTAL_QUESTIONS = 3879;

export const COUNT_BY_AREA: Record<string, number> = {
  "Pediatria": 739,
  "Clínica Médica": 803,
  "Cirurgia": 715,
  "Ginecologia e Obstetrícia": 742,
  "Saúde Coletiva": 719,
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
  "Pediatria|HCPA": 20,
  "Ginecologia e Obstetrícia|HCPA": 20,
  "Cirurgia|HCPA": 20,
  "Clínica Médica|HCPA": 20,
  "Saúde Coletiva|HCPA": 20
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
    "id": "tp2021-48",
    "topography": "1.3",
    "topic": "Laringite",
    "module": "Pediatria",
    "text": "Menino, 1 ano e 6 meses, apresentando há dois dias disfonia, tosse seca de padrão irritativo, com aumento progressivo de intensidade e frequência, e temperatura aferida de 37,5 ºC. Exame físico: bom estado geral com presença de coriza hialina, estridor, taquidispneia, com retração intercostal e subdiafragmática, ausculta pulmonar sem alterações. SatO2 = 97%. A conduta inicial é:",
    "options": [
      "(A) Antibioticoterapia, hidratação, inalação com vasoconstritor.",
      "(B) Hidratação e aspiração de secreções em vias aéreas superiores.",
      "(C) Hidratação, inalação com vasoconstritor e corticoterapia.",
      "(D) Antibioticoterapia, oxigenoterapia, corticoterapia, hidratação."
    ],
    "correctAnswer": 2,
    "explanation": "Quadro clínico de Crupe Viral Aguda (Laringoesofagite/laringite estridulosa) marcada por disfonia, estridor respiratório e desconforto de vias superiores, mas com oximetria excelente (97%). Exige laringificação de urgência com inalação de adrenalina (vasoconstritor) e corticoterapia sistêmica (geralmente dexametasona).",
    "commentary": "O estridor associado à obstrução laringotraqueal alta sugere inflamação glótica de etiologia viral (laringite). Nos quadros de crupe em que há desconforto moderado evidenciado pelas tiragens, as intervenções comprovadamente eficazes são o uso de adrenalina inalatória nebulizada (para redução local rápida da estenose por vasoconstrição capilar) e corticoide de ação prolongada.",
    "reference": "Programa de Atualização em Laringites Agudas — Sociedade Brasileira de Pediatria.",
    "tags": [
      "pneumologia",
      "urgência e emergência"
    ]
  },
  {
    "id": "tp2025-34",
    "topography": "3.1",
    "topic": "Doença celíaca",
    "module": "Clínica Médica",
    "text": "Uma paciente diabética insulino-dependente, de 19 anos, tem histórico de diarreia sem sangue ou pus, distensão abdominal, perda ponderal não quantificada e flatulência iniciadas há 4 meses. Exames solicitados pelo médico do posto de saúde mostraram hematócrito de 25%; hemoglobina de 7g/dL, VCM de 67 e ferritina de 3ng/mL. A pesquisa de gordura fecal quantitativa é de 10g. De acordo com a principal hipótese diagnóstica, o próximo exame deve ser:",
    "options": [
      "(A) Cultura de aspirado do delgado",
      "(B) Dosagem de IgA antitransglutaminase tecidual",
      "(C) Colonoscopia",
      "(D) Trânsito intestinal baritado"
    ],
    "correctAnswer": 1,
    "explanation": "A associação de DM tipo 1 e Doença Celíaca é comum. A anemia ferropriva microcítica marcante refratária e a esteatorreia (gordura fecal de 10g) corroboram a hipótese, devendo-se solicitar anticorpo tTG IgA.",
    "commentary": "A suspeita principal é Doença Celíaca (frequente associação imunológica com DM1), que acomete o epitélio do delgado proximal, prejudicando a absorção de ferro (anemia grave) e nutrientes. O teste sorológico de escolha pela excelente sensibilidade e especificidade é a dosagem de IgA antitransglutaminase tecidual.",
    "reference": "Rubio-Tapia & col. ACG Guidelines: Diagnosis and Management of Celiac Disease. Am J Gastroenterol. 108, 2013.",
    "tags": [
      "gastroenterologia",
      "endocrinologia",
      "parâmetros clínicos"
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
    "id": "tp2026-67",
    "topography": "16",
    "topic": "Feridas",
    "module": "Cirurgia",
    "text": "Mulher de 45 anos, submetida a colecistectomia aberta há cinco dias, apresenta dor persistente e calor local em região de incisão cirúrgica. Exame físico: afebril, normocárdica, normotensa e eupneica. Observa-se hiperemia perilesional, edema e saída de secreção purulenta pelos bordos da ferida. Qual a conduta mais adequada neste momento?",
    "options": [
      "(A) Coletar swab da secreção purulenta para cultura antes de qualquer manipulação local e manter observação clínica.",
      "(B) Solicitar ultrassonografia de parede abdominal para confirmar coleção e iniciar antibioticoterapia sistêmica.",
      "(C) Realizar a abertura de pontos (drenagem) para inspeção da ferida e exploração digital da integridade da aponeurose.",
      "(D) Prescrever compressas mornas e anti-inflamatórios, orientando retorno em 48 horas ou antes, caso surja febre."
    ],
    "correctAnswer": 2,
    "explanation": "Diante de uma infecção de sítio cirúrgico incisional com saída de secreção purulenta, a conduta imediata é a drenagem mediante abertura de pontos da ferida, associada à exploração digital para verificar se há deiscência aponeurótica oculta.",
    "commentary": "O diagnóstico de infecção do sítio cirúrgico (ISC) incisional é clínico, definido pela presença de drenagem purulenta e sinais inflamatórios locais. O tratamento de escolha absoluto é mecânico: abertura dos pontos (drenagem) para esvaziamento e exploração digital cuidadosa da ferida para avaliar a integridade da aponeurose e excluir deiscência profunda. Sobre os distratores: (A) Coleta de swab de ferida aberta tem baixíssimo valor preditivo, pois identifica colonizadores habituais da pele. (B) A ISC é um diagnóstico puramente clínico, não havendo necessidade de ultrassonografia rotineira quando há saída óbvia de pus; além disso, antibióticos sistêmicos só são iniciados em caso de celulite extensa ou repercussão sistêmica, sendo a drenagem a medida principal. (D) Conduta expectante com compressas mornas em vigência de abscesso ou secreção purulenta ativa é negligência.",
    "reference": "TOWNSEND, Courtney M. et al. Sabiston: Tratado de Cirurgia. 21. ed. Rio de Janeiro: Elsevier, 2023. ISBN 978-8535292412.",
    "tags": [
      "infecção de sítio cirúrgico",
      "pós-operatório",
      "complicações"
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
    "id": "tp2022-110",
    "topography": "15",
    "topic": "Estudos epidemiológicos",
    "module": "Saúde Coletiva",
    "text": "Quais tipos de estudos melhor servem para determinar, respectivamente, eficácia de um tratamento e o prognóstico da doença?",
    "options": [
      "(A) Estudo de caso-controle e estudo ecológico.",
      "(B) Estudo de coorte e estudo ecológico.",
      "(C) Estudo de acurácia e ensaio clínico randomizado.",
      "(D) Ensaio clínico randomizado e estudo de coorte."
    ],
    "correctAnswer": 3,
    "explanation": "A melhor pergunta define o melhor desenho de estudo. Para saber se um tratamento funciona (eficácia), o desenho mais confiável é o ensaio clínico randomizado: a randomização distribui de forma equilibrada os fatores de confusão entre os grupos, e a diferença nos desfechos pode ser atribuída ao tratamento.\n\nPara prognóstico, isto é, o que acontece com as pessoas ao longo do tempo depois de adoecerem, o melhor desenho é o estudo de coorte, que acompanha um grupo com a doença e registra os desfechos (complicações, sequelas, óbito), permitindo calcular riscos.",
    "commentary": "Caso-controle e ecológico (A): o caso-controle serve para investigar fatores de risco de doenças raras, partindo de quem já tem o desfecho; o ecológico compara grupos populacionais e não permite conclusões sobre indivíduos.\n\nCoorte e ecológico (B): a coorte é ótima para prognóstico, mas a pergunta pede primeiro a eficácia de tratamento, que é tarefa do ensaio clínico; o ecológico não avalia prognóstico individual.\n\nAcurácia e ensaio clínico (C): estudo de acurácia avalia testes diagnósticos (sensibilidade, especificidade), não tratamentos; e a ordem está invertida em relação à pergunta.",
    "tip": "Tratamento: ensaio clínico randomizado. Prognóstico: coorte. Teste diagnóstico: estudo de acurácia. Doença rara: caso-controle.",
    "reference": "Medicina Baseada em Evidências, Stein e Grade, 2014.",
    "tags": [
      "epidemiologia",
      "bioestatística"
    ]
  },
  {
    "id": "tp2023-15",
    "topography": "5.2",
    "topic": "Infecções na gestação",
    "module": "Ciências Básicas",
    "text": "Gestante de 25 anos, com 2 partos prévios, moradora de zona rural, apresenta sorologia para toxoplasmose com lgG positivo e IgM negativo. Está na décima semana de gestação. Identifique a conduta a ser adotada neste caso:",
    "options": [
      "(A) Tratamento imediato com espiramicina até o parto.",
      "(B) Pesquisa de avidez IgG.",
      "(C) Não é necessário tratamento.",
      "(D) Cordocentese ou PCR de líquido amniótico."
    ],
    "correctAnswer": 2,
    "explanation": "IgG positivo com IgM negativo no primeiro trimestre indica infecção antiga: a gestante já teve contato com o Toxoplasma e está imune. A chance de transmissão fetal em gestante imunocompetente nessa situação é desprezível.\n\nNão há tratamento a fazer nem necessidade de repetir a sorologia; segue-se o pré-natal habitual. A exceção são as gestantes imunossuprimidas (como as que vivem com HIV), em que pode haver reativação.",
    "commentary": "Espiramicina até o parto (A): é indicada na suspeita ou confirmação de infecção aguda materna, para reduzir a transmissão ao feto, o que não é o caso.\n\nAvidez de IgG (B): é usada quando IgG e IgM são positivos, de preferência até 16 semanas, para diferenciar infecção recente de antiga.\n\nCordocentese ou PCR no líquido amniótico (D): investigam infecção fetal depois de diagnosticada infecção aguda na mãe; a PCR por amniocentese é o método usado hoje.",
    "tip": "Toxo: IgG+ e IgM- = imune. Nada a tratar e não repete sorologia (salvo imunossuprimida).",
    "reference": "NEVES, D.P. Parasitologia Humana. 13ª ed. São Paulo: Atheneu, 2016. BRASIL. Protocolo de Notificação e Investigação: Toxoplasmose Gestacional e congênita. Brasília: Ministério da Saúde, 2018.",
    "tags": [
      "infectologia",
      "obstetrícia"
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
    "id": "unifesp2025-66",
    "topography": "5.1",
    "topic": "Câncer de colo uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 48 anos de idade, submeteu-se à histerectomia total abdominal por mioma uterino há 4 meses. Refere ter realizado conização por NIC 3 com margens livres há 8 anos.\n\nSegundo as Diretrizes Brasileiras para o rastreamento do câncer do colo do útero a conduta é:",
    "options": [
      "(A) Descontinuar o exame citológico.",
      "(B) Realizar pesquisa vaginal de HPV 16.",
      "(C) Realizar vaginoscopia anual.",
      "(D) Manter o rastreio colpocitológico trienal."
    ],
    "correctAnswer": 3,
    "explanation": "Pelas Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero, só podem sair do rastreamento as mulheres histerectomizadas por doença benigna sem história de lesão precursora de alto grau ou câncer.\n\nEsta paciente tem antecedente de NIC 3 tratada e mantém risco de neoplasia intraepitelial vaginal. Deve continuar o rastreamento citológico (da cúpula vaginal) no intervalo habitual: trienal, após dois exames anuais negativos.",
    "commentary": "Descontinuar (A): só vale para histerectomia por doença benigna sem antecedente de lesão de alto grau.\n\nHPV 16 vaginal (B): não é a estratégia preconizada pela diretriz baseada em citologia.\n\nVaginoscopia anual (C): não há indicação de exame colposcópico rotineiro sem alteração citológica.",
    "reference": "Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero — INCA, 2016",
    "tags": [
      "ginecologia",
      "rastreamento",
      "câncer do colo do útero",
      "histerectomia"
    ]
  },
  {
    "id": "hosbos2025-10",
    "module": "Cirurgia",
    "text": "O agente anestésico inalatório não indicado em presença de espaços aéreos fechados, como procedimentos laparoscópicos, pneumotórax, obstrução intestinal, operações do ouvido médio ou retina, é o",
    "options": [
      "(A) óxido nitroso.",
      "(B) halotano.",
      "(C) propofol.",
      "(D) etomidato.",
      "(E) tiopental."
    ],
    "correctAnswer": 0,
    "explanation": "O óxido nitroso é cerca de 30 vezes mais solúvel no sangue que o nitrogênio. Ele entra nas cavidades fechadas de gás mais rápido do que o nitrogênio consegue sair, aumentando o volume ou a pressão dessas cavidades.\n\nPor isso é evitado em pneumotórax, obstrução intestinal, pneumoperitônio, cirurgia de ouvido médio e cirurgia de retina com bolha de gás intraocular.",
    "commentary": "Halotano (B): anestésico inalatório halogenado; suas restrições são arritmias e hepatite, não espaços aéreos fechados.\n\nPropofol (C): é um anestésico venoso, não inalatório.\n\nEtomidato (D): venoso; o efeito marcante é a supressão adrenal.\n\nTiopental (E): barbitúrico venoso.",
    "reference": "Miller's Anesthesia, 9ª ed. — Anestésicos inalatórios",
    "tags": [
      "anestesiologia",
      "óxido nitroso",
      "anestésicos inalatórios"
    ]
  },
  {
    "id": "usprp2025-9",
    "topography": "11",
    "topic": "Púrpura de Henoch-Schönlein",
    "module": "Pediatria",
    "text": "Menina de 8 anos, com relato de febre, coriza e odinofagia há 10 dias, que melhoraram espontaneamente. Há 2 dias iniciou dor e edema de tornozelos, há 1 dia com dor abdominal acompanhada de diarreia sanguinolenta e presença de lesões purpúricas em membros inferiores. A avaliação laboratorial mostrou hemograma normal, urina rotina normal e VHS de 27 mm/1 hora (VN< 20mm/1 hora).\n\nQual o diagnóstico mais provável?",
    "options": [
      "(A) Hemofilia A.",
      "(B) Vasculite por IgA.",
      "(C) Lupus eritematoso sistêmico.",
      "(D) Síndrome inflamatória multissistêmica pós COVID."
    ],
    "correctAnswer": 1,
    "explanation": "Escolar com infecção de vias aéreas prévia, seguida de artralgia ou artrite de tornozelos, dor abdominal com sangramento intestinal e púrpura palpável em membros inferiores, com plaquetas normais: vasculite por IgA (púrpura de Henoch-Schönlein).\n\nÉ a vasculite mais comum da infância. A urina normal no momento não exclui nefrite futura: acompanhar com urina e PA por 6 a 12 meses.",
    "commentary": "Hemofilia A (A): causa hemartroses e hematomas, não púrpura palpável nem vasculite.\n\nLúpus (C): raro nessa idade, com citopenias e alterações urinárias frequentes, sem esse padrão.\n\nSIM-P pós-covid (D): febre persistente com choque e marcadores inflamatórios muito elevados; não cursa com púrpura palpável nos membros inferiores.",
    "reference": "Critérios EULAR/PRINTO/PRES para vasculite por IgA / SHARE recommendations (2019)",
    "tags": [
      "pediatria",
      "reumatologia pediátrica",
      "vasculite por IgA",
      "púrpura de Henoch-Schönlein"
    ]
  },
  {
    "id": "hiae2025-46",
    "topography": "5.2",
    "topic": "Hemorragia pós-parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 30 anos, antecedente de hipotireoidismo e hipertensão crônica, encontra-se na\n\nprimeira hora do puerpério de parto vaginal gemelar sob analgesia. O peso dos neonatos foi de 2430 g e 2290 g. Subitamente passa a apresentar sangramento genital em moderada quantidade. Quais medidas iniciais devem ser realizadas?",
    "options": [
      "(A) Misoprostol via retal, ergotamina IM e solicitar balão de tamponamento uterino.",
      "(B) Estimativa de perda sanguínea, avaliação do índice de choque e solicitar ajuda.",
      "(C) Ácido tranexâmico, transfusão sanguínea e ligadura de artérias hipogástricas.",
      "(D) Infusão de ocitocina IV, ergotamina IM e resfriamento abdominal."
    ],
    "correctAnswer": 1,
    "explanation": "Sangramento logo após parto gemelar (fator de risco para atonia): suspeita de hemorragia pós-parto. A abordagem inicial é organizada: estimar a perda sanguínea, calcular o índice de choque (FC/PAS ≥ 0,9 indica perda importante) e pedir ajuda (acionar a equipe e o código de HPP). Em seguida vêm as medidas da 'hora de ouro': massagem uterina, ocitocina, ácido tranexâmico nas primeiras 3 horas e reposição volêmica.",
    "commentary": "Misoprostol, ergotamina e balão (A): medidas de segunda linha; a ergotamina é contraindicada em hipertensas.\n\nTransfusão e ligadura de hipogástricas (C): são etapas avançadas, para casos refratários.\n\nOcitocina, ergotamina e resfriamento (D): a ergotamina é contraindicada (hipertensão crônica) e o resfriamento abdominal não tem papel.",
    "reference": "OPAS — Recomendações assistenciais para prevenção, diagnóstico e tratamento da hemorragia obstétrica (2018)",
    "tags": [
      "obstetrícia",
      "hemorragia pós-parto",
      "índice de choque",
      "atonia uterina"
    ],
    "tip": "HPP: peça ajuda, estime a perda e calcule o índice de choque (≥ 0,9 = alerta)."
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
    "id": "hpp2026-5",
    "topography": "2.1",
    "topic": "DPOC",
    "module": "Clínica Médica",
    "text": "Homem de 68 anos, portador de DPOC grave, procura o pronto atendimento por dispneia intensa, tosse produtiva e sibilância. Saturação periférica de oxigênio é 84% em ar ambiente. Está consciente, em uso de musculatura acessória, mas hemodinamicamente estável. Qual é o dispositivo mais adequado para ofertar oxigênio nesse momento?",
    "options": [
      "Cateter nasal convencional de baixo fluxo.",
      "Cateter nasal em alto fluxo.",
      "Máscara de não reinalação com reservatório.",
      "Máscara de Venturi."
    ],
    "correctAnswer": 3,
    "explanation": "Exacerbação de DPOC grave com hipoxemia (SpO₂ 84%). Esses pacientes podem ter retenção crônica de CO₂, e oxigênio em excesso piora a hipercapnia (alteração da relação ventilação/perfusão e efeito Haldane). O alvo é SpO₂ de 88–92%.\n\nA máscara de Venturi oferece fração inspirada de O₂ fixa e precisa (24%, 28%, 31%…), o que permite titular o oxigênio com segurança. É o dispositivo preferido na exacerbação de DPOC.",
    "commentary": "Cateter nasal de baixo fluxo (A): a FiO₂ varia com a frequência e o padrão respiratório do paciente — num doente taquipneico e com musculatura acessória, a oferta é imprevisível.\n\nCateter nasal de alto fluxo (B): é opção em insuficiência respiratória, mas não é o dispositivo inicial padrão para a exacerbação de DPOC; havendo acidose respiratória, a ventilação de escolha é a VNI.\n\nMáscara não reinalante (C): fornece FiO₂ alta e não controlada, com risco de hiperóxia e hipercapnia.",
    "reference": "GOLD 2025 — Manejo da exacerbação / BTS Guideline for oxygen use in adults",
    "tags": [
      "DPOC",
      "oxigenoterapia",
      "máscara de Venturi",
      "hipercapnia"
    ],
    "tip": "DPOC exacerbado: Venturi, alvo SpO₂ 88–92%."
  },
  {
    "id": "cesupa2025-33",
    "topography": "5.2",
    "topic": "Abortamento",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente com diagnóstico de Mola Hidatiforme, submetida à aspiração a vácuo, sem intercorrências.\n\nQual é o protocolo do seguimento pós molar em relação ao BHCG?",
    "options": [
      "Semanal, negativo por 03 semanas consecutivas, dosá-lo mensalmente por 06 meses.",
      "Quinzenal, negativo em 08 semanas, dosá-lo mensalmente por 01 ano.",
      "Semanal, negativo por 04 semanas consecutivas, dosá-lo por 01 ano.",
      "Quinzenal, negativo por 03 semanas consecutivas, dosá-lo por 06 meses."
    ],
    "correctAnswer": 0,
    "explanation": "Após o esvaziamento da mola hidatiforme, o β-hCG é o marcador para detectar neoplasia trofoblástica gestacional (NTG).\n\nO protocolo brasileiro de seguimento:\n\n• β-hCG semanal até três dosagens negativas consecutivas.\n• Depois, mensal por 6 meses.\n• Contracepção eficaz durante todo o seguimento.\n\nPlatô ou elevação do β-hCG durante o seguimento indica NTG pós-molar e exige investigação e quimioterapia.",
    "commentary": "Quinzenal até negativar em 8 semanas e mensal por 1 ano (B): a dosagem inicial é semanal, e o seguimento mensal após a negativação é de 6 meses no protocolo atual.\n\nSemanal até 4 negativos e por 1 ano (C): bastam 3 dosagens negativas consecutivas; o seguimento de 1 ano é um protocolo antigo.\n\nQuinzenal até 3 negativos e por 6 meses (D): o intervalo inicial correto é semanal.",
    "tip": "Pós-mola: β-hCG semanal até 3 negativos seguidos, depois mensal por 6 meses, com anticoncepção.",
    "reference": "FEBRASGO. Doença trofoblástica gestacional – Protocolo nº 22, 2021. Centro de Referência de Doença Trofoblástica Gestacional.",
    "tags": [
      "mola hidatiforme",
      "doença trofoblástica gestacional",
      "β-hCG"
    ]
  },
  {
    "id": "famema2025-78",
    "topography": "10",
    "topic": "Infecções sexualmente transmissíveis",
    "module": "Saúde Coletiva",
    "text": "As Infecções Sexualmente Transmissíveis (IST) são causadas por vírus, bactérias ou outros microrganismos. Elas são transmitidas, principalmente, por meio do contato sexual (oral, vaginal, anal) sem o uso de camisinha masculina ou feminina, com uma pessoa que esteja infectada. A vacina seria um recurso importante para prevenir essas infecções.\n\nExiste vacina contra a seguinte IST:",
    "options": [
      "tricomoníase.",
      "sífilis.",
      "HIV.",
      "hepatite B."
    ],
    "correctAnswer": 3,
    "explanation": "Entre as IST, existem vacinas contra hepatite B e HPV. A vacina da hepatite B faz parte do calendário (ao nascer e na pentavalente aos 2, 4 e 6 meses) e está disponível no SUS para todas as idades, em 3 doses para adultos não vacinados. A hepatite B é transmitida por via sexual, sanguínea e vertical.",
    "commentary": "Tricomoníase (A): infecção por protozoário, sem vacina; trata-se com metronidazol.\n\nSífilis (B): não há vacina; a prevenção é preservativo, testagem e tratamento com penicilina benzatina.\n\nHIV (C): não há vacina eficaz disponível; a prevenção combinada inclui preservativo, PrEP, PEP e tratamento como prevenção.",
    "tip": "IST com vacina: hepatite B e HPV. (Hepatite A também pode ser sexualmente transmissível e tem vacina.)",
    "reference": "Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com IST, 2022. Calendário Nacional de Vacinação, 2025.",
    "tags": [
      "IST",
      "hepatite B",
      "vacinação"
    ]
  },
  {
    "id": "famema2026-96",
    "topography": "1.1",
    "topic": "AVC",
    "module": "Clínica Médica",
    "text": "Paciente de 64 anos apresenta, há 6 horas, quadro de hemianopsia homônima e hemi-hipoestesia, ambas contralaterais. Em face do exposto, a imagem tomográfica deve evidenciar acometimento de território da artéria cerebral",
    "options": [
      "média direita.",
      "média esquerda.",
      "anterior.",
      "posterior."
    ],
    "correctAnswer": 3,
    "explanation": "Hemianopsia homônima contralateral com hemi-hipoestesia contralateral, sem déficit motor ou afasia: quadro típico de AVC no território da artéria cerebral posterior. Ela irriga o lobo occipital (córtex visual, daí a hemianopsia homônima, muitas vezes com preservação macular) e, por ramos perfurantes, o tálamo (via sensitiva, daí a hipoestesia).",
    "commentary": "Cerebral média direita ou esquerda (A e B): o AVC de cerebral média causa hemiparesia e hipoestesia de predomínio braquiofacial, com afasia (hemisfério dominante) ou negligência (não dominante); pode haver hemianopsia, mas acompanhada de déficit motor.\n\nCerebral anterior (C): causa paresia e hipoestesia de predomínio crural (perna), abulia e incontinência urinária, sem hemianopsia.",
    "tip": "AVC de cerebral posterior: hemianopsia homônima ± hipoestesia (tálamo). Cerebral anterior: perna. Cerebral média: face e braço, afasia ou negligência.",
    "reference": "Caplan LR. Caplan's Stroke: A Clinical Approach, 5ª ed. Ministério da Saúde. Linha de cuidado do AVC no adulto, 2020.",
    "tags": [
      "AVC",
      "artéria cerebral posterior",
      "hemianopsia"
    ]
  },
  {
    "id": "famerp2026-47",
    "topography": "11",
    "module": "Pediatria",
    "text": "A febre é uma das principais queixas nos departamentos de emergências pediátricas.\n\nNa avaliação de um paciente com febre sem sinais localizatórios com idade entre 1 a 3 meses, a definição entre alto e baixo risco de uma infecção bacteriana grave depende dos seguintes exames:",
    "options": [
      "Hemograma, Urinálise",
      "Hemograma, coprocultura e Liquor",
      "Hemograma, hemocultura, Urinalise",
      "Hemograma, Urinálise, Liquor e Raio X de tórax"
    ],
    "correctAnswer": 0,
    "explanation": "Lactentes de 1 a 3 meses com febre sem sinais localizatórios: a classificação de risco para infecção bacteriana grave (critérios de Rochester e similares) combina o estado geral (bom aspecto, previamente hígido, a termo) com exames de triagem — hemograma (leucócitos entre 5.000 e 15.000, bastões < 1.500) e exame de urina (urinálise com até 10 leucócitos por campo). O gabarito considerou esses dois exames como os que definem alto ou baixo risco.\n\nNos protocolos mais recentes, acrescentam-se marcadores inflamatórios (PCR, procalcitonina) e a hemocultura entra na investigação dos casos de risco.",
    "commentary": "Hemograma, coprocultura e líquor (B): coprocultura só se houver diarreia; o líquor é feito em casos de alto risco ou antes de antibiótico, não para classificar o risco.\n\nHemograma, hemocultura e urinálise (C): a hemocultura não fica pronta a tempo para classificar o risco; é exame de investigação, não de triagem.\n\nHemograma, urinálise, líquor e radiografia (D): a radiografia só se houver sintomas respiratórios; líquor não é rotina em baixo risco.",
    "alert": "Questão com nuance: protocolos atuais (AAP 2021, PECARN) usam também PCR e procalcitonina na estratificação e indicam hemocultura e urocultura em grande parte dos lactentes febris. O gabarito oficial é A (critérios de Rochester).",
    "tip": "Febre sem sinais em 1–3 meses (Rochester): bom estado + leucócitos 5–15 mil + urina normal = baixo risco.",
    "reference": "Sociedade Brasileira de Pediatria. Febre sem sinais localizatórios — Documento científico, 2021. Pantell RH et al. AAP Clinical Practice Guideline: Evaluation and Management of Well-Appearing Febrile Infants 8 to 60 Days Old, 2021.",
    "tags": [
      "febre sem sinais localizatórios",
      "lactente",
      "critérios de Rochester",
      "infecção bacteriana grave"
    ]
  },
  {
    "id": "amp2026-33",
    "topography": "5.1",
    "topic": "Climatério e menopausa",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher 51 anos, utilizando DIU-LNG 52 mg há 4 anos, apresenta sintomas vasomotores intensos, alteração do sono e irritabilidade. Sem comorbidades. G1P1 e DUM: 50 anos. Exames físico e complementares sem alterações. Qual seria o melhor tratamento para esta paciente?",
    "options": [
      "Remover DIU-LNG e iniciar estradiol 0,5 mg, oral, contínuo.",
      "Manter DIU-LNG e iniciar testosterona 2mg, gel transdérmico, contínuo.",
      "Manter DIU-LNG e iniciar acetato de noretisterona 35 mcg, oral, contínua.",
      "Manter DIU-LNG e iniciar estradiol 0,5 mg/dose, gel transdérmico, contínuo.",
      "Remover DIU-LNG e iniciar estradiol 1mg com didrogesterona 10mg, oral, cíclico."
    ],
    "correctAnswer": 3,
    "explanation": "Mulher na pós-menopausa recente com sintomas vasomotores intensos e útero, que já usa DIU de levonorgestrel 52 mg: o DIU fornece a proteção endometrial necessária na terapia hormonal. Basta acrescentar estrogênio, e a via transdérmica (gel de estradiol) é preferível por ter menor risco tromboembólico.\n\nO DIU de 52 mg tem eficácia aprovada para proteção endometrial (e contracepção estendida até 8 anos), não precisando ser retirado agora.",
    "commentary": "Remover o DIU e estradiol oral isolado (A): estrogênio sem progestagênio em mulher com útero causa hiperplasia e câncer de endométrio.\n\nTestosterona (B): indicada para desejo sexual hipoativo, não para sintomas vasomotores.\n\nNoretisterona isolada (C): progestagênio isolado tem efeito limitado nos fogachos; e ela já tem progestagênio pelo DIU.\n\nRemover o DIU e terapia oral cíclica (E): seria possível, mas sem vantagem; a terapia transdérmica mantendo o DIU é mais segura e prática.",
    "reference": "FEBRASGO / SOBRAC — Consenso de terapia hormonal da menopausa / NAMS 2022",
    "tags": [
      "terapia hormonal da menopausa",
      "DIU de levonorgestrel",
      "estradiol transdérmico",
      "climatério"
    ],
    "tip": "Útero + DIU-LNG: basta acrescentar estradiol (de preferência transdérmico)."
  },
  {
    "id": "amrigs2025-70",
    "module": "Pediatria",
    "text": "Criança de 4 anos, no transoperatório de adenoidectomia, faz hipertermia de 41°C e apresenta baixo débito cardíaco. Imediatamente, é administrado dantrolene, pois inferiu-se corretamente que o gatilho foi:",
    "options": [
      "Translocação bacteriana.",
      "Infarto agudo do miocárdio.",
      "Hipertermia maligna pelo uso de succinilcolina.",
      "Sangramento nasal, em decorrência de Coagulação Intravascular Disseminada (CIVD)."
    ],
    "correctAnswer": 2,
    "explanation": "Hipertermia grave durante a anestesia, com instabilidade hemodinâmica e resposta ao dantrolene, caracteriza hipertermia maligna: doença farmacogenética (mutação do receptor de rianodina, RYR1) disparada por anestésicos inalatórios halogenados e succinilcolina, com liberação descontrolada de cálcio no músculo esquelético. Sinais precoces: aumento do CO₂ expirado, taquicardia, rigidez e, depois, hipertermia.",
    "commentary": "Translocação bacteriana (A): não causa hipertermia de 41 °C em minutos no transoperatório nem responde ao dantrolene.\n\nInfarto agudo do miocárdio (B): não explica hipertermia e é raríssimo em criança.\n\nCIVD por sangramento nasal (D): a CIVD pode ser complicação tardia da hipertermia maligna, não seu gatilho.",
    "reference": "Sociedade Brasileira de Anestesiologia — Hipertermia maligna / MHAUS guidelines",
    "tags": [
      "hipertermia maligna",
      "succinilcolina",
      "dantrolene",
      "anestesia"
    ],
    "tip": "Hipertermia + rigidez + CO₂ subindo na anestesia = hipertermia maligna: dantrolene."
  },
  {
    "id": "amrigs2026-97",
    "module": "Saúde Coletiva",
    "text": "Em um ensaio clínico randomizado sobre uso de estatinas em prevenção primária, 15% dos pacientes do grupo controle passaram a tomar estatina por conta própria. Os autores mantiveram esses pacientes no grupo original da randomização. É correto afirmar que essa decisão:",
    "options": [
      "Introduz viés de aferição.",
      "Distorce os resultados, tornando-os estatisticamente nulos.",
      "É compatível com a análise por intenção de tratar.",
      "Exige reclassificação dos pacientes por grupo de exposição real."
    ],
    "correctAnswer": 2,
    "explanation": "Manter cada participante no grupo para o qual foi randomizado, independentemente da adesão (inclusive quem trocou de tratamento por conta própria), é a análise por intenção de tratar. Ela preserva os benefícios da randomização e reflete a efetividade no mundo real, embora tenda a subestimar o efeito.",
    "commentary": "Viés de aferição (A): refere-se a erro na medida do desfecho, não à análise por grupo.\n\nTorna os resultados nulos (B): a contaminação dilui o efeito, mas não anula o resultado.\n\nReclassificação pela exposição real (D): isso seria análise por protocolo/as-treated, que quebra a randomização.",
    "reference": "CONSORT Statement (2010) / Fletcher — Epidemiologia Clínica",
    "tags": [
      "intenção de tratar",
      "ensaio clínico randomizado",
      "análise por protocolo"
    ],
    "tip": "Intenção de tratar: analisa como randomizou."
  },
  {
    "id": "cerman2026-6",
    "topography": "8",
    "topic": "Diabetes mellitus tipo 1 e 2",
    "module": "Clínica Médica",
    "text": "Paciente com diabetes mellitus tipo 2 e HbA1c 9,8% após metformina em dose máxima. Próxima medida mais indicada:",
    "options": [
      "(A) Continuar apenas com metformina e reavaliar em 6 meses.",
      "(B) Não tratar, orientar dieta apenas.",
      "(C) Suspender metformina e iniciar sulfonilureia exclusiva.",
      "(D) Adicionar segunda droga — considerar insulina ou agente hipoglicemiante injetável/oral conforme perfil."
    ],
    "correctAnswer": 3,
    "explanation": "HbA1c de 9,8% com metformina em dose máxima: a meta não foi atingida e é preciso intensificar o tratamento acrescentando um segundo agente. A escolha depende do perfil: iSGLT2 ou agonista de GLP-1 se houver doença cardiovascular, insuficiência cardíaca ou renal, ou obesidade; insulina se houver sintomas de catabolismo ou HbA1c muito alta.",
    "commentary": "Manter só metformina por 6 meses (A): é inércia terapêutica; a reavaliação deve ser a cada 3 meses, com intensificação.\n\nSó dieta (B): a hiperglicemia precisa de tratamento farmacológico.\n\nTrocar metformina por sulfonilureia (C): a metformina é mantida como base; a sulfonilureia isolada tem risco de hipoglicemia e ganho de peso.",
    "reference": "Diretriz da Sociedade Brasileira de Diabetes (2024) — Tratamento farmacológico do DM2",
    "tags": [
      "diabetes mellitus tipo 2",
      "intensificação do tratamento",
      "metformina",
      "hemoglobina glicada"
    ]
  },
  {
    "id": "enare2025-28",
    "module": "Cirurgia",
    "text": "Um paciente de 58 anos foi submetido a uma gastrectomia subtotal devido a um adenocarcinoma gástrico. Após a cirurgia, ele desenvolveu episódios frequentes de sudorese, palpitações, tonturas e diarreia após as refeições.\n\nEssa complicação pós-operatória está relacionada:",
    "options": [
      "ao desenvolvimento de diabetes mellitus tipo 2",
      "a uma trombose venosa profunda",
      "à síndrome de dumping",
      "ao aumento da densidade óssea",
      "à presença de úlcera alcalina"
    ],
    "correctAnswer": 2,
    "explanation": "Após gastrectomia (perda do piloro e do reservatório gástrico), o alimento hiperosmolar chega rapidamente ao delgado. Na síndrome de dumping precoce (15–30 minutos após a refeição), o deslocamento de líquido para a luz intestinal e a liberação de peptídeos vasoativos causam sudorese, palpitações, tontura, rubor, cólica e diarreia. No dumping tardio (1–3 horas), ocorre hipoglicemia reativa por pico de insulina. O tratamento é dietético: refeições pequenas e frequentes, pobres em carboidratos simples, sem líquidos junto às refeições; octreotida nos refratários.",
    "commentary": "Diabetes tipo 2 (A): não é complicação da gastrectomia; no dumping tardio ocorre hipoglicemia, não hiperglicemia persistente.\n\nTrombose venosa profunda (B): complicação pós-operatória geral, sem relação com sintomas pós-prandiais.\n\nAumento da densidade óssea (D): a gastrectomia leva a osteopenia por má absorção de cálcio e vitamina D, não ao aumento da densidade.\n\nÚlcera alcalina (E): a gastrite por refluxo alcalino (biliar) causa dor epigástrica e vômitos biliosos, não sintomas vasomotores pós-prandiais.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Sabiston – Tratado de Cirurgia, 21ª ed.; Colégio Brasileiro de Cirurgia Digestiva",
    "tags": [
      "síndrome de dumping",
      "gastrectomia",
      "complicações pós-operatórias",
      "câncer gástrico"
    ],
    "tip": "Dumping precoce: sintomas vasomotores e diarreia 15–30 min após comer; tardio: hipoglicemia em 1–3 h."
  },
  {
    "id": "fubog2025-16",
    "module": "Cirurgia",
    "text": "Sobre fraturas ósseas, é CORRETO afirmar:",
    "options": [
      "A necrose asséptica é uma complicação precoce associada a fraturas",
      "Fraturas por estresse representam o estágio final das lesões por estresse nos ossos",
      "A formação do calo ósseo ocorre no estágio inicial da consolidação da fratura",
      "A pseudoartrose é uma complicação imediata das fraturas"
    ],
    "correctAnswer": 1,
    "explanation": "As lesões ósseas por estresse formam um contínuo: reação de estresse (edema ósseo) → fratura por estresse, que é o estágio final, quando a carga repetitiva supera a capacidade de remodelação do osso. Quanto às demais: o calo ósseo forma-se na fase de reparação, após a fase inflamatória; necrose avascular e pseudoartrose são complicações tardias.",
    "commentary": "Necrose asséptica como complicação precoce (A): é complicação tardia (meses), como na cabeça femoral e no escafoide.\n\nCalo ósseo no estágio inicial (C): a fase inicial é a inflamatória (hematoma); o calo se forma depois, na fase de reparação.\n\nPseudoartrose como complicação imediata (D): é a falta de consolidação após o tempo esperado, complicação tardia.",
    "reference": "Rockwood and Green's Fractures in Adults, 9ª ed.; SBOT",
    "tags": [
      "fraturas",
      "fratura por estresse",
      "consolidação óssea",
      "ortopedia"
    ],
    "tip": "Fases da consolidação: inflamatória → reparação (calo) → remodelação."
  },
  {
    "id": "fubog2025-84",
    "module": "Saúde Coletiva",
    "text": "Sobre a criação do Sistema Único de Saúde (SUS) na Constituição Federal de 1988, é CORRETO afirmar que:",
    "options": [
      "Foi criado exclusivamente para atender trabalhadores formais e seus dependentes",
      "Foi criado para substituir o Sistema Nacional de Previdência Social (SINPAS)",
      "Foi criado com base nos princípios de universalização, equidade e descentralização",
      "Foi criado para centralizar todas as ações de saúde no âmbito federal"
    ],
    "correctAnswer": 2,
    "explanation": "A Constituição de 1988 criou o SUS como sistema público, universal, fundado nos princípios de universalidade, integralidade e equidade, e organizado pelas diretrizes de descentralização (com direção única em cada esfera), regionalização e hierarquização e participação da comunidade. A alternativa C, que cita universalização, equidade e descentralização, é a correta.",
    "commentary": "Exclusivo para trabalhadores formais (A): esse era o modelo previdenciário do INAMPS; o SUS é universal.\n\nCriado para substituir o SINPAS (B): o SUS absorveu o INAMPS, mas não foi criado com o objetivo de substituir o SINPAS; seu propósito é garantir a saúde como direito de todos.\n\nCentralizar no âmbito federal (D): a diretriz é a descentralização.",
    "reference": "Constituição Federal de 1988, arts. 196 a 200; Lei nº 8.080/1990",
    "tags": [
      "SUS",
      "constituição federal",
      "princípios do SUS",
      "legislação do SUS"
    ],
    "tip": "SUS: universalidade, integralidade e equidade; descentralização, regionalização/hierarquização e participação social."
  },
  {
    "id": "viv2026-39",
    "module": "Pediatria",
    "text": "A cardiopatia congênita cianótica em que a aorta se origina do ventrículo direito e a artéria pulmonar do ventrículo esquerdo, criando circulações paralelas incompatíveis com a vida sem um shunt, é:",
    "options": [
      "Atresia Tricúspide",
      "Tetralogia de Fallot",
      "Transposição das Grandes Artérias (TGA)",
      "Truncus Arteriosus"
    ],
    "correctAnswer": 2,
    "explanation": "Na transposição das grandes artérias, a aorta nasce do ventrículo direito e a artéria pulmonar do ventrículo esquerdo, formando circulações em paralelo. A sobrevida depende de mistura entre elas (forame oval, canal arterial ou CIV). É a cardiopatia cianótica mais comum no recém-nascido; o tratamento inicial é prostaglandina E1 e, se necessário, atriosseptostomia (Rashkind), seguida da cirurgia de Jatene.",
    "commentary": "Atresia tricúspide (A): ausência da valva tricúspide, com hipoplasia do VD e dependência de CIA e CIV.\n\nTetralogia de Fallot (B): CIV, estenose pulmonar, aorta cavalgada e hipertrofia de VD; as artérias estão na posição normal.\n\nTruncus arteriosus (D): um único tronco arterial que dá origem à aorta e às pulmonares.",
    "reference": "Nelson – Tratado de Pediatria, 21ª ed.; Sociedade Brasileira de Cardiologia",
    "tags": [
      "transposição das grandes artérias",
      "cardiopatias congênitas cianóticas",
      "cardiologia pediátrica"
    ],
    "tip": "TGA: circulações paralelas; prostaglandina e Rashkind até a cirurgia de Jatene."
  },
  {
    "id": "viv2026-95",
    "module": "Saúde Coletiva",
    "text": "A medida de associação tipicamente obtida em estudos de caso-controle, que estima quantas vezes a chance de exposição é maior nos doentes em comparação aos não doentes, é:",
    "options": [
      "Odds Ratio (Razão de Chances)",
      "Risco Relativo",
      "Risco Atribuível",
      "Razão de Prevalência"
    ],
    "correctAnswer": 0,
    "explanation": "Nos estudos caso-controle, que partem do desfecho e comparam a exposição prévia entre doentes (casos) e não doentes (controles), a medida de associação é a razão de chances (odds ratio): quantas vezes a chance de exposição é maior entre os casos que entre os controles. Em doenças raras, aproxima-se do risco relativo.",
    "commentary": "Risco relativo (B): obtido em coortes e ensaios clínicos, que medem incidência.\n\nRisco atribuível (C): diferença de incidência entre expostos e não expostos, também de coortes.\n\nRazão de prevalência (D): medida típica de estudos transversais.",
    "reference": "Medronho RA. Epidemiologia, 2ª ed.",
    "tags": [
      "odds ratio",
      "estudo caso-controle",
      "medidas de associação",
      "epidemiologia"
    ],
    "tip": "Caso-controle → OR. Coorte → RR. Transversal → razão de prevalência."
  }
];
