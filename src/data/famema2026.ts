import { Question } from '../types';

// FAMEMA 2026 (SP) — residência médica. 100 questões, 4 alternativas.
// Gabarito conferido no gabarito comentado do AjudaMédico; explicações com texto próprio.
export const FAMEMA_2026_QUESTIONS: Question[] = [
  {
    "id": "famema2026-1",
    "topography": "2.2",
    "topic": "Infarto agudo do miocárdio",
    "module": "Clínica Médica",
    "text": "Paciente do sexo masculino, de 58 anos, tabagista, portador de hipertensão arterial sistêmica, apresenta-se ao pronto atendimento com história de dor torácica opressiva irradiando para braço esquerdo e mandíbula iniciada há 130 minutos, associada a sudorese fria e náuseas. Apresenta como sinais vitais iniciais: PA: 98 x 64 mmHg, FC: 92 bpm, SatO₂: 95% AA. Realizou o eletrocardiograma a seguir:\n\nQual é a abordagem terapêutica para esse paciente?",
    "options": [
      "Transferir para angioplastia primária, aceitando atraso > 120 min, e iniciar heparina, apenas.",
      "Realizar trombólise imediata com alteplase, administrar heparina de baixo peso molecular, AAS e clopidogrel e, após estabilização, transferir para angiografia de rotina em 2–24h.",
      "Solicitar curva de marcadores de necrose miocárdica.",
      "Administrar AAS, clopidogrel e anticoagulação subcutânea e observar evolução por 6–12h."
    ],
    "correctAnswer": 1,
    "image": "/images/famema2026-1.webp",
    "explanation": "Dor torácica típica há pouco mais de 2 horas e ECG com supradesnivelamento do ST nas derivações anteriores (V1–V4): IAM com supra de ST, dentro da janela de reperfusão (até 12 horas).\n\nA reperfusão preferencial é a angioplastia primária quando pode ser feita em até 120 minutos do diagnóstico. Se esse tempo não for possível (serviço sem hemodinâmica, transferência demorada), a fibrinólise deve ser feita em até 30 minutos da chegada, se não houver contraindicação, com AAS, clopidogrel e anticoagulação (enoxaparina). Depois o paciente é transferido para cateterismo de rotina em 2–24 horas (estratégia farmacoinvasiva), ou de resgate se a fibrinólise falhar.",
    "commentary": "Angioplastia aceitando atraso > 120 min (A): quando o atraso supera 120 minutos, a fibrinólise imediata é superior; além disso, a alternativa omite a dupla antiagregação.\n\nCurva de marcadores (C): o diagnóstico do IAM com supra é eletrocardiográfico; esperar troponina atrasa a reperfusão.\n\nAntiagregação, anticoagulação e observação (D): é tratamento de síndrome coronariana sem supra; no IAM com supra a reperfusão é obrigatória.",
    "tip": "IAMCSST: angioplastia se porta-balão ≤ 120 min; se não, fibrinólise em até 30 min + AAS, clopidogrel e enoxaparina, e cateterismo em 2–24 h.",
    "reference": "Byrne RA et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J, 2023. SBC. Diretriz de IAM com supradesnível do segmento ST, 2015.",
    "tags": [
      "IAM com supra de ST",
      "fibrinólise",
      "estratégia farmacoinvasiva"
    ]
  },
  {
    "id": "famema2026-2",
    "topography": "8",
    "topic": "Cetoacidose diabética",
    "module": "Clínica Médica",
    "text": "Paciente jovem de 22 anos, portador de diabetes mellitus tipo 1 há 6 anos, chega ao pronto-socorro com história de náuseas, vômitos e dor abdominal difusa há 12 horas. Refere poliúria nos últimos dias. Ao exame físico: PA: 94 x 60 mmHg; FC: 118 bpm; FR: 32 irpm (respiração de Kussmaul); temperatura axilar: 37,5 °C; com mucosas secas, pulsos periféricos filiformes. Apresenta nos exames complementares iniciais: glicemia: 468 mg/dL; gasometria arterial com pH: 7,12 e HCO₃⁻: 9 mEq/L; sódio: 135 mEq/L; potássio: 3,1 mEq/L e cetonemia: positiva.\n\nQual é o diagnóstico associado a esse quadro?",
    "options": [
      "Estado hiperosmolar hiperglicêmico.",
      "Cetoacidose diabética.",
      "Pancreatite aguda.",
      "Sepse abdominal com acidose metabólica láctica."
    ],
    "correctAnswer": 1,
    "explanation": "Jovem com DM1, poliúria, vômitos, dor abdominal, respiração de Kussmaul, glicemia de 468 mg/dL, pH 7,12, bicarbonato 9 mEq/L e cetonemia positiva: cetoacidose diabética. O diagnóstico exige glicemia > 250 mg/dL (ou diabetes conhecido), cetonemia/cetonúria e acidose metabólica (pH < 7,3 ou bicarbonato < 18). Com pH 7,12 e bicarbonato 9, é CAD moderada a grave.\n\nA dor abdominal é comum na CAD e costuma melhorar com o tratamento.",
    "commentary": "Estado hiperosmolar (A): típico do DM2 idoso, com glicemia geralmente > 600 mg/dL, osmolalidade > 320 e sem acidose ou cetose importante.\n\nPancreatite aguda (C): pode causar dor e hiperglicemia, mas não explica acidose cetótica; amilase e lipase podem subir na própria CAD.\n\nSepse com acidose láctica (D): a cetonemia positiva e o DM1 explicam a acidose; infecção pode ser fator desencadeante, mas o diagnóstico é CAD.",
    "tip": "CAD: glicemia > 250 + cetose + pH < 7,3 ou HCO₃ < 18. EHH: glicemia > 600, osmolalidade > 320, sem acidose.",
    "reference": "Umpierrez GE et al. Hyperglycemic Crises in Adults With Diabetes: A Consensus Report (ADA/EASD/JBDS/AACE/DTS). Diabetes Care, 2024. Sociedade Brasileira de Diabetes. Diretriz 2024 – Crises hiperglicêmicas.",
    "tags": [
      "cetoacidose diabética",
      "diabetes mellitus tipo 1",
      "acidose metabólica"
    ]
  },
  {
    "id": "famema2026-3",
    "topography": "8",
    "topic": "Cetoacidose diabética",
    "module": "Clínica Médica",
    "text": "Paciente jovem de 22 anos, portador de diabetes mellitus tipo 1 há 6 anos, chega ao pronto-socorro com história de náuseas, vômitos e dor abdominal difusa há 12 horas. Refere poliúria nos últimos dias. Ao exame físico: PA: 94 x 60 mmHg; FC: 118 bpm; FR: 32 irpm (respiração de Kussmaul); temperatura axilar: 37,5 °C; com mucosas secas, pulsos periféricos filiformes. Apresenta nos exames complementares iniciais: glicemia: 468 mg/dL; gasometria arterial com pH: 7,12 e HCO₃⁻: 9 mEq/L; sódio: 135 mEq/L; potássio: 3,1 mEq/L e cetonemia: positiva.\n\nDiante desse diagnóstico, qual deve ser a prioridade terapêutica ?",
    "options": [
      "Iniciar insulina regular EV em bolus imediatamente.",
      "Administrar bicarbonato EV.",
      "Fazer reposição volêmica vigorosa com SF 0,9% e correção do potássio até > 3,3 mEq/L.",
      "Iniciar insulina glargina SC em esquema basal."
    ],
    "correctAnswer": 2,
    "explanation": "Na cetoacidose, a primeira prioridade é a reposição volêmica com SF 0,9% (cerca de 15–20 mL/kg na primeira hora), que corrige a desidratação, melhora a perfusão renal e já reduz a glicemia.\n\nO potássio é decisivo: a insulina leva o potássio para dentro das células e pode causar hipocalemia grave com arritmia. Com K⁺ de 3,1 mEq/L, a insulina deve esperar até o potássio ser reposto e passar de 3,3 mEq/L. Com K⁺ entre 3,3 e 5,0, repõe-se potássio no soro junto com a insulina.",
    "commentary": "Insulina regular EV em bolus imediata (A): com K⁺ < 3,3 mEq/L a insulina é adiada, pelo risco de hipocalemia fatal; e o primeiro passo é a hidratação.\n\nBicarbonato (B): só é considerado com pH < 6,9; com pH 7,12 não está indicado e pode piorar a hipocalemia e causar edema cerebral.\n\nGlargina SC basal (D): na CAD moderada/grave usa-se insulina regular EV contínua; a basal entra na transição, após a resolução.",
    "tip": "CAD: soro primeiro. K < 3,3 = repõe potássio e segura a insulina. Bicarbonato só se pH < 6,9.",
    "reference": "Umpierrez GE et al. Hyperglycemic Crises in Adults With Diabetes: A Consensus Report. Diabetes Care, 2024. Sociedade Brasileira de Diabetes. Diretriz 2024 – Crises hiperglicêmicas.",
    "tags": [
      "cetoacidose diabética",
      "reposição volêmica",
      "hipocalemia"
    ]
  },
  {
    "id": "famema2026-4",
    "topography": "14",
    "topic": "Choque",
    "module": "Clínica Médica",
    "text": "Sobre os diferentes tipos de choque, assinale a alternativa correta.",
    "options": [
      "No choque cardiogênico, a pressão venosa central (PVC) e a pressão de oclusão da artéria pulmonar costumam estar elevadas.",
      "No choque séptico inicial, predominam baixo débito cardíaco e pele fria.",
      "No choque hipovolêmico, a PVC costuma estar aumentada.",
      "No choque obstrutivo por embolia pulmonar, o débito cardíaco aumenta devido à pós-carga baixa."
    ],
    "correctAnswer": 0,
    "explanation": "No choque cardiogênico o problema é a bomba: o coração não ejeta o sangue que recebe, e as pressões de enchimento sobem. Por isso a PVC e a pressão de oclusão da artéria pulmonar (POAP) costumam estar elevadas, com débito cardíaco baixo e resistência vascular sistêmica alta (vasoconstrição compensatória).",
    "commentary": "Choque séptico inicial com baixo débito e pele fria (B): a fase inicial do choque séptico costuma ser hiperdinâmica, com débito alto, resistência baixa e extremidades quentes.\n\nPVC aumentada no hipovolêmico (C): na hipovolemia a PVC e a POAP estão baixas.\n\nDébito aumentado na embolia pulmonar (D): no choque obstrutivo a pós-carga do ventrículo direito aumenta e o débito cai.",
    "tip": "Choques: hipovolêmico = PVC baixa, DC baixo, RVS alta; cardiogênico = PVC/POAP altas, DC baixo, RVS alta; distributivo = DC alto, RVS baixa; obstrutivo = DC baixo com PVC alta.",
    "reference": "Vincent JL, De Backer D. Circulatory shock. N Engl J Med, 2013. Medicina Intensiva – AMIB.",
    "tags": [
      "choque",
      "choque cardiogênico",
      "hemodinâmica"
    ]
  },
  {
    "id": "famema2026-5",
    "topography": "1.1",
    "topic": "AVC",
    "module": "Clínica Médica",
    "text": "Paciente do sexo feminino, de 71 anos, portadora de hipertensão arterial e dislipidemia, em uso irregular das medicações, apresenta início súbito de hemiplegia direita e afasia há 170 min. Chega ao pronto atendimento apresentando no exame físico: PA: 190 x 100 mmHg; FC: 92 bpm; FR: 20 irpm; SatO₂: 95%; NIHSS: 14 pontos. Encaminhada para tomografia de crânio, que apresentou a imagem a seguir:\n\nQual é a conduta imediata?",
    "options": [
      "Reduzir PA para < 140/90 e iniciar AAS e clopidogrel.",
      "Reduzir PA para < 185/110 com anti-hipertensivo EV e realizar trombólise IV com alteplase.",
      "Fazer anticoagulação com heparina não fracionada em bomba e iniciar estatina.",
      "Aguardar 6 horas e repetir TC para confirmar o diagnóstico antes de intervir."
    ],
    "correctAnswer": 1,
    "image": "/images/famema2026-5.webp",
    "explanation": "Hemiplegia direita e afasia de início súbito há 170 minutos (dentro da janela de 4,5 h), NIHSS 14. A tomografia não mostra sangramento; apresenta apenas sinais precoces de isquemia no território da artéria cerebral média esquerda (setas: apagamento da ínsula e do núcleo lentiforme), sem área extensa já estabelecida. A paciente é candidata a trombólise IV com alteplase (ou tenecteplase).\n\nA PA de 190 × 100 mmHg precisa ser reduzida para menos de 185 × 110 mmHg antes do trombolítico, com anti-hipertensivo EV (labetalol, nicardipino ou nitroprussiato), e mantida abaixo de 180 × 105 nas 24 h seguintes. Com NIHSS alto, também se investiga oclusão de grande vaso para trombectomia.",
    "commentary": "PA < 140/90 com AAS e clopidogrel (A): baixar tanto a PA no AVC isquêmico agudo reduz a perfusão da penumbra; a dupla antiagregação é para AVC menor (NIHSS ≤ 3) ou AIT de alto risco, não para quem tem indicação de trombólise.\n\nHeparina não fracionada (C): anticoagulação plena na fase aguda não melhora desfechos e aumenta sangramento.\n\nAguardar 6 horas e repetir TC (D): tempo é cérebro; aguardar tira a paciente da janela de trombólise.",
    "tip": "AVC isquêmico até 4,5 h, TC sem sangramento: baixar PA para < 185 × 110 e trombolisar. Depois manter < 180 × 105.",
    "reference": "Powers WJ et al. 2019 AHA/ASA Guidelines for the Early Management of Acute Ischemic Stroke. Stroke, 2019. Ministério da Saúde. Linha de cuidado do AVC no adulto, 2020.",
    "tags": [
      "AVC isquêmico",
      "trombólise",
      "tomografia de crânio"
    ]
  },
  {
    "id": "famema2026-6",
    "topography": "16",
    "topic": "Pós-operatório",
    "module": "Cirurgia",
    "text": "Paciente de 64 anos, portadora de diabetes mellitus tipo 2, hipertensão arterial, hiperuricemia e hipertrigliceridemia, é submetida a colectomia segmentar por neoplasia de cólon há 5 dias. Evolui com febre persistente, dor abdominal progressiva e inapetência na enfermaria. Nas últimas 12 horas, apresentou vômitos biliosos e rebaixamento do nível de consciência sendo transferida para unidade de terapia intensiva. Ao exame físico: PA: 78 x 50 mmHg; FC: 124 bpm; FR: 28 irpm; SatO₂: 94% O₂ nasal; temperatura: 38,9 °C; pele fria; tempo de enchimento capilar 5 s; Glasgow: 13; abdome: distendido, doloroso difusamente, sinais de defesa involuntária e descompressão brusca dolorosa. Exames laboratoriais iniciais: lactato: 5,2 mmol/L; leucócitos: 24.000/mm³; plaquetas: 88.000/mm³; creatinina: 2,3 mg/dL (VR <1,2); bilirrubina total: 2,1 mg/dL. Realizou a tomografia de abdome sem contraste a seguir:\n\nQual é a medida fundamental, associada à antibioticoterapia e ao suporte hemodinâmico, para o manejo desse caso?",
    "options": [
      "Iniciar hidrocortisona EV e passagem de sonda nasogástrica, devido ao choque refratário.",
      "Indicar reabordagem cirúrgica urgente para controle de foco (lavagem de cavidade, revisão de anastomose, drenagem de coleções), associada à antibioticoterapia de amplo espectro.",
      "Transfundir concentrado de hemácias e plasma fresco congelado de imediato, visando melhorar a perfusão tecidual e correção da coagulopatia antes de qualquer decisão.",
      "Manter apenas antibioticoterapia de amplo espectro em doses máximas, aguardando estabilização clínica antes de qualquer intervenção invasiva."
    ],
    "correctAnswer": 1,
    "image": "/images/famema2026-6.webp",
    "explanation": "Paciente no 5º dia após colectomia com febre, peritonite difusa, choque (PA 78 × 50, lactato 5,2), disfunção renal, plaquetopenia e rebaixamento: choque séptico de foco abdominal, muito provavelmente por deiscência de anastomose. A tomografia mostra distensão de alças e líquido na cavidade.\n\nAlém de antibiótico de amplo espectro e reanimação hemodinâmica, a medida decisiva é o controle do foco: reoperação urgente para lavagem da cavidade, revisão da anastomose (em geral desfazendo-a com estomia) e drenagem de coleções. Sem controle do foco, o choque não se resolve.",
    "commentary": "Hidrocortisona e sonda nasogástrica (A): o corticoide é adjuvante no choque refratário a vasopressor e a sonda alivia vômitos, mas nenhum dos dois trata a causa.\n\nTransfundir hemácias e plasma antes de decidir (C): não há indicação de transfusão sem anemia ou sangramento importantes; atrasar a cirurgia piora o prognóstico.\n\nSó antibiótico aguardando estabilização (D): com peritonite por deiscência, o paciente não estabiliza sem controle cirúrgico do foco.",
    "tip": "Sepse abdominal pós-operatória com peritonite: antibiótico + reanimação + controle do foco (reoperação) o quanto antes, idealmente em até 6–12 h.",
    "reference": "Evans L et al. Surviving Sepsis Campaign: International Guidelines 2021. Crit Care Med, 2021. Sartelli M et al. WSES guidelines for management of intra-abdominal infections, 2017.",
    "tags": [
      "choque séptico",
      "deiscência de anastomose",
      "controle de foco"
    ]
  },
  {
    "id": "famema2026-7",
    "topography": "2.1",
    "topic": "SDRA",
    "module": "Clínica Médica",
    "text": "Paciente com síndrome do desconforto respiratório agudo (SDRA) moderada está em ventilação mecânica. Qual estratégia ventilatória é indicada?",
    "options": [
      "Volume corrente de 10 mL/kg de peso atual para garantir ventilação adequada.",
      "FiO₂ fixa em 100% para evitar dessaturação.",
      "Volume corrente de 6 mL/kg de peso predito, platô ≤ 30 cmH₂O, PEEP ajustada.",
      "PEEP mínima possível para reduzir risco de barotrauma."
    ],
    "correctAnswer": 2,
    "explanation": "Na SDRA a ventilação protetora reduz a mortalidade: volume corrente de 6 mL/kg de peso predito (pela altura e sexo, não pelo peso atual), pressão de platô ≤ 30 cmH₂O, driving pressure ≤ 15 cmH₂O e PEEP ajustada (tabela PEEP/FiO₂ ou titulação) para manter os alvéolos abertos. Na SDRA moderada a grave somam-se a posição prona (PaO₂/FiO₂ < 150) e, se necessário, bloqueio neuromuscular.",
    "commentary": "10 mL/kg de peso atual (A): volumes altos causam volutrauma; e o cálculo usa peso predito.\n\nFiO₂ fixa em 100% (B): oxigênio em excesso é tóxico; a FiO₂ é titulada para SpO₂ de 88–95%.\n\nPEEP mínima (D): na SDRA moderada/grave PEEP mais alta melhora a oxigenação e evita colapso cíclico; PEEP baixa piora a lesão.",
    "tip": "Ventilação protetora: VC 6 mL/kg de peso predito, platô ≤ 30, driving pressure ≤ 15, PEEP adequada; prona se P/F < 150.",
    "reference": "ARDS Network. Ventilation with lower tidal volumes. N Engl J Med, 2000. AMIB/SBPT. Diretrizes Brasileiras de Ventilação Mecânica, 2013. Grasselli G et al. ESICM guidelines on ARDS, 2023.",
    "tags": [
      "SDRA",
      "ventilação protetora",
      "ventilação mecânica"
    ]
  },
  {
    "id": "famema2026-8",
    "topography": "4.1",
    "topic": "Distúrbios hidroeletrolíticos",
    "module": "Clínica Médica",
    "text": "Sobre distúrbios eletrolíticos, assinale a correta.",
    "options": [
      "A hiponatremia hipervolêmica é típica de insuficiência cardíaca, cirrose e síndrome nefrótica.",
      "A hipercalemia nunca causa alterações no eletrocardiograma antes de níveis maiores que 8,0 mEq/L.",
      "A hipocalcemia cursa com alargamento de QRS e ondas T apiculadas.",
      "A hipernatremia sempre decorre de perda renal de água."
    ],
    "correctAnswer": 0,
    "explanation": "Na hiponatremia hipervolêmica há excesso de água corporal total maior que o excesso de sódio. Ocorre nos estados edematosos em que o volume circulante efetivo está reduzido, o que ativa o hormônio antidiurético e o sistema renina-angiotensina: insuficiência cardíaca, cirrose e síndrome nefrótica (além da doença renal avançada). O tratamento é restrição hídrica, diurético de alça e tratamento da doença de base.",
    "commentary": "Hipercalemia sem alteração no ECG abaixo de 8 (B): alterações (onda T apiculada, depois QRS largo) podem aparecer a partir de 5,5–6,5 mEq/L, e a correlação com o nível sérico é imperfeita.\n\nHipocalcemia com QRS largo e T apiculada (C): esses são achados de hipercalemia; a hipocalcemia prolonga o intervalo QT.\n\nHipernatremia sempre por perda renal (D): pode vir de perdas extrarrenais (suor, diarreia, queimaduras), ingestão insuficiente de água ou ganho de sódio.",
    "tip": "Hiponatremia hipervolêmica = IC, cirrose, nefrótica. Hipocalcemia = QT longo. Hipercalemia = T apiculada.",
    "reference": "Spasovski G et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol, 2014.",
    "tags": [
      "hiponatremia",
      "distúrbios eletrolíticos",
      "eletrocardiograma"
    ]
  },
  {
    "id": "famema2026-9",
    "topography": "3.2",
    "topic": "Hepatites virais",
    "module": "Clínica Médica",
    "text": "Paciente procura a UBS com resultados dos exames a seguir:\n\n• HBsAg: positivo\n• Anti-HBc total: positivo\n• Anti-HBc IgM: negativo\n• HBeAg: negativo\n• Anti-HBe: positivo\n• HBV-DNA: 18.000 UI/mL\n\nDiante do quadro, a orientação adequada seria informar ao paciente que se trata de",
    "options": [
      "fase imune tolerante.",
      "hepatite B crônica HBeAg negativa com atividade.",
      "infecção passada com imunidade natural.",
      "resposta vacinal bem-sucedida."
    ],
    "correctAnswer": 1,
    "explanation": "HBsAg positivo com anti-HBc total positivo e IgM negativo indica infecção crônica pelo vírus B. HBeAg negativo com anti-HBe positivo, mas com HBV-DNA de 18.000 UI/mL (acima de 2.000 UI/mL), caracteriza hepatite B crônica HBeAg negativa com replicação ativa, geralmente por variantes pré-core. É a fase em que há risco de progressão da lesão hepática, e o tratamento depende das transaminases e da fibrose.",
    "commentary": "Imunotolerância (A): é HBeAg positivo com carga viral muito alta (milhões de UI/mL) e transaminases normais, geralmente em jovens infectados por transmissão vertical.\n\nInfecção passada com imunidade (C): seria HBsAg negativo, anti-HBc positivo e anti-HBs positivo.\n\nResposta vacinal (D): seria apenas anti-HBs positivo, com HBsAg e anti-HBc negativos.",
    "tip": "HBsAg + anti-HBc IgG = crônica. HBeAg − com DNA > 2.000 = crônica HBeAg negativa com atividade. Anti-HBs isolado = vacina.",
    "reference": "Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas de Hepatite B e Coinfecções, 2023. EASL Clinical Practice Guidelines on hepatitis B, 2017.",
    "tags": [
      "hepatite B",
      "HBeAg negativo",
      "sorologia"
    ]
  },
  {
    "id": "famema2026-10",
    "topography": "1.1",
    "topic": "Cefaleias",
    "module": "Clínica Médica",
    "text": "Paciente do sexo feminino, de 27 anos, apresenta-se ao pronto atendimento com história de cefaleia súbita (thunderclap) há 4 horas associada a rigidez de nuca e mal-estar geral. Realizou uma tomografia de crânio sem contraste com 4,5 horas do início dos sintomas que não apresentaram alterações.\n\nA indicação da investigação diagnóstica correta seria:",
    "options": [
      "realizar uma angiotomografia de vasos intra e extracranianos.",
      "iniciar o tratamento com AINE endovenosos e reavaliar.",
      "realizar uma angioressonância magnética.",
      "realizar uma punção lombar para pesquisa de hemácias persistentes e xantocromia."
    ],
    "correctAnswer": 3,
    "explanation": "Cefaleia súbita em trovoada com rigidez de nuca: hemorragia subaracnóidea até prova em contrário. A tomografia sem contraste tem sensibilidade próxima de 100% nas primeiras 6 horas, mas apenas em aparelho de boa qualidade e laudada por neurorradiologista experiente; na prática e nas provas, TC normal com forte suspeita leva à punção lombar.\n\nNo liquor, procuram-se hemácias que não diminuem do primeiro ao último tubo e xantocromia (que aparece após cerca de 12 horas). Se positiva, segue-se angiotomografia para localizar o aneurisma.",
    "commentary": "Angiotomografia (A): localiza aneurismas, mas a sequência clássica após TC normal é a punção lombar; a angio pode mostrar aneurismas incidentais sem relação com o quadro.\n\nAINE e reavaliar (B): tratar sintomaticamente uma possível HSA atrasa o diagnóstico de uma condição com alto risco de ressangramento.\n\nAngiorressonância (C): não é o próximo passo e é menos disponível na emergência.",
    "tip": "Cefaleia em trovoada: TC sem contraste; se normal (sobretudo após 6 h), punção lombar (hemácias persistentes e xantocromia).",
    "reference": "Hoh BL et al. 2023 AHA/ASA Guideline for the Management of Patients With Aneurysmal Subarachnoid Hemorrhage. Stroke, 2023.",
    "tags": [
      "hemorragia subaracnóidea",
      "cefaleia em trovoada",
      "punção lombar"
    ]
  },
  {
    "id": "famema2026-11",
    "topography": "4.1",
    "topic": "Lesão renal aguda",
    "module": "Clínica Médica",
    "text": "Paciente idoso de 76 anos, portador de miocardiopatia dilatada hipertensiva, com fração de ejeção do ventrículo esquerdo reduzida, está em uso de sacubitril/valsartana, empagliflozina, espironolactona e furosemida. Apresenta história no pronto atendimento de vômitos e diarreia há 18h, evoluindo com sonolência e oligúrico. Realizou os exames iniciais que apresentavam as seguintes alterações:\n\n• Creatinina: 2,1 mg/dL (basal 1,0)\n• Na⁺ urinário: 45 mEq/L\n• FeNa: 2,1%\n• Ureia: 110 mg/dL\n• FeUreia: 27%\n• Densidade urinária: 1.030\n\nQual é a hipótese diagnóstica associada?",
    "options": [
      "Necrose tubular aguda com FeNa > 2%.",
      "Azotemia pré-renal com FeUreia < 35%.",
      "Obstrução pós-renal com FeNa elevada.",
      "Azotemia pré-renal com FeNa < 1%."
    ],
    "correctAnswer": 1,
    "explanation": "Idoso com IC em uso de diuréticos, sacubitril/valsartana e iSGLT2, com vômitos e diarreia, oligúria, elevação aguda da creatinina, ureia desproporcionalmente alta e urina concentrada (densidade 1.030): lesão renal aguda pré-renal por hipovolemia.\n\nA FeNa de 2,1% engana, porque os diuréticos aumentam a excreção de sódio. Nesse caso usa-se a fração de excreção de ureia, que não sofre influência deles: FeUreia < 35% indica causa pré-renal.",
    "commentary": "Necrose tubular aguda (A): a FeNa > 2% é efeito do diurético; a FeUreia baixa e a urina concentrada apontam para pré-renal.\n\nObstrução pós-renal (C): não há história de obstrução, e o diagnóstico é feito por ultrassom (hidronefrose).\n\nPré-renal com FeNa < 1% (D): o diagnóstico está certo, mas a FeNa do paciente é 2,1%.",
    "tip": "Em uso de diurético, a FeNa perde valor: use FeUreia (< 35% = pré-renal; > 50% = NTA).",
    "reference": "KDIGO Clinical Practice Guideline for Acute Kidney Injury, 2012. Carvounis CP et al. Significance of the fractional excretion of urea in the differential diagnosis of acute renal failure. Kidney Int, 2002.",
    "tags": [
      "lesão renal aguda",
      "fração de excreção de ureia",
      "azotemia pré-renal"
    ]
  },
  {
    "id": "famema2026-12",
    "topography": "3.2",
    "topic": "Peritonite bacteriana espontânea",
    "module": "Clínica Médica",
    "text": "Paciente de 58 anos, portador de cirrose alcoólica (Child-Pugh B), apresenta ascite tensa, febre, associadas a dor abdominal difusa e rebaixamento leve. Realizou paracentese diagnóstica que evidenciou líquido amarelo citrino, PMN: 780 células/mm³, proteínas: 1,0 g/dL, cultura pendente.\n\nA conduta preconizada para esse paciente seria:",
    "options": [
      "ceftriaxona e albumina endovenosos.",
      "ciprofloxacino oral e albumina apenas se a cultura for positiva.",
      "piperacilina-tazobactam e diurético de alça.",
      "aguardar o resultado da cultura do líquido ascítico para definir antibiótico."
    ],
    "correctAnswer": 0,
    "explanation": "Cirrótico com ascite, febre, dor abdominal e confusão, e líquido ascítico com mais de 250 polimorfonucleares/mm³: peritonite bacteriana espontânea. O tratamento começa logo, sem esperar a cultura, com cefalosporina de 3ª geração (ceftriaxona ou cefotaxima) EV.\n\nA albumina EV (1,5 g/kg no 1º dia e 1 g/kg no 3º dia) reduz a síndrome hepatorrenal e a mortalidade, sobretudo se creatinina > 1, ureia > 30 ou bilirrubina > 4 mg/dL.",
    "commentary": "Ciprofloxacino oral e albumina só com cultura positiva (B): o paciente tem encefalopatia, o que exige antibiótico EV; e a albumina independe da cultura.\n\nPiperacilina-tazobactam e diurético de alça (C): o espectro amplo fica para infecção hospitalar ou resistência; diurético na PBE aumenta o risco de lesão renal.\n\nAguardar a cultura (D): o diagnóstico é feito pela contagem de PMN ≥ 250, e o atraso aumenta a mortalidade.",
    "tip": "PBE: PMN ≥ 250 no líquido ascítico → ceftriaxona/cefotaxima + albumina 1,5 g/kg (D1) e 1 g/kg (D3).",
    "reference": "Biggins SW et al. AASLD Practice Guidance on Ascites, SBP and Hepatorenal Syndrome. Hepatology, 2021. Sociedade Brasileira de Hepatologia. Recomendações sobre complicações da cirrose.",
    "tags": [
      "peritonite bacteriana espontânea",
      "cirrose",
      "albumina"
    ]
  },
  {
    "id": "famema2026-13",
    "topography": "14",
    "topic": "Parada cardiorrespiratória",
    "module": "Clínica Médica",
    "text": "Paciente de 54 anos, com história de dor torácica súbita, evoluindo com perda de consciência em casa. Os familiares iniciaram manobras de reanimação cardiopulmonar. O SAMU chegou após 6 minutos e evidenciou a presença do DEA do ritmo de fibrilação ventricular.\n\nDurante o atendimento, após o 1o choque e manutenção das compressões torácicas, qual é a conduta adequada?",
    "options": [
      "Administrar atropina EV 1 mg imediatamente.",
      "Realizar trombólise empírica por possível infarto agudo do miocárdico.",
      "Interromper compressões para intubação orotraqueal.",
      "Manter RCP por 2 minutos, sem checar pulso, e administrar adrenalina EV a cada 3–5 minutos."
    ],
    "correctAnswer": 3,
    "explanation": "Fibrilação ventricular: após o primeiro choque, as compressões devem ser retomadas imediatamente por 2 minutos, sem checar pulso, antes de nova análise do ritmo. A adrenalina 1 mg EV/IO a cada 3–5 minutos entra nos ritmos chocáveis após o segundo choque, e a amiodarona (300 mg) após o terceiro.\n\nA alternativa D resume a sequência correta de manutenção da RCP de alta qualidade com adrenalina.",
    "commentary": "Atropina 1 mg (A): foi retirada dos algoritmos de PCR; não tem benefício.\n\nTrombólise empírica (B): não é rotina na PCR; só se considera com suspeita forte de TEP maciço.\n\nInterromper compressões para intubar (C): a via aérea avançada não deve interromper as compressões; pode-se ventilar com bolsa-válvula-máscara na proporção 30:2.",
    "tip": "FV/TV sem pulso: choque → 2 min de RCP → checa ritmo. Adrenalina após o 2º choque (a cada 3–5 min); amiodarona após o 3º.",
    "reference": "American Heart Association. Guidelines for CPR and ECC, 2020 (atualização 2025). Sociedade Brasileira de Cardiologia. Atualização da Diretriz de RCP e Cuidados Cardiovasculares de Emergência, 2019.",
    "tags": [
      "parada cardiorrespiratória",
      "fibrilação ventricular",
      "adrenalina"
    ]
  },
  {
    "id": "famema2026-14",
    "topography": "14",
    "topic": "Parada cardiorrespiratória",
    "module": "Clínica Médica",
    "text": "Paciente de 54 anos, com história de dor torácica súbita, evoluindo com perda de consciência em casa. Os familiares iniciaram manobras de reanimação cardiopulmonar. O SAMU chegou após 6 minutos e evidenciou a presença do DEA do ritmo de fibrilação ventricular. Após retorno da circulação espontânea, 12 minutos após PCR, no ambiente hospitalar, o paciente permanece comatoso (Glasgow 6), ventilado e estável hemodinamicamente sob noradrenalina em dose baixa.\n\nQual é a conduta recomendada para neuroproteção?",
    "options": [
      "Iniciar imediatamente o manejo direcionado de temperatura (TTM), mantendo-a entre 32–36 °C por no mínimo 24 horas.",
      "Resfriar o paciente de forma agressiva até < 30 °C por 48 horas, pois temperaturas mais baixas oferecem maior neuroproteção.",
      "Manter normotermia estrita (36–37,5 °C) apenas, evitando hipotermia, pois o benefício está em prevenir a febre.",
      "Utilizar corticoides em altas doses para reduzir edema cerebral em substituição ao controle de temperatura."
    ],
    "correctAnswer": 0,
    "explanation": "Após retorno da circulação espontânea, o adulto que não obedece comandos (Glasgow 6) deve receber controle direcionado de temperatura, que reduz a lesão neurológica. A recomendação usada pela banca (AHA) é manter temperatura constante entre 32 e 36 °C por pelo menos 24 horas, evitando febre depois.\n\nAtualizações mais recentes (ILCOR/ERC 2021 e AHA 2023) passaram a aceitar faixa de 32 a 37,5 °C, com ênfase em evitar febre por ao menos 72 horas, mas a alternativa A continua sendo a mais completa.",
    "commentary": "Resfriar abaixo de 30 °C por 48 h (B): hipotermia profunda causa arritmias, coagulopatia e infecções, sem benefício adicional.\n\nApenas normotermia (C): prevenir febre é parte do cuidado, mas a banca considera que o controle ativo da temperatura (32–36 °C) é a medida recomendada.\n\nCorticoide em altas doses (D): não tem papel na neuroproteção pós-PCR e não substitui o controle de temperatura.",
    "tip": "Pós-PCR em coma: controle de temperatura (32–36 °C por ≥ 24 h, depois evitar febre), PAM ≥ 65, SpO₂ 92–98%, normocapnia, glicemia controlada.",
    "reference": "Panchal AR et al. 2020 AHA Guidelines – Post-Cardiac Arrest Care. Perman SM et al. 2023 AHA Focused Update on Adult Advanced Cardiovascular Life Support. Circulation, 2024.",
    "tags": [
      "cuidados pós-PCR",
      "controle direcionado de temperatura",
      "neuroproteção"
    ]
  },
  {
    "id": "famema2026-15",
    "topography": "14",
    "topic": "Distúrbios hidroeletrolíticos",
    "module": "Clínica Médica",
    "text": "Paciente de 32 anos, trazido pelo suporte avançado do SAMU, é um trabalhador rural que foi encontrado após soterramento parcial em vala de obra, onde permaneceu por cerca de 6 horas até o resgate. Chega à sala de emergência referindo mialgia intensa em coxas e braços, urina escura e fraqueza progressiva. Ao exame físico: PA: 92 × 60 mmHg; FC: 122 bpm; FR: 24 irpm; SatO2: 95% AA; temperatura: 37,8 ºC; pele fria, enchimento capilar lento; dor difusa em musculatura de membros inferiores, tumefação e rigidez palpável em coxas; sem sopros cardíacos, crepitações ou sinais de congestão. Os exames laboratoriais apresentam: creatinina: 2,0 mg/dL; potássio: 6,3 mEq/L; cálcio total: 7,2 mg/dL; fósforo: 6,0 mg/dL; CK total: 19.400 U/L; DHL: 950 U/L; urina: hematúria 3+/6+, sem hemácias no sedimento. O eletrocardiograma é apresentado a seguir:\n\nQual é a conduta inicial prioritária?",
    "options": [
      "Furosemida endovenoso em altas doses.",
      "Soro fisiológico 0,9% e gluconato de cálcio e insulina/glicose endovenosos.",
      "Bicarbonato de sódio endovenoso 200 mL/h para alcalinizar a urina.",
      "Restrição hídrica até estabilizar os níveis séricos de creatinofosfoquinase."
    ],
    "correctAnswer": 1,
    "image": "/images/famema2026-15.webp",
    "explanation": "Trabalhador soterrado por horas, com dor e rigidez muscular, urina escura, CK de 19.400 U/L, hematúria na fita sem hemácias no sedimento (mioglobinúria), creatinina elevada, hipercalemia, hipocalcemia e hiperfosfatemia: rabdomiólise por esmagamento. O ECG mostra ondas T apiculadas e alargamento do QRS, sinais de hipercalemia com risco de arritmia.\n\nA prioridade é dupla: hidratação vigorosa com SF 0,9% (meta de diurese de 200–300 mL/h) para proteger o rim da mioglobina, e tratamento imediato da hipercalemia com alteração eletrocardiográfica: gluconato de cálcio EV para estabilizar a membrana do miocárdio e insulina com glicose para levar o potássio para dentro das células.",
    "commentary": "Furosemida em altas doses (A): com hipovolemia, o diurético piora a perfusão renal e a lesão por mioglobina.\n\nBicarbonato para alcalinizar a urina (C): não mostrou benefício claro e pode piorar a hipocalcemia; não é a prioridade nem a dose está correta.\n\nRestrição hídrica (D): o oposto do necessário; a hidratação precoce é a medida que mais previne lesão renal.",
    "tip": "Rabdomiólise: soro fisiológico abundante (diurese 200–300 mL/h). Hipercalemia com ECG alterado: gluconato de cálcio + insulina/glicose.",
    "reference": "Bosch X et al. Rhabdomyolysis and acute kidney injury. N Engl J Med, 2009. Medicina de Emergência – Abordagem Prática (USP), 2023.",
    "tags": [
      "rabdomiólise",
      "síndrome do esmagamento",
      "hipercalemia"
    ]
  },
  {
    "id": "famema2026-16",
    "topography": "2.1",
    "topic": "Pneumonia comunitária",
    "module": "Clínica Médica",
    "text": "Em relação ao escore CURB-65 para estratificação de gravidade na pneumonia adquirida na comunidade (PAC), assinale a alternativa correta.",
    "options": [
      "Cada critério do CURB-65 recebe peso diferente, sendo confusão e hipotensão os de maior pontuação.",
      "Um escore ≥ 2 já indica alto risco, devendo o paciente ser obrigatoriamente admitido em UTI.",
      "O CURB-65 atribui 1 ponto para cada critério (confusão, ureia > 50 mg/dL, FR ≥ 30, PA sistólica < 90 ou diastólica ≤ 60, idade ≥ 65 anos); escores 0–1 sugerem tratamento ambulatorial, 2 sugerem internação hospitalar e ≥ 3 indicam alto risco e possível necessidade de UTI.",
      "O CURB-65 não se aplica a pacientes idosos, pois a idade ≥ 65 anos já configura critério isolado de internação."
    ],
    "correctAnswer": 2,
    "explanation": "O CURB-65 dá 1 ponto para cada critério: Confusão mental, Ureia > 50 mg/dL (> 7 mmol/L), Frequência respiratória ≥ 30 irpm, PA sistólica < 90 ou diastólica ≤ 60 mmHg e idade ≥ 65 anos. Pontuação 0–1: tratamento ambulatorial; 2: considerar internação; 3 a 5: pneumonia grave, com avaliação de UTI (sobretudo 4–5).",
    "commentary": "Pesos diferentes (A): todos os critérios valem 1 ponto.\n\nEscore ≥ 2 exige UTI (B): 2 pontos indicam internação em enfermaria ou observação; a UTI é considerada com 3 ou mais e definida por critérios de gravidade (ATS/IDSA).\n\nNão se aplica a idosos (D): a idade ≥ 65 é um dos critérios do escore e, isolada, não obriga internação.",
    "tip": "CURB-65: 0–1 casa; 2 internação; ≥ 3 grave, pensar em UTI. Na atenção primária, CRB-65 (sem ureia).",
    "reference": "Corrêa RA et al. Recomendações para o manejo da pneumonia adquirida na comunidade (SBPT). J Bras Pneumol, 2018. Lim WS et al. Thorax, 2003.",
    "tags": [
      "pneumonia adquirida na comunidade",
      "CURB-65",
      "estratificação de risco"
    ]
  },
  {
    "id": "famema2026-17",
    "topography": "16",
    "topic": "Apendicite aguda",
    "module": "Cirurgia",
    "text": "Homem, 24 anos, previamente saudável, refere dor periumbilical há 12 horas que migrou para fossa ilíaca direita, acompanhada de anorexia, náuseas e febre (37,8 °C). À inspeção: dor à palpação e defesa localizada em FID, sinal de Blumberg positivo. Leucócitos 18.500/mm³ com desvio à esquerda; PCR levemente elevada.\n\nQual é a conduta mais adequada nesse cenário?",
    "options": [
      "Internar, analgesia e observar 48 horas antes de decidir cirurgia.",
      "Solicitar TC abdominopélvico com contraste e operar somente se confirmado por imagem.",
      "Realizar apendicectomia laparoscópica sem necessidade de exame de imagem adicional.",
      "Iniciar antibioticoterapia e programar apendicectomia eletiva em 2 – 4 semanas."
    ],
    "correctAnswer": 2,
    "explanation": "Homem jovem com dor periumbilical que migrou para a fossa ilíaca direita, anorexia, náuseas, febre, defesa e Blumberg positivo, com leucocitose e desvio: quadro clássico de apendicite aguda (escore de Alvarado alto, cerca de 9). Com diagnóstico clínico claro, não é preciso exame de imagem; a conduta é apendicectomia, de preferência laparoscópica, com antibiótico profilático.\n\nImagem fica para casos duvidosos, mulheres em idade fértil, idosos, crianças e suspeita de complicação.",
    "commentary": "Observar 48 horas (A): atrasar a cirurgia aumenta o risco de perfuração.\n\nTC obrigatória (B): em homem jovem com quadro típico, a TC apenas atrasa a cirurgia e expõe a radiação.\n\nAntibiótico e apendicectomia de intervalo (D): a cirurgia tardia é para plastrão ou abscesso; na apendicite não complicada a opção não operatória com antibiótico existe, mas com recidiva alta e não com cirurgia programada em 2–4 semanas.",
    "tip": "Apendicite com quadro típico em homem jovem (Alvarado ≥ 7): cirurgia sem necessidade de imagem.",
    "reference": "Di Saverio S et al. Diagnosis and treatment of acute appendicitis: 2020 update of the WSES Jerusalem guidelines. World J Emerg Surg, 2020.",
    "tags": [
      "apendicite aguda",
      "escore de Alvarado",
      "apendicectomia laparoscópica"
    ]
  },
  {
    "id": "famema2026-18",
    "topography": "16",
    "topic": "Trauma torácico",
    "module": "Cirurgia",
    "text": "Homem, 28 anos, vítima de acidente de motocicleta x poste, trazido ao PS com dor torácica esquerda e taquicardia (FC: 130 bpm). Ausência de lesões exsanguinantes. À chegada, foi diagnosticado com hemotórax esquerdo e realizada drenagem pleural (toracostomia) com retorno instantâneo de 1.600 mL de sangue no dreno. FAST negativo nos 4 focos abdominais; ausência de trauma pélvico e fraturas de extremidades. Permanece em choque hipovolêmico apesar de reposição inicial adequada.\n\nA conduta mais indicada nesse momento é",
    "options": [
      "manter drenagem por toracostomia e observação no setor de emergência por 24 horas.",
      "realizar toracotomia de emergência no centro cirúrgico para controle de hemorragia intratorácica.",
      "realizar tomografia computadorizada de tórax antes de qualquer intervenção cirúrgica.",
      "inserir segundo dreno torácico no mesmo hemotórax e aguardar retorno hemodinâmico."
    ],
    "correctAnswer": 1,
    "explanation": "Hemotórax com saída imediata de 1.600 mL pelo dreno e choque persistente apesar da reposição: hemotórax maciço com sangramento ativo. Pelo ATLS, drenagem inicial ≥ 1.500 mL, débito ≥ 200 mL/h por 2–4 horas ou necessidade contínua de transfusão indicam toracotomia no centro cirúrgico para controle da hemorragia.",
    "commentary": "Manter dreno e observar 24 h (A): o paciente em choque com sangramento maciço morre sem controle cirúrgico.\n\nTC antes da cirurgia (C): paciente instável não vai para a tomografia.\n\nSegundo dreno (D): mais um dreno não para o sangramento; a fonte precisa ser controlada cirurgicamente.",
    "tip": "Hemotórax: ≥ 1.500 mL na drenagem inicial ou ≥ 200 mL/h por 2–4 h = toracotomia.",
    "reference": "American College of Surgeons. ATLS – Advanced Trauma Life Support, 11ª ed., 2025.",
    "tags": [
      "hemotórax maciço",
      "trauma torácico",
      "toracotomia"
    ]
  },
  {
    "id": "famema2026-19",
    "topography": "1.1",
    "topic": "TCE",
    "module": "Cirurgia",
    "text": "Mulher, 72 anos, em uso de anticoagulantes (varfarina) por fibrilação atrial crônica, dá entrada no pronto-socorro após queda de própria altura. Apresenta lucidez inicial, mas se queixa de cefaleia severa e episódio de confusão transitória (orientação parcialmente prejudicada no local). Ao exame: Escala de Coma de Glasgow (ECG): 14 (AO:4; RV:4; RM:6), sem déficit focal evidente. Estável hemodinamicamente; sem outras lesões.\n\nDe acordo com as atuais diretrizes do ATLS™ (11ª edição, 2025), a conduta para investigar possível traumatismo craniano deverá ser:",
    "options": [
      "observar a paciente por 24 horas, tendo em vista a ECG = 14; sem necessidade de exames de imagem complementares.",
      "indicar radiografia simples de crânio para triagem inicial, sem necessidade de tomografia computadorizada (TC) de crânio.",
      "avaliar possível deterioração clínica em 6 horas antes de indicar TC.",
      "indicar TC de crânio, pelo fato de a paciente ser idosa (>65 anos) e apresentar cefaleia e alteração neurológica."
    ],
    "correctAnswer": 3,
    "explanation": "Idosa anticoagulada com varfarina, após queda, com cefaleia intensa, confusão e Glasgow 14: TCE leve de alto risco. Uso de anticoagulante, idade ≥ 65 anos, Glasgow < 15 e cefaleia/confusão são indicações de tomografia de crânio sem contraste, pelo risco alto de hematoma intracraniano (inclusive tardio).\n\nAlém da TC, deve-se checar o INR e, se houver sangramento, reverter a anticoagulação (complexo protrombínico e vitamina K).",
    "commentary": "Observar 24 h sem imagem (A): com anticoagulante e alteração neurológica, a TC é obrigatória.\n\nRadiografia de crânio (B): não avalia lesão intracraniana e não é usada na investigação do TCE.\n\nAguardar deterioração em 6 h (C): o objetivo é diagnosticar o hematoma antes da piora.",
    "tip": "TCE leve em idoso anticoagulado: TC de crânio sempre (e considerar repetir se piorar). Reverter a anticoagulação se houver sangramento.",
    "reference": "American College of Surgeons. ATLS, 11ª ed., 2025. Stiell IG et al. The Canadian CT Head Rule. Lancet, 2001.",
    "tags": [
      "traumatismo cranioencefálico",
      "anticoagulação",
      "tomografia de crânio"
    ]
  },
  {
    "id": "famema2026-20",
    "topography": "16",
    "topic": "Trauma abdominal",
    "module": "Cirurgia",
    "text": "Homem, 34 anos, dá entrada na emergência, vítima de ferimento por arma branca (facada) na região lateral do abdome direito. Ao exame físico, está hemodinamicamente estável, sem sinais de peritonite, sem evisceração e exame abdominal normal realizado por equipe cirúrgica experiente. O FAST inicial é negativo para líquido livre.\n\nQual é a conduta mais apropriada?",
    "options": [
      "Observação por 24 horas com avaliação seriada + TC abdominal e conduta não operatória, se não forem detectadas lesões.",
      "Laparotomia exploradora imediata, pela presença de ferimento penetrante no abdome e alta probabilidade de violação de órgãos intraperitoneais.",
      "Alta do paciente, com retorno em 7 dias para reavaliação e monitoramento.",
      "Lavado peritoneal diagnóstico, para obtenção de dados mais confiáveis de sangue ou fluidos intracavitários."
    ],
    "correctAnswer": 0,
    "explanation": "Ferimento por arma branca no flanco direito em paciente estável, sem peritonite, sem evisceração e com exame abdominal confiável: candidato a tratamento não operatório seletivo. A conduta é observação com exames físicos seriados por cirurgião (24 horas) e tomografia com contraste para avaliar lesão de órgãos sólidos e retroperitônio; se não houver lesão que exija cirurgia, mantém-se a conduta conservadora.\n\nInstabilidade, peritonite ou evisceração indicam laparotomia.",
    "commentary": "Laparotomia imediata (B): nos ferimentos por arma branca, muitas lesões não violam o peritônio ou não exigem reparo; a laparotomia de rotina leva a muitas cirurgias desnecessárias.\n\nAlta com retorno em 7 dias (C): lesões de víscera oca podem se manifestar em horas; é preciso observar.\n\nLavado peritoneal (D): foi substituído por FAST e TC; é invasivo e pouco específico.",
    "tip": "FAB no abdome: instável, peritonite ou evisceração = laparotomia. Estável e exame confiável = exame seriado + TC.",
    "reference": "American College of Surgeons. ATLS, 11ª ed., 2025. Martin MJ et al. Evaluation and management of abdominal stab wounds: a Western Trauma Association algorithm. J Trauma Acute Care Surg, 2018.",
    "tags": [
      "trauma abdominal penetrante",
      "ferimento por arma branca",
      "tratamento não operatório"
    ]
  },
  {
    "id": "famema2026-21",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Homem, 45 anos, é admitido na sala de emergência, vítima de briga com trauma facial grave: múltiplas fraturas mandibulares, hematoma facial volumoso, sangramento profuso pela boca e obstrução parcial das vias aéreas superiores. Sat. O2: 82% com máscara. Foram realizadas duas tentativas de intubação orotraqueal sem sucesso por visualização impossibilitada (edema e sangue); ventilação com máscara é ineficaz.\n\nA conduta mais apropriada para garantir via aérea definitiva é",
    "options": [
      "realizar mais tentativas de intubação orotraqueal guiadas por laringoscópio óptico.",
      "tentar intubação nasotraqueal com fio-guia.",
      "realizar cricotireoidostomia cirúrgica de emergência.",
      "inserir dispositivo supraglótico (máscara laríngea) e aguardar melhoras."
    ],
    "correctAnswer": 2,
    "explanation": "Trauma facial grave com sangramento e edema, duas tentativas de intubação sem sucesso e ventilação com máscara ineficaz, com hipoxemia (SatO₂ 82%): situação 'não intubo, não oxigeno'. A conduta é via aérea cirúrgica imediata, a cricotireoidostomia cirúrgica (em crianças pequenas, punção cricotireoidiana).",
    "commentary": "Mais tentativas com laringoscópio óptico (A): repetir tentativas na situação não intubo, não oxigeno atrasa a oxigenação e piora o edema e o sangramento.\n\nIntubação nasotraqueal (B): é contraindicada no trauma facial grave (risco de falso trajeto e de fratura de base de crânio) e exige respiração espontânea.\n\nDispositivo supraglótico e aguardar (D): pode servir de ponte em algumas situações, mas com sangue e distorção anatômica dificilmente veda; e não é via aérea definitiva.",
    "tip": "Não intubo, não oxigeno: cricotireoidostomia cirúrgica imediata.",
    "reference": "American College of Surgeons. ATLS, 11ª ed., 2025. Frerk C et al. Difficult Airway Society 2015 guidelines. Br J Anaesth, 2015.",
    "tags": [
      "via aérea difícil",
      "cricotireoidostomia",
      "trauma de face"
    ]
  },
  {
    "id": "famema2026-22",
    "topography": "16",
    "topic": "Perfuração de víscera oca",
    "module": "Cirurgia",
    "text": "Homem, 42 anos, procura pronto-atendimento por dor abdominal súbita há 30 minutos, inicialmente epigástrica e depois difusa, muito intensa, associada a náuseas. Refere uso frequente de AINEs. Ao exame: FC 124 bpm, PA 112/73 mmHg, Temp. 37,6°C, abdome em tábua, sem ruídos hidroaéreos, sinal de Jobert presente e descompressão brusca positiva.\n\nA principal hipótese diagnóstica desse paciente é",
    "options": [
      "pancreatite aguda.",
      "obstrução intestinal por tumor de cólon.",
      "apendicite aguda complicada com abscesso.",
      "perfuração de víscera oca por úlcera péptica."
    ],
    "correctAnswer": 3,
    "explanation": "Dor abdominal súbita e intensa, iniciada no epigástrio e depois difusa, em usuário frequente de AINE, com abdome em tábua e sinal de Jobert (perda da macicez hepática à percussão, por ar entre o fígado e a parede): úlcera péptica perfurada com peritonite química. A radiografia de tórax em pé ou a TC confirma o pneumoperitônio, e o tratamento é cirúrgico.",
    "commentary": "Pancreatite aguda (A): dor epigástrica em faixa, com vômitos, mas sem abdome em tábua tão precoce nem sinal de Jobert.\n\nObstrução por tumor de cólon (B): evolução mais lenta, com distensão e parada de eliminação de gases e fezes.\n\nApendicite complicada com abscesso (C): história de dias, com dor que migra para a fossa ilíaca direita, não início súbito em epigástrio.",
    "tip": "Dor súbita em facada + abdome em tábua + sinal de Jobert (+ AINE) = úlcera perfurada.",
    "reference": "Tarasconi A et al. Perforated and bleeding peptic ulcer: WSES guidelines. World J Emerg Surg, 2020.",
    "tags": [
      "úlcera péptica perfurada",
      "sinal de Jobert",
      "abdome agudo perfurativo"
    ]
  },
  {
    "id": "famema2026-23",
    "topography": "16",
    "topic": "Obstrução intestinal",
    "module": "Cirurgia",
    "text": "Homem de 39 anos procurou o serviço médico em duas ocasiões na mesma semana por parada de eliminação de gases e fezes, distensão abdominal importante, náuseas e vômitos biliosos há 4 dias. No segundo atendimento, refere piora da dor nas últimas 12 horas. Ao exame físico, observa-se cicatriz mediana ampla (cirurgia prévia por trauma abdominal). No primeiro atendimento, os ruídos hidroaéreos estavam aumentados, mas agora se encontram diminuídos. A radiografia de abdome em posição supina mostra dilatação importante de alças de intestino delgado e ausência de gás nas porções distais do cólon e reto.\n\nEsse quadro aponta para o seguinte diagnóstico:",
    "options": [
      "perfuração de víscera oca.",
      "obstrução intestinal alta.",
      "volvo de sigmoide.",
      "sinal da alça sentinela."
    ],
    "correctAnswer": 1,
    "image": "/images/famema2026-23.webp",
    "explanation": "Homem com laparotomia prévia, parada de eliminação de gases e fezes, distensão e vômitos biliosos: obstrução intestinal mecânica do intestino delgado, provavelmente por bridas (principal causa em operados). A radiografia mostra alças de delgado dilatadas e centrais, com pregas coniventes (aspecto de 'pilha de moedas') e ausência de gás no cólon e reto.\n\nA banca chama de obstrução 'alta' a do intestino delgado, em oposição à obstrução do cólon. A piora da dor e os ruídos que passaram de aumentados a diminuídos sugerem sofrimento de alça, o que pesa a favor de cirurgia.",
    "commentary": "Perfuração de víscera oca (A): a radiografia mostra alças dilatadas, não pneumoperitônio, e a história é obstrutiva.\n\nVolvo de sigmoide (C): causa grande dilatação do cólon sigmoide em 'grão de café', com distensão maior que vômitos, típico de idosos constipados.\n\nAlça sentinela (D): é uma alça dilatada isolada próxima a um processo inflamatório (pancreatite, apendicite), não dilatação difusa de delgado.",
    "tip": "Obstrução de delgado em operado = bridas. Sinais de sofrimento (dor contínua, febre, peritonite, ruídos que somem) = cirurgia.",
    "reference": "Ten Broek RPG et al. Bologna guidelines for diagnosis and management of adhesive small bowel obstruction (ASBO): 2017 update. World J Emerg Surg, 2018.",
    "tags": [
      "obstrução intestinal",
      "bridas",
      "radiografia de abdome"
    ]
  },
  {
    "id": "famema2026-24",
    "topography": "16",
    "topic": "Pré-operatório",
    "module": "Cirurgia",
    "text": "O projeto Acerto é um programa multimodal de cuidados perioperatórios, pioneiro no território nacional. Cuidados tradicionais são modificados nesse projeto, com base na evidência de estudos randomizados e meta-análises. Os 5 principais elementos desse projeto são:",
    "options": [
      "educação e mobilização do paciente no pré-operatório; abreviamento do jejum pré-operatório e realimentação precoce; anestesia multimodal com foco em analgesia e controle de náuseas/vômitos; hidratação e nutrição balanceadas no intra e pós-operatório; mobilização precoce no pós-operatório.",
      "uso de Equipamentos de Proteção Individual (EPIs); adoção de Barreiras Físicas e Contenção como áreas de trabalho isoladas e o descarte seguro de resíduos; implementação de Boas Práticas e Procedimentos Operacionais Padrão (POPs); higienização das mãos; vacinação adequada.",
      "manter ferida operatória limpa e hidratada; dieta equilibrada rica em proteínas e vitaminas; proteção da pele da exposição solar; evitar traumas e seguir as orientações médicas sobre curativos; atividades físicas.",
      "assepsia rigorosa para prevenir infecções; hemostasia para evitar hematomas; adequação do fio e técnica ao tipo de ferida e tecidos envolvidos; aproximação correta das bordas sem gerar tensão excessiva para evitar isquemia; e a eliminação de espaços mortos para prevenir acúmulo de fluidos."
    ],
    "correctAnswer": 0,
    "explanation": "O Projeto ACERTO (ACEleração da Recuperação TOtal pós-operatória), criado em Cuiabá, adapta ao Brasil os princípios do ERAS. Entre seus pilares estão: informação e preparo do paciente no pré-operatório; abreviação do jejum (líquidos claros com carboidrato até 2 horas antes) e realimentação precoce; analgesia multimodal com prevenção de náuseas e vômitos, poupando opioides; hidratação venosa restritiva e equilibrada e nutrição adequada; e mobilização precoce. Também inclui evitar preparo de cólon e drenos e sondas de rotina.",
    "commentary": "EPIs, barreiras e POPs (B): são medidas de biossegurança, não de recuperação pós-operatória.\n\nCuidados com a ferida e proteção solar (C): orientações de cuidado com cicatriz após a alta.\n\nAssepsia, hemostasia e técnica de sutura (D): são princípios de técnica cirúrgica.",
    "tip": "ACERTO/ERAS: jejum abreviado, realimentação precoce, analgesia multimodal, hidratação restritiva, mobilização precoce, sem drenos e sondas de rotina.",
    "reference": "Aguilar-Nascimento JE et al. Diretriz ACERTO de intervenções nutricionais no perioperatório em cirurgia geral eletiva. Rev Col Bras Cir, 2017.",
    "tags": [
      "projeto ACERTO",
      "ERAS",
      "perioperatório"
    ]
  },
  {
    "id": "famema2026-25",
    "topography": "16",
    "topic": "Hérnias",
    "module": "Cirurgia",
    "text": "Durante uma hernioplastia incisional com conteúdo intestinal no saco herniário, a cirurgiã principal, chefe da equipe, solicita um instrumento para apreensão delicada de tecido intestinal, sem causar trauma nem perfuração. A instrumentadora, aluna do internato, oferece uma pinça de Kocher, mas a cirurgiã recusa.\n\nQual das seguintes pinças é a mais apropriada para atender a solicitação da cirurgiã?",
    "options": [
      "Pinça de Allis.",
      "Pinça de Rochester.",
      "Pinça de Babcock.",
      "Pinça anatômica com dentes."
    ],
    "correctAnswer": 2,
    "explanation": "A pinça de Babcock tem extremidades arredondadas e fenestradas, sem dentes, e foi feita para apreender estruturas delicadas e tubulares, como alças intestinais, tubas e apêndice, sem perfurar ou esmagar.",
    "commentary": "Pinça de Allis (A): tem pequenos dentes na ponta e é traumática para alça intestinal; usada em tecidos mais firmes (aponeurose, borda de tecido a ser ressecado).\n\nPinça de Rochester (B): pinça hemostática forte (ranhuras transversais), usada para clampear pedículos e tecidos espessos.\n\nPinça anatômica com dentes (D): o dente perfura tecidos delicados; é usada para pele e aponeurose.",
    "tip": "Alça intestinal: Babcock (sem dente). Allis e Kocher têm dentes; Rochester é hemostática forte.",
    "reference": "Goffi FS. Técnica Cirúrgica: bases anatômicas, fisiopatológicas e técnicas da cirurgia, 4ª ed. Townsend CM. Sabiston Textbook of Surgery, 21ª ed.",
    "tags": [
      "instrumental cirúrgico",
      "pinça de Babcock",
      "técnica cirúrgica"
    ]
  },
  {
    "id": "famema2026-26",
    "topography": "16",
    "topic": "Pré-operatório",
    "module": "Cirurgia",
    "text": "Será realizada uma segmentectomia hepática em um paciente com hepatocarcinoma localizado. O cirurgião principal é canhoto, e sua equipe deve preparar a mesa de instrumentação cirúrgica de forma ergonômica e segura para o procedimento. O instrumentador, destro e acostumado com cirurgiões destros, organiza o material como de rotina.\n\nDas medidas indicadas a seguir, aquela que representa a adequação correta da montagem da mesa para o cirurgião canhoto, nesse tipo de cirurgia, é:",
    "options": [
      "manter a disposição padrão, com instrumentos especiais voltados para a parte inferior da mesa de instrumentos.",
      "o(s) bisturi(s), tesouras, fios e porta-agulhas devem ser dispostos à esquerda da mesa de instrumentos.",
      "colocar todos os instrumentos simetricamente no centro da mesa para uso indiferente.",
      "dispor os afastadores e pinças especiais à esquerda da mesa de instrumentos, respeitando-se a dominância do cirurgião."
    ],
    "correctAnswer": 1,
    "explanation": "A mesa de instrumentação é montada de acordo com a mão dominante do cirurgião, para que os instrumentos de diérese e síntese (bisturi, tesouras, porta-agulhas e fios), os mais usados pela mão dominante, fiquem do lado de mais fácil acesso. Para o cirurgião canhoto, a organização se espelha: esses instrumentos passam para o lado esquerdo da mesa, mantendo a ordem dos tempos cirúrgicos (diérese, hemostasia, exposição, especiais e síntese).",
    "commentary": "Manter a disposição padrão (A): a montagem padrão é pensada para destros e dificulta o trabalho do canhoto.\n\nTudo no centro, simetricamente (C): perde a organização por tempos cirúrgicos e atrapalha a entrega rápida dos instrumentos.\n\nAfastadores e pinças especiais à esquerda (D): o que muda de lado são os instrumentos de uso direto da mão dominante (diérese e síntese), não os afastadores.",
    "tip": "Mesa de instrumentação segue a mão dominante do cirurgião: para canhoto, diérese e síntese à esquerda.",
    "reference": "Goffi FS. Técnica Cirúrgica, 4ª ed. Sociedade Brasileira de Enfermeiros de Centro Cirúrgico (SOBECC). Diretrizes de práticas em enfermagem cirúrgica, 2021.",
    "tags": [
      "instrumentação cirúrgica",
      "técnica cirúrgica",
      "ergonomia"
    ]
  },
  {
    "id": "famema2026-27",
    "topography": "5.2",
    "topic": "Gravidez ectópica",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 26 anos dá entrada na emergência referindo dor abdominal súbita de forte intensidade há 40 minutos, acompanhada de sudorese, palidez cutaneomucosa, tontura e mal estar geral. Refere atraso menstrual há cerca de 8 semanas. Sinais vitais: PA: 90/55 mmHg; FC: 132 bpm; FR: 26 mrpm. Exame físico: dor à palpação abdominal difusamente, DB +, toque vaginal com abaulamento dos fundos de saco. Sinal de Proust positivo. Solicitado ultrassom (imagem demonstrada a seguir).\n\nA conduta a ser realizada com a paciente deverá ser:",
    "options": [
      "solicitar RX abdome, reposição hidroeletrolítica, passar sonda nasogástrica, colher eletrólitos e gasometria e observar a evolução da paciente por 72 horas.",
      "solicitar tomografia computadorizada de abdome, reposição volêmica, internar na UTI e observar por 24 horas a evolução da paciente.",
      "indicar cirurgia imediata, pois se trata de ruptura de aneurisma de artéria esplênica, o que ocasionou o quadro de abdome agudo vascular.",
      "medidas iniciais com estabilização hemodinâmica, colher exames (hemograma, coagulograma, tipagem sanguínea, gasometria arterial e βHCG), indicar cirurgia."
    ],
    "correctAnswer": 3,
    "image": "/images/famema2026-27.webp",
    "explanation": "Atraso menstrual de 8 semanas, dor abdominal súbita, sinais de choque (PA 90/55, FC 132), peritonite, abaulamento de fundo de saco e sinal de Proust (dor ao toque do fundo de saco posterior, por sangue na pelve): gravidez ectópica rota com hemoperitônio. O ultrassom não mostra gestação tópica normal na cavidade endometrial; a imagem mostra o saco gestacional na região do canal cervical, sem gestação intrauterina habitual.\n\nCom instabilidade hemodinâmica, a conduta é estabilizar (dois acessos calibrosos, cristaloide e hemoderivados), colher exames (hemograma, coagulograma, tipagem e Rh, beta-hCG) e levar à cirurgia imediata. Gestante Rh negativo recebe imunoglobulina anti-D.",
    "commentary": "RX, sonda e observação por 72 h (A): é conduta de obstrução intestinal; a paciente está sangrando e instável.\n\nTC, UTI e observação por 24 h (B): paciente instável não deve ir à tomografia, e observar atrasa a hemostasia.\n\nAneurisma de artéria esplênica (C): é causa rara de hemoperitônio na gestação (sobretudo no 3º trimestre); com atraso menstrual de 8 semanas e sinal de Proust, o diagnóstico é gravidez ectópica.",
    "tip": "Atraso menstrual + dor súbita + choque + sinal de Proust = ectópica rota → estabilizar e operar.",
    "reference": "Ministério da Saúde. Manual de Gestação de Alto Risco, 2022. FEBRASGO. Gravidez ectópica – Protocolo nº 15, 2021. ACOG Practice Bulletin nº 193 – Tubal Ectopic Pregnancy, 2018.",
    "tags": [
      "gravidez ectópica",
      "hemoperitônio",
      "sinal de Proust"
    ]
  },
  {
    "id": "famema2026-28",
    "topography": "2.1",
    "module": "Cirurgia",
    "text": "Mulher, 42 anos, queixa-se de fadiga progressiva com diplopia ao final do dia há 6 meses. Exame neurológico sugere fraqueza fatigável; sorologia para anticorpo anti-receptor de acetilcolina é positiva. Radiografia de tórax mostra alargamento do mediastino anterior. A tomografia computadorizada de tórax com contraste mostra uma massa encapsulada no mediastino anterior, sem invasão evidente de estruturas adjacentes (imagem demonstrada a seguir). Não há adenomegalias mediastinais perceptíveis.\n\nQual a conduta mais adequada para esse caso?",
    "options": [
      "Biópsia percutânea guiada por TC da lesão para definição histológica pré-operatória, seguida de tratamento conforme resultado.",
      "Ressecção cirúrgica completa da lesão, com intenção curativa e regressão dos sintomas.",
      "Radioterapia exclusiva do mediastino, por se tratar de tumor localizado associado à miastenia gravis.",
      "Observação e seguimento seriado por imagem, já que a lesão é bem delimitada e o paciente está hemodinamicamente estável."
    ],
    "correctAnswer": 1,
    "image": "/images/famema2026-28.webp",
    "explanation": "Mulher com miastenia gravis (fraqueza fatigável, diplopia vespertina, anticorpo antirreceptor de acetilcolina positivo) e massa encapsulada no mediastino anterior: timoma até prova em contrário. Cerca de 15% dos miastênicos têm timoma, e 30–50% dos timomas cursam com miastenia.\n\nPara massa de mediastino anterior típica de timoma, encapsulada e ressecável, a conduta é ressecção cirúrgica completa (timectomia estendida, por esternotomia ou videotoracoscopia), sem biópsia prévia. A timectomia também tende a melhorar a miastenia. O paciente deve ser compensado da miastenia antes da cirurgia.",
    "commentary": "Biópsia percutânea prévia (A): em timoma encapsulado e ressecável, a biópsia é desnecessária e pode violar a cápsula e disseminar o tumor; fica para lesões invasivas ou dúvida com linfoma.\n\nRadioterapia exclusiva (C): é adjuvante em tumores invasivos ou ressecção incompleta, não tratamento primário de lesão ressecável.\n\nObservação (D): o timoma tem potencial maligno e a ressecção também beneficia a miastenia.",
    "tip": "Miastenia + massa no mediastino anterior encapsulada = timoma → ressecção completa sem biópsia.",
    "reference": "NCCN Clinical Practice Guidelines in Oncology: Thymomas and Thymic Carcinomas, 2024. Narayanaswami P et al. International Consensus Guidance for Management of Myasthenia Gravis: 2020 Update. Neurology, 2021.",
    "tags": [
      "timoma",
      "miastenia gravis",
      "mediastino anterior"
    ]
  },
  {
    "id": "famema2026-29",
    "topography": "3.1",
    "topic": "Doença hemorroidária",
    "module": "Cirurgia",
    "text": "Homem de 48 anos procura o pronto-atendimento com história de dor anal intensa, sangramento vivo durante as evacuações e exteriorização de massas anais há cerca de 2 anos, com piora progressiva nos últimos meses. Refere que as massas não mais reduzem espontaneamente, sendo necessário empurrá-las manualmente após evacuar. Ao exame físico, observam-se três mamilos hemorroidários volumosos, congestos e parcialmente trombosados, localizados nos pontos clássicos (3, 7 e 11 horas), além de componente externo importante e prolapso mucoso irreversível. Após estabilização clínica e exclusão de outras causas de sangramento, indica-se tratamento cirúrgico definitivo.\n\nA equipe opta pela técnica de Milligan–Morgan, que consiste em",
    "options": [
      "ligadura dos pedículos vasculares dos mamilos hemorroidários com 2 a 3 elásticos, associada a laserterapia.",
      "fechamento da ferida cirúrgica em sutura contínua com fio absorvível, a fim de diminuir a dor pós-operatória e melhorar o aspecto estético.",
      "empregar um Doppler que, durante a cirurgia, é inserido no canal anal do paciente para identificar o fluxo vascular; com uma agulha que passa pelo seu interior (sem oferecer risco de lesão de tecidos), o cirurgião sutura a veia em um ponto específico, cessando a causa da doença.",
      "excisão cirúrgica dos mamilos hemorroidários e a sua ligadura vascular; a ferida operatória fica aberta (cicatrização por segunda intenção)."
    ],
    "correctAnswer": 3,
    "explanation": "Na hemorroidectomia de Milligan-Morgan (técnica aberta), os três mamilos hemorroidários são excisados e o pedículo vascular de cada um é ligado; as feridas ficam abertas para cicatrizar por segunda intenção, com pontes de pele e mucosa preservadas entre elas para evitar estenose anal. É indicada na doença hemorroidária de grau III/IV com componente externo importante.",
    "commentary": "Ligadura elástica com laser (A): a ligadura elástica é tratamento ambulatorial para graus I a III, não a técnica de Milligan-Morgan.\n\nFechamento da ferida com sutura contínua (B): descreve a técnica fechada de Ferguson.\n\nDoppler para ligadura arterial (C): descreve a desarterialização hemorroidária guiada por Doppler (THD/DGHAL).",
    "tip": "Milligan-Morgan = excisão + ligadura, ferida aberta. Ferguson = ferida fechada. THD = ligadura guiada por Doppler. PPH = grampeador.",
    "reference": "Davis BR et al. ASCRS Clinical Practice Guidelines for the Management of Hemorrhoids. Dis Colon Rectum, 2018.",
    "tags": [
      "doença hemorroidária",
      "hemorroidectomia",
      "Milligan-Morgan"
    ]
  },
  {
    "id": "famema2026-30",
    "module": "Cirurgia",
    "text": "Mulher de 32 anos, previamente hígida, procura o pronto-atendimento por dor discreta em hipocôndrio direito há dois meses. Nega icterícia, febre ou perda de peso. Relata uso contínuo de anticoncepcionais orais há 12 anos. Ao exame físico, não há sinais de hepatomegalia nem estigmas de hepatopatia crônica. Ultrassonografia de abdome mostra uma lesão sólida, bem delimitada, de 5,0 cm no lobo direito hepático. A ressonância magnética evidencia lesão hipervascular, sem cicatriz central, e com áreas de hemorragia intralesional. Sorologias para hepatites B e C são negativas, e o alfafetoproteína (AFP) está dentro dos valores de referência.\n\nCom base nesse caso clínico e nos conhecimentos sobre as neoplasias hepáticas, assinale a alternativa correta.",
    "options": [
      "A hiperplasia nodular focal é o tumor benigno hepático mais comum em mulheres jovens e tem forte relação com o uso de anticoncepcionais orais.",
      "O adenoma hepático é uma neoplasia benigna associada frequentemente ao uso prolongado de anticoncepcionais orais, com risco de hemorragia e transformação maligna.",
      "O carcinoma hepatocelular (hepatocarcinoma) é comum em mulheres jovens sem hepatopatia e apresenta níveis séricos normais de AFP.",
      "O hemangioma hepático, apesar de ser o tumor benigno mais comum do fígado, apresenta risco elevado de transformação maligna, justificando ressecção cirúrgica de rotina."
    ],
    "correctAnswer": 1,
    "explanation": "Mulher jovem, usuária de anticoncepcional oral há 12 anos, com lesão hepática sólida de 5 cm, hipervascular, sem cicatriz central e com hemorragia intralesional, AFP normal e sem hepatopatia: adenoma hepatocelular. É tumor benigno associado ao uso prolongado de estrogênio (e esteroides anabolizantes), com risco de sangramento e de transformação em carcinoma hepatocelular, maiores em lesões acima de 5 cm e no subtipo com mutação da betacatenina.\n\nConduta: suspender o anticoncepcional e perder peso; ressecção se ≥ 5 cm após suspensão, em homens ou no subtipo betacatenina.",
    "commentary": "Hiperplasia nodular focal (A): é o 2º tumor benigno mais comum, frequente em mulheres jovens, mas não tem relação causal forte com anticoncepcional; caracteriza-se por cicatriz central e raramente sangra.\n\nCarcinoma hepatocelular (C): incomum em mulheres jovens sem hepatopatia; a exceção é a variante fibrolamelar, mas o contexto aponta para adenoma.\n\nHemangioma com risco elevado de malignização (D): é o tumor benigno mais comum, mas não sofre transformação maligna; a cirurgia só é indicada se sintomático ou complicado.",
    "tip": "Mulher jovem + ACO + nódulo hipervascular com sangramento, sem cicatriz central = adenoma. Cicatriz central = HNF.",
    "reference": "EASL Clinical Practice Guidelines on the management of benign liver tumours. J Hepatol, 2016. Marrero JA et al. ACG Clinical Guideline: Focal Liver Lesions, 2014.",
    "tags": [
      "adenoma hepático",
      "anticoncepcional oral",
      "tumores hepáticos benignos"
    ]
  },
  {
    "id": "famema2026-31",
    "topography": "1.5",
    "topic": "Nódulos tireoidianos",
    "module": "Cirurgia",
    "text": "Mulher de 59 anos consulta-se com clínico geral por apresentar nódulo tireoidiano incidental em ultrassom de rotina. Está assintomática. No exame cervical, a tireoide está tópica, fibroelástica, de volume habitual. Nota-se, à palpação de lobo esquerdo, a presença de nódulo de consistência endurecida, medindo cerca de 2,5 cm, móvel e indolor. Ultrassonografia de tireoide: presença de nódulo sólido, hipoecoico, com halo incompleto, mais alto do que largo, com vascularização central e microcalcificações de permeio medindo 2,5 x 1,4 cm em 1/3 médio do lobo esquerdo.\n\nEm relação a esse caso, assinale a alternativa correta.",
    "options": [
      "Trata-se de um carcinoma anaplásico, e a cirurgia deve ser indicada após estadiamento completo.",
      "A paciente apresenta doença de Basedow Graves, cuja abordagem terapêutica é conservadora de início com iodoterapia.",
      "No caso relatado, faz-se necessária a realização de punção aspirativa com agulha fina (PAAF), devido ao volume e características do nódulo.",
      "Pelas características apresentadas, está indicada a tireoidectomia total com esvaziamento linfonodal ipsilateral."
    ],
    "correctAnswer": 2,
    "explanation": "Nódulo tireoidiano de 2,5 cm, sólido, hipoecoico, mais alto que largo, com microcalcificações e vascularização central: características ultrassonográficas de alta suspeita (TI-RADS 5). A conduta é a punção aspirativa por agulha fina (PAAF), indicada para nódulos de alta suspeita a partir de 1 cm. O resultado (Bethesda) define a cirurgia e sua extensão.",
    "commentary": "Carcinoma anaplásico (A): afeta idosos com massa cervical de crescimento rápido, endurecida, fixa e com sintomas compressivos; não é o caso de nódulo móvel e assintomático.\n\nDoença de Graves (B): causa bócio difuso com hipertireoidismo, não nódulo único com sinais de malignidade.\n\nTireoidectomia total com esvaziamento (D): a cirurgia vem após a citologia, e o esvaziamento linfonodal só é feito se houver linfonodos comprometidos.",
    "tip": "Nódulo de tireoide: TSH + ultrassom. Alta suspeita (hipoecoico, microcalcificações, mais alto que largo) ≥ 1 cm → PAAF.",
    "reference": "Haugen BR et al. 2015 American Thyroid Association Management Guidelines for Thyroid Nodules and Differentiated Thyroid Cancer. Thyroid, 2016. Rosário PW et al. Nódulo tireoidiano e câncer diferenciado de tireoide: atualização do consenso brasileiro. Arq Bras Endocrinol Metab, 2013.",
    "tags": [
      "nódulo tireoidiano",
      "PAAF",
      "TI-RADS"
    ]
  },
  {
    "id": "famema2026-32",
    "topography": "3.1",
    "topic": "DRGE",
    "module": "Cirurgia",
    "text": "Homem de 48 anos, previamente hígido, apresenta pirose e regurgitação ácida há cerca de 6 anos, com piora progressiva nos últimos meses, apesar do uso regular de inibidor de bomba de prótons em dose plena. Refere episódios ocasionais de tosse seca e rouquidão matinal, mas nega disfagia ou perda ponderal. A endoscopia digestiva alta evidencia esofagite erosiva grau C de Los Angeles e hérnia hiatal por deslizamento de, aproximadamente, 4 cm. A manometria esofágica mostra pressão reduzida do esfíncter esofágico inferior, com motilidade esofágica preservada. Considerando o quadro clínico e a falha do tratamento clínico, indica-se tratamento cirúrgico.\n\nQual é a técnica cirúrgica mais indicada para esse paciente?",
    "options": [
      "Fundoplicatura total de Nissen (360°).",
      "Esofagectomia Ivor Lewis.",
      "Miotomia de Heller.",
      "Fundoplicatura parcial tipo Pinotti."
    ],
    "correctAnswer": 0,
    "explanation": "DRGE com esofagite erosiva grau C de Los Angeles e hérnia hiatal de 4 cm, refratária a IBP em dose plena, com manometria mostrando esfíncter inferior hipotônico e motilidade esofágica preservada: indicação de tratamento cirúrgico. Com peristalse normal, a técnica de escolha é a fundoplicatura total de Nissen (360°) por videolaparoscopia, com hiatoplastia.",
    "commentary": "Esofagectomia Ivor Lewis (B): é cirurgia para câncer de esôfago, não para DRGE.\n\nMiotomia de Heller (C): trata acalasia, que tem esfíncter hipertônico e aperistalse; aqui o esfíncter é hipotônico.\n\nFundoplicatura parcial de Pinotti (D): fundoplicatura parcial é preferida quando há dismotilidade esofágica importante, para reduzir disfagia; com motilidade preservada a total é a escolha.",
    "tip": "DRGE cirúrgica: motilidade normal = Nissen (360°); hipomotilidade = fundoplicatura parcial (Toupet, Dor, Pinotti). Acalasia = Heller.",
    "reference": "Slater BJ et al. SAGES guidelines for the surgical treatment of gastroesophageal reflux disease (GERD). Surg Endosc, 2021. Gyawali CP et al. Updates to the modern diagnosis of GERD: Lyon consensus 2.0. Gut, 2024.",
    "tags": [
      "DRGE",
      "fundoplicatura de Nissen",
      "hérnia hiatal"
    ]
  },
  {
    "id": "famema2026-33",
    "topography": "11",
    "topic": "Puericultura",
    "module": "Pediatria",
    "text": "Lactente, sexo masculino, 1 ano e 3 meses de idade, está em consulta de puericultura. Mãe traz queixa que ele desperta 4 a 5 vezes por noite e só readormece mamando no seio materno. Durante o dia, permanece em creche em horário integral, onde cuidadores referem que ele faz 3 cochilos curtos, de aproximadamente 40 minutos, iniciando e encerrando o sono sem necessidade de ajuda. Em casa, após chegar da creche, a mãe diz que ele fica muito mais agitado, quer andar de um lado para o outro da casa, ela nota que ele fica mais ativo ao anoitecer. Tem dificuldade de oferecer o jantar e o leite noturno, só consegue colocando-o para assistir telas para acalmar. Também usa a estratégia da tela do celular para mantê-lo deitado no seu colo e conseguir fazê-lo dormir. Há noites em que ele dorme antes das 22 h, mas em outras noites passa da meia-noite. Ao exame clínico, nenhuma alteração significativa. Crescimento e desenvolvimento compatíveis com a idade. A mãe solicita “alguma medicação para ajudá-lo a dormir”.\n\nQual é a conduta adequada?",
    "options": [
      "Orientar que esse padrão de despertares é o mais comum nessa faixa etária, com tendência de resolução espontânea após 24 meses de idade.",
      "Prescrever melatonina para tomar 2 horas antes do horário previsto para início do sono, com desmame após 7 noites seguidas dormindo bem.",
      "Solicitar polissonografia para investigar distúrbio respiratório do sono secundário a provável hipertrofia de adenoides.",
      "Reestruturar a rotina de sono com horário fixo, retirada de telas e estímulo ao adormecer de forma independente."
    ],
    "correctAnswer": 3,
    "explanation": "Lactente de 15 meses que dorme bem na creche, mas em casa acorda várias vezes e só volta a dormir mamando, com horários de dormir irregulares e uso de telas para acalmar e adormecer: insônia comportamental da infância, por associação inadequada para iniciar o sono e falta de limites. Crescimento e desenvolvimento normais.\n\nO tratamento é comportamental: rotina e horário fixos, ambiente adequado, retirada de telas (a luz e o estímulo atrasam o sono) e estímulo a adormecer sozinho no berço, sem depender da mamada.",
    "commentary": "Padrão comum que se resolve aos 24 meses (A): despertares frequentes com dependência da mamada não melhoram sozinhos; a criança precisa aprender a adormecer de forma independente.\n\nMelatonina (B): não é indicada para insônia comportamental em lactentes; a intervenção é de rotina e hábitos.\n\nPolissonografia (C): não há ronco, apneia ou respiração bucal que sugiram distúrbio respiratório do sono.",
    "tip": "Insônia comportamental da infância: rotina fixa, sem telas, colocar no berço sonolento mas acordado. Remédio não é a solução.",
    "reference": "Sociedade Brasileira de Pediatria. Higiene do sono – documento científico, 2017. Mindell JA et al. Behavioral treatment of bedtime problems and night wakings in infants and young children. Sleep, 2006.",
    "tags": [
      "sono infantil",
      "higiene do sono",
      "telas"
    ]
  },
  {
    "id": "famema2026-34",
    "topography": "7.2",
    "topic": "Dermatite atópica",
    "module": "Pediatria",
    "text": "Pré-escolar, sexo feminino, 3 anos de idade, apresenta lesões eczematosas pruriginosas desde os 6 meses de vida, que geralmente pioram na época do inverno. Nas últimas duas semanas, surgiram pápulas eritematosas exsudativas com crostas melicéricas em fossas cubitais e poplíteas. Mãe relata prurido intenso, que piora após banho quente. Ao exame clínico, apresenta áreas de liquenificação, escoriações e crostas amareladas em membros superiores e inferiores.\n\nCom base no diagnóstico mais provável, a conduta adequada é",
    "options": [
      "intensificar hidratação da pele e iniciar antibiótico tópico associado a corticoide tópico de baixa potência.",
      "excluir leite e derivados da dieta, iniciar corticoide oral e anti-histamínico oral por 7 dias.",
      "intensificar banhos com sabonete bactericida, iniciar tratamento com tacrolimo ou pimecrolimo tópicos.",
      "usar antifúngico tópico e evitar hidratantes tópicos até regressão completa das lesões."
    ],
    "correctAnswer": 0,
    "explanation": "Criança com eczema pruriginoso desde os 6 meses, em flexuras, que piora no inverno e com banho quente, com liquenificação: dermatite atópica. As lesões exsudativas com crostas melicéricas indicam infecção secundária por Staphylococcus aureus (impetiginização).\n\nA conduta é intensificar a hidratação da pele (emolientes, banhos mornos e rápidos), tratar a inflamação com corticoide tópico e a infecção localizada com antibiótico tópico (mupirocina ou ácido fusídico). Infecção extensa exige antibiótico oral (cefalexina).",
    "commentary": "Excluir leite, corticoide e anti-histamínico orais (B): dieta de exclusão só com alergia comprovada; corticoide oral causa rebote e não é usado na dermatite atópica infantil.\n\nSabonete bactericida e imunomodulador tópico (C): sabonetes antissépticos ressecam e irritam a pele; tacrolimo/pimecrolimo não devem ser usados sobre lesões infectadas.\n\nAntifúngico e evitar hidratante (D): não há infecção fúngica, e o hidratante é a base do tratamento.",
    "tip": "Dermatite atópica: hidratação sempre + corticoide tópico na crise. Crostas melicéricas = S. aureus → antibiótico tópico.",
    "reference": "Sociedade Brasileira de Pediatria e ASBAI. Guia prático de atualização em dermatite atópica, 2017. Sociedade Brasileira de Dermatologia. Consenso de dermatite atópica, 2019.",
    "tags": [
      "dermatite atópica",
      "impetiginização",
      "corticoide tópico"
    ]
  },
  {
    "id": "famema2026-35",
    "topography": "11",
    "topic": "Puericultura",
    "module": "Pediatria",
    "text": "Escolar, sexo feminino, 7 anos e 4 meses de idade, previamente hígida, é trazida à consulta de rotina com relato que apresenta desenvolvimento mamário há 5 meses. Não apresenta outras queixas. Faz uso diário de vitamina D, 600 UI/dia, nega uso de qualquer outra medicação, seja sistêmica ou tópica. Ao exame clínico, nota-se estágio puberal M2P1. Estatura acima do percentil 97 pelas curvas adequadas da OMS, peso entre percentil 85 e 97. Nota-se que houve ganho de 4 cm de estatura nos últimos 6 meses. Realizada radiografia de punho esquerdo para determinação de idade óssea, laudo compatível com 10 anos.\n\nCom base nesses achados, o diagnóstico mais provável é",
    "options": [
      "adrenarca precoce isolada.",
      "puberdade precoce central.",
      "telarca precoce isolada.",
      "variação da normalidade."
    ],
    "correctAnswer": 1,
    "explanation": "Menina de 7 anos e 4 meses com telarca há 5 meses (M2), aceleração do crescimento (4 cm em 6 meses, ou seja, 8 cm/ano), estatura acima do percentil 97 e idade óssea avançada (10 anos): puberdade precoce central. Em meninas, puberdade antes dos 8 anos é precoce, e a combinação de telarca com estirão e avanço da idade óssea mostra ativação do eixo hipotálamo-hipófise-gonadal.\n\nA confirmação é feita com LH basal (ou após estímulo com GnRH) e ressonância de crânio; o tratamento é com análogo de GnRH. Em meninas, a maioria é idiopática.",
    "commentary": "Adrenarca precoce (A): surgimento de pelos pubianos ou axilares e odor antes dos 8 anos, sem telarca; a menina tem P1.\n\nTelarca precoce isolada (C): mama sem aceleração do crescimento e sem avanço importante da idade óssea; comum até os 2 anos.\n\nVariação da normalidade (D): a velocidade de crescimento e a idade óssea avançada 2,5 anos indicam doença.",
    "tip": "Puberdade precoce: menina antes dos 8 anos (menino antes dos 9). Telarca + estirão + idade óssea avançada = central.",
    "reference": "Sociedade Brasileira de Pediatria. Puberdade precoce – documento científico, 2020. Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas de Puberdade Precoce Central, 2017.",
    "tags": [
      "puberdade precoce central",
      "telarca",
      "idade óssea"
    ]
  },
  {
    "id": "famema2026-36",
    "topography": "15",
    "topic": "Ética médica",
    "module": "Pediatria",
    "text": "Adolescente, sexo feminino, 15 anos de idade, veio à Unidade Básica de Saúde (UBS) acompanhada de uma prima para consulta de rotina. Ela entra na consulta sozinha para atendimento. Tem antecedente de asma e faz uso de corticoide inalatório em baixa dose associado a beta-2 de longa ação de forma contínua (formoterol 6 mcg + budesonida 200 mcg de 12 em 12 horas). Ela refere preocupação com tosse iniciada há uma semana, sem coriza ou febre. Ao questionar possíveis desencadeantes para a tosse, ela conta que tudo começou após fumar um cigarro de maconha na casa de um amigo há uma semana. Diz que foi uma única vez e que não pretende repetir, justamente por causa dessa tosse. Ela só demonstra preocupação com a reação dos pais se soubessem do evento e pede que essas informações não sejam compartilhadas com eles.\n\nDo ponto de vista ético, qual deve ser a conduta neste caso?",
    "options": [
      "Quebrar o sigilo e comunicar os pais sobre o uso de drogas, pois essa atitude comprometeu o controle de doença crônica (asma).",
      "Fazer o atendimento médico normalmente e, após liberação do paciente, fazer relatório ao Conselho Tutelar, por se tratar de crime (drogas ilícitas).",
      "Garantir o atendimento e o sigilo, orientando os males dessa prática e prescrevendo medicação pertinente ao tratamento da tosse.",
      "Solicitar a convocação dos pais e aguardar o comparecimento deles antes de prosseguir com o atendimento."
    ],
    "correctAnswer": 2,
    "explanation": "O Código de Ética Médica (art. 74) proíbe revelar segredo de paciente menor de idade, inclusive aos pais, desde que ele tenha capacidade de avaliar seu problema e conduzir-se por seus próprios meios, salvo quando a não revelação puder causar dano a ele. Uma adolescente de 15 anos que usou maconha uma única vez, sem intenção de repetir, sem risco grave atual, tem direito a atendimento e sigilo.\n\nA conduta é atender, orientar sobre os riscos (inclusive para a asma), tratar a tosse e oferecer acompanhamento, estimulando que ela converse com os pais.",
    "commentary": "Quebrar o sigilo pela asma (A): não há risco grave e iminente; a quebra prejudicaria o vínculo e afastaria a adolescente do serviço.\n\nRelatório ao Conselho Tutelar por crime (B): uso pessoal isolado não exige comunicação e não é situação de violação de direitos da adolescente.\n\nCondicionar o atendimento à presença dos pais (D): o adolescente tem direito a ser atendido sozinho; recusar o atendimento fere o ECA e o Código de Ética.",
    "tip": "Adolescente capaz: atendimento sem os pais e sigilo garantidos. Quebra só se risco à vida ou à saúde (ideação suicida, abuso, uso grave de drogas, gravidez de risco).",
    "reference": "Conselho Federal de Medicina. Código de Ética Médica (Resolução CFM nº 2.217/2018), art. 74. Sociedade Brasileira de Pediatria. Consulta do adolescente: abordagem clínica, 2019.",
    "tags": [
      "sigilo médico",
      "adolescente",
      "ética médica"
    ]
  },
  {
    "id": "famema2026-37",
    "topography": "14",
    "topic": "Intoxicações",
    "module": "Pediatria",
    "text": "Pré-escolar, sexo feminino, 3 anos de idade, é encontrada com uma cartela de paracetamol na mão. Pela estimativa dos familiares, ela ingeriu 4 comprimidos de 750 mg cada. Chega ao atendimento médico aproximadamente 4 horas após a ingestão. Está assintomática. Ao exame clínico, criança em bom estado geral, consciente e orientada; PA: 96/54 mmHg; FC: 108 bpm; FR: 26 irpm; sem alterações significativas. Peso de 15 kg.\n\nA conduta mais apropriada é",
    "options": [
      "realizar apenas lavagem gástrica.",
      "administrar lavagem gástrica seguida de carvão ativado.",
      "infusão de acetilcisteína endovenosa.",
      "alta hospitalar com observação domiciliar."
    ],
    "correctAnswer": 2,
    "explanation": "Criança de 15 kg que ingeriu cerca de 3.000 mg de paracetamol (4 × 750 mg): 200 mg/kg, acima do limiar de toxicidade (150 mg/kg na criança, ou 200 mg/kg em alguns protocolos). Mesmo assintomática, ela tem risco de lesão hepática grave, que só aparece após 24–72 horas.\n\nO ideal é dosar o paracetamol sérico 4 horas após a ingestão e usar o nomograma de Rumack-Matthew. Com dose ingerida potencialmente tóxica, a N-acetilcisteína deve ser iniciada, de preferência nas primeiras 8 horas, quando é quase 100% protetora.",
    "commentary": "Apenas lavagem gástrica (A): após 4 horas o comprimido já foi absorvido, e a lavagem tem riscos; não trata a toxicidade.\n\nLavagem seguida de carvão ativado (B): o carvão funciona melhor na primeira hora; às 4 horas o benefício é pequeno e não dispensa o antídoto.\n\nAlta com observação (D): a ausência de sintomas na fase inicial é típica e engana; a dose é tóxica.",
    "tip": "Paracetamol ≥ 150 mg/kg (criança): N-acetilcisteína, idealmente em até 8 h. Nível sérico após 4 h no nomograma.",
    "reference": "Chiew AL et al. Updated guidelines for the management of paracetamol poisoning in Australia and New Zealand. Med J Aust, 2020. Sociedade Brasileira de Pediatria. Intoxicações agudas em pediatria.",
    "tags": [
      "intoxicação por paracetamol",
      "N-acetilcisteína",
      "pediatria"
    ]
  },
  {
    "id": "famema2026-38",
    "topography": "14",
    "topic": "Emergências pediátricas",
    "module": "Pediatria",
    "text": "Pré-escolar, sexo feminino, 2 anos e 6 meses de idade, previamente hígida, chega ao pronto atendimento com quadro de febre de até 39,5 °C, tosse e coriza iniciados há 36 horas, com vômitos e hiporresponsividade nas últimas 3 horas. Ao exame clínico: regular estado geral; descorada 2+/4+; FC: 170 bpm; PA: 78/44 mmHg; FR: 42 irpm; SpO₂: 90% em ar ambiente; tempo de enchimento capilar: 4 segundos; extremidades frias; pulsos filiformes. Exame pulmonar com presença de tiragem subdiafragmática leve, ausculta com murmúrios vesiculares presentes bilateralmente com sopro tubário em ápice direito. Sem outras alterações relevantes. Administrado oxigênio em máscara não reinalante com aumento da SpO2 para 95% e resolução do desconforto respiratório. Após duas tentativas, obtém-se acesso venoso periférico, sendo também colhida hemocultura.\n\nEntre as condutas listadas a seguir, qual é a primeira a ser realizada?",
    "options": [
      "Iniciar antibiótico endovenoso de amplo espectro (ceftriaxone).",
      "Iniciar sedação para instalação de dispositivo de ventilação não invasiva (VNI).",
      "Realizar punção torácica de alívio em 2º espaço intercostal (linha hemiclavicular).",
      "Realizar expansão com cristaloide 20 mL/kg endovenosa em 5–10 min."
    ],
    "correctAnswer": 3,
    "explanation": "Criança com pneumonia (sopro tubário em ápice direito), febre, taquicardia, hipotensão para a idade (PA sistólica < 70 + 2 × idade = 75 mmHg), enchimento capilar de 4 segundos, extremidades frias e pulsos filiformes: choque séptico descompensado. A oxigenação já foi corrigida e o acesso obtido, com hemocultura colhida.\n\nO próximo passo é expandir com cristaloide 10–20 mL/kg EV rápido (5–10 minutos em ambiente com UTI), reavaliando após cada bolus (perfusão, sinais de sobrecarga como estertores e hepatomegalia). O antibiótico deve vir na primeira hora, logo em seguida.",
    "commentary": "Antibiótico primeiro (A): é essencial e deve ser dado na primeira hora, mas a criança está hipotensa; a ressuscitação volêmica é a prioridade para restaurar a perfusão.\n\nSedação para VNI (B): o desconforto respiratório melhorou com oxigênio, e sedar paciente em choque pode precipitar colapso hemodinâmico.\n\nPunção torácica de alívio (C): não há sinais de pneumotórax hipertensivo (murmúrio presente bilateralmente).",
    "tip": "Choque séptico pediátrico: O₂, acesso, bolus de 10–20 mL/kg com reavaliação, antibiótico na 1ª hora, adrenalina/noradrenalina se refratário.",
    "reference": "Weiss SL et al. Surviving Sepsis Campaign International Guidelines for Septic Shock in Children, 2020. American Heart Association. PALS, 2020.",
    "tags": [
      "choque séptico",
      "pediatria",
      "expansão volêmica"
    ]
  },
  {
    "id": "famema2026-39",
    "topography": "1.1",
    "topic": "Epilepsia",
    "module": "Pediatria",
    "text": "Pré-escolar, sexo masculino, 3 anos e 8 meses de idade, previamente hígido, é levado ao pronto-socorro por episódio convulsivo tônico-clônico generalizado iniciado há poucos minutos. A mãe refere febre baixa notada desde hoje pela manhã, associada à sonolência e à recusa alimentar. Não há história familiar de epilepsia. Na chegada, encontra-se em atividade convulsiva contínua, escala de coma de Glasgow: 10; SatO₂: 91% em ar ambiente; FC: 142 bpm; PA: 88/52 mmHg; temperatura: 38,3 °C; glicemia capilar: 88 mg/dL. É levado à sala de emergência, onde é obtido acesso venoso periférico, iniciada administração de oxigênio por máscara não reinalante e colocada monitorização cardíaca.\n\nQual deve ser a conduta imediata?",
    "options": [
      "Administrar antitérmico endovenoso e aguardar resolução da febre para decidir sobre a necessidade da abordagem da crise convulsiva.",
      "Administrar benzodiazepínico de ação rápida por via endovenosa, monitorando permeabilidade da via aérea e controle da ventilação.",
      "Realizar intubação orotraqueal sem necessidade de pré-medicação e só administrar benzodiazepínico após garantir via aérea avançada.",
      "Realizar tomografia de crânio e punção lombar antes de qualquer outra medida, para não ter risco de prejudicar a investigação etiológica."
    ],
    "correctAnswer": 1,
    "explanation": "Criança em crise convulsiva generalizada em atividade, com via aérea sendo suportada, oxigênio, monitorização e acesso venoso: a conduta imediata é interromper a crise com benzodiazepínico de ação rápida (diazepam 0,2–0,3 mg/kg ou midazolam 0,1–0,2 mg/kg EV), que pode ser repetido após 5 minutos. Se a crise persistir, segue-se fenitoína/fosfenitoína, levetiracetam ou valproato.\n\nOs benzodiazepínicos podem deprimir a respiração; por isso é preciso vigiar a via aérea e a ventilação.",
    "commentary": "Antitérmico e aguardar (A): crise que dura mais de 5 minutos é tratada como estado de mal epiléptico; esperar aumenta o risco de lesão neuronal e de refratariedade.\n\nIntubar sem pré-medicação antes do benzodiazepínico (C): a intubação é reservada para falha respiratória ou estado de mal refratário, e exige medicação adequada.\n\nTC e punção lombar antes de tudo (D): primeiro se estabiliza o paciente e se interrompe a crise; a investigação vem depois.",
    "tip": "Crise > 5 minutos: benzodiazepínico (repetir 1 vez) → fenitoína/levetiracetam/valproato → estado de mal refratário (UTI, midazolam contínuo).",
    "reference": "Glauser T et al. Evidence-Based Guideline: Treatment of Convulsive Status Epilepticus in Children and Adults (American Epilepsy Society). Epilepsy Curr, 2016. Sociedade Brasileira de Pediatria. Estado de mal epiléptico, 2019.",
    "tags": [
      "estado de mal epiléptico",
      "benzodiazepínico",
      "crise convulsiva"
    ]
  },
  {
    "id": "famema2026-40",
    "topography": "14",
    "topic": "Parada cardiorrespiratória",
    "module": "Pediatria",
    "text": "Escolar, sexo masculino, 6 anos de idade, com antecedente de asma em uso de beclometasona inalatória continua, deu entrada no pronto-socorro com desconforto respiratório iniciado nas últimas 12 horas. Mãe administrou salbutamol 100 mcg, 2 puffs com espaçador a cada 6 horas, sem sinais de melhora. Na triagem, paciente hiporresponsivo, com FC: 52 bpm, SpO2: 78% em ar ambiente. Levado imediatamente à sala de emergência, monitorizado, oferecido oxigênio em máscara não reinalante, evoluiu com inconsciência. Como paciente estava sem pulso palpável, foram iniciadas compressões torácicas de alta qualidade (frequência 100–120/min) associadas à ventilação com bolsa-válvula-máscara na relação de 15 compressões para duas ventilações. Após 2 minutos, a RCP é interrompida para a checagem de ritmo, e o monitor demonstra os seguintes parâmetros:\n\nPaciente segue sem pulso palpável. Qual é a medida imediata nesse contexto?",
    "options": [
      "Administrar adrenalina 0,01 mg/kg IV/IO em bolus seguido de retorno imediato da RCP de alta qualidade.",
      "Manter apenas ventilações com dispositivo bolsa-valva-máscara e administrar sulfato de magnésio 50 a 75 mg/kg IV em 20 minutos.",
      "Infundir atropina 0,1 mg/kg (máx. 1 mg) IV/IO em bolus seguido de retorno imediato da RCP de alta qualidade.",
      "Manter apenas ventilações com dispositivo bolsa-valva-máscara e aplicar desfibrilação de 2 J/kg sob sedação."
    ],
    "correctAnswer": 0,
    "image": "/images/famema2026-40.webp",
    "explanation": "Criança asmática em crise grave que evolui com bradicardia, hipoxemia e perda de pulso. Após 2 minutos de RCP, o monitor mostra ritmo organizado com FC de 48 bpm, sem pulso palpável, sem saturação e sem pressão detectáveis: atividade elétrica sem pulso (AESP), ritmo não chocável.\n\nNo PALS, ritmos não chocáveis (assistolia e AESP) são tratados com RCP de alta qualidade e adrenalina 0,01 mg/kg (0,1 mL/kg da solução 0,1 mg/mL) IV/IO o quanto antes, repetida a cada 3–5 minutos, buscando causas reversíveis (aqui, hipóxia e possível pneumotórax ou hiperinsuflação pela asma).",
    "commentary": "Ventilação apenas e magnésio (B): o paciente está sem pulso e precisa de compressões; o magnésio é usado na crise de asma grave, não na PCR.\n\nAtropina (C): não faz parte do algoritmo de PCR; na bradicardia com pulso pode ser usada se houver aumento do tônus vagal ou bloqueio AV.\n\nVentilação e desfibrilação (D): AESP não é ritmo chocável, e a criança precisa de compressões.",
    "tip": "PCR pediátrica em AESP/assistolia: RCP + adrenalina 0,01 mg/kg o quanto antes, a cada 3–5 min. Não chocar.",
    "reference": "American Heart Association. Pediatric Advanced Life Support – Guidelines 2020 (atualização 2025). Sociedade Brasileira de Pediatria. Reanimação cardiopulmonar pediátrica.",
    "tags": [
      "parada cardiorrespiratória",
      "AESP",
      "asma grave"
    ]
  },
  {
    "id": "famema2026-41",
    "topography": "11",
    "topic": "Bronquiolite",
    "module": "Pediatria",
    "text": "Lactente, sexo feminino, 2 meses de idade, com antecedente de prematuridade de 34 semanas, está internada em enfermaria devido a quadro de bronquiolite, com painel respiratório positivo para vírus sincicial respiratório (VSR). Hoje, após 24 horas de internação, a mãe acha que a paciente está mais cansada. Ao exame clínico, paciente está em regular estado geral, letárgica e hipoativa. No exame pulmonar, apresenta sibilos difusos, tiragem subcostal intensa, com balanço de cabeça e gemência expiratória, frequência respiratória de 76 irpm e SatO₂ de 84% em ar ambiente. É instalado cateter nasal de alto fluxo com 2 L/kg e FiO2 de 60%, com aumento da SatO₂ para 89%; contudo, nota-se que a paciente está fazendo pausas respiratórias de 10 a 15 segundos, com queda de saturação.\n\nQual é a conduta imediata mais indicada?",
    "options": [
      "Introdução de cafeína via oral para tratamento de apneias da prematuridade.",
      "Inalação com epinefrina e corticoide sistêmico devido a espasmos laríngeos levando a pausas respiratórias.",
      "Antibioticoterapia endovenosa empírica com ceftriaxone para tratamento de apneias secundárias a sepse.",
      "Escalonar suporte ventilatório para ventilação não invasiva ou intubação orotraqueal devido a apneias secundárias a bronquiolite grave."
    ],
    "correctAnswer": 3,
    "explanation": "Lactente de 2 meses, ex-prematura, com bronquiolite por VSR que evolui com esforço respiratório grave (tiragem intensa, balanço de cabeça, gemência), hipoxemia persistente mesmo em alto fluxo com FiO₂ 60% e apneias com dessaturação: insuficiência respiratória com apneias, complicação típica da bronquiolite em menores de 2–3 meses e prematuros. A conduta é escalonar o suporte ventilatório (VNI/CPAP ou intubação e ventilação mecânica, conforme a gravidade).",
    "commentary": "Cafeína para apneia da prematuridade (A): a criança tem 2 meses (corrigida cerca de 36–38 semanas) e as apneias são da bronquiolite grave; a cafeína não resolve a insuficiência respiratória.\n\nEpinefrina inalatória e corticoide (B): não há estridor ou espasmo laríngeo; corticoide não tem benefício na bronquiolite.\n\nCeftriaxona por sepse (C): o quadro é explicado pelo VSR; mesmo que se colham culturas, a medida imediata é garantir a ventilação.",
    "tip": "Bronquiolite com apneia, hipoxemia refratária ou fadiga respiratória: escalonar para VNI/intubação. Broncodilatador e corticoide não ajudam.",
    "reference": "Sociedade Brasileira de Pediatria. Diretrizes para o manejo da infecção causada pelo VSR, 2017. Ralston SL et al. Clinical Practice Guideline: Bronchiolitis (AAP). Pediatrics, 2014.",
    "tags": [
      "bronquiolite",
      "vírus sincicial respiratório",
      "insuficiência respiratória"
    ]
  },
  {
    "id": "famema2026-42",
    "topography": "4.1",
    "topic": "Distúrbios hidroeletrolíticos",
    "module": "Pediatria",
    "text": "Escolar, sexo masculino, 9 anos de idade, está internado em enfermaria por pneumonia lobar direita, em uso de ceftriaxone endovenoso. No 3º dia de internação, já está afebril há 24 horas, mas evolui com letargia, cefaleia e vômitos. Ao exame clínico, paciente em regular estado geral, corado, sem sinais de desidratação, mucosas úmidas e pulsos cheios. Sonolento, escala de coma de Glasgow: 14; PA: 90/55 mmHg; FC: 110 bpm; FR 22 irpm; SpO2: 96% em ar ambiente. Ausculta pulmonar com discretos estertores em ápice direito, sem sinais de desconforto respiratório. Inicialmente, é repetida radiografia de tórax, que demonstra resolução parcial da pneumonia. São colhidos exames laboratoriais com Hb: 10,2 g/dL; Ht: 32%; leucócitos: 12.540; plaquetas: 320.000; proteína C reativa: 42 mg/L (anterior de 124 mg/L). Sódio: 121 mEq/L; potássio: 4,4 mEq/L; ureia: 32 mg/L; creatinina: 0,52 mg/L. Gasometria venosa com pH: 7,41; pCO2: 41 mmHg; bicarbonato: 21 mEq/L. Glicemia: 88 mg/dL. Sódio urinário: 42 mEq/L (elevado).\n\nQual é a conduta hospitalar mais adequada neste momento?",
    "options": [
      "Restrição hídrica e correção lenta do sódio (elevação máxima de 10 mEq em 24 horas).",
      "Expansão com soro fisiológico (NaCl 0,9%) 20 mL/kg EV em 15 a 20 minutos.",
      "Administração de diurético de alça e soro de manutenção isotônico com oferta hídrica de 100 mL/kg.",
      "Troca de ceftriaxone por cefotaxima e expansão com NaCl 3% 20 mL/kg EV em 1 hora."
    ],
    "correctAnswer": 0,
    "explanation": "Criança com pneumonia que evolui com sonolência, cefaleia e vômitos por hiponatremia de 121 mEq/L, euvolêmica (mucosas úmidas, pulsos cheios, sem desidratação), com sódio urinário elevado e função renal normal: síndrome da secreção inapropriada de ADH (SIADH), complicação conhecida da pneumonia.\n\nO tratamento da SIADH é restrição hídrica e correção lenta, sem ultrapassar 10 mEq/L em 24 horas (risco de desmielinização osmótica). Se houver sintomas graves (convulsão, rebaixamento importante), faz-se bolus de NaCl 3% 2 mL/kg para elevar o sódio em 4–6 mEq/L e aliviar o edema cerebral.",
    "commentary": "Expansão com SF 0,9% (B): a criança não está hipovolêmica; na SIADH o sódio do soro é excretado e a água retida, o que pode piorar a hiponatremia.\n\nDiurético de alça e 100 mL/kg de soro (C): a oferta hídrica alta agrava a SIADH.\n\nTrocar o antibiótico e NaCl 3% 20 mL/kg (D): a ceftriaxona não é a causa; e 20 mL/kg de salina a 3% em 1 hora corrigiria o sódio de forma perigosa (a dose de resgate é 2 mL/kg).",
    "tip": "SIADH: hiponatremia euvolêmica com sódio urinário alto → restrição hídrica, correção ≤ 10 mEq/L em 24 h. Sintomas graves: NaCl 3% 2 mL/kg.",
    "reference": "Spasovski G et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol, 2014. Sociedade Brasileira de Pediatria. Distúrbios do sódio na criança.",
    "tags": [
      "SIADH",
      "hiponatremia",
      "pneumonia"
    ]
  },
  {
    "id": "famema2026-43",
    "topography": "7.1",
    "topic": "Trombose venosa profunda",
    "module": "Pediatria",
    "text": "Adolescente, sexo masculino, 13 anos de idade, com diagnóstico de leucemia linfoblástica aguda, em quimioterapia, apresenta dor e edema em braço direito há 24 horas, local em que já possui cateter central de inserção periférica (PICC). Nega febre. Ao exame clínico, apresenta assimetria de 2 cm no perímetro braquial, leve eritema no trajeto do PICC, com dor discreta à palpação e sem calor local, pulsos periféricos palpáveis. Colhido hemograma, sem alterações significativas (1.750 neutrófilos). Proteína C reativa: 0,5 mg/L. Pró-calcitonina: 0,1 ng/mL. Realizada ultrassonografia Doppler venoso: trombose da veia axilar e subclávia direita.\n\nQual é a conduta mais adequada?",
    "options": [
      "Retirar imediatamente o cateter, sem necessidade de iniciar anticoagulação ou antibioticoterapia.",
      "Iniciar anticoagulação com heparina de baixo peso molecular e remover o cateter quando a anticoagulação atingir nível terapêutico.",
      "Manter o cateter com aplicação de trombolítico pelo dispositivo e realizar ultrassonografia de controle em duas semanas.",
      "Iniciar antibioticoterapia empírica com vancomicina, com infusão preferencial do antibiótico pelo cateter."
    ],
    "correctAnswer": 1,
    "explanation": "Adolescente com leucemia em quimioterapia, com PICC no braço direito, edema e dor, e Doppler confirmando trombose das veias axilar e subclávia: trombose venosa associada a cateter. Sem febre, com PCR e procalcitonina normais, não há sinais de infecção.\n\nA conduta é anticoagular (heparina de baixo peso molecular) e, se o cateter não for mais necessário ou não funcionar, removê-lo após alguns dias de anticoagulação terapêutica (3–5 dias), o que reduz o risco de embolia ao retirar. A anticoagulação é mantida por pelo menos 6 semanas a 3 meses.",
    "commentary": "Retirar o cateter sem anticoagular (A): a trombose exige anticoagulação; retirar sem anticoagular aumenta o risco de embolia e não trata o trombo.\n\nTrombolítico pelo cateter (C): trombólise fica para trombose extensa com risco de membro ou de vida; não é rotina.\n\nVancomicina pelo cateter (D): não há sinais de infecção (afebril, PCR e procalcitonina normais).",
    "tip": "Trombose associada a cateter: anticoagular; se for retirar o cateter, fazê-lo após 3–5 dias de anticoagulação.",
    "reference": "Monagle P et al. American Society of Hematology 2018 Guidelines for management of venous thromboembolism: treatment of pediatric VTE. Blood Adv, 2018.",
    "tags": [
      "trombose associada a cateter",
      "anticoagulação",
      "leucemia linfoblástica aguda"
    ]
  },
  {
    "id": "famema2026-44",
    "topography": "15",
    "topic": "Ética médica",
    "module": "Pediatria",
    "text": "Lactente, sexo masculino, 10 meses de idade, previamente hígido, está internado em enfermaria de pediatria devido a quadro de estomatite viral aguda. Ele foi internado devido à baixa aceitação da dieta oral e risco de evoluir com desidratação, sendo instalado um soro de manutenção. Três horas após a instalação do soro, outro plantonista vai avaliar a criança e percebe que a concentração de sódio na solução está três vezes acima da preconizada. O soro é interrompido, é solicitada uma coleta de sódio na urgência, com resultado de 143 mEq/L (dentro da faixa de normalidade), sendo prescrito um novo soro com a concentração certa de sódio. A mãe, que estava acompanhando a criança, acompanhou a coleta de exames e a troca do soro, sem questionar ativamente os motivos desses procedimentos.\n\nQual é a conduta adequada neste caso?",
    "options": [
      "Como não houve repercussão clínica desse erro, a equipe de saúde pode informar que a coleta de exames e troca do soro fazem parte dos protocolos habituais da instituição.",
      "Como a mãe não demonstrou interesse nos motivos da coleta de exames e troca do soro, não há necessidade de a equipe abordar esse evento adverso de forma proativa com a família.",
      "É obrigatório que o erro seja registrado em prontuário e informado aos familiares de forma clara e empática, explicando as medidas tomadas com o paciente e as ações visando prevenir recorrências.",
      "É obrigatório registrar o erro no prontuário do paciente, mas não há necessidade de diálogo com a família, pois não se caracterizou como evento adverso."
    ],
    "correctAnswer": 2,
    "explanation": "Um erro de prescrição (sódio três vezes acima do indicado) chegou ao paciente e exigiu medidas (coleta de exames e troca do soro), mesmo sem dano detectado: é um incidente que atingiu o paciente. A cultura de segurança do paciente e o Código de Ética Médica exigem transparência: registrar em prontuário, notificar no sistema de segurança do paciente da instituição e comunicar à família de forma clara e empática (disclosure), explicando o que aconteceu, o que foi feito e o que será feito para evitar recorrências.",
    "commentary": "Dizer que fazia parte do protocolo (A): é mentir para a família, violando o dever de informar e a confiança.\n\nNão abordar porque a mãe não perguntou (B): a comunicação deve ser proativa, não depender do questionamento da família.\n\nRegistrar sem conversar (D): a família tem direito de saber; e o erro atingiu o paciente, que precisou de intervenção.",
    "tip": "Erro que atinge o paciente: registrar, notificar à segurança do paciente e comunicar à família com transparência.",
    "reference": "Ministério da Saúde. Programa Nacional de Segurança do Paciente (Portaria nº 529/2013). Conselho Federal de Medicina. Código de Ética Médica, arts. 1º e 34.",
    "tags": [
      "segurança do paciente",
      "erro de medicação",
      "comunicação de eventos adversos"
    ]
  },
  {
    "id": "famema2026-45",
    "topography": "11",
    "topic": "Sepse neonatal",
    "module": "Pediatria",
    "text": "Recém-nascida, sexo feminino, 15 dias de vida, deu entrada no pronto-socorro por quadro de recusa alimentar, letargia e febre (38,4 °C) iniciados desde ontem. Trata-se de criança nascida a termo, parto vaginal, sem intercorrências perinatais. Ao exame clínico, criança em regular estado geral; descorada 1+/4+; FC: 176 bpm; FR: 58 irpm; SatO₂: 94% em ar ambiente; perfusão periférica lentificada. Observam-se vesículas eritematosas em região periocular e mucosa oral. É prescrita expansão com 10 mL/kg de soro fisiológico e são colhidos exames complementares com os seguintes achados: - Hemograma: Hb: 13,2 g/dL; Ht: 42%; leucócitos: 25.200/mm³ (8% de bastonetes e 68% de neutrófilos); plaquetas: 128.000/mm³. - AST (TGO): 185 U/L; ALT (TGP): 142 U/L; proteína C reativa: 38 mg/L. - Glicemia: 66 mg/dL; sódio: 137 mEq/L; potássio: 4,8 mEq/L. - Radiografia de tórax sem alterações. - Liquor é coletado, e aguarda-se o resultado.\n\nQual é a conduta mais adequada neste momento?",
    "options": [
      "Manter internação para observação clínica, sem introdução de nenhum tratamento endovenoso, por provável infecção viral autolimitada.",
      "Iniciar antibioticoterapia empírica com oxacilina e amicacina endovenosos, com eventuais ajustes a depender do resultado do líquor.",
      "Iniciar antibioticoterapia empírica com ampicilina e cefotaxima endovenosos, mantendo tratamento até resultado final das culturas.",
      "Iniciar tratamento empírico com ampicilina, cefotaxima e aciclovir endovenosos, mantendo internação e tratamento até esclarecimento diagnóstico."
    ],
    "correctAnswer": 3,
    "explanation": "Recém-nascida de 15 dias com febre, letargia, recusa alimentar e má perfusão (sepse neonatal tardia), com vesículas periocular e oral, transaminases elevadas e plaquetopenia: forte suspeita de infecção pelo herpes-vírus simples neonatal (forma disseminada ou de pele, olho e boca, com possível envolvimento do SNC).\n\nA conduta é cobrir as bactérias da sepse tardia/meningite (ampicilina + cefotaxima, para estreptococo do grupo B, Listeria e gram-negativos) e iniciar aciclovir EV (60 mg/kg/dia) imediatamente, sem esperar o PCR. O atraso do aciclovir aumenta muito a mortalidade.",
    "commentary": "Observação sem tratamento (A): RN febril com má perfusão exige tratamento empírico imediato.\n\nOxacilina e amicacina (B): é esquema de sepse tardia hospitalar, e não cobre o herpes nem adequadamente a meningite.\n\nAmpicilina e cefotaxima sem aciclovir (C): cobre as bactérias, mas deixa sem tratamento o herpes, sugerido pelas vesículas e pela hepatite.",
    "tip": "RN com febre + vesículas, hepatite ou convulsões: aciclovir EV já, junto com os antibióticos.",
    "reference": "Kimberlin DW et al. Red Book: Report of the Committee on Infectious Diseases (AAP), 2024 – Herpes simplex. Sociedade Brasileira de Pediatria. Herpes neonatal – documento científico.",
    "tags": [
      "herpes neonatal",
      "sepse neonatal",
      "aciclovir"
    ]
  },
  {
    "id": "famema2026-46",
    "topography": "11",
    "topic": "Icterícia neonatal",
    "module": "Pediatria",
    "text": "Recém-nascido, sexo masculino, 12 dias de vida, nascido a termo, aleitamento materno exclusivo, está em consulta de rotina. A mãe relata boa sucção e ganho de peso, sem queixas no momento. Mama a cada 3 horas, inclusive na madrugada. Relata diurese clara abundante e evacuações amareladas pastosas de 4 a 5 vezes ao dia. Ao exame clínico, é notada icterícia visível até joelhos, sem outros achados relevantes. Colhidos exames laboratoriais, com bilirrubina total: 13,8 mg/dL; bilirrubina indireta: 13,2 mg/dL; bilirrubina direta: 0,6 mg/dL; Coombs direto negativo; reticulócitos 2,0% (referência: 0,5–3%); TSH 2,5 µUI/mL (referência: 0,5–6,0 µUI/mL). Peso atual 3.380 g (ao nascer 3.250 g).\n\nQual é a conduta mais adequada?",
    "options": [
      "Internar para fototerapia devido à persistência da icterícia.",
      "Solicitar ultrassonografia de abdome para programação cirúrgica.",
      "Manter aleitamento materno exclusivo e acompanhamento clínico.",
      "Suspender o aleitamento por 48 horas e oferecer fórmula infantil."
    ],
    "correctAnswer": 2,
    "explanation": "Recém-nascido de 12 dias, em aleitamento exclusivo, mamando bem, ganhando peso (já passou o peso de nascimento), com icterícia até os joelhos e hiperbilirrubinemia indireta de 13,8 mg/dL, sem hemólise (Coombs negativo, reticulócitos normais), com TSH normal e bilirrubina direta normal: icterícia do leite materno.\n\nNessa idade e nesse nível, não há indicação de fototerapia. A conduta é manter o aleitamento exclusivo e acompanhar; a icterícia regride em semanas.",
    "commentary": "Fototerapia (A): o nível de 13,8 mg/dL aos 12 dias está abaixo da indicação de fototerapia para RN a termo.\n\nUltrassom para cirurgia (B): suspeita cirúrgica (atresia de vias biliares) só com bilirrubina direta elevada, colúria e acolia; aqui a fração direta é normal.\n\nSuspender o aleitamento (D): não é necessário e prejudica a amamentação; a icterícia do leite materno é benigna.",
    "tip": "Icterícia após 2 semanas: sempre dosar BD. Indireta com bebê bem e ganhando peso = leite materno → manter aleitamento. BD alta = investigar colestase.",
    "reference": "Sociedade Brasileira de Pediatria. Icterícia no recém-nascido com idade gestacional ≥ 35 semanas, 2021. Kemper AR et al. AAP Clinical Practice Guideline Revision: Hyperbilirubinemia in the Newborn ≥ 35 Weeks. Pediatrics, 2022.",
    "tags": [
      "icterícia neonatal",
      "icterícia do leite materno",
      "aleitamento materno"
    ]
  },
  {
    "id": "famema2026-47",
    "topography": "11",
    "topic": "Cardiopatias congênitas",
    "module": "Pediatria",
    "text": "Recém-nascido, sexo feminino, 2 dias de vida, foi transferido do alojamento conjunto para a uti neonatal devido a desconforto respiratório iniciado há poucas horas. Trata-se de criança nascida de termo (38 semanas), parto vaginal, Apgar 9/9, sem necessidade de manobras de reanimação. Na avaliação atual, apresenta cianose central persistente (SatO₂ 82% em ar ambiente), sem desconforto respiratório. Ausculta cardíaca com sopro sistólico e pulsos normais. Saturação pré-ductal: 83%; pós-ductal: 80%. Gasometria arterial: pO₂ 44 mmHg (referência: > 60 mmHg) após 10 min de oferta de oxigênio a 100%. Radiografia de tórax: campos bem expandidos, área cardíaca normal.\n\nQuais são o diagnóstico mais provável e a conduta inicial correspondente?",
    "options": [
      "Cardiopatia congênita cianótica – iniciar infusão de prostaglandina.",
      "Persistência da circulação fetal – iniciar ventilação mecânica imediata.",
      "Síndrome do desconforto respiratório – iniciar CPAP.",
      "Taquipneia transitória – manter O₂ sob cateter nasal."
    ],
    "correctAnswer": 0,
    "explanation": "RN a termo com cianose central, sem desconforto respiratório, com sopro, radiografia com pulmões expandidos e área cardíaca normal, e que não melhora com oxigênio (teste da hiperóxia: pO₂ < 100 mmHg, aqui 44 mmHg): cardiopatia congênita cianótica, provavelmente canal-dependente (transposição das grandes artérias é a mais comum nesse quadro).\n\nA conduta inicial é infusão de prostaglandina E1 para manter o canal arterial aberto, garantindo mistura sanguínea, até o ecocardiograma e a correção.",
    "commentary": "Hipertensão pulmonar persistente com ventilação mecânica (B): costuma ocorrer em RN com asfixia ou aspiração de mecônio, com desconforto respiratório e diferença de saturação pré e pós-ductal > 10%; aqui a diferença é de 3%.\n\nSíndrome do desconforto respiratório com CPAP (C): é de prematuros, com desconforto importante e radiografia com infiltrado reticulogranular e baixo volume pulmonar.\n\nTaquipneia transitória (D): cursa com taquipneia e melhora com oxigênio; não causa cianose refratária.",
    "tip": "RN cianótico sem desconforto, que não melhora com O₂ (teste da hiperóxia) = cardiopatia cianótica → prostaglandina E1.",
    "reference": "Sociedade Brasileira de Pediatria. Diagnóstico precoce de cardiopatia congênita crítica – teste do coraçãozinho, 2022. Park MK. Pediatric Cardiology for Practitioners, 7ª ed.",
    "tags": [
      "cardiopatia congênita cianótica",
      "prostaglandina",
      "teste da hiperóxia"
    ]
  },
  {
    "id": "famema2026-48",
    "topography": "11",
    "module": "Pediatria",
    "text": "Recém-nascido, sexo masculino, idade gestacional de 38 semanas, parto vaginal, líquido amniótico claro. Ao nascimento, está hipoativo e não respira espontaneamente. É colocado em berço aquecido, secado e estimulado, sendo mantido padrão. São iniciados ventilação com pressão positiva e oxigênio em ar ambiente, e, após 30 segundos, apresenta frequência cardíaca de 80 bpm, SatO₂ pré-ductal 78%. O tórax expande-se adequadamente, e o posicionamento da máscara está adequado.\n\nQual é o próximo passo mais adequado segundo as diretrizes de reanimação neonatal da Sociedade Brasileira de Pediatria (SBP)?",
    "options": [
      "Manter ventilação com ar ambiente por mais 30 segundos.",
      "Aumentar a fração inspirada de oxigênio para 100% e continuar a ventilação.",
      "Iniciar compressões torácicas em 3:1 imediatamente.",
      "Administrar adrenalina endovenosa e manter a ventilação positiva."
    ],
    "correctAnswer": 1,
    "explanation": "RN a termo em apneia, que após 30 segundos de VPP com ar ambiente e técnica adequada mantém FC de 80 bpm. A banca entendeu que, persistindo FC < 100 com técnica correta, o passo seguinte é aumentar a oferta de oxigênio e continuar ventilando, e só iniciar massagem se a FC cair abaixo de 60.\n\nPelo fluxograma da SBP, porém, quando a FC segue entre 60 e 100 após VPP eficaz com máscara, recomenda-se manter a VPP e considerar a via aérea avançada (cânula ou máscara laríngea); a FiO₂ é ajustada pela saturação-alvo do minuto de vida, e 78% está dentro do alvo para os primeiros minutos. Por isso a alternativa A (manter VPP em ar ambiente) também é defensável.",
    "commentary": "Manter a VPP com ar ambiente (A): pela saturação de 78%, adequada ao minuto de vida, a FiO₂ não precisaria subir; esta alternativa também é aceita aqui.\n\nMassagem 3:1 (C): só é indicada se a FC ficar abaixo de 60 bpm após 30 segundos de VPP eficaz, de preferência com via aérea avançada.\n\nAdrenalina (D): reservada para FC < 60 bpm apesar de ventilação adequada e massagem coordenada por 60 segundos.",
    "alert": "Gabarito discutível: a saturação de 78% está dentro do alvo para os primeiros minutos de vida, e o fluxograma da SBP não manda subir o oxigênio para 100% nessa situação. Manter a VPP (A) também é aceito.",
    "alsoAccepted": [
      0
    ],
    "tip": "Reanimação neonatal: FC < 100 após VPP → checar técnica, considerar cânula/máscara laríngea; FC < 60 → massagem com O₂ 100%. FiO₂ guiada pela saturação-alvo.",
    "reference": "Sociedade Brasileira de Pediatria. Programa de Reanimação Neonatal – Reanimação do recém-nascido ≥ 34 semanas em sala de parto. Diretrizes 2022.",
    "tags": [
      "reanimação neonatal",
      "ventilação com pressão positiva",
      "oxigenoterapia"
    ]
  },
  {
    "id": "famema2026-49",
    "topography": "5.1",
    "topic": "Vaginose bacteriana",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 25 anos chega ao ambulatório com queixa de corrimento claro, em pouca quantidade, sem prurido, com odor fétido, que se acentua durante a relação sexual e na menstruação, há um mês. Fez tratamento com fluconazol via oral sem melhora.\n\nAssinale a alternativa que apresenta corretamente o agente etiológico mais provável.",
    "options": [
      "Trichomonas vaginalis.",
      "Gardnerella vaginalis.",
      "Chlamydia trachomatis.",
      "Candida albicans."
    ],
    "correctAnswer": 1,
    "explanation": "Corrimento claro, pouco abundante, sem prurido, com odor fétido que piora após a relação sexual e na menstruação (o sêmen e o sangue, alcalinos, liberam aminas voláteis), sem resposta ao fluconazol: vaginose bacteriana, causada pela substituição dos lactobacilos por Gardnerella vaginalis e anaeróbios.\n\nO diagnóstico usa os critérios de Amsel (corrimento homogêneo, pH > 4,5, teste das aminas positivo, clue cells) ou o escore de Nugent. Tratamento: metronidazol 500 mg de 12/12 h por 7 dias.",
    "commentary": "Tricomoníase (A): corrimento abundante, amarelo-esverdeado, bolhoso, com prurido, ardência e colo em framboesa.\n\nClamídia (C): costuma causar cervicite assintomática ou com corrimento mucopurulento cervical, não odor fétido.\n\nCandidíase (D): corrimento branco grumoso, com prurido intenso e sem odor; teria respondido ao fluconazol.",
    "tip": "Corrimento com odor de peixe que piora após o sexo e na menstruação = vaginose bacteriana → metronidazol.",
    "reference": "Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com IST, 2022.",
    "tags": [
      "vaginose bacteriana",
      "corrimento vaginal",
      "gardnerella vaginalis"
    ]
  },
  {
    "id": "famema2026-50",
    "topography": "5.1",
    "topic": "Síndrome dos ovários policísticos",
    "module": "Ginecologia e Obstetrícia",
    "text": "Adolescente de 17 anos, menarca aos 16, refere ter apresentado sete menstruações em um ano, com quadro de acne, hirsutismo e queda de cabelo. Com base no quadro descrito, assinale a alternativa que apresenta corretamente o diagnóstico mais provável.",
    "options": [
      "Síndrome dos ovários policísticos.",
      "Hiperaldosteronismo primário.",
      "Hipogonadismo hipogonadotrófico.",
      "Normalidade dentro dos dois primeiros anos da menarca."
    ],
    "correctAnswer": 0,
    "explanation": "Adolescente de 17 anos com menarca aos 16 (há mais de 1 ano), com apenas 7 menstruações em um ano (oligomenorreia), acne, hirsutismo e queda de cabelo (hiperandrogenismo clínico): síndrome dos ovários policísticos é o diagnóstico mais provável.\n\nNa adolescência, o diagnóstico exige irregularidade menstrual persistente e hiperandrogenismo, e as outras causas devem ser excluídas (HAC não clássica, hipotireoidismo, hiperprolactinemia, tumores). O ultrassom não é usado para diagnóstico nos primeiros 8 anos após a menarca.",
    "commentary": "Hiperaldosteronismo primário (B): causa hipertensão e hipocalemia, não hiperandrogenismo.\n\nHipogonadismo hipogonadotrófico (C): cursa com amenorreia e falta de estrogênio, sem sinais androgênicos.\n\nNormalidade nos primeiros 2 anos (D): a irregularidade pode ser fisiológica no início, mas não explica acne, hirsutismo e alopecia.",
    "tip": "SOP: Rotterdam (2 de 3: oligoanovulação, hiperandrogenismo, ovários policísticos). Na adolescente, exige irregularidade + hiperandrogenismo, sem usar o ultrassom.",
    "reference": "Teede HJ et al. International evidence-based guideline for the assessment and management of polycystic ovary syndrome 2023. FEBRASGO. Síndrome dos ovários policísticos – Protocolo, 2021.",
    "tags": [
      "síndrome dos ovários policísticos",
      "hiperandrogenismo",
      "adolescência"
    ]
  },
  {
    "id": "famema2026-51",
    "topography": "5.1",
    "topic": "Mioma uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 37 anos, nuligesta, cor preta, teve menarca aos 10 anos e refere ciclos menstruais regulares, porém, nos últimos três anos, com aumento progressivo da duração e da intensidade do fluxo. Está tentando engravidar há quinze meses, sem sucesso. Nega dispareunia. Refere também sensação de peso no baixo ventre.\n\nCom base no quadro descrito, assinale a alternativa que apresenta corretamente o diagnóstico mais provável.",
    "options": [
      "Adenomiose.",
      "Endometriose.",
      "Miomatose uterina.",
      "Pólipo endometrial."
    ],
    "correctAnswer": 2,
    "explanation": "Mulher negra de 37 anos, nuligesta, com menarca precoce, aumento progressivo do fluxo e da duração menstrual, sensação de peso no baixo ventre e infertilidade: miomatose uterina. Os fatores de risco presentes são cor preta (risco 2–3 vezes maior, com miomas mais precoces e numerosos), nuliparidade, menarca precoce e idade na faixa dos 30–40 anos. O sangramento aumentado é o sintoma mais comum, e miomas submucosos e intramurais que distorcem a cavidade prejudicam a fertilidade.\n\nO diagnóstico é feito por ultrassom transvaginal.",
    "commentary": "Adenomiose (A): também causa aumento do fluxo e útero aumentado, mas é típica de multíparas acima dos 40 anos, com dismenorreia importante.\n\nEndometriose (B): o sintoma principal é dor (dismenorreia, dispareunia, dor pélvica crônica), ausente aqui; a paciente nega dispareunia.\n\nPólipo endometrial (D): causa sangramento intermenstrual ou irregular, não sensação de peso nem aumento progressivo do fluxo com útero volumoso.",
    "tip": "Mulher negra, nulípara, com sangramento menstrual aumentado e peso pélvico = mioma. Dor e dispareunia = endometriose; multípara > 40 anos com dismenorreia = adenomiose.",
    "reference": "FEBRASGO. Miomatose uterina – Protocolo nº 32, 2021. Stewart EA. Uterine fibroids. N Engl J Med, 2015.",
    "tags": [
      "mioma uterino",
      "sangramento uterino anormal",
      "infertilidade"
    ]
  },
  {
    "id": "famema2026-52",
    "topography": "5.1",
    "topic": "Climatério e menopausa",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 47 anos está fazendo reposição estroprogestativa por via transdérmica, com melhora importante dos sintomas climatéricos, porém com quadro de desejo sexual hipoativo. Faz uso de anlodipino para hipertensão arterial crônica.\n\nAssinale a alternativa que apresenta corretamente a melhor abordagem para atender a essa queixa.",
    "options": [
      "Trocar o anti-hipertensivo por um bloqueador de receptor de angiotensina (BRA).",
      "Mudar a terapia hormonal pela via oral.",
      "Iniciar testosterona transdérmica em gel e manter a reposição estroprogestativa.",
      "Iniciar testosterona transdérmica em gel e suspender a reposição estroprogestativa."
    ],
    "correctAnswer": 2,
    "explanation": "Mulher na pós-menopausa, com boa resposta à terapia hormonal transdérmica para os sintomas vasomotores, mas com desejo sexual hipoativo: a única indicação com evidência para testosterona em mulheres é o transtorno do desejo sexual hipoativo na pós-menopausa, após excluir outras causas (relacionais, psicológicas, medicamentosas). Usa-se testosterona transdérmica em dose fisiológica feminina, mantendo a terapia estroprogestativa, que continua necessária para os fogachos e a proteção endometrial.",
    "commentary": "Trocar o anlodipino por BRA (A): o anlodipino não é causa reconhecida de redução do desejo; essa mudança não trata a queixa.\n\nMudar a terapia hormonal para via oral (B): a via oral aumenta a SHBG e reduz a testosterona livre, podendo piorar a libido, e tem mais risco trombótico.\n\nTestosterona suspendendo a reposição (D): os sintomas climatéricos voltariam; a testosterona é usada em associação, não em substituição.",
    "tip": "Testosterona na mulher: só para desejo sexual hipoativo na pós-menopausa, transdérmica, junto com a terapia hormonal.",
    "reference": "Davis SR et al. Global Consensus Position Statement on the Use of Testosterone Therapy for Women. J Clin Endocrinol Metab, 2019. The 2022 Hormone Therapy Position Statement of The North American Menopause Society.",
    "tags": [
      "desejo sexual hipoativo",
      "testosterona",
      "terapia hormonal"
    ]
  },
  {
    "id": "famema2026-53",
    "topography": "5.1",
    "topic": "Contracepção",
    "module": "Ginecologia e Obstetrícia",
    "text": "Adolescente de 16 anos pretende iniciar vida sexual e procura um médico para orientação contraceptiva. Sabe que deverá fazer uso de preservativo, porém não se sente segura somente com ele.\n\nCom base na história clínica descrita, assinale a alternativa correta sobre os métodos contraceptivos reversíveis de longa duração (LARC).",
    "options": [
      "Associam estrogênios e progestagênios.",
      "Os injetáveis trimestrais são os mais escolhidos.",
      "Não são considerados boas opções para a paciente referida.",
      "Devem ser incentivados entre as adolescentes."
    ],
    "correctAnswer": 3,
    "explanation": "Os métodos contraceptivos reversíveis de longa duração (LARC) são o DIU de cobre, o DIU hormonal (levonorgestrel) e o implante de etonogestrel. São os métodos mais eficazes (falha < 1% ao ano), pois não dependem da usuária, e podem ser usados por adolescentes, inclusive nulíparas (categoria 2 dos critérios da OMS, em que os benefícios superam os riscos). Por isso devem ser incentivados entre as adolescentes, sempre associados ao preservativo para prevenção de IST.",
    "commentary": "Associam estrogênio e progestagênio (A): nenhum LARC contém estrogênio; os hormonais têm só progestagênio.\n\nInjetáveis trimestrais são os mais escolhidos (B): o injetável trimestral não é LARC, porque precisa de aplicações frequentes.\n\nNão são boas opções para adolescentes (C): é o contrário; as sociedades recomendam LARC como primeira opção para adolescentes.",
    "tip": "LARC = DIU de cobre, DIU de levonorgestrel e implante. Primeira linha para adolescentes, inclusive nulíparas, sempre com preservativo.",
    "reference": "FEBRASGO. Anticoncepção na adolescência, 2021. World Health Organization. Medical Eligibility Criteria for Contraceptive Use, 5ª ed., 2015. ACOG Committee Opinion nº 735, 2018.",
    "tags": [
      "contracepção",
      "LARC",
      "adolescência"
    ]
  },
  {
    "id": "famema2026-54",
    "topography": "5.1",
    "topic": "Doença inflamatória pélvica",
    "module": "Ginecologia e Obstetrícia",
    "text": "A moléstia inflamatória pélvica (MIPA) é considerada como um conjunto de processos inflamatórios da região pélvica devido à propagação de microrganismos a partir do colo do útero e da vagina para o endométrio, as tubas, o peritônio e as estruturas adjacentes. Uma de suas complicações é a presença de abscesso tubo-ovariano (ATO).\n\nNesse contexto, torna-se obrigatória a abordagem cirúrgica se",
    "options": [
      "o maior diâmetro do ATO for maior que 5,0 cm.",
      "o ATO se romper.",
      "o agente isolado for Chlamydia trachomatis.",
      "não houver resposta à antibioticoterapia por doze horas."
    ],
    "correctAnswer": 1,
    "explanation": "O abscesso tubo-ovariano roto é emergência cirúrgica: causa peritonite generalizada e choque séptico, com mortalidade alta sem cirurgia imediata (laparotomia ou laparoscopia com drenagem, lavagem e, se necessário, anexectomia).\n\nNos casos sem rotura, o tratamento inicial é antibiótico EV; drenagem guiada por imagem ou cirurgia ficam para falha em 48–72 horas ou abscessos grandes.",
    "commentary": "Abscesso maior que 5 cm (A): abscessos grandes (sobretudo > 7–8 cm) respondem pior ao antibiótico e muitas vezes são drenados, mas o tamanho não torna a cirurgia obrigatória.\n\nAgente Chlamydia trachomatis (C): o agente não define a necessidade de cirurgia.\n\nSem resposta em 12 horas (D): a resposta ao antibiótico é avaliada em 48–72 horas.",
    "tip": "Abscesso tubo-ovariano: antibiótico EV; cirurgia obrigatória se roto. Sem melhora em 48–72 h: drenagem ou cirurgia.",
    "reference": "Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com IST, 2022. CDC. STI Treatment Guidelines, 2021.",
    "tags": [
      "abscesso tubo-ovariano",
      "doença inflamatória pélvica",
      "abdome agudo"
    ]
  },
  {
    "id": "famema2026-55",
    "topography": "5.1",
    "topic": "Prolapso genital",
    "module": "Ginecologia e Obstetrícia",
    "text": "Um fator de risco para incontinência urinária e prolapso de órgãos pélvicos é",
    "options": [
      "a síndrome de Marfan.",
      "o índice de massa corpórea (IMC) abaixo de 15.",
      "o parto cesáreo.",
      "a cor preta."
    ],
    "correctAnswer": 0,
    "explanation": "A síndrome de Marfan é uma doença do tecido conjuntivo (alteração da fibrilina) que deixa fáscias e ligamentos do assoalho pélvico mais frágeis; por isso aumenta o risco de prolapso de órgãos pélvicos e de incontinência urinária, como outras colagenopatias (Ehlers-Danlos). Os demais fatores de risco principais são parto vaginal (sobretudo múltiplo, com fórceps ou fetos grandes), idade, menopausa, obesidade e aumento crônico da pressão abdominal.",
    "commentary": "IMC abaixo de 15 (B): o fator de risco é o excesso de peso (obesidade), que aumenta a pressão abdominal.\n\nParto cesáreo (C): a cesárea tem menor risco de lesão do assoalho que o parto vaginal; o fator de risco é o parto vaginal.\n\nCor preta (D): mulheres negras têm menor prevalência de prolapso; mulheres brancas e hispânicas têm maior risco.",
    "tip": "Prolapso e incontinência: parto vaginal, idade, menopausa, obesidade, tosse/constipação crônicas e colagenopatias (Marfan, Ehlers-Danlos).",
    "reference": "FEBRASGO. Prolapso genital – Protocolo, 2021. Jelovsek JE et al. Pelvic organ prolapse. Lancet, 2007.",
    "tags": [
      "prolapso genital",
      "incontinência urinária",
      "síndrome de Marfan"
    ]
  },
  {
    "id": "famema2026-56",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 53 anos foi submetida à mamografia acompanhada de ultrassonografia mamária como método de rastreamento. Ao ultrassom, apresentou nódulo de 1,5 cm, em junção dos quadrantes laterais da mama D, com maior eixo perpendicular à pele, limites irregulares, sem reforço acústico posterior. A mamografia revelou calcificação grosseira em região do nódulo e axilas com linfonodos de aspecto habitual. Esse achado deve corresponder à classificação BI-RADS ________, e a conduta correta é solicitar ________.\n\nAssinale a alternativa que preenche, correta e respectivamente, as lacunas.",
    "options": [
      "1 ... novo exame seguindo a periodicidade de rotina",
      "2 ... novo exame seguindo a periodicidade de rotina",
      "3 ... novo exame em seis meses",
      "4 ... punção dirigida por ultrassom"
    ],
    "correctAnswer": 3,
    "explanation": "Nódulo sólido de 1,5 cm com eixo maior perpendicular à pele (mais alto que largo, 'não paralelo'), limites irregulares e sem reforço acústico posterior reúne características suspeitas de malignidade. Pela classificação BI-RADS, achados suspeitos são categoria 4, que exige confirmação histológica por biópsia guiada por imagem (core biopsy guiada por ultrassom). Calcificação grosseira, isoladamente, é benigna, mas não reduz a suspeição do nódulo.",
    "commentary": "BI-RADS 1 com rotina (A): BI-RADS 1 é exame normal, sem achados.\n\nBI-RADS 2 com rotina (B): categoria de achados benignos (cistos simples, fibroadenoma calcificado, linfonodos intramamários); o nódulo tem características suspeitas.\n\nBI-RADS 3 com controle em 6 meses (C): é para achados provavelmente benignos (nódulo oval, circunscrito, paralelo à pele), com risco < 2%.",
    "tip": "BI-RADS: 0 incompleto; 1 normal; 2 benigno; 3 provavelmente benigno (controle em 6 meses); 4 e 5 suspeitos (biópsia); 6 câncer comprovado.",
    "reference": "American College of Radiology. ACR BI-RADS Atlas, 5ª ed., 2013. Colégio Brasileiro de Radiologia, SBM e FEBRASGO. Recomendações para o rastreamento do câncer de mama, 2023.",
    "tags": [
      "BI-RADS",
      "nódulo mamário",
      "biópsia mamária"
    ]
  },
  {
    "id": "famema2026-57",
    "topography": "5.2",
    "topic": "Placenta prévia",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante de 29 semanas e 2 dias apresenta, em consulta de pré-natal, ultrassom evidenciando bordo inferior da placenta a 3,2 cm do orifício interno do colo uterino. De acordo com a nova classificação de placenta com inserção anômala, trata-se de placenta",
    "options": [
      "de inserção normal.",
      "baixa.",
      "prévia.",
      "marginal."
    ],
    "correctAnswer": 0,
    "explanation": "Pela classificação atual, a placenta prévia é aquela que cobre total ou parcialmente o orifício interno do colo, e a placenta de inserção baixa é aquela cuja borda fica a menos de 2 cm do orifício interno, sem cobri-lo. Com a borda inferior a 3,2 cm do orifício interno, a placenta tem inserção normal. Os termos 'marginal' e 'parcial' foram abandonados.\n\nO diagnóstico definitivo de placenta prévia ou baixa só é feito após 28 semanas, porque a placenta tende a 'migrar' com o crescimento do segmento inferior.",
    "commentary": "Baixa (B): exigiria borda a menos de 2 cm do orifício interno.\n\nPrévia (C): exigiria a placenta recobrindo o orifício interno.\n\nMarginal (D): termo antigo, que não é mais usado na classificação atual.",
    "tip": "Placenta: recobre o orifício interno = prévia; borda a < 2 cm = baixa; ≥ 2 cm = normal. Diagnóstico definitivo após 28 semanas.",
    "reference": "Jauniaux E et al. Placenta Praevia and Placenta Accreta: Diagnosis and Management (RCOG Green-top Guideline nº 27a). BJOG, 2019. FEBRASGO. Placenta prévia – Protocolo, 2021.",
    "tags": [
      "placenta prévia",
      "placenta baixa",
      "ultrassonografia obstétrica"
    ]
  },
  {
    "id": "famema2026-58",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Com incidência no nosso país superior a 10% de todas as gestações, a prematuridade se associa a piores desfechos neonatais, elevando sobremaneira o custo assistencial dos recém-nascidos e causando grande angústia em pais e familiares.\n\nEm relação à prematuridade, é correto afirmar:",
    "options": [
      "tem forte associação com a candidíase vaginal.",
      "os extremos da idade apresentam menor incidência.",
      "história de parto prematuro anterior é um importante fator de risco.",
      "o índice de Bishop é um bom método de rastreamento."
    ],
    "correctAnswer": 2,
    "explanation": "A história de parto prematuro anterior é um dos principais fatores de risco para nova prematuridade: o risco aumenta de 1,5 a 2 vezes e cresce quanto mais precoce e mais numerosos forem os partos prematuros prévios. Essas gestantes devem fazer rastreamento com medida do colo por ultrassom transvaginal e recebem progesterona vaginal para prevenção.",
    "commentary": "Candidíase vaginal (A): não tem associação relevante com prematuridade; a vaginose bacteriana é que se associa, sobretudo com antecedente de prematuridade.\n\nExtremos de idade com menor incidência (B): adolescentes e mulheres acima de 35–40 anos têm maior incidência de prematuridade.\n\nÍndice de Bishop como rastreamento (D): avalia o colo para indução do parto; o rastreamento de prematuridade é a medida do comprimento do colo por ultrassom transvaginal.",
    "tip": "Prematuridade: maior fator de risco é parto prematuro anterior. Rastreio: colo curto no USG transvaginal (≤ 25 mm) → progesterona vaginal.",
    "reference": "FEBRASGO. Prematuridade – Protocolo, 2021. Ministério da Saúde. Manual de Gestação de Alto Risco, 2022.",
    "tags": [
      "prematuridade",
      "fatores de risco",
      "pré-natal"
    ]
  },
  {
    "id": "famema2026-59",
    "topography": "5.2",
    "topic": "Pré-eclâmpsia",
    "module": "Ginecologia e Obstetrícia",
    "text": "Multípara de 38 anos, com gestação de 30 semanas e 1 dia, refere troca de parceiro na gestação atual, além de ganho de peso (4 kg em uma semana) e elevação da pressão arterial (sendo o maior valor de 145 x 96 mmHg). Nega cefaleia, alterações visuais ou epigastralgia. Refere boa movimentação fetal.\n\nConsiderando que a paciente já foi submetida ao exame clínico e ultrassonográfico, o seguinte exame é considerado de maior valor para complementação diagnóstica:",
    "options": [
      "ácido úrico.",
      "relação proteína/creatinina em amostra isolada de urina.",
      "proteínas totais.",
      "gasometria arterial."
    ],
    "correctAnswer": 1,
    "explanation": "Gestante de 30 semanas com PA ≥ 140 × 90 mmHg, ganho súbito de peso (edema) e fatores de risco (idade ≥ 35 anos, troca de parceiro): suspeita de pré-eclâmpsia. Para diagnosticar, procura-se proteinúria (ou lesão de órgão-alvo). O exame de maior valor e mais prático é a relação proteína/creatinina em amostra isolada de urina; valor ≥ 0,3 confirma proteinúria significativa, com boa correlação com a proteinúria de 24 horas.",
    "commentary": "Ácido úrico (A): costuma subir na pré-eclâmpsia, mas não faz parte dos critérios diagnósticos.\n\nProteínas totais (C): não diagnosticam pré-eclâmpsia.\n\nGasometria arterial (D): não tem papel na investigação da hipertensão na gestação.",
    "tip": "Pré-eclâmpsia: PA ≥ 140 × 90 após 20 semanas + proteinúria (relação P/C ≥ 0,3, ≥ 300 mg/24 h ou fita ≥ 2+) ou lesão de órgão-alvo.",
    "reference": "Peraçoli JC et al. Pré-eclâmpsia/eclâmpsia – Protocolo nº 01 (RBEHG/FEBRASGO), 2023. Magee LA et al. ISSHP classification and management recommendations, 2022.",
    "tags": [
      "pré-eclâmpsia",
      "proteinúria",
      "relação proteína/creatinina"
    ]
  },
  {
    "id": "famema2026-60",
    "topography": "5.2",
    "topic": "Diabetes gestacional",
    "module": "Ginecologia e Obstetrícia",
    "text": "Assinale a alternativa que apresenta apenas informações corretas sobre o diabetes gestacional.",
    "options": [
      "Se a glicemia de jejum da primeira consulta for maior ou igual a 92 e menor que 126, é estabelecido o diagnóstico de diabetes gestacional.",
      "Se a glicemia de jejum da primeira consulta for maior que 125, é estabelecido o diagnóstico de diabetes gestacional.",
      "Um teste de tolerância à glicose deve ser oferecido a todas as gestantes obesas na primeira consulta de pré-natal.",
      "Gestantes que apresentam glicosúria devem ser submetidas a um teste de tolerância à glicose, independentemente da idade gestacional."
    ],
    "correctAnswer": 0,
    "explanation": "Pelo consenso brasileiro (Ministério da Saúde, FEBRASGO, SBD, OPAS), toda gestante faz glicemia de jejum na primeira consulta: valores entre 92 e 125 mg/dL definem diabetes gestacional; ≥ 126 mg/dL definem diabetes diagnosticado na gestação (pré-existente, não gestacional). Se a glicemia inicial for < 92, faz-se TOTG 75 g entre 24 e 28 semanas.",
    "commentary": "Glicemia > 125 = diabetes gestacional (B): ≥ 126 mg/dL caracteriza diabetes prévio diagnosticado na gestação (overt diabetes), não diabetes gestacional.\n\nTOTG para todas as obesas na primeira consulta (C): o rastreamento inicial é a glicemia de jejum; o TOTG é feito entre 24 e 28 semanas.\n\nGlicosúria indica TOTG em qualquer idade gestacional (D): glicosúria é comum na gestação (menor limiar renal) e não é critério de rastreamento.",
    "tip": "Gestação: jejum na 1ª consulta — 92–125 = DMG; ≥ 126 = diabetes prévio. Se < 92: TOTG 75 g com 24–28 semanas (≥ 92 / ≥ 180 / ≥ 153).",
    "reference": "Ministério da Saúde, OPAS, FEBRASGO, SBD. Rastreamento e diagnóstico de diabetes mellitus gestacional no Brasil, 2017.",
    "tags": [
      "diabetes gestacional",
      "glicemia de jejum",
      "pré-natal"
    ]
  },
  {
    "id": "famema2026-61",
    "topography": "11",
    "topic": "Aleitamento materno",
    "module": "Ginecologia e Obstetrícia",
    "text": "Trata-se de contraindicação(ões) formal(is) à amamentação:",
    "options": [
      "infecção por hepatite C e HIV.",
      "infecção por hepatite B e HIV.",
      "somente infecção por HIV.",
      "infecção por HIV e uso de antineoplásicos."
    ],
    "correctAnswer": 3,
    "explanation": "São contraindicações formais à amamentação no Brasil: mãe vivendo com HIV ou HTLV-1/2, uso de antineoplásicos e radiofármacos (enquanto houver excreção no leite), algumas drogas de abuso e, no lactente, galactosemia clássica e outras doenças metabólicas raras. Entre as opções, só a D traz duas contraindicações verdadeiras.",
    "commentary": "Hepatite C e HIV (A): a hepatite C não contraindica a amamentação (só se suspende temporariamente se houver fissura com sangramento).\n\nHepatite B e HIV (B): com vacina e imunoglobulina ao nascer, a mãe com hepatite B pode amamentar.\n\nSomente HIV (C): incompleta; o uso de antineoplásicos também é contraindicação.",
    "tip": "Não amamentar: HIV, HTLV, antineoplásicos/radiofármacos, galactosemia no bebê. Hepatite B e C podem amamentar.",
    "reference": "Ministério da Saúde. Caderno de Atenção Básica nº 23 – Aleitamento Materno e Alimentação Complementar, 2015. Ministério da Saúde. Amamentação e uso de medicamentos e outras substâncias, 2ª ed., 2014.",
    "tags": [
      "aleitamento materno",
      "contraindicações",
      "HIV"
    ]
  },
  {
    "id": "famema2026-62",
    "topography": "5.2",
    "topic": "Infecções na gestação",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma complicação clínica muito frequente na gestação é a infecção do trato urinário. Em relação a essa morbidade, assinale a alternativa correta.",
    "options": [
      "Bacteriúria assintomática em gestantes não precisa ser tratada.",
      "Bacteriúria assintomática em gestantes pode evoluir para pielonefrite.",
      "Na gestação, urina 1 com mais de 100 mil leucócitos deve ser tratada com antibioticoterapia endovenosa.",
      "A pielonefrite na gestação é mais comum à esquerda."
    ],
    "correctAnswer": 1,
    "explanation": "Na gestação, a progesterona relaxa a musculatura dos ureteres e o útero comprime as vias urinárias, causando estase urinária. Assim, a bacteriúria assintomática, que fora da gestação geralmente não é tratada, evolui para pielonefrite em 20–40% das gestantes não tratadas, com risco de prematuridade e sepse. Por isso toda gestante faz urocultura no pré-natal e a bacteriúria é tratada guiada pelo antibiograma.",
    "commentary": "Bacteriúria assintomática não precisa de tratamento (A): na gestação ela deve ser sempre tratada.\n\nLeucocitúria > 100 mil exige antibiótico EV (C): o diagnóstico é feito pela urocultura; cistite e bacteriúria são tratadas por via oral, e o antibiótico EV fica para pielonefrite.\n\nPielonefrite mais comum à esquerda (D): é mais comum à direita, pela dextrorrotação do útero e pela compressão do ureter direito.",
    "tip": "Gestante: urocultura de rotina; bacteriúria assintomática sempre tratada. Pielonefrite na gestação: internar, antibiótico EV; mais comum à direita.",
    "reference": "Ministério da Saúde. Manual de Gestação de Alto Risco, 2022. FEBRASGO. Infecção urinária na gestação – Protocolo, 2021.",
    "tags": [
      "bacteriúria assintomática",
      "infecção urinária na gestação",
      "pielonefrite"
    ]
  },
  {
    "id": "famema2026-63",
    "topography": "5.2",
    "topic": "Rotura prematura de membranas",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma gestante de 32 semanas e 5 dias vai ao PSO referindo quadro de perda de líquido pela vagina há cerca de cinco horas, em moderada quantidade, com odor de água sanitária. Nega sangramento vaginal ou dor. Ao exame clínico: sinais vitais sem alterações e afebril. Ao exame especular: não identificado líquido em vagina. Ausência de perda de líquido à manobra de Valsalva. Teste do forro: negativo.\n\nCom base nesse contexto, assinale a alternativa que apresenta corretamente o exame de maior sensibilidade e especificidade na exclusão do diagnóstico de rotura prematura de membranas ovulares.",
    "options": [
      "Teste do papel de nitrazina (pH vaginal).",
      "Teste da fibronectina fetal (fFN).",
      "Prova do fenolsulfonftaleína (Fenol).",
      "Identificação da PAMG-1 (placental alpha microglobulin-1)."
    ],
    "correctAnswer": 3,
    "explanation": "Suspeita de rotura prematura de membranas com exame especular negativo (sem líquido no fundo de saco, Valsalva negativa): é preciso um teste complementar. A pesquisa de PAMG-1 (alfa-microglobulina-1 placentária, teste comercial AmniSure) tem a maior sensibilidade e especificidade (cerca de 95–99%), porque a proteína existe em alta concentração no líquido amniótico e em quantidade mínima na secreção vaginal. Também é útil o IGFBP-1 (Actim PROM).",
    "commentary": "Papel de nitrazina (A): detecta pH alcalino, mas tem muitos falsos-positivos (sangue, sêmen, vaginose, urina) e falsos-negativos.\n\nFibronectina fetal (B): é usada para predizer parto prematuro em gestantes sintomáticas com membranas íntegras, não para diagnosticar rotura.\n\nFenol vermelho (C): é teste antigo de pH, com as mesmas limitações da nitrazina.",
    "tip": "RPMO: exame especular primeiro. Dúvida: PAMG-1 (AmniSure) ou IGFBP-1 são os testes mais acurados.",
    "reference": "FEBRASGO. Rotura prematura das membranas ovulares – Protocolo nº 30, 2021. ACOG Practice Bulletin nº 217 – Prelabor Rupture of Membranes, 2020.",
    "tags": [
      "rotura prematura de membranas",
      "PAMG-1",
      "diagnóstico"
    ]
  },
  {
    "id": "famema2026-64",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Primigesta de 9 semanas e 2 dias retorna à consulta de pré-natal para mostrar os primeiros exames, sem queixas, e apresenta TSH de 4,8. A conduta correta é",
    "options": [
      "solicitar anti-TPO.",
      "solicitar T4 livre, apenas.",
      "solicitar T4 livre e introduzir levotiroxina 1,0 mcg/kg/dia.",
      "introduzir levotiroxina 2,0 mcg/kg/dia."
    ],
    "correctAnswer": 2,
    "explanation": "Gestante de 9 semanas com TSH de 4,8 mUI/L, acima do limite superior para o 1º trimestre (cerca de 4,0 mUI/L, ou 2,5 em referências antigas): hipotireoidismo subclínico ou clínico. Deve-se dosar o T4 livre para diferenciar e iniciar levotiroxina, porque o hipotireoidismo na gestação se associa a abortamento, prematuridade e prejuízo do desenvolvimento neurológico fetal.\n\nNo hipotireoidismo subclínico, a dose inicial costuma ser 1 mcg/kg/dia (ou 25–50 mcg); no hipotireoidismo clínico (T4 livre baixo), cerca de 2 mcg/kg/dia.",
    "commentary": "Solicitar anti-TPO (A): o anti-TPO ajuda a decidir em TSH entre 2,5 e 4,0, mas com TSH > 4 a levotiroxina já está indicada, independentemente dos anticorpos.\n\nT4 livre apenas (B): o T4 livre é necessário, mas sem tratar se perde o benefício para a gestação.\n\nLevotiroxina 2 mcg/kg/dia sem T4 livre (D): é a dose do hipotireoidismo clínico; sem saber o T4 livre, a dose plena pode ser excessiva.",
    "tip": "Gestação: TSH > 4 (1º tri) = tratar com levotiroxina. Subclínico ~1 mcg/kg/dia; clínico ~2 mcg/kg/dia. Alvo TSH < 2,5.",
    "reference": "Alexander EK et al. 2017 Guidelines of the American Thyroid Association for the Diagnosis and Management of Thyroid Disease During Pregnancy and the Postpartum. Thyroid, 2017. FEBRASGO. Doenças da tireoide na gestação, 2021.",
    "tags": [
      "hipotireoidismo na gestação",
      "TSH",
      "levotiroxina"
    ]
  },
  {
    "id": "famema2026-65",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Uma Unidade Básica de Saúde (UBS) é convidada pela comunidade em que está localizada a participar de uma feira organizada por uma associação de mulheres, sem fins lucrativos, na sua maioria trabalhadoras domésticas, de comércio e de logística. O objetivo da feira é promover um encontro entre os moradores, com divulgação de informações sobre direitos sociais em geral, além de compartilhar produtos alimentícios sem agrotóxicos e artesanatos para arrecadar fundos para a associação. A feira é prevista para um sábado a cada 2 meses.\n\nAssinale a alternativa correta.",
    "options": [
      "Trata-se de uma atividade comunitária que deve ser incentivada, mas como não se trata de uma atividade do setor de saúde, a UBS deve se recusar a participar.",
      "Pode ser considerada parte de promoção da saúde, e a UBS pode participar com atividades de divulgação de informação sobre direitos e ações sanitárias, vacinação, entre outras.",
      "Trata-se de uma atividade festiva, positiva, que auxilia na organização comunitária, mas como ocorre no sábado, a UBS não pode participar.",
      "As equipes das UBS só podem participar de atividades que sejam realizadas dentro dos serviços."
    ],
    "correctAnswer": 1,
    "explanation": "A feira comunitária, com divulgação de direitos sociais, alimentos sem agrotóxicos e fortalecimento de uma associação de trabalhadoras, é uma oportunidade de promoção da saúde e de ação intersetorial no território. A Política Nacional de Atenção Básica prevê que as equipes atuem também fora da unidade, em espaços comunitários, com ações de educação em saúde, vacinação e divulgação de serviços. A participação fortalece o vínculo e a participação social.",
    "commentary": "Recusar por não ser atividade de saúde (A): promoção da saúde envolve os determinantes sociais (renda, alimentação, direitos), e a intersetorialidade é diretriz do SUS.\n\nNão participar por ser sábado (C): não há proibição; a equipe pode se organizar para ações fora do horário habitual.\n\nAtuar só dentro dos serviços (D): a atuação no território (domicílios, escolas, espaços comunitários) é atribuição das equipes de atenção primária.",
    "tip": "APS atua no território, com ações intersetoriais e de promoção da saúde, não só dentro da UBS.",
    "reference": "Ministério da Saúde. Política Nacional de Atenção Básica (Portaria nº 2.436/2017). Política Nacional de Promoção da Saúde, 2014.",
    "tags": [
      "promoção da saúde",
      "atenção primária",
      "participação social"
    ]
  },
  {
    "id": "famema2026-66",
    "topography": "15",
    "topic": "Vigilância epidemiológica",
    "module": "Saúde Coletiva",
    "text": "Assim como campanhas publicitárias de vendas de produtos sofrem influência do tempo em que são concebidas, campanhas envolvendo a saúde coletiva também refletem vários aspectos do processo histórico.\n\nLeia algumas das mensagens escolhidas pelo Ministério da Saúde para tratar da prevenção de Aids durante alguns anos e assinale a alternativa correta.",
    "options": [
      "Em 1998, a mensagem “Se fosse seringa, você usava?” dirigida a pessoas dependentes de drogas injetáveis é considerada hoje estímulo à drogadição.",
      "Em 2000, a mensagem “Camisinha: a melhor amiga da estrada” é considerada preconceituosa em relação aos caminhoneiros, público preferencial da mensagem.",
      "Em 2019, a mensagem “HIV/Aids. Se a dúvida acaba, a vida continua” era dirigida aos jovens para influenciar a atitude e a percepção da importância da prevenção, teste e tratamento do HIV para evitar a Aids.",
      "Em 2017, a mensagem “Tem camisinha na festa” era dirigida especificamente aos participantes da Parada Gay."
    ],
    "correctAnswer": 2,
    "explanation": "As campanhas do Ministério da Saúde contra a Aids acompanharam o contexto de cada época. A campanha de 2019 ('Se a dúvida acaba, a vida continua') teve como público principal os jovens, entre os quais a infecção crescia, e estimulava a testagem, a prevenção combinada e o tratamento precoce, para evitar o adoecimento por Aids.",
    "commentary": "'Se fosse seringa, você usava?' como estímulo à droga (A): a campanha seguia a lógica da redução de danos, reconhecida como estratégia de saúde pública eficaz, não um estímulo à drogadição.\n\n'Camisinha: a melhor amiga da estrada' como preconceituosa (B): era dirigida a caminhoneiros, população com maior vulnerabilidade, e não é considerada preconceituosa; adaptar a mensagem ao público é estratégia de comunicação.\n\n'Tem camisinha na festa' só para a Parada (D): a campanha de 2017 era voltada ao Carnaval e a festas em geral, para toda a população.",
    "tip": "Campanhas de HIV/Aids: mensagem adaptada ao público mais vulnerável de cada época (redução de danos, caminhoneiros, jovens).",
    "reference": "Ministério da Saúde. Departamento de HIV/Aids, Tuberculose, Hepatites Virais e IST – Histórico das campanhas de prevenção. Ministério da Saúde. Campanha 2019 – Dia Mundial de Luta contra a Aids.",
    "tags": [
      "HIV/Aids",
      "campanhas de saúde",
      "prevenção"
    ]
  },
  {
    "id": "famema2026-67",
    "topography": "2.2",
    "topic": "Hipertensão arterial sistêmica",
    "module": "Clínica Médica",
    "text": "Assinale a alternativa correta em relação à hipertensão arterial sistêmica (HAS).",
    "options": [
      "Somente os pacientes com HAS crônica têm crises hipertensivas.",
      "A crise hipertensiva é sempre sintomática e por isso fácil de ser diagnosticada pela Atenção Primária da Saúde (APS) ou serviços de emergência.",
      "A crise hipertensiva está associada a infarto do miocárdio, acidente vascular encefálico isquêmico ou hemorrágico e síndromes aórticas.",
      "Apenas medições repetidas da pressão arterial podem descartar a hipertensão do avental branco."
    ],
    "correctAnswer": 2,
    "explanation": "A emergência hipertensiva (crise com lesão aguda de órgão-alvo) está associada a infarto agudo do miocárdio, AVC isquêmico ou hemorrágico, síndromes aórticas agudas (dissecção), edema agudo de pulmão, encefalopatia hipertensiva e eclâmpsia. Nesses casos a PA deve ser reduzida de forma controlada com medicação EV, com metas que dependem da lesão.",
    "commentary": "Só hipertensos crônicos têm crise (A): a crise pode ocorrer sem diagnóstico prévio de HAS (eclâmpsia, glomerulonefrite aguda, uso de cocaína, feocromocitoma).\n\nCrise sempre sintomática (B): elevações graves podem ser assintomáticas (o que hoje se chama hipertensão grave não controlada), e a diferenciação entre urgência e emergência exige avaliação clínica.\n\nSó medidas repetidas descartam avental branco (D): o efeito do avental branco é avaliado por MAPA ou MRPA (medidas fora do consultório), não apenas por medidas repetidas no consultório.",
    "tip": "Emergência hipertensiva = PA muito alta + lesão aguda de órgão-alvo (IAM, AVC, dissecção, EAP, encefalopatia, eclâmpsia). Sem lesão = urgência/HA grave.",
    "reference": "Barroso WKS et al. Diretrizes Brasileiras de Hipertensão Arterial – 2020. Arq Bras Cardiol, 2021. SBC. Posicionamento sobre emergências hipertensivas, 2024.",
    "tags": [
      "crise hipertensiva",
      "emergência hipertensiva",
      "hipertensão arterial"
    ]
  },
  {
    "id": "famema2026-68",
    "topography": "7.2",
    "topic": "Dermatite de contato",
    "module": "Saúde Coletiva",
    "text": "Uma mulher de 26 anos apresenta um quadro pruriginoso, com ardência e vermelhidão nas pálpebras. Ela não faz uso de cosméticos na face, mas costuma sempre usar esmalte nas unhas. Não apresenta qualquer outra queixa de saúde. O médico desconfia que se trata de uma dermatite de contato por possível hábito de levar as mãos aos olhos.\n\nEm relação ao caso, assinale a alternativa correta.",
    "options": [
      "Trata-se de um diagnóstico compatível que deve ser notificado no Sistema de Informação de Agravos de Notificação (SINAN), imediatamente.",
      "O esmalte habitualmente não causa dermatite por contato, sendo esse um diagnóstico pouco provável, não devendo haver qualquer tipo de notificação.",
      "Qualquer dermatite é de notificação compulsória no SINAN e assim, mesmo sem a certeza diagnóstica, ela deve ser feita.",
      "Trata-se de um diagnóstico compatível e, no caso, não é de notificação compulsória no SINAN, pois somente as dermatites ocupacionais o são."
    ],
    "correctAnswer": 3,
    "explanation": "Dermatite pruriginosa e eritematosa nas pálpebras em mulher que usa esmalte e leva as mãos aos olhos: dermatite de contato alérgica ao esmalte (resina tosilamida-formaldeído), causa clássica de eczema palpebral. As pálpebras são finas e sensíveis, e reagem mais que os dedos.\n\nNo SINAN, as dermatoses ocupacionais são de notificação compulsória (vigilância sentinela da saúde do trabalhador); dermatite de contato sem relação com o trabalho não é notificada.",
    "commentary": "Notificar imediatamente (A): não é doença de notificação compulsória fora do contexto ocupacional, e mesmo as dermatoses ocupacionais não são de notificação imediata.\n\nEsmalte não causa dermatite (B): o esmalte é uma das causas mais típicas de dermatite de contato nas pálpebras.\n\nQualquer dermatite é notificável (C): apenas as dermatoses relacionadas ao trabalho estão na lista.",
    "tip": "Eczema de pálpebras: pense em esmalte (contato pelas mãos). Notificação no SINAN só se for dermatose ocupacional.",
    "reference": "Ministério da Saúde. Dermatoses ocupacionais – Saúde do Trabalhador (Protocolos de complexidade diferenciada), 2006. Portaria de Consolidação nº 5/2017 – vigilância sentinela.",
    "tags": [
      "dermatite de contato",
      "esmalte",
      "notificação compulsória"
    ]
  },
  {
    "id": "famema2026-69",
    "topography": "14",
    "topic": "Intoxicações",
    "module": "Saúde Coletiva",
    "text": "A intoxicação por metanol pela ingestão de bebidas adulteradas causou grande alarde na população brasileira, em especial a do estado de São Paulo. Paralelamente à investigação da fonte dessa contaminação, houve uma grande campanha de esclarecimentos à população pelo Ministério da Saúde e pela imprensa.\n\nAssinale a alternativa correta sobre esse tema.",
    "options": [
      "O uso de etanol injetável como antídoto contra a intoxicação por metanol foi autorizado pela Anvisa, como parte dos procedimentos de enfrentamento ao surto de intoxicações pelo consumo de bebidas adulteradas.",
      "Um procedimento de emergência adotado foi a suspensão de comercialização de cachaça, uísque, vodca, vinho e cerveja.",
      "O diagnóstico de intoxicação por metanol é simples, pois os sintomas são exuberantes: tontura, vômitos, dor abdominal e fraqueza.",
      "O metanol está presente apenas nas bebidas alcoólicas adulteradas, e a intoxicação em quem o ingere ocorre devido à sua transformação em substâncias tóxicas como o formaldeído e propanol."
    ],
    "correctAnswer": 0,
    "explanation": "Durante o surto de intoxicações por metanol em bebidas adulteradas (São Paulo, 2025), a Anvisa autorizou em caráter excepcional a importação e o uso de etanol farmacêutico injetável como antídoto, além do fomepizol. O etanol compete com o metanol pela enzima álcool desidrogenase e impede a formação dos metabólitos tóxicos. O tratamento inclui ainda bicarbonato para a acidose, ácido fólico e hemodiálise nos casos graves.",
    "commentary": "Suspensão da venda de todas as bebidas (B): as medidas foram de fiscalização, interdição de estabelecimentos e lotes suspeitos e orientação à população, não suspensão geral do comércio de bebidas.\n\nDiagnóstico simples por sintomas exuberantes (C): os sintomas iniciais são inespecíficos e parecidos com embriaguez; a intoxicação se revela após 12–24 horas com acidose metabólica grave com ânion gap elevado e alteração visual (visão turva, cegueira).\n\nMetanol só em bebidas adulteradas, convertido em formaldeído e propanol (D): o metanol existe em produtos industriais (combustível, solventes); é metabolizado em formaldeído e ácido fórmico, que causa a acidose e a lesão do nervo óptico.",
    "tip": "Metanol → formaldeído → ácido fórmico: acidose com ânion gap alto + alteração visual. Antídoto: fomepizol ou etanol; hemodiálise se grave.",
    "reference": "Ministério da Saúde. Nota técnica sobre intoxicação por metanol após consumo de bebidas alcoólicas adulteradas, 2025. Anvisa. Autorização excepcional de etanol injetável como antídoto, 2025.",
    "tags": [
      "intoxicação por metanol",
      "antídoto",
      "vigilância sanitária"
    ]
  },
  {
    "id": "famema2026-70",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Lídia é usuária de uma UBS, tem 65 anos de idade, e faz acompanhamento de diabetes mellitus. Apresenta um abscesso na axila há 3 dias. Jonas, de 38 anos de idade, tem um lipoma na região do dorso e não tem outros problemas de saúde. Leo, de 28 anos de idade, está com cerúmen. Todos apresentam bom estado geral.\n\nAssinale a alternativa correta.",
    "options": [
      "A drenagem do abscesso, a exerese do lipoma e a retirada do cerúmen podem ser realizadas na UBS, pois se tratam de procedimentos previstos para a Atenção Primária de Saúde.",
      "Embora todos os procedimentos possam ser feitos na UBS, Lídia deve ser encaminhada para um serviço especializado, pois é diabética e idosa.",
      "A exerese de um lipoma, como no caso de Jonas, exige recursos inexistentes em uma UBS e deve ser feita sempre em serviço especializado.",
      "A exerese do lipoma e a lavagem auricular para retirada do cerúmen devem ser feitas em serviços especializados."
    ],
    "correctAnswer": 0,
    "explanation": "A atenção primária deve ser resolutiva, e a Carteira de Serviços da Atenção Primária (CaSAPS) inclui pequenos procedimentos: drenagem de abscesso, exérese de lipomas e cistos pequenos, retirada de cerume, sutura, cantoplastia, entre outros. Todos os três casos (Lídia em bom estado geral com abscesso, Jonas com lipoma e Leo com cerume) podem ser resolvidos na UBS.",
    "commentary": "Encaminhar Lídia por ser diabética e idosa (B): com bom estado geral, o abscesso pode ser drenado na UBS; diabetes e idade pedem atenção ao controle glicêmico e seguimento, não encaminhamento obrigatório.\n\nExérese de lipoma só no especialista (C): lipomas pequenos e superficiais podem ser retirados na UBS com anestesia local.\n\nLipoma e cerume no especialista (D): a lavagem otológica é procedimento básico da atenção primária.",
    "tip": "Pequenos procedimentos (abscesso, lipoma pequeno, cerume, sutura, unha encravada) fazem parte da atenção primária.",
    "reference": "Ministério da Saúde. Carteira de Serviços da Atenção Primária à Saúde (CaSAPS), 2020. Política Nacional de Atenção Básica, 2017.",
    "tags": [
      "atenção primária",
      "pequenos procedimentos",
      "resolutividade"
    ]
  },
  {
    "id": "famema2026-71",
    "topography": "15",
    "topic": "Saúde do trabalhador",
    "module": "Saúde Coletiva",
    "text": "Uma explosão em um restaurante matou duas pessoas que trabalhavam na cozinha, feriu uma pessoa, que fazia uma entrega de alimento, e uma criança de 5 anos que passava na rua com sua mãe. Quais desses casos devem ser notificados no SINAN como acidentes de trabalho?",
    "options": [
      "Todos os casos devem ser notificados como acidentes de trabalho no SINAN.",
      "Os casos devem ser notificados como acidentes de trabalho se a explosão for decorrente de negligência dos proprietários.",
      "Todos, com exceção da criança, devem ser notificados como acidentes de trabalho no SINAN.",
      "Com exceção da criança, devem ser notificados os casos em que houver vínculo empregatício formal."
    ],
    "correctAnswer": 2,
    "explanation": "Os dois trabalhadores da cozinha (mortos) e o entregador (ferido durante uma entrega) sofreram acidentes no exercício do trabalho, e acidentes de trabalho graves ou fatais são de notificação compulsória no SINAN para qualquer trabalhador, com vínculo formal ou não (o entregador pode ser autônomo ou de aplicativo). A criança, que passava na rua com a mãe, não estava trabalhando: é vítima de acidente, mas não de acidente de trabalho.",
    "commentary": "Todos, inclusive a criança (A): a criança não estava em atividade de trabalho.\n\nSó se houver negligência (B): a notificação independe de culpa; basta a relação com o trabalho.\n\nSó com vínculo formal (D): o SINAN notifica acidentes de trabalho de todos os trabalhadores, formais e informais.",
    "tip": "Acidente de trabalho grave/fatal: notificação no SINAN para todo trabalhador, formal ou informal, independente de culpa.",
    "reference": "Ministério da Saúde. Portaria de Consolidação nº 4/2017 – Lista Nacional de Notificação Compulsória. Ficha de notificação de acidente de trabalho – SINAN.",
    "tags": [
      "acidente de trabalho",
      "SINAN",
      "saúde do trabalhador"
    ]
  },
  {
    "id": "famema2026-72",
    "topography": "15",
    "topic": "Epidemiologia",
    "module": "Saúde Coletiva",
    "text": "Assinale a alternativa correta sobre a esperança de vida ao nascer.",
    "options": [
      "Trata-se de um indicador que não depende da qualidade de informações sobre mortalidade.",
      "Trata-se de um indicador que sofre influência da estrutura etária da população.",
      "Expressa o número médio de anos que se esperaria que uma criança de 1 ano vivesse.",
      "O aumento desse indicador sugere melhoria das condições de vida e de saúde da população."
    ],
    "correctAnswer": 3,
    "explanation": "A esperança de vida ao nascer é o número médio de anos que um recém-nascido viveria se fosse submetido, ao longo da vida, às taxas de mortalidade por idade observadas no período. Por ser calculada por tábua de vida, não depende da estrutura etária da população e permite comparações. Seu aumento indica redução da mortalidade e, portanto, melhoria das condições de vida e de saúde.",
    "commentary": "Não depende da qualidade das informações de mortalidade (A): é calculada justamente a partir dos dados de óbitos por idade; sub-registro distorce o indicador.\n\nInfluenciada pela estrutura etária (B): por usar taxas específicas por idade, não sofre influência da composição etária, ao contrário da mortalidade geral.\n\nAnos que uma criança de 1 ano viveria (C): refere-se ao nascimento (idade zero); a partir de 1 ano seria a esperança de vida aos 1 ano.",
    "tip": "Esperança de vida ao nascer: tábua de vida, independe da estrutura etária; reflete as condições de vida e saúde.",
    "reference": "Rede Interagencial de Informações para a Saúde (RIPSA). Indicadores básicos para a saúde no Brasil: conceitos e aplicações, 2ª ed., 2008.",
    "tags": [
      "esperança de vida ao nascer",
      "indicadores de saúde",
      "epidemiologia"
    ]
  },
  {
    "id": "famema2026-73",
    "topography": "15",
    "topic": "Saúde do idoso",
    "module": "Saúde Coletiva",
    "text": "O impacto das mudanças climáticas pode ir muito além dos danos ao meio ambiente. Diversos estudos já apontaram que ondas de calor e de frio mais intensas, maior nível de poluição atmosférica e eventos climáticos extremos apresentam riscos graves para a saúde humana.\n\nAssinale a alternativa correta sobre o tema.",
    "options": [
      "A atenção para doenças respiratórias é importante, em particular, nas populações de crianças e idosos.",
      "As mudanças climáticas terão repercussões graves sobre a saúde, independentemente das classes sociais.",
      "O grupo das doenças hepáticas será o que mais crescerá nos próximos anos.",
      "Os estudos científicos mostram, até o momento, que apenas o grupo dos hipertensos será beneficiado com as mudanças climáticas."
    ],
    "correctAnswer": 0,
    "explanation": "Ondas de calor e de frio, poluição atmosférica e queimadas, mais frequentes com as mudanças climáticas, agravam doenças respiratórias (asma, DPOC, infecções) e cardiovasculares. Crianças e idosos são os grupos mais vulneráveis, pela imaturidade ou declínio da função pulmonar e da termorregulação, e merecem atenção especial dos serviços de saúde.",
    "commentary": "Repercussões independentemente da classe social (B): os efeitos são desiguais; populações pobres, em moradias precárias e áreas de risco sofrem mais.\n\nDoenças hepáticas crescerão mais (C): não há evidência disso; os maiores impactos previstos são respiratórios, cardiovasculares, infecciosos (arboviroses, diarreias) e de saúde mental.\n\nHipertensos beneficiados (D): não há benefício; o calor aumenta eventos cardiovasculares e o risco de desidratação e hipotensão.",
    "tip": "Mudanças climáticas: mais doenças respiratórias, cardiovasculares e infecciosas; crianças, idosos e pobres são os mais afetados.",
    "reference": "World Health Organization. Climate change and health – fact sheet, 2023. Ministério da Saúde. Plano Setorial de Adaptação à Mudança do Clima – Saúde, 2024.",
    "tags": [
      "mudanças climáticas",
      "doenças respiratórias",
      "populações vulneráveis"
    ]
  },
  {
    "id": "famema2026-74",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Assinale a alternativa correta sobre a Atenção Primária da Saúde (APS).",
    "options": [
      "As equipes das UBS devem ser multidisciplinares e residirem no território de atuação.",
      "Possibilita o acesso universal e contínuo a serviços de saúde de qualidade e resolutivos, caracterizados como a porta de entrada única do sistema de saúde.",
      "Caracteriza-se por um conjunto de ações de saúde, no âmbito individual e coletivo, que abrangem a promoção e a proteção da saúde, a prevenção de agravos, o diagnóstico, o tratamento, a reabilitação e a manutenção da saúde.",
      "Deve valorizar os diversos saberes e as diversas práticas na perspectiva de uma abordagem integral, desde que estejam validados em estudos e devidamente publicados em literatura científica."
    ],
    "correctAnswer": 2,
    "explanation": "A Política Nacional de Atenção Básica (2017) define a atenção básica como o conjunto de ações de saúde individuais, familiares e coletivas que envolvem promoção, prevenção, proteção, diagnóstico, tratamento, reabilitação, redução de danos, cuidados paliativos e vigilância em saúde, desenvolvidas por equipe multiprofissional para a população de um território definido.",
    "commentary": "Equipes devem residir no território (A): só os agentes comunitários de saúde precisam morar na área de atuação; os demais profissionais, não.\n\nPorta de entrada única (B): a atenção primária é a porta de entrada preferencial, não única (urgências, por exemplo, também são portas de entrada).\n\nSó saberes validados em literatura (D): a PNAB valoriza saberes e práticas diversos, incluindo as práticas integrativas e o saber popular, na perspectiva do cuidado integral.",
    "tip": "APS (PNAB 2017): porta de entrada preferencial, ações de promoção a cuidados paliativos. Só o ACS precisa residir no território.",
    "reference": "Ministério da Saúde. Política Nacional de Atenção Básica (Portaria nº 2.436/2017).",
    "tags": [
      "atenção primária",
      "PNAB",
      "SUS"
    ]
  },
  {
    "id": "famema2026-75",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "Fundamentado na Política Nacional de Humanização (PNH), o trabalho transdisciplinar, que envolve um conhecimento orientado por um sentido comum e que atravessa as várias práticas profissionais, é um potente meio de modificação dessas práticas centradas nas doenças e em procedimentos e tarefas que não abordam o ser humano de modo integral, no sentido de vê-lo como um todo e não somente dividido em partes. O Prontuário Transdisciplinar na saúde estimula e fortalece o trabalho em equipe.\n\nAssinale a alternativa que apresenta corretamente um objetivo do Prontuário referido.",
    "options": [
      "Estimular a transdisciplinaridade para seguir as diretrizes da PNH, em detrimento da qualidade da assistência.",
      "Melhorar a comunicação e a integração entre os vários profissionais que assistem os usuários, estimulando a transdisciplinaridade.",
      "Facilitar o acesso a informações aos membros da equipe sobre os usuários que, individualmente, devem permitir que seus dados sejam incluídos no protocolo referido.",
      "Otimizar etapas do processo de cuidado proporcionando possibilidade de aumentar o número de usuários assistidos."
    ],
    "correctAnswer": 1,
    "explanation": "O prontuário transdisciplinar, proposto na Política Nacional de Humanização, reúne em um único registro as informações e os planos de cuidado de todos os profissionais que assistem o usuário. Seu objetivo é melhorar a comunicação e a integração da equipe, favorecer a construção do projeto terapêutico singular e o cuidado integral, superando registros fragmentados por categoria profissional.",
    "commentary": "Transdisciplinaridade em detrimento da qualidade (A): o objetivo é justamente melhorar a qualidade da assistência.\n\nUsuários devem autorizar individualmente a inclusão no protocolo (C): o prontuário é registro obrigatório do atendimento; o acesso por toda a equipe que cuida do usuário faz parte do cuidado, respeitado o sigilo.\n\nAumentar o número de usuários atendidos (D): o objetivo não é produtividade, mas integração e qualidade do cuidado.",
    "tip": "PNH: clínica ampliada, projeto terapêutico singular, prontuário transdisciplinar, acolhimento, cogestão.",
    "reference": "Ministério da Saúde. Política Nacional de Humanização – HumanizaSUS: Clínica ampliada e compartilhada, 2009.",
    "tags": [
      "política Nacional de Humanização",
      "prontuário",
      "trabalho em equipe"
    ]
  },
  {
    "id": "famema2026-76",
    "topography": "15",
    "topic": "Saúde do trabalhador",
    "module": "Saúde Coletiva",
    "text": "Periodicamente, há grandes eventos que fazem parte do calendário de algumas cidades, sejam referentes a negócios de determinados ramos econômicos ou a megaespetáculos, cuja organização exige variadas operações para a recepção de públicos numerosos, com o máximo de segurança possível. Porém, nesse processo de trabalho que envolve trabalho em altura, carregamento de material, movimentação de cargas e grandes estruturas, em contextos de premência de prazos exíguos com equipes temporárias e reduzidas, a segurança dos trabalhadores, frequentemente, é negligenciada e não é rara a ocorrência de acidentes de diferentes níveis de gravidade.\n\nAssinale a alternativa correta sobre essas questões levantadas.",
    "options": [
      "As ações de vigilância e fiscalização das condições de trabalho descritas no enunciado devem focar nas atividades que exigem força física, deixando em segundo plano as questões de organização do trabalho.",
      "O serviço de atendimento deve realizar a notificação no SINAN se o acidente de trabalho envolver trabalhador formal, se for grave e demandar afastamento superior a 15 dias.",
      "A participação da Saúde nas ações intersetoriais visando à segurança dos trabalhadores faz parte da identificação das atividades produtivas da população trabalhadora e das situações de risco à saúde dos trabalhadores no território.",
      "O papel mais importante da Saúde nesse processo descrito é o da atenção aos acidentados, que devem ser assistidos pelo SUS, segundo suas necessidades clínicas, e prestação de informações sobre direitos previdenciários."
    ],
    "correctAnswer": 2,
    "explanation": "A Política Nacional de Saúde do Trabalhador e da Trabalhadora prevê que o setor saúde participe de ações intersetoriais de vigilância dos ambientes e processos de trabalho, a partir da identificação das atividades produtivas e das situações de risco no território. Em grandes eventos, com trabalho em altura, cargas pesadas, prazos curtos e equipes temporárias, a saúde contribui com a vigilância e a articulação com outros setores (Ministério do Trabalho, Defesa Civil, organizadores) para prevenir acidentes.",
    "commentary": "Focar na força física, deixando a organização do trabalho de lado (A): a organização do trabalho (prazos, jornadas, equipes reduzidas) é determinante central dos acidentes e deve ser priorizada.\n\nNotificar só trabalhador formal com afastamento > 15 dias (B): o acidente de trabalho grave é notificado no SINAN para qualquer trabalhador, independentemente do vínculo e do tempo de afastamento (este é critério previdenciário).\n\nPapel mais importante é a assistência (D): a assistência é necessária, mas a política prioriza a vigilância e a prevenção.",
    "tip": "Saúde do trabalhador no SUS: vigilância dos ambientes e da organização do trabalho, intersetorialidade, notificação de todos os trabalhadores.",
    "reference": "Ministério da Saúde. Política Nacional de Saúde do Trabalhador e da Trabalhadora (Portaria nº 1.823/2012).",
    "tags": [
      "saúde do trabalhador",
      "vigilância em saúde do trabalhador",
      "intersetorialidade"
    ]
  },
  {
    "id": "famema2026-77",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "O SUS traz como um dos seus pontos principais a democratização e a descentralização do poder para os municípios. Para que isso pudesse acontecer, os conselhos tripartites foram implementados – com a participação de trabalhadores da saúde, gestores e usuários das três instâncias de governo (federal, estadual e municipal) – e paritários – com os representantes em pé de igualdade. Foi a partir dessa forma de organização que se tornaram efetivos os Conselhos Nacional, Estaduais, Municipais e as Conferências de Saúde, permitindo, então, que a participação e o controle popular pudessem crescer cada vez mais. A despeito dessa estrutura, favorecendo a participação conjunta na construção do cuidado, há problemas importantes a serem vencidos para que se torne realidade.\n\nAssinale a alternativa que apresenta um desses problemas a ser vencido.",
    "options": [
      "A disputa entre trabalhadores da saúde e usuários no envolvimento da gestão participativa.",
      "O modo de organização do processo de trabalho a partir do saber das profissões e das categorias e não pelos objetivos comuns.",
      "A inclusão de representantes do poder legislativo como membros dos conselhos de saúde.",
      "A alta escolaridade de alguns representantes de segmentos sociais."
    ],
    "correctAnswer": 1,
    "explanation": "Um dos obstáculos à gestão participativa no SUS é a organização do trabalho centrada nos saberes e interesses de cada profissão e categoria (corporativismo), e não em objetivos comuns voltados às necessidades dos usuários. Essa fragmentação dificulta a cogestão, o trabalho em equipe e a construção coletiva do cuidado, que são propostas da Política Nacional de Humanização.",
    "commentary": "Disputa entre trabalhadores e usuários (A): a proposta é de construção conjunta; a participação de ambos não é o problema a ser vencido.\n\nInclusão de representantes do Legislativo nos conselhos (C): os conselhos são compostos por usuários (50%), trabalhadores (25%) e gestores/prestadores (25%); o Legislativo não é membro e isso não é apontado como problema.\n\nAlta escolaridade de representantes (D): não é obstáculo reconhecido; o desafio costuma ser a desigualdade de acesso à informação.",
    "tip": "Conselhos de saúde: 50% usuários, 25% trabalhadores, 25% gestores e prestadores. Obstáculo à cogestão: trabalho fragmentado por categorias.",
    "reference": "Brasil. Lei 8.142/1990. Ministério da Saúde. Política Nacional de Humanização – Gestão participativa e cogestão, 2009.",
    "tags": [
      "participação social",
      "gestão participativa",
      "conselhos de saúde"
    ]
  },
  {
    "id": "famema2026-78",
    "topography": "13",
    "topic": "TEPT",
    "module": "Saúde Coletiva",
    "text": "Uma garota de 16 anos de idade sai da escola por volta das 22 horas e toma o caminho de sua casa. Volta a pé. Repentinamente, se vê defronte de um homem que a coloca sob a mira de um revólver, obrigando-a a entregar-lhe o celular. Depois desse episódio, com muito medo, ela corre para casa e demora para dormir, ainda sob o efeito do que havia passado. No dia seguinte, segue sua rotina de trabalho durante o dia e de escola à noite. Após 12 dias, acorda no meio da noite, assustada com a sensação de que estava passando novamente pela mesma situação do assalto. Passa a sonhar repetidamente, acordando assustada com a mesma sensação que tivera durante o assalto. Como dorme mal, durante o dia, sente sono e cansaço. Procura a UBS perto de sua casa, cuja equipe faz uma hipótese diagnóstica e a encaminha a uma psicóloga para avaliação.\n\nAssinale a alternativa correta.",
    "options": [
      "Trata-se de transtorno de estresse pós-traumático, e a paciente deveria ter sido orientada a esperar uma semana, pois se trata de um agravo transitório.",
      "O quadro é sugestivo de transtorno do pânico, e ela deve iniciar imediatamente um tratamento psicoterápico.",
      "O quadro é sugestivo de reagudização de ansiedade, e a paciente deve iniciar tratamento medicamentoso imediatamente.",
      "O quadro é sugestivo de transtorno de estresse pós-traumático, e a equipe fez o encaminhamento correto."
    ],
    "correctAnswer": 3,
    "explanation": "Após um assalto à mão armada (evento traumático com ameaça à vida), a adolescente passa a ter revivescências noturnas e pesadelos repetidos, com despertares assustados, sono ruim e cansaço diurno. Os sintomas começaram 12 dias depois: o quadro sugere transtorno de estresse pós-traumático (pelo DSM-5-TR, o diagnóstico exige duração acima de 1 mês; entre 3 dias e 1 mês fala-se em transtorno de estresse agudo).\n\nO tratamento de primeira linha é a psicoterapia focada no trauma (terapia cognitivo-comportamental, EMDR), e o encaminhamento para avaliação psicológica foi adequado.",
    "commentary": "TEPT, mas esperar uma semana por ser transitório (A): os sintomas persistem e prejudicam a vida; a intervenção precoce reduz a cronificação.\n\nTranstorno de pânico (B): caracteriza-se por ataques inesperados recorrentes, não por revivescências de um trauma específico.\n\nReagudização de ansiedade com medicação imediata (C): não há história de ansiedade prévia; e a psicoterapia focada no trauma é a primeira linha.",
    "tip": "TEPT: trauma + revivescências, evitação, alterações negativas de humor e hiperexcitação por > 1 mês. 1ª linha: psicoterapia focada no trauma.",
    "reference": "American Psychiatric Association. DSM-5-TR, 2022. National Institute for Health and Care Excellence (NICE). Post-traumatic stress disorder – NG116, 2018.",
    "tags": [
      "transtorno de estresse pós-traumático",
      "violência",
      "saúde mental"
    ]
  },
  {
    "id": "famema2026-79",
    "topography": "15",
    "topic": "Estudos epidemiológicos",
    "module": "Saúde Coletiva",
    "text": "Em uma cidade, no passado, havia uma empresa química na qual muitas pessoas trabalhara. Um grupo de pesquisadores de um hospital de referência para casos oncológicos resolve estudar a associação entre câncer de fígado e a exposição a uma substância Y, que fazia parte do processo produtivo dessa empresa. A equipe tem verba bastante restrita.\n\nCom base nessas informações, assinale a alternativa correta.",
    "options": [
      "Um estudo caso-controle permitiria atingir o objetivo dos pesquisadores.",
      "O único estudo possível é o de coorte nesse caso.",
      "O ideal seria a realização de um estudo ecológico.",
      "O cálculo de coeficiente de mortalidade pelo câncer de fígado na população seria uma opção para atingir o objetivo dos pesquisadores."
    ],
    "correctAnswer": 0,
    "explanation": "Para estudar a associação entre uma exposição passada (substância Y) e uma doença rara (câncer de fígado), com pouca verba, o desenho mais adequado é o caso-controle: parte-se de pessoas com a doença (casos, que podem ser recrutados no próprio hospital oncológico) e sem a doença (controles) e compara-se a frequência de exposição prévia entre os grupos, estimando a razão de chances (odds ratio). É rápido, barato e eficiente para doenças raras e de longa latência.",
    "commentary": "Só coorte é possível (B): uma coorte, sobretudo prospectiva, seria cara e demorada para uma doença rara; e o caso-controle atende ao objetivo.\n\nEstudo ecológico (C): analisa dados agregados de populações e não permite associar exposição e doença no indivíduo (falácia ecológica).\n\nCoeficiente de mortalidade (D): descreve a frequência de óbitos, mas não testa associação com a exposição.",
    "tip": "Doença rara, exposição passada, pouco recurso → caso-controle (odds ratio). Exposição rara → coorte.",
    "reference": "Medronho RA. Epidemiologia, 2ª ed. Rouquayrol MZ, Silva MGC. Epidemiologia & Saúde, 8ª ed.",
    "tags": [
      "estudo caso-controle",
      "epidemiologia",
      "desenho de estudo"
    ]
  },
  {
    "id": "famema2026-80",
    "topography": "10",
    "topic": "Febre amarela",
    "module": "Saúde Coletiva",
    "text": "Assinale a alternativa que apresenta a conduta correta de uma pessoa que encontra um macaco morto.",
    "options": [
      "É importante que a pessoa tente verificar se o macaco teve morte em decorrência de um evento traumático, como, por exemplo, um atropelamento.",
      "Uma conduta correta é informar imediatamente às autoridades de saúde do município, pois se trata de uma epizootia.",
      "A conduta correta é levar o macaco até a UBS mais próxima.",
      "Se for uma região onde há febre amarela, deve-se enterrar imediatamente o animal antes que seu corpo se deteriore."
    ],
    "correctAnswer": 1,
    "explanation": "Encontrar um macaco morto pode indicar circulação do vírus da febre amarela (epizootia em primata não humano). A pessoa deve comunicar imediatamente a secretaria de saúde ou a vigilância do município, sem tocar no animal, para que a equipe técnica faça a coleta de amostras e a investigação. A epizootia é de notificação imediata e desencadeia ações como intensificação da vacinação.",
    "commentary": "Verificar se houve trauma (A): o leigo não deve manipular o animal; a avaliação cabe à vigilância.\n\nLevar o macaco à UBS (C): não se deve tocar nem transportar o animal; a vigilância faz a coleta com biossegurança.\n\nEnterrar o animal (D): impede o diagnóstico e a investigação.",
    "tip": "Macaco morto: não tocar, avisar a vigilância do município na hora. Macacos são sentinelas da febre amarela, não transmissores.",
    "reference": "Ministério da Saúde. Guia de Vigilância de Epizootias em Primatas Não Humanos e Entomologia Aplicada à Vigilância da Febre Amarela, 2ª ed., 2017.",
    "tags": [
      "febre amarela",
      "epizootia",
      "vigilância epidemiológica"
    ]
  },
  {
    "id": "famema2026-81",
    "topography": "1.1",
    "topic": "Demências",
    "module": "Clínica Médica",
    "text": "Em um adulto com alterações cognitivas, como desorientação, déficit de atenção e comprometimento da memória, o diagnóstico diferencial entre demência e deficiência intelectual deve ser estabelecido.\n\nConsiderando esse contexto, assinale a alternativa que apresenta a principal diferença entre esses dois quadros.",
    "options": [
      "Ambas as condições são transtornos do neurodesenvolvimento que afetam pessoas idosas acima de 55 anos.",
      "A deficiência intelectual é progressiva, enquanto a demência apresenta curso estável.",
      "A demência é uma condição presente desde o nascimento, enquanto a deficiência intelectual surge após a idade adulta.",
      "A demência envolve a perda de habilidades previamente adquiridas, enquanto a deficiência intelectual caracteriza-se por limitações no desenvolvimento desde a infância."
    ],
    "correctAnswer": 3,
    "explanation": "A demência é um transtorno neurocognitivo adquirido: há declínio em relação a um nível anterior de funcionamento, com perda de habilidades já adquiridas (memória, linguagem, funções executivas) que compromete a independência. A deficiência intelectual é um transtorno do neurodesenvolvimento, com limitações intelectuais e adaptativas presentes desde a infância, sem perda de capacidades previamente conquistadas.",
    "commentary": "Ambos do neurodesenvolvimento em idosos (A): só a deficiência intelectual é do neurodesenvolvimento; a demência é adquirida.\n\nDeficiência intelectual progressiva e demência estável (B): é o inverso; a demência costuma ser progressiva e a deficiência intelectual, estável.\n\nDemência desde o nascimento (C): também invertido; a deficiência intelectual começa na infância e a demência surge na vida adulta.",
    "tip": "Demência = perda do que já se teve (declínio). Deficiência intelectual = limitação desde a infância (neurodesenvolvimento).",
    "reference": "American Psychiatric Association. DSM-5-TR, 2022.",
    "tags": [
      "demência",
      "deficiência intelectual",
      "transtorno neurocognitivo"
    ]
  },
  {
    "id": "famema2026-82",
    "topography": "13",
    "topic": "Dependência química",
    "module": "Clínica Médica",
    "text": "Assinale a alternativa que indica corretamente os sinais e sintomas clínicos que podem ser observados para respaldar, durante a avaliação emergencial de um caso, a hipótese de suspeita de intoxicação ou overdose por cocaína.",
    "options": [
      "Bradicardia e hipotensão arterial.",
      "Midríase ou irritabilidade.",
      "Mutismo e estereotipias dos membros superiores.",
      "Tremores grosseiros com roda denteada e alucinações visuais com pequenos animais."
    ],
    "correctAnswer": 1,
    "explanation": "A cocaína bloqueia a recaptação de noradrenalina, dopamina e serotonina, causando síndrome simpatomimética: midríase, taquicardia, hipertensão, hipertermia, sudorese, agitação, irritabilidade, ansiedade, paranoia e, nos casos graves, convulsões, arritmias, infarto e AVC. Midríase e irritabilidade são sinais que apoiam a suspeita.\n\nNo tratamento, benzodiazepínicos controlam a agitação e a hiperatividade simpática; betabloqueador isolado deve ser evitado.",
    "commentary": "Bradicardia e hipotensão (A): são sinais de intoxicação por depressores (opioides, sedativos, betabloqueadores), o oposto do quadro simpatomimético.\n\nMutismo e estereotipias (C): sugerem catatonia ou outros transtornos psiquiátricos.\n\nTremores com roda denteada e alucinações com pequenos animais (D): roda denteada sugere parkinsonismo (inclusive por antipsicótico); alucinações com pequenos animais são típicas do delirium tremens.",
    "tip": "Cocaína = simpatomimético: midríase, taquicardia, hipertensão, hipertermia, agitação. Tratar agitação com benzodiazepínico.",
    "reference": "Nelson LS et al. Goldfrank's Toxicologic Emergencies, 11ª ed. Associação Brasileira de Psiquiatria. Diretrizes de abuso e dependência de cocaína, 2012.",
    "tags": [
      "intoxicação por cocaína",
      "síndrome simpatomimética",
      "dependência química"
    ]
  },
  {
    "id": "famema2026-83",
    "topography": "12",
    "topic": "Delirium",
    "module": "Pediatria",
    "text": "Um menino de 4 anos, previamente saudável, apresenta febre alta (39,5 ºC), há 2 dias, acompanhada de tosse e prostração. Foi hospitalizado com diagnóstico de pneumonia bacteriana e iniciou o tratamento com antibiótico intravenoso. No segundo dia de internação, começou a ficar agitado, gritando e falando de forma desconexa, muito assustado, pois “via monstros no quarto” e apresentava dificuldade para manter atenção. Passou bastante inquieto a noite toda, por vezes, chutando a mãe que cuidava dele. Foram descartadas causas neurológicas com tomografia e exames laboratoriais.\n\nEm termos de diagnóstico psiquiátrico, as alterações comportamentais desse quadro clínico podem ser descritas como um caso de",
    "options": [
      "delirium.",
      "psicose infantil.",
      "transtorno do espectro autista.",
      "transtorno opositor desafiador."
    ],
    "correctAnswer": 0,
    "explanation": "Criança com pneumonia que, no 2º dia de internação, desenvolve agitação aguda, fala desconexa, alucinações visuais ('via monstros'), dificuldade de manter a atenção e piora à noite, com causas neurológicas descartadas: delirium, desencadeado pela infecção (e possivelmente febre, hipoxemia ou medicações). O delirium é uma alteração aguda e flutuante da atenção e da consciência, causada por uma condição médica, e também ocorre em crianças.",
    "commentary": "Psicose infantil (B): quadros psicóticos primários são raros aos 4 anos e não têm início agudo com alteração de atenção e flutuação durante uma doença clínica.\n\nTranstorno do espectro autista (C): é do neurodesenvolvimento, com início precoce e persistente, não um quadro agudo em criança previamente saudável.\n\nTranstorno opositor desafiador (D): padrão persistente de irritabilidade e desafio por pelo menos 6 meses, sem alteração de consciência.",
    "tip": "Criança internada com agitação aguda, alucinações e déficit de atenção que flutua = delirium. Procurar e tratar a causa clínica.",
    "reference": "American Psychiatric Association. DSM-5-TR, 2022. Traube C et al. Delirium in critically ill children. Crit Care Med, 2017.",
    "tags": [
      "delirium",
      "pediatria",
      "pneumonia"
    ]
  },
  {
    "id": "famema2026-84",
    "topography": "16",
    "topic": "Pré-operatório",
    "module": "Cirurgia",
    "text": "Durante a avaliação pré-operatória de uma cirurgia para correção do desvio de septo nasal, um paciente de 29 anos, previamente hígido, revelou estar em uso do medicamento naltrexona há seis semanas. Trata-se de um antagonista de receptores de opioide, utilizado no controle de abuso de álcool. Está programada a aplicação de anestesia geral para o procedimento.\n\nNesse contexto, qual a recomendação clínica adequada?",
    "options": [
      "Aumentar a dose de naltrexona para potencializar os efeitos de analgesia durante a cirurgia.",
      "Manter o uso de naltrexona, com recomendação de abstinência total de álcool.",
      "Substituir o naltrexona por um outro antagonista de opioides, como a naloxona.",
      "Suspender o uso de naltrexona, por 3 ou mais dias, antes do procedimento e proibir o consumo de álcool."
    ],
    "correctAnswer": 3,
    "explanation": "A naltrexona é antagonista de receptores opioides de longa duração. Se mantida até a cirurgia, bloqueia o efeito analgésico dos opioides usados no intra e pós-operatório, dificultando muito o controle da dor (e doses altas de opioide para vencer o bloqueio podem causar depressão respiratória quando o efeito da naltrexona passar). A recomendação é suspender a naltrexona oral pelo menos 72 horas antes de cirurgia eletiva (a de depósito, cerca de 30 dias) e manter abstinência de álcool.",
    "commentary": "Aumentar a naltrexona para potencializar a analgesia (A): a naltrexona não é analgésica; aumenta o bloqueio dos opioides.\n\nManter a naltrexona com abstinência (B): o bloqueio opioide comprometeria a analgesia perioperatória.\n\nTrocar por naloxona (C): a naloxona também é antagonista (de ação curta, usada para reverter intoxicação), não tem uso oral para dependência e também bloquearia os opioides.",
    "tip": "Naltrexona oral: suspender ≥ 72 h antes de cirurgia eletiva (depósito: ~30 dias). Buprenorfina: avaliar caso a caso, em geral mantida.",
    "reference": "Harrison TK et al. Perioperative considerations for the patient with opioid use disorder on buprenorphine, methadone, or naltrexone maintenance therapy. Anesthesiol Clin, 2018. Miller's Anesthesia, 9ª ed.",
    "tags": [
      "naltrexona",
      "avaliação pré-operatória",
      "analgesia"
    ]
  },
  {
    "id": "famema2026-85",
    "topography": "13",
    "topic": "Depressão maior",
    "module": "Clínica Médica",
    "text": "Diversas condições médicas tais como cardiopatias, enxaquecas e quadros reumáticos apresentam comorbidade com transtornos depressivos. Assinale a classe de medicamentos indicada como primeira linha no tratamento da depressão maior unipolar.",
    "options": [
      "Antipsicóticos atípicos.",
      "Benzodiazepínicos.",
      "Estabilizadores de humor.",
      "Inibidores seletivos da recaptação de serotonina."
    ],
    "correctAnswer": 3,
    "explanation": "Os inibidores seletivos da recaptação de serotonina (sertralina, fluoxetina, escitalopram, citalopram, paroxetina) são a primeira linha no tratamento farmacológico da depressão maior unipolar: têm eficácia semelhante à das outras classes, melhor tolerabilidade e maior segurança em superdosagem e em pacientes com doenças clínicas (como cardiopatas, nos quais a sertralina é bem estudada).",
    "commentary": "Antipsicóticos atípicos (A): são usados como potencializadores na depressão resistente ou com sintomas psicóticos, não como primeira linha.\n\nBenzodiazepínicos (B): não tratam a depressão; podem aliviar ansiedade e insônia por pouco tempo, com risco de dependência.\n\nEstabilizadores de humor (C): são para o transtorno bipolar (o lítio também potencializa antidepressivos), não primeira linha na depressão unipolar.",
    "tip": "Depressão unipolar: ISRS é primeira linha. Resposta em 4–6 semanas; manter por 6–12 meses após a remissão.",
    "reference": "Associação Brasileira de Psiquiatria. Diretrizes para o tratamento da depressão, 2021. Lam RW et al. CANMAT 2023 Update on Clinical Guidelines for Management of Major Depressive Disorder. Can J Psychiatry, 2024.",
    "tags": [
      "depressão maior",
      "ISRS",
      "antidepressivos"
    ]
  },
  {
    "id": "famema2026-86",
    "topography": "5.2",
    "topic": "Puerpério",
    "module": "Ginecologia e Obstetrícia",
    "text": "Qual característica distingue a depressão puerperal dos quadros depressivos fora do período de pós-parto?",
    "options": [
      "Baixa serotonina sérica em amostra sanguínea da artéria placentária.",
      "Alucinações auditivas envolvendo choro persistente do bebê.",
      "Comprometimento da relação mãe-bebê, com sentimento de incapacidade e medo de prejudicar ou agredir o bebê.",
      "Histórico familiar e pessoal de depressão e tentativa de suicídio."
    ],
    "correctAnswer": 2,
    "explanation": "O que mais distingue a depressão pós-parto é o impacto na relação mãe-bebê: a mãe se sente incapaz de cuidar, culpada por não sentir o que esperava pelo filho, ansiosa com a saúde dele e pode ter pensamentos intrusivos de causar dano ao bebê (geralmente egodistônicos, que ela rejeita e teme). Esse comprometimento do vínculo e do cuidado é o foco de atenção e de tratamento.",
    "commentary": "Serotonina baixa na artéria placentária (A): não há exame laboratorial diagnóstico de depressão pós-parto.\n\nAlucinações auditivas com choro do bebê (B): alucinações indicam psicose puerperal, emergência psiquiátrica, e não caracterizam a depressão pós-parto.\n\nHistória familiar e pessoal de depressão e suicídio (D): são fatores de risco, presentes também em depressão fora do puerpério; não distinguem os quadros.",
    "tip": "Depressão pós-parto: humor deprimido + culpa e incapacidade no cuidado do bebê, medo de machucá-lo. Rastreio: escala de Edimburgo (EPDS).",
    "reference": "American Psychiatric Association. DSM-5-TR, 2022. ACOG Clinical Practice Guideline nº 4 – Screening and Diagnosis of Mental Health Conditions During Pregnancy and Postpartum, 2023.",
    "tags": [
      "depressão pós-parto",
      "vínculo mãe-bebê",
      "puerpério"
    ]
  },
  {
    "id": "famema2026-87",
    "topography": "13",
    "topic": "Transtornos de ansiedade",
    "module": "Saúde Coletiva",
    "text": "Assinale a alternativa que inclui os transtornos psiquiátricos prevalentes nos Centros de Atenção Primária, os chamados “transtornos mentais comuns”.",
    "options": [
      "Ansiedade, depressão e somatização.",
      "Transtorno bipolar e esquizofrenia.",
      "Transtorno de personalidade e transtorno de sintomas neurológicos funcionais.",
      "Transtorno de déficit de atenção e hiperatividade e transtorno obsessivo-compulsivo."
    ],
    "correctAnswer": 0,
    "explanation": "Transtornos mentais comuns são quadros de sofrimento psíquico frequentes na atenção primária, que combinam sintomas depressivos, ansiosos e somáticos (insônia, fadiga, irritabilidade, esquecimento, dificuldade de concentração, queixas físicas sem causa orgânica). Têm prevalência alta (cerca de 30–50% dos atendimentos na APS) e são manejados majoritariamente pela própria atenção primária, com apoio matricial.",
    "commentary": "Transtorno bipolar e esquizofrenia (B): são transtornos mentais graves e persistentes, menos prevalentes e geralmente acompanhados também pelos CAPS.\n\nTranstorno de personalidade e sintomas neurológicos funcionais (C): não são o núcleo dos transtornos mentais comuns.\n\nTDAH e TOC (D): têm prevalência menor e não compõem o conceito.",
    "tip": "Transtornos mentais comuns = ansiedade + depressão + somatização. Muito prevalentes na APS; rastreio com SRQ-20.",
    "reference": "Ministério da Saúde. Caderno de Atenção Básica nº 34 – Saúde Mental, 2013. Goldberg D, Huxley P. Common mental disorders: a bio-social model, 1992.",
    "tags": [
      "transtornos mentais comuns",
      "atenção primária",
      "saúde mental"
    ]
  },
  {
    "id": "famema2026-88",
    "topography": "13",
    "topic": "Transtornos alimentares",
    "module": "Clínica Médica",
    "text": "Uma estudante de Nutrição, de 23 anos, procurou consulta com médico clínico devido a episódios recorrentes de sangramento intestinal baixo. A paciente apresentava peso de 55 kg e altura de 1,60 m (índice de massa corpórea de 21 kg/m²), com hemoglobina de 6,9 g/dL e hematócrito de 20%. O médico prescreveu uma bolsa de concentrado de hemácias de 250 mL, por via intravenosa, para corrigir o grave quadro anêmico. Durante as interações, a paciente relatou que costuma tomar vários laxantes como a simeticona, pelo menos três vezes ao dia, por medo de ganhar peso. De fato, o uso frequente dessa substância provocou alterações significativas no hábito intestinal, com aumento da frequência evacuatória e episódios de sangramento. Ela costuma armazenar várias caixas de simeticona em seu quarto, sentindo vergonha de que os familiares descubram. Em relação aos hábitos alimentares, relata episódios de comer rapidamente grande quantidade de alimento, 2 vezes por semana, alternados com períodos de jejum total, prática de atividade física intensa e uso de laxantes como forma de compensação pelo possível ganho de peso.\n\nCom base no exposto, qual transtorno alimentar melhor descreve esse quadro clínico?",
    "options": [
      "Anorexia nervosa.",
      "Bulimia nervosa.",
      "Transtorno de compulsão alimentar.",
      "Transtorno de evitação/restrição da ingestão de alimentos."
    ],
    "correctAnswer": 1,
    "explanation": "Jovem com IMC normal (21 kg/m²), episódios de compulsão alimentar (comer muito e rápido) duas vezes por semana, seguidos de comportamentos compensatórios (jejum, exercício intenso e laxantes), preocupação com o ganho de peso e comportamento escondido (vergonha): bulimia nervosa. Pelo DSM-5-TR, compulsões e compensações devem ocorrer ao menos uma vez por semana por 3 meses, com autoavaliação muito influenciada pelo peso.\n\nObservação: a simeticona não é laxante (é antiflatulento); o enunciado a trata como tal, mas isso não muda o diagnóstico.",
    "commentary": "Anorexia nervosa (A): exige peso significativamente baixo; a paciente tem IMC 21.\n\nTranstorno de compulsão alimentar (C): há compulsões, mas sem comportamentos compensatórios regulares.\n\nTARE (D): transtorno de evitação/restrição alimentar, sem preocupação com peso ou forma corporal (por medo de engasgar, aversão sensorial ou falta de interesse).",
    "tip": "Compulsão + compensação com peso normal = bulimia. Peso baixo = anorexia. Sem compensação = compulsão alimentar.",
    "reference": "American Psychiatric Association. DSM-5-TR, 2022. Associação Brasileira de Psiquiatria. Diretrizes para o tratamento dos transtornos alimentares.",
    "tags": [
      "bulimia nervosa",
      "transtornos alimentares",
      "laxantes"
    ]
  },
  {
    "id": "famema2026-89",
    "topography": "13",
    "topic": "Risco de suicídio",
    "module": "Clínica Médica",
    "text": "Uma senhora de 79 anos, recentemente viúva e vivendo isolada dos vizinhos e filhos, trouxe o tema da morte durante uma consulta no posto de saúde. Ela diz que não vê mais sentido em continuar viva, nada lhe satisfaz e tem vontade de chorar durante a maior parte do dia. Já está em tratamento para depressão, há 5 meses, mas ainda sem resposta satisfatória. Ela também relata que não consegue tirar da cabeça a ideia de tomar veneno ou se enforcar em casa, acreditando que isso seria um alívio para seu sofrimento.\n\nConsiderando a organização dos serviços na comunidade, qual seria a conduta apropriada para esse caso?",
    "options": [
      "Encaminhar para uma internação hospitalar imediatamente.",
      "Dispensar a paciente e enviar um agente comunitário para acompanhar as suas atividades no dia a dia.",
      "Pedir para a paciente continuar o tratamento com o seu médico especialista em data oportuna de retorno.",
      "Transferir a paciente para um serviço de emergência psiquiátrica para avaliação de uma possível internação."
    ],
    "correctAnswer": 3,
    "explanation": "Idosa recém-viúva, isolada, com depressão sem resposta ao tratamento após 5 meses, desesperança, choro e ideação suicida persistente com planos de método definidos (veneno ou enforcamento em casa): risco alto de suicídio. Idade avançada, viuvez, isolamento social e depressão grave são fatores de risco importantes.\n\nA conduta é não deixar a paciente sozinha e encaminhá-la a um serviço de emergência psiquiátrica (ou pronto-socorro de referência), para avaliação de internação e intensificação do tratamento, acionando a família e retirando meios letais do domicílio.",
    "commentary": "Internação imediata direta (A): a internação deve ser decidida após avaliação psiquiátrica de emergência; a UBS não interna diretamente.\n\nDispensar e enviar o ACS (B): deixar sem proteção uma paciente com ideação estruturada e plano é inaceitável.\n\nContinuar com o especialista na data de retorno (C): o risco é agudo; não pode esperar a próxima consulta.",
    "tip": "Ideação suicida com plano e método: risco alto → não deixar só, emergência psiquiátrica, envolver família, retirar meios letais.",
    "reference": "Associação Brasileira de Psiquiatria. Suicídio: informando para prevenir, 2014. Ministério da Saúde. Prevenção do suicídio: manual dirigido a profissionais das equipes de saúde mental, 2006.",
    "tags": [
      "risco de suicídio",
      "depressão no idoso",
      "emergência psiquiátrica"
    ]
  },
  {
    "id": "famema2026-90",
    "topography": "13",
    "topic": "Risco de suicídio",
    "module": "Saúde Coletiva",
    "text": "Qual das seguintes estratégias comunitárias mostra eficácia na prevenção primária do suicídio?",
    "options": [
      "Aumento da fiscalização policial em áreas públicas e proibição da venda de bebidas alcoólicas na comunidade.",
      "Controle de posse de armas de fogo e venda de psicotrópicos e venenos organofosforados.",
      "Distribuição gratuita de medicamentos antidepressivos na comunidade.",
      "Isolamento das pessoas com história de tentativa de suicídio para a segurança da comunidade."
    ],
    "correctAnswer": 1,
    "explanation": "Entre as estratégias populacionais com melhor evidência na prevenção do suicídio está a restrição de acesso a meios letais: controle de armas de fogo, de agrotóxicos altamente tóxicos (como organofosforados e paraquat) e de medicamentos potencialmente letais (embalagens menores, venda controlada). Como muitas tentativas são impulsivas, dificultar o acesso ao método reduz as mortes. Outras medidas eficazes são a abordagem responsável pela mídia e a capacitação de profissionais.",
    "commentary": "Fiscalização policial e proibição do álcool na comunidade (A): o consumo de álcool é fator de risco, mas policiamento e proibição local não são estratégias reconhecidas de prevenção do suicídio.\n\nDistribuição de antidepressivos (C): antidepressivo é tratamento individual após diagnóstico, não estratégia comunitária de prevenção primária.\n\nIsolar quem tentou suicídio (D): o isolamento aumenta o risco; a pessoa precisa de acolhimento, vínculo e seguimento.",
    "tip": "Prevenção do suicídio com melhor evidência: restringir meios letais (armas, pesticidas, medicamentos) + mídia responsável + seguimento após tentativa.",
    "reference": "World Health Organization. LIVE LIFE: an implementation guide for suicide prevention in countries, 2021. Zalsman G et al. Suicide prevention strategies revisited. Lancet Psychiatry, 2016.",
    "tags": [
      "prevenção do suicídio",
      "meios letais",
      "saúde mental"
    ]
  },
  {
    "id": "famema2026-91",
    "topography": "14",
    "module": "Clínica Médica",
    "text": "Considerando-se sedação e analgesia de procedimentos não eletivos, assinale a alternativa correta.",
    "options": [
      "Midazolam tem efeito cardiodepressor importante.",
      "Tempo de início de ação do etomidato é, em geral, de 2 a 5 minutos.",
      "Tempo de ação médio da cetamina é de 30 a 60 minutos.",
      "A ocorrência de quadro de hipotensão arterial é frequente quando do uso de fentanil."
    ],
    "correctAnswer": 1,
    "explanation": "Pela banca, a alternativa correta é a que diz que o etomidato começa a agir em 2 a 5 minutos. O etomidato é um hipnótico de escolha na sequência rápida de intubação por sua estabilidade hemodinâmica, mas seu início de ação real é muito rápido, de 30 a 60 segundos (um ciclo braço-cérebro), com duração de 3 a 10 minutos.\n\nAs outras alternativas estão claramente erradas, mas a B também tem um erro de tempo, o que torna a questão passível de anulação.",
    "commentary": "Midazolam cardiodepressor importante (A): em doses habituais tem efeito cardiovascular pequeno (leve queda da resistência vascular), podendo causar hipotensão em hipovolêmicos.\n\nCetamina com ação de 30 a 60 minutos (C): o efeito dissociativo após dose EV dura 10 a 15 minutos (redistribuição).\n\nHipotensão frequente com fentanil (D): o fentanil não libera histamina e é hemodinamicamente estável; hipotensão aparece em hipovolêmicos ou com doses altas.",
    "alert": "Gabarito discutível: o etomidato começa a agir em 30 a 60 segundos, não em 2 a 5 minutos. As outras alternativas também estão erradas; a questão seria passível de anulação.",
    "tip": "Início de ação na sequência rápida: etomidato e propofol 30–60 s; cetamina 30–60 s (EV); midazolam 2–5 min; rocurônio 45–60 s.",
    "reference": "Walls RM. Manual of Emergency Airway Management, 5ª ed. Miller's Anesthesia, 9ª ed.",
    "tags": [
      "sequência rápida de intubação",
      "etomidato",
      "sedação e analgesia"
    ]
  },
  {
    "id": "famema2026-92",
    "topography": "3.1",
    "topic": "Diarreia aguda",
    "module": "Clínica Médica",
    "text": "A correta correlação entre causa de diarreia e manifestação clínica está contida na seguinte alternativa:",
    "options": [
      "por Clostridium difficile, pode ocorrer em até seis meses pós-uso de antibióticos.",
      "por Norovírus, tem, em geral, de 3 a 5 dias de período de incubação.",
      "por S. aureus, ocorre por ação direta da bactéria.",
      "por Shigella sp, deve ser tratada preferencialmente, com metronidazol."
    ],
    "correctAnswer": 0,
    "explanation": "A diarreia por Clostridioides (Clostridium) difficile está ligada ao uso de antibióticos, que alteram a microbiota intestinal. Pode surgir durante o tratamento ou semanas a meses depois; a definição de infecção associada ao uso de antibiótico considera exposição nos 3 meses anteriores, e há relatos de até 6 meses, como diz a alternativa. Clindamicina, cefalosporinas, fluoroquinolonas e penicilinas de amplo espectro são as mais associadas.\n\nDiagnóstico por pesquisa de toxinas ou PCR nas fezes; tratamento com vancomicina oral ou fidaxomicina.",
    "commentary": "Norovírus com incubação de 3 a 5 dias (B): a incubação é curta, de 12 a 48 horas.\n\nS. aureus por ação direta (C): a intoxicação é causada pela toxina pré-formada no alimento, não pela bactéria no intestino; por isso começa em 1 a 6 horas.\n\nShigella com metronidazol (D): metronidazol cobre anaeróbios e protozoários; a shigelose é tratada com ciprofloxacino ou azitromicina (ou ceftriaxona).",
    "tip": "C. difficile: diarreia após antibiótico (até 3 meses, às vezes mais) → vancomicina oral ou fidaxomicina. Shigella → cipro/azitro.",
    "reference": "Johnson S et al. 2021 IDSA/SHEA Focused Update Guidelines on Management of Clostridioides difficile Infection. Clin Infect Dis, 2021. Riddle MS et al. ACG Clinical Guideline: Acute Diarrheal Infections in Adults, 2016.",
    "tags": [
      "clostridioides difficile",
      "diarreia aguda",
      "antibióticos"
    ]
  },
  {
    "id": "famema2026-93",
    "topography": "1.1",
    "module": "Clínica Médica",
    "text": "Considerando-se o diagnóstico da morte encefálica, podemos afirmar corretamente que o reflexo",
    "options": [
      "córneo-palpebral refere-se ao mesencéfalo (II aferente/III eferente).",
      "oculomotor refere-se à ponte (V aferente/VII eferente).",
      "óculo-cefálico refere-se ao mesencéfalo e à ponte (VIII aferente/III, IV, VI eferente).",
      "óculo-vestibular refere-se ao bulbo (IX aferente/X eferente)."
    ],
    "correctAnswer": 2,
    "explanation": "No diagnóstico de morte encefálica (Resolução CFM 2.173/2017), testam-se os reflexos de tronco. O reflexo oculocefálico (olhos de boneca) depende das vias vestibulares e dos núcleos oculomotores no mesencéfalo e na ponte: a aferência é o nervo vestibulococlear (VIII) e a eferência são os nervos que movem os olhos, oculomotor (III), troclear (IV) e abducente (VI). Na morte encefálica os olhos acompanham o movimento da cabeça (reflexo ausente).",
    "commentary": "Córneo-palpebral no mesencéfalo, II/III (A): o reflexo corneano é da ponte, com aferência pelo trigêmeo (V) e eferência pelo facial (VII).\n\nOculomotor na ponte, V/VII (B): essa é a via do reflexo corneopalpebral; o fotomotor (pupilar) é do mesencéfalo, com aferência pelo II e eferência pelo III.\n\nÓculo-vestibular no bulbo, IX/X (D): o oculovestibular (prova calórica) também usa VIII como aferente e III/VI como eferentes, no mesencéfalo e ponte; IX/X são as vias do reflexo de tosse e de vômito (bulbo).",
    "tip": "Reflexos de tronco: fotomotor (II→III, mesencéfalo); corneano (V→VII, ponte); oculocefálico e oculovestibular (VIII→III/VI, ponte e mesencéfalo); tosse (IX/X, bulbo).",
    "reference": "Conselho Federal de Medicina. Resolução CFM nº 2.173/2017 – Critérios do diagnóstico de morte encefálica. Machado A. Neuroanatomia Funcional, 3ª ed.",
    "tags": [
      "morte encefálica",
      "reflexos de tronco",
      "neuroanatomia"
    ]
  },
  {
    "id": "famema2026-94",
    "topography": "4.1",
    "topic": "Lesão renal aguda",
    "module": "Clínica Médica",
    "text": "KDIGO (The Kidney Disease Improving Global Outcomes) considera o seguinte parâmetro:",
    "options": [
      "relação ureia/creatinina > 40.",
      "redução do débito urinário < 1 mL/kg/hora por um período maior que 6 horas.",
      "elevação absoluta da creatinina ≥ 0,3 mg/dL dentro de 48 horas.",
      "FENa < 1%."
    ],
    "correctAnswer": 2,
    "explanation": "Pelo KDIGO, lesão renal aguda é definida por aumento absoluto da creatinina ≥ 0,3 mg/dL em 48 horas, ou aumento ≥ 1,5 vez a basal nos últimos 7 dias, ou débito urinário < 0,5 mL/kg/h por 6 horas.",
    "commentary": "Relação ureia/creatinina > 40 (A): é dado usado para sugerir causa pré-renal, não critério de definição do KDIGO.\n\nDébito urinário < 1 mL/kg/h por 6 h (B): o corte é < 0,5 mL/kg/h.\n\nFeNa < 1% (D): ajuda a diferenciar pré-renal de NTA, mas não define LRA.",
    "tip": "KDIGO: +0,3 mg/dL em 48 h, ou 1,5× a basal em 7 dias, ou diurese < 0,5 mL/kg/h por 6 h.",
    "reference": "KDIGO Clinical Practice Guideline for Acute Kidney Injury. Kidney Int Suppl, 2012.",
    "tags": [
      "lesão renal aguda",
      "KDIGO",
      "creatinina"
    ]
  },
  {
    "id": "famema2026-95",
    "topography": "8",
    "topic": "Cetoacidose diabética",
    "module": "Clínica Médica",
    "text": "Considerando-se os quadros de hiperglicemia, assinale a alternativa correta.",
    "options": [
      "A bomba de infusão de insulina pode ser desligada no momento em que o valor do aníon gap esteja ≤ 11.",
      "Insulinoterapia pode ser iniciada uma vez que o valor do potássio esteja entre 3.3 e 3.1 mEq/L.",
      "Estado hiperosmolar representa menos do que 1% das internações por diabetes melito.",
      "Cetoacidose diabética é definida por: glicemia > 250 mg/dL, pH > 7.3 e cetonemia positiva."
    ],
    "correctAnswer": 0,
    "explanation": "A cetoacidose está resolvida quando a acidose e a cetose se corrigem: ânion gap ≤ 12 mEq/L (o valor de 11 cumpre), pH > 7,3 e bicarbonato ≥ 15–18 mEq/L (e, na diretriz de 2024, cetonemia < 0,6 mmol/L), com o paciente conseguindo comer. Nesse momento a infusão de insulina EV pode ser desligada, desde que a insulina subcutânea (basal) seja aplicada 1 a 2 horas antes, para evitar rebote da cetose.",
    "commentary": "Insulina com potássio entre 3,1 e 3,3 (B): a insulina só é iniciada com potássio ≥ 3,3 mEq/L; abaixo disso, repõe-se primeiro o potássio.\n\nEstado hiperosmolar < 1% das internações (C): a banca considerou o valor impreciso (estima-se cerca de 1%); a A é a afirmação mais correta.\n\nCAD com pH > 7,3 (D): o critério é pH < 7,3 (acidose); pH acima disso exclui CAD.",
    "tip": "Resolução da CAD: AG ≤ 12, pH > 7,3, HCO₃ ≥ 15–18. Insulina SC 1–2 h antes de desligar a bomba.",
    "reference": "Umpierrez GE et al. Hyperglycemic Crises in Adults With Diabetes: A Consensus Report. Diabetes Care, 2024. Sociedade Brasileira de Diabetes. Diretriz 2024 – Crises hiperglicêmicas.",
    "tags": [
      "cetoacidose diabética",
      "ânion gap",
      "insulinoterapia"
    ]
  },
  {
    "id": "famema2026-96",
    "topography": "1.1",
    "topic": "AVC",
    "module": "Clínica Médica",
    "text": "Paciente de 64 anos apresenta, há 6 horas, quadro de hemianopsia homônima e hemi-hipoestesia, ambas contralaterais. Em face do exposto, a imagem tomográfica deve evidenciar acometimento de território da artéria cerebral",
    "options": [
      "média direita.",
      "média esquerda.",
      "anterior.",
      "posterior."
    ],
    "correctAnswer": 3,
    "explanation": "Hemianopsia homônima contralateral com hemi-hipoestesia contralateral, sem déficit motor ou afasia: quadro típico de AVC no território da artéria cerebral posterior. Ela irriga o lobo occipital (córtex visual, daí a hemianopsia homônima, muitas vezes com preservação macular) e, por ramos perfurantes, o tálamo (via sensitiva, daí a hipoestesia).",
    "commentary": "Cerebral média direita ou esquerda (A e B): o AVC de cerebral média causa hemiparesia e hipoestesia de predomínio braquiofacial, com afasia (hemisfério dominante) ou negligência (não dominante); pode haver hemianopsia, mas acompanhada de déficit motor.\n\nCerebral anterior (C): causa paresia e hipoestesia de predomínio crural (perna), abulia e incontinência urinária, sem hemianopsia.",
    "tip": "AVC de cerebral posterior: hemianopsia homônima ± hipoestesia (tálamo). Cerebral anterior: perna. Cerebral média: face e braço, afasia ou negligência.",
    "reference": "Caplan LR. Caplan's Stroke: A Clinical Approach, 5ª ed. Ministério da Saúde. Linha de cuidado do AVC no adulto, 2020.",
    "tags": [
      "AVC",
      "artéria cerebral posterior",
      "hemianopsia"
    ]
  },
  {
    "id": "famema2026-97",
    "topography": "1.1",
    "topic": "Meningite",
    "module": "Clínica Médica",
    "text": "Paciente de 42 anos apresenta quadro de meningite. Assim sendo, assinale a alternativa correta.",
    "options": [
      "Todos os contactantes adultos próximos devem receber, profilaticamente, rifampicina 600 mg, 12/12 horas, por 2 dias.",
      "Em caso de meningite viral, o isolamento do paciente deverá ser mantido por 24/48 horas.",
      "Em caso de o agente causador ser Neisseria meningitidis, o melhor tratamento será feito com ceftriaxona e vancomicina, e o uso de corticoide é seguro e benéfico.",
      "Em caso de o agente causador ser Streptococcus pneumoniae, o melhor tratamento será feito com ceftriaxone, e o uso de corticoide é seguro e benéfico."
    ],
    "correctAnswer": 3,
    "explanation": "Na meningite por Streptococcus pneumoniae, a ceftriaxona é a base do tratamento (associa-se vancomicina empiricamente onde há pneumococo resistente, até o antibiograma), e a dexametasona, iniciada antes ou junto da primeira dose do antibiótico, reduz mortalidade e sequelas neurológicas, como surdez. É justamente no pneumococo que o benefício do corticoide é mais bem demonstrado.",
    "commentary": "Rifampicina para todos os contactantes adultos (A): a quimioprofilaxia é indicada para contactantes íntimos de meningite meningocócica ou por Haemophilus, não para toda meningite; e a dose para adultos é 600 mg de 12/12 h por 2 dias apenas no meningococo.\n\nIsolamento por 24–48 h na viral (B): o isolamento respiratório por 24 horas após início do antibiótico vale para meningococo e Haemophilus; na meningite viral usam-se precauções padrão/contato.\n\nCeftriaxona e vancomicina no meningococo (C): o meningococo é tratado com ceftriaxona (ou penicilina) isolada; a vancomicina não é necessária, e o benefício do corticoide não é demonstrado nessa etiologia.",
    "tip": "Pneumococo: ceftriaxona (+ vancomicina empírica) + dexametasona. Meningococo: ceftriaxona, isolamento 24 h e quimioprofilaxia dos contactantes.",
    "reference": "van de Beek D et al. ESCMID guideline: diagnosis and treatment of acute bacterial meningitis, 2016. Ministério da Saúde. Guia de Vigilância em Saúde, 2023 – Meningites.",
    "tags": [
      "meningite pneumocócica",
      "dexametasona",
      "ceftriaxona"
    ]
  },
  {
    "id": "famema2026-98",
    "topography": "14",
    "topic": "Parada cardiorrespiratória",
    "module": "Clínica Médica",
    "text": "Com relação à capnografia com forma de onda durante as manobras de RCP, é correto afirmar que valores inferiores a",
    "options": [
      "10 mmHg indicam a realização de compressões torácicas adequadas.",
      "20 mmHg se correlacionam a sinais de obstrução de via aérea.",
      "10 mmHg se correlacionam a prognósticos menos favoráveis.",
      "15 mmHg indicam provável quadro de tamponamento cardíaco."
    ],
    "correctAnswer": 2,
    "explanation": "Durante a RCP, a capnografia em forma de onda mede o CO₂ expirado (ETCO₂), que reflete o fluxo sanguíneo pulmonar gerado pelas compressões. Valores persistentemente abaixo de 10 mmHg, após 20 minutos de RCP em paciente intubado, se associam a prognóstico ruim e baixa chance de retorno da circulação. Também sugerem compressões de baixa qualidade, que devem ser melhoradas. Uma elevação súbita (para 35–40 mmHg) sugere retorno da circulação espontânea.",
    "commentary": "Abaixo de 10 indica compressões adequadas (A): é o contrário; ETCO₂ < 10 sugere compressões inadequadas.\n\nAbaixo de 20 indica obstrução de via aérea (B): obstrução ou desconexão causam perda ou alteração da curva, não um valor de corte.\n\nAbaixo de 15 indica tamponamento (D): o ETCO₂ não diagnostica tamponamento cardíaco.",
    "tip": "Capnografia na RCP: ETCO₂ < 10 = melhorar compressões e prognóstico pior; salto para 35–40 = provável RCE.",
    "reference": "American Heart Association. Guidelines for CPR and ECC, 2020 (atualização 2025).",
    "tags": [
      "capnografia",
      "ressuscitação cardiopulmonar",
      "ETCO₂"
    ]
  },
  {
    "id": "famema2026-99",
    "topography": "14",
    "topic": "Sepse e choque séptico",
    "module": "Clínica Médica",
    "text": "A sepse deve ter seu tratamento iniciado precocemente, uma vez que contribui na diminuição da mortalidade. Várias escalas são utilizadas para triagem de risco no departamento de emergência. Assim, é correto afirmar que",
    "options": [
      "SIRS ≥ 2 apresenta baixa especificidade e alta sensibilidade para o diagnóstico da sepse.",
      "qSOFA ≥ 2 apresenta baixa sensibilidade, mas alta especificidade para o diagnóstico da sepse, por isso, seu uso deve ser evitado no departamento de emergência.",
      "SOFA apresenta a melhor relação sensibilidade/especificidade para o diagnóstico da sepse.",
      "NEWS ≥ 4 apresenta a pior acurácia para o diagnóstico da sepse."
    ],
    "correctAnswer": 3,
    "explanation": "A banca deu como correta a afirmação de que o NEWS ≥ 4 tem a pior acurácia, mas a literatura mostra o contrário: o NEWS (sinais vitais, nível de consciência e oxigênio) tem acurácia igual ou superior à do qSOFA e da SIRS para identificar pacientes com sepse e risco de deterioração na emergência.\n\nA afirmação tecnicamente correta é a A: os critérios de SIRS (≥ 2) são muito sensíveis, porque se alteram em qualquer resposta inflamatória, mas pouco específicos. A Surviving Sepsis Campaign 2021 desaconselha usar o qSOFA isoladamente para triagem, comparado com SIRS, NEWS ou MEWS.",
    "commentary": "SIRS sensível e pouco específica (A): afirmação correta pela literatura; também é aceita aqui.\n\nqSOFA deve ser evitado (B): é pouco sensível e muito específico, e a SSC 2021 recomenda não usá-lo como ferramenta única de triagem; mas a banca considerou exagerado dizer que deve ser evitado.\n\nSOFA com melhor relação sensibilidade/especificidade (C): o SOFA define disfunção orgânica no Sepsis-3, mas depende de exames laboratoriais e não é ferramenta de triagem rápida.",
    "alert": "Gabarito discutível: a banca deu a alternativa D, mas a literatura mostra que o NEWS tem boa acurácia na triagem de sepse. A afirmação correta é a A (SIRS sensível e pouco específica), que também conta como certa aqui.",
    "alsoAccepted": [
      0
    ],
    "tip": "Triagem de sepse: SIRS sensível e pouco específica; qSOFA específico e pouco sensível (não usar sozinho); NEWS/MEWS com boa acurácia.",
    "reference": "Evans L et al. Surviving Sepsis Campaign: International Guidelines 2021. Crit Care Med, 2021. Usman OA et al. Comparison of SIRS, qSOFA, and NEWS for the early identification of sepsis in the Emergency Department. Am J Emerg Med, 2019.",
    "tags": [
      "sepse",
      "escores de triagem",
      "NEWS"
    ]
  },
  {
    "id": "famema2026-100",
    "topography": "10",
    "topic": "Dengue",
    "module": "Clínica Médica",
    "text": "Paciente de 18 anos tem quadro de febre há 3 dias associado a cefaleia, prostração, mialgia e dor retro-orbitária. A prova do laço é positiva, não há repercussão hemodinâmica ou qualquer outro sinal de alerta.\n\nPode-se afirmar, corretamente, que esse paciente é classificado no grupo",
    "options": [
      "A, com orientação de hidratação, analgesia e acompanhamento ambulatorial.",
      "B, com orientação de hidratação, analgesia e observação na unidade até o resultado de exames complementares.",
      "C, com orientação de hidratação, analgesia e internação em leito de enfermaria por período mínimo de 48 horas.",
      "D, com orientação de hidratação, analgesia e internação em leito de UTI."
    ],
    "correctAnswer": 1,
    "explanation": "Febre há 3 dias com cefaleia, mialgia, prostração e dor retro-orbitária: caso suspeito de dengue. Com prova do laço positiva, sem sinais de alarme e sem choque, o paciente é do grupo B.\n\nNo grupo B, o hemograma é obrigatório, e o paciente recebe hidratação oral supervisionada na unidade até o resultado. Se o hematócrito estiver normal, segue em tratamento ambulatorial com hidratação oral, analgesia e retorno diário; se houver hemoconcentração ou sinal de alarme, é conduzido como grupo C.",
    "commentary": "Grupo A (A): seria sem sangramento espontâneo, sem prova do laço positiva, sem condição especial e sem alarme.\n\nGrupo C (C): exige sinais de alarme (dor abdominal intensa, vômitos persistentes, sangramento de mucosa, hepatomegalia, letargia, queda abrupta de plaquetas com aumento do hematócrito, acúmulo de líquidos).\n\nGrupo D (D): exige choque ou sinais de choque, sangramento grave ou disfunção grave de órgão.",
    "tip": "Dengue com prova do laço positiva, sem alarme = grupo B: hemograma obrigatório e hidratação oral na unidade até o resultado.",
    "reference": "Ministério da Saúde. Dengue: diagnóstico e manejo clínico – adulto e criança. 6ª ed., 2024.",
    "tags": [
      "dengue",
      "prova do laço",
      "estadiamento"
    ]
  }
];
