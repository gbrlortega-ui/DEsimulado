// Arquivo gerado por `npm run gen` a partir do banco de questões. Não editar à mão.
// O build e o servidor local regeneram este arquivo sozinhos; o `npm run validate` acusa se ficar desatualizado.
import type { Question } from '../types';

export const TOTAL_QUESTIONS = 3779;

export const COUNT_BY_AREA: Record<string, number> = {
  "Pediatria": 719,
  "Clínica Médica": 783,
  "Cirurgia": 695,
  "Ginecologia e Obstetrícia": 722,
  "Saúde Coletiva": 699,
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
  "Saúde Coletiva|FMJ": 15
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
    "id": "tp2021-47",
    "topography": "4.1",
    "topic": "Síndrome nefrótica",
    "module": "Pediatria",
    "text": "Menino, 5 anos, acorda pela manhã e a mãe observa o aparecimento de edema facial, marcadamente bipalpebral. Evolui com edema generalizado, acometendo os membros inferiores e parede do abdômen ao longo da semana. Refere diminuição da diurese sem outras alterações urinárias. Nega doenças anteriores. Exame físico: PA entre percentil 50 e 90 para a idade, sexo e percentil de altura. As alterações laboratoriais esperadas são:",
    "options": [
      "(A) Hematúria e cilindros hemáticos em Urina tipo 1 (EAS).",
      "(B) Proteinúria maciça e colesterol total e frações aumentadas.",
      "(C) Consumo de complemento C3 e complemento total CH50.",
      "(D) Antiestreptolisina (ASLO) aumentada e hematúria."
    ],
    "correctAnswer": 1,
    "explanation": "A instalação insidiosa de edema generalizado (anasarca) associada a níveis tensionais normais em pré-escolar é o protótipo clínico da Síndrome Nefrótica Idiopática (geralmente por doença de lesão mínima). Laboratorialmente, caracteriza-se por proteinúria massiva e hipercolesterolemia com hipoalbuminemia.",
    "commentary": "O quadro clínico descreve paciente com fenótipo sugestivo de Síndrome Nefrótica. A proteinúria intensa leva a hipoalbuminemia acentuada, a qual reduz a pressão oncótica capilar gerando edema volumoso. Em resposta, há aumento reflexo da síntese hepática de lipoproteínas, elevando sobremaneira o colesterol urinário e circulante. Hematúria e consumo de complemento apontariam para diagnóstico nefrítico.",
    "reference": "Nefrologia Pediátrica - Prática Clínica, SBP.",
    "tags": [
      "nefrologia"
    ]
  },
  {
    "id": "tp2025-31",
    "topography": "4.1",
    "topic": "Doença renal crônica",
    "module": "Clínica Médica",
    "text": "Homem de 58 anos, portador de doença renal crônica estágio 5, dá entrada na emergência com dispneia intensa, edema generalizado e náuseas. Exames: potássio 7,0mEq/L; ureia 192mg/dL, creditiantina 8,5mg/dL e ECG ritmo sinusal, normal. A conduta indicada para este paciente é:",
    "options": [
      "(A) Restrição hídrica rigorosa e uso de furosemida em altas doses.",
      "(B) Iniciar hemodiálise de emergência.",
      "(C) Administração de gluconato de cálcio, insulina e glicose.",
      "(D) Expansão volêmica, bicarbonato e repetir exames."
    ],
    "correctAnswer": 1,
    "explanation": "O paciente apresenta indicações clássicas de diálise de urgência (hipercalemia grave de 7,0 mEq/L, sobrecarga volêmica refratária com dispneia importante, além de uremia sintomática com náuseas).",
    "commentary": "O paciente com doença renal crônica terminal (estágio 5) apresenta critérios inequívocos de urgência dialítica. Embora medidas de deslocamento interno do potássio (insulina, glicose) e estabilização de membrana (gluconato de cálcio) sejam temporariamente válidas para evitar arritmias em hipercalemia grave, elas não resolvem a sobrecarga hídrica nem a uremia severa, tornando a hemodiálise de emergência a conduta definitiva e imediata indicada.",
    "reference": "KDIGO Clinical Practice Guideline for Acute Kidney Injury. UpToDate, 2023.",
    "tags": [
      "nefrologia",
      "emergência"
    ]
  },
  {
    "id": "tp2024-74",
    "topography": "1.2",
    "topic": "Ceratite",
    "module": "Cirurgia",
    "text": "Soda cáustica no olho. Dor intensa, vermelhidão e baixa visão. Qual a conduta?",
    "options": [
      "(A) Antibiótico tópico e endovenoso e chamar oftalmo.",
      "(B) Encaminhamento urgente cirúrgico.",
      "(C) Antibiótico tópico e retorno em 15 dias.",
      "(D) Lavagem intensa com soro fisiológico e encaminhamento ao oftalmologista."
    ],
    "correctAnswer": 3,
    "explanation": "Soda cáustica é um álcali, e queimaduras oculares por álcali são as mais graves, porque o produto saponifica as membranas celulares e continua penetrando na córnea e nas estruturas internas do olho enquanto houver contato. Dor intensa, hiperemia, baixa da visão e ceratite grave mostram lesão importante.\n\nA conduta imediata, antes de qualquer outra coisa, é irrigação abundante e prolongada com soro fisiológico (ou água limpa, se não houver soro), com o olho aberto e removendo partículas dos fundos de saco, até neutralizar o pH da superfície. Depois, usam-se colírio antibiótico e lubrificante para proteger a córnea enquanto ela reepiteliza, e o paciente é encaminhado ao oftalmologista para avaliação da extensão da lesão.",
    "commentary": "Internação com antibiótico tópico e endovenoso (A): antibiótico venoso não tem papel, e chamar o oftalmologista sem antes irrigar deixa o álcali agir por mais tempo.\n\nEncaminhamento cirúrgico urgente (B): a lesão aguda não é cirúrgica de imediato; o que define o prognóstico é a irrigação feita no primeiro atendimento.\n\nColírio antibiótico e retorno em 15 dias (C): sem irrigação e sem seguimento próximo, a queimadura progride e pode levar a perda visual.",
    "tip": "Queimadura química no olho, sobretudo por álcali: irrigar muito, já, antes de qualquer exame; depois oftalmologista.",
    "reference": "Oftalmologia Geral - Vaughan & Asbury, 17ª ed.",
    "tags": [
      "oftalmologia",
      "emergência"
    ]
  },
  {
    "id": "tp2021-80",
    "topography": "1.5",
    "topic": "Nódulos tireoidianos",
    "module": "Cirurgia",
    "text": "Homem, 60 anos, apresentou em ultrassom de carótidas um nódulo de 1 cm de diâmetro no lobo direito da tireoide, de aspecto sólido e hipoecogênico, com bordas irregulares e microcalcificações. Tem exames de sangue recentes sem alterações, com dosagens de TSH e T4 livre normais. A próxima conduta deve ser:",
    "options": [
      "(A) Repetir a ultrassom de tireoide em seis meses.",
      "(B) Solicitar cintilografia de tireoide.",
      "(C) Indicar lobectomia tireoidiana à direita.",
      "(D) Fazer punção aspirativa com agulha fina do nódulo (PAAF)."
    ],
    "correctAnswer": 3,
    "explanation": "Nódulo de tireoide eutireoidiano medindo 1,0 cm com padrões de alta classificação de risco (TIRADS V/VI - hipoecoico, limites irregulares e microcalcificações) indica a feitura imediata de punção aspirativa por agulha fina (PAAF) guiada por USG.",
    "commentary": "Nódulo de 1,0 cm de diâmetro com padrões ultrassonográficos suspeitos (formato sólido, hipoecogênico, limites microlobulados ou irregulares e com presença de microcalcificações de cálcio pontual) manifesta critérios diagnósticos consistentes com malignização (carcinoma papilífero de tireoide). Em pacientes eutireoidianos (com TSH e hormônios tieroidenos devidamente em faixa normal), a imediata investigação citológica por Punção Aspirativa com Agulha Fina (PAAF) dirigida é soberana. O rastreio por cintilografia é restrito a nódulos quentes ou hiperfuncionantes em vigência de TSH suprimido. Esperar seis meses ou lobectomia cirúrgica direta prévia sem estudo citopatológico são imprudentes.",
    "reference": "Towsend, CM; Beauchamp, RD; Evans, BM; Sabiston - Tratado de Cirurgia, 20ª edição, Editora Guanabara-Koogan, 2019.",
    "tags": [
      "cabeça e pescoço",
      "endocrinologia",
      "oncologia"
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
    "id": "tp2021-96",
    "topography": "15",
    "topic": "Saúde da mulher",
    "module": "Ginecologia e Obstetrícia",
    "text": "Adolescente, 15 anos, na 10ª semana de gravidez resultante de violência sexual, não deseja manter a gravidez. Vem à consulta acompanhada pelos pais. Para a interrupção legal desta gestação é necessário:",
    "options": [
      "(A) Autorização expedida pelo juiz da comarca de residência.",
      "(B) Solicitação assinada pela paciente e representante legal.",
      "(C) Laudo pericial do exame de corpo delito expedido pelo IML.",
      "(D) Boletim de ocorrência lavrado pela autoridade policial."
    ],
    "correctAnswer": 1,
    "explanation": "Pelas normas diretivas e leis penais brasileiras, a interrupção da gravidez fruto de abuso ou estupro (violento/vulnerável) independe de alvarás judiciais, registros policiais prévios de boletins de ocorrência ou atestados legistas periciais do Instituto Médico Legal (IML). O único documento de elegibilidade e autonomia obrigatório é o Termo de Consentimento Livre e Esclarecido assinado pela paciente acompanhada perante o seu representante ou responsável legal.",
    "commentary": "A legislação nacional e as normativas de violência sexual preconizadas pelo Ministério da Saúde estabelecem que a palavra do doente presencial é soberana e suficiente para caracterizar e assegurar a violência contra a maturidade da mulher. Caberá à equipe multiprofissional (médico, psicólogo, enfermeiro e assistente social) ratificar a compatibilidade evolutiva da idade gestacional e o termo assinado, prosseguindo com o abortamento legal na rede pública garantida, sem necessidade de burocracias externas ou alvarás.",
    "reference": "Norma Técnica de Prevenção e Tratamento dos Agravos Resultantes da Violência Sexual contra Mulheres e Adolescentes, Ministério da Saúde, 3ª ed (2012).",
    "tags": [
      "obstetrícia",
      "aborto legal",
      "violência sexual"
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
    "id": "tp2019-118",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "Quanto aos segmentos sociais que compõem o Conselho Nacional de Saúde (CNS), a alternativa correta de acordo com a lei 8.142/90 é:",
    "options": [
      "(A) 50% de usuário do SUS, 30% de trabalhadores do SUS e 20% de gestores/prestadores de serviço de saúde.",
      "(B) 30% de usuário do SUS, 30% de trabalhadores do SUS e 40% de gestores/prestadores de serviço de saúde.",
      "(C) 25% de usuário do SUS, 25% de trabalhadores do SUS e 50% de gestores/prestadores de serviço de saúde.",
      "(D) 50% de usuário do SUS, 25% de trabalhadores do SUS e 25% de gestores/prestadores de serviço de saúde."
    ],
    "correctAnswer": 3,
    "explanation": "A Lei 8.142/1990 estabelece a paridade nos conselhos de saúde: 50% de representantes de usuários e 50% divididos entre os demais segmentos — 25% de trabalhadores da saúde e 25% de gestores e prestadores.",
    "commentary": "As demais distribuições não respeitam a paridade dos usuários.",
    "reference": "Página do Conselho Nacional de Saúde – ministério da saúde, https://conselho.saude.gov.br/apresentacao/composicao.htm Lei 8.142/90, 28/12/90 / Instituto de Métrica e Avaliação em Saúde. Estudo de Carga de Doença Global: gerando evidências, informando políticas de saúde. Seattle, WA: IHME, 2013.",
    "tags": [
      "saúde coletiva",
      "SUS",
      "controle social"
    ]
  },
  {
    "id": "tp2019-1",
    "module": "Ciências Básicas",
    "text": "Paciente alcoolista e sem-teto queixa-se que seus dentes estão soltos e as gengivas sangram com facilidade. Suspeita-se que ele tenha uma dieta pobre e que pode ter escorbuto (deficiência de vitamina C). O escorbuto é caracterizado por um defeito na hidroxilação de prolina.\n\nDos componentes químicos abaixo, o relacionado com esta condição é:",
    "options": [
      "(A) Fibronectina",
      "(B) Elastina",
      "(C) Ácido hialurônico",
      "(D) Colágeno"
    ],
    "correctAnswer": 3,
    "explanation": "A vitamina C é cofator das enzimas prolil e lisil-hidroxilases, essenciais para a hidroxilação dos resíduos de prolina e lisina do colágeno. Sem ela, a tripla hélice fica instável e o colágeno, frágil.\n\nIsso explica os sinais do escorbuto: sangramento gengival, perda dentária, hemorragias perifoliculares e má cicatrização.",
    "commentary": "Fibronectina, elastina e ácido hialurônico são componentes da matriz extracelular, mas não dependem da hidroxilação de prolina mediada pela vitamina C.",
    "reference": "Junqueira LC & Carneiro J. Biologia Celular e Molecular - Biologia da Interação Célula-Matriz Extracelular. 8 ed. Guanabara Koogan, 2005, pag. 229-238.",
    "tags": [
      "bioquímica",
      "vitaminas",
      "colágeno"
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
    "id": "unifesp2025-43",
    "topography": "15",
    "topic": "Vigilância epidemiológica",
    "module": "Saúde Coletiva",
    "text": "Criança, 10 anos de idade, refugiada, é atendida no pronto-socorro apresentando febre e deficiência motora flácida de início súbito. A situação vacinal é ignorada.\n\nConsiderando a(s) hipótese(s) diagnóstica(s) mais provável(eis), a conduta adequada neste momento, em relação à vigilância epidemiológica, é notificar o caso às autoridades de saúde:",
    "options": [
      "(A) Após resultado positivo da cultura de líquor.",
      "(B) Após resultado positivo da cultura de fezes.",
      "(C) Em até 24 horas após o atendimento.",
      "(D) Após resultado positivo da cultura de fezes e líquor."
    ],
    "correctAnswer": 2,
    "explanation": "Criança com paralisia flácida aguda (PFA) e situação vacinal desconhecida. Todo caso de PFA em menor de 15 anos é de notificação compulsória imediata, por ser a estratégia de vigilância da poliomielite, que tem risco de reintrodução no Brasil pela baixa cobertura vacinal e pela migração.\n\nA notificação deve ser feita em até 24 horas, com coleta de fezes até o 14º dia do déficit. Não se espera confirmação laboratorial: notificar é obrigatório diante da suspeita.",
    "commentary": "Após cultura de líquor (A): a notificação não depende de resultado laboratorial.\n\nApós cultura de fezes (B): a amostra de fezes é colhida para investigação, mas a notificação é imediata, diante da suspeita.\n\nApós fezes e líquor (D): mesmo erro — notificação compulsória imediata não aguarda exames.",
    "reference": "Guia de Vigilância em Saúde — Ministério da Saúde, 2024 (Poliomielite/Paralisia flácida aguda)",
    "tags": [
      "vigilância epidemiológica",
      "paralisia flácida aguda",
      "poliomielite",
      "notificação compulsória"
    ]
  },
  {
    "id": "hosbos2027-55",
    "topography": "5.2",
    "topic": "Assistência ao parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Embora a distocia de ombro apresente risco adicional pela macrossomia fetal, mais de 50% dos casos ocorrem em RN de peso normal e não pode ser prevista. Desse modo, é essencial que o profissional médico esteja apto em executar, habilmente, as manobras para desimpactar o ombro e tenha cuidados efetivos.\n\nAssinale a alternativa que representa a primeira conduta a ser realizada para a resolução de distocia de ombro.",
    "options": [
      "(A) Manobra de Gaskin.",
      "(B) Manobra de McRoberts com pressão supra púbica.",
      "(C) Manobra de Zavanelli;",
      "(D) Manobra de Jacquemier.",
      "(E) Manobra de Rubin II e Wood."
    ],
    "correctAnswer": 1,
    "explanation": "Diante da distocia de ombro, a primeira medida (sequência ALEERTA/HELPERR) é chamar ajuda e realizar a manobra de McRoberts (hiperflexão das coxas sobre o abdome), associada à pressão suprapúbica (manobra de Rubin I).\n\nAs duas juntas resolvem a maioria dos casos. Depois vêm as manobras rotacionais (Rubin II, Woods), a retirada do braço posterior (Jacquemier), a posição de quatro apoios (Gaskin) e, como último recurso, Zavanelli.",
    "commentary": "Gaskin (A): pode ser usada, mas não é a primeira conduta padronizada.\n\nZavanelli (C): recolocação do polo cefálico para cesárea, último recurso.\n\nJacquemier (D): retirada do braço posterior, manobra de segunda linha.\n\nRubin II e Woods (E): manobras rotacionais internas, tentadas após falha de McRoberts com pressão suprapúbica.",
    "reference": "RCOG Green-top Guideline 42 (Shoulder Dystocia) / ACOG Practice Bulletin 178",
    "tags": [
      "obstetrícia",
      "distocia de ombro",
      "manobra de McRoberts"
    ]
  },
  {
    "id": "hosbos2025-85",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "Considerando recomendações da Organização Mundial de Saúde e visando à melhoria dos serviços, o aumento da resolutividade e o incremento de diferentes opções preventivas e terapêuticas no SUS, o Ministério da Saúde aprovou a Política Nacional de Práticas Integrativas e Complementares, que inclui, dentre outras terapias, a",
    "options": [
      "(A) homeopatia, a fitoterapia e a cromoterapia.",
      "(B) homeopatia, a acupuntura e a apiterapia.",
      "(C) fitoterapia, o termalismo social e a crenoterapia.",
      "(D) acupuntura, o Reiki e a aromoterapia.",
      "(E) cristaloterapia, a terapia do som e a acupuntura."
    ],
    "correctAnswer": 2,
    "explanation": "A Política Nacional de Práticas Integrativas e Complementares (PNPIC, 2006) incluiu inicialmente medicina tradicional chinesa/acupuntura, homeopatia, plantas medicinais e fitoterapia, termalismo social/crenoterapia e medicina antroposófica. Em 2017 e 2018 foram acrescentadas outras práticas (arteterapia, ayurveda, meditação, reiki, aromaterapia, apiterapia, cromoterapia, bioenergética etc.), totalizando 29.\n\nA alternativa C reúne práticas da PNPIC original, sem nenhum item fora da política; a banca a considerou a correta.",
    "commentary": "Homeopatia, fitoterapia e cromoterapia (A): todas hoje fazem parte da PNPIC (a cromoterapia desde 2018), mas a banca considerou só a combinação da política original.\n\nHomeopatia, acupuntura e apiterapia (B): a apiterapia entrou em 2018; mesma observação.\n\nAcupuntura, reiki e aromaterapia (D): reiki (2017) e aromaterapia (2018) foram incorporadas depois.\n\nCristaloterapia e terapia do som (E): não integram a PNPIC.",
    "reference": "Ministério da Saúde — Política Nacional de Práticas Integrativas e Complementares no SUS (Portarias nº 971/2006, 849/2017 e 702/2018)",
    "tags": [
      "PNPIC",
      "práticas integrativas",
      "SUS"
    ],
    "alert": "Gabarito discutível: após as ampliações de 2017 e 2018, as práticas citadas em A, B e D também passaram a integrar a PNPIC; a banca considerou apenas a combinação da política original de 2006."
  },
  {
    "id": "susba2025-4",
    "topography": "3.1",
    "topic": "Hemorragia digestiva alta",
    "module": "Clínica Médica",
    "text": "Homem, 62 anos de idade, portador de hepatite C crônica, comparece ao Pronto-Socorro com hematêmese volumosa e melena há três dias. O paciente apresenta-se ictérico, com PA: 90x60mmHg, FR: 115bpm e confusão mental. Ao exame, há ascite moderada. A avaliação laboratorial revela hemoglobina de 5,8g/dL, plaquetas de 70.000/mm³, RNI: 2,5.\n\nConsiderando o caso descrito, a conduta imediata mais adequada envolve:",
    "options": [
      "(A) Iniciar terlipressina e ceftriaxone intravenosos.",
      "(B) Infusão de albumina e noradrenalina.",
      "(C) Passagem do balão de Sengstaken-Blakemore.",
      "(D) Endoscopia digestiva alta com ligadura elástica."
    ],
    "correctAnswer": 0,
    "explanation": "Cirrótico por hepatite C com hematêmese volumosa, melena, hipotensão, taquicardia, encefalopatia, ascite e Hb 5,8 g/dL: hemorragia digestiva alta varicosa grave (Child-Pugh C).\n\nAlém da reanimação (via aérea, acessos, transfusão restritiva com alvo de Hb 7–8 g/dL), na suspeita de sangramento varicoso deve-se iniciar imediatamente um vasoconstritor esplâncnico (terlipressina, octreotida ou somatostatina) e antibiótico profilático (ceftriaxona 1 g/dia por até 7 dias), que reduz infecção, ressangramento e mortalidade. A endoscopia vem depois, nas primeiras 12 horas, com o paciente estabilizado.",
    "commentary": "Albumina e noradrenalina (B): combinação usada na síndrome hepatorrenal, não na hemorragia varicosa.\n\nBalão de Sengstaken-Blakemore (C): é ponte temporária para sangramento refratário ao tratamento clínico e endoscópico, não a primeira medida.\n\nEndoscopia com ligadura (D): é o tratamento definitivo, mas só após estabilização hemodinâmica e início das drogas vasoativas; não é a conduta imediata.",
    "reference": "Baveno VII (2022) / Consenso da Sociedade Brasileira de Hepatologia — Hemorragia digestiva varicosa",
    "tags": [
      "hepatologia",
      "cirrose",
      "hemorragia digestiva alta",
      "varizes esofágicas",
      "terlipressina"
    ],
    "tip": "HDA no cirrótico: vasoconstritor + ceftriaxona já na chegada; endoscopia em até 12 h."
  },
  {
    "id": "unimedpb2026-50",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Um pai leva sua filha de um ano para vacinação de rotina e menciona que ela apresenta fezes amolecidas há três dias. A criança é avaliada, recebe o imunizante, soro de hidratação oral e orientações alimentares. De acordo com os níveis clássicos de prevenção, o conjunto das ações realizadas corresponde a:",
    "options": [
      "Prevenção secundária e terciária.",
      "Prevenção primária e secundária.",
      "Apenas prevenção primária.",
      "Apenas prevenção terciária.",
      "Prevenção quaternária."
    ],
    "correctAnswer": 1,
    "explanation": "Pelos níveis de prevenção de Leavell e Clark:\n\n• A vacina é proteção específica antes da doença → prevenção primária.\n• Avaliar a diarreia já presente, prescrever soro de reidratação oral e orientar a alimentação é diagnóstico e tratamento precoce para evitar desidratação → prevenção secundária.\n\nPortanto, o atendimento envolveu prevenção primária e secundária.",
    "commentary": "Secundária e terciária (A): não houve reabilitação nem redução de sequelas (terciária), e a vacina é primária.\n\nApenas primária (C): o manejo da diarreia, que já existe, é secundário.\n\nApenas terciária (D): terciária é reabilitação após dano estabelecido.\n\nQuaternária (E): é evitar intervenções desnecessárias (iatrogenia); não descreve as ações realizadas.",
    "reference": "Leavell & Clark — Medicina Preventiva / Ministério da Saúde — Cadernos de Atenção Básica",
    "tags": [
      "saúde coletiva",
      "níveis de prevenção",
      "história natural da doença",
      "vacinação"
    ],
    "tip": "Vacina = primária. Tratar doença inicial = secundária. Reabilitar = terciária. Evitar excesso = quaternária."
  },
  {
    "id": "sespe2026-60",
    "topography": "5.1",
    "topic": "Câncer de colo uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 40 anos, G4P4, chega ao ambulatório de ginecologia para avaliar resultado de exame citológico do colo uterino. O exame revela ASCUS-H.\n\nDiante do achado, qual a melhor conduta?",
    "options": [
      "Colposcopia para biópsia",
      "Colposcopia com avaliação endometrial",
      "Biópsia de canal endocervical",
      "Repetir a citologia com seis meses",
      "Histerectomia simples"
    ],
    "correctAnswer": 0,
    "explanation": "ASC-H (células escamosas atípicas, não se pode afastar lesão de alto grau) tem risco relevante de NIC 2+, por isso a conduta das Diretrizes do INCA é encaminhar diretamente para colposcopia, com biópsia de qualquer área alterada, em qualquer idade.",
    "commentary": "Avaliação endometrial (B): é para células glandulares atípicas (AGC) em mulheres com mais de 35 anos ou com sangramento.\n\nBiópsia de canal endocervical isolada (C): não substitui a colposcopia.\n\nRepetir citologia em 6 meses (D): conduta para ASC-US (de significado indeterminado) em mulheres com 25–29 anos, não para ASC-H.\n\nHisterectomia (E): não há diagnóstico histológico; seria tratamento excessivo.",
    "reference": "INCA — Diretrizes brasileiras para o rastreamento do câncer do colo do útero (2016)",
    "tags": [
      "ginecologia",
      "câncer de colo uterino",
      "ASC-H",
      "colposcopia",
      "rastreamento"
    ],
    "tip": "ASC-H, LSIL em > 25 anos ou HSIL: colposcopia."
  },
  {
    "id": "hpp2026-70",
    "topography": "10",
    "topic": "Infecções sexualmente transmissíveis",
    "module": "Ginecologia e Obstetrícia",
    "text": "Para o tratamento das lesões por HPV é correto afirmar de acordo com o Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com Infecções Sexualmente Transmissíveis do Ministério da Saúde, 2022:",
    "options": [
      "A podofilotoxina tem absorção sistêmica baixa, podendo ser recomendada como tratamento domiciliar.",
      "O Ácido tricloroacético pode ser usado na gestação e é indicado para uso domiciliar devido à facilidade de uso.",
      "A podofilina pode ser usada em casa pela própria paciente, sendo indicada para grávidas.",
      "O imiquimode pode ser indicado para aplicação pela paciente em nível domiciliar em lesões uretrais e vaginais."
    ],
    "correctAnswer": 0,
    "explanation": "Para verrugas anogenitais (HPV), o PCDT de 2022 divide os tratamentos em aplicados pelo paciente em casa e realizados pelo profissional. A podofilotoxina 0,15% em creme tem baixa absorção sistêmica e pode ser autoaplicada em domicílio (ciclos de 3 dias com 4 de pausa), sendo contraindicada na gestação.\n\nA alternativa A está correta.",
    "commentary": "Ácido tricloroacético domiciliar (B): pode ser usado na gestação, mas é aplicado pelo profissional no serviço, pelo risco de queimadura química.\n\nPodofilina em casa e na gestação (C): a podofilina (resina 10–25%) é aplicada pelo profissional e é contraindicada na gestação, por toxicidade.\n\nImiquimode em uretra e vagina (D): o imiquimode é de uso domiciliar em pele genital e perianal, não sendo indicado para lesões de mucosa (uretra, vagina, colo, ânus interno).",
    "reference": "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022)",
    "tags": [
      "HPV",
      "verrugas anogenitais",
      "condiloma acuminado",
      "infecções sexualmente transmissíveis"
    ],
    "tip": "Em casa: podofilotoxina e imiquimode (pele). No serviço: ATA (pode na gestação), crioterapia, cirurgia."
  },
  {
    "id": "famema2025-21",
    "topography": "3.1",
    "topic": "Constipação intestinal",
    "module": "Clínica Médica",
    "text": "Uma mulher de 60 anos com histórico de diabetes mellitus apresenta obstipação grave. Ao realizar manometria anorretal, foi identificado um padrão de dissinergia do assoalho pélvico. A melhor opção de tratamento a ser considerada é:",
    "options": [
      "início de metformina.",
      "biofeedback.",
      "cirurgia para ressecção intestinal.",
      "suplementação de fibras."
    ],
    "correctAnswer": 1,
    "explanation": "Constipação por dissinergia do assoalho pélvico (defecação dissinérgica) é um distúrbio funcional: ao fazer força para evacuar, o paciente contrai paradoxalmente, ou não relaxa, o esfíncter anal e o puborretal. A manometria anorretal confirma o diagnóstico.\n\nO tratamento de escolha é o biofeedback, um treinamento com fisioterapeuta que ensina a coordenar a prensa abdominal com o relaxamento do assoalho pélvico. É superior a laxantes e tem eficácia em torno de 70%.",
    "commentary": "Metformina (A): não tem papel; o diabetes pode alterar a motilidade, mas o problema identificado é funcional do assoalho.\n\nRessecção intestinal (C): colectomia é exceção para inércia colônica grave refratária e não trata dissinergia, que persistiria.\n\nFibras (D): aumentam o volume fecal, mas não corrigem a falta de coordenação; podem até piorar o esforço.",
    "tip": "Constipação + manometria com dissinergia do assoalho pélvico = biofeedback.",
    "reference": "Rao SSC et al. ACG Clinical Guideline: Management of Benign Anorectal Disorders. Am J Gastroenterol, 2021.",
    "tags": [
      "constipação",
      "dissinergia do assoalho pélvico",
      "biofeedback"
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
    "id": "famerp2026-2",
    "topography": "15",
    "topic": "Saúde do trabalhador",
    "module": "Saúde Coletiva",
    "text": "Nos Textos de História da Medicina do Trabalho, da lavra de autores brasileiros, é costume referir-se como \"Pai da Medicina do Trabalho\", inclusive quem padronizou a célebre pergunta ao trabalhador, que auxilia no diagnóstico das patologias relacionadas ao trabalho - \"qual é a sua profissão?\":",
    "options": [
      "Hipócrates",
      "Bernardino Ramazzini",
      "Sir Robert Backer",
      "Bernardo Bedrikow"
    ],
    "correctAnswer": 1,
    "explanation": "Bernardino Ramazzini (1633–1714), médico italiano, é o \"Pai da Medicina do Trabalho\". Em 1700 publicou De Morbis Artificum Diatriba (As doenças dos trabalhadores), descrevendo doenças de mais de 50 ocupações, e acrescentou à anamnese hipocrática a pergunta \"qual é a sua ocupação?\", base da investigação do nexo entre trabalho e doença.",
    "commentary": "Hipócrates (A): é o pai da medicina; descreveu a intoxicação por chumbo em mineiros, mas não sistematizou a medicina do trabalho.\n\nRobert Baker (C): foi um dos primeiros médicos inspetores de fábricas na Inglaterra, após o Factory Act de 1833.\n\nBernardo Bedrikow (D): médico brasileiro, pioneiro da medicina do trabalho no país, mas não é o \"pai\" da especialidade.",
    "tip": "Ramazzini, 1700, De Morbis Artificum: \"qual é a sua ocupação?\".",
    "reference": "Ramazzini B. As doenças dos trabalhadores (De Morbis Artificum Diatriba). Trad. Fundacentro, 4ª ed., 2016. Mendes R. Patologia do Trabalho, 3ª ed.",
    "tags": [
      "história da medicina do trabalho",
      "pai da medicina do trabalho",
      "saúde do trabalhador"
    ]
  },
  {
    "id": "hsrc2026-30",
    "topography": "16",
    "topic": "Apendicite aguda",
    "module": "Cirurgia",
    "text": "Paciente de 15 anos de idade, com dor abdominal há 5 dias, foi submetido a procedimento cirúrgico cujo achado revelou apendicite aguda grau IV, com presença de coleção purulenta na fossa ilíaca direita. A sutura do coto apendicular foi realizada com bom resultado, sendo deixado dreno na cavidade abdominal. Com relação à utilização de dreno na apendicite aguda, assinale a alternativa correta.",
    "options": [
      "A apendicectomia sempre deve ser drenada.",
      "O dreno deve ser retirado no primeiro dia pós-operatório.",
      "Não há necessidade de drenagem após limpeza e lavagem da cavidade.",
      "Nesse caso, o dreno deve ficar por, ao menos, sete dias.",
      "No caso relatado, o dreno deve ficar até, ao menos, o terceiro dia, ou enquanto sair secreção purulenta."
    ],
    "correctAnswer": 4,
    "explanation": "Quando um dreno é deixado na cavidade, como neste caso de apendicite complicada com coleção purulenta, ele deve permanecer pelo menos até o terceiro dia ou enquanto houver saída de secreção purulenta, sendo retirado quando o débito diminui e muda de aspecto.\n\nVale lembrar que a drenagem rotineira na apendicite complicada é controversa: estudos não mostram benefício e indicam mais tempo de internação, de modo que hoje muitos serviços não drenam.",
    "commentary": "Sempre drenar (A): a apendicectomia não complicada não é drenada, e mesmo na complicada a drenagem é seletiva.\n\nRetirar no primeiro dia (B): em cavidade com pus, a retirada precoce perde o objetivo do dreno.\n\nNão há necessidade de drenagem (C): é a tendência atual da literatura, mas o enunciado pergunta sobre o caso em que o dreno foi deixado.\n\nAo menos sete dias (D): não há tempo fixo tão longo; o critério é o débito.",
    "reference": "Sabiston — Apêndice / WSES Jerusalem Guidelines 2020",
    "tags": [
      "apendicite aguda",
      "drenos cirúrgicos",
      "apendicite complicada"
    ],
    "tip": "Dreno na apendicite complicada: retirar quando o pus cessar (geralmente após o 3º dia)."
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
    "id": "amrigs2026-38",
    "module": "Cirurgia",
    "text": "De acordo com o checklist de cirurgia segura proposto pela Organização Mundial de Saúde (OMS), qual dos itens a seguir faz parte da etapa de time-out?",
    "options": [
      "Avaliação de via aérea difícil.",
      "Medição da PA.",
      "Contagem de compressas utilizadas.",
      "Confirmação do procedimento."
    ],
    "correctAnswer": 3,
    "explanation": "O checklist da OMS tem três etapas: sign in (antes da indução anestésica), time-out (antes da incisão) e sign out (antes de o paciente sair da sala). No time-out, a equipe se apresenta e confirma paciente, procedimento e local da incisão, além de antibioticoprofilaxia, eventos críticos previstos e exames de imagem disponíveis.",
    "commentary": "Via aérea difícil (A): faz parte do sign in, antes da indução.\n\nMedição da PA (B): é monitorização anestésica de rotina, não item específico do time-out.\n\nContagem de compressas (C): faz parte do sign out.",
    "reference": "OMS — Manual de Cirurgia Segura Salva Vidas (2009) / Ministério da Saúde — Protocolo de Cirurgia Segura",
    "tags": [
      "cirurgia segura",
      "checklist da OMS",
      "time-out",
      "segurança do paciente"
    ],
    "tip": "Sign in: antes da anestesia. Time-out: antes da incisão. Sign out: antes de sair da sala."
  },
  {
    "id": "cerman2025-62",
    "topography": "11",
    "topic": "Puericultura",
    "module": "Pediatria",
    "text": "O teste da orelhinha ou exame de emissão otoacústica deve ser realizado em:",
    "options": [
      "(A) Em recém-nascidos com alterações crânio facial.",
      "(B) Em todos recém-nascido entre o 3º e 5º dia de vida.",
      "(C) Em recém-nascido que tenha recebido ventilação respiratória por mais de 5 dias.",
      "(D) Em recém-nascidos que apresentam alterações clínicas sugestivas de infecção congênita."
    ],
    "correctAnswer": 1,
    "explanation": "A triagem auditiva neonatal (teste da orelhinha) é universal e obrigatória por lei (Lei nº 12.303/2010): todos os recém-nascidos fazem emissões otoacústicas, de preferência antes da alta e até o fim do primeiro mês. Recém-nascidos com indicador de risco para deficiência auditiva fazem PEATE (BERA).",
    "commentary": "Só com alterações craniofaciais (A): é indicador de risco, mas a triagem é para todos.\n\nSó com ventilação por mais de 5 dias (C): também é indicador de risco; esses RN fazem PEATE.\n\nSó com suspeita de infecção congênita (D): também indicador de risco, sem restringir o teste.",
    "reference": "Ministério da Saúde — Diretrizes de Atenção da Triagem Auditiva Neonatal (2012) / Lei nº 12.303/2010",
    "tags": [
      "triagem auditiva neonatal",
      "teste da orelhinha",
      "emissões otoacústicas"
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
    "id": "enare2025-75",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma gestante com 28 semanas tem o diagnóstico de infecção por parvovírus B19.\n\nA melhor maneira de avaliar a principal complicação fetal nesse caso é:",
    "options": [
      "realização do doppler da artéria cerebral média",
      "avaliação ultrassonográfica da movimentação fetal",
      "pesquisa de células fetais livres no sangue materno",
      "medida menor do fundo uterino ao exame clínico",
      "realização do teste de Coombs direto no sangue materno"
    ],
    "correctAnswer": 0,
    "explanation": "O parvovírus B19 infecta precursores eritroides fetais e pode causar anemia fetal grave e hidropisia não imune. A melhor forma de rastrear anemia fetal é o Doppler da artéria cerebral média, medindo o pico de velocidade sistólica (PVS > 1,5 MoM indica anemia moderada a grave). As gestantes infectadas devem ser acompanhadas com Doppler seriado (semanal ou quinzenal) por 8 a 12 semanas; anemia grave é tratada com transfusão intrauterina.",
    "commentary": "Movimentação fetal (B): não detecta anemia de forma precoce ou confiável.\n\nCélulas fetais no sangue materno (C): não avaliam o grau de anemia fetal.\n\nAltura uterina reduzida (D): a hidropisia cursaria com polidrâmnio e altura aumentada; é um sinal tardio e inespecífico.\n\nCoombs direto materno (E): avalia anticorpos aderidos às hemácias maternas; a anemia do parvovírus não é imune.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Zugaib Obstetrícia, 5ª ed.; SMFM Consult Series – Parvovirus B19 in pregnancy",
    "tags": [
      "parvovírus B19",
      "anemia fetal",
      "dopplervelocimetria",
      "hidropisia fetal",
      "medicina fetal"
    ],
    "tip": "Anemia fetal (aloimunização, parvovírus): Doppler da ACM."
  },
  {
    "id": "fubog2025-49",
    "module": "Cirurgia",
    "text": "Sobre o esôfago de Barrett, é CORRETO afirmar que:",
    "options": [
      "Ocorre devido à infecção por Helicobacter pylori no esôfago",
      "É uma condição benigna sem risco de malignidade",
      "É caracterizado pela presença de epitélio colunar especializado no esôfago",
      "É mais comum em mulheres jovens"
    ],
    "correctAnswer": 2,
    "explanation": "O esôfago de Barrett é a substituição do epitélio escamoso do esôfago distal por epitélio colunar com metaplasia intestinal especializada (células caliciformes), consequência do refluxo gastroesofágico crônico. É lesão pré-maligna do adenocarcinoma de esôfago e é mais comum em homens brancos acima de 50 anos, obesos e tabagistas.",
    "commentary": "Infecção pelo H. pylori (A): a causa é o refluxo crônico; o H. pylori não está implicado (pode até ter associação inversa).\n\nSem risco de malignidade (B): é precursor do adenocarcinoma (risco de cerca de 0,1–0,3% ao ano sem displasia).\n\nMais comum em mulheres jovens (D): predomina em homens de meia-idade e idosos.",
    "reference": "ACG Clinical Guideline: Diagnosis and Management of Barrett's Esophagus (2022)",
    "tags": [
      "esôfago de Barrett",
      "doença do refluxo gastroesofágico",
      "metaplasia intestinal",
      "adenocarcinoma de esôfago"
    ],
    "tip": "Barrett: metaplasia intestinal no esôfago distal → risco de adenocarcinoma."
  },
  {
    "id": "viv2026-6",
    "module": "Clínica Médica",
    "text": "Paciente cirrótico com ascite volumosa apresenta febre, dor abdominal difusa e confusão mental. A paracentese diagnóstica revela líquido ascítico com 600 polimorfonucleares/mm³. A conduta terapêutica imediata é:",
    "options": [
      "Realizar paracentese de alívio total com reposição de albumina",
      "Aguardar o resultado da cultura do líquido ascítico para iniciar antibióticos",
      "Iniciar antibioticoterapia empírica com cefalosporina de terceira geração (ex: Cefotaxima ou Ceftriaxona)",
      "Administrar diuréticos em altas doses para reduzir a ascite"
    ],
    "correctAnswer": 2,
    "explanation": "Cirrótico com ascite, febre, dor abdominal e confusão, com mais de 250 polimorfonucleares/mm³ no líquido ascítico (600): peritonite bacteriana espontânea. Inicia-se imediatamente antibiótico empírico com cefalosporina de 3ª geração (ceftriaxona ou cefotaxima), sem esperar a cultura, associado a albumina (1,5 g/kg no dia 1 e 1 g/kg no dia 3) para prevenir a síndrome hepatorrenal.",
    "commentary": "Paracentese de alívio total (A): na PBE, a paracentese de grande volume aumenta o risco de disfunção renal; o foco é o antibiótico.\n\nAguardar a cultura (B): atrasa o tratamento e aumenta a mortalidade; o diagnóstico é pela contagem de PMN.\n\nDiuréticos em altas doses (D): podem precipitar lesão renal e encefalopatia na PBE.",
    "reference": "EASL Clinical Practice Guidelines for decompensated cirrhosis (2018)",
    "tags": [
      "peritonite bacteriana espontânea",
      "cirrose",
      "ceftriaxona",
      "hepatologia"
    ],
    "tip": "PMN > 250 no líquido ascítico: cefalosporina de 3ª + albumina."
  },
  {
    "id": "viv2026-60",
    "module": "Cirurgia",
    "text": "Paciente vítima de trauma abdominal contuso apresenta instabilidade hemodinâmica persistente apesar da reposição volêmica. O FAST é positivo. Na laparotomia, encontra-se o baço estilhaçado com sangramento ativo. A conduta CORRETA é:",
    "options": [
      "Esplenorrafia",
      "Esplenectomia total",
      "Embolização angiográfica",
      "Esplenectomia parcial"
    ],
    "correctAnswer": 1,
    "explanation": "Trauma abdominal com instabilidade hemodinâmica persistente, FAST positivo e, na laparotomia, baço estilhaçado (lesão grau V) com sangramento ativo: a conduta é esplenectomia total. Tentativas de preservação (esplenorrafia, esplenectomia parcial) só se aplicam a lesões menores em paciente estável. Após a esplenectomia, o paciente deve receber vacinas contra germes encapsulados.",
    "commentary": "Esplenorrafia (A) e esplenectomia parcial (D): demoradas e inadequadas para baço estilhaçado em paciente instável.\n\nEmbolização (C): é opção no paciente estável com blush, não no instável já em laparotomia.",
    "reference": "WSES Splenic Trauma Guidelines (2017); ATLS 10ª ed.",
    "tags": [
      "trauma esplênico",
      "esplenectomia",
      "trauma abdominal"
    ],
    "tip": "Baço estilhaçado + instabilidade: esplenectomia."
  }
];
