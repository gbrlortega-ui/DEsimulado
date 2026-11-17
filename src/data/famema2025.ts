import { Question } from '../types';

// FAMEMA 2025 (SP) — residência médica. 100 questões, 4 alternativas (a questão 22 tem 3 no caderno).
// Gabarito conferido no gabarito comentado do AjudaMédico; explicações com texto próprio.
export const FAMEMA_2025_QUESTIONS: Question[] = [
  {
    "id": "famema2025-1",
    "topography": "1.1",
    "topic": "Meningite",
    "module": "Clínica Médica",
    "text": "Paciente de 62 anos, sem histórico de doenças prévias e quadros alérgicos, chega à unidade de saúde com cefaleia, febre e sinais de Kernig e Brudzinski positivos. Empiricamente, neste momento, deve receber",
    "options": [
      "ceftriaxona 2 g EV de 12/12 horas + dexametasona por 10-14 dias.",
      "apenas ceftriaxona 2 g EV de 12/12 horas por 10 – 14 dias.",
      "ciprofloxacino 400 mg EV de 12/12 horas + dexametasona por 10 - 14 dias.",
      "apenas ciprofloxacino 400 mg EV de 12/12 horas por 10-14 dias."
    ],
    "correctAnswer": 0,
    "explanation": "Febre, cefaleia e sinais de irritação meníngea (Kernig e Brudzinski) em adulto previamente hígido: meningite bacteriana aguda até prova em contrário. O tratamento é empírico e deve começar sem atraso, logo após (ou até antes) da punção lombar.\n\nNo adulto da comunidade, os agentes principais são pneumococo e meningococo, cobertos pela ceftriaxona 2 g EV de 12/12 h. A dexametasona (0,15 mg/kg de 6/6 h, iniciada antes ou junto da primeira dose do antibiótico) reduz mortalidade e sequelas, sobretudo surdez, na meningite pneumocócica.\n\nRessalva: acima de 50 anos as diretrizes acrescentam ampicilina para cobrir Listeria; a alternativa A é a única que traz o esquema-base correto (ceftriaxona + corticoide). A dexametasona costuma ser mantida por 4 dias, não pelos 10–14 dias do antibiótico.",
    "commentary": "Apenas ceftriaxona (B): o antibiótico está certo, mas omitir a dexametasona tira o benefício comprovado na redução de sequelas.\n\nCiprofloxacino + dexametasona (C): quinolona não é tratamento empírico de meningite; o ciprofloxacino é usado na quimioprofilaxia de contactantes de doença meningocócica.\n\nApenas ciprofloxacino (D): antibiótico inadequado e sem corticoide.",
    "tip": "Meningite bacteriana no adulto: ceftriaxona 2 g 12/12 h + dexametasona antes ou junto da 1ª dose. Acima de 50 anos ou imunossuprimido: + ampicilina (Listeria).",
    "reference": "van de Beek D et al. ESCMID guideline: diagnosis and treatment of acute bacterial meningitis. Clin Microbiol Infect, 2016. Ministério da Saúde. Guia de Vigilância em Saúde, 2023.",
    "tags": [
      "meningite bacteriana",
      "ceftriaxona",
      "dexametasona"
    ]
  },
  {
    "id": "famema2025-2",
    "topography": "8",
    "topic": "Diabetes mellitus tipo 1 e 2",
    "module": "Clínica Médica",
    "text": "Paciente recentemente recebeu confirmação diagnóstica de diabetes melito. Com relação às insulinas, assinale a alternativa correta.",
    "options": [
      "Lispro tem ação prolongada e pico de ação com 1 - 2 horas.",
      "Regular tem ação intermediária e pico de ação com 2-4 horas.",
      "Levemir tem ação prolongada e pico de ação 5 – 15 minutos.",
      "Glargina tem ação prolongada, sem pico de ação."
    ],
    "correctAnswer": 3,
    "explanation": "A glargina é um análogo de insulina de ação longa: após a injeção forma microprecipitados no subcutâneo, que liberam a insulina de forma lenta e estável por cerca de 24 horas, praticamente sem pico. Por isso é usada como insulina basal, uma vez ao dia.",
    "commentary": "Lispro (A): é análogo de ação ultrarrápida; começa a agir em 5–15 minutos, pico em 30–90 minutos e dura 3–5 horas.\n\nRegular (B): é insulina de ação rápida (início 30–60 minutos, pico 2–3 horas, duração 5–8 horas); a de ação intermediária é a NPH, com pico em 4–10 horas.\n\nLevemir/detemir (C): é de ação prolongada, mas não tem pico em 5–15 minutos; esse é o início de ação dos análogos ultrarrápidos.",
    "tip": "Basal sem pico: glargina, detemir, degludeca. Ultrarrápidas (lispro, asparte, glulisina): início em 5–15 min. NPH: intermediária, pico em 4–10 h.",
    "reference": "Sociedade Brasileira de Diabetes. Diretriz Oficial da SBD, 2024 – Insulinoterapia no diabetes tipo 1 e 2.",
    "tags": [
      "insulina",
      "glargina",
      "diabetes mellitus"
    ]
  },
  {
    "id": "famema2025-3",
    "topography": "3.1",
    "topic": "Diarreia aguda",
    "module": "Clínica Médica",
    "text": "Durante um cruzeiro de verão no litoral brasileiro, diversos pacientes apresentaram sintomas de intoxicação alimentar e precisaram ser atendidos por equipes de saúde. Eles relatam que comeram saladas diversas, além de carne e peixe, e que os sintomas tiveram início duas horas após a alimentação.\n\nO agente etiológico mais provavelmente envolvido é:",
    "options": [
      "rotavírus.",
      "norovirus.",
      "estafilococos.",
      "salmonela."
    ],
    "correctAnswer": 2,
    "explanation": "Surto de intoxicação alimentar com início muito rápido (2 horas após a refeição) aponta para toxina pré-formada no alimento. O Staphylococcus aureus contamina alimentos manipulados (saladas, carnes, maionese) e produz enterotoxina termoestável; o quadro começa 1–6 horas após a ingestão, com náuseas e vômitos intensos, cólica e diarreia, e se resolve em 24–48 horas.\n\nQuando o período de incubação é curto (horas), pense em toxina pré-formada (S. aureus, Bacillus cereus); quando é de 12 horas ou mais, em infecção que precisa se multiplicar no intestino.",
    "commentary": "Rotavírus (A): acomete principalmente crianças pequenas, com incubação de 1–3 dias; não é causa típica de surto em adultos após refeição.\n\nNorovírus (B): é a grande causa de surtos em navios, mas a incubação é de 12–48 horas, longa demais para sintomas em 2 horas.\n\nSalmonela (D): incubação de 6–72 horas (em geral 12–36 h), com febre e diarreia; não explica início em 2 horas.",
    "tip": "Intoxicação alimentar em 1–6 horas = toxina pré-formada (S. aureus, B. cereus). Surto em navio com 1–2 dias de incubação = norovírus.",
    "reference": "Ministério da Saúde. Manual Integrado de Vigilância, Prevenção e Controle de Doenças Transmitidas por Alimentos, 2010.",
    "tags": [
      "intoxicação alimentar",
      "staphylococcus aureus",
      "doenças transmitidas por alimentos"
    ]
  },
  {
    "id": "famema2025-4",
    "topography": "2.1",
    "topic": "Embolia pulmonar",
    "module": "Clínica Médica",
    "text": "Paciente de 24 anos chega à unidade de saúde com quadro sugestivo de TEP. É correto afirmar que é fator de risco alto a identificação de",
    "options": [
      "gestação.",
      "antecedente de trombose venosa profunda.",
      "varizes em membros inferiores.",
      "uso de anticoncepcional oral."
    ],
    "correctAnswer": 1,
    "explanation": "Entre os fatores de risco para tromboembolismo venoso, o antecedente de trombose venosa profunda ou TEP é um dos mais fortes: a recorrência é alta, sobretudo após evento não provocado. Nas tabelas de estratificação (ESC), TEV prévio aparece entre os fatores de risco fortes ou moderados, e ele pontua nos escores de Wells e Genebra.",
    "commentary": "Gestação (A): aumenta o risco de TEV, mas é classificada como fator de risco moderado/fraco, inferior ao antecedente de TVP.\n\nVarizes de membros inferiores (C): fator de risco fraco.\n\nAnticoncepcional oral (D): fator de risco moderado (estrogênio aumenta fatores pró-coagulantes), menos importante que o evento prévio.",
    "tip": "TEV prévio, fratura de membro inferior, artroplastia de quadril/joelho, trauma maior e lesão medular são fatores fortes; gestação, ACO e varizes pesam menos.",
    "reference": "Konstantinides SV et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism. Eur Heart J, 2020.",
    "tags": [
      "tromboembolismo pulmonar",
      "trombose venosa profunda",
      "fatores de risco"
    ]
  },
  {
    "id": "famema2025-5",
    "topography": "3.2",
    "topic": "Encefalopatia hepática",
    "module": "Clínica Médica",
    "text": "Paciente de 56 anos, com histórico de uso abusivo de álcool nos últimos 35 anos, chega à unidade de saúde desatento, com fala lentificada, raciocínio lento e flapping. Considerando a classificação de West-Haven, ele está inserido no estágio",
    "options": [
      "I.",
      "II.",
      "III.",
      "IV."
    ],
    "correctAnswer": 1,
    "explanation": "O paciente com hepatopatia alcoólica apresenta desatenção, fala e raciocínio lentos e flapping (asterixis). Na escala de West Haven, o grau II é marcado por letargia ou apatia, desorientação leve, comportamento inadequado e asterixis evidente. O flapping é o sinal clínico que separa o grau II do grau I.",
    "commentary": "Grau I (A): alterações sutis, como déficit de atenção, euforia ou ansiedade e inversão do sono; o asterixis em geral está ausente.\n\nGrau III (C): sonolência importante a torpor, mas responde a estímulos, desorientação grosseira e confusão.\n\nGrau IV (D): coma.",
    "tip": "West Haven: I = alteração sutil, sem flapping; II = letargia + flapping; III = torpor e confusão grosseira; IV = coma.",
    "reference": "Vilstrup H et al. Hepatic encephalopathy in chronic liver disease: 2014 Practice Guideline by AASLD and EASL. Hepatology, 2014.",
    "tags": [
      "encefalopatia hepática",
      "west Haven",
      "cirrose"
    ]
  },
  {
    "id": "famema2025-6",
    "topography": "3.2",
    "topic": "Icterícia",
    "module": "Clínica Médica",
    "text": "Paciente de 26 anos, sem fatores de risco ou alergias, vem à unidade de saúde, pois, ao fazer exames admissionais, encontrou pequeno aumento nas transaminases. Ele não refere viagens recentes para fora de São Paulo, assim como qualquer doença prévia. Não há alterações no exame físico.\n\nMais provavelmente trata-se de",
    "options": [
      "exercício físico intenso.",
      "hepatite autoimune.",
      "doença celíaca.",
      "doença de Wilson."
    ],
    "correctAnswer": 0,
    "explanation": "Adulto jovem, assintomático, exame físico normal e elevação discreta de transaminases em exame admissional. Entre as opções, a causa mais frequente e benigna é o exercício físico intenso recente: a lesão muscular libera AST e ALT (a AST principalmente), o que pode ser confundido com lesão hepática.\n\nA conduta é confirmar com CPK e repetir as enzimas após alguns dias sem exercício, antes de investigar doenças hepáticas raras.",
    "commentary": "Hepatite autoimune (B): mais comum em mulheres, costuma cursar com hipergamaglobulinemia, autoanticorpos e, muitas vezes, sintomas; não é a explicação mais provável num jovem assintomático.\n\nDoença celíaca (C): pode elevar transaminases, mas é menos frequente e em geral há sintomas digestivos ou anemia.\n\nDoença de Wilson (D): deve ser lembrada em jovens com hepatopatia sem causa, mas é rara.",
    "tip": "Transaminase discretamente alta em jovem saudável: pergunte sobre exercício intenso e peça CPK antes de investigar doenças raras.",
    "reference": "Kwo PY et al. ACG Clinical Guideline: Evaluation of Abnormal Liver Chemistries. Am J Gastroenterol, 2017.",
    "tags": [
      "transaminases",
      "exercício físico",
      "hepatopatia"
    ]
  },
  {
    "id": "famema2025-7",
    "topography": "4.1",
    "topic": "Lesão renal aguda",
    "module": "Clínica Médica",
    "text": "Paciente de 64 anos, hipertenso controlado há vários anos, fez uso recente de anti-inflamatório para um quadro de dor lombar e está apresentando há 7 dias declínio na taxa de filtração glomerular. É considerado critério KDIGO:",
    "options": [
      "elevação absoluta na creatinina ≥ 0,3 mg/dL dentro de 48 horas.",
      "redução do débito urinário < 0,3 mL/kg/hora por um período maior que 6 horas.",
      "aumento relativo ≥ 1,0 vez a creatinina basal sabida na última semana.",
      "aumento relativo ≥ 1,0 vez a creatinina basal presumida na última semana."
    ],
    "correctAnswer": 0,
    "explanation": "Pelo KDIGO, lesão renal aguda é definida por qualquer um dos critérios: aumento da creatinina ≥ 0,3 mg/dL em 48 horas; aumento ≥ 1,5 vez a basal conhecida ou presumida nos últimos 7 dias; ou débito urinário < 0,5 mL/kg/h por 6 horas.\n\nO caso (AINE em idoso hipertenso, provavelmente usando IECA/BRA) é típico de LRA pré-renal hemodinâmica, e a alternativa A traz o critério absoluto exatamente como o KDIGO define.",
    "commentary": "Débito urinário < 0,3 mL/kg/h por > 6 h (B): o corte do KDIGO é < 0,5 mL/kg/h por 6 h; < 0,3 mL/kg/h por 24 h já é estágio 3.\n\nAumento ≥ 1,0 vez a basal sabida (C) e presumida (D): o critério relativo é aumento de 1,5 vez (50%) a basal; 1,0 vez significa creatinina igual à basal.",
    "tip": "KDIGO: +0,3 mg/dL em 48 h, ou 1,5× a basal em 7 dias, ou diurese < 0,5 mL/kg/h por 6 h.",
    "reference": "KDIGO Clinical Practice Guideline for Acute Kidney Injury. Kidney Int Suppl, 2012.",
    "tags": [
      "lesão renal aguda",
      "KDIGO",
      "AINE"
    ]
  },
  {
    "id": "famema2025-8",
    "topography": "2.2",
    "topic": "Infarto agudo do miocárdio",
    "module": "Clínica Médica",
    "text": "Paciente de 79 anos chega à unidade com queixa de dispneia. Ela tem antecedente de diabetes melito tratado com hipoglicemiante oral e por 10 anos fez uso de reposição hormonal para melhora de sintomas da menopausa.\n\nAssinale a alternativa que apresenta a definição eletrocardiográfica de infarto agudo do miocárdio com supradesnivelamento do segmento ST nessa paciente.",
    "options": [
      "Elevação de 1,5 mm do ponto J nas derivações V2 e V3.",
      "Elevação de 0,2 mm do ponto J nas derivações V7 a V9.",
      "Elevação de 0,5 mm do ponto J nas derivações DII e DIII.",
      "Aparecimento de novo bloqueio de ramo direito."
    ],
    "correctAnswer": 0,
    "explanation": "Pela Quarta Definição Universal de Infarto, o supradesnivelamento do ST é medido no ponto J em duas derivações contíguas. Em V2–V3 os cortes dependem de sexo e idade: ≥ 1,5 mm em mulheres de qualquer idade; ≥ 2 mm em homens ≥ 40 anos; ≥ 2,5 mm em homens < 40 anos. Nas demais derivações, ≥ 1 mm.\n\nA paciente é mulher de 79 anos, então o critério é elevação ≥ 1,5 mm em V2 e V3. Idosa diabética com dispneia é apresentação típica de equivalente anginoso.",
    "commentary": "0,2 mm em V7–V9 (B): nas derivações posteriores o critério é ≥ 0,5 mm (≥ 1 mm em homens < 40 anos).\n\n0,5 mm em DII e DIII (C): nas derivações inferiores é preciso ≥ 1 mm.\n\nNovo bloqueio de ramo direito (D): o que historicamente equivalia a supra era o bloqueio de ramo esquerdo novo; BRD isolado não define IAMCSST.",
    "tip": "Supra de ST: ≥ 1 mm na maioria das derivações; em V2–V3, mulher ≥ 1,5 mm, homem ≥ 40 anos ≥ 2 mm, homem < 40 anos ≥ 2,5 mm; V7–V9 ≥ 0,5 mm.",
    "reference": "Thygesen K et al. Fourth Universal Definition of Myocardial Infarction (2018). Circulation, 2018. SBC. Diretriz de IAM com supradesnível do ST, 2015.",
    "tags": [
      "IAM com supra de ST",
      "eletrocardiograma",
      "definição universal de infarto"
    ]
  },
  {
    "id": "famema2025-9",
    "topography": "10",
    "topic": "Dengue",
    "module": "Clínica Médica",
    "text": "Em 2024, o estado de São Paulo viveu uma epidemia de casos de dengue. Assinale a alternativa que apresenta a correlação correta entre classificação de grupo e sintomas.",
    "options": [
      "1 e choque franco com pronunciada hipotensão arterial.",
      "2 e sangramentos espontâneos, mas sem comprometimento hemodinâmico.",
      "3 e febre com sintomas inespecíficos e prova do laço positiva.",
      "4 e taquicardia, mas sem comprometimento hemodinâmico."
    ],
    "correctAnswer": 1,
    "explanation": "O Ministério da Saúde classifica a dengue em grupos A, B, C e D (letras, não números). A banca usou 1 a 4 equivalendo a A a D.\n\nO grupo B é o paciente sem sinais de alarme ou choque que tem sangramento espontâneo de pele (petéquias) ou prova do laço positiva, ou condição especial (gestante, < 2 anos, > 65 anos, comorbidades) ou risco social. Assim, 'grupo 2 = sangramento espontâneo sem comprometimento hemodinâmico' é a correlação correta. O grupo B exige hemograma e hidratação oral supervisionada até o resultado.",
    "commentary": "Grupo 1/A com choque (A): o grupo A não tem sangramento, sinal de alarme nem choque; choque é grupo D.\n\nGrupo 3/C com febre e prova do laço positiva (C): prova do laço positiva sem alarme é grupo B; o grupo C é definido pelos sinais de alarme.\n\nGrupo 4/D com taquicardia sem comprometimento hemodinâmico (D): o grupo D é choque ou sinais de choque, disfunção grave de órgão ou sangramento grave.",
    "tip": "Dengue: A = sem nada; B = sangramento de pele/prova do laço + ou condição especial; C = sinal de alarme; D = choque ou gravidade.",
    "reference": "Ministério da Saúde. Dengue: diagnóstico e manejo clínico – adulto e criança. 6ª ed., 2024.",
    "tags": [
      "dengue",
      "estadiamento",
      "prova do laço"
    ]
  },
  {
    "id": "famema2025-10",
    "topography": "1.1",
    "topic": "AVC",
    "module": "Clínica Médica",
    "text": "Paciente de 45 anos chega à unidade de saúde com quadro de hemiparesia direita e afasia, que teve início há 30 minutos. Ele não tem antecedentes prévios, assim como alergias. Considerando o diagnóstico de AVC, assinale a alternativa correta.",
    "options": [
      "Pacientes acima de 15 anos são elegíveis para realização de trombólise.",
      "Para se realizar a trombólise, é necessário um nível pressórico ≤ 185 mmHg x 110 mmHg.",
      "O acometimento está provavelmente relacionado à artéria cerebral média direita.",
      "Glicemia < 70 e > 250 mg/dL contraindica a realização da trombólise."
    ],
    "correctAnswer": 1,
    "explanation": "Hemiparesia direita com afasia há 30 minutos: AVC isquêmico no território da artéria cerebral média esquerda (hemisfério dominante), dentro da janela de trombólise (até 4,5 h).\n\nPara receber alteplase ou tenecteplase, a pressão arterial precisa estar ≤ 185 × 110 mmHg antes da infusão e ser mantida ≤ 180 × 105 mmHg nas 24 horas seguintes, pelo risco de transformação hemorrágica.",
    "commentary": "Acima de 15 anos (A): o critério de idade é ≥ 18 anos.\n\nArtéria cerebral média direita (C): a afasia indica lesão do hemisfério dominante (esquerdo na maioria) e a hemiparesia é contralateral; o território é a ACM esquerda.\n\nGlicemia < 70 e > 250 (D): glicemia < 50 mg/dL ou > 400 mg/dL é que precisa ser corrigida/considerada contraindicação, porque pode simular déficit focal.",
    "tip": "Trombólise no AVC: ≥ 18 anos, até 4,5 h, PA ≤ 185 × 110 antes e ≤ 180 × 105 depois, glicemia entre 50 e 400 mg/dL, TC sem sangramento.",
    "reference": "Powers WJ et al. 2019 AHA/ASA Guidelines for the Early Management of Acute Ischemic Stroke. Stroke, 2019. Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas – Trombólise no AVC isquêmico agudo.",
    "tags": [
      "AVC isquêmico",
      "trombólise",
      "pressão arterial"
    ]
  },
  {
    "id": "famema2025-11",
    "topography": "1.3",
    "topic": "Vertigem",
    "module": "Clínica Médica",
    "text": "Paciente de 36 anos chega à unidade de saúde relatando tontura há 5 dias, com piora há 1 dia. Nega qualquer tipo de trauma ou quadro infeccioso. Com relação à vertigem posicional paroxística benigna (VVPP), assinale a alternativa correta.",
    "options": [
      "O nistagmo da VVPP tem, em geral, componente vertical, raramente latência.",
      "A duração do nistagmo, em geral, é longa, durando em média 3 - 5 minutos.",
      "A manobra de Dix-Hallpike é a mais comumente utilizada para diagnóstico de VVPP.",
      "Frequentemente cursa com sintomas auditivos."
    ],
    "correctAnswer": 2,
    "explanation": "A vertigem posicional paroxística benigna (VPPB) é a causa mais comum de vertigem periférica: crises curtas desencadeadas por mudança de posição da cabeça, por otólitos deslocados para um canal semicircular (o posterior na maioria).\n\nA manobra de Dix-Hallpike é o teste diagnóstico mais usado: provoca vertigem e nistagmo torcional e vertical para cima, com latência de alguns segundos, curta duração e fatigabilidade. O tratamento é a manobra de reposicionamento de Epley.",
    "commentary": "Componente vertical e raramente latência (A): no canal posterior o nistagmo é torcional com componente vertical para cima e tem latência típica de alguns segundos; ausência de latência sugere causa central.\n\nDuração de 3–5 minutos (B): o nistagmo dura menos de 1 minuto (em geral < 30 segundos).\n\nSintomas auditivos frequentes (D): a VPPB não causa hipoacusia nem zumbido; esses sintomas sugerem doença de Ménière ou labirintite.",
    "tip": "VPPB: vertigem de segundos ao mudar a posição, sem perda auditiva. Diagnóstico: Dix-Hallpike. Tratamento: Epley.",
    "reference": "Bhattacharyya N et al. Clinical Practice Guideline: Benign Paroxysmal Positional Vertigo (Update). Otolaryngol Head Neck Surg, 2017.",
    "tags": [
      "VPPB",
      "vertigem",
      "Dix-Hallpike"
    ]
  },
  {
    "id": "famema2025-12",
    "topography": "10",
    "topic": "Raiva",
    "module": "Clínica Médica",
    "text": "Com relação à profilaxia da raiva humana, assinale a alternativa correta.",
    "options": [
      "Casos de arranhadura leve de gato sem qualquer suspeita de raiva devem ter observação do paciente e do animal por 25 dias.",
      "Vacinação com 5 doses é, atualmente, exclusiva para mordedura de animais silvestres.",
      "Vacinação com 4 doses deve ser feita nos dias 0, 4, 7 e 14.",
      "Em caso de contato indireto com morcego, o paciente deve receber 4 doses."
    ],
    "correctAnswer": 3,
    "explanation": "Pelas normas atuais do Ministério da Saúde, todo contato com morcego (inclusive contato indireto ou a pessoa acordar com o animal no quarto) é considerado exposição grave: a mordida pode passar despercebida e o morcego é hoje a principal fonte de raiva humana no Brasil. A conduta é lavar o local, aplicar soro (ou imunoglobulina) antirrábico e vacina em 4 doses (dias 0, 3, 7 e 14). A alternativa D fala do número de doses, que está correto.",
    "commentary": "Observação por 25 dias (A): em acidente com cão ou gato observável, observa-se o animal por 10 dias; arranhadura leve por animal sem suspeita só exige observação do animal.\n\n5 doses exclusivas para silvestres (B): o esquema de 5 doses foi substituído pelo de 4 doses para todos os acidentes; acidente com silvestre é grave e recebe soro + 4 doses.\n\nDias 0, 4, 7 e 14 (C): o esquema é nos dias 0, 3, 7 e 14.",
    "tip": "Raiva: observar cão/gato por 10 dias. Morcego = sempre grave = soro + vacina 4 doses (D0, D3, D7, D14).",
    "reference": "Ministério da Saúde. Nota Técnica nº 8/2022 – Atualização das recomendações da profilaxia da raiva humana. Guia de Vigilância em Saúde, 2023.",
    "tags": [
      "raiva",
      "profilaxia pós-exposição",
      "morcego"
    ]
  },
  {
    "id": "famema2025-13",
    "topography": "4.1",
    "topic": "Distúrbios hidroeletrolíticos",
    "module": "Clínica Médica",
    "text": "Paciente de 72 anos chega à unidade de saúde relatando ter insuficiência cardíaca congestiva, fazendo uso regular de diuréticos. Refere quadro de fadiga e de fraqueza em MMII. Com relação à hipocalemia, assinale a alternativa correta.",
    "options": [
      "A concentração máxima em veia periférica e diluída em soro fisiológico é de até 125 mEq/hora.",
      "O ECG, frequentemente, mostrará onda T apiculada e menor amplitude da onda U.",
      "Dor e flebite podem ocorrer em velocidade de reposição acima de 10 mEq/hora.",
      "Se houver hipomagnesemia associada, apenas a correção da hipocalemia será suficiente para corrigi-la também."
    ],
    "correctAnswer": 2,
    "explanation": "Idoso com insuficiência cardíaca em uso de diurético, com fadiga e fraqueza de membros inferiores: hipocalemia por perda renal.\n\nNa reposição endovenosa de potássio por veia periférica, a solução é irritante: velocidades acima de cerca de 10 mEq/h e concentrações altas causam dor e flebite. Por isso, em veia periférica, recomenda-se até 10 mEq/h (e concentração até cerca de 40–60 mEq/L); velocidades maiores exigem veia central e monitorização cardíaca.",
    "commentary": "125 mEq/hora (A): valor muito acima de qualquer limite seguro; a infusão rápida de potássio pode causar arritmia fatal.\n\nOnda T apiculada (B): é sinal de hipercalemia; na hipocalemia a onda T fica achatada, o ST infradesnivelado e surge onda U proeminente (maior, não menor).\n\nHipomagnesemia (D): o magnésio baixo mantém a perda renal de potássio; sem corrigir o magnésio, a hipocalemia é refratária. Corrigir o potássio não corrige o magnésio.",
    "tip": "Hipocalemia: T achatada e onda U. Veia periférica até ~10 mEq/h. Hipocalemia refratária: dose o magnésio.",
    "reference": "Kardalas E et al. Hypokalemia: a clinical update. Endocr Connect, 2018. Medicina de Emergência – Abordagem Prática (USP), 2023.",
    "tags": [
      "hipocalemia",
      "reposição de potássio",
      "diuréticos"
    ]
  },
  {
    "id": "famema2025-14",
    "topography": "2.2",
    "topic": "Insuficiência cardíaca",
    "module": "Clínica Médica",
    "text": "Paciente com quadro de descompensação da insuficiência cardíaca tem como causa desta a seguinte distribuição:",
    "options": [
      "10%, aproximadamente, por aparecimento de quadro infeccioso de qualquer natureza.",
      "20%, aproximadamente, por aumento na ingesta de água e sal.",
      "29%, aproximadamente, por má aderência ao tratamento.",
      "30%, aproximadamente, por desenvolvimento de arritmia cardíaca."
    ],
    "correctAnswer": 2,
    "explanation": "No registro brasileiro de insuficiência cardíaca descompensada (BREATHE), a principal causa de descompensação foi a má adesão ao tratamento medicamentoso, em cerca de 30% dos casos. Em seguida vieram infecções (cerca de 23%), excessos de sal e água e arritmias.\n\nO dado reforça o papel da educação do paciente e do seguimento próximo na prevenção de internações.",
    "commentary": "10% por infecção (A): as infecções responderam por cerca de um quinto a um quarto das descompensações, não 10%.\n\n20% por sal e água (B): a transgressão dietética aparece com frequência menor.\n\n30% por arritmia (D): arritmias, como a fibrilação atrial, ficam bem abaixo da má adesão.",
    "tip": "Causa nº 1 de descompensação de IC no Brasil: má adesão ao tratamento (~30%); depois, infecção.",
    "reference": "Albuquerque DC et al. I Registro Brasileiro de Insuficiência Cardíaca (BREATHE). Arq Bras Cardiol, 2015. Diretriz Brasileira de Insuficiência Cardíaca Crônica e Aguda (SBC), 2018.",
    "tags": [
      "insuficiência cardíaca descompensada",
      "adesão ao tratamento",
      "BREATHE"
    ]
  },
  {
    "id": "famema2025-15",
    "topography": "2.1",
    "topic": "Pneumonia comunitária",
    "module": "Clínica Médica",
    "text": "Considerando os quadros de pneumonia adquirida na comunidade, assinale a alternativa correta.",
    "options": [
      "Paciente de 85 anos, morador de casa de repouso, sinais evidentes da presença de sepse, deve receber ceftriaxone associado à vancomicina.",
      "Paciente de 65 anos, com PAS em 80 mmHg e FR em 35 ipm, tem mortalidade estimada em 10% aproximadamente.",
      "Paciente de 55 anos, com quadro de confusão mental e sem alergia prévia, deve ser tratado ambulatorialmente com doxiciclina.",
      "Paciente de 22 anos, sem comorbidade ou alergia prévia e alteração do exame físico, deve ser tratado ambulatorialmente com azitromicina."
    ],
    "correctAnswer": 3,
    "explanation": "Paciente de 22 anos, sem comorbidades e sem alterações de gravidade ao exame: CURB-65 = 0, baixo risco, tratamento ambulatorial. Para adultos hígidos sem uso recente de antibiótico, as diretrizes brasileiras aceitam monoterapia com amoxicilina ou com macrolídeo (azitromicina ou claritromicina).",
    "commentary": "Ceftriaxona + vancomicina em idoso de casa de repouso (A): ser morador de instituição não indica cobertura para MRSA por si só; vancomicina só com fatores de risco específicos (colonização ou infecção prévia por MRSA, internação recente com antibiótico EV). O esquema para PAC grave é betalactâmico + macrolídeo.\n\nMortalidade de 10% (B): 65 anos, PAS < 90 e FR ≥ 30 somam 3 pontos no CURB-65, com mortalidade em torno de 15–20% e indicação de internação, possivelmente em UTI.\n\nConfusão mental tratada em casa com doxiciclina (C): confusão é critério de gravidade (CURB-65 ≥ 1, com outros achados) e exige avaliação hospitalar.",
    "tip": "CURB-65: 0–1 casa; 2 internação; ≥ 3 PAC grave (considerar UTI). Jovem hígido: amoxicilina ou macrolídeo.",
    "reference": "Corrêa RA et al. Recomendações para o manejo da pneumonia adquirida na comunidade 2018 (SBPT). J Bras Pneumol, 2018. Metlay JP et al. ATS/IDSA CAP Guideline, 2019.",
    "tags": [
      "pneumonia adquirida na comunidade",
      "CURB-65",
      "antibioticoterapia"
    ]
  },
  {
    "id": "famema2025-16",
    "topography": "16",
    "topic": "Pré-operatório",
    "module": "Cirurgia",
    "text": "Considerando a passagem de acessos venosos centrais, assinale a alternativa correta com relação ao sítio da punção, seu respectivo reparo anatômico ou posicionamento para sua execução.",
    "options": [
      "Jugular e sua punção anterior deve ser realizada na base do triângulo de Sedillot.",
      "Axilar e acima do terço distal da clavícula.",
      "Femoral e paciente em decúbito dorsal, com o membro inferior ipsilateral com leve rotação interna.",
      "Subclávia e ponto de junção do terço médio e distal da clavícula."
    ],
    "correctAnswer": 3,
    "explanation": "Na punção da veia subclávia por via infraclavicular, a agulha entra logo abaixo da clavícula, na junção do terço médio com o terço medial/distal da clavícula (referência descrita pela banca como junção do terço médio e distal), e é direcionada para a fúrcula esternal, paralela ao plano da mesa. O paciente fica em Trendelenburg, que distende a veia e reduz o risco de embolia gasosa.",
    "commentary": "Jugular anterior no triângulo de Sedillot (A): o triângulo de Sedillot (entre as duas cabeças do esternocleidomastoideo e a clavícula) é a referência do acesso central da jugular interna; a via anterior entra pela borda medial do músculo, na altura da cartilagem tireoide.\n\nAxilar acima da clavícula (B): a veia axilar fica abaixo da clavícula, lateral à subclávia; a punção é infraclavicular, idealmente guiada por ultrassom.\n\nFemoral com rotação interna (C): o membro deve ficar em leve abdução e rotação externa, que expõe o trígono femoral. A punção é medial à artéria femoral, cerca de 1–2 cm abaixo do ligamento inguinal.",
    "tip": "Subclávia: abaixo da clavícula, mirando a fúrcula, em Trendelenburg. Femoral: perna em rotação externa, veia medial à artéria (NAVeL).",
    "reference": "Townsend CM. Sabiston Textbook of Surgery, 21ª ed. Capítulo de procedimentos à beira do leito. Roberts JR. Clinical Procedures in Emergency Medicine.",
    "tags": [
      "acesso venoso central",
      "veia subclávia",
      "procedimentos"
    ]
  },
  {
    "id": "famema2025-17",
    "topography": "16",
    "topic": "Pós-operatório",
    "module": "Cirurgia",
    "text": "Homem de 55 anos, obeso, com história de abuso de drogas e uso crônico de opioides para controle de dores osteomusculares, é internado pelo pronto-socorro com quadro de colecistite aguda e é submetido a colecistectomia por videolaparoscopia. No pós-operatório, paciente relata ter memórias de fatos que ocorreram no período intraoperatório, caracterizando um despertar intraoperatório.\n\nSobre esse evento, é correto afirmar que",
    "options": [
      "pode provocar sequelas psicológicas significativas e vários prejuízos prolongados para o paciente, e o relato do paciente deve ser levado em conta com seriedade.",
      "sua ocorrência, sob anestesia geral, tem incidência de 9% a 12% e raramente demanda aconselhamento ao paciente no pós-operatório.",
      "acontece quando um paciente se torna consciente durante o momento imediatamente anterior à indução da anestesia geral até o momento do despertar, incluindo retornos intencionais à consciência.",
      "pacientes com história de abuso de drogas e uso crônico de opioides para controle de dor, submetidos a cirurgias de alto risco, não devem ser advertidos, durante a avaliação pré-operatória, sobre seu potencial de acontecimento, pois isso leva a um aumento de sua incidência."
    ],
    "correctAnswer": 0,
    "explanation": "Despertar intraoperatório é a consciência com recordação explícita de eventos durante a anestesia geral. É raro (cerca de 1–2 a cada 1.000 anestesias gerais), mas pode deixar sequelas psicológicas importantes, como ansiedade, distúrbios do sono e transtorno de estresse pós-traumático.\n\nO relato do paciente deve ser levado a sério: ouvir, registrar, explicar o ocorrido e oferecer acompanhamento psicológico. Uso crônico de opioides e abuso de drogas aumentam o risco, por exigirem doses maiores de anestésico.",
    "commentary": "Incidência de 9% a 12% (B): a incidência é de cerca de 0,1–0,2%; e o evento exige aconselhamento e seguimento, não o contrário.\n\nDefinição (C): o despertar intraoperatório ocorre entre a indução e o fim da anestesia e não inclui retornos intencionais à consciência (como na cirurgia com o paciente acordado).\n\nNão advertir pacientes de risco (D): pacientes de alto risco devem ser informados na avaliação pré-anestésica; isso não aumenta a incidência e permite medidas preventivas (monitorização da profundidade anestésica).",
    "tip": "Despertar intraoperatório: raro (0,1–0,2%), mas pode causar estresse pós-traumático. Acolher o relato e oferecer apoio psicológico.",
    "reference": "American Society of Anesthesiologists. Practice Advisory for Intraoperative Awareness and Brain Function Monitoring. Anesthesiology, 2006. Miller's Anesthesia, 9ª ed.",
    "tags": [
      "despertar intraoperatório",
      "anestesia geral",
      "opioides"
    ]
  },
  {
    "id": "famema2025-18",
    "topography": "16",
    "topic": "Pré-operatório",
    "module": "Cirurgia",
    "text": "Homem, 62 anos, portador de insuficiência cardíaca congestiva (ICC) sintomática, pouco controlada e hipertensão arterial sistêmica (HAS), não medicada, procura ajuda médica por apresentar hérnia incisional sintomática. Diante da indicação de tratamento cirúrgico para correção desta hérnia, o médico cirurgião solicita ao anestesista uma avaliação do risco cirúrgico, segundo o consagrado sistema de classificação da American Society of Anesthesiologists (ASA).\n\nCom base nas informações do enunciado, esse paciente está estratificado como:",
    "options": [
      "ASA 2",
      "ASA 1",
      "ASA 4",
      "ASA 3"
    ],
    "correctAnswer": 2,
    "explanation": "Pela classificação ASA: ASA 3 = doença sistêmica grave com limitação funcional; ASA 4 = doença sistêmica grave que é ameaça constante à vida. Insuficiência cardíaca sintomática e mal controlada (descompensada ou com fração de ejeção muito reduzida), somada a hipertensão sem tratamento, entra nos exemplos de ASA 4.\n\nNa prática, esse paciente não deve ir para correção eletiva de hérnia antes de compensar a insuficiência cardíaca.",
    "commentary": "ASA 2 (A): doença sistêmica leve sem limitação, como hipertensão controlada.\n\nASA 1 (B): paciente saudável.\n\nASA 3 (D): doença grave porém compensada, como IC estável. Há quem classifique este paciente como ASA 3 por falta de detalhes de gravidade, mas a banca considerou que IC sintomática e mal controlada representa ameaça constante à vida.",
    "tip": "ASA 3: doença grave compensada. ASA 4: doença grave descompensada, ameaça à vida (IC descompensada, IAM < 3 meses, sepse).",
    "reference": "American Society of Anesthesiologists. ASA Physical Status Classification System (atualização 2020).",
    "tags": [
      "classificação ASA",
      "risco cirúrgico",
      "insuficiência cardíaca"
    ]
  },
  {
    "id": "famema2025-19",
    "topography": "16",
    "topic": "Hérnias",
    "module": "Cirurgia",
    "text": "Rapaz de 27 anos relata ter sentido uma dor súbita em região inguinal esquerda e aumento de volume local ao levantar peso na academia há 1 dia e, diferentemente de outras ocasiões, não conseguiu reduzir o abaulamento, mesmo ao se deitar. Ao procurar ajuda médica, o cirurgião constatou eritema da pele na região inguinal esquerda e indicou cirurgia.\n\nA respeito dos princípios do tratamento cirúrgico, é correto afirmar que",
    "options": [
      "a correção de uma hérnia inguinal se beneficia de uma reconstrução que mantenha os tecidos sob tensão, de forma que o reparo fique mais resistente.",
      "na hérnia inguinal direta, o assoalho inguinal costuma ser resistente, e um reparo primário usando os próprios tecidos do paciente corrige satisfatoriamente o defeito.",
      "na maioria das hérnias em adultos, quando é encontrada uma hérnia direta, não é mandatório explorar o cordão em busca de uma possível hérnia indireta.",
      "um reparo durável exige que qualquer fator agravante corrigível (tosse crônica, obstrução prostática, tumor colônico, ascite etc.) seja identificado e tratado e que o defeito seja reconstruído sem tensão."
    ],
    "correctAnswer": 3,
    "explanation": "O paciente tem hérnia inguinal encarcerada, com sinais de sofrimento (eritema), e precisa de cirurgia de urgência. A pergunta é sobre os princípios gerais do reparo: para que a correção seja duradoura, é preciso tratar os fatores que aumentam a pressão abdominal (tosse crônica, prostatismo, constipação por tumor, ascite) e reconstruir o defeito sem tensão, em geral com tela (técnica de Lichtenstein ou videolaparoscópica).",
    "commentary": "Reconstrução sob tensão (A): tensão causa isquemia, dor e recidiva; esse foi o motivo da adoção das técnicas livres de tensão com tela.\n\nAssoalho resistente na hérnia direta (B): a hérnia direta nasce justamente da fraqueza do assoalho (fascia transversalis no triângulo de Hesselbach); reparo primário com tecido do próprio paciente tem mais recidiva.\n\nNão explorar o cordão (C): diante de hérnia direta, é obrigatório procurar hérnia indireta associada (hérnia em pantalona), para não deixar uma hérnia sem correção.",
    "tip": "Hérnia inguinal: reparo sem tensão (tela) + tratar o que aumenta a pressão abdominal. Achou direta? Procure também a indireta.",
    "reference": "HerniaSurge Group. International guidelines for groin hernia management. Hernia, 2018.",
    "tags": [
      "hérnia inguinal",
      "hérnia encarcerada",
      "técnica de Lichtenstein"
    ]
  },
  {
    "id": "famema2025-20",
    "topography": "16",
    "topic": "Trauma torácico",
    "module": "Cirurgia",
    "text": "Um paciente idoso, acometido de pneumonia, evolui com piotórax parapneumônico e sepse. O empiema tem evolução maior que 4 semanas, sendo refratário à drenagem torácica prolongada. O tratamento mais recomendado nesta situação é:",
    "options": [
      "toracotomia com retirada de longo segmento de um arco costal (8-10 cm) e pneumectomia segmentar.",
      "drenagem aberta com remoção de segmentos curtos (3-6 cm) de uma, duas ou três costelas (procedimento de Eloesser).",
      "toracocentese com aspiração de líquido purulento e lavagem com enzimas fibrinolíticas.",
      "antibioticoterapia endovenosa prolongada, sensível a pseudomonas, em acesso venoso central."
    ],
    "correctAnswer": 1,
    "explanation": "Empiema em fase crônica (organizada, com mais de 4 semanas), refratário a drenagem prolongada, em paciente idoso e séptico: o pulmão não reexpande e o paciente tem risco alto para cirurgia maior. A opção é a drenagem aberta tipo Eloesser (janela torácica): ressecção de segmentos curtos de uma a três costelas na parte mais baixa da cavidade, com fixação da pele à pleura, criando uma janela que drena continuamente para o exterior.\n\nEm paciente com boas condições, a alternativa seria a decorticação por toracotomia ou videotoracoscopia.",
    "commentary": "Toracotomia com ressecção de longo segmento e segmentectomia (A): procedimento extenso, de alto risco em idoso séptico, e não trata o problema, que é a carapaça pleural; a ressecção pulmonar não está indicada.\n\nToracocentese com fibrinolítico (C): fibrinolíticos têm papel na fase fibrinopurulenta (inicial), não no empiema crônico organizado.\n\nAntibiótico EV prolongado (D): sem drenagem efetiva o antibiótico não esteriliza uma coleção encapsulada.",
    "tip": "Empiema: fase exsudativa = drenar; fibrinopurulenta = dreno ± fibrinolítico/VATS; organizada = decorticação ou, no paciente frágil, janela de Eloesser.",
    "reference": "Shen KR et al. The American Association for Thoracic Surgery consensus guidelines for the management of empyema. J Thorac Cardiovasc Surg, 2017.",
    "tags": [
      "empiema pleural",
      "janela de Eloesser",
      "derrame parapneumônico"
    ]
  },
  {
    "id": "famema2025-21",
    "topography": "3.1",
    "topic": "Constipação intestinal",
    "module": "Clínica Médica",
    "text": "Uma mulher de 60 anos com histórico de diabetes mellitus apresenta obstipação grave. Ao realizar manometria anorretal, foi identificado um padrão de dissinergia do assoalho pélvico. A melhor opção de tratamento a ser considerada é:",
    "options": [
      "início de metformina.",
      "biofeedback.",
      "cirurgia para ressecção intestinal.",
      "suplementação de fibras."
    ],
    "correctAnswer": 1,
    "explanation": "Constipação por dissinergia do assoalho pélvico (defecação dissinérgica) é um distúrbio funcional: ao fazer força para evacuar, o paciente contrai paradoxalmente, ou não relaxa, o esfíncter anal e o puborretal. A manometria anorretal confirma o diagnóstico.\n\nO tratamento de escolha é o biofeedback, um treinamento com fisioterapeuta que ensina a coordenar a prensa abdominal com o relaxamento do assoalho pélvico. É superior a laxantes e tem eficácia em torno de 70%.",
    "commentary": "Metformina (A): não tem papel; o diabetes pode alterar a motilidade, mas o problema identificado é funcional do assoalho.\n\nRessecção intestinal (C): colectomia é exceção para inércia colônica grave refratária e não trata dissinergia, que persistiria.\n\nFibras (D): aumentam o volume fecal, mas não corrigem a falta de coordenação; podem até piorar o esforço.",
    "tip": "Constipação + manometria com dissinergia do assoalho pélvico = biofeedback.",
    "reference": "Rao SSC et al. ACG Clinical Guideline: Management of Benign Anorectal Disorders. Am J Gastroenterol, 2021.",
    "tags": [
      "constipação",
      "dissinergia do assoalho pélvico",
      "biofeedback"
    ]
  },
  {
    "id": "famema2025-22",
    "topography": "1.4",
    "topic": "Sialolitíase",
    "module": "Cirurgia",
    "text": "Homem, 37 anos, apresenta-se com dor em região submandibular que piora com o ato de comer e irradia para o pescoço, acompanhada de edema local e boca seca há 1 dia. O método indicado para o diagnóstico do paciente e a etiologia dos sintomas são, respectivamente:",
    "options": [
      "sialografia; sialolitíase.",
      "ultrassonografia; sialodenite.",
      "tomografia computadorizada; sialolitíase."
    ],
    "correctAnswer": 2,
    "explanation": "Dor e aumento de volume submandibular que pioram ao comer (cólica salivar) indicam obstrução do ducto da glândula, cuja causa mais comum é o cálculo (sialolitíase). A submandibular é a mais acometida (80–90%) porque o ducto de Wharton sobe contra a gravidade e a saliva é mais espessa e rica em cálcio.\n\nPara a banca, a tomografia computadorizada sem contraste é o método de escolha para detectar cálculos, inclusive pequenos e múltiplos. Na prática, o ultrassom costuma ser o exame inicial, por ser acessível e sem radiação; a resposta reflete a maior sensibilidade da TC.",
    "commentary": "Sialografia (A): a etiologia está certa, mas é exame invasivo, com contraste injetado no ducto, contraindicado na fase aguda.\n\nUltrassonografia com sialadenite (B): sialadenite (inflamação da glândula) é consequência; a causa da dor desencadeada pela alimentação é o cálculo.",
    "tip": "Dor na glândula salivar ao comer = cálculo obstruindo o ducto (sialolitíase), quase sempre na submandibular.",
    "reference": "Kraaij S et al. Salivary stones: symptoms, aetiology, biochemical composition and treatment. Br Dent J, 2014. Tratado de Otorrinolaringologia da ABORL-CCF, 3ª ed.",
    "tags": [
      "sialolitíase",
      "glândula submandibular",
      "tomografia computadorizada"
    ]
  },
  {
    "id": "famema2025-23",
    "topography": "16",
    "topic": "Pós-operatório",
    "module": "Cirurgia",
    "text": "Homem, 49 anos, desnutrido, é operado de emergência por quadro de abdome agudo obstrutivo e, no inventário da cavidade, extensivas aderências são descritas. No sétimo dia de pós-operatório, paciente evolui com febre, dor e distensão do abdome e, em seguida, apresenta descarga de conteúdo entérico pela incisão abdominal.\n\nEsse quadro clínico aponta para o diagnóstico de fístula enterocutânea (FEC), sobre o qual é correto afirmar que",
    "options": [
      "pode se formar espontaneamente como resultado de doença neoplásica ou de doenças inflamatórias em cerca de 80% dos casos, e uma minoria advém de complicações de procedimentos cirúrgicos (deiscência de anastomose ou lesão intestinal durante dissecção) e outras causas",
      "a cirurgia é o tratamento mais indicado, devendo ocorrer o mais precocemente possível, para prevenir desequilíbrio hidroeletrolítico, sepse e desnutrição do paciente.",
      "quando o paciente não evolui satisfatoriamente após 2 semanas de tratamento não operatório, com frequência será necessária uma intervenção cirúrgica.",
      "as perdas hidroeletrolíticas, desnutrição e sepse, decorrentes do quadro, contribuem para a ocorrência de falência de múltiplos órgãos e morte, a não ser que seja instituído tratamento efetivo imediatamente."
    ],
    "correctAnswer": 3,
    "explanation": "Saída de conteúdo entérico pela ferida no 7º dia após cirurgia com muitas aderências, em paciente desnutrido: fístula enterocutânea pós-operatória. A grande ameaça é a tríade perda hidroeletrolítica, desnutrição e sepse, responsável pela mortalidade se o tratamento não for imediato.\n\nO manejo segue a sequência SNAP: controle da Sepse (drenar coleções, antibiótico), Nutrição (de preferência enteral; parenteral se fístula de alto débito), cuidado com a pele e o débito (Anatomia da fístula estudada por fistulografia/TC) e, se não fechar, Procedimento cirúrgico tardio.",
    "commentary": "80% espontâneas (A): é o inverso; cerca de 75–85% das fístulas enterocutâneas são pós-operatórias (deiscência, lesão inadvertida na dissecção) e a minoria é espontânea (Crohn, neoplasia, radiação).\n\nCirurgia o mais precoce possível (B): a reoperação precoce num abdome inflamado tem alta morbimortalidade; o tratamento inicial é conservador, e cerca de metade fecha espontaneamente.\n\nCirurgia após 2 semanas sem melhora (C): o fechamento espontâneo pode levar 4–6 semanas; a cirurgia definitiva costuma ser planejada após 6 semanas a 3 meses, com o paciente nutrido e sem sepse.",
    "tip": "Fístula enterocutânea: maioria pós-operatória. Tratamento inicial conservador (sepse, nutrição, pele); cirurgia definitiva só depois de meses.",
    "reference": "Townsend CM. Sabiston Textbook of Surgery, 21ª ed. – Fístulas intestinais. Schecter WP et al. Enteric fistulas: principles of management. J Am Coll Surg, 2009.",
    "tags": [
      "fístula enterocutânea",
      "pós-operatório",
      "nutrição"
    ]
  },
  {
    "id": "famema2025-24",
    "topography": "3.1",
    "topic": "Doença hemorroidária",
    "module": "Cirurgia",
    "text": "Mulher, 28 anos, obstipada crônica, sem comorbidades ou antecedentes familiares de doenças suspeitas, apresentou, subitamente, intensa dor na região anal, acompanhada de sangramento que tingiu a água do vaso sanitário, fazendo-a procurar serviço médico de urgência. Paciente encontrava-se estável hemodinamicamente. Foi realizado exame proctológico, que se evidenciou alterado à inspeção; o toque retal não foi realizado pelo alto grau de intensidade da dor referida pela paciente.\n\nCom base nas informações do enunciado, a causa mais provável do sangramento da paciente é:",
    "options": [
      "doença hemorroidária trombosada.",
      "neoplasia de cólon necrosada.",
      "angiodisplasia rota.",
      "diverticulose colônica."
    ],
    "correctAnswer": 0,
    "explanation": "Mulher jovem, constipada, com dor anal súbita e intensa, sangramento discreto e inspeção alterada, tão dolorosa que impede o toque retal: quadro de trombose hemorroidária externa (nódulo violáceo, tenso e doloroso na borda anal). O esforço evacuatório é o fator desencadeante.\n\nO tratamento é conservador (analgesia, banho de assento, fibras) ou, nas primeiras 72 horas, excisão do trombo sob anestesia local.",
    "commentary": "Neoplasia de cólon necrosada (B): improvável aos 28 anos, sem história familiar; não explica dor anal súbita com inspeção alterada.\n\nAngiodisplasia (C): causa sangramento indolor, típico de idosos.\n\nDiverticulose (D): sangramento volumoso e indolor em idosos; não causa dor anal nem alteração à inspeção.",
    "tip": "Dor anal intensa e súbita + nódulo violáceo à inspeção = hemorroida externa trombosada. Se dor ao evacuar com fissura visível = fissura anal.",
    "reference": "Davis BR et al. The American Society of Colon and Rectal Surgeons Clinical Practice Guidelines for the Management of Hemorrhoids. Dis Colon Rectum, 2018.",
    "tags": [
      "doença hemorroidária",
      "trombose hemorroidária",
      "dor anal"
    ]
  },
  {
    "id": "famema2025-25",
    "topography": "16",
    "topic": "Perfuração de víscera oca",
    "module": "Cirurgia",
    "text": "Homem de 50 anos dá entrada na emergência com dor abdominal súbita e intensa em andar superior do abdome há 40 minutos, acompanhada de sudorese. Nega febre, alterações do hábito intestinal, vômitos ou sangramentos. Tomografia abdominal demonstrada a seguir.\n\nO diagnóstico provável do paciente é:",
    "options": [
      "apendicite subaguda.",
      "pancreatite necrosante",
      "perfuração de úlcera péptica.",
      "isquemia intestinal."
    ],
    "correctAnswer": 2,
    "image": "/images/famema2025-25.webp",
    "explanation": "Dor abdominal súbita e intensa no andar superior, há menos de uma hora, com sudorese e sem febre: história típica de perfuração de úlcera péptica. A tomografia mostra ar livre na cavidade (pneumoperitônio), visível como faixa escura entre a parede abdominal anterior e o fígado.\n\nA perfuração gastroduodenal é a causa mais comum de pneumoperitônio não traumático. O tratamento é cirúrgico (rafia com patch de omento), com antibiótico, IBP e pesquisa/erradicação de H. pylori.",
    "commentary": "Apendicite subaguda (A): dor que começa periumbilical e migra para a fossa ilíaca direita em horas; não causa pneumoperitônio nem dor súbita em andar superior.\n\nPancreatite necrosante (B): dor epigástrica em faixa, com vômitos, e TC com pâncreas aumentado e áreas sem realce; não há ar livre.\n\nIsquemia intestinal (D): dor desproporcional ao exame em idoso com fibrilação atrial ou aterosclerose; ar livre só aparece tardiamente, após necrose e perfuração.",
    "tip": "Dor epigástrica súbita, 'em facada', + ar livre na cavidade = úlcera péptica perfurada até prova em contrário.",
    "reference": "Tarasconi A et al. Perforated and bleeding peptic ulcer: WSES guidelines. World J Emerg Surg, 2020.",
    "tags": [
      "úlcera péptica perfurada",
      "pneumoperitônio",
      "abdome agudo perfurativo"
    ]
  },
  {
    "id": "famema2025-26",
    "module": "Cirurgia",
    "text": "Homem de 62 anos, tabagista crônico, apresenta odinofagia, disfagia progressiva e perda de peso significativa nos últimos 4 meses. A endoscopia digestiva alta revela uma lesão irregular e ulcerada no terço médio do esôfago. O principal fator prognóstico para essa condição é:",
    "options": [
      "o tipo histológico do tumor.",
      "a profundidade de invasão da parede esofágica.",
      "a presença de disfagia ao diagnóstico.",
      "o tabagismo atual."
    ],
    "correctAnswer": 1,
    "explanation": "Tabagista com disfagia progressiva, odinofagia, perda de peso e lesão ulcerada no terço médio do esôfago: carcinoma epidermoide de esôfago.\n\nNo câncer de esôfago, o principal fator prognóstico é o estadiamento TNM, e o componente que mais pesa é a profundidade de invasão da parede (T), que se relaciona diretamente com o comprometimento linfonodal (N). Tumores restritos à mucosa raramente dão metástase linfonodal; os que atingem a submucosa ou além têm risco muito maior.",
    "commentary": "Tipo histológico (A): adenocarcinoma e carcinoma epidermoide têm comportamento e tratamento um pouco diferentes, mas o prognóstico é definido sobretudo pelo estádio.\n\nDisfagia ao diagnóstico (C): é sintoma de doença já avançada (lúmen reduzido em mais de 50–60%), porém não é o fator prognóstico principal.\n\nTabagismo atual (D): é fator de risco para a doença, não o principal determinante do prognóstico.",
    "tip": "Câncer de esôfago (e de TGI em geral): prognóstico = TNM, sobretudo profundidade de invasão (T) e linfonodos (N).",
    "reference": "NCCN Clinical Practice Guidelines in Oncology: Esophageal and Esophagogastric Junction Cancers, 2024. AJCC Cancer Staging Manual, 8ª ed.",
    "tags": [
      "câncer de esôfago",
      "carcinoma epidermoide",
      "estadiamento TNM"
    ]
  },
  {
    "id": "famema2025-27",
    "topography": "16",
    "topic": "Pós-operatório",
    "module": "Cirurgia",
    "text": "Homem de 41 anos foi submetido a gastrectomia parcial com reconstrução a Billroth II por doença ulcerosa péptica. No pós-operatório, logo após reintrodução alimentar por via oral, referiu dor abdominal em cólicas, tontura, sudorese e taquicardia após refeições.\n\nO manejo inicial mais indicado é:",
    "options": [
      "aumento de carboidratos nas refeições.",
      "reversão cirúrgica da gastrectomia.",
      "uso de inibidores de bomba de prótons.",
      "refeições fracionadas e pobres em carboidratos simples."
    ],
    "correctAnswer": 3,
    "explanation": "Após gastrectomia com Billroth II, sintomas logo depois das refeições (cólica, tontura, sudorese, taquicardia): síndrome de dumping precoce. Sem o piloro, o conteúdo hiperosmolar chega rápido ao intestino delgado, puxa líquido para a luz e libera peptídeos vasoativos, causando sintomas gastrointestinais e vasomotores em 15–30 minutos.\n\nO tratamento inicial é dietético: refeições pequenas e frequentes, pobres em açúcares simples e ricas em proteínas e fibras, evitar líquidos junto com as refeições e deitar após comer. Octreotida fica para casos refratários, e cirurgia para casos raros.",
    "commentary": "Aumentar carboidratos (A): os carboidratos simples são justamente os que desencadeiam o dumping, por serem hiperosmolares.\n\nReversão cirúrgica (B): reservada a casos graves e refratários ao tratamento clínico; não é conduta inicial.\n\nIBP (C): não atua no mecanismo do dumping.",
    "tip": "Dumping precoce (15–30 min, sintomas vasomotores e cólica) e tardio (1–3 h, hipoglicemia): tratamento inicial é dieta fracionada, pobre em açúcar simples, líquidos fora das refeições.",
    "reference": "Scarpellini E et al. International consensus on the diagnosis and management of dumping syndrome. Nat Rev Endocrinol, 2020.",
    "tags": [
      "síndrome de dumping",
      "gastrectomia",
      "billroth II"
    ]
  },
  {
    "id": "famema2025-28",
    "module": "Cirurgia",
    "text": "Uma mulher de 45 anos apresenta dor moderada e persistente no quadrante superior direito há algumas semanas, e o ultrassom abdominal diagnostica um hemangioma hepático periférico de 12,0 cm, com restante do fígado e vias biliares sem alterações.\n\nA abordagem mais indicada para a paciente deverá ser:",
    "options": [
      "ressecção hepática.",
      "embolização arterial.",
      "terapia com radiofrequência.",
      "transplante hepático."
    ],
    "correctAnswer": 0,
    "explanation": "O hemangioma é o tumor hepático benigno mais comum e, em geral, só se acompanha. A intervenção é indicada quando há sintomas atribuíveis à lesão, crescimento importante, complicações (sangramento, síndrome de Kasabach-Merritt) ou dúvida diagnóstica.\n\nA paciente tem hemangioma gigante (12 cm), periférico, com dor persistente no hipocôndrio direito: tem indicação de tratamento, e o padrão é a ressecção cirúrgica (enucleação ou hepatectomia), facilitada pela localização periférica.",
    "commentary": "Embolização arterial (B): pode reduzir a lesão ou controlar sangramento antes da cirurgia, mas o efeito é temporário; não é o tratamento definitivo.\n\nRadiofrequência (C): opção para lesões menores; em 12 cm é pouco eficaz e mais arriscada.\n\nTransplante hepático (D): reservado a casos excepcionais, com lesões irressecáveis que acometem todo o fígado.",
    "tip": "Hemangioma hepático: só acompanhar. Opera se sintomático, crescendo, complicado ou dúvida diagnóstica.",
    "reference": "Marrero JA et al. ACG Clinical Guideline: The Diagnosis and Management of Focal Liver Lesions. Am J Gastroenterol, 2014. EASL Clinical Practice Guidelines on the management of benign liver tumours. J Hepatol, 2016.",
    "tags": [
      "hemangioma hepático",
      "tumores hepáticos benignos",
      "ressecção hepática"
    ]
  },
  {
    "id": "famema2025-29",
    "topography": "16",
    "topic": "Feridas",
    "module": "Cirurgia",
    "text": "O fator mais prejudicial para a cicatrização de feridas em pacientes diabéticos é:",
    "options": [
      "aumento da angiogênese.",
      "hipóxia tecidual.",
      "hipertermia localizada.",
      "aumento da perfusão sanguínea."
    ],
    "correctAnswer": 1,
    "explanation": "No diabetes, a hiperglicemia crônica causa microangiopatia e macroangiopatia, que reduzem a oferta de oxigênio aos tecidos. A hipóxia tecidual prejudica todas as fases da cicatrização: compromete a função de neutrófilos e macrófagos, a síntese de colágeno pelos fibroblastos e a angiogênese, e favorece infecção.\n\nNeuropatia, glicação de proteínas e disfunção imune completam o quadro do pé diabético, mas a hipóxia é o fator mais prejudicial.",
    "commentary": "Aumento da angiogênese (A): no diabetes a angiogênese está reduzida; formar vasos novos favorece a cicatrização.\n\nHipertermia localizada (C): calor local é sinal de inflamação ou infecção, não o mecanismo principal da má cicatrização.\n\nAumento da perfusão (D): a perfusão está diminuída; mais fluxo melhora a cicatrização.",
    "tip": "Ferida no diabético cicatriza mal por hipóxia (doença vascular) + neuropatia + imunidade prejudicada.",
    "reference": "Townsend CM. Sabiston Textbook of Surgery, 21ª ed. – Cicatrização de feridas. International Working Group on the Diabetic Foot (IWGDF) Guidelines, 2023.",
    "tags": [
      "cicatrização",
      "diabetes mellitus",
      "hipóxia tecidual"
    ]
  },
  {
    "id": "famema2025-30",
    "topography": "16",
    "topic": "Nutrição cirúrgica",
    "module": "Cirurgia",
    "text": "O suporte nutricional é essencial para pacientes cirúrgicos graves por",
    "options": [
      "reduzir a necessidade de intervenções operatórias.",
      "prevenir infecções intraoperatórias.",
      "aumentar a probabilidade de desfechos clínicos positivos.",
      "reduzir a produção de hormônios do estresse."
    ],
    "correctAnswer": 2,
    "explanation": "O paciente cirúrgico grave entra em estado hipercatabólico, com perda rápida de massa magra. O suporte nutricional adequado (de preferência enteral e precoce) preserva massa muscular, melhora a cicatrização e a imunidade e se associa a menos complicações infecciosas, menos tempo de internação e menor mortalidade, ou seja, aumenta a chance de desfecho favorável.",
    "commentary": "Reduzir intervenções operatórias (A): a nutrição pode diminuir complicações, mas não é seu objetivo reduzir a necessidade de cirurgia.\n\nPrevenir infecções intraoperatórias (B): o benefício é sobre complicações infecciosas pós-operatórias, por melhor imunidade; não previne infecção no intraoperatório.\n\nReduzir hormônios do estresse (D): a resposta endócrino-metabólica ao trauma não é bloqueada pela nutrição; ela minimiza as consequências do catabolismo.",
    "tip": "Nutrição no paciente cirúrgico: enteral e precoce sempre que possível; melhora desfechos (menos infecção, menos internação).",
    "reference": "Weimann A et al. ESPEN practical guideline: Clinical nutrition in surgery. Clin Nutr, 2021. Projeto ACERTO.",
    "tags": [
      "terapia nutricional",
      "paciente cirúrgico",
      "catabolismo"
    ]
  },
  {
    "id": "famema2025-31",
    "topography": "12",
    "topic": "Delirium",
    "module": "Clínica Médica",
    "text": "Uma idosa de 80 anos sofre queda da própria altura em casa e dá entrada na emergência com fratura de Colles à direita. Durante a avaliação, nota-se também confusão mental e taquicardia. Está estável hemodinamicamente, sem outras queixas e sem outras lesões diagnosticadas no exame físico realizado no atendimento inicial.\n\nQual a principal preocupação a ser considerada nesta situação?",
    "options": [
      "Possibilidade de fratura vertebral.",
      "Controle da dor.",
      "Necessidade de cirurgia ortopédica.",
      "Desidratação e alteração do estado mental."
    ],
    "correctAnswer": 3,
    "explanation": "Idosa com fratura de Colles após queda da própria altura, com confusão mental e taquicardia: o mais importante é reconhecer que a queda pode ser consequência de um problema clínico, e não o contrário. Confusão aguda em idosa é delirium até prova em contrário, e taquicardia sugere desidratação, infecção, dor ou outra causa sistêmica.\n\nAntes de pensar na fratura, a prioridade é investigar e corrigir a desidratação e a causa da alteração do estado mental (infecção, distúrbio hidroeletrolítico, hipoglicemia, medicamentos, arritmia).",
    "commentary": "Fratura vertebral (A): deve ser considerada em idosa com osteoporose, mas a paciente não tem dor ou outros achados que a sugiram; o dado de alarme é a confusão.\n\nControle da dor (B): é importante, mas não é a principal preocupação diante de confusão e taquicardia.\n\nCirurgia ortopédica (C): fratura de Colles costuma ser tratada com redução e imobilização; a decisão cirúrgica não é prioritária.",
    "tip": "Idoso que cai com confusão mental: investigue a causa da queda (delirium, desidratação, infecção, arritmia, medicamentos), não só a fratura.",
    "reference": "Ministério da Saúde. Caderno de Atenção Básica nº 19 – Envelhecimento e Saúde da Pessoa Idosa. American Geriatrics Society. Clinical Practice Guideline for Postoperative Delirium in Older Adults, 2015.",
    "tags": [
      "delirium",
      "queda em idoso",
      "fratura de Colles"
    ]
  },
  {
    "id": "famema2025-32",
    "topography": "1.1",
    "topic": "TCE",
    "module": "Cirurgia",
    "text": "Assinale a alternativa que apresenta uma condição na qual é contraindicado o emprego do manitol em pacientes com traumatismo cranioencefálico.",
    "options": [
      "Hipotensão arterial sistêmica.",
      "Uso de anticoagulantes.",
      "Gravidez confirmada.",
      "Perda da consciência."
    ],
    "correctAnswer": 0,
    "explanation": "O manitol reduz a pressão intracraniana por efeito osmótico, puxando água do cérebro para o intravascular, mas também causa diurese osmótica intensa. No paciente hipotenso ou hipovolêmico, isso agrava a hipotensão e reduz a pressão de perfusão cerebral, piorando a lesão secundária.\n\nPor isso, a hipotensão arterial contraindica o manitol no TCE; nesse cenário prefere-se a salina hipertônica, que expande volume.",
    "commentary": "Anticoagulantes (B): não contraindicam o manitol; o paciente anticoagulado precisa de reversão da anticoagulação.\n\nGestação (C): não é contraindicação absoluta; no TCE grave o tratamento da hipertensão intracraniana prioriza a vida da mãe.\n\nPerda da consciência (D): é indicação para avaliar hipertensão intracraniana, não contraindicação.",
    "tip": "TCE com hipertensão intracraniana e hipotensão: troque manitol por salina hipertônica.",
    "reference": "Carney N et al. Guidelines for the Management of Severe Traumatic Brain Injury, 4th Edition (Brain Trauma Foundation). Neurosurgery, 2017. ATLS, 10ª ed.",
    "tags": [
      "traumatismo cranioencefálico",
      "manitol",
      "hipertensão intracraniana"
    ]
  },
  {
    "id": "famema2025-33",
    "topography": "10",
    "topic": "Dengue",
    "module": "Pediatria",
    "text": "Com relação à classificação dos quadros de dengue adotada pelo Ministério da Saúde em nosso país e ao manejo do paciente pediátrico com suspeita dessa arbovirose, de acordo com as atuais recomendações, assinale a afirmativa correta.",
    "options": [
      "A presença de 5 petéquias em uma área de 2,5 cm x 2,5 cm após insuflação por 5 minutos na média da pressão arterial em uma criança de 5 anos caracteriza uma prova do laço positiva e classifica a criança como grupo C, havendo necessidade de hidratação parenteral enquanto aguarda exames laboratoriais.",
      "Crianças com sangramentos espontâneos em pele, mesmo sem sinais de alarme, devem ser classificadas como grupo B, sendo a coleta do hemograma obrigatória para avaliar hemoconcentração.",
      "Crianças com dor abdominal intensa e vômitos, independentemente de apresentarem sangramentos, são consideradas no grupo C e necessitam de hidratação oral imediata, em um volume inicial de 130 mL/kg, e que somente se encerrará após constatação de que não está ocorrendo hemoconcentração no hemograma.",
      "A hidratação parenteral com solução isotônica, no volume de 10 mL/kg na primeira hora é a conduta nos quadros suspeitos de dengue com sinais de alarme e deve ser iniciada somente após os resultados do hematócrito e ultrassonografia abdominal, para não aumentar o risco ou a piora de derrames cavitários."
    ],
    "correctAnswer": 1,
    "explanation": "Pelo Ministério da Saúde, a criança com suspeita de dengue que tem sangramento espontâneo de pele (petéquias) ou prova do laço positiva, sem sinais de alarme ou choque, é grupo B. O grupo B exige hemograma obrigatório (para avaliar hematócrito e plaquetas) e hidratação oral supervisionada na unidade enquanto aguarda o resultado.",
    "commentary": "Prova do laço positiva como grupo C (A): na criança a prova do laço é positiva com ≥ 10 petéquias no quadrado de 2,5 cm (≥ 20 no adulto), após 3 minutos de insuflação (5 no adulto). E prova do laço positiva sem alarme é grupo B, não C.\n\nDor abdominal e vômitos com hidratação oral (C): dor abdominal intensa e vômitos persistentes são sinais de alarme (grupo C) e exigem hidratação venosa imediata, não oral; o volume de 130 mL/kg não se aplica.\n\nAguardar hematócrito e USG para hidratar (D): no grupo C a expansão com 10 mL/kg de cristaloide na primeira hora começa imediatamente, sem esperar exames.",
    "tip": "Dengue grupo B: petéquia/prova do laço + ou condição especial, sem alarme = hemograma obrigatório + hidratação oral. Grupo C: soro já, sem esperar exame.",
    "reference": "Ministério da Saúde. Dengue: diagnóstico e manejo clínico – adulto e criança. 6ª ed., 2024.",
    "tags": [
      "dengue",
      "pediatria",
      "prova do laço"
    ]
  },
  {
    "id": "famema2025-34",
    "topography": "2.2",
    "topic": "Síncope",
    "module": "Pediatria",
    "text": "Adolescente, sexo masculino, 13 anos de idade, é trazido por um acompanhante da escola após “desmaiar” durante uma competição com os colegas para ver quem permanecia em pé parado por mais tempo, sem se mexer, uma “brincadeira” transmitida em vídeo por uma rede social do adolescente. Um ajudante da coordenadoria da escola viu o garoto “desmaiando”, “perdendo a consciência” e “caindo no chão”. Imediatamente, os colegas o sacudiram e ele foi socorrido por esse funcionário, com retomada completa da consciência em cerca de “segundos”. Não se observou nenhum trauma na cabeça durante a queda. Levantou-se sozinho, disse que estava bem, mas foi trazido ao médico mesmo assim. Ficou pálido durante a queda segundo descrição de quem o viu. No pronto atendimento, estava bem, Glasgow 15, orientado e bem comunicativo. Nenhuma alteração foi percebida no seu exame físico.\n\nO diagnóstico mais provável e a conduta imediata serão:",
    "options": [
      "síncope psicogênica; orientação e encaminhamento para terapia psicológica",
      "síncope cardiogênica; realização de um ecocardiograma",
      "síncope neuromediada; alta do pronto atendimento com orientações preventivas.",
      "síncope metabólica; realização de um teste de tolerância oral à glicose"
    ],
    "correctAnswer": 2,
    "explanation": "Adolescente que perde a consciência após ficar muito tempo parado em pé, com palidez e recuperação completa em segundos, sem sintomas ou alterações depois: síncope neuromediada (vasovagal) por ortostase prolongada. O represamento venoso nas pernas reduz o retorno venoso, desencadeia reflexo vagal com bradicardia e vasodilatação e causa hipoperfusão cerebral transitória.\n\nCom história típica, exame físico normal e sem sinais de alarme, a conduta é alta com orientações: hidratação, evitar ficar muito tempo em pé, contrair as pernas e deitar ao sentir os pródromos. O ECG é recomendado em toda síncope para afastar causa cardíaca.",
    "commentary": "Psicogênica (A): a pseudossíncope psicogênica tem episódios longos, olhos fechados, sem palidez e frequentemente repetidos; aqui há gatilho fisiológico claro.\n\nCardiogênica com ecocardiograma (B): sinais de alarme seriam síncope no esforço, palpitações antes, história familiar de morte súbita ou alterações no exame/ECG; nada disso está presente.\n\nMetabólica com teste de tolerância à glicose (D): hipoglicemia não causa perda de consciência de segundos com recuperação espontânea completa.",
    "tip": "Síncope após ficar muito tempo em pé, com palidez e recuperação rápida = vasovagal. Alarme: síncope no esforço, palpitação, morte súbita familiar, ECG alterado.",
    "reference": "Brignole M et al. 2018 ESC Guidelines for the diagnosis and management of syncope. Eur Heart J, 2018. Sociedade Brasileira de Pediatria. Síncope na infância e adolescência.",
    "tags": [
      "síncope vasovagal",
      "adolescente",
      "síncope"
    ]
  },
  {
    "id": "famema2025-35",
    "topography": "11",
    "topic": "Prematuridade",
    "module": "Pediatria",
    "text": "Em um plantão na maternidade, nasce uma criança com 33 semanas de um parto emergencial realizado devido a complicações maternas. O recém-nascido apresenta-se sem respirar e frequência cardíaca de 80 bpm ao nascimento. Após a recepção, estímulo tátil e realização das manobras iniciais, não há melhora significativa na frequência cardíaca ou início da respiração espontânea.\n\nCom base nas diretrizes de reanimação neonatal mais atuais, qual é a sequência correta de ações que devem ser tomadas para a reanimação desse neonato prematuro?",
    "options": [
      "Iniciar ventilação com pressão positiva (VPP) utilizando ar ambiente, avaliar a frequência cardíaca após 30 segundos e, se permanecer abaixo de 100 bpm, iniciar compressões torácicas",
      "Administrar oxigênio a 100% imediatamente através de máscara e balão, iniciar compressões torácicas simultaneamente com ventilação com pressão positiva (VPP) na proporção de 3:1 e reavaliar após 60 segundos.",
      "Deve-se iniciar ventilação com pressão positiva (VPP) utilizando uma mistura de ar e oxigênio (iniciando com FiO2 de 30%), ajustar a FiO2 com base na oximetria de pulso (que deve ser instalada imediatamente) e, se a frequência cardíaca permanecer abaixo de 60 bpm, após intubação, iniciar compressões torácicas.",
      "Realizar intubação traqueal imediata para garantir uma via aérea segura, iniciar ventilação com pressão positiva (VPP) com oxigênio a 100% e, se não houver resposta, considerar a administração de adrenalina intravenosa"
    ],
    "correctAnswer": 2,
    "explanation": "Recém-nascido de 33 semanas que não respira e mantém FC < 100 bpm após os passos iniciais: indicação de ventilação com pressão positiva (VPP) no primeiro minuto de vida.\n\nPelo Programa de Reanimação Neonatal da SBP, no prematuro < 34 semanas a VPP começa com FiO₂ de 30%, ajustada pela oximetria de pulso (sensor no pulso direito, colocado logo no início) conforme a saturação-alvo para cada minuto de vida. A massagem cardíaca só é indicada se a FC continuar < 60 bpm após 30 segundos de VPP com técnica adequada, de preferência já com cânula traqueal, e com O₂ a 100%.",
    "commentary": "VPP em ar ambiente e massagem se FC < 100 (A): no < 34 semanas inicia-se com FiO₂ 30%, e o corte para massagem é FC < 60 bpm, não < 100.\n\nO₂ 100% e massagem simultânea com VPP (B): a massagem só começa se a FC seguir < 60 bpm após VPP efetiva; iniciar com O₂ 100% causa hiperóxia em prematuros.\n\nIntubação imediata (D): a VPP inicial é com máscara; intubação fica para falha da VPP com máscara ou necessidade de massagem.",
    "tip": "Reanimação neonatal: VPP se apneia/gasping ou FC < 100. FiO₂ inicial: ar ambiente se ≥ 34 sem; 30% se < 34 sem. Massagem se FC < 60 após VPP efetiva.",
    "reference": "Sociedade Brasileira de Pediatria. Programa de Reanimação Neonatal – Reanimação do prematuro < 34 semanas em sala de parto. Diretrizes 2022.",
    "tags": [
      "reanimação neonatal",
      "prematuridade",
      "ventilação com pressão positiva"
    ]
  },
  {
    "id": "famema2025-36",
    "topography": "14",
    "topic": "Queimaduras",
    "module": "Pediatria",
    "text": "Um lactente de 2 anos de idade com peso de 12 kg sofreu queimaduras de segundo grau cobrindo 15% de sua superfície corporal total após um acidente com líquidos escaldantes. O paciente foi rapidamente levado ao pronto-socorro (tempo de chegada = 1 hora após o evento). Não apresentava sinais de choque na avaliação inicial, mas estava choroso e com dor evidente. O médico decidiu iniciar a reposição volêmica conforme as diretrizes de manejo de queimaduras. Com base nas informações fornecidas e nas diretrizes para reposição volêmica em pacientes pediátricos queimados sugeridas pela Sociedade Brasileira de Pediatria, qual é a quantidade apropriada de fluido (ringer lactato) que esse paciente deve receber nas primeiras 24 horas após a queimadura e como deve ser distribuída essa reposição?",
    "options": [
      "270 mL nas primeiras 8 horas e 270 mL nas 16 horas subsequentes.",
      "220 mL nas primeiras 12 horas e 220 mL nas 16 horas subsequentes.",
      "360 mL nas primeiras 12 horas e 360 mL nas 12 horas subsequentes.",
      "540 mL nas primeiras 8 horas e 540 mL nas 16 horas subsequentes."
    ],
    "correctAnswer": 0,
    "explanation": "Criança de 12 kg com 15% de superfície queimada (segundo grau) precisa de reposição volêmica. Usando a fórmula de 3 mL × peso (kg) × % SCQ, recomendada pelo ATLS para crianças: 3 × 12 × 15 = 540 mL de Ringer lactato em 24 horas.\n\nMetade do volume é dada nas primeiras 8 horas contadas a partir do momento da queimadura (270 mL) e a outra metade nas 16 horas seguintes (270 mL). Em criança com menos de 30 kg soma-se soro de manutenção com glicose, e o volume é ajustado pela diurese (meta de 1 mL/kg/h).",
    "commentary": "220 mL em 12 h + 220 mL em 16 h (B): o total e a divisão do tempo estão errados (12 + 16 = 28 horas).\n\n360 + 360 mL em 12 h e 12 h (C): o volume não corresponde à fórmula e a distribuição é em 8 e 16 horas.\n\n540 + 540 mL (D): seria o total de 1.080 mL, o dobro do calculado (correspondente a 6 mL/kg/%).",
    "tip": "Queimado: 2–4 mL × kg × %SCQ (criança: 3 mL), metade nas primeiras 8 h desde a queimadura, metade nas 16 h seguintes. Ajustar pela diurese.",
    "reference": "American College of Surgeons. ATLS – Advanced Trauma Life Support, 10ª ed. Sociedade Brasileira de Pediatria. Tratado de Pediatria, 5ª ed. – Queimaduras.",
    "tags": [
      "queimaduras",
      "fórmula de Parkland",
      "reposição volêmica"
    ]
  },
  {
    "id": "famema2025-37",
    "topography": "11",
    "topic": "Maus-tratos infantis",
    "module": "Pediatria",
    "text": "Pré-escolar de 3 anos e meio é atendido em uma Unidade Básica de Saúde, trazida pela avó, bastante preocupada com a maneira de seu genro cuidar e educar seu neto. Avó refere que criança é agitada e bagunceira e que, não raramente, o pai a castiga com utilização de alguns tapas e \"chacoalhões\". Refere que já identificou marcas desses castigos nas nádegas da criança. Avó refere que sua filha, a mãe da criança, também concorda com um estilo de educação mais coercitivo para a criança. Os pais são bons provedores e carinhosos na maior parte do tempo. No exame físico apenas se identifica um hematoma linear em coxa esquerda, relacionado a uma queda recente de patinete.\n\nSobre essa situação, assinale a alternativa correta.",
    "options": [
      "Uma avaliação mais detalhada da história é necessária antes de qualquer conduta, particularmente a escuta dos pais sobre esses fatos, pois, na legislação brasileira de proteção à infância, há clara distinção entre maus tratos, que devem repudiados e os castigos físicos disciplinatórios necessários para a educação infantil.",
      "O médico poderia solicitar a avaliação de um médico legista, que tem mais experiência nessas situações, para, em função desse laudo pericial, tomar uma atitude mais adequada diante do caso.",
      "Casos como esse devem ser cuidadosamente avaliados pelo pediatra dada a possibilidade de alienação parental, onde uma avó pode estar tentando incriminar falsamente seu genro para afastamento do convívio; a avaliação psicológica é prudente e necessária.",
      "O caso deve ser comunicado ao Conselho Tutelar da região onde essa criança mora e à Secretaria Municipal de Saúde, através de ficha específica (notificação de agravos relacionados à violência)."
    ],
    "correctAnswer": 3,
    "explanation": "Tapas e 'chacoalhões' que deixam marcas são violência física contra a criança. A Lei 13.010/2014 (Lei Menino Bernardo) alterou o ECA e garante à criança o direito de ser educada sem castigo físico ou tratamento cruel e degradante; não há castigo físico 'aceitável'.\n\nDiante de suspeita ou confirmação de violência, o médico tem obrigação de comunicar o Conselho Tutelar (ECA, art. 13 e 245) e notificar o caso no SINAN, pela ficha de notificação de violência interpessoal/autoprovocada, encaminhada à vigilância da Secretaria Municipal de Saúde. A notificação não depende de prova; a suspeita basta.",
    "commentary": "Diferença entre maus-tratos e castigo físico disciplinador (A): a legislação brasileira proíbe castigo físico; não existe essa distinção.\n\nLaudo de médico legista para decidir (B): a comunicação é obrigação do médico que atende e não depende de perícia.\n\nAlienação parental (C): a avó relata marcas que ela mesma viu e os pais confirmam o estilo coercitivo; a hipótese não dispensa a notificação.",
    "tip": "Suspeita de violência contra criança: comunicar o Conselho Tutelar + ficha de notificação no SINAN. Não precisa de prova.",
    "reference": "Brasil. Estatuto da Criança e do Adolescente (Lei 8.069/1990), alterado pela Lei 13.010/2014. Ministério da Saúde. Linha de cuidado para a atenção integral à saúde de crianças, adolescentes e suas famílias em situação de violências, 2010.",
    "tags": [
      "maus-tratos infantis",
      "notificação compulsória",
      "conselho Tutelar"
    ]
  },
  {
    "id": "famema2025-38",
    "topography": "11",
    "topic": "Aleitamento materno",
    "module": "Pediatria",
    "text": "Recém-nascido, sexo masculino, com 18 dias de vida, estava mamando o leite de sua mãe cerca de 7 vezes por dia. Nas últimas 36 horas, mãe refere aumento na frequência de mamadas, com alguns episódios de regurgitação e que sente que seu bebê “está chorando, solicitando mais para mamar”. A mãe está muito cansada com essa nova rotina e preocupada com a possibilidade de haver algum problema com seu leite (“leite fraco”) e que seu filho ainda não está “mamando nos horários adequados”. O bebê teve adequada evolução ponderal desde a alta.\n\nQual a conduta mais adequada neste momento?",
    "options": [
      "Orientar que as mamadas tenham duração de cerca de 15 a 20 minutos e sejam restritas a cada 3 horas para esvaziamento adequado da mama com a fração gordurosa do leite materno (leite posterior).",
      "Assegurar para a mãe que o leite materno é suficiente para esse período e deve ser mantido, e prescrever bromoprida para controlar os episódios de refluxo.",
      "Prescrever fórmula antirrefluxo complementar, temporariamente, no período noturno (mamada da madrugada) para a mãe poder descansar e recuperar-se para o restabelecimento do aleitamento materno exclusivo.",
      "Esclarecer que a duração desse quadro de transição pode ser de alguns dias e que o aleitamento em livre demanda deve ser mantido, pois, naturalmente, uma rotina será estabelecida"
    ],
    "correctAnswer": 3,
    "explanation": "Bebê de 18 dias, com bom ganho de peso, que de repente passa a pedir mamar com mais frequência: é o pico de crescimento (estirão) esperado por volta da 2ª–3ª semana. O aumento da sucção estimula a produção de leite, que se ajusta à nova demanda em poucos dias.\n\nRegurgitações sem prejuízo ponderal são fisiológicas. A conduta é tranquilizar a mãe, desfazer o mito do 'leite fraco', manter livre demanda e oferecer apoio para o cansaço.",
    "commentary": "Mamadas a cada 3 horas, 15–20 minutos (A): o aleitamento deve ser em livre demanda; horários rígidos reduzem a produção e o bebê deve esvaziar uma mama antes de passar à outra, sem limite fixo de tempo.\n\nBromoprida para refluxo (B): regurgitação em bebê que ganha peso é refluxo fisiológico; procinéticos não estão indicados e têm efeitos adversos.\n\nFórmula complementar (C): sem indicação; a fórmula reduz a sucção e a produção de leite e ameaça o aleitamento exclusivo.",
    "tip": "Bebê com bom ganho de peso querendo mamar mais = estirão (2–3 semanas, 6 semanas, 3 meses). Mantém livre demanda; não existe leite fraco.",
    "reference": "Ministério da Saúde. Caderno de Atenção Básica nº 23 – Saúde da Criança: Aleitamento Materno e Alimentação Complementar, 2015.",
    "tags": [
      "aleitamento materno",
      "livre demanda",
      "regurgitação"
    ]
  },
  {
    "id": "famema2025-39",
    "topography": "11",
    "topic": "Diarreia aguda",
    "module": "Pediatria",
    "text": "Qual das afirmativas a seguir é correta sobre a identificação e o manejo da diarreia aguda e desidratação em crianças, de acordo com as atuais recomendações do Ministério da Saúde?",
    "options": [
      "O tratamento com zinco, com dose de 20 mg por dia, deve ser prescrito para um bebê de 8 meses com diarreia aguda aquosa de 3 dias de duração e que se apresenta hidratado durante uma consulta no pronto atendimento.",
      "O uso de qualquer antiemético é proscrito no manejo de uma criança menor de cinco anos com vômitos durante o quadro de diarreia aguda por interferir no estado de consciência da criança e na aceitação da hidratação oral.",
      "A hidratação parenteral de um lactente de 6 meses com desidratação grave deve ser realizada com Ringer lactato, na dose de 100 mL/kg em um período de 3 horas, sendo que 30% desse valor deve ser administrado rapidamente em 30 minutos.",
      "Um pré-escolar, com 3 anos de idade, se apresentar sangue nas fezes e quadro de febre alta persistente associado a diarreia de dois dias de duração, estando hidratado na avaliação no pronto atendimento, pode receber prescrição de ciprofloxacina por 3 dias."
    ],
    "correctAnswer": 0,
    "explanation": "O Ministério da Saúde recomenda zinco para toda criança com diarreia aguda, por 10 a 14 dias: 10 mg/dia para menores de 6 meses e 20 mg/dia a partir de 6 meses. O zinco reduz duração e gravidade do episódio e a recorrência nos meses seguintes. O lactente de 8 meses deve receber 20 mg/dia, independentemente de estar hidratado.",
    "commentary": "Antiemético proscrito (B): a ondansetrona pode ser usada em crianças com vômitos que impedem a hidratação oral; o que se evita são metoclopramida e prometazina, pelos efeitos extrapiramidais e sedação.\n\nPlano C em 3 horas para lactente de 6 meses (C): em menores de 1 ano, o esquema clássico é 30 mL/kg em 1 hora e 70 mL/kg em 5 horas (6 horas); o esquema de 30 mL/kg em 30 minutos + 70 mL/kg em 2h30 é para maiores de 1 ano.\n\nCiprofloxacino na disenteria (D): o manual do Ministério da Saúde indica ciprofloxacino por 3 dias para criança com sangue nas fezes (disenteria) e comprometimento do estado geral. A banca considerou só a A, mas a D é defensável pelo próprio manual, por isso também é aceita aqui.",
    "alert": "Gabarito discutível: a banca deu só a alternativa A, mas o ciprofloxacino por 3 dias na disenteria (D) também segue o manual do Ministério da Saúde. Aqui as duas contam como certas.",
    "alsoAccepted": [
      3
    ],
    "tip": "Diarreia aguda na criança: zinco 10–14 dias (10 mg < 6 meses; 20 mg ≥ 6 meses). Disenteria: ciprofloxacino 15 mg/kg 12/12 h por 3 dias.",
    "reference": "Ministério da Saúde. Manejo do paciente com diarreia (cartaz), 2023. Sociedade Brasileira de Pediatria. Diarreia aguda: diagnóstico e tratamento, 2017.",
    "tags": [
      "diarreia aguda",
      "zinco",
      "desidratação"
    ]
  },
  {
    "id": "famema2025-40",
    "topography": "8",
    "topic": "Insuficiência adrenal",
    "module": "Pediatria",
    "text": "Lactente, sexo masculino, com 2 meses de idade é levado ao pronto-socorro com letargia e vômitos. Os pais relatam que o bebê tem se alimentado mal nos últimos dias (leite materno) e notaram uma diminuição na quantidade de fraldas molhadas. No exame físico, o paciente está letárgico, com mucosas secas, turgor comprometido, perfusão periférica lentificada e pulsos fracos. A pressão arterial sistólica é de 68 mmHg. Os exames laboratoriais mostram hiponatremia, hipercalemia e acidose metabólica. A história familiar revela um irmão falecido com 3 meses de idade por desidratação.\n\nQual é o diagnóstico mais provável e o tratamento inicial apropriado para esse caso?",
    "options": [
      "Insuficiência renal aguda; administração de fluidos intravenosos e diuréticos.",
      "Hiperplasia adrenal congênita; administração de fluidos intravenosos e hidrocortisona.",
      "Estenose hipertrófica de piloro; correção cirúrgica urgente.",
      "Sepse neonatal tardia; antibióticos de amplo espectro e suporte hemodinâmico."
    ],
    "correctAnswer": 1,
    "explanation": "Lactente de 2 meses com vômitos, desidratação grave e choque, hiponatremia, hipercalemia e acidose metabólica, e irmão que morreu desidratado aos 3 meses: crise perdedora de sal da hiperplasia adrenal congênita (deficiência de 21-hidroxilase, herança autossômica recessiva). Falta cortisol e aldosterona; a perda de sódio e a retenção de potássio pelo rim levam ao choque, em geral entre a 1ª e a 4ª semana de vida.\n\nO tratamento é expandir com soro fisiológico, corrigir hipoglicemia e dar hidrocortisona em dose de estresse, que também tem efeito mineralocorticoide. Meninos não têm genitália ambígua, por isso o diagnóstico pode passar despercebido se o teste do pezinho (17-OH-progesterona) não for feito.",
    "commentary": "Insuficiência renal aguda (A): a LRA pré-renal pode acontecer, mas não explica o padrão hormonal nem a história familiar; e diurético piora a hipovolemia.\n\nEstenose hipertrófica de piloro (C): vômitos em jato, mas causa alcalose metabólica hipoclorêmica e hipocalêmica, o oposto deste quadro; a cirurgia só vem após correção hidroeletrolítica.\n\nSepse tardia (D): sempre lembrar, mas hiponatremia com hipercalemia e irmão morto pelo mesmo quadro apontam para doença hereditária.",
    "tip": "Lactente com vômitos, choque, Na baixo, K alto e acidose = HAC perdedora de sal. Soro + hidrocortisona.",
    "reference": "Speiser PW et al. Congenital Adrenal Hyperplasia Due to Steroid 21-Hydroxylase Deficiency: Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab, 2018.",
    "tags": [
      "hiperplasia adrenal congênita",
      "crise perdedora de sal",
      "hidrocortisona"
    ]
  },
  {
    "id": "famema2025-41",
    "topography": "1.3",
    "topic": "Amigdalite/faringoamigdalite",
    "module": "Pediatria",
    "text": "Escolar, sexo masculino, com 6 anos de idade é trazido ao médico com febre alta, dor de garganta intensa e dificuldade para engolir há dois dias. Os pais relatam que ele também se queixa de dor abdominal. Não há tosse ou coriza. No exame físico, observam-se hiperemia e exsudato purulento bilateralmente em amígdalas, linfadenopatia cervical anterior dolorosa.\n\nSobre o diagnóstico mais provável, assinale a alternativa correta.",
    "options": [
      "Diante dos sintomas e sinais dessa doença que a criança manifesta, o diagnóstico clínico apresenta alta sensibilidade e especificidade e não há necessidade de qualquer exame confirmatório.",
      "O tratamento dessa doença pode ser realizado com antibioticoterapia com amoxicilina em dose única diária.",
      "O quadro clínico é compatível com uma doença viral que não está associada a complicações.",
      "Nessa doença é comum hemograma apresentando neutrofilia com células atípicas e o achado clínico de hepatomegalia."
    ],
    "correctAnswer": 1,
    "explanation": "Criança de 6 anos com febre alta, dor de garganta intensa, exsudato amigdaliano, adenomegalia cervical anterior dolorosa, dor abdominal e sem tosse ou coriza: faringoamigdalite estreptocócica (Streptococcus pyogenes) é a principal hipótese (escore de Centor/McIsaac alto).\n\nO tratamento de escolha é penicilina benzatina IM em dose única ou amoxicilina por 10 dias. A amoxicilina pode ser dada em dose única diária (50 mg/kg/dia, máximo 1 g), esquema validado e que melhora a adesão.",
    "commentary": "Diagnóstico clínico de alta sensibilidade e especificidade (A): o quadro clínico sozinho tem acurácia limitada; o ideal é confirmar com teste rápido ou cultura, quando disponível.\n\nDoença viral sem complicações (C): sem tosse e coriza, com exsudato e adenomegalia dolorosa, a etiologia bacteriana é a mais provável; a estreptococcia pode complicar com abscesso periamigdaliano, febre reumática e glomerulonefrite.\n\nLinfocitose atípica e hepatomegalia (D): são achados da mononucleose infecciosa (linfocitose com atípicos, não neutrofilia).",
    "tip": "Faringite com exsudato, febre, linfonodo cervical anterior doloroso e sem tosse = estreptococo. Amoxicilina 10 dias (pode ser 1×/dia) ou penicilina benzatina.",
    "reference": "Shulman ST et al. Clinical Practice Guideline for the Diagnosis and Management of Group A Streptococcal Pharyngitis: IDSA, 2012. Sociedade Brasileira de Pediatria. Faringoamigdalites, 2021.",
    "tags": [
      "faringoamigdalite estreptocócica",
      "amoxicilina",
      "streptococcus pyogenes"
    ]
  },
  {
    "id": "famema2025-42",
    "module": "Pediatria",
    "text": "Sobre o diagnóstico diferencial das principais doenças exantemáticas em Pediatria, assinale a alternativa correta.",
    "options": [
      "Entre os critérios diagnósticos da doença de Kawasaki encontram-se a conjuntivite exsudativa, o exantema papular ou vesicular e alterações em boca e língua.",
      "O pródromo de tosse, coriza e conjuntivite precede comumente o exantema morbiliforme do sarampo, e um enantema típico pode ser encontrado na mucosa jugal da criança.",
      "O exantema súbito é doença comum na faixa etária do escolar e inicia-se na maior parte das vezes com rash avermelhado em região de bochechas bilateralmente, com aspecto característico de face esbofeteada.",
      "Na escarlatina, doença exantemática comum em bebês menores de um ano, comumente a erupção cutânea poupa a região da face e, por ser doença causada por toxinas, não há necessidade de antibioticoterapia."
    ],
    "correctAnswer": 1,
    "explanation": "No sarampo há um pródromo de 3 a 5 dias com febre alta, tosse, coriza e conjuntivite (os 'três Cs'). Ao fim do pródromo surgem as manchas de Koplik, pontos esbranquiçados com halo avermelhado na mucosa jugal, consideradas o enantema patognomônico. Em seguida aparece o exantema maculopapular morbiliforme, que começa atrás das orelhas e na face e desce em sentido craniocaudal.",
    "commentary": "Kawasaki (A): os critérios incluem conjuntivite não exsudativa (sem secreção) e exantema polimorfo, em geral não vesicular.\n\nExantema súbito (C): acomete lactentes de 6 meses a 2 anos; febre alta por 3 dias e exantema após a queda da febre. A 'face esbofeteada' é do eritema infeccioso (parvovírus B19).\n\nEscarlatina (D): mais comum em escolares, raríssima em menores de 1 ano. A face fica avermelhada com palidez perioral (sinal de Filatov); por ser infecção estreptocócica, exige antibiótico.",
    "tip": "Sarampo: 3 Cs (tosse, coriza, conjuntivite) + Koplik → exantema craniocaudal. Face esbofeteada = parvovírus B19. Exantema após a febre = exantema súbito.",
    "reference": "Sociedade Brasileira de Pediatria. Tratado de Pediatria, 5ª ed. – Doenças exantemáticas. Ministério da Saúde. Guia de Vigilância em Saúde, 2023 – Sarampo.",
    "tags": [
      "doenças exantemáticas",
      "sarampo",
      "manchas de Koplik"
    ]
  },
  {
    "id": "famema2025-43",
    "topography": "11",
    "topic": "Pneumonia infantil",
    "module": "Pediatria",
    "text": "Pré-escolar, sexo masculino, com 3 anos de idade é levado ao atendimento pediátrico com histórico de febre e tosse intensa há três dias. Os pais relatam que ele está comendo e bebendo normalmente, mas parece mais prostrado e abatido do que o usual. No exame físico, a criança está alerta e ativa, com frequência respiratória de 42 irpm, frequência cardíaca de 100 bpm, temperatura de 37,1 graus (medicada há 2 horas). O murmúrio vesicular é auscultado bilateralmente, mais diminuído à direita, com alguns estertores finos, sem sibilos e não se identificam retrações intercostais ou cianose. A oximetria de pulso mostra saturação de oxigênio de 95% em ar ambiente. Não há possibilidade de realização de radiografia de tórax na Unidade de Saúde. Há um hospital relativamente próximo.\n\nSobre o diagnóstico e a conduta mais adequada, recomendados pelo Ministério da Saúde e de acordo com o Programa de Atenção Integrada às Doenças Prevalentes em Pediatria e manejo das infecções respiratórias, é correto afirmar que",
    "options": [
      "o paciente deve ser encaminhado para o hospital mais próximo para realização de exames laboratoriais.",
      "o paciente deve ser diagnosticado com uma infecção de via aérea de causa possivelmente viral, tratado com sintomáticos e reavaliado em 48 horas na mesma Unidade de Saúde.",
      "o paciente deve ser diagnosticado com uma pneumonia, tratado com antibioticoterapia por via oral e deve ser reavaliado em até 48 horas, particularmente se houver piora do quadro.",
      "o paciente deve receber uma dose de broncodilatador inalatório e uma dose de antitérmico para, então, seu quadro ser reavaliado; persistindo com os mesmos achados clínicos, deve ser tratado com antibiótico por via intramuscular até uma reavaliação em 24 horas."
    ],
    "correctAnswer": 2,
    "explanation": "Criança de 3 anos com febre e tosse há 3 dias, FR de 42 irpm (taquipneia para a idade: ≥ 40 irpm de 1 a 5 anos), murmúrio diminuído e estertores finos à direita: pela AIDPI, é pneumonia. Sem sinais de perigo (tiragem subcostal, saturação baixa, incapacidade de beber, letargia, convulsão), o tratamento é ambulatorial com amoxicilina oral e retorno em até 48 horas, ou antes se piorar.\n\nO diagnóstico de pneumonia na atenção primária é clínico; a radiografia não é obrigatória.",
    "commentary": "Encaminhar ao hospital para exames (A): sem sinais de gravidade, a criança pode ser tratada na unidade; exames não são necessários para iniciar o tratamento.\n\nInfecção viral com sintomáticos (B): taquipneia com ausculta focal e febre definem pneumonia pela AIDPI, com indicação de antibiótico.\n\nBroncodilatador e antibiótico IM (D): não há sibilância para justificar broncodilatador; antibiótico IM seria para quadros graves, com encaminhamento.",
    "tip": "AIDPI: tosse + taquipneia (< 2 meses ≥ 60; 2–11 meses ≥ 50; 1–4 anos ≥ 40) = pneumonia → amoxicilina e retorno em 48 h. Tiragem ou sinal de perigo = hospital.",
    "reference": "Ministério da Saúde. Manual AIDPI Criança: 2 meses a 5 anos, 2017. Sociedade Brasileira de Pediatria. Pneumonia adquirida na comunidade na infância, 2018.",
    "tags": [
      "pneumonia",
      "AIDPI",
      "amoxicilina"
    ]
  },
  {
    "id": "famema2025-44",
    "topography": "11",
    "topic": "Convulsão febril",
    "module": "Pediatria",
    "text": "Pré-escolar, sexo masculino, com 2 anos e 4 meses é levado ao pronto-socorro após ter uma convulsão tônico-clônica generalizada que durou cerca de 3 minutos. Os pais relatam que nunca observaram isso em seu filho e que ele estava com febre desde a noite anterior, mas não apresentava outros sintomas significativos além de irritabilidade. Após a convulsão, a criança estava sonolenta, mas recuperou a consciência em cerca de 15 minutos e estava alerta na chegada ao hospital. No exame físico, ele apresenta temperatura de 37,1 °C, sem sinais de irritação meníngea. Nenhuma anormalidade é identificada no exame físico. Não há histórico familiar de epilepsia.\n\nQual é o diagnóstico mais provável e o manejo inicial apropriado para este caso?",
    "options": [
      "Epilepsia; encaminhamento para neuropediatra sem introdução de drogas anticonvulsivantes no pronto atendimento.",
      "Meningite bacteriana; colher liquor e iniciar antibióticos intravenosos imediatamente.",
      "Convulsão febril simples; orientação apenas para controle da febre e observação.",
      "Convulsão afebril; realizar eletroencefalograma (EEG) e solicitar avaliação do neuropediatra no pronto atendimento."
    ],
    "correctAnswer": 2,
    "explanation": "Criança de 2 anos e 4 meses (faixa de 6 meses a 5 anos), com febre, crise tônico-clônica generalizada única de 3 minutos, recuperação completa em 15 minutos, sem sinais meníngeos e com exame normal: crise febril simples.\n\nA crise febril simples é generalizada, dura menos de 15 minutos e não se repete em 24 horas. Não exige EEG, neuroimagem nem anticonvulsivante. A conduta é tratar a causa da febre, observar e orientar a família: a recorrência acontece em cerca de 30% e o risco de epilepsia é pouco maior que o da população geral. Antitérmico dá conforto, mas não previne novas crises.",
    "commentary": "Epilepsia (A): exige ao menos duas crises não provocadas; esta foi provocada pela febre.\n\nMeningite bacteriana (B): a criança está alerta, sem sinais meníngeos e recuperada; a punção lombar só é indicada se houver sinais meníngeos, alteração persistente da consciência, menores de 12 meses sem vacinação completa ou uso prévio de antibiótico.\n\nConvulsão afebril (D): a criança estava febril desde a noite anterior; temperatura normal na chegada se explica por antitérmico ou flutuação da febre.",
    "tip": "Crise febril simples: 6 meses–5 anos, generalizada, < 15 min, única em 24 h, recuperação completa. Não precisa de EEG, imagem ou anticonvulsivante.",
    "reference": "American Academy of Pediatrics. Febrile Seizures: Guideline for the Neurodiagnostic Evaluation of the Child With a Simple Febrile Seizure. Pediatrics, 2011. Sociedade Brasileira de Pediatria. Crise febril, 2021.",
    "tags": [
      "crise febril",
      "convulsão",
      "pediatria"
    ]
  },
  {
    "id": "famema2025-45",
    "topography": "13",
    "module": "Pediatria",
    "text": "Adolescente, sexo masculino, com 11 anos de idade, foi levado ao consultório médico pela mãe devido a queixas escolares recorrentes. Os professores relatam que o aluno frequentemente comete erros por descuido nas tarefas, tem dificuldade em manter a atenção durante as aulas e perde materiais com facilidade. Em casa, a mãe observa que o filho evita atividades que exigem esforço mental prolongado, é facilmente distraído por estímulos externos e frequentemente interrompe conversas. Esses comportamentos estão presentes há mais de 8 meses, ocorrem em múltiplos ambientes e causam prejuízo significativo no desempenho acadêmico e social do adolescente.\n\nDe acordo com os critérios diagnósticos do DSM-5-TR para Transtorno do Déficit de Atenção/Hiperatividade (TDAH), qual é a apresentação mais provável neste caso?",
    "options": [
      "TDAH com apresentação predominantemente desatenta, pois apresenta pelo menos 6 sintomas de desatenção persistentes por mais de 6 meses, com impacto funcional significativo em múltiplos contextos.",
      "TDAH com apresentação combinada, pois apresenta sintomas tanto de desatenção quanto de hiperatividade/impulsividade, porém sem tempo suficiente de evolução para confirmar o diagnóstico.",
      "Transtorno de aprendizagem com sintomas secundários de desatenção, pois os sintomas se manifestam principalmente no ambiente escolar.",
      "TDAH com apresentação predominantemente hiperativa/impulsividade, pois a principal queixa está relacionada à interrupção de conversas e dificuldade em manter-se quieto."
    ],
    "correctAnswer": 0,
    "explanation": "O caso descreve vários sintomas de desatenção (erros por descuido, dificuldade de manter a atenção, perda de materiais, evitar tarefas que exigem esforço mental, distração fácil), presentes há mais de 6 meses, em mais de um ambiente e com prejuízo funcional. O único sintoma de impulsividade citado é interromper conversas, insuficiente para a apresentação combinada.\n\nPelo DSM-5-TR, a apresentação é predominantemente desatenta quando há ao menos 6 sintomas de desatenção (5 a partir dos 17 anos) e menos de 6 de hiperatividade/impulsividade, por pelo menos 6 meses, com início antes dos 12 anos e prejuízo em dois ou mais contextos.",
    "commentary": "Combinada sem tempo de evolução (B): não há sintomas suficientes de hiperatividade/impulsividade, e 8 meses superam os 6 meses exigidos.\n\nTranstorno de aprendizagem (C): os sintomas aparecem em casa e na escola, e o quadro é de desatenção global, não de dificuldade específica de leitura, escrita ou cálculo.\n\nPredominantemente hiperativa/impulsiva (D): a maioria dos sintomas é de desatenção; interromper conversas isolado não define essa apresentação.",
    "tip": "TDAH: ≥ 6 sintomas (≥ 5 a partir dos 17 anos) por ≥ 6 meses, início antes dos 12 anos, em ≥ 2 ambientes, com prejuízo.",
    "reference": "American Psychiatric Association. DSM-5-TR – Manual Diagnóstico e Estatístico de Transtornos Mentais, 2022. Associação Brasileira do Déficit de Atenção. Protocolo Clínico e Diretrizes Terapêuticas do TDAH (Ministério da Saúde), 2022.",
    "tags": [
      "TDAH",
      "desatenção",
      "DSM-5-TR"
    ]
  },
  {
    "id": "famema2025-46",
    "topography": "14",
    "topic": "Parada cardiorrespiratória",
    "module": "Pediatria",
    "text": "Adolescente, sexo feminino, 15 anos de idade, após tentativa de suicídio com ingestão de comprimidos de \"uso controlado de sua avó\", apresentou parada cardiorrespiratória na chegada à sala de emergência. Durante a reanimação cardiopulmonar, ocorrendo já há 3 minutos, sem sucesso, o monitor identificou um traçado com uma frequência de cerca de 130 batimentos por minuto, com complexo QRS de duração de 0,12 segundos, com morfologia bizarra e distorcida e ausência de ondas P identificáveis.\n\nSobre a conduta mais adequada, trata-se de um ritmo que pode ser responsivo",
    "options": [
      "ao uso de atropina, que deve ser imediatamente administrada.",
      "à administração imediata de adrenalina antes de qualquer terapia elétrica.",
      "à desfibrilação (choque no modo não sincronizado), que deve imediatamente ser realizada.",
      "à cardioversão (choque no modo sincronizado), que deve imediatamente ser realizada."
    ],
    "correctAnswer": 2,
    "explanation": "Em parada cardiorrespiratória, o monitor mostra ritmo regular de cerca de 130 bpm, com QRS largo (0,12 s), bizarro e sem onda P: taquicardia ventricular. Num paciente em PCR, ou seja, sem pulso, é TV sem pulso, ritmo chocável.\n\nA conduta é desfibrilação imediata (choque não sincronizado), seguida de 2 minutos de RCP antes de checar o ritmo. A adrenalina entra após o segundo choque. Na intoxicação por antidepressivo tricíclico, comum em tentativa de suicídio com 'remédio controlado', considera-se também bicarbonato de sódio.",
    "commentary": "Atropina (A): não é usada na PCR e não trata taquiarritmia.\n\nAdrenalina antes do choque (B): nos ritmos chocáveis (FV e TV sem pulso), o choque vem primeiro; adrenalina é logo a primeira droga apenas em assistolia e AESP.\n\nCardioversão sincronizada (D): é para taquicardia com pulso e instabilidade; sem pulso o aparelho pode não sincronizar e atrasar o choque.",
    "tip": "PCR com FV ou TV sem pulso: choque não sincronizado já. Cardioversão sincronizada só se houver pulso.",
    "reference": "American Heart Association. Pediatric Advanced Life Support (PALS) – Guidelines for CPR and ECC, 2020 (atualização 2025).",
    "tags": [
      "parada cardiorrespiratória",
      "taquicardia ventricular sem pulso",
      "desfibrilação"
    ]
  },
  {
    "id": "famema2025-47",
    "topography": "11",
    "topic": "Puericultura",
    "module": "Pediatria",
    "text": "Adolescente, sexo feminino, com 12 anos e 8 meses, comparece à consulta de rotina com o pediatra. Não existem queixas relacionadas ao crescimento, e a menina ainda não menstruou. Sua altura foi classificada como adequada para idade e, durante o exame físico das mamas, observou-se que, bilateralmente, há tecido glandular palpável que extravasa a dimensão areolar, havendo também projeção do complexo aréola/papila sobre a curvatura da mama, conferindo um aspecto de duplo contorno.\n\nSobre esse caso, é correto afirmar que",
    "options": [
      "o exame da mama indica que o desenvolvimento puberal iniciou-se recentemente, há menos de um ano e, portanto, a adolescente não pode ser classificada como atraso puberal; sua velocidade de crescimento deve estar por volta de 6 cm/ano; a menarca deve ocorrer em cerca de 2 anos.",
      "o exame da mama indica que o desenvolvimento puberal está ocorrendo na cronologia normal esperada para a adolescente, mas certamente não ocorreu ainda o pico de velocidade de crescimento; portanto, sua velocidade de crescimento deve estar por volta de 5 a 7 cm/ano.",
      "o exame da mama indica a proximidade da primeira menstruação, que ocorre, geralmente, no fim do desenvolvimento puberal e na fase de desaceleração do crescimento; as características e a cronologia do seu desenvolvimento puberal a classificam como normal, não havendo motivos para preocupação.",
      "verifica-se uma dissociação entre os achados do exame físico maturacional e a cronologia habitual das modificações puberais, fato que tem sido cada vez mais observado após a epidemia de infecções por Sars-COV-2."
    ],
    "correctAnswer": 2,
    "explanation": "Mama com tecido glandular que ultrapassa a aréola e com projeção da aréola e da papila formando um segundo contorno sobre a mama: estágio M4 de Tanner. A menarca costuma ocorrer em M3–M4, cerca de 2 a 2,5 anos após o início da telarca, quando a menina já passou do pico de velocidade de crescimento e está na fase de desaceleração.\n\nAos 12 anos e 8 meses, com estatura adequada e mamas em M4, o desenvolvimento é normal e a menarca deve estar próxima.",
    "commentary": "Puberdade iniciada há menos de 1 ano (A): M4 indica puberdade avançada, não recente; a menarca vem em meses, não em 2 anos.\n\nAinda não ocorreu o pico de crescimento (B): nas meninas o estirão é precoce, em torno de M2–M3; em M4 o pico já passou.\n\nDissociação após a pandemia (D): não há dissociação; a cronologia é normal (atraso puberal seria ausência de mamas aos 13 anos).",
    "tip": "Meninas: telarca (M2) entre 8 e 13 anos → estirão em M2–M3 → menarca em M3–M4, cerca de 2 anos após a telarca.",
    "reference": "Sociedade Brasileira de Pediatria. Tratado de Pediatria, 5ª ed. – Crescimento e desenvolvimento puberal. Marshall WA, Tanner JM. Variations in pattern of pubertal changes in girls. Arch Dis Child, 1969.",
    "tags": [
      "puberdade",
      "estadiamento de Tanner",
      "menarca"
    ]
  },
  {
    "id": "famema2025-48",
    "topography": "15",
    "topic": "Imunização",
    "module": "Pediatria",
    "text": "Um dos maiores destaques do Programa Nacional de Imunizações em nosso país é a existência dos Centros de Referência para Imunobiológicos Especiais, os CRIE, centros constituídos de infraestrutura e logística específicas, destinados ao atendimento de indivíduos portadores de quadros clínicos especiais.\n\nDe acordo com as orientações mais atuais para a vacinação de uma criança com Síndrome de Down, sem cardiopatia, qual estratégia é recomendada?",
    "options": [
      "Esquema com vacina conjugada para pneumococo 13-valente, seguida da vacina polissacarídica 23-valente.",
      "Esquema com vacina conjugada para pneumococo 10-valente, seguida da vacina polissacarídica 23-valente.",
      "Esquema de vacina anti-meningocócica ACWY no primeiro ano de vida.",
      "Esquema de vacina adsorvida difteria, tétano e pertussis acelular (DTPa) no primeiro ano de vida."
    ],
    "correctAnswer": 1,
    "explanation": "Pessoas com síndrome de Down têm mais infecções respiratórias graves e estão entre as indicações do CRIE. Segundo o manual do CRIE usado pela banca, a criança com trissomia, sem cardiopatia, segue o esquema da rotina com a vacina pneumocócica conjugada 10-valente (VPC10) e recebe também a polissacarídica 23-valente (VPP23) a partir dos 2 anos, com reforço após 5 anos.",
    "commentary": "VPC13 seguida de VPP23 (A): pelo manual do CRIE usado como base, a VPC13 é reservada a grupos de maior risco, como HIV, asplenia, transplantados, fístula liquórica e câncer.\n\nMeningocócica ACWY no primeiro ano (C): o CRIE a indica para asplenia, deficiência de complemento e outras situações específicas, não para síndrome de Down isolada (fora a dose de rotina na adolescência).\n\nDTPa no primeiro ano (D): a tríplice acelular é indicada no CRIE para quem teve eventos adversos graves com a DTP de células inteiras ou tem doença neurológica de risco; síndrome de Down sem essas condições usa a vacina da rotina.",
    "tip": "Síndrome de Down no CRIE: pneumocócica conjugada da rotina + VPP23 a partir dos 2 anos (reforço em 5 anos) e influenza anual.",
    "reference": "Ministério da Saúde. Manual dos Centros de Referência para Imunobiológicos Especiais, 6ª ed., 2023.",
    "tags": [
      "CRIE",
      "síndrome de Down",
      "vacina pneumocócica"
    ]
  },
  {
    "id": "famema2025-49",
    "topography": "5.1",
    "topic": "Climatério e menopausa",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente, 47 anos, nuligesta, vem para consulta de rotina ginecológica trazendo queixas de alterações de humor, sudorese noturna intensa na região do pescoço e atraso nos ciclos menstruais, chegando a 45 dias com hipermenorreia. Ao exame físico, apresenta-se corada, normotensa, parâmetros vitais normais. Ao exame ginecológico, apresenta útero palpável na sínfise púbica e anexos não palpáveis ao toque vaginal. Foi questionada sobre outros diagnósticos. A paciente referiu não tomar nenhuma medicação e não tem antecedentes pessoais importantes. Quanto aos antecedentes familiares, a sua tia materna teve câncer mamário aos 65 anos.\n\nQual a suspeita diagnóstica mais provável e qual exame seria importante relacionado às queixas clínicas?",
    "options": [
      "Hipotiroidismo – Ultrassonografia da tiroide.",
      "Câncer de colo uterino – Colpocitologia oncótica.",
      "Menopausa – FSH.",
      "Climatério – Ultrassonografia transvaginal."
    ],
    "correctAnswer": 3,
    "explanation": "Mulher de 47 anos com alteração de humor, fogachos/sudorese noturna e ciclos irregulares (atrasos até 45 dias): transição menopausal, fase do climatério. Ela ainda menstrua, então não está na menopausa, que só é diagnosticada após 12 meses de amenorreia.\n\nO diagnóstico do climatério é clínico, sem necessidade de FSH. O que precisa de investigação é a hipermenorreia com útero aumentado (palpável na sínfise): sangramento uterino anormal na perimenopausa, possivelmente por mioma. A ultrassonografia transvaginal avalia útero e endométrio.",
    "commentary": "Hipotireoidismo com USG de tireoide (A): o hipotireoidismo pode alterar ciclos, mas os fogachos e a idade apontam o climatério; e a investigação de função tireoidiana é com TSH, não ultrassom.\n\nCâncer de colo com citologia (B): pode causar sangramento, mas sangramento pós-coito ou irregular; o quadro completo é de climatério com útero aumentado.\n\nMenopausa com FSH (C): a paciente ainda menstrua; o FSH oscila muito na transição e não é necessário para o diagnóstico.",
    "tip": "Climatério: diagnóstico clínico, sem FSH. Menopausa = 12 meses sem menstruar. Sangramento aumentado na perimenopausa: USG transvaginal.",
    "reference": "Ministério da Saúde. Manual de Atenção à Mulher no Climatério/Menopausa, 2008. FEBRASGO. Manual de Orientação em Climatério, 2010.",
    "tags": [
      "climatério",
      "sangramento uterino anormal",
      "ultrassonografia transvaginal"
    ]
  },
  {
    "id": "famema2025-50",
    "topography": "5.1",
    "topic": "Climatério e menopausa",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente, 47 anos, nuligesta, vem para consulta de rotina ginecológica trazendo queixas de alterações de humor, sudorese noturna intensa na região do pescoço e atraso nos ciclos menstruais, chegando a 45 dias com hipermenorreia. Ao exame físico, apresenta-se corada, normotensa, parâmetros vitais normais. Ao exame ginecológico, apresenta útero palpável na sínfise púbica e anexos não palpáveis ao toque vaginal. Foi questionada sobre outros diagnósticos. A paciente referiu não tomar nenhuma medicação e não tem antecedentes pessoais importantes. Quanto aos antecedentes familiares, a sua tia materna teve câncer mamário aos 65 anos.\n\nDepois de trazer exames rotineiros normais (USG mama/mamografia/ USG transvaginal e citologia oncótica, perfil lipídico e glicemia), qual tratamento estaria mais indicado após explicação de riscos e benefícios?",
    "options": [
      "Isoflavonas.",
      "Progesterona",
      "Terapia estroprogestativa.",
      "Testosterona."
    ],
    "correctAnswer": 2,
    "explanation": "Mulher de 47 anos, com fogachos e alteração de humor que atrapalham a vida, exames de rastreamento normais e sem contraindicações: candidata a terapia hormonal. Tem útero, então o estrogênio deve ser associado a um progestagênio, para proteger o endométrio da hiperplasia e do câncer.\n\nA terapia hormonal é o tratamento mais eficaz para sintomas vasomotores e tem melhor relação risco-benefício quando iniciada antes dos 60 anos ou nos primeiros 10 anos após a menopausa (janela de oportunidade). A tia materna com câncer de mama aos 65 anos não contraindica.",
    "commentary": "Isoflavonas (A): têm eficácia pequena, pouco superior ao placebo; são alternativa para quem não pode ou não quer hormônio.\n\nProgesterona isolada (B): pode regular o ciclo, mas é menos eficaz para os fogachos; não é a terapia principal.\n\nTestosterona (D): indicada só para desejo sexual hipoativo após avaliação; não trata sintomas vasomotores.",
    "tip": "Terapia hormonal na menopausa: mulher com útero = estrogênio + progestagênio; sem útero = estrogênio isolado. Melhor antes dos 60 anos ou até 10 anos de menopausa.",
    "reference": "The 2022 Hormone Therapy Position Statement of The North American Menopause Society. Menopause, 2022. FEBRASGO. Consenso sobre terapia hormonal da menopausa, 2018.",
    "tags": [
      "terapia hormonal",
      "climatério",
      "fogachos"
    ]
  },
  {
    "id": "famema2025-51",
    "topography": "5.1",
    "module": "Ginecologia e Obstetrícia",
    "text": "Assinale a alternativa que apresenta fator(es) de risco comprovado(s) para câncer mamário.",
    "options": [
      "Terapia hormonal estroprogestativa.",
      "Idade tardia da menarca e precoce da menopausa.",
      "Multiparidade e amamentação.",
      "Lesões mamárias não proliferativas sem antecedente familiar."
    ],
    "correctAnswer": 0,
    "explanation": "A terapia hormonal combinada (estrogênio + progestagênio) é fator de risco comprovado para câncer de mama: no estudo WHI, aumentou o risco após cerca de 5 anos de uso, e o risco cai após a suspensão. O estrogênio isolado, em mulheres histerectomizadas, praticamente não aumentou o risco.\n\nOutros fatores comprovados: idade, sexo feminino, mutações BRCA1/2, história familiar em parentes de 1º grau, exposição a radiação, menarca precoce, menopausa tardia, nuliparidade ou primeira gestação tardia, obesidade pós-menopausa, álcool e lesões proliferativas com atipia.",
    "commentary": "Menarca tardia e menopausa precoce (B): o risco aumenta com mais tempo de exposição estrogênica, ou seja, menarca precoce e menopausa tardia; as condições da alternativa são protetoras.\n\nMultiparidade e amamentação (C): ambas são fatores de proteção.\n\nLesões não proliferativas (D): cistos e fibroadenomas simples, sem história familiar, não aumentam o risco de forma relevante.",
    "tip": "Câncer de mama: mais estrogênio ao longo da vida = mais risco (menarca precoce, menopausa tardia, nuliparidade, TH combinada). Amamentação e multiparidade protegem.",
    "reference": "Instituto Nacional de Câncer (INCA). Câncer de mama: fatores de risco, 2022. Rossouw JE et al. Risks and benefits of estrogen plus progestin (WHI). JAMA, 2002.",
    "tags": [
      "câncer de mama",
      "fatores de risco",
      "terapia hormonal"
    ]
  },
  {
    "id": "famema2025-52",
    "topography": "5.1",
    "topic": "Infertilidade",
    "module": "Ginecologia e Obstetrícia",
    "text": "Atendendo a um casal que tenta engravidar há 12 meses; ela com 30 anos e ele com 46 anos, ela refere ciclos menstruais normais, não tem antecedentes cirúrgicos e sem queixas ginecológicas. Ao exame físico minucioso da mulher, não foram encontradas alterações clínicas ou ginecológicas.\n\nQual a investigação preliminar mínima prevista?",
    "options": [
      "Cariótipo do casal.",
      "Investigação imunológica e TSH.",
      "Espermograma e ultrassonografia transvaginal.",
      "Pela idade da mulher (abaixo de 35 anos), deve-se aguardar pelo menos 2 anos para investigar."
    ],
    "correctAnswer": 2,
    "explanation": "Casal tentando engravidar há 12 meses sem sucesso: infertilidade, com indicação de investigação (mulher < 35 anos após 12 meses; ≥ 35 anos após 6 meses). A investigação básica avalia os três fatores principais: masculino (espermograma), ovulatório e uterino/ovariano (ultrassonografia transvaginal, que avalia útero, ovários e contagem de folículos antrais, e dosagens hormonais) e tubário (histerossalpingografia).\n\nO fator masculino está presente em cerca de metade dos casais, e o parceiro tem 46 anos, por isso o espermograma é indispensável desde o início.",
    "commentary": "Cariótipo do casal (A): é indicado em situações específicas, como abortamento de repetição ou alteração grave no espermograma, não na investigação inicial.\n\nInvestigação imunológica e TSH (B): o TSH pode fazer parte, mas a investigação imunológica não tem papel na avaliação básica.\n\nAguardar 2 anos (D): a investigação começa após 12 meses de tentativas em mulheres com menos de 35 anos.",
    "tip": "Infertilidade: investigar após 12 meses (< 35 anos) ou 6 meses (≥ 35). Básico: espermograma, USG transvaginal/reserva ovariana e histerossalpingografia.",
    "reference": "Practice Committee of the American Society for Reproductive Medicine. Fertility evaluation of infertile women: a committee opinion. Fertil Steril, 2021. FEBRASGO. Investigação básica do casal infértil.",
    "tags": [
      "infertilidade",
      "espermograma",
      "ultrassonografia transvaginal"
    ]
  },
  {
    "id": "famema2025-53",
    "topography": "5.1",
    "topic": "Doença inflamatória pélvica",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 22 anos vem ao pronto atendimento com dor pélvica que apareceu após a última menstruação, de forte intensidade há 4 dias. Não apresenta sintomas gastrintestinais associados. Tem vida sexual ativa e refere parceiro único e, como método contraceptivo, usa DIU de cobre. Menstruação regular, sem atrasos. Ao exame físico, observa-se que a paciente está corada e subfebril (axilar = 37,7°C). Ausculta cardiopulmonar normais. Abdome doloroso e com rigidez abdominal. Toque vaginal: dor a mobilização cervical. Dentre os exames solicitados, tem-se os seguintes resultados: BHcG negativo. Hb 12/ Ht 36. Leucócitos 13000 leucócitos/mL. PCR 4 mg/dL.\n\nPelo quadro exposto, qual a principal hipótese diagnóstica?",
    "options": [
      "Dismenorreia",
      "Gestação ectópica",
      "Apendicite",
      "Doença inflamatória pélvica aguda."
    ],
    "correctAnswer": 3,
    "explanation": "Mulher jovem, sexualmente ativa, com dor pélvica que começou após a menstruação, febre baixa, dor à mobilização do colo, leucocitose, PCR elevada e beta-hCG negativo: doença inflamatória pélvica aguda.\n\nO critério mínimo para diagnóstico é dor à mobilização do colo, dor anexial ou dor uterina; febre, leucocitose, PCR elevada e corrimento cervical reforçam. O início pós-menstrual é típico, pela ascensão de germes com o colo aberto. O DIU aumenta o risco só nas primeiras semanas após a inserção. Rigidez abdominal sugere pelviperitonite, que indica internação.",
    "commentary": "Dismenorreia (A): dor cíclica durante a menstruação, sem febre, leucocitose ou dor à mobilização cervical.\n\nGestação ectópica (B): o beta-hCG negativo afasta.\n\nApendicite (C): costuma ter sintomas digestivos (anorexia, náuseas) e dor migratória para a fossa ilíaca direita; dor à mobilização do colo e início após a menstruação favorecem DIP.",
    "tip": "DIP: dor pélvica + dor à mobilização do colo/anexos, em mulher sexualmente ativa, sobretudo após a menstruação. Sempre pedir beta-hCG.",
    "reference": "Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com IST, 2022. CDC. Sexually Transmitted Infections Treatment Guidelines, 2021.",
    "tags": [
      "doença inflamatória pélvica",
      "dor pélvica",
      "DIU"
    ]
  },
  {
    "id": "famema2025-54",
    "topography": "10",
    "topic": "Infecções sexualmente transmissíveis",
    "module": "Ginecologia e Obstetrícia",
    "text": "Quanto ao manejo sindrômico das úlceras genitais, o Ministério da Saúde orienta que",
    "options": [
      "se há úlcera genital, deve ser solicitada a sorologia para HSV tipo 1 e 2.",
      "se a lesão não tem vesículas e duração menor que 4 semanas, devem ser tratados sífilis e cancro mole.",
      "se a lesão tem vesículas e duração superior a 4 semanas, deve-se fazer a biópsia e tratar donovanose.",
      "se a lesão for única e dolorosa, deve ser tratada como cancro duro."
    ],
    "correctAnswer": 1,
    "explanation": "No fluxograma de úlcera genital do Ministério da Saúde, quando não há laboratório disponível, a lesão sem vesículas e com menos de 4 semanas de evolução é tratada para sífilis (penicilina benzatina 2,4 milhões UI) e cancroide (azitromicina 1 g em dose única), as duas causas mais prováveis.\n\nSe houver vesículas, trata-se herpes; se a úlcera tiver mais de 4 semanas, faz-se biópsia e trata-se sífilis, cancroide e donovanose.",
    "commentary": "Sorologia para HSV (A): o diagnóstico de herpes é clínico; sorologia não confirma a causa da úlcera nem está no fluxograma.\n\nVesículas e mais de 4 semanas (C): úlcera com vesículas indica herpes; o critério de 4 semanas para biópsia e tratamento de donovanose vale para lesões sem vesículas.\n\nÚnica e dolorosa = cancro duro (D): o cancro duro da sífilis é tipicamente único e indolor; lesões dolorosas e múltiplas sugerem cancroide ou herpes.",
    "tip": "Úlcera genital sem vesícula: < 4 semanas = tratar sífilis + cancroide; > 4 semanas = biópsia + tratar donovanose também. Com vesícula = herpes.",
    "reference": "Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com IST, 2022.",
    "tags": [
      "úlcera genital",
      "IST",
      "abordagem sindrômica"
    ]
  },
  {
    "id": "famema2025-55",
    "topography": "5.1",
    "topic": "Câncer de colo uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "O câncer do colo do útero (CCU), também chamado de câncer cervical, é causado pela infecção genital persistente por alguns tipos do Papilomavírus Humano – HPV (chamados de tipos oncogênicos). Esse vírus é sexualmente transmissível, muito frequente na população, e seria evitável o contágio com o uso de preservativos. Na maioria das vezes a infecção não causa doença, mas, em alguns casos, ocorrem alterações celulares que podem evoluir ao longo dos anos para o câncer. A presença do vírus e de lesões pré-cancerosas são identificadas no exame preventivo (conhecido também como Papanicolau), e são curáveis na quase totalidade dos casos. Por isso é importante a realização periódica do exame preventivo. As vacinas contra o HPV são também muito importantes para prevenir infecções por esses vírus e, portanto, prevenir o desenvolvimento deste câncer. Outros fatores de risco para o seu desenvolvimento são o tabagismo e a baixa imunidade.\n\nQuanto ao rastreamento do CCU, quais as recomendações do Ministério da Saúde (INCA, 2016)?",
    "options": [
      "Rastrear os 14 subtipos de HPV independentemente da idade.",
      "Priorizar a faixa etária dos 25 aos 64 anos, com citologia.",
      "Citologia a cada três anos deve ser a conduta atual.",
      "Se lesão de baixo grau presente na citologia, deve-se encaminhar para colposcopia imediata."
    ],
    "correctAnswer": 1,
    "explanation": "As Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (INCA, 2016) recomendam o exame citopatológico para mulheres de 25 a 64 anos que já iniciaram atividade sexual: os dois primeiros exames com intervalo anual e, se normais, a cada 3 anos. Fora dessa faixa, o rastreamento tem pouco benefício.\n\nObservação: em 2025 o Ministério da Saúde começou a implantar o teste de DNA-HPV como rastreamento primário (25 a 64 anos, a cada 5 anos), mas a questão cobra as diretrizes de 2016.",
    "commentary": "Rastrear 14 subtipos de HPV em qualquer idade (A): as diretrizes de 2016 usam citologia; mesmo com o teste de DNA-HPV, há faixa etária definida.\n\nCitologia a cada 3 anos (C): incompleta; o intervalo trienal só vale após dois exames anuais normais.\n\nColposcopia imediata na lesão de baixo grau (D): na LSIL em mulheres ≥ 25 anos repete-se a citologia em 6 meses; a colposcopia é indicada se persistir.",
    "tip": "Rastreamento do colo (INCA 2016): citologia dos 25 aos 64 anos, 2 exames anuais e depois a cada 3 anos. LSIL: repetir em 6 meses. HSIL: colposcopia.",
    "reference": "Instituto Nacional de Câncer (INCA). Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero, 2ª ed., 2016.",
    "tags": [
      "câncer de colo do útero",
      "rastreamento",
      "citologia oncótica"
    ]
  },
  {
    "id": "famema2025-56",
    "topography": "5.1",
    "topic": "Síndrome dos ovários policísticos",
    "module": "Ginecologia e Obstetrícia",
    "text": "Adolescente, 15 anos, menarca aos 12 anos. Vem com quadro de irregularidade menstrual. Suas menstruações têm atrasado e os ciclos atingem 34 dias de intervalo. Já aconteceu de falhar 1 vez. A mãe acompanha a consulta e está preocupada, pois teve ovário policístico nessa idade. Ao exame físico, observa-se aumento de pelos nos braços e pernas e sobrepeso (IMC 28). Os exames subsidiários solicitados, tais como glicemia, curva glicêmica, androstenediona, testosterona, FSH/LH e estradiol, estavam dentro da faixa de normalidade. Apenas a 170H-progesterona encontrava-se elevada em torno de 800 ng/dL. O exame ultrassonográfico pélvico era normal.\n\nComo explicar essa situação para a mãe?",
    "options": [
      "Sua filha não pode ser diagnosticada com SOP; mesmo tendo anovulação confirmada e aumento de androgênio, também precisaria ter ovário policístico no ultrassom.",
      "Sua filha pode ter SOP mesmo com ovários normais nessa idade.",
      "Sua filha tem hiperplasia adrenal congênita, e os sinais clínicos são realmente parecidos.",
      "Sua filha, tendo sobrepeso, teve a sorte de não apresentar aumento da glicemia e consequente resistência à insulina."
    ],
    "correctAnswer": 2,
    "explanation": "Adolescente com irregularidade menstrual e hirsutismo, que parece SOP, mas com 17-OH-progesterona elevada (800 ng/dL): o diagnóstico é hiperplasia adrenal congênita forma não clássica (deficiência parcial de 21-hidroxilase). O quadro clínico é praticamente igual ao da SOP, e por isso a 17-OHP deve ser dosada antes de fechar o diagnóstico de SOP.\n\nValores de 17-OHP basal acima de 1.000 ng/dL confirmam; entre 200 e 1.000 ng/dL o teste de estímulo com ACTH esclarece. A 17-OHP de 800 ng/dL está na zona que pede o teste, mas a banca considerou a elevação suficiente para o diagnóstico.",
    "commentary": "Não pode ser SOP sem ovário policístico (A): pelos critérios de Rotterdam bastam 2 de 3 (anovulação, hiperandrogenismo, ovários policísticos); o motivo para não diagnosticar SOP é a 17-OHP alta, que indica outra causa.\n\nPode ter SOP com ovários normais (B): seria verdade se as outras causas de hiperandrogenismo estivessem excluídas, mas a 17-OHP elevada aponta HAC não clássica. Na adolescente, além disso, a SOP exige critérios mais rígidos (2 anos de irregularidade após a menarca).\n\nSorte por não ter hiperglicemia (D): não responde à questão e ignora o achado laboratorial principal.",
    "tip": "Suspeita de SOP: dosar 17-OH-progesterona para excluir HAC não clássica (> 200 ng/dL suspeita; > 1.000 confirma; no meio, teste com ACTH).",
    "reference": "Teede HJ et al. International evidence-based guideline for the assessment and management of polycystic ovary syndrome 2023. Speiser PW et al. Endocrine Society Guideline – Congenital Adrenal Hyperplasia, 2018.",
    "tags": [
      "hiperplasia adrenal congênita não clássica",
      "síndrome dos ovários policísticos",
      "17-OH-progesterona"
    ]
  },
  {
    "id": "famema2025-57",
    "topography": "5.2",
    "topic": "Infecções na gestação",
    "module": "Ginecologia e Obstetrícia",
    "text": "Recebida no atendimento pré-natal, a gestante NAB, 30 anos, professora de ensino fundamental, primigesta, traz resultado da ultrassonografia morfológica de 2o trimestre. Ela está bastante preocupada, pois no 1o trimestre da gestação referiu ter ficado fortemente gripada e agora o bebê apresenta alterações. Resultado da ultrassonografia morfológica com 24 semanas, o feto apresenta restrição de crescimento fetal, ventriculomegalia e hepatomegalia. A placenta apresenta calcificações e placentomegalia.\n\nQual a principal hipótese e conduta inicial?",
    "options": [
      "Síndrome da rubéola congênita - sorologia IgG e IgM.",
      "Coronavírus – Swab nasal.",
      "Toxoplasmose – PCR no líquido amniótico.",
      "Citomegalovírus – sorologia IgG e IgM."
    ],
    "correctAnswer": 3,
    "explanation": "Infecção materna no 1º trimestre semelhante a gripe e, no morfológico, restrição de crescimento, ventriculomegalia, hepatomegalia, placentomegalia e calcificações placentárias: quadro típico de infecção congênita por citomegalovírus, a infecção congênita mais frequente. A infecção materna costuma ser assintomática ou com quadro gripal/mononucleose-like.\n\nA conduta inicial é sorologia materna IgG e IgM, completada pelo teste de avidez de IgG (baixa avidez indica infecção recente). A confirmação fetal é feita por PCR no líquido amniótico, colhido após 20–21 semanas e pelo menos 6–8 semanas após a infecção materna.",
    "commentary": "Rubéola congênita (A): causa catarata, cardiopatia e surdez; a gestante costuma ter exantema, e a vacinação tornou a doença rara no Brasil.\n\nCoronavírus com swab (B): o SARS-CoV-2 não causa esse padrão de malformações, e swab nasal só mostraria infecção atual.\n\nToxoplasmose com PCR (C): pode dar ventriculomegalia e calcificações, mas as calcificações são intracranianas e a infecção é assintomática ou com linfadenopatia; além disso, o primeiro passo seria a sorologia materna, não o PCR.",
    "tip": "Feto com RCF + ventriculomegalia + hepatomegalia + placentomegalia/calcificações após quadro gripal: CMV. Começa com sorologia materna IgG/IgM e avidez.",
    "reference": "FEBRASGO. Citomegalovírus na gestação – Protocolo nº 59, 2021. Rawlinson WD et al. Congenital cytomegalovirus infection in pregnancy and the neonate: consensus recommendations. Lancet Infect Dis, 2017.",
    "tags": [
      "citomegalovírus",
      "infecção congênita",
      "restrição de crescimento fetal"
    ]
  },
  {
    "id": "famema2025-58",
    "topography": "5.2",
    "topic": "Trabalho de parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Analise a cardiotocografia a seguir. A interpretação correta é:",
    "options": [
      "cardiotocografia tipo 1.",
      "há desaceleração do tipo DIP 1.",
      "a variabilidade está dentro da normalidade.",
      "cardiotocografia tipo 2."
    ],
    "correctAnswer": 3,
    "image": "/images/famema2025-58.webp",
    "explanation": "No traçado, a frequência cardíaca fetal basal está em torno de 140–150 bpm, a variabilidade está reduzida (linha quase lisa, oscilações abaixo de 5 bpm) e há desaceleração com o fundo (nadir) depois do pico da contração uterina: desaceleração tardia (DIP II).\n\nPela classificação em três categorias (NICHD, adotada pelo ACOG e pela FEBRASGO), o traçado não é normal (categoria I) nem tem variabilidade ausente com desacelerações recorrentes (categoria III). Desacelerações tardias com variabilidade mínima entram na categoria II, indeterminada, que exige medidas de reanimação intrauterina e reavaliação.",
    "commentary": "Categoria I (A): exige FC basal de 110–160 bpm, variabilidade moderada (6–25 bpm) e ausência de desacelerações tardias ou variáveis.\n\nDIP I (B): a desaceleração precoce espelha a contração, com nadir coincidente com o pico; aqui o nadir vem depois do pico.\n\nVariabilidade normal (C): a variabilidade normal é de 6 a 25 bpm; o traçado tem oscilações mínimas.",
    "tip": "Cardiotocografia: I = normal; III = variabilidade ausente + desacelerações tardias/variáveis recorrentes, bradicardia ou padrão sinusoidal; II = todo o resto.",
    "reference": "Macones GA et al. The 2008 NICHD workshop report on electronic fetal monitoring. Obstet Gynecol, 2008. ACOG Practice Bulletin nº 106, 2009. FEBRASGO. Cardiotocografia anteparto e intraparto.",
    "tags": [
      "cardiotocografia",
      "desaceleração tardia",
      "vitalidade fetal"
    ]
  },
  {
    "id": "famema2025-59",
    "topography": "5.2",
    "topic": "Restrição de crescimento fetal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Quanto ao diagnóstico da restrição de crescimento fetal,",
    "options": [
      "a circunferência abdominal fetal é a medida de maior sensibilidade para sua detecção.",
      "a dopplervelocimetria não tem boa acurácia para a insuficiência placentária.",
      "a artéria umbilical pode apresentar redução do índice de pulsatilidade em casos de RCF por insuficiência placentária.",
      "em casos de restrição precoce, a hipótese mais provável é a síndrome antifosfolípide."
    ],
    "correctAnswer": 0,
    "explanation": "A circunferência abdominal (CA) é a medida biométrica mais sensível para detectar restrição de crescimento fetal: reflete o tamanho do fígado e a gordura subcutânea, que são os primeiros a diminuir quando falta nutrição (o fluxo é desviado para o cérebro). Pelo consenso de Delphi, CA ou peso fetal estimado abaixo do percentil 3 já definem RCF.",
    "commentary": "Doppler sem boa acurácia (B): a dopplervelocimetria é o principal método para identificar insuficiência placentária e acompanhar o feto restrito.\n\nRedução do IP da artéria umbilical (C): na insuficiência placentária a resistência aumenta, o IP da umbilical sobe e, nos casos graves, a diástole fica zero ou reversa. Quem tem o IP reduzido é a artéria cerebral média (centralização).\n\nSíndrome antifosfolípide na RCF precoce (D): a RCF precoce (< 32 semanas) está associada sobretudo a insuficiência placentária grave e pré-eclâmpsia, além de aneuploidias e infecções; a SAF é causa possível, mas não a mais provável.",
    "tip": "RCF: circunferência abdominal é a medida mais sensível. Insuficiência placentária: IP da umbilical sobe; IP da cerebral média cai.",
    "reference": "Gordijn SJ et al. Consensus definition of fetal growth restriction: a Delphi procedure. Ultrasound Obstet Gynecol, 2016. FEBRASGO. Restrição de crescimento fetal – Protocolo, 2021.",
    "tags": [
      "restrição de crescimento fetal",
      "dopplervelocimetria",
      "circunferência abdominal"
    ]
  },
  {
    "id": "famema2025-60",
    "topography": "5.2",
    "topic": "Trabalho de parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Durante a segunda metade da gestação, uma queixa frequente que leva à procura pelo pronto-socorro são as contrações uterinas relatadas como \"endurecimento da barriga\". Se a gestante tem menos de 36 semanas, a hipótese de trabalho de parto prematuro deve ser sempre afastada e medidas cabíveis devem ser tomadas.\n\nComo o médico deve proceder frente ao quadro?",
    "options": [
      "Se tem contrações ritmadas e dilatação cervical de 1 cm com esvaecimento cervical, pode-se classificar como TPP e internar para inibição.",
      "Se apresenta contrações ritmadas e dilatação de 5 cm, deve-se realizar a corticoterapia e sulfato de magnésio para neuroproteção.",
      "Se ao toque há dilatação de 3 cm e saída de líquido amniótico, introduz-se antibioticoprofilaxia e cesariana de urgência.",
      "Se o colo é impérvio, classifica-se como útero irritável e indica-se a inibina via oral."
    ],
    "correctAnswer": 0,
    "explanation": "Trabalho de parto prematuro (antes de 37 semanas) é definido por contrações uterinas regulares associadas a modificações cervicais (dilatação e/ou esvaecimento progressivos). Contrações ritmadas com colo já esvaecido e dilatado são critério de TPP, e com idade gestacional abaixo de 34 semanas e dilatação ainda pequena há indicação de internação para tocólise, corticoide e demais medidas.",
    "commentary": "Dilatação de 5 cm com corticoide e magnésio (B): o corticoide é indicado de 24 a 34 semanas, e o sulfato de magnésio para neuroproteção só abaixo de 32 semanas; a alternativa não informa a idade gestacional e generaliza a conduta.\n\nRotura de membranas com cesariana de urgência (C): a rotura com dilatação não indica cesárea por si só; a via de parto segue indicação obstétrica. A antibioticoprofilaxia para estreptococo do grupo B está indicada no TPP.\n\nColo impérvio = útero irritável e inibir (D): sem modificação cervical não há trabalho de parto e não se faz tocólise; 'inibina' não é tocolítico.",
    "tip": "TPP: contrações regulares + modificação cervical antes de 37 semanas. Corticoide de 24 a 34 semanas; magnésio para neuroproteção abaixo de 32.",
    "reference": "FEBRASGO. Trabalho de parto prematuro – Protocolo nº 34, 2021. Ministério da Saúde. Manual de Gestação de Alto Risco, 2022.",
    "tags": [
      "trabalho de parto prematuro",
      "tocólise",
      "corticoterapia antenatal"
    ]
  },
  {
    "id": "famema2025-61",
    "topography": "5.2",
    "topic": "Abortamento",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante com 7 semanas de atraso menstrual vem ao pronto-atendimento com queixa de dor em baixo ventre e sangramento vaginal. Realiza ultrassonografia transvaginal. Assinale a alternativa que corresponde ao diagnóstico e à conduta assertiva.",
    "options": [
      "Se o colo está fechado e o endométrio mede 10 mm, há abortamento incompleto, devendo internar para dilatação e curetagem.",
      "Se o embrião tem 4 mm e não tem batimento, há aborto retido, devendo internar a gestante.",
      "Se o sangramento é pequeno, mas há cólicas e o embrião está vivo, há um abortamento em curso e deve-se receitar a progesterona.",
      "Se o colo é fechado e o saco gestacional mede 21 mm, mas não tem embrião, há gestação anembrionada e pode ser realizada aspiração."
    ],
    "correctAnswer": 3,
    "explanation": "Saco gestacional grande sem embrião, com colo fechado: gestação anembrionada (ovo cego), uma forma de gestação não evolutiva. Confirmado o diagnóstico, as opções são conduta expectante, misoprostol ou esvaziamento por aspiração manual intrauterina (AMIU).\n\nAtenção ao critério: pela Society of Radiologists in Ultrasound (SRU), o diagnóstico definitivo de gestação anembrionada exige diâmetro médio do saco ≥ 25 mm sem embrião; entre 16 e 24 mm o achado é suspeito e deve-se repetir o exame em 7 a 14 dias. A banca usou o corte antigo de cerca de 20 mm.",
    "commentary": "Endométrio de 10 mm com colo fechado = incompleto (A): no abortamento incompleto o colo costuma estar aberto e o conteúdo intrauterino é heterogêneo e mais espesso (> 15 mm); 10 mm com colo fechado sugere abortamento completo.\n\nEmbrião de 4 mm sem batimentos = retido (B): o diagnóstico definitivo exige CCN ≥ 7 mm sem atividade cardíaca; com 4 mm, repete-se o ultrassom.\n\nEmbrião vivo com cólicas = abortamento em curso (C): é ameaça de abortamento (colo fechado, embrião vivo); no abortamento em curso o colo está aberto.",
    "alert": "Gabarito discutível: pelos critérios atuais (SRU), saco gestacional de 21 mm sem embrião não basta para o diagnóstico definitivo de gestação anembrionada (o corte é 25 mm). A banca usou o critério antigo.",
    "tip": "Gestação não evolutiva (SRU): CCN ≥ 7 mm sem BCF ou saco ≥ 25 mm sem embrião. Abaixo disso, repetir o ultrassom.",
    "reference": "Doubilet PM et al. Diagnostic Criteria for Nonviable Pregnancy Early in the First Trimester. N Engl J Med, 2013. Ministério da Saúde. Atenção Humanizada ao Abortamento, 2011.",
    "tags": [
      "abortamento",
      "gestação anembrionada",
      "ultrassonografia obstétrica"
    ]
  },
  {
    "id": "famema2025-62",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "VBA, 35 anos, 2G1P cesárea anterior, vem para consulta pré-natal com 22 semanas de idade gestacional. Está em uso de sulfato ferroso e ácido fólico. Traz alguns exames solicitados previamente com os seguintes resultados: Tipagem sanguínea: A negativo; Coombs negativo. Sorologia para sífilis, hepatite C, rubéola e toxoplasmose: negativos. Sorologia para CMV IgG positivo e IgM negativo. Glicemia jejum 94 mg/dL. TSH 3,5. Hb 11/Ht 33. Exame morfológico normal no primeiro trimestre. Exame físico: peso 60 kg, PA = 110 x 70 mmHg; AU = 21 cm, BCF = 160 bpm; DU ausente.\n\nQual a conduta mais adequada nesse momento?",
    "options": [
      "Aumentar a dose de sulfato ferroso.",
      "Prescrever Rhogan e vacina VSR.",
      "Orientar dieta para diabetes e vacina dTPA.",
      "Prescrever levotiroxina 75 mcg e polivitamínicos."
    ],
    "correctAnswer": 2,
    "explanation": "Gestante de 22 semanas com glicemia de jejum de 94 mg/dL: pelo critério da IADPSG/OMS adotado no Brasil, glicemia de jejum entre 92 e 125 mg/dL em qualquer momento da gestação define diabetes mellitus gestacional. A conduta inicial é orientação nutricional, atividade física e automonitorização da glicemia.\n\nAlém disso, a vacina dTpa é indicada em toda gestação a partir de 20 semanas, para proteger o recém-nascido contra coqueluche por anticorpos transplacentários.",
    "commentary": "Aumentar o sulfato ferroso (A): Hb de 11 g/dL não caracteriza anemia na gestação (< 11 g/dL); mantém-se a dose profilática.\n\nImunoglobulina anti-D e vacina VSR (B): a gestante Rh negativo com Coombs negativo recebe a imunoglobulina com 28 semanas (ou em eventos de sensibilização); a vacina contra VSR é feita entre 28 e 36 semanas. Nenhuma das duas cabe às 22 semanas.\n\nLevotiroxina (D): TSH de 3,5 mUI/L está dentro do esperado para o 2º trimestre (até cerca de 4 mUI/L) e não exige tratamento, ainda mais sem anticorpos.",
    "tip": "DMG: jejum ≥ 92 mg/dL em qualquer momento, ou TOTG 75 g (≥ 92 / ≥ 180 / ≥ 153). dTpa a partir de 20 semanas; anti-D com 28 semanas; VSR de 28 a 36.",
    "reference": "Ministério da Saúde, OPAS, FEBRASGO, SBD. Rastreamento e diagnóstico de diabetes mellitus gestacional no Brasil, 2017. Ministério da Saúde. Calendário Nacional de Vacinação da Gestante, 2025.",
    "tags": [
      "diabetes gestacional",
      "pré-natal",
      "vacina dTpa"
    ]
  },
  {
    "id": "famema2025-63",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Geralmente a mulher não tem como reconhecer se os sintomas que apresenta durante a gravidez são normais ou patológicos. Cabe ao médico orientar quanto a essas modificações fisiológicas. Como você deve orientar uma gestante?",
    "options": [
      "Indicar cremes para as estrias e alertar que elas aparecem desde o início da gestação.",
      "Encaminhar ao odontologista, uma vez que a presença de gengivite pode levar ao parto prematuro.",
      "Oferecer sal sob a língua quando a gestante apresentar sintomas de lipotimia.",
      "Contraindicar atividade sexual no início da gestação pelo risco de abortamento associado."
    ],
    "correctAnswer": 1,
    "explanation": "Na gestação, as alterações hormonais deixam a gengiva mais vascularizada e sensível, e a gengivite e a doença periodontal ficam mais frequentes. A doença periodontal se associa a parto prematuro e baixo peso ao nascer, pela inflamação sistêmica. Por isso o Ministério da Saúde recomenda consulta odontológica no pré-natal; o tratamento dentário é seguro em qualquer trimestre, de preferência no segundo.",
    "commentary": "Cremes e estrias desde o início (A): as estrias costumam surgir na segunda metade da gestação, com a distensão da pele; nenhum creme tem eficácia comprovada para preveni-las.\n\nSal sob a língua na lipotimia (C): a orientação é deitar em decúbito lateral esquerdo, evitar ficar muito tempo em pé, levantar devagar e se hidratar.\n\nContraindicar relação sexual no início (D): em gestação de risco habitual a atividade sexual não aumenta o risco de abortamento e não deve ser proibida.",
    "tip": "Pré-natal inclui consulta odontológica: doença periodontal se associa a prematuridade.",
    "reference": "Ministério da Saúde. Caderno de Atenção Básica nº 32 – Atenção ao Pré-natal de Baixo Risco, 2013.",
    "tags": [
      "pré-natal",
      "doença periodontal",
      "prematuridade"
    ]
  },
  {
    "id": "famema2025-64",
    "topography": "5.1",
    "topic": "Planejamento reprodutivo",
    "module": "Ginecologia e Obstetrícia",
    "text": "Pouca atenção tem sido dispensada ao planejamento das gestações e devemos lembrar que quando se assiste uma mulher, especialmente portadora de doença crônica e em idade fértil, é papel do médico conversar e orientar quanto ao planejamento futuro das gestações. A esse respeito,",
    "options": [
      "deve ser indicado ácido fólico para todas as mulheres que pretendem engravidar ou que não estejam utilizando método contraceptivo.",
      "deve-se indicar vitamina A 25 000 UI para mulheres portadoras de cirurgia bariátrica em programação de gestação.",
      "liberar gestação quando a Hb glicada for menor que 7% em pacientes diabéticas.",
      "em pacientes com hipotiroidismo, corrigir o TSH para < 5."
    ],
    "correctAnswer": 0,
    "explanation": "O ácido fólico reduz o risco de defeitos do tubo neural, que se forma nas primeiras 4 semanas após a concepção, muitas vezes antes de a mulher saber que está grávida. Por isso deve ser prescrito para toda mulher que planeja engravidar ou não usa contracepção, começando ao menos 30 dias antes da concepção e mantido até o fim do 1º trimestre: 0,4 mg/dia na população geral e 4–5 mg/dia nas de alto risco (filho anterior com defeito do tubo neural, uso de anticonvulsivante, diabetes, obesidade).",
    "commentary": "Vitamina A 25.000 UI após bariátrica (B): doses acima de 10.000 UI/dia são teratogênicas; após bariátrica a vitamina A é monitorizada e reposta em doses seguras.\n\nLiberar gestação com HbA1c < 7% (C): o alvo pré-concepcional é HbA1c < 6,5% (se possível sem hipoglicemia), pelo risco de malformações proporcional ao descontrole.\n\nTSH < 5 no hipotireoidismo (D): antes de engravidar, o alvo é TSH < 2,5 mUI/L.",
    "tip": "Pré-concepção: ácido fólico 0,4 mg (alto risco 4–5 mg) ≥ 30 dias antes; diabetes com HbA1c < 6,5%; hipotireoidismo com TSH < 2,5.",
    "reference": "Ministério da Saúde. Caderno de Atenção Básica nº 32 – Atenção ao Pré-natal de Baixo Risco, 2013. FEBRASGO. Cuidado pré-concepcional, 2021. Sociedade Brasileira de Diabetes. Diretriz 2024 – Planejamento da gestação.",
    "tags": [
      "planejamento reprodutivo",
      "ácido fólico",
      "pré-concepção"
    ]
  },
  {
    "id": "famema2025-65",
    "topography": "15",
    "topic": "Saúde do trabalhador",
    "module": "Saúde Coletiva",
    "text": "Em um episódio de fortes chuvas e ventania, morreram quatro pessoas, por diferentes motivos: um entregador por aplicativo, por trauma torácico por queda de uma árvore, quando estava tentando fazer uma entrega; uma trabalhadora doméstica voltando da casa de sua empregadora, arrastada pelas águas; e dois seguranças de supermercado eletrocutados ao entrar em contato com água energizada, quando tentavam salvar alguns produtos das prateleiras do setor de alimentos.\n\nCom base na situação hipotética, assinale a alternativa correta referente à notificação no Sistema de Informação de Agravos de Notificação (SINAN).",
    "options": [
      "Somente o óbito dos dois seguranças deve ser notificado como acidente de trabalho, por eles pertencerem ao mercado formal.",
      "Nenhum dos óbitos deve ser notificado como acidente de trabalho, pois eles decorreram de um fenômeno da natureza.",
      "Todos os óbitos devem ser notificados como acidentes de trabalho.",
      "Com exceção do óbito da trabalhadora doméstica, que já havia saído do local de trabalho, os demais devem ser notificados como acidentes de trabalho."
    ],
    "correctAnswer": 2,
    "explanation": "Todos os óbitos são acidentes de trabalho. O entregador de aplicativo morreu durante uma entrega; os seguranças, tentando salvar mercadorias no local de trabalho; e a trabalhadora doméstica, no trajeto entre o trabalho e a casa, o que caracteriza acidente de trajeto, equiparado a acidente de trabalho.\n\nNo SINAN, o acidente de trabalho grave ou fatal é de notificação compulsória para qualquer trabalhador, com ou sem carteira assinada (formal, informal, autônomo, por aplicativo). O fato de a causa ser um fenômeno natural não exclui a relação com o trabalho.",
    "commentary": "Só os seguranças, por serem formais (A): a notificação no SINAN independe do vínculo; o entregador por aplicativo e a doméstica também entram.\n\nNenhum, por ser fenômeno da natureza (B): as mortes ocorreram no exercício do trabalho ou no trajeto; a causa externa natural não retira o vínculo com o trabalho.\n\nExceto a doméstica (D): o acidente no percurso entre a residência e o local de trabalho é acidente de trajeto e deve ser notificado.",
    "tip": "Acidente de trabalho grave/fatal (inclusive de trajeto) é notificação compulsória no SINAN para qualquer trabalhador, formal ou informal.",
    "reference": "Ministério da Saúde. Portaria de Consolidação nº 4/2017, Anexo 1 do Anexo V (Lista Nacional de Notificação Compulsória). Ministério da Saúde. Ficha de notificação de acidente de trabalho – SINAN.",
    "tags": [
      "acidente de trabalho",
      "SINAN",
      "saúde do trabalhador"
    ]
  },
  {
    "id": "famema2025-66",
    "topography": "15",
    "topic": "Epidemiologia",
    "module": "Saúde Coletiva",
    "text": "A característica de uma doença infecciosa expressa pelo seu coeficiente de letalidade é a",
    "options": [
      "gravidade.",
      "infectividade.",
      "patogenicidade.",
      "transmissibilidade."
    ],
    "correctAnswer": 0,
    "explanation": "A letalidade é a proporção de óbitos entre os doentes de uma doença (óbitos ÷ casos). Ela mede a gravidade da doença, relacionada à virulência do agente: quanto maior a letalidade, mais grave é a doença.",
    "commentary": "Infectividade (B): capacidade do agente de penetrar, se instalar e se multiplicar no hospedeiro; avaliada pela proporção de expostos que se infectam (taxa de ataque secundário).\n\nPatogenicidade (C): capacidade de, uma vez instalado, causar doença; medida pela proporção de infectados que adoecem.\n\nTransmissibilidade (D): capacidade de passar de um hospedeiro a outro; relaciona-se ao número básico de reprodução (R₀).",
    "tip": "Infectividade: expostos → infectados. Patogenicidade: infectados → doentes. Virulência/gravidade: doentes → graves ou óbitos (letalidade).",
    "reference": "Rouquayrol MZ, Silva MGC. Epidemiologia & Saúde, 8ª ed. Medronho RA. Epidemiologia, 2ª ed.",
    "tags": [
      "letalidade",
      "epidemiologia",
      "virulência"
    ]
  },
  {
    "id": "famema2025-67",
    "topography": "1.2",
    "topic": "Retinopatia diabética",
    "module": "Clínica Médica",
    "text": "Assinale a alternativa correta sobre a retinopatia diabética.",
    "options": [
      "As avaliações de retina em diabéticos devem ser feitas a cada 10 anos.",
      "A progressão da retinopatia diabética tem pouca relação com a glicemia e a pressão arterial.",
      "Tem início súbito e evolução rápida.",
      "É uma das principais causas de cegueira irreversível no Brasil."
    ],
    "correctAnswer": 3,
    "explanation": "A retinopatia diabética é uma das principais causas de cegueira irreversível no Brasil e a principal em adultos em idade produtiva. A evolução é silenciosa: a visão costuma estar preservada até fases avançadas (edema macular, retinopatia proliferativa com hemorragia vítrea ou descolamento tracional).\n\nPor isso o rastreamento com fundo de olho é anual: no DM2 desde o diagnóstico e no DM1 após 5 anos de doença (ou na puberdade). Controle glicêmico e pressórico reduz a progressão.",
    "commentary": "Avaliação a cada 10 anos (A): o exame é anual (pode ser a cada 1–2 anos se exames seguidos normais).\n\nPouca relação com glicemia e PA (B): estudos como DCCT e UKPDS mostraram que o controle glicêmico e pressórico reduz o surgimento e a progressão.\n\nInício súbito e evolução rápida (C): a evolução é lenta e assintomática, ao longo de anos; daí a necessidade do rastreamento.",
    "tip": "Retinopatia diabética: silenciosa. Fundo de olho anual — DM2 desde o diagnóstico, DM1 após 5 anos.",
    "reference": "Sociedade Brasileira de Diabetes. Diretriz 2024 – Retinopatia diabética. Conselho Brasileiro de Oftalmologia. Diretrizes de retinopatia diabética.",
    "tags": [
      "retinopatia diabética",
      "rastreamento",
      "cegueira"
    ]
  },
  {
    "id": "famema2025-68",
    "topography": "10",
    "topic": "Febre amarela",
    "module": "Saúde Coletiva",
    "text": "Em um pequeno município, onde há casos de febre amarela, um cidadão chega a uma Unidade Básica de Saúde (UBS) e relata ter visto um macaco morto a uma distância de 800 metros aproximadamente. Com base na situação hipotética, assinale a alternativa correta.",
    "options": [
      "A conduta correta é providenciar o envio do corpo do macaco para exame, e o caso deve ser notificado no SINAN em até 24 horas.",
      "O SINAN engloba notificação de casos de agravos da saúde em primatas humanos, e o macaco morto deve ser encaminhado para o setor de zoonoses.",
      "O programa de vigilância, prevenção e controle da febre amarela tem como principal objetivo eliminar os vetores, e não analisar eventuais hospedeiros, como é o caso.",
      "O corpo do macaco deve ser analisado, pois há muitos casos de febre amarela urbana nos últimos 10 anos no Brasil."
    ],
    "correctAnswer": 0,
    "explanation": "Morte de macaco (primata não humano) em área com circulação do vírus é uma epizootia, sinal de alerta para circulação do vírus da febre amarela silvestre, porque os macacos adoecem antes ou junto com os humanos (são sentinelas). A epizootia em primatas é de notificação compulsória imediata (até 24 horas) no SINAN, e devem ser colhidas amostras do animal para diagnóstico laboratorial.\n\nA notificação desencadeia investigação e intensificação da vacinação na área.",
    "commentary": "SINAN só para primatas humanos (B): o SINAN tem ficha própria para epizootias e recebe notificação de morte de primatas não humanos; o corpo vai para análise pela vigilância, não apenas para descarte pela zoonose.\n\nObjetivo de eliminar vetores (C): o programa tem como objetivo reduzir a incidência e evitar casos humanos, e a vigilância de epizootias é um dos seus pilares.\n\nFebre amarela urbana recente (D): não há casos de febre amarela urbana (transmitida pelo Aedes aegypti) no Brasil desde 1942; os surtos recentes foram silvestres.",
    "tip": "Macaco morto em área de risco = epizootia → notificação imediata (24 h) e coleta de amostras. Os macacos são sentinelas, não transmissores.",
    "reference": "Ministério da Saúde. Guia de Vigilância de Epizootias em Primatas Não Humanos e Entomologia Aplicada à Vigilância da Febre Amarela, 2ª ed., 2017. Guia de Vigilância em Saúde, 2023.",
    "tags": [
      "febre amarela",
      "epizootia",
      "notificação compulsória"
    ]
  },
  {
    "id": "famema2025-69",
    "topography": "8",
    "topic": "Diabetes mellitus tipo 1 e 2",
    "module": "Saúde Coletiva",
    "text": "João tem 23 anos de idade e é usuário de uma UBS. Não apresenta quaisquer sintomas, mas, como estuda e trabalha, o tempo acaba sendo escasso para que possa se exercitar fisicamente de forma regular. Seu pai é diabético desde os 38 anos de idade.\n\nCom base na situação hipotética, é correto solicitar",
    "options": [
      "hemoglobina glicada, e João deve ser orientado a ter hábitos saudáveis, com encaminhamento para um endocrinologista.",
      "glicemia de jejum, e João deve ser orientado quanto à importância de ter hábitos saudáveis.",
      "teste de tolerância à glicose com sobrecarga de 75 g em duas horas, e João deve receber orientações para perder peso.",
      "glicemia de jejum e teste de tolerância à glicose com sobrecarga de 75 g em duas horas, e João deve ser orientado a fortalecer a musculatura."
    ],
    "correctAnswer": 1,
    "explanation": "João tem 23 anos, é sedentário e tem pai diabético (parente de 1º grau). A banca considerou que esses fatores justificam rastrear diabetes, com o exame mais simples e barato da atenção primária (glicemia de jejum), junto com orientação de hábitos de vida saudáveis, que é a intervenção mais importante.\n\nNas diretrizes, o rastreamento em menores de 35 anos é indicado para quem tem sobrepeso/obesidade e ao menos um fator de risco; o enunciado não informa o IMC, mas entre as opções a B é a conduta mais adequada para a atenção primária.",
    "commentary": "HbA1c e encaminhamento ao endocrinologista (A): o rastreamento e a prevenção são feitos na atenção primária; não há motivo para encaminhar um jovem assintomático.\n\nTOTG e orientação para perder peso (C): o TOTG não é o exame inicial de rastreamento na UBS e não há dado de excesso de peso.\n\nGlicemia + TOTG e fortalecer a musculatura (D): pedir os dois exames de início é desnecessário, e a orientação deve ser ampla (alimentação e atividade física), não apenas fortalecimento muscular.",
    "tip": "Rastreamento de DM2: todos a partir dos 35 anos; antes disso, se sobrepeso + fator de risco (pai/mãe diabético, sedentarismo, HAS, dislipidemia).",
    "reference": "Sociedade Brasileira de Diabetes. Diretriz 2024 – Rastreamento do diabetes tipo 2. Ministério da Saúde. Caderno de Atenção Básica nº 36 – Diabetes Mellitus, 2013.",
    "tags": [
      "diabetes mellitus tipo 2",
      "rastreamento",
      "atenção primária"
    ]
  },
  {
    "id": "famema2025-70",
    "topography": "15",
    "topic": "Imunização",
    "module": "Pediatria",
    "text": "Assinale a alternativa correta a respeito do calendário nacional de vacinação infantil.",
    "options": [
      "A primeira dose de vacina de febre amarela está prevista somente para quando a criança tiver 7 anos de idade.",
      "Uma das vacinas que a criança deverá tomar aos 5 anos de idade é a primeira dose de vacina pneumocócica 23-valente (Pneumo 23).",
      "Uma das vacinas que a criança deverá tomar aos 5 anos de idade é a primeira dose da vacina rotavírus humano G1P1 [8] (atenuada) – (VRH).",
      "Uma das vacinas a serem tomadas pela criança aos 5 anos de idade é a primeira dose da vacina HPV Papilomavírus humano 6, 11, 16 e 18 (HPV4 – recombinante)."
    ],
    "correctAnswer": 1,
    "explanation": "No Calendário Nacional de Vacinação, a vacina pneumocócica 23-valente aparece aos 5 anos de idade para a população indígena (uma dose, seguida de reforço). Para as demais crianças, ela é aplicada pelo CRIE em condições clínicas especiais. Entre as opções, é a única que corresponde a uma recomendação do calendário.",
    "commentary": "Primeira dose de febre amarela aos 7 anos (A): a primeira dose é aos 9 meses, com reforço aos 4 anos.\n\nRotavírus aos 5 anos (C): a vacina é dada aos 2 e 4 meses; a 1ª dose só pode ser aplicada até 3 meses e 15 dias e a 2ª até 7 meses e 29 dias, pelo risco de intussuscepção.\n\nHPV aos 5 anos (D): a vacina é feita dos 9 aos 14 anos (hoje em dose única).",
    "alert": "Gabarito discutível: a Pneumo 23 aos 5 anos só faz parte do calendário para a população indígena; a alternativa não traz essa ressalva, mas é a única que se aproxima do calendário oficial.",
    "tip": "Pneumo 23 no calendário: indígenas a partir dos 5 anos e idosos acamados/institucionalizados; demais grupos de risco pelo CRIE.",
    "reference": "Ministério da Saúde. Calendário Nacional de Vacinação – Criança e Povos Indígenas, 2025. Instrução Normativa do Calendário Nacional de Vacinação, 2024.",
    "tags": [
      "calendário vacinal",
      "vacina pneumocócica 23-valente",
      "imunização"
    ]
  },
  {
    "id": "famema2025-71",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "No SUS, o planejamento da saúde é ascendente e integrado, do nível local até o federal, ouvidos os respectivos Conselhos de Saúde, compatibilizando-se as necessidades das políticas de saúde com a disponibilidade de recursos financeiros.\n\nCom base nesse contexto, assinale a alternativa correta.",
    "options": [
      "O planejamento da saúde em âmbito estadual deve ser realizado de maneira regionalizada, a partir das determinações do Ministério da Saúde, considerando o estabelecimento de metas de saúde.",
      "O planejamento da saúde é obrigatório para os municípios com mais de 100 mil habitantes e facultativo para os demais e deve ser seguido pelos serviços da iniciativa privada.",
      "O Ministério da Saúde deve estabelecer as diretrizes a serem seguidas na elaboração dos planos de saúde, de acordo com as características epidemiológicas e da organização de serviços nos entes federativos e nas Regiões de Saúde.",
      "A compatibilização mencionada no enunciado deve ser efetuada no âmbito dos planos de saúde, os quais são resultado do planejamento integrado dos entes federativos, e devem conter metas de saúde."
    ],
    "correctAnswer": 3,
    "explanation": "A Lei 8.080/1990 (art. 36) define que o planejamento do SUS é ascendente, do nível local ao federal, ouvidos os conselhos de saúde, compatibilizando as necessidades da política de saúde com a disponibilidade de recursos nos planos de saúde de cada esfera. O Decreto 7.508/2011 reforça que o planejamento é integrado entre os entes e que os planos de saúde devem conter metas.\n\nPortanto, a compatibilização é feita nos planos de saúde, que resultam do planejamento integrado e trazem metas de saúde.",
    "commentary": "Planejamento estadual a partir das determinações do Ministério (A): o planejamento é ascendente, partindo das necessidades locais e regionais, não de determinações federais de cima para baixo.\n\nObrigatório só para municípios com mais de 100 mil habitantes (B): o planejamento é obrigatório para todos os entes públicos e apenas indicativo para a iniciativa privada.\n\nMinistério estabelece as diretrizes (C): pela Lei 8.080 (art. 37), é o Conselho Nacional de Saúde quem estabelece as diretrizes para a elaboração dos planos de saúde.",
    "tip": "Planejamento do SUS: ascendente, integrado, obrigatório para os entes públicos e indicativo para o privado. Diretrizes dos planos: Conselho Nacional de Saúde.",
    "reference": "Brasil. Lei 8.080/1990, arts. 36 e 37. Decreto 7.508/2011, arts. 15 a 19.",
    "tags": [
      "planejamento em saúde",
      "SUS",
      "lei 8.080"
    ]
  },
  {
    "id": "famema2025-72",
    "topography": "15",
    "topic": "Saúde da mulher",
    "module": "Saúde Coletiva",
    "text": "Assinale a alternativa correta sobre a Política Nacional de Atenção Integral à Saúde da Mulher (PNAISM).",
    "options": [
      "Há uma tendência atual de priorizar a implementação de ações no âmbito da atenção especializada que contribuam para um aprimoramento do pré-natal, do parto e do puerpério, já que a Atenção Primária da Saúde (APS) tem se mostrado insuficiente.",
      "O fundamento da PNAISM é de que a saúde da mulher limita-se à saúde materna ou à ausência de enfermidade associada ao processo de reprodução biológica, pois a Constituição Federal protege especialmente a infância e a maternidade.",
      "A PNAISM tem como fundamento a concepção de que as mulheres têm necessidades que extrapolam o momento da gestação e do parto, o que demanda ações que lhes proporcionem a melhoria das condições de saúde em todos os ciclos de vida.",
      "Ações públicas de atenção à saúde da mulher no Brasil tiveram início em 2010, com foco em educação, prevenção, diagnóstico precoce de doenças do aparelho reprodutor, tratamento e orientações no planejamento familiar."
    ],
    "correctAnswer": 2,
    "explanation": "A Política Nacional de Atenção Integral à Saúde da Mulher (PNAISM, 2004) parte da ideia de que a saúde da mulher vai além da gestação e do parto. Ela propõe atenção em todos os ciclos de vida, com perspectiva de gênero e de direitos sexuais e reprodutivos, incluindo climatério, violência, saúde mental, doenças crônicas, cânceres e populações específicas (negras, indígenas, lésbicas, trabalhadoras rurais, em situação de prisão).",
    "commentary": "Priorizar a atenção especializada (A): a política valoriza a atenção primária como porta de entrada e coordenadora do cuidado.\n\nSaúde da mulher limitada à saúde materna (B): é justamente a visão materno-infantil que a PNAISM supera.\n\nAções iniciadas em 2010 (D): as primeiras ações datam das décadas de 1930–1970 (programas materno-infantis), o PAISM é de 1984 e a PNAISM, de 2004.",
    "tip": "PAISM (1984) → PNAISM (2004): saúde da mulher em todos os ciclos de vida, não só no ciclo gravídico-puerperal.",
    "reference": "Ministério da Saúde. Política Nacional de Atenção Integral à Saúde da Mulher: princípios e diretrizes, 2004.",
    "tags": [
      "saúde da mulher",
      "PNAISM",
      "políticas de saúde"
    ]
  },
  {
    "id": "famema2025-73",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Em um município, forma-se um movimento de pequenos agricultores com o objetivo de buscar subsídios para o cultivo sem agrotóxicos. O prefeito decide mobilizar recursos para que os agricultores recebam orientações para esse cultivo e passa a adquirir alimentos desses agricultores para as escolas e as creches, além de promover feiras regionais onde os produtos possam ser vendidos diretamente ao consumidor.\n\nCom base na situação hipotética, assinale a alternativa correta sobre ações adequadas que poderiam ser desenvolvidas pelo setor da Saúde para contribuir com a iniciativa.",
    "options": [
      "Capacitar todos os profissionais da UBS sobre os benefícios dos alimentos orgânicos para que as ações de saúde incorporem o conhecimento adquirido.",
      "A iniciativa do prefeito não tem relação direta com ações de saúde.",
      "Indicar alguns endocrinologistas do SUS como referências para darem aulas noturnas à população sobre doenças relacionadas ao alimento com agrotóxicos.",
      "Contratar toxicologistas para prepararem aulas gravadas acessíveis à população para que informações científicas sejam disseminadas."
    ],
    "correctAnswer": 0,
    "explanation": "A iniciativa (agricultura sem agrotóxicos, compra para a alimentação escolar e feiras de venda direta) é um exemplo de ação intersetorial de promoção da saúde e de segurança alimentar e nutricional. O papel do setor saúde é se integrar a ela, sobretudo pela atenção primária: capacitar as equipes da UBS sobre alimentação saudável e alimentos sem agrotóxicos, para que esse conhecimento entre nas ações cotidianas (consultas, grupos, Programa Saúde na Escola), em linha com o Guia Alimentar para a População Brasileira.",
    "commentary": "Sem relação com a saúde (B): alimentação adequada e redução da exposição a agrotóxicos são determinantes de saúde; a Política Nacional de Promoção da Saúde valoriza ações intersetoriais como essa.\n\nEndocrinologistas dando aulas noturnas (C): concentra a ação em especialistas e em formato pouco acessível, sem envolver a atenção primária e o território.\n\nContratar toxicologistas para aulas gravadas (D): ação vertical, cara e desvinculada das equipes que acompanham a população.",
    "tip": "Promoção da saúde = intersetorialidade + participação social + atenção primária no território.",
    "reference": "Ministério da Saúde. Política Nacional de Promoção da Saúde (PNPS), revisão 2014. Guia Alimentar para a População Brasileira, 2ª ed., 2014.",
    "tags": [
      "promoção da saúde",
      "intersetorialidade",
      "alimentação saudável"
    ]
  },
  {
    "id": "famema2025-74",
    "topography": "15",
    "topic": "Saúde do trabalhador",
    "module": "Saúde Coletiva",
    "text": "A Rede Nacional de Atenção Integral à Saúde do Trabalhador e da Trabalhadora (RENASTT), no contexto da Rede de Atenção à Saúde, prevê ações junto à APS. Assinale a alternativa que apresenta corretamente algumas dessas ações.",
    "options": [
      "Aplicação de multas às empresas sob vigilância da APS que não corrigirem as condições inadequadas de trabalho e acolhimento dos trabalhadores com suspeitas de doenças relacionadas ao trabalho.",
      "Reconhecimento e mapeamento das atividades produtivas no território e realização de exames admissionais e periódicos de 6 em 6 meses em trabalhadores e trabalhadoras do mercado formal da área de abrangência da UBS.",
      "Reconhecimento e identificação da população trabalhadora e seu perfil sócio-ocupacional no território e identificação da rede de apoio social aos trabalhadores e trabalhadoras no território.",
      "Incorporação de conteúdos de saúde do trabalhador nas estratégias de capacitação e de educação permanente para as equipes da atenção primária em saúde e fiscalização dos processos de trabalho realizados nos domicílios."
    ],
    "correctAnswer": 2,
    "explanation": "Na RENAST, a atenção primária tem papel central na vigilância em saúde do trabalhador no território: reconhecer e identificar a população trabalhadora e seu perfil sócio-ocupacional, mapear as atividades produtivas e seus riscos, identificar a rede de apoio social aos trabalhadores, acolher e investigar suspeitas de doenças relacionadas ao trabalho e notificar agravos.",
    "commentary": "Aplicar multas (A): a APS não tem poder de fiscalização e multa; isso cabe à vigilância sanitária e ao Ministério do Trabalho.\n\nExames admissionais e periódicos semestrais (B): exames ocupacionais são responsabilidade do empregador (PCMSO), não da UBS.\n\nFiscalizar processos de trabalho em domicílios (D): a educação permanente está correta, mas fiscalizar não é atribuição da APS.",
    "tip": "APS na saúde do trabalhador: conhecer quem trabalha e em quê no território, acolher, investigar a relação com o trabalho e notificar. Não fiscaliza nem faz exame ocupacional.",
    "reference": "Ministério da Saúde. Política Nacional de Saúde do Trabalhador e da Trabalhadora (Portaria nº 1.823/2012). Caderno de Atenção Básica nº 41 – Saúde do Trabalhador e da Trabalhadora, 2018.",
    "tags": [
      "saúde do trabalhador",
      "RENAST",
      "atenção primária"
    ]
  },
  {
    "id": "famema2025-75",
    "topography": "2.1",
    "topic": "Tabagismo",
    "module": "Saúde Coletiva",
    "text": "Assinale a alternativa correta sobre o tratamento não medicamentoso com base no Protocolo Clínico e Diretrizes Terapêuticas do Tabagismo.",
    "options": [
      "Inclui diferentes etapas que visam à conquista da vida sem tabaco, entre as quais estão as sessões de psicoterapia, o uso do cigarro eletrônico durante 2 meses e os encontros entre tabagistas em fase de tratamento.",
      "Inclui o aconselhamento estruturado com 4 sessões iniciais que abrangem entender por que se fuma e como isso afeta a saúde, os primeiros dias sem fumar, como vencer os obstáculos para permanecer sem fumar e os benefícios obtidos após parar de fumar.",
      "Entre os casos elegíveis para o tratamento sem o uso de medicamentos, estão aqueles que têm poucos sintomas de abstinência e consumo do primeiro cigarro do dia igual ou inferior a 1 hora após acordar.",
      "O tratamento do tabagismo pode ser realizado em qualquer nível de atenção do SUS, preferencialmente pela rede de serviços especializados."
    ],
    "correctAnswer": 1,
    "explanation": "Pelo Protocolo Clínico e Diretrizes Terapêuticas do Tabagismo, a abordagem intensiva (cognitivo-comportamental) é feita em grupo ou individualmente, com 4 sessões estruturadas iniciais, em geral semanais: 1) entender por que se fuma e como isso afeta a saúde; 2) os primeiros dias sem fumar; 3) como vencer os obstáculos para permanecer sem fumar; 4) benefícios obtidos após parar de fumar. Seguem-se sessões de manutenção.",
    "commentary": "Cigarro eletrônico por 2 meses (A): o cigarro eletrônico é proibido no Brasil (Anvisa) e não faz parte do tratamento.\n\nPrimeiro cigarro em até 1 hora após acordar (C): fumar o primeiro cigarro nos primeiros 30 minutos após acordar indica alta dependência e favorece o uso de medicamentos; tratamento sem medicamento é para quem tem baixa dependência.\n\nPreferencialmente na rede especializada (D): o tratamento é oferecido em todos os níveis, mas preferencialmente na atenção primária.",
    "tip": "Tabagismo no SUS: 4 sessões estruturadas + manutenção; medicamentos (TRN, bupropiona) para quem tem dependência maior. Preferência pela atenção primária.",
    "reference": "Ministério da Saúde/CONITEC. Protocolo Clínico e Diretrizes Terapêuticas do Tabagismo, 2020. INCA. Deixando de fumar sem mistérios – manual do coordenador.",
    "tags": [
      "tabagismo",
      "abordagem cognitivo-comportamental",
      "PCDT"
    ]
  },
  {
    "id": "famema2025-76",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "Assinale a alternativa correta sobre a reforma sanitária.",
    "options": [
      "A reforma sanitária foi fruto da reflexão consensual dos gestores da saúde da década de 1970 sobre a baixa eficácia da assistência médica, os altos custos do modelo médico hospitalar e a baixa cobertura dos serviços de saúde em função das necessidades da população.",
      "A reforma sanitária foi decorrente fundamentalmente da insuficiência do conhecimento e da prática médica e da necessidade de incorporar as práticas de outros profissionais de saúde; tratou-se de uma constatação técnica, sem influência política.",
      "Vários autores apontam influências mútuas entre o desenvolvimento de um projeto do campo de conhecimento chamado Saúde Coletiva e os movimentos pela democratização no Brasil, especialmente o da reforma sanitária.",
      "A reforma sanitária foi amplamente acolhida pelos vários segmentos da sociedade brasileira pois baseava-se em evidências técnico-científicas sem influências ideológicas e políticas."
    ],
    "correctAnswer": 2,
    "explanation": "A reforma sanitária brasileira foi um movimento político e social, iniciado nos anos 1970, formado por profissionais de saúde, intelectuais, movimentos populares e sindicais, que lutava pela democratização do país e pelo direito à saúde. O campo da Saúde Coletiva, que se constituía nas universidades na mesma época, deu base teórica ao movimento, e o movimento deu sentido político ao campo; as influências foram mútuas.\n\nO marco foi a 8ª Conferência Nacional de Saúde (1986), cujas propostas inspiraram o capítulo da saúde na Constituição de 1988 e a criação do SUS.",
    "commentary": "Reflexão consensual dos gestores (A): o movimento nasceu da sociedade civil e da academia, em oposição ao modelo do regime militar, não de um consenso entre gestores.\n\nConstatação técnica sem influência política (B): era um projeto essencialmente político, ligado à redemocratização.\n\nAmplamente acolhida, sem ideologia (D): houve forte oposição de setores privados e conservadores; era um projeto assumidamente político e ideológico.",
    "tip": "Reforma sanitária: movimento político da sociedade civil pela democracia e pelo direito à saúde → 8ª CNS (1986) → Constituição (1988) → SUS.",
    "reference": "Paim JS. Reforma Sanitária Brasileira: contribuição para a compreensão e crítica. Edufba/Fiocruz, 2008. Escorel S. Reviravolta na saúde: origem e articulação do movimento sanitário. Fiocruz, 1999.",
    "tags": [
      "reforma sanitária",
      "saúde coletiva",
      "história do SUS"
    ]
  },
  {
    "id": "famema2025-77",
    "topography": "10",
    "topic": "Dengue",
    "module": "Saúde Coletiva",
    "text": "Chuvas mais fortes e calor intenso são previstos em decorrência de mudanças climáticas. Assinale a alternativa que apresenta corretamente casos de arboviroses relacionados ao fenômeno das mudanças climáticas.",
    "options": [
      "Oropouche, tuberculose e leptospirose.",
      "Dengue, Zika e febre amarela.",
      "Febre tifoide, febre amarela e malária.",
      "Raiva, Zika e oropouche."
    ],
    "correctAnswer": 1,
    "explanation": "Arboviroses são doenças causadas por vírus transmitidos por artrópodes, como mosquitos. Dengue, Zika e febre amarela são arboviroses transmitidas por mosquitos (Aedes e, na febre amarela silvestre, Haemagogus e Sabethes). Chuvas intensas e calor, cada vez mais frequentes com as mudanças climáticas, ampliam criadouros, aceleram o ciclo do mosquito e a replicação viral e levam as doenças para novas áreas.",
    "commentary": "Oropouche, tuberculose e leptospirose (A): oropouche é arbovirose, mas tuberculose é bacteriana de transmissão respiratória e leptospirose é bacteriana transmitida pela urina de roedores.\n\nFebre tifoide, febre amarela e malária (C): febre tifoide é bacteriana (água e alimentos) e malária é causada por protozoário.\n\nRaiva, Zika e oropouche (D): a raiva é transmitida pela mordedura de mamíferos, não por artrópodes.",
    "tip": "Arboviroses: dengue, Zika, chikungunya, febre amarela, oropouche, febre do Nilo Ocidental. Leptospirose e malária não são arboviroses.",
    "reference": "Ministério da Saúde. Guia de Vigilância em Saúde, 2023 – Arboviroses. Organização Pan-Americana da Saúde. Mudanças climáticas e saúde.",
    "tags": [
      "arboviroses",
      "mudanças climáticas",
      "dengue"
    ]
  },
  {
    "id": "famema2025-78",
    "topography": "10",
    "topic": "Infecções sexualmente transmissíveis",
    "module": "Saúde Coletiva",
    "text": "As Infecções Sexualmente Transmissíveis (IST) são causadas por vírus, bactérias ou outros microrganismos. Elas são transmitidas, principalmente, por meio do contato sexual (oral, vaginal, anal) sem o uso de camisinha masculina ou feminina, com uma pessoa que esteja infectada. A vacina seria um recurso importante para prevenir essas infecções.\n\nExiste vacina contra a seguinte IST:",
    "options": [
      "tricomoníase.",
      "sífilis.",
      "HIV.",
      "hepatite B."
    ],
    "correctAnswer": 3,
    "explanation": "Entre as IST, existem vacinas contra hepatite B e HPV. A vacina da hepatite B faz parte do calendário (ao nascer e na pentavalente aos 2, 4 e 6 meses) e está disponível no SUS para todas as idades, em 3 doses para adultos não vacinados. A hepatite B é transmitida por via sexual, sanguínea e vertical.",
    "commentary": "Tricomoníase (A): infecção por protozoário, sem vacina; trata-se com metronidazol.\n\nSífilis (B): não há vacina; a prevenção é preservativo, testagem e tratamento com penicilina benzatina.\n\nHIV (C): não há vacina eficaz disponível; a prevenção combinada inclui preservativo, PrEP, PEP e tratamento como prevenção.",
    "tip": "IST com vacina: hepatite B e HPV. (Hepatite A também pode ser sexualmente transmissível e tem vacina.)",
    "reference": "Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com IST, 2022. Calendário Nacional de Vacinação, 2025.",
    "tags": [
      "IST",
      "hepatite B",
      "vacinação"
    ]
  },
  {
    "id": "famema2025-79",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "O principal critério a ser considerado na avaliação com classificação de risco nos serviços de saúde é",
    "options": [
      "necessidade do usuário.",
      "idade.",
      "hora de chegada.",
      "diagnóstico."
    ],
    "correctAnswer": 0,
    "explanation": "O acolhimento com classificação de risco, proposto pela Política Nacional de Humanização, organiza o atendimento pela gravidade e pela necessidade do usuário, não pela ordem de chegada. Assim, quem tem maior risco ou sofrimento é atendido primeiro (protocolos como Manchester definem cores e tempos-alvo).",
    "commentary": "Idade (B): pode modificar a prioridade, mas não é o critério principal.\n\nHora de chegada (C): é justamente o critério que a classificação de risco substitui.\n\nDiagnóstico (D): a classificação é feita antes do diagnóstico, com base em sinais, sintomas e queixa principal.",
    "tip": "Classificação de risco: atende primeiro quem tem mais necessidade/gravidade, não quem chegou antes.",
    "reference": "Ministério da Saúde. Política Nacional de Humanização – Acolhimento e classificação de risco nos serviços de urgência, 2009.",
    "tags": [
      "classificação de risco",
      "acolhimento",
      "política Nacional de Humanização"
    ]
  },
  {
    "id": "famema2025-80",
    "topography": "10",
    "module": "Saúde Coletiva",
    "text": "Geo-helmintíases são doenças causadas por vermes que se desenvolvem no intestino humano e completam parte do seu ciclo de vida no solo. Com base nesse contexto, assinale a alternativa correta.",
    "options": [
      "Insetos são os principais vetores, pois carregam ovos dos geo-helmintos presentes nas fezes humanas que contaminam alimentos expostos.",
      "A “lombriga” e o “verme chicote” podem ser contraídos após a ingestão dos ovos desses parasitas, mas o principal modo de transmissão é a penetração das larvas pela pele.",
      "O “amarelão” é contraído mais frequentemente pela penetração das larvas dos vermes na pele de quem anda descalço em solo contaminado.",
      "A “lombriga” e o “amarelão” são doenças cuja transmissão se dá por penetração de larvas pela pele."
    ],
    "correctAnswer": 2,
    "explanation": "O 'amarelão' é a ancilostomíase (Ancylostoma duodenale e Necator americanus). Os ovos eliminados nas fezes eclodem no solo, as larvas se tornam infectantes (filarioides) e penetram ativamente na pele, em geral dos pés de quem anda descalço. No intestino, os vermes adultos se fixam na mucosa e sugam sangue, causando anemia ferropriva, a palidez que dá nome à doença.\n\nPrevenção: saneamento básico, uso de calçados e tratamento com albendazol.",
    "commentary": "Insetos como principais vetores (A): os geo-helmintos se transmitem pelo solo contaminado (ingestão de ovos ou penetração de larvas); insetos como moscas podem carregar ovos, mas não são os vetores principais.\n\nLombriga e verme chicote por penetração na pele (B): Ascaris lumbricoides e Trichuris trichiura são transmitidos pela ingestão de ovos em água e alimentos contaminados, não pela pele.\n\nLombriga por penetração de larvas (D): só o amarelão (e o Strongyloides) penetra pela pele; a lombriga é adquirida por via oral.",
    "tip": "Geo-helmintos: Ascaris e Trichuris = ingestão de ovos. Ancilostomídeos (amarelão) e Strongyloides = larva pela pele (andar descalço).",
    "reference": "Ministério da Saúde. Guia prático para o controle das geo-helmintíases, 2018. Neves DP. Parasitologia Humana, 13ª ed.",
    "tags": [
      "geo-helmintíases",
      "ancilostomíase",
      "parasitoses intestinais"
    ]
  },
  {
    "id": "famema2025-81",
    "topography": "13",
    "topic": "Transtornos de ansiedade",
    "module": "Clínica Médica",
    "text": "Um homem de 27 anos, sem comorbidades, relatou o seguinte evento em consulta com o clínico geral da unidade básica de saúde: estava em um shopping center tomando cerveja com os amigos, quando, de forma repentina, apresentou palpitação, \"respiração curta\", sudorese, tremores e sensação de que ia morrer. Pediu ajuda para ser levado à área externa e \"tomar ar\", pois temia estar vivenciando um \"derrame ou um ataque cardíaco”. Os sintomas duraram cerca de 15 minutos. O paciente ainda relatou que costuma ser uma pessoa tensa, principalmente em situações que requerem interação social. Ao exame físico, não foram observadas alterações.\n\nCom base nos sintomas apresentados pelo paciente, qual o diagnóstico provável?",
    "options": [
      "Episódio conversivo.",
      "Transtorno de sintomas somáticos.",
      "Transtorno de ansiedade social.",
      "Ataque de pânico."
    ],
    "correctAnswer": 3,
    "explanation": "Episódio súbito de medo intenso com palpitação, falta de ar, sudorese, tremores e sensação de morte iminente, que atinge o pico em minutos e dura cerca de 15 minutos, em jovem sem doença física: ataque de pânico. Pelo DSM-5-TR, o ataque tem pico em minutos e ao menos 4 de 13 sintomas físicos ou cognitivos.\n\nO ataque de pânico pode ocorrer isolado ou em vários transtornos (como ansiedade social). Só se fala em transtorno de pânico se houver ataques recorrentes e inesperados seguidos de ao menos 1 mês de preocupação ou mudança de comportamento. A tensão em situações sociais merece investigação de ansiedade social, mas o evento descrito é um ataque de pânico.",
    "commentary": "Episódio conversivo (A): envolve sintomas neurológicos (paralisia, cegueira, crises não epilépticas) incompatíveis com doença neurológica, não um surto autonômico de medo.\n\nTranstorno de sintomas somáticos (B): preocupação excessiva e persistente (mais de 6 meses) com sintomas físicos, não uma crise aguda.\n\nAnsiedade social (C): medo de avaliação negativa em situações sociais; o paciente refere tensão social, mas a pergunta é sobre os sintomas apresentados, que configuram ataque de pânico.",
    "tip": "Ataque de pânico: medo intenso com pico em minutos, sintomas autonômicos e medo de morrer/enlouquecer. Transtorno de pânico: ataques recorrentes + 1 mês de preocupação.",
    "reference": "American Psychiatric Association. DSM-5-TR, 2022. Associação Brasileira de Psiquiatria. Diretrizes para o diagnóstico e tratamento do transtorno de pânico.",
    "tags": [
      "ataque de pânico",
      "transtornos de ansiedade",
      "DSM-5-TR"
    ]
  },
  {
    "id": "famema2025-82",
    "topography": "13",
    "topic": "Depressão maior",
    "module": "Clínica Médica",
    "text": "Os transtornos depressivos são quadros prevalentes em serviços médicos ambulatoriais. Para estabelecer o diagnóstico de episódio depressivo maior, além da duração mínima de 2 semanas de história, é preciso que ao menos um dos dois sintomas principais esteja presente.\n\nUm desses sintomas principais é humor deprimido, e o outro é",
    "options": [
      "alteração de apetite ou peso.",
      "sentimento de culpa e desvalia.",
      "perda de interesse ou de prazer em atividades (anedonia).",
      "aumento da energia."
    ],
    "correctAnswer": 2,
    "explanation": "Pelo DSM-5-TR, o episódio depressivo maior exige pelo menos 5 sintomas por 2 semanas, com prejuízo, e pelo menos um deles deve ser humor deprimido ou perda de interesse ou prazer nas atividades (anedonia). Os demais sintomas são alteração de apetite/peso, alteração do sono, agitação ou retardo psicomotor, fadiga, culpa/desvalia, dificuldade de concentração e pensamentos de morte ou suicídio.",
    "commentary": "Alteração de apetite ou peso (A): é um dos sintomas acessórios, não um dos sintomas principais.\n\nCulpa e desvalia (B): também é sintoma acessório.\n\nAumento da energia (D): é característico de mania ou hipomania; na depressão há fadiga ou perda de energia.",
    "tip": "Depressão maior: ≥ 5 sintomas por ≥ 2 semanas, sendo obrigatório humor deprimido ou anedonia.",
    "reference": "American Psychiatric Association. DSM-5-TR, 2022.",
    "tags": [
      "depressão maior",
      "anedonia",
      "DSM-5-TR"
    ]
  },
  {
    "id": "famema2025-83",
    "topography": "13",
    "module": "Pediatria",
    "text": "Maria, uma menina de 5 anos, foi levada ao pediatra por sua mãe devido a preocupações com seu comportamento e a dificuldades na interação com os colegas da escola. Segundo a mãe, desde os 4 anos, Maria tem apresentado um comportamento desordenado tanto em casa quanto na escola. Ela demonstra grande interesse por atividades lúdicas, mas não consegue organizar seus brinquedos, frequentemente os deixando espalhados. Além disso, parece não prestar atenção quando alguém fala diretamente com ela, costuma esquecer objetos pessoais e tem dificuldade em seguir orientações. Ela encontra dificuldades em esperar sua vez em jogos ou atividades em grupo e frequentemente interrompe conversas alheias. Sua avó, a quem era bastante ligada, faleceu há cerca de 1 ano. Os sintomas persistem há mais de 10 meses e resultam em dificuldades na escola, conflitos com os colegas e brigas em casa. Durante a consulta, Maria ficou inquieta o tempo todo, movendo-se na cadeira, pegando os pertences na mesa do pediatra e levantando-se em momentos em que deveria permanecer sentada. Chegou a tentar correr em situações inadequadas, como dentro da sala de consulta. Ao exame físico, aparenta estar saudável, sem anormalidades físicas evidentes. É uma criança muito ativa e agitada, que constantemente se movia e conversava com a mãe na sala de exames.\n\nAssinale a alternativa correta sobre o diagnóstico correto da paciente.",
    "options": [
      "Transtorno de oposição e desafio.",
      "Transtorno de déficit de atenção e hiperatividade.",
      "Transtorno disruptivo de desregulação emocional.",
      "Transtorno do espectro autista."
    ],
    "correctAnswer": 1,
    "explanation": "Menina de 5 anos com desatenção (não organiza os brinquedos, parece não ouvir, esquece objetos, não segue instruções) e com hiperatividade/impulsividade (não espera a vez, interrompe, inquieta, levanta e corre em situações inadequadas), há mais de 6 meses, em casa e na escola, com prejuízo: TDAH, apresentação combinada.\n\nA morte da avó há 1 ano é um distrator; o luto não explica sintomas tão globais e persistentes, presentes em mais de um ambiente.",
    "commentary": "Transtorno de oposição desafiante (A): padrão de irritabilidade, discussões, desafio a regras e comportamento vingativo com figuras de autoridade, o que não é descrito.\n\nTranstorno disruptivo da desregulação do humor (C): explosões de raiva graves e frequentes com humor irritável persistente entre elas; o diagnóstico só é feito entre 6 e 18 anos.\n\nTranstorno do espectro autista (D): déficits na comunicação e interação social e comportamentos restritos e repetitivos; a menina interage, conversa e tem interesse por brincadeiras.",
    "tip": "TDAH: desatenção e/ou hiperatividade-impulsividade por ≥ 6 meses, antes dos 12 anos, em ≥ 2 ambientes, com prejuízo.",
    "reference": "American Psychiatric Association. DSM-5-TR, 2022. Sociedade Brasileira de Pediatria. Transtorno do déficit de atenção e hiperatividade – documento científico, 2022.",
    "tags": [
      "TDAH",
      "hiperatividade",
      "pediatria"
    ]
  },
  {
    "id": "famema2025-84",
    "topography": "12",
    "topic": "Delirium",
    "module": "Clínica Médica",
    "text": "Uma senhora de 79 anos, com histórico de diabetes mellitus tipo 2, passou por cirurgia para reparação e fixação de uma fratura na coluna vertebral. No segundo dia do pós-operatório, ela começou a apresentar desorientação e confusão mental, chamando as enfermeiras pelo nome das filhas e achando que estava na cozinha de casa. Estava com temperatura de 38,1 °C. À noite, ela ficou agitada e relatou estar enxergando bichos rastejantes na parede. Gritou repetidamente e gemeu a noite toda (\"Meu Deus, me tire daqui... Meu Deus, me tire daqui...\"), sem conseguir dormir ou deixar os outros pacientes descansarem. Durante a visita diurna com o médico assistente, a paciente apresentou-se calma, lúcida e orientada, conversou tranquilamente, perguntou sobre o seu gato de estimação e a sua própria alta hospitalar. Porém, de noite, apresentou novamente o quadro de confusão e agitação.\n\nQual é o diagnóstico psiquiátrico provável?",
    "options": [
      "Transtorno neurocognitivo, demência tipo Alzheimer.",
      "Delirium pós-operatório.",
      "Transtorno de estresse pós-traumático.",
      "Esquizofrenia ou outros transtornos psicóticos."
    ],
    "correctAnswer": 1,
    "explanation": "Idosa no 2º dia após cirurgia, com desorientação de início agudo, alucinações visuais, agitação noturna, febre e flutuação do quadro (lúcida e orientada de dia, confusa à noite): delirium pós-operatório. O delirium é uma síndrome aguda de alteração da atenção e da consciência, flutuante, causada por uma condição médica (aqui, febre sugerindo infecção, dor, medicamentos, distúrbios metabólicos).\n\nA conduta é investigar e tratar a causa, com medidas não farmacológicas (orientação, óculos e aparelhos auditivos, sono preservado, mobilização, presença da família); antipsicótico em dose baixa só para agitação com risco.",
    "commentary": "Demência de Alzheimer (A): começa de forma insidiosa e progride ao longo de anos; não surge em dois dias nem flutua com lucidez completa.\n\nEstresse pós-traumático (C): exige exposição a trauma e sintomas por mais de 1 mês (revivescência, evitação, hipervigilância).\n\nEsquizofrenia (D): costuma começar no adulto jovem e não há alteração de consciência e atenção; alucinações visuais com flutuação e febre sugerem causa orgânica.",
    "tip": "Delirium: início agudo + flutuação + déficit de atenção (CAM). Sempre procurar a causa (infecção, drogas, dor, retenção urinária, distúrbios metabólicos).",
    "reference": "American Geriatrics Society. Clinical Practice Guideline for Postoperative Delirium in Older Adults. J Am Geriatr Soc, 2015. Inouye SK et al. Delirium in elderly people. Lancet, 2014.",
    "tags": [
      "delirium",
      "pós-operatório",
      "idoso"
    ]
  },
  {
    "id": "famema2025-85",
    "topography": "13",
    "topic": "Dependência química",
    "module": "Clínica Médica",
    "text": "Assinale a alternativa que apresenta corretamente substâncias com efeito estimulante no sistema nervoso central (SNC).",
    "options": [
      "Álcool e benzodiazepínicos.",
      "Heroína e opiáceos.",
      "Ácido lisérgico (LSD) e psilocibina (cogumelos mágicos).",
      "Cocaína, crack, metanfetamina (cristal) e derivados."
    ],
    "correctAnswer": 3,
    "explanation": "Estimulantes do sistema nervoso central aumentam a atividade cerebral, sobretudo pela ação na dopamina e na noradrenalina: cocaína (inclusive na forma de crack), anfetaminas e metanfetamina, além de nicotina e cafeína. Causam euforia, agitação, insônia, taquicardia, hipertensão e midríase; em excesso, psicose, convulsões, arritmias, IAM e AVC.",
    "commentary": "Álcool e benzodiazepínicos (A): são depressores do SNC (agem no receptor GABA-A).\n\nHeroína e opiáceos (B): também são depressores, com sedação, miose e depressão respiratória.\n\nLSD e psilocibina (C): são perturbadores ou alucinógenos, agindo sobretudo em receptores de serotonina (5-HT2A).",
    "tip": "Drogas: depressoras (álcool, benzodiazepínicos, opioides), estimulantes (cocaína, crack, anfetaminas) e perturbadoras (LSD, psilocibina, maconha).",
    "reference": "Secretaria Nacional de Políticas sobre Drogas (SENAD). Livreto informativo sobre drogas psicotrópicas, 2017. Diehl A et al. Dependência química: prevenção, tratamento e políticas públicas, 2ª ed.",
    "tags": [
      "drogas psicoativas",
      "estimulantes",
      "cocaína"
    ]
  },
  {
    "id": "famema2025-86",
    "topography": "13",
    "topic": "Transtornos alimentares",
    "module": "Clínica Médica",
    "text": "Moça de 21 anos, em consulta com o proctologista, queixa-se de dor lancinante na região do reto e de sangramento baixo. A paciente relata que sempre esteve acima do peso e que se submeteu à lipoaspiração há 2 anos, pois tinha vergonha do tamanho do próprio braço, o que a impedia de vestir camisetas sem mangas em dias quentes. Bastante preocupada com a sua forma física, costuma gastar horas fazendo exercícios aeróbicos na academia. Aspira a ser uma pessoa saudável e quer correr a maratona de São Silvestre. A paciente evita se alimentar na frente de familiares e amigas, pois costuma comer muito rápido e em grande quantidade. Muitas vezes passa mal após uma refeição farta e chega a provocar vômitos com os dedos. O seu índice de massa corpórea atual é 19 kg/m². Orientada de forma online por uma amiga, passou a comprar medicação laxante em grande quantidade por temor de constipação intestinal recorrente. Estocou os laxativos e passou a consumir a medicação secretamente. Há 3 meses, toma diariamente o laxante, pelo menos 2 comprimidos ao dia, e relata que o seu hábito intestinal passou a ser bastante frequente, por vezes com fezes aquosas. Há 2 semanas, começou a sentir dores ao evacuar. Ao exame clínico da região afetada, revelou-se uma lesão compatível com fissura na região de reto.\n\nCom base no caso hipotético, é correto afirmar que o diagnóstico provável dessa paciente é",
    "options": [
      "transtorno de ruminação alimentar.",
      "transtorno de compulsão alimentar.",
      "bulimia nervosa.",
      "anorexia nervosa."
    ],
    "correctAnswer": 2,
    "explanation": "Jovem com episódios de compulsão alimentar (come muito, rápido, escondida) seguidos de comportamentos compensatórios (vômitos provocados, abuso de laxantes, exercício excessivo), preocupação exagerada com o corpo e peso normal (IMC 19): bulimia nervosa. Pelo DSM-5-TR, compulsões e compensações ocorrem ao menos uma vez por semana por 3 meses, e a autoavaliação é muito influenciada pelo peso e pela forma corporal.\n\nO uso abusivo de laxantes explica a diarreia e a fissura anal.",
    "commentary": "Transtorno de ruminação (A): regurgitação repetida do alimento, que é remastigado, deglutido de novo ou cuspido, sem preocupação com o peso.\n\nTranstorno de compulsão alimentar (B): há compulsões, mas sem comportamentos compensatórios regulares; costuma levar a sobrepeso.\n\nAnorexia nervosa (D): exige peso significativamente baixo (IMC < 18,5); a paciente tem peso normal.",
    "tip": "Compulsão + compensação: peso normal = bulimia; peso baixo = anorexia tipo compulsão/purgação. Compulsão sem compensação = transtorno de compulsão alimentar.",
    "reference": "American Psychiatric Association. DSM-5-TR, 2022. Associação Brasileira de Psiquiatria. Diretrizes para o tratamento dos transtornos alimentares.",
    "tags": [
      "bulimia nervosa",
      "transtornos alimentares",
      "laxantes"
    ]
  },
  {
    "id": "famema2025-87",
    "topography": "5.2",
    "topic": "Puerpério",
    "module": "Ginecologia e Obstetrícia",
    "text": "Assinale a alternativa que descreve corretamente diferenças entre disforia puerperal e depressão puerperal.",
    "options": [
      "A disforia puerperal é caracterizada por uma condição emocional transitória e breve limitada às primeiras semanas após o trabalho de parto, enquanto a depressão puerperal envolve sintomas persistentes que afetam a funcionalidade da mãe ao longo de semanas ou meses.",
      "A disforia puerperal é um estado emocional crônico que pode durar meses, enquanto a depressão puerperal é uma condição transitória que aparece em resposta a estressores específicos relacionados ao cuidado do recém-nascido.",
      "A disforia puerperal está associada a alterações hormonais, enquanto a depressão puerperal é desencadeada por fatores psicológicos, sociais e ambientais.",
      "A disforia puerperal é diagnosticada quando há presença de sintomas psicóticos, enquanto a depressão puerperal pode ocorrer independentemente de sintomas psicóticos."
    ],
    "correctAnswer": 0,
    "explanation": "A disforia puerperal (baby blues) é muito comum (até 50–80% das puérperas): choro fácil, labilidade emocional, irritabilidade e ansiedade que começam nos primeiros dias após o parto, têm pico por volta do 5º dia e desaparecem em até 2 semanas, sem prejuízo importante. Conduta: acolhimento e apoio.\n\nA depressão pós-parto (10–15%) tem sintomas depressivos persistentes por mais de 2 semanas, que comprometem o cuidado com o bebê e com si mesma, e exige tratamento.",
    "commentary": "Disforia crônica e depressão transitória (B): é o oposto; a disforia é breve e a depressão é persistente.\n\nDisforia hormonal e depressão psicossocial (C): as duas têm causas multifatoriais, incluindo a queda hormonal pós-parto e fatores psicológicos e sociais.\n\nDisforia com sintomas psicóticos (D): sintomas psicóticos no puerpério indicam psicose puerperal, uma emergência; a disforia não tem psicose.",
    "tip": "Puerpério: blues (dias, some em 2 semanas) → depressão pós-parto (> 2 semanas, prejuízo) → psicose puerperal (emergência, risco de infanticídio).",
    "reference": "Ministério da Saúde. Caderno de Atenção Básica nº 32 – Atenção ao Pré-natal de Baixo Risco, 2013. FEBRASGO. Transtornos psiquiátricos no puerpério.",
    "tags": [
      "disforia puerperal",
      "depressão pós-parto",
      "puerpério"
    ]
  },
  {
    "id": "famema2025-88",
    "topography": "13",
    "topic": "Depressão maior",
    "module": "Saúde Coletiva",
    "text": "Assinale a alternativa que apresenta corretamente uma medida de prevenção primária de transtornos depressivos na população geral.",
    "options": [
      "Prescrição de medicamentos antidepressivos para a população diagnosticada com depressão.",
      "Fortalecimento das redes sociais da comunidade, com promoção de programas de atividade física e incentivo ao engajamento em atividades sociais.",
      "Criação de espaços de convivência isolados, com foco na reabilitação de indivíduos em tratamento e na prevenção de recaídas.",
      "Implementação de grupos de autoajuda para transtornos depressivos."
    ],
    "correctAnswer": 1,
    "explanation": "A prevenção primária atua antes de a doença aparecer, reduzindo fatores de risco e fortalecendo fatores de proteção na população geral. Para depressão, isso inclui fortalecer as redes sociais e comunitárias, estimular atividade física e engajamento em atividades sociais, combatendo isolamento, sedentarismo e solidão.",
    "commentary": "Antidepressivos para quem tem depressão (A): é tratamento da doença já instalada (prevenção secundária).\n\nEspaços de convivência para reabilitação e prevenção de recaídas (C): atua em quem já adoeceu (prevenção terciária), e 'isolados' contraria a lógica de inclusão.\n\nGrupos de autoajuda para transtornos depressivos (D): voltados a quem já tem o transtorno, portanto não são prevenção primária.",
    "tip": "Prevenção primária: antes da doença (promoção e proteção). Secundária: diagnóstico e tratamento precoces. Terciária: reabilitação e prevenção de recaídas.",
    "reference": "World Health Organization. Prevention of mental disorders: effective interventions and policy options, 2004. Leavell H, Clark EG. Medicina Preventiva, 1976.",
    "tags": [
      "prevenção primária",
      "depressão",
      "saúde mental"
    ]
  },
  {
    "id": "famema2025-89",
    "topography": "15",
    "topic": "Estratégia Saúde da Família",
    "module": "Saúde Coletiva",
    "text": "Com o objetivo de fortalecer a atuação da atenção primária e de promover a articulação entre serviços e gestão do cuidado, o matriciamento na Estratégia de Saúde da Família surge como um modelo de organização e atenção à saúde que visa a integrar o trabalho de diferentes profissionais de saúde, com foco na formação e no suporte às equipes de saúde da família.\n\nAssinale a alternativa que descreve corretamente um componente fundamental do matriciamento na Estratégia de Saúde da Família.",
    "options": [
      "A centralização do atendimento em unidades de emergência, com o objetivo de reduzir a sobrecarga nas equipes de saúde.",
      "A formação de redes de apoio que priorizam o atendimento especializado sem a participação da equipe de saúde da família.",
      "O apoio técnico e a troca de saberes entre profissionais de saúde da família e especialistas, com promoção de capacitação contínua.",
      "A implementação de protocolos rígidos que limitam a autonomia das equipes de saúde da família no atendimento aos pacientes."
    ],
    "correctAnswer": 2,
    "explanation": "Matriciamento (apoio matricial) é um arranjo em que especialistas (de saúde mental, nutrição, fisioterapia e outros, como nas equipes multiprofissionais/eMulti) dão suporte técnico-pedagógico e assistencial às equipes de Saúde da Família. Envolve discussão de casos, consultas e atendimentos compartilhados, construção conjunta de projetos terapêuticos e educação permanente, ampliando a capacidade de resolução da atenção primária sem tirar dela a responsabilidade pelo cuidado.",
    "commentary": "Centralizar o atendimento em emergências (A): o matriciamento fortalece a atenção primária, não desloca o cuidado para a emergência.\n\nAtendimento especializado sem a equipe de saúde da família (B): é o contrário; a lógica é o cuidado compartilhado, com a equipe de referência no centro.\n\nProtocolos rígidos que limitam a autonomia (D): o objetivo é ampliar a autonomia e a capacidade clínica das equipes.",
    "tip": "Matriciamento = equipe de referência (ESF) + apoio especializado, com cuidado compartilhado e educação permanente.",
    "reference": "Ministério da Saúde. Guia prático de matriciamento em saúde mental, 2011. Campos GWS, Domitti AC. Apoio matricial e equipe de referência. Cad Saúde Pública, 2007.",
    "tags": [
      "matriciamento",
      "estratégia Saúde da Família",
      "apoio matricial"
    ]
  },
  {
    "id": "famema2025-90",
    "topography": "13",
    "module": "Saúde Coletiva",
    "text": "A inclusão social e a luta contra o estigma de doença mental são cruciais para a efetividade da psiquiatria social no Brasil. Garantir que pessoas com transtornos mentais possam viver de forma digna e integrada à sociedade é um objetivo central que demanda esforços contínuos de educação, sensibilização e políticas públicas eficazes.\n\nAssinale a alternativa que apresenta corretamente um serviço da comunidade que promove inclusão social de pessoas com transtornos mentais no Brasil.",
    "options": [
      "Hospital psiquiátrico, que oferece tratamento intensivo e prolongado, mas sem interação com a comunidade.",
      "Clínica particular, que fornece atendimento psicológico e psiquiátrico, mas somente para pacientes com condições financeiras favorecidas.",
      "Unidade de pronto atendimento, que se concentra apenas em emergências psiquiátricas, sem acompanhamento contínuo.",
      "Centro de Atenção Psicossocial (CAPS), que oferece terapia, atividades ocupacionais e suporte social em um ambiente comunitário."
    ],
    "correctAnswer": 3,
    "explanation": "O Centro de Atenção Psicossocial (CAPS) é o serviço estratégico da Rede de Atenção Psicossocial (RAPS), criado na lógica da reforma psiquiátrica (Lei 10.216/2001). Oferece cuidado em território aberto e comunitário, com atendimento multiprofissional, atividades terapêuticas e ocupacionais, apoio às famílias e ações de reinserção social, substituindo o modelo manicomial.",
    "commentary": "Hospital psiquiátrico sem interação com a comunidade (A): é o modelo asilar que a reforma psiquiátrica busca superar; a internação deve ser breve e de preferência em leitos de hospital geral.\n\nClínica particular só para quem pode pagar (B): não é serviço comunitário de inclusão nem segue a lógica universal do SUS.\n\nUPA só para emergências, sem acompanhamento (C): atende crises, mas não promove acompanhamento contínuo nem inclusão social.",
    "tip": "Reforma psiquiátrica (Lei 10.216/2001): cuidado em liberdade, no território. CAPS = serviço central da RAPS.",
    "reference": "Brasil. Lei 10.216/2001. Ministério da Saúde. Portaria nº 3.088/2011 – Rede de Atenção Psicossocial (RAPS).",
    "tags": [
      "CAPS",
      "reforma psiquiátrica",
      "RAPS"
    ]
  },
  {
    "id": "famema2025-91",
    "topography": "14",
    "topic": "Trauma",
    "module": "Clínica Médica",
    "text": "Paciente de 24 anos sofre acidente motociclístico, e a proteção da via aérea será necessária ainda em ambiente pré-hospitalar. Com base nesse contexto, em relação a sedação e analgesia, é correto afirmar que",
    "options": [
      "o etomidato pode reduzir o limiar convulsivo.",
      "o tempo de ação do midazolam é, em média, de 15 a 30 minutos.",
      "a meia-vida da quetamina é curta, de maneira geral.",
      "a ocorrência de hipotensão após o uso de fentanil é bastante frequente."
    ],
    "correctAnswer": 0,
    "explanation": "O etomidato é hipnótico muito usado na sequência rápida de intubação no trauma por manter a pressão arterial estável. Entre seus efeitos adversos estão mioclonias na indução e efeito pró-convulsivante em focos epileptogênicos, ou seja, pode reduzir o limiar convulsivo; também causa supressão adrenal transitória.",
    "commentary": "Midazolam com ação de 15 a 30 minutos (B): o início de ação é de 2–5 minutos (mais lento que etomidato e propofol), e o efeito após dose de indução costuma ir além de 30 minutos, chegando a 1–2 horas.\n\nMeia-vida curta da quetamina (C): o efeito clínico é curto (10–15 minutos) por redistribuição, mas a meia-vida de eliminação é de 2–3 horas.\n\nHipotensão frequente com fentanil (D): o fentanil tem boa estabilidade hemodinâmica; hipotensão ocorre sobretudo em pacientes hipovolêmicos ou com doses altas.",
    "tip": "Sequência rápida no trauma: etomidato e quetamina mantêm a PA. Etomidato: mioclonia e supressão adrenal. Quetamina: broncodilata, eleva a PA.",
    "reference": "Walls RM. Manual of Emergency Airway Management, 5ª ed. American College of Surgeons. ATLS, 10ª ed.",
    "tags": [
      "sequência rápida de intubação",
      "etomidato",
      "sedação e analgesia"
    ]
  },
  {
    "id": "famema2025-92",
    "topography": "14",
    "topic": "Intoxicações",
    "module": "Clínica Médica",
    "text": "Paciente de 16 anos chega à unidade de emergência com quadro de fala arrastada, diplopia, nistagmo vertical, ataxia, tremor de extremidade e hiporreflexia. A família relata que ele estava sofrendo bullying na escola e que encontrou diversas cartelas de medicação junto a ele.\n\nCom base nesse contexto, é correto afirmar que, provavelmente, houve ingesta abusiva de",
    "options": [
      "amitriptilina.",
      "paracetamol.",
      "diazepam.",
      "fenitoína."
    ],
    "correctAnswer": 3,
    "explanation": "Ataxia, nistagmo (inclusive vertical), diplopia, fala arrastada, tremor e hiporreflexia formam a síndrome cerebelar típica da intoxicação por fenitoína. O nistagmo horizontal aparece com níveis acima de 20 mcg/mL, ataxia acima de 30 e letargia acima de 40. O tratamento é suporte; não há antídoto.",
    "commentary": "Amitriptilina (A): causa síndrome anticolinérgica (taquicardia, midríase, pele seca, retenção urinária), convulsões e QRS alargado com arritmias.\n\nParacetamol (B): nas primeiras horas é pouco sintomático ou causa náuseas e vômitos; a hepatotoxicidade aparece em 24–72 horas.\n\nDiazepam (C): causa sedação e, raramente, depressão respiratória; ataxia pode ocorrer, mas nistagmo vertical com esse quadro cerebelar é típico da fenitoína.",
    "tip": "Nistagmo + ataxia + diplopia + disartria em intoxicação = fenitoína (ou carbamazepina).",
    "reference": "Nelson LS et al. Goldfrank's Toxicologic Emergencies, 11ª ed. Ministério da Saúde. Manual de toxicologia clínica (CEATOX), 2017.",
    "tags": [
      "intoxicação",
      "fenitoína",
      "síndrome cerebelar"
    ]
  },
  {
    "id": "famema2025-93",
    "topography": "5.1",
    "topic": "Doença inflamatória pélvica",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 21 anos chega à unidade de emergência com sintomas sugestivos de sepse e doença inflamatória pélvica aguda. Não há histórico de alergias. Nesse momento, recomenda-se o uso",
    "options": [
      "apenas de ceftriaxona e metronidazol.",
      "apenas de ceftriaxona e doxiciclina.",
      "de ceftriaxona, doxiciclina e metronidazol.",
      "de clindamicina, ampicilina e cefotaxime."
    ],
    "correctAnswer": 2,
    "explanation": "DIP com sepse é DIP grave e exige internação e antibiótico parenteral. O esquema hospitalar recomendado pelo Ministério da Saúde (e pelo CDC) cobre gonococo, clamídia e anaeróbios: ceftriaxona 1 g EV ao dia + doxiciclina 100 mg de 12/12 h + metronidazol 400 mg (ou 500 mg) de 12/12 h, completando 14 dias.",
    "commentary": "Ceftriaxona + metronidazol (A): sem doxiciclina, a clamídia fica descoberta.\n\nCeftriaxona + doxiciclina (B): sem metronidazol, os anaeróbios, importantes na DIP grave e no abscesso tubo-ovariano, ficam descobertos.\n\nClindamicina + ampicilina + cefotaxima (D): não é esquema recomendado; o esquema alternativo com clindamicina associa gentamicina.",
    "tip": "DIP: ceftriaxona + doxiciclina + metronidazol por 14 dias (ambulatorial com ceftriaxona IM dose única; hospitalar com ceftriaxona EV).",
    "reference": "Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com IST, 2022. CDC. STI Treatment Guidelines, 2021.",
    "tags": [
      "doença inflamatória pélvica",
      "sepse",
      "antibioticoterapia"
    ]
  },
  {
    "id": "famema2025-94",
    "topography": "1.2",
    "topic": "Glaucoma",
    "module": "Clínica Médica",
    "text": "Paciente de 48 anos chega à unidade de emergência com olho vermelho. A correta correlação entre apresentação e causa mais provável é:",
    "options": [
      "presença de hifema e ceratite.",
      "diminuição acentuada da acuidade visual e conjuntivite.",
      "fotofobia e trauma ocular.",
      "pupila em média-midríase e glaucoma agudo."
    ],
    "correctAnswer": 3,
    "explanation": "O glaucoma agudo de ângulo fechado se apresenta com olho vermelho doloroso, baixa súbita da visão, halos coloridos em volta das luzes, cefaleia, náuseas e vômitos, córnea turva e pupila em média midríase pouco reativa, com olho endurecido à palpação. É emergência: a pressão intraocular muito alta lesa o nervo óptico em horas.\n\nTratamento imediato com hipotensores oculares (betabloqueador, alfa-agonista, inibidor da anidrase carbônica tópico e sistêmico), manitol se necessário, pilocarpina e depois iridotomia a laser.",
    "commentary": "Hifema e ceratite (A): hifema (sangue na câmara anterior) é típico de trauma ocular contuso, não de ceratite.\n\nBaixa acentuada da visão e conjuntivite (B): a conjuntivite não reduz a acuidade visual; baixa visual com olho vermelho sugere ceratite, uveíte ou glaucoma agudo.\n\nFotofobia e trauma (C): fotofobia ocorre em ceratite, uveíte e abrasão corneana; a correlação mais característica entre as opções é pupila em média midríase com glaucoma agudo.",
    "tip": "Olho vermelho com pupila em média midríase fixa, córnea turva, dor e baixa visual = glaucoma agudo. Uveíte = miose. Conjuntivite = visão normal.",
    "reference": "Conselho Brasileiro de Oftalmologia. Série Oftalmologia Brasileira – Glaucoma. American Academy of Ophthalmology. Primary Angle-Closure Disease Preferred Practice Pattern, 2020.",
    "tags": [
      "olho vermelho",
      "glaucoma agudo",
      "emergência oftalmológica"
    ]
  },
  {
    "id": "famema2025-95",
    "topography": "9",
    "topic": "Trombocitopenias",
    "module": "Clínica Médica",
    "text": "Paciente de 67 anos chega à unidade de emergência com quadro de plaquetopenia em investigação. A correta correlação entre contagem segura de plaqueta e procedimento é:",
    "options": [
      "pequena sutura e > 30000 / mm³.",
      "endoscopia e > 50000 / mm³.",
      "punção lombar e > 40000 / mm³.",
      "passagem de acesso central e > 15000 / mm³."
    ],
    "correctAnswer": 1,
    "explanation": "Para procedimentos invasivos em paciente plaquetopênico, as diretrizes de transfusão definem contagens mínimas. Endoscopia digestiva (sobretudo com biópsia) é considerada segura com plaquetas acima de 50.000/mm³.\n\nOutros limiares usuais: punção lombar ≥ 40.000–50.000/mm³; cateter venoso central ≥ 20.000/mm³ (guiado por ultrassom); cirurgia de grande porte ≥ 50.000/mm³; neurocirurgia e cirurgia oftalmológica ≥ 100.000/mm³; profilaxia em paciente estável ≥ 10.000/mm³.",
    "commentary": "Pequena sutura com > 30.000 (A): para pequenos procedimentos cirúrgicos o limiar usual é de 50.000/mm³.\n\nPunção lombar com > 40.000 (C): a banca considerou o limiar de 50.000/mm³; algumas diretrizes (como a britânica) aceitam 40.000/mm³, o que torna a alternativa discutível, mas a B é a mais consensual.\n\nAcesso central com > 15.000 (D): o mínimo é 20.000/mm³, mesmo com ultrassom.",
    "tip": "Plaquetas: profilaxia 10 mil; cateter central 20 mil; punção lombar e cirurgias/endoscopia 50 mil; neurocirurgia e olho 100 mil.",
    "reference": "Ministério da Saúde. Guia para uso de hemocomponentes, 2ª ed., 2015. Kaufman RM et al. Platelet transfusion: a clinical practice guideline from the AABB. Ann Intern Med, 2015.",
    "tags": [
      "plaquetopenia",
      "transfusão de plaquetas",
      "procedimentos invasivos"
    ]
  },
  {
    "id": "famema2025-96",
    "topography": "4.1",
    "topic": "Distúrbios hidroeletrolíticos",
    "module": "Clínica Médica",
    "text": "Assinale a alternativa correta sobre como deve ser prescrita a solução polarizante (glicoinsulina).",
    "options": [
      "10 UI de insulina regular: 500 mL de SG a 5%.",
      "10 UI de insulina regular: 1000 mL de SG a 10%.",
      "10 UI de insulina regular: 10 mL de glicose 50%.",
      "1 UI de insulina regular: 5 g de glicose."
    ],
    "correctAnswer": 3,
    "explanation": "A solução polarizante (glicoinsulina) é usada no tratamento da hipercalemia: a insulina leva o potássio para dentro das células, e a glicose evita hipoglicemia. A proporção usual é de 1 UI de insulina regular para cada 4–5 g de glicose. O esquema clássico é 10 UI de insulina regular em 50 g de glicose (por exemplo, 100 mL de glicose a 50% ou 500 mL de SG 10%), em 30–60 minutos; o efeito começa em 15–30 minutos e reduz o K⁺ em cerca de 0,6–1 mEq/L.",
    "commentary": "10 UI em 500 mL de SG 5% (A): contém só 25 g de glicose (1 UI para 2,5 g), com risco de hipoglicemia.\n\n10 UI em 1.000 mL de SG 10% (B): 100 g de glicose em grande volume, infusão lenta e risco de sobrecarga.\n\n10 UI em 10 mL de glicose 50% (C): apenas 5 g de glicose (1 UI para 0,5 g); hipoglicemia quase certa.",
    "tip": "Glicoinsulina: 10 UI de insulina regular + 50 g de glicose (1 UI : 5 g). Controlar a glicemia depois.",
    "reference": "Palmer BF, Clegg DJ. Diagnosis and treatment of hyperkalemia. Cleve Clin J Med, 2017. Medicina de Emergência – Abordagem Prática (USP), 2023.",
    "tags": [
      "hipercalemia",
      "solução polarizante",
      "insulina"
    ]
  },
  {
    "id": "famema2025-97",
    "topography": "1.1",
    "topic": "TCE",
    "module": "Cirurgia",
    "text": "Paciente de 19 anos, vítima de trauma cranioencefálico, apresenta sinais de hipertensão intracraniana e de herniação uncal. No local de atendimento, não há neurocirurgião. Com base nesse contexto, assinale alternativa correta.",
    "options": [
      "A escolha entre uso do manitol e da solução salina hipertônica é exclusiva do médico que atende.",
      "A pCO2 deve ser mantida entre 30 e 35 mmHg.",
      "A cabeceira deve ser mantida em 10 graus, aproximadamente.",
      "A pressão de perfusão cerebral deve ser mantida acima de 40 mmHg."
    ],
    "correctAnswer": 1,
    "explanation": "Com sinais de herniação uncal (anisocoria, postura em extensão, piora neurológica) e sem neurocirurgião disponível, estão indicadas medidas temporárias para reduzir a pressão intracraniana enquanto se providencia a transferência. Uma delas é a hiperventilação breve com PaCO₂ entre 30 e 35 mmHg, que causa vasoconstrição cerebral e diminui o volume sanguíneo intracraniano.\n\nA hiperventilação deve ser curta e não deve levar a PaCO₂ abaixo de 30 mmHg, porque a vasoconstrição excessiva causa isquemia. Fora da herniação, a meta é PaCO₂ de 35–45 mmHg.",
    "commentary": "Escolha entre manitol e salina hipertônica exclusiva do médico (A): a escolha segue critérios clínicos (o manitol é evitado na hipotensão) e protocolos, não decisão arbitrária.\n\nCabeceira em 10 graus (C): a recomendação é elevar a cabeceira a 30 graus, com a cabeça na linha média, para facilitar a drenagem venosa.\n\nPressão de perfusão cerebral acima de 40 mmHg (D): a meta é PPC de 60–70 mmHg.",
    "tip": "TCE com herniação: hiperventilação breve (PaCO₂ 30–35), manitol ou salina hipertônica, cabeceira a 30°, PPC 60–70 mmHg, transferir para neurocirurgia.",
    "reference": "American College of Surgeons. ATLS, 10ª ed. Carney N et al. Guidelines for the Management of Severe Traumatic Brain Injury, 4th Edition. Neurosurgery, 2017.",
    "tags": [
      "traumatismo cranioencefálico",
      "herniação uncal",
      "hiperventilação"
    ]
  },
  {
    "id": "famema2025-98",
    "topography": "14",
    "topic": "Insuficiência respiratória",
    "module": "Clínica Médica",
    "text": "É possível realizar o desmame da ventilação mecânica uma vez que o paciente tenha tido resolução do motivo que o levou à intubação, apresente tosse e drive respiratório adequados e",
    "options": [
      "estabilidade hemodinâmica, com FC < 140 bpm sem vasopressor.",
      "pontuação na escala de Glasgow > 12.",
      "PEEP ≤ 5-9 mmHg.",
      "relação PO2/FIO2 ≥ 140."
    ],
    "correctAnswer": 0,
    "explanation": "Para iniciar o teste de respiração espontânea, o paciente deve ter resolvido a causa da intubação, ter drive respiratório e tosse adequados, oxigenação aceitável e estabilidade hemodinâmica. Nos critérios clássicos, estabilidade hemodinâmica significa FC ≤ 140 bpm, sem isquemia miocárdica e sem vasopressor (ou dose baixa e estável).",
    "commentary": "Glasgow > 12 (B): exigência excessiva; os protocolos pedem paciente desperto, capaz de obedecer comandos, em geral com Glasgow ≥ 8–9 (sem sedação ou com sedação leve).\n\nPEEP ≤ 5–9 mmHg (C): a PEEP é medida em cmH₂O, e o critério é PEEP ≤ 5–8 cmH₂O.\n\nPaO₂/FiO₂ ≥ 140 (D): o critério de oxigenação é PaO₂/FiO₂ ≥ 150–200, com FiO₂ ≤ 0,4–0,5.",
    "tip": "Pronto para o TRE: causa resolvida, desperto, tosse eficaz, PaO₂/FiO₂ ≥ 150–200 com FiO₂ ≤ 0,4 e PEEP ≤ 5–8 cmH₂O, FC ≤ 140 e sem vasopressor relevante.",
    "reference": "Associação de Medicina Intensiva Brasileira (AMIB) e SBPT. Diretrizes Brasileiras de Ventilação Mecânica, 2013. Boles JM et al. Weaning from mechanical ventilation. Eur Respir J, 2007.",
    "tags": [
      "desmame da ventilação mecânica",
      "teste de respiração espontânea",
      "terapia intensiva"
    ]
  },
  {
    "id": "famema2025-99",
    "topography": "14",
    "topic": "Anafilaxia",
    "module": "Clínica Médica",
    "text": "Jardineiro de 30 anos é atacado por enxame de abelhas. Chega à unidade de emergência com hipotensão, taquicardia, além de vômitos e dor abdominal. No momento, está indicado o uso de adrenalina",
    "options": [
      "EV 0,1 mg.",
      "EV 1 mg.",
      "IM 0,5 mg.",
      "SC 0,5 mg."
    ],
    "correctAnswer": 2,
    "explanation": "Após múltiplas picadas de abelha, hipotensão, taquicardia, vômitos e dor abdominal configuram anafilaxia com acometimento cardiovascular e gastrointestinal. O tratamento de primeira linha é adrenalina intramuscular na face anterolateral da coxa, na dose de 0,01 mg/kg (máximo 0,5 mg no adulto), repetida a cada 5–15 minutos se necessário, junto com posicionamento, oxigênio e expansão volêmica.\n\nO ataque por enxame também pode causar envenenamento direto (hemólise, rabdomiólise, lesão renal), e o soro antiapílico está indicado quando há muitas picadas.",
    "commentary": "EV 0,1 mg (A): adrenalina EV em bolus é reservada para choque refratário ou PCR, por profissional experiente e com monitorização, em doses tituladas e diluídas.\n\nEV 1 mg (B): é a dose da PCR; em paciente com pulso pode causar arritmias graves e crise hipertensiva.\n\nSC 0,5 mg (D): a via subcutânea tem absorção mais lenta e irregular; a recomendação é IM.",
    "tip": "Anafilaxia: adrenalina IM na coxa, 0,01 mg/kg (máx. 0,5 mg adulto; 0,3 mg criança), repetir a cada 5–15 min.",
    "reference": "World Allergy Organization Anaphylaxis Guidance, 2020. ASBAI. Guia para o manejo da anafilaxia, 2022. Ministério da Saúde. Manual de diagnóstico e tratamento de acidentes por animais peçonhentos.",
    "tags": [
      "anafilaxia",
      "adrenalina",
      "picada de abelha"
    ]
  },
  {
    "id": "famema2025-100",
    "topography": "14",
    "topic": "Trauma",
    "module": "Clínica Médica",
    "text": "Paciente de 15 anos sofre um afogamento. Com relação ao tratamento da hipotermia, que geralmente acompanha esse quadro, é correto afirmar que, no grau",
    "options": [
      "1, o tratamento preferencial é passivo, com ambiente aquecido, cobertores e retirada da roupa molhada.",
      "2, o tratamento preferencial é passivo, com ambiente aquecido, cobertores e fluidos parenterais aquecidos.",
      "3, o tratamento preferencial é feito com ECMO.",
      "4, o tratamento preferencial é feito com toracotomia para aquecimento inicial da caixa torácica."
    ],
    "correctAnswer": 0,
    "explanation": "Pelo sistema suíço de estadiamento da hipotermia: grau 1 (35–32 °C) = consciente e tremendo; grau 2 (32–28 °C) = consciência alterada, sem tremor; grau 3 (< 28 °C) = inconsciente, com sinais vitais; grau 4 = sem sinais vitais (PCR).\n\nNo grau 1, o tratamento é reaquecimento passivo: ambiente aquecido, retirada das roupas molhadas, cobertores e bebidas quentes e doces se o paciente estiver alerta. O tremor gera calor suficiente para reaquecer.",
    "commentary": "Grau 2 com tratamento passivo e fluidos aquecidos (B): no grau 2 indica-se reaquecimento ativo externo (mantas térmicas, ar forçado) e ativo interno mínimo (fluidos aquecidos), com mobilização cuidadosa pelo risco de arritmia.\n\nGrau 3 com ECMO (C): ECMO ou circulação extracorpórea é preferencial no grau 4 (PCR) e no grau 3 instável; no grau 3 estável, faz-se reaquecimento ativo externo e interno.\n\nGrau 4 com toracotomia (D): na PCR por hipotermia, o reaquecimento preferencial é por ECMO/circulação extracorpórea; toracotomia com lavagem pleural é alternativa apenas quando ECMO não está disponível.",
    "tip": "Hipotermia: grau 1 = passivo; grau 2 = ativo externo; grau 3 = ativo externo e interno (ECMO se instável); grau 4 = RCP + ECMO.",
    "reference": "Paal P et al. Accidental hypothermia: 2021 update. Int J Environ Res Public Health, 2022. Szpilman D et al. Afogamento – SOBRASA, 2024. European Resuscitation Council Guidelines 2021 – Special circumstances.",
    "tags": [
      "hipotermia",
      "afogamento",
      "reaquecimento"
    ]
  }
];
