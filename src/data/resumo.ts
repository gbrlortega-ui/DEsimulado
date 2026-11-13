// Arquivo gerado por `npm run gen` a partir do banco de questões. Não editar à mão.
// O build e o servidor local regeneram este arquivo sozinhos; o `npm run validate` acusa se ficar desatualizado.
import type { Question } from '../types';

export const TOTAL_QUESTIONS = 1814;

export const COUNT_BY_AREA: Record<string, number> = {
  "Pediatria": 332,
  "Clínica Médica": 366,
  "Cirurgia": 310,
  "Ginecologia e Obstetrícia": 326,
  "Saúde Coletiva": 320,
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
  "Saúde Coletiva|UNIMED-PB": 12
};

/** Questões por especialidade ou região da topografia ("1.1", "8"). */
export const TOPOGRAPHY_COUNT: Record<string, number> = {
  "8": 54,
  "9": 47,
  "10": 81,
  "11": 186,
  "12": 15,
  "13": 42,
  "14": 73,
  "15": 282,
  "16": 116,
  "1.2": 11,
  "1.3": 20,
  "7.2": 33,
  "4.2": 23,
  "1.1": 57,
  "1.5": 23,
  "6.1": 35,
  "3.1": 59,
  "4.1": 61,
  "2.1": 71,
  "6.2": 19,
  "2.2": 73,
  "3.2": 18,
  "3.3": 17,
  "7.1": 21,
  "1.4": 2,
  "3.4": 12,
  "5.1": 142,
  "5.2": 166
};

/** Questões por assunto, na chave "1.1|Cefaleias". */
export const TOPIC_COUNT: Record<string, number> = {
  "11|Puericultura": 18,
  "1.2|Catarata": 4,
  "11|Icterícia neonatal": 7,
  "11|Obesidade infantil": 7,
  "1.3|Amigdalite/faringoamigdalite": 11,
  "7.2|Urticária": 1,
  "1.2|Uveíte": 2,
  "4.2|Estenose de uretra": 2,
  "11|Calendário vacinal": 9,
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
  "14|Trauma": 25,
  "11|Cardiopatias congênitas": 18,
  "3.1|Constipação intestinal": 5,
  "10|Raiva": 5,
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
  "11|Pneumonia infantil": 4,
  "11|Refluxo gastroesofágico": 2,
  "11|Bronquiolite": 6,
  "11|Desnutrição": 2,
  "10|Sífilis": 13,
  "4.1|Síndrome nefrítica": 2,
  "2.1|Bronquiectasias": 2,
  "8|Insuficiência adrenal": 6,
  "6.2|Escoliose": 2,
  "14|Intoxicações": 10,
  "15|Ética médica": 13,
  "4.1|Síndrome nefrótica": 4,
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
  "8|Cetoacidose diabética": 12,
  "3.1|Diarreia crônica": 3,
  "1.2|Erros refrativos": 1,
  "10|Dengue": 14,
  "4.1|Distúrbios hidroeletrolíticos": 9,
  "4.1|Lesão renal aguda": 9,
  "8|Diabetes mellitus tipo 1 e 2": 20,
  "1.1|Demências": 5,
  "6.1|Lúpus eritematoso sistêmico": 6,
  "1.1|Epilepsia": 5,
  "10|Tuberculose": 17,
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
  "2.2|Valvopatias": 3,
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
  "3.1|Câncer colorretal": 7,
  "8|Obesidade": 5,
  "7.1|Isquemia arterial aguda": 1,
  "7.2|Celulite": 2,
  "16|Pós-operatório": 16,
  "7.1|Insuficiência venosa crônica": 3,
  "6.2|Lesões do manguito rotador": 1,
  "16|Isquemia mesentérica": 4,
  "1.5|Nódulos tireoidianos": 3,
  "16|Abdome agudo": 3,
  "6.2|Lombalgia": 3,
  "7.2|Carcinoma espinocelular": 1,
  "6.2|Luxações": 1,
  "3.3|Colelitíase": 5,
  "5.1|Sangramento uterino anormal": 13,
  "5.1|Climatério e menopausa": 17,
  "5.1|Contracepção": 23,
  "5.1|Câncer de colo uterino": 23,
  "5.1|Vaginose bacteriana": 4,
  "5.2|Diabetes gestacional": 15,
  "5.2|Assistência ao parto": 7,
  "5.2|Puerpério": 12,
  "5.2|Infecções na gestação": 21,
  "5.2|Rotura prematura de membranas": 5,
  "15|Rastreamento": 16,
  "5.1|Câncer de endométrio": 6,
  "5.2|Gravidez ectópica": 7,
  "5.2|Diagnóstico de gravidez": 1,
  "5.2|Pré-natal": 20,
  "5.2|Hemorragia pós-parto": 7,
  "5.2|Trabalho de parto": 21,
  "5.1|Mioma uterino": 8,
  "5.1|Endometriose": 8,
  "5.1|Infertilidade": 8,
  "5.1|Prolapso genital": 5,
  "5.1|Câncer de ovário": 6,
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
  "10|Infecções sexualmente transmissíveis": 6,
  "15|Bioética": 5,
  "5.2|Idade gestacional": 3,
  "4.2|Incontinência urinária": 5,
  "5.2|Placenta prévia": 2,
  "15|Atenção Primária": 57,
  "15|Saúde do idoso": 4,
  "15|SUS": 40,
  "12|Polifarmácia": 2,
  "15|Imunização": 18,
  "15|Saúde do trabalhador": 15,
  "15|Estudos epidemiológicos": 21,
  "15|Epidemiologia": 36,
  "15|Vigilância epidemiológica": 23,
  "15|Testes diagnósticos": 13,
  "15|Estratégia Saúde da Família": 7,
  "12|Quedas": 3,
  "13|Risco de suicídio": 6,
  "13|Transtorno bipolar": 3,
  "10|Infecções relacionadas à assistência": 3,
  "15|Saúde da criança": 3,
  "2.2|Doença arterial coronariana crônica": 3,
  "3.2|Hipertensão portal": 2,
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
  "6.1|Espondilite anquilosante": 3,
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
  "1.5|Câncer de tireoide": 2,
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
  "10|Meningococcemia": 1,
  "6.2|Pé diabético": 3,
  "1.2|Perda visual súbita": 1,
  "11|Alimentação complementar": 1,
  "10|Febre amarela": 1,
  "9|Transfusão sanguínea": 1,
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
    "id": "tp2022-41",
    "topography": "11",
    "topic": "Doença de Kawasaki",
    "module": "Pediatria",
    "text": "Uma criança de 4 anos e 3 meses, sexo masculino, com história de coriza, tosse seca e febre há 7 dias. Evoluiu com conjuntivite não supurativa, dor de garganta, adenopatia cervical unilateral, exantema polimorfo escarlatiniforme com acentuação perineal e língua em morango. Assinale a alternativa que contemple o diagnóstico mais provável e uma possível complicação:",
    "options": [
      "(A) Síndrome inflamatória multissistêmica e arterite de coronárias.",
      "(B) Doença reumática e valvopatia.",
      "(C) Escarlatina e cardite reumática.",
      "(D) Síndrome de Reye e encefalopatia hepática."
    ],
    "correctAnswer": 0,
    "explanation": "Febre prolongada, exantema perineal, língua em morango e adenopatia sugerem Kawasaki/SIM-P, com risco de coronariopatia.",
    "commentary": "Trata-se de Síndrome inflamatória multissistêmica (Kawasaki-like), justificada pela febre prolongada, rash com exacerbação perineal, adenopatia unilateral e língua em morango. A principal complicação é a arterite de coronárias.",
    "reference": "Tratado de Pediatria SBP - 4ª Ed.",
    "tags": [
      "infectologia",
      "reumatologia"
    ]
  },
  {
    "id": "tp2025-54",
    "topography": "14",
    "topic": "Emergências pediátricas",
    "module": "Pediatria",
    "text": "Recém-nascido, em sala de parto, apresenta apneia e cianose. Ao exame, encontra-se sem resposta, sem respiração espontânea e sem pulso palpável. O protocolo de reanimação é iniciado. Qual a primeira medida a ser adotada para otimizar as chances de sucesso da reanimação cardiopulmonar (RCP) neste paciente?",
    "options": [
      "(A) Priorizar a ventilação com pressão positiva.",
      "(B) Iniciar compressões torácicas imediatamente antes da ventilação.",
      "(C) Administrar epinefrina intravenosa antes de iniciar qualquer outra medida.",
      "(D) Realizar desfibrilação precoce com carga baixa, devido à idade do paciente."
    ],
    "correctAnswer": 0,
    "explanation": "Em neonatos, a etiologia típica da parada cardiopulmonar é respiratória/asfíxica. A priorização absoluta inicial deve ser direcionada à ventilação com pressão positiva (VPP).",
    "commentary": "A reanimação neonatal e manejo de PCR em sala de parto priorizam maciçamente a ventilação alveolar (VPP), pois nela repousa a reversão da asfixia secundária na imensa maioria dos casos. Compressões torácicas só são indicadas se, após 30 segundos de VPP bem executada com oxigênio, a FC se mantiver menor que 60 bpm. A epinefrina é uma medida tardia no algoritmo.",
    "reference": "Diretrizes 2022 da Sociedade Brasileira de Pediatria – Programa de Reanimação Neonatal.",
    "tags": [
      "neonatologia"
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
    "id": "tp2022-34",
    "topography": "2.2",
    "topic": "Insuficiência cardíaca",
    "module": "Clínica Médica",
    "text": "Mulher de 62 anos, HAS crônica. Há 6 meses com dispneia progressiva, paroxística noturna, edema de MMII e presença de B3. ECG com sobrecarga de VE. Qual o exame complementar e conduta mais apropriados?",
    "options": [
      "(A) Monitorização Ambulatorial da Pressão Arterial; substituir Captopril por Hidralazina.",
      "(B) Ecocardiograma; manter Captopril e associar Carvedilol e Furosemida.",
      "(C) Cintilografia Miocárdica; manter Captopril, associar Ivabradina e Furosemida.",
      "(D) Holter de 24 horas; manter Captopril, associar Carvedilol e Sustrate."
    ],
    "correctAnswer": 1,
    "explanation": "Hipertensa de longa data, mal controlada, com dispneia progressiva, dispneia paroxística noturna, ortopneia, edema de membros inferiores, B3, estertores em bases, hepatomegalia e cardiomegalia: quadro de insuficiência cardíaca congestiva, provavelmente de causa hipertensiva.\n\nO ecocardiograma é o exame que confirma o diagnóstico e mede a fração de ejeção, que define o tratamento. Na conduta, mantém-se o IECA (captopril, agora em uso correto), usa-se furosemida para aliviar a congestão e associa-se betabloqueador com benefício comprovado na IC (carvedilol), iniciado em dose baixa e aumentado aos poucos, o que também ajuda a controlar a taquicardia.",
    "commentary": "MAPA e hidralazina com tiazídico (A): a dúvida não é se a paciente é hipertensa, e sim a função do coração. Trocar o IECA por hidralazina retira um fármaco que reduz mortalidade na IC, e o tiazídico é fraco para a congestão.\n\nCintilografia e ivabradina (C): a cintilografia investiga isquemia, não é o exame inicial da IC. A ivabradina só entra em IC com fração reduzida em ritmo sinusal que segue com FC alta já em uso de betabloqueador na dose tolerada.\n\nHolter e Sustrate (D): o Holter avalia arritmias, que não são o problema principal. Sustrate (propatilnitrato) é nitrato antianginoso, sem papel no tratamento crônico dessa paciente.",
    "tip": "Suspeita de IC: ecocardiograma. Congestão: furosemida. Base do tratamento: IECA + betabloqueador da IC.",
    "reference": "Diretriz Brasileira de Insuficiência Cardíaca Aguda e Crônica – SBC. 2019.",
    "tags": [
      "cardiologia"
    ]
  },
  {
    "id": "tp2021-34",
    "topography": "8",
    "topic": "Síndrome de Cushing",
    "module": "Clínica Médica",
    "text": "Mulher, 43 anos, com ganho ponderal de 10 kg em 6 meses, fraqueza, ciclos menstruais irregulares e há 4 meses diagnóstico de hipertensão arterial sistêmica. Nega uso de quaisquer medicações. Exame físico: FC = 80 bpm, PA = 160 x 90 mmHg, IMC = 26 kg/m², circunferência abdominal = 100 cm, fácies em lua cheia, pletórica, com estrias largas e violáceas em abdômen, pele fina e com equimoses em membros. A primeira etapa na investigação diagnóstica é:",
    "options": [
      "(A) Dosagem de ACTH plasmático matinal em pelo menos 3 amostras.",
      "(B) Realização de tomografia computadorizada de adrenais e ressonância magnética de hipófise.",
      "(C) Dosagem de catecolaminas plasmáticas e urinárias.",
      "(D) Dosagem de cortisol sérico matinal após dexametasona e de cortisol em urina de 24 horas."
    ],
    "correctAnswer": 3,
    "explanation": "A paciente apresenta os sinais clássicos da Síndrome de Cushing de causa endógena. Antes de buscar a etiologia com exames de imagem ou dosagem direta de ACTH, a primeira etapa obrigatória consiste na documentação quantitativa de hipercortisolemia ativa via cortisol pós-supressão com dexametasona overnight ou cortisol urinário livre de 24h.",
    "commentary": "Na vigência de suspeita clínica sólida de hipercortisolismo endógeno, os testes de triagem iniciais visam ratificar a secreção autônoma aumentada de glicocorticoide. Os exames de imagem e a medição do ACTH são ferramentas subsequentes usadas unicamente para localização diagnóstica refinada após confirmação bioquímica do excesso de cortisol.",
    "reference": "FAUCI, A.S et al. Medicina Interna de Harrison. 20ª ed. Rio de Janeiro: McGraw Hill, 2019. GOLDMAN, L & SCHAFEER, A.I. Goldman-Cecil. Medicine. 26ª ed. Philadelphia: Elsevier, 2019",
    "tags": [
      "endocrinologia"
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
    "id": "tp2023-69",
    "topography": "7.1",
    "topic": "Trombose venosa profunda",
    "module": "Cirurgia",
    "text": "Paciente de 18 anos iniciou uso de anticoncepcional há 3 dias e apresenta aumento de volume da panturrilha direita (7cm maior que a esquerda). Ao se realizar a dorsiflexão plantar, apresenta dor nos músculos da panturrilha, apresenta ainda veias dos pés ingurgitadas e discreta cianose. Qual a hipótese diagnóstica?",
    "options": [
      "(A) Trombose venosa profunda",
      "(B) Oclusão arterial aguda",
      "(C) Doença arterial oclusiva crônica",
      "(D) Lesão óssea"
    ],
    "correctAnswer": 0,
    "explanation": "Mulher jovem que acabou de iniciar anticoncepcional combinado (o estrogênio aumenta a coagulabilidade, um dos elementos da tríade de Virchow) com aumento importante do diâmetro da panturrilha, dor à dorsiflexão do pé (sinal de Homans), veias superficiais ingurgitadas e leve cianose tem quadro de trombose venosa profunda.\n\nO ingurgitamento das veias superficiais reflete o desvio do fluxo quando o sistema profundo está obstruído. A confirmação é feita com ultrassom Doppler venoso, e o tratamento é anticoagulação; o anticoncepcional com estrogênio deve ser suspenso.",
    "commentary": "Oclusão arterial aguda (B): o membro fica frio, pálido, sem pulsos, com dor intensa, parestesia e paralisia; não há edema importante nem veias ingurgitadas.\n\nDoença arterial oclusiva crônica (C): ocorre em idosos com fatores de risco cardiovascular, com claudicação intermitente e atrofia, e não com edema agudo em uma jovem.\n\nLesão óssea (D): não explicaria o edema volumoso da panturrilha, as veias dilatadas e a cianose, nem há história de trauma.",
    "tip": "Estrogênio + panturrilha inchada + Homans positivo + veias superficiais cheias = TVP: Doppler e anticoagulação.",
    "reference": "Maffei doenças vasculares periféricas. Rutherford,vascular disease",
    "tags": [
      "cirurgia vascular"
    ]
  },
  {
    "id": "tp2025-62",
    "topography": "3.3",
    "topic": "Colangiocarcinoma",
    "module": "Cirurgia",
    "text": "Homem de 65 anos, tabagista e com histórico de colangite esclerosante primária, apresenta icterícia progressiva há dois meses, associada a perda de peso não intencional e prurido cutâneo. Colangiopancreatografia por ressonância magnética revela uma estenose irregular da via biliar hepática comum, com dilatação dos ductos intra-hepáticos. Qual é o diagnóstico mais provável?",
    "options": [
      "(A) Hepatocarcinoma com invasão da via biliar.",
      "(B) Adenocarcinoma pancreático com invasão da via biliar.",
      "(C) Colelitíase complicada com colangite crônica.",
      "(D) Colangiocarcinoma peri-hilar – Tumor de Klatskin."
    ],
    "correctAnswer": 3,
    "explanation": "O colangiocarcinoma peri-hilar (Tumor de Klatskin) é o tumor biliar primário mais comum no hilo hepático, fortemente associado à colangite esclerosante primária.",
    "commentary": "O colangiocarcinoma peri-hilar, ou hilar (chamado tumor de Klatskin), é um tumor maligno da árvore biliar, frequentemente associado à colangite esclerosante primária. Os achados clínicos incluem icterícia progressiva indolor, perda de peso e prurido, além de exames de imagem demonstrando estenose irregular da via biliar com dilatação dos ductos intra-hepáticos. O hepatocarcinoma está usualmente associado a cirrose e nódulos parenquimatosos. O adenocarcinoma pancreático cursa com massa pancreática e sinal de Courvoisier. A colelitíase cursa com quadro febril e álgico mais agudo.",
    "reference": "Rizvi, S., & Gores, G. J. (2013). Pathogenesis, diagnosis, and management of cholangiocarcinoma. Gastroenterology, 145(6), 1215-1229; Khan, S. A., Davidson, B. R. et al. (2012). Guidelines for the diagnosis and treatment of cholangiocarcinoma. Gut, 61(12), 1657-1669.",
    "tags": [
      "oncologia",
      "gastroenterologia"
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
    "id": "tp2024-83",
    "topography": "5.1",
    "topic": "Climatério e menopausa",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher negra, 54 anos, menopausa há 15 anos. Asma grave (corticoide crônico), hipertensa (tiazídico), insônia (benzodiazepínico). Tabagista, sedentária. Mãe/avó com osteoporose. Fatores de risco para osteoporose presentes:",
    "options": [
      "(A) Raça negra, uso de benzodiazepínico e sedentarismo.",
      "(B) Menopausa precoce, antecedente familiar de osteoporose, tabagismo.",
      "(C) Uso de benzodiazepínico, antecedente familiar e obesidade.",
      "(D) História familiar de câncer de mama, sedentarismo e uso crônico de corticoide."
    ],
    "correctAnswer": 1,
    "explanation": "A paciente tem 54 anos e está na menopausa há 15 anos, ou seja, parou de menstruar por volta dos 39 anos: menopausa precoce (antes dos 40), que expõe o osso a longo período sem estrogênio. Somam-se o tabagismo e a história de osteoporose na mãe e na avó, todos fatores de risco reconhecidos.\n\nO uso crônico de corticoide sistêmico também é fator de risco importante, mas a única alternativa que reúne apenas fatores verdadeiros é a que cita menopausa precoce, história familiar e tabagismo. Ela tem indicação de densitometria óssea.",
    "commentary": "Raça negra e benzodiazepínico (A): mulheres negras têm, em média, maior massa óssea, o que é proteção, não risco. O benzodiazepínico aumenta o risco de quedas e fraturas, mas não é fator de risco para baixa massa óssea; sedentarismo também não completa a alternativa.\n\nObesidade (C): o caso não descreve obesidade, e o baixo peso (IMC abaixo de 18,5) é que se associa a osteoporose; o benzodiazepínico, como dito, não entra na lista.\n\nHistória familiar de câncer de mama (D): não tem relação com a massa óssea; o corticoide crônico é fator de risco, mas a alternativa traz um item errado.",
    "tip": "Menopausa antes dos 40, cigarro, corticoide, baixo peso e osteoporose ou fratura de quadril na família: fatores de risco para osteoporose.",
    "reference": "Manual brasileiro de osteoporose: orientações práticas para os profissionais de saúde / organização Adriana Orcesi Pedro , Perola Grinberg Plapler , Vera Lúcia Szejnfeld - 1. ed. - São Paulo: Editora Clannad, 2021, ISBN 978-65-89832-00-3",
    "tags": [
      "climatério",
      "osteoporose"
    ]
  },
  {
    "id": "tp2023-91",
    "topography": "5.1",
    "topic": "Contracepção",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 24 anos comparece à UBS em busca de método contraceptivo. Em seu histórico apresenta crises de cefaleia unilateral pulsátil precedidas de escotomas, que ocorrem com maior frequência no período menstrual. Entre os contraceptivos, a indicação correta para essa situação é:",
    "options": [
      "(A) Adesivo contraceptivo contendo estrogênio e progestagênio.",
      "(B) Pílula combinada contendo estrogênio e progestagênio.",
      "(C) Pílula de progestagênio.",
      "(D) Injetável mensal contendo estrogênio e progestagênio."
    ],
    "correctAnswer": 2,
    "explanation": "Cefaleia unilateral, pulsátil, ligada à menstruação e precedida por escotomas é enxaqueca com aura. A aura é fator de risco independente para acidente vascular cerebral isquêmico, e o estrogênio dos métodos combinados aumenta ainda mais esse risco.\n\nPelos critérios de elegibilidade da OMS, enxaqueca com aura é categoria 4 (contraindicação absoluta) para todos os métodos com estrogênio, em qualquer via: pílula, adesivo, anel e injetável mensal. Ficam disponíveis os métodos só de progestagênio (pílula, injetável trimestral, implante, DIU hormonal) e os não hormonais, como o DIU de cobre. Entre as alternativas, a pílula de progestagênio é a única adequada.",
    "commentary": "Adesivo combinado (A): libera estrogênio pela pele, com o mesmo risco trombótico das pílulas combinadas; contraindicado.\n\nPílula combinada (B): contém estrogênio e é categoria 4 na enxaqueca com aura.\n\nInjetável mensal (D): também combina estrogênio e progestagênio, portanto tem a mesma contraindicação.",
    "tip": "Enxaqueca com aura = nenhum método com estrogênio (OMS 4); use progestagênio isolado ou DIU de cobre.",
    "reference": "Sacco S, Merki-Feld GS, Ægidius KL et al. Hormonal contraceptives and risk of ischemic stroke in women with migraine: a consensus statement from the European Headache Federation (EHF) and the European Society of Contraception and Reproductive Health (ESC). J Headache Pain. 2017;18(1):108.",
    "tags": [
      "contracepção"
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
    "id": "tp2020-100",
    "topography": "5.2",
    "topic": "Trabalho de parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante de 25 anos, 35 semanas de amenorreia, pré-natal adequado, última consulta há 3 semanas. Procura UBS referindo dor em BV há 4 horas. Exame físico: bom estado geral, PA 120/80 mmHg, peso 52kg, ausência de edema em MMII. Exame obstétrico AU = 32cm; BCF 144 bpm; DU: 3 contrações moderadas de 10 minutos com toque vaginal de 2,0cm, esvaecido 60%, cefálico, plano-2 De Lee, bolsa íntegra.\n\nA conduta correta é:",
    "options": [
      "(A) Investigar infecção urinária, soroterapia com antiespasmódico e alta com sintomáticos.",
      "(B) Avaliar vitalidade fetal e encaminhar para unidade terciária.",
      "(C) Antibiótico profilático, investigar infecção urinária, corticoterapia e encaminhar para unidade terciária.",
      "(D) Corticoterapia, profilaxia do streptococcus do grupo B e encaminhar para unidade terciária."
    ],
    "correctAnswer": 1,
    "explanation": "Trabalho de parto prematuro a 35 semanas. Após 34 semanas não há indicação de tocólise nem, de rotina, de corticoide. A conduta na UBS é avaliar a vitalidade fetal e encaminhar a gestante à unidade terciária para assistência ao parto pré-termo.",
    "commentary": "Alta com sintomáticos é inadequada. Corticoide e antibiótico profilático não são as condutas centrais na UBS nessa idade gestacional.",
    "reference": "Montenegro, Carlos Antonio Barbosa Rezende, Obstetrícia Fundamental /Carlos Antonio Barbosa Montenegro, Jorge de Rezende Filho -11ª ed - Rio de Janeiro; Guanabara Koogan, 2008. / Luis Camano, Eduardo de Souza, Nelson Sass, Rosiane Mattar Guias de Medicina Ambulatorial e Hospitalar UNIFESP / EPM 1ª ed = São Paulo, Manole, 2003.",
    "tags": [
      "obstetrícia",
      "trabalho de parto prematuro"
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
    "id": "tp2026-118",
    "topography": "8",
    "topic": "Diabetes mellitus tipo 1 e 2",
    "module": "Saúde Coletiva",
    "text": "Mulher de 55 anos, parda, diabética há mais de 10 anos, em tratamento irregular, procura a UBS relatando que há 1 ano iniciou dor plantar, bilateral, progressiva, em queimação e mais importante no período noturno. Ao exame físico, apresenta hipoestesia plantar. Além do controle glicêmico, a medicação com maior benefício no tratamento sintomático do quadro álgico é:",
    "options": [
      "(A) Tramadol",
      "(B) Gabapentina",
      "(C) Prednisona",
      "(D) Diclofenaco"
    ],
    "correctAnswer": 1,
    "explanation": "Diabética de longa data, com controle ruim, dor em queimação nas plantas dos pés, bilateral e pior à noite, e hipoestesia plantar: é a polineuropatia diabética dolorosa, distal e simétrica, em padrão de bota.\n\nAlém de melhorar o controle glicêmico, o alívio da dor neuropática é feito com fármacos de primeira linha: gabapentinoides (gabapentina, pregabalina), antidepressivos tricíclicos (amitriptilina) ou inibidores da recaptação de serotonina e noradrenalina (duloxetina). Entre as opções, a gabapentina é a única de primeira linha. O exame dos pés é essencial, pela perda da sensibilidade protetora.",
    "commentary": "Tramadol (A): opioide reservado para casos refratários, pelo risco de efeitos adversos e dependência; não é primeira escolha.\n\nPrednisona (C): a neuropatia diabética não é inflamatória, e o corticoide pioraria o controle glicêmico.\n\nDiclofenaco (D): anti-inflamatórios têm pouca eficácia na dor neuropática e, no diabético, aumentam o risco de lesão renal.",
    "tip": "Neuropatia diabética dolorosa: gabapentinoide, tricíclico ou duloxetina. Anti-inflamatório e corticoide não resolvem.",
    "reference": "Diretrizes da Sociedade Brasileira de Diabetes (SBD), 2023.",
    "tags": [
      "diabetes mellitus",
      "neuropatia diabética",
      "dor neuropática"
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
    "id": "tp2021-15",
    "module": "Ciências Básicas",
    "text": "A fibrose cística é causada por mutações no gene CFTR. Algumas substituições de bases não resultam em doença. Isso é explicado por mutações:",
    "options": [
      "(A) De sentido trocado.",
      "(B) Compensadoras.",
      "(C) Sem sentido.",
      "(D) Silenciosas."
    ],
    "correctAnswer": 3,
    "explanation": "Mutações silenciosas caracterizam-se por substituições de nucleotídeos que mantêm a codificação do mesmo aminoácido original devido ao código genético degenerativo.",
    "commentary": "Sendo o código genético degenerativo/redundante, múltiplos códons de trincas de nucleotídeos especificam o mesmo aminoácido. Uma mutação silenciosa altera a base mas gera o mesmo aminoácido residual na proteína CFTR, preservando sua integridade funcional e biológica.",
    "reference": "Nussbaum RL, McInnes RR, Willard HF. Thompson & Thompson. Genética Médica, 7a. Ed., Guanabara Koogan, Rio de Janeiro, 2008.",
    "tags": [
      "genética",
      "biologia molecular"
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
    "id": "enamed-2026-25",
    "topography": "5.1",
    "topic": "Doença inflamatória pélvica",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 20 anos procura Unidade de Pronto Atendimento devido a queixa de corrimento vaginal há 7 dias, associado a odor fétido e prurido leve. Refere início recente de dor pélvica hipogástrica, febre não aferida e dispareunia. O exame ginecológico mostra corrimento acinzentado, colo uterino doloroso à mobilização e dor à palpação anexial bilateral.\n\nQual é o tratamento medicamentoso nesse caso, considerando-se o diagnóstico provável?",
    "options": [
      "(A) Metronidazol, ceftriaxona e doxiciclina.",
      "(B) Fluconazol, azitromicina e clidamicina.",
      "(C) Doxiciclina, ceftriaxona e gentamicina.",
      "(D) Miconazol, metronidazol e azitromicina."
    ],
    "correctAnswer": 0,
    "explanation": "Corrimento acinzentado com odor fétido sugere vaginose bacteriana, e dor pélvica, febre, dor à mobilização do colo e dor anexial definem doença inflamatória pélvica (DIP).\n\nO esquema ambulatorial do Ministério da Saúde para DIP é ceftriaxona 500 mg IM dose única + doxiciclina 100 mg VO 12/12 h por 14 dias + metronidazol 500 mg VO 12/12 h por 14 dias, cobrindo gonococo, clamídia e anaeróbios.",
    "commentary": "Fluconazol e miconazol tratam candidíase. Gentamicina e clindamicina fazem parte de esquemas parenterais hospitalares, e não na combinação proposta. (Gabarito preliminar do INEP.)",
    "reference": "Ministério da Saúde. PCDT para Atenção Integral às Pessoas com IST, 2022",
    "tags": [
      "ginecologia",
      "IST",
      "doença inflamatória pélvica"
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
    "id": "scmbh2026-58",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "É INCORRETO afirmar que, na interface entre saúde suplementar e Sistema Único de Saúde (SUS):",
    "options": [
      "(A) A regulação busca equilibrar cobertura, qualidade e proteção do consumidor/usuário.",
      "(B) A integração de informações entre sistemas pode qualificar vigilância e avaliação de desempenho.",
      "(C) A existência de planos privados substitui o dever estatal de garantir universalidade no território.",
      "(D) A coordenação do cuidado pode ser fortalecida por arranjos regionais público-privados bem regulados."
    ],
    "correctAnswer": 2,
    "explanation": "A questão pede a alternativa incorreta. Pela Constituição (art. 196), a saúde é direito de todos e dever do Estado. A existência de planos privados (saúde suplementar, regulada pela ANS) não substitui o dever estatal de garantir acesso universal: o SUS continua responsável por toda a população, inclusive beneficiários de planos.",
    "commentary": "Regulação busca equilibrar cobertura, qualidade e proteção (A): correta (papel da ANS).\n\nIntegração de informações qualifica a vigilância (B): correta.\n\nCoordenação por arranjos regionais regulados (D): correta, desde que sob regulação pública.",
    "reference": "Constituição Federal, arts. 196–199 / Lei nº 9.656/1998 / Lei nº 9.961/2000 (ANS)",
    "tags": [
      "saúde coletiva",
      "saúde suplementar",
      "universalidade",
      "SUS"
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
  }
];
