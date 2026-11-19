import type { Module, Question } from '../types';
import { findTopographyGroup } from '../data/topografia';

/**
 * Taxonomia das estatísticas do aluno: grande área → subárea → temas, mais as síndromes e
 * apresentações clínicas transversais. Cada questão é classificada pelas suas tags, pelo assunto
 * (`topic`) e pela especialidade da topografia — sem precisar marcar nada à mão no banco.
 *
 * Palavras-chave: comparadas sem acento e sem maiúsculas, como palavra inteira dentro de cada tag.
 * Começando com "=", só valem se a tag for exatamente aquela (ex.: "=hipertensão", para não pegar
 * "hipertensão portal").
 */
export interface Subarea {
  id: string;
  name: string;
  /** Principais temas (texto exibido). */
  temas: string;
  kw: string[];
  /** Tags genéricas ("obstetrícia"): só contam quando nenhuma outra subárea da área foi reconhecida. */
  fallback?: string[];
}
export interface GrandeArea {
  id: string;
  name: string;
  /** Área do banco que entra inteira nesta grande área (as outras entram só pelas palavras-chave). */
  module?: Module;
  subareas: Subarea[];
}
export interface Sindrome {
  id: string;
  name: string;
  diferenciais: string;
  kw: string[];
}

const s = (id: string, name: string, temas: string, kw: string[], fallback?: string[]): Subarea => ({ id, name, temas, kw, fallback });

export const GRANDES_AREAS: GrandeArea[] = [
  {
    id: 'clinica',
    name: 'Clínica Médica',
    module: 'Clínica Médica',
    subareas: [
      s('cardio', 'Cardiologia', 'HAS, SCA, IAM, insuficiência cardíaca, arritmias, valvopatias, endocardite', [
        'cardiologia', '=hipertensão', 'hipertensão arterial', 'hipertensão arterial sistêmica', 'síndrome coronariana aguda', 'SCA', 'IAM',
        'infarto', 'angina', 'insuficiência cardíaca', 'arritmia', 'arritmias', 'fibrilação atrial', 'flutter', 'taquicardia',
        'bradicardia', 'bloqueio atrioventricular', 'valvopatia', 'valvopatias', 'estenose aórtica', 'estenose mitral',
        'insuficiência mitral', 'insuficiência aórtica', 'endocardite', 'pericardite', 'miocardite', 'eletrocardiograma',
        'risco cardiovascular', 'dislipidemia', 'síncope', 'Cardiologia',
      ]),
      s('pneumo', 'Pneumologia', 'Asma, DPOC, pneumonia, tuberculose, TEP, derrame pleural', [
        'pneumologia', 'asma', 'DPOC', 'pneumonia', 'tuberculose', 'tromboembolismo pulmonar', 'TEP', 'derrame pleural',
        'espirometria', 'nódulo pulmonar', 'pneumopatia', 'doença pulmonar intersticial', 'bronquiectasia', 'tabagismo',
        'câncer de pulmão', 'Pneumologia',
      ]),
      s('gastro', 'Gastroenterologia', 'DRGE, úlcera péptica, doença inflamatória intestinal, hemorragia digestiva', [
        'gastroenterologia', 'DRGE', 'doença do refluxo', 'úlcera péptica', 'helicobacter pylori', 'dispepsia',
        'doença inflamatória intestinal', 'doença de Crohn', 'retocolite ulcerativa', 'hemorragia digestiva',
        'hemorragia digestiva alta', 'hemorragia digestiva baixa', 'doença celíaca', 'síndrome do intestino irritável',
        'diarreia crônica', 'Gastroenterologia',
      ]),
      s('hepato', 'Hepatologia', 'Hepatites, cirrose, hepatopatias, hipertensão portal, PBE', [
        'hepatologia', 'hepatite', 'hepatites', 'hepatite B', 'hepatite C', 'hepatite A', 'hepatites virais', 'cirrose',
        'hepatopatia', 'hipertensão portal', 'PBE', 'peritonite bacteriana espontânea', 'ascite', 'encefalopatia hepática',
        'varizes esofágicas', 'esteatose', 'doença hepática', 'Hepatologia',
      ]),
      s('nefro', 'Nefrologia', 'IRA, DRC, glomerulopatias, síndrome nefrótica, síndrome nefrítica', [
        'nefrologia', 'lesão renal aguda', 'insuficiência renal aguda', 'IRA', 'doença renal crônica', 'DRC',
        'glomerulopatia', 'glomerulopatias', 'glomerulonefrite', 'síndrome nefrótica', 'síndrome nefrítica',
        'distúrbios hidroeletrolíticos', 'hiponatremia', 'hipernatremia', 'hipocalemia', 'hipercalemia', 'diálise',
        'Nefrologia',
      ]),
      s('endocrino', 'Endocrinologia', 'Diabetes, obesidade, tireoide, adrenal, hipófise, paratireoide', [
        'endocrinologia', 'diabetes', 'diabetes mellitus', 'diabetes mellitus tipo 2', 'diabetes mellitus tipo 1', 'insulina',
        'insulinoterapia', 'obesidade', 'tireoide', 'hipotireoidismo', 'hipertireoidismo', 'nódulo tireoidiano',
        'adrenal', 'insuficiência adrenal', 'síndrome de Cushing', 'hipófise', 'prolactinoma', 'paratireoide',
        'hiperparatireoidismo', 'hipercalcemia', 'cetoacidose diabética', 'Endocrinologia e metabolismo',
      ]),
      s('hemato', 'Hematologia', 'Anemias, leucemias, linfomas, coagulopatias, trombofilias', [
        'hematologia', 'anemia', 'anemias', 'anemia ferropriva', 'anemia megaloblástica', 'anemia hemolítica',
        'anemia falciforme', 'doença falciforme', 'leucemia', 'leucemias', 'linfoma', 'linfomas', 'mieloma múltiplo',
        'coagulopatia', 'coagulopatias', 'trombofilia', 'trombofilias', 'plaquetopenia', 'trombocitopenia',
        'anticoagulação', 'hemofilia', 'transfusão', 'Hematologia e oncologia',
      ]),
      s('reumato', 'Reumatologia', 'Artrite reumatoide, lúpus, gota, vasculites, espondiloartrites', [
        'reumatologia', 'artrite reumatoide', 'lúpus', 'lúpus eritematoso sistêmico', 'gota', 'vasculite', 'vasculites',
        'espondiloartrite', 'espondiloartrites', 'espondilite anquilosante', 'esclerose sistêmica', 'fibromialgia',
        'polimialgia reumática', 'síndrome de Sjögren', 'artrite', 'Reumatologia',
      ]),
      s('infecto', 'Infectologia', 'Sepse, HIV, dengue, meningites, endocardite, infecções bacterianas', [
        'infectologia', 'sepse', 'choque séptico', 'HIV', 'aids', 'dengue', 'arboviroses', 'chikungunya', 'zika',
        'meningite', 'meningites', 'endocardite', 'leptospirose', 'malária', 'febre amarela', 'leishmaniose',
        'doença de Chagas', 'covid-19', 'antibioticoterapia', 'infecção urinária', 'sífilis', 'Infectologia',
      ]),
      s('neuro', 'Neurologia', 'AVC, epilepsia, cefaleias, demências, Parkinson, neuropatias', [
        'neurologia', 'AVC', 'acidente vascular cerebral', 'AVC isquêmico', 'AVC hemorrágico', 'trombólise', 'epilepsia',
        'crise convulsiva', 'cefaleia', 'cefaleias', 'enxaqueca', 'demência', 'demências', 'doença de Alzheimer',
        'doença de Parkinson', 'parkinsonismo', 'neuropatia', 'neuropatias', 'síndrome de Guillain-Barré',
        'esclerose múltipla', 'miastenia gravis', 'Neurologia',
      ]),
      s('dermato', 'Dermatologia', 'Dermatites, psoríase, hanseníase, infecções cutâneas', [
        'dermatologia', 'dermatite', 'dermatites', 'dermatite atópica', 'psoríase', 'hanseníase', 'infecção cutânea',
        'infecções cutâneas', 'celulite', 'erisipela', 'micose', 'melanoma', 'câncer de pele', 'urticária', 'Dermatologia',
      ]),
      s('psiq', 'Psiquiatria', 'Depressão, ansiedade, bipolaridade, esquizofrenia, dependência química', [
        'psiquiatria', 'saúde mental', 'depressão', 'ansiedade', 'transtorno de ansiedade', 'transtorno bipolar',
        'bipolaridade', 'esquizofrenia', 'psicose', 'dependência química', 'alcoolismo', 'uso de álcool', 'álcool',
        'transtorno por uso de substâncias', 'benzodiazepínicos', 'antidepressivos', 'suicídio', 'TDAH', 'Psiquiatria',
      ]),
      s('onco', 'Oncologia', 'Rastreamento, diagnóstico, estadiamento e tratamento dos principais cânceres', [
        'oncologia', 'câncer', 'neoplasia', 'neoplasias', 'estadiamento', 'câncer de pulmão', 'câncer de mama',
        'câncer colorretal', 'câncer de próstata', 'tumor', 'quimioterapia',
      ]),
      s('geriatria', 'Geriatria', 'Fragilidade, quedas, delirium, demências, polifarmácia', [
        'geriatria', 'idoso', 'saúde do idoso', 'fragilidade', 'quedas', 'delirium', 'polifarmácia',
        'critérios de Beers', 'Geriatria',
      ]),
    ],
  },
  {
    id: 'cirurgia',
    name: 'Cirurgia Geral',
    module: 'Cirurgia',
    subareas: [
      s('abdome', 'Abdome agudo', 'Inflamatório, obstrutivo, perfurativo, vascular e hemorrágico', [
        'abdome agudo', 'abdome agudo inflamatório', 'abdome agudo obstrutivo', 'abdome agudo perfurativo',
        'abdome agudo vascular', 'abdome agudo hemorrágico', 'obstrução intestinal', 'bridas', 'isquemia mesentérica',
        'volvo', 'úlcera perfurada', 'pneumoperitônio',
      ]),
      s('digestivo', 'Cirurgia do aparelho digestivo', 'Apendicite, colecistite, diverticulite, hérnias, neoplasias', [
        'cirurgia do aparelho digestivo', 'apendicite', 'apendicite aguda', 'diverticulite', 'câncer colorretal',
        'câncer de esôfago', 'câncer gástrico', 'cirurgia bariátrica', 'acalasia', 'megaesôfago', 'gastroenterologia', 'hemorragia digestiva alta', 'hemorragia digestiva baixa', 'DRGE',
        'úlcera péptica', 'GIST', 'cirurgia hepática', 'tumores hepáticos benignos', 'tumores hepáticos',
      ]),
      s('biliares', 'Vias biliares', 'Colelitíase, coledocolitíase, colangite', [
        'vias biliares', 'colelitíase', 'colecistite', 'colecistite aguda', 'coledocolitíase', 'colangite', 'CPRE',
        'icterícia obstrutiva', 'colecistectomia', 'Vesícula biliar e vias biliares',
      ]),
      s('pancreas', 'Pâncreas', 'Pancreatite aguda e crônica, neoplasias', [
        'pâncreas', 'pancreatite', 'pancreatite aguda', 'pancreatite crônica', 'câncer de pâncreas', 'Pâncreas',
      ]),
      s('trauma', 'Trauma', 'Trauma abdominal, torácico, cranioencefálico e politrauma', [
        'trauma', 'politrauma', 'ATLS', 'trauma abdominal', 'trauma torácico', 'traumatismo cranioencefálico', 'TCE',
        'choque hemorrágico', 'tratamento não operatório', 'pneumotórax', 'hemotórax', 'drenagem torácica', 'FAST',
      ]),
      s('vascular', 'Cirurgia vascular', 'Isquemia aguda, doença arterial periférica, aneurismas, TVP', [
        'cirurgia vascular', 'isquemia arterial aguda', 'doença arterial periférica', 'doença arterial obstrutiva periférica',
        'aneurisma', 'aneurisma de aorta abdominal', 'trombose venosa profunda', 'TVP', 'insuficiência venosa',
        'varizes', 'Angiologia e cirurgia vascular',
      ]),
      s('procto', 'Proctologia', 'Hemorroidas, fissuras, fístulas, abscessos anorretais', [
        'proctologia', 'coloproctologia', 'hemorroidas', 'doença hemorroidária', 'fissura anal', 'fístula anal',
        'abscesso anorretal', 'abscesso perianal',
      ]),
      s('periop', 'Pré e pós-operatório', 'Avaliação de risco, antibioticoprofilaxia, complicações cirúrgicas', [
        'pré-operatório', 'pós-operatório', 'avaliação pré-operatória', 'risco cirúrgico', 'antibioticoprofilaxia',
        'complicações cirúrgicas', 'infecção de sítio cirúrgico', 'deiscência', 'febre pós-operatória', 'perioperatório',
      ]),
      s('hernias', 'Hérnias', 'Inguinal, femoral, umbilical, incisional e encarceramento', [
        'hérnia', 'hérnias', 'hérnia inguinal', 'hérnia femoral', 'hérnia umbilical', 'hérnia incisional',
        'hérnia encarcerada', 'encarceramento',
      ]),
      s('queimaduras', 'Queimaduras', 'Classificação, reposição volêmica e tratamento', ['queimadura', 'queimaduras', 'fórmula de Parkland']),
    ],
  },
  {
    id: 'emergencia',
    name: 'Medicina de Emergência',
    subareas: [
      s('pcr', 'Parada cardiorrespiratória', 'RCP, ritmos chocáveis e não chocáveis, ACLS', [
        'parada cardiorrespiratória', 'PCR', 'RCP', 'reanimação cardiopulmonar', 'ACLS', 'desfibrilação', 'fibrilação ventricular',
      ]),
      s('choque', 'Choque', 'Hipovolêmico, cardiogênico, distributivo e obstrutivo', [
        'choque', 'choque hipovolêmico', 'choque cardiogênico', 'choque séptico', 'choque hemorrágico', 'choque distributivo',
        'choque obstrutivo', 'drogas vasoativas',
      ]),
      s('ira', 'Insuficiência respiratória', 'Hipoxêmica, hipercápnica, ventilação e oxigenoterapia', [
        'insuficiência respiratória', 'insuficiência respiratória aguda', 'oxigenoterapia', 'ventilação mecânica',
        'ventilação não invasiva', 'via aérea', 'intubação orotraqueal', 'sequência rápida de intubação',
      ]),
      s('dortor', 'Dor torácica', 'SCA, dissecção de aorta, TEP, pneumotórax', [
        'dor torácica', 'síndrome coronariana aguda', 'IAM', 'dissecção de aorta', 'dissecção aórtica', 'pneumotórax hipertensivo',
      ]),
      s('dispneia', 'Dispneia aguda', 'Edema pulmonar, asma grave, TEP, pneumonia', [
        'dispneia', 'edema agudo de pulmão', 'edema pulmonar', 'asma grave', 'crise asmática', 'exacerbação de DPOC',
      ]),
      s('consciencia', 'Alteração do nível de consciência', 'Coma, delirium, hipoglicemia, intoxicações', [
        'rebaixamento do nível de consciência', 'coma', 'escala de coma de Glasgow', 'hipoglicemia', 'delirium',
      ]),
      s('neuroemerg', 'Emergências neurológicas', 'AVC, estado de mal epiléptico, hipertensão intracraniana', [
        'AVC', 'AVC isquêmico', 'trombólise', 'estado de mal epiléptico', 'hipertensão intracraniana', 'hemorragia subaracnóidea',
      ]),
      s('metabolica', 'Emergências metabólicas', 'Cetoacidose diabética, estado hiperosmolar, distúrbios hidroeletrolíticos', [
        'cetoacidose diabética', 'estado hiperglicêmico hiperosmolar', 'estado hiperosmolar', 'distúrbios hidroeletrolíticos',
        'hiponatremia', 'hipercalemia', 'hipocalemia', 'hipercalcemia',
      ]),
      s('intox', 'Intoxicações', 'Medicamentos, drogas e agentes químicos', [
        'intoxicação', 'intoxicações', 'intoxicação exógena', 'toxicologia', 'antídoto', 'organofosforados',
        'acidentes por animais peçonhentos', 'acidente ofídico',
      ]),
      s('hipertensiva', 'Emergências hipertensivas', 'Emergência e urgência hipertensiva', [
        'emergência hipertensiva', 'urgência hipertensiva', 'crise hipertensiva',
      ]),
      s('anafilaxia', 'Anafilaxia', 'Reconhecimento e tratamento', ['anafilaxia', 'choque anafilático', 'adrenalina']),
      s('acidobase', 'Distúrbios ácido-base', 'Acidose, alcalose, interpretação de gasometria', [
        'distúrbios ácido-base', 'acidose', 'acidose metabólica', 'acidose respiratória', 'alcalose', 'gasometria',
        'ânion gap', 'equilíbrio ácido-base',
      ]),
    ],
  },
  {
    id: 'pediatria',
    name: 'Pediatria',
    module: 'Pediatria',
    subareas: [
      s('neonato', 'Neonatologia', 'Prematuridade, icterícia, sepse neonatal, reanimação', [
        'neonatologia', 'recém-nascido', 'prematuridade', 'icterícia neonatal', 'sepse neonatal', 'reanimação neonatal',
        'triagem neonatal', 'teste do pezinho', 'sífilis congênita', 'desconforto respiratório', 'taquipneia transitória',
        'doença da membrana hialina',
      ]),
      s('puericultura', 'Puericultura', 'Crescimento, desenvolvimento, marcos motores', [
        'puericultura', 'crescimento', 'desenvolvimento', 'desenvolvimento neuropsicomotor', 'marcos do desenvolvimento',
        'baixa estatura', 'curvas de crescimento', 'consulta de puericultura', 'adolescência',
      ]),
      s('aleitamento', 'Aleitamento materno', 'Amamentação, dificuldades e contraindicações', [
        'aleitamento materno', 'amamentação', 'leite materno', 'mastite',
      ]),
      s('nutricao', 'Nutrição infantil', 'Desnutrição, obesidade, introdução alimentar', [
        'nutrição', 'nutrição infantil', 'desnutrição', 'obesidade infantil', 'introdução alimentar', 'alimentação complementar',
        'suplementação', 'vitamina D', 'ferro',
      ]),
      s('infectoped', 'Infectologia pediátrica', 'IVAS, pneumonia, otite, meningite, exantemas', [
        'infectologia', 'IVAS', 'otite', 'otite média aguda', 'faringoamigdalite', 'meningite', 'doenças exantemáticas',
        'exantema', 'sarampo', 'varicela', 'escarlatina', 'parasitoses intestinais', 'coqueluche', 'febre sem sinais localizatórios',
      ]),
      s('gastroped', 'Gastroenterologia pediátrica', 'Diarreia, desidratação, constipação, refluxo', [
        'gastroenterologia', 'diarreia', 'diarreia aguda', 'desidratação', 'constipação', 'constipação intestinal',
        'refluxo gastroesofágico', 'terapia de reidratação oral', 'hidratação venosa', 'APLV', 'alergia à proteína do leite de vaca',
      ]),
      s('pneumoped', 'Pneumologia pediátrica', 'Asma, bronquiolite, crupe, pneumonia', [
        'pneumologia', 'asma', 'bronquiolite', 'vírus sincicial respiratório', 'crupe', 'laringotraqueíte', 'pneumonia',
        'sibilância', 'fibrose cística',
      ]),
      s('cardioped', 'Cardiologia pediátrica', 'Cardiopatias congênitas, sopros, febre reumática', [
        'cardiologia', 'cardiopatias congênitas', 'cardiopatia congênita', 'sopro', 'febre reumática', 'doença de Kawasaki',
      ]),
      s('nefroped', 'Nefrologia pediátrica', 'ITU, síndrome nefrótica, síndrome nefrítica', [
        'nefrologia', 'infecção urinária', 'ITU', 'síndrome nefrótica', 'síndrome nefrítica', 'glomerulonefrite pós-estreptocócica',
        'refluxo vesicoureteral',
      ]),
      s('endoped', 'Endocrinologia pediátrica', 'DM1, puberdade, crescimento e tireoide', [
        'endocrinologia', 'diabetes mellitus tipo 1', 'cetoacidose diabética', 'puberdade', 'puberdade precoce', 'idade óssea',
        'hipotireoidismo congênito', 'tireoide',
      ]),
      s('urgped', 'Urgências pediátricas', 'Convulsões, choque, desidratação, PCR', [
        'emergência pediátrica', 'urgência', 'emergência', 'convulsão febril', 'crise convulsiva', 'estado de mal epiléptico',
        'choque', 'parada cardiorrespiratória', 'corpo estranho', 'intoxicação',
      ]),
      s('imunizped', 'Imunizações', 'Calendário vacinal, contraindicações e situações especiais', [
        'imunização', 'imunizações', 'vacinação', 'vacina', 'vacinas', 'calendário vacinal', 'PNI',
      ]),
    ],
  },
  {
    id: 'go',
    name: 'Ginecologia e Obstetrícia',
    module: 'Ginecologia e Obstetrícia',
    subareas: [
      s('prenatal', 'Pré-natal', 'Consultas, exames, estratificação de risco', [
        'pré-natal', 'assistência pré-natal', 'exames do pré-natal', 'estratificação de risco', 'gestação de alto risco',
        'diabetes gestacional', 'transmissão vertical', 'toxoplasmose', 'sífilis na gestação',
      ]),
      s('obstetricia', 'Obstetrícia', 'Fisiologia da gestação e assistência ao parto', [
        'fisiologia da gestação', 'modificações gravídicas', 'abortamento', 'gravidez ectópica',
        'doença trofoblástica gestacional', 'gemelaridade', 'rotura prematura de membranas', 'trabalho de parto prematuro',
        'hiperêmese gravídica', 'pós-datismo', 'gestação prolongada', 'isoimunização',
      ], ['obstetrícia', 'gestação', 'Obstetrícia']),
      s('hipertensivas', 'Síndromes hipertensivas', 'Pré-eclâmpsia, eclâmpsia e HELLP', [
        'pré-eclâmpsia', 'eclâmpsia', 'síndrome HELLP', 'HELLP', 'hipertensão gestacional', 'sulfato de magnésio',
        'síndromes hipertensivas da gestação', 'doença hipertensiva específica da gestação',
      ]),
      s('hemorragias', 'Hemorragias obstétricas', 'Placenta prévia, DPP, atonia uterina', [
        'hemorragia obstétrica', 'hemorragias obstétricas', 'placenta prévia', 'descolamento prematuro de placenta', 'DPP',
        'atonia uterina', 'hemorragia pós-parto', 'acretismo placentário', 'rotura uterina', 'vasa prévia',
      ]),
      s('parto', 'Trabalho de parto', 'Partograma, distocias e assistência ao parto', [
        'trabalho de parto', 'parto', 'partograma', 'distocia', 'distocias', 'distocia de ombro', 'assistência ao parto',
        'indução do parto', 'cesárea', 'parto vaginal', 'mecanismo de parto', 'fórcipe',
      ]),
      s('puerperio', 'Puerpério', 'Infecção puerperal, hemorragia, amamentação', [
        'puerpério', 'infecção puerperal', 'endometrite', 'aleitamento materno', 'mastite', 'depressão pós-parto',
      ]),
      s('fetal', 'Medicina fetal', 'Crescimento fetal, sofrimento fetal, restrição de crescimento', [
        'medicina fetal', 'vitalidade fetal', 'sofrimento fetal', 'restrição de crescimento fetal', 'cardiotocografia',
        'dopplervelocimetria', 'ultrassonografia obstétrica', 'perfil biofísico fetal', 'aloimunização', 'malformações',
      ]),
      s('endocgin', 'Ginecologia endócrina', 'SOP, amenorreia, climatério e menopausa', [
        'ginecologia endócrina', 'síndrome dos ovários policísticos', 'SOP', 'amenorreia', 'climatério', 'menopausa',
        'terapia hormonal', 'sangramento uterino anormal', 'hiperprolactinemia', 'puberdade', 'dismenorreia', 'endometriose',
        'mioma uterino', 'miomatose uterina', 'ciclo menstrual',
      ]),
      s('infecgin', 'Infecções ginecológicas', 'Vulvovaginites, DIP, ISTs', [
        'infecções ginecológicas', 'vulvovaginite', 'vulvovaginites', 'vaginose bacteriana', 'candidíase', 'tricomoníase',
        'corrimento vaginal', 'doença inflamatória pélvica', 'DIP', 'IST', 'infecções sexualmente transmissíveis', 'sífilis',
        'úlcera genital', 'cervicite',
      ]),
      s('oncogin', 'Oncologia ginecológica', 'HPV, câncer de colo uterino, ovário e endométrio', [
        'oncologia ginecológica', 'HPV', 'câncer de colo uterino', 'câncer do colo do útero', 'colposcopia', 'citologia oncótica',
        'rastreamento do câncer de colo', 'câncer de ovário', 'massa anexial', 'câncer de endométrio', 'sangramento pós-menopausa',
        'câncer de mama', 'mastologia', 'nódulo mamário', 'lesão intraepitelial',
      ]),
      s('planejamento', 'Planejamento familiar', 'Contracepção, métodos hormonais e DIU', [
        'planejamento familiar', 'planejamento reprodutivo', 'contracepção', 'anticoncepção', 'contracepção de emergência',
        'métodos hormonais', 'anticoncepcional', 'DIU', 'critérios de elegibilidade', 'laqueadura',
      ]),
      s('infertilidade', 'Infertilidade', 'Investigação e causas de infertilidade', ['infertilidade', 'reprodução assistida', 'infertilidade conjugal']),
    ],
  },
  {
    id: 'preventiva',
    name: 'Medicina Preventiva e Saúde Coletiva',
    module: 'Saúde Coletiva',
    subareas: [
      s('epidemio', 'Epidemiologia', 'Incidência, prevalência, risco relativo, odds ratio', [
        'epidemiologia', 'incidência', 'prevalência', 'risco relativo', 'odds ratio', 'risco atribuível', 'indicadores de saúde',
        'mortalidade', 'coeficiente de mortalidade', 'transição epidemiológica', 'transição demográfica',
      ]),
      s('bioestat', 'Bioestatística', 'Sensibilidade, especificidade, VPP, VPN', [
        'bioestatística', 'sensibilidade', 'especificidade', 'valor preditivo positivo', 'valor preditivo negativo', 'VPP', 'VPN',
        'testes diagnósticos', 'curva ROC', 'razão de verossimilhança', 'estatística', 'intervalo de confiança', 'valor de p',
      ]),
      s('mbe', 'Medicina baseada em evidências', 'ECR, metanálise, revisão sistemática, vieses', [
        'medicina baseada em evidências', 'ensaio clínico randomizado', 'ensaio clínico', 'metanálise', 'revisão sistemática',
        'viés', 'vieses', 'desenhos de estudo', 'estudo de coorte', 'estudo caso-controle', 'estudo transversal', 'estudo ecológico',
        'NNT', 'níveis de evidência',
      ]),
      s('sus', 'SUS', 'Princípios, diretrizes e organização', [
        'SUS', 'princípios do SUS', 'diretrizes do SUS', 'equidade', 'integralidade', 'universalidade', 'controle social',
        'legislação', 'lei 8.080', 'lei 8.142', 'financiamento do SUS', 'regionalização', 'redes de atenção à saúde', 'saúde pública',
        'políticas de saúde',
      ]),
      s('aps', 'Atenção Primária', 'ESF, territorialização, longitudinalidade', [
        'atenção primária', 'APS', 'atenção básica', 'atributos da APS', 'longitudinalidade', 'territorialização',
        'coordenação do cuidado', 'acesso', 'ESF', 'estratégia saúde da família', 'prevenção quaternária', 'níveis de prevenção',
        'prevenção', 'NASF',
      ]),
      s('familia', 'Saúde da família', 'Abordagem familiar e comunitária', [
        'saúde da família', 'medicina de família', 'medicina de família e comunidade', 'abordagem familiar', 'genograma',
        'ecomapa', 'ciclo de vida familiar', 'método clínico centrado na pessoa', 'visita domiciliar', 'agente comunitário de saúde',
        'saúde indígena',
      ]),
      s('vigilancia', 'Vigilância epidemiológica', 'Notificação compulsória, surtos e epidemias', [
        'vigilância epidemiológica', 'vigilância em saúde', 'notificação compulsória', 'surto', 'surtos', 'epidemia', 'epidemias',
        'investigação de surto', 'vigilância sanitária', 'declaração de óbito',
      ]),
      s('imuniz', 'Imunização', 'Programas e calendários vacinais', [
        'imunização', 'vacinação', 'calendário vacinal', 'PNI', 'programa nacional de imunizações', 'vacina', 'vacinas',
      ]),
      s('trabalhador', 'Saúde do trabalhador', 'Acidentes, doenças ocupacionais e prevenção', [
        'saúde do trabalhador', 'acidente de trabalho', 'doença ocupacional', 'doenças ocupacionais', 'CAT', 'LER/DORT',
        'pneumoconiose', 'medicina do trabalho',
      ]),
      s('ambiental', 'Saúde ambiental', 'Saneamento, exposição ambiental e doenças', [
        'saúde ambiental', 'saneamento', 'exposição ambiental', 'agrotóxicos', 'poluição', 'mudanças climáticas',
      ]),
      s('rastreamento', 'Rastreamento', 'Câncer, doenças crônicas e prevenção', [
        'rastreamento', 'rastreio', 'screening', 'mamografia', 'rastreamento de câncer', 'check-up',
      ]),
      s('etica', 'Ética médica', 'Sigilo, responsabilidade, bioética e legislação', [
        'ética médica', 'bioética', 'código de ética médica', 'sigilo médico', 'sigilo', 'autonomia', 'responsabilidade médica',
        'consentimento informado', 'termo de consentimento', 'prontuário', 'atestado médico', 'violência',
      ]),
    ],
  },
  {
    id: 'ortopedia',
    name: 'Ortopedia e Traumatologia',
    subareas: [
      s('traumato', 'Traumatologia', 'Fraturas, luxações e entorses', [
        'traumatologia', 'fratura', 'fraturas', 'luxação', 'luxações', 'entorse', 'entorses', 'fratura de fêmur',
        'fratura de rádio distal', 'imobilização', 'Ortopedia e traumatologia',
      ]),
      s('ortoped', 'Ortopedia pediátrica', 'Displasia do quadril, pé torto, alterações do crescimento', [
        'ortopedia pediátrica', 'displasia do desenvolvimento do quadril', 'displasia do quadril', 'pé torto congênito',
        'doença de Legg-Calvé-Perthes', 'epifisiólise', 'sinovite transitória', 'escoliose',
      ]),
      s('coluna', 'Coluna', 'Lombalgia, cervicalgia, hérnia de disco', [
        'coluna', 'lombalgia', 'dor lombar', 'cervicalgia', 'hérnia de disco', 'lombociatalgia', 'síndrome da cauda equina',
      ]),
      s('articulares', 'Doenças articulares', 'Artrose, artrites e osteoporose', [
        'artrose', 'osteoartrite', 'osteoartrose', 'osteoporose', 'densitometria',
      ]),
      s('osteoart', 'Infecções osteoarticulares', 'Artrite séptica e osteomielite', ['artrite séptica', 'osteomielite']),
      s('esportivas', 'Lesões esportivas', 'Lesões ligamentares, tendíneas e musculares', [
        'lesão ligamentar', 'lesões ligamentares', 'ligamento cruzado anterior', 'lesão de menisco', 'tendinite', 'tendinopatia',
        'lesão muscular', 'medicina esportiva', 'manguito rotador',
      ]),
      s('emergorto', 'Emergências ortopédicas', 'Síndrome compartimental, fraturas expostas', [
        'síndrome compartimental', 'fratura exposta', 'fraturas expostas',
      ]),
    ],
  },
  {
    id: 'outras',
    name: 'Outras especialidades',
    subareas: [
      s('uro', 'Urologia', 'Litíase, HPB, câncer de próstata, retenção urinária', [
        'urologia', 'litíase', 'litíase urinária', 'nefrolitíase', 'cólica renal', 'HPB', 'hiperplasia prostática benigna',
        'câncer de próstata', 'retenção urinária', 'escroto agudo', 'torção testicular', 'criptorquidia', 'Urologia',
      ]),
      s('otorrino', 'Otorrinolaringologia', 'Otites, sinusites, amigdalites, vertigem', [
        'otorrinolaringologia', 'otite', 'otite média aguda', 'otite externa', 'sinusite', 'rinossinusite', 'amigdalite',
        'faringoamigdalite', 'vertigem', 'epistaxe', 'perda auditiva', 'Otorrinolaringologia',
      ]),
      s('oftalmo', 'Oftalmologia', 'Glaucoma, catarata, conjuntivite, urgências oculares', [
        'oftalmologia', 'glaucoma', 'catarata', 'conjuntivite', 'olho vermelho', 'retinopatia', 'retinopatia diabética',
        'urgências oculares', 'trauma ocular', 'Oftalmologia',
      ]),
      s('anestesio', 'Anestesiologia', 'Vias aéreas, analgesia, anestesia e sedação', [
        'anestesiologia', 'anestesia', 'anestésicos locais', 'sedação', 'analgesia', 'bloqueio neuromuscular', 'hipertermia maligna',
      ]),
      s('uti', 'Medicina Intensiva', 'Ventilação mecânica, sepse, monitorização, suporte hemodinâmico', [
        'terapia intensiva', 'medicina intensiva', 'UTI', 'ventilação mecânica', 'monitorização hemodinâmica', 'drogas vasoativas',
        'SDRA', 'síndrome do desconforto respiratório agudo', 'morte encefálica',
      ]),
      s('paliativos', 'Cuidados Paliativos', 'Controle de sintomas, terminalidade e comunicação', [
        'cuidados paliativos', 'terminalidade', 'comunicação de más notícias', 'protocolo SPIKES', 'controle de sintomas',
        'dor oncológica', 'escada analgésica',
      ]),
      s('genetica', 'Genética Médica', 'Síndromes genéticas e aconselhamento genético', [
        'genética', 'genética médica', 'síndromes genéticas', 'aconselhamento genético', 'síndrome de Down', 'trissomia',
        'erros inatos do metabolismo', 'herança',
      ]),
      s('legal', 'Medicina Legal', 'Documentos médicos, perícias e lesões corporais', [
        'medicina legal', 'perícia', 'perícia médica', 'lesão corporal', 'lesões corporais', 'documentos médicos',
        'declaração de óbito', 'atestado de óbito', 'violência sexual',
      ]),
    ],
  },
  {
    id: 'basicas',
    name: 'Ciências Básicas',
    module: 'Ciências Básicas',
    subareas: [
      s('anatomia', 'Anatomia e histologia', 'Anatomia, histologia e embriologia', ['anatomia', 'histologia', 'embriologia']),
      s('fisiologia', 'Fisiologia e bioquímica', 'Fisiologia, fisiopatologia e bioquímica', ['fisiologia', 'fisiopatologia', 'bioquímica']),
      s('farmaco', 'Farmacologia', 'Mecanismos de ação, efeitos adversos e interações', ['farmacologia', 'farmacocinética', 'farmacodinâmica']),
      s('patologia', 'Patologia', 'Patologia geral e especial', ['patologia', 'patologia geral']),
      s('microimuno', 'Microbiologia e imunologia', 'Agentes infecciosos e resposta imune', ['microbiologia', 'imunologia', 'parasitologia']),
      s('genbas', 'Genética', 'Genética básica e molecular', ['genética', 'biologia molecular']),
    ],
  },
];

const y = (id: string, name: string, diferenciais: string, kw: string[]): Sindrome => ({ id, name, diferenciais, kw });

export const SINDROMES: Sindrome[] = [
  y('abdome', 'Abdome agudo', 'Apendicite, colecistite, pancreatite, obstrução, perfuração', [
    'abdome agudo', 'abdome agudo inflamatório', 'abdome agudo obstrutivo', 'abdome agudo perfurativo', 'abdome agudo vascular',
    'apendicite', 'apendicite aguda', 'colecistite aguda', 'pancreatite aguda', 'obstrução intestinal', 'diverticulite', 'bridas',
    'dor abdominal',
  ]),
  y('dortor', 'Dor torácica', 'IAM, angina, TEP, dissecção de aorta', [
    'dor torácica', 'síndrome coronariana aguda', 'IAM', 'infarto agudo do miocárdio', 'angina', 'dissecção de aorta',
    'dissecção aórtica', 'pericardite',
  ]),
  y('dispneia', 'Dispneia', 'Asma, DPOC, IC, pneumonia, TEP', [
    'dispneia', 'asma', 'DPOC', 'insuficiência cardíaca', 'edema agudo de pulmão', 'tromboembolismo pulmonar', 'TEP',
    'pneumonia', 'insuficiência respiratória',
  ]),
  y('cefaleia', 'Cefaleia', 'Enxaqueca, cefaleia tensional, HSA, meningite', ['cefaleia', 'cefaleias', 'enxaqueca', 'hemorragia subaracnóidea']),
  y('foi', 'Febre de origem indeterminada', 'Infecções, neoplasias, doenças autoimunes', [
    'febre de origem indeterminada', 'febre sem sinais localizatórios', 'febre sem foco', 'febre prolongada',
  ]),
  y('edema', 'Síndrome edematosa', 'IC, síndrome nefrótica, cirrose', ['síndrome edematosa', 'edema', 'anasarca', 'ascite']),
  y('ictericia', 'Síndrome ictérica', 'Hepatites, colestase, hemólise', [
    'icterícia', 'síndrome ictérica', 'icterícia neonatal', 'icterícia obstrutiva', 'hiperbilirrubinemia', 'hepatite', 'hepatites virais',
  ]),
  y('anemia', 'Síndrome anêmica', 'Ferropriva, megaloblástica, hemolítica', [
    'anemia', 'anemias', 'anemia ferropriva', 'anemia megaloblástica', 'anemia hemolítica', 'anemia falciforme', 'doença falciforme',
  ]),
  y('hemorragica', 'Síndrome hemorrágica', 'Plaquetopenias, coagulopatias', [
    'síndrome hemorrágica', 'plaquetopenia', 'trombocitopenia', 'púrpura trombocitopênica imune', 'coagulopatia', 'coagulopatias',
    'hemofilia', 'doença de von Willebrand', 'CIVD',
  ]),
  y('convulsiva', 'Síndrome convulsiva', 'Epilepsia, distúrbios metabólicos, lesões estruturais', [
    'convulsão', 'crise convulsiva', 'convulsão febril', 'epilepsia', 'estado de mal epiléptico', 'eclâmpsia',
  ]),
  y('meningea', 'Síndrome meníngea', 'Meningite, hemorragia subaracnóidea', ['meningite', 'meningites', 'síndrome meníngea', 'hemorragia subaracnóidea']),
  y('consumptiva', 'Síndrome consumptiva', 'Neoplasias, tuberculose, doenças crônicas', ['síndrome consumptiva', 'tuberculose', 'emagrecimento']),
  y('diarreica', 'Síndrome diarreica', 'Gastroenterites, DII, má absorção', [
    'diarreia', 'diarreia aguda', 'diarreia crônica', 'gastroenterite', 'doença inflamatória intestinal', 'doença de Crohn',
    'retocolite ulcerativa', 'doença celíaca', 'má absorção', 'desidratação',
  ]),
  y('nefritica', 'Síndrome nefrítica', 'Glomerulonefrites', ['síndrome nefrítica', 'glomerulonefrite', 'glomerulonefrite pós-estreptocócica']),
  y('nefrotica', 'Síndrome nefrótica', 'Glomerulopatias com proteinúria', ['síndrome nefrótica', 'proteinúria', 'glomerulopatia', 'glomerulopatias']),
  y('colestatica', 'Síndrome colestática', 'Obstrução biliar, doenças hepáticas', [
    'colestase', 'síndrome colestática', 'icterícia obstrutiva', 'coledocolitíase', 'colangite', 'atresia biliar',
  ]),
  y('metabolica', 'Síndrome metabólica', 'Obesidade, resistência insulínica, dislipidemia', [
    'síndrome metabólica', 'obesidade', 'resistência insulínica', 'dislipidemia', 'esteatose',
  ]),
  y('choque', 'Choque circulatório', 'Hipovolêmico, cardiogênico, distributivo, obstrutivo', [
    'choque', 'choque séptico', 'choque hemorrágico', 'choque hipovolêmico', 'choque cardiogênico', 'choque anafilático', 'sepse',
  ]),
  y('mental', 'Alteração do estado mental', 'Delirium, demência, encefalopatias', [
    'delirium', 'demência', 'demências', 'encefalopatia', 'encefalopatia hepática', 'rebaixamento do nível de consciência', 'coma',
  ]),
  y('perda', 'Perda ponderal involuntária', 'Neoplasias, endocrinopatias, infecções', ['perda ponderal', 'perda de peso', 'emagrecimento']),
];

// ---------- Classificação ----------

export function norm(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

interface Matcher {
  exact: Set<string>;
  words: string[];
}
const cache = new Map<string[], Matcher>();
function matcher(kw: string[]): Matcher {
  let m = cache.get(kw);
  if (!m) {
    m = {
      exact: new Set(kw.filter((k) => k.startsWith('=')).map((k) => norm(k.slice(1)))),
      words: kw.filter((k) => !k.startsWith('=')).map((k) => ` ${norm(k)} `),
    };
    cache.set(kw, m);
  }
  return m;
}

const GENERIC_TOPOGRAPHY = new Set(['11', '14', '15', '16']);

/** Termos da questão usados na classificação (tags, assunto e especialidade da topografia), já normalizados. */
function terms(q: Question): string[] {
  const list = [...q.tags];
  if (q.topic) list.push(q.topic);
  if (q.topography) {
    // Especialidades amplas ("Pediatria e neonatologia", "Cirurgia geral e aparelho digestivo"…) não dizem o tema.
    const g = findTopographyGroup(q.topography);
    if (g && !GENERIC_TOPOGRAPHY.has(g.id)) list.push(g.name);
  }
  return list.map(norm).filter(Boolean);
}

function hits(kw: string[], t: string[]) {
  const m = matcher(kw);
  return t.some((term) => m.exact.has(term) || m.words.some((w) => ` ${term} `.includes(w)));
}

export interface Classificacao {
  /** Pares grande área → subáreas (uma questão pode cair em mais de uma). "outros" = sem subárea reconhecida. */
  areas: { area: string; subareas: string[] }[];
  sindromes: string[];
}

const memo = new WeakMap<Question, Classificacao>();

export function classify(q: Question): Classificacao {
  const cached = memo.get(q);
  if (cached) return cached;
  const t = terms(q);
  const areas: Classificacao['areas'] = [];
  for (const g of GRANDES_AREAS) {
    let subs = g.subareas.filter((sa) => hits(sa.kw, t)).map((sa) => sa.id);
    if (!subs.length) subs = g.subareas.filter((sa) => sa.fallback && hits(sa.fallback, t)).map((sa) => sa.id);
    if (g.module) {
      // Áreas do banco: a questão entra sempre; sem subárea reconhecida, vai para "Outros temas".
      if (q.module === g.module) areas.push({ area: g.id, subareas: subs.length ? subs : ['outros'] });
    } else if (subs.length) {
      areas.push({ area: g.id, subareas: subs });
    }
  }
  const result = { areas, sindromes: SINDROMES.filter((sy) => hits(sy.kw, t)).map((sy) => sy.id) };
  memo.set(q, result);
  return result;
}

// ---------- Estatísticas ----------

export interface Resposta {
  questionId: string;
  correct: boolean;
}

export interface Placar {
  correct: number;
  total: number;
}

export interface Estatisticas {
  geral: Placar;
  areas: Record<string, Placar>;
  /** chave "area/subarea" */
  subareas: Record<string, Placar>;
  sindromes: Record<string, Placar>;
}

const add = (rec: Record<string, Placar>, key: string, ok: boolean) => {
  rec[key] ??= { correct: 0, total: 0 };
  rec[key].total++;
  if (ok) rec[key].correct++;
};

export function computeStats(respostas: Resposta[], byId: Map<string, Question>): Estatisticas {
  const st: Estatisticas = { geral: { correct: 0, total: 0 }, areas: {}, subareas: {}, sindromes: {} };
  for (const r of respostas) {
    const q = byId.get(r.questionId);
    if (!q || q.annulled) continue;
    st.geral.total++;
    if (r.correct) st.geral.correct++;
    const c = classify(q);
    for (const { area, subareas } of c.areas) {
      add(st.areas, area, r.correct);
      for (const sub of subareas) add(st.subareas, `${area}/${sub}`, r.correct);
    }
    for (const sy of c.sindromes) add(st.sindromes, sy, r.correct);
  }
  return st;
}

/** Quantas questões do banco caem em cada área, subárea e síndrome (mostra o peso do tema nas provas). */
export function bankWeights(questions: Question[]) {
  const w: Estatisticas = { geral: { correct: 0, total: questions.length }, areas: {}, subareas: {}, sindromes: {} };
  for (const q of questions) {
    const c = classify(q);
    for (const { area, subareas } of c.areas) {
      add(w.areas, area, false);
      for (const sub of subareas) add(w.subareas, `${area}/${sub}`, false);
    }
    for (const sy of c.sindromes) add(w.sindromes, sy, false);
  }
  return w;
}

export const perc = (p?: Placar) => (p && p.total ? Math.round((p.correct / p.total) * 100) : 0);

/** Mínimo de questões respondidas para um tema entrar nas recomendações. */
export const MIN_RESPOSTAS = 4;

export interface Foco {
  key: string;
  kind: 'subarea' | 'sindrome';
  name: string;
  area?: string;
  placar: Placar;
  /** Questões deste tema no banco. */
  peso: number;
  prioridade: number;
}

/**
 * Onde focar: temas com acerto baixo e muito cobrados nas provas.
 * Prioridade = (1 − acerto suavizado) × √(peso no banco); o acerto é puxado para 50% quando há
 * poucas respostas, para um tema com 1 erro em 1 questão não virar a maior prioridade.
 */
export function focusList(st: Estatisticas, weights: Estatisticas, limit = 6): Foco[] {
  const list: Foco[] = [];
  const score = (p: Placar, peso: number) => (1 - (p.correct + 1) / (p.total + 2)) * Math.sqrt(peso);
  for (const g of GRANDES_AREAS) {
    for (const sa of g.subareas) {
      const key = `${g.id}/${sa.id}`;
      const p = st.subareas[key];
      if (!p || p.total < MIN_RESPOSTAS) continue;
      const peso = weights.subareas[key]?.total ?? 0;
      list.push({ key, kind: 'subarea', name: sa.name, area: g.name, placar: p, peso, prioridade: score(p, peso) });
    }
  }
  for (const sy of SINDROMES) {
    const p = st.sindromes[sy.id];
    if (!p || p.total < MIN_RESPOSTAS) continue;
    const peso = weights.sindromes[sy.id]?.total ?? 0;
    list.push({ key: `sindrome/${sy.id}`, kind: 'sindrome', name: sy.name, placar: p, peso, prioridade: score(p, peso) });
  }
  return list
    .filter((f) => perc(f.placar) < 70)
    .sort((a, b) => b.prioridade - a.prioridade)
    .slice(0, limit);
}

/** Questões de um tema ("clinica/cardio" ou "sindrome/dispneia"), sem as anuladas. */
export function questionsForTema(questions: Question[], tema: string): Question[] {
  const [area, id] = tema.split('/');
  return questions.filter((q) => {
    if (q.annulled) return false;
    const c = classify(q);
    return area === 'sindrome' ? c.sindromes.includes(id) : c.areas.some((a) => a.area === area && a.subareas.includes(id));
  });
}
