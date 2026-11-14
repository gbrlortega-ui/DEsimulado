// Arquivo gerado por `npm run gen` a partir do banco de questões. Não editar à mão.
// O build e o servidor local regeneram este arquivo sozinhos; o `npm run validate` acusa se ficar desatualizado.
import type { Question } from '../types';

export const TOTAL_QUESTIONS = 2414;

export const COUNT_BY_AREA: Record<string, number> = {
  "Pediatria": 451,
  "Clínica Médica": 492,
  "Cirurgia": 430,
  "Ginecologia e Obstetrícia": 445,
  "Saúde Coletiva": 436,
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
  "Cirurgia|AMP": 20,
  "Clínica Médica|AMRIGS": 47,
  "Cirurgia|AMRIGS": 40,
  "Ginecologia e Obstetrícia|AMRIGS": 39,
  "Pediatria|AMRIGS": 40,
  "Saúde Coletiva|AMRIGS": 34
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
    "id": "tp2022-49",
    "topography": "11",
    "topic": "Anemia ferropriva",
    "module": "Pediatria",
    "text": "Lactente de 6 meses, nascido a termo com 3120g, em aleitamento materno exclusivo. Como deve ser a suplementação de ferro?",
    "options": [
      "(A) Iniciar suplementação de 2mg de ferro/kg/dia.",
      "(B) Iniciar suplementação de 1mg de ferro/kg/dia.",
      "(C) Não há necessidade de suplementação no momento.",
      "(D) Deveria ter iniciado com 30 dias de vida."
    ],
    "correctAnswer": 1,
    "explanation": "Lactente nascido a termo, com peso adequado (3.120 g) e sem outros fatores de risco, em aleitamento materno exclusivo, chega aos 6 meses sem nunca ter recebido ferro. Os estoques de ferro do nascimento se esgotam por volta dessa idade e o leite materno não cobre a demanda do crescimento, por isso a profilaxia é indicada.\n\nA dose profilática para o lactente a termo de peso adequado é 1 mg de ferro elementar/kg/dia, mantida até os 2 anos. A dose de 2 mg/kg/dia e o início com 30 dias de vida são reservados a prematuros e recém-nascidos de baixo peso.",
    "commentary": "2 mg/kg/dia (A): é a dose profilática para prematuros e baixo peso ao nascer (pode chegar a mais em muito baixo peso), não para o lactente a termo de peso adequado.\n\nSem necessidade de ferro (C): a profilaxia é universal nessa idade; aleitamento exclusivo não dispensa a suplementação.\n\nInício com 30 dias (D): esse início precoce é para prematuros e recém-nascidos de baixo peso.",
    "tip": "Ferro profilático: a termo e peso adequado, 1 mg/kg/dia até 2 anos; prematuro ou baixo peso, 2 mg/kg/dia desde 30 dias.",
    "reference": "Consenso sobre Anemia Ferropriva SBP.",
    "tags": [
      "nutrição",
      "hematologia"
    ]
  },
  {
    "id": "tp2019-45",
    "topography": "11",
    "topic": "Aleitamento materno",
    "module": "Pediatria",
    "text": "Recém-nascido (RN) nascido a termo, sem queixas e sem alterações ao exame físico.\n\nConsiderando-se que os exames pré-natais ao final da gestação apontaram infecção materna pelo vírus da imunodeficiência humana, a recomendação correta em relação à alimentação desse RN é:",
    "options": [
      "(A) Indicar aleitamento materno em regime de livre demanda.",
      "(B) Contraindicar a amamentação e prescrever fórmula láctea.",
      "(C) Indicar aleitamento materno com leite ordenhado após congelamento.",
      "(D) Contraindicar a amamentação e indicar aleitamento humano cruzado."
    ],
    "correctAnswer": 1,
    "explanation": "No Brasil, a infecção materna pelo HIV é contraindicação ao aleitamento materno, pelo risco de transmissão vertical. O recém-nascido deve receber fórmula láctea, fornecida pelo SUS, e a lactação da mãe deve ser inibida.",
    "commentary": "Leite ordenhado congelado não elimina o vírus. O aleitamento cruzado (por outra mulher) não é recomendado.",
    "reference": "Tratado de Pediatria – Sociedade Brasileira de Pediatria 4ª Edição / Ministério da Saúde. Protocolo clínico e diretrizes terapêuticas para manejo da infecção pelo HIV em crianças e adolescentes. Brasília, 2018.",
    "tags": [
      "pediatria",
      "aleitamento materno",
      "HIV"
    ]
  },
  {
    "id": "tp2022-36",
    "topography": "6.1",
    "topic": "Fibromialgia",
    "module": "Clínica Médica",
    "text": "Qual medicamento inibe a recaptação de serotonina e norepinefrina, sendo útil na fibromialgia?",
    "options": [
      "(A) Corticosteroide",
      "(B) Paracetamol",
      "(C) Nimesulide",
      "(D) Duloxetina"
    ],
    "correctAnswer": 3,
    "explanation": "Dor crônica generalizada com fadiga, sono não reparador e queixas cognitivas é o quadro da fibromialgia. O tratamento se apoia em exercício físico e educação; entre os fármacos, usam-se os que modulam as vias descendentes de controle da dor.\n\nA duloxetina é um inibidor da recaptação de serotonina e noradrenalina (IRSN) e é um dos medicamentos com eficácia na fibromialgia, ao lado da amitriptilina e da pregabalina. Das alternativas, é a única com esse mecanismo.",
    "commentary": "Corticosteroide (A): anti-inflamatório hormonal; a fibromialgia não é doença inflamatória e o corticoide não traz benefício.\n\nParacetamol (B): analgésico simples, sem ação sobre a recaptação de serotonina e noradrenalina e com pouco efeito nessa dor.\n\nNimesulida (C): anti-inflamatório não esteroide; também não age no mecanismo central de amplificação da dor da fibromialgia.",
    "tip": "Fibromialgia: exercício + amitriptilina, duloxetina (IRSN) ou pregabalina. Corticoide e AINE não.",
    "reference": "Expert opinion on pharmacotherapy, 2015.",
    "tags": [
      "reumatologia",
      "farmacologia"
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
    "id": "tp2024-80",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Politraumatizado grave (fraturas expostas, dor abdominal, lacerações). Qual o primeiro passo prioritário no ATLS?",
    "options": [
      "(A) Avaliação primária com controle da via aérea.",
      "(B) Avaliação neurológica detalhada.",
      "(C) Fluidos IV rápidos.",
      "(D) Radiografia de tórax."
    ],
    "correctAnswer": 0,
    "explanation": "No ATLS, o atendimento ao politraumatizado grave começa pela avaliação primária, seguindo a sequência ABCDE: via aérea com proteção da coluna cervical, respiração e ventilação, circulação com controle de hemorragia, avaliação neurológica e exposição com controle da temperatura. O que mata mais rápido é tratado primeiro, à medida que é encontrado.\n\nO paciente está inconsciente, o que por si só ameaça a via aérea, e tem lacerações na face; garantir a via aérea (com restrição de movimento da coluna cervical) vem antes das fraturas expostas e da dor abdominal. Hemorragia externa grave, se presente, é controlada de imediato junto com esse primeiro passo, como enfatizam os protocolos de atendimento pré-hospitalar.",
    "commentary": "Avaliação neurológica detalhada (B): na avaliação primária, o D é rápido (Glasgow, pupilas e sinais de lateralização); o exame neurológico completo fica para a avaliação secundária.\n\nFluidos intravenosos rápidos (C): a circulação é a etapa C; além disso, a reanimação do trauma prioriza hemoderivados e evita grandes volumes de cristaloide.\n\nRadiografia de tórax (D): é exame complementar da avaliação primária, mas não vem antes de garantir a via aérea.",
    "tip": "Politrauma: ABCDE na ordem; A = via aérea com proteção da cervical, sempre primeiro.",
    "reference": "ATLS 10ª ed.",
    "tags": [
      "trauma",
      "emergência"
    ]
  },
  {
    "id": "tp2025-70",
    "topography": "7.1",
    "topic": "Isquemia arterial aguda",
    "module": "Cirurgia",
    "text": "Homem, cisgênero, 60 anos, hipertenso, comparece ao serviço de urgência com dor intensa e súbita em membro inferior direito há 6 horas. Ao exame: ausculta cardíaca com bulhas arrítmicas; membro inferior direito com extremidade fria, pálida, sem pulsos palpáveis e sem alteração de trofismo. Qual conduta mais adequada?",
    "options": [
      "(A) Analgesia e anti-inflamatórios, aguardando melhora clínica para posterior avaliação cirúrgica.",
      "(B) Heparinização plena e angiotomografia do membro para decisão terapêutica com urgência.",
      "(C) Doppler arterial e fasciotomia profilática do membro para evitar síndrome compartimental.",
      "(D) Repouso físico e anticoagulação plena por três meses."
    ],
    "correctAnswer": 1,
    "explanation": "Na suspeita clínica de oclusão arterial aguda de membro (isquemia com viabilidade preservada), a conduta imediata consiste em heparinização plena (para cessar propagação do trombo) e angiotomografia urgente.",
    "commentary": "O doente apresenta quadro clássico de Oclusão Arterial Aguda de membro inferior, de importante etiologia provável embólica, sugerida pela associação de dor súbita severa e ritmo cardíaco arrítmico (sugestivo de fibrilamento atrial). A imediata heparinização sistêmica é indispensável para obstar a progressão de novos coágulos na vasculatura. A angiotomografia cervical/abdominal/ilíaco-femoral é fundamental na urgência para programar o desfecho operatório (trombectomia aberta, embolectomia de Fogarty ou terapia endovascular). Medidas conservadoras puras com repouso, sem o tratamento reconstrutivo imediato, estendem o tempo de anóxia tecidual à necrose irrecuperável.",
    "reference": "Rutherfords Vascular Surgery and Endovascular Therapy, 9ª ed., 2018.",
    "tags": [
      "cirurgia vascular",
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
    "id": "tp2019-86",
    "topography": "5.2",
    "topic": "Abortamento",
    "module": "Ginecologia e Obstetrícia",
    "text": "Primigesta, 28 anos de idade, gestação de 11 semanas, apresenta queixa de cólica em baixo ventre e sangramento vaginal de moderada intensidade há dois dias. Ao exame, encontra-se febril (37,8°C), PA: 110 x 70 mmHg e FC: 108bpm. Ao exame especular, observa-se grande quantidade de sangue vivo em fundo de saco vaginal, com odor fétido e orifício interno do colo uterino pérvio para 1 polpa digital.\n\nNesse caso, a conduta é:",
    "options": [
      "(A) Realizar esvaziamento uterino e antibioticoterapia.",
      "(B) Solicitar ultrassonografia e manter observação.",
      "(C) Iniciar antibioticoterapia e manter observação.",
      "(D) Realizar apenas aspiração manual intrauterina."
    ],
    "correctAnswer": 0,
    "explanation": "Abortamento com colo pérvio, sangramento, febre, taquicardia e odor fétido: abortamento infectado.\n\nA conduta é antibioticoterapia de amplo espectro e esvaziamento uterino (após o início dos antibióticos), para remover o foco infeccioso.",
    "commentary": "Observação expectante é inadequada diante da infecção. Antibiótico sem esvaziamento mantém o foco. Aspiração sem antibiótico expõe ao risco de sepse.",
    "reference": "Zugaib, M & Francisco RP. Obstetrícia. Editora Manole, 2017 Duarte G, et al. Protocolos de Conduta em Gestação de Alto Risco, 2003",
    "tags": [
      "obstetrícia",
      "abortamento"
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
    "id": "enamed-2025-32",
    "topography": "5.2",
    "topic": "Pré-eclâmpsia",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente G5P3C1, 35 anos, idade gestacional de 15 semanas por ecografia realizada com 8 semanas, hipertensa crônica em uso de enalapril, antecedente de pré-eclâmpsia. Comparece à consulta de pré-natal na Unidade Básica de Saúde (UBS) com pressão arterial de 140 × 90 mmHg.\n\nQual é a conduta medicamentosa indicada para essa paciente?",
    "options": [
      "(A) Captopril, varfarina e ácido acetilsalicílico.",
      "(B) Furosemida, varfarina e carbonato de cálcio.",
      "(C) Losartana, enoxaparina e carbonato de cálcio.",
      "(D) Alfa-metildopa, ácido acetilsalicílico e carbonato de cálcio."
    ],
    "correctAnswer": 3,
    "explanation": "A paciente apresenta hipertensão arterial crônica na gestação e antecedente de pré-eclâmpsia, configurando alto risco obstétrico. O enalapril (IECA) deve ser suspenso imediatamente, pois inibidores da enzima conversora de angiotensina são teratogênicos e contraindicados na gravidez. Entre os anti-hipertensivos seguros, a alfa-metildopa é a escolha padrão de primeira linha. Adicionalmente, gestantes com alto risco para pré-eclâmpsia se beneficiam de ácido acetilsalicílico (AAS) em baixa dose (iniciado preferencialmente antes de 16 semanas) associado à suplementação de carbonato de cálcio.",
    "commentary": "As demais alternativas contêm fármacos formalmente contraindicados na gestação, como varfarina (anticoagulante oral altamente teratogênico), losartana (BRA) e captopril (IECA).",
    "reference": "Diretrizes da FEBRASGO / Sociedade Brasileira de Cardiologia",
    "tags": [
      "ginecologia",
      "obstetrícia",
      "hipertensão na gravidez",
      "pré-eclâmpsia"
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
    "id": "unifesp2025-11",
    "topography": "3.1",
    "topic": "Diverticulose/diverticulite",
    "module": "Cirurgia",
    "text": "Homem, 70 anos de idade, com doença diverticular do cólon, apresenta-se estável hemodinamicamente, com dor abdominal intensa, febre e leucócitose. A tomografia computadorizada mostra um abscesso pericólico de 5 cm associado a diverticulite aguda.\n\nQual é a conduta inicial mais adequada?",
    "options": [
      "(A) Antibióticos intravenosos e observação.",
      "(B) Colectomia segmentar de urgência.",
      "(C) Cirurgia laparoscópica para drenagem e lavagem peritoneal.",
      "(D) Drenagem percutânea do abscesso guiada por imagem."
    ],
    "correctAnswer": 3,
    "explanation": "Diverticulite aguda complicada com abscesso pericólico de 5 cm (Hinchey Ib/II), em paciente estável.\n\nAbscessos maiores que 3–4 cm respondem mal só ao antibiótico, e a conduta inicial é a drenagem percutânea guiada por imagem associada à antibioticoterapia. Isso controla a sepse e evita a cirurgia de urgência. Se a cirurgia for necessária depois, ela pode ser feita de forma eletiva e em um tempo.",
    "commentary": "Antibiótico e observação (A): adequados para abscessos pequenos (< 3–4 cm).\n\nColectomia de urgência (B): reservada para peritonite generalizada (Hinchey III/IV) ou falha do tratamento conservador.\n\nLavagem laparoscópica (C): opção discutível na peritonite purulenta (Hinchey III), não no abscesso localizado drenável por via percutânea.",
    "reference": "Diretriz ASCRS 2020 para diverticulite / Classificação de Hinchey",
    "tags": [
      "coloproctologia",
      "diverticulite",
      "abscesso"
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
    "id": "hosbos2027-49",
    "topography": "5.1",
    "topic": "Sangramento uterino anormal",
    "module": "Ginecologia e Obstetrícia",
    "text": "G.B.V., 18 anos, com queixa de amenorreia primária. Ao exame físico: estatura 1,75m, IMC 21 kg/m², mamas desenvolvidas (Tanner M4), pelos pubianos e axilares escassos (Tanner P1) e abaulamento sugestivo de hérnia inguinal bilateral. Paciente nega atividade sexual. Ultrassom pélvico revela: ausência de útero e ovários.\n\nDe acordo com o caso acima, assinale a alternativa que representa o diagnóstico mais provável.",
    "options": [
      "(A) Síndrome de Mayer-Rokitansky-Kuster-Hauser (Agenesia mulleriana).",
      "(B) Disgenesia gonadal pura (Síndrome de Swyer).",
      "(C) Síndrome da insensibilidade completa aos androgênios.",
      "(D) Hiperplasia adrenal congênita forma não-clássica.",
      "(E) Síndrome de Turner."
    ],
    "correctAnswer": 2,
    "explanation": "Amenorreia primária em fenótipo feminino alto, com mamas bem desenvolvidas, pelos pubianos e axilares ausentes ou escassos, hérnias inguinais bilaterais (testículos) e ausência de útero e ovários: síndrome de insensibilidade completa aos androgênios (cariótipo 46,XY).\n\nOs testículos produzem testosterona, que é aromatizada em estrogênio (por isso as mamas), mas os receptores androgênicos não funcionam (por isso não há pelos). O hormônio antimülleriano impede a formação de útero e trompas.",
    "commentary": "MRKH (A): agenesia mülleriana em 46,XX, com ovários normais e pelos normais.\n\nDisgenesia gonadal pura (B): gônadas em fita sem estrogênio, logo sem desenvolvimento mamário, e com útero presente.\n\nHAC não clássica (D): causa hiperandrogenismo, com útero e ovários presentes.\n\nTurner (E): baixa estatura, sem mamas (falência ovariana) e com útero presente.",
    "reference": "Speroff — Endocrinologia Ginecológica Clínica / Febrasgo — Amenorreia",
    "tags": [
      "ginecologia",
      "amenorreia primária",
      "insensibilidade androgênica",
      "distúrbios da diferenciação sexual"
    ]
  },
  {
    "id": "scmbh2026-10",
    "topography": "14",
    "topic": "Queimaduras",
    "module": "Cirurgia",
    "text": "Uma senhora leucodérmica, com 34 anos de idade, estava cozinhando, quando entornou uma grande panela de água fervendo sobre ela, queimando toda a parte anterior do tórax e do abdome, bem como os dois membros superiores completamente. Ela foi levada ao hospital para tratamento.\n\nQual foi a extensão de sua queimadura?",
    "options": [
      "(A) 36%",
      "(B) 44%",
      "(C) 27%",
      "(D) 22%"
    ],
    "correctAnswer": 2,
    "explanation": "Pela regra dos nove de Wallace (adulto):\n\n• Tronco anterior (tórax e abdome): 18%\n• Cada membro superior completo: 9%, os dois somam 18%\n\nTotal: 36%. O gabarito oficial indica 27%, mas o cálculo correto é 36%, que também é aceito aqui.",
    "commentary": "36% (A): é o valor correto pela regra dos nove; o gabarito oficial não o considerou.\n\n44% (B): superestima a área queimada.\n\n22% (D): subestima a área queimada.",
    "reference": "ATLS — Lesões térmicas / Cartilha para tratamento de emergência das queimaduras (MS)",
    "tags": [
      "cirurgia plástica",
      "queimaduras",
      "regra dos nove",
      "superfície corporal queimada"
    ],
    "alsoAccepted": [
      0
    ],
    "alert": "Gabarito oficial discutível: pela regra dos nove, tronco anterior (18%) mais os dois membros superiores (18%) somam 36% (alternativa A). A alternativa A também é aceita como correta."
  },
  {
    "id": "hiae2025-7",
    "topography": "2.2",
    "topic": "Hipertensão arterial sistêmica",
    "module": "Clínica Médica",
    "text": "Paciente, 59 anos, hipertenso, sedentário, obeso, em uso de enalapril 20 mg 12/12 horas, anlodipino 10 mg/dia, clortalidona 25 mg/dia, espironolactona 25 mg/dia e carvedilol 25 mg 12/12 horas. Apesar de ser aderente às medicações em uso, mantém pressão não controlada, com aferições acima de 140/90 mmHg. Com base no caso clínico, assinale a alternativa correta em relação ao manejo ambulatorial desse paciente.",
    "options": [
      "(A) Substituir a clortalidona por hidroclorotiazida, pois é o diurético de escolha em hipertensão resistente.",
      "(B) Associar diurético de alça, como a furosemida e encaminhar ao cardiologista.",
      "(C) Suspender a espironolactona pela falha terapêutica e associar hidralazina 50 mg 8/8 horas.",
      "(D) Solicitar exames para investigação de causas secundárias de hipertensão e associar clonidina."
    ],
    "correctAnswer": 3,
    "explanation": "Pressão não controlada com 5 classes em dose plena, incluindo diurético tiazídico-like e espironolactona, com boa adesão: hipertensão resistente (refratária). Deve-se investigar causas secundárias (hiperaldosteronismo, apneia do sono, doença renal, estenose de artéria renal) e associar outro fármaco, como clonidina (ou hidralazina, já que o betabloqueador está em uso).",
    "commentary": "Trocar por hidroclorotiazida (A): a clortalidona é mais potente e de ação mais longa; é o tiazídico preferido.\n\nDiurético de alça (B): só na doença renal crônica avançada (TFG < 30) ou na congestão.\n\nSuspender espironolactona (C): ela é o quarto fármaco mais eficaz na hipertensão resistente (estudo PATHWAY-2).",
    "reference": "Diretriz Brasileira de Hipertensão Arterial (2020/2025)",
    "tags": [
      "cardiologia",
      "hipertensão resistente",
      "hipertensão secundária",
      "clonidina"
    ],
    "tip": "Hipertensão resistente: confirme adesão e MAPA, investigue causa secundária e use espironolactona."
  },
  {
    "id": "unimedpb2026-5",
    "topography": "7.2",
    "topic": "Escabiose",
    "module": "Pediatria",
    "text": "Uma criança de 5 anos apresenta prurido intenso há 3 semanas, com piora à noite. No exame físico, observam-se pápulas eritematosas, escoriações e lesões agrupadas nas axilas, região periumbilical e nas mãos. A mãe relata que o avô, que mora na mesma casa, também tem “muita coceira nas mãos”. Qual conduta mais adequada para esse caso?",
    "options": [
      "Tratar apenas a criança com ivermectina.",
      "Prescrever hidrocortisona tópica para reduzir o prurido.",
      "Solicitar exame parasitológico da pele antes de iniciar o tratamento, pois o diagnóstico sempre exige confirmação.",
      "Iniciar permetrina 5% para a criança e tratar simultaneamente todos os contatos domiciliares, mesmo assintomáticos.",
      "Evitar retorno escolar por 10 dias, mesmo após início do tratamento, devido à alta transmissibilidade."
    ],
    "correctAnswer": 3,
    "explanation": "Prurido intenso com piora noturna, pápulas e escoriações em axilas, região periumbilical e mãos, e um familiar com o mesmo prurido: quadro típico de escabiose, cujo diagnóstico é clínico-epidemiológico.\n\nA conduta é tratar o paciente com escabicida (permetrina 5% é a primeira escolha em crianças, aplicada do pescoço para baixo e repetida em 7 dias) e tratar todos os contatos domiciliares ao mesmo tempo, mesmo sem sintomas, para evitar reinfestação. Roupas de cama e roupas usadas devem ser lavadas em água quente.",
    "commentary": "Só a criança com ivermectina (A): sem tratar os contatos há reinfestação; além disso, a ivermectina não é a primeira escolha em crianças pequenas (evitada abaixo de 15 kg).\n\nHidrocortisona (B): alivia o prurido, mas não elimina o ácaro.\n\nExame parasitológico obrigatório (C): o diagnóstico é clínico; o raspado tem baixa sensibilidade e não deve atrasar o tratamento.\n\nAfastamento por 10 dias (E): a criança pode voltar à escola 24 horas após o início do tratamento.",
    "reference": "SBD — Escabiose / Ministério da Saúde — Protocolo de dermatologia na Atenção Básica",
    "tags": [
      "dermatologia",
      "escabiose",
      "permetrina",
      "contatos domiciliares"
    ],
    "tip": "Escabiose: trate o paciente e TODOS da casa no mesmo dia."
  },
  {
    "id": "iog2026-48",
    "topography": "10",
    "topic": "Meningococcemia",
    "module": "Saúde Coletiva",
    "text": "Dentre as alternativas a seguir, qual está correta sobre a epidemiologia da doença meningocócica?",
    "options": [
      "A transmissão da Neisseria meningitidis ocorre predominantemente no domicílio.",
      "Menores de 5 anos de idade são os mais frequentes portadores do agente etiológico na orofaringe.",
      "A ocorrência da doença meningocócica é sazonal, predominando nos meses quentes e úmidos.",
      "A patogenicidade e a infectividade da Neisseria meningitidis são altas."
    ],
    "correctAnswer": 0,
    "explanation": "A Neisseria meningitidis é transmitida por gotículas e secreções respiratórias, por contato próximo e prolongado, e o ambiente domiciliar é onde se concentra o maior risco de transmissão — por isso a quimioprofilaxia é dirigida aos contatos íntimos (domiciliares, creche, quem dormiu no mesmo ambiente).",
    "commentary": "Menores de 5 anos como principais portadores (B): o estado de portador é mais frequente em adolescentes e adultos jovens; as crianças pequenas são as que mais adoecem.\n\nPredomínio em meses quentes e úmidos (C): a doença predomina no outono e inverno, com aglomeração em ambientes fechados.\n\nAlta patogenicidade e infectividade (D): a infectividade é baixa (muitos portadores assintomáticos e poucos doentes), embora a patogenicidade e a virulência sejam altas.",
    "reference": "Ministério da Saúde — Guia de Vigilância em Saúde (doença meningocócica)",
    "tags": [
      "vigilância epidemiológica",
      "doença meningocócica",
      "meningococo",
      "quimioprofilaxia"
    ],
    "tip": "Meningococo: portador = adolescente/adulto jovem; doente = criança; transmissão = domicílio."
  },
  {
    "id": "sespe2026-78",
    "topography": "3.1",
    "module": "Pediatria",
    "text": "Um paciente, 8 anos, evoluindo com vômitos diários, seletividade alimentar, disfagia para sólidos (só consegue ingerir alimentos em pequenos pedaços e sempre se alimenta tomando água ou suco). Tem dermatite atópica e asma, sendo acompanhado em um ambulatório de alergologia pediátrica.\n\nO diagnóstico mais provável e exame necessário para confirmar é o seguinte:",
    "options": [
      "Refluxo gastroesofágico/ estudo contrastado do esôfago, estômago e duodeno (EED).",
      "Esofagite eosinofílica/ Endoscopia digestiva alta com biópsias de esôfago.",
      "Acalásia congênita/ pHmetria esofágica de dois canais.",
      "Estenose esofágica / estudo contrastado do esôfago, estômago e duodeno (EED).",
      "Gastrite por Helicobacter pylori / Teste respiratório da ureia."
    ],
    "correctAnswer": 1,
    "explanation": "Escolar atópico (asma, dermatite atópica) com disfagia para sólidos, vômitos e estratégias de compensação (cortar a comida em pedaços pequenos, beber líquido para engolir): quadro típico de esofagite eosinofílica. O diagnóstico é feito por endoscopia digestiva alta com biópsias em vários níveis do esôfago, mostrando ≥ 15 eosinófilos por campo de grande aumento.",
    "commentary": "Refluxo com EED (A): o refluxo não costuma causar disfagia com impactação, e o EED não diagnostica esofagite.\n\nAcalasia com pHmetria (C): a acalasia é rara na infância e se diagnostica por manometria.\n\nEstenose esofágica (D): exigiria causa (cáustico, cirurgia), e a esofagite eosinofílica pode ser a causa da estenose.\n\nH. pylori (E): não causa disfagia.",
    "reference": "Consenso internacional de esofagite eosinofílica (AGREE 2018) / SBP",
    "tags": [
      "gastroenterologia pediátrica",
      "esofagite eosinofílica",
      "disfagia",
      "atopia"
    ],
    "tip": "Criança atópica com disfagia para sólidos: esofagite eosinofílica → EDA com biópsias."
  },
  {
    "id": "hpp2026-42",
    "topography": "11",
    "topic": "Anemia ferropriva",
    "module": "Pediatria",
    "text": "Um menino de 7 anos, morador da zona rural, é levado ao posto de saúde por fadiga, palidez e baixo rendimento escolar. A mãe refere que ele apresenta dor abdominal vaga, baixo ganho ponderal, e quando não está na escola, costuma brincar no quintal e no campo com os amigos. Ao exame apresentou sopro sistólico fraco em bordo esternal esquerdo. Qual o diagnóstico mais provável?",
    "options": [
      "Ascaridíase",
      "Ancilostomíase",
      "Tricuríase",
      "Enterobíase"
    ],
    "correctAnswer": 1,
    "explanation": "Criança da zona rural que brinca descalça no quintal e no campo, com palidez, fadiga, baixo rendimento escolar, dor abdominal vaga e sopro sistólico (sopro funcional da anemia): anemia ferropriva por perda crônica de sangue intestinal.\n\nO quadro é típico da ancilostomíase (Ancylostoma duodenale/Necator americanus), cujas larvas penetram pela pele em contato com o solo contaminado e, já adultas no intestino, sugam sangue da mucosa. Tratamento: albendazol e reposição de ferro.",
    "commentary": "Ascaridíase (A): infecção por ingestão de ovos; causa dor abdominal, sintomas pulmonares (Löffler) e obstrução intestinal, mas não é causa clássica de anemia importante.\n\nTricuríase (C): infestação maciça causa disenteria, prolapso retal e anemia, mas a transmissão é por ingestão de ovos, sem relação com andar descalço.\n\nEnterobíase (D): prurido anal noturno, sem anemia.",
    "reference": "Ministério da Saúde — Doenças infecciosas e parasitárias: guia de bolso / SBP",
    "tags": [
      "ancilostomíase",
      "parasitoses intestinais",
      "anemia ferropriva",
      "geo-helmintíases"
    ],
    "tip": "Pé descalço + anemia ferropriva = ancilostomíase (amarelão)."
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
    "id": "amp2026-24",
    "topography": "5.2",
    "topic": "Infecções na gestação",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante de 22 anos, G1P0, com 10 semanas de gestação, traz sorologia com IgG e IgM reagentes para Toxoplasma gondii. Ela está assintomática e sem alterações no exame físico. Não há exames prévios disponíveis. Assinale a alternativa que considera o diagnóstico mais provável e a conduta inicial, respectivamente, para essa paciente.",
    "options": [
      "Infecção antiga: manter pré-natal habitual e repetir sorologia no terceiro trimestre.",
      "Sorologia falsa-positiva: solicitar PCR para toxoplasma no sangue materno e repetir IgM em 2 semanas.",
      "Infecção recente: indicar esquema triplo com sulfadiazina, pirimetamina e ácido folínico por 6 semanas.",
      "Infecção recente: iniciar espiramicina imediatamente e encaminhar para ultrassonografia morfológica precoce.",
      "Infecção de data indeterminada: solicitar teste de avidez da IgG e iniciar espiramicina enquanto aguarda resultado."
    ],
    "correctAnswer": 4,
    "explanation": "IgG e IgM reagentes no primeiro trimestre, sem exames anteriores: a IgM pode persistir por meses ou anos, então não se sabe se a infecção é recente ou antiga — data indeterminada.\n\nA conduta é pedir o teste de avidez de IgG (avidez alta antes de 16 semanas indica infecção há mais de 3–4 meses, anterior à gestação) e iniciar espiramicina enquanto se aguarda, para reduzir a transmissão vertical.",
    "commentary": "Infecção antiga e pré-natal habitual (A): sem avidez não se pode afirmar que é antiga.\n\nFalso-positivo e PCR materna (B): a PCR no sangue materno não é o exame de escolha; a avidez esclarece a data.\n\nInfecção recente com esquema tríplice (C): o esquema tríplice é para infecção fetal confirmada (PCR no líquido amniótico) ou após 16–18 semanas em casos selecionados; e não está provado que a infecção seja recente.\n\nInfecção recente com espiramicina (D): a espiramicina está correta, mas não se pode afirmar que a infecção é recente.",
    "reference": "Ministério da Saúde — Protocolo de toxoplasmose gestacional e congênita (2022) / FEBRASGO",
    "tags": [
      "toxoplasmose na gestação",
      "teste de avidez",
      "espiramicina"
    ],
    "tip": "IgG + IgM no 1º trimestre: avidez de IgG e espiramicina enquanto espera."
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
    "id": "amrigs2025-88",
    "module": "Saúde Coletiva",
    "text": "Assinale a alternativa que apresenta doenças ou agravos que se enquadram como situação de notificação compulsória imediata (até 24 horas) no Brasil.",
    "options": [
      "Tuberculose e intoxicação exógena.",
      "Esquistossomose e HIV/AIDS.",
      "Raiva humana e síndrome da rubéola congênita.",
      "Sífilis e casos de dengue."
    ],
    "correctAnswer": 2,
    "explanation": "Pela Lista Nacional de Notificação Compulsória (Portaria de Consolidação nº 4/2017, atualizada), raiva humana e síndrome da rubéola congênita são de notificação imediata (em até 24 horas) às três esferas de gestão.",
    "commentary": "Tuberculose e intoxicação exógena (A): notificação semanal.\n\nEsquistossomose e HIV/aids (B): notificação semanal (esquistossomose é imediata só em área não endêmica).\n\nSífilis e dengue (D): notificação semanal; a dengue só é imediata nos óbitos.",
    "reference": "Ministério da Saúde — Lista Nacional de Notificação Compulsória (Portaria GM/MS nº 217/2023 e atualizações)",
    "tags": [
      "notificação compulsória",
      "vigilância epidemiológica",
      "raiva humana",
      "rubéola congênita"
    ],
    "tip": "Imediatas clássicas: raiva, rubéola, sarampo, botulismo, cólera, febre amarela, pólio, PFA."
  }
];
