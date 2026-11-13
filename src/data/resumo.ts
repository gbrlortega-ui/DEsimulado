// Arquivo gerado por `npm run gen` a partir do banco de questões. Não editar à mão.
// O build e o servidor local regeneram este arquivo sozinhos; o `npm run validate` acusa se ficar desatualizado.
import type { Question } from '../types';

export const TOTAL_QUESTIONS = 1964;

export const COUNT_BY_AREA: Record<string, number> = {
  "Pediatria": 362,
  "Clínica Médica": 396,
  "Cirurgia": 340,
  "Ginecologia e Obstetrícia": 356,
  "Saúde Coletiva": 350,
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
  "Saúde Coletiva|SES-PE": 20
};

/** Questões por especialidade ou região da topografia ("1.1", "8"). */
export const TOPOGRAPHY_COUNT: Record<string, number> = {
  "8": 57,
  "9": 51,
  "10": 88,
  "11": 205,
  "12": 16,
  "13": 45,
  "14": 77,
  "15": 308,
  "16": 125,
  "1.2": 12,
  "1.3": 21,
  "7.2": 34,
  "4.2": 23,
  "1.1": 61,
  "1.5": 26,
  "6.1": 37,
  "3.1": 68,
  "4.1": 67,
  "2.1": 75,
  "6.2": 19,
  "2.2": 76,
  "3.2": 22,
  "3.3": 21,
  "7.1": 23,
  "1.4": 2,
  "3.4": 14,
  "5.1": 155,
  "5.2": 181
};

/** Questões por assunto, na chave "1.1|Cefaleias". */
export const TOPIC_COUNT: Record<string, number> = {
  "11|Puericultura": 21,
  "1.2|Catarata": 4,
  "11|Icterícia neonatal": 8,
  "11|Obesidade infantil": 7,
  "1.3|Amigdalite/faringoamigdalite": 11,
  "7.2|Urticária": 1,
  "1.2|Uveíte": 2,
  "4.2|Estenose de uretra": 2,
  "11|Calendário vacinal": 11,
  "1.1|TCE": 10,
  "11|Maus-tratos infantis": 13,
  "11|Prematuridade": 2,
  "11|Anemia ferropriva": 11,
  "9|Trombocitopenias": 4,
  "11|Aleitamento materno": 17,
  "1.5|Hipotireoidismo": 7,
  "11|Síndrome do desconforto respiratório neonatal": 7,
  "14|Emergências pediátricas": 12,
  "6.1|Artrite reumatoide": 7,
  "9|Talassemias": 1,
  "11|ITU pediátrica": 6,
  "11|Diarreia aguda": 8,
  "14|Trauma": 27,
  "11|Cardiopatias congênitas": 18,
  "3.1|Constipação intestinal": 5,
  "10|Raiva": 6,
  "1.1|Cefaleias": 7,
  "1.3|Surdez": 2,
  "11|Desenvolvimento neuropsicomotor": 16,
  "9|Anemia falciforme": 7,
  "11|Asma infantil": 15,
  "11|Doença de Kawasaki": 1,
  "1.5|Hipertireoidismo": 9,
  "11|Desidratação": 7,
  "11|Sepse neonatal": 7,
  "9|Leucemias": 8,
  "1.3|Otite média aguda": 2,
  "11|Convulsão febril": 5,
  "11|Pneumonia infantil": 6,
  "11|Refluxo gastroesofágico": 2,
  "11|Bronquiolite": 7,
  "11|Desnutrição": 2,
  "10|Sífilis": 14,
  "4.1|Síndrome nefrítica": 3,
  "2.1|Bronquiectasias": 2,
  "8|Insuficiência adrenal": 6,
  "6.2|Escoliose": 2,
  "14|Intoxicações": 10,
  "15|Ética médica": 13,
  "4.1|Síndrome nefrótica": 5,
  "1.3|Laringite": 3,
  "7.2|Dermatite atópica": 4,
  "14|Sepse e choque séptico": 7,
  "8|Síndrome de Cushing": 3,
  "4.2|Torção testicular": 5,
  "2.2|Arritmias": 6,
  "9|Anemias": 1,
  "10|Tétano": 1,
  "8|Feocromocitoma": 2,
  "9|Linfomas": 3,
  "8|Cetoacidose diabética": 13,
  "3.1|Diarreia crônica": 3,
  "1.2|Erros refrativos": 1,
  "10|Dengue": 14,
  "4.1|Distúrbios hidroeletrolíticos": 10,
  "4.1|Lesão renal aguda": 11,
  "8|Diabetes mellitus tipo 1 e 2": 21,
  "1.1|Demências": 6,
  "6.1|Lúpus eritematoso sistêmico": 6,
  "1.1|Epilepsia": 5,
  "10|Tuberculose": 19,
  "2.1|DPOC": 17,
  "9|Anemia ferropriva": 6,
  "3.2|Hepatites virais": 5,
  "2.2|Dislipidemia": 6,
  "2.2|Insuficiência cardíaca": 11,
  "2.2|Hipertensão arterial sistêmica": 17,
  "4.1|Cistite": 6,
  "13|Dependência química": 6,
  "3.1|DRGE": 8,
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
  "2.2|Infarto agudo do miocárdio": 7,
  "2.1|Embolia pulmonar": 6,
  "2.1|Câncer de pulmão": 6,
  "4.1|Pielonefrite": 6,
  "4.1|Doença renal crônica": 8,
  "3.1|Doença inflamatória intestinal": 11,
  "3.1|Doença celíaca": 1,
  "3.2|Cirrose hepática": 2,
  "1.1|Meningite": 9,
  "1.1|Parkinson": 3,
  "9|Anemia hemolítica": 3,
  "3.2|Encefalopatia hepática": 1,
  "13|Esquizofrenia": 5,
  "6.1|Gota": 4,
  "7.2|Hanseníase": 6,
  "7.2|Escabiose": 6,
  "2.2|Síndrome coronariana aguda": 9,
  "4.1|Glomerulonefrite": 2,
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
  "16|Feridas": 14,
  "16|Pré-operatório": 16,
  "16|Hérnias": 14,
  "3.3|Colangite aguda": 4,
  "3.1|Hemorragia digestiva baixa": 2,
  "7.1|Doença arterial periférica": 5,
  "6.2|Fraturas": 5,
  "1.1|Hipertensão intracraniana": 3,
  "14|Queimaduras": 7,
  "1.3|Câncer de cabeça e pescoço": 1,
  "1.2|Ceratite": 3,
  "14|Choque": 4,
  "16|Trauma abdominal": 10,
  "6.2|Hérnia de disco": 2,
  "16|Obstrução intestinal": 15,
  "7.1|Trombose venosa profunda": 7,
  "4.2|Câncer de próstata": 5,
  "3.1|Hemorragia digestiva alta": 9,
  "3.1|Doença hemorroidária": 5,
  "7.1|Aneurisma de aorta abdominal": 4,
  "3.2|Hepatocarcinoma": 3,
  "10|Doença de Chagas": 3,
  "1.4|Doença periodontal": 1,
  "3.3|Colecistite aguda": 2,
  "16|Trauma torácico": 16,
  "16|Apendicite aguda": 6,
  "16|Perfuração de víscera oca": 6,
  "3.3|Colangiocarcinoma": 3,
  "3.4|Pancreatite aguda": 7,
  "3.1|Câncer colorretal": 9,
  "8|Obesidade": 5,
  "7.1|Isquemia arterial aguda": 2,
  "7.2|Celulite": 2,
  "16|Pós-operatório": 18,
  "7.1|Insuficiência venosa crônica": 3,
  "6.2|Lesões do manguito rotador": 1,
  "16|Isquemia mesentérica": 4,
  "1.5|Nódulos tireoidianos": 3,
  "16|Abdome agudo": 3,
  "6.2|Lombalgia": 3,
  "7.2|Carcinoma espinocelular": 1,
  "6.2|Luxações": 1,
  "3.3|Colelitíase": 7,
  "5.1|Sangramento uterino anormal": 14,
  "5.1|Climatério e menopausa": 18,
  "5.1|Contracepção": 24,
  "5.1|Câncer de colo uterino": 24,
  "5.1|Vaginose bacteriana": 4,
  "5.2|Diabetes gestacional": 17,
  "5.2|Assistência ao parto": 8,
  "5.2|Puerpério": 12,
  "5.2|Infecções na gestação": 22,
  "5.2|Rotura prematura de membranas": 6,
  "15|Rastreamento": 17,
  "5.1|Câncer de endométrio": 6,
  "5.2|Gravidez ectópica": 8,
  "5.2|Diagnóstico de gravidez": 1,
  "5.2|Pré-natal": 23,
  "5.2|Hemorragia pós-parto": 7,
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
  "5.1|Doença inflamatória pélvica": 5,
  "5.1|Candidíase vaginal": 3,
  "5.2|Eclâmpsia": 1,
  "5.2|Descolamento prematuro de placenta": 10,
  "5.2|Isoimunização Rh": 4,
  "5.1|Tricomoníase": 2,
  "5.2|Síndrome HELLP": 1,
  "5.1|Planejamento reprodutivo": 4,
  "8|Prolactinoma": 2,
  "10|Infecções sexualmente transmissíveis": 8,
  "15|Bioética": 6,
  "5.2|Idade gestacional": 5,
  "4.2|Incontinência urinária": 5,
  "5.2|Placenta prévia": 2,
  "15|Atenção Primária": 63,
  "15|Saúde do idoso": 4,
  "15|SUS": 41,
  "12|Polifarmácia": 2,
  "15|Imunização": 19,
  "15|Saúde do trabalhador": 17,
  "15|Estudos epidemiológicos": 25,
  "15|Epidemiologia": 37,
  "15|Vigilância epidemiológica": 25,
  "15|Testes diagnósticos": 15,
  "15|Estratégia Saúde da Família": 7,
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
  "3.1|Úlcera péptica": 2,
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
  "3.1|Fissura anal": 1,
  "6.1|Vasculites": 2,
  "3.3|Coledocolitíase": 4,
  "14|Emergências obstétricas": 3,
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
  "8|Distúrbios do cálcio": 1,
  "14|Parada cardiorrespiratória": 2,
  "4.1|Nefropatia diabética": 1,
  "2.2|Choque cardiogênico": 1,
  "12|Cuidados paliativos": 5,
  "10|Toxoplasmose": 1,
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
  "10|Meningococcemia": 2,
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
    "id": "tp2022-43",
    "topography": "11",
    "topic": "Calendário vacinal",
    "module": "Pediatria",
    "text": "Lactente de 12 meses, vacinas em dia até os 6 meses, viajará para o Pará (área endêmica). Quais vacinas deve receber neste momento?",
    "options": [
      "(A) Pneumocócica 10 valente, meningococo C e febre amarela concomitantes; tríplice viral após um mês.",
      "(B) Tríplice viral (SCR), meningococo C e pneumocócica 10 valente concomitantes; febre amarela após um mês.",
      "(C) Tríplice bacteriana (DPT), meningococo C e tríplice viral (SCR) concomitantes; varicela após um mês.",
      "(D) Pneumocócica 10 valente, meningococo C, tetra viral (SCRV) e febre amarela concomitantes."
    ],
    "correctAnswer": 0,
    "explanation": "A criança tem 12 meses e as últimas doses foram aos 6 meses: faltam a febre amarela (prevista aos 9 meses e hoje recomendada em todo o país) e as vacinas dos 12 meses (tríplice viral e reforços da pneumocócica 10-valente e da meningocócica C). A viagem para o Norte torna a febre amarela prioritária, e ela deve ser dada pelo menos 10 dias antes da viagem para garantir proteção.\n\nEm crianças menores de 2 anos que nunca receberam essas vacinas, febre amarela e tríplice viral (ou tetraviral) não devem ser aplicadas no mesmo dia, porque a coadministração reduz a resposta imune; o intervalo recomendado é de 30 dias. Assim, aplica-se agora febre amarela com pneumocócica e meningocócica, e a tríplice viral um mês depois.",
    "commentary": "Tríplice viral agora e febre amarela depois (B): adiaria a febre amarela e a criança viajaria sem proteção para área de risco.\n\nDTP e varicela (C): o reforço da DTP e a varicela fazem parte do esquema dos 15 meses; e deixar de dar a febre amarela antes da viagem é o erro principal.\n\nTetraviral com febre amarela juntas (D): a tetraviral contém sarampo, caxumba e rubéola e não deve ser aplicada com a febre amarela no mesmo dia em menores de 2 anos; além disso, ela é a dose dos 15 meses.",
    "tip": "Menor de 2 anos: febre amarela e tríplice viral com 30 dias de intervalo. Viagem para área de risco: febre amarela primeiro.",
    "reference": "Norma Técnica do Programa de Imunização, SES-SP, 2021.",
    "tags": [
      "imunização"
    ]
  },
  {
    "id": "tp2021-47",
    "topography": "4.1",
    "topic": "Síndrome nefrótica",
    "module": "Pediatria",
    "text": "Menino, 5 anos, acorda pela manhã e a mãe observa o aparecimento de edema facial, marcadamente bipalpebral. Evolui com edema generalizado, acometendo os membros inferiores e parede do abdômen ao longo da semana. Refere diminuição da diurese sem outras alterações urinárias. Nega doenças anteriores. Exame físico: PA entre percentil 50 e 90 para a idade, sexo e percentil de altura. As alterações laboratoriais esperadas são:",
    "options": [
      "(A) Hematúria e cilindros hemáticos em Urina tipo 1 (EAS).",
      "(B) Proteinúria maciça e colesterol total e frações aumentadas.",
      "(C) Consumo de complemento C3 e complemento total CH50.",
      "(D) Antiestreptolisina (ASLO) aumentada e hematúria."
    ],
    "correctAnswer": 1,
    "explanation": "A instalação insidiosa de edema generalizado (anasarca) associada a níveis tensionais normais em pré-escolar é o protótipo clínico da Síndrome Nefrótica Idiopática (geralmente por doença de lesão mínima). Laboratorialmente, caracteriza-se por proteinúria massiva e hipercolesterolemia com hipoalbuminemia.",
    "commentary": "O quadro clínico descreve paciente com fenótipo sugestivo de Síndrome Nefrótica. A proteinúria intensa leva a hipoalbuminemia acentuada, a qual reduz a pressão oncótica capilar gerando edema volumoso. Em resposta, há aumento reflexo da síntese hepática de lipoproteínas, elevando sobremaneira o colesterol urinário e circulante. Hematúria e consumo de complemento apontariam para diagnóstico nefrítico.",
    "reference": "Nefrologia Pediátrica - Prática Clínica, SBP.",
    "tags": [
      "nefrologia"
    ]
  },
  {
    "id": "tp2024-22",
    "topography": "10",
    "topic": "Dengue",
    "module": "Clínica Médica",
    "text": "Paciente do sexo feminino, 30 anos, admitida no prontosocorro com queixa de febre há 3 dias, associada a cefaleia, dor retro-orbitária, prostração e mialgia. Nega náuseas e vômitos. Foi diagnosticada como dengue e classificada como grupo A, com tratamento ambulatorial e orientada a retornar caso apresentasse sinais de alarme. É considerado um sinal de alarme:",
    "options": [
      "(A) Esplenomegalia",
      "(B) Derrame pleural",
      "(C) Petéquias",
      "(D) Prova do laço positiva"
    ],
    "correctAnswer": 1,
    "explanation": "Os sinais de alarme da dengue marcam o extravasamento de plasma que costuma surgir na defervescência, entre o terceiro e o sétimo dia. Pelo Ministério da Saúde, entram na lista: dor abdominal forte e persistente, vômitos que não cessam, coleções de líquido (ascite, derrame pleural ou pericárdico), queda da pressão ao ficar de pé ou lipotimia, fígado palpável 2 cm ou mais abaixo da costela, sangramento em mucosas, sonolência ou irritabilidade e hematócrito em elevação progressiva.\n\nO derrame pleural é um desses sinais. Quem os apresenta passa para o grupo C e precisa de hidratação venosa e internação.",
    "commentary": "Esplenomegalia (A): não faz parte da lista de sinais de alarme da dengue.\n\nPetéquias (C): sangramento de pele espontâneo coloca o paciente no grupo B, mas não é sinal de alarme; o sangramento que alarma é o de mucosa.\n\nProva do laço positiva (D): também classifica no grupo B (sangramento induzido), mas não indica extravasamento de plasma.",
    "tip": "Dengue: acúmulo de líquido (ascite, derrame pleural) é alarme; petéquias e prova do laço só levam ao grupo B.",
    "reference": "Dengue: Diagnóstico e manejo clínico – Adulto e criança, 6ª edição. Ministério da Saúde, Secretaria de vigilância e saúde e ambiente, Departamento de doenças transmissíveis, Brasil, 2024.",
    "tags": [
      "infectologia",
      "dengue"
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
    "id": "tp2024-74",
    "topography": "1.2",
    "topic": "Ceratite",
    "module": "Cirurgia",
    "text": "Soda cáustica no olho. Dor intensa, vermelhidão e baixa visão. Qual a conduta?",
    "options": [
      "(A) Antibiótico tópico e endovenoso e chamar oftalmo.",
      "(B) Encaminhamento urgente cirúrgico.",
      "(C) Antibiótico tópico e retorno em 15 dias.",
      "(D) Lavagem intensa com soro fisiológico e encaminhamento ao oftalmologista."
    ],
    "correctAnswer": 3,
    "explanation": "Soda cáustica é um álcali, e queimaduras oculares por álcali são as mais graves, porque o produto saponifica as membranas celulares e continua penetrando na córnea e nas estruturas internas do olho enquanto houver contato. Dor intensa, hiperemia, baixa da visão e ceratite grave mostram lesão importante.\n\nA conduta imediata, antes de qualquer outra coisa, é irrigação abundante e prolongada com soro fisiológico (ou água limpa, se não houver soro), com o olho aberto e removendo partículas dos fundos de saco, até neutralizar o pH da superfície. Depois, usam-se colírio antibiótico e lubrificante para proteger a córnea enquanto ela reepiteliza, e o paciente é encaminhado ao oftalmologista para avaliação da extensão da lesão.",
    "commentary": "Internação com antibiótico tópico e endovenoso (A): antibiótico venoso não tem papel, e chamar o oftalmologista sem antes irrigar deixa o álcali agir por mais tempo.\n\nEncaminhamento cirúrgico urgente (B): a lesão aguda não é cirúrgica de imediato; o que define o prognóstico é a irrigação feita no primeiro atendimento.\n\nColírio antibiótico e retorno em 15 dias (C): sem irrigação e sem seguimento próximo, a queimadura progride e pode levar a perda visual.",
    "tip": "Queimadura química no olho, sobretudo por álcali: irrigar muito, já, antes de qualquer exame; depois oftalmologista.",
    "reference": "Oftalmologia Geral - Vaughan & Asbury, 17ª ed.",
    "tags": [
      "oftalmologia",
      "emergência"
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
    "id": "tp2025-20",
    "topography": "2.2",
    "topic": "Síndrome coronariana aguda",
    "module": "Ciências Básicas",
    "text": "Um paciente de 58 anos chega ao pronto atendimento relatando dor torácica intensa há aproximadamente quatro horas, acompanhada de sudorese e dispneia. O exame físico revela taquicardia e pressão arterial de 140/90mmHg. O eletrocardiograma mostra alterações sugestivas de isquemia miocárdica. Para confirmar o diagnóstico de infarto agudo do miocárdio (IAM), qual marcador sérico é considerado o principal, devido a sua alta especificidade?",
    "options": [
      "(A) Creatina quinase total (CK total)",
      "(B) Troponinas (cTnI e cTnT)",
      "(C) Desidrogenase lática (LDH)",
      "(D) Aspartato aminotransferase (AST)"
    ],
    "correctAnswer": 1,
    "explanation": "As troponinas (cTnI e cTnT) são altamente específicas para o músculo cardíaco e o principal biomarcador de escolha preconizado para a confirmação de lesão miocárdica no IAM.",
    "commentary": "As troponinas elevam-se 3-6 horas pós-evento isquêmico e têm alta especificidade diagnóstica. CK-total, LDH e AST são enzimas dispersas em tecidos musculoesqueléticos ou hepatócitos.",
    "reference": "THYGESEN, K. et al. Fourth Universal Definition of Myocardial Infarction (2018). J Am Coll Cardiol.",
    "tags": [
      "cardiologia",
      "fisiologia"
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
    "id": "enamed-2025-52",
    "topography": "11",
    "topic": "Desenvolvimento neuropsicomotor",
    "module": "Pediatria",
    "text": "Mãe de menina de 11 meses, em consulta de puericultura, relata que não há queixas específicas no momento e refere que a criança está começando a trocar passos de maneira independente. Apresenta marcos do desenvolvimento anteriores a 11 meses dentro da normalidade e bom ganho pôndero-estatural. Gestação e parto sem intercorrências.\n\nO reflexo primitivo usualmente presente nessa faixa etária é o",
    "options": [
      "(A) reflexo plantar.",
      "(B) reflexo de Moro.",
      "(C) reflexo de procura.",
      "(D) reflexo tônico cervical."
    ],
    "correctAnswer": 0,
    "explanation": "O reflexo plantar (Babinski fisiológico) é um reflexo primitivo que normalmente permanece presente em lactentes e crianças pequenas, podendo persistir de forma fisiológica até aproximadamente 12 a 24 meses de idade devido à incompleta mielinização do trato corticoespinal (via piramidal).",
    "commentary": "Os demais reflexos primitivos desaparecem bem mais cedo no desenvolvimento do lactente normal: o reflexo de procura (C) some com 3 a 4 meses; o reflexo de Moro (B) desaparece entre 4 e 6 meses; e o reflexo tônico-cervical assimétrico (D) desaparece por volta dos 6 meses de idade.",
    "reference": "Nelson Tratado de Pediatria / Sociedade Brasileira de Pediatria (SBP)",
    "tags": [
      "pediatria",
      "puericultura",
      "desenvolvimento infantil",
      "reflexos primitivos"
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
    "id": "unifesp2025-87",
    "topography": "3.1",
    "topic": "Constipação intestinal",
    "module": "Pediatria",
    "text": "Lactente de 8 meses, bem nutrido, há 2 meses, desde o início da alimentação complementar, evacua fezes endurecidas e muito calibrosas, a cada 4 a 5 dias, com muito esforço e dor (choro). Mãe aumentou fibra na dieta, sem melhora. Nega atraso de eliminação de mecônio e apresenta exame físico sem alterações.\n\nConsiderando o diagnóstico mais provável, qual é o tratamento recomendado?",
    "options": [
      "(A) Óleo mineral.",
      "(B) Probiótico.",
      "(C) Exclusão da proteína do leite de vaca.",
      "(D) Lactulose."
    ],
    "correctAnswer": 3,
    "explanation": "Constipação funcional do lactente (fezes endurecidas e calibrosas a cada 4–5 dias, com dor e esforço, iniciada com a alimentação complementar), sem sinais de alarme: mecônio sem atraso, bom crescimento e exame normal.\n\nCom a falha das medidas dietéticas, o tratamento é o laxativo osmótico. Em lactentes, a lactulose é segura; o polietilenoglicol também pode ser usado conforme o protocolo local.",
    "commentary": "Óleo mineral (A): contraindicado em lactentes pelo risco de aspiração e pneumonia lipoídica.\n\nProbiótico (B): sem evidência suficiente para recomendação no tratamento da constipação.\n\nExclusão da proteína do leite (C): cogitada só em constipação refratária ao tratamento habitual, não como primeira linha.",
    "reference": "ESPGHAN/NASPGHAN — Constipação funcional na infância (2014) / SBP — Constipação intestinal",
    "tags": [
      "pediatria",
      "constipação funcional",
      "gastroenterologia pediátrica",
      "lactulose"
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
    "id": "iog2026-4",
    "topography": "7.2",
    "topic": "Psoríase",
    "module": "Clínica Médica",
    "text": "Mulher, 45 anos de idade, apresenta há 8 anos lesões eritematosas e descamativas, bem delimitadas, com eritema vermelho vivo e escamas branco-prateadas aderentes e esparsas no couro cabeludo, região sacral, cotovelos e joelhos. Sinal da vela e do orvalho sangrento estão presentes. Apresenta história de monoartrite de articulação interfalangeana proximal no 3° quirodáctilo direito.\n\nQual é o diagnóstico?",
    "options": [
      "Lúpus eritematoso cutâneo crônico.",
      "Psoríase.",
      "Artrite reumatoide.",
      "Dermatite seborreica."
    ],
    "correctAnswer": 1,
    "explanation": "Placas eritematosas bem delimitadas com escamas branco-prateadas em couro cabeludo, região sacral, cotovelos e joelhos (superfícies extensoras), com sinal da vela (escamas que se destacam como raspas de vela) e do orvalho sangrento (sinal de Auspitz): psoríase vulgar. A monoartrite de interfalangeana sugere artrite psoriásica associada.",
    "commentary": "Lúpus cutâneo crônico (A): lesões discoides com atrofia, cicatriz e alteração de pigmento, em áreas fotoexpostas; não tem sinal da vela nem de Auspitz.\n\nArtrite reumatoide (C): artrite simétrica de pequenas articulações, sem as lesões cutâneas descritas.\n\nDermatite seborreica (D): escamas amareladas e oleosas em face, couro cabeludo e dobras, sem placas extensoras nem Auspitz.",
    "reference": "Consenso Brasileiro de Psoríase (SBD, 2020)",
    "tags": [
      "dermatologia",
      "psoríase",
      "sinal de Auspitz",
      "artrite psoriásica"
    ],
    "tip": "Escama prateada + sinal da vela + orvalho sangrento = psoríase."
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
  }
];
