// Arquivo gerado por `npm run gen` a partir do banco de questões. Não editar à mão.
// O build e o servidor local regeneram este arquivo sozinhos; o `npm run validate` acusa se ficar desatualizado.
import type { Question } from '../types';

export const TOTAL_QUESTIONS = 3124;

export const COUNT_BY_AREA: Record<string, number> = {
  "Pediatria": 590,
  "Clínica Médica": 657,
  "Cirurgia": 565,
  "Ginecologia e Obstetrícia": 583,
  "Saúde Coletiva": 569,
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
    "key": "FAMERP",
    "label": "FAMERP",
    "kind": "Residência",
    "years": "2025",
    "count": 80
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
  "Clínica Médica|FAMERP": 16,
  "Ginecologia e Obstetrícia|FAMERP": 16,
  "Saúde Coletiva|FAMERP": 16,
  "Pediatria|FAMERP": 16,
  "Cirurgia|FAMERP": 16,
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
  "8": 82,
  "9": 68,
  "10": 129,
  "11": 305,
  "12": 30,
  "13": 68,
  "14": 140,
  "15": 460,
  "16": 194,
  "1.2": 17,
  "1.3": 29,
  "7.2": 45,
  "4.2": 29,
  "1.1": 94,
  "1.5": 33,
  "6.1": 49,
  "3.1": 102,
  "4.1": 90,
  "2.1": 99,
  "6.2": 23,
  "2.2": 107,
  "3.2": 37,
  "3.3": 36,
  "7.1": 30,
  "1.4": 4,
  "3.4": 21,
  "5.1": 226,
  "5.2": 273
};

/** Questões por assunto, na chave "1.1|Cefaleias". */
export const TOPIC_COUNT: Record<string, number> = {
  "11|Puericultura": 35,
  "1.2|Catarata": 5,
  "11|Icterícia neonatal": 11,
  "11|Obesidade infantil": 9,
  "1.3|Amigdalite/faringoamigdalite": 13,
  "7.2|Urticária": 2,
  "1.2|Uveíte": 2,
  "4.2|Estenose de uretra": 3,
  "11|Calendário vacinal": 18,
  "1.1|TCE": 18,
  "11|Maus-tratos infantis": 18,
  "11|Prematuridade": 4,
  "11|Anemia ferropriva": 16,
  "9|Trombocitopenias": 6,
  "11|Aleitamento materno": 25,
  "1.5|Hipotireoidismo": 8,
  "11|Síndrome do desconforto respiratório neonatal": 8,
  "14|Emergências pediátricas": 16,
  "6.1|Artrite reumatoide": 7,
  "9|Talassemias": 2,
  "11|ITU pediátrica": 7,
  "11|Diarreia aguda": 11,
  "14|Trauma": 42,
  "11|Cardiopatias congênitas": 24,
  "3.1|Constipação intestinal": 7,
  "10|Raiva": 7,
  "1.1|Cefaleias": 10,
  "1.3|Surdez": 2,
  "11|Desenvolvimento neuropsicomotor": 22,
  "9|Anemia falciforme": 7,
  "11|Asma infantil": 20,
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
  "10|Sífilis": 21,
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
  "9|Anemias": 3,
  "10|Tétano": 1,
  "8|Feocromocitoma": 2,
  "9|Linfomas": 3,
  "8|Cetoacidose diabética": 19,
  "3.1|Diarreia crônica": 3,
  "1.2|Erros refrativos": 1,
  "10|Dengue": 20,
  "4.1|Distúrbios hidroeletrolíticos": 15,
  "4.1|Lesão renal aguda": 17,
  "8|Diabetes mellitus tipo 1 e 2": 30,
  "1.1|Demências": 8,
  "6.1|Lúpus eritematoso sistêmico": 9,
  "1.1|Epilepsia": 10,
  "10|Tuberculose": 24,
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
  "4.1|Doença renal crônica": 9,
  "3.1|Doença inflamatória intestinal": 12,
  "3.1|Doença celíaca": 3,
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
  "2.1|Derrame pleural": 16,
  "13|Transtornos de ansiedade": 7,
  "1.5|Tempestade tireotóxica": 1,
  "12|Demências": 1,
  "13|Depressão maior": 11,
  "8|Hiperaldosteronismo primário": 3,
  "16|Feridas": 20,
  "16|Pré-operatório": 24,
  "16|Hérnias": 24,
  "3.3|Colangite aguda": 6,
  "3.1|Hemorragia digestiva baixa": 5,
  "7.1|Doença arterial periférica": 6,
  "6.2|Fraturas": 5,
  "1.1|Hipertensão intracraniana": 3,
  "14|Queimaduras": 13,
  "1.3|Câncer de cabeça e pescoço": 2,
  "1.2|Ceratite": 3,
  "14|Choque": 8,
  "16|Trauma abdominal": 20,
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
  "3.3|Colecistite aguda": 6,
  "16|Trauma torácico": 22,
  "16|Apendicite aguda": 13,
  "16|Perfuração de víscera oca": 11,
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
  "5.1|Sangramento uterino anormal": 19,
  "5.1|Climatério e menopausa": 26,
  "5.1|Contracepção": 32,
  "5.1|Câncer de colo uterino": 35,
  "5.1|Vaginose bacteriana": 9,
  "5.2|Diabetes gestacional": 23,
  "5.2|Assistência ao parto": 14,
  "5.2|Puerpério": 18,
  "5.2|Infecções na gestação": 34,
  "5.2|Rotura prematura de membranas": 9,
  "15|Rastreamento": 26,
  "5.1|Câncer de endométrio": 11,
  "5.2|Gravidez ectópica": 12,
  "5.2|Diagnóstico de gravidez": 2,
  "5.2|Pré-natal": 41,
  "5.2|Hemorragia pós-parto": 13,
  "5.2|Trabalho de parto": 28,
  "5.1|Mioma uterino": 13,
  "5.1|Endometriose": 12,
  "5.1|Infertilidade": 12,
  "5.1|Prolapso genital": 9,
  "5.1|Câncer de ovário": 7,
  "15|Saúde da mulher": 12,
  "5.2|Pré-eclâmpsia": 19,
  "5.2|Abortamento": 20,
  "5.1|Síndrome dos ovários policísticos": 9,
  "5.1|Doença inflamatória pélvica": 10,
  "5.1|Candidíase vaginal": 4,
  "5.2|Eclâmpsia": 2,
  "5.2|Descolamento prematuro de placenta": 10,
  "5.2|Isoimunização Rh": 6,
  "5.1|Tricomoníase": 3,
  "5.2|Síndrome HELLP": 1,
  "5.1|Planejamento reprodutivo": 6,
  "8|Prolactinoma": 2,
  "10|Infecções sexualmente transmissíveis": 13,
  "15|Bioética": 7,
  "5.2|Idade gestacional": 5,
  "4.2|Incontinência urinária": 8,
  "5.2|Placenta prévia": 7,
  "15|Atenção Primária": 87,
  "15|Saúde do idoso": 7,
  "15|SUS": 64,
  "12|Polifarmácia": 4,
  "15|Imunização": 30,
  "15|Saúde do trabalhador": 29,
  "15|Estudos epidemiológicos": 38,
  "15|Epidemiologia": 44,
  "15|Vigilância epidemiológica": 34,
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
  "4.1|Distúrbios ácido-base": 9,
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
  "1.3|Vertigem": 5,
  "6.2|Lesão do ligamento cruzado anterior": 1,
  "8|Distúrbios do cálcio": 3,
  "14|Parada cardiorrespiratória": 13,
  "4.1|Nefropatia diabética": 3,
  "2.2|Choque cardiogênico": 1,
  "12|Cuidados paliativos": 11,
  "10|Toxoplasmose": 4,
  "1.5|Câncer de tireoide": 4,
  "2.2|Endocardite infecciosa": 6,
  "2.1|Tabagismo": 6,
  "1.5|Hiperparatireoidismo": 4,
  "3.3|Câncer de vesícula": 4,
  "3.1|Diarreia aguda": 3,
  "5.2|Restrição de crescimento fetal": 9,
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
  "6.1|Pseudogota": 1,
  "2.2|Miocardite": 1,
  "3.3|Pancreatite biliar": 2,
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
    "id": "tp2022-58",
    "topography": "11",
    "topic": "Icterícia neonatal",
    "module": "Pediatria",
    "text": "Recém-nascido com 1 mês de vida, icterícia moderada, fezes claras (acolia) e urina escura (colúria). Qual o provável perfil laboratorial?",
    "options": [
      "(A) Hiperbilirrubinemia direta e aumento de transaminases/GGT.",
      "(B) Hiperbilirrubinemia indireta predominante.",
      "(C) Transaminases normais.",
      "(D) GGT diminuída e bilirrubina direta normal."
    ],
    "correctAnswer": 0,
    "explanation": "Lactente de 1 mês com icterícia que não regride, fezes claras (acolia), urina escura (colúria), hepatomegalia e baixo ganho de peso: é colestase neonatal. Colúria e acolia significam que a bilirrubina conjugada não chega ao intestino e volta ao sangue, sendo eliminada pela urina.\n\nO perfil esperado é hiperbilirrubinemia predominantemente direta, com a indireta discretamente elevada. Também sobem as enzimas canaliculares (gama-GT e fosfatase alcalina) e, em menor grau, as transaminases. A principal causa a afastar é a atresia de vias biliares, que precisa ser operada (cirurgia de Kasai) idealmente antes dos 60 dias de vida.",
    "commentary": "Predomínio de bilirrubina indireta (B): é o padrão da icterícia fisiológica, do leite materno ou da hemólise, que não causam colúria nem acolia.\n\nTransaminases e fosfatase alcalina normais (C): na colestase a fosfatase alcalina e a gama-GT sobem, e as transaminases costumam se elevar pela lesão hepática.\n\nGama-GT diminuída (D): a gama-GT costuma estar elevada na atresia de vias biliares e na maioria das colestases; GGT normal ou baixa com colestase é exceção que lembra doenças genéticas raras, não o padrão esperado.",
    "tip": "Icterícia após 14 dias com colúria e acolia = colestase (BD alta, GGT alta): investigue atresia biliar já.",
    "reference": "Cloherty, 2015. Manual de Neonatologia.",
    "tags": [
      "gastroenterologia",
      "neonatologia"
    ]
  },
  {
    "id": "tp2024-40",
    "topography": "2.2",
    "topic": "Dislipidemia",
    "module": "Clínica Médica",
    "text": "Homem, 72 anos, diabético, hipertenso e dislipidêmico, com histórico de infarto do miocárdio há 6 meses, doença arterial periférica sintomática e doença renal crônica (ClCr estimado de 53mL/min/1,73m² – Valor de referência do clearance de creatinina: 75 a 115mL/min/1,73m²). Apresentou rabdomiólise em uso de estatinas. Qual estatina deve ser recomendada no tratamento de dislipidemia em pacientes com disfunção renal?",
    "options": [
      "(A) Pravastatina",
      "(B) Atorvastatina",
      "(C) Sinvastatina",
      "(D) Rosuvastatina"
    ],
    "correctAnswer": 0,
    "explanation": "O paciente tem risco cardiovascular muito alto (infarto recente, doença arterial periférica, diabetes e doença renal crônica) e, portanto, precisa de hipolipemiante, mas já teve rabdomiólise com estatina. Nessa situação, prefere-se uma estatina com menor potencial de toxicidade muscular e de interação medicamentosa.\n\nA pravastatina é hidrofílica e não é metabolizada pelo citocromo CYP3A4, o que reduz interações que elevam o nível do fármaco e o risco de miopatia. Com clearance em torno de 53 mL/min, pode ser usada sem ajuste, iniciando em dose baixa e com monitoramento de sintomas musculares e CK. Como é uma estatina de menor potência, a meta de LDL costuma exigir associação com ezetimiba.",
    "commentary": "Atorvastatina (B): quase não depende do rim e não exige ajuste na DRC, mas é metabolizada pelo CYP3A4 e é de maior potência, o que aumenta o risco muscular em quem já teve rabdomiólise.\n\nSinvastatina (C): é a mais associada a miopatia e rabdomiólise, sobretudo em doses altas e com interações pelo CYP3A4; deve ser evitada nesse paciente.\n\nRosuvastatina (D): é de alta potência, tem eliminação renal relevante e exige redução de dose na disfunção renal avançada; após rabdomiólise, não é a primeira escolha.",
    "tip": "Estatina após miopatia: hidrofílica e fora do CYP3A4 (pravastatina), dose baixa, CK de controle e ezetimiba se preciso.",
    "reference": "Dislipidemia na Prática Clínica. Renato JORGE ALVES e Raul Dias Santos. Editora dos Editores; 1ª edição (19 dezembro 2022). Ferreira SRC. Estatinas na doença renal crônica. Arquivos Brasileiros de Cardiologia - Volume 85, Suplemento V, outubro/2005.",
    "tags": [
      "cardiologia",
      "nefrologia"
    ]
  },
  {
    "id": "tp2026-22",
    "topography": "2.1",
    "topic": "Asma",
    "module": "Clínica Médica",
    "text": "Mulher de 35 anos apresenta episódios recorrentes de dispneia, tosse seca e chiado, com piora noturna e após exposição à poeira. Fora das crises, permanece assintomática. Espirometria basal sem padrão obstrutivo. Teste de broncoprovocação com metacolina demonstra queda de 22% no VEF1 (volume expiratório forçado no primeiro segundo). Nessa paciente, o principal mecanismo fisiopatológico responsável pela obstrução reversível das vias aéreas é:",
    "options": [
      "(A) Obstrução fixa das vias aéreas associada a remodelamento estrutural irreversível.",
      "(B) Doença das vias aéreas com hiperresponsividade brônquica e obstrução variável.",
      "(C) Redução da complacência pulmonar por acometimento intersticial difuso.",
      "(D) Perda da retração elástica pulmonar com aprisionamento aéreo progressivo."
    ],
    "correctAnswer": 1,
    "explanation": "Crises de dispneia, tosse seca e chiado, piores à noite e com poeira, e normalidade entre as crises sugerem asma. Como a espirometria basal veio normal, o diagnóstico foi confirmado pelo teste de broncoprovocação: a metacolina provocou queda de 20% ou mais no VEF1 (aqui, 22%), o que demonstra hiperresponsividade brônquica.\n\nNa asma, a inflamação crônica das vias aéreas as torna exageradamente sensíveis a estímulos. A obstrução surge, varia ao longo do tempo e regride, sozinha ou com broncodilatador. Essa variabilidade é a principal diferença em relação à DPOC.",
    "commentary": "Obstrução fixa com remodelamento (A): descreve a DPOC ou a asma grave de longa data com remodelamento; não combina com uma paciente sem sintomas e com espirometria normal entre as crises.\n\nRedução da complacência por doença intersticial (C): as doenças intersticiais deixam o pulmão rígido e produzem padrão restritivo, sem hiperresponsividade brônquica.\n\nPerda da retração elástica (D): é o mecanismo do enfisema, em que a destruição do parênquima causa obstrução persistente e aprisionamento de ar.",
    "tip": "Espirometria normal + suspeita de asma: broncoprovocação. Queda ≥ 20% do VEF1 = hiperresponsividade brônquica.",
    "reference": "GINA – Global Strategy for Asthma Management and Prevention. 2024. Harrison’s Principles of Internal Medicine. 21ª ed. Sociedade Brasileira de Pneumologia e Tisiologia – Diretrizes de Asma.",
    "tags": [
      "pneumologia",
      "fisiopatologia"
    ]
  },
  {
    "id": "tp2023-74",
    "topography": "3.1",
    "topic": "Doença hemorroidária",
    "module": "Cirurgia",
    "text": "Sangramento anal é uma queixa comum na atenção básica. Em se tratando de hemorroidas, podemos afirmar que:",
    "options": [
      "(A) A linha denteada é o limite anatômico para classificar as hemorroidas em externas e internas.",
      "(B) Nas hemorroidas internas de terceiro grau, o prolapso reduz-se espontaneamente.",
      "(C) As hemorroidas externas tendem a sangrar mais do que as internas.",
      "(D) Os plicomas são frequentes nas hemorroidas internas e relacionam-se com fenômeno trombótico."
    ],
    "correctAnswer": 0,
    "explanation": "A linha denteada (pectínea) separa o epitélio colunar do reto do anoderma e é a referência anatômica para classificar as hemorroidas: as internas nascem do plexo acima dela e as externas, do plexo abaixo dela.\n\nEssa divisão tem consequência clínica. Acima da linha a inervação é visceral, então a hemorroida interna costuma ser indolor e se manifesta por sangramento vivo e prolapso. Abaixo, a inervação é somática, e a externa causa dor (sobretudo quando trombosa), prurido e pode deixar plicomas. As internas são graduadas de I a IV conforme o prolapso: I só sangra; II prolapsa e volta sozinha; III precisa de redução manual; IV fica permanentemente exteriorizada.",
    "commentary": "Terceiro grau com redução espontânea (B): retorno espontâneo define o segundo grau; no terceiro grau o paciente precisa empurrar o mamilo hemorroidário de volta.\n\nExternas sangram mais (C): o sangramento é a queixa típica das internas; as externas se apresentam mais com dor, prurido e trombose.\n\nPlicomas nas internas (D): plicomas são pregas cutâneas residuais que surgem após episódios de trombose ou inflamação das hemorroidas externas, e não das internas.",
    "tip": "Acima da linha denteada: interna, sangra e não dói. Abaixo: externa, dói, trombosa e deixa plicoma.",
    "reference": "American society for gastrointestinal endoscopy. Asge guideline: endoscopy in the diagnosis and treat mento f inflammatory bowel disease. Gastrointestinal endoscopy. 2006; 63(4):558-65. Dani r. Gastroenterologia essencial. 2. Ed. Rio de janeiro: guanabara koogan; 2001. P. 336-44. Galvão-alves j, rodrigues rhr. Constipação intestinal. In: galvão-alves j. Temas de atualização em gastroenterologia. Rio de janeiro: rubio; 2006. P. 81-8. Kudo s, kashida h, tamura t, kogure e, imai y, yamano h et al. Colonoscopic diagnosis and management of nonpolypoid early colorectal cancer. Word j surg. 2000; 24(9):1081-90.",
    "tags": [
      "coloproctologia"
    ]
  },
  {
    "id": "tp2026-66",
    "topography": "16",
    "topic": "Trauma torácico",
    "module": "Cirurgia",
    "text": "Homem de 32 anos sofreu queda de 3 metros de altura. No pronto-socorro, referiu intensa dor torácica. Ao exame: vias aéreas pérvias; ausência de turgência jugular; FC 112bpm; PA 90x50mmHg; FR 28irpm e saturando 90% com máscara nasal de O2 a 15L/min. Expansão torácica assimétrica. Hemitórax esquerdo: M.V. abolido, som maciço à percussão, crepitação de costelas à palpação. Hemitórax direito: murmúrio vesicular presente. Qual o diagnóstico?",
    "options": [
      "(A) Contusão pulmonar.",
      "(B) Lesão miocárdica com tamponamento.",
      "(C) Pneumotórax hipertensivo à esquerda.",
      "(D) Hemotórax maciço à esquerda."
    ],
    "correctAnswer": 3,
    "explanation": "A presença de trauma torácico unilateral associado a choque (hipotensão e taquicardia), abolição do murmúrio vesicular e maciez à percussão (indicando líquido/sangue no espaço pleural) é diagnóstica de hemotórax maciço à esquerda.",
    "commentary": "O diagnóstico de hemotórax maciço é fundamentado na anamnese de trauma torácico associada ao choque hipovolêmico (hipotensão, taquicardia, ausência de turgência jugular devido à hipovolemia) e no exame físico do tórax: murmúrio vesicular abolido ipsilateralmente e macicez à percussão (sangue livre no espaço pleural). Sobre os distratores: (A) A contusão pulmonar não se apresenta com macicez pleural significativa e choque imediato. (B) No tamponamento cardíaco há turgência jugular e bulhas abafadas, sem abolição de murmúrio vesicular. (C) No pneumotórax hipertensivo a percussão seria hipertimpânica e haveria turgência jugular pelo desvio mediastinal.",
    "reference": "Sabiston Textbook of Surgery. Philadelphia: Elsevier; 2021. ATLS – Advanced Trauma Life Support, 11ª ed., American College of Surgeons",
    "tags": [
      "trauma",
      "tórax",
      "hemotórax"
    ]
  },
  {
    "id": "tp2024-97",
    "module": "Ginecologia e Obstetrícia",
    "text": "Tumor Phyllodes borderline (2,0cm), margem de 0,5cm. Conduta correta?",
    "options": [
      "(A) Quimioterapia adjuvante.",
      "(B) Radioterapia adjuvante.",
      "(C) Ampliação de margens.",
      "(D) Esvaziamento axilar."
    ],
    "correctAnswer": 2,
    "explanation": "O tumor phyllodes é uma lesão fibroepitelial que cresce rápido e que, ao contrário do fibroadenoma, tende a voltar no mesmo lugar quando a retirada é incompleta. O tratamento é cirúrgico, e o que mais importa para evitar a recidiva local é a margem livre.\n\nNos tumores borderline e malignos, recomenda-se margem de pelo menos 1 cm. Como a margem foi de 0,5 cm, a conduta é ampliar a ressecção.",
    "commentary": "Quimioterapia adjuvante (A): não há tratamento sistêmico adjuvante com benefício comprovado para o tumor phyllodes, e menos ainda na forma borderline.\n\nRadioterapia adjuvante (B): seu papel é discutido apenas em tumores malignos, principalmente os grandes ou com margens comprometidas; não é indicada no borderline.\n\nEsvaziamento axilar (D): o phyllodes raramente dá metástase para linfonodos (quando se espalha, é por via sanguínea), por isso não se faz cirurgia axilar de rotina.",
    "tip": "Phyllodes borderline ou maligno: margem de pelo menos 1 cm. Margem menor → ampliar. Sem axila e sem quimio.",
    "reference": "Doenças da Mama. 3ª edição. Rio de Janeiro: Atheneu, 2022",
    "tags": [
      "mastologia",
      "cirurgia"
    ]
  },
  {
    "id": "tp2025-100",
    "topography": "5.2",
    "topic": "Isoimunização Rh",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante de 23 anos, está em acompanhamento pré-natal e nega gestações anteriores ou abortamentos. Apresenta tipagem sanguínea AB Rh negativo, com parceiro O Rh positivo. Assinale a alternativa que indica o momento adequado para receber imunoglobulina anti-D, caso o Coombs indireto se mantenha negativo durante a gravidez:",
    "options": [
      "(A) Não há necessidade de imunoglobulina anti-D nessa situação.",
      "(B) Somente após o parto, se o RN for Rh positivo.",
      "(C) Somente no após parto, se o RN for RH positivo e se houver sangramento durante a gravidez.",
      "(D) Entre 28 e 32 semanas de gestação, se houver sangramento durante a gravidez e no pós-parto se o RN for Rh positivo."
    ],
    "correctAnswer": 3,
    "explanation": "A prevenção para isoimunização em gestantes com tipagem sanguínea Rh-negativo não sensibilizadas está balizada na dosagem de imunoglobulina anti-D entre 28 e 32 semanas se detectados sangramentos na gestação atual, devendo ser repetida no pós-parto imediato do concepto comprovado Rh-positivo.",
    "commentary": "A indicação profilática de imunoglobulina anti-D protege contra a produção pós-exposição de anticorpos anti-hemácia fetal Rh em gestantes Rh-negativo não imunizadas (Coombs indireto negativo persitente). O momento adequado para aplicação compreende as 28 a 32 semanas gestacionais se houver quaisquer indícios de hemorragias ou exames traumáticos intra-útero nas semanas precedentes. Igualmente, nova administração no puerpério imediato (em até 72 horas) está indicada se a tipagem do recém-nascido comprovar-se Rh-positivo.",
    "reference": "Freitas F, et al. Isoimunização Rh: abordagem e condutas. J Bras de Gin e Obs, 42(7), 439-445, 2020.",
    "tags": [
      "obstetrícia",
      "imunização na gestação"
    ]
  },
  {
    "id": "tp2024-106",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "Os Determinantes Sociais de Saúde (DSSs) estabelecem decisivamente a saúde das pessoas. Qual alternativa demonstra a influência dos DSSs nas políticas do SUS?",
    "options": [
      "Promoção de campanhas de vacinação anuais para grupos prioritários.",
      "Aumento do número de hospitais privados via Saúde Suplementar.",
      "Desenvolvimento de novas tecnologias médicas curativas.",
      "Implementação da Estratégia Saúde da Família (ESF) visando saneamento, educação e habitação."
    ],
    "correctAnswer": 3,
    "explanation": "Determinantes sociais da saúde são as condições em que as pessoas nascem, vivem, trabalham e envelhecem: renda, escolaridade, moradia, saneamento, alimentação, trabalho, acesso a serviços. Agir sobre eles exige políticas que vão além do atendimento à doença e que envolvem outros setores.\n\nA Estratégia Saúde da Família é o exemplo mais claro no SUS. A equipe atua num território definido, conhece as condições de vida das famílias e trabalha com educação em saúde, vínculo, vigilância e articulação intersetorial, buscando reduzir as desigualdades que adoecem a população.",
    "commentary": "Campanhas de vacinação (A): são essenciais para a prevenção, mas atuam sobre um risco biológico específico, não sobre a renda, a moradia e as demais condições de vida que moldam a saúde.\n\nMais hospitais privados pela saúde suplementar (B): o setor privado atende quem pode pagar e não segue a lógica de saúde coletiva do SUS; tende até a ampliar desigualdades de acesso.\n\nNovas tecnologias curativas (C): melhoram o tratamento de doenças já instaladas, mas não mexem nas condições de vida que levam ao adoecimento.",
    "tip": "Determinantes sociais = condições de vida. No SUS, quem atua sobre eles é a ESF, com território e ação intersetorial.",
    "reference": "BUSS, P. M.; PELLEGRINI FILHO, A. A Saúde e seus Determinantes Sociais. Physis: Revista de Saúde Coletiva, p. 77-93, 2007. PAIM, J. S. Atenção Primária à Saúde no Brasil: fundamentos e perspectivas. Saúde em Debate, p. 633-646, 2020.",
    "tags": [
      "DSS",
      "SUS",
      "saúde da família"
    ]
  },
  {
    "id": "tp2022-120",
    "topography": "15",
    "topic": "Estudos epidemiológicos",
    "module": "Saúde Coletiva",
    "text": "Sobre a Medicina Baseada em Evidências (MBE), assinale a interpretação correta:",
    "options": [
      "(A) Decisões baseiam-se exclusivamente na experiência individual.",
      "(B) As preferências do paciente devem sempre ser ignoradas em prol da ciência.",
      "(C) Deve ser seguida de forma cega independente da realidade local.",
      "(D) Integra a melhor evidência científica com a expertise clínica e a realidade do paciente."
    ],
    "correctAnswer": 3,
    "explanation": "A Medicina Baseada em Evidências apoia a decisão clínica em três pilares que precisam ser combinados: a melhor evidência científica disponível, avaliada criticamente; a experiência e o julgamento clínico do médico; e os valores, preferências e circunstâncias do paciente, incluindo a realidade do serviço.\n\nPor isso, um estudo citado pelo familiar não invalida automaticamente a conduta: a evidência precisa ser interpretada à luz daquele paciente e daquele contexto. A alternativa D é a única que reúne os três elementos.",
    "commentary": "Experiência individual como base (A): basear a decisão apenas na vivência pessoal é justamente o que a MBE procura superar; a experiência é um dos pilares, não o único.\n\nPreferências sempre acatadas (B): as preferências do paciente e da família devem ser consideradas na decisão compartilhada, mas não obrigam o médico a adotar qualquer conduta pedida.\n\nAplicação integral (C): a evidência não deve ser aplicada de forma automática e completa em qualquer situação; estudos têm populações e limites próprios, e a aplicação depende do caso.",
    "tip": "MBE = melhor evidência + experiência clínica + valores e contexto do paciente. Nenhum pilar sozinho basta.",
    "reference": "Medicina Baseada em Evidências aplicada à prática do MFC, Stein, 2019.",
    "tags": [
      "MBE",
      "bioética"
    ]
  },
  {
    "id": "tp2023-9",
    "module": "Ciências Básicas",
    "text": "A paciente mencionada no texto (rainha da maisena) tem deficiência genética de uma proteína envolvida no metabolismo do glicogênio, a enzima fosforilase quinase hepática. Considerando a deficiência desta enzima, a principal finalidade terapêutica do consumo de amido com alta frequência pela paciente é:",
    "options": [
      "(A) Garantir a manutenção da glicemia.",
      "(B) Promover a síntese de glicogênio muscular.",
      "(C) Estimular a quebra do glicogênio hepático.",
      "(D) Inibir a síntese de glicogênio hepático."
    ],
    "correctAnswer": 0,
    "explanation": "A fosforilase quinase ativa a glicogênio fosforilase, enzima que quebra o glicogênio. Na deficiência hepática dessa enzima (glicogenose tipo IX), o fígado acumula glicogênio, mas não consegue liberá-lo como glicose entre as refeições, e a paciente tende à hipoglicemia de jejum.\n\nO amido de milho cru é digerido devagar e libera glicose de forma contínua no intestino. Tomado em intervalos curtos, ele substitui a glicogenólise hepática que falta e mantém a glicemia estável, inclusive à noite.",
    "commentary": "Síntese de glicogênio muscular (B): o músculo não tem glicose-6-fosfatase e não libera glicose para o sangue; aumentar seu glicogênio não corrige a hipoglicemia, que é o problema da paciente.\n\nEstimular a quebra do glicogênio hepático (C): a quebra está bloqueada pela própria deficiência, e a refeição com amido, ao elevar a insulina, ainda inibe a glicogenólise.\n\nInibir a síntese de glicogênio hepático (D): não é esse o objetivo; a insulina liberada após a ingestão até favorece a síntese, e o alvo terapêutico é evitar a hipoglicemia.",
    "tip": "Glicogenose hepática: o fígado não solta glicose. Amido de milho cru frequente = glicemia mantida.",
    "reference": "Harvey RA, Ferrier DR - Bioquímica Ilustrada 5ª. ed. Artmed, 2012. Marzzoco A, Torres BB - Bioquímica Básica. 3ª ed. Ed. Guanabara Koogan, 2007. Nelson DL, Cox MM - Princípios de Bioquímica de Lehninger 5ª ed. Artmed, 2011.",
    "tags": [
      "bioquímica",
      "erros inatos do metabolismo"
    ]
  },
  {
    "id": "tp2026-15",
    "topography": "2.2",
    "topic": "Insuficiência cardíaca",
    "module": "Ciências Básicas",
    "text": "Homem de 52 anos é internado com diagnóstico de insuficiência cardíaca descompensada. Apresenta dispneia aos mínimos esforços, ortopneia, edema de membros inferiores, turgência jugular e crepitações bibasais. Durante a avaliação hemodinâmica, identifica-se aumento da pressão de enchimento ventricular, sem elevação proporcional do débito cardíaco. Qual mecanismo fisiopatológico explica melhor esse achado?",
    "options": [
      "(A) Diminuição do retorno venoso com redução do volume sistólico.",
      "(B) Aumento da contratilidade miocárdica proporcional ao volume diastólico final.",
      "(C) Aumento da complacência ventricular com deslocamento da curva de Frank-Starling para baixo.",
      "(D) Aumento da frequência cardíaca compensatória com elevação do débito cardíaco."
    ],
    "correctAnswer": 2,
    "explanation": "A disfunção miocárdica grave desloca a curva de Frank-Starling para baixo, de modo que o aumento no volume diastólico final/pressão de enchimento não se traduz em maior volume de ejeção sistólico.",
    "commentary": "Comentários sobre a resposta correta:\n(C) O aumento do volume/pressão diastólica final sem aumento do débito cardíaco demonstra uma falha e exaustão do mecanismo de Frank-Starling em corações insuficientes, com deslocamento nítido da curva de performance ventricular para baixo.\n\nComentários sobre os distratores:\n(A) O retorno venoso e as pressões de enchimento encontram-se elevados secundariamente à congestão.\n(B) Descreve a regulação miocárdica intacta (fisiológica), inexistente no paciente cardiopata dilatado descompensado.\n(D) A taquicardia é resposta compensatória mas é ineficaz para normalizar o débito cardíaco per se.",
    "reference": "Han JC, Loiselle D, Taberner A, Tran K. Re-visiting the Frank-Starling nexus. Prog Biophys Mol Biol. 2021 Jan;159:10-21.",
    "tags": [
      "fisiologia",
      "cardiologia"
    ]
  },
  {
    "id": "enamed-2025-74",
    "topography": "16",
    "topic": "Pós-operatório",
    "module": "Cirurgia",
    "text": "Paciente de 47 anos, sexo feminino, atendida no ambulatório de cirurgia geral. A paciente havia sido submetida à tireoidectomia total há 60 dias devido a carcinoma folicular de tireoide, restrito à glândula. No pós-operatório imediato apresentou rouquidão, que persistiu durante todo o acompanhamento ambulatorial.\n\nCom base no quadro clínico apresentado, qual foi o nervo lesionado durante a cirurgia?",
    "options": [
      "(A) Laríngeo recorrente.",
      "(B) Glossofaríngeo.",
      "(C) Hipoglosso.",
      "(D) Vago."
    ],
    "correctAnswer": 0,
    "explanation": "A paralisia de prega vocal por lesão unilateral do nervo laríngeo recorrente (ramo do nervo vago) é uma das complicações mais descritas em tireoidectomias, manifestando-se por rouquidão persistente e voz soprosa ou fraca, consequente à incapacidade de adução simétrica das cordas vocais.",
    "commentary": "O nervo glossofaríngeo (B) inerva a musculatura estilofaríngea e a sensibilidade do terço posterior da língua. O hipoglosso (C) confere motricidade aos músculos da língua. A lesão do nervo vago principal (D) causaria déficits bem mais amplos que apenas a rouquidão isolada e específica por disfunção cordal.",
    "reference": "Sabiston Tratado de Cirurgia / Tratado de Otorrinolaringologia e Cirurgia de Cabeça e Pescoço",
    "tags": [
      "cirurgia",
      "cabeça e pescoço",
      "tireoidectomia",
      "complicações cirúrgicas",
      "anatomia"
    ]
  },
  {
    "id": "unifesp2025-7",
    "module": "Cirurgia",
    "text": "Recém-nascido de 35 semanas de idade gestacional, apresenta desconforto respiratório logo após o nascimento. Ao exame, está cianótico +/4+, com murmúrio vesicular presente bilateralmente com roncos disseminados; sopro sistólico rude no foco aórtico; abdome globoso, distendido, flácido, RHA + e normais, ausência de orifício anal; apresenta escoliose e deformidade em perna e pé à direita.\n\nQual é a conduta inicial mais adequada?",
    "options": [
      "(A) Ultrassonografia de abdome.",
      "(B) Ecocardiograma com doppler.",
      "(C) Tomografia computadorizada de tórax.",
      "(D) Passagem de sonda nasogástrica."
    ],
    "correctAnswer": 3,
    "explanation": "O RN tem anomalia anorretal (ausência de orifício anal), anomalia vertebral (escoliose), malformação de membro, provável cardiopatia (sopro) e roncos disseminados. É a associação VACTERL (vertebral, anal, cardíaca, traqueoesofágica, renal e de membros).\n\nNesse contexto é obrigatório pesquisar atresia de esôfago com fístula traqueoesofágica, que explica os roncos por aspiração de saliva. O primeiro passo, simples e à beira do leito, é passar sonda nasogástrica (orogástrica): se ela não progride, confirma-se a atresia. Isso define a conduta imediata (decúbito elevado, aspiração do coto e jejum) antes dos exames de imagem.",
    "commentary": "Ultrassonografia de abdome (A): necessária para pesquisar anomalias renais, mas não é a prioridade inicial.\n\nEcocardiograma (B): será feito (avaliação pré-operatória obrigatória), mas depois de afastar a atresia de esôfago, que muda o manejo imediato.\n\nTomografia de tórax (C): não está indicada na avaliação inicial.",
    "reference": "Tratado de Pediatria SBP — Malformações do trato digestivo / Associação VACTERL",
    "tags": [
      "cirurgia pediátrica",
      "neonatologia",
      "atresia de esôfago",
      "VACTERL",
      "anomalia anorretal"
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
    "id": "hosbos2025-7",
    "topography": "14",
    "topic": "Choque",
    "module": "Cirurgia",
    "text": "De acordo com os preceitos da 10ª edição do Advanced Trauma Life Support (ATLS®), a necessidade de reposição volêmica inicial no choque classificado como IV é de",
    "options": [
      "(A) 2000 mL de solução cristaloide + 2000 mL de hemocomponentes.",
      "(B) 3000 mL de sangue total + 500 mL de solução hipertônica 7,5%.",
      "(C) 1000 mL de solução cristaloide e observação dos sinais vitais.",
      "(D) 1000 mL de Ringer Lactato e protocolo de transfusão maciça.",
      "(E) reposição maciça com 4000 mL de solução cristaloide e vasoconstritores."
    ],
    "correctAnswer": 3,
    "explanation": "Choque classe IV (perda > 40% da volemia) exige reposição imediata de sangue. Pelo ATLS 10ª edição, a infusão inicial de cristaloide aquecido é de 1 litro no adulto, e a perda maciça com instabilidade indica o protocolo de transfusão maciça (concentrado de hemácias, plasma e plaquetas em proporção balanceada), com controle cirúrgico precoce do sangramento.",
    "commentary": "2 L de cristaloide + 2 L de hemocomponentes (A): o ATLS 10 abandonou os 2 litros de cristaloide; volumes grandes causam coagulopatia dilucional.\n\nSangue total e salina hipertônica (B): não é a recomendação do ATLS.\n\n1 L de cristaloide e observação (C): na classe IV não se observa — é preciso transfusão imediata.\n\n4 L de cristaloide com vasoconstritores (E): reposição agressiva com cristaloide e vasopressor piora a coagulopatia e não trata a hemorragia.",
    "reference": "ATLS — Advanced Trauma Life Support, 10ª ed. (American College of Surgeons) — Choque",
    "tags": [
      "choque hemorrágico",
      "ATLS",
      "transfusão maciça",
      "trauma"
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
    "id": "scmbh2026-51",
    "topography": "15",
    "topic": "Epidemiologia",
    "module": "Saúde Coletiva",
    "text": "Óbito hospitalar com múltiplas comorbidades e pneumonia recente; houve queda domiciliar na semana anterior sem lesões graves relatadas.\n\nAssinale a alternativa que apresenta a conduta MAIS adequada na Declaração de Óbito (DO).",
    "options": [
      "(A) Indicar todos os diagnósticos como causas básicas para ampliar a captação de dados.",
      "(B) Adotar apenas a pneumonia como causa básica, independentemente da sequência clínica.",
      "(C) Priorizar o evento queda como causa básica sem avaliar nexo e contribuição clínica.",
      "(D) Registrar causa básica após análise da cadeia causal, evitando mecanismos isolados."
    ],
    "correctAnswer": 3,
    "explanation": "Na Declaração de Óbito, a causa básica é a doença ou lesão que iniciou a cadeia de eventos que levou diretamente à morte. Ela é registrada na última linha preenchida da Parte I, após análise da sequência causal. Comorbidades contribuintes que não fazem parte da cadeia vão na Parte II.\n\nEvita-se registrar apenas mecanismos terminais (parada cardiorrespiratória, falência de múltiplos órgãos) como causa.",
    "commentary": "Todos os diagnósticos como causas básicas (A): há apenas uma causa básica; as demais são consequenciais ou contribuintes.\n\nSó a pneumonia, independentemente da sequência (B): a causa básica depende da análise da cadeia; a pneumonia pode ser consequência de outra doença.\n\nPriorizar a queda sem avaliar nexo (C): só seria causa básica se tivesse nexo causal com o óbito.",
    "reference": "Ministério da Saúde — Declaração de Óbito: manual de instruções para preenchimento (2022) / CID-10",
    "tags": [
      "saúde coletiva",
      "declaração de óbito",
      "causa básica",
      "estatísticas vitais"
    ]
  },
  {
    "id": "revalida-2025-1-63",
    "topography": "3.1",
    "topic": "Constipação intestinal",
    "module": "Pediatria",
    "text": "Menino de 4 anos é levado a uma unidade de pronto atendimento (UPA) devido a dor abdominal e constipação. A mãe relata que a criança vem apresentando constipação importante desde o desfralde, que foi realizado antes dos dois anos de idade, com evacuações a cada 4 dias, fezes em cíbalos, esforço evacuatório e dor. O exame físico revela massa palpável em fossa ilíaca esquerda e dor abdominal difusa.\n\nNesse caso, a conduta inicial adequada é",
    "options": [
      "(A) solicitar radiografia de abdome e coprológico funcional.",
      "(B) indicar desimpactação retal com lactulose e óleo mineral.",
      "(C) orientar sobre alimentação, ingesta hídrica e treinamento de toalete.",
      "(D) indicar desimpactação fecal com enema retal ou polietilenoglicol por via oral."
    ],
    "correctAnswer": 3,
    "explanation": "Constipação funcional com fecaloma (massa em fossa ilíaca esquerda). Antes da manutenção, é preciso desimpactar: polietilenoglicol oral em dose alta (1–1,5 g/kg/dia por 3–6 dias) ou enema retal. Depois vem a manutenção com PEG, dieta, água e treinamento de toalete.",
    "commentary": "Radiografia e coprológico (A): o diagnóstico é clínico; não são necessários.\n\nLactulose e óleo mineral para desimpactar (B): são laxativos de manutenção, não de desimpactação.\n\nSó orientação (C): é parte da manutenção, mas não resolve o fecaloma.",
    "reference": "NASPGHAN/ESPGHAN — Constipação funcional na criança (2014) / SBP",
    "tags": [
      "gastroenterologia pediátrica",
      "constipação funcional",
      "fecaloma",
      "polietilenoglicol"
    ],
    "tip": "Fecaloma: primeiro desimpacta (PEG em dose alta ou enema), depois mantém."
  },
  {
    "id": "iog2026-47",
    "topography": "15",
    "topic": "Vigilância epidemiológica",
    "module": "Saúde Coletiva",
    "text": "Qual instrumento metodológico é utilizado em vigilância epidemiológica para definir a existência ou não de uma epidemia?",
    "options": [
      "Comparação da prevalência com municípios vizinhos.",
      "Comparação da incidência com municípios vizinhos.",
      "Busca ativa de casos utilizando visitas domiciliares.",
      "Construção de um diagrama de controle."
    ],
    "correctAnswer": 3,
    "explanation": "Para saber se há epidemia, compara-se a incidência atual com a incidência esperada para o mesmo local e período, com base na série histórica. O instrumento é o diagrama de controle: calcula-se a média histórica (por mês ou semana) e um limite superior (média + 1,96 desvio-padrão, por exemplo); incidências acima desse limite caracterizam epidemia.",
    "commentary": "Comparar prevalência com municípios vizinhos (A): epidemia se avalia por casos novos (incidência), no próprio local, contra seu histórico.\n\nComparar incidência com vizinhos (B): realidades diferentes; a referência é a série histórica do próprio local.\n\nBusca ativa (C): é estratégia de investigação de casos, não método para definir epidemia.",
    "reference": "Ministério da Saúde — Guia de Vigilância em Saúde / Rouquayrol — Epidemiologia & Saúde",
    "tags": [
      "vigilância epidemiológica",
      "diagrama de controle",
      "epidemia",
      "incidência"
    ],
    "tip": "Epidemia: incidência acima do limite superior do diagrama de controle."
  },
  {
    "id": "sespe2026-99",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "A estratégia Consultório na Rua, instituída pela Política Nacional de Atenção Básica, visa ampliar o acesso da população em situação de rua aos serviços de saúde, ofertando, de maneira mais oportuna, atenção integral à saúde para esse grupo populacional.\n\nSobre a organização das equipes dos Consultórios na Rua, assinale a alternativa CORRETA.",
    "options": [
      "São organizadas em 4 modalidades (I, II, III e IV).",
      "A Modalidade I é formada minimamente por 6 (seis) profissionais.",
      "A Modalidade II é formada minimamente por 8 (oito) profissionais.",
      "A Modalidade III é formada minimamente por 6 (seis) profissionais, acrescida de um profissional médico.",
      "A presença do Agente Social é obrigatória em todas as modalidades."
    ],
    "correctAnswer": 3,
    "explanation": "Pela Portaria GM/MS nº 122/2011 (equipes de Consultório na Rua), existem três modalidades:\n\n• Modalidade I: mínimo de 4 profissionais (2 de nível superior e 2 de nível médio).\n• Modalidade II: mínimo de 6 profissionais (3 de nível superior e 3 de nível médio).\n• Modalidade III: a modalidade II acrescida de um médico.\n\nA alternativa D (modalidade III com 6 profissionais mais um médico) está correta.",
    "commentary": "4 modalidades (A): são três.\n\nModalidade I com 6 profissionais (B): são 4.\n\nModalidade II com 8 profissionais (C): são 6.\n\nAgente social obrigatório em todas (E): o agente social é uma das categorias possíveis, não obrigatória em todas as modalidades.",
    "reference": "Ministério da Saúde — Portaria GM/MS nº 122/2011 / PNAB 2017",
    "tags": [
      "atenção primária",
      "consultório na rua",
      "população em situação de rua",
      "equidade"
    ],
    "tip": "Consultório na Rua: I = 4 profissionais, II = 6, III = II + médico."
  },
  {
    "id": "hpp2026-73",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Sobre a estratificação de risco no pré-natal é correto afirmar de acordo o Protocolo de Pré Natal Mãe Curitibana Vale a Vida 2025:",
    "options": [
      "Pacientes com hipotireoidismo são classificadas como gestação de médio risco.",
      "Adolescente de 14 anos é considerada gestante de baixo risco.",
      "Paciente com Lesão de alto grau no citopatológico é considerada de alto risco.",
      "Paciente com asma moderada é considerada de alto risco."
    ],
    "correctAnswer": 3,
    "explanation": "Na estratificação de risco do Mãe Curitibana Vale a Vida (2025), a asma é classificada pela gravidade: asma leve controlada pode seguir no risco habitual ou intermediário, mas asma moderada ou grave classifica a gestação como alto risco, com acompanhamento em ambulatório especializado.",
    "commentary": "Hipotireoidismo como médio risco (A): pelo protocolo, as doenças da tireoide entram como alto risco.\n\nAdolescente de 14 anos como baixo risco (B): gestantes com menos de 15 anos são de risco intermediário.\n\nLesão de alto grau no citopatológico como alto risco (C): é risco intermediário, com encaminhamento à patologia cervical.",
    "reference": "Secretaria Municipal da Saúde de Curitiba — Protocolo Pré-Natal Mãe Curitibana Vale a Vida (2025)",
    "tags": [
      "pré-natal",
      "estratificação de risco gestacional",
      "asma na gestação",
      "protocolo municipal"
    ],
    "tip": "Mãe Curitibana: < 15 anos e lesão de alto grau = intermediário; asma moderada/grave = alto risco."
  },
  {
    "id": "famema2025-10",
    "topography": "1.1",
    "topic": "AVC",
    "module": "Clínica Médica",
    "text": "Paciente de 45 anos chega à unidade de saúde com quadro de hemiparesia direita e afasia, que teve início há 30 minutos. Ele não tem antecedentes prévios, assim como alergias. Considerando o diagnóstico de AVC, assinale a alternativa correta.",
    "options": [
      "Pacientes acima de 15 anos são elegíveis para realização de trombólise.",
      "Para se realizar a trombólise, é necessário um nível pressórico ≤ 185 mmHg x 110 mmHg.",
      "O acometimento está provavelmente relacionado à artéria cerebral média direita.",
      "Glicemia < 70 e > 250 mg/dL contraindica a realização da trombólise."
    ],
    "correctAnswer": 1,
    "explanation": "Hemiparesia direita com afasia há 30 minutos: AVC isquêmico no território da artéria cerebral média esquerda (hemisfério dominante), dentro da janela de trombólise (até 4,5 h).\n\nPara receber alteplase ou tenecteplase, a pressão arterial precisa estar ≤ 185 × 110 mmHg antes da infusão e ser mantida ≤ 180 × 105 mmHg nas 24 horas seguintes, pelo risco de transformação hemorrágica.",
    "commentary": "Acima de 15 anos (A): o critério de idade é ≥ 18 anos.\n\nArtéria cerebral média direita (C): a afasia indica lesão do hemisfério dominante (esquerdo na maioria) e a hemiparesia é contralateral; o território é a ACM esquerda.\n\nGlicemia < 70 e > 250 (D): glicemia < 50 mg/dL ou > 400 mg/dL é que precisa ser corrigida/considerada contraindicação, porque pode simular déficit focal.",
    "tip": "Trombólise no AVC: ≥ 18 anos, até 4,5 h, PA ≤ 185 × 110 antes e ≤ 180 × 105 depois, glicemia entre 50 e 400 mg/dL, TC sem sangramento.",
    "reference": "Powers WJ et al. 2019 AHA/ASA Guidelines for the Early Management of Acute Ischemic Stroke. Stroke, 2019. Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas – Trombólise no AVC isquêmico agudo.",
    "tags": [
      "AVC isquêmico",
      "trombólise",
      "pressão arterial"
    ]
  },
  {
    "id": "famema2026-8",
    "topography": "4.1",
    "topic": "Distúrbios hidroeletrolíticos",
    "module": "Clínica Médica",
    "text": "Sobre distúrbios eletrolíticos, assinale a correta.",
    "options": [
      "A hiponatremia hipervolêmica é típica de insuficiência cardíaca, cirrose e síndrome nefrótica.",
      "A hipercalemia nunca causa alterações no eletrocardiograma antes de níveis maiores que 8,0 mEq/L.",
      "A hipocalcemia cursa com alargamento de QRS e ondas T apiculadas.",
      "A hipernatremia sempre decorre de perda renal de água."
    ],
    "correctAnswer": 0,
    "explanation": "Na hiponatremia hipervolêmica há excesso de água corporal total maior que o excesso de sódio. Ocorre nos estados edematosos em que o volume circulante efetivo está reduzido, o que ativa o hormônio antidiurético e o sistema renina-angiotensina: insuficiência cardíaca, cirrose e síndrome nefrótica (além da doença renal avançada). O tratamento é restrição hídrica, diurético de alça e tratamento da doença de base.",
    "commentary": "Hipercalemia sem alteração no ECG abaixo de 8 (B): alterações (onda T apiculada, depois QRS largo) podem aparecer a partir de 5,5–6,5 mEq/L, e a correlação com o nível sérico é imperfeita.\n\nHipocalcemia com QRS largo e T apiculada (C): esses são achados de hipercalemia; a hipocalcemia prolonga o intervalo QT.\n\nHipernatremia sempre por perda renal (D): pode vir de perdas extrarrenais (suor, diarreia, queimaduras), ingestão insuficiente de água ou ganho de sódio.",
    "tip": "Hiponatremia hipervolêmica = IC, cirrose, nefrótica. Hipocalcemia = QT longo. Hipercalemia = T apiculada.",
    "reference": "Spasovski G et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol, 2014.",
    "tags": [
      "hiponatremia",
      "distúrbios eletrolíticos",
      "eletrocardiograma"
    ]
  },
  {
    "id": "famerp2025-4",
    "topography": "6.1",
    "topic": "Pseudogota",
    "module": "Clínica Médica",
    "text": "Paciente de 50 anos, gênero masculino, com histórico de hipertensão e doença renal crônica é admitido por quadro de dor intensa e edema em joelho direito com início há 2 dias. Realizada artrocentese com líquido sinovial revelando cristais birrefringentes positivos sob microscopia de luz polarizada.\n\nQual é o diagnóstico mais provável?",
    "options": [
      "Gota",
      "Pseudogota",
      "Artrite séptica",
      "Artrite reumatoide"
    ],
    "correctAnswer": 1,
    "explanation": "Monoartrite aguda de joelho com cristais de birrefringência POSITIVA à luz polarizada: cristais de pirofosfato de cálcio diidratado (romboides, fracamente positivos), que definem a artropatia por pirofosfato — pseudogota. O joelho é a articulação mais acometida.",
    "commentary": "Gota (A): cristais de urato monossódico, em forma de agulha, com birrefringência NEGATIVA forte.\n\nArtrite séptica (C): o diagnóstico é por celularidade elevada (em geral > 50.000/mm³ com neutrófilos), Gram e cultura; cristais não definem infecção, embora possam coexistir.\n\nArtrite reumatoide (D): poliartrite crônica, simétrica, de pequenas articulações; não há cristais no líquido sinovial.",
    "tip": "Pirofosfato: Positivo, Pseudogota, romboide. Urato: negativo, agulha.",
    "reference": "Rosenthal AK, Ryan LM. Calcium Pyrophosphate Deposition Disease. N Engl J Med, 2016. Sociedade Brasileira de Reumatologia — Artropatias microcristalinas.",
    "tags": [
      "pseudogota",
      "pirofosfato de cálcio",
      "líquido sinovial",
      "monoartrite"
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
    "id": "amp2026-85",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "A capacidade que as equipes de saúde da família têm de estabelecer mecanismos de integração e de cooperação clínica com os diferentes níveis de atenção, tendo como centro desses mecanismos as pessoas usuárias. A descrição supracitada diz respeito a:",
    "options": [
      "Acesso.",
      "Integralidade.",
      "Resolubilidade.",
      "Longitudinalidade.",
      "Coordenação de cuidados."
    ],
    "correctAnswer": 4,
    "explanation": "A coordenação do cuidado é o atributo da APS que integra os diferentes serviços e níveis de atenção usados pela pessoa, articulando informações, encaminhamentos e contrarreferências, com o usuário no centro. É a definição apresentada no enunciado.",
    "commentary": "Acesso (A): facilidade de chegar ao serviço e ser atendido (primeiro contato).\n\nIntegralidade (B): oferta do conjunto de ações necessárias às necessidades da pessoa, reconhecendo problemas biológicos, psicológicos e sociais.\n\nResolubilidade (C): capacidade de resolver a maioria dos problemas no próprio serviço.\n\nLongitudinalidade (D): acompanhamento da pessoa ao longo do tempo, com vínculo.",
    "reference": "Starfield B — Atenção primária: equilíbrio entre necessidades de saúde, serviços e tecnologia",
    "tags": [
      "atributos da APS",
      "coordenação do cuidado",
      "atenção primária"
    ],
    "tip": "Integrar os níveis de atenção com o usuário no centro = coordenação do cuidado."
  },
  {
    "id": "amrigs2025-86",
    "module": "Clínica Médica",
    "text": "Qual dos seguintes achados laboratoriais é mais indicativo de anemia hemolítica?",
    "options": [
      "Aumento da bilirrubina indireta.",
      "Diminuição da contagem de reticulócitos.",
      "Presença de células em alvo no esfregaço de sangue periférico.",
      "Aumento do nível de ferritina."
    ],
    "correctAnswer": 0,
    "explanation": "Na hemólise, a destruição de hemácias libera hemoglobina, cujo heme é convertido em bilirrubina não conjugada: sobe a bilirrubina indireta. Outros marcadores: reticulocitose, LDH elevada e haptoglobina baixa.",
    "commentary": "Reticulócitos diminuídos (B): na hemólise, a medula responde com reticulocitose (salvo crise aplásica).\n\nCélulas em alvo (C): aparecem em hemoglobinopatias, doença hepática e pós-esplenectomia; não são marcador geral de hemólise (esferócitos e esquizócitos são mais típicos).\n\nFerritina aumentada (D): marcador de estoque de ferro e de inflamação, não de hemólise.",
    "reference": "Zago — Tratado de Hematologia / Goldman-Cecil Medicine",
    "tags": [
      "anemia hemolítica",
      "bilirrubina indireta",
      "reticulócitos",
      "LDH",
      "haptoglobina"
    ],
    "tip": "Hemólise: BI ↑, LDH ↑, reticulócitos ↑, haptoglobina ↓."
  },
  {
    "id": "amrigs2026-86",
    "module": "Saúde Coletiva",
    "text": "A consulta embasada no Método Clínico Centrado na Pessoa (MCCP) apresenta alguns componentes. Nesse sentido, analise os componentes apresentados abaixo:\n1. Fortalecer a relação médico-paciente.\n2. Conhecer o contexto do paciente.\n3. Construir um entendimento acerca do problema e do que precisa ser feito.\n4. Focalizar os aspectos objetivos da doença, como sinais e sintomas.\n\nO resultado da somatória dos números correspondentes aos componentes corretos é:",
    "options": [
      "05.",
      "06.",
      "08.",
      "10."
    ],
    "correctAnswer": 1,
    "explanation": "O Método Clínico Centrado na Pessoa (Stewart et al.) tem quatro componentes: explorar a saúde, a doença e a experiência da doença; entender a pessoa como um todo (inclusive seu contexto); elaborar um plano conjunto de manejo (entendimento comum do problema e do que fazer); e intensificar a relação médico-pessoa.\n\nCorretos: 1 (fortalecer a relação), 2 (conhecer o contexto) e 3 (construir entendimento comum). O 4 está errado: o método não foca apenas nos aspectos objetivos da doença. Soma: 1 + 2 + 3 = 6.",
    "commentary": "05 (A): soma de 1 + 4 ou 2 + 3, deixando de fora componentes corretos.\n\n08 (C) e 10 (D): incluem o item 4, que contraria o método.",
    "reference": "Stewart M et al. Medicina centrada na pessoa: transformando o método clínico (3ª ed.) / Gusso — Tratado de Medicina de Família e Comunidade",
    "tags": [
      "método clínico centrado na pessoa",
      "medicina de família e comunidade",
      "relação médico-paciente"
    ],
    "tip": "MCCP: experiência da doença, pessoa como um todo, plano conjunto, relação médico-pessoa."
  },
  {
    "id": "cerman2025-77",
    "topography": "11",
    "topic": "Puericultura",
    "module": "Pediatria",
    "text": "Sobre o desenvolvimento dos caracteres sexuais secundários, pode-se afirmar que:",
    "options": [
      "(A) O final da puberdade nos meninos é o odor axilar.",
      "(B) A telarca é o primeiro sinal de puberdade nas meninas.",
      "(C) O primeiro sinal de puberdade masculina é o nascimento dos pelos pubianos.",
      "(D) Nas meninas, a menarca ocorre simultaneamente à telarca, marcando o início da puberdade."
    ],
    "correctAnswer": 1,
    "explanation": "Nas meninas, o primeiro sinal de puberdade é a telarca (broto mamário, M2), em geral entre 8 e 13 anos. A menarca ocorre em média 2 a 2,5 anos depois, no estádio M4.",
    "commentary": "Odor axilar como final da puberdade masculina (A): odor axilar é sinal de adrenarca e aparece cedo.\n\nPelos pubianos como primeiro sinal masculino (C): o primeiro sinal no menino é o aumento testicular (volume ≥ 4 mL).\n\nMenarca simultânea à telarca (D): a menarca é evento tardio da puberdade.",
    "reference": "SBP — Departamento de Endocrinologia: Puberdade normal / Tanner JM",
    "tags": [
      "puberdade",
      "telarca",
      "estadiamento de Tanner",
      "adolescência"
    ]
  }
];
