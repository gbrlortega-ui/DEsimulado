// Arquivo gerado por `npm run gen` a partir do banco de questões. Não editar à mão.
// O build e o servidor local regeneram este arquivo sozinhos; o `npm run validate` acusa se ficar desatualizado.
import type { Question } from '../types';

export const TOTAL_QUESTIONS = 1864;

export const COUNT_BY_AREA: Record<string, number> = {
  "Pediatria": 342,
  "Clínica Médica": 376,
  "Cirurgia": 320,
  "Ginecologia e Obstetrícia": 336,
  "Saúde Coletiva": 330,
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
  "Saúde Coletiva|IOG": 10
};

/** Questões por especialidade ou região da topografia ("1.1", "8"). */
export const TOPOGRAPHY_COUNT: Record<string, number> = {
  "8": 56,
  "9": 48,
  "10": 86,
  "11": 193,
  "12": 15,
  "13": 42,
  "14": 74,
  "15": 289,
  "16": 118,
  "1.2": 12,
  "1.3": 21,
  "7.2": 34,
  "4.2": 23,
  "1.1": 59,
  "1.5": 24,
  "6.1": 36,
  "3.1": 61,
  "4.1": 63,
  "2.1": 72,
  "6.2": 19,
  "2.2": 74,
  "3.2": 19,
  "3.3": 18,
  "7.1": 22,
  "1.4": 2,
  "3.4": 12,
  "5.1": 146,
  "5.2": 171
};

/** Questões por assunto, na chave "1.1|Cefaleias". */
export const TOPIC_COUNT: Record<string, number> = {
  "11|Puericultura": 18,
  "1.2|Catarata": 4,
  "11|Icterícia neonatal": 8,
  "11|Obesidade infantil": 7,
  "1.3|Amigdalite/faringoamigdalite": 11,
  "7.2|Urticária": 1,
  "1.2|Uveíte": 2,
  "4.2|Estenose de uretra": 2,
  "11|Calendário vacinal": 10,
  "1.1|TCE": 10,
  "11|Maus-tratos infantis": 13,
  "11|Prematuridade": 2,
  "11|Anemia ferropriva": 11,
  "9|Trombocitopenias": 4,
  "11|Aleitamento materno": 16,
  "1.5|Hipotireoidismo": 6,
  "11|Síndrome do desconforto respiratório neonatal": 6,
  "14|Emergências pediátricas": 11,
  "6.1|Artrite reumatoide": 7,
  "9|Talassemias": 1,
  "11|ITU pediátrica": 6,
  "11|Diarreia aguda": 8,
  "14|Trauma": 26,
  "11|Cardiopatias congênitas": 18,
  "3.1|Constipação intestinal": 5,
  "10|Raiva": 6,
  "1.1|Cefaleias": 7,
  "1.3|Surdez": 2,
  "11|Desenvolvimento neuropsicomotor": 14,
  "9|Anemia falciforme": 7,
  "11|Asma infantil": 15,
  "11|Doença de Kawasaki": 1,
  "1.5|Hipertireoidismo": 9,
  "11|Desidratação": 7,
  "11|Sepse neonatal": 6,
  "9|Leucemias": 8,
  "1.3|Otite média aguda": 2,
  "11|Convulsão febril": 5,
  "11|Pneumonia infantil": 5,
  "11|Refluxo gastroesofágico": 2,
  "11|Bronquiolite": 6,
  "11|Desnutrição": 2,
  "10|Sífilis": 14,
  "4.1|Síndrome nefrítica": 2,
  "2.1|Bronquiectasias": 2,
  "8|Insuficiência adrenal": 6,
  "6.2|Escoliose": 2,
  "14|Intoxicações": 10,
  "15|Ética médica": 13,
  "4.1|Síndrome nefrótica": 5,
  "1.3|Laringite": 3,
  "7.2|Dermatite atópica": 4,
  "14|Sepse e choque séptico": 6,
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
  "4.1|Distúrbios hidroeletrolíticos": 9,
  "4.1|Lesão renal aguda": 10,
  "8|Diabetes mellitus tipo 1 e 2": 20,
  "1.1|Demências": 6,
  "6.1|Lúpus eritematoso sistêmico": 6,
  "1.1|Epilepsia": 5,
  "10|Tuberculose": 18,
  "2.1|DPOC": 15,
  "9|Anemia ferropriva": 6,
  "3.2|Hepatites virais": 5,
  "2.2|Dislipidemia": 5,
  "2.2|Insuficiência cardíaca": 11,
  "2.2|Hipertensão arterial sistêmica": 16,
  "4.1|Cistite": 6,
  "13|Dependência química": 6,
  "3.1|DRGE": 8,
  "2.1|Asma": 9,
  "2.1|Pneumonia comunitária": 13,
  "13|Abstinência alcoólica": 6,
  "6.1|Osteoartrose": 2,
  "2.1|Tuberculose pulmonar": 1,
  "7.2|Herpes-zóster": 2,
  "1.1|AVC": 15,
  "7.2|Erisipela": 2,
  "7.2|Melanoma": 3,
  "4.1|Nefrolitíase": 8,
  "2.2|Valvopatias": 4,
  "6.1|Fibromialgia": 3,
  "2.2|Infarto agudo do miocárdio": 7,
  "2.1|Embolia pulmonar": 5,
  "2.1|Câncer de pulmão": 6,
  "4.1|Pielonefrite": 6,
  "4.1|Doença renal crônica": 7,
  "3.1|Doença inflamatória intestinal": 11,
  "3.1|Doença celíaca": 1,
  "3.2|Cirrose hepática": 2,
  "1.1|Meningite": 8,
  "1.1|Parkinson": 3,
  "9|Anemia hemolítica": 2,
  "3.2|Encefalopatia hepática": 1,
  "13|Esquizofrenia": 5,
  "6.1|Gota": 3,
  "7.2|Hanseníase": 6,
  "7.2|Escabiose": 6,
  "2.2|Síndrome coronariana aguda": 9,
  "4.1|Glomerulonefrite": 2,
  "10|HIV/AIDS": 8,
  "12|Delirium": 4,
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
  "13|Depressão maior": 5,
  "8|Hiperaldosteronismo primário": 3,
  "16|Feridas": 13,
  "16|Pré-operatório": 15,
  "16|Hérnias": 13,
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
  "7.1|Trombose venosa profunda": 6,
  "4.2|Câncer de próstata": 5,
  "3.1|Hemorragia digestiva alta": 9,
  "3.1|Doença hemorroidária": 4,
  "7.1|Aneurisma de aorta abdominal": 4,
  "3.2|Hepatocarcinoma": 2,
  "10|Doença de Chagas": 3,
  "1.4|Doença periodontal": 1,
  "3.3|Colecistite aguda": 2,
  "16|Trauma torácico": 15,
  "16|Apendicite aguda": 6,
  "16|Perfuração de víscera oca": 6,
  "3.3|Colangiocarcinoma": 3,
  "3.4|Pancreatite aguda": 6,
  "3.1|Câncer colorretal": 8,
  "8|Obesidade": 5,
  "7.1|Isquemia arterial aguda": 2,
  "7.2|Celulite": 2,
  "16|Pós-operatório": 17,
  "7.1|Insuficiência venosa crônica": 3,
  "6.2|Lesões do manguito rotador": 1,
  "16|Isquemia mesentérica": 4,
  "1.5|Nódulos tireoidianos": 3,
  "16|Abdome agudo": 3,
  "6.2|Lombalgia": 3,
  "7.2|Carcinoma espinocelular": 1,
  "6.2|Luxações": 1,
  "3.3|Colelitíase": 5,
  "5.1|Sangramento uterino anormal": 14,
  "5.1|Climatério e menopausa": 17,
  "5.1|Contracepção": 23,
  "5.1|Câncer de colo uterino": 23,
  "5.1|Vaginose bacteriana": 4,
  "5.2|Diabetes gestacional": 16,
  "5.2|Assistência ao parto": 8,
  "5.2|Puerpério": 12,
  "5.2|Infecções na gestação": 22,
  "5.2|Rotura prematura de membranas": 5,
  "15|Rastreamento": 17,
  "5.1|Câncer de endométrio": 6,
  "5.2|Gravidez ectópica": 8,
  "5.2|Diagnóstico de gravidez": 1,
  "5.2|Pré-natal": 20,
  "5.2|Hemorragia pós-parto": 7,
  "5.2|Trabalho de parto": 21,
  "5.1|Mioma uterino": 8,
  "5.1|Endometriose": 9,
  "5.1|Infertilidade": 8,
  "5.1|Prolapso genital": 5,
  "5.1|Câncer de ovário": 7,
  "15|Saúde da mulher": 8,
  "5.2|Pré-eclâmpsia": 14,
  "5.2|Abortamento": 14,
  "5.1|Síndrome dos ovários policísticos": 5,
  "5.1|Doença inflamatória pélvica": 5,
  "5.1|Candidíase vaginal": 3,
  "5.2|Eclâmpsia": 1,
  "5.2|Descolamento prematuro de placenta": 9,
  "5.2|Isoimunização Rh": 4,
  "5.1|Tricomoníase": 2,
  "5.2|Síndrome HELLP": 1,
  "5.1|Planejamento reprodutivo": 4,
  "8|Prolactinoma": 2,
  "10|Infecções sexualmente transmissíveis": 7,
  "15|Bioética": 5,
  "5.2|Idade gestacional": 4,
  "4.2|Incontinência urinária": 5,
  "5.2|Placenta prévia": 2,
  "15|Atenção Primária": 59,
  "15|Saúde do idoso": 4,
  "15|SUS": 40,
  "12|Polifarmácia": 2,
  "15|Imunização": 18,
  "15|Saúde do trabalhador": 15,
  "15|Estudos epidemiológicos": 23,
  "15|Epidemiologia": 36,
  "15|Vigilância epidemiológica": 24,
  "15|Testes diagnósticos": 14,
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
  "15|Bioestatística": 3,
  "3.2|Ascite": 2,
  "14|Crise hipertensiva": 1,
  "7.2|Dermatite de contato": 1,
  "1.1|Esclerose múltipla": 1,
  "3.1|Úlcera péptica": 2,
  "9|Neutropenia febril": 1,
  "13|Transtornos alimentares": 4,
  "4.2|Fimose": 1,
  "3.4|Câncer de pâncreas": 2,
  "3.4|Pancreatite crônica": 4,
  "3.1|Diverticulose/diverticulite": 4,
  "6.1|Espondilite anquilosante": 4,
  "3.2|Colestase": 1,
  "1.5|Tireoidites": 1,
  "13|TOC": 1,
  "3.1|Fissura anal": 1,
  "6.1|Vasculites": 2,
  "3.3|Coledocolitíase": 3,
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
  "5.2|Restrição de crescimento fetal": 2,
  "5.1|Adenomiose": 1,
  "7.2|Pênfigo e penfigoide": 1,
  "1.4|Câncer de boca": 1,
  "2.1|Pneumonia hospitalar": 1,
  "1.5|Hiperparatireoidismo": 1,
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
    "id": "tp2022-42",
    "topography": "11",
    "topic": "Desenvolvimento neuropsicomotor",
    "module": "Pediatria",
    "text": "Lactente de 18 meses com marcos de desenvolvimento adequados (anda, aponta, entende o não), porém fala apenas \"mamã\" e \"papá\" e não compõe frases. Qual a conduta esperada do pediatra?",
    "options": [
      "(A) Sobre a estimulação da fala e encaminhar para a fonoaudióloga.",
      "(B) Quanto ao atraso de linguagem e solicitar uma audiometria.",
      "(C) Sobre o atraso de desenvolvimento global e encaminhar ao neurologista.",
      "(D) Sobre a estimulação da fala e reavaliar dentro de 30 dias."
    ],
    "correctAnswer": 3,
    "explanation": "Aos 18 meses, a criança anda sem apoio, come sozinha, aponta o que quer, mantém contato visual e entende ordens simples; só a fala ainda está aquém (palavras isoladas, sem combinações). Ou seja, o desenvolvimento global e a comunicação não verbal estão preservados, e há atraso isolado e leve da linguagem expressiva.\n\nPela Caderneta da Criança do Ministério da Saúde, quando falta um marco da faixa etária atual, mas os anteriores estão presentes, a situação é de alerta para o desenvolvimento: orienta-se a família a estimular a criança (conversar, nomear objetos, ler, cantar) e marca-se retorno em 30 dias. Se o atraso persistir, ou se surgirem sinais de perda auditiva ou de autismo, aí se aprofunda a investigação e se encaminha.",
    "commentary": "Encaminhar à fonoaudiologia já (A): o encaminhamento fica para quando o atraso se mantém após estimulação e reavaliação, ou quando há outros sinais de risco.\n\nAtraso de linguagem com audiometria (B): a criança responde e compreende o que se diz a ela; sem sinais de perda auditiva, o primeiro passo é estimular e reavaliar.\n\nAtraso global e neurologista (C): os marcos motores, sociais e de autonomia estão adequados; não há atraso global.",
    "tip": "Falta só o marco da idade atual e os anteriores estão presentes: alerta, estimular e reavaliar em 30 dias.",
    "reference": "Caderneta de Saúde da Criança, Ministério da Saúde, 2020.",
    "tags": [
      "desenvolvimento"
    ]
  },
  {
    "id": "tp2021-42",
    "topography": "6.2",
    "topic": "Escoliose",
    "module": "Pediatria",
    "text": "Menino, 9 anos, claudicando da perna direita há um mês. Há duas semanas tem referido dor na virilha e região anteromedial da coxa ou no joelho, também à direita, principalmente após correr ou jogar futebol. Nega febre, trauma e infecção, sinais flogísticos articulares antecedendo o quadro atual. Exame físico: limitação da mobilidade de abdução, flexão e rotação interna de quadril. A hipótese diagnóstica mais provável é:",
    "options": [
      "(A) Dor do crescimento.",
      "(B) Doença de Legg-Calvé-Perthes.",
      "(C) Doença de Osgood-Schlatter.",
      "(D) Sinovite transitória do quadril."
    ],
    "correctAnswer": 1,
    "explanation": "A doença de Legg-Calvé-Perthes é um transtorno no quadril de etiologia desconhecida associada a uma interrupção temporária do suprimento sanguíneo na epífise femoral proximal, levando a osteonecrose e deformidade da cabeça do fêmur. Acomete mais meninos na idade entre 4 e 8 anos. O sinal clínico cardeal é a limitação de abdução e rotação interna.",
    "commentary": "A doença de Legg-Calvé-Perthes é um transtorno no quadril de etiologia desconhecida associada a uma interrupção temporária do suprimento sanguíneo na epífise femoral proximal, levando a osteonecrose e deformidade da cabeça do fêmur. Acomete mais meninos (proporção de 4:1) na idade entre 4 e 8 anos de idade. Em geral a apresentação clínica mais frequente é a claudicação de duração variável. A dor, quando presente, se manifesta na virilha ou na região anteromedial da coxa ou na região do joelho e relacionada a atividade. Ao exame pode ou não haver encurtamento, mas o principal sinal é a limitação da rotação interna do quadril. A “dor do crescimento” é uma dor geralmente bilateral e noturna sem limitação física. A doença de Osgood-Schlatter se manifesta na tuberosidade anterior da tíbia e a sinovite transitória do quadril dura menos que 15 dias.",
    "reference": "Reumatologia para pediatras, Sheila Knupp Feitosa de Oliveira, 2ª ed, 2014.",
    "tags": [
      "reumatologia",
      "ortopedia"
    ]
  },
  {
    "id": "tp2020-77",
    "topography": "1.1",
    "topic": "Cefaleias",
    "module": "Pediatria",
    "text": "Escolar de 8 anos com queixa de cefaleia holocraniana há alguns meses. Mãe refere que a criança chora com a dor de cabeça e está muito preocupada. Nega obstrução nasal, coriza e febre. Não acompanhada de náuseas ou vômitos. Apresenta melhora com analgésico, como dipirona ou paracetamol, e melhora também com o sono.\n\nAssinale a alternativa correta em relação ao provável diagnóstico dessa criança:",
    "options": [
      "(A) Cefaleia tipo enxaqueca",
      "(B) Cefaleia tipo tensional",
      "(C) Cefaleia trigêmino-autonômica",
      "(D) Cefaleia por hipertensão intracraniana"
    ],
    "correctAnswer": 1,
    "explanation": "Cefaleia holocraniana crônica, sem náuseas ou vômitos, que melhora com analgésicos simples e com o sono: cefaleia do tipo tensional.",
    "commentary": "A enxaqueca na criança costuma ser pulsátil, com náuseas, foto/fonofobia e piora com atividade. A cefaleia trigêmino-autonômica tem sinais autonômicos. A hipertensão intracraniana causa cefaleia matinal com vômitos e não melhora com o sono.",
    "reference": "Pediatria Básica. Pediatria Geral e Neonatologia; Eduardo Marcondes, Flávio Adolfo Costa Vaz, José Lauro Araujo Ramos, Yassuhiko Okay. 9ª edição. Sarvier, 2003. / Pediatria: Diagnostico e Tratamento; Murahovschi, Jayme. 4.ed. / rev. Ampl. São Paulo: Sarvier, 1990. / Terapêutica em pediatria; Fábio Ancona Lopes. Flávio Giribela, Túlio Konstantyner. Manole, 2010.",
    "tags": [
      "pediatria",
      "neurologia",
      "cefaleias"
    ]
  },
  {
    "id": "tp2022-39",
    "topography": "3.2",
    "topic": "Hepatites virais",
    "module": "Clínica Médica",
    "text": "Gestante, 27 anos, com 12 semanas de gestação, apresenta a seguinte sorologia de hepatite B: HBsAg não reagente, anti-HBsAg reagente, anti-HBcAg não reagente. Qual a melhor avaliação?",
    "options": [
      "(A) Hepatite B crônica.",
      "(B) Paciente vacinada.",
      "(C) Hepatite B em fase imunorreativa.",
      "(D) Paciente com Hepatite B curada."
    ],
    "correctAnswer": 1,
    "explanation": "Para ler a sorologia da hepatite B, três marcadores bastam: HBsAg indica infecção atual; anti-HBc indica contato prévio com o vírus; anti-HBs indica imunidade.\n\nAqui o HBsAg é negativo (sem infecção), o anti-HBc é negativo (nunca teve contato com o vírus) e o anti-HBs é positivo (imune). A única forma de ter anti-HBs sem anti-HBc é a vacina, que contém apenas o antígeno de superfície. A gestante está vacinada e protegida; o recém-nascido seguirá a rotina de vacina ao nascer.",
    "commentary": "Hepatite B crônica (A): exigiria HBsAg positivo por mais de 6 meses e anti-HBc positivo; na fase de imunotolerância há HBeAg positivo e transaminases normais.\n\nFase imunorreativa (C): também tem HBsAg e anti-HBc positivos, agora com transaminases elevadas e inflamação hepática.\n\nHepatite B curada (D): quem teve a infecção mantém o anti-HBc positivo junto com o anti-HBs; o anti-HBc negativo afasta contato com o vírus.",
    "tip": "Anti-HBs isolado (HBsAg e anti-HBc negativos) = vacinado. Anti-HBs + anti-HBc = curado.",
    "reference": "Infectologia. Bases clínicas e tratamento Reinaldo Salomão.",
    "tags": [
      "infectologia",
      "hepatologia"
    ]
  },
  {
    "id": "tp2021-39",
    "topography": "4.1",
    "topic": "Lesão renal aguda",
    "module": "Clínica Médica",
    "text": "Mulher, 50 anos, com diabetes tipo 2 e dislipidemia mista, iniciou uso de estatina há 2 meses. Exames: creatinina = 1,5 mg/dL; ureia = 65 mg/dL; potássio = 6,0 mEq/L; CPK = 2.200 UI/L. Além da alcalinização da urina, a conduta adequada é:",
    "options": [
      "(A) Trocar estatina por fibrato e fazer controle glicêmico rigoroso com hipoglicemiante oral, iniciar antiproteinúrico.",
      "(B) Suspender imediatamente a estatina, iniciar diurético de alça e solução polarizante.",
      "(C) Suspender imediatamente a estatina, iniciar diurético de alça e gluconato de cálcio.",
      "(D) Suspender imediatamente a estatina, hidratação endovenosa com salina isotônica e solução polarizante."
    ],
    "correctAnswer": 3,
    "explanation": "A paciente exibe quadro de injúria renal aguda secundária a rabdomiólise após estatina (CPK = 2.200 UI/L) com hipercalemia moderada-grave (K+ = 6,0 mEq/L). O pilar da conduta de rabdomiólise é a suspensão do agente causador associado à vigorosa hidratação endovenosa com salina para desobstruir os túbulos da mioglobina nefrotóxica, aliada à imediata infusão de solução polarizante para corrigir o potássio plasmático.",
    "commentary": "A rabdomiólise tem como complicação temida a necrose tubular aguda obstrutiva por depósito de mioglobina. A nefropatia de base impõe restrição no uso de IECA/BRA (antiproteinúrico sugerido) pela hipercalemia existente. Diuréticos devem ser indicados com prudência apenas na vigência de hipervolemia refratária pós-volume. A conduta padrão assenta-se na hidratação, suspensão da estatina e estabilização da calemia.",
    "reference": "FAUCI, AS et al. Harrison Medicina Interna. 18ªed. Rio de Janeiro: McGraw-Hill, 2013.",
    "tags": [
      "nefrologia",
      "cardiologia",
      "farmacologia",
      "emergência"
    ]
  },
  {
    "id": "tp2024-66",
    "topography": "3.1",
    "topic": "Hemorragia digestiva baixa",
    "module": "Cirurgia",
    "text": "Mulher de 70 anos, 80kg, hipertensa controlada. Refere sangramento vivo nas fezes (\"tingindo o vaso\"). Exame físico: estável, descorada +/4, toque retal sem massas, sangue em dedo de luva. Qual a melhor conduta e principal suspeita?",
    "options": [
      "(A) Anuscopia – Fissura anal",
      "(B) Tomografia de abdome – Doença diverticular dos cólons",
      "(C) Retossigmoidoscopia – Doença hemorroidária",
      "(D) Colonoscopia – Doença diverticular dos cólons"
    ],
    "correctAnswer": 3,
    "explanation": "Idosa com sangramento vivo pelo reto, de volume considerável (tinge o vaso), mas estável (PA 110x60, FC 80), com toque retal sem massas: é hemorragia digestiva baixa sem instabilidade.\n\nA doença diverticular é a causa mais frequente de hemorragia digestiva baixa em idosos; o sangramento costuma ser volumoso, indolor e cessar sozinho na maior parte dos casos. No paciente estável, a colonoscopia (após preparo do cólon) é o exame de escolha: localiza a fonte, permite tratar pelo endoscópio e afasta tumores. Se o paciente estivesse instável, a investigação inicial seria angiotomografia e, conforme o caso, arteriografia com embolização.",
    "commentary": "Anuscopia por fissura anal (A): a fissura causa dor intensa ao evacuar e pouco sangue, que mancha o papel; a paciente não tem dor.\n\nTomografia para doença diverticular (B): tomografia comum serve para diverticulite (inflamação), não para sangramento; para sangramento ativo usa-se angiotomografia, reservada aos pacientes instáveis ou com sangramento contínuo.\n\nRetossigmoidoscopia por doença hemorroidária (C): hemorroidas sangram em geral pouco e de forma repetida; além disso, nessa idade é preciso examinar todo o cólon.",
    "tip": "Idoso com sangramento retal vivo, volumoso e indolor = divertículo; estável → colonoscopia, instável → angio-TC.",
    "reference": "Management of the Adult Patient with Acute Lower Gastrointestinal Bleeding. American College of Gastroenterology. Practice Parameters Committee. Zuccaro G Jr; Am J Gastroenterol. 1998;93(8):1202. Department of Gastroenterology, Cleveland Clinic Foundation, Ohio 44195, USA. PMID 9707037",
    "tags": [
      "coloproctologia",
      "HDB"
    ]
  },
  {
    "id": "tp2022-62",
    "topography": "16",
    "topic": "Hérnias",
    "module": "Cirurgia",
    "text": "Paciente de 18 anos com abaulamento inguinal há 4 anos. Iniciou dor forte, febre, calor local e vermelhidão na pele sobre o saco herniário, sem redução do conteúdo. Qual a hipótese e conduta?",
    "options": [
      "(A) Hérnia femoral e indicar videolaparoscopia.",
      "(B) Hérnia inguinal e encaminhar para cirurgia ambulatorial.",
      "(C) Abdome agudo inflamatório e tomografia de abdome total.",
      "(D) Hérnia inguinal encarcerada e indicar cirurgia de urgência."
    ],
    "correctAnswer": 3,
    "explanation": "Sinais flogísticos (vermelhidão, calor) sobre o saco herniário sugerem encarceramento com sofrimento de alça (estrangulamento).",
    "commentary": "A dor intensa associada a sinais inflamatórios na pele indica complicação da hérnia, exigindo urgência cirúrgica para evitar necrose intestinal.",
    "reference": "Sabiston - Tratado de Cirurgia - 18ª Ed.",
    "tags": [
      "cirurgia geral",
      "hérnias"
    ]
  },
  {
    "id": "tp2025-76",
    "topography": "4.2",
    "topic": "Torção testicular",
    "module": "Cirurgia",
    "text": "Homem, 25 anos, comparece ao pronto-socorro com queixa de dor em região escrotal há 3 horas, de início súbito e intensidade progressiva. Nega trauma local ou esforço físico associado. Ao exame, testículo direito normal, testículo esquerdo elevado, aumentado de tamanho e horizontalizado (sinal de Angel positivo), com dor intensa à manipulação. Qual o diagnóstico e a melhor conduta?",
    "options": [
      "(A) Epididimite aguda; ultrassonografia com Doppler",
      "(B) Torção testicular; cirurgia de urgência",
      "(C) Torção testicular; ultrassonografia com Doppler",
      "(D) Epididimite aguda; analgesia e antibioticoterapia"
    ],
    "correctAnswer": 1,
    "explanation": "Em homens jovens, a suspeita clínica inequívoca de torção testicular impõe a imediata exploração cirúrgica emergencial para tentativa de preservação biológica da gônada, abdicando de tardar por exames de imagem.",
    "commentary": "A instalação de dor testicular súbita violenta, no paciente jovem, acompanhada de retração anatômica para ápice escrotal e horizontalização (sinal de Angel clássico positivo) consolida o diagnóstico de Torção Testicular (isquemia arterial testicular). Trata-se de uma emergência cirúrgica máxima com margem de ouro inferior a 6-12 horas da dor para resgatar a fertilidade. Diante da apresentação descrita, o médico deve guiar a indicação cirúrgica aberta direta, ignorando exames propedêuticos longitudinais (como o Ultrassom com Doppler) sob pena de agravar a isquemia e inviabilizar o desfecho.",
    "reference": "Manual de Residência em Urologia; Marcos Dall’Oglio; Editora Manole - 2021; Campbell-Walsh Urologia; 12ª edição, 2018.",
    "tags": [
      "urologia",
      "emergência"
    ]
  },
  {
    "id": "tp2026-78",
    "topography": "3.1",
    "topic": "Doença hemorroidária",
    "module": "Cirurgia",
    "text": "Mulher de 65 anos refere sangramento às evacuações e exteriorização de massa anal durante o esforço evacuatório. Antecedente de três partos normais e obstipação intestinal. Exame proctológico: hemorroidas mistas com componente interno importante e prolapso à manobra de Valsalva, redutível ao toque. O mecanismo fisiopatológico envolvido no quadro é:",
    "options": [
      "(A) Hipertrofia progressiva dos plexos hemorroidários, por hiperplasia vascular local.",
      "(B) Aumento persistente da pressão venosa no plexo hemorroidário, decorrente do esforço evacuatório crônico.",
      "(C) Degeneração do tecido de sustentação dos coxins hemorroidários e dilatação dos plexos vasculares anorretais.",
      "(D) Inflamação crônica da mucosa perianal, com congestão vascular secundária."
    ],
    "correctAnswer": 2,
    "explanation": "A fisiopatologia da doença hemorroidária envolve a degeneração do tecido conjuntivo de sustentação dos coxins vasculares (como o ligamento de Parks) e a dilatação progressiva dos plexos venosos anorretais, promovendo o deslocamento e prolapso desses coxins através do canal anal.",
    "commentary": "A fisiopatologia mais aceita para a doença hemorroidária baseia-se na teoria do deslizamento/deslocamento dos coxins anales. Os coxins hemorroidários são estruturas anatômicas normais compostas por anastomoses arteriovenosas e tecido conjuntivo elástico de suporte (estroma de sustentação). Com o envelhecimento, gestações sucessivas, esforço evacuatório repetido e obstipação, ocorre a degeneração e frouxidão do colágeno e das fibras de sustentação muscular desses coxins (desintegração do tecido de suporte). Consequentemente, esses coxins dilatam-se e deslizam canal anal abaixo, manifestando-se como sangramento e prolapso hemorroidário. Sobre os distratores: (A) Não há hiperplasia celular verdadeira ou hipertrofia tumoral. (B) Embora a hipertensão venosa participe da congestão, estudos mostram que a constipação/esforço crônico não causa hemorroidas isoladamente na ausência de degeneração do tecido colágeno de suporte anal (muitos obstipados crônicos têm canal anal normal e vice-versa). (D) A inflamação local é um evento secundário ao trauma e engasgamento das hemorroidas prolapsadas, não a causa primária.",
    "reference": "Coelho, Júlio Cezar Uili. Aparelho digestivo: clínica e cirurgia/Júlio Coelho. 4a edição - São Paulo: Editora Atheneu, 2012.",
    "tags": [
      "coloproctologia",
      "hemorroidas",
      "fisiopatologia"
    ]
  },
  {
    "id": "tp2024-93",
    "topography": "5.2",
    "topic": "Infecções na gestação",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante (8 semanas), teste rápido positivo para sífilis. Nega sintomas, múltiplos parceiros. Tratamento e conduta pelo Ministério da Saúde?",
    "options": [
      "(A) Penicilina benzatina 7,2 milhões (3 doses); tratar parceiro, acompanhar mensal com VDRL.",
      "(B) Penicilina benzatina 2,4 milhões (1 dose); repetir VDRL.",
      "(C) Penicilina benzatina 7,2 milhões; repetir VDRL trimestral.",
      "(D) Penicilina benzatina 2,4 milhões; não tratar parceiro."
    ],
    "correctAnswer": 0,
    "explanation": "Na gestante, um teste rápido (treponêmico) reagente já basta para começar o tratamento no mesmo dia, sem esperar o resultado do teste não treponêmico (VDRL), que é colhido em seguida para confirmar e servir de base ao seguimento. A sífilis na gestação também é de notificação compulsória.\n\nComo ela não tem sinais e não se sabe quando se infectou, a doença é tratada como sífilis latente de duração ignorada: penicilina benzatina 2,4 milhões de UI por semana, por 3 semanas (7,2 milhões no total). As parcerias sexuais devem ser testadas e tratadas, e na gestação o VDRL é repetido todo mês para confirmar a queda dos títulos e detectar reinfecção.",
    "commentary": "Dose única de 2,4 milhões (B): serve só para sífilis recente (primária, secundária ou latente com menos de um ano); sem saber o tempo de infecção, o tratamento deve ser o de sífilis tardia.\n\nVDRL trimestral (C): a dose está certa, mas na gestante o controle é mensal; o seguimento a cada 3 meses é o usado fora da gestação.\n\nNão tratar o parceiro (D): a dose é insuficiente e deixar a parceria sem tratamento leva à reinfecção da gestante e à sífilis congênita.",
    "tip": "Gestante com teste rápido reagente: trata no dia. Tempo desconhecido = 3 doses de benzatina (7,2 milhões), parceiro tratado e VDRL mensal.",
    "reference": "Protocolo clínico e diretrizes terapêuticas para a prevenção da transmissão vertical de HIV, sífilis e hepatites virais Ministério da Saúde 2022",
    "tags": [
      "obstetrícia",
      "IST"
    ]
  },
  {
    "id": "tp2022-89",
    "topography": "5.2",
    "topic": "Puerpério",
    "module": "Ginecologia e Obstetrícia",
    "text": "Pós-parto recente, mastite em mama esquerda (eritema, dor, calor). Conduta clínica correta?",
    "options": [
      "(A) Antibiótico associado à drenagem mamária rotineira.",
      "(B) Antibiótico e suspensão obrigatória da amamentação.",
      "(C) Antibiótico com cobertura específica apenas para anaeróbios.",
      "(D) Antibiótico (ex: Clindamicina), analgésico e manutenção da amamentação."
    ],
    "correctAnswer": 3,
    "explanation": "Puérpera com dor intensa, eritema e calor em um quadrante da mama: é mastite lactacional, geralmente causada por Staphylococcus aureus que entra por fissuras do mamilo em uma mama com leite parado.\n\nO tratamento combina antibiótico com cobertura para estafilococo (cefalexina ou dicloxacilina são as opções habituais; a clindamicina é alternativa, sobretudo em alérgicas), analgésico ou anti-inflamatório e esvaziamento eficiente da mama. A amamentação deve continuar, inclusive na mama afetada: ela ajuda a drenar o leite, e o leite não faz mal ao bebê.",
    "commentary": "Antibiótico com drenagem sempre necessária (A): a drenagem só é indicada quando se forma abscesso (área flutuante ou coleção na ultrassonografia), o que não é o caso.\n\nSuspender a amamentação durante o antibiótico (B): interromper a amamentação aumenta a estase de leite e o risco de abscesso; os antibióticos usados são compatíveis com o aleitamento.\n\nCobertura específica para anaeróbios (C): os agentes principais são o estafilococo e, menos vezes, estreptococos e gram-negativos; anaeróbios não são o alvo.",
    "tip": "Mastite: antibiótico antiestafilocócico, analgesia e continuar amamentando. Drenagem só se houver abscesso.",
    "reference": "Zugaib Obstetrícia, 2020.",
    "tags": [
      "puerpério",
      "mastologia"
    ]
  },
  {
    "id": "tp2021-83",
    "topography": "5.2",
    "topic": "Trabalho de parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Parturiente, 28 anos, 38 semanas de gestação, com diagnóstico de pré-eclâmpsia, está internada para iniciar indução do trabalho de parto. É realizada cardiotocografia de 20 minutos que apresenta traçado de frequência cardíaca fetal com linha de base de 140 bpm, variabilidade de 20 bpm, 2 acelerações transitórias e ausência de desacelerações. Baseando-se somente na descrição do traçado, a conduta é:",
    "options": [
      "(A) Iniciar indução do trabalho de parto.",
      "(B) Refazer exame e considerar cesárea se o traçado permanecer inalterado.",
      "(C) Resolver imediatamente a gestação por cesárea.",
      "(D) Oxigenar a mãe, e repetir o exame em decúbito lateral esquerdo."
    ],
    "correctAnswer": 0,
    "explanation": "A cardiotocografia descreve um traçado Categoria I (ativo/reativo e normal), com linha de base, variabilidade e acelerações normais, e sem desacelerações. Isso indica excelente bem-estar fetal e permite que se prossiga com a indução planejada do trabalho de parto.",
    "commentary": "O exame da paciente apresenta padrão normal (Categoria I), caracterizado por linha de base entre 110-160 bpm, variabilidade entre 6-25 bpm, reatividade presente (pelo menos 2 acelerações transitórias em 20 minutos) e ausência de desacelerações patológicas (DIPs). Sendo assim, não há sofrimento fetal agudo que contraindique a via vaginal, podendo ser iniciada com segurança a indução do trabalho de parto.",
    "reference": "Tratado de Obstetrícia FEBRASGO / editores Cesar Eduardo Fernandes, Marcos Felipe Silva de Sá; coordenação Coríntio Mariani Neto. – 1. ed. – Rio de Janeiro: Elsevier, 2018.",
    "tags": [
      "obstetrícia",
      "cardiotocografia",
      "indução do trabalho de parto"
    ]
  },
  {
    "id": "tp2019-83",
    "topography": "5.2",
    "topic": "Pré-eclâmpsia",
    "module": "Ginecologia e Obstetrícia",
    "text": "Primigesta, 17 anos de idade, chega ao hospital com queixas de cefaleia intensa, dor epigástrica e alterações visuais. Está com 35 semanas de gravidez, pressão arterial de 170 x 110 mmHg, útero com tônus normal, dinâmica ausente, altura uterina de 29cm, frequência cardíaca fetal de 136 bpm.\n\nO diagnóstico provável e conduta são:",
    "options": [
      "(A) Eclâmpsia; administar sulfato de magnésio e hidralazina e interromper a gravidez.",
      "(B) Iminência de eclâmpsia; administrar hidralazina e indicar a cesárea imediatamente.",
      "(C) Pré-eclâmpsia grave; realizar o parto cesárea imediatamente.",
      "(D) Iminência de eclâmpsia; administrar sulfato de magnésio e hidralazina e interromper a gravidez."
    ],
    "correctAnswer": 3,
    "explanation": "Gestante de 35 semanas com crise hipertensiva (170 x 110 mmHg) e sinais de iminência de eclâmpsia (cefaleia intensa, escotomas, dor epigástrica). A conduta é sulfato de magnésio (prevenção de convulsões), anti-hipertensivo de ação rápida (hidralazina) e interrupção da gestação após estabilização materna.",
    "commentary": "Não houve convulsão, logo não é eclâmpsia. Cesárea imediata sem sulfato de magnésio expõe a gestante a convulsão. Iminência de eclâmpsia é mais que pré-eclâmpsia grave 'simples'.",
    "reference": "Tratado Obstetrícia da FEBRASGO, 2019",
    "tags": [
      "obstetrícia",
      "pré-eclâmpsia",
      "síndromes hipertensivas"
    ]
  },
  {
    "id": "tp2024-118",
    "topography": "10",
    "topic": "Infecções sexualmente transmissíveis",
    "module": "Saúde Coletiva",
    "text": "Homem, 19 anos, com disúria e secreção uretral após contato sexual desprotegido. Qual o tratamento recomendado pelo Ministério da Saúde?",
    "options": [
      "Doxiciclina oral isolada.",
      "Azitromicina oral isolada.",
      "Ciprofloxacino oral + Azitromicina.",
      "Ceftriaxona IM + Azitromicina oral."
    ],
    "correctAnswer": 3,
    "explanation": "Disúria com secreção uretral após relação desprotegida configura síndrome do corrimento uretral. Sem identificação imediata do agente, o Ministério da Saúde orienta tratamento sindrômico que cubra ao mesmo tempo gonococo e clamídia, já que a coinfecção é frequente e o paciente pode não voltar.\n\nO esquema é ceftriaxona 500 mg IM em dose única (para Neisseria gonorrhoeae) mais azitromicina 1 g VO em dose única (para Chlamydia trachomatis e outros agentes, como micoplasma). A azitromicina também reforça a cobertura do gonococo. Parcerias sexuais devem ser avaliadas e tratadas, e o paciente deve ser testado para HIV, sífilis e hepatites.",
    "commentary": "Doxiciclina isolada (A): trata clamídia (é alternativa à azitromicina), mas não cobre o gonococo de forma adequada.\n\nAzitromicina isolada (B): cobre clamídia, porém a monoterapia não é recomendada para gonorreia, pela resistência crescente do gonococo.\n\nCiprofloxacino + azitromicina (C): as quinolonas saíram da primeira linha porque a resistência do gonococo a elas é alta no Brasil; o ciprofloxacino foi substituído pela ceftriaxona.",
    "tip": "Corrimento uretral: ceftriaxona 500 mg IM + azitromicina 1 g VO, ambos dose única, e tratar a parceria.",
    "reference": "Ministério da Saúde. Guia de vigilância em Saúde: volume 2 [recurso eletrônico] / Ministério da Saúde, Departamento de Ações Estratégicas de Epidemiologia e Vigilância em Saúde e Ambiente. – 6. ed. rev. – Brasília: Ministério da Saúde, 2024.",
    "tags": [
      "IST",
      "tratamento sindrômico",
      "uretrite"
    ]
  },
  {
    "id": "tp2022-112",
    "topography": "15",
    "topic": "Ética médica",
    "module": "Saúde Coletiva",
    "text": "Família de paciente com hipótese de Esquizofrenia solicita segunda opinião médica. De acordo com o Código de Ética Médica, a médica deve:",
    "options": [
      "(A) Negar o pedido pois o paciente está em surto psicótico e oferece risco.",
      "(B) Acatar e solicitar matriciamento, pois é vedado ao médico opor-se à segunda opinião solicitada.",
      "(C) Negar pois é vedado ao médico modificar diagnóstico de colega.",
      "(D) Acatar mas não informar o diagnóstico ao paciente para evitar danos."
    ],
    "correctAnswer": 1,
    "explanation": "O Código de Ética Médica (2019) não permite que o médico impeça uma segunda opinião ou a avaliação por junta médica quando o paciente ou seu representante legal a solicita (artigo 39). Então a médica deve acolher o pedido.\n\nNa atenção primária, uma forma adequada de fazer isso é o matriciamento em saúde mental: a equipe especializada discute o caso com a equipe de saúde da família, ajuda a esclarecer o diagnóstico e o plano de cuidado, e o paciente continua vinculado à UBS. O paciente está colaborativo, aceita o tratamento e tem apoio da família, o que favorece o seguimento ambulatorial.",
    "commentary": "Negar e reinternar (A): o paciente está colaborativo, aceita o tratamento e tem suporte familiar; sintomas residuais não indicam por si só nova internação, e negar a segunda opinião fere o Código de Ética.\n\nVedado modificar diagnóstico de colega (C): o Código não proíbe reavaliar nem mudar diagnóstico; ele proíbe, sim, impedir a segunda opinião.\n\nNão informar diagnóstico e prognóstico (D): é vedado ao médico deixar de informar diagnóstico, prognóstico, riscos e objetivos do tratamento (artigo 34); só quando a comunicação direta puder causar dano é que ela é feita ao representante legal, e o pedido de segunda opinião não muda esse dever.",
    "tip": "Pediu segunda opinião ou junta médica? O médico não pode se opor (art. 39 do Código de Ética Médica).",
    "reference": "Código de Ética Médica (2019).",
    "tags": [
      "ética médica",
      "direito do paciente"
    ]
  },
  {
    "id": "tp2026-103",
    "topography": "12",
    "topic": "Quedas",
    "module": "Saúde Coletiva",
    "text": "Em uma UBS, mulher de 74 anos, diabética e hipertensa, independente para atividades de vida diária, apresenta quedas recorrentes no último ano. Considerando ações de promoção e prevenção, qual estratégia deve ser priorizada pela equipe?",
    "options": [
      "(A) Fazer avaliação multifatorial de risco de quedas, revisão medicamentosa e orientação de exercício físico.",
      "(B) Solicitar densitometria óssea anual, independentemente de fatores adicionais de risco.",
      "(C) Encaminhar para otorrino para investigação de alteração do equilíbrio como causa principal das quedas.",
      "(D) Encaminhar para ortopedia para investigação de artrose como causa principal das quedas."
    ],
    "correctAnswer": 0,
    "explanation": "Idosa com quedas recorrentes precisa de uma avaliação multifatorial, porque a queda raramente tem uma única causa. A equipe deve investigar fatores do próprio paciente (força, marcha e equilíbrio, visão, hipotensão postural, hipoglicemia, cognição, pés), revisar os medicamentos (anti-hipertensivos, hipoglicemiantes, sedativos e a polifarmácia em geral) e avaliar riscos em casa.\n\nA intervenção com melhor resultado para prevenir novas quedas é o exercício físico regular com treino de equilíbrio e fortalecimento, associado à correção dos fatores encontrados. Tudo isso pode ser feito e coordenado na Atenção Primária.",
    "commentary": "Densitometria anual (B): pode ser indicada para avaliar osteoporose e risco de fratura, mas não previne a queda em si, e não há motivo para repeti-la todo ano de forma rotineira.\n\nEncaminhar ao otorrino (C): alteração vestibular é apenas um dos fatores possíveis; encaminhar sem avaliação global ignora os demais e tira o cuidado da APS.\n\nEncaminhar à ortopedia (D): da mesma forma, a artrose é só uma possível contribuição; o encaminhamento isolado não aborda medicamentos, visão, ambiente e condicionamento.",
    "tip": "Quedas no idoso: avaliação multifatorial + revisão de remédios + exercício de equilíbrio e força.",
    "reference": "Ministério da Saúde. Caderneta de Saúde da Pessoa Idosa; Sociedade Brasileira de Geriatria e Gerontologia (SBGG).",
    "tags": [
      "saúde do idoso",
      "prevenção de quedas",
      "multifatorialidade"
    ]
  },
  {
    "id": "tp2023-11",
    "module": "Ciências Básicas",
    "text": "Os componentes figurados do sangue têm funções importantes na manutenção da homeostase. Entre as funções dos leucócitos, podemos afirmar:",
    "options": [
      "(A) São células que desempenham sua função após completarem a maturação tímica.",
      "(B) São células responsáveis pela coagulação do sangue e formação de hemácias.",
      "(C) São células do sistema circulatório responsável pela formação de insulina.",
      "(D) São células do sistema imunológico responsáveis pela defesa do organismo contra agentes infecciosos."
    ],
    "correctAnswer": 3,
    "explanation": "Leucócitos são os glóbulos brancos e têm como função a defesa do organismo. Dividem-se em linhagem mieloide (neutrófilos, eosinófilos, basófilos e monócitos), ligada sobretudo à resposta inata, e linhagem linfoide (linfócitos B, T e NK), base da imunidade adaptativa.\n\nTodos nascem na medula óssea; somente os linfócitos T completam a maturação no timo.",
    "commentary": "Funcionamento após maturação no timo (A): isso vale apenas para os linfócitos T; neutrófilos, monócitos e linfócitos B amadurecem na medula óssea.\n\nCoagulação e formação de hemácias (B): a hemostasia primária cabe às plaquetas e aos fatores de coagulação, e as hemácias derivam de precursores eritroides da medula.\n\nProdução de insulina (C): quem secreta insulina são as células beta das ilhotas pancreáticas.",
    "tip": "Leucócito = defesa. Todos nascem na medula; só o linfócito T termina de amadurecer no timo.",
    "reference": "Boehm T, Swann JB. Origin and evolution of adaptive immunity. Annu Rev Anim Biosci. 2014;2:259-283.",
    "tags": [
      "histologia",
      "imunologia"
    ]
  },
  {
    "id": "tp2021-11",
    "topography": "4.1",
    "topic": "Doença renal crônica",
    "module": "Ciências Básicas",
    "text": "Homem, 45 anos, em acompanhamento pós-transplante renal há 10 meses, apresenta proteinúria, aumento da creatinina sanguínea e perda progressiva da função do enxerto. Realizada biópsia renal que evidenciou fibrose e anormalidades vasculares. Pode-se concluir que o paciente apresenta rejeição:",
    "options": [
      "(A) Aguda.",
      "(B) Hiperaguda.",
      "(C) Crônica.",
      "(D) Trombótica."
    ],
    "correctAnswer": 2,
    "explanation": "A biópsia renal com predomínio de fibrose intersticial, atrofia tubular e espessamento fibrointimal vascular de curso lento (10 meses pós-transplante) caracteriza a rejeição crônica do enxerto.",
    "commentary": "A rejeição crônica é patologicamente definida por lesão vascular arterial progressiva (íntima espessada secundária a proliferação celular), fibrose intersticial crônica e perda insidiosa de função glomerular renal. A rejeição hiperaguda ocorre em minutos por anticorpos pré-formados, e a aguda desenvolve infiltrado inflamatório túbulo-intersticial em semanas.",
    "reference": "SEMENTILLI, A. et al. Renal transplant pathology: main morphological findings and how to sign out biopsies. J. Bras. Patol. Med. Lab. Aug. 2008",
    "tags": [
      "patologia",
      "nefrologia",
      "cirurgia"
    ]
  },
  {
    "id": "tp2019-16",
    "module": "Ciências Básicas",
    "text": "Paciente com quadro de coágulo migratório (êmbolo) na veia femoral profunda direita, associado a trombo no ventrículo esquerdo.\n\nOs destinos finais dos fenômenos tromboembólicos podem ser, respectivamente:",
    "options": [
      "(A) Átrio direito e artéria cerebral anterior direita.",
      "(B) Ventrículo esquerdo e artéria cerebral posterior direita.",
      "(C) Pulmão direito e artéria cerebral média direita.",
      "(D) Ventrículo direito e artéria cerebral anterior esquerda."
    ],
    "correctAnswer": 2,
    "explanation": "O êmbolo da veia femoral segue pela cava inferior até o coração direito e se impacta na circulação pulmonar (tromboembolismo pulmonar). O trombo do ventrículo esquerdo vai para a circulação sistêmica; pela carótida, atinge mais frequentemente a artéria cerebral média, continuação direta da carótida interna.",
    "commentary": "Átrio e ventrículo direito são locais de passagem, não destino final do êmbolo venoso. A artéria cerebral posterior deriva do sistema vertebrobasilar, menos atingido por êmbolos cardíacos.",
    "reference": "Moore KL. Anatomia Orientada para a Clínica. 6a ed. Rio de Janeiro: Guanabara Koogan; 2011.",
    "tags": [
      "anatomia",
      "tromboembolismo",
      "circulação"
    ]
  },
  {
    "id": "enamed-2025-63",
    "topography": "15",
    "topic": "Estudos epidemiológicos",
    "module": "Saúde Coletiva",
    "text": "Uma equipe de Saúde da Família percebeu aumento do número de casos complicados de diabetes mellitus. Entre 3.500 pacientes cadastrados, 280 possuem diabetes tipo 2. A equipe elaborou um projeto de intervenção coletiva com orientação nutricional e incentivo à atividade física para reduzir complicações.\n\nQual é o desenho de pesquisa mais adequado para avaliar o impacto desse projeto?",
    "options": [
      "(A) Estudo de caso-controle aninhado.",
      "(B) Ensaio clínico não randomizado.",
      "(C) Estudo de coorte retrospectivo.",
      "(D) Ensaio clínico randomizado."
    ],
    "correctAnswer": 3,
    "explanation": "Para avaliar com o maior rigor metodológico possível o impacto de uma intervenção ativa (projeto educativo de orientação nutricional e atividade física), eliminando vieses de confusão e seleção, o Ensaio Clínico Randomizado (ECR) é considerado o delineamento experimental padrão-ouro. Nele, os indivíduos (ou as microáreas/grupos) são aleatorizados entre receber a intervenção e o cuidado habitual, permitindo inferir relação de causalidade direta sobre a redução de complicações.",
    "commentary": "Estudos observacionais como coorte retrospectivo (C) e caso-controle (A) apenas avaliam retrospectivamente associações de risco preexistentes, sem controle experimental ativo da intervenção. Ensaios não randomizados (B) sofrem com forte viés de seleção sistemático.",
    "reference": "Epidemiologia Clínica: Elementos Essenciais / Fletcher / Medronho",
    "tags": [
      "saúde coletiva",
      "metodologia científica",
      "epidemiologia",
      "ensaio clínico"
    ]
  },
  {
    "id": "enamed-2026-21",
    "topography": "13",
    "topic": "Transtorno bipolar",
    "module": "Clínica Médica",
    "text": "Mulher de 30 anos chega ao Centro de Atenção Psicossocial animada, inquieta e falante, andando de um lado para outro, cumprimentando todas as pessoas com sorrisos exagerados e fazendo comentários animados a respeito de coisas aleatórias, emendando os assuntos. O médico que costuma atendê-la percebe que ela está diferente, mais “elétrica” que seu habitual, sendo impossível interrompê-la.\n\nAs alterações psicopatológicas apresentadas por essa paciente incluem",
    "options": [
      "(A) humor disfórico, esterotipias vocais e agitação psicomotora.",
      "(B) humor hipotímico, apragmatismo e afrouxamento de associações.",
      "(C) humor eutímico, fuga de ideias e avolia.",
      "(D) humor hipertímico, taquipsiquismo e taquilalia."
    ],
    "correctAnswer": 3,
    "explanation": "A paciente está animada, expansiva, falante, sem possibilidade de ser interrompida e emendando assuntos — quadro de episódio maníaco/hipomaníaco.\n\nOs termos psicopatológicos corretos são humor hipertímico (elevado), taquipsiquismo (aceleração do pensamento) e taquilalia (aceleração do discurso).",
    "commentary": "Disforia é humor irritável/desagradável; hipotimia é humor deprimido; eutimia é humor normal. Estereotipias, apragmatismo e avolia não estão descritos. (Gabarito preliminar do INEP.)",
    "reference": "Dalgalarrondo P. Psicopatologia e semiologia dos transtornos mentais",
    "tags": [
      "psiquiatria",
      "psicopatologia",
      "transtorno bipolar"
    ]
  },
  {
    "id": "unifesp2025-6",
    "topography": "16",
    "topic": "Obstrução intestinal",
    "module": "Cirurgia",
    "text": "Um recém-nascido de 48 horas de vida apresenta vômitos biliosos e grande distensão abdominal. Eliminou mecônio 16 horas após o nascimento. Rx abdominal: intensa distensão de alças.\n\nQual é o diagnóstico mais provável?",
    "options": [
      "(A) Megacólon congênito.",
      "(B) Atresia jejunal.",
      "(C) Íleo meconial.",
      "(D) Obstrução duodenal."
    ],
    "correctAnswer": 1,
    "explanation": "Vômitos biliosos indicam obstrução abaixo da ampola de Vater. A grande distensão abdominal aponta para obstrução mais distal que a duodenal (a obstrução duodenal dá distensão só de abdome superior). A eliminação de mecônio em 16 horas é normal e torna menos provável a doença de Hirschsprung.\n\nNa atresia jejunoileal o RN elimina mecônio (às vezes em pouca quantidade ou acinzentado) e evolui nas primeiras 24–48 horas com vômitos biliosos e distensão, com radiografia mostrando alças dilatadas e ausência de ar distal.",
    "commentary": "Megacólon congênito (A): o atraso da eliminação de mecônio (> 48 h) é a marca da doença de Hirschsprung, o que não ocorreu.\n\nÍleo meconial (C): associado à fibrose cística, geralmente sem eliminação de mecônio e com aspecto de 'bolhas de sabão' na radiografia.\n\nObstrução duodenal (D): distensão restrita ao epigástrio e sinal da dupla bolha, sem 'intensa distensão de alças'.",
    "reference": "Tratado de Cirurgia Pediátrica (Maksoud) / Ashcraft's Pediatric Surgery",
    "tags": [
      "cirurgia pediátrica",
      "neonatologia",
      "atresia intestinal",
      "vômitos biliosos"
    ]
  },
  {
    "id": "unifesp2025-48",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "O Plano Municipal de Saúde (PMS) constitui-se no instrumento central de planejamento para definição e implementação de todas as iniciativas no âmbito da saúde na gestão municipal do SUS, sendo a base para a execução, acompanhamento e avaliação da gestão do sistema de saúde local para o período de quatro anos.\n\nA qual instância o PMS deve ser submetido para apreciação e aprovação?",
    "options": [
      "(A) Câmara Municipal de Vereadores.",
      "(B) Conselho Municipal de Saúde.",
      "(C) Tribunal de Contas do Estado.",
      "(D) Secretaria Municipal de Saúde."
    ],
    "correctAnswer": 1,
    "explanation": "O Plano Municipal de Saúde é elaborado pela gestão (Secretaria Municipal de Saúde), mas deve ser submetido à apreciação e aprovação do Conselho Municipal de Saúde, instância deliberativa do controle social (Lei nº 8.142/1990 e LC nº 141/2012).\n\nO plano deve considerar as diretrizes da Conferência de Saúde e se desdobra em Programações Anuais e Relatórios de Gestão, também apreciados pelo Conselho.",
    "commentary": "Câmara de Vereadores (A): aprova as leis orçamentárias (PPA, LDO, LOA), mas não é a instância de aprovação do Plano de Saúde; recebe prestação de contas quadrimestral.\n\nTribunal de Contas (C): faz controle externo de legalidade e contas, não aprova instrumentos de planejamento.\n\nSecretaria Municipal de Saúde (D): elabora o plano, mas não o aprova; a aprovação cabe ao controle social.",
    "reference": "Lei nº 8.142/1990 / LC nº 141/2012 / Portaria de Consolidação nº 1/2017 (planejamento do SUS)",
    "tags": [
      "saúde coletiva",
      "planejamento em saúde",
      "controle social",
      "conselho de saúde"
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
    "id": "revalida-2025-1-17",
    "topography": "16",
    "topic": "Pré-operatório",
    "module": "Cirurgia",
    "text": "Homem de 39 anos, sem comorbidades e em bom estado de saúde, encontra-se em preparação pré-operatória eletiva de colecistectomia que será realizada por via laparoscópica. Durante consulta com o médico que o acompanha, o paciente manifesta preocupação sobre o que pode ingerir e por quanto tempo deve permanecer em jejum antes do procedimento. Nesse caso, o médico deve orientar o paciente a fazer, antes da anestesia, jejum de alimentos sólidos por",
    "options": [
      "(A) 12 horas e de líquidos por 8 horas.",
      "(B) 6 a 8 horas e de líquidos claros por 2 horas.",
      "(C) 4 a 6 horas e de bebida proteica por 1 hora.",
      "(D) 10 horas e de pequenos volumes de água por 4 horas."
    ],
    "correctAnswer": 1,
    "explanation": "Pelas recomendações atuais (ASA, ERAS e projeto ACERTO), adultos saudáveis fazem jejum de 6 a 8 horas para sólidos (6 h para refeição leve, 8 h para refeição gordurosa) e de 2 horas para líquidos claros, inclusive bebida com carboidrato, que reduz a resistência à insulina e o desconforto.",
    "commentary": "12 h de sólidos e 8 h de líquidos (A): jejum prolongado e desnecessário, que aumenta o catabolismo.\n\nBebida proteica em 1 hora (C): bebida com proteína não é líquido claro.\n\nÁgua em pequenos volumes até 4 h (D): os líquidos claros são liberados até 2 horas antes.",
    "reference": "ASA — Diretriz de jejum pré-operatório (2023) / Projeto ACERTO",
    "tags": [
      "cirurgia geral",
      "pré-operatório",
      "jejum",
      "ERAS"
    ],
    "tip": "Jejum: 6–8 h sólidos; 2 h líquidos claros."
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
  }
];
