// Arquivo gerado por `npm run gen` a partir do banco de questões. Não editar à mão.
// O build e o servidor local regeneram este arquivo sozinhos; o `npm run validate` acusa se ficar desatualizado.
import type { Question } from '../types';

export const TOTAL_QUESTIONS = 2614;

export const COUNT_BY_AREA: Record<string, number> = {
  "Pediatria": 493,
  "Clínica Médica": 532,
  "Cirurgia": 470,
  "Ginecologia e Obstetrícia": 486,
  "Saúde Coletiva": 473,
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
  "Clínica Médica|CERMAN": 20,
  "Cirurgia|CERMAN": 20,
  "Ginecologia e Obstetrícia|CERMAN": 21,
  "Pediatria|CERMAN": 21,
  "Saúde Coletiva|CERMAN": 18
};

/** Questões por especialidade ou região da topografia ("1.1", "8"). */
export const TOPOGRAPHY_COUNT: Record<string, number> = {
  "8": 69,
  "9": 64,
  "10": 107,
  "11": 250,
  "12": 21,
  "13": 50,
  "14": 108,
  "15": 384,
  "16": 150,
  "1.2": 15,
  "1.3": 24,
  "7.2": 39,
  "4.2": 26,
  "1.1": 73,
  "1.5": 29,
  "6.1": 43,
  "3.1": 86,
  "4.1": 73,
  "2.1": 89,
  "6.2": 21,
  "2.2": 93,
  "3.2": 27,
  "3.3": 28,
  "7.1": 26,
  "1.4": 3,
  "3.4": 18,
  "5.1": 186,
  "5.2": 225
};

/** Questões por assunto, na chave "1.1|Cefaleias". */
export const TOPIC_COUNT: Record<string, number> = {
  "11|Puericultura": 29,
  "1.2|Catarata": 5,
  "11|Icterícia neonatal": 10,
  "11|Obesidade infantil": 9,
  "1.3|Amigdalite/faringoamigdalite": 12,
  "7.2|Urticária": 1,
  "1.2|Uveíte": 2,
  "4.2|Estenose de uretra": 2,
  "11|Calendário vacinal": 13,
  "1.1|TCE": 12,
  "11|Maus-tratos infantis": 15,
  "11|Prematuridade": 3,
  "11|Anemia ferropriva": 14,
  "9|Trombocitopenias": 5,
  "11|Aleitamento materno": 21,
  "1.5|Hipotireoidismo": 8,
  "11|Síndrome do desconforto respiratório neonatal": 8,
  "14|Emergências pediátricas": 13,
  "6.1|Artrite reumatoide": 7,
  "9|Talassemias": 2,
  "11|ITU pediátrica": 7,
  "11|Diarreia aguda": 8,
  "14|Trauma": 37,
  "11|Cardiopatias congênitas": 20,
  "3.1|Constipação intestinal": 6,
  "10|Raiva": 6,
  "1.1|Cefaleias": 9,
  "1.3|Surdez": 2,
  "11|Desenvolvimento neuropsicomotor": 17,
  "9|Anemia falciforme": 7,
  "11|Asma infantil": 17,
  "11|Doença de Kawasaki": 2,
  "1.5|Hipertireoidismo": 10,
  "11|Desidratação": 10,
  "11|Sepse neonatal": 7,
  "9|Leucemias": 9,
  "1.3|Otite média aguda": 2,
  "11|Convulsão febril": 5,
  "11|Pneumonia infantil": 9,
  "11|Refluxo gastroesofágico": 2,
  "11|Bronquiolite": 10,
  "11|Desnutrição": 3,
  "10|Sífilis": 18,
  "4.1|Síndrome nefrítica": 3,
  "2.1|Bronquiectasias": 2,
  "8|Insuficiência adrenal": 6,
  "6.2|Escoliose": 2,
  "14|Intoxicações": 13,
  "15|Ética médica": 16,
  "4.1|Síndrome nefrótica": 8,
  "1.3|Laringite": 3,
  "7.2|Dermatite atópica": 4,
  "14|Sepse e choque séptico": 11,
  "8|Síndrome de Cushing": 3,
  "4.2|Torção testicular": 5,
  "2.2|Arritmias": 7,
  "9|Anemias": 2,
  "10|Tétano": 1,
  "8|Feocromocitoma": 2,
  "9|Linfomas": 3,
  "8|Cetoacidose diabética": 15,
  "3.1|Diarreia crônica": 3,
  "1.2|Erros refrativos": 1,
  "10|Dengue": 15,
  "4.1|Distúrbios hidroeletrolíticos": 10,
  "4.1|Lesão renal aguda": 12,
  "8|Diabetes mellitus tipo 1 e 2": 25,
  "1.1|Demências": 7,
  "6.1|Lúpus eritematoso sistêmico": 8,
  "1.1|Epilepsia": 7,
  "10|Tuberculose": 23,
  "2.1|DPOC": 20,
  "9|Anemia ferropriva": 6,
  "3.2|Hepatites virais": 5,
  "2.2|Dislipidemia": 8,
  "2.2|Insuficiência cardíaca": 12,
  "2.2|Hipertensão arterial sistêmica": 22,
  "4.1|Cistite": 6,
  "13|Dependência química": 6,
  "3.1|DRGE": 11,
  "2.1|Asma": 10,
  "2.1|Pneumonia comunitária": 16,
  "13|Abstinência alcoólica": 6,
  "6.1|Osteoartrose": 2,
  "2.1|Tuberculose pulmonar": 1,
  "7.2|Herpes-zóster": 2,
  "1.1|AVC": 19,
  "7.2|Erisipela": 2,
  "7.2|Melanoma": 4,
  "4.1|Nefrolitíase": 8,
  "2.2|Valvopatias": 5,
  "6.1|Fibromialgia": 3,
  "2.2|Infarto agudo do miocárdio": 8,
  "2.1|Embolia pulmonar": 7,
  "2.1|Câncer de pulmão": 6,
  "4.1|Pielonefrite": 6,
  "4.1|Doença renal crônica": 8,
  "3.1|Doença inflamatória intestinal": 12,
  "3.1|Doença celíaca": 2,
  "3.2|Cirrose hepática": 3,
  "1.1|Meningite": 10,
  "1.1|Parkinson": 3,
  "9|Anemia hemolítica": 3,
  "3.2|Encefalopatia hepática": 2,
  "13|Esquizofrenia": 6,
  "6.1|Gota": 4,
  "7.2|Hanseníase": 8,
  "7.2|Escabiose": 6,
  "2.2|Síndrome coronariana aguda": 10,
  "4.1|Glomerulonefrite": 3,
  "10|HIV/AIDS": 9,
  "12|Delirium": 5,
  "3.1|Gastrite": 3,
  "9|Síndrome de lise tumoral": 1,
  "2.1|Insuficiência respiratória": 1,
  "10|Sepse": 5,
  "6.1|Osteoporose": 7,
  "7.2|Carcinoma basocelular": 3,
  "9|Anemia megaloblástica": 10,
  "2.1|Derrame pleural": 14,
  "13|Transtornos de ansiedade": 5,
  "1.5|Tempestade tireotóxica": 1,
  "12|Demências": 1,
  "13|Depressão maior": 7,
  "8|Hiperaldosteronismo primário": 3,
  "16|Feridas": 17,
  "16|Pré-operatório": 17,
  "16|Hérnias": 19,
  "3.3|Colangite aguda": 4,
  "3.1|Hemorragia digestiva baixa": 4,
  "7.1|Doença arterial periférica": 5,
  "6.2|Fraturas": 5,
  "1.1|Hipertensão intracraniana": 3,
  "14|Queimaduras": 11,
  "1.3|Câncer de cabeça e pescoço": 2,
  "1.2|Ceratite": 3,
  "14|Choque": 6,
  "16|Trauma abdominal": 12,
  "6.2|Hérnia de disco": 3,
  "16|Obstrução intestinal": 18,
  "7.1|Trombose venosa profunda": 9,
  "4.2|Câncer de próstata": 6,
  "3.1|Hemorragia digestiva alta": 10,
  "3.1|Doença hemorroidária": 5,
  "7.1|Aneurisma de aorta abdominal": 4,
  "3.2|Hepatocarcinoma": 6,
  "10|Doença de Chagas": 3,
  "1.4|Doença periodontal": 1,
  "3.3|Colecistite aguda": 4,
  "16|Trauma torácico": 18,
  "16|Apendicite aguda": 10,
  "16|Perfuração de víscera oca": 7,
  "3.3|Colangiocarcinoma": 3,
  "3.4|Pancreatite aguda": 9,
  "3.1|Câncer colorretal": 11,
  "8|Obesidade": 10,
  "7.1|Isquemia arterial aguda": 3,
  "7.2|Celulite": 2,
  "16|Pós-operatório": 20,
  "7.1|Insuficiência venosa crônica": 3,
  "6.2|Lesões do manguito rotador": 1,
  "16|Isquemia mesentérica": 4,
  "1.5|Nódulos tireoidianos": 3,
  "16|Abdome agudo": 5,
  "6.2|Lombalgia": 4,
  "7.2|Carcinoma espinocelular": 2,
  "6.2|Luxações": 1,
  "3.3|Colelitíase": 8,
  "5.1|Sangramento uterino anormal": 16,
  "5.1|Climatério e menopausa": 22,
  "5.1|Contracepção": 29,
  "5.1|Câncer de colo uterino": 28,
  "5.1|Vaginose bacteriana": 7,
  "5.2|Diabetes gestacional": 21,
  "5.2|Assistência ao parto": 11,
  "5.2|Puerpério": 14,
  "5.2|Infecções na gestação": 27,
  "5.2|Rotura prematura de membranas": 7,
  "15|Rastreamento": 22,
  "5.1|Câncer de endométrio": 9,
  "5.2|Gravidez ectópica": 10,
  "5.2|Diagnóstico de gravidez": 1,
  "5.2|Pré-natal": 35,
  "5.2|Hemorragia pós-parto": 9,
  "5.2|Trabalho de parto": 23,
  "5.1|Mioma uterino": 10,
  "5.1|Endometriose": 11,
  "5.1|Infertilidade": 9,
  "5.1|Prolapso genital": 7,
  "5.1|Câncer de ovário": 7,
  "15|Saúde da mulher": 8,
  "5.2|Pré-eclâmpsia": 17,
  "5.2|Abortamento": 18,
  "5.1|Síndrome dos ovários policísticos": 6,
  "5.1|Doença inflamatória pélvica": 7,
  "5.1|Candidíase vaginal": 3,
  "5.2|Eclâmpsia": 1,
  "5.2|Descolamento prematuro de placenta": 10,
  "5.2|Isoimunização Rh": 4,
  "5.1|Tricomoníase": 3,
  "5.2|Síndrome HELLP": 1,
  "5.1|Planejamento reprodutivo": 4,
  "8|Prolactinoma": 2,
  "10|Infecções sexualmente transmissíveis": 9,
  "15|Bioética": 7,
  "5.2|Idade gestacional": 5,
  "4.2|Incontinência urinária": 7,
  "5.2|Placenta prévia": 5,
  "15|Atenção Primária": 74,
  "15|Saúde do idoso": 6,
  "15|SUS": 54,
  "12|Polifarmácia": 2,
  "15|Imunização": 24,
  "15|Saúde do trabalhador": 20,
  "15|Estudos epidemiológicos": 32,
  "15|Epidemiologia": 41,
  "15|Vigilância epidemiológica": 29,
  "15|Testes diagnósticos": 22,
  "15|Estratégia Saúde da Família": 14,
  "12|Quedas": 3,
  "13|Risco de suicídio": 7,
  "13|Transtorno bipolar": 3,
  "10|Infecções relacionadas à assistência": 3,
  "15|Saúde da criança": 4,
  "2.2|Doença arterial coronariana crônica": 5,
  "3.2|Hipertensão portal": 3,
  "3.2|Icterícia": 1,
  "2.2|Febre reumática": 3,
  "4.1|Distúrbios ácido-base": 7,
  "14|Anafilaxia": 5,
  "10|Malária": 4,
  "9|Coagulopatias": 7,
  "4.2|Hiperplasia prostática benigna": 2,
  "2.1|Fibrose pulmonar": 2,
  "6.1|Artrite séptica": 2,
  "15|Bioestatística": 7,
  "3.2|Ascite": 3,
  "14|Crise hipertensiva": 1,
  "7.2|Dermatite de contato": 1,
  "1.1|Esclerose múltipla": 2,
  "3.1|Úlcera péptica": 4,
  "9|Neutropenia febril": 4,
  "13|Transtornos alimentares": 5,
  "4.2|Fimose": 1,
  "3.4|Câncer de pâncreas": 3,
  "3.4|Pancreatite crônica": 5,
  "3.1|Diverticulose/diverticulite": 7,
  "6.1|Espondilite anquilosante": 4,
  "3.2|Colestase": 1,
  "1.5|Tireoidites": 1,
  "13|TOC": 1,
  "3.1|Fissura anal": 2,
  "6.1|Vasculites": 3,
  "3.3|Coledocolitíase": 6,
  "14|Emergências obstétricas": 4,
  "13|Transtornos de personalidade": 1,
  "2.2|Fibrilação atrial": 6,
  "6.2|Síndrome da cauda equina": 1,
  "7.2|Impetigo": 2,
  "3.2|Peritonite bacteriana espontânea": 2,
  "7.1|Dissecção de aorta": 2,
  "4.2|Câncer de bexiga": 1,
  "4.2|Retenção urinária": 2,
  "1.3|Vertigem": 2,
  "6.2|Lesão do ligamento cruzado anterior": 1,
  "8|Distúrbios do cálcio": 2,
  "14|Parada cardiorrespiratória": 6,
  "4.1|Nefropatia diabética": 2,
  "2.2|Choque cardiogênico": 1,
  "12|Cuidados paliativos": 8,
  "10|Toxoplasmose": 3,
  "1.5|Câncer de tireoide": 3,
  "2.2|Endocardite infecciosa": 5,
  "2.1|Tabagismo": 5,
  "1.5|Hiperparatireoidismo": 3,
  "3.3|Câncer de vesícula": 3,
  "3.1|Diarreia aguda": 1,
  "5.2|Restrição de crescimento fetal": 6,
  "11|Púrpura de Henoch-Schönlein": 2,
  "5.1|Adenomiose": 2,
  "7.2|Pênfigo e penfigoide": 1,
  "1.4|Câncer de boca": 1,
  "2.1|Pneumonia hospitalar": 1,
  "6.1|Esclerose sistêmica": 2,
  "10|Meningococcemia": 3,
  "6.2|Pé diabético": 3,
  "1.2|Perda visual súbita": 1,
  "11|Alimentação complementar": 4,
  "10|Febre amarela": 1,
  "9|Transfusão sanguínea": 2,
  "7.2|Psoríase": 1,
  "1.2|Retinopatia diabética": 1,
  "8|Hipoglicemia": 1,
  "2.1|Pneumotórax": 2,
  "1.3|Sinusite/rinossinusite": 1,
  "16|Nutrição cirúrgica": 2,
  "10|Leptospirose": 1,
  "1.4|Herpes simples": 1,
  "10|Chikungunya": 2,
  "1.2|Conjuntivite": 2,
  "6.1|Bursites e tendinopatias": 1,
  "10|Endocardite": 1,
  "2.1|Apneia do sono": 1,
  "2.1|SDRA": 1,
  "14|Insuficiência respiratória": 1,
  "12|Síndrome da fragilidade": 2
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
    "warning": "O gabarito deste simulado é técnico, não oficial: nenhuma banca publicou respostas para estas questões. As questões com gabarito provisório têm um aviso no comentário.",
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
    "id": "tp2022-52",
    "topography": "9",
    "topic": "Leucemias",
    "module": "Pediatria",
    "text": "Menino de 7 anos com febre prolongada, dor articular, hematomas, hepatoesplenomegalia e linfadenopatia. Hemograma: Pancitopenia com 13% de células atípicas. Diagnóstico e conduta:",
    "options": [
      "(A) Mononucleose; sorologias e observação domiciliar.",
      "(B) Leishmaniose visceral; Anfotericina B.",
      "(C) Leucemia aguda; internação em isolamento e mielograma.",
      "(D) Púrpura (PTI); transfusão de plaquetas imediata."
    ],
    "correctAnswer": 2,
    "explanation": "Criança com febre, dor articular que atrapalha a marcha, emagrecimento, palidez, petéquias e hematomas, hepatoesplenomegalia e linfonodos aumentados, com pancitopenia (anemia, plaquetas 15.000, leucopenia com neutropenia grave) e células atípicas no sangue: o comprometimento de mais de uma série com células imaturas é muito sugestivo de leucemia aguda, sendo a leucemia linfoide aguda a mais comum nessa idade.\n\nA conduta é internar com urgência, em isolamento protetor por causa da neutropenia grave, e acionar o hematologista para mielograma, imunofenotipagem e citogenética (cariótipo), que confirmam o diagnóstico, definem o subtipo e o risco.",
    "commentary": "Mononucleose (A): costuma ter leucocitose com linfócitos atípicos e faringite, sem pancitopenia grave. E uma criança com plaquetas de 15.000 e neutropenia não pode ir para casa.\n\nLeishmaniose visceral (B): também causa febre, pancitopenia e hepatoesplenomegalia, mas a esplenomegalia costuma ser volumosa, não explica a dor articular e as células atípicas, e a confirmação etiológica vem antes do tratamento.\n\nPTI (D): na PTI só as plaquetas estão baixas, sem anemia, neutropenia, organomegalias ou células atípicas; e transfusão de plaquetas não é conduta de rotina nela.",
    "tip": "Dor óssea ou articular + organomegalias + duas ou mais séries alteradas no hemograma = leucemia aguda até prova em contrário.",
    "reference": "Protocolo de Diagnóstico Precoce do Câncer Pediátrico - MS 2017.",
    "tags": [
      "hematologia",
      "oncologia"
    ]
  },
  {
    "id": "tp2019-58",
    "topography": "8",
    "topic": "Cetoacidose diabética",
    "module": "Pediatria",
    "text": "Menino, 5 anos, chega ao Pronto-Socorro com história de vômitos, perda de peso, polidipsia e poliúria. Exame físico: mucosas secas, turgor semipastoso, taquidispneico e torporoso. Exames laboratoriais: glicemia = 620 mg/dL; gasometria – pH: 7,08, HCO3: 4,0 mEq/L, BE: –20; Na: 135 mEq/L; K = 3,5 mEq/L; urina 1 – cetonúria +++.\n\nA primeira conduta é:",
    "options": [
      "(A) Reposição de potássio.",
      "(B) Insulina rápida ou ultra-rápida.",
      "(C) Manitol e hiperventilação.",
      "(D) Hidratação com solução isotônica."
    ],
    "correctAnswer": 3,
    "explanation": "Cetoacidose diabética (glicemia 620, pH 7,08, bicarbonato 4, cetonúria) na abertura do diabetes tipo 1, com desidratação.\n\nA primeira medida é a hidratação com solução isotônica (soro fisiológico 0,9%). A insulina é iniciada depois da expansão inicial (em geral 1–2 horas), e o potássio é reposto conforme o nível sérico.",
    "commentary": "Insulina antes da hidratação aumenta o risco de choque e de hipocalemia. A reposição de potássio é feita junto com a insulina. Manitol é para edema cerebral estabelecido.",
    "reference": "Wolfsdorf JI, Allgrove J, Craig ME, Edge J, Glaser N, Jain V, Lee WW, Mungai LN, Rosenbloom AL, Sperling MA, Hanas R; International Society for Pediatric and Adolescent Diabetes. ISPAD Clinical Practice Consensus Guidelines 2014. Diabetic ketoacidosis and hyperglycemic hyperosmolar state. Pediatr Diabetes. 2014;15 Suppl 20:154-79",
    "tags": [
      "pediatria",
      "endocrinologia",
      "cetoacidose diabética"
    ]
  },
  {
    "id": "tp2025-35",
    "topography": "3.2",
    "topic": "Cirrose hepática",
    "module": "Clínica Médica",
    "text": "Homem de 48 anos procura ambulatório por fadiga persistente e desconforto abdominal progressivo há dois anos. Antecedente de hepatite B diagnosticada há 10 anos, usando antiviral irregularmente. Ao exame físico, discretamente ictérico, com telangectasias cutâneas e esplenomegalia palpável. Exames laboratoriais: elevação de transaminases, hipoalbuminemia e trombocitopenia. O quadro clínico sugere:",
    "options": [
      "(A) Reativação de replicação viral, sem dano hepático significativo.",
      "(B) Hepatopatia crônica viral com cirrose compensada.",
      "(C) Transformação neoplásica com sinais de alarme.",
      "(D) Cirrose grave com iminência de insuficiência hepática aguda."
    ],
    "correctAnswer": 1,
    "explanation": "A evolução de hepatite B crônica com sinais de hipertensão portal (esplenomegalia descrita) associados a hipoalbuminemia, transaminases elevadas e plaquetopenia sugere cirrose compensada.",
    "commentary": "Os achados do exame físico (telangiectasias, esplenomegalia) e do laboratório (plaquetopenia, hipoalbuminemia e transaminases alteradas) traduzem evolução crônica para cirrose com hipertensão portal já estabelecida. Como o paciente não apresenta ascite rebelde, encefalopatia de repetição ou sangramentos, classifica-se em cirrose compensada neste momento.",
    "reference": "HARRISON'S Principles of Internal Medicine. 21. ed. McGraw-Hill. Sociedade Brasileira de Hepatologia, 2019.",
    "tags": [
      "hepatologia",
      "infectologia"
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
    "id": "tp2022-66",
    "topography": "1.1",
    "topic": "TCE",
    "module": "Cirurgia",
    "text": "Vítima de trauma, AO paradoxal à dor (2), RM inespecífica à dor (4), sem resposta verbal (1). PA 90/60, FC 68, pele aquecida. Qual o Glasgow e conduta?",
    "options": [
      "(A) ECG 9; reposição volêmica agressiva.",
      "(B) ECG 7; intubação orotraqueal.",
      "(C) ECG 5; Ringer Lactato agressivo.",
      "(D) ECG 9; intubação orotraqueal."
    ],
    "correctAnswer": 1,
    "explanation": "Pela Escala de Coma de Glasgow: abertura ocular apenas à dor = 2; retirada inespecífica do membro ao estímulo doloroso (flexão normal, sem localizar) = 4; nenhum som = 1. Total: 7. Com Glasgow de 8 ou menos, o paciente não protege a via aérea, e a conduta é a intubação orotraqueal (via aérea definitiva), com proteção da coluna cervical.\n\nHá também PA baixa sem taquicardia e pele aquecida, sem vasoconstrição, num trauma de alta energia. Esse padrão sugere choque neurogênico por lesão medular (perda do tônus simpático), e não choque hemorrágico, que daria taquicardia e pele fria. Por isso não se indica reposição volêmica agressiva; ainda assim, sangramento deve ser sempre pesquisado.",
    "commentary": "Glasgow 9 e volume agressivo (A): a soma está errada (é 7) e o padrão hemodinâmico não é de hemorragia; o problema imediato é a via aérea.\n\nGlasgow 5 e Ringer agressivo (C): a pontuação está subestimada e a conduta prioriza volume quando o primeiro passo é garantir a via aérea.\n\nGlasgow 9 e intubação (D): a conduta seria aceitável, mas a pontuação está errada; com 9 pontos a intubação não seria automática.",
    "tip": "Glasgow ≤8 = intubar. Hipotensão sem taquicardia e com pele quente no trauma = pense em choque neurogênico.",
    "reference": "ATLS 10ª Edição.",
    "tags": [
      "trauma",
      "neurocirurgia"
    ]
  },
  {
    "id": "tp2026-69",
    "topography": "7.2",
    "topic": "Celulite",
    "module": "Cirurgia",
    "text": "Homem de 40 anos apresenta tumefação dolorosa em coxa há 7 dias, com aumento progressivo, flutuação e eritema. Após tentativa prévia de antibioticoterapia e sem drenagem da lesão, houve piora do quadro. Considerando a fisiopatologia do abscesso, qual mecanismo explica a falha do tratamento clínico isolado?",
    "options": [
      "(A) Formação de cavidade encapsulada com baixa penetração de antibióticos e alta carga bacteriana.",
      "(B) Redução da perfusão tecidual local por vasoconstrição reflexa.",
      "(C) Produção bacteriana de toxinas que inativam diretamente antibióticos sistêmicos.",
      "(D) Formação de biofilme bacteriano, impedindo resposta inflamatória local."
    ],
    "correctAnswer": 0,
    "explanation": "O abscesso estabelece uma cavidade encapsulada espessa contendo pus e detritos necróticos, criando uma barreira física com baixa perfusão interna. Isso impede que os antibióticos sistêmicos atinjam concentrações terapêuticas eficazes no local infectado, exigindo drenagem cirúrgica.",
    "commentary": "O abscesso cutâneo ou muscular profundo forma uma coleção purulenta envolta por uma pseudocápsula de fibrina e tecido colágeno inflamatório. Essa barreira vascularizada externamente mas avascular internamente cria um ambiente com baixíssima perfusão central, pH ácido e altíssima carga bacteriana ativa e dormente. Como resultado, os antibióticos circulantes não penetram no interior do abscesso em quantidade suficiente, o que dita o antigo aforismo cirúrgico: \"ubi pus, ibi evacua\" (onde há pus, esvazie/drene). Sobre os distratores: (B, C, D) Embora vasoconstrição tecidual periférica, toxinas bacterianas e biofilmes bacterianos desempenhem papéis em infecções, a barreira mecânica e biológica da cápsula do abscesso é o fator fisiopatológico primário reconhecido na falha da terapia medicamentosa isolada.",
    "reference": "Stevens DL et al. Practice Guidelines for Skin and Soft Tissue Infections. Clin Infect Dis. 2014. Miller JM et al. Guide to Microbiology Laboratory Utilization. Clin Infect Dis. 2024. Seidelman JL et al. Surgical Site Infection Prevention. JAMA. 2023.",
    "tags": [
      "abscesso",
      "fisiopatologia",
      "infecção"
    ]
  },
  {
    "id": "tp2024-94",
    "topography": "5.2",
    "topic": "Rotura prematura de membranas",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante, 30 semanas, com perda de líquido abrupta pela vagina há 4 horas. Afebril e normotensa, tônus uterino normal, frequência cardíaca fetal de 160 bpm. Ao exame especular, saída de líquido claro pelo colo, com odor de \"água sanitária\". Qual a conduta correta?",
    "options": [
      "(A) Corioamnionite; induzir parto imediatamente.",
      "(B) Iniciar tocólise imediatamente.",
      "(C) Cardiotocografia não tem valor antes de 32 semanas.",
      "(D) Administrar corticosteroides (betametasona ou dexametasona)."
    ],
    "correctAnswer": 3,
    "explanation": "Saída de líquido claro pelo colo, com o odor característico do líquido amniótico, confirma a rotura prematura das membranas ovulares (antes do trabalho de parto), aqui com 30 semanas. Não há febre, dor uterina nem líquido purulento, ou seja, nada que indique infecção, e não há quadro de trabalho de parto.\n\nNessa idade gestacional a conduta é expectante, com internação, e o corticoide para maturação pulmonar fetal é obrigatório entre 24 e 34 semanas: betametasona 12 mg IM, duas doses com 24 horas de intervalo, ou dexametasona 6 mg IM de 12 em 12 horas, quatro doses. Somam-se antibiótico de latência, vigilância de sinais de infecção e avaliação do bem-estar fetal.",
    "commentary": "Corioamnionite (A): exigiria sinais como febre, útero doloroso, líquido purulento ou fétido e taquicardia materna e fetal; a paciente está afebril, com tônus normal e líquido claro.\n\nTocólise imediata (B): não há diagnóstico de trabalho de parto (contrações regulares com modificação do colo); além disso, a tocólise não é rotina na rotura de membranas.\n\nCardiotocografia sem valor (C): o exame tem utilidade nessa idade gestacional, apenas com critérios de aceleração menores antes de 32 semanas; é importante para notar taquicardia fetal e perda de variabilidade, que podem ser os primeiros sinais de infecção.",
    "tip": "Rotura prematura de membranas entre 24 e 34 semanas, sem infecção: internar, corticoide, antibiótico de latência e vigiar infecção.",
    "reference": "Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO). Rotura prematura de membranas ovulares. São Paulo: FEBRASGO; 2021 (Protocolo FEBRASGO Obstetrícia, n. 45/ Comissão Nacional Especializada em Assistência Pré-Natal). Souza E, Fava JL, Musiello RB, Camano L. Trabalho de parto prematuro: uso racional da tocólise. São Paulo: Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO); 2018. Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO). Cardiotocografia anteparto. São Paulo: FEBRASGO; 2021. (Protocolo FEBRASGO-Obstetrícia, n. 17/Comissão Nacional Especializada em Medicina Fetal).",
    "tags": [
      "obstetrícia",
      "prematuridade"
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
    "id": "tp2019-81",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante comparece para primeira consulta de pré-natal com 12 semanas de gestação, confirmada por ultrassonografia precoce.\n\nEm relação à avaliação da vitalidade fetal, é correto afirmar que:",
    "options": [
      "(A) Os batimentos cardíacos fetais podem ser auscultados com Sonar.",
      "(B) Os batimentos cardíacos fetais podem ser auscultados com estetoscópio de Pinard.",
      "(C) Nessa idade gestacional, os batimentos cardíacos fetais podem ser identificados somente com ultrassonografia.",
      "(D) Nessa idade gestacional não é possível a ausculta dos batimentos cardíacos fetais."
    ],
    "correctAnswer": 0,
    "explanation": "O sonar Doppler detecta os batimentos cardíacos fetais a partir de cerca de 10–12 semanas. O estetoscópio de Pinard só os capta a partir de aproximadamente 20 semanas.",
    "commentary": "Com 12 semanas não é necessário ultrassom para detectar os batimentos — o sonar já os capta. O Pinard ainda não permite a ausculta nessa idade gestacional.",
    "reference": "Assistência Pré-Natal. In: Zugaib Obstetrícia. Zugaib M & Francisco RPV. 3ª ed. Manole, 2017",
    "tags": [
      "obstetrícia",
      "pré-natal",
      "vitalidade fetal"
    ]
  },
  {
    "id": "tp2023-108",
    "topography": "15",
    "topic": "Epidemiologia",
    "module": "Saúde Coletiva",
    "text": "Qual das seguintes características está associada à fase avançada da transição demográfica epidemiológica?",
    "options": [
      "(A) Baixa prevalência de doenças crônicas não transmissíveis.",
      "(B) Predominância de doenças infecciosas e parasitárias.",
      "(C) Aumento da expectativa de vida.",
      "(D) Alta taxa de mortalidade infantil."
    ],
    "correctAnswer": 0,
    "alsoAccepted": [
      2
    ],
    "explanation": "Gabarito oficial: A. Aqui no DEsimulados, a alternativa C também conta como certa, porque é a que está de acordo com o conceito.\n\nQuando a transição demográfica está avançada, natalidade e mortalidade já caíram, a população envelhece e a expectativa de vida aumenta. A transição epidemiológica acompanha esse processo: as doenças infecciosas e parasitárias perdem peso e passam a predominar as doenças crônicas não transmissíveis (cardiovasculares, câncer, diabetes).\n\nO próprio comentário da banca descreve esse aumento das doenças crônicas, mas conclui marcando a alternativa \"baixa prevalência de doenças crônicas\". Por isso a questão é polêmica: na prova vale a A; no estudo, guarde que a fase avançada traz mais expectativa de vida e mais doenças crônicas.",
    "commentary": "Baixa prevalência de doenças crônicas (A): gabarito oficial, mas contraria o conceito; com o envelhecimento, as doenças crônicas não transmissíveis se tornam as principais causas de adoecimento e morte.\n\nPredomínio de doenças infecciosas e parasitárias (B): caracteriza as fases iniciais da transição.\n\nAlta mortalidade infantil (D): também é típica das fases iniciais; na fase avançada ela cai bastante.",
    "alert": "Gabarito oficial discutível: a banca marcou A, mas o conceito aponta C. As duas contam como certas aqui.",
    "tip": "Transição avançada: população mais velha, expectativa de vida maior e predomínio de doenças crônicas.",
    "reference": "Duarte Elisabeth Carmen, Barreto Sandhi Maria. Transição demográfica e epidemiológica: a Epidemiologia e Serviços de Saúde revisita e atualiza o tema. Epidemiol. Serv. Saúde [Internet]. 2012 Dez [citado 2023 Jun 29] ; 21( 4 ): 529-532. Oliveira AS. TRANSIÇÃO DEMOGRÁFICA, TRANSIÇÃO EPIDEMIOLÓGICA E ENVELHECIMENTO POPULACIONAL NO BRASIL. Hygeia [Internet];15(32):69-7. Goldani MZ, Mosca PRF, Portela AK, Silveira PP, Silva CH da. O impacto da transição demográfico-epidemiológica na saúde da criança e do adolescente do Brasil. Clin Biomed Res [Internet]. 27º de abril de 2012 ;32(1).",
    "tags": [
      "saúde coletiva",
      "demografia"
    ]
  },
  {
    "id": "tp2021-115",
    "topography": "15",
    "topic": "Imunização",
    "module": "Saúde Coletiva",
    "text": "No que diz respeito à Mortalidade Infantil, os impactos do programa nacional de Imunização (PNI) podem ser observados por meio da redução da taxa de mortalidade no período:",
    "options": [
      "(A) Neonatal precoce.",
      "(B) Perinatal.",
      "(C) Pós-neonatal.",
      "(D) Neonatal tardio."
    ],
    "correctAnswer": 2,
    "explanation": "O período pós-neonatal (compreendido entre o 28º dia e o 364º dia completo de vida da criança) é marcadamente influenciado por determinantes sociais e ambientais modificáveis, no qual as infecções imunopreveníveis (coqueluche, meningite, diarreias etc.) têm elevadíssima taxa histórica. Portanto, os impactos do PNI e ampliação de coberturas vacinais reduzem com maior fidedignidade a mortalidade pós-neonatal.",
    "commentary": "A mortalidade infantil fraciona-se em períodos determinantes:\n- Período Perinatal ou Neonatal Precoce (até o 6º dia): depende de forma mais expressiva de amparo de ginecologia-obstetrícia intraparto, genética, prematuridade ao nascimento, pré-natal, etc.\n- Período Pós-Neonatal: reflete as condições básicas sanitárias de vida familiar, oferta nutricional, acesso hospitalar primário e, decisivamente, cobertura vacinal protetiva contra infecções infantis endêmicas.",
    "reference": "Guia de Indicadores de Saúde e IDB, Ministério da Saúde/DATASUS.",
    "tags": [
      "mortalidade infantil",
      "imunização",
      "saúde da criança"
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
    "id": "enamed-2026-65",
    "module": "Clínica Médica",
    "text": "Homem de 30 anos, sem comorbidades prévias, procura Unidade Básica de Saúde devido à lesão pruriginosa em região da panturrilha direita, com 3 semanas de evolução. O exame físico mostra lesão anular de cerca de 3 cm de diâmetro, com bordas eritematosas, elevadas e descamativas, com clareamento central.\n\nQual medicamento deve ser prescrito para o tratamento dessa lesão?",
    "options": [
      "(A) Cefalexina oral.",
      "(B) Clotrimazol tópico.",
      "(C) Hidrocortisona tópica.",
      "(D) Ivermectina oral."
    ],
    "correctAnswer": 1,
    "explanation": "Lesão anular pruriginosa, com borda eritematosa, elevada e descamativa e clareamento central: tinea corporis (dermatofitose).\n\nLesões localizadas são tratadas com antifúngico tópico (azol, como clotrimazol, ou terbinafina) por 2 a 4 semanas.",
    "commentary": "Cefalexina trata infecções bacterianas. Corticoide tópico isolado pode piorar e mascarar a dermatofitose (tinea incógnita). Ivermectina trata escabiose e larva migrans. (Gabarito preliminar do INEP.)",
    "reference": "Sociedade Brasileira de Dermatologia — Dermatofitoses",
    "tags": [
      "dermatologia",
      "micoses superficiais"
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
    "id": "hosbos2027-29",
    "topography": "2.1",
    "topic": "Embolia pulmonar",
    "module": "Clínica Médica",
    "text": "Mulher de 68 anos encontra-se no 22º dia de pós-operatório de artroplastia total de quadril e refere dispneia intensa e súbita. Exame físico: PA: 78 x 50 mmHg, FC: 128 bpm, FR: 32 irpm, saturação de oxigênio de 86% em ar ambiente e turgência jugular. Angiotomografia de tórax: falhas de enchimento em ambas as artérias pulmonares principais, com relação entre os diâmetros do ventrículo direito e do ventrículo esquerdo de 1,3.\n\nA conduta deve ser",
    "options": [
      "(A) Embolectomia cirúrgica.",
      "(B) Anticoagulação plena com heparina de baixo peso molecular.",
      "(C) Anticoagulação oral com rivaroxabana.",
      "(D) Trombólise sistêmica com alteplase associada a heparina não fracionada.",
      "(E) Implante de filtro de veia cava inferior."
    ],
    "correctAnswer": 3,
    "explanation": "Tromboembolismo pulmonar maciço (bilateral, em artérias principais) no pós-operatório de artroplastia, com hipotensão, hipoxemia, turgência jugular e disfunção de VD (relação VD/VE de 1,3): TEP de alto risco.\n\nO tratamento de escolha é a reperfusão por trombólise sistêmica (alteplase 100 mg em 2 h) seguida de heparina não fracionada. A cirurgia há 22 dias é contraindicação relativa, superada pelo risco de morte.",
    "commentary": "Embolectomia cirúrgica (A): reservada a contraindicação absoluta à trombólise ou falha dela.\n\nHBPM isolada (B): conduta do TEP estável; não reperfunde o paciente em choque.\n\nRivaroxabana (C): não é usada na fase instável do TEP de alto risco.\n\nFiltro de veia cava (E): só para contraindicação absoluta à anticoagulação; não trata o êmbolo atual.",
    "reference": "ESC 2019 Guidelines on Acute Pulmonary Embolism / Diretriz da SBPT para TEV",
    "tags": [
      "pneumologia",
      "tromboembolismo pulmonar",
      "trombólise",
      "pós-operatório"
    ]
  },
  {
    "id": "hosbos2025-21",
    "topography": "2.2",
    "topic": "Hipertensão arterial sistêmica",
    "module": "Clínica Médica",
    "text": "Principais efeitos colaterais em relação ao uso de nitroprussiato de sódio são:",
    "options": [
      "(A) náusea e vômitos.",
      "(B) fraqueza e cefaleia.",
      "(C) tosse e rouquidão.",
      "(D) aumento da pressão intraocular e zumbido.",
      "(E) bradicardia e taquicardia."
    ],
    "correctAnswer": 4,
    "explanation": "O nitroprussiato é um vasodilatador arterial e venoso direto, de ação imediata, usado em emergências hipertensivas. A queda brusca da resistência vascular dispara taquicardia reflexa; em pacientes com pouca pré-carga, a queda abrupta do retorno venoso pode provocar bradicardia paradoxal (reflexo de Bezold-Jarisch). A banca escolheu essas alterações de frequência cardíaca como resposta.\n\nOs efeitos mais temidos, porém, são hipotensão excessiva e intoxicação por cianeto/tiocianato em infusões prolongadas, doses altas ou insuficiência renal/hepática.",
    "commentary": "Náusea e vômitos (A): constam nas bulas e nos manuais como efeitos adversos frequentes, em geral ligados à queda rápida da pressão. Por isso a questão é discutível.\n\nFraqueza e cefaleia (B): podem ocorrer com vasodilatadores, mas são inespecíficas.\n\nTosse e rouquidão (C): tosse é efeito típico dos IECA.\n\nPressão intraocular e zumbido (D): o nitroprussiato pode aumentar a pressão INTRACRANIANA; pressão intraocular e zumbido não fazem parte do seu perfil.",
    "reference": "Diretrizes Brasileiras de Hipertensão Arterial (SBC, 2020) — Emergências hipertensivas",
    "tags": [
      "nitroprussiato de sódio",
      "emergência hipertensiva",
      "farmacologia",
      "efeitos adversos"
    ],
    "alert": "Gabarito oficial discutível: náuseas e vômitos (A) também são efeitos adversos descritos do nitroprussiato; a alternativa A também foi aceita aqui.",
    "alsoAccepted": [
      0
    ]
  },
  {
    "id": "hosbos2025-92",
    "topography": "15",
    "topic": "Vigilância epidemiológica",
    "module": "Saúde Coletiva",
    "text": "O conjunto de ações que proporcionam o conhecimento, a detecção ou prevenção de qualquer mudança nos fatores determinantes e condicionantes de saúde individual ou coletiva, com a finalidade de recomendar e adotar as medidas de prevenção e controle das doenças ou agravos, refere-se ao conceito de",
    "options": [
      "(A) Vigilância Epidemiológica.",
      "(B) Promoção da Saúde.",
      "(C) Educação em Saúde.",
      "(D) Planejamento Sanitário.",
      "(E) Atenção Primária à Saúde."
    ],
    "correctAnswer": 0,
    "explanation": "A definição transcrita é a de vigilância epidemiológica pela Lei nº 8.080/1990 (art. 6º, § 2º): conjunto de ações que proporciona o conhecimento, a detecção ou a prevenção de qualquer mudança nos fatores determinantes e condicionantes da saúde individual ou coletiva, para recomendar e adotar medidas de prevenção e controle.",
    "commentary": "Promoção da saúde (B): ações para melhorar as condições de vida e capacitar a comunidade.\n\nEducação em saúde (C): processo pedagógico de construção de conhecimentos.\n\nPlanejamento sanitário (D): processo de gestão para definir prioridades e ações.\n\nAtenção primária (E): nível de atenção, porta de entrada do sistema.",
    "reference": "Lei nº 8.080/1990, art. 6º, § 2º",
    "tags": [
      "vigilância epidemiológica",
      "lei 8.080",
      "conceitos"
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
    "id": "revalida-2025-1-9",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante de 39 anos, G4P3, 12 semanas de gestação, comparece à primeira consulta de pré-natal na atenção primária. A paciente é hipertensa crônica há 2 anos, faz uso de losartana e apresenta índice de massa corporal (IMC) de 35 kg/m², encontra-se assintomática. Considerando esse contexto, assinale a conduta inicial e a avaliação a ser realizada.",
    "options": [
      "(A) Suspender losartana e iniciar metildopa e AAS; realizar pesquisa de lesão de órgãos-alvo.",
      "(B) Manter losartana e iniciar AAS; solicitar exames para avaliar a função hepática.",
      "(C) Suspender losartana; indicar avaliação cardiológica detalhada.",
      "(D) Manter losartana; realizar pesquisa de hipertensão secundária."
    ],
    "correctAnswer": 0,
    "explanation": "Gestante hipertensa crônica usando losartana: os bloqueadores do receptor de angiotensina (e os IECA) são contraindicados na gestação pelo risco de fetotoxicidade (oligoidrâmnio, insuficiência renal fetal). Deve-se trocar por anti-hipertensivo seguro, como metildopa (ou nifedipina). Ela tem alto risco de pré-eclâmpsia (hipertensão crônica, obesidade, 39 anos), então deve iniciar AAS 100–150 mg à noite entre 12 e 16 semanas, além de cálcio. Na primeira consulta, avaliam-se lesões de órgãos-alvo (função renal, proteinúria, ECG, fundo de olho).",
    "commentary": "Manter losartana (B e D): é contraindicada na gravidez.\n\nSuspender sem substituir (C): a paciente ficaria sem tratamento; e não há indicação de avaliação cardiológica detalhada de rotina sem sintomas.",
    "reference": "Ministério da Saúde — Manual de gestação de alto risco (2022) / Febrasgo — Hipertensão na gestação",
    "tags": [
      "obstetrícia",
      "hipertensão crônica na gestação",
      "pré-eclâmpsia",
      "AAS"
    ],
    "tip": "Gestante: IECA e BRA estão proibidos. AAS para quem tem alto risco de pré-eclâmpsia."
  },
  {
    "id": "iog2026-9",
    "topography": "2.1",
    "topic": "Pneumotórax",
    "module": "Clínica Médica",
    "text": "Homem, 27 anos, previamente hígido, procura o Pronto Socorro com queixa de dor torácica súbita há uma hora, em pontada, que piora com a respiração e acompanhada de leve dispneia. Exame físico: afebril, normotenso e com perfusão periférica normal. Tórax: inspeção estática: sem alterações, inspeção dinâmica: diminuição da expansibilidade à direita; percussão: som timpânico e murmúrio vesicular diminuído à direita.\n\nO diagnóstico é:",
    "options": [
      "Pneumonia.",
      "Derrame pleural.",
      "Embolia de pulmão.",
      "Pneumotórax."
    ],
    "correctAnswer": 3,
    "explanation": "Homem jovem e magro, sem doença prévia, com dor pleurítica súbita e dispneia leve; ao exame, expansibilidade reduzida, hipertimpanismo e murmúrio vesicular diminuído do mesmo lado: pneumotórax espontâneo primário. O timpanismo é o achado que separa o ar (pneumotórax) do líquido (derrame, com macicez).",
    "commentary": "Pneumonia (A): teria febre, macicez e estertores, não timpanismo.\n\nDerrame pleural (B): dá macicez à percussão.\n\nEmbolia pulmonar (C): costuma ter exame do tórax normal, sem timpanismo localizado.",
    "reference": "BTS 2023 — Guideline for pleural disease (pneumothorax) / SBPT",
    "tags": [
      "pneumologia",
      "pneumotórax",
      "exame físico do tórax",
      "dor pleurítica"
    ],
    "tip": "Timpanismo + MV abolido = ar (pneumotórax). Macicez + MV abolido = líquido."
  },
  {
    "id": "sespe2026-50",
    "topography": "13",
    "topic": "Depressão maior",
    "module": "Ginecologia e Obstetrícia",
    "text": "Qual (ais) dos sinais e sintomas cognitivos abaixo pode(m) fazer parte do diagnóstico depressão pós-parto?",
    "options": [
      "Dificuldade de concentração e tomada de decisões",
      "Choro incontrolável",
      "Ansiedade e preocupação excessiva",
      "Vontade de machucar o bebê",
      "Fadiga extrema e cansaço constante"
    ],
    "correctAnswer": 0,
    "explanation": "A questão pede sintomas cognitivos da depressão pós-parto. Na semiologia psiquiátrica, os sintomas da depressão se dividem em afetivos (tristeza, choro, ansiedade), neurovegetativos ou somáticos (sono, apetite, fadiga) e cognitivos (concentração, memória, tomada de decisões, pensamentos de culpa). Dificuldade de concentração e de tomar decisões é sintoma cognitivo, previsto no DSM-5.",
    "commentary": "Choro incontrolável (B): sintoma afetivo.\n\nAnsiedade e preocupação excessiva (C): sintoma afetivo/ansioso, muito comum na depressão pós-parto, mas não cognitivo.\n\nVontade de machucar o bebê (D): pensamento intrusivo grave que exige avaliação urgente; a banca não o classificou como sintoma cognitivo diagnóstico.\n\nFadiga extrema (E): sintoma somático/neurovegetativo.",
    "reference": "DSM-5-TR — Transtorno depressivo maior com início no periparto / FEBRASGO — Depressão perinatal",
    "tags": [
      "psiquiatria",
      "depressão pós-parto",
      "puerpério",
      "sintomas cognitivos"
    ],
    "tip": "Depressão: concentração e decisão = cognitivo; choro = afetivo; fadiga = somático."
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
    "id": "hpp2026-100",
    "topography": "15",
    "topic": "Estudos epidemiológicos",
    "module": "Saúde Coletiva",
    "text": "Pesquisadores avaliaram a eficácia de um novo antibiótico para pneumonia comunitária em crianças. Para isso, selecionaram 200 pacientes elegíveis, que foram randomicamente alocados em dois grupos: um recebeu o novo antibiótico e o outro recebeu o tratamento convencional. Ambos foram acompanhados por 14 dias para comparação das taxas de cura clínica. Com base nessa descrição, trata-se de um estudo:",
    "options": [
      "Estudo de Caso-controle.",
      "Estudo de Coorte prospectiva.",
      "Estudo de Ensaio Clínico Randomizado.",
      "Estudo Transversal Analítico."
    ],
    "correctAnswer": 2,
    "explanation": "Os pesquisadores alocaram aleatoriamente os participantes para receber a intervenção (novo antibiótico) ou o tratamento convencional e compararam os desfechos (cura clínica) ao longo do seguimento. É um estudo experimental: ensaio clínico randomizado, o melhor desenho para avaliar eficácia de tratamento.",
    "commentary": "Caso-controle (A): parte do desfecho (casos e controles) e olha exposições passadas; não há intervenção.\n\nCoorte prospectiva (B): também acompanha grupos no tempo, mas a exposição não é atribuída pelo pesquisador.\n\nTransversal (D): exposição e desfecho medidos no mesmo momento, sem seguimento.",
    "reference": "Medronho — Epidemiologia / Fletcher — Epidemiologia Clínica",
    "tags": [
      "ensaio clínico randomizado",
      "desenhos de estudo",
      "estudos epidemiológicos"
    ],
    "tip": "Pesquisador sorteia quem recebe a intervenção = ensaio clínico randomizado."
  },
  {
    "id": "amp2026-14",
    "topography": "15",
    "topic": "Ética médica",
    "module": "Saúde Coletiva",
    "text": "No atendimento de um trauma que levou à morte de uma criança ou adolescente, ou no caso em que a vítima chegou morta ao serviço de saúde\nI – é vedado ao médico oferecer Atestado de Óbito em qualquer situação de morte por causa violenta ou suspeita, seja por acidente ou violência EXCETO\nII – se não houver Instituto Médico Legal no município e região do falecimento, sem necessidade de comunicação à autoridade local.\n\nAssinale a alternativa correta.",
    "options": [
      "Ambas afirmativas estão corretas e a II é uma justificativa correta da I.",
      "Ambas afirmativas estão corretas e a II não é uma justificativa correta da I.",
      "A afirmativa I está correta e a II incorreta.",
      "A afirmativa II está incorreta e a I correta.",
      "Ambas estão incorretas."
    ],
    "correctAnswer": 0,
    "explanation": "Em morte por causa externa (violenta ou suspeita), o atestado de óbito é emitido pelo médico legista do IML, após necropsia — o médico assistente não deve fornecê-lo. Onde não há IML, qualquer médico da localidade pode ser investido como perito pela autoridade (perito eventual) e emitir o atestado.\n\nA banca considerou as duas afirmativas corretas e a II como justificativa da exceção apresentada na I.",
    "commentary": "II não justifica I (B): a banca entendeu que a II é a exceção que justifica a I.\n\nII incorreta (C) e II incorreta com I correta (D): pelo gabarito, a II foi aceita como correta.\n\nAmbas incorretas (E): a I está correta.\n\nObservação: a afirmativa II diz \"sem necessidade de comunicação à autoridade local\", o que contraria a regra — o médico só emite o atestado nessa situação quando nomeado perito pela autoridade policial ou judicial (Resolução CFM 1.779/2005 e CPP, art. 159). Por isso o gabarito é questionável.",
    "reference": "Resolução CFM nº 1.779/2005 / Ministério da Saúde — A declaração de óbito / CPP, art. 159",
    "tags": [
      "declaração de óbito",
      "morte violenta",
      "medicina legal",
      "IML"
    ],
    "tip": "Morte violenta: atestado pelo IML. Sem IML, médico local como perito nomeado pela autoridade.",
    "alert": "Gabarito discutível: a afirmativa II diz que não é preciso comunicar a autoridade, mas o médico só emite o atestado de morte violenta, onde não há IML, quando nomeado perito pela autoridade. A banca manteve A."
  },
  {
    "id": "amrigs2025-23",
    "module": "Cirurgia",
    "text": "Paciente adulto, em pós-operatório de grande cirurgia, apresenta edema generalizado em membro inferior direito e dor na panturrilha, mais acentuada à flexão do pé direito.\n\nConsiderando o caso apresentado, a hipótese diagnóstica mais provável é:",
    "options": [
      "Traumatismo por mobilização excessiva.",
      "Oclusão arterial aguda.",
      "Trombose venosa profunda.",
      "Tromboangeíte obliterante."
    ],
    "correctAnswer": 2,
    "explanation": "Pós-operatório de grande cirurgia (imobilização, estado pró-trombótico), edema unilateral do membro inferior e dor na panturrilha à dorsiflexão do pé (sinal de Homans) apontam para trombose venosa profunda. A confirmação é feita com ultrassonografia com Doppler venoso.",
    "commentary": "Trauma por mobilização (A): não explica edema de todo o membro em contexto de alto risco trombótico.\n\nOclusão arterial aguda (B): membro frio, pálido, sem pulsos, com dor intensa e parestesia — não edema.\n\nTromboangeíte obliterante (D): doença de jovens fumantes, com isquemia distal e flebite migratória, sem relação com pós-operatório.",
    "reference": "Diretrizes da SBACV — Trombose venosa profunda",
    "tags": [
      "trombose venosa profunda",
      "pós-operatório",
      "sinal de Homans",
      "tromboembolismo venoso"
    ],
    "tip": "Pós-operatório + edema unilateral + dor na panturrilha = TVP até prova em contrário."
  },
  {
    "id": "amrigs2025-91",
    "module": "Saúde Coletiva",
    "text": "Analise as situações abaixo:\nI. Assumir que um valor-p pequeno implica em relevância clínica significativa.\nII. Acreditar que o valor-p pode medir a magnitude do efeito observado.\nIII. Pensar que o valor-p de um estudo determina a probabilidade da hipótese nula ser verdadeira.\n\nQuais são erros comuns na interpretação do valor-p?",
    "options": [
      "Apenas I e II.",
      "Apenas I e III.",
      "Apenas II e III.",
      "I, II e III."
    ],
    "correctAnswer": 3,
    "explanation": "As três são interpretações erradas do valor-p (declaração da American Statistical Association, 2016):\n\nI: p pequeno indica improbabilidade dos dados sob a hipótese nula, não relevância clínica.\nII: o valor-p não mede o tamanho do efeito (para isso: diferença de médias, RR, IC).\nIII: o valor-p é a probabilidade de obter um resultado tão extremo quanto o observado SE a hipótese nula for verdadeira — não a probabilidade de a hipótese nula ser verdadeira.",
    "commentary": "Apenas I e II (A), Apenas I e III (B), Apenas II e III (C): todas deixam de fora um erro comum de interpretação.",
    "reference": "Wasserstein RL, Lazar NA. The ASA Statement on p-Values (2016)",
    "tags": [
      "valor-p",
      "bioestatística",
      "significância estatística"
    ],
    "tip": "Significância estatística ≠ relevância clínica."
  },
  {
    "id": "amrigs2026-77",
    "module": "Pediatria",
    "text": "Gestante de 39 semanas chega em franco trabalho de parto ao centro obstétrico. Em sua carteira de pré-natal, consta resultado positivo para triagem de HTLV (teste ELISA) no segundo trimestre gestacional. As demais sorologias eram não reagentes.\n\nConsiderando o caso apresentado, qual é a medida mais eficaz para prevenir a infecção do neonato pelo HTLV?",
    "options": [
      "Indicar parto por cesariana.",
      "Orientar o clampeamento imediato do cordão umbilical após o nascimento.",
      "Prescrever zidovudina solução oral nos primeiros 28 dias do neonato.",
      "Contraindicar o aleitamento materno."
    ],
    "correctAnswer": 3,
    "explanation": "A principal via de transmissão vertical do HTLV-1 é o aleitamento materno (risco proporcional ao tempo de amamentação). A medida mais eficaz é contraindicar a amamentação e oferecer fórmula infantil, com inibição da lactação.",
    "commentary": "Cesárea (A): não há evidência de que reduza a transmissão do HTLV.\n\nClampeamento imediato do cordão (B): não previne a transmissão.\n\nZidovudina no neonato (C): é profilaxia do HIV, sem papel no HTLV.\n\nObservação: o ELISA de triagem deve ser confirmado (Western blot ou PCR); com o teste confirmado, a recomendação é suspender a amamentação.",
    "reference": "Ministério da Saúde — PCDT para Prevenção da Transmissão Vertical de HIV, Sífilis e Hepatites Virais (2022) e nota técnica sobre HTLV",
    "tags": [
      "HTLV",
      "transmissão vertical",
      "aleitamento materno",
      "recém-nascido"
    ],
    "tip": "HTLV na gestante: não amamentar."
  }
];
