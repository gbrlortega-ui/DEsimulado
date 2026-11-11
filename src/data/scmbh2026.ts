import { Question } from '../types';

// SCM-BH 2026 — residência médica da Santa Casa de Misericórdia de Belo Horizonte. 75 questões.
// Gabarito conferido no gabarito comentado do AjudaMédico; explicações com texto próprio.
export const SCMBH_2026_QUESTIONS: Question[] = [
  {
    "id": "scmbh2026-1",
    "topography": "5.2",
    "topic": "Gravidez ectópica",
    "module": "Cirurgia",
    "text": "Uma senhora melanodérmica, com idade de 25 anos, recém-formada em Medicina, sem doença conhecida ou uso de medicação, durante um plantão na urgência, queixou-se de forte dor no hipogástrio e, em seguida, teve lipotimia. Atendida imediatamente, verificou-se a presença de mucosas hipocoradas, distensão abdominal e pressão arterial de 95/45 mmHg. O exame ultrassonográfico mostrou grande volume líquido intra-abdominal, diagnosticado como sangue e confirmado por punção.\n\nDentre as alternativas seguintes, a partir desses dados, qual é a causa MAIS provável desse abdome agudo hemorrágico?",
    "options": [
      "(A) Ruptura espontânea do baço.",
      "(B) Ruptura de hemangioma hepático.",
      "(C) Ruptura tubária por gravidez.",
      "(D) Ruptura de aneurisma arterial."
    ],
    "correctAnswer": 2,
    "explanation": "Mulher de 25 anos em idade fértil, previamente hígida, com dor súbita no hipogástrio, lipotimia, hipotensão e hemoperitônio volumoso. Em mulher jovem, a causa mais provável de abdome agudo hemorrágico não traumático é a gravidez ectópica rota (tubária).\n\nA conduta inclui beta-hCG, reposição volêmica e cirurgia de urgência. Rotura de cisto de corpo lúteo é o principal diferencial.",
    "commentary": "Ruptura espontânea do baço (A): rara sem trauma ou doença esplênica (mononucleose, malária), e a dor seria no hipocôndrio esquerdo.\n\nHemangioma hepático (B): ruptura espontânea é raríssima.\n\nAneurisma arterial (D): improvável em jovem sem fatores de risco; a ruptura de aneurisma de artéria esplênica ocorre sobretudo em gestantes no 3º trimestre.",
    "reference": "Sabiston Tratado de Cirurgia — Abdome agudo / Febrasgo — Gravidez ectópica",
    "tags": [
      "cirurgia geral",
      "abdome agudo hemorrágico",
      "gravidez ectópica"
    ]
  },
  {
    "id": "scmbh2026-2",
    "module": "Cirurgia",
    "text": "Um homem feodérmico, de 63 anos, procurou o serviço médico por sentir fraqueza e perceber emagrecimento. Ao exame físico, o paciente estava em bom estado geral, com mucosa hipocorada +/4+ e sinal de Troisier, sem outras manifestações.\n\nDentre as seguintes doenças, assinale a que deve, obrigatoriamente, ser investigada.",
    "options": [
      "(A) Hipoparatireoidismo.",
      "(B) Câncer gástrico.",
      "(C) Enfisema pulmonar.",
      "(D) Doença de Plummer."
    ],
    "correctAnswer": 1,
    "explanation": "O sinal de Troisier é a palpação de um linfonodo supraclavicular esquerdo aumentado (linfonodo de Virchow), que recebe a drenagem do ducto torácico. Indica metástase de neoplasia abdominal, classicamente o adenocarcinoma gástrico.\n\nCom emagrecimento e anemia, a investigação obrigatória é a endoscopia digestiva alta.",
    "commentary": "Hipoparatireoidismo (A): não causa linfonodomegalia supraclavicular.\n\nEnfisema pulmonar (C): não se associa ao linfonodo de Virchow.\n\nDoença de Plummer (D): bócio nodular tóxico, sem relação com o sinal.",
    "reference": "Sabiston Tratado de Cirurgia — Câncer gástrico / Porto — Semiologia Médica",
    "tags": [
      "cirurgia do aparelho digestivo",
      "câncer gástrico",
      "sinal de Troisier",
      "linfonodo de Virchow"
    ]
  },
  {
    "id": "scmbh2026-3",
    "topography": "3.1",
    "topic": "Câncer colorretal",
    "module": "Cirurgia",
    "text": "Uma senhora leucodérmica, de 66 anos, procurou o serviço proctológico por perceber a presença de uma lesão anal esquerda. Ela não era dolorosa, não interferia com a defecação, que era normal, e sangrava eventualmente em quantidade pequena. Ao exame físico, a lesão tinha aspecto vegetante e media cerca de 45mm. Feita biópsia incisional, o diagnóstico foi de carcinoma espinocelular anal.\n\nTendo em vista que esse câncer metastatiza, onde são encontradas, inicialmente, as suas metástases?",
    "options": [
      "(A) Linfonodos retroperitoneais",
      "(B) Fígado e Pulmão",
      "(C) Linfonodos mesentéricos",
      "(D) Linfonodos inguinais"
    ],
    "correctAnswer": 3,
    "explanation": "O carcinoma espinocelular do canal anal (abaixo da linha pectínea, sobretudo da margem anal) drena para os linfonodos inguinais superficiais, que são o primeiro sítio de metástase. Tumores acima da linha pectínea drenam para os linfonodos perirretais e ilíacos internos.\n\nO tratamento padrão é a quimiorradioterapia (protocolo de Nigro), incluindo as cadeias inguinais.",
    "commentary": "Retroperitoneais (A): não são a primeira estação de drenagem do canal anal.\n\nFígado e pulmão (B): metástases à distância são tardias e menos frequentes.\n\nMesentéricos (C): drenam o cólon e o reto alto, não o canal anal.",
    "reference": "NCCN Guidelines — Anal Carcinoma / Sabiston — Ânus",
    "tags": [
      "coloproctologia",
      "câncer anal",
      "carcinoma espinocelular",
      "drenagem linfática"
    ]
  },
  {
    "id": "scmbh2026-4",
    "topography": "16",
    "topic": "Hérnias",
    "module": "Cirurgia",
    "text": "Uma senhora de 54 anos procurou o atendimento médico por dor na região inguinofemoral esquerda com irradiação para o lábio maior do mesmo lado. Ao exame físico, percebeu-se uma protrusão local, porém o médico teve dúvida quanto ao diagnóstico e solicitou um exame ultrassonográfico. O ultrassonografista telefonou para o médico e disse-lhe que, de fato, era uma hérnia e era a mais frequentemente encontrada nessa região.\n\nCom base apenas nessas informações, dentre os itens seguintes, assinale qual era essa hérnia.",
    "options": [
      "(A) Hérnia incisional.",
      "(B) Hérnia inguinal indireta.",
      "(C) Hérnia inguinal direta.",
      "(D) Hérnia femoral."
    ],
    "correctAnswer": 1,
    "explanation": "Em qualquer sexo, inclusive nas mulheres, a hérnia mais frequente da região inguinofemoral é a inguinal indireta. A hérnia femoral é proporcionalmente mais comum em mulheres do que em homens, mas mesmo nelas a inguinal indireta continua sendo a mais frequente.\n\nA irradiação para o grande lábio acompanha o trajeto do ligamento redondo pelo canal inguinal.",
    "commentary": "Incisional (A): ocorre em cicatriz cirúrgica, ausente.\n\nInguinal direta (C): mais comum em homens idosos e rara em mulheres.\n\nFemoral (D): mais comum em mulheres do que em homens, mas menos frequente que a inguinal indireta mesmo nelas.",
    "reference": "HerniaSurge — International Guidelines for Groin Hernia Management (2018)",
    "tags": [
      "cirurgia geral",
      "hérnia inguinal",
      "hérnia femoral",
      "parede abdominal"
    ]
  },
  {
    "id": "scmbh2026-5",
    "topography": "16",
    "topic": "Pós-operatório",
    "module": "Cirurgia",
    "text": "Um homem de 64 anos foi submetido à gastrectomia parcial, linfadenectomia regional e restabelecimento do trânsito digestório por anastomose gastrojejunal, para tratar adenocarcinoma do tipo intestinal de Laurén, localizado no antro gástrico. Ao final da operação, foi inserido um cateter nasoentérico para nutrição enteral a partir do segundo dia pós-operatório. No quarto dia pós-operatório, começou a sair líquido gastroentérico por um dreno sentinela, colocado próximo à anastomose e exteriorizado pela parede abdominal direita, abaixo do gradil costal. O exame contrastado confirmou a fístula anastomótica, drenando para o exterior, sem coleção de líquido próximo a ela. A drenagem diária era ao redor de 150 ml. O paciente continuou clinicamente bem, sendo nutrido apenas pelo tubo nasoentérico e sem queixas abdominais, com peristaltismo normal e evacuações com fezes amolecidas.\n\nQual a conduta a ser adotada para tratar essa fístula?",
    "options": [
      "(A) Manter o paciente em acompanhamento clínico sem mudar a conduta.",
      "(B) Injetar substância esclerosante através do dreno para fechar a fístula mais rápido.",
      "(C) Interromper a nutrição enteral e iniciar parenteral para acelerar a cicatrização.",
      "(D) Laparotomia para suturar a fístula e derivar o trajeto alimentar gastroentérico."
    ],
    "correctAnswer": 0,
    "explanation": "Fístula da anastomose gastrojejunal de baixo débito (150 mL/dia), externalizada pelo dreno, sem coleção, sem peritonite ou sepse, em paciente estável e bem nutrido por via enteral distal (sonda pós-anastomose).\n\nFístulas controladas fecham espontaneamente na maioria dos casos com manejo conservador: drenagem adequada, nutrição (de preferência enteral além da fístula), controle de infecção e cuidados com a pele. A conduta é manter o tratamento atual e acompanhar.",
    "commentary": "Esclerosante pelo dreno (B): não é tratamento estabelecido para fístula anastomótica.\n\nTrocar para nutrição parenteral (C): a nutrição enteral distal é preferível e não impede o fechamento.\n\nRelaparotomia (D): reservada a peritonite, sepse ou fístula não controlada.",
    "reference": "Sabiston — Fístulas digestivas / BRASPEN — Terapia nutricional em fístulas",
    "tags": [
      "cirurgia do aparelho digestivo",
      "fístula anastomótica",
      "gastrectomia",
      "nutrição enteral"
    ]
  },
  {
    "id": "scmbh2026-6",
    "topography": "1.5",
    "topic": "Câncer de tireoide",
    "module": "Cirurgia",
    "text": "Um homem melanodérmico, com 61 anos de idade, sem manifestações clínicas ou uso de medicamentos, procurou o médico para avaliação de controle. Ao exame físico, na palpação cervical, percebeu-se um pequeno nódulo na parte superior do lobo direito da tireoide. Solicitou-se punção biópsia aspirativa por agulha fina orientada por ultrassonografia. A citologia revelou carcinoma folicular no nódulo que media 21 mm, sem outras alterações morfológicas da tireoide, cuja função era normal.\n\nQual é a conduta CORRETA nesse paciente?",
    "options": [
      "(A) Tratamento com iodo radioativo apenas.",
      "(B) Lobectomia direita e iodoterapia.",
      "(C) Lobectomia direita e istmectomia.",
      "(D) Tireoidectomia total e iodoterapia."
    ],
    "correctAnswer": 2,
    "explanation": "Pela ATA 2015, carcinomas diferenciados de tireoide unifocais de 1 a 4 cm, sem extensão extratireoidiana nem linfonodos, podem ser tratados com lobectomia (com istmectomia) ou tireoidectomia total. O nódulo de 21 mm, único, em tireoide sem outras alterações, é baixo risco.\n\nO gabarito escolheu a lobectomia com istmectomia. A iodoterapia não é rotina no baixo risco e exige tireoidectomia total. A punção aspirativa não diferencia adenoma de carcinoma folicular (que exige invasão capsular ou vascular na histologia); a lobectomia também é diagnóstica.",
    "commentary": "Só iodo radioativo (A): não trata o tumor sem cirurgia.\n\nLobectomia e iodoterapia (B): com lobo contralateral presente, o iodo é captado pela tireoide remanescente; a iodoterapia exige tireoidectomia total.\n\nTireoidectomia total e iodoterapia (D): pode ser opção, mas não é obrigatória no tumor de baixo risco de 2 cm, e a iodoterapia não é rotina.",
    "reference": "ATA — 2015 Management Guidelines for Thyroid Nodules and Differentiated Thyroid Cancer",
    "tags": [
      "cirurgia de cabeça e pescoço",
      "câncer de tireoide",
      "carcinoma folicular",
      "lobectomia"
    ]
  },
  {
    "id": "scmbh2026-7",
    "module": "Cirurgia",
    "text": "Uma senhora feodérmica, de 27 anos, estava em acompanhamento, no segundo mês de gravidez, com seu obstetra. A gravidez estava seguindo sem intercorrências e o médico solicitou ultrassom de abdome total, que revelou dois cistos, com diâmetro medindo dois e três centímetros, localizados no polo inferior e junto ao pedículo vascular do baço, com paredes finas e conteúdo líquido límpido.\n\nCom base apenas nos dados apresentados, qual é a conduta MAIS adequada entre as seguintes?",
    "options": [
      "(A) Acompanhamento clínico periódico, com imagens do baço.",
      "(B) Puncionar os cistos, esvaziá-los e injetar substância esclerosante.",
      "(C) Aguardar até o terceiro trimestre para ressecar os cistos.",
      "(D) Operar os cistos por laparoscopia seis meses após o parto."
    ],
    "correctAnswer": 0,
    "explanation": "Cistos esplênicos pequenos (2 e 3 cm), simples (paredes finas, conteúdo límpido), assintomáticos e achados incidentalmente: a conduta é expectante, com controle clínico e por imagem.\n\nO tratamento (preferencialmente com preservação esplênica) fica para cistos sintomáticos ou maiores que 5 cm, pelo risco de ruptura ou infecção.",
    "commentary": "Punção e esclerose (B): alta recidiva e sem indicação em cistos pequenos assintomáticos.\n\nRessecção no 3º trimestre (C): cirurgia sem indicação e no período de maior risco obstétrico.\n\nLaparoscopia pós-parto (D): não há indicação de cirurgia para cistos pequenos e assintomáticos.",
    "reference": "Sabiston — Baço / Revisões sobre cistos esplênicos não parasitários",
    "tags": [
      "cirurgia geral",
      "cisto esplênico",
      "conduta expectante",
      "gestação"
    ]
  },
  {
    "id": "scmbh2026-8",
    "module": "Cirurgia",
    "text": "Um homem leucodérmico e com idade de 61 anos, etilista e tabagista por mais de 40 anos, emagrecido, mas sem uso de medicamentos, procurou o seu consultório com queixa de dificuldade para engolir alimentos sólidos. Entre os exames solicitados, a endoscopia mostrou uma lesão de quatro centímetros, dois centímetros distalmente ao esfincter esofágico superior. A biópsia confirmou a suspeita de carcinoma espinocelular.\n\nCom base apenas nessas informações, entre os itens seguintes, qual o tratamento INDICADO nesse caso?",
    "options": [
      "(A) Neoadjuvância com quimio e radioterapia, seguida de esofagectomia e esofagogastroplastia.",
      "(B) Neoadjuvância com quimio e radioterapia, seguida de esofagectomia e esofagocoloplastia.",
      "(C) Somente quimioterapia e radioterapia em ciclos completos e sem esofagectomia.",
      "(D) Introdução de prótese esofágica por endoscopia para nutrir e depois tratar o paciente."
    ],
    "correctAnswer": 2,
    "explanation": "Carcinoma espinocelular de esôfago cervical (a 2 cm do esfíncter esofágico superior). Nos tumores do esôfago cervical, a esofagectomia exigiria laringectomia (faringolaringoesofagectomia), com grande morbidade.\n\nO tratamento de escolha é a quimiorradioterapia definitiva, com resultados comparáveis à cirurgia e preservação da laringe. A cirurgia fica como resgate.",
    "commentary": "Neoadjuvância e esofagectomia com estômago (A): padrão para esôfago torácico, não para o cervical alto.\n\nNeoadjuvância e esofagectomia com cólon (B): mesmo problema, com morbidade ainda maior.\n\nPrótese endoscópica (D): paliação da disfagia; não é tratamento inicial com intenção curativa, e próteses junto ao esfíncter superior são mal toleradas.",
    "reference": "NCCN Guidelines — Esophageal Cancer (Cervical Esophagus)",
    "tags": [
      "cirurgia do aparelho digestivo",
      "câncer de esôfago",
      "esôfago cervical",
      "quimiorradioterapia"
    ]
  },
  {
    "id": "scmbh2026-9",
    "topography": "3.1",
    "topic": "Câncer colorretal",
    "module": "Cirurgia",
    "text": "Um homem feodérmico, com 59 anos de idade e obeso, queixando dor intensa no flanco direito, febre termometrada de 37,9ºC, vômitos e queda do estado geral, procurou o serviço de urgência hospitalar. Os exames complementares revelaram anemia, leucócitose e distensão de íleo e ceco, não sendo possível identificar o apêndice, sem outras alterações. Com a hipótese diagnóstica de apendicite aguda, foi indicada laparoscopia para apendicectomia. Durante a operação, verificou-se o apêndice normal, mas foi encontrado um grande tumor no cólon ascendente.\n\nTendo por base apenas esses dados, qual deve ser a CONDUTA nesse paciente entre as apresentadas a seguir?",
    "options": [
      "(A) Realizar ileostomia, seguida de colonoscopia para biopsiar o tumor e decidir a conduta correta.",
      "(B) Realizar ileocolectomia direita com linfadenectomia regional e ileotransversostomia laterolateral.",
      "(C) Retirar o tumor com margem de cinco centímetros, linfadenectomia regional e anastomose colônica.",
      "(D) Realizar cecostomia descompressiva, colonoscopia com biópsia, quimioterapia redutora e cirurgia."
    ],
    "correctAnswer": 1,
    "explanation": "Achado intraoperatório de grande tumor do cólon ascendente, causando sintomas inflamatórios e distensão de íleo e ceco (suboclusão), em paciente sem perfuração ou instabilidade descritas.\n\nA conduta oncológica adequada é a colectomia direita (ileocolectomia) com linfadenectomia regional (ligadura dos vasos ileocólicos e cólicos direitos) e anastomose ileotransversa no mesmo tempo, que é segura no cólon direito.",
    "commentary": "Ileostomia, colonoscopia e decidir depois (A): adia o tratamento de uma lesão já identificada e ressecável.\n\nRessecção com margem de 5 cm (C): não respeita a ressecção vascular e linfonodal oncológica do cólon direito.\n\nCecostomia e quimioterapia neoadjuvante (D): não é padrão no câncer de cólon ressecável.",
    "reference": "NCCN Guidelines — Colon Cancer / ASCRS Clinical Practice Guidelines",
    "tags": [
      "coloproctologia",
      "câncer colorretal",
      "colectomia direita",
      "abdome agudo"
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
    "id": "scmbh2026-11",
    "topography": "16",
    "topic": "Perfuração de víscera oca",
    "module": "Cirurgia",
    "text": "Um homem de 44 anos, feodérmico, estava festejando com os amigos em um restaurante e, após alcoolismo intenso, passou a apresentar muitos episódios de vômitos. Subitamente, sentiu uma dor intensa e persistente torácica e abdominal, seguida de dispneia, enfisema cervical, queda pressórica e lipotimia.\n\nO diagnóstico MAIS provável entre os itens seguintes é:",
    "options": [
      "(A) Ruptura de enfisema bolhoso pulmonar.",
      "(B) Ruptura gastrodiafragmática.",
      "(C) Ruptura traqueal e brônquica.",
      "(D) Ruptura do esôfago."
    ],
    "correctAnswer": 3,
    "explanation": "Vômitos intensos após ingestão alcoólica, seguidos de dor torácica e abdominal súbita e intensa, enfisema subcutâneo cervical, dispneia e choque: síndrome de Boerhaave (ruptura espontânea transmural do esôfago, em geral no terço distal, à esquerda).\n\nA tríade de Mackler é vômitos, dor torácica e enfisema subcutâneo. O diagnóstico é por esofagograma com contraste hidrossolúvel ou TC. O tratamento é cirúrgico de urgência na maioria, com antibiótico e suporte.",
    "commentary": "Ruptura de bolha de enfisema (A): causaria pneumotórax, sem relação com vômitos e sem enfisema cervical como quadro típico.\n\nRuptura gastrodiafragmática (B): não é entidade espontânea associada a vômitos.\n\nRuptura traqueobrônquica (C): ocorre em trauma, não após vômitos.",
    "reference": "Sabiston — Esôfago: perfuração esofágica / WSES Guidelines (2019)",
    "tags": [
      "cirurgia torácica",
      "síndrome de Boerhaave",
      "perfuração esofágica",
      "tríade de Mackler"
    ]
  },
  {
    "id": "scmbh2026-12",
    "topography": "3.3",
    "topic": "Colelitíase",
    "module": "Cirurgia",
    "text": "Uma senhora melanodérmica, com 46 anos de idade, foi internada com dor intensa no andar superior do abdome. Previamente, a paciente era hígida e assintomática. Diagnosticou-se pancreatite biliar grave, e ela ficou internada durante dois meses, período no qual, foi submetida à colecistectomia e retirada endoscópica de cálculos coledocianos. Ela recebeu alta em boas condições gerais, mas, após quatro meses, desenvolveu um pseudocisto de corpo pancreático que foi crescendo no espaço retrogástrico. Após um ano, esse cisto de parede espessa media 22cm e trazia desconforto, principalmente dispéptico, por compressão gástrica posterior.\n\nQual é a MELHOR conduta nesse caso?",
    "options": [
      "(A) Puncionar o pseudocisto guiado por ultrassonografia e esvaziá-lo, depois injetar substância esclerosante, para que não se forme novamente.",
      "(B) Operar a paciente por laparoscopia e drenar o conteúdo do pseudocisto fisiologicamente para o duodeno por anastomose laterolateral.",
      "(C) Drenagem ampla do pseudocisto para o estômago, através de sua parede posterior, por endoscopia guiada por ecoendoscopia sem outro procedimento.",
      "(D) Pancreatectomia corpocaudal, com preservação do baço e seu pedículo vascular, pelo risco de malignização do pseudocisto."
    ],
    "correctAnswer": 1,
    "explanation": "Pseudocisto pancreático maduro (mais de 1 ano, parede espessa), gigante (22 cm), retrogástrico e sintomático por compressão: indicação de drenagem interna.\n\nO gabarito oficial escolheu a drenagem cirúrgica laparoscópica para alça intestinal (cistoenteroanastomose), argumentando que, em cistos gigantes, ela permite comunicação ampla e estável e menos obstrução por debris. As diretrizes atuais (AGA, ESGE) preferem, quando o cisto é adjacente ao estômago, a drenagem endoscópica transmural guiada por ecoendoscopia, com eficácia semelhante e menor morbidade.",
    "commentary": "Punção percutânea com esclerose (A): alta recidiva, risco de fístula externa, e o esclerosante pode lesar um ducto comunicante.\n\nDrenagem endoscópica guiada por ecoendoscopia (C): é a primeira escolha atual para pseudocisto retrogástrico; também é aceita aqui pela controvérsia com o gabarito.\n\nPancreatectomia corpocaudal (D): pseudocisto não malignifica; ressecção de grande porte sem indicação.",
    "reference": "AGA Clinical Practice Update on Pancreatic Necrosis (2020) / ESGE Guideline (2018) / Sabiston",
    "tags": [
      "cirurgia do aparelho digestivo",
      "pseudocisto pancreático",
      "drenagem interna",
      "ecoendoscopia"
    ],
    "alsoAccepted": [
      2
    ],
    "alert": "Gabarito oficial discutível: para pseudocisto maduro retrogástrico, as diretrizes atuais preferem a drenagem endoscópica guiada por ecoendoscopia (alternativa C). O gabarito oficial é a drenagem cirúrgica laparoscópica (B). A alternativa C também é aceita como correta."
  },
  {
    "id": "scmbh2026-13",
    "topography": "3.3",
    "topic": "Colangiocarcinoma",
    "module": "Cirurgia",
    "text": "Um homem leucodérmico, com idade de 51 anos, previamente hígido e assintomático, procurou atendimento médico por causa de prurido intenso e progressivo em toda a superfície corpórea. Ele estava ictérico às custas de bilirrubina direta elevada. A endoscopia revelou um tumor vegetante na papila duodenal sem outras anormalidades. Feita colangiopancreatografia retrógrada com biópsia, diagnosticou-se adenocarcinoma de papila duodenal. O estudo de ressonância magnética não mostrou linfadenomegalia regional.\n\nCom base nesses dados, qual é a conduta ADEQUADA, nesse caso, entre os itens seguintes?",
    "options": [
      "(A) Apenas a retirada do tumor por via endoscópica, com margens amplas livres, tendo em vista ser ele in situ sem metástases e acompanhamento clínico.",
      "(B) Gastroduodenopancreatectomia cefálica e colecistectomia em monobloco com linfonodos regionais, seguida de reconstrução do trânsito com jejuno.",
      "(C) Exérese do colédoco distal e segmento lateral do duodeno, incluindo a papila, seguida de derivação com jejuno em Y de Roux.",
      "(D) Retirada da papila, junto com a mucosa duodenal e a parte transmural do colédoco distal, preservando o ducto pancreático, seguida por anastomose coledocoduodenal."
    ],
    "correctAnswer": 1,
    "explanation": "Adenocarcinoma de papila duodenal (periampular) com icterícia obstrutiva, sem metástases ou linfonodomegalia, em paciente jovem e hígido.\n\nO tratamento com intenção curativa é a duodenopancreatectomia cefálica (cirurgia de Whipple), com colecistectomia e linfadenectomia regional em monobloco, reconstruindo o trânsito com alça jejunal. Os tumores ampulares têm o melhor prognóstico entre os periampulares.",
    "commentary": "Ressecção endoscópica (A): reservada a adenomas ampulares sem invasão; não serve para adenocarcinoma invasivo.\n\nRessecção parcial do colédoco e duodeno (C): não é ressecção oncológica adequada.\n\nAmpulectomia cirúrgica (D): insuficiente para adenocarcinoma, por não remover a drenagem linfática.",
    "reference": "NCCN Guidelines — Ampullary Adenocarcinoma / Sabiston — Pâncreas",
    "tags": [
      "cirurgia do aparelho digestivo",
      "câncer periampular",
      "duodenopancreatectomia",
      "icterícia obstrutiva"
    ]
  },
  {
    "id": "scmbh2026-14",
    "module": "Cirurgia",
    "text": "Um homem leucodérmico, de 26 anos, procurou atendimento médico por perceber a sua esclera ocular tornar-se amarelada, sem outras queixas. Ao exame físico, confirmou-se a icterícia e sua bilirrubina direta estava em 9 mg/dl, enquanto a indireta era de 1,2 mg/dl. Em exames de imagem consecutivos, a ressonância magnética confirmou a doença de Caroli, restrita ao segmento VI do fígado, com seu ducto biliar obstruído e sem outras anormalidades hepáticas.\n\nQual é a conduta MAIS adequada nesse paciente?",
    "options": [
      "(A) Derivação ducto VI jejunal.",
      "(B) Hepatectomia direita.",
      "(C) Exérese do segmento VI.",
      "(D) Colocação de prótese no ducto do segmento VI."
    ],
    "correctAnswer": 2,
    "explanation": "Doença de Caroli (dilatações císticas congênitas dos ductos biliares intra-hepáticos) restrita a um único segmento (VI), com obstrução ductal e icterícia, sem doença hepática difusa.\n\nNas formas localizadas, a ressecção hepática do segmento acometido é curativa: remove os ductos dilatados e o risco de colangite, litíase e colangiocarcinoma. As formas difusas podem exigir transplante.",
    "commentary": "Derivação biliodigestiva (A): mantém os ductos doentes, com risco de colangite e de câncer.\n\nHepatectomia direita (B): ressecção excessiva para doença restrita a um segmento.\n\nPrótese no ducto (D): medida paliativa, não definitiva.",
    "reference": "Sabiston — Vias biliares: doenças císticas / Classificação de Todani",
    "tags": [
      "cirurgia hepatobiliar",
      "doença de Caroli",
      "hepatectomia segmentar"
    ]
  },
  {
    "id": "scmbh2026-15",
    "topography": "16",
    "topic": "Trauma abdominal",
    "module": "Cirurgia",
    "text": "Uma senhora de 49 anos foi vítima de atropelamento, com múltiplas lesões intra-abdominais, incluindo fígado e baço, que foram tratadas conservadoramente. Após dois meses de sua alta hospitalar, em controle médico, foi constatada anemia. Nos exames laboratoriais, foi verificada a presença de sangue oculto nas fezes. Foram realizados exames endoscópicos que mostraram saída de sangue pela papila duodenal, indicando hemobilia. Constatou-se, nos exames de imagem, ser ela consequente ao trauma.\n\nCom os dados apresentados, dentre os itens seguintes, qual é a conduta CORRETA nessa paciente?",
    "options": [
      "(A) Dissecção hepática até alcançar o vaso sangrante, que deverá ser ligado e colocar dreno no ducto biliar correspondente.",
      "(B) Hepatectomia segmentar da região hepática onde está localizada a fístula arteriobiliar para interromper sangramento.",
      "(C) Colocação de Stent ou prótese no ducto biliar de onde provém o sangramento, por colangiografia para ocluir o vaso.",
      "(D) Embolização seletiva, geralmente arterial, por meio de arteriografia guiada por método hemodinâmico de imagem."
    ],
    "correctAnswer": 3,
    "explanation": "Hemobilia tardia após trauma hepático tratado conservadoramente, por fístula arteriobiliar ou pseudoaneurisma da artéria hepática (a tríade de Quincke é dor em cólica biliar, icterícia e sangramento digestivo).\n\nO tratamento de escolha é a arteriografia com embolização seletiva do ramo arterial sangrante, eficaz em mais de 80–90% dos casos e minimamente invasiva. A cirurgia fica para falha.",
    "commentary": "Dissecção hepática e ligadura (A): cirurgia de alta morbidade, reservada à falha da embolização.\n\nHepatectomia segmentar (B): também é resgate após falha endovascular.\n\nStent biliar (C): não oclui a fonte arterial do sangramento.",
    "reference": "Sabiston — Trauma hepático e hemobilia / WSES Liver Trauma Guidelines (2020)",
    "tags": [
      "trauma",
      "hemobilia",
      "embolização arterial",
      "trauma hepático"
    ]
  },
  {
    "id": "scmbh2026-16",
    "topography": "1.1",
    "topic": "Meningite",
    "module": "Clínica Médica",
    "text": "Em um plantão na UPA, você atende um paciente do sexo masculino, 67 anos, previamente hígido, com cefaleia holocraniana em pressão há, aproximadamente, 24 horas, relato de febre termometrada acima de 38 graus e relatos de vômitos. Sem outras alterações à avaliação inicial. Ao exame físico, apresenta abertura ocular ao chamado, movimenta-se ativamente e mantém diálogo organizado. Apresenta-se com rigidez de nuca discreta, sem papiledema à avaliação de fundo de olho e sem déficit focal. PA 138×78mmHg, FC: 105bpm, SatO₂: 99% aa Exames iniciais: Hb:13.3 GL:15800 (12% de células imaturas – bastonetes e meta) n: 9800 Plaq: 168000 Cr:1,1 Ur:42 Na:138 K:3,5 Glicemia: 132.\n\nQual a PRÓXIMA conduta, considerando as alternativas a seguir?",
    "options": [
      "(A) TC de crânio.",
      "(B) Iniciar ceftriaxona + vancomicina + dexametasona e aguardar imagem para punção lombar.",
      "(C) Punção lombar imediata, e logo Ceftriaxona EV + Ampicilina EV + dexametasona.",
      "(D) Aguardar painel viral de LCR para decidir terapia."
    ],
    "correctAnswer": 2,
    "explanation": "Idoso com febre, cefaleia, vômitos e rigidez de nuca: meningite bacteriana aguda. Não há indicação de TC antes da punção: não há déficit focal, papiledema, crise convulsiva, imunossupressão nem rebaixamento significativo (está orientado e dialogando).\n\nA conduta é punção lombar imediata seguida de antibiótico e dexametasona, sem atraso. Acima de 50 anos, o esquema empírico inclui ampicilina para cobrir Listeria monocytogenes, além da cefalosporina de 3ª geração (e vancomicina onde houver pneumococo resistente).",
    "commentary": "TC de crânio (A): atrasa o diagnóstico e o tratamento sem indicação clínica.\n\nAntibiótico e aguardar imagem (B): não há indicação de imagem; e acima de 50 anos falta a ampicilina para Listeria.\n\nAguardar painel viral (D): o quadro é bacteriano, e esperar aumenta a mortalidade.",
    "reference": "IDSA Practice Guidelines for Bacterial Meningitis / ESCMID (2016)",
    "tags": [
      "infectologia",
      "meningite bacteriana",
      "listeriose",
      "punção lombar"
    ]
  },
  {
    "id": "scmbh2026-17",
    "topography": "4.1",
    "topic": "Cistite",
    "module": "Clínica Médica",
    "text": "Paciente atendida em unidade básica de saúde, estudante do sexo feminino, 22 anos, sem comorbidades, apresenta disúria e polaciúria, há 24 horas, sem febre ou dor lombar. Nuligesta e sem uso recente de medicamentos. EAS: leucócito-esterase positiva, nitrito positivo e hematúria microscópica.\n\nQual o tratamento MAIS adequado?",
    "options": [
      "(A) Nitrofurantoína 100 mg a cada 12 horas por 5 dias.",
      "(B) Ciprofloxacino 500 mg a cada 12 horas por 7 dias.",
      "(C) Urocultura e iniciar Ceftriaxona 1g endovenosa dose única.",
      "(D) Urocultura e iniciar Fosfomicina 3g a cada 48 horas por 3 doses."
    ],
    "correctAnswer": 0,
    "explanation": "Mulher jovem, não gestante, sem comorbidades, com disúria e polaciúria sem febre ou dor lombar: cistite aguda não complicada.\n\nNão é necessária urocultura. O tratamento é empírico de curta duração, com primeira linha nitrofurantoína 100 mg de 12/12 h por 5 dias ou fosfomicina 3 g em dose única. As fluoroquinolonas devem ser poupadas para infecções mais graves, por efeitos adversos e resistência.",
    "commentary": "Ciprofloxacino por 7 dias (B): fluoroquinolonas não são primeira linha na cistite não complicada, e a duração é excessiva.\n\nUrocultura e ceftriaxona IV (C): via parenteral desnecessária.\n\nFosfomicina a cada 48 h por 3 doses (D): esquema usado em casos específicos; na cistite não complicada é dose única, sem necessidade de urocultura.",
    "reference": "IDSA Guidelines for Uncomplicated Cystitis / Diretrizes da SBU e da Febrasgo",
    "tags": [
      "infectologia",
      "infecção do trato urinário",
      "cistite",
      "nitrofurantoína"
    ]
  },
  {
    "id": "scmbh2026-18",
    "topography": "2.1",
    "topic": "Pneumonia hospitalar",
    "module": "Clínica Médica",
    "text": "Em um plantão na terapia Intensiva, você acaba de avaliar um paciente do sexo masculino, de 74 anos, portador de DPOC e diabetes mellitus tipo 2, internado há 5 dias em UTI, por acidente vascular cerebral isquêmico, atualmente em VM com TOT em redução de parâmetros até então. Durante o plantão, evolui com febre de 38,9 °C, secreção traqueal purulenta e seguinte imagem:\n\nA unidade tem prevalência de MRSA 25 % e alta taxa de bacilos gram-negativos multirresistentes. Qual o esquema empírico inicial MAIS indicado?",
    "options": [
      "(A) Ceftriaxona e azitromicina.",
      "(B) Piperacilina-tazobactam e linezolida.",
      "(C) Piperacilina-tazobactam.",
      "(D) Meropenem."
    ],
    "correctAnswer": 1,
    "explanation": "Paciente em ventilação mecânica há mais de 48 horas com febre, secreção purulenta e novo infiltrado na radiografia: pneumonia associada à ventilação mecânica.\n\nNa unidade com MRSA acima de 10–20% e alta prevalência de Gram-negativos multirresistentes, o esquema empírico deve cobrir Pseudomonas e Gram-negativos resistentes (piperacilina-tazobactam, cefepime ou carbapenêmico) e MRSA (linezolida ou vancomicina). A ATS/IDSA recomenda dois antipseudomônicos se o risco de multirresistência for alto. Depois, descalona-se pelas culturas.",
    "commentary": "Ceftriaxona e azitromicina (A): esquema de pneumonia comunitária, sem cobertura para Pseudomonas e MRSA.\n\nPiperacilina-tazobactam isolada (C): falta a cobertura para MRSA, necessária pela prevalência local.\n\nMeropenem isolado (D): também sem cobertura para MRSA.",
    "reference": "ATS/IDSA — Management of Hospital-acquired and Ventilator-associated Pneumonia (2016)",
    "tags": [
      "terapia intensiva",
      "pneumonia associada à ventilação",
      "MRSA",
      "antibioticoterapia"
    ],
    "image": "/images/scmbh2026-18.webp"
  },
  {
    "id": "scmbh2026-19",
    "topography": "2.2",
    "topic": "Síndrome coronariana aguda",
    "module": "Clínica Médica",
    "text": "Paciente do sexo masculino, 59 anos, tabagista e hipertenso, procura o pronto atendimento por dor torácica opressiva, iniciada há cerca de 60 minutos, irradiando para o braço esquerdo, associada à sudorese fria e náuseas. Relata episódio semelhante há 6 meses, mas de curta duração. No exame físico, encontra-se ansioso, corado, PA 132x78 mmHg, FC 92 bpm, SatO₂ 96% em ar ambiente, FR 18 irpm. Ausculta cardíaca com ritmo regular, sem sopros.\n\nLaboratório inicial: curva de troponina positiva, glicemia 128 mg/dL, creatinina 0,9 mg/dL. Considerando o diagnóstico, qual conduta, entre as abaixo, NÃO reduz mortalidade na fase aguda?",
    "options": [
      "(A) Iniciar imediatamente AAS e inibidor de P2Y12.",
      "(B) Realizar reperfusão mecânica imediata por angioplastia primária.",
      "(C) Administrar oxigênio suplementar.",
      "(D) Monitorizar e manter analgesia com morfina, se necessário."
    ],
    "correctAnswer": 2,
    "explanation": "Dor torácica típica há 60 minutos, troponina positiva e ECG com supradesnivelamento do ST na parede anterior (V1–V5): infarto agudo com supra de ST.\n\nAs medidas com redução de mortalidade comprovada são dupla antiagregação (AAS e inibidor de P2Y12) e reperfusão precoce (angioplastia primária). O oxigênio suplementar sem hipoxemia (SatO₂ de 96%) não reduz mortalidade (estudos AVOID e DETO2X) e pode até aumentar a lesão miocárdica; é indicado só com SatO₂ abaixo de 90%.",
    "commentary": "AAS e inibidor de P2Y12 (A): reduzem mortalidade (o AAS reduziu mortalidade no ISIS-2).\n\nAngioplastia primária (B): é a estratégia de reperfusão de escolha e reduz mortalidade.\n\nMonitorizar e usar morfina se necessário (D): a morfina é só sintomática, mas a monitorização permite detectar e desfibrilar arritmias fatais; por isso o gabarito escolheu o oxigênio como a medida sem benefício.",
    "reference": "Diretriz da SBC sobre IAM com supradesnivelamento do ST / ESC 2023 ACS Guidelines",
    "tags": [
      "cardiologia",
      "infarto agudo do miocárdio",
      "oxigenoterapia",
      "eletrocardiograma"
    ],
    "image": "/images/scmbh2026-19.webp"
  },
  {
    "id": "scmbh2026-20",
    "topography": "2.2",
    "topic": "Endocardite infecciosa",
    "module": "Clínica Médica",
    "text": "Homem de 42 anos, portador de hipertensão arterial e insuficiência renal crônica estadio I, está internado por piora da função renal significativa e em diálise por CDL. Paciente evolui com febre persistente e lombalgia há 5 dias. Nega sintomas urinários, nega cirurgias prévias. Ao exame: PA 118x70 mmHg, FC 96 bpm, FR 18 irpm, temperatura 38,5 °C. Sem sopros audíveis. Coluna lombar dolorosa à palpação, sem rigidez meníngea. Iniciado tratamento empírico com Cefepime. Em 24 horas, houve resultado positivo de duas Hemoculturas cocos GRAM positivos, catalase positivo e coagulase positivo, sensível à oxacilina. Após 48 horas de tratamento, o paciente mantém febre de 38 °C e elevação de proteína C reativa.\n\nQual o próximo passo MAIS adequado na investigação?",
    "options": [
      "(A) Realizar ressonância de coluna lombar e manter cateter de diálise.",
      "(B) Realizar ecocardiograma transtorácico e manter cateter diálise.",
      "(C) Solicitar ecocardiograma transesofágico e retirar cateter diálise.",
      "(D) Indicar ecocardiograma, apenas se surgir sopro cardíaco novo e retirar cateter diálise."
    ],
    "correctAnswer": 2,
    "explanation": "Paciente em hemodiálise por cateter de duplo lúmen, com bacteremia por Staphylococcus aureus sensível à oxacilina, febre persistente após 48 h e dor lombar (possível espondilodiscite).\n\nNa bacteremia por S. aureus é obrigatório: remover o cateter (foco provável), colher hemoculturas de controle e fazer ecocardiograma, preferencialmente transesofágico em quem tem bacteremia persistente ou dispositivo intravascular. Além disso, troca-se o cefepime por oxacilina ou cefazolina e investiga-se a coluna (RM).",
    "commentary": "RM e manter o cateter (A): a RM é útil pela lombalgia, mas manter o cateter perpetua a bacteremia.\n\nEco transtorácico e manter o cateter (B): o transtorácico é pouco sensível nesse contexto, e o cateter deve ser retirado.\n\nEco só se houver sopro (D): o ecocardiograma é indicado em toda bacteremia por S. aureus, mesmo sem sopro.",
    "reference": "IDSA — Clinical Practice Guidelines for MRSA and S. aureus Bacteremia / ESC 2023 Endocarditis Guidelines",
    "tags": [
      "infectologia",
      "bacteremia por S. aureus",
      "cateter de hemodiálise",
      "ecocardiograma transesofágico"
    ]
  },
  {
    "id": "scmbh2026-21",
    "topography": "2.1",
    "topic": "Pneumonia comunitária",
    "module": "Clínica Médica",
    "text": "Mulher de 70 anos, portadora de doença renal crônica estágio 4, hipertensão arterial e diabetes mellitus tipo 2. Há dois dias apresenta febre, tosse produtiva e dispneia progressiva. Ao chegar ao pronto-socorro, encontra-se confusa, sudoreica e taquipneica. Sinais vitais: PA 88x54 mmHg, FC 118 bpm, FR 32 irpm, SatO₂ 89% em ar ambiente, temperatura 38,6 °C. Ausculta pulmonar com crepitações bilaterais difusas. Gasometria arterial com hipoxemia moderada. Segue radiografia da paciente:\n\nQual o local de tratamento MAIS adequado para essa paciente?",
    "options": [
      "(A) Observação por 24 horas em pronto atendimento.",
      "(B) Internação em enfermaria para antibioticoterapia e observação.",
      "(C) Internação em unidade de terapia intensiva.",
      "(D) Tratamento ambulatorial com fluoroquinolona respiratória."
    ],
    "correctAnswer": 2,
    "explanation": "Idosa com DRC estágio 4, hipertensa e diabética, com pneumonia (radiografia com consolidação em base direita) e sinais de gravidade: confusão mental, hipotensão (PA 88/54), FR de 32, SatO₂ de 89% e hipoxemia.\n\nPreenche critérios de pneumonia grave (critério menor ATS/IDSA ≥ 3; CURB-65 = 4: confusão, FR ≥ 30, PA baixa e idade ≥ 65). Isso indica internação em UTI.",
    "commentary": "Observação por 24 h (A): inadequada para pneumonia com sinais de choque e insuficiência respiratória.\n\nEnfermaria (B): a gravidade exige monitorização intensiva.\n\nTratamento ambulatorial (D): completamente inadequado.",
    "reference": "ATS/IDSA — Community-acquired Pneumonia Guideline (2019) / Diretrizes da SBPT (2018)",
    "tags": [
      "pneumologia",
      "pneumonia adquirida na comunidade",
      "critérios de gravidade",
      "terapia intensiva"
    ],
    "image": "/images/scmbh2026-21.webp"
  },
  {
    "id": "scmbh2026-22",
    "topography": "1.5",
    "topic": "Hiperparatireoidismo",
    "module": "Clínica Médica",
    "text": "Mulher de 45 anos, previamente hígida, realiza exames de rotina e apresenta hipercalcemia de 11,2 mg/dL (VR: 8,5-10,2). Ao repetir a dosagem, o valor persiste elevado, e o PTH encontra-se aumentado. Relata episódios de cólica renal e diagnóstico prévio de nefrolitíase. Não faz uso de diuréticos tiazídicos nem de lítio. Ao exame físico, não há alterações relevantes.\n\nQual a conduta definitiva MAIS adequada?",
    "options": [
      "(A) Hidratação vigorosa e uso de furosemida de forma contínua.",
      "(B) Uso de cinacalcete como tratamento de escolha.",
      "(C) Reposição de vitamina D em altas doses.",
      "(D) Paratireoidectomia."
    ],
    "correctAnswer": 3,
    "explanation": "Hipercalcemia com PTH elevado: hiperparatireoidismo primário, em geral por adenoma de paratireoide. Há nefrolitíase sintomática, que é indicação de tratamento definitivo, assim como idade abaixo de 50 anos, cálcio acima de 1 mg/dL do limite superior, osteoporose ou fratura e lesão renal.\n\nO tratamento definitivo é a paratireoidectomia, após localização (ultrassonografia, cintilografia com sestamibi ou PET-colina).",
    "commentary": "Hidratação e furosemida contínua (A): manejo de crise hipercalcêmica, não tratamento definitivo; a furosemida contínua não é recomendada.\n\nCinacalcete (B): alternativa para quem não pode operar.\n\nVitamina D em altas doses (C): pode agravar a hipercalcemia.",
    "reference": "Fifth International Workshop on Primary Hyperparathyroidism (2022) / SBEM",
    "tags": [
      "endocrinologia",
      "hiperparatireoidismo primário",
      "hipercalcemia",
      "paratireoidectomia"
    ]
  },
  {
    "id": "scmbh2026-23",
    "module": "Clínica Médica",
    "text": "Homem de 52 anos, diabético tipo 2, apresenta febre baixa e dor em hipocôndrio direito há 10 dias, associadas à inapetência e perda ponderal de 4 kg. Nega icterícia, náuseas ou vômitos. Relata controle glicêmico irregular. Exame físico: temperatura 38,1 °C, dor à palpação profunda em hipocôndrio direito, sem visceromegalias palpáveis. Laboratório: leucócitos 13.000/mm³, PCR 80 mg/L, TGO/TGP discretamente elevadas.\n\nHemoculturas positivas para Klebsiella pneumoniae adquirida na comunidade. Ultrassonografia prévia de abdome sem colelitíase. Qual complicação deve ser ativamente investigada nesse paciente?",
    "options": [
      "(A) Endocardite infecciosa.",
      "(B) Abscesso hepático piogênico.",
      "(C) Trombose de veia porta.",
      "(D) Peritonite bacteriana espontânea."
    ],
    "correctAnswer": 1,
    "explanation": "Diabético com febre prolongada, dor no hipocôndrio direito, perda ponderal e bacteremia por Klebsiella pneumoniae adquirida na comunidade, sem doença biliar.\n\nÉ a apresentação típica da síndrome do abscesso hepático por Klebsiella hipervirulenta: abscesso hepático piogênico, frequente em diabéticos e com risco de disseminação metastática (endoftalmite, meningite). Deve-se investigar com ultrassonografia ou TC de abdome.",
    "commentary": "Endocardite (A): K. pneumoniae raramente causa endocardite; o quadro aponta para foco hepático.\n\nTrombose de veia porta (C): pode acompanhar a pileflebite, mas o foco a investigar primeiro é o abscesso.\n\nPBE (D): exige ascite e cirrose, ausentes.",
    "reference": "Siu LK et al. — Klebsiella pneumoniae liver abscess (Lancet Infect Dis 2012) / Harrison",
    "tags": [
      "infectologia",
      "abscesso hepático piogênico",
      "K. pneumoniae",
      "diabetes mellitus"
    ]
  },
  {
    "id": "scmbh2026-24",
    "topography": "4.1",
    "topic": "Cistite",
    "module": "Clínica Médica",
    "text": "Idosa de 68 anos, acamada por sequelas de AVC isquêmico, faz uso de sonda vesical há três semanas. A equipe de enfermagem relata sonolência, porém sem alteração importante do basal da paciente. Nega febre, dor lombar ou sintomas urinários. Exame físico: PA 128x76 mmHg, FC 84 bpm, SatO₂ 96%, afebril. Abdome flácido, bexiga não palpável. Exame de urina: leveduras ao microscópio; urocultura com 10⁵ UFC/mL de Candida albicans.\n\nQual a conduta MAIS adequada?",
    "options": [
      "(A) Iniciar fluconazol 200 mg ao dia por 14 dias.",
      "(B) Não tratar, manter a sonda.",
      "(C) Não tratar, apenas trocar ou retirar a sonda.",
      "(D) Caspofungina 70/50 mg por 14 dias."
    ],
    "correctAnswer": 2,
    "explanation": "Candidúria assintomática em paciente com sonda vesical de demora, sem febre nem sinais de infecção (a sonolência é basal).\n\nCandidúria assintomática não deve ser tratada, exceto em neutropênicos, recém-nascidos de baixo peso ou antes de procedimento urológico. A medida recomendada é remover ou trocar a sonda, o que resolve a maioria dos casos.",
    "commentary": "Fluconazol (A): sem indicação na candidúria assintomática.\n\nNão tratar e manter a sonda (B): a sonda é o fator de manutenção; deve ser retirada ou trocada.\n\nCaspofungina (D): equinocandinas têm baixa concentração urinária e não estão indicadas.",
    "reference": "IDSA — Clinical Practice Guideline for the Management of Candidiasis (2016)",
    "tags": [
      "infectologia",
      "candidúria",
      "sonda vesical",
      "infecção urinária"
    ]
  },
  {
    "id": "scmbh2026-25",
    "topography": "1.1",
    "topic": "Meningite",
    "module": "Clínica Médica",
    "text": "Paciente do sexo masculino, 61 anos, previamente hígido, é levado ao pronto-socorro por febre alta e rebaixamento progressivo do nível de consciência. Ao exame: PA 124x78 mmHg, FC 104 bpm, FR 22 irpm, temperatura 39,1 °C, Glasgow 12. Rigidez de nuca presente, sem papiledema nem déficit focal. Punção lombar: pressão de abertura 360 mmH₂O; 1800 células/mm³ (90% PMN); glicose 28 mg/dL (relação líquor/soro 0,35); proteína 320 mg/dL. Coloração de Gram com diplococos gram-positivos. País com baixa taxa de resistência à ceftriaxona.\n\nQual o tratamento direcionado e conduta adjuvante?",
    "options": [
      "(A) Penicilina G endovenosa associada à dexametasona.",
      "(B) Ampicilina e gentamicina, sem corticoide.",
      "(C) Cefepime e vancomicina, sem corticoide.",
      "(D) Ceftriaxona e mantendo dexametasona."
    ],
    "correctAnswer": 0,
    "explanation": "Meningite bacteriana com líquor purulento (pleocitose neutrofílica, glicose baixa, proteína alta) e Gram com diplococos Gram-positivos: Streptococcus pneumoniae.\n\nO gabarito oficial considera que, com agente identificado e baixa resistência local, o tratamento pode ser direcionado com penicilina G cristalina, mantendo a dexametasona (que reduz mortalidade e sequelas na meningite pneumocócica). Na prática, a penicilina só é segura após confirmar a sensibilidade (CIM). Como o enunciado informa baixa resistência à ceftriaxona, a ceftriaxona com dexametasona também é correta.",
    "commentary": "Ampicilina e gentamicina sem corticoide (B): cobre Listeria (bacilo Gram-positivo), não diplococo, e retira a dexametasona.\n\nCefepime e vancomicina sem corticoide (C): espectro amplo desnecessário, e suspender a dexametasona perde o benefício comprovado.\n\nCeftriaxona mantendo dexametasona (D): é o tratamento padrão enquanto não se conhece a sensibilidade à penicilina; também é aceita aqui pela controvérsia com o gabarito.",
    "reference": "IDSA Practice Guidelines for Bacterial Meningitis / van de Beek D — Dexametasona na meningite (Cochrane)",
    "tags": [
      "infectologia",
      "meningite pneumocócica",
      "penicilina",
      "dexametasona"
    ],
    "alsoAccepted": [
      3
    ],
    "alert": "Gabarito oficial discutível: o enunciado informa baixa resistência à ceftriaxona, não à penicilina; sem antibiograma, ceftriaxona com dexametasona (alternativa D) é o tratamento padrão. A alternativa D também é aceita como correta."
  },
  {
    "id": "scmbh2026-26",
    "topography": "4.1",
    "topic": "Pielonefrite",
    "module": "Clínica Médica",
    "text": "Paciente é atendido, sexo masculino, 66 anos, diabético e portador de hiperplasia prostática, internado por febre, calafrios e dor em flanco direito há cinco dias. Iniciado antibiótico endovenoso com cobertura para bacilos gram-negativos. Não tem história prévia de uso de ATB. Após 72 horas de tratamento, permanece febril e com dor lombar. Diurese preservada.\n\nQual a sua PRÓXIMA conduta?",
    "options": [
      "(A) Manter ATB e solicitar imagem para avaliação de trato urinário.",
      "(B) Ampliar esquema de ATB.",
      "(C) Manter ATB e realizar toque retal para avaliação de prostatite.",
      "(D) Ampliar esquema de ATB e solicitar imagem para avaliação de trato urinário."
    ],
    "correctAnswer": 3,
    "explanation": "Pielonefrite em homem diabético com hiperplasia prostática (fatores de complicação) que continua febril e com dor após 72 horas de antibiótico adequado.\n\nA falha clínica em 48–72 h exige imagem do trato urinário (TC ou ultrassonografia) para buscar obstrução, abscesso renal ou perinéfrico e pielonefrite enfisematosa. Esses casos podem exigir drenagem. O gabarito também indica ampliar o espectro antimicrobiano enquanto se investiga.",
    "commentary": "Manter antibiótico e imagem (A): a imagem é obrigatória, mas o gabarito considera que se deve também ampliar o esquema diante da falha.\n\nSó ampliar o antibiótico (B): sem imagem, pode-se perder um foco que precise de drenagem.\n\nToque retal para prostatite (C): pode complementar, mas o principal é a imagem renal.",
    "reference": "EAU Guidelines on Urological Infections / IDSA",
    "tags": [
      "infectologia",
      "pielonefrite complicada",
      "falha terapêutica",
      "imagem do trato urinário"
    ]
  },
  {
    "id": "scmbh2026-27",
    "topography": "2.1",
    "topic": "Pneumonia comunitária",
    "module": "Clínica Médica",
    "text": "Em um plantão em terapia intensiva, você é responsável por paciente do sexo masculino, 62 anos, com pneumonia adquirida na comunidade grave, internado em UTI. Apresenta hipotensão arterial, hipoxemia e necessidade de altas frações de oxigênio, já recebendo antibioticoterapia empírica ampla. Mantém instabilidade hemodinâmica e PCR aumentado. Pro-calcitonina aumentada.\n\nQual a conduta sobre o uso de corticoide nesse contexto?",
    "options": [
      "(A) Contraindicado em qualquer situação.",
      "(B) Indicado apenas se houver asma associada.",
      "(C) Pode ser considerado em casos de resposta inflamatória exacerbada.",
      "(D) Indicado para pacientes em terapia intensiva."
    ],
    "correctAnswer": 2,
    "explanation": "Pneumonia comunitária grave em UTI com hipoxemia importante e instabilidade hemodinâmica, apesar de antibiótico adequado.\n\nEstudos recentes (CAPE COD, 2023) mostraram redução de mortalidade com hidrocortisona na PAC grave. As diretrizes (ATS 2023, SCCM 2024) passaram a sugerir corticoide na PAC grave, sobretudo com resposta inflamatória exacerbada ou choque refratário. Entre as opções, 'pode ser considerado' é a resposta adequada.",
    "commentary": "Contraindicado sempre (A): há evidência de benefício em casos graves.\n\nSó com asma (B): a indicação não depende de asma.\n\nPara todo paciente em UTI (D): a indicação é seletiva (PAC grave, choque refratário), não universal.",
    "reference": "Dequin PF et al. — CAPE COD (NEJM 2023) / SCCM Guidelines on Corticosteroids (2024)",
    "tags": [
      "terapia intensiva",
      "pneumonia grave",
      "corticoide",
      "hidrocortisona"
    ]
  },
  {
    "id": "scmbh2026-28",
    "topography": "4.1",
    "topic": "Doença renal crônica",
    "module": "Clínica Médica",
    "text": "Você está de plantão em um serviço de atenção terciária, quando atende um paciente do sexo masculino, 73 anos, hipertenso e diabético, há pelo menos 10 anos, em uso irregular da medicação. Paciente é admitido por confusão mental e refere piora da dispneia há dois dias. Relata ganho de peso, edema de membros inferiores e diminuição do volume urinário. Exame físico: PA 168x98 mmHg, FC 92 bpm, FR 24 irpm, SatO₂ 94% em ar ambiente, crepitações em bases pulmonares e turgência jugular. Laboratório: ureia 136 mg/dL, creatinina 3,4 mg/dL (prévia 1,1 mg/dL), K⁺ 6,1 mEq/L, Na⁺ 132 mEq/L, gasometria com pH 7,28 e bicarbonato 16 mEq/L.\n\nQual o diagnóstico MAIS provável e conduta inicial indicada?",
    "options": [
      "(A) Insuficiência renal aguda pré-renal; hidratação vigorosa.",
      "(B) Nefrite intersticial aguda; suspensão de diurético e biópsia renal imediata.",
      "(C) DRC descompensada; diurético endovenoso e controle pressórico.",
      "(D) Necrose tubular aguda; hemodiálise de urgência imediata."
    ],
    "correctAnswer": 2,
    "explanation": "Hipertenso e diabético de longa data com piora aguda da função renal (creatinina de 1,1 para 3,4), congestão (dispneia, crepitações, turgência, edema, ganho de peso), hipertensão, hipercalemia e acidose metabólica. O gabarito interpretou como doença renal descompensada com hipervolemia.\n\nA conduta inicial é diurético de alça intravenoso e controle pressórico, com tratamento da hipercalemia e da acidose. A diálise fica para refratariedade (hipervolemia, K ou acidose refratários, uremia grave).",
    "commentary": "Pré-renal com hidratação (A): o paciente está hipervolêmico; hidratar agravaria a congestão.\n\nNefrite intersticial com biópsia imediata (B): não há exposição a fármaco nem achados sugestivos.\n\nNTA com hemodiálise imediata (D): a diálise de urgência só se indica após falha do tratamento clínico das complicações.",
    "reference": "KDIGO — Acute Kidney Injury / Diretrizes da SBN",
    "tags": [
      "nefrologia",
      "doença renal crônica",
      "hipervolemia",
      "diurético de alça"
    ]
  },
  {
    "id": "scmbh2026-29",
    "topography": "4.1",
    "topic": "Distúrbios hidroeletrolíticos",
    "module": "Clínica Médica",
    "text": "Durante a visita matinal em uma enfermaria de nefrologia, um paciente de 58 anos, portador de doença renal crônica estágio 5, sem diurese residual, relata náuseas, fraqueza muscular e confusão mental progressiva há dois dias. Está em hemodiálise três vezes por semana. Sinais vitais: PA 138x80 mmHg, FC 84 bpm. ECG mostra ondas T apiculadas e alargamento discreto do QRS. Laboratório: K⁺ 6,9 mEq/L, Na⁺ 138 mEq/L, HCO₃⁻ 20 mEq/L.\n\nQual é a conduta imediata MAIS apropriada?",
    "options": [
      "(A) Aplicar gluconato de cálcio e iniciar resina trocadora de potássio.",
      "(B) Aplicar gluconato de cálcio endovenoso administrar Furosemida EV em bolus.",
      "(C) Aplicar gluconato de cálcio endovenoso administrar Furosemida EV em BIC.",
      "(D) Aplicar gluconato de cálcio endovenoso e hemodiálise na urgência."
    ],
    "correctAnswer": 3,
    "explanation": "Paciente em hemodiálise, anúrico, com hipercalemia grave (K 6,9) e alterações eletrocardiográficas (T apiculada, QRS alargado).\n\nPrimeiro estabiliza-se a membrana com gluconato de cálcio IV. Em seguida, insulina com glicose e beta-agonista desviam o K para dentro das células. A remoção definitiva, em anúrico dialítico, é a hemodiálise de urgência.",
    "commentary": "Cálcio e resina (A): resinas são lentas e de pouca eficácia aguda.\n\nCálcio e furosemida em bolus (B): sem diurese residual, a furosemida não remove potássio.\n\nCálcio e furosemida contínua (C): mesmo problema; diurético ineficaz em anúrico.",
    "reference": "KDIGO Controversies Conference on Potassium (2020) / UK Kidney Association — Hyperkalaemia (2023)",
    "tags": [
      "nefrologia",
      "hipercalemia",
      "hemodiálise",
      "gluconato de cálcio"
    ]
  },
  {
    "id": "scmbh2026-30",
    "topography": "6.1",
    "topic": "Esclerose sistêmica",
    "module": "Clínica Médica",
    "text": "Durante uma consulta ambulatorial, uma mulher de 49 anos com história de artralgia difusa, rigidez matinal e fadiga é questionada sobre sintomas associados. Refere fenômeno de Raynaud, disfagia leve e sensação de pele endurecida nas mãos. Ao exame: espessamento cutâneo distal, telangiectasias em face e discreta hipertensão arterial.\n\nQual achado laboratorial confirma o diagnóstico clínico MAIS provável?",
    "options": [
      "(A) Anticorpo anti-centromero positivo.",
      "(B) Anticorpo anti-RNP positivo.",
      "(C) Anticorpo anti-CCP positivo.",
      "(D) Anticorpo anti-LKM positivo."
    ],
    "correctAnswer": 0,
    "explanation": "Raynaud, disfagia, esclerodactilia (espessamento cutâneo distal) e telangiectasias faciais: esclerose sistêmica forma cutânea limitada (antiga síndrome CREST: calcinose, Raynaud, dismotilidade esofágica, esclerodactilia e telangiectasias).\n\nO anticorpo característico é o anticentrômero, associado à forma limitada e ao risco tardio de hipertensão arterial pulmonar. O anti-Scl-70 (antitopoisomerase I) associa-se à forma difusa e à doença intersticial pulmonar.",
    "commentary": "Anti-RNP (B): marcador da doença mista do tecido conjuntivo.\n\nAnti-CCP (C): artrite reumatoide.\n\nAnti-LKM (D): hepatite autoimune tipo 2.",
    "reference": "Critérios ACR/EULAR 2013 para esclerose sistêmica / SBR",
    "tags": [
      "reumatologia",
      "esclerose sistêmica",
      "anticentrômero",
      "CREST"
    ]
  },
  {
    "id": "scmbh2026-31",
    "topography": "5.2",
    "topic": "Diabetes gestacional",
    "module": "Ginecologia e Obstetrícia",
    "text": "O diabetes melitus gestacional é uma doença com potencial importante de causar alterações neonatais que podem ser prevenidas com a manutenção dos níveis glicêmicos dentro de valores relacionados abaixo risco dessas complicações.\n\nSobre essa patologia da gestação, é CORRETO afirmar:",
    "options": [
      "(A) Seu diagnóstico mais utilizado no Brasil é pelos critérios da OMS, com glicemia de jejum maior ou igual a 92 ou um valor alterado no teste de tolerância oral a glicose com 75gr de dextrosol.",
      "(B) Entre as alterações fetais incidentes estão o crescimento intrauterino restrito e oligohidrâmnio.",
      "(C) Os níveis elevados de insulina materna, ultrapassam a barreira placentária e causam a maioria das alterações metabólicas fetais.",
      "(D) O controle da glicemia é inicialmente dietético, seguido do uso de hipoglicemiante oral, caso os valores da glicemia estejam em mais da metade das medidas acima do esperado."
    ],
    "correctAnswer": 0,
    "explanation": "No Brasil, o diagnóstico de diabetes mellitus gestacional segue os critérios da OMS/IADPSG adotados pelo consenso OPAS/MS/Febrasgo/SBD (2017): glicemia de jejum ≥ 92 mg/dL (e < 126) em qualquer fase, ou TOTG de 75 g entre 24 e 28 semanas com pelo menos um valor alterado (jejum ≥ 92, 1 h ≥ 180, 2 h ≥ 153 mg/dL).",
    "commentary": "CIUR e oligoidrâmnio (B): o DMG associa-se a macrossomia e polidrâmnio; CIUR pode ocorrer no diabetes pré-gestacional com vasculopatia.\n\nInsulina materna atravessa a placenta (C): a insulina não atravessa; a glicose atravessa e estimula o hiperinsulinismo fetal (hipótese de Pedersen).\n\nMedicação se mais da metade dos valores alterados (D): a terapia farmacológica (insulina, de primeira escolha) é indicada quando cerca de 30% ou mais das medidas estão fora da meta após 1–2 semanas de dieta.",
    "reference": "Rastreamento e diagnóstico de diabetes mellitus gestacional no Brasil — OPAS/MS/Febrasgo/SBD, 2017",
    "tags": [
      "obstetrícia",
      "diabetes mellitus gestacional",
      "TOTG",
      "pré-natal"
    ]
  },
  {
    "id": "scmbh2026-32",
    "topography": "5.2",
    "topic": "Restrição de crescimento fetal",
    "module": "Ginecologia e Obstetrícia",
    "text": "A restrição do crescimento fetal é definida como um processo capaz de modificar e restringir o potencial de crescimento do feto. Constitui intercorrência que acomete de 5% a 10% das gestações, sendo a segunda principal causa de mortalidade perinatal.\n\nSobre essa afecção, é INCORRETO afirmar:",
    "options": [
      "(A) Na suspeita de restrição de crescimento fetal (RCF), a ultrassonografia (US) deve ser usada para confirmar ou excluir o diagnóstico. A estimativa de peso fetal por meio da US é o melhor teste para rastrear e diagnosticar RCF, além de fornecer dados para pesquisa da etiologia.",
      "(B) O Doppler da artéria umbilical auxilia no diagnóstico e prediz o prognóstico de fetos com restrição de crescimento. O desaparecimento do componente diastólico do Doppler das artérias umbilicais coincide com a presença de alterações do equilíbrio acidobásico. Nesse grupo, existe mortalidade perinatal aumentada com número elevado de complicações neonatais, atribuídas à vasoconstrição em diversos órgãos.",
      "(C) O estágio 1 é definido como peso fetal estimado menor que o percentil 3 sem alterações do Doppler materno-fetal, ou peso fetal estimado entre o percentil 3 e 10 com Doppler de artérias uterinas alterado.",
      "(D) A avaliação do crescimento fetal e da vitalidade (Doppler e perfil biofísico fetal) pode ser realizada quinzenalmente, até 37 semanas, nos casos de restrição estágio 1. e, a partir disso, semanalmente até o parto com 39 semanas."
    ],
    "correctAnswer": 3,
    "explanation": "A questão pede a alternativa incorreta. Na restrição de crescimento fetal estágio 1 (PFE < p3 com Doppler normal, ou entre p3 e p10 com Doppler alterado leve), o seguimento é a cada 1–2 semanas, e a resolução é recomendada entre 37 e 38 semanas, não às 39 semanas.\n\nAs demais afirmações estão corretas: a ultrassonografia é o melhor exame para diagnosticar RCF; o diástole zero na artéria umbilical associa-se a acidemia e pior prognóstico; e a definição de estágio 1 está adequada.",
    "commentary": "USG para confirmar ou excluir (A): correta; a estimativa de peso fetal é o melhor teste diagnóstico.\n\nDoppler da artéria umbilical (B): correta; diástole zero ou reversa indica comprometimento grave.\n\nDefinição do estágio 1 (C): correta conforme a classificação de Figueras e Gratacós.",
    "reference": "Figueras F, Gratacós E — Stage-based approach to FGR / ISUOG Practice Guidelines (2020) / Febrasgo",
    "tags": [
      "obstetrícia",
      "restrição de crescimento fetal",
      "dopplervelocimetria"
    ]
  },
  {
    "id": "scmbh2026-33",
    "topography": "5.2",
    "topic": "Pré-eclâmpsia",
    "module": "Ginecologia e Obstetrícia",
    "text": "A pré-eclâmpsia é uma doença multissistêmica que costuma ocorrer na segunda metade da gestação, sendo a doença mais importante na obstetrícia e a maior causa de mortalidade materna e perinatal.\n\nSobre essa doença, é CORRETO afirmar:",
    "options": [
      "(A) A doença é caracterizada pela hipertensão e proteinúria, com aumento da pressão arterial, associada à creatinina elevada (maior que 1,1mg/dl) e na ausência da proteinúria é considerada hipertensão gestacional.",
      "(B) A pré-eclâmpsia com restrição de crescimento intrauterino está associada somente a disfunções epiteliais maternos e história familiar, não tendo influência das artérias placentárias ou ao sistema imunológico.",
      "(C) A síndrome HELLP pode se desenvolver gradativamente, com a piora da proteinúria, sendo critério prognóstico para a gestante.",
      "(D) O tratamento da pré-eclâmpsia na forma grave, com mais de 34 semanas de gestação, consiste em internação hospitalar para estabilização do quadro com sulfato de magnésio e interrupção da gravidez."
    ],
    "correctAnswer": 3,
    "explanation": "Na pré-eclâmpsia com sinais de gravidade acima de 34 semanas, a conduta é internação, estabilização materna (sulfato de magnésio para prevenir eclâmpsia e anti-hipertensivo para PA grave) e resolução da gestação após a estabilização. Não há benefício em prolongar a gestação a partir de 34 semanas.",
    "commentary": "Sem proteinúria é hipertensão gestacional (A): pré-eclâmpsia também é diagnosticada sem proteinúria se houver disfunção de órgão-alvo (creatinina elevada, plaquetopenia, alteração hepática, sintomas neurológicos).\n\nSem influência placentária ou imune (B): a fisiopatologia envolve a invasão trofoblástica inadequada das artérias espirais e fatores imunológicos.\n\nHELLP ligada à piora da proteinúria (C): a HELLP pode surgir sem proteinúria importante; o diagnóstico é laboratorial (hemólise, enzimas hepáticas, plaquetopenia).",
    "reference": "Febrasgo/RBEHG — Pré-eclâmpsia (2023) / ACOG Practice Bulletin 222",
    "tags": [
      "obstetrícia",
      "pré-eclâmpsia",
      "sulfato de magnésio",
      "síndrome HELLP"
    ]
  },
  {
    "id": "scmbh2026-34",
    "topography": "5.2",
    "topic": "Gravidez ectópica",
    "module": "Ginecologia e Obstetrícia",
    "text": "A gravidez ectópica é sinônimo de gravidez extrauterina, sendo a grande maioria tubária e é uma patologia potencialmente fatal para as pacientes.\n\nSobre esta ocorrência, pode-se afirmar:",
    "options": [
      "(A) Na gravidez tubária cornual ou intersticial, quando ocorre ruptura, o sangramento pode ser massivo e com risco aumentado de fatalidade.",
      "(B) A segunda mais frequente é a gravidez abdominal e tem menor potencial de gravidade que as tubárias ampulares.",
      "(C) A gravidez ectópica íntegra tem um quadro clínico característico, facilitando seu diagnóstico em relação à fase em que já ocorreu a rotura.",
      "(D) O tratamento clínico com metotrexato sistêmico pode ser indicado em embriões com atividade cardíaca fetal presente ao ultrassom, mas com menos de 3,5cm."
    ],
    "correctAnswer": 0,
    "explanation": "A gravidez ectópica intersticial (cornual) ocorre na porção da tuba que atravessa o miométrio, região muito vascularizada (ramos das artérias uterinas e ovarianas) e distensível. Por isso a ruptura costuma ser mais tardia (8–16 semanas) e com sangramento maciço e maior mortalidade.",
    "commentary": "Abdominal como segunda mais frequente (B): após a tubária, a mais comum é a ovariana ou cervical; a abdominal é rara e tem alto potencial de gravidade.\n\nÍntegra com quadro característico (C): a ectópica íntegra costuma ser oligossintomática; o diagnóstico depende de beta-hCG e ultrassonografia.\n\nMetotrexato com BCF (D): atividade cardíaca embrionária é contraindicação relativa ao metotrexato; usa-se em massa < 3,5 cm sem BCF e beta-hCG < 5.000.",
    "reference": "ACOG Practice Bulletin 193 (Tubal Ectopic Pregnancy) / Febrasgo",
    "tags": [
      "obstetrícia",
      "gravidez ectópica",
      "gravidez intersticial",
      "metotrexato"
    ]
  },
  {
    "id": "scmbh2026-35",
    "topography": "5.2",
    "topic": "Trabalho de parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Dentre os métodos de avaliação do bem-estar fetal antes do parto está a cardiotocografia fetal, com indicações estabelecidas no acompanhamento anteparto de gestações na presença de algumas patologias e também utilizadas no acompanhamento de pacientes, chamadas de risco habitual com alguma intercorrência como gestação prolongada.\n\nSobre essa propedêutica fetal, é INCORRETO afirmar:",
    "options": [
      "(A) A classificação em reativa pressupõe 2 ou mais acelerações ao movimento fetal no traçado de 20 minutos.",
      "(B) A cardiotocografia computadorizada tem maior sensibilidade e é bem indicada em casos de restrição de crescimento intrauterino.",
      "(C) Em casos de gestação superior a 32 semanas e ausência de 2 acelerações, o exame pode ser estendido para 40 minutos, com suspeita de comprometimento da vitalidade fetal.",
      "(D) A linha de base da frequência cardíaca fetal pode ser considerada normal nas gestações acima de 32 semanas até 170 bpm."
    ],
    "correctAnswer": 3,
    "explanation": "A questão pede a alternativa incorreta. A linha de base normal da frequência cardíaca fetal é de 110 a 160 bpm; acima de 160 bpm é taquicardia fetal.\n\nAs demais estão corretas: CTG reativa tem pelo menos 2 acelerações em 20 minutos; a CTG computadorizada (critérios de Dawes-Redman, variação de curto prazo) é útil na RCF; e o traçado não reativo pode ser estendido para 40 minutos (ciclo de sono fetal).",
    "commentary": "Duas ou mais acelerações em 20 min (A): correta; é o critério de reatividade.\n\nCTG computadorizada na RCF (B): correta; a variação de curto prazo é um bom marcador de hipóxia nos fetos com restrição.\n\nEstender para 40 min (C): correta; os períodos de sono fetal podem durar até 40 minutos.",
    "reference": "Febrasgo — Cardiotocografia anteparto / FIGO Consensus Guidelines on Intrapartum Fetal Monitoring",
    "tags": [
      "obstetrícia",
      "cardiotocografia",
      "vitalidade fetal"
    ]
  },
  {
    "id": "scmbh2026-36",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "A assistência pré-natal é uma “estratégia interdisciplinar de atendimento profissional que otimiza o alcance e a manutenção da integridade das condições de saúde materna e fetal “(Maternidade Escola UFRJ 2015).\n\nSobre essa assistência do período gestacional, é CORRETO afirmar:",
    "options": [
      "(A) A consulta de primeiro trimestre é a melhor fase para datação correta ultrassonográfica da gestação, podendo até ouvir batimento cardíaco fetal ao sonar no final deste trimestre.",
      "(B) Entre 16 e 18 semanas, é indicada a avaliação da morfologia fetal, do comprimento do colo uterino e doppler da artéria umbilical.",
      "(C) Entre 32 e 34 semanas, é indicada a administração da primeira dose imunoglobulina anti-D para gestantes RH negativo.",
      "(D) O teste de tolerância oral à glicose de 75gr deve ser realizado somente em pacientes de risco, como as pacientes já submetidas a cirurgias bariátricas (pós-bariátricas)."
    ],
    "correctAnswer": 0,
    "explanation": "O primeiro trimestre é a melhor fase para datar a gestação por ultrassonografia: o comprimento cabeça-nádega entre 7 e 13+6 semanas tem erro de cerca de 5–7 dias. No fim do primeiro trimestre (por volta de 10–12 semanas), os batimentos fetais já podem ser ouvidos com sonar Doppler.",
    "commentary": "Morfologia, colo e Doppler com 16–18 semanas (B): a USG morfológica do 2º trimestre e a medida do colo são feitas entre 20 e 24 semanas.\n\nPrimeira dose de anti-D com 32–34 semanas (C): a profilaxia anteparto com imunoglobulina anti-D é feita com 28 semanas.\n\nTOTG só em pacientes de risco (D): no Brasil o TOTG é universal entre 24 e 28 semanas (se o jejum inicial for < 92); e em pós-bariátricas o TOTG é contraindicado pelo risco de dumping.",
    "reference": "Cadernos de Atenção Básica nº 32 — Pré-natal de baixo risco (MS) / Febrasgo",
    "tags": [
      "obstetrícia",
      "pré-natal",
      "ultrassonografia obstétrica",
      "datação da gestação"
    ]
  },
  {
    "id": "scmbh2026-37",
    "topography": "5.2",
    "topic": "Descolamento prematuro de placenta",
    "module": "Ginecologia e Obstetrícia",
    "text": "O descolamento prematuro da placenta (DPP) é a separação intempestiva da placenta implantada no corpo uterino, antes do nascimento, após a 20ª semana de gestação. É uma causa importante e potencialmente grave de sangramento vaginal na segunda metade da gravidez, com elevada morbidade materna e fetal.\n\nSobre essa ocorrência, é CORRETO afirmar:",
    "options": [
      "(A) Dentre os fatores de risco maternos e fetais para o DPP estão o Diabetes e o hipotireoidismo.",
      "(B) A coagulação intravascular disseminada (CID) pode intercorrer com a DPP, porém de forma esporádica e sem piora da morbidade fetal.",
      "(C) A associação do DPP com a pré-eclâmpsia é importante, determinando o agravamento da doença.",
      "(D) A ultrassonografia é superior à ressonância magnética para diagnosticar o DPP, principalmente nos quadros mais “crônicos” e também tem maior importância no prognóstico."
    ],
    "correctAnswer": 2,
    "explanation": "A pré-eclâmpsia e as síndromes hipertensivas são o principal fator de risco para descolamento prematuro de placenta, e o DPP agrava o quadro materno (CID, choque, lesão renal).\n\nOutros fatores de risco são trauma, cocaína, tabagismo, rotura prematura de membranas, polidrâmnio com descompressão súbita e DPP anterior.",
    "commentary": "Diabetes e hipotireoidismo (A): não são fatores de risco clássicos.\n\nCID esporádica e sem impacto (B): a CID é complicação frequente no DPP grave (sobretudo com óbito fetal) e piora o prognóstico.\n\nUSG superior à RM (D): a ultrassonografia tem baixa sensibilidade para DPP (o diagnóstico é clínico); a RM tem melhor acurácia nos casos crônicos.",
    "reference": "Febrasgo — Descolamento prematuro de placenta / Manual de Gestação de Alto Risco — MS, 2022",
    "tags": [
      "obstetrícia",
      "descolamento prematuro de placenta",
      "pré-eclâmpsia",
      "hemorragia da segunda metade"
    ]
  },
  {
    "id": "scmbh2026-38",
    "topography": "5.2",
    "topic": "Puerpério",
    "module": "Ginecologia e Obstetrícia",
    "text": "O puerpério é o período do pós-parto, que sob o ponto de vista fisiológico, caracteriza-se pelos processos involutivos e de recuperação do organismo materno após a gestação.\n\nSobre este período, pode-se afirmar:",
    "options": [
      "(A) Por volta do segundo dia após o parto, os lóquios se tornam reduzidos, esbranquiçados e não têm mais o caráter serossanguíneos.",
      "(B) O reflexo uteromamário se dá pelo estímulo dos mamilos e da árvore galactófora, mediados pela liberação de ocitocina, acarreta contrações uterinas, percebidas como cólicas pelas pacientes.",
      "(C) Mantém um estado de diminuição dos fatores de coagulação, num estado de baixa coagulabilidade até 5ª a 7ª semana de pós-parto.",
      "(D) A partir do 14º dia, está indicado o uso de anticoncepcional combinado, mesmo para as puérperas em amamentação."
    ],
    "correctAnswer": 1,
    "explanation": "A sucção do mamilo estimula a liberação de ocitocina pela neuro-hipófise (reflexo de ejeção do leite). A ocitocina também contrai o miométrio, o reflexo uteromamário, que favorece a involução uterina e é percebido como cólicas durante as mamadas.",
    "commentary": "Lóquios esbranquiçados no 2º dia (A): nos primeiros 3–4 dias os lóquios são sanguinolentos (rubra), depois serossanguinolentos e esbranquiçados (alba) após cerca de 10 dias.\n\nBaixa coagulabilidade (C): o puerpério é estado de hipercoagulabilidade, com risco de trombose por até cerca de 6 semanas.\n\nCombinado a partir do 14º dia na amamentação (D): em lactantes, os combinados são categoria 4 antes de 6 semanas e categoria 3 entre 6 semanas e 6 meses.",
    "reference": "Zugaib Obstetrícia — Puerpério / Critérios de Elegibilidade da OMS",
    "tags": [
      "obstetrícia",
      "puerpério",
      "ocitocina",
      "lóquios"
    ]
  },
  {
    "id": "scmbh2026-39",
    "module": "Ginecologia e Obstetrícia",
    "text": "A puberdade é o período em que surgem os caracteres sexuais secundários e o indivíduo adquire a capacidade de reproduzir. As alterações surgem direta ou indiretamente da maturação do hipotálamo, da estimulação dos órgãos sexuais e da secreção de esteroides sexuais.\n\nSobre o desenvolvimento desse período, é CORRETO afirmar:",
    "options": [
      "(A) As pacientes com disgenesia gonadal apresentam níveis baixos de FSH e necessitam de retirada das gônadas, tanto nas formas 46XX, quanto nas formas 46XY e uso de estrogênios exógenos.",
      "(B) Os distúrbios do sistema genital e do útero, envolvendo agenesias ou disgenesias müllerianas, podendo formar uma síndrome de malformações, por vezes incluindo sistema esquelético ou renal, são chamadas de síndrome de Mayer-Rokitansky-Kuster-Hauser.",
      "(C) As mulheres com insensibilidade aos androgênios, síndrome de Morris, apresentam desenvolvimento mamário e distribuição de pelos corporais normais e se distinguem pela baixa estatura.",
      "(D) A síndrome de Turner apresenta alguns estigmas típicos em indivíduos com fenótipo feminino, duplicação do cromossomo sexual, apresentam puberdade normal, com estatura, telarca e pubarca esperadas para a idade."
    ],
    "correctAnswer": 1,
    "explanation": "A síndrome de Mayer-Rokitansky-Küster-Hauser é a agenesia (ou disgenesia) mülleriana em 46,XX: ausência congênita do útero e dos dois terços superiores da vagina, com ovários normais (caracteres sexuais secundários normais).\n\nPode associar-se a malformações renais (agenesia, rim pélvico) e esqueléticas (vertebrais), constituindo a forma tipo II (associação MURCS).",
    "commentary": "Disgenesia gonadal com FSH baixo (A): o FSH é alto (hipogonadismo hipergonadotrófico), e a gonadectomia é indicada apenas nas formas com cromossomo Y.\n\nInsensibilidade androgênica com baixa estatura (C): na síndrome de Morris há mamas, mas os pelos são escassos ou ausentes, e as pacientes costumam ser altas.\n\nTurner com puberdade normal (D): Turner (45,X) cursa com baixa estatura e falência ovariana (puberdade ausente ou incompleta); não há duplicação do cromossomo sexual.",
    "reference": "Speroff — Endocrinologia Ginecológica Clínica / Febrasgo — Amenorreia primária",
    "tags": [
      "ginecologia",
      "amenorreia primária",
      "síndrome de Mayer-Rokitansky-Küster-Hauser",
      "malformações müllerianas"
    ]
  },
  {
    "id": "scmbh2026-40",
    "topography": "5.1",
    "topic": "Contracepção",
    "module": "Ginecologia e Obstetrícia",
    "text": "O controle voluntário da fertilidade é particularmente importante na sociedade moderna e é essencial para que a mulher consiga alcançar suas metas pessoais quanto para o controle populacional do planeta na medida que um rápido crescimento populacional pode ameaçar nossa sobrevivência.\n\nSobre os métodos de planejamento familiar para as mulheres, é INCORRETO afirmar:",
    "options": [
      "(A) Todos os dispositivos intrauterinos atuais (DIU) proporcionam contracepção segura e de longo prazo, com eficácia comparada a da esterilização tubária.",
      "(B) A exposição a patógenos sexualmente transmissíveis é um dos mais importantes determinantes de risco de doença inflamatória pélvica (DIP) do que o uso de DIU.",
      "(C) As novas formulações de anticoncepcional apenas com progestogênios têm eficácia comprovada e auxiliam muito as mulheres que têm contraindicação ao uso de estrogênio e não querem uma anticoncepção de longa duração.",
      "(D) Mesmo os anticoncepcionais combinados modernos de baixa dosagem e com drospirenona têm um efeito antagonista da insulina e produz alteração relevante nos níveis de glicemia."
    ],
    "correctAnswer": 3,
    "explanation": "A questão pede a alternativa incorreta. Os anticoncepcionais combinados modernos de baixa dose (inclusive com drospirenona) têm efeito mínimo e clinicamente irrelevante sobre o metabolismo glicídico em mulheres saudáveis e em diabéticas sem vasculopatia (categoria 2 da OMS). Não produzem alteração relevante da glicemia.\n\nAs demais afirmações estão corretas.",
    "commentary": "DIU com eficácia semelhante à laqueadura (A): correta; DIU de cobre e DIU-LNG têm taxa de falha abaixo de 1%.\n\nExposição a IST determina mais a DIP que o DIU (B): correta; o risco de DIP ligado ao DIU limita-se às primeiras semanas após a inserção.\n\nMétodos só de progestagênio (C): corretos; são opção para quem tem contraindicação ao estrogênio.",
    "reference": "Critérios de Elegibilidade da OMS, 5ª ed. / Febrasgo — Anticoncepção",
    "tags": [
      "ginecologia",
      "contracepção",
      "anticoncepcional combinado",
      "metabolismo glicídico"
    ]
  },
  {
    "id": "scmbh2026-41",
    "topography": "5.1",
    "topic": "Câncer de colo uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "O conceito de neoplasia intraepitelial cervical (NIC) foi introduzido por Richart, que sugeriu o potencial de progressão das displasias e, desde então, o desenvolvimento do conhecimento dessas lesões e seu tratamento se tornaram uma forma efetiva de diminuir a incidência do câncer de colo uterino. Sendo uma profilaxia secundária.\n\nSobre estas NICs, é CORRETO afirmar:",
    "options": [
      "(A) Os tipos específicos de papilomavírus humano (HPV) de alto risco, como o tipo 16,18, 31. 33, 35, 39,45... são responsáveis por quase 70 % das lesões de alto grau, por isso a eficácia moderada das vacinas desenvolvidas com partículas desses tipos.",
      "(B) O teste para HPV de alto risco é um componente fundamental no rastreamento primário bem como coexame em casos de citologias indeterminadas (ASC-US).",
      "(C) As mulheres com mais de 30 anos, com citologias sugestivas de lesões de alto grau, devem ter esse exame citológico confirmado em 6 meses antes de serem submetidas à colposcopia e biópsia dirigida.",
      "(D) Pacientes jovens com citologia sugestiva de lesão de baixo grau, colposcopia satisfatório e teste de HPV positivo podem ser acompanhadas em regime de rastreio apropriado para a idade, anual ou bianual com citologia oncótica."
    ],
    "correctAnswer": 1,
    "explanation": "O teste de DNA-HPV de alto risco é hoje componente central do rastreamento primário do câncer do colo do útero (inclusive nas novas diretrizes brasileiras). Na abordagem baseada em citologia, ele também é usado como triagem (teste reflexo) na ASC-US.",
    "commentary": "70% das lesões de alto grau e vacinas com eficácia moderada (A): HPV 16 e 18 respondem por cerca de 70% dos cânceres; as vacinas têm eficácia muito alta contra os tipos incluídos.\n\nRepetir citologia de alto grau antes da colposcopia (C): HSIL indica colposcopia direta, sem repetir citologia.\n\nLSIL com HPV positivo seguida com rastreio de rotina (D): exige seguimento mais próximo, com citologia ou colposcopia em intervalos curtos, não rastreio de rotina.",
    "reference": "Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (INCA) / ASCCP 2019",
    "tags": [
      "ginecologia",
      "neoplasia intraepitelial cervical",
      "teste de HPV",
      "rastreamento"
    ]
  },
  {
    "id": "scmbh2026-42",
    "topography": "5.1",
    "topic": "Câncer de endométrio",
    "module": "Ginecologia e Obstetrícia",
    "text": "O carcinoma de endométrio constitui a neoplasia maligna mais comum do sistema genital feminino nos países desenvolvidos; no nosso meio, ele é o segundo, mas estima-se um aumento proporcional da sua ocorrência.\n\nSobre o câncer de endométrio, é INCORRETO afirmar:",
    "options": [
      "(A) O risco de progressão para câncer de endométrio das atipias está ligado ao grau de complexidade de atipias citológicas.",
      "(B) O câncer demonstra ser cada vez mais agressivo com a progressão da idade das pacientes. Como a maioria dos casos tem uma ligação já estabelecida com o estrogênio, qualquer fator que aumente exposição ao estrogênio, sem a oposição da progesterona, pode aumentar o seu risco.",
      "(C) Cerca de metade das pacientes apresentam sangramento vaginal irregular, seu diagnóstico precoce é realizado, na maioria dos casos, pelo rastreio oncológico através da ultrassonografia.",
      "(D) Os carcinomas serosos papilares do endométrio são considerados tumores de alto risco e não apresentam relação bem estabelecida com o excesso de estrogênio."
    ],
    "correctAnswer": 2,
    "explanation": "A questão pede a alternativa incorreta. O câncer de endométrio se manifesta por sangramento uterino anormal em cerca de 90% das pacientes (principalmente pós-menopausa), não em 'metade'. Não existe rastreamento populacional por ultrassonografia: o diagnóstico precoce se deve ao sintoma, que leva à investigação.\n\nAs demais estão corretas.",
    "commentary": "Risco ligado ao grau de atipia (A): correta; a hiperplasia atípica tem risco muito maior de progressão.\n\nAgressividade maior com a idade e papel do estrogênio (B): correta.\n\nSeroso como alto risco não estrogênio-dependente (D): correta (tipo II, p53 anormal).",
    "reference": "Febrasgo — Câncer de endométrio / NCCN Uterine Neoplasms",
    "tags": [
      "ginecologia",
      "câncer de endométrio",
      "sangramento pós-menopausa",
      "oncologia ginecológica"
    ]
  },
  {
    "id": "scmbh2026-43",
    "topography": "5.1",
    "topic": "Climatério e menopausa",
    "module": "Ginecologia e Obstetrícia",
    "text": "Atualmente, as mulheres passam um terço da sua vida no período pós- menopausa e esse é um dado de extrema relevância para se cuidar da saúde e qualidade de vida delas nesse período.\n\nSobre o climatério, é CORRETO afirmar que:",
    "options": [
      "(A) As consequências clínicas da menopausa estão relacionadas, principalmente, à deficiência da progesterona, levando ao aumento da perda de massa óssea e dos sintomas de fogachos.",
      "(B) Os sintomas vasomotores podem acometer até 75% das mulheres na perimenopausa e constituem a principal razão da procura por tratamento no climatério.",
      "(C) A síndrome geniturinária, apesar de pouco sintomática, pode ser tratada eficazmente com terapia hormonal sistêmica.",
      "(D) Recomenda-se a avaliação da massa óssea, por meio de densitometria mineral óssea (DMO), em pacientes de baixo risco, a partir dos 55 anos, para indicar terapia hormonal."
    ],
    "correctAnswer": 1,
    "explanation": "Os sintomas vasomotores (fogachos e sudorese noturna) acometem até cerca de 75–80% das mulheres na transição menopausal e na pós-menopausa inicial. São a principal razão de procura por tratamento no climatério e a principal indicação de terapia hormonal.",
    "commentary": "Deficiência de progesterona (A): as consequências decorrem principalmente da deficiência de estrogênio.\n\nSGU pouco sintomática e tratada com TH sistêmica (C): a síndrome geniturinária é progressiva e frequentemente sintomática; o tratamento de escolha, se isolada, é o estrogênio vaginal.\n\nDensitometria aos 55 anos para indicar TH (D): a densitometria é indicada a partir dos 65 anos (ou antes, com fatores de risco), e não serve para indicar TH.",
    "reference": "Consenso Brasileiro de Terapêutica Hormonal da Menopausa (SOBRAC) / NAMS 2022",
    "tags": [
      "ginecologia",
      "climatério",
      "sintomas vasomotores",
      "terapia hormonal"
    ]
  },
  {
    "id": "scmbh2026-44",
    "topography": "4.2",
    "topic": "Incontinência urinária",
    "module": "Ginecologia e Obstetrícia",
    "text": "A incontinência urinária é definida como qualquer perda involuntária de urina. As estimativas de prevalência são variadas, devido à dificuldade de definição, populações usadas, idade e outros fatores envolvidos nos estudos. Estima-se que afete um terço das mulheres durante a sua vida e com repercussões muitas vezes importantes na qualidade de vida.\n\nSobre essa patologia, é CORRETO afirmar:",
    "options": [
      "(A) A síndrome da bexiga hiperativa é acompanhada de urgência urinária, geralmente acompanhada do aumento da frequência, nictúria e incontinência de urgência, na ausência de infecção do trato urinário baixo ou outra doença óbvia.",
      "(B) A obesidade por si não é um fator de risco isolado para incontinência urinária, estando associada à paridade, idade e à raça negra.",
      "(C) A urodinâmica tem sua indicação atualmente restrita, devido a sua baixa acuidade em elucidar as diferenças entre a anamnese e o exame físico e na distinção entre as incontinências de esforço, de urgência e mista.",
      "(D) Os tratamentos conservadores não farmacológicos como a fisioterapia, modificações do estilo de vida, perda de peso não têm indicação, na maioria dos casos, devido à baixa eficácia e potenciais efeitos adversos."
    ],
    "correctAnswer": 0,
    "explanation": "A síndrome da bexiga hiperativa é definida pela ICS como urgência urinária, geralmente acompanhada de aumento da frequência e nictúria, com ou sem incontinência de urgência, na ausência de infecção urinária ou outra doença evidente. O diagnóstico é clínico.",
    "commentary": "Obesidade não é fator isolado (B): a obesidade é fator de risco independente e modificável; a perda de peso reduz a incontinência.\n\nUrodinâmica de baixa acurácia (C): ela tem indicações específicas (antes de cirurgia, quadros complexos ou refratários); a restrição não se deve à baixa acurácia.\n\nTratamentos conservadores sem indicação (D): fisioterapia do assoalho pélvico, mudanças comportamentais e perda de peso são a primeira linha.",
    "reference": "ICS — Terminologia da disfunção do trato urinário inferior / Febrasgo — Incontinência urinária",
    "tags": [
      "ginecologia",
      "uroginecologia",
      "bexiga hiperativa",
      "incontinência urinária"
    ]
  },
  {
    "id": "scmbh2026-45",
    "topography": "5.1",
    "topic": "Prolapso genital",
    "module": "Ginecologia e Obstetrícia",
    "text": "O prolapso dos órgãos pélvicos (POP) é a herniação dos órgãos pélvicos através do diafragma urogenital, causando sintomas que reduzem a qualidade de vida das pacientes e com frequência associados à incontinência urinária.\n\nSobre essa patologia, é CORRETO afirmar:",
    "options": [
      "(A) No sistema de quantificação do prolapso de órgão pélvico (POP-Q), uma medida do ponto Ba igual a -3 significa um prolapso grau I parede vaginal anterior.",
      "(B) Em uma paciente com comprimento total da vagina de 10 cm, um colo uterino com medida de 7cm para fora do introito vaginal, configuraria um prolapso uterino grau IV.",
      "(C) O tratamento com pessário está indicado apenas para pacientes que querem preservar a fertilidade, sendo a cirurgia o tratamento nos outros casos.",
      "(D) Os tratamentos como a colpocleise são indicados em pacientes com risco cirúrgico alto e que não pretendem manter a função vaginal."
    ],
    "correctAnswer": 3,
    "explanation": "A colpocleise (fechamento vaginal, como a cirurgia de LeFort) é técnica obliterativa, de menor tempo cirúrgico, morbidade e recidiva. É indicada a pacientes com alto risco cirúrgico, geralmente idosas, que não desejam manter atividade sexual vaginal.",
    "commentary": "Ba igual a –3 é grau I (A): Ba = –3 é a posição normal (estádio 0 da parede anterior).\n\nColo 7 cm para fora com CVT de 10 é grau IV (B): estádio IV exige eversão completa (ponto ≥ CVT – 2 cm, ou seja, ≥ +8); com +7 é estádio III.\n\nPessário só para preservar fertilidade (C): é opção para qualquer paciente que não deseje ou não possa operar.",
    "reference": "Bump RC et al. — POP-Q (1996) / Febrasgo — Prolapso genital",
    "tags": [
      "ginecologia",
      "uroginecologia",
      "prolapso genital",
      "colpocleise"
    ]
  },
  {
    "id": "scmbh2026-46",
    "topography": "15",
    "topic": "Estratégia Saúde da Família",
    "module": "Saúde Coletiva",
    "text": "Considere as afirmativas abaixo sobre territorialização e adscrição na Atenção Primária à Saúde (APS) e assinale V para as que considerar verdadeiras ou F para as que considerar falsas. (__) A adscrição territorial sustenta o cuidado longitudinal e a gestão de risco. (__) Mapas de vulnerabilidade devem integrar dados sanitários, ambientais e sociais. (__) A atualização cadastral é acessória e pode ser suprimida sem perdas assistenciais. (__) A microterritorialização apoia planejamento, busca ativa e vigilância local.\n\nAssinale a alternativa com a sequência CORRETA de respostas.",
    "options": [
      "(A) V–V–F–V",
      "(B) V–F–V–V",
      "(C) F–V–V–F",
      "(D) V–V–V–F"
    ],
    "correctAnswer": 0,
    "explanation": "Julgamento das afirmativas sobre territorialização na APS:\n\n• Adscrição sustenta o cuidado longitudinal e a gestão de risco: verdadeira (vínculo da população a uma equipe)\n• Mapas de vulnerabilidade integram dados sanitários, ambientais e sociais: verdadeira\n• Atualização cadastral acessória e dispensável: falsa (o cadastro atualizado é base do planejamento, do financiamento e da vigilância)\n• Microterritorialização apoia planejamento, busca ativa e vigilância local: verdadeira\n\nSequência: V–V–F–V.",
    "commentary": "V–F–V–V (B): erra ao considerar falsa a afirmativa sobre mapas de vulnerabilidade e verdadeira a da atualização cadastral dispensável.\n\nF–V–V–F (C): nega a adscrição e a microterritorialização, pilares da APS.\n\nV–V–V–F (D): aceita que o cadastro é dispensável e nega o papel da microterritorialização.",
    "reference": "Política Nacional de Atenção Básica — Portaria nº 2.436/2017",
    "tags": [
      "saúde coletiva",
      "atenção primária",
      "territorialização",
      "adscrição"
    ]
  },
  {
    "id": "scmbh2026-47",
    "topography": "15",
    "topic": "Vigilância epidemiológica",
    "module": "Saúde Coletiva",
    "text": "É CORRETO afirmar que a Vigilância Sanitária (VISA), no controle de água e alimentos:",
    "options": [
      "(A) Limita-se à punição administrativa, sem interface com educação sanitária.",
      "(B) Atua apenas em produtos industrializados, sem alcance em serviços de alimentação artesanal.",
      "(C) Integra vigilância ambiental e epidemiológica, articulando risco, inspeção e comunicação.",
      "(D) Não executa análise laboratorial, delegando-a exclusivamente a serviços assistenciais."
    ],
    "correctAnswer": 2,
    "explanation": "A Vigilância Sanitária, no controle de água e alimentos, atua de forma integrada com a vigilância ambiental (qualidade da água, programa Vigiagua) e a epidemiológica (surtos de DTA). Articula avaliação de risco, inspeção, análise laboratorial (por meio dos LACEN), educação sanitária e comunicação de risco.",
    "commentary": "Só punição administrativa (A): a VISA também educa, orienta e comunica risco.\n\nSó produtos industrializados (B): também fiscaliza serviços de alimentação, inclusive artesanais e comerciais.\n\nSem análise laboratorial (D): conta com a rede de laboratórios de saúde pública (LACEN) para análises fiscais.",
    "reference": "Lei nº 9.782/1999 (Sistema Nacional de Vigilância Sanitária) / Lei nº 8.080/1990",
    "tags": [
      "saúde coletiva",
      "vigilância sanitária",
      "vigilância em saúde",
      "segurança dos alimentos"
    ]
  },
  {
    "id": "scmbh2026-48",
    "topography": "15",
    "topic": "Testes diagnósticos",
    "module": "Saúde Coletiva",
    "text": "“Quanto maiores os coeficientes de verossimilhança (likelihood ratios, LR+) e quanto menores os LR−, __________ a capacidade do teste de modificar a probabilidade pós-teste.”\n\nAssinale a alternativa que preenche CORRETAMENTE a lacuna.",
    "options": [
      "(A) Menor",
      "(B) Maior",
      "(C) Igual",
      "(D) Irrelevante"
    ],
    "correctAnswer": 1,
    "explanation": "A razão de verossimilhança positiva (LR+ = sensibilidade / (1 – especificidade)) indica quanto um resultado positivo aumenta a chance da doença. A LR– ((1 – sensibilidade) / especificidade) indica quanto um negativo a reduz.\n\nQuanto maior a LR+ (acima de 10 é forte) e menor a LR– (abaixo de 0,1 é forte), maior a capacidade do teste de modificar a probabilidade pós-teste.",
    "commentary": "Menor (A): inverte a relação.\n\nIgual (C): as razões de verossimilhança alteram a probabilidade, salvo quando valem 1.\n\nIrrelevante (D): as razões de verossimilhança são justamente a medida desse poder de modificação.",
    "reference": "Fletcher — Epidemiologia Clínica (Diagnóstico) / Sackett — Medicina Baseada em Evidências",
    "tags": [
      "epidemiologia",
      "razão de verossimilhança",
      "testes diagnósticos",
      "probabilidade pós-teste"
    ]
  },
  {
    "id": "scmbh2026-49",
    "topography": "15",
    "topic": "Epidemiologia",
    "module": "Saúde Coletiva",
    "text": "São exemplos corretos de medida e denominador, EXCETO:",
    "options": [
      "(A) Incidência acumulada: número de casos novos no período/população em risco no início do período.",
      "(B) Densidade de incidência: número de casos novos/ soma dos tempos de observação de pessoas em risco (pessoa-tempo).",
      "(C) Prevalência pontual: número de casos existentes / população em risco no período.",
      "(D) Mortalidade específica: número de óbitos por causa específica no período/população média no período."
    ],
    "correctAnswer": 2,
    "explanation": "A questão pede a exceção. A prevalência pontual é o número de casos existentes (novos e antigos) em um momento, dividido pela população total naquele mesmo momento, não pela 'população em risco no período'.\n\n'Período' corresponde à prevalência de período, e 'população em risco' é o denominador de medidas de incidência.",
    "commentary": "Incidência acumulada (A): correta; casos novos sobre a população em risco no início do período.\n\nDensidade de incidência (B): correta; casos novos sobre pessoa-tempo em risco.\n\nMortalidade específica (D): correta; óbitos pela causa sobre a população média do período.",
    "reference": "Medronho — Epidemiologia / Rouquayrol — Epidemiologia & Saúde",
    "tags": [
      "epidemiologia",
      "medidas de frequência",
      "prevalência",
      "incidência"
    ]
  },
  {
    "id": "scmbh2026-50",
    "topography": "15",
    "topic": "Estudos epidemiológicos",
    "module": "Saúde Coletiva",
    "text": "Considere as afirmativas abaixo sobre os desenhos de estudo e assinale V para as que considerar verdadeiras, e F para as que considerar falsas. (__) Estudos de coorte permitem estimar risco relativo e inferir temporalidade. (__) Caso-controle estima odds ratio e é útil para doenças raras. (__) Ensaio clínico randomizado controla confundimento por alocação aleatória. (__) Estudos ecológicos inferem causalidade individual sem risco de falácia.\n\nAssinale a sequência CORRETA de respostas.",
    "options": [
      "(A) V–V–V–F",
      "(B) V–F–V–V",
      "(C) F–V–V–F",
      "(D) V–V–F–V"
    ],
    "correctAnswer": 0,
    "explanation": "Julgamento das afirmativas:\n\n• Coorte estima risco relativo e estabelece temporalidade: verdadeira\n• Caso-controle estima odds ratio e é útil para doenças raras: verdadeira\n• Ensaio clínico randomizado controla confundimento pela alocação aleatória: verdadeira (distribui fatores conhecidos e desconhecidos)\n• Estudos ecológicos inferem causalidade individual sem falácia: falsa (estão sujeitos à falácia ecológica)\n\nSequência: V–V–V–F.",
    "commentary": "V–F–V–V (B): nega a utilidade do caso-controle e aceita inferência individual em estudos ecológicos.\n\nF–V–V–F (C): nega que a coorte estime risco relativo e temporalidade.\n\nV–V–F–V (D): nega o controle de confundimento pela randomização e aceita a inferência ecológica.",
    "reference": "Medronho — Epidemiologia / Fletcher — Epidemiologia Clínica",
    "tags": [
      "epidemiologia",
      "desenhos de estudo",
      "falácia ecológica"
    ]
  },
  {
    "id": "scmbh2026-51",
    "topography": "15",
    "topic": "Epidemiologia",
    "module": "Saúde Coletiva",
    "text": "Óbito hospitalar com múltiplas comorbidades e pneumonia recente; houve queda domiciliar na semana anterior sem lesões graves relatadas.\n\nAssinale a alternativa que apresenta a conduta MAIS adequada na Declaração de Óbito (DO).",
    "options": [
      "(A) Indicar todos os diagnósticos como causas básicas para ampliar a captação de dados.",
      "(B) Adotar apenas a pneumonia como causa básica, independentemente da sequência clínica.",
      "(C) Priorizar o evento queda como causa básica sem avaliar nexo e contribuição clínica.",
      "(D) Registrar causa básica após análise da cadeia causal, evitando mecanismos isolados."
    ],
    "correctAnswer": 3,
    "explanation": "Na Declaração de Óbito, a causa básica é a doença ou lesão que iniciou a cadeia de eventos que levou diretamente à morte. Ela é registrada na última linha preenchida da Parte I, após análise da sequência causal. Comorbidades contribuintes que não fazem parte da cadeia vão na Parte II.\n\nEvita-se registrar apenas mecanismos terminais (parada cardiorrespiratória, falência de múltiplos órgãos) como causa.",
    "commentary": "Todos os diagnósticos como causas básicas (A): há apenas uma causa básica; as demais são consequenciais ou contribuintes.\n\nSó a pneumonia, independentemente da sequência (B): a causa básica depende da análise da cadeia; a pneumonia pode ser consequência de outra doença.\n\nPriorizar a queda sem avaliar nexo (C): só seria causa básica se tivesse nexo causal com o óbito.",
    "reference": "Ministério da Saúde — Declaração de Óbito: manual de instruções para preenchimento (2022) / CID-10",
    "tags": [
      "saúde coletiva",
      "declaração de óbito",
      "causa básica",
      "estatísticas vitais"
    ]
  },
  {
    "id": "scmbh2026-52",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "Sobre a organização regional do Sistema Único de Saúde (SUS), é INCORRETO afirmar que:",
    "options": [
      "(A) A regionalização organiza fluxos assistenciais entre níveis de atenção e define responsabilidades por meio de pactos.",
      "(B) A contratualização de resultados e o monitoramento de indicadores compõem a governança regional.",
      "(C) A regulação do acesso pode ser exercida isoladamente por cada município, sem alinhamento aos pactos regionais.",
      "(D) A programação integrada deve considerar perfil demográfico-epidemiológico e capacidade instalada."
    ],
    "correctAnswer": 2,
    "explanation": "A questão pede a alternativa incorreta. Pela regionalização (Decreto nº 7.508/2011, pactuações nas CIR e CIB), a regulação do acesso deve estar alinhada aos pactos regionais e às redes de atenção. Cada município não pode regular isoladamente, sobretudo os serviços de referência regional compartilhados.",
    "commentary": "Regionalização organiza fluxos e pactos (A): correta.\n\nContratualização e indicadores na governança regional (B): correta.\n\nProgramação integrada com perfil epidemiológico e capacidade instalada (D): correta.",
    "reference": "Decreto nº 7.508/2011 / Política Nacional de Regulação do SUS (Portaria nº 1.559/2008)",
    "tags": [
      "saúde coletiva",
      "regionalização",
      "regulação",
      "SUS"
    ]
  },
  {
    "id": "scmbh2026-53",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "“A equidade no SUS é operacionalizada pela alocação de recursos __________, ______________orientada por necessidades de saúde, barreiras de acesso e perfis epidemiológicos.”\n\nAssinale a alternativa que preenche CORRETAMENTE a lacuna.",
    "options": [
      "(A) Homogênea por habitante, independentemente do contexto.",
      "(B) Por ordem de chegada aos serviços, conforme demanda do dia.",
      "(C) Prioritária e fixa para alta complexidade, independentemente do território.",
      "(D) Proporcional às necessidades e vulnerabilidades identificadas."
    ],
    "correctAnswer": 3,
    "explanation": "A equidade, princípio doutrinário do SUS, significa tratar de forma desigual os desiguais: alocar recursos proporcionalmente às necessidades de saúde e às vulnerabilidades, considerando barreiras de acesso e perfis epidemiológicos, para reduzir desigualdades.",
    "commentary": "Homogênea por habitante (A): distribuição igualitária, não equitativa.\n\nPor ordem de chegada (B): não considera necessidade nem vulnerabilidade.\n\nPrioritária e fixa para alta complexidade (C): ignora o território e as necessidades locais.",
    "reference": "Lei nº 8.080/1990 / Paim JS — O que é o SUS",
    "tags": [
      "saúde coletiva",
      "equidade",
      "princípios do SUS"
    ]
  },
  {
    "id": "scmbh2026-54",
    "topography": "15",
    "topic": "Estratégia Saúde da Família",
    "module": "Saúde Coletiva",
    "text": "São elementos de uma Linha De Cuidado efetiva na Estratégia de Saúde da Família (ESF), EXCETO:",
    "options": [
      "(A) Critérios de encaminhamento e retorno pactuados entre pontos de atenção.",
      "(B) Síntese clínica padronizada e prazos definidos para contrarreferência.",
      "(C) Contrarreferência facultativa, quando há sobrecarga no serviço especializado.",
      "(D) Registro multiprofissional com metas, responsáveis e indicadores de seguimento."
    ],
    "correctAnswer": 2,
    "explanation": "A questão pede a exceção. Uma linha de cuidado efetiva exige contrarreferência obrigatória e organizada, com retorno do paciente e de informações à APS, que coordena o cuidado. A contrarreferência 'facultativa' rompe a continuidade e gera o 'efeito velcro' e a fragmentação.",
    "commentary": "Critérios pactuados de encaminhamento e retorno (A): elemento essencial.\n\nSíntese clínica padronizada e prazos de contrarreferência (B): elemento essencial.\n\nRegistro multiprofissional com metas e indicadores (D): elemento essencial.",
    "reference": "Ministério da Saúde — Linhas de cuidado / Mendes EV — As redes de atenção à saúde",
    "tags": [
      "saúde coletiva",
      "linha de cuidado",
      "referência e contrarreferência",
      "ESF"
    ]
  },
  {
    "id": "scmbh2026-55",
    "topography": "15",
    "topic": "Epidemiologia",
    "module": "Saúde Coletiva",
    "text": "Assinale a alternativa que apresenta a conduta MAIS adequada como primeira resposta organizada a um surto suspeito de doença transmitida por alimento em uma escola.",
    "options": [
      "(A) Aplicar imediatamente questionário de dieta e calcular razão de chances sem definição de caso.",
      "(B) Suspender todas as atividades escolares e coletar amostras ambientais sem avaliação clínica.",
      "(C) Priorizar comunicação pública ampla antes de consolidar informações mínimas do evento.",
      "(D) Definir caso suspeito, confirmar diagnóstico e iniciar descrição por tempo, lugar e pessoa."
    ],
    "correctAnswer": 3,
    "explanation": "Na investigação de surto (incluindo doença transmitida por alimento), os primeiros passos são confirmar o diagnóstico e a existência do surto, definir caso (suspeito, provável, confirmado) e fazer a descrição por tempo (curva epidêmica), lugar e pessoa. Isso orienta as hipóteses, a coleta de amostras e as medidas de controle.",
    "commentary": "Questionário e odds ratio sem definição de caso (A): sem definição de caso a análise não tem validade.\n\nSuspender atividades e coletar amostras sem avaliação clínica (B): ações desorganizadas, sem base epidemiológica.\n\nComunicação ampla antes de consolidar informações (C): a comunicação de risco deve ser oportuna, mas baseada em dados mínimos consolidados.",
    "reference": "Guia de Vigilância em Saúde — MS / Manual integrado de vigilância de doenças transmitidas por alimentos (MS)",
    "tags": [
      "saúde coletiva",
      "investigação de surto",
      "doenças transmitidas por alimentos",
      "vigilância epidemiológica"
    ]
  },
  {
    "id": "scmbh2026-56",
    "topography": "15",
    "topic": "Saúde do trabalhador",
    "module": "Saúde Coletiva",
    "text": "Trabalhador de indústria de tintas, 42 anos, cefaleia, tontura e parestesia após jornada; exposição crônica a solventes orgânicos; exame sem déficit focal; sem etilismo.\n\nAssinale a alternativa que apresenta a conduta MAIS adequada diante do caso.",
    "options": [
      "(A) Registrar suspeita de agravo relacionado ao trabalho, notificar, avaliar processo produtivo e orientar proteção coletiva e individual.",
      "(B) Presumir enxaqueca e orientar repouso, sem explorar nexo ocupacional ou processo de trabalho.",
      "(C) Solicitar exames extensos e afastar o trabalho, adiando qualquer comunicação à vigilância.",
      "(D) Prescrever sintomáticos e liberar retorno imediato, deixando investigação para demanda espontânea do serviço de saúde privado da indústria."
    ],
    "correctAnswer": 0,
    "explanation": "Sintomas neurológicos (cefaleia, tontura, parestesias) em trabalhador cronicamente exposto a solventes orgânicos: suspeita de intoxicação ou agravo relacionado ao trabalho (neurotoxicidade por solventes).\n\nA conduta é estabelecer o nexo, notificar no SINAN (intoxicação exógena e agravo relacionado ao trabalho), avaliar o processo produtivo com a vigilância em saúde do trabalhador (CEREST) e orientar medidas de proteção, priorizando as coletivas sobre as individuais.",
    "commentary": "Presumir enxaqueca (B): ignora a exposição ocupacional evidente.\n\nExames extensos e adiar a comunicação (C): a notificação não deve ser adiada.\n\nSintomáticos e retorno ao trabalho (D): mantém a exposição e transfere a responsabilidade.",
    "reference": "Política Nacional de Saúde do Trabalhador e da Trabalhadora (Portaria nº 1.823/2012) / Lista Nacional de Notificação Compulsória",
    "tags": [
      "saúde coletiva",
      "saúde do trabalhador",
      "solventes orgânicos",
      "notificação compulsória"
    ]
  },
  {
    "id": "scmbh2026-57",
    "topography": "15",
    "topic": "Vigilância epidemiológica",
    "module": "Saúde Coletiva",
    "text": "É CORRETO afirmar que, na interface saúde-meio ambiente em territórios adscritos da Atenção Primária à Saúde (APS):",
    "options": [
      "(A) A vigilância ambiental atua desvinculada da Atenção Primária para evitar sobreposição de tarefas.",
      "(B) O mapeamento de risco deve integrar dados sanitários, ambientais e sociais e orientar planos locais.",
      "(C) A comunicação de risco deve restringir informações para não aumentar a demanda dos serviços.",
      "(D) O planejamento territorial dispensa determinantes ambientais para manter foco estritamente clínico."
    ],
    "correctAnswer": 1,
    "explanation": "Na interface saúde e ambiente na APS, o mapeamento de risco do território deve integrar dados sanitários, ambientais (água, saneamento, poluição, vetores) e sociais. Ele deve orientar o planejamento local e as ações intersetoriais, num trabalho conjunto da vigilância em saúde ambiental com as equipes de Saúde da Família.",
    "commentary": "Vigilância ambiental desvinculada da APS (A): a integração entre vigilância e atenção primária é diretriz da PNVS.\n\nRestringir informações (C): a comunicação de risco deve ser transparente e oportuna.\n\nPlanejamento sem determinantes ambientais (D): contraria a abordagem dos determinantes sociais e ambientais.",
    "reference": "Política Nacional de Vigilância em Saúde (Resolução CNS nº 588/2018) / PNAB 2017",
    "tags": [
      "saúde coletiva",
      "saúde ambiental",
      "territorialização",
      "vigilância em saúde"
    ]
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
    "id": "scmbh2026-59",
    "topography": "15",
    "topic": "Vigilância epidemiológica",
    "module": "Saúde Coletiva",
    "text": "Considere as afirmativas a seguir sobre condutas diante de caso suspeito de sarampo (paciente com febre, exantema, tosse, coriza e conjuntivite): I. A notificação deve ser imediata como suspeito, antes da confirmação laboratorial. II. A coleta para RT-PCR (swab de naso/orofaringe e/ou urina) é mais útil até o 5º dia do exantema; a sorologia IgM é preferível a partir do 3º dia do exantema. III. A vacinação de bloqueio dos contatos suscetíveis é idealmente realizada até 72 horas (com janela estendida com menor efetividade). IV. A presença de esquema vacinal completo no paciente suspeito exclui a investigação, dispensando coleta e rastreamento de contatos.\n\nSobre as afirmativas acima, estão CORRETAS:",
    "options": [
      "(A) I e IV, apenas.",
      "(B) I, II e III, apenas.",
      "(C) II, III e IV, apenas.",
      "(D) I, II, III e IV."
    ],
    "correctAnswer": 1,
    "explanation": "Análise das afirmativas sobre sarampo:\n\n• I. Notificação imediata na suspeita, antes da confirmação: correta (notificação em até 24 h)\n• II. RT-PCR (swab e urina) mais útil até o 5º dia do exantema (até 7 dias); IgM a partir do 3º dia: correta\n• III. Vacinação de bloqueio dos contatos suscetíveis idealmente em até 72 horas: correta\n• IV. Vacinação completa exclui a investigação: incorreta (todo caso suspeito deve ser investigado, pois há falhas vacinais)\n\nCorretas: I, II e III.",
    "commentary": "I e IV (A): a IV está errada.\n\nII, III e IV (C): inclui a IV, incorreta, e omite a I.\n\nTodas (D): a IV está errada.",
    "reference": "Guia de Vigilância em Saúde — MS, 2024 (Sarampo)",
    "tags": [
      "saúde coletiva",
      "sarampo",
      "vigilância epidemiológica",
      "bloqueio vacinal"
    ]
  },
  {
    "id": "scmbh2026-60",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Assinale a alternativa que apresenta o conjunto MAIS adequado de ações de uso da informação para manejo de condições crônicas na Atenção Primária à Saúde (APS).",
    "options": [
      "(A) Relatórios anuais consolidados para planejamento; suspensão de busca ativa para evitar viés; prontuário reduzido a códigos diagnósticos.",
      "(B) Algoritmo automático substituindo avaliação clínica; atualização semestral do cadastro; uso de médias gerais, sem estratificação.",
      "(C) Consulta eventual ao sistema apenas para prestarmos contas; foco em produtividade de procedimentos; abandono de indicadores de desfecho.",
      "(D) Painéis mensais para tendência; listas nominais de faltosos por condição; integração com cadastro domiciliar para priorizar visitas e grupos."
    ],
    "correctAnswer": 3,
    "explanation": "O uso da informação para manejar condições crônicas na APS envolve monitoramento frequente (painéis mensais de tendência), listas nominais por condição (hipertensos, diabéticos, faltosos) para busca ativa e integração com o cadastro domiciliar para priorizar visitas e grupos. Isso dá suporte à estratificação de risco e à gestão da clínica.",
    "commentary": "Relatórios anuais e sem busca ativa (A): periodicidade insuficiente e abandono da busca ativa.\n\nAlgoritmo substituindo a clínica e médias sem estratificação (B): sem estratificação, perde-se o foco nos de maior risco.\n\nSistema só para prestar contas (C): desperdiça a informação para o cuidado e foca em produtividade.",
    "reference": "Ministério da Saúde — Modelo de Atenção às Condições Crônicas (MACC) / Previne Brasil",
    "tags": [
      "saúde coletiva",
      "condições crônicas",
      "sistemas de informação",
      "atenção primária"
    ]
  },
  {
    "id": "scmbh2026-61",
    "topography": "2.2",
    "topic": "Hipertensão arterial sistêmica",
    "module": "Pediatria",
    "text": "Marque a alternativa CORRETA a respeito da hipertensão arterial em pediatria.",
    "options": [
      "(A) Os principais fatores de risco para hipertensão primária em criança são o excesso de adiposidade, estilo de vida inadequados, estresse ambiental, baixo peso ao nascer e fatores genéticos.",
      "(B) Crianças hipertensas têm baixa probabilidade de se tornarem adultos hipertensos e de apresentarem lesão em órgãos alvo.",
      "(C) Implementação de políticas de saúde pública, promovendo uma alimentação saudável e aumento da atividade física, não reduz a prevalência da hipertensão primária.",
      "(D) Diversas associações médicas pediátricas definem hipertensão como leituras repetidas de pressão arterial maior ou igual percentil 85 para crianças."
    ],
    "correctAnswer": 0,
    "explanation": "A hipertensão primária em crianças e adolescentes aumentou com a epidemia de obesidade. Os principais fatores de risco são excesso de adiposidade, estilo de vida inadequado (sedentarismo, dieta rica em sódio), estresse, baixo peso ao nascer e história familiar e genética.\n\nCrianças pequenas e hipertensão grave levantam suspeita de causas secundárias (renais, coarctação).",
    "commentary": "Baixa probabilidade de hipertensão adulta (B): a PA tende a 'trilhar' (tracking) para a vida adulta, e há lesão de órgão-alvo (hipertrofia de VE) já na infância.\n\nPolíticas públicas não reduzem prevalência (C): alimentação saudável e atividade física reduzem a hipertensão primária.\n\nHipertensão como p85 (D): hipertensão é PA ≥ p95 (ou ≥ 130/80 em adolescentes); entre p90 e p95 é PA elevada.",
    "reference": "AAP Clinical Practice Guideline for High Blood Pressure in Children (2017) / SBP",
    "tags": [
      "pediatria",
      "hipertensão arterial na infância",
      "obesidade infantil"
    ]
  },
  {
    "id": "scmbh2026-62",
    "topography": "11",
    "topic": "Anemia ferropriva",
    "module": "Pediatria",
    "text": "Criança de 2 anos de idade, sexo masculino, é levada a uma consulta pediátrica por apresentar palidez cutaneomucosa. No exame físico, criança com bom estado geral, hipocorado ++/4, frequência cardíaca 92 bpm, sopro sistólico II/VI BEE, frequência respiratória 29 irpm, ausência de visceromegalia palpável. Hemograma realizado mostrou: hemoglobina 7g/dl; volume corpuscular médio (VCM) de 60 fL; global de leucócitos de 5400 mm³, 45% de neutrófilos, 45% de linfócitos, 5% de eosinófilos e 5% de monócitos; plaquetas de 400.000mm³; reticulócitos de 1%.\n\nDiante desse caso, marque qual a MELHOR conduta dentre as alternativas a seguir.",
    "options": [
      "(A) Iniciar reposição de ferro a nível ambulatorial via oral.",
      "(B) Iniciar reposição de ferro a nível hospitalar via parenteral.",
      "(C) Internação hospitalar e indicar transfusão de concentrado de hemácias.",
      "(D) Internação hospitalar e indicar reposição eritropoietina."
    ],
    "correctAnswer": 0,
    "explanation": "Pré-escolar com anemia microcítica (Hb 7, VCM 60), reticulócitos baixos e plaquetas no limite superior (reativas), em bom estado geral e hemodinamicamente compensado (sopro funcional, FC normal): anemia ferropriva.\n\nMesmo com Hb de 7, se a criança está estável, o tratamento é ferro oral ambulatorial (3–6 mg/kg/dia de ferro elementar), com reavaliação da resposta (reticulocitose em 7–10 dias) e investigação da causa (dieta, leite de vaca em excesso, perdas).",
    "commentary": "Ferro parenteral hospitalar (B): reservado para intolerância, má absorção ou falha do oral.\n\nTransfusão (C): indicada só com instabilidade hemodinâmica, insuficiência cardíaca ou Hb muito baixa com sintomas.\n\nEritropoietina (D): sem indicação na anemia ferropriva.",
    "reference": "SBP — Consenso sobre anemia ferropriva (2018/2021)",
    "tags": [
      "pediatria",
      "anemia ferropriva",
      "sulfato ferroso",
      "hematologia pediátrica"
    ]
  },
  {
    "id": "scmbh2026-63",
    "topography": "11",
    "topic": "Cardiopatias congênitas",
    "module": "Pediatria",
    "text": "Criança de 3 meses de vida, sexo feminino, comparece pela terceira vez a um pronto atendimento, por apresentar cansaço e sudorese após as mamadas. A acompanhante relata que não tem notado ganho de peso satisfatório, apesar de observar que o lactente, que está em aleitamento materno exclusivo, suga bem o seio materno. No exame físico, lactente com regular estado geral, pulsos periféricos debilmente palpáveis, acianótico, hidratado, com esforço respiratório leve, frequência cardíaca de 170 bpm, Pressão arterial 120/80 mmHg em membro superior direito, fígado a 4 cm reborda costal direita, frequência respiratória de 70 irpm, murmúrio vesicular fisiológico.\n\nDiante do caso clínico, qual a PRINCIPAL hipótese diagnóstica?",
    "options": [
      "(A) Insuficiência cardíaca por provável coarctação da aorta.",
      "(B) Insuficiência cardíaca por provável cardiopatia congênita cianogênica.",
      "(C) Insuficiência cardíaca por provável quadro de anemia congênita.",
      "(D) Insuficiência cardíaca compensada por provável sepse neonatal tardia."
    ],
    "correctAnswer": 0,
    "explanation": "Lactente de 3 meses com sinais de insuficiência cardíaca (cansaço e sudorese às mamadas, baixo ganho de peso, taquicardia, taquipneia, hepatomegalia) e pulsos periféricos débeis, com PA elevada no membro superior direito (120/80): coarctação da aorta.\n\nO exame obrigatório é comparar pulsos e PA entre membros superiores e inferiores (gradiente). A confirmação é por ecocardiograma.",
    "commentary": "Cardiopatia cianogênica (B): o lactente está acianótico.\n\nAnemia congênita (C): não explica a hipertensão no braço e os pulsos débeis.\n\nSepse tardia compensada (D): não explica hipertensão de membro superior nem o quadro progressivo de insuficiência cardíaca.",
    "reference": "Tratado de Pediatria SBP — Cardiopatias congênitas acianogênicas / AHA Scientific Statement",
    "tags": [
      "pediatria",
      "coarctação da aorta",
      "insuficiência cardíaca",
      "cardiopatias congênitas"
    ]
  },
  {
    "id": "scmbh2026-64",
    "module": "Pediatria",
    "text": "Criança de 1 ano e 6 meses de idade, sexo masculino, foi levado à consulta por apresentar exantema maculopapular róseo, inicialmente no tronco e disseminado para o pescoço, membros superiores, face e membros inferiores há 24 horas. A acompanhante afirma que a criança estava febril nos últimos três dias antes do surgimento das lesões. No exame físico, lactente em bom estado geral, hiperemia de orofaringe e presença do exantema maculopapular em tronco, face e membros. Os demais achados do exame físico estavam dentro da normalidade.\n\nMediante esse caso clínico, qual a sua PRINCIPAL hipótese de diagnóstico?",
    "options": [
      "(A) Dengue.",
      "(B) Eritema infeccioso.",
      "(C) Rubéola.",
      "(D) Exantema súbito."
    ],
    "correctAnswer": 3,
    "explanation": "Lactente de 18 meses com febre alta por 3 dias que cede, seguida do surgimento de exantema maculopapular róseo começando no tronco e se espalhando, com bom estado geral: exantema súbito (roséola infantum), causado pelo herpesvírus humano 6 (e 7).\n\nO exantema aparece quando a febre desaparece. Tratamento sintomático.",
    "commentary": "Dengue (A): o exantema pode surgir na defervescência, mas a epidemiologia e o quadro típico do lactente pequeno favorecem a roséola.\n\nEritema infeccioso (B): 'face esbofeteada' seguida de exantema rendilhado nos membros, geralmente em escolares.\n\nRubéola (C): exantema começa na face e desce, com linfonodomegalia retroauricular e occipital e febre baixa concomitante.",
    "reference": "Tratado de Pediatria SBP — Doenças exantemáticas / Red Book (AAP)",
    "tags": [
      "pediatria",
      "exantema súbito",
      "herpesvírus humano 6",
      "doenças exantemáticas"
    ]
  },
  {
    "id": "scmbh2026-65",
    "topography": "1.3",
    "topic": "Amigdalite/faringoamigdalite",
    "module": "Pediatria",
    "text": "Mãe comparece à consulta de pronto atendimento com criança de 3 anos de idade, com queixa de febre e dor de garganta. Refere que a cada 4 semanas, a criança apresenta quadro semelhante, com lesões aftosas em cavidade oral, tendo feito uso de antibiótico para faringoamigdalite quase que mensalmente no último ano. Relata também que a febre normalmente é alta mas não dura mais do que 3 dias. Nega sudorese, perda de peso ou adinamia. Ao exame, foram notados linfonodos móveis, fibroelásticos, pequenos, sem sinais flogísticos em cadeias cervicais bilateralmente, além de enantema e lesões aftosas em orofaringe, sem demais alterações.\n\nSobre o quadro descrito, assinale a conduta MAIS assertiva em relação à principal hipótese diagnóstica:",
    "options": [
      "(A) Deve-se realizar ultrassonografia de partes moles em região cervical.",
      "(B) Deve-se realizar reação de cadeia de polimerase para Epstein Barr Virus.",
      "(C) Deve-se realizar cultura e teste rápido para estreptococo beta hemolítico do grupo A.",
      "(D) Deve-se orientar a mãe sobre a benignidade do quadro e considerar uso de corticoide."
    ],
    "correctAnswer": 3,
    "explanation": "Pré-escolar com episódios periódicos e regulares (a cada cerca de 4 semanas) de febre alta de 3 dias, faringite, estomatite aftosa e adenite cervical, assintomática entre as crises e com bom crescimento: síndrome PFAPA (febre periódica, estomatite aftosa, faringite e adenite).\n\nÉ benigna e autolimitada (regride na infância). Uma dose única de corticoide (prednisolona 1–2 mg/kg) abrevia a crise de forma dramática. A tonsilectomia é opção em casos selecionados.",
    "commentary": "USG cervical (A): os linfonodos são reacionais e pequenos, sem indicação de imagem.\n\nPCR para EBV (B): a periodicidade regular não sugere mononucleose.\n\nCultura e teste para estreptococo (C): a regularidade dos episódios e as aftas apontam para PFAPA, não para faringite estreptocócica de repetição.",
    "reference": "Critérios de Thomas modificados para PFAPA / SBP — Síndromes febris periódicas",
    "tags": [
      "pediatria",
      "PFAPA",
      "febre periódica",
      "reumatologia pediátrica"
    ]
  },
  {
    "id": "scmbh2026-66",
    "topography": "11",
    "topic": "Diarreia aguda",
    "module": "Pediatria",
    "text": "Criança de 5 anos de idade é internada para tratamento de febre e diarreia de 5 dias de evolução. Ao exame físico na ectoscopia, observado regular estado geral, hipocorada (3+/4+), desidratada (1+/4+), afebril, cabelos finos e quebradiços; aparelho cardiovascular:\n\ntaquicárdica, pulsos periféricos cheios, tempo de enchimento capilar de 2 segundos, normotensa; aparelho respiratório: ausculta e frequência normais; aparelho digestivo: abdome plano, algo doloroso, sem defesa. Realizada aferição de peso e estatura, com peso/estatura e estatura/idade entre -2DP e -3DP segundo NHCS, glicemia capilar normal. Sobre o quadro descrito, assinale a alternativa CORRETA:",
    "options": [
      "(A) O primeiro passo no tratamento é estabilizar o paciente, sendo recomendada primeiramente hidratação preferencialmente via oral, correção de distúrbios hidroeletrolíticos caso presentes e tratamento de quadro infeccioso.",
      "(B) O primeiro passo no tratamento é estabilizar o paciente, sendo recomendada primeiramente hidratação, preferencialmente via endovenosa, correção de distúrbios hidroeletrolíticos, caso presentes, e tratamento de quadro infeccioso.",
      "(C) O primeiro passo no tratamento é iniciar antibioticoterapia endovenosa na primeira hora, oxigênio por cateter nasal, almejando saturação acima de 94% e expansão volêmica de 20 mL/kg de soro fisiológico 0,9% endovenosa livre. A alimentação deve ser iniciada na fase de reabilitação.",
      "(D) O primeiro passo no tratamento é iniciar antibioticoterapia endovenosa na primeira hora, oxigênio por cateter nasal, almejando saturação acima de 94% e transfusão de concentrado de hemácias 10 mL/kg em 3 horas. A alimentação deve ser iniciada na fase de estabilização."
    ],
    "correctAnswer": 1,
    "explanation": "Criança desnutrida (peso/estatura e estatura/idade entre –2 e –3 DP, cabelos finos e quebradiços) com diarreia, febre, desidratação e anemia importante. O manejo da criança desnutrida hospitalizada segue as fases de estabilização e reabilitação.\n\nNa estabilização, tratam-se hipoglicemia, hipotermia, desidratação, distúrbios eletrolíticos e infecção. O gabarito oficial considerou hidratação preferencialmente venosa. Os protocolos da OMS e do Ministério da Saúde preferem a reidratação oral ou por sonda (ReSoMal), pelo risco de sobrecarga cardíaca, deixando a via venosa para choque.",
    "commentary": "Hidratação preferencialmente oral (A): é o que recomendam a OMS e o MS (ReSoMal); também é aceita aqui pela controvérsia com o gabarito.\n\nAntibiótico, O₂ e expansão de 20 mL/kg (C): não há choque nem hipoxemia, e a expansão rápida é perigosa no desnutrido.\n\nTransfusão de 10 mL/kg (D): reservada a Hb < 4 g/dL ou < 6 com sinais de descompensação; e a alimentação começa já na estabilização, com cautela.",
    "reference": "OMS — Guidelines for the inpatient treatment of severely malnourished children / Manual de atendimento da criança com desnutrição grave em nível hospitalar (MS)",
    "tags": [
      "pediatria",
      "desnutrição",
      "desidratação",
      "ReSoMal"
    ],
    "alsoAccepted": [
      0
    ],
    "alert": "Gabarito oficial discutível: OMS e Ministério da Saúde recomendam reidratação preferencialmente oral ou por sonda (ReSoMal) na criança desnutrida, reservando a via venosa para choque. A alternativa A também é aceita como correta."
  },
  {
    "id": "scmbh2026-67",
    "topography": "9",
    "topic": "Anemia megaloblástica",
    "module": "Pediatria",
    "text": "Trata-se de criança de 2 anos de idade, internada para investigação de atraso no desenvolvimento neuropsicomotor e identificado erro alimentar importante. Ao exame físico, encontra-se em regular estado geral, apática, não sorri, não permanece em pé, tônus muscular reduzido. Realizada revisão laboratorial com hemograma evidenciando pancitopenia.\n\nSobre o caso descrito, assinale a alternativa que MELHOR justifica o quadro:",
    "options": [
      "(A) Trata-se de provável quadro de deficiência de cianocobalamina, sendo indicada dosagem e suplementação intramuscular.",
      "(B) Trata-se de provável quadro de deficiência de tiamina, sendo indicada dosagem e suplementação endovenosa.",
      "(C) Trata-se de provável quadro de deficiência de ferro, sendo indicada dosagem e suplementação via oral.",
      "(D) Trata-se de provável quadro de deficiência de niacina, sendo indicada dosagem e suplementação endovenosa."
    ],
    "correctAnswer": 0,
    "explanation": "Criança de 2 anos com erro alimentar importante, atraso e regressão do desenvolvimento, apatia, hipotonia e pancitopenia: quadro típico de deficiência de vitamina B12 (cianocobalamina), por exemplo em filho de mãe vegana ou com dieta restrita.\n\nA B12 é essencial à síntese de DNA (megaloblastose e pancitopenia) e à mielinização (alterações neurológicas). Dosa-se B12 (e homocisteína ou ácido metilmalônico) e repõe-se por via intramuscular.",
    "commentary": "Tiamina (B): causa beribéri ou Wernicke, sem pancitopenia.\n\nFerro (C): causa anemia microcítica, não pancitopenia com regressão neurológica.\n\nNiacina (D): causa pelagra (dermatite, diarreia, demência), sem pancitopenia.",
    "reference": "Tratado de Pediatria SBP — Anemias carenciais / Nelson Textbook of Pediatrics",
    "tags": [
      "pediatria",
      "deficiência de vitamina B12",
      "pancitopenia",
      "atraso do desenvolvimento"
    ]
  },
  {
    "id": "scmbh2026-68",
    "topography": "11",
    "topic": "Asma infantil",
    "module": "Pediatria",
    "text": "Lactente de 16 meses é internado, devido a segundo episódio de sibilância (primeiro episódio aos 12 meses de idade), com taquipneia, esforço respiratório, tempo expiratório prolongado e sibilos expiratórios difusos, com resposta a beta 2 agonistas de curta duração. Segundo a mãe, o quadro iniciou após episódio de resfriado comum. Lactente previamente hígido, com teste do pezinho normal, sem internações, bom ganho pondero estatural. Pais e irmão possuem histórias de sibilância. Ao exame físico, exceto pelo aparelho respiratório, sem alterações.\n\nSobre o quadro descrito, assinale a alternativa CORRETA:",
    "options": [
      "(A) Trata-se de possível diagnóstico de asma, mas é necessário realização de espirometria.",
      "(B) Trata-se de possível diagnóstico de asma, mas é necessário realização de oscilometria.",
      "(C) Trata-se de possível diagnóstico de asma, não sendo necessário realização de exames complementares.",
      "(D) Trata-se de possível diagnóstico de asma, mas é necessário realização de ecocardiograma para exclusão de cardiopatia congênita."
    ],
    "correctAnswer": 1,
    "explanation": "Lactente de 16 meses com sibilância recorrente desencadeada por viroses, resposta a broncodilatador e forte história familiar de atopia: provável asma ou sibilância recorrente com alto risco de asma (índice preditivo de asma positivo).\n\nEm menores de 5 anos, o GINA considera o diagnóstico essencialmente clínico (padrão de sintomas, fatores de risco, resposta ao tratamento), pois testes de função pulmonar são pouco disponíveis. O gabarito oficial indica a oscilometria, que pode documentar obstrução reversível sem exigir cooperação, mas não é indispensável.",
    "commentary": "Espirometria (A): inviável aos 16 meses; exige cooperação, geralmente a partir dos 5–6 anos.\n\nDiagnóstico clínico, sem exames (C): é a abordagem recomendada pelo GINA nessa idade; também é aceita aqui pela controvérsia com o gabarito.\n\nEcocardiograma (D): sem sopro ou sinais de cardiopatia, não há indicação.",
    "reference": "GINA 2024 — Asma em crianças de 5 anos ou menos / Diretrizes da SBP",
    "tags": [
      "pediatria",
      "asma",
      "sibilância recorrente",
      "oscilometria"
    ],
    "alsoAccepted": [
      2
    ],
    "alert": "Gabarito oficial discutível: o GINA considera o diagnóstico de asma em menores de 5 anos essencialmente clínico; a oscilometria pode ajudar, mas não é obrigatória. A alternativa C também é aceita como correta."
  },
  {
    "id": "scmbh2026-69",
    "topography": "11",
    "topic": "Bronquiolite",
    "module": "Pediatria",
    "text": "Em consulta de puericultura de seu bebê de 3 meses de idade cronológica e 45 dias de idade corrigida, baixo ganho ponderal, portadora de comunicação interatrial e persistência do canal arterial e displasia broncopulmonar, mãe relata preocupação sobre bronquiolite viral aguda.\n\nAssinale a orientação MAIS adequada:",
    "options": [
      "(A) Manter a bebê em isolamento por até 6 meses de idade corrigida.",
      "(B) Indicar palivizumabe durante o período de sazonalidade do vírus.",
      "(C) Indicar corticoide inalatório até maturação pulmonar completa.",
      "(D) Suspender aleitamento materno e iniciar fórmula hipercalórica."
    ],
    "correctAnswer": 1,
    "explanation": "Lactente prematura com displasia broncopulmonar e cardiopatia congênita com repercussão hemodinâmica (CIA e PCA): grupo de alto risco para bronquiolite grave por vírus sincicial respiratório.\n\nO palivizumabe (anticorpo monoclonal anti-VSR) é indicado pelo Ministério da Saúde e pela SBP para crianças menores de 2 anos com displasia broncopulmonar ou cardiopatia congênita com repercussão, durante a sazonalidade do VSR, em doses mensais. Em várias regiões o nirsevimabe passou a ser alternativa.",
    "commentary": "Isolamento até 6 meses (A): medida desproporcional e insuficiente; higiene das mãos e evitar aglomerações são recomendados, mas não substituem a profilaxia.\n\nCorticoide inalatório (C): não previne bronquiolite nem é tratamento da displasia nesse contexto.\n\nSuspender aleitamento (D): o leite materno é protetor; pode-se suplementar ou fortificar, sem suspender.",
    "reference": "Ministério da Saúde — Protocolo de uso do palivizumabe / SBP — Diretrizes para o manejo da infecção por VSR (2017)",
    "tags": [
      "pediatria",
      "bronquiolite",
      "palivizumabe",
      "displasia broncopulmonar",
      "prematuridade"
    ]
  },
  {
    "id": "scmbh2026-70",
    "topography": "11",
    "topic": "Aleitamento materno",
    "module": "Pediatria",
    "text": "Recém-nascido (39 semanas de idade gestacional, peso adequado para idade gestacional, sem contexto infeccioso) de 21 dias, é trazido à maternidade devido à icterícia, zona II de Kramer. Mãe refere aleitamento materno exclusivo e nega colúria e acolia fecal, febre, inapetência, irritabilidade ou quaisquer outras queixas. Exame físico, exceto pela icterícia, sem alterações, ganho de peso adequado. Dosada bilirrubina total de 6,3mg/dL sendo 0,7mg/dL direta e 5,6mg/dL indireta, restante do perfil hepático, hemograma e reticulócitos sem alterações.\n\nSobre o quadro descrito, assinale a alternativa CORRETA:",
    "options": [
      "(A) Deve-se internar paciente, solicitar culturas e iniciar esquema de antibióticos para sepse neonatal tardia.",
      "(B) Deve-se internar paciente e solicitar ultrassonografia de abdômen total e avaliar interconsulta com cirurgia pediátrica.",
      "(C) Deve-se internar paciente, solicitar demais provas de hemólise e investigar deficiência de G6PD.",
      "(D) Deve-se orientar sobre a benignidade do quadro e melhora da icterícia por até, no máximo, 3º mês de vida."
    ],
    "correctAnswer": 3,
    "explanation": "RN a termo, em aleitamento materno exclusivo, com icterícia prolongada (21 dias) às custas de bilirrubina indireta, com bilirrubina direta normal, sem acolia ou colúria, hemograma e reticulócitos normais, ganhando peso e com exame normal: icterícia do leite materno.\n\nÉ benigna e pode durar até 2–3 meses. A conduta é tranquilizar, manter a amamentação e acompanhar. É fundamental afastar colestase (bilirrubina direta normal aqui) e hipotireoidismo (triagem neonatal).",
    "commentary": "Sepse tardia (A): a criança está bem, sem sinais infecciosos.\n\nUSG e cirurgia pediátrica (B): investigação de atresia biliar, que é colestática (bilirrubina direta alta, acolia).\n\nInvestigar hemólise e G6PD (C): hemograma e reticulócitos normais afastam hemólise significativa.",
    "reference": "SBP — Icterícia no recém-nascido com idade gestacional ≥ 35 semanas (2021) / AAP 2022",
    "tags": [
      "neonatologia",
      "icterícia neonatal",
      "icterícia do leite materno",
      "aleitamento materno"
    ]
  },
  {
    "id": "scmbh2026-71",
    "topography": "11",
    "topic": "Diarreia aguda",
    "module": "Pediatria",
    "text": "M.M.L; 2 anos, sexo feminino. Paciente dá entrada no Pronto Atendimento com quadro de diarreia de 5 dias de evolução, com fezes aquosas em grande volume, vários episódios ao dia. Mãe relata febre nos primeiros 2 dias; e quadro semelhante em toda família. AO EXAME: Hipocorado (1+/4+), anictérico, acianótico, mucosas secas, pulso aumentado, sedento, boa perfusão capilar, sem edemas. Aparelho Cardiovascular: Ritmo cardíaco regular em 2 tempos, sem sopros. Frequência cardíaca: 120bpm Aparelho respiratório: Murmúrio vesicular fisiológico, sem esforço Aparelho digestivo: Abdome normotenso, indolor, sem massas ou visceromegalias, ruído hidroaéreo positivo.\n\nSobre o quadro clínico, é CORRETO afirmar:",
    "options": [
      "(A) O paciente apresenta sinais de desidratação, com necessidade de terapia de reidratação oral no serviço de saúde.",
      "(B) O quadro clínico é provavelmente causado por um agente bacteriano, com necessidade de antibioticoterapia.",
      "(C) Devido ao tempo de evolução do quadro, deve-se iniciar dieta isenta de lactose.",
      "(D) A administração de Zinco só está indicada, caso o quadro dure mais de 14 dias."
    ],
    "correctAnswer": 0,
    "explanation": "Criança com diarreia aquosa aguda e sinais de desidratação (mucosas secas, sedenta, pulso aumentado), sem sinais de gravidade (boa perfusão, alerta): plano B do Ministério da Saúde.\n\nA terapia de reidratação oral com SRO é feita no serviço de saúde (50–100 mL/kg em 4–6 horas), com reavaliação, e depois passa-se ao plano A. O zinco é recomendado para toda criança com diarreia aguda (10–20 mg/dia por 10–14 dias).",
    "commentary": "Agente bacteriano com antibiótico (B): o quadro familiar de diarreia aquosa sugere etiologia viral; antibiótico só em disenteria ou cólera, por exemplo.\n\nDieta sem lactose (C): não é indicada de rotina; mantém-se a alimentação habitual.\n\nZinco só se durar mais de 14 dias (D): o zinco é indicado em toda diarreia aguda na criança.",
    "reference": "Ministério da Saúde — Manejo do paciente com diarreia / OMS/UNICEF",
    "tags": [
      "pediatria",
      "diarreia aguda",
      "desidratação",
      "terapia de reidratação oral"
    ]
  },
  {
    "id": "scmbh2026-72",
    "topography": "11",
    "topic": "Aleitamento materno",
    "module": "Pediatria",
    "text": "S.G.L; 2 meses, sexo feminino. Paciente em aleitamento materno exclusivo em livre demanda, vai à consulta com Gastroenterologista Pediátrico devido a regurgitações frequentes, desde o primeiro mês de vida, após todas as mamadas e em grande volume, incluindo com saída de leite pelo nariz. Mãe nega perda de peso, febre, recusa alimentar ou irritabilidade durante as mamadas. Apresentando 3 evacuações ao dia, sem pus, muco ou sangue. História Pregressa: Nega alergias medicamentosas. Vacinação em dia. Teste do pezinho: normal. Nega internações prévias. Nega história de consanguinidade na família. Recém-nascido a termo, 39 semanas, parto normal; Peso ao nascimento:3200g; comprimento:50cm; Perímetro Cefálico:33cm; sem intercorrências; Apgar 8/9. Recebeu alta da maternidade em 24 horas. História Familiar: nada digno de nota AO EXAME: Peso: 5500g; Comprimento:58cm; Perímetro Cefálico:38cm Corado, hidratado, anictérico, acianótico, pulsos cheios e rítmicos, boa perfusão capilar, sem edemas. Aparelho Cardiovascular: Ritmo cardíaco regular em 2 tempos, sem sopros. Frequência cardíaca: 128bpm Aparelho respiratório: Murmúrio vesicular fisiológico, sem esforço; Frequência respiratória:40irpm Aparelho digestivo: Abdome normotenso, indolor, sem massas ou visceromegalias, ruído hidroaéreo positivo.\n\nAparelho genitourinário: genitália tipicamente feminina Sistema nervoso: Fontanela anterior normotensa e plana Sobre o caso clínico, é CORRETO afirmar:",
    "options": [
      "(A) Deve-se iniciar tratamento com inibidor de bomba de prótons.",
      "(B) É necessário suspender o aleitamento materno e iniciar com fórmula espessada.",
      "(C) Deve-se orientar a mãe sobre o caráter benigno do quadro e manter aleitamento materno exclusivo.",
      "(D) É necessário suspender a proteína do leite de vaca da dieta materna para excluir o diagnóstico de Alergia à Proteína do Leite de Vaca."
    ],
    "correctAnswer": 2,
    "explanation": "Lactente de 2 meses com regurgitações frequentes e volumosas, mas com bom ganho de peso, sem irritabilidade, recusa alimentar, sangue nas fezes ou outros sinais de alarme: refluxo gastroesofágico fisiológico ('lactente regurgitador feliz').\n\nA conduta é tranquilizar a família, orientar (evitar superalimentação, manter a criança em posição vertical após mamar) e manter o aleitamento materno exclusivo. Melhora espontaneamente até cerca de 12–18 meses.",
    "commentary": "IBP (A): sem indicação no refluxo fisiológico; não reduz regurgitação e tem efeitos adversos.\n\nTrocar por fórmula espessada (B): não se suspende o aleitamento materno por refluxo fisiológico.\n\nExcluir leite de vaca da dieta materna (D): considerada só com sinais sugestivos de alergia, ausentes aqui.",
    "reference": "NASPGHAN/ESPGHAN — Pediatric GER Clinical Practice Guidelines (2018) / SBP",
    "tags": [
      "pediatria",
      "refluxo gastroesofágico fisiológico",
      "gastroenterologia pediátrica",
      "aleitamento materno"
    ]
  },
  {
    "id": "scmbh2026-73",
    "topography": "11",
    "topic": "Diarreia aguda",
    "module": "Pediatria",
    "text": "As Parasitoses Intestinais ainda são um grave problema de saúde, principalmente nos países em desenvolvimento. Segundo a organização Mundial da Saúde (OMS), representam o conjunto de doenças mais comuns do globo terrestre.\n\nSobre as Parasitoses Intestinais na infância, é CORRETO afirmar:",
    "options": [
      "(A) As condições socioeconômicas e/ou o acesso a saneamento básico pouco influenciam na incidência e prevalência das infecções.",
      "(B) A coleta seriada de fezes para parasitológico não está indicada para aumentar a sensibilidade do exame.",
      "(C) O quadro clínico geral das parasitoses, na grande maioria dos casos, é oligossintomático ou assintomático; e geralmente os sintomas são inespecíficos, com diarreia, náuseas e vômitos.",
      "(D) Segundo a OMS, a terapia empírica periódica é contraindicada devido ao alto custo e à falta de segurança dos medicamentos."
    ],
    "correctAnswer": 2,
    "explanation": "A maioria das parasitoses intestinais na infância é assintomática ou oligossintomática. Quando há sintomas, são inespecíficos (dor abdominal, diarreia, náuseas, inapetência), com exceções (prurido anal na enterobíase, anemia ferropriva na ancilostomíase).",
    "commentary": "Saneamento pouco influencia (A): saneamento básico e condições socioeconômicas são os principais determinantes.\n\nColeta seriada não aumenta a sensibilidade (B): a coleta seriada (3 amostras em dias alternados) aumenta a sensibilidade do parasitológico.\n\nOMS contraindica terapia empírica periódica (D): a OMS recomenda desparasitação periódica em áreas de alta prevalência de geo-helmintos, com fármacos seguros e baratos (albendazol, mebendazol).",
    "reference": "OMS — Preventive chemotherapy to control soil-transmitted helminth infections (2017) / SBP",
    "tags": [
      "pediatria",
      "parasitoses intestinais",
      "saneamento"
    ]
  },
  {
    "id": "scmbh2026-74",
    "topography": "11",
    "topic": "Convulsão febril",
    "module": "Pediatria",
    "text": "Criança de 2 anos, com desenvolvimento normal, na vigência de 38,8 graus secundária a resfriado, apresenta uma crise convulsiva tônico clônica generalizada, com duração de 3 minutos, sendo referenciada para pronto socorro, onde já dá entrada alerta, lúcida, sem rigidez de nuca e com restante de exame físico sem alterações. Mãe refere que é a primeira crise da vida desta criança.\n\nFrente a este quadro, qual a conduta ADEQUADA?",
    "options": [
      "(A) Orientar a família a respeito de crise febril simples e liberar a criança com sintomáticos.",
      "(B) Solicitar eletroencefalograma e tomografia de crânio ambulatorial.",
      "(C) Solicitar eletroencefalograma ambulatorial.",
      "(D) Solicitar tomografia de crânio ambulatorial."
    ],
    "correctAnswer": 0,
    "explanation": "Primeira crise generalizada, com menos de 15 minutos, única em 24 horas, em criança de 2 anos (faixa de 6 meses a 5 anos) com febre por resfriado, desenvolvimento normal, que volta ao normal sem sinais meníngeos: crise febril simples.\n\nNão exige EEG, neuroimagem nem punção de rotina. A conduta é orientar a família (benignidade, risco de recorrência de cerca de 30%, o que fazer numa nova crise) e tratar a febre e a causa.",
    "commentary": "EEG e TC (B): sem indicação na crise febril simples.\n\nEEG ambulatorial (C): não prediz recorrência nem epilepsia nesse contexto.\n\nTC ambulatorial (D): sem indicação.",
    "reference": "AAP Clinical Practice Guideline — Simple Febrile Seizures (2011) / SBP",
    "tags": [
      "pediatria",
      "crise febril",
      "neurologia infantil"
    ]
  },
  {
    "id": "scmbh2026-75",
    "topography": "14",
    "topic": "Anafilaxia",
    "module": "Pediatria",
    "text": "Um paciente de 8 anos de idade é levado às pressas ao pronto atendimento devido à edema labial. Os pais relatam que estavam em um almoço de família quando notaram a alteração. Relatam que durante trajeto o paciente apresentou vários episódios de vômitos. Ao exame físico, você nota ausência de urticária, ausculta respiratória sem alterações e pressão normal para idade.\n\nDiante do caso e do tema, de acordo com a Sociedade Brasileira de Pediatria e a World Allergy Organization, assinale a alternativa CORRETA:",
    "options": [
      "(A) Trata-se de um quadro de anafilaxia, devendo ser instituída terapia com adrenalina endovenosa. O corticoide e o antialérgico devem ser prescritos desde que não atrasem a administração da adrenalina.",
      "(B) Trata-se de um provável quadro de reação alérgica grave, mas ainda não fecha critérios de anafilaxia, faltando o surgimento de envolvimento cutâneo e respiratório. Deve ser prescrito antialérgico e avaliar corticoterapia.",
      "(C) Trata-se de quadro de anafilaxia, devendo ser administrada adrenalina intramuscular imediatamente. Caso não haja resposta adequada à primeira dose, ela poderá ser repetida via intramuscular após 5 a 15 minutos.",
      "(D) Trata-se de quadro de reação alérgica moderada, e deve ser administrado anti-histamínico e corticoide sistêmico. Em caso de sintoma respiratório, administrar adrenalina inalatória na dose de 0,01 mg/kg de peso corporal. O paciente deve ser mantido em observação para avaliar resposta ao tratamento inicial por pelo menos 4 a 6 horas."
    ],
    "correctAnswer": 2,
    "explanation": "Exposição provável a alérgeno (almoço) com início súbito de angioedema labial (pele e mucosa) e vômitos repetidos (sintoma gastrointestinal persistente). Pelos critérios da WAO 2020, o envolvimento agudo de pele ou mucosa com sintomas gastrointestinais graves após exposição provável já caracteriza anafilaxia, mesmo sem comprometimento respiratório ou hipotensão.\n\nO tratamento de primeira linha é a adrenalina intramuscular imediata (0,01 mg/kg, máximo de 0,3–0,5 mg) na face anterolateral da coxa, repetível a cada 5 a 15 minutos se necessário.",
    "commentary": "Adrenalina intravenosa (A): a via IV é reservada a choque refratário, em ambiente monitorizado; a primeira dose é IM.\n\nAinda não é anafilaxia (B): os critérios da WAO 2020 incluem pele/mucosa associada a sintomas gastrointestinais graves; e anti-histamínico não substitui a adrenalina.\n\nReação moderada com adrenalina inalatória (D): subestima a gravidade; a adrenalina inalatória não trata anafilaxia.",
    "reference": "World Allergy Organization — Anaphylaxis Guidance (2020) / SBP/ASBAI — Guia prático de anafilaxia",
    "tags": [
      "pediatria",
      "anafilaxia",
      "adrenalina intramuscular",
      "alergia alimentar"
    ]
  }
];
