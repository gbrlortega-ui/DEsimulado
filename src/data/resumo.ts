// Arquivo gerado por `npm run gen` a partir do banco de questões. Não editar à mão.
// O build e o servidor local regeneram este arquivo sozinhos; o `npm run validate` acusa se ficar desatualizado.
import type { Question } from '../types';

export const TOTAL_QUESTIONS = 3379;

export const COUNT_BY_AREA: Record<string, number> = {
  "Pediatria": 638,
  "Clínica Médica": 710,
  "Cirurgia": 615,
  "Ginecologia e Obstetrícia": 636,
  "Saúde Coletiva": 620,
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
  "Saúde Coletiva|FELUMA": 15
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
    "id": "unimedpb2026-10",
    "topography": "11",
    "topic": "Pneumonia infantil",
    "module": "Pediatria",
    "text": "Menina de 9 anos com febre baixa, tosse seca persistente há 10 dias, cefaleia e ausculta com MV preservado, estertores finos esparsos. Saturando 96%. RX: infiltrado intersticial difuso. Diante desse quadro, para qual agente etiológico o tratamento antimicrobiano deve ser direcionado e qual é o tratamento mais apropriado?",
    "options": [
      "S. pneumoniae – amoxicilina VO",
      "Pneumocystis jirovecii – sulfametoxazol-trimetoprim",
      "H. influenzae – amoxicilina + clavulanato",
      "Mycoplasma pneumoniae – macrolídeo",
      "S. aureus – oxacilina"
    ],
    "correctAnswer": 3,
    "explanation": "Escolar de 9 anos com febre baixa, tosse seca persistente, cefaleia, bom estado geral (SatO₂ 96%) e radiografia com infiltrado intersticial difuso desproporcional ao exame físico: é a pneumonia atípica, cujo principal agente nessa idade é o Mycoplasma pneumoniae.\n\nComo o micoplasma não tem parede celular, os betalactâmicos não funcionam; o tratamento é com macrolídeo (azitromicina, claritromicina).",
    "commentary": "Pneumococo com amoxicilina (A): causa pneumonia típica, com febre alta, consolidação lobar e estado geral mais comprometido.\n\nPneumocystis (B): ocorre em imunossuprimidos (HIV, quimioterapia), com hipoxemia importante.\n\nH. influenzae (C): pneumonia típica, hoje rara em vacinados.\n\nS. aureus (E): pneumonia grave, com pneumatoceles, derrame e toxemia; não combina com o bom estado geral.",
    "reference": "SBP — Pneumonia adquirida na comunidade na infância / IDSA — Pediatric CAP",
    "tags": [
      "pneumonia infantil",
      "pneumonia atípica",
      "micoplasma",
      "macrolídeos"
    ],
    "tip": "Escolar com tosse seca arrastada e RX pior que o exame: Mycoplasma → macrolídeo."
  },
  {
    "id": "sespe2026-47",
    "topography": "5.2",
    "topic": "Rotura prematura de membranas",
    "module": "Ginecologia e Obstetrícia",
    "text": "Qual dos testes abaixo NÃO pode ser utilizado no diagnóstico diferencial da rotura prematura das membranas?",
    "options": [
      "Fern test",
      "Alfa-1 microglobulina placentária",
      "Fibronectina fetal",
      "Manobra de Turnier",
      "Fator de crescimento placentário"
    ],
    "correctAnswer": 4,
    "explanation": "O diagnóstico de rotura de membranas é clínico (saída de líquido pelo colo ao exame especular, eventualmente com manobra de Tarnier) e pode ser apoiado por testes: cristalização em samambaia (Fern test), PAMG-1 (alfa-1 microglobulina placentária, AmniSure) e fibronectina fetal no conteúdo vaginal. O PlGF (fator de crescimento placentário) é um marcador angiogênico usado no rastreio e diagnóstico de pré-eclâmpsia, não de rotura de membranas.",
    "commentary": "Teste da samambaia (A): o líquido amniótico cristaliza em folhas de samambaia ao secar.\n\nPAMG-1 (B): proteína abundante no líquido amniótico; teste rápido de alta acurácia.\n\nFibronectina fetal (C): presente no líquido amniótico; tem alta sensibilidade (o negativo afasta a rotura), embora seja mais usada para predizer parto prematuro.\n\nManobra de Tarnier (D): pressão no fundo uterino ou elevação da apresentação durante o exame especular para ver a saída de líquido.",
    "reference": "FEBRASGO — Rotura prematura das membranas ovulares / ACOG Practice Bulletin 217",
    "tags": [
      "obstetrícia",
      "rotura prematura de membranas",
      "diagnóstico",
      "PlGF"
    ],
    "tip": "PlGF é marcador de pré-eclâmpsia, não de rotura de membranas."
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
    "id": "famerp2026-18",
    "topography": "5.1",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 55 anos, casada, G=3 P=3 partos normais, com vida sexual ativa, vem ao ambulatório de Ginecologia com queixa de perda urinária contínua pela vagina após ter sido submetida a histerectomia abdominal total por miomatose uterina.\n\nA conduta é:",
    "options": [
      "Iniciar com Oxibutinina oral",
      "Teste com injeção de azul de metileno intravesical",
      "Encaminhar a paciente para estudo urodinâmico",
      "Solicitar Ultrassonografia vaginal e reavaliação após"
    ],
    "correctAnswer": 1,
    "explanation": "Perda urinária CONTÍNUA pela vagina após histerectomia abdominal: fístula vesicovaginal, a mais comum das fístulas urogenitais em países desenvolvidos (complicação de cirurgia ginecológica). O primeiro exame é simples e feito no consultório: instilação de azul de metileno na bexiga com gaze ou tampão na vagina — se o tampão se cora de azul, confirma a fístula vesicovaginal. Se sair líquido claro, pensa-se em fístula ureterovaginal (então se usa fenazopiridina oral ou índigo carmim EV).",
    "commentary": "Oxibutinina (A): trata bexiga hiperativa (urgência), não perda contínua por fístula.\n\nEstudo urodinâmico (C): avalia incontinência de esforço e urgência, não fístulas.\n\nUSG vaginal (D): não diagnostica a fístula; o teste do azul de metileno (e a cistoscopia) sim.",
    "tip": "Perda contínua após histerectomia = fístula. Azul de metileno na bexiga cora o tampão = vesicovaginal; não cora = pensar em ureterovaginal.",
    "reference": "FEBRASGO. Fístulas urogenitais — Tratado de Ginecologia FEBRASGO, 2019. Hillary CJ et al. Changes in the aetiology of vesicovaginal fistula. Eur Urol, 2016.",
    "tags": [
      "fístula vesicovaginal",
      "histerectomia",
      "teste do azul de metileno",
      "uroginecologia"
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
    "id": "amrigs2025-96",
    "module": "Saúde Coletiva",
    "text": "Um paciente é suspeito de ter uma infecção bacteriana grave. Dois testes rápidos, aplicados em paralelo, mostraram-se contraditórios: o primeiro deu positivo, e o segundo deu negativo. Como interpretar esse resultado?",
    "options": [
      "O paciente deve ser considerado negativo, pois um dos testes foi negativo.",
      "O paciente deve ser considerado positivo, já que apenas um resultado positivo é necessário em testes em paralelo.",
      "O paciente deve ser retestado com um terceiro teste para maior certeza.",
      "O paciente está livre de infecção, já que não há concordância entre os testes."
    ],
    "correctAnswer": 1,
    "explanation": "Em testes em paralelo, basta um resultado positivo para considerar o paciente positivo. A estratégia aumenta a sensibilidade (perde menos doentes) à custa de especificidade — adequada quando não se pode deixar passar uma doença grave, como infecção bacteriana grave.",
    "commentary": "Considerar negativo (A): descreve a lógica dos testes em série, em que todos precisam ser positivos.\n\nTerceiro teste (C): não é a regra de interpretação dos testes em paralelo.\n\nLivre de infecção por discordância (D): discordância não exclui doença; em paralelo, um positivo basta.",
    "reference": "Fletcher — Epidemiologia Clínica: elementos essenciais",
    "tags": [
      "testes em paralelo",
      "testes diagnósticos",
      "sensibilidade",
      "especificidade"
    ],
    "tip": "Paralelo: ↑ sensibilidade (um positivo basta). Série: ↑ especificidade (todos positivos)."
  },
  {
    "id": "cerman2025-18",
    "topography": "10",
    "topic": "Tuberculose",
    "module": "Clínica Médica",
    "text": "Em um paciente com tuberculose pulmonar e hepatotoxicidade ao esquema básico sem hepatopatia prévia, a reintrodução dos fármacos após a normalização da função hepática deve ser iniciada com a seguinte associação:",
    "options": [
      "(A) Rifampicina e etambutol.",
      "(B) Rifampicina e isoniazida.",
      "(C) Rifampicina e pirazinamida.",
      "(D) Isoniazida e pirazinamida."
    ],
    "correctAnswer": 0,
    "explanation": "Na hepatotoxicidade pelo esquema básico (RHZE), suspendem-se os fármacos até as transaminases caírem abaixo de 2 vezes o limite superior e os sintomas melhorarem. A reintrodução é sequencial: começa com rifampicina + etambutol, depois isoniazida e, por último, pirazinamida (a mais hepatotóxica), com controle das enzimas a cada etapa.",
    "commentary": "Rifampicina e isoniazida (B): a isoniazida entra depois, para identificar o fármaco responsável.\n\nRifampicina e pirazinamida (C): a pirazinamida é a última a ser reintroduzida.\n\nIsoniazida e pirazinamida (D): são duas das drogas mais hepatotóxicas; não se reintroduzem juntas.",
    "reference": "Ministério da Saúde — Manual de Recomendações para o Controle da Tuberculose no Brasil, 2ª ed. (2019)",
    "tags": [
      "tuberculose",
      "hepatotoxicidade",
      "esquema básico",
      "reintrodução"
    ]
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
    "id": "cerman2026-99",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "Durante auditoria em uma Secretaria Municipal de Saúde, identificou-se que determinada UBS passou a restringir o atendimento de pessoas sem comprovante de residência da área adscrita. Visitantes, trabalhadores da região e pessoas em trânsito eram orientados a procurar a UBS do bairro de origem. Essa prática contraria diretamente qual princípio doutrinário do SUS, conforme a Lei 8.080/90?",
    "options": [
      "(A) Universalidade.",
      "(B) Equidade.",
      "(C) Integralidade.",
      "(D) Regionalização."
    ],
    "correctAnswer": 0,
    "explanation": "A universalidade garante o acesso aos serviços de saúde em todos os níveis de assistência a todas as pessoas, sem restrição. Negar atendimento por falta de comprovante de residência contraria esse princípio; a adscrição de território organiza o cuidado, mas não autoriza recusar atendimento.",
    "commentary": "Equidade (B): tratar desigualmente os desiguais segundo suas necessidades.\n\nIntegralidade (C): conjunto articulado de ações preventivas e curativas em todos os níveis.\n\nRegionalização (D): é princípio organizativo, não doutrinário.",
    "reference": "Lei nº 8.080/1990, art. 7º / PNAB (Portaria nº 2.436/2017)",
    "tags": [
      "princípios do SUS",
      "universalidade",
      "acesso à saúde"
    ]
  }
];
