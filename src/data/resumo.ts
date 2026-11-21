// Arquivo gerado por `npm run gen` a partir do banco de questões. Não editar à mão.
// O build e o servidor local regeneram este arquivo sozinhos; o `npm run validate` acusa se ficar desatualizado.
import type { Question } from '../types';

export const TOTAL_QUESTIONS = 3479;

export const COUNT_BY_AREA: Record<string, number> = {
  "Pediatria": 659,
  "Clínica Médica": 718,
  "Cirurgia": 638,
  "Ginecologia e Obstetrícia": 659,
  "Saúde Coletiva": 644,
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
    "label": "FELUMA 2027",
    "kind": "Residência",
    "year": 2027,
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
  "Clínica Médica|FUBOG": 8,
  "Pediatria|FUBOG": 21,
  "Ginecologia e Obstetrícia|FUBOG": 23,
  "Saúde Coletiva|FUBOG": 24,
  "Cirurgia|FUBOG": 23,
  "Ciências Básicas|FUBOG": 1
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
    "id": "tp2025-54",
    "topography": "14",
    "topic": "Emergências pediátricas",
    "module": "Pediatria",
    "text": "Recém-nascido, em sala de parto, apresenta apneia e cianose. Ao exame, encontra-se sem resposta, sem respiração espontânea e sem pulso palpável. O protocolo de reanimação é iniciado. Qual a primeira medida a ser adotada para otimizar as chances de sucesso da reanimação cardiopulmonar (RCP) neste paciente?",
    "options": [
      "(A) Priorizar a ventilação com pressão positiva.",
      "(B) Iniciar compressões torácicas imediatamente antes da ventilação.",
      "(C) Administrar epinefrina intravenosa antes de iniciar qualquer outra medida.",
      "(D) Realizar desfibrilação precoce com carga baixa, devido à idade do paciente."
    ],
    "correctAnswer": 0,
    "explanation": "Em neonatos, a etiologia típica da parada cardiopulmonar é respiratória/asfíxica. A priorização absoluta inicial deve ser direcionada à ventilação com pressão positiva (VPP).",
    "commentary": "A reanimação neonatal e manejo de PCR em sala de parto priorizam maciçamente a ventilação alveolar (VPP), pois nela repousa a reversão da asfixia secundária na imensa maioria dos casos. Compressões torácicas só são indicadas se, após 30 segundos de VPP bem executada com oxigênio, a FC se mantiver menor que 60 bpm. A epinefrina é uma medida tardia no algoritmo.",
    "reference": "Diretrizes 2022 da Sociedade Brasileira de Pediatria – Programa de Reanimação Neonatal.",
    "tags": [
      "neonatologia"
    ]
  },
  {
    "id": "tp2022-34",
    "topography": "2.2",
    "topic": "Insuficiência cardíaca",
    "module": "Clínica Médica",
    "text": "Mulher de 62 anos, HAS crônica. Há 6 meses com dispneia progressiva, paroxística noturna, edema de MMII e presença de B3. ECG com sobrecarga de VE. Qual o exame complementar e conduta mais apropriados?",
    "options": [
      "(A) Monitorização Ambulatorial da Pressão Arterial; substituir Captopril por Hidralazina.",
      "(B) Ecocardiograma; manter Captopril e associar Carvedilol e Furosemida.",
      "(C) Cintilografia Miocárdica; manter Captopril, associar Ivabradina e Furosemida.",
      "(D) Holter de 24 horas; manter Captopril, associar Carvedilol e Sustrate."
    ],
    "correctAnswer": 1,
    "explanation": "Hipertensa de longa data, mal controlada, com dispneia progressiva, dispneia paroxística noturna, ortopneia, edema de membros inferiores, B3, estertores em bases, hepatomegalia e cardiomegalia: quadro de insuficiência cardíaca congestiva, provavelmente de causa hipertensiva.\n\nO ecocardiograma é o exame que confirma o diagnóstico e mede a fração de ejeção, que define o tratamento. Na conduta, mantém-se o IECA (captopril, agora em uso correto), usa-se furosemida para aliviar a congestão e associa-se betabloqueador com benefício comprovado na IC (carvedilol), iniciado em dose baixa e aumentado aos poucos, o que também ajuda a controlar a taquicardia.",
    "commentary": "MAPA e hidralazina com tiazídico (A): a dúvida não é se a paciente é hipertensa, e sim a função do coração. Trocar o IECA por hidralazina retira um fármaco que reduz mortalidade na IC, e o tiazídico é fraco para a congestão.\n\nCintilografia e ivabradina (C): a cintilografia investiga isquemia, não é o exame inicial da IC. A ivabradina só entra em IC com fração reduzida em ritmo sinusal que segue com FC alta já em uso de betabloqueador na dose tolerada.\n\nHolter e Sustrate (D): o Holter avalia arritmias, que não são o problema principal. Sustrate (propatilnitrato) é nitrato antianginoso, sem papel no tratamento crônico dessa paciente.",
    "tip": "Suspeita de IC: ecocardiograma. Congestão: furosemida. Base do tratamento: IECA + betabloqueador da IC.",
    "reference": "Diretriz Brasileira de Insuficiência Cardíaca Aguda e Crônica – SBC. 2019.",
    "tags": [
      "cardiologia"
    ]
  },
  {
    "id": "tp2020-54",
    "topography": "9",
    "topic": "Anemia megaloblástica",
    "module": "Clínica Médica",
    "text": "R.L.N., sexo masculino, 22 anos, vegano há aproximadamente 3 anos, sem suplementação alimentar, com queixa de fraqueza, parestesias e hipoestesia nos membros inferiores. Ao exame físico, apresenta-se descorado 2+/4+, sem outras alterações. Realizou hemograma: Hb: 9,2 g/dL; Ht: 28%; VCM: 100fL; RDW: 16%; Leucócitos: 8.300/mm³ com diferencial normal. Plaquetas: 214.000/mm³; DHL: 1.500 U/L.\n\nDetermine a causa da anemia e do quadro clínico do paciente:",
    "options": [
      "(A) Anemia megaloblástica, deficiência de vitamina B12.",
      "(B) Anemia megaloblástica, deficiência de ácido fólico.",
      "(C) Anemia falciforme, microinfartos em circulação de membro inferior.",
      "(D) Anemia hemolítica autoimune pelo aumento do DHL."
    ],
    "correctAnswer": 0,
    "explanation": "Vegano sem suplementação, com anemia macrocítica, DHL elevada (eritropoiese ineficaz) e parestesias/hipoestesia em membros inferiores (lesão de cordões posteriores — degeneração combinada subaguda): deficiência de vitamina B12.",
    "commentary": "A deficiência de folato causa anemia megaloblástica sem alterações neurológicas, e é improvável em vegano. Não há dados de anemia falciforme. A DHL alta reflete hemólise intramedular, não autoimune.",
    "reference": "ZAGO, Marco Antônio; FALCÃO, Roberto Passetto; PASQUINI, Ricardo. Tratado de hematologia. São Paulo: Atheneu, 2013.",
    "tags": [
      "hematologia",
      "anemia megaloblástica",
      "neurologia"
    ]
  },
  {
    "id": "tp2025-62",
    "topography": "3.3",
    "topic": "Colangiocarcinoma",
    "module": "Cirurgia",
    "text": "Homem de 65 anos, tabagista e com histórico de colangite esclerosante primária, apresenta icterícia progressiva há dois meses, associada a perda de peso não intencional e prurido cutâneo. Colangiopancreatografia por ressonância magnética revela uma estenose irregular da via biliar hepática comum, com dilatação dos ductos intra-hepáticos. Qual é o diagnóstico mais provável?",
    "options": [
      "(A) Hepatocarcinoma com invasão da via biliar.",
      "(B) Adenocarcinoma pancreático com invasão da via biliar.",
      "(C) Colelitíase complicada com colangite crônica.",
      "(D) Colangiocarcinoma peri-hilar – Tumor de Klatskin."
    ],
    "correctAnswer": 3,
    "explanation": "O colangiocarcinoma peri-hilar (Tumor de Klatskin) é o tumor biliar primário mais comum no hilo hepático, fortemente associado à colangite esclerosante primária.",
    "commentary": "O colangiocarcinoma peri-hilar, ou hilar (chamado tumor de Klatskin), é um tumor maligno da árvore biliar, frequentemente associado à colangite esclerosante primária. Os achados clínicos incluem icterícia progressiva indolor, perda de peso e prurido, além de exames de imagem demonstrando estenose irregular da via biliar com dilatação dos ductos intra-hepáticos. O hepatocarcinoma está usualmente associado a cirrose e nódulos parenquimatosos. O adenocarcinoma pancreático cursa com massa pancreática e sinal de Courvoisier. A colelitíase cursa com quadro febril e álgico mais agudo.",
    "reference": "Rizvi, S., & Gores, G. J. (2013). Pathogenesis, diagnosis, and management of cholangiocarcinoma. Gastroenterology, 145(6), 1215-1229; Khan, S. A., Davidson, B. R. et al. (2012). Guidelines for the diagnosis and treatment of cholangiocarcinoma. Gut, 61(12), 1657-1669.",
    "tags": [
      "oncologia",
      "gastroenterologia"
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
    "id": "tp2022-100",
    "topography": "5.2",
    "topic": "Rotura prematura de membranas",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante (36 semanas), perda líquida clara. Especular: saída ativa por Valsalva. Toque: colo fechado. Sobre este caso:",
    "options": [
      "(A) Prescrição de penicilina após 18h de bolsa rota.",
      "(B) Cesárea de urgência obrigatória se bolsa rota > 6h.",
      "(C) Corticoindução é mandatória.",
      "(D) USG com ILA normal não exclui o diagnóstico de amniorexe."
    ],
    "correctAnswer": 3,
    "explanation": "O diagnóstico de rotura de membranas é clínico (anamnese e especular); o volume de líquido no USG pode estar normal em roturas altas.",
    "commentary": "O ILA normal não afasta bolsa rota. Com 36 semanas, a conduta é resolução da gravidez e profilaxia para GBS se indicado (sem necessidade de corticoide após 34 semanas).",
    "reference": "Cartilha Ministério da Saúde, 2021.",
    "tags": [
      "obstetrícia"
    ]
  },
  {
    "id": "tp2020-100",
    "topography": "5.2",
    "topic": "Trabalho de parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante de 25 anos, 35 semanas de amenorreia, pré-natal adequado, última consulta há 3 semanas. Procura UBS referindo dor em BV há 4 horas. Exame físico: bom estado geral, PA 120/80 mmHg, peso 52kg, ausência de edema em MMII. Exame obstétrico AU = 32cm; BCF 144 bpm; DU: 3 contrações moderadas de 10 minutos com toque vaginal de 2,0cm, esvaecido 60%, cefálico, plano-2 De Lee, bolsa íntegra.\n\nA conduta correta é:",
    "options": [
      "(A) Investigar infecção urinária, soroterapia com antiespasmódico e alta com sintomáticos.",
      "(B) Avaliar vitalidade fetal e encaminhar para unidade terciária.",
      "(C) Antibiótico profilático, investigar infecção urinária, corticoterapia e encaminhar para unidade terciária.",
      "(D) Corticoterapia, profilaxia do streptococcus do grupo B e encaminhar para unidade terciária."
    ],
    "correctAnswer": 1,
    "explanation": "Trabalho de parto prematuro a 35 semanas. Após 34 semanas não há indicação de tocólise nem, de rotina, de corticoide. A conduta na UBS é avaliar a vitalidade fetal e encaminhar a gestante à unidade terciária para assistência ao parto pré-termo.",
    "commentary": "Alta com sintomáticos é inadequada. Corticoide e antibiótico profilático não são as condutas centrais na UBS nessa idade gestacional.",
    "reference": "Montenegro, Carlos Antonio Barbosa Rezende, Obstetrícia Fundamental /Carlos Antonio Barbosa Montenegro, Jorge de Rezende Filho -11ª ed - Rio de Janeiro; Guanabara Koogan, 2008. / Luis Camano, Eduardo de Souza, Nelson Sass, Rosiane Mattar Guias de Medicina Ambulatorial e Hospitalar UNIFESP / EPM 1ª ed = São Paulo, Manole, 2003.",
    "tags": [
      "obstetrícia",
      "trabalho de parto prematuro"
    ]
  },
  {
    "id": "tp2025-107",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Paciente com diabetes mellitus tipo 2 já diagnosticada realiza acompanhamento regular com equipe multidisciplinar para evitar retinopatia e nefropatia diabética. Este caso representa qual nível de prevenção?",
    "options": [
      "(A) Prevenção primária",
      "(B) Prevenção secundária",
      "(C) Prevenção terciária",
      "(D) Prevenção quaternária"
    ],
    "correctAnswer": 1,
    "explanation": "De acordo com referenciais clássicos da Medicina de Família sobre níveis preventivos, a prevenção secundária visa à detecção precoce de lesões assintomáticas e ao tratamento de base imediato para conter o avanço ao espectro clínico desfavorável.",
    "commentary": "Embora o manejo de complicações estabelecidas de longo prazo seja classificado sob o crivo preventivo terciário (focado em reabilitação e limitação de incapacidades), a conduta ativa diagnóstica multiprofissional periódica voltada a interceptar manifestações ainda subclínicas em fase latente (como a busca ativa precoce por microalbuminúria ou retinopatia diabética inicial incipiente em paciente diagnosticado) assenta-se sob o escopo preventivo secundário.",
    "reference": "Lopes JM, Gusso G. Tratado de Medicina de Família e Comunidade, 2a ed. Porto Alegre: Artmed, 2019.",
    "tags": [
      "prevenção",
      "atenção primária"
    ]
  },
  {
    "id": "tp2022-6",
    "topography": "5.1",
    "topic": "Infertilidade",
    "module": "Ciências Básicas",
    "text": "Homem de 35 anos, sem filhos, não fumante, nega história de doenças crônicas ou recorrentes, bem como exposição tóxica prévia. Ao exame físico, apresenta volume testicular reduzido com ductos palpáveis. Os níveis de FSH séricos estão aumentados. Há presença de oligospermia em volume de sêmen normal, com espermatozoides com motilidade e morfologia normais. Cariótipo em bandamento GTG: 46,XY. A investigação diagnóstica deve prosseguir para:",
    "options": [
      "(A) Análise de microdeleções no cromossomo Y.",
      "(B) Análise molecular do gene CFTR.",
      "(C) Painel de genes por NGS para síndrome de Kallmann.",
      "(D) Diagnóstico molecular da síndrome de Kartagener."
    ],
    "correctAnswer": 0,
    "explanation": "Em casos de insuficiência testicular primária (FSH alto) com cariótipo normal, a análise de microdeleções do cromossomo Y é a próxima etapa.",
    "commentary": "O enunciado apresenta quadro de insuficiência testicular primária (FSH elevado) com oligospermia e cariótipo 46,XY normal. A avaliação inicial padrão nestes casos é o cariótipo seguido pela análise de microdeleções no braço longo do cromossomo Y (região AZF). A análise do gene CFTR seria mais indicada em casos obstrutivos (azoospermia com volume seminal baixo). A síndrome de Kallmann cursaria com FSH baixo (hipogonadismo hipogonadotrófico).",
    "reference": "Wosnitzer, M.S. - Genetic evaluation of male infertility. Transl Androl Urol 2014;3(1):17-26.",
    "tags": [
      "genética",
      "urologia"
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
    "id": "enamed-2026-25",
    "topography": "5.1",
    "topic": "Doença inflamatória pélvica",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 20 anos procura Unidade de Pronto Atendimento devido a queixa de corrimento vaginal há 7 dias, associado a odor fétido e prurido leve. Refere início recente de dor pélvica hipogástrica, febre não aferida e dispareunia. O exame ginecológico mostra corrimento acinzentado, colo uterino doloroso à mobilização e dor à palpação anexial bilateral.\n\nQual é o tratamento medicamentoso nesse caso, considerando-se o diagnóstico provável?",
    "options": [
      "(A) Metronidazol, ceftriaxona e doxiciclina.",
      "(B) Fluconazol, azitromicina e clidamicina.",
      "(C) Doxiciclina, ceftriaxona e gentamicina.",
      "(D) Miconazol, metronidazol e azitromicina."
    ],
    "correctAnswer": 0,
    "explanation": "Corrimento acinzentado com odor fétido sugere vaginose bacteriana, e dor pélvica, febre, dor à mobilização do colo e dor anexial definem doença inflamatória pélvica (DIP).\n\nO esquema ambulatorial do Ministério da Saúde para DIP é ceftriaxona 500 mg IM dose única + doxiciclina 100 mg VO 12/12 h por 14 dias + metronidazol 500 mg VO 12/12 h por 14 dias, cobrindo gonococo, clamídia e anaeróbios.",
    "commentary": "Fluconazol e miconazol tratam candidíase. Gentamicina e clindamicina fazem parte de esquemas parenterais hospitalares, e não na combinação proposta. (Gabarito preliminar do INEP.)",
    "reference": "Ministério da Saúde. PCDT para Atenção Integral às Pessoas com IST, 2022",
    "tags": [
      "ginecologia",
      "IST",
      "doença inflamatória pélvica"
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
    "id": "hosbos2027-51",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente vem para avaliação pela medicina fetal, para ser submetida ao primeiro ultrassom da gestação. Refere idade gestacional cronológica de 8 semanas. À imagem, identificados 2 sacos gestacionais e 2 embriões, sendo 1 em cada saco gestacional.\n\nDe acordo com o caso apresentado e com os conhecimentos sobre gemelidade, assinale a alternativa correta.",
    "options": [
      "(A) A presença de 2 sacos gestacionais confirma gestação dizigótica.",
      "(B) Presença de 2 sacos gestacionais indica gestação monocoriônica e diamniótica.",
      "(C) A presença de 2 sacos gestacionais origina o sinal do lâmbda.",
      "(D) O sinal do T é característico de gestação dicoriônica.",
      "(E) Nesta gestação será identificada 1 placenta."
    ],
    "correctAnswer": 2,
    "explanation": "Dois sacos gestacionais separados, cada um com um embrião, na ultrassonografia de 8 semanas, indicam gestação dicoriônica e diamniótica.\n\nNa dicoriônica, o tecido coriônico se insinua entre as membranas na inserção placentária e forma o sinal do lambda (ou do twin peak). Na monocoriônica diamniótica, a membrana fina forma o sinal do T. A corionicidade é mais bem definida no primeiro trimestre.",
    "commentary": "Confirma dizigótica (A): cerca de 1/3 dos monozigóticos (divisão até o 3º dia) também são dicoriônicos; a corionicidade não define a zigoticidade.\n\nMonocoriônica diamniótica (B): esta tem um único saco coriônico com duas cavidades amnióticas.\n\nSinal do T na dicoriônica (D): o sinal do T é da monocoriônica.\n\nUma placenta (E): na dicoriônica há duas placentas (que podem se fundir, mas os córions são separados).",
    "reference": "ISUOG Practice Guidelines: role of ultrasound in twin pregnancy / Zugaib Obstetrícia",
    "tags": [
      "obstetrícia",
      "gestação gemelar",
      "corionicidade",
      "sinal do lambda"
    ]
  },
  {
    "id": "hosbos2025-54",
    "topography": "5.1",
    "topic": "Climatério e menopausa",
    "module": "Ginecologia e Obstetrícia",
    "text": "Diversos mecanismos biológicos estão potencialmente ligados à relação entre alterações hormonais da pós-menopausa, comprometimento cognitivo e início da demência. Assinale a alternativa que apresenta o hormônio que possui diretamente grande impacto nos processos neurais por meio de ações genômicas e não genômicas, incluindo alterações na espinogênese e sinaptogênese, no número neuronal e nas taxas metabólicas de glicose.",
    "options": [
      "(A) Estrogênio.",
      "(B) Progesterona.",
      "(C) FSH.",
      "(D) LH.",
      "(E) Testosterona."
    ],
    "correctAnswer": 0,
    "explanation": "O estrogênio tem receptores amplamente distribuídos no cérebro (hipocampo, córtex pré-frontal). Por ações genômicas e não genômicas, ele estimula a formação de espinhas dendríticas e sinapses, preserva neurônios e aumenta o metabolismo cerebral da glicose.\n\nA queda do estrogênio na menopausa é o principal mecanismo hormonal estudado na relação entre menopausa e declínio cognitivo.",
    "commentary": "Progesterona (B): tem ações neuroativas (por metabólitos como a alopregnanolona), mas não é o hormônio central nesse processo.\n\nFSH (C) e LH (D): sobem na menopausa; há estudos experimentais, mas sem o papel direto descrito.\n\nTestosterona (E): tem efeitos neurais menores nas mulheres.",
    "reference": "The 2022 Hormone Therapy Position Statement of The North American Menopause Society",
    "tags": [
      "menopausa",
      "estrogênio",
      "cognição",
      "demência"
    ]
  },
  {
    "id": "scmbh2026-47",
    "topography": "15",
    "topic": "Vigilância epidemiológica",
    "module": "Saúde Coletiva",
    "text": "É CORRETO afirmar que a Vigilância Sanitária (VISA), no controle de água e alimentos:",
    "options": [
      "(A) Limita-se à punição administrativa, sem interface com educação sanitária.",
      "(B) Atua apenas em produtos industrializados, sem alcance em serviços de alimentação artesanal.",
      "(C) Integra vigilância ambiental e epidemiológica, articulando risco, inspeção e comunicação.",
      "(D) Não executa análise laboratorial, delegando-a exclusivamente a serviços assistenciais."
    ],
    "correctAnswer": 2,
    "explanation": "A Vigilância Sanitária, no controle de água e alimentos, atua de forma integrada com a vigilância ambiental (qualidade da água, programa Vigiagua) e a epidemiológica (surtos de DTA). Articula avaliação de risco, inspeção, análise laboratorial (por meio dos LACEN), educação sanitária e comunicação de risco.",
    "commentary": "Só punição administrativa (A): a VISA também educa, orienta e comunica risco.\n\nSó produtos industrializados (B): também fiscaliza serviços de alimentação, inclusive artesanais e comerciais.\n\nSem análise laboratorial (D): conta com a rede de laboratórios de saúde pública (LACEN) para análises fiscais.",
    "reference": "Lei nº 9.782/1999 (Sistema Nacional de Vigilância Sanitária) / Lei nº 8.080/1990",
    "tags": [
      "saúde coletiva",
      "vigilância sanitária",
      "vigilância em saúde",
      "segurança dos alimentos"
    ]
  },
  {
    "id": "revalida-2025-1-75",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 35 anos, contente por sua primeira gravidez, começa o pré-natal na unidade básica de saúde (UBS) de seu bairro. Durante a consulta de enfermagem, é identificado, no exame das mamas, um nódulo na mama direita. Quando informada sobre esse achado, a paciente relata que sua mãe teve câncer de mama aos 38 anos.\n\nDiante desse quadro, a conduta médica indicada é",
    "options": [
      "(A) requisitar biópsia do nódulo mamário guiada por ultrassonografia.",
      "(B) encaminhar a paciente para o ambulatório de gestação de alto risco.",
      "(C) solicitar ultrassonografia de mamas e considerar realização de mamografia com proteção abdominal.",
      "(D) aguardar o final da gestação para realizar investigação do nódulo a partir de ultrassonografia e de mamografia."
    ],
    "correctAnswer": 2,
    "explanation": "Nódulo mamário palpável na gestação deve ser investigado sem atraso: o câncer de mama associado à gestação costuma ser diagnosticado tardiamente. O primeiro exame é a ultrassonografia de mamas; a mamografia pode ser feita com proteção abdominal (dose fetal desprezível), e a biópsia por agulha grossa é segura se houver lesão suspeita. A história de mãe com câncer aos 38 anos aumenta a suspeita.",
    "commentary": "Biópsia direta (A): a biópsia vem depois da imagem, conforme a classificação do achado.\n\nAlto risco obstétrico (B): o nódulo não é fator de risco obstétrico; deve ser investigado pela mastologia.\n\nAguardar o fim da gestação (D): atrasa o diagnóstico de possível câncer.",
    "reference": "Febrasgo — Câncer de mama na gestação / INCA",
    "tags": [
      "ginecologia",
      "câncer de mama",
      "gestação",
      "nódulo mamário"
    ],
    "tip": "Nódulo na mama na gravidez: investigue já (USG; mamografia com proteção abdominal se precisar)."
  },
  {
    "id": "sespe2026-17",
    "topography": "16",
    "topic": "Pós-operatório",
    "module": "Clínica Médica",
    "text": "Homem de 66 anos, pós-operatório de colectomia por tumor, apresenta febre persistente, dor abdominal difusa, distensão e piora hemodinâmica. Chega à UTI com PA 86/54 mmHg após 2 L de cristaloide, lactato 4,7 mmol/L, leucócitos 19.000/mm³ e PCR > 300 mg/L. Tomografia apresenta coleção sub-hepática de 6 cm com gás, sugerindo processo infeccioso ativo. Norepinefrina já em 0,15 mcg/kg/min com pouca melhora clínica.\n\nQual é a conduta imediata mais adequada?",
    "options": [
      "Aumentar vasopressor até normalizar PA.",
      "Trocar antibiótico e observar por 24 h.",
      "Realizar controle de foco cirúrgico/percutâneo + antibiótico adequado.",
      "Usar corticoide em altas doses como primeira medida.",
      "Aguardar evolução clínica para decidir intervenção."
    ],
    "correctAnswer": 2,
    "explanation": "Choque séptico no pós-operatório de colectomia com coleção sub-hepática de 6 cm com gás: há um foco infeccioso drenável. O pilar do tratamento é o controle do foco — drenagem percutânea guiada por imagem ou reabordagem cirúrgica — o quanto antes (idealmente em até 6–12 horas), junto com antibiótico de amplo espectro. Sem drenar o foco, o choque não se resolve.",
    "commentary": "Só aumentar vasopressor (A): trata a consequência e não a causa.\n\nTrocar o antibiótico e observar (B): antibiótico não penetra bem em abscesso; sem drenagem não há cura.\n\nCorticoide em dose alta (D): hidrocortisona em dose baixa é adjuvante no choque refratário, não primeira medida.\n\nAguardar (E): atrasar o controle de foco aumenta a mortalidade.",
    "reference": "Surviving Sepsis Campaign 2021 / WSES — Management of intra-abdominal infections (2017)",
    "tags": [
      "sepse",
      "controle de foco",
      "abscesso intra-abdominal",
      "pós-operatório"
    ],
    "tip": "Sepse com coleção: drene o foco — antibiótico sozinho não resolve."
  },
  {
    "id": "hpp2026-17",
    "topography": "1.1",
    "topic": "Demências",
    "module": "Clínica Médica",
    "text": "Homem de 70 anos apresenta declínio cognitivo progressivo há 18 meses, caracterizado por lentificação do raciocínio e dificuldades de atenção. A família refere que, nos últimos 6 meses, ele passou a ter incontinência urinária e quedas frequentes. No exame, observa-se marcha em passos curtos e magnéticos, com preservação de força muscular. A tomografia de crânio mostra ventriculomegalia desproporcional à atrofia cortical. Qual o diagnóstico mais provável?",
    "options": [
      "Demência com corpos de Lewy.",
      "Doença de Alzheimer.",
      "Demência vascular.",
      "Hidrocefalia de pressão normal."
    ],
    "correctAnswer": 3,
    "explanation": "Idoso com a tríade de Hakim-Adams: distúrbio de marcha (passos curtos, \"magnética\", com força preservada), incontinência urinária e declínio cognitivo de padrão subcortical (lentificação, desatenção). A tomografia mostra ventriculomegalia desproporcional à atrofia cortical.\n\nO diagnóstico é hidrocefalia de pressão normal, uma das demências potencialmente reversíveis. O tap test (punção liquórica de alívio) ajuda a prever resposta à derivação ventriculoperitoneal.",
    "commentary": "Corpos de Lewy (A): flutuação cognitiva, alucinações visuais bem formadas e parkinsonismo; não cursa com ventriculomegalia desproporcional.\n\nAlzheimer (B): começa com perda de memória episódica; incontinência e distúrbio de marcha aparecem só em fases avançadas, e a imagem mostra atrofia hipocampal.\n\nDemência vascular (C): evolução em degraus, sinais focais e lesões isquêmicas/leucoaraiose na imagem.",
    "reference": "Diretrizes da Academia Brasileira de Neurologia — Demências / Harrison",
    "tags": [
      "hidrocefalia de pressão normal",
      "demências",
      "tríade de Hakim"
    ],
    "tip": "Marcha magnética + incontinência + demência = hidrocefalia de pressão normal (\"wet, wobbly, wacky\")."
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
    "id": "famema2025-67",
    "topography": "1.2",
    "topic": "Retinopatia diabética",
    "module": "Clínica Médica",
    "text": "Assinale a alternativa correta sobre a retinopatia diabética.",
    "options": [
      "As avaliações de retina em diabéticos devem ser feitas a cada 10 anos.",
      "A progressão da retinopatia diabética tem pouca relação com a glicemia e a pressão arterial.",
      "Tem início súbito e evolução rápida.",
      "É uma das principais causas de cegueira irreversível no Brasil."
    ],
    "correctAnswer": 3,
    "explanation": "A retinopatia diabética é uma das principais causas de cegueira irreversível no Brasil e a principal em adultos em idade produtiva. A evolução é silenciosa: a visão costuma estar preservada até fases avançadas (edema macular, retinopatia proliferativa com hemorragia vítrea ou descolamento tracional).\n\nPor isso o rastreamento com fundo de olho é anual: no DM2 desde o diagnóstico e no DM1 após 5 anos de doença (ou na puberdade). Controle glicêmico e pressórico reduz a progressão.",
    "commentary": "Avaliação a cada 10 anos (A): o exame é anual (pode ser a cada 1–2 anos se exames seguidos normais).\n\nPouca relação com glicemia e PA (B): estudos como DCCT e UKPDS mostraram que o controle glicêmico e pressórico reduz o surgimento e a progressão.\n\nInício súbito e evolução rápida (C): a evolução é lenta e assintomática, ao longo de anos; daí a necessidade do rastreamento.",
    "tip": "Retinopatia diabética: silenciosa. Fundo de olho anual — DM2 desde o diagnóstico, DM1 após 5 anos.",
    "reference": "Sociedade Brasileira de Diabetes. Diretriz 2024 – Retinopatia diabética. Conselho Brasileiro de Oftalmologia. Diretrizes de retinopatia diabética.",
    "tags": [
      "retinopatia diabética",
      "rastreamento",
      "cegueira"
    ]
  },
  {
    "id": "famema2026-87",
    "topography": "13",
    "topic": "Transtornos de ansiedade",
    "module": "Saúde Coletiva",
    "text": "Assinale a alternativa que inclui os transtornos psiquiátricos prevalentes nos Centros de Atenção Primária, os chamados “transtornos mentais comuns”.",
    "options": [
      "Ansiedade, depressão e somatização.",
      "Transtorno bipolar e esquizofrenia.",
      "Transtorno de personalidade e transtorno de sintomas neurológicos funcionais.",
      "Transtorno de déficit de atenção e hiperatividade e transtorno obsessivo-compulsivo."
    ],
    "correctAnswer": 0,
    "explanation": "Transtornos mentais comuns são quadros de sofrimento psíquico frequentes na atenção primária, que combinam sintomas depressivos, ansiosos e somáticos (insônia, fadiga, irritabilidade, esquecimento, dificuldade de concentração, queixas físicas sem causa orgânica). Têm prevalência alta (cerca de 30–50% dos atendimentos na APS) e são manejados majoritariamente pela própria atenção primária, com apoio matricial.",
    "commentary": "Transtorno bipolar e esquizofrenia (B): são transtornos mentais graves e persistentes, menos prevalentes e geralmente acompanhados também pelos CAPS.\n\nTranstorno de personalidade e sintomas neurológicos funcionais (C): não são o núcleo dos transtornos mentais comuns.\n\nTDAH e TOC (D): têm prevalência menor e não compõem o conceito.",
    "tip": "Transtornos mentais comuns = ansiedade + depressão + somatização. Muito prevalentes na APS; rastreio com SRQ-20.",
    "reference": "Ministério da Saúde. Caderno de Atenção Básica nº 34 – Saúde Mental, 2013. Goldberg D, Huxley P. Common mental disorders: a bio-social model, 1992.",
    "tags": [
      "transtornos mentais comuns",
      "atenção primária",
      "saúde mental"
    ]
  },
  {
    "id": "famerp2026-21",
    "topography": "5.1",
    "topic": "Mioma uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 38 anos, nuligesta com desejo reprodutivo, procura ambulatório de ginecologia com queixa de aumento do volume do fluxo menstrual há 6 meses. A ultrassonografia pélvica endovaginal evidenciou dois nódulos de mioma, sendo o maior em parede uterina anterior de 2 x 3 cm (FIGO 1) e o menor com 1,5 x 2 cm (FIGO 4).\n\nAssinale a melhor alternativa para o tratamento definitivo do quadro:",
    "options": [
      "Curetagem uterina para remoção de leiomioma FIGO 4",
      "Anti-inflamatório e ácido tranexâmico para controle do sangramento",
      "Miomectomia do leiomioma FIGO 1 por histeroscopia cirúrgica",
      "Propor tratamento com anticoncepcional combinado de uso contínuo"
    ],
    "correctAnswer": 2,
    "explanation": "Nuligesta de 38 anos com desejo reprodutivo e sangramento menstrual aumentado. Pela classificação FIGO, o mioma FIGO 1 é submucoso com menos de 50% de componente intramural — é ele que distorce a cavidade e causa o sangramento. O FIGO 4 é intramural, sem contato com a cavidade, e de 2 cm, sem indicação de tratamento.\n\nO tratamento definitivo que preserva a fertilidade é a miomectomia histeroscópica do mioma FIGO 1 (indicada para FIGO 0, 1 e, em mãos experientes, 2).",
    "commentary": "Curetagem para o FIGO 4 (A): a curetagem não remove mioma, e o FIGO 4 é intramural, sem acesso pela cavidade.\n\nAINE e ácido tranexâmico (B): controlam o sangramento, mas não são tratamento definitivo.\n\nAnticoncepcional contínuo (D): controle sintomático; impede a gestação desejada e não trata o mioma submucoso.",
    "tip": "Mioma submucoso FIGO 0–1 (e 2 selecionado) + sangramento ou infertilidade = miomectomia histeroscópica.",
    "reference": "Munro MG et al. The two FIGO systems for normal and abnormal uterine bleeding symptoms and classification of causes of AUB (PALM-COEIN). Int J Gynaecol Obstet, 2018. FEBRASGO. Miomatose uterina — Protocolo, 2021.",
    "tags": [
      "mioma submucoso",
      "classificação FIGO",
      "miomectomia histeroscópica",
      "sangramento uterino anormal"
    ]
  },
  {
    "id": "hsrc2026-41",
    "topography": "15",
    "topic": "Saúde do trabalhador",
    "module": "Saúde Coletiva",
    "text": "A Norma Regulamentadora n.º 1 que trata das disposições gerais e gerenciamento de riscos ocupacionais, incluiu explicitamente que a partir de 2022 as organizações obrigadas a constituir CIPA nos termos da NR-05 devem adotar medidas com vistas à prevenção e ao combate do",
    "options": [
      "Assédio moral e discriminação de raça.",
      "Assédio sexual e às demais formas de violência no âmbito do trabalho.",
      "Assédio moral e discriminação de gênero.",
      "Assédio sexual e discriminação de credo religioso.",
      "Assédio moral e discriminação de trabalhadores PCD."
    ],
    "correctAnswer": 1,
    "explanation": "A Lei 14.457/2022 alterou a NR-5 e passou a chamar a CIPA de Comissão Interna de Prevenção de Acidentes e de Assédio. As empresas obrigadas a constituir CIPA devem adotar medidas de prevenção e combate ao assédio sexual e às demais formas de violência no trabalho, como regras de conduta, canais de denúncia e capacitação anual.",
    "commentary": "Assédio moral e discriminação racial (A): o texto legal fala em assédio sexual e demais formas de violência, não destacando apenas raça.\n\nAssédio moral e discriminação de gênero (C): o foco explícito da lei é o assédio sexual.\n\nAssédio sexual e discriminação religiosa (D): a lei não especifica credo; fala em todas as formas de violência.\n\nAssédio moral e PCD (E): não corresponde ao texto.",
    "reference": "Lei nº 14.457/2022 / Norma Regulamentadora nº 5 (Portaria MTP 4.219/2022)",
    "tags": [
      "saúde do trabalhador",
      "CIPA",
      "assédio sexual",
      "normas regulamentadoras"
    ],
    "tip": "Desde 2022 a CIPA é \"de Prevenção de Acidentes e de Assédio\"."
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
    "id": "cerman2025-53",
    "topography": "5.1",
    "topic": "Vaginose bacteriana",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma paciente de 28 anos apresenta queixa de corrimento vaginal branco-acinzentado, com odor fétido semelhante a peixe, especialmente após as relações sexuais. Ao exame microscópico, nota-se a presença de células clue (células epiteliais cobertas por bactérias). Qual é o diagnóstico mais provável e o tratamento de escolha para essa condição?",
    "options": [
      "(A) Vaginose bacteriana – metronidazol 500 mg, duas vezes ao dia por 7 dias.",
      "(B) Vaginose bacteriana – Azitromicina 1g dose única por via oral.",
      "(C) Tricomoníase – Azitromicina 1g, dose única por via oral.",
      "(D) Tricomoníase – metronidazol 2g, dose única por via oral."
    ],
    "correctAnswer": 0,
    "explanation": "Corrimento branco-acinzentado, homogêneo, com odor de peixe que piora após o coito (liberação de aminas com o pH alcalino do sêmen) e clue cells: vaginose bacteriana (critérios de Amsel). O tratamento de escolha é metronidazol 500 mg VO de 12 em 12 horas por 7 dias.",
    "commentary": "Vaginose com azitromicina (B): azitromicina não trata vaginose bacteriana.\n\nTricomoníase com azitromicina (C): o diagnóstico é vaginose (clue cells); e tricomoníase se trata com metronidazol.\n\nTricomoníase com metronidazol 2 g (D): o corrimento da tricomoníase é amarelo-esverdeado e bolhoso, com colo em framboesa e protozoário móvel ao exame a fresco.",
    "reference": "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022)",
    "tags": [
      "vaginose bacteriana",
      "clue cells",
      "metronidazol",
      "critérios de Amsel"
    ]
  },
  {
    "id": "cerman2026-41",
    "topography": "5.1",
    "topic": "Contracepção",
    "module": "Ginecologia e Obstetrícia",
    "text": "De acordo com os critérios de elegibilidade da OMS (2015), o uso de métodos contraceptivos injetáveis mensais NÃO deve ser indicado em mulheres que fazem uso de:",
    "options": [
      "(A) rifampicina.",
      "(B) lamotrigina.",
      "(C) cetoconazol.",
      "(D) zidovudina."
    ],
    "correctAnswer": 0,
    "explanation": "A rifampicina é um potente indutor enzimático hepático e acelera o metabolismo dos estrogênios e progestagênios, reduzindo a eficácia de métodos hormonais combinados. Pelos critérios da OMS (2015), seu uso classifica o injetável mensal (combinado) como categoria 3 — o método não deve ser indicado. Prefere-se DIU de cobre, DIU hormonal ou acetato de medroxiprogesterona trimestral.",
    "commentary": "Lamotrigina (B): os combinados reduzem o nível da lamotrigina, mas o anticonvulsivante não reduz a eficácia do contraceptivo; para o injetável mensal é categoria 2/3 conforme a fonte, menos restritivo que a rifampicina.\n\nCetoconazol (C): antifúngicos não reduzem a eficácia dos contraceptivos (categoria 1).\n\nZidovudina (D): os ITRN não interagem de forma relevante (categoria 1).",
    "reference": "OMS — Critérios Médicos de Elegibilidade para Uso de Métodos Anticoncepcionais, 5ª ed. (2015)",
    "tags": [
      "contracepção",
      "critérios de elegibilidade da OMS",
      "rifampicina",
      "interação medicamentosa"
    ]
  },
  {
    "id": "enare2025-40",
    "module": "Cirurgia",
    "text": "Durante o pneumoperitônio para realização de cirurgias por acesso videolaparoscópico, algumas alterações hemodinâmicas podem ocorrer no paciente.\n\nEm relação a essas alterações, é correto afirmar que:",
    "options": [
      "há diminuição do débito cardíaco, com aumento do retorno venoso",
      "ocorre hipotensão por compressão mecânica da aorta abdominal",
      "a oligúria ocorre devido à hipercapnia e retenção de bicarbonato pelos rins",
      "a bradicardia ocorre por estímulo vasovagal pela distensão abdominal",
      "arritmias cardíacas e outros distúrbios de ritmo cardíaco são raros"
    ],
    "correctAnswer": 3,
    "explanation": "Durante a insuflação do pneumoperitônio, a distensão súbita do peritônio estimula o vago e pode causar bradicardia, às vezes intensa (até assistolia), sobretudo na insuflação inicial. É uma das alterações hemodinâmicas descritas na videolaparoscopia, tratada com desinsuflação e atropina.",
    "commentary": "Diminuição do débito com aumento do retorno venoso (A): a pressão intra-abdominal comprime a veia cava e reduz o retorno venoso.\n\nHipotensão por compressão da aorta (B): o efeito habitual é aumento da resistência vascular sistêmica e da pressão arterial (pela compressão arterial e pela liberação de catecolaminas e vasopressina).\n\nOligúria por hipercapnia e retenção de bicarbonato (C): a oligúria decorre da compressão de veias e parênquima renal e da liberação de ADH, não da retenção de bicarbonato.\n\nArritmias raras (E): arritmias são frequentes pela hipercapnia, estímulo vagal e embolia gasosa.\n\nGabarito oficial do ENARE 2025.",
    "reference": "Miller's Anesthesia, 9ª ed. (anestesia para cirurgia laparoscópica)",
    "tags": [
      "videolaparoscopia",
      "pneumoperitônio",
      "fisiologia cirúrgica",
      "anestesiologia"
    ],
    "tip": "Insuflação do pneumoperitônio pode dar bradicardia vagal: desinsufla e atropina."
  },
  {
    "id": "fubog2025-23",
    "module": "Pediatria",
    "text": "A última doença erradicada no Brasil graças às campanhas de vacinação do Programa Nacional de Imunização (PNI) é:",
    "options": [
      "Sarampo",
      "Rubéola",
      "Varíola",
      "Poliomielite"
    ],
    "correctAnswer": 1,
    "explanation": "O Brasil recebeu em 2015 a certificação da OPAS/OMS de eliminação da rubéola e da síndrome da rubéola congênita, graças às campanhas de vacinação do PNI — a mais recente doença eliminada entre as opções. O termo correto é eliminação (interrupção da transmissão endêmica no país), não erradicação.",
    "commentary": "Sarampo (A): o Brasil foi certificado como livre do sarampo em 2016, perdeu a certificação em 2019 com a volta da circulação e só a recuperou em 2024.\n\nVaríola (C): é a única doença humana erradicada no mundo (1980); no Brasil o último caso foi em 1971 — não é a mais recente.\n\nPoliomielite (D): eliminada no Brasil em 1994, antes da rubéola.",
    "reference": "Ministério da Saúde – Programa Nacional de Imunizações; OPAS – Certificação de eliminação da rubéola nas Américas (2015)",
    "tags": [
      "rubéola",
      "eliminação de doenças",
      "PNI",
      "imunizações"
    ],
    "tip": "Eliminação (país sem transmissão endêmica) ≠ erradicação (agente extinto no mundo)."
  }
];
