// Arquivo gerado por `npm run gen` a partir do banco de questões. Não editar à mão.
// O build e o servidor local regeneram este arquivo sozinhos; o `npm run validate` acusa se ficar desatualizado.
import type { Question } from '../types';

export const TOTAL_QUESTIONS = 2314;

export const COUNT_BY_AREA: Record<string, number> = {
  "Pediatria": 431,
  "Clínica Médica": 470,
  "Cirurgia": 410,
  "Ginecologia e Obstetrícia": 425,
  "Saúde Coletiva": 418,
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
    "key": "AMRIGS",
    "label": "AMRIGS",
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
  "Cirurgia|AMP": 20,
  "Clínica Médica|AMRIGS": 25,
  "Cirurgia|AMRIGS": 20,
  "Ginecologia e Obstetrícia|AMRIGS": 19,
  "Pediatria|AMRIGS": 20,
  "Saúde Coletiva|AMRIGS": 16
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
    "id": "tp2022-48",
    "topography": "11",
    "topic": "Desidratação",
    "module": "Pediatria",
    "text": "Criança de 3 anos com diarreia intensa, sonolência, taquicardia e perfusão periférica de 5 segundos. Qual a conduta e prováveis distúrbios?",
    "options": [
      "(A) Hidratação endovenosa imediata (SF 0,9% 20mL/kg aberto); acidose metabólica e hipocalemia.",
      "(B) Hidratação oral (TRO); alcalose metabólica.",
      "(C) Hidratação venosa em 20 min; acidose lática apenas.",
      "(D) Hidratação venosa escalonada (Ringer); hipercalcemia."
    ],
    "correctAnswer": 0,
    "explanation": "Choque hipovolêmico por diarreia exige expansão rápida; a perda de bicarbonato e K+ pelas fezes causa acidose e hipocalemia.",
    "commentary": "O choque exige expansão com cristaloides. A acidose metabólica é esperada pela perda de base nas fezes e má perfusão. A hipocalemia justifica a fraqueza muscular.",
    "reference": "Guia Prático SBP - Diarreia Aguda. 2017.",
    "tags": [
      "gastroenterologia",
      "emergência"
    ]
  },
  {
    "id": "tp2026-58",
    "module": "Pediatria",
    "text": "Uma criança de 3 anos é levada à Unidade Básica de Saúde (UBS) pela mãe, devido a infecções recorrentes desde o primeiro ano de vida. A mãe relata episódios frequentes de infecções bacterianas como pneumonia, otite e infecções de pele, que muitas vezes necessitam de antibióticos e internações. A criança apresenta baixo ganho de peso para a idade. Diante desses achados, qual é a conduta inicial mais adequada?",
    "options": [
      "(A) Prescrever apenas vitaminas e acompanhar na UBS.",
      "(B) Iniciar antibiótico profilático, suplementação de zinco e manter acompanhamento na UBS.",
      "(C) Solicitar hemograma e avaliação imunológica inicial e referenciar ao especialista em imunologia/pediatria.",
      "(D) Tranquilizar a mãe, pois infecções são comuns nessa idade, 8-10 episódios/ano são normais na primeira infância."
    ],
    "correctAnswer": 2,
    "explanation": "Crianças com infecções bacterianas recorrentes de vias aéreas e de pele associadas a déficit pôndero-estatural devem ser investigadas para erros inatos da imunidade (imunodeficiências primárias) com triagem básica e especialista.",
    "commentary": "Comentários sobre a resposta correta:\n(C) A ocorrência de infecções bacterianas de repetição e com gravidade (pneumonias, otites purulentas e infecções de pele de repetição exigindo internações e antibioticoterapia sistêmica) associada ao déficit de ganho de peso constitui um importante sinal de alerta para Erros Inatos da Imunidade (Imunodeficiências Primárias). A conduta correta inicial consiste na realização de exames laboratoriais básicos de triagem (hemograma completo para avaliar neutrófilos e linfócitos, dosagem de imunoglobulinas séricas IgG, IgA e IgM) concomitante ao encaminhamento ao pediatra especialista em alergia/imunologia para investigação pormenorizada.\n\nComentários sobre os distratores:\n(A, B) Suplementação vitamínica isolada ou antibioticoterapia profilática empírica sem um diagnóstico de base definido são inócuas e atrasam o tratamento curativo ou preventivo adequado.\n(D) Embora episódios de infecções virais simples e benignas possam ocorrer em pré-escolares em creches, infecções bacterianas sistêmicas profundas associadas a falha no crescimento pôndero-estatural nunca devem ser minimizadas ou consideradas normais.",
    "reference": "RICH, Robert R. et al. Clinical Immunology: Principles and Practice. 5. ed. Philadelphia: Elsevier, 2019. | SBP. Sinais de Alerta para Erros Inatos da Imunidade.",
    "tags": [
      "alergia e imunologia",
      "atenção primária"
    ]
  },
  {
    "id": "tp2022-31",
    "topography": "9",
    "topic": "Anemia ferropriva",
    "module": "Clínica Médica",
    "text": "Mulher de 60 anos com anemia ferropriva (Hb 7,0, VCM 63, HCM 20). Nega sangramento. Qual a conduta mais adequada para essa paciente?",
    "options": [
      "(A) Iniciar sulfato ferroso oral e repetir hemograma em 3 meses.",
      "(B) Solicitar endoscopia digestiva alta e colonoscopia para investigação da anemia.",
      "(C) Solicitar exame de sangue oculto nas fezes (3 amostras) para diagnóstico de sangramento.",
      "(D) Solicitar cintilografia com hemácias marcadas para avaliação de sangramento no intestino delgado."
    ],
    "correctAnswer": 1,
    "explanation": "Anemia microcítica e hipocrômica (VCM 63, HCM 20), RDW alto e reticulócitos baixos em mulher de 60 anos, já na pós-menopausa, configuram anemia ferropriva. Nessa idade, sem menstruação, a falta de ferro é considerada perda sanguínea oculta pelo tubo digestivo até prova em contrário, mesmo sem relato de sangramento.\n\nO trato gastrointestinal concentra as causas mais importantes, como doença péptica e câncer colorretal (o de cólon direito pode sangrar sem mudar o hábito intestinal). Por isso a conduta é investigar com endoscopia digestiva alta e colonoscopia, enquanto se repõe o ferro.",
    "commentary": "Ferro oral e repetir em 3 meses (A): tratar sem investigar pode atrasar o diagnóstico de um câncer. Além disso, a reposição não deve parar assim que a hemoglobina melhora; ela continua até repor os estoques (ferritina).\n\nSangue oculto nas fezes (C): é teste de rastreamento em pessoas sem sintomas. Diante de anemia ferropriva o resultado negativo não exclui lesão, e a endoscopia será necessária de qualquer forma.\n\nCintilografia com hemácias marcadas (D): serve para localizar sangramento ativo, geralmente quando a endoscopia alta e a colonoscopia não acharam a fonte. Não é exame inicial.",
    "tip": "Anemia ferropriva em homem ou mulher pós-menopausa: endoscopia digestiva alta + colonoscopia.",
    "reference": "Hoffbrand, A.V; MOSS, P. A. H. Fundamentos em hematologia.",
    "tags": [
      "hematologia",
      "gastroenterologia",
      "geriatria"
    ]
  },
  {
    "id": "tp2021-40",
    "topography": "12",
    "topic": "Delirium",
    "module": "Clínica Médica",
    "text": "Homem de 85 anos está internado para realização de procedimento cirúrgico eletivo devido à hiperplasia prostática benigna. Durante a madrugada passa a apresentar flutuações da consciência, desorientação, períodos de agitação intercalados com apatia, frases desconexas e agressividade verbal. Família refere ausência de episódios prévios e que o paciente era independente e lúcido. Qual o diagnóstico e a terapia farmacológica adequada?",
    "options": [
      "(A) Doença de Alzheimer; benzodiazepínico de curta duração.",
      "(B) Delirium; benzodiazepínico de curta duração.",
      "(C) Doença de Alzheimer; benzodiazepínico de longa duração.",
      "(D) Delirium; neuroléptico da classe das butirofenonas."
    ],
    "correctAnswer": 3,
    "explanation": "A instalação aguda com curso flutuante característico de agitação alternada com apatia, desorientação e agressividade no pós/pré-operatório de idoso hígido ilustra o Delirium (estado confusional agudo). O tratamento da agitação requer antipsicóticos/neurolépticos (como as butirofenonas, ex: Haloperidol), visto que benzodiazepínicos podem induzir reações paradoxais e exacerbar a confusão nos idosos.",
    "commentary": "O delirium é uma manifestação frequente de disfunção da integridade cognitiva no idoso hospitalizado frente a estressores orgânicos, em que o uso de tranquilizantes benzodiazepínicos é contraindicado sob pena de piora ou agitação reativa secundária. Os neurolépticos da classe do haloperidol constituem a escolha farmacológica regulamentada para o controle comportamental agudo se houver sofrimento ou perigo.",
    "reference": "BRENDA TP et al. The Importance of Diagnosing and Managing ICU Delirium. CHEST, 132:624–636, 2007. SCHWARTZ CE. Delirium in hospitalized older pacients. N.Engl.J.Med., 341(5):369-70, 1999.",
    "tags": [
      "geriatria",
      "psiquiatria",
      "neurologia"
    ]
  },
  {
    "id": "tp2024-75",
    "topography": "16",
    "topic": "Pré-operatório",
    "module": "Cirurgia",
    "text": "Gestante em cesariana após peridural apresenta queda na PA e náuseas ao ficar em decúbito dorsal. Quais os fatores responsáveis?",
    "options": [
      "(A) Aumento dos volumes pulmonares.",
      "(B) Compressão aorto-cava e bloqueio simpático.",
      "(C) Aumento da capacidade residual funcional.",
      "(D) Compressão pulmonar pelo útero."
    ],
    "correctAnswer": 1,
    "explanation": "Duas coisas somam-se nessa gestante. Ao deitar de costas, o útero grávido comprime a veia cava inferior (e a aorta), reduzindo o retorno venoso e o débito cardíaco: é a síndrome de hipotensão supina. Ao mesmo tempo, a peridural bloqueia as fibras simpáticas, causando vasodilatação, acúmulo de sangue nos membros inferiores e queda da pressão.\n\nA náusea é um sinal precoce da hipotensão. A conduta é deslocar o útero para a esquerda (cunha sob o quadril direito ou inclinação lateral esquerda da mesa), oferecer fluidos e usar vasopressor (como fenilefrina ou efedrina) se necessário, para proteger a perfusão da placenta.",
    "commentary": "Aumento dos volumes e capacidades pulmonares (A): na gravidez, o volume corrente aumenta, mas o volume de reserva expiratório e o volume residual diminuem; nada disso explica a hipotensão.\n\nAumento da capacidade residual funcional (C): é o contrário: a CRF cai na gestação, pela elevação do diafragma, o que deixa a gestante mais sujeita a hipoxemia, mas não a hipotensão.\n\nCompressão pulmonar pelo útero (D): o útero eleva o diafragma, mas não comprime o pulmão a ponto de causar queda de pressão; a causa é vascular.",
    "tip": "Gestante hipotensa deitada de costas após raqui ou peridural: desloque o útero para a esquerda, hidrate e use vasopressor.",
    "reference": "Cavalcante FS. Alterações fisiológicas da gravidez em: Cangiani LM, Carmona MJC, Ferez D, Bastos CO, Duarte LTD, Cangiani LH, et al. Tratado de Anestesiologia, 9ª ed, Editora dos Editores, 2021; 2461-98. Bastos CO, Castro LFC. Anestesia para cesariana em: Cangiani LM, Carmona MJC, Ferez D, Bastos CO, Duarte LTD, Cangiani LH, et al. Tratado de Anestesiologia, 9ª ed, Editora dos Editores, 2021; 2537-64.",
    "tags": [
      "anestesiologia",
      "obstetrícia"
    ]
  },
  {
    "id": "tp2022-79",
    "module": "Cirurgia",
    "text": "Sobre a criptorquidia (testículo não identificado em bolsa), é correto afirmar:",
    "options": [
      "(A) A temperatura não afeta a espermatogênese.",
      "(B) Não causa efeitos psicológicos.",
      "(C) Não há risco aumentado de torção.",
      "(D) O risco de degeneração maligna é maior do que na população normal."
    ],
    "correctAnswer": 3,
    "explanation": "A criptorquidia é a ausência do testículo na bolsa escrotal por parada da descida em algum ponto do trajeto (abdome, canal inguinal). Suas principais consequências são a redução da fertilidade, o maior risco de câncer testicular, o maior risco de torção e as repercussões estéticas e psicológicas.\n\nO risco de tumor de células germinativas (seminoma é o mais comum) é maior nesses testículos do que na população geral, e ainda mais quando o testículo é intra-abdominal. A orquidopexia precoce, idealmente entre 6 e 18 meses de vida, melhora o potencial de fertilidade e permite palpar o testículo no seguimento, mas não elimina por completo o risco de malignidade.",
    "commentary": "Temperatura não afeta a espermatogênese (A): é o contrário; o testículo fora da bolsa fica em temperatura mais alta, e isso é um dos fatores que prejudicam a produção de espermatozoides.\n\nNão causa efeitos psicológicos (B): a bolsa vazia gera preocupação estética e psicológica frequente nos pais e no próprio paciente, que deve ser abordada.\n\nNão há risco maior de torção (C): a fixação anômala do testículo fora do lugar facilita a torção do funículo espermático.",
    "tip": "Criptorquidia: menos fertilidade, mais câncer, mais torção e impacto psicológico. Orquidopexia entre 6 e 18 meses.",
    "reference": "Urologia Fundamental - SBU.",
    "tags": [
      "urologia",
      "pediatria"
    ]
  },
  {
    "id": "tp2026-74",
    "topography": "16",
    "topic": "Obstrução intestinal",
    "module": "Cirurgia",
    "text": "Lactente de 7 meses foi atendido em PS com história de choro súbito e intenso, com flexão de membros inferiores sobre o abdome. Mãe relata 2 episódios de vômitos e eliminação de fezes avermelhadas, com aspecto de \"geleia de morango\". Ao exame físico, nota-se massa alongada, palpável em hipocôndrio direito. Considerando o diagnóstico de intussuscepção intestinal, qual a fisiopatologia responsável pela isquemia com saída de muco e sangue pelo reto?",
    "options": [
      "(A) Compressão do plexo mioentérico de Auerbach, levando à paralisia motora e necrose por pressão direta arterial.",
      "(B) Obstrução primária do fluxo arterial mesentérico, devido à torção do pedículo vascular (volvo).",
      "(C) Congestão venosa e linfática devido à invaginação do mesentério, evoluindo com edema da parede e falência arterial.",
      "(D) Translocação bacteriana imediata para a serosa, causando peritonite química e necrose transmural precoce."
    ],
    "correctAnswer": 2,
    "explanation": "Na intussuscepção intestinal, a invaginação de um segmento do intestino no outro traciona o mesentério associado, comprimindo inicialmente os vasos linfáticos e as veias (baixa pressão). Isso gera edema local que, ao aumentar a pressão tecidual, obstrui o fluxo arterial secundariamente, levando à isquemia, descamação e sangramento mucoso (fezes em geleia de morango).",
    "commentary": "O mecanismo fisiopatológico da intussuscepção intestinal envolve a penetração de um segmento intestinal proximal (geralmente o íleo terminal) no lúmen do segmento distal (geralmente o cólon cecal), levando consigo o mesentério e seus vasos. O primeiro efeito mecânico é a oclusão dos vasos de baixa pressão (veias e linfáticos), o que desencadeia congestão venosa, estase linfática e rápido edema na parede intestinal. Conforme o edema se acentua, a pressão tecidual intersticial ultrapassa a pressão de perfusão arterial, interrompendo o aporte sanguíneo (isquemia arterial secundária). Isso leva a infarto hemorrágico da mucosa, descamação celular e produção excessiva de muco misturado com hemácias, gerando o sinal clássico das fezes em \"geleia de morango\". Sobre os distratores: (A) A compressão do plexo mioentérico gera distúrbios de motilidade (como no megacólon), mas não sofrimento vascular isquêmico agudo primário. (B) A torção global do pedículo vascular é característica do volvo e não da invaginação. (D) A translocação bacteriana e peritonite são consequências finais tardias da necrose transmural e não o mecanismo gerador inicial do sangramento e isquemia.",
    "reference": "Maksoud, João Gilberto. Cirurgia Pediatrica 2ª Edição 2017 volume II",
    "tags": [
      "pediatria",
      "cirurgia pediátrica",
      "fisiopatologia"
    ]
  },
  {
    "id": "tp2024-95",
    "topography": "5.2",
    "topic": "Infecções na gestação",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante com HIV, 38 semanas, em uso regular de terapia antirretroviral, com carga viral indetectável na 34ª semana. Chega em trabalho de parto: colo com 6 cm, bolsa íntegra, feto cefálico e cardiotocografia normal. Qual a conduta?",
    "options": [
      "(A) Realizar nova carga viral; se >1000, cesárea e AZT.",
      "(B) Condução do trabalho de parto vaginal; sem necessidade de AZT endovenoso.",
      "(C) Condução do trabalho de parto vaginal; realizar AZT endovenoso.",
      "(D) Indicar cesariana eletiva obrigatoriamente."
    ],
    "correctAnswer": 1,
    "explanation": "O que define a via de parto e o uso de zidovudina (AZT) no parto da gestante com HIV é a carga viral medida a partir de 34 semanas. Com carga viral indetectável nessa época e uso regular da terapia antirretroviral, o risco de transmissão vertical é muito baixo.\n\nPor isso, segundo o Ministério da Saúde, a via de parto segue a indicação obstétrica (aqui, parto vaginal, já em fase ativa) e o AZT endovenoso no parto não é necessário. A medicação antirretroviral oral deve ser mantida. Durante o trabalho de parto, evitam-se amniotomia e procedimentos invasivos, e o recém-nascido recebe profilaxia conforme o risco.",
    "commentary": "Nova carga viral e cesárea se acima de 1000 (A): o resultado de 34 semanas já orienta a conduta; além disso, ela está com 6 cm de dilatação, e a cesárea eletiva para prevenção só faz sentido antes do trabalho de parto e com membranas íntegras.\n\nAZT endovenoso (C): é indicado quando a carga viral é detectável, desconhecida ou foi colhida antes de 34 semanas, ou quando a adesão é duvidosa; não é o caso.\n\nCesárea obrigatória (D): a cesárea eletiva é indicada quando a carga viral é desconhecida ou de 1000 cópias/mL ou mais após 34 semanas; com carga viral indetectável, a via é obstétrica.",
    "tip": "HIV com carga viral indetectável após 34 semanas e TARV regular: parto pela indicação obstétrica, sem AZT endovenoso.",
    "reference": "Brasil. Ministério da Saúde. Secretaria de Atenção Primária à Saúde. Departamento de Ações Programáticas. Manual de gestação de alto risco [recurso eletrônico] / Ministério da Saúde, Secretaria de Atenção Primária à Saúde. Departamento de Ações Programáticas. – Brasília : Ministério da Saúde, 2022. 692p.:il.",
    "tags": [
      "obstetrícia",
      "infecções"
    ]
  },
  {
    "id": "tp2022-97",
    "topography": "5.2",
    "topic": "Infecções na gestação",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante (18 semanas), teste rápido para sífilis positivo. Como proceder de acordo com o Ministério da Saúde?",
    "options": [
      "(A) Tratar o casal imediatamente e solicitar exames mensais.",
      "(B) Aguardar o teste treponêmico de confirmação antes de tratar.",
      "(C) Tratar com eritromicina se for alérgica.",
      "(D) Tratar apenas se o parceiro for positivo."
    ],
    "correctAnswer": 0,
    "explanation": "Na gestação, um teste rápido (treponêmico) reagente para sífilis já basta para começar o tratamento, sem esperar o resultado de outros exames. Isso porque a sífilis tem alta transmissão vertical e pode causar aborto, natimorto e sífilis congênita, e qualquer atraso aumenta o risco para o feto.\n\nAo mesmo tempo, colhe-se um teste não treponêmico (VDRL) para confirmar e servir de base ao seguimento, que na gestação é mensal. O tratamento é com penicilina benzatina, em dose e número de aplicações conforme a fase da doença. A parceria sexual também deve ser testada e tratada, mesmo com teste negativo, para evitar reinfecção da gestante.",
    "commentary": "Aguardar o treponêmico de confirmação (B): esperar atrasa o tratamento, e a gestante pode não voltar; o Ministério da Saúde orienta tratar já no primeiro teste reagente.\n\nEritromicina se for alérgica (C): a eritromicina atravessa mal a placenta e não trata o feto; o único tratamento eficaz na gestação é a penicilina benzatina, e a gestante alérgica deve passar por dessensibilização.\n\nTratar o parceiro só se for positivo (D): a parceria pode estar no período de janela, com teste ainda negativo; o tratamento é indicado mesmo assim, senão a gestante se reinfecta.",
    "tip": "Gestante com teste rápido de sífilis reagente: penicilina benzatina na hora, VDRL mensal e tratar a parceria mesmo se negativa.",
    "reference": "Ministério da Saúde - Protocolo Transmissão Vertical 2021.",
    "tags": [
      "obstetrícia",
      "IST"
    ]
  },
  {
    "id": "tp2026-84",
    "topography": "5.1",
    "topic": "Mioma uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma mulher de 38 anos, nuligesta, parda, procura atendimento ambulatorial com queixa de aumento do fluxo menstrual há cerca de 8 meses, associado a sensação de peso pélvico. Ao exame ginecológico, observa-se útero aumentado de volume, irregular, móvel e indolor à palpação. Diante do quadro descrito, assinale a alternativa que indica a abordagem diagnóstica inicial para essa paciente.",
    "options": [
      "(A) Ressonância magnética pélvica",
      "(B) Histeroscopia diagnóstica",
      "(C) Tomografia computadorizada de abdome e pelve",
      "(D) Ultrassonografia pélvica transvaginal"
    ],
    "correctAnswer": 3,
    "explanation": "Mulher de 38 anos com sangramento menstrual aumentado, sensação de peso pélvico e útero aumentado, irregular e móvel ao toque: o diagnóstico mais provável é leiomioma uterino (mioma), o tumor pélvico benigno mais comum na mulher.\n\nO primeiro exame é a ultrassonografia pélvica transvaginal, que é acessível, barata, não invasiva e mostra bem o número, o tamanho e a localização dos nódulos (submucoso, intramural ou subseroso), além de avaliar o endométrio. Exames mais complexos ficam para casos selecionados.",
    "commentary": "Ressonância magnética (A): é útil para mapear miomas antes de cirurgia conservadora ou quando o ultrassom é inconclusivo, por exemplo para diferenciar de adenomiose; não é o exame inicial.\n\nHisteroscopia (B): avalia e trata lesões da cavidade, como miomas submucosos e pólipos; é invasiva e entra depois do ultrassom, quando ele sugere lesão intracavitária.\n\nTomografia (C): avalia mal os órgãos pélvicos, expõe à radiação e não tem papel na investigação de miomas.",
    "tip": "Útero aumentado e irregular com sangramento aumentado: pense em mioma e peça ultrassom transvaginal primeiro.",
    "reference": "Tratado de Ginecologia da FEBRASGO. Cesar Eduardo Fernandes, Marcos Felipe Silva de Sá. 1ª ed. Rio de Janeiro: Elsevier, 2019.",
    "tags": [
      "miomatose uterina",
      "ultrassonografia",
      "diagnóstico"
    ]
  },
  {
    "id": "tp2024-114",
    "topography": "12",
    "topic": "Polifarmácia",
    "module": "Saúde Coletiva",
    "text": "Sobre os princípios para evitar a polifarmácia, assinale a alternativa correta:",
    "options": [
      "Usuários de 5 ou mais fármacos devem ter revisão regular para reduzir doses ou suspender itens.",
      "Para cada problema de saúde novo, deve-se obrigatoriamente adicionar um medicamento.",
      "Deve-se suspender medicamentos ignorando os desejos do paciente se o médico julgar necessário.",
      "A escolha do medicamento deve basear-se exclusivamente na preferência do prescritor."
    ],
    "correctAnswer": 0,
    "explanation": "Polifarmácia (em geral definida como o uso de cinco ou mais medicamentos) aumenta o risco de interações, efeitos adversos, quedas, internações e má adesão, sobretudo em idosos. Por isso, quem usa cinco ou mais fármacos deve ter a prescrição revista periodicamente, verificando se cada remédio ainda tem indicação e se algum pode ter a dose reduzida ou ser suspenso (desprescrição).\n\nOutros princípios são evitar tratar com novo remédio o efeito adverso de outro (cascata de prescrição), preferir um medicamento que trate mais de um problema e decidir junto com o paciente, levando em conta as preferências e os objetivos dele.",
    "commentary": "Um medicamento para cada problema novo (B): é o caminho para a polifarmácia; muitos problemas se resolvem sem remédio novo, ou com um fármaco que sirva para mais de uma condição.\n\nSuspender ignorando o desejo do paciente (C): a revisão deve ser compartilhada com o paciente; decidir sozinho fere a autonomia e prejudica a adesão. Também não se deve suspender algo de que ele precisa a ponto de piorar sua saúde.\n\nEscolha só pela preferência do prescritor (D): a decisão deve juntar as evidências, as características do paciente e as preferências dele, e não apenas as do médico.",
    "tip": "Cinco ou mais remédios: revisar sempre, desprescrever o que não serve e decidir junto com o paciente.",
    "reference": "GUSSO, Gustavo et al. Tratado de medicina de família e comunidade: princípios, formação e prática. 2. ed. V. 1 e 2. Porto Alegre: Artmed, 2019, XXII, 938. p",
    "tags": [
      "geriatria",
      "polifarmácia",
      "segurança do paciente"
    ]
  },
  {
    "id": "tp2022-117",
    "topography": "15",
    "topic": "Saúde da mulher",
    "module": "Saúde Coletiva",
    "text": "Mulher vítima de violência doméstica apresenta-se chorosa e com hematomas, mas não deseja denunciar o marido. Conduta médica correta:",
    "options": [
      "(A) Realizar anamnese/exame físico, realizar notificação e orientar a paciente sobre registro e perícia.",
      "(B) Fazer corpo de delito e Boletim de Ocorrência mesmo contra a vontade da vítima.",
      "(C) Respeitar o sigilo e não realizar notificação para não denunciar.",
      "(D) Apenas orientar a procurar delegacia antes de qualquer exame."
    ],
    "correctAnswer": 0,
    "explanation": "A notificação é obrigatória para a saúde; a denúncia policial é um direito da vítima que deve ser orientado/incentivado.",
    "commentary": "A notificação compulsória para fins epidemiológicos é dever do médico. A denúncia criminal cabe à vítima em crimes de ação penal privada/condicionada.",
    "reference": "Manual Atendimento Vítimas Violência, SES/DF.",
    "tags": [
      "violência doméstica",
      "ética médica"
    ]
  },
  {
    "id": "tp2019-102",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "As doenças cardiovasculares e cerebrovasculares continuam sendo a principal causa de morte nos países desenvolvidos. No entanto, suas taxas de mortalidade vêm diminuindo nas últimas décadas em razão de ações de prevenção e melhor tratamento.\n\nA ação e o respectivo nível de prevenção capaz de reduzir a morbimortalidade por acidente vascular encefálico (AVE) são:",
    "options": [
      "(A) Evitar iatrogenia; prevenção terciária.",
      "(B) Diagnóstico precoce do AVE; prevenção primária.",
      "(C) Tratamento precoce do AVE; prevenção secundária.",
      "(D) Redução da ingestão de sal; prevenção secundária."
    ],
    "correctAnswer": 2,
    "explanation": "Pelos níveis de prevenção de Leavell e Clark, o diagnóstico e o tratamento precoces de uma doença já instalada correspondem à prevenção secundária. O tratamento precoce do AVE (trombólise, unidades de AVC) reduz a morbimortalidade.",
    "commentary": "Reduzir o sal é prevenção primária. Diagnóstico precoce não é prevenção primária. Evitar iatrogenia é prevenção quaternária.",
    "reference": "LEAVELL Hugh R.; CLARK, Edwin G. Medicina Preventiva. SP, McGraw-Hill do Brasil, RJ FENAME, 1978 NORMAN, Armando Henrique; TESSER, Charles Dalcanale. Prevenção quaternária na atenção primária à saúde: uma necessidade do Sistema Único de Saúde. Cad. Saúde Pública, Rio de Janeiro, v. 25, n. 9, p. 2012-2020, Sept. 2009 Tratado de Medicina de Família e Comunidade 2ª edição, 2018.",
    "tags": [
      "saúde coletiva",
      "níveis de prevenção"
    ]
  },
  {
    "id": "tp2025-14",
    "topography": "4.2",
    "topic": "Hiperplasia prostática benigna",
    "module": "Ciências Básicas",
    "text": "Um paciente de 59 anos, com histórico de hipertensão, apresenta sintomas de dificuldade para urinar e jato urinário fraco. Após avaliação, foi iniciado tratamento com mesilato de doxazosina. Qual efeito adverso comum deve ser monitorado?",
    "options": [
      "(A) Diminuição da diurese",
      "(B) Aumento da pressão arterial",
      "(C) Hipotensão ortostática",
      "(D) Hiperplasia prostática benigna"
    ],
    "correctAnswer": 2,
    "explanation": "Doxazosina é um antagonista seletivo dos receptores alfa-1 adrenérgicos que reduz a RVP, relaxando o esfíncter urinário, mas podendo induzir hipotensão ortostática (efeito de primeira dose).",
    "commentary": "Ao bloquear os receptores alfa-1 nos vasos sanguíneos, impede-se a vasoconstrição simpática reflexa quando o paciente se levanta, facilitando tonturas e síncope postural de regulação autonômica.",
    "reference": "Goodman & Gilman: As Bases Farmacológicas da Terapêutica. 13ª ed. 2018.",
    "tags": [
      "farmacologia",
      "urologia"
    ]
  },
  {
    "id": "tp2019-9",
    "module": "Ciências Básicas",
    "text": "A extensa variabilidade genética existente na maioria dos vírus de RNA deve-se à:",
    "options": [
      "(A) Grande capacidade de recombinação entre segmentos de genomas de dois vírus diferentes em situações de coinfecção.",
      "(B) Pressão seletiva de anticorpos que induz os vírus à variação antigênica.",
      "(C) Falta da função de correção de erros de transcrição na RNA-polimerase viral.",
      "(D) Reconhecimento de RNA de dupla fita por receptores do tipo ‘toll’."
    ],
    "correctAnswer": 2,
    "explanation": "As RNA-polimerases virais não têm atividade de revisão (proofreading 3'→5'). Erros de incorporação se acumulam a cada ciclo de replicação, gerando grande diversidade genética e rápido surgimento de variantes.",
    "commentary": "Recombinação/rearranjo ocorre em vírus segmentados (como influenza), mas não explica a variabilidade contínua da maioria dos vírus de RNA. A pressão de anticorpos seleciona variantes, mas não as cria. Receptores toll-like participam da resposta imune.",
    "reference": "Brooks GF et al. Jawetz Medical Microbiology (25th Ed). McGraw Hill, 2010",
    "tags": [
      "microbiologia",
      "virologia"
    ]
  },
  {
    "id": "enamed-2025-68",
    "topography": "4.2",
    "topic": "Incontinência urinária",
    "module": "Cirurgia",
    "text": "Homem de 60 anos procura atendimento por apresentar perda urinária aos esforços há seis meses após prostatectomia radical realizada para tratamento de câncer de próstata localizado. Nega urgência miccional ou sintomas obstrutivos.\n\nQual é a conduta inicial mais adequada?",
    "options": [
      "(A) Implante imediato de esfíncter urinário artificial.",
      "(B) Exercícios para fortalecimento do assoalho pélvico.",
      "(C) Prescrição de oxibutinina.",
      "(D) Ressecção transuretral da próstata."
    ],
    "correctAnswer": 1,
    "explanation": "A incontinência urinária de esforço é uma complicação conhecida após prostatectomia radical, decorrente do enfraquecimento ou lesão do esfíncter uretral intrínseco. A conduta inicial e conservadora mais recomendada consiste no fortalecimento da musculatura do assoalho pélvico por meio de fisioterapia pélvica e exercícios de Kegel, apresentando ótimas taxas de melhora e cura ao longo do primeiro ano pós-cirúrgico.",
    "commentary": "O implante de esfíncter urinário artificial (A) é a terapia padrão-ouro cirúrgica, mas é indicado apenas após falha do tratamento conservador por pelo menos 6 a 12 meses. A oxibutinina (C) é um anticolinérgico indicado para incontinência de urgência (bexiga hiperativa), e não de esforço pura. A RTUp (D) não tem papel aqui, pois o paciente não possui próstata (foi submetido a prostatectomia radical).",
    "reference": "Diretrizes de Urologia da Sociedade Brasileira de Urologia (SBU) / Campbell-Walsh Urology",
    "tags": [
      "cirurgia",
      "urologia",
      "incontinência urinária",
      "pós-operatório",
      "prostatectomia"
    ]
  },
  {
    "id": "enamed-2026-62",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "O Ministério da Saúde lançou, em 2025, os novos indicadores do componente de qualidade do cofinanciamento federal da atenção primária à saúde no SUS.\n\nConsiderando-se os novos indicadores de cuidado na gestação e puerpério, é necessário garantir a realização",
    "options": [
      "(A) de pelo menos um exame de ultrassonografia obstétrica durante a gestação.",
      "(B) dos testes para sífilis, HIV e hepatites B e C no 1º trimestre da gestação.",
      "(C) da primeira consulta de pré-natal antes da 20ª semana da gestação.",
      "(D) de pelo menos quatro consultas médicas de pré-natal."
    ],
    "correctAnswer": 1,
    "explanation": "Os novos indicadores de qualidade do cofinanciamento federal da APS (2025) para o cuidado na gestação e puerpério incluem a realização dos testes rápidos ou exames para sífilis, HIV e hepatites B e C no 1º trimestre, entre outros (consultas, atendimento odontológico, vacinação, consulta puerperal).\n\nA testagem precoce é essencial para a prevenção da transmissão vertical.",
    "commentary": "A primeira consulta deve ocorrer até a 12ª semana, não até a 20ª. O número mínimo de consultas foi ampliado. Ultrassonografia não é o indicador de qualidade escolhido. (Gabarito preliminar do INEP.)",
    "reference": "Ministério da Saúde. Portaria GM/MS do novo cofinanciamento federal da APS — componente de qualidade, 2025",
    "tags": [
      "saúde coletiva",
      "atenção primária",
      "pré-natal"
    ]
  },
  {
    "id": "unifesp2025-31",
    "topography": "4.1",
    "topic": "Nefropatia diabética",
    "module": "Clínica Médica",
    "text": "Mulher, 66 anos de idade, é atendida em consulta de rotina por diabetes tipo 2 e hipertensão arterial. Exame físico: PA = 140/96 mmHg. Exames laboratoriais: taxa de filtração glomerular estimada = 28 mL/min/1,73 m², proteinúria = 1,9 g/24h.\n\nQual é a conduta mais apropriada?",
    "options": [
      "(A) Prescrever inibidores da enzima conversão da angiotensina ou bloqueadores dos receptores da angiotensina II.",
      "(B) Evitar bloqueadores do sistema renina-angiotensina devido à função renal diminuída.",
      "(C) Não iniciar drogas anti-hipertensivas uma vez que a pressão arterial está controlada.",
      "(D) Iniciar bloqueador de canal de cálcio para diminuir proteinúria."
    ],
    "correctAnswer": 0,
    "explanation": "Diabética e hipertensa com doença renal crônica (TFG 28 mL/min/1,73 m²) e proteinúria de 1,9 g/24 h, com PA acima da meta (140/96).\n\nIECA ou BRA reduzem a proteinúria e retardam a progressão da doença renal diabética e são indicados mesmo com TFG reduzida. Exigem monitorização de potássio e creatinina, e uma queda de até 30% na TFG após o início é aceitável.",
    "commentary": "Evitar bloqueio do SRAA (B): a TFG baixa não contraindica; os benefícios renais persistem, com monitorização de potássio.\n\nNão tratar (C): a PA está acima da meta (< 130/80 mmHg nessa população).\n\nBCC para proteinúria (D): os di-hidropiridínicos não reduzem proteinúria como os bloqueadores do SRAA.",
    "reference": "KDIGO 2022 Diabetes in CKD / Diretrizes da SBD 2024 / Diretriz Brasileira de Hipertensão 2020",
    "tags": [
      "nefrologia",
      "doença renal diabética",
      "IECA",
      "BRA",
      "proteinúria"
    ]
  },
  {
    "id": "unifesp2025-86",
    "topography": "11",
    "topic": "Asma infantil",
    "module": "Pediatria",
    "text": "Menino, 10 anos de idade, joga futebol desde pequeno; queixa-se de que há 5 meses vem apresentando dificuldade para correr, há um mês não consegue terminar a partida devido a crises de tosse seca e falta de ar. Há 2 semanas, com resfriado, piorou da tosse, principalmente na madrugada e pela manhã. Tem diagnóstico de rinite alérgica.\n\nQual dos exames abaixo confirma a principal hipótese diagnóstica para sua queixa?",
    "options": [
      "(A) PHmetria",
      "(B) Rx de tórax",
      "(C) Prova de função pulmonar",
      "(D) IgE específicos para aeroalérgenos"
    ],
    "correctAnswer": 2,
    "explanation": "Escolar com rinite alérgica, tosse seca e dispneia desencadeadas por exercício e infecção viral, com piora noturna e matinal: asma (com broncoespasmo induzido por exercício).\n\nA confirmação é funcional: espirometria (prova de função pulmonar) com obstrução reversível ao broncodilatador. Se a espirometria for normal, faz-se broncoprovocação (por exemplo, por exercício).",
    "commentary": "pHmetria (A): investiga doença do refluxo, que não é a hipótese principal.\n\nRadiografia de tórax (B): geralmente normal na asma; não confirma o diagnóstico.\n\nIgE para aeroalérgenos (D): documenta sensibilização (atopia), não a doença das vias aéreas.",
    "reference": "GINA 2024 / Diretrizes da SBPT para o manejo da asma (2020)",
    "tags": [
      "pediatria",
      "asma",
      "espirometria",
      "broncoespasmo induzido por exercício"
    ]
  },
  {
    "id": "hosbos2027-90",
    "topography": "15",
    "topic": "Epidemiologia",
    "module": "Saúde Coletiva",
    "text": "Uma doença X tem taxa de letalidade maior do que a doença Y.\n\nAssinale a alternativa correta sobre essa informação.",
    "options": [
      "(A) A doença X é aguda e a doença Y é crônica.",
      "(B) Morrem mais pessoas com a doença X na sua fase inicial do que pessoas com a doença Y.",
      "(C) A doença X é uma doença infecciosa e a doença Y não.",
      "(D) Morrem mais pessoas pela doença X em relação a pessoas que tiveram ou têm a doença.",
      "(E) A doença X acomete pessoas de mais idade."
    ],
    "correctAnswer": 3,
    "explanation": "Letalidade = número de óbitos pela doença dividido pelo número de doentes (casos), em determinado período. Expressa a gravidade da doença, ou seja, a proporção de doentes que morrem dela.\n\nSe X tem letalidade maior que Y, entre as pessoas que têm ou tiveram X, morre proporcionalmente mais gente do que entre os doentes de Y. Não confundir com mortalidade, que usa a população total no denominador.",
    "commentary": "X aguda e Y crônica (A): a letalidade não informa a evolução temporal da doença.\n\nMortes na fase inicial (B): a letalidade não indica em que fase os óbitos ocorrem.\n\nX infecciosa (C): a medida não define a natureza da doença.\n\nX acomete mais idosos (E): a letalidade não informa a faixa etária acometida.",
    "reference": "Rouquayrol — Epidemiologia & Saúde / Medronho — Epidemiologia",
    "tags": [
      "epidemiologia",
      "letalidade",
      "indicadores de saúde"
    ]
  },
  {
    "id": "scmbh2026-48",
    "topography": "15",
    "topic": "Testes diagnósticos",
    "module": "Saúde Coletiva",
    "text": "“Quanto maiores os coeficientes de verossimilhança (likelihood ratios, LR+) e quanto menores os LR−, __________ a capacidade do teste de modificar a probabilidade pós-teste.”\n\nAssinale a alternativa que preenche CORRETAMENTE a lacuna.",
    "options": [
      "(A) Menor",
      "(B) Maior",
      "(C) Igual",
      "(D) Irrelevante"
    ],
    "correctAnswer": 1,
    "explanation": "A razão de verossimilhança positiva (LR+ = sensibilidade / (1 – especificidade)) indica quanto um resultado positivo aumenta a chance da doença. A LR– ((1 – sensibilidade) / especificidade) indica quanto um negativo a reduz.\n\nQuanto maior a LR+ (acima de 10 é forte) e menor a LR– (abaixo de 0,1 é forte), maior a capacidade do teste de modificar a probabilidade pós-teste.",
    "commentary": "Menor (A): inverte a relação.\n\nIgual (C): as razões de verossimilhança alteram a probabilidade, salvo quando valem 1.\n\nIrrelevante (D): as razões de verossimilhança são justamente a medida desse poder de modificação.",
    "reference": "Fletcher — Epidemiologia Clínica (Diagnóstico) / Sackett — Medicina Baseada em Evidências",
    "tags": [
      "epidemiologia",
      "razão de verossimilhança",
      "testes diagnósticos",
      "probabilidade pós-teste"
    ]
  },
  {
    "id": "hiae2025-58",
    "topography": "5.1",
    "topic": "Sangramento uterino anormal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Menstruações volumosas são uma das formas clínicas do sangramento uterino anormal,\n\ndistúrbio com alta prevalência na população global, com impacto pessoal, social, profissional e público. Diante das possíveis causas, são reconhecidas todas a seguir, EXCETO",
    "options": [
      "(A) doença de Von Wilebrand.",
      "(B) leiomioma uterino.",
      "(C) uso de anticoagulante.",
      "(D) endometriose."
    ],
    "correctAnswer": 3,
    "explanation": "Pela classificação PALM-COEIN (FIGO), as causas de sangramento uterino anormal são: Pólipo, Adenomiose, Leiomioma, Malignidade/hiperplasia (estruturais) e Coagulopatia, disfunção Ovulatória, Endometrial, Iatrogênica e Não classificada. Doença de von Willebrand (coagulopatia), leiomioma e anticoagulantes (iatrogênica) estão na lista. A endometriose não está (a adenomiose sim).",
    "commentary": "Von Willebrand (A): é a coagulopatia hereditária mais associada a sangramento menstrual volumoso.\n\nLeiomioma (B): o 'L' do PALM.\n\nAnticoagulantes (C): causa iatrogênica.",
    "reference": "FIGO — Classificação PALM-COEIN (2018)",
    "tags": [
      "ginecologia",
      "sangramento uterino anormal",
      "PALM-COEIN"
    ],
    "tip": "PALM-COEIN: adenomiose sim, endometriose não."
  },
  {
    "id": "unimedpb2026-48",
    "topography": "14",
    "topic": "Queimaduras",
    "module": "Cirurgia",
    "text": "Paciente com queimadura de 30% de SCQ. Segundo a fórmula de Parkland, o volume nas primeiras 24h é:",
    "options": [
      "2 ml/kg/%",
      "4 ml/kg/%",
      "6 ml/kg/%",
      "8 ml/kg/%",
      "10 ml/kg/%"
    ],
    "correctAnswer": 1,
    "explanation": "A fórmula de Parkland estima a reposição volêmica do grande queimado nas primeiras 24 horas: 4 mL × peso (kg) × % de superfície corporal queimada (2º e 3º graus), com Ringer lactato. Metade do volume vai nas primeiras 8 horas, contadas a partir do momento da queimadura, e a outra metade nas 16 horas seguintes. O ajuste é guiado pela diurese (0,5–1 mL/kg/h em adultos).\n\nO ATLS 10ª/11ª edição sugere iniciar com 2 mL/kg/% em adultos, mas a fórmula de Parkland clássica, que é o que a questão pergunta, é 4 mL/kg/%.",
    "commentary": "2 mL/kg/% (A): é a estimativa inicial atual do ATLS para adultos, não a fórmula de Parkland.\n\n6 mL/kg/% (C): não corresponde a nenhuma fórmula usual.\n\n8 e 10 mL/kg/% (D e E): volumes excessivos, com risco de síndrome compartimental e edema pulmonar.",
    "reference": "ATLS 11ª edição / Ministério da Saúde — Cartilha para tratamento de emergência das queimaduras",
    "tags": [
      "trauma",
      "queimaduras",
      "fórmula de Parkland",
      "reposição volêmica"
    ],
    "tip": "Parkland: 4 × peso × SCQ. Metade em 8 h (desde a queimadura)."
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
    "id": "sespe2026-94",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Saúde Coletiva",
    "text": "A Rede Alyne é uma iniciativa do Ministério da Saúde para reduzir a mortalidade materna e neonatal no Brasil, visando a um pré-natal de qualidade com consultas intercaladas entre médicos e enfermeiros, começando no primeiro trimestre, com o mínimo de",
    "options": [
      "5 consultas.",
      "6 consultas.",
      "7 consultas.",
      "8 consultas.",
      "Nenhuma das alternativas."
    ],
    "correctAnswer": 2,
    "explanation": "A Rede Alyne (Portaria GM/MS nº 5.350/2024), que substituiu a Rede Cegonha, ampliou o pré-natal de risco habitual para no mínimo 7 consultas, iniciando no 1º trimestre e intercalando consultas médicas e de enfermagem, além de prever exames e ao menos uma consulta odontológica.",
    "commentary": "5 consultas (A): número inferior ao mínimo.\n\n6 consultas (B): era o mínimo anterior (Rede Cegonha e PHPN).\n\n8 consultas (D): é a recomendação da OMS (2016) de contatos, não o mínimo da Rede Alyne.\n\nNenhuma (E): o número correto está na alternativa C.",
    "reference": "Ministério da Saúde — Portaria GM/MS nº 5.350/2024 (Rede Alyne)",
    "tags": [
      "saúde da mulher",
      "pré-natal",
      "rede de atenção materno-infantil",
      "mortalidade materna"
    ],
    "tip": "Rede Alyne: mínimo de 7 consultas de pré-natal."
  },
  {
    "id": "hpp2026-51",
    "topography": "11",
    "topic": "Maus-tratos infantis",
    "module": "Pediatria",
    "text": "Qual das alternativas abaixo não é necessário profilaxia pós abuso sexual na infância?",
    "options": [
      "Candidíase",
      "Trichomoníase",
      "Cervicite por Chlamydia trachomatis",
      "Sífilis"
    ],
    "correctAnswer": 0,
    "explanation": "Após violência sexual, a profilaxia antibiótica cobre as IST bacterianas e parasitárias mais comuns: sífilis (penicilina benzatina), gonorreia e clamídia (ceftriaxona + azitromicina) e tricomoníase (metronidazol), além da profilaxia do HIV e da hepatite B quando indicadas.\n\nA candidíase não é IST e não entra na profilaxia pós-exposição.",
    "commentary": "Tricomoníase (B): faz parte da profilaxia (metronidazol).\n\nClamídia (C): coberta pela azitromicina.\n\nSífilis (D): coberta pela penicilina benzatina.",
    "reference": "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022) / Norma técnica de atenção à violência sexual",
    "tags": [
      "violência sexual",
      "profilaxia pós-exposição",
      "infecções sexualmente transmissíveis",
      "maus-tratos infantis"
    ],
    "tip": "Profilaxia pós-violência sexual: sífilis, gonorreia, clamídia, tricomoníase (+ HIV e hepatite B)."
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
    "id": "amrigs2025-25",
    "module": "Cirurgia",
    "text": "Paciente adulto, sexo masculino, apresenta quadro de estenose pilórica. Considerando o quadro, assinale a alternativa que apresenta o diagnóstico mais provável.",
    "options": [
      "Carcinoma gástrico.",
      "Úlcera péptica duodenal.",
      "Pólipos gástricos.",
      "Fitobezoar gástrico."
    ],
    "correctAnswer": 0,
    "explanation": "No adulto, a obstrução do trato de saída gástrico (estenose pilórica) hoje tem como principal causa a neoplasia — sobretudo o adenocarcinoma gástrico distal (antro e piloro). A úlcera péptica era a causa mais comum no passado, mas perdeu espaço com os IBPs e a erradicação do H. pylori. Diante de estenose pilórica no adulto, a primeira hipótese a investigar (EDA com biópsia) é câncer.",
    "commentary": "Úlcera péptica duodenal (B): causa clássica e ainda frequente em algumas séries, mas superada pelas neoplasias na era dos IBPs.\n\nPólipos gástricos (C): raramente causam obstrução.\n\nFitobezoar (D): causa rara, associada a gastroparesia ou cirurgia gástrica prévia.\n\nObservação: algumas referências ainda citam a úlcera péptica como causa mais comum; a banca seguiu a visão atual, de predomínio neoplásico.",
    "reference": "Sabiston — Tratado de Cirurgia (obstrução do trato de saída gástrico)",
    "tags": [
      "estenose pilórica",
      "obstrução do trato de saída gástrico",
      "câncer gástrico",
      "úlcera péptica"
    ],
    "tip": "Estenose pilórica no adulto: câncer gástrico até prova em contrário."
  }
];
