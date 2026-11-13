// Arquivo gerado por `npm run gen` a partir do banco de questões. Não editar à mão.
// O build e o servidor local regeneram este arquivo sozinhos; o `npm run validate` acusa se ficar desatualizado.
import type { Question } from '../types';

export const TOTAL_QUESTIONS = 2114;

export const COUNT_BY_AREA: Record<string, number> = {
  "Pediatria": 392,
  "Clínica Médica": 426,
  "Cirurgia": 370,
  "Ginecologia e Obstetrícia": 386,
  "Saúde Coletiva": 380,
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
  "Saúde Coletiva|HSRC": 10
};

/** Questões por especialidade ou região da topografia ("1.1", "8"). */
export const TOPOGRAPHY_COUNT: Record<string, number> = {
  "8": 63,
  "9": 55,
  "10": 95,
  "11": 222,
  "12": 16,
  "13": 46,
  "14": 89,
  "15": 334,
  "16": 134,
  "1.2": 12,
  "1.3": 22,
  "7.2": 35,
  "4.2": 24,
  "1.1": 64,
  "1.5": 26,
  "6.1": 38,
  "3.1": 76,
  "4.1": 68,
  "2.1": 79,
  "6.2": 19,
  "2.2": 84,
  "3.2": 24,
  "3.3": 23,
  "7.1": 25,
  "1.4": 3,
  "3.4": 16,
  "5.1": 167,
  "5.2": 193
};

/** Questões por assunto, na chave "1.1|Cefaleias". */
export const TOPIC_COUNT: Record<string, number> = {
  "11|Puericultura": 24,
  "1.2|Catarata": 4,
  "11|Icterícia neonatal": 8,
  "11|Obesidade infantil": 8,
  "1.3|Amigdalite/faringoamigdalite": 11,
  "7.2|Urticária": 1,
  "1.2|Uveíte": 2,
  "4.2|Estenose de uretra": 2,
  "11|Calendário vacinal": 11,
  "1.1|TCE": 11,
  "11|Maus-tratos infantis": 15,
  "11|Prematuridade": 2,
  "11|Anemia ferropriva": 12,
  "9|Trombocitopenias": 4,
  "11|Aleitamento materno": 17,
  "1.5|Hipotireoidismo": 7,
  "11|Síndrome do desconforto respiratório neonatal": 8,
  "14|Emergências pediátricas": 12,
  "6.1|Artrite reumatoide": 7,
  "9|Talassemias": 2,
  "11|ITU pediátrica": 6,
  "11|Diarreia aguda": 8,
  "14|Trauma": 32,
  "11|Cardiopatias congênitas": 19,
  "3.1|Constipação intestinal": 6,
  "10|Raiva": 6,
  "1.1|Cefaleias": 8,
  "1.3|Surdez": 2,
  "11|Desenvolvimento neuropsicomotor": 16,
  "9|Anemia falciforme": 7,
  "11|Asma infantil": 17,
  "11|Doença de Kawasaki": 1,
  "1.5|Hipertireoidismo": 9,
  "11|Desidratação": 9,
  "11|Sepse neonatal": 7,
  "9|Leucemias": 8,
  "1.3|Otite média aguda": 2,
  "11|Convulsão febril": 5,
  "11|Pneumonia infantil": 8,
  "11|Refluxo gastroesofágico": 2,
  "11|Bronquiolite": 8,
  "11|Desnutrição": 3,
  "10|Sífilis": 14,
  "4.1|Síndrome nefrítica": 3,
  "2.1|Bronquiectasias": 2,
  "8|Insuficiência adrenal": 6,
  "6.2|Escoliose": 2,
  "14|Intoxicações": 12,
  "15|Ética médica": 13,
  "4.1|Síndrome nefrótica": 5,
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
  "8|Cetoacidose diabética": 13,
  "3.1|Diarreia crônica": 3,
  "1.2|Erros refrativos": 1,
  "10|Dengue": 14,
  "4.1|Distúrbios hidroeletrolíticos": 10,
  "4.1|Lesão renal aguda": 11,
  "8|Diabetes mellitus tipo 1 e 2": 22,
  "1.1|Demências": 7,
  "6.1|Lúpus eritematoso sistêmico": 7,
  "1.1|Epilepsia": 5,
  "10|Tuberculose": 20,
  "2.1|DPOC": 18,
  "9|Anemia ferropriva": 6,
  "3.2|Hepatites virais": 5,
  "2.2|Dislipidemia": 7,
  "2.2|Insuficiência cardíaca": 11,
  "2.2|Hipertensão arterial sistêmica": 20,
  "4.1|Cistite": 6,
  "13|Dependência química": 6,
  "3.1|DRGE": 9,
  "2.1|Asma": 9,
  "2.1|Pneumonia comunitária": 15,
  "13|Abstinência alcoólica": 6,
  "6.1|Osteoartrose": 2,
  "2.1|Tuberculose pulmonar": 1,
  "7.2|Herpes-zóster": 2,
  "1.1|AVC": 16,
  "7.2|Erisipela": 2,
  "7.2|Melanoma": 3,
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
  "2.2|Síndrome coronariana aguda": 9,
  "4.1|Glomerulonefrite": 3,
  "10|HIV/AIDS": 9,
  "12|Delirium": 5,
  "3.1|Gastrite": 2,
  "9|Síndrome de lise tumoral": 1,
  "2.1|Insuficiência respiratória": 1,
  "10|Sepse": 4,
  "6.1|Osteoporose": 6,
  "7.2|Carcinoma basocelular": 2,
  "9|Anemia megaloblástica": 10,
  "2.1|Derrame pleural": 12,
  "13|Transtornos de ansiedade": 4,
  "1.5|Tempestade tireotóxica": 1,
  "12|Demências": 1,
  "13|Depressão maior": 6,
  "8|Hiperaldosteronismo primário": 3,
  "16|Feridas": 15,
  "16|Pré-operatório": 17,
  "16|Hérnias": 16,
  "3.3|Colangite aguda": 4,
  "3.1|Hemorragia digestiva baixa": 2,
  "7.1|Doença arterial periférica": 5,
  "6.2|Fraturas": 5,
  "1.1|Hipertensão intracraniana": 3,
  "14|Queimaduras": 8,
  "1.3|Câncer de cabeça e pescoço": 2,
  "1.2|Ceratite": 3,
  "14|Choque": 4,
  "16|Trauma abdominal": 10,
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
  "16|Trauma torácico": 16,
  "16|Apendicite aguda": 7,
  "16|Perfuração de víscera oca": 6,
  "3.3|Colangiocarcinoma": 3,
  "3.4|Pancreatite aguda": 8,
  "3.1|Câncer colorretal": 10,
  "8|Obesidade": 9,
  "7.1|Isquemia arterial aguda": 3,
  "7.2|Celulite": 2,
  "16|Pós-operatório": 20,
  "7.1|Insuficiência venosa crônica": 3,
  "6.2|Lesões do manguito rotador": 1,
  "16|Isquemia mesentérica": 4,
  "1.5|Nódulos tireoidianos": 3,
  "16|Abdome agudo": 4,
  "6.2|Lombalgia": 3,
  "7.2|Carcinoma espinocelular": 1,
  "6.2|Luxações": 1,
  "3.3|Colelitíase": 7,
  "5.1|Sangramento uterino anormal": 15,
  "5.1|Climatério e menopausa": 18,
  "5.1|Contracepção": 28,
  "5.1|Câncer de colo uterino": 26,
  "5.1|Vaginose bacteriana": 5,
  "5.2|Diabetes gestacional": 18,
  "5.2|Assistência ao parto": 8,
  "5.2|Puerpério": 12,
  "5.2|Infecções na gestação": 24,
  "5.2|Rotura prematura de membranas": 6,
  "15|Rastreamento": 19,
  "5.1|Câncer de endométrio": 6,
  "5.2|Gravidez ectópica": 8,
  "5.2|Diagnóstico de gravidez": 1,
  "5.2|Pré-natal": 30,
  "5.2|Hemorragia pós-parto": 8,
  "5.2|Trabalho de parto": 22,
  "5.1|Mioma uterino": 8,
  "5.1|Endometriose": 10,
  "5.1|Infertilidade": 8,
  "5.1|Prolapso genital": 7,
  "5.1|Câncer de ovário": 7,
  "15|Saúde da mulher": 8,
  "5.2|Pré-eclâmpsia": 15,
  "5.2|Abortamento": 15,
  "5.1|Síndrome dos ovários policísticos": 5,
  "5.1|Doença inflamatória pélvica": 7,
  "5.1|Candidíase vaginal": 3,
  "5.2|Eclâmpsia": 1,
  "5.2|Descolamento prematuro de placenta": 10,
  "5.2|Isoimunização Rh": 4,
  "5.1|Tricomoníase": 2,
  "5.2|Síndrome HELLP": 1,
  "5.1|Planejamento reprodutivo": 4,
  "8|Prolactinoma": 2,
  "10|Infecções sexualmente transmissíveis": 9,
  "15|Bioética": 6,
  "5.2|Idade gestacional": 5,
  "4.2|Incontinência urinária": 6,
  "5.2|Placenta prévia": 2,
  "15|Atenção Primária": 66,
  "15|Saúde do idoso": 5,
  "15|SUS": 47,
  "12|Polifarmácia": 2,
  "15|Imunização": 20,
  "15|Saúde do trabalhador": 19,
  "15|Estudos epidemiológicos": 28,
  "15|Epidemiologia": 38,
  "15|Vigilância epidemiológica": 25,
  "15|Testes diagnósticos": 18,
  "15|Estratégia Saúde da Família": 11,
  "12|Quedas": 3,
  "13|Risco de suicídio": 7,
  "13|Transtorno bipolar": 3,
  "10|Infecções relacionadas à assistência": 3,
  "15|Saúde da criança": 3,
  "2.2|Doença arterial coronariana crônica": 4,
  "3.2|Hipertensão portal": 3,
  "3.2|Icterícia": 1,
  "2.2|Febre reumática": 3,
  "4.1|Distúrbios ácido-base": 7,
  "14|Anafilaxia": 4,
  "10|Malária": 3,
  "9|Coagulopatias": 4,
  "4.2|Hiperplasia prostática benigna": 2,
  "2.1|Fibrose pulmonar": 2,
  "6.1|Artrite séptica": 2,
  "15|Bioestatística": 4,
  "3.2|Ascite": 3,
  "14|Crise hipertensiva": 1,
  "7.2|Dermatite de contato": 1,
  "1.1|Esclerose múltipla": 1,
  "3.1|Úlcera péptica": 3,
  "9|Neutropenia febril": 1,
  "13|Transtornos alimentares": 4,
  "4.2|Fimose": 1,
  "3.4|Câncer de pâncreas": 2,
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
  "2.2|Fibrilação atrial": 4,
  "6.2|Síndrome da cauda equina": 1,
  "7.2|Impetigo": 2,
  "3.2|Peritonite bacteriana espontânea": 2,
  "7.1|Dissecção de aorta": 2,
  "4.2|Câncer de bexiga": 1,
  "4.2|Retenção urinária": 2,
  "1.3|Vertigem": 1,
  "6.2|Lesão do ligamento cruzado anterior": 1,
  "8|Distúrbios do cálcio": 2,
  "14|Parada cardiorrespiratória": 3,
  "4.1|Nefropatia diabética": 1,
  "2.2|Choque cardiogênico": 1,
  "12|Cuidados paliativos": 5,
  "10|Toxoplasmose": 2,
  "1.5|Câncer de tireoide": 3,
  "2.2|Endocardite infecciosa": 4,
  "2.1|Tabagismo": 4,
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
  "11|Alimentação complementar": 1,
  "10|Febre amarela": 1,
  "9|Transfusão sanguínea": 1,
  "7.2|Psoríase": 1,
  "1.2|Retinopatia diabética": 1,
  "8|Hipoglicemia": 1,
  "2.1|Pneumotórax": 1,
  "3.3|Câncer de vesícula": 1,
  "1.3|Sinusite/rinossinusite": 1,
  "16|Nutrição cirúrgica": 2,
  "10|Leptospirose": 1,
  "1.4|Herpes simples": 1,
  "10|Chikungunya": 2
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
    "id": "tp2022-45",
    "topography": "11",
    "topic": "Cardiopatias congênitas",
    "module": "Pediatria",
    "text": "Recém-nascido com traços de Síndrome de Down, evolui com 72h de vida com taquipneia, taquicardia, hepatomegalia, precórdio hiperdinâmico e B2 com desdobramento amplo. Qual o diagnóstico e conduta?",
    "options": [
      "(A) Pneumonia neonatal - Antibioticoterapia.",
      "(B) Taquipneia transitória do recém-nascido - VNI.",
      "(C) Sepse neonatal precoce - Antibioticoterapia.",
      "(D) Insuficiência cardíaca congestiva - Ecocardiograma."
    ],
    "correctAnswer": 3,
    "explanation": "Recém-nascido com fenótipo de síndrome de Down que, nos primeiros dias, evolui com taquipneia persistente, taquicardia, hepatomegalia e precórdio hiperdinâmico: são sinais de insuficiência cardíaca. A B2 com desdobramento amplo e P2 hiperfonética indica hiperfluxo e pressão alta na circulação pulmonar.\n\nCerca de metade das crianças com síndrome de Down tem cardiopatia congênita, sendo o defeito do septo atrioventricular a mais característica. Quando a resistência vascular pulmonar cai nos primeiros dias de vida, o shunt da esquerda para a direita aumenta e a IC aparece. O ecocardiograma com Doppler colorido define a lesão e orienta o tratamento.",
    "commentary": "Pneumonia neonatal (A): não explica hepatomegalia, precórdio hiperdinâmico e alterações da B2; não há febre nem sinais infecciosos descritos.\n\nTaquipneia transitória (B): melhora em 24 a 72 horas e não causa hepatomegalia nem achados cardíacos; aqui o quadro piora com o tempo.\n\nSepse precoce (C): a perfusão está preservada e os pulsos normais, sem fatores de risco infecciosos; os achados apontam para o coração.",
    "tip": "Síndrome de Down + IC nos primeiros dias = pense em defeito do septo atrioventricular: ecocardiograma.",
    "reference": "Das BB. Current State of Pediatric Heart Failure. 2018.",
    "tags": [
      "neonatologia",
      "cardiologia"
    ]
  },
  {
    "id": "tp2021-56",
    "topography": "8",
    "topic": "Síndrome de Cushing",
    "module": "Pediatria",
    "text": "Menina, 2 anos, apresentando pubarca, acne e fome excessiva há 6 meses. Ao exame físico é evidenciado estatura acima do percentil 95, obesidade, estadiamento puberal de Tanner = M1P3, hipertrofia de clitóris, estrias vinhosas em abdome, PA = 100 x 70 mmHg (>P95). A hipótese diagnóstica mais provável é:",
    "options": [
      "(A) Tumor de supra-renal.",
      "(B) Pubarca precoce idiopática.",
      "(C) Puberdade precoce central.",
      "(D) Hiperplasia congênita de suprarrenal."
    ],
    "correctAnswer": 0,
    "explanation": "Cenário clínico exuberante em lactente de 2 anos combinando sinais de virilização androgênica grave (pubarca no limite P3, clitoromegalia severa e acne) com marcadores cardinais de excesso de glicocorticoides/Cushing (obesidade rápida, hiperfagia, estrias vinhosas e hipertensão arterial grave). Essa hipersecreção mista adrenocortical é típica de neoplasias corticais (tumor de supra-renal).",
    "commentary": "Os tumores adrenocorticais na infância respondem por quadros de puberdade precoce periférica isossexual ou heterossexual de instalação agressiva. O achado misto de sintomas de Cushing e virilização acelerada decorre da produção aberrante simultânea de esteroides sexuais e cortisol livre pelas células adrenocorticais neoplásicas. A hiperplasia adrenal congênita se manifestaria mais precocemente ou não virilizaria em tal intensidade mista em fase de 2 anos com o Cushing concomitante.",
    "reference": "Oncologia Pediátrica — SBP; Nelson Tratado de Pediatria.",
    "tags": [
      "endocrinologia",
      "oncologia"
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
    "id": "tp2025-40",
    "topography": "10",
    "topic": "Dengue",
    "module": "Clínica Médica",
    "text": "Paciente do sexo feminino, 32 anos, há 4 dias apresentando febre aferida, mialgia, cefaleia e náuseas, conduzida como dengue após NS1 reagente no 2º dia de sintomas. Hoje comparece para reavaliação clínica. Ao exame físico, paciente consciente e orientada, porém sonolenta, com tempo de enchimento capilar de 4 segundos, extremidades frias, frequência cardíaca 120bpm e pressão arterial 100x60mmHg. A conduta imediata é:",
    "options": [
      "(A) Iniciar hidratação EV com SF 0,9% 20mL/kg em até 20 minutos e solicitar leito de terapia intensiva.",
      "(B) Iniciar hidratação EV com SF 0,9% 20mL/kg em 6 horas, com alta e reavaliação em 24 horas.",
      "(C) Iniciar hidratação EV com SF 0,9% 20mL/kg em 6 horas e internação em leito de enfermaria.",
      "(D) Iniciar expansão volêmica com albumina 5% EV e solicitar leito de terapia intensiva."
    ],
    "correctAnswer": 0,
    "explanation": "A paciente exibe sinais nítidos de choque circulatório hipotensivo por Dengue Grave (Grupo D). A conduta urgente de escolha é a infusão rápida de cristaloide (20 mL/kg em 20 minutos) e leito de terapia intensiva.",
    "commentary": "Conforme as diretrizes e fluxograma de manejo clínico de dengue para 2025 emitidos pelo Ministério da Saúde, a vigência de choque circulatório ativo (extremidades frias, perfusão de 4s, taquicardia descrita e alteração de nível com sonolência) eleva a paciente imediatamente ao Grupo D de gravidade clínica, determinando reidratação volêmica agressiva inicial ultra-rápida (20 mL/kg sob controle restrito em até 20 minutos) acompanhado de transferência de leito monitorizado em UTI.",
    "reference": "Fluxograma para o manejo clínico da dengue – Ministério da Saúde – 28/02/2025.",
    "tags": [
      "infectologia",
      "dengue",
      "emergência"
    ]
  },
  {
    "id": "tp2019-38",
    "topography": "8",
    "topic": "Diabetes mellitus tipo 1 e 2",
    "module": "Clínica Médica",
    "text": "Homem, 56 anos, com diabetes mellitus há 12 anos, está em uso de metformina 2g de liberação prolongada e gliclazida 120mg por dia. Exames laboratoriais: Hb glicada = 10,2%; glicemia de jejum = 190 mg/dL.\n\nA melhor conduta para esse caso é:",
    "options": [
      "(A) Substituir a gliclazida por insulina regular no jantar.",
      "(B) Aumentar a metformina para 3g/dia.",
      "(C) Introduzir insulina NPH ao deitar.",
      "(D) Reforçar modificação do estilo de vida e reavaliar em seis meses."
    ],
    "correctAnswer": 2,
    "explanation": "Diabético tipo 2 com HbA1c de 10,2% apesar de metformina e sulfonilureia em doses plenas: está muito acima da meta e precisa de intensificação.\n\nA conduta clássica é iniciar insulina basal (NPH ao deitar), mantendo os orais, e titular pela glicemia de jejum.",
    "commentary": "Trocar a gliclazida por insulina regular no jantar não é o esquema inicial. A dose de 2 g/dia já é a máxima efetiva da metformina. Apenas reforçar o estilo de vida e reavaliar em 6 meses atrasaria o controle.",
    "reference": "Qaseem A, Wilt TJ, Kansagara D, Horwitch C, Barry MJ, Forciea MA, et al. Hemoglobin A1c Targets for Glycemic Control With Pharmacologic Therapy for Non pregnant Adults With Type 2. / Diabetes Mellitus: A Guidance Statement Update From the American College of Physicians. Ann Intern Med. [Epubahead of print 6 March 2018]168:569–576. doi: 10.7326/M17-0939. / Diretrizes da Sociedade Brasileira de Diabetes 2017-2018 /Organização José Egídio Paulo de Oliveira, Renan Magalhães Montenegro Junior, Sérgio Vencio. -- São Paulo: Editora Clannad, 2017. / Netto, A P. Conduta terapêutica no Diabetes tipo 2: Algoritmo SBD 2017. 9 9",
    "tags": [
      "endocrinologia",
      "diabetes",
      "insulinoterapia"
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
    "id": "tp2025-72",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Mulher de 38 anos procura o serviço de emergência com queixa de dor e vermelhidão ao longo de uma veia na perna esquerda há 4 dias. Relata uso recente de anticoncepcional oral. Nega traumas ou cirurgias recentes. Ao exame físico observa-se um cordão endurecido, eritematoso e doloroso ao longo da veia safena magna, sem sinais de edema significativo no membro. Considerando a principal hipótese diagnóstica, qual é a melhor conduta inicial?",
    "options": [
      "(A) Anti-inflamatórios não esteroides, compressão elástica e mobilização precoce.",
      "(B) Anticoagulação plena com heparina de baixo peso molecular imediatamente.",
      "(C) Indicar repouso absoluto do membro afetado e antibioticoterapia profilática para evitar infecção secundária.",
      "(D) Realizar punção da veia afetada para aspiração do trombo e reduzir a inflamação local."
    ],
    "correctAnswer": 0,
    "explanation": "A tromboflebite superficial estéril é tratada preferencialmente com medidas conservadoras e sintomáticas: AINEs, terapia compressiva elástica de suporte e estímulo à deambulação ativa.",
    "commentary": "Este caso exibe traços nítidos de tromboflebite superficial da via venosa subcutânea (safena magna), favorecida na mulher jovem sob terapia de anticoncepção oral combinada. Por constituir enfermidade eminentemente imunológica local autolimitada e estéril, o plano de frente abjura o repouso estrito (contra-indicado pelo aumento do estase e risco subsequente de TVP). O alívio decorre de anti-inflamatórios (AINEs), compressão graduada e mobilidade física regular. Anticoagulação formal estaria balizada em caso de proximidade direta ao sistema venoso profundo (< 3-5 cm da crossa de safena) ou lesões com extensão superior a 5 cm.",
    "reference": "Diretrizes do American College of Chest Physicians (ACCP); Sociedade Brasileira de Angiologia e Cirurgia Vascular (SBACV) - Projeto Diretrizes.",
    "tags": [
      "cirurgia vascular"
    ]
  },
  {
    "id": "tp2019-64",
    "topography": "3.3",
    "topic": "Colangite aguda",
    "module": "Cirurgia",
    "text": "Mulher de 65 anos apresenta há três dias icterícia, dor abdominal e urina de cor escura. Antecedentes pessoais: colecistopatia crônica calculosa, aguardando cirurgia. Exame físico: febril, ictérica 3+/4, com dor à palpação de hipocôndrio direito. Exames laboratoriais: bilirrubina total de 4,8 mg/dL (bilirrubina direta: 3,8 mg/dL), leucograma de 15.000/mm³ sem desvio.\n\nA hipótese diagnóstica mais provável é:",
    "options": [
      "(A) Cólica biliar",
      "(B) Pancreatite aguda",
      "(C) Colecistite aguda calculosa",
      "(D) Coledocolitíase com colangite"
    ],
    "correctAnswer": 3,
    "explanation": "Paciente com colelitíase que evolui com icterícia colestática (predomínio de bilirrubina direta), febre e dor em hipocôndrio direito — tríade de Charcot: coledocolitíase complicada por colangite.",
    "commentary": "A cólica biliar não causa febre nem icterícia. A colecistite aguda isolada não cursa com icterícia significativa. A pancreatite cursaria com dor em faixa e elevação de amilase/lipase.",
    "reference": "José Cesar Assef et. Al. Emergências cirúrgicas traumáticas e não traumáticas. Condutas e algorítimo. Capítulo 24. Colangite aguda. 9 13",
    "tags": [
      "cirurgia",
      "vias biliares",
      "colangite"
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
    "id": "tp2022-96",
    "module": "Ginecologia e Obstetrícia",
    "text": "Após a ovulação, o corpo lúteo produz progesterona. Na evolução da gestação, qual estrutura assume essa produção a partir da 12ª semana?",
    "options": [
      "(A) Ovário.",
      "(B) Placenta.",
      "(C) Cordão umbilical.",
      "(D) Colo uterino."
    ],
    "correctAnswer": 1,
    "explanation": "A placenta torna-se o principal local de produção de progesterona após o primeiro trimestre (transição lúteo-placentária).",
    "commentary": "A partir da 12ª semana, a placenta assume a produção hormonal necessária para a manutenção da gravidez.",
    "reference": "Febrasgo.",
    "tags": [
      "obstetrícia",
      "fisiologia"
    ]
  },
  {
    "id": "tp2021-94",
    "topography": "5.2",
    "topic": "Síndrome HELLP",
    "module": "Ginecologia e Obstetrícia",
    "text": "Primigesta, 42 anos, previamente hígida, com idade gestacional de 32 semanas, é admitida na maternidade com pressão arterial de 140 x 90 mmHg e queixa de epigastralgia. Nega cefaleia ou qualquer outra queixa. Proteinúria de fita está positiva 2+. Exames laboratoriais: AST: 136 U/l, ALT: 154 U/l, bilirrubina total: 2,3 mg/dL, plaquetas: 90.000/mm³ e LDH: 1450 U/l. O diagnóstico é:",
    "options": [
      "(A) Hipertensão transitória gestacional com colestase intra-hepática da gravidez.",
      "(B) Hipertensão transitória gestacional complicada por esteatose hepática.",
      "(C) Eclâmpsia associada a colestase intra-hepática da gravidez.",
      "(D) Pré-eclâmpsia complicada por síndrome HELLP."
    ],
    "correctAnswer": 3,
    "explanation": "A grávida preenche critérios de pré-eclâmpsia (hipertensão arterial nova pós-20 semanas associada a proteinúria de 2+ e sintomatologia de dor epigástrica/em barra). Além disso, os marcadores laboratoriais definem desfecho grave de hemólise com plaquetopenia (plaquetas < 100.000, LDH > 600 U/L, hiperbilirrubinemia indireta) e lesão de hepatócitos (AST/ALT elevados), consagrando a Síndrome HELLP.",
    "commentary": "A dor epigástrica reflexa de estiramento da cápsula hepática de Glisson em vigilância pressórica identifica a gravidade endotelial da pré-eclâmpsia. A Síndrome HELLP exige, além de controle anti-hipertensivo (com hidralazina ou nifedipina) e prevenção imediata de convulsões (via sulfato de magnésio), a indução monitorada do parto ou a interrupção assistida rápida por cesariana decorrente da gravidade materno-fetal estabelecida pelas plaquetas reduzidas e disfunção multissistêmica.",
    "reference": "Tratado de obstetrícia FEBRASGO / editores Cesar Eduardo Fernandes, Marcos Felipe Silva de Sá; coordenação Coríntio Mariani Neto. – 1. ed. – Rio de Janeiro: Elsevier, 2019.",
    "tags": [
      "obstetrícia",
      "pré-eclâmpsia",
      "síndrome HELLP"
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
    "id": "tp2022-105",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Sobre a classificação dos tipos de prevenção, assinale a alternativa correta:",
    "options": [
      "(A) A prevenção primária envolve ações de promoção de saúde e proteção específica (ex: vacinação).",
      "(B) Promoção de saúde via alimentação e exercícios são políticas de prevenção secundária.",
      "(C) O rastreamento de novos casos em período pré-clínico é prevenção primária.",
      "(D) A prevenção secundária foca na reabilitação de complicações já instaladas."
    ],
    "correctAnswer": 0,
    "explanation": "Os níveis de prevenção acompanham a história natural da doença:\n\n• Primária: antes de a doença existir. Inclui promoção da saúde (ações gerais, como alimentação adequada, atividade física, saúde mental) e proteção específica (dirigida a uma doença, como vacina).\n• Secundária: doença já instalada, em fase inicial ou pré-clínica. Rastreamento e diagnóstico e tratamento precoces.\n• Terciária: doença estabelecida, para limitar sequelas e reabilitar.\n• Quaternária: evitar danos causados por excesso de intervenções médicas.\n\nPor isso a vacinação é exemplo de prevenção primária por proteção específica.",
    "commentary": "Alimentação e exercício como prevenção secundária (B): são ações de promoção da saúde, que pertencem à prevenção primária.\n\nRastreamento no período pré-clínico como prevenção primária (C): rastrear é buscar a doença já presente antes dos sintomas, o que define a prevenção secundária.\n\nReabilitação de complicações como prevenção secundária (D): reabilitar após infarto ou AVC é prevenção terciária.",
    "tip": "Primária: evita a doença (vacina). Secundária: acha cedo (rastreio). Terciária: reabilita. Quaternária: evita excesso médico.",
    "reference": "Rouquayrol, M. Z. Epidemiologia & Saúde. 8. ed. 2018.",
    "tags": [
      "prevenção",
      "saúde pública"
    ]
  },
  {
    "id": "tp2021-116",
    "topography": "15",
    "topic": "Imunização",
    "module": "Saúde Coletiva",
    "text": "Considerando as recomendações sobre a saúde do idoso do Ministério da Saúde, assinale a ação preventiva que deve ser indicada para todos os idosos.",
    "options": [
      "(A) Vacinação anual antipneumocócica após 65 anos.",
      "(B) Vacinação anual contra Influenza após 60 anos.",
      "(C) Rastreamento com densitometria óssea após 60 anos.",
      "(D) Rastreamento com teste de esforço após 70 anos."
    ],
    "correctAnswer": 1,
    "explanation": "Pelo PNI e diretrizes de saúde do idoso do Brasil, a imunização anual preventiva contra o vírus Influenza (Gripe) é indicada para toda a população de idosos com idade igual ou superior a 60 anos.",
    "commentary": "A vacina de influenza é de ampla escala populacional universal. Diferentemente, a vacina antipneumocócica possui indicações mais restritas a subgrupos de risco específicos ou imunocomprometidos. O rastreio universal de osteoporose por densitometria óssea é recomendado somente a mulheres após os 65 anos ou de forma baseada em riscos individuais de fraturas antes dessa idade.",
    "reference": "Diretrizes para o Cuidado das Pessoas Idosas no SUS, Ministério da Saúde.",
    "tags": [
      "saúde do idoso",
      "imunização",
      "ações preventivas"
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
    "id": "tp2020-9",
    "topography": "4.1",
    "topic": "Lesão renal aguda",
    "module": "Ciências Básicas",
    "text": "Paciente do sexo feminino, 45 anos, apresenta-se em Unidade de Pronto Atendimento com oligúria. Relata que está em tratamento para herpes simples com Aciclovir há quatro dias, e que há 48 horas não consegue urinar. Foram solicitados exames laboratoriais que sugeriram o diagnóstico de necrose tubular aguda.\n\nSobre o padrão de lesão encontrado na necrose tubular aguda, é correto afirmar que:",
    "options": [
      "(A) São observados glomérulos fibrinóticos e com depósito de material purulento em alça capilar.",
      "(B) Nos glomérulos são evidenciadas áreas de esteatonecrose e células com cariorrexe.",
      "(C) Os túbulos são dilatados e hialinizados. Os glomérulos são atróficos e repletos de macrovesículas de colesterol.",
      "(D) São evidenciadas áreas de isquemia glomerular e células necróticas, que são eliminadas sob a forma de cilindros."
    ],
    "correctAnswer": 3,
    "explanation": "A necrose tubular aguda por nefrotoxicidade (aciclovir, por cristalúria e lesão tubular) cursa com necrose de células epiteliais, que se descamam e formam cilindros (granulosos, 'marrom-barrento') no sedimento urinário.\n\nA alternativa aceita pela banca é a que fala em células necróticas eliminadas sob a forma de cilindros.",
    "commentary": "As demais descrevem lesões glomerulares ou achados inexistentes na NTA. Observação: a lesão da NTA é essencialmente tubular, e a menção a 'isquemia glomerular' na alternativa oficial é imprecisa.",
    "reference": "ROBBINS. Patologia Estrutural e Funcional, 8ª edição.",
    "tags": [
      "patologia",
      "nefrologia",
      "necrose tubular aguda"
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
    "id": "enamed-2026-63",
    "topography": "15",
    "topic": "Epidemiologia",
    "module": "Saúde Coletiva",
    "text": "Uma equipe técnica do Ministério da Saúde está avaliando os efeitos da redução do ponto de corte da medida de PA sistólica de 130 mmHg para 120 mmHg para o diagnóstico de hipertensão arterial (HA).\n\nConsiderando-se as mudanças nos valores de referência, o que se espera em relação ao diagnóstico de HA?",
    "options": [
      "(A) Aumento na detecção da HA e redução na frequência de falsos positivos.",
      "(B) Aumento na detecção da HA e aumento na frequência de falsos positivos.",
      "(C) Redução na detecção da HA e redução na frequência de falsos positivos.",
      "(D) Redução na detecção da HA e aumento na frequência de falsos positivos."
    ],
    "correctAnswer": 1,
    "explanation": "Reduzir o ponto de corte para o diagnóstico (de 130 para 120 mmHg) aumenta a sensibilidade e diminui a especificidade do critério.\n\nAssim, mais pessoas serão classificadas como hipertensas (aumento da detecção), mas também haverá mais falsos positivos.",
    "commentary": "Toda mudança de ponto de corte gera um trade-off: não é possível aumentar a detecção e reduzir falsos positivos ao mesmo tempo apenas deslocando o limiar. (Gabarito preliminar do INEP.)",
    "reference": "Fletcher RH. Epidemiologia Clínica — Testes diagnósticos e pontos de corte",
    "tags": [
      "saúde coletiva",
      "epidemiologia",
      "hipertensão"
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
    "id": "usprp2025-92",
    "topography": "7.1",
    "topic": "Trombose venosa profunda",
    "module": "Cirurgia",
    "text": "Mulher, 60 anos com história de câncer de mama, submetida a mastectomia há 3 semanas e em inicio tratamento quimioterápico complementar. Na consulta ambulatorial observou-se edema súbito em perna direita, associada a dor local.\n\nQual a conduta mais adequada, considerando o diagnóstico mais provável?",
    "options": [
      "(A) Prescrever heparina de baixo peso molecular em dose terapêutica.",
      "(B) Implante de filtro de veia cava inferior.",
      "(C) Indicar uso de meia elástica e dose profilática de anticoagulante.",
      "(D) Internação para uso de heparina não fracionada subcutânea."
    ],
    "correctAnswer": 0,
    "explanation": "Paciente oncológica (câncer de mama), em pós-operatório recente e em quimioterapia, com edema súbito e dor na perna: trombose venosa profunda é o diagnóstico mais provável (alta probabilidade pré-teste), a ser confirmada por ultrassonografia Doppler.\n\nO tratamento do TEV associado ao câncer é a anticoagulação plena. A HBPM em dose terapêutica é tradicionalmente o padrão; os DOAC (apixabana, rivaroxabana, edoxabana) são alternativas, conforme o risco de sangramento.",
    "commentary": "Filtro de veia cava (B): só com contraindicação absoluta à anticoagulação.\n\nMeia e dose profilática (C): dose profilática não trata TVP estabelecida.\n\nInternação com HNF subcutânea (D): pode ser tratada ambulatorialmente; HBPM é preferível no câncer.",
    "reference": "ASCO Guideline — VTE Prophylaxis and Treatment in Patients with Cancer (2023) / ITAC",
    "tags": [
      "cirurgia vascular",
      "trombose venosa profunda",
      "câncer",
      "anticoagulação"
    ]
  },
  {
    "id": "susba2025-8",
    "topography": "6.1",
    "topic": "Osteoporose",
    "module": "Clínica Médica",
    "text": "Mulher, 65 anos de idade, comparece à UBS para consulta de rotina. Refere dor lombar ocasional, sem outras queixas. Ao exame físico, apresenta leve cifose dorsal e sua estatura parece estar diminuída em 4cm em relação à altura da juventude.\n\nOs achados mais provavelmente encontrados numa radiografia de tórax desta paciente:",
    "options": [
      "(A) Presença de osteófitos e estreitamento do canal vertebral.",
      "(B) Cifose torácica aumentada e presença de cistos ósseos.",
      "(C) Calcificação da aorta abdominal e aumento do espaço intervertebral.",
      "(D) Redução da densidade óssea e fraturas por compressão vertebral."
    ],
    "correctAnswer": 3,
    "explanation": "Na osteoporose avançada, a radiografia (o perfil do tórax mostra a coluna torácica) evidencia osteopenia — rarefação óssea, com trabéculas verticais mais visíveis — e fraturas vertebrais por compressão (achatamento em cunha, vértebras bicôncavas), que explicam a cifose e a perda de altura.",
    "commentary": "Osteófitos e estreitamento do canal (A): são achados de doença degenerativa (espondiloartrose).\n\nCistos ósseos (B): a cifose aumentada é esperada, mas cistos ósseos não fazem parte da osteoporose (sugerem outras doenças, como hiperparatireoidismo ou lesões líticas).\n\nCalcificação aórtica e aumento do espaço intervertebral (C): a calcificação aórtica pode ocorrer na idosa, mas não explica o quadro; e o espaço intervertebral não aumenta.",
    "reference": "PCDT Osteoporose — Ministério da Saúde",
    "tags": [
      "reumatologia",
      "osteoporose",
      "fratura vertebral",
      "radiologia"
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
    "id": "iog2026-13",
    "topography": "3.1",
    "module": "Cirurgia",
    "text": "Mulher de 65 anos de idade, com queixa de epigastralgia há 3 meses, realizou endoscopia digestiva alta com achado de lesão ulcerada de 2,2 cm em fundo gástrico. Relatório anatomopatológico confirmou Adenocarcinoma gástrico indiferenciado com células em anel de sinete. Tomografia computadorizada mostrou somente lesão gástrica, sem metástases.\n\nA paciente deverá ser submetida a:",
    "options": [
      "Quimioterapia e radioterapia neoadjuvantes.",
      "Mucosectomia endoscópica.",
      "Gastrectomia subtotal com linfadenectomia D2.",
      "Gastrectomia total com linfadenectomia D2."
    ],
    "correctAnswer": 3,
    "explanation": "Adenocarcinoma gástrico de fundo (terço proximal), ulcerado, de 2,2 cm e com células em anel de sinete, sem metástases. Não preenche critérios de ressecção endoscópica e, pela localização proximal, a cirurgia com margem adequada é a gastrectomia total com linfadenectomia D2.\n\nPela banca, a resposta é a cirurgia. Na prática, para tumores a partir de T2 ou com linfonodo positivo, as diretrizes atuais indicam quimioterapia perioperatória (FLOT) antes e depois da gastrectomia; o enunciado não traz o estadiamento T/N para essa decisão.",
    "commentary": "Quimioterapia e radioterapia neoadjuvantes (A): a radioterapia não faz parte do tratamento padrão do câncer de corpo e fundo gástrico; a quimioterapia perioperatória, quando indicada, acompanha a cirurgia, que continua sendo a resposta.\n\nMucosectomia (B): só para câncer precoce bem selecionado; lesão ulcerada, maior que 2 cm e indiferenciada tem alto risco de metástase linfonodal.\n\nGastrectomia subtotal (C): é para tumores distais (antro); no fundo gástrico não dá margem.",
    "reference": "Japanese Gastric Cancer Treatment Guidelines 2021 / NCCN — Gastric Cancer / Consenso Brasileiro de Câncer Gástrico",
    "tags": [
      "cirurgia oncológica",
      "câncer gástrico",
      "gastrectomia total",
      "linfadenectomia D2"
    ],
    "tip": "Câncer gástrico proximal: gastrectomia total + D2. Distal: subtotal + D2."
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
  }
];
