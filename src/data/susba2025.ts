import { Question } from '../types';

// SUS-BA 2025 — residência médica do SUS Bahia (acesso direto). 45 questões, 4 alternativas.
// Gabarito conferido no gabarito comentado do AjudaMédico; explicações com texto próprio.
export const SUSBA_2025_QUESTIONS: Question[] = [
  {
    "id": "susba2025-1",
    "topography": "13",
    "topic": "Depressão maior",
    "module": "Clínica Médica",
    "text": "Homem, 48 anos de idade, com histórico de hipertensão arterial controlada e sobrepeso, apresenta queixa de fadiga persistente, dificuldade de concentração e insônia há 6 meses. Ele também relata episódios de ansiedade e tristeza que afetam suas atividades diárias. O paciente é avaliado na UBS e, após investigação, é diagnosticado com transtorno depressivo maior. Iniciado tratamento com antidepressivo. Após 2 meses, ele retorna, relatando melhora parcial dos sintomas, mas continua apresentando fadiga e insônia. Ele também menciona aumento de peso desde o início do tratamento, apesar de manter os mesmos hábitos alimentares. Não há histórico de abuso de substâncias, e os sinais vitais estão normais.\n\nDiante do caso relatado, em relação aos sintomas atuais, é correto afirmar que:",
    "options": [
      "(A) Todos os sintomas podem ter sido causados pelo antidepressivo, caso tenha sido iniciada a fluoxetina.",
      "(B) Todos os sintomas podem ter sido causados pelo antidepressivo, caso tenha sido iniciada a bupropiona.",
      "(C) O ganho de peso, mas não a insônia, pode ser decorrente do antidepressivo, caso tenha sido iniciada a mirtazapina.",
      "(D) O ganho de peso, mas não a insônia, pode ser decorrente do antidepressivo, caso tenha sido iniciada a venlafaxina."
    ],
    "correctAnswer": 2,
    "explanation": "O paciente teve resposta parcial ao antidepressivo, mantém fadiga e insônia e ganhou peso sem mudar a alimentação. A pergunta é qual fármaco explicaria o ganho de peso sem explicar a insônia.\n\nA mirtazapina bloqueia fortemente os receptores H1 de histamina (além de α2 e 5-HT2/5-HT3): isso dá sedação e aumento de apetite. Ela costuma melhorar o sono, então a insônia aqui é sintoma residual da depressão, não efeito adverso — e o ganho de peso é efeito colateral típico.",
    "commentary": "Fluoxetina (A): ISRS ativador; pode causar insônia, mas tende à neutralidade ou perda de peso no início — não explica todos os sintomas.\n\nBupropiona (B): ativadora (insônia, agitação), mas reduz peso; é usada inclusive no tratamento da obesidade.\n\nVenlafaxina (D): IRSN; pode causar insônia e não costuma causar ganho de peso relevante.",
    "reference": "Stahl — Psicofarmacologia / CANMAT 2023 — Tratamento do transtorno depressivo maior",
    "tags": [
      "psiquiatria",
      "depressão",
      "antidepressivos",
      "mirtazapina",
      "efeitos adversos"
    ],
    "tip": "Mirtazapina = sono + fome (anti-H1). Bupropiona = perde peso e tira o sono."
  },
  {
    "id": "susba2025-2",
    "topography": "13",
    "topic": "Depressão maior",
    "module": "Clínica Médica",
    "text": "Homem, 48 anos de idade, com histórico de hipertensão arterial controlada e sobrepeso, apresenta queixa de fadiga persistente, dificuldade de concentração e insônia há 6 meses. Ele também relata episódios de ansiedade e tristeza que afetam suas atividades diárias. O paciente é avaliado na UBS e, após investigação, é diagnosticado com transtorno depressivo maior. Iniciado tratamento com antidepressivo. Após 2 meses, ele retorna, relatando melhora parcial dos sintomas, mas continua apresentando fadiga e insônia. Ele também menciona aumento de peso desde o início do tratamento, apesar de manter os mesmos hábitos alimentares. Não há histórico de abuso de substâncias, e os sinais vitais estão normais.\n\nA alternativa que contém a conduta mais adequada em relação aos sintomas atuais deste paciente:",
    "options": [
      "(A) Prescrever zolpidem, para induzir o sono em curto prazo.",
      "(B) Recomendar higiene do sono, exercícios físicos regulares e perda de peso.",
      "(C) Adicionar um antipsicótico de segunda geração para controle da insônia.",
      "(D) Prescrever um suplemento de melatonina e aumentar a dose do antidepressivo."
    ],
    "correctAnswer": 1,
    "explanation": "Fadiga, insônia e ganho de peso em paciente com sobrepeso e hipertensão, com resposta parcial ao antidepressivo. Antes de acrescentar fármacos, a primeira medida é não farmacológica: higiene do sono para a insônia, exercício físico regular (que também tem efeito antidepressivo e reduz a fadiga) e perda de peso, que melhora o risco cardiovascular.",
    "commentary": "Zolpidem (A): hipnótico de curto prazo com risco de tolerância e dependência; não trata fadiga nem a depressão residual.\n\nAntipsicótico de segunda geração (C): pode ajudar no sono e potencializar o antidepressivo, mas causa ganho de peso e alterações metabólicas — piora o problema atual.\n\nMelatonina e aumento de dose (D): melatonina tem pouca evidência na insônia da depressão, e aumentar a dose pode piorar o ganho de peso.",
    "reference": "CANMAT 2023 — Depressão / Associação Brasileira do Sono — Consenso de insônia",
    "tags": [
      "psiquiatria",
      "depressão",
      "insônia",
      "higiene do sono",
      "atenção primária"
    ],
    "tip": "Sintoma residual + efeito adverso: comece pelo estilo de vida, não por mais um remédio."
  },
  {
    "id": "susba2025-3",
    "topography": "13",
    "topic": "Depressão maior",
    "module": "Clínica Médica",
    "text": "Homem, 48 anos de idade, com histórico de hipertensão arterial controlada e sobrepeso, apresenta queixa de fadiga persistente, dificuldade de concentração e insônia há 6 meses. Ele também relata episódios de ansiedade e tristeza que afetam suas atividades diárias. O\n\npaciente é avaliado na UBS e, após investigação, é diagnosticado com transtorno depressivo maior. Iniciado tratamento com antidepressivo. Após 2 meses, ele retorna, relatando melhora parcial dos sintomas, mas continua apresentando fadiga e insônia. Ele também menciona aumento de peso desde o início do tratamento, apesar de manter os mesmos hábitos alimentares. Não há histórico de abuso de substâncias, e os sinais vitais estão normais.\n\nA comorbidade, dentre as abaixo, que mais provavelmente poderia estar associada à refratariedade dos sintomas:",
    "options": [
      "(A) Hipotireoidismo.",
      "(B) Doença arterial coronariana.",
      "(C) Diabetes mellitus tipo 2.",
      "(D) Síndrome da apneia-hipopneia obstrutiva do sono."
    ],
    "correctAnswer": 3,
    "explanation": "Homem de meia-idade, com sobrepeso e hipertensão, fadiga, dificuldade de concentração e sono não reparador que não remitem com o antidepressivo: é o perfil clássico da síndrome da apneia-hipopneia obstrutiva do sono (SAHOS).\n\nA fragmentação do sono pela apneia mantém fadiga, sonolência, irritabilidade e déficit cognitivo, sintomas que se confundem com a depressão e dificultam a remissão. A investigação é feita com polissonografia (e escalas como STOP-Bang e Epworth).",
    "commentary": "Hipotireoidismo (A): causa fadiga, humor deprimido e ganho de peso, mas costuma dar hipersonia, não insônia; além disso, o caso diz que houve investigação inicial.\n\nDoença arterial coronariana (B): associa-se à depressão, mas não explica a fadiga e a insônia refratárias.\n\nDiabetes tipo 2 (C): é comorbidade frequente, mas não é a causa mais típica de sono não reparador e refratariedade dos sintomas neste perfil.",
    "reference": "Diretriz brasileira de apneia obstrutiva do sono (ABS/SBPT) / CANMAT 2023",
    "tags": [
      "psiquiatria",
      "depressão refratária",
      "apneia obstrutiva do sono",
      "polissonografia"
    ],
    "tip": "Homem, obeso, hipertenso, cansado e com sono ruim que não melhora: pense em apneia do sono."
  },
  {
    "id": "susba2025-4",
    "topography": "3.1",
    "topic": "Hemorragia digestiva alta",
    "module": "Clínica Médica",
    "text": "Homem, 62 anos de idade, portador de hepatite C crônica, comparece ao Pronto-Socorro com hematêmese volumosa e melena há três dias. O paciente apresenta-se ictérico, com PA: 90x60mmHg, FR: 115bpm e confusão mental. Ao exame, há ascite moderada. A avaliação laboratorial revela hemoglobina de 5,8g/dL, plaquetas de 70.000/mm³, RNI: 2,5.\n\nConsiderando o caso descrito, a conduta imediata mais adequada envolve:",
    "options": [
      "(A) Iniciar terlipressina e ceftriaxone intravenosos.",
      "(B) Infusão de albumina e noradrenalina.",
      "(C) Passagem do balão de Sengstaken-Blakemore.",
      "(D) Endoscopia digestiva alta com ligadura elástica."
    ],
    "correctAnswer": 0,
    "explanation": "Cirrótico por hepatite C com hematêmese volumosa, melena, hipotensão, taquicardia, encefalopatia, ascite e Hb 5,8 g/dL: hemorragia digestiva alta varicosa grave (Child-Pugh C).\n\nAlém da reanimação (via aérea, acessos, transfusão restritiva com alvo de Hb 7–8 g/dL), na suspeita de sangramento varicoso deve-se iniciar imediatamente um vasoconstritor esplâncnico (terlipressina, octreotida ou somatostatina) e antibiótico profilático (ceftriaxona 1 g/dia por até 7 dias), que reduz infecção, ressangramento e mortalidade. A endoscopia vem depois, nas primeiras 12 horas, com o paciente estabilizado.",
    "commentary": "Albumina e noradrenalina (B): combinação usada na síndrome hepatorrenal, não na hemorragia varicosa.\n\nBalão de Sengstaken-Blakemore (C): é ponte temporária para sangramento refratário ao tratamento clínico e endoscópico, não a primeira medida.\n\nEndoscopia com ligadura (D): é o tratamento definitivo, mas só após estabilização hemodinâmica e início das drogas vasoativas; não é a conduta imediata.",
    "reference": "Baveno VII (2022) / Consenso da Sociedade Brasileira de Hepatologia — Hemorragia digestiva varicosa",
    "tags": [
      "hepatologia",
      "cirrose",
      "hemorragia digestiva alta",
      "varizes esofágicas",
      "terlipressina"
    ],
    "tip": "HDA no cirrótico: vasoconstritor + ceftriaxona já na chegada; endoscopia em até 12 h."
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
    "id": "susba2025-6",
    "topography": "3.1",
    "topic": "Hemorragia digestiva alta",
    "module": "Clínica Médica",
    "text": "Homem, 62 anos de idade, portador de hepatite C crônica, comparece ao Pronto-Socorro com hematêmese volumosa e melena há três dias. O paciente apresenta-se ictérico, com PA: 90x60mmHg, FR: 115bpm e confusão mental. Ao exame, há ascite moderada. A avaliação laboratorial revela hemoglobina de 5,8g/dL, plaquetas de 70.000/mm³, RNI: 2,5.\n\nO fator de mau prognóstico mais importante neste caso é:",
    "options": [
      "(A) Pressão arterial de 90x60mmHg.",
      "(B) Passado de etilismo.",
      "(C) Presença de ascite volumosa.",
      "(D) Tempo de protrombina alargado."
    ],
    "correctAnswer": 3,
    "explanation": "O prognóstico do cirrótico com sangramento depende principalmente da reserva hepática. O tempo de protrombina alargado (RNI 2,5) reflete falência da síntese hepática e é componente dos escores de Child-Pugh e MELD, os melhores preditores de mortalidade.\n\nJunto com icterícia, ascite e encefalopatia, coloca o paciente em Child-Pugh C, com mortalidade elevada no episódio.",
    "commentary": "PA 90x60 mmHg (A): indica instabilidade hemodinâmica, que é corrigida com reanimação; é menos determinante do prognóstico global que a função hepática.\n\nPassado de etilismo (B): não consta no caso (a etiologia é hepatite C).\n\nAscite volumosa (C): o caso descreve ascite moderada, e a ascite pesa menos que a coagulopatia como marcador de insuficiência hepática.",
    "reference": "Baveno VII / Escores de Child-Pugh e MELD",
    "tags": [
      "hepatologia",
      "cirrose",
      "prognóstico",
      "child-pugh",
      "MELD"
    ],
    "tip": "No cirrótico, quem manda no prognóstico é a função hepática (RNI, bilirrubina, albumina)."
  },
  {
    "id": "susba2025-7",
    "topography": "6.1",
    "topic": "Osteoporose",
    "module": "Clínica Médica",
    "text": "Mulher, 65 anos de idade, comparece à UBS para consulta de rotina. Refere dor lombar ocasional, sem outras queixas. Ao exame físico, apresenta leve cifose dorsal e sua estatura parece estar diminuída em 4cm em relação à altura da juventude.\n\nConsiderando o caso relatado, dentre os exames complementares a serem solicitados, inicialmente, estão:",
    "options": [
      "(A) Radiografia de coluna, telopeptídeo aminoterminal – NTX.",
      "(B) Cintilografia óssea, telopeptídeo carboxiterminal do colágeno tipo 1 – CTX.",
      "(C) Densitometria óssea de fêmur e coluna lombar, vitamina D.",
      "(D) Tomografia computadorizada de coluna, vitamina D."
    ],
    "correctAnswer": 2,
    "explanation": "Mulher de 65 anos com cifose dorsal e perda de 4 cm de altura: suspeita de osteoporose com fraturas vertebrais. A investigação inicial é a densitometria óssea (DXA) de coluna lombar e fêmur proximal, padrão para o diagnóstico (T-score ≤ −2,5), além da dosagem de 25-OH-vitamina D, cuja deficiência é comum e deve ser corrigida antes do tratamento.\n\nToda mulher ≥ 65 anos tem indicação de DXA mesmo sem sintomas.",
    "commentary": "Radiografia e NTX (A): a radiografia mostra fraturas, mas não quantifica a massa óssea; marcadores de reabsorção servem para monitorar tratamento, não para diagnóstico.\n\nCintilografia e CTX (B): a cintilografia é usada para metástases e fraturas ocultas, não para osteoporose.\n\nTomografia de coluna (D): expõe a mais radiação e não é o exame de diagnóstico de osteoporose.",
    "reference": "Diretriz brasileira de osteoporose pós-menopausa (SBR/Febrasgo) / PCDT Osteoporose — Ministério da Saúde",
    "tags": [
      "reumatologia",
      "osteoporose",
      "densitometria óssea",
      "vitamina D"
    ],
    "tip": "Mulher ≥ 65 anos: DXA de coluna e fêmur, sempre."
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
    "id": "susba2025-10",
    "topography": "16",
    "topic": "Feridas",
    "module": "Cirurgia",
    "text": "Paciente, sexo masculino, 55 anos de idade, procura o ambulatório de cirurgia geral com queixa de ferida em perna direita há 4 meses após trauma contuso. O paciente relata que sofreu trauma contuso na região anterior da perna direita, que causou perda de pele. Nega dor ou outros sintomas no momento. Ao exame físico, bom estado geral; afebril; presença de ferida de cerca de 5x5cm na região ântero-lateral da perna direita, com perda da cobertura cutânea sem exposição óssea, sem sinais flogísticos, com leito avermelhado e algumas áreas esbranquiçadas, sem tecido necrótico. Diante desse caso clínico:\n\nDetermine em qual fase da cicatrização esta ferida se encontra neste momento.",
    "options": [
      "(A) Inflamatória.",
      "(B) Proliferativa.",
      "(C) Maturação.",
      "(D) Maturação tardia."
    ],
    "correctAnswer": 1,
    "explanation": "A ferida tem 4 meses, leito avermelhado (tecido de granulação), sem necrose e sem sinais inflamatórios, com áreas esbranquiçadas (reepitelização ou fibrose em formação). O leito de granulação caracteriza a fase proliferativa, em que predominam angiogênese, proliferação de fibroblastos com deposição de colágeno e epitelização.\n\nComo a ferida não fechou depois de semanas, ela é crônica — ainda com granulação, sem ter evoluído para o fechamento e a maturação.",
    "commentary": "Inflamatória (A): é a fase dos primeiros dias (hemostasia, neutrófilos e macrófagos); o caso não tem sinais flogísticos.\n\nMaturação (C) e maturação tardia (D): ocorrem depois do fechamento da ferida, com remodelação do colágeno; aqui ainda há perda de cobertura cutânea.",
    "reference": "Sabiston Tratado de Cirurgia — Cicatrização de feridas",
    "tags": [
      "cirurgia geral",
      "cicatrização",
      "ferida crônica",
      "tecido de granulação"
    ],
    "tip": "Leito vermelho e granuloso = fase proliferativa."
  },
  {
    "id": "susba2025-11",
    "topography": "16",
    "topic": "Feridas",
    "module": "Cirurgia",
    "text": "Paciente, sexo masculino, 55 anos de idade, procura o ambulatório de cirurgia geral com queixa de ferida em perna direita há 4 meses após trauma contuso. O paciente relata que sofreu trauma contuso na região anterior da perna direita, que causou perda de pele. Nega dor ou outros sintomas no momento. Ao exame físico, bom estado geral; afebril; presença de ferida de cerca de 5x5cm na região ântero-lateral da perna direita, com perda da cobertura cutânea sem exposição óssea, sem sinais flogísticos, com leito avermelhado e algumas áreas esbranquiçadas, sem tecido necrótico. Diante desse caso clínico:\n\nIndique as citocinas e/ou fatores de crescimento que estão aumentados na ferida deste paciente neste momento.",
    "options": [
      "(A) TNF-alfa, IL-1 e IL-6.",
      "(B) IL-1, IL-4 e IL-6.",
      "(C) TNF-alfa, TGF-beta e IL-10.",
      "(D) EGF, TGF-beta e IL-14."
    ],
    "correctAnswer": 0,
    "explanation": "O gabarito considera que, por ter 4 meses sem fechar, a ferida é crônica, e feridas crônicas ficam presas em um estado inflamatório persistente, com excesso de citocinas pró-inflamatórias — TNF-α, IL-1 e IL-6 — que recrutam células inflamatórias continuamente e estimulam proteases que degradam a matriz e os fatores de crescimento.",
    "commentary": "IL-1, IL-4 e IL-6 (B): a IL-4 é citocina Th2 com perfil anti-inflamatório e pró-reparo, não típica da ferida crônica estagnada.\n\nTNF-α, TGF-β e IL-10 (C): TGF-β e IL-10 favorecem reparo e controle da inflamação; na ferida crônica sua atividade está reduzida.\n\nEGF, TGF-β e IL-14 (D): fatores de crescimento da fase proliferativa, que na ferida crônica são degradados pelas proteases; a IL-14 não tem papel definido na cicatrização.\n\nObservação: há tensão com a questão anterior, cujo gabarito coloca a ferida na fase proliferativa — fase em que se esperariam fatores de crescimento (TGF-β, EGF). O gabarito resolve pelo conceito de ferida crônica com inflamação persistente.",
    "reference": "Sabiston Tratado de Cirurgia — Cicatrização de feridas",
    "tags": [
      "cirurgia geral",
      "cicatrização",
      "ferida crônica",
      "citocinas"
    ],
    "tip": "Ferida crônica = muita citocina pró-inflamatória e protease, pouco fator de crescimento.",
    "alert": "Gabarito discutível: a questão anterior coloca a mesma ferida na fase proliferativa, mas aqui o gabarito marca citocinas da fase inflamatória (ferida crônica). Mantida a resposta do gabarito."
  },
  {
    "id": "susba2025-12",
    "topography": "16",
    "topic": "Feridas",
    "module": "Cirurgia",
    "text": "Paciente, sexo masculino, 55 anos de idade, procura o ambulatório de cirurgia geral com queixa de ferida em perna direita há 4 meses após trauma contuso. O paciente relata que sofreu trauma contuso na região anterior da perna direita, que causou perda de pele. Nega dor ou outros sintomas no momento. Ao exame físico, bom estado geral; afebril; presença de ferida de cerca de 5x5cm na região ântero-lateral da perna direita, com perda da cobertura cutânea sem exposição óssea, sem sinais flogísticos, com leito avermelhado e algumas áreas esbranquiçadas, sem tecido necrótico. Diante desse caso clínico:\n\nDe acordo com as características da ferida deste paciente, neste momento, é correto afirmar:",
    "options": [
      "(A) As citocinas anti-inflamatórias estão em níveis elevados.",
      "(B) A quantidade de metaloproteinases está em níveis elevados.",
      "(C) O TNF-alfa diminui a produção das metaloproteinases.",
      "(D) Quanto maior for a inflamação na ferida, maior é a probabilidade de cicatrização."
    ],
    "correctAnswer": 1,
    "explanation": "Na ferida crônica, o ambiente inflamatório persistente (TNF-α, IL-1) estimula a produção de metaloproteinases de matriz (MMPs) e reduz seus inibidores (TIMPs). O excesso de MMPs degrada a matriz extracelular recém-formada e os fatores de crescimento, impedindo o fechamento.",
    "commentary": "Citocinas anti-inflamatórias elevadas (A): na ferida crônica predominam as pró-inflamatórias.\n\nTNF-α diminui as metaloproteinases (C): é o contrário — o TNF-α aumenta a produção de MMPs.\n\nMais inflamação, mais cicatrização (D): a inflamação é necessária só no início; inflamação persistente atrasa a cicatrização.",
    "reference": "Sabiston Tratado de Cirurgia — Cicatrização de feridas",
    "tags": [
      "cirurgia geral",
      "cicatrização",
      "ferida crônica",
      "metaloproteinases"
    ]
  },
  {
    "id": "susba2025-13",
    "topography": "16",
    "topic": "Pós-operatório",
    "module": "Cirurgia",
    "text": "Paciente, sexo masculino, 65 anos de idade, realizou quimioterapia neoadjuvante e está no 5º dia de pós-operatório de colectomia direita com anastomose ileocólica para tratamento de adenocarcinoma de cólon. O paciente já estava com dieta de água, chá e gelatina, quando passou a cursar com distensão e dor abdominal. Sem outras queixas. Ao exame físico, bom estado geral, corado, temperatura axilar de 38ºC, FC: 108bpm, PA: 134x78mmHg; abdome levemente distendido, com dor à palpação profunda difusamente, com descompressão brusca negativa; toque retal sem alterações. Diante desse caso clínico:\n\nIndique a principal suspeita diagnóstica para este paciente, neste momento.",
    "options": [
      "(A) Infecção de sítio cirúrgico intra-abdominal.",
      "(B) Íleo paralítico.",
      "(C) Obstrução intestinal.",
      "(D) Fístula da anastomose ileocólica."
    ],
    "correctAnswer": 3,
    "explanation": "5º dia após colectomia direita com anastomose ileocólica, em paciente que fez quimioterapia neoadjuvante, com febre (38 °C), taquicardia, distensão e dor difusa: é a janela típica (5º–7º dia) da deiscência/fístula de anastomose. Desnutrição e imunossupressão pela quimioterapia aumentam o risco.\n\nA ausência de peritonite franca não afasta o diagnóstico; o próximo passo é a tomografia com contraste.",
    "commentary": "Infecção de sítio cirúrgico intra-abdominal (A): pode ser consequência da fístula, mas a causa principal a investigar nesse cenário é a deiscência da anastomose.\n\nÍleo paralítico (B): não causa febre e taquicardia; costuma melhorar até o 3º–5º dia.\n\nObstrução intestinal (C): não explica a resposta inflamatória sistêmica e não é típica nesta fase.",
    "reference": "Sabiston Tratado de Cirurgia — Complicações pós-operatórias",
    "tags": [
      "cirurgia geral",
      "pós-operatório",
      "fístula anastomótica",
      "colectomia"
    ],
    "tip": "Febre + taquicardia no 5º–7º dia de anastomose intestinal: deiscência até prova em contrário."
  },
  {
    "id": "susba2025-14",
    "topography": "16",
    "topic": "Pós-operatório",
    "module": "Cirurgia",
    "text": "Paciente, sexo masculino, 65 anos de idade, realizou quimioterapia neoadjuvante e está no 5º dia de pós-operatório de colectomia direita com anastomose ileocólica para tratamento de adenocarcinoma de cólon. O paciente já estava com dieta de água, chá e gelatina, quando passou a cursar com distensão e dor abdominal. Sem outras queixas. Ao exame físico, bom estado geral, corado, temperatura axilar de 38ºC, FC: 108bpm, PA: 134x78mmHg; abdome levemente distendido, com dor à palpação profunda difusamente, com descompressão brusca negativa; toque retal sem alterações. Diante desse caso clínico:\n\nIndique a conduta que deve ser realizada neste momento.",
    "options": [
      "(A) Jejum, passar sonda nasogástrica e encaminhar o paciente para a unidade de terapia intensiva.",
      "(B) Drenagem da cavidade abdominal guiada por ultrassonografia e ampliar a antibioticoterapia.",
      "(C) Tomografia computadorizada do abdome com contraste.",
      "(D) Laparotomia exploradora."
    ],
    "correctAnswer": 2,
    "explanation": "O paciente está estável (PA normal, sem peritonite difusa) e com suspeita de deiscência de anastomose. O passo seguinte é confirmar e definir a extensão com tomografia de abdome com contraste (idealmente endovenoso e oral/retal), que mostra coleções, ar livre e extravasamento de contraste.\n\nO resultado orienta a conduta: antibiótico, drenagem percutânea de coleção ou reoperação.",
    "commentary": "Jejum, SNG e UTI (A): o paciente está estável e sem obstrução; essas medidas não esclarecem o diagnóstico.\n\nDrenagem guiada e ampliar antibiótico (B): só se indica depois que a imagem mostrar uma coleção drenável.\n\nLaparotomia (D): reservada para peritonite difusa ou instabilidade hemodinâmica, ausentes no caso.",
    "reference": "Sabiston Tratado de Cirurgia — Complicações pós-operatórias",
    "tags": [
      "cirurgia geral",
      "pós-operatório",
      "fístula anastomótica",
      "tomografia"
    ],
    "tip": "Suspeita de fístula em paciente estável: TC com contraste antes de decidir."
  },
  {
    "id": "susba2025-15",
    "topography": "16",
    "topic": "Pós-operatório",
    "module": "Cirurgia",
    "text": "Paciente, sexo masculino, 65 anos de idade, realizou quimioterapia neoadjuvante e está no 5º dia de pós-operatório de colectomia direita com anastomose ileocólica para tratamento de adenocarcinoma de cólon. O paciente já estava com dieta de água, chá e gelatina, quando passou a cursar com distensão e dor abdominal. Sem outras queixas. Ao exame físico, bom estado geral, corado, temperatura axilar de 38ºC, FC: 108bpm, PA: 134x78mmHg; abdome levemente distendido, com dor à palpação profunda difusamente, com descompressão brusca negativa; toque retal sem alterações. Diante desse caso clínico:\n\nIndique o principal fator de risco para a evolução desfavorável deste paciente no pós-operatório.",
    "options": [
      "(A) Introdução da dieta oral com água, chá e gelatina.",
      "(B) Alteração do estado nutricional e imunológico",
      "(C) Formação de aderências intestinais no pós-operatório.",
      "(D) Distúrbio eletrolítico no pós-operatório."
    ],
    "correctAnswer": 1,
    "explanation": "O principal fator de risco para evolução desfavorável — deiscência e infecção — é o comprometimento nutricional e imunológico: paciente oncológico, de 65 anos, que recebeu quimioterapia neoadjuvante. A desnutrição e a imunossupressão prejudicam a cicatrização da anastomose e a defesa contra infecção.",
    "commentary": "Dieta com água, chá e gelatina (A): a reintrodução precoce da dieta é segura e recomendada (protocolos ACERTO/ERAS).\n\nAderências (C): causam obstrução tardia, não explicam o quadro atual.\n\nDistúrbio eletrolítico (D): pode piorar o íleo, mas não é o principal determinante de deiscência.",
    "reference": "Projeto ACERTO / Sabiston Tratado de Cirurgia",
    "tags": [
      "cirurgia geral",
      "pós-operatório",
      "desnutrição",
      "quimioterapia neoadjuvante"
    ]
  },
  {
    "id": "susba2025-16",
    "topography": "16",
    "topic": "Pós-operatório",
    "module": "Cirurgia",
    "text": "Paciente, sexo masculino, 45 anos de idade, vítima de trauma em colisão de moto com automóvel, deu entrada na urgência com instabilidade hemodinâmica, foi submetido à laparotomia exploradora de emergência, sendo identificado trauma esplênico grave e realizado esplenectomia total. O paciente apresentava também fratura exposta dos membros inferiores, sendo submetido à fixação externa das duas pernas pela ortopedia, para posterior fixação definitiva das fraturas em segundo tempo. O paciente evoluiu com melhora hemodinâmica e sem queixas no pós-operatório. Diante deste caso clínico:\n\nQuanto à correlação entre a termorregulação do paciente e os cuidados perioperatórios, é correto afirmar:",
    "options": [
      "(A) O uso de analgésicos opioides aumenta o risco de hipotermia.",
      "(B) O uso de propofol causa vasoconstrição, evitando a hipotermia por perda de calor.",
      "(C) As mantas térmicas previnem hipotermia associada à instabilidade hemodinâmica.",
      "(D) A hipotermia em vítimas de trauma é condicionada pelo tempo da cirurgia."
    ],
    "correctAnswer": 0,
    "explanation": "Opioides (e anestésicos em geral) deprimem o centro termorregulador hipotalâmico: reduzem o limiar para vasoconstrição e tremor, e o paciente perde calor sem reagir. Por isso aumentam o risco de hipotermia perioperatória, que no traumatizado agrava a coagulopatia e a acidose (tríade letal).",
    "commentary": "Propofol (B): causa vasodilatação, redistribuindo o calor do centro para a periferia e favorecendo a hipotermia.\n\nMantas térmicas (C): ajudam a prevenir a hipotermia, mas não a hipotermia causada pela instabilidade hemodinâmica, que depende de reanimação e controle do sangramento.\n\nTempo de cirurgia (D): é apenas um dos fatores; a hipotermia no trauma começa antes (exposição, choque, fluidos frios).",
    "reference": "ATLS 10ª ed. / Miller's Anesthesia — Termorregulação",
    "tags": [
      "cirurgia geral",
      "trauma",
      "hipotermia",
      "anestesia",
      "opioides"
    ],
    "tip": "Hipotermia no trauma = parte da tríade letal (com acidose e coagulopatia)."
  },
  {
    "id": "susba2025-17",
    "topography": "16",
    "topic": "Pós-operatório",
    "module": "Cirurgia",
    "text": "Paciente, sexo masculino, 45 anos de idade, vítima de trauma em colisão de moto com automóvel, deu entrada na urgência com instabilidade hemodinâmica, foi submetido à laparotomia exploradora de emergência, sendo identificado trauma esplênico grave e realizado esplenectomia total. O paciente apresentava também fratura exposta dos membros inferiores, sendo submetido à fixação externa das duas pernas pela ortopedia, para posterior fixação definitiva das fraturas em segundo tempo. O paciente evoluiu com melhora hemodinâmica e sem queixas no pós-operatório. Diante deste caso clínico:\n\nQuanto aos eventos tromboembólicos perioperatórios, é correto afirmar:",
    "options": [
      "(A) Os eventos trombóticos independem do grau de instabilidade hemodinâmica.",
      "(B) O sistema venoso iliofemoral é a origem dos êmbolos clinicamente relevantes.",
      "(C) A trombose relacionada ao acesso venoso central é mais comum na veia subclávia.",
      "(D) A profilaxia está indicada com enoxaparina 1mg/kg de 12/12h para este paciente."
    ],
    "correctAnswer": 1,
    "explanation": "A maioria dos êmbolos pulmonares clinicamente relevantes vem das veias profundas proximais dos membros inferiores — sistema iliofemoral e poplíteo. Tromboses distais (panturrilha) embolizam menos.\n\nO paciente tem alto risco (trauma grave, fraturas de membros inferiores, cirurgia, imobilidade) e deve receber profilaxia assim que o risco de sangramento permitir.",
    "commentary": "Independem da instabilidade (A): choque e estase aumentam o risco trombótico.\n\nSubclávia (C): a trombose associada a cateter é mais comum na veia femoral; a subclávia tem menor taxa.\n\nEnoxaparina 1 mg/kg 12/12h (D): é dose terapêutica; a profilaxia usa 40 mg/dia (ou 30 mg 12/12h no trauma).",
    "reference": "Diretrizes de profilaxia de TEV (ACCP) / Sabiston Tratado de Cirurgia",
    "tags": [
      "cirurgia geral",
      "trauma",
      "tromboembolismo venoso",
      "profilaxia de TEV"
    ]
  },
  {
    "id": "susba2025-18",
    "topography": "16",
    "topic": "Pré-operatório",
    "module": "Cirurgia",
    "text": "Paciente, sexo masculino, 45 anos de idade, vítima de trauma em colisão de moto com automóvel, deu entrada na urgência com instabilidade hemodinâmica, foi submetido à laparotomia exploradora de emergência, sendo identificado trauma esplênico grave e realizado esplenectomia total. O paciente apresentava também fratura exposta dos membros inferiores, sendo submetido à fixação externa das duas pernas pela ortopedia, para posterior fixação definitiva das fraturas em segundo tempo. O paciente evoluiu com melhora hemodinâmica e sem queixas no pós-operatório. Diante deste caso clínico:\n\nQuanto ao protocolo universal de segurança cirúrgica e o preparo do paciente, é correto afirmar:",
    "options": [
      "(A) O antibiótico profilático deve ser administrado no momento da incisão cirúrgica.",
      "(B) A lateralidade de procedimento cirúrgico deve ser estabelecida na sala da cirurgia.",
      "(C) A tricotomia deve ser feita na sala cirúrgica, com uso de lâmina estéril de bisturi.",
      "(D) A clorexidina alcoólica é mais eficaz que a solução de iodo povidine na prevenção de infecção."
    ],
    "correctAnswer": 3,
    "explanation": "No preparo da pele, a clorexidina alcoólica é mais eficaz que o iodopovidona na prevenção de infecção de sítio cirúrgico, como mostram ensaios e recomendações da OMS e da Anvisa.",
    "commentary": "Antibiótico na incisão (A): deve ser feito nos 60 minutos antes da incisão (120 min para vancomicina e fluoroquinolonas), para haver nível tecidual no momento do corte.\n\nLateralidade na sala (B): o sítio deve ser marcado antes, com o paciente acordado, fora da sala; na sala apenas se confirma (time-out).\n\nTricotomia com lâmina (C): se necessária, deve ser feita com tricotomizador elétrico, próximo à cirurgia e fora da sala; lâmina causa microlesões e aumenta a infecção.",
    "reference": "OMS — Cirurgia Segura Salva Vidas / Anvisa — Prevenção de infecção de sítio cirúrgico",
    "tags": [
      "cirurgia geral",
      "cirurgia segura",
      "infecção de sítio cirúrgico",
      "antissepsia",
      "clorexidina"
    ],
    "tip": "Antibiótico até 60 min antes; tricotomia elétrica; clorexidina alcoólica."
  },
  {
    "id": "susba2025-19",
    "topography": "5.1",
    "topic": "Câncer de ovário",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma paciente de 18 anos de idade comparece ao serviço médico com queixa de dor abdominal baixa e aumento de volume abdominal. Durante a avaliação, foi realizada uma ultrassonografia pélvica, que revelou a presença de uma massa ovariana de, aproximadamente, 8cm. O médico suspeita de um teratoma imaturo.\n\nIdentifique entre as seguintes características as mais sugestivas de um teratoma imaturo, na ultrassonografia:",
    "options": [
      "(A) Presença de estruturas uniloculares e bem definidas.",
      "(B) Presença de componentes sólido-císticos com calcificações e debris.",
      "(C) Ausência de vascularização detectável ao Doppler, na massa.",
      "(D) Presença de massa homogênea, anecoica e com contornos regulares."
    ],
    "correctAnswer": 1,
    "explanation": "O teratoma imaturo é tumor de células germinativas da adolescente e mulher jovem. Na ultrassonografia aparece como massa grande, predominantemente sólida, heterogênea, com componentes císticos, calcificações grosseiras dispersas e debris/gordura, geralmente com vascularização no componente sólido.",
    "commentary": "Unilocular e bem definida (A): aspecto de cisto simples, típico de lesão benigna funcional.\n\nAusência de vascularização (C): componentes sólidos do teratoma imaturo costumam ter fluxo ao Doppler.\n\nMassa homogênea e anecoica (D): descreve cisto simples, não tumor sólido-cístico.",
    "reference": "Febrasgo — Tumores de ovário / Classificação O-RADS",
    "tags": [
      "ginecologia",
      "tumores de ovário",
      "teratoma imaturo",
      "ultrassonografia"
    ]
  },
  {
    "id": "susba2025-20",
    "topography": "5.1",
    "topic": "Câncer de ovário",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma paciente de 18 anos de idade comparece ao serviço médico com queixa de dor abdominal baixa e aumento de volume abdominal. Durante a avaliação, foi realizada uma ultrassonografia pélvica, que revelou a presença de uma massa ovariana de, aproximadamente, 8cm. O médico suspeita de um teratoma imaturo.\n\nIndique a conduta mais apropriada, considerando o manejo inicial da paciente com teratoma imaturo:",
    "options": [
      "(A) Vigilância ativa com acompanhamento em consulta ambulatorial.",
      "(B) Início imediato de quimioterapia",
      "(C) Realização de laparotomia exploratória para remoção da massa ovariana.",
      "(D) Prescrição de analgésicos e orientação para retorno se a dor aumentar."
    ],
    "correctAnswer": 2,
    "explanation": "Massa ovariana de 8 cm com suspeita de tumor maligno de células germinativas exige cirurgia para diagnóstico histológico, estadiamento e tratamento. Em paciente jovem, a cirurgia é conservadora da fertilidade (salpingo-ooforectomia unilateral com estadiamento), porque o tumor costuma ser unilateral e responde bem à quimioterapia.",
    "commentary": "Vigilância (A): inadequada para massa suspeita de malignidade.\n\nQuimioterapia imediata (B): só depois do diagnóstico histológico e do estadiamento cirúrgico, conforme grau e estádio.\n\nAnalgesia e retorno (D): ignora a massa suspeita.",
    "reference": "Febrasgo — Tumores de células germinativas do ovário / NCCN Ovarian Cancer",
    "tags": [
      "ginecologia",
      "tumores de ovário",
      "teratoma imaturo",
      "cirurgia conservadora"
    ],
    "tip": "Tumor germinativo em jovem: cirurgia que preserva a fertilidade."
  },
  {
    "id": "susba2025-21",
    "topography": "5.1",
    "topic": "Câncer de ovário",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma paciente de 18 anos de idade comparece ao serviço médico com queixa de dor abdominal baixa e aumento de volume abdominal. Durante a avaliação, foi realizada uma ultrassonografia pélvica, que revelou a presença de uma massa ovariana de, aproximadamente, 8cm. O médico suspeita de um teratoma imaturo.\n\nEm relação ao prognóstico do teratoma imaturo, é correto afirmar:",
    "options": [
      "(A) O teratoma imaturo é benigno, independentemente do grau de diferenciação.",
      "(B) A recorrência é rara após o tratamento inicial.",
      "(C) O tratamento cirúrgico não é necessário, pois a observação é suficiente.",
      "(D) O prognóstico é geralmente bom, mas depende das características histológicas."
    ],
    "correctAnswer": 3,
    "explanation": "O prognóstico do teratoma imaturo é bom, sobretudo nos estádios iniciais, mas depende do grau histológico (quantidade de neuroepitélio imaturo, graus 1 a 3) e do estádio. Tumores grau 1 em estádio IA podem ser só operados; os de grau mais alto recebem quimioterapia (BEP) com boas taxas de cura.",
    "commentary": "Sempre benigno (A): é tumor maligno; o maduro (cisto dermoide) é que é benigno.\n\nRecorrência rara (B): a recorrência existe, sobretudo nos de alto grau.\n\nObservação suficiente (C): o tratamento cirúrgico é obrigatório.",
    "reference": "Febrasgo — Tumores de células germinativas do ovário",
    "tags": [
      "ginecologia",
      "tumores de ovário",
      "teratoma imaturo",
      "prognóstico"
    ]
  },
  {
    "id": "susba2025-22",
    "topography": "5.2",
    "topic": "Pré-eclâmpsia",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma paciente de 30 anos de idade, grávida de 36 semanas, apresenta-se ao Pronto-Socorro com queixas de cefaleia persistente e visão turva. Durante a avaliação, verifica-se PA: 160x105mmHg e a urina de 24 horas revela 4g de proteína. A ultrassonografia obstétrica realizada identifica feto com crescimento adequado e oligoidrâmnio. O médico assistente diagnostica pré-eclâmpsia com critérios de gravidade ou deterioração.\n\nIdentifique a condição clínica neste caso que indica a necessidade de interrupção da gestação, após estabilização dos níveis tensionais.",
    "options": [
      "(A) Síndrome HELLP.",
      "(B) Presença de oligoidrâmnio.",
      "(C) Hipertensão arterial, necessitando de medicação.",
      "(D) Proteinúria- 4g em urina de 24 horas."
    ],
    "correctAnswer": 0,
    "explanation": "A síndrome HELLP (hemólise, enzimas hepáticas elevadas, plaquetopenia) é uma forma grave de deterioração da pré-eclâmpsia e indica interrupção da gestação após estabilização materna (controle pressórico e sulfato de magnésio), em qualquer idade gestacional.",
    "commentary": "Oligoidrâmnio (B): é dado de vitalidade fetal; isoladamente não define a interrupção por deterioração materna.\n\nNecessidade de anti-hipertensivo (C): o controle pressórico faz parte do manejo e não é, por si só, critério de interrupção.\n\nProteinúria de 4 g (D): o volume da proteinúria não é critério de gravidade nem de interrupção.\n\nObservação: o caso não descreve HELLP; na prática, toda pré-eclâmpsia com sinais de gravidade com 34 semanas ou mais já tem indicação de parto após estabilização.",
    "reference": "Febrasgo / RBEHG — Pré-eclâmpsia (2023) / Ministério da Saúde — Manual de gestação de alto risco",
    "tags": [
      "obstetrícia",
      "pré-eclâmpsia",
      "síndrome HELLP",
      "interrupção da gestação"
    ],
    "tip": "Pré-eclâmpsia grave ≥ 34 semanas: estabiliza e interrompe.",
    "alert": "Gabarito discutível: o caso não descreve síndrome HELLP. O gabarito marca HELLP como a condição que indica interrupção; com 36 semanas e sinais de gravidade, a interrupção já estaria indicada de qualquer modo."
  },
  {
    "id": "susba2025-23",
    "topography": "5.2",
    "topic": "Pré-eclâmpsia",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma paciente de 30 anos de idade, grávida de 36 semanas, apresenta-se ao Pronto-Socorro com queixas de cefaleia persistente e visão turva. Durante a avaliação, verifica-se PA: 160x105mmHg e a urina de 24 horas revela 4g de proteína. A ultrassonografia obstétrica realizada identifica feto com crescimento adequado e oligoidrâmnio. O médico assistente diagnostica pré-eclâmpsia com critérios de gravidade ou deterioração.\n\nIndique, para este caso, o momento ideal para interrupção da gestação com parto:",
    "options": [
      "(A) Após estabilização dos níveis pressóricos maternos.",
      "(B) Com 37 semanas, após controle da pressão arterial materna, para evitar a prematuridade.",
      "(C) Imediatamente, para evitar evolução para eclâmpsia ou Descolamento Prematuro da Placenta.",
      "(D) Com 37 semanas, após estabilização dos níveis pressóricos e das alterações laboratoriais."
    ],
    "correctAnswer": 0,
    "explanation": "Na pré-eclâmpsia com sinais de gravidade a partir de 34 semanas, a conduta é interromper a gestação logo após a estabilização materna (controle da PA grave e sulfato de magnésio). Não se espera completar 37 semanas: o risco materno (eclâmpsia, AVC, DPP, HELLP) supera o da prematuridade tardia.",
    "commentary": "Com 37 semanas (B e D): adiar a interrupção expõe a gestante a complicações graves; esperar 37 semanas vale para pré-eclâmpsia sem sinais de gravidade.\n\nImediatamente (C): a paciente deve ser estabilizada antes do parto, que não precisa ser cesárea de emergência — a via é obstétrica.",
    "reference": "Febrasgo / RBEHG — Pré-eclâmpsia (2023)",
    "tags": [
      "obstetrícia",
      "pré-eclâmpsia",
      "interrupção da gestação"
    ]
  },
  {
    "id": "susba2025-24",
    "topography": "5.2",
    "topic": "Pré-eclâmpsia",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma paciente de 30 anos de idade, grávida de 36 semanas, apresenta-se ao Pronto-Socorro com queixas de cefaleia persistente e visão turva. Durante a avaliação, verifica-se PA: 160x105mmHg e a urina de 24 horas revela 4g de proteína. A ultrassonografia obstétrica realizada identifica feto com crescimento adequado e oligoidrâmnio. O médico assistente diagnostica pré-eclâmpsia com critérios de gravidade ou deterioração.\n\nA intervenção farmacológica capaz de prevenir a eclâmpsia, no manejo da pré-eclâmpsia com critérios de gravidade é o uso de:",
    "options": [
      "(A) Anti-hipertensivos.",
      "(B) Gluconato de Cálcio.",
      "(C) Corticoide.",
      "(D) Sulfato de Magnésio."
    ],
    "correctAnswer": 3,
    "explanation": "O sulfato de magnésio é a droga de escolha para prevenir (e tratar) a eclâmpsia na pré-eclâmpsia com sinais de gravidade ou iminência de eclâmpsia (cefaleia, alterações visuais). Esquemas de Zuspan ou Pritchard, com monitorização de reflexos, diurese e frequência respiratória.",
    "commentary": "Anti-hipertensivos (A): previnem complicações vasculares (AVC), mas não previnem convulsões.\n\nGluconato de cálcio (B): é o antídoto da intoxicação por magnésio.\n\nCorticoide (C): usado para maturação pulmonar fetal antes de 34 semanas.",
    "reference": "Febrasgo / RBEHG — Pré-eclâmpsia (2023)",
    "tags": [
      "obstetrícia",
      "pré-eclâmpsia",
      "eclâmpsia",
      "sulfato de magnésio"
    ],
    "tip": "Sulfato de magnésio previne convulsão; gluconato de cálcio é o antídoto."
  },
  {
    "id": "susba2025-25",
    "topography": "5.1",
    "topic": "Mioma uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma paciente de 36 anos de idade, tentando engravidar, sem histórico de doenças ginecológicas relevantes, queixa-se de menstruação abundante e dor pélvica intermitente. Ao exame físico, o útero está aumentado e sensível. Uma ultrassonografia transvaginal revela a presença de um leiomioma intramural de classificação FIGO 3, de 5cm, localizado na parede posterior do útero, com características sugestivas de degeneração. A paciente está\n\ninteressada em discutir opções de tratamento, já que deseja manter a fertilidade.\n\nDe acordo com a classificação FIGO - Federação Internacional de Ginecologia e Obstetrícia - para leiomiomas uterinos, o termo FIGO 3, atribuída ao leiomioma desta paciente, significa:",
    "options": [
      "(A) O leiomioma está localizado inteiramente na camada subserosa do útero.",
      "(B) O leiomioma é submucoso, com mais de 50% do volume invadindo a cavidade uterina.",
      "(C) O leiomioma é intramural, sem contato com o endométrio.",
      "(D) O leiomioma é intramural, em contato com o endométrio, mas sem invadir a cavidade uterina."
    ],
    "correctAnswer": 3,
    "explanation": "Na classificação FIGO (PALM-COEIN) dos leiomiomas, o tipo 3 é intramural que toca o endométrio (100% intramural), sem componente na cavidade. Tipos 0–2 são submucosos; 4, intramural puro sem contato com endométrio; 5–7, subserosos; 8, outros (cervical, parasita).",
    "commentary": "Subseroso (A): corresponde aos tipos 5 a 7.\n\nSubmucoso com mais de 50% na cavidade (B): é o tipo 1 (tipo 2 tem < 50% intracavitário).\n\nIntramural sem contato com o endométrio (C): é o tipo 4.",
    "reference": "FIGO — Classificação PALM-COEIN (2011, revisada 2018) / Febrasgo — Miomatose uterina",
    "tags": [
      "ginecologia",
      "mioma uterino",
      "classificação FIGO"
    ],
    "tip": "FIGO 0-2 submucoso, 3 toca o endométrio, 4 intramural puro, 5-7 subseroso."
  },
  {
    "id": "susba2025-26",
    "topography": "5.1",
    "topic": "Mioma uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma paciente de 36 anos de idade, tentando engravidar, sem histórico de doenças ginecológicas relevantes, queixa-se de menstruação abundante e dor pélvica intermitente. Ao exame físico, o útero está aumentado e sensível. Uma ultrassonografia transvaginal revela a presença de um leiomioma intramural de classificação FIGO 3, de 5cm, localizado na parede posterior do útero, com características sugestivas de degeneração. A paciente está interessada em discutir opções de tratamento, já que deseja manter a fertilidade.\n\nIdentifique o tratamento medicamentoso mais indicado para reduzir o tamanho do leiomioma antes de um procedimento cirúrgico, caso venha a ser indicado:",
    "options": [
      "(A) Análogos de GnRH.",
      "(B) Anticoncepcionais orais combinados.",
      "(C) Anti-inflamatórios não esteroides (AINEs).",
      "(D) Inibidores da aromatase."
    ],
    "correctAnswer": 0,
    "explanation": "Os análogos do GnRH induzem hipoestrogenismo e reduzem o volume do mioma em 30–50% em cerca de 3 meses, além de controlar o sangramento e permitir recuperar a hemoglobina antes da cirurgia. Por causa dos efeitos de hipoestrogenismo (perda óssea, fogachos), o uso é limitado a 3–6 meses, como preparo pré-operatório.",
    "commentary": "Anticoncepcional combinado (B): ajuda no sangramento, mas não reduz o mioma; também impede a gestação desejada.\n\nAINEs (C): aliviam dor e reduzem sangramento, sem efeito no tamanho.\n\nInibidores da aromatase (D): têm evidência limitada e não são a escolha padrão.",
    "reference": "Febrasgo — Miomatose uterina",
    "tags": [
      "ginecologia",
      "mioma uterino",
      "análogos de GnRH",
      "preparo pré-operatório"
    ]
  },
  {
    "id": "susba2025-27",
    "topography": "5.1",
    "topic": "Mioma uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma paciente de 36 anos de idade, tentando engravidar, sem histórico de doenças ginecológicas relevantes, queixa-se de menstruação abundante e dor pélvica intermitente. Ao exame físico, o útero está aumentado e sensível. Uma ultrassonografia transvaginal revela a presença de um leiomioma intramural de classificação FIGO 3, de 5cm, localizado na parede posterior do útero, com características sugestivas de degeneração. A paciente está interessada em discutir opções de tratamento, já que deseja manter a fertilidade.\n\nIndique quando essa paciente poderá começar a tentar engravidar com segurança, após um procedimento cirúrgico para tratamento do leiomioma em questão:",
    "options": [
      "(A) De imediato.",
      "(B) Após 1 mês.",
      "(C) Após, pelo menos, 6 meses.",
      "(D) Após 1 mês, sendo contraindicado o parto por via vaginal."
    ],
    "correctAnswer": 2,
    "explanation": "Após miomectomia de mioma intramural que alcança o endométrio, recomenda-se aguardar cerca de 3 a 6 meses antes de engravidar para cicatrização adequada do miométrio e menor risco de ruptura uterina; o gabarito adota pelo menos 6 meses. Nesses casos, a cesariana costuma ser preferida.",
    "commentary": "De imediato (A) e após 1 mês (B): tempo insuficiente para a cicatrização miometrial.\n\nApós 1 mês, contraindicando parto vaginal (D): o intervalo é curto; a via de parto é decidida conforme a extensão da miomectomia.",
    "reference": "Febrasgo — Miomatose uterina",
    "tags": [
      "ginecologia",
      "mioma uterino",
      "miomectomia",
      "fertilidade"
    ]
  },
  {
    "id": "susba2025-28",
    "topography": "11",
    "topic": "Asma infantil",
    "module": "Pediatria",
    "text": "Menina de 10 anos de idade chega à Unidade de Pronto Atendimento acompanhada por sua mãe, apresentando dificuldade intensa para respirar, chiado no peito e sensação de aperto torácico, que piorou nas últimas 48 horas. Desde os 4 anos de idade, houve múltiplas internações por quadros semelhantes. Nos últimos meses, tem apresentado sintomas quase que diariamente, e despertares noturnos frequentes. Tem usado corticosteroide inalatório regularmente, além de medicamentos de resgate. Está ansiosa porque tem sido necessário se afastar de atividades físicas na escola, devido à falta de ar. Ao exame físico, observa-se desconforto respiratório, com FR: 40ipm, SatO₂: 88% em ar ambiente, Temp: 36,6ºC; sibilos difusos à ausculta pulmonar e uso de musculatura acessória para respirar.\n\nConsiderando a situação descrita, indique o diagnóstico e a classificação da doença:",
    "options": [
      "(A) Crise Aguda Moderada; Asma não controlada.",
      "(B) Crise Aguda Moderada; Asma parcialmente controlada.",
      "(C) Crise Aguda Grave; Asma não controlada.",
      "(D) Crise Aguda Grave; Asma parcialmente controlada."
    ],
    "correctAnswer": 2,
    "explanation": "Crise grave: dispneia intensa, FR 40 irpm, uso de musculatura acessória e SatO₂ 88% (< 90–92%). Controle da doença: sintomas quase diários, despertares noturnos frequentes, uso de resgate e limitação das atividades — preenche os critérios do GINA para asma não controlada (3 a 4 critérios), mesmo com corticoide inalatório regular.",
    "commentary": "Crise moderada (A e B): a saturação < 90% e o uso de musculatura acessória com dispneia intensa caracterizam crise grave.\n\nParcialmente controlada (B e D): corresponde a 1–2 critérios; a paciente tem todos.",
    "reference": "GINA 2024 / Sociedade Brasileira de Pediatria — Asma",
    "tags": [
      "pediatria",
      "asma",
      "crise asmática",
      "classificação da asma"
    ],
    "tip": "GINA: 1-2 critérios = parcialmente controlada; 3-4 = não controlada."
  },
  {
    "id": "susba2025-29",
    "topography": "11",
    "topic": "Asma infantil",
    "module": "Pediatria",
    "text": "Menina de 10 anos de idade chega à Unidade de Pronto Atendimento acompanhada por sua mãe, apresentando dificuldade intensa para respirar, chiado no peito e sensação de aperto torácico, que piorou nas últimas 48 horas. Desde os 4 anos de idade, houve múltiplas internações por quadros semelhantes. Nos últimos meses, tem apresentado sintomas quase que diariamente, e despertares noturnos frequentes. Tem usado corticosteroide inalatório regularmente, além de medicamentos de resgate. Está ansiosa porque tem sido necessário se afastar de atividades físicas na escola, devido à falta de ar. Ao exame físico, observa-se desconforto respiratório, com FR: 40ipm, SatO₂: 88% em ar ambiente, Temp: 36,6ºC; sibilos difusos à ausculta pulmonar e uso de musculatura acessória para respirar.\n\nAlém de oxigenoterapia, o tratamento farmacológico de primeira linha, no momento, para o caso descrito:",
    "options": [
      "(A) Broncodilatador via endovenosa e corticosteroides inalatórios.",
      "(B) Broncodilatador e corticosteroides inalatórios.",
      "(C) Broncodilatador e corticosteroides inalatórios e antibioticoterapia empírica.",
      "(D) Broncodilatador inalatório, corticosteroide sistêmico."
    ],
    "correctAnswer": 3,
    "explanation": "Na crise grave de asma, além de oxigênio (alvo SatO₂ 94–98%), o tratamento de primeira linha é o β2-agonista de curta ação inalatório repetido (com ou sem ipratrópio) e corticoide sistêmico precoce (prednisolona oral ou metilprednisolona IV), que reduz internação e recaída.",
    "commentary": "Broncodilatador intravenoso (A): reservado para crises refratárias; o corticoide inalatório não substitui o sistêmico na crise.\n\nBroncodilatador e corticoide inalatório (B): o corticoide inalatório isolado não trata a crise grave.\n\nAntibiótico (C): não há indício de infecção bacteriana (afebril).",
    "reference": "GINA 2024 / SBP — Manejo da crise de asma",
    "tags": [
      "pediatria",
      "asma",
      "crise asmática",
      "corticoide sistêmico"
    ]
  },
  {
    "id": "susba2025-30",
    "topography": "11",
    "topic": "Asma infantil",
    "module": "Pediatria",
    "text": "Menina de 10 anos de idade chega à Unidade de Pronto Atendimento acompanhada por sua mãe, apresentando dificuldade intensa para respirar, chiado no peito e sensação de aperto torácico, que piorou nas últimas 48 horas. Desde os 4 anos de idade, houve múltiplas internações por quadros semelhantes. Nos últimos meses, tem apresentado sintomas quase que diariamente, e despertares noturnos frequentes. Tem usado corticosteroide inalatório\n\nregularmente, além de medicamentos de resgate. Está ansiosa porque tem sido necessário se afastar de atividades físicas na escola, devido à falta de ar. Ao exame físico, observa-se desconforto respiratório, com FR: 40ipm, SatO₂: 88% em ar ambiente, Temp: 36,6ºC; sibilos difusos à ausculta pulmonar e uso de musculatura acessória para respirar.\n\nDentre os exames a seguir, o mais adequado para avaliação desta paciente, no momento:",
    "options": [
      "(A) Gasometria venosa.",
      "(B) Gasometria arterial.",
      "(C) Radiografia de tórax",
      "(D) (FeNO) Óxido Nítrico Exalado."
    ],
    "correctAnswer": 1,
    "explanation": "Na crise grave com hipoxemia (SatO₂ 88%), a gasometria arterial avalia oxigenação e ventilação: PaCO₂ normal ou elevada em criança taquipneica indica fadiga e risco de insuficiência respiratória, orientando a necessidade de terapia intensiva.",
    "commentary": "Gasometria venosa (A): estima pH e CO₂, mas não avalia a oxigenação.\n\nRadiografia de tórax (C): não é rotina na crise; reservada para suspeita de complicação (pneumotórax, pneumonia).\n\nFeNO (D): marcador de inflamação eosinofílica para acompanhamento ambulatorial, não para a crise.",
    "reference": "GINA 2024 / SBP — Asma",
    "tags": [
      "pediatria",
      "asma",
      "gasometria arterial",
      "insuficiência respiratória"
    ]
  },
  {
    "id": "susba2025-31",
    "topography": "1.1",
    "topic": "Meningite",
    "module": "Pediatria",
    "text": "Menino de 10 meses de vida é encaminhado à Emergência, com febre alta, irritabilidade e choro persistente há dois dias. Passou a apresentar vômitos há 12 horas e está recusando o leite materno. Apresentou tremores a caminho da Unidade de Saúde e está muito prostrado. Ao exame físico, não responde a estímulos; está febril, pálido, e apresenta pequenas manchas avermelhadas em várias regiões do corpo. A fontanela anterior está abaulada para fora.\n\nConsiderando os dados clínicos do caso, indique o agente etiológico mais provável:",
    "options": [
      "(A) Streptococcus agalactiae.",
      "(B) Haemophilus influenzae.",
      "(C) Listeria monocytogenes.",
      "(D) Neisseria meningitidis."
    ],
    "correctAnswer": 3,
    "explanation": "Lactente com febre, irritabilidade, vômitos, convulsão (tremores), rebaixamento de consciência, fontanela abaulada e petéquias/exantema: meningite bacteriana com sinais de meningococcemia. As lesões petequiais em vários locais apontam para Neisseria meningitidis.",
    "commentary": "Streptococcus agalactiae (A) e Listeria (C): agentes do período neonatal (até cerca de 3 meses).\n\nHaemophilus influenzae (B): ficou raro após a vacina, e o exantema petequial é típico do meningococo.",
    "reference": "Ministério da Saúde — Guia de Vigilância em Saúde: Doença meningocócica / SBP",
    "tags": [
      "pediatria",
      "meningite",
      "doença meningocócica",
      "neisseria meningitidis"
    ],
    "tip": "Meningite + petéquias = meningococo."
  },
  {
    "id": "susba2025-32",
    "topography": "1.1",
    "topic": "Meningite",
    "module": "Pediatria",
    "text": "Menino de 10 meses de vida é encaminhado à Emergência, com febre alta, irritabilidade e choro persistente há dois dias. Passou a apresentar vômitos há 12 horas e está recusando o leite materno. Apresentou tremores a caminho da Unidade de Saúde e está muito prostrado. Ao exame físico, não responde a estímulos; está febril, pálido, e apresenta pequenas manchas avermelhadas em várias regiões do corpo. A fontanela anterior está abaulada para fora.\n\nO objetivo principal do tratamento inicial deste paciente:",
    "options": [
      "(A) Reduzir a febre e aliviar a dor de cabeça.",
      "(B) Evitar a progressão para choque séptico.",
      "(C) Prevenir complicações respiratórias.",
      "(D) Regularizar o monograma."
    ],
    "correctAnswer": 1,
    "explanation": "A doença meningocócica pode evoluir em horas para choque séptico e falência de múltiplos órgãos. O tratamento inicial visa impedir isso: estabilização (ABC), expansão volêmica, coleta de culturas e antibiótico precoce (ceftriaxona) na primeira hora.",
    "commentary": "Reduzir febre e dor (A): são medidas de suporte, não o objetivo principal.\n\nComplicações respiratórias (C): o risco principal é circulatório (choque).\n\nRegularizar o monograma (D): alternativa sem sentido clínico (provável erro para hemograma).",
    "reference": "Ministério da Saúde — Guia de Vigilância em Saúde / Campanha de Sobrevivência à Sepse pediátrica",
    "tags": [
      "pediatria",
      "meningite",
      "sepse",
      "choque séptico",
      "doença meningocócica"
    ]
  },
  {
    "id": "susba2025-33",
    "topography": "10",
    "topic": "Meningococcemia",
    "module": "Saúde Coletiva",
    "text": "Menino de 10 meses de vida é encaminhado à Emergência, com febre alta, irritabilidade e choro persistente há dois dias. Passou a apresentar vômitos há 12 horas e está recusando o leite materno. Apresentou tremores a caminho da Unidade de Saúde e está muito prostrado. Ao exame físico, não responde a estímulos; está febril, pálido, e apresenta pequenas manchas avermelhadas em várias regiões do corpo. A fontanela anterior está abaulada para fora.\n\nCom relação à profilaxia dos contatos íntimos do paciente em foco, indique a conduta mais adequada:",
    "options": [
      "(A) Profilaxia com rifampicina.",
      "(B) Vacinação dos contatos íntimos.",
      "(C) Não há necessidade de profilaxia específica.",
      "(D) Administrar imunoglobulina a todos os familiares."
    ],
    "correctAnswer": 0,
    "explanation": "Na doença meningocócica, os contatos íntimos (moradores do domicílio, creche, quem teve contato com secreções orais) recebem quimioprofilaxia, de preferência nas primeiras 48 horas. A droga de escolha é a rifampicina por 2 dias (crianças 10 mg/kg 12/12h; adultos 600 mg 12/12h). Alternativas: ceftriaxona dose única ou ciprofloxacino.",
    "commentary": "Vacinação dos contatos (B): não substitui a quimioprofilaxia; pode complementar em surtos com sorogrupo vacinal.\n\nSem profilaxia (C): a doença meningocócica tem alto risco de casos secundários.\n\nImunoglobulina (D): não tem papel na profilaxia.",
    "reference": "Ministério da Saúde — Guia de Vigilância em Saúde: Meningites",
    "tags": [
      "saúde coletiva",
      "vigilância epidemiológica",
      "doença meningocócica",
      "quimioprofilaxia",
      "rifampicina"
    ],
    "tip": "Meningococo e Hib: rifampicina para os contatos íntimos."
  },
  {
    "id": "susba2025-34",
    "topography": "8",
    "topic": "Cetoacidose diabética",
    "module": "Pediatria",
    "text": "Menina de 8 anos de idade, previamente sadia, chega à Unidade de Pronto Atendimento com história de fraqueza intensa, sede excessiva e aumento da frequência urinária há duas semanas. Há relato de perda de peso nesse período, embora se alimente normalmente. Nas últimas 24 horas, passou a apresentar dor abdominal, náuseas e vômitos frequentes. Ao exame está sonolenta, taquicárdica, com movimentos respiratórios rápidos e profundos e prega cutânea com retorno prolongado. Exames Laboratoriais: Glicemia: 480 mg/dL; Gasometria arterial: pH: 7,15; Bicarbonato: 10mEq/L; Anion gap: 22mEq/L; Cetonúria: (+++); Potássio sérico: 4,0mEq/L; Sódio sérico: 130mEq/L; Creatinina sérica: 1,0mg/dL.\n\nDe acordo com os dados clínicos do caso, indique a faixa etária mais comumente afetada pela doença responsável pela situação descrita:",
    "options": [
      "(A) Menores de 2 anos.",
      "(B) Entre 5 e 14 anos.",
      "(C) Entre 15 e 20 anos.",
      "(D) Adultos de 20 a 30 anos."
    ],
    "correctAnswer": 1,
    "explanation": "Poliúria, polidipsia, perda de peso, vômitos, respiração de Kussmaul e desidratação com glicemia 480, pH 7,15, HCO₃⁻ 10 e cetonúria: cetoacidose diabética como abertura de diabetes tipo 1. O DM1 é diagnosticado com mais frequência entre 5 e 14 anos, com picos por volta de 5–7 anos e na puberdade (10–14 anos).",
    "commentary": "Menores de 2 anos (A): o DM1 pode ocorrer, mas é menos frequente (nessa idade a CAD tende a ser mais grave).\n\nEntre 15 e 20 (C) e de 20 a 30 anos (D): a incidência é menor que na faixa escolar e puberal.",
    "reference": "Diretriz da Sociedade Brasileira de Diabetes 2024 / ISPAD 2022",
    "tags": [
      "pediatria",
      "diabetes tipo 1",
      "cetoacidose diabética",
      "epidemiologia"
    ]
  },
  {
    "id": "susba2025-35",
    "topography": "8",
    "topic": "Cetoacidose diabética",
    "module": "Pediatria",
    "text": "Menina de 8 anos de idade, previamente sadia, chega à Unidade de Pronto Atendimento com história de fraqueza intensa, sede excessiva e aumento da frequência urinária há duas semanas. Há relato de perda de peso nesse período, embora se alimente normalmente. Nas últimas 24 horas, passou a apresentar dor abdominal, náuseas e vômitos frequentes. Ao exame está sonolenta, taquicárdica, com movimentos respiratórios rápidos e profundos e prega cutânea com retorno prolongado. Exames Laboratoriais: Glicemia: 480 mg/dL; Gasometria arterial: pH: 7,15; Bicarbonato: 10mEq/L; Anion gap: 22mEq/L; Cetonúria: (+++); Potássio sérico: 4,0mEq/L; Sódio sérico: 130mEq/L; Creatinina sérica: 1,0mg/dL.\n\nO exame que deve ser realizado para avaliar a gravidade do quadro desta paciente, naquele momento:",
    "options": [
      "(A) Ultrassonografia abdominal.",
      "(B) Eletrocardiograma.",
      "(C) Gasometria arterial.",
      "(D) Raio-X de tórax."
    ],
    "correctAnswer": 2,
    "explanation": "A gravidade da cetoacidose é classificada pela gasometria (pH e bicarbonato): leve pH < 7,3 ou HCO₃⁻ < 18; moderada pH < 7,2 ou HCO₃⁻ < 10; grave pH < 7,1 ou HCO₃⁻ < 5 (ISPAD). A gasometria seriada também acompanha a resposta ao tratamento.",
    "commentary": "Ultrassonografia abdominal (A): a dor abdominal é comum na CAD e melhora com a correção da acidose.\n\nEletrocardiograma (B): útil para avaliar efeito do potássio, mas não classifica a gravidade.\n\nRadiografia de tórax (D): apenas na suspeita de infecção pulmonar desencadeante.",
    "reference": "ISPAD 2022 — Cetoacidose diabética / SBD 2024",
    "tags": [
      "pediatria",
      "cetoacidose diabética",
      "gasometria arterial"
    ],
    "tip": "Gravidade da CAD = pH e bicarbonato."
  },
  {
    "id": "susba2025-36",
    "topography": "8",
    "topic": "Cetoacidose diabética",
    "module": "Pediatria",
    "text": "Menina de 8 anos de idade, previamente sadia, chega à Unidade de Pronto Atendimento com história de fraqueza intensa, sede excessiva e aumento da frequência urinária há duas semanas. Há relato de perda de peso nesse período, embora se alimente normalmente. Nas últimas 24 horas, passou a apresentar dor abdominal, náuseas e vômitos frequentes. Ao exame está sonolenta, taquicárdica, com movimentos respiratórios rápidos e profundos e prega cutânea com retorno prolongado. Exames Laboratoriais: Glicemia: 480 mg/dL; Gasometria arterial: pH: 7,15; Bicarbonato: 10mEq/L; Anion gap: 22mEq/L; Cetonúria: (+++); Potássio sérico: 4,0mEq/L; Sódio sérico: 130mEq/L; Creatinina sérica: 1,0mg/dL.\n\nO principal objetivo do tratamento imediato da situação atual, a partir dos dados clínicos apresentados:",
    "options": [
      "(A) Corrigir o desequilíbrio ácido-base e os níveis de cetonas e eletrólitos.",
      "(B) Estabilizar a pressão arterial e prevenir insuficiência renal.",
      "(C) Aumentar a glicemia para níveis normais.",
      "(D) Controlar a dor abdominal."
    ],
    "correctAnswer": 0,
    "explanation": "O tratamento da CAD busca corrigir a desidratação, a acidose e a cetose e repor eletrólitos (sobretudo potássio), com hidratação venosa, insulina regular em infusão contínua (0,05–0,1 U/kg/h, após a primeira hora de fluidos) e monitorização. A redução da glicemia deve ser gradual, pelo risco de edema cerebral.",
    "commentary": "Estabilizar PA e prevenir insuficiência renal (B): a reidratação ajuda nisso, mas o objetivo central é reverter a acidose metabólica e a cetose.\n\nAumentar a glicemia (C): a glicemia está muito alta e deve ser reduzida.\n\nControlar a dor abdominal (D): é sintoma da acidose e melhora com o tratamento.",
    "reference": "ISPAD 2022 — Cetoacidose diabética / SBD 2024",
    "tags": [
      "pediatria",
      "cetoacidose diabética",
      "insulina",
      "hidratação venosa"
    ]
  },
  {
    "id": "susba2025-37",
    "topography": "10",
    "topic": "Tuberculose",
    "module": "Saúde Coletiva",
    "text": "Homem de 38 anos de idade, há três meses começou a apresentar tosse persistente, inicialmente seca, mas que evoluiu para tosse produtiva, com escarro amarelado. Refere perda de peso de cerca de 8kg e fadiga, febre baixa predominante à tarde. É morador de comunidade em periferia urbana. Vive em uma casa pequena, e divide o espaço com quatro familiares, incluindo duas crianças pequenas. Nenhum dos familiares apresenta sintomas no momento, mas todos convivem em contato próximo. Ao exame, apresenta-se emagrecido. Mucosas hipocrômicas. FR: 24ipm, PR: 91bpm, Temp: 36,8ºC. Sem linfonodos cervicais e axilares patológicos. Ap resp: presença de crépitos e roncos que se intensificam pós tosse em terço superior de pulmão direito. O paciente relata que trabalha como pedreiro, mas tem se sentido muito cansado e, muitas vezes, falta ao trabalho devido aos sintomas.\n\nIndique o critério empregado para definir este paciente como portador de tosse crônica, segundo os critérios empregados no SUS para fins epidemiológicos.",
    "options": [
      "(A) Tosse persistente mais de 10 dias com escarro purulento.",
      "(B) Tosse persistente há mais de 8 semanas, independente de outros sintomas.",
      "(C) Tosse persistente mais de 4 semanas com perda ponderal e febre.",
      "(D) Tosse com perda ponderal e febre independente da duração."
    ],
    "correctAnswer": 1,
    "explanation": "A tosse é classificada pela duração: aguda até 3 semanas, subaguda de 3 a 8 semanas e crônica acima de 8 semanas — definição que independe de outros sintomas. O paciente tem tosse há 3 meses.\n\nPara busca ativa de tuberculose, o Ministério da Saúde define o sintomático respiratório como quem tem tosse por 3 semanas ou mais (ou qualquer duração em populações vulneráveis), que deve fazer baciloscopia ou teste rápido molecular.",
    "commentary": "Mais de 10 dias com escarro purulento (A): não é critério de tosse crônica.\n\nMais de 4 semanas com perda ponderal e febre (C): a definição não depende de sintomas associados e o tempo é maior.\n\nQualquer duração (D): a duração é o próprio critério.",
    "reference": "Ministério da Saúde — Manual de recomendações para o controle da tuberculose no Brasil (2019) / SBPT — Diretrizes de tosse",
    "tags": [
      "saúde coletiva",
      "tuberculose",
      "tosse crônica",
      "sintomático respiratório"
    ],
    "tip": "Tosse: aguda < 3 sem; subaguda 3–8; crônica > 8. Sintomático respiratório para TB: ≥ 3 semanas."
  },
  {
    "id": "susba2025-38",
    "topography": "10",
    "topic": "Tuberculose",
    "module": "Saúde Coletiva",
    "text": "Homem de 38 anos de idade, há três meses começou a apresentar tosse persistente, inicialmente seca, mas que evoluiu para tosse produtiva, com escarro amarelado. Refere perda de peso de cerca de 8kg e fadiga, febre baixa predominante à tarde. É morador de comunidade em periferia urbana. Vive em uma casa pequena, e divide o espaço com quatro familiares, incluindo duas crianças pequenas. Nenhum dos familiares apresenta sintomas no momento, mas todos convivem em contato próximo. Ao exame, apresenta-se emagrecido. Mucosas hipocrômicas. FR: 24ipm, PR: 91bpm, Temp: 36,8ºC. Sem linfonodos cervicais e axilares patológicos. Ap resp: presença de crépitos e roncos que se intensificam pós tosse em terço superior de pulmão direito. O paciente relata que trabalha como pedreiro, mas tem se sentido muito cansado e, muitas vezes, falta ao trabalho devido aos sintomas.\n\nOs filhos menores deste paciente foram vacinados contra BCG. Quanto a esta vacinação, é correto afirmar que protege contra:",
    "options": [
      "(A) Meningite por tuberculose e tuberculose miliar.",
      "(B) Primoinfecção tuberculosa.",
      "(C) Tuberculose pós-primária.",
      "(D) Tuberculose extra pulmonar."
    ],
    "correctAnswer": 0,
    "explanation": "A BCG não impede a infecção pelo Mycobacterium tuberculosis nem a tuberculose pulmonar do adulto. Seu benefício é proteger crianças contra as formas graves e disseminadas: meningite tuberculosa e tuberculose miliar. Por isso é aplicada ao nascer.",
    "commentary": "Primoinfecção (B): a vacina não impede a infecção.\n\nTuberculose pós-primária (C): a proteção contra a forma pulmonar do adulto é baixa e variável.\n\nTuberculose extrapulmonar (D): genérico demais; a proteção é para as formas graves (miliar e meníngea), não para toda forma extrapulmonar.",
    "reference": "Ministério da Saúde — Manual de recomendações para o controle da tuberculose (2019) / PNI",
    "tags": [
      "saúde coletiva",
      "tuberculose",
      "BCG",
      "imunização"
    ],
    "tip": "BCG protege contra as formas graves (meníngea e miliar), não contra a infecção."
  },
  {
    "id": "susba2025-39",
    "topography": "10",
    "topic": "Tuberculose",
    "module": "Saúde Coletiva",
    "text": "Homem de 38 anos de idade, há três meses começou a apresentar tosse persistente, inicialmente seca, mas que evoluiu para tosse produtiva, com escarro amarelado. Refere perda de peso de cerca de 8kg e fadiga, febre baixa predominante à tarde. É morador de comunidade em periferia urbana. Vive em uma casa pequena, e divide o espaço com quatro familiares, incluindo duas crianças pequenas. Nenhum dos familiares apresenta sintomas no momento, mas todos convivem em contato próximo. Ao exame, apresenta-se emagrecido. Mucosas hipocrômicas. FR: 24ipm, PR: 91bpm, Temp: 36,8ºC. Sem linfonodos cervicais e axilares patológicos. Ap resp: presença de crépitos e roncos que se intensificam pós tosse em terço superior de pulmão direito. O paciente relata que trabalha como pedreiro, mas tem se sentido muito cansado e, muitas vezes, falta ao trabalho devido aos sintomas.\n\nO paciente foi confirmado como doente com tuberculose pulmonar. Indique o tipo de profilaxia a ser empregada para os familiares contactantes:",
    "options": [
      "(A) Isoniazida para os assintomáticos com PPD ou IGRA reatores após triagem para doença ativa.",
      "(B) Vacinação com BCG para contactantes, independente do histórico vacinal.",
      "(C) Uso de rifampicina durante 4 meses para todos os contactantes.",
      "(D) Terapia com isoniazida para os menores de 5 anos após PPD."
    ],
    "correctAnswer": 0,
    "explanation": "Na investigação de contatos, todos são avaliados clinicamente para afastar doença ativa. Os assintomáticos com prova tuberculínica (PPD) ou IGRA positivos têm infecção latente e devem fazer tratamento preventivo — isoniazida por 6–9 meses, ou rifampicina por 4 meses, ou rifapentina + isoniazida (3HP).\n\nCrianças contatos têm critérios próprios (no Brasil, PPD ≥ 5 mm indica tratamento independentemente da vacina BCG).",
    "commentary": "BCG para os contatos (B): não se revacina, e a BCG não é profilaxia para contatos.\n\nRifampicina para todos (C): o tratamento é só para quem tem infecção latente comprovada, após excluir doença ativa.\n\nIsoniazida só para menores de 5 anos (D): adultos com infecção latente também tratam; restringir às crianças é incorreto.",
    "reference": "Ministério da Saúde — Protocolo de vigilância da infecção latente pelo M. tuberculosis (2022)",
    "tags": [
      "saúde coletiva",
      "tuberculose",
      "infecção latente",
      "contatos",
      "isoniazida"
    ],
    "tip": "Contato: exclua TB ativa → PPD/IGRA → positivo trata infecção latente."
  },
  {
    "id": "susba2025-40",
    "topography": "5.1",
    "topic": "Climatério e menopausa",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 52 anos de idade, lavadeira. Na consulta à Unidade de Saúde da Família, queixa-se de fogachos intensos e suores noturnos há cerca de 6 meses. As ondas de calor surgem várias vezes ao dia, são súbitas e duram cerca de 3 a 5 minutos. Tem dificuldades para dormir devido aos suores noturnos. Relata menopausa há 1 ano, quando surgiram os sintomas, desde então vêm se intensificando. Sem sangramento vaginal há mais de 12 meses e relata ressecamento vaginal. Última consulta ginecológica há 2 anos, quando os exames de rotina foram normais. Nega história familiar de câncer de mama ou de trombose e nunca fez reposição hormonal. A paciente também nega tabagismo e possui uma dieta regular. Exame físico sem alterações com PA: 125x78mmHg e IMC- 24kg/m².\n\nIndique o principal objetivo de fazer reposição hormonal em pacientes como esta, com base na eficácia terapêutica demonstrada:",
    "options": [
      "(A) Redução do risco cardiovascular.",
      "(B) Prevenção de demência senil.",
      "(C) Alívio dos sintomas e melhora da qualidade de vida.",
      "(D) Prevenção do câncer de mama."
    ],
    "correctAnswer": 2,
    "explanation": "A terapia hormonal da menopausa tem como principal indicação, com eficácia comprovada, o alívio dos sintomas vasomotores (fogachos, suores noturnos) e da síndrome geniturinária, melhorando sono e qualidade de vida. Também previne perda óssea, mas não é indicada para prevenção cardiovascular ou de demência.",
    "commentary": "Redução do risco cardiovascular (A): a terapia não é indicada para esse fim (WHI); o benefício só aparece em subgrupos iniciados na janela de oportunidade.\n\nPrevenção de demência (B): não há evidência; iniciar após os 65 anos pode até aumentar o risco.\n\nPrevenção do câncer de mama (D): a terapia combinada aumenta discretamente o risco.",
    "reference": "Febrasgo — Consenso de terapêutica hormonal da menopausa / Menopause Society 2022",
    "tags": [
      "ginecologia",
      "climatério",
      "terapia hormonal da menopausa",
      "fogachos"
    ]
  },
  {
    "id": "susba2025-41",
    "topography": "5.1",
    "topic": "Climatério e menopausa",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 52 anos de idade, lavadeira. Na consulta à Unidade de Saúde da Família, queixa-se de fogachos intensos e suores noturnos há cerca de 6 meses. As ondas de calor surgem várias vezes ao dia, são súbitas e duram cerca de 3 a 5 minutos. Tem dificuldades para dormir devido aos suores noturnos. Relata menopausa há 1 ano, quando surgiram os sintomas, desde então vêm se intensificando. Sem sangramento vaginal há mais de 12 meses e relata ressecamento vaginal. Última consulta ginecológica há 2 anos, quando os exames de rotina foram normais. Nega história familiar de câncer de mama ou de trombose e nunca fez reposição hormonal. A paciente também nega tabagismo e possui uma dieta regular. Exame físico sem alterações com PA: 125x78mmHg e IMC- 24kg/m².\n\nIndique o esquema de reposição hormonal preconizado para esta paciente, no Brasil:",
    "options": [
      "(A) Estrogênio isolado via oral ou transdérmica.",
      "(B) Estrogênio combinado com progestagênio, oral ou transdérmica.",
      "(C) Progestagênio isolado via oral, sem uso de estrogênio.",
      "(D) Estrogênio combinado com testosterona, por via oral."
    ],
    "correctAnswer": 1,
    "explanation": "A paciente tem útero, então o estrogênio precisa ser associado a progestagênio para proteger o endométrio contra hiperplasia e câncer. A via pode ser oral ou transdérmica (a transdérmica tem menor risco tromboembólico).",
    "commentary": "Estrogênio isolado (A): somente em mulheres histerectomizadas.\n\nProgestagênio isolado (C): é menos eficaz para os sintomas vasomotores e não é a terapia padrão.\n\nEstrogênio com testosterona (D): a testosterona tem indicação restrita (transtorno do desejo sexual hipoativo).",
    "reference": "Febrasgo — Consenso de terapêutica hormonal da menopausa",
    "tags": [
      "ginecologia",
      "climatério",
      "terapia hormonal da menopausa",
      "progestagênio"
    ],
    "tip": "Tem útero? Estrogênio + progestagênio."
  },
  {
    "id": "susba2025-42",
    "topography": "5.1",
    "topic": "Climatério e menopausa",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 52 anos de idade, lavadeira. Na consulta à Unidade de Saúde da Família, queixa-se de fogachos intensos e suores noturnos há cerca de 6 meses. As ondas de calor surgem várias vezes ao dia, são súbitas e duram cerca de 3 a 5 minutos. Tem dificuldades para dormir devido aos suores noturnos. Relata menopausa há 1 ano, quando surgiram os sintomas, desde então vêm se intensificando. Sem sangramento vaginal há mais de 12 meses e relata ressecamento vaginal. Última consulta ginecológica há 2 anos, quando os exames de rotina foram normais. Nega história familiar de câncer de mama ou de trombose e nunca fez reposição hormonal. A paciente também nega tabagismo e possui uma dieta regular. Exame\n\nfísico sem alterações com PA: 125x78mmHg e IMC- 24kg/m².\n\nA situação que representa contraindicação absoluta para reposição hormonal é:",
    "options": [
      "(A) Doença hepática ativa.",
      "(B) História familiar de cardiopatia coronariana.",
      "(C) Osteoporose confirmada por densitometria óssea.",
      "(D) Trombose venosa profunda prévia."
    ],
    "correctAnswer": 3,
    "explanation": "Tromboembolismo venoso prévio (TVP ou TEP) é contraindicação absoluta à terapia hormonal sistêmica: o estrogênio, principalmente oral, aumenta a síntese hepática de fatores de coagulação e o risco de recorrência.\n\nOutras contraindicações: câncer de mama ou de endométrio, sangramento vaginal não esclarecido, doença coronariana ou cerebrovascular, doença hepática ativa grave, porfiria e lúpus com risco trombótico.",
    "commentary": "Doença hepática ativa (A): também consta como contraindicação absoluta nos consensos (doença hepática descompensada/grave) — por isso a questão é discutível; o gabarito prioriza a trombose.\n\nHistória familiar de coronariopatia (B): não contraindica; contraindica a doença coronariana da própria paciente.\n\nOsteoporose (C): é benefício da terapia, não contraindicação.",
    "reference": "Febrasgo — Consenso de terapêutica hormonal da menopausa / Menopause Society 2022",
    "tags": [
      "ginecologia",
      "climatério",
      "terapia hormonal da menopausa",
      "contraindicações",
      "tromboembolismo venoso"
    ],
    "alert": "Gabarito discutível: doença hepática ativa grave (A) também é contraindicação absoluta à terapia hormonal nos consensos. O gabarito é D; A também é aceita aqui.",
    "alsoAccepted": [
      0
    ]
  },
  {
    "id": "susba2025-43",
    "topography": "6.2",
    "topic": "Pé diabético",
    "module": "Clínica Médica",
    "text": "Homem, 57 anos de idade, residente em uma área rural de difícil acesso, é portador de diabetes mellitus tipo 2 há 12 anos. Em visita domiciliar, ele relata usar metformina 850mg, 3 vezes ao dia, e não faz com frequência o controle de glicemia. Não tem usado a medicação, em virtude da dificuldade de comparecer à Unidade de Saúde. Nos últimos três meses, começou a notar uma ferida no pé esquerdo, que inicialmente era pequena, mas que tem aumentado de tamanho, com bordas endurecidas e exsudato purulento esporádico. Também apresenta dor de intensidade moderada que piora ao andar, mas continua trabalhando na lavoura. Ao exame físico, observa-se uma úlcera plantar com secreção amarela serosa, presença de pulsos periféricos diminuídos e uma área ao redor da lesão com edema discreto e rubor. Foi feita uma glicemia capilar: 240mg/dl no momento da consulta.\n\nCom relação à necessidade de antibioticoterapia sistêmica neste paciente, é correto afirmar que:",
    "options": [
      "(A) A ulceração descrita é compatível com lesão isquêmica, sem indicação no momento para o uso de antibióticos sistêmicos.",
      "(B) A presença de pulsos periféricos diminuídos e dor moderada justifica o início de antibioticoterapia.",
      "(C) A presença de exsudato, edema e rubor indica infecção, sendo necessário o início de antibioticoterapia sistêmica.",
      "(D) A glicemia elevada (240mg/dl) é o principal critério que indica o uso de antibióticos sistêmicos."
    ],
    "correctAnswer": 2,
    "explanation": "O diagnóstico de infecção no pé diabético é clínico: pelo menos dois sinais entre edema/induração, eritema, dor ou sensibilidade, calor e secreção purulenta (IWGDF/IDSA). O paciente tem exsudato, edema e rubor ao redor da úlcera: há infecção e é indicada antibioticoterapia sistêmica. Úlceras sem sinais de infecção não recebem antibiótico.",
    "commentary": "Lesão isquêmica sem antibiótico (A): pode haver componente isquêmico (pulsos diminuídos), mas os sinais inflamatórios indicam infecção.\n\nPulsos diminuídos e dor (B): sugerem doença arterial, não infecção; não são critérios para antibiótico.\n\nGlicemia de 240 (D): a hiperglicemia não é critério para antibiótico.",
    "reference": "IWGDF/IDSA 2023 — Infecção no pé diabético / Diretriz da Sociedade Brasileira de Diabetes 2024",
    "tags": [
      "pé diabético",
      "diabetes tipo 2",
      "infecção",
      "antibioticoterapia",
      "endocrinologia"
    ],
    "tip": "Infecção no pé diabético é clínica: 2 ou mais sinais flogísticos ou pus."
  },
  {
    "id": "susba2025-44",
    "topography": "6.2",
    "topic": "Pé diabético",
    "module": "Clínica Médica",
    "text": "Homem, 57 anos de idade, residente em uma área rural de difícil acesso, é portador de diabetes mellitus tipo 2 há 12 anos. Em visita domiciliar, ele relata usar metformina 850mg, 3 vezes ao dia, e não faz com frequência o controle de glicemia. Não tem usado a medicação, em virtude da dificuldade de comparecer à Unidade de Saúde. Nos últimos três meses, começou a notar uma ferida no pé esquerdo, que inicialmente era pequena, mas que tem aumentado de tamanho, com bordas endurecidas e exsudato purulento esporádico. Também apresenta dor de intensidade moderada que piora ao andar, mas continua trabalhando na lavoura. Ao exame físico, observa-se uma úlcera plantar com secreção amarela serosa, presença de pulsos periféricos diminuídos e uma área ao redor da lesão com edema discreto e rubor. Foi feita uma glicemia capilar: 240mg/dl no momento da consulta.\n\nIndique a melhor conduta inicial para o manejo deste paciente, considerando o cenário para o tratamento.",
    "options": [
      "(A) Iniciar tratamento com antibióticos orais e manter o paciente em repouso absoluto, revisitando-o com uma semana.",
      "(B) Iniciar tratamento com antibióticos orais e referenciar o paciente ao serviço hospitalar para acompanhamento.",
      "(C) Encaminhar o paciente para avaliação cirúrgica ambulatorial em unidade de cuidados secundários, para debridamento",
      "(D) Estabelecer cuidados diários (debridamento e curativo) pelo agente de saúde, com ajuste da medicação para o controle glicêmico."
    ],
    "correctAnswer": 1,
    "explanation": "A úlcera é infectada, há sinais de doença arterial periférica (pulsos diminuídos), glicemia descontrolada e o paciente vive em área rural de difícil acesso. Inicia-se antibiótico oral, mas o paciente precisa ser referenciado ao serviço hospitalar para avaliação de osteomielite (radiografia, exames), da perfusão (índice tornozelo-braço, doppler), desbridamento e controle glicêmico.",
    "commentary": "Antibiótico e repouso com revisita em uma semana (A): com isquemia associada e difícil acesso, a reavaliação seria tardia e insuficiente.\n\nAvaliação cirúrgica ambulatorial (C): adia o antibiótico em uma úlcera já infectada.\n\nDesbridamento pelo agente de saúde (D): desbridamento não é atribuição do ACS e não trata a infecção.",
    "reference": "IWGDF 2023 / SBD 2024 / Ministério da Saúde — Manual do pé diabético (2016)",
    "tags": [
      "pé diabético",
      "diabetes tipo 2",
      "atenção primária",
      "referência e contrarreferência"
    ]
  },
  {
    "id": "susba2025-45",
    "topography": "6.2",
    "topic": "Pé diabético",
    "module": "Clínica Médica",
    "text": "Homem, 57 anos de idade, residente em uma área rural de difícil acesso, é portador de diabetes mellitus tipo 2 há 12 anos. Em visita domiciliar, ele relata usar metformina 850mg, 3 vezes ao dia, e não faz com frequência o controle de glicemia. Não tem usado a medicação, em virtude da dificuldade de comparecer à Unidade de Saúde. Nos últimos três meses, começou a notar uma ferida no pé esquerdo, que inicialmente era pequena, mas que tem aumentado de tamanho, com bordas endurecidas e exsudato purulento esporádico. Também apresenta dor de intensidade moderada que piora ao andar, mas continua trabalhando na lavoura. Ao exame físico, observa-se uma úlcera plantar com secreção amarela serosa, presença de pulsos periféricos diminuídos e uma área ao redor da lesão com edema discreto e rubor. Foi feita uma glicemia capilar: 240mg/dl no momento da consulta.\n\nIndique aspectos de evolução que podem determinar necessidade de amputação no caso apresentado:",
    "options": [
      "(A) Infecção sistêmica, necrose irreversível ou osteomielite.",
      "(B) Miosite infecciosa com pulsos periféricos diminuídos.",
      "(C) Incapacidade de controle glicêmico com insulinização adequada.",
      "(D) Neuropatia periférica grave com artropatia de Charcot."
    ],
    "correctAnswer": 0,
    "explanation": "A amputação se torna necessária quando a evolução leva a infecção sistêmica grave (sepse) sem controle do foco, necrose/gangrena irreversível ou osteomielite extensa não controlada com tratamento clínico e desbridamento — situações em que não é possível salvar o membro ou o segmento.",
    "commentary": "Miosite com pulsos diminuídos (B): pode ser tratada com antibiótico, desbridamento e revascularização.\n\nDescontrole glicêmico (C): piora o prognóstico, mas não indica amputação.\n\nNeuropatia e Charcot (D): são tratados com descarga e órteses; a amputação só se considera em deformidades instáveis e refratárias.",
    "reference": "IWGDF 2023 / Ministério da Saúde — Manual do pé diabético (2016)",
    "tags": [
      "pé diabético",
      "diabetes tipo 2",
      "amputação",
      "osteomielite"
    ]
  }
];
