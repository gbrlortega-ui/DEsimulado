// Arquivo gerado por `npm run gen` a partir do banco de questões. Não editar à mão.
// O build e o servidor local regeneram este arquivo sozinhos; o `npm run validate` acusa se ficar desatualizado.
import type { Question } from '../types';

export const TOTAL_QUESTIONS = 2514;

export const COUNT_BY_AREA: Record<string, number> = {
  "Pediatria": 472,
  "Clínica Médica": 512,
  "Cirurgia": 450,
  "Ginecologia e Obstetrícia": 465,
  "Saúde Coletiva": 455,
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
  "Saúde Coletiva|AMRIGS": 34
};

/** Questões por especialidade ou região da topografia ("1.1", "8"). */
export const TOPOGRAPHY_COUNT: Record<string, number> = {
  "8": 67,
  "9": 63,
  "10": 99,
  "11": 238,
  "12": 20,
  "13": 48,
  "14": 103,
  "15": 369,
  "16": 146,
  "1.2": 15,
  "1.3": 24,
  "7.2": 38,
  "4.2": 25,
  "1.1": 72,
  "1.5": 28,
  "6.1": 41,
  "3.1": 82,
  "4.1": 72,
  "2.1": 86,
  "6.2": 20,
  "2.2": 92,
  "3.2": 25,
  "3.3": 27,
  "7.1": 25,
  "1.4": 3,
  "3.4": 17,
  "5.1": 179,
  "5.2": 215
};

/** Questões por assunto, na chave "1.1|Cefaleias". */
export const TOPIC_COUNT: Record<string, number> = {
  "11|Puericultura": 26,
  "1.2|Catarata": 5,
  "11|Icterícia neonatal": 8,
  "11|Obesidade infantil": 9,
  "1.3|Amigdalite/faringoamigdalite": 12,
  "7.2|Urticária": 1,
  "1.2|Uveíte": 2,
  "4.2|Estenose de uretra": 2,
  "11|Calendário vacinal": 12,
  "1.1|TCE": 12,
  "11|Maus-tratos infantis": 15,
  "11|Prematuridade": 2,
  "11|Anemia ferropriva": 13,
  "9|Trombocitopenias": 5,
  "11|Aleitamento materno": 19,
  "1.5|Hipotireoidismo": 7,
  "11|Síndrome do desconforto respiratório neonatal": 8,
  "14|Emergências pediátricas": 13,
  "6.1|Artrite reumatoide": 7,
  "9|Talassemias": 2,
  "11|ITU pediátrica": 7,
  "11|Diarreia aguda": 8,
  "14|Trauma": 36,
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
  "9|Leucemias": 8,
  "1.3|Otite média aguda": 2,
  "11|Convulsão febril": 5,
  "11|Pneumonia infantil": 9,
  "11|Refluxo gastroesofágico": 2,
  "11|Bronquiolite": 10,
  "11|Desnutrição": 3,
  "10|Sífilis": 15,
  "4.1|Síndrome nefrítica": 3,
  "2.1|Bronquiectasias": 2,
  "8|Insuficiência adrenal": 6,
  "6.2|Escoliose": 2,
  "14|Intoxicações": 13,
  "15|Ética médica": 15,
  "4.1|Síndrome nefrótica": 7,
  "1.3|Laringite": 3,
  "7.2|Dermatite atópica": 4,
  "14|Sepse e choque séptico": 10,
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
  "8|Diabetes mellitus tipo 1 e 2": 23,
  "1.1|Demências": 7,
  "6.1|Lúpus eritematoso sistêmico": 7,
  "1.1|Epilepsia": 7,
  "10|Tuberculose": 21,
  "2.1|DPOC": 19,
  "9|Anemia ferropriva": 6,
  "3.2|Hepatites virais": 5,
  "2.2|Dislipidemia": 8,
  "2.2|Insuficiência cardíaca": 12,
  "2.2|Hipertensão arterial sistêmica": 22,
  "4.1|Cistite": 6,
  "13|Dependência química": 6,
  "3.1|DRGE": 9,
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
  "13|Esquizofrenia": 5,
  "6.1|Gota": 4,
  "7.2|Hanseníase": 7,
  "7.2|Escabiose": 6,
  "2.2|Síndrome coronariana aguda": 10,
  "4.1|Glomerulonefrite": 3,
  "10|HIV/AIDS": 9,
  "12|Delirium": 5,
  "3.1|Gastrite": 3,
  "9|Síndrome de lise tumoral": 1,
  "2.1|Insuficiência respiratória": 1,
  "10|Sepse": 4,
  "6.1|Osteoporose": 7,
  "7.2|Carcinoma basocelular": 3,
  "9|Anemia megaloblástica": 10,
  "2.1|Derrame pleural": 13,
  "13|Transtornos de ansiedade": 5,
  "1.5|Tempestade tireotóxica": 1,
  "12|Demências": 1,
  "13|Depressão maior": 7,
  "8|Hiperaldosteronismo primário": 3,
  "16|Feridas": 17,
  "16|Pré-operatório": 17,
  "16|Hérnias": 18,
  "3.3|Colangite aguda": 4,
  "3.1|Hemorragia digestiva baixa": 3,
  "7.1|Doença arterial periférica": 5,
  "6.2|Fraturas": 5,
  "1.1|Hipertensão intracraniana": 3,
  "14|Queimaduras": 10,
  "1.3|Câncer de cabeça e pescoço": 2,
  "1.2|Ceratite": 3,
  "14|Choque": 5,
  "16|Trauma abdominal": 11,
  "6.2|Hérnia de disco": 2,
  "16|Obstrução intestinal": 17,
  "7.1|Trombose venosa profunda": 8,
  "4.2|Câncer de próstata": 5,
  "3.1|Hemorragia digestiva alta": 10,
  "3.1|Doença hemorroidária": 5,
  "7.1|Aneurisma de aorta abdominal": 4,
  "3.2|Hepatocarcinoma": 4,
  "10|Doença de Chagas": 3,
  "1.4|Doença periodontal": 1,
  "3.3|Colecistite aguda": 3,
  "16|Trauma torácico": 18,
  "16|Apendicite aguda": 9,
  "16|Perfuração de víscera oca": 7,
  "3.3|Colangiocarcinoma": 3,
  "3.4|Pancreatite aguda": 8,
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
  "5.1|Climatério e menopausa": 21,
  "5.1|Contracepção": 28,
  "5.1|Câncer de colo uterino": 28,
  "5.1|Vaginose bacteriana": 6,
  "5.2|Diabetes gestacional": 19,
  "5.2|Assistência ao parto": 10,
  "5.2|Puerpério": 14,
  "5.2|Infecções na gestação": 27,
  "5.2|Rotura prematura de membranas": 7,
  "15|Rastreamento": 21,
  "5.1|Câncer de endométrio": 8,
  "5.2|Gravidez ectópica": 9,
  "5.2|Diagnóstico de gravidez": 1,
  "5.2|Pré-natal": 33,
  "5.2|Hemorragia pós-parto": 9,
  "5.2|Trabalho de parto": 23,
  "5.1|Mioma uterino": 9,
  "5.1|Endometriose": 10,
  "5.1|Infertilidade": 8,
  "5.1|Prolapso genital": 7,
  "5.1|Câncer de ovário": 7,
  "15|Saúde da mulher": 8,
  "5.2|Pré-eclâmpsia": 16,
  "5.2|Abortamento": 17,
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
  "5.2|Placenta prévia": 4,
  "15|Atenção Primária": 70,
  "15|Saúde do idoso": 6,
  "15|SUS": 52,
  "12|Polifarmácia": 2,
  "15|Imunização": 23,
  "15|Saúde do trabalhador": 20,
  "15|Estudos epidemiológicos": 31,
  "15|Epidemiologia": 41,
  "15|Vigilância epidemiológica": 29,
  "15|Testes diagnósticos": 21,
  "15|Estratégia Saúde da Família": 12,
  "12|Quedas": 3,
  "13|Risco de suicídio": 7,
  "13|Transtorno bipolar": 3,
  "10|Infecções relacionadas à assistência": 3,
  "15|Saúde da criança": 3,
  "2.2|Doença arterial coronariana crônica": 5,
  "3.2|Hipertensão portal": 3,
  "3.2|Icterícia": 1,
  "2.2|Febre reumática": 3,
  "4.1|Distúrbios ácido-base": 7,
  "14|Anafilaxia": 4,
  "10|Malária": 3,
  "9|Coagulopatias": 7,
  "4.2|Hiperplasia prostática benigna": 2,
  "2.1|Fibrose pulmonar": 2,
  "6.1|Artrite séptica": 2,
  "15|Bioestatística": 6,
  "3.2|Ascite": 3,
  "14|Crise hipertensiva": 1,
  "7.2|Dermatite de contato": 1,
  "1.1|Esclerose múltipla": 1,
  "3.1|Úlcera péptica": 4,
  "9|Neutropenia febril": 4,
  "13|Transtornos alimentares": 4,
  "4.2|Fimose": 1,
  "3.4|Câncer de pâncreas": 3,
  "3.4|Pancreatite crônica": 5,
  "3.1|Diverticulose/diverticulite": 6,
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
  "10|Toxoplasmose": 2,
  "1.5|Câncer de tireoide": 3,
  "2.2|Endocardite infecciosa": 4,
  "2.1|Tabagismo": 5,
  "1.5|Hiperparatireoidismo": 3,
  "3.3|Câncer de vesícula": 3,
  "3.1|Diarreia aguda": 1,
  "5.2|Restrição de crescimento fetal": 5,
  "11|Púrpura de Henoch-Schönlein": 2,
  "5.1|Adenomiose": 2,
  "7.2|Pênfigo e penfigoide": 1,
  "1.4|Câncer de boca": 1,
  "2.1|Pneumonia hospitalar": 1,
  "6.1|Esclerose sistêmica": 1,
  "10|Meningococcemia": 3,
  "6.2|Pé diabético": 3,
  "1.2|Perda visual súbita": 1,
  "11|Alimentação complementar": 2,
  "10|Febre amarela": 1,
  "9|Transfusão sanguínea": 2,
  "7.2|Psoríase": 1,
  "1.2|Retinopatia diabética": 1,
  "8|Hipoglicemia": 1,
  "2.1|Pneumotórax": 1,
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
  "12|Síndrome da fragilidade": 1
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
    "id": "tp2022-51",
    "topography": "11",
    "topic": "Cardiopatias congênitas",
    "module": "Pediatria",
    "text": "Menino de 4 anos com sopro suave 2+/6+ em foco tricúspide durante quadro febril. Ecocardiograma prévio normal. Sobre este sopro, assinale a correta:",
    "options": [
      "(A) A principal causa de sopro fisiológico nesta idade é o forame oval pérvio.",
      "(B) O sopro fisiológico é comum nesta idade e tende a ficar mais audível em situações de febre.",
      "(C) O sopro fisiológico está presente em menos de 30% das crianças.",
      "(D) O sopro fisiológico normalmente é acompanhado de alterações de bulhas."
    ],
    "correctAnswer": 1,
    "explanation": "Criança de 4 anos com febre, sopro suave e de baixa intensidade (2+/6+), sem outras alterações e com ecocardiograma e ECG normais há 1 ano: é um sopro inocente (fisiológico), e a febre o tornou mais audível.\n\nSopros inocentes são muito frequentes em pré-escolares e escolares; o mais comum é o sopro de Still, vibratório, na borda esternal esquerda baixa. Eles aumentam em estados de débito cardíaco elevado (febre, anemia, exercício, ansiedade) e podem sumir com a mudança de posição. São sistólicos, suaves, sem frêmito, com bulhas normais, e não exigem tratamento, só reavaliação fora do quadro febril.",
    "commentary": "Forame oval pérvio (A): em geral não produz sopro audível; não é a causa dos sopros fisiológicos da infância.\n\nMenos de 30% das crianças (C): o sopro inocente é auscultado na maioria das crianças em algum momento da infância, bem acima de 30%.\n\nAlterações de bulhas (D): bulhas alteradas, sopro diastólico, intensidade de 3+/6+ ou mais e frêmito são sinais de sopro patológico, que pede investigação.",
    "tip": "Sopro inocente: sistólico, suave, sem frêmito, bulhas normais e mais audível com febre ou anemia.",
    "reference": "Tratado de Pediatria Burns - 4ª Ed.",
    "tags": [
      "cardiologia"
    ]
  },
  {
    "id": "tp2019-54",
    "topography": "9",
    "topic": "Linfomas",
    "module": "Pediatria",
    "text": "Adolescente, 17 anos, feminino, apresenta desmaios e tosse há 40 dias. Relata fraqueza e diminuição do apetite há 10 dias. Exame físico: emagrecida, palidez cutâneo-mucosa, frequência respiratória = 36 ipm, frequência cardíaca = 78 bpm, pressão arterial = 120 x 70 mmHg, discreta turgência jugular à direita, sem fígado e baço palpáveis. RX de tórax: massa mediastinal estendendo-se para hemitórax superior direito.\n\nA hipótese diagnóstica é:",
    "options": [
      "(A) Linfoma",
      "(B) Higroma cístico",
      "(C) Bócio mergulhante",
      "(D) Tuberculose pulmonar"
    ],
    "correctAnswer": 0,
    "explanation": "Adolescente com sintomas constitucionais, tosse e massa mediastinal com turgência jugular (sinal de compressão da veia cava superior): a principal hipótese é linfoma, a causa mais comum de massa de mediastino anterior nessa faixa etária.",
    "commentary": "O higroma cístico é congênito e cervical. O bócio mergulhante é raro em adolescentes. A tuberculose pulmonar não costuma causar síndrome de veia cava superior.",
    "reference": "Nelson Tratado de Pediatria – 16ª. ed / Kliegman, Stanton, St. Geme, Schor, Elsevier, 2003.",
    "tags": [
      "pediatria",
      "oncologia pediátrica",
      "linfoma"
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
    "id": "tp2019-33",
    "topography": "6.1",
    "topic": "Fibromialgia",
    "module": "Clínica Médica",
    "text": "Mulher, 28 anos, refere dificuldade de concentração, sono não reparador, sensação de cansaço ao acordar e dor articular e muscular em membros superiores e inferiores há seis meses. Nega perda de peso, hiporexia e febre. Exame físico: pele e mucosa sem alterações, articulações ou músculos sem sinais inflamatórios, força muscular preservada e dor em tender points.\n\nO tratamento mais efetivo é:",
    "options": [
      "(A) Anti-inflamatório não hormonal",
      "(B) Atividade física aeróbica",
      "(C) Agulhamento de tender points",
      "(D) Anti-inflamatório hormonal"
    ],
    "correctAnswer": 1,
    "explanation": "Dor musculoesquelética difusa há mais de 3 meses, sono não reparador, fadiga e alteração cognitiva, com exame físico sem sinais inflamatórios e dor em pontos dolorosos: fibromialgia.\n\nO tratamento com melhor evidência é a atividade física aeróbica regular, associada a educação em dor e, se necessário, fármacos como amitriptilina ou duloxetina.",
    "commentary": "Anti-inflamatórios (hormonais ou não) não têm eficácia na fibromialgia, que não é inflamatória. O agulhamento de pontos não tem evidência consistente.",
    "reference": "Goldenberg, DL. Patient education: Fibromyalgia (Beyond the Basics) UpToDate 2018. / https://www.uptodate.com/contents/fibromyalgia-beyond-the-basics.",
    "tags": [
      "reumatologia",
      "fibromialgia",
      "dor crônica"
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
    "id": "tp2024-87",
    "topography": "5.1",
    "topic": "Câncer de colo uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 30 anos, citologia: \"Células escamosas atípicas não podendo excluir lesão de alto grau (ASC-H)\". Conduta?",
    "options": [
      "(A) Encaminhar para colposcopia.",
      "(B) Repetir citologia em 6 meses.",
      "(C) Repetir citologia em 12 meses.",
      "(D) Repetir citologia em 3 anos."
    ],
    "correctAnswer": 0,
    "explanation": "ASC-H significa células escamosas atípicas em que não se pode afastar lesão de alto grau. Uma parte importante dessas mulheres tem, de fato, lesão intraepitelial de alto grau ou até câncer na investigação.\n\nPor isso as Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero recomendam que toda mulher com ASC-H, em qualquer idade, seja encaminhada diretamente à colposcopia, com biópsia das áreas suspeitas. Não se repete a citologia.",
    "commentary": "Repetir em 6 meses (B): é a conduta para ASC-US em mulheres a partir de 30 anos, não para ASC-H, que pode esconder lesão de alto grau.\n\nRepetir em 12 meses (C): é a conduta para ASC-US e LSIL em mulheres mais jovens; atrasaria o diagnóstico de uma lesão potencialmente grave.\n\nRepetir em 3 anos (D): é o intervalo do rastreamento após dois exames normais, sem lugar diante de um laudo alterado.",
    "tip": "ASC-H, HSIL, AGC ou suspeita de invasão: colposcopia direto, sem repetir citologia.",
    "reference": "Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero.",
    "tags": [
      "ginecologia oncológica",
      "patologia do trato genital inferior"
    ]
  },
  {
    "id": "tp2022-92",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Primigesta, 34 semanas, Hb 11,5 g/dL (era 12,5 g/dL com 10 semanas). Conduta correta?",
    "options": [
      "(A) Pesquisar hemoglobinopatias por eletroforese.",
      "(B) Orientar dieta ricas em legumes, verduras e proteínas.",
      "(C) Encaminhar ao alto risco por anemia severa.",
      "(D) Ferro elementar em doses terapêuticas."
    ],
    "correctAnswer": 1,
    "explanation": "Na gestação, considera-se anemia a hemoglobina abaixo de 11 g/dL. Esta gestante tem 11,5 g/dL, portanto não está anêmica.\n\nA queda de 12,5 para 11,5 g/dL ao longo da gravidez é esperada: o volume de plasma aumenta mais do que a massa de hemácias, o que dilui a hemoglobina (hemodiluição fisiológica). A conduta é apenas orientar alimentação saudável e variada, com fontes de ferro e proteínas, e manter a suplementação profilática de ferro e ácido fólico que o Ministério da Saúde recomenda a todas as gestantes.",
    "commentary": "Eletroforese de hemoglobina (A): investigação de hemoglobinopatias faz sentido diante de anemia, microcitose sem deficiência de ferro ou história familiar; aqui a hemoglobina é normal.\n\nEncaminhar ao alto risco por anemia severa (C): não há anemia; a anemia grave na gestação corresponde a valores muito mais baixos (abaixo de 8 g/dL).\n\nFerro em dose terapêutica (D): dose de tratamento é para gestante com anemia confirmada; com hemoglobina normal, usa-se apenas a dose profilática.",
    "tip": "Gestação: anemia é Hb abaixo de 11 g/dL. Queda leve ao longo da gravidez é hemodiluição fisiológica.",
    "reference": "MS - Atenção ao Pré-Natal de Baixo Risco.",
    "tags": [
      "obstetrícia",
      "nutrição"
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
    "id": "tp2021-13",
    "topography": "14",
    "topic": "Choque",
    "module": "Ciências Básicas",
    "text": "Homem, 23 anos, vítima de trauma abdominal fechado com hipovolemia por provável hemorragia intra-abdominal. Qual é a ação direta das células justaglomerulares nessa situação?",
    "options": [
      "(A) Bloqueio da liberação do hormônio antidiurético.",
      "(B) Liberação de aldosterona.",
      "(C) Aumento da reabsorção da creatinina.",
      "(D) Liberação de renina."
    ],
    "correctAnswer": 3,
    "explanation": "As células justaglomerulares renais respondem diretamente à hipotensão arterial e hipovolemia por meio da síntese e liberação de renina para ativar o eixo SRAA.",
    "commentary": "A redução da pressão de perfusão na artéria aferente renal estimula as células do aparelho justaglomerular a secretar renina por ação direta. A renina cliva o angiotensinogênio hepático em angiotensina I, iniciando a cascata que estabiliza a pressão circulatória por vasoconstrição (via Angiotensina II) e retenção de sódio/água (via aldosterona, liberada pela adrenal pós-estímulo).",
    "reference": "Berne & Levy - Fisiologia - 6a Ed. Elsevier",
    "tags": [
      "fisiologia",
      "nefrologia",
      "fisiopatologia"
    ]
  },
  {
    "id": "enamed-2025-25",
    "topography": "5.2",
    "topic": "Diabetes gestacional",
    "module": "Ginecologia e Obstetrícia",
    "text": "Multípara, 37 semanas, obesa, apresentando diabetes mellitus gestacional controlada com insulina NPH e regular. Evoluiu para parto normal, e o recém-nascido pesou 3.300 g.\n\nA conduta no puerpério imediato deve ser",
    "options": [
      "(A) suspender insulinoterapia.",
      "(B) iniciar hipoglicemiante oral.",
      "(C) manter insulina NPH em 1/3 da dose da gravidez.",
      "(D) manter insulinoterapia com a dosagem do pré-natal."
    ],
    "correctAnswer": 0,
    "explanation": "No diabetes mellitus gestacional (DMG), a resistência à insulina é induzida por hormônios de origem placentária (como o lactogênio placentário). Com a dequitação e saída da placenta no parto, há uma queda abrupta e imediata desses níveis hormonais contrarreguladores, cessando o estímulo diabetogênico temporário. Portanto, a insulinoterapia deve ser suspensa imediatamente no puerpério, mantendo-se apenas o monitoramento glicêmico capilar de rotina e agendando reavaliação de tolerância glicêmica (com TOTG 75g) entre 4 e 12 semanas pós-parto.",
    "commentary": "Iniciar hipoglicemiantes orais ou manter a insulina pós-parto sem necessidade comprovada induzirá hipoglicemia iatrogênica na paciente, visto que a fisiologia retorna ao basal rapidamente.",
    "reference": "Diretrizes da Sociedade Brasileira de Diabetes (SBD) / FEBRASGO",
    "tags": [
      "ginecologia",
      "obstetrícia",
      "diabetes gestacional",
      "puerpério"
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
    "id": "unifesp2025-13",
    "topography": "2.1",
    "topic": "Câncer de pulmão",
    "module": "Cirurgia",
    "text": "Homem, 70 anos de idade, apresenta adenocarcinoma em lobo superior do pulmão esquerdo. Durante estadiamento da neoplasia observou-se comprometimento dos linfonodos das cadeias 4 ipsilateral e 7. Não foram identificadas metástases no PET-CT.\n\nQual a conduta mais adequada?",
    "options": [
      "(A) Tratamento não cirúrgico.",
      "(B) Lobectomia superior esquerda.",
      "(C) Pneumonectomia esquerda.",
      "(D) Segmentectomia esquerda."
    ],
    "correctAnswer": 0,
    "explanation": "Adenocarcinoma de lobo superior esquerdo com comprometimento das cadeias 4L (paratraqueal inferior ipsilateral) e 7 (subcarinal): doença N2 multiestação, estádio III, sem metástases ao PET-CT.\n\nCom N2 multiestação comprovado no estadiamento, a ressecção primária não é recomendada. O tratamento padrão é não cirúrgico: quimiorradioterapia concomitante seguida de imunoterapia de consolidação (durvalumabe). A cirurgia fica restrita a casos selecionados após indução e resposta mediastinal.",
    "commentary": "Lobectomia (B): ressecção indicada em estádios I–II; na doença N2 multiestação não é o tratamento inicial.\n\nPneumonectomia (C): maior morbimortalidade, sem benefício oncológico na doença N2 multiestação.\n\nSegmentectomia (D): reservada a tumores periféricos pequenos (≤ 2 cm) e N0.",
    "reference": "NCCN Guidelines — Non-Small Cell Lung Cancer / Estadiamento TNM 8ª ed. (IASLC)",
    "tags": [
      "cirurgia torácica",
      "câncer de pulmão",
      "estadiamento"
    ]
  },
  {
    "id": "unifesp2025-72",
    "topography": "5.1",
    "topic": "Infertilidade",
    "module": "Ginecologia e Obstetrícia",
    "text": "Um casal formado por um homem de 28 anos de idade e uma mulher nuligesta de 27 anos idade, refere 2 anos de tentativas de gestação. Ele, com histórico de uretrite tratada, exame físico sem alterações e espermograma normal. Ela, saudável, com ciclos menstruais regulares, sem queixas de dismenorreia ou dispareunia e com exame físico sem alterações.\n\nQual é o próximo exame na investigação da infertilidade desse casal?",
    "options": [
      "(A) Avaliação hormonal para ele.",
      "(B) Ressonância magnética de pelve para ela.",
      "(C) Histerossalpingografia para ela.",
      "(D) Cariótipo para ambos."
    ],
    "correctAnswer": 2,
    "explanation": "Casal com 2 anos de infertilidade, espermograma normal e ciclos regulares (ovulação provável). Falta avaliar o fator tubário, sobretudo porque o homem tem antecedente de uretrite (risco de doença inflamatória pélvica e obstrução tubária na parceira, muitas vezes subclínica, como na clamídia).\n\nO exame inicial para permeabilidade tubária é a histerossalpingografia.",
    "commentary": "Avaliação hormonal masculina (A): com espermograma normal, não há indicação.\n\nRM de pelve (B): útil para endometriose profunda ou adenomiose, sem suspeita clínica aqui (sem dismenorreia ou dispareunia).\n\nCariótipo (D): indicado em perdas gestacionais de repetição ou alterações graves do espermograma.",
    "reference": "ASRM — Diagnostic evaluation of the infertile female (2021) / FEBRASGO — Investigação do casal infértil",
    "tags": [
      "ginecologia",
      "infertilidade",
      "fator tubário",
      "histerossalpingografia"
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
    "id": "hosbos2025-38",
    "topography": "1.1",
    "topic": "AVC",
    "module": "Clínica Médica",
    "text": "Paciente vem a unidade de saúde com quadro de acidente vascular cerebral isquêmico. Considerando tal quadro, é correto afirmar que é critério atual de indicação de trombólise no AVC isquêmico o seguinte:",
    "options": [
      "(A) tempo < que 6 horas, desde o último momento visto assintomático.",
      "(B) entre 2 e 4 horas e meia, desde o último momento visto assintomático.",
      "(C) ≥ 18 anos.",
      "(D) paciente diabético com glicemia, no momento do evento > 50 e < 250 mg/dL.",
      "(E) pressão arterial 185 x 110 mmHg."
    ],
    "correctAnswer": 2,
    "explanation": "Critérios de inclusão para trombólise IV (alteplase ou tenecteplase) no AVC isquêmico: idade ≥ 18 anos, déficit neurológico mensurável, TC sem hemorragia e início dos sintomas (ou último momento visto bem) até 4,5 horas.",
    "commentary": "Até 6 horas (A): a janela da trombólise é de 4,5 h; 6 h (ou até 24 h em casos selecionados) é para trombectomia.\n\nEntre 2 e 4,5 horas (B): a janela começa no início dos sintomas — quanto mais cedo, melhor; não há limite inferior.\n\nGlicemia > 50 e < 250 (D): a glicemia < 50 ou > 400 mg/dL é que deve ser corrigida/excluir mimetizadores; o critério não está formulado assim.\n\nPA 185 × 110 mmHg (E): a PA deve estar ABAIXO de 185 × 110 antes da trombólise.",
    "reference": "AHA/ASA Guidelines for the Early Management of Acute Ischemic Stroke (2019) / Diretrizes da SBDCV",
    "tags": [
      "AVC isquêmico",
      "trombólise",
      "alteplase"
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
    "id": "iog2026-29",
    "topography": "5.1",
    "topic": "Câncer de ovário",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 23 anos, vida sexual com uso de preservativo, ciclos menstruais regulares. Realiza exame ginecológico com achado de tumoração anexial direita, móvel e indolor. Exame ultrassonográfico complementar identifica tumoração ovariana de 6 cm compatível com diagnóstico de teratoma.\n\nA ooforoplastia direita prevenirá qual das seguintes complicações?",
    "options": [
      "Degeneração maligna.",
      "Sangramento.",
      "Infertilidade.",
      "Torção."
    ],
    "correctAnswer": 3,
    "explanation": "Teratoma maduro (cisto dermoide) de 6 cm em mulher jovem. A complicação mais comum desse tumor é a torção ovariana, favorecida pelo tamanho (maior que 5 cm) e pelo peso do conteúdo. A cistectomia com preservação do ovário (ooforoplastia) é indicada justamente para prevenir a torção, além de confirmar a histologia.",
    "commentary": "Degeneração maligna (A): é rara (menos de 2%), ocorre mais em mulheres mais velhas e não é o principal motivo da cirurgia.\n\nSangramento (B): não é complicação típica do teratoma.\n\nInfertilidade (C): o teratoma não causa infertilidade; a cirurgia preserva o ovário justamente para não comprometer a fertilidade.",
    "reference": "FEBRASGO — Tumores anexiais benignos / ACOG Practice Bulletin 174",
    "tags": [
      "ginecologia",
      "teratoma",
      "torção ovariana",
      "massa anexial"
    ],
    "tip": "Teratoma maduro: maior risco é torção."
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
    "id": "hsrc2026-16",
    "topography": "11",
    "topic": "Desidratação",
    "module": "Pediatria",
    "text": "Um menino de 3 anos de idade apresenta quadro de diarreia aquosa intensa, irritabilidade e olhos fundos. Ao exame, o pulso é fraco, e o sinal da prega abdominal desaparece lentamente. Assinale a alternativa que apresenta o plano de reidratação recomendado segundo o fluxograma do Ministério da Saúde adotado pela SBP.",
    "options": [
      "Plano A – prevenção de desidratação",
      "Plano B – reidratação oral supervisionada",
      "Plano C – reidratação endovenosa",
      "Plano D – antibiótico e antiemético",
      "Plano E – observação e dieta zero"
    ],
    "correctAnswer": 2,
    "explanation": "Criança com diarreia e sinais de desidratação grave: pulso fraco e sinal da prega que desaparece muito lentamente (> 2 segundos), além de olhos fundos e irritabilidade. Pelo esquema do Ministério da Saúde, a presença de dois ou mais sinais de gravidade (letargia ou inconsciência, olhos muito fundos, pulso fraco, prega muito lenta, incapacidade de beber) indica o Plano C: reidratação venosa imediata.",
    "commentary": "Plano A (A): sem desidratação; tratamento em casa com aumento de líquidos.\n\nPlano B (B): desidratação sem gravidade; terapia de reidratação oral na unidade.\n\nPlanos D e E (D e E): não existem no protocolo.",
    "reference": "Ministério da Saúde — Manejo do paciente com diarreia (2023) / SBP",
    "tags": [
      "desidratação",
      "diarreia aguda",
      "plano C",
      "hidratação venosa"
    ],
    "tip": "Pulso fraco ou prega muito lenta = desidratação grave = Plano C (venoso)."
  },
  {
    "id": "amp2026-32",
    "topography": "5.2",
    "topic": "Puerpério",
    "module": "Ginecologia e Obstetrícia",
    "text": "Puérpera com 24 horas de pós-parto cesáreo por rotura prematura de membranas de 29 horas e distócia de progressão foi diagnosticada com infecção puerperal. Quais os sinais e sintomas clínicos que mais levaram a este diagnóstico?",
    "options": [
      "Temperatura 38 °C, calafrio, dor abdominal e loquiação escassa.",
      "Dor abdominal moderada, tremores, útero doloroso e hipoinvoluído.",
      "Temperatura 37,9 °C, dor abdominal, taquicardia, tremores e calafrio.",
      "Taquicardia, taquipneia, dor abdominal e lóquios abundantes e inodoro.",
      "Temperatura 38,9 °C, taquicardia, útero doloroso, pastoso e hipoinvoluído."
    ],
    "correctAnswer": 4,
    "explanation": "A infecção puerperal (endometrite) após cesárea com fatores de risco (rotura prolongada de membranas, trabalho de parto longo) se manifesta tipicamente com febre ≥ 38 °C (geralmente mais alta), taquicardia e útero doloroso, amolecido (pastoso) e hipoinvoluído, muitas vezes com lóquios fétidos.\n\nA alternativa E traz o conjunto mais característico. Tratamento: clindamicina + gentamicina EV.",
    "commentary": "Febre com lóquios escassos (A): a febre está no limite e os demais achados são inespecíficos; falta a alteração uterina.\n\nSem febre (B): o diagnóstico exige febre.\n\nTemperatura de 37,9 °C (C): abaixo do critério de febre puerperal.\n\nLóquios abundantes e inodoros (D): lóquios normais; taquicardia e taquipneia sem febre ou alteração uterina são inespecíficos.",
    "reference": "FEBRASGO — Infecção puerperal / Rezende — Obstetrícia",
    "tags": [
      "infecção puerperal",
      "endometrite",
      "puerpério"
    ],
    "tip": "Endometrite: febre, útero doloroso, amolecido e subinvoluído, lóquios fétidos."
  },
  {
    "id": "amrigs2025-28",
    "module": "Cirurgia",
    "text": "Sobre as hérnias de hiato, é INCORRETO afirmar que:",
    "options": [
      "Qualquer tipo de hérnia pode gerar sintomas clássicos de refluxo.",
      "A membrana frenoesofágica é uma continuação da fáscia endoabdominal que se ancora no esôfago.",
      "As hérnias paraesofágicas podem estar associadas à doença do refluxo gastroesofágico (DRGE).",
      "A pressão relativamente positiva dentro do tórax facilita a migração visceral."
    ],
    "correctAnswer": 3,
    "explanation": "A pergunta pede a INCORRETA. A pressão intratorácica é negativa em relação à abdominal; é esse gradiente (pressão abdominal positiva, torácica negativa) que favorece a migração das vísceras para o tórax. Dizer que o tórax tem pressão \"relativamente positiva\" está errado.",
    "commentary": "Qualquer tipo pode dar sintomas de refluxo (A): correta — inclusive as paraesofágicas.\n\nMembrana frenoesofágica (B): correta — é uma continuação da fáscia endoabdominal (transversalis) que se ancora no esôfago.\n\nParaesofágicas associadas a DRGE (C): correta — sobretudo as mistas (tipo III), em que a junção também migra.",
    "reference": "Sabiston — Tratado de Cirurgia / SAGES — Guidelines for the management of hiatal hernia (2013)",
    "tags": [
      "hérnia de hiato",
      "DRGE",
      "membrana frenoesofágica"
    ],
    "tip": "Gradiente: abdome com pressão positiva, tórax negativa — as vísceras sobem."
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
  }
];
