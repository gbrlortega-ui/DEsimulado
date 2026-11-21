// Arquivo gerado por `npm run gen` a partir do banco de questões. Não editar à mão.
// O build e o servidor local regeneram este arquivo sozinhos; o `npm run validate` acusa se ficar desatualizado.
import type { Question } from '../types';

export const TOTAL_QUESTIONS = 3679;

export const COUNT_BY_AREA: Record<string, number> = {
  "Pediatria": 699,
  "Clínica Médica": 761,
  "Cirurgia": 675,
  "Ginecologia e Obstetrícia": 699,
  "Saúde Coletiva": 684,
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
  "Saúde Coletiva|VIV": 20
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
    "id": "tp2021-46",
    "topography": "11",
    "topic": "Refluxo gastroesofágico",
    "module": "Pediatria",
    "text": "Lactente, 3 meses, com história de vômitos após todas as mamadas. Mãe refere que algumas vezes o conteúdo alimentar sai pelas narinas, mas nega cianose, tosse ou outros sintomas relacionados ao quadro. O lactente encontra-se com bom estado geral e está no escore 0 para peso e comprimento. A conduta é:",
    "options": [
      "(A) Iniciar tratamento farmacológico para doença do refluxo gastroesofágico.",
      "(B) Solicitar exame radiológico contrastado do esôfago, estômago e duodeno.",
      "(C) Tranquilizar os familiares pois se trata de refluxo gastroesofágico fisiológico.",
      "(D) Solicitar pHmetria esofágica de 24 horas para avaliar esofagite péptica."
    ],
    "correctAnswer": 2,
    "explanation": "Lactente saudável, em aleitamento, apresentando regurgitações ou vômitos pós-prandiais indolores, sem engasgos incapacitantes ou cianose, e mantendo ótimo desenvolvimento pondero-estatural (Z-score 0), é classificado como \"regurgitador feliz\" (refluxo gastroesofágico fisiológico). A conduta consiste apenas em suporte educativo e tranquilização familiar.",
    "commentary": "O lactente apresenta bom ganho de peso e estatura, bom estado geral e ausência de complicações, caracterizando o clássico refluxo fisiológico do lactente. Não há indicação para investigações ou exames diagnósticos invasivos (como pHmetria ou REED) e nenhuma terapia medicamentosa está sugerida.",
    "reference": "SOCIEDADE BRASILEIRA DE PEDIATRIA. Tratado de Pediatria. Editora Manole, 2017.",
    "tags": [
      "gastroenterologia",
      "puericultura"
    ]
  },
  {
    "id": "tp2025-26",
    "topography": "2.1",
    "topic": "DPOC",
    "module": "Clínica Médica",
    "text": "Homem de 65 anos, tabagista atual e com antecedente de DPOC, procura PS devido a piora aguda da tosse, aumento do volume de expectoração com coloração mais escura que seu padrão habitual, sem febre. Teve outros dois quadros similares nos últimos doze meses. Ao exame físico, cianose com saturação de O2 = 86%, roncos difusos e frequência respiratória = 30ipm. A conduta adequada para seu tratamento é:",
    "options": [
      "(A) Amoxacilina + clavulanato oral e internação hospitalar.",
      "(B) Ciprofloxacina endovenosa em hospital-dia.",
      "(C) Claritromicina endovenosa em hospital-dia.",
      "(D) Levofloxacina endovenosa e internação hospitalar."
    ],
    "correctAnswer": 3,
    "explanation": "O paciente possui perfil exacerbador de DPOC clássico, com indícios de hipoxemia severa (SatO2 = 86%), acidose provável e alto risco para Pseudomonas, exigindo internação para antibioticoterapia endovenosa de largo espectro (Levofloxacina).",
    "commentary": "O paciente apresenta perfil exacerbador com alto risco para pseudomonas e hipoxemia acentuada que exige tratamento inicialmente endovenoso com levofloxacina (quinolona respiratória) e internação hospitalar.",
    "reference": "PCDT – DPOC – Ministério da Saúde 2022; GOLD – COPD – 2025",
    "tags": [
      "pneumologia",
      "infectologia",
      "emergência"
    ]
  },
  {
    "id": "tp2024-71",
    "topography": "1.1",
    "topic": "Hipertensão intracraniana",
    "module": "Cirurgia",
    "text": "Homem, 70 anos, HAS. Evolui com Glasgow 7, midríase fixa à direita, Bradipneia (8), Bradicardia (48) e PA 240/120. Qual o diagnóstico e conduta inicial?",
    "options": [
      "(A) Síndrome de hipertensão intracraniana e intubação orotraqueal.",
      "(B) AVC isquêmico e TC de crânio.",
      "(C) Hematoma intracerebral e drenagem cirúrgica imediata.",
      "(D) Estado de mal não convulsivo e hidantalização."
    ],
    "correctAnswer": 0,
    "explanation": "Idoso hipertenso com déficit motor súbito que, em 30 minutos, cai para Glasgow 7, com midríase fixa unilateral, bradicardia, bradipneia e hipertensão grave. A pupila dilatada e fixa indica herniação do uncus comprimindo o nervo oculomotor, e a associação de hipertensão arterial, bradicardia e alteração respiratória forma a tríade de Cushing, resposta do tronco à hipertensão intracraniana.\n\nO diagnóstico sindrômico é hipertensão intracraniana com herniação, e a prioridade é proteger a via aérea: Glasgow igual ou menor que 8 e respiração irregular indicam intubação orotraqueal. Depois de estabilizar, faz-se a tomografia de crânio para definir a causa (provavelmente hemorragia intracerebral hipertensiva) e as medidas para baixar a pressão intracraniana.",
    "commentary": "AVC isquêmico e tomografia (B): sem imagem não é possível dizer se o AVC é isquêmico ou hemorrágico, e a piora rápida com herniação favorece hemorragia; além disso, a tomografia vem depois de garantir a via aérea.\n\nHematoma intracerebral com drenagem imediata (C): o hematoma é uma hipótese, mas só pode ser confirmado por imagem, e a indicação cirúrgica depende do tamanho e do local; a via aérea vem antes.\n\nEstado de mal não convulsivo e hidantalização (D): não há crises nem dados que sugiram esse diagnóstico, e a tríade de Cushing com anisocoria aponta para hipertensão intracraniana.",
    "tip": "Hipertensão + bradicardia + respiração irregular = tríade de Cushing (HIC). Glasgow ≤ 8: intubar primeiro.",
    "reference": "Tratado de Neurologia da Academia Brasileira de Neurologia, 2ª edição.",
    "tags": [
      "neurocirurgia",
      "emergência"
    ]
  },
  {
    "id": "tp2021-65",
    "topography": "7.1",
    "topic": "Insuficiência venosa crônica",
    "module": "Cirurgia",
    "text": "Mulher, 60 anos, com áreas de hiperpigmentação em bota no terço inferior de perna esquerda, pele ressecada e descamativa, úlcera de aproximadamente 5 cm com bordas irregulares e escavadas. Veias dilatadas bilateralmente e pulsos normais. Nega dor local. Além de curativo, a conduta é:",
    "options": [
      "(A) Elasto-compressão.",
      "(B) Antibioticoterapia.",
      "(C) Repouso em céfalo-aclive.",
      "(D) Safenectomia."
    ],
    "correctAnswer": 0,
    "explanation": "A úlcera com hiperpigmentação ocre ao redor em região maleolar com pulsos distais preservados representa insuficiência venosa crônica. O pilar terapêutico para reverter a hipertensão venosa é a terapia elastocompressiva (elasto-compressão).",
    "commentary": "As características apresentadas para a lesão são compatíveis com úlcera de origem venosa. O mecanismo fisiopatológico consiste em hipertensão venosa nos capilares cutâneos, devido à insuficiência venosa (refluxo venoso pelas veias insuficientes), com subsequente edema, translocação de hemácias com deposição de hemossiderina (hiperpigmentação em bota), processo inflamatório cutâneo crônico e lesão. Para regressão do quadro deve-se reduzir a pressão através de elasto-compressão da perna e curativos locais. A paciente precisa evitar quaisquer posições que dificultem o retorno venoso, pois contribuirão para a manutenção do edema e, consequente, piora do quadro (por isso o céfalo-aclive ou posições declives prolongadas são proscritos). A paciente não apresenta dados que sugiram infecção (dor aguda forte, calor, hiperemia local franca em ascensão e secreção fétida), portanto não há indicação imediata para antibioticoterapia sistêmica.",
    "reference": "BRITO, C.J. et al. Cirurgia Vascular: Cirurgia Endovascular, Angiologia. 4ª ed. Rio de Janeiro: Dilivros, 2020.",
    "tags": [
      "cirurgia vascular"
    ]
  },
  {
    "id": "tp2024-98",
    "topography": "15",
    "topic": "Rastreamento",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 58 anos, dor mamária esporádica. Tia-avó com câncer de mama aos 72 anos. Exame físico normal. Qual o exame indicado?",
    "options": [
      "(A) Mamografia Bilateral.",
      "(B) Ressonância Magnética com contraste.",
      "(C) Ressonância Magnética sem contraste.",
      "(D) Ultrassonografia apenas."
    ],
    "correctAnswer": 0,
    "explanation": "Mulher de 58 anos sem sinais suspeitos no exame físico e cuja única queixa é dor mamária passageira, que isoladamente raramente indica câncer. A tia-avó que teve câncer de mama aos 72 anos é parente distante, com diagnóstico em idade avançada, e não coloca a paciente em alto risco.\n\nEla tem, portanto, risco habitual e está na faixa do rastreamento recomendada pelo Ministério da Saúde e pelo INCA (50 a 69 anos, a cada 2 anos). Como nunca fez exame de imagem, o indicado é a mamografia bilateral.",
    "commentary": "Ressonância com contraste (B): é reservada ao rastreamento de mulheres de alto risco (mutação BRCA, radioterapia torácica na juventude, risco calculado elevado) e a situações diagnósticas específicas.\n\nRessonância sem contraste (C): sem contraste a ressonância não avalia o tecido mamário em busca de câncer; serve, por exemplo, para avaliar implantes de silicone.\n\nUltrassonografia (D): não é exame de rastreamento isolado; complementa a mamografia em mamas densas ou na avaliação de nódulos.",
    "tip": "Risco habitual, 50 a 69 anos: mamografia a cada 2 anos. Ressonância é para alto risco.",
    "reference": "Instituto Nacional de Câncer José Alencar Gomes da Silva. Diretrizes para a detecção precoce do câncer de mama no Brasil/ Instituto Nacional de Câncer José Alencar Gomes da Silva – Rio de Janeiro: INCA, 2015. https://www.gov.br/conitec/ptbr/midias/protocolos/diretrizes_de teccaoprecoce_cm.pdf",
    "tags": [
      "mastologia",
      "rastreamento"
    ]
  },
  {
    "id": "tp2021-90",
    "topography": "5.2",
    "topic": "Infecções na gestação",
    "module": "Ginecologia e Obstetrícia",
    "text": "Primigesta, 24 anos, portadora do vírus HIV, idade gestacional de 36 semanas, em uso de Nevirapina, Zidovudina e Lamivudina. Com 35 semanas, apresentou carga viral menor do que mil cópias. No nascimento, será administrada Zidovudina endovenosa em dose de ataque e de manutenção até o clampeamento do cordão umbilical. A resolução da gestação nessa paciente é:",
    "options": [
      "(A) Interromper por cesariana com 39 semanas.",
      "(B) Induzir com Ocitocina na 37ª semana.",
      "(C) Induzir com Prostaglandina na 38ª semana.",
      "(D) Aguardar pelo parto vaginal."
    ],
    "correctAnswer": 3,
    "explanation": "Gestantes portadoras do vírus HIV que atingem carga viral indetectável ou de baixo título (< 1.000 cópias/mL) documentada a partir da 34ª semana de gestação têm indicação de parto com base puramente em critérios obstétricos regulares, ou seja, pode-se aguardar/conduzir o parto por via vaginal espontâneo.",
    "commentary": "De acordo com o Ministério da Saúde do Brasil, grávidas sob terapia antirretroviral (TARV) regular com carga viral menor que 1.000 cópias pós-34 semanas não apresentam benefício mensurável na taxa de transmissão vertical ao se indicarem cesarianas eletivas isoladas. Portanto, a indicação assistencial deve aguardar ou induzir o parto via vaginal normal, mantendo-se a infusão endovenosa recomendada de Zidovudina (AZT) intraparto.",
    "reference": "Protocolo Clínico e Diretrizes Terapêuticas para Prevenção da Transmissão Vertical do HIV, Sífilis e Hepatites Virais, Ministério da Saúde (2019).",
    "tags": [
      "obstetrícia",
      "HIV na gestação",
      "transmissão vertical"
    ]
  },
  {
    "id": "tp2023-107",
    "topography": "10",
    "topic": "Tuberculose",
    "module": "Saúde Coletiva",
    "text": "Homem, 25 anos, relata perda de peso espontânea de oito quilos em três meses, acompanhada de tosse e febre diária. Para a confirmação da suspeita de tuberculose pulmonar, quais são os exames laboratoriais e/ou complementares mais facilmente indicados e realizados?",
    "options": [
      "(A) Biópsia pulmonar com exame histopatológico; sorologia com pesquisa de IgM.",
      "(B) Broncoscopia com baciloscopia do lavado broncoalveolar; radiografia de tórax.",
      "(C) Teste rápido molecular de escarro; tomografia de tórax.",
      "(D) Baciloscopia; teste rápido molecular; radiografia de tórax."
    ],
    "correctAnswer": 3,
    "explanation": "Perda de peso, tosse e febre diária em adulto jovem configuram suspeita de tuberculose pulmonar. Pelo Ministério da Saúde, a confirmação é feita no escarro: o teste rápido molecular (TRM-TB) é o exame preferencial, porque é mais sensível que a baciloscopia, dá resultado em poucas horas e ainda detecta resistência à rifampicina; a baciloscopia continua útil, inclusive no acompanhamento do tratamento.\n\nA radiografia de tórax complementa, mostrando a extensão da doença e lesões sugestivas, mas não confirma o diagnóstico sozinha. São exames disponíveis na rede pública e de fácil acesso, por isso a alternativa D.",
    "commentary": "Biópsia pulmonar e sorologia IgM (A): a biópsia é invasiva e reservada a casos selecionados, e sorologia não é usada para diagnosticar tuberculose.\n\nBroncoscopia com lavado (B): é opção quando o paciente não consegue escarrar ou os exames de escarro são negativos com forte suspeita; não é a primeira escolha.\n\nTomografia de tórax (C): é mais cara e menos disponível; a radiografia simples já atende à avaliação inicial.",
    "tip": "Suspeita de TB pulmonar: escarro para TRM-TB (e baciloscopia) + radiografia de tórax.",
    "reference": "Brasil. Ministério da Saúde. Secretaria de Vigilância em Saúde. Departamento de Vigilância das Doenças Transmissíveis. Manual de Recomendações para o Controle da Tuberculose no Brasil / Ministério da Saúde, Secretaria de Vigilância em Saúde, Departamento de Vigilância das Doenças Transmissíveis. – Brasília: Ministério da Saúde, 2019. 364 p.: il. ISBN 978-85-334-2696-2.",
    "tags": [
      "vigilância em saúde",
      "infectologia"
    ]
  },
  {
    "id": "tp2019-101",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "Conforme normatização vigente do SUS, as Redes de Atenção à Saúde (RAS) são entendidas como entrelaçamentos organizativos entre ações e serviços de saúde com diferentes densidades tecnológicas, integradas por meio de sistemas de apoio técnico, logístico e gestão, com a finalidade de:",
    "options": [
      "(A) Garantir a integralidade do cuidado.",
      "(B) Aumentar a eficiência da gestão municipal.",
      "(C) Ofertar mais serviços pelo SUS.",
      "(D) Compor uma rede de atenção secundária."
    ],
    "correctAnswer": 0,
    "explanation": "Segundo a Portaria 4.279/2010, as Redes de Atenção à Saúde são arranjos de ações e serviços de diferentes densidades tecnológicas, integrados por sistemas de apoio técnico, logístico e de gestão, com o objetivo de garantir a integralidade do cuidado.",
    "commentary": "Eficiência, ampliação de oferta e composição da atenção secundária podem ser consequências, mas não são a finalidade definida pela norma.",
    "reference": "BRASIL. Ministério da Saúde. Portaria nº 4279, de 30 de dezembro de 2010. Estabelece as diretrizes para a organização da Rede de Atenção à Saúde no âmbito do Sistema Único de Saúde (SUS). Disponível em: http://bvsms.saude.gov.br/bvs/saudelegis/gm/2010/anexos/anexo s_prt4279_30_12_2010.pdf. Acesso em: 24 abr 2016.",
    "tags": [
      "saúde coletiva",
      "SUS",
      "redes de atenção"
    ]
  },
  {
    "id": "tp2026-6",
    "topography": "1.3",
    "topic": "Amigdalite/faringoamigdalite",
    "module": "Ciências Básicas",
    "text": "Um adolescente de 16 anos é acompanhado em atendimento domiciliar por quadro de faringite bacteriana, com cultura positiva para Streptococcus pyogenes. O médico prescreve a Benzetacil (Penicilina G) como tratamento. Considerando os aspectos da bactéria e do antibiótico prescrito para o caso clínico, qual alternativa melhor explica como esse fármaco atua sobre a bactéria?",
    "options": [
      "(A) Inibe a síntese proteica ao se ligar à subunidade 30S do ribossomo bacteriano.",
      "(B) Inibe a síntese da parede celular bacteriana ao interferir na formação do peptidoglicano.",
      "(C) Altera a permeabilidade da membrana celular ao se ligar a ergosterol.",
      "(D) Inibe a replicação do DNA bacteriano por bloqueio da DNA girase."
    ],
    "correctAnswer": 1,
    "explanation": "A penicilina G benzatina é um betalactâmico. Esses antibióticos se ligam às proteínas ligadoras de penicilina (PBPs), enzimas transpeptidases que fazem as ligações cruzadas entre as cadeias de peptidoglicano, a malha que dá rigidez à parede bacteriana.\n\nSem essas ligações, a parede fica frágil e a bactéria se rompe por lise osmótica, efeito bactericida sobre células em multiplicação. O Streptococcus pyogenes, gram-positivo com parede espessa de peptidoglicano, continua sensível à penicilina, que segue como tratamento de escolha da faringite estreptocócica, inclusive para prevenir febre reumática.",
    "commentary": "Ligação à subunidade 30S (A): é o mecanismo dos aminoglicosídeos e das tetraciclinas, que atuam no ribossomo e bloqueiam a síntese proteica.\n\nLigação ao ergosterol (C): o ergosterol existe na membrana dos fungos, não das bactérias; esse é o mecanismo dos polienos, como a anfotericina B e a nistatina.\n\nBloqueio da DNA girase (D): é a ação das quinolonas, que atuam na replicação do DNA, sem relação com a parede.",
    "tip": "Betalactâmico = liga-se às PBPs e impede as ligações cruzadas do peptidoglicano → lise da bactéria.",
    "reference": "Goodman & Gilman's The Pharmacological Basis of Therapeutics. Brunton LL, Hilal-Dandan R, Knollmann BC.",
    "tags": [
      "farmacologia",
      "infectologia"
    ]
  },
  {
    "id": "enamed-2025-79",
    "topography": "10",
    "topic": "Sepse",
    "module": "Clínica Médica",
    "text": "Mulher de 62 anos, com histórico de infecções urinárias de repetição, procura a Unidade de Pronto Atendimento (UPA) apresentando febre alta e calafrios. É portadora de diabetes mellitus tipo 2. Ao exame: pressão arterial de 110 × 70 mmHg, frequência cardíaca de 106 bpm, frequência respiratória de 25 irpm e temperatura de 38 °C. Exames laboratoriais mostram leucocitose de 14.000/mm³, neutrofilia e desvio à esquerda.\n\nA conduta para esse caso deve recomendar",
    "options": [
      "(A) antitérmico, hidratação oral vigorosa e observação.",
      "(B) tratamento com esquema antibiótico de amplo espectro ainda na primeira hora da chegada da paciente.",
      "(C) cobertura antifúngica para Candida por ser diabética com ITU de repetição.",
      "(D) manter antibiótico de amplo espectro durante todo o tratamento, independentemente do resultado das culturas."
    ],
    "correctAnswer": 1,
    "explanation": "A paciente apresenta manifestações clínicas e laboratoriais de resposta inflamatória sistêmica severa (taquicardia, taquipneia, febre, leucocitose marcante com desvio à esquerda) secundária a um provável foco infeccioso urinário (ITU de repetição prévia), configurando um quadro grave de sepse de foco urinário (urosepse). Segundo as diretrizes internacionais e nacionais da Surviving Sepsis Campaign (SSC), a administração rápida de antimicrobianos empíricos de amplo espectro na primeira hora da identificação da sepse ou choque séptico é o fator determinante mais crítico para reduzir a mortalidade.",
    "commentary": "A conduta expectante com hidratação oral (A) é perigosa e insuficiente para sepse. Cobertura empírica para Candida (C) não é indicada de rotina na admissão sem evidência de fungemia. Manter o amplo espectro cegamente (D) sem descalonamento após as culturas contraria o uso racional de antibióticos e estimula a multirresistência bacteriana.",
    "reference": "Diretrizes da Surviving Sepsis Campaign (SSC) / Protocolo de Sepse do Instituto Latino-Americano de Sepse (ILAS)",
    "tags": [
      "clínica médica",
      "infectologia",
      "sepse",
      "uropatologia",
      "antibioticoterapia"
    ]
  },
  {
    "id": "unifesp2025-22",
    "topography": "8",
    "topic": "Distúrbios do cálcio",
    "module": "Clínica Médica",
    "text": "Mulher, 70 anos de idade, com hipertensão, osteoartrose e osteoporose em coluna lombar (T-score -2,9), realiza investigação laboratorial com os seguintes resultados: creatinina = 0,9 mg/dL (VR 0,6 a 1,1 mg/dL), TSH = 3,0 mUI/L (VR 0,44 a 5,4 mUI/L), PTH = 15 pg/mL (VR 22 a 84 pg/mL), cálcio total = 10,7 mg/dL (VR 8,6 a 10,3 mg/dL).\n\nQual medicamento listado abaixo pode causar a alteração laboratorial observada?",
    "options": [
      "(A) Denosumabe.",
      "(B) Glicocorticoide.",
      "(C) Diurético tiazídico.",
      "(D) Cloroquina."
    ],
    "correctAnswer": 2,
    "explanation": "A paciente tem hipercalcemia com PTH suprimido, ou seja, hipercalcemia não mediada por PTH. Entre as opções, o diurético tiazídico é o fármaco que eleva o cálcio sérico, por aumentar a reabsorção tubular distal de cálcio. A paciente é hipertensa, o que torna o uso provável.\n\nNo hiperparatireoidismo primário o PTH estaria alto ou inapropriadamente normal. Com PTH baixo, a causa é extraparatireoidiana: medicamentos (tiazídicos, intoxicação por vitamina D ou A), malignidade e doenças granulomatosas.",
    "commentary": "Denosumabe (A): inibe a reabsorção óssea e causa hipocalcemia, não hipercalcemia.\n\nGlicocorticoide (B): reduz a absorção intestinal e aumenta a excreção renal de cálcio; é inclusive tratamento de algumas hipercalcemias.\n\nCloroquina (D): não causa hipercalcemia; é usada para tratar a hipercalcemia de doenças granulomatosas.",
    "reference": "Harrison — Distúrbios do cálcio / Diretrizes da SBEM para hipercalcemia",
    "tags": [
      "endocrinologia",
      "hipercalcemia",
      "diurético tiazídico",
      "osteoporose"
    ]
  },
  {
    "id": "hosbos2027-42",
    "topography": "5.1",
    "topic": "Câncer de colo uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "R.B.A., 27 anos, submetida a exame para rastreamento do câncer de colo uterino. Resultado do DNA-HPV oncogênico: HPV subtipo 16 positivo.\n\nDe acordo com as novas Diretrizes do Ministério da Saúde para o Rastreamento do Câncer do Colo Uterino, assinale a alternativa que representa a conduta adequada.",
    "options": [
      "(A) Novo rastreamento em 5 anos.",
      "(B) Novo rastreamento em 6 meses.",
      "(C) Solicitar Papanicolaou (citologia líquida).",
      "(D) Solicitar Colposcopia.",
      "(E) Indicar CAF (cauterização alta frequência)."
    ],
    "correctAnswer": 3,
    "explanation": "Nas novas Diretrizes do Ministério da Saúde para rastreamento do câncer do colo do útero (com teste de DNA-HPV oncogênico a partir dos 25 anos), um resultado positivo para HPV 16 e/ou 18 leva diretamente à colposcopia.\n\nSe o teste for positivo para outros tipos oncogênicos (não 16/18), faz-se citologia reflexa (de preferência em base líquida) para triagem.",
    "commentary": "Novo rastreamento em 5 anos (A): intervalo para teste de HPV negativo.\n\nRepetir em 6 meses (B): não é a conduta para HPV 16, de maior risco.\n\nPapanicolaou (C): a citologia reflexa é para HPV de outros tipos oncogênicos, não 16/18.\n\nCAF (E): tratamento excisional só após diagnóstico colposcópico ou histológico de lesão de alto grau.",
    "reference": "Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero — Parte I: rastreamento organizado com teste de DNA-HPV (INCA/MS)",
    "tags": [
      "ginecologia",
      "rastreamento",
      "câncer do colo do útero",
      "HPV",
      "colposcopia"
    ]
  },
  {
    "id": "hosbos2025-43",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "R.T.B., 29 anos, primigesta, idade gestacional de 11 semanas, veio à segunda consulta de pré-natal com glicemia de jejum de 92 mg/dL. IMC de 24 kg/m², sorologia para toxoplasmose: IgG positivo e IgM positivo. Teste de avidez para IgG 90%. Nega comorbidades. Sobre o caso, assinale a alternativa correta.",
    "options": [
      "(A) Trata-se de diabetes gestacional.",
      "(B) Trata-se de overt diabetes.",
      "(C) Trata-se de diabetes tipo II.",
      "(D) Deve-se solicitar TOTG (Teste Oral de Tolerância à Glicose) com idade gestacional de 24 – 28 semanas.",
      "(E) Deve-se introduzir insulina com 2/3 da dose pela manhã."
    ],
    "correctAnswer": 0,
    "explanation": "No Brasil (critérios da OPAS/MS/FEBRASGO/SBD, baseados na IADPSG), a glicemia de jejum na primeira consulta classifica: < 92 mg/dL normal (fazer TOTG 24–28 semanas); 92–125 mg/dL = diabetes mellitus gestacional; ≥ 126 mg/dL = diabetes prévio (overt).\n\nGlicemia de 92 mg/dL já define diabetes gestacional, sem necessidade de TOTG.",
    "commentary": "Overt diabetes (B): exige jejum ≥ 126 mg/dL, HbA1c ≥ 6,5% ou glicemia ao acaso ≥ 200 mg/dL.\n\nDiabetes tipo 2 (C): não há critério para diabetes fora da gestação.\n\nTOTG com 24–28 semanas (D): só se o jejum inicial for < 92 mg/dL; aqui o diagnóstico já está feito.\n\nInsulina com 2/3 pela manhã (E): o tratamento inicial é dieta e atividade física; insulina só se as metas não forem atingidas.",
    "reference": "OPAS/MS/FEBRASGO/SBD — Rastreamento e diagnóstico de diabetes mellitus gestacional no Brasil (2017)",
    "tags": [
      "diabetes gestacional",
      "glicemia de jejum",
      "pré-natal"
    ]
  },
  {
    "id": "scmbh2026-27",
    "topography": "2.1",
    "topic": "Pneumonia comunitária",
    "module": "Clínica Médica",
    "text": "Em um plantão em terapia intensiva, você é responsável por paciente do sexo masculino, 62 anos, com pneumonia adquirida na comunidade grave, internado em UTI. Apresenta hipotensão arterial, hipoxemia e necessidade de altas frações de oxigênio, já recebendo antibioticoterapia empírica ampla. Mantém instabilidade hemodinâmica e PCR aumentado. Pro-calcitonina aumentada.\n\nQual a conduta sobre o uso de corticoide nesse contexto?",
    "options": [
      "(A) Contraindicado em qualquer situação.",
      "(B) Indicado apenas se houver asma associada.",
      "(C) Pode ser considerado em casos de resposta inflamatória exacerbada.",
      "(D) Indicado para pacientes em terapia intensiva."
    ],
    "correctAnswer": 2,
    "explanation": "Pneumonia comunitária grave em UTI com hipoxemia importante e instabilidade hemodinâmica, apesar de antibiótico adequado.\n\nEstudos recentes (CAPE COD, 2023) mostraram redução de mortalidade com hidrocortisona na PAC grave. As diretrizes (ATS 2023, SCCM 2024) passaram a sugerir corticoide na PAC grave, sobretudo com resposta inflamatória exacerbada ou choque refratário. Entre as opções, 'pode ser considerado' é a resposta adequada.",
    "commentary": "Contraindicado sempre (A): há evidência de benefício em casos graves.\n\nSó com asma (B): a indicação não depende de asma.\n\nPara todo paciente em UTI (D): a indicação é seletiva (PAC grave, choque refratário), não universal.",
    "reference": "Dequin PF et al. — CAPE COD (NEJM 2023) / SCCM Guidelines on Corticosteroids (2024)",
    "tags": [
      "terapia intensiva",
      "pneumonia grave",
      "corticoide",
      "hidrocortisona"
    ]
  },
  {
    "id": "revalida-2025-1-80",
    "topography": "15",
    "topic": "Imunização",
    "module": "Saúde Coletiva",
    "text": "Mulher comparece na unidade básica de saúde (UBS) com seus dois filhos, um menino de 8 anos e uma menina de 13 anos, buscando orientações quanto à vacinação contra o HPV.\n\nDiante desse quadro, qual a orientação correta?",
    "options": [
      "(A) O menino e a menina podem receber dose única nessa visita.",
      "(B) O menino e a menina podem receber a primeira dose nessa visita e agendar a segunda dose em 60 dias.",
      "(C) A menina não deve ser vacinada e o menino poderá receber a primeira dose ao completar 11 anos.",
      "(D) A menina pode ser vacinada em dose única nessa visita e não há indicação para que o filho seja vacinado agora."
    ],
    "correctAnswer": 3,
    "explanation": "Desde 2024 o Ministério da Saúde adota dose única da vacina HPV para meninas e meninos de 9 a 14 anos. A menina de 13 anos pode ser vacinada em dose única nessa visita. O menino de 8 anos ainda não tem idade: deve receber a vacina a partir dos 9 anos.",
    "commentary": "Ambos em dose única agora (A) e duas doses para ambos (B): o menino ainda não tem 9 anos, e o esquema atual é de dose única.\n\nMenina não deve ser vacinada (C): ela está na faixa indicada; e a vacina para meninos começa aos 9, não aos 11 anos.",
    "reference": "Ministério da Saúde — Nota técnica sobre dose única da vacina HPV (2024) / Calendário Nacional de Vacinação",
    "tags": [
      "saúde coletiva",
      "imunização",
      "vacina HPV",
      "calendário vacinal"
    ],
    "tip": "HPV no SUS: dose única dos 9 aos 14 anos, meninas e meninos."
  },
  {
    "id": "sespe2026-25",
    "topography": "16",
    "topic": "Nutrição cirúrgica",
    "module": "Cirurgia",
    "text": "Na REMIT, Resposta Endócrino-Metabólica-Imunológica ao Trauma, incluindo os hormônios envolvidos, qual das substâncias abaixo NÃO causa lipólise?",
    "options": [
      "Catecolaminas",
      "Glucagon",
      "Insulina",
      "GH",
      "Cortisol"
    ],
    "correctAnswer": 2,
    "explanation": "Na resposta endócrino-metabólica ao trauma predominam os hormônios catabólicos — catecolaminas, glucagon, cortisol e GH —, que estimulam a lipólise para fornecer energia. A insulina é o principal hormônio anabólico e antilipolítico: inibe a lipase hormônio-sensível e promove armazenamento de gordura. No trauma há resistência à insulina, mas ela, em si, não causa lipólise.",
    "commentary": "Catecolaminas (A): ativam a lipase hormônio-sensível via receptores β, são fortemente lipolíticas.\n\nGlucagon (B): estimula lipólise e gliconeogênese.\n\nGH (D): tem efeito lipolítico, poupando proteína.\n\nCortisol (E): favorece lipólise, proteólise e gliconeogênese.",
    "reference": "Sabiston — Tratado de Cirurgia (resposta metabólica ao trauma) / Guyton — Fisiologia",
    "tags": [
      "cirurgia geral",
      "resposta metabólica ao trauma",
      "insulina",
      "lipólise"
    ],
    "tip": "No trauma, todos os hormônios contrarreguladores fazem lipólise — a insulina não."
  },
  {
    "id": "hpp2026-36",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Homem de 36 anos, envolveu-se em uma briga após um jogo de futebol e foi vítima de ferimentos por arma branca. Dá entrada no Pronto Socorro queixando-se de desconforto torácico. No exame físico observa-se ferimento cortante de 04 cm no terceiro espaço intercostal E, linha axilar anterior. O paciente apresenta distensão das veias jugulares, hipotensão e abafamento dos batimentos cardíacos. A principal suspeita diagnóstica deve ser:",
    "options": [
      "Rotura traumática de aorta.",
      "Tamponamento cardíaco.",
      "Pneumotórax aberto.",
      "Lesão traumática do baço."
    ],
    "correctAnswer": 1,
    "explanation": "Ferimento por arma branca na região precordial (\"caixa de Ziedler\") com a tríade de Beck: turgência jugular, hipotensão e abafamento de bulhas. O diagnóstico é tamponamento cardíaco.\n\nO FAST confirma o derrame pericárdico; o tratamento definitivo é cirúrgico (toracotomia/esternotomia), com pericardiocentese apenas como ponte quando a cirurgia não está imediatamente disponível.",
    "commentary": "Rotura de aorta (A): típica de trauma contuso por desaceleração; causa choque hipovolêmico, sem turgência jugular.\n\nPneumotórax aberto (C): ferimento soprante com entrada de ar e insuficiência respiratória; não justifica bulhas abafadas.\n\nLesão de baço (D): choque hemorrágico com jugulares colabadas; o ferimento é torácico alto, longe do baço.",
    "reference": "ATLS — 10ª edição: Trauma torácico",
    "tags": [
      "tamponamento cardíaco",
      "tríade de Beck",
      "trauma torácico"
    ],
    "tip": "Tríade de Beck = tamponamento: hipotensão + turgência jugular + bulhas abafadas."
  },
  {
    "id": "dante2026-70",
    "topography": "5.1",
    "topic": "Câncer de colo uterino",
    "module": "Saúde Coletiva",
    "text": "Mulher, de 27 anos de idade, comparece à Unidade Básica de Saúde para “fazer o preventivo”. Ela está assintomática, nunca teve sangramento vaginal anormal nem sangramento pós-coito e não está grávida. Relata vida sexual ativa desde os 17 anos de idade e nunca fez rastreamento para câncer do colo do útero.\n\nApós dois meses, a paciente retorna com o resultado do exame alterado e presença do genótipo 16 do HPV.\n\nQual é a conduta recomendada?",
    "options": [
      "Indicar tratamento ablativo imediato do colo uterino.",
      "Aguardar 12 meses e repetir o teste de DNA-HPV oncogênico.",
      "Solicitar citologia reflexa e encaminhar para colposcopia.",
      "Encaminhar diretamente para a colposcopia."
    ],
    "correctAnswer": 3,
    "explanation": "Teste de DNA-HPV positivo para o genótipo 16. Os tipos 16 e 18 respondem por cerca de 70% dos cânceres de colo e têm o maior risco de lesão de alto grau. Pela diretriz de 2025, o resultado positivo para HPV 16 e/ou 18 leva diretamente à colposcopia, sem necessidade de citologia antes.\n\nJá o positivo para outros tipos oncogênicos (não 16/18) segue para citologia reflexa: se alterada, colposcopia; se normal, repetir o teste de HPV em 1 ano.",
    "commentary": "Tratamento ablativo imediato (A): não se trata sem diagnóstico; a colposcopia com biópsia define se há lesão e qual tratamento.\n\nRepetir o HPV em 12 meses (B): conduta para HPV positivo de outros tipos com citologia reflexa normal; não para HPV 16.\n\nCitologia reflexa e colposcopia (C): a citologia reflexa é usada para os tipos não 16/18; no 16/18 o encaminhamento é direto.",
    "tip": "DNA-HPV: 16/18 → colposcopia direto. Outros oncogênicos → citologia reflexa (alterada → colposcopia; normal → HPV em 1 ano).",
    "reference": "INCA/Ministério da Saúde. Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero, 2025.",
    "tags": [
      "DNA-HPV",
      "HPV 16",
      "colposcopia",
      "câncer de colo uterino"
    ]
  },
  {
    "id": "famema2025-98",
    "topography": "14",
    "topic": "Insuficiência respiratória",
    "module": "Clínica Médica",
    "text": "É possível realizar o desmame da ventilação mecânica uma vez que o paciente tenha tido resolução do motivo que o levou à intubação, apresente tosse e drive respiratório adequados e",
    "options": [
      "estabilidade hemodinâmica, com FC < 140 bpm sem vasopressor.",
      "pontuação na escala de Glasgow > 12.",
      "PEEP ≤ 5-9 mmHg.",
      "relação PO2/FIO2 ≥ 140."
    ],
    "correctAnswer": 0,
    "explanation": "Para iniciar o teste de respiração espontânea, o paciente deve ter resolvido a causa da intubação, ter drive respiratório e tosse adequados, oxigenação aceitável e estabilidade hemodinâmica. Nos critérios clássicos, estabilidade hemodinâmica significa FC ≤ 140 bpm, sem isquemia miocárdica e sem vasopressor (ou dose baixa e estável).",
    "commentary": "Glasgow > 12 (B): exigência excessiva; os protocolos pedem paciente desperto, capaz de obedecer comandos, em geral com Glasgow ≥ 8–9 (sem sedação ou com sedação leve).\n\nPEEP ≤ 5–9 mmHg (C): a PEEP é medida em cmH₂O, e o critério é PEEP ≤ 5–8 cmH₂O.\n\nPaO₂/FiO₂ ≥ 140 (D): o critério de oxigenação é PaO₂/FiO₂ ≥ 150–200, com FiO₂ ≤ 0,4–0,5.",
    "tip": "Pronto para o TRE: causa resolvida, desperto, tosse eficaz, PaO₂/FiO₂ ≥ 150–200 com FiO₂ ≤ 0,4 e PEEP ≤ 5–8 cmH₂O, FC ≤ 140 e sem vasopressor relevante.",
    "reference": "Associação de Medicina Intensiva Brasileira (AMIB) e SBPT. Diretrizes Brasileiras de Ventilação Mecânica, 2013. Boles JM et al. Weaning from mechanical ventilation. Eur Respir J, 2007.",
    "tags": [
      "desmame da ventilação mecânica",
      "teste de respiração espontânea",
      "terapia intensiva"
    ]
  },
  {
    "id": "famerp2025-25",
    "topography": "5.1",
    "topic": "Câncer de colo uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 35 anos de idade, G=2 P=2 (N) A=0, colhe sua Colpocitologia Oncótica de rotina, cujo resultado veio LSIL (Lesão Intra-epitelial de Baixo grau).\n\nDe acordo com as Diretrizes Brasileiras para Rastreamento de Câncer do Colo Uterino, 2016, qual a próxima conduta?",
    "options": [
      "Fazer Colposcopia",
      "Repetir a Colpocitologia Oncótica em 6 meses",
      "Repetir a Colpocitologia Oncótica em 1 ano",
      "Repetir a Colpocitologia Oncótica em 3 anos"
    ],
    "correctAnswer": 1,
    "explanation": "Pelas Diretrizes Brasileiras de 2016, em mulheres com 25 anos ou mais e citologia com LSIL, a conduta é repetir a citologia em 6 meses. A maioria das lesões de baixo grau regride espontaneamente.\n\nSe duas citologias seguidas forem negativas, volta-se ao rastreamento trienal; se qualquer citologia repetida mostrar alteração igual ou mais grave, encaminha-se à colposcopia. (Abaixo de 25 anos, repete-se em 3 anos.)",
    "commentary": "Colposcopia (A): é a conduta para HSIL, ASC-H, AGC ou LSIL persistente, não para o primeiro LSIL.\n\nRepetir em 1 ano (C): o intervalo para LSIL em ≥ 25 anos é de 6 meses.\n\nRepetir em 3 anos (D): é a conduta para LSIL em mulheres com menos de 25 anos, ou o rastreamento de rotina após exames normais.",
    "tip": "LSIL: ≥ 25 anos → repetir em 6 meses; < 25 anos → repetir em 3 anos.",
    "reference": "INCA. Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero, 2ª ed., 2016.",
    "tags": [
      "LSIL",
      "rastreamento de câncer do colo",
      "citologia oncótica",
      "diretrizes brasileiras"
    ]
  },
  {
    "id": "famerp2026-66",
    "topography": "16",
    "topic": "Hérnias",
    "module": "Cirurgia",
    "text": "Mulher de 60 anos refere abaulamento doloroso na região inguinal direita há 3 meses, que desaparece quando se deita. Ao exame físico, observa-se presença de hérnia femoral redutível.\n\nQual é a estrutura anatômica determinante para a diferenciação clínica entre as hérnias inguinais e femorais?",
    "options": [
      "Anel inguinal interno",
      "Fáscia transversalis",
      "Ligamento inguinal",
      "Vasos epigástricos inferiores"
    ],
    "correctAnswer": 2,
    "explanation": "O ligamento inguinal é o marco que separa os dois tipos: as hérnias inguinais (diretas e indiretas) se exteriorizam ACIMA do ligamento inguinal, pelo canal inguinal; as hérnias femorais passam ABAIXO dele, pelo canal femoral (medialmente à veia femoral). A hérnia femoral é mais comum em mulheres e tem alto risco de encarceramento e estrangulamento, por isso deve ser sempre operada.",
    "commentary": "Anel inguinal interno (A): é por onde passa a hérnia inguinal indireta; não diferencia inguinal de femoral.\n\nFáscia transversalis (B): sua fraqueza no triângulo de Hesselbach causa a hérnia direta.\n\nVasos epigástricos inferiores (D): diferenciam hérnia inguinal direta (medial a eles) de indireta (lateral).",
    "tip": "Acima do ligamento inguinal = inguinal; abaixo = femoral. Vasos epigástricos: medial = direta, lateral = indireta.",
    "reference": "HerniaSurge Group. International guidelines for groin hernia management. Hernia, 2018. Sabiston Textbook of Surgery, 21ª ed. — Hérnias.",
    "tags": [
      "hérnia femoral",
      "ligamento inguinal",
      "hérnia inguinal",
      "anatomia cirúrgica"
    ]
  },
  {
    "id": "amp2026-69",
    "topography": "3.3",
    "topic": "Câncer de vesícula",
    "module": "Cirurgia",
    "text": "Durante avaliação de rotina, uma mulher de 63 anos, assintomática, realiza ultrassonografia abdominal que identifica imagem polipoide única na vesícula biliar, medindo 11 mm, sem sinais de colelitíase. A paciente não apresenta colangite esclerosante primária ou história familiar de câncer de vesícula. Exames laboratoriais estão normais. Com base nos critérios atuais, qual deve ser a conduta mais adequada?",
    "options": [
      "Iniciar tratamento com ácido ursodesoxicólico e acompanhar clinicamente.",
      "Repetir a ultrassonografia abdominal em 6 meses para avaliar crescimento da lesão.",
      "Realizar ressonância magnética das vias biliares para melhor caracterização do pólipo.",
      "Indicar colecistectomia laparoscópica eletiva devido ao risco aumentado de malignidade.",
      "Observar anualmente com exames de imagem, pois pólipos < 2 cm não exigem intervenção."
    ],
    "correctAnswer": 3,
    "explanation": "Pólipo de vesícula biliar ≥ 10 mm tem risco aumentado de malignidade e indicação de colecistectomia, mesmo sem sintomas. Outros fatores de risco são idade > 50–60 anos, crescimento ≥ 2 mm, base séssil, colangite esclerosante e etnia indiana. Nesta paciente de 63 anos, com pólipo de 11 mm, a colecistectomia laparoscópica eletiva está indicada.",
    "commentary": "Ácido ursodesoxicólico (A): não trata pólipos.\n\nRepetir o ultrassom em 6 meses (B) ou anualmente (E): o seguimento é para pólipos menores que 10 mm; o limite de cirurgia é 10 mm, não 20 mm.\n\nRessonância (C): não muda a indicação já definida pelo tamanho.",
    "reference": "ESGAR/EAES/EFISDS/ESGE 2022 — Management of gallbladder polyps",
    "tags": [
      "pólipo de vesícula biliar",
      "colecistectomia",
      "câncer de vesícula"
    ],
    "tip": "Pólipo de vesícula ≥ 10 mm = colecistectomia."
  },
  {
    "id": "amrigs2025-75",
    "module": "Pediatria",
    "text": "Criança, 7 anos, há 2 semanas em uso de fenitoína oral para tratamento de epilepsia de diagnóstico recente. Inicia com febre, linfadenopatia e rash pruriginoso de acometimento de cerca de 5% do tegumento cutâneo, associado a áreas de formação de bolhas, inclusive em mucosas. A principal hipótese diagnóstica é:",
    "options": [
      "Stevens-Johnson.",
      "Meningite viral aguda.",
      "Pênfigo foliáceo.",
      "Meningite bacteriana aguda."
    ],
    "correctAnswer": 0,
    "explanation": "Febre, rash com bolhas e acometimento de mucosas 1 a 3 semanas após iniciar fenitoína (anticonvulsivante aromático) sugerem reação cutânea grave a fármaco. Com descolamento de menos de 10% da superfície corporal, o diagnóstico é síndrome de Stevens-Johnson (10–30% = sobreposição; >30% = necrólise epidérmica tóxica). A conduta é suspender o fármaco e dar suporte.",
    "commentary": "Meningite viral (B) e bacteriana (D): não explicam bolhas cutâneas e mucosas; não há sinais meníngeos.\n\nPênfigo foliáceo (C): bolhas superficiais, sem acometimento de mucosas e sem relação temporal com fármaco.",
    "reference": "SBD — Consenso sobre reações cutâneas graves a medicamentos / Nelson Textbook of Pediatrics",
    "tags": [
      "síndrome de Stevens-Johnson",
      "farmacodermia",
      "fenitoína",
      "necrólise epidérmica tóxica"
    ],
    "tip": "SSJ <10% da pele; NET >30%. Anticonvulsivante aromático é causa clássica."
  },
  {
    "id": "cerman2025-1",
    "topography": "1.5",
    "topic": "Hipotireoidismo",
    "module": "Clínica Médica",
    "text": "Uma paciente de 30 anos, previamente saudável e assintomática, apresenta TSH elevado e T4 livre normal. Ao exame físico, não há sinais de bócio. Qual é a conduta mais apropriada neste caso?",
    "options": [
      "(A) Iniciar levotiroxina.",
      "(B) Realizar cintilografia da tireoide.",
      "(C) Repetir o TSH, T4 livre e anticorpo anti tireoperoxidase em 3 a 6 meses.",
      "(D) Dosar tireoglobulina, anti-tireoglobulina e anti tireoperoxidase para esclarecer a etiologia."
    ],
    "correctAnswer": 2,
    "explanation": "TSH elevado com T4 livre normal é hipotireoidismo subclínico. Em mulher jovem, assintomática, sem bócio e fora da gestação, o primeiro passo é confirmar: repetir TSH e T4 livre em 3 a 6 meses (o TSH se normaliza espontaneamente em boa parte dos casos) e dosar o anti-TPO, que indica tireoidite de Hashimoto e maior risco de progressão para hipotireoidismo clínico.\n\nO tratamento é considerado com TSH ≥ 10 mUI/L, sintomas, desejo de gestar ou anti-TPO positivo com TSH em elevação.",
    "commentary": "Iniciar levotiroxina (A): não se trata um único TSH levemente alterado em paciente assintomática; antes, confirma-se a persistência.\n\nCintilografia (B): serve para investigar hipertireoidismo e nódulos, não hipotireoidismo.\n\nTireoglobulina e anti-Tg (D): a tireoglobulina é marcador de seguimento do câncer diferenciado de tireoide; para etiologia do hipotireoidismo, basta o anti-TPO.",
    "reference": "Consenso da SBEM sobre hipotireoidismo subclínico (2013) / ATA Guidelines for the Treatment of Hypothyroidism (2014)",
    "tags": [
      "hipotireoidismo subclínico",
      "TSH",
      "anti-TPO",
      "tireoide"
    ]
  },
  {
    "id": "cerman2026-4",
    "topography": "1.5",
    "topic": "Hipertireoidismo",
    "module": "Clínica Médica",
    "text": "Qual dos seguintes achados é mais característico do hipertireoidismo por Doença de Graves?",
    "options": [
      "(A) Exoftalmia.",
      "(B) Bradicardia.",
      "(C) Mixedema.",
      "(D) Hiponatremia."
    ],
    "correctAnswer": 0,
    "explanation": "A oftalmopatia (exoftalmia), junto com o mixedema pré-tibial e a acropaquia, é manifestação específica da doença de Graves, causada pelos anticorpos contra o receptor do TSH (TRAb), que também atuam sobre fibroblastos orbitários. Não ocorre em outras causas de hipertireoidismo.",
    "commentary": "Bradicardia (B): o hipertireoidismo causa taquicardia e fibrilação atrial.\n\nMixedema (C): o mixedema generalizado é do hipotireoidismo; na Graves, há o mixedema pré-tibial localizado — mas a alternativa fala em mixedema genérico, e a exoftalmia é o achado mais característico.\n\nHiponatremia (D): não é achado típico do hipertireoidismo.",
    "reference": "Consenso Brasileiro para o diagnóstico e tratamento do hipertireoidismo (SBEM, 2013) / ATA Guidelines (2016)",
    "tags": [
      "doença de Graves",
      "hipertireoidismo",
      "oftalmopatia de Graves"
    ]
  },
  {
    "id": "enare2025-19",
    "module": "Clínica Médica",
    "text": "Um homem de 50 anos em tratamento para hepatite C, com cirrose hepática compensada CHILD PUGH A, tem histórico de falha terapêutica com uso prévio de antivirais de ação direta. O médico assistente do serviço de atenção especializada prescreveu um novo esquema terapêutico, recomendado pelo Ministério da Saúde.\n\nO esquema prescrito foi:",
    "options": [
      "sofosbuvir/velpastavir/ribavirina por 24 semanas",
      "sofosbuvir/daclatasvir por 12 semanas",
      "sofosbuvir/pibrentasvir + glecaprevir por 12 semanas",
      "sofosbuvir/velpastavir por 12 semanas",
      "sofosbuvir/ribavirina por 24 semanas"
    ],
    "correctAnswer": 2,
    "explanation": "Para pacientes com hepatite C e falha prévia a esquema com antiviral de ação direta (incluindo inibidores de NS5A), o PCDT do Ministério da Saúde recomenda retratamento com esquema de resgate. Em cirrose compensada (Child-Pugh A), o esquema disponível no SUS é glecaprevir/pibrentasvir associado a sofosbuvir por 12 semanas (a associação de três classes — inibidor de protease, inibidor de NS5A e inibidor de polimerase — aumenta a barreira genética). Inibidores de protease, como o glecaprevir, são contraindicados apenas na cirrose descompensada (Child B/C).",
    "commentary": "Sofosbuvir/velpatasvir/ribavirina por 24 semanas (A): é opção de retratamento em cirrose descompensada, situação em que inibidores de protease são contraindicados — não é o caso de Child A.\n\nSofosbuvir/daclatasvir por 12 semanas (B): esquema de primeira linha antigo; repeti-lo após falha não supera a resistência.\n\nSofosbuvir/velpatasvir por 12 semanas (D): é esquema de tratamento inicial; não é suficiente como resgate após falha a NS5A.\n\nSofosbuvir/ribavirina por 24 semanas (E): esquema antigo, de baixa eficácia, não recomendado para retratamento.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Ministério da Saúde – PCDT para Hepatite C e Coinfecções (2019, atualizações)",
    "tags": [
      "hepatite C",
      "antivirais de ação direta",
      "retratamento",
      "cirrose",
      "hepatologia"
    ],
    "tip": "Falha a DAA em Child A: sofosbuvir + glecaprevir/pibrentasvir por 12 semanas."
  },
  {
    "id": "fubog2025-4",
    "module": "Pediatria",
    "text": "Com relação ao rastreamento para displasia evolutiva do quadril na infância, é CORRETO afirmar:",
    "options": [
      "Manobra de Barlow não é mais utilizada no rastreio de displasia do quadril",
      "O diagnóstico precoce antes dos 3 a 6 meses de idade não impacta na escolha de tratamentos",
      "Gênero masculino é fator de risco para displasia de quadril",
      "A manobra de Ortolani provoca a redução do quadril"
    ],
    "correctAnswer": 3,
    "explanation": "No rastreamento da displasia do desenvolvimento do quadril, a manobra de Ortolani reduz um quadril luxado (o “clique” de entrada da cabeça femoral no acetábulo, com abdução), enquanto a de Barlow provoca a luxação de um quadril instável (adução e pressão posterior). Ambas são feitas até cerca de 3 meses. Os fatores de risco são sexo feminino, apresentação pélvica, primogênito, história familiar e oligoâmnio.",
    "commentary": "Barlow não é mais usada (A): Barlow e Ortolani continuam fazendo parte do exame do recém-nascido.\n\nDiagnóstico precoce não muda o tratamento (B): diagnosticado antes de 6 meses, o tratamento é com suspensório de Pavlik; mais tarde, costuma exigir redução fechada ou aberta.\n\nSexo masculino como fator de risco (C): a DDQ é muito mais frequente no sexo feminino.",
    "reference": "Sociedade Brasileira de Ortopedia Pediátrica; AAP Clinical Report – Evaluation and Referral for DDH (2016)",
    "tags": [
      "displasia do desenvolvimento do quadril",
      "manobra de Ortolani",
      "ortopedia pediátrica",
      "neonatologia"
    ],
    "tip": "Ortolani reduz (entra); Barlow luxa (sai)."
  },
  {
    "id": "fubog2025-74",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente, 45 anos, com queixa de perda urinária ao esforço e sem histórico de cirurgias pélvicas. A conduta mais adequada em relação ao uso do Estudo Urodinâmico (EUD) na abordagem da Incontinência Urinária (IU) feminina é:",
    "options": [
      "Solicitar o EUD para todos os casos de IU, a fim de definir a melhor conduta",
      "Solicitar o EUD antes do tratamento conservador da IU",
      "Não solicitar o EUD antes do tratamento conservador da IU",
      "Solicitar o EUD apenas se houver suspeita de disfunção do esvaziamento vesical"
    ],
    "correctAnswer": 2,
    "explanation": "Na incontinência urinária de esforço sem complicadores (sem cirurgia prévia, sem prolapso significativo, sem sintomas de esvaziamento), o diagnóstico é clínico, e o estudo urodinâmico não é necessário antes do tratamento conservador (fisioterapia do assoalho pélvico, mudança de hábitos). Ele fica reservado para casos complexos, falha do tratamento ou antes de cirurgia em situações selecionadas.",
    "commentary": "EUD para todos os casos (A) e antes do tratamento conservador (B): não muda a conduta inicial e acrescenta custo e desconforto.\n\nEUD só se suspeita de disfunção de esvaziamento (D): é uma das indicações, mas não a única (incontinência mista complexa, falha de tratamento, cirurgia prévia).",
    "reference": "Febrasgo – Incontinência urinária feminina; AUA/SUFU Guideline on Stress Urinary Incontinence (2023)",
    "tags": [
      "incontinência urinária de esforço",
      "estudo urodinâmico",
      "uroginecologia"
    ],
    "tip": "IUE simples: tratamento conservador sem urodinâmica."
  },
  {
    "id": "viv2026-29",
    "module": "Pediatria",
    "text": "O componente anatômico que determina a gravidade clínica e o grau de cianose na Tetralogia de Fallot é:",
    "options": [
      "A presença de hipertrofia ventricular direita",
      "O tamanho da comunicação interventricular",
      "O grau de obstrução da via de saída do ventrículo direito (estenose pulmonar)",
      "O grau de dextroposição da aorta"
    ],
    "correctAnswer": 2,
    "explanation": "Na tetralogia de Fallot (CIV ampla, cavalgamento da aorta, obstrução da via de saída do VD e hipertrofia do VD), o grau de obstrução da via de saída do ventrículo direito (estenose pulmonar infundibular/valvar) determina quanto sangue é desviado da direita para a esquerda pela CIV e, portanto, a intensidade da cianose e a gravidade clínica.",
    "commentary": "Hipertrofia do VD (A): é consequência da obstrução, não determinante da cianose.\n\nTamanho da CIV (B): a CIV é sempre grande (não restritiva) e não modula a cianose.\n\nGrau de dextroposição da aorta (D): não é o principal determinante da gravidade.",
    "reference": "Nelson – Tratado de Pediatria, 21ª ed.; Sociedade Brasileira de Cardiologia",
    "tags": [
      "tetralogia de Fallot",
      "cardiopatias congênitas cianóticas",
      "cardiologia pediátrica"
    ],
    "tip": "Fallot: mais estenose pulmonar = mais cianose."
  }
];
