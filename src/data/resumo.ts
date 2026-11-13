// Arquivo gerado por `npm run gen` a partir do banco de questões. Não editar à mão.
// O build e o servidor local regeneram este arquivo sozinhos; o `npm run validate` acusa se ficar desatualizado.
import type { Question } from '../types';

export const TOTAL_QUESTIONS = 2064;

export const COUNT_BY_AREA: Record<string, number> = {
  "Pediatria": 382,
  "Clínica Médica": 416,
  "Cirurgia": 360,
  "Ginecologia e Obstetrícia": 376,
  "Saúde Coletiva": 370,
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
  "Saúde Coletiva|HPP": 20
};

/** Questões por especialidade ou região da topografia ("1.1", "8"). */
export const TOPOGRAPHY_COUNT: Record<string, number> = {
  "8": 63,
  "9": 53,
  "10": 92,
  "11": 217,
  "12": 16,
  "13": 45,
  "14": 83,
  "15": 329,
  "16": 131,
  "1.2": 12,
  "1.3": 22,
  "7.2": 34,
  "4.2": 23,
  "1.1": 63,
  "1.5": 26,
  "6.1": 38,
  "3.1": 73,
  "4.1": 68,
  "2.1": 77,
  "6.2": 19,
  "2.2": 80,
  "3.2": 23,
  "3.3": 22,
  "7.1": 25,
  "1.4": 3,
  "3.4": 15,
  "5.1": 162,
  "5.2": 190
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
  "14|Trauma": 28,
  "11|Cardiopatias congênitas": 19,
  "3.1|Constipação intestinal": 5,
  "10|Raiva": 6,
  "1.1|Cefaleias": 7,
  "1.3|Surdez": 2,
  "11|Desenvolvimento neuropsicomotor": 16,
  "9|Anemia falciforme": 7,
  "11|Asma infantil": 15,
  "11|Doença de Kawasaki": 1,
  "1.5|Hipertireoidismo": 9,
  "11|Desidratação": 8,
  "11|Sepse neonatal": 7,
  "9|Leucemias": 8,
  "1.3|Otite média aguda": 2,
  "11|Convulsão febril": 5,
  "11|Pneumonia infantil": 6,
  "11|Refluxo gastroesofágico": 2,
  "11|Bronquiolite": 8,
  "11|Desnutrição": 3,
  "10|Sífilis": 14,
  "4.1|Síndrome nefrítica": 3,
  "2.1|Bronquiectasias": 2,
  "8|Insuficiência adrenal": 6,
  "6.2|Escoliose": 2,
  "14|Intoxicações": 11,
  "15|Ética médica": 13,
  "4.1|Síndrome nefrótica": 5,
  "1.3|Laringite": 3,
  "7.2|Dermatite atópica": 4,
  "14|Sepse e choque séptico": 8,
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
  "10|Tuberculose": 19,
  "2.1|DPOC": 18,
  "9|Anemia ferropriva": 6,
  "3.2|Hepatites virais": 5,
  "2.2|Dislipidemia": 7,
  "2.2|Insuficiência cardíaca": 11,
  "2.2|Hipertensão arterial sistêmica": 18,
  "4.1|Cistite": 6,
  "13|Dependência química": 6,
  "3.1|DRGE": 9,
  "2.1|Asma": 9,
  "2.1|Pneumonia comunitária": 13,
  "13|Abstinência alcoólica": 6,
  "6.1|Osteoartrose": 2,
  "2.1|Tuberculose pulmonar": 1,
  "7.2|Herpes-zóster": 2,
  "1.1|AVC": 16,
  "7.2|Erisipela": 2,
  "7.2|Melanoma": 3,
  "4.1|Nefrolitíase": 8,
  "2.2|Valvopatias": 4,
  "6.1|Fibromialgia": 3,
  "2.2|Infarto agudo do miocárdio": 8,
  "2.1|Embolia pulmonar": 7,
  "2.1|Câncer de pulmão": 6,
  "4.1|Pielonefrite": 6,
  "4.1|Doença renal crônica": 8,
  "3.1|Doença inflamatória intestinal": 11,
  "3.1|Doença celíaca": 2,
  "3.2|Cirrose hepática": 3,
  "1.1|Meningite": 9,
  "1.1|Parkinson": 3,
  "9|Anemia hemolítica": 3,
  "3.2|Encefalopatia hepática": 1,
  "13|Esquizofrenia": 5,
  "6.1|Gota": 4,
  "7.2|Hanseníase": 6,
  "7.2|Escabiose": 6,
  "2.2|Síndrome coronariana aguda": 9,
  "4.1|Glomerulonefrite": 3,
  "10|HIV/AIDS": 8,
  "12|Delirium": 5,
  "3.1|Gastrite": 2,
  "9|Síndrome de lise tumoral": 1,
  "2.1|Insuficiência respiratória": 1,
  "10|Sepse": 4,
  "6.1|Osteoporose": 6,
  "7.2|Carcinoma basocelular": 2,
  "9|Anemia megaloblástica": 8,
  "2.1|Derrame pleural": 12,
  "13|Transtornos de ansiedade": 4,
  "1.5|Tempestade tireotóxica": 1,
  "12|Demências": 1,
  "13|Depressão maior": 6,
  "8|Hiperaldosteronismo primário": 3,
  "16|Feridas": 15,
  "16|Pré-operatório": 17,
  "16|Hérnias": 15,
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
  "3.2|Hepatocarcinoma": 3,
  "10|Doença de Chagas": 3,
  "1.4|Doença periodontal": 1,
  "3.3|Colecistite aguda": 3,
  "16|Trauma torácico": 16,
  "16|Apendicite aguda": 6,
  "16|Perfuração de víscera oca": 6,
  "3.3|Colangiocarcinoma": 3,
  "3.4|Pancreatite aguda": 8,
  "3.1|Câncer colorretal": 10,
  "8|Obesidade": 9,
  "7.1|Isquemia arterial aguda": 3,
  "7.2|Celulite": 2,
  "16|Pós-operatório": 19,
  "7.1|Insuficiência venosa crônica": 3,
  "6.2|Lesões do manguito rotador": 1,
  "16|Isquemia mesentérica": 4,
  "1.5|Nódulos tireoidianos": 3,
  "16|Abdome agudo": 4,
  "6.2|Lombalgia": 3,
  "7.2|Carcinoma espinocelular": 1,
  "6.2|Luxações": 1,
  "3.3|Colelitíase": 7,
  "5.1|Sangramento uterino anormal": 14,
  "5.1|Climatério e menopausa": 18,
  "5.1|Contracepção": 27,
  "5.1|Câncer de colo uterino": 26,
  "5.1|Vaginose bacteriana": 4,
  "5.2|Diabetes gestacional": 18,
  "5.2|Assistência ao parto": 8,
  "5.2|Puerpério": 12,
  "5.2|Infecções na gestação": 24,
  "5.2|Rotura prematura de membranas": 6,
  "15|Rastreamento": 19,
  "5.1|Câncer de endométrio": 6,
  "5.2|Gravidez ectópica": 8,
  "5.2|Diagnóstico de gravidez": 1,
  "5.2|Pré-natal": 28,
  "5.2|Hemorragia pós-parto": 8,
  "5.2|Trabalho de parto": 22,
  "5.1|Mioma uterino": 8,
  "5.1|Endometriose": 9,
  "5.1|Infertilidade": 8,
  "5.1|Prolapso genital": 6,
  "5.1|Câncer de ovário": 7,
  "15|Saúde da mulher": 8,
  "5.2|Pré-eclâmpsia": 15,
  "5.2|Abortamento": 14,
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
  "4.2|Incontinência urinária": 5,
  "5.2|Placenta prévia": 2,
  "15|Atenção Primária": 65,
  "15|Saúde do idoso": 5,
  "15|SUS": 46,
  "12|Polifarmácia": 2,
  "15|Imunização": 19,
  "15|Saúde do trabalhador": 17,
  "15|Estudos epidemiológicos": 28,
  "15|Epidemiologia": 38,
  "15|Vigilância epidemiológica": 25,
  "15|Testes diagnósticos": 18,
  "15|Estratégia Saúde da Família": 11,
  "12|Quedas": 3,
  "13|Risco de suicídio": 6,
  "13|Transtorno bipolar": 3,
  "10|Infecções relacionadas à assistência": 3,
  "15|Saúde da criança": 3,
  "2.2|Doença arterial coronariana crônica": 3,
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
  "3.4|Pancreatite crônica": 4,
  "3.1|Diverticulose/diverticulite": 5,
  "6.1|Espondilite anquilosante": 4,
  "3.2|Colestase": 1,
  "1.5|Tireoidites": 1,
  "13|TOC": 1,
  "3.1|Fissura anal": 2,
  "6.1|Vasculites": 2,
  "3.3|Coledocolitíase": 4,
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
  "10|Chikungunya": 1
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
    "id": "tp2022-44",
    "topography": "11",
    "topic": "Cardiopatias congênitas",
    "module": "Pediatria",
    "text": "Recém-nascido com 24 horas de vida, teste do coraçãozinho: SatO2 MSD = 98% e MI = 94%. Qual o passo seguinte?",
    "options": [
      "(A) Alta hospitalar e reavaliação clínica no 7º dia de vida.",
      "(B) Investigação cardiológica com ecocardiograma.",
      "(C) Realizar nova aferição em 1 hora.",
      "(D) Realizar nova aferição em 48 horas."
    ],
    "correctAnswer": 2,
    "explanation": "O teste do coraçãozinho (oximetria de pulso no membro superior direito e em um membro inferior, entre 24 e 48 horas de vida) é normal quando as duas medidas são de 95% ou mais e a diferença entre elas é menor que 3%.\n\nAqui o membro inferior marcou 94%, abaixo do limite, e a diferença entre os membros é de 4%. O resultado é alterado e deve ser repetido em 1 hora. Se a alteração persistir na segunda medida, o recém-nascido não recebe alta e faz ecocardiograma em até 24 horas para investigar cardiopatia congênita crítica.",
    "commentary": "Alta e retorno no 7º dia (A): só vale para teste normal; com saturação abaixo de 95% a alta não pode ser dada antes de repetir o teste.\n\nEcocardiograma direto (B): o ecocardiograma é indicado se o teste continuar alterado na repetição; um único resultado limítrofe pede nova medida antes.\n\nRepetir em 48 horas (D): o intervalo para repetir é de 1 hora; esperar dois dias atrasaria o diagnóstico de cardiopatia dependente do canal arterial.",
    "tip": "Teste do coraçãozinho: normal se ≥95% nos dois e diferença <3%. Alterado: repetir em 1 h; persistiu, ecocardiograma.",
    "reference": "Diretrizes SBP - Triagem Neonatal de Cardiopatias.",
    "tags": [
      "neonatologia",
      "cardiologia"
    ]
  },
  {
    "id": "tp2021-50",
    "topography": "1.1",
    "topic": "Cefaleias",
    "module": "Pediatria",
    "text": "Menino, 8 anos, atendido em Pronto Socorro, com queixa de cefaleia, inapetência e adinamia há cerca de 2 meses. Tem história patológica pregressa de rinite alérgica e IVAS de repetição. Nos últimos 15 dias apresenta irritabilidade, piora da cefaleia principalmente no período noturno e vômitos esporádicos. A conduta é:",
    "options": [
      "(A) Encaminhamento para o neurologista.",
      "(B) Solicitação de eletroencefalograma.",
      "(C) Encaminhamento para otorrinolaringologista.",
      "(D) Solicitação de tomografia computadorizada de crânio."
    ],
    "correctAnswer": 3,
    "explanation": "Cefaleia de caráter subagudo e progressivo, com despertares noturnos bem marcados por dor exuberante, acompanhada por alterações de comportamento (irritabilidade) e vômitos espontâneos constitui sinal clássico de alerta cerebral para hipertensão intracraniana. Demanda imediata realização de exame de imagem (TC de crânio) para descartar neoplasias do SNC.",
    "commentary": "Presença de sinais de alarme (\"red flags\") em cefaleias na infância (padrão progressivo em semanas, dor noturna relevante ou logo ao levantar, vômitos em jato, manifestações comportamentais) exigem de pronto a exclusão de lesão expansiva estrutural craniana, como meduloblastoma ou astrocitoma. A tomografia computadorizada craniocerebral é o exame mais ágil disponível para esse escopo de urgência.",
    "reference": "Cefaleias na Infância—Diretrizes do Departamento Científico de Neurologia Pediátrica, SBP.",
    "tags": [
      "neurologia",
      "oncologia",
      "urgência e emergência"
    ]
  },
  {
    "id": "tp2024-29",
    "topography": "1.1",
    "topic": "Epilepsia",
    "module": "Clínica Médica",
    "text": "Homem de 70 anos deu entrada no PS devido a quadro de crise convulsiva, que aconteceu durante o sono. Tem antecedente de acidente vascular cerebral em território da artéria cerebral média direita, que aconteceu há 1 ano. Qual o diagnóstico mais provável e a conduta?",
    "options": [
      "(A) Epilepsia. Como é o primeiro evento, não iniciar fármacos antiepilépticos.",
      "(B) Novo evento de acidente vascular cerebral. Acompanhar com exames de imagem.",
      "(C) Epilepsia. Como tem lesão estrutural prévia deve-se iniciar fármacos antiepilépticos.",
      "(D) Parassonia, distúrbio do sono não-REM, discutir medicamentos para aprofundar o sono do paciente."
    ],
    "correctAnswer": 2,
    "explanation": "O paciente teve uma crise epiléptica não provocada, um ano depois de um AVC no território da artéria cerebral média direita. A cicatriz cortical do AVC é uma lesão estrutural remota que torna o cérebro propenso a novas crises.\n\nPela definição prática da ILAE, uma única crise não provocada já caracteriza epilepsia quando o risco de recorrência é alto (como na lesão estrutural prévia). Por isso, nesse cenário, indica-se iniciar fármaco antiepiléptico já após o primeiro evento. Crise que ocorre durante o sono também é fator que aumenta a chance de recorrência.",
    "commentary": "Não iniciar fármaco por ser o primeiro evento (A): essa conduta vale para a primeira crise sem fatores de risco; com lesão estrutural prévia o risco de recorrência é alto e o tratamento é indicado.\n\nNovo AVC (B): o quadro foi de crise convulsiva, sem déficit focal novo descrito; a crise tardia pós-AVC decorre da cicatriz antiga, embora a imagem ajude a afastar lesão nova.\n\nParassonia (D): parassonias do sono não REM são comuns na infância e não produzem crise convulsiva; aprofundar o sono não é tratamento de epilepsia.",
    "tip": "Primeira crise + lesão estrutural prévia (AVC antigo) = epilepsia: já inicie antiepiléptico.",
    "reference": "Classificação das epilepsias da ILAE: Relatório da Comissão de Classificação e Terminologia da ILAE. Epilepsia, 58(4):512-521, 2017 Doi:10.111/epi.13709",
    "tags": [
      "neurologia"
    ]
  },
  {
    "id": "tp2025-36",
    "topography": "1.1",
    "topic": "Meningite",
    "module": "Clínica Médica",
    "text": "Adolescente de 16 anos é levado ao pronto-socorro com febre alta, cefaleia intensa, rigidez de nuca e rebaixamento do nível de consciência. Apresenta ainda vômitos em jato e pressão arterial de 150/100mmHg. O exame de fundo de olho revela papiledema. A conduta inicial mais apropriada é:",
    "options": [
      "(A) Administrar corticoide isolado para reduzir a resposta inflamatória.",
      "(B) Coletar hemoculturas e aguardar o resultado antes de iniciar antibiótico.",
      "(C) Realizar punção lombar imediatamente para análise do líquido cefalorraquidiano.",
      "(D) Iniciar antibioticoterapia empírica e solicitar tomografia de crânio."
    ],
    "correctAnswer": 3,
    "explanation": "Os sinais de hipertensão intracraniana grave (papiledema, rebaixamento e vômitos) contraindicam formalmente a realização de punção lombar imediata por risco de herniação. Deve-se iniciar antibioterapia e solicitar tomografia.",
    "commentary": "Na meningite bacteriana presumível com sinais focais ou de hipertensão intracraniana (HIC), a punção lombar cega é proscrita sob alto risco de herniação. Coleta-se hemocultura e institui-se de modo imediato antibioticoterapia empírica concomitante a corticoide, procedendo após à neuroimagem craniana de controle.",
    "reference": "Medicina Interna de Harrison. 21ª ed. Porto Alegre: Artmed; 2023.",
    "tags": [
      "infectologia",
      "neurologia",
      "emergência"
    ]
  },
  {
    "id": "tp2026-38",
    "topography": "2.2",
    "topic": "Síndrome coronariana aguda",
    "module": "Clínica Médica",
    "text": "Homem de 58 anos chega ao pronto atendimento com dor torácica há 2 horas. ECG mostra supradesnivelamento do segmento ST in parede anterior. O hospital não possui hemodinâmica e o tempo estimado para transferência é de 150 minutos. Qual a melhor conduta inicial?",
    "options": [
      "(A) Indicar angiografia coronariana eletiva após 72 horas.",
      "(B) Transferir para angioplastia primária.",
      "(C) Manter apenas terapia medicamentosa via oral.",
      "(D) Iniciar terapia fibrinolítica imediatamente, se não houver contraindicações."
    ],
    "correctAnswer": 3,
    "explanation": "No IAM com supra de ST, quando o tempo previsto para transferência visando à angioplastia primária ultrapassa os 120 minutos, a terapia fibrinolítica imediata deve ser a conduta prioritária de escolha.",
    "commentary": "Comentários sobre a resposta correta:\n(D) A meta de tempo ideal para angioplastia primária (ICP primária) é de até 120 minutos do primeiro contato médico. Diante da impossibilidade física demonstrada pelo tempo de transporte de 150 minutos, o benefício da recanalização mecânica tardia é superado pela agilidade da recanalização química imediata. Deve-se iniciar a terapia fibrinolítica no próprio serviço de origem, se não houver contraindicações absolutas, visando abrir a artéria em menos de 30 minutos.\n\nComentários sobre os distratores:\n(A) O cateterismo eletivo após 72 horas é contraindicado na vigência de oclusão coronariana aguda ativa em andamento com supra de ST.\n(B) Postergar a reperfusão coronariana por mais de 120 minutos aguardando transporte eleva substancialmente a perda de massa miocárdica e mortalidade na parede anterior do ventrículo esquerdo.\n(C) A terapia apenas medicamentosa sem conduta imediata de reperfusão ativa (química ou mecânica) é proscrita.",
    "reference": "Rao SV et al. 2025 ACC/AHA Guideline for Acute Coronary Syndromes. J Am Coll Cardiol. 2025. | Thygesen K et al. Fourth Universal Definition of Myocardial Infarction. J Am Coll Cardiol. 2018.",
    "tags": [
      "cardiologia",
      "emergência"
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
    "id": "tp2022-80",
    "topography": "14",
    "topic": "Queimaduras",
    "module": "Cirurgia",
    "text": "Queimadura por água fervente em face anterior do membro superior esquerdo e eritema no rosto. Qual a SCQ de 2º grau?",
    "options": [
      "(A) 4,5%",
      "(B) 7,5%",
      "(C) 9%",
      "(D) 18%"
    ],
    "correctAnswer": 0,
    "explanation": "Para calcular a superfície corporal queimada (SCQ), só entram as queimaduras de segundo e terceiro graus. O rosto tem apenas eritema, que é queimadura de primeiro grau, então fica fora da conta.\n\nAs bolhas aparecem em toda a face anterior do membro superior esquerdo. Pela regra dos nove (ou pelo diagrama de Lund-Browder), o membro superior inteiro vale 9% no adulto, sendo metade na face anterior e metade na posterior. Logo, a área com queimadura de segundo grau é de cerca de 4,5%.",
    "commentary": "7,5% (B): resultaria de incluir a hemiface (cerca de metade dos 9% da cabeça, por volta de 2 a 3%) junto com a face anterior do braço; mas o rosto teve só eritema, que não entra no cálculo.\n\n9% (C): corresponde ao membro superior inteiro, frente e verso; só a face anterior foi atingida.\n\n18% (D): equivaleria aos dois membros superiores inteiros, ou a um membro inferior inteiro; não corresponde a nenhuma área lesada.",
    "tip": "Primeiro grau não entra na SCQ. Membro superior = 9%; só a face anterior = 4,5%.",
    "reference": "Neligan - Cirurgia Plástica - Vol 6.",
    "tags": [
      "queimados",
      "emergência"
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
    "id": "tp2024-88",
    "topography": "5.1",
    "topic": "Vaginose bacteriana",
    "module": "Ginecologia e Obstetrícia",
    "text": "Corrimento branco acinzentado, odor fétido (pior após coito/menstruação). Whiff teste positivo. Sem inflamação vulvovaginal. Diagnóstico e conduta?",
    "options": [
      "(A) Candidíase; Fluconazol oral.",
      "(B) Tricomoníase; tratar parceiro.",
      "(C) Vaginose bacteriana; Metronidazol.",
      "(D) Encaminhar para cultura antes de tratar."
    ],
    "correctAnswer": 2,
    "explanation": "Corrimento branco-acinzentado, homogêneo, com odor fétido que piora após a relação e na menstruação, sem prurido e sem inflamação de vulva e vagina, é o quadro típico de vaginose bacteriana. O sêmen e o sangue menstrual são alcalinos e liberam as aminas produzidas pelos anaeróbios, por isso o odor aumenta nessas situações; o teste de Whiff (KOH a 10%) positivo reproduz esse fenômeno.\n\nO diagnóstico é clínico (critérios de Amsel) e o tratamento de escolha é metronidazol por via oral, por 7 dias, com o gel vaginal como alternativa. Não é necessário tratar o parceiro.",
    "commentary": "Candidíase (A): o corrimento é branco, grumoso, sem odor, com prurido intenso e vulvovaginite (hiperemia e edema); o teste de Whiff é negativo.\n\nTricomoníase (B): costuma vir com corrimento amarelo-esverdeado e bolhoso, prurido e sinais inflamatórios, como colo em framboesa; o caso não tem inflamação.\n\nCultura antes de tratar (D): com quadro clínico típico e teste de Whiff positivo, o diagnóstico está feito no consultório e o tratamento pode começar na hora; cultura não é útil para vaginose, cuja flora inclui bactérias da vagina normal.",
    "tip": "Vaginose: corrimento acinzentado, cheiro de peixe pior após o coito, Whiff positivo, sem inflamação = metronidazol.",
    "reference": "Peixoto S. Infecção Genital na Mulher Ed Roca 2007.Pag 89- 113. Tratado de Ginecologia FEBRASGO. Elsevier 2019. Pag. 265- 78",
    "tags": [
      "ginecologia geral",
      "infecções"
    ]
  },
  {
    "id": "tp2022-86",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 40 anos, nódulo mamário palpável. Mamografia BI-RADS 0. USG: nódulo hipoecogênico, regular, 1,2 cm, BI-RADS 3. Seguimento?",
    "options": [
      "(A) Realizar ressonância mamária imediata.",
      "(B) Repetição da mamografia em 6 meses.",
      "(C) Indica-se biópsia com agulha grossa por ser palpável.",
      "(D) Repetição da ultrassonografia em 6 meses."
    ],
    "correctAnswer": 3,
    "explanation": "Mulher de 40 anos com nódulo palpável: a mamografia veio BI-RADS 0 (inconclusiva, precisa de complementação), e a ultrassonografia mostrou nódulo hipoecoico, de contornos regulares, paralelo à pele (mais largo que alto) e com 1,2 cm. Essas características são de lesão provavelmente benigna, como fibroadenoma, e por isso receberam BI-RADS 3.\n\nNa categoria 3, a chance de câncer é muito baixa (até 2%), e a recomendação é controle de curto prazo com o mesmo exame que mostrou a lesão: nova ultrassonografia em 6 meses, seguida de controles até completar cerca de 2 anos de estabilidade. Se a lesão crescer ou mudar de aspecto, passa a ter indicação de biópsia.\n\nO antecedente familiar (tia materna, segundo grau, diagnóstico aos 66 anos) não coloca a paciente em alto risco.",
    "commentary": "Ressonância mamária (A): é reservada a casos que a mamografia e a ultrassonografia não resolvem ou a mulheres de alto risco; uma tia com câncer depois da menopausa não configura alto risco.\n\nRepetir a mamografia em 6 meses (B): o nódulo foi caracterizado na ultrassonografia, então é ela que deve ser repetida para comparar a lesão.\n\nBiópsia com agulha grossa por ser palpável (C): o fato de ser palpável, isoladamente, não obriga a biópsia quando a imagem é típica de benignidade; a biópsia é indicada para BI-RADS 4 e 5 ou se houver mudança no controle.",
    "tip": "BI-RADS 3: controle com o mesmo exame em 6 meses. BI-RADS 4 e 5: biópsia.",
    "reference": "Sistema BI-RADS, ACR.",
    "tags": [
      "mastologia"
    ]
  },
  {
    "id": "tp2021-82",
    "topography": "5.2",
    "topic": "Hemorragia pós-parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 26 anos, com 2 horas de pós-parto vaginal, inicia quadro de sudorese, palidez e sangramento vaginal em grande intensidade. Exame físico: hipocorada 2+/4+, PA = 80 x 40 mmHg, FC = 110 bpm, ritmo cardíaco regular. Fundo uterino na cicatriz umbilical, hipotônico, sangramento vaginal volumoso e de grande intensidade. Em associação aos cuidados de suporte de vida materna, as condutas imediatas são:",
    "options": [
      "(A) Administração de metilergonovina e balão de tamponamento uterino.",
      "(B) Administração de uterotônicos e sutura compressiva de B-Lynch.",
      "(C) Sondagem para esvaziamento vesical e curagem uterina.",
      "(D) Massagem no fundo uterino e administração de ocitocina endovenosa."
    ],
    "correctAnswer": 3,
    "explanation": "A paciente apresenta hemorragia pós-parto (HPP) decorrente de hipotonia/atonia uterina imediata. O primeiro passo terapêutico, conjuntamente com a ressuscitação volêmica e de suporte, consiste em medidas mecânicas conservadoras (massagem bimanual do fundo uterino / manobra de Hamilton) e a administração de uterotônicos de primeira linha (ocitocina intravenosa).",
    "commentary": "A paciente está no momento com um quadro de hipotonia uterina e devem-se iniciar as medidas gerais, com acesso venoso calibroso com infusão rápida de 2.000 a 3.000 ml de SF 0,9% ou ringer lactato, reserva de sangue, sondagem vesical de demora e massagem no fundo uterino. Além disso, devem-se tomar medidas farmacológicas imediatas de primeira linha, tais como drogas uterotônicas: ocitocina endovenosa. O tratamento cirúrgico ou invasivo (balão de tamponamento, sutura B-Lynch, ligadura das artérias hipogástricas, cura ou curetagem) só é realizado em casos refratários às medidas conservadoras e farmacológicas iniciais.",
    "reference": "FILHO, J. (Eds.). Rezende Obstetrícia. 13. ed. Rio de Janeiro: Guanabara Koogan, 2016. p. 264-270; Tratado de obstetrícia FEBRASGO (2019).",
    "tags": [
      "obstetrícia",
      "hemorragia pós-parto",
      "emergência"
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
    "id": "tp2023-102",
    "topography": "15",
    "topic": "Estudos epidemiológicos",
    "module": "Saúde Coletiva",
    "text": "O Serviço Médico de uma empresa quer calcular a prevalência de lesão sugestiva de câncer de pele entre funcionários que trabalham expostos aos raios solares em via pública e, para isso, criou um protocolo clínico. Qual é o tipo de desenho mais adequado para essa pesquisa?",
    "options": [
      "(A) Relato de casos",
      "(B) Transversal",
      "(C) Ecológico",
      "(D) Caso-controle"
    ],
    "correctAnswer": 1,
    "explanation": "A pergunta pede a prevalência, isto é, a proporção de pessoas que têm a lesão em um determinado momento. Para isso, basta examinar todos os funcionários expostos uma única vez e contar quem apresenta lesão suspeita.\n\nEsse é o estudo transversal (ou seccional): exposição e desfecho são medidos ao mesmo tempo, como uma fotografia da população. É o desenho típico para estimar prevalência; a limitação é não permitir afirmar o que veio antes, a exposição ou a doença.",
    "commentary": "Relato de casos (A): descreve um ou poucos pacientes, sem denominador populacional; não calcula prevalência.\n\nEcológico (C): usa dados agregados de grupos ou regiões, e não de cada funcionário examinado.\n\nCaso-controle (D): parte de doentes e não doentes para comparar exposições passadas; serve para estudar associação, não para medir prevalência, porque a proporção de casos é definida pelo pesquisador.",
    "tip": "Pediu prevalência? Pense em estudo transversal: exposição e desfecho medidos no mesmo momento.",
    "reference": "PEREIRA, M. G. Epidemiologia: teoria e prática. Rio de Janeiro: Guanabara Koogan, 2013.",
    "tags": [
      "epidemiologia",
      "bioestatística"
    ]
  },
  {
    "id": "tp2022-119",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Qual estratégia favorece o cuidado longitudinal e humanizado, permitindo relações clínicas de longa duração na APS?",
    "options": [
      "(A) Hierarquização da rede.",
      "(B) Regionalização intermunicipal.",
      "(C) Criação de vínculos e relação clínica humanizada.",
      "(D) Prática de uma clínica flexneriana."
    ],
    "correctAnswer": 2,
    "explanation": "A longitudinalidade é um dos atributos essenciais da Atenção Primária: o acompanhamento da mesma pessoa pela mesma equipe ao longo do tempo, independentemente de haver ou não doença. Ela só se sustenta quando existe vínculo, isto é, uma relação de confiança entre usuário e profissionais.\n\nNo caso, a mulher sobrecarregada como cuidadora conseguiu expor medos e angústias porque a equipe construiu essa relação próxima e humanizada. O vínculo permite enxergar a pessoa além da doença (o diabetes descompensado) e planejar o cuidado junto com ela.",
    "commentary": "Hierarquização (A): organiza os serviços em níveis de complexidade crescente; é uma diretriz de organização da rede, não a ferramenta que cria uma relação clínica duradoura.\n\nRegionalização (B): distribui os serviços dentro de uma região de saúde, entre municípios; também é organizativa e não explica o vínculo construído na UBS.\n\nClínica flexneriana (D): o modelo de Flexner é biomédico, centrado na doença, no hospital e na especialização; vai na direção oposta ao cuidado integral e humanizado descrito.",
    "tip": "Longitudinalidade depende de vínculo: mesma equipe, ao longo do tempo, com relação de confiança.",
    "reference": "Política Nacional de Atenção Básica (PNAB).",
    "tags": [
      "atenção primária",
      "princípios"
    ]
  },
  {
    "id": "tp2026-119",
    "topography": "15",
    "topic": "Imunização",
    "module": "Saúde Coletiva",
    "text": "Em uma UBS, um paciente de 68 anos, em uso crônico de corticoide em dose imunossupressora, apresenta esquema vacinal incompleto. Considerando a Vigilância em Saúde e as ações de promoção e prevenção, qual é a conduta mais adequada em relação à imunização?",
    "options": [
      "(A) Aplicar apenas a vacina contra influenza anual.",
      "(B) Suspender o corticoide para posterior aplicação das vacinas.",
      "(C) Administrar todas as vacinas do calendário.",
      "(D) Aplicar as vacinas inativadas e avaliar contraindicação de vacinas vivas."
    ],
    "correctAnswer": 3,
    "explanation": "Uso crônico de corticoide em dose imunossupressora (em geral, 20 mg/dia ou mais de prednisona, ou equivalente, por 14 dias ou mais) deixa o paciente mais vulnerável a infecções graves, e a vacinação é ainda mais importante. Mas é preciso diferenciar os tipos de vacina.\n\nAs vacinas inativadas e de componentes (influenza, pneumocócicas, dupla adulto, hepatite B, COVID-19, herpes-zóster recombinante) não se replicam e podem ser aplicadas com segurança, ainda que a resposta possa ser menor. As vacinas de vírus ou bactérias vivas atenuadas, como febre amarela e tríplice viral, podem estar contraindicadas durante a imunossupressão e precisam de avaliação individual, com apoio dos CRIEs.",
    "commentary": "Só influenza (A): a vacina da gripe é importante, mas o idoso imunossuprimido também tem indicação de vacinas pneumocócicas, dupla adulto e outras inativadas.\n\nSuspender o corticoide para vacinar (B): interromper um tratamento necessário não é o caminho; as vacinas inativadas podem ser dadas durante o uso, e a interrupção abrupta do corticoide pode causar insuficiência adrenal.\n\nTodas as vacinas do calendário (C): incluiria vacinas vivas atenuadas sem avaliação, com risco de doença pelo próprio agente vacinal.",
    "tip": "Imunossuprimido: vacinas inativadas podem; vivas atenuadas (febre amarela, tríplice viral) exigem avaliação.",
    "reference": "Manual de Imunização para Pacientes Especiais (CRIE), Ministério da Saúde.",
    "tags": [
      "imunização",
      "imunossuprimido",
      "corticoterapia crônica"
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
    "id": "tp2026-9",
    "topography": "7.2",
    "topic": "Herpes-zóster",
    "module": "Ciências Básicas",
    "text": "Um paciente de 65 anos procura a Unidade Básica de Saúde com dor em faixa no hemitórax direito, associada a lesões vesiculares na pele, respeitando uma distribuição linear sem cruzar a linha média. Considerando a organização dos dermátomos, qual estrutura nervosa está relacionada ao padrão apresentado?",
    "options": [
      "(A) Nervo intercostal periférico do mesmo nível torácico.",
      "(B) Raiz nervosa espinhal torácica correspondente ao segmento acometido.",
      "(C) Tronco do plexo nervoso torácico com distribuição segmentar.",
      "(D) Ramo comunicante do sistema nervoso autônomo torácico."
    ],
    "correctAnswer": 1,
    "explanation": "Dor em faixa seguida de vesículas agrupadas num lado do tórax, que param na linha média, em um idoso: é herpes-zóster. Depois da varicela, o vírus fica latente no gânglio sensitivo da raiz dorsal e, quando a imunidade cai (com a idade, por exemplo), reativa e desce pelas fibras sensitivas daquela raiz.\n\nDermátomo é justamente a faixa de pele inervada pelas fibras sensitivas de uma única raiz espinhal. Por isso as lesões seguem um dermátomo e não cruzam a linha média: a estrutura que define o padrão é a raiz nervosa torácica do segmento acometido.",
    "commentary": "Nervo intercostal (A): é o ramo anterior da raiz, um nervo periférico misto; ele faz parte do trajeto, mas o que delimita o dermátomo é a raiz espinhal (e seu gânglio), e o ramo posterior também inerva parte do dermátomo, no dorso.\n\nTronco de plexo torácico (C): os nervos torácicos não formam plexo; além disso, plexos misturam fibras de várias raízes, o que desfaz a distribuição em faixas.\n\nRamo comunicante (D): liga o nervo espinhal à cadeia simpática e conduz fibras autonômicas, não a sensibilidade cutânea por segmento.",
    "tip": "Herpes-zóster: reativação no gânglio da raiz dorsal → lesões em um só dermátomo, que param na linha média.",
    "reference": "HAMMER, G.D.; MCPHEE, S.J. Fisiopatologia da Doença: Uma Introdução à Medicina Clínica. 7 ed. São Paulo: Artmed, 2015.",
    "tags": [
      "anatomia",
      "neurologia",
      "infectologia"
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
    "id": "enamed-2025-85",
    "topography": "14",
    "topic": "Intoxicações",
    "module": "Clínica Médica",
    "text": "Mulher de 42 anos é levada pelo irmão à Unidade de Pronto Atendimento (UPA) com fala alterada, lentificação, tontura e sonolência após relatar ingestão intencional de grande quantidade de clonazepam pouco tempo antes. A paciente evolui com hipotensão, rebaixamento do nível de consciência, coma e necessidade de ventilação mecânica.\n\nQual medicação é indicada nessa situação?",
    "options": [
      "(A) N-acetilcisteína.",
      "(B) Flumazenil.",
      "(C) Naloxona.",
      "(D) Atropina."
    ],
    "correctAnswer": 1,
    "explanation": "O clonazepam pertence à classe dos benzodiazepínicos. O flumazenil é um antagonista competitivo específico dos receptores benzodiazepínicos e pode ser utilizado para reverter a sedação e depressão do sistema nervoso central induzidas por essas substâncias em casos de intoxicação aguda grave (como coma e depressão respiratória).",
    "commentary": "A N-acetilcisteína (A) é o antídoto específico para a intoxicação por paracetamol. A naloxona (C) reverte os efeitos de opioides. A atropina (D) é indicada no tratamento de intoxicações por organofosforados/carbamatos (síndrome colinérgica). Nota clínica: na prática real, o flumazenil deve ser usado com extrema cautela devido ao risco de desencadear convulsões refratárias em usuários crônicos de benzodiazepínicos ou em co-ingestão de agentes pró-convulsivantes.",
    "reference": "Medicina de Emergência / Toxicologia Clínica",
    "tags": [
      "clínica médica",
      "toxicologia",
      "emergência",
      "intoxicação",
      "benzodiazepínicos",
      "flumazenil"
    ]
  },
  {
    "id": "enamed-2026-92",
    "module": "Pediatria",
    "text": "Lactente de 3 meses é levado a uma Unidade Básica de Saúde por apresentar crises de tosse intensa há 15 dias, acentuando-se há 10 dias em crises sucessivas, com associação de vômitos. Durante as crises, apresenta cianose, hemorragia conjuntival, petéquias e rubor facial. Foi realizada imunização somente ao nascimento.\n\nQual exame deve ser realizado para confirmação da hipótese diagnóstica nesse caso?",
    "options": [
      "(A) Bacterioscopia pelo Gram em amostra de swab de nasofaringe.",
      "(B) Hemograma com contagem de plaquetas.",
      "(C) Reação em cadeia da polimerase em amostra de swab de nasofaringe.",
      "(D) Sorologia para toxina em amostra de sangue."
    ],
    "correctAnswer": 2,
    "explanation": "Lactente de 3 meses com vacinação incompleta (sem pentavalente) e tosse paroxística com vômitos, cianose, hemorragia conjuntival e petéquias: coqueluche (Bordetella pertussis).\n\nA confirmação é feita por PCR em tempo real em swab de nasofaringe (ou cultura), coletados idealmente antes do antibiótico.",
    "commentary": "O Gram não identifica B. pertussis. O hemograma pode mostrar leucocitose com linfocitose, mas não confirma o diagnóstico. A sorologia não é usada para diagnóstico em lactentes. (Gabarito preliminar do INEP.)",
    "reference": "Ministério da Saúde. Guia de Vigilância em Saúde — Coqueluche",
    "tags": [
      "pediatria",
      "infectologia",
      "coqueluche"
    ]
  },
  {
    "id": "unifesp2025-35",
    "topography": "7.2",
    "topic": "Hanseníase",
    "module": "Clínica Médica",
    "text": "Homem, 40 anos de idade, está em tratamento para hanseníase dimorfo-virchowiana há 2 meses com poliquimioterapia multibacilar. Refere, há três dias, “caroços” dolorosos na face, tronco e membros, associados a febre de 38,5°C, edema nas mãos e pés, e dor no trajeto dos nervos ulnares bilateralmente.\n\nQual é a conduta mais adequada?",
    "options": [
      "(A) Suspender o tratamento para a hanseníase e iniciar anti-inflamatórios não hormonais.",
      "(B) Manter o tratamento para a hanseníase e associar claritromicina.",
      "(C) Suspender o tratamento para a hanseníase e iniciar metotrexato via oral.",
      "(D) Manter o tratamento para a hanseníase e iniciar prednisona e talidomida."
    ],
    "correctAnswer": 3,
    "explanation": "Paciente multibacilar (dimorfo-virchowiano) em tratamento que desenvolve nódulos dolorosos disseminados, febre, edema de extremidades e neurite: reação hansênica tipo 2 (eritema nodoso hansênico), com acometimento neural.\n\nA poliquimioterapia não deve ser suspensa durante as reações. A talidomida é a droga de escolha no ENH (homem, sem risco de gestação). Como há neurite, associa-se prednisona (1 mg/kg/dia), que protege o nervo.",
    "commentary": "Suspender PQT e usar AINE (A): a PQT nunca é suspensa por reação, e o AINE é insuficiente diante de neurite.\n\nAssociar claritromicina (B): é droga alternativa para a infecção (em resistência ou intolerância), não trata a reação imunológica.\n\nSuspender PQT e usar metotrexato (C): o tratamento não deve ser suspenso, e o metotrexato é opção de terceira linha em ENH refratário.",
    "reference": "Diretrizes para vigilância, atenção e eliminação da hanseníase — Ministério da Saúde, 2016 / Protocolo Clínico e Diretrizes Terapêuticas da Hanseníase (2022)",
    "tags": [
      "dermatologia",
      "hanseníase",
      "reação hansênica",
      "eritema nodoso hansênico"
    ]
  },
  {
    "id": "unifesp2025-84",
    "topography": "3.1",
    "topic": "DRGE",
    "module": "Pediatria",
    "text": "Menino, 7 anos de idade, apresenta queixa de refluxo, queimação retroesternal e dor epigástrica há 1 ano, que não melhoram com uso de inibidor da bomba de prótons. Tem antecedente de alergia à proteína do leite de vaca quando era lactente.\n\nConsiderando o diagnóstico mais provável, qual é o exame recomendado para a confirmação diagnóstica?",
    "options": [
      "(A) Cintilografia gastroesofágica com pesquisa de aspiração pulmonar.",
      "(B) Dosagem de IgE (RAST) para leite de vaca",
      "(C) Manometria esofágica.",
      "(D) Endoscopia digestiva alta com biópsias seriadas."
    ],
    "correctAnswer": 3,
    "explanation": "Criança com sintomas de refluxo (pirose, epigastralgia) refratários ao IBP e antecedente de alergia à proteína do leite de vaca (atopia): a principal hipótese é esofagite eosinofílica.\n\nO diagnóstico exige endoscopia digestiva alta com biópsias de vários níveis do esôfago (proximal, médio e distal), demonstrando 15 ou mais eosinófilos por campo de grande aumento.",
    "commentary": "Cintilografia (A): avalia esvaziamento gástrico e aspiração, não diagnostica esofagite eosinofílica.\n\nIgE específica para leite (B): a esofagite eosinofílica é predominantemente não mediada por IgE; o RAST não confirma o diagnóstico.\n\nManometria (C): avalia distúrbios motores (acalasia); não é exame diagnóstico aqui.",
    "reference": "Consenso Brasileiro sobre Alergia Alimentar (ASBAI/SBP, 2018) / Diretrizes internacionais de esofagite eosinofílica (AGREE, 2018)",
    "tags": [
      "pediatria",
      "esofagite eosinofílica",
      "gastroenterologia pediátrica",
      "endoscopia"
    ]
  },
  {
    "id": "hosbos2027-54",
    "topography": "5.2",
    "topic": "Trabalho de parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "A taxa de prematuridade no Brasil está em torno de 11 - 12% dos nascimentos. A cerclagem uterina é um procedimento realizado para prevenir o nascimento antes das 37 semanas de idade gestacional. Dentre as alternativas a seguir, assinale a que representa indicação desta conduta, de acordo com a ACOG (American College of Obstetricians and Gynecologists) e FEBRASGO (Federação Brasileira de Ginecologia e Obstetrícia).",
    "options": [
      "(A) Em pacientes primigestas, assintomáticas, com colo uterino de 23 mm.",
      "(B) Quando há abertura do colo uterino após cerclagem prévia.",
      "(C) Em gestações gemelares.",
      "(D) Em pacientes com anomalias mullerianas.",
      "(E) Em pacientes com colo curto e trabalho de parto prematuro anterior com IG ≤ 34 semanas."
    ],
    "correctAnswer": 4,
    "explanation": "Pela ACOG e pela Febrasgo, a cerclagem está indicada em:\n\n• História de insuficiência istmocervical (perdas no 2º trimestre indolores)\n• Gestante com parto prematuro espontâneo anterior (< 34 semanas) e colo curto (< 25 mm) antes de 24 semanas\n• Dilatação cervical indolor no 2º trimestre (cerclagem de emergência)\n\nA alternativa E corresponde à indicação por ultrassonografia.",
    "commentary": "Primigesta com colo de 23 mm (A): sem parto prematuro prévio, o colo curto é tratado com progesterona vaginal, não cerclagem.\n\nAbertura do colo após cerclagem prévia (B): não indica nova cerclagem de rotina.\n\nGestação gemelar (C): cerclagem não reduz prematuridade em gemelares sem outra indicação.\n\nAnomalias müllerianas (D): não são indicação isolada de cerclagem.",
    "reference": "ACOG Practice Bulletin 142 (Cerclage) / Febrasgo — Prevenção do parto pré-termo",
    "tags": [
      "obstetrícia",
      "prematuridade",
      "cerclagem",
      "colo curto"
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
    "id": "susba2025-9",
    "topography": "6.1",
    "topic": "Osteoporose",
    "module": "Clínica Médica",
    "text": "Mulher, 65 anos de idade, comparece à UBS para consulta de rotina. Refere dor lombar ocasional, sem outras queixas. Ao exame físico, apresenta leve cifose dorsal e sua estatura parece estar diminuída em 4cm em relação à altura da juventude.\n\nAs medidas não farmacológicas mais adequadas no momento para esta paciente:",
    "options": [
      "(A) Aumento da ingestão de cálcio, exercícios de impacto e resistência e exposição solar regular.",
      "(B) Restrição de atividades com carga, suplementação de vitamina K2 e consumo de fitoestrogênios.",
      "(C) Suplementação de magnésio, aumento do consumo de fibras e restrição de atividades com impacto.",
      "(D) Suplementação de fósforo e cálcio, alongamentos regulares e fisioterapia sem carga."
    ],
    "correctAnswer": 0,
    "explanation": "Medidas não farmacológicas na osteoporose: ingestão adequada de cálcio (preferencialmente pela dieta, cerca de 1.200 mg/dia), exercícios de impacto e de resistência (fortalecem osso e músculo e reduzem quedas) e exposição solar regular para síntese de vitamina D. Também entram prevenção de quedas, suspensão do tabagismo e moderação no álcool.",
    "commentary": "Restrição de carga, vitamina K2 e fitoestrogênios (B): restringir carga acelera a perda óssea; K2 e fitoestrogênios não têm evidência suficiente.\n\nMagnésio, fibras e restrição de impacto (C): não são medidas recomendadas; o exercício com impacto (adequado à paciente) é benéfico.\n\nFósforo, alongamento e fisioterapia sem carga (D): fósforo não é deficiente nesta população, e exercícios sem carga não estimulam a formação óssea.",
    "reference": "PCDT Osteoporose — Ministério da Saúde / Diretriz SBR",
    "tags": [
      "reumatologia",
      "osteoporose",
      "prevenção",
      "exercício físico",
      "cálcio"
    ],
    "tip": "Osso gosta de carga: impacto + resistência, cálcio e sol."
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
    "id": "sespe2026-25",
    "topography": "16",
    "topic": "Nutrição cirúrgica",
    "module": "Cirurgia",
    "text": "Na REMIT, Resposta Endócrino-Metabólica-Imunológica ao Trauma, incluindo os hormônios envolvidos, qual das substâncias abaixo NÃO causa lipólise?",
    "options": [
      "Catecolaminas",
      "Glucagon",
      "Insulina",
      "GH",
      "Cortisol"
    ],
    "correctAnswer": 2,
    "explanation": "Na resposta endócrino-metabólica ao trauma predominam os hormônios catabólicos — catecolaminas, glucagon, cortisol e GH —, que estimulam a lipólise para fornecer energia. A insulina é o principal hormônio anabólico e antilipolítico: inibe a lipase hormônio-sensível e promove armazenamento de gordura. No trauma há resistência à insulina, mas ela, em si, não causa lipólise.",
    "commentary": "Catecolaminas (A): ativam a lipase hormônio-sensível via receptores β, são fortemente lipolíticas.\n\nGlucagon (B): estimula lipólise e gliconeogênese.\n\nGH (D): tem efeito lipolítico, poupando proteína.\n\nCortisol (E): favorece lipólise, proteólise e gliconeogênese.",
    "reference": "Sabiston — Tratado de Cirurgia (resposta metabólica ao trauma) / Guyton — Fisiologia",
    "tags": [
      "cirurgia geral",
      "resposta metabólica ao trauma",
      "insulina",
      "lipólise"
    ],
    "tip": "No trauma, todos os hormônios contrarreguladores fazem lipólise — a insulina não."
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
  }
];
