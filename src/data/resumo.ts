// Arquivo gerado por `npm run gen` a partir do banco de questões. Não editar à mão.
// O build e o servidor local regeneram este arquivo sozinhos; o `npm run validate` acusa se ficar desatualizado.
import type { Question } from '../types';

export const TOTAL_QUESTIONS = 3204;

export const COUNT_BY_AREA: Record<string, number> = {
  "Pediatria": 606,
  "Clínica Médica": 673,
  "Cirurgia": 581,
  "Ginecologia e Obstetrícia": 599,
  "Saúde Coletiva": 585,
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
  "Saúde Coletiva|CERMAN": 38
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
    "id": "tp2022-59",
    "topography": "11",
    "topic": "Icterícia neonatal",
    "module": "Pediatria",
    "text": "Recém-nascido a termo (3530g), tipagem O- (mãe) e B+ (filho), Coombs e Eluato negativos. Icterícia Zona 4 com 48h (BI 15.5). Diagnóstico:",
    "options": [
      "(A) Icterícia por isoimunização ABO.",
      "(B) Icterícia por deficiência de G6PD.",
      "(C) Icterícia fisiológica do RN.",
      "(D) Icterícia precoce por incompatibilidade."
    ],
    "correctAnswer": 2,
    "explanation": "Com Coombs e Eluato negativos, afasta-se isoimunização; BI elevada aos 2 dias sem precocidade extrema sugere fisiologia.",
    "commentary": "Como não há evidência laboratorial de hemólise imune (Coombs/Eluato neg), trata-se de icterícia fisiológica, comum após 24h de vida.",
    "reference": "Manual de Neonatologia Cloherty.",
    "tags": [
      "neonatologia"
    ]
  },
  {
    "id": "tp2023-28",
    "topography": "13",
    "topic": "Dependência química",
    "module": "Clínica Médica",
    "text": "JM está em situação de rua e na primeira vez em que experimentou cocaína teve uma sensação de intensa euforia, bem-estar, desinibição, perda de apetite e aumento da energia e libido; porém, com o uso prolongado da droga, passou a ter que usar cada vez mais a cocaína para obter esses mesmos efeitos. O nome que corresponde a esse efeito causado pelo consumo prolongado de drogas é:",
    "options": [
      "(A) Abuso",
      "(B) Abstinência",
      "(C) Tolerância",
      "(D) Overdose"
    ],
    "correctAnswer": 2,
    "explanation": "Precisar de doses cada vez maiores para obter o mesmo efeito, ou ter efeito menor com a mesma dose, é a definição de tolerância. Ela surge com o uso repetido, por adaptação do organismo à substância (mudanças nos receptores, na neurotransmissão e no metabolismo).\n\nA tolerância é um dos critérios do transtorno por uso de substâncias e costuma andar junto com a abstinência e a perda de controle sobre o consumo, por isso é peça central na evolução para a dependência.",
    "commentary": "Abuso (A): designa um padrão de uso que traz prejuízos (sociais, legais, de saúde), não a necessidade de aumentar a dose; o DSM-5 substituiu abuso e dependência por transtorno por uso de substâncias.\n\nAbstinência (B): são os sintomas que surgem ao parar ou reduzir o uso; na cocaína, disforia, cansaço, sonolência, aumento do apetite e fissura.\n\nOverdose (D): é a intoxicação grave por dose excessiva, com risco de arritmia, infarto, convulsão e hipertermia.",
    "tip": "Mais droga para o mesmo efeito = tolerância. Sintomas ao parar = abstinência.",
    "reference": "DIEHL, A.; CORDEIRO, D. C.; LARANJEIRA, R. (Orgs.). Dependência química: prevenção, tratamento e políticas públicas. 2. ed. Porto Alegre: Artmed, 2018. 554 p.",
    "tags": [
      "psiquiatria"
    ]
  },
  {
    "id": "tp2026-29",
    "topography": "1.1",
    "topic": "Cefaleias",
    "module": "Clínica Médica",
    "text": "Mulher de 32 anos procura pronto atendimento por cefaleia hemicraniana pulsátil há 10 horas, associada a náuseas, fotofobia e piora com esforços habituais. Refere episódios semelhantes nos últimos dois anos, com melhora espontânea entre as crises, sem febre, déficit focal ou alteração do nível de consciência. Indique a investigação diagnóstica:",
    "options": [
      "(A) Realizar o diagnóstico clínico de enxaqueca.",
      "(B) Solicitar tomografia computadorizada de crânio.",
      "(C) Indicar punção lombar para afastar causas secundárias.",
      "(D) Solicitar eletroencefalograma."
    ],
    "correctAnswer": 0,
    "explanation": "A enxaqueca é diagnosticada clinicamente com base em critérios estabelecidos (IHS), dispensando exames de imagem e laboratoriais na ausência de sinais de alerta (red flags).",
    "commentary": "Comentários sobre a resposta correta:\n(A) A enxaqueca (migrânea) típica apresenta sintomas clássicos (hemicraniana, pulsátil, associada a náuseas e fotofobia, recidivante há anos). Na ausência completa de sinais de alarme (\"red flags\", como febre, déficit focal, início súbito em trovão, edema de papila), o diagnóstico é estritamente clínico e exames complementares de imagem são desnecessários.\n\nComentários sobre os distratores:\n(B) A tomografia computadorizada de crânio não deve ser solicitada em cefaleias recorrentes típicas sem sinais de alerta ou mudança de padrão álgico.\n(C) A punção lombar é indicada na investigação de suspeitas infecciosas (meningite), hemorragia subaracnoidea de TC normal, ou hipertensão intracraniana, não se aplicando à crise migranosa típica.\n(D) O eletroencefalograma não possui sensibilidade, especificidade ou utilidade no diagnóstico da enxaqueca ou outras cefaleias primárias.",
    "reference": "INTERNATIONAL HEADACHE SOCIETY. The International Classification of Headache Disorders, 3rd edition. Cephalalgia, 2018. | HARRISON’S Principles of Internal Medicine. 21st ed. New York: McGraw-Hill, 2022.",
    "tags": [
      "neurologia"
    ]
  },
  {
    "id": "tp2022-61",
    "topography": "16",
    "topic": "Feridas",
    "module": "Cirurgia",
    "text": "Paciente de 25 anos, masculino, será submetido a correção de hérnia inguinal direita por via convencional - inguinotomia. Visando a ligadura dos vasos superficiais do subcutâneo, o fechamento da aponeurose e o fechamento da pele, quais seriam os fios utilizados, respectivamente?",
    "options": [
      "(A) Algodão, PDS (polidioxanona), monocryl (poliglecaprona 25).",
      "(B) Vicryl (poliglactina 370), nylon, monocryl (poliglecaprona 25).",
      "(C) PDS (polidioxanona), monocryl (poligecaprina 25), algodão.",
      "(D) Catgut, monocryl (poliglecaprona 25), nylon."
    ],
    "correctAnswer": 0,
    "explanation": "Algodão para vasos superficiais, PDS (fio de longa absorção) para aponeurose e Monocryl para sutura intradérmica na pele.",
    "commentary": "Para ligaduras superficiais, o algodão é tradicional. A aponeurose exige um fio que suporte tração por tempo prolongado (PDS). Na pele, o monocryl evita cicatrizes exageradas.",
    "reference": "Sabiston - Tratado de Cirurgia - 18ª Ed.",
    "tags": [
      "cirurgia geral",
      "suturas"
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
    "id": "tp2021-88",
    "topography": "5.2",
    "topic": "Descolamento prematuro de placenta",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, com idade gestacional de 32 semanas, chega à emergência com dor abdominal de início súbito, contínua, associada a sangramento transvaginal de coloração escura. Traz ultrassom do dia anterior mostrando feto vivo e placenta corporal posterior. Exame físico: PA = 160 x 90 mmHg, feto longitudinal, pélvico, BCF = 110 bpm constante, útero hipertônico, colo fechado. A conduta é:",
    "options": [
      "(A) Cesárea imediata.",
      "(B) Conduta expectante.",
      "(C) Inibição de trabalho de parto.",
      "(D) Indução do trabalho de parto."
    ],
    "correctAnswer": 0,
    "explanation": "O quadro de dor abdominal contínua súbita, hipertonia uterina (útero lenhoso), elevação da pressão arterial e sofrimento fetal agudo (BCF 110 bpm fixo) com sangramento escuro é típico de Descolamento Prematuro de Placenta (DPP). Sendo um feto vivo com sofrimento agudo e sem parto vaginal iminente, indica-se a cesariana imediata.",
    "commentary": "A suspeita clínica de DPP é essencialmente clínica (dor abdominal súbita intensa contínua + hipertonia uterina + sangramento escuro). Sendo o feto vivo, e na presença de sofrimento fetal agudo sem parto vaginal iminente (no caso o colo está impérvio e fechado), a conduta prioritária é a resolução cirúrgica por cesariana rápida, precedida de amniotomia que reduz a hipertensão intraútero e evita infiltração miometrial (útero de Couvelaire) e coagulação intravascular disseminada.",
    "reference": "Fernandes CE, Silva de Sá MF. Tratado de Obstetrícia FEBRASGO. São Paulo: Elsevier, 2018; Montenegro CABR. Rezende Obstetrícia. 13ª ED. Rio de Janeiro: Guanabara Koogan, 2017.",
    "tags": [
      "obstetrícia",
      "descolamento de placenta",
      "urgência"
    ]
  },
  {
    "id": "tp2024-116",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Sobre o Método Clínico Centrado na Pessoa (MCCP), é correto afirmar:",
    "options": [
      "O componente \"Sendo Realista\" foca apenas nos recursos financeiros do paciente.",
      "O acrônimo SIFE refere-se à anamnese técnica por sistemas.",
      "Deve-se seguir rigidamente a ordem dos quatro componentes em todas as consultas.",
      "O primeiro componente foca em entender a experiência da doença para o indivíduo (ideias, sentimentos, expectativas)."
    ],
    "correctAnswer": 3,
    "explanation": "O Método Clínico Centrado na Pessoa organiza a consulta em quatro componentes: explorar a saúde, a doença e a experiência de adoecer; entender a pessoa como um todo (história de vida, família, contexto); elaborar um plano conjunto de manejo; e intensificar a relação médico-pessoa.\n\nO primeiro componente vai além do diagnóstico biomédico: busca saber como a pessoa vive aquele problema. Para isso usa-se o acrônimo SIFE — Sentimentos, Ideias, Funcionalidade (o impacto no dia a dia) e Expectativas em relação à consulta. É essa compreensão que permite chegar a um plano que a pessoa aceite e consiga seguir.",
    "commentary": "Sendo realista restrito ao dinheiro do paciente (A): a ideia de ser realista diz respeito ao uso sensato do tempo, dos recursos do serviço e da equipe e das próprias habilidades do médico, e não só às finanças da pessoa.\n\nSIFE como anamnese por sistemas (B): o SIFE explora a experiência subjetiva da doença (sentimentos, ideias, funcionalidade e expectativas); o interrogatório sobre os diversos aparelhos é outra ferramenta.\n\nOrdem rígida dos componentes (C): os componentes se entrelaçam e são retomados conforme a conversa e o vínculo evoluem; não existe sequência obrigatória em cada consulta.",
    "tip": "MCCP, 1º componente = SIFE: Sentimentos, Ideias, Funcionalidade e Expectativas do paciente sobre a doença.",
    "reference": "Consulta centrada na pessoa, José Mauro Ceratti Lopes; Lêda Chaves Dias, Tratado de Medicina de Família e Comunidade, Capítulo 15, 2ª edição, Gustavo Gusso, 2019. Método clínico centrado na pessoa, Marcelo Garcia Kolling, Medicina Ambulatorial – Condutas de Atenção Primária baseadas em Evidências, Cap 11, 5ª edição, Artmed, 2022",
    "tags": [
      "MCCP",
      "relação médico-paciente",
      "APS"
    ]
  },
  {
    "id": "tp2021-107",
    "topography": "15",
    "topic": "Estratégia Saúde da Família",
    "module": "Saúde Coletiva",
    "text": "Foi instalada uma nova equipe de Estratégia de Saúde da família em uma área de risco. A equipe iniciou o trabalho percorrendo área, fazendo o levantamento dos recursos disponíveis, possíveis barreiras ao acesso e cadastrando os residentes da área. Que princípios norteadores da Estratégia de Saúde da Família foram utilizados nesse trabalho?",
    "options": [
      "(A) Territorialização e adscrição da clientela.",
      "(B) Hierarquização e integralidade.",
      "(C) Equidade e caráter substitutivo.",
      "(D) Referência e contrarreferência."
    ],
    "correctAnswer": 0,
    "explanation": "O processo de percorrer e mapear a área geográfica delimitada de atuação da equipe (definindo barreiras, vulnerabilidades e recursos) e identificar e cadastrar os habitantes da localidade caracteriza de maneira explícita os princípios norteadores de territorialização e adscrição da clientela.",
    "commentary": "No âmbito organizacional da Atenção Primária no Brasil, a territorialização define a área geográfica de corresponsabilidade da ESF e o mapeamento locorregional. Conectado a ela, a adscrição consagra o vínculo e responsabilidade permanente sobre uma população específica descrita (indivíduos cadastrados vinculados ao serviço no território demarcado).",
    "reference": "PNAB - Política Nacional de Atenção Básica, Portaria nº 2.436/2017.",
    "tags": [
      "estratégia saúde da família",
      "territorialização",
      "princípios do SUS"
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
    "id": "unifesp2025-28",
    "topography": "14",
    "topic": "Choque",
    "module": "Clínica Médica",
    "text": "Homem, 27 anos de idade, previamente hígido, foi vítima de acidente automobilístico com sangramentos. Apresenta, à avaliação, PA = 94/52 mmHg, oligúria, creatinina = 1,9 mg/dL (VR 0,7 a 1,3 mg/dL), ureia = 96 mg/dL (VR 20 a 50 mg/dL), K = 6,1 mEq/L (VR 3,5 a 5,1 mEq/L), densidade urinária = 1036 (VR 1005 a 1030), fração de excreção de ureia = 27% e urina I com presença de cilindros hialinos abundantes.\n\nQual é o tratamento mais adequado neste momento?",
    "options": [
      "(A) Diálise de urgência.",
      "(B) Reposição de volume.",
      "(C) Droga inotrópica.",
      "(D) Furosemida intravenosa."
    ],
    "correctAnswer": 1,
    "explanation": "Lesão renal aguda em politraumatizado hipotenso por sangramento, com urina concentrada (densidade 1036), fração de excreção de ureia de 27% (< 35% sugere causa pré-renal) e cilindros hialinos (sedimento 'inocente'): LRA pré-renal por hipovolemia.\n\nO tratamento é a reposição volêmica (com controle do sangramento), que deve reverter a azotemia. O K de 6,1 sem descrição de alterações eletrocardiográficas não justifica, por si só, diálise de urgência.",
    "commentary": "Diálise de urgência (A): indicada para hipercalemia refratária, acidose grave, hipervolemia refratária ou uremia sintomática, ausentes aqui.\n\nInotrópico (C): o choque é hipovolêmico; a primeira medida é repor volume.\n\nFurosemida (D): agrava a hipovolemia e piora a lesão pré-renal.",
    "reference": "KDIGO Clinical Practice Guideline for Acute Kidney Injury",
    "tags": [
      "nefrologia",
      "lesão renal aguda",
      "pré-renal",
      "fração de excreção de ureia"
    ]
  },
  {
    "id": "hosbos2027-27",
    "topography": "4.1",
    "topic": "Distúrbios ácido-base",
    "module": "Clínica Médica",
    "text": "Homem de 58 anos apresenta vômitos incoercíveis há 4 dias e, nas últimas 12 horas, confusão mental e taquipneia. AP: etilista crônico. Exame físico: PA: 90 x 58 mmHg, FC: 116 bpm, FR: 28 irpm e desidratação 3+/4+. Gasometria arterial: pH: 7,42, PaCO₂: 30 mmHg, bicarbonato: 19 mEq/L, sódio: 138 mEq/L, cloro: 92 mEq/L, potássio: 3,1 mEq/L, albumina: 3,0 g/dL.\n\nOs diagnósticos são",
    "options": [
      "(A) Acidose metabólica com ânion gap elevado, alcalose metabólica e alcalose respiratória.",
      "(B) Acidose metabólica com ânion gap normal, alcalose metabólica e acidose respiratória.",
      "(C) Alcalose metabólica e respiratória.",
      "(D) Acidose metabólica com ânion gap elevado, acidose metabólica com ânion gap normal e alcalose respiratória.",
      "(E) Alcalose respiratória e acidose respiratória."
    ],
    "correctAnswer": 0,
    "explanation": "pH normal não significa equilíbrio. Passo a passo:\n\n• Ânion-gap = 138 – (92 + 19) = 27; corrigido pela albumina de 3,0: cerca de 29,5. Está elevado: acidose metabólica de AG alto (cetoacidose alcoólica, lactato)\n• Delta-delta: o AG subiu cerca de 17 e o bicarbonato caiu só cerca de 5, indicando alcalose metabólica associada (vômitos, cloro baixo)\n• pCO₂ esperada para HCO₃⁻ de 19 = 1,5 × 19 + 8 ≈ 36,5; a medida é 30, logo há alcalose respiratória associada (taquipneia)\n\nSão três distúrbios: acidose metabólica de AG elevado, alcalose metabólica e alcalose respiratória.",
    "commentary": "AG normal e acidose respiratória (B): o AG está elevado e a pCO₂ está abaixo do esperado.\n\nSó alcalose metabólica e respiratória (C): ignora a acidose de AG alto.\n\nDuas acidoses metabólicas (D): não há acidose de AG normal; o delta-delta mostra alcalose metabólica.\n\nAlcalose e acidose respiratórias (E): é impossível ter as duas ao mesmo tempo.",
    "reference": "Harrison — Distúrbios ácido-base / Berend K et al. — Physiological approach to acid-base disturbances (NEJM 2014)",
    "tags": [
      "nefrologia",
      "distúrbios ácido-base",
      "ânion-gap",
      "delta-delta"
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
    "id": "usprp2025-50",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Secundigesta (G2P0A1), 26 anos, com atraso menstrual de 18 semanas, inicia pré-natal hoje após teste de gravidez positivo. Nega doenças ou intercorrências até o momento. Exame físico geral sem alterações. A altura uterina é de 26cm. Fez ultrassonografia hoje, com achado de gestação gemelar dicoriônica, com idade gestacional de 24 semanas, achados fetais e anexiais normais.\n\nCom relação à profilaxia de pré-eclâmpsia, nesse caso, a alternativa correta é:",
    "options": [
      "(A) Iniciar ácido acetilsalicílico e cálcio.",
      "(B) Prescrever ácido acetilsalicílico.",
      "(C) Prescrever ácido acetilsalicílico e enoxaparina.",
      "(D) Não deve ser prescrita."
    ],
    "correctAnswer": 3,
    "explanation": "A gestação gemelar é fator de alto risco para pré-eclâmpsia e indicaria AAS em dose baixa (com cálcio se a ingesta for baixa). Mas o benefício do AAS depende do início precoce, idealmente entre 12 e 16 semanas, pois ele atua na placentação.\n\nA ultrassonografia, mais confiável que a DUM incerta, data a gestação em 24 semanas. Fora da janela recomendada pelas diretrizes brasileiras (até 16–20 semanas), o gabarito entende que não deve ser prescrito.",
    "commentary": "AAS e cálcio (A): seria a conduta se a gestação estivesse dentro da janela de início.\n\nAAS isolado (B): mesmo problema de época de início.\n\nAAS e enoxaparina (C): a enoxaparina não previne pré-eclâmpsia.",
    "reference": "Febrasgo/RBEHG — Prevenção da pré-eclâmpsia / ACOG Committee Opinion 743",
    "tags": [
      "obstetrícia",
      "pré-eclâmpsia",
      "ácido acetilsalicílico",
      "gestação gemelar"
    ],
    "alert": "Gabarito discutível: a ACOG admite iniciar o AAS até 28 semanas (idealmente antes de 16). O gabarito segue a janela das diretrizes brasileiras e considera que, com 24 semanas, não se deve prescrever."
  },
  {
    "id": "susba2025-21",
    "topography": "5.1",
    "topic": "Câncer de ovário",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma paciente de 18 anos de idade comparece ao serviço médico com queixa de dor abdominal baixa e aumento de volume abdominal. Durante a avaliação, foi realizada uma ultrassonografia pélvica, que revelou a presença de uma massa ovariana de, aproximadamente, 8cm. O médico suspeita de um teratoma imaturo.\n\nEm relação ao prognóstico do teratoma imaturo, é correto afirmar:",
    "options": [
      "(A) O teratoma imaturo é benigno, independentemente do grau de diferenciação.",
      "(B) A recorrência é rara após o tratamento inicial.",
      "(C) O tratamento cirúrgico não é necessário, pois a observação é suficiente.",
      "(D) O prognóstico é geralmente bom, mas depende das características histológicas."
    ],
    "correctAnswer": 3,
    "explanation": "O prognóstico do teratoma imaturo é bom, sobretudo nos estádios iniciais, mas depende do grau histológico (quantidade de neuroepitélio imaturo, graus 1 a 3) e do estádio. Tumores grau 1 em estádio IA podem ser só operados; os de grau mais alto recebem quimioterapia (BEP) com boas taxas de cura.",
    "commentary": "Sempre benigno (A): é tumor maligno; o maduro (cisto dermoide) é que é benigno.\n\nRecorrência rara (B): a recorrência existe, sobretudo nos de alto grau.\n\nObservação suficiente (C): o tratamento cirúrgico é obrigatório.",
    "reference": "Febrasgo — Tumores de células germinativas do ovário",
    "tags": [
      "ginecologia",
      "tumores de ovário",
      "teratoma imaturo",
      "prognóstico"
    ]
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
    "id": "famema2026-82",
    "topography": "13",
    "topic": "Dependência química",
    "module": "Clínica Médica",
    "text": "Assinale a alternativa que indica corretamente os sinais e sintomas clínicos que podem ser observados para respaldar, durante a avaliação emergencial de um caso, a hipótese de suspeita de intoxicação ou overdose por cocaína.",
    "options": [
      "Bradicardia e hipotensão arterial.",
      "Midríase ou irritabilidade.",
      "Mutismo e estereotipias dos membros superiores.",
      "Tremores grosseiros com roda denteada e alucinações visuais com pequenos animais."
    ],
    "correctAnswer": 1,
    "explanation": "A cocaína bloqueia a recaptação de noradrenalina, dopamina e serotonina, causando síndrome simpatomimética: midríase, taquicardia, hipertensão, hipertermia, sudorese, agitação, irritabilidade, ansiedade, paranoia e, nos casos graves, convulsões, arritmias, infarto e AVC. Midríase e irritabilidade são sinais que apoiam a suspeita.\n\nNo tratamento, benzodiazepínicos controlam a agitação e a hiperatividade simpática; betabloqueador isolado deve ser evitado.",
    "commentary": "Bradicardia e hipotensão (A): são sinais de intoxicação por depressores (opioides, sedativos, betabloqueadores), o oposto do quadro simpatomimético.\n\nMutismo e estereotipias (C): sugerem catatonia ou outros transtornos psiquiátricos.\n\nTremores com roda denteada e alucinações com pequenos animais (D): roda denteada sugere parkinsonismo (inclusive por antipsicótico); alucinações com pequenos animais são típicas do delirium tremens.",
    "tip": "Cocaína = simpatomimético: midríase, taquicardia, hipertensão, hipertermia, agitação. Tratar agitação com benzodiazepínico.",
    "reference": "Nelson LS et al. Goldfrank's Toxicologic Emergencies, 11ª ed. Associação Brasileira de Psiquiatria. Diretrizes de abuso e dependência de cocaína, 2012.",
    "tags": [
      "intoxicação por cocaína",
      "síndrome simpatomimética",
      "dependência química"
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
    "id": "amp2026-76",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Caso Clinico: Homem de 25 anos, chega ao Pronto Atendimento após sofrer colisão automobilística frontal. O exame físico apresenta PA 120/80 mmHg, dor em hipocôndrio direito. FAST será realizado. Assinale a alternativa correta.",
    "options": [
      "Avaliar pericárdio, estômago, retroperitônio e pelve.",
      "Avaliar apenas esplenorrenal e pelve para reduzir tempo de exame.",
      "Avaliar apenas o espaço hepatorrenal; demais janelas só se instável.",
      "Avaliar pericárdio e hepatorrenal; demais janelas não são obrigatórias.",
      "Avaliar pericárdio, espaço hepatorrenal, espaço esplenorrenal e fundo de saco pélvico."
    ],
    "correctAnswer": 4,
    "explanation": "O FAST (Focused Assessment with Sonography for Trauma) avalia quatro janelas para líquido livre: pericárdica (subxifoide), hepatorrenal (espaço de Morison), esplenorrenal e pélvica (fundo de saco). O FAST estendido (e-FAST) acrescenta as janelas torácicas para pneumotórax e hemotórax.",
    "commentary": "Pericárdio, estômago, retroperitônio e pelve (A): o FAST não avalia estômago nem retroperitônio, que é mal visto pelo ultrassom.\n\nApenas esplenorrenal e pelve (B), apenas hepatorrenal (C) ou pericárdio e hepatorrenal (D): o exame completo inclui sempre as quatro janelas.",
    "reference": "ATLS — 11ª edição: Trauma abdominal e pélvico",
    "tags": [
      "FAST",
      "trauma abdominal",
      "ultrassonografia no trauma"
    ],
    "tip": "FAST: pericárdio, hepatorrenal, esplenorrenal e pelve. e-FAST: + tórax."
  },
  {
    "id": "amrigs2025-74",
    "module": "Pediatria",
    "text": "Escolar, 6 anos, há 2 dias com dor abdominal difusa, há 1 dia com náuseas e vômitos e há 12h com febre e piora da dor, associadas à diarreia aguda, sem restos patológicos. Após ultrassonografia (US) abdominal, é encaminhado para apendicectomia de urgência. No transoperatório, evidencia-se secreção purulenta em cavidade abdominal. Considerando a situação clínica apresentada, é correto afirmar que:",
    "options": [
      "A clínica é mais sugestiva de diarreia viral com adenite mesentérica.",
      "A US abdominal é o exame de escolha para diagnosticar apendicite.",
      "Trata-se de um caso de apendicite aguda complicada.",
      "O início dos sintomas com dor abdominal é uma manifestação infrequente na apendicite."
    ],
    "correctAnswer": 2,
    "explanation": "Dor abdominal seguida de náuseas e vômitos e, depois, febre, com evolução de 2 dias e secreção purulenta na cavidade, caracteriza apendicite aguda complicada (perfurada, com peritonite). Em crianças, o diagnóstico costuma ser mais tardio, e a perfuração, mais frequente.",
    "commentary": "Diarreia viral com adenite mesentérica (A): o achado de pus na cirurgia confirma processo bacteriano complicado.\n\nUltrassom como exame de escolha (B): o diagnóstico é essencialmente clínico; o ultrassom é o exame de imagem preferido em crianças quando há dúvida, mas não é o \"exame de escolha para diagnosticar\" em todos os casos — e ele não confirma a complicação.\n\nDor como manifestação infrequente (D): a dor abdominal é o primeiro sintoma da apendicite na grande maioria dos casos.",
    "reference": "SBP — Abdome agudo na criança / WSES Jerusalem guidelines (2020)",
    "tags": [
      "apendicite aguda",
      "apendicite complicada",
      "abdome agudo",
      "pediatria"
    ],
    "tip": "Na apendicite, a dor vem antes dos vômitos e da febre."
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
    "id": "cerman2025-74",
    "module": "Pediatria",
    "text": "Eduardo tem três anos e há 10 dias apresenta febre alta. Ao exame físico, apresenta edema palpebral bilateral, petéquias no palato, exsudato amigdaliano, adenomegalia cervical anterior e posterior, fígado palpável a 4cm do rebordo costal direito e baço a 5cm do rebordo costa esquerdo. Qual exame mais indicado para confirmação do diagnóstico neste momento?",
    "options": [
      "(A) Sorologia para dengue.",
      "(B) Sorologia para Epstein-Barr vírus.",
      "(C) Aspirado e cultura de medula óssea.",
      "(D) Teste rápido para pesquisa de estreptococo do grupo A."
    ],
    "correctAnswer": 1,
    "explanation": "Febre prolongada com faringoamigdalite exsudativa, petéquias no palato, linfonodomegalia cervical anterior e posterior, edema palpebral (sinal de Hoagland), hepatomegalia e esplenomegalia: mononucleose infecciosa pelo vírus Epstein-Barr.\n\nEm crianças pequenas o teste de anticorpos heterófilos (Paul-Bunnell, monoteste) é frequentemente negativo; a sorologia específica para EBV (IgM anti-VCA) confirma o diagnóstico.",
    "commentary": "Sorologia para dengue (A): dengue não causa amigdalite exsudativa nem linfonodomegalia cervical posterior.\n\nAspirado de medula (C): seria indicado na suspeita de leucemia (citopenias, blastos); o quadro é típico de mononucleose.\n\nTeste rápido para estreptococo (D): a faringite estreptocócica não causa hepatoesplenomegalia nem adenomegalia cervical posterior.",
    "reference": "Red Book (AAP), 2024 — Epstein-Barr Virus Infections / Nelson Textbook of Pediatrics, 21ª ed.",
    "tags": [
      "mononucleose infecciosa",
      "vírus Epstein-Barr",
      "sorologia",
      "hepatoesplenomegalia"
    ]
  }
];
