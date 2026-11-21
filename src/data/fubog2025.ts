import { Question } from '../types';

// FUBOG 2025 (GO) — residência médica (acesso direto). 100 questões, 4 alternativas.
// Gabarito conferido no gabarito do AjudaMédico; explicações com texto próprio.
export const FUBOG_2025_QUESTIONS: Question[] = [
  {
    "id": "fubog2025-1",
    "module": "Clínica Médica",
    "text": "Paciente, sexo masculino, 56 anos, trabalhador da zona rural, chega à emergência do Hospital Universitário em Recife, com quadro de hematêmese em moderada quantidade, de início há 01 hora. Aponta fezes de aspecto “mais enegrecido” (SIC), há 04 dias. Nega demais queixas no momento e episódios prévios semelhantes. Paciente relata ser portador de artrite reumatoide. Endoscopia digestiva alta - Esôfago: forma, calibre, mucosa e distensibilidade normais. Padrão vascular revela um cordão varicoso de médio calibre e dois cordões varicosos de pequeno calibre, azulados, ausência de úlceras, lesões e de manchas vermelhas em terço distal. A transição esofagogástrica encontra-se coincidente com o pinçamento diafragmático. Estômago: Úlcera gástrica na localização de corpo gástrico, com sangramento ativo em jato. Sobre o caso, há as seguintes afirmativas:\n\nI. Trata-se de um caso de hemorragia digestiva alta.\nII. Os achados de hematêmese e melena sugerem uma fonte proximal ao ângulo de Treitz.\nIII. Doença ulcerosa péptica pode ser descartada como hipótese diagnóstica, neste caso.\n\nDessa forma, é CORRETO afirmar:",
    "options": [
      "Apenas I e II estão corretas",
      "Apenas II está correta",
      "Apenas III está correta",
      "Apenas II e III estão corretas"
    ],
    "correctAnswer": 0,
    "explanation": "Hematêmese com melena e endoscopia mostrando úlcera gástrica com sangramento ativo em jato: hemorragia digestiva alta (I correta). Hematêmese e melena indicam sangramento proximal ao ângulo de Treitz (II correta). A doença ulcerosa péptica não só não pode ser descartada como é a causa do sangramento — úlcera de corpo gástrico, provavelmente associada a AINE pela artrite reumatoide (III incorreta). As varizes de esôfago descritas não têm estigmas de sangramento recente.",
    "commentary": "Apenas II (B): a afirmativa I também está correta.\n\nApenas III (C) e II e III (D): a afirmativa III é falsa — a endoscopia mostra uma úlcera gástrica sangrando em jato (Forrest IA).",
    "reference": "ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding (2021); Federação Brasileira de Gastroenterologia",
    "tags": [
      "hemorragia digestiva alta",
      "úlcera péptica",
      "classificação de Forrest",
      "gastroenterologia"
    ],
    "tip": "Hematêmese/melena = fonte acima do ângulo de Treitz."
  },
  {
    "id": "fubog2025-2",
    "module": "Clínica Médica",
    "text": "Paciente, sexo masculino, 49 anos, farmacêutico, com antecedentes de HAS e DM 2 em uso irregular de losartana, hidroclorotiazida e metformina. Deu entrada no serviço de emergência do hospital, transportado pelo SAMU, com relato de hemiparesia braquiofacial à direita, de início súbito, além de disartria há 1h30 da admissão. Nega histórico de trauma, convulsão, sangramentos, cirurgia recente ou episódios semelhantes anteriormente. Ao exame físico:\n\nestado geral regular, desidratado 1+/4+, anictérico, afebril; ritmo cardíaco irregular em 2 tempos, bulhas normofonéticas, sem sopro, frequência cardíaca: 125 bpm, PA: 180 x 100 mmHg; FR: 18 irpm, SatO₂: 98%; ECG 14 (AO 4 / RV: 4 / RM 6), vigil, disartrico, pupilas isofotorreagentes, força muscular 0/5 em hemicorpo direito e 5/5 em hemicorpo esquerdo; NIHSS: 12 (4. 2 + 5a. 4+ 6a 4+ 10. 2); Rankin prévio à admissão 0 e sem resultado de exames laboratoriais.\n\nSobre o caso, é CORRETO afirmar:",
    "options": [
      "Inicialmente são necessárias a monitorização e a reposição de glicose do paciente",
      "Uma TC de crânio com contraste deve ser realizada o mais rápido possível",
      "O trombolítico mais usado é o Alteplase, na dose 0,5 mg/Kg IV",
      "O diagnóstico possui como os principais mecanismos a embolia e a aterotrombose"
    ],
    "correctAnswer": 3,
    "explanation": "Déficit neurológico focal súbito (hemiparesia direita e disartria) há 1h30, em paciente com ritmo irregular (provável fibrilação atrial), hipertensão e diabetes: AVC isquêmico agudo. Os principais mecanismos do AVC isquêmico são a cardioembolia (aqui, a mais provável pela FA) e a aterotrombose de grandes artérias, além da doença de pequenos vasos (lacunar).",
    "commentary": "Monitorização e reposição de glicose (A): a glicemia capilar deve ser medida (hipoglicemia simula AVC), mas reposição só se houver hipoglicemia; não é medida inicial obrigatória.\n\nTC com contraste (B): a TC inicial é sem contraste, para excluir hemorragia antes da trombólise.\n\nAlteplase 0,5 mg/kg (C): a dose é 0,9 mg/kg (máximo 90 mg), 10% em bolus e o restante em 1 hora.",
    "reference": "Sociedade Brasileira de Doenças Cerebrovasculares; AHA/ASA Guidelines for the Early Management of Acute Ischemic Stroke (2019)",
    "tags": [
      "AVC isquêmico",
      "fibrilação atrial",
      "trombólise",
      "neurologia"
    ],
    "tip": "AVC: TC sem contraste; alteplase 0,9 mg/kg até 4,5 h."
  },
  {
    "id": "fubog2025-3",
    "module": "Clínica Médica",
    "text": "Paciente, sexo feminino, 65 anos, com antecedente de diabetes mellitus 2, há mais de 20 anos, em tratamento médico irregular e sem controle das doenças de base. Deu entrada no hospital universitário com queixa de inapetência, astenia e sonolência, iniciados há 2 dias. O acompanhante relata que nas últimas 24h os sintomas pioraram e vêm evoluindo com náuseas e vômitos. Nega febre, diarreia, redução da excreção urinária, sintomas gripais ou quadro semelhante anteriormente. Acompanhante informa que o paciente está em uso apenas das medicações domiciliares: sinvastatina 20 mg/dia e metformina 1000 mg/dia. Na inspeção física: frequência cardíaca de 120 bpm, frequência respiratória de 25 rpm, saturação 96%, PA 120/80 mmHg, sem alteração em auscultas cardíacas e respiratória, dor a palpação profunda de epigástrio. Exames Complementares: HGT: 192 mg/dL; hemoglobina: 11.2 g/dl; hematócrito: 33%; VCM: 88 fL; HCM: 28 pg; leucócitos: 6710/mm³; eosinófilos: 300/mm³; segmentados: 3800/mm³; linfócitos totais: 2410/mm³; monócitos: 200/mm²; plaquetas:\n\n170.000/mm³; creatinina: 4.1 mg/dL; ureia: 104 mg/dL; sumário de urina sem alterações; gasometria arterial: pH 7.18; HCO3: 12 mmol/L; PCO2: 22 mmHg; lactato 6.3 mmol/L; BE: - 2 mmol/L; potássio: 5.9mmol/L; sódio: 138 mmol/L; cloro: 108 mmol/L; albumina sérica: 3.0 mg/dL.\n\nSobre o caso, é CORRETO afirmar:",
    "options": [
      "A alcalose respiratória se deve à compensação pulmonar com liberação pO2 na tentativa de normalizar o PH",
      "A acidose metabólica com ânion gap elevado se deve à produção de ácido lático secundário ao uso de metformina",
      "A acidose lática por uso metformina ocorre em casos em que seu uso está inadequado: contraindicada em TFG < 45mL/min/1.73m2",
      "Reposição de bicarbonato não é uma alternativa apropriada para o caso"
    ],
    "correctAnswer": 1,
    "explanation": "Diabética em uso de metformina com lesão renal (creatinina 4,1 mg/dL), vômitos e acidose metabólica grave (pH 7,18; HCO₃ 12) com lactato elevado (6,3 mmol/L). Ânion gap = Na − (Cl + HCO₃) = 138 − (108 + 12) = 18 (corrigido pela albumina baixa, cerca de 20,5): acidose metabólica com ânion gap elevado por acidose lática associada à metformina, que se acumula na insuficiência renal. A PCO₂ de 22 é a compensação respiratória esperada.",
    "commentary": "Alcalose respiratória com liberação de pO₂ (A): a hiperventilação é compensação de acidose metabólica, eliminando CO₂, não “liberando pO₂”; e não há alcalose (pH 7,18).\n\nMetformina contraindicada com TFG < 45 (C): a contraindicação é TFG < 30; entre 30 e 45 reduz-se a dose e não se inicia o fármaco.\n\nBicarbonato não é apropriado (D): na acidose grave (pH < 7,1–7,2) associada à metformina, bicarbonato e, sobretudo, hemodiálise (que remove o fármaco) podem ser indicados.",
    "reference": "Sociedade Brasileira de Diabetes – Diretriz 2024; KDIGO 2022 Diabetes in CKD",
    "tags": [
      "acidose lática",
      "metformina",
      "ânion gap",
      "distúrbios ácido-base",
      "nefrologia"
    ],
    "tip": "Metformina: reduzir dose com TFG 30–45 e suspender abaixo de 30."
  },
  {
    "id": "fubog2025-4",
    "module": "Pediatria",
    "text": "Com relação ao rastreamento para displasia evolutiva do quadril na infância, é CORRETO afirmar:",
    "options": [
      "Manobra de Barlow não é mais utilizada no rastreio de displasia do quadril",
      "O diagnóstico precoce antes dos 3 a 6 meses de idade não impacta na escolha de tratamentos",
      "Gênero masculino é fator de risco para displasia de quadril",
      "A manobra de Ortolani provoca a redução do quadril"
    ],
    "correctAnswer": 3,
    "explanation": "No rastreamento da displasia do desenvolvimento do quadril, a manobra de Ortolani reduz um quadril luxado (o “clique” de entrada da cabeça femoral no acetábulo, com abdução), enquanto a de Barlow provoca a luxação de um quadril instável (adução e pressão posterior). Ambas são feitas até cerca de 3 meses. Os fatores de risco são sexo feminino, apresentação pélvica, primogênito, história familiar e oligoâmnio.",
    "commentary": "Barlow não é mais usada (A): Barlow e Ortolani continuam fazendo parte do exame do recém-nascido.\n\nDiagnóstico precoce não muda o tratamento (B): diagnosticado antes de 6 meses, o tratamento é com suspensório de Pavlik; mais tarde, costuma exigir redução fechada ou aberta.\n\nSexo masculino como fator de risco (C): a DDQ é muito mais frequente no sexo feminino.",
    "reference": "Sociedade Brasileira de Ortopedia Pediátrica; AAP Clinical Report – Evaluation and Referral for DDH (2016)",
    "tags": [
      "displasia do desenvolvimento do quadril",
      "manobra de Ortolani",
      "ortopedia pediátrica",
      "neonatologia"
    ],
    "tip": "Ortolani reduz (entra); Barlow luxa (sai)."
  },
  {
    "id": "fubog2025-5",
    "module": "Pediatria",
    "text": "A vacinação é a melhor maneira de proteger a criança contra doenças imunopreveníveis.\n\nDessa forma, é CORRETO afirmar:",
    "options": [
      "A vacina BCG é necessária em dose única ao nascer",
      "Vacina contra poliomielite 1º, 2º e 3º doses inativadas: a primeira dose é necessária aos 3 meses de idade",
      "Vacina pneumocócica 10-valente: a primeira dose é necessária aos 4 meses de idade",
      "Vacina Covid-19: a primeira dose é necessária no 1º ano de idade"
    ],
    "correctAnswer": 0,
    "explanation": "Pelo Calendário Nacional de Vacinação, a BCG é aplicada em dose única ao nascer (preferencialmente nas primeiras 12 horas, até 4 anos 11 meses e 29 dias para não vacinados). A vacina inativada da poliomielite (VIP) é aplicada aos 2, 4 e 6 meses; a pneumocócica 10-valente aos 2 e 4 meses, com reforço aos 12 meses; a vacina covid-19 entrou no calendário a partir de 6 meses de idade.",
    "commentary": "VIP com primeira dose aos 3 meses (B): a primeira dose é aos 2 meses.\n\nPneumocócica 10-valente com primeira dose aos 4 meses (C): a primeira dose é aos 2 meses.\n\nCovid-19 no 1º ano de idade (D): o esquema começa aos 6 meses de idade.",
    "reference": "Ministério da Saúde – Calendário Nacional de Vacinação da Criança (2024)",
    "tags": [
      "vacinação",
      "calendário vacinal da criança",
      "BCG",
      "imunizações"
    ],
    "tip": "Calendário: BCG e hepatite B ao nascer; VIP, penta, pneumo e rotavírus a partir dos 2 meses."
  },
  {
    "id": "fubog2025-6",
    "module": "Clínica Médica",
    "text": "Paciente, sexo masculino, 60 anos, hipertenso e portador de cirrose hepática secundária ao etilismo, procura o pronto atendimento queixando-se de dor abdominal há dois dias. Exame físico: estado geral regular, eupneico, ictérico (+/4+), com escala de Glasgow 14 (desorientado). Sem flapping, apresentando sinais vitais estáveis. Ausculta pulmonar e ausculta cardíaca sem alterações. Abdome globoso, flácido e indolor, com presença de maciez móvel, além de semicírculo de Skoda. O toque retal não foi efetuado. Foi realizada paracentese diagnóstica com saída de líquido amarelo citrino. A análise do líquido mostrou o seguinte: albumina: 0,1 g/dL; proteínas totais: 0,6g/dL; glicose: 110 mg/dL; total de células nucleadas: 1440 /mm³ (70% neutrófilos, 10% linfócitos); cultura aeróbia do líquido ascético: Klebsiella pneumoniae (multissensível). Sobre o caso, há as seguintes afirmativas:\n\nI. A principal suspeita diagnóstica é a Peritonite Bacteriana Espontânea (PBE).\nII. Cefalosporinas de 3ª geração são consideradas antibióticos empíricos de primeira escolha no tratamento desses casos.\nIII. O tratamento com antibiótico deve ser iniciado após o resultado de cultura positiva.\n\nConsiderando-se as afirmativas como verdadeiras (V) ou falsas (F), a alternativa CORRETA é:",
    "options": [
      "V, F, F",
      "V, V, V",
      "V, V, F",
      "F, F, F"
    ],
    "correctAnswer": 2,
    "explanation": "Cirrótico com ascite, dor abdominal e alteração do estado mental, com líquido ascítico com mais de 250 neutrófilos/mm³ (1.440 × 70% ≈ 1.000) e cultura monomicrobiana (Klebsiella): peritonite bacteriana espontânea (I verdadeira). O tratamento empírico de escolha é cefalosporina de 3ª geração, como ceftriaxona ou cefotaxima (II verdadeira), iniciado imediatamente após a paracentese, sem esperar a cultura — o critério é a contagem de neutrófilos (III falsa). Associa-se albumina (1,5 g/kg no dia 1 e 1 g/kg no dia 3) para prevenir síndrome hepatorrenal.",
    "commentary": "V, F, F (A): a cefalosporina de 3ª geração é sim a escolha empírica.\n\nV, V, V (B): esperar a cultura atrasa o tratamento e aumenta a mortalidade.\n\nF, F, F (D): o diagnóstico de PBE está correto (PMN > 250/mm³).",
    "reference": "EASL Clinical Practice Guidelines for decompensated cirrhosis (2018); Sociedade Brasileira de Hepatologia",
    "tags": [
      "peritonite bacteriana espontânea",
      "cirrose",
      "ascite",
      "ceftriaxona",
      "hepatologia"
    ],
    "tip": "PBE: PMN > 250/mm³ no líquido ascítico → ceftriaxona + albumina, sem esperar cultura."
  },
  {
    "id": "fubog2025-7",
    "module": "Ginecologia e Obstetrícia",
    "text": "No Brasil, o câncer de colo do útero, também conhecido como câncer cervical, é o quarto tipo de câncer mais comum entre as mulheres. Sobre o tema, é CORRETO afirmar:",
    "options": [
      "Com exceção do câncer colorretal, este tumor é o que apresenta maior potencial de prevenção e cura quando diagnosticado precocemente",
      "Alcançar alta cobertura no rastreamento da população definida como alvo é o componente mais importante para obter uma significativa redução na incidência e na mortalidade por câncer de colo do útero",
      "A colposcopia é a principal estratégia de rastreamento do câncer de colo do útero e de suas lesões precursoras",
      "Um público que exige menos atenção das equipes de saúde é a mulher com identidade homossexual"
    ],
    "correctAnswer": 1,
    "explanation": "O câncer do colo do útero é altamente prevenível porque tem lesões precursoras de evolução lenta, detectáveis e tratáveis. O fator mais importante para reduzir incidência e mortalidade é alcançar alta cobertura da população-alvo no rastreamento (citologia ou, agora, teste de DNA-HPV), com seguimento adequado dos resultados alterados. A meta é cobrir 80–85% das mulheres na faixa etária.",
    "commentary": "Exceto o colorretal, o de maior potencial de prevenção (A): o câncer do colo do útero é justamente o de maior potencial de prevenção e cura quando diagnosticado cedo; a exceção não procede.\n\nColposcopia como estratégia de rastreamento (C): o rastreamento é feito por citologia ou teste de HPV; a colposcopia é o exame diagnóstico dos alterados.\n\nMulheres homossexuais exigem menos atenção (D): mulheres que fazem sexo com mulheres também têm risco e frequentemente têm menor cobertura de rastreamento.",
    "reference": "INCA – Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (2016) e com teste de DNA-HPV (2024)",
    "tags": [
      "câncer do colo do útero",
      "rastreamento",
      "cobertura",
      "saúde da mulher"
    ],
    "tip": "O que mais reduz a mortalidade por câncer de colo: cobertura alta do rastreamento."
  },
  {
    "id": "fubog2025-8",
    "module": "Ginecologia e Obstetrícia",
    "text": "A saúde reprodutiva implica que a pessoa possa ter uma vida sexual segura e satisfatória, com autonomia para se reproduzir e a liberdade de decidir sobre quando e quantas vezes deve fazê-lo. Devem, portanto, ser ofertados a homens e mulheres adultos, jovens e adolescentes informações, acesso e escolha a métodos eficientes, seguros, permissíveis, aceitáveis e não contrários à Lei nº 9.263/1996, além da oferta de outros métodos de regulação da fecundidade e o direito ao acesso a serviços apropriados de saúde para pré-natal, parto e puerpério. Neste contexto, é CORRETO afirmar:",
    "options": [
      "A inseminação artificial e a fertilização in vitro estão disponíveis pelo SUS, caso haja diagnóstico de infertilidade",
      "O planejamento reprodutivo baseia-se em ações clínicas, preventivas, educativas, além da oferta de informações, meios, métodos e técnicas para incentivar a fecundidade",
      "É menos importante realizar ações de planejamento reprodutivo para mulheres lésbicas e bissexuais",
      "O planejamento reprodutivo engloba adultos, jovens e adolescentes, com vida sexual ativa com ou sem parceiros estáveis, bem como aqueles que se preparam para iniciar sua vida sexual"
    ],
    "correctAnswer": 3,
    "explanation": "Pela Lei 9.263/1996 e pelas normas do Ministério da Saúde, o planejamento reprodutivo é direito de homens e mulheres, adultos, jovens e adolescentes, com ou sem parceria estável, incluindo os que vão iniciar a vida sexual. Compreende ações de concepção e de anticoncepção — oferta de informações, métodos e técnicas tanto para evitar quanto para obter uma gestação.",
    "commentary": "Inseminação e FIV disponíveis pelo SUS (A): a reprodução assistida de alta complexidade é oferecida em poucos centros, com acesso muito restrito; não está amplamente disponível.\n\nPlanejamento para incentivar a fecundidade (B): o planejamento reprodutivo engloba concepção e anticoncepção, não serve para incentivar a fecundidade.\n\nMenos importante para lésbicas e bissexuais (C): essas mulheres também têm direitos e demandas reprodutivas e de prevenção.",
    "reference": "Lei nº 9.263/1996 (Planejamento Familiar); Ministério da Saúde – Caderno de Atenção Básica nº 26: Saúde Sexual e Saúde Reprodutiva",
    "tags": [
      "planejamento reprodutivo",
      "saúde sexual e reprodutiva",
      "direitos reprodutivos",
      "saúde da mulher"
    ],
    "tip": "Planejamento reprodutivo: concepção e anticoncepção, para todos, inclusive adolescentes."
  },
  {
    "id": "fubog2025-9",
    "module": "Saúde Coletiva",
    "text": "Entre os objetivos e usos da vigilância em saúde pública estão:",
    "options": [
      "Identificar, quantificar e monitorar as tendências e padrões do processo saúde-doença nas populações",
      "Detectar mudanças crônicas na ocorrência e na distribuição das doenças",
      "Realizar mudanças nos padrões de ocorrência dos agentes e hospedeiros",
      "Investigar mesmo sem ter como controlar as doenças"
    ],
    "correctAnswer": 0,
    "explanation": "A vigilância em saúde pública é a coleta, análise e interpretação contínuas e sistemáticas de dados de saúde para planejar, implementar e avaliar ações. Entre seus objetivos: identificar, quantificar e monitorar tendências e padrões do processo saúde-doença; detectar mudanças agudas (surtos, epidemias); estimar a magnitude dos problemas; e avaliar medidas de controle.",
    "commentary": "Detectar mudanças crônicas (B): a vigilância se destaca na detecção de mudanças agudas na ocorrência das doenças (surtos), além das tendências.\n\nRealizar mudanças nos padrões dos agentes e hospedeiros (C): a vigilância observa e orienta ações; não altera diretamente agentes e hospedeiros.\n\nInvestigar mesmo sem ter como controlar (D): o princípio é “informação para a ação”; a vigilância existe para subsidiar o controle.",
    "reference": "OPAS – Módulos de Princípios de Epidemiologia para o Controle de Enfermidades (MOPECE), módulo 4",
    "tags": [
      "vigilância em saúde",
      "vigilância epidemiológica",
      "epidemiologia"
    ],
    "tip": "Vigilância = informação para a ação."
  },
  {
    "id": "fubog2025-10",
    "module": "Saúde Coletiva",
    "text": "São quatro as etapas básicas da vigilância e cada uma delas tem atividades e responsáveis específicos dentro do sistema. Sobre isso, há as seguintes afirmativas:\n\nI. É necessário contar com dados de população para usar como denominadores no sistema de vigilância.\nII. A análise envolve principalmente um processo de descrição e comparação de dados com relação a características e atributos de tempo, lugar e pessoa.\nIII. A interpretação dos dados serve para a geração de hipóteses.\n\nDessa forma, é CORRETO afirmar:",
    "options": [
      "Apenas III está correta",
      "Apenas II está correta",
      "Apenas II e III estão corretas",
      "Todas estão corretas"
    ],
    "correctAnswer": 3,
    "explanation": "As quatro etapas da vigilância (MOPECE/OPAS) são coleta, análise, interpretação e difusão. Para calcular taxas é preciso ter dados populacionais como denominadores (I correta). A análise descreve e compara os dados segundo tempo, lugar e pessoa (II correta). A interpretação dos achados permite gerar hipóteses sobre causas e fatores de risco, a serem testadas por estudos analíticos (III correta).",
    "commentary": "Apenas III (A), apenas II (B) e apenas II e III (C): todas as três afirmativas estão corretas.",
    "reference": "OPAS – MOPECE, módulo 4: Vigilância em saúde pública",
    "tags": [
      "vigilância epidemiológica",
      "análise de dados",
      "epidemiologia"
    ],
    "tip": "Etapas da vigilância: coleta, análise, interpretação e difusão."
  },
  {
    "id": "fubog2025-11",
    "module": "Saúde Coletiva",
    "text": "Segundo o código de ética médica, é vedado ao médico:",
    "options": [
      "Recusar-se a exercer sua profissão em instituição pública ou privada onde as condições de trabalho não sejam dignas",
      "Prestar informações a empresas seguradoras sobre as circunstâncias da morte do paciente sob seus cuidados, além das contidas na declaração de óbito",
      "Apontar falhas em normas, contratos e práticas internas das instituições quando as julgar indignas do exercício da profissão ou prejudiciais a si mesmo, paciente e terceiros",
      "Requerer desagravo público ao Conselho Regional de Medicina quando atingido no exercício de sua profissão"
    ],
    "correctAnswer": 1,
    "explanation": "O Código de Ética Médica (Resolução CFM 2.217/2018), no capítulo sobre sigilo, veda ao médico prestar a empresas seguradoras qualquer informação sobre as circunstâncias da morte do paciente sob seus cuidados além das contidas na declaração de óbito, salvo por expresso consentimento do seu representante legal (art. 77).",
    "commentary": "Recusar-se a trabalhar sem condições dignas (A): é direito do médico (Capítulo II, inciso IV).\n\nApontar falhas em normas e práticas institucionais (C): também é direito do médico (inciso III).\n\nRequerer desagravo público ao CRM (D): é direito do médico (inciso VII).",
    "reference": "Conselho Federal de Medicina – Código de Ética Médica (Resolução CFM nº 2.217/2018), art. 77 e Capítulo II",
    "tags": [
      "código de ética médica",
      "sigilo médico",
      "ética médica"
    ],
    "tip": "Seguradora só recebe o que está na declaração de óbito."
  },
  {
    "id": "fubog2025-12",
    "module": "Saúde Coletiva",
    "text": "No Brasil, a ética médica é normatizada pelo Conselho Federal de Medicina (CFM) desde 1957, em suas diferentes hierarquias normativas (Código de Ética Médica, Resoluções e Pareceres), e pelos Conselhos Regionais de Medicina (CRM). Segundo o Código De Ética Médica, é CORRETO afirmar:",
    "options": [
      "É concedido ao médico: ser perito ou auditor do próprio paciente, de pessoa de sua família ou de qualquer outra com a qual tenha relações",
      "É vedado ao médico: liberar cópias do prontuário sob sua guarda, salvo quando autorizado, por escrito pelo paciente, para atender a ordem judicial ou para a sua própria defesa",
      "É permitido ao médico: revelar fato de que tenha conhecimento em virtude do exercício de sua profissão, salvo por motivo justo, dever legal ou consentimento, por escrito, do paciente",
      "O médico guardará sigilo a respeito das informações de que detenha conhecimento no desempenho de suas funções, sem exceção dos casos previstos em lei"
    ],
    "correctAnswer": 1,
    "explanation": "O Código de Ética Médica veda ao médico liberar cópias do prontuário sob sua guarda, exceto para atender ordem judicial, para a sua própria defesa ou quando autorizado por escrito pelo paciente (art. 89). A alternativa B reproduz essa vedação, ainda que com redação condensada.",
    "commentary": "Ser perito ou auditor do próprio paciente (A): é vedado (art. 93), não concedido.\n\nPermitido revelar fato conhecido no exercício profissional (C): é vedado revelá-lo, salvo por motivo justo, dever legal ou consentimento por escrito (art. 73).\n\nSigilo sem exceção dos casos previstos em lei (D): o sigilo admite exceções — justamente o dever legal, o motivo justo e o consentimento do paciente.",
    "reference": "Conselho Federal de Medicina – Código de Ética Médica (Resolução CFM nº 2.217/2018), arts. 73, 89 e 93",
    "tags": [
      "código de ética médica",
      "prontuário",
      "sigilo médico",
      "ética médica"
    ],
    "tip": "Cópia de prontuário: só com autorização escrita do paciente, ordem judicial ou para a própria defesa."
  },
  {
    "id": "fubog2025-13",
    "module": "Saúde Coletiva",
    "text": "Com relação às patologias mais comuns entre os brasileiros, é CORRETO afirmar:",
    "options": [
      "Não há evidências de que hábitos saudáveis e uma alimentação equilibrada influenciam o surgimento de Alzheimer",
      "O Brasil ocupa o terceiro lugar mundial em número de casos de depressão",
      "O diagnóstico de Acidente Vascular Cerebral (AVC) é estabelecido por meio da avaliação clínica do paciente",
      "A hipertensão manifesta-se com sinais evidentes"
    ],
    "correctAnswer": 2,
    "explanation": "Entre as afirmativas, a correta é que o diagnóstico de AVC é estabelecido pela avaliação clínica — déficit neurológico focal de início súbito —, enquanto a neuroimagem (TC ou RM) define o tipo (isquêmico ou hemorrágico) e orienta o tratamento. Também se sabe que hábitos saudáveis reduzem o risco de demência, que a hipertensão costuma ser silenciosa e que o Brasil lidera os transtornos de ansiedade nas Américas, mas não é o terceiro no mundo em depressão.",
    "commentary": "Hábitos saudáveis não influenciam o Alzheimer (A): controle de fatores de risco (atividade física, hipertensão, diabetes, tabagismo, escolaridade) reduz o risco de demência.\n\nBrasil em terceiro lugar mundial em depressão (B): o Brasil tem a maior prevalência de depressão da América Latina, mas não ocupa o terceiro lugar mundial.\n\nHipertensão com sinais evidentes (D): a hipertensão costuma ser assintomática (“assassina silenciosa”).",
    "reference": "Ministério da Saúde – Linha de cuidado do AVC; Lancet Commission on dementia prevention (2024)",
    "tags": [
      "AVC",
      "doenças crônicas",
      "epidemiologia"
    ],
    "tip": "AVC: diagnóstico clínico; a imagem define o tipo."
  },
  {
    "id": "fubog2025-14",
    "module": "Saúde Coletiva",
    "text": "A medicina preventiva é categorizada em quatro níveis principais: prevenção primária, secundária, terciária e quaternária, cada um abordando diferentes estágios do processo de doença e saúde. A respeito do assunto abordado, é CORRETO afirmar:",
    "options": [
      "O foco do quarto nível é melhorar a qualidade de vida e aumentar a expectativa de vida",
      "As intervenções na prevenção secundária incluem o diagnóstico precoce e o tratamento inicial",
      "O terceiro nível visa reduzir o impacto de uma doença sendo estabelecida",
      "Saneamento básico faz parte da prevenção primária"
    ],
    "correctAnswer": 3,
    "explanation": "Prevenção primária atua antes da doença, sobre fatores de risco e promoção da saúde: saneamento básico, vacinação e educação em saúde são exemplos clássicos. A secundária faz diagnóstico precoce e tratamento oportuno; a terciária reduz incapacidades e complicações da doença estabelecida (reabilitação); a quaternária evita a iatrogenia e o excesso de intervenções.",
    "commentary": "Quarto nível voltado a qualidade e expectativa de vida (A): a prevenção quaternária visa evitar danos de intervenções desnecessárias.\n\nSecundária com diagnóstico precoce e tratamento inicial (B): a afirmação também está correta, por isso é aceita aqui.\n\nTerciária para doença “sendo estabelecida” (C): a terciária atua na doença já estabelecida, reduzindo sequelas.",
    "reference": "Leavell & Clark – Medicina Preventiva; Jamoulle M. Prevenção quaternária",
    "tags": [
      "níveis de prevenção",
      "prevenção primária",
      "promoção da saúde",
      "medicina preventiva"
    ],
    "alert": "Questão discutível: a alternativa B (prevenção secundária inclui diagnóstico precoce e tratamento inicial) também está correta. O gabarito é D; a B também é aceita aqui.",
    "alsoAccepted": [
      1
    ],
    "tip": "Primária: antes da doença; secundária: diagnóstico precoce; terciária: reabilitação; quaternária: evitar iatrogenia."
  },
  {
    "id": "fubog2025-15",
    "module": "Cirurgia",
    "text": "Os anestésicos são divididos em anestésicos gerais e anestésicos locais, que se diferem principalmente pela capacidade de induzir ou não a perda da consciência. Sobre o assunto, há as seguintes afirmativas:\n\nI. Os anestésicos gerais levam à perda da percepção e resposta aos estímulos externos, cursando com perda da consciência, amnésia anterógrada, analgesia, inibição dos reflexos autônomos e relaxamento da musculatura esquelética.\nII. Bloqueio neuromuscular: pode ser feito com succinilcolina ou rocurônio para facilitar a intubação orotraqueal.\nIII. Opioides não podem ser utilizados para controle dos reflexos autonômicos, somente como para auxílio na analgesia.\n\nConsiderando-se as afirmativas como verdadeiras (V) ou falsas (F), a alternativa CORRETA é:",
    "options": [
      "V, V, F",
      "V, V, V",
      "V, F, F",
      "F, F, F"
    ],
    "correctAnswer": 0,
    "explanation": "A anestesia geral produz inconsciência, amnésia, analgesia, inibição de reflexos autonômicos e relaxamento muscular (I verdadeira). Para facilitar a intubação, usam-se bloqueadores neuromusculares — despolarizante (succinilcolina) ou adespolarizante (rocurônio, este também na sequência rápida) (II verdadeira). Os opioides, além da analgesia, atenuam a resposta simpática à laringoscopia e à intubação (taquicardia e hipertensão), portanto controlam reflexos autonômicos (III falsa).",
    "commentary": "V, V, V (B), V, F, F (C) e F, F, F (D): a afirmativa I e a II são verdadeiras e a III é falsa — opioides como fentanil são usados justamente para bloquear a resposta autonômica à intubação.",
    "reference": "Miller's Anesthesia, 9ª ed.; Manual de Anestesiologia da SBA",
    "tags": [
      "anestesia geral",
      "bloqueadores neuromusculares",
      "opioides",
      "anestesiologia"
    ],
    "tip": "Fentanil na indução: analgesia e bloqueio da resposta simpática à laringoscopia."
  },
  {
    "id": "fubog2025-16",
    "module": "Cirurgia",
    "text": "Sobre fraturas ósseas, é CORRETO afirmar:",
    "options": [
      "A necrose asséptica é uma complicação precoce associada a fraturas",
      "Fraturas por estresse representam o estágio final das lesões por estresse nos ossos",
      "A formação do calo ósseo ocorre no estágio inicial da consolidação da fratura",
      "A pseudoartrose é uma complicação imediata das fraturas"
    ],
    "correctAnswer": 1,
    "explanation": "As lesões ósseas por estresse formam um contínuo: reação de estresse (edema ósseo) → fratura por estresse, que é o estágio final, quando a carga repetitiva supera a capacidade de remodelação do osso. Quanto às demais: o calo ósseo forma-se na fase de reparação, após a fase inflamatória; necrose avascular e pseudoartrose são complicações tardias.",
    "commentary": "Necrose asséptica como complicação precoce (A): é complicação tardia (meses), como na cabeça femoral e no escafoide.\n\nCalo ósseo no estágio inicial (C): a fase inicial é a inflamatória (hematoma); o calo se forma depois, na fase de reparação.\n\nPseudoartrose como complicação imediata (D): é a falta de consolidação após o tempo esperado, complicação tardia.",
    "reference": "Rockwood and Green's Fractures in Adults, 9ª ed.; SBOT",
    "tags": [
      "fraturas",
      "fratura por estresse",
      "consolidação óssea",
      "ortopedia"
    ],
    "tip": "Fases da consolidação: inflamatória → reparação (calo) → remodelação."
  },
  {
    "id": "fubog2025-17",
    "module": "Clínica Médica",
    "text": "A Insuficiência Cardíaca (IC) corresponde à incapacidade do coração em bombear o sangue adequadamente devido à disfunção sistólica, diastólica ou ambas, de um ou dos dois ventrículos. A respeito do assunto, é CORRETO afirmar:",
    "options": [
      "No estágio A da doença, embora o paciente tenha o risco de desenvolvimento da insuficiência cardíaca, ainda não existem sinais de comprometimento estrutural cardíaco, ou sintomas da doença",
      "A presença de 2 critérios maiores ou 1 critério maior e 1 critério menor (critérios de Framingham) confirmam o diagnóstico de insuficiência cardíaca",
      "Diuréticos tiazídicos aumentam a sobrevida do paciente com IC",
      "A hipertensão arterial é a principal causa de insuficiência cardíaca, superando a obstrução das artérias do coração"
    ],
    "correctAnswer": 0,
    "explanation": "Os estágios da insuficiência cardíaca (ACC/AHA) são: A — risco de IC (hipertensão, diabetes, obesidade), sem doença estrutural nem sintomas; B — doença estrutural sem sintomas (pré-IC); C — doença estrutural com sintomas atuais ou prévios; D — IC avançada refratária. A alternativa A define corretamente o estágio A.",
    "commentary": "Framingham com 2 maiores ou 1 maior e 1 menor (B): o diagnóstico exige 2 critérios maiores ou 1 maior e 2 menores.\n\nTiazídicos aumentam a sobrevida (C): diuréticos aliviam congestão, mas não reduzem mortalidade na IC.\n\nHipertensão supera a doença coronariana como causa (D): em grande parte do mundo e no Brasil (registro BREATHE), a cardiopatia isquêmica é a principal causa, seguida da hipertensiva.",
    "reference": "Sociedade Brasileira de Cardiologia – Diretriz Brasileira de Insuficiência Cardíaca (2018) e atualização 2021; AHA/ACC/HFSA 2022 Guideline",
    "tags": [
      "insuficiência cardíaca",
      "estágios da insuficiência cardíaca",
      "critérios de Framingham",
      "cardiologia"
    ],
    "tip": "Framingham: 2 maiores ou 1 maior + 2 menores."
  },
  {
    "id": "fubog2025-18",
    "module": "Clínica Médica",
    "text": "Os transtornos de humor são distúrbios emocionais que consistem em períodos prolongados de tristeza, humor elevado, ou ambos. Transtornos do humor podem ocorrer em adultos, adolescentes ou crianças. Sobre o tema, é CORRETO afirmar:",
    "options": [
      "A classe medicamentosa dos ansiolíticos e antidepressivos é a primeira linha de tratamento para transtornos do humor",
      "Transtorno de ansiedade generalizada faz parte dos transtornos de humor",
      "Transtorno bipolar I: é definido como a presença de pelo menos um episódio maníaco completo e, na maioria das vezes, episódios depressivos",
      "Transtorno bipolar II: é definido pela presença de episódios depressivos maiores com pelo menos um episódio maníaco"
    ],
    "correctAnswer": 2,
    "explanation": "Transtorno bipolar tipo I é definido por pelo menos um episódio maníaco completo (duração ≥ 7 dias ou com internação), geralmente com episódios depressivos ao longo da vida, embora a depressão não seja obrigatória. O tipo II exige pelo menos um episódio hipomaníaco e um depressivo maior, sem nunca ter havido mania.",
    "commentary": "Ansiolíticos e antidepressivos como primeira linha (A): no transtorno bipolar a base é o estabilizador de humor (lítio, anticonvulsivantes, antipsicóticos atípicos); antidepressivo isolado pode induzir virada maníaca.\n\nTAG como transtorno de humor (B): o TAG é transtorno de ansiedade.\n\nBipolar II com episódio maníaco (D): a presença de mania define tipo I; o tipo II tem hipomania.",
    "reference": "DSM-5-TR (APA, 2022); Associação Brasileira de Psiquiatria",
    "tags": [
      "transtorno bipolar",
      "transtornos de humor",
      "psiquiatria"
    ],
    "tip": "Bipolar I = mania; bipolar II = hipomania + depressão maior."
  },
  {
    "id": "fubog2025-19",
    "module": "Cirurgia",
    "text": "De acordo com as técnicas cirúrgicas utilizadas em bariátricas, é CORRETO afirmar:",
    "options": [
      "Cirurgia de Sleeve é considerada restritiva e metabólica, nela o estômago é transformado em um tubo, com capacidade de 400 a 500 ml",
      "Bypass gástrico é a técnica bariátrica mais praticada no Brasil, correspondendo a 75% das cirurgias realizadas",
      "Banda gástrica ajustável ainda é amplamente utilizada, apesar de ter sido uma das primeiras técnicas criadas",
      "Duodenal Switch é a associação entre gastrectomia vertical e banda gástrica ajustável"
    ],
    "correctAnswer": 1,
    "explanation": "Pelo gabarito, o bypass gástrico em Y de Roux é a técnica mais realizada no Brasil, com cerca de 75% das cirurgias segundo dados históricos da Sociedade Brasileira de Cirurgia Bariátrica e Metabólica. A gastrectomia vertical (sleeve) tem crescido e vem se aproximando ou, em alguns levantamentos recentes, ultrapassando o bypass.",
    "commentary": "Sleeve com capacidade de 400 a 500 mL (A): o estômago remanescente fica com cerca de 100–200 mL.\n\nBanda gástrica ainda amplamente usada (C): caiu em desuso pelos maus resultados de longo prazo e pelas complicações.\n\nDuodenal switch com banda (D): associa gastrectomia vertical a derivação biliopancreática com switch duodenal, não a banda.",
    "reference": "Sociedade Brasileira de Cirurgia Bariátrica e Metabólica (SBCBM); Resolução CFM nº 2.429/2025",
    "tags": [
      "cirurgia bariátrica",
      "bypass gástrico",
      "gastrectomia vertical",
      "obesidade"
    ],
    "alert": "Os dados sobre a proporção de cada técnica variam entre levantamentos; a gastrectomia vertical cresceu bastante nos últimos anos."
  },
  {
    "id": "fubog2025-20",
    "module": "Clínica Médica",
    "text": "As Infecções Sexualmente Transmissíveis (IST) podem se manifestar por meio de lesões, corrimentos, entre outros possíveis sintomas, como dor pélvica, disúria, lesões de pele e o aumento de linfonodos. A respeito do assunto, é CORRETO afirmar:",
    "options": [
      "Sífilis primária pode atingir e ter repercussão no sistema nervoso central",
      "O corrimento vaginal é um sintoma muito comum e suas causas são sempre consideradas ISTs",
      "Condilomas anogenitais são comuns em infecções por clamídia",
      "Para interromper a transmissão dessas infecções e evitar a reinfecção, é fundamental que os parceiros também sejam testados e tratados"
    ],
    "correctAnswer": 3,
    "explanation": "Para interromper a cadeia de transmissão das IST e evitar reinfecção, é fundamental a abordagem das parcerias sexuais: comunicação, testagem e tratamento, conforme o PCDT-IST. Tratar só o caso índice leva a reinfecção.",
    "commentary": "Sífilis primária atingindo o SNC (A): o acometimento neurológico pode ocorrer em qualquer fase, mas a neurossífilis é característica das fases secundária e tardia; na primária, a manifestação é o cancro.\n\nCorrimento sempre IST (B): candidíase e vaginose bacteriana, causas frequentes de corrimento, não são consideradas IST.\n\nCondilomas por clamídia (C): os condilomas acuminados são causados pelo HPV (tipos 6 e 11).",
    "reference": "Ministério da Saúde – PCDT para Atenção Integral às Pessoas com IST (2022)",
    "tags": [
      "infecções sexualmente transmissíveis",
      "tratamento de parcerias",
      "saúde sexual"
    ],
    "tip": "IST: tratar sempre as parcerias."
  },
  {
    "id": "fubog2025-21",
    "module": "Pediatria",
    "text": "Paciente, sexo feminino, 2 anos, foi diagnosticada com bronquiolite após apresentar chiado no peito e dificuldade para respirar. Ela não tem histórico de asma na família. Sobre o caso, há as seguintes afirmativas:\n\nI. A bronquiolite é geralmente causada por uma infecção bacteriana ou viral, a depender do caso.\nII. A nebulização pode ser um tratamento eficaz, porém não o único, para aliviar os sintomas da criança.\nIII. A bronquiolite é mais comum em crianças menores de dois anos.\n\nDessa forma, é CORRETO afirmar:",
    "options": [
      "Apenas I e III estão corretas",
      "Apenas II está correta",
      "Apenas II e III estão corretas",
      "Apenas III está correta"
    ],
    "correctAnswer": 2,
    "explanation": "A bronquiolite viral aguda é causada principalmente pelo vírus sincicial respiratório, e é mais comum em menores de 2 anos (sobretudo menores de 6 meses) (III correta). Não é causada por bactérias (I incorreta). O tratamento é de suporte (oxigênio se SatO₂ < 90–92%, hidratação, aspiração nasal). A nebulização com salina hipertônica pode ser considerada em internados e é parte do suporte, mas não o único tratamento (II aceita como correta pelo gabarito). Broncodilatadores e corticoides não são recomendados de rotina.",
    "commentary": "Apenas I e III (A): a bronquiolite é viral, não bacteriana.\n\nApenas II (B) e apenas III (D): o gabarito considera as afirmativas II e III corretas.",
    "reference": "Sociedade Brasileira de Pediatria – Diretrizes para o manejo da infecção causada pelo VSR (2017); AAP Clinical Practice Guideline: Bronchiolitis (2014)",
    "tags": [
      "bronquiolite",
      "vírus sincicial respiratório",
      "pneumologia pediátrica"
    ],
    "alert": "A afirmativa II é questionável: as diretrizes não recomendam nebulização de rotina na bronquiolite (salina hipertônica só em internados, com evidência fraca)."
  },
  {
    "id": "fubog2025-22",
    "module": "Pediatria",
    "text": "Paciente, sexo masculino, 3 anos, apresenta febre alta que desaparece subitamente, seguida por um exantema maculopapular que se inicia no tronco e se espalha para o rosto e membros, sem outros sintomas significativos. A mãe nega relatos de colegas com sintomas semelhantes. Nesse caso, a doença exantemática mais provável é:",
    "options": [
      "Exantema súbito",
      "Varicela",
      "Sarampo",
      "Eritema infeccioso"
    ],
    "correctAnswer": 0,
    "explanation": "Febre alta por alguns dias que desaparece de forma súbita, seguida de exantema maculopapular que começa no tronco e se espalha, em criança pequena sem outros sintomas: exantema súbito (roséola), causado pelo herpesvírus humano 6 e 7.",
    "commentary": "Varicela (B): exantema vesicular, polimórfico e pruriginoso, que surge com a febre.\n\nSarampo (C): exantema craniocaudal com febre alta persistente, tosse, coriza, conjuntivite e manchas de Koplik.\n\nEritema infeccioso (D): face esbofeteada seguida de exantema rendilhado, com febre baixa ou ausente.",
    "reference": "Sociedade Brasileira de Pediatria – Tratado de Pediatria, 5ª ed.",
    "tags": [
      "exantema súbito",
      "roséola",
      "doenças exantemáticas",
      "infectologia pediátrica"
    ],
    "tip": "Febre some, exantema aparece = exantema súbito."
  },
  {
    "id": "fubog2025-23",
    "module": "Pediatria",
    "text": "A última doença erradicada no Brasil graças às campanhas de vacinação do Programa Nacional de Imunização (PNI) é:",
    "options": [
      "Sarampo",
      "Rubéola",
      "Varíola",
      "Poliomielite"
    ],
    "correctAnswer": 1,
    "explanation": "O Brasil recebeu em 2015 a certificação da OPAS/OMS de eliminação da rubéola e da síndrome da rubéola congênita, graças às campanhas de vacinação do PNI — a mais recente doença eliminada entre as opções. O termo correto é eliminação (interrupção da transmissão endêmica no país), não erradicação.",
    "commentary": "Sarampo (A): o Brasil foi certificado como livre do sarampo em 2016, perdeu a certificação em 2019 com a volta da circulação e só a recuperou em 2024.\n\nVaríola (C): é a única doença humana erradicada no mundo (1980); no Brasil o último caso foi em 1971 — não é a mais recente.\n\nPoliomielite (D): eliminada no Brasil em 1994, antes da rubéola.",
    "reference": "Ministério da Saúde – Programa Nacional de Imunizações; OPAS – Certificação de eliminação da rubéola nas Américas (2015)",
    "tags": [
      "rubéola",
      "eliminação de doenças",
      "PNI",
      "imunizações"
    ],
    "tip": "Eliminação (país sem transmissão endêmica) ≠ erradicação (agente extinto no mundo)."
  },
  {
    "id": "fubog2025-24",
    "module": "Pediatria",
    "text": "A recomendação do Ministério da Saúde para o aleitamento materno exclusivo é:",
    "options": [
      "Até os seis meses de idade",
      "Até os três meses de idade",
      "Até os nove meses de idade",
      "Até os doze meses de idade"
    ],
    "correctAnswer": 0,
    "explanation": "O Ministério da Saúde e a OMS recomendam aleitamento materno exclusivo até os 6 meses de idade e, a partir daí, alimentação complementar adequada com manutenção do aleitamento até 2 anos ou mais.",
    "commentary": "3 meses (B), 9 meses (C) e 12 meses (D): o aleitamento exclusivo é recomendado até os 6 meses; depois, mantém-se a amamentação com alimentação complementar.",
    "reference": "Ministério da Saúde – Guia Alimentar para Crianças Brasileiras Menores de 2 Anos (2019)",
    "tags": [
      "aleitamento materno",
      "aleitamento materno exclusivo",
      "puericultura"
    ],
    "tip": "AME até 6 meses; amamentação até 2 anos ou mais."
  },
  {
    "id": "fubog2025-25",
    "module": "Pediatria",
    "text": "As áreas de avaliação do desenvolvimento neuropsicomotor segundo o teste de Gesell são:",
    "options": [
      "Motora grosseira, motora fina, pessoal-social e emocional",
      "Motora grosseira, motora fina, cognitiva e emocional",
      "Motora grosseira, cognitiva, social e linguagem",
      "Motora grosseira, motora fina, pessoal-social e linguagem"
    ],
    "correctAnswer": 3,
    "explanation": "Arnold Gesell descreveu quatro áreas (campos) do comportamento para avaliar o desenvolvimento neuropsicomotor: motora (grosseira e fina — em algumas versões, motora e adaptativa), linguagem e pessoal-social. A alternativa D traz as áreas usadas em instrumentos derivados (como o Denver II): motora grosseira, motora fina, pessoal-social e linguagem.",
    "commentary": "Com área emocional (A e B): a área emocional não é um dos domínios avaliados.\n\nSem motora fina e com área cognitiva (C): falta a motricidade fina, e a área cognitiva não é domínio separado nessa classificação.",
    "reference": "Gesell A, Amatruda CS. Diagnóstico do desenvolvimento; Sociedade Brasileira de Pediatria – Manual de Puericultura",
    "tags": [
      "desenvolvimento neuropsicomotor",
      "teste de Gesell",
      "puericultura"
    ],
    "tip": "Áreas do desenvolvimento: motora grosseira, motora fina/adaptativa, linguagem e pessoal-social."
  },
  {
    "id": "fubog2025-26",
    "module": "Pediatria",
    "text": "Um recém-nascido, aos cinco minutos de vida, apresenta choro vigoroso, frequência cardíaca de 110 batimentos por minuto, chora quando estimulado, tem movimentos ativos e a pele rosada. Sobre o caso, há as seguintes afirmativas:\n\nI. O choro vigoroso recebe 2 pontos na escala de Apgar.\nII. A frequência cardíaca de 110 batimentos por minuto recebe 2 pontos na escala de Apgar.\nIII. A resposta ao estímulo com choro recebe 1 ponto na escala de Apgar.\n\nConsiderando-se as afirmativas como verdadeiras (V) ou falsas (F), a alternativa CORRETA é:",
    "options": [
      "V, V, V",
      "V, F, V",
      "V, V, F",
      "F, F, F"
    ],
    "correctAnswer": 2,
    "explanation": "Escore de Apgar (0 a 2 pontos em cada item): frequência cardíaca (ausente 0; < 100 bpm 1; ≥ 100 bpm 2), esforço respiratório (ausente 0; irregular/choro fraco 1; regular/choro forte 2), tônus (flácido 0; alguma flexão 1; movimentos ativos 2), irritabilidade reflexa (ausente 0; careta 1; choro/espirro/tosse 2) e cor (cianose/palidez 0; acrocianose 1; rosado 2).\n\nI: choro vigoroso = 2 (V). II: FC de 110 bpm (≥ 100) = 2 (V). III: resposta ao estímulo com choro = 2, não 1 (F).",
    "commentary": "V, V, V (A) e V, F, V (B): a resposta ao estímulo com choro vale 2 pontos, não 1.\n\nF, F, F (D): choro vigoroso e FC ≥ 100 valem 2 pontos cada.",
    "reference": "Sociedade Brasileira de Pediatria – Programa de Reanimação Neonatal (2022)",
    "tags": [
      "escore de Apgar",
      "neonatologia",
      "sala de parto"
    ],
    "tip": "Apgar: FC ≥ 100 = 2; choro forte = 2; choro ao estímulo = 2; careta = 1."
  },
  {
    "id": "fubog2025-27",
    "module": "Pediatria",
    "text": "Com base no Protocolo Clínico e Diretrizes Terapêuticas (PCDT) da leucemia mieloide crônica de crianças e adolescentes, o critério de inclusão para o tratamento com Inibidores de Tirosina-quinase (ITQ) em pacientes pediátricos com diagnóstico é:",
    "options": [
      "Confirmado de leucemia mieloide crônica em fase crônica",
      "De leucemia mieloide crônica em fase acelerada",
      "De leucemia mieloide crônica em fase blástica",
      "De leucemia mieloide crônica sem necessidade de confirmação laboratorial"
    ],
    "correctAnswer": 0,
    "explanation": "Pelo PCDT da leucemia mieloide crônica de crianças e adolescentes do Ministério da Saúde, o critério de inclusão para tratamento com inibidor de tirosina-quinase (imatinibe como primeira linha) é o diagnóstico confirmado de LMC — presença do cromossomo Philadelphia/BCR-ABL1 — em fase crônica, que é a apresentação de quase todos os casos pediátricos.",
    "commentary": "Fase acelerada (B) e fase blástica (C): o PCDT pediátrico citado tem como critério a fase crônica; as fases avançadas têm abordagem própria (inclusive transplante).\n\nSem confirmação laboratorial (D): o tratamento exige confirmação citogenética ou molecular.",
    "reference": "Ministério da Saúde – PCDT Leucemia Mieloide Crônica de Crianças e Adolescentes",
    "tags": [
      "leucemia mieloide crônica",
      "inibidores de tirosina-quinase",
      "imatinibe",
      "oncologia pediátrica"
    ],
    "tip": "LMC: confirmar BCR-ABL1; ITQ (imatinibe) na fase crônica."
  },
  {
    "id": "fubog2025-28",
    "module": "Pediatria",
    "text": "Com base no protocolo do Ministério da Saúde para a avaliação e conduta da epilepsia na atenção básica, o principal critério para o diagnóstico de epilepsia em crianças é:",
    "options": [
      "A presença de crises convulsivas provocadas por infecções agudas",
      "A presença de uma única crise convulsiva acompanhada de febre alta",
      "A ocorrência de crises convulsivas exclusivamente durante o sono",
      "A presença de duas ou mais crises não provocadas com intervalo maior do que 24 horas"
    ],
    "correctAnswer": 3,
    "explanation": "Epilepsia é definida (ILAE) por pelo menos duas crises não provocadas (ou reflexas) com intervalo superior a 24 horas, ou por uma crise não provocada com alto risco de recorrência (≥ 60%), ou pelo diagnóstico de uma síndrome epiléptica. Esse é o critério adotado pelo Ministério da Saúde.",
    "commentary": "Crises provocadas por infecções agudas (A): crises sintomáticas agudas (provocadas) não definem epilepsia.\n\nCrise única com febre alta (B): é crise febril, que não é epilepsia.\n\nCrises exclusivamente durante o sono (C): o momento da crise não é critério diagnóstico.",
    "reference": "Fisher RS et al. ILAE practical clinical definition of epilepsy (2014); Ministério da Saúde – PCDT Epilepsia (2019)",
    "tags": [
      "epilepsia",
      "crise convulsiva",
      "neurologia pediátrica"
    ],
    "tip": "Epilepsia: 2 crises não provocadas com mais de 24 h de intervalo."
  },
  {
    "id": "fubog2025-29",
    "module": "Pediatria",
    "text": "De acordo com o consenso brasileiro sobre alergia alimentar, a principal vantagem da utilização de fórmulas extensamente hidrolisadas em comparação com fórmulas parcialmente hidrolisadas no manejo de alergia ao leite de vaca em lactentes é:",
    "options": [
      "São mais eficazes na prevenção de alergias alimentares em lactentes de alto risco",
      "São mais eficazes na indução de tolerância oral em lactentes com alergia ao leite de vaca",
      "São mais palatáveis e aceitas pelos lactentes",
      "São mais econômicas e acessíveis para as famílias"
    ],
    "correctAnswer": 1,
    "explanation": "No tratamento da alergia à proteína do leite de vaca, as fórmulas extensamente hidrolisadas são a primeira opção (toleradas por mais de 90% dos alérgicos), enquanto as parcialmente hidrolisadas contêm peptídeos alergênicos e não devem ser usadas no tratamento. Pelo gabarito, a principal vantagem destacada é sua maior eficácia na indução de tolerância oral — dados com hidrolisado extenso de caseína com Lactobacillus rhamnosus GG sugerem aquisição de tolerância mais rápida.",
    "commentary": "Prevenção de alergia em alto risco (A): estudos recentes não confirmaram benefício consistente de fórmulas hidrolisadas na prevenção.\n\nMais palatáveis (C): ao contrário, as extensamente hidrolisadas têm sabor amargo e são menos palatáveis.\n\nMais baratas (D): são mais caras que as parcialmente hidrolisadas.",
    "reference": "Consenso Brasileiro sobre Alergia Alimentar (SBP/ASBAI, 2018)",
    "tags": [
      "alergia à proteína do leite de vaca",
      "fórmulas extensamente hidrolisadas",
      "alergia alimentar",
      "gastroenterologia pediátrica"
    ],
    "alert": "Observação: a grande vantagem das fórmulas extensamente hidrolisadas é serem toleradas pela maioria dos alérgicos (as parcialmente hidrolisadas não servem para tratamento). A indução de tolerância é argumento com evidência mais limitada."
  },
  {
    "id": "fubog2025-30",
    "module": "Pediatria",
    "text": "Paciente, 6 anos, apresenta quadro de infecção bacteriana pelo estreptococo do grupo A, com exantema, odinofagia e febre alta (38,4°C). A mãe notou o aparecimento de palidez em região perioral, como na imagem a seguir:\n\nEsse sinal é característico do quadro clínico da criança e é conhecido como:",
    "options": [
      "Sinal da Pastia",
      "Sinal de Koplik",
      "Sinal de Filatov",
      "Sinal de Kawasaki"
    ],
    "correctAnswer": 2,
    "explanation": "Na escarlatina (estreptococo do grupo A produtor de toxina eritrogênica), a face fica ruborizada com palidez ao redor da boca — o sinal de Filatov, mostrado na imagem. Outros sinais: exantema micropapular áspero (pele em lixa), linhas de Pastia nas dobras, língua em framboesa e descamação lamelar na convalescença.",
    "commentary": "Sinal de Pastia (A): linhas petequiais e hiperpigmentadas nas dobras flexoras (cotovelos, axilas), também da escarlatina.\n\nSinal de Koplik (B): manchas brancas na mucosa jugal, típicas do sarampo.\n\nSinal de Kawasaki (D): não existe; a doença de Kawasaki tem critérios próprios (febre, conjuntivite, alterações de mucosa e de extremidades, exantema, linfonodo).",
    "reference": "Sociedade Brasileira de Pediatria – Tratado de Pediatria, 5ª ed. (doenças exantemáticas)",
    "tags": [
      "escarlatina",
      "sinal de Filatov",
      "estreptococo",
      "doenças exantemáticas"
    ],
    "image": "/images/fubog2025-30.webp",
    "tip": "Escarlatina: Filatov (palidez perioral), Pastia (dobras), língua em framboesa, pele em lixa."
  },
  {
    "id": "fubog2025-31",
    "module": "Pediatria",
    "text": "Paciente, sexo masculino, 7 anos, apresenta coceira intensa, especialmente à noite, e erupções cutâneas com pequenas bolhas e linhas finas nos espaços entre os dedos, pulsos e axilas. Sua mãe relata que os sintomas começaram após uma visita a um acampamento escolar. Sobre o caso, há as seguintes afirmativas:\n\nI. A escabiose é causada pelo ácaro Sarcoptes Pediculoses.\nII. A transmissão da escabiose ocorre principalmente pelo contato direto pele a pele.\nIII. O tratamento de escolha para escabiose é a aplicação de antibióticos tópicos.\n\nDessa forma, é CORRETO afirmar:",
    "options": [
      "Apenas II está correta",
      "Apenas I está correta",
      "Apenas III está correta",
      "Apenas II e III estão corretas"
    ],
    "correctAnswer": 0,
    "explanation": "Prurido intenso noturno com lesões em espaços interdigitais, punhos e axilas, com pequenas vesículas e túneis (linhas finas), após contato coletivo: escabiose. É causada pelo ácaro Sarcoptes scabiei, variedade hominis (I incorreta, pois cita “Sarcoptes Pediculoses”), transmitida sobretudo por contato direto pele a pele prolongado (II correta). O tratamento é com escabicidas — permetrina 5% tópica ou ivermectina oral —, não com antibióticos (III incorreta), tratando também os contatos.",
    "commentary": "Apenas I (B): o agente é o Sarcoptes scabiei, não “Sarcoptes Pediculoses”.\n\nApenas III (C) e II e III (D): antibiótico tópico só se usa em infecção secundária; o tratamento é escabicida.",
    "reference": "Sociedade Brasileira de Dermatologia; Sociedade Brasileira de Pediatria – Escabiose",
    "tags": [
      "escabiose",
      "S. scabiei",
      "dermatologia pediátrica",
      "ectoparasitoses"
    ],
    "tip": "Escabiose: permetrina 5% ou ivermectina; tratar todos os contatos ao mesmo tempo."
  },
  {
    "id": "fubog2025-32",
    "module": "Pediatria",
    "text": "Entre as combinações a seguir, a que classifica um recém-nascido como Pequeno para a Idade Gestacional (PIG), considerando a idade gestacional e peso ao nascer, é:",
    "options": [
      "34 semanas e 2500 g",
      "38 semanas e 1900 g",
      "36 semanas e 1800 g",
      "40 semanas e 2100 g"
    ],
    "correctAnswer": 2,
    "explanation": "Pequeno para a idade gestacional (PIG) é o recém-nascido com peso abaixo do percentil 10 para a idade gestacional. Com 36 semanas, o percentil 10 fica em torno de 2.200 g; portanto, 1.800 g é PIG. O gabarito oficial é C.\n\nPorém, pelas curvas habituais (Intergrowth-21st, Fenton), 1.900 g com 38 semanas (p10 ≈ 2.600 g) e 2.100 g com 40 semanas (p10 ≈ 2.900 g) também são PIG. Só a alternativa A (2.500 g com 34 semanas) é adequada para a idade gestacional.",
    "commentary": "34 semanas e 2.500 g (A): peso adequado para a idade gestacional (entre os percentis 10 e 90).\n\n38 semanas e 1.900 g (B) e 40 semanas e 2.100 g (D): ambos estão abaixo do percentil 10 e também são PIG — por isso são aceitas aqui.",
    "reference": "Intergrowth-21st – Newborn size standards; Fenton TR, Kim JH. Fenton preterm growth chart (2013)",
    "tags": [
      "pequeno para a idade gestacional",
      "crescimento intrauterino",
      "neonatologia"
    ],
    "alert": "Questão com mais de uma resposta: além de C, as alternativas B (38 sem, 1.900 g) e D (40 sem, 2.100 g) também correspondem a PIG pelas curvas de referência. Mantido o gabarito oficial (C); B e D são aceitas aqui.",
    "alsoAccepted": [
      1,
      3
    ],
    "tip": "PIG = peso abaixo do percentil 10 para a idade gestacional."
  },
  {
    "id": "fubog2025-33",
    "module": "Pediatria",
    "text": "A classificação para a asma em um paciente que apresenta sintomas diurnos mais de duas vezes por semana, mas menos de uma vez por dia, e desperta à noite com sintomas mais de duas vezes por mês é:",
    "options": [
      "Asma intermitente",
      "Asma persistente leve",
      "Asma persistente moderada",
      "Asma persistente moderada a grave"
    ],
    "correctAnswer": 1,
    "explanation": "Na classificação clássica de gravidade da asma (GINA antiga/NAEPP), sintomas diurnos mais de 2 vezes por semana, mas não diários, e despertares noturnos mais de 2 vezes por mês correspondem a asma persistente leve. Intermitente: sintomas ≤ 2 vezes/semana e despertares ≤ 2 vezes/mês. Persistente moderada: sintomas diários e despertares mais de 1 vez por semana. Grave: sintomas contínuos e despertares frequentes.",
    "commentary": "Intermitente (A): exige sintomas ≤ 2 vezes por semana e despertares ≤ 2 vezes por mês.\n\nPersistente moderada (C): exige sintomas diários e despertares mais de uma vez por semana.\n\nModerada a grave (D): não é categoria dessa classificação e o paciente não tem sintomas diários.",
    "reference": "Sociedade Brasileira de Pneumologia e Tisiologia – Diretrizes para o manejo da asma (2012); NAEPP EPR-3",
    "tags": [
      "asma",
      "classificação da asma",
      "pneumologia"
    ],
    "tip": "Persistente leve: sintomas > 2×/semana (não diários), despertares > 2×/mês."
  },
  {
    "id": "fubog2025-34",
    "module": "Pediatria",
    "text": "A causa mais comum de Síndrome nefrótica em crianças é:",
    "options": [
      "Nefrite lúpica",
      "Glomeruloesclerose segmentar e focal",
      "Nefropatia membranosa",
      "Doença de lesões mínimas"
    ],
    "correctAnswer": 3,
    "explanation": "A causa mais comum de síndrome nefrótica primária na infância (entre 1 e 10 anos) é a doença de lesões mínimas, responsável por cerca de 80–90% dos casos nessa faixa. Costuma ser corticossensível, com complemento normal e sem hematúria ou hipertensão significativas.",
    "commentary": "Nefrite lúpica (A): causa secundária, mais comum em adolescentes do sexo feminino; quadro misto nefrítico-nefrótico.\n\nGlomeruloesclerose segmentar e focal (B): segunda causa, frequentemente corticorresistente.\n\nNefropatia membranosa (C): é causa comum de síndrome nefrótica em adultos, rara em crianças.",
    "reference": "Sociedade Brasileira de Pediatria – Síndrome nefrótica idiopática na infância; KDIGO 2021 Glomerular Diseases",
    "tags": [
      "síndrome nefrótica",
      "doença de lesões mínimas",
      "nefrologia pediátrica"
    ],
    "tip": "Síndrome nefrótica na criança: lesões mínimas, corticossensível."
  },
  {
    "id": "fubog2025-35",
    "module": "Pediatria",
    "text": "A forma mais comum de cardiopatia congênita é:",
    "options": [
      "Coarctação da aorta",
      "Comunicação Interventricular (CIV)",
      "Tetralogia de Fallot",
      "Transposição das grandes artérias"
    ],
    "correctAnswer": 1,
    "explanation": "A comunicação interventricular é a cardiopatia congênita mais comum (excluindo a valva aórtica bicúspide), responsável por cerca de 25–30% dos casos. Muitas CIVs musculares pequenas fecham espontaneamente. Entre as cianóticas, a mais comum é a tetralogia de Fallot (e a transposição das grandes artérias no período neonatal).",
    "commentary": "Coarctação da aorta (A): corresponde a cerca de 5–8% das cardiopatias congênitas.\n\nTetralogia de Fallot (C): é a cardiopatia cianótica mais comum, mas não a mais comum no geral.\n\nTransposição das grandes artérias (D): é a cianótica mais comum no recém-nascido, mas representa cerca de 5% do total.",
    "reference": "Sociedade Brasileira de Cardiologia – Departamento de Cardiopatias Congênitas; Nelson – Tratado de Pediatria",
    "tags": [
      "cardiopatias congênitas",
      "comunicação interventricular",
      "cardiologia pediátrica"
    ],
    "tip": "Cardiopatia congênita mais comum: CIV. Cianótica mais comum: Fallot."
  },
  {
    "id": "fubog2025-36",
    "module": "Pediatria",
    "text": "Paciente, sexo feminino, 3 anos, apresenta bolhas flácidas e superficiais no tronco, que se rompem facilmente, deixando uma base úmida e eritematosa. Sobre o caso, há as seguntes afirmativas:\n\nI. O diagnóstico mais provável é impetigo bolhoso.\nII. O impetigo bolhoso é causado por Streptococcus pyogenes.\nIII. A antibioticoterapia deve ser realizada preferencialmente por cefalosporina de 3ª geração.\n\nConsiderando-se as afirmativas como verdadeiras (V) ou falsas (F), a alternativa CORRETA é:",
    "options": [
      "F, F, F",
      "V, V, V",
      "V, V, F",
      "V, F, F"
    ],
    "correctAnswer": 3,
    "explanation": "Bolhas flácidas e superficiais que se rompem deixando base úmida e eritematosa, em criança pequena: impetigo bolhoso (I verdadeira). É causado pelo Staphylococcus aureus produtor de toxina esfoliativa, não pelo Streptococcus pyogenes (II falsa; o estreptococo causa principalmente o impetigo não bolhoso, com crostas melicéricas, junto com o S. aureus). O tratamento é tópico (mupirocina, ácido fusídico) nas formas localizadas, e sistêmico com cefalosporina de 1ª geração (cefalexina) ou oxacilina nas extensas — não cefalosporina de 3ª geração (III falsa).",
    "commentary": "F, F, F (A): o diagnóstico de impetigo bolhoso está correto.\n\nV, V, V (B) e V, V, F (C): o agente do impetigo bolhoso é o S. aureus, e o antibiótico sistêmico de escolha é cefalosporina de 1ª geração.",
    "reference": "Sociedade Brasileira de Dermatologia; IDSA Guidelines for Skin and Soft Tissue Infections (2014)",
    "tags": [
      "impetigo bolhoso",
      "S. aureus",
      "infecções de pele",
      "dermatologia pediátrica"
    ],
    "tip": "Impetigo bolhoso = S. aureus; sistêmico com cefalexina."
  },
  {
    "id": "fubog2025-37",
    "module": "Pediatria",
    "text": "Entre os achados laboratoriais a seguir, o mais indicativo de cetoacidose diabética é:",
    "options": [
      "Glicemia > 250 mg/dL, pH > 7,3, cetonemia negativa",
      "Glicemia < 250 mg/dL, pH > 7,5, cetonemia positiva",
      "Glicemia > 250 mg/dL, pH < 7,3, cetonemia positiva",
      "Glicemia < 250 mg/dL, pH > 7,5, cetonemia negativa"
    ],
    "correctAnswer": 2,
    "explanation": "Critérios de cetoacidose diabética: hiperglicemia (> 200–250 mg/dL), acidose metabólica (pH < 7,3 e/ou bicarbonato < 15–18 mEq/L) e cetonemia/cetonúria positiva. A alternativa C reúne os três.",
    "commentary": "pH > 7,3 com cetonemia negativa (A): sem acidose e sem cetose não há CAD.\n\nGlicemia < 250 e pH > 7,5 (B e D): pH acima de 7,5 é alcalose; e glicemia baixa afasta a CAD clássica (exceto a euglicêmica, que ainda assim tem acidose).",
    "reference": "Sociedade Brasileira de Diabetes – Diretriz 2024 (cetoacidose diabética); ISPAD Clinical Practice Consensus Guidelines 2022",
    "tags": [
      "cetoacidose diabética",
      "diabetes mellitus tipo 1",
      "emergência",
      "endocrinologia pediátrica"
    ],
    "tip": "CAD: glicemia > 200–250 + pH < 7,3 (ou HCO₃ < 15–18) + cetose."
  },
  {
    "id": "fubog2025-38",
    "module": "Pediatria",
    "text": "O estágio de Tanner em que a menarca geralmente ocorre é:",
    "options": [
      "M4",
      "M2",
      "M3",
      "M5"
    ],
    "correctAnswer": 0,
    "explanation": "A menarca ocorre geralmente no estágio M4 de Tanner (aréola e papila formando elevação secundária acima do contorno da mama), cerca de 2 a 2,5 anos após a telarca e depois do pico de velocidade de crescimento.",
    "commentary": "M2 (B): é o broto mamário, que marca o início da puberdade (telarca), em média 2 anos antes da menarca.\n\nM3 (C): fase de crescimento da mama e da aréola, com pico de velocidade de crescimento; a menarca costuma vir depois.\n\nM5 (D): mama adulta; a menarca já ocorreu, em geral.",
    "reference": "Sociedade Brasileira de Pediatria – Manual de Adolescência; Tanner JM. Growth at Adolescence",
    "tags": [
      "puberdade",
      "estágios de Tanner",
      "menarca",
      "adolescência"
    ],
    "tip": "Menarca: em geral no M4, ~2 anos após a telarca."
  },
  {
    "id": "fubog2025-39",
    "module": "Ciências Básicas",
    "text": "A estrutura cerebral responsável por respostas às cargas emocionais aos movimentos é:",
    "options": [
      "Córtex pré-frontal",
      "Área motora cingulada",
      "Área motora suplementar",
      "Área pré-motora"
    ],
    "correctAnswer": 1,
    "explanation": "A área motora cingulada, no córtex do giro do cíngulo (parte do sistema límbico), integra informações emocionais e motivacionais ao planejamento motor — é responsável pelas respostas motoras às cargas emocionais (por exemplo, expressão facial emocional e movimentos motivados).",
    "commentary": "Córtex pré-frontal (A): relacionado a funções executivas, planejamento e comportamento social.\n\nÁrea motora suplementar (C): planeja sequências de movimentos gerados internamente e coordena os dois lados do corpo.\n\nÁrea pré-motora (D): prepara movimentos guiados por estímulos externos (visuais, sensoriais).",
    "reference": "Machado A. Neuroanatomia Funcional, 3ª ed.; Kandel ER. Princípios de Neurociências",
    "tags": [
      "neuroanatomia",
      "córtex motor",
      "sistema límbico",
      "neurologia"
    ],
    "tip": "Emoção + movimento = área motora do cíngulo."
  },
  {
    "id": "fubog2025-40",
    "module": "Pediatria",
    "text": "Um recém-nascido com 28 semanas de idade gestacional e peso ao nascer de 900g é:",
    "options": [
      "Pré-termo moderado e extremo baixo peso ao nascer",
      "Pré-termo extremo e muito baixo peso ao nascer",
      "Pré-termo moderado e baixo peso ao nascer",
      "Pré-termo extremo e extremo baixo peso ao nascer"
    ],
    "correctAnswer": 3,
    "explanation": "Classificação pela idade gestacional: pré-termo extremo < 28 semanas; muito pré-termo 28 a < 32 semanas; pré-termo moderado a tardio 32 a < 37 semanas. Pelo peso: baixo peso < 2.500 g; muito baixo peso < 1.500 g; extremo baixo peso < 1.000 g. Um recém-nascido de 900 g tem extremo baixo peso. Pelo gabarito, 28 semanas também é classificado como pré-termo extremo — critério que muitas referências brasileiras adotam como ≤ 28 semanas.",
    "commentary": "Pré-termo moderado com extremo baixo peso (A) e pré-termo moderado com baixo peso (C): 28 semanas não é prematuridade moderada.\n\nPré-termo extremo com muito baixo peso (B): 900 g é menor que 1.000 g, ou seja, extremo baixo peso.",
    "reference": "OMS – Preterm birth; Ministério da Saúde – Atenção à Saúde do Recém-Nascido",
    "tags": [
      "prematuridade",
      "baixo peso ao nascer",
      "classificação do recém-nascido",
      "neonatologia"
    ],
    "alert": "Pela definição da OMS, pré-termo extremo é < 28 semanas; com exatamente 28 semanas seria “muito pré-termo”. O gabarito considera 28 semanas como extremo.",
    "tip": "Peso: < 2.500 baixo; < 1.500 muito baixo; < 1.000 extremo baixo peso."
  },
  {
    "id": "fubog2025-41",
    "module": "Cirurgia",
    "text": "A avaliação da gravidade da pancreatite aguda pode ser feita por diversos critérios. Sobre isso, há as seguintes afirmativas:\n\nI. A Proteína C Reativa (PCR) acima de 250mg/dl em 48 horas indica alto risco de necrose pancreática.\nII. O balanço hídrico diário é de significativa relevância para a avaliação da gravidade da pancreatite aguda.\nIII. Critérios como Sequential Organ Failure Assessment (SOFA), Marshall e Acute Physiology and Chronic Health Evalution (APACHE) II são utilizados para avaliar complicações sistêmicas.\n\nDessa forma, é CORRETO afirmar:",
    "options": [
      "Apenas II e III estão corretas",
      "Apenas II está correta",
      "Apenas III está correta",
      "Apenas I e III estão corretas"
    ],
    "correctAnswer": 0,
    "explanation": "I: PCR acima de 150 mg/L (15 mg/dL) em 48 horas indica pancreatite grave e risco de necrose; o valor citado (250 mg/dL) e a unidade estão incorretos (F). II: o balanço hídrico é importante na avaliação e no manejo, pois hemoconcentração, perda para o terceiro espaço e hipovolemia se associam a gravidade (V). III: escores de disfunção orgânica como SOFA, Marshall modificado e APACHE II avaliam complicações sistêmicas e definem falência orgânica (V).",
    "commentary": "Apenas II (B) e apenas III (C): as duas afirmativas, II e III, estão corretas.\n\nI e III (D): o ponto de corte de PCR usado é 150 mg/L em 48 horas, não 250 mg/dL.",
    "reference": "Classificação de Atlanta revisada (2012); IAP/APA Evidence-based guidelines for the management of acute pancreatitis (2013)",
    "tags": [
      "pancreatite aguda",
      "escores de gravidade",
      "proteína C-reativa",
      "cirurgia geral"
    ],
    "tip": "Pancreatite: PCR > 150 mg/L em 48 h sugere gravidade; Marshall define falência orgânica."
  },
  {
    "id": "fubog2025-42",
    "module": "Cirurgia",
    "text": "Paciente, sexo feminino, 35 anos, que após cirurgia abdominal apresenta um abaulamento na região da cicatriz cirúrgica, acompanhado de dor e sensação de peso. O tipo de hérnia mais provável e o principal fator de risco associado são:",
    "options": [
      "Hérnia umbilical, com obesidade como principal fator de risco",
      "Hérnia de spiegel, com gravidez como principal fator de risco",
      "Hérnia incisional, com infecção do sítio cirúrgico como principal fator de risco",
      "Hérnia epigástrica, com ascite como principal fator de risco"
    ],
    "correctAnswer": 2,
    "explanation": "Abaulamento na cicatriz de cirurgia abdominal prévia, com dor e sensação de peso: hérnia incisional. O principal fator de risco é a infecção do sítio cirúrgico; outros são obesidade, tabagismo, diabetes, desnutrição, uso de corticoide, técnica de fechamento inadequada e aumento da pressão intra-abdominal.",
    "commentary": "Hérnia umbilical (A): ocorre no anel umbilical, sem relação com cicatriz cirúrgica.\n\nHérnia de Spiegel (B): ocorre na linha semilunar, lateral ao reto abdominal, sem relação com incisão.\n\nHérnia epigástrica (D): ocorre na linha alba, acima do umbigo, sem relação com incisão; a ascite favorece hérnia umbilical.",
    "reference": "European Hernia Society Guidelines on the closure of abdominal wall incisions (2015); Sabiston – Tratado de Cirurgia",
    "tags": [
      "hérnia incisional",
      "infecção do sítio cirúrgico",
      "parede abdominal",
      "cirurgia geral"
    ],
    "tip": "Hérnia na cicatriz = incisional; principal fator de risco: infecção da ferida."
  },
  {
    "id": "fubog2025-43",
    "module": "Cirurgia",
    "text": "Paciente de 65 anos, com histórico de fibrilação atrial e hipertensão arterial controlada, comparece à Unidade de Pronto-Atendimento relatando dor abdominal intensa, desproporcional às alterações do exame físico. O diagnóstico mais provável é:",
    "options": [
      "Abdome agudo inflamatório",
      "Abdome agudo vascular isquêmico",
      "Abdome agudo obstrutivo",
      "Abdome agudo perfurativo"
    ],
    "correctAnswer": 1,
    "explanation": "Dor abdominal intensa, desproporcional ao exame físico (abdome pouco doloroso à palpação), em idoso com fibrilação atrial: abdome agudo vascular por isquemia mesentérica aguda, provavelmente por embolia da artéria mesentérica superior. A angiotomografia confirma o diagnóstico, e o tratamento é anticoagulação e revascularização de urgência.",
    "commentary": "Inflamatório (A): dor progressiva com sinais de irritação peritoneal localizada e febre.\n\nObstrutivo (C): dor em cólica, distensão, vômitos e parada de eliminação de gases e fezes.\n\nPerfurativo (D): dor súbita com abdome em tábua e pneumoperitônio — o exame físico é exuberante.",
    "reference": "ESVS Guidelines on the Management of Diseases of Mesenteric Arteries and Veins (2017); WSES Guidelines for acute mesenteric ischemia (2022)",
    "tags": [
      "isquemia mesentérica",
      "abdome agudo vascular",
      "fibrilação atrial",
      "cirurgia vascular"
    ],
    "tip": "Dor desproporcional ao exame + FA = isquemia mesentérica."
  },
  {
    "id": "fubog2025-44",
    "module": "Cirurgia",
    "text": "A pontuação mínima no escore de Alvarado que indica a necessidade de intervenção cirúrgica é:",
    "options": [
      "4 pontos",
      "5 pontos",
      "7 pontos",
      "9 pontos"
    ],
    "correctAnswer": 2,
    "explanation": "O escore de Alvarado (MANTRELS) soma até 10 pontos: migração da dor para FID (1), anorexia (1), náuseas/vômitos (1), dor em FID (2), descompressão dolorosa (1), febre ≥ 37,3 °C (1), leucocitose (2) e desvio à esquerda (1). Pontuação ≥ 7 indica alta probabilidade de apendicite e, classicamente, cirurgia; 5–6 sugere investigação com imagem; ≤ 4 torna o diagnóstico improvável.",
    "commentary": "4 pontos (A): baixa probabilidade; em geral não exige intervenção.\n\n5 pontos (B): probabilidade intermediária; indica exame de imagem ou observação.\n\n9 pontos (D): também indica cirurgia, mas não é a pontuação mínima.",
    "reference": "Alvarado A. A practical score for the early diagnosis of acute appendicitis, Ann Emerg Med 1986; WSES Jerusalem Guidelines (2020)",
    "tags": [
      "apendicite aguda",
      "escore de Alvarado",
      "abdome agudo inflamatório"
    ],
    "tip": "Alvarado ≥ 7: alta probabilidade de apendicite."
  },
  {
    "id": "fubog2025-45",
    "module": "Cirurgia",
    "text": "Com base nos critérios de Tóquio de 2007 e suas atualizações em 2013 e 2018, que sugerem diferentes abordagens para a drenagem biliar e o uso de antibióticos, é CORRETO afirmar:",
    "options": [
      "A drenagem biliar endoscópica é a primeira opção recomendada pelos critérios de Tóquio de 2007",
      "A drenagem biliar percutânea é a primeira opção recomendada pelos critérios de Tóquio de 2007",
      "Os critérios de Tóquio de 2007 recomendam a drenagem biliar aberta como primeira opção",
      "Os critérios de Tóquio de 2007 não recomendam o uso de antibióticos"
    ],
    "correctAnswer": 0,
    "explanation": "As Diretrizes de Tóquio (2007, revistas em 2013 e 2018) recomendam, na colangite aguda, antibiótico para todos os pacientes e drenagem biliar conforme a gravidade, tendo a drenagem endoscópica (CPRE com papilotomia e/ou prótese) como primeira opção. A drenagem percutânea trans-hepática é alternativa quando a endoscópica falha ou não é possível, e a drenagem cirúrgica aberta é exceção.",
    "commentary": "Drenagem percutânea como primeira opção (B): é alternativa, não a primeira escolha.\n\nDrenagem aberta como primeira opção (C): tem maior morbimortalidade e fica para falha dos métodos menos invasivos.\n\nNão recomendam antibióticos (D): o antibiótico é recomendado em todos os casos de colangite.",
    "reference": "Tokyo Guidelines 2018 (TG18) – Management of acute cholangitis",
    "tags": [
      "colangite aguda",
      "diretrizes de Tóquio",
      "drenagem biliar",
      "CPRE"
    ],
    "tip": "Colangite: antibiótico sempre + drenagem endoscópica conforme a gravidade."
  },
  {
    "id": "fubog2025-46",
    "module": "Cirurgia",
    "text": "Nas cirurgias, o uso de diferentes tipos de fios de sutura é essencial para o fechamento adequado de ferimentos e a aproximação ideal dos bordos. Sobre o assunto, há as seguintes afirmativas:\n\nI. Os fios monofilamentares são mais suscetíveis a infecções devido ao maior atrito com os tecidos.\nII. Os fios multifilamentares são menos suscetíveis a infecções, mas podem romper durante a manipulação.\nIII. A codificação por cor dos fios de sutura é uma prática comum para evitar confusões durante o ato operatório.\n\nConsiderando-se as afirmativas como verdadeiras (V) ou falsas (F), a alternativa CORRETA é:",
    "options": [
      "V, V, V",
      "F, F, F",
      "V, F, F",
      "F, F, V"
    ],
    "correctAnswer": 3,
    "explanation": "I: os fios monofilamentares têm superfície lisa, menor atrito e menor capilaridade, sendo menos suscetíveis à colonização e infecção (F). II: os multifilamentares (trançados) têm maior capilaridade e retêm mais bactérias, sendo mais suscetíveis a infecção; em compensação, são mais fáceis de manusear e dão nós mais seguros (F). III: a codificação por cor das embalagens (por tipo de fio) é prática comum para evitar confusões (V).",
    "commentary": "V, V, V (A) e V, F, F (C): os monofilamentares são menos, e não mais, suscetíveis a infecção.\n\nF, F, F (B): a codificação por cor é de fato usada pelos fabricantes.",
    "reference": "Sabiston – Tratado de Cirurgia; Goffi – Técnica Cirúrgica, 4ª ed.",
    "tags": [
      "fios de sutura",
      "técnica cirúrgica",
      "infecção do sítio cirúrgico"
    ],
    "tip": "Monofilamentar: menos infecção, nó menos seguro. Multifilamentar: o contrário."
  },
  {
    "id": "fubog2025-47",
    "module": "Cirurgia",
    "text": "Paciente, 62 anos, com diagnóstico prévio de úlcera duodenal, apresenta sangramento ativo em jato durante endoscopia digestiva alta após relatar presença de sangue nas fezes. A classificação para úlcera, de acordo com a classificação de Forrest, e o risco de ressangramento são:",
    "options": [
      "IIA, 50%",
      "IA, 90%",
      "IB, 10 - 20%",
      "IIB, 25 - 30%"
    ],
    "correctAnswer": 1,
    "explanation": "Classificação de Forrest (estigmas de sangramento da úlcera) e risco de ressangramento sem tratamento endoscópico: IA — sangramento ativo em jato (cerca de 90%); IB — sangramento em babação (10–30%); IIA — vaso visível não sangrante (cerca de 50%); IIB — coágulo aderido (25–30%); IIC — mancha de hematina (7–10%); III — base limpa (3–5%). O sangramento em jato é Forrest IA.",
    "commentary": "IIA, 50% (A): vaso visível sem sangramento ativo.\n\nIB, 10–20% (C): sangramento em babação (porejamento), não em jato.\n\nIIB, 25–30% (D): coágulo aderido.",
    "reference": "Forrest JA et al., Lancet 1974; ACG Clinical Guideline: Upper GI and Ulcer Bleeding (2021)",
    "tags": [
      "classificação de Forrest",
      "úlcera péptica",
      "hemorragia digestiva alta",
      "endoscopia"
    ],
    "tip": "Forrest IA (jato), IB (babação), IIA (vaso visível) e IIB (coágulo) pedem tratamento endoscópico."
  },
  {
    "id": "fubog2025-48",
    "module": "Cirurgia",
    "text": "Sobre as manifestações extraintestinais da Doença Inflamatória Intestinal (DII), é CORRETO afirmar:",
    "options": [
      "A má absorção é uma manifestation comum na colite ulcerativa",
      "A artrite periférica é independente da atividade da DII",
      "A colangite esclerosante primária está associada à Doença de Crohn",
      "A espondilite anquilosante é mais comum em pacientes com antígeno HLA-B27"
    ],
    "correctAnswer": 3,
    "explanation": "Entre as manifestações extraintestinais das doenças inflamatórias intestinais, a espondilite anquilosante (artropatia axial) é mais comum em pacientes HLA-B27 positivos e evolui de forma independente da atividade intestinal.",
    "commentary": "Má absorção comum na colite ulcerativa (A): a retocolite acomete só o cólon; má absorção é típica da doença de Crohn com acometimento do delgado.\n\nArtrite periférica independente da atividade (B): a artrite periférica do tipo 1 (pauciarticular, grandes articulações) acompanha a atividade da DII.\n\nColangite esclerosante associada à doença de Crohn (C): associa-se principalmente à retocolite ulcerativa.",
    "reference": "ECCO–ESPGHAN Consensus on Extraintestinal Manifestations in IBD (2016); GEDIIB",
    "tags": [
      "doença inflamatória intestinal",
      "manifestações extraintestinais",
      "espondilite anquilosante",
      "HLA-B27"
    ],
    "tip": "Acompanham a atividade da DII: artrite periférica tipo 1, eritema nodoso, episclerite. Independentes: espondilite, CEP, uveíte."
  },
  {
    "id": "fubog2025-49",
    "module": "Cirurgia",
    "text": "Sobre o esôfago de Barrett, é CORRETO afirmar que:",
    "options": [
      "Ocorre devido à infecção por Helicobacter pylori no esôfago",
      "É uma condição benigna sem risco de malignidade",
      "É caracterizado pela presença de epitélio colunar especializado no esôfago",
      "É mais comum em mulheres jovens"
    ],
    "correctAnswer": 2,
    "explanation": "O esôfago de Barrett é a substituição do epitélio escamoso do esôfago distal por epitélio colunar com metaplasia intestinal especializada (células caliciformes), consequência do refluxo gastroesofágico crônico. É lesão pré-maligna do adenocarcinoma de esôfago e é mais comum em homens brancos acima de 50 anos, obesos e tabagistas.",
    "commentary": "Infecção pelo H. pylori (A): a causa é o refluxo crônico; o H. pylori não está implicado (pode até ter associação inversa).\n\nSem risco de malignidade (B): é precursor do adenocarcinoma (risco de cerca de 0,1–0,3% ao ano sem displasia).\n\nMais comum em mulheres jovens (D): predomina em homens de meia-idade e idosos.",
    "reference": "ACG Clinical Guideline: Diagnosis and Management of Barrett's Esophagus (2022)",
    "tags": [
      "esôfago de Barrett",
      "doença do refluxo gastroesofágico",
      "metaplasia intestinal",
      "adenocarcinoma de esôfago"
    ],
    "tip": "Barrett: metaplasia intestinal no esôfago distal → risco de adenocarcinoma."
  },
  {
    "id": "fubog2025-50",
    "module": "Cirurgia",
    "text": "O método de escolha para confirmação diagnóstica da diverticulite aguda é:",
    "options": [
      "Tomografia Computadorizada (TC) de abdome e pelve",
      "Ultrassonografia (USG) de abdome",
      "Colonoscopia",
      "Radiografia simples de abdome"
    ],
    "correctAnswer": 0,
    "explanation": "A tomografia computadorizada de abdome e pelve com contraste é o exame de escolha para confirmar diverticulite aguda: tem alta sensibilidade e especificidade, avalia complicações (abscesso, perfuração, fístula) e permite estadiamento (Hinchey modificada) e procedimentos guiados.",
    "commentary": "Ultrassonografia (B): pode ser usada (gestantes, crianças), mas depende do operador e avalia mal as complicações.\n\nColonoscopia (C): contraindicada na fase aguda (risco de perfuração); é feita 6–8 semanas depois para excluir neoplasia.\n\nRadiografia simples (D): só identifica pneumoperitônio ou obstrução, sem confirmar o diagnóstico.",
    "reference": "WSES Guidelines for acute left sided colonic diverticulitis (2020); ASCRS (2020)",
    "tags": [
      "diverticulite aguda",
      "tomografia computadorizada",
      "coloproctologia"
    ],
    "tip": "Diverticulite: TC confirma; colonoscopia só depois de 6–8 semanas."
  },
  {
    "id": "fubog2025-51",
    "module": "Cirurgia",
    "text": "Durante o período pós-operatório, é essencial monitorar diversas condições do paciente, tais como:\n\nI. A hidratação e o balanço hídrico do paciente devem ser analisados diariamente.\nII. A movimentação precoce do paciente é recomendada para prevenir o acúmulo de secreções.\nIII. A dor pós-operatória é mais intensa após 72 horas do procedimento.\n\nDessa forma, é CORRETO afirmar:",
    "options": [
      "Apenas II está correta",
      "Apenas I e II estão corretas",
      "Apenas III está correta",
      "Apenas II e III estão corretas"
    ],
    "correctAnswer": 1,
    "explanation": "No pós-operatório devem ser monitorados diariamente a hidratação e o balanço hídrico (I correta), e a deambulação/mobilização precoce é recomendada para prevenir complicações respiratórias (atelectasia, acúmulo de secreções), tromboembolismo e íleo (II correta). A dor pós-operatória é mais intensa nas primeiras 24 a 72 horas e depois diminui; não piora após 72 horas (III incorreta) — dor crescente após esse período deve levantar suspeita de complicação.",
    "commentary": "Apenas II (A): a afirmativa I também está correta.\n\nApenas III (C) e II e III (D): a dor é mais intensa nos primeiros dias, não após 72 horas.",
    "reference": "Projeto ACERTO; ERAS Society Guidelines",
    "tags": [
      "pós-operatório",
      "deambulação precoce",
      "balanço hídrico",
      "dor pós-operatória"
    ],
    "tip": "Dor que piora após 72 h de pós-operatório: pense em complicação."
  },
  {
    "id": "fubog2025-52",
    "module": "Cirurgia",
    "text": "A American Society of Anesthesiology (ASA) mais apropriada para uma criança de 8 anos com asma exacerbada e obesidade mórbida, que está sendo avaliada para uma cirurgia de apendicectomia, é:",
    "options": [
      "ASA 4",
      "ASA 2",
      "ASA 1",
      "ASA 3"
    ],
    "correctAnswer": 3,
    "explanation": "Classificação ASA: ASA 1 — saudável; ASA 2 — doença sistêmica leve, sem limitação funcional (asma bem controlada, obesidade com IMC 30–40); ASA 3 — doença sistêmica grave, com limitação funcional (asma mal controlada/exacerbada, obesidade mórbida com IMC ≥ 40); ASA 4 — doença sistêmica grave com ameaça constante à vida. Uma criança com asma exacerbada e obesidade mórbida é ASA 3. Como a apendicectomia é de urgência, acrescenta-se o sufixo E (ASA 3E).",
    "commentary": "ASA 4 (A): exigiria doença com ameaça constante à vida (ex.: insuficiência respiratória ou cardíaca descompensada).\n\nASA 2 (B): seria doença leve, controlada, sem limitação.\n\nASA 1 (C): paciente saudável.",
    "reference": "American Society of Anesthesiologists – ASA Physical Status Classification System (2020)",
    "tags": [
      "classificação ASA",
      "avaliação pré-anestésica",
      "anestesiologia"
    ],
    "tip": "Obesidade mórbida ou asma mal controlada = ASA 3; cirurgia de urgência ganha o “E”."
  },
  {
    "id": "fubog2025-53",
    "module": "Cirurgia",
    "text": "Paciente, 35 anos, que chega ao pronto-socorro após um acidente de carro, com dificuldade respiratória e sinais de enfisema subcutâneo. Nesse caso, a conduta inicial para garantir a via aérea pérvia é:",
    "options": [
      "Realizar intubação orotraqueal imediatamente",
      "Realizar manobra de Jaw Thrust e aspirar secreções",
      "Administrar ventilação mecânica invasiva",
      "Aplicar máscara não reinalante de O2 e observar"
    ],
    "correctAnswer": 1,
    "explanation": "Na avaliação primária do trauma (ABCDE), o primeiro passo na via aérea é verificar sua permeabilidade e realizar manobras básicas: elevação da mandíbula (jaw thrust), mantendo a proteção da coluna cervical, e aspiração de secreções e sangue. Se essas medidas não forem suficientes ou houver indicação de via aérea definitiva, procede-se à intubação. O enfisema subcutâneo sugere pneumotórax ou lesão de via aérea, a ser avaliado no B.",
    "commentary": "Intubação imediata (A): a via aérea definitiva é indicada se as manobras básicas falharem, houver Glasgow ≤ 8, risco de obstrução ou insuficiência respiratória; não é o primeiro passo em todo paciente.\n\nVentilação mecânica invasiva (C): pressupõe via aérea definitiva e, com possível pneumotórax, pode agravá-lo sem drenagem.\n\nMáscara não reinalante e observar (D): oxigênio é indicado, mas antes é preciso garantir a permeabilidade da via aérea.",
    "reference": "ATLS – Advanced Trauma Life Support, 10ª ed.",
    "tags": [
      "via aérea",
      "trauma",
      "jaw thrust",
      "ATLS"
    ],
    "alert": "O enfisema subcutâneo com dificuldade respiratória levanta suspeita de pneumotórax ou lesão de via aérea; se houver lesão laringotraqueal ou deterioração, a via aérea definitiva deve ser precoce.",
    "tip": "Trauma: A = permeabilidade (jaw thrust, aspiração) com proteção cervical."
  },
  {
    "id": "fubog2025-54",
    "module": "Cirurgia",
    "text": "A imagem a seguir mostra uma área (b) anatômica denominada de “trígono lombar inferior”, cuja delimitação se dá pela crista ilíaca, músculo oblíquo externo e músculo latíssimo do dorso. Quando há uma fragilidade nessa região, em raros casos, pode-se surgir uma hérnia. A hérnia que se localiza nessa região é conhecida como:",
    "options": [
      "Hérnia de Spiegel",
      "Hérnia de Grynfelt",
      "Hérnia de Petit",
      "Hérnia de Petersen"
    ],
    "correctAnswer": 2,
    "explanation": "O trígono lombar inferior (de Petit), marcado como (b) na figura, é delimitado pela crista ilíaca (inferior), pelo músculo oblíquo externo (anterior/lateral) e pelo latíssimo do dorso (posterior/medial). A hérnia que ocorre nessa região é a hérnia de Petit. O trígono lombar superior (a, de Grynfelt-Lesshaft) é limitado pela 12ª costela, pelo oblíquo interno e pelos músculos paravertebrais — é sede da hérnia de Grynfelt, a mais comum das lombares.",
    "commentary": "Hérnia de Spiegel (A): ocorre na linha semilunar, na parede anterolateral do abdome.\n\nHérnia de Grynfelt (B): ocorre no trígono lombar superior (a), não no inferior.\n\nHérnia de Petersen (D): é hérnia interna, após bypass gástrico, pelo espaço entre a alça alimentar e o mesocólon transverso.",
    "reference": "Netter – Atlas de Anatomia Humana; Sabiston – Tratado de Cirurgia (hérnias da parede abdominal)",
    "tags": [
      "hérnia lombar",
      "hérnia de Petit",
      "anatomia cirúrgica",
      "parede abdominal"
    ],
    "image": "/images/fubog2025-54.webp",
    "tip": "Lombar inferior = Petit (crista ilíaca); lombar superior = Grynfelt (12ª costela)."
  },
  {
    "id": "fubog2025-55",
    "module": "Cirurgia",
    "text": "Entre as opções a seguir, o fator de risco para o desenvolvimento da Doença de Crohn é:",
    "options": [
      "Tabagismo",
      "Apendicectomia",
      "Uso de Anti-Inflamatórios Não Esteroides (AINEs)",
      "Contraceptivos orais"
    ],
    "correctAnswer": 0,
    "explanation": "O tabagismo é o principal fator de risco ambiental modificável para a doença de Crohn: aumenta o risco de desenvolver a doença, de complicações (estenoses, fístulas), de necessidade de cirurgia e de recidiva pós-operatória. Na retocolite ulcerativa, curiosamente, o tabagismo é protetor.",
    "commentary": "Apendicectomia (B): na retocolite, a apendicectomia precoce é protetora; na doença de Crohn, a associação é fraca e inconsistente.\n\nAINEs (C): podem desencadear surtos em quem já tem DII, mas não são o principal fator de risco para desenvolver Crohn.\n\nContraceptivos orais (D): associação fraca, bem menos relevante que o tabagismo.",
    "reference": "GEDIIB – Consenso de doença de Crohn; ECCO Guidelines",
    "tags": [
      "doença de Crohn",
      "tabagismo",
      "fatores de risco",
      "doença inflamatória intestinal"
    ],
    "tip": "Tabagismo piora Crohn e “protege” na retocolite."
  },
  {
    "id": "fubog2025-56",
    "module": "Cirurgia",
    "text": "A gastrectomia vertical, também conhecida como cirurgia de Sleeve, é uma técnica bariátrica que transforma o estômago em um tubo. Sobre o assunto, há as seguintes afirmativas:\n\nI. A gastrectomia vertical é considerada uma técnica cirúrgica puramente restritiva.\nII. A gastrectomia vertical não apresenta eficácia significativa no controle da hipertensão.\nIII. A capacidade do estômago após a gastrectomia vertical é de 80 a 100 mililitros.\n\nConsiderando-se as afirmativas como verdadeiras (V) ou falsas (F), a alternativa CORRETA é:",
    "options": [
      "V, F, F",
      "V, V, V",
      "F, F, F",
      "F, F, V"
    ],
    "correctAnswer": 3,
    "explanation": "I: a gastrectomia vertical não é puramente restritiva — tem também efeito metabólico/hormonal, pela retirada do fundo gástrico produtor de grelina e pelo esvaziamento gástrico acelerado com aumento de GLP-1 e PYY (F). II: tem boa eficácia no controle da hipertensão e de outras comorbidades metabólicas (F). III: o volume gástrico remanescente fica em torno de 80 a 150 mL, de modo que a afirmativa é considerada verdadeira (V).",
    "commentary": "V, F, F (A) e V, V, V (B): a sleeve não é puramente restritiva.\n\nF, F, F (C): a capacidade gástrica após a sleeve é de fato pequena, em torno de 100 mL.",
    "reference": "Sociedade Brasileira de Cirurgia Bariátrica e Metabólica; ASMBS/IFSO",
    "tags": [
      "gastrectomia vertical",
      "cirurgia bariátrica",
      "cirurgia metabólica",
      "obesidade"
    ],
    "tip": "Sleeve: restritiva e metabólica (menos grelina)."
  },
  {
    "id": "fubog2025-57",
    "module": "Cirurgia",
    "text": "Sobre a anatomia do reto e canal anal, é CORRETO afirmar:",
    "options": [
      "O esfíncter externo é composto por fibras lisas involuntárias",
      "A linha pectínea delimita a divisão entre o epitélio colunar simples proximal e o epitélio estratificado distal",
      "O epitélio colunar simples é encontrado distalmente à linha pectínea",
      "O plexo venoso superior é responsável pela drenagem sanguínea do canal anal"
    ],
    "correctAnswer": 1,
    "explanation": "A linha pectínea (denteada) marca a transição do epitélio colunar simples (glandular, de origem endodérmica) acima, para o epitélio escamoso estratificado (ectodérmico) abaixo, com mudança de inervação (visceral acima, somática e dolorosa abaixo), drenagem venosa e linfática.",
    "commentary": "Esfíncter externo com fibras lisas involuntárias (A): o esfíncter externo é estriado e voluntário; o interno é liso e involuntário.\n\nEpitélio colunar distal à linha pectínea (C): o colunar fica acima; abaixo há epitélio escamoso.\n\nPlexo venoso superior drenando o canal anal (D): o plexo hemorroidário superior drena para o sistema porta a porção acima da linha pectínea; o canal anal distal drena pelo plexo inferior para a cava.",
    "reference": "Netter – Atlas de Anatomia Humana; Sociedade Brasileira de Coloproctologia",
    "tags": [
      "anatomia do canal anal",
      "linha pectínea",
      "coloproctologia",
      "anatomia cirúrgica"
    ],
    "tip": "Acima da linha pectínea: colunar, indolor, drena para a porta. Abaixo: escamoso, doloroso, drena para a cava."
  },
  {
    "id": "fubog2025-58",
    "module": "Cirurgia",
    "text": "Fissuras anais são pequenas rupturas ou cortes no revestimento do canal anal, frequentemente causadas por trauma durante a evacuação, constipação ou diarreia. Elas podem causar dor intensa, sangramento e desconforto durante as evacuações. O tratamento das fissuras anais varia conforme a gravidade e a duração dos sintomas, podendo incluir medidas conservadoras ou intervenções cirúrgicas. Sobre o tratamento das fissuras anais, é CORRETO afirmar:",
    "options": [
      "Vasodilatadores tópicos são contraindicados no tratamento de fissuras anais",
      "Fissuras anais agudas devem ser tratadas exclusivamente com cirurgia",
      "O tratamento conservador inclui medidas como consumo de fibras e banhos de assento",
      "Fissuras anais crônicas não requerem tratamento da patologia base"
    ],
    "correctAnswer": 2,
    "explanation": "O tratamento inicial da fissura anal — sobretudo a aguda — é conservador: fibras e líquidos para amolecer as fezes, banhos de assento mornos, analgésicos tópicos e, se necessário, relaxantes esfincterianos tópicos (nitratos ou bloqueadores de canal de cálcio, como diltiazem). Na fissura crônica refratária, usa-se toxina botulínica ou esfincterotomia lateral interna.",
    "commentary": "Vasodilatadores tópicos contraindicados (A): diltiazem e nitroglicerina tópicos são tratamento de primeira linha (esfincterotomia química).\n\nFissura aguda exclusivamente cirúrgica (B): a fissura aguda costuma cicatrizar com tratamento clínico.\n\nFissura crônica sem tratar a causa (D): é preciso tratar a constipação e investigar causas secundárias (doença de Crohn, IST, neoplasia) em fissuras atípicas.",
    "reference": "ASCRS Clinical Practice Guidelines for the Management of Anal Fissures (2023); Sociedade Brasileira de Coloproctologia",
    "tags": [
      "fissura anal",
      "coloproctologia",
      "tratamento conservador"
    ],
    "tip": "Fissura anal: fibras, banho de assento e relaxante tópico; cirurgia só na crônica refratária."
  },
  {
    "id": "fubog2025-59",
    "module": "Cirurgia",
    "text": "Paciente, 45 anos, com histórico de uso crônico de Anti-Inflamatórios Não Esteroides (AINEs), que apresenta dor epigástrica intensa piorando após as refeições e com endoscopia revelando uma úlcera gástrica. Nesse caso, o tratamento mais indicado é:",
    "options": [
      "Omeprazol 20 mg de 12/12 horas por 14 dias, Amoxicilina 500 mg de 12/12 horas por 14 dias, Claritromicina 250 mg de 12/12 horas por 14 dias",
      "Omeprazol 20 mg de 12/12 horas por 14 dias, Metronidazol 500 mg de 12/12 horas por 14 dias, Claritromicina 500 mg de 12/12 horas por 14 dias",
      "Omeprazol 20 mg de 12/12 horas por 14 dias, Amoxicilina 1000 mg de 12/12 horas por 7 dias, Claritromicina 500 mg de 12/12 horas por 7 dias",
      "Omeprazol 20 mg de 12/12 horas por 14 dias, Amoxicilina 1000 mg de 12/12 horas por 14 dias, Claritromicina 500 mg de 12/12 horas por 14 dias"
    ],
    "correctAnswer": 3,
    "explanation": "Úlcera gástrica em usuário crônico de AINE: além de suspender o AINE e tratar com IBP por 8 semanas, deve-se pesquisar H. pylori e, se positivo, erradicá-lo. O esquema de primeira linha no Brasil (IV Consenso Brasileiro sobre H. pylori) é a terapia tripla por 14 dias: omeprazol 20 mg 12/12 h, amoxicilina 1 g 12/12 h e claritromicina 500 mg 12/12 h. Pelo gabarito, a alternativa D traz o esquema correto.",
    "commentary": "Amoxicilina 500 mg e claritromicina 250 mg (A): doses abaixo das recomendadas.\n\nMetronidazol com claritromicina (B): não é o esquema de primeira linha brasileiro.\n\nAmoxicilina e claritromicina por 7 dias (C): o tempo recomendado é de 14 dias, com maior taxa de erradicação.",
    "reference": "IV Consenso Brasileiro sobre a Infecção pelo Helicobacter pylori (2018); Maastricht VI/Florence Consensus (2022)",
    "tags": [
      "úlcera gástrica",
      "H. pylori",
      "terapia tripla",
      "AINE",
      "gastroenterologia"
    ],
    "alert": "O enunciado não informa a pesquisa de H. pylori; em úlcera por AINE, a erradicação só é indicada se o teste for positivo. Mantido o gabarito oficial (D).",
    "tip": "Terapia tripla no Brasil: IBP + amoxicilina 1 g + claritromicina 500 mg, de 12/12 h, por 14 dias."
  },
  {
    "id": "fubog2025-60",
    "module": "Cirurgia",
    "text": "Paciente, 10 anos, com uma laceração na face causada por uma queda há 20 horas, sem sinais de infecção e com a ferida limpa. Nesse caso, a melhor abordagem para sutura é:",
    "options": [
      "Realizar a sutura imediatamente, pois a face tolera um prazo maior de até 24 horas",
      "Não realizar a sutura devido ao tempo decorrido, optando por curativos secundários",
      "Realizar a sutura apenas após a administração de profilaxia antitetânica",
      "Contraindicar a sutura e iniciar antibioticoterapia profilática, aguardando sinais de infecção"
    ],
    "correctAnswer": 0,
    "explanation": "Feridas da face e do couro cabeludo, por sua excelente vascularização e baixo risco de infecção, podem ser suturadas primariamente até cerca de 24 horas após o trauma (alguns autores aceitam mais), desde que limpas e adequadamente irrigadas e desbridadas. Em outras regiões, o prazo tradicional é de 6–8 horas (até 12–18 horas em feridas limpas).",
    "commentary": "Não suturar pelo tempo decorrido (B): na face, 20 horas ainda permitem fechamento primário, com melhor resultado estético.\n\nSuturar só após profilaxia antitetânica (C): a profilaxia deve ser avaliada, mas não condiciona a sutura.\n\nContraindicar sutura e dar antibiótico (D): ferida limpa não exige antibiótico, e a sutura é indicada.",
    "reference": "ATLS; Sabiston – Tratado de Cirurgia (tratamento de feridas)",
    "tags": [
      "ferimentos",
      "sutura",
      "trauma de face",
      "cirurgia ambulatorial"
    ],
    "tip": "Face e couro cabeludo: sutura primária até ~24 h."
  },
  {
    "id": "fubog2025-61",
    "module": "Ginecologia e Obstetrícia",
    "text": "As vulvovaginites e vaginoses representam queixas frequentes nos consultórios de ginecologia. Sobre o assunto, há as seguintes afirmativas:\n\nI. A vaginose citolítica é causada pela proliferação excessiva de Lactobacillus e pela redução do pH vaginal.\nII. A vaginite inflamatória descamativa é uma forma comum de vaginite purulenta crônica.\nIII. A vaginite aeróbica é caracterizada pela presença de bactérias aeróbicas entéricas e redução de Lactobacillus.\n\nDessa forma, é CORRETO afirmar:",
    "options": [
      "Apenas III está correta",
      "Apenas II está correta",
      "Apenas I e III estão corretas",
      "Apenas II e III estão corretas"
    ],
    "correctAnswer": 2,
    "explanation": "I: a vaginose citolítica resulta da proliferação excessiva de lactobacilos, com lise das células epiteliais e pH vaginal baixo (3,5–4,5) (correta). II: a vaginite inflamatória descamativa é uma forma rara (não comum) de vaginite purulenta crônica (incorreta). III: a vaginite aeróbia caracteriza-se por bactérias aeróbias entéricas (E. coli, estreptococo do grupo B, S. aureus), redução de lactobacilos e inflamação (correta).",
    "commentary": "Apenas III (A): a afirmativa I também está correta.\n\nApenas II (B) e II e III (D): a vaginite inflamatória descamativa é rara, não comum.",
    "reference": "Febrasgo – Vulvovaginites; Donders GGG. Aerobic vaginitis",
    "tags": [
      "vulvovaginites",
      "vaginose citolítica",
      "vaginite aeróbia",
      "ginecologia"
    ],
    "tip": "Vaginose citolítica: excesso de lactobacilos, pH baixo, parece candidíase mas sem fungo."
  },
  {
    "id": "fubog2025-62",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente, sexo feminino, gestante de 32 semanas, chega ao pronto-socorro com sangramento vaginal moderado e dor abdominal intensa. Após diagnóstico de descolamento prematuro de placenta, a conduta mais adequada para o caso é:",
    "options": [
      "Realizar amniotomia e monitorar a paciente",
      "Realizar cesárea de emergência",
      "Administrar ocitocina para induzir o parto",
      "Aguardar o parto vaginal espontâneo"
    ],
    "correctAnswer": 1,
    "explanation": "Descolamento prematuro da placenta com 32 semanas, sangramento e dor intensa: com feto vivo, a conduta é a interrupção pela via mais rápida — em geral cesárea de emergência —, junto com estabilização materna e controle da coagulopatia. O parto vaginal é preferido apenas se o feto estiver morto e a mãe estável, ou se o parto for iminente.",
    "commentary": "Amniotomia e monitorização (A): a amniotomia ajuda a reduzir a pressão intrauterina e é feita quando se opta pelo parto vaginal, mas com feto vivo e prematuro a via mais rápida é a cesárea.\n\nOcitocina para induzir (C): a indução prolonga o tempo até o parto e aumenta o risco materno-fetal.\n\nAguardar o parto espontâneo (D): o DPP é emergência obstétrica.",
    "reference": "Febrasgo – Descolamento prematuro de placenta; Ministério da Saúde – Manual de Gestação de Alto Risco (2022)",
    "tags": [
      "descolamento prematuro de placenta",
      "hemorragia da segunda metade",
      "cesárea",
      "emergência obstétrica"
    ],
    "tip": "DPP com feto vivo: via mais rápida (cesárea, salvo parto iminente)."
  },
  {
    "id": "fubog2025-63",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente, sexo feminino, 28 anos, apresenta teste de HPV positivo e citologia com ASC-US. A abordagem mais adequada para esse caso é:",
    "options": [
      "Iniciar tratamento excisional sem biópsia confirmatória",
      "Repetir o teste de HPV após um ano",
      "Realizar biópsia endocervical",
      "Encaminhar para colposcopia imediata"
    ],
    "correctAnswer": 3,
    "explanation": "Mulher de 28 anos com teste de HPV oncogênico positivo e citologia ASC-US. Pelas diretrizes brasileiras com teste de DNA-HPV (2024), um teste positivo com citologia alterada (incluindo ASC-US) indica colposcopia. Na diretriz antiga apenas com citologia, ASC-US abaixo de 30 anos era repetido em 1 ano; o resultado positivo do HPV muda a conduta.",
    "commentary": "Tratamento excisional sem biópsia (A): o “ver e tratar” é para lesão de alto grau com colposcopia compatível, não para ASC-US.\n\nRepetir o teste de HPV em 1 ano (B): com HPV positivo e citologia alterada, a conduta é colposcopia.\n\nBiópsia endocervical (C): pode ser feita durante a colposcopia, se indicada, mas não substitui a colposcopia.",
    "reference": "INCA – Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero com teste de DNA-HPV (2024); ASCCP Risk-Based Management (2019)",
    "tags": [
      "ASC-US",
      "teste de DNA-HPV",
      "colposcopia",
      "câncer do colo do útero"
    ],
    "tip": "HPV positivo + citologia alterada = colposcopia."
  },
  {
    "id": "fubog2025-64",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente, sexo feminino, 30 anos, com histórico de múltiplos parceiros sexuais, apresenta lesões papilares na região anogenital. O método diagnóstico mais adequado para confirmar a presença de condiloma é:",
    "options": [
      "Vulvoscopia com aplicação de ácido acético",
      "Teste de Schiller",
      "Biópsia excisional",
      "PCR para identificação do tipo viral"
    ],
    "correctAnswer": 0,
    "explanation": "O diagnóstico do condiloma acuminado é essencialmente clínico, pela inspeção das lesões papilomatosas. A vulvoscopia (ou peniscopia/anuscopia) com ácido acético a 3–5% ajuda a delimitar as lesões (que ficam acetobrancas) e a identificar lesões subclínicas, sendo o método apontado pelo gabarito. A biópsia fica reservada para dúvida diagnóstica, lesões atípicas, resistentes ao tratamento ou em imunossuprimidos.",
    "commentary": "Teste de Schiller (B): usa lugol para avaliar captação de iodo no colo e na vagina; não é o método para condiloma vulvar.\n\nBiópsia excisional (C): não é necessária de rotina; o diagnóstico é clínico.\n\nPCR para tipagem (D): não muda a conduta e não é recomendado na prática clínica.",
    "reference": "Ministério da Saúde – PCDT para Atenção Integral às Pessoas com IST (2022)",
    "tags": [
      "condiloma acuminado",
      "HPV",
      "vulvoscopia",
      "infecções sexualmente transmissíveis"
    ],
    "alert": "O PCDT-IST considera o diagnóstico do condiloma clínico; o ácido acético tem baixa especificidade e é usado sobretudo para delimitar lesões. A alternativa A é a melhor entre as opções."
  },
  {
    "id": "fubog2025-65",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente, sexo feminino, 45 anos, imunocomprometida, apresenta prurido vulvar, dispareunia e corrimento vaginal branco, com relato de cinco episódios semelhantes no último ano. O tratamento mais adequado para esta paciente é:",
    "options": [
      "Tópico com nistatina creme por 14 dias",
      "Tópico com miconazol creme a 2% por 7 dias",
      "Oral com fluconazol 150 mg, dose única",
      "Oral com fluconazol em esquema prolongado"
    ],
    "correctAnswer": 3,
    "explanation": "Quatro ou mais episódios sintomáticos de candidíase vulvovaginal em 12 meses definem candidíase recorrente (a paciente teve cinco e é imunocomprometida). O tratamento é de indução seguido de manutenção prolongada com fluconazol oral: por exemplo, 150 mg nos dias 1, 4 e 7, depois 150 mg por semana durante 6 meses. Também se devem investigar e controlar fatores predisponentes e considerar cultura com espécie (Candida não albicans).",
    "commentary": "Nistatina tópica por 14 dias (A), miconazol tópico por 7 dias (B) e fluconazol 150 mg dose única (C): são esquemas para episódio isolado de candidíase não complicada e não previnem recorrências.",
    "reference": "Ministério da Saúde – PCDT-IST (2022); CDC STI Treatment Guidelines (2021)",
    "tags": [
      "candidíase vulvovaginal recorrente",
      "fluconazol",
      "vulvovaginites",
      "imunossupressão"
    ],
    "tip": "Candidíase recorrente (≥ 4/ano): fluconazol de indução + semanal por 6 meses."
  },
  {
    "id": "fubog2025-66",
    "module": "Ginecologia e Obstetrícia",
    "text": "A interpretação da Cardiotografia (CTG) anteparto requer critérios bem estabelecidos para avaliar a condição fetal, incluindo a variabilidade da Frequência Cardíaca Fetal (FCF) e a presença de acelerações e desacelerações. Sobre o assunto, há as seguintes afirmativas:\n\nI. A variabilidade da FCF basal é considerada moderada quando a amplitude é de 6 a 25 bpm.\nII. Desacelerações tardias são caracterizadas por uma queda abrupta da FCF com nadir ≥ 15 bpm e duração ≥ 15 segundos.\nIII. A presença de acelerações transitórias da FCF é um indicador de reatividade fetal.\n\nConsiderando-se as afirmativas como verdadeiras (V) ou falsas (F), a alternativa CORRETA é:",
    "options": [
      "V, V, F",
      "V, F, V",
      "V, V, V",
      "F, V, V"
    ],
    "correctAnswer": 1,
    "explanation": "Na cardiotocografia: I — variabilidade moderada (normal) é a amplitude de 6 a 25 bpm (V). II — desacelerações tardias têm queda gradual (do início ao nadir em 30 segundos ou mais), com nadir após o pico da contração; a queda abrupta (< 30 s) define desaceleração variável (F). III — acelerações transitórias indicam reatividade fetal (V).",
    "commentary": "V, V, F (A) e V, V, V (C): a desaceleração tardia é gradual, não abrupta.\n\nF, V, V (D): a variabilidade moderada é mesmo de 6 a 25 bpm.",
    "reference": "Febrasgo – Avaliação da vitalidade fetal; NICHD three-tier classification (2008)",
    "tags": [
      "cardiotocografia",
      "vitalidade fetal",
      "desacelerações",
      "obstetrícia"
    ],
    "tip": "Desaceleração tardia = gradual e após a contração; variável = abrupta."
  },
  {
    "id": "fubog2025-67",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente, sexo feminino, com 28 semanas de gestação, apresentando sangramento vaginal moderado, hipertonia uterina significativa, aumento da frequência cardíaca e alteração da vitalidade fetal com feto vivo. O grau mais provável de descolamento prematuro de placenta é:",
    "options": [
      "Grau III A",
      "Grau I",
      "Grau II",
      "Grau III B"
    ],
    "correctAnswer": 2,
    "explanation": "Classificação de Sher para o descolamento prematuro de placenta: grau I — sangramento discreto, sem repercussão materna ou fetal (diagnóstico muitas vezes retrospectivo); grau II — sangramento moderado, hipertonia uterina, taquicardia materna e alteração da vitalidade fetal com feto vivo; grau III — óbito fetal (IIIA sem coagulopatia; IIIB com coagulopatia).",
    "commentary": "Grau IIIA (A) e IIIB (D): exigem óbito fetal.\n\nGrau I (B): não há hipertonia nem repercussão fetal.",
    "reference": "Sher G. Classificação do descolamento prematuro de placenta; Febrasgo – Descolamento prematuro de placenta",
    "tags": [
      "descolamento prematuro de placenta",
      "classificação de Sher",
      "obstetrícia"
    ],
    "tip": "Sher: II = feto vivo com sofrimento; III = feto morto (IIIB com coagulopatia)."
  },
  {
    "id": "fubog2025-68",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente, sexo feminino, 32 anos, gestante com histórico de duas cesarianas anteriores e placenta de implantação anterior baixa. A conduta recomendada para o diagnóstico e planejamento do parto é:",
    "options": [
      "Realizar a avaliação ultrassonográfica apenas no terceiro trimestre",
      "Realizar a avaliação ultrassonográfica entre 18 e 24 semanas de gestação",
      "Planejar o parto para 37 semanas de gestação",
      "Evitar o uso de corticosteroides antenatais"
    ],
    "correctAnswer": 1,
    "explanation": "Gestante com duas cesáreas e placenta anterior baixa tem alto risco de espectro do acretismo placentário. A avaliação ultrassonográfica (com Doppler) para rastrear acretismo deve ser feita no segundo trimestre, entre 18 e 24 semanas, pelos sinais de perda da zona hipoecoica retroplacentária, lacunas e hipervascularização; a ressonância é complementar. O diagnóstico precoce permite planejar o parto em centro de referência (em geral entre 34 e 36 semanas).",
    "commentary": "Avaliar só no terceiro trimestre (A): atrasa o diagnóstico e o planejamento.\n\nParto com 37 semanas (C): no acretismo, o parto costuma ser programado entre 34 e 35+6 semanas.\n\nEvitar corticoide antenatal (D): o corticoide é indicado quando o parto for programado antes de 34–37 semanas.",
    "reference": "FIGO consensus guidelines on placenta accreta spectrum disorders (2018); Febrasgo",
    "tags": [
      "acretismo placentário",
      "placenta prévia",
      "cesárea anterior",
      "ultrassonografia obstétrica"
    ],
    "tip": "Cesárea prévia + placenta anterior baixa: rastrear acretismo entre 18 e 24 semanas."
  },
  {
    "id": "fubog2025-69",
    "module": "Ginecologia e Obstetrícia",
    "text": "A abordagem cirúrgica recomendada para casos de Sangramento Uterino Anormal (SUA)\n\ncausado por miomas submucosos é:",
    "options": [
      "Miomectomia histeroscópica",
      "Miomectomia laparotômica",
      "Histerectomia",
      "Embolização da artéria uterina"
    ],
    "correctAnswer": 0,
    "explanation": "Miomas submucosos (FIGO 0, 1 e muitos do tipo 2) que causam sangramento uterino anormal são tratados preferencialmente por miomectomia histeroscópica: é minimamente invasiva, preserva o útero e a fertilidade e resolve o sangramento.",
    "commentary": "Miomectomia laparotômica (B): indicada para miomas intramurais ou subserosos grandes, não submucosos.\n\nHisterectomia (C): tratamento definitivo para quem não deseja preservar o útero ou tem miomatose extensa, não a primeira escolha para mioma submucoso.\n\nEmbolização (D): alternativa para miomatose em quem quer evitar cirurgia; pouco indicada para submucosos pediculados.",
    "reference": "Febrasgo – Miomatose uterina; FIGO classification system (PALM-COEIN)",
    "tags": [
      "mioma uterino",
      "sangramento uterino anormal",
      "histeroscopia",
      "ginecologia"
    ],
    "tip": "Mioma submucoso: histeroscopia."
  },
  {
    "id": "fubog2025-70",
    "module": "Ginecologia e Obstetrícia",
    "text": "A principal função da progesterona durante a fase lútea do ciclo menstrual é:",
    "options": [
      "Manter o corpo lúteo",
      "Organizar as glândulas endometriais e cessar as mitoses",
      "Promover a proliferação do endométrio",
      "Estimular a secreção de FSH"
    ],
    "correctAnswer": 1,
    "explanation": "Na fase lútea, a progesterona produzida pelo corpo lúteo transforma o endométrio proliferativo em secretor: interrompe as mitoses estimuladas pelo estrogênio, organiza e torna tortuosas as glândulas, que passam a secretar glicogênio, e torna o estroma edemaciado — preparando o endométrio para a implantação.",
    "commentary": "Manter o corpo lúteo (A): quem mantém o corpo lúteo é o LH e, na gestação, o hCG.\n\nPromover a proliferação do endométrio (C): é função do estrogênio na fase folicular.\n\nEstimular a secreção de FSH (D): a progesterona exerce feedback negativo sobre as gonadotrofinas.",
    "reference": "Speroff – Endocrinologia Ginecológica Clínica e Infertilidade, 9ª ed.",
    "tags": [
      "ciclo menstrual",
      "progesterona",
      "fase lútea",
      "fisiologia"
    ],
    "tip": "Estrogênio prolifera; progesterona organiza (endométrio secretor)."
  },
  {
    "id": "fubog2025-71",
    "module": "Ginecologia e Obstetrícia",
    "text": "A densidade mamária é um fator que pode influenciar a eficácia dos métodos de rastreamento do câncer de mama. Sobre o assunto, há as seguintes afirmativas:\n\nI. A mamografia tem baixa sensibilidade em mamas densas.\nII. A ressonância magnética é recomendada anualmente para mulheres de alto risco.\nIII. A tomossíntese mamária não deve ser utilizada em locais onde está disponível.\n\nDessa forma, é CORRETO afirmar:",
    "options": [
      "Apenas II está correta",
      "Apenas II e III estão corretas",
      "Apenas III está correta",
      "Apenas I e II estão corretas"
    ],
    "correctAnswer": 3,
    "explanation": "I: a sensibilidade da mamografia cai em mamas densas (efeito de mascaramento) (correta). II: a ressonância magnética anual é recomendada para mulheres de alto risco (mutação BRCA, risco vitalício ≥ 20%, radioterapia torácica antes dos 30 anos), associada à mamografia (correta). III: a tomossíntese aumenta a detecção e reduz reconvocações, sobretudo em mamas densas, e deve ser usada onde disponível (incorreta).",
    "commentary": "Apenas II (A): a afirmativa I também está correta.\n\nII e III (B) e apenas III (C): a tomossíntese é recomendada onde estiver disponível.",
    "reference": "Colégio Brasileiro de Radiologia, SBM e Febrasgo – Recomendações para o rastreamento do câncer de mama (2023)",
    "tags": [
      "câncer de mama",
      "densidade mamária",
      "rastreamento",
      "ressonância magnética",
      "tomossíntese"
    ],
    "tip": "Mama densa reduz a sensibilidade da mamografia; alto risco → RM anual."
  },
  {
    "id": "fubog2025-72",
    "module": "Ginecologia e Obstetrícia",
    "text": "De acordo com os critérios clínicos de elegibilidade para métodos contraceptivos segundo a Organização Mundial de Saúde (OMS), é CORRETO afirmar:",
    "options": [
      "Categoria 1: O método pode ser usado sem restrições",
      "Categoria 2: O método é contraindicado",
      "Categoria 3: O método pode ser usado com restrições, desde que as vantagens superem os riscos",
      "Categoria 4: O método pode ser utilizado, no entanto, deve ser a última escolha disponível"
    ],
    "correctAnswer": 0,
    "explanation": "Critérios médicos de elegibilidade da OMS para contraceptivos: categoria 1 — sem restrição de uso; categoria 2 — vantagens geralmente superam os riscos (pode usar); categoria 3 — riscos geralmente superam as vantagens (uso não recomendado, salvo se não houver outro método); categoria 4 — risco inaceitável (contraindicado).",
    "commentary": "Categoria 2 contraindicada (B): a categoria 2 permite o uso; a contraindicação é a 4.\n\nCategoria 3 com vantagens superando os riscos (C): na 3 os riscos superam as vantagens.\n\nCategoria 4 como última escolha (D): a categoria 4 é contraindicação absoluta; a “última escolha” é a 3.",
    "reference": "OMS – Critérios médicos de elegibilidade para uso de métodos anticoncepcionais, 5ª ed. (2015)",
    "tags": [
      "critérios de elegibilidade da OMS",
      "anticoncepção",
      "planejamento reprodutivo"
    ],
    "tip": "OMS: 1 e 2 pode usar; 3 evitar; 4 contraindicado."
  },
  {
    "id": "fubog2025-73",
    "module": "Ginecologia e Obstetrícia",
    "text": "O tratamento padrão de primeira linha mais indicado para câncer de ovário avançado é:",
    "options": [
      "Uso exclusivo de quimioterapia intraperitoneal",
      "Quimioterapia neoadjuvante seguida de radioterapia",
      "Cirurgia citorredutora seguida de quimioterapia com carboplatina e paclitaxel",
      "Tratamento com imunoterapia e radioterapia"
    ],
    "correctAnswer": 2,
    "explanation": "O tratamento de primeira linha do câncer de ovário avançado (epitelial, estádios III–IV) é a cirurgia citorredutora primária, buscando ressecção completa (sem doença residual macroscópica), seguida de quimioterapia com carboplatina e paclitaxel. Quando a citorredução ótima não é possível, faz-se quimioterapia neoadjuvante com cirurgia de intervalo. Inibidores de PARP e bevacizumabe entram como manutenção.",
    "commentary": "Quimioterapia intraperitoneal exclusiva (A): é opção complementar após citorredução ótima em casos selecionados, não tratamento exclusivo.\n\nNeoadjuvância seguida de radioterapia (B): a radioterapia não tem papel no tratamento padrão do câncer de ovário.\n\nImunoterapia e radioterapia (D): não são tratamento de primeira linha.",
    "reference": "NCCN Guidelines – Ovarian Cancer; ESMO–ESGO Consensus Conference on Ovarian Cancer (2019)",
    "tags": [
      "câncer de ovário",
      "cirurgia citorredutora",
      "carboplatina",
      "oncologia ginecológica"
    ],
    "tip": "Ovário avançado: citorredução + carboplatina/paclitaxel."
  },
  {
    "id": "fubog2025-74",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente, 45 anos, com queixa de perda urinária ao esforço e sem histórico de cirurgias pélvicas. A conduta mais adequada em relação ao uso do Estudo Urodinâmico (EUD) na abordagem da Incontinência Urinária (IU) feminina é:",
    "options": [
      "Solicitar o EUD para todos os casos de IU, a fim de definir a melhor conduta",
      "Solicitar o EUD antes do tratamento conservador da IU",
      "Não solicitar o EUD antes do tratamento conservador da IU",
      "Solicitar o EUD apenas se houver suspeita de disfunção do esvaziamento vesical"
    ],
    "correctAnswer": 2,
    "explanation": "Na incontinência urinária de esforço sem complicadores (sem cirurgia prévia, sem prolapso significativo, sem sintomas de esvaziamento), o diagnóstico é clínico, e o estudo urodinâmico não é necessário antes do tratamento conservador (fisioterapia do assoalho pélvico, mudança de hábitos). Ele fica reservado para casos complexos, falha do tratamento ou antes de cirurgia em situações selecionadas.",
    "commentary": "EUD para todos os casos (A) e antes do tratamento conservador (B): não muda a conduta inicial e acrescenta custo e desconforto.\n\nEUD só se suspeita de disfunção de esvaziamento (D): é uma das indicações, mas não a única (incontinência mista complexa, falha de tratamento, cirurgia prévia).",
    "reference": "Febrasgo – Incontinência urinária feminina; AUA/SUFU Guideline on Stress Urinary Incontinence (2023)",
    "tags": [
      "incontinência urinária de esforço",
      "estudo urodinâmico",
      "uroginecologia"
    ],
    "tip": "IUE simples: tratamento conservador sem urodinâmica."
  },
  {
    "id": "fubog2025-75",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente, sexo feminino, 16 anos, apresenta ausência de menstruação, dor pélvica cíclica e caracteres sexuais secundários desenvolvidos. O diagnóstico mais provável é:",
    "options": [
      "Síndrome dos ovários policísticos",
      "Criptomenorreia devido a hímen imperfurado",
      "Síndrome de Turner",
      "Amenorreia hipotalâmica funcional"
    ],
    "correctAnswer": 1,
    "explanation": "Adolescente de 16 anos com amenorreia primária, dor pélvica cíclica e caracteres sexuais secundários desenvolvidos: há menstruação, mas o fluxo está retido por obstrução do trato de saída — criptomenorreia, cuja causa mais comum é o hímen imperfurado (outras: septo vaginal transverso, agenesia de colo). Ao exame, vê-se hímen abaulado e azulado (hematocolpo). O tratamento é himenotomia.",
    "commentary": "SOP (A): causa irregularidade menstrual com hiperandrogenismo, não dor pélvica cíclica com amenorreia primária.\n\nSíndrome de Turner (C): cursa com baixa estatura e ausência de caracteres sexuais secundários (hipogonadismo hipergonadotrófico).\n\nAmenorreia hipotalâmica (D): não causa dor cíclica; associa-se a estresse, exercício excessivo ou baixo peso.",
    "reference": "Febrasgo – Ginecologia infanto-puberal; Amenorreia: diagnóstico e tratamento",
    "tags": [
      "amenorreia primária",
      "criptomenorreia",
      "hímen imperfurado",
      "ginecologia infanto-puberal"
    ],
    "tip": "Amenorreia primária + dor cíclica + caracteres sexuais normais = obstrução (hímen imperfurado)."
  },
  {
    "id": "fubog2025-76",
    "module": "Ginecologia e Obstetrícia",
    "text": "A toxoplasmose congênita pode causar sérias complicações fetais. Sobre o rastreamento e tratamento da toxoplasmose durante a gravidez, há as seguintes afirmativas:\n\nI. A pesquisa de toxoplasmose é obrigatória no Brasil.\nII. O tratamento da toxoplasmose iniciado nas primeiras três semanas de soroconversão reduz a transmissão entre mãe e o feto.\nIII. Não há evidências de que o tratamento da toxoplasmose durante a gravidez melhora os resultados neonatais.\n\nConsiderando-se as afirmativas como verdadeiras (V) ou falsas (F), a alternativa CORRETA é:",
    "options": [
      "F, V, V",
      "V, V, V",
      "V, F, F",
      "F, F, F"
    ],
    "correctAnswer": 0,
    "explanation": "Pelo gabarito: I — a pesquisa de toxoplasmose no pré-natal é recomendada pelo Ministério da Saúde (sorologia na primeira consulta e repetição trimestral nas suscetíveis), mas a banca considerou que não é obrigatória por lei (F). II — o tratamento iniciado nas primeiras 3 semanas após a soroconversão reduz a transmissão vertical em comparação com início tardio (estudo SYROCOT) (V). III — a evidência de que o tratamento na gestação melhora os desfechos neonatais clínicos é limitada e de baixa qualidade (V).",
    "commentary": "V, V, V (B) e V, F, F (C): o gabarito considera a afirmativa I falsa (rastreio recomendado, porém não obrigatório).\n\nF, F, F (D): o tratamento precoce reduz a transmissão (II verdadeira).",
    "reference": "SYROCOT Study Group, Lancet 2007; Ministério da Saúde – Protocolo de notificação e investigação: toxoplasmose gestacional e congênita (2018)",
    "tags": [
      "toxoplasmose",
      "toxoplasmose congênita",
      "pré-natal",
      "infecções na gestação"
    ],
    "alert": "Questão discutível: a triagem sorológica para toxoplasmose é recomendada no pré-natal pelo Ministério da Saúde, e a afirmativa III é controversa (há evidência de redução de sequelas graves com tratamento precoce). Mantido o gabarito oficial (A)."
  },
  {
    "id": "fubog2025-77",
    "module": "Ginecologia e Obstetrícia",
    "text": "Sobre os regimes de uso dos Contraceptivos Orais Combinados (COCs), é CORRETO afirmar:",
    "options": [
      "O regime estendido consiste no uso de 28 comprimidos ativos seguidos por 7 dias de pausa",
      "O regime contínuo consiste no uso de 21 comprimidos seguidos por 7 dias de pausa",
      "O regime-padrão consiste no uso de 24 comprimidos ativos seguidos por 4 dias de placebo",
      "O regime estendido flexível permite o uso de até 120 dias sem intervalos, com pausas opcionais de 4 dias"
    ],
    "correctAnswer": 3,
    "explanation": "Regimes de anticoncepcional oral combinado: padrão (cíclico) — 21 comprimidos ativos e 7 dias de pausa (ou 24 ativos + 4 placebo, regime de pausa curta); estendido — vários ciclos seguidos sem pausa (por exemplo, 84 ativos + 7 de pausa); contínuo — uso ininterrupto sem pausa; estendido flexível — uso contínuo por até 120 dias, com pausa opcional de 4 dias quando houver sangramento de escape persistente.",
    "commentary": "Estendido com 28 ativos e 7 de pausa (A): o estendido envolve ciclos de 84 dias ou mais; 28 + 7 não é um regime descrito.\n\nContínuo com 21 + 7 de pausa (B): isso é o regime padrão; o contínuo não tem pausa.\n\nPadrão com 24 + 4 (C): é o regime de pausa curta; o clássico padrão é 21 + 7.",
    "reference": "Febrasgo – Anticoncepção hormonal combinada; OMS – Planejamento Familiar: um manual global (2018)",
    "tags": [
      "anticoncepcional oral combinado",
      "regime estendido",
      "anticoncepção"
    ],
    "tip": "Estendido flexível: até 120 dias contínuos, pausa de 4 dias se houver escape."
  },
  {
    "id": "fubog2025-78",
    "module": "Ginecologia e Obstetrícia",
    "text": "As alternativas, que estão de acordo com as contraindicações absolutas (categoria 4) para o uso de anticoncepcionais orais combinados, segundo a OMS, são:",
    "options": [
      "Hepatite viral aguda e deficiência de proteína C",
      "Hipertensão controlada com medicação",
      "Diabetes mellitus sem complicações vasculares",
      "Tabagismo em mulheres com menos de 35 anos"
    ],
    "correctAnswer": 0,
    "explanation": "Categoria 4 da OMS para contraceptivo oral combinado (contraindicação absoluta) inclui: hepatite viral aguda ou exacerbação, trombofilias conhecidas (como deficiência de proteína C, S, antitrombina, fator V de Leiden), tromboembolismo atual ou prévio, enxaqueca com aura, hipertensão ≥ 160/100, câncer de mama atual, tabagismo ≥ 15 cigarros/dia após 35 anos, até 21 dias pós-parto, entre outras. A alternativa A reúne duas condições categoria 4.",
    "commentary": "Hipertensão controlada com medicação (B): categoria 3.\n\nDiabetes sem complicação vascular (C): categoria 2.\n\nTabagismo antes dos 35 anos (D): categoria 2.",
    "reference": "OMS – Critérios médicos de elegibilidade para uso de métodos anticoncepcionais, 5ª ed. (2015)",
    "tags": [
      "anticoncepcional oral combinado",
      "critérios de elegibilidade da OMS",
      "contraindicações",
      "trombofilia"
    ],
    "tip": "ACO categoria 4: trombofilia, TEV, enxaqueca com aura, HAS ≥ 160/100, hepatite aguda, câncer de mama."
  },
  {
    "id": "fubog2025-79",
    "module": "Ginecologia e Obstetrícia",
    "text": "A vacina contra o HPV disponível no Sistema Único de Saúde (SUS) e os tipos de HPV que ela previne são:",
    "options": [
      "Nonavalente, previne HPV 6, 11, 16, 18, 31, 33, 45, 52 e 58",
      "Bivalente, previne HPV 16 e 18",
      "Quadrivalente, previne HPV 6, 11, 16 e 18",
      "Trivalente, previne HPV 6, 11 e 16"
    ],
    "correctAnswer": 2,
    "explanation": "A vacina HPV oferecida pelo SUS é a quadrivalente, que protege contra os tipos 6 e 11 (responsáveis por cerca de 90% das verrugas genitais) e 16 e 18 (responsáveis por cerca de 70% dos cânceres de colo do útero). Atualmente é aplicada em dose única para meninos e meninas de 9 a 14 anos (com resgate até 19 anos) e em grupos especiais.",
    "commentary": "Nonavalente (A): disponível na rede privada, não no SUS.\n\nBivalente 16 e 18 (B): já foi usada em alguns países, mas não é a do SUS.\n\nTrivalente 6, 11 e 16 (D): não existe.",
    "reference": "Ministério da Saúde – Calendário Nacional de Vacinação; Nota técnica sobre a dose única da vacina HPV (2024)",
    "tags": [
      "vacina HPV",
      "HPV",
      "imunizações",
      "prevenção do câncer do colo do útero"
    ],
    "tip": "Vacina HPV do SUS: quadrivalente (6, 11, 16, 18), dose única dos 9 aos 14 anos."
  },
  {
    "id": "fubog2025-80",
    "module": "Ginecologia e Obstetrícia",
    "text": "Sobre o tratamento da gravidez ectópica, é CORRETO afirmar:",
    "options": [
      "A salpingostomia é indicada em pacientes com Beta-HCG superior a 5.000 mUI/mL",
      "A salpingectomia é indicada para pacientes que desejam preservar a fertilidade",
      "A laparotomia é indicada em casos de gravidez ectópica sem instabilidade hemodinâmica",
      "O tratamento com Metotrexato (MTX) é contraindicado em casos de embrião vivo"
    ],
    "correctAnswer": 3,
    "explanation": "O metotrexato é usado na gravidez ectópica íntegra em paciente estável, com β-hCG idealmente < 5.000 mUI/mL, massa < 3,5 cm e sem embrião vivo. A presença de batimentos cardíacos embrionários é contraindicação ao metotrexato (risco alto de falha e ruptura), de modo que a conduta passa a ser cirúrgica.",
    "commentary": "Salpingostomia com β-hCG > 5.000 (A): o valor do β-hCG não define a técnica; a salpingostomia é escolhida para preservar a tuba quando a contralateral está doente.\n\nSalpingectomia para quem quer preservar a fertilidade (B): com tuba contralateral normal, a salpingectomia é a escolha; para preservar a tuba usa-se a salpingostomia.\n\nLaparotomia sem instabilidade (C): com estabilidade, a via preferida é a laparoscopia; a laparotomia fica para instabilidade grave ou falta de recursos.",
    "reference": "Febrasgo – Gravidez ectópica; ACOG Practice Bulletin nº 193 (2018)",
    "tags": [
      "gravidez ectópica",
      "metotrexato",
      "salpingectomia",
      "emergência ginecológica"
    ],
    "tip": "MTX na ectópica: estável, β-hCG < 5.000, massa < 3,5 cm, sem BCF."
  },
  {
    "id": "fubog2025-81",
    "module": "Saúde Coletiva",
    "text": "Os estudos epidemiológicos podem ser classificados de acordo com a intervenção do investigador e o propósito do estudo. Sobre o assunto, há as seguintes afirmativas:\n\nI. Estudos ecológicos focam em grupos de pessoas e utilizam áreas geográficas como unidade de estudo.\nII. Ensaios clínicos são estudos retrospectivos que visam avaliar a eficácia de intervenções terapêuticas.\nIII. Estudos longitudinais podem ser prospectivos ou retrospectivos e têm como objetivo analisar a incidência de casos ao longo do tempo.\n\nDessa forma, é CORRETO afirmar:",
    "options": [
      "Apenas II e III estão corretas",
      "Apenas I e III estão corretas",
      "Apenas III está correta",
      "Apenas II está correta"
    ],
    "correctAnswer": 1,
    "explanation": "I: estudos ecológicos usam grupos populacionais como unidade de análise, frequentemente definidos por área geográfica (correta). II: ensaios clínicos são estudos experimentais e prospectivos — o investigador aloca a intervenção e acompanha os desfechos —, não retrospectivos (incorreta). III: estudos longitudinais (de coorte) acompanham indivíduos ao longo do tempo para medir incidência e podem ser prospectivos (concorrentes) ou retrospectivos (históricos) (correta).",
    "commentary": "II e III (A) e apenas II (D): ensaios clínicos são prospectivos.\n\nApenas III (C): a afirmativa I também está correta.",
    "reference": "Almeida Filho N, Barreto ML. Epidemiologia & Saúde; Medronho RA. Epidemiologia, 2ª ed.",
    "tags": [
      "desenhos de estudo",
      "estudo ecológico",
      "ensaio clínico",
      "estudo de coorte",
      "epidemiologia"
    ],
    "tip": "Ensaio clínico: experimental e sempre prospectivo. Coorte: pode ser prospectiva ou histórica."
  },
  {
    "id": "fubog2025-82",
    "module": "Saúde Coletiva",
    "text": "A relação entre sensibilidade e especificidade é:",
    "options": [
      "Um teste com alta especificidade pode possuir baixa sensibilidade",
      "Um teste altamente sensível geralmente possui alta especificidade",
      "A sensibilidade e especificidade de um teste aumentam com a prevalência da doença",
      "A especificidade de um teste é dependente da prevalência da doença"
    ],
    "correctAnswer": 0,
    "explanation": "Sensibilidade e especificidade costumam variar em sentidos opostos conforme o ponto de corte: ao aumentar a especificidade, em geral diminui a sensibilidade, e vice-versa. Assim, um teste muito específico pode ter baixa sensibilidade. Ambas são propriedades intrínsecas do teste e, em princípio, não dependem da prevalência — o que depende da prevalência são os valores preditivos.",
    "commentary": "Altamente sensível geralmente também específico (B): há em geral um trade-off entre as duas.\n\nAumentam com a prevalência (C) e especificidade dependente da prevalência (D): a prevalência afeta os valores preditivos positivo e negativo, não a sensibilidade e a especificidade.",
    "reference": "Fletcher RH, Fletcher SW. Epidemiologia Clínica: elementos essenciais, 5ª ed.",
    "tags": [
      "sensibilidade",
      "especificidade",
      "testes diagnósticos",
      "epidemiologia"
    ],
    "tip": "Prevalência muda VPP e VPN, não sensibilidade e especificidade."
  },
  {
    "id": "fubog2025-83",
    "module": "Saúde Coletiva",
    "text": "O conceito de Sistema Epidemiológico no modelo sistêmico de epidemiologia é:",
    "options": [
      "Conjunto formado por agente, suscetível e pelo meio ambiente, dotado de uma organização interna que regula as interações determinantes da produção de doença",
      "Conjunto de processos interativos que cria o estímulo patológico no meio ambiente",
      "Conjunto de elementos de tal forma relacionados que uma mudança de qualquer elemento provoca mudança no estado dos demais elementos",
      "Conjunto de fatores que perturbam o ser diretamente em suas funções vitais produzindo a doença"
    ],
    "correctAnswer": 0,
    "explanation": "No modelo sistêmico da epidemiologia (Rouquayrol), o sistema epidemiológico é o conjunto formado por agente, suscetível e ambiente, dotado de organização interna que regula as interações determinantes da produção da doença, junto com os fatores que influenciam essa interação.",
    "commentary": "Processos interativos que criam o estímulo patológico (B): descreve parte do processo, não o conceito de sistema epidemiológico.\n\nElementos relacionados em que a mudança de um altera os demais (C): é a definição genérica de sistema, não de sistema epidemiológico.\n\nFatores que perturbam as funções vitais (D): descreve o estímulo patogênico, não o sistema.",
    "reference": "Rouquayrol MZ, Gurgel M. Epidemiologia & Saúde, 8ª ed.",
    "tags": [
      "modelo sistêmico",
      "processo saúde-doença",
      "epidemiologia"
    ],
    "tip": "Sistema epidemiológico: agente + suscetível + ambiente, com organização que regula a produção da doença."
  },
  {
    "id": "fubog2025-84",
    "module": "Saúde Coletiva",
    "text": "Sobre a criação do Sistema Único de Saúde (SUS) na Constituição Federal de 1988, é CORRETO afirmar que:",
    "options": [
      "Foi criado exclusivamente para atender trabalhadores formais e seus dependentes",
      "Foi criado para substituir o Sistema Nacional de Previdência Social (SINPAS)",
      "Foi criado com base nos princípios de universalização, equidade e descentralização",
      "Foi criado para centralizar todas as ações de saúde no âmbito federal"
    ],
    "correctAnswer": 2,
    "explanation": "A Constituição de 1988 criou o SUS como sistema público, universal, fundado nos princípios de universalidade, integralidade e equidade, e organizado pelas diretrizes de descentralização (com direção única em cada esfera), regionalização e hierarquização e participação da comunidade. A alternativa C, que cita universalização, equidade e descentralização, é a correta.",
    "commentary": "Exclusivo para trabalhadores formais (A): esse era o modelo previdenciário do INAMPS; o SUS é universal.\n\nCriado para substituir o SINPAS (B): o SUS absorveu o INAMPS, mas não foi criado com o objetivo de substituir o SINPAS; seu propósito é garantir a saúde como direito de todos.\n\nCentralizar no âmbito federal (D): a diretriz é a descentralização.",
    "reference": "Constituição Federal de 1988, arts. 196 a 200; Lei nº 8.080/1990",
    "tags": [
      "SUS",
      "constituição federal",
      "princípios do SUS",
      "legislação do SUS"
    ],
    "tip": "SUS: universalidade, integralidade e equidade; descentralização, regionalização/hierarquização e participação social."
  },
  {
    "id": "fubog2025-85",
    "module": "Saúde Coletiva",
    "text": "Sobre as competências do SUS, conforme estabelecido na Constituição e na Lei nº 8.080, é CORRETO afirmar:",
    "options": [
      "Não participa da formulação de políticas de saneamento básico, que são governadas pelo sistema nacional de saneamento básico",
      "Não tem competência para executar ações de vigilância sanitária e epidemiológica, pois essas ações são integradas à saúde, porém executadas pela Anvisa",
      "É responsável apenas pela assistência terapêutica integral, sem incluir a saúde do trabalhador, que deve ser de competência do Ministério do Trabalho",
      "É responsável por controlar e fiscalizar procedimentos, produtos e substâncias de interesse para a saúde, além de contribuir para a produção de medicamentos"
    ],
    "correctAnswer": 3,
    "explanation": "O artigo 200 da Constituição e a Lei 8.080/1990 atribuem ao SUS, entre outras competências: controlar e fiscalizar procedimentos, produtos e substâncias de interesse para a saúde; participar da produção de medicamentos, equipamentos, imunobiológicos e hemoderivados; executar ações de vigilância sanitária, epidemiológica e de saúde do trabalhador; participar da formulação da política de saneamento básico; e ordenar a formação de recursos humanos em saúde.",
    "commentary": "Não participa do saneamento básico (A): participar da formulação da política e da execução de ações de saneamento é competência do SUS.\n\nVigilância executada só pela Anvisa (B): a Anvisa integra o SUS, e as ações de vigilância são executadas pelas três esferas.\n\nSaúde do trabalhador fora do SUS (C): a saúde do trabalhador é competência do SUS (art. 200, II).",
    "reference": "Constituição Federal de 1988, art. 200; Lei nº 8.080/1990, art. 6º",
    "tags": [
      "competências do SUS",
      "lei 8.080/1990",
      "vigilância sanitária",
      "legislação do SUS"
    ],
    "tip": "Art. 200: o SUS fiscaliza produtos, produz medicamentos, faz vigilância e saúde do trabalhador."
  },
  {
    "id": "fubog2025-86",
    "module": "Saúde Coletiva",
    "text": "A Declaração de Óbito (DO) é um documento padronizado e de uso obrigatório em todo o território nacional. Sobre o assunto, há as seguintes afirmativas:\n\nI. A DO deve ser emitida pelo cartório de registro civil.\nII. A via amarela da DO deve ser arquivada no prontuário do paciente.\nIII. A DO foi atualizada pela última vez em 2014.\n\nConsiderando-se as afirmativas como verdadeiras (V) ou falsas (F), a alternativa CORRETA é:",
    "options": [
      "V, V, V",
      "F, F, V",
      "V, F, F",
      "F, F, F"
    ],
    "correctAnswer": 1,
    "explanation": "I: a declaração de óbito é emitida pelo médico (assistente, substituto, IML ou SVO), não pelo cartório, que a utiliza para lavrar a certidão de óbito (F). II: a DO tem três vias — branca (secretaria de saúde), amarela (entregue à família para o registro no cartório) e rosa (arquivada no prontuário ou na unidade notificadora) (F). III: pelo gabarito, o modelo vigente da DO foi atualizado em 2014 (V).",
    "commentary": "V, V, V (A) e V, F, F (C): quem emite a DO é o médico, não o cartório.\n\nF, F, F (D): o gabarito considera verdadeira a atualização do modelo em 2014.",
    "reference": "Ministério da Saúde – Declaração de Óbito: manual de instruções para preenchimento (2022); Resolução CFM nº 1.779/2005",
    "tags": [
      "declaração de óbito",
      "SIM",
      "ética médica"
    ],
    "tip": "DO: médico emite; branca → secretaria, amarela → família/cartório, rosa → prontuário."
  },
  {
    "id": "fubog2025-87",
    "module": "Saúde Coletiva",
    "text": "Paciente, sexo feminino, 14 anos, procura a Unidade Básica de Saúde (UBS) para consulta de rotina. No momento da consulta, está desacompanhada e menciona que quer começar a usar anticoncepcional, pois pretende ter relações sexuais com o namorado, de 18 anos. No que diz respeito à conduta médica, a abordagem mais adequada é:",
    "options": [
      "Explicar para a paciente que ela deve trazer seus pais ou responsáveis para uma nova consulta, pois eles devem estar cientes e autorizar a prescrição do anticoncepcional",
      "Solicitar que os responsáveis compareçam em consulta para orientação e autorização da prescrição da pílula, pois por se tratar de uma adolescente, essa decisão deve ser compartilhada com os responsáveis",
      "Orientar a paciente sobre o uso de preservativos, que não devem ser dispensados mesmo com o uso do anticoncepcional, fornecer instruções sobre o uso correto da pílula e prescrever, conforme solicitado, sem necessidade de contatar os pais",
      "Prescrever a pílula, desde que ela se comprometa a trazer um termo de consentimento assinado pelos pais ou responsáveis, e se comprometa a comparecer a cada 30 dias em consulta"
    ],
    "correctAnswer": 2,
    "explanation": "A adolescente de 14 anos tem direito a atendimento sigiloso e à orientação e prescrição de métodos contraceptivos, sem necessidade de autorização dos pais, desde que tenha capacidade de compreender a situação (ECA, Código de Ética Médica, Marco Legal da Saúde do Adolescente). O médico deve orientar sobre o uso correto do método e da dupla proteção com preservativo, prescrever conforme a escolha e oferecer acompanhamento. Como ela tem 14 anos e o parceiro 18, a relação não configura estupro de vulnerável (que se aplica a menores de 14 anos).",
    "commentary": "Exigir a presença dos pais (A e B): condicionar a prescrição à autorização dos responsáveis fere o direito ao sigilo e afasta a adolescente do serviço.\n\nPrescrever com termo assinado pelos pais e consultas mensais (D): impõe exigências sem amparo legal ou clínico.",
    "reference": "Ministério da Saúde – Marco Legal: Saúde, um Direito de Adolescentes (2007); Código de Ética Médica, art. 74; ECA",
    "tags": [
      "saúde do adolescente",
      "anticoncepção",
      "sigilo médico",
      "ética médica"
    ],
    "tip": "Adolescente com capacidade de entendimento: sigilo e contracepção sem autorização dos pais."
  },
  {
    "id": "fubog2025-88",
    "module": "Saúde Coletiva",
    "text": "Sobre a Rede Interagencial de Informações para a Saúde (RIPSA), é CORRETO afirmar:",
    "options": [
      "Foi instituída em 1996 por iniciativa conjunta do Ministério da Saúde e da Organização Pan-Americana da Saúde (OPAS)",
      "É uma iniciativa exclusiva do Ministério da Saúde, sem participação de outras instituições",
      "Foi criada em 2002 com o objetivo de melhorar a coleta de dados de saúde em áreas urbanas",
      "É responsável pela coleta e análise de dados de mortalidade no Brasil"
    ],
    "correctAnswer": 0,
    "explanation": "A Rede Interagencial de Informações para a Saúde (RIPSA) foi instituída em 1996 por iniciativa conjunta do Ministério da Saúde e da Organização Pan-Americana da Saúde. Articula instituições produtoras de informação (IBGE, IPEA, universidades, entre outras) para produzir e qualificar indicadores básicos de saúde (IDB).",
    "commentary": "Exclusiva do Ministério da Saúde (B): é interagencial, com participação de várias instituições.\n\nCriada em 2002 para dados urbanos (C): foi criada em 1996, com abrangência nacional.\n\nResponsável pela coleta de dados de mortalidade (D): essa função é do Sistema de Informações sobre Mortalidade (SIM); a RIPSA organiza indicadores a partir das bases existentes.",
    "reference": "RIPSA – Indicadores básicos para a saúde no Brasil: conceitos e aplicações, 2ª ed. (2008)",
    "tags": [
      "RIPSA",
      "sistemas de informação em saúde",
      "indicadores de saúde"
    ],
    "tip": "RIPSA: 1996, Ministério da Saúde + OPAS, indicadores básicos de saúde."
  },
  {
    "id": "fubog2025-89",
    "module": "Saúde Coletiva",
    "text": "Paciente, 45 anos, portador de HIV, é acompanhado por Unidade Básica de Saúde (UBS), relata que não contou à família, pois “não quer preocupar ninguém”. Tempos depois, o agente de saúde comunica que ele está internado por pneumonia em um hospital de referência. A mãe comparece à UBS solicitando uma cópia do prontuário, pois deseja levá-lo ao hospital para que a equipe conheça os antecedentes pessoais do paciente. A conduta apropriada para o caso é:",
    "options": [
      "Não fornecer uma cópia do prontuário, salvo em caso de óbito do paciente",
      "Fornecer uma cópia do prontuário se houver solicitação do hospital",
      "Não fornecer uma cópia do prontuário sem autorização do paciente",
      "Fornecer uma cópia do prontuário desde que a mãe tenha uma procuração"
    ],
    "correctAnswer": 2,
    "explanation": "O prontuário pertence ao paciente, e as informações nele contidas são protegidas pelo sigilo médico. Cópia só pode ser fornecida ao próprio paciente, a quem ele autorizar por escrito, por ordem judicial ou ao médico para a própria defesa. A mãe de um paciente adulto e capaz não tem direito de acesso sem autorização dele — ainda mais tratando-se de diagnóstico de HIV que o paciente quis manter em sigilo. Se o hospital precisar das informações, a comunicação deve ocorrer entre os serviços/médicos, para fins assistenciais.",
    "commentary": "Fornecer apenas em caso de óbito (A): mesmo após o óbito o sigilo permanece; o acesso de familiares segue regras específicas.\n\nFornecer se o hospital solicitar (B): a troca de informações clínicas entre médicos para assistência é possível, mas não por meio da entrega da cópia à mãe.\n\nCom procuração (D): uma procuração do paciente equivaleria a autorização, mas a alternativa não reflete a conduta correta neste caso, em que o paciente quis manter sigilo.",
    "reference": "Código de Ética Médica (Resolução CFM nº 2.217/2018), arts. 73, 85 e 89; Parecer CFM sobre acesso a prontuário",
    "tags": [
      "sigilo médico",
      "prontuário",
      "HIV",
      "ética médica"
    ],
    "tip": "Prontuário de adulto capaz: cópia só com autorização dele (ou ordem judicial)."
  },
  {
    "id": "fubog2025-90",
    "module": "Saúde Coletiva",
    "text": "Sobre o principal objetivo da prevenção quinquenária, é CORRETO afirmar:",
    "options": [
      "Promover a educação alimentar e a prática de atividade física",
      "Diagnosticar precocemente doenças em estágio inicial",
      "Reduzir complicações de doenças crônicas",
      "Melhorar a qualidade dos cuidados prestados ao paciente, focando no cuidador"
    ],
    "correctAnswer": 3,
    "explanation": "A prevenção quinquenária, proposta como extensão dos níveis de prevenção, volta-se à proteção do profissional de saúde — cuidar do cuidador —, prevenindo esgotamento, erros e danos causados por condições ruins de trabalho e, assim, melhorando a qualidade dos cuidados prestados ao paciente.",
    "commentary": "Educação alimentar e atividade física (A): ações de prevenção primária e promoção da saúde.\n\nDiagnóstico precoce (B): prevenção secundária.\n\nReduzir complicações de doenças crônicas (C): prevenção terciária.",
    "reference": "Pandve HT. Quaternary prevention: need of the hour; Jamoulle M. Quinary prevention, a new level of prevention",
    "tags": [
      "níveis de prevenção",
      "prevenção quinquenária",
      "saúde do trabalhador da saúde",
      "medicina preventiva"
    ],
    "tip": "Prevenção quinquenária: cuidar de quem cuida."
  },
  {
    "id": "fubog2025-91",
    "module": "Saúde Coletiva",
    "text": "A atenção secundária à saúde envolve profissionais mais específicos e maior demanda tecnológica, sendo responsável por casos de complexidade intermediária. Sobre o assunto, há as seguintes afirmativas:\n\nI. Unidades de Pronto Atendimento (UPAs) representam um exemplo de atuação da atenção secundária.\nII. A atenção secundária é caracterizada pelo uso de tecnologias avançadas e procedimentos invasivos.\nIII. Serviços de urgência e emergência são comumente utilizados na atenção secundária.\n\nDessa forma, é CORRETO afirmar:",
    "options": [
      "Apenas I e III estão corretas",
      "Apenas II está correta",
      "Apenas III está correta",
      "Apenas II e III estão corretas"
    ],
    "correctAnswer": 0,
    "explanation": "A atenção secundária abrange serviços de média complexidade: ambulatórios de especialidades, serviços de apoio diagnóstico e terapêutico e, na classificação adotada pela questão, serviços de urgência e emergência como as UPAs, que fazem parte do componente pré-hospitalar fixo da Rede de Urgência e Emergência (I e III corretas). Tecnologias avançadas e procedimentos invasivos de alta densidade tecnológica caracterizam a atenção terciária (II incorreta).",
    "commentary": "Apenas II (B) e II e III (D): o uso de tecnologia avançada e procedimentos invasivos caracteriza a atenção terciária.\n\nApenas III (C): a afirmativa I também está correta.",
    "reference": "Ministério da Saúde – Política Nacional de Atenção às Urgências; Portaria GM/MS nº 1.600/2011 (Rede de Urgência e Emergência)",
    "tags": [
      "níveis de atenção",
      "atenção secundária",
      "UPA",
      "redes de atenção à saúde"
    ],
    "tip": "Secundária: média complexidade (especialidades, UPA); terciária: alta complexidade."
  },
  {
    "id": "fubog2025-92",
    "module": "Saúde Coletiva",
    "text": "O papel do Ministério da Saúde e do Sistema Único de Saúde (SUS) na saúde do trabalhador é:",
    "options": [
      "Coordenar a utilização de agrotóxicos e a educação ambiental",
      "Realizar a inspeção e fiscalização das condições e dos ambientes de trabalho",
      "Responsabilizar-se pela perícia médica, reabilitação profissional e pagamento de benefícios",
      "Executar ações de vigilância sanitária e epidemiológica, assim como de saúde do trabalhador"
    ],
    "correctAnswer": 3,
    "explanation": "Pela Constituição (art. 200) e pela Lei 8.080/1990, compete ao SUS executar ações de vigilância sanitária e epidemiológica e de saúde do trabalhador, o que inclui vigilância em saúde do trabalhador, assistência, notificação de agravos relacionados ao trabalho e atuação dos CEREST (Política Nacional de Saúde do Trabalhador e da Trabalhadora, 2012).",
    "commentary": "Coordenar uso de agrotóxicos e educação ambiental (A): o SUS participa do controle de substâncias tóxicas, mas a coordenação do uso de agrotóxicos envolve agricultura e meio ambiente.\n\nInspeção e fiscalização dos ambientes de trabalho (B): a fiscalização trabalhista é atribuição do Ministério do Trabalho (embora a vigilância em saúde do trabalhador do SUS também inspecione ambientes).\n\nPerícia, reabilitação profissional e benefícios (C): competências da Previdência Social (INSS).",
    "reference": "Constituição Federal de 1988, art. 200; Lei nº 8.080/1990; Política Nacional de Saúde do Trabalhador e da Trabalhadora (Portaria nº 1.823/2012)",
    "tags": [
      "saúde do trabalhador",
      "competências do SUS",
      "vigilância em saúde"
    ],
    "tip": "Saúde do trabalhador: SUS vigia e assiste; Ministério do Trabalho fiscaliza; INSS paga benefício."
  },
  {
    "id": "fubog2025-93",
    "module": "Saúde Coletiva",
    "text": "O modelo explicativo do processo saúde-doença predominante na atualidade que é criticado por sua visão fragmentária e mecanicista é:",
    "options": [
      "Modelo holístico",
      "Modelo biomédico",
      "Modelo dinâmico",
      "Modelo da História natural das doenças"
    ],
    "correctAnswer": 1,
    "explanation": "O modelo biomédico, hegemônico desde o Relatório Flexner (1910), explica a doença como lesão orgânica ou disfunção biológica, com foco no órgão e no tratamento especializado. É criticado por sua visão fragmentária, mecanicista, individualista e centrada no hospital e na doença, desconsiderando determinantes sociais e subjetivos.",
    "commentary": "Modelo holístico (A): propõe justamente uma visão integral do ser humano, contrária à fragmentação.\n\nModelo dinâmico (C): não é designação reconhecida como modelo hegemônico criticado.\n\nHistória natural das doenças (D): modelo de Leavell e Clark, que organiza a prevenção por níveis; é criticado por ser linear, mas não é o principal alvo da crítica de fragmentação.",
    "reference": "Barros JAC. Pensando o processo saúde-doença: a que responde o modelo biomédico? Saúde e Sociedade, 2002",
    "tags": [
      "modelo biomédico",
      "processo saúde-doença",
      "saúde coletiva"
    ],
    "tip": "Modelo biomédico: fragmentado, mecanicista, centrado na doença."
  },
  {
    "id": "fubog2025-94",
    "module": "Saúde Coletiva",
    "text": "Com relação à importância da atualização da lista nacional de agravos de notificação compulsória pela Portaria GM/MS Nº 217/2023, é CORRETO afirmar que:",
    "options": [
      "Elimina a necessidade de monitoramento de epizootias",
      "Reduz a necessidade de notificação de novos agravos",
      "Limita a notificação apenas a doenças de causa conhecida",
      "Garante a vigilância contínua e atualizada de eventos que possam ameaçar a saúde pública"
    ],
    "correctAnswer": 3,
    "explanation": "A lista nacional de doenças e agravos de notificação compulsória é atualizada periodicamente (Portaria GM/MS 217/2023, que incluiu, por exemplo, a mpox e outros eventos) para que a vigilância acompanhe o cenário epidemiológico, garantindo monitoramento contínuo e atualizado de eventos que possam ameaçar a saúde pública, inclusive epizootias e eventos de saúde pública.",
    "commentary": "Elimina o monitoramento de epizootias (A): epizootias de interesse (como morte de primatas por febre amarela) continuam na lista.\n\nReduz a necessidade de notificar novos agravos (B): atualizações costumam incluir novos agravos.\n\nLimita a doenças de causa conhecida (C): eventos de saúde pública inusitados ou de causa desconhecida também devem ser notificados.",
    "reference": "Ministério da Saúde – Portaria GM/MS nº 217, de 1º de março de 2023",
    "tags": [
      "notificação compulsória",
      "vigilância epidemiológica",
      "doenças de notificação"
    ],
    "tip": "Lista de notificação compulsória: atualizada para acompanhar ameaças à saúde pública."
  },
  {
    "id": "fubog2025-95",
    "module": "Saúde Coletiva",
    "text": "Sobre a transição epidemiológica no Brasil, é CORRETO afirmar:",
    "options": [
      "A expectativa de vida ao nascer no Brasil diminuiu de 45,5 anos em 1940 para 76 anos em 2017",
      "A taxa geral de mortalidade no Brasil aumentou de 18/1000 em 1940 para 6/1000 em 2015",
      "Nos últimos 60 anos, o Brasil passou de um perfil de alta mortalidade por doenças infecciosas para predominância de óbitos por doenças cardiovasculares e outras crônico-degenerativas",
      "As doenças infecciosas e parasitárias representavam 5,9% do total de óbitos em 1930"
    ],
    "correctAnswer": 2,
    "explanation": "Nas últimas décadas, o Brasil passou por transição epidemiológica: de um perfil com alta mortalidade por doenças infecciosas e parasitárias para predomínio de óbitos por doenças cardiovasculares, neoplasias e outras crônico-degenerativas, além das causas externas. Fala-se em transição prolongada e polarizada, com persistência de doenças infecciosas (dupla ou tripla carga de doenças).",
    "commentary": "Expectativa de vida “diminuiu” de 45,5 para 76 anos (A): houve aumento, não diminuição.\n\nMortalidade “aumentou” de 18 para 6/1.000 (B): os números mostram queda, não aumento.\n\nInfecciosas eram 5,9% dos óbitos em 1930 (D): em 1930 representavam cerca de 46% dos óbitos; 5,9% é próximo do valor atual.",
    "reference": "Ministério da Saúde – Saúde Brasil; Schramm JMA et al. Transição epidemiológica e o estudo de carga de doença no Brasil, Ciência & Saúde Coletiva 2004",
    "tags": [
      "transição epidemiológica",
      "transição demográfica",
      "epidemiologia"
    ],
    "tip": "Transição epidemiológica: infecciosas → crônicas, com dupla carga no Brasil."
  },
  {
    "id": "fubog2025-96",
    "module": "Ginecologia e Obstetrícia",
    "text": "A estimativa da Idade Gestacional (IG) é um passo crucial na primeira consulta de pré-natal. Sobre o assunto, há as seguintes afirmativas:\n\nI. A idade gestacional é estimada com base na Data da Última Menstruação (DUM) e confirmada por ultrassonografia no segundo trimestre.\nII. A regra de Naegele é utilizada para calcular a data provável do parto, somando 7 dias à DUM e subtraindo dois meses.\nIII. Ciclos menstruais irregulares podem contribuir para erros na estimativa da DUM.\n\nConsiderando-se as afirmativas como verdadeiras (V) ou falsas (F), a alternativa CORRETA é:",
    "options": [
      "F, F, V",
      "V, V, V",
      "V, F, F",
      "F, F, F"
    ],
    "correctAnswer": 0,
    "explanation": "I: a idade gestacional é estimada pela DUM e confirmada pela ultrassonografia do primeiro trimestre (comprimento cabeça-nádega), que é a mais precisa — não a do segundo trimestre (F). II: a regra de Naegele calcula a data provável do parto somando 7 dias ao primeiro dia da DUM e subtraindo 3 meses (ou somando 9) — não dois (F). III: ciclos irregulares, uso recente de anticoncepcional e amamentação dificultam a estimativa pela DUM (V).",
    "commentary": "V, V, V (B) e V, F, F (C): a datação ideal é pelo ultrassom de primeiro trimestre, e Naegele subtrai 3 meses.\n\nF, F, F (D): ciclos irregulares de fato causam erro na estimativa.",
    "reference": "Ministério da Saúde – Caderno de Atenção Básica nº 32: Atenção ao Pré-Natal de Baixo Risco; ACOG Committee Opinion nº 700",
    "tags": [
      "idade gestacional",
      "regra de Naegele",
      "pré-natal",
      "datação da gestação"
    ],
    "tip": "Naegele: DUM + 7 dias − 3 meses. Datação mais precisa: CCN no 1º trimestre."
  },
  {
    "id": "fubog2025-97",
    "module": "Saúde Coletiva",
    "text": "Sobre a sensibilidade e especificidade nos testes diagnósticos, é CORRETO afirmar:",
    "options": [
      "A especificidade de um teste é a probabilidade de dar positivo na presença da doença",
      "A especificidade de um teste é a probabilidade de dar positivo na ausência da doença",
      "A sensibilidade de um teste é a probabilidade de dar negativo na presença da doença",
      "A sensibilidade de um teste é a probabilidade de dar positivo na presença da doença"
    ],
    "correctAnswer": 3,
    "explanation": "Sensibilidade é a probabilidade de o teste ser positivo quando a doença está presente (proporção de verdadeiros positivos entre os doentes). Especificidade é a probabilidade de o teste ser negativo quando a doença está ausente (verdadeiros negativos entre os não doentes).",
    "commentary": "Especificidade como positivo na presença da doença (A): essa é a sensibilidade.\n\nEspecificidade como positivo na ausência da doença (B): isso é a taxa de falso positivo (1 − especificidade).\n\nSensibilidade como negativo na presença da doença (C): isso é a taxa de falso negativo (1 − sensibilidade).",
    "reference": "Fletcher RH, Fletcher SW. Epidemiologia Clínica: elementos essenciais, 5ª ed.",
    "tags": [
      "sensibilidade",
      "especificidade",
      "testes diagnósticos",
      "epidemiologia"
    ],
    "tip": "Sensibilidade: positivo em quem tem. Especificidade: negativo em quem não tem."
  },
  {
    "id": "fubog2025-98",
    "module": "Saúde Coletiva",
    "text": "Sobre os princípios e diretrizes da Atenção Básica no SUS, é CORRETO afirmar:",
    "options": [
      "Deve ser integral, mas pode limitar o acesso a determinados grupos populacionais",
      "Deve ser universal, mas pode priorizar e supervalorizar pessoas com condições socioeconômicas desfavoráveis",
      "Deve ser universal, equitativa e integral, garantindo acesso a todos os serviços de saúde de forma contínua e resolutiva",
      "Deve ser equitativa, mas não precisa garantir a integralidade dos serviços de saúde, pois isso é de competência das Redes de Atenção a Saúde (RAS)"
    ],
    "correctAnswer": 2,
    "explanation": "Pela Política Nacional de Atenção Básica (2017), a Atenção Básica orienta-se pelos princípios de universalidade, equidade e integralidade, e pelas diretrizes de regionalização, territorialização, população adscrita, cuidado centrado na pessoa, resolutividade, longitudinalidade, coordenação do cuidado, ordenação da rede e participação da comunidade. A alternativa C traz os três princípios.",
    "commentary": "Integral, mas limitando o acesso a grupos (A): a universalidade não permite restringir o acesso.\n\nUniversal, mas supervalorizando os mais pobres (B): a equidade prioriza segundo a necessidade, sem “supervalorizar” grupos.\n\nEquitativa sem garantir integralidade (D): a integralidade é princípio também da Atenção Básica, que coordena o cuidado na rede.",
    "reference": "Ministério da Saúde – Política Nacional de Atenção Básica (Portaria nº 2.436/2017)",
    "tags": [
      "PNAB",
      "atenção primária à saúde",
      "princípios do SUS"
    ],
    "tip": "PNAB: princípios = universalidade, equidade e integralidade."
  },
  {
    "id": "fubog2025-99",
    "module": "Saúde Coletiva",
    "text": "Com relação ao período de incubação e transmissibilidade dos arbovírus, é CORRETO afirmar que:",
    "options": [
      "O período de incubação intrínseco do vírus Zika (ZIKV) é de 8 a 14 dias",
      "O período de viremia do vírus Chikungunya (CHIKV) no homem pode durar até 10 dias",
      "O período de incubação extrínseco do vírus Dengue (DENV) é de 1 a 12 dias",
      "O período de viremia do vírus Zika (ZIKV) no homem se estende até o décimo dia do início dos sintomas"
    ],
    "correctAnswer": 1,
    "explanation": "Pelo Guia de Vigilância em Saúde, a viremia do chikungunya no ser humano começa dois dias antes dos sintomas e pode durar até 10 dias após seu início, período em que o mosquito pode se infectar. Para a dengue, a viremia vai de um dia antes até o 5º–6º dia de sintomas; o período de incubação intrínseco é de 4 a 10 dias (média 5–6) e o extrínseco (no mosquito) de 8 a 12 dias.",
    "commentary": "Incubação intrínseca do Zika de 8 a 14 dias (A): é de 3 a 12 dias.\n\nIncubação extrínseca da dengue de 1 a 12 dias (C): é de 8 a 12 dias.\n\nViremia do Zika até o 10º dia (D): a viremia do Zika costuma durar até cerca do 5º dia de sintomas (o vírus persiste mais em urina e sêmen).",
    "reference": "Ministério da Saúde – Guia de Vigilância em Saúde, 6ª ed. (dengue, chikungunya e Zika)",
    "tags": [
      "arboviroses",
      "chikungunya",
      "dengue",
      "zika",
      "vigilância epidemiológica"
    ],
    "tip": "Chikungunya: viremia de 2 dias antes até 10 dias após os sintomas."
  },
  {
    "id": "fubog2025-100",
    "module": "Clínica Médica",
    "text": "Paciente, 35 anos, que recentemente voltou de uma viagem à Amazônia, apresenta febre alta, calafrios, sudorese intensa e cefaleia. Após exame de sangue, foi diagnosticado com malária. A espécie de Plasmodium mais provável pela infecção é:",
    "options": [
      "Plasmodium vivax",
      "Plasmodium malariae",
      "Plasmodium ovale",
      "Plasmodium falciparum"
    ],
    "correctAnswer": 0,
    "explanation": "Na região amazônica, que concentra mais de 99% dos casos de malária do Brasil, a espécie predominante é o Plasmodium vivax (cerca de 80–90% dos casos), seguido do P. falciparum. O quadro de febre alta com calafrios e sudorese é comum a todas as espécies; o diagnóstico é feito pela gota espessa ou teste rápido, que identifica a espécie e orienta o tratamento (cloroquina + primaquina para vivax).",
    "commentary": "P. malariae (B): responsável por uma pequena fração dos casos, com febre quartã.\n\nP. ovale (C): não é transmitido no Brasil (ocorre na África).\n\nP. falciparum (D): é a espécie mais grave e a segunda mais frequente na Amazônia, mas não a mais comum.",
    "reference": "Ministério da Saúde – Guia de Tratamento da Malária no Brasil (2021); Guia de Vigilância em Saúde",
    "tags": [
      "malária",
      "P. vivax",
      "região amazônica",
      "infectologia"
    ],
    "tip": "Malária no Brasil: ~85% vivax, na Amazônia Legal."
  }
];
