import { Question } from '../types';

// FAMERP 2025 (SP) — residência médica. 80 questões, 4 alternativas.
// Gabarito conferido no gabarito comentado do AjudaMédico; explicações com texto próprio.
export const FAMERP_2025_QUESTIONS: Question[] = [
  {
    "id": "famerp2025-1",
    "topography": "4.1",
    "topic": "Distúrbios hidroeletrolíticos",
    "module": "Clínica Médica",
    "text": "Paciente de 58 anos, gênero masculino, etilista importante é admitido em unidade de emergência após apresentar episódio de crise convulsiva. Ao exame físico, apresenta-se confuso no tempo e espaço. Exames complementares colhidos evidenciaram Mg²⁺=0,9mg/dL.\n\nEm decorrência deste achado laboratorial qual outro distúrbio hidroeletrolítico você esperaria encontrar neste paciente?",
    "options": [
      "Hiponatremia",
      "Hipercalemia",
      "Hipocalcemia",
      "Hiperfosfatemia"
    ],
    "correctAnswer": 2,
    "explanation": "Etilista com convulsão e confusão mental e magnésio muito baixo (0,9 mg/dL). O álcool causa hipomagnesemia por ingestão pobre, má absorção e perda renal.\n\nO magnésio é necessário para a liberação do PTH e para a resposta dos tecidos a ele. Na hipomagnesemia grave há hipoparatireoidismo funcional e resistência ao PTH, e o cálcio cai. Essa hipocalcemia não se corrige só com cálcio: é preciso repor o magnésio primeiro. A convulsão pode ser atribuída à própria hipomagnesemia e à hipocalcemia associada.",
    "commentary": "Hiponatremia (A): pode aparecer no etilista (potomania, desnutrição), mas não é consequência fisiopatológica da falta de magnésio.\n\nHipercalemia (B): o distúrbio associado é o oposto, a hipocalemia — sem magnésio, os canais ROMK do néfron distal ficam abertos e o potássio é perdido na urina.\n\nHiperfosfatemia (D): não é achado característico; no etilista o fósforo costuma estar baixo, sobretudo na realimentação.",
    "tip": "Magnésio baixo puxa junto potássio e cálcio baixos — e nenhum dos dois corrige sem repor o magnésio antes.",
    "reference": "Harrison's Principles of Internal Medicine, 21ª ed. — Distúrbios do magnésio e do cálcio. UpToDate: Hypomagnesemia: clinical manifestations.",
    "tags": [
      "hipomagnesemia",
      "hipocalcemia",
      "etilismo",
      "distúrbios hidroeletrolíticos"
    ]
  },
  {
    "id": "famerp2025-2",
    "topography": "3.1",
    "topic": "Doença celíaca",
    "module": "Clínica Médica",
    "text": "Paciente de 24 anos, gênero feminino, agendou consulta em ambulatório de clínica médica para investigar quadro de astenia progressiva nos últimos 4 meses associado a oligomenorreia e episódios de dores abdominais difusas. Dentre as possibilidades diagnósticas foi pensado em doença celíaca. Considerando esta hipótese diagnóstica foi colhido exame do anticorpo anti-transglutaminase IgA com resultado positivo. Realizada endoscopia digestiva com biopsias cujo resultado patológico veio compatível com MARSH 1.\n\nDiante deste quadro qual deveria ser a conduta considerando a hipótese diagnóstica mencionada?",
    "options": [
      "Tratar como doença celíaca",
      "Pesquisa HLA-DQ2 e HLA-DQ8",
      "Dosagem anticorpo anti-endomísio IGA e IGG",
      "Teste de exposição ao glúten por 12 semanas e repetir a EDA"
    ],
    "correctAnswer": 1,
    "explanation": "A sorologia (anti-transglutaminase IgA) é positiva, mas a biópsia mostra apenas Marsh 1 — aumento de linfócitos intraepiteliais, sem atrofia vilositária. Marsh 1 é inespecífico (AINE, H. pylori, supercrescimento bacteriano, Crohn) e não confirma doença celíaca. Sorologia positiva com mucosa sem atrofia caracteriza a doença celíaca potencial.\n\nNessa discordância, a pesquisa de HLA-DQ2/DQ8 ajuda: a doença praticamente não ocorre sem esses alelos, então um resultado negativo afasta o diagnóstico com alto valor preditivo negativo, e um positivo mantém a hipótese e justifica seguimento.",
    "commentary": "Tratar como doença celíaca (A): a dieta sem glúten é por toda a vida e de alto impacto; não deve ser iniciada sem confirmação (atrofia vilositária) ou suporte adicional.\n\nAnti-endomísio IgA e IgG (C): reforçaria a sorologia, que já é positiva; o problema está na histologia. Além disso, IgG só tem utilidade se houver deficiência de IgA.\n\nProvocação com glúten por 12 semanas (D): só faz sentido em quem já está em dieta sem glúten; a paciente está consumindo glúten.",
    "tip": "HLA-DQ2/DQ8 serve para EXCLUIR doença celíaca: negativo praticamente afasta o diagnóstico.",
    "reference": "Rubio-Tapia A et al. ACG Clinical Guideline: Diagnosis and Management of Celiac Disease. Am J Gastroenterol, 2023. Federação Brasileira de Gastroenterologia — Doença celíaca.",
    "tags": [
      "doença celíaca",
      "classificação de Marsh",
      "HLA-DQ2",
      "HLA-DQ8",
      "doença celíaca potencial"
    ]
  },
  {
    "id": "famerp2025-3",
    "topography": "8",
    "topic": "Distúrbios do cálcio",
    "module": "Clínica Médica",
    "text": "Paciente de 75 anos, gênero feminino, foi admitida em unidade de emergência após episódio de crise convulsiva sucedida por quadro de confusão mental. Em exames colhidos na admissão foi encontrado Ca²⁺=12,8mg/dL.\n\nDentre as possibilidades diagnósticas para o quadro do paciente, em qual haveria benefício a utilização de glicocorticoides?",
    "options": [
      "Linfoma",
      "Tuberculose",
      "Neoplasia de mama",
      "Hiperparatireoidismo primário"
    ],
    "correctAnswer": 0,
    "explanation": "Hipercalcemia de 12,8 mg/dL com convulsão e confusão. Os glicocorticoides são úteis quando a hipercalcemia depende de produção excessiva de calcitriol (1,25-OH vitamina D) por macrófagos ou células tumorais, como nos linfomas e nas doenças granulomatosas. O corticoide inibe a 1-alfa-hidroxilase extrarrenal e reduz a absorção intestinal de cálcio.\n\nNo linfoma, além disso, o corticoide tem efeito citotóxico direto sobre as células linfoides.",
    "commentary": "Tuberculose (B): é doença granulomatosa e pode elevar o calcitriol, mas a hipercalcemia na tuberculose é rara e o corticoide não é a conduta clássica; entre as opções, o linfoma é o exemplo típico de resposta ao corticoide.\n\nNeoplasia de mama (C): a hipercalcemia ocorre por PTHrP (humoral) ou metástases ósseas osteolíticas; trata-se com hidratação, bisfosfonato ou denosumabe, sem papel do corticoide.\n\nHiperparatireoidismo primário (D): a causa é o PTH elevado; o tratamento é a paratireoidectomia, e o corticoide não tem efeito.",
    "tip": "Corticoide na hipercalcemia = excesso de calcitriol: linfoma, sarcoidose e outras granulomatoses.",
    "reference": "Harrison's Principles of Internal Medicine, 21ª ed. — Hipercalcemia. Endocrine Society. Treatment of hypercalcemia of malignancy in adults: guideline, 2023.",
    "tags": [
      "hipercalcemia",
      "glicocorticoides",
      "linfoma",
      "calcitriol"
    ]
  },
  {
    "id": "famerp2025-4",
    "topography": "6.1",
    "topic": "Pseudogota",
    "module": "Clínica Médica",
    "text": "Paciente de 50 anos, gênero masculino, com histórico de hipertensão e doença renal crônica é admitido por quadro de dor intensa e edema em joelho direito com início há 2 dias. Realizada artrocentese com líquido sinovial revelando cristais birrefringentes positivos sob microscopia de luz polarizada.\n\nQual é o diagnóstico mais provável?",
    "options": [
      "Gota",
      "Pseudogota",
      "Artrite séptica",
      "Artrite reumatoide"
    ],
    "correctAnswer": 1,
    "explanation": "Monoartrite aguda de joelho com cristais de birrefringência POSITIVA à luz polarizada: cristais de pirofosfato de cálcio diidratado (romboides, fracamente positivos), que definem a artropatia por pirofosfato — pseudogota. O joelho é a articulação mais acometida.",
    "commentary": "Gota (A): cristais de urato monossódico, em forma de agulha, com birrefringência NEGATIVA forte.\n\nArtrite séptica (C): o diagnóstico é por celularidade elevada (em geral > 50.000/mm³ com neutrófilos), Gram e cultura; cristais não definem infecção, embora possam coexistir.\n\nArtrite reumatoide (D): poliartrite crônica, simétrica, de pequenas articulações; não há cristais no líquido sinovial.",
    "tip": "Pirofosfato: Positivo, Pseudogota, romboide. Urato: negativo, agulha.",
    "reference": "Rosenthal AK, Ryan LM. Calcium Pyrophosphate Deposition Disease. N Engl J Med, 2016. Sociedade Brasileira de Reumatologia — Artropatias microcristalinas.",
    "tags": [
      "pseudogota",
      "pirofosfato de cálcio",
      "líquido sinovial",
      "monoartrite"
    ]
  },
  {
    "id": "famerp2025-5",
    "topography": "2.1",
    "topic": "Derrame pleural",
    "module": "Clínica Médica",
    "text": "Paciente de 45 anos, gênero feminino, é admitida por quadro de tosse produtiva, febre e dispneia há 3 dias. Realizou Rx de tórax cuja imagem é compatível com pneumonia de lobo inferior direito associado a velamento do seio costofrênico ipsilateral. Ao POCUS (Point-of Care-Ultrasound) foi possível confirmar a hipótese de derrame pleural tendo sido realizada toracocentese e prescritos ceftriaxona associado a azitromicina. Os achados bioquímicos do líquido pleural evidenciam proteínas totais=4,5g/dl (sérica=6,8), DHL=1250UI/L, pH=6,9, celularidade=1800 células/mm³ (88% neutrófilos), ADA=120UI/L e cultura em andamento.\n\nQual deve ser a conduta mais adequada neste momento?",
    "options": [
      "Indicar drenagem torácica",
      "Escalonar antibioticoterapia para tazocin e vancomicina",
      "Manter antibioticoterapia e reavaliar resposta clínica em 48h",
      "Investigar tuberculose como condição facilitadora da pneumonia bacteriana"
    ],
    "correctAnswer": 0,
    "explanation": "Derrame parapneumônico com características de complicado: pH 6,9 (< 7,2), DHL 1.250 (> 1.000) e predomínio neutrofílico. pH < 7,2, glicose < 60 mg/dL, DHL > 1.000, pus ou bactérias no Gram/cultura indicam drenagem torácica, porque o antibiótico isolado não resolve a coleção e há risco de empiema e encarceramento pulmonar.\n\nA ADA alta (120) não indica tuberculose aqui: derrames parapneumônicos complicados e empiemas também elevam muito a ADA, e o quadro é agudo com neutrófilos (na tuberculose predominam linfócitos).",
    "commentary": "Escalonar para piperacilina-tazobactam e vancomicina (B): o problema é a coleção não drenada, não o espectro do antibiótico.\n\nManter antibiótico e reavaliar em 48 h (C): com pH 6,9 a drenagem não deve ser adiada.\n\nInvestigar tuberculose (D): o derrame da tuberculose é linfocítico e de evolução subaguda; a ADA elevada é explicada pelo derrame purulento.",
    "tip": "Derrame parapneumônico: pH < 7,2, glicose < 60, DHL > 1.000 ou pus = drenar.",
    "reference": "Light RW. Pleural Diseases, 6ª ed. British Thoracic Society Guideline for pleural disease, 2023. SBPT — Diretrizes de derrame pleural.",
    "tags": [
      "derrame pleural",
      "derrame parapneumônico complicado",
      "drenagem torácica",
      "critérios de Light"
    ]
  },
  {
    "id": "famerp2025-6",
    "topography": "4.1",
    "topic": "Distúrbios ácido-base",
    "module": "Clínica Médica",
    "text": "Paciente de 32 anos, gênero feminino, foi trazida à emergência por apresentar quadro de intensa fraqueza em membros superiores e inferiores associados a câimbras. Exames preliminares colhidos na sala de emergência mostravam: creatinina=0,9mg/dL, glicemia de jejum=95mg/dL, Na⁺=135mEq/L, Ca²⁺=9,8mg/dL, Mg²⁺=2,0mg/dL, K⁺=2,5mEq/L Cl⁻=105mEq/L, gasometria venosa com pH=7,28, HCO₃⁻=20 mEq/L e pCO₂=30; hemograma dentro dos valores referência e urina I com densidade 1015, pH=6,0 e ausência de leucocitúria ou hematúria.\n\nConsiderando as informações disponibilizadas qual é a hipótese diagnóstica mais provável entre as opções abaixo?",
    "options": [
      "Amiloidose",
      "Mieloma múltiplo",
      "Doença de Addison",
      "Síndrome de Sjögren"
    ],
    "correctAnswer": 3,
    "explanation": "Hipocalemia grave (2,5) com fraqueza e acidose metabólica (pH 7,28, HCO₃⁻ 20) com ânion gap normal: 135 − (105 + 20) = 10 — acidose hiperclorêmica. A urina tem pH 6,0, inapropriadamente alto para quem está acidêmico: o rim não consegue acidificar a urina. Esse é o perfil da acidose tubular renal distal (tipo 1), que cursa com hipocalemia.\n\nEm mulher jovem, a síndrome de Sjögren é uma das principais causas de ATR distal (nefrite intersticial com lesão das células intercaladas), podendo ser a primeira manifestação da doença.",
    "commentary": "Amiloidose (A): o acometimento renal típico é síndrome nefrótica; ATR é rara.\n\nMieloma múltiplo (B): associa-se a ATR proximal (síndrome de Fanconi), hipercalcemia, anemia e insuficiência renal; o cálcio, o hemograma e a creatinina estão normais.\n\nDoença de Addison (C): cursa com hipercalemia e hiponatremia (falta de aldosterona), ou seja, ATR tipo 4 — o oposto do quadro.",
    "tip": "Acidose com AG normal + hipocalemia + pH urinário > 5,5 = ATR distal. Em mulher jovem, pense em Sjögren.",
    "reference": "Harrison's Principles of Internal Medicine, 21ª ed. — Acidose tubular renal. Evans RD et al. Renal involvement in primary Sjögren's syndrome. Rheumatology, 2015.",
    "tags": [
      "acidose tubular renal distal",
      "hipocalemia",
      "síndrome de Sjögren",
      "ânion gap normal"
    ]
  },
  {
    "id": "famerp2025-7",
    "topography": "8",
    "topic": "Cetoacidose diabética",
    "module": "Clínica Médica",
    "text": "Uma menina de 18 anos é trazida pelos pais devido a quadro de confusão mental e história de duas semanas de sede intensa e perda de 3 quilos. Sinais vitais na admissão: pressão arterial: 92/67mmHg; frequência cardíaca: 108/min; frequência respiratória: 30/min. Ela se apresentava desidratada. Exames da admissão:\n\n• Sódio: 129 mEq/L (VR: 135–145)\n• Potássio: 3,1 mEq/L (VR: 3,5–5,0)\n• Creatinina: 2,5 mg/dL (VR: 0,5–1,1)\n• Glicose: 870 mg/dL (VR: 70–99)\n• Cálcio: 9,5 mg/dL (VR: 8,6–10,2)\n• Fósforo: 2,8 mg/dL (VR: 3,0–4,5)\n• Cloro: 89 mEq/L (VR: 98–106)\n• Cetonemia: positiva (VR: negativa)\n• Gasometria arterial — pH/bicarbonato: 7,10 / 10 (VR: 7,35–7,45 / 22–26)\n\nFoi iniciada expansão com fluidos. Qual a próxima terapia?",
    "options": [
      "Bicarbonato de sódio",
      "Reposição de fósforo",
      "Reposição de potássio",
      "Insulina regular em bomba de infusão"
    ],
    "correctAnswer": 2,
    "explanation": "Jovem com polidipsia, perda de peso, glicemia de 870 mg/dL, cetonemia positiva e pH 7,10 com bicarbonato 10: cetoacidose diabética (provavelmente abertura de DM1).\n\nDepois da expansão volêmica, o passo seguinte é olhar o potássio antes da insulina. Com K⁺ < 3,3 mEq/L (aqui 3,1), a insulina deve ser adiada e o potássio reposto primeiro, porque a insulina joga potássio para dentro das células e pode causar hipocalemia grave com arritmia e fraqueza respiratória. Quando o K⁺ passa de 3,3, inicia-se a insulina regular em infusão contínua.",
    "commentary": "Bicarbonato de sódio (A): só é considerado com pH < 6,9 (ou 7,0 em alguns protocolos); com pH 7,10 não está indicado e ainda piora a hipocalemia.\n\nReposição de fósforo (B): reposição rotineira não traz benefício; é feita só se o fósforo estiver < 1,0 mg/dL ou houver insuficiência cardíaca, respiratória ou anemia hemolítica.\n\nInsulina em bomba de infusão (D): é o tratamento da CAD, mas só depois de o potássio estar ≥ 3,3 mEq/L.",
    "tip": "CAD: soro primeiro, depois olhe o potássio. K < 3,3 = repõe K e segura a insulina.",
    "reference": "Umpierrez GE et al. Hyperglycemic Crises in Adults With Diabetes: A Consensus Report. Diabetes Care, 2024. Sociedade Brasileira de Diabetes. Diretriz 2024 — Crises hiperglicêmicas.",
    "tags": [
      "cetoacidose diabética",
      "hipocalemia",
      "insulina",
      "diabetes mellitus tipo 1"
    ]
  },
  {
    "id": "famerp2025-8",
    "topography": "4.1",
    "topic": "Doença renal crônica",
    "module": "Clínica Médica",
    "text": "Homem de 62 anos com doença renal crônica estágio G3aA3, hipertenso e diabético vem à consulta para avaliação da pressão arterial. Está em uso de anlodipinino 10 mg/dia; losartana 100 mg/dia e carvedilol 6,25 mg 2 x ao dia. Ele também faz uso de atorvastatina, aspirina e dapagliflozina. Ele não monitoriza sua pressão em domicílio. Ao exame físico, sua pressão encontra-se 117/80 mmHg e sua frequência cardíaca de 72 bpm. Sua creatinina sérica é 2,2 mg/dL (referência: 0,7-1,3) e sua relação proteína/creatinina urinária é 0,5mg/mg (referência <0,2).\n\nQual medida deve ser tomada em relação ao seu controle pressórico:",
    "options": [
      "Sem mudanças",
      "Suspender carvedilol",
      "Suspender anlodipino",
      "Trocar losartana por valsartana"
    ],
    "correctAnswer": 2,
    "explanation": "DRC G3aA3 em diabético hipertenso, já com as drogas que comprovadamente retardam a progressão: BRA em dose plena (losartana 100 mg) e iSGLT2 (dapagliflozina). A PA está em 117/80, dentro da meta do KDIGO (sistólica < 120 mmHg quando tolerada).\n\nO raciocínio do gabarito: com a PA no limite inferior da meta e proteinúria importante, a droga a retirar é a que não tem efeito nefroprotetor e que, por vasodilatar a arteríola aferente, pode aumentar a pressão intraglomerular — o anlodipino (bloqueador de canal de cálcio di-hidropiridínico). Assim se mantém BRA, iSGLT2 e o betabloqueador, reduzindo o risco de hipotensão.",
    "commentary": "Sem mudanças (A): é uma resposta defensável, já que a PA está na meta; o gabarito considerou que o esquema pode ser otimizado retirando a droga sem benefício renal.\n\nSuspender carvedilol (B): a dose é baixa e o betabloqueador tem outros benefícios cardiovasculares no diabético; para o gabarito, o anlodipino é a droga menos desejável na DRC proteinúrica.\n\nTrocar losartana por valsartana (D): são da mesma classe, com o mesmo efeito antiproteinúrico; não há ganho na troca.",
    "alert": "Gabarito discutível: com PA de 117/80 mmHg (dentro da meta do KDIGO 2021/2024) e sem sintomas de hipotensão, manter o esquema (A) também é uma conduta defensável. O gabarito oficial é C.",
    "tip": "DRC proteinúrica: BRA/IECA + iSGLT2 são intocáveis; o anlodipino é o primeiro a sair se a PA ficar baixa.",
    "reference": "KDIGO 2021 Clinical Practice Guideline for the Management of Blood Pressure in CKD. KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of CKD.",
    "tags": [
      "doença renal crônica",
      "hipertensão arterial",
      "proteinúria",
      "bloqueador de canal de cálcio",
      "KDIGO"
    ]
  },
  {
    "id": "famerp2025-9",
    "topography": "8",
    "topic": "Diabetes mellitus tipo 1 e 2",
    "module": "Clínica Médica",
    "text": "Um homem de 45 anos, com diagnóstico recente de diabetes mellitus tipo 2 apresenta-se para consulta de seguimento. Ele encontra-se com IMC de 32 kg/m² e sua hemoglobina glicada é de 8,5%. Seu médico recomenda mudanças no estilo de vida e inicia a metformina. Após 3 meses, a hemoglobina glicada cai para 7,8%, mas ele expressa dificuldades em manter uma alimentação adequada e está preocupado com o risco de complicações do diabetes.\n\nConsiderando as diretrizes atuais para o manejo do diabetes tipo 2, qual das seguintes condutas é a mais indicada para o próximo passo no tratamento?",
    "options": [
      "Suspender a metformina e introduzir uma sulfonilureia.",
      "Introduzir insulina basal e reduzir a dose de metformina.",
      "Iniciar um agonista do receptor de GLP-1 junto com a metformina.",
      "Manter apenas a intervenção no estilo de vida e reavaliar em 6 meses."
    ],
    "correctAnswer": 2,
    "explanation": "DM2 com obesidade (IMC 32), HbA1c ainda acima da meta (7,8%) após 3 meses de metformina e dificuldade com a dieta. O próximo passo é intensificar com uma segunda droga, escolhida pelo perfil do paciente. Na obesidade, o agonista do receptor de GLP-1 é a escolha preferencial: reduz a HbA1c de forma potente, promove perda de peso, não causa hipoglicemia e tem benefício cardiovascular comprovado.\n\nA metformina é mantida como base do tratamento.",
    "commentary": "Trocar metformina por sulfonilureia (A): não se suspende a metformina sem contraindicação; a sulfonilureia engorda e causa hipoglicemia, péssima escolha no obeso.\n\nInsulina basal (B): reservada para HbA1c muito alta (> 9–10%), sintomas de catabolismo ou falha de outras drogas; também favorece ganho de peso.\n\nApenas estilo de vida por 6 meses (D): a HbA1c está fora da meta; esperar mais é inércia terapêutica.",
    "tip": "DM2 obeso fora da meta com metformina: some GLP-1 (ou iSGLT2), não sulfonilureia.",
    "reference": "Sociedade Brasileira de Diabetes. Diretriz 2024 — Tratamento farmacológico do DM2. American Diabetes Association. Standards of Care in Diabetes — 2025.",
    "tags": [
      "diabetes mellitus tipo 2",
      "agonista do receptor de GLP-1",
      "metformina",
      "obesidade"
    ]
  },
  {
    "id": "famerp2025-10",
    "topography": "4.1",
    "topic": "Distúrbios ácido-base",
    "module": "Clínica Médica",
    "text": "Um homem de 60 anos com histórico de insuficiência renal crônica e diabetes mellitus tipo 2 é admitido no pronto-socorro com letargia e fraqueza. Ele tem um histórico recente de diarreia persistente. Seus exames laboratoriais mostram os seguintes resultados:\n\n• pH: 7,25 (VR: 7,35–7,45)\n• pCO₂: 30 mmHg (VR: 35–45)\n• HCO₃⁻: 15 mEq/L (VR: 22–26)\n• Na⁺: 140 mEq/L\n• K⁺: 4,5 mEq/L\n• Cl⁻: 115 mEq/L\n• Lactato: 0,8 mmol/L\n• Creatinina: 2,2 mg/dL\n\nCom base nesses resultados, qual é o diagnóstico mais provável do distúrbio ácido-base?",
    "options": [
      "Acidose metabólica hiperclorêmica",
      "Acidose respiratória e acidose metabólica",
      "Acidose metabólica com ânion gap aumentado",
      "Acidose metabólica com ânion gap aumentado e acidose metabólica hiperclorêmica"
    ],
    "correctAnswer": 0,
    "explanation": "pH 7,25 e HCO₃⁻ 15: acidose metabólica. Compensação respiratória esperada (Winter): pCO₂ = 1,5 × 15 + 8 = 30,5 ± 2 — a pCO₂ medida (30) é adequada, então não há distúrbio respiratório associado.\n\nÂnion gap = Na⁺ − (Cl⁻ + HCO₃⁻) = 140 − (115 + 15) = 10, normal. Lactato normal. Logo, acidose metabólica hiperclorêmica (AG normal), compatível com a perda de bicarbonato pela diarreia, somada à DRC.",
    "commentary": "Acidose respiratória associada (B): a pCO₂ está baixa e dentro do esperado pela fórmula de Winter; uma acidose respiratória exigiria pCO₂ acima de ~32.\n\nAcidose com AG aumentado (C): o AG calculado é 10, normal.\n\nAG aumentado + hiperclorêmica (D): o delta-delta só se aplica se o AG estiver aumentado, o que não é o caso.",
    "tip": "Diarreia = acidose metabólica hiperclorêmica (AG normal). Sempre calcule AG e Winter.",
    "reference": "Berend K, de Vries APJ, Gans ROB. Physiological Approach to Assessment of Acid–Base Disturbances. N Engl J Med, 2014.",
    "tags": [
      "acidose metabólica",
      "ânion gap",
      "fórmula de Winter",
      "diarreia"
    ]
  },
  {
    "id": "famerp2025-11",
    "topography": "6.1",
    "topic": "Lúpus eritematoso sistêmico",
    "module": "Clínica Médica",
    "text": "Uma mulher de 28 anos apresenta-se ao consultório devido alteração no exame de urina. Trazia exames com proteinúria 1g/24 horas e anemia - hemoglobina 10,5 g/dL. Em investigação apresentou FAN positivo 1:360. Realizada biópsia renal, demonstrava nefrite lúpica classe 4.\n\nCom base nos achados acima, em relação ao diagnóstico da paciente:",
    "options": [
      "Lúpus eritematoso sistêmico, pois possui FAN positivo com titulação elevada e proteinúria com biópsia compatível, computando 6 pontos pelos critérios EULAR",
      "Não é lúpus eritematoso sistêmico, pois paciente não possui sintomas compatíveis",
      "Não é lúpus eritematoso sistêmico, pois apesar do FAN positivo com titulação elevada, essa alteração pode ser encontrada na população geral",
      "Lúpus eritematoso sistêmico, pois possui FAN positivo em titulação elevada e biópsia renal compatível com nefrite lúpica classe 4, o que é suficiente para diagnóstico"
    ],
    "correctAnswer": 3,
    "explanation": "Pelos critérios classificatórios EULAR/ACR 2019, o FAN ≥ 1:80 é o critério de entrada (a paciente tem 1:360). Depois somam-se pontos, e são necessários ≥ 10 pontos, com pelo menos um critério clínico.\n\nNo domínio renal, a nefrite lúpica classe III ou IV na biópsia vale 10 pontos — sozinha já atinge o total. Por isso FAN positivo + biópsia com nefrite classe IV é suficiente para classificar como LES. Dentro de um mesmo domínio conta só o item de maior peso (a proteinúria, que vale 4, não se soma).",
    "commentary": "LES com 6 pontos (A): a conclusão está certa, mas a pontuação está errada — classe III/IV vale 10 pontos (classe II ou V vale 8; proteinúria > 0,5 g/24 h vale 4).\n\nNão é LES por falta de sintomas (B): nefrite lúpica comprovada por biópsia é manifestação clínica grave e é o critério de maior peso.\n\nNão é LES porque FAN ocorre na população geral (C): o FAN isolado não fecha diagnóstico, mas associado a nefrite classe IV o diagnóstico é seguro.",
    "tip": "EULAR/ACR 2019: FAN ≥ 1:80 + nefrite classe III/IV na biópsia = 10 pontos = LES.",
    "reference": "Aringer M et al. 2019 EULAR/ACR Classification Criteria for Systemic Lupus Erythematosus. Arthritis Rheumatol, 2019.",
    "tags": [
      "lúpus eritematoso sistêmico",
      "critérios EULAR/ACR 2019",
      "nefrite lúpica",
      "FAN"
    ]
  },
  {
    "id": "famerp2025-12",
    "topography": "10",
    "module": "Clínica Médica",
    "text": "Um homem de 45 anos, trabalhador rural, apresenta-se ao consultório com queixas de tosse crônica, perda de peso, febre baixa e lesões ulceradas na cavidade oral. Ao exame físico, foram observados linfonodos cervicais aumentados, dolorosos e com secreção purulenta. A radiografia de tórax revela infiltrados pulmonares bilaterais. A biópsia das lesões orais mostra presença de leveduras multinucleadas em forma de roda de leme.\n\nCom base nessas achados, qual é o diagnóstico mais provável?",
    "options": [
      "Tuberculose",
      "Histoplasmose",
      "Paracoccidioidomicose",
      "Leishmaniose mucocutânea"
    ],
    "correctAnswer": 2,
    "explanation": "Trabalhador rural com tosse crônica, emagrecimento, febre baixa, úlceras na boca (estomatite moriforme), linfonodos cervicais que fistulizam e infiltrado pulmonar bilateral. A biópsia mostra leveduras com múltiplos brotamentos ao redor da célula-mãe, em \"roda de leme\" (ou \"orelha de Mickey\"): Paracoccidioides brasiliensis.\n\nA paracoccidioidomicose é a micose sistêmica mais importante do Brasil, adquirida por inalação de conídios no manejo do solo. O tratamento de escolha é itraconazol; nas formas graves, anfotericina B.",
    "commentary": "Tuberculose (A): também causa tosse crônica e linfadenite com fístula (escrófula), mas a biópsia mostraria granuloma com necrose caseosa e BAAR, não leveduras.\n\nHistoplasmose (B): leveduras pequenas, intracelulares (dentro de macrófagos), com brotamento único, sem o aspecto em roda de leme.\n\nLeishmaniose mucocutânea (D): acomete a mucosa nasal e o palato, com amastigotas na biópsia; não causa leveduras nem doença pulmonar.",
    "tip": "Levedura em roda de leme / Mickey Mouse + trabalhador rural + úlcera oral = paracoccidioidomicose.",
    "reference": "Shikanai-Yasuda MA et al. II Consenso Brasileiro em Paracoccidioidomicose — 2017. Epidemiol Serv Saúde, 2018.",
    "tags": [
      "paracoccidioidomicose",
      "micoses sistêmicas",
      "estomatite moriforme",
      "itraconazol"
    ]
  },
  {
    "id": "famerp2025-13",
    "topography": "2.2",
    "topic": "Endocardite infecciosa",
    "module": "Clínica Médica",
    "text": "Paciente de 27 anos, do sexo feminino, portadora de prolapso valvar mitral sem regurgitação, procura atendimento médico, encaminhada pelo dentista, devido proposta de tratamento endodôntico e com solicitação de orientações quanto à profilaxia antibiótica para endocardite bacteriana. A paciente refere ser alérgica a penicilina.\n\nBaseado nas informações acima, qual a melhor opção terapêutica?",
    "options": [
      "Não há indicação de profilaxia antibiótica nesse caso",
      "Ceftriaxona 1g intramuscular 30 minutos antes do procedimento",
      "Azitromicina 500 mg por via oral uma hora antes do procedimento",
      "Clindamicina 600 mg por via oral uma hora antes do procedimento e 300 mg 6 horas após"
    ],
    "correctAnswer": 0,
    "explanation": "A profilaxia antibiótica para endocardite antes de procedimentos dentários (com manipulação gengival, periapical ou perfuração da mucosa — o que inclui tratamento endodôntico) é restrita a pacientes de ALTO risco: prótese valvar ou material protético de reparo, endocardite prévia, cardiopatias congênitas cianóticas não corrigidas ou corrigidas com shunt/defeito residual, e transplantados cardíacos com valvopatia.\n\nProlapso de valva mitral, sobretudo sem regurgitação, não está nessa lista. Portanto não há indicação de profilaxia, independentemente da alergia à penicilina.",
    "commentary": "Ceftriaxona IM (B): é opção para alérgicos sem anafilaxia que não podem tomar via oral — mas só quando há indicação de profilaxia.\n\nAzitromicina 500 mg (C): é a alternativa oral para alérgicos à penicilina nas diretrizes atuais, porém não está indicada neste caso.\n\nClindamicina com dose após (D): a clindamicina foi retirada das recomendações da AHA (2021) pelo risco de C. difficile, e o esquema com segunda dose é antigo.",
    "tip": "Profilaxia de endocardite só no alto risco: prótese, endocardite prévia, congênita cianótica. PVM não entra.",
    "reference": "Wilson WR et al. Prevention of Viridans Group Streptococcal Infective Endocarditis: AHA Scientific Statement. Circulation, 2021. Delgado V et al. 2023 ESC Guidelines for the management of endocarditis.",
    "tags": [
      "endocardite infecciosa",
      "profilaxia antibiótica",
      "prolapso valvar mitral",
      "procedimento dentário"
    ]
  },
  {
    "id": "famerp2025-14",
    "topography": "2.2",
    "topic": "Miocardite",
    "module": "Clínica Médica",
    "text": "Um paciente de 32 anos, previamente saudável e sem histórico de doenças cardíacas ou fatores de risco cardiovascular, é admitido com diagnóstico de sepse urinária secundária à pielonefrite. Na avaliação inicial, ele está febril, taquicárdico e hipotenso, necessitando de reposição volêmica agressiva e uso de noradrenalina. A gasometria arterial revelou acidose metabólica com elevação do lactato. Durante a internação na UTI, exames laboratoriais demonstram elevação de troponina T de alta sensibilidade, com valores de 80 e 125 ng/L (normal < 14 ng/L). O eletrocardiograma (ECG) mostra taquicardia sinusal e alteração difusa da repolarização ventricular. O ecocardiograma apresenta fração de ejeção do ventrículo esquerdo de 55%, sem alterações segmentares de contratilidade.\n\nQual o principal diagnóstico para o paciente?",
    "options": [
      "Miocardite",
      "Infarto sem supra ST",
      "Injúria miocárdica aguda",
      "Infarto do miocárdio sem coronariopatia obstrutiva (MINOCA)"
    ],
    "correctAnswer": 2,
    "explanation": "Pela 4ª Definição Universal de Infarto, troponina acima do percentil 99 define injúria miocárdica; se os valores variam (subida ou queda), ela é aguda. Para chamar de infarto é preciso, além disso, evidência clínica de isquemia: sintomas, alterações isquêmicas novas no ECG, onda Q, perda de miocárdio viável ou alteração segmentar nova, ou trombo coronariano.\n\nNo jovem com choque séptico, a troponina subiu (80 → 125 ng/L), mas o ECG só mostra alteração difusa da repolarização, e o ecocardiograma tem FE normal sem alteração segmentar. Não há critério de isquemia: é injúria miocárdica aguda não isquêmica, secundária à sepse.",
    "commentary": "Miocardite (A): exigiria quadro sugestivo (pródromo viral, dor, disfunção ventricular, alterações na ressonância); a sepse explica a troponina.\n\nInfarto sem supra (B): falta evidência de isquemia; além disso, o termo não diferencia infarto tipo 1 de tipo 2.\n\nMINOCA (D): é um infarto (com critérios de isquemia) em coronárias sem obstrução; aqui não há critério de infarto.",
    "tip": "Troponina alta sem evidência de isquemia = injúria miocárdica, não infarto.",
    "reference": "Thygesen K et al. Fourth Universal Definition of Myocardial Infarction (2018). Circulation / Eur Heart J, 2018.",
    "tags": [
      "injúria miocárdica",
      "troponina",
      "definição universal de infarto",
      "sepse"
    ]
  },
  {
    "id": "famerp2025-15",
    "topography": "1.1",
    "module": "Clínica Médica",
    "text": "Homem de 30 anos, consumo alcoólico moderado diário, saudável, procurou consultório neurológico com história de formigamento progressivo nos pés iniciado há cerca de um ano, evoluindo com fraqueza distal nos membros inferiores e formigamento nos membros superiores há cerca de 3 meses. Diante do exposto e exame neurológico foi feita hipótese diagnóstica de neuropatia periférica sensitivo-motora tóxico-carencial secundária ao alcoolismo.\n\nComo é esperado encontrar os reflexos do estiramento muscular (tendinosos ou profundos)?",
    "options": [
      "Abolidos nos membros inferiores.",
      "Hipoativos nos membros superiores e hiperativos nos membros inferiores.",
      "Hiperativos nos membros superiores e hipoativos nos membros inferiores.",
      "Normais, visto que não há evidência de anormalidade do sistema nervoso central."
    ],
    "correctAnswer": 0,
    "explanation": "A polineuropatia alcoólica é axonal, sensitivo-motora, comprimento-dependente: começa nas fibras mais longas (pés), sobe pelas pernas e depois atinge as mãos (padrão em bota e luva). Como é doença do nervo periférico (neurônio motor inferior e via aferente do reflexo), os reflexos profundos ficam diminuídos ou abolidos — primeiro e mais intensamente nos aquileus, nos membros inferiores.",
    "commentary": "Hipoativos em MMSS e hiperativos em MMII (B): hiper-reflexia indica lesão do neurônio motor superior, que não ocorre na neuropatia periférica.\n\nHiperativos em MMSS e hipoativos em MMII (C): padrão de lesão combinada (por exemplo, mielopatia cervical com radiculopatia lombar), não de polineuropatia.\n\nNormais (D): justamente por ser uma doença periférica os reflexos se alteram; reflexos normais seriam incomuns com fraqueza distal instalada.",
    "tip": "Polineuropatia periférica = reflexos diminuídos, começando pelos aquileus. Hiper-reflexia = sistema nervoso central.",
    "reference": "Ropper AH et al. Adams and Victor's Principles of Neurology, 11ª ed. — Neuropatia alcoólica e nutricional.",
    "tags": [
      "polineuropatia alcoólica",
      "neuropatia periférica",
      "reflexos tendinosos",
      "alcoolismo"
    ]
  },
  {
    "id": "famerp2025-16",
    "topography": "1.3",
    "topic": "Vertigem",
    "module": "Clínica Médica",
    "text": "Uma paciente de 73 anos, hipertensa e diabética, queixa-se de tontura e vertigem. Os sintomas são flutuantes, com vertigem rotacional, durando de alguns minutos até uma hora ou mais, às vezes acompanhados de náuseas ou vômitos. A paciente também refere zumbido, sensação de plenitude auricular e diminuição da audição.\n\nSobre a condição clínica da paciente, assinale a alternativa correta:",
    "options": [
      "Há diminuição da produção da endolinfa no sistema vestibular, com hidropsia endolinfática associada.",
      "Acomete igualmente ambos os sexos e frequentemente inicia após a quinta década de vida.",
      "Geralmente é esporádica, mas formas genéticas incomuns já foram descritas, sendo autossômicas dominantes.",
      "Quando a perda auditiva está completa, os ataques de vertigem podem continuar e, às vezes, tornam-se ainda mais graves."
    ],
    "correctAnswer": 1,
    "explanation": "Vertigem rotatória em crises de minutos a horas, com zumbido, plenitude auricular e perda auditiva flutuante: doença de Ménière (hidropsia endolinfática). O gabarito considera correta a afirmação epidemiológica: a doença não tem predileção clara por sexo e o início costuma ser na meia-idade, com pico entre a 4ª e a 6ª década.",
    "commentary": "Diminuição da produção de endolinfa (A): ao contrário, há EXCESSO de endolinfa, em geral por falha de reabsorção no saco endolinfático (hidropsia).\n\nEsporádica com formas autossômicas dominantes (C): a maioria dos casos é esporádica, e as formas familiares (5–15%) costumam seguir herança autossômica dominante com penetrância incompleta. Para o gabarito, a afirmação é incorreta, mas ela tem respaldo na literatura.\n\nCrises continuam após perda auditiva completa (D): com a perda auditiva avançada o labirinto entra na fase de esgotamento (burnout) e as crises de vertigem tendem a diminuir ou cessar.",
    "alert": "Gabarito discutível: a alternativa C (casos geralmente esporádicos, com formas familiares raras de herança autossômica dominante) também encontra apoio na literatura. A alternativa B é imprecisa: o início é mais comum entre 40 e 60 anos e alguns estudos mostram leve predomínio feminino. Gabarito oficial: B.",
    "disputed": [
      2
    ],
    "tip": "Ménière: vertigem de minutos a horas + zumbido + plenitude + hipoacusia flutuante. Hidropsia = endolinfa em excesso.",
    "reference": "Lopez-Escamez JA et al. Diagnostic criteria for Menière's disease (Bárány Society). J Vestib Res, 2015. Tratado de Otorrinolaringologia da ABORL-CCF, 3ª ed.",
    "tags": [
      "doença de Ménière",
      "vertigem",
      "hidropsia endolinfática",
      "zumbido"
    ]
  },
  {
    "id": "famerp2025-17",
    "topography": "5.2",
    "topic": "Hemorragia pós-parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 40 anos de idade, gesta=06, para=05, partos anteriores por via vaginal, é internada na 38ª semana de gestação, em trabalho de parto. Após a expulsão fetal, evolui com intensa dor abdominal, \"fuga da matriz\", tenesmo retal e vesical, hemorragia intensa por via vaginal e choque hipovolêmico. Foi feito o diagnóstico de inversão uterina aguda, a qual não foi responsiva à manobra da Taxe.\n\nDe acordo com esses dados, assinale a alternativa que contém a conduta imediata:",
    "options": [
      "Sutura de B-Lynch.",
      "Operação de Huntington.",
      "Histerectomia por via vaginal.",
      "Compressão bimanual do útero."
    ],
    "correctAnswer": 1,
    "explanation": "Inversão uterina aguda com choque, sem resposta à manobra de Taxe (reposição manual do fundo uterino pela vagina). O passo seguinte é a correção cirúrgica por via abdominal. Na operação de Huntington, abre-se o abdome e o fundo uterino invertido é tracionado progressivamente para cima com pinças aplicadas nos ligamentos redondos e na parede do útero, até a reversão.\n\nSe o anel de constrição impedir a tração, faz-se a técnica de Haultain (incisão posterior do anel). Tudo isso com reposição volêmica, uterotônico só após a reposição do útero e suporte transfusional.",
    "commentary": "Sutura de B-Lynch (A): é sutura compressiva para atonia uterina; não reverte a inversão.\n\nHisterectomia vaginal (C): não é a conduta imediata; a histerectomia fica para falha das técnicas de reposição ou necrose uterina.\n\nCompressão bimanual (D): manobra para atonia; com o útero invertido não é aplicável.",
    "tip": "Inversão uterina: Taxe (manual) → falhou → Huntington (abdominal, tração) → anel apertado → Haultain.",
    "reference": "FEBRASGO. Hemorragia pós-parto — Protocolo nº 109, 2021. Zugaib M. Zugaib Obstetrícia, 5ª ed. — Inversão uterina.",
    "tags": [
      "inversão uterina",
      "manobra de Taxe",
      "operação de Huntington",
      "hemorragia pós-parto"
    ]
  },
  {
    "id": "famerp2025-18",
    "topography": "5.2",
    "topic": "Eclâmpsia",
    "module": "Ginecologia e Obstetrícia",
    "text": "Puérpera, na 2ª hora pós-parto cesáreo indicado por eclâmpsia, está em uso de sulfato de magnésio 1g/hora. Não apresenta crise convulsiva, porém, mantém níveis pressóricos de 160 x 110 mmHg.\n\nAssinale a alternativa que contém a conduta correta nesses casos:",
    "options": [
      "Suspender a infusão de sulfato de magnésio e prescrever hidralazina por via endovenosa.",
      "Aumentar a dose de infusão do sulfato de magnésio e prescrever nitroprussiato de sódio durante 72 horas.",
      "Suspender a infusão de sulfato de magnésio, observação rigorosa da pressão arterial de hora/hora e prescrever gluconato de cálcio.",
      "Manter o esquema terapêutico de manutenção com sulfato de magnésio e prescrever hidralazina por via intravenosa."
    ],
    "correctAnswer": 3,
    "explanation": "No puerpério de eclâmpsia, o sulfato de magnésio de manutenção deve continuar por 24 horas após o parto (ou após a última convulsão). A PA de 160 x 110 mmHg é crise hipertensiva e exige anti-hipertensivo de ação rápida para reduzir o risco de AVC hemorrágico: hidralazina IV (5 mg a cada 20 minutos) ou nifedipino oral.\n\nO magnésio não é anti-hipertensivo — previne convulsões — e por isso os dois tratamentos coexistem.",
    "commentary": "Suspender magnésio e dar hidralazina (A): a suspensão é precoce; na 2ª hora pós-parto o magnésio ainda é necessário.\n\nAumentar magnésio e nitroprussiato por 72 h (B): não há indicação de aumentar a dose sem nova convulsão, e o nitroprussiato é reservado a casos refratários, por pouco tempo, pela toxicidade por cianeto.\n\nSuspender magnésio e dar gluconato de cálcio (C): o gluconato de cálcio é o antídoto da intoxicação por magnésio (reflexo patelar abolido, FR < 16, oligúria), que não está descrita.",
    "tip": "Eclâmpsia: magnésio até 24 h pós-parto. PA ≥ 160 x 110 = hidralazina IV ou nifedipino VO.",
    "reference": "FEBRASGO / RBEHG. Pré-eclâmpsia nos seus diversos aspectos — Protocolo nº 8, 2023. Ministério da Saúde. Manual de Gestação de Alto Risco, 2022.",
    "tags": [
      "eclâmpsia",
      "sulfato de magnésio",
      "hidralazina",
      "crise hipertensiva",
      "puerpério"
    ]
  },
  {
    "id": "famerp2025-19",
    "topography": "5.2",
    "topic": "Assistência ao parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente do sexo feminino, 32 anos de idade, encontra-se na 4ª gestação (2 partos por via abdominal anteriores e 1 parto por via vaginal). Internada na 36ª semana de gestação em trabalho de parto. Durante a evolução do mesmo, observou-se o sinal de Bandl-Frommel.\n\nDe acordo com estas informações, o diagnóstico e a conduta imediata são:",
    "options": [
      "Rotura de vasa prévia e amniotomia.",
      "Inserção velamentosa do cordão e amniotomia.",
      "Iminência de rotura uterina e intervenção por via abdominal.",
      "Descolamento prematuro de placenta e operação cesariana."
    ],
    "correctAnswer": 2,
    "explanation": "O sinal de Bandl-Frommel combina o anel de Bandl (depressão transversal palpável entre o corpo uterino contraído e o segmento inferior muito distendido, que sobe em direção ao umbigo) com o sinal de Frommel (ligamentos redondos tensos, palpáveis como cordas). É o quadro clássico de iminência de rotura uterina, mais provável em multípara com duas cesáreas anteriores em trabalho de parto.\n\nA conduta é interromper o trabalho de parto (inibir contrações, suspender ocitocina) e fazer cesariana de urgência antes que a rotura aconteça.",
    "commentary": "Rotura de vasa prévia e amniotomia (A): vasa prévia sangra na amniotomia ou rotura de membranas, com sofrimento fetal agudo; não tem relação com os sinais de Bandl e Frommel, e a amniotomia seria contraindicada.\n\nInserção velamentosa e amniotomia (B): é anomalia de inserção do cordão, sem sinal uterino palpável.\n\nDPP e cesárea (D): DPP cursa com sangramento escuro, hipertonia e dor contínua, mas sem anel de Bandl e ligamentos redondos tensos.",
    "tip": "Bandl (anel subindo) + Frommel (ligamentos redondos tensos) = iminência de rotura uterina → cesárea já.",
    "reference": "Zugaib M. Zugaib Obstetrícia, 5ª ed. — Rotura uterina. Montenegro CAB, Rezende Filho J. Rezende Obstetrícia, 14ª ed.",
    "tags": [
      "iminência de rotura uterina",
      "sinal de Bandl-Frommel",
      "cesárea anterior",
      "trabalho de parto"
    ]
  },
  {
    "id": "famerp2025-20",
    "topography": "5.2",
    "topic": "Trabalho de parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante de 39 semanas é admitida com contrações uterinas. Durante a evolução do trabalho de parto, foi realizada a cardiotocografia representada na figura abaixo.\n\nDe acordo com estes dados, assinale a alternativa correta:",
    "options": [
      "O padrão cardiotocográfico é compatível com insuficiência placentária decorrente de hipertensão arterial.",
      "O padrão cardiotocográfico é compatível com DIPs precoces, decorrentes da compressão cefálica, no final do período expulsivo.",
      "O padrão cardiotocográfico é compatível com a estase sanguínea no espaço interviloso que ocorre durante as contrações uterinas.",
      "O padrão cardiotocográfico demonstra a ocorrência de compressão funicular e pode ser decorrente de prolapso de cordão."
    ],
    "correctAnswer": 3,
    "image": "/images/famerp2025-20.webp",
    "explanation": "A cardiotocografia mostra desacelerações de formato variável: queda abrupta da frequência cardíaca fetal, com forma, duração e relação com as contrações variáveis, e retorno rápido à linha de base. Esse padrão (DIP umbilical, ou desaceleração variável) é causado pela compressão do cordão umbilical.\n\nEntre as causas de compressão estão oligoâmnio, circulares de cordão, nós e prolapso de cordão. Diante de desacelerações variáveis, mudar a posição materna, avaliar o toque (procurando prolapso) e considerar amnioinfusão ou parto conforme a gravidade.",
    "commentary": "Insuficiência placentária (A): produz desacelerações tardias (DIP II), que começam após o pico da contração e voltam lentamente, com forma uniforme.\n\nDIP precoce por compressão cefálica (B): desacelerações uniformes e simétricas, espelhando a contração (começam e terminam com ela); são benignas.\n\nEstase no espaço interviloso (C): é o mecanismo das desacelerações tardias, ligado à hipoxemia durante a contração.",
    "tip": "DIP I = cabeça (espelho da contração); DIP II = placenta (tardia); DIP umbilical/variável = cordão.",
    "reference": "FEBRASGO. Avaliação da vitalidade fetal intraparto — Protocolo nº 48, 2021. Macones GA et al. NICHD workshop report on electronic fetal monitoring, 2008.",
    "tags": [
      "cardiotocografia",
      "desaceleração variável",
      "compressão do cordão",
      "vitalidade fetal"
    ]
  },
  {
    "id": "famerp2025-21",
    "topography": "5.2",
    "topic": "Isoimunização Rh",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante de 32 anos, G3 P2 A0 (2 cesáreas), grupo sanguíneo O negativo, cujo parceiro não compareceu na consulta de pré-natal para tipagem sanguínea, é admitida em trabalho de parto com 37 semanas. Recebeu imunoglobulina anti-D na 28ª semana de gestação. Na admissão, o teste de Coombs indireto da paciente foi positivo com titulação de 1:2. Tipagem do recém-nascido A positivo.\n\nNo que se refere à profilaxia da aloimunização no pós-parto dessa paciente, é correto afirmar:",
    "options": [
      "Está indicada a realização da 2ª dose de imunoglobulina anti-D, desde que o resultado do Coombs indireto do recém-nascido seja negativo.",
      "Está indicada a realização da 2ª dose de imunoglobulina anti-D, independente do resultado do Coombs indireto, até 72 horas após o parto.",
      "Está indicada a realização de imunoglobulina anti-D, desde que o Coombs direto do recém-nascido seja positivo.",
      "Está contraindicado imunoglobulina anti-D, pois a paciente já a realizou com 28 semanas de gravidez"
    ],
    "correctAnswer": 1,
    "explanation": "Gestante Rh negativo que recebeu imunoglobulina anti-D na 28ª semana. O Coombs indireto positivo em título baixo (1:2) na admissão é esperado e reflete o anticorpo passivo da imunoglobulina (meia-vida de cerca de 3 semanas, podendo ser detectável por até 12 semanas), não sensibilização verdadeira.\n\nComo o recém-nascido é Rh positivo, a mãe deve receber nova dose de imunoglobulina anti-D até 72 horas após o parto, independentemente do Coombs indireto. Títulos de anticorpo passivo raramente passam de 1:4.",
    "commentary": "Só se o Coombs indireto do RN for negativo (A): o critério não é esse; a dose é feita independentemente, e o Coombs relevante do RN seria o direto.\n\nSó se o Coombs direto do RN for positivo (C): o Coombs direto positivo no RN indicaria hemólise por anticorpos maternos; não é condição para a profilaxia.\n\nContraindicada por ter recebido na 28ª semana (D): a dose antenatal não substitui a pós-parto; com RN Rh positivo, a dose pós-natal é obrigatória.",
    "tip": "Coombs indireto fraco (≤ 1:4) após anti-D com 28 semanas = anticorpo passivo. RN Rh+ → nova dose em 72 h.",
    "reference": "FEBRASGO. Aloimunização Rh — Protocolo nº 41, 2021. Ministério da Saúde. Manual de Gestação de Alto Risco, 2022.",
    "tags": [
      "aloimunização Rh",
      "imunoglobulina anti-D",
      "teste de Coombs indireto",
      "pós-parto"
    ]
  },
  {
    "id": "famerp2025-22",
    "topography": "5.2",
    "topic": "Trabalho de parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Secundigesta, 32 semanas e 3 dias de gestação, internada em trabalho de parto prematuro em uma unidade de pronto atendimento (UPA). Trabalho de parto prematuro caracterizado por: 2 contrações uterinas dolorosas em 10 minutos de observação, dilatação cervical de 4cm e apagado em 80%, apresentação cefálica, bolsa das águas íntegra, vitalidade materno-fetal preservadas. A conduta para esta paciente foi aceleração da maturidade pulmonar fetal com corticoterapia e agente tocolítico por via endovenosa.\n\nDe acordo com estes dados, assinale a alternativa correta:",
    "options": [
      "Nestes casos, somente deverá ser usado corticoterapia para aceleração da maturidade pulmonar fetal, o uso de tocolítico não se justifica devido às características cervicais.",
      "A conduta ideal nestes casos é uso de corticoterapia para acelerar a maturidade pulmonar fetal e neuroproteção fetal com sulfato de magnésio.",
      "Deverá ser usado corticoterapia para aceleração da maturidade pulmonar fetal, neuroproteção fetal com sulfato de magnésio e profilaxia antibiótica intraparto contra estreptococo do grupo B (GBS).",
      "O uso de tocolítico visa prolongar a gestação por pelo menos 48 horas, enquanto se aguardam os efeitos benéficos do corticoide e a transferência da paciente para um centro de atendimento terciário."
    ],
    "correctAnswer": 3,
    "explanation": "Trabalho de parto prematuro com 32 semanas e 3 dias numa UPA, sem contraindicação à tocólise (bolsa íntegra, vitalidade preservada, dilatação de 4 cm). O objetivo do tocolítico é ganhar ao menos 48 horas, tempo para o corticoide antenatal agir e para transferir a gestante a um centro terciário com UTI neonatal — este é o real benefício da tocólise, que não reduz a mortalidade neonatal por si só.",
    "commentary": "Só corticoide, sem tocólise (A): dilatação de 4 cm não contraindica tocólise; o colo favorável reduz a chance de sucesso, mas ganhar tempo para corticoide e transferência é justamente o objetivo.\n\nCorticoide e sulfato de magnésio (B): a neuroproteção com magnésio é indicada abaixo de 32 semanas; com 32 semanas e 3 dias ela não está mais indicada.\n\nCorticoide, magnésio e profilaxia para GBS (C): o magnésio não está indicado nessa idade gestacional; a profilaxia para GBS é indicada no trabalho de parto prematuro com cultura desconhecida, mas a alternativa erra no magnésio.",
    "tip": "Tocólise = ganhar 48 h para o corticoide e a transferência. Magnésio para neuroproteção só < 32 semanas.",
    "reference": "FEBRASGO. Trabalho de parto prematuro — Protocolo nº 22, 2021. Ministério da Saúde. Manual de Gestação de Alto Risco, 2022.",
    "tags": [
      "trabalho de parto prematuro",
      "tocólise",
      "corticoide antenatal",
      "sulfato de magnésio"
    ]
  },
  {
    "id": "famerp2025-23",
    "topography": "5.2",
    "topic": "Restrição de crescimento fetal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente com 34 semanas de gestação, G=3, P=2, A=0, tabagista, em acompanhamento de pré-natal em Unidade Básica de Saúde (UBS). Foi feita a hipótese diagnóstica de restrição de crescimento fetal (RCF), sendo então encaminhada ao pré-natal de alto risco para confirmação do diagnóstico e acompanhamento.\n\nDe acordo com estes dados, assinale a alternativa correta:",
    "options": [
      "A circunferência abdominal (CA) é menor na presença de RCF, em virtude da diminuição do tamanho do fígado, da diminuição do glicogênio acumulado e da depleção do tecido adiposo da região abdominal. Isoladamente, a CA não é a medida de maior sensibilidade para detecção da RCF",
      "A redistribuição do fluxo sanguíneo para territórios nobres (centralização), decorrente da hipoxemia, tem como consequência a vasoconstrição cerebral, o que pode ser verificado pela dopplervelocimetria da artéria uterina (AU).",
      "A dopplervelocimetria da veia umbilical faz o diagnóstico do grau de insuficiência placentária e diferencia fetos pequenos constitucionalmente dos fetos com restrição de crescimento, além de avaliar a resposta fetal à hipoxemia.",
      "O Doppler do ducto venoso alterado é considerado o parâmetro isolado com maior capacidade em predizer óbito fetal, em curto prazo, na presença de RCF. O achado de onda A zero ou reversa no Doppler do ducto venoso está associado a maiores taxas de mortalidade perinatal, independentemente da idade gestacional."
    ],
    "correctAnswer": 3,
    "explanation": "Na restrição de crescimento por insuficiência placentária, a deterioração fetal segue uma sequência: alteração da artéria umbilical, centralização (vasodilatação cerebral), e por fim alterações venosas. O ducto venoso alterado — onda A ausente ou reversa — reflete disfunção cardíaca e acidemia, e é o parâmetro isolado que melhor prediz óbito fetal em curto prazo. Sua presença associa-se a mortalidade perinatal elevada em qualquer idade gestacional e, em geral, indica o parto.",
    "commentary": "Circunferência abdominal (A): a primeira parte está certa (fígado menor, menos glicogênio e gordura), mas a CA é justamente a medida isolada mais sensível para detectar RCF — a alternativa erra ao negar isso.\n\nCentralização com vasoconstrição cerebral pela artéria uterina (B): a centralização é VASODILATAÇÃO cerebral, avaliada pela artéria cerebral média; a artéria uterina avalia a circulação materna.\n\nDoppler da veia umbilical (C): quem diferencia o feto pequeno constitucional do restrito e gradua a insuficiência placentária é a artéria umbilical.",
    "tip": "RCF: artéria umbilical gradua a placenta; cerebral média mostra centralização (vasodilatação); ducto venoso com onda A zero/reversa = risco de óbito iminente.",
    "reference": "FEBRASGO. Restrição de crescimento fetal — Protocolo nº 26, 2021. Lees CC et al. ISUOG Practice Guidelines: diagnosis and management of small-for-gestational-age fetus and fetal growth restriction, 2020.",
    "tags": [
      "restrição de crescimento fetal",
      "dopplervelocimetria",
      "ducto venoso",
      "centralização fetal"
    ]
  },
  {
    "id": "famerp2025-24",
    "topography": "5.2",
    "topic": "Hemorragia pós-parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Secundigesta, 40 semanas de gestação é admitida em trabalho de parto, com expulsão do feto após 4 horas da internação.\n\nEm relação ao manejo ativo do 3º período clínico do parto, de acordo com a Organização Mundial de Saúde (2018) e a Federação Brasileira das Associações de Ginecologia e Obstetrícia (2018), as recomendações sobre a via e o momento da administração de ocitocina para prevenção de hemorragia pós-parto (HPP) e o momento de realizar a tração controlada do cordão são, respectivamente:",
    "options": [
      "Administrar 10 UI de ocitocina intramuscular somente nos casos de risco para a ocorrência de HPP e realizar a tração controlada do cordão nos casos de retenção placentária.",
      "Não administrar 10 UI de ocitocina intramuscular ou intravenosa, aguardar o desprendimento e expulsão fisiológicos e realizar a tração controlada do cordão em todos os casos, além do contato pele a pele.",
      "Administrar 10 UI de ocitocina intramuscular ou intravenosa após o desprendimento do ombro posterior em todos os partos e tração controlada do cordão após os sinais de separação da placenta.",
      "Não administrar 10 UI de ocitocina intramuscular ou endovenosa e não realizar a tração controlada do cordão. Aguardar o desprendimento e expulsão fisiológicos. Estes procedimentos não diminuem a incidência de HPP."
    ],
    "correctAnswer": 2,
    "explanation": "O manejo ativo do 3º período é recomendado em TODOS os partos para prevenir hemorragia pós-parto. O componente central é a ocitocina 10 UI IM (ou IV) logo após o nascimento — a FEBRASGO e o Ministério da Saúde citam o desprendimento do ombro anterior/do feto. A tração controlada do cordão é opcional (feita por profissional treinado) e só após os sinais de descolamento placentário, com contratração suprapúbica do útero.\n\nO gabarito aceita a alternativa C, que resume essa conduta.",
    "commentary": "Ocitocina só em casos de risco (A): a profilaxia com ocitocina é universal, porque a maioria das HPP ocorre em mulheres sem fator de risco.\n\nNão administrar ocitocina e tracionar o cordão sempre (B): inverte as recomendações; tracionar sem uterotônico e sem sinais de descolamento aumenta o risco de inversão uterina.\n\nConduta expectante pura (D): o manejo expectante aumenta a perda sanguínea e o risco de HPP.",
    "tip": "3º período: ocitocina 10 UI IM para todas; tração controlada só depois dos sinais de descolamento.",
    "reference": "WHO recommendations: uterotonics for the prevention of postpartum haemorrhage, 2018. FEBRASGO. Hemorragia pós-parto — Protocolo nº 109, 2021.",
    "tags": [
      "manejo ativo do terceiro período",
      "ocitocina",
      "hemorragia pós-parto",
      "tração controlada do cordão"
    ]
  },
  {
    "id": "famerp2025-25",
    "topography": "5.1",
    "topic": "Câncer de colo uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 35 anos de idade, G=2 P=2 (N) A=0, colhe sua Colpocitologia Oncótica de rotina, cujo resultado veio LSIL (Lesão Intra-epitelial de Baixo grau).\n\nDe acordo com as Diretrizes Brasileiras para Rastreamento de Câncer do Colo Uterino, 2016, qual a próxima conduta?",
    "options": [
      "Fazer Colposcopia",
      "Repetir a Colpocitologia Oncótica em 6 meses",
      "Repetir a Colpocitologia Oncótica em 1 ano",
      "Repetir a Colpocitologia Oncótica em 3 anos"
    ],
    "correctAnswer": 1,
    "explanation": "Pelas Diretrizes Brasileiras de 2016, em mulheres com 25 anos ou mais e citologia com LSIL, a conduta é repetir a citologia em 6 meses. A maioria das lesões de baixo grau regride espontaneamente.\n\nSe duas citologias seguidas forem negativas, volta-se ao rastreamento trienal; se qualquer citologia repetida mostrar alteração igual ou mais grave, encaminha-se à colposcopia. (Abaixo de 25 anos, repete-se em 3 anos.)",
    "commentary": "Colposcopia (A): é a conduta para HSIL, ASC-H, AGC ou LSIL persistente, não para o primeiro LSIL.\n\nRepetir em 1 ano (C): o intervalo para LSIL em ≥ 25 anos é de 6 meses.\n\nRepetir em 3 anos (D): é a conduta para LSIL em mulheres com menos de 25 anos, ou o rastreamento de rotina após exames normais.",
    "tip": "LSIL: ≥ 25 anos → repetir em 6 meses; < 25 anos → repetir em 3 anos.",
    "reference": "INCA. Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero, 2ª ed., 2016.",
    "tags": [
      "LSIL",
      "rastreamento de câncer do colo",
      "citologia oncótica",
      "diretrizes brasileiras"
    ]
  },
  {
    "id": "famerp2025-26",
    "topography": "5.1",
    "topic": "Câncer de endométrio",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 54 anos, menopausada aos 49 anos, nega uso de Terapia Hormonal, apresentou 2 episódios de sangramento vaginal no último mês.\n\nQual das alternativas abaixo está incorreta?",
    "options": [
      "Atrofia vaginal é a principal hipótese diagnóstica",
      "As neoplasias intra-epiteliais endometriais tem risco de malignidade de até 30%",
      "A ultrassonografia transvaginal é o um exame complementar para avaliação da queixa",
      "Pólipos endometriais é a patologia mais comum e devem sempre ser removidos pelo alto risco de malignização"
    ],
    "correctAnswer": 3,
    "explanation": "A questão pede a afirmativa INCORRETA. No sangramento pós-menopausa, a causa mais comum é a atrofia (endometrial/vaginal), e o câncer de endométrio precisa ser sempre excluído. A ultrassonografia transvaginal é o exame inicial (eco endometrial ≤ 4 mm tem alto valor preditivo negativo), e a hiperplasia atípica / neoplasia intraepitelial endometrial tem risco relevante de câncer concomitante ou futuro.\n\nO erro está em D: os pólipos são causa frequente, mas não são a mais comum, e o risco de malignidade é baixo (em geral < 5%). Na pós-menopausa sintomática a remoção por histeroscopia é recomendada, mas não pelo motivo dado (\"alto risco de malignização\").",
    "commentary": "Atrofia como principal hipótese (A): correta — é a causa mais comum de sangramento pós-menopausa.\n\nNeoplasia intraepitelial endometrial com risco de até 30% (B): correta — a hiperplasia atípica se associa a carcinoma concomitante ou progressão em proporção relevante (até cerca de 30–40% nas séries).\n\nUSG transvaginal como exame complementar (C): correta — é o exame de primeira linha.",
    "tip": "Sangramento pós-menopausa: causa mais comum = atrofia; o que não pode passar = câncer de endométrio. Comece pela USG transvaginal.",
    "reference": "FEBRASGO. Sangramento uterino pós-menopausa. Tratado de Ginecologia FEBRASGO, 2019. ACOG Committee Opinion 734 — Role of transvaginal ultrasonography in postmenopausal bleeding, 2018.",
    "tags": [
      "sangramento pós-menopausa",
      "atrofia endometrial",
      "pólipo endometrial",
      "câncer de endométrio"
    ]
  },
  {
    "id": "famerp2025-27",
    "topography": "5.1",
    "topic": "Sangramento uterino anormal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 24 anos de idade, que sempre teve ciclos menstruais normais, sofre abortamento espontâneo incompleto na 8ª semana de gestação. É submetida a Winteragem e Curetagem Uterina para remoção dos restos ovulares. Após o procedimento, está sem menstruar há 2 anos.\n\nDe acordo com esse enunciado, qual das alternativas abaixo é a Hipótese diagnóstica para este caso?",
    "options": [
      "Síndrome Simmonds",
      "Síndrome de Asherman",
      "Síndrome de Sheehan",
      "Síndrome de Kallman"
    ],
    "correctAnswer": 1,
    "explanation": "Amenorreia secundária após curetagem uterina em mulher com ciclos previamente normais: síndrome de Asherman — sinéquias intrauterinas por lesão da camada basal do endométrio, com obliteração parcial ou total da cavidade.\n\nO teste do progestagênio e o teste com estrogênio + progestagênio são negativos (causa uterina). O diagnóstico e o tratamento são por histeroscopia (lise das sinéquias).",
    "commentary": "Síndrome de Simmonds (A): pan-hipopituitarismo de causa não obstétrica; não tem relação com curetagem.\n\nSíndrome de Sheehan (C): necrose hipofisária após hemorragia pós-parto grave com choque, com agalactia e amenorreia; não houve hemorragia grave.\n\nSíndrome de Kallmann (D): hipogonadismo hipogonadotrófico congênito com anosmia, que causa amenorreia PRIMÁRIA.",
    "tip": "Amenorreia após curetagem = Asherman (sinéquias). Após hemorragia pós-parto com choque = Sheehan.",
    "reference": "FEBRASGO. Amenorreia — Tratado de Ginecologia FEBRASGO, 2019. Yu D et al. Asherman syndrome — one century later. Fertil Steril, 2008.",
    "tags": [
      "síndrome de Asherman",
      "amenorreia secundária",
      "sinéquias uterinas",
      "curetagem"
    ]
  },
  {
    "id": "famerp2025-28",
    "topography": "5.1",
    "topic": "Câncer de colo uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Jovem de 18 anos, G=0, com sinusiorragia, procura UBS onde foi submetida à coleta de citologia oncótica e colposcopia que revelou lesão aceto-branca em lábio anterior do colo do útero. Foi submetida à biópsia com resultado anátomo-patológico de Lesão Intraepitelial de Alto Grau (NIC-III).\n\nQual a alternativa correta nesta jovem, de acordo com as Diretrizes Brasileiras para Rastreamento de Câncer do Colo Uterino, 2016?",
    "options": [
      "Histerectomia Total",
      "Histerectomia ampliada com esvaziamento linfonodal ilíaco",
      "Seguimento semestral com citologia oncótica e colposcopia por 2 anos",
      "Conização do colo do útero (excisão da Zona de Transformação tipo 3)"
    ],
    "correctAnswer": 2,
    "explanation": "Mulher de 18 anos com NIC III na biópsia. Pelas Diretrizes Brasileiras de 2016, em mulheres até 24 anos as lesões de alto grau regridem com frequência e o tratamento excisional aumenta o risco de parto prematuro futuro. Por isso, a conduta preferencial é o seguimento citológico e colposcópico semestral por 2 anos; o tratamento excisional fica para persistência ou progressão, para suspeita de invasão, ou se a JEC não for visível.\n\nO gabarito adotou essa conduta conservadora.",
    "commentary": "Histerectomia total (A): não é tratamento de NIC, sobretudo numa nuligesta de 18 anos.\n\nHisterectomia ampliada com linfadenectomia (B): é cirurgia para câncer invasor, não para lesão precursora.\n\nConização (EZT tipo 3) (D): é o tratamento da NIC III na mulher ≥ 25 anos; nas jovens só entra se a lesão persistir, piorar ou houver suspeita de invasão.",
    "alert": "Questão com nuance: as Diretrizes de 2016 recomendam seguimento para NIC II em mulheres até 24 anos e permitem seguimento ou tratamento para NIC III. O gabarito oficial considerou o seguimento semestral (C).",
    "tip": "Até 24 anos com lesão de alto grau: preferir seguimento semestral por 2 anos; excisar se persistir ou progredir.",
    "reference": "INCA. Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero, 2ª ed., 2016 — Situações especiais: mulheres até 24 anos.",
    "tags": [
      "NIC III",
      "lesão intraepitelial de alto grau",
      "mulheres até 24 anos",
      "câncer de colo uterino"
    ]
  },
  {
    "id": "famerp2025-29",
    "topography": "4.2",
    "topic": "Incontinência urinária",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 48 anos, G2PN2A0, apresenta perda de urina aos esforços há 2 anos. Antecedentes pessoais: ciclos menstruais regulares, IMC: 28Kg/m², nega comorbidades. Ao exame ginecológico observa-se cistocele e retocele moderadas e perda objetiva de urina em manobra de esforço. Foi proposta cirurgia de sling transobturatório.\n\nQual o principio de correção da incontinência urinaria da cirurgia proposta?",
    "options": [
      "Apoio suburetral",
      "Correção da cistocele",
      "Reforço do esfíncter uretral",
      "Plicatura da fáscia endopelvica"
    ],
    "correctAnswer": 0,
    "explanation": "O sling de uretra média (transobturatório ou retropúbico) trata a incontinência urinária de esforço pela teoria integral: uma faixa de tela é colocada sem tensão sob a uretra média, servindo de apoio (\"rede\") contra o qual a uretra é comprimida durante o aumento da pressão abdominal. Não corrige o prolapso nem reforça o esfíncter.",
    "commentary": "Correção da cistocele (B): o sling não corrige prolapso; a cistocele exige colporrafia anterior ou outra técnica específica.\n\nReforço do esfíncter uretral (C): o sling não atua no esfíncter; reforço esfincteriano seria feito com agentes de preenchimento ou esfíncter artificial.\n\nPlicatura da fáscia endopélvica (D): é o princípio da colporrafia anterior (cistocele), cujo resultado para incontinência é inferior.",
    "tip": "Sling = apoio sob a uretra média, sem tensão.",
    "reference": "FEBRASGO. Incontinência urinária de esforço — Protocolo, 2021. Petros PE, Ulmsten UI. An integral theory of female urinary incontinence. Acta Obstet Gynecol Scand, 1990.",
    "tags": [
      "incontinência urinária de esforço",
      "sling transobturatório",
      "uroginecologia"
    ]
  },
  {
    "id": "famerp2025-30",
    "topography": "5.1",
    "topic": "Planejamento reprodutivo",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 20 anos de idade, procura ambulatório de Planejamento Familiar para orientação sobre os métodos contraceptivos.\n\nCom relação ao Planejamento Familiar é correto afirmar:",
    "options": [
      "O Planejamento familiar no Brasil ocorreu a partir de discussões e conferencias estaduais e foi oficializada a partir de 1968",
      "O Planejamento familiar não dá direito ao acesso aos métodos contraceptivos na rede pública e sim apenas orientações para a contracepção",
      "O desenvolvimento dos métodos contraceptivos e dos programas de planejamento familiar são os principais motivos para a diminuição dos índices de gravidez não planejada no Brasil",
      "O planejamento familiar consiste em um conjunto de ações criadas para estipular metas para o controle da população do país"
    ],
    "correctAnswer": 2,
    "explanation": "O desenvolvimento de métodos contraceptivos eficazes e a ampliação dos programas de planejamento familiar foram determinantes para reduzir gestações não planejadas e a fecundidade no Brasil. A Lei 9.263/1996 define o planejamento familiar como direito de todo cidadão e obriga o SUS a oferecer informação, métodos e técnicas de concepção e contracepção.",
    "commentary": "Oficializado em 1968 a partir de conferências estaduais (A): o marco legal é a Constituição de 1988 (art. 226, §7º) e a Lei 9.263/1996; o PAISM é de 1983.\n\nSó orientação, sem acesso a métodos (B): a lei garante acesso aos métodos na rede pública.\n\nMetas de controle populacional (D): a lei proíbe expressamente o uso do planejamento familiar para controle demográfico; é direito de livre decisão do casal ou indivíduo.",
    "tip": "Planejamento familiar (Lei 9.263/96): direito do cidadão, com acesso a métodos no SUS; nunca controle demográfico.",
    "reference": "Brasil. Lei nº 9.263, de 12 de janeiro de 1996 (Planejamento Familiar), atualizada pela Lei nº 14.443/2022. Ministério da Saúde. Cadernos de Atenção Básica nº 26 — Saúde Sexual e Saúde Reprodutiva.",
    "tags": [
      "planejamento familiar",
      "contracepção",
      "lei do planejamento familiar",
      "saúde reprodutiva"
    ]
  },
  {
    "id": "famerp2025-31",
    "topography": "5.1",
    "topic": "Infertilidade",
    "module": "Ginecologia e Obstetrícia",
    "text": "Na avaliação do fator ovulatório da infertilidade conjugal está correto considerar:",
    "options": [
      "A dosagem do hormônio antimülleriano (HAM) > 5,5 ng/ml indica risco de hiper-resposta ovariana.",
      "A medida de progesterona no meio da fase folicular é o método de escolha para detecção de ovulação.",
      "Ao ultrassom pélvico transvaginal a contagem de folículos antrais (CFA) é realizada na fase lútea inicial do ciclo menstrual.",
      "Quando os níveis de FSH (Hormônio Folículo Estimulante) e LH (Hormônio Luteinizante) são persistentemente baixos e associados a baixos valores de estradiol (menor que 40 pg/ml), suspeita-se de hipogonadismo hipergonadotrófico."
    ],
    "correctAnswer": 0,
    "explanation": "O hormônio antimülleriano (HAM) reflete a reserva ovariana (número de folículos antrais). Valores altos — acima de cerca de 3,5–5 ng/mL, típicos da SOP — indicam risco de hiper-resposta à estimulação ovariana e de síndrome de hiperestímulo, o que orienta doses menores de gonadotrofinas.",
    "commentary": "Progesterona no meio da fase folicular (B): a progesterona confirma ovulação quando dosada na fase LÚTEA média (cerca de 7 dias antes da menstruação, dia 21 de um ciclo de 28); valor > 3 ng/mL indica ovulação.\n\nContagem de folículos antrais na fase lútea (C): a CFA é feita na fase folicular inicial (dias 2 a 5 do ciclo).\n\nFSH e LH baixos com estradiol baixo = hipergonadotrófico (D): gonadotrofinas baixas definem hipogonadismo HIPOgonadotrófico (causa hipotalâmica ou hipofisária).",
    "tip": "HAM alto = hiper-resposta; HAM baixo = reserva baixa. Progesterona de fase lútea confirma ovulação.",
    "reference": "FEBRASGO. Investigação básica da infertilidade — Tratado de Ginecologia FEBRASGO, 2019. ESHRE Guideline: Ovarian stimulation for IVF/ICSI, 2019.",
    "tags": [
      "infertilidade",
      "hormônio antimülleriano",
      "reserva ovariana",
      "fator ovulatório"
    ]
  },
  {
    "id": "famerp2025-32",
    "topography": "5.1",
    "topic": "Síndrome dos ovários policísticos",
    "module": "Ginecologia e Obstetrícia",
    "text": "Jovem de 15 anos de idade, mulher cisgênero, menarca aos 11 anos, nuligesta, não iniciou atividade sexual, refere apresentar três a quatro ciclos menstruais por ano desde a menarca, está em amenorreia há 95 dias e relata o aparecimento acne refratária a tratamento dermatológico tópico, aumento dos pelos na face e no abdome e oleosidade da pele.\n\nEm relação ao quadro clínico é correto afirmar:",
    "options": [
      "A presença de oligomenorreia e hiperandrogenismo sugere a hipótese diagnóstica de síndrome de ovários policísticos (SOP).",
      "Uma vez feito o diagnóstico de SOP não é necessário fazer a revisão do diagnóstico.",
      "Para o diagnóstico de SOP na adolescência, deve-se ter os três critérios de Rotterdam para o diagnóstico: hiperandrogenismo clínico ou laboratorial, disfunção ovulatória e imagens de ovários policísticos ao ultrassom pélvico endovaginal.",
      "As dosagens de 17-Alfa hidroxiprogesterona e prolactina não devem ser analisadas no diagnóstico diferencial."
    ],
    "correctAnswer": 0,
    "explanation": "Adolescente com 3–4 ciclos por ano desde a menarca (há 4 anos), acne refratária, hirsutismo e pele oleosa: disfunção ovulatória + hiperandrogenismo clínico, sugerindo SOP. Na adolescência, as diretrizes exigem os DOIS critérios (disfunção ovulatória persistente há mais de 2 anos da menarca e hiperandrogenismo), sem usar a ultrassonografia, porque ovários multifoliculares são normais nessa fase.\n\nSão obrigatórios os diagnósticos diferenciais: TSH, prolactina e 17-OH-progesterona (hiperplasia adrenal congênita não clássica).",
    "commentary": "Diagnóstico não precisa ser revisto (B): na adolescente, o diagnóstico deve ser reavaliado ao longo do tempo; muitas vezes ela é classificada como \"em risco\" de SOP e reavaliada depois.\n\nTrês critérios de Rotterdam na adolescência (C): na adolescência não se usa o critério ultrassonográfico; exigem-se hiperandrogenismo e disfunção ovulatória.\n\nNão dosar 17-OH-progesterona e prolactina (D): a SOP é diagnóstico de exclusão; essas dosagens fazem parte da investigação.",
    "tip": "SOP na adolescente: hiperandrogenismo + irregularidade > 2 anos da menarca; USG não entra. Exclua TSH, prolactina e 17-OHP.",
    "reference": "Teede HJ et al. International Evidence-based Guideline for the Assessment and Management of PCOS, 2023. FEBRASGO. Síndrome dos ovários policísticos — Série Orientações e Recomendações, 2023.",
    "tags": [
      "síndrome dos ovários policísticos",
      "adolescência",
      "hiperandrogenismo",
      "critérios de Rotterdam"
    ]
  },
  {
    "id": "famerp2025-33",
    "topography": "15",
    "topic": "Saúde do trabalhador",
    "module": "Saúde Coletiva",
    "text": "Paciente masculino, 56 anos, comparece na UBS, com queixa de dor torácica, tosse, rouquidão e emagrecimento de 5 kg no último mês. Refere que há 15 anos trabalhou na manutenção de tubulações de caldeiras na indústria de açúcar e álcool e que, atualmente, há 1 mês, trabalha como forneiro de uma indústria de fabricação de pisos, azulejos e vasos sanitários. Após anamnese e exame clínico, o médico solicitou um Raio-X de tórax, receitou dexametasona xarope 70 mg/dia, polivitamínico e orientou dieta hipercalórica. Marcou retorno em 90 dias, quando o exame ficará pronto. Baseado nesta história, responda:\n\nQual o princípio da Atenção Primária que o médico não levou em conta? Que nível de prevenção ele não levou em conta? Qual deveria ser sua hipótese diagnóstica, levando-se em conta a história ocupacional do paciente?",
    "options": [
      "Longitudinalidade do Cuidado; Prevenção Primária; Silicose por exposição à poeira de Sílica.",
      "Integralidade da Atenção; Prevenção Terciária; Mesotelioma de Pleura por exposição ao Asbesto/Amianto",
      "Coordenação do Cuidado; Prevenção Quaternária; Mesotelioma de Pleura causado por exposição ao Amianto/Asbesto",
      "Humanização da Atenção; Prevenção Secundária; Sílico-Tuberculose por exposição à poeira de Sílica"
    ],
    "correctAnswer": 2,
    "explanation": "Homem com sinais de alarme para neoplasia (dor torácica, rouquidão, emagrecimento de 5 kg em um mês) e exposição ocupacional antiga a isolamento de caldeiras — material que por décadas usou amianto. A latência longa (> 15–20 anos) é típica: a hipótese principal é mesotelioma pleural pelo asbesto. A exposição atual como forneiro (sílica) é recente demais (1 mês) para explicar o quadro.\n\nO médico errou em dois planos:\n• Coordenação do cuidado: com sinais de alarme, marcou retorno em 90 dias, em vez de garantir investigação e encaminhamento rápidos.\n• Prevenção quaternária: prescreveu dexametasona em dose altíssima, polivitamínico e dieta sem diagnóstico, expondo o paciente a iatrogenia e medicalização desnecessária.",
    "commentary": "Longitudinalidade; prevenção primária; silicose (A): silicose exige anos de exposição; um mês como forneiro não explica o quadro, e o erro não é de prevenção primária (o paciente já está doente).\n\nIntegralidade; prevenção terciária; mesotelioma (B): o diagnóstico está certo, mas a falha principal é de coordenação (atraso no fluxo) e de prevenção quaternária (excesso de intervenção).\n\nHumanização; prevenção secundária; silicotuberculose (D): a exposição à sílica é muito recente, e o erro central não é de rastreamento.",
    "tip": "Amianto + latência longa + dor torácica = mesotelioma. Intervenção excessiva sem diagnóstico = falha de prevenção quaternária.",
    "reference": "Ministério da Saúde. Política Nacional de Atenção Básica (Portaria nº 2.436/2017). INCA. Ambiente, trabalho e câncer — Amianto, 2021. Starfield B. Atenção Primária: equilíbrio entre necessidades de saúde, serviços e tecnologia. UNESCO/MS, 2002.",
    "tags": [
      "prevenção quaternária",
      "coordenação do cuidado",
      "mesotelioma",
      "amianto",
      "saúde do trabalhador"
    ]
  },
  {
    "id": "famerp2025-34",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "Em recente artigo na Folha de S. Paulo, o economista Armínio Fraga defende, entre outras, as seguintes posições em relação ao SUS:\n\n1. O mercado privado de saúde vem mudando muito, com aquisições, fusões e uma tendência de verticalização. Qual é a sua avaliação sobre isso? \"A minha avaliação é positiva. Porque ela internaliza esse conflito. Os planos não querem pagar. E os médicos e outros profissionais querem gastar. E gastam até demais. Eu acho que tem uma postura até defensiva. E a verticalização internaliza isso. É uma forma, inclusive, de desonerar um pouco a medicina.\"\n\n2. \"Em muitos países europeus, todos os moradores devem ter um seguro saúde. Caso alguém não tenha condições de bancar um plano, o governo cobre os custos por meio do seguro desemprego ou auxílio social. A gestão dos serviços costuma ser privada. \"Uma coisa é o Estado bancar certos custos, outra é o Estado fazer a gestão. Então, onde é possível terceirizar, delegar, vale a pena explorar.\"\n\nBaseado nas posições defendidas pelo economista Armínio Fraga, responda: O que significa a tendência de verticalização que vem ocorrendo na saúde suplementar brasileira? Como o setor privado de assistência participa no SUS?",
    "options": [
      "É a compra e/ou fusões das pequenas operadoras de convênios pelas grandes operadoras, produzindo um mercado de saúde suplementar oligopolizado. O setor privado não participa do SUS, mas, tão-somente, na Saúde Suplementar.",
      "É a compra e/ou fusões de hospitais, laboratórios e clínicas pelas operadoras de convênio. Em caráter complementar, por intermédio de contratos de direito público",
      "É a compra e/ou fusões das operadoras nacionais de convênios médicos com as seguradoras internacionais (caso da Amil). Em caráter suplementar, por intermédio de contratos de direito privado.",
      "É a utilização dos serviços do SUS por parte dos convênios médicos, principalmente em relação aos procedimentos de alto custo e de maior complexidade. De uma forma mista (complementar e suplementar), onde somente os serviços privados de caráter filantrópicos podem participar do SUS."
    ],
    "correctAnswer": 1,
    "explanation": "Verticalização na saúde suplementar é quando a operadora de plano passa a ser dona da própria rede assistencial — compra ou funde hospitais, laboratórios e clínicas — e assim controla custos e uso de serviços dentro da mesma empresa.\n\nO setor privado participa do SUS de forma COMPLEMENTAR (Constituição, art. 199; Lei 8.080/1990, arts. 24–26), quando a rede pública for insuficiente, por meio de contrato de direito público ou convênio, com preferência para entidades filantrópicas e sem fins lucrativos.",
    "commentary": "Fusão de pequenas operadoras pelas grandes (A): isso é concentração horizontal do mercado; e o setor privado participa sim do SUS, em caráter complementar.\n\nFusão com seguradoras internacionais, em caráter suplementar (C): não é verticalização, e a participação no SUS é complementar por contrato de direito público, não suplementar por direito privado (a saúde suplementar é o mercado de planos, fora do SUS).\n\nUso do SUS pelos convênios; só filantrópicos (D): descreve o ressarcimento ao SUS, não a verticalização; e entidades com fins lucrativos também podem participar (os filantrópicos têm preferência).",
    "tip": "Verticalização = operadora dona de hospital e laboratório. Privado no SUS = complementar, por contrato de direito público, preferência aos filantrópicos.",
    "reference": "Brasil. Constituição Federal de 1988, art. 199. Lei nº 8.080/1990, arts. 24 a 26. Agência Nacional de Saúde Suplementar (ANS).",
    "tags": [
      "SUS",
      "saúde suplementar",
      "verticalização",
      "setor privado complementar"
    ]
  },
  {
    "id": "famerp2025-35",
    "topography": "15",
    "topic": "Estudos epidemiológicos",
    "module": "Saúde Coletiva",
    "text": "Um estudo testou um novo medicamento, em comparação com a varfarina, na redução de acidente vascular encefálico ou evento isquêmico. Os dois grupos foram distribuídos de forma aleatória e randomizados, sendo acompanhados por 590 dias. Os resultados do estudo estão abaixo (coeficiente de incidência de AVE ou evento isquêmico, por 100 pacientes):\n\n• Novo medicamento: 1,7\n• Varfarina: 2,2\n\nCom base nas informações, que tipo de estudo é este? Calcule a Redução Absoluta do Risco (RAR) de AVE ou Evento Isquêmico e Estimativa do Tamanho do Efeito de Tratamento (Número Necessário para Tratar - NNT) para se evitar os desfechos considerados no estudo.",
    "options": [
      "Ensaio Clínico Experimental Crossover; RAR= 0,79 e NNT= 2.",
      "Ensaio Clínico Experimental Paralelo Randomizado; RAR= 0,5 e NNT=2",
      "Ensaio Clínico Experimental Paralelo Randomizado; RAR= 0,5% e NNT= 200",
      "Ensaio Clínico Quase-Experimental Fatorial Randomizado; RAR= 0,5% e NNT= 200."
    ],
    "correctAnswer": 2,
    "explanation": "Dois grupos paralelos, com alocação aleatória, recebendo intervenções diferentes ao mesmo tempo: ensaio clínico randomizado paralelo.\n\n• Risco no grupo varfarina (controle) = 2,2 por 100 = 2,2%.\n• Risco no grupo novo medicamento = 1,7%.\n• RAR = 2,2% − 1,7% = 0,5% (0,005).\n• NNT = 1 / RAR = 1 / 0,005 = 200.\n\nÉ preciso tratar 200 pacientes com o novo medicamento, em vez de varfarina, durante o período do estudo para evitar um AVE ou evento isquêmico.",
    "commentary": "Crossover; RAR 0,79 e NNT 2 (A): no crossover cada paciente recebe as duas intervenções em sequência, o que não foi descrito; e os números estão errados.\n\nRAR = 0,5 e NNT = 2 (B): a RAR é 0,5 por 100 (0,5%), não 0,5; com RAR de 0,005, o NNT é 200.\n\nQuase-experimental fatorial (D): houve randomização (logo não é quase-experimental), e o desenho fatorial testa duas ou mais intervenções combinadas, o que não ocorreu.",
    "tip": "RAR = risco controle − risco tratado (em proporção). NNT = 1/RAR. 0,5% → NNT 200.",
    "reference": "Fletcher RH, Fletcher SW, Fletcher GS. Epidemiologia Clínica: Elementos Essenciais, 5ª ed. Medronho RA. Epidemiologia, 2ª ed.",
    "tags": [
      "ensaio clínico randomizado",
      "redução absoluta do risco",
      "NNT",
      "bioestatística"
    ]
  },
  {
    "id": "famerp2025-36",
    "topography": "15",
    "topic": "Vigilância epidemiológica",
    "module": "Saúde Coletiva",
    "text": "Paciente de 20 anos, deu entrada na Emergência de um Hospital Terciário, às 20 horas, encaminhado pela Unidade de Pronto-Atendimento, com quadro de manifestações hemorrágicas, petéquias, epistaxe, gengivorragia, sangramento gastrointestinal, hematúria e metrorragia, PA: 50/20 mmHg. Às 20h15min, teve parada cardíaca sem sucesso na reanimação. A cidade está vivendo uma epidemia de Dengue.\n\nComo deve ser preenchida a Declaração de Óbito, e qual a conduta frente à vigilância epidemiológica?",
    "options": [
      "Causa Imediata: Falência Múltipla de Órgãos Causa Básica: Dengue Notificação após resultado da sorologia",
      "Causa Imediata: Choque Hipovolêmico Causa Básica: Dengue Notificação imediata",
      "Causa Imediata: Dengue Causa Básica: parada cardiorrespiratória Notificação após confirmação diagnóstica",
      "Causa Intermediária: Choque hemorrágico. Causa Básica: Dengue Notificação imediata"
    ],
    "correctAnswer": 1,
    "explanation": "Na Parte I da Declaração de Óbito, escreve-se de cima para baixo a sequência de eventos: na linha (a) a causa imediata (o evento terminal) e na última linha preenchida a causa básica (a doença que iniciou a cadeia). Parada cardiorrespiratória é modo de morrer e não deve ser usada como causa.\n\nAqui: causa imediata = choque hipovolêmico (hemorrágico); causa básica = dengue. Óbito suspeito de dengue é de notificação compulsória IMEDIATA (até 24 horas), sem esperar sorologia, para que a vigilância investigue o óbito e desencadeie as medidas de controle.",
    "commentary": "Falência múltipla de órgãos; notificar após sorologia (A): FMO é termo genérico, e a notificação do óbito suspeito não espera confirmação.\n\nCausa imediata dengue e básica parada cardiorrespiratória (C): inverte a lógica — PCR é modo de morrer, e a dengue é a causa básica; a notificação também não espera confirmação.\n\nCausa intermediária choque hemorrágico (D): com só dois diagnósticos na cadeia, o choque ocupa a linha da causa imediata (a), não uma linha intermediária; a pergunta pede a causa imediata.",
    "tip": "DO: causa básica na última linha da Parte I; nunca use PCR como causa. Óbito por dengue = notificação imediata.",
    "reference": "Ministério da Saúde. Declaração de Óbito: manual de instruções para preenchimento, 2022. Ministério da Saúde. Guia de Vigilância em Saúde, 6ª ed., 2024. Portaria GM/MS nº 217/2023 (Lista de notificação compulsória).",
    "tags": [
      "declaração de óbito",
      "causa básica",
      "dengue",
      "notificação compulsória"
    ]
  },
  {
    "id": "famerp2025-37",
    "topography": "15",
    "topic": "Estudos epidemiológicos",
    "module": "Saúde Coletiva",
    "text": "Trata-se de um estudo realizado com nascidos vivos no Hospital Municipal de Governador Valadares, no período de maio de 2017 a julho de 2018. Um grupo foi composto por nascidos vivos a termo e baixo peso ao nascer e o outro grupo, por nascidos vivos a termo e com peso adequado, pareados por sexo e data de nascimento. A coleta de dados foi realizada por meio de entrevista com as puérperas e informações complementares foram obtidas pela análise do cartão de pré-natal e prontuários. Um dos fatores estudados foi a associação entre o consumo de água pelas gestantes, durante a gestação, do Serviço de Abastecimento de Água (SAA) dos municípios atingidos pelo Desastre Ambiental de Mariana/MG (2015) e a presença de crianças com Baixo Peso ao nascer.\n\nFonte de água consumida pelas gestantes durante a gestação:\n\n• Mineral, de minas, poço, cisterna e SAA de municípios não atingidos pela contaminação: baixo peso ao nascer 43 (66,2%); peso adequado 108 (83,3%)\n• SAA de municípios atingidos pela contaminação: baixo peso ao nascer 22 (33,8%); peso adequado 22 (16,9%)\n\nResponda: Que tipo de estudo é este? E qual a Razão de Chance da presença de Baixo Peso entre mães que consumiram água contaminada durante a gestação e as que não consumiram?",
    "options": [
      "Estudo de Coorte Retrospectivo; razão de chance de 1,75",
      "Estudo Seccional de Prevalência; razão de chance de 1,75",
      "Estudo Seccional de Prevalência; odds ratio de 2,5",
      "Estudo de Coorte Retrospectivo (Caso-Controle); odds ratio de 2,5"
    ],
    "correctAnswer": 3,
    "explanation": "O estudo parte do DESFECHO: um grupo com baixo peso ao nascer (casos) e outro com peso adequado (controles), pareados por sexo e data de nascimento, e investiga para trás a exposição (consumo de água contaminada na gestação). Esse é o desenho caso-controle, e a medida de associação é o odds ratio.\n\n• Casos (baixo peso): expostos 22, não expostos 43.\n• Controles (peso adequado): expostos 22, não expostos 108.\n• OR = (22 × 108) / (43 × 22) = 108 / 43 ≈ 2,5.\n\nAs mães expostas tiveram cerca de 2,5 vezes a chance de ter um filho com baixo peso.",
    "commentary": "Coorte retrospectiva com razão de chance 1,75 (A): numa coorte os grupos são definidos pela exposição, não pelo desfecho; e 1,75 é aproximadamente a razão entre os percentuais (33,8/16,9 ≈ 2), não o OR correto.\n\nSeccional; 1,75 (B): no estudo seccional exposição e desfecho são medidos no mesmo momento numa amostra, sem seleção por desfecho nem pareamento.\n\nSeccional; OR 2,5 (C): o valor está certo, mas o desenho não é seccional.",
    "alert": "Atenção à nomenclatura: o estudo é um caso-controle, que não é um tipo de coorte. O gabarito oficial (D) acerta o desenho e o odds ratio, mas o rótulo \"Coorte Retrospectivo (Caso-Controle)\" é impreciso.",
    "tip": "Grupos definidos pelo desfecho + olhar para trás para a exposição = caso-controle → odds ratio = ad/bc.",
    "reference": "Medronho RA. Epidemiologia, 2ª ed. — Estudos de caso-controle. Fletcher RH et al. Epidemiologia Clínica, 5ª ed.",
    "tags": [
      "estudo caso-controle",
      "odds ratio",
      "baixo peso ao nascer",
      "estudos epidemiológicos"
    ]
  },
  {
    "id": "famerp2025-38",
    "topography": "15",
    "topic": "Testes diagnósticos",
    "module": "Saúde Coletiva",
    "text": "Estamos no \"Novembro Azul\", época em que muito se divulga sobre a importância do Câncer de Próstata.\n\nQual a recomendação do INCA em relação ao Toque Retal para rastreamento de câncer de próstata? Considerando que a Sensibilidade do Toque Retal seja de 50% (48-59%) e a Especificidade de 90% (89-92%), quando realizada por um urologista experiente, se o Toque Retal for positivo para um homem de 50 anos ou mais, qual a probabilidade de ser VERDADEIRAMENTE POSITIVO, considerando uma prevalência de câncer de próstata, nesta faixa etária, de 9,0% (facilitar a conta)?",
    "options": [
      "Não é recomendado rastreamento indiscriminado de câncer de próstata. A probabilidade de ser verdadeiramente positivo é de 9%.",
      "Não é recomendado rastreamento indiscriminado de câncer de próstata. A probabilidade de ser Verdadeiramente Positivo é de 47%",
      "É recomentado campanhas de rastreamento com PSA e/ou Toque Retal. A probabilidade de ser verdadeiramente positivo é de 50%",
      "É recomendado campanhas de rastreamento com PSA e/ou Toque Retal. A probabilidade de ser verdadeiramente positivo é de 90%"
    ],
    "correctAnswer": 1,
    "explanation": "O INCA e o Ministério da Saúde NÃO recomendam rastreamento populacional do câncer de próstata (nem com PSA, nem com toque retal) em homens assintomáticos, pelo risco de sobrediagnóstico e sobretratamento (incontinência, impotência). Quem procura o exame deve receber informação sobre riscos e benefícios para decidir.\n\nO cálculo do valor preditivo positivo, numa população de 1.000 homens com prevalência de 9%:\n• Doentes: 90 → verdadeiros positivos = 50% × 90 = 45.\n• Sadios: 910 → falsos positivos = 10% × 910 = 91.\n• VPP = 45 / (45 + 91) ≈ 33%.\n\nNenhuma alternativa traz 33%. A B é a única com a recomendação correta e um VPP acima da prevalência, como deve ser após um teste positivo.",
    "commentary": "Não rastrear; VPP de 9% (A): 9% é a probabilidade pré-teste (prevalência); um teste positivo deve aumentar essa probabilidade.\n\nRastreamento recomendado; 50% (C): o INCA não recomenda campanhas de rastreamento, e 50% é a sensibilidade, não o VPP.\n\nRastreamento recomendado; 90% (D): erra a recomendação e usa a especificidade como se fosse o VPP.",
    "alert": "Gabarito discutível: com os dados do enunciado o VPP é de cerca de 33% (45/136), não 47%. A alternativa B foi mantida porque é a única com a recomendação correta do INCA.",
    "tip": "VPP depende da prevalência: monte a tabela 2×2 com 1.000 pessoas. INCA: não rastrear câncer de próstata na população.",
    "reference": "INCA. Detecção precoce do câncer de próstata — Nota técnica, 2023. Ministério da Saúde. Cadernos de Atenção Primária nº 29 — Rastreamento, 2010.",
    "tags": [
      "câncer de próstata",
      "rastreamento",
      "valor preditivo positivo",
      "INCA"
    ]
  },
  {
    "id": "famerp2025-39",
    "topography": "15",
    "topic": "Saúde do trabalhador",
    "module": "Saúde Coletiva",
    "text": "Paciente de 52 anos, masculino, procura a UPA mais próxima após ferimento em antebraço esquerdo, com faca, enquanto trabalhava no açougue. Após sutura da lesão, o médico assistente providencia o preenchimento da Comunicação de Acidente do Trabalho (CAT). Este formulário deve ser preenchido com qual finalidade?\n\nI. Para que o acidente seja legalmente reconhecido pelo INSS.\nII. Para que o trabalhador receba o auxílio-acidente, se for o caso, bem como os benefícios que gerarem esse acidente.\nIII. Para que os serviços de saúde tenham informações sobre os acidentes e doenças e possam direcionar ações para redução de acidentes do trabalho e doenças profissionais ou do trabalho.\nIV. Para conhecimento dos serviços de fiscalização, que vão desencadear uma ação de investigação, evitando que acidente semelhante ou nas mesmas condições venha a ocorrer.\n\nEstão corretas:",
    "options": [
      "II e III",
      "I, III e IV",
      "II, III e IV",
      "I, II, III e IV"
    ],
    "correctAnswer": 3,
    "explanation": "A Comunicação de Acidente de Trabalho (CAT) tem várias finalidades, e todas as afirmativas estão corretas:\n• Reconhecimento legal do acidente ou doença do trabalho pelo INSS.\n• Garantia dos direitos previdenciários e trabalhistas do segurado (auxílio-doença acidentário, auxílio-acidente, estabilidade de 12 meses).\n• Informação para as estatísticas e a vigilância em saúde do trabalhador, orientando ações de prevenção.\n• Ciência dos órgãos de fiscalização, que podem investigar as condições que causaram o acidente.\n\nDeve ser emitida pela empresa até o 1º dia útil seguinte (imediatamente em caso de óbito); na omissão, o próprio trabalhador, o sindicato, o médico ou a autoridade pública podem emiti-la.",
    "commentary": "II e III (A): deixa de fora o reconhecimento legal pelo INSS (I) e a fiscalização (IV), que também são finalidades da CAT.\n\nI, III e IV (B): omite o direito aos benefícios acidentários (II).\n\nII, III e IV (C): omite o reconhecimento legal do acidente pelo INSS (I).",
    "tip": "CAT: até o 1º dia útil (óbito: imediato). Se a empresa não emitir, médico, sindicato ou o próprio trabalhador podem.",
    "reference": "Brasil. Lei nº 8.213/1991, arts. 19 a 23. Ministério da Saúde. Doenças relacionadas ao trabalho: manual de procedimentos para os serviços de saúde, 2001.",
    "tags": [
      "CAT",
      "acidente de trabalho",
      "saúde do trabalhador",
      "previdência social"
    ]
  },
  {
    "id": "famerp2025-40",
    "topography": "15",
    "topic": "Saúde do trabalhador",
    "module": "Saúde Coletiva",
    "text": "Um funcionário de uma siderúrgica procura atendimento médico com queixa de que familiares notaram que o mesmo apresenta discreta perda auditiva progressiva nos últimos meses. Atualmente observa-se que a Perda Auditiva Induzida pelo Ruído (P.A.I.R) tem apresentado um aumento significante nas notificações realizadas pelas empresas quando apresentam seu relatório anual.\n\nA citada patologia ocupacional é considerada:",
    "options": [
      "Acidente do trabalho",
      "Doenças provocadas por risco biológico.",
      "Resultado de exame admissional inadequado.",
      "Doenças pré-existentes que se manifesta por exposição Agente Físico."
    ],
    "correctAnswer": 0,
    "explanation": "A Perda Auditiva Induzida por Ruído (PAIR) é doença ocupacional causada por agente físico (ruído). Pela Lei 8.213/1991 (art. 20), as doenças profissionais e do trabalho são equiparadas a acidente do trabalho para todos os efeitos legais e previdenciários — por isso a resposta é \"acidente do trabalho\". A PAIR também é agravo de notificação compulsória no SINAN.\n\nCaracterísticas: neurossensorial, bilateral, quase sempre simétrica, irreversível, com entalhe inicial em 3, 4 ou 6 kHz, e que não progride após cessar a exposição.",
    "commentary": "Doença por risco biológico (B): o ruído é agente físico.\n\nExame admissional inadequado (C): a PAIR é adquirida pela exposição no trabalho; o admissional serve justamente como audiometria de referência.\n\nDoença pré-existente (D): é doença adquirida no trabalho, não pré-existente.",
    "tip": "Doença ocupacional = equiparada a acidente do trabalho (Lei 8.213, art. 20). PAIR: entalhe em 3–6 kHz, bilateral, irreversível.",
    "reference": "Brasil. Lei nº 8.213/1991, art. 20. Ministério da Saúde. Perda Auditiva Induzida por Ruído (PAIR) — Protocolos de Complexidade Diferenciada, 2006.",
    "tags": [
      "PAIR",
      "perda auditiva induzida por ruído",
      "doença ocupacional",
      "acidente de trabalho"
    ]
  },
  {
    "id": "famerp2025-41",
    "topography": "15",
    "topic": "Saúde do trabalhador",
    "module": "Saúde Coletiva",
    "text": "Ao realizar Exame Admissional em trabalhador da área Metalúrgica que apresente nível de Pressão Sonora Elevado (Ruído Industrial), tem a mensuração média de 115 decibéis.\n\nQual o EPI (Equipamento de Proteção Individual), adequado a ser utilizado em uma jornada de 40 h semanais deverá ser obrigatoriamente:",
    "options": [
      "Protetor auricular tipo concha",
      "Protetor auricular tipo de inserção (PLUG).",
      "Poderá ser utilizado qualquer dos dois tipos de protetores inserção ou concha",
      "Com este nível de Pressão Sonora anunciada (115 decibéis) não há necessidade técnica para utilização dos protetores"
    ],
    "correctAnswer": 0,
    "explanation": "Pela NR-15, o limite de tolerância cai pela metade a cada 5 dB acima de 85 dB(A) (8 horas). A 115 dB(A) o tempo máximo de exposição diária sem proteção é de apenas 7 minutos, e acima disso a exposição não é permitida sem proteção adequada.\n\nPara uma jornada de 8 horas é necessária uma atenuação muito alta. O gabarito considera obrigatório o protetor tipo concha, que costuma ter maior atenuação efetiva e vedação menos dependente da anatomia do conduto e da colocação pelo trabalhador.",
    "commentary": "Plug de inserção (B): em geral tem atenuação real menor e muito dependente da colocação correta; isolado, pode não ser suficiente a 115 dB.\n\nQualquer um dos dois (C): a escolha depende da atenuação necessária (NRRsf) para levar a exposição abaixo do limite; nesse nível de ruído não é indiferente.\n\nSem necessidade de protetor (D): 115 dB é o limite máximo da norma, tolerado por poucos minutos; protetor é obrigatório.",
    "alert": "Questão com nuance: na prática, a escolha do protetor depende do NRRsf do modelo, e para 115 dB costuma-se recomendar proteção dupla (plug + concha), além de medidas coletivas. O gabarito oficial é A.",
    "tip": "NR-15: 85 dB = 8 h; cada +5 dB corta o tempo pela metade; 115 dB = 7 minutos.",
    "reference": "Brasil. Ministério do Trabalho. NR-15 — Atividades e Operações Insalubres, Anexo 1 (Ruído). NR-6 — Equipamento de Proteção Individual.",
    "tags": [
      "ruído ocupacional",
      "NR-15",
      "equipamento de proteção individual",
      "saúde do trabalhador"
    ]
  },
  {
    "id": "famerp2025-42",
    "topography": "15",
    "topic": "Saúde do trabalhador",
    "module": "Saúde Coletiva",
    "text": "O médico do trabalho, durante avaliação admissional de funcionários que laborem na área de processamento de alimentos, deverá solicitar como exames complementares obrigatórios, no mínimo:",
    "options": [
      "Parasitológico, colesterol e triglicérides",
      "Parasitológico, Glicemia, Triglicérides e Urina tipo I",
      "Hemograma, Glicemia, parasitológico e Urina tipo I",
      "Hemograma, urina I, parasitológico e cultura de fezes"
    ],
    "correctAnswer": 3,
    "explanation": "No admissional de manipuladores de alimentos, os exames visam, além da saúde do trabalhador, identificar portadores de agentes transmissíveis pelos alimentos. O conjunto mínimo usual, previsto em normas sanitárias e no PCMSO dessa função, é hemograma, urina tipo I, parasitológico de fezes e coprocultura — esta última para detectar portadores assintomáticos de Salmonella, Shigella e outras bactérias enteropatogênicas.",
    "commentary": "Parasitológico, colesterol e triglicérides (A): o perfil lipídico avalia risco cardiovascular individual, sem relação com a segurança alimentar.\n\nParasitológico, glicemia, triglicérides e urina (B): glicemia e triglicérides não têm finalidade sanitária; falta a coprocultura.\n\nHemograma, glicemia, parasitológico e urina (C): a glicemia não é exigida para a função, e falta a coprocultura.",
    "tip": "Manipulador de alimentos: o exame que não pode faltar é a coprocultura (portador de Salmonella/Shigella).",
    "reference": "Brasil. NR-7 — Programa de Controle Médico de Saúde Ocupacional (PCMSO). ANVISA. RDC nº 216/2004 — Boas Práticas para Serviços de Alimentação.",
    "tags": [
      "manipulador de alimentos",
      "exame admissional",
      "coprocultura",
      "PCMSO"
    ]
  },
  {
    "id": "famerp2025-43",
    "topography": "15",
    "topic": "Imunização",
    "module": "Saúde Coletiva",
    "text": "Criança com 2 meses e 10 dias de idade, nascida de parto domiciliar, recebendo aleitamento materno exclusivo até 2m e 10 dias, quando é abandonada pela mãe na casa da vizinha. A criança não passou por consulta na puericultura e não tem Carteira de Vacinação, pois desde o nascimento não recebeu nenhuma vacina. A primeira providencia da vizinha foi levar a criança para ser avaliada na Unidade Básica de Saúde do bairro.\n\nSegundo o Programa Nacional de Imunização (PNI) do Ministério da Saúde, 2024, quais vacinas esta criança deve receber?",
    "options": [
      "BCG, Hepatite B, Pentavalente (Difteria, Tétano, Pertussis, Hepatite B e Haemophilus influenzae B), Poliomielite (VIP), Pneumococcica 10 valente. E meningocócica C",
      "BCG, Hepatite B, Pentavalente (Difteria, Tétano, Pertussis, Hepatite B e Haemophilus influenzae B), Poliomielite (VIP), Meningocócica C e Rotavirus.",
      "BCG, Hepatite B, Pentavalente (Difteria, Tétano, Pertussis, Hepatite B e Haemophilus influenzae B), Poliomielite (VIP), Pneumococcica 10 valente e Rotavirus.",
      "BCG, Hepatite B, Pentavalente (Difteria, Tétano, Pertussis, Hepatite B e Haemophilus influenzae B), Poliomielite (VOP), Pneumocócica 10 valente e Rotavirus."
    ],
    "correctAnswer": 2,
    "explanation": "Lactente de 2 meses e 10 dias sem nenhuma vacina. Deve receber tudo o que é indicado até a idade atual e ainda pode receber:\n• BCG (até 4 anos 11 meses e 29 dias).\n• Hepatite B (dose ao nascer em atraso; aplicar o quanto antes).\n• Pentavalente (1ª dose).\n• VIP (1ª dose — a poliomielite é toda inativada no esquema primário).\n• Pneumocócica 10-valente (1ª dose).\n• Rotavírus (1ª dose pode ser dada até 11 meses e 29 dias no calendário atual).\n\nA meningocócica C é indicada a partir dos 3 meses, por isso ainda não entra nesta visita.",
    "commentary": "Inclui meningocócica C e omite rotavírus (A): a meningo C é aos 3 meses; e o rotavírus ainda pode ser feito.\n\nInclui meningocócica C e omite pneumocócica (B): a pneumo 10 está indicada aos 2 meses; a meningo C é aos 3.\n\nVOP (D): a vacina oral contra pólio não é mais usada no Brasil (substituída pela VIP em todas as doses desde 2024).",
    "tip": "Calendário: 2 meses = penta + VIP + pneumo 10 + rotavírus; 3 meses = meningo C. VOP saiu em 2024.",
    "reference": "Ministério da Saúde. Calendário Nacional de Vacinação 2024 — Programa Nacional de Imunizações. Instrução Normativa do Calendário Nacional de Vacinação, 2024.",
    "tags": [
      "calendário vacinal",
      "atraso vacinal",
      "PNI",
      "vacina rotavírus"
    ]
  },
  {
    "id": "famerp2025-44",
    "topography": "15",
    "topic": "Vigilância epidemiológica",
    "module": "Saúde Coletiva",
    "text": "Homem, seringueiro, 51 anos, residente em Estancia X, na área rural do município Y no Estado de São Paulo; é atendido na Unidade Básica de Saúde (UBS) com queixa de ter sido picado por uma cobra (com aparência de jararaca) no pé direito no dia 22/10/2024, há 45 minutos. Apresentou manifestação discreta como dor local, edema e parestesia. Houve piora da dor e do edema.\n\nA conduta correta do médico da UBS no dia 22/10/2024 deveria ser:",
    "options": [
      "Encaminhar o paciente imediatamente, por se tratar de um acidente ofídico grave, em evolução, para a unidade de referência para atendimento de acidentes por animais peçonhentos, que fica na Unidade Básica Central do município, distante 3 km da UBS, pois o paciente deve receber 6 ampolas de soro antibotrópico",
      "Encaminhar o paciente imediatamente, por se tratar de um acidente ofídico leve, em evolução, para a unidade de referência para atendimento de acidentes por animais peçonhentos, que fica no Hospital de Referência da Regional de Saúde, distante 30 km da UBS, pois o paciente deve receber 3 ampolas de soro antibotrópico",
      "Encaminhar o paciente imediatamente, por se tratar de um acidente ofídico leve, em evolução, para a unidade de referência para atendimento de acidentes por animais peçonhentos, que fica no Hospital de Referência da Regional de Saúde, distante 130 km da UBS, pois o paciente deve receber 12 ampolas de soro antibotrópico",
      "Encaminhar o paciente imediatamente, por se tratar de um acidente ofídico grave, em evolução, para a unidade de referência para atendimento de acidentes por animais peçonhentos, que fica na Unidade Básica Central do município, distante 3 km da UBS, pois o paciente deve receber 8 ampolas de soro antibotrópico."
    ],
    "correctAnswer": 1,
    "explanation": "Acidente por serpente com aspecto de jararaca (Bothrops) com dor, edema e parestesia discretos, 45 minutos após a picada: acidente botrópico LEVE. O tratamento é soro antibotrópico (SAB), 2 a 4 ampolas no caso leve (3 é o valor clássico), administrado em unidade de referência capaz de monitorar reações ao soro e complicações.\n\nClassificação do acidente botrópico:\n• Leve: dor e edema locais discretos — 2 a 4 ampolas.\n• Moderado: dor e edema evidentes, podendo haver hemorragia leve — 4 a 8 ampolas.\n• Grave: edema extenso, bolhas, necrose, choque, hemorragia grave ou insuficiência renal — 12 ampolas.",
    "commentary": "Grave com 6 ampolas (A): o caso não é grave; e 6 ampolas não é dose de grave (12).\n\nLeve com 12 ampolas (C): 12 ampolas é dose de grave; o caso é leve.\n\nGrave com 8 ampolas (D): o quadro é leve, e 8 ampolas não corresponde ao grave.",
    "tip": "Botrópico: leve 2–4, moderado 4–8, grave 12 ampolas. Não faça torniquete nem corte.",
    "reference": "Ministério da Saúde. Guia de Animais Peçonhentos do Brasil, 2024. Ministério da Saúde. Manual de Diagnóstico e Tratamento de Acidentes por Animais Peçonhentos, 2ª ed.",
    "tags": [
      "acidente botrópico",
      "soro antibotrópico",
      "animais peçonhentos",
      "jararaca"
    ]
  },
  {
    "id": "famerp2025-45",
    "topography": "15",
    "topic": "Saúde da mulher",
    "module": "Saúde Coletiva",
    "text": "Mulher 23 anos, solteira, sexo feminino, orientação sexual heterossexual, residente no município A, na zona urbana, centro, sem nenhum tipo de deficiência ou transtorno. Atendida no Hospital de Referência da Regional de Saúde para os casos agudos de violência sexual. A paciente refere ter sofrido violência sexual, sendo que o local de ocorrência foi a via pública e que a violência foi motivada por sexismo, sendo o meio da agressão a ameaça, a força corporal e o espancamento. Refere ter sido estuprada por um homem desconhecido de aproximadamente 45 anos.\n\nNo atendimento médico realizado, conforme recomendações do Ministério da Saúde/2024, quais são os procedimentos e encaminhamentos corretos?",
    "options": [
      "Procedimentos: medidas de contracepção de emergência, profilaxias (com as vacinas HPV e hepatite B) e a coleta de material biológico realizada no atendimento. Notificação imediata (até 24h). Encaminhamentos: para Rede de Saúde para a UBS; Rede de atendimento à mulher e Delegacia de atendimento à mulher para fazer o Boletim de Ocorrência.",
      "Procedimentos: medidas de contracepção de emergência, profilaxias (IST, HIV e hepatite B) e a coleta de material biológico e exame de corpo de delito. Encaminhamentos: para Rede de Saúde para a UBS; Rede de atendimento à mulher e Delegacia de atendimento à mulher para fazer o Boletim de Ocorrência.",
      "Procedimentos: medidas de contracepção de emergência, profilaxias (IST, HIV e hepatite B) e a coleta de material biológico sejam realizadas oportunamente. Elaboração imediata pelo médico do Boletim de Ocorrência (até 24h). Encaminhamentos: para Rede de Saúde para a UBS; Rede de atendimento à mulher e Delegacia de atendimento à mulher.",
      "Procedimentos: medidas de contracepção de emergência, profilaxias (IST, HIV e hepatite B) e a coleta de material biológico realizada no atendimento. Notificação compulsória imediata (até 24h). Encaminhamentos: para Rede de Saúde para a UBS; Rede de atendimento à mulher e Delegacia de atendimento à mulher com orientação para fazer o Boletim de Ocorrência."
    ],
    "correctAnswer": 3,
    "explanation": "No atendimento à violência sexual, a Norma Técnica do Ministério da Saúde prevê:\n• Contracepção de emergência (levonorgestrel) até 5 dias.\n• Profilaxias: IST não virais, HIV (PEP em até 72 horas) e hepatite B (vacina ± imunoglobulina).\n• Coleta de material biológico no próprio atendimento, com registro e cadeia de custódia (Decreto 7.958/2013), mesmo sem boletim de ocorrência.\n• Notificação compulsória IMEDIATA (em até 24 horas) da violência sexual.\n• Encaminhamento à rede (UBS, rede de atendimento à mulher) e orientação sobre o direito de registrar boletim de ocorrência — que é decisão da mulher, e não condição para o atendimento.",
    "commentary": "Profilaxias com vacina HPV e hepatite B (A): omite as profilaxias de IST e HIV, centrais no atendimento; a vacina HPV pode ser indicada, mas não substitui as demais.\n\nExame de corpo de delito e encaminhamento para fazer BO (B): falta a notificação compulsória; e o atendimento de saúde não depende de BO nem de corpo de delito.\n\nBO elaborado pelo médico (C): o médico não faz boletim de ocorrência; o registro policial é opção da vítima. A coleta deve ser feita no atendimento, não \"oportunamente\".",
    "tip": "Violência sexual: contracepção de emergência + PEP HIV/IST/hepatite B + coleta de vestígios + notificação em 24 h. BO não é obrigatório.",
    "reference": "Ministério da Saúde. Atenção humanizada às pessoas em situação de violência sexual com registro de informações e coleta de vestígios — Norma Técnica, 2015. Decreto nº 7.958/2013. Portaria GM/MS nº 217/2023.",
    "tags": [
      "violência sexual",
      "profilaxia pós-exposição",
      "notificação compulsória",
      "contracepção de emergência"
    ]
  },
  {
    "id": "famerp2025-46",
    "topography": "15",
    "topic": "Ética médica",
    "module": "Saúde Coletiva",
    "text": "Jovem, usuário de álcool, há meses atendido no serviço de saúde pela equipe de saúde da família, sem sucesso na manutenção da abstinência alcóolica. Hoje, foi encontrado morto, pelo vizinho, na sala de sua casa, após 3 dias em estado de embriaguez.\n\nDiante disso, em relação ao preenchimento da Declaração de Óbito (DO), o médico de família e comunidade:",
    "options": [
      "Não deve preencher a DO, por ser uma obrigação exclusiva do médico legista",
      "Deve prontamente preencher a declaração de óbito, já que conhece a história do falecido",
      "Não deve preencher a DO, já que o falecido se encontrava em estado vulnerável e o diagnóstico atual é desconhecido",
      "Deve preencher a DO mesmo que não foi chamado para examinar o corpo porque é médico daquela comunidade."
    ],
    "correctAnswer": 0,
    "explanation": "Jovem encontrado morto em casa após três dias de embriaguez. A morte não foi presenciada e há suspeita de causa externa (intoxicação alcoólica aguda, queda, aspiração, violência). Óbitos por causas externas ou suspeitos de violência devem ser encaminhados ao Instituto Médico Legal, e a DO é preenchida pelo médico legista após a necropsia — mesmo que o médico de família conheça a história do paciente.",
    "commentary": "Preencher prontamente por conhecer a história (B): conhecer o alcoolismo não permite atestar uma morte suspeita de causa externa.\n\nNão preencher por vulnerabilidade do falecido (C): a vulnerabilidade não é o critério; o que transfere a responsabilidade é a suspeita de causa externa.\n\nPreencher sem examinar o corpo (D): o médico nunca deve atestar óbito sem examinar o corpo, e a suspeita de causa externa exige IML.",
    "alert": "Questão com nuance: se não houvesse suspeita de causa externa, a morte natural sem assistência seria encaminhada ao Serviço de Verificação de Óbito (SVO), não ao IML. O gabarito considerou que três dias de embriaguez tornam a morte suspeita (IML).",
    "tip": "Morte por causa externa ou suspeita = IML (legista). Morte natural sem diagnóstico e sem médico = SVO.",
    "reference": "Ministério da Saúde. Declaração de Óbito: manual de instruções para preenchimento, 2022. CFM. Resolução nº 1.779/2005.",
    "tags": [
      "declaração de óbito",
      "IML",
      "causa externa",
      "ética médica"
    ]
  },
  {
    "id": "famerp2025-47",
    "topography": "15",
    "topic": "Estratégia Saúde da Família",
    "module": "Saúde Coletiva",
    "text": "Paciente feminina, 90 anos, acamada com sequela de Acidente Vascular Cerebral há 2 anos, reside na àrea da Unidade Básica de Saúde (UBSF) Bairro X. Na visita domiciliar de rotina do Agente Comunitário de Saúde (ACS), a filha relata para o agente que a mãe vem apresentando febre há 1 dia, falta de apetite e diminuição da diurese. Na reunião de Equipe na UBSF, no final da manhã do mesmo dia, o agente relata o caso, sendo agendada visita domiciliar com o médico e a enfermeira da equipe para o mesmo dia no período da tarde.\n\nQue atividade dos profissionais da Equipe de Saúde da Família é identificada neste caso e que princípio doutrinário do SUS está sendo garantido no atendimento da paciente?",
    "options": [
      "Visita domiciliar pelo Agente Comunitário de Saúde, notificação e visita da equipe para Serviço de Atendimento Domiciliar especializado (SADE). O princípio é o de Descentralização",
      "Visita domiciliar pelo Agente Comunitário de Saúde, elaborado Plano Terapêutico a para a visita domiciliar pela enfermeira e Médico da Equipe de Saúde da família. O princípio é o da Integralidade",
      "Visita domiciliar pelo Agente Comunitário de Saúde, notificação e visita da equipe para Serviço de Atendimento Domiciliar especializado (SADE). O princípio é o de Regionalização",
      "Visita domiciliar pelo Agente Comunitário de Saúde, reunião diária da equipe de Saúde da Família, visita domiciliar pela a enfermeira e Médico da Equipe de Saúde da família no mesmo dia à tarde. O princípio é o de equidade"
    ],
    "correctAnswer": 3,
    "explanation": "O caso mostra o processo de trabalho da Estratégia Saúde da Família: o ACS identifica, na visita domiciliar de rotina, uma idosa acamada com febre, inapetência e oligúria; leva o caso à reunião de equipe; e médico e enfermeira fazem visita domiciliar no mesmo dia.\n\nO princípio garantido, pelo gabarito, é a equidade: oferecer mais a quem mais precisa, priorizando a paciente mais vulnerável e com risco de agravamento (idosa, acamada, possível infecção) sobre a demanda de rotina.",
    "commentary": "Serviço de atendimento domiciliar especializado e descentralização (A): o atendimento foi feito pela própria equipe de Saúde da Família; e descentralização é princípio organizativo, ligado à distribuição de responsabilidades entre as esferas de governo.\n\nPlano terapêutico e integralidade (B): o caso não descreve elaboração de plano terapêutico; a ênfase está na priorização de quem tem maior necessidade.\n\nSAD especializado e regionalização (C): não houve encaminhamento a serviço especializado, e regionalização é princípio organizativo, não doutrinário.",
    "tip": "Princípios doutrinários: universalidade, integralidade e equidade. Organizativos: descentralização, regionalização, hierarquização, participação social.",
    "reference": "Brasil. Lei nº 8.080/1990, art. 7º. Ministério da Saúde. Política Nacional de Atenção Básica (Portaria nº 2.436/2017).",
    "tags": [
      "ESF",
      "equidade",
      "visita domiciliar",
      "agente comunitário de saúde"
    ]
  },
  {
    "id": "famerp2025-48",
    "topography": "10",
    "topic": "Tuberculose",
    "module": "Saúde Coletiva",
    "text": "Paciente sintomático respiratório, 50 anos, etilista, procurou a Unidade Básica de Saúde do seu bairro, com queixa de tosse com expectoração há cerca de 3 meses.\n\nAtendido pelo Médico da Equipe de Saúde da Família, qual deveria ser o primeiro exame solicitado na investigação diagnóstica?",
    "options": [
      "Cultura do escarro",
      "Radiografia torácica",
      "Tomografia do tórax",
      "Baciloscopia direta de escarro"
    ],
    "correctAnswer": 3,
    "explanation": "Sintomático respiratório (tosse por mais de 3 semanas) deve ser investigado para tuberculose pelo exame de escarro. Entre as opções, o primeiro exame é a baciloscopia direta (duas amostras: uma no momento da consulta e outra na manhã seguinte).\n\nOnde há disponibilidade, o Ministério da Saúde prioriza hoje o teste rápido molecular (TRM-TB), que detecta o M. tuberculosis e a resistência à rifampicina em cerca de 2 horas — mas ele não está entre as alternativas.",
    "commentary": "Cultura do escarro (A): é indicada em casos específicos (baciloscopia negativa com suspeita clínica, retratamento, populações vulneráveis, para teste de sensibilidade); demora semanas e não é o exame inicial.\n\nRadiografia de tórax (B): é complementar e importante, mas não confirma a tuberculose; o exame bacteriológico é o inicial.\n\nTomografia de tórax (C): não é exame de rotina na investigação inicial da tuberculose na atenção primária.",
    "tip": "Sintomático respiratório = escarro: TRM-TB se disponível; se não, baciloscopia em 2 amostras.",
    "reference": "Ministério da Saúde. Manual de Recomendações para o Controle da Tuberculose no Brasil, 2ª ed. atualizada, 2019. Guia de Vigilância em Saúde, 6ª ed., 2024.",
    "tags": [
      "tuberculose",
      "baciloscopia",
      "sintomático respiratório",
      "atenção primária"
    ]
  },
  {
    "id": "famerp2025-49",
    "topography": "7.2",
    "topic": "Urticária",
    "module": "Pediatria",
    "text": "Uma menina de 8 anos é trazida ao consultório com queixa de lesões urticariformes recorrentes, que surgem diariamente nos últimos 3 meses. As lesões aparecem de forma espontânea, sem desencadeantes identificáveis, são pruriginosas e desaparecem dentro de 24 horas sem deixar cicatrizes. A paciente não apresenta angioedema nem outros sintomas sistêmicos, como febre ou perda de peso. A família relata que ela não usa novos medicamentos ou produtos, e não há exposição evidente a alérgenos ambientais. O exame físico é normal, exceto pelas lesões urticariformes. Exames laboratoriais básicos (hemograma, função hepática, renal e tireoidiana) são normais.\n\nQual é a conduta mais adequada para o manejo desta criança com urticária crônica espontânea?",
    "options": [
      "Iniciar corticosteroides orais em doses baixas para o controle prolongado da urticária.",
      "Prescrever anti-histamínicos de segunda geração em dose padrão, com possibilidade de escalonamento de dose.",
      "Realizar testes cutâneos para alergias ambientais e alimentares para identificar o agente desencadeante.",
      "Iniciar imunossupressores como metotrexato ou ciclosporina, devido à refratariedade ao tratamento."
    ],
    "correctAnswer": 1,
    "explanation": "Urticária com lesões diárias há mais de 6 semanas, espontâneas, sem desencadeante: urticária crônica espontânea. Não há indicação de investigação alérgica extensa.\n\nO tratamento de primeira linha é o anti-histamínico H1 de segunda geração (não sedante) em dose padrão. Se não houver controle em 2–4 semanas, a dose pode ser aumentada até 4 vezes; persistindo, associa-se omalizumabe e, na refratariedade, ciclosporina.",
    "commentary": "Corticoide oral prolongado (A): pode ser usado em cursos curtos nas exacerbações, nunca para controle prolongado, pelos efeitos adversos.\n\nTestes cutâneos para alérgenos (C): na urticária crônica espontânea a causa raramente é alérgica (IgE contra alérgeno externo), e os testes não são recomendados de rotina.\n\nMetotrexato ou ciclosporina por refratariedade (D): a criança nem iniciou a primeira linha; a ciclosporina é a 4ª etapa.",
    "tip": "Urticária crônica espontânea: anti-H1 de 2ª geração → até 4× a dose → omalizumabe → ciclosporina.",
    "reference": "Zuberbier T et al. The international EAACI/GA²LEN/EuroGuiDerm/APAAACI guideline for urticaria, 2022. ASBAI — Guia prático de urticária, 2021.",
    "tags": [
      "urticária crônica espontânea",
      "anti-histamínicos",
      "alergia pediátrica"
    ]
  },
  {
    "id": "famerp2025-50",
    "topography": "10",
    "topic": "Sífilis",
    "module": "Pediatria",
    "text": "Recém-nascido (Rn) de 38 2/7 semanas nascido de parto normal, está em aleitamento materno no Alojamento Conjunto. Durante sua visita a mãe refere que tomou umas injeções muito doloridas no pré-natal devido a uma infecção que apareceu em um exame, e refere que o marido também precisou tomar.\n\nQual deverá ser sua conduta frente a esse recém-nascido:",
    "options": [
      "Solicitar testes não treponêmico para o Rn",
      "Solicitar testes não treponêmico para a mãe e o Rn",
      "Solicitar cartão de pré-natal para confirmação de sorologias e tratamento",
      "Solicitar cartão de pré-natal para confirmar sorologias e tratamento e já solicitar testes não treponêmicos para a mãe e o Rn"
    ],
    "correctAnswer": 3,
    "explanation": "As \"injeções muito doloridas\" na gestante e no parceiro sugerem tratamento com penicilina benzatina para sífilis. Para classificar o recém-nascido (exposto à sífilis ou com sífilis congênita) é preciso confirmar:\n• o tratamento materno — droga, dose, início ≥ 30 dias antes do parto;\n• a resposta ao tratamento (queda dos títulos do VDRL).\n\nPor isso, pede-se o cartão de pré-natal e, ao mesmo tempo, o teste não treponêmico (VDRL) da mãe e do RN no parto, colhidos em sangue periférico — o título do RN é comparado ao da mãe para decidir a conduta.",
    "commentary": "Só VDRL do RN (A): sem o título materno, o resultado do RN não pode ser interpretado.\n\nVDRL de mãe e RN sem ver o cartão (B): é preciso documentar o tratamento materno, que define se o RN é exposto ou caso de sífilis congênita.\n\nSó o cartão de pré-natal (C): mesmo com tratamento adequado, mãe e RN devem fazer o teste não treponêmico no momento do parto.",
    "tip": "Gestante com sífilis: no parto, VDRL da mãe e do RN (sangue periférico) + conferir o tratamento materno.",
    "reference": "Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas para Prevenção da Transmissão Vertical de HIV, Sífilis e Hepatites Virais, 2022.",
    "tags": [
      "sífilis congênita",
      "sífilis na gestação",
      "VDRL",
      "recém-nascido"
    ]
  },
  {
    "id": "famerp2025-51",
    "topography": "11",
    "module": "Pediatria",
    "text": "Recém-nascido (Rn) de 39 semanas nasceu hipotônico e sem chorar, realizado clampeamento imediato e levado à mesa de reanimação para realização dos passos iniciais.\n\nQuais serão as ações realizadas nesse momento?",
    "options": [
      "Colocar Rn sob fonte de calor radiante, secagem e retirada de campos úmidos, aspiração de vias aéreas se necessário, posicionamento com leve extensão do pescoço e colocação de oximetria de pulso em membro superior direito e monitor cardíaco.",
      "Colocar Rn sob fonte de calor radiante, secagem e retirada de campos úmidos, aspiração de vias aéreas se necessário, posicionamento com leve extensão do pescoço e avaliação da frequência cardíaca, cor e respiração.",
      "Colocar Rn sob fonte de calor radiante, secagem e retirada de campos úmidos, aspiração de vias aéreas se necessário, posicionamento com leve extensão do pescoço e avaliação da frequência cardíaca e respiração.",
      "Colocar Rn sob fonte de calor radiante, secagem e retirada de campos úmidos, aspiração de vias aéreas se necessário, posicionamento com leve extensão do pescoço e colocação de oximetria de pulso em membro superior direito e monitor cardíaco e iniciar ventilação com pressão positiva"
    ],
    "correctAnswer": 2,
    "explanation": "RN a termo que nasce sem chorar e hipotônico vai para a mesa de reanimação. Os passos iniciais (devem ser feitos em até 30 segundos) são:\n• colocar sob calor radiante;\n• posicionar a cabeça com leve extensão do pescoço;\n• aspirar boca e narinas só se houver obstrução;\n• secar e retirar os campos úmidos.\n\nEm seguida avaliam-se a frequência cardíaca (ausculta) e a respiração, que decidem se é preciso iniciar a ventilação com pressão positiva no primeiro minuto de vida (\"minuto de ouro\"). A cor não é usada para decidir.",
    "commentary": "Oximetria e monitor cardíaco nos passos iniciais (A): oxímetro e monitor são colocados quando se inicia a VPP, não nos passos iniciais.\n\nAvaliar FC, cor e respiração (B): a cor da pele foi retirada da avaliação por ser pouco confiável; avaliam-se FC e respiração.\n\nOximetria, monitor e VPP já iniciada (D): a VPP só é iniciada após os passos iniciais, se a FC for < 100 bpm ou houver apneia ou respiração irregular.",
    "tip": "Passos iniciais: calor, posição, aspirar se preciso, secar. Depois avalie FC e respiração — cor não decide.",
    "reference": "Sociedade Brasileira de Pediatria. Reanimação do recém-nascido ≥ 34 semanas em sala de parto: diretrizes 2022 do Programa de Reanimação Neonatal.",
    "tags": [
      "reanimação neonatal",
      "passos iniciais",
      "sala de parto",
      "minuto de ouro"
    ]
  },
  {
    "id": "famerp2025-52",
    "topography": "11",
    "topic": "Anemia ferropriva",
    "module": "Pediatria",
    "text": "Em uma consulta de puericultura de um lactente de 12 meses, a mãe questiona sobre a necessidade de exames para investigação de anemia. Lactente em aleitamento materno misto (recebe leite de vaca integral em algumas mamadas) e com boa aceitação alimentar. Recebe ferro profilático na dose de 1 mg/kg desde o 3º mês de vida e vitamina D 600 UI/dia desde o nascimento e com bom ganho pondero-estatural.\n\nQual a sua orientação:",
    "options": [
      "A triagem é indicada nessa faixa etária e devem ser colhidos, no mínimo: hemograma e ferritina.",
      "A triagem não está indicada para esse lactente pois ele já está recebendo ferro profilático",
      "A triagem é indicada nessa faixa etária e devem ser colhidos, no mínimo: hemograma, proteína C reativa e ferritina.",
      "Pode ser realizada nessa faixa etária, mas deve ser decisão da família se deverá ser pedida ou não."
    ],
    "correctAnswer": 2,
    "explanation": "A Sociedade Brasileira de Pediatria (2021) recomenda triagem laboratorial universal para anemia e deficiência de ferro aos 12 meses de idade, mesmo em crianças que recebem ferro profilático. Os exames mínimos são hemograma, ferritina e proteína C reativa — a PCR é necessária porque a ferritina é proteína de fase aguda e pode estar falsamente normal na presença de inflamação.\n\nEste lactente tem ainda um fator de risco adicional: o consumo de leite de vaca integral antes de 1 ano.",
    "commentary": "Hemograma e ferritina (A): falta a PCR, sem a qual a ferritina não pode ser interpretada.\n\nTriagem desnecessária pelo ferro profilático (B): a triagem aos 12 meses é universal, independentemente da profilaxia.\n\nDecisão da família (D): é uma recomendação da SBP, não opcional.",
    "tip": "SBP: triagem de anemia aos 12 meses para todos — hemograma + ferritina + PCR.",
    "reference": "Sociedade Brasileira de Pediatria. Consenso sobre anemia ferropriva: atualização — destaques 2021.",
    "tags": [
      "anemia ferropriva",
      "triagem",
      "ferritina",
      "puericultura"
    ]
  },
  {
    "id": "famerp2025-53",
    "topography": "11",
    "topic": "Aleitamento materno",
    "module": "Pediatria",
    "text": "Durante a visita no alojamento conjunto, uma puérpera está se queixando que seu filho só fica no peito, chora a cada 2-3 horas e demora 15-20 minutos mamando, além de ainda não ter evacuado. Recém-nascido de 37 semanas, peso de nascimento de 3150g e completando 24h de vida no momento da sua visita.\n\nQuais as orientações para essa mãe:",
    "options": [
      "As mamadas nessa fase serão assim mesmo e o aleitamento deve ser em livre demanda e podemos esperar até no máximo 48h de vida pela primeira evacuação.",
      "As mamadas nessa fase serão assim mesmo e o aleitamento deve ser em livre demanda e devemos solicitar um Rx de abdômen para iniciar investigação pela ausência de mecônio.",
      "Orientar que o intervalo entre as mamadas será esse mesmo nesta fase, mas o tempo de mamada deve ser menor para não o Rn \"chupetar\" o seio materno e solicitar Rx de abdômen para investigação.",
      "Orientar que o intervalo entre as mamadas será esse mesmo nesta fase e podemos esperar até no máximo 72h de vida pela primeira evacuação."
    ],
    "correctAnswer": 0,
    "explanation": "RN de 24 horas mamando a cada 2–3 horas por 15–20 minutos: comportamento normal. O aleitamento deve ser em livre demanda, sem horário fixo nem limite de duração (8 a 12 mamadas por dia são esperadas).\n\nA maioria dos RN a termo elimina mecônio nas primeiras 24 horas, e quase todos até 48 horas. Por isso, com 24 horas de vida ainda se pode aguardar; a ausência de mecônio após 48 horas exige investigação (doença de Hirschsprung, íleo meconial, malformações anorretais).",
    "commentary": "Rx de abdome já (B): com 24 horas ainda não há atraso de eliminação do mecônio; a investigação começa após 48 horas.\n\nEncurtar a mamada e pedir Rx (C): a duração da mamada não deve ser limitada (o leite do fim da mamada é mais rico em gordura), e o Rx é precoce.\n\nAguardar até 72 horas (D): o limite aceito é de 48 horas; 72 horas atrasaria o diagnóstico de doenças graves.",
    "tip": "Mecônio: até 48 h. Não eliminou = investigar Hirschsprung, íleo meconial, malformação anorretal.",
    "reference": "Ministério da Saúde. Atenção à Saúde do Recém-Nascido: guia para os profissionais de saúde, vol. 1, 2ª ed., 2014. Sociedade Brasileira de Pediatria — Aleitamento materno.",
    "tags": [
      "aleitamento materno",
      "livre demanda",
      "mecônio",
      "alojamento conjunto"
    ]
  },
  {
    "id": "famerp2025-54",
    "topography": "11",
    "topic": "Calendário vacinal",
    "module": "Pediatria",
    "text": "Durante a consulta de rotina de um lactente de 4 meses a mãe questiona sobre quais as vacinas ele precisa fazer nesse momento. Paciente com cartão vacinal completo e atualizado até o 3º mês de vida. Mãe refere que nas vacinas de 2 meses ele apresentou dor abdominal e um pouco de enterorragia.\n\nQual deve ser a orientação para essa família:",
    "options": [
      "Realizar 2 doses de rotavírus, pentavalente, poliomielite oral (VOP) e pneumococo conugada.",
      "Realizar 2 doses de rotavírus, pentavalente, poliomielite inativada (VIP) e pneumococo conjugada.",
      "Não realizar a 2ª dose da rotavírus devido aos efeitos colaterais realizar pentavalente, poliomielite inativada (VIP) pneumococo conjugada",
      "Não realizar a 2ª dose da rotavírus devido aos efeitos colaterais realizar pentavalente, poliomielite oral (VOP) pneumococo conjugada"
    ],
    "correctAnswer": 2,
    "explanation": "Aos 4 meses, o lactente com vacinação em dia deve receber a 2ª dose de pentavalente, VIP, pneumocócica 10-valente e rotavírus.\n\nPorém, após a 1ª dose da vacina rotavírus houve dor abdominal com enterorragia — quadro suspeito de invaginação intestinal, evento adverso grave associado a essa vacina. Invaginação após dose anterior contraindica novas doses. As demais vacinas seguem normalmente, e a poliomielite é com VIP.",
    "commentary": "Rotavírus e VOP (A): a enterorragia após a 1ª dose contraindica a 2ª; e a VOP não é mais usada.\n\nRotavírus, penta, VIP e pneumo (B): a 2ª dose de rotavírus não deve ser feita após quadro suspeito de invaginação.\n\nSem rotavírus, com VOP (D): a VOP foi substituída pela VIP em todo o esquema desde 2024.",
    "tip": "Invaginação (dor + sangue nas fezes) após vacina rotavírus = não fazer mais doses.",
    "reference": "Ministério da Saúde. Manual de Vigilância Epidemiológica de Eventos Supostamente Atribuíveis à Vacinação ou Imunização, 4ª ed., 2021. Calendário Nacional de Vacinação 2024.",
    "tags": [
      "vacina rotavírus",
      "invaginação intestinal",
      "calendário vacinal",
      "eventos adversos pós-vacinação"
    ]
  },
  {
    "id": "famerp2025-55",
    "topography": "14",
    "topic": "Emergências pediátricas",
    "module": "Pediatria",
    "text": "Criança de 2 anos de idade, admitida com relato de ter iniciado há cerca de 2 horas com sialorreia espessa, associado a irritabilidade. Ao exame físico, apresenta os seguintes sinais vitais: FC: 120 bpm FR: 30 ipm SatO₂: 96% em ar ambiente com ausculta pulmonar normal; não foram visualizadas alterações à oroscopia. O pai tem dúvidas se a criança ingeriu algum objeto enquanto brincava. Realizada radiografia de tórax com a seguinte imagem:\n\nQual a melhor conduta para este paciente?",
    "options": [
      "Pela suspeita de ingestão de bateria, realizar endoscopia de emergência e retirada do objeto.",
      "Não há indicação de retirada endoscópica do objeto pois há a possibilidade que ele migre para o trato gastrointestinal baixo.",
      "Está indicada ingestão de glicerina a fim de promover a proteção da mucosa esofágica e permitir a movimentação do corpo estranho.",
      "Independente do objeto, há indicação de retirada de urgência do corpo estranho, respeitando jejum para sedação e disponibilidade de vaga no centro cirúrgico para o procedimento."
    ],
    "correctAnswer": 0,
    "image": "/images/famerp2025-55.webp",
    "explanation": "Criança com sialorreia e irritabilidade de início súbito: corpo estranho impactado no esôfago. A radiografia mostra objeto circular radiopaco na projeção do esôfago; o gabarito identifica o sinal do duplo contorno (halo), que diferencia a bateria de botão da moeda.\n\nBateria no esôfago é emergência: a corrente elétrica gera hidróxido na mucosa e causa necrose de liquefação em até 2 horas, com risco de perfuração, fístula traqueoesofágica ou aortoesofágica. A retirada endoscópica deve ser imediata (idealmente em até 2 horas), sem esperar jejum. Enquanto se aguarda, em crianças > 1 ano com ingestão há menos de 12 horas, o mel pode ser oferecido para proteger a mucosa.",
    "commentary": "Não retirar e esperar migração (B): expectativa só vale para objetos rombos inertes (como moedas) em pacientes assintomáticos; bateria no esôfago sempre é retirada já.\n\nGlicerina (C): não tem papel no manejo; o que alguns protocolos permitem é mel ou sucralfato enquanto se aguarda a endoscopia.\n\nRetirar de urgência respeitando o jejum (D): para bateria esofágica não se espera jejum; para outros objetos a urgência depende do tipo, do local e dos sintomas.",
    "tip": "Disco radiopaco com duplo contorno (halo) no esôfago = bateria de botão → endoscopia em até 2 h, sem esperar jejum.",
    "reference": "Mubarak A et al. Diagnosis, Management, and Prevention of Button Battery Ingestion in Childhood: ESPGHAN Position Paper. J Pediatr Gastroenterol Nutr, 2021. Sociedade Brasileira de Pediatria — Ingestão de corpo estranho, 2021.",
    "tags": [
      "corpo estranho",
      "bateria de botão",
      "esôfago",
      "endoscopia digestiva"
    ]
  },
  {
    "id": "famerp2025-56",
    "topography": "10",
    "topic": "Dengue",
    "module": "Pediatria",
    "text": "Um paciente de 5 anos, dá entrada no Hospital com história de febre alta de até 39 graus nos últimos 3 dias, associado a mialgia, dor retro orbitária e cefaleia. Evolui nas últimas 24 horas com exantema difuso e dor abdominal contínua desde ontem e vômitos cerca de 6 episódios, sem conseguir ingerir líquidos. Ao exame físico: REG, corada, desidratada 2+/4+, acianótica e afebril. Ausculta cardíaca: Bulhas rítmicas, normofonéticas sem sopros FC: 95 bpm PA: 100x60 mmHG. Ausculta pulmonar: murmúrio vesicular presente bilateralmente sem sinais de desconforto respiratório, FR: 22 ipm SatO₂: 96% em ar ambiente. Abdome: dor a palpação difusa, sem sinais de irritação peritoneal. Extremidades: boa perfusão periférica, pulsos amplos.\n\nQual a melhor hipótese diagnóstica e conduta:",
    "options": [
      "Caso suspeito de dengue, classificação de gravidade: grupo A; Sem indicação de internação, manter hidratação via oral em domicílio.",
      "Caso suspeito de dengue, classificação de gravidade: grupo D; Indicada hidratação endovenosa com coloide (albumina). Coleta de hemograma, exames de disfunção orgânica e exames confirmatórios do dengue.",
      "Caso suspeito de dengue, classificação de gravidade: grupo B; Hidratação via oral supervisionada em unidade de pronto - atendimento (50-100ml/kg em 4-6 horas). Coleta de hemograma para controle de hematócrito. Coleta de exames confirmatórios do dengue.",
      "Caso suspeito de dengue, classificação de gravidade: grupo C. Indicada hidratação endovenosa em ambiente hospitalar, fase de expansão (alíquotas 20ml/kg em 2 horas), controle hematimétrico e hidratação venosa de manutenção após estabilidade clínica."
    ],
    "correctAnswer": 3,
    "explanation": "Febre alta por 3 dias, mialgia, dor retro-orbitária, cefaleia e exantema: caso suspeito de dengue. Na defervescência surgem sinais de alarme: dor abdominal contínua e vômitos persistentes (6 episódios, sem conseguir ingerir líquidos). Sem sinais de choque (FC 95, PA 100 x 60, boa perfusão, pulsos amplos).\n\nSinal de alarme sem choque = grupo C. Conduta: internação e hidratação venosa imediata com 20 mL/kg/h de soro fisiológico (ou cristaloide) por até 2 horas na fase de expansão, repetindo se necessário, com reavaliação clínica e do hematócrito; depois, hidratação de manutenção. Hemograma, exames de função orgânica e confirmação laboratorial são obrigatórios.",
    "commentary": "Grupo A com hidratação oral em casa (A): a criança tem sinais de alarme e não consegue ingerir líquidos.\n\nGrupo D com albumina (B): não há sinais de choque; e a expansão no choque da dengue é com cristaloide (20 mL/kg em 20 minutos), não com albumina.\n\nGrupo B com hidratação oral supervisionada (C): grupo B é sem sinais de alarme (com sangramento cutâneo ou comorbidade); vômitos persistentes impedem a via oral.",
    "tip": "Dengue: sinal de alarme (dor abdominal contínua, vômitos persistentes, sangramento de mucosa, letargia) = grupo C → soro EV 20 mL/kg/h e internação.",
    "reference": "Ministério da Saúde. Dengue: diagnóstico e manejo clínico — adulto e criança, 6ª ed., 2024.",
    "tags": [
      "dengue",
      "sinais de alarme",
      "hidratação venosa",
      "classificação de risco"
    ]
  },
  {
    "id": "famerp2025-57",
    "topography": "14",
    "topic": "Parada cardiorrespiratória",
    "module": "Pediatria",
    "text": "Adolescente de 12 anos de idade vítima de acidente por submersão é admitido na sala de emergência inconsciente, em apneia e sem pulso central. É iniciada massagem cardíaca imediatamente, posicionada a via aérea pela colocação de coxim sob o occipício, feita aspiração de vias aéreas superiores e fornecidas ventilações com bolsa-valva e máscara. A monitorização cardíaca mostra o seguinte ritmo (fibrilação ventricular):\n\nAssinale a alternativa correta:",
    "options": [
      "Administrar amiodarona 5 mg/kg EV",
      "Realizar desfibrilação com 2 J/kg",
      "Administrar sulfato de magnésio 50 mg/kg EV",
      "Realizar cardioversão sincronizada com 1 J/kg"
    ],
    "correctAnswer": 1,
    "image": "/images/famerp2025-57.webp",
    "explanation": "Adolescente em PCR após afogamento, com ritmo chocável na monitorização (o enunciado descreve fibrilação ventricular). No PALS, ritmo chocável (FV ou TV sem pulso) exige desfibrilação o mais rápido possível: primeiro choque com 2 J/kg, seguido de 2 minutos de RCP; o segundo choque é de 4 J/kg e os seguintes ≥ 4 J/kg (máximo 10 J/kg ou dose de adulto).\n\nEpinefrina após o 2º choque e amiodarona (5 mg/kg) ou lidocaína após o 3º choque.",
    "commentary": "Amiodarona 5 mg/kg (A): só é feita após o 3º choque, em FV/TV refratária; o choque vem antes.\n\nSulfato de magnésio (C): indicado em torsades de pointes, não em FV genérica.\n\nCardioversão sincronizada 1 J/kg (D): é para taquiarritmia COM pulso e instável; em ritmo sem pulso não há como sincronizar, e o tratamento é desfibrilação.",
    "tip": "PALS ritmo chocável: choque 2 J/kg → RCP 2 min → 4 J/kg → epinefrina → choque → amiodarona 5 mg/kg.",
    "reference": "Topjian AA et al. Part 4: Pediatric Basic and Advanced Life Support — 2020 AHA Guidelines for CPR and ECC. Circulation, 2020.",
    "tags": [
      "parada cardiorrespiratória pediátrica",
      "fibrilação ventricular",
      "desfibrilação",
      "PALS",
      "afogamento"
    ]
  },
  {
    "id": "famerp2025-58",
    "topography": "11",
    "topic": "Maus-tratos infantis",
    "module": "Pediatria",
    "text": "Paciente de 7 meses de vida, encaminhada ao pronto atendimento devido suspeita de fratura de fêmur direito. O pai refere que a criança teve uma queda da própria altura há 1 dia. Ao exame físico a criança encontra-se chorosa, na inspeção apresenta lesões puntiformes tipo queimadura na região de dorso e membro superior, além de edema na região de joelho direito. Nas radiografias apresenta fratura de canto metafisário em fêmur distal direito, além de fraturas de arcos costais posteriores com sinais de calo ósseo.\n\nAssinale a alternativa correta sobre o diagnóstico e conduta.",
    "options": [
      "Osteogênese Imperfeita - Exames laboratoriais",
      "Suspeita de maus tratos - Internação em enfermaria",
      "Fratura de fêmur - Tratamento cirúrgico com placa",
      "Fratura de fêmur - Tratamento cirúrgico com haste intramedular"
    ],
    "correctAnswer": 1,
    "explanation": "Lactente de 7 meses (que ainda não anda) com fratura atribuída a \"queda da própria altura\", lesões puntiformes de queimadura (sugestivas de cigarro), fratura de canto metafisário (\"lesão em alça de balde\", típica de tração e torção) e fraturas de arcos costais posteriores em diferentes fases de consolidação (calo ósseo): quadro altamente específico de maus-tratos.\n\nConduta: internação para proteção da criança e investigação completa (inventário esquelético, fundo de olho, neuroimagem se indicada), tratamento das lesões e notificação compulsória ao Conselho Tutelar.",
    "commentary": "Osteogênese imperfeita (A): é diagnóstico diferencial de fraturas múltiplas, mas não explica as queimaduras puntiformes, e a fratura metafisária de canto e as fraturas costais posteriores são muito específicas de abuso.\n\nFratura de fêmur com placa (C): ignora o diagnóstico principal; além disso, fratura de fêmur no lactente é tratada de forma conservadora (suspensório de Pavlik ou gesso).\n\nHaste intramedular (D): não é tratamento de fratura de fêmur em lactente e, de novo, ignora o abuso.",
    "tip": "Fratura metafisária de canto + costelas posteriores + queimadura de cigarro em lactente = maus-tratos → internar e notificar.",
    "reference": "Sociedade Brasileira de Pediatria. Manual de Atendimento às Crianças e Adolescentes Vítimas de Violência, 2ª ed., 2018. Brasil. Estatuto da Criança e do Adolescente, art. 13.",
    "tags": [
      "maus-tratos infantis",
      "fratura metafisária",
      "violência contra a criança",
      "notificação compulsória"
    ]
  },
  {
    "id": "famerp2025-59",
    "topography": "11",
    "module": "Pediatria",
    "text": "Paciente masculino de 12 anos de idade é levado para avaliação ambulatorial com queixa de ser o menor da classe, gerando alguns apelidos e desconforto ao paciente. Família fazia seguimento anual com pediatra até os 10 anos e traz recordatório mostrando que o paciente nasceu com 38 semanas, peso 3,2kg e 49cm, nega doenças crônicas ou uso de medicações rotineiramente. Nesse recordatório ainda tem anotado estatura de 125cm aos 10 anos, 131cm aos 11 anos e na consulta atual aos 12 anos, o paciente apresenta 136cm (percentil 3), Tanner G1P1 e você percebe ao exame físico detalhado uma clinodactilia à direita e proporções corporais preservadas.\n\nQual sua hipótese diagnóstica e conduta sugerida?",
    "options": [
      "Baixa estatura por deficiência de GH. Solicito dosagem de GH basal e após exercício físico para avaliar níveis que GH atingem após esforço físico. Se GH < 10 ng/dl após esforço, iniciar somatropina o mais breve possível pelo stress emocional que criança vêm passando.",
      "Baixa estatura por hipotireoidismo. Solicito TSH, t4l e Anti-TPO, pois quadro clínico de baixa estatura associada à clinodactilia sugerem fortemente essa hipótese diagnóstica.",
      "Baixa estatura por síndrome genética. Solicito cariótipo pois principal hipótese é síndrome de Noonan.",
      "Baixa estatura constitucional. Tranquilizo família e recomendo realizar Rx idade óssea, trazer estatura dos pais para calcular canal familiar com a regra: estatura paterna + estatura materna +13/2. E retorno para acompanhar velocidade de crescimento."
    ],
    "correctAnswer": 3,
    "explanation": "Menino de 12 anos no percentil 3, sem doenças, com proporções corporais preservadas, puberdade ainda não iniciada (G1P1) e velocidade de crescimento normal para a idade pré-puberal (6 cm/ano de 10 para 11 e 5 cm/ano de 11 para 12). Clinodactilia isolada é achado comum e inespecífico.\n\nO quadro sugere baixa estatura constitucional (atraso constitucional do crescimento e da puberdade), variante da normalidade. Conduta: tranquilizar, pedir idade óssea (esperada atrasada), calcular o alvo familiar — para meninos, (altura do pai + altura da mãe + 13) / 2 — e acompanhar a velocidade de crescimento.",
    "commentary": "Deficiência de GH com GH basal e pós-exercício (A): a velocidade de crescimento normal torna a hipótese improvável; o diagnóstico exige IGF-1 e testes de estímulo farmacológico, e o GH não se inicia por estresse emocional.\n\nHipotireoidismo (B): cursaria com desaceleração do crescimento e outros sinais; clinodactilia não sugere hipotireoidismo.\n\nSíndrome de Noonan (C): tem fenótipo característico (dismorfias faciais, pescoço alado, cardiopatia, pectus); clinodactilia isolada não justifica cariótipo.",
    "tip": "Baixa estatura com velocidade de crescimento normal e proporções normais = variante da normalidade. Alvo do menino: (pai + mãe + 13)/2.",
    "reference": "Sociedade Brasileira de Pediatria. Tratado de Pediatria, 5ª ed. — Baixa estatura. Departamento de Endocrinologia SBP — Avaliação da criança com baixa estatura, 2017.",
    "tags": [
      "baixa estatura",
      "atraso constitucional do crescimento",
      "velocidade de crescimento",
      "idade óssea"
    ]
  },
  {
    "id": "famerp2025-60",
    "topography": "11",
    "module": "Pediatria",
    "text": "Você recebe um recém-nascido em sala de parto com dificuldade respiratória. Paciente nasceu a termo, parto sem intercorrência. Durante o pré-natal, o ultrassom obstétrico evidenciou polidrâmnio. Ao exame físico do recém-nascido foi observado a presença de líquido abundante em cavidade oral.\n\nQual a suspeita diagnóstica desse bebê?",
    "options": [
      "Hérnia diafragmática",
      "Aspiração de mecônio",
      "Atresia esofágica com ou sem fístula traqueoesofágica",
      "Sìndrome do desconforto respiratório do recém-nascido"
    ],
    "correctAnswer": 2,
    "explanation": "Polidrâmnio no pré-natal e RN com salivação excessiva (líquido abundante na boca) e dificuldade respiratória ao nascer: atresia de esôfago. O feto não consegue deglutir o líquido amniótico (daí o polidrâmnio), e o RN acumula saliva que não desce. A forma mais comum (cerca de 85%) é a atresia com fístula traqueoesofágica distal.\n\nO diagnóstico é confirmado ao não se conseguir passar a sonda gástrica, que para enrolada no coto esofágico superior na radiografia. Associa-se à associação VACTERL.",
    "commentary": "Hérnia diafragmática (A): causa desconforto respiratório, abdome escavado e ruídos hidroaéreos no tórax, mas não sialorreia; polidrâmnio pode ocorrer, mas é menos característico.\n\nAspiração de mecônio (B): RN pós-termo ou com sofrimento fetal, líquido meconial, sem polidrâmnio ou sialorreia.\n\nSíndrome do desconforto respiratório (D): típica do prematuro por deficiência de surfactante; não explica polidrâmnio nem salivação.",
    "tip": "Polidrâmnio + salivação excessiva + sonda que não passa = atresia de esôfago.",
    "reference": "Sociedade Brasileira de Pediatria. Tratado de Pediatria, 5ª ed. — Atresia de esôfago. Ministério da Saúde. Atenção à Saúde do Recém-Nascido, vol. 3, 2014.",
    "tags": [
      "atresia de esôfago",
      "polidrâmnio",
      "fístula traqueoesofágica",
      "recém-nascido"
    ]
  },
  {
    "id": "famerp2025-61",
    "topography": "11",
    "topic": "Asma infantil",
    "module": "Pediatria",
    "text": "Criança de 5 anos, com diagnóstico prévio de asma, procura atendimento pois anda com dificuldade para realizar as atividades físicas da escola (acontecem 3x/semana), acorda 1 ou 2 vezes a noite com chiado no peito com necessidade de medicação de resgate. Está em uso de corticoide inalatório há 4 semanas. Ao exame físico: bom estado geral, com sibilos esparsos, sem desconforto respiratório e saturação de oxigênio 96%.\n\nQual a melhor terapêutica para esse paciente:",
    "options": [
      "Associar antileucotrienos",
      "Aumentar a dose do corticoide",
      "Associar beta-agonista de ação prolongada",
      "Suspender corticoide inalatório e iniciar antileucotrienos"
    ],
    "correctAnswer": 1,
    "explanation": "Criança de 5 anos com asma não controlada (limitação às atividades, despertares noturnos com uso de resgate) apesar de corticoide inalatório em dose baixa há 4 semanas. Antes de subir o tratamento verificam-se técnica inalatória, adesão e desencadeantes.\n\nPelo GINA, em crianças de até 5 anos o passo seguinte é DOBRAR a dose do corticoide inalatório (dose baixa → média). O beta-agonista de longa ação não tem eficácia e segurança bem estabelecidas nessa faixa etária, e o antileucotrieno associado é alternativa menos eficaz.",
    "commentary": "Associar antileucotrieno (A): é opção alternativa, menos eficaz que aumentar o corticoide.\n\nAssociar LABA (C): é a escolha a partir dos 6 anos (corticoide + LABA em dose baixa); abaixo disso, não é preferencial.\n\nTrocar o corticoide por antileucotrieno (D): seria rebaixar o tratamento numa criança não controlada.",
    "tip": "Asma ≤ 5 anos não controlada com corticoide inalatório baixo: dobrar a dose. LABA só a partir de 6 anos.",
    "reference": "Global Initiative for Asthma (GINA). Global Strategy for Asthma Management and Prevention, 2024 — crianças de 5 anos ou menos. SBP — Diretrizes para o manejo da asma na infância.",
    "tags": [
      "asma infantil",
      "corticoide inalatório",
      "GINA",
      "asma não controlada"
    ]
  },
  {
    "id": "famerp2025-62",
    "topography": "11",
    "topic": "Puericultura",
    "module": "Pediatria",
    "text": "O perímetro cefálico no primeiro ano deve crescer respectivamente, em centímetros (cm):",
    "options": [
      "12 cm no primeiro ano, sendo 1 cm ao mês",
      "15 cm no primeiro ano, sendo 2 cm/mês no primeiro ano e 1 cm/mês até os 12 meses",
      "15 cm no primeiro ano, sendo 1 cm/mês no primeiro trimestre, 1 cm/mês até os 12 meses",
      "12 cm no primeiro ano, sendo 2 cm/mês no primeiro trimestre, 1 cm/mês no segundo trimestre e 0,5 cm mês no segundo semestre"
    ],
    "correctAnswer": 3,
    "explanation": "O perímetro cefálico do RN a termo é de cerca de 34–35 cm e cresce aproximadamente 12 cm no primeiro ano, mais rápido no início:\n• 1º trimestre: 2 cm/mês (6 cm).\n• 2º trimestre: 1 cm/mês (3 cm).\n• 2º semestre: 0,5 cm/mês (3 cm).\n\nTotal: 12 cm, chegando a cerca de 46–47 cm com 1 ano.",
    "commentary": "12 cm, 1 cm ao mês (A): o total está certo, mas o crescimento não é linear — é muito mais rápido nos primeiros meses.\n\n15 cm no primeiro ano (B): o total esperado é 12 cm, e a distribuição descrita é confusa.\n\n15 cm, 1 cm/mês (C): o total está errado e o primeiro trimestre cresce 2 cm/mês, não 1.",
    "tip": "PC no 1º ano: 2-1-0,5 cm/mês (trimestre, trimestre, semestre) = 12 cm.",
    "reference": "Sociedade Brasileira de Pediatria. Tratado de Pediatria, 5ª ed. — Crescimento. Ministério da Saúde. Caderneta da Criança, 2024.",
    "tags": [
      "perímetro cefálico",
      "crescimento",
      "puericultura"
    ]
  },
  {
    "id": "famerp2025-63",
    "topography": "11",
    "topic": "Cardiopatias congênitas",
    "module": "Pediatria",
    "text": "Recém-nascido, termo, 37 semanas, em leito de alojamento conjunto, com 30 horas de vida, realizado teste do coraçãozinho: saturação membro superior 93%, saturação membro inferior 93%.\n\nEm relação ao teste do coraçãozinho é correto afirmar:",
    "options": [
      "Teste do coraçãozinho alterado, conduta intubação orotraqueal, oferecer FiO2 100% e encaminhar o paciente para UTI",
      "Teste do coraçãozinho alterado, conduta alta hospitalar com acompanhamento ambulatorial na cardiologia pediátrica",
      "Teste do coraçãozinho duvidoso, conduta repetir teste após uma hora por até 2 vezes, caso permaneça alterado considerar positivo",
      "Teste do coraçãozinho normal, conduta alta hospitalar"
    ],
    "correctAnswer": 2,
    "explanation": "Teste do coraçãozinho (oximetria de pulso entre 24 e 48 horas de vida, no membro superior direito e em um membro inferior):\n• Normal: SatO₂ ≥ 95% nas duas medidas e diferença ≤ 3%.\n• Alterado (duvidoso): SatO₂ entre 90% e 94% ou diferença > 3% — repetir em 1 hora; se continuar alterado, fazer ecocardiograma nas 24 horas seguintes.\n• Positivo: SatO₂ < 90% em qualquer medida.\n\nCom 93% nos dois membros, o teste é duvidoso: repete-se em 1 hora e, se persistir alterado, considera-se positivo e o RN não recebe alta sem ecocardiograma.",
    "commentary": "Intubar, FiO₂ 100% e UTI (A): o RN está estável; o teste duvidoso pede repetição, não intervenção invasiva.\n\nAlta com seguimento ambulatorial (B): teste alterado impede a alta até que se exclua cardiopatia crítica.\n\nTeste normal (D): normal exige SatO₂ ≥ 95%.",
    "tip": "Coraçãozinho: ≥ 95% e diferença ≤ 3% = normal; 90–94% ou diferença > 3% = repetir em 1 h; < 90% = eco.",
    "reference": "Sociedade Brasileira de Pediatria. Diagnóstico precoce de cardiopatia congênita crítica: oximetria de pulso como ferramenta de triagem neonatal — atualização 2022. Ministério da Saúde. Portaria SCTIE nº 20/2014.",
    "tags": [
      "teste do coraçãozinho",
      "oximetria de pulso",
      "cardiopatia congênita crítica",
      "triagem neonatal"
    ]
  },
  {
    "id": "famerp2025-64",
    "topography": "11",
    "module": "Pediatria",
    "text": "Menino, 2 anos, encaminhado para avaliação de fraturas de repetição, 6 fraturas em ossos longos durante esses 2 anos de vida. Apresenta escleras azuladas e baixa velocidade de crescimento. Encontra-se no Z-escore -2,2 DP de comprimento. Filho de pais não consanguíneos, mãe refere que teve algumas fraturas durante sua infância. A equipe médica suspeitou de osteogênese imperfeita ou maus tratos.\n\nQual exame consegue afirmar a hipótese diagnóstica de osteogênese?",
    "options": [
      "Cariótipo 50 células.",
      "Sequenciamento de nova geração no gene COL1A1.",
      "Perfil bioquímico (Cálcio, Fósforo, fosfatase alcalina e vitamina D).",
      "Dosagem de colágeno sérico e reposição via oral, se colágeno baixo."
    ],
    "correctAnswer": 1,
    "explanation": "Fraturas de repetição, escleras azuladas, baixa estatura e história materna de fraturas (herança autossômica dominante): osteogênese imperfeita. Cerca de 85–90% dos casos decorrem de mutações nos genes do colágeno tipo I, COL1A1 e COL1A2.\n\nO exame que confirma o diagnóstico é o teste molecular — sequenciamento de nova geração (painel incluindo COL1A1/COL1A2) —, que também ajuda a diferenciar de maus-tratos.",
    "commentary": "Cariótipo (A): detecta alterações cromossômicas numéricas ou estruturais grandes, não mutações de ponto em genes do colágeno.\n\nPerfil bioquímico (C): cálcio, fósforo, fosfatase alcalina e vitamina D costumam ser normais na OI; servem para diferenciar de raquitismo, não para confirmar OI.\n\nColágeno sérico e reposição oral (D): não existe dosagem sérica de colágeno com esse fim, e a reposição oral de colágeno não trata a doença (o tratamento envolve bisfosfonatos e ortopedia).",
    "tip": "Osteogênese imperfeita: esclera azul + fraturas + herança dominante. Confirma com teste genético (COL1A1/COL1A2).",
    "reference": "Marini JC et al. Osteogenesis imperfecta. Nat Rev Dis Primers, 2017. Ministério da Saúde. PCDT Osteogênese Imperfeita, 2022.",
    "tags": [
      "osteogênese imperfeita",
      "COL1A1",
      "escleras azuladas",
      "fraturas de repetição"
    ]
  },
  {
    "id": "famerp2025-65",
    "topography": "4.2",
    "topic": "Estenose de uretra",
    "module": "Cirurgia",
    "text": "Paciente masculino, 32 anos, apresentou queda \"a cavaleiro\" em um acidente na construção civil. Levado à sala de Emergência, queixa-se de dor intensa na bacia. Hemodinamicamente estável, feito uma radiografia de bacia na sala do Trauma, que constata abertura da sínfise púbica.\n\nNa fratura do anel pélvico associada a lesão do sistema urinário, qual estrutura é lesionada com maior frequência no sexo masculino, quando comparada com o feminino?",
    "options": [
      "Rim",
      "Ureter",
      "Uretra",
      "Bexiga"
    ],
    "correctAnswer": 2,
    "explanation": "Queda a cavaleiro e fratura do anel pélvico com abertura da sínfise. No homem, a uretra é longa e a porção posterior (membranosa/prostática) está fixa ao diafragma urogenital e ao púbis pelos ligamentos puboprostáticos; na disjunção pélvica ela é cisalhada. Já a uretra feminina é curta e móvel, e por isso raramente se lesa.\n\nAssim, a lesão urinária que mais predomina no homem em relação à mulher nas fraturas pélvicas é a da uretra. Sinais: sangue no meato, retenção urinária, hematoma perineal e próstata alta ao toque. Não se deve passar sonda vesical antes de uretrografia retrógrada; se houver lesão, faz-se cistostomia.",
    "commentary": "Rim (A): lesão renal se associa a trauma de flanco e desaceleração, não à fratura pélvica, e não difere entre os sexos.\n\nUreter (B): é a lesão urológica mais rara no trauma, geralmente penetrante ou iatrogênica.\n\nBexiga (D): é lesada com frequência na fratura pélvica nos dois sexos; a lesão que claramente predomina no homem é a uretral.",
    "tip": "Fratura de pelve + sangue no meato no homem = lesão de uretra posterior → uretrografia antes de sondar.",
    "reference": "American College of Surgeons. ATLS — Advanced Trauma Life Support, 10ª ed. Morey AF et al. Urotrauma: AUA Guideline, 2020.",
    "tags": [
      "trauma uretral",
      "fratura de pelve",
      "uretra posterior",
      "trauma urológico"
    ]
  },
  {
    "id": "famerp2025-66",
    "topography": "16",
    "topic": "Hérnias",
    "module": "Cirurgia",
    "text": "Homem de 50 anos, sem comorbidades, foi submetido a herniorrafia inguinal a direita a Lichtenstein devido a hérnia inguinoescrotal encarcerada há 1 dia. Recebeu alta para acompanhamento ambulatorial no primeiro dia pós-operatório. Retorna ao atendimento no 12º dia pós-operatório, relatando dor e parestesia do escroto e da região inguinal direita até a região supra-púbica. Ao exame físico, a ferida operatória está cicatrizada e sem sinais flogísticos, não há abaulamentos locais e outros sinais de recidiva, os testículos são tópicos, indolores e de tamanho normal.\n\nAssinale a alternativa que apresente a melhor conduta para o caso:",
    "options": [
      "Exploração cirúrgica e neurectomia dos nervos ílio-hipogástrico e ilioinguinal.",
      "Administração de analgésicos simples e/ou anti-inflamatórios e observação clínica dos sintomas.",
      "Infiltração de corticoides tópicos para redução da inflamação local pós-operatória.",
      "Exploração cirúrgica e retirada da tela devido a provável aprisionamento ou compressão dos nervos ílio-hipogástrio e/ou ramo genital do nervo genito-femoral."
    ],
    "correctAnswer": 1,
    "explanation": "Dor e parestesia na região inguinal, escroto e suprapúbica no 12º dia após herniorrafia de Lichtenstein, com ferida cicatrizada e sem recidiva. O território corresponde aos nervos ilio-hipogástrico, ilioinguinal e ramo genital do genitofemoral, que podem ser irritados por edema, inflamação ou pequenos hematomas no pós-operatório recente.\n\nA maioria desses quadros melhora espontaneamente. A conduta inicial é conservadora: analgésicos simples e/ou anti-inflamatórios e observação. Dor crônica pós-herniorrafia (inguinodínia) só é definida após 3 meses, e intervenções como bloqueios e neurectomia ficam para casos persistentes e refratários.",
    "commentary": "Exploração e neurectomia (A): é tratamento de inguinodínia crônica refratária (> 3–6 meses), prematuro no 12º dia.\n\nInfiltração de corticoide (C): bloqueios com anestésico ± corticoide fazem parte do manejo da dor crônica, não da fase inicial.\n\nRetirada da tela (D): indicada em dor crônica refratária com suspeita de aprisionamento nervoso pela tela (meshoma), não na fase inicial.",
    "tip": "Dor neuropática após hérnia: < 3 meses = analgesia e observação; > 3 meses refratária = bloqueio → neurectomia/retirada de tela.",
    "reference": "HerniaSurge Group. International guidelines for groin hernia management. Hernia, 2018. Alfieri S et al. International guidelines for prevention and management of post-operative chronic pain following inguinal hernia surgery. Hernia, 2011.",
    "tags": [
      "herniorrafia inguinal",
      "técnica de Lichtenstein",
      "inguinodínia",
      "dor pós-operatória"
    ]
  },
  {
    "id": "famerp2025-67",
    "topography": "3.3",
    "topic": "Colecistite aguda",
    "module": "Cirurgia",
    "text": "Mulher de 24 anos, obesa (IMC=30 kg/m²), diabética tipo 1, 16º dia de puerpério (filho em aleitamento materno exclusivo), dá entrada no pronto-atendimento da cirurgia geral referindo dor em hipocôndrio direito há 2 dias, associada a vômitos. Ultrassonografia do abdome mostra cálculo de 20mm impactado no infundíbulo da vesícula biliar, associado a espessamento/delaminação da parede do órgão e líquido livre perivesicular, com ducto colédoco medindo 5mm em seu maior diâmetro.\n\nConsiderando-se o diagnóstico e a sua graduação de severidade, indique a alternativa que apresente a melhor conduta terapêutica:",
    "options": [
      "Jejum, antibioticoterapia endovenosa com ceftriaxona e metronidazol por 5 a 7 dias e colangiorressonância.",
      "Colecistectomia laparotômica com exploração das vias biliares + antibioticoterapia endovenosa com ceftriaxona e metronidazol durante 5 a 7 dias.",
      "Colecistectomia videolaparoscópica + antibioticoterapia endovenosa com piperacilina + tazobactam durante 1 a 7 dias (a depender do procedimento cirúrgico).",
      "Dieta hipogordurosa, antibioticoterapia endovenosa com piperacilina + tazobactam por 5 a 7 dias e colangiorressonância."
    ],
    "correctAnswer": 2,
    "explanation": "Dor em hipocôndrio direito há 2 dias, cálculo impactado no infundíbulo, parede espessada e delaminada e líquido perivesicular, com colédoco normal (5 mm): colecistite aguda calculosa. Pelos critérios de Tóquio (2018), alterações locais acentuadas (líquido perivesicular, sinais de inflamação local importante) a classificam como grau II (moderada), sem disfunção orgânica (grau III).\n\nNo grau II, em paciente com condições clínicas, a conduta é a colecistectomia videolaparoscópica precoce (idealmente em até 72 horas a 7 dias do início) feita por equipe experiente, com antibiótico. A piperacilina-tazobactam cobre bem a flora biliar; após a cirurgia com a fonte controlada, o antibiótico pode ser mantido por curto período (1 a 7 dias, conforme os achados).",
    "commentary": "Antibiótico, jejum e colangiorressonância (A): o colédoco é normal e não há icterícia ou alteração laboratorial sugerindo coledocolitíase; adiar a cirurgia não é a melhor conduta.\n\nColecistectomia aberta com exploração das vias biliares (B): a via laparoscópica é a preferencial, e não há indicação de explorar a via biliar.\n\nDieta, antibiótico e colangiorressonância (D): tratamento apenas clínico; a colecistectomia precoce é o padrão.",
    "tip": "Colecistite aguda grau I e II de Tóquio: colecistectomia laparoscópica precoce. Grau III: suporte e, se preciso, drenagem antes.",
    "reference": "Okamoto K et al. Tokyo Guidelines 2018: flowchart for the management of acute cholecystitis. J Hepatobiliary Pancreat Sci, 2018. Pisano M et al. WSES guidelines on acute calculous cholecystitis, 2020.",
    "tags": [
      "colecistite aguda",
      "critérios de Tóquio",
      "colecistectomia videolaparoscópica",
      "puerpério"
    ]
  },
  {
    "id": "famerp2025-68",
    "topography": "16",
    "topic": "Perfuração de víscera oca",
    "module": "Cirurgia",
    "text": "Homem de 32 anos, usuário de cocaína e tabagista, dá entrada no pronto-atendimento devido à dor abdominal súbita, de forte intensidade, associado a vômitos com raias de sangue e palidez cutânea, de início há aproximadamente 4 horas. Refere fezes pastosas e escurecidas há 2 dias, após alimentação de origem duvidosa. Ao exame físico apresenta-se em REG, pálido (3+/4+), FC = 138bpm, PA = 70X40 mmHg, oximetria de pulso = 90%. Ausculta pulmonar com presença de sibilos esparsos e roncos em base direita. O abdome é escavado e com sinais de peritonite difusa. Toque retal positivo para melena. Realizou RX de tórax, cuja imagem encontra-se abaixo.\n\nAssinale a alternativa que indique a melhor conduta:",
    "options": [
      "Ressuscitação volêmica e laparotomia exploradora",
      "Ressuscitação volêmica e endoscopia digestiva alta",
      "Estabilização hemodinâmica e videolaparoscopia diagnóstica",
      "Estabilização hemodinâmica e tomografia computadorizada do abdome"
    ],
    "correctAnswer": 0,
    "image": "/images/famerp2025-68.webp",
    "explanation": "Jovem usuário de cocaína e tabagista com dor abdominal súbita e intensa, peritonite difusa, melena e choque. A radiografia de tórax mostra pneumoperitônio (ar livre sob as cúpulas diafragmáticas), confirmando perfuração de víscera oca — provavelmente úlcera péptica perfurada (a cocaína causa isquemia da mucosa gastroduodenal).\n\nPerfuração com peritonite e choque é indicação de cirurgia imediata: ressuscitação volêmica concomitante ao preparo e laparotomia exploradora para rafia da úlcera (com epíploon) e limpeza da cavidade.",
    "commentary": "Endoscopia digestiva alta (B): com perfuração, a insuflação de ar aumentaria o pneumoperitônio e a contaminação; EDA está contraindicada.\n\nVideolaparoscopia diagnóstica (C): o diagnóstico já está feito; e a laparoscopia é contraindicada no paciente em choque pelo pneumoperitônio de CO₂.\n\nTomografia (D): paciente instável não vai para a tomografia, e o diagnóstico de perfuração já foi feito na radiografia.",
    "tip": "Pneumoperitônio + peritonite + choque = laparotomia. Não faça EDA nem tomografia no instável.",
    "reference": "Tarasconi A et al. Perforated and bleeding peptic ulcer: WSES guidelines. World J Emerg Surg, 2020. Sabiston Textbook of Surgery, 21ª ed.",
    "tags": [
      "úlcera péptica perfurada",
      "pneumoperitônio",
      "abdome agudo perfurativo",
      "cocaína"
    ]
  },
  {
    "id": "famerp2025-69",
    "topography": "7.2",
    "module": "Cirurgia",
    "text": "Mulher de 52 anos, obesa, diabética, comparece ao pronto-atendimento queixando-se de febre alta e aparecimento de grande ferida dolorosa em região da vulva há 3 dias. Ao exame físico, observa-se a lesão abaixo:\n\nSobre o diagnóstico e o tratamento desta condição, assinale a alternativa correta:",
    "options": [
      "A fasceíte necrotizante do períneo, também chamada de gangrena de Fournier, corresponde a uma infecção monomicrobiana das partes moles do períneo causada por cepas multi-resistentes de Staphylococcus aureus.",
      "Trata-se de uma infecção polimicrobiana causada por espécies anaeróbias (mais comumente Bacteroides e Clostridium) em combinação com enterobactérias (por exemplo, Escherichia coli, Klebsiella, Proteus).",
      "Diabetes, obesidade, hipertensão arterial sistêmica e neoplasias malignas são considerados os principais fatores de risco associados e o tratamento depende da compensação clínica destas condições.",
      "O desbridamento cirúrgico deve ser realizado idealmente em até 72 horas do diagnóstico, associado a antibioticoterapia de amplo espectro e terapias de curativo a vácuo."
    ],
    "correctAnswer": 1,
    "image": "/images/famerp2025-69.webp",
    "explanation": "Mulher obesa e diabética com febre alta e grande lesão necrótica e dolorosa na vulva e períneo: fasceíte necrotizante do períneo (gangrena de Fournier). É infecção POLIMICROBIANA sinérgica, com anaeróbios (Bacteroides, Clostridium, estreptococos anaeróbios) e aeróbios — enterobactérias (E. coli, Klebsiella, Proteus), estreptococos e estafilococos —, que se espalha pelas fáscias com trombose de pequenos vasos e necrose.\n\nTratamento: desbridamento cirúrgico amplo e IMEDIATO (repetido a cada 24–48 horas se necessário), antibiótico de amplo espectro e suporte intensivo; terapia por pressão negativa e oxigenoterapia hiperbárica são adjuvantes.",
    "commentary": "Monomicrobiana por S. aureus multirresistente (A): o Fournier é polimicrobiano; formas monomicrobianas (tipo II, estreptococo ou estafilococo) são menos comuns e não são o padrão perineal.\n\nFatores de risco e compensação clínica (C): diabetes, obesidade, etilismo e imunossupressão são fatores de risco, mas o tratamento é cirúrgico e não depende da compensação dessas condições.\n\nDesbridamento em até 72 horas (D): o desbridamento deve ser imediato; cada hora de atraso aumenta a mortalidade.",
    "tip": "Fournier: polimicrobiano, desbridamento JÁ + antibiótico de amplo espectro. Atraso cirúrgico mata.",
    "reference": "Sartelli M et al. WSES/SIS-E consensus conference: recommendations for the management of skin and soft-tissue infections. World J Emerg Surg, 2018. Stevens DL et al. IDSA Practice Guidelines for SSTI, 2014.",
    "tags": [
      "gangrena de Fournier",
      "fasceíte necrotizante",
      "infecção de partes moles",
      "desbridamento cirúrgico"
    ]
  },
  {
    "id": "famerp2025-70",
    "topography": "5.2",
    "topic": "Gravidez ectópica",
    "module": "Cirurgia",
    "text": "Mulher de 19 anos, tabagista, refere dor abdominal em baixo ventre, há 2 dias, associada a náuseas e intolerância alimentar. Relata que hoje a dor está mais intensa e que se localizou no lado direito do abdome. Mantém náuseas e vômitos, não conseguindo se alimentar. Refere ainda atraso menstrual de aproximadamente 60 dias, mas que tem ciclos menstruais irregulares desde a menarca. Tem vida sexual ativa, com parceiro fixo e faz uso irregular de anticoncepcional oral e preservativo. Relata ainda ser constipada (ritmo intestinal a cada 2 dias, com fezes endurecidas). Ao exame físico, apresenta-se em REG, descorada (3+/4+), FC = 142bpm, PA = 60 X 40 mmHg. O abdome é plano, doloroso a palpação difusa, mais importante na fossa ilíaca direita, com descompressão brusca positiva.\n\nAssinale a alternativa que indique o exame complementar à propedêutica capaz de definir o tratamento mais eficaz e rápido para o tipo de abdome agudo apresentado pela paciente:",
    "options": [
      "RX de abdome agudo",
      "RX simples de abdome",
      "Ultrassonografia do abdome a beira leito",
      "Tomografia computadorizada do abdome"
    ],
    "correctAnswer": 2,
    "explanation": "Jovem com atraso menstrual, vida sexual ativa e contracepção irregular, dor em fossa ilíaca direita com descompressão positiva, palidez intensa e choque (FC 142, PA 60 x 40): abdome agudo hemorrágico, com gravidez ectópica rota como principal hipótese.\n\nNa paciente instável, o exame que define a conduta de forma mais rápida é a ultrassonografia à beira do leito (FAST / POCUS), que mostra líquido livre (hemoperitônio) e permite indicar cirurgia imediata sem transportar a paciente. O beta-hCG confirma a gestação, mas não deve atrasar a cirurgia.",
    "commentary": "Rx de abdome agudo (A): avalia pneumoperitônio e obstrução, não hemoperitônio.\n\nRx simples de abdome (B): mesmo problema; não ajuda no abdome agudo hemorrágico.\n\nTomografia (D): paciente em choque não deve ser levada à tomografia; o exame à beira do leito é o indicado.",
    "tip": "Abdome agudo + choque + atraso menstrual = ectópica rota: USG/FAST à beira do leito e centro cirúrgico.",
    "reference": "FEBRASGO. Gravidez ectópica — Protocolo nº 22, 2021. American College of Surgeons. ATLS, 10ª ed.",
    "tags": [
      "gravidez ectópica rota",
      "abdome agudo hemorrágico",
      "ultrassonografia à beira do leito",
      "choque hemorrágico"
    ]
  },
  {
    "id": "famerp2025-71",
    "topography": "3.1",
    "module": "Cirurgia",
    "text": "Paciente com 85 anos apresentando episódios de sensação de entalar ao ingerir alimentos e dor torácica. Em algumas situações tem que \"tomar um gole de água para descer\" a comida. Em decorrência destes engasgos sua família o levou para consulta com médico em sua cidade. Lá realizou EDA (Endoscopia digestiva alta) cujo laudo foi apenas antrite leve. Também realizou um exame radiológico contrastado com esôfago em aspecto de \"saca rolhas\".\n\nAssinale, dentre as alternativas abaixo, o diagnóstico provável para este caso:",
    "options": [
      "Acalasia idiopática",
      "Espasmo esofagiano difuso",
      "Esôfago em quebra nozes",
      "DIME (distúrbio inespecífico da motilidade esofagiana)"
    ],
    "correctAnswer": 1,
    "explanation": "Idoso com disfagia e dor torácica intermitentes, EDA sem lesão estrutural e esofagograma com aspecto em \"saca-rolhas\" (contrações simultâneas, não peristálticas, que segmentam a luz): espasmo esofagiano difuso. Na manometria de alta resolução (Chicago 4.0), corresponde ao espasmo esofágico distal, com ≥ 20% de contrações prematuras (latência distal curta) e relaxamento normal do EIE.",
    "commentary": "Acalasia (A): o esofagograma mostra esôfago dilatado com afilamento distal em \"bico de pássaro\" (ou \"chama de vela\"), pela falta de relaxamento do EIE.\n\nEsôfago em quebra-nozes (C): contrações peristálticas de amplitude muito alta (hoje \"esôfago hipercontrátil\"/jackhammer); o esofagograma geralmente é normal.\n\nDIME (D): termo para alterações manométricas leves e inespecíficas, sem o padrão radiológico característico.",
    "tip": "Saca-rolhas (contas de rosário) = espasmo esofagiano difuso. Bico de pássaro = acalasia.",
    "reference": "Yadlapati R et al. Esophageal motility disorders on high-resolution manometry: Chicago Classification version 4.0. Neurogastroenterol Motil, 2021.",
    "tags": [
      "espasmo esofagiano difuso",
      "distúrbios motores do esôfago",
      "disfagia",
      "esofagograma"
    ]
  },
  {
    "id": "famerp2025-72",
    "topography": "3.1",
    "module": "Cirurgia",
    "text": "Paciente feminina, 65 anos, com sintomas dispéptico inespecíficos, realizou uma EDA (endoscopia digestiva alta) que mostrou uma lesão submucosa em corpo gástrico de 2 cm.\n\nCom relação ao quadro exposto acima, assinale a alternativa correta:",
    "options": [
      "O melhor tratamento nestes casos é a gastrectomia subtotal com esvaziamento ganglionar a DII.",
      "A possibilidade de resseção deve ser considerada por provavelmente tratar-se de GIST (Tumor estromal gastrointestinal).",
      "Dentre as lesões submucosas gástrica, o leiomioma é o mais frequente e, para lesões de até 3 cm a conduta pode ser expectante.",
      "A realização de US (ultrassom) endoscópico não deve ser indicado pelas dimensões da lesão e pelo fato de não ser possível realizar biópsias de lesões submucosas gástricas."
    ],
    "correctAnswer": 1,
    "explanation": "A lesão subepitelial (submucosa) mais comum no estômago é o GIST (tumor estromal gastrointestinal), originado das células intersticiais de Cajal (marcadores c-KIT/CD117 e DOG1). Todo GIST tem algum potencial maligno, e lesões de 2 cm ou mais devem ser avaliadas com ecoendoscopia (com punção-biópsia guiada) e, em geral, ressecadas.\n\nA ressecção é com margem livre (ressecção em cunha ou gastrectomia parcial), sem linfadenectomia, porque o GIST raramente dá metástase linfonodal.",
    "commentary": "Gastrectomia subtotal com D2 (A): GIST não precisa de linfadenectomia; ressecção local com margens livres é suficiente.\n\nLeiomioma como mais frequente (C): no estômago o GIST é mais frequente; o leiomioma predomina no esôfago.\n\nEcoendoscopia não indicada (D): a ecoendoscopia é o exame de escolha para lesões subepiteliais, avalia a camada de origem e permite biópsia por punção guiada.",
    "tip": "Lesão subepitelial gástrica ≥ 2 cm = pensar em GIST → ecoendoscopia com punção e ressecção sem linfadenectomia.",
    "reference": "Casali PG et al. Gastrointestinal stromal tumours: ESMO–EURACAN–GENTURIS Clinical Practice Guidelines, 2022. NCCN Guidelines: Gastrointestinal Stromal Tumors, 2024.",
    "tags": [
      "GIST",
      "lesão subepitelial gástrica",
      "ecoendoscopia",
      "tumor estromal gastrointestinal"
    ]
  },
  {
    "id": "famerp2025-73",
    "topography": "1.5",
    "topic": "Hiperparatireoidismo",
    "module": "Cirurgia",
    "text": "Um homem de 38 anos de idade é submetido a litotripsia para cálculos renais de oxalato de cálcio. Os valores de exames laboratoriais encontrados no dia da litotripsia foram: cálcio sérico de 10,8 mg/dL (8,5-10,2 mg/dL), fósforo de 3 mg/dL (2,5-4,5 mg/dL), cloreto de 102 mEq/L (95-105 mEq/L), creatinina de 1,2 mg/dL (0,4-1,30 mg/dL) e paratormônio intacto de 62 pg/ml (10-65 pg/ml). A imagem pré-operatória foi imprecisa para localizar as paratireoides.\n\nQual das seguintes afirmações sobre a conduta do caso é verdadeira?",
    "options": [
      "A paratiroidectomia é indicada.",
      "É improvável que o hiperparatireoidismo primário contribua para a doença calculosa.",
      "A observação clínica é a melhor conduta.",
      "Recomenda-se restrição dietética de cálcio."
    ],
    "correctAnswer": 0,
    "explanation": "Cálcio sérico elevado (10,8) com PTH de 62 pg/mL: o PTH está dentro da faixa de referência, mas é inapropriadamente alto para quem está hipercalcêmico (deveria estar suprimido). Isso define hiperparatireoidismo primário.\n\nNefrolitíase é indicação formal de paratireoidectomia (assim como idade < 50 anos, também presente aqui). O diagnóstico é bioquímico: exames de localização (cintilografia com sestamibi, USG) servem para planejar a cirurgia, e a falha em localizar não contraindica a exploração cervical bilateral por cirurgião experiente.",
    "commentary": "HPP improvável como causa dos cálculos (B): o hiperparatireoidismo primário é causa clássica de nefrolitíase por hipercalciúria.\n\nObservação clínica (C): com nefrolitíase e idade < 50 anos, há indicação cirúrgica.\n\nRestrição dietética de cálcio (D): não é recomendada; pode piorar a doença óssea e aumentar a absorção de oxalato, favorecendo cálculos de oxalato de cálcio.",
    "tip": "Cálcio alto com PTH normal-alto = hiperparatireoidismo primário. Cálculo renal ou idade < 50 = operar. Imagem não faz diagnóstico.",
    "reference": "Bilezikian JP et al. Evaluation and Management of Primary Hyperparathyroidism: Summary Statement of the Fifth International Workshop. J Bone Miner Res, 2022. Wilhelm SM et al. AAES Guidelines for Definitive Management of Primary Hyperparathyroidism. JAMA Surg, 2016.",
    "tags": [
      "hiperparatireoidismo primário",
      "paratireoidectomia",
      "nefrolitíase",
      "hipercalcemia"
    ]
  },
  {
    "id": "famerp2025-74",
    "topography": "8",
    "module": "Cirurgia",
    "text": "Uma mulher de 59 anos com doença renal crônica fez uma tomografia computadorizada de tórax para acompanhar um nódulo pulmonar estável de 1cm. Os cortes inferiores demonstraram uma massa adrenal direita de 3 cm com atenuação sem contraste maior que 10 HU (unidades Hounsfield) e o washout menor que 60%. A investigação bioquímica adicional é consistente com o nódulo não funcionante.\n\nDiante desses achados, você deve recomendar:",
    "options": [
      "Biópsia percutânea.",
      "Ressonância magnética.",
      "Adrenalectomia direita.",
      "Repetir a tomografia computadorizada em 3 meses."
    ],
    "correctAnswer": 2,
    "explanation": "Incidentaloma adrenal de 3 cm, não funcionante, com densidade pré-contraste > 10 HU (pobre em lipídios, não é adenoma típico) e washout < 60% (adenomas costumam ter washout absoluto > 60%). Os dois critérios tornam a lesão indeterminada/suspeita, e o risco de carcinoma adrenocortical não pode ser excluído pela imagem.\n\nO gabarito considerou a adrenalectomia (preferencialmente laparoscópica) como conduta, para não atrasar o diagnóstico de uma lesão potencialmente maligna.",
    "commentary": "Biópsia percutânea (A): não diferencia adenoma de carcinoma adrenocortical, tem risco de complicações e disseminação, e só é indicada em suspeita de metástase com resultado que mude a conduta (após excluir feocromocitoma).\n\nRessonância (B): a RM com desvio químico detecta gordura intracitoplasmática, mas com HU > 10 e washout baixo não mudaria a necessidade de definição.\n\nRepetir TC em 3 meses (D): o seguimento com nova imagem em 6–12 meses é uma opção nas diretrizes para lesões indeterminadas < 4 cm, mas o gabarito preferiu a ressecção.",
    "alert": "Questão com nuance: para massa indeterminada < 4 cm, a diretriz europeia (ESE 2023) admite tanto cirurgia quanto nova imagem em 6–12 meses, discutida em equipe multidisciplinar. O gabarito oficial é C (adrenalectomia).",
    "tip": "Incidentaloma adrenal: < 10 HU = adenoma benigno. > 10 HU com washout < 60% = indeterminado → cirurgia ou reimagem curta; biópsia quase nunca.",
    "reference": "Fassnacht M et al. European Society of Endocrinology clinical practice guidelines on the management of adrenal incidentalomas, 2023. Eur J Endocrinol, 2023.",
    "tags": [
      "incidentaloma adrenal",
      "washout",
      "unidades Hounsfield",
      "adrenalectomia"
    ]
  },
  {
    "id": "famerp2025-75",
    "topography": "3.3",
    "topic": "Pancreatite biliar",
    "module": "Cirurgia",
    "text": "Mulher, 52 anos foi hospitalizada com quadro de pancreatite aguda e colelitíase com ducto biliar normal ao ultrassom. Ela não tem história clínica significativa, sem vício e apresenta testes de função hepática, painel bioquímico e níveis séricos de lipídios normais. Se recuperou dos sintomas após quatro dias de tratamento clinico com hidratação e analgesia.\n\nQual é o tratamento mais adequado para esta paciente?",
    "options": [
      "Tratamento conservador",
      "Colecistectomia aberta ou fechada",
      "Colangiopancreatografia endoscópica retrógrada",
      "Antibioticoterapia de largo espectro associada a litotripsia por ondas de choque"
    ],
    "correctAnswer": 1,
    "explanation": "Pancreatite aguda biliar leve (colelitíase, ducto biliar normal, sem outras causas, recuperação em 4 dias). Para evitar recorrência — que pode chegar a 30% em semanas —, a colecistectomia deve ser feita na MESMA internação, assim que o quadro se resolver, por via laparoscópica (ou aberta, se necessário).",
    "commentary": "Tratamento conservador (A): sem colecistectomia, o risco de nova pancreatite, colecistite e colangite é alto.\n\nCPRE (C): só indicada se houver colangite ou obstrução biliar persistente; o ducto é normal e as enzimas hepáticas normalizaram.\n\nAntibiótico e litotripsia (D): não há infecção, e a litotripsia não tem papel em cálculos da vesícula.",
    "tip": "Pancreatite biliar leve = colecistectomia na mesma internação.",
    "reference": "Tenner S et al. American College of Gastroenterology Guidelines: Management of Acute Pancreatitis. Am J Gastroenterol, 2024. IAP/APA evidence-based guidelines for the management of acute pancreatitis, 2013.",
    "tags": [
      "pancreatite biliar",
      "colecistectomia",
      "colelitíase",
      "pancreatite aguda"
    ]
  },
  {
    "id": "famerp2025-76",
    "topography": "3.3",
    "topic": "Pancreatite biliar",
    "module": "Cirurgia",
    "text": "Paciente do sexo feminino, 60 anos, com pancreatite aguda biliar Balthazar D, com início dos sintomas há 7 dias e com coledocolitíase anictérica.\n\nQual a conduta correta:",
    "options": [
      "Colecistectomia",
      "CPRE e em seguida colecistectomia",
      "Controle radiológico em 6 a 8 semanas",
      "Colecistectomia com colangiografia intra-operatória"
    ],
    "correctAnswer": 2,
    "explanation": "Pancreatite biliar com Balthazar D (inflamação com coleção peripancreática única) no 7º dia e coledocolitíase sem icterícia e sem colangite. A CPRE urgente só está indicada se houver colangite ou obstrução biliar persistente.\n\nNa pancreatite com coleções ou necrose, a colecistectomia é adiada até a resolução do processo inflamatório e a estabilização ou reabsorção das coleções, em geral 6 a 8 semanas, com controle por imagem antes da cirurgia. É esse o raciocínio do gabarito.",
    "commentary": "Colecistectomia já (A): no 7º dia, com coleção peripancreática, a cirurgia é mais difícil e tem maior risco de infectar as coleções.\n\nCPRE seguida de colecistectomia (B): sem colangite ou icterícia, a CPRE não é urgente; e a colecistectomia logo em seguida seria precoce para Balthazar D. Muitos serviços fariam CPRE eletiva para tratar o cálculo no colédoco antes da cirurgia tardia, o que torna a questão discutível.\n\nColecistectomia com colangiografia (D): é a técnica para coledocolitíase na colecistectomia, mas o momento (fase aguda) está errado.",
    "alert": "Questão com nuance: a coledocolitíase confirmada precisa ser tratada em algum momento (CPRE eletiva ou exploração cirúrgica). O gabarito oficial (C) prioriza adiar a intervenção pela coleção peripancreática.",
    "tip": "Pancreatite biliar com coleção/necrose: adiar a colecistectomia até as coleções resolverem (~6 semanas). CPRE urgente só com colangite.",
    "reference": "Working Group IAP/APA. IAP/APA evidence-based guidelines for the management of acute pancreatitis. Pancreatology, 2013. Tenner S et al. ACG Guidelines: Management of Acute Pancreatitis, 2024.",
    "tags": [
      "pancreatite biliar",
      "classificação de Balthazar",
      "coledocolitíase",
      "coleção peripancreática"
    ]
  },
  {
    "id": "famerp2025-77",
    "topography": "16",
    "module": "Cirurgia",
    "text": "Vítima de ferimento penetrante por projetil de arma de fogo em região cervical acima do ângulo da mandíbula mantendo estabilidade hemodinâmica, com hematoma local.\n\nCaso seja confirmada lesão vascular nessa região pela angiotomografia, a melhor opção de tratamento é:",
    "options": [
      "Endovascular",
      "Observação clínica",
      "Tamponamento com balão",
      "Exploração cirúrgica de urgência"
    ],
    "correctAnswer": 0,
    "explanation": "Ferimento por arma de fogo na zona III do pescoço (acima do ângulo da mandíbula), paciente estável. A zona III tem acesso cirúrgico muito difícil (base do crânio). Com o paciente estável e lesão vascular confirmada pela angiotomografia, o tratamento preferencial é endovascular (embolização ou stent), que evita a dissecção cirúrgica dessa região.\n\nPacientes instáveis ou com sinais \"duros\" (sangramento ativo, hematoma em expansão) seguem para controle imediato.",
    "commentary": "Observação clínica (B): lesão vascular confirmada exige tratamento.\n\nTamponamento com balão (C): é medida temporária para controle de sangramento ativo em lesões de difícil acesso, não tratamento definitivo no paciente estável.\n\nExploração cirúrgica de urgência (D): na zona III o acesso é muito difícil e mórbido; com estabilidade, a via endovascular é preferida.",
    "tip": "Pescoço: zona II = acesso cirúrgico fácil; zonas I e III estáveis = angiotomografia e tratamento endovascular.",
    "reference": "American College of Surgeons. ATLS — Advanced Trauma Life Support, 10ª ed. Sperry JL et al. Western Trauma Association critical decisions in trauma: penetrating neck trauma. J Trauma Acute Care Surg, 2013.",
    "tags": [
      "trauma cervical penetrante",
      "zona III do pescoço",
      "tratamento endovascular",
      "lesão vascular"
    ]
  },
  {
    "id": "famerp2025-78",
    "topography": "16",
    "topic": "Trauma torácico",
    "module": "Cirurgia",
    "text": "Vítima de ferimento por arma branca em transição toracoabdominal direita, instável hemodinamicamente, com drenagem de 2L de sangue em dreno de tórax direito, com FAST positivo em espaço hepato renal e pelve.\n\nA próxima melhor conduta é:",
    "options": [
      "Laparotomia exploradora",
      "Toracotomia exploradora",
      "Passagem de outro dreno de tórax ipsilateral",
      "Tomografia computadorizada de tórax e abdômen"
    ],
    "correctAnswer": 0,
    "explanation": "Facada na transição toracoabdominal direita, paciente instável, 2 L de sangue no dreno de tórax e FAST positivo no espaço hepatorrenal e na pelve. Há sangramento nas duas cavidades. O raciocínio do gabarito: na transição à direita, o órgão mais lesado é o fígado, e o sangue hepático pode atravessar a laceração diafragmática e sair pelo dreno, simulando hemotórax maciço. Com FAST positivo em dois espaços, a fonte principal do choque é provavelmente abdominal, e a laparotomia vem primeiro, permitindo controlar o fígado e reparar o diafragma.\n\nSe o débito do dreno continuar alto durante a laparotomia, associa-se a toracotomia.",
    "commentary": "Toracotomia (B): drenagem inicial > 1.500 mL é indicação clássica de toracotomia no trauma torácico isolado; aqui o FAST positivo em dois espaços sugere fonte abdominal. É uma alternativa defensável e a questão é discutível.\n\nSegundo dreno (C): não trata a causa do sangramento.\n\nTomografia (D): paciente instável não vai à tomografia.",
    "alert": "Gabarito discutível: hemotórax maciço (drenagem inicial > 1.500 mL) também é indicação formal de toracotomia, e não há consenso sobre qual cavidade abordar primeiro quando ambas sangram. O gabarito oficial é A (laparotomia).",
    "disputed": [
      1
    ],
    "tip": "Transição toracoabdominal direita instável com FAST positivo: o fígado sangra pelo diafragma para o dreno — abdome primeiro.",
    "reference": "American College of Surgeons. ATLS — Advanced Trauma Life Support, 10ª ed. Mattox KL, Moore EE, Feliciano DV. Trauma, 9ª ed.",
    "tags": [
      "ferimento toracoabdominal",
      "hemotórax maciço",
      "FAST",
      "laparotomia exploradora"
    ]
  },
  {
    "id": "famerp2025-79",
    "topography": "16",
    "topic": "Trauma abdominal",
    "module": "Cirurgia",
    "text": "Paciente com lesão esplênica traumática grau IV pela AAST (The American Association for the Surgery of Trauma) sem alteração vascular na tomografia de abdômen, mantendo estabilidade hemodinâmica, sem sinais de peritonite, tem como melhor próxima conduta:",
    "options": [
      "Videolaparoscopia",
      "Laparotomia exploradora",
      "Observação clínica em unidade de terapia intensiva",
      "Arteriografia com angioembolização profilática de artéria esplênica"
    ],
    "correctAnswer": 3,
    "explanation": "Lesão esplênica grau IV (AAST) em paciente hemodinamicamente estável e sem peritonite: tratamento não operatório. O grau de lesão define intervenções adicionais. Para lesões de alto grau (IV e V), diretrizes como as da WSES recomendam considerar a angioembolização da artéria esplênica mesmo sem extravasamento de contraste na tomografia, porque reduz a falha do tratamento não operatório. É a conduta escolhida pelo gabarito, junto com monitorização intensiva.",
    "commentary": "Videolaparoscopia (A): não é o manejo do trauma esplênico no paciente estável.\n\nLaparotomia (B): indicada para instabilidade não responsiva ou peritonite, ausentes aqui.\n\nObservação em UTI (C): faz parte do tratamento não operatório, mas para grau IV a observação isolada falha mais que quando associada à angioembolização.",
    "alert": "Questão com nuance: a embolização profilática de lesões grau IV sem blush é recomendada pela WSES, mas outras diretrizes (EAST) a reservam para blush, pseudoaneurisma ou queda de hemoglobina. O gabarito oficial é D.",
    "disputed": [
      2
    ],
    "tip": "Baço estável: tratamento não operatório. Graus IV–V ou blush/pseudoaneurisma: angioembolização.",
    "reference": "Coccolini F et al. Splenic trauma: WSES classification and guidelines for adult and pediatric patients. World J Emerg Surg, 2017. American College of Surgeons. ATLS, 10ª ed.",
    "tags": [
      "trauma esplênico",
      "tratamento não operatório",
      "angioembolização",
      "AAST"
    ]
  },
  {
    "id": "famerp2025-80",
    "topography": "16",
    "topic": "Trauma abdominal",
    "module": "Cirurgia",
    "text": "Um jovem, vítima de ferimento por arma branca em face anterior do abdômen chega à emergência com evisceração. Hemodinamicamente normal, é avaliado pelo cirurgião de trauma que indica cirurgia. Durante a laparotomia exploradora, assim que abre a cavidade peritoneal, se depara com sangramento intenso em região de jejuno e retroperitonial na zona II a direita. Há instabilização hemodinâmica e o anestesista indica reanimação volêmica com Ringer Lactato e ativa o Protocolo de Transfusão Maciça existente na Instituição. Após controle cirúrgico do sangramento ativo, o exame tromboelastrometria (ROTEM) indica a existência de retardo na formação da curva do coágulo.\n\nNeste caso, a melhor conduta seria:",
    "options": [
      "Cirurgia de Controle de Danos; Peritoniostomia; Ácido Tranexâmico",
      "Cirurgia de Controle de Danos; Peritoniostomia; Plasma Fresco Congelado",
      "Cirurgia de Controle de Danos; Fechamento Primário da Parede Abdominal; Plaquetas",
      "Cirurgia de Controle de Danos; Fechamento Primário da Parede Abdominal; Ácido Tranexâmico."
    ],
    "correctAnswer": 1,
    "explanation": "Paciente que se instabilizou na laparotomia, com transfusão maciça, lesões de jejuno e hematoma retroperitoneal em zona II: indicação de cirurgia de controle de danos (controle do sangramento e da contaminação, sem reconstrução definitiva), com o abdome deixado aberto (peritoniostomia/peritoneostomia, com curativo a vácuo), para evitar a síndrome compartimental abdominal e permitir a reabordagem após correção da tríade letal (hipotermia, acidose, coagulopatia) na UTI.\n\nNo ROTEM, o retardo na formação do coágulo (tempo de coagulação prolongado no EXTEM) reflete deficiência de fatores da coagulação, corrigida com plasma fresco congelado (ou concentrado de complexo protrombínico).",
    "commentary": "Controle de danos, peritoniostomia e ácido tranexâmico (A): o ácido tranexâmico trata hiperfibrinólise (lise aumentada do coágulo no ROTEM), não retardo na formação.\n\nFechamento primário e plaquetas (C): no controle de danos o abdome fica aberto; plaquetas tratam firmeza máxima do coágulo reduzida (MCF baixa), não o retardo de formação.\n\nFechamento primário e ácido tranexâmico (D): erra no fechamento e no hemoderivado.",
    "tip": "ROTEM: CT prolongado (formação lenta) = plasma; MCF baixa = plaquetas/fibrinogênio; lise aumentada = ácido tranexâmico.",
    "reference": "Spahn DR et al. The European guideline on management of major bleeding and coagulopathy following trauma, 6ª ed. Crit Care, 2023. American College of Surgeons. ATLS, 10ª ed.",
    "tags": [
      "controle de danos",
      "ROTEM",
      "transfusão maciça",
      "peritoniostomia"
    ]
  }
];
