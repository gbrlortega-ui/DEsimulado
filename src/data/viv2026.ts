import { Question } from '../types';

// Grupo VIV 2026 (DF) — residência médica (acesso direto). 100 questões, 4 alternativas.
// Gabarito conferido no gabarito do AjudaMédico; explicações com texto próprio.
export const VIV_2026_QUESTIONS: Question[] = [
  {
    "id": "viv2026-1",
    "module": "Clínica Médica",
    "text": "Paciente, 75 anos, tabagista, apresenta dispneia, tosse produtiva e febre. Ao exame: confuso, FR 32 irpm, PA 85/55 mmHg e ureia 65 mg/dL. A conduta mais adequada baseada no escore CURB-65 é:",
    "options": [
      "Tratamento ambulatorial com amoxicilina e macrolídeo",
      "Observação em pronto-socorro por 24 horas e reavaliação",
      "Internação em enfermaria com antibioticoterapia venosa",
      "Internação em Unidade de Terapia Intensiva"
    ],
    "correctAnswer": 3,
    "explanation": "CURB-65 soma 1 ponto para cada: Confusão mental, Ureia > 50 mg/dL (≥ 7 mmol/L), frequência Respiratória ≥ 30 irpm, pressão arterial Baixa (PAS < 90 ou PAD ≤ 60 mmHg) e idade ≥ 65 anos. O paciente pontua 5 (confuso, ureia 65, FR 32, PA 85/55, 75 anos). Escores de 3 ou mais indicam pneumonia grave, e 4–5 com hipotensão apontam para internação em UTI (o paciente também preenche critérios de gravidade da IDSA/ATS).",
    "commentary": "Ambulatorial (A): reservado ao CURB-65 de 0–1.\n\nObservação por 24 horas (B): é opção para escore 2 em casos selecionados.\n\nEnfermaria (C): indicada para escore 2–3 sem instabilidade; aqui há hipotensão e escore máximo.",
    "reference": "Sociedade Brasileira de Pneumologia e Tisiologia – Recomendações para pneumonia adquirida na comunidade (2018); ATS/IDSA (2019)",
    "tags": [
      "pneumonia adquirida na comunidade",
      "CURB-65",
      "pneumologia"
    ],
    "tip": "CURB-65: 0–1 casa; 2 enfermaria; ≥ 3 grave (4–5: considerar UTI)."
  },
  {
    "id": "viv2026-2",
    "module": "Clínica Médica",
    "text": "O mecanismo de ação dos Inibidores do Cotransportador Sódio-glicose 2 (iSGLT2), como a dapagliflozina, no tratamento do diabetes mellitus tipo 2 é:",
    "options": [
      "Inibição da reabsorção de glicose no túbulo proximal, promovendo glicosúria",
      "Aumento da secreção de insulina dependente de glicose pelas células beta",
      "Redução da produção hepática de glicose através da inibição da gliconeogênese",
      "Aumento da sensibilidade periférica à insulina no músculo e tecido adiposo"
    ],
    "correctAnswer": 0,
    "explanation": "Os inibidores do SGLT2 (dapagliflozina, empagliflozina) bloqueiam o cotransportador sódio-glicose tipo 2 no túbulo contorcido proximal, reduzindo a reabsorção de glicose e promovendo glicosúria (com natriurese), de modo independente da insulina. Além do efeito glicêmico, reduzem eventos cardiovasculares, hospitalização por insuficiência cardíaca e progressão da doença renal.",
    "commentary": "Aumento da secreção de insulina dependente de glicose (B): mecanismo dos agonistas de GLP-1 e inibidores de DPP-4.\n\nRedução da gliconeogênese hepática (C): principal mecanismo da metformina.\n\nAumento da sensibilidade periférica (D): mecanismo das glitazonas (pioglitazona).",
    "reference": "Sociedade Brasileira de Diabetes – Diretriz 2024",
    "tags": [
      "inibidores de SGLT2",
      "diabetes mellitus tipo 2",
      "farmacologia",
      "endocrinologia"
    ],
    "tip": "iSGLT2: glicosúria no túbulo proximal."
  },
  {
    "id": "viv2026-3",
    "module": "Clínica Médica",
    "text": "Sobre o tratamento da Insuficiência Cardíaca com Fração de Ejeção Reduzida (ICFEr), analise as afirmações:\n\nI. Os Inibidores da Enzima Conversora de Angiotensina (IECA) e os betabloqueadores são indicados para todos os pacientes estáveis, visando à redução de mortalidade.\nII. A espironolactona é recomendada para pacientes sintomáticos (NYHA II-IV) com FEVE ≤ 35%, apesar do uso otimizado de IECA e betabloqueador.\nIII. A digoxina é a droga de primeira escolha para redução de mortalidade em pacientes com ritmo sinusal.\n\nDessa forma, é CORRETO afirmar:",
    "options": [
      "Apenas a proposição I está correta",
      "Apenas a proposição II está correta",
      "Apenas as proposições I e II estão corretas",
      "Apenas as proposições I e III estão corretas"
    ],
    "correctAnswer": 2,
    "explanation": "I: IECA (ou BRA/sacubitril-valsartana) e betabloqueadores são indicados a todos os pacientes com ICFEr estáveis para reduzir mortalidade (V). II: a espironolactona é recomendada para sintomáticos (NYHA II–IV) com FEVE ≤ 35%, apesar de IECA e betabloqueador (V). III: a digoxina melhora sintomas e reduz internações, mas não reduz mortalidade (estudo DIG) (F).",
    "commentary": "Apenas I (A) e apenas II (B): ambas as proposições I e II estão corretas.\n\nI e III (D): a digoxina não reduz mortalidade.",
    "reference": "Sociedade Brasileira de Cardiologia – Diretriz Brasileira de Insuficiência Cardíaca (2018) e atualização 2021",
    "tags": [
      "insuficiência cardíaca",
      "ICFEr",
      "espironolactona",
      "digoxina",
      "cardiologia"
    ],
    "tip": "Digoxina na IC: menos internações, sem redução de mortalidade."
  },
  {
    "id": "viv2026-4",
    "module": "Clínica Médica",
    "text": "Paciente, sexo feminino, 35 anos, apresenta quadro súbito de dispneia e dor torácica pleurítica. Encontra-se taquicárdica e hipoxêmica. O escore de Wells indica alta probabilidade para Tromboembolismo Pulmonar (TEP). O exame diagnóstico de escolha é:",
    "options": [
      "Arteriografia pulmonar convencional",
      "Dosagem de D-dímero",
      "Ecocardiograma transtorácico",
      "Angiotomografia computadorizada de artérias pulmonares"
    ],
    "correctAnswer": 3,
    "explanation": "Com alta probabilidade clínica de TEP (Wells alto), não se usa D-dímero; o exame de escolha para confirmação é a angiotomografia computadorizada das artérias pulmonares. Se houver contraindicação (alergia ao contraste, insuficiência renal, gestação), usa-se cintilografia de ventilação/perfusão.",
    "commentary": "Arteriografia convencional (A): é invasiva e foi substituída pela angio-TC.\n\nD-dímero (B): útil para excluir TEP em probabilidade baixa/intermediária; com alta probabilidade não exclui nem confirma.\n\nEcocardiograma (C): avalia disfunção do ventrículo direito e é útil no paciente instável, mas não confirma o diagnóstico no estável.",
    "reference": "ESC 2019 Guidelines on Acute Pulmonary Embolism",
    "tags": [
      "tromboembolismo pulmonar",
      "escore de Wells",
      "angiotomografia",
      "pneumologia"
    ],
    "tip": "TEP com alta probabilidade: angio-TC direto, sem D-dímero."
  },
  {
    "id": "viv2026-5",
    "module": "Clínica Médica",
    "text": "A alteração laboratorial característica da anemia megaloblástica por deficiência de vitamina B12 é:",
    "options": [
      "Normocitose com reticulocitose elevada",
      "Macrocitose (Volume Corpuscular Médio elevado) com neutrófilos hipersegmentados",
      "Microcitose (Volume Corpuscular Médio baixo) com ferritina sérica reduzida",
      "Pancitopenia com blastos circulantes no sangue periférico"
    ],
    "correctAnswer": 1,
    "explanation": "A deficiência de vitamina B12 prejudica a síntese de DNA e causa anemia megaloblástica: macrocitose (VCM elevado, em geral > 100–110 fL), neutrófilos hipersegmentados (≥ 5 lobos), reticulócitos baixos e, frequentemente, LDH e bilirrubina indireta elevadas por eritropoese ineficaz. Pode haver pancitopenia.",
    "commentary": "Normocitose com reticulocitose (A): sugere hemólise ou sangramento agudo.\n\nMicrocitose com ferritina baixa (C): padrão da anemia ferropriva.\n\nPancitopenia com blastos (D): sugere leucemia aguda.",
    "reference": "Harrison – Medicina Interna, 21ª ed.",
    "tags": [
      "anemia megaloblástica",
      "vitamina B12",
      "hematologia"
    ],
    "tip": "Megaloblástica: VCM alto + neutrófilos hipersegmentados."
  },
  {
    "id": "viv2026-6",
    "module": "Clínica Médica",
    "text": "Paciente cirrótico com ascite volumosa apresenta febre, dor abdominal difusa e confusão mental. A paracentese diagnóstica revela líquido ascítico com 600 polimorfonucleares/mm³. A conduta terapêutica imediata é:",
    "options": [
      "Realizar paracentese de alívio total com reposição de albumina",
      "Aguardar o resultado da cultura do líquido ascítico para iniciar antibióticos",
      "Iniciar antibioticoterapia empírica com cefalosporina de terceira geração (ex: Cefotaxima ou Ceftriaxona)",
      "Administrar diuréticos em altas doses para reduzir a ascite"
    ],
    "correctAnswer": 2,
    "explanation": "Cirrótico com ascite, febre, dor abdominal e confusão, com mais de 250 polimorfonucleares/mm³ no líquido ascítico (600): peritonite bacteriana espontânea. Inicia-se imediatamente antibiótico empírico com cefalosporina de 3ª geração (ceftriaxona ou cefotaxima), sem esperar a cultura, associado a albumina (1,5 g/kg no dia 1 e 1 g/kg no dia 3) para prevenir a síndrome hepatorrenal.",
    "commentary": "Paracentese de alívio total (A): na PBE, a paracentese de grande volume aumenta o risco de disfunção renal; o foco é o antibiótico.\n\nAguardar a cultura (B): atrasa o tratamento e aumenta a mortalidade; o diagnóstico é pela contagem de PMN.\n\nDiuréticos em altas doses (D): podem precipitar lesão renal e encefalopatia na PBE.",
    "reference": "EASL Clinical Practice Guidelines for decompensated cirrhosis (2018)",
    "tags": [
      "peritonite bacteriana espontânea",
      "cirrose",
      "ceftriaxona",
      "hepatologia"
    ],
    "tip": "PMN > 250 no líquido ascítico: cefalosporina de 3ª + albumina."
  },
  {
    "id": "viv2026-7",
    "module": "Clínica Médica",
    "text": "Sobre a Doença Renal Crônica (DRC), analise as sentenças:\n\n1. A presença de albuminúria persistente (> 30 mg/24h) é um marcador de lesão renal, mesmo com taxa de filtração glomerular normal.\n2. A anemia na DRC é normocítica e normocrômica, causada principalmente pela deficiência de eritropoetina.\n3. O controle da hiperfosfatemia na DRC avançada envolve restrição dietética e uso de quelantes de fósforo.\n\nConsiderando-se as afirmativas como verdadeiras (V) ou falsas (F), a alternativa CORRETA é:",
    "options": [
      "1-V, 2-V, 3-V",
      "1-V, 2-F, 3-V",
      "1-F, 2-V, 3-V",
      "1-F, 2-V, 3-F"
    ],
    "correctAnswer": 0,
    "explanation": "1: albuminúria persistente (> 30 mg/24 h ou relação albumina/creatinina > 30 mg/g por mais de 3 meses) define doença renal crônica mesmo com TFG normal (V). 2: a anemia da DRC é normocítica e normocrômica, causada principalmente pela deficiência de eritropoetina (V). 3: a hiperfosfatemia na DRC avançada é controlada com restrição de fósforo na dieta, quelantes de fósforo e diálise adequada (V).",
    "commentary": "1-V, 2-F, 3-V (B), 1-F, 2-V, 3-V (C) e 1-F, 2-V, 3-F (D): as três sentenças estão corretas.",
    "reference": "KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of CKD",
    "tags": [
      "doença renal crônica",
      "albuminúria",
      "anemia da doença renal crônica",
      "nefrologia"
    ],
    "tip": "DRC: TFG < 60 ou marcador de lesão (albuminúria) por > 3 meses."
  },
  {
    "id": "viv2026-8",
    "module": "Clínica Médica",
    "text": "Paciente jovem é trazido ao pronto-socorro com rebaixamento do nível de consciência, respiração de Kussmaul e hálito cetônico. Glicemia capilar \"HI\" (acima do limite). A prioridade inicial no manejo da Cetoacidose Diabética, antes da infusão de insulina, é:",
    "options": [
      "Intubação orotraqueal imediata para proteção de via aérea",
      "Administração de bicarbonato de sódio em bolus",
      "Correção da hipocalemia se potássio sérico < 3,3 mEq/L",
      "Expansão volêmica vigorosa com solução salina isotônica"
    ],
    "correctAnswer": 3,
    "explanation": "Na cetoacidose diabética, a primeira medida é a expansão volêmica vigorosa com solução salina isotônica (SF 0,9%, 15–20 mL/kg na primeira hora), que corrige a desidratação, melhora a perfusão renal e já reduz a glicemia. Antes da insulina, também é preciso conferir o potássio: se < 3,3 mEq/L, repõe-se potássio e adia-se a insulina.",
    "commentary": "Intubação imediata (A): só se houver insuficiência respiratória ou Glasgow muito baixo; a respiração de Kussmaul é compensação da acidose.\n\nBicarbonato em bolus (B): reservado para pH < 6,9.\n\nCorrigir a hipocalemia < 3,3 (C): também é medida obrigatória antes da insulina, por isso é aceita aqui; mas a primeira prioridade na sequência é a expansão volêmica.",
    "reference": "Sociedade Brasileira de Diabetes – Diretriz 2024; ADA Consensus on Hyperglycemic Crises (2024)",
    "tags": [
      "cetoacidose diabética",
      "hidratação venosa",
      "potássio",
      "endocrinologia"
    ],
    "alert": "As alternativas C e D descrevem medidas que precedem a insulina. O gabarito oficial é D (expansão volêmica, primeiro passo da sequência); C também é aceita aqui.",
    "alsoAccepted": [
      2
    ],
    "tip": "CAD: soro → potássio (se < 3,3, repor antes) → insulina."
  },
  {
    "id": "viv2026-9",
    "module": "Clínica Médica",
    "text": "A característica da cefaleia que constitui um sinal de alarme (\"red flag\") e indica a necessidade de investigação com neuroimagem é:",
    "options": [
      "Cefaleia pulsátil unilateral associada a fotofobia e fonofobia",
      "Cefaleia de início súbito e intensidade máxima imediata (\"thunderclap headache\")",
      "Cefaleia tipo pressão, bilateral, de leve a moderada intensidade (\"capacete\")",
      "Cefaleia crônica diária estável há muitos anos"
    ],
    "correctAnswer": 1,
    "explanation": "Cefaleia súbita, que atinge intensidade máxima em menos de 1 minuto (em trovoada, thunderclap), é sinal de alarme para hemorragia subaracnóidea e outras causas graves (dissecção arterial, síndrome de vasoconstrição cerebral reversível, trombose venosa), exigindo TC de crânio imediata e, se normal, punção lombar ou angio-TC.",
    "commentary": "Pulsátil unilateral com foto e fonofobia (A): características de migrânea.\n\nEm pressão, bilateral, leve a moderada (C): cefaleia tipo tensional.\n\nCrônica diária estável há anos (D): padrão estável e antigo, sem alarme.",
    "reference": "Sociedade Brasileira de Cefaleia; SNNOOP10 red flags (Do TP et al., Neurology 2019)",
    "tags": [
      "cefaleia",
      "sinais de alarme",
      "hemorragia subaracnóidea",
      "neurologia"
    ],
    "tip": "Pior cefaleia da vida, súbita: TC já (pensar em HSA)."
  },
  {
    "id": "viv2026-10",
    "module": "Clínica Médica",
    "text": "Paciente, sexo masculino, 50 anos, etilista, apresenta dor epigástrica intensa irradiada para o dorso, náuseas e vômitos. Amilase e lipase elevadas (3x o normal). O pilar fundamental do tratamento inicial da Pancreatite Aguda é:",
    "options": [
      "Reposição volêmica agressiva precoce",
      "Antibioticoterapia profilática com carbapenêmicos",
      "Nutrição parenteral total imediata",
      "Realização de Colangiopancreatografia Retrógrada Endoscópica (CPRE) de urgência em todos os casos"
    ],
    "correctAnswer": 0,
    "explanation": "O pilar do tratamento inicial da pancreatite aguda é a reposição volêmica precoce com cristaloide (preferencialmente Ringer lactato), guiada por metas de perfusão, junto com analgesia e dieta oral precoce. Estudos recentes (WATERFALL, 2022) mostraram que a hidratação deve ser moderada e guiada, pois a reposição excessiva aumenta a sobrecarga volêmica sem benefício.",
    "commentary": "Antibiótico profilático com carbapenêmico (B): não é indicado, nem na necrose estéril.\n\nNutrição parenteral imediata (C): a via oral ou enteral precoce é preferível.\n\nCPRE de urgência em todos (D): só na pancreatite biliar com colangite ou obstrução persistente.",
    "reference": "ACG Guideline: Management of Acute Pancreatitis (2024); de-Madaria E et al., WATERFALL, NEJM 2022",
    "tags": [
      "pancreatite aguda",
      "ressuscitação volêmica",
      "gastroenterologia"
    ],
    "alert": "O termo “agressiva” está desatualizado: após o estudo WATERFALL, recomenda-se reposição precoce porém moderada e guiada por metas. A alternativa A continua sendo a melhor resposta.",
    "tip": "Pancreatite: volume precoce e guiado, dieta precoce, sem antibiótico profilático."
  },
  {
    "id": "viv2026-11",
    "module": "Clínica Médica",
    "text": "Paciente, sexo masculino, 62 anos, hipertenso, apresenta quadro súbito de hemiparesia à direita e afasia. A tomografia de crânio realizada 3 horas após o início dos sintomas não evidencia hemorragia ou lesão isquêmica aguda estabelecida. A conduta CORRETA é:",
    "options": [
      "Realizar ressonância magnética de crânio para confirmar isquemia antes de tratar",
      "Administrar AAS 300 mg e clopidogrel imediatamente",
      "Prescrever heparina de baixo peso molecular em dose plena",
      "Iniciar trombólise intravenosa com alteplase (rt-PA)"
    ],
    "correctAnswer": 3,
    "explanation": "Déficit neurológico focal súbito (hemiparesia direita e afasia) com 3 horas de evolução e TC sem hemorragia: AVC isquêmico dentro da janela de trombólise (até 4h30). Sem contraindicações, a conduta é alteplase IV 0,9 mg/kg (máximo 90 mg), com PA < 185/110 mmHg. Afasia com hemiparesia sugere oclusão de grande vaso, devendo-se também avaliar trombectomia (angio-TC).",
    "commentary": "RM antes de tratar (A): a TC sem sangramento basta; a RM atrasaria a trombólise (tempo é cérebro).\n\nAAS + clopidogrel imediatamente (B): a dupla antiagregação é para AIT ou AVC menor (NIHSS ≤ 3), não para déficit incapacitante elegível à trombólise; e antiagregante deve esperar 24 h após trombólise.\n\nHeparina em dose plena (C): não é tratamento agudo do AVC isquêmico.",
    "reference": "AHA/ASA Guidelines for the Early Management of Acute Ischemic Stroke (2019); Sociedade Brasileira de Doenças Cerebrovasculares",
    "tags": [
      "AVC isquêmico",
      "trombólise",
      "alteplase",
      "neurologia"
    ],
    "tip": "AVC em até 4h30 com TC sem sangramento: alteplase."
  },
  {
    "id": "viv2026-12",
    "module": "Clínica Médica",
    "text": "A causa mais comum de hiponatremia euvolêmica na prática clínica, frequentemente associada a neoplasias ou doenças do sistema nervoso central, é:",
    "options": [
      "Insuficiência adrenal primária",
      "Síndrome da Secreção Inapropriada do Hormônio Antidiurético (SIADH)",
      "Uso de diuréticos tiazídicos",
      "Polidipsia psicogênica"
    ],
    "correctAnswer": 1,
    "explanation": "A síndrome da secreção inapropriada de ADH é a causa mais comum de hiponatremia euvolêmica. Associa-se a neoplasias (especialmente carcinoma de pequenas células de pulmão), doenças do SNC (AVC, meningite, trauma), doenças pulmonares, fármacos (ISRS, carbamazepina, ciclofosfamida) e dor/pós-operatório. Laboratorialmente: hiponatremia hipotônica, urina inapropriadamente concentrada (> 100 mOsm/kg) e sódio urinário > 30–40 mEq/L.",
    "commentary": "Insuficiência adrenal primária (A): cursa com hipovolemia (perda de sódio por falta de aldosterona).\n\nDiuréticos tiazídicos (C): causa frequente, mas classicamente associada a hipovolemia (ou euvolemia aparente), não a neoplasias e doenças do SNC.\n\nPolidipsia psicogênica (D): causa euvolêmica, mas com urina diluída (< 100 mOsm/kg) e bem menos frequente.",
    "reference": "European Clinical Practice Guideline on Hyponatraemia (2014)",
    "tags": [
      "hiponatremia",
      "SIADH",
      "distúrbios hidroeletrolíticos",
      "nefrologia"
    ],
    "tip": "Hiponatremia euvolêmica com urina concentrada: SIADH."
  },
  {
    "id": "viv2026-13",
    "module": "Clínica Médica",
    "text": "Sobre a Doença Pulmonar Obstrutiva Crônica (DPOC), analise as afirmações:\n\nI. O diagnóstico é confirmado pela espirometria que demonstra obstrução ao fluxo aéreo não totalmente reversível (relação VEF1/CVF < 0,70 pós-broncodilator).\nII. A cessação do tabagismo é a única intervenção que comprovadamente reduz a taxa de declínio da função pulmonar.\nIII. O uso de corticosteroides inalatórios em monoterapia é a base do tratamento para todos os estágios da doença.\n\nDessa forma, é CORRETO afirmar:",
    "options": [
      "Apenas a proposição I está correta",
      "Apenas a proposição II está correta",
      "Apenas as proposições I e II estão corretas",
      "Todas estão corretas"
    ],
    "correctAnswer": 2,
    "explanation": "I: o diagnóstico de DPOC é confirmado por espirometria com VEF1/CVF < 0,70 pós-broncodilatador (V). II: a cessação do tabagismo é a intervenção comprovada para reduzir o declínio da função pulmonar (Lung Health Study) e a mortalidade (V). III: o corticoide inalatório em monoterapia não é recomendado na DPOC; a base são os broncodilatadores de longa ação (F).",
    "commentary": "Apenas I (A) e apenas II (B): as duas primeiras proposições estão corretas.\n\nTodas (D): corticoide inalatório isolado não é tratamento da DPOC.",
    "reference": "GOLD 2024; Sociedade Brasileira de Pneumologia e Tisiologia",
    "tags": [
      "DPOC",
      "espirometria",
      "cessação do tabagismo",
      "pneumologia"
    ],
    "tip": "DPOC: VEF1/CVF < 0,7 pós-BD; base do tratamento = LAMA/LABA."
  },
  {
    "id": "viv2026-14",
    "module": "Clínica Médica",
    "text": "Paciente com insuficiência renal crônica em hemodiálise apresenta parada cardiorrespiratória. O monitor mostra ritmo de assistolia. A gasometria revela potássio de 8,5 mEq/L. Além das manobras de reanimação cardiopulmonar, a medida medicamentosa prioritária para estabilização de membrana é:",
    "options": [
      "Gluconato de cálcio intravenoso",
      "Bicarbonato de sódio",
      "Insulina regular com glicose",
      "Poliestireno sulfonato de cálcio (Sorcal)"
    ],
    "correctAnswer": 0,
    "explanation": "Parada cardiorrespiratória em paciente dialítico com potássio de 8,5 mEq/L: a hipercalemia é causa reversível (um dos “Hs”). Além da RCP, administra-se gluconato de cálcio (ou cloreto de cálcio) IV para estabilizar a membrana do miocárdio, seguido de medidas que deslocam o potássio para as células (insulina com glicose, bicarbonato na acidose) e de sua remoção (diálise).",
    "commentary": "Bicarbonato de sódio (B): ajuda a deslocar potássio, especialmente com acidose, mas não estabiliza a membrana.\n\nInsulina com glicose (C): desloca o potássio para dentro das células, em 15–30 minutos; não estabiliza a membrana.\n\nPoliestireno sulfonato de cálcio (D): remove potássio lentamente, em horas; não tem papel na parada.",
    "reference": "American Heart Association – ACLS (2020); UK Kidney Association – Hyperkalaemia guideline",
    "tags": [
      "hipercalemia",
      "parada cardiorrespiratória",
      "gluconato de cálcio",
      "nefrologia"
    ],
    "tip": "Hipercalemia: cálcio estabiliza; insulina, β2 e bicarbonato deslocam; resina e diálise removem."
  },
  {
    "id": "viv2026-15",
    "module": "Clínica Médica",
    "text": "O anticorpo mais específico para o diagnóstico de Lúpus Eritematoso Sistêmico (LES) é:",
    "options": [
      "Anti-histona",
      "Fator Antinuclear (FAN)",
      "Anti-Sm (Smith)",
      "Anti-Ro/SSA"
    ],
    "correctAnswer": 2,
    "explanation": "O anti-Sm (Smith) é o autoanticorpo mais específico para lúpus eritematoso sistêmico (> 95–99%), embora pouco sensível (cerca de 20–30%). O anti-DNA de dupla hélice também é muito específico e correlaciona-se com atividade da doença e nefrite.",
    "commentary": "Anti-histona (A): típico do lúpus induzido por fármacos (hidralazina, procainamida, isoniazida).\n\nFAN (B): é muito sensível (triagem), mas pouco específico.\n\nAnti-Ro/SSA (D): associado a síndrome de Sjögren, lúpus cutâneo subagudo e lúpus neonatal (bloqueio cardíaco congênito).",
    "reference": "EULAR/ACR 2019 Classification Criteria for SLE; Sociedade Brasileira de Reumatologia",
    "tags": [
      "lúpus eritematoso sistêmico",
      "anti-Sm",
      "autoanticorpos",
      "reumatologia"
    ],
    "tip": "LES: FAN é o mais sensível; anti-Sm e anti-DNA, os mais específicos."
  },
  {
    "id": "viv2026-16",
    "module": "Clínica Médica",
    "text": "Paciente, sexo masculino, 25 anos apresenta febre alta, faringite exsudativa, linfadenopatia cervical posterior e esplenomegalia. O uso de ampicilina empírica provocou o surgimento de exantema maculopapular (\"rash\"). O diagnóstico provável é:",
    "options": [
      "Amigdalite Estreptocócica",
      "Leucemia Linfoblástica Aguda",
      "Infecção aguda pelo HIV",
      "Mononucleose Infecciosa"
    ],
    "correctAnswer": 3,
    "explanation": "Adulto jovem com febre, faringite exsudativa, linfadenopatia cervical posterior, esplenomegalia e exantema após ampicilina/amoxicilina: mononucleose infecciosa pelo vírus Epstein-Barr. O diagnóstico é apoiado por linfocitose com linfócitos atípicos e sorologia (anticorpos heterófilos ou anti-VCA IgM). O tratamento é sintomático, evitando esportes de contato pelo risco de ruptura esplênica.",
    "commentary": "Amigdalite estreptocócica (A): não explica esplenomegalia e linfonodos cervicais posteriores, nem o exantema com ampicilina.\n\nLeucemia linfoblástica aguda (B): pode ter linfonodos e baço aumentados, mas cursa com citopenias e não com o exantema induzido por ampicilina.\n\nInfecção aguda pelo HIV (C): síndrome mononucleose-símile, mas o exantema após ampicilina é clássico do EBV; deve ser considerada no diagnóstico diferencial.",
    "reference": "Harrison – Medicina Interna, 21ª ed.; Sociedade Brasileira de Infectologia",
    "tags": [
      "mononucleose infecciosa",
      "vírus Epstein-Barr",
      "faringite",
      "infectologia"
    ],
    "tip": "Faringite + esplenomegalia + rash após amoxicilina = mononucleose."
  },
  {
    "id": "viv2026-17",
    "module": "Clínica Médica",
    "text": "Sobre a Hipertensão Arterial Sistêmica, analise as sentenças:\n\n1. O diagnóstico pode ser confirmado pela MAPA (Monitorização Ambulatorial da Pressão Arterial) se houver suspeita de hipertensão do avental branco.\n2. A restrição de sódio na dieta e a perda de peso são medidas não farmacológicas eficazes para redução da pressão arterial.\n3. Os betabloqueadores são a primeira linha de tratamento anti-hipertensivo para prevenção de AVC em pacientes idosos sem outras comorbidades.\n\nConsiderando-se as afirmativas como verdadeiras (V) ou falsas (F), a alternativa CORRETA é:",
    "options": [
      "1-F, 2-V, 3-V",
      "1-V, 2-V, 3-F",
      "1-V, 2-F, 3-V",
      "1-V, 2-V, 3-V"
    ],
    "correctAnswer": 1,
    "explanation": "1: a MAPA (ou MRPA) é recomendada para confirmar o diagnóstico de hipertensão e identificar hipertensão do avental branco ou mascarada (V). 2: restrição de sódio, perda de peso, atividade física, dieta DASH e moderação do álcool reduzem a pressão arterial (V). 3: betabloqueadores não são primeira linha em idosos sem comorbidades; são menos eficazes na prevenção de AVC que as outras classes (tiazídicos, BCC, IECA/BRA) (F).",
    "commentary": "1-F, 2-V, 3-V (A), 1-V, 2-F, 3-V (C) e todas V (D): a MAPA confirma o diagnóstico, as medidas não farmacológicas funcionam e os betabloqueadores não são primeira linha nesse cenário.",
    "reference": "Sociedade Brasileira de Cardiologia – Diretrizes Brasileiras de Hipertensão Arterial (2020/2025)",
    "tags": [
      "hipertensão arterial sistêmica",
      "MAPA",
      "medidas não farmacológicas",
      "cardiologia"
    ],
    "tip": "Betabloqueador não é primeira linha na HAS sem indicação específica."
  },
  {
    "id": "viv2026-18",
    "module": "Clínica Médica",
    "text": "Paciente, 55 anos, diabético, apresenta dor lombar, febre e disúria. Exame de urina com piúria maciça. A tomografia mostra gás no parênquima renal. O diagnóstico e a conduta são:",
    "options": [
      "Abscesso renal; antibióticos e drenagem percutânea",
      "Pielonefrite não complicada; antibiótico oral ambulatorial",
      "Pielonefrite Enfisematosa; antibióticos venosos e drenagem ou nefrectomia de urgência",
      "Cólica nefrética infectada; analgésicos e observação"
    ],
    "correctAnswer": 2,
    "explanation": "Diabético com pielonefrite (febre, dor lombar, piúria) e gás no parênquima renal à TC: pielonefrite enfisematosa, infecção necrosante grave causada por gram-negativos fermentadores de glicose (E. coli, Klebsiella), quase sempre em diabéticos mal controlados ou com obstrução. O tratamento é antibiótico venoso de amplo espectro, controle glicêmico e desobstrução/drenagem percutânea; nefrectomia nos casos extensos ou sem resposta.",
    "commentary": "Abscesso renal (A): coleção líquida delimitada, sem gás difuso no parênquima.\n\nPielonefrite não complicada (B): o gás no parênquima define forma complicada e grave.\n\nCólica nefrética infectada (D): obstrução por cálculo com infecção também é emergência (desobstrução), mas não explica o gás no parênquima.",
    "reference": "EAU Guidelines on Urological Infections (2024); Huang JJ, Tseng CC. Emphysematous pyelonephritis, Arch Intern Med 2000",
    "tags": [
      "pielonefrite enfisematosa",
      "diabetes mellitus",
      "infecção do trato urinário",
      "urologia"
    ],
    "tip": "Diabético + gás no parênquima renal = pielonefrite enfisematosa."
  },
  {
    "id": "viv2026-19",
    "module": "Clínica Médica",
    "text": "O esquema terapêutico de primeira linha para o tratamento da Tuberculose Pulmonar no Brasil (fase intensiva) é:",
    "options": [
      "Rifampicina, Isoniazida, Pirazinamida e Etambutol (RIPE) por 2 meses",
      "Rifampicina e Isoniazida por 6 meses",
      "Rifampicina, Isoniazida e Etambutol por 2 meses",
      "Estreptomicina, Isoniazida e Pirazinamida por 3 meses"
    ],
    "correctAnswer": 0,
    "explanation": "O esquema básico para tuberculose pulmonar em adultos e adolescentes (≥ 10 anos) no Brasil é 2RHZE/4RH: fase intensiva de 2 meses com rifampicina, isoniazida, pirazinamida e etambutol (dose fixa combinada), seguida de fase de manutenção de 4 meses com rifampicina e isoniazida.",
    "commentary": "RH por 6 meses (B): sem a fase intensiva com quatro drogas, há risco de falha e resistência.\n\nRHE por 2 meses (C): falta a pirazinamida, essencial para encurtar o tratamento.\n\nEstreptomicina, isoniazida e pirazinamida (D): não é esquema de primeira linha.",
    "reference": "Ministério da Saúde – Manual de Recomendações para o Controle da Tuberculose no Brasil, 2ª ed. atualizada (2024)",
    "tags": [
      "tuberculose",
      "esquema RIPE",
      "tratamento da tuberculose",
      "infectologia"
    ],
    "tip": "TB: 2RHZE + 4RH."
  },
  {
    "id": "viv2026-20",
    "module": "Clínica Médica",
    "text": "Paciente com fibrilação atrial desenvolve dor abdominal súbita, desproporcional ao exame físico (\"dor maior que o exame\"). Apresenta acidose metabólica e lactato elevado. A principal hipótese diagnóstica é:",
    "options": [
      "Diverticulite Aguda Complicada",
      "Pancreatite Aguda Necrosante",
      "Apendicite Aguda Perfurada",
      "Isquemia Mesentérica Aguda (Embolia)"
    ],
    "correctAnswer": 3,
    "explanation": "Fibrilação atrial, dor abdominal súbita e desproporcional ao exame, com acidose metabólica e lactato elevado: isquemia mesentérica aguda de origem embólica (artéria mesentérica superior). O diagnóstico é por angiotomografia e o tratamento é anticoagulação, revascularização (embolectomia ou endovascular) e ressecção de alças inviáveis.",
    "commentary": "Diverticulite complicada (A): dor em fossa ilíaca esquerda com sinais de peritonite e febre.\n\nPancreatite necrosante (B): dor em barra com enzimas elevadas; não é típica a desproporção com FA.\n\nApendicite perfurada (C): sinais de peritonite em fossa ilíaca direita; o exame é exuberante.",
    "reference": "ESVS Guidelines on Diseases of Mesenteric Arteries and Veins (2017)",
    "tags": [
      "isquemia mesentérica aguda",
      "fibrilação atrial",
      "abdome agudo vascular"
    ],
    "tip": "Dor desproporcional ao exame + FA + lactato alto = isquemia mesentérica."
  },
  {
    "id": "viv2026-21",
    "module": "Pediatria",
    "text": "Lactente de 10 meses com diagnóstico de anemia falciforme (HbSS) chega à emergência com choro intenso e edema doloroso em dorso de mãos e pés. A hipótese diagnóstica e a conduta imediata são:",
    "options": [
      "Osteomielite por Salmonella; antibioticoterapia venosa",
      "Artrite séptica; artrocentese e antibióticos",
      "Síndrome mão-pé (dactilite); hidratação e analgesia",
      "Crise de sequestro esplênico; transfusão de hemácias"
    ],
    "correctAnswer": 2,
    "explanation": "Lactente com anemia falciforme e edema doloroso no dorso de mãos e pés: síndrome mão-pé (dactilite), frequentemente a primeira manifestação vaso-oclusiva da doença, entre 6 meses e 2 anos. Decorre de infartos dos ossos curtos. O tratamento é hidratação e analgesia escalonada (incluindo opioides se necessário), com investigação de infecção se houver febre.",
    "commentary": "Osteomielite por Salmonella (A): é diagnóstico diferencial importante na doença falciforme, mas costuma acometer ossos longos, com febre persistente e sinais focais.\n\nArtrite séptica (B): acomete uma articulação com derrame, febre e limitação; não edema bilateral de mãos e pés.\n\nSequestro esplênico (D): cursa com palidez súbita, queda da hemoglobina e esplenomegalia aguda.",
    "reference": "Ministério da Saúde – Doença falciforme: condutas básicas para tratamento (2012); SBP",
    "tags": [
      "anemia falciforme",
      "dactilite",
      "síndrome mão-pé",
      "hematologia pediátrica"
    ],
    "tip": "Lactente falcêmico com mãos e pés inchados e dolorosos: dactilite."
  },
  {
    "id": "viv2026-22",
    "module": "Pediatria",
    "text": "A fisiopatologia que diferencia a Hemofilia A da Hemofilia B é:",
    "options": [
      "Deficiência do Fator VIII na Hemofilia A e do Fator IX na Hemofilia B",
      "Deficiência do Fator IX na Hemofilia A e do Fator VIII na Hemofilia B",
      "Deficiência do Fator de Von Willebrand na Hemofilia A",
      "Disfunção plaquetária na Hemofilia A e deficiência de fator na B"
    ],
    "correctAnswer": 0,
    "explanation": "Hemofilia A é a deficiência do fator VIII; hemofilia B (doença de Christmas) é a deficiência do fator IX. Ambas são de herança recessiva ligada ao X, com TTPa prolongado, TP e plaquetas normais, e se manifestam por hemartroses e hematomas musculares.",
    "commentary": "Inversão dos fatores (B): a hemofilia A é do fator VIII, não do IX.\n\nDeficiência do fator de von Willebrand (C): define a doença de von Willebrand, não a hemofilia.\n\nDisfunção plaquetária (D): as hemofilias são defeitos de coagulação (fatores), não plaquetários.",
    "reference": "Ministério da Saúde – Manual de Hemofilia (2015); World Federation of Hemophilia Guidelines (2020)",
    "tags": [
      "hemofilia",
      "fator VIII",
      "fator IX",
      "hematologia pediátrica"
    ],
    "tip": "Hemofilia A = fator VIII; B = fator IX."
  },
  {
    "id": "viv2026-23",
    "module": "Pediatria",
    "text": "Sobre a Comunicação Interventricular (CIV), analise as afirmações:\n\nI. É a cardiopatia congênita acianótica mais comum na infância.\nII. O sopro característico é holossistólico, rude, audível na borda esternal esquerda baixa.\nIII. Grandes defeitos não tratados podem evoluir para hipertensão pulmonar fixa (Síndrome de Eisenmenger).\n\nDessa forma, é CORRETO afirmar:",
    "options": [
      "Apenas a proposição I está correta",
      "Apenas a proposição III está correta",
      "Apenas as proposições I e II estão corretas",
      "Todas estão corretas"
    ],
    "correctAnswer": 3,
    "explanation": "I: a comunicação interventricular é a cardiopatia congênita acianótica (e a cardiopatia congênita em geral) mais comum (V). II: o sopro é holossistólico, rude, mais audível na borda esternal esquerda baixa (V). III: defeitos grandes não tratados levam a hiperfluxo pulmonar e, com o tempo, a hipertensão pulmonar fixa com inversão do shunt e cianose — síndrome de Eisenmenger (V).",
    "commentary": "Apenas I (A), apenas III (B) e I e II (C): todas as três proposições estão corretas.",
    "reference": "Sociedade Brasileira de Cardiologia – Cardiopatias congênitas; Nelson – Tratado de Pediatria",
    "tags": [
      "comunicação interventricular",
      "cardiopatias congênitas",
      "síndrome de Eisenmenger",
      "cardiologia pediátrica"
    ],
    "tip": "CIV: holossistólico na BEE baixa; grande e não tratada → Eisenmenger."
  },
  {
    "id": "viv2026-24",
    "module": "Pediatria",
    "text": "Lactente de 5 meses apresenta febre alta sem foco aparente há 48 horas. O exame de urina coletado por cateterismo mostra leucocitúria e nitrito positivo. A conduta inicial é:",
    "options": [
      "Aguardar o resultado da urocultura para iniciar antibióticos",
      "Iniciar antibioticoterapia empírica e solicitar urocultura",
      "Iniciar profilaxia com nitrofurantoína e solicitar ultrassom",
      "Repetir o exame de urina por saco coletor para confirmação"
    ],
    "correctAnswer": 1,
    "explanation": "Lactente febril com urina colhida por cateterismo mostrando leucocitúria e nitrito positivo: forte suspeita de infecção do trato urinário (provável pielonefrite). Coleta-se urocultura (pela mesma via) e inicia-se antibiótico empírico logo em seguida, sem esperar o resultado, ajustando depois pelo antibiograma; o atraso aumenta o risco de cicatrizes renais.",
    "commentary": "Aguardar a cultura (A): retardar o tratamento em lactente febril com urina sugestiva aumenta o risco de dano renal.\n\nProfilaxia com nitrofurantoína (C): não trata a infecção aguda (e não atinge o parênquima renal).\n\nRepetir por saco coletor (D): a coleta por cateterismo é mais confiável; o saco coletor só aumentaria a contaminação.",
    "reference": "Sociedade Brasileira de Pediatria – Infecção do trato urinário (2021)",
    "tags": [
      "infecção do trato urinário",
      "febre sem sinais localizatórios",
      "nefrologia pediátrica"
    ],
    "tip": "ITU febril no lactente: colher cultura e começar antibiótico logo."
  },
  {
    "id": "viv2026-25",
    "module": "Pediatria",
    "text": "O critério clínico obrigatório para o diagnóstico da Doença de Kawasaki clássica é:",
    "options": [
      "Exantema vesicular disseminado",
      "Conjuntivite purulenta bilateral",
      "Febre persistente por pelo menos 5 dias",
      "Linfadenopatia cervical generalizada"
    ],
    "correctAnswer": 2,
    "explanation": "Na doença de Kawasaki clássica, a febre por pelo menos 5 dias é critério obrigatório, associada a pelo menos 4 de 5 critérios: conjuntivite bilateral não exsudativa; alterações de lábios e cavidade oral (fissuras, língua em framboesa); exantema polimorfo; alterações de extremidades (edema, eritema e, depois, descamação periungueal); e linfadenopatia cervical, em geral unilateral, ≥ 1,5 cm.",
    "commentary": "Exantema vesicular (A): o exantema de Kawasaki é polimorfo, não vesicular.\n\nConjuntivite purulenta (B): a conjuntivite é não exsudativa.\n\nLinfadenopatia generalizada (D): a linfadenopatia é cervical, geralmente unilateral.",
    "reference": "McCrindle BW et al. AHA Scientific Statement on Kawasaki Disease (2017); SBP",
    "tags": [
      "doença de Kawasaki",
      "vasculites",
      "cardiologia pediátrica"
    ],
    "tip": "Kawasaki: febre ≥ 5 dias + 4 de 5 critérios (CRASH)."
  },
  {
    "id": "viv2026-26",
    "module": "Pediatria",
    "text": "Menino de 1 ano com testículo direito não palpável na bolsa escrotal ou canal inguinal. A laparoscopia identifica o testículo intra-abdominal. A conduta CORRETA é:",
    "options": [
      "Orquidopexia cirúrgica",
      "Tratamento hormonal com hCG",
      "Observação até a puberdade",
      "Orquiectomia imediata"
    ],
    "correctAnswer": 0,
    "explanation": "Criptorquidia com testículo intra-abdominal identificado na laparoscopia, em menino de 1 ano: a conduta é a orquidopexia, idealmente entre 6 e 18 meses, para preservar a espermatogênese, facilitar o exame (detecção de câncer) e corrigir a hérnia associada. Testículos intra-abdominais altos costumam exigir a técnica de Fowler-Stephens (em um ou dois tempos).",
    "commentary": "hCG (B): o tratamento hormonal tem baixa eficácia e não é recomendado de rotina.\n\nObservar até a puberdade (C): a descida espontânea após 6 meses é rara, e o atraso piora a fertilidade e dificulta a vigilância de neoplasia.\n\nOrquiectomia imediata (D): reservada a testículo atrófico/não viável ou pós-púbere; aqui o testículo foi identificado.",
    "reference": "European Association of Urology – Paediatric Urology Guidelines (2024); AUA Cryptorchidism Guideline",
    "tags": [
      "criptorquidia",
      "orquidopexia",
      "urologia pediátrica"
    ],
    "tip": "Criptorquidia: cirurgia entre 6 e 18 meses; hormônio não."
  },
  {
    "id": "viv2026-27",
    "module": "Pediatria",
    "text": "Sobre a Síndrome Torácica Aguda (STA) na doença falciforme, analise as sentenças:\n\n1. É definida pelo surgimento de um novo infiltrado pulmonar na radiografia de tórax, associado a febre e sintomas respiratórios.\n2. É a principal causa de mortalidade em adolescentes e adultos com anemia falciforme.\n3. O tratamento inclui suporte ventilatório, analgesia, antibióticos e transfusão sanguínea se houver hipóxia grave.\n\nConsiderando-se as afirmativas como verdadeiras (V) ou falsas (F), a alternativa CORRETA é:",
    "options": [
      "1-V, 2-F, 3-V",
      "1-V, 2-V, 3-F",
      "1-F, 2-V, 3-V",
      "1-V, 2-V, 3-V"
    ],
    "correctAnswer": 3,
    "explanation": "1: a síndrome torácica aguda é definida por novo infiltrado pulmonar na radiografia associado a febre e/ou sintomas respiratórios (tosse, dor torácica, taquipneia, hipoxemia) (V). 2: é a principal causa de morte em adolescentes e adultos com doença falciforme e uma das principais causas de internação (V). 3: o tratamento inclui oxigênio/suporte ventilatório, analgesia, espirometria de incentivo, antibiótico (cefalosporina + macrolídeo) e transfusão (simples ou de troca) em hipóxia ou piora (V).",
    "commentary": "1-V, 2-F, 3-V (A), 1-V, 2-V, 3-F (B) e 1-F, 2-V, 3-V (C): as três sentenças estão corretas.",
    "reference": "Ministério da Saúde – Doença falciforme: condutas básicas para tratamento (2012); NHLBI Evidence-Based Management of Sickle Cell Disease (2014)",
    "tags": [
      "síndrome torácica aguda",
      "anemia falciforme",
      "hematologia pediátrica"
    ],
    "tip": "STA: infiltrado novo + febre/sintomas respiratórios → O₂, analgesia, antibiótico, transfusão."
  },
  {
    "id": "viv2026-28",
    "module": "Pediatria",
    "text": "Menino hemofílico A grave de 4 anos sofre queda e evolui com dor, aumento de volume e calor no joelho direito. A conduta prioritária é:",
    "options": [
      "Imobilização gessada por 4 semanas",
      "Reposição imediata de Fator VIII",
      "Punção articular (artrocentese) para alívio",
      "Aplicação de gelo e observação por 24 horas"
    ],
    "correctAnswer": 1,
    "explanation": "Hemartrose em criança com hemofilia A grave: a prioridade é repor imediatamente o fator VIII (concentrado), idealmente nas primeiras horas, para interromper o sangramento e reduzir o dano articular (artropatia hemofílica). Associam-se repouso, gelo, elevação e analgesia sem AINE; fisioterapia após o controle.",
    "commentary": "Imobilização gessada por 4 semanas (A): imobilização prolongada causa rigidez e atrofia; usa-se repouso curto.\n\nArtrocentese de alívio (C): não é rotina e só se considera após reposição do fator, em hemartroses volumosas e tensas.\n\nGelo e observação por 24 horas (D): atrasar o fator agrava o sangramento e a lesão articular.",
    "reference": "Ministério da Saúde – Manual de Hemofilia (2015); WFH Guidelines for the Management of Hemophilia (2020)",
    "tags": [
      "hemofilia",
      "hemartrose",
      "fator VIII",
      "hematologia pediátrica"
    ],
    "tip": "Hemofílico com sangramento: fator primeiro, sempre."
  },
  {
    "id": "viv2026-29",
    "module": "Pediatria",
    "text": "O componente anatômico que determina a gravidade clínica e o grau de cianose na Tetralogia de Fallot é:",
    "options": [
      "A presença de hipertrofia ventricular direita",
      "O tamanho da comunicação interventricular",
      "O grau de obstrução da via de saída do ventrículo direito (estenose pulmonar)",
      "O grau de dextroposição da aorta"
    ],
    "correctAnswer": 2,
    "explanation": "Na tetralogia de Fallot (CIV ampla, cavalgamento da aorta, obstrução da via de saída do VD e hipertrofia do VD), o grau de obstrução da via de saída do ventrículo direito (estenose pulmonar infundibular/valvar) determina quanto sangue é desviado da direita para a esquerda pela CIV e, portanto, a intensidade da cianose e a gravidade clínica.",
    "commentary": "Hipertrofia do VD (A): é consequência da obstrução, não determinante da cianose.\n\nTamanho da CIV (B): a CIV é sempre grande (não restritiva) e não modula a cianose.\n\nGrau de dextroposição da aorta (D): não é o principal determinante da gravidade.",
    "reference": "Nelson – Tratado de Pediatria, 21ª ed.; Sociedade Brasileira de Cardiologia",
    "tags": [
      "tetralogia de Fallot",
      "cardiopatias congênitas cianóticas",
      "cardiologia pediátrica"
    ],
    "tip": "Fallot: mais estenose pulmonar = mais cianose."
  },
  {
    "id": "viv2026-30",
    "module": "Pediatria",
    "text": "Criança de 8 anos apresenta cardite, poliartrite migratória e Coreia de Sydenham após faringite estreptocócica. A profilaxia secundária de escolha é:",
    "options": [
      "Penicilina G Benzatina intramuscular a cada 21 dias",
      "Amoxicilina oral diariamente",
      "Azitromicina oral semanalmente",
      "Eritromicina oral diariamente"
    ],
    "correctAnswer": 0,
    "explanation": "Febre reumática com cardite: a profilaxia secundária de escolha é penicilina G benzatina intramuscular a cada 21 dias (em geral 1.200.000 UI para ≥ 20 kg). A duração depende da cardite: sem cardite, até 21 anos ou 5 anos após o surto; cardite curada ou leve residual, até 25 anos ou 10 anos após o surto; lesão valvar moderada/grave, até 40 anos ou por toda a vida.",
    "commentary": "Amoxicilina oral diária (B) e azitromicina semanal (C): não são esquemas de profilaxia secundária recomendados.\n\nEritromicina oral diária (D): alternativa apenas para alérgicos à penicilina (assim como a sulfadiazina), com menor adesão e eficácia.",
    "reference": "Sociedade Brasileira de Cardiologia – Diretrizes Brasileiras para o Diagnóstico, Tratamento e Prevenção da Febre Reumática (2009)",
    "tags": [
      "febre reumática",
      "profilaxia secundária",
      "penicilina benzatina",
      "cardiologia pediátrica"
    ],
    "tip": "Profilaxia de febre reumática: benzatina a cada 21 dias."
  },
  {
    "id": "viv2026-31",
    "module": "Pediatria",
    "text": "Recém-nascido prematuro apresenta sopro contínuo na região infraclavicular esquerda, pulsos amplos e precórdio hiperdinâmico. A cardiopatia e o tratamento farmacológico inicial são:",
    "options": [
      "Comunicação Interatrial; Furosemida",
      "Persistência do Canal Arterial; Ibuprofeno ou Indometacina",
      "Estenose Pulmonar; Prostaglandina E1",
      "Coarctação da Aorta; Prostaglandina E1"
    ],
    "correctAnswer": 1,
    "explanation": "Prematuro com sopro contínuo (em maquinária) infraclavicular esquerdo, pulsos amplos e precórdio hiperdinâmico: persistência do canal arterial com shunt significativo. O tratamento farmacológico inicial é com inibidores da ciclo-oxigenase — ibuprofeno ou indometacina (ou paracetamol) —, que reduzem as prostaglandinas e favorecem o fechamento do canal.",
    "commentary": "CIA com furosemida (A): a CIA dá sopro sistólico pulmonar com desdobramento fixo de B2, não sopro contínuo.\n\nEstenose pulmonar ou coarctação com prostaglandina (C e D): a prostaglandina E1 mantém o canal aberto em cardiopatias dependentes do canal; e o quadro descrito é de PCA.",
    "reference": "Sociedade Brasileira de Pediatria – Persistência do canal arterial no prematuro; AAP Clinical Report (2016)",
    "tags": [
      "persistência do canal arterial",
      "prematuridade",
      "ibuprofeno",
      "neonatologia"
    ],
    "tip": "PCA no prematuro: ibuprofeno/indometacina fecham; prostaglandina mantém aberto."
  },
  {
    "id": "viv2026-32",
    "module": "Pediatria",
    "text": "A medida profilática fundamental para reduzir a mortalidade por sepse pneumocócica em crianças com anemia falciforme até os 5 anos de idade é:",
    "options": [
      "Penicilina V oral diária (profilaxia antibiótica)",
      "Transfusões sanguíneas mensais programadas",
      "Uso diário de hidroxiureia",
      "Esplenectomia profilática cirúrgica"
    ],
    "correctAnswer": 0,
    "explanation": "Na doença falciforme, a asplenia funcional precoce aumenta muito o risco de sepse por germes encapsulados, sobretudo pneumococo. A profilaxia com penicilina oral (penicilina V) diária, iniciada aos 2–3 meses e mantida até pelo menos 5 anos (alternativa: benzatina a cada 21–28 dias), junto com as vacinas (pneumocócicas conjugada e polissacarídica), reduz drasticamente a mortalidade.",
    "commentary": "Transfusões mensais (B): indicadas para prevenção de AVC em crianças com Doppler transcraniano alterado, não para prevenir sepse.\n\nHidroxiureia (C): reduz crises e síndrome torácica, mas não substitui a profilaxia antibiótica.\n\nEsplenectomia profilática (D): aumentaria o risco de sepse; é reservada ao sequestro esplênico recorrente.",
    "reference": "Ministério da Saúde – Doença falciforme: condutas básicas para tratamento (2012); Gaston MH et al. PROPS study, NEJM 1986",
    "tags": [
      "anemia falciforme",
      "profilaxia antibiótica",
      "penicilina",
      "hematologia pediátrica"
    ],
    "tip": "Falciforme: penicilina profilática dos 3 meses aos 5 anos + vacinas."
  },
  {
    "id": "viv2026-33",
    "module": "Pediatria",
    "text": "Sobre o Refluxo Vesicoureteral primário em crianças, analise as afirmações:\n\nI. Ocorre devido a uma falha no mecanismo valvular da junção ureterovesical, permitindo o retorno da urina da bexiga para o trato superior.\nII. O diagnóstico é confirmado pela Uretrocistografia Miccional (UCM).\nIII. A maioria dos casos de baixo grau (I e II) tende à resolução espontânea com o crescimento da criança.\n\nDessa forma, é CORRETO afirmar:",
    "options": [
      "Apenas a proposição I está correta",
      "Apenas a proposição III está correta",
      "Apenas as proposições I e II estão corretas",
      "Todas estão corretas"
    ],
    "correctAnswer": 3,
    "explanation": "I: o refluxo vesicoureteral primário decorre de falha no mecanismo valvular da junção ureterovesical (túnel submucoso curto) (V). II: o diagnóstico e a graduação (I a V) são feitos pela uretrocistografia miccional (V). III: os graus baixos (I e II) tendem a resolver espontaneamente com o crescimento, pelo alongamento do túnel intravesical (V).",
    "commentary": "Apenas I (A), apenas III (B) e I e II (C): as três proposições estão corretas.",
    "reference": "Sociedade Brasileira de Pediatria/SBU – Refluxo vesicoureteral; AUA Guideline on Vesicoureteral Reflux (2017)",
    "tags": [
      "refluxo vesicoureteral",
      "uretrocistografia miccional",
      "urologia pediátrica"
    ],
    "tip": "RVU: UCM diagnostica; graus baixos resolvem sozinhos."
  },
  {
    "id": "viv2026-34",
    "module": "Pediatria",
    "text": "Adolescente de 14 anos é avaliado por hipertensão arterial sistêmica. O exame físico revela pulsos femorais diminuídos e atrasados em relação aos radiais. O diagnóstico correto é:",
    "options": [
      "Feocromocitoma",
      "Estenose Aórtica",
      "Coarctação da Aorta",
      "Hipertensão Renovascular"
    ],
    "correctAnswer": 2,
    "explanation": "Adolescente hipertenso com pulsos femorais diminuídos e atrasados em relação aos radiais (atraso radiofemoral): coarctação da aorta. A pressão nos membros superiores é maior que nos inferiores, e podem surgir sopro interescapular e, na radiografia, erosões costais (sinal de Roesler) e sinal do “3”. O tratamento é angioplastia com stent ou cirurgia.",
    "commentary": "Feocromocitoma (A): hipertensão paroxística com cefaleia, sudorese e palpitações; pulsos femorais normais.\n\nEstenose aórtica (B): sopro sistólico ejetivo e pulso parvus et tardus difuso, não restrito aos membros inferiores.\n\nHipertensão renovascular (D): causa frequente de hipertensão secundária na criança, mas não explica a diferença de pulsos.",
    "reference": "Sociedade Brasileira de Cardiologia; ESC Guidelines for adult congenital heart disease (2020)",
    "tags": [
      "coarctação da aorta",
      "hipertensão secundária",
      "cardiologia pediátrica"
    ],
    "tip": "Hipertensão com pulso femoral fraco e atrasado: coarctação."
  },
  {
    "id": "viv2026-35",
    "module": "Pediatria",
    "text": "O teste laboratorial que diferencia a Doença de Von Willebrand da Hemofilia A leve é:",
    "options": [
      "Atividade do Fator de Von Willebrand (Ristocetina)",
      "Tempo de Tromboplastina Parcial Ativado (TTPa)",
      "Tempo de Sangramento",
      "Contagem de plaquetas"
    ],
    "correctAnswer": 0,
    "explanation": "A doença de von Willebrand e a hemofilia A leve podem ter TTPa prolongado e fator VIII baixo, porque o fator de von Willebrand protege o fator VIII. O exame que as diferencia é a dosagem do fator de von Willebrand — antígeno (vWF:Ag) e atividade (cofator de ristocetina, vWF:RCo) —, reduzidos na doença de von Willebrand e normais na hemofilia.",
    "commentary": "TTPa (B): pode estar prolongado nas duas condições.\n\nTempo de sangramento (C): exame pouco reprodutível e não específico.\n\nContagem de plaquetas (D): normal nas duas (exceto no tipo 2B de von Willebrand).",
    "reference": "ASH/ISTH/NHF/WFH 2021 Guidelines on the Diagnosis of von Willebrand Disease",
    "tags": [
      "doença de von Willebrand",
      "hemofilia",
      "coagulograma",
      "hematologia pediátrica"
    ],
    "tip": "vWD × hemofilia A leve: dosar fator de von Willebrand (antígeno e ristocetina)."
  },
  {
    "id": "viv2026-36",
    "module": "Pediatria",
    "text": "Recém-nascido apresenta meato uretral ventral, curvatura peniana ventral (chordee) e prepúcio dorsal excessivo. O diagnóstico e a contraindicação associada são:",
    "options": [
      "Epispádia; contraindicação à cateterização vesical",
      "Hipospádia; contraindicação à circuncisão (postectomia)",
      "Fimose fisiológica; contraindicação à retração prepucial",
      "Válvula de uretra posterior; contraindicação à cistografia"
    ],
    "correctAnswer": 1,
    "explanation": "Meato uretral em posição ventral, curvatura peniana ventral (chordee) e prepúcio em capuz dorsal: hipospádia. A circuncisão (postectomia) é contraindicada, porque o prepúcio é usado na correção cirúrgica (uretroplastia), idealmente entre 6 e 18 meses.",
    "commentary": "Epispádia (A): meato no dorso do pênis, associada a extrofia vesical.\n\nFimose fisiológica (C): prepúcio não retrátil, sem alteração do meato.\n\nVálvula de uretra posterior (D): obstrução uretral em meninos, com bexiga distendida e jato fraco; diagnosticada pela uretrocistografia miccional.",
    "reference": "European Association of Urology – Paediatric Urology Guidelines (2024)",
    "tags": [
      "hipospádia",
      "circuncisão",
      "urologia pediátrica",
      "neonatologia"
    ],
    "tip": "Hipospádia: não circuncidar — o prepúcio é usado na correção."
  },
  {
    "id": "viv2026-37",
    "module": "Pediatria",
    "text": "Sobre os sopros cardíacos inocentes (funcionais) na infância, analise as sentenças:\n\n1. São tipicamente sistólicos, de curta duração, baixa intensidade e variam com a posição ou esforço.\n2. O Sopro de Still é um exemplo comum, sendo vibratório e musical, audível na borda esternal esquerda média.\n3. A presença de sintomas cardíacos, como cianose ou intolerância aos esforços, não exclui a natureza inocente do sopro.\n\nConsiderando-se as afirmativas como verdadeiras (V) ou falsas (F), a alternativa CORRETA é:",
    "options": [
      "1-V, 2-V, 3-V",
      "1-V, 2-F, 3-V",
      "1-F, 2-V, 3-V",
      "1-V, 2-V, 3-F"
    ],
    "correctAnswer": 3,
    "explanation": "1: sopros inocentes são sistólicos (exceto o zumbido venoso, contínuo), curtos, de baixa intensidade (≤ 2+/6+), sem frêmito, e variam com posição e esforço (V). 2: o sopro de Still é o mais comum, vibratório/musical, na borda esternal esquerda média ou baixa (V). 3: sintomas cardíacos (cianose, intolerância aos esforços, baixo ganho ponderal, síncope) sugerem cardiopatia e excluem a hipótese de sopro inocente (F).",
    "commentary": "Todas V (A), 1-V, 2-F, 3-V (B) e 1-F, 2-V, 3-V (C): sintomas cardíacos afastam a natureza inocente.",
    "reference": "Sociedade Brasileira de Pediatria – Departamento de Cardiologia; Nelson – Tratado de Pediatria",
    "tags": [
      "sopro inocente",
      "sopro de Still",
      "cardiologia pediátrica"
    ],
    "tip": "Sopro com sintomas, frêmito, diastólico ou ≥ 3+: não é inocente."
  },
  {
    "id": "viv2026-38",
    "module": "Pediatria",
    "text": "Criança de 2 anos com anemia falciforme apresenta palidez súbita, letargia e aumento agudo do baço palpável a 4 cm do rebordo costal. A hemoglobina caiu de 8 para 4 g/dL. A conduta CORRETA é:",
    "options": [
      "Esplenectomia de urgência",
      "Transfusão imediata de concentrado de hemácias",
      "Hidratação venosa e analgesia apenas",
      "Antibioticoterapia para sepse"
    ],
    "correctAnswer": 1,
    "explanation": "Criança falcêmica com palidez súbita, letargia, esplenomegalia aguda e queda de hemoglobina de 8 para 4 g/dL: crise de sequestro esplênico agudo, com risco de choque hipovolêmico e morte. A conduta é transfusão imediata de concentrado de hemácias (em alíquotas, pois o baço devolve parte do sangue sequestrado) e suporte volêmico. Após episódios recorrentes, considera-se esplenectomia.",
    "commentary": "Esplenectomia de urgência (A): não é tratamento da crise aguda; é profilaxia de recorrências.\n\nHidratação e analgesia apenas (C): insuficiente para anemia aguda grave com sinais de choque.\n\nAntibiótico para sepse (D): a febre deve ser tratada se presente, mas o quadro descrito é de sequestro.",
    "reference": "Ministério da Saúde – Doença falciforme: condutas básicas para tratamento (2012)",
    "tags": [
      "sequestro esplênico",
      "anemia falciforme",
      "transfusão",
      "hematologia pediátrica"
    ],
    "tip": "Sequestro esplênico: baço cresce, Hb despenca → transfundir."
  },
  {
    "id": "viv2026-39",
    "module": "Pediatria",
    "text": "A cardiopatia congênita cianótica em que a aorta se origina do ventrículo direito e a artéria pulmonar do ventrículo esquerdo, criando circulações paralelas incompatíveis com a vida sem um shunt, é:",
    "options": [
      "Atresia Tricúspide",
      "Tetralogia de Fallot",
      "Transposição das Grandes Artérias (TGA)",
      "Truncus Arteriosus"
    ],
    "correctAnswer": 2,
    "explanation": "Na transposição das grandes artérias, a aorta nasce do ventrículo direito e a artéria pulmonar do ventrículo esquerdo, formando circulações em paralelo. A sobrevida depende de mistura entre elas (forame oval, canal arterial ou CIV). É a cardiopatia cianótica mais comum no recém-nascido; o tratamento inicial é prostaglandina E1 e, se necessário, atriosseptostomia (Rashkind), seguida da cirurgia de Jatene.",
    "commentary": "Atresia tricúspide (A): ausência da valva tricúspide, com hipoplasia do VD e dependência de CIA e CIV.\n\nTetralogia de Fallot (B): CIV, estenose pulmonar, aorta cavalgada e hipertrofia de VD; as artérias estão na posição normal.\n\nTruncus arteriosus (D): um único tronco arterial que dá origem à aorta e às pulmonares.",
    "reference": "Nelson – Tratado de Pediatria, 21ª ed.; Sociedade Brasileira de Cardiologia",
    "tags": [
      "transposição das grandes artérias",
      "cardiopatias congênitas cianóticas",
      "cardiologia pediátrica"
    ],
    "tip": "TGA: circulações paralelas; prostaglandina e Rashkind até a cirurgia de Jatene."
  },
  {
    "id": "viv2026-40",
    "module": "Pediatria",
    "text": "Criança com prótese valvar cardíaca irá realizar um procedimento dentário com manipulação gengival. A recomendação de profilaxia para endocardite infecciosa é:",
    "options": [
      "Administrar Amoxicilina 50 mg/kg via oral 1 hora antes do procedimento",
      "Não há indicação de profilaxia antibiótica segundo as diretrizes atuais",
      "Administrar Clindamicina 20 mg/kg via oral após o procedimento",
      "Administrar Penicilina Benzatina intramuscular 24 horas antes"
    ],
    "correctAnswer": 0,
    "explanation": "Portadores de prótese valvar estão no grupo de maior risco para endocardite infecciosa e devem receber profilaxia antes de procedimentos dentários com manipulação gengival ou da região periapical, ou perfuração da mucosa oral. Em crianças, o esquema é amoxicilina 50 mg/kg via oral (máximo 2 g) 30 a 60 minutos antes do procedimento. Em alérgicos, usa-se azitromicina, claritromicina ou doxiciclina (a clindamicina não é mais recomendada pela AHA 2021).",
    "commentary": "Sem indicação de profilaxia (B): pacientes com prótese valvar são justamente um dos grupos com indicação.\n\nClindamicina após o procedimento (C): a profilaxia é dada antes; e a clindamicina deixou de ser recomendada.\n\nPenicilina benzatina 24 horas antes (D): não é o esquema recomendado.",
    "reference": "AHA Scientific Statement – Prevention of Viridans Group Streptococcal Infective Endocarditis (2021); Sociedade Brasileira de Cardiologia",
    "tags": [
      "endocardite infecciosa",
      "profilaxia antibiótica",
      "prótese valvar",
      "cardiologia pediátrica"
    ],
    "tip": "Profilaxia de endocardite: amoxicilina 50 mg/kg (2 g no adulto) 30–60 min antes."
  },
  {
    "id": "viv2026-41",
    "module": "Cirurgia",
    "text": "Paciente, sexo feminino, 42 anos, chega ao pronto-socorro com dor em hipocôndrio direito há 24 horas, febre e sinal de Murphy positivo. A ultrassonografia confirma colecistite aguda litiásica. A conduta padrão-ouro é:",
    "options": [
      "Colecistostomia percutânea",
      "Colecistectomia aberta de urgência",
      "Colecistectomia videolaparoscópica precoce",
      "Antibioticoterapia isolada e cirurgia eletiva em 6 semanas"
    ],
    "correctAnswer": 2,
    "explanation": "Colecistite aguda litiásica com 24 horas de evolução em paciente sem comorbidades graves: o padrão-ouro é a colecistectomia videolaparoscópica precoce, idealmente nas primeiras 72 horas (podendo ser feita até 7–10 dias do início), com antibioticoterapia. Reduz tempo de internação, custos e complicações em relação à cirurgia tardia.",
    "commentary": "Colecistostomia percutânea (A): é ponte para pacientes de alto risco cirúrgico ou colecistite grave sem condições de cirurgia.\n\nColecistectomia aberta de urgência (B): a via laparoscópica é preferida, com menos morbidade.\n\nAntibiótico isolado e cirurgia em 6 semanas (D): estratégia com mais recidivas e internações; não é a preferida.",
    "reference": "Tokyo Guidelines 2018 (TG18); WSES Guidelines on acute calculous cholecystitis (2020)",
    "tags": [
      "colecistite aguda",
      "colecistectomia videolaparoscópica",
      "abdome agudo inflamatório"
    ],
    "tip": "Colecistite aguda: colecistectomia laparoscópica precoce (até 72 h, idealmente)."
  },
  {
    "id": "viv2026-42",
    "module": "Cirurgia",
    "text": "A célula predominante na fase inflamatória tardia da cicatrização de feridas, responsável pelo desbridamento e secreção de fatores de crescimento essenciais para a fibroplasia, é:",
    "options": [
      "Neutrófilo",
      "Macrófago",
      "Fibroblasto",
      "Linfócito"
    ],
    "correctAnswer": 1,
    "explanation": "Na fase inflamatória da cicatrização, os neutrófilos predominam nas primeiras 24–48 horas e depois são substituídos pelos macrófagos (fase inflamatória tardia, 48–96 horas). O macrófago é a célula essencial: faz fagocitose e desbridamento e secreta fatores de crescimento (PDGF, TGF-β, VEGF, FGF) que recrutam fibroblastos e iniciam a fibroplasia e a angiogênese.",
    "commentary": "Neutrófilo (A): predomina na fase inflamatória precoce e não é essencial para a cicatrização.\n\nFibroblasto (C): é a célula da fase proliferativa, que deposita colágeno.\n\nLinfócito (D): tem papel modulador, mas não é a célula predominante nem essencial dessa fase.",
    "reference": "Sabiston – Tratado de Cirurgia, 21ª ed. (cicatrização)",
    "tags": [
      "cicatrização",
      "macrófago",
      "fisiologia cirúrgica"
    ],
    "tip": "Cicatrização: neutrófilo primeiro; macrófago é o essencial; fibroblasto depois."
  },
  {
    "id": "viv2026-43",
    "module": "Cirurgia",
    "text": "Sobre as hérnias da região inguinofemoral, analise as afirmações:\n\nI. A hérnia inguinal direta origina-se no Triângulo de Hesselbach, medialmente aos vasos epigástricos inferiores.\nII. A hérnia inguinal indireta passa através do anel inguinal profundo, lateralmente aos vasos epigástricos inferiores.\nIII. A hérnia femoral é mais comum em mulheres e apresenta maior risco de estrangulamento do que as hérnias inguinais.\n\nDessa forma, é CORRETO afirmar:",
    "options": [
      "Apenas a proposição I está correta",
      "Apenas a proposição III está correta",
      "Apenas as proposições I e II estão corretas",
      "Todas estão corretas"
    ],
    "correctAnswer": 3,
    "explanation": "I: a hérnia inguinal direta sai pelo triângulo de Hesselbach, medial aos vasos epigástricos inferiores (V). II: a indireta passa pelo anel inguinal profundo, lateral aos vasos epigástricos inferiores (V). III: a hérnia femoral é mais frequente em mulheres e tem maior risco de encarceramento e estrangulamento que as inguinais, devendo ser operada sempre (V).",
    "commentary": "Apenas I (A), apenas III (B) e I e II (C): as três proposições estão corretas.",
    "reference": "HerniaSurge Group – International guidelines for groin hernia management (2018)",
    "tags": [
      "hérnia inguinal",
      "hérnia femoral",
      "anatomia cirúrgica"
    ],
    "tip": "Direta: medial aos epigástricos; indireta: lateral. Femoral: mulheres, alto risco de estrangular."
  },
  {
    "id": "viv2026-44",
    "module": "Cirurgia",
    "text": "Gestante de 24 semanas apresenta dor em flanco direito e febre baixa. A ressonância magnética confirma apendicite aguda não complicada. A conduta CORRETA é:",
    "options": [
      "Apendicectomia videolaparoscópica",
      "Tratamento antibiótico exclusivo até o termo",
      "Indução do parto seguida de apendicectomia",
      "Apendicectomia aberta por incisão mediana infraumbilical"
    ],
    "correctAnswer": 0,
    "explanation": "Apendicite aguda na gestação, confirmada por ressonância: o tratamento é a apendicectomia, sem adiar, pois a perfuração aumenta muito a perda fetal e a morbidade materna. A via laparoscópica é segura em qualquer trimestre (com cuidados como decúbito lateral esquerdo, pressão de pneumoperitônio até 12–15 mmHg e acesso adaptado à altura uterina).",
    "commentary": "Antibiótico exclusivo até o termo (B): o tratamento conservador tem mais falha e complicações na gestante.\n\nIndução do parto (C): não há indicação obstétrica de interromper a gestação de 24 semanas.\n\nApendicectomia aberta por incisão mediana infraumbilical (D): a laparoscopia é preferida; se aberta, a incisão é sobre o ponto de maior dor.",
    "reference": "SAGES Guidelines for the Use of Laparoscopy During Pregnancy (2017); WSES Jerusalem Guidelines (2020)",
    "tags": [
      "apendicite na gestação",
      "apendicectomia videolaparoscópica",
      "abdome agudo na gestação"
    ],
    "tip": "Apendicite na gestante: operar, de preferência por laparoscopia."
  },
  {
    "id": "viv2026-45",
    "module": "Clínica Médica",
    "text": "O perfil hemodinâmico característico do choque cardiogênico é:",
    "options": [
      "Débito cardíaco baixo, pressão venosa central baixa e resistência vascular sistêmica elevada",
      "Débito cardíaco alto, pressão venosa central baixa e resistência vascular sistêmica baixa",
      "Débito cardíaco baixo, pressão venosa central elevada e resistência vascular sistêmica elevada",
      "Débito cardíaco normal, pressão venosa central normal e resistência vascular sistêmica baixa"
    ],
    "correctAnswer": 2,
    "explanation": "No choque cardiogênico, a falha da bomba reduz o débito cardíaco; o sangue se acumula a montante, elevando as pressões de enchimento (pressão venosa central e pressão de oclusão da artéria pulmonar); e a resposta neuro-hormonal compensatória causa vasoconstrição, com resistência vascular sistêmica elevada.",
    "commentary": "DC baixo, PVC baixa e RVS alta (A): perfil do choque hipovolêmico.\n\nDC alto, PVC baixa e RVS baixa (B): perfil do choque distributivo (séptico) após reposição.\n\nDC normal, PVC normal e RVS baixa (D): não corresponde ao choque cardiogênico.",
    "reference": "Sociedade Brasileira de Cardiologia; Surviving Sepsis/ESICM – Consensus on circulatory shock (2014)",
    "tags": [
      "choque cardiogênico",
      "perfis hemodinâmicos",
      "terapia intensiva",
      "cardiologia"
    ],
    "tip": "Cardiogênico: DC ↓, PVC ↑, RVS ↑. Hipovolêmico: DC ↓, PVC ↓, RVS ↑. Séptico: DC ↑, RVS ↓."
  },
  {
    "id": "viv2026-46",
    "module": "Cirurgia",
    "text": "Paciente com cirurgia abdominal prévia apresenta distensão, vômitos e parada de eliminação de flatos. Tomografia computadorizada mostra dilatação de delgado com zona de transição, sem sinais de isquemia. A conduta inicial é:",
    "options": [
      "Descompressão gástrica (sonda nasogástrica), hidratação venosa e reavaliação seriada",
      "Laparotomia exploradora imediata para lise de bridas",
      "Administração de contraste baritado oral (trânsito intestinal)",
      "Colonoscopia descompressiva"
    ],
    "correctAnswer": 0,
    "explanation": "Obstrução do intestino delgado por bridas, com zona de transição na TC e sem sinais de isquemia: a conduta inicial é tratamento não operatório — jejum, descompressão por sonda nasogástrica, hidratação venosa com correção de eletrólitos e reavaliação clínica seriada. Pode-se usar contraste hidrossolúvel (gastrografina) como teste diagnóstico-terapêutico. Indica-se cirurgia se surgirem sinais de isquemia ou se não houver resolução em 48–72 horas.",
    "commentary": "Laparotomia imediata (B): reservada para sinais de estrangulamento/isquemia ou falha do tratamento conservador.\n\nContraste baritado (C): o bário é contraindicado na obstrução; usa-se contraste hidrossolúvel.\n\nColonoscopia descompressiva (D): é tratamento do volvo de sigmoide ou da síndrome de Ogilvie, não da obstrução de delgado.",
    "reference": "Bologna Guidelines for Adhesive Small Bowel Obstruction (WSES 2017)",
    "tags": [
      "obstrução intestinal",
      "bridas",
      "sonda nasogástrica",
      "abdome agudo obstrutivo"
    ],
    "tip": "Obstrução por bridas sem isquemia: SNG, hidratação e observação."
  },
  {
    "id": "viv2026-47",
    "module": "Cirurgia",
    "text": "Sobre a avaliação de nódulos tireoidianos (Sistema Bethesda), analise as sentenças:\n\n1. Bethesda I indica amostra insatisfatória e requer repetição da PAAF.\n2. Bethesda II indica nódulo benigno e a conduta é o seguimento clínico.\n3. Bethesda VI indica malignidade comprovada e requer tireoidectomia.\n\nConsiderando-se as afirmativas como verdadeiras (V) ou falsas (F), a alternativa CORRETA é:",
    "options": [
      "1-V, 2-F, 3-V",
      "1-V, 2-V, 3-V",
      "1-F, 2-V, 3-V",
      "1-V, 2-V, 3-F"
    ],
    "correctAnswer": 1,
    "explanation": "Sistema Bethesda: I — amostra insatisfatória, repetir a PAAF guiada por ultrassom (V); II — benigno, seguimento clínico e ultrassonográfico (V); VI — maligno (risco de 97–99%), com indicação cirúrgica (tireoidectomia; lobectomia em tumores pequenos selecionados) (V).",
    "commentary": "1-V, 2-F, 3-V (A), 1-F, 2-V, 3-V (C) e 1-V, 2-V, 3-F (D): as três sentenças estão corretas.",
    "reference": "The Bethesda System for Reporting Thyroid Cytopathology, 3ª ed. (2023); ATA Guidelines (2015)",
    "tags": [
      "nódulo tireoidiano",
      "sistema Bethesda",
      "PAAF",
      "cirurgia de cabeça e pescoço"
    ],
    "tip": "Bethesda: I repetir; II seguir; III–IV repetir/molecular/lobectomia; V–VI cirurgia."
  },
  {
    "id": "viv2026-48",
    "module": "Cirurgia",
    "text": "Paciente com diverticulite aguda perfurada e peritonite difusa purulenta (Hinchey III), hemodinamicamente instável. A conduta cirúrgica mais segura é:",
    "options": [
      "Lavagem laparoscópica e drenagem da cavidade",
      "Sigmoidectomia com anastomose primária e ileostomia de proteção",
      "Hemicolectomia esquerda com anastomose primária",
      "Cirurgia de Hartmann"
    ],
    "correctAnswer": 3,
    "explanation": "Diverticulite perfurada com peritonite purulenta difusa (Hinchey III) em paciente instável: a cirurgia mais segura é o procedimento de Hartmann — sigmoidectomia com colostomia terminal e fechamento do coto retal —, que controla o foco sem anastomose em ambiente contaminado e com paciente em choque. Em pacientes estáveis, a ressecção com anastomose primária e ileostomia de proteção é alternativa.",
    "commentary": "Lavagem laparoscópica (A): opção controversa em Hinchey III estável selecionado, com mais reintervenções; não indicada no instável.\n\nAnastomose primária com ileostomia (B): alternativa em paciente estável, sem comorbidades graves; não no instável.\n\nHemicolectomia esquerda com anastomose (C): anastomose em paciente instável e peritonite tem alto risco de deiscência.",
    "reference": "WSES Guidelines for acute left sided colonic diverticulitis (2020); ASCRS (2020)",
    "tags": [
      "diverticulite aguda",
      "cirurgia de Hartmann",
      "peritonite",
      "coloproctologia"
    ],
    "tip": "Diverticulite com peritonite em paciente instável: Hartmann."
  },
  {
    "id": "viv2026-49",
    "module": "Clínica Médica",
    "text": "Os três parâmetros laboratoriais utilizados para calcular o escore MELD é:",
    "options": [
      "Albumina, Bilirrubina e Tempo de Protrombina",
      "Bilirrubina, Creatinina e Razão Normalizada Internacional (RNI)",
      "Bilirrubina, Encefalopatia e Ascite",
      "Sódio, Creatinina e Albumina"
    ],
    "correctAnswer": 1,
    "explanation": "O escore MELD (Model for End-Stage Liver Disease) usa três variáveis laboratoriais: bilirrubina total, creatinina e INR (RNI). O MELD-Na acrescenta o sódio sérico (e o MELD 3.0 inclui sexo e albumina). É usado para estimar a mortalidade em 3 meses e priorizar pacientes na fila de transplante hepático.",
    "commentary": "Albumina, bilirrubina e TP (A): mistura parte dos critérios de Child-Pugh (que também usa ascite e encefalopatia).\n\nBilirrubina, encefalopatia e ascite (C): parte do Child-Pugh.\n\nSódio, creatinina e albumina (D): não correspondem ao MELD clássico.",
    "reference": "Kamath PS et al. A model to predict survival in patients with end-stage liver disease, Hepatology 2001",
    "tags": [
      "escore MELD",
      "cirrose",
      "transplante hepático",
      "hepatologia"
    ],
    "tip": "MELD: bilirrubina, creatinina, INR (+ sódio no MELD-Na)."
  },
  {
    "id": "viv2026-50",
    "module": "Cirurgia",
    "text": "Paciente com carcinoma ductal invasivo de 1,5 cm (T1) no quadrante superior externo da mama, sem linfonodos palpáveis. A cirurgia conservadora indicada é:",
    "options": [
      "Tumorectomia (segmentectomia) com margens livres e biópsia de linfonodo sentinela",
      "Mastectomia radical modificada (Madden)",
      "Quadrantectomia com esvaziamento axilar radical nível I, II e III",
      "Mastectomia poupadora de pele sem avaliação axilar"
    ],
    "correctAnswer": 0,
    "explanation": "Carcinoma ductal invasivo T1 (1,5 cm), axila clinicamente negativa, em quadrante superior externo: a cirurgia conservadora indicada é a ressecção segmentar (tumorectomia/setorectomia) com margens livres, associada a biópsia de linfonodo sentinela para estadiamento axilar, seguida de radioterapia na mama.",
    "commentary": "Mastectomia radical modificada (B): é desnecessária para tumor pequeno elegível à conservação.\n\nQuadrantectomia com esvaziamento axilar níveis I a III (C): com axila clínica negativa, o padrão é o linfonodo sentinela; esvaziamento só se o sentinela tiver doença significativa.\n\nMastectomia poupadora de pele sem avaliação axilar (D): todo carcinoma invasivo requer estadiamento axilar.",
    "reference": "NCCN Guidelines – Breast Cancer; Sociedade Brasileira de Mastologia",
    "tags": [
      "câncer de mama",
      "cirurgia conservadora",
      "linfonodo sentinela",
      "mastologia"
    ],
    "tip": "Câncer de mama inicial com axila negativa: cirurgia conservadora + linfonodo sentinela + radioterapia."
  },
  {
    "id": "viv2026-51",
    "module": "Cirurgia",
    "text": "Vítima de ferimento por arma branca no tórax apresenta dispneia leve. A radiografia de tórax mostra pneumotórax laminar (< 2 cm) apical, sem derrame pleural. O paciente está estável. A conduta CORRETA é:",
    "options": [
      "Toracoscopia de urgência",
      "Drenagem torácica em selo d'água imediata",
      "Observação clínica e repetição da radiografia em 6 horas",
      "Toracocentese de alívio com agulha"
    ],
    "correctAnswer": 2,
    "explanation": "Ferimento torácico por arma branca com pneumotórax pequeno (< 2 cm, laminar apical), sem hemotórax, em paciente estável e pouco sintomático: pode ser conduzido com observação clínica, oxigênio e radiografia de controle em cerca de 6 horas (ou antes, se houver piora). Se o pneumotórax aumentar, surgir hemotórax ou o paciente precisar de ventilação com pressão positiva, faz-se drenagem.",
    "commentary": "Toracoscopia de urgência (A): indicada para hemotórax retido, lesões diafragmáticas suspeitas ou sangramento persistente.\n\nDrenagem imediata (B): é indicada em pneumotórax maior, sintomático, progressivo, com hemotórax ou em paciente que será ventilado.\n\nToracocentese por agulha (D): é medida de descompressão no pneumotórax hipertensivo.",
    "reference": "ATLS – Advanced Trauma Life Support, 10ª ed.; EAST Guidelines on occult pneumothorax",
    "tags": [
      "pneumotórax",
      "trauma torácico",
      "ferimento por arma branca"
    ],
    "tip": "Pneumotórax pequeno, estável, sem ventilação mecânica: observar e repetir a radiografia."
  },
  {
    "id": "viv2026-52",
    "module": "Cirurgia",
    "text": "A causa mais frequente de hiperparatireoidismo primário é:",
    "options": [
      "Hiperplasia de todas as quatro glândulas",
      "Adenoma único de paratireoide",
      "Carcinoma de paratireoide",
      "Adenomas duplos"
    ],
    "correctAnswer": 1,
    "explanation": "O adenoma único de paratireoide é a causa de cerca de 80–85% dos casos de hiperparatireoidismo primário. Hiperplasia das quatro glândulas responde por cerca de 10–15% (mais comum nas síndromes NEM), adenomas duplos por 2–5% e carcinoma por menos de 1%.",
    "commentary": "Hiperplasia das quatro glândulas (A): é a segunda causa e predomina nas síndromes NEM 1 e 2A.\n\nCarcinoma (C): rara, com hipercalcemia grave e massa cervical.\n\nAdenomas duplos (D): incomuns.",
    "reference": "Bilezikian JP et al. Guidelines for the Management of Asymptomatic Primary Hyperparathyroidism (2022); SBEM",
    "tags": [
      "hiperparatireoidismo primário",
      "adenoma de paratireoide",
      "endocrinologia"
    ],
    "tip": "Hiperparatireoidismo primário: adenoma único em ~85%."
  },
  {
    "id": "viv2026-53",
    "module": "Cirurgia",
    "text": "Sobre os Tumores Estromais Gastrointestinais (GIST), analise as afirmações:\n\nI. Originam-se das células intersticiais de Cajal, as células \"marca-passo\" do trato gastrointestinal.\nII. A expressão imuno-histoquímica da proteína c-kit (CD117) é o principal marcador diagnóstico.\nIII. A ressecção cirúrgica completa é o tratamento de escolha para doença localizada.\n\nDessa forma, é CORRETO afirmar:",
    "options": [
      "Apenas a proposição I está correta",
      "Apenas a proposição III está correta",
      "Apenas as proposições I e II estão corretas",
      "Todas estão corretas"
    ],
    "correctAnswer": 3,
    "explanation": "I: os GIST originam-se das células intersticiais de Cajal (marca-passo do tubo digestivo) ou de precursoras (V). II: a imuno-histoquímica para c-KIT (CD117) é positiva em cerca de 95%, e o DOG1 ajuda nos negativos (V). III: na doença localizada, a ressecção cirúrgica completa com margens livres (sem linfadenectomia de rotina) é o tratamento de escolha; o imatinibe é usado como adjuvante em alto risco ou neoadjuvante em tumores grandes (V).",
    "commentary": "Apenas I (A), apenas III (B) e I e II (C): as três proposições estão corretas.",
    "reference": "ESMO–EURACAN–GENTURIS Clinical Practice Guidelines: Gastrointestinal stromal tumours (2022); NCCN",
    "tags": [
      "GIST",
      "CD117",
      "imatinibe",
      "cirurgia oncológica"
    ],
    "tip": "GIST: células de Cajal, CD117/DOG1+, ressecção sem linfadenectomia, imatinibe se alto risco."
  },
  {
    "id": "viv2026-54",
    "module": "Cirurgia",
    "text": "Paciente refere dor intensa e \"cortante\" à evacuação, com sangue vivo no papel higiênico, há 4 meses. O exame revela plicoma sentinela e fissura na linha média posterior com exposição de fibras do esfíncter interno. Tratamento clínico falhou. A cirurgia indicada é:",
    "options": [
      "Esfincterotomia lateral interna",
      "Fissurectomia simples",
      "Hemorroidectomia clássica",
      "Dilatação anal manual"
    ],
    "correctAnswer": 0,
    "explanation": "Fissura anal crônica (mais de 8 semanas, com plicoma sentinela e exposição das fibras do esfíncter interno), refratária ao tratamento clínico: a cirurgia de escolha é a esfincterotomia lateral interna, que reduz a hipertonia do esfíncter interno e tem taxa de cicatrização acima de 90%, com risco pequeno de incontinência leve.",
    "commentary": "Fissurectomia simples (B): sem tratar a hipertonia esfincteriana, a recorrência é alta.\n\nHemorroidectomia (C): não trata fissura.\n\nDilatação anal manual (D): foi abandonada pelo risco imprevisível de incontinência.",
    "reference": "ASCRS Clinical Practice Guidelines for the Management of Anal Fissures (2023)",
    "tags": [
      "fissura anal",
      "esfincterotomia lateral interna",
      "coloproctologia"
    ],
    "tip": "Fissura crônica refratária: esfincterotomia lateral interna."
  },
  {
    "id": "viv2026-55",
    "module": "Cirurgia",
    "text": "Paciente submetido a apendicectomia por apendicite flegmonosa (sem perfuração, sem pus livre). A classificação da ferida operatória é:",
    "options": [
      "Infectada (suja)",
      "Limpa",
      "Contaminada",
      "Limpa-contaminada"
    ],
    "correctAnswer": 3,
    "explanation": "A apendicectomia por apendicite sem perfuração e sem pus é cirurgia limpa-contaminada (potencialmente contaminada): há abertura controlada do trato gastrointestinal sem contaminação grosseira. Se houver perfuração ou pus, passa a infectada.",
    "commentary": "Infectada (A): seria o caso de apendicite perfurada, abscesso ou pus livre.\n\nLimpa (B): cirurgia sem abertura de trato digestivo, respiratório ou geniturinário.\n\nContaminada (C): extravasamento grosseiro de conteúdo intestinal ou quebra importante da técnica asséptica.",
    "reference": "CDC/NHSN – Surgical wound classification; ANVISA – Critérios diagnósticos de infecção relacionada à assistência à saúde",
    "tags": [
      "classificação das feridas cirúrgicas",
      "infecção do sítio cirúrgico",
      "apendicectomia"
    ],
    "tip": "Apendicite: não perfurada = limpa-contaminada; perfurada/pus = infectada."
  },
  {
    "id": "viv2026-56",
    "module": "Cirurgia",
    "text": "Paciente com fibrilação atrial apresenta dor abdominal súbita e intensa. A angiotomografia mostra falha de enchimento abrupta no terço médio da artéria mesentérica superior. Não há sinais de peritonite ou necrose intestinal na laparotomia. O tratamento cirúrgico é:",
    "options": [
      "Trombectomia venosa mesentérica",
      "Embolectomia da artéria mesentérica superior",
      "Ressecção intestinal segmentar",
      "Bypass aorto-mesentérico"
    ],
    "correctAnswer": 1,
    "explanation": "Embolia da artéria mesentérica superior (fibrilação atrial, oclusão abrupta no terço médio) sem necrose intestinal na laparotomia: o tratamento cirúrgico é a embolectomia da AMS (com cateter de Fogarty), seguida de reavaliação da viabilidade das alças (e second look) e anticoagulação.",
    "commentary": "Trombectomia venosa (A): é tratamento da trombose venosa mesentérica, não da embolia arterial.\n\nRessecção intestinal (C): só se houver alça inviável, o que não ocorreu.\n\nBypass aortomesentérico (D): indicado na trombose arterial sobre placa aterosclerótica (oclusão ostial), não na embolia.",
    "reference": "ESVS Guidelines on Diseases of Mesenteric Arteries and Veins (2017)",
    "tags": [
      "isquemia mesentérica aguda",
      "embolectomia",
      "cirurgia vascular"
    ],
    "tip": "Embolia da AMS: embolectomia. Trombose ostial: bypass ou angioplastia."
  },
  {
    "id": "viv2026-57",
    "module": "Cirurgia",
    "text": "Sobre a classificação de Laurén para o câncer gástrico, analise as sentenças:\n\n1. O tipo intestinal é mais comum em homens idosos e está associado a fatores ambientais e H. pylori.\n2. O tipo difuso ocorre mais em jovens, tem pior prognóstico e frequentemente apresenta células em anel de sinete.\n3. O tipo difuso apresenta estruturas glandulares bem formadas e disseminação hematogênica predominante.\n\nConsiderando-se as afirmativas como verdadeiras (V) ou falsas (F), a alternativa CORRETA é:",
    "options": [
      "1-F, 2-V, 3-V",
      "1-V, 2-F, 3-V",
      "1-V, 2-V, 3-F",
      "1-V, 2-V, 3-V"
    ],
    "correctAnswer": 2,
    "explanation": "Classificação de Laurén: o tipo intestinal (forma glândulas) é mais comum em homens idosos, associado a fatores ambientais e H. pylori, com sequência gastrite atrófica-metaplasia-displasia e disseminação preferencialmente hematogênica (fígado) (1 V). O tipo difuso ocorre em mais jovens e mulheres, tem células em anel de sinete, não forma glândulas, dissemina-se por contiguidade, linfática e peritoneal, e tem pior prognóstico (2 V). Logo, a afirmação de que o difuso tem glândulas bem formadas e disseminação hematogênica é falsa (3 F).",
    "commentary": "1-F, 2-V, 3-V (A), 1-V, 2-F, 3-V (B) e todas V (D): o tipo difuso não forma glândulas e se dissemina sobretudo por via peritoneal e linfática.",
    "reference": "Laurén P, 1965; Japanese Gastric Cancer Association; Sociedade Brasileira de Cirurgia Oncológica",
    "tags": [
      "câncer gástrico",
      "classificação de Laurén",
      "células em anel de sinete",
      "cirurgia oncológica"
    ],
    "tip": "Laurén: intestinal (idoso, H. pylori, glândulas, fígado) × difuso (jovem, anel de sinete, peritônio)."
  },
  {
    "id": "viv2026-58",
    "module": "Cirurgia",
    "text": "Idoso institucionalizado apresenta distensão abdominal maciça e imagem em \"grão de café\" no raio-x. Não há sinais de peritonite. A conduta inicial é:",
    "options": [
      "Descompressão endoscópica",
      "Sigmoidectomia de urgência",
      "Laparotomia exploradora",
      "Cecostomia descompressiva"
    ],
    "correctAnswer": 0,
    "explanation": "Idoso institucionalizado com distensão maciça e “grão de café” na radiografia: volvo de sigmoide. Sem peritonite, a conduta inicial é a descompressão endoscópica (retossigmoidoscopia ou colonoscopia) com distorção e sonda retal; depois, sigmoidectomia eletiva na mesma internação, pela alta recidiva.",
    "commentary": "Sigmoidectomia de urgência (B) e laparotomia (C): indicadas com peritonite, necrose ou falha da descompressão.\n\nCecostomia (D): não trata o volvo de sigmoide; é opção excepcional no volvo de ceco ou Ogilvie.",
    "reference": "ASCRS Clinical Practice Guidelines for Colonic Volvulus (2021)",
    "tags": [
      "volvo de sigmoide",
      "obstrução intestinal",
      "coloproctologia"
    ],
    "tip": "Grão de café sem peritonite: descompressão endoscópica."
  },
  {
    "id": "viv2026-59",
    "module": "Clínica Médica",
    "text": "A alteração eletrocardiográfica clássica associada à hipercalemia grave é:",
    "options": [
      "Ondas U proeminentes",
      "Depressão do segmento ST",
      "Alargamento do intervalo QT",
      "Ondas T apiculadas e simétricas"
    ],
    "correctAnswer": 3,
    "explanation": "A alteração eletrocardiográfica mais precoce e clássica da hipercalemia é a onda T apiculada, alta, simétrica e de base estreita. Com o agravamento, surgem achatamento da onda P, alargamento do QRS, padrão sinusoidal e, por fim, fibrilação ventricular ou assistolia.",
    "commentary": "Ondas U proeminentes (A) e depressão de ST (B): achados de hipocalemia.\n\nQT longo (C): típico de hipocalcemia (e de hipocalemia, por fusão T-U).",
    "reference": "American Heart Association – ACLS; Harrison – Medicina Interna",
    "tags": [
      "hipercalemia",
      "eletrocardiograma",
      "distúrbios hidroeletrolíticos",
      "cardiologia"
    ],
    "tip": "Hipercalemia: T apiculada → P some → QRS alarga → sinusoidal."
  },
  {
    "id": "viv2026-60",
    "module": "Cirurgia",
    "text": "Paciente vítima de trauma abdominal contuso apresenta instabilidade hemodinâmica persistente apesar da reposição volêmica. O FAST é positivo. Na laparotomia, encontra-se o baço estilhaçado com sangramento ativo. A conduta CORRETA é:",
    "options": [
      "Esplenorrafia",
      "Esplenectomia total",
      "Embolização angiográfica",
      "Esplenectomia parcial"
    ],
    "correctAnswer": 1,
    "explanation": "Trauma abdominal com instabilidade hemodinâmica persistente, FAST positivo e, na laparotomia, baço estilhaçado (lesão grau V) com sangramento ativo: a conduta é esplenectomia total. Tentativas de preservação (esplenorrafia, esplenectomia parcial) só se aplicam a lesões menores em paciente estável. Após a esplenectomia, o paciente deve receber vacinas contra germes encapsulados.",
    "commentary": "Esplenorrafia (A) e esplenectomia parcial (D): demoradas e inadequadas para baço estilhaçado em paciente instável.\n\nEmbolização (C): é opção no paciente estável com blush, não no instável já em laparotomia.",
    "reference": "WSES Splenic Trauma Guidelines (2017); ATLS 10ª ed.",
    "tags": [
      "trauma esplênico",
      "esplenectomia",
      "trauma abdominal"
    ],
    "tip": "Baço estilhaçado + instabilidade: esplenectomia."
  },
  {
    "id": "viv2026-61",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente, sexo feminino, 34 anos, com 32 semanas de gestação, apresenta cefaleia, escotomas e PA de 160/110 mmHg. Exames mostram plaquetopenia, elevação de transaminases e creatinina de 1,2 mg/dL. A conduta imediata para prevenção de eclâmpsia é:",
    "options": [
      "Indicação de cesariana de emergência imediata",
      "Administração de diazepam intravenoso",
      "Administração de sulfato de magnésio intravenoso",
      "Uso de fenitoína profilática"
    ],
    "correctAnswer": 2,
    "explanation": "Gestante de 32 semanas com PA 160/110 mmHg, cefaleia, escotomas, plaquetopenia, transaminases elevadas e creatinina 1,2: pré-eclâmpsia com sinais de gravidade (iminência de eclâmpsia e síndrome HELLP). A prevenção da eclâmpsia é feita com sulfato de magnésio intravenoso (esquema de Zuspan ou Pritchard), junto com anti-hipertensivo de ação rápida (hidralazina, nifedipina ou labetalol) e planejamento da resolução da gestação após estabilização.",
    "commentary": "Cesariana de emergência imediata (A): a gestação deve ser resolvida, mas após estabilização (magnésio e controle pressórico); a via pode ser vaginal.\n\nDiazepam (B) e fenitoína (D): são inferiores ao sulfato de magnésio na prevenção e no tratamento da eclâmpsia.",
    "reference": "Febrasgo/RBEHG – Pré-eclâmpsia (2023); Magpie Trial, Lancet 2002",
    "tags": [
      "pré-eclâmpsia grave",
      "síndrome HELLP",
      "sulfato de magnésio",
      "eclâmpsia"
    ],
    "tip": "Pré-eclâmpsia grave: sulfato de magnésio + anti-hipertensivo, depois resolver a gestação."
  },
  {
    "id": "viv2026-62",
    "module": "Ginecologia e Obstetrícia",
    "text": "O principal mecanismo de ação dos anticoncepcionais orais combinados (estrogênio e progestagênio) na prevenção da gravidez é:",
    "options": [
      "Inibição da ovulação através da supressão das gonadotrofinas",
      "Alteração do muco cervical, tornando-o hostil aos espermatozoides",
      "Atrofia do endométrio, impedindo a implantação",
      "Redução da motilidade tubária"
    ],
    "correctAnswer": 0,
    "explanation": "O principal mecanismo dos contraceptivos orais combinados é a inibição da ovulação: estrogênio e progestagênio suprimem a secreção de GnRH, FSH e LH (sobretudo o pico de LH). Mecanismos adicionais incluem espessamento do muco cervical e alterações endometriais.",
    "commentary": "Alteração do muco cervical (B): é mecanismo secundário nos combinados (e principal nas minipílulas).\n\nAtrofia endometrial (C) e redução da motilidade tubária (D): são efeitos complementares, não o principal mecanismo.",
    "reference": "Speroff – Endocrinologia Ginecológica Clínica e Infertilidade; Febrasgo – Anticoncepção hormonal combinada",
    "tags": [
      "anticoncepcional oral combinado",
      "mecanismo de ação",
      "anticoncepção"
    ],
    "tip": "ACO combinado: inibe a ovulação (bloqueia o pico de LH)."
  },
  {
    "id": "viv2026-63",
    "module": "Ginecologia e Obstetrícia",
    "text": "Sobre o rastreamento do câncer de colo do útero no Brasil, analise as afirmações:\n\nI. O exame citopatológico (Papanicolau) deve ser iniciado aos 25 anos para mulheres que já iniciaram atividade sexual.\nII. Após dois exames anuais consecutivos normais, o intervalo de rastreamento deve ser de 3 anos.\nIII. O rastreamento deve continuar indefinidamente, mesmo após os 65 anos, independentemente do histórico prévio.\n\nDessa forma, é CORRETO afirmar:",
    "options": [
      "Apenas a proposição I está correta",
      "Apenas a proposição III está correta",
      "Apenas as proposições I e II estão corretas",
      "Todas estão corretas"
    ],
    "correctAnswer": 2,
    "explanation": "Pelas Diretrizes Brasileiras de rastreamento do câncer do colo do útero (citologia, 2016): I — o rastreamento começa aos 25 anos para quem já iniciou a atividade sexual (V); II — após dois exames anuais consecutivos negativos, o intervalo passa a ser de 3 anos (V); III — o rastreamento termina aos 64 anos, se houver pelo menos dois exames negativos consecutivos nos últimos 5 anos (F).",
    "commentary": "Apenas I (A), apenas III (B) e todas (D): o rastreamento não continua indefinidamente.",
    "reference": "INCA – Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (2016)",
    "tags": [
      "câncer do colo do útero",
      "rastreamento",
      "citologia oncótica",
      "saúde da mulher"
    ],
    "tip": "Citologia: 25 a 64 anos; 2 anuais negativos → a cada 3 anos."
  },
  {
    "id": "viv2026-64",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente refere corrimento vaginal acinzentado, com odor fétido (\"peixe podre\") que piora após o coito. O exame a fresco mostra \"clue cells\" e o teste de Whiff é positivo. Nesse caso, o diagnóstico e tratamento são:",
    "options": [
      "Tricomoníase; Tinidazol",
      "Candidíase vulvovaginal; Fluconazol",
      "Cervicite por Clamídia; Azitromicina",
      "Vaginose bacteriana; Metronidazol"
    ],
    "correctAnswer": 3,
    "explanation": "Corrimento acinzentado com odor de peixe que piora após o coito, clue cells no exame a fresco e teste das aminas (Whiff) positivo: vaginose bacteriana (critérios de Amsel). O tratamento é metronidazol 500 mg VO de 12/12 h por 7 dias (ou gel vaginal), sem necessidade de tratar o parceiro.",
    "commentary": "Tricomoníase com tinidazol (A): corrimento amarelo-esverdeado, bolhoso, colo em framboesa e protozoário móvel no exame a fresco.\n\nCandidíase com fluconazol (B): corrimento branco grumoso, prurido e pH < 4,5, sem odor.\n\nCervicite por clamídia com azitromicina (C): mucopus cervical e sangramento ao toque, sem clue cells.",
    "reference": "Ministério da Saúde – PCDT-IST (2022); Febrasgo – Vulvovaginites",
    "tags": [
      "vaginose bacteriana",
      "critérios de Amsel",
      "metronidazol",
      "vulvovaginites"
    ],
    "tip": "Clue cells + aminas positivas = vaginose → metronidazol."
  },
  {
    "id": "viv2026-65",
    "module": "Ginecologia e Obstetrícia",
    "text": "O critério diagnóstico para Diabetes Mellitus Gestacional (DMG) utilizando o Teste de Tolerância Oral à Glicose (TOTG-75g) entre 24 e 28 semanas é:",
    "options": [
      "Glicemia de jejum ≥ 126 mg/dL em duas ocasiões",
      "Hemoglobina glicada ≥ 6,5% no primeiro trimestre",
      "Glicemia aleatória ≥ 200 mg/dL com sintomas de poliúria",
      "Glicemia de jejum ≥ 92 mg/dL, ou 1h ≥ 180 mg/dL, ou 2h ≥ 153 mg/dL"
    ],
    "correctAnswer": 3,
    "explanation": "No TOTG com 75 g entre 24 e 28 semanas, o diabetes gestacional é diagnosticado com pelo menos um valor alterado: jejum ≥ 92 mg/dL, 1 hora ≥ 180 mg/dL ou 2 horas ≥ 153 mg/dL (critérios IADPSG, adotados no Brasil).",
    "commentary": "Jejum ≥ 126 em duas ocasiões (A), HbA1c ≥ 6,5% (B) e glicemia ao acaso ≥ 200 com sintomas (C): são critérios de diabetes prévio (overt) diagnosticado na gestação, não de DMG pelo TOTG.",
    "reference": "OPAS/Ministério da Saúde/Febrasgo/SBD – Rastreamento e diagnóstico de diabetes mellitus gestacional no Brasil (2016)",
    "tags": [
      "diabetes mellitus gestacional",
      "TOTG",
      "pré-natal"
    ],
    "tip": "TOTG 75 g: 92 / 180 / 153 — basta um."
  },
  {
    "id": "viv2026-66",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente, 16 anos, nuligesta, queixa-se de cólicas menstruais intensas nas primeiras 48 horas do ciclo, associadas a náuseas, desde a menarca. O exame pélvico é normal. A primeira linha de tratamento é:",
    "options": [
      "Agonistas de GnRH",
      "Anti-inflamatórios não esteroides",
      "Opioides potentes",
      "Laparoscopia para investigação de endometriose"
    ],
    "correctAnswer": 1,
    "explanation": "Adolescente com cólicas intensas nas primeiras 48 horas do ciclo, com náuseas, desde a menarca e exame pélvico normal: dismenorreia primária, causada por excesso de prostaglandinas endometriais. A primeira linha são os anti-inflamatórios não esteroides (iniciados no começo do fluxo ou da dor); contraceptivos hormonais são alternativa ou complemento. Sem resposta, investiga-se causa secundária (endometriose).",
    "commentary": "Agonistas de GnRH (A): reservados a endometriose refratária; não são primeira linha.\n\nOpioides potentes (C): não são indicados na dismenorreia primária.\n\nLaparoscopia (D): só se houver falha de AINE e hormônio por 3–6 meses ou suspeita de causa secundária.",
    "reference": "ACOG Committee Opinion nº 760 – Dysmenorrhea and Endometriosis in the Adolescent (2018); Febrasgo",
    "tags": [
      "dismenorreia primária",
      "anti-inflamatórios não esteroides",
      "ginecologia infanto-puberal"
    ],
    "tip": "Dismenorreia primária: AINE; refratária → hormônio → investigar endometriose."
  },
  {
    "id": "viv2026-67",
    "module": "Ginecologia e Obstetrícia",
    "text": "Sobre a imunização na gestação, analise as sentenças:\n\n1. A vacina dTpa (tétano, difteria e coqueluche acelular) deve ser aplicada em todas as gestações, preferencialmente a partir da 20ª semana.\n2. A vacina contra Influenza é recomendada apenas para gestantes com comorbidades.\n3. Vacinas de vírus vivos atenuados, como a Tríplice Viral, são contraindicadas durante a gestação.\n\nConsiderando-se as afirmativas como verdadeiras (V) ou falsas (F), a alternativa CORRETA é:",
    "options": [
      "1-F, 2-V, 3-V",
      "1-V, 2-V, 3-F",
      "1-V, 2-F, 3-V",
      "1-V, 2-V, 3-V"
    ],
    "correctAnswer": 2,
    "explanation": "1: a dTpa é recomendada em todas as gestações, a partir da 20ª semana, para transferir anticorpos e proteger o recém-nascido da coqueluche (V). 2: a vacina influenza é recomendada para todas as gestantes, em qualquer idade gestacional, independentemente de comorbidades (F). 3: vacinas de vírus vivos atenuados (tríplice viral, varicela, febre amarela em geral) são contraindicadas na gestação (V).",
    "commentary": "1-F, 2-V, 3-V (A), 1-V, 2-V, 3-F (B) e todas V (D): a influenza é para todas as gestantes.",
    "reference": "Ministério da Saúde – Calendário de Vacinação da Gestante; SBIm – Calendário de vacinação da gestante (2024)",
    "tags": [
      "vacinação na gestação",
      "dTpa",
      "influenza",
      "pré-natal"
    ],
    "tip": "Gestante: dTpa a partir de 20 semanas, influenza sempre; nada de vírus vivo."
  },
  {
    "id": "viv2026-68",
    "module": "Ginecologia e Obstetrícia",
    "text": "Lactante de 3 semanas pós-parto apresenta mama direita hiperemiada, dolorosa e endurecida, com febre de 38,5°C e mal-estar. A conduta terapêutica é:",
    "options": [
      "Manter a amamentação e iniciar antibiótico",
      "Suspender a amamentação na mama afetada e iniciar antibiótico",
      "Realizar drenagem cirúrgica imediata da área endurecida",
      "Apenas aplicar compressas frias e analgésicos"
    ],
    "correctAnswer": 0,
    "explanation": "Lactante com mama hiperemiada, dolorosa e endurecida, febre e mal-estar: mastite lactacional infecciosa. A conduta é manter a amamentação (inclusive no lado afetado) ou a ordenha, para esvaziar a mama, e iniciar antibiótico com cobertura para S. aureus (cefalexina ou dicloxacilina) por 10–14 dias, além de analgesia.",
    "commentary": "Suspender a amamentação na mama afetada (B): favorece estase e abscesso; o leite não prejudica o bebê.\n\nDrenagem cirúrgica imediata (C): reservada ao abscesso (de preferência por punção guiada por ultrassom), não à mastite.\n\nApenas compressas frias e analgésicos (D): com febre e mal-estar sistêmico, há indicação de antibiótico.",
    "reference": "Academy of Breastfeeding Medicine Protocol #36 (2022); Ministério da Saúde – Caderno de Atenção Básica nº 23",
    "tags": [
      "mastite lactacional",
      "aleitamento materno",
      "puerpério"
    ],
    "tip": "Mastite: continuar amamentando + antibiótico antiestafilocócico."
  },
  {
    "id": "viv2026-69",
    "module": "Ginecologia e Obstetrícia",
    "text": "A causa mais comum de sangramento uterino anormal em mulheres na pós-menopausa é:",
    "options": [
      "Câncer de endométrio",
      "Hiperplasia endometrial",
      "Pólipos endometriais",
      "Atrofia endometrial"
    ],
    "correctAnswer": 3,
    "explanation": "A causa mais frequente de sangramento uterino na pós-menopausa é a atrofia endometrial (e vaginal), responsável por cerca de 60–80% dos casos. Ainda assim, todo sangramento pós-menopausa deve ser investigado (ultrassom transvaginal com medida endometrial e, se > 4 mm ou persistente, biópsia/histeroscopia) para excluir câncer de endométrio (cerca de 10%).",
    "commentary": "Câncer de endométrio (A): é a causa a ser excluída, mas não a mais comum.\n\nHiperplasia endometrial (B) e pólipos (C): causas menos frequentes que a atrofia.",
    "reference": "Febrasgo – Sangramento uterino na pós-menopausa; ACOG Committee Opinion nº 734 (2018)",
    "tags": [
      "sangramento pós-menopausa",
      "atrofia endometrial",
      "ginecologia"
    ],
    "tip": "Sangramento pós-menopausa: atrofia é a mais comum, mas câncer precisa ser excluído."
  },
  {
    "id": "viv2026-70",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante de 10 semanas realiza VDRL de rotina com resultado 1:32. Ela nega sífilis prévia. A conduta CORRETA é:",
    "options": [
      "Solicitar teste treponêmico (FTA-ABS) e aguardar resultado, não tratar, visto que a paciente encontra-se assintomática",
      "Iniciar Penicilina G Benzatina (2,4 milhões UI/semana por 3 semanas) imediatamente",
      "Repetir o VDRL em 30 dias para confirmar a ascensão dos títulos",
      "Tratar apenas a parceira, pois o VDRL pode ser falso-positivo na gravidez"
    ],
    "correctAnswer": 1,
    "explanation": "Gestante com VDRL 1:32 sem tratamento prévio documentado: deve ser tratada imediatamente, sem esperar teste confirmatório, pelo risco de sífilis congênita (o teste treponêmico é solicitado, mas não atrasa o tratamento). Sem saber o tempo de infecção, trata-se como sífilis latente tardia/de duração indeterminada: penicilina G benzatina 2,4 milhões UI IM por semana, por 3 semanas (total 7,2 milhões UI). Tratar as parcerias e controlar o VDRL mensalmente.",
    "commentary": "Aguardar o FTA-ABS sem tratar (A): na gestante, um teste reagente já indica tratamento imediato.\n\nRepetir o VDRL em 30 dias (C): atrasaria o tratamento e aumentaria o risco fetal.\n\nTratar só a parceria (D): título de 1:32 é improvável como falso positivo; gestante e parceria devem ser tratadas.",
    "reference": "Ministério da Saúde – PCDT para Prevenção da Transmissão Vertical de HIV, Sífilis e Hepatites Virais (2022)",
    "tags": [
      "sífilis na gestação",
      "penicilina benzatina",
      "VDRL",
      "pré-natal"
    ],
    "tip": "Gestante com teste de sífilis reagente: tratar já. Duração desconhecida: 3 doses semanais."
  },
  {
    "id": "viv2026-71",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente, sexo feminino, 25 anos, apresenta atraso menstrual, dor abdominal em fossa ilíaca direita e sangramento vaginal discreto. O Beta-hCG é positivo (1.500 mUI/mL). A ultrassonografia transvaginal mostra útero vazio e massa anexial direita. O diagnóstico CORRETO é:",
    "options": [
      "Apendicite aguda na gravidez",
      "Abortamento incompleto",
      "Cisto de corpo lúteo hemorrágico",
      "Gravidez ectópica"
    ],
    "correctAnswer": 3,
    "explanation": "Atraso menstrual, dor em fossa ilíaca direita, sangramento discreto, β-hCG positivo (1.500 mUI/mL) com útero vazio e massa anexial à ultrassonografia transvaginal: gravidez ectópica (tubária). Com β-hCG acima da zona discriminatória (cerca de 1.500–3.500) e útero vazio, a gestação intrauterina é improvável. A conduta depende da estabilidade e dos critérios para metotrexato ou cirurgia.",
    "commentary": "Apendicite na gravidez (A): não explica útero vazio com massa anexial.\n\nAbortamento incompleto (B): haveria restos ovulares intrauterinos e colo aberto.\n\nCisto de corpo lúteo hemorrágico (C): pode coexistir com gestação, mas útero vazio com β-hCG positivo e massa anexial indica ectópica.",
    "reference": "Febrasgo – Gravidez ectópica; ACOG Practice Bulletin nº 193 (2018)",
    "tags": [
      "gravidez ectópica",
      "beta-hCG",
      "zona discriminatória",
      "emergência ginecológica"
    ],
    "tip": "β-hCG positivo + útero vazio + massa anexial = ectópica."
  },
  {
    "id": "viv2026-72",
    "module": "Ginecologia e Obstetrícia",
    "text": "O parâmetro ultrassonográfico mais preciso para determinar a idade gestacional no primeiro trimestre é:",
    "options": [
      "Comprimento Cabeça-Nádega (CCN)",
      "Diâmetro Biparietal (DBP)",
      "Comprimento do Fêmur (CF)",
      "Circunferência Abdominal (CA)"
    ],
    "correctAnswer": 0,
    "explanation": "No primeiro trimestre, o comprimento cabeça-nádega (CCN), medido até cerca de 14 semanas (CCN até 84 mm), é o parâmetro ultrassonográfico mais preciso para datar a gestação (margem de erro de ± 5–7 dias). Se a diferença entre a DUM e o CCN for maior que 7 dias, prevalece a datação pelo ultrassom.",
    "commentary": "DBP (B), comprimento do fêmur (C) e circunferência abdominal (D): são usados no segundo e terceiro trimestres, com margem de erro maior.",
    "reference": "ACOG Committee Opinion nº 700 – Methods for Estimating the Due Date (2017); ISUOG",
    "tags": [
      "idade gestacional",
      "comprimento cabeça-nádega",
      "ultrassonografia obstétrica"
    ],
    "tip": "Datação mais precisa: CCN no 1º trimestre."
  },
  {
    "id": "viv2026-73",
    "module": "Ginecologia e Obstetrícia",
    "text": "Sobre a Terapia de Reposição Hormonal (TRH) na menopausa, analise as afirmações:\n\nI. A indicação primária da TRH é o alívio dos sintomas vasomotores (fogachos) e geniturinários que impactam a qualidade de vida.\nII. Em mulheres com útero, é obrigatória a associação de progestagênio ao estrogênio para proteção endometrial.\nIII. A TRH está indicada como prevenção primária de doença cardiovascular em todas as mulheres após os 60 anos.\n\nDessa forma, é CORRETO afirmar:",
    "options": [
      "Apenas a proposição I está correta",
      "Apenas a proposição III está correta",
      "Apenas as proposições I e II estão corretas",
      "Todas estão corretas"
    ],
    "correctAnswer": 2,
    "explanation": "I: a principal indicação da terapia hormonal é o alívio dos sintomas vasomotores e geniturinários que afetam a qualidade de vida (V). II: em mulheres com útero, o progestagênio é obrigatório para proteger o endométrio da hiperplasia e do câncer (V). III: a TH não é indicada para prevenção primária de doença cardiovascular; iniciada após os 60 anos ou mais de 10 anos de menopausa, pode aumentar o risco cardiovascular (F).",
    "commentary": "Apenas I (A), apenas III (B) e todas (D): a TH não serve para prevenção cardiovascular.",
    "reference": "Febrasgo/Sobrac – Consenso de terapêutica hormonal; NAMS 2022 Position Statement",
    "tags": [
      "terapia hormonal",
      "climatério",
      "menopausa",
      "sintomas vasomotores"
    ],
    "tip": "TH: para sintomas; com útero, sempre progestagênio; não para prevenção cardiovascular."
  },
  {
    "id": "viv2026-74",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente, sexo feminino, 22 anos, refere dor pélvica crônica, dispareunia de profundidade e dismenorreia progressiva. Ao exame, nota-se nodularidade no ligamento uterossacro e útero com mobilidade reduzida. A principal hipótese diagnóstica é:",
    "options": [
      "Doença Inflamatória Pélvica crônica",
      "Endometriose",
      "Síndrome dos Ovários Policísticos",
      "Leiomiomatose uterina"
    ],
    "correctAnswer": 1,
    "explanation": "Mulher jovem com dor pélvica crônica, dispareunia de profundidade, dismenorreia progressiva, nodularidade em ligamento uterossacro e útero com mobilidade reduzida: endometriose (provavelmente profunda). A investigação é com ultrassom transvaginal com preparo intestinal ou ressonância, e o tratamento inicial pode ser clínico (progestagênios, contraceptivos).",
    "commentary": "DIP crônica (A): história de infecção, corrimento e febre; não costuma causar dismenorreia progressiva e nódulos uterossacros.\n\nSOP (C): irregularidade menstrual e hiperandrogenismo, sem dor pélvica.\n\nLeiomiomatose (D): útero aumentado e irregular com sangramento aumentado; não explica nódulos em uterossacros.",
    "reference": "ESHRE Guideline: Endometriosis (2022); Febrasgo – Endometriose",
    "tags": [
      "endometriose",
      "dor pélvica crônica",
      "dispareunia",
      "ginecologia"
    ],
    "tip": "Dismenorreia progressiva + dispareunia profunda + nódulo uterossacro = endometriose."
  },
  {
    "id": "viv2026-75",
    "module": "Ginecologia e Obstetrícia",
    "text": "A alteração fisiológica cardiovascular esperada na gestação normal é:",
    "options": [
      "Diminuição da frequência cardíaca em repouso",
      "Aumento da pressão arterial sistólica e diastólica no segundo trimestre",
      "Redução do volume plasmático com hemoconcentração",
      "Aumento do débito cardíaco e diminuição da resistência vascular periférica"
    ],
    "correctAnswer": 3,
    "explanation": "Na gestação normal, o débito cardíaco aumenta 30–50% (por aumento do volume sistólico e da frequência cardíaca), o volume plasmático aumenta cerca de 40–50% e a resistência vascular periférica diminui (efeito da progesterona, prostaglandinas e da circulação placentária de baixa resistência), com queda da pressão arterial no segundo trimestre.",
    "commentary": "Diminuição da frequência cardíaca (A): a FC aumenta cerca de 10–20 bpm.\n\nAumento da PA no 2º trimestre (B): a PA cai no 2º trimestre e volta aos níveis prévios no 3º.\n\nRedução do volume plasmático com hemoconcentração (C): o volume plasmático aumenta mais que a massa eritrocitária (anemia dilucional fisiológica).",
    "reference": "Zugaib Obstetrícia, 5ª ed.; Rezende – Obstetrícia",
    "tags": [
      "fisiologia da gestação",
      "adaptações cardiovasculares",
      "obstetrícia"
    ],
    "tip": "Gestação: DC ↑, volume plasmático ↑, RVP ↓, PA ↓ no 2º trimestre."
  },
  {
    "id": "viv2026-76",
    "module": "Ginecologia e Obstetrícia",
    "text": "Casal tenta engravidar há 14 meses sem sucesso. A mulher tem ciclos regulares e o homem tem espermograma normal. A histerossalpingografia mostra obstrução tubária bilateral. A conduta para obtenção de gravidez é:",
    "options": [
      "Fertilização In Vitro",
      "Inseminação Intrauterina",
      "Indução da ovulação com citrato de clomifeno",
      "Coito programado"
    ],
    "correctAnswer": 0,
    "explanation": "Casal com mais de 12 meses de tentativas (infertilidade), espermograma normal, ciclos regulares e obstrução tubária bilateral na histerossalpingografia: com as duas tubas obstruídas, a fecundação natural não é possível, e o tratamento indicado é a fertilização in vitro, que dispensa as tubas. A cirurgia tubária reconstrutiva é opção limitada a casos selecionados (obstrução proximal ou distal leve).",
    "commentary": "Inseminação intrauterina (B): exige ao menos uma tuba pérvia.\n\nIndução da ovulação com clomifeno (C) e coito programado (D): a paciente ovula e o problema é tubário; sem tubas pérvias não há fecundação.",
    "reference": "ASRM – Role of tubal surgery in the era of assisted reproductive technology (2021); Febrasgo – Infertilidade",
    "tags": [
      "infertilidade",
      "fator tubário",
      "fertilização in vitro",
      "reprodução assistida"
    ],
    "tip": "Obstrução tubária bilateral: FIV."
  },
  {
    "id": "viv2026-77",
    "module": "Ginecologia e Obstetrícia",
    "text": "Sobre os critérios de elegibilidade para contracepção da OMS, analise as sentenças:\n\n1. O tabagismo em mulheres com mais de 35 anos é categoria 4 (contraindicação absoluta)\n\npara uso de anticoncepcionais combinados orais.\n2. O uso de DIU de cobre em mulheres nulíparas é proscrito (Categoria 4) devido ao risco de expulsão.\n3. A amamentação exclusiva com menos de 6 semanas pós-parto é categoria 4 para uso de contraceptivos contendo estrogênio.\n\nConsiderando-se as afirmativas como verdadeiras (V) ou falsas (F), a alternativa CORRETA é:",
    "options": [
      "1-V, 2-V, 3-V",
      "1-F, 2-V, 3-V",
      "1-V, 2-F, 3-V",
      "1-V, 2-V, 3-F"
    ],
    "correctAnswer": 2,
    "explanation": "1: tabagismo após os 35 anos é categoria 4 para combinados se ≥ 15 cigarros/dia (categoria 3 se < 15); o gabarito considera a afirmação verdadeira (V). 2: o DIU de cobre em nulíparas é categoria 2 (vantagens superam riscos), não proscrito (F). 3: amamentação com menos de 6 semanas pós-parto é categoria 4 para métodos com estrogênio (V).",
    "commentary": "Todas V (A) e 1-V, 2-V, 3-F (D): o DIU de cobre não é proscrito em nulíparas.\n\n1-F, 2-V, 3-V (B): o tabagismo após os 35 anos (≥ 15 cigarros/dia) é categoria 4.",
    "reference": "OMS – Critérios médicos de elegibilidade para uso de métodos anticoncepcionais, 5ª ed. (2015)",
    "tags": [
      "critérios de elegibilidade da OMS",
      "anticoncepção",
      "DIU de cobre",
      "tabagismo"
    ],
    "alert": "Precisão: o tabagismo em mulheres > 35 anos é categoria 4 apenas com ≥ 15 cigarros/dia (categoria 3 se < 15). O gabarito considera a sentença 1 verdadeira.",
    "tip": "DIU em nulípara: categoria 2. ACO + tabagismo ≥ 35 anos: 3 (< 15 cig) ou 4 (≥ 15 cig)."
  },
  {
    "id": "viv2026-78",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente, sexo feminino, 45 anos, com sangramento uterino anormal e útero aumentado de volume, com contornos irregulares à palpação. O ultrassom mostra múltiplos nódulos hipoecoicos intramurais e subserosos. O diagnóstico CORRETO é:",
    "options": [
      "Adenomiose",
      "Leiomiomatose uterina",
      "Pólipos endometriais",
      "Sarcoma uterino"
    ],
    "correctAnswer": 1,
    "explanation": "Mulher de 45 anos com sangramento uterino anormal e útero aumentado de contornos irregulares, com múltiplos nódulos hipoecoicos intramurais e subserosos ao ultrassom: leiomiomatose uterina (miomas), os tumores pélvicos mais comuns da mulher.",
    "commentary": "Adenomiose (A): útero aumentado de forma globosa e difusa, com dismenorreia e miométrio heterogêneo, sem nódulos bem delimitados.\n\nPólipos endometriais (C): lesões intracavitárias, sem aumento irregular do útero.\n\nSarcoma uterino (D): raro, suspeito em massa de crescimento rápido, sobretudo na pós-menopausa.",
    "reference": "Febrasgo – Miomatose uterina; FIGO PALM-COEIN",
    "tags": [
      "mioma uterino",
      "leiomiomatose",
      "sangramento uterino anormal",
      "ginecologia"
    ],
    "tip": "Útero aumentado e irregular com nódulos hipoecoicos = miomas."
  },
  {
    "id": "viv2026-79",
    "module": "Ginecologia e Obstetrícia",
    "text": "A definição de colo do útero satisfatório para avaliação na colposcopia é:",
    "options": [
      "Teste de Schiller negativo (iodo positivo)",
      "Presença de epitélio acetobranco após aplicação de ácido acético",
      "Ausência de vasos atípicos na zona de transformação",
      "Visualização completa da junção escamo-colunar"
    ],
    "correctAnswer": 3,
    "explanation": "Na colposcopia, o exame é considerado adequado (antes chamado satisfatório) quando permite visualizar completamente a junção escamocolunar (zona de transformação tipo 1 ou 2). Se a JEC não é visível por completo (zona de transformação tipo 3), a avaliação do canal endocervical é necessária.",
    "commentary": "Teste de Schiller negativo (A): reflete captação normal de iodo, não a visualização da JEC.\n\nEpitélio acetobranco (B): é achado anormal a ser avaliado, não critério de exame satisfatório.\n\nAusência de vasos atípicos (C): é ausência de achado anormal, não define a adequação do exame.",
    "reference": "Nomenclatura colposcópica IFCPC (Rio 2011); INCA – Diretrizes de rastreamento do câncer do colo do útero",
    "tags": [
      "colposcopia",
      "junção escamocolunar",
      "zona de transformação",
      "câncer do colo do útero"
    ],
    "tip": "Colposcopia satisfatória = JEC totalmente visível."
  },
  {
    "id": "viv2026-80",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente, sexo feminino, 55 anos, queixa-se de perda involuntária de urina precedida por forte desejo miccional (urgência), que ocorre várias vezes ao dia e à noite. Não perde urina ao tossir. O diagnóstico clínico é:",
    "options": [
      "Incontinência Urinária de Urgência",
      "Incontinência Urinária de Esforço",
      "Incontinência Urinária Mista",
      "Fístula Vesicovaginal"
    ],
    "correctAnswer": 0,
    "explanation": "Perda involuntária de urina precedida de urgência miccional, várias vezes ao dia e à noite (noctúria), sem perda aos esforços: incontinência urinária de urgência, componente da síndrome da bexiga hiperativa. O tratamento começa com medidas comportamentais (treinamento vesical, ajuste de líquidos, fisioterapia) e, se necessário, antimuscarínicos ou mirabegrona.",
    "commentary": "Incontinência de esforço (B): perda ao tossir, espirrar ou fazer força, sem urgência.\n\nIncontinência mista (C): associa urgência e esforço; aqui não há perda aos esforços.\n\nFístula vesicovaginal (D): perda contínua, sem urgência, geralmente após cirurgia ou parto obstruído.",
    "reference": "AUA/SUFU Guideline on Overactive Bladder (2024); Febrasgo – Incontinência urinária",
    "tags": [
      "incontinência urinária de urgência",
      "bexiga hiperativa",
      "uroginecologia"
    ],
    "tip": "Urgência antes da perda = incontinência de urgência."
  },
  {
    "id": "viv2026-81",
    "module": "Saúde Coletiva",
    "text": "Paciente, sexo feminino, 35 anos, assintomática e sem histórico familiar de doenças, solicita uma ressonância magnética de corpo inteiro para \"check-up\". O médico explica que o exame não é indicado e pode gerar danos por falsos-positivos e intervenções desnecessárias. O nível de prevenção aplicado é:",
    "options": [
      "Prevenção Terciária",
      "Prevenção Primária",
      "Prevenção Quaternária",
      "Prevenção Secundária"
    ],
    "correctAnswer": 2,
    "explanation": "Ao recusar uma ressonância de corpo inteiro sem indicação, explicando os riscos de falsos positivos, sobrediagnóstico e intervenções desnecessárias, o médico pratica a prevenção quaternária: identificar pessoas em risco de medicalização excessiva e protegê-las de intervenções invasivas ou sem benefício, propondo alternativas eticamente aceitáveis.",
    "commentary": "Terciária (A): reduz complicações e incapacidades de doença já estabelecida.\n\nPrimária (B): atua antes da doença, com promoção e proteção específica.\n\nSecundária (D): rastreamento e diagnóstico precoce — o que, nesse caso, seria justamente o exame sem indicação.",
    "reference": "Jamoulle M. Prevenção quaternária; Norman AH, Tesser CD. Prevenção quaternária na atenção primária, Cad Saúde Pública 2009",
    "tags": [
      "prevenção quaternária",
      "sobrediagnóstico",
      "check-up",
      "medicina preventiva"
    ],
    "tip": "Evitar exame ou tratamento desnecessário = prevenção quaternária."
  },
  {
    "id": "viv2026-82",
    "module": "Saúde Coletiva",
    "text": "A definição correta de Especificidade de um teste diagnóstico é:",
    "options": [
      "Probabilidade de um indivíduo ter a doença dado que o teste foi positivo",
      "Capacidade do teste de identificar corretamente os indivíduos que não possuem a doença (Verdadeiros Negativos)",
      "Capacidade do teste de identificar corretamente os indivíduos que possuem a doença (Verdadeiros Positivos)",
      "Probabilidade de um indivíduo não ter a doença dado que o teste foi negativo"
    ],
    "correctAnswer": 1,
    "explanation": "Especificidade é a capacidade do teste de identificar corretamente os que não têm a doença — a proporção de verdadeiros negativos entre os não doentes: VN / (VN + FP).",
    "commentary": "Probabilidade de doença dado teste positivo (A): é o valor preditivo positivo.\n\nIdentificar quem tem a doença (C): é a sensibilidade.\n\nProbabilidade de não ter a doença dado teste negativo (D): é o valor preditivo negativo.",
    "reference": "Fletcher RH, Fletcher SW. Epidemiologia Clínica: elementos essenciais, 5ª ed.",
    "tags": [
      "especificidade",
      "testes diagnósticos",
      "epidemiologia"
    ],
    "tip": "Especificidade = VN / (VN + FP)."
  },
  {
    "id": "viv2026-83",
    "module": "Saúde Coletiva",
    "text": "Sobre os tipos de estudos epidemiológicos, analise as afirmações:\n\nI. O Ensaio Clínico Randomizado é o padrão-ouro para avaliar a eficácia de novas intervenções terapêuticas, minimizando viés de seleção através da aleatorização.\nII. O Estudo de Coorte parte da exposição para o desfecho, permitindo o cálculo da incidência e do Risco Relativo.\nIII. O Estudo Caso-Controle parte do desfecho para a exposição, sendo ideal para doenças raras, e utiliza o Odds Ratio como medida de associação.\n\nDessa forma, é CORRETO afirmar:",
    "options": [
      "Apenas a proposição I está correta",
      "Apenas a proposição III está correta",
      "Apenas as proposições I e II estão corretas",
      "Todas estão corretas"
    ],
    "correctAnswer": 3,
    "explanation": "I: o ensaio clínico randomizado é o padrão-ouro para avaliar eficácia de intervenções; a randomização equilibra fatores conhecidos e desconhecidos e minimiza viés de seleção e confusão (V). II: a coorte parte da exposição para o desfecho, medindo incidência e risco relativo (V). III: o caso-controle parte do desfecho para investigar exposições passadas, é ideal para doenças raras e usa odds ratio (V).",
    "commentary": "Apenas I (A), apenas III (B) e I e II (C): as três proposições estão corretas.",
    "reference": "Medronho RA. Epidemiologia, 2ª ed.; Fletcher RH. Epidemiologia Clínica",
    "tags": [
      "desenhos de estudo",
      "ensaio clínico randomizado",
      "estudo de coorte",
      "estudo caso-controle",
      "epidemiologia"
    ],
    "tip": "ECR: eficácia. Coorte: RR, incidência. Caso-controle: OR, doença rara."
  },
  {
    "id": "viv2026-84",
    "module": "Saúde Coletiva",
    "text": "Paciente, sexo masculino, 50 anos, assintomático, sem histórico familiar de câncer colorretal, avaliação preventiva em serviço com acesso a rastreamento organizado de câncer colorretal. A recomendação de rastreamento mais adequada é:",
    "options": [
      "Colonoscopia a cada 5 anos, independentemente dos achados",
      "Pesquisa de sangue oculto nas fezes anual ou colonoscopia a cada 10 anos",
      "Tomografia computadorizada de abdome total a cada 3 anos",
      "Rastreamento não indicado, pois o paciente é assintomático e não tem histórico familiar"
    ],
    "correctAnswer": 1,
    "explanation": "Para adultos de risco médio, as recomendações de rastreamento do câncer colorretal (USPSTF, sociedades brasileiras) incluem, a partir dos 45–50 anos e até 75: pesquisa de sangue oculto nas fezes (imunoquímica) anual ou colonoscopia a cada 10 anos, entre outras opções (retossigmoidoscopia a cada 5 anos, colonografia por TC a cada 5 anos).",
    "commentary": "Colonoscopia a cada 5 anos independentemente dos achados (A): em risco médio com exame normal, o intervalo é de 10 anos.\n\nTC de abdome a cada 3 anos (C): não é método de rastreamento (a colonografia por TC é outro exame, a cada 5 anos).\n\nRastreamento não indicado (D): adultos assintomáticos de risco médio a partir dos 45–50 anos devem ser rastreados.",
    "reference": "USPSTF – Colorectal Cancer Screening (2021); Sociedade Brasileira de Coloproctologia",
    "tags": [
      "câncer colorretal",
      "rastreamento",
      "pesquisa de sangue oculto",
      "colonoscopia"
    ],
    "tip": "Risco médio: sangue oculto anual ou colonoscopia a cada 10 anos (45/50–75 anos)."
  },
  {
    "id": "viv2026-85",
    "module": "Saúde Coletiva",
    "text": "A medida de frequência que descreve a proporção de casos existentes (novos e antigos) de uma doença em uma população em um determinado momento é:",
    "options": [
      "Densidade de Incidência",
      "Incidência Acumulada",
      "Letalidade",
      "Prevalência"
    ],
    "correctAnswer": 3,
    "explanation": "Prevalência é a proporção de casos existentes (novos e antigos) de uma doença em uma população em um momento (prevalência pontual) ou período (prevalência de período). Depende da incidência e da duração da doença (P ≈ I × D).",
    "commentary": "Densidade de incidência (A): casos novos por pessoa-tempo em risco.\n\nIncidência acumulada (B): proporção de casos novos em um período, entre os inicialmente em risco.\n\nLetalidade (C): proporção de óbitos entre os doentes.",
    "reference": "Rouquayrol MZ, Gurgel M. Epidemiologia & Saúde, 8ª ed.",
    "tags": [
      "prevalência",
      "medidas de frequência",
      "epidemiologia"
    ],
    "tip": "Prevalência = casos existentes (novos + antigos)."
  },
  {
    "id": "viv2026-86",
    "module": "Saúde Coletiva",
    "text": "Paciente tabagista de 40 cigarros/dia refere que \"fumar é um prazer e não pensa em parar no momento\", apesar de tosse matinal. O estágio de mudança comportamental (Prochaska e DiClemente) e a conduta são:",
    "options": [
      "Contemplação; discutir barreiras e marcar data para parar",
      "Preparação; prescrever terapia de reposição de nicotina imediatamente",
      "Pré-contemplação; abordagem breve informando os riscos e deixando a porta aberta",
      "Ação; parabenizar e prevenir recaídas"
    ],
    "correctAnswer": 2,
    "explanation": "Fumante que diz que fumar é um prazer e não pensa em parar no momento está na pré-contemplação, segundo o modelo transteórico de Prochaska e DiClemente. A conduta é uma abordagem breve e motivacional: informar riscos de forma personalizada (relacionando à tosse matinal), sem confronto, e deixar a porta aberta para retomar o assunto nas próximas consultas.",
    "commentary": "Contemplação (A): a pessoa considera parar, mas está ambivalente; aqui não há intenção.\n\nPreparação com reposição de nicotina imediata (B): a pessoa planeja parar em breve; não é o caso.\n\nAção (D): a pessoa já parou de fumar recentemente.",
    "reference": "Ministério da Saúde/INCA – PCDT do Tabagismo (2020); Prochaska JO, DiClemente CC. Stages of change",
    "tags": [
      "tabagismo",
      "estágios de mudança",
      "entrevista motivacional",
      "atenção primária à saúde"
    ],
    "tip": "Pré-contemplação: informar e deixar a porta aberta, sem confronto."
  },
  {
    "id": "viv2026-87",
    "module": "Saúde Coletiva",
    "text": "Sobre a hierarquia das evidências científicas, analise as sentenças:\n\n1. Revisões Sistemáticas com Metanálise de Ensaios Clínicos Randomizados ocupam o topo da pirâmide de evidência para questões terapêuticas.\n2. Estudos de Coorte fornecem evidências mais fortes do que Estudos de Caso-Controle.\n3. A opinião de especialistas é considerada um nível elevado de evidência, superior a séries de casos.\n\nConsiderando-se as afirmativas como verdadeiras (V) ou falsas (F), a alternativa CORRETA é:",
    "options": [
      "1-V, 2-V, 3-V",
      "1-V, 2-V, 3-F",
      "1-F, 2-V, 3-V",
      "1-V, 2-F, 3-V"
    ],
    "correctAnswer": 1,
    "explanation": "Na pirâmide de evidências para questões terapêuticas: no topo, revisões sistemáticas com metanálise de ensaios clínicos randomizados; depois, ensaios clínicos randomizados; estudos de coorte; caso-controle; séries e relatos de casos; e, na base, opinião de especialistas. Portanto: 1 (V), 2 (V — coorte é superior a caso-controle) e 3 (F — opinião de especialistas é o nível mais baixo, abaixo de séries de casos).",
    "commentary": "Todas V (A), 1-F, 2-V, 3-V (C) e 1-V, 2-F, 3-V (D): a opinião de especialistas está na base da pirâmide.",
    "reference": "Oxford Centre for Evidence-Based Medicine – Levels of Evidence (2011); GRADE Working Group",
    "tags": [
      "medicina baseada em evidências",
      "níveis de evidência",
      "epidemiologia"
    ],
    "tip": "Pirâmide: RS/metanálise > ECR > coorte > caso-controle > série de casos > opinião."
  },
  {
    "id": "viv2026-88",
    "module": "Saúde Coletiva",
    "text": "Paciente, 65 anos, hígido, comparece à Unidade Básica de Saúde (UBS) para atualização vacinal. Nunca recebeu vacina contra Streptococcus pneumoniae. De acordo com recomendações de sociedades científicas brasileiras para prevenção de doença pneumocócica invasiva em idosos, a conduta mais adequada é:",
    "options": [
      "Não indicar vacinação pneumocócica, pois o paciente não apresenta comorbidades ou imunossupressão",
      "Administrar apenas a Vacina Pneumocócica Polissacarídica 23-Valente (VPP23), dose única, sem necessidade de outras doses",
      "Administrar apenas a Vacina Pneumocócica Conjugada 13-Valente (VPC13), dose única, sem necessidade de outras doses",
      "Administrar Vacina Pneumocócica Conjugada 13-valente (VPC13), seguida, após intervalo recomendado, da Vacina Pneumocócica Polissacarídica 23-Valente (VPP23)"
    ],
    "correctAnswer": 3,
    "explanation": "Para idosos a partir de 60–65 anos, a SBIm e a SBGG recomendam iniciar com uma vacina pneumocócica conjugada (VPC13 na época; hoje VPC15 ou VPC20) seguida, após 6–12 meses, da vacina polissacarídica 23-valente (VPP23), com segunda dose da VPP23 após 5 anos — esquema sequencial que amplia a cobertura de sorotipos e a resposta imune. (Com VPC20, a VPP23 é dispensável.) No SUS, a VPP23 é ofertada a idosos institucionalizados e grupos especiais.",
    "commentary": "Não indicar vacinação (A): a idade ≥ 60–65 anos já é indicação, mesmo sem comorbidades.\n\nApenas VPP23 (B) e apenas VPC13 (C): o esquema recomendado pelas sociedades é sequencial, combinando conjugada e polissacarídica.",
    "reference": "SBIm/SBGG – Guia de Vacinação Geriatria (2024); Calendário de vacinação SBIm do idoso",
    "tags": [
      "vacina pneumocócica",
      "vacinação do idoso",
      "imunizações",
      "geriatria"
    ],
    "tip": "Idoso: conjugada primeiro (VPC13/15) e VPP23 depois (6–12 meses)."
  },
  {
    "id": "viv2026-89",
    "module": "Saúde Coletiva",
    "text": "O tipo de viés que ocorre quando a sobrevida aparente de pacientes rastreados parece maior apenas porque o diagnóstico foi feito mais cedo, sem que haja aumento real na expectativa de vida, é:",
    "options": [
      "Viés de tempo de duração (Length-time bias)",
      "Viés de seleção",
      "Viés de tempo de chumbo (Lead-time bias)",
      "Viés de confusão"
    ],
    "correctAnswer": 2,
    "explanation": "O viés de tempo de antecipação (lead-time bias) ocorre quando o rastreamento antecipa o diagnóstico e, por isso, a sobrevida medida a partir do diagnóstico parece maior, sem que a morte ocorra mais tarde. A forma de evitar esse viés é comparar mortalidade, e não sobrevida.",
    "commentary": "Viés de duração (length-time bias) (A): o rastreamento tende a detectar doenças de evolução mais lenta (e melhor prognóstico), que ficam mais tempo na fase pré-clínica.\n\nViés de seleção (B): diferenças sistemáticas entre quem participa e quem não participa (ex.: voluntários mais saudáveis).\n\nViés de confusão (D): distorção da associação por uma terceira variável ligada à exposição e ao desfecho.",
    "reference": "Fletcher RH, Fletcher SW. Epidemiologia Clínica: elementos essenciais, 5ª ed. (rastreamento)",
    "tags": [
      "vieses",
      "viés de tempo de antecipação",
      "rastreamento",
      "epidemiologia"
    ],
    "tip": "Lead-time: diagnóstico antecipado “alonga” a sobrevida sem adiar a morte."
  },
  {
    "id": "viv2026-90",
    "module": "Saúde Coletiva",
    "text": "Médico precisa informar a um paciente o diagnóstico de câncer metastático. Ele prepara o ambiente, verifica o que o paciente já sabe e, em seguida, pergunta: \"O senhor gostaria de saber todos os detalhes do diagnóstico agora ou prefere que conversemos de outra forma?\". A etapa do protocolo SPIKES aplicada é:",
    "options": [
      "Knowledge (Conhecimento)",
      "Invitation (Convite)",
      "Perception (Percepção)",
      "Strategy (Estratégia)"
    ],
    "correctAnswer": 1,
    "explanation": "Protocolo SPIKES para comunicar más notícias: S (Setting — preparar o ambiente), P (Perception — avaliar o que o paciente já sabe), I (Invitation — convite: perguntar o quanto e como o paciente quer saber), K (Knowledge — transmitir a informação), E (Emotions — acolher as emoções com empatia) e S (Strategy/Summary — plano e resumo). Perguntar se o paciente quer saber todos os detalhes agora é a etapa Invitation.",
    "commentary": "Knowledge (A): é o momento de dar a informação, em linguagem clara e em pequenas porções.\n\nPerception (C): é perguntar o que o paciente já sabe ou entende — já feito antes no caso.\n\nStrategy (D): é a etapa final, de planejamento e resumo.",
    "reference": "Baile WF et al. SPIKES — A six-step protocol for delivering bad news, The Oncologist 2000",
    "tags": [
      "comunicação de más notícias",
      "protocolo SPIKES",
      "comunicação médico-paciente",
      "ética médica"
    ],
    "tip": "SPIKES: Setting, Perception, Invitation, Knowledge, Emotions, Strategy."
  },
  {
    "id": "viv2026-91",
    "module": "Saúde Coletiva",
    "text": "Durante a consulta de uma família multiproblemática, o médico desenha um diagrama que representa graficamente a estrutura familiar, as relações afetivas entre os membros e os eventos de saúde ao longo de gerações. A ferramenta utilizada é:",
    "options": [
      "Genograma",
      "Ecomapa",
      "Ciclo de Vida Familiar",
      "APGAR Familiar"
    ],
    "correctAnswer": 0,
    "explanation": "O genograma representa graficamente a estrutura familiar ao longo de pelo menos três gerações, com as relações afetivas entre os membros, doenças, eventos de vida e padrões repetitivos. É ferramenta de abordagem familiar na Medicina de Família.",
    "commentary": "Ecomapa (B): representa as relações da família com o meio externo (escola, trabalho, igreja, serviços de saúde).\n\nCiclo de vida familiar (C): descreve as fases pelas quais a família passa (casal, filhos pequenos, adolescentes, ninho vazio).\n\nAPGAR familiar (D): questionário que avalia a satisfação com o funcionamento familiar.",
    "reference": "McGoldrick M, Gerson R. Genogramas; Gusso G, Lopes JMC. Tratado de Medicina de Família e Comunidade",
    "tags": [
      "genograma",
      "abordagem familiar",
      "medicina de família e comunidade"
    ],
    "tip": "Genograma: dentro da família (gerações). Ecomapa: família × comunidade."
  },
  {
    "id": "viv2026-92",
    "module": "Saúde Coletiva",
    "text": "A ação que corresponde à Prevenção Terciária é:",
    "options": [
      "Uso de estatinas em pacientes com dislipidemia sem evento cardiovascular prévio",
      "Rastreamento de hipertensão arterial em adultos assintomáticos",
      "Vacinação contra hepatite B",
      "Reabilitação física e reintegração social de um paciente pós-AVC"
    ],
    "correctAnswer": 3,
    "explanation": "A prevenção terciária atua em doença já estabelecida, para reduzir sequelas, incapacidades e complicações e promover a reintegração. Reabilitação física e reintegração social após AVC é exemplo típico.",
    "commentary": "Estatina em dislipidêmico sem evento prévio (A): é prevenção primária de doença cardiovascular (controle de fator de risco).\n\nRastreamento de hipertensão (B): prevenção secundária (diagnóstico precoce).\n\nVacinação contra hepatite B (C): prevenção primária (proteção específica).",
    "reference": "Leavell HR, Clark EG. Medicina Preventiva",
    "tags": [
      "níveis de prevenção",
      "prevenção terciária",
      "reabilitação",
      "medicina preventiva"
    ],
    "tip": "Reabilitação = prevenção terciária."
  },
  {
    "id": "viv2026-93",
    "module": "Saúde Coletiva",
    "text": "Sobre o Valor Preditivo Positivo (VPP), analise as afirmações:\n\nI. Representa a probabilidade de um indivíduo ter a doença dado que o teste foi positivo.\nII. É diretamente influenciado pela prevalência da doença na população testada: quanto maior a prevalência, maior o VPP.\nIII. É uma característica intrínseca do teste, não variando com o cenário clínico.\n\nDessa forma, é CORRETO afirmar:",
    "options": [
      "Apenas a proposição I está correta",
      "Apenas a proposição II está correta",
      "Apenas as proposições I e II estão corretas",
      "Todas estão corretas"
    ],
    "correctAnswer": 2,
    "explanation": "I: o valor preditivo positivo é a probabilidade de ter a doença dado que o teste foi positivo (V). II: o VPP depende da prevalência — quanto maior a prevalência (probabilidade pré-teste), maior o VPP (V). III: por depender da prevalência, o VPP varia conforme o cenário clínico; características intrínsecas do teste são a sensibilidade e a especificidade (F).",
    "commentary": "Apenas I (A) e apenas II (B): as proposições I e II estão corretas.\n\nTodas (D): o VPP não é característica intrínseca do teste.",
    "reference": "Fletcher RH, Fletcher SW. Epidemiologia Clínica: elementos essenciais, 5ª ed.",
    "tags": [
      "valor preditivo positivo",
      "prevalência",
      "testes diagnósticos",
      "epidemiologia"
    ],
    "tip": "VPP sobe com a prevalência; sensibilidade e especificidade não mudam."
  },
  {
    "id": "viv2026-94",
    "module": "Saúde Coletiva",
    "text": "Paciente, sexo masculino, 45 anos, diabético e hipertenso, tem LDL-c de 160 mg/dL. A meta terapêutica e a conduta de prevenção secundária/primária de alto risco é:",
    "options": [
      "Apenas dieta e exercícios físicos por 6 meses",
      "Iniciar estatina de alta potência e mudanças no estilo de vida",
      "Iniciar fibrato para reduzir o LDL-c",
      "Não tratar, pois o paciente é assintomático"
    ],
    "correctAnswer": 1,
    "explanation": "Homem de 45 anos com diabetes e hipertensão e LDL-c de 160 mg/dL: pela Diretriz Brasileira de Dislipidemias, o diabético com fatores de risco ou estratificadores é de alto risco cardiovascular, com meta de LDL-c < 70 mg/dL (redução ≥ 50%). Indica-se estatina de alta potência (atorvastatina 40–80 mg ou rosuvastatina 20–40 mg), associada a mudanças no estilo de vida.",
    "commentary": "Apenas dieta e exercícios por 6 meses (A): no alto risco, a estatina é iniciada junto com as mudanças de estilo de vida.\n\nFibrato para reduzir LDL (C): fibratos agem sobre os triglicerídeos; o tratamento do LDL é estatina.\n\nNão tratar por ser assintomático (D): a prevenção é justamente para quem ainda não teve evento.",
    "reference": "Sociedade Brasileira de Cardiologia – Atualização da Diretriz Brasileira de Dislipidemias e Prevenção da Aterosclerose (2017, atualização 2025)",
    "tags": [
      "dislipidemia",
      "estatina",
      "risco cardiovascular",
      "diabetes mellitus"
    ],
    "tip": "Diabético com fatores de risco: alto risco → estatina de alta potência, LDL < 70."
  },
  {
    "id": "viv2026-95",
    "module": "Saúde Coletiva",
    "text": "A medida de associação tipicamente obtida em estudos de caso-controle, que estima quantas vezes a chance de exposição é maior nos doentes em comparação aos não doentes, é:",
    "options": [
      "Odds Ratio (Razão de Chances)",
      "Risco Relativo",
      "Risco Atribuível",
      "Razão de Prevalência"
    ],
    "correctAnswer": 0,
    "explanation": "Nos estudos caso-controle, que partem do desfecho e comparam a exposição prévia entre doentes (casos) e não doentes (controles), a medida de associação é a razão de chances (odds ratio): quantas vezes a chance de exposição é maior entre os casos que entre os controles. Em doenças raras, aproxima-se do risco relativo.",
    "commentary": "Risco relativo (B): obtido em coortes e ensaios clínicos, que medem incidência.\n\nRisco atribuível (C): diferença de incidência entre expostos e não expostos, também de coortes.\n\nRazão de prevalência (D): medida típica de estudos transversais.",
    "reference": "Medronho RA. Epidemiologia, 2ª ed.",
    "tags": [
      "odds ratio",
      "estudo caso-controle",
      "medidas de associação",
      "epidemiologia"
    ],
    "tip": "Caso-controle → OR. Coorte → RR. Transversal → razão de prevalência."
  },
  {
    "id": "viv2026-96",
    "module": "Saúde Coletiva",
    "text": "Paciente, sexo feminino, 28 anos, sexualmente ativa, com exame citopatológico do colo do útero (Papanicolau) mostrando Lesão Intraepitelial Escamosa de Baixo Grau (LSIL), sem achados clínicos relevantes ao exame ginecológico. De acordo com as diretrizes do Ministério da Saúde/Instituto Nacional de Câncer (INCA) para rastreamento do câncer do colo do útero em mulheres ≥ 25 anos, a conduta mais adequada é:",
    "options": [
      "Realizar conização do colo do útero",
      "Repetir o exame citopatológico em 6 meses",
      "Encaminhar imediatamente para colposcopia",
      "Prescrever creme vaginal e repetir exame em 1 ano"
    ],
    "correctAnswer": 1,
    "explanation": "Pelas Diretrizes Brasileiras do INCA (citologia, 2016), mulheres com 25 anos ou mais e citologia com LSIL devem repetir o exame citopatológico em 6 meses. Se a repetição for negativa duas vezes (6 e 12 meses), retornam ao rastreamento trienal; se persistir alteração, são encaminhadas à colposcopia. Abaixo dos 25 anos, repete-se em 3 anos.",
    "commentary": "Conização (A): é tratamento de lesão de alto grau confirmada, não de LSIL.\n\nColposcopia imediata (C): não é a conduta inicial para LSIL em ≥ 25 anos pela diretriz citológica (é para LSIL persistente).\n\nCreme vaginal e repetir em 1 ano (D): não há tratamento medicamentoso para LSIL.",
    "reference": "INCA – Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (2016)",
    "tags": [
      "LSIL",
      "câncer do colo do útero",
      "rastreamento",
      "saúde da mulher"
    ],
    "tip": "LSIL ≥ 25 anos: repetir citologia em 6 meses."
  },
  {
    "id": "viv2026-97",
    "module": "Saúde Coletiva",
    "text": "Sobre os erros em testes estatísticos, analise as sentenças:\n\n1. O Erro Tipo I (alfa) ocorre quando rejeitamos a hipótese nula sendo ela verdadeira (falso-positivo).\n2. O Erro Tipo II (beta) ocorre quando não rejeitamos a hipótese nula sendo ela falsa (falso-negativo).\n3. O Poder do estudo é a capacidade de detectar uma diferença quando ela realmente existe (1-beta).\n\nConsiderando-se as afirmativas como verdadeiras (V) ou falsas (F), a alternativa CORRETA é:",
    "options": [
      "1-F, 2-V, 3-V",
      "1-V, 2-F, 3-V",
      "1-V, 2-V, 3-F",
      "1-V, 2-V, 3-V"
    ],
    "correctAnswer": 3,
    "explanation": "1: erro tipo I (alfa) é rejeitar a hipótese nula quando ela é verdadeira — concluir que há diferença quando não há (falso positivo) (V). 2: erro tipo II (beta) é não rejeitar a hipótese nula quando ela é falsa — não detectar diferença que existe (falso negativo) (V). 3: o poder do estudo (1 − beta) é a probabilidade de detectar uma diferença quando ela realmente existe (V).",
    "commentary": "1-F, 2-V, 3-V (A), 1-V, 2-F, 3-V (B) e 1-V, 2-V, 3-F (C): as três sentenças estão corretas.",
    "reference": "Medronho RA. Epidemiologia; Altman DG. Practical Statistics for Medical Research",
    "tags": [
      "bioestatística",
      "erro tipo I",
      "erro tipo II",
      "poder estatístico"
    ],
    "tip": "Alfa = falso positivo; beta = falso negativo; poder = 1 − beta."
  },
  {
    "id": "viv2026-98",
    "module": "Saúde Coletiva",
    "text": "Paciente, sexo feminino, 80 anos, com história de queda recente, usa benzidiazepínico para insônia e anti-hipertensivos. O teste \"Timed Up and Go\" (TUG) está alterado (> 20 segundos). A intervenção prioritária para prevenção de novas quedas é:",
    "options": [
      "Revisão da polifarmácia e desprescrição gradual do benzodiazepínico",
      "Restrição ao leito para evitar acidentes",
      "Prescrição de vitamina D em dose de ataque para todos os casos",
      "Indicação de bengala sem avaliação da marcha"
    ],
    "correctAnswer": 0,
    "explanation": "Idosa com queda recente, TUG alterado e uso de benzodiazepínico (fármaco de alto risco para quedas pelos critérios de Beers) e anti-hipertensivos: a intervenção prioritária é revisar a polifarmácia, com desprescrição gradual do benzodiazepínico e ajuste dos anti-hipertensivos (avaliar hipotensão postural), dentro de uma abordagem multifatorial que inclui exercícios de equilíbrio e força, avaliação visual e ambiental.",
    "commentary": "Restrição ao leito (B): aumenta fragilidade, sarcopenia e o risco de novas quedas.\n\nVitamina D em dose de ataque para todos (C): a suplementação é indicada na deficiência; doses altas em bolus podem até aumentar quedas.\n\nBengala sem avaliar a marcha (D): dispositivos de auxílio devem ser prescritos após avaliação, por fisioterapeuta.",
    "reference": "World Guidelines for Falls Prevention and Management for Older Adults (2022); AGS Beers Criteria (2023)",
    "tags": [
      "quedas",
      "polifarmácia",
      "desprescrição",
      "benzodiazepínicos",
      "geriatria"
    ],
    "tip": "Idoso que cai: revisar medicamentos (benzodiazepínico é o primeiro alvo)."
  },
  {
    "id": "viv2026-99",
    "module": "Saúde Coletiva",
    "text": "A doença de notificação compulsória imediata (em até 24 horas) às autoridades de saúde, devido ao alto potencial de disseminação e gravidade, é:",
    "options": [
      "Hipertensão Arterial Sistêmica",
      "Sarampo",
      "Diabetes Mellitus",
      "Hipotireoidismo Congênito"
    ],
    "correctAnswer": 1,
    "explanation": "O sarampo é doença de notificação compulsória imediata (em até 24 horas), já na suspeita, por sua alta transmissibilidade e pelo compromisso de eliminação, para permitir bloqueio vacinal e investigação rápida dos contatos.",
    "commentary": "Hipertensão arterial (A) e diabetes (C): doenças crônicas, não são de notificação compulsória.\n\nHipotireoidismo congênito (D): faz parte da triagem neonatal, mas não é agravo de notificação compulsória imediata.",
    "reference": "Ministério da Saúde – Lista Nacional de Notificação Compulsória (Portaria GM/MS nº 217/2023)",
    "tags": [
      "notificação compulsória",
      "sarampo",
      "vigilância epidemiológica"
    ],
    "tip": "Sarampo: notificar em até 24 h, já na suspeita."
  },
  {
    "id": "viv2026-100",
    "module": "Saúde Coletiva",
    "text": "Paciente, 40 anos, realiza mamografia que é classificada como BI-RADS 0. O significado e a conduta são:",
    "options": [
      "Achado suspeito; necessária biópsia percutânea",
      "Achado benigno; repetir o rastreamento de acordo com a idade",
      "Achado provavelmente benigno; controle radiológico em 6 meses",
      "Exame incompleto; necessita de avaliação adicional com incidências mamográficas extras ou ultrassonografia"
    ],
    "correctAnswer": 3,
    "explanation": "BI-RADS 0 significa avaliação incompleta: a mamografia não permite conclusão e é necessária avaliação adicional — incidências complementares (compressão localizada, magnificação), ultrassonografia ou comparação com exames anteriores — antes de classificar o achado.",
    "commentary": "Achado suspeito com biópsia (A): corresponde a BI-RADS 4 (ou 5, altamente sugestivo).\n\nAchado benigno com rastreamento habitual (B): corresponde a BI-RADS 2.\n\nProvavelmente benigno com controle em 6 meses (C): corresponde a BI-RADS 3.",
    "reference": "American College of Radiology – BI-RADS Atlas, 5ª ed.; Colégio Brasileiro de Radiologia",
    "tags": [
      "BI-RADS",
      "mamografia",
      "câncer de mama",
      "rastreamento"
    ],
    "tip": "BI-RADS 0 incompleto; 1 negativo; 2 benigno; 3 controle em 6 meses; 4 e 5 biópsia; 6 câncer comprovado."
  }
];
