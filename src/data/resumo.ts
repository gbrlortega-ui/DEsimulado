// Arquivo gerado por `npm run gen` a partir do banco de questões. Não editar à mão.
// O build e o servidor local regeneram este arquivo sozinhos; o `npm run validate` acusa se ficar desatualizado.
import type { Question } from '../types';

export const TOTAL_QUESTIONS = 2214;

export const COUNT_BY_AREA: Record<string, number> = {
  "Pediatria": 411,
  "Clínica Médica": 445,
  "Cirurgia": 390,
  "Ginecologia e Obstetrícia": 406,
  "Saúde Coletiva": 402,
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
    "label": "HIAE 2025",
    "kind": "Residência",
    "year": 2025,
    "count": 75
  },
  {
    "label": "AMP 2026",
    "kind": "Residência",
    "year": 2026,
    "count": 100
  },
  {
    "label": "REVALIDA 2025/1",
    "kind": "Residência",
    "year": null,
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
    "key": "HIAE",
    "label": "HIAE",
    "kind": "Residência",
    "years": "2025",
    "count": 75
  },
  {
    "key": "AMP",
    "label": "AMP",
    "kind": "Residência",
    "years": "2026",
    "count": 100
  },
  {
    "key": "REVALIDA",
    "label": "REVALIDA",
    "kind": "Residência",
    "years": "NaN",
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
    "key": "HOS-BOS",
    "label": "HOS-BOS",
    "kind": "Residência",
    "years": "2027",
    "count": 100
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
  "Cirurgia|HOS-BOS": 20,
  "Clínica Médica|HOS-BOS": 20,
  "Ginecologia e Obstetrícia|HOS-BOS": 20,
  "Pediatria|HOS-BOS": 20,
  "Saúde Coletiva|HOS-BOS": 20,
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
  "Cirurgia|AMP": 20
};

/** Questões por especialidade ou região da topografia ("1.1", "8"). */
export const TOPOGRAPHY_COUNT: Record<string, number> = {
  "8": 65,
  "9": 61,
  "10": 96,
  "11": 228,
  "12": 19,
  "13": 47,
  "14": 97,
  "15": 350,
  "16": 140,
  "1.2": 14,
  "1.3": 23,
  "7.2": 37,
  "4.2": 25,
  "1.1": 67,
  "1.5": 27,
  "6.1": 40,
  "3.1": 77,
  "4.1": 71,
  "2.1": 83,
  "6.2": 19,
  "2.2": 90,
  "3.2": 24,
  "3.3": 25,
  "7.1": 25,
  "1.4": 3,
  "3.4": 17,
  "5.1": 172,
  "5.2": 204
};

/** Questões por assunto, na chave "1.1|Cefaleias". */
export const TOPIC_COUNT: Record<string, number> = {
  "11|Puericultura": 25,
  "1.2|Catarata": 4,
  "11|Icterícia neonatal": 8,
  "11|Obesidade infantil": 8,
  "1.3|Amigdalite/faringoamigdalite": 12,
  "7.2|Urticária": 1,
  "1.2|Uveíte": 2,
  "4.2|Estenose de uretra": 2,
  "11|Calendário vacinal": 11,
  "1.1|TCE": 11,
  "11|Maus-tratos infantis": 15,
  "11|Prematuridade": 2,
  "11|Anemia ferropriva": 12,
  "9|Trombocitopenias": 5,
  "11|Aleitamento materno": 18,
  "1.5|Hipotireoidismo": 7,
  "11|Síndrome do desconforto respiratório neonatal": 8,
  "14|Emergências pediátricas": 12,
  "6.1|Artrite reumatoide": 7,
  "9|Talassemias": 2,
  "11|ITU pediátrica": 6,
  "11|Diarreia aguda": 8,
  "14|Trauma": 35,
  "11|Cardiopatias congênitas": 20,
  "3.1|Constipação intestinal": 6,
  "10|Raiva": 6,
  "1.1|Cefaleias": 8,
  "1.3|Surdez": 2,
  "11|Desenvolvimento neuropsicomotor": 17,
  "9|Anemia falciforme": 7,
  "11|Asma infantil": 17,
  "11|Doença de Kawasaki": 1,
  "1.5|Hipertireoidismo": 10,
  "11|Desidratação": 9,
  "11|Sepse neonatal": 7,
  "9|Leucemias": 8,
  "1.3|Otite média aguda": 2,
  "11|Convulsão febril": 5,
  "11|Pneumonia infantil": 8,
  "11|Refluxo gastroesofágico": 2,
  "11|Bronquiolite": 9,
  "11|Desnutrição": 3,
  "10|Sífilis": 14,
  "4.1|Síndrome nefrítica": 3,
  "2.1|Bronquiectasias": 2,
  "8|Insuficiência adrenal": 6,
  "6.2|Escoliose": 2,
  "14|Intoxicações": 13,
  "15|Ética médica": 14,
  "4.1|Síndrome nefrótica": 6,
  "1.3|Laringite": 3,
  "7.2|Dermatite atópica": 4,
  "14|Sepse e choque séptico": 9,
  "8|Síndrome de Cushing": 3,
  "4.2|Torção testicular": 5,
  "2.2|Arritmias": 7,
  "9|Anemias": 2,
  "10|Tétano": 1,
  "8|Feocromocitoma": 2,
  "9|Linfomas": 3,
  "8|Cetoacidose diabética": 14,
  "3.1|Diarreia crônica": 3,
  "1.2|Erros refrativos": 1,
  "10|Dengue": 14,
  "4.1|Distúrbios hidroeletrolíticos": 10,
  "4.1|Lesão renal aguda": 12,
  "8|Diabetes mellitus tipo 1 e 2": 22,
  "1.1|Demências": 7,
  "6.1|Lúpus eritematoso sistêmico": 7,
  "1.1|Epilepsia": 6,
  "10|Tuberculose": 20,
  "2.1|DPOC": 18,
  "9|Anemia ferropriva": 6,
  "3.2|Hepatites virais": 5,
  "2.2|Dislipidemia": 8,
  "2.2|Insuficiência cardíaca": 12,
  "2.2|Hipertensão arterial sistêmica": 21,
  "4.1|Cistite": 6,
  "13|Dependência química": 6,
  "3.1|DRGE": 9,
  "2.1|Asma": 10,
  "2.1|Pneumonia comunitária": 15,
  "13|Abstinência alcoólica": 6,
  "6.1|Osteoartrose": 2,
  "2.1|Tuberculose pulmonar": 1,
  "7.2|Herpes-zóster": 2,
  "1.1|AVC": 18,
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
  "1.1|Meningite": 9,
  "1.1|Parkinson": 3,
  "9|Anemia hemolítica": 3,
  "3.2|Encefalopatia hepática": 1,
  "13|Esquizofrenia": 5,
  "6.1|Gota": 4,
  "7.2|Hanseníase": 7,
  "7.2|Escabiose": 6,
  "2.2|Síndrome coronariana aguda": 10,
  "4.1|Glomerulonefrite": 3,
  "10|HIV/AIDS": 9,
  "12|Delirium": 5,
  "3.1|Gastrite": 2,
  "9|Síndrome de lise tumoral": 1,
  "2.1|Insuficiência respiratória": 1,
  "10|Sepse": 4,
  "6.1|Osteoporose": 7,
  "7.2|Carcinoma basocelular": 3,
  "9|Anemia megaloblástica": 10,
  "2.1|Derrame pleural": 12,
  "13|Transtornos de ansiedade": 4,
  "1.5|Tempestade tireotóxica": 1,
  "12|Demências": 1,
  "13|Depressão maior": 7,
  "8|Hiperaldosteronismo primário": 3,
  "16|Feridas": 15,
  "16|Pré-operatório": 17,
  "16|Hérnias": 17,
  "3.3|Colangite aguda": 4,
  "3.1|Hemorragia digestiva baixa": 2,
  "7.1|Doença arterial periférica": 5,
  "6.2|Fraturas": 5,
  "1.1|Hipertensão intracraniana": 3,
  "14|Queimaduras": 10,
  "1.3|Câncer de cabeça e pescoço": 2,
  "1.2|Ceratite": 3,
  "14|Choque": 4,
  "16|Trauma abdominal": 11,
  "6.2|Hérnia de disco": 2,
  "16|Obstrução intestinal": 16,
  "7.1|Trombose venosa profunda": 8,
  "4.2|Câncer de próstata": 5,
  "3.1|Hemorragia digestiva alta": 9,
  "3.1|Doença hemorroidária": 5,
  "7.1|Aneurisma de aorta abdominal": 4,
  "3.2|Hepatocarcinoma": 4,
  "10|Doença de Chagas": 3,
  "1.4|Doença periodontal": 1,
  "3.3|Colecistite aguda": 3,
  "16|Trauma torácico": 17,
  "16|Apendicite aguda": 9,
  "16|Perfuração de víscera oca": 6,
  "3.3|Colangiocarcinoma": 3,
  "3.4|Pancreatite aguda": 8,
  "3.1|Câncer colorretal": 10,
  "8|Obesidade": 10,
  "7.1|Isquemia arterial aguda": 3,
  "7.2|Celulite": 2,
  "16|Pós-operatório": 20,
  "7.1|Insuficiência venosa crônica": 3,
  "6.2|Lesões do manguito rotador": 1,
  "16|Isquemia mesentérica": 4,
  "1.5|Nódulos tireoidianos": 3,
  "16|Abdome agudo": 5,
  "6.2|Lombalgia": 3,
  "7.2|Carcinoma espinocelular": 1,
  "6.2|Luxações": 1,
  "3.3|Colelitíase": 8,
  "5.1|Sangramento uterino anormal": 15,
  "5.1|Climatério e menopausa": 19,
  "5.1|Contracepção": 28,
  "5.1|Câncer de colo uterino": 27,
  "5.1|Vaginose bacteriana": 5,
  "5.2|Diabetes gestacional": 19,
  "5.2|Assistência ao parto": 10,
  "5.2|Puerpério": 14,
  "5.2|Infecções na gestação": 26,
  "5.2|Rotura prematura de membranas": 6,
  "15|Rastreamento": 20,
  "5.1|Câncer de endométrio": 7,
  "5.2|Gravidez ectópica": 8,
  "5.2|Diagnóstico de gravidez": 1,
  "5.2|Pré-natal": 30,
  "5.2|Hemorragia pós-parto": 9,
  "5.2|Trabalho de parto": 23,
  "5.1|Mioma uterino": 8,
  "5.1|Endometriose": 10,
  "5.1|Infertilidade": 8,
  "5.1|Prolapso genital": 7,
  "5.1|Câncer de ovário": 7,
  "15|Saúde da mulher": 8,
  "5.2|Pré-eclâmpsia": 16,
  "5.2|Abortamento": 16,
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
  "5.2|Placenta prévia": 2,
  "15|Atenção Primária": 69,
  "15|Saúde do idoso": 5,
  "15|SUS": 48,
  "12|Polifarmácia": 2,
  "15|Imunização": 21,
  "15|Saúde do trabalhador": 19,
  "15|Estudos epidemiológicos": 30,
  "15|Epidemiologia": 40,
  "15|Vigilância epidemiológica": 27,
  "15|Testes diagnósticos": 20,
  "15|Estratégia Saúde da Família": 11,
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
  "9|Coagulopatias": 6,
  "4.2|Hiperplasia prostática benigna": 2,
  "2.1|Fibrose pulmonar": 2,
  "6.1|Artrite séptica": 2,
  "15|Bioestatística": 4,
  "3.2|Ascite": 3,
  "14|Crise hipertensiva": 1,
  "7.2|Dermatite de contato": 1,
  "1.1|Esclerose múltipla": 1,
  "3.1|Úlcera péptica": 4,
  "9|Neutropenia febril": 3,
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
  "6.1|Vasculites": 2,
  "3.3|Coledocolitíase": 5,
  "14|Emergências obstétricas": 4,
  "13|Transtornos de personalidade": 1,
  "2.2|Fibrilação atrial": 5,
  "6.2|Síndrome da cauda equina": 1,
  "7.2|Impetigo": 2,
  "3.2|Peritonite bacteriana espontânea": 2,
  "7.1|Dissecção de aorta": 2,
  "4.2|Câncer de bexiga": 1,
  "4.2|Retenção urinária": 2,
  "1.3|Vertigem": 1,
  "6.2|Lesão do ligamento cruzado anterior": 1,
  "8|Distúrbios do cálcio": 2,
  "14|Parada cardiorrespiratória": 4,
  "4.1|Nefropatia diabética": 2,
  "2.2|Choque cardiogênico": 1,
  "12|Cuidados paliativos": 7,
  "10|Toxoplasmose": 2,
  "1.5|Câncer de tireoide": 3,
  "2.2|Endocardite infecciosa": 4,
  "2.1|Tabagismo": 5,
  "11|Púrpura de Henoch-Schönlein": 2,
  "5.2|Restrição de crescimento fetal": 3,
  "5.1|Adenomiose": 2,
  "7.2|Pênfigo e penfigoide": 1,
  "1.4|Câncer de boca": 1,
  "2.1|Pneumonia hospitalar": 1,
  "1.5|Hiperparatireoidismo": 2,
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
  "3.3|Câncer de vesícula": 2,
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
    "id": "tp2022-46",
    "topography": "1.5",
    "topic": "Hipotireoidismo",
    "module": "Pediatria",
    "text": "Menina de 14 anos com menstruação irregular, pele e cabelos secos, bócio indolor, bradicardia e alopecia areata. Qual a hipótese mais provável?",
    "options": [
      "(A) Hipotireoidismo por hipoplasia tireoidiana.",
      "(B) Hipotireoidismo por tireoidite autoimune.",
      "(C) Hipotireoidismo por defeito de síntese.",
      "(D) Hipotireoidismo por tireoidite subaguda."
    ],
    "correctAnswer": 1,
    "explanation": "A tireoidite de Hashimoto é a principal causa de hipotireoidismo adquirido e associa-se a outras doenças autoimunes (alopecia).",
    "commentary": "Hashimoto é a causa mais comum na adolescência. A associação com alopecia areata reforça a natureza autoimune do quadro.",
    "reference": "Tratado de Pediatria 4ª edição.",
    "tags": [
      "endocrinologia"
    ]
  },
  {
    "id": "tp2026-42",
    "topography": "3.1",
    "topic": "Constipação intestinal",
    "module": "Pediatria",
    "text": "Criança de 8 anos dá entrada no hospital com queixa de evacuações dolorosas há 4 meses. A mãe relata que a criança evacua cerca de duas vezes por semana, fezes endurecidas e de grande volume, além de apresentar episódios ocasionais de escape fecal. Refere dor abdominal associada à evacuação, que se intensificou nas últimas 24 horas. Considerando esse quadro clínico, o diagnóstico mais provável é:",
    "options": [
      "(A) Doença orgânica intestinal",
      "(B) Síndrome do intestino irritável",
      "(C) Constipação funcional",
      "(D) Adenite mesentérica"
    ],
    "correctAnswer": 2,
    "explanation": "O quadro é compatível com constipação funcional segundo os critérios de Roma IV (frequência evacuatória reduzida, fezes endurecidas, dor e escape fecal na ausência de sinais de doença orgânica).",
    "commentary": "Comentários sobre a resposta correta:\n(C) A constipação funcional é diagnosticada clinicamente pelos critérios de Roma IV. A paciente apresenta frequência de evacuações ≤ 2 vezes por semana, fezes endurecidas e volumosas, dor à evacuação e episódios de escape fecal (incontinência fecal por transbordamento), sem sinais de alerta que sugiram causas orgânicas.\n\nComentários sobre os distratores:\n(A) Não há sinais de alerta (perda de peso, febre, sangramento retal macroscópico ativo, atraso no desenvolvimento pôndero-estatural) que justifiquem suspeitar de causa orgânica intestinal primária.\n(B) A Síndrome do Intestino Irritável (SII) exige dor abdominal recorrente relacionada à alteração do hábito intestinal por pelo menos 2 meses, o que não descreve o padrão clínico de retenção voluntária e escape fecal apresentados.\n(D) A adenite mesentérica cursa tipicamente com dor abdominal aguda, frequentemente associada a infecção de vias aéreas superiores recente, não se relacionando à queixa crônica de constipação e escape fecal.",
    "reference": "PEDIATRIA, Sociedade Brasileira de. Tratado de pediatria. 6. ed. Barueri: Manole, 2024.",
    "tags": [
      "gastroenterologia"
    ]
  },
  {
    "id": "tp2023-29",
    "topography": "3.2",
    "topic": "Hepatites virais",
    "module": "Clínica Médica",
    "text": "Paciente do sexo feminino, 32 anos, procedente de São Paulo/SP, foi admitida na UTI por quadro de hepatite fulminante pelo vírus da hepatite B, com indicação de transplante hepático. Tem antecedente de hepatite C, tratada com resposta virológica sustentada (cura). Assinale a alternativa que melhor reflete seu estado sorológico atual:",
    "options": [
      "(A) HBsAg (+), anti-HBc IgG (+), anti-HBc IgM (-), anti-HBs (-), Anti-HCV (-)",
      "(B) HBsAg (+), anti-HBc IgG (+), anti-HBc IgM (+), anti-HBs (-), Anti-HCV (+)",
      "(C) HBsAg (+), anti-HBc IgG (+), anti-HBc IgM (+), anti-HBs (-), Anti-HCV (-)",
      "(D) HBsAg (-), anti-HBc IgG (+), anti-HBc IgM (-), anti-HBs (+), Anti-HCV (+)"
    ],
    "correctAnswer": 1,
    "explanation": "A hepatite fulminante pelo vírus B ocorre na fase aguda da infecção, com insuficiência hepática (encefalopatia e coagulopatia). O perfil sorológico esperado é HBsAg positivo, anti-HBc positivo com IgM positivo (marcador de infecção recente) e anti-HBs negativo, porque não houve cura.\n\nQuanto à hepatite C, quem teve contato com o vírus mantém o anti-HCV positivo por toda a vida, mesmo depois da cura; o que fica negativo após a resposta virológica sustentada é o HCV-RNA. Vale lembrar que, na forma fulminante, a resposta imune intensa pode negativar o HBsAg precocemente, e o anti-HBc IgM é o marcador mais confiável.",
    "commentary": "Anti-HBc IgM negativo e anti-HCV negativo (A): seria um perfil de hepatite B crônica, sem infecção aguda, e ignora que o anti-HCV persiste após a cura da hepatite C.\n\nAnti-HCV negativo (C): o perfil do vírus B está certo, mas o anti-HCV continua positivo em quem já teve hepatite C, mesmo curada.\n\nHBsAg negativo e anti-HBs positivo (D): indica hepatite B passada e curada, com imunidade, o que não combina com hepatite fulminante atual pelo vírus B.",
    "tip": "Hepatite B aguda: HBsAg+ e anti-HBc IgM+. Hepatite C curada: anti-HCV+ para sempre, RNA negativo.",
    "reference": "Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas para o Tratamento da Hepatite Viral Crônica B e Coinfeccões, Brasília, 2009.",
    "tags": [
      "gastroenterologia",
      "infectologia"
    ]
  },
  {
    "id": "tp2021-29",
    "topography": "2.2",
    "topic": "Hipertensão arterial sistêmica",
    "module": "Clínica Médica",
    "text": "Homem, 60 anos, diabético e dislipidêmico foi atendido na Unidade Básica de Saúde com PA = 170 x 110 mmHg, aferidas em três medidas em dias e horários distintos. Após uma semana, o paciente é reavaliado e apresenta os mesmos níveis pressóricos. Além de mudanças no estilo de vida, o tratamento mais apropriado consiste em iniciar de imediato:",
    "options": [
      "(A) Hidroclorotiazida em monoterapia.",
      "(B) Metoprolol em monoterapia.",
      "(C) Enalapril + espironolactona.",
      "(D) Losartana + anlodipino."
    ],
    "correctAnswer": 3,
    "explanation": "O paciente apresenta hipertensão estágio 2 (PA diastólica ≥ 110 mmHg) em meio a perfil de risco cardiovascular muito alto (diabético, idoso e obeso/dislipidêmico). O tratamento de escolha envolve combinação precoce de fármacos de classes sinérgicas. Pelo diabetes, a preferência recai sobre a associação de um BRA (Losartana) com antagonista de canal de cálcio (Anlodipino).",
    "commentary": "Diante de hipertensão estágio 2 de alto risco, a diretriz consolidada recomenda o início direto de terapia farmacológica combinada. Diuréticos tiazídicos de forma isolada ou betabloqueadores em monoterapia devem ser preteridos em diabéticos em favor de agentes bloqueadores do sistema renina-angiotensina aliados a bloqueadores de canais de cálcio, oferecendo melhor sensibilidade insulínica, excelente poder de controle tensional e nefroproteção prolongada.",
    "reference": "Barroso WKS, Rodrigues CIS, Bortolotto LA, Mota-Gomes MA, Brandão AA, Feitosa ADM, et al. Diretrizes Brasileiras de Hipertensão Arterial – 2020. Arq Bras Cardiol. 2021;116(3):516-658.",
    "tags": [
      "cardiologia",
      "endocrinologia"
    ]
  },
  {
    "id": "tp2024-63",
    "topography": "16",
    "topic": "Hérnias",
    "module": "Cirurgia",
    "text": "Homem de 60 anos, metalúrgico, DPOC, diabético tipo 2, refere dor e protusão na região inguinal direita há 3 meses. Ao exame físico, é evidenciada uma hérnia inguinal à direita e aumento volumétrico da próstata. Assinale a afirmativa correta:",
    "options": [
      "(A) A fraqueza do triângulo de Hesselbach, esforço físico e DPOC são as causas da formação da hérnia.",
      "(B) A hiperplasia prostática é responsável por 50% das hérnias inguinais no homem.",
      "(C) Trata-se de uma hérnia que está se exteriorizando através do anel inguinal profundo (interno).",
      "(D) Como se trata de uma hérnia direta, congênita, o tratamento é a herniorrafia inguinal."
    ],
    "correctAnswer": 0,
    "explanation": "Homem de 60 anos, com trabalho braçal, DPOC e protrusão inguinal que dói aos esforços. O enunciado sugere uma hérnia inguinal direta, que sai pelo triângulo de Hesselbach (delimitado pelos vasos epigástricos inferiores, pela borda lateral do reto abdominal e pelo ligamento inguinal), na parede posterior do canal inguinal.\n\nA hérnia direta é adquirida: surge pelo enfraquecimento da fáscia transversal com a idade, somado ao aumento repetido da pressão abdominal (esforço físico, tosse crônica da DPOC, esforço para urinar ou evacuar). O tabagismo também altera o colágeno e enfraquece a parede. O tratamento do adulto é a hernioplastia com tela (como a técnica de Lichtenstein ou a via laparoscópica).",
    "commentary": "Hiperplasia prostática como causa de metade das hérnias (B): o esforço miccional pode contribuir, mas não há base para atribuir a ela metade dos casos.\n\nSaída pelo anel inguinal profundo (C): isso define a hérnia indireta, que passa lateralmente aos vasos epigástricos inferiores, pelo trajeto do processo vaginal.\n\nHérnia direta congênita tratada com herniorrafia (D): a hérnia direta é adquirida (a congênita é a indireta, por persistência do processo vaginal), e no adulto o padrão é a correção com tela, não a sutura simples.",
    "tip": "Direta: Hesselbach, adquirida, medial aos vasos epigástricos. Indireta: anel interno, congênita, lateral aos vasos.",
    "reference": "Hérnias de Parede Abdominal – Diagnóstico e Tratamento, 2ª Edição 2009. Juan Carlos M. Gonzáles, Capítulo 13.",
    "tags": [
      "cirurgia geral",
      "hérnias"
    ]
  },
  {
    "id": "tp2022-63",
    "topography": "3.3",
    "topic": "Colecistite aguda",
    "module": "Cirurgia",
    "text": "Paciente de 45 anos, obesa, com dor em hipocôndrio direito, Murphy positivo e febre (38,2ºC). Qual a conduta recomendada?",
    "options": [
      "(A) Tomografia com contraste e tratamento clínico apenas.",
      "(B) Exames laboratoriais, ultrassom para confirmação e indicação cirúrgica laparoscópica.",
      "(C) Laparotomia exploradora urgente imediata.",
      "(D) Colangiorressonância e CPRE conservadora."
    ],
    "correctAnswer": 1,
    "explanation": "Mulher de 45 anos, obesa, com dor em hipocôndrio direito há 2 dias, náuseas, vômitos, febre, taquicardia e sinal de Murphy positivo: a principal hipótese é colecistite aguda, inflamação da vesícula geralmente por cálculo impactado no infundíbulo.\n\nA investigação inclui exames laboratoriais (leucograma, PCR, bilirrubinas, enzimas hepáticas, amilase ou lipase) e ultrassonografia de abdome, exame de escolha para confirmar (cálculos, parede espessada, líquido perivesicular, Murphy ultrassonográfico). Confirmado o diagnóstico, o tratamento definitivo é a colecistectomia videolaparoscópica, de preferência precoce, junto com hidratação, analgesia e antibiótico.",
    "commentary": "Tomografia e só tratamento clínico (A): a TC não é o exame inicial para doença da vesícula (o ultrassom é mais sensível para cálculos), e manter apenas suporte adia a cirurgia, que é o tratamento.\n\nLaparotomia exploradora urgente (C): não há peritonite difusa nem instabilidade que justifiquem cirurgia aberta sem diagnóstico; a via de escolha é a laparoscópica, após confirmação.\n\nColangiorressonância e CPRE (D): servem para suspeita de cálculo no colédoco (icterícia, colangite, dilatação da via biliar), o que não é descrito; e obesidade não contraindica a laparoscopia.",
    "tip": "Febre + dor em hipocôndrio direito + Murphy: ultrassom confirma colecistite; trate com colecistectomia laparoscópica precoce.",
    "reference": "Coelho, Júlio Cezar - Aparelho Digestivo - 4ª Ed.",
    "tags": [
      "gastroenterologia",
      "cirurgia biliar"
    ]
  },
  {
    "id": "tp2021-69",
    "topography": "3.1",
    "topic": "Doença hemorroidária",
    "module": "Cirurgia",
    "text": "Homem, 50 anos, refere sangramento de cor vermelho “vivo” associado à evacuação, não misturado às fezes, há 1 semana. Relata também dor e abaulamento da região anal com concomitante prurido e ardência local. Ao exame físico: nodulação azulada/vinhosa, dolorosa ao toque, mas redutível com a manobra digital. A conduta é:",
    "options": [
      "(A) Escleroterapia.",
      "(B) Crioterapia.",
      "(C) Hemorroidectomia.",
      "(D) Ligadura elástica."
    ],
    "correctAnswer": 3,
    "explanation": "Na hemorroida interna que prolapsa sob esforço mas recua de forma redutível manualmente (Grau III), aliada a sangramento episódico vermelho vivo na evacuação, o tratamento ambulatorial intervencionista preferencial de primeira linha é a ligadura elástica.",
    "commentary": "Na doença hemorroidária, o sangramento é o sintoma mais comum e, na grande maioria das vezes, não é volumoso e sim intermitente e de pequena monta. O aumento crônico do esforço evacuatório aumenta a possibilidade de surgimento do prolapso hemorroidário devido à flacidez e relaxamento do tecido conjuntivo de fixação do canal anal. Quando há dor aguda persistente, deve-se afastar trombose hemorroidária. Existem várias formas de tratamento ambulatorial para hemorróidas internas: ligadura elástica, escleroterapia, crioterapia, coagulação infravermelha e laser. A ligadura elástica como método de escolha para o tratamento de hemorróidas internas, é o procedimento mais seguro e aceito na literatura médica para o tratamento do sangramento de repetição e prolapso nos graus I, II e III, mostrando melhores resultados consolidados a longo prazo, menor dor pós-procedimento quando comparado ao cirúrgico completo e baixas taxas de recidiva.",
    "reference": "TOWNSEND, CM et al. Sabiston, tratado de Cirurgia: a base biológica da moderna prática cirúrgica. 20ª ed. Rio de Janeiro: Elsevier, 2019.",
    "tags": [
      "coloproctologia",
      "ambulatório"
    ]
  },
  {
    "id": "tp2020-116",
    "topography": "16",
    "topic": "Hérnias",
    "module": "Cirurgia",
    "text": "Paciente de 15 anos de idade apresenta quadro de dor inguinal direita há 3 dias, com piora do quadro nas últimas 24 horas. Apresenta parada de eliminação de gases e fezes há um dia e febre. Ao exame físico apresenta tumoração inguinal com dor à palpação e eritema importante da pele.\n\nQual o diagnóstico mais provável e a conduta?",
    "options": [
      "(A) Hérnia inguinal estrangulada. Tentar reduzir manualmente.",
      "(B) Hérnia inguinal encarcerada. Tentar reduzir manualmente.",
      "(C) Hérnia inguinal estrangulada. Antibioticoterapia e cirurgia imediata.",
      "(D) Hérnia inguinal encarcerada. Observação e analgesia."
    ],
    "correctAnswer": 2,
    "explanation": "Hérnia inguinal com dor, obstrução intestinal, febre e eritema da pele: hérnia estrangulada, com sofrimento isquêmico da alça. A conduta é antibioticoterapia e cirurgia de urgência.",
    "commentary": "A redução manual é contraindicada na suspeita de estrangulamento (risco de reduzir alça necrótica). Observação e analgesia são inadequadas.",
    "reference": "Sabiston, Tratado de cirurgia, 17ª edição. Hérnias, pag. 1199-1217. Editora Elsevier. / Schwartz’s, Manual of Surgery, eighth edition, Inguinal hernias, pag. 920-942. Editora McGRAW-HILL.",
    "tags": [
      "cirurgia",
      "hérnias",
      "abdome agudo"
    ]
  },
  {
    "id": "tp2023-93",
    "topography": "5.1",
    "topic": "Câncer de colo uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 32 anos, G3P3, laqueada, fez exame colpocitológico de rotina na Unidade Básica de Saúde, cujo laudo veio compatível com ASC-H (células escamosas atípicas de significado indeterminado). Segundo as diretrizes do Ministério da Saúde/INCA (Instituto Nacional do Câncer), qual conduta deve ser adotada?",
    "options": [
      "(A) Encaminhar para histerectomia.",
      "(B) Realizar biópsia.",
      "(C) Repetir a colpocitologia em 6 meses.",
      "(D) Realizar colposcopia."
    ],
    "correctAnswer": 3,
    "explanation": "ASC-H significa células escamosas atípicas em que não se pode afastar lesão de alto grau. Mesmo sem ser um diagnóstico definitivo, uma parte relevante desses casos corresponde a NIC 2 ou 3 na histologia.\n\nPor isso as diretrizes brasileiras do INCA determinam encaminhar para colposcopia, independentemente da idade (com particularidades apenas para menores de 25 anos e gestantes, que também vão à colposcopia). Na colposcopia, se houver achado anormal, faz-se biópsia dirigida ou, em casos selecionados, a exérese da zona de transformação.",
    "commentary": "Histerectomia (A): é tratamento desproporcional; nem há diagnóstico histológico, e as lesões precursoras são tratadas com exérese da zona de transformação.\n\nBiópsia (B): deve ser guiada pela colposcopia, que mostra onde está a área alterada; não se faz biópsia às cegas antes desse exame.\n\nRepetir a citologia em 6 meses (C): é a conduta para ASC-US e lesão de baixo grau em determinadas idades, não para ASC-H, pelo risco de lesão de alto grau.",
    "tip": "ASC-H, HSIL, AGC ou atipias de origem indefinida: colposcopia direto.",
    "reference": "Diretrizes brasileiras para o rastreamento do câncer do colo uterino. Segunda edição revista, ampliada e atualizada. INCA, RJ 2016.",
    "tags": [
      "ginecologia oncológica",
      "patologia do trato genital inferior"
    ]
  },
  {
    "id": "tp2025-95",
    "topography": "5.2",
    "topic": "Abortamento",
    "module": "Ginecologia e Obstetrícia",
    "text": "Primigesta, com última menstruação há oito semanas, procura o pronto atendimento com queixa de cólicas hipogástricas e relato de sangramento vaginal há dois dias. Ao exame físico, foi evidenciada consistência uterina amolecida e volume aumentado, compatível com o tempo de amenorreia, além de colo uterino fechado. Identifique a hipótese diagnóstica e o método propedêutico indicado para o esclarecimento do caso:",
    "options": [
      "(A) Abortamento completo – Dosagem de beta HCG",
      "(B) Gestação ectópica – Dosagem de beta HCG",
      "(C) Aborto incompleto – Ultrassom pélvico transvaginal",
      "(D) Ameaça de aborto – Ultrassom pélvico transvaginal"
    ],
    "correctAnswer": 3,
    "explanation": "Gestante de primeiro trimestre com queixa álgica tipo cólica abdominal baixa associada a hemorragias autolimitadas locais que preserva útero volumoso gravídico e colo impérvio fechado ao toque define a ameaça de aborto.",
    "commentary": "A ameaça de abortamento caracteriza-se classicamente por sangramento uterino discreto, dores pélvicas mecânicas, altura uterina em conformidade ao tempo provável de amenorreia e óstio cervical impérvio ao toque ginecológico. O pilar propedêutico ouro indispensável para assegurar e confirmar a vitalidade embriofetal e descartar desprendimentos ou perdas irreparáveis (como o abortamento consumado ou incompleto) consiste na realização do ultrassom pélvico transvaginal, identificando batimentos cardíacos fetais ativos.",
    "reference": "Tratado de Obstetrícia FEBRASGO, Elsevier, 2019.",
    "tags": [
      "obstetrícia",
      "sangramento 1º trimestre"
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
    "id": "tp2024-120",
    "topography": "15",
    "topic": "Rastreamento",
    "module": "Saúde Coletiva",
    "text": "Homem, 52 anos, hipertenso e tabagista assintomático. Quais exames de rastreio são adequados?",
    "options": [
      "PSA e Creatinina isolados.",
      "PA, Glicemia, Colesterol e abordagem de álcool/drogas.",
      "Hemograma completo e TGO/TGP.",
      "PSA, Urina tipo I e Potássio."
    ],
    "correctAnswer": 1,
    "explanation": "Rastreamento é procurar doença em quem não tem sintomas, e só faz sentido para condições em que há benefício comprovado. Para um homem de 52 anos, hipertenso e tabagista, o Caderno de Atenção Primária nº 29 (Rastreamento) apoia: aferição da pressão arterial, dosagem de colesterol (dislipidemia), glicemia (diabetes, indicada de forma especial em hipertensos) e abordagem do uso de álcool, tabaco e outras drogas.\n\nNessa idade também se inclui o rastreamento do câncer colorretal. Já o PSA não é recomendado pelo Ministério da Saúde para rastreio populacional, e exames como hemograma e transaminases não rastreiam nenhuma condição com benefício estabelecido. Creatinina, potássio e urina tipo I fazem parte do acompanhamento da hipertensão já diagnosticada, e não do rastreamento.",
    "commentary": "PSA e creatinina (A): o PSA não é recomendado para rastreamento populacional do câncer de próstata pelo Ministério da Saúde, e a creatinina é exame de avaliação do hipertenso, não de rastreio.\n\nHemograma e TGO/TGP (C): não há evidência de benefício em pedi-los de rotina em pessoa assintomática.\n\nPSA, urina tipo I e potássio (D): o PSA não é indicado para rastrear, e urina e potássio servem para acompanhar a hipertensão, não para rastrear doenças.",
    "tip": "Rastreio no adulto: PA, colesterol, glicemia, álcool/tabaco e câncer colorretal a partir dos 50. PSA de rotina, não.",
    "reference": "https://bvsms.saude.gov.br/bvs/publicacoes/caderno_atencao_primaria_29_rastreamento.pdf",
    "tags": [
      "rastreamento",
      "saúde do homem",
      "prevenção"
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
    "id": "tp2025-8",
    "topography": "1.1",
    "topic": "AVC",
    "module": "Ciências Básicas",
    "text": "Ao ser submetido a terapia de reperfusão de oclusão de artéria vertebral com alteplase, um paciente teve melhora dos sintomas iniciais (disartria, nistagmos e vertigem), porém evoluiu com sonolência excessiva em seguida. Diante de uma nova tomografia sem hiperdensidades anormais, o paciente foi submetido a arteriografia de urgência, que evidenciou que o trombo “migrara” em relação a sua posição original. Caracterize corretamente o caso.",
    "options": [
      "(A) Trata-se de uma oclusão da artéria cerebral posterior, onde há isquemia de núcleos da rafe e locus ceruleus.",
      "(B) Trata-se de uma oclusão da artéria basilar, onde há isquemia dos colículos superiores e tálamo.",
      "(C) Trata-se de uma oclusão da artéria basilar, onde há isquemia de núcleos da rafe e locus ceruleus.",
      "(D) Trata-se de uma oclusão da artéria cerebral posterior, onde há isquemia dos colículos superiores e tálamo."
    ],
    "correctAnswer": 2,
    "explanation": "O trombo migrou da artéria vertebral para a artéria basilar (via perfusional comum posterior), causando isquemia das estruturas responsáveis pelo alerta (SRAA - núcleos da rafe e locus ceruleus).",
    "commentary": "A migração do trombo em direção cranial obstrui a artéria basilar. A basilar irriga o tronco cerebral superior, onde estão o locus ceruleus e núcleos da rafe, essenciais para o estado desperto (Sistema Reticular Ativador Ascendente).",
    "reference": "Blumenfeld, Hal. Neuroanatomy Through Clinical Cases. 3rd ed., Oxford University Press, 2021.",
    "tags": [
      "anatomia",
      "neurologia",
      "emergência"
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
    "id": "enamed-2025-61",
    "topography": "5.1",
    "topic": "Candidíase vaginal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 35 anos, diabética, com laqueadura tubária bilateral, procurou atendimento médico com queixa de prurido genital e disúria terminal, com 7 dias de evolução. Recentemente, fez uso de antibiótico para tratamento de abscesso dental. Ao exame especular, notava-se edema vulvar, hiperemia, fissura, corrimento esbranquiçado e teste das aminas negativo.\n\nCom base no agente etiológico mais provável, o tratamento é",
    "options": [
      "(A) miconazol, 1 aplicador, via vaginal, por 7 noites.",
      "(B) cefalexina, 2 g/dia, via oral, por 7 dias.",
      "(C) azitromicina 1 g/dia, via oral, por 10 dias.",
      "(D) metronidazol, 1 aplicador, via vaginal, por 10 noites."
    ],
    "correctAnswer": 0,
    "explanation": "O quadro clínico exposto é típico de candidíase vulvovaginal, que tem como fatores de risco proeminentes o diabetes mellitus e o uso recente de antibióticos de amplo espectro (que alteram a microbiota vaginal protetora, permitindo a proliferação fúngica). O achado de prurido, edema e hiperemia vulvar, corrimento esbranquiçado grumoso e teste das aminas negativo sela a hipótese de infecção por Candida spp. O tratamento padrão de primeira linha é o uso de antifúngicos tópicos intravaginais como o miconazol creme por 7 noites.",
    "commentary": "Cefalexina (B) e azitromicina (C) são antibióticos ineficazes contra fungos e agravariam o desequilíbrio da flora. Metronidazol (D) é o tratamento de escolha para vaginose bacteriana e tricomoníase, que tipicamente apresentam teste das aminas positivo e pH alterado.",
    "reference": "Protocolo de Infecções Sexualmente Transmissíveis (IST) - Ministério da Saúde / FEBRASGO",
    "tags": [
      "ginecologia",
      "obstetrícia",
      "candidíase",
      "corrimento vaginal",
      "saúde da mulher"
    ]
  },
  {
    "id": "enamed-2026-42",
    "topography": "11",
    "topic": "Bronquiolite",
    "module": "Pediatria",
    "text": "Lactente de 5 meses, prematuro de 32 semanas, com antecedente de displasia broncopulmonar, é levado pela mãe a uma Unidade de Pronto Atendimento, com relato de que, há 3 dias, iniciou quadro de coriza e tosse, com piora progressiva do estado geral e dificuldade para mamar nas últimas 24 horas. O exame físico mostra: FR 65 irpm; tiragem subcostal, sibilos e roncos à ausculta; SpO₂ 90% em ar ambiente.\n\nA conduta inicial nesse caso consiste em",
    "options": [
      "(A) oxigenoterapia e amoxicilina oral.",
      "(B) hidratação endovenosa e suporte ventilatório.",
      "(C) salbutamol inalatório e corticoide sistêmico.",
      "(D) fisioterapia respiratória e dexametasona intramuscular."
    ],
    "correctAnswer": 1,
    "explanation": "Bronquiolite viral aguda grave em lactente de alto risco (prematuro com displasia broncopulmonar): taquipneia importante, tiragem, SatO₂ 90% e dificuldade para mamar.\n\nO tratamento é de suporte: oxigenoterapia/suporte ventilatório conforme a gravidade e hidratação adequada (endovenosa ou por sonda quando a alimentação oral não é possível).",
    "commentary": "Antibióticos não tratam infecção viral sem sinais de bacteriana. Broncodilatadores e corticoides não são recomendados de rotina na bronquiolite. A fisioterapia respiratória não tem benefício comprovado. (Gabarito preliminar do INEP.)",
    "reference": "Sociedade Brasileira de Pediatria. Diretrizes para o manejo da bronquiolite viral aguda / AAP 2014",
    "tags": [
      "pediatria",
      "bronquiolite",
      "pneumologia"
    ]
  },
  {
    "id": "unifesp2025-14",
    "module": "Cirurgia",
    "text": "Mulher, 32 anos, vem ao ambulatório com tubo T devido estenose traqueal. Refere que está com esta órtese há 7 meses. Durante investigação complementar é realizada uma broncoscopia que evidencia estenose fixa, compreendendo 1º e 2º anéis traqueais sem processo inflamatório local.\n\nQual a conduta mais adequada?",
    "options": [
      "(A) Realizar a troca do tubo T.",
      "(B) Programar traqueoplastia.",
      "(C) Corticoterapia.",
      "(D) Cânula metálica."
    ],
    "correctAnswer": 1,
    "explanation": "Estenose traqueal fixa, curta (1º e 2º anéis), sem atividade inflamatória e já tratada com órtese (tubo T) por 7 meses: lesão cicatricial madura.\n\nSem inflamação e com segmento curto, a paciente é candidata ao tratamento definitivo com ressecção do segmento estenótico e anastomose término-terminal (traqueoplastia), que tem altas taxas de cura. O tubo T é uma medida temporária enquanto a lesão amadurece ou quando o paciente não pode ser operado.",
    "commentary": "Troca do tubo T (A): perpetua o tratamento paliativo em uma paciente candidata à correção definitiva.\n\nCorticoterapia (C): útil na fase inflamatória; não age sobre estenose fibrótica madura.\n\nCânula metálica (D): é uma traqueostomia definitiva, que não trata a estenose e compromete a fonação.",
    "reference": "Grillo HC — Surgery of the Trachea and Bronchi / Diretrizes da SBCT",
    "tags": [
      "cirurgia torácica",
      "estenose traqueal"
    ]
  },
  {
    "id": "unifesp2025-67",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 44 anos de idade, multípara, realizou a primeira mamografia da vida (quatro incidências básicas) que mostrou mamas lipossubstituídas com presença de calcificações heterogêneas localizadas na região retroareolar da mama esquerda, BI-RADS 0.\n\nQual é o complemento mamográfico adicional necessário para a classificação adequada?",
    "options": [
      "(A) Compressão localizada",
      "(B) Incidência craniocaudal exagerada",
      "(C) Ampliação",
      "(D) Incidência em perfil absoluto"
    ],
    "correctAnswer": 2,
    "explanation": "Calcificações classificadas como BI-RADS 0 precisam de avaliação adicional da morfologia e da distribuição para serem categorizadas (benignas, suspeitas ou altamente suspeitas).\n\nO complemento específico para calcificações é a magnificação (ampliação), em geral associada a compressão localizada, que mostra o formato, o número e a distribuição das partículas.",
    "commentary": "Compressão localizada (A): indicada principalmente para assimetrias e nódulos, para diferenciar sobreposição de tecido de lesão real.\n\nCraniocaudal exagerada (B): usada para lesões nas porções lateral ou medial posteriores não incluídas na CC padrão.\n\nPerfil absoluto (D): ajuda a localizar a lesão e a identificar calcificações em 'leite de cálcio', mas não substitui a ampliação para estudar a morfologia.",
    "reference": "ACR BI-RADS Atlas, 5ª ed. / Colégio Brasileiro de Radiologia",
    "tags": [
      "mastologia",
      "mamografia",
      "BI-RADS",
      "microcalcificações"
    ]
  },
  {
    "id": "hosbos2027-46",
    "module": "Ginecologia e Obstetrícia",
    "text": "O ciclo menstrual caracteriza-se por uma série de eventos que ocorrem em diversos níveis do eixo “hipotálamo-hipófise-ovário”.\n\nEm relação a esse ciclo, assinale a alternativa correta.",
    "options": [
      "(A) A hipófise posterior produz FSH, LH e TSH e cada hormônio é produzido por uma célula diferente.",
      "(B) A inibina é um peptídeo produzido no ovário pelas células da teca e está ligada a SHBG.",
      "(C) O GnRH é sintetizado no hipotálamo e é liberado de forma pulsátil na circulação porta-hipofisária.",
      "(D) O GnRH age sobre a neuro hipófise estimulando a secreção de FSH e LH.",
      "(E) Estrogênio e progesterona são gonadotrofinas que fazem feedback negativo na adeno-hipófise."
    ],
    "correctAnswer": 2,
    "explanation": "O GnRH é um decapeptídeo sintetizado no hipotálamo (núcleo arqueado) e liberado de forma pulsátil no sistema porta hipotálamo-hipofisário. A frequência e a amplitude desses pulsos determinam a secreção de FSH e LH pela adeno-hipófise.\n\nA liberação contínua, como ocorre com os análogos de GnRH, dessensibiliza os receptores e suprime o eixo.",
    "commentary": "Hipófise posterior produz FSH, LH e TSH (A): essas glicoproteínas são da adeno-hipófise (anterior); FSH e LH vêm do mesmo gonadotrofo.\n\nInibina da teca ligada à SHBG (B): a inibina é produzida pelas células da granulosa e não se liga à SHBG, que transporta esteroides sexuais.\n\nGnRH age sobre a neuro-hipófise (D): age sobre a adeno-hipófise.\n\nEstrogênio e progesterona são gonadotrofinas (E): são esteroides ovarianos; gonadotrofinas são FSH e LH.",
    "reference": "Speroff — Endocrinologia Ginecológica Clínica e Infertilidade / Febrasgo — Tratado de Ginecologia",
    "tags": [
      "ginecologia",
      "ciclo menstrual",
      "eixo hipotálamo-hipófise-ovário",
      "GnRH"
    ]
  },
  {
    "id": "usprp2025-85",
    "module": "Cirurgia",
    "text": "Menino, 8 meses de idade, vem encaminhado pelo pediatra para avaliação especializada, devido ao fato de não ter encontrado o testículo direito em bolsa escrotal. Criança nascida a termo, sem problemas de saúde. Exame físico geral sem anormalidades. Testículo esquerdo está tópico e aparentemente normotrófico. A bolsa escrotal direita está vazia.\n\nQual a medida mais adequada para condução deste paciente?",
    "options": [
      "(A) Solicitar ressonância magnética de abdome e pelve para pesquisa de gônadas.",
      "(B) Palpação do testículo no canal inguinal e tentar posicioná-lo na bolsa escrotal.",
      "(C) Indicar a cirurgia o mais rápido possível para preservar a fertilidade.",
      "(D) Solicitar ultrassom abdominal para pesquisa de gônadas."
    ],
    "correctAnswer": 2,
    "explanation": "Lactente de 8 meses com testículo direito fora da bolsa (criptorquidia unilateral). A descida espontânea ocorre quase sempre até os 3–6 meses de vida; depois dos 6 meses é muito rara.\n\nAs diretrizes de urologia pediátrica (AUA, EAU, SBU) recomendam a orquidopexia entre 6 e 12 meses (no máximo até 18 meses). A cirurgia precoce reduz o dano às células germinativas e facilita a vigilância do risco de neoplasia. Por isso, aos 8 meses, deve-se indicar a cirurgia o quanto antes.",
    "commentary": "RM (A): tem baixa acurácia para testículo intra-abdominal e não muda a conduta; testículo impalpável vai para laparoscopia.\n\nPalpar e posicionar na bolsa (B): faz parte do exame físico (diferencia o testículo retrátil), mas não é tratamento da criptorquidia já estabelecida aos 8 meses.\n\nUSG abdominal (D): não é recomendada de rotina (AUA, EAU), por não alterar a conduta.",
    "reference": "AUA Guideline — Evaluation and Treatment of Cryptorchidism (2014/2018) / EAU Paediatric Urology",
    "tags": [
      "cirurgia pediátrica",
      "urologia pediátrica",
      "criptorquidia",
      "orquidopexia"
    ],
    "alert": "O exame físico cuidadoso (alternativa B) é sempre o primeiro passo para diferenciar o testículo retrátil, que não precisa de cirurgia. O gabarito oficial (C) assume a criptorquidia já confirmada e enfatiza o momento da orquidopexia."
  },
  {
    "id": "susba2025-5",
    "topography": "3.1",
    "topic": "Hemorragia digestiva alta",
    "module": "Clínica Médica",
    "text": "Homem, 62 anos de idade, portador de hepatite C crônica, comparece ao Pronto-Socorro com hematêmese volumosa e melena há três dias. O paciente apresenta-se ictérico, com PA: 90x60mmHg, FR: 115bpm e confusão mental. Ao exame, há ascite moderada. A avaliação laboratorial revela hemoglobina de 5,8g/dL, plaquetas de 70.000/mm³, RNI: 2,5.\n\nCaso o paciente evolua com um quadro refratário, é correto afirmar que:",
    "options": [
      "(A) Deve-se iniciar betabloqueador intravenoso em bomba de infusão contínua.",
      "(B) Deve ser indicado um shunt portossistêmico intrahepático transjugular.",
      "(C) O próximo passo deve ser a escleroterapia das varizes esofágicas com adrenalina.",
      "(D) O balão de Sengstaken-Blakemore deve ser colocado e trocado a cada 24 horas."
    ],
    "correctAnswer": 1,
    "explanation": "Quando o sangramento varicoso persiste ou recidiva apesar de droga vasoativa e ligadura elástica, a terapia de resgate é o shunt portossistêmico intra-hepático transjugular (TIPS), que reduz a pressão portal de forma eficaz.\n\nO balão ou a prótese esofágica autoexpansível servem apenas como ponte até o TIPS. Em pacientes de alto risco (Child C 10–13 ou B > 7 com sangramento ativo) o TIPS pode ser indicado precocemente (preemptivo, em até 72 h).",
    "commentary": "Betabloqueador intravenoso (A): betabloqueadores são usados na profilaxia, e não no sangramento agudo; no choque, impedem a resposta compensatória.\n\nEscleroterapia com adrenalina (C): adrenalina é usada em úlcera péptica, não em varizes; a escleroterapia foi substituída pela ligadura.\n\nBalão trocado a cada 24 h (D): o balão é medida temporária (até cerca de 24 h) pelo risco de necrose e perfuração, como ponte para tratamento definitivo — não se mantém com trocas.",
    "reference": "Baveno VII (2022) / Sociedade Brasileira de Hepatologia",
    "tags": [
      "hepatologia",
      "hipertensão portal",
      "TIPS",
      "varizes esofágicas"
    ],
    "tip": "Varizes que sangram apesar de droga + ligadura: TIPS (balão só como ponte)."
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
    "id": "iog2026-11",
    "topography": "1.5",
    "topic": "Câncer de tireoide",
    "module": "Cirurgia",
    "text": "Paciente submetido a cirurgia de tireoidectomia total com esvaziamento nível VI por carcinoma papilífero de tireoide, sem intercorrências intraoperatórias. Alguns minutos após a extubação, o paciente cursou com estridor e necessidade de uso de musculatura acessória para respirar.\n\nQual estrutura deve ter sido comprometida durante a cirurgia?",
    "options": [
      "Nervos laríngeos inferiores.",
      "Pleura visceral.",
      "Parede posterior traqueia.",
      "Paratireoides."
    ],
    "correctAnswer": 0,
    "explanation": "Estridor com uso de musculatura acessória logo após a extubação de uma tireoidectomia total com esvaziamento central: lesão bilateral dos nervos laríngeos recorrentes (inferiores). As duas pregas vocais ficam paralisadas em posição paramediana, fechando a glote. É emergência: reintubação e, muitas vezes, traqueostomia.",
    "commentary": "Pleura visceral (B): uma lesão pleural causaria pneumotórax, não estridor.\n\nParede posterior da traqueia (C): lesão traqueal causaria enfisema e vazamento de ar, rara e geralmente percebida no intraoperatório.\n\nParatireoides (D): a hipocalcemia surge em 24–72 horas, com parestesias e tetania, não estridor imediato após a extubação.",
    "reference": "ATA 2015 — Guidelines for thyroid nodules and differentiated thyroid cancer / Sabiston — Tratado de Cirurgia",
    "tags": [
      "cirurgia de cabeça e pescoço",
      "tireoidectomia",
      "nervo laríngeo recorrente",
      "complicações pós-operatórias"
    ],
    "tip": "Estridor logo após extubar uma tireoidectomia: lesão bilateral do laríngeo recorrente."
  },
  {
    "id": "sespe2026-40",
    "topography": "3.1",
    "topic": "Doença hemorroidária",
    "module": "Cirurgia",
    "text": "Homem de 45 anos é atendido no pronto-socorro por queixa de dor (EVA 3) em região anal e tumoração local que surgiu há 4 dias. Relata apresentar dificuldade para defecar e classifica suas fezes como Bristol 1. Nega febre ou secreção. Ao exame proctológico, evidenciado nódulo doloroso, firme, de coloração azulada em região anal.\n\nDiante do quadro, qual a conduta mais apropriada?",
    "options": [
      "Trombectomia cirúrgica.",
      "Hemorroidectomia aberta.",
      "Antibioticoterapia.",
      "Tratamento conservador, incluindo analgésicos e banho de assento.",
      "Ligadura elástica."
    ],
    "correctAnswer": 3,
    "explanation": "Nódulo perianal azulado, firme e doloroso há 4 dias: trombose hemorroidária externa. A excisão do trombo é benéfica nas primeiras 72 horas, quando a dor é intensa. Após 72 horas, o trombo já está em reabsorção e a dor diminuindo (aqui EVA 3), então o tratamento é conservador: analgésicos, banho de assento, fibras e laxantes (as fezes são Bristol 1) para evitar esforço.",
    "commentary": "Trombectomia (A): indicada nas primeiras 48–72 horas com dor intensa.\n\nHemorroidectomia (B): para doença hemorroidária avançada sintomática, não para trombose externa isolada.\n\nAntibiótico (C): não há infecção.\n\nLigadura elástica (E): é para hemorroida interna, não para a externa trombosada.",
    "reference": "ASCRS 2024 — Clinical Practice Guidelines for hemorrhoids / SBCP",
    "tags": [
      "coloproctologia",
      "trombose hemorroidária",
      "doença hemorroidária",
      "tratamento conservador"
    ],
    "tip": "Trombose hemorroidária externa: < 72 h com muita dor → excisão; depois → conservador."
  },
  {
    "id": "hpp2026-1",
    "topography": "2.2",
    "topic": "Infarto agudo do miocárdio",
    "module": "Clínica Médica",
    "text": "Homem, 59 anos, tabagista, hipertenso, apresenta dor torácica súbita há 90 minutos. O ECG mostra supradesnivelamento do segmento ST em parede anterior. Ele está em um hospital do interior, e o centro de referência mais próximo para angioplastia fica a 2 horas de distância de ambulância. Qual a conduta imediata mais adequada?",
    "options": [
      "Transferir o paciente para o centro de referência após administrar AAS e Clopidogrel.",
      "Administrar AAS, Clopidogrel, Enoxaparina e realizar trombólise imediata.",
      "Realizar trombólise imediata, evitando outras terapias antitrombóticas pelo risco de sangramento.",
      "Seriar troponina para definir necessidade de transporte para o centro de referência."
    ],
    "correctAnswer": 1,
    "explanation": "IAM com supra de ST anterior, 90 minutos de dor, num hospital sem hemodinâmica e a 2 horas do centro de referência só de transporte. Somando o tempo de chegada, preparo e abertura da artéria, o tempo porta-balão previsto passa com folga dos 120 minutos aceitos para angioplastia primária.\n\nNesse cenário a escolha é a estratégia fármaco-invasiva: fibrinólise no próprio hospital (meta porta-agulha ≤ 30 minutos), sempre acompanhada de dupla antiagregação (AAS + clopidogrel) e anticoagulação (enoxaparina), e depois transferência para cateterismo em 2–24 horas (ou resgate, se a trombólise falhar).",
    "commentary": "Transferir só com AAS e clopidogrel (A): o atraso previsto passa de 120 minutos; transferir sem trombolisar adia a reperfusão e aumenta a área de necrose.\n\nTrombólise sem outros antitrombóticos (C): o fibrinolítico isolado tem mais reoclusão; AAS, clopidogrel e anticoagulante reduzem mortalidade e reinfarto, com aumento aceitável de sangramento.\n\nSeriar troponina (D): no IAM com supra o diagnóstico é clínico-eletrocardiográfico; esperar marcador só atrasa a reperfusão.",
    "reference": "Diretriz da SBC sobre IAM com supradesnivelamento do segmento ST / ESC 2023 — Síndromes coronarianas agudas",
    "tags": [
      "infarto agudo do miocárdio",
      "IAMCSST",
      "trombólise",
      "estratégia fármaco-invasiva"
    ],
    "tip": "Angioplastia em > 120 min? Trombolisa na origem com AAS + clopidogrel + enoxaparina."
  },
  {
    "id": "hpp2026-53",
    "topography": "11",
    "topic": "Puericultura",
    "module": "Pediatria",
    "text": "Um menino de 6 anos é levado à consulta médica com queixas de febre baixa, mal-estar geral e uma erupção cutânea que começou nas bochechas. A mãe relata que ele teve uma leve infecção respiratória há cerca de uma semana. Ao exame físico, observam-se lesões eritematosas bem delimitadas nas bochechas, descritas como \"face esbofeteada\", e uma erupção maculopapular que se espalha para o tronco e membros. Qual é o diagnóstico mais provável para essa criança?",
    "options": [
      "Roséola infecciosa",
      "Eritema Infeccioso",
      "Exantema Súbito",
      "Rubéola"
    ],
    "correctAnswer": 1,
    "explanation": "Criança em idade escolar com pródromo leve e exantema que começa como eritema intenso nas bochechas (\"face esbofeteada\") e depois se estende como exantema maculopapular rendilhado para tronco e membros: eritema infeccioso (quinta doença), causado pelo parvovírus B19.\n\nO exantema pode reaparecer com calor, sol ou exercício. Quando surge a erupção, a criança já não transmite. Atenção para gestantes (hidropisia fetal) e pacientes com anemia hemolítica (crise aplástica).",
    "commentary": "Roséola (A) e exantema súbito (C): são a mesma doença (HHV-6), em lactentes de 6 meses a 2 anos: febre alta por 3 dias e, quando a febre cede, exantema no tronco.\n\nRubéola (D): exantema rosado craniocaudal, com linfadenopatia retroauricular e occipital, sem face esbofeteada.",
    "reference": "SBP — Doenças exantemáticas / Nelson Textbook of Pediatrics",
    "tags": [
      "eritema infeccioso",
      "parvovírus B19",
      "doenças exantemáticas"
    ],
    "tip": "Face esbofeteada + rendilhado = parvovírus B19 (eritema infeccioso)."
  },
  {
    "id": "hsrc2026-20",
    "topography": "11",
    "topic": "Asma infantil",
    "module": "Pediatria",
    "text": "Uma criança de 4 anos de idade tem episódios recorrentes de sibilância e dispneia após infecções virais. Não há sintomas entre os episódios. Segundo a GINA 2025, a abordagem inicial mais apropriada para essa faixa etária é:",
    "options": [
      "Uso diário de ICS em baixa dose contínua.",
      "LABA contínuo por 3 meses.",
      "SABA isolado em todos os episódios.",
      "ICS intermitente iniciado com os sintomas.",
      "Anticolinérgico inalatório como monoterapia."
    ],
    "correctAnswer": 3,
    "explanation": "Criança de até 5 anos com sibilância apenas em episódios desencadeados por vírus, sem sintomas entre eles. A GINA propõe para esse perfil o uso de corticoide inalatório intermitente, iniciado no começo do quadro viral, associado a SABA de alívio. O corticoide diário fica para quem tem episódios frequentes ou sintomas entre as crises.",
    "commentary": "Corticoide inalatório diário (A): indicado se houver sintomas entre os episódios ou crises frequentes e graves.\n\nLABA contínuo (B): não é recomendado como terapia nessa faixa etária.\n\nSABA isolado (C): é o alívio, mas a GINA atual propõe acrescentar o corticoide intermitente na sibilância viral recorrente.\n\nAnticolinérgico em monoterapia (E): sem papel no controle.",
    "reference": "GINA 2025 — Children 5 years and younger",
    "tags": [
      "sibilância recorrente",
      "asma infantil",
      "corticoide inalatório intermitente",
      "GINA"
    ],
    "tip": "Menor de 5 anos com sibilância só nas viroses: corticoide inalatório intermitente + SABA."
  }
];
