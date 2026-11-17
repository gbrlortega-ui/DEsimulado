import { Question } from '../types';

// CESUPA 2025 (PA) — residência médica (acesso direto). 50 questões, 4 alternativas.
// Gabarito conferido no gabarito comentado do AjudaMédico; explicações com texto próprio.
export const CESUPA_2025_QUESTIONS: Question[] = [
  {
    "id": "cesupa2025-1",
    "topography": "2.2",
    "topic": "Hipertensão arterial sistêmica",
    "module": "Clínica Médica",
    "text": "Homem de 68 anos, com hipertensão de difícil controle, procura o médico para ajuste do tratamento. Ele é obeso (IMC 32), tem diabetes mellitus tipo 2 controlado e doença renal crônica estágio 3a (TFG de 45 mL/min/1,73m²). Está em uso regular de três classes de anti-hipertensivos: enalapril 40 mg/dia, anlodipino 10 mg/dia e hidroclorotiazida 25 mg/dia. Ainda assim, sua pressão arterial permanece em torno de 160/100 mmHg nas últimas consultas. Exames laboratoriais mostram potássio sérico de 4,0 mEq/L e creatinina de 1,8 mg/dL.\n\nQual a conduta mais adequada para o manejo deste paciente, segundo a última Diretriz Brasileira de Hipertensão Arterial Sistêmica?",
    "options": [
      "Iniciar espironolactona e solicitar MAPA 24hs.",
      "Associar clonidina ao esquema atual e pedir polissonografia.",
      "Associar furosemida ao esquema e solicitar ecocardiograma.",
      "Aumentar a dose da hidroclorotiazida e pedir doppler de artérias renais."
    ],
    "correctAnswer": 0,
    "explanation": "Três anti-hipertensivos de classes diferentes em dose plena (IECA + bloqueador de canal de cálcio + tiazídico) e PA ainda em 160/100 mmHg: definição de hipertensão resistente.\n\nO primeiro passo é afastar a pseudorresistência (efeito do avental branco, má adesão, técnica de medida errada), e o MAPA de 24 horas confirma se a PA está de fato elevada fora do consultório. Confirmada a resistência, o 4º fármaco recomendado pela Diretriz Brasileira de Hipertensão é a espironolactona (estudo PATHWAY-2).\n\nO paciente pode usá-la com segurança: potássio de 4,0 mEq/L e TFG de 45 mL/min (evitar com K > 5,0 mEq/L ou TFG < 30 mL/min), monitorando potássio e creatinina.",
    "commentary": "Clonidina e polissonografia (B): a clonidina fica para depois da espironolactona e de outras opções (betabloqueador, alfabloqueador), pelos efeitos adversos e pelo rebote na suspensão. A apneia do sono deve ser investigada, mas não muda o próximo passo.\n\nFurosemida e ecocardiograma (C): o diurético de alça substitui o tiazídico quando a TFG cai abaixo de 30 mL/min; com 45 mL/min a hidroclorotiazida ainda funciona. O ecocardiograma avalia lesão de órgão-alvo, mas não ajusta o tratamento.\n\nMais hidroclorotiazida e doppler renal (D): acima de 25 mg o ganho pressórico é pequeno e os efeitos metabólicos aumentam. A investigação de hipertensão renovascular vem depois de confirmar a resistência verdadeira.",
    "tip": "Hipertensão resistente: MAPA para afastar avental branco e, confirmada, espironolactona como 4º fármaco.",
    "reference": "Sociedade Brasileira de Cardiologia. Diretrizes Brasileiras de Hipertensão Arterial – 2020.",
    "tags": [
      "hipertensão resistente",
      "espironolactona",
      "MAPA",
      "doença renal crônica"
    ]
  },
  {
    "id": "cesupa2025-2",
    "topography": "4.1",
    "topic": "Nefropatia diabética",
    "module": "Clínica Médica",
    "text": "Uma mulher de 55 anos, com diabetes mellitus tipo 2 diagnosticado há 10 anos, é acompanhada em consulta de rotina. Ela apresenta hipertensão arterial e obesidade (IMC 33). Os exames mostram uma taxa de filtração glomerular estimada em 55 mL/min/1,73m² e albuminúria de 200 mg/24h. A paciente já faz uso de metformina 2g/dia, enalapril 40mg/dia e anlodipino 10mg/dia para controle da pressão arterial e glicemia. A pressão arterial encontra-se em 135/90 mmHg. A glicemia de jejum está em 160 mg/dL e a hemoglobina glicada em 8,2%.\n\nDe acordo com as diretrizes brasileiras de diabetes, qual é a conduta terapêutica mais adequada para o manejo da nefropatia diabética neste caso?",
    "options": [
      "Substituir o enalapril por losartana e adicionar espironolactona para controle da pressão arterial.",
      "Suspender Metformina e iniciar Dapagliflozina para controle glicêmico rigoroso e manter anti-hipertensivos.",
      "Intensificar o controle glicêmico, associando a Glibenclamida como o segundo antidiabético oral e manter os demais.",
      "Associar ao esquema Espironolactona e Empagliflozina, para alcançar tanto meta pressórica quanto controle glicêmico."
    ],
    "correctAnswer": 3,
    "explanation": "Diabetes tipo 2 com HbA1c 8,2%, PA 135/90 mmHg (acima da meta < 130/80 mmHg) e doença renal do diabetes: TFG 55 mL/min/1,73 m² (G3a) e albuminúria de 200 mg/24h (A2). Já usa IECA em dose máxima e metformina.\n\nO pilar de nefroproteção atual é o inibidor de SGLT2 (empagliflozina, dapagliflozina), que reduz a progressão da doença renal e eventos cardiovasculares independentemente da glicemia e pode ser iniciado com TFG ≥ 20 mL/min. Ele soma-se à metformina, que pode ser mantida com TFG ≥ 30 mL/min (com ajuste de dose abaixo de 45).\n\nPara a PA fora da meta, o gabarito associa o antagonista mineralocorticoide (espironolactona), que também reduz albuminúria. Por isso a alternativa D é a resposta oficial: alcança meta pressórica e glicêmica e protege o rim.",
    "commentary": "Losartana + espironolactona (A): trocar IECA por BRA não traz benefício (só em caso de intolerância, como tosse), e a alternativa não trata a glicemia nem acrescenta o iSGLT2.\n\nSuspender metformina e iniciar dapagliflozina (B): não há motivo para suspender a metformina com TFG de 55 mL/min; o iSGLT2 deve ser somado, não trocado. Além disso, a PA continua acima da meta.\n\nGlibenclamida (C): sulfonilureia de longa ação, com alto risco de hipoglicemia na doença renal e sem benefício renal ou cardiovascular — não é a escolha para quem tem nefropatia.\n\nObservação: nas diretrizes mais recentes (SBD, KDIGO), o antagonista mineralocorticoide com evidência de proteção renal no diabetes é a finerenona (não esteroidal). A espironolactona exige vigilância maior de potássio nesse contexto.",
    "tip": "Diabetes com doença renal: IECA/BRA em dose máxima + iSGLT2; metformina mantida se TFG ≥ 30.",
    "reference": "Diretriz da Sociedade Brasileira de Diabetes – Tratamento da doença renal do diabetes, 2024. KDIGO 2022 Clinical Practice Guideline for Diabetes Management in CKD.",
    "tags": [
      "diabetes mellitus tipo 2",
      "nefropatia diabética",
      "iSGLT2",
      "albuminúria"
    ]
  },
  {
    "id": "cesupa2025-3",
    "topography": "3.1",
    "topic": "Dispepsia funcional",
    "module": "Clínica Médica",
    "text": "Um homem de 42 anos procura atendimento com queixa de sensação de plenitude e desconforto abdominal após as refeições, há 3 meses. Ele descreve que, após se alimentar, sente-se “estufado” e relata eructações frequentes, mas nega dor, queimação retroesternal, azia ou regurgitação. O desconforto abdominal é difuso, mas sem irradiação. Ele também apresenta episódios ocasionais de náusea, mas nunca teve vômito. Nega alteração no hábito intestinal, perda de peso ou sangramentos. Ao exame físico, apresenta leve sensibilidade epigástrica à palpação, sem sinais de alarme.\n\nCom base no quadro clínico, segundo o ROMA IV, qual é a melhor conduta inicial para manejo deste paciente?",
    "options": [
      "Iniciar inibidor da bomba de prótons por 8 semanas.",
      "Iniciar IBP associado a procinético por 8 semanas.",
      "Orientar dieta fracionada e iniciar procinético.",
      "Solicitar endoscopia digestiva alta."
    ],
    "correctAnswer": 2,
    "explanation": "Plenitude pós-prandial e saciedade com eructações há 3 meses, sem dor em queimação, sem pirose e sem sinais de alarme, aos 42 anos: dispepsia funcional do subtipo síndrome do desconforto pós-prandial (Roma IV).\n\nSem sinais de alarme e abaixo da idade de corte (≥ 60 anos no Roma IV / ACG; no Brasil muitos usam ≥ 45–55 anos), não é preciso endoscopia inicial. No subtipo pós-prandial, a primeira abordagem é dieta fracionada (refeições menores e mais frequentes, evitar gordura) e procinético, que acelera o esvaziamento gástrico. O IBP é a primeira escolha no subtipo de dor epigástrica.\n\nTambém faz parte da avaliação pesquisar e tratar H. pylori (estratégia testar e tratar).",
    "commentary": "IBP por 8 semanas (A): primeira linha na síndrome da dor epigástrica ou na DRGE; aqui o paciente nega dor, queimação e pirose.\n\nIBP + procinético por 8 semanas (B): a associação é reservada a quem não responde ao tratamento inicial; começar com dois fármacos não é necessário.\n\nEndoscopia (D): indicada se houver sinais de alarme (perda de peso, disfagia, vômitos persistentes, sangramento, anemia, massa) ou idade acima do ponto de corte, o que não é o caso.",
    "tip": "Dispepsia funcional: dor epigástrica → IBP; plenitude pós-prandial → dieta fracionada + procinético. Sem alarme, sem EDA.",
    "reference": "Stanghellini V et al. Gastroduodenal disorders (Rome IV). Gastroenterology, 2016. Moayyedi P et al. ACG and CAG Clinical Guideline: Management of Dyspepsia, 2017.",
    "tags": [
      "dispepsia funcional",
      "critérios de Roma IV",
      "procinético",
      "síndrome do desconforto pós-prandial"
    ]
  },
  {
    "id": "cesupa2025-4",
    "topography": "3.1",
    "topic": "Câncer colorretal",
    "module": "Clínica Médica",
    "text": "Uma mulher de 55 anos, sem comorbidades e sem histórico familiar de câncer, procura seu médico para consulta de rotina. Encontra-se sem queixas. Nunca realizou colonoscopia ou outros exames para rastreamento de câncer. Ela tem uma dieta equilibrada, nega tabagismo, raramente consome bebidas alcoólicas e faz exames regulares de saúde.\n\nQual é a recomendação mais apropriada para o rastreamento de câncer de cólon para esta paciente, considerando as diretrizes de rastreamento?",
    "options": [
      "Solicitar pesquisa de sangue oculto nas fezes anualmente, pois não há indicação de colonoscopia.",
      "Solicitar colonoscopia nesta consulta e repetir o exame a cada 10 anos, caso não haja achados patológicos.",
      "Aconselhar a realização de colonoscopia apenas a partir dos 60 anos, dada a ausência de histórico familiar de câncer.",
      "Reforçar medidas de prevenção e agendar colonoscopia a cada 5 anos, pois ela se encontra em uma faixa de risco médio."
    ],
    "correctAnswer": 1,
    "explanation": "Mulher de 55 anos, assintomática, sem história familiar: risco médio para câncer colorretal. O rastreamento é indicado dos 45 aos 75 anos.\n\nEntre as opções aceitas, a colonoscopia permite diagnosticar e retirar pólipos no mesmo exame. Se normal, é repetida a cada 10 anos no risco médio. Outras estratégias válidas são o teste imunoquímico fecal (FIT) anual, a pesquisa de sangue oculto de alta sensibilidade anual ou a retossigmoidoscopia a cada 5 anos.",
    "commentary": "Sangue oculto anual \"pois não há indicação de colonoscopia\" (A): o teste fecal anual é aceito, mas a justificativa está errada — a colonoscopia também é indicada no risco médio, e o teste positivo exige colonoscopia.\n\nColonoscopia só a partir dos 60 anos (C): no risco médio o rastreamento começa aos 45–50 anos; a idade de 60 anos não tem base nas diretrizes. Com história familiar, começa ainda mais cedo.\n\nColonoscopia a cada 5 anos (D): o intervalo de 5 anos vale para alto risco (parente de 1º grau com câncer antes dos 60 anos) ou após retirada de alguns pólipos; no risco médio com exame normal, é a cada 10 anos.",
    "tip": "Câncer colorretal, risco médio: 45–75 anos; colonoscopia normal → repetir em 10 anos; FIT → anual.",
    "reference": "US Preventive Services Task Force. Screening for Colorectal Cancer, 2021. INCA. Detecção precoce do câncer colorretal.",
    "tags": [
      "rastreamento",
      "câncer colorretal",
      "colonoscopia"
    ]
  },
  {
    "id": "cesupa2025-5",
    "topography": "6.1",
    "topic": "Osteoporose",
    "module": "Clínica Médica",
    "text": "Paciente de 65 anos vem a consulta em pós-operatório de correção de fratura de quadril. Relata que há 2 meses escorregou enquanto realizava caminhada na rua e foi constatada fratura de fêmur. Fez a correção cirúrgica e está em reabilitação, com a fisioterapia. Nega comorbidades e etilismo. É tabagista de meia carteira há 20 anos. Relata menopausa aos 45 anos, sem uso de terapia de reposição hormonal. Estava em uso apenas de dipirona para dor. Ao exame físico, apresenta IMC de 27 kg/m². Ao realizar o FRAX 2.0, foi encontrado o gráfico a seguir:\n\nZona intermediária: mostra que os dados não foram suficientes para definir a indicação da terapia medicamentosa e sugere a necessidade de realização da densitometria óssea para aprimorar a avaliação.\n\nA conduta médica mais adequada para essa paciente, além de solicitar a densitometria óssea é:",
    "options": [
      "Aguardar resultado da densitometria para definir a conduta mais adequada.",
      "Prescrever um bifosfonato oral associado à suplementação de cálcio e vitamina D.",
      "Incentivar a exposição ao sol, incentivar atividade física regular e cessar tabagismo.",
      "Orientar suplementação de cálcio e vitamina D, associada a exercícios físicos de baixo impacto."
    ],
    "correctAnswer": 1,
    "explanation": "Mulher de 65 anos, menopausa precoce (45 anos), tabagista, com fratura de fêmur proximal após queda da própria altura (escorregar caminhando). Uma fratura de quadril por baixo impacto é, por definição, fratura por fragilidade e já faz o diagnóstico clínico de osteoporose, qualquer que seja o resultado da densitometria.\n\nAssim, embora o FRAX tenha ficado na zona intermediária, a fratura de quadril basta para indicar tratamento farmacológico. O bifosfonato oral (alendronato ou risedronato) é a primeira linha, sempre com cálcio (dieta ou suplemento) e vitamina D adequados. A densitometria serve de base para o seguimento.\n\nAlém disso: cessar o tabagismo, exercícios e prevenção de quedas.",
    "commentary": "Aguardar a densitometria (A): após fratura de quadril, o risco de nova fratura é maior no primeiro ano; adiar o tratamento expõe a paciente sem necessidade.\n\nSol, atividade física e cessar tabagismo (C): medidas importantes, mas insuficientes isoladamente para quem já teve fratura por fragilidade.\n\nCálcio, vitamina D e exercícios (D): são adjuvantes; sozinhos não reduzem de forma suficiente o risco de nova fratura de quadril.",
    "tip": "Fratura de quadril ou vértebra por baixo impacto = osteoporose: tratar com bifosfonato, sem esperar densitometria.",
    "reference": "Radominski SC et al. Diretrizes brasileiras para o diagnóstico e tratamento da osteoporose em mulheres na pós-menopausa. Rev Bras Reumatol, 2017. FRAX Brasil (ABRASSO).",
    "tags": [
      "osteoporose",
      "FRAX",
      "bifosfonato",
      "fratura de quadril"
    ],
    "image": "/images/cesupa2025-5.webp"
  },
  {
    "id": "cesupa2025-6",
    "topography": "7.1",
    "topic": "Doença arterial periférica",
    "module": "Clínica Médica",
    "text": "Homem de 67 anos, procura atendimento com queixa de dor nas pernas. Relata que sempre teve dor ao final do dia, contudo, há 4 meses vem notando dor ao caminhar, que o obriga a parar por alguns minutos antes de prosseguir no seu caminho para trabalho. Tabagista desde os 15 anos. Nega hipertensão ou diabetes. Ao exame físico, notam-se veias varicosas em ambos os membros inferiores, presença de dermatite ocre bilateral, edema discreto bilateral. Pulsos pediosos e tibiais não palpáveis. Sinal de Bancroft e Homans negativos.\n\nCom base no quadro clínico, qual é a melhor conduta para tratar a causa da dor deste paciente?",
    "options": [
      "Prescrever anticoagulante oral em dose plena.",
      "Prescrever um analgésico para a dor e orientar repouso.",
      "Iniciar Cilostazol, estatina, orientar exercício e cessar tabagismo.",
      "Iniciar vasotônico, orientar exercício físico e meia elástica."
    ],
    "correctAnswer": 2,
    "explanation": "O paciente tem dois problemas: insuficiência venosa crônica (varizes, dermatite ocre, edema), que explica a dor do fim do dia, e uma queixa nova de dor ao caminhar que melhora após alguns minutos parado — claudicação intermitente.\n\nTabagista desde os 15 anos, com pulsos pediosos e tibiais impalpáveis: doença arterial obstrutiva periférica. A pergunta pede o tratamento da causa da dor ao caminhar.\n\nTratamento clínico da claudicação: cessar o tabagismo, exercício supervisionado (caminhar até a dor e repetir), estatina de alta potência e antiagregante (AAS ou clopidogrel). O cilostazol melhora a distância de marcha (contraindicado na insuficiência cardíaca). A revascularização fica para claudicação limitante refratária ou isquemia crítica.",
    "commentary": "Anticoagulante em dose plena (A): não há trombose venosa (Homans e Bancroft negativos) nem fibrilação atrial; na doença arterial periférica estável usa-se antiagregante, não anticoagulação plena.\n\nAnalgésico e repouso (B): não trata a causa e o repouso piora o condicionamento; o exercício é parte central do tratamento.\n\nVasotônico, exercício e meia elástica (D): tratam a insuficiência venosa, não a claudicação. A compressão elástica pode até piorar a perfusão em quem tem doença arterial importante.",
    "tip": "Dor ao caminhar que alivia parado + pulsos ausentes + tabagismo = claudicação: parar de fumar, exercício, estatina, antiagregante e cilostazol.",
    "reference": "Gerhard-Herman MD et al. 2016 AHA/ACC Guideline on Lower Extremity Peripheral Artery Disease. Sociedade Brasileira de Angiologia e Cirurgia Vascular. Diretrizes de DAOP.",
    "tags": [
      "doença arterial obstrutiva periférica",
      "claudicação intermitente",
      "cilostazol",
      "insuficiência venosa crônica"
    ]
  },
  {
    "id": "cesupa2025-7",
    "topography": "12",
    "topic": "Cuidados paliativos",
    "module": "Clínica Médica",
    "text": "Um homem de 78 anos, com histórico de câncer de pulmão metastático, é admitido no hospital com quadro de desconforto respiratório, tosse produtiva e febre nas últimas 48 horas. Ele tem metástases ósseas e hepáticas e vinha sendo acompanhado pela equipe de Cuidados Paliativos, já sendo alinhado evitar medidas invasivas. A equipe assistente considera o estado avançado da neoplasia e a limitação das terapias curativas. Exames de imagem indicam infiltrado pulmonar sugestivo de pneumonia. No exame físico, o paciente está taquipneico (24 rpm), com saturação de oxigênio em 88% em ar ambiente. Relata fadiga intensa e alguma ansiedade relacionada à dificuldade de respirar.\n\nDiante do quadro, qual é a conduta mais adequada para manejo deste paciente?",
    "options": [
      "Iniciar antibioticoterapia de largo espectro e considerar internação na UTI para suporte ventilatório invasivo.",
      "Instituir ventilação não invasiva contínua e realizar medidas de suporte intensivo para controle da infecção.",
      "Orientar a equipe e a família sobre a limitação de intervenções, mantendo apenas analgesia leve e evitando suporte respiratório.",
      "Realizar oxigenoterapia, opioides para controle da dispneia, ansiolíticos e avaliar antibióticos voltados para controle dos sintomas."
    ],
    "correctAnswer": 3,
    "explanation": "Câncer de pulmão com metástases ósseas e hepáticas, em acompanhamento com cuidados paliativos e decisão já alinhada de evitar medidas invasivas. Agora tem pneumonia com dispneia, SatO₂ 88%, fadiga e ansiedade.\n\nCuidado paliativo não é abandono: o foco passa a ser o conforto. Controle da dispneia com oxigênio (se trouxer alívio), opioide em dose baixa (morfina é a droga de escolha para dispneia refratária) e ansiolítico para a ansiedade associada. O antibiótico pode ser usado se ajudar a controlar sintomas (febre, secreção, desconforto), sem a intenção de prolongar a vida a qualquer custo.\n\nO plano deve ser compartilhado com o paciente e a família.",
    "commentary": "Antibiótico de largo espectro e UTI com intubação (A): contraria o plano de cuidados já pactuado e as preferências do paciente; é medida invasiva sem benefício esperado.\n\nVNI contínua e suporte intensivo (B): mesma lógica; a VNI pode ser usada em casos selecionados para alívio, mas \"suporte intensivo\" vai contra o objetivo de conforto.\n\nSó analgesia leve, sem suporte respiratório (C): limitar intervenções invasivas não significa deixar sintomas sem tratamento; dispneia e ansiedade precisam ser controladas.",
    "tip": "Paliativo com dispneia: oxigênio se alivia, morfina, ansiolítico e antibiótico só se melhorar sintomas. Nada de UTI se já pactuado.",
    "reference": "Academia Nacional de Cuidados Paliativos. Manual de Cuidados Paliativos ANCP, 2ª ed., 2012.",
    "tags": [
      "cuidados paliativos",
      "dispneia",
      "opioides",
      "câncer de pulmão"
    ]
  },
  {
    "id": "cesupa2025-8",
    "topography": "2.2",
    "topic": "Insuficiência cardíaca",
    "module": "Clínica Médica",
    "text": "Um homem de 64 anos, com diagnóstico de insuficiência cardíaca com fração de ejeção reduzida (fração de ejeção de 35%), apresenta-se em consulta para seguimento ambulatorial. Ele faz uso de bisoprolol, losartana, hidroclorotiazida e espironolactona. Está clinicamente compensado, sem sinais de congestão ou edema periférico. Relata estar se sentindo bem e mantém uma rotina diária que inclui caminhadas leves. No entanto, ele questiona o que mais pode fazer, além da medicação, para manter sua condição estável e prevenir novas descompensações. Ao exame físico, sinais vitais normais, ausência de crepitações pulmonares e pulsos periféricos palpáveis.\n\nQual orientação adicional não medicamentosa é mais apropriada para ajudar este paciente a manter-se compensado?",
    "options": [
      "Vacinar contra influenza e pneumococos.",
      "Priorizar realização de exercícios isométricos.",
      "Evitar uso de sildenafila para atividade sexual.",
      "Inserir a ingesta diária de 20ml de vinho tinto."
    ],
    "correctAnswer": 0,
    "explanation": "Insuficiência cardíaca com fração de ejeção reduzida, compensada, perguntando o que mais pode fazer além dos remédios para evitar descompensações.\n\nInfecções respiratórias estão entre as principais causas de descompensação e internação na IC. Por isso a vacinação anual contra influenza e a vacinação antipneumocócica são recomendadas para todos os pacientes com IC (classe I nas diretrizes), reduzindo internações e mortalidade.\n\nOutras medidas não farmacológicas úteis: exercício aeróbico regular (reabilitação cardíaca), controle de sódio e de peso, adesão ao tratamento e cessar álcool e tabaco.",
    "commentary": "Exercícios isométricos (B): o exercício recomendado na IC é aeróbico (caminhada, bicicleta), associado a resistido leve; o isométrico intenso eleva a pós-carga e não deve ser priorizado.\n\nEvitar sildenafila (C): a sildenafila é segura na IC estável; a contraindicação é o uso com nitratos (hipotensão grave). O paciente não usa nitrato.\n\nVinho tinto diário (D): não há recomendação de iniciar álcool para proteção cardiovascular; na IC o álcool deve ser limitado ou evitado (pode causar ou piorar cardiomiopatia).",
    "tip": "IC: vacina de influenza anual e antipneumocócica para todos — infecção é gatilho clássico de descompensação.",
    "reference": "Sociedade Brasileira de Cardiologia. Diretriz Brasileira de Insuficiência Cardíaca Crônica e Aguda, 2018 (atualização 2021).",
    "tags": [
      "insuficiência cardíaca",
      "vacinação",
      "prevenção de descompensação"
    ]
  },
  {
    "id": "cesupa2025-9",
    "topography": "6.1",
    "topic": "Osteoartrose",
    "module": "Clínica Médica",
    "text": "Uma mulher de 45 anos vem à consulta com queixa de dor nas mãos, com rigidez matinal em torno de 20 minutos. Relata dor semelhante em joelho esquerdo, que às vezes fica vermelho e inchado. Ao exame físico, há nódulos em interfalangianas distais e proximais das mãos, sem sinais de sinovite. Ambos os joelhos apresentam crepitação, no momento sem sinais flogísticos.\n\nA conduta mais adequada para esta paciente é:",
    "options": [
      "Solicitar rx de mãos e punhos.",
      "Prescrever anti-inflamatório não esteroidal.",
      "Solicitar FAN, Fator reumatoide, VHS e PCR.",
      "Fisioterapia de joelhos e prescrever dipirona."
    ],
    "correctAnswer": 3,
    "explanation": "Mulher de 45 anos com nódulos nas interfalangianas distais (Heberden) e proximais (Bouchard), rigidez matinal curta (< 30 minutos), sem sinovite nas mãos, e joelhos com crepitação: quadro clínico típico de osteoartrite (osteoartrose) de mãos e joelhos.\n\nO diagnóstico é clínico; exames de imagem e laboratoriais não são necessários. O tratamento começa por medidas não farmacológicas — exercícios, fisioterapia com fortalecimento do quadríceps, perda de peso se necessário — e analgésicos simples (paracetamol, dipirona). AINE tópico ou oral por curto período fica para as crises com dor e sinais inflamatórios.",
    "commentary": "Radiografia de mãos e punhos (A): não muda a conduta quando o quadro clínico é típico; a radiografia pode ser normal no início e não se correlaciona bem com a dor.\n\nAINE (B): no momento não há sinais flogísticos; o AINE oral tem efeitos gastrointestinais, renais e cardiovasculares e é reservado para crises, por tempo curto.\n\nFAN, fator reumatoide, VHS e PCR (C): seriam úteis se houvesse suspeita de artrite inflamatória (artrite reumatoide poupa as IFD e tem rigidez prolongada, sinovite). Aqui o quadro é degenerativo.",
    "tip": "Nódulos de Heberden/Bouchard + rigidez < 30 min + crepitação = osteoartrite: diagnóstico clínico, exercício e analgésico simples.",
    "reference": "Sociedade Brasileira de Reumatologia. Recomendações para o tratamento da osteoartrite. Kolasinski SL et al. 2019 ACR/Arthritis Foundation Guideline for the Management of Osteoarthritis.",
    "tags": [
      "osteoartrite",
      "nódulos de Heberden",
      "fisioterapia"
    ]
  },
  {
    "id": "cesupa2025-10",
    "topography": "13",
    "topic": "Depressão maior",
    "module": "Clínica Médica",
    "text": "Nossa paciente, que sempre foi uma pessoa ativa e disposta, refere ter perdido a vontade de realizar as atividades que antes adorava. Há quase dois meses, deixou de sentir o habitual prazer antes desfrutado em suas aulas de jardinagem. Não sente mais nenhum interesse pelas suas práticas de ioga, tampouco sente prazer nas brincadeiras com o seu pet. Não se sente triste, nem de mau humor ou desanimada. Dorme muito tarde e acorda já na hora do almoço.\n\nEssas características são sugestivas de qual sintoma clínico?",
    "options": [
      "Anedonia.",
      "Disforia.",
      "Distimia.",
      "Hipotimia."
    ],
    "correctAnswer": 0,
    "explanation": "A paciente perdeu o interesse e o prazer em atividades de que antes gostava (jardinagem, ioga, brincar com o animal), sem se sentir triste. Perda da capacidade de sentir prazer chama-se anedonia.\n\nA anedonia é um dos dois sintomas centrais do episódio depressivo maior (o outro é o humor deprimido); basta um deles, por pelo menos 2 semanas, junto de outros sintomas (alteração de sono e apetite, fadiga, culpa, dificuldade de concentração, ideação suicida) para o diagnóstico.",
    "commentary": "Disforia (B): humor desagradável, com irritabilidade, mal-estar ou tensão; a paciente nega mau humor.\n\nDistimia (C): é um transtorno (transtorno depressivo persistente), com humor deprimido na maior parte dos dias por pelo menos 2 anos — não é um sintoma, e o quadro tem só 2 meses.\n\nHipotimia (D): rebaixamento do humor, tristeza; a paciente nega se sentir triste.",
    "tip": "Perda de prazer = anedonia. Tristeza = hipotimia. Irritabilidade e mal-estar = disforia. Distimia é transtorno de ≥ 2 anos.",
    "reference": "American Psychiatric Association. DSM-5-TR, 2022. Dalgalarrondo P. Psicopatologia e Semiologia dos Transtornos Mentais, 3ª ed.",
    "tags": [
      "anedonia",
      "depressão",
      "psicopatologia"
    ]
  },
  {
    "id": "cesupa2025-11",
    "topography": "11",
    "topic": "Desenvolvimento neuropsicomotor",
    "module": "Saúde Coletiva",
    "text": "A Atenção Primária à Saúde (APS) ocupa lugar de ordenadora das diferentes Redes de Atenção, sendo uma das portas principais de entrada no Sistema Único de Saúde. No caso da organização da atenção às pessoas com TEA, destaca-se a importância da vigilância de desenvolvimento infantil.\n\nSobre TEA e a APS podemos afirmar:",
    "options": [
      "Referenciar ao neurologista pediátrico ou para o Centro de Atenção Psicossocial Infantil (CAPS infantil) os casos de sinais iniciais de atraso no desenvolvimento identificados nas consultas de puericultura.",
      "A equipe dentro da APS tem a importante tarefa de identificar sinais de alerta e alterações no desenvolvimento da criança, mediante a aplicação dos instrumentos de vigilância disponíveis na Caderneta da Criança, incluindo a aplicação da escala M-CHAT-R, e da escuta ampliada e atenta da família acerca do desenvolvimento da criança.",
      "O TEA é uma condição neurológica complexa, e apresenta especificidades que requerem o envolvimento ativo dos profissionais da saúde na elaboração de um plano de ação que promova uma melhor aprendizagem, adaptabilidade e inclusão da criança. Os professores neste caso têm um papel somente de indicar as crianças com suspeita diagnostica, mas não se envolvem nas ações do plano.",
      "A Escala M-CHAT-R é uma ferramenta muito útil atualmente no diagnóstico de autismo. Deve ser aplicada somente por médicos, para crianças de 36 a 48 anos meses de idade. A resposta aos itens da escala é baseada na observação dos pais sobre o comportamento da criança e exame físico pelo médico."
    ],
    "correctAnswer": 1,
    "explanation": "Na APS, a equipe deve acompanhar o desenvolvimento em todas as consultas de puericultura, usando os instrumentos da Caderneta da Criança, ouvindo a família e aplicando a M-CHAT-R (rastreamento de risco para autismo) na faixa recomendada (16 a 30 meses).\n\nA APS identifica sinais de alerta, inicia a estimulação e coordena o cuidado na rede. É o que descreve a alternativa B.",
    "commentary": "Encaminhar todo atraso inicial ao neurologista ou ao CAPSi (A): sinais iniciais de atraso devem primeiro ser avaliados e acompanhados na APS, com orientação e estimulação; o encaminhamento é para casos confirmados ou de risco, e a APS mantém a coordenação do cuidado.\n\nProfessores só indicam suspeitas (C): a escola participa ativamente do plano de cuidado (projeto terapêutico, inclusão escolar); o cuidado ao TEA é intersetorial.\n\nM-CHAT-R aplicada só por médicos, de 36 a 48 meses (D): a M-CHAT-R é um instrumento de rastreamento (não de diagnóstico), respondido pelos pais, aplicável por qualquer profissional treinado, entre 16 e 30 meses.",
    "tip": "M-CHAT-R: rastreamento (não diagnóstico), respondido pelos pais, 16–30 meses, por qualquer profissional da equipe.",
    "reference": "Ministério da Saúde. Linha de cuidado para a atenção às pessoas com transtornos do espectro do autismo e suas famílias na RAPS. Caderneta da Criança, 2024.",
    "tags": [
      "TEA",
      "atenção primária",
      "M-CHAT-R",
      "vigilância do desenvolvimento"
    ]
  },
  {
    "id": "cesupa2025-12",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "A PORTARIA GM/MS Nº 3.493, DE 10 DE ABRIL DE 2024 altera a Portaria de Consolidação GM/MS nº 6, de 28 de setembro de 2017, para instituir nova metodologia de cofinanciamento federal do Piso de Atenção Primária à Saúde no âmbito do Sistema Único de Saúde (SUS).\n\nConstituem componentes do cofinanciamento federal de apoio à manutenção da Atenção Primária à Saúde (APS):",
    "options": [
      "Três componentes: Fixo para manutenção das equipes- eSF e eAP e recurso de implantação para eSF, eAP, eSB e eMulti; de vínculo e acompanhamento territorial para as eSF e Eap e de qualidade para as eSF, eAP, eSB e eMulti.",
      "Três componentes: Capitação ponderada, pagamento por desempenho e incentivo para ações estratégicas para eSF, eAP, eSB e eMulti. E, mais recentemente, Per Capita de base Populacional.",
      "Seis componentes: Fixo- manutenção das eSF e eAP e recurso de implantação para eSF, eAP, eSB e eMulti; de vínculo e acompanhamento territorial para as eSF e eAP; componente de qualidade para as eSF, eAP, eSB e eMulti; para implantação e manutenção de programas, serviços, profissionais e outras composições de equipes que atuam na APS; para Atenção à Saúde Bucal, e de Per capita de base populacional para ações no âmbito da APS.",
      "Quatro componentes: Capitação ponderada, pagamento por desempenho e incentivo para ações estratégicas para eSF, eAP, eSB e eMulti. E, mais recentemente, Per Capita de base Populacional."
    ],
    "correctAnswer": 2,
    "explanation": "A Portaria GM/MS nº 3.493/2024 substituiu o Previne Brasil e criou a nova metodologia de cofinanciamento federal da APS, com seis componentes:\n\n• Fixo: manutenção das eSF e eAP e implantação de eSF, eAP, eSB e eMulti.\n• Vínculo e acompanhamento territorial: eSF e eAP.\n• Qualidade: eSF, eAP, eSB e eMulti.\n• Implantação e manutenção de programas, serviços, profissionais e outras composições de equipes.\n• Atenção à saúde bucal.\n• Per capita de base populacional.",
    "commentary": "Três componentes, incluindo vínculo e qualidade (A): a lista está incompleta — faltam os componentes de programas e serviços, de saúde bucal e o per capita de base populacional.\n\nCapitação ponderada, pagamento por desempenho e ações estratégicas (B): esses eram os componentes do Previne Brasil (Portaria 2.979/2019), substituído em 2024.\n\nQuatro componentes do Previne Brasil + per capita (D): mistura o modelo antigo com o novo; não corresponde à portaria de 2024.",
    "tip": "Novo financiamento da APS (2024): 6 componentes — fixo, vínculo/territorial, qualidade, programas, saúde bucal e per capita.",
    "reference": "Brasil. Ministério da Saúde. Portaria GM/MS nº 3.493, de 10 de abril de 2024.",
    "tags": [
      "financiamento da APS",
      "SUS",
      "política de saúde"
    ]
  },
  {
    "id": "cesupa2025-13",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "A análise e a abordagem das pessoas que consultam com frequência na APS devem ser singulares e personalizadas. A recorrência frequente à consulta é um processo complexo associado a várias dimensões e a múltiplos fatores, muitos dos quais estão fora do controle do médico.\n\nConstituem Dimensões e fatores associados à procura frequente de consultas em medicina de família e comunidade:",
    "options": [
      "Pessoais: Sexo Masculino e idade jovem/economicamente ativo.",
      "Família, problemas e acontecimentos vitais: casal em união estável com filhos pequenos.",
      "Doenças, problemas e situação de saúde: doenças agudas e autolimitadas.",
      "Médicas e relação médico-pessoa: Atitude (paternalista versus capacitadora)."
    ],
    "correctAnswer": 3,
    "explanation": "A procura frequente de consultas (hiperutilização) depende de várias dimensões: características pessoais, família e acontecimentos de vida, doenças e situação de saúde, e fatores do médico e da relação médico-pessoa.\n\nNesta última dimensão, a atitude do médico pesa: uma postura paternalista, que gera dependência e não estimula o autocuidado, aumenta as consultas; uma postura capacitadora, que dá autonomia, tende a reduzi-las. Por isso a alternativa D descreve um fator associado.",
    "commentary": "Sexo masculino e idade jovem (A): o perfil associado à hiperutilização é o oposto — mais frequente em mulheres, idosos e pessoas fora do mercado de trabalho.\n\nCasal em união estável com filhos pequenos (B): os fatores familiares associados são crises e acontecimentos vitais estressantes (luto, separação, desemprego, problemas familiares), não a união estável em si.\n\nDoenças agudas e autolimitadas (C): a hiperutilização está associada a doenças crônicas, multimorbidade, sintomas sem explicação médica e transtornos mentais (ansiedade, depressão).",
    "tip": "Hiperutilizador: mulher, idosa, multimorbidade, sofrimento mental, crise familiar — e médico paternalista.",
    "reference": "Gusso G, Lopes JMC. Tratado de Medicina de Família e Comunidade, 2ª ed. Capítulo: Pessoas que consultam frequentemente.",
    "tags": [
      "medicina de família e comunidade",
      "hiperutilização",
      "relação médico-paciente"
    ]
  },
  {
    "id": "cesupa2025-14",
    "topography": "12",
    "topic": "Polifarmácia",
    "module": "Saúde Coletiva",
    "text": "Mulher, 81 anos, hipertensa, com diabetes melito tipo 2, dislipidemia e histórico de demência tipo Alzheimer. Não apresenta complicações decorrentes de doenças crônicas. Vive com sua filha, que afere a sua pressão arterial (PA) (Média de 100/60 mmHg) e a glicemia capilar (com médias que não passam os 80 mg/dL) diariamente, sendo a última hemoglobina (Hb) glicada de 6,0%. Em uso contínuo farmacológico de sinvastatina 20 mg, insulina NPH à noite, trazodona 100 mg, a cada 12 horas, mirtazapina 15 mg, furosemida 40 mg pela manhã, Losartana 50 mg de 12 em 12 horas e diazepam 5 mg, à noite. Eventualmente, quando está agitada, a filha oferece 01 comprimido de Quetiapina 50 mg; isso acontece pelo menos 3 vezes na semana. Filha vem à consulta na ESF, solicitando renovação de receituário com os medicamentos listados. A história descrita acima revela caso de polifarmácia com indicação de desprescrição de alguns medicamentos como prevenção quaternária.\n\nQuanto às etapas para efetuar o processo de desprescrição, assinale a alternativa que apresenta a sequência correta:\n\n• A — Seguimento, apoio e documentação.\n• B — Identificação dos medicamentos potencialmente inadequados.\n• C — Obtenção da história completa dos medicamentos.\n• D — Determinação dos fármacos a serem desprescritos e as prioridades.\n• E — Planejamento e início.",
    "options": [
      "A, B, C, D, E.",
      "C, B, D, E, A.",
      "E, A, C, B, D.",
      "C, E, A, D, B."
    ],
    "correctAnswer": 1,
    "explanation": "Idosa de 81 anos com demência, PA média de 100/60 mmHg, glicemias ≤ 80 mg/dL e HbA1c de 6,0% em uso de insulina — sinais de supertratamento —, além de vários psicotrópicos (trazodona, mirtazapina, diazepam, quetiapina). É um caso clássico para desprescrição.\n\nO processo segue uma ordem lógica:\n\n• C — obter a história completa dos medicamentos (o que usa, por quê, desde quando, quem prescreveu).\n• B — identificar os potencialmente inadequados (critérios de Beers, STOPP).\n• D — decidir quais retirar e em que ordem de prioridade.\n• E — planejar e iniciar a retirada, em geral um por vez e de forma gradual.\n• A — fazer seguimento, apoio e documentação.",
    "commentary": "A, B, C, D, E (A): começa pelo seguimento, que é a última etapa.\n\nE, A, C, B, D (C): começa pelo planejamento, antes de conhecer os medicamentos em uso.\n\nC, E, A, D, B (D): planeja e acompanha antes de identificar os medicamentos inadequados e definir prioridades.",
    "tip": "Desprescrição: história → identificar inadequados → priorizar → planejar e iniciar → seguir e documentar.",
    "reference": "Scott IA et al. Reducing inappropriate polypharmacy: the process of deprescribing. JAMA Intern Med, 2015. Sociedade Brasileira de Geriatria e Gerontologia. Consenso brasileiro de medicamentos potencialmente inapropriados para idosos, 2016.",
    "tags": [
      "desprescrição",
      "polifarmácia",
      "prevenção quaternária",
      "idoso"
    ]
  },
  {
    "id": "cesupa2025-15",
    "topography": "15",
    "topic": "Testes diagnósticos",
    "module": "Saúde Coletiva",
    "text": "A coqueluche é considerada uma doença reemergente, pois a sua incidência vem aumentando globalmente, em especial na Europa, mas também no Brasil. Em 2024, por exemplo, foram notificados dois óbitos pela doença no Paraná. Em relação ao diagnóstico laboratorial de coqueluche, segundo o CDC, o padrão-ouro é a cultura, com uma especificidade de 100%. A técnica da Polymerase Chain Reaction (PCR) em tempo real apresenta uma especificidade menor, mas apresenta maior sensibilidade. (https://www.cdc.gov/pertussis/php/laboratories/index.html)\n\nConsiderando esses dados, marque a afirmativa CORRETA em relação ao diagnóstico de coqueluche:",
    "options": [
      "Quando comparado à Cultura, o PCR apresentará mais resultados falso-negativos.",
      "Quando comparado à Cultura, o Valor Preditivo do PCR positivo não será 100%.",
      "Quando comparado à Cultura, o PCR apresentará menos resultados falso-positivos.",
      "Quando comparado à Cultura, o Valor Preditivo positivo do PCR será 100%."
    ],
    "correctAnswer": 1,
    "explanation": "A cultura é o padrão-ouro, com especificidade de 100%: não tem falso-positivos. O PCR tem sensibilidade maior (detecta mais casos verdadeiros) e especificidade menor.\n\nEspecificidade menor que 100% significa que o PCR terá alguns falso-positivos. Se há falso-positivos, nem todo PCR positivo corresponde a doença verdadeira: o valor preditivo positivo do PCR não será 100%.",
    "commentary": "PCR com mais falso-negativos (A): o PCR é mais sensível que a cultura, logo terá menos falso-negativos.\n\nPCR com menos falso-positivos (C): com especificidade menor, o PCR terá mais falso-positivos que a cultura.\n\nVPP do PCR de 100% (D): só seria 100% se não houvesse falso-positivos, o que exige especificidade de 100%.",
    "tip": "Sensibilidade alta → poucos falso-negativos (bom para excluir). Especificidade < 100% → há falso-positivos → VPP < 100%.",
    "reference": "Medronho RA. Epidemiologia, 2ª ed. CDC. Pertussis: Laboratory Testing, 2024.",
    "tags": [
      "testes diagnósticos",
      "sensibilidade e especificidade",
      "valor preditivo",
      "coqueluche"
    ]
  },
  {
    "id": "cesupa2025-16",
    "topography": "15",
    "topic": "Testes diagnósticos",
    "module": "Saúde Coletiva",
    "text": "O antígeno Carcinoembrionário (CEA) é um marcador para o diagnóstico de CA colo-retal. A sua sensibilidade e especificidade, porém, podem variar com o estágio da doença. O ponto de corte usualmente aceito é o de 20 ng/ml. Porém, no monitoramento dos casos que foram tratados cirurgicamente, um ponto de corte de 10 ng/ml é utilizado para marcador de possível recidiva.\n\nAssinale a afirmativa correta na interpretação dessa redução no ponto de corte:",
    "options": [
      "Ela indica um aumento na especifidade do teste.",
      "Ela indica uma redução na sensibilidade.",
      "Ela indica uma redução na espeficidade do teste sem alterar sua sensibilidade.",
      "Ela indica um aumento na sensibilidade do teste."
    ],
    "correctAnswer": 3,
    "explanation": "Em um teste quantitativo como o CEA, baixar o ponto de corte (de 20 para 10 ng/mL) faz com que mais pessoas sejam classificadas como positivas.\n\nCom isso, mais doentes verdadeiros são detectados — a sensibilidade aumenta —, ao custo de mais falso-positivos — a especificidade diminui. No seguimento pós-operatório, interessa não deixar passar uma recidiva, por isso se usa um corte mais baixo.",
    "commentary": "Aumento da especificidade (A): ocorreria se o ponto de corte subisse; com corte menor, a especificidade cai.\n\nRedução da sensibilidade (B): é o contrário — corte mais baixo aumenta a sensibilidade.\n\nReduz a especificidade sem alterar a sensibilidade (C): sensibilidade e especificidade variam em sentidos opostos quando se muda o ponto de corte; não é possível mudar só uma.",
    "tip": "Baixou o ponto de corte → mais positivos → ↑ sensibilidade e ↓ especificidade. Subiu → o inverso.",
    "reference": "Fletcher RH, Fletcher SW, Fletcher GS. Epidemiologia Clínica: Elementos Essenciais, 5ª ed.",
    "tags": [
      "testes diagnósticos",
      "ponto de corte",
      "sensibilidade e especificidade",
      "CEA"
    ]
  },
  {
    "id": "cesupa2025-17",
    "topography": "15",
    "topic": "Vigilância epidemiológica",
    "module": "Saúde Coletiva",
    "text": "Segundo dados do Ministério da Saúde, a febre do vírus Oropouche é uma doença causada por um arbovírus (vírus transmitido por artrópodes) do gênero Orthobunyavirus, da família Peribunyaviridae. O Orthobunyavirus oropoucheense (OROV) foi isolado pela primeira vez no Brasil em 1960, a partir de amostra de sangue de uma bicho-preguiça (Bradypus tridactylus) capturada durante a construção da rodovia Belém-Brasília. Desde então, casos isolados e surtos foram relatados no Brasil, principalmente nos estados da região Amazônica. Também já foram relatados casos e surtos em outros países das Américas Central e do Sul.\n\nEm relação à Vigilância Epidemiológica da Febre do Vírus Oropouche, podemos afirmar:",
    "options": [
      "É Doença de notificação imediata em todo território nacional.",
      "É doença de notificação obrigatória, mas não imediata.",
      "Somente os surtos devem ser notificados e investigados.",
      "Não é agravo de notificação obrigatória na região extra-amazônica."
    ],
    "correctAnswer": 0,
    "explanation": "Com a expansão da febre do Oropouche para fora da Amazônia e a confirmação de transmissão vertical e óbitos em 2024, o Ministério da Saúde passou a tratá-la como doença de notificação compulsória imediata (em até 24 horas) em todo o território nacional.\n\nOs casos suspeitos devem ser notificados e investigados, com coleta de amostra para diagnóstico laboratorial, e há atenção especial a gestantes (risco de óbito fetal e malformações).",
    "commentary": "Notificação obrigatória, mas não imediata (B): a notificação é imediata, em até 24 horas.\n\nSó surtos notificados (C): cada caso suspeito deve ser notificado, não apenas os surtos.\n\nNão é de notificação obrigatória fora da Amazônia (D): a obrigatoriedade vale para todo o país, principalmente porque a doença se espalhou para regiões extra-amazônicas.",
    "tip": "Oropouche: notificação imediata (24 h) em todo o país; atenção à transmissão vertical.",
    "reference": "Ministério da Saúde. Nota técnica sobre a vigilância da febre do Oropouche, 2024. Guia de Vigilância em Saúde, 6ª ed., 2023.",
    "tags": [
      "febre do Oropouche",
      "vigilância epidemiológica",
      "notificação compulsória",
      "arboviroses"
    ]
  },
  {
    "id": "cesupa2025-18",
    "topography": "15",
    "topic": "Estudos epidemiológicos",
    "module": "Saúde Coletiva",
    "text": "Os estudos caso-controle aninhados a uma coorte podem ser do tipo caso-coorte, em que os controles são selecionados a partir de uma amostra aleatória da população selecionada da coorte.\n\nEscolha uma vantagem clara deste tipo de estudo:",
    "options": [
      "Essa é uma metodologia para pareamento de casos e controles, através da amostra aleatória da coorte.",
      "Uma vantagem sobre outras metodologias de estudos caso-controle é que inclui casos incidentes.",
      "Uma vantagem clara é que pode tornar casos e controles equilibrados quanto à exposição.",
      "Uma grande vantagem é que são menos propensos a viés de perda de seguimento, comum nos estudos casos controles."
    ],
    "correctAnswer": 1,
    "explanation": "No estudo caso-coorte, os casos são todos os que surgem durante o seguimento da coorte (casos incidentes) e os controles vêm de uma amostra aleatória da coorte inteira, sorteada no início.\n\nComo os casos são incidentes e as exposições foram medidas antes do desfecho, o desenho reduz o viés de memória e a dúvida sobre a temporalidade, comuns nos estudos caso-controle clássicos, que costumam usar casos prevalentes. Essa é a vantagem apontada na alternativa B. Outra vantagem é que a mesma subcoorte serve de controle para vários desfechos.",
    "commentary": "Pareamento de casos e controles (A): no caso-coorte não há pareamento; a subcoorte é sorteada aleatoriamente, sem considerar quem será caso.\n\nEquilibrar casos e controles quanto à exposição (C): a exposição é justamente o que se compara entre os grupos; o desenho não serve para equilibrá-la.\n\nMenos viés de perda de seguimento, \"comum nos caso-controle\" (D): perda de seguimento é problema dos estudos de coorte, não dos caso-controle; e o caso-coorte, por estar aninhado numa coorte, também está sujeito a ela.",
    "tip": "Caso-coorte: casos incidentes da coorte + subcoorte aleatória como controles; serve para vários desfechos.",
    "reference": "Rothman KJ, Greenland S, Lash TL. Modern Epidemiology, 3ª ed. Medronho RA. Epidemiologia, 2ª ed.",
    "tags": [
      "estudos epidemiológicos",
      "caso-controle aninhado",
      "caso-coorte"
    ]
  },
  {
    "id": "cesupa2025-19",
    "topography": "15",
    "topic": "Bioestatística",
    "module": "Saúde Coletiva",
    "text": "Ensaios clínicos randomizados duplos-cegos constituem o padrão-ouro para os estudos de eficácia vacinal, embora outros estudos de eficácia/efetividade vacinal possam utilizar outros tipos de estudo. Na avaliação deste tipo de estudo, a medida da eficácia vacinal entendida como a redução da susceptibilidade ao risco de infecção é avaliada também na sua significância estatística.\n\nObservando a tabela abaixo de um artigo sobre eficácia vacinal da vacina Qdenga, contra a dengue, marque a alternativa verdadeira:\n\nEficácia vacinal (IC 95%), por sorotipo — Qdenga (CID 2022;75:107):\n\n• DENV-1: 45,4 (24,5 a 60,6)\n• DENV-2: 72,1 (51,6 a 84,0)\n• DENV-3: 15,2 (−46,1 a 50,8)\n• DENV-4: 61,9 (−24,9 a 88,4)",
    "options": [
      "A EFV foi estatisticamente significativa para os 4 sorotipos.",
      "A EFV foi estatisticamente significativa somente para os sorotipos 1, 2, e 4.",
      "A EFV foi estatisticamente significativa somente para os tipos 1 e 2.",
      "A EFV foi estatisticamente significativa para o sorotipo 2."
    ],
    "correctAnswer": 2,
    "explanation": "Na eficácia vacinal, o resultado é estatisticamente significativo quando o intervalo de confiança de 95% não inclui o zero (eficácia nula). Na tabela:\n\n• DENV-1: 45,4% (24,5 a 60,6) — não inclui o zero → significativa.\n• DENV-2: 72,1% (51,6 a 84,0) — não inclui o zero → significativa.\n• DENV-3: 15,2% (−46,1 a 50,8) — inclui o zero → não significativa.\n• DENV-4: 61,9% (−24,9 a 88,4) — inclui o zero → não significativa.\n\nLogo, a eficácia foi significativa só para os sorotipos 1 e 2. A estimativa pontual alta do DENV-4 (61,9%) engana: o intervalo é muito largo porque houve poucos casos desse sorotipo.",
    "commentary": "Os 4 sorotipos (A): para DENV-3 e DENV-4 o intervalo de confiança passa pelo zero.\n\nSorotipos 1, 2 e 4 (B): DENV-4 tem estimativa pontual alta, mas o IC (−24,9 a 88,4) inclui o zero, então não é significativo.\n\nSomente o sorotipo 2 (D): o DENV-1 também é significativo (IC de 24,5 a 60,6).",
    "tip": "Eficácia/redução de risco: IC 95% que cruza o 0 → não significativo. Para RR/OR, o valor nulo é 1.",
    "reference": "Rivera L et al. Three-year efficacy and safety of Takeda's dengue vaccine candidate (TAK-003). Clin Infect Dis, 2022;75:107.",
    "tags": [
      "bioestatística",
      "intervalo de confiança",
      "eficácia vacinal",
      "dengue"
    ]
  },
  {
    "id": "cesupa2025-20",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "O Matriciamento em Saúde Mental caracteriza-se como um modelo de produção de saúde em que duas ou mais equipes, em um processo de construção compartilhada e interdisciplinar, criam uma proposta de intervenção pedagógico-terapêutica no âmbito da integração da saúde mental à atenção primária à saúde, em um projeto de cuidado em rede. A partir dos cuidados em rede, inerentes à Rede de Atenção Psicossocial (RAPS), e com base em um Sistema de Saúde Comunitária que envolve as Equipes de Saúde da Família, a RAPS é composta por vários serviços.\n\nAssinale a alternativa que menciona todos os pontos de atenção constitutivos da RAPS:",
    "options": [
      "A RAPS é formada pelos seguintes pontos de atenção: Unidade Básica de Saúde/Estratégia de Saúde da Família (UBS/ESF), Centros de Atenção Psicossocial (CAPS), Unidades de Acolhimento (UA), Serviços Residenciais Terapêuticos (SRT), Programa de Volta para Casa (PVC), Unidades de Pronto Atendimento (UA), SAMU, Hospitais Gerais e Ministério Público.",
      "A RAPS é formada pelos seguintes pontos de atenção: Unidade Básica de Saúde/Estratégia de Saúde da Família (UBS/ESF), Centros de Atenção Psicossocial (CAPS), Unidades de Acolhimento (UA), Ministério Público, Programa de Volta para Casa (PVC), Unidades de Pronto Atendimento (UA), SAMU, Hospitais Gerais e Centros de Convivência e Cultura.",
      "A RAPS é formada pelos seguintes pontos de atenção: Unidade Básica de Saúde/Estratégia de Saúde da Família (UBS/ESF), Centros de Atenção Psicossocial (CAPS), Unidades de Acolhimento (UA), Serviços Residenciais Terapêuticos (SRT), Programa de Volta para Casa (PVC), Unidades de Pronto Atendimento (UA), SAMU, Hospitais Gerais e Centros de Convivência e Cultura.",
      "A RAPS é formada pelos seguintes pontos de atenção: Unidade Básica de Saúde/Estratégia de Saúde da Família (UBS/ESF), Centros de Atenção Psicossocial (CAPS), Ministério Público, Serviços Residenciais Terapêuticos (SRT), Programa de Volta para Casa (PVC), Unidades de Pronto Atendimento (UA), SAMU, Hospitais Gerais e Centros de Convivência e Cultura."
    ],
    "correctAnswer": 2,
    "explanation": "A Rede de Atenção Psicossocial (Portaria nº 3.088/2011, hoje na Portaria de Consolidação nº 3/2017) é formada por pontos de atenção de saúde e de reabilitação, entre eles:\n\n• Atenção básica: UBS/ESF, consultório na rua, centros de convivência e cultura.\n• Atenção especializada: CAPS em suas modalidades.\n• Urgência e emergência: SAMU, UPA, pronto-socorro.\n• Atenção residencial de caráter transitório: unidades de acolhimento.\n• Atenção hospitalar: leitos de saúde mental em hospital geral.\n• Desinstitucionalização: serviços residenciais terapêuticos e Programa de Volta para Casa.\n\nA alternativa C é a única que traz esses pontos sem incluir órgãos que não fazem parte da rede.",
    "commentary": "Lista com Ministério Público (A): o Ministério Público é órgão de controle e garantia de direitos, não ponto de atenção da RAPS; e faltam os centros de convivência.\n\nMinistério Público no lugar dos serviços residenciais terapêuticos (B): retira um ponto de atenção da rede e inclui um órgão externo.\n\nMinistério Público no lugar das unidades de acolhimento (D): mesmo erro — tira um ponto de atenção da RAPS e inclui o Ministério Público.",
    "tip": "RAPS: UBS, CAPS, UA, SRT, Volta para Casa, centros de convivência, SAMU/UPA e hospital geral. Ministério Público não faz parte.",
    "reference": "Brasil. Ministério da Saúde. Portaria nº 3.088, de 23 de dezembro de 2011 (Rede de Atenção Psicossocial).",
    "tags": [
      "RAPS",
      "saúde mental",
      "matriciamento",
      "SUS"
    ]
  },
  {
    "id": "cesupa2025-21",
    "topography": "3.1",
    "topic": "Hemorragia digestiva alta",
    "module": "Cirurgia",
    "text": "Um paciente de 52 anos, sem comorbidades conhecidas, é admitido ao pronto-socorro com hematêmese e sinais de hipotensão (PA 80/50 mmHg e FC 115 bpm). Ao exame físico, apresenta pele fria e sudoreica, tempo de enchimento capilar de 3s. A hemoglobina é de 8,4 g/dL. O paciente não apresenta histórico de etilismo ou uso de anticoagulantes, mas faz uso ocasional de anti-inflamatórios não esteroidais (AINEs), em virtude de dores em ombro direito.\n\nQual dos itens abaixo é a estratégia mais adequada para o manejo inicial deste paciente?",
    "options": [
      "Realizar a endoscopia imediatamente, postergando otimização clínica, baseado no conceito “STOP THE BLEED\", e iniciar inibidor de bomba de prótons assim que possível, provavelmente por sonda nasoenteral.",
      "Transferir o paciente para UTI e realizar a endoscopia após a estabilização completa, avaliando necessidade de terapia intravenosa com inibidor de bomba de prótons após endoscopia.",
      "Iniciar ressuscitação volêmica, inibidor de bomba de prótons intravenoso em alta dose e realizar a endoscopia em até 24 horas para identificar e tratar a lesão responsável pela hemorragia.",
      "Postergar a endoscopia por 48 horas e focar na ressuscitação volêmica e hemotransfusão até a hemoglobina atingir 9g/dl, exceto se paciente cardiopata cujo alvo deve ser 12g/dl."
    ],
    "correctAnswer": 2,
    "explanation": "Hematêmese com choque (PA 80/50 mmHg, FC 115 bpm, pele fria, enchimento capilar lento) em usuário de AINE: hemorragia digestiva alta, provavelmente por úlcera péptica.\n\nA sequência é: ressuscitação primeiro (dois acessos calibrosos, cristaloide, transfusão com alvo de Hb 7–8 g/dL, ou 8–9 g/dL se cardiopata), IBP intravenoso em alta dose e endoscopia em até 24 horas após a estabilização, para diagnosticar e tratar a lesão (terapia endoscópica combinada em úlceras de alto risco). Em pacientes que não estabilizam, a endoscopia pode ser antecipada (até 12 horas).",
    "commentary": "Endoscopia imediata sem otimização clínica (A): endoscopia no paciente em choque, sem ressuscitação, aumenta o risco de complicações (aspiração, parada); a estabilização vem antes. O IBP é dado por via venosa, não por sonda.\n\nEndoscopia só após estabilização completa na UTI, IBP só depois (B): o IBP deve começar antes da endoscopia, e não é preciso esperar estabilização \"completa\"; a meta é endoscopia em até 24 horas.\n\nAdiar a endoscopia por 48 horas, com Hb-alvo de 9 ou 12 g/dL (D): o atraso aumenta ressangramento e mortalidade; transfusão liberal (alvo alto) piora o desfecho. Alvo de 12 g/dL não existe em nenhuma diretriz.",
    "tip": "HDA: ressuscitar → IBP IV → EDA em ≤ 24 h. Transfundir com Hb < 7 (< 8 se cardiopata).",
    "reference": "Laine L et al. ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding, 2021. Gralnek IM et al. ESGE Guideline: Non-variceal upper GI hemorrhage, 2021.",
    "tags": [
      "hemorragia digestiva alta",
      "úlcera péptica",
      "endoscopia",
      "AINE"
    ]
  },
  {
    "id": "cesupa2025-22",
    "topography": "3.3",
    "topic": "Colangite aguda",
    "module": "Cirurgia",
    "text": "Paciente de 60 anos, apresenta dor abdominal em hipocôndrio direito associada à febre nas últimas 12 horas. Durante o exame físico, encontra-se febril (38,7°C), ictérico (2+/4+) e com pressão arterial de 110/70 mmHg. A palpação do abdome revela dor à compressão em hipocôndrio direito, sem sinais de peritonite. Os exames laboratoriais mostram leucocitose com desvio à esquerda e elevação de bilirrubina direta e fosfatase alcalina. Uma ultrassonografia abdominal evidencia dilatação das vias biliares intra e extra-hepáticas, com presença de cálculo em via biliar principal.\n\nDentre os itens abaixo, qual a melhor conduta terapêutica para este paciente?",
    "options": [
      "Antibioticoterapia e seguimento ambulatorial para programação cirúrgica de derivação biliodigestiva.",
      "Antibioticoterapia e colangiopancreatografia retrógrada endoscópica para desobstrução da via biliar.",
      "Cirurgia aberta de urgência para remoção do cálculo e drenagem biliar externa com dreno de Kher.",
      "Hidratação venosa e antibioticoterapia para esfriar o processo e abordagem cirúrgica após 10 dias."
    ],
    "correctAnswer": 1,
    "explanation": "Dor em hipocôndrio direito, febre e icterícia (tríade de Charcot), com colestase laboratorial e cálculo no colédoco com dilatação das vias biliares: colangite aguda por coledocolitíase.\n\nO tratamento tem dois pilares: antibiótico com cobertura para gram-negativos e anaeróbios, e desobstrução da via biliar. A CPRE com papilotomia e retirada do cálculo é o método de escolha, pois drena e trata a causa com menos morbidade que a cirurgia. Na colangite moderada (como esta), drenagem precoce em 24–48 horas; na grave (choque, confusão), urgente. Depois, colecistectomia.",
    "commentary": "Antibiótico e cirurgia ambulatorial de derivação biliodigestiva (A): deixar a via biliar obstruída infectada é perigoso; derivação biliodigestiva não é o tratamento da coledocolitíase simples.\n\nCirurgia aberta de urgência com dreno de Kehr (C): a exploração cirúrgica da via biliar tem morbimortalidade maior; fica para falha ou indisponibilidade da CPRE.\n\nHidratação e antibiótico, cirurgia após 10 dias (D): a obstrução persiste e a colangite pode evoluir para sepse; a drenagem não deve ser adiada.",
    "tip": "Charcot (febre + icterícia + dor) = colangite: antibiótico + CPRE. Pêntade de Reynolds (choque + confusão) = CPRE urgente.",
    "reference": "Tokyo Guidelines 2018 (TG18): diagnostic criteria and management of acute cholangitis. J Hepatobiliary Pancreat Sci, 2018.",
    "tags": [
      "colangite aguda",
      "coledocolitíase",
      "CPRE",
      "tríade de Charcot"
    ]
  },
  {
    "id": "cesupa2025-23",
    "topography": "7.1",
    "topic": "Dissecção de aorta",
    "module": "Cirurgia",
    "text": "Um paciente de 58 anos, hipertenso e tabagista, em acompanhamento ambulatorial apresentou achado de aumento de diâmetro de aorta ascendente em tomografia de tórax realizada para avaliação de quadro respiratório. O paciente é assintomático, no momento; ao ecocardiograma sem sinais de insuficiência aórtica ou comprometimento da função ventricular; a angiotomografia de aorta confirmou dilatação da aorta ascendente com maior diâmetro de 5,8 cm.\n\nDentre os itens abaixo, qual a conduta mais adequada para este paciente?",
    "options": [
      "Cirurgia eletiva para correção de aneurisma da aorta ascendente com tubo de Dacron.",
      "Acompanhamento clínico com controle de fatores de risco, visto que paciente é assintomático.",
      "Início de tratamento com novos anticoagulantes orais para evitar tromboembolismo.",
      "Solicitação de novo exame de imagem em 6 meses para avaliação da velocidade de crescimento."
    ],
    "correctAnswer": 0,
    "explanation": "Aneurisma de aorta ascendente de 5,8 cm, assintomático, em hipertenso e tabagista.\n\nNa aorta ascendente, o risco de dissecção e ruptura aumenta muito a partir de 5,5 cm, que é o limiar para cirurgia eletiva mesmo sem sintomas (limiar menor, de 4,5–5,0 cm, em síndrome de Marfan, valva aórtica bicúspide ou crescimento rápido). A correção é feita com substituição da aorta ascendente por tubo de Dacron. Junto, controle rigoroso da PA e cessação do tabagismo.",
    "commentary": "Só acompanhamento clínico por ser assintomático (B): a maioria dos aneurismas é assintomática até romper ou dissecar; com 5,8 cm, a indicação é cirúrgica.\n\nAnticoagulantes orais (C): não há indicação de anticoagulação para aneurisma de aorta; a medida não previne dissecção.\n\nNovo exame em 6 meses (D): o seguimento por imagem é para aneurismas abaixo do limiar cirúrgico; acima de 5,5 cm, esperar expõe a risco de dissecção.",
    "tip": "Aorta ascendente ≥ 5,5 cm → cirurgia eletiva (≥ 5,0 se Marfan, bicúspide ou crescimento rápido). Aorta abdominal: ≥ 5,5 cm no homem.",
    "reference": "Isselbacher EM et al. 2022 ACC/AHA Guideline for the Diagnosis and Management of Aortic Disease. Circulation, 2022.",
    "tags": [
      "aneurisma de aorta torácica",
      "aorta ascendente",
      "cirurgia vascular"
    ]
  },
  {
    "id": "cesupa2025-24",
    "topography": "4.2",
    "topic": "Torção testicular",
    "module": "Cirurgia",
    "text": "Um adolescente de 15 anos é levado ao pronto-socorro por dor intensa e súbita no testículo direito, iniciada há aproximadamente 2 horas. Ele não apresenta febre, mas relata náuseas. Ao exame físico, observa-se um testículo direito edemaciado, endurecido, elevado e horizontalizado, com ausência do reflexo cremastérico ipsilateral e dor à palpação. O testículo esquerdo apresenta-se normal. Não há sinais de trauma recente.\n\nDentre os itens abaixo, qual é a conduta mais apropriada para esse paciente?",
    "options": [
      "Início de antibióticos e analgésicos, seguido de acompanhamento ambulatorial.",
      "USG Doppler para confirmar torção testicular, analgesia e avaliação com Urologista em até 48h.",
      "Acionar Urologista para exploração testicular cirúrgica de emergência.",
      "Início de anti-inflamatórios não esteroides e repouso com utilização de suspensório escrotal."
    ],
    "correctAnswer": 2,
    "explanation": "Adolescente com dor testicular súbita e intensa há 2 horas, náuseas, testículo elevado e horizontalizado e reflexo cremastérico ausente: torção do cordão espermático (torção testicular).\n\nÉ uma emergência cirúrgica, e o tempo determina a viabilidade do testículo: salvamento alto até 6 horas, caindo muito depois disso. Com quadro clínico típico, não se deve atrasar a cirurgia por exames. A conduta é exploração escrotal de emergência, com distorção e orquidopexia (e fixação do testículo contralateral). Distorção manual pode ser tentada enquanto se prepara a cirurgia, mas não a substitui.",
    "commentary": "Antibiótico, analgésico e seguimento ambulatorial (A): trata epididimite/orquite, que tem início mais gradual, febre, disúria e reflexo cremastérico presente.\n\nUSG Doppler e urologista em até 48 horas (B): o Doppler pode ajudar em casos duvidosos, mas não deve atrasar a cirurgia num quadro típico; esperar 48 horas significa perder o testículo.\n\nAINE, repouso e suspensório (D): conduta para orquiepididimite ou trauma leve, não para torção.",
    "tip": "Dor testicular súbita + testículo alto e horizontal + cremastérico ausente = torção: cirurgia já, sem esperar exame (janela de 6 h).",
    "reference": "Associação Americana de Urologia / EAU Guidelines on Paediatric Urology – Acute scrotum, 2023.",
    "tags": [
      "torção testicular",
      "escroto agudo",
      "emergência urológica"
    ]
  },
  {
    "id": "cesupa2025-25",
    "topography": "16",
    "topic": "Trauma abdominal",
    "module": "Cirurgia",
    "text": "Um homem de 30 anos é admitido no pronto-socorro após sofrer uma perfuração por arma branca na região do epigástrio. Na admissão, ele está confuso, sudoreico e apresenta palidez importante. A pressão arterial medida é de 90/60 mmHg e a frequência cardíaca é de 130 bpm. Foi realizado FAST, que identificou líquido livre na cavidade abdominal.\n\nApós a avaliação pelo ABCDE do trauma, qual a conduta mais adequada no manejo deste paciente?",
    "options": [
      "Transferência para UTI para estabilização, utilizando estratégia de hipotensão permissiva, ativação de protocolo de transfusão maciça e reavaliações seriadas.",
      "Monitorização contínua, hemotransfusão, visto que Shock Index 1.44 e ABC score > 1 e realização de tomografia de abdome para definição de conduta.",
      "Observação clínica em unidade de terapia intensiva (UTI), para avaliação pela equipe de cirurgia em até 6h após hemotransfusão de sangue O negativo.",
      "Realização imediata de laparotomia exploradora e ativação do protocolo de transfusão maciça, visto que Shock Index 1.44 e ABC score > 1."
    ],
    "correctAnswer": 3,
    "explanation": "Ferimento por arma branca no epigástrio, com choque (PA 90/60 mmHg, FC 130 bpm, confusão, palidez) e FAST positivo para líquido livre: trauma abdominal penetrante com instabilidade hemodinâmica.\n\nNesse cenário, a indicação é laparotomia exploradora imediata para controle do sangramento, junto com ativação do protocolo de transfusão maciça. O índice de choque (FC/PAS = 130/90 ≈ 1,44) e o escore ABC ≥ 2 (penetrante, PAS ≤ 90, FC ≥ 120, FAST positivo — aqui, 4 pontos) predizem necessidade de transfusão maciça. Até o controle cirúrgico, usa-se hipotensão permissiva.",
    "commentary": "UTI com hipotensão permissiva e reavaliações (A): o paciente sangra dentro do abdome; a estabilização só vem com o controle cirúrgico.\n\nTomografia para definir conduta (B): a tomografia é para o paciente estável; o paciente instável não deve ir ao tomógrafo.\n\nObservação na UTI e avaliação cirúrgica em até 6 horas (C): atrasa o controle do sangramento num paciente em choque; o atraso aumenta a mortalidade.",
    "tip": "Trauma penetrante + instabilidade + FAST positivo = laparotomia imediata. TC só no paciente estável.",
    "reference": "American College of Surgeons. ATLS – Advanced Trauma Life Support, 10ª ed., 2018.",
    "tags": [
      "trauma abdominal penetrante",
      "laparotomia exploradora",
      "transfusão maciça",
      "FAST"
    ]
  },
  {
    "id": "cesupa2025-26",
    "topography": "16",
    "topic": "Pré-operatório",
    "module": "Cirurgia",
    "text": "No que diz respeito à avaliação de risco perioperatório em relação ao tipo de cirurgia, qual dos procedimentos abaixo é considerado de alto risco?",
    "options": [
      "Bypass femoro-poplíteo.",
      "Artroplastia total de quadril bilateral.",
      "Transplante renal.",
      "Tireoidectomia total."
    ],
    "correctAnswer": 0,
    "explanation": "Na estratificação do risco cardíaco perioperatório pelo tipo de cirurgia (risco de morte cardíaca ou infarto em 30 dias), são de alto risco (> 5%): cirurgias da aorta e vasculares maiores, revascularização arterial periférica aberta (como o bypass femoropoplíteo), amputação de membro por isquemia, transplante de pulmão ou fígado, entre outras.\n\nO bypass femoropoplíteo é de alto risco porque os pacientes com doença arterial periférica geralmente têm doença coronariana associada.",
    "commentary": "Artroplastia total de quadril (B): cirurgia ortopédica maior é de risco intermediário (1–5%).\n\nTransplante renal (C): considerado de risco intermediário.\n\nTireoidectomia total (D): cirurgia de tireoide é de baixo risco (< 1%).",
    "tip": "Alto risco cardíaco: aorta, vascular maior e periférica aberta, transplante de fígado/pulmão. Baixo risco: tireoide, mama, olho, superficial.",
    "reference": "Halvorsen S et al. 2022 ESC Guidelines on cardiovascular assessment and management of patients undergoing non-cardiac surgery. Sociedade Brasileira de Cardiologia. 3ª Diretriz de Avaliação Cardiovascular Perioperatória, 2017.",
    "tags": [
      "avaliação perioperatória",
      "risco cirúrgico",
      "pré-operatório"
    ]
  },
  {
    "id": "cesupa2025-27",
    "topography": "14",
    "topic": "Sepse e choque séptico",
    "module": "Cirurgia",
    "text": "Um homem de 70 anos, hipertenso e ex-tabagista, foi submetido a uma ressecção transuretral da próstata (RTU) devido a hiperplasia prostática benigna. No segundo dia de pós-operatório, começa a apresentar confusão mental com alternância entre períodos de agitação e sonolência. A avaliação inicial revela pressão arterial de 85/50 mmHg, frequência cardíaca de 120 bpm, e frequência respiratória de 28 irpm. A temperatura é de 39°C e a diurese foi de apenas 150 mL nas últimas 12 horas. O exame físico mostra sensibilidade suprapúbica e saída de urina turva pelo cateter vesical. Os exames laboratoriais indicam leucocitose de 17.000/mm³, creatinina de 2,4 mg/dL (basal 1,4 mg/dL) e lactato de 3,8 mmol/L.\n\nCom base no quadro clínico, qual é a conduta inicial mais apropriada?",
    "options": [
      "Trocar o cateter vesical e observar a evolução clínica antes de acionar a Nefrologia para avaliação de terapia renal substitutiva (hemodiálise).",
      "Realizar reposição volêmica agressiva com cristaloides, coletar culturas e iniciar antibiótico empírico de amplo espectro.",
      "Administrar diurético intravenoso para aumentar a diurese e evitar sobrecarga hídrica, visto que paciente é idoso.",
      "Iniciar sedação contínua e ventilação mecânica preventiva para controle da agitação, para minimizar risco de broncoaspiração."
    ],
    "correctAnswer": 1,
    "explanation": "Segundo dia após RTU de próstata, com febre, hipotensão (85/50 mmHg), taquicardia, taquipneia, confusão (delirium), oligúria, lesão renal aguda, lactato de 3,8 mmol/L e urina turva com dor suprapúbica: sepse de foco urinário, com hipoperfusão.\n\nO pacote da primeira hora: coletar culturas (hemocultura e urocultura) sem atrasar o antibiótico, iniciar antibiótico empírico de amplo espectro, cristaloide 30 mL/kg pela hipotensão e lactato ≥ 4 (aqui, hipotensão), dosar lactato novamente e vasopressor (noradrenalina) se a PAM continuar < 65 mmHg. A sonda deve ser trocada depois, como controle do foco.",
    "commentary": "Trocar a sonda e observar antes da nefrologia (A): a troca faz parte do controle do foco, mas não substitui antibiótico e volume; observar atrasa o tratamento da sepse. A lesão renal tende a melhorar com a ressuscitação.\n\nDiurético intravenoso (C): o paciente está hipovolêmico e hipotenso; diurético pioraria a perfusão e a lesão renal.\n\nSedação e ventilação mecânica preventiva (D): a agitação é delirium pela sepse; trata-se a causa. Não há indicação de intubação, e a sedação pode piorar a hipotensão.",
    "tip": "Sepse: culturas + antibiótico na 1ª hora, 30 mL/kg de cristaloide se hipotensão ou lactato ≥ 4, noradrenalina se PAM < 65.",
    "reference": "Evans L et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Instituto Latino-Americano de Sepse (ILAS).",
    "tags": [
      "sepse",
      "infecção urinária",
      "pós-operatório",
      "ressuscitação volêmica"
    ]
  },
  {
    "id": "cesupa2025-28",
    "topography": "2.1",
    "topic": "Embolia pulmonar",
    "module": "Cirurgia",
    "text": "Um homem de 45 anos, obeso e tabagista, é admitido na unidade de terapia intensiva (UTI) com quadro de dispneia súbita e dor torácica. O paciente teve um episódio recente de imobilização prolongada após viagem internacional de 12 horas. Apresenta-se hipotenso (PA 80/50 mmHg) e taquicárdico (FC 135 bpm), está em ventilação mecânica e recebe noradrenalina (0,3 mcg/kg/min). O ecocardiograma beira-leito mostra dilatação importante e hipocinesia difusa do ventrículo direito e aumento da pressão sistólica da artéria pulmonar. USG doppler venoso de membros inferiores confirma trombose venosa profunda extensa no membro inferior esquerdo.\n\nEntre os itens abaixo, qual é a conduta mais apropriada?",
    "options": [
      "Associar vasopressina e dobutamina, e iniciar anticoagulação com heparina de baixo peso molecular 1mg/kg de peso 12/12h subcutânea.",
      "Realizar trombólise sistêmica imediatamente, devido à instabilidade hemodinâmica refratária e disfunção ventricular direita.",
      "Colocar filtro de veia cava inferior para prevenir novos episódios tromboembólicos e iniciar anticoagulação oral.",
      "Realizar anticoagulação com heparina não fracionada endovenosa e manter cuidados intensivos com ventilação protetora e vasopressores."
    ],
    "correctAnswer": 1,
    "explanation": "Fatores de risco (obesidade, tabagismo, viagem longa), dispneia súbita, TVP confirmada, disfunção do VD ao ecocardiograma e choque em uso de noradrenalina: tromboembolismo pulmonar de alto risco (maciço).\n\nNo TEP com instabilidade hemodinâmica, a trombólise sistêmica (alteplase 100 mg em 2 horas) é indicada imediatamente, se não houver contraindicação, porque reduz a mortalidade. Junto, anticoagulação com heparina não fracionada. Embolectomia cirúrgica ou por cateter é a alternativa quando a trombólise é contraindicada ou falha.",
    "commentary": "Vasopressina, dobutamina e enoxaparina (A): suporte hemodinâmico ajuda, mas não reverte a obstrução; a HBPM subcutânea não é adequada no choque e não substitui a reperfusão.\n\nFiltro de veia cava e anticoagulação oral (C): o filtro é reservado a quem não pode anticoagular; não trata o episódio atual. Anticoagulante oral não é usado na fase aguda instável.\n\nSó heparina não fracionada e suporte (D): a anticoagulação isolada é o tratamento do TEP sem instabilidade; no choque, falta a trombólise.",
    "tip": "TEP com hipotensão/choque = alto risco → trombólise sistêmica + HNF. Sem choque → anticoagulação.",
    "reference": "Konstantinides SV et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism. Eur Heart J, 2020.",
    "tags": [
      "tromboembolismo pulmonar",
      "trombólise",
      "choque obstrutivo",
      "disfunção de VD"
    ]
  },
  {
    "id": "cesupa2025-29",
    "topography": "3.4",
    "topic": "Pancreatite aguda",
    "module": "Cirurgia",
    "text": "Paciente feminino, 45 anos, apresenta dor abdominal intensa há 8 horas, localizada em andar superior do abdome e irradiada para dorso, acompanhada de náuseas e vômitos intensos. Ao exame físico, o abdome encontra-se distendido, com dor à palpação do epigástrio, mas sem sinais de defesa abdominal. Os exames laboratoriais revelam amilase sérica de 900 U/L e lipase de 1100 U/L. A ultrassonografia de abdome mostra presença de microcálculos, sem evidência de colecistite.\n\nQual é a conduta inicial mais apropriada para o manejo desta paciente?",
    "options": [
      "Realização de colangiopancreatografia retrógrada endoscópica (CPRE) imediata.",
      "Hidratação venosa e antibiótico profilático.",
      "Indicação de colecistectomia laparoscópica de urgência.",
      "Início de hidratação venosa, jejum, analgesia e antieméticos."
    ],
    "correctAnswer": 3,
    "explanation": "Dor epigástrica intensa em faixa com irradiação para o dorso, vômitos e lipase de 1100 U/L (mais de 3 vezes o normal) com microcálculos na vesícula: pancreatite aguda biliar, sem sinais de gravidade, colangite ou obstrução persistente.\n\nO tratamento inicial é de suporte: hidratação venosa (Ringer lactato, de forma moderada e guiada por metas), analgesia (opioides se necessário), antieméticos e jejum enquanto houver náuseas, vômitos e dor, com reintrodução precoce da dieta oral assim que tolerada. Na pancreatite biliar leve, a colecistectomia é feita na mesma internação, após a melhora.",
    "commentary": "CPRE imediata (A): indicada só se houver colangite associada (urgente) ou obstrução biliar persistente; na pancreatite biliar sem esses achados, não melhora o desfecho.\n\nHidratação e antibiótico profilático (B): antibiótico profilático não é recomendado na pancreatite aguda, nem na necrosante; só se houver infecção comprovada ou suspeita.\n\nColecistectomia de urgência (C): a colecistectomia é feita na mesma internação, mas após a resolução do quadro agudo, não como urgência.",
    "tip": "Pancreatite biliar leve: suporte (hidratação, analgesia, dieta precoce) e colecistectomia na mesma internação. CPRE só com colangite ou obstrução.",
    "reference": "Tenner S et al. American College of Gastroenterology Guideline: Management of Acute Pancreatitis, 2024. Working Group IAP/APA. Evidence-based guidelines for the management of acute pancreatitis, 2013.",
    "tags": [
      "pancreatite aguda",
      "pancreatite biliar",
      "hidratação venosa"
    ]
  },
  {
    "id": "cesupa2025-30",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Um homem de 32 anos, vítima de explosão de caminhão em via pública, é encontrado pelo serviço de emergência pré-hospitalar com amputação traumática do membro inferior esquerdo na altura do terço distal da coxa. O paciente apresenta hemorragia arterial ativa no local da amputação, estando pálido, confuso e com sinais de perfusão periférica inadequada. Os sinais vitais no local mostram pressão arterial de 80/60 mmHg e frequência cardíaca de 130 bpm. A equipe de emergência avalia o uso de medidas de controle hemorrágico.\n\nQual é a conduta mais adequada neste cenário?",
    "options": [
      "Compressão manual com compressas até a chegada ao hospital, utilizando luvas estéreis.",
      "Aplicação de torniquete proximal à amputação e rápido transporte para o hospital.",
      "Reposição volêmica no local e transporte após estabilização hemodinâmica.",
      "Uso de agentes hemostáticos tópicos e elevação do membro para controle do sangramento."
    ],
    "correctAnswer": 1,
    "explanation": "Amputação traumática da coxa com hemorragia arterial ativa e choque, no atendimento pré-hospitalar.\n\nNo trauma com sangramento exsanguinante de extremidade, o controle da hemorragia vem antes até da via aérea (sequência XABCDE do PHTLS, em que X é a hemorragia externa grave). Se a compressão direta não for eficaz ou se for uma amputação, aplica-se torniquete 5–7 cm acima da lesão, apertado até parar o sangramento, anotando o horário. O paciente deve ser transportado rapidamente para um centro de trauma, porque o tratamento definitivo é cirúrgico.",
    "commentary": "Compressão manual com compressas até o hospital (A): numa amputação com sangramento arterial, a compressão costuma falhar e ocupa um socorrista; o torniquete é a primeira escolha.\n\nReposição volêmica no local antes do transporte (C): atrasa o tratamento definitivo e, sem controle do sangramento, o volume dilui fatores de coagulação e piora a hemorragia. A meta é hipotensão permissiva.\n\nHemostático tópico e elevação do membro (D): o hemostático é útil em feridas juncionais onde não cabe torniquete; a elevação não controla sangramento arterial.",
    "tip": "Sangramento exsanguinante de membro: X do XABCDE — torniquete proximal e transporte rápido.",
    "reference": "NAEMT. PHTLS – Atendimento Pré-Hospitalar ao Traumatizado, 10ª ed. American College of Surgeons. ATLS, 10ª ed.",
    "tags": [
      "trauma",
      "torniquete",
      "controle de hemorragia",
      "atendimento pré-hospitalar"
    ]
  },
  {
    "id": "cesupa2025-31",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente 36 anos, grávida de 20 semanas, com 03 partos via vaginal, 02 cesáreas, 03 abortamentos precoces e uma gravidez tubária há 10 meses com 06 semanas.\n\nComo é representada simbolicamente a paridade desta paciente?",
    "options": [
      "GIX PV AIV.",
      "GX PVI AIII.",
      "GIX PIII AVI.",
      "GX PV A IV."
    ],
    "correctAnswer": 3,
    "explanation": "Contando cada item da história obstétrica:\n\n• Gestações (G): 3 partos vaginais + 2 cesáreas + 3 abortamentos + 1 gravidez ectópica + a gestação atual = 10 → GX.\n• Partos (P): 3 vaginais + 2 cesáreas = 5 → PV.\n• Abortos (A): 3 abortamentos precoces + 1 gravidez tubária (perda antes de 20–22 semanas) = 4 → AIV.\n\nResultado: GX PV AIV.",
    "commentary": "GIX PV AIV (A): esquece de contar a gestação atual entre as gestações.\n\nGX PVI AIII (B): conta a gravidez ectópica como parto; ela é perda precoce e entra como aborto.\n\nGIX PIII AVI (C): conta só os partos vaginais e soma as cesáreas aos abortos — erro de classificação.",
    "tip": "G = todas as gestações, incluindo a atual. P = partos (vaginais + cesáreas). A = perdas < 20–22 semanas, incluindo ectópica e mola.",
    "reference": "Zugaib M. Zugaib Obstetrícia, 4ª ed. Montenegro CAB, Rezende Filho J. Rezende Obstetrícia, 13ª ed.",
    "tags": [
      "história obstétrica",
      "paridade",
      "pré-natal"
    ]
  },
  {
    "id": "cesupa2025-32",
    "topography": "5.2",
    "topic": "Placenta prévia",
    "module": "Ginecologia e Obstetrícia",
    "text": "A placenta prévia é uma patologia que requer manejo especial durante o pré-natal e o parto. Paciente grávida de 34 semanas, primigesta, com diagnóstico de placenta prévia de inserção baixa, 02 cm do orifício interno do colo uterino.\n\nDiante dessa informação, qual seria a via de parto para essa paciente?",
    "options": [
      "Cesariana segmentar pelo risco de hemorragia durante o trabalho de parto inicial.",
      "Cesariana fundica, fora de trabalho de parto com 37 semanas.",
      "Parto via baixa ou via alta (cesariana segmentar) por indicação obstétrica, durante o trabalho de parto.",
      "Parto via baixa por indução com 36 semanas."
    ],
    "correctAnswer": 2,
    "explanation": "Primigesta de 34 semanas com placenta de inserção baixa, com a borda a 2 cm do orifício interno do colo.\n\nNa classificação atual, a placenta é prévia quando cobre o orifício interno e é de inserção baixa quando a borda fica a menos de 2 cm dele, sem cobri-lo. Placentas cuja borda está a 2 cm ou mais do orifício permitem tentar o parto vaginal, porque o risco de sangramento no trabalho de parto é baixo; quanto mais próxima do orifício, maior a chance de cesárea.\n\nPor isso a conduta oficial é aguardar o trabalho de parto, com via vaginal ou cesárea segmentar conforme a indicação obstétrica. Convém repetir a ultrassonografia transvaginal no fim da gestação, pois a placenta pode \"migrar\" com o crescimento do segmento inferior.",
    "commentary": "Cesárea segmentar pelo risco de sangramento no início do trabalho de parto (A): com a borda a 2 cm ou mais do orifício, o parto vaginal pode ser tentado; a cesárea eletiva é para a placenta prévia que recobre o orifício (e, em muitos serviços, quando a borda está a menos de 2 cm).\n\nCesárea fúndica com 37 semanas (B): a incisão fúndica (corporal) não é usada para placenta baixa; a cesárea, quando necessária, é segmentar.\n\nIndução com 36 semanas (D): não há indicação de antecipar o parto numa paciente sem sangramento; a interrupção eletiva na placenta prévia é por volta de 36–37 semanas apenas quando a via indicada é a cesárea.",
    "tip": "Borda placentária ≥ 2 cm do orifício interno → pode tentar parto vaginal. < 2 cm ou recobrindo → cesárea programada.",
    "reference": "Jain V et al. Guideline No. 402: Diagnosis and Management of Placenta Previa. J Obstet Gynaecol Can, 2020. FEBRASGO. Protocolo de placenta prévia, 2021.",
    "tags": [
      "placenta prévia",
      "placenta de inserção baixa",
      "via de parto"
    ]
  },
  {
    "id": "cesupa2025-33",
    "topography": "5.2",
    "topic": "Abortamento",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente com diagnóstico de Mola Hidatiforme, submetida à aspiração a vácuo, sem intercorrências.\n\nQual é o protocolo do seguimento pós molar em relação ao BHCG?",
    "options": [
      "Semanal, negativo por 03 semanas consecutivas, dosá-lo mensalmente por 06 meses.",
      "Quinzenal, negativo em 08 semanas, dosá-lo mensalmente por 01 ano.",
      "Semanal, negativo por 04 semanas consecutivas, dosá-lo por 01 ano.",
      "Quinzenal, negativo por 03 semanas consecutivas, dosá-lo por 06 meses."
    ],
    "correctAnswer": 0,
    "explanation": "Após o esvaziamento da mola hidatiforme, o β-hCG é o marcador para detectar neoplasia trofoblástica gestacional (NTG).\n\nO protocolo brasileiro de seguimento:\n\n• β-hCG semanal até três dosagens negativas consecutivas.\n• Depois, mensal por 6 meses.\n• Contracepção eficaz durante todo o seguimento.\n\nPlatô ou elevação do β-hCG durante o seguimento indica NTG pós-molar e exige investigação e quimioterapia.",
    "commentary": "Quinzenal até negativar em 8 semanas e mensal por 1 ano (B): a dosagem inicial é semanal, e o seguimento mensal após a negativação é de 6 meses no protocolo atual.\n\nSemanal até 4 negativos e por 1 ano (C): bastam 3 dosagens negativas consecutivas; o seguimento de 1 ano é um protocolo antigo.\n\nQuinzenal até 3 negativos e por 6 meses (D): o intervalo inicial correto é semanal.",
    "tip": "Pós-mola: β-hCG semanal até 3 negativos seguidos, depois mensal por 6 meses, com anticoncepção.",
    "reference": "FEBRASGO. Doença trofoblástica gestacional – Protocolo nº 22, 2021. Centro de Referência de Doença Trofoblástica Gestacional.",
    "tags": [
      "mola hidatiforme",
      "doença trofoblástica gestacional",
      "β-hCG"
    ]
  },
  {
    "id": "cesupa2025-34",
    "topography": "5.2",
    "topic": "Hemorragia pós-parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "A hemorragia pós-parto é a principal causa de mortalidade materna em todo o mundo, responsável por cerca de 25% dos óbitos maternos.\n\nCom o tratamento de início precoce e agressivo no escalonamento das medidas, é possível evitar a Tríade Letal do choque hemorrágico que consiste em:",
    "options": [
      "Acidose, hipotermia e coagulopatia.",
      "Alcalose, hipotermia e coagulopatia",
      "Acidose, convulsão e parada cardiorrespiratória.",
      "Alcalose, hipertermia e parada cardiorrespiratória."
    ],
    "correctAnswer": 0,
    "explanation": "A tríade letal do trauma e do choque hemorrágico é acidose, hipotermia e coagulopatia.\n\nO sangramento leva à hipoperfusão e ao metabolismo anaeróbio (acidose lática). A perda de sangue e a infusão de fluidos frios causam hipotermia. Acidose e hipotermia prejudicam as enzimas da coagulação, e a perda e diluição dos fatores causam coagulopatia, que aumenta o sangramento — um ciclo vicioso.\n\nPor isso, na hemorragia pós-parto: reconhecer cedo (índice de choque), usar uterotônicos e ácido tranexâmico, aquecer a paciente e os fluidos, evitar excesso de cristaloide e transfundir de forma balanceada.",
    "commentary": "Alcalose, hipotermia e coagulopatia (B): o choque causa acidose (lática), não alcalose.\n\nAcidose, convulsão e parada cardiorrespiratória (C): convulsão não faz parte da tríade; a parada é a consequência final, não um componente.\n\nAlcalose, hipertermia e parada (D): ocorre o oposto — acidose e hipotermia.",
    "tip": "Tríade letal: acidose + hipotermia + coagulopatia. Prevenção: aquecer, pouco cristaloide, ácido tranexâmico e transfusão balanceada.",
    "reference": "Organização Pan-Americana da Saúde. Recomendações assistenciais para prevenção, diagnóstico e tratamento da hemorragia obstétrica, 2018.",
    "tags": [
      "hemorragia pós-parto",
      "tríade letal",
      "choque hemorrágico"
    ]
  },
  {
    "id": "cesupa2025-35",
    "topography": "5.2",
    "topic": "Assistência ao parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante, 39 semanas e 4 dias de gestação, deu entrada na maternidade pública do estado, com diagnóstico de Placenta Prévia Centro Total. Ao exame: apresentação cefálica, feto alto e móvel, com sangramento vaginal fluído em moderada intensidade. Indicado cesariana segmentar de urgência.\n\nO feto foi retirado pela manobra tradicional, que é a manobra de:",
    "options": [
      "Bracht.",
      "Geppert.",
      "Mauriceau modificada.",
      "Zavanelli."
    ],
    "correctAnswer": 1,
    "explanation": "Na cesárea com feto em apresentação cefálica, a extração clássica do polo cefálico é a manobra de Geppert: o obstetra introduz a mão entre o segmento inferior e a cabeça fetal, faz alavanca para trazer a cabeça até a incisão, enquanto o auxiliar comprime o fundo uterino.\n\nCom o feto alto e móvel, essa manobra traz a cabeça até a histerotomia e permite a extração.",
    "commentary": "Bracht (A): manobra do parto vaginal pélvico (apresentação de nádegas), em que o corpo do feto é levado em direção ao abdome materno.\n\nMauriceau modificada (C): manobra de Mauriceau é usada para desprender a cabeça derradeira no parto pélvico; não se aplica à extração na apresentação cefálica.\n\nZavanelli (D): recolocação da cabeça fetal na pelve para cesárea de emergência na distocia de ombro grave — manobra de último recurso.",
    "tip": "Cesárea cefálica: Geppert. Parto pélvico: Bracht (corpo) e Mauriceau (cabeça derradeira). Distocia de ombro extrema: Zavanelli.",
    "reference": "Montenegro CAB, Rezende Filho J. Rezende Obstetrícia, 13ª ed. Zugaib M. Zugaib Obstetrícia, 4ª ed.",
    "tags": [
      "cesariana",
      "manobras obstétricas",
      "assistência ao parto"
    ]
  },
  {
    "id": "cesupa2025-36",
    "topography": "5.1",
    "topic": "Mioma uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente 28 anos, casada há 05 anos, há 02 anos tentando engravidar sem sucesso. Parceiro com espermograma normal, afastados todos os fatores masculinos. Na histerossalpingografia, achado relevante de tumoração intra cavitária uterina em parede fúndica com obstrução do óstio tubário direito; prova de Cotté positiva à esquerda e negativa à direita.\n\nQual a conduta em relação à tumoração uterina, podendo-se tratar de um mioma submucoso, categoria FIGO Zero?",
    "options": [
      "Histerectomia.",
      "Miomectomia Histeroscópica.",
      "Miomectomia por laparotomia.",
      "Conduta expectante."
    ],
    "correctAnswer": 1,
    "explanation": "Infertilidade há 2 anos, parceiro normal, e histerossalpingografia com tumoração intracavitária no fundo uterino obstruindo o óstio tubário direito (prova de Cotté negativa à direita), compatível com mioma submucoso FIGO 0 (totalmente dentro da cavidade, pediculado).\n\nMiomas submucosos distorcem a cavidade e reduzem as taxas de implantação e gravidez; sua retirada melhora a fertilidade. Para os tipos 0 e 1 (e alguns tipo 2 pequenos), o tratamento de escolha é a miomectomia histeroscópica: minimamente invasiva, sem incisão no útero, preserva a fertilidade e permite gravidez com mais segurança.",
    "commentary": "Histerectomia (A): elimina a possibilidade de gravidez numa paciente que quer engravidar.\n\nMiomectomia por laparotomia (C): é para miomas intramurais ou subserosos grandes ou múltiplos; para mioma submucoso tipo 0, é mais invasiva, deixa cicatriz uterina e aderências, sem vantagem.\n\nConduta expectante (D): mioma submucoso em paciente infértil deve ser retirado; esperar mantém a causa da infertilidade.",
    "tip": "Mioma submucoso FIGO 0–1 + infertilidade ou sangramento = miomectomia histeroscópica.",
    "reference": "FEBRASGO. Leiomioma uterino – Protocolo nº 32, 2021. Munro MG et al. FIGO classification system (PALM-COEIN), 2018.",
    "tags": [
      "mioma submucoso",
      "infertilidade",
      "histeroscopia"
    ]
  },
  {
    "id": "cesupa2025-37",
    "topography": "5.1",
    "topic": "Câncer de colo uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente 35 anos, vem à consulta com resultado citológico de ASC-H (Atipia celular escamosa, não podendo excluir lesão de alto grau).\n\nQual a conduta, segundo as diretrizes do Ministério da Saúde?",
    "options": [
      "Repetir citologia em 06 meses.",
      "Repetir citologia em 01 ano.",
      "Colposcopia.",
      "CAF (cirurgia de alta freqüência)."
    ],
    "correctAnswer": 2,
    "explanation": "ASC-H significa células escamosas atípicas em que não se pode afastar lesão de alto grau. Como uma proporção importante dessas mulheres tem NIC 2 ou 3 na biópsia, as Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (INCA) indicam encaminhar à colposcopia em qualquer idade.\n\nNa colposcopia, se houver achado anormal, faz-se biópsia; com zona de transformação tipo 1 ou 2 e achado maior, pode-se fazer o \"ver e tratar\" (excisão).",
    "commentary": "Repetir citologia em 6 meses (A): conduta para ASC-US (atipia de significado indeterminado) em mulheres de 25 a 29 anos; não para ASC-H.\n\nRepetir citologia em 1 ano (B): conduta para LSIL ou ASC-US em mulheres de 30 anos ou mais (repetir em 6 meses) — em nenhum caso para ASC-H.\n\nCAF direto (D): a excisão sem colposcopia não é indicada para ASC-H; o \"ver e tratar\" exige colposcopia com achado maior.",
    "tip": "ASC-H, HSIL, AGC e AOI → colposcopia direto. ASC-US e LSIL → repetir citologia.",
    "reference": "INCA. Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero, 2ª ed., 2016.",
    "tags": [
      "câncer de colo uterino",
      "citologia oncótica",
      "ASC-H",
      "colposcopia"
    ]
  },
  {
    "id": "cesupa2025-38",
    "topography": "5.2",
    "topic": "Puerpério",
    "module": "Ginecologia e Obstetrícia",
    "text": "Puérpera de pós-parto normal há 52 dias, apresentando dor, edema e hiperemia na mama direita, febre de 38°C há 02 dias, sem melhora clínica com uso de analgésicos.\n\nQual o melhor esquema terapêutico e que medidas de suporte podemos orientá-la?",
    "options": [
      "Cefalexina 500 mg de 06h/06h VO de 07 a 14 dias, drenagem linfática, usar sutiã, manter a amamentação, ordenha manual delicada.",
      "Cefoxitina 1g EV de 06h/06h, suspender a amamentação, ordenha com bomba.",
      "Oxacilina 2g EV de 04h/04h, manter a amamentação e ordenha efetiva com bomba.",
      "Ciprofloxacina 500mg EV 08h/08h, suspender a amamentação."
    ],
    "correctAnswer": 0,
    "explanation": "Puérpera de 52 dias com dor, edema e hiperemia mamária, febre há 2 dias e sem melhora com analgésicos: mastite lactacional infecciosa.\n\nO agente mais comum é o Staphylococcus aureus. O tratamento ambulatorial usa antibiótico oral com cobertura antiestafilocócica (cefalexina 500 mg de 6/6 h, ou amoxicilina-clavulanato) por 10 a 14 dias, além de analgesia e anti-inflamatório.\n\nA amamentação deve ser mantida: o esvaziamento da mama é parte do tratamento e o leite não faz mal ao bebê. Também se orienta ordenha delicada, sutiã de boa sustentação e repouso.",
    "commentary": "Cefoxitina EV, suspender a amamentação (B): antibiótico venoso é para casos graves ou abscesso com sepse; suspender a amamentação piora a estase e favorece o abscesso.\n\nOxacilina EV de 4/4 h (C): esquema hospitalar para infecção estafilocócica grave; a mastite sem sinais sistêmicos graves é tratada por via oral.\n\nCiprofloxacina EV, suspender a amamentação (D): quinolona não é escolha para mastite (cobertura ruim para estafilococo, uso desaconselhado na lactação), e suspender a amamentação é erro.",
    "tip": "Mastite: cefalexina VO por 10–14 dias e manter amamentação. Abscesso → drenagem.",
    "reference": "Ministério da Saúde. Saúde da criança: aleitamento materno e alimentação complementar. Cadernos de Atenção Básica nº 23, 2ª ed., 2015. Academy of Breastfeeding Medicine. Clinical Protocol #36: The Mastitis Spectrum, 2022.",
    "tags": [
      "mastite",
      "puerpério",
      "aleitamento materno"
    ]
  },
  {
    "id": "cesupa2025-39",
    "topography": "5.1",
    "topic": "Climatério e menopausa",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 53 anos, IMC 42kg/m², circunferência abdominal de 123cm, hipertensa, laboratório alterado, no qual podemos observar redução do HDL Colesterol, aumento de triglicerídeos e intolerância a Glicose. Última menstruação há 1 ano e 8 meses. Deseja fazer TH (Terapia Hormonal).\n\nQual a melhor via de administração para essa paciente, diante desse quadro?",
    "options": [
      "TH por via oral combinada.",
      "TH por via oral com Estrogênio isolado.",
      "TH por via transdérmica combinada.",
      "TH por via transdérmica com Estrogênio isolado."
    ],
    "correctAnswer": 2,
    "explanation": "Mulher na pós-menopausa (amenorreia há 1 ano e 8 meses) com obesidade grau III (IMC 42), síndrome metabólica (circunferência abdominal aumentada, HDL baixo, triglicerídeos altos, intolerância à glicose) e hipertensão, que deseja terapia hormonal.\n\nA via transdérmica é preferida nessa situação porque evita a primeira passagem hepática: não aumenta triglicerídeos, fatores de coagulação nem o risco de tromboembolismo venoso como o estrogênio oral.\n\nComo ela tem útero (não há história de histerectomia), o estrogênio deve ser combinado a um progestagênio para proteger o endométrio contra hiperplasia e câncer.",
    "commentary": "Oral combinada (A): o estrogênio oral aumenta triglicerídeos e o risco de trombose; em obesa, hipertensa e com dislipidemia, a via transdérmica é mais segura.\n\nOral com estrogênio isolado (B): além da via oral, falta o progestagênio para proteger o endométrio numa mulher com útero.\n\nTransdérmica com estrogênio isolado (D): a via é adequada, mas estrogênio isolado só é usado em mulheres histerectomizadas.",
    "tip": "TH: obesidade, hipertriglicerídemia, risco de trombose ou enxaqueca → transdérmica. Com útero → sempre associar progestagênio.",
    "reference": "Associação Brasileira de Climatério (SOBRAC). Consenso Brasileiro de Terapêutica Hormonal da Menopausa, 2018. The 2022 Hormone Therapy Position Statement of The North American Menopause Society.",
    "tags": [
      "terapia hormonal da menopausa",
      "via transdérmica",
      "climatério",
      "síndrome metabólica"
    ]
  },
  {
    "id": "cesupa2025-40",
    "topography": "10",
    "topic": "Sífilis",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente com 23 anos, deu entrada no ambulatório de ginecologia referindo lesão endurecida no introito vaginal após relação sexual casual desprotegida há 3 semanas, indolor, sem secreção. Ao exame: Úlcera de bordas endurecidas, fundo limpo, sem hiperemia, única no pequeno lábio direito.\n\nQual a hipótese diagnóstica mais provável?",
    "options": [
      "Donovanose.",
      "Herpes genital.",
      "HPV.",
      "Sífilis."
    ],
    "correctAnswer": 3,
    "explanation": "Úlcera genital única, indolor, de bordas endurecidas e fundo limpo, surgindo cerca de 3 semanas após relação desprotegida: cancro duro, a lesão da sífilis primária (Treponema pallidum).\n\nO período de incubação da sífilis é de 10 a 90 dias (média de 21). A úlcera desaparece sozinha em algumas semanas mesmo sem tratamento, mas a doença progride.\n\nConduta: teste rápido treponêmico e VDRL, tratar com penicilina benzatina 2,4 milhões UI dose única na sífilis primária, testar para HIV e hepatites e tratar as parcerias.",
    "commentary": "Donovanose (A): úlcera de evolução lenta, indolor, mas vermelho-viva, friável e sangrante, com crescimento progressivo; não tem bordas endurecidas com fundo limpo.\n\nHerpes genital (B): vesículas agrupadas que se rompem em úlceras múltiplas, rasas e dolorosas.\n\nHPV (C): causa verrugas (condiloma acuminado) e lesões precursoras, não úlcera.",
    "tip": "Úlcera única, indolor, endurecida e limpa = sífilis primária. Múltipla e dolorosa = herpes. Dolorosa e purulenta = cancro mole.",
    "reference": "Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com IST, 2022.",
    "tags": [
      "sífilis",
      "úlcera genital",
      "IST",
      "cancro duro"
    ]
  },
  {
    "id": "cesupa2025-41",
    "topography": "11",
    "topic": "Calendário vacinal",
    "module": "Pediatria",
    "text": "“Criado nos anos 1980, o Zé Gotinha é uma marca da luta contra a poliomielite” (Ministério da saúde, 2024).\n\nSobre a vacina em questão, é correto afirmar que, segundo a partir do dia 4 de novembro de 2024:",
    "options": [
      "O esquema a ser seguido será 2 doses da vacina inativada (VIP) e 2 doses da vacina oral (VOP).",
      "O esquema a ser seguido será 3 doses da VIP aos 2,4,6 meses e 2 reforços com a VOP aos 15m e 4 anos.",
      "O esquema a ser seguido será somente com a vacina VIP aos 2,4 ,6 m e um reforço aos 15m.",
      "O esquema a ser seguido será somente com a vacina VIP aos 2,4,6m e reforços aos 15m e 4 anos."
    ],
    "correctAnswer": 2,
    "explanation": "Em 4 de novembro de 2024, o Ministério da Saúde substituiu a vacina oral (VOP, \"gotinha\") pela inativada injetável (VIP) em todo o esquema contra a poliomielite.\n\nO novo esquema:\n\n• Vacinação primária: VIP aos 2, 4 e 6 meses.\n• Reforço único: VIP aos 15 meses.\n\nO reforço dos 4 anos, que era feito com VOP, deixou de existir. A mudança elimina o risco, ainda que raro, de poliomielite associada à vacina oral e de poliovírus derivado da vacina.",
    "commentary": "2 doses de VIP e 2 de VOP (A): esquema antigo de transição; a VOP foi retirada do calendário de rotina.\n\nVIP aos 2, 4 e 6 meses e reforços com VOP aos 15 meses e 4 anos (B): esse era o esquema até outubro de 2024.\n\nVIP aos 2, 4 e 6 meses e reforços aos 15 meses e 4 anos (D): o reforço dos 4 anos foi retirado; agora é apenas um reforço aos 15 meses.",
    "tip": "Pólio desde 11/2024: só VIP — 2, 4 e 6 meses + reforço aos 15 meses. Fim da gotinha e do reforço dos 4 anos.",
    "reference": "Ministério da Saúde. Nota técnica sobre a substituição da VOP pela VIP no Calendário Nacional de Vacinação, 2024.",
    "tags": [
      "calendário vacinal",
      "poliomielite",
      "VIP"
    ]
  },
  {
    "id": "cesupa2025-42",
    "topography": "11",
    "topic": "Puericultura",
    "module": "Pediatria",
    "text": "A febre é umas das queixas mais frequentes nos atendimentos pediátricos, estima-se que 20% a 30% das consultas pediátricas têm a febre como sintoma principal.\n\nAnalise as seguintes afirmativas sobre febre:\n\n• I. O uso do ácido acetilsalicílico não é recomendado para o controle da febre, pelo risco de Síndrome de Reye.\n• II. O paracetamol, a dipirona e o ibuprofeno são bem tolerados e efetivos nas doses recomendadas para o controle da febre.\n• III. O uso do termômetro de mercúrio é o mais fidedigno e seguro.\n• IV. É recomendada a prática de intercalar os antitérmicos para o controle da febre.\n\nÉ correto afirmar que:",
    "options": [
      "Todas as alternativas estão corretas.",
      "Somente I e II estão corretas.",
      "I, II e III estão corretas.",
      "Somente IV está correta."
    ],
    "correctAnswer": 1,
    "explanation": "Analisando cada afirmativa:\n\n• I — correta: o AAS não é usado para febre em crianças pelo risco de síndrome de Reye (encefalopatia e lesão hepática, associada a infecções virais como influenza e varicela).\n• II — correta: paracetamol, dipirona e ibuprofeno são seguros e eficazes nas doses recomendadas.\n• III — incorreta: o termômetro de mercúrio foi proibido no Brasil (Anvisa, 2017) pelo risco de intoxicação e de contaminação ambiental; recomendam-se termômetros digitais.\n• IV — incorreta: alternar ou associar antitérmicos não é recomendado, pois aumenta o risco de erro de dose e toxicidade sem benefício claro no conforto da criança.\n\nCorretas: I e II.",
    "commentary": "Todas corretas (A): III e IV estão erradas.\n\nI, II e III (C): o termômetro de mercúrio não é seguro e foi proibido.\n\nSomente IV (D): intercalar antitérmicos não é recomendado, e I e II são verdadeiras.",
    "tip": "Febre na criança: nada de AAS (Reye), nada de intercalar antitérmicos, nada de termômetro de mercúrio. O objetivo é o conforto.",
    "reference": "Sociedade Brasileira de Pediatria. Documento científico: Abordagem da febre aguda em crianças, 2021.",
    "tags": [
      "febre",
      "antitérmicos",
      "síndrome de Reye",
      "pediatria"
    ]
  },
  {
    "id": "cesupa2025-43",
    "module": "Pediatria",
    "text": "C.A.S.S., 10 meses, deu entrada na unidade de pronto atendimento acompanhada da mãe, a qual relata que há 3 dias menor iniciou quadro de febre com temperatura aferida variando entre 38–39 °C, associada à diarreia leve. Hoje, já não apresentou mais febre, porém, mãe observou o surgimento de manchas vermelhas pelo corpo, que iniciaram no tronco e se espalharam, o que a deixou preocupada e por isso procurou o pronto atendimento, sem qualquer outra queixa associada. Ao exame físico, criança em bom estado geral, auscultas pulmonar e cardíaca dentro da normalidade; ao exame da pele, observa-se exantema máculo-papular, que desaparecem à compressão, presentes no tronco, membros e face, não descamativo e não pruriginoso.\n\nApós avaliação, qual o diagnóstico e agente etiológico correto:",
    "options": [
      "Exantema súbito, herpes vírus humano 6.",
      "Eritema infeccioso, herpes vírus humano 7.",
      "Varicela, vírus varicela zoster.",
      "Rubéola, Rubella vírus."
    ],
    "correctAnswer": 0,
    "explanation": "Lactente de 10 meses com 3 dias de febre alta, em bom estado geral; a febre some e então surge exantema maculopapular róseo, começando no tronco: exantema súbito (roséola infantil, sexta doença).\n\nA característica principal é que o exantema aparece quando a febre cede. Acomete sobretudo crianças de 6 meses a 2 anos. O agente é o herpes-vírus humano 6 (HHV-6), e menos frequentemente o HHV-7. Pode haver convulsão febril na fase de febre. O tratamento é sintomático.",
    "commentary": "Eritema infeccioso por HHV-7 (B): o eritema infeccioso (quinta doença) é causado pelo parvovírus B19, com face esbofeteada e rendilhado nos membros, em escolares.\n\nVaricela (C): lesões vesiculares pruriginosas em vários estágios (polimorfismo), que começam no tronco e couro cabeludo, com febre junto do exantema.\n\nRubéola (D): exantema que começa na face e desce, com febre baixa simultânea e adenomegalia retroauricular e occipital.",
    "tip": "Febre alta 3 dias → cede → aparece o exantema no tronco, lactente de 6 meses a 2 anos = exantema súbito (HHV-6).",
    "reference": "Sociedade Brasileira de Pediatria. Tratado de Pediatria, 5ª ed. Doenças exantemáticas.",
    "tags": [
      "exantema súbito",
      "HHV-6",
      "doenças exantemáticas"
    ]
  },
  {
    "id": "cesupa2025-44",
    "module": "Pediatria",
    "text": "Síndrome de Loffler é uma pneumonia eosinofílica, caracterizada por infiltrados pulmonares migratórios .\n\nAlguns parasitas são capazes de provocar esse tipo de alteração, por terem passagem pulmonar em seu ciclo biológico, EXCETO:",
    "options": [
      "Strongyloides stercoralis.",
      "Necator americanos.",
      "Ascaris lumbricoides.",
      "Schistosoma mansoni."
    ],
    "correctAnswer": 3,
    "explanation": "A síndrome de Löffler é causada pela passagem das larvas de helmintos pelos pulmões no ciclo pulmonar (ciclo de Looss): infiltrados migratórios transitórios, tosse, sibilância e eosinofilia.\n\nOs clássicos são os que fazem ciclo de Looss: Ascaris lumbricoides, ancilostomídeos (Necator americanus, Ancylostoma duodenale) e Strongyloides stercoralis — o mnemônico \"SAN\".\n\nO Schistosoma mansoni é a exceção esperada: suas cercárias penetram a pele e os esquistossômulos passam pelos pulmões, mas a fase pulmonar não costuma ser lembrada como causa da síndrome de Löffler clássica.",
    "commentary": "Strongyloides stercoralis (A): faz ciclo pulmonar e causa síndrome de Löffler; na hiperinfecção (imunossuprimidos) o acometimento pulmonar é grave.\n\nNecator americanus (B): ancilostomídeo que faz ciclo de Looss, com passagem pulmonar e síndrome de Löffler.\n\nAscaris lumbricoides (C): é a causa mais frequente da síndrome de Löffler.\n\nObservação: tecnicamente o esquistossômulo também passa pelos pulmões e pode causar quadro pulmonar transitório com eosinofilia (síndrome de Katayama, na esquistossomose aguda). A banca considerou o Schistosoma a exceção por não ter o ciclo de Looss clássico.",
    "tip": "Löffler = ciclo de Looss: SAN — Strongyloides, Ancilostomídeos (Necator), Ascaris.",
    "reference": "Neves DP. Parasitologia Humana, 13ª ed. Sociedade Brasileira de Pediatria. Tratado de Pediatria, 5ª ed.",
    "tags": [
      "síndrome de Löffler",
      "parasitoses intestinais",
      "eosinofilia",
      "ciclo de Looss"
    ]
  },
  {
    "id": "cesupa2025-45",
    "topography": "11",
    "topic": "Pneumonia infantil",
    "module": "Pediatria",
    "text": "Paciente 8 anos, deu entrada no pronto atendimento com queixa de há 2 dias estar apresentando febre associada à tosse produtiva e desconforto respiratório. Ao exame físico, apresentava febre de 38,5ºC, taquipneia leve e estertores crepitantes à ausculta pulmonar. O médico responsável pelo atendimento o diagnosticou com Pneumonia adquirida na comunidade (PAC), que é causada por germes provenientes do meio domiciliar, escolar e comunitário.\n\nSobre o tratamento da PAC, marque a alternativa que indica a medicação de primeira escolha, com sua respectiva dose e o tempo adequado de tratamento:",
    "options": [
      "Amoxicilina 50mg/kg/dia, durante 7 dias.",
      "Amoxicilina 80mg/kg/dia, durante 7 dias.",
      "Amoxicilina 50 mg/kg/dia, durante 10 dias.",
      "Amoxicilina 50 mg/kg/dia, durante 5 dias."
    ],
    "correctAnswer": 0,
    "disputed": [
      3
    ],
    "explanation": "Escolar de 8 anos com pneumonia adquirida na comunidade sem sinais de gravidade (taquipneia leve, sem tiragem ou hipoxemia): tratamento ambulatorial.\n\nO principal agente bacteriano é o Streptococcus pneumoniae, e o antibiótico de primeira escolha é a amoxicilina oral, 50 mg/kg/dia (dividida a cada 8 ou 12 horas). Pelo gabarito oficial, a duração é de 7 dias. Reavaliar em 48–72 horas.",
    "commentary": "Amoxicilina 80 mg/kg/dia (B): doses de 80–90 mg/kg/dia são usadas na otite média aguda em locais com pneumococo resistente; para PAC no Brasil, a dose recomendada é de 50 mg/kg/dia.\n\nAmoxicilina 50 mg/kg/dia por 10 dias (C): 10 dias era a recomendação antiga; tratamentos mais curtos têm a mesma eficácia, com menos efeitos adversos e resistência.\n\nAmoxicilina 50 mg/kg/dia por 5 dias (D): discutível (em amarelo), mas não conta como acerto. Ensaios clínicos recentes (CAP-IT, SAFER) mostraram que 5 dias têm eficácia semelhante a 10 dias na PAC não grave, e algumas diretrizes já adotam esse prazo; a banca seguiu os 7 dias.",
    "tip": "PAC infantil ambulatorial: amoxicilina 50 mg/kg/dia por 5–7 dias; reavaliar em 48–72 h.",
    "reference": "Sociedade Brasileira de Pediatria. Documento científico: Pneumonia adquirida na comunidade na infância, 2018. Bielicki JA et al. CAP-IT trial. JAMA, 2021.",
    "tags": [
      "pneumonia adquirida na comunidade",
      "amoxicilina",
      "pediatria",
      "gabarito discutível"
    ],
    "alert": "Gabarito oficial: A (7 dias). A alternativa D (5 dias, em amarelo) é discutível, mas não conta como acerto: ensaios recentes mostraram que 5 dias bastam na PAC infantil não grave."
  },
  {
    "id": "cesupa2025-46",
    "topography": "11",
    "topic": "Desenvolvimento neuropsicomotor",
    "module": "Pediatria",
    "text": "Marcos do desenvolvimento são um conjunto de habilidades que a maioria das crianças adquire em uma determinada idade.\n\nDe acordo com a tabelas dos marcos do desenvolvimento da caderneta da criança elaborada pelo Ministério da Saúde, é correto afirmar:",
    "options": [
      "Duplicar sílabas é um marco adquirido entre 9-12m.",
      "Mudar de posição (rolar) é um marco adquirido entre 4-6 meses.",
      "Deambular com apoio é um marco adquirido entre 7-9 meses.",
      "Fazer o movimento de pinça é um marco adquirido entre 6-8 meses."
    ],
    "correctAnswer": 1,
    "explanation": "Pelos marcos do desenvolvimento da Caderneta da Criança, mudar de posição ativamente (rolar) é esperado entre 4 e 6 meses.\n\nAlguns marcos da Caderneta para referência:\n\n• 2 a 4 meses: sorriso social, segurar objetos, sustentar a cabeça.\n• 4 a 6 meses: rolar, localizar a fonte do som, levar objetos à boca.\n• 6 a 9 meses: sentar sem apoio, duplicar sílabas, transferir objetos de uma mão para a outra.\n• 9 a 12 meses: pinça, andar com apoio, imitar gestos.\n• 12 a 18 meses: andar sem apoio, primeiras palavras.",
    "commentary": "Duplicar sílabas entre 9 e 12 meses (A): na Caderneta, duplicar sílabas (\"papa\", \"mama\") é marco de 6 a 9 meses.\n\nAndar com apoio entre 7 e 9 meses (C): é marco de 9 a 12 meses.\n\nPinça entre 6 e 8 meses (D): a pinça é marco de 9 a 12 meses.",
    "tip": "Caderneta: rolar 4–6 m; sentar sem apoio e duplicar sílabas 6–9 m; pinça e andar com apoio 9–12 m.",
    "reference": "Ministério da Saúde. Caderneta da Criança – Passaporte da Cidadania, 7ª ed., 2024.",
    "tags": [
      "desenvolvimento neuropsicomotor",
      "marcos do desenvolvimento",
      "caderneta da criança"
    ]
  },
  {
    "id": "cesupa2025-47",
    "topography": "11",
    "topic": "Bronquiolite",
    "module": "Pediatria",
    "text": "Paciente do sexo masculino, 4 meses de idade, dá entrada na emergência de pediatria com quadro de tosse persistente de início há 3 dias, evoluindo com piora progressiva, associado a congestão nasal importante, além de febre aferida entre 37.6°C e 38.2°C. Ao exame físico, apresenta desconforto respiratório leve, com tiragem sub e intercostal, frequência respiratória de 56 irpm, frequência cardíaca de 123 bpm, hidratado, corado, auscultas respiratória com sibilos difusos e estertores subcrepitantes em bases. Sem outras alterações.\n\nCom base no quadro descrito, qual é a principal hipótese diagnóstica, agente causador e tratamento adequado para o quadro?",
    "options": [
      "Broncopneumonia; pneumococo; amoxicilina via oral e seguimento ambulatorial.",
      "Bronquiolite; vírus sincicial respiratório; sintomáticos, lavagem nasal, fisioterapia respiratória e seguimento ambulatorial.",
      "Broncopneumonia; pneumococo; internação hospitalar, ampicilina EV, broncodilatador inalatório e corticoide via oral.",
      "Bronquiolite; vírus sincicial respiratório; internação hospitalar, broncodilatador inalatório, corticoide oral e fisioterapia respiratória."
    ],
    "correctAnswer": 1,
    "explanation": "Lactente de 4 meses com coriza, tosse, febre baixa e, depois, desconforto respiratório com sibilos e estertores difusos: bronquiolite viral aguda, causada principalmente pelo vírus sincicial respiratório (VSR).\n\nO tratamento é de suporte: lavagem nasal com soro fisiológico, hidratação, fracionar as mamadas, oxigênio se SatO₂ < 90–92%. Broncodilatador e corticoide não são recomendados de rotina, pois não mudam o desfecho.\n\nO gabarito considera tratamento ambulatorial com orientação e retorno. Critérios que indicariam internação: idade < 3 meses (ou prematuridade), FR > 60–70 irpm, SatO₂ < 92%, apneia, desconforto importante, dificuldade de mamar ou desidratação. Esta criança tem FR de 56 e tiragem, o que exige vigilância e orientação sobre sinais de alarme.",
    "commentary": "Broncopneumonia por pneumococo com amoxicilina (A): sibilos difusos, pródromo de coriza e idade de 4 meses sugerem infecção viral; a pneumonia bacteriana costuma ter febre alta, toxemia e achado localizado.\n\nBroncopneumonia com internação, ampicilina, broncodilatador e corticoide (C): diagnóstico errado, e broncodilatador e corticoide não têm benefício.\n\nBronquiolite com internação, broncodilatador, corticoide e fisioterapia (D): broncodilatador e corticoide não são recomendados na bronquiolite, e a fisioterapia respiratória de rotina também não tem benefício comprovado.\n\nObservação: a alternativa oficial cita fisioterapia respiratória, que as diretrizes também não recomendam de rotina; ainda assim, é a única que acerta o diagnóstico e o tratamento de suporte.",
    "tip": "Bronquiolite (VSR): suporte — lavagem nasal, hidratação, O₂ se SatO₂ < 90–92%. Sem corticoide, sem broncodilatador de rotina.",
    "reference": "Sociedade Brasileira de Pediatria. Diretrizes para o manejo da infecção causada pelo VSR, 2017. American Academy of Pediatrics. Clinical Practice Guideline: Bronchiolitis, 2014.",
    "tags": [
      "bronquiolite",
      "vírus sincicial respiratório",
      "lactente"
    ]
  },
  {
    "id": "cesupa2025-48",
    "topography": "11",
    "topic": "Alimentação complementar",
    "module": "Pediatria",
    "text": "Menina de 7 meses de idade vem à consulta de puericultura acompanhada de sua mãe, sem queixas clínicas no momento. Aleitamento materno exclusivo até 5 meses de vida, quando iniciou fórmula infantil 3 vezes ao dia, associado a aleitamento materno em livre demanda, suco de frutas nos lanches e legumes amassados no almoço, mantendo a mesma alimentação até o momento. Não faz uso de nenhuma suplementação vitamínica. Nasceu a termo, com peso e estatura adequados para a idade gestacional. No momento da consulta, encontra-se eutrófica e sem nenhuma alteração ao exame físico.\n\nDe acordo com o quadro descrito acima, quais afirmativas estão corretas em relação à conduta adequada para a paciente:\n\n• I – Iniciar refeições com os 5 grupos alimentares (proteínas, carboidratos, leguminosas, verduras e legumes) no almoço e jantar e priorizar frutas in natura nos lanches.\n• II – Preparar a comida da criança em uma panela separada do restante da família, a fim de evitar contato com alimentos alergênicos.\n• III – Iniciar suplementação diária com vitamina D na dose de 400 UI ao dia e ferro na dose de 1 mg/kg/dia.\n• IV – Evitar o aleitamento materno pelo menos 45 minutos antes das principais refeições, para melhorar a aceitação da alimentação complementar.\n• V – Substituir a fórmula infantil por leite de vaca integral, visto que o mesmo já é liberado após os 6 meses de idade.\n• VI – Oferecer a mesma refeição da família desde o início da introdução alimentar, cuidando para que a refeição seja de boa qualidade para todos.",
    "options": [
      "I e III estão corretas.",
      "II, III e V estão corretas.",
      "I, III, IV e V estão corretas.",
      "I, III e VI estão corretas."
    ],
    "correctAnswer": 3,
    "explanation": "Lactente de 7 meses, a termo e eutrófica, que recebe fórmula, leite materno, suco nos lanches e legumes amassados só no almoço, sem suplementos. Avaliando as afirmativas:\n\n• I — correta: aos 7 meses devem ser feitas duas refeições salgadas (almoço e jantar), com todos os grupos alimentares, e frutas in natura nos lanches, no lugar do suco.\n• II — incorreta: não é preciso preparar separado; o Guia recomenda a comida da família, com pouco sal e sem ultraprocessados, e não há indicação de evitar alimentos alergênicos.\n• III — correta: suplementar vitamina D 400 UI/dia no 1º ano e ferro 1 mg/kg/dia dos 6 aos 24 meses (criança a termo, peso adequado).\n• IV — incorreta: não se recomenda restringir o aleitamento antes das refeições.\n• V — incorreta: leite de vaca integral só após 12 meses (risco de anemia ferropriva e sobrecarga renal).\n• VI — correta: a criança deve comer a mesma comida da família, de boa qualidade, amassada no início.\n\nCorretas: I, III e VI.",
    "commentary": "I e III (A): falta a VI, que também é correta.\n\nII, III e V (B): II e V estão erradas (preparo separado não é necessário; leite de vaca integral só após 1 ano).\n\nI, III, IV e V (C): IV e V estão erradas.",
    "tip": "Alimentação complementar: comida da família desde o início, fruta in natura (não suco), leite de vaca só após 1 ano; ferro e vitamina D de rotina.",
    "reference": "Ministério da Saúde. Guia Alimentar para Crianças Brasileiras Menores de 2 Anos, 2019. Sociedade Brasileira de Pediatria. Consenso sobre anemia ferropriva, 2021.",
    "tags": [
      "alimentação complementar",
      "introdução alimentar",
      "suplementação de ferro",
      "vitamina D"
    ]
  },
  {
    "id": "cesupa2025-49",
    "topography": "11",
    "topic": "Anemia ferropriva",
    "module": "Pediatria",
    "text": "Paciente do sexo masculino, 1 ano de idade, vem à consulta de puericultura acompanhado de sua mãe, que se queixa apenas de palidez cutaneomucosa percebida pelos familiares da criança. Nega outras queixas. Menor faz uso de ferro profilático na dose de 1 mg/kg/dia, desde os 6 meses de idade e vitamina D na dose de 400 UI ao dia, desde 7 dias de vida. No exame laboratorial de rotina, apresenta Hb de 10,5 mg/dl. VCM e HCM discretamente diminuídos, ferritina 6 mg/dl, sem outras alterações.\n\nQual a melhor conduta para esse paciente?",
    "options": [
      "Aumentar a dose de ferro para 3 a 6 mg/kg/dia por 6 meses; após esse período, repetir exames laboratoriais e caso a Hb esteja normal, retornar a dose de ferro para 1 mg/kg/dia até os 2 anos, de forma profilática.",
      "Aumentar a dose de ferro para 3 a 5 mg/kg/dia por 3 meses; após esse período, repetir exames laboratoriais e caso a Hb esteja normal, retornar a dose de ferro para 1 mg/kg/dia até os 2 anos, de forma profilática.",
      "Aumentar a dose de ferro para 3 a 6 mg/kg/dia por 6 meses; após esse período, repetir exames laboratoriais e caso a Hb esteja normal, suspender o ferro, pois não há mais necessidade de suplementação.",
      "Aumentar a dose de ferro para 3 a 5 mg/kg/dia por 4 meses; após esse período, repetir exames laboratoriais e caso a Hb esteja normal, retornar a dose de ferro para 2 mg/kg/dia até os 2 anos, de forma profilática."
    ],
    "correctAnswer": 0,
    "explanation": "Criança de 1 ano com palidez, Hb 10,5 g/dL (abaixo de 11 g/dL), VCM e HCM baixos e ferritina muito baixa: anemia ferropriva, apesar do ferro profilático.\n\nO tratamento usa ferro elementar em dose terapêutica, 3 a 6 mg/kg/dia, por tempo suficiente para corrigir a hemoglobina e repor os estoques — no gabarito, 6 meses. Depois, com a Hb normal, volta-se à dose profilática de 1 mg/kg/dia até os 2 anos, já que a faixa de 6 a 24 meses é de alto risco para deficiência de ferro.\n\nA resposta pode ser checada com reticulócitos em 5 a 10 dias e Hb em 30 dias. Também é importante investigar a dieta (excesso de leite de vaca, pouca carne) e a adesão.\n\nObs.: no enunciado, as unidades de Hb e ferritina aparecem como mg/dL; o correto seria g/dL e ng/mL.",
    "commentary": "3 a 5 mg/kg/dia por 3 meses (B): 3 meses costuma ser suficiente para normalizar a Hb, mas não para repor os estoques; o gabarito adota 6 meses.\n\nSuspender o ferro após normalizar (C): a criança continua na faixa de risco até 2 anos e deve voltar à dose profilática.\n\n4 meses e profilaxia com 2 mg/kg/dia (D): a dose profilática é de 1 mg/kg/dia para a criança a termo.",
    "tip": "Anemia ferropriva infantil: ferro 3–6 mg/kg/dia até repor estoques; depois volta ao profilático 1 mg/kg/dia até 2 anos.",
    "reference": "Sociedade Brasileira de Pediatria. Consenso sobre anemia ferropriva: atualização, 2021. Ministério da Saúde. Programa Nacional de Suplementação de Ferro.",
    "tags": [
      "anemia ferropriva",
      "suplementação de ferro",
      "pediatria"
    ]
  },
  {
    "id": "cesupa2025-50",
    "topography": "11",
    "topic": "Calendário vacinal",
    "module": "Pediatria",
    "text": "Lactente, 3 meses e 20 dias, está com o calendário vacinal desatualizado (pendentes as vacinas de 2 e 3 meses) conforme o calendário do Programação Nacional de Imunização (PNI). É levado por sua mãe ao posto de saúde para atualização do calendário vacinal, mas, a mãe é informada que a criança não poderá receber a primeira dose da vacina contra o rotavírus por ter ultrapassado a idade limite para a administração dessa vacina.\n\nDiante do exposto, marque a alternativa correta:",
    "options": [
      "Esta conduta está correta, pois o limite de idade para a primeira dose da vacina contra o rotavírus é de 3 meses e 15 dias.",
      "Esta conduta está incorreta, pois o limite de idade para a primeira dose para vacina contra o rotavírus é de 3 meses e 29 dias.",
      "Esta conduta está incorreta, pois não há limite de idade para a vacina contra o rotavírus.",
      "Esta conduta está correta, pois o limite de idade para a primeira dose da vacina contra o rotavírus é de 2 meses e 15 dias."
    ],
    "correctAnswer": 0,
    "explanation": "A vacina oral contra o rotavírus (VORH, monovalente) tem idade limite, pelo risco de intussuscepção associado à aplicação em lactentes mais velhos.\n\nNo calendário do PNI:\n\n• 1ª dose: aos 2 meses, até 3 meses e 15 dias.\n• 2ª dose: aos 4 meses, até 7 meses e 29 dias.\n\nCom 3 meses e 20 dias, a criança já passou do limite para a primeira dose e não pode mais receber a vacina. A conduta da unidade está correta.",
    "commentary": "Limite de 3 meses e 29 dias (B): esse prazo não existe no calendário; o limite da 1ª dose é 3 meses e 15 dias.\n\nSem limite de idade (C): há limite justamente pelo risco de intussuscepção.\n\nLimite de 2 meses e 15 dias (D): a conduta seria correta, mas o limite citado está errado — é 3 meses e 15 dias.",
    "tip": "Rotavírus: 1ª dose até 3 m e 15 d; 2ª dose até 7 m e 29 d. Passou, não vacina.",
    "reference": "Ministério da Saúde. Calendário Nacional de Vacinação e Manual de Normas e Procedimentos para Vacinação, 2024.",
    "tags": [
      "calendário vacinal",
      "rotavírus",
      "imunização"
    ]
  }
];
