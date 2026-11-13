import { Question } from '../types';

// SES-PE 2026 — residência médica da Secretaria de Saúde de Pernambuco. 100 questões, 5 alternativas.
// Gabarito conferido no gabarito comentado do AjudaMédico; explicações com texto próprio.
export const SESPE_2026_QUESTIONS: Question[] = [
  {
    "id": "sespe2026-1",
    "topography": "4.1",
    "topic": "Doença renal crônica",
    "module": "Clínica Médica",
    "text": "Homem de 62 anos, portador de doença renal crônica há seis anos, hipertensão e diabetes de longa data, em seguimento ambulatorial, relata há cerca de três meses piora progressiva da fadiga, intolerância aos esforços e palidez cutânea. Nega sangramentos, melena, hemoptise, hematúria e nunca recebeu transfusões. Usa losartana 50 mg duas vezes ao dia, sinvastatina 20 mg e metformina 850 mg. No exame físico, apresenta pressão arterial de 142×86 mmHg, frequência cardíaca de 82 bpm, ausculta cardiovascular sem sopros, pulmões limpos, ausência de edemas e mucosas hipocoradas, sem icterícia. Os exames mostram hemoglobina de 9,2 g/dL, hematócrito de 28%, VCM 88 fL, reticulócitos 0,6%, ferritina 200 ng/mL, ferro sérico 70 µg/dL, saturação de transferrina 24%, creatinina 2,8 mg/dL, ureia 88 mg/dL, TFG (KDIGO) de 28 mL/min/1,73m², potássio 4,9 mEq/L e níveis de vitamina B12 e ácido fólico dentro da normalidade.\n\nDiante desse cenário clínico e laboratorial, qual a conduta terapêutica inicial mais adequada?",
    "options": [
      "Transfundir concentrado de hemácias a cada duas semanas.",
      "Iniciar eritropoetina subcutânea associada a ferro (oral ou EV) conforme estoque.",
      "Repor apenas ferro (preferencialmente endovenoso) sem agente estimulador da eritropoiese.",
      "Tratar apenas se a hemoglobina for menor que 7 g/dL.",
      "Solicitar biópsia de medula óssea para excluir mielodisplasia."
    ],
    "correctAnswer": 1,
    "explanation": "Anemia normocítica e hipoproliferativa (reticulócitos baixos) em paciente com DRC estágio 4, sem sangramento, com B12 e folato normais e estoque de ferro adequado (ferritina 200, saturação 24%): anemia da doença renal crônica, por deficiência de eritropoetina.\n\nCom Hb abaixo de 10 g/dL e ferro repleto, o tratamento é agente estimulador da eritropoese (eritropoetina SC), mantendo ferro (oral ou EV) para sustentar a resposta. A meta de Hb fica em torno de 10–11,5 g/dL, sem passar de 13.",
    "commentary": "Transfusão periódica (A): reservada para anemia sintomática grave ou falha ao tratamento; transfusões repetidas sensibilizam o paciente e atrapalham um futuro transplante.\n\nSó ferro (C): o estoque já está adequado; o problema é falta de eritropoetina.\n\nTratar só abaixo de 7 g/dL (D): a anemia sintomática com Hb < 10 na DRC já tem indicação de tratamento.\n\nBiópsia de medula (E): a causa é clara; não há citopenias nem alterações que sugiram mielodisplasia.",
    "reference": "KDIGO 2012 — Anemia in CKD / SBN — Diretrizes de anemia na DRC",
    "tags": [
      "nefrologia",
      "doença renal crônica",
      "anemia",
      "eritropoetina"
    ],
    "tip": "Anemia da DRC: primeiro repor ferro; com ferro repleto e Hb < 10, eritropoetina."
  },
  {
    "id": "sespe2026-2",
    "topography": "9",
    "module": "Clínica Médica",
    "text": "A IARC, Agência Internacional para Pesquisa em Câncer, publicou em 2023 uma revisão sistemática identificando 13 tipos de neoplasias com associação causal comprovada com a obesidade. Esses resultados foram posteriormente reforçados por uma grande análise de coorte publicada na JAMA Oncology em 2025, que destacou o excesso de gordura corporal como o segundo fator de risco modificável mais relevante para o desenvolvimento de câncer no mundo, ficando atrás apenas do tabagismo.\n\nDiante dessas evidências, todas as neoplasias abaixo apresentam associação causal estabelecida com a obesidade, EXCETO",
    "options": [
      "Carcinoma hepatocelular.",
      "Carcinoma de endométrio.",
      "Adenocarcinoma de esôfago.",
      "Carcinoma colorretal",
      "Carcinoma de pulmão de células não pequenas."
    ],
    "correctAnswer": 4,
    "explanation": "A IARC reconhece associação causal entre excesso de gordura corporal e 13 tipos de câncer: adenocarcinoma de esôfago, cárdia gástrica, colorretal, fígado, vesícula biliar, pâncreas, rim, endométrio, ovário, mama pós-menopausa, tireoide, meningioma e mieloma múltiplo.\n\nO câncer de pulmão não está nessa lista; seu principal fator de risco é o tabagismo, e a obesidade não tem associação causal estabelecida (há até o chamado \"paradoxo da obesidade\" nos estudos observacionais).",
    "commentary": "Hepatocarcinoma (A): associado à obesidade via esteatose (MASLD) e esteato-hepatite.\n\nEndométrio (B): é o câncer mais fortemente ligado à obesidade, pelo excesso de estrogênio produzido no tecido adiposo.\n\nAdenocarcinoma de esôfago (C): a obesidade favorece refluxo e esôfago de Barrett, lesão precursora.\n\nColorretal (D): associação estabelecida com obesidade, resistência à insulina e inflamação crônica.",
    "reference": "IARC Handbooks of Cancer Prevention — Absence of excess body fatness (2016) / INCA — Obesidade e câncer",
    "tags": [
      "oncologia",
      "obesidade",
      "fatores de risco",
      "câncer de pulmão"
    ],
    "tip": "Obesidade causa 13 cânceres — pulmão não é um deles."
  },
  {
    "id": "sespe2026-3",
    "topography": "8",
    "topic": "Diabetes mellitus tipo 1 e 2",
    "module": "Clínica Médica",
    "text": "Mulher de 70 anos, diabética tipo 2, com infarto prévio há 2 anos, usa metformina 1000 mg/dia. Está assintomática, com HbA1c de 7,5%, TFG de 68 mL/min/1,73 m², LDL de 72 mg/dL, pressão bem controlada e IMC de 29 kg/m².\n\nSegundo as Diretrizes da SBD 2025, qual é a melhor estratégia para otimizar o controle metabólico e reduzir o risco cardiovascular?",
    "options": [
      "Aumentar metformina para 2000 mg/dia.",
      "Introduzir sulfonilureia.",
      "Associar insulina basal de ação prolongada.",
      "Adicionar inibidor de DPP-4.",
      "Adicionar agonista do receptor de GLP-1 com benefício cardiovascular comprovado."
    ],
    "correctAnswer": 4,
    "explanation": "Diabética tipo 2 com doença cardiovascular aterosclerótica estabelecida (IAM prévio) e HbA1c acima da meta. Pela SBD 2025, nesse perfil deve-se associar à metformina um fármaco com benefício cardiovascular comprovado — agonista do receptor de GLP-1 ou inibidor de SGLT2 —, independentemente da HbA1c. O GLP-1 também ajuda no peso (IMC 29).",
    "commentary": "Aumentar a metformina (A): melhora a glicemia, mas não traz a proteção cardiovascular adicional indicada para quem já teve infarto.\n\nSulfonilureia (B): risco de hipoglicemia e ganho de peso, sem benefício cardiovascular.\n\nInsulina basal (C): desnecessária com HbA1c de 7,5% e sem benefício cardiovascular.\n\nInibidor de DPP-4 (D): é neutro do ponto de vista cardiovascular.",
    "reference": "Diretriz da Sociedade Brasileira de Diabetes 2025 / ADA Standards of Care 2025",
    "tags": [
      "endocrinologia",
      "diabetes tipo 2",
      "agonistas de GLP-1",
      "risco cardiovascular"
    ],
    "tip": "DM2 com doença cardiovascular: GLP-1 ou SGLT2 com benefício comprovado, qualquer que seja a HbA1c."
  },
  {
    "id": "sespe2026-4",
    "topography": "3.2",
    "topic": "Ascite",
    "module": "Clínica Médica",
    "text": "Homem de 65 anos, natural de Limoeiro (PE), portador de cirrose hepática alcoólica há oito anos, chega ao hospital de referência em Recife com dispneia progressiva há 10 dias e dor torácica leve à direita, sem febre, tosse ou perda de peso. Relata aumento do volume abdominal e edema em membros inferiores. Encontra-se em bom estado geral, com mucosas descoradas e icterícia discreta. Ao exame, apresenta ascite moderada, edema bilateral de pernas (2+/4+) e redução do murmúrio vesicular na base direita, com macicez até o terço médio do hemitórax. A pressão arterial é 104×68 mmHg, frequência cardíaca 88 bpm e saturação de 93% em ar ambiente. A radiografia de tórax evidencia derrame pleural volumoso à direita, sem sinais de consolidação. A toracocentese mostra proteína pleural de 1,8 g/dL, DHL 120 U/L, relação proteína pleural/sérica de 0,3, relação DHL pleural/sérica de 0,4, glicose de 95 mg/dL, pH 7,45, citologia com poucas células mesoteliais sem predomínio celular e cultura negativa.\n\nCom base no quadro clínico e laboratorial, qual o diagnóstico mais provável?",
    "options": [
      "Derrame exsudativo por infecção.",
      "Derrame transudativo secundário à hipertensão portal.",
      "Derrame neoplásico.",
      "Quilotórax.",
      "Empiema pleural."
    ],
    "correctAnswer": 1,
    "explanation": "Cirrótico com ascite e derrame pleural volumoso à direita, sem febre ou consolidação. O líquido tem proteína baixa, relação proteína pleural/sérica 0,3 (< 0,5) e relação DHL 0,4 (< 0,6): pelos critérios de Light, é transudato. Em cirrótico, esse quadro é o hidrotórax hepático: a ascite passa para a pleura por pequenos defeitos no diafragma, mais à direita, pela pressão negativa do tórax.",
    "commentary": "Exsudato infeccioso (A): os critérios de Light mostram transudato, e a cultura é negativa.\n\nDerrame neoplásico (C): seria exsudato, geralmente com citologia oncótica positiva.\n\nQuilotórax (D): líquido leitoso com triglicerídeos > 110 mg/dL, não descrito.\n\nEmpiema (E): líquido purulento, com pH baixo, glicose baixa e DHL alta.",
    "reference": "Light RW — Pleural Diseases / AASLD 2021 — Ascites and hepatic hydrothorax guidance",
    "tags": [
      "hepatologia",
      "cirrose",
      "hidrotórax hepático",
      "derrame pleural",
      "critérios de Light"
    ],
    "tip": "Derrame pleural direito, transudato, em cirrótico com ascite: hidrotórax hepático."
  },
  {
    "id": "sespe2026-5",
    "topography": "13",
    "module": "Clínica Médica",
    "text": "Homem de 35 anos, portador de lúpus eritematoso sistêmico com artrite e nefrite classe III, iniciou prednisona 1 mg/kg/dia há 10 dias por surto moderado. A partir do sétimo dia, familiares notaram insônia, fala acelerada e euforia, que evoluíram para irritabilidade, alucinações auditivas e comportamento desorganizado nas últimas 48 horas. No exame, está agitado, desatento e taquicárdico (FC 110 bpm), sem febre, rigidez de nuca ou déficits focais. Os exames mostram ureia 36 mg/dL, creatinina 0,9 mg/dL, sódio 140 mEq/L, glicemia 95 mg/dL, TSH normal e função hepática preservada. A ressonância é normal, o líquor apresenta 2 células/mm³, proteína 28 mg/dL, glicose 65 mg/dL e PCR-HSV negativo. Anti-DNA em queda e C3/C4 em recuperação, afastando neuro-LES ativo.\n\nQual é a conduta mais apropriada?",
    "options": [
      "Aumentar prednisona para 1,5 mg/kg/dia.",
      "Reduzir gradualmente o corticoide e introduzir antipsicótico atípico.",
      "Iniciar ciclofosfamida em pulso por neuro-LES.",
      "Anifrolumabe imediato.",
      "Trocar para metilprednisolona em dose de choque (1 g/d × 3)."
    ],
    "correctAnswer": 1,
    "explanation": "Paciente com lúpus que iniciou prednisona em dose alta e, após cerca de uma semana, desenvolveu euforia, insônia, fala acelerada e depois sintomas psicóticos. A investigação excluiu neurolúpus ativo (sorologia em melhora, ressonância e líquor normais), infecção e distúrbios metabólicos: é psicose induzida por corticoide, que costuma aparecer nas primeiras semanas e é dose-dependente (mais comum acima de 40 mg/dia).\n\nA conduta é reduzir o corticoide gradualmente, na menor dose que controle o lúpus, e tratar os sintomas com antipsicótico atípico.",
    "commentary": "Aumentar a prednisona (A): pioraria a psicose, que é causada pelo próprio corticoide.\n\nCiclofosfamida (C) e pulsoterapia (E): seriam para neurolúpus grave, que foi afastado.\n\nAnifrolumabe (D): biológico para lúpus ativo cutâneo e articular; não trata psicose medicamentosa.",
    "reference": "EULAR 2023 — Recommendations for the management of SLE / Harrison — Medicina Interna",
    "tags": [
      "reumatologia",
      "lúpus eritematoso sistêmico",
      "psicose induzida por corticoide",
      "efeitos adversos"
    ],
    "tip": "Psicose na 1ª–2ª semana de corticoide em dose alta, com lúpus em melhora: culpa do corticoide."
  },
  {
    "id": "sespe2026-6",
    "topography": "7.1",
    "topic": "Trombose venosa profunda",
    "module": "Clínica Médica",
    "text": "Homem de 38 anos, previamente hígido, apresenta trombose venosa profunda proximal em membro inferior direito após longa viagem aérea. Não faz uso de hormônios ou anabolizantes. A investigação laboratorial, realizada no momento adequado e sem interferência da anticoagulação ou do evento agudo, mostrou Fator V Leiden heterozigoto positivo, com proteína C, proteína S e antitrombina normais.\n\nQual é a conduta mais adequada?",
    "options": [
      "Anticoagulação por 2 meses e suspensão definitiva.",
      "Anticoagulação indefinida e rastreamento genético familiar obrigatório.",
      "Anticoagulação por 3 a 6 meses e orientação preventiva em situações de risco.",
      "Uso de antiagregantes plaquetários crônicos.",
      "Evitar exercícios físicos e desidratação, sem anticoagulação."
    ],
    "correctAnswer": 2,
    "explanation": "TVP proximal desencadeada por um fator transitório (viagem aérea longa) em homem com fator V de Leiden heterozigoto, a trombofilia hereditária mais comum e de baixo risco.\n\nTVP provocada por fator transitório recebe anticoagulação por 3 a 6 meses (mínimo de 3 meses), mesmo com a trombofilia leve. Orienta-se profilaxia em situações de risco futuras (viagens longas, cirurgia, imobilização). Anticoagulação indefinida fica para eventos não provocados recorrentes ou trombofilias de alto risco (homozigose, deficiência de antitrombina, síndrome antifosfolípide).",
    "commentary": "2 meses (A): menos que o tempo mínimo de 3 meses para TVP proximal.\n\nIndefinida com rastreio familiar obrigatório (B): heterozigose do fator V de Leiden com evento provocado não justifica anticoagulação indefinida, e o rastreio familiar não é obrigatório.\n\nAntiagregantes (D): não substituem a anticoagulação no tratamento da TVP.\n\nSem anticoagulação (E): TVP proximal sempre deve ser anticoagulada.",
    "reference": "ACCP/CHEST 2021 — Antithrombotic therapy for VTE / ASH 2023 — Thrombophilia testing",
    "tags": [
      "hematologia",
      "trombose venosa profunda",
      "fator V de Leiden",
      "anticoagulação"
    ],
    "tip": "TVP provocada por fator transitório: 3 meses de anticoagulação, mesmo com fator V de Leiden heterozigoto."
  },
  {
    "id": "sespe2026-7",
    "topography": "1.5",
    "topic": "Hiperparatireoidismo",
    "module": "Clínica Médica",
    "text": "Mulher de 52 anos apresenta nefrolitíase recorrente há três anos, além de fadiga crônica, dor óssea difusa e constipação ocasional. Os exames mostram cálcio sérico de 11,6 mg/dL, PTH de 125 pg/mL, fósforo de 2,2 mg/dL, vitamina D de 35 ng/mL e função renal normal. Não utiliza suplementos e não houve imobilização prolongada.\n\nQual é o diagnóstico e o tratamento mais indicado?",
    "options": [
      "Hipercalcemia maligna; iniciar hidratação EV.",
      "Hiperparatireoidismo secundário; iniciar vitamina D.",
      "Hiperparatireoidismo primário; indicar paratireoidectomia.",
      "Hipercalcemia por imobilização; orientar deambulação precoce.",
      "Hipercalcemia por vitamina D; suspender suplementos."
    ],
    "correctAnswer": 2,
    "explanation": "Hipercalcemia com PTH elevado (inapropriado para o cálcio alto) e fósforo baixo, com vitamina D e função renal normais: hiperparatireoidismo primário, em geral por adenoma de paratireoide.\n\nA paciente é sintomática (nefrolitíase recorrente, dor óssea), o que já indica paratireoidectomia, que é o tratamento curativo.",
    "commentary": "Hipercalcemia maligna (A): teria PTH suprimido (mediada por PTHrP ou metástases ósseas).\n\nHiperparatireoidismo secundário (B): cursa com cálcio normal ou baixo, geralmente por DRC ou falta de vitamina D.\n\nImobilização (D) e intoxicação por vitamina D (E): ambas suprimem o PTH, e a paciente não está imobilizada nem usa suplementos.",
    "reference": "Fifth International Workshop on Primary Hyperparathyroidism (2022) / SBEM",
    "tags": [
      "endocrinologia",
      "hiperparatireoidismo primário",
      "hipercalcemia",
      "nefrolitíase"
    ],
    "tip": "Cálcio alto + PTH alto = hiperparatireoidismo primário. Sintomático = cirurgia."
  },
  {
    "id": "sespe2026-8",
    "topography": "1.5",
    "topic": "Hipotireoidismo",
    "module": "Clínica Médica",
    "text": "Mulher de 45 anos procura atendimento por fadiga progressiva, ganho de peso não explicado e constipação há seis meses. Relata pele mais ressecada, intolerância ao frio e sonolência excessiva. Menciona que a mãe teve “problema na tireoide” e usou hormônio por muitos anos. O exame mostra discreta lentificação psicomotora e pele fria. Os exames revelam TSH 12 mUI/L, T4 livre 0,6 ng/dL e anticorpo anti-TPO positivo.\n\nQual é o diagnóstico e a conduta mais adequada?",
    "options": [
      "Hipotireoidismo subclínico; apenas observar.",
      "Tireoidite de Hashimoto; iniciar levotiroxina.",
      "Síndrome do eutiroideo doente; iniciar levotiroxina.",
      "Tireotoxicose induzida por amiodarona; suspender a droga.",
      "Doença de Graves; iniciar antitireoidiano."
    ],
    "correctAnswer": 1,
    "explanation": "TSH elevado (12) com T4 livre baixo e sintomas clássicos (fadiga, ganho de peso, frio, pele seca, constipação, lentificação) caracteriza hipotireoidismo primário franco. O anti-TPO positivo e a história familiar apontam a tireoidite de Hashimoto, a causa mais comum em áreas com iodo suficiente. O tratamento é levotiroxina.",
    "commentary": "Hipotireoidismo subclínico (A): exigiria T4 livre normal; aqui está baixo.\n\nEutireoidiano doente (C): ocorre em doença grave aguda, com T3 baixo e TSH normal ou baixo; não se trata com levotiroxina.\n\nTireotoxicose por amiodarona (D): seria hipertireoidismo e não há uso da droga.\n\nGraves (E): causa hipertireoidismo, com TSH suprimido.",
    "reference": "SBEM — Consenso brasileiro para abordagem do hipotireoidismo / ATA 2014",
    "tags": [
      "endocrinologia",
      "hipotireoidismo",
      "tireoidite de Hashimoto",
      "levotiroxina"
    ],
    "tip": "TSH alto + T4 livre baixo + anti-TPO positivo = Hashimoto → levotiroxina."
  },
  {
    "id": "sespe2026-9",
    "topography": "6.1",
    "topic": "Gota",
    "module": "Clínica Médica",
    "text": "Homem de 67 anos, natural de Garanhuns (PE) e portador de doença renal crônica estágio 3, procura atendimento devido à dor súbita, intensa e inchaço no hálux direito, iniciados há 24 horas. O quadro começou durante a madrugada, após um jantar com carne vermelha, frutos do mar e consumo de cerveja artesanal. Relata que a dor piora até com o toque do lençol. No exame físico, a articulação metatarsofalangeana direita encontra-se quente, eritematosa, edemaciada e com limitação funcional marcada. Exames laboratoriais mostram ácido úrico 9,8 mg/dL, creatinina 1,9 mg/dL, VHS 35 mm/h e PCR 12 mg/L.\n\nQual o diagnóstico mais provável?",
    "options": [
      "Artrite séptica.",
      "Gota.",
      "Artrite psoriásica.",
      "Condrocalcinose.",
      "Artrite reativa."
    ],
    "correctAnswer": 1,
    "explanation": "Monoartrite aguda da primeira metatarsofalangeana (podagra), de início noturno, dor intensa ao toque do lençol, após ingestão de carne vermelha, frutos do mar e cerveja, em homem com DRC e ácido úrico elevado: crise de gota. O diagnóstico definitivo é feito pela pesquisa de cristais de urato monossódico (agulha, birrefringência negativa) no líquido sinovial.",
    "commentary": "Artrite séptica (A): diagnóstico diferencial obrigatório em monoartrite, mas o gatilho alimentar, a podagra e a hiperuricemia favorecem gota.\n\nArtrite psoriásica (C): costuma acometer interfalangeanas distais, dactilite, com psoríase cutânea.\n\nCondrocalcinose (D): a pseudogota afeta mais joelhos e punhos de idosos.\n\nArtrite reativa (E): oligoartrite de grandes articulações de membros inferiores após infecção intestinal ou urogenital.",
    "reference": "SBR — Recomendações para o diagnóstico e tratamento da gota (2022) / ACR/EULAR 2015 — Critérios de classificação",
    "tags": [
      "reumatologia",
      "gota",
      "podagra",
      "hiperuricemia"
    ],
    "tip": "Podagra após churrasco e cerveja: gota."
  },
  {
    "id": "sespe2026-10",
    "topography": "2.2",
    "topic": "Hipertensão arterial sistêmica",
    "module": "Clínica Médica",
    "text": "De acordo com a Diretriz Brasileira de Hipertensão Arterial 2025, elaborada pela Sociedade Brasileira de Cardiologia, Sociedade Brasileira de Hipertensão e Sociedade Brasileira de Nefrologia, assinale a alternativa INCORRETA.",
    "options": [
      "As medidas não farmacológicas incluem redução do consumo de sal, perda de peso, prática regular de atividade física e moderação no uso de álcool.",
      "O escore PREVENT é recomendado para estimar o risco de eventos cardiovasculares em 10 anos.",
      "A presença de doença renal crônica, diabetes ou lesão de órgão-alvo define alto risco cardiovascular.",
      "A diretriz sugere considerar biomarcadores como escore de cálcio coronariano, BNP, troponina ultrassensível e lipoproteína(a) em situações selecionadas.",
      "A Diretriz Brasileira de Hipertensão Arterial 2025 não recomenda estratificação de risco na pré-hipertensão, apenas na hipertensão estabelecida."
    ],
    "correctAnswer": 4,
    "explanation": "A pergunta pede a INCORRETA. A Diretriz Brasileira de Hipertensão 2025 recomenda estratificar o risco cardiovascular também na pré-hipertensão (PA 130–139/85–89 mmHg), inclusive para decidir quando iniciar tratamento medicamentoso nesse grupo. Afirmar que a estratificação só se aplica à hipertensão estabelecida está errado.",
    "commentary": "Medidas não farmacológicas (A): correto; sal, peso, atividade física e álcool são a base.\n\nEscore PREVENT (B): correto; a diretriz de 2025 adotou o PREVENT para risco em 10 anos.\n\nDRC, diabetes ou lesão de órgão-alvo (C): correto; definem alto risco.\n\nBiomarcadores (D): correto; CAC, BNP, troponina e Lp(a) podem refinar a estratificação em casos selecionados.",
    "reference": "SBC/SBH/SBN — Diretriz Brasileira de Hipertensão Arterial 2025",
    "tags": [
      "cardiologia",
      "hipertensão arterial",
      "estratificação de risco",
      "pré-hipertensão"
    ],
    "tip": "Diretriz de HAS 2025: estratifica risco já na pré-hipertensão, com escore PREVENT."
  },
  {
    "id": "sespe2026-11",
    "topography": "2.2",
    "topic": "Dislipidemia",
    "module": "Clínica Médica",
    "text": "Com base na Diretriz Brasileira de Dislipidemias e Prevenção da Aterosclerose – 2025, assinale a alternativa INCORRETA.",
    "options": [
      "As metas de LDL-colesterol foram redefinidas, sendo <55 mg/dL para pacientes de risco extremo, conforme recomendação principal da diretriz.",
      "A Lp(a) deve ser medida ao menos uma vez na vida para estratificação de risco.",
      "A ApoB é recomendada como marcador adicional em situações de hipertrigliceridemia.",
      "A diretriz recomenda o uso de ensaio independente da isoforma para dosagem de Lp(a).",
      "O colesterol não-HDL mantém importância na avaliação residual de risco."
    ],
    "correctAnswer": 0,
    "explanation": "A pergunta pede a INCORRETA. Na Diretriz Brasileira de Dislipidemias 2025, as metas de LDL são: risco baixo < 115, intermediário < 100, alto < 70, muito alto < 50 e extremo < 40 mg/dL. A meta de < 55 mg/dL para risco extremo está errada — ela corresponde à diretriz europeia (risco muito alto).",
    "commentary": "Lp(a) ao menos uma vez na vida (B): correto; é recomendada para todos os adultos.\n\nApoB na hipertrigliceridemia (C): correto; reflete melhor o número de partículas aterogênicas quando os triglicerídeos estão altos.\n\nEnsaio independente da isoforma para Lp(a) (D): correto; evita erro de medida pelo tamanho da apo(a).\n\nColesterol não HDL (E): correto; continua sendo meta secundária e marcador de risco residual.",
    "reference": "SBC — Diretriz Brasileira de Dislipidemias e Prevenção da Aterosclerose 2025",
    "tags": [
      "cardiologia",
      "dislipidemia",
      "metas de LDL",
      "lipoproteína(a)"
    ],
    "tip": "Metas de LDL 2025 (Brasil): alto < 70, muito alto < 50, extremo < 40."
  },
  {
    "id": "sespe2026-12",
    "topography": "2.1",
    "topic": "Embolia pulmonar",
    "module": "Clínica Médica",
    "text": "Homem de 70 anos, com hemorragia digestiva alta por úlcera duodenal, tratada endoscopicamente há 10 dias, e hemoglobina atualmente estável, desenvolve início súbito de dispneia intensa, dor torácica pleurítica e taquicardia. A angiotomografia de tórax revela trombo extenso na artéria pulmonar principal direita, compatível com tromboembolismo pulmonar maciço, porém sem hipotensão ou sinais de choque.\n\nQual é a melhor conduta inicial?",
    "options": [
      "Iniciar varfarina oral com controle rigoroso de INR.",
      "Instalar filtro de veia cava inferior temporário.",
      "Indicar trombólise venosa imediata.",
      "Prescrever heparina de baixo peso molecular em dose reduzida.",
      "Apenas observar e reavaliar em 48 horas."
    ],
    "correctAnswer": 3,
    "explanation": "TEP extenso sem hipotensão (risco intermediário) em paciente com hemorragia digestiva tratada há 10 dias, hemodinamicamente estável e com Hb estável. A trombólise está contraindicada pelo sangramento recente e não é indicada sem choque.\n\nO gabarito oficial considera correta a anticoagulação com heparina de baixo peso molecular em dose reduzida, pensando em equilibrar o risco de novo sangramento. Na prática, as diretrizes indicam anticoagulação em dose plena logo que o sangramento esteja controlado; muitos serviços preferem heparina não fracionada (meia-vida curta e reversível com protamina) nessa situação, e o filtro de veia cava fica para contraindicação absoluta à anticoagulação.",
    "commentary": "Varfarina isolada (A): não se inicia varfarina sem heparina, e ela demora dias para agir.\n\nFiltro de veia cava (B): indicado só quando a anticoagulação está contraindicada; aqui a úlcera já foi tratada e a Hb está estável.\n\nTrombólise (C): contraindicada pelo sangramento digestivo recente e não indicada em TEP sem instabilidade.\n\nApenas observar (E): TEP extenso precisa ser tratado.\n\nAtenção: a \"dose reduzida\" de HBPM não é padrão nas diretrizes; o esperado seria anticoagulação plena, de preferência com droga de curta duração e reversível.",
    "reference": "ESC 2019 — Acute pulmonary embolism / ACCP/CHEST 2021",
    "tags": [
      "pneumologia",
      "tromboembolismo pulmonar",
      "anticoagulação",
      "sangramento digestivo"
    ],
    "tip": "TEP com sangramento recente controlado: anticoagula (com cuidado); trombólise está contraindicada."
  },
  {
    "id": "sespe2026-13",
    "topography": "4.1",
    "topic": "Lesão renal aguda",
    "module": "Clínica Médica",
    "text": "Homem de 38 anos é admitido no pronto-socorro após convulsão tônico-clônica generalizada que durou cerca de 15 minutos, evoluindo com confusão mental e dor muscular intensa. Nas horas seguintes, passa a apresentar urina escura e redução importante do volume urinário. Os exames revelam creatinina de 2,3 mg/dL, potássio 6,0 mEq/L, cálcio 7,5 mg/dL e CPK de 15.000 U/L. O débito urinário nas últimas seis horas é de 0,2 mL/kg/h.\n\nQual é a conduta inicial mais adequada?",
    "options": [
      "Administrar furosemida em bolus para aumentar a diurese.",
      "Iniciar hidratação vigorosa com solução salina isotônica para manter diurese acima de 200 mL/h.",
      "Restringir líquidos para evitar sobrecarga volêmica.",
      "Prescrever manitol para prevenção de necrose tubular.",
      "Iniciar bicarbonato de sódio oral para alcalinizar a urina."
    ],
    "correctAnswer": 1,
    "explanation": "Após crise convulsiva prolongada, o paciente tem dor muscular, urina escura, CPK de 15.000 U/L, lesão renal aguda, hipercalemia e hipocalcemia: rabdomiólise com mioglobinúria. A medida mais importante é a hidratação vigorosa com cristaloide isotônico, para manter débito urinário alto (cerca de 200–300 mL/h), diluindo a mioglobina e evitando a necrose tubular.",
    "commentary": "Furosemida (A): não previne a lesão e pode piorar a hipovolemia; só seria usada se houver hipervolemia.\n\nRestringir líquidos (C): agrava a lesão renal pela mioglobina.\n\nManitol (D): sem benefício comprovado e com riscos; não é rotina.\n\nBicarbonato oral (E): a alcalinização urinária não tem benefício comprovado, e por via oral seria ineficaz.",
    "reference": "Bosch X et al. — Rhabdomyolysis and acute kidney injury (NEJM 2009) / KDIGO — AKI",
    "tags": [
      "nefrologia",
      "rabdomiólise",
      "lesão renal aguda",
      "hidratação"
    ],
    "tip": "Rabdomiólise: soro, soro e soro — diurese em torno de 200 mL/h."
  },
  {
    "id": "sespe2026-14",
    "topography": "12",
    "topic": "Delirium",
    "module": "Clínica Médica",
    "text": "Mulher de 84 anos, hipertensa e com osteoartrite, é internada por infecção urinária febril associada à desidratação leve. Após melhora clínica e suspensão do antibiótico endovenoso, a equipe passa a notar apatia crescente, lentificação psicomotora, fala monótona, sonolência durante o dia e episódios de desatenção que alternam com períodos de relativa lucidez. A paciente nega alucinações, não apresenta agitação, e o exame neurológico revela força preservada e reflexos normais. A avaliação pelo Confusion Assessment Method mostra início agudo, curso flutuante e desatenção marcante.\n\nQual o diagnóstico mais provável?",
    "options": [
      "Demência de Alzheimer em fase inicial.",
      "Transtorno cognitivo leve.",
      "Episódio depressivo maior com características melancólicas.",
      "Transtorno de ajustamento ao ambiente hospitalar.",
      "Delirium hipoativo secundário à condição médica aguda."
    ],
    "correctAnswer": 4,
    "explanation": "Idosa internada por infecção, com início agudo, curso flutuante e desatenção (CAM positivo), apresentando apatia, sonolência e lentificação, sem agitação: delirium na forma hipoativa, a mais comum em idosos e a mais subdiagnosticada, pois é confundida com depressão ou cansaço. A causa é a condição médica aguda (infecção, desidratação, internação).",
    "commentary": "Alzheimer inicial (A): instalação lenta, ao longo de meses a anos, sem flutuação aguda da atenção.\n\nTranstorno cognitivo leve (B): déficit cognitivo discreto e estável, sem alteração aguda da consciência.\n\nDepressão melancólica (C): pode dar apatia, mas não flutuação da atenção nem início agudo com a doença.\n\nTranstorno de ajustamento (D): reação emocional a estressor, sem desatenção flutuante.",
    "reference": "Inouye — Confusion Assessment Method / SBGG — Delirium",
    "tags": [
      "geriatria",
      "delirium hipoativo",
      "CAM",
      "idoso internado"
    ],
    "tip": "Idoso apático e sonolento, com desatenção flutuante após infecção: delirium hipoativo."
  },
  {
    "id": "sespe2026-15",
    "topography": "14",
    "topic": "Sepse e choque séptico",
    "module": "Clínica Médica",
    "text": "Homem de 74 anos, diabético e hipertenso, chega após 48 horas de febre alta, calafrios, prostração intensa e redução acentuada da diurese, após dois dias de mal-estar progressivo em casa. Na admissão: PA 82/48 mmHg mesmo após 1,5 L de cristaloide, FC 128 bpm, lactato 6,1 mmol/L, diurese 0,3 mL/kg/h, creatinina 2,1 mg/dL (prévia 1,0). Temperatura 38,9 C, extremidades frias, SatO₂ 90% em 4 L/min. Hemoculturas já colhidas, e urina turva sugere foco urinário.\n\nQual é o próximo passo imediato?",
    "options": [
      "Administrar somente mais volume até normalização da pressão.",
      "Iniciar norepinefrina imediatamente para atingir PAM ≥ 65 mmHg e estabilizar perfusão.",
      "Começar dopamina pela menor taxa de arritmia.",
      "Aguardar antibioticoterapia antes de vasopressor.",
      "Transferir para enfermaria após estabilização inicial."
    ],
    "correctAnswer": 1,
    "explanation": "Choque séptico de foco urinário: hipotensão mantida após volume, lactato 6,1 mmol/L, oligúria e lesão renal aguda. Com PAM baixa após reposição inicial, inicia-se noradrenalina imediatamente (pode ser por acesso periférico no começo), com alvo de PAM ≥ 65 mmHg, junto com o antibiótico na primeira hora.",
    "commentary": "Só mais volume (A): manter fluidos até normalizar a PA leva a sobrecarga; o vasopressor não deve esperar.\n\nDopamina (C): causa mais arritmias que a noradrenalina e está associada a maior mortalidade.\n\nEsperar o antibiótico para o vasopressor (D): as duas medidas são simultâneas.\n\nEnfermaria (E): choque séptico exige UTI.",
    "reference": "Surviving Sepsis Campaign 2021 / ILAS — Protocolo de sepse",
    "tags": [
      "sepse",
      "choque séptico",
      "noradrenalina",
      "terapia intensiva"
    ],
    "tip": "Choque séptico: noradrenalina é a primeira escolha, PAM ≥ 65."
  },
  {
    "id": "sespe2026-16",
    "topography": "2.1",
    "topic": "DPOC",
    "module": "Clínica Médica",
    "text": "Mulher de 71 anos, portadora de DPOC muito avançado e hiperinsuflação dinâmica conhecida, está intubada por acidose hipercápnica aguda. No ventilador: auto-PEEP estimada em 8 cmH₂O, frequência respiratória 24 irpm, volume corrente 6 mL/kg, PEEP 5 cmH₂O, pressão de platô 22 cmH₂O e fluxo expiratório desacelerado, com evidente encurtamento do tempo expiratório. Observa-se assincronia com esforços ineficazes e queda transitória da pressão arterial durante a inspiração, sugerindo aprisionamento aéreo significativo.\n\nQual é a intervenção inicial mais apropriada?",
    "options": [
      "Aumentar o volume corrente para melhorar recrutamento de áreas colapsadas.",
      "Elevar a PEEP até igualar totalmente a auto-PEEP medida.",
      "Reduzir a frequência respiratória para prolongar o tempo expiratório e diminuir o aprisionamento aéreo.",
      "Aumentar a fração inspirada de oxigênio para reduzir hipercapnia.",
      "Realizar manobra de recrutamento alveolar com pressões elevadas."
    ],
    "correctAnswer": 2,
    "explanation": "DPOC intubada com hiperinsuflação dinâmica: auto-PEEP, esforços ineficazes e queda da PA na inspiração (aprisionamento de ar reduzindo o retorno venoso). O problema é falta de tempo expiratório. A primeira medida é reduzir a frequência respiratória (e o volume-minuto), aumentar o fluxo inspiratório e encurtar a inspiração, para prolongar a expiração. Aceita-se hipercapnia permissiva.",
    "commentary": "Aumentar o volume corrente (A): aumenta o volume aprisionado e a auto-PEEP.\n\nPEEP igual à auto-PEEP (B): a PEEP externa pode ajudar a disparar o ventilador, mas deve ficar em cerca de 80% da auto-PEEP; igualá-la totalmente pode piorar a hiperinsuflação. Não é a medida inicial principal.\n\nAumentar a FiO₂ (D): não corrige hipercapnia nem aprisionamento.\n\nManobra de recrutamento (E): contraindicada na hiperinsuflação; piora a hemodinâmica e o risco de barotrauma.",
    "reference": "GOLD 2025 / Diretrizes Brasileiras de Ventilação Mecânica (AMIB/SBPT)",
    "tags": [
      "terapia intensiva",
      "DPOC",
      "ventilação mecânica",
      "auto-PEEP",
      "hiperinsuflação dinâmica"
    ],
    "tip": "Auto-PEEP: dê tempo para expirar — reduza a frequência respiratória."
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
    "id": "sespe2026-18",
    "topography": "1.1",
    "topic": "AVC",
    "module": "Clínica Médica",
    "text": "Mulher de 48 anos, previamente hígida, apresenta cefaleia explosiva súbita enquanto caminhava, seguida de vômitos e sonolência progressiva durante o transporte. Na admissão: Glasgow 9, pupilas isocóricas e fotorreativas, PA 168/98 mmHg, FC 90 bpm, rigidez de nuca e bradipneia ocasional. História sem trauma ou uso de anticoagulantes. Glicemia 118 mg/dL. Há forte suspeita de hipertensão intracraniana aguda.\n\nQual é a conduta inicial mais apropriada?",
    "options": [
      "Realizar punção lombar imediatamente.",
      "Solicitar tomografia de crânio antes de qualquer punção lombar.",
      "Administrar benzodiazepínico e aguardar.",
      "Reduzir PA rapidamente com vasodilatador IV.",
      "Hiperventilar de forma contínua e prolongada."
    ],
    "correctAnswer": 1,
    "explanation": "Cefaleia súbita e explosiva (\"a pior da vida\"), vômitos, rigidez de nuca e rebaixamento da consciência: hemorragia subaracnóidea até prova em contrário. Com suspeita de hipertensão intracraniana e Glasgow 9, o primeiro exame é a tomografia de crânio sem contraste (sensibilidade próxima de 100% nas primeiras 6 horas). A punção lombar só é feita depois, se a TC for normal e não houver contraindicação.",
    "commentary": "Punção lombar imediata (A): com hipertensão intracraniana e rebaixamento, há risco de herniação; a TC vem antes.\n\nBenzodiazepínico (C): não há crise convulsiva; sedação mascara a avaliação neurológica.\n\nReduzir a PA rapidamente (D): na HSA controla-se a PA com cuidado (PAS < 160), sem quedas bruscas que reduzam a perfusão cerebral.\n\nHiperventilação prolongada (E): causa vasoconstrição e isquemia; serve só como ponte breve em herniação.",
    "reference": "AHA/ASA 2023 — Guideline for aneurysmal subarachnoid hemorrhage / Academia Brasileira de Neurologia",
    "tags": [
      "neurologia",
      "hemorragia subaracnóidea",
      "cefaleia súbita",
      "tomografia de crânio"
    ],
    "tip": "Cefaleia em trovoada: TC de crânio sem contraste primeiro; punção só se a TC for normal."
  },
  {
    "id": "sespe2026-19",
    "topography": "4.1",
    "topic": "Distúrbios hidroeletrolíticos",
    "module": "Clínica Médica",
    "text": "Homem de 72 anos, internado por sepse urinária, evolui nas últimas 12 horas com oligúria marcada, fraqueza muscular progressiva e episódios de palpitação. Exames laboratoriais mostram potássio 7,3 mEq/L, creatinina 3,8 mg/dL (prévia 1,2), bicarbonato 16 mEq/L e pH 7,25. ECG revela ondas T apiculadas, QRS alargado e redução de amplitude complexa. Pressão arterial 94/58 mmHg com baixo suporte vasopressor. Perfusão periférica diminuída.\n\nQual é a conduta imediata?",
    "options": [
      "Administrar apenas resina de troca iônica.",
      "Aguardar nova gasometria para confirmar a gravidade.",
      "Gluconato de cálcio IV + insulina com glicose + considerar terapia renal substitutiva.",
      "Furosemida em altas doses como primeira escolha.",
      "Aumentar vasopressor antes de qualquer intervenção."
    ],
    "correctAnswer": 2,
    "explanation": "Hipercalemia grave (K 7,3) com repercussão no ECG (T apiculada, QRS alargado), em lesão renal aguda oligúrica com acidose: emergência. A sequência é: gluconato de cálcio EV para estabilizar a membrana do miocárdio, insulina com glicose para deslocar o potássio para dentro das células e, como há oligúria, acidose e choque séptico, considerar terapia renal substitutiva para remover o potássio.",
    "commentary": "Só resina (A): age em horas; não protege o coração.\n\nEsperar nova gasometria (B): QRS alargado é sinal de risco iminente de arritmia; não se espera.\n\nFurosemida em dose alta (D): com oligúria e hipotensão tem pouco efeito e não é a primeira escolha.\n\nAumentar o vasopressor primeiro (E): não trata a causa imediata do risco de parada.",
    "reference": "UK Kidney Association — Treatment of acute hyperkalaemia in adults (2023) / KDIGO",
    "tags": [
      "nefrologia",
      "hipercalemia",
      "lesão renal aguda",
      "emergências"
    ],
    "tip": "K alto com ECG alterado: cálcio, insulina + glicose e diálise se oligúria."
  },
  {
    "id": "sespe2026-20",
    "topography": "2.1",
    "topic": "DPOC",
    "module": "Clínica Médica",
    "text": "Mulher de 65 anos, ex-tabagista, com diagnóstico de DPOC moderada, usa broncodilatador de longa duração de forma regular. Apresentou três exacerbações no último ano, duas delas exigindo antibiótico. A contagem de eosinófilos é de 320 células/µL.\n\nQual é a conduta adicional mais adequada neste cenário?",
    "options": [
      "Iniciar corticosteroide sistêmico em dose contínua.",
      "Substituir broncodilatador por metilxantina.",
      "Introduzir corticosteroide inalado em associação à terapia atual.",
      "Suspender broncodilatador e iniciar fisioterapia respiratória exclusiva.",
      "Não modificar conduta atual, pois não há critérios de gravidade."
    ],
    "correctAnswer": 2,
    "explanation": "DPOC com exacerbações frequentes (3 no último ano, 2 com antibiótico) apesar de broncodilatador de longa duração, e eosinófilos de 320/µL. Pelo GOLD, eosinófilos ≥ 300 com exacerbações indicam acrescentar corticoide inalado ao broncodilatador (terapia tripla LABA + LAMA + CI), o que reduz exacerbações.",
    "commentary": "Corticoide sistêmico contínuo (A): muitos efeitos adversos e sem benefício na manutenção.\n\nMetilxantina (B): pouco eficaz e tóxica; não substitui broncodilatador de longa duração.\n\nSuspender o broncodilatador (D): o broncodilatador é a base do tratamento; reabilitação é complementar.\n\nNão mudar (E): exacerbações frequentes indicam escalonar o tratamento.",
    "reference": "GOLD 2025 — Global Strategy for COPD / SBPT — Diretrizes de DPOC",
    "tags": [
      "pneumologia",
      "DPOC",
      "exacerbação",
      "corticoide inalatório",
      "eosinófilos"
    ],
    "tip": "DPOC exacerbador com eosinófilos ≥ 300: acrescente corticoide inalado."
  },
  {
    "id": "sespe2026-21",
    "topography": "3.1",
    "module": "Cirurgia",
    "text": "Em qual das situações clínicas abaixo, NÃO está indicada a neoadjuvância com FLOT nos tumores gástricos e de junção-esofagogástrica?",
    "options": [
      "Tumor Siewert I (adenocarcinoma) com linfonodos paracárdicos +",
      "Tumor gástrico de incisura angularis que invade a muscular própria, porém sem linfonodos acometidos",
      "Tumor Siewert III com invasão esplênica por contiguidade e linfonodos positivos",
      "Tumor antral com linfonodos positivos em todas as cadeias perigástricas",
      "Tumor Siewert II com metástase única para o lobo esquerdo do fígado"
    ],
    "correctAnswer": 4,
    "explanation": "A quimioterapia perioperatória com FLOT é indicada para adenocarcinoma gástrico ou da junção esofagogástrica ressecável, a partir de cT2 ou com linfonodos positivos, sem metástase à distância. Um tumor Siewert II com metástase hepática é doença estádio IV (M1): o tratamento é sistêmico paliativo, não neoadjuvância com intenção curativa. Por isso a alternativa E é a situação em que o FLOT neoadjuvante NÃO está indicado.",
    "commentary": "Siewert I com linfonodos (A): doença localmente avançada da junção, com indicação de terapia neoadjuvante.\n\nIncisura angular T2 N0 (B): T2 já tem indicação de perioperatória.\n\nSiewert III T4b N+ (C): localmente avançado, sem metástase à distância, também se beneficia da neoadjuvância.\n\nAntro com linfonodos positivos (D): N+ indica FLOT perioperatório.",
    "reference": "FLOT4 (Lancet 2019) / NCCN — Gastric Cancer 2025 / ESMO 2022",
    "tags": [
      "cirurgia oncológica",
      "câncer gástrico",
      "junção esofagogástrica",
      "FLOT",
      "neoadjuvância"
    ],
    "tip": "FLOT perioperatório: ≥ cT2 ou N+, desde que M0."
  },
  {
    "id": "sespe2026-22",
    "topography": "16",
    "topic": "Hérnias",
    "module": "Cirurgia",
    "text": "A técnica TAR (Transversus Abdominis Release) é usada no tratamento de hérnias ventrais complexas e grandes defeitos da parede abdominal.\n\nEm relação a esse procedimento, podemos afirmar que",
    "options": [
      "por promover uma liberação muscular ampla, ela dispensa o uso de tela de prolene.",
      "por usar o músculo transverso do abdome, ela está contraindicada para hérnias da linha média.",
      "ela se restringe a uma separação anterior de componentes da bainha do reto abdominal.",
      "ela é uma evolução da cirurgia da separação de componentes, com diminuição dos riscos de atrofia do reto e lesão nervosa.",
      "quando utilizada, a tela deve ser preferencialmente absorvível e aplicada logo abaixo da bainha anterior do reto abdominal."
    ],
    "correctAnswer": 3,
    "explanation": "A TAR (transversus abdominis release) é uma separação POSTERIOR de componentes: abre-se a bainha posterior do reto e secciona-se o músculo transverso do abdome, criando um espaço retromuscular amplo para uma tela grande. É uma evolução da separação anterior de componentes (Ramirez): preserva os feixes neurovasculares que inervam o reto, reduzindo atrofia e denervação, e evita grandes descolamentos de pele.",
    "commentary": "Dispensa tela (A): em hérnias ventrais complexas a tela é sempre usada, geralmente de polipropileno.\n\nContraindicada na linha média (B): é justamente indicada para grandes hérnias da linha média.\n\nSeparação anterior (C): a TAR é posterior; a anterior é a técnica de Ramirez.\n\nTela absorvível sob a bainha anterior (E): a tela é permanente e fica no espaço retromuscular, atrás do reto.",
    "reference": "Novitsky YW et al. — Transversus abdominis muscle release (Am J Surg 2012) / EHS — Incisional hernia guidelines",
    "tags": [
      "cirurgia geral",
      "hérnia ventral",
      "separação de componentes",
      "TAR"
    ],
    "tip": "TAR = separação posterior de componentes, tela retromuscular."
  },
  {
    "id": "sespe2026-23",
    "topography": "3.3",
    "topic": "Colelitíase",
    "module": "Cirurgia",
    "text": "Homem 24 anos, portador de esferocitose hereditária. Encaminhado ao ambulatório de cirurgia pela hematologista com indicação de esplenectomia. Ictérico e descorado, traz os seguintes exames laboratoriais: Hemoglobina 7,9 g/dl, bilirrubina total de 12.2 mg/dl, bilirrubina indireta de 11 mg/dl, Gama GT 47 U/l. USG de abdome total mostra esplenomegalia importante e colelitíase. Na consulta, o cirurgião identifica que o paciente é assintomático da doença biliar e solicita uma colangioressonância.\n\nNessa situação, qual a conduta mais adequada?",
    "options": [
      "Realizar a esplenectomia e a colecistectomia laparoscópica no mesmo momento cirúrgico.",
      "É uma das poucas indicações de tratar a colelitíase com ác. ursodesoxicólico.",
      "Como o paciente é assintomático, não devemos realizar a colecistectomia.",
      "Realizar a colecistectomia 1-2 meses após a esplenectomia, com o paciente sem anemia e anictérico.",
      "De acordo com os critérios de Tokyo, esse paciente tem já indicação de CPER no pré-operatório, independente da ressonância."
    ],
    "correctAnswer": 0,
    "explanation": "Paciente com esferocitose hereditária, que tem indicação de esplenectomia e colelitíase (cálculos pigmentares pela hemólise crônica), mesmo assintomática. Nesse contexto, recomenda-se a colecistectomia no mesmo ato cirúrgico da esplenectomia, ambas por videolaparoscopia: aproveita-se a mesma anestesia e evita-se uma complicação biliar futura.",
    "commentary": "Ácido ursodesoxicólico (B): só dissolve cálculos de colesterol pequenos; não funciona para cálculos pigmentares.\n\nNão operar por ser assintomático (C): a regra da colelitíase assintomática não vale para pacientes com hemólise que já serão operados.\n\nColecistectomia 1–2 meses depois (D): exigiria uma segunda cirurgia sem vantagem.\n\nCPRE pelos critérios de Tóquio (E): Tóquio é para colecistite e colangite; a hiperbilirrubinemia é indireta (hemólise), com GGT normal, sem sinal de coledocolitíase.",
    "reference": "British Society for Haematology — Guidelines for hereditary spherocytosis (2011) / SAGES",
    "tags": [
      "cirurgia geral",
      "esferocitose hereditária",
      "colelitíase",
      "esplenectomia",
      "colecistectomia"
    ],
    "tip": "Hemólise + colelitíase + esplenectomia indicada: tire a vesícula no mesmo ato."
  },
  {
    "id": "sespe2026-24",
    "topography": "3.3",
    "topic": "Colelitíase",
    "module": "Cirurgia",
    "text": "Homem 24 anos, portador de esferocitose hereditária. Encaminhado ao ambulatório de cirurgia pela hematologista com indicação de esplenectomia. Ictérico e descorado, traz os seguintes exames laboratoriais: Hemoglobina 7,9 g/dl, bilirrubina total de 12.2 mg/dl, bilirrubina indireta de 11 mg/dl, Gama GT 47 U/l. USG de abdome total mostra esplenomegalia importante e colelitíase. Na consulta, o cirurgião identifica que o paciente é assintomático da doença biliar e solicita uma colangioressonância.\n\nAlém da colelitíase, podemos afirmar que",
    "options": [
      "existe uma alteração da anatomia biliar no lobo direito.",
      "existe uma imagem sugestiva de obstrução biliar distal.",
      "existe condição propícia para o acontecimento da síndrome de Mirizzi.",
      "existe baixa probabilidade para o acontecimento de pancreatite biliar.",
      "existem microcálculos na árvore biliar esquerda."
    ],
    "correctAnswer": 3,
    "explanation": "A colangiorressonância mostra vesícula distendida e vias biliares de calibre normal, sem falhas de enchimento no colédoco e sem dilatação; o ducto cístico é longo e tortuoso, com inserção baixa. A GGT normal e a bilirrubina predominantemente indireta confirmam que não há obstrução.\n\nO gabarito considera correta a baixa probabilidade de pancreatite biliar, argumentando que o cístico longo e com inserção baixa dificulta a migração dos cálculos para o colédoco, e que não há coledocolitíase nem microcálculos visíveis.",
    "commentary": "Alteração da anatomia do lobo direito (A): os ductos intra-hepáticos têm distribuição habitual.\n\nObstrução distal (B): o colédoco não está dilatado e a GGT é normal.\n\nCondição para síndrome de Mirizzi (C): não há cálculo impactado no infundíbulo ou no cístico comprimindo o hepático comum.\n\nMicrocálculos na árvore esquerda (E): não há falhas de enchimento intra-hepáticas.\n\nAtenção: a justificativa da banca é discutível — a anatomia do cístico não costuma ser usada para estimar o risco de pancreatite biliar, e cálculos pequenos e múltiplos (comuns na hemólise) aumentam esse risco. A alternativa D é a resposta oficial por exclusão das demais.",
    "reference": "Tokyo Guidelines 2018 / Sabiston — Tratado de Cirurgia (vias biliares)",
    "tags": [
      "cirurgia geral",
      "colangiorressonância",
      "colelitíase",
      "esferocitose hereditária"
    ],
    "tip": "Colangio-RM sem dilatação e sem falha de enchimento: não há obstrução nem coledocolitíase.",
    "image": "/images/sespe2026-24.webp"
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
    "id": "sespe2026-26",
    "topography": "3.1",
    "topic": "Diverticulose/diverticulite",
    "module": "Cirurgia",
    "text": "Homem, previamente hígido, 52 anos. Admitido na emergência com mal-estar e dor em FIE há 48h. Nega febre. Leucócitos 9.800. Realizou TC de abdome abaixo. Após parecer da cirurgia geral, qual o diagnóstico e a conduta que devemos implementar?",
    "options": [
      "Trata-se de uma apendicite não perfurada. Apendicectomia laparoscópica.",
      "Trata-se de uma diverticulite complicada com abscesso. Drenagem e antibiótico venoso.",
      "Trata-se de uma hérnia encarcerada inguinal esquerda. Inguinotomia de urgência.",
      "Trata-se de uma diverticulite leve. Dieta líquida e paracetamol.",
      "Trata-se de um cálculo ureteral esquerdo. Hidratação vigorosa e analgesia."
    ],
    "correctAnswer": 3,
    "explanation": "Dor em fossa ilíaca esquerda há 48 horas, sem febre e sem leucocitose, com TC mostrando divertículos no sigmoide com densificação da gordura, sem abscesso, perfuração ou ar extraluminal: diverticulite aguda não complicada (leve). Em pacientes imunocompetentes e sem sinais sistêmicos, as diretrizes atuais (estudos DIABOLO e AVOD) permitem tratamento ambulatorial sem antibiótico, com dieta líquida e analgesia, e reavaliação.",
    "commentary": "Apendicite (A): a dor é na fossa ilíaca esquerda e a imagem é de cólon sigmoide.\n\nDiverticulite com abscesso (B): não há coleção na TC.\n\nHérnia inguinal encarcerada (C): não há hérnia na imagem nem no exame.\n\nCálculo ureteral (E): a dor seria em cólica, irradiada, com hematúria; a TC não mostra cálculo.",
    "reference": "ASCRS 2020 — Clinical Practice Guidelines for left-sided colonic diverticulitis / WSES 2020",
    "tags": [
      "cirurgia geral",
      "diverticulite",
      "tratamento ambulatorial",
      "tomografia"
    ],
    "tip": "Diverticulite não complicada em imunocompetente: pode ser tratada sem antibiótico.",
    "image": "/images/sespe2026-26.webp"
  },
  {
    "id": "sespe2026-27",
    "topography": "16",
    "topic": "Trauma torácico",
    "module": "Cirurgia",
    "text": "Em relação ao tratamento do pneumotórax, qual das condutas abaixo NÃO está de acordo com o ATLS 11º edição 2025?",
    "options": [
      "Pneumotórax pequeno, mesmo em pacientes assintomáticos, deve ser tratado com drenagem torácica.",
      "Em pneumotórax hipertensivo, não devemos mais indicar a punção com Jelco 14 na linha hemiclavicular. O correto seria indicar logo a drenagem torácica no 5º espaço intercostal.",
      "A toracostomia digital, que seria fazer uma pequena incisão no tórax e usar o dedo para dissecar e entrar na cavidade pleural, pode ser usada no pneumo ou hemotórax hipertensivo.",
      "Num pneumotórax aberto, a drenagem torácica deve ser feita por uma incisão diferente da ferida traumática.",
      "Podemos usar drenos menores, de tamanho 14 Fr, para a drenagem torácica de pneumotórax."
    ],
    "correctAnswer": 0,
    "explanation": "A pergunta pede a conduta que NÃO está de acordo com o ATLS 11ª edição. Pneumotórax pequeno e assintomático (inclusive o oculto, visto só na TC) pode ser observado com radiografias seriadas; a drenagem é indicada se for grande, sintomático, se aumentar, ou se o paciente precisar de ventilação com pressão positiva ou transporte aéreo. Dizer que todo pneumotórax pequeno deve ser drenado está errado.",
    "commentary": "Descompressão no 5º espaço (B): de acordo; o ATLS recomenda descompressão no 4º–5º espaço intercostal, entre as linhas axilares anterior e média, e o dreno resolve o problema.\n\nToracostomia digital (C): de acordo; é uma forma rápida de aliviar pneumotórax ou hemotórax hipertensivo.\n\nPneumotórax aberto (D): de acordo; cobre-se a ferida (curativo de três pontas) e o dreno é colocado por outra incisão.\n\nDrenos de 14 Fr (E): de acordo; drenos finos (pigtail) são aceitos para pneumotórax.",
    "reference": "ATLS — Advanced Trauma Life Support, 11ª edição (2025)",
    "tags": [
      "trauma",
      "trauma torácico",
      "pneumotórax",
      "drenagem torácica",
      "ATLS"
    ],
    "tip": "Pneumotórax pequeno e assintomático: pode observar (a menos que vá para ventilação ou avião)."
  },
  {
    "id": "sespe2026-28",
    "topography": "3.1",
    "module": "Cirurgia",
    "text": "Um paciente de 55 anos, com histórico epidemiológico positivo para doença de Chagas na infância e disfagia progressiva para sólidos e líquidos há 3 anos, realiza uma manometria de alta resolução (HRM) como parte da investigação diagnóstica. O exame revela: Pressão de Relaxamento Integrada (IRP) consistentemente elevada (> 15 mmHg). 100% de falha peristáltica (ausência de contrações esofágicas normais). Pressurização panesofágica (pressurização simultânea de todo o esôfago) em 30% das deglutições avaliadas.\n\nCom base na Classificação de Chicago versão 4.0 e na apresentação clínica típica de um megaesôfago chagásico, qual é o tipo de acalasia e a conduta clínica inicial mais apropriada para esse caso?",
    "options": [
      "Acalasia Tipo I; Esofagectomia.",
      "Acalasia Tipo I; Injeção de toxina botulínica no EEI ou dilatação pneumática.",
      "Acalasia Tipo II; Miotomia de Heller.",
      "Acalasia Tipo II; Tratamento medicamentoso com nitratos sublinguais.",
      "Acalasia Tipo III; Miotomia endoscópica peroral (POEM) como primeira escolha devido ao espasmo."
    ],
    "correctAnswer": 2,
    "explanation": "Pela Classificação de Chicago 4.0, acalasia é IRP elevado com 100% de falha peristáltica. O subtipo depende do padrão no corpo do esôfago: tipo I sem pressurização, tipo II com pressurização panesofágica em ≥ 20% das deglutições, tipo III com contrações espásticas em ≥ 20%. Pressurização panesofágica em 30% = acalasia tipo II.\n\nO tipo II tem a melhor resposta a todos os tratamentos; a cardiomiotomia a Heller (com fundoplicatura) é uma das opções de primeira linha, junto com a dilatação pneumática e o POEM.",
    "commentary": "Tipo I com esofagectomia (A): o tipo está errado, e a esofagectomia fica para megaesôfago avançado (dolicomegaesôfago).\n\nTipo I com toxina botulínica (B): tipo errado; a toxina é reservada para quem não pode ser operado.\n\nTipo II com nitratos (D): o tipo está certo, mas nitratos têm eficácia baixa e muitos efeitos adversos.\n\nTipo III com POEM (E): não há contrações espásticas; o tipo é II.",
    "reference": "Classificação de Chicago v4.0 (2021) / ACG 2020 — Achalasia guideline",
    "tags": [
      "cirurgia do aparelho digestivo",
      "acalasia",
      "megaesôfago chagásico",
      "manometria",
      "miotomia de Heller"
    ],
    "tip": "Chicago 4.0: tipo I sem pressurização, II panesofágica, III espástica."
  },
  {
    "id": "sespe2026-29",
    "topography": "16",
    "topic": "Feridas",
    "module": "Cirurgia",
    "text": "Um paciente de 70 anos, diabético tipo 2 e obeso, é admitido no pronto-socorro com dor abdominal intensa em hipocôndrio direito, febre (39°C), calafrios, leucocitose acentuada e sinal de Murphy positivo. A ultrassonografia de urgência revela vesícula biliar distendida, parede espessada e a presença de conteúdo ecogênico. O paciente é levado imediatamente ao centro cirúrgico para uma colecistectomia de urgência. Durante o procedimento, é confirmado o empiema, com drenagem de grande quantidade de pus do interior da vesícula biliar, mas sem perfuração ou contaminação grosseira do peritônio além do local da inflamação. A ferida operatória principal é fechada primariamente.\n\nDe acordo com a classificação de feridas cirúrgicas do Centers for Disease Control and Prevention (CDC) e os critérios estabelecidos para a vigilância de infecções hospitalares no Brasil (Portaria GM/MS nº 2.616/98), em qual categoria a ferida cirúrgica deve ser classificada?",
    "options": [
      "Ferida Limpa (Classe I)",
      "Ferida Limpa-Contaminada (Classe II)",
      "Ferida Contaminada (Classe III)",
      "Ferida Infectada (Classe IV)",
      "Ferida Potencialmente Contaminada (classe IIIa)"
    ],
    "correctAnswer": 3,
    "explanation": "Pela classificação do CDC e da Portaria 2.616/98, ferida infectada (classe IV, suja) é aquela em que há infecção clínica estabelecida no sítio operado, presença de pus, víscera perfurada ou trauma antigo com tecido desvitalizado. Colecistectomia com empiema (pus drenado da vesícula) é ferida infectada, mesmo sem contaminação grosseira do peritônio.",
    "commentary": "Limpa (A): sem abertura de trato digestivo e sem inflamação.\n\nLimpa-contaminada (B): seria a colecistectomia eletiva, sem inflamação aguda.\n\nContaminada (C): inflamação aguda sem pus ou falha técnica grosseira; aqui há pus.\n\nPotencialmente contaminada classe IIIa (E): não existe essa categoria; \"potencialmente contaminada\" é sinônimo de limpa-contaminada na portaria brasileira.",
    "reference": "CDC — Surgical Site Infection Guidelines / Portaria GM/MS nº 2.616/1998",
    "tags": [
      "cirurgia geral",
      "classificação de feridas",
      "infecção de sítio cirúrgico",
      "empiema de vesícula"
    ],
    "tip": "Pus no campo cirúrgico = ferida infectada (classe IV)."
  },
  {
    "id": "sespe2026-30",
    "topography": "16",
    "topic": "Pré-operatório",
    "module": "Cirurgia",
    "text": "Um paciente de 68 anos, com histórico de fibrilação atrial permanente e escore CHA₂DS₂-VASc de 4, faz uso crônico de varfarina (Marevan) para prevenção de AVC isquêmico, mantendo INR alvo entre 2,0 e 3,0. Ele está agendado para uma hernioplastia inguinal eletiva. O médico responsável pelo pré-operatório planeja a suspensão da varfarina e a introdução de uma terapia ponte.\n\nQual é a conduta perioperatória mais adequada e baseada em evidências para o manejo do anticoagulante neste caso, visando equilibrar os riscos de trombose e sangramento cirúrgico?",
    "options": [
      "Suspender a varfarina 1 dia antes da cirurgia, realizar o procedimento e reiniciar a medicação no pós-operatório imediato.",
      "Manter a varfarina inalterada até o dia da cirurgia, pois a hernioplastia é considerada uma cirurgia de baixo risco de sangramento.",
      "Suspender a varfarina 5 dias antes da cirurgia, iniciar a heparina de baixo peso molecular (HBPM) ambulatorial 3 dias antes do procedimento, suspender a HBPM 12 horas antes da cirurgia e reiniciar ambos os medicamentos no pós-operatório.",
      "Suspender a varfarina 3 dias antes da cirurgia, sem a necessidade de terapia ponte com heparina, e reiniciá-la no mesmo dia da cirurgia, se o RNI estiver abaixo de 1,5.",
      "Suspender a varfarina 7 dias antes da cirurgia, internar o paciente para iniciar heparina."
    ],
    "correctAnswer": 2,
    "explanation": "Paciente com FA, CHA₂DS₂-VASc 4, em varfarina, para hernioplastia (risco de sangramento moderado). Pelo gabarito, a conduta é suspender a varfarina 5 dias antes (o RNI leva cerca de 5 dias para normalizar), fazer ponte com HBPM em dose terapêutica a partir de 3 dias antes, suspender a HBPM 24 horas antes e reiniciar ambas no pós-operatório.\n\nAtenção: o estudo BRIDGE mostrou que, em FA sem AVC recente nem prótese mecânica, a ponte com heparina não reduz tromboembolismo e aumenta sangramento. Diretrizes atuais (ACCP 2022) sugerem não fazer ponte na maioria dos pacientes com FA, reservando-a para risco muito alto (CHA₂DS₂-VASc ≥ 7, AVC recente, prótese mecânica mitral). A alternativa também diz suspender a HBPM 12 horas antes; o habitual é 24 horas para dose terapêutica.",
    "commentary": "Suspender 1 dia antes (A): a varfarina tem meia-vida longa; o RNI não normaliza em 1 dia.\n\nManter a varfarina (B): só para procedimentos de risco mínimo de sangramento (dentários, catarata, dermatológicos).\n\nSuspender 3 dias antes sem ponte (D): 3 dias costuma ser pouco para normalizar o RNI; a suspensão padrão é 5 dias. Sem ponte, porém, seria a conduta de muitas diretrizes atuais.\n\n7 dias com internação (E): tempo excessivo e internação desnecessária; a ponte, quando indicada, é ambulatorial.",
    "reference": "ACCP 2022 — Perioperative management of antithrombotic therapy / BRIDGE trial (NEJM 2015) / SBC — Avaliação perioperatória 2024",
    "tags": [
      "pré-operatório",
      "anticoagulação",
      "varfarina",
      "terapia ponte",
      "fibrilação atrial"
    ],
    "tip": "Varfarina: suspender 5 dias antes. Ponte com heparina só para risco trombótico muito alto."
  },
  {
    "id": "sespe2026-31",
    "topography": "3.4",
    "topic": "Pancreatite aguda",
    "module": "Cirurgia",
    "text": "Homem de 52 anos, etilista, tratado por pancreatite aguda há 8 semanas, retorna ao ambulatório de seguimento sem apresentar queixas. Relata boa aceitação de dieta, nega dor, náuseas, vômitos ou febre. Apresentava durante o internamento uma tomografia de abdome com moderada quantidade de líquido livre peripancreático sem presença de gás ou necrose.\n\nDiante do quadro apresentado pelo paciente e do exame de acompanhamento, qual é a conduta mais apropriada?",
    "options": [
      "Drenagem endoscópica guiada por ultrassom endoscópico, para reduzir o risco de complicações.",
      "Drenagem percutânea, já que o tempo > 6 semanas define pseudocisto maduro e há baixa probabilidade de resolução espontânea.",
      "Observação com reavaliação clínica e imagem.",
      "Pancreatectomia distal profilática.",
      "Antibioticoterapia profilática e acompanhamento ambulatorial."
    ],
    "correctAnswer": 2,
    "explanation": "Oito semanas após pancreatite aguda, o paciente está assintomático. A coleção peripancreática (agora encapsulada, um pseudocisto) não tem gás nem necrose. Coleções e pseudocistos assintomáticos não precisam de drenagem, independentemente do tamanho, porque muitos regridem sozinhos. A conduta é observar com reavaliação clínica e por imagem; a drenagem fica para sintomas, infecção ou complicações.",
    "commentary": "Drenagem endoscópica (A) ou percutânea (B): só se houver sintomas (dor, obstrução, saciedade precoce), infecção ou complicação; o tempo de 6 semanas define a maturação da parede, não indica drenagem por si.\n\nPancreatectomia distal (D): não tem indicação.\n\nAntibiótico profilático (E): não é recomendado na pancreatite, nem para coleções estéreis.",
    "reference": "Revised Atlanta Classification 2012 / ACG 2024 — Acute pancreatitis guideline",
    "tags": [
      "cirurgia do aparelho digestivo",
      "pancreatite aguda",
      "pseudocisto",
      "coleções peripancreáticas"
    ],
    "tip": "Pseudocisto assintomático: observa. Drena só se der sintoma ou infectar.",
    "image": "/images/sespe2026-31.webp"
  },
  {
    "id": "sespe2026-32",
    "topography": "3.2",
    "topic": "Hepatocarcinoma",
    "module": "Cirurgia",
    "text": "Mulher de 42 anos, sem comorbidades, sem passado de etilismo ou tabagismo, realizou ultrassonografia de abdome durante avaliação pré-operatória de cirurgia plástica que identificou nódulo hepático de 3,0cm no segmento 7 hepático. Complementou investigação com tomografia de abdome com contraste trifásica que evidenciou lesão de 3,5 cm no segmento 7 hepático com hipercaptação arterial e “wash-out” portal. Solicitada alfa-fetoproteína que resultou em 30ng/mL.\n\nQual é a conduta mais apropriada nesse momento?",
    "options": [
      "Diante da imagem típica, do tamanho da lesão e ausência de hipertensão portal, prosseguir diretamente para a ressecção.",
      "Indicar biópsia percutânea para confirmar o diagnóstico, pois a paciente não é cirrótica.",
      "Realizar ressonância magnética com contraste hepatoespecífico para confirmar o diagnóstico e avaliação de LI-RADS.",
      "Solicitar PET-CT como parte do estadiamento para avaliação de metástases.",
      "Indicar quimioembolização transarterial (TACE) para incluir a lesão nos critérios de Milão para transplante hepático."
    ],
    "correctAnswer": 1,
    "explanation": "Lesão hepática com realce arterial e wash-out em mulher sem cirrose e sem hepatopatia. O diagnóstico de hepatocarcinoma apenas pela imagem (critérios LI-RADS) só vale para pacientes de alto risco (cirróticos ou com hepatite B crônica). Em fígado não cirrótico, o padrão pode corresponder a adenoma, hiperplasia nodular focal ou metástase hipervascular, por isso a confirmação histológica por biópsia é necessária antes de decidir o tratamento.",
    "commentary": "Ressecção direta pela imagem típica (A): sem cirrose, a imagem não basta para diagnosticar CHC.\n\nRM para aplicar LI-RADS (C): o LI-RADS não se aplica a pacientes sem fator de risco.\n\nPET-CT (D): tem baixa sensibilidade para CHC e não define o diagnóstico.\n\nTACE para Milão (E): sem diagnóstico confirmado, não se indica tratamento locorregional nem transplante.",
    "reference": "AASLD 2023 — HCC guidance / EASL 2018 — Hepatocellular carcinoma / ACR LI-RADS v2018",
    "tags": [
      "cirurgia hepática",
      "hepatocarcinoma",
      "LI-RADS",
      "biópsia hepática",
      "nódulo hepático"
    ],
    "tip": "LI-RADS e diagnóstico de CHC sem biópsia: só em cirróticos ou hepatite B."
  },
  {
    "id": "sespe2026-33",
    "topography": "3.1",
    "topic": "Câncer colorretal",
    "module": "Cirurgia",
    "text": "Homem de 51 anos, sem comorbidades, foi diagnosticado com lesão vegetante em cólon ascendente de 3,0cm após realização de colonoscopia de rastreio para câncer colorretal. Biópsia evidenciou adenocarcinoma moderadamente diferenciado. Tomografias de estadiamento evidenciam múltiplos nódulos hipocaptantes bilobares em fígado, sugestivos de metástases. O paciente encontra-se assintomático, com performance ECOG 0 e sem icterícia.\n\nQual é a conduta inicial mais apropriada?",
    "options": [
      "Colectomia direita com linfadenectomia, seguida de quimioterapia adjuvante.",
      "Ressecção sincrônico do cólon e do fígado.",
      "Iniciar quimioterapia sistêmica com posterior avaliação de resposta tumoral.",
      "Radioterapia hepática para controle local.",
      "Abordagem paliativa exclusiva."
    ],
    "correctAnswer": 2,
    "explanation": "Câncer de cólon assintomático com múltiplas metástases hepáticas bilobares (a tomografia mostra numerosos nódulos hipodensos em ambos os lobos), sem obstrução, sangramento ou perfuração. Com doença metastática irressecável no momento e tumor primário assintomático, a conduta inicial é quimioterapia sistêmica (com biológico conforme o perfil molecular: RAS, BRAF, MSI), reavaliando depois a possibilidade de ressecção.",
    "commentary": "Colectomia seguida de quimioterapia (A): ressecar o primário assintomático na doença metastática irressecável não aumenta sobrevida e atrasa a quimioterapia.\n\nRessecção sincrônica (B): só para metástases ressecáveis; múltiplas lesões bilobares não são.\n\nRadioterapia hepática (D): não é tratamento padrão para metástases múltiplas.\n\nPaliativo exclusivo (E): com ECOG 0, o paciente se beneficia muito da quimioterapia.",
    "reference": "ESMO 2023 — Metastatic colorectal cancer / NCCN — Colon Cancer 2025",
    "tags": [
      "cirurgia oncológica",
      "câncer colorretal",
      "metástases hepáticas",
      "quimioterapia"
    ],
    "tip": "Câncer de cólon assintomático com metástases irressecáveis: quimioterapia primeiro.",
    "image": "/images/sespe2026-33.webp"
  },
  {
    "id": "sespe2026-34",
    "topography": "3.1",
    "module": "Cirurgia",
    "text": "Homem de 57 anos, sem comorbidades, chega ao setor de emergência com quadro de melena e hipotensão. Após adequada estabilização clínica, realizou endoscopia digestiva alta que demonstrou massa subepitelial com umbilicação central em pequena curvatura gástrica com sangramento ativo. Biópsia realizada identificou apenas processo inflamatório inespecífico. Tomografia computadorizada com contraste oral e venoso demonstra lesão de aproximadamente 5,0cm com realce heterogêneo.\n\nQual seria a conduta mais apropriada para esse paciente?",
    "options": [
      "Indicar Imatinibe neoadjuvante por 3 meses e posterior reavaliação.",
      "Embolização endoscópica, seguida de alta para seguimento ambulatorial.",
      "Ressecção cirúrgica com margens livres sem necessidade de linfadenectomia.",
      "Radioterapia hemostática para controle do sangramento.",
      "Gastrectomia total com linfadenectomia."
    ],
    "correctAnswer": 2,
    "explanation": "Massa subepitelial gástrica com umbilicação central e sangramento, biópsia endoscópica inconclusiva (a lesão está abaixo da mucosa) e TC com lesão de 5 cm com realce heterogêneo: tumor estromal gastrointestinal (GIST) até prova em contrário.\n\nGIST localizado e ressecável é tratado com ressecção cirúrgica com margens livres (R0), sem romper a cápsula. Como raramente dá metástase linfonodal, não se faz linfadenectomia. A ressecção em cunha é geralmente suficiente.",
    "commentary": "Imatinibe neoadjuvante (A): para tumores grandes ou em localização que exigiria cirurgia mutilante; uma lesão de 5 cm na pequena curvatura com sangramento pede cirurgia.\n\nEmbolização e alta (B): controla o sangramento, mas não trata o tumor.\n\nRadioterapia (D): o GIST é pouco radiossensível.\n\nGastrectomia total com linfadenectomia (E): desnecessária; não há disseminação linfática.",
    "reference": "ESMO 2022 — Gastrointestinal stromal tumours / NCCN — GIST",
    "tags": [
      "cirurgia oncológica",
      "GIST",
      "tumor subepitelial",
      "hemorragia digestiva alta"
    ],
    "tip": "GIST: ressecção com margem livre, sem linfadenectomia.",
    "image": "/images/sespe2026-34.webp"
  },
  {
    "id": "sespe2026-35",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Homem de 28 anos, vítima de colisão moto-carro, é admitido no pronto-socorro cerca de 40 minutos após o trauma. Encontra-se agitado, pálido, sudoreico e com dificuldades para falar frases completas. Ao exame inicial, observa-se sangramento ativo pulsátil em ferimento extenso de coxa esquerda, fratura exposta visível e extremidades frias. Sinais vitais aferidos: FC 146bpm, PA 80x42mmHg, FR 28irpm, SpO₂ 90% em uso de máscara de oxigênio.\n\nDiante do quadro exposto, qual seria a conduta imediata mais adequada?",
    "options": [
      "Avaliação pupilar e escala de Glasgow.",
      "Aplicação de torniquete proximal ao ferimento da coxa.",
      "Acesso venoso calibroso e reposição volêmica.",
      "Intubação orotraqueal com sequência rápida.",
      "Punção torácica bilateral de alívio."
    ],
    "correctAnswer": 1,
    "explanation": "Politraumatizado em choque hemorrágico grave com sangramento arterial pulsátil de um membro. Pelo ATLS (sequência xABCDE), a hemorragia externa exsanguinante é controlada antes de tudo: compressão direta e, se não bastar, torniquete proximal ao ferimento, aplicado imediatamente. Depois seguem via aérea, ventilação e acesso venoso.",
    "commentary": "Pupilas e Glasgow (A): é o D, depois do controle do sangramento e do ABC.\n\nAcesso venoso e volume (C): importante, mas não para a hemorragia; repor volume sem conter a perda é ineficaz.\n\nIntubação imediata (D): o paciente fala e protege a via aérea; a prioridade é o sangramento.\n\nPunção torácica bilateral (E): não há sinais de pneumotórax hipertensivo.",
    "reference": "ATLS — Advanced Trauma Life Support, 11ª edição (2025)",
    "tags": [
      "trauma",
      "hemorragia externa",
      "torniquete",
      "xABCDE",
      "choque hemorrágico"
    ],
    "tip": "xABCDE: sangramento exsanguinante primeiro — torniquete."
  },
  {
    "id": "sespe2026-36",
    "topography": "3.3",
    "topic": "Coledocolitíase",
    "module": "Cirurgia",
    "text": "Mulher de 51 anos, portadora de obesidade grau 1 e diabetes mellitus, procura atendimento por queixa de dor intermitente em hipocôndrio direito há 4 dias, associada à colúria e acolia fecal nas últimas 24 horas. Nega febre. Ao exame físico, apresenta-se ictérica (2+/4+), com dor à palpação em hipocôndrio direito e Murphy negativo. Exames laboratoriais: BT 5,2mg/dL (BD 4,3mg/dL), FA 420 U/L, GGT 610 U/L, TGO 86 U/L, TGP 104 U/L, amilase 30 U/L, lipase 55 U/L, leucometria 8.900/mm3. Realizou ultrassonografia de abdome que evidenciou vesícula biliar com múltiplos cálculos e dilatação de vias biliares com diâmetro máximo de 9mm, sem identificar fator obstrutivo. É, então, realizada a colangioressonância.\n\nDiante do achado da imagem, qual a conduta mais adequada?",
    "options": [
      "Iniciar antibioticoterapia e observação clínica.",
      "Realizar tomografia computadorizada para estadiamento adequado.",
      "Realizar drenagem biliar percutânea transhepática para descompressão de via biliar.",
      "Indicar CPRE terapêutica com papilotomia e extração do cálculo, seguida de colecistectomia por videolaparoscopia.",
      "Indicar colangioscopia para biópsia, seguida de quimioterapia."
    ],
    "correctAnswer": 3,
    "explanation": "Icterícia colestática (bilirrubina direta, FA e GGT altas, colúria e acolia), colelitíase e via biliar dilatada (9 mm), sem febre nem leucocitose. A colangiorressonância mostra cálculo no colédoco (falha de enchimento). O tratamento é CPRE com papilotomia e extração do cálculo, seguida de colecistectomia videolaparoscópica (idealmente na mesma internação).",
    "commentary": "Antibiótico e observação (A): não há colangite; o cálculo precisa ser retirado.\n\nTC para estadiamento (B): não há suspeita de neoplasia; o diagnóstico já está feito.\n\nDrenagem percutânea (C): reservada para falha ou impossibilidade da CPRE.\n\nColangioscopia com biópsia e quimioterapia (E): seria para colangiocarcinoma, não para coledocolitíase.",
    "reference": "ASGE 2019 — Guideline on the management of choledocholithiasis / Tokyo Guidelines 2018",
    "tags": [
      "cirurgia do aparelho digestivo",
      "coledocolitíase",
      "CPRE",
      "colecistectomia"
    ],
    "tip": "Coledocolitíase: CPRE + colecistectomia.",
    "image": "/images/sespe2026-36.webp"
  },
  {
    "id": "sespe2026-37",
    "topography": "16",
    "topic": "Nutrição cirúrgica",
    "module": "Cirurgia",
    "text": "Homem de 70 anos, portador de hipertensão arterial e diabetes mellitus, apresenta quadro de vômitos de repetição há 10 dias. Relata baixa aceitação de dieta há cerca de 3 meses associada à perda ponderal de 10kg nesse período. Atualmente apresenta IMC 16kg/m2. Realizada endoscopia digestiva alta que identifica grande quantidade de resíduo gástrico e impossibilidade de ultrapassar o piloro devido à lesão estenosante. Biópsia de congelação evidenciou adenocarcinoma.\n\nDiante do quadro, qual a conduta nutricional pré-operatória ideal?",
    "options": [
      "Sonda nasogástrica para descompressão gástrica e programar cirurgia de urgência.",
      "Sonda nasogástrica com dieta imunomoduladora até reganho ponderal seguida de abordagem cirúrgica.",
      "Dieta por via oral conforme aceitação associada à dieta imunomoduladora por 5-7 dias, seguida de abordagem cirúrgica.",
      "Nutrição parenteral total por 7-10 dias, seguida de abordagem cirúrgica.",
      "Nutrição enteral por gastrostomia por 7-10 dias, seguida de abordagem cirúrgica."
    ],
    "correctAnswer": 3,
    "explanation": "Idoso com câncer gástrico causando obstrução pilórica (estase gástrica, vômitos), perda de 10 kg em 3 meses e IMC 16: desnutrição grave e trato digestivo alto que não pode ser usado. Desnutridos graves se beneficiam de terapia nutricional pré-operatória por 7 a 14 dias. Como a via oral e a sonda gástrica não funcionam (obstrução do piloro), a opção é nutrição parenteral total por 7 a 10 dias antes da cirurgia.",
    "commentary": "Cirurgia de urgência (A): operar desnutrido grave sem preparo aumenta muito as complicações, e não há urgência.\n\nSonda nasogástrica com dieta (B): o alimento não passa pelo piloro obstruído.\n\nVia oral com imunonutrição (C): o paciente vomita; não consegue ingerir.\n\nGastrostomia (E): o problema está distal ao estômago; a dieta não passaria do piloro. Uma jejunostomia ou sonda nasoenteral pós-pilórica seria alternativa, mas não está entre as opções.",
    "reference": "ESPEN 2021 — Clinical nutrition in surgery / Projeto ACERTO",
    "tags": [
      "nutrição cirúrgica",
      "desnutrição",
      "câncer gástrico",
      "nutrição parenteral"
    ],
    "tip": "Desnutrido grave com trato digestivo obstruído: parenteral pré-operatória 7–10 dias."
  },
  {
    "id": "sespe2026-38",
    "topography": "3.4",
    "module": "Cirurgia",
    "text": "Mulher de 60 anos realizou ultrassonografia de abdome por queixas ginecológicas que identificou cisto de pâncreas. Complementou investigação com ressonância magnética de abdome que identificou cisto pancreático de 2,6cm em corpo do pâncreas, sem comunicação com ductos pancreáticos, sem nódulo mural ou realce sólido. Ducto pancreático de 3mm. Ca 19-9 dentro da normalidade.\n\nDiante do quadro, qual seria a conduta mais apropriada?",
    "options": [
      "Pancreatectomia distal laparoscópica.",
      "Seguimento com imagem em 3-6 meses.",
      "Pancreatectomia total com preservação esplênica.",
      "Biópsia guiada por ecoendoscopia.",
      "Quimioterapia neoadjuvante com Folfirinox."
    ],
    "correctAnswer": 1,
    "explanation": "Cisto pancreático de 2,6 cm, achado incidental, sem comunicação com o ducto, sem nódulo mural, sem realce sólido, ducto principal normal e CA 19-9 normal: não há características de alto risco nem preocupantes (pelos critérios de Fukuoka e da AGA). A conduta é vigilância com imagem (RM) — para cistos de 2 a 3 cm, inicialmente em 3 a 6 meses.",
    "commentary": "Pancreatectomia distal (A) ou total (C): cirurgia de grande porte sem indicação para cisto sem sinais de risco.\n\nBiópsia por ecoendoscopia (D): indicada se houver sinais preocupantes (cisto ≥ 3 cm, parede espessa, ducto 5–9 mm, nódulo).\n\nFolfirinox (E): quimioterapia para adenocarcinoma, sem qualquer indicação aqui.",
    "reference": "Fukuoka Consensus 2017 / ACG 2018 — Pancreatic cysts",
    "tags": [
      "cirurgia do aparelho digestivo",
      "cisto pancreático",
      "neoplasia cística",
      "vigilância"
    ],
    "tip": "Cisto pancreático sem sinais de risco: vigilância com imagem."
  },
  {
    "id": "sespe2026-39",
    "topography": "3.2",
    "module": "Cirurgia",
    "text": "Homem de 35 anos, fisiculturista em uso de esteroides anabolizantes, realizou ultrassonografia de abdome que evidenciou lesão hepática única de 4,0cm no segmento 6. Realizado complemento de investigação com tomografia computadorizada com contraste trifásico que demonstra lesão hepática única de 4,3cm no segmento 6, hipervascular arterial, sem sinais de sangramento, sugestiva de adenoma hepático. Apresenta função hepática normal.\n\nDiante dos achados, qual a conduta mais apropriada?",
    "options": [
      "Suspender o uso hormonal e reavaliar imagem em 3-6 meses.",
      "Ressecção hepática.",
      "Embolização portal.",
      "Quimioembolização arterial (TACE).",
      "Radioablação."
    ],
    "correctAnswer": 1,
    "explanation": "Adenoma hepático de 4,3 cm em homem usuário de anabolizantes. Em homens, o adenoma tem maior risco de transformação maligna (para hepatocarcinoma), por isso a ressecção está indicada independentemente do tamanho. Nas mulheres, adenomas abaixo de 5 cm podem ser acompanhados após suspensão do anticoncepcional.",
    "commentary": "Suspender hormônio e reavaliar (A): é a conduta para mulheres com adenoma < 5 cm; em homem, operar.\n\nEmbolização portal (C): serve para hipertrofiar o fígado remanescente antes de grandes ressecções.\n\nTACE (D): opção para adenoma sangrando ou irressecável, não primeira escolha.\n\nRadioablação (E): reservada a casos selecionados ou de alto risco cirúrgico.",
    "reference": "EASL 2016 — Benign liver tumours / ACG 2024 — Focal liver lesions",
    "tags": [
      "cirurgia hepática",
      "adenoma hepático",
      "esteroides anabolizantes",
      "ressecção hepática"
    ],
    "tip": "Adenoma hepático em homem: ressecção, qualquer tamanho."
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
    "id": "sespe2026-41",
    "topography": "5.2",
    "topic": "Trabalho de parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante 30 anos, primigesta e nulípara, 40ª semana de gestação, deu entrada na emergência obstétrica com dor em baixo ventre. Ao toque vaginal, o colo uterino apresentava-se com 10 cm de dilatação, bolsa rota, líquido claro com grumos, plano II de De Lee, cefálico e occipito direita transversa (ODT). Dinâmica uterina de 4 contrações/ 10 minuto/ 50 segundos. Batimentos cardiofetais (BCF) de 140 bpm. Após 6 horas, o toque vaginal era inalterado, porém com a presença de bossa serossanguínea. BCF: 136 bpm. Nesse momento, foi indicada uma cesariana. Ao exame físico do recém-nascido (RN) em sala de parto, encontrava-se bem com escore de Apgar 9/10, apresentando uma tumoração em região occipito parietal, predominante no parietal direito do RN de consistência endurecida e forma cacifo. Analise o exame físico do recém-nascido realizado em sala de parto, os dados do parto e assinale a alternativa CORRETA que representa uma possibilidade que ocorreu durante a descida e insinuação fetal no período expulsivo.",
    "options": [
      "Obliquidade de Nägele",
      "Obliquidade de Litzman",
      "Assinclitismo anterior",
      "Sinclitismo",
      "Obliquidade de Baudelocque-Duncan"
    ],
    "correctAnswer": 1,
    "explanation": "Parada de progressão no período expulsivo com o feto em occipito direita transversa (ODT) e bossa serossanguínea no parietal direito. Em ODT, o parietal direito do feto fica voltado para o sacro, ou seja, é o parietal posterior. Se a bossa se formou nele, o parietal posterior estava descendo à frente: assinclitismo posterior, chamado de obliquidade de Litzmann (a sutura sagital se aproxima do púbis).",
    "commentary": "Obliquidade de Nägele (A) e assinclitismo anterior (C): é o parietal anterior que desce primeiro (sutura sagital perto do sacro); a bossa estaria no parietal esquerdo.\n\nSinclitismo (D): a sutura sagital fica equidistante entre púbis e sacro; a bossa não seria lateral a um parietal.\n\nBaudelocque-Duncan (E): é um mecanismo de dequitação da placenta, não de descida fetal.",
    "reference": "Rezende — Obstetrícia (mecanismo de parto) / Zugaib — Obstetrícia",
    "tags": [
      "obstetrícia",
      "mecanismo de parto",
      "assinclitismo",
      "bossa serossanguínea"
    ],
    "tip": "Litzmann = assinclitismo posterior. Nägele = assinclitismo anterior."
  },
  {
    "id": "sespe2026-42",
    "topography": "5.2",
    "topic": "Idade gestacional",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante 20 anos, primigesta e nulípara, veio para nova consulta pré-natal, no dia 11 de janeiro de 2026, referindo que está no 5º mês de gestação e assintomática. Fez várias ultrassonografias e refere ainda que tinha ciclos regulares e sabia o momento da sua ovulação todos os meses. Abaixo seguem os dados informados pela paciente e as ultrassonografias anteriores com suas idades gestacionais na época do exame:\n• Primeiro dia da última menstruação: 16 de agosto de 2025.\n• Último dia da última menstruação: 19 de agosto de 2025.\n• Data da última ovulação: 30 de agosto de 2025.\n• Data da 1ª ultrassonografia: 27 de setembro de 2025 (calculada pelo diâmetro médio do saco gestacional – 4 semanas).\n• Data da 2ª ultrassonografia: 31 de outubro de 2025 (IG: calculada pela média do diâmetro biparietal, circunferência abdominal e comprimento do fêmur – 11 semanas).\n• Data da 3ª ultrassonografia: 20 de novembro de 2025 (IG: calculada pelo comprimento céfalo-nádegas – 13 semanas e 6 dias).\n• Data da 4ª ultrassonografia: 06 de dezembro de 2025 (IG: 17 semanas).\n\nDiante desses dados, qual a idade gestacional CORRETA para acompanhamento da gravidez no dia da consulta de pré natal?",
    "options": [
      "19 semanas e 1 dia",
      "21 semanas e 1 dia",
      "20 semanas e 5 dias",
      "21 semanas e 2 dias",
      "22 semanas e 1 dia"
    ],
    "correctAnswer": 1,
    "explanation": "Ciclos regulares e DUM conhecida (16/08/2025). O exame mais confiável para confirmar a datação é a ultrassonografia de 1º trimestre com comprimento cabeça-nádegas (CCN): em 20/11/2025 ela mostrou 13 semanas e 6 dias, enquanto pela DUM seriam 13 semanas e 5 dias — diferença de 1 dia, dentro da margem. Portanto mantém-se a DUM.\n\nDe 16/08/2025 a 11/01/2026 são 148 dias = 21 semanas e 1 dia.",
    "commentary": "19 semanas e 1 dia (A), 20 semanas e 5 dias (C) e 22 semanas e 1 dia (E): não correspondem a nenhuma datação coerente pela DUM confirmada.\n\n21 semanas e 2 dias (D): erra a conta em 1 dia (seria a datação pela ultrassonografia do CCN, que não deve substituir a DUM com diferença tão pequena).\n\nObservação: a ultrassonografia de 4 semanas (saco gestacional) e as de biometria de 2º trimestre são menos precisas; a ovulação informada também não altera a regra.",
    "reference": "ACOG Committee Opinion 700 — Methods for estimating the due date / FEBRASGO",
    "tags": [
      "obstetrícia",
      "idade gestacional",
      "datação da gestação",
      "ultrassonografia"
    ],
    "tip": "DUM confiável + CCN concordante (diferença < 5–7 dias): fique com a DUM."
  },
  {
    "id": "sespe2026-43",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente 33 anos, tercigesta, secundípara (partos prematuros), 33ª semana de gravidez. Chegou à emergência obstétrica referindo dor em baixo ventre. Referiu sobre os partos anteriores: o 1º prematuro, não sabe o motivo, mas informa que chegou ao hospital com 5 cm de dilatação, por via vaginal, e o recém-nascido apresentou desconforto respiratório; e o 2º parto foi de uma gestação gemelar, os bebês de mesma placenta entraram em sofrimento, sendo preciso realizar uma cesariana e ambos também apresentaram desconforto respiratório, um chegou a ficar no tubo por três dias, e o outro apenas com uma “máscara”. Peso ao nascer: 2.020g (1ª gestação) e 1.750g/2.530g (2ª gestação). Ao exame geral, nada digno de nota. Ao exame obstétrico: dinâmica uterina ausente; altura de fundo uterino de 25cm; pressão arterial de 160 x 110 mmHg; toque vaginal, com colo fechado, longo e posterior e feto alto e móvel.\n\nAvaliando apenas os antecedentes obstétricos descritos, assinale a alternativa que melhor representa uma medida preventiva precoce que poderia ter sido realizada.",
    "options": [
      "Progesterona no início do 2º trimestre.",
      "Cálcio no meio do primeiro trimestre.",
      "Ácido acetil salicílico a partir da 16ª semana de gravidez.",
      "Ultrassonografia transvaginal no terceiro trimestre de gravidez.",
      "Sulfato de magnésio."
    ],
    "correctAnswer": 0,
    "explanation": "Os antecedentes mostram parto prematuro espontâneo prévio (o primeiro, que chegou com 5 cm de dilatação). Gestantes com história de parto prematuro espontâneo têm indicação de progesterona vaginal (ou caproato de hidroxiprogesterona) iniciada no início do 2º trimestre (16 a 24 semanas), que reduz a recorrência do parto pré-termo. Essa é a medida preventiva precoce que caberia.",
    "commentary": "Cálcio no 1º trimestre (B): suplementação de cálcio é medida para prevenir pré-eclâmpsia em população com baixa ingestão, iniciada a partir de 12–20 semanas; não previne parto prematuro espontâneo.\n\nAAS a partir de 16 semanas (C): previne pré-eclâmpsia e deve começar antes de 16 semanas (idealmente a partir de 12).\n\nUltrassom transvaginal no 3º trimestre (D): a medida do colo é feita entre 16 e 24 semanas; no 3º trimestre é tarde para prevenção.\n\nSulfato de magnésio (E): é neuroproteção fetal no parto iminente, não prevenção.",
    "reference": "FEBRASGO — Prevenção do parto pré-termo / ACOG Practice Bulletin 234",
    "tags": [
      "obstetrícia",
      "prematuridade",
      "progesterona",
      "prevenção do parto pré-termo"
    ],
    "tip": "Parto prematuro espontâneo prévio: progesterona a partir de 16 semanas."
  },
  {
    "id": "sespe2026-44",
    "topography": "5.2",
    "topic": "Diabetes gestacional",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente 22 anos, tercigesta, secundípara, 31ª semana de gravidez. Chegou à emergência obstétrica referindo dor em baixo ventre e perda de líquido amniótico. No cartão de pré-natal, observa-se: tipagem sanguínea A negativo; Coombs indireto positivo e glicemia jejum de 200 mg% (todos realizados no 1º trimestre de gravidez). Ao exame obstétrico: dinâmica uterina ausente; altura de fundo uterino de 30cm; pressão arterial de 100 x 60 mmHg; toque vaginal, com colo fechado, longo e posterior e feto alto e móvel, bolsa das águas rotas com saída de líquido claro. A ultrassonografia realizada no momento do atendimento revelou: percentil de peso para idade gestacional 89; dopplervelocimetria com índice de pulsatilidade na artéria umbilical de 1,20 e na artéria cerebral média fetal de 2,10; pico sistólico da artéria cerebral média (ACM) fetal menor de 1,5 MoM para idade gestacional; e maior bolsão (MB) de 9,8cm.\n\nNesta paciente, o que MELHOR pode representar a causa ou consequência do valor do MB do líquido amniótico?",
    "options": [
      "Doença hemolítica fetal e neonatal – Coombs indireto positivo que sugere anemia fetal.",
      "Descolamento prematuro da placenta normalmente inserida – devido à distensão uterina e rotura prematura das membranas.",
      "Rotura prematura das membranas ovulares – devido à distensão uterina.",
      "Diabetes – devido ao aumento da diurese fetal.",
      "Doença hemolítica fetal e neonatal – pico sistólico da ACM fetal que sugere anemia fetal."
    ],
    "correctAnswer": 3,
    "explanation": "Maior bolsão de 9,8 cm (acima de 8 cm) = polidrâmnio. A gestante tem glicemia de jejum de 200 mg/dL no 1º trimestre, ou seja, diabetes franco (pré-gestacional), e o feto é grande (percentil 89). A hiperglicemia fetal causa diurese osmótica, aumentando a produção de urina fetal, a principal fonte de líquido amniótico. O diabetes é a causa mais provável.",
    "commentary": "Doença hemolítica pelo Coombs (A) ou pela ACM (E): o pico sistólico da ACM abaixo de 1,5 MoM afasta anemia fetal significativa, então a aloimunização não explica o polidrâmnio agora.\n\nDPP (B): a paciente não tem dor, hipertonia nem sofrimento fetal; e DPP não explica o polidrâmnio.\n\nRotura de membranas (C): é uma possível consequência do polidrâmnio, não a causa do maior bolsão aumentado.",
    "reference": "Ministério da Saúde — Manual de Gestação de Alto Risco (2022) / FEBRASGO",
    "tags": [
      "obstetrícia",
      "polidrâmnio",
      "diabetes na gestação",
      "líquido amniótico"
    ],
    "tip": "Polidrâmnio + glicemia alta + feto grande: diabetes (poliúria fetal)."
  },
  {
    "id": "sespe2026-45",
    "topography": "5.2",
    "topic": "Descolamento prematuro de placenta",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente 22 anos, tercigesta, secundípara, 30ª semana de gravidez. Chegou à emergência obstétrica referindo perda de líquido amniótico, náusea e vômitos. No cartão de pré-natal, observa-se: tipagem sanguínea A negativo; Coombs indireto positivo e glicemia jejum de 200 mg% (todos realizados no 1º trimestre de gravidez). Ao exame obstétrico: dinâmica uterina ausente; altura de fundo uterino de 29cm; pressão arterial de 100 x 60 mmHg; toque vaginal, com colo fechado, longo e posterior e feto alto e móvel, bolsa das águas rotas com saída de líquido claro e discreto sangramento. A ultrassonografia realizada no momento do atendimento revelou: percentil de peso para idade gestacional 89; pico sistólico da artéria cerebral média fetal menor de 1,5 MoM para idade gestacional; e maior bolsão de 9,8cm. Durante aproximadamente 4 semanas, a paciente foi mantida internada, fazendo psicoterapia, controle glicêmico diário com dieta e insulinoterapia (NPH e Regular). O perfil glicêmico evoluiu satisfatoriamente a partir da 3ª semana de internamento. A interrupção da gravidez foi indicada com 33 semana e 5 dias, por sangramento genital há 2 horas, rotura prematura das membranas há mais de 24 horas e apresentação pélvica. A paciente foi submetida à cesariana. Na retirada do recém-nascido, o obstetra teve dificuldade porque ele estava em apresentação pélvica. O recém-nascido (RN) apresentou bom tônus e choro forte. Realizado o clampeamento do cordão umbilical com 60 segundos.\n\nAssinale a alternativa que melhor representa a hipótese diagnóstica que o médico assistente indicou a interrupção da gestação por cesariana, mas que, após o nascimento, não foi confirmada.",
    "options": [
      "Diabetes",
      "Rotura prematura das membranas ovulares",
      "Doença hemolítica fetal e neonatal",
      "Descolamento prematuro da placenta normalmente inserida",
      "Apresentação pélvica"
    ],
    "correctAnswer": 3,
    "explanation": "A cesárea foi indicada por sangramento genital, rotura de membranas há mais de 24 horas e apresentação pélvica. A RPMO e a apresentação pélvica se confirmaram (o obstetra teve dificuldade com o pélvico), e o diabetes e a aloimunização eram diagnósticos prévios. A hipótese levantada pelo sangramento — descolamento prematuro de placenta, que justificaria parto imediato — não se confirmou: o RN nasceu com bom tônus e choro forte, sem sinais de sofrimento, e não há descrição de hematoma retroplacentário.",
    "commentary": "Diabetes (A): diagnóstico prévio confirmado (glicemia de jejum 200), não foi o motivo da cesárea.\n\nRotura de membranas (B): confirmada desde a admissão.\n\nDoença hemolítica (C): a aloimunização existia, mas não foi a indicação da cesárea, e o Doppler afastava anemia fetal.\n\nApresentação pélvica (E): confirmada pela dificuldade na extração.",
    "reference": "Ministério da Saúde — Manual de Gestação de Alto Risco (2022) / Zugaib — Obstetrícia",
    "tags": [
      "obstetrícia",
      "descolamento prematuro de placenta",
      "rotura prematura de membranas",
      "sangramento na gestação"
    ],
    "tip": "Sangramento com RPMO: pense em DPP — mas confirme no parto (hematoma, RN deprimido)."
  },
  {
    "id": "sespe2026-46",
    "topography": "5.2",
    "topic": "Pré-eclâmpsia",
    "module": "Ginecologia e Obstetrícia",
    "text": "Segundo a fetal medicine foundation, recentemente um novo parâmetro para predizer risco de pré-eclâmpsia foi adicionado no cálculo de risco do primeiro trimestre.\n\nAssinale a alternativa que representa esse parâmetro.",
    "options": [
      "Dopplervelocimetria da artéria oftálmica.",
      "Diabetes gestacional",
      "Gemelaridade",
      "Obesidade",
      "Pico sistólico da artéria cerebral média."
    ],
    "correctAnswer": 0,
    "explanation": "O rastreamento de pré-eclâmpsia da Fetal Medicine Foundation no 1º trimestre combina fatores maternos, pressão arterial média, Doppler das artérias uterinas e PlGF. Estudos recentes da FMF incluíram a dopplervelocimetria da artéria oftálmica materna (razão entre os picos sistólicos), que reflete alterações da circulação cerebral materna e melhora o desempenho do cálculo de risco.",
    "commentary": "Diabetes gestacional (B): só é diagnosticado depois, e diabetes prévio já é fator materno do modelo.\n\nGemelaridade (C) e obesidade (D): já fazem parte dos fatores maternos desde o modelo original.\n\nPico sistólico da ACM fetal (E): é usado para detectar anemia fetal, não para pré-eclâmpsia.",
    "reference": "Fetal Medicine Foundation — Preeclampsia screening / Sapantzoglou et al. — Ophthalmic artery Doppler (UOG 2021)",
    "tags": [
      "obstetrícia",
      "pré-eclâmpsia",
      "rastreamento",
      "artéria oftálmica",
      "medicina fetal"
    ],
    "tip": "Rastreio de pré-eclâmpsia FMF: fatores maternos + PAM + Doppler uterinas + PlGF (+ artéria oftálmica)."
  },
  {
    "id": "sespe2026-47",
    "topography": "5.2",
    "topic": "Rotura prematura de membranas",
    "module": "Ginecologia e Obstetrícia",
    "text": "Qual dos testes abaixo NÃO pode ser utilizado no diagnóstico diferencial da rotura prematura das membranas?",
    "options": [
      "Fern test",
      "Alfa-1 microglobulina placentária",
      "Fibronectina fetal",
      "Manobra de Turnier",
      "Fator de crescimento placentário"
    ],
    "correctAnswer": 4,
    "explanation": "O diagnóstico de rotura de membranas é clínico (saída de líquido pelo colo ao exame especular, eventualmente com manobra de Tarnier) e pode ser apoiado por testes: cristalização em samambaia (Fern test), PAMG-1 (alfa-1 microglobulina placentária, AmniSure) e fibronectina fetal no conteúdo vaginal. O PlGF (fator de crescimento placentário) é um marcador angiogênico usado no rastreio e diagnóstico de pré-eclâmpsia, não de rotura de membranas.",
    "commentary": "Teste da samambaia (A): o líquido amniótico cristaliza em folhas de samambaia ao secar.\n\nPAMG-1 (B): proteína abundante no líquido amniótico; teste rápido de alta acurácia.\n\nFibronectina fetal (C): presente no líquido amniótico; tem alta sensibilidade (o negativo afasta a rotura), embora seja mais usada para predizer parto prematuro.\n\nManobra de Tarnier (D): pressão no fundo uterino ou elevação da apresentação durante o exame especular para ver a saída de líquido.",
    "reference": "FEBRASGO — Rotura prematura das membranas ovulares / ACOG Practice Bulletin 217",
    "tags": [
      "obstetrícia",
      "rotura prematura de membranas",
      "diagnóstico",
      "PlGF"
    ],
    "tip": "PlGF é marcador de pré-eclâmpsia, não de rotura de membranas."
  },
  {
    "id": "sespe2026-48",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente 21 anos, primigesta, na 30ª semana de gravidez e assintomática. Veio à emergência trazendo uma ultrassonografia obstétrica, complementada pela via endovaginal apresentando sludge, sem outras alterações. Ela foi encaminhada pelo ultrassonografista, pois deveria procurar uma emergência.\n\nBaseado nas recomendações atuais, assinale a alternativa CORRETA.",
    "options": [
      "Iniciar clindamicina e gentamicina",
      "Iniciar penicilina cristalina",
      "Iniciar amoxicilina",
      "Iniciar ampicilina, amoxicilina e azitromicina",
      "Apenas fazer orientação"
    ],
    "correctAnswer": 4,
    "explanation": "O sludge (material particulado no líquido amniótico, perto do orifício interno) é marcador de inflamação ou infecção intra-amniótica subclínica e se associa a parto prematuro, sobretudo quando o colo é curto. Em gestante assintomática, com colo sem alterações e sem sinais de infecção ou trabalho de parto, não há tratamento comprovado: a conduta é orientar sobre sinais de alerta e manter o acompanhamento pré-natal.",
    "commentary": "Clindamicina e gentamicina (A): esquema para corioamnionite clínica, que não está presente.\n\nPenicilina cristalina (B): é profilaxia intraparto do estreptococo do grupo B.\n\nAmoxicilina (C) e ampicilina com amoxicilina e azitromicina (D): há estudos com antibióticos para sludge com colo curto, mas sem evidência robusta; não é recomendação para gestante assintomática com colo normal.",
    "reference": "Romero R et al. — Amniotic fluid sludge (UOG) / FEBRASGO — Prevenção do parto pré-termo",
    "tags": [
      "obstetrícia",
      "sludge amniótico",
      "prematuridade",
      "ultrassonografia"
    ],
    "tip": "Sludge isolado com colo normal e gestante assintomática: só orientar e acompanhar."
  },
  {
    "id": "sespe2026-49",
    "topography": "5.2",
    "topic": "Restrição de crescimento fetal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente 30 anos, primípara, com acompanhamento pré-natal de baixo risco bem realizado e sem intercorrências. Vem para acompanhamento pré-natal na 35ª semana de gravidez, quando é percebida uma AFU de 30 cm. Foi submetida a uma ultrassonografia que evidenciou uma circunferência abdominal entre o percentil 3 e 10, o índice de pulsatilidade da artéria cerebral média fetal no percentil 3 e da artéria umbilical no percentil 80.\n\nQual a conduta a ser adotada?",
    "options": [
      "Indução do trabalho de parto.",
      "Cesariana.",
      "Expectante, com reavaliação da dopplervelocimetria, cardiotocografia, perfil biofísico fetal e crescimento fetal.",
      "Expectante, com reavaliação apenas com a dopplervelocimetria e crescimento fetal.",
      "Expectante, sem necessidade de dopplervelocimetria, mas acompanhando o crescimento fetal até a 40ª semana de gestação."
    ],
    "correctAnswer": 2,
    "explanation": "Na 35ª semana, altura uterina reduzida, circunferência abdominal entre p3 e p10 e IP da artéria cerebral média no p3 (vasodilatação cerebral — centralização), com artéria umbilical normal. Pelo consenso Delphi, CA < p10 com IP da ACM < p5 configura restrição de crescimento fetal tardia.\n\nA conduta é expectante com vigilância fetal estreita — Doppler, cardiotocografia, perfil biofísico e crescimento — planejando o parto por volta de 37–38 semanas, ou antes se houver deterioração.",
    "commentary": "Indução (A) ou cesárea (B) imediatas: sem deterioração da vitalidade, antecipar o parto às 35 semanas traz riscos da prematuridade sem benefício.\n\nSó Doppler e crescimento (D): a vigilância deve incluir também cardiotocografia e perfil biofísico.\n\nSem Doppler até 40 semanas (E): a restrição com centralização exige Doppler e parto até cerca de 38 semanas.",
    "reference": "Consenso Delphi — Definição de RCF (Gordijn et al., UOG 2016) / ISUOG 2020 — Fetal growth restriction / FEBRASGO",
    "tags": [
      "obstetrícia",
      "restrição de crescimento fetal",
      "dopplervelocimetria",
      "vitalidade fetal"
    ],
    "tip": "RCF tardia (CA < p10 + ACM < p5): vigilância e parto em torno de 37–38 semanas."
  },
  {
    "id": "sespe2026-50",
    "topography": "13",
    "topic": "Depressão maior",
    "module": "Ginecologia e Obstetrícia",
    "text": "Qual (ais) dos sinais e sintomas cognitivos abaixo pode(m) fazer parte do diagnóstico depressão pós-parto?",
    "options": [
      "Dificuldade de concentração e tomada de decisões",
      "Choro incontrolável",
      "Ansiedade e preocupação excessiva",
      "Vontade de machucar o bebê",
      "Fadiga extrema e cansaço constante"
    ],
    "correctAnswer": 0,
    "explanation": "A questão pede sintomas cognitivos da depressão pós-parto. Na semiologia psiquiátrica, os sintomas da depressão se dividem em afetivos (tristeza, choro, ansiedade), neurovegetativos ou somáticos (sono, apetite, fadiga) e cognitivos (concentração, memória, tomada de decisões, pensamentos de culpa). Dificuldade de concentração e de tomar decisões é sintoma cognitivo, previsto no DSM-5.",
    "commentary": "Choro incontrolável (B): sintoma afetivo.\n\nAnsiedade e preocupação excessiva (C): sintoma afetivo/ansioso, muito comum na depressão pós-parto, mas não cognitivo.\n\nVontade de machucar o bebê (D): pensamento intrusivo grave que exige avaliação urgente; a banca não o classificou como sintoma cognitivo diagnóstico.\n\nFadiga extrema (E): sintoma somático/neurovegetativo.",
    "reference": "DSM-5-TR — Transtorno depressivo maior com início no periparto / FEBRASGO — Depressão perinatal",
    "tags": [
      "psiquiatria",
      "depressão pós-parto",
      "puerpério",
      "sintomas cognitivos"
    ],
    "tip": "Depressão: concentração e decisão = cognitivo; choro = afetivo; fadiga = somático."
  },
  {
    "id": "sespe2026-51",
    "topography": "5.1",
    "topic": "Prolapso genital",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 60 anos de idade chega ao consultório com queixa de bola na vagina há um ano e perda involuntária de urina aos esforços, além de referir frouxidão vaginal durante ato sexual. DUM há 10 anos, G4 P4, partos vaginais. No momento do exame, foi evidenciado o seguinte cenário, segundo o POP-Q:\n• Aa +3, Ba +10, C +11\n• gh 10, pb 3, tvl 11\n• Ap +3, Bp +10, D não aferido\n\nAssinale a alternativa com o diagnóstico e a conduta CORRETA.",
    "options": [
      "Prolapso genital E IV, rotura perineal. Realizar colpocleise + sling",
      "PPP E II, rotura perineal. Realizar colpocleise com sling.",
      "PPA E I, hipertrofia de colo. Realizar traquelectomia parcial",
      "Prolapso apical E II, rotura perineal. Realizar histerectomia vaginal",
      "Prolapso apical, IUE mista e rotura perineal. Realizar colpoplastia posterior"
    ],
    "correctAnswer": 0,
    "explanation": "No POP-Q, os pontos Ba (+10), C (+11) e Bp (+10) estão muito além do hímen, com comprimento vaginal total de 11 cm: o prolapso alcança quase toda a extensão da vagina (≥ TVL − 2 cm), ou seja, eversão completa — estágio IV. O corpo perineal curto e o hiato genital amplo indicam rotura perineal, e há incontinência urinária de esforço.\n\nEm idosa sem vida sexual ativa (a alternativa assume isso), a colpocleise (fechamento da vagina) com sling para a incontinência é uma opção cirúrgica com alta taxa de sucesso e baixa morbidade.",
    "commentary": "PPP estádio II (B): o prolapso não é estágio II; os pontos estão bem além do hímen.\n\nPPA estádio I e hipertrofia de colo (C): estadiamento errado.\n\nApical estádio II com histerectomia vaginal (D): estadiamento errado.\n\nColpoplastia posterior (E): não corrige o prolapso total de todos os compartimentos.\n\nAtenção: a paciente refere frouxidão vaginal durante o ato sexual, ou seja, tem vida sexual; a colpocleise impede a relação vaginal. A banca considerou a colpocleise correta, mas na prática ela só é indicada para quem não deseja mais vida sexual com penetração.",
    "reference": "IUGA/ICS — POP-Q / FEBRASGO — Prolapso genital",
    "tags": [
      "uroginecologia",
      "prolapso genital",
      "POP-Q",
      "colpocleise",
      "incontinência urinária"
    ],
    "tip": "POP-Q estágio IV: eversão total (ponto ≥ TVL − 2 cm)."
  },
  {
    "id": "sespe2026-52",
    "topography": "10",
    "topic": "Infecções sexualmente transmissíveis",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 27 anos chega ao ambulatório de ginecologia com “caroço” na região inguinal direita que inchou e ficou inflamado e avermelhado. Revela ainda o aparecimento de secreção purulenta por vários furos no referido “caroço” e depois virou uma úlcera única e unilateral.\n\nAssinale a alternativa que indica o provável diagnóstico.",
    "options": [
      "Protossinfiloma",
      "Cancro mole",
      "Linfogranuloma venéreo",
      "Úlcera mista de Rolle",
      "Tumor de Buschke-Löwenstein"
    ],
    "correctAnswer": 2,
    "explanation": "Linfonodo inguinal unilateral que inflama, amolece e drena pus por vários orifícios (\"bico de regador\"): é a fase secundária do linfogranuloma venéreo, causado por Chlamydia trachomatis sorotipos L1–L3. A lesão primária (pápula ou úlcera pequena e indolor) costuma passar despercebida. Tratamento: doxiciclina por 21 dias.",
    "commentary": "Protossifiloma (A): é o cancro duro da sífilis primária, úlcera única, indolor, de fundo limpo, com linfonodos que não fistulizam.\n\nCancro mole (B): úlceras múltiplas, dolorosas, com fundo sujo; o bubão costuma drenar por orifício único.\n\nÚlcera mista de Rollet (D): cancro mole associado a sífilis.\n\nTumor de Buschke-Löwenstein (E): condiloma acuminado gigante (HPV).",
    "reference": "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022)",
    "tags": [
      "ginecologia",
      "linfogranuloma venéreo",
      "infecções sexualmente transmissíveis",
      "úlcera genital"
    ],
    "tip": "Bubão que fistuliza por vários orifícios: linfogranuloma venéreo → doxiciclina 21 dias."
  },
  {
    "id": "sespe2026-53",
    "topography": "5.1",
    "module": "Ginecologia e Obstetrícia",
    "text": "Quais as principais características da fase antral do período folicular do ciclo ovulatório?",
    "options": [
      "No folículo antral, é encerrada a produção de líquido folicular.",
      "A fase apresenta feedback negativo do estradiol com o LH.",
      "Esta fase apresenta feedback negativo do estradiol com o FSH.",
      "É observado o aparecimento da estrutura chamada zona pelúcida.",
      "É iniciada a luteinização da granulosa pela estimulação do IGF 1 e 2."
    ],
    "correctAnswer": 2,
    "explanation": "Na fase antral, as células da granulosa dos folículos em crescimento produzem cada vez mais estradiol, que exerce feedback negativo sobre o FSH na hipófise. Com a queda do FSH, só o folículo com mais receptores (o dominante) continua crescendo, e os demais entram em atresia. É o mecanismo de seleção do folículo dominante.",
    "commentary": "Produção de líquido encerrada (A): a fase antral é justamente quando o líquido folicular se acumula e forma o antro.\n\nFeedback negativo com o LH (B): no fim da fase folicular, o estradiol alto faz feedback positivo, gerando o pico de LH.\n\nZona pelúcida (D): surge na fase pré-antral (folículo primário).\n\nLuteinização da granulosa (E): ocorre após o pico de LH, já na transição para a fase lútea.",
    "reference": "Speroff — Endocrinologia Ginecológica Clínica e Infertilidade / Berek & Novak — Tratado de Ginecologia",
    "tags": [
      "ginecologia",
      "fisiologia do ciclo menstrual",
      "fase folicular",
      "estradiol",
      "FSH"
    ],
    "tip": "Fase antral: estradiol sobe → FSH cai → seleção do folículo dominante."
  },
  {
    "id": "sespe2026-54",
    "topography": "5.1",
    "topic": "Adenomiose",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 43 anos, G3P3 (partos vaginais), LTB presente, encontra-se internada em UTI por descompensação hemodinâmica após episódio de sangramento genital intenso e prolongado. Informa que o quadro iniciou há um ano e se intensificou há três meses. Informa, também, que apresenta cólicas moderadas a intensas no período catamenial. O exame genital revela útero difusamente aumentado de volume (250 cm³), consistência amolecida, superfície regular e mobilidade preservada. Traz consigo exame ecográfico que revela útero de volume aumentado com miométrio heterogêneo e lesões arredondadas, hipoecoicas em miométrio (maior de 2,0 cm³), eco endometrial normal e outra imagem hipoecoica, subserosa de 5,0 cm³.\n\nAssinale a alternativa que indica o provável diagnóstico.",
    "options": [
      "Mioma subseroso",
      "Mioma intramural",
      "Pólipo endometrial",
      "Mioma submucoso",
      "Adenomiose"
    ],
    "correctAnswer": 4,
    "explanation": "Mulher multípara de 43 anos com sangramento aumentado e prolongado e dismenorreia moderada a intensa, com útero difusamente aumentado, amolecido e de superfície regular. O ultrassom mostra miométrio heterogêneo com áreas hipoecoicas, endométrio normal: quadro típico de adenomiose (endométrio ectópico dentro do miométrio). Há também um nódulo subseroso (mioma associado), mas ele não explica sangramento intenso nem a dismenorreia.",
    "commentary": "Mioma subseroso (A): não causa sangramento importante; fica para fora do útero.\n\nMioma intramural (B): daria útero nodular e irregular, não difusamente aumentado e amolecido.\n\nPólipo endometrial (C): o eco endometrial está normal.\n\nMioma submucoso (D): causa sangramento importante, mas deformaria a cavidade e o eco endometrial.",
    "reference": "FEBRASGO — Adenomiose / FIGO — Classificação PALM-COEIN",
    "tags": [
      "ginecologia",
      "adenomiose",
      "sangramento uterino anormal",
      "dismenorreia"
    ],
    "tip": "Útero globoso, amolecido, com dismenorreia e sangramento na multípara de 40+ anos: adenomiose."
  },
  {
    "id": "sespe2026-55",
    "topography": "5.1",
    "topic": "Climatério e menopausa",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 55 anos, G2P2 (cesarianas), refere ausência de menstruação há cinco anos. Procura o ambulatório de ginecologia com queixas de secura vaginal e desconforto genital na relação sexual desde então. O exame físico demonstra atrofia genital com discreta secreção vaginal hialina.\n\nQual das alternativas explica a alteração que leva ao quadro clínico descrito acima?",
    "options": [
      "Alargamento progressivo do introito",
      "Redução do nível local de glicogênio",
      "Aumento significativo do pH vaginal",
      "Aumento da população de lactobacilo",
      "Aumento das ectopias cervicais"
    ],
    "correctAnswer": 1,
    "explanation": "Na pós-menopausa, a queda do estrogênio afina o epitélio vaginal e reduz o glicogênio das células. Com menos glicogênio, diminuem os lactobacilos (que o transformam em ácido lático), o pH vaginal sobe e surgem secura, dispareunia e maior suscetibilidade a infecções: síndrome geniturinária da menopausa. O evento inicial da cadeia é a redução do glicogênio.",
    "commentary": "Alargamento do introito (A): ao contrário, o introito tende a estreitar.\n\nAumento do pH (C): ocorre, mas é consequência da queda do glicogênio e dos lactobacilos.\n\nAumento de lactobacilos (D): eles diminuem.\n\nAumento de ectopias (E): ectopia é ligada ao estrogênio; diminui após a menopausa.",
    "reference": "NAMS 2020 — Genitourinary syndrome of menopause / FEBRASGO — Climatério",
    "tags": [
      "ginecologia",
      "síndrome geniturinária da menopausa",
      "atrofia vaginal",
      "climatério"
    ],
    "tip": "Menos estrogênio → menos glicogênio → menos lactobacilo → pH sobe."
  },
  {
    "id": "sespe2026-56",
    "topography": "5.1",
    "topic": "Contracepção",
    "module": "Ginecologia e Obstetrícia",
    "text": "Casal procura o ambulatório de ginecologia para pedir opinião sobre os métodos contraceptivos. A mulher está no puerpério há um mês e ainda está amamentando.\n\nQual das alternativas abaixo é uma contraindicação?",
    "options": [
      "Anel vaginal",
      "Aleitamento-amenorreia",
      "DIU de levonorgestrel",
      "Camisinha",
      "Diafragma vaginal"
    ],
    "correctAnswer": 0,
    "explanation": "Lactante com 1 mês de pós-parto. O anel vaginal contém estrogênio e progestagênio; pelos critérios da OMS, métodos com estrogênio são categoria 4 (contraindicados) antes de 6 semanas pós-parto em mulheres que amamentam, por risco de trombose e redução da produção de leite.",
    "commentary": "LAM (B): método válido até 6 meses, com amamentação exclusiva e amenorreia.\n\nDIU de levonorgestrel (C): pode ser inserido logo após o parto ou após 4 semanas; não é contraindicado.\n\nCamisinha (D): sem contraindicação.\n\nDiafragma (E): recomenda-se esperar cerca de 6 semanas para a medida correta do tamanho, mas não é contraindicação médica.",
    "reference": "OMS — Critérios médicos de elegibilidade para uso de anticoncepcionais (5ª ed.) / FEBRASGO — Manual de Anticoncepção",
    "tags": [
      "ginecologia",
      "contracepção",
      "puerpério",
      "amamentação",
      "anel vaginal"
    ],
    "tip": "Amamentando e < 6 semanas: nada com estrogênio."
  },
  {
    "id": "sespe2026-57",
    "topography": "5.1",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 17 anos reclama de dores em baixo ventre irradiando para região lombar e face interna das coxas, sempre no início da menstruação. Informa que os sintomas ocorrem desde os 15 anos. Ainda apresenta cefaleia, diarreia e vômitos. Melhora dos sintomas a partir do terceiro dia. Menarca aos 14 anos. G0P0.\n\nConsiderando o diagnóstico acima, qual alternativa destaca um fator protetor?",
    "options": [
      "IMC menor que 20",
      "Contraceptivos orais",
      "Tabagismo",
      "Síndrome pré-menstrual",
      "Esterilização"
    ],
    "correctAnswer": 1,
    "explanation": "Adolescente com dor pélvica em cólica no início das menstruações, irradiada para lombar e coxas, com sintomas sistêmicos (cefaleia, diarreia, vômitos), que começou 1 a 2 anos após a menarca e melhora em 2–3 dias: dismenorreia primária, causada pelo excesso de prostaglandinas endometriais. Os contraceptivos orais combinados são fator protetor e tratamento, pois inibem a ovulação e afinam o endométrio, reduzindo as prostaglandinas.",
    "commentary": "IMC menor que 20 (A): baixo peso é fator de risco, não proteção.\n\nTabagismo (C): também é fator de risco.\n\nSíndrome pré-menstrual (D): frequentemente coexiste; não protege.\n\nEsterilização (E): a laqueadura não tem efeito protetor sobre a dismenorreia.",
    "reference": "FEBRASGO — Dismenorreia / ACOG Committee Opinion 760",
    "tags": [
      "ginecologia",
      "dismenorreia primária",
      "adolescência",
      "contraceptivos orais"
    ],
    "tip": "Dismenorreia primária: AINE e anticoncepcional combinado."
  },
  {
    "id": "sespe2026-58",
    "topography": "5.1",
    "module": "Ginecologia e Obstetrícia",
    "text": "Adolescente de 16 anos, G0P0, vai ao ambulatório de ginecologia com sua mãe por nunca ter menstruado. Nega atividade sexual. Chama atenção a ausência de caraterísticas sexuais secundários. Genitália externa feminina. Exames: BHCG negativo, FSH elevado, TSH e T4 livre normais, prolactina normal. Estradiol e testosterona baixos. Cariótipo 46 XY, USG apresenta gônadas em fita.\n\nConsiderando o quadro acima, qual o provável diagnóstico?",
    "options": [
      "Síndrome de Turner",
      "Síndrome de Savage",
      "Síndrome Hiperandrogênica",
      "Síndrome de Swyer",
      "Síndrome de Rokitansky"
    ],
    "correctAnswer": 3,
    "explanation": "Amenorreia primária com fenótipo feminino, sem caracteres sexuais secundários, FSH alto (hipogonadismo hipergonadotrófico), cariótipo 46,XY e gônadas em fita: disgenesia gonadal pura XY — síndrome de Swyer. A gônada disgenética não produz hormônio anti-mülleriano nem testosterona, então útero e trompas se formam e a genitália é feminina. Pelo risco de gonadoblastoma, as gônadas devem ser retiradas.",
    "commentary": "Síndrome de Turner (A): cariótipo 45,X, com baixa estatura e estigmas.\n\nSíndrome de Savage (B): ovários resistentes às gonadotrofinas, com cariótipo 46,XX e folículos presentes.\n\nSíndrome hiperandrogênica (C): haveria testosterona alta e virilização.\n\nRokitansky (E): agenesia mülleriana com cariótipo 46,XX, ovários normais e caracteres sexuais presentes.",
    "reference": "FEBRASGO — Amenorreia primária / Speroff",
    "tags": [
      "ginecologia",
      "amenorreia primária",
      "síndrome de Swyer",
      "disgenesia gonadal"
    ],
    "tip": "46,XY, fenótipo feminino, sem puberdade e gônadas em fita: Swyer → retirar as gônadas."
  },
  {
    "id": "sespe2026-59",
    "topography": "5.1",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente, 52 anos, G1P1, nunca amamentou. Procurou o ambulatório de ginecologia para avaliar o resultado de uma mamografia. O exame revela microcalcificações puntiformes, isodensas e agrupadas.\n\nDe acordo com o achado acima, qual a classificação mais adequada?",
    "options": [
      "BIRADS 0",
      "BIRADS 1",
      "BIRADS 2",
      "BIRADS 3",
      "BIRADS 4"
    ],
    "correctAnswer": 3,
    "explanation": "Microcalcificações puntiformes (arredondadas, < 0,5 mm), isodensas e agrupadas, sem exame anterior para comparação, têm baixo risco de malignidade (< 2%). Pelo BI-RADS, achados com essas características são classificados como provavelmente benignos (categoria 3), com controle em curto prazo (6 meses).",
    "commentary": "BI-RADS 0 (A): usado quando o exame é incompleto e precisa de incidências ou comparação; a descrição já é suficiente para classificar.\n\nBI-RADS 1 (B): mama sem alterações.\n\nBI-RADS 2 (C): achado sabidamente benigno (calcificações grosseiras, vasculares, de pele).\n\nBI-RADS 4 (E): calcificações amorfas, heterogêneas grosseiras, pleomórficas finas ou lineares; não puntiformes.\n\nObservação: puntiformes agrupadas em exame inicial também podem ser classificadas como BI-RADS 4A por alguns radiologistas, a depender do contexto; a banca seguiu a descrição de baixo risco.",
    "reference": "ACR BI-RADS Atlas, 5ª ed. / Colégio Brasileiro de Radiologia — Recomendações em mamografia",
    "tags": [
      "mastologia",
      "BI-RADS",
      "microcalcificações",
      "mamografia"
    ],
    "tip": "Calcificações puntiformes agrupadas: BI-RADS 3 (controle em 6 meses)."
  },
  {
    "id": "sespe2026-60",
    "topography": "5.1",
    "topic": "Câncer de colo uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 40 anos, G4P4, chega ao ambulatório de ginecologia para avaliar resultado de exame citológico do colo uterino. O exame revela ASCUS-H.\n\nDiante do achado, qual a melhor conduta?",
    "options": [
      "Colposcopia para biópsia",
      "Colposcopia com avaliação endometrial",
      "Biópsia de canal endocervical",
      "Repetir a citologia com seis meses",
      "Histerectomia simples"
    ],
    "correctAnswer": 0,
    "explanation": "ASC-H (células escamosas atípicas, não se pode afastar lesão de alto grau) tem risco relevante de NIC 2+, por isso a conduta das Diretrizes do INCA é encaminhar diretamente para colposcopia, com biópsia de qualquer área alterada, em qualquer idade.",
    "commentary": "Avaliação endometrial (B): é para células glandulares atípicas (AGC) em mulheres com mais de 35 anos ou com sangramento.\n\nBiópsia de canal endocervical isolada (C): não substitui a colposcopia.\n\nRepetir citologia em 6 meses (D): conduta para ASC-US (de significado indeterminado) em mulheres com 25–29 anos, não para ASC-H.\n\nHisterectomia (E): não há diagnóstico histológico; seria tratamento excessivo.",
    "reference": "INCA — Diretrizes brasileiras para o rastreamento do câncer do colo do útero (2016)",
    "tags": [
      "ginecologia",
      "câncer de colo uterino",
      "ASC-H",
      "colposcopia",
      "rastreamento"
    ],
    "tip": "ASC-H, LSIL em > 25 anos ou HSIL: colposcopia."
  },
  {
    "id": "sespe2026-61",
    "topography": "11",
    "topic": "Síndrome do desconforto respiratório neonatal",
    "module": "Pediatria",
    "text": "RN nasceu de parto vaginal, com APGAR 5 e 6, apresentando desconforto respiratório de imediato, caracterizado por gemência, tiragem subcostal e taquipneia. A idade gestacional pela DUM foi de 31 semanas. RN foi levado à UTI neonatal, com piora importante do desconforto respiratório, necessitando de intubação orotraqueal. Neonatologista solicitou RX de tórax. Genitora relatou perda de líquido vaginal um dia antes do parto, porém, como foi em pequena quantidade e não teve contrações, decidiu ficar em casa. Somente foi à maternidade 20 horas após a ruptura das membranas, em função da forte intensidade e da elevada frequência das contrações. RN nasceu cerca de duas horas após admissão da gestante na maternidade. Dados pré-natais: Gesta IV/ Aborto II. O cartão da gestante mostrou apenas quatro consultas, com exames realizados somente no primeiro trimestre (todos normais).\n\nSobre esse paciente, assinale a alternativa CORRETA.",
    "options": [
      "A antibioticoterapia deve ser evitada no momento, para não selecionar flora bacteriana resistente, visto que a clínica e a imagem excluem a possibilidade de pneumonia bacteriana.",
      "A prematuridade e o padrão radiológico tornam a Síndrome do Desconforto Respiratório um dos principais diagnósticos desse paciente.",
      "O RN deverá receber uma dose de surfactante exógeno o mais rapidamente possível. Estudos recentes mostram a ineficácia de doses subsequentes de surfactante, além do elevado risco de pneumotórax.",
      "A hipóxia perinatal, prematuridade e ausência de corticoide pré-natal são fatores de risco para uma produção insuficiente de surfactante pelos pneumócitos tipo I ainda na vida intrauterina.",
      "Considerando a idade gestacional de 31 semanas e a hipóxia, a meta terapêutica na ventilação mecânica deve ser a de manter a saturação de oxigênio (SatO₂) permanentemente entre 96 e 98%."
    ],
    "correctAnswer": 1,
    "explanation": "Prematuro de 31 semanas, sem corticoide antenatal, com desconforto respiratório desde o nascimento (gemência, tiragem, taquipneia) e piora progressiva até a intubação. A radiografia mostra infiltrado reticulogranular difuso (vidro moído) com broncogramas aéreos e baixo volume pulmonar: síndrome do desconforto respiratório (doença da membrana hialina), por deficiência de surfactante.\n\nAtenção: a bolsa rota há cerca de 22 horas e o pré-natal precário também tornam a sepse precoce/pneumonia possível, e o RN deve receber antibiótico empírico após colher culturas.",
    "commentary": "Evitar antibiótico (A): a bolsa rota > 18 horas, a prematuridade e o pré-natal incompleto indicam risco de sepse; a imagem não exclui pneumonia, que pode ser indistinguível da SDR.\n\nSó uma dose de surfactante (C): podem ser necessárias doses adicionais se persistir a necessidade de oxigênio ou ventilação.\n\nPneumócitos tipo I (D): o surfactante é produzido pelos pneumócitos tipo II.\n\nSatO₂ entre 96 e 98% (E): no prematuro, a meta é cerca de 90–95%, para evitar a toxicidade do oxigênio (retinopatia, displasia broncopulmonar).",
    "reference": "SBP — Reanimação e cuidados do RN prematuro / European Consensus Guidelines on RDS 2022",
    "tags": [
      "neonatologia",
      "síndrome do desconforto respiratório",
      "surfactante",
      "prematuridade"
    ],
    "tip": "Prematuro com vidro moído e broncograma: SDR. Não esqueça do antibiótico se bolsa rota > 18 h.",
    "image": "/images/sespe2026-61.webp"
  },
  {
    "id": "sespe2026-62",
    "topography": "9",
    "module": "Pediatria",
    "text": "Lactente masculino, 6 meses de idade, é levado à emergência pediátrica por sua mãe devido ao surgimento de “caroços” em pescoço e na virilha há cerca de 1 mês. Nos últimos dias, refere que o menor está mais irritado, além de perceber a respiração mais “rápida”. Relata que a criança apresentou picos febris em alguns dias ao longo desse período. O exame físico chamou a atenção do pediatra nos seguintes aspectos:\n• Leve palidez; irritabilidade durante todo o exame físico; linfonodos palpáveis em regiões cervical e inguinais bilaterais, com os maiores medindo cerca de 3 cm; frequência respiratória de 60 incursões por minuto; fígado palpável a 4 cm do rebordo costal direito. Solicitados exames:\n• Hemograma: HGB 10,5 g/dL VCM 70 fL HCM 24 pg\n• Leucócitos 12.450 mm3 / Plaquetas 165.000 / mm3\n• RX tórax (vide imagem abaixo). *O laudo do radiologista evidenciou, entre outros achados, lesões osteolíticas em ambas as escápulas. Foi sugerido realizar RX de crânio (vide abaixo).\n\nQual a principal hipótese diagnóstica para esse lactente diante dos achados clínicos e laboratoriais/ imagem?",
    "options": [
      "Linfohistiocitose hemofagocítica",
      "Paracoccidioidomicose",
      "Leucemia linfoide crônica",
      "Histiocitose de células de Langerhans",
      "Granulomatose eosinofílica com poliangeíte"
    ],
    "correctAnswer": 3,
    "explanation": "Lactente com febre, irritabilidade, linfonodomegalia generalizada, hepatomegalia, taquipneia, anemia, infiltrado pulmonar e lesões osteolíticas nas escápulas. O RX de crânio mostra múltiplas lesões líticas em \"saca-bocado\" (sem esclerose nas bordas). O conjunto de lesões ósseas líticas com doença multissistêmica (linfonodo, fígado, pulmão) sugere histiocitose de células de Langerhans. O diagnóstico é confirmado por biópsia (CD1a e langerina positivos).",
    "commentary": "Linfo-histiocitose hemofagocítica (A): febre, hepatoesplenomegalia e citopenias importantes, sem lesões ósseas líticas.\n\nParacoccidioidomicose (B): micose de adultos de área rural; rara em lactentes.\n\nLeucemia linfoide crônica (C): doença de idosos, não ocorre em lactentes.\n\nGranulomatose eosinofílica com poliangeíte (E): vasculite de adultos com asma e eosinofilia.",
    "reference": "Histiocyte Society — Evaluation and treatment guidelines for LCH / SBP — Histiocitose",
    "tags": [
      "oncologia pediátrica",
      "histiocitose de células de Langerhans",
      "lesões osteolíticas",
      "lactente"
    ],
    "tip": "Lesões líticas em saca-bocado no crânio de criança: histiocitose de Langerhans.",
    "image": "/images/sespe2026-62.webp"
  },
  {
    "id": "sespe2026-63",
    "topography": "13",
    "module": "Pediatria",
    "text": "Criança de 5 anos vem para atendimento em serviço de pediatria com a hipótese diagnóstica de transtorno do espectro autista. Segundo relato, ela não tem fala organizada compatível com a idade cronológica, nem aprendeu a escrever as letras ainda e tem dificuldade de acompanhar nas atividades de sala. Esse relato é verbal e, além dele, a genitora traz o encaminhamento do serviço de atenção básica com os dados de crescimento e marcos do desenvolvimento até o momento. Durante a avaliação, a criança contactua, mas nem sempre sustenta o olhar. Responde e respeita comandos, tira e veste a própria roupa e sabe contar de 1 a 20. Forma frases curtas, de 2 a 3 palavras, mas não desenvolve uma história. Tem tempo estimado de tela de 4 horas diárias desde bebê, quando era cuidado pela bisavó. Ficou brincando com um único brinquedo durante a entrevista com a mãe, mas conhecia os demais brinquedos apresentados. Possui avaliação auditiva, que descartou surdez.\n\nSua conduta inicial frente a esse quadro, além de orientar sobre o uso abusivo de telas, foi:",
    "options": [
      "Aplicar o MChat para auxílio no diagnóstico.",
      "Encaminhar para neurologista infantil.",
      "Solicitar um laudo completo da escola.",
      "Afastar a hipótese diagnóstica.",
      "Tratar o quadro com medicação."
    ],
    "correctAnswer": 2,
    "explanation": "Criança de 5 anos com atraso de linguagem, contato visual inconstante, brincadeira restrita a um único brinquedo e exposição excessiva a telas desde bebê: há suspeita de transtorno do espectro autista, e a exposição a telas pode agravar o atraso de linguagem e de interação. O gabarito considera correto, além de orientar a retirada das telas, aplicar o M-CHAT como instrumento de triagem para auxiliar o diagnóstico.\n\nAtenção: o M-CHAT-R/F é validado para crianças de 16 a 30 meses; aos 5 anos, o ideal seria outro instrumento (como o SCQ ou o CARS) e encaminhar para avaliação multiprofissional especializada. A SBP orienta não atrasar o encaminhamento nem a estimulação enquanto se confirma o diagnóstico.",
    "commentary": "Encaminhar ao neurologista (B): pode fazer parte da investigação, mas a banca priorizou a triagem estruturada.\n\nLaudo da escola (C): complementa, mas não é a conduta inicial.\n\nAfastar a hipótese (D): há sinais de alerta que precisam ser investigados.\n\nMedicação (E): não há tratamento medicamentoso para o núcleo do TEA; remédios são para comorbidades específicas.",
    "reference": "SBP — Manual de Orientação: Transtorno do Espectro do Autismo (2019) / Robins et al. — M-CHAT-R/F",
    "tags": [
      "pediatria",
      "transtorno do espectro autista",
      "M-CHAT",
      "telas",
      "desenvolvimento"
    ],
    "tip": "Sinais de TEA: triagem estruturada + estimulação + encaminhamento, sem esperar o diagnóstico fechado."
  },
  {
    "id": "sespe2026-64",
    "topography": "11",
    "topic": "Puericultura",
    "module": "Pediatria",
    "text": "Menino de 2 anos e 4 meses, portador de trissomia do 21, vem para consulta de rotina. Havia perdido a consulta anterior e, por isso, estava há quase um ano sem acompanhamento. A mãe negava queixas, e a criança atingia os marcos de crescimento e desenvolvimento apropriados para a idade e para a trissomia 21. Alimentava-se de forma variada e fazia natação duas vezes na semana. Traz ecocardiograma com descrição de forame oval patente e demais parâmetros dentro da normalidade.\n\nDiante do diagnóstico e da puericultura direcionado ao paciente, sua conduta baseada na orientação da Sociedade Brasileira de Pediatria neste momento foi a seguinte:",
    "options": [
      "Solicitar investigação de doença celíaca.",
      "Manter seguimento anual habitual sem solicitações de exames.",
      "Encaminhamento para endocrinologista pelo risco de hipotireoidismo.",
      "Solicitar seguimento com a cardiologia diante do diagnóstico de cardiopatia.",
      "Orientar a família a procurar escolas específicas para crianças portadoras de doenças genéticas."
    ],
    "correctAnswer": 0,
    "explanation": "Pelas diretrizes da SBP e do Ministério da Saúde para síndrome de Down, o rastreio de doença celíaca (antitransglutaminase IgA com IgA total) deve começar a partir dos 2 anos, mesmo sem sintomas, pela prevalência muito maior nessa população (5–10%). Aos 2 anos e 4 meses, sem rastreio recente, é a conduta indicada. Além disso, TSH e hemograma devem ser feitos anualmente.",
    "commentary": "Seguimento habitual sem exames (B): a síndrome de Down exige protocolo próprio de exames periódicos.\n\nEncaminhar ao endocrinologista (C): o hipotireoidismo é rastreado com TSH anual na própria puericultura; só se encaminha se houver alteração.\n\nSeguimento cardiológico (D): forame oval patente é variante normal, não cardiopatia.\n\nEscola especial (E): a recomendação é inclusão em escola regular.",
    "reference": "SBP — Diretrizes de atenção à saúde da pessoa com síndrome de Down (2020) / Ministério da Saúde (2013)",
    "tags": [
      "pediatria",
      "síndrome de Down",
      "doença celíaca",
      "puericultura"
    ],
    "tip": "Síndrome de Down: rastreie celíaca a partir dos 2 anos e TSH todo ano."
  },
  {
    "id": "sespe2026-65",
    "topography": "11",
    "module": "Pediatria",
    "text": "Lactente de 1 ano e 9 meses dá entrada no sistema de pronto atendimento devido a quadro de placas urticariformes espalhadas em todo o corpo há 2 dias. Genitora refere que há 1 dia trouxe paciente com quadro semelhante após a ingestão de biscoito contendo leite. O paciente é portador de alergia à proteína do leite de vaca e estava com os avós, que ofereceram um biscoito sem verificar os ingredientes. No atendimento prévio, a criança foi medicada com corticoide e anti-histamínico e enviado para casa com medicações prescritas por cinco dias. Ele havia melhorado inicialmente, mas acordou novamente com placas vermelhas e elevadas pelo corpo, motivando a nova ida ao serviço de saúde. A criança estava dormindo durante o atendimento, tinha lesões urticariformes no corpo e discreto edema em lábios. Ausculta cardíaca e pulmonar dentro da normalidade e abdome sem alterações. Ela havia tomado sopa no jantar, com boa aceitação.\n\nDiante da hipótese diagnóstica e da recorrência do quadro, o que seria recomendado se fazer nesse momento?",
    "options": [
      "Internar a criança devido ao risco iminente de gravidade.",
      "Manter as medicações e orientar genitora sobre o quadro.",
      "Solicitar exames laboratoriais para auxílio diagnóstico.",
      "Indicar a realização de adrenalina intramuscular.",
      "Realizar dose de corticoide venoso e internar."
    ],
    "correctAnswer": 1,
    "explanation": "Criança com alergia à proteína do leite de vaca que, após exposição acidental, teve urticária generalizada e leve edema labial, sem sintomas respiratórios, cardiovasculares ou gastrointestinais: reação alérgica cutânea, não anafilaxia. A recorrência das placas no dia seguinte, com a criança dormindo tranquila e exame normal, é comum, pois a urticária pode durar alguns dias mesmo após uma única exposição.\n\nA conduta é manter as medicações (anti-histamínico, corticoide pelo período prescrito) e orientar a família sobre leitura de rótulos, evitar o leite e reconhecer sinais de anafilaxia.",
    "commentary": "Internar (A): não há sinal de gravidade nem acometimento de outro sistema.\n\nExames laboratoriais (C): o diagnóstico é clínico; exames não mudam a conduta agora.\n\nAdrenalina IM (D): indicada em anafilaxia (envolvimento respiratório, cardiovascular ou gastrointestinal, ou edema de glote); não é o caso.\n\nCorticoide EV e internação (E): exagero para urticária sem gravidade.",
    "reference": "ASBAI/SBP — Consenso Brasileiro sobre Alergia Alimentar (2018) / WAO — Anaphylaxis guidance 2020",
    "tags": [
      "alergia",
      "alergia à proteína do leite de vaca",
      "urticária",
      "anafilaxia"
    ],
    "tip": "Urticária isolada sem outro sistema acometido não é anafilaxia: anti-histamínico e orientação."
  },
  {
    "id": "sespe2026-66",
    "topography": "4.1",
    "topic": "Síndrome nefrítica",
    "module": "Pediatria",
    "text": "Paciente masculino, 6 anos, encontra-se internado por uma Síndrome Nefrítica Pós-Estreptocócica.\n\nSobre a fisiopatologia dessa doença, assinale a alternativa CORRETA.",
    "options": [
      "Ocorre uma intensa resposta inflamatória endocapilar glomerular, com predomínio de polimorfonucleares, sendo poupada a região mesangial.",
      "A denominação ‘humps’ corresponde ao depósito de imunocomplexos na membrana basal glomerular, os quais podem ser identificados na imunofluorescência.",
      "A ativação do sistema renina-angiotensina promove vasodilatação na arteríola eferente do glomérulo, bem como um aumento da resistência da arteríola aferente.",
      "Ocorre uma importante lesão dos podócitos, e dessa forma, o ultrafiltrado glomerular é abundante em hemácias dismórficas (crenadas).",
      "A deposição de imunocomplexos desencadeia a ativação do sistema complemento, predominantemente pela via alternativa, resultando em quimiotaxia de neutrófilos, consumo sérico de C3 e proliferação celular que obstrui os capilares glomerulares."
    ],
    "correctAnswer": 4,
    "explanation": "Na glomerulonefrite pós-estreptocócica, imunocomplexos (antígenos do estreptococo com anticorpos) se depositam no glomérulo e ativam o complemento, predominantemente pela via alternativa. Isso consome C3 (que fica baixo e normaliza em 6–8 semanas), atrai neutrófilos e causa proliferação endocapilar que oblitera os capilares, reduzindo a filtração e gerando hematúria, edema, hipertensão e oligúria.",
    "commentary": "Mesângio poupado (A): a proliferação é difusa, endocapilar e também mesangial.\n\n\"Humps\" na membrana basal (B): os humps são depósitos subepiteliais (do lado externo da membrana), vistos na microscopia eletrônica.\n\nVasodilatação na eferente (C): a angiotensina II faz vasoconstrição da arteríola eferente.\n\nLesão de podócitos (D): é característica de síndrome nefrótica; a hematúria dismórfica decorre da lesão da parede capilar.",
    "reference": "SBP — Glomerulonefrite difusa aguda pós-estreptocócica / Nelson — Tratado de Pediatria",
    "tags": [
      "nefrologia pediátrica",
      "glomerulonefrite pós-estreptocócica",
      "síndrome nefrítica",
      "complemento"
    ],
    "tip": "GNPE: imunocomplexo → via alternativa → C3 baixo que normaliza em até 8 semanas."
  },
  {
    "id": "sespe2026-67",
    "topography": "11",
    "topic": "Puericultura",
    "module": "Pediatria",
    "text": "Qual dos exames listados abaixo NÃO é realizado pelo Teste do Pezinho oferecido pelo Sistema Único de Saúde para os recém-nascidos no Estado de Pernambuco?",
    "options": [
      "T4 livre",
      "17 alfa hidroxiprogesterona",
      "Tripsina imunorreativa",
      "Fenilalanina",
      "IgM para Toxoplasmose"
    ],
    "correctAnswer": 0,
    "explanation": "O Teste do Pezinho do SUS (Programa Nacional de Triagem Neonatal) rastreia, entre outras doenças: hipotireoidismo congênito (pelo TSH), fenilcetonúria (fenilalanina), hemoglobinopatias, fibrose cística (tripsina imunorreativa), hiperplasia adrenal congênita (17-OH-progesterona) e deficiência de biotinidase. Em Pernambuco, o teste inclui ainda a pesquisa de IgM para toxoplasmose congênita. O T4 livre não é dosado na triagem: o rastreio do hipotireoidismo é feito pelo TSH.",
    "commentary": "17-OH-progesterona (B): rastreia hiperplasia adrenal congênita.\n\nTripsina imunorreativa (C): rastreia fibrose cística.\n\nFenilalanina (D): rastreia fenilcetonúria.\n\nIgM para toxoplasmose (E): incluída no Teste do Pezinho em Pernambuco.",
    "reference": "Ministério da Saúde — Programa Nacional de Triagem Neonatal / Lei nº 14.154/2021",
    "tags": [
      "neonatologia",
      "triagem neonatal",
      "teste do pezinho",
      "hipotireoidismo congênito"
    ],
    "tip": "Teste do pezinho rastreia hipotireoidismo pelo TSH, não pelo T4 livre."
  },
  {
    "id": "sespe2026-68",
    "topography": "11",
    "topic": "Desenvolvimento neuropsicomotor",
    "module": "Pediatria",
    "text": "Você está trabalhando em um ambulatório de pediatria geral, e em um dos seus turnos atende os seguintes casos:\n• Caso 1: Menina, 5 anos, foi levada à consulta de rotina pelos pais. Relatam que estão passando por um divórcio e a filha está com dificuldades em se adaptar à nova rotina. Questionam o que podem fazer para ajudar nesse processo, pois percebem que a criança está mais quieta e triste.\n• Caso 2: Menino, 8 anos, chega à consulta acompanhado por avó. Cuidadora traz como queixa que neto está mais agressivo, desde que o pai foi preso. Atualmente está morando com os avós, e a mãe visita-o durante a semana, dependendo dos horários de trabalho.\n• Caso 3: Criança do sexo masculino, 3 anos, iniciou há um mês a vida escolar. Genitora refere que, nos primeiros dias de adaptação, chorou pedindo para voltar para casa. Hoje, no entanto, já conta quais brincadeiras fizeram na escola e fala dos amigos que fez. A mãe está preocupada, pois ainda precisou buscá-lo mais cedo um dia na última semana devido aos pedidos da criança.\n\nAo fim do expediente, você reflete sobre os efeitos dos fatores estressantes no desenvolvimento infantil e classifica, respectivamente, os pacientes acima em relação aos tipos de estresse da seguinte forma:",
    "options": [
      "Tóxico, tolerável e tóxico",
      "Positivo, tóxico, tolerável",
      "Tolerável, tóxico e positivo",
      "Positivo, tolerável e tolerável",
      "Tóxico, tóxico, positivo"
    ],
    "correctAnswer": 2,
    "explanation": "O Center on the Developing Child (Harvard) classifica o estresse infantil em três tipos:\n\n• Positivo: breve e leve, próprio do desenvolvimento normal (por exemplo, o primeiro dia na escola), com resposta fisiológica rápida.\n• Tolerável: mais intenso e duradouro (divórcio, morte de familiar), mas amortecido por relações de apoio, sem dano duradouro.\n• Tóxico: adversidade intensa, frequente ou prolongada, sem proteção adequada de adultos (violência, prisão de um dos pais, negligência), capaz de alterar o desenvolvimento cerebral.\n\nCaso 1 (divórcio com pais atentos e preocupados): tolerável. Caso 2 (pai preso, agressividade, mudança de casa e mãe pouco presente): tóxico. Caso 3 (adaptação escolar já superada): positivo.\n\nSequência: tolerável, tóxico e positivo.",
    "commentary": "A (tóxico, tolerável, tóxico): classifica a adaptação escolar como tóxica.\n\nB (positivo, tóxico, tolerável): o divórcio não é estresse positivo; a adaptação à escola é.\n\nD (positivo, tolerável, tolerável): subestima o caso 2 e classifica errado os outros.\n\nE (tóxico, tóxico, positivo): o divórcio com pais que buscam ajuda é tolerável.",
    "reference": "SBP — Documento científico: Estresse tóxico na infância / Harvard Center on the Developing Child",
    "tags": [
      "pediatria",
      "estresse tóxico",
      "desenvolvimento infantil",
      "experiências adversas"
    ],
    "tip": "Estresse positivo (curto), tolerável (com apoio) e tóxico (sem proteção, prolongado)."
  },
  {
    "id": "sespe2026-69",
    "topography": "11",
    "topic": "Desenvolvimento neuropsicomotor",
    "module": "Pediatria",
    "text": "Durante um turno de atendimento na Unidade Básica de Saúde, você atende 4 crianças com menos de 3 anos em que a preocupação principal do cuidador é se o desenvolvimento está adequado.\n• Criança 1: Sexo feminino, 5 meses; leva objetos à boca, responde ativamente ao contato social, não senta sem apoio, vira sozinha para a posição de bruços.\n• Criança 2: Sexo masculino, 14 meses; anda bem com apoio, mas não tem bom equilíbrio quando sem apoio; coloca blocos dentro da caneca por meio da demonstração e fala; durante a consulta, fala bola e aponta para ela; faz movimento de pinça.\n• Criança 3: Sexo feminino, 3 meses; olha para você de forma evidente; desencosta o queixo da superfície quando de bruços; não abre as mãos espontaneamente; não segura objetos quando encostados em suas mãos; apresenta sorriso social e emite sons como se quisesse conversar.\n• Criança 4: Sexo masculino, 16 meses; não usa a colher ou garfo para levar comida em direção à boca, empilha dois cubos e os coloca dentro da caixa quando solicitado; abre portas e gavetas dando passos para trás; fala apenas água e não, além de papai e mamãe; aponta quando quer algo.\n\nDe acordo com o Ministério da Saúde, qual criança tem indicação de ser encaminhada, de imediato, à equipe multiprofissional e/ou à rede de atenção especializada para avaliação do desenvolvimento?",
    "options": [
      "Criança 1",
      "Criança 2",
      "Criança 3",
      "Criança 4",
      "Nenhuma"
    ],
    "correctAnswer": 2,
    "explanation": "Pela Caderneta da Criança do Ministério da Saúde, aos 3 meses espera-se que a criança abra as mãos e segure objetos colocados na palma; as mãos fechadas e a falta de preensão aos 3 meses são sinal de alerta motor. A criança 3 não abre as mãos espontaneamente nem segura objetos, o que indica encaminhamento imediato para avaliação, mesmo com sorriso social e balbucio presentes.",
    "commentary": "Criança 1 (A): aos 5 meses, sentar sem apoio ainda não é esperado (marco de 6–9 meses).\n\nCriança 2 (B): aos 14 meses, andar sem equilíbrio perfeito e falar poucas palavras está dentro do esperado.\n\nCriança 4 (D): aos 16 meses, usar colher é marco mais tardio; empilhar cubos, apontar e falar algumas palavras está adequado.\n\nNenhuma (E): a criança 3 tem sinal de alerta.",
    "reference": "Ministério da Saúde — Caderneta da Criança (2024) / SBP — Vigilância do desenvolvimento",
    "tags": [
      "pediatria",
      "desenvolvimento neuropsicomotor",
      "marcos do desenvolvimento",
      "sinais de alerta"
    ],
    "tip": "Mãos sempre fechadas e sem preensão aos 3 meses: sinal de alerta."
  },
  {
    "id": "sespe2026-70",
    "topography": "11",
    "topic": "Aleitamento materno",
    "module": "Pediatria",
    "text": "Lactante de 25 anos busca atendimento em Unidade Básica de Saúde, com queixa de febre, mal-estar e dor em mama direita há cerca de 18 horas para orientação. Relata que está no 15º dia pós-parto cesariano, e seu filho encontra-se em aleitamento materno exclusivo. Ao exame físico: mama direita com área hiperemiada e edemaciada em quadrantes superiores, com dor ao toque, sem área de flutuação à palpação, ausência de fissura mamilar; mama esquerda túrgida e sem outras alterações.\n\nTendo em vista a principal hipótese diagnóstica para esse caso, qual o manejo inicial mais adequado?",
    "options": [
      "Antibioticoterapia oral, paracetamol e suspensão temporária da amamentação",
      "Ibuprofeno, uso de bomba extratora de horário e massagem vigorosa antes da mamada",
      "Compressa morna antes da mamada, uso de sutiã com alça firme e larga e ibuprofeno",
      "Paracetamol, antibioticoterapia parenteral e compressa fria antes das mamadas",
      "Iniciar a mamada pela mama sadia, antibioticoterapia tópica e ibuprofeno"
    ],
    "correctAnswer": 2,
    "explanation": "Lactante no 15º dia pós-parto com área mamária hiperemiada, edemaciada e dolorosa, febre e mal-estar há 18 horas, sem fissura e sem abscesso: mastite em fase inicial (inflamatória). Nas primeiras 24 horas, sem sinais de infecção grave, o manejo é não antibiótico: manter a amamentação (esvaziar a mama), analgésico/anti-inflamatório (ibuprofeno), sutiã firme e confortável e compressas. Se não houver melhora em 12–24 horas ou se piorar, inicia-se antibiótico (cefalexina).\n\nObservação: o protocolo de 2022 da Academy of Breastfeeding Medicine prefere compressas frias e desaconselha massagem vigorosa e esvaziamento excessivo; a alternativa do gabarito cita compressa morna antes da mamada, que é a orientação clássica para facilitar a saída do leite.",
    "commentary": "Suspender a amamentação (A): não há indicação; amamentar ajuda a esvaziar a mama e trata a mastite.\n\nBomba de horário e massagem vigorosa (B): estimulam hiperprodução e pioram o edema e a inflamação.\n\nAntibiótico parenteral (D): só em quadros graves ou com sepse.\n\nAntibiótico tópico (E): não trata mastite.",
    "reference": "Ministério da Saúde — Cadernos de Atenção Básica nº 23 / Academy of Breastfeeding Medicine — Protocol #36 (2022)",
    "tags": [
      "aleitamento materno",
      "mastite",
      "puerpério",
      "manejo da lactação"
    ],
    "tip": "Mastite < 24 h sem gravidade: manter amamentação, anti-inflamatório e reavaliar; antibiótico se não melhorar."
  },
  {
    "id": "sespe2026-71",
    "topography": "10",
    "topic": "Tuberculose",
    "module": "Pediatria",
    "text": "Adolescente de 14 anos evoluiu com hepatotoxicidade, no 10º dia de tratamento para tuberculose com esquema RIPE, o que levou à suspensão de seu tratamento por 20 dias.\n\nNa condução clínica, após melhora das transaminases, a melhor conduta é a seguinte:",
    "options": [
      "Refazer teste tuberculínico, Rx de tórax e cultura de escarro.",
      "O tratamento deve ser reiniciado com as drogas previamente usadas.",
      "O tratamento deve ser substituído por outros fármacos tuberculostáticos.",
      "O esquema deve ser reintroduzido após avaliação de exame de sensibilidade.",
      "O tratamento deve ser reintroduzido na sequência R/E/I/P e acrescentado 20 dias do esquema suspenso."
    ],
    "correctAnswer": 4,
    "explanation": "Hepatotoxicidade pelo esquema RIPE, com suspensão do tratamento. Pelo Manual de Recomendações do Ministério da Saúde, após a melhora clínica e das transaminases o esquema é reintroduzido de forma sequencial, para identificar a droga responsável: primeiro rifampicina com etambutol; depois de 3 a 7 dias, isoniazida; e depois de mais 3 a 7 dias, pirazinamida (a mais hepatotóxica). O tempo em que o tratamento ficou suspenso deve ser acrescentado ao final.",
    "commentary": "Repetir PPD, RX e cultura (A): o diagnóstico está feito; não muda a conduta da hepatotoxicidade.\n\nReiniciar todas as drogas juntas (B): se as enzimas subirem de novo, não se sabe qual droga causou.\n\nTrocar por outros fármacos (C): reservado para hepatopatia grave ou falha da reintrodução.\n\nTeste de sensibilidade (D): avalia resistência bacteriana, não toxicidade ao paciente.",
    "reference": "Ministério da Saúde — Manual de Recomendações para o Controle da Tuberculose no Brasil (2019)",
    "tags": [
      "tuberculose",
      "hepatotoxicidade",
      "esquema RIPE",
      "reintrodução sequencial"
    ],
    "tip": "Hepatite por RIPE: reintroduz RE → I → P, um de cada vez."
  },
  {
    "id": "sespe2026-72",
    "topography": "11",
    "topic": "Puericultura",
    "module": "Pediatria",
    "text": "Criança do sexo masculino, 7 anos, é levada aos pais à consulta pediátrica. Eles trazem como queixa que acham o filho muito pequeno para a idade e estão preocupados. Durante anamnese, relatam que paciente nasceu termo, peso do nascimento: 3,1 Kg, negaram problemas na gestação e durante o parto. Teve um internamento prévio por pneumonia com 1 ano, mas sem necessidade de UTI. Quanto à alimentação, cuidadores relatavam um cardápio variado, com recusa para alguns alimentos, principalmente frutas e legumes. Ao exame físico, não identificada nenhuma alteração. Desenvolvimento puberal de Tanner: G1P1. Dados antropométricos: Peso = 25 Kg, Altura = 110 cm, Altura materna: 151 cm, Altura paterna: 165 cm. Pais não lembravam sobre dados da puberdade.\n\nCom base nos dados clínicos, qual seria sua conduta inicial para a queixa dos pais?",
    "options": [
      "Tranquilizaria os pais quanto à possível hipótese de baixa estatura familiar, solicitaria radiografia de mão e punho esquerdo para avaliar idade óssea e definir necessidade de prosseguir investigação, e acompanharia velocidade de crescimento.",
      "Como escolar com baixa estatura de acordo com a curva de crescimento, solicitaria exames laboratoriais para descartar doenças inflamatórias e endócrinas e acompanharia velocidade de crescimento.",
      "Diante da possibilidade de retardo constitucional do crescimento, aguardaria o paciente iniciar a puberdade para avaliar a velocidade de crescimento e acompanhar a recuperação da estatura com o estirão dessa faixa etária.",
      "Encaminharia paciente à endocrinologia pediátrica para a condução do caso por especialista e avaliação de intervenções hormonais, pois paciente abaixo do seu alvo genético e velocidade de crescimento alterada.",
      "Paciente com estatura adequada para a idade, não sendo necessária nenhuma investigação adicional. Orientar apenas o acompanhamento mensal da velocidade de crescimento."
    ],
    "correctAnswer": 0,
    "explanation": "Menino de 7 anos com altura de 110 cm (abaixo do escore z −2 na curva da OMS), peso compatível, exame normal e pais baixos (alvo genético: (151 + 165 + 13)/2 ≈ 164,5 cm, também baixo). A primeira hipótese é baixa estatura familiar, mas, como está abaixo de −2 DP, é preciso confirmar com idade óssea (que na baixa estatura familiar é compatível com a cronológica) e acompanhar a velocidade de crescimento por 6 a 12 meses antes de investigar mais.",
    "commentary": "Exames laboratoriais de imediato (B): sem velocidade de crescimento e idade óssea, a investigação extensa não é o primeiro passo.\n\nEsperar a puberdade (C): não se pode supor atraso constitucional sem idade óssea e acompanhamento.\n\nEncaminhar à endocrinologia para hormônio (D): não há velocidade de crescimento documentada como alterada.\n\nEstatura adequada (E): 110 cm aos 7 anos está abaixo de −2 DP; acompanhamento mensal também não é o intervalo adequado para medir velocidade.",
    "reference": "SBP — Manual de Orientação: Baixa estatura / OMS — Curvas de crescimento 2007",
    "tags": [
      "pediatria",
      "baixa estatura",
      "idade óssea",
      "alvo genético",
      "crescimento"
    ],
    "tip": "Baixa estatura: alvo genético, idade óssea e velocidade de crescimento antes de qualquer exame.",
    "image": "/images/sespe2026-72.webp"
  },
  {
    "id": "sespe2026-73",
    "topography": "14",
    "topic": "Emergências pediátricas",
    "module": "Pediatria",
    "text": "Recém-nascido termo nasceu de parto cesáreo de urgência por prolapso de cordão e com líquido amniótico meconial. Apresentou-se hipotônico e sem movimentos respiratórios. Foi colocado sob fonte de calor radiante e secado. Foram iniciadas as manobras de reanimação e compressões torácicas, realizada intubação orotraqueal com ventilação com pressão positiva, havendo boa expansibilidade. Após 30 segundos de aplicação destas medidas, permaneceu sem resposta adequada.\n\nAssinale a alternativa que indica o próximo passo na assistência a essa criança.",
    "options": [
      "Realizar expansão com 10ml/kg de Solução fisiológica 0,9%.",
      "Administrar adrenalina via acesso venoso umbilical.",
      "Manter procedimentos por 2 minutos e reavaliar.",
      "Realizar aspiração das vias aéreas devido ao mecônio.",
      "Administrar bicarbonato de sódio, já que a parada cardiorrespiratória foi prolongada."
    ],
    "correctAnswer": 1,
    "explanation": "Recém-nascido em reanimação com intubação, ventilação adequada (boa expansibilidade) e compressões torácicas, sem resposta. Quando a frequência cardíaca segue abaixo de 60 bpm apesar de ventilação efetiva e compressões coordenadas, o próximo passo é a adrenalina, de preferência por via endovenosa pelo cateter venoso umbilical (0,01–0,03 mg/kg).\n\nObservação: o programa da SBP recomenda reavaliar após 60 segundos de compressões com ventilação adequada antes da adrenalina; o enunciado fala em 30 segundos, mas o gabarito considera a adrenalina como próximo passo.",
    "commentary": "Expansão volêmica (A): só se houver suspeita de hipovolemia (perda de sangue, palidez, pulsos fracos) e após a adrenalina.\n\nManter por 2 minutos (C): a reavaliação é feita a cada 60 segundos; sem resposta, indica-se adrenalina, sem esperar 2 minutos.\n\nAspirar o mecônio (D): a aspiração traqueal de rotina no mecônio não é mais recomendada; a ventilação já está efetiva.\n\nBicarbonato (E): não é recomendado na reanimação neonatal.",
    "reference": "SBP — Programa de Reanimação Neonatal: Reanimação do RN ≥ 34 semanas (2022)",
    "tags": [
      "neonatologia",
      "reanimação neonatal",
      "adrenalina",
      "cateter umbilical"
    ],
    "tip": "RN com FC < 60 apesar de VPP + compressões por 60 s: adrenalina EV (cateter umbilical)."
  },
  {
    "id": "sespe2026-74",
    "topography": "11",
    "topic": "Sepse neonatal",
    "module": "Pediatria",
    "text": "A sepse neonatal é causa importante de morte no período neonatal. Um fator que modifica a evolução clínica e previne a sepse precoce por estreptococos do grupo B (EGB) é a realização de antibiótico profilático intraparto. Os casos abaixo são recém-nascidos (RN) termo, cujas mães não receberam profilaxia antibiótica intraparto para EGB.\n\nAssinale a alternativa que apresenta uma situação na qual a profilaxia estaria indicada, conforme orientação da SBP.",
    "options": [
      "Gestante que apresentou infecção urinária por E. coli no terceiro trimestre, tratada por 6 dias e sem controle de cura.",
      "Gestante submetida à cesariana fora do trabalho de parto, com bolsa íntegra, mas com cultura positiva para EGB na gestação.",
      "Gestante com tempo de bolsa rota de 13 horas, sem outros sinais ou sintomas e sem cultura para EGB conhecida.",
      "Gestante com bacteriúria assintomática por EGB no sétimo mês de gestação, que foi adequadamente tratada.",
      "Gestante com cultura negativa para EGB nesta gestação, mas que teve cultura positiva em gestação prévia."
    ],
    "correctAnswer": 3,
    "explanation": "A profilaxia intraparto contra o estreptococo do grupo B (penicilina ou ampicilina) é indicada quando: cultura positiva para EGB nesta gestação; bacteriúria por EGB em qualquer momento desta gestação (mesmo tratada — indica colonização intensa); filho anterior com doença invasiva por EGB; ou cultura desconhecida com fatores de risco (prematuridade, bolsa rota ≥ 18 horas ou febre materna ≥ 38 °C).",
    "commentary": "ITU por E. coli (A): não tem relação com EGB.\n\nCesárea eletiva com bolsa íntegra (B): sem trabalho de parto e com membranas íntegras, a profilaxia não é indicada, mesmo com cultura positiva.\n\nBolsa rota de 13 horas (C): o limite é 18 horas.\n\nCultura positiva em gestação anterior (E): não indica profilaxia se a cultura desta gestação for negativa.",
    "reference": "SBP — Prevenção da doença perinatal pelo estreptococo do grupo B / ACOG Committee Opinion 797",
    "tags": [
      "neonatologia",
      "estreptococo do grupo B",
      "profilaxia intraparto",
      "sepse neonatal precoce"
    ],
    "tip": "Bacteriúria por EGB nesta gestação = profilaxia intraparto, mesmo se tratada."
  },
  {
    "id": "sespe2026-75",
    "topography": "9",
    "topic": "Anemia hemolítica",
    "module": "Pediatria",
    "text": "Pré-escolar de 3 anos, feminina, está internada para investigação de anemia. Os exames laboratoriais solicitados inicialmente estão listados abaixo:\n• Hemograma: HGB 6,0 g/dL / VCM 84 fL / HCM 30 pg / leucócitos: 9.830 mm3 / plaquetas: 234.000 mm3\n• Ferritina: 87 microg/L\n• Reticulócitos: 8,5%\n• DHL: 780 U/L\n• Bilirrubinas totais: 4,3 mg/dL/ bilirrubina indireta: 3,7 mg/dL\n• Vitamina B12 e ácido fólico sérico: dentro da normalidade Apenas com os dados acima, são todas possíveis causas da anemia desta criança as citadas abaixo, EXCETO:",
    "options": [
      "esferocitose.",
      "anemia de Fanconi.",
      "anemia falciforme.",
      "deficiência de G6PD.",
      "anemia hemolítica autoimune."
    ],
    "correctAnswer": 1,
    "explanation": "A criança tem anemia normocítica com sinais de hemólise: reticulocitose (8,5%), DHL alto e hiperbilirrubinemia indireta. Esferocitose, anemia falciforme, deficiência de G6PD e anemia hemolítica autoimune são causas de anemia hemolítica. A anemia de Fanconi é uma falência medular hereditária: cursa com reticulócitos baixos, geralmente pancitopenia e macrocitose, sem hemólise. É a exceção.",
    "commentary": "Esferocitose (A): hemólise extravascular por defeito de membrana.\n\nAnemia falciforme (C): hemólise crônica por hemoglobina S.\n\nDeficiência de G6PD (D): hemólise por estresse oxidativo.\n\nAnemia hemolítica autoimune (E): hemólise por anticorpos, com Coombs direto positivo.",
    "reference": "SBP — Anemias hemolíticas na infância / Nathan and Oski's — Hematology of Infancy and Childhood",
    "tags": [
      "hematologia pediátrica",
      "anemia hemolítica",
      "anemia de Fanconi",
      "reticulócitos"
    ],
    "tip": "Reticulócito alto = medula responde (hemólise ou sangramento). Fanconi = medula falha."
  },
  {
    "id": "sespe2026-76",
    "topography": "1.1",
    "topic": "Meningite",
    "module": "Pediatria",
    "text": "Escolar de 8 anos, sem marca de BCG é admitido na emergência com estado geral ruim e queixas de dor de cabeça, febre e vômitos iniciados há 12 horas. Esquema vacinal do PNI atualizado. Após ser examinado, recebeu o diagnóstico de meningite. O Pediatra iniciou medidas de estabilização, corticoide e esquema de antibiótico com vancomicina e ceftriaxone e solicitou coleta de LCR, o qual evidenciou:\n• Aspecto turvo\n• 1.200 células/mm3 (80% de polimorfonucleares)\n• Glicorraquia de 28 mg/dL\n• Proteinorraquia de 150 mg/dL\n• Bacterioscopia: diplococos Gram positivo.\n\nApós receber os dados do LCR, a conduta mais adequada, de acordo com as mais recentes orientações da SBP, é a seguinte:",
    "options": [
      "manter o esquema já iniciado.",
      "suspender a vancomicina e manter apenas o ceftriaxone.",
      "suspender o ceftriaxone e manter apenas a vancomicina.",
      "modificar esquema para penicilina cristalina em dose alta (400.000 UI/kg/dia), associada à gentamicina (5 mg/kg/dia).",
      "suspender vancomicina, manter ceftriaxone e associar esquema para tuberculose enquanto aguarda resultado da cultura."
    ],
    "correctAnswer": 0,
    "explanation": "Meningite bacteriana em criança com bacterioscopia de diplococos Gram-positivos: pneumococo. Pela SBP, a terapia empírica para pneumococo deve ser vancomicina + ceftriaxona (cobrindo cepas com resistência à penicilina e às cefalosporinas), mantidas até o resultado do antibiograma. Só depois, conforme a sensibilidade, pode-se suspender a vancomicina ou trocar por penicilina.",
    "commentary": "Suspender a vancomicina (B): sem antibiograma, há risco de pneumococo resistente à ceftriaxona.\n\nSó vancomicina (C): a vancomicina tem penetração liquórica variável e não deve ser usada isoladamente.\n\nPenicilina com gentamicina (D): esquema para meningite neonatal; e a penicilina não é segura sem antibiograma.\n\nEsquema para tuberculose (E): o líquor é de meningite bacteriana aguda, com bacterioscopia positiva.",
    "reference": "SBP — Meningites bacterianas: diagnóstico e tratamento / IDSA — Bacterial meningitis guideline",
    "tags": [
      "infectologia pediátrica",
      "meningite bacteriana",
      "pneumococo",
      "vancomicina",
      "ceftriaxona"
    ],
    "tip": "Diplococo Gram + no líquor: pneumococo → vancomicina + ceftriaxona até o antibiograma."
  },
  {
    "id": "sespe2026-77",
    "topography": "11",
    "topic": "Pneumonia infantil",
    "module": "Pediatria",
    "text": "Uma criança de 6 anos de idade, em tratamento para pneumonia adquirida na comunidade, evolui com dor abdominal, vômitos, febre persistente e queda da saturação de O₂ para 92% em ar ambiente após 72h de antibiótico em dose adequada, com boa adesão ao tratamento. Realiza radiografia de tórax que mostra obliteração moderada em seio costofrênico de hemitórax esquerdo.\n\nQual a conduta inicial mais indicada?",
    "options": [
      "Aguardar mais 24 horas",
      "Realizar drenagem pleural imediata",
      "Associar outro antibiótico, pois derrame pleural é autolimitado",
      "Indicar tomografia computadorizada de tórax para guiar a drenagem",
      "Realizar ultrassonografia de tórax para avaliar volume e característica do derrame"
    ],
    "correctAnswer": 4,
    "explanation": "Criança com pneumonia que, após 72 horas de antibiótico adequado, mantém febre e piora (dor, vômitos, queda da saturação) e tem obliteração do seio costofrênico: provável derrame parapneumônico. O próximo passo é a ultrassonografia de tórax, que mede o volume, mostra se há septações e loculações e orienta a punção ou drenagem.",
    "commentary": "Aguardar mais 24 horas (A): a piora após 72 horas exige investigação.\n\nDrenagem imediata (B): antes é preciso caracterizar o derrame (volume, septações); derrames pequenos podem não precisar de drenagem.\n\nAssociar antibiótico sem investigar (C): o derrame não é necessariamente autolimitado, e o tratamento pode exigir drenagem.\n\nTomografia (D): expõe à radiação e não é necessária; o ultrassom é o exame de escolha para orientar a drenagem.",
    "reference": "SBP — Derrame pleural parapneumônico / BTS — Pleural infection in children",
    "tags": [
      "pediatria",
      "pneumonia infantil",
      "derrame pleural parapneumônico",
      "ultrassonografia de tórax"
    ],
    "tip": "Pneumonia sem melhora em 72 h com derrame: ultrassom de tórax."
  },
  {
    "id": "sespe2026-78",
    "topography": "3.1",
    "module": "Pediatria",
    "text": "Um paciente, 8 anos, evoluindo com vômitos diários, seletividade alimentar, disfagia para sólidos (só consegue ingerir alimentos em pequenos pedaços e sempre se alimenta tomando água ou suco). Tem dermatite atópica e asma, sendo acompanhado em um ambulatório de alergologia pediátrica.\n\nO diagnóstico mais provável e exame necessário para confirmar é o seguinte:",
    "options": [
      "Refluxo gastroesofágico/ estudo contrastado do esôfago, estômago e duodeno (EED).",
      "Esofagite eosinofílica/ Endoscopia digestiva alta com biópsias de esôfago.",
      "Acalásia congênita/ pHmetria esofágica de dois canais.",
      "Estenose esofágica / estudo contrastado do esôfago, estômago e duodeno (EED).",
      "Gastrite por Helicobacter pylori / Teste respiratório da ureia."
    ],
    "correctAnswer": 1,
    "explanation": "Escolar atópico (asma, dermatite atópica) com disfagia para sólidos, vômitos e estratégias de compensação (cortar a comida em pedaços pequenos, beber líquido para engolir): quadro típico de esofagite eosinofílica. O diagnóstico é feito por endoscopia digestiva alta com biópsias em vários níveis do esôfago, mostrando ≥ 15 eosinófilos por campo de grande aumento.",
    "commentary": "Refluxo com EED (A): o refluxo não costuma causar disfagia com impactação, e o EED não diagnostica esofagite.\n\nAcalasia com pHmetria (C): a acalasia é rara na infância e se diagnostica por manometria.\n\nEstenose esofágica (D): exigiria causa (cáustico, cirurgia), e a esofagite eosinofílica pode ser a causa da estenose.\n\nH. pylori (E): não causa disfagia.",
    "reference": "Consenso internacional de esofagite eosinofílica (AGREE 2018) / SBP",
    "tags": [
      "gastroenterologia pediátrica",
      "esofagite eosinofílica",
      "disfagia",
      "atopia"
    ],
    "tip": "Criança atópica com disfagia para sólidos: esofagite eosinofílica → EDA com biópsias."
  },
  {
    "id": "sespe2026-79",
    "topography": "11",
    "topic": "Calendário vacinal",
    "module": "Pediatria",
    "text": "Segundo a Diretriz da Sociedade Brasileira de Pediatria (SBP) de 2025, sobre a prevenção da doença pneumocócica, qual é o esquema vacinal ideal recomendado para crianças saudáveis (sempre que possível) visando ampliar a proteção contra sorotipos emergentes como o 19A, 6 A/C e o 3?",
    "options": [
      "Esquema 2+1 (2 e 4 meses + reforço aos 12 meses) com VPC10.",
      "Esquema 3+1 (2, 4 e 6 meses + reforço entre 12-15 meses) com VPC13, VPC15 ou VPC20.",
      "Esquema 2+1 (2 e 4 meses + reforço aos 12 meses) com VPP23.",
      "Dose única de VPC20 aos 2 meses de idade.",
      "Esquema 3+0 (2, 4 e 6 meses sem reforço) com escolha da VPC13."
    ],
    "correctAnswer": 1,
    "explanation": "A SBP recomenda, sempre que possível, o esquema 3+1 (2, 4 e 6 meses com reforço aos 12–15 meses) com vacinas pneumocócicas conjugadas de maior valência — VPC13, VPC15 ou VPC20 —, que incluem sorotipos emergentes como 19A, 6A e 3, não cobertos pela VPC10 do PNI.",
    "commentary": "VPC10 em 2+1 (A): é o esquema do PNI, mas a VPC10 não cobre 19A e 3.\n\nVPP23 em lactentes (C): vacina polissacarídica não é imunogênica abaixo de 2 anos.\n\nDose única de VPC20 (D): lactentes precisam de esquema com várias doses.\n\n3+0 sem reforço (E): o reforço é necessário para memória imunológica duradoura.",
    "reference": "SBP — Calendário de vacinação 2025 / SBIm — Calendário da criança",
    "tags": [
      "pediatria",
      "vacinação",
      "pneumococo",
      "vacinas conjugadas"
    ],
    "tip": "SBP: pneumocócica conjugada de maior valência (13, 15 ou 20) em 3+1."
  },
  {
    "id": "sespe2026-80",
    "topography": "11",
    "topic": "Bronquiolite",
    "module": "Pediatria",
    "text": "Uma gestante de 34 anos, G2/P1, comparece à consulta de pré-natal na 31ª semana de gestação. O obstetra discute as estratégias de prevenção da Bronquiolite Viral Aguda pelo Vírus Sincicial Respiratório (VSR) para o futuro recém-nascido.\n\nConsiderando as recomendações atuais da Sociedade Brasileira de Pediatria (SBP) para o uso do novo anticorpo monoclonal nirsevimabe para o lactente e do programa Nacional de Imunizações para o uso da vacina bivalente recombinante de pré-fusão F para gestantes, assinale a alternativa CORRETA.",
    "options": [
      "A estratégia preferencial para maximizar a proteção consiste na administração da vacina de VSR para a gestante após 34ª semana e, obrigatoriamente, na administração do nirsevimabe para o recém-nascido na maternidade, independentemente da idade gestacional ao nascer, garantindo \"dupla barreira imunológica\".",
      "Caso a gestante opte por receber a vacina contra o VSR nesta consulta e o parto ocorra a termo, o recém-nascido saudável não terá indicação de receber o nirsevimabe, pois é considerado protegido pela transferência passiva de anticorpos maternos.",
      "O nirsevimabe, assim como o palivizumabe, está indicado pelas sociedades médicas exclusivamente para grupos de alto risco, como prematuros abaixo de 29 semanas, portadores de cardiopatia congênita ou displasia broncopulmonar, não havendo indicação para lactentes a termo saudáveis.",
      "A vacina contra o VSR para gestantes no Brasil, de acordo com o Ministério da Saúde, deve ser administrada apenas em gestantes com idade maior de 18 anos .",
      "Se a mãe não for vacinada durante a gestação, a recomendação da SBP é a indicação do nirsevimabe ao recém-nascido, porém sua proteção é de curta duração (cerca de 30 dias), necessitando de doses mensais repetidas durante toda a sazonalidade do vírus."
    ],
    "correctAnswer": 1,
    "explanation": "A vacina contra VSR (pré-fusão F bivalente) aplicada na gestante entre 28 e 36 semanas (pelo PNI, a partir de 28 semanas) transfere anticorpos ao feto. Se a gestante for vacinada pelo menos 14 dias antes do parto e o bebê nascer a termo e saudável, ele está protegido nos primeiros meses e não precisa de nirsevimabe, para evitar duplicidade.",
    "commentary": "Vacina após 34 semanas e nirsevimabe obrigatório (A): a vacina é feita a partir de 28 semanas e a dupla estratégia não é rotina.\n\nNirsevimabe só para alto risco (C): diferente do palivizumabe, o nirsevimabe é recomendado pela SBP para todos os lactentes na primeira sazonalidade cujas mães não foram vacinadas.\n\nSó para maiores de 18 anos (D): a banca considerou incorreta; o critério central da indicação é a idade gestacional (a partir de 28 semanas).\n\nNirsevimabe com proteção de 30 dias (E): uma única dose protege por cerca de 5 meses, toda a sazonalidade.",
    "reference": "SBP — Nirsevimabe: recomendações (2024) / Ministério da Saúde — Nota técnica sobre vacina VSR em gestantes (2025)",
    "tags": [
      "pediatria",
      "vírus sincicial respiratório",
      "bronquiolite",
      "nirsevimabe",
      "vacinação na gestação"
    ],
    "tip": "Mãe vacinada contra VSR ≥ 14 dias antes do parto: bebê a termo não precisa de nirsevimabe."
  },
  {
    "id": "sespe2026-81",
    "topography": "15",
    "topic": "Imunização",
    "module": "Saúde Coletiva",
    "text": "A história da vacinação no Brasil, iniciada como política governamental no Império, alternou entre períodos de aceitação e resistência popular. No entanto, ao longo das décadas, foi se consolidando com destaque internacional devido ao seu Programa Nacional de Imunizações (PNI).\n\nSobre os marcos históricos da vacinação no Brasil, assinale a alternativa CORRETA.",
    "options": [
      "A vacinação contra Febre Amarela já era obrigatória para crianças desde 1837.",
      "A Lei de 1944, proposta por Oswaldo Cruz, forçava a vacinação contra a varíola.",
      "Em 1961, foi realizada a primeira campanha de vacina contra a poliomielite.",
      "Em 1973, foi criada a caderneta de vacinação.",
      "Em 1977, foi criado o PNI."
    ],
    "correctAnswer": 2,
    "explanation": "Em 1961 foi feita a primeira campanha de vacinação em massa contra a poliomielite no Brasil, com a vacina oral Sabin — marco que antecedeu a criação do PNI e a erradicação da pólio (último caso no país em 1989).",
    "commentary": "Febre amarela obrigatória em 1837 (A): a lei de 1837 tornou obrigatória a vacina contra varíola; a vacina de febre amarela só surgiria no século XX.\n\nLei de 1944 de Oswaldo Cruz (B): a lei da vacina obrigatória contra varíola, que gerou a Revolta da Vacina, é de 1904; Oswaldo Cruz morreu em 1917.\n\nCaderneta em 1973 (D): 1973 é o ano de criação do PNI.\n\nPNI em 1977 (E): o PNI foi criado em 1973; em 1977 foi definido o primeiro calendário básico obrigatório.",
    "reference": "Ministério da Saúde — Programa Nacional de Imunizações: 30 anos / Fiocruz — História da vacinação no Brasil",
    "tags": [
      "imunização",
      "história da saúde pública",
      "PNI",
      "poliomielite"
    ],
    "tip": "1904 Revolta da Vacina; 1961 primeira campanha da pólio; 1973 PNI."
  },
  {
    "id": "sespe2026-82",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "O Modelo da Pirâmide de Riscos é uma ferramenta de gestão em saúde, popularizada pela Kaiser Permanente, baseada na estratificação dos riscos da população o que, por sua vez, define as estratégias de intervenção em autocuidado e em cuidado profissional.\n\nSobre esse modelo, assinale a alternativa CORRETA.",
    "options": [
      "90% das pessoas portadoras de uma condição crônica estão no nível 1 e são pessoas que apresentam condição simples.",
      "40 % estão no nível 2 e são pessoas que apresentam condição complexa.",
      "1 a 5% estão no nível 3 e são pessoas que apresentam condição altamente complexa.",
      "No nível 1, a maior parte do cuidado deve ser provida por uma equipe de Atenção Primária à saúde com apoio de especialistas.",
      "No nível 4, está a subpopulação com necessidades altamente complexas e/ou pessoas usuárias frequentes de atenção não programada de emergência, ambulatorial ou hospitalar."
    ],
    "correctAnswer": 2,
    "explanation": "O Modelo da Pirâmide de Riscos (Kaiser Permanente), adaptado por Eugênio Vilaça Mendes, divide os portadores de condições crônicas em 3 níveis:\n\n• Nível 1 (70–80%): condição simples; foco no autocuidado apoiado.\n• Nível 2 (20–30%): condição complexa; cuidado profissional pela APS, com apoio de especialistas.\n• Nível 3 (1–5%): condição altamente complexa; gestão de caso.\n\nA alternativa C (1 a 5% no nível 3, condição altamente complexa) está correta.",
    "commentary": "90% no nível 1 (A): são 70–80%.\n\n40% no nível 2 (B): são 20–30%.\n\nNível 1 com cuidado profissional e especialista (D): no nível 1 predomina o autocuidado apoiado.\n\nNível 4 (E): o modelo tem apenas 3 níveis.",
    "reference": "Mendes EV — O cuidado das condições crônicas na APS (OPAS, 2012)",
    "tags": [
      "atenção primária",
      "condições crônicas",
      "pirâmide de riscos",
      "estratificação de risco"
    ],
    "tip": "Kaiser: 70–80% autocuidado, 20–30% cuidado profissional, 1–5% gestão de caso."
  },
  {
    "id": "sespe2026-83",
    "topography": "15",
    "topic": "Epidemiologia",
    "module": "Saúde Coletiva",
    "text": "Sobre as diferenças entre incidência e prevalência, assinale a alternativa CORRETA.",
    "options": [
      "A incidência é mais útil em estudos que visam determinar a carga de doenças crônicas em uma população e suas implicações para os serviços de saúde.",
      "Se os casos incidentes não são resolvidos e continuam por todo o tempo, então eles tornam- se casos prevalentes. Neste caso, prevalência = incidência x duração.",
      "O termo “taxa de ataque” é frequentemente utilizado, ao invés de prevalência, durante uma epidemia de doença em uma população bem definida em um curto período de tempo.",
      "A incidência refere-se ao número de casos encontrados em uma população definida em um determinado ponto no tempo.",
      "A prevalência expressa o risco de tornar-se doente."
    ],
    "correctAnswer": 1,
    "explanation": "Em situação estável, a prevalência depende de quantos casos novos surgem e de quanto tempo duram: prevalência ≈ incidência × duração. Casos incidentes que não se resolvem passam a compor a prevalência.",
    "commentary": "Incidência para carga de doença crônica (A): é a prevalência que mede carga e demanda de serviços.\n\nTaxa de ataque como prevalência (C): taxa de ataque é uma incidência acumulada em surto curto, não prevalência.\n\nIncidência em um ponto no tempo (D): essa é a definição de prevalência pontual; incidência é casos novos num período.\n\nPrevalência como risco (E): o risco de adoecer é medido pela incidência.",
    "reference": "Bonita R, Beaglehole R — Epidemiologia Básica (OMS) / Medronho — Epidemiologia",
    "tags": [
      "epidemiologia",
      "incidência",
      "prevalência",
      "medidas de frequência"
    ],
    "tip": "P ≈ I × D. Incidência = risco; prevalência = carga."
  },
  {
    "id": "sespe2026-84",
    "topography": "15",
    "topic": "Bioestatística",
    "module": "Saúde Coletiva",
    "text": "Em um estudo de coorte, foi investigada a associação entre o tabagismo ativo e o diagnóstico de doença pulmonar obstrutiva crônica (DPOC) em adultos acima de 40 anos. Após 5 anos de seguimento, os resultados foram os seguintes:\n• Grupo Exposto (tabagistas): 60 indivíduos desenvolveram DPOC de um total de 400 indivíduos acompanhados.\n• Grupo Não Exposto (não tabagistas): 20 indivíduos desenvolveram DPOC de um total de 800 indivíduos acompanhados.\n\nCom base nesses dados, calcule o Risco Relativo (RR) para o desfecho diagnóstico de DPOC e assinale a alternativa que apresenta CORRETAMENTE o valor numérico.",
    "options": [
      "0,5",
      "1,5",
      "3,0",
      "6,0",
      "Nenhuma das alternativas."
    ],
    "correctAnswer": 3,
    "explanation": "Risco relativo = incidência nos expostos ÷ incidência nos não expostos.\n\n• Expostos: 60/400 = 0,15\n• Não expostos: 20/800 = 0,025\n• RR = 0,15 ÷ 0,025 = 6,0\n\nFumantes tiveram risco 6 vezes maior de desenvolver DPOC.",
    "commentary": "0,5 (A), 1,5 (B) e 3,0 (C): resultam de erros no cálculo (por exemplo, comparar números absolutos de casos, 60/20 = 3, sem considerar o tamanho dos grupos).\n\nNenhuma (E): o valor correto (6,0) está na alternativa D.",
    "reference": "Medronho — Epidemiologia / Fletcher — Epidemiologia Clínica",
    "tags": [
      "bioestatística",
      "risco relativo",
      "estudo de coorte"
    ],
    "tip": "RR = (a/(a+b)) ÷ (c/(c+d)). Compare incidências, não números absolutos."
  },
  {
    "id": "sespe2026-85",
    "topography": "15",
    "topic": "Estudos epidemiológicos",
    "module": "Saúde Coletiva",
    "text": "Um grupo de pesquisa buscou investigar se a infecção prévia pelo vírus Epstein-Barr (EBV) é um fator de risco para o desenvolvimento de Esclerose Múltipla (EM). Para isso, em 2022, os pesquisadores identificaram 500 prontuários de pacientes com diagnóstico recente de EM e 1.000 prontuários de pacientes da mesma região, do mesmo sexo e faixa etária, mas com outras doenças neurológicas não desmielinizantes. Eles, então, analisaram retrospectivamente, por meio de exames de sangue arquivados, a presença de anticorpos contra o EBV nos dois grupos, referentes a amostras coletadas 5 anos antes do início dos sintomas neurológicos.\n\nAssinale a alternativa que corresponde a esse tipo de estudo.",
    "options": [
      "Estudo Ecológico.",
      "Estudo Transversal.",
      "Ensaio Clínico Randomizado.",
      "Estudo de Coorte.",
      "Estudo Caso-Controle."
    ],
    "correctAnswer": 4,
    "explanation": "Partiu-se do desfecho: um grupo com esclerose múltipla (casos) e outro com outras doenças neurológicas (controles), pareados por sexo, idade e região. Depois, olhou-se para trás a exposição (anticorpos contra EBV em amostras de 5 anos antes). Seleção pelo desfecho e investigação retrospectiva da exposição define o estudo caso-controle.",
    "commentary": "Ecológico (A): a unidade de análise seria um grupo populacional, não indivíduos.\n\nTransversal (B): mediria exposição e desfecho no mesmo momento.\n\nEnsaio clínico (C): haveria intervenção alocada pelo pesquisador.\n\nCoorte (D): partiria da exposição (EBV positivo e negativo) e acompanharia o surgimento da doença.",
    "reference": "Medronho — Epidemiologia / Rothman — Epidemiologia Moderna",
    "tags": [
      "epidemiologia",
      "estudo caso-controle",
      "desenhos de estudo"
    ],
    "tip": "Seleciona pelo desfecho e olha a exposição para trás: caso-controle."
  },
  {
    "id": "sespe2026-86",
    "topography": "15",
    "module": "Saúde Coletiva",
    "text": "No debate contemporâneo sobre equidade em saúde, é crucial distinguir conceitos fundamentais para a análise das iniquidades raciais. Com base nas teorias de pensadores como Cida Bento, Silvio Almeida e outros, analise as sentenças abaixo:\nI. Pacto da Branquitude refere-se a um acordo tácito e inconsciente entre pessoas brancas para a manutenção de privilégios, operando por meio do silenciamento do debate racial e da naturalização das hierarquias sociais.\nII. Racismo Estrutural diz respeito às formas de discriminação explícita e consciente praticadas por indivíduos dentro das instituições, como um profissional de saúde que se recusa a atender um paciente negro.\nIII. Racismo Institucional manifesta-se quando os critérios normativos, os protocolos e a cultura organizacional de uma instituição – como um hospital ou um plano de saúde – reproduzem desvantagens sistemáticas para grupos racializados, ainda que não haja intenção discriminatória explícita.",
    "options": [
      "I, II e III.",
      "I e III, apenas.",
      "II e III, apenas.",
      "I, apenas.",
      "III, apenas."
    ],
    "correctAnswer": 1,
    "explanation": "I — Correta: o pacto da branquitude (Cida Bento) é um acordo tácito, em geral não consciente, de manutenção de privilégios entre pessoas brancas, sustentado pelo silêncio sobre o racismo.\n\nII — Incorreta: discriminação explícita e consciente por um indivíduo é racismo individual. O racismo estrutural (Silvio Almeida) é o racismo que organiza a própria sociedade — economia, política, direito — e se reproduz mesmo sem intenção individual.\n\nIII — Correta: o racismo institucional ocorre quando normas, protocolos e a cultura de uma instituição produzem desvantagens sistemáticas para grupos racializados, mesmo sem intenção explícita.\n\nCorretas: I e III.",
    "commentary": "A (I, II e III) e C (II e III): incluem a II, que descreve racismo individual, não estrutural.\n\nD (só I) e E (só III): deixam de fora uma das afirmativas corretas.",
    "reference": "Almeida S — Racismo Estrutural (2019) / Bento C — O Pacto da Branquitude (2022) / Política Nacional de Saúde Integral da População Negra",
    "tags": [
      "saúde coletiva",
      "racismo estrutural",
      "racismo institucional",
      "equidade em saúde"
    ],
    "tip": "Individual = ato consciente; institucional = normas da instituição; estrutural = organização da sociedade."
  },
  {
    "id": "sespe2026-87",
    "topography": "15",
    "topic": "Vigilância epidemiológica",
    "module": "Saúde Coletiva",
    "text": "A Vigilância em Saúde é um processo contínuo de coleta, análise e interpretação de dados, essencial para o planejamento e a avaliação das práticas de saúde pública. Sobre os diferentes tipos de vigilância epidemiológica, analise as seguintes afirmativas:\nI. Na vigilância passiva, a notificação depende da iniciativa dos profissionais ou dos serviços de saúde, sem busca ativa pelos órgãos de vigilância, o que pode resultar em subnotificação.\nII. A vigilância ativa é caracterizada por busca sistemática de casos, com deslocamento dos técnicos da vigilância até as unidades notificadoras para garantir a completude das informações.\nIII. A vigilância sentinela utiliza uma rede de unidades de saúde selecionadas para monitorar eventos específicos, sendo útil para estimar a magnitude de um problema de saúde, quando a vigilância universal é inviável.\nIV. Um exemplo de vigilância sentinela é o sistema de notificação compulsória de doenças, como sarampo e dengue, que exige que todos os casos suspeitos sejam informados às autoridades.",
    "options": [
      "todas.",
      "apenas três.",
      "apenas duas.",
      "apenas uma.",
      "nenhuma."
    ],
    "correctAnswer": 1,
    "explanation": "I — Correta: na vigilância passiva, a notificação depende da iniciativa dos serviços, o que favorece a subnotificação.\n\nII — Correta: na vigilância ativa, a equipe de vigilância busca sistematicamente os casos nas fontes.\n\nIII — Correta: a vigilância sentinela usa uma rede selecionada de unidades para monitorar eventos quando a vigilância universal não é viável (por exemplo, síndrome gripal).\n\nIV — Incorreta: a notificação compulsória de todos os casos suspeitos de sarampo e dengue é vigilância universal, não sentinela.\n\nApenas três estão corretas.",
    "commentary": "Todas (A): a IV confunde vigilância universal com sentinela.\n\nApenas duas (C), uma (D) ou nenhuma (E): as afirmativas I, II e III estão corretas.",
    "reference": "Ministério da Saúde — Guia de Vigilância em Saúde (2024)",
    "tags": [
      "vigilância epidemiológica",
      "vigilância sentinela",
      "vigilância ativa",
      "vigilância passiva"
    ],
    "tip": "Notificação de todos os casos = vigilância universal. Rede selecionada = sentinela."
  },
  {
    "id": "sespe2026-88",
    "topography": "15",
    "topic": "Testes diagnósticos",
    "module": "Saúde Coletiva",
    "text": "Um estudo avaliou a presença de artralgia como um sinal clínico para o diagnóstico precoce de Dengue em pacientes febris. Foram incluídos 300 pacientes atendidos em um serviço de emergência durante um surto. O diagnóstico definitivo de Dengue foi confirmado por sorologia (padrão-ouro). Os resultados foram os seguintes:\n• Dos 90 pacientes com Dengue confirmada, 72 apresentavam artralgia.\n• Dos 210 pacientes sem Dengue, 147 não apresentavam artralgia.\n\nCom base nesses dados, qual é a sensibilidade da presença de artralgia como sinal clínico para o diagnóstico de Dengue nessa população?",
    "options": [
      "58%",
      "70%",
      "80%",
      "85%",
      "Nenhuma das alternativas"
    ],
    "correctAnswer": 2,
    "explanation": "Sensibilidade = verdadeiros positivos ÷ total de doentes. Entre os 90 pacientes com dengue, 72 tinham artralgia: 72/90 = 0,80 = 80%.\n\n(Para conferir: especificidade = 147/210 = 70%.)",
    "commentary": "58% (A): não corresponde a nenhum parâmetro do teste.\n\n70% (B): é a especificidade (147 sem artralgia entre 210 sem dengue).\n\n85% (D): sem base nos dados.\n\nNenhuma (E): 80% está na alternativa C.",
    "reference": "Fletcher — Epidemiologia Clínica / Medronho — Epidemiologia",
    "tags": [
      "testes diagnósticos",
      "sensibilidade",
      "especificidade",
      "dengue"
    ],
    "tip": "Sensibilidade olha só os doentes; especificidade, só os sadios."
  },
  {
    "id": "sespe2026-89",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "A participação social é um princípio fundamental do Sistema Único de Saúde (SUS), institucionalizada, principalmente, pelos Conselhos de Saúde.\n\nSobre a composição, o papel e o funcionamento desses conselhos, conforme a legislação do SUS, assinale a alternativa CORRETA.",
    "options": [
      "Os Conselhos de Saúde, em todas as esferas de governo, possuem composição paritária, sendo formados na mesma proporção por representantes dos usuários, representantes dos trabalhadores da saúde e representantes do governo e prestadores de serviços.",
      "A principal função dos Conselhos de Saúde é de caráter consultivo, cabendo a eles emitir pareceres não vinculantes sobre as políticas propostas pela Secretaria de Saúde, enquanto a decisão final é de responsabilidade do gestor.",
      "Para garantir a representatividade, os representantes dos usuários nos Conselhos de Saúde são indicados diretamente pelo gestor municipal ou estadual, a partir de listas encaminhadas por entidades civis.",
      "A paridade na composição dos conselhos significa que, em um conselho municipal de saúde com 24 membros, haverá 12 representantes dos usuários, 6 representantes dos trabalhadores da saúde e 6 representantes do governo, gestores e prestadores de serviços privados conveniados.",
      "As Conferências de Saúde, que também são instâncias de participação social, ocorrem a cada 4 anos e têm como principal finalidade eleger os membros dos Conselhos de Saúde para o mandato subsequente."
    ],
    "correctAnswer": 3,
    "explanation": "Pela Lei 8.142/1990 e Resolução CNS 453/2012, a paridade dos conselhos de saúde é: 50% de usuários e 50% dos demais segmentos, divididos em 25% de trabalhadores da saúde e 25% de gestores e prestadores. Num conselho de 24 membros: 12 usuários, 6 trabalhadores e 6 gestores/prestadores.",
    "commentary": "Proporção igual entre os três segmentos (A): os usuários são metade do conselho.\n\nCaráter consultivo (B): os conselhos são deliberativos e fiscalizadores.\n\nUsuários indicados pelo gestor (C): são escolhidos pelas próprias entidades e movimentos, sem indicação do gestor.\n\nConferências para eleger conselheiros (E): as conferências avaliam a situação de saúde e propõem diretrizes, a cada 4 anos; não elegem conselheiros.",
    "reference": "Lei nº 8.142/1990 / Resolução CNS nº 453/2012",
    "tags": [
      "SUS",
      "participação social",
      "conselhos de saúde",
      "controle social"
    ],
    "tip": "Conselho de saúde: 50% usuários, 25% trabalhadores, 25% gestores/prestadores."
  },
  {
    "id": "sespe2026-90",
    "topography": "15",
    "topic": "Estudos epidemiológicos",
    "module": "Saúde Coletiva",
    "text": "Qual é a principal vantagem de um ensaio clínico randomizado em comparação com estudos observacionais para avaliar a eficácia de uma intervenção?",
    "options": [
      "A randomização ajuda a distribuir os fatores de confusão de forma equilibrada entre os grupos.",
      "São eticamente mais simples, pois não envolvem a intervenção direta do pesquisador.",
      "Possuem maior validade externa e generalização para a população geral.",
      "São mais baratos e rápidos de conduzir.",
      "Nenhuma das alternativas."
    ],
    "correctAnswer": 0,
    "explanation": "A principal vantagem do ensaio clínico randomizado é a randomização: ela distribui ao acaso entre os grupos os fatores de confusão conhecidos e desconhecidos, tornando os grupos comparáveis e permitindo atribuir a diferença de desfechos à intervenção.",
    "commentary": "Eticamente mais simples (B): é o contrário — há intervenção do pesquisador e exigências éticas maiores.\n\nMaior validade externa (C): os critérios de inclusão restritos costumam reduzir a validade externa; estudos observacionais refletem melhor a vida real.\n\nMais baratos e rápidos (D): ensaios clínicos são caros e demorados.\n\nNenhuma (E): a alternativa A está correta.",
    "reference": "Fletcher — Epidemiologia Clínica / Guyatt — Users' Guides to the Medical Literature",
    "tags": [
      "epidemiologia",
      "ensaio clínico randomizado",
      "confundimento",
      "randomização"
    ],
    "tip": "Randomização controla confundidores conhecidos e desconhecidos."
  },
  {
    "id": "sespe2026-91",
    "topography": "15",
    "module": "Saúde Coletiva",
    "text": "O acrônimo PICO é uma ferramenta utilizada para estruturar uma pergunta de pesquisa, principalmente para revisões sistemáticas. O que a letra 'O' representa?",
    "options": [
      "Observação (o tipo de dado a ser observado).",
      "Organização (a estrutura do estudo).",
      "Outcome (desfecho ou resultado de interesse).",
      "Originalidade (a novidade da pergunta de pesquisa).",
      "Nenhuma das alternativas."
    ],
    "correctAnswer": 2,
    "explanation": "PICO estrutura perguntas clínicas: P = paciente/população, I = intervenção (ou exposição), C = comparação, O = outcome (desfecho de interesse). Às vezes acrescenta-se T (tempo) ou S (tipo de estudo).",
    "commentary": "Observação (A), Organização (B) e Originalidade (D): não correspondem ao acrônimo.\n\nNenhuma (E): a alternativa C está correta.",
    "reference": "Guyatt — Users' Guides to the Medical Literature / Cochrane Handbook",
    "tags": [
      "medicina baseada em evidências",
      "PICO",
      "revisão sistemática"
    ],
    "tip": "PICO: Paciente, Intervenção, Comparação, Outcome (desfecho)."
  },
  {
    "id": "sespe2026-92",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "A Atenção Primária à Saúde (APS) é a base do Sistema Único de Saúde (SUS) e deve ordenar as Redes de Atenção. A Estratégia Saúde da Família é o modelo prioritário para sua operacionalização no Brasil. Em relação aos atributos essenciais da APS, analise as sentenças abaixo:\nI. A coordenação do cuidado refere-se ao estabelecimento de um vínculo duradouro entre a equipe de saúde e uma população adscrita, permitindo o acompanhamento contínuo ao longo do tempo, o que facilita o reconhecimento precoce de problemas e a construção de um cuidado personalizado.\nII. A longitudinalidade implica que a APS deve atuar como centro de comunicação do sistema, organizando o fluxo do usuário entre diferentes pontos de atenção e integrando as informações sobre seus cuidados, evitando a fragmentação.\nIII. A APS é o primeiro contato do usuário com o sistema para qualquer novo problema de saúde, garantindo acesso universal e resolutivo, e os encaminhamentos para outros níveis de atenção devem, preferencialmente, ser realizados a partir dela.",
    "options": [
      "I, II e III.",
      "I e II, apenas.",
      "I e III, apenas.",
      "II e III, apenas.",
      "III, apenas."
    ],
    "correctAnswer": 4,
    "explanation": "I — Incorreta: o vínculo duradouro com a população adscrita e o acompanhamento ao longo do tempo é a longitudinalidade, não a coordenação.\n\nII — Incorreta: atuar como centro de comunicação, organizando o fluxo do usuário e integrando informações, é a coordenação do cuidado, não a longitudinalidade. As sentenças I e II trocaram os conceitos.\n\nIII — Correta: descreve o acesso de primeiro contato (porta de entrada).\n\nApenas a III está correta.",
    "commentary": "A (I, II e III), B (I e II), C (I e III) e D (II e III): incluem as sentenças I ou II, que trocam os conceitos de longitudinalidade e coordenação.",
    "reference": "Starfield — Atenção Primária (2002) / PNAB 2017",
    "tags": [
      "atenção primária",
      "atributos da APS",
      "longitudinalidade",
      "coordenação do cuidado"
    ],
    "tip": "Longitudinalidade = vínculo no tempo. Coordenação = integrar o cuidado entre serviços."
  },
  {
    "id": "sespe2026-93",
    "topography": "15",
    "module": "Saúde Coletiva",
    "text": "O modelo dos determinantes sociais da saúde de Dahlgren e Whitehead é representado por um diagrama de camadas concêntricas. Sobre a composição e a relação entre essas camadas, analise as afirmativas abaixo:\nI. Na camada mais central, temos os fatores individuais não-modificáveis, incluindo idade, sexo e fatores hereditários.\nII. Na terceira camada, estão as redes sociais e comunitárias, que abrangem o suporte oferecido pela família, amigos e comunidade local.\nIII. Na quarta camada, temos as condições de vida e trabalho, que são determinadas por políticas públicas e contextos econômicos locais.\nIV. Na camada mais externa, estão os fatores gerais socioeconômicos, culturais e ambientais, que constituem os macrodeterminantes.",
    "options": [
      "todas.",
      "apenas três.",
      "apenas duas.",
      "apenas uma.",
      "nenhuma."
    ],
    "correctAnswer": 0,
    "explanation": "O modelo de Dahlgren e Whitehead organiza os determinantes sociais em camadas, do centro para fora:\n\n1. Fatores individuais não modificáveis (idade, sexo, herança genética).\n2. Estilo de vida individual.\n3. Redes sociais e comunitárias.\n4. Condições de vida e trabalho (alimentação, habitação, educação, emprego, serviços de saúde, saneamento).\n5. Macrodeterminantes: condições socioeconômicas, culturais e ambientais gerais.\n\nTodas as afirmativas descrevem corretamente as camadas.",
    "commentary": "Apenas três (B), duas (C), uma (D) ou nenhuma (E): todas as quatro afirmativas estão corretas.",
    "reference": "Comissão Nacional sobre Determinantes Sociais da Saúde — As causas sociais das iniquidades em saúde no Brasil (2008)",
    "tags": [
      "saúde coletiva",
      "determinantes sociais da saúde",
      "modelo de camadas"
    ],
    "tip": "Dahlgren-Whitehead: indivíduo → estilo de vida → redes → condições de vida → macrodeterminantes."
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
    "id": "sespe2026-95",
    "topography": "15",
    "topic": "Saúde do trabalhador",
    "module": "Saúde Coletiva",
    "text": "Um médico residente, em suas atividades no ambulatório, diagnosticou os seguintes casos abaixo:\nI. Perda Auditiva relacionada ao trabalho.\nII. Síndrome de burnout.\nIII. Distúrbios Osteomusculares Relacionados ao Trabalho.\nIV. Distúrbio de voz relacionado ao trabalho.\n\nAssinale a alternativa em que são consideradas doenças na Lista Nacional de Notificação Compulsória de doenças, agravos e eventos de saúde pública:",
    "options": [
      "todos os itens.",
      "apenas três itens.",
      "apenas dois itens.",
      "apenas um item.",
      "nenhum item."
    ],
    "correctAnswer": 0,
    "explanation": "A Portaria GM/MS nº 217/2023 ampliou a lista de agravos relacionados ao trabalho de notificação compulsória. Estão incluídos: perda auditiva relacionada ao trabalho, transtornos mentais relacionados ao trabalho (que incluem a síndrome de burnout), LER/DORT (distúrbios osteomusculares) e distúrbio de voz relacionado ao trabalho. Todos os itens são de notificação compulsória.",
    "commentary": "Apenas três (B), dois (C), um (D) ou nenhum (E): os quatro agravos constam na lista atual.",
    "reference": "Ministério da Saúde — Portaria GM/MS nº 217/2023 (Lista Nacional de Notificação Compulsória)",
    "tags": [
      "saúde do trabalhador",
      "notificação compulsória",
      "doenças ocupacionais",
      "burnout"
    ],
    "tip": "Desde 2023, burnout, LER/DORT, PAIR e distúrbio de voz são de notificação compulsória."
  },
  {
    "id": "sespe2026-96",
    "topography": "15",
    "module": "Saúde Coletiva",
    "text": "O Sistema de Informações Hospitalares do SUS (SIH/SUS) é um sistema, cujo principal instrumento é a Autorização de Internação Hospitalar (AIH).\n\nSobre esse sistema, é CORRETO afirmar que",
    "options": [
      "é o sistema responsável por registrar os atendimentos de urgência e emergência realizados nas unidades de saúde do país.",
      "sua principal finalidade é o controle e pagamento das internações hospitalares financiadas pelo SUS.",
      "sua base de dados contém informações detalhadas sobre o histórico médico de todos os usuários.",
      "é utilizado pelos hospitais para notificar as doenças e agravos de notificação compulsória.",
      "Nenhuma das alternativas."
    ],
    "correctAnswer": 1,
    "explanation": "O SIH/SUS, cujo documento base é a AIH, foi criado com finalidade administrativa: controle e pagamento das internações hospitalares financiadas pelo SUS. Apesar disso, é muito usado como fonte de dados de morbidade hospitalar.",
    "commentary": "Atendimentos de urgência (A): ambulatoriais e de urgência são registrados no SIA/SUS e no e-SUS.\n\nHistórico médico de todos os usuários (C): o SIH registra internações financiadas pelo SUS, não o prontuário completo.\n\nNotificar doenças (D): a notificação é feita no SINAN.\n\nNenhuma (E): a alternativa B está correta.",
    "reference": "Ministério da Saúde — DATASUS: Sistemas de informação em saúde",
    "tags": [
      "sistemas de informação em saúde",
      "SIH/SUS",
      "AIH",
      "DATASUS"
    ],
    "tip": "SIH/AIH = pagamento de internações. SINAN = notificação. SIM = óbitos. SINASC = nascidos vivos."
  },
  {
    "id": "sespe2026-97",
    "topography": "15",
    "topic": "Bioética",
    "module": "Saúde Coletiva",
    "text": "Paciente, 88 anos, foi diagnosticado com câncer de próstata, tendo sido proposta pela equipe médica uma prostatectomia radical. O médico explicou detalhadamente os riscos, benefícios e alternativas, utilizando linguagem acessível. O paciente, após refletir com sua família, optou por recusar a cirurgia. A atitude do médico, ao garantir que o paciente recebesse informações compreensíveis e respeitasse sua escolha, mesmo diferente da recomendação inicial da equipe, está fundamentada, principalmente, no seguinte princípio bioético:",
    "options": [
      "Justiça.",
      "Beneficência.",
      "Autonomia.",
      "Não-maleficência.",
      "Paternalismo."
    ],
    "correctAnswer": 2,
    "explanation": "O médico informou riscos, benefícios e alternativas em linguagem acessível e respeitou a recusa do paciente, mesmo contrária à recomendação da equipe. Isso expressa o princípio da autonomia: o direito do paciente capaz de decidir sobre o próprio tratamento após ser adequadamente informado (consentimento ou recusa livre e esclarecida).",
    "commentary": "Justiça (A): refere-se à distribuição equitativa de recursos e cuidados.\n\nBeneficência (B): é agir no melhor interesse do paciente — seria a base para recomendar a cirurgia.\n\nNão maleficência (D): é não causar dano.\n\nPaternalismo (E): seria decidir pelo paciente, o oposto do que ocorreu.",
    "reference": "Beauchamp & Childress — Princípios de Ética Biomédica / Código de Ética Médica (CFM, 2018), arts. 22, 24 e 31",
    "tags": [
      "bioética",
      "autonomia",
      "consentimento informado",
      "ética médica"
    ],
    "tip": "Paciente informado que decide = autonomia."
  },
  {
    "id": "sespe2026-98",
    "topography": "15",
    "topic": "Saúde do trabalhador",
    "module": "Saúde Coletiva",
    "text": "Um médico plantonista sofreu uma perfuração acidental com agulha contaminada durante a realização de um procedimento invasivo em um paciente no hospital. O supervisor imediato orientou que o acidente fosse registrado no prontuário do paciente e que o plantonista procurasse o serviço de saúde ocupacional do hospital. Com base na legislação brasileira sobre acidentes e Comunicação de Acidente de Trabalho (CAT), analise as afirmativas abaixo:\nI. O acidente sofrido pelo médico plantonista configura um Acidente de Trabalho típico.\nII. A perfuração com material biológico é considerada um Acidente de Trabalho com Exposição a Material Biológico, exigindo notificação compulsória, além da CAT.\nIII. A obrigação de emitir a CAT é, em primeiro lugar, do hospital, e o prazo para emissão é de até 1 (um) dia útil após a ocorrência.\nIV. Mesmo que o hospital não emita a CAT, o próprio acidentado, seus dependentes, a entidade sindical, o médico que o assistiu ou qualquer autoridade pública podem fazê-lo.",
    "options": [
      "todas.",
      "apenas três.",
      "apenas duas.",
      "apenas uma.",
      "nenhuma."
    ],
    "correctAnswer": 0,
    "explanation": "I — Correta: perfuração com agulha durante o trabalho é acidente de trabalho típico.\n\nII — Correta: acidente com material biológico é de notificação compulsória no SINAN, além da emissão da CAT.\n\nIII — Correta: o empregador deve emitir a CAT até o primeiro dia útil seguinte ao acidente (imediatamente, em caso de óbito).\n\nIV — Correta: se o empregador não emitir, podem fazê-lo o próprio acidentado, seus dependentes, o sindicato, o médico que o atendeu ou qualquer autoridade pública.\n\nTodas estão corretas. Observação: o acidente deve ser registrado nos documentos do trabalhador e na CAT; o prontuário do paciente não é o local para esse registro.",
    "commentary": "Apenas três (B), duas (C), uma (D) ou nenhuma (E): as quatro afirmativas estão de acordo com a Lei 8.213/1991 e as normas do Ministério da Saúde.",
    "reference": "Lei nº 8.213/1991, art. 22 / Ministério da Saúde — Exposição a materiais biológicos (2011) / NR-32",
    "tags": [
      "saúde do trabalhador",
      "acidente de trabalho",
      "CAT",
      "material biológico"
    ],
    "tip": "CAT: empregador até 1 dia útil; se não emitir, qualquer um da lista pode emitir."
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
    "id": "sespe2026-100",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "A Portaria GM/MS nº 3.493 de 2024 instituiu o novo modelo de financiamento federal da Atenção Primária à Saúde (APS) no Brasil.\n\nSobre as características e mudanças fundamentais desse modelo, em relação ao Previne Brasil, assinale a alternativa CORRETA.",
    "options": [
      "O novo modelo manteve a mesma estrutura de incentivos financeiros, baseada no cadastramento nominal e em indicadores de desempenho clínicos.",
      "Um dos avanços do modelo é o Componente de Vínculo e Acompanhamento Territorial, que considera o número de pessoas cadastradas e atualizadas no sistema eletrônico da APS, aplicando um fator de ponderação que leva em conta a vulnerabilidade socioterritorial dos municípios.",
      "O novo modelo abandona completamente a lógica de pagamento por desempenho e retorna a um financiamento fixo baseado no número estimado de habitantes de cada município, conforme dados do Instituto Brasileiro de Geografia e Estatística - IBGE.",
      "O Componente de Qualidade do financiamento foi extinto, sendo substituído por um repasse fixo e único por equipe, independentemente do desempenho em indicadores de saúde.",
      "Nenhuma das alternativas."
    ],
    "correctAnswer": 1,
    "explanation": "A Portaria GM/MS nº 3.493/2024 substituiu o Previne Brasil por um novo modelo de cofinanciamento da APS, com componentes: fixo (por equipe), vínculo e acompanhamento territorial, qualidade, implantação/manutenção de programas e per capita de base populacional. O componente de vínculo e acompanhamento territorial considera as pessoas cadastradas e acompanhadas no sistema da APS, com ponderação pela vulnerabilidade socioterritorial do município.",
    "commentary": "Mesma estrutura do Previne (A): o modelo mudou, com novos componentes.\n\nAbandona o desempenho e volta ao per capita (C): o componente de qualidade foi mantido; o per capita é só uma das partes.\n\nQualidade extinto (D): o componente de qualidade continua, com novos indicadores.\n\nNenhuma (E): a alternativa B está correta.",
    "reference": "Ministério da Saúde — Portaria GM/MS nº 3.493/2024 (novo financiamento da APS)",
    "tags": [
      "atenção primária",
      "financiamento da APS",
      "cofinanciamento",
      "SUS"
    ],
    "tip": "Novo financiamento da APS (2024): fixo + vínculo/territorial + qualidade + programas + per capita."
  }
];
