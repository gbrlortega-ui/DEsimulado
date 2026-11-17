import { Question } from '../types';

// Dante Pazzanese 2026 (SP) — residência médica (acesso direto). 80 questões, 4 alternativas.
// Gabarito conferido no gabarito comentado do AjudaMédico; explicações com texto próprio.
export const DANTE_2026_QUESTIONS: Question[] = [
  {
    "id": "dante2026-1",
    "topography": "6.1",
    "topic": "Osteoartrose",
    "module": "Clínica Médica",
    "text": "Mulher de 41 anos, previamente hígida, comparece ao ambulatório com queixa de dor no joelho direito há 1 ano, que piora ao caminhar e melhora com o repouso, associada a rigidez matinal de 20 minutos. Nega lesões cutâneas ou acometimento de outras articulações. Ao exame, não há calor, rubor ou aumento do volume articular no joelho direito. O movimento passivo está levemente limitado pela dor, com presença de crepitações. Foram realizados exames laboratoriais que evidenciaram fator antinuclear com padrão nuclear pontilhado fino denso na titulação de 1:80 (VR: < 1:80 - Não reagente) e ácido úrico sérico de 7,1mg/dL (VR: 2,4 - 6,0mg/dL). Radiografia simples do joelho direito demonstrou redução do espaço articular e esclerose subcondral.\n\nConsiderando a principal hipótese diagnóstica, qual é o tratamento que deve ser iniciado?",
    "options": [
      "Prednisona oral",
      "Cetoprofeno tópico",
      "Metotrexato oral",
      "Colchicina oral"
    ],
    "correctAnswer": 1,
    "explanation": "Dor no joelho há 1 ano, de padrão mecânico (piora ao caminhar, melhora com repouso), rigidez matinal curta (20 minutos), crepitação, sem sinais inflamatórios, e radiografia com redução do espaço articular e esclerose subcondral: osteoartrite de joelho.\n\nOs exames são distratores. FAN de 1:80 com padrão pontilhado fino denso é frequente em pessoas saudáveis e não sugere doença autoimune sem clínica. Ácido úrico de 7,1 mg/dL sem crises de artrite é hiperuricemia assintomática, não gota.\n\nNa osteoartrite de joelho, o AINE tópico é tratamento de primeira linha (recomendação forte do ACR): alivia a dor com muito menos efeito sistêmico que o oral. Junto, exercícios de fortalecimento, perda de peso se necessário e educação.",
    "commentary": "Prednisona oral (A): corticoide sistêmico não tem papel na osteoartrite; o corticoide é usado apenas por injeção intra-articular em crises.\n\nMetotrexato (C): é droga modificadora para artrite reumatoide e outras artrites inflamatórias; não há sinovite nem quadro inflamatório.\n\nColchicina (D): trata e previne crises de gota; hiperuricemia assintomática não é tratada com colchicina.",
    "tip": "Osteoartrite de joelho: exercício + AINE tópico. FAN 1:80 pontilhado fino denso e ácido úrico levemente alto, sem clínica, são achados que não mudam a conduta.",
    "reference": "Kolasinski SL et al. 2019 ACR/Arthritis Foundation Guideline for the Management of Osteoarthritis of the Hand, Hip, and Knee. Sociedade Brasileira de Reumatologia. Recomendações para o tratamento da osteoartrite.",
    "tags": [
      "osteoartrite",
      "AINE tópico",
      "FAN"
    ]
  },
  {
    "id": "dante2026-2",
    "topography": "2.1",
    "topic": "Câncer de pulmão",
    "module": "Clínica Médica",
    "text": "Homem de 65 anos, previamente hígido, comparece à consulta preocupado com um achado visto incidentalmente em uma tomografia computadorizada de tórax, realizada para investigação de dor torácica atípica. É ex-tabagista com carga de 40 maços-ano, tendo interrompido o tabagismo há 10 anos. Sem outros antecedentes ou comorbidades relevantes. O exame evidenciou um nódulo pulmonar solitário sólido, medindo 7mm de diâmetro, localizado perifericamente e com margens regulares.\n\nQual é a conduta adequada para o manejo desse nódulo pulmonar solitário?",
    "options": [
      "Repetir a tomografia computadorizada de tórax em 6 a 12 meses.",
      "Solicitar tomografia por emissão de pósitrons (PET-CT).",
      "Solicitar biópsia transtorácica por agulha fina guiada por TC.",
      "Indicar ressecção cirúrgica imediata por videotoracoscopia."
    ],
    "correctAnswer": 0,
    "explanation": "Nódulo pulmonar sólido, solitário, de 7 mm, achado incidental em homem de 65 anos ex-tabagista de 40 maços-ano: paciente de alto risco para câncer de pulmão.\n\nPela Sociedade Fleischner, nódulo sólido único de 6 a 8 mm em paciente de alto risco: tomografia de controle em 6 a 12 meses e, se estável, nova tomografia em 18 a 24 meses. Nódulos pequenos têm baixa probabilidade de malignidade, e o crescimento no seguimento é o principal sinal de alerta.",
    "commentary": "PET-CT (B): indicado para nódulos sólidos maiores que 8 mm; abaixo disso a resolução do método é baixa e há falso-negativos.\n\nBiópsia transtorácica (C): reservada a nódulos > 8 mm com probabilidade intermediária a alta de malignidade; em 7 mm o risco do procedimento supera o benefício.\n\nRessecção cirúrgica imediata (D): indicada para nódulos com alta suspeita (grandes, espiculados, com crescimento); não para nódulo de 7 mm de margens regulares no primeiro achado.",
    "tip": "Nódulo sólido 6–8 mm: TC em 6–12 meses (alto risco: de novo em 18–24 meses). > 8 mm: considerar PET-CT, biópsia ou ressecção.",
    "reference": "MacMahon H et al. Guidelines for Management of Incidental Pulmonary Nodules Detected on CT Images: Fleischner Society 2017. Radiology, 2017.",
    "tags": [
      "nódulo pulmonar solitário",
      "critérios de Fleischner",
      "câncer de pulmão"
    ]
  },
  {
    "id": "dante2026-3",
    "topography": "4.1",
    "topic": "Lesão renal aguda",
    "module": "Clínica Médica",
    "text": "Mulher de 60 anos, previamente hígida, é admitida na unidade de emergência em estado grave por quadro de choque séptico de foco pulmonar. Foi iniciado protocolo de sepse, com expansão volêmica; antibioticoterapia com cefepime e vancomicina; suporte hemodinâmico com noradrenalina e vasopressina; intubação orotraqueal e início de ventilação mecânica. No segundo dia de internação, a paciente apresenta melhora clínica, utilizando dose baixa de noradrenalina no momento. Os exames laboratoriais mostram creatinina inicial de 0,7mg/dL (VR: 0,7 - 1,3mg/dL) e, no segundo dia, creatinina de 2,0mg/dL.\n\nQual é a classificação da lesão renal aguda apresentada pela paciente no segundo dia e sua etiologia mais provável?",
    "options": [
      "Lesão renal aguda KDIGO Estágio 3 causada pela vancomicina.",
      "Lesão renal aguda KDIGO Estágio 2 causada pelo choque séptico.",
      "Lesão renal aguda KDIGO Estágio 3 causada pelo choque séptico.",
      "Lesão renal aguda KDIGO Estágio 2 causada pela vancomicina."
    ],
    "correctAnswer": 1,
    "explanation": "A creatinina subiu de 0,7 para 2,0 mg/dL em um dia: 2,0 / 0,7 ≈ 2,9 vezes o valor basal.\n\nClassificação KDIGO pela creatinina:\n\n• Estágio 1: 1,5 a 1,9 vez o basal ou aumento ≥ 0,3 mg/dL em 48 horas.\n• Estágio 2: 2,0 a 2,9 vezes o basal.\n• Estágio 3: ≥ 3 vezes o basal, creatinina ≥ 4,0 mg/dL ou início de diálise.\n\nCom 2,9 vezes, é estágio 2. A causa mais provável é o próprio choque séptico (hipoperfusão e lesão inflamatória), que é a principal causa de lesão renal aguda na UTI e precede o efeito da vancomicina.",
    "commentary": "Estágio 3 por vancomicina (A): o aumento não chega a 3 vezes, e a nefrotoxicidade da vancomicina costuma surgir após vários dias de uso, com nível sérico alto.\n\nEstágio 3 pelo choque séptico (C): a causa está certa, mas o estágio não — 2,9 vezes é estágio 2.\n\nEstágio 2 por vancomicina (D): o estágio está certo, mas no segundo dia de uso, em choque, a causa mais provável é a sepse.",
    "tip": "KDIGO: 1,5–1,9× = estágio 1; 2–2,9× = estágio 2; ≥ 3× ou Cr ≥ 4 ou diálise = estágio 3.",
    "reference": "KDIGO Clinical Practice Guideline for Acute Kidney Injury. Kidney Int Suppl, 2012.",
    "tags": [
      "lesão renal aguda",
      "KDIGO",
      "sepse"
    ]
  },
  {
    "id": "dante2026-4",
    "topography": "1.1",
    "topic": "Epilepsia",
    "module": "Clínica Médica",
    "text": "Mulher de 24 anos, previamente hígida, dá entrada na unidade de emergência após familiares relatarem episódio de crise convulsiva tônico-clônica generalizada ocorrido há 40 minutos, com duração aproximada de 1 minuto e resolução espontânea. No momento da admissão, a paciente encontra-se sonolenta e responsiva ao chamado, sem movimentos estereotipados. Foram instituídos monitorização de sinais vitais, feita punção de acesso venoso e coleta de exames laboratoriais. Após 15 minutos, a paciente apresenta nova crise tônico-clônica generalizada, associada a nistagmo horizontal e liberação esfincteriana.\n\nQual medicação deve ser feita prontamente por via intravenosa?",
    "options": [
      "Fenobarbital",
      "Fenitoína",
      "Diazepam",
      "Valproato"
    ],
    "correctAnswer": 2,
    "explanation": "Duas crises tônico-clônicas generalizadas em menos de 1 hora, sem recuperação completa da consciência entre elas (paciente ainda sonolenta): é tratada como estado de mal epiléptico (crise > 5 minutos ou crises repetidas sem recuperação).\n\nA primeira linha é o benzodiazepínico, que deve ser dado logo: diazepam intravenoso (0,15–0,2 mg/kg, até 10 mg, podendo repetir uma vez) ou lorazepam; sem acesso venoso, midazolam intramuscular. Se a crise persistir, segue-se a segunda linha (fenitoína/fosfenitoína, valproato ou levetiracetam) e, depois, anestésicos.",
    "commentary": "Fenobarbital (A): pode ser usado como segunda linha (ou terceira, conforme o protocolo), não como droga inicial.\n\nFenitoína (B): é droga de segunda linha, após o benzodiazepínico; tem início de ação mais lento e precisa de infusão controlada.\n\nValproato (D): também é opção de segunda linha, não de primeira.",
    "tip": "Estado de mal: 0–5 min estabilizar; 5–20 min benzodiazepínico; 20–40 min fenitoína, valproato ou levetiracetam; depois, anestésicos.",
    "reference": "Glauser T et al. Evidence-Based Guideline: Treatment of Convulsive Status Epilepticus in Children and Adults. Epilepsy Curr, 2016.",
    "tags": [
      "estado de mal epiléptico",
      "benzodiazepínico",
      "crise convulsiva"
    ]
  },
  {
    "id": "dante2026-5",
    "topography": "10",
    "topic": "Infecções relacionadas à assistência",
    "module": "Clínica Médica",
    "text": "Homem de 72 anos, previamente sem comorbidades relevantes, encontra-se internado em enfermaria para reabilitação motora e controle álgico após politrauma ocorrido há 2 semanas. Há 2 dias, passou a apresentar febre diária de 38°C, e foi identificada hiperemia no óstio de cateter venoso central posicionado em veia jugular interna direita. O cateter foi prontamente retirado, com coleta subsequente de hemoculturas periféricas, que demonstraram crescimento de Escherichia coli em 10 horas. O antibiograma pode ser visto a seguir:\n\n• Amicacina: CIM 2 — S\n• Aztreonam: CIM ≥ 64 — R\n• Cefepime: CIM 8 — S\n• Ceftazidima: CIM 32 — R\n• Ceftazidima-avibactam: CIM ≤ 0,12 — S\n• Ceftriaxona: CIM ≥ 64 — R\n• Cefuroxima: CIM ≥ 64 — R\n• Ciprofloxacina: CIM ≤ 0,06 — S\n• Ertapenem: CIM ≤ 0,12 — S\n• Gentamicina: CIM ≤ 1 — S\n• Meropenem: CIM ≤ 0,25 — S\n• Piperacilina-tazobactam: CIM ≤ 4 — S\n\n(CIM em µg/mL; S = sensível, R = resistente.)\n\nQual tratamento antimicrobiano deve ser instituído neste momento, levando-se em conta o perfil de resistência do microrganismo identificado e o uso racional de antimicrobiano?",
    "options": [
      "Ceftazidima-avibactam 2,5g a cada 8 horas por 14 dias.",
      "Piperacilina-tazobactam 4,5g a cada 6 horas por 10 dias.",
      "Meropenem 1g a cada 8 horas por 7 dias.",
      "Cefepime 1g a cada 8 horas até hemoculturas negativas."
    ],
    "correctAnswer": 2,
    "explanation": "Bacteremia por E. coli relacionada a cateter venoso central, com o cateter já retirado. O antibiograma mostra resistência a ceftriaxona, cefuroxima, ceftazidima e aztreonam, com sensibilidade aos carbapenêmicos: perfil de E. coli produtora de betalactamase de espectro estendido (ESBL).\n\nNa bacteremia por enterobactéria ESBL, o carbapenêmico é a escolha (estudo MERINO: piperacilina-tazobactam teve mais mortalidade). Pelo uso racional, prefere-se um carbapenêmico sem antipseudomonas como o ertapenem quando possível, ou meropenem. Com o cateter retirado, foco controlado e boa resposta, 7 dias de tratamento são suficientes.",
    "commentary": "Ceftazidima-avibactam por 14 dias (A): é reservado para enterobactérias produtoras de carbapenemase (KPC); usá-lo numa ESBL sensível a carbapenêmico desperdiça antibiótico de última linha. 14 dias também é mais que o necessário.\n\nPiperacilina-tazobactam (B): embora sensível in vitro, teve pior desfecho que o meropenem na bacteremia por ESBL.\n\nCefepime (D): cefalosporinas de 4ª geração não são confiáveis contra ESBL, mesmo com CIM na faixa sensível-dose-dependente; e \"até hemoculturas negativas\" não define a duração.",
    "tip": "Bacteremia por ESBL: carbapenêmico. Foco controlado (cateter retirado) e boa evolução: 7 dias.",
    "reference": "Harris PNA et al. MERINO trial. JAMA, 2018. Tamma PD et al. IDSA Guidance on the Treatment of Antimicrobial-Resistant Gram-Negative Infections, 2024.",
    "tags": [
      "ESBL",
      "bacteremia",
      "infecção relacionada a cateter",
      "uso racional de antimicrobianos"
    ]
  },
  {
    "id": "dante2026-6",
    "topography": "14",
    "topic": "Intoxicações",
    "module": "Clínica Médica",
    "text": "Mulher de 27 anos, previamente hígida, é trazida à unidade de emergência por seu acompanhante devido a quadro de náuseas e sonolência há 6 horas. A paciente refere ainda visão turva com pontos luminosos centrais há 1 hora. Relata que na noite anterior esteve em uma festa onde ingeriu bebidas alcoólicas, e informa que outros dois colegas que consumiram as mesmas bebidas apresentaram sintomas semelhantes. Nega uso de drogas ilícitas.\n\nQual alteração laboratorial se espera encontrar, considerando-se a principal suspeita diagnóstica?",
    "options": [
      "Gap osmolar alto",
      "Alcalose metabólica",
      "Hiponatremia",
      "Hipomagnesemia"
    ],
    "correctAnswer": 0,
    "explanation": "Vários colegas que beberam a mesma bebida tiveram sintomas, com náuseas, sonolência e alteração visual (\"pontos luminosos\", visão turva) horas depois: intoxicação por metanol (bebida adulterada).\n\nO metanol é uma molécula pequena, osmoticamente ativa, e no início eleva a osmolalidade sérica medida acima da calculada: gap osmolar alto. Depois, é metabolizado pela álcool desidrogenase em ácido fórmico, que causa acidose metabólica com ânion gap alto e lesão do nervo óptico.\n\nTratamento: fomepizol ou etanol (bloqueiam a álcool desidrogenase), bicarbonato, ácido fólico e hemodiálise nos casos graves.",
    "commentary": "Alcalose metabólica (B): o esperado é acidose metabólica com ânion gap elevado, pelo ácido fórmico.\n\nHiponatremia (C): não é alteração característica da intoxicação por metanol.\n\nHipomagnesemia (D): pode ocorrer no alcoolismo crônico, mas não é o marcador da intoxicação por metanol.",
    "tip": "Bebida suspeita + vários intoxicados + alteração visual = metanol: gap osmolar e ânion gap altos; fomepizol/etanol e hemodiálise.",
    "reference": "Brasil. Ministério da Saúde. Nota técnica sobre intoxicação por metanol, 2025. Barceloux DG et al. American Academy of Clinical Toxicology practice guidelines on the treatment of methanol poisoning. J Toxicol Clin Toxicol, 2002.",
    "tags": [
      "intoxicação por metanol",
      "gap osmolar",
      "acidose metabólica"
    ]
  },
  {
    "id": "dante2026-7",
    "topography": "14",
    "topic": "Choque",
    "module": "Clínica Médica",
    "text": "Homem de 65 anos, portador de hipertensão arterial sistêmica e tabagismo ativo, foi admitido na unidade de terapia intensiva em pós-operatório imediato de colectomia direita, com confecção de colostomia em alça, por neoplasia de cólon. A equipe anestésica relatou intubação orotraqueal de sequência atrasada e passagem de cateter venoso central em veia jugular interna direita, sem intercorrências. O paciente recebeu profilaxia antibiótica com 2g de cefazolina ao final do procedimento. Houve sangramento maciço intraoperatório, sendo realizada expansão volêmica com 5 litros de ringer lactato e transfusão de 3 concentrados de hemácias, sem necessidade de droga vasoativa. Na admissão, encontrava-se sedado profundamente com propofol, hemodinamicamente estável, intubado e em ventilação mecânica controlada a pressão, com pressão inspiratória de 18cmH₂O, PEEP (pressão positiva expiratória final) de 8cmH₂O, frequência respiratória de 18irpm, tempo inspiratório de 1 segundo e FiO₂ (fração inspirada de oxigênio) de 80%. Após 15 minutos da chegada à UTI, evoluiu com taquicardia (130bpm), hipotensão (60x40mmHg) e extremidades frias. A saturação periférica permaneceu em 95% sob FiO₂ de 80%. O exame pulmonar e cardíaco não mostrou alterações. Foi realizada ultrassonografia à beira do leito, e o débito cardíaco estimado foi de 6L/min (elevado).\n\nQual é a causa do choque circulatório?",
    "options": [
      "Infarto agudo do miocárdio",
      "Tromboembolismo pulmonar",
      "Hipovolemia por sangramento maciço",
      "Anafilaxia por uso de cefazolina"
    ],
    "correctAnswer": 3,
    "explanation": "Hipotensão grave (60/40 mmHg), taquicardia e extremidades frias no pós-operatório imediato, mas com débito cardíaco elevado (6 L/min) e exame cardíaco e pulmonar normais.\n\nDébito alto com hipotensão indica choque distributivo (vasodilatação), e não choque hipovolêmico, cardiogênico ou obstrutivo, que têm débito baixo. Entre as opções, a única causa distributiva é a anafilaxia — nesse caso, pela cefazolina, um dos antibióticos que mais causam anafilaxia perioperatória. O paciente sedado e intubado não consegue relatar sintomas, e sinais cutâneos podem faltar.\n\nTratamento: adrenalina intramuscular ou intravenosa titulada, volume e suspensão do agente.",
    "commentary": "Infarto agudo do miocárdio (A): choque cardiogênico tem débito baixo.\n\nTromboembolismo pulmonar (B): choque obstrutivo, com débito baixo, dilatação do VD e geralmente queda da saturação.\n\nHipovolemia por sangramento (C): o choque hipovolêmico também tem débito baixo; aqui o débito está elevado.",
    "tip": "Choque com débito alto = distributivo (sepse, anafilaxia, neurogênico). Débito baixo = hipovolêmico, cardiogênico ou obstrutivo.",
    "reference": "Vincent JL, De Backer D. Circulatory Shock. N Engl J Med, 2013. Cardona V et al. World Allergy Organization Anaphylaxis Guidance 2020.",
    "tags": [
      "choque distributivo",
      "anafilaxia",
      "débito cardíaco",
      "pós-operatório"
    ],
    "image": "/images/dante2026-7.webp"
  },
  {
    "id": "dante2026-8",
    "topography": "12",
    "topic": "Cuidados paliativos",
    "module": "Clínica Médica",
    "text": "Homem de 85 anos, portador de insuficiência cardíaca avançada e com múltiplas internações no último ano, procura a unidade de emergência com quadro de febre, dispneia, tosse produtiva e edema de membros inferiores há dois dias. Ele está acompanhado da filha, que relata que o paciente é seguido no ambulatório de cuidados paliativos e possui diretivas antecipadas de vontade descritas em prontuário, previamente alinhadas entre equipe médica, paciente e familiares, priorizando medidas de conforto e limitação de intervenções invasivas. Ao exame, encontra-se caquético, com frequência cardíaca de 110bpm, pressão arterial de 100x60mmHg, frequência respiratória de 44irpm e saturação periférica de 85% em ar ambiente. A ausculta pulmonar demonstra murmúrios vesiculares abolidos em bases e estertores até ápices bilateralmente.\n\nQuais condutas devem ser adotadas neste momento?",
    "options": [
      "Administrar doses endovenosas de morfina e furosemida para controle de dispneia, seguidos de alta hospitalar para maior conforto.",
      "Suplementar oxigênio em máscara não reinalante e iniciar antibioticoterapia, furosemida e morfina endovenosos.",
      "Suplementar oxigênio com cateter nasal e iniciar midazolam em bomba de infusão contínua.",
      "Realizar ventilação não invasiva e toracocentese de alívio bilateral. Iniciar furosemida e morfina endovenosos."
    ],
    "correctAnswer": 1,
    "explanation": "Idoso de 85 anos com insuficiência cardíaca avançada, em cuidados paliativos, com diretivas antecipadas priorizando conforto e evitando medidas invasivas. Agora tem provável pneumonia e congestão (febre, tosse produtiva, edema, estertores, SatO₂ 85%, FR 44 irpm).\n\nCuidado paliativo não significa deixar de tratar o que é reversível e causa sofrimento. Oxigênio por máscara para a hipoxemia, antibiótico para a infecção, furosemida para a congestão e morfina para a dispneia aliviam os sintomas e respeitam as diretivas — nenhuma dessas medidas é invasiva.",
    "commentary": "Morfina e furosemida com alta hospitalar (A): o paciente está grave, com hipoxemia importante; a alta neste momento não garante conforto e deixa a infecção sem tratamento.\n\nOxigênio e midazolam contínuo (C): sedação paliativa contínua é para sintomas refratários no fim de vida, após esgotar os tratamentos; aqui ainda há medidas eficazes e não invasivas.\n\nVNI e toracocentese bilateral (D): são intervenções invasivas ou desconfortáveis que as diretivas buscam evitar, e não há derrame descrito que justifique toracocentese.",
    "tip": "Paliativo não é abandono: trate causas reversíveis com medidas não invasivas (O₂, antibiótico, diurético) e alivie a dispneia com morfina.",
    "reference": "Academia Nacional de Cuidados Paliativos. Manual de Cuidados Paliativos ANCP, 2ª ed. Resolução CFM nº 1.995/2012 (diretivas antecipadas de vontade).",
    "tags": [
      "cuidados paliativos",
      "insuficiência cardíaca",
      "diretivas antecipadas de vontade",
      "dispneia"
    ]
  },
  {
    "id": "dante2026-9",
    "topography": "15",
    "topic": "Imunização",
    "module": "Clínica Médica",
    "text": "Homem de 77 anos, residente em instituição de longa permanência há dois anos, é avaliado em visita médica de rotina. Possui antecedentes de demência de Alzheimer em estágio moderado e hipertensão arterial sistêmica bem controlada. A carteira de vacinação pode ser vista a seguir:\n\n• Hepatite B: 3 doses na infância\n• Dupla bacteriana adulto (dT): 1 dose de reforço em 2012\n• Febre amarela: 1 dose em 2018\n• Pneumocócica conjugada 13-valente (VPC13): não recebeu\n• Pneumocócica 23-valente (VPP23): 1 dose em 2018\n• Sarampo, caxumba e rubéola (tríplice viral atenuada): não recebeu\n• Varicela: não recebeu\n• Influenza trivalente: 1 dose em 2021\n• Covid-19: 3 doses em 2021\n\nConsiderando que o ano atual é 2025, quais vacinas devem ser indicadas de acordo com o Programa Nacional de Imunizações do Idoso, além de Influenza e COVID-19?",
    "options": [
      "Pneumocócica 23-valente e tríplice viral atenuada.",
      "Dupla bacteriana adulto, pneumocócica conjugada 13-valente e hepatite B.",
      "Hepatite B, pneumocócica conjugada 13-valente e varicela.",
      "Dupla bacteriana adulto e pneumocócica 23-valente."
    ],
    "correctAnswer": 3,
    "explanation": "Idoso institucionalizado de 77 anos. Pela carteira:\n\n• Dupla adulto (dT): último reforço em 2012 — passaram mais de 10 anos, então precisa de reforço.\n• Pneumocócica 23-valente: uma dose em 2018; para idosos institucionalizados, o PNI indica uma segunda dose 5 anos após a primeira.\n• Hepatite B: esquema completo de 3 doses.\n• Febre amarela: dose única registrada; em idosos, a vacinação depende de avaliação de risco.\n• Tríplice viral e varicela: vacinas atenuadas sem indicação de rotina para idosos no PNI.\n\nPortanto: dupla adulto e pneumocócica 23-valente.",
    "commentary": "Pneumocócica 23 e tríplice viral (A): a tríplice viral não é indicada de rotina para idosos, e falta o reforço da dT.\n\nDupla adulto, VPC13 e hepatite B (B): a hepatite B está completa; a VPC13 não faz parte do calendário do PNI para idosos (disponível nos CRIE para situações especiais).\n\nHepatite B, VPC13 e varicela (C): hepatite B completa, VPC13 fora do calendário de rotina e varicela não indicada para idosos.",
    "tip": "Idoso no PNI: dT a cada 10 anos, influenza anual, covid, VPP23 para institucionalizados (2ª dose após 5 anos) e hepatite B se não vacinado.",
    "reference": "Ministério da Saúde. Calendário Nacional de Vacinação do Idoso, 2025. Manual dos Centros de Referência para Imunobiológicos Especiais, 6ª ed., 2023.",
    "tags": [
      "imunização do idoso",
      "calendário vacinal",
      "pneumocócica 23-valente",
      "dupla adulto"
    ]
  },
  {
    "id": "dante2026-10",
    "topography": "1.5",
    "topic": "Câncer de tireoide",
    "module": "Clínica Médica",
    "text": "Mulher de 48 anos, previamente saudável, foi submetida a tireoidectomia total seguida de ablação com iodo radioativo, para tratamento de carcinoma papilífero da tireoide de alto risco, com invasão extratireoidiana mínima e disseminação linfonodal (pT3bN1aM0). Retorna para acompanhamento seis meses após o tratamento, estando sem evidência estrutural de doença, com tireoglobulina indetectável e anticorpos antitireoglobulina detectáveis.\n\nQual é a conduta adequada neste momento?",
    "options": [
      "Reduzir a dose de levotiroxina para manter o TSH entre 0,5 e 2mUI/L, pois a paciente apresenta boa resposta inicial.",
      "Realizar nova ablação com iodo radioativo, para garantir erradicação completa de tecido remanescente.",
      "Prescrever levotiroxina com o objetivo de manter TSH < 0,1mUI/L, visando reduzir o risco de recidiva.",
      "Solicitar uma tomografia por emissão de pósitrons (PET/TC) para rastreio de metástases à distância da neoplasia."
    ],
    "correctAnswer": 2,
    "explanation": "Carcinoma papilífero de alto risco (pT3b com invasão extratireoidiana e N1a), tratado com tireoidectomia total e radioiodo. Seis meses depois: sem doença estrutural, tireoglobulina indetectável, mas anticorpo antitireoglobulina detectável.\n\nO anticorpo pode falsear a tireoglobulina para baixo, então a resposta não pode ser classificada como excelente: é resposta indeterminada.\n\nO gabarito considera que, por ser de alto risco e sem resposta excelente, a paciente deve manter supressão do TSH abaixo de 0,1 mUI/L, para reduzir o estímulo ao crescimento de eventual tecido tumoral residual. O seguimento é feito com a curva do anticorpo (queda é bom sinal) e ultrassonografia cervical.",
    "commentary": "TSH entre 0,5 e 2 mUI/L (A): alvo para baixo risco com resposta excelente; esta paciente é de alto risco e com anticorpo positivo.\n\nNova ablação com radioiodo (B): não há doença estrutural nem tireoglobulina elevada que justifique nova dose; o anticorpo isolado não indica radioiodo.\n\nPET/TC (D): indicado quando a tireoglobulina está elevada e os exames convencionais não localizam a doença (tumor iodo-refratário); não é o caso.\n\nObservação: a diretriz da ATA (2015) sugere TSH de 0,1 a 0,5 mUI/L na resposta indeterminada, reservando a supressão < 0,1 para alto risco com resposta incompleta. Muitos serviços, porém, mantêm supressão completa nos primeiros anos após tumor de alto risco, que é a linha do gabarito.",
    "tip": "Câncer diferenciado de tireoide: alto risco no início → TSH < 0,1. Resposta excelente → afrouxar o alvo. Anti-Tg positivo impede chamar de resposta excelente.",
    "reference": "Haugen BR et al. 2015 American Thyroid Association Management Guidelines for Adult Patients with Thyroid Nodules and Differentiated Thyroid Cancer. Thyroid, 2016.",
    "tags": [
      "câncer de tireoide",
      "carcinoma papilífero",
      "supressão de TSH",
      "anticorpo antitireoglobulina"
    ]
  },
  {
    "id": "dante2026-11",
    "topography": "8",
    "topic": "Diabetes mellitus tipo 1 e 2",
    "module": "Clínica Médica",
    "text": "Homem de 58 anos, com obesidade e diabetes mellitus tipo 2 há 10 anos, em uso de metformina 1000mg duas vezes ao dia, comparece ao ambulatório para avaliação pré-operatória de cirurgia eletiva de correção de hérnia inguinal. Encontra-se assintomático e com exame físico normal, apresentando glicemia de jejum de 314mg/dL (VR: 70 - 99 mg/dL) e hemoglobina glicada de 11,2% (VR: 4,0 - 5,6%).\n\nQual é a conduta adequada neste momento?",
    "options": [
      "Iniciar terapia baseada em insulina e adiar a cirurgia até controle glicêmico adequado.",
      "Manter apenas metformina, mantendo a data da cirurgia conforme programado.",
      "Iniciar glibenclamida e análogo de GLP-1, mantendo a data da cirurgia conforme programado.",
      "Associar dapagliflozina e gliclazida, adiando a cirurgia até controle glicêmico adequado."
    ],
    "correctAnswer": 0,
    "explanation": "Diabético tipo 2 com glicemia de jejum de 314 mg/dL e HbA1c de 11,2% em monoterapia com metformina, antes de uma cirurgia eletiva (hérnia inguinal).\n\nDuas decisões:\n\n• O controle está muito ruim: HbA1c > 10% ou glicemia > 300 mg/dL são indicação de iniciar insulina (pode ser associada à metformina).\n• Hiperglicemia descontrolada aumenta infecção de sítio cirúrgico, complicações e mortalidade. Cirurgia eletiva com HbA1c muito alta (> 8,5–9%) deve ser adiada até controle adequado. Uma hérnia não complicada pode esperar.",
    "commentary": "Manter só metformina e operar (B): ignora o descontrole grave e expõe o paciente a complicações perioperatórias.\n\nGlibenclamida e GLP-1, mantendo a cirurgia (C): não corrige rápido uma HbA1c de 11%; a glibenclamida tem risco de hipoglicemia no jejum, e o agonista de GLP-1 retarda o esvaziamento gástrico (risco de aspiração na anestesia).\n\nDapagliflozina e gliclazida, adiando a cirurgia (D): adiar está certo, mas com HbA1c > 10% e glicemia > 300 mg/dL a insulina é a escolha; o iSGLT2 ainda precisa ser suspenso antes da cirurgia pelo risco de cetoacidose euglicêmica.",
    "tip": "HbA1c > 10% ou glicemia > 300: insulina. Cirurgia eletiva com diabetes descontrolado: adiar até controlar.",
    "reference": "Sociedade Brasileira de Diabetes. Diretriz 2024 – Tratamento farmacológico do DM2 e manejo perioperatório. American Diabetes Association. Standards of Care in Diabetes, 2025.",
    "tags": [
      "diabetes mellitus tipo 2",
      "insulinoterapia",
      "avaliação pré-operatória"
    ]
  },
  {
    "id": "dante2026-12",
    "topography": "3.2",
    "topic": "Hipertensão portal",
    "module": "Clínica Médica",
    "text": "Homem de 58 anos, com cirrose hepática secundária a hepatite C já tratada e com RNA viral indetectável há dois anos, comparece ao ambulatorial para consulta de seguimento. Está assintomático, sem história prévia de sangramento digestivo ou ascite. Ao exame, apresenta esplenomegalia. A elastografia transitória evidenciou rigidez hepática de 21kPa, e os exames laboratoriais mostraram plaquetas de 90.000/mm³ (VR: 150.000 - 450.000/mm³).\n\nQual é a conduta adequada neste momento?",
    "options": [
      "Repetir elastografia hepática em seis meses para confirmar rigidez hepática.",
      "Solicitar endoscopia digestiva alta para avaliação de varizes esofágicas.",
      "Investigar causas hematológicas de trombocitopenia e esplenomegalia.",
      "Iniciar carvedilol em dose baixa e titular conforme tolerância e dose alvo."
    ],
    "correctAnswer": 3,
    "explanation": "Cirrose compensada (sem sangramento ou ascite), elastografia de 21 kPa, plaquetas de 90.000/mm³ e esplenomegalia: hipertensão portal clinicamente significativa.\n\nPelo consenso de Baveno VII, rigidez > 20–25 kPa com plaquetas < 150.000 caracteriza hipertensão portal clinicamente significativa. Nesses pacientes, o betabloqueador não seletivo, de preferência carvedilol (6,25 mg/dia, titulado até 12,5 mg/dia), previne a descompensação (ascite, sangramento), e não apenas o primeiro sangramento.\n\nQuem pode usar betabloqueador não precisa de endoscopia para rastrear varizes, pois a conduta não mudaria.",
    "commentary": "Repetir elastografia em 6 meses (A): o diagnóstico de hipertensão portal significativa já está feito; esperar atrasa o tratamento.\n\nEndoscopia para avaliar varizes (B): no Baveno VII, a endoscopia fica para quem não pode usar betabloqueador; quem vai usá-lo inicia direto.\n\nInvestigar causa hematológica (C): plaquetopenia e esplenomegalia num cirrótico com rigidez alta são explicadas pela hipertensão portal (hiperesplenismo).",
    "tip": "Baveno VII: elastografia > 25 kPa (ou > 20 com plaquetas < 150 mil) = hipertensão portal significativa → carvedilol, sem endoscopia de rastreio.",
    "reference": "de Franchis R et al. Baveno VII – Renewing consensus in portal hypertension. J Hepatol, 2022.",
    "tags": [
      "cirrose hepática",
      "hipertensão portal",
      "carvedilol",
      "consenso de Baveno VII"
    ]
  },
  {
    "id": "dante2026-13",
    "topography": "2.2",
    "topic": "Hipertensão arterial sistêmica",
    "module": "Clínica Médica",
    "text": "Mulher de 58 anos, com diabetes mellitus tipo 2 há 8 anos, em uso de metformina, apresenta pressões arteriais de consultório persistentemente elevadas, com média de 162x98mmHg em quatro consultas consecutivas ao longo de quatro semanas. A monitorização residencial da pressão arterial (MRPA) confirmou média de 158x96mmHg. Exames laboratoriais demonstraram creatinina de 1,6mg/dL (VR: 0,7 - 1,3mg/dL), com TFG CKD-EPI de 35mL/min/1,73 m², potássio de 4,3mEq/L (VR: 3,5 - 5,1mEq/L), relação albumina/creatinina de 180mg/g (VR < 30mg/g) e hemoglobina glicada de 7,8% (VR: 4,0 - 5,6%).\n\nQual deve ser a estratégia inicial para o tratamento da hipertensão dessa paciente?",
    "options": [
      "Tratamento em monoterapia com hidroclorotiazida em dose máxima.",
      "Associação de enalapril com anlodipina em doses baixas.",
      "Associação de enalapril, anlodipino e hidroclorotiazida em doses baixas.",
      "Associação de anlodipino e hidroclorotiazida em doses baixas."
    ],
    "correctAnswer": 1,
    "explanation": "Hipertensão estágio 2 (média de 162/98 mmHg, confirmada pela MRPA) em diabética com doença renal crônica (TFG 35 mL/min/1,73 m²) e albuminúria moderada (180 mg/g).\n\nDois pontos guiam a escolha:\n\n• Estágio 2 ou alto risco cardiovascular: começar com combinação de dois fármacos.\n• Diabetes com albuminúria: o bloqueio do sistema renina-angiotensina (IECA ou BRA) é obrigatório, pela proteção renal.\n\nA combinação preferencial é IECA + bloqueador de canal de cálcio (enalapril + anlodipino), que no estudo ACCOMPLISH foi superior a IECA + tiazídico em desfechos cardiovasculares e renais.",
    "commentary": "Monoterapia com hidroclorotiazida (A): estágio 2 pede combinação, e falta o IECA/BRA, essencial na albuminúria. Com TFG de 35 mL/min o tiazídico perde eficácia.\n\nTrês fármacos de início (C): a terapia tripla é reservada para quem não atinge a meta com dois fármacos.\n\nAnlodipino + hidroclorotiazida (D): deixa de fora o bloqueio do sistema renina-angiotensina, indispensável na doença renal do diabetes.",
    "tip": "HAS estágio 2 ou alto risco: começar com dupla. Diabetes ou DRC com albuminúria: IECA/BRA sempre, de preferência + BCC.",
    "reference": "Sociedade Brasileira de Cardiologia. Diretrizes Brasileiras de Hipertensão Arterial – 2020. KDIGO 2021 Clinical Practice Guideline for the Management of Blood Pressure in CKD.",
    "tags": [
      "hipertensão arterial",
      "doença renal do diabetes",
      "IECA",
      "terapia combinada"
    ]
  },
  {
    "id": "dante2026-14",
    "topography": "2.1",
    "topic": "Derrame pleural",
    "module": "Clínica Médica",
    "text": "Homem de 67 anos, ex-tabagista (30 maços-ano) e portador de insuficiência cardíaca com fração de ejeção reduzida de etiologia isquêmica, diabetes mellitus tipo 2 e fibrilação atrial crônica, encontra-se internado há cinco dias por descompensação da insuficiência cardíaca em perfil B. Está em uso de furosemida endovenosa em bomba de infusão contínua. Apesar do balanço hídrico negativo acumulado de 4 litros, mantém dispneia significativa com necessidade de oxigênio suplementar. No quinto dia de internação apresentou pico febril de 37,8°C, com aumento discreto da leucocitose (de 10.500 para 12.800/mm³, sem desvio). Ao exame físico, está em bom estado geral, com frequência cardíaca de 95bpm, pressão arterial de 110x70mmHg, frequência respiratória de 24irpm e saturação periférica de oxigênio de 92% com cateter nasal a 3L/min. Foi vista turgência jugular, com ritmo irregular à custa de B3 na ausculta cardíaca. Exame pulmonar evidenciou abolição do murmúrio vesicular em terço inferior do hemitórax direito com crepitos bibasais. A ultrassonografia à beira leito (POCUS) evidencia coleção pleural direita anecoica e livre, sem septações ou debris. Os exames laboratoriais demonstram procalcitonina < 0,1ng/mL (VR: < 0,5ng/mL), urina tipo 1 normal e hemoculturas parciais negativas. Foi feita uma toracocentese diagnóstica cuja análise do líquido pleural evidenciou:\n\n• Aspecto: líquido seroso amarelo citrino\n• Proteína pleural: 2,1g/dL (proteína sérica: 6,5g/dL)\n• LDH pleural: 85U/L (LDH sérica: 180U/L; LSN sérico: 250U/L)\n• Glicose pleural: 98mg/dL\n• pH: 7,38\n• Leucócitos: 320/mm³ (70% linfócitos, 25% neutrófilos)\n• Albumina pleural: 1,2g/dL (albumina sérica: 3,4g/dL)\n\nQual é o diagnóstico do derrame pleural e a conduta mais apropriada?",
    "options": [
      "Derrame exsudativo parapneumônico complicado; iniciar antibioticoterapia e realizar drenagem torácica devido ao alto risco de evolução para sepse.",
      "Derrame exsudativo parapneumônico não complicado; iniciar antibioticoterapia empírica para pneumonia associada a hospitalização.",
      "Derrame indeterminado, sendo potencialmente um pseudoexsudato devido à diureticoterapia agressiva; aguardar culturas e gradiente de albumina para definir conduta.",
      "Derrame transudativo por insuficiência cardíaca; otimizar a terapia diurética e investigar outras causas para a febre."
    ],
    "correctAnswer": 3,
    "explanation": "Aplicando os critérios de Light (exsudato se qualquer um for positivo):\n\n• Proteína pleural / sérica = 2,1 / 6,5 = 0,32 (< 0,5).\n• LDH pleural / sérica = 85 / 180 = 0,47 (< 0,6).\n• LDH pleural < 2/3 do limite superior sérico (2/3 de 250 = 167).\n\nNenhum critério positivo: transudato. O aspecto citrino, a glicose normal, o pH de 7,38 e a celularidade baixa reforçam. Na insuficiência cardíaca descompensada, o derrame é transudativo, frequentemente maior à direita.\n\nA febre baixa, com procalcitonina normal, urina normal e hemoculturas negativas, deve ser investigada à parte. A conduta para o derrame é otimizar a terapia da insuficiência cardíaca.",
    "commentary": "Parapneumônico complicado com drenagem (A): pH 7,38, glicose normal, LDH baixo e poucas células excluem derrame complicado (que tem pH < 7,2, glicose < 60, LDH > 1.000).\n\nParapneumônico não complicado (B): o derrame não é exsudato pelos critérios de Light, e a procalcitonina baixa vai contra infecção bacteriana.\n\nPseudoexsudato por diurético (C): o diurético pode transformar um transudato em falso exsudato, mas aqui os critérios de Light já dão transudato; o gradiente de albumina (soro − pleura = 2,2 g/dL, acima de 1,2) só confirma.",
    "tip": "Light: proteína P/S > 0,5, LDH P/S > 0,6 ou LDH > 2/3 do limite superior = exsudato. IC com diurético dando 'exsudato'? Gradiente de albumina > 1,2 = transudato.",
    "reference": "Light RW. Pleural effusion. N Engl J Med, 2002. Sociedade Brasileira de Pneumologia e Tisiologia. Consenso de derrame pleural.",
    "tags": [
      "derrame pleural",
      "critérios de Light",
      "insuficiência cardíaca",
      "transudato"
    ]
  },
  {
    "id": "dante2026-15",
    "topography": "6.1",
    "topic": "Vasculites",
    "module": "Clínica Médica",
    "text": "Homem de 48 anos é admitido na enfermaria para investigação de dispneia progressiva há 4 semanas, tosse seca e episódios de epistaxe. Relata história de sinusite crônica refratária a múltiplos ciclos de antibióticos e artralgias migratórias nos últimos 6 meses. Tem história de hipertensão arterial, em uso regular de losartana. Nega tabagismo ou etilismo. Ao exame, apresenta pressão arterial de 150x95mmHg, frequência cardíaca de 98bpm, frequência respiratória de 22irpm, saturação periférica de oxigênio de 92% em ar ambiente e temperatura de 37,4°C. A inspeção da boca e nariz evidencia perfuração de palato com crostas hemáticas em septo nasal. A ausculta pulmonar revelou crepitos bibasais. Os exames laboratoriais evidenciaram: hemoglobina 10,5g/dL (VR: 13,5 - 17,5g/dL); leucócitos 11.500/mm³ (VR: 3.650 - 8.120/mm³); creatinina 1,9mg/dL (basal: 0,9mg/dL); PCR 85mg/L (VR: < 5mg/L). Urina tipo 1 com proteinúria ++/4+ (VR: negativa) e hematúria ++/4+ (VR: negativa). A alteração detectada na tomografia de tórax pode ser vista a seguir.\n\nConsiderando a principal hipótese diagnóstica, quais resultados de exames sorológicos seriam esperados neste paciente?",
    "options": [
      "Anticorpo anticitoplasma de neutrófilos (ANCA) padrão perinuclear (p-ANCA) e anti-mieloperoxidase (anti-MPO) positivos.",
      "Fator antinuclear (FAN) padrão nuclear homogêneo e anti-DNA de dupla hélice (anti-dsDNA) positivos.",
      "Anticorpo anticitoplasma de neutrófilos padrão c-ANCA e anti-proteinase 3 (anti-PR3) positivos.",
      "Crioglobulinas séricas positivas e dosagem do complemento (C3/C4) com valores abaixo do limite inferior da normalidade."
    ],
    "correctAnswer": 2,
    "explanation": "Sinusite crônica refratária, epistaxe, perfuração do palato (vias aéreas superiores), dispneia com nódulos pulmonares escavados na tomografia (vias aéreas inferiores) e glomerulonefrite (hematúria, proteinúria, piora da creatinina): a tríade da granulomatose com poliangeíte (antiga granulomatose de Wegener).\n\nÉ uma vasculite de pequenos vasos associada ao ANCA. O padrão típico é c-ANCA (citoplasmático) com especificidade anti-proteinase 3 (anti-PR3), positivo em cerca de 90% das formas generalizadas.\n\nCom acometimento renal e pulmonar, o tratamento de indução é corticoide em alta dose + rituximabe ou ciclofosfamida.",
    "commentary": "p-ANCA e anti-MPO (A): padrão da poliangeíte microscópica e da granulomatose eosinofílica com poliangeíte; nelas não há lesão destrutiva de vias aéreas superiores nem granulomas escavados.\n\nFAN e anti-DNA (B): marcadores do lúpus, que pode causar nefrite, mas não perfuração de palato e nódulos cavitados.\n\nCrioglobulinas e complemento baixo (D): crioglobulinemia (geralmente ligada à hepatite C) causa púrpura, artralgia e glomerulonefrite membranoproliferativa, sem acometimento destrutivo de vias aéreas.",
    "tip": "Nariz/seios + pulmão (nódulos que escavam) + rim = granulomatose com poliangeíte: c-ANCA/anti-PR3.",
    "reference": "Hellmich B et al. EULAR recommendations for the management of ANCA-associated vasculitis: 2022 update. Ann Rheum Dis, 2024.",
    "tags": [
      "granulomatose com poliangeíte",
      "vasculite ANCA",
      "c-ANCA",
      "síndrome pulmão-rim"
    ],
    "image": "/images/dante2026-15.webp"
  },
  {
    "id": "dante2026-16",
    "topography": "2.2",
    "topic": "Fibrilação atrial",
    "module": "Clínica Médica",
    "text": "Mulher de 72 anos, com história de hipertensão arterial e diabetes mellitus tipo 2, procura a unidade de emergência com quadro de palpitações iniciadas há 48 horas. Nega dor torácica, síncope ou dispneia. Ao exame, apresenta pressão arterial de 132x82mmHg, frequência cardíaca irregular de 84bpm e saturação periférica de oxigênio de 98% em ar ambiente. Não há sopros à ausculta cardíaca. O eletrocardiograma detectou ritmo de fibrilação atrial e o ecocardiograma não evidenciou alterações cardíacas estruturais. Nos exames laboratoriais, observa-se taxa de filtração glomerular estimada de 62mL/min/1,73m².\n\nQual é a conduta recomendada neste momento?",
    "options": [
      "Iniciar rivaroxabana 20mg/dia e manter seguimento ambulatorial.",
      "Não iniciar anticoagulação, pois o escore CHA₂DS₂-VASc indica baixo risco.",
      "Iniciar enoxaparina e varfarina, suspendendo a heparina quando RNI 2,0-3,0.",
      "Iniciar varfarina com alvo de RNI 2,0-3,0 e seguimento ambulatorial."
    ],
    "correctAnswer": 0,
    "explanation": "Fibrilação atrial em paciente estável, com frequência controlada (84 bpm), sem cardiopatia estrutural.\n\nCHA₂DS₂-VASc:\n\n• Sexo feminino: 1.\n• Idade 65–74 anos: 1.\n• Hipertensão: 1.\n• Diabetes: 1.\n\nTotal de 4 pontos: anticoagulação indicada (≥ 2 em mulheres). Sem estenose mitral moderada a grave ou prótese mecânica, preferem-se os anticoagulantes orais diretos. Com função renal adequada (TFG 62), a dose de rivaroxabana é 20 mg/dia (com alimento). Paciente estável e com a frequência controlada pode seguir em ambulatório.",
    "commentary": "Não anticoagular (B): o escore é 4, alto risco de AVC.\n\nEnoxaparina + varfarina (C): a ponte com heparina não é necessária para iniciar anticoagulação na FA estável; e os diretos são preferidos à varfarina.\n\nVarfarina (D): é opção válida, mas os anticoagulantes diretos têm menos sangramento intracraniano e não precisam de controle de RNI; a varfarina fica para valvopatia mitral ou prótese mecânica.",
    "tip": "FA: CHA₂DS₂-VASc ≥ 2 (homem) ou ≥ 3 (mulher) → anticoagular; prefira DOAC, exceto estenose mitral importante ou prótese mecânica.",
    "reference": "Van Gelder IC et al. 2024 ESC Guidelines for the management of atrial fibrillation. Sociedade Brasileira de Cardiologia. Diretrizes Brasileiras de Fibrilação Atrial, 2016.",
    "tags": [
      "fibrilação atrial",
      "CHA₂DS₂-VASc",
      "anticoagulação",
      "rivaroxabana"
    ]
  },
  {
    "id": "dante2026-17",
    "topography": "16",
    "topic": "Apendicite aguda",
    "module": "Cirurgia",
    "text": "Mulher de 25 anos de idade, gestante com idade gestacional de 13 semanas, procurou o pronto atendimento por dor abdominal há dois dias associada a disúria. Ao exame físico, encontra-se em bom estado geral com PA 100x60mmHg, FC 90bpm e temperatura axilar de 37,1°C. O exame abdominal evidencia abdome gravídico, flácido, doloroso à palpação em flanco direito e fossa ilíaca direita, sem sinais de irritação peritoneal. Os exames laboratoriais revelaram leucócitos em 14.200/mm³, PCR 25mg/dL, exame de urina com 45.000 leucócitos/mm³ e nitrito negativo. A avaliação obstétrica não demonstrou sinais de sofrimento fetal. Realizou a ultrassonografia ilustrada a seguir.\n\nQual é o tratamento indicado para essa paciente?",
    "options": [
      "Antibioticoterapia via oral e reavaliação ambulatorial em 48 horas.",
      "Antibioticoterapia via endovenosa exclusiva.",
      "Abordagem cirúrgica de urgência por via abdominal.",
      "Sintomáticos e reavaliação ambulatorial em 48 horas."
    ],
    "correctAnswer": 2,
    "explanation": "Gestante de 13 semanas com dor em flanco e fossa ilíaca direita, leucocitose e PCR elevada; a urina com leucocitúria e nitrito negativo pode confundir com infecção urinária, mas a ultrassonografia mostra imagem tubular não compressível e espessada na fossa ilíaca direita: apendicite aguda.\n\nApendicite é a causa mais comum de abdome agudo não obstétrico na gestação. O tratamento é cirúrgico (apendicectomia, de preferência laparoscópica, segura em qualquer trimestre). Atrasar a cirurgia aumenta o risco de perfuração, que eleva muito a perda fetal.",
    "commentary": "Antibiótico oral e reavaliação (A): trata cistite ou pielonefrite leve, não apendicite; atrasar a cirurgia na gestante aumenta perfuração e perda fetal.\n\nAntibiótico endovenoso exclusivo (B): o tratamento não operatório da apendicite tem mais falha e recidiva, e não é recomendado na gestação.\n\nSintomáticos e reavaliação (D): deixa uma apendicite sem tratamento.",
    "tip": "Gestante com dor em FID e apendicite na imagem: apendicectomia (laparoscopia é segura). Leucocitúria estéril pode ser só inflamação vizinha.",
    "reference": "SAGES Guidelines for the use of laparoscopy during pregnancy, 2017. Di Saverio S et al. Jerusalem guidelines for diagnosis and treatment of acute appendicitis (WSES 2020).",
    "tags": [
      "apendicite aguda",
      "abdome agudo na gestação",
      "apendicectomia"
    ],
    "image": "/images/dante2026-17.webp"
  },
  {
    "id": "dante2026-18",
    "topography": "3.3",
    "topic": "Câncer de vesícula",
    "module": "Cirurgia",
    "text": "Mulher, de 50 anos de idade, foi encaminhada ao ambulatório de Cirurgia Geral após alteração em ultrassonografia de abdome solicitada em consulta de rotina para programação de reposição hormonal. Nega comorbidades. Encontra-se assintomática e sem alterações no exame físico. A ultrassonografia de abdome revelou formação sólida de 0,4cm no fundo da vesícula biliar, fixa, sem formação de sombra acústica posterior e sem vascularização ao Doppler. Não foram identificadas outras alterações no exame solicitado.\n\nQual é a conduta indicada para essa paciente neste momento?",
    "options": [
      "Colangiopancreatografia retrógrada endoscópica (CPRE).",
      "Colecistectomia videolaparoscópica.",
      "Biópsia guiada por ultrassonografia endoscópica.",
      "Repetição do exame ultrassonográfico em seis meses."
    ],
    "correctAnswer": 3,
    "explanation": "Pólipo de vesícula biliar de 4 mm, fixo, sem sombra acústica (não é cálculo) e sem vascularização, em mulher assintomática de 50 anos sem fatores de risco.\n\nO risco de malignidade se relaciona sobretudo ao tamanho:\n\n• ≥ 10 mm: colecistectomia.\n• 6 a 9 mm: colecistectomia se houver fatores de risco (idade > 50 anos, colangite esclerosante, etnia indiana, espessamento focal da parede); senão, seguimento.\n• ≤ 5 mm: risco muito baixo.\n\nO gabarito adota o seguimento com nova ultrassonografia em 6 meses.",
    "commentary": "CPRE (A): avalia e trata a via biliar principal; não tem papel no pólipo de vesícula.\n\nColecistectomia (B): indicada para pólipos ≥ 10 mm, pólipos sintomáticos, com crescimento ou de 6–9 mm com fatores de risco.\n\nBiópsia por ecoendoscopia (C): não se faz biópsia de pólipo de vesícula pelo risco de perfuração e disseminação; a decisão é baseada no tamanho e na evolução.\n\nObservação: as diretrizes europeias mais recentes (ESGAR/EAES 2022) consideram que pólipos ≤ 5 mm sem fatores de risco nem precisam de seguimento. A banca seguiu a recomendação mais conservadora.",
    "tip": "Pólipo de vesícula: ≥ 10 mm → colecistectomia; 6–9 mm → depende de risco; ≤ 5 mm → seguimento mínimo ou nenhum.",
    "reference": "Foley KG et al. Management and follow-up of gallbladder polyps: updated joint guidelines between ESGAR, EAES, EFISDS and ESGE. Eur Radiol, 2022.",
    "tags": [
      "pólipo de vesícula biliar",
      "ultrassonografia",
      "vesícula biliar"
    ]
  },
  {
    "id": "dante2026-19",
    "topography": "3.1",
    "topic": "Diverticulose/diverticulite",
    "module": "Cirurgia",
    "text": "Mulher, de 55 anos de idade, procurou o pronto atendimento por dor em flanco esquerdo e fossa ilíaca esquerda há uma semana. Nega náuseas, vômitos ou febre. Refere última evacuação há dois dias, sem produtos patológicos. Ao exame físico, encontra-se em bom estado geral, afebril, com abdome globoso, flácido, doloroso à palpação de flanco esquerdo e fossa ilíaca esquerda, com presença de plastrão nessa região, sem sinais de irritação peritoneal. Os exames laboratoriais revelaram leucócitos em 17.300/mm³ e PCR de 58mg/dL. Realizou a tomografia de abdome ilustrada a seguir.\n\nQual é o tratamento mais indicado para essa paciente neste momento?",
    "options": [
      "Antibioticoterapia endovenosa e drenagem percutânea da coleção.",
      "Antibioticoterapia via oral e retorno em 48 horas para reavaliação.",
      "Antibioticoterapia endovenosa e retossigmoidectomia a Hartmann.",
      "Analgesia via oral e retorno em 48 horas para reavaliação."
    ],
    "correctAnswer": 0,
    "explanation": "Mulher de 55 anos com dor em fossa ilíaca esquerda há uma semana, plastrão palpável, leucocitose e PCR elevada, sem peritonite. A tomografia mostra diverticulite do sigmoide com coleção (abscesso pericólico): diverticulite complicada, Hinchey Ib/II.\n\nAbscessos maiores que 3–4 cm são tratados com antibiótico endovenoso e drenagem percutânea guiada por imagem; os menores, só com antibiótico. A cirurgia de urgência fica para peritonite generalizada ou falha do tratamento. Depois, colonoscopia para excluir neoplasia.",
    "commentary": "Antibiótico oral e reavaliação (B): conduta para diverticulite não complicada; com abscesso, o tratamento é hospitalar.\n\nAntibiótico e cirurgia de Hartmann (C): indicada na peritonite purulenta ou fecal (Hinchey III–IV) ou na falha da drenagem; não é a primeira conduta para abscesso localizado.\n\nAnalgesia e retorno (D): deixa sem tratamento uma diverticulite complicada.",
    "tip": "Diverticulite com abscesso > 3–4 cm: antibiótico EV + drenagem percutânea. Peritonite: cirurgia.",
    "reference": "Hall J et al. ASCRS Clinical Practice Guidelines for the Management of Left-sided Colonic Diverticulitis, 2020. Sartelli M et al. WSES Guidelines for acute left sided colonic diverticulitis, 2020.",
    "tags": [
      "diverticulite aguda",
      "abscesso",
      "drenagem percutânea",
      "classificação de Hinchey"
    ],
    "image": "/images/dante2026-19.webp"
  },
  {
    "id": "dante2026-20",
    "topography": "3.4",
    "topic": "Pancreatite aguda",
    "module": "Cirurgia",
    "text": "Homem, de 40 anos de idade, encontra-se em terceiro dia de internação hospitalar por pancreatite aguda leve de etiologia biliar. Está com bom controle álgico, sem náuseas ou vômitos. O exame físico abdominal apresenta-se com ruídos hidroaéreos presentes e propulsivos. Após tentativa de reintrodução da dieta oral, o paciente evoluiu com náuseas e vômitos após se alimentar. Os exames laboratoriais não demonstraram alterações significativas e a tomografia computadorizada de abdome revelou presença de necrose em corpo do pâncreas (20%) e esteatonecrose, sem demais complicações.\n\nQual é a conduta indicada neste momento?",
    "options": [
      "Realização de necrosectomia cirúrgica.",
      "Passagem de acesso venoso central para nutrição parenteral.",
      "Passagem de sonda nasoenteral para nutrição enteral.",
      "Realização de colecistectomia de urgência."
    ],
    "correctAnswer": 2,
    "explanation": "Pancreatite aguda biliar que evoluiu com necrose pancreática (20%) e intolerância à dieta oral, sem infecção ou outras complicações.\n\nQuando a via oral não é tolerada, a nutrição enteral é preferida à parenteral: mantém a barreira intestinal, reduz a translocação bacteriana e diminui infecção da necrose, falência orgânica e mortalidade. A sonda pode ser nasoenteral (pós-pilórica) ou nasogástrica, que tem eficácia semelhante.",
    "commentary": "Necrosectomia cirúrgica (A): a necrose estéril não é operada; mesmo a infectada é tratada de forma escalonada (antibiótico, drenagem e necrosectomia tardia, de preferência após 4 semanas).\n\nNutrição parenteral (B): só se a enteral não for possível ou não atingir as metas; tem mais infecção e complicações.\n\nColecistectomia de urgência (D): na pancreatite com necrose, a colecistectomia é adiada até a resolução das coleções (cerca de 6 semanas); não há colecistite que justifique urgência.",
    "tip": "Pancreatite sem tolerar dieta oral: nutrição enteral (sonda) é melhor que parenteral. Necrose estéril não se opera.",
    "reference": "Tenner S et al. American College of Gastroenterology Guideline: Management of Acute Pancreatitis, 2024. Working Group IAP/APA. Evidence-based guidelines for the management of acute pancreatitis, 2013.",
    "tags": [
      "pancreatite aguda",
      "necrose pancreática",
      "nutrição enteral"
    ]
  },
  {
    "id": "dante2026-21",
    "topography": "16",
    "topic": "Hérnias",
    "module": "Cirurgia",
    "text": "Mulher, de 62 anos de idade, comparece em consulta ambulatorial após perceber abaulamento em região inguinocrural direita aos esforços, sem outras alterações associadas. Nega alterações urinárias ou intestinais. Tem antecedente de hipertensão arterial sistêmica e diabetes mellitus tipo 2, com bom controle medicamentoso. No momento, encontra-se assintomática e em bom estado geral. Ao exame físico, observa-se abaulamento abaixo do ligamento inguinal direito durante manobra de Valsalva, com redução espontânea ao repouso. Não foram identificadas outras alterações ao exame físico.\n\nQual é o diagnóstico mais provável e a conduta recomendada para essa paciente?",
    "options": [
      "Hérnia femoral. Seguimento clínico, com indicação cirúrgica caso se iniciem sintomas decorrentes da afecção.",
      "Hérnia femoral. Indicação de cirurgia eletiva mesmo na ausência de sintomas.",
      "Hérnia inguinal. Indicação de cirurgia eletiva mesmo na ausência de sintomas.",
      "Hérnia inguinal. Seguimento clínico, com indicação cirúrgica somente em situações de urgência."
    ],
    "correctAnswer": 1,
    "explanation": "Abaulamento que aparece aos esforços abaixo do ligamento inguinal, em mulher de 62 anos: hérnia femoral (crural). A hérnia inguinal aparece acima do ligamento inguinal.\n\nA hérnia femoral sai por um anel estreito e rígido (canal femoral), e por isso tem o maior risco de encarceramento e estrangulamento entre as hérnias da parede abdominal (até 40% se apresentam como urgência). Por isso, deve ser operada de forma eletiva mesmo sem sintomas, ao contrário da hérnia inguinal pouco sintomática, em que a observação é uma opção.",
    "commentary": "Femoral com seguimento clínico (A): o diagnóstico está certo, mas esperar sintomas expõe ao estrangulamento; a hérnia femoral sempre tem indicação cirúrgica.\n\nInguinal com cirurgia eletiva (C): a hérnia está abaixo do ligamento inguinal, portanto é femoral.\n\nInguinal com seguimento (D): diagnóstico errado, e operar só na urgência aumenta a morbidade.",
    "tip": "Abaixo do ligamento inguinal, mulher idosa = hérnia femoral: operar sempre (alto risco de estrangular).",
    "reference": "HerniaSurge Group. International guidelines for groin hernia management. Hernia, 2018.",
    "tags": [
      "hérnia femoral",
      "hérnia inguinal",
      "parede abdominal"
    ]
  },
  {
    "id": "dante2026-22",
    "topography": "3.3",
    "topic": "Colangite aguda",
    "module": "Cirurgia",
    "text": "Mulher, de 44 anos de idade, procura o pronto atendimento com dor em hipocôndrio direito associada a náuseas e vômitos há duas semanas. Relata episódios febris nos últimos três dias. Ao exame físico, encontra-se em regular estado geral, confusa, ictérica 3+/4+, temperatura axilar de 39,3ºC, PA 86x58mmHg, FC 125bpm. O abdome está globoso, flácido, doloroso à palpação de hipocôndrio direito, sem sinais de irritação peritoneal. Os exames laboratoriais revelaram leucócitos em 21.000/mm³ e bilirrubinas totais 5,5mg/dL (direta 4,8mg/dL). Realizou ultrassonografia de abdome, com identificação de múltiplos cálculos em vesícula biliar e presença de dilatação das vias biliares intra e extra-hepáticas, sem evidência de fator obstrutivo pelo referido método de imagem.\n\nAlém de antibioticoterapia endovenosa, qual é a conduta indicada para essa paciente neste momento?",
    "options": [
      "Realização de colecistectomia videolaparoscópica na urgência.",
      "Drenagem da via biliar por colangiopancreatografia retrógrada endoscópica (CPRE).",
      "Complementação diagnóstica com colangiorressonância.",
      "Analgesia e suporte clínico."
    ],
    "correctAnswer": 1,
    "explanation": "Febre, icterícia e dor em hipocôndrio direito (tríade de Charcot), mais hipotensão (86/58 mmHg) e confusão mental: pêntade de Reynolds, colangite aguda grave (Tokyo grau III), com dilatação das vias biliares e cálculos na vesícula.\n\nAlém de antibiótico e suporte (volume, vasopressor se necessário), a colangite grave exige drenagem biliar de urgência, assim que o paciente tiver condições mínimas. A CPRE com papilotomia é o método de escolha: drena, retira o cálculo e tem menos morbimortalidade que a cirurgia. A ultrassonografia muitas vezes não vê o cálculo no colédoco distal; a dilatação já basta.",
    "commentary": "Colecistectomia na urgência (A): não desobstrui o colédoco e é uma cirurgia de risco num paciente em choque; a colecistectomia vem depois, eletiva.\n\nColangiorressonância (C): atrasa a drenagem num paciente grave; com Reynolds e via dilatada, a indicação de drenagem já está clara.\n\nAnalgesia e suporte (D): sem drenagem, a colangite grave tem alta mortalidade.",
    "tip": "Reynolds (Charcot + choque + confusão) = colangite grave: antibiótico + CPRE de urgência.",
    "reference": "Tokyo Guidelines 2018 (TG18): diagnostic criteria and management of acute cholangitis. J Hepatobiliary Pancreat Sci, 2018.",
    "tags": [
      "colangite aguda",
      "pêntade de Reynolds",
      "CPRE",
      "coledocolitíase"
    ]
  },
  {
    "id": "dante2026-23",
    "topography": "16",
    "topic": "Trauma abdominal",
    "module": "Cirurgia",
    "text": "Homem, de 28 anos de idade, foi vítima de colisão moto versus anteparo fixo. Na avaliação inicial, apresenta vias aéreas pérvias, com saturação periférica de oxigênio de 97% em ar ambiente, sem alterações ventilatórias. A ausculta cardíaca está normal, com PA 132x84mmHg, FC 115bpm e tempo de enchimento capilar inferior a 3 segundos. O abdome está doloroso à palpação de hipocôndrio direito, sem sinais de irritação peritoneal, com pelve estável e toque retal normal. A escala de coma de Glasgow é 15, com pupilas isocóricas e fotorreagentes, sem déficits neurológicos focais. Nega dor em coluna vertebral ou extremidades. Realizou exames complementares, com única alteração representada na tomografia a seguir. Não foi observado extravasamento de contraste durante a realização do exame de imagem.\n\nQual é a conduta indicada neste momento?",
    "options": [
      "Drenagem percutânea guiada por método de imagem.",
      "Realização de arteriografia com embolização.",
      "Realização de laparotomia exploradora e tamponamento com compressas.",
      "Monitorização clínica e dos níveis hematimétricos."
    ],
    "correctAnswer": 3,
    "explanation": "Trauma abdominal fechado em paciente hemodinamicamente estável (PA normal, enchimento capilar < 3 s), sem peritonite, com lesão hepática isolada na tomografia e sem extravasamento de contraste (\"blush\").\n\nNo paciente estável, o tratamento não operatório é o padrão para lesões hepáticas de qualquer grau: observação em ambiente monitorado, exame abdominal seriado, hemoglobina seriada e repouso. A cirurgia fica para instabilidade ou peritonite; a arteriografia com embolização, para extravasamento de contraste ou queda de hemoglobina.",
    "commentary": "Drenagem percutânea (A): usada para coleções tardias (biloma, abscesso), não para a lesão aguda.\n\nArteriografia com embolização (B): indicada quando há blush ou sangramento ativo; aqui não houve extravasamento.\n\nLaparotomia com tamponamento (C): reservada ao paciente instável; num estável, aumenta a morbidade sem benefício.",
    "tip": "Trauma hepático ou esplênico em paciente estável, sem peritonite: tratamento não operatório. Blush → angioembolização. Instável → cirurgia.",
    "reference": "Coccolini F et al. Liver trauma: WSES 2020 guidelines. World J Emerg Surg, 2020. American College of Surgeons. ATLS, 10ª ed.",
    "tags": [
      "trauma hepático",
      "tratamento não operatório",
      "trauma abdominal fechado"
    ],
    "image": "/images/dante2026-23.webp"
  },
  {
    "id": "dante2026-24",
    "topography": "16",
    "topic": "Trauma torácico",
    "module": "Cirurgia",
    "text": "Homem, de 35 anos de idade, foi vítima de ferimento único por arma branca em hemitórax esquerdo. Na avaliação inicial, apresenta vias aéreas pérvias, com colar cervical, saturação periférica de oxigênio de 81% com máscara de oxigênio a 12L/min, PA 80x50mmHg e FC 135bpm. Nota-se estase jugular bilateral. O exame pulmonar mostra expansibilidade torácica e murmúrios vesiculares diminuídos à esquerda, com presença de ferimento linear de 1,5cm em 9º espaço intercostal esquerdo, em linha axilar anterior, sem sangramento ativo. O abdome está plano, doloroso à palpação de hipocôndrio esquerdo, sem sinais de irritação peritoneal, com pelve estável. A escala de coma de Glasgow é 14, apresentando-se confuso, agitado, com pupilas isocóricas e fotorreagentes, sem déficits neurológicos. Não há outras lesões externas além do ferimento mencionado. A ultrassonografia (eFAST) realizada na sala de trauma está disponível a seguir.\n\nConsiderando a principal hipótese diagnóstica para este paciente, qual é a conduta indicada neste momento?",
    "options": [
      "Aplicação de curativo de três pontas em ferimento",
      "Punção de Marfan",
      "Toracocentese descompressiva à esquerda",
      "Intubação orotraqueal"
    ],
    "correctAnswer": 2,
    "explanation": "Ferimento por arma branca no hemitórax esquerdo com hipoxemia (SatO₂ 81%), choque, estase jugular e murmúrio diminuído à esquerda. O eFAST mostra janela pericárdica sem derrame importante e, no hemitórax esquerdo, o modo M em \"código de barras\" (ausência de deslizamento pleural): pneumotórax.\n\nPneumotórax com choque e jugulares distendidas é pneumotórax hipertensivo, diagnóstico clínico que exige descompressão imediata: punção com agulha (no 4º–5º espaço intercostal, linha axilar média, em adultos, ou 2º espaço na linha hemiclavicular), seguida de drenagem torácica.",
    "commentary": "Curativo de três pontas (A): é para o pneumotórax aberto (ferida aspirativa); a ferida aqui é linear de 1,5 cm, sem aspiração de ar descrita.\n\nPunção de Marfan (B): pericardiocentese para tamponamento; a janela pericárdica não mostra derrame que explique o choque.\n\nIntubação orotraqueal (D): a ventilação com pressão positiva antes de descomprimir aumenta a pressão intratorácica e pode levar à parada.",
    "tip": "Choque + jugulares distendidas + murmúrio abolido de um lado = pneumotórax hipertensivo: descomprimir antes de qualquer coisa.",
    "reference": "American College of Surgeons. ATLS – Advanced Trauma Life Support, 10ª ed., 2018.",
    "tags": [
      "pneumotórax hipertensivo",
      "trauma torácico",
      "eFAST"
    ],
    "image": "/images/dante2026-24.webp"
  },
  {
    "id": "dante2026-25",
    "topography": "16",
    "topic": "Trauma abdominal",
    "module": "Cirurgia",
    "text": "Homem, de 35 anos de idade, foi vítima de ferimento único por arma branca em hemitórax esquerdo. Na avaliação inicial, apresenta vias aéreas pérvias, com colar cervical, saturação periférica de oxigênio de 81% com máscara de oxigênio a 12L/min, PA 80x50mmHg e FC 135bpm. Nota-se estase jugular bilateral. O exame pulmonar mostra expansibilidade torácica e murmúrios vesiculares diminuídos à esquerda, com presença de ferimento linear de 1,5cm em 9º espaço intercostal esquerdo, em linha axilar anterior, sem sangramento ativo. O abdome está plano, doloroso à palpação de hipocôndrio esquerdo, sem sinais de irritação peritoneal, com pelve estável. A escala de coma de Glasgow é 14, apresentando-se confuso, agitado, com pupilas isocóricas e fotorreagentes, sem déficits neurológicos. Não há outras lesões externas além do ferimento mencionado. A ultrassonografia (eFAST) realizada na sala de trauma está disponível a seguir.\n\nApós medidas adotadas, o paciente evoluiu com reversibilidade do quadro ventilatório e da instabilidade hemodinâmica, presentando-se com saturação periférica de oxigênio de 96%, FC 94bpm e PA 102x68mmHg. Realizou tomografia de abdome, que evidenciou laceração esplênica grau II, sem extravasamento de contraste, com pequena quantidade de líquido livre adjacente ao baço.\n\nQual é a conduta recomendada para esse paciente?",
    "options": [
      "Abordagem cirúrgica para inventário da cavidade abdominal e rafia diafragmática.",
      "Abordagem cirúrgica para realização de esplenectomia e vacinação para bactérias encapsuladas.",
      "Tratamento conservador com monitorização clínica e dos níveis hematimétricos.",
      "Tratamento conservador com suporte clínico e vacinação para bactérias encapsuladas."
    ],
    "correctAnswer": 0,
    "explanation": "Mesmo paciente: após a descompressão, ficou estável. A tomografia mostra laceração esplênica grau II sem extravasamento.\n\nO ponto-chave é o local do ferimento: 9º espaço intercostal esquerdo, na linha axilar anterior. Ferimentos penetrantes abaixo do 4º espaço intercostal (linha do mamilo) até o rebordo costal são toracoabdominais, e no lado esquerdo há alto risco de lesão do diafragma, que a tomografia frequentemente não detecta. A lesão do baço confirma que a lâmina atravessou o diafragma.\n\nLesão diafragmática esquerda não cicatriza sozinha e evolui com hérnia diafragmática e estrangulamento de víscera. Por isso, indica-se exploração cirúrgica (videolaparoscopia ou laparotomia) para inventário da cavidade e rafia do diafragma.",
    "commentary": "Esplenectomia e vacinação (B): lesão esplênica grau II em paciente estável não exige esplenectomia; o motivo da cirurgia é o diafragma.\n\nTratamento conservador (C): seria correto para a lesão esplênica isolada, mas ignora a provável lesão diafragmática do ferimento toracoabdominal esquerdo.\n\nConservador com vacinação (D): a vacinação para germes encapsulados só se aplica após esplenectomia, e o tratamento conservador deixa a lesão do diafragma sem reparo.",
    "tip": "Ferimento penetrante toracoabdominal à esquerda: explorar o diafragma (laparoscopia), mesmo com paciente estável.",
    "reference": "American College of Surgeons. ATLS, 10ª ed. Eastern Association for the Surgery of Trauma. Practice management guideline for penetrating left thoracoabdominal trauma, 2018.",
    "tags": [
      "trauma toracoabdominal",
      "lesão diafragmática",
      "trauma esplênico",
      "ferimento por arma branca"
    ],
    "image": "/images/dante2026-25.webp"
  },
  {
    "id": "dante2026-26",
    "topography": "3.2",
    "topic": "Hipertensão portal",
    "module": "Cirurgia",
    "text": "Homem, de 42 anos de idade, procura o pronto atendimento por episódios de hematêmese há uma hora. Nega episódios prévios. Refere ingestão de um litro de destilado diariamente há 12 anos. Ao exame físico, encontra-se em regular estado geral, escorado 2+/4+, FC 98bpm, PA 100x70mmHg, com extremidades quentes e bem perfundidas. Apresenta escala de coma de Glasgow 15. O abdome está ascítico, flácido, indolor e sem sinais de irritação peritoneal. O toque retal está normal. Os exames laboratoriais demonstraram Hb 8,6g/dL, sem demais alterações. Realizou endoscopia digestiva alta, com identificação de varizes de grosso calibre em fundo gástrico e presença de “red spots”. Não foram observadas outras alterações na endoscopia.\n\nQual é a terapia endoscópica recomendada para esse paciente neste momento?",
    "options": [
      "Terapia combinada com adrenalina e hemoclipe",
      "Injeção de cianoacrilato",
      "Ligadura elástica",
      "Coagulação com plasma de argônio"
    ],
    "correctAnswer": 1,
    "explanation": "Etilista com ascite e hematêmese, com varizes de grosso calibre no fundo gástrico e sinais vermelhos (\"red spots\"), sem varizes de esôfago descritas: hemorragia por varizes gástricas isoladas do fundo (IGV1) ou gastroesofágicas que se estendem ao fundo (GOV2).\n\nPara varizes de fundo gástrico, a terapia endoscópica de escolha é a injeção de cianoacrilato (cola tissular), que oblitera a variz com alta taxa de hemostasia e menos ressangramento que a ligadura. Em caso de falha, TIPS ou embolização retrógrada (BRTO).",
    "commentary": "Adrenalina e hemoclipe (A): terapia para úlcera péptica com sangramento; não é tratamento de varizes.\n\nLigadura elástica (C): é a escolha para varizes de esôfago e GOV1 (que seguem a pequena curvatura); nas varizes de fundo, calibrosas e com fluxo alto, tem mais ressangramento.\n\nPlasma de argônio (D): usado em angiodisplasias e ectasia vascular antral, não em varizes.",
    "tip": "Varizes de esôfago → ligadura. Varizes de fundo gástrico (GOV2/IGV1) → cianoacrilato.",
    "reference": "de Franchis R et al. Baveno VII – Renewing consensus in portal hypertension. J Hepatol, 2022. Sociedade Brasileira de Hepatologia. Consenso de hemorragia digestiva varicosa.",
    "tags": [
      "hemorragia digestiva alta",
      "varizes gástricas",
      "cianoacrilato",
      "cirrose hepática"
    ]
  },
  {
    "id": "dante2026-27",
    "topography": "3.2",
    "topic": "Hipertensão portal",
    "module": "Cirurgia",
    "text": "Homem, de 42 anos de idade, procura o pronto atendimento por episódios de hematêmese há uma hora. Nega episódios prévios. Refere ingestão de um litro de destilado diariamente há 12 anos. Ao exame físico, encontra-se em regular estado geral, escorado 2+/4+, FC 98bpm, PA 100x70mmHg, com extremidades quentes e bem perfundidas. Apresenta escala de coma de Glasgow 15. O abdome está ascítico, flácido, indolor e sem sinais de irritação peritoneal. O toque retal está normal. Os exames laboratoriais demonstraram Hb 8,6g/dL, sem demais alterações. Realizou endoscopia digestiva alta, com identificação de varizes de grosso calibre em fundo gástrico e presença de “red spots”. Não foram observadas outras alterações na endoscopia.\n\nO tratamento endoscópico realizado foi efetivo, de forma que o paciente permaneceu hemodinamicamente estável ao final do exame.\n\nQuais são as medicações indicadas para diminuir o risco de complicações hemorrágicas e infecciosas neste momento?",
    "options": [
      "Terlipressina, ciprofloxacina, omeprazol e ácido tranexâmico.",
      "Terlipressina, ciprofloxacina e omeprazol.",
      "Terlipressina, ciprofloxacina e ácido tranexâmico.",
      "Terlipressina e ciprofloxacina."
    ],
    "correctAnswer": 1,
    "explanation": "Após a terapia endoscópica, o tratamento da hemorragia varicosa no cirrótico inclui:\n\n• Vasoconstritor esplâncnico (terlipressina, octreotida ou somatostatina) por 2 a 5 dias, para reduzir o ressangramento.\n• Antibiótico profilático (ceftriaxona ou, em pacientes menos graves, quinolona) por até 7 dias, que reduz infecções, ressangramento e mortalidade.\n• IBP por curto período, aceito pelo gabarito para reduzir úlcera pós-procedimento endoscópico.\n\nO ácido tranexâmico não tem benefício na hemorragia digestiva e aumenta eventos tromboembólicos (estudo HALT-IT).",
    "commentary": "Com ácido tranexâmico (A e C): não reduz sangramento nem mortalidade na hemorragia digestiva e aumenta trombose venosa e convulsões.\n\nSó terlipressina e ciprofloxacina (D): pelo gabarito, falta o IBP, que reduz o risco de úlcera após o tratamento endoscópico e de sangramento por outras lesões pépticas.\n\nObservação: o uso de IBP após terapia de varizes é controverso — muitas diretrizes não o recomendam de rotina por longo prazo; o ponto principal da questão é não usar ácido tranexâmico.",
    "tip": "HDA varicosa: vasoconstritor + antibiótico profilático + endoscopia em 12 h. Ácido tranexâmico, não.",
    "reference": "HALT-IT Trial Collaborators. Lancet, 2020. de Franchis R et al. Baveno VII. J Hepatol, 2022.",
    "tags": [
      "hemorragia digestiva varicosa",
      "terlipressina",
      "antibioticoprofilaxia",
      "ácido tranexâmico"
    ]
  },
  {
    "id": "dante2026-28",
    "topography": "16",
    "topic": "Feridas",
    "module": "Cirurgia",
    "text": "Mulher, 40 anos de idade, está em seguimento ambulatorial após realização de colecistectomia videolaparoscópica eletiva por colecistite crônica calculosa. Nega outras comorbidades. Atualmente, está no 5º dia pós-operatório, relatando aumento de sensibilidade em ferida operatória umbilical, com saída de secreção há um dia. Ao exame físico, encontra-se em bom estado geral, afebril, com sinais vitais normais. O abdome está plano, flácido e indolor. A ferida operatória umbilical apresenta pontos separados de nylon e hiperemia restrita às bordas da incisão, com desconforto e saída de secreção purulenta à expressão. As demais feridas operatórias estão com bom aspecto e sem saída de secreção.\n\nQual é a conduta indicada neste momento?",
    "options": [
      "Manutenção dos pontos cirúrgicos, expressão da ferida operatória e antibioticoterapia via oral por 3 a 5 dias.",
      "Retirada dos pontos cirúrgicos, realização de cuidados locais com a ferida operatória e antibioticoterapia via oral por 5 a 7 dias.",
      "Retirada dos pontos cirúrgicos e realização de cuidados locais com a ferida operatória.",
      "Manutenção dos pontos cirúrgicos e encaminhamento para o pronto-socorro para realização de exames complementares."
    ],
    "correctAnswer": 2,
    "explanation": "Infecção de sítio cirúrgico incisional superficial: secreção purulenta da ferida umbilical, hiperemia restrita às bordas, sem febre, sem sinais sistêmicos e com abdome normal.\n\nO tratamento é abrir a ferida (retirar os pontos), drenar e fazer cuidados locais (limpeza, curativo, fechamento por segunda intenção). O antibiótico só é necessário se houver celulite extensa (mais de 5 cm além da incisão), sinais sistêmicos ou imunossupressão.",
    "commentary": "Manter os pontos, expressão e antibiótico (A): sem abrir a ferida, o pus não drena; o antibiótico não substitui a drenagem.\n\nRetirar pontos com antibiótico por 5–7 dias (B): a drenagem está certa, mas o antibiótico é desnecessário numa infecção superficial sem celulite ou repercussão sistêmica.\n\nManter os pontos e encaminhar ao PS (D): a paciente está bem; não há indicação de exames complementares nem de manter a coleção fechada.",
    "tip": "Infecção de ferida superficial: abrir e drenar. Antibiótico só se celulite > 5 cm, sinais sistêmicos ou imunossupressão.",
    "reference": "Stevens DL et al. Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections: IDSA 2014. ANVISA. Critérios diagnósticos de infecção relacionada à assistência à saúde, 2017.",
    "tags": [
      "infecção de sítio cirúrgico",
      "ferida operatória",
      "pós-operatório"
    ]
  },
  {
    "id": "dante2026-29",
    "module": "Cirurgia",
    "text": "Homem, de 50 anos de idade, foi encaminhado ao ambulatório de Cirurgia Geral após alteração em endoscopia digestiva alta. Nega comorbidades prévias. Está assintomático e o exame físico está normal. A endoscopia realizada demonstrava lesão subepitelial de 2,5cm em grande curvatura de corpo gástrico. Prosseguiu investigação com ultrassonografia endoscópica, que evidenciou formação originária da quarta camada, sendo realizada biópsia com imunohistoquímica e identificação de positividade para DOG-1. Foram solicitados os exames complementares pertinentes, que não mostraram outras alterações.\n\nQual é a conduta indicada para esse paciente?",
    "options": [
      "Gastrectomia em cunha sem linfadenectomia",
      "Gastrectomia subtotal com linfadenectomia D2",
      "Quimioterapia exclusiva",
      "Seguimento clínico"
    ],
    "correctAnswer": 0,
    "explanation": "Lesão subepitelial gástrica de 2,5 cm, originada na 4ª camada da ecoendoscopia (muscular própria), com imuno-histoquímica DOG-1 positiva: tumor estromal gastrointestinal (GIST).\n\nGISTs maiores que 2 cm têm indicação de ressecção. O objetivo é retirar o tumor com margens livres e sem romper a cápsula. Como o GIST raramente dá metástase linfonodal, não se faz linfadenectomia; ressecção em cunha (segmentar) é suficiente na maioria dos tumores gástricos, inclusive por via laparoscópica. O imatinibe fica para doença irressecável, metastática ou como adjuvante nos de alto risco.",
    "commentary": "Gastrectomia subtotal com D2 (B): tratamento do adenocarcinoma gástrico; no GIST, a linfadenectomia não traz benefício e a ressecção ampla é desnecessária.\n\nQuimioterapia exclusiva (C): o GIST é resistente à quimioterapia convencional; a terapia sistêmica é com inibidor de tirosina-quinase (imatinibe), e não substitui a cirurgia num tumor ressecável.\n\nSeguimento clínico (D): é opção para GIST gástrico < 2 cm sem características de risco; com 2,5 cm, a indicação é ressecar.",
    "tip": "GIST (CD117/DOG-1, 4ª camada): > 2 cm → ressecção com margem livre, sem linfadenectomia; imatinibe para alto risco ou irressecável.",
    "reference": "Casali PG et al. Gastrointestinal stromal tumours: ESMO–EURACAN–GENTURIS Clinical Practice Guidelines, 2022. NCCN Guidelines – Gastrointestinal Stromal Tumors.",
    "tags": [
      "GIST",
      "tumor subepitelial",
      "ecoendoscopia",
      "ressecção em cunha"
    ]
  },
  {
    "id": "dante2026-30",
    "topography": "16",
    "topic": "Pré-operatório",
    "module": "Cirurgia",
    "text": "Homem, de 25 anos de idade, encontra-se em sala cirúrgica para realização de hernioplastia inguinal.\n\nA sequência correta de preparação da equipe cirúrgica para o procedimento é:",
    "options": [
      "Higienização das mãos, colocação das luvas estéreis, colocação do avental estéril, colocação dos campos cirúrgicos e antissepsia da pele do paciente.",
      "Antissepsia da pele do paciente, higienização das mãos, colocação do avental estéril, colocação das luvas estéreis e colocação dos campos cirúrgicos.",
      "Colocação dos campos cirúrgicos, higienização das mãos, colocação do avental estéril, colocação das luvas estéreis e antissepsia da pele do paciente.",
      "Higienização das mãos, colocação do avental estéril, colocação das luvas estéreis, antissepsia da pele do paciente e colocação dos campos cirúrgicos."
    ],
    "correctAnswer": 3,
    "explanation": "A sequência de preparo segue a lógica de ir do menos para o mais estéril e de manter a esterilidade:\n\n• Higienização (escovação ou fricção) cirúrgica das mãos.\n• Colocação do avental estéril.\n• Calçar as luvas estéreis (depois do avental, para cobrir os punhos do avental).\n• Antissepsia da pele do paciente.\n• Colocação dos campos cirúrgicos estéreis.",
    "commentary": "Luvas antes do avental (A): calçar luvas antes do avental impede cobrir os punhos e contamina; e os campos não podem ser colocados antes da antissepsia.\n\nAntissepsia antes da higienização das mãos (B): na sequência correta, a equipe se paramenta primeiro (mãos, avental, luvas) e só então faz a antissepsia da pele e coloca os campos.\n\nCampos antes de tudo (C): os campos são colocados sobre a pele já preparada, e por quem está paramentado.",
    "tip": "Paramentação: mãos → avental → luvas. Paciente: antissepsia → campos.",
    "reference": "ANVISA. Medidas de prevenção de infecção relacionada à assistência à saúde, 2017. Organização Mundial da Saúde. Global Guidelines for the Prevention of Surgical Site Infection, 2018.",
    "tags": [
      "técnica cirúrgica",
      "paramentação",
      "antissepsia"
    ]
  },
  {
    "id": "dante2026-31",
    "module": "Cirurgia",
    "text": "Mulher, de 35 anos de idade, encontra-se em sala cirúrgica para realização de colecistectomia videolaparoscópica por colelitíase sintomática.\n\nPara confecção do pneumoperitônio, o gás a ser utilizado e a pressão estabelecida no insuflador devem ser, respectivamente:",
    "options": [
      "Gás carbônico e 5mmHg",
      "Gás carbônico e 15mmHg",
      "Oxigênio e 5mmHg",
      "Oxigênio e 25mmHg"
    ],
    "correctAnswer": 1,
    "explanation": "O pneumoperitônio da videolaparoscopia é feito com gás carbônico (CO₂): não é inflamável (permite usar eletrocautério), é muito solúvel no sangue e eliminado rapidamente pelos pulmões, o que reduz o risco de embolia gasosa grave.\n\nA pressão intra-abdominal habitual é de 12 a 15 mmHg: espaço suficiente para operar, com repercussão hemodinâmica e respiratória aceitável. Pressões maiores reduzem o retorno venoso e o débito cardíaco.",
    "commentary": "CO₂ a 5 mmHg (A): pressão baixa demais para criar espaço de trabalho adequado.\n\nOxigênio a 5 mmHg (C): oxigênio é comburente e, com o eletrocautério, há risco de fogo e explosão; também é menos solúvel, com mais risco de embolia.\n\nOxigênio a 25 mmHg (D): gás inadequado e pressão excessiva, com queda do débito cardíaco e piora da ventilação.",
    "tip": "Laparoscopia: CO₂ a 12–15 mmHg.",
    "reference": "Sociedade Brasileira de Cirurgia Minimamente Invasiva e Robótica (SOBRACIL). Neudecker J et al. The EAES clinical practice guidelines on the pneumoperitoneum for laparoscopic surgery. Surg Endosc, 2002.",
    "tags": [
      "videolaparoscopia",
      "pneumoperitônio",
      "técnica cirúrgica"
    ]
  },
  {
    "id": "dante2026-32",
    "topography": "16",
    "topic": "Pós-operatório",
    "module": "Cirurgia",
    "text": "Homem, de 65 anos de idade, encontra-se em 1º dia pós-operatório de retossigmoidectomia por adenocarcinoma de cólon sigmoide. O procedimento transcorreu sem intercorrências, sendo realizada linfadenectomia da região dos vasos mesentéricos inferiores e anastomose primária com colocação de dreno tubulolaminar em região pélvica. Ao verificar os registros dos sinais vitais do paciente, observa-se que houve um episódio de 37,9°C durante a madrugada. Neste momento, o paciente encontra-se no leito, em bom estado geral, normocorado, com temperatura axilar de 37,6°C, PA 140x84mmHg, FC 92bpm e saturação periférica de oxigênio de 97% em ar ambiente. O abdome encontra-se plano, flácido, com ferida operatória de laparotomia mediana em bom aspecto, pouco doloroso à palpação adjacente ao sítio de incisão, sem sinais de irritação peritoneal. Não há sinais clínicos de trombose venosa em membros inferiores. O restante do exame físico está normal. O dreno abdominal apresentou débito de 60mL em 24 horas, com aspecto conforme imagem ilustrada a seguir.\n\nQual é a conduta indicada neste momento?",
    "options": [
      "Introduzir profilaxia farmacológica de tromboembolismo venoso e estimular a deambulação.",
      "Solicitar angiotomografia computadorizada de tórax protocolo TEP e iniciar anticoagulação terapêutica.",
      "Solicitar radiografia convencional de tórax, hemocultura e urocultura e iniciar antibioticoterapia endovenosa empírica.",
      "Solicitar tomografia computadorizada de abdome total com triplo contraste e estimular a deambulação."
    ],
    "correctAnswer": 0,
    "explanation": "Primeiro dia após retossigmoidectomia, com febre baixa (pico de 37,9 °C), bom estado geral, sinais vitais normais, abdome sem peritonite e dreno com 60 mL de líquido serossanguinolento — aspecto esperado no primeiro dia.\n\nFebre nas primeiras 48 horas é geralmente resposta inflamatória ao trauma cirúrgico (liberação de citocinas), e não infecção; não exige exames nem antibiótico em paciente estável. A conduta é seguir os cuidados de rotina: profilaxia farmacológica de tromboembolismo venoso (cirurgia oncológica abdominal é de alto risco), deambulação precoce, fisioterapia respiratória e analgesia.",
    "commentary": "Angiotomografia e anticoagulação plena (B): não há sinais de TEP (taquicardia, hipoxemia, dispneia); febre baixa isolada no 1º dia não justifica.\n\nRadiografia, culturas e antibiótico (C): investigação e tratamento de infecção sem nenhum sinal clínico; febre precoce raramente é infecciosa.\n\nTomografia com triplo contraste (D): a fístula de anastomose costuma aparecer entre o 5º e o 7º dia, com dor, peritonite, saída de secreção fecaloide ou purulenta pelo dreno; nada disso está presente.",
    "tip": "Febre pós-operatória: 1º–2º dia = resposta inflamatória ao trauma cirúrgico; 3º–5º = ITU, pneumonia, flebite; 5º–7º = ferida, fístula; após 7º = abscesso, TVP.",
    "reference": "Townsend CM et al. Sabiston Tratado de Cirurgia, 21ª ed. Capítulo de complicações pós-operatórias.",
    "tags": [
      "febre pós-operatória",
      "pós-operatório",
      "profilaxia de tromboembolismo"
    ],
    "image": "/images/dante2026-32.webp"
  },
  {
    "id": "dante2026-33",
    "topography": "15",
    "topic": "Imunização",
    "module": "Pediatria",
    "text": "Gestante, com idade gestacional de 33 semanas, argumenta em consulta de acompanhamento pré-natal que leu sobre a vacina contra o vírus sincicial respiratório (VSR), liberada para uso no Brasil em 2025. Está preocupada porque acredita que deve ser “tarde demais” para receber a imunização.\n\nEm relação à vacinação contra o VSR (Abrysvo®) em gestantes, assinale a alternativa correta:",
    "options": [
      "É indicada apenas para gestantes com comorbidades ou com risco de parto prematuro, não sendo recomendada na rotina.",
      "É indicada apenas até 28 semanas de gestação, devendo ser evitada no terceiro trimestre por risco aumentado de parto prematuro.",
      "É contraindicada após 32 semanas, devendo o recém-nascido receber imunoglobulina específica após o parto.",
      "Pode ser administrada entre 24 e 36 semanas de gestação, sendo segura e eficaz para proteção passiva do recém-nascido nos primeiros meses de vida."
    ],
    "correctAnswer": 3,
    "explanation": "A vacina contra o vírus sincicial respiratório para gestantes (Abrysvo®, proteína F em pré-fusão) induz anticorpos que passam pela placenta e protegem o recém-nascido nos primeiros meses, quando a bronquiolite é mais grave.\n\nPela bula aprovada pela Anvisa, é aplicada em dose única entre 24 e 36 semanas de gestação. No Programa Nacional de Imunizações (incorporação em 2025), a recomendação é a partir de 28 semanas. A gestante de 33 semanas está dentro da janela e pode ser vacinada. A aplicação ao menos 14 dias antes do parto garante a transferência dos anticorpos.",
    "commentary": "Só para gestantes de risco (A): a vacina é para todas as gestantes na faixa de idade gestacional recomendada, não só as de risco.\n\nSó até 28 semanas (B): a janela vai até 36 semanas; a preocupação com prematuridade levou a restringir o início (não antes de 24–28 semanas), não o fim.\n\nContraindicada após 32 semanas (C): está errado; pode ser aplicada até 36 semanas. A imunização do recém-nascido com anticorpo monoclonal (nirsevimabe) é alternativa quando a mãe não foi vacinada.",
    "tip": "VSR na gestação: dose única entre 24 e 36 semanas (PNI: a partir de 28), ≥ 14 dias antes do parto.",
    "reference": "Ministério da Saúde. Nota técnica de incorporação da vacina VSR em gestantes ao PNI, 2025. Kampmann B et al. MATISSE trial. N Engl J Med, 2023.",
    "tags": [
      "vírus sincicial respiratório",
      "vacinação na gestação",
      "imunização"
    ]
  },
  {
    "id": "dante2026-34",
    "topography": "11",
    "topic": "Asma infantil",
    "module": "Pediatria",
    "text": "Menina, de 4 anos de idade, é levada à Unidade Básica de Saúde para consulta de retorno. A mãe relata que desde os 2 anos de idade a criança apresenta crises de cansaço cerca de 3 vezes por ano, sem internações por esse motivo. Nas crises, procura o pronto atendimento e faz o tratamento recomendado por 1 semana, com melhora. Fora das crises, a criança sempre apresenta tosse seca nas aulas de balé, necessitando interromper a atividade. Nas últimas 4 semanas, a mãe relata que ela tem apresentado falta de ar e chiado no peito, necessitando de salbutamol 3 vezes por semana. Além disso, passou a ter tosse seca sempre que corre ou ri muito. O pai da menina tinha crises semelhantes na infância e a mãe refere ter rinite.\n\nQual é a classificação do controle da asma da paciente e a conduta correta para o caso?",
    "options": [
      "Asma não controlada. Prescrever associação de corticoide inalatório com formoterol de manutenção.",
      "Asma não controlada. Prescrever salbutamol nas crises e iniciar corticoide inalatório de manutenção.",
      "Asma parcialmente controlada. Prescrever salbutamol nas crises e iniciar corticoide sistêmico.",
      "Asma parcialmente controlada. Prescrever salbutamol e corticoide inalatório nas crises."
    ],
    "correctAnswer": 1,
    "explanation": "Menina de 4 anos com crises recorrentes desde os 2 anos, história familiar de atopia e, nas últimas 4 semanas, sintomas e uso de salbutamol 3 vezes por semana, tosse aos esforços e ao rir, limitando atividades.\n\nControle da asma (GINA, até 5 anos), nas últimas 4 semanas: sintomas mais de 1 vez por semana, despertares noturnos, uso de resgate mais de 1 vez por semana, limitação de atividades. Com 3 ou 4 critérios, a asma não está controlada. Ela tem sintomas frequentes, resgate frequente e limitação: não controlada.\n\nConduta para menores de 6 anos: corticoide inalatório de manutenção em dose baixa (com espaçador) e salbutamol para as crises.",
    "commentary": "Corticoide + formoterol de manutenção (A): a associação de corticoide inalatório com LABA não é recomendada como primeira escolha em menores de 6 anos; o esquema de manutenção e alívio com formoterol é para maiores de 6 (e 12) anos.\n\nParcialmente controlada com corticoide sistêmico (C): com 3 critérios, a asma é não controlada; corticoide sistêmico é só para crises.\n\nParcialmente controlada com corticoide inalatório só nas crises (D): classificação errada, e a criança precisa de controlador diário.",
    "tip": "Asma ≤ 5 anos não controlada: corticoide inalatório diário em dose baixa + salbutamol nas crises.",
    "reference": "Global Initiative for Asthma (GINA) 2024 – Management of asthma in children 5 years and younger. Sociedade Brasileira de Pediatria. Asma na infância.",
    "tags": [
      "asma",
      "controle da asma",
      "corticoide inalatório",
      "pré-escolar"
    ]
  },
  {
    "id": "dante2026-35",
    "topography": "11",
    "topic": "Calendário vacinal",
    "module": "Pediatria",
    "text": "Durante consulta na Unidade Básica de Saúde, a mãe de um lactente de 3 meses de idade, sem comorbidades e com calendário vacinal em dia, relata que o filho recebeu a vacina BCG na maternidade. Segundo a mãe, a evolução inicial foi típica: formação de pápula, seguida por pústula e ulceração superficial no braço direito, com início da cicatrização por volta da sexta semana. Contudo, há cerca de 10 dias ela notou o aparecimento de um nódulo doloroso na axila direita, que aumentou progressivamente de tamanho e passou a drenar secreção amarelada espessa espontaneamente. O bebê não apresentou febre, perda de apetite ou irritabilidade. Ao exame físico, a criança está em bom estado geral, corada, eupneica, afebril e com peso e estatura adequados para a idade. O local da aplicação da BCG (região deltoide direita) apresenta pequena cicatriz em fase final de epitelização, sem sinais inflamatórios. Na axila direita, observa-se adenomegalia de aproximadamente 2,5cm, flutuante, hiperemiada, com orifício de drenagem espontânea de secreção purulenta, sem odor fétido. Não há linfonodos aumentados em outras cadeias, nem hepatoesplenomegalia.\n\nConsiderando as diretrizes do Ministério da Saúde sobre as reações adversas à vacina BCG, qual é a conduta adequada para esse caso?",
    "options": [
      "Tratar com rifampicina por 3 meses e manter acompanhamento até resolução clínica.",
      "Realizar drenagem cirúrgica e prescrever antibiótico de amplo espectro por 10 dias.",
      "Encaminhar para unidade de referência para investigação de imunodeficiência primária antes de qualquer tratamento.",
      "Prescrever isoniazida profilática por 6 meses, considerando risco de disseminação do Mycobacterium bovis."
    ],
    "correctAnswer": 0,
    "explanation": "Após a BCG, a criança desenvolveu linfonodo axilar homolateral de 2,5 cm, flutuante e fistulizado, com secreção purulenta, em bom estado geral: linfadenopatia regional supurada, um evento adverso local da vacina.\n\nO tratamento é medicamentoso contra o bacilo vacinal (Mycobacterium bovis BCG), mantido até a regressão da lesão, com acompanhamento. O gabarito oficial indica rifampicina por cerca de 3 meses.",
    "commentary": "Drenagem cirúrgica e antibiótico de amplo espectro (B): a incisão de linfonodo por BCG é contraindicada (favorece fístula crônica), e antibióticos comuns não agem sobre micobactérias.\n\nInvestigar imunodeficiência antes de tratar (C): a investigação é indicada na BCG disseminada (lesões em vários órgãos, linfonodos generalizados, hepatoesplenomegalia); reação regional isolada em criança saudável não exige isso.\n\nIsoniazida profilática por 6 meses (D): o termo \"profilática\" está errado — trata-se de tratamento de um evento adverso, até a regressão da lesão.\n\nObservação: o Manual de Vigilância de Eventos Adversos Pós-Vacinação do Ministério da Saúde indica isoniazida (10 mg/kg/dia) até a regressão completa para linfadenopatia supurada e úlcera extensa, e não rifampicina. O próprio comentário que acompanha o gabarito reconhece isso.",
    "tip": "BCG com linfonodo supurado, abscesso frio ou úlcera > 1 cm: tratamento oral até regredir (MS: isoniazida). Não drenar cirurgicamente.",
    "reference": "Ministério da Saúde. Manual de Vigilância Epidemiológica de Eventos Adversos Pós-Vacinação, 4ª ed., 2021.",
    "tags": [
      "BCG",
      "evento adverso pós-vacinação",
      "linfadenite",
      "gabarito discutível"
    ],
    "alert": "Gabarito oficial: A (rifampicina). O Manual de Eventos Adversos Pós-Vacinação do Ministério da Saúde indica isoniazida até a regressão da lesão. Nenhuma alternativa traz exatamente essa conduta, e a banca manteve a A."
  },
  {
    "id": "dante2026-36",
    "topography": "11",
    "topic": "Desenvolvimento neuropsicomotor",
    "module": "Pediatria",
    "text": "Durante uma consulta de rotina na Unidade Básica de Saúde, menino de 2 anos é trazido pela mãe, que demonstra preocupação com o comportamento do filho. Ela relata que a criança não fala palavras com significado, raramente estabelece contato visual, não responde quando é chamada pelo nome e costuma alinhar brinquedos repetidamente, ficando irritada quando alguém os desorganiza. O exame físico é normal e o crescimento segue o percentil adequado para a idade. O desenvolvimento motor está preservado, mas observa-se dificuldade de interação social e ausência de gestos comunicativos espontâneos, como apontar ou acenar.\n\nConsiderando essas informações e o papel da Atenção Primária à Saúde na detecção precoce de alterações do desenvolvimento infantil, qual instrumento disponível na Caderneta de Saúde da Criança (7ª edição) pode ser utilizado na avaliação deste caso?",
    "options": [
      "Denver II (Denver Developmental Screening Test II)",
      "M-CHAT-R (Modified Checklist for Autism in Toddlers – Revised)",
      "CARS (Childhood Autism Rating Scale)",
      "Bayley III (Bayley Scales of Infant and Toddler Development)"
    ],
    "correctAnswer": 1,
    "explanation": "Menino de 2 anos sem palavras com significado, pouco contato visual, não atende pelo nome, não aponta nem acena e alinha brinquedos de forma repetitiva, irritando-se com mudanças: sinais de alerta para transtorno do espectro autista (TEA).\n\nA Caderneta da Criança (7ª edição) traz a M-CHAT-R/F, questionário de rastreamento respondido pelos pais e recomendado entre 16 e 30 meses. Pontuação de risco médio ou alto indica a entrevista de seguimento e, se confirmado o risco, encaminhamento para avaliação diagnóstica e estimulação precoce — sem esperar o diagnóstico para iniciar as intervenções.",
    "commentary": "Denver II (A): avalia o desenvolvimento global e não está na Caderneta como instrumento de rastreio para autismo.\n\nCARS (C): escala de gravidade do autismo, aplicada por profissional especializado, não é instrumento de rastreio da APS na Caderneta.\n\nBayley III (D): avaliação detalhada do desenvolvimento feita por especialista, demorada e não disponível na Caderneta.",
    "tip": "Suspeita de autismo entre 16 e 30 meses na APS: M-CHAT-R/F, que está na Caderneta da Criança.",
    "reference": "Ministério da Saúde. Caderneta da Criança, 7ª ed., 2024. Sociedade Brasileira de Pediatria. Manual de orientação: Transtorno do Espectro do Autismo, 2019.",
    "tags": [
      "TEA",
      "M-CHAT-R",
      "rastreamento",
      "desenvolvimento neuropsicomotor"
    ]
  },
  {
    "id": "dante2026-37",
    "module": "Pediatria",
    "text": "Recém-nascido de 11 dias de vida, com sexo fenotípico feminino, é levado à Unidade Básica de Saúde para avaliação de teste do pezinho alterado, com elevação significativa da 17-hidroxiprogesterona (17-OHP). A mãe relata que, desde o 7º dia de vida, a bebê apresenta vômitos em jato, letargia progressiva, diminuição da sucção e perda de peso significativa. Ao exame físico, a criança encontra-se letárgica, com mucosas secas, tempo de enchimento capilar aumentado, pressão arterial de 60x30mmHg e frequência cardíaca de 180bpm. Apresenta genitália ambígua caracterizada por clitoromegalia e fusão parcial dos grandes lábios, sem gônadas palpáveis e sem hepatomegalia. Não há consanguinidade nem história familiar de mortes neonatais ou malformações.\n\nCom base nas informações clínicas e laboratoriais, qual é o diagnóstico mais provável?",
    "options": [
      "Síndrome de insensibilidade parcial aos andrógenos.",
      "Hiperplasia adrenal congênita por deficiência de 11β hidroxilase.",
      "Hiperplasia adrenal congênita por deficiência de 21-hidroxilase.",
      "Deficiência de 3β-hidroxiesteroide desidrogenase."
    ],
    "correctAnswer": 2,
    "explanation": "Recém-nascida com 17-hidroxiprogesterona muito elevada no teste do pezinho, genitália ambígua (virilização: clitoromegalia e fusão labial, sem gônadas palpáveis) e, a partir da 1ª semana, vômitos, letargia, desidratação e choque: hiperplasia adrenal congênita forma clássica perdedora de sal, por deficiência de 21-hidroxilase.\n\nÉ a causa de mais de 90% dos casos. Falta cortisol e aldosterona, e os precursores são desviados para andrógenos (virilização da menina). A crise de perda de sal aparece entre 1 e 3 semanas de vida, com hiponatremia, hipercalemia, hipoglicemia e choque.\n\nTratamento da crise: soro fisiológico, hidrocortisona em dose de estresse e correção da glicemia; depois, hidrocortisona e fludrocortisona de manutenção.",
    "commentary": "Insensibilidade parcial aos andrógenos (A): ocorre em indivíduo 46,XY (com testículos), sem 17-OHP elevada e sem crise de perda de sal.\n\nDeficiência de 11β-hidroxilase (B): também causa virilização, mas o acúmulo de desoxicorticosterona (mineralocorticoide) leva a hipertensão, e não a perda de sal e choque.\n\nDeficiência de 3β-hidroxiesteroide desidrogenase (D): rara; causa perda de sal, mas a virilização em meninas é discreta, e a 17-OHP não é o marcador típico.",
    "tip": "17-OHP alta + menina virilizada + vômitos e choque na 2ª semana = HAC por 21-hidroxilase perdedora de sal.",
    "reference": "Speiser PW et al. Congenital Adrenal Hyperplasia Due to Steroid 21-Hydroxylase Deficiency: An Endocrine Society Clinical Practice Guideline, 2018.",
    "tags": [
      "hiperplasia adrenal congênita",
      "21-hidroxilase",
      "teste do pezinho",
      "genitália ambígua"
    ]
  },
  {
    "id": "dante2026-38",
    "topography": "11",
    "topic": "Aleitamento materno",
    "module": "Pediatria",
    "text": "Na primeira consulta de um recém-nascido com 5 dias de vida, a mãe relata dificuldade de amamentação. O pré-natal foi de risco habitual e a criança nascida a termo, sem intercorrências, com peso de 3500g. A mãe relata que a criança teve alta no segundo dia de vida, em aleitamento materno exclusivo. Relata também que suas mamas começaram a ficar bastante volumosas, inchadas e endurecidas há 1 dia. Na maioria das vezes em que o bebê tenta pegar o peito, ele escorrega e acaba não conseguindo manter a pega. Quando consegue pegar, a mãe diz sentir muita dor no início da mamada, mas sente alívio ao final dela. O exame físico do bebê está normal e o peso é de 3325g.\n\nQual é a conduta adequada para apoiar esse binômio diante da dificuldade de amamentação apresentada?",
    "options": [
      "Manter o aleitamento materno exclusivo e orientar extração após as mamadas, para aumentar a produção de leite materno.",
      "Manter o aleitamento materno exclusivo e orientar extração de alívio antes das mamadas, para melhorar flexibilidade aréolo-mamilar.",
      "Manter o aleitamento e introduzir complementação com fórmula infantil após as mamadas, para otimizar o ganho de peso.",
      "Manter o aleitamento materno no seio e introduzir complementação com leite materno extraído após as mamadas, para otimizar o ganho de peso."
    ],
    "correctAnswer": 1,
    "explanation": "No 5º dia pós-parto, mamas volumosas, inchadas e endurecidas: ingurgitamento mamário, comum na \"descida do leite\". A aréola tensa impede o bebê de abocanhá-la (ele escorrega), a pega fica ruim e a mamada dói.\n\nA perda de peso do bebê (3500 → 3325 g, 5%) está dentro do esperado (até 10% na primeira semana).\n\nA conduta é manter o aleitamento exclusivo e fazer ordenha de alívio antes das mamadas, para amolecer a aréola e permitir a pega correta. Também ajudam mamadas frequentes em livre demanda, massagem e compressas frias entre as mamadas.",
    "commentary": "Extração após as mamadas para aumentar a produção (A): o problema é o excesso de leite e a tensão da aréola, não falta de leite; extrair muito após as mamadas estimula ainda mais a produção.\n\nComplementar com fórmula (C): o ganho de peso está adequado; a fórmula atrapalha o aleitamento exclusivo e não resolve o ingurgitamento.\n\nComplementar com leite extraído (D): também desnecessário, pois a perda de peso é fisiológica.",
    "tip": "Ingurgitamento: ordenha de alívio antes da mamada (amolece a aréola e melhora a pega), mamadas frequentes e frio entre elas.",
    "reference": "Ministério da Saúde. Saúde da criança: aleitamento materno e alimentação complementar. Cadernos de Atenção Básica nº 23, 2ª ed., 2015.",
    "tags": [
      "aleitamento materno",
      "ingurgitamento mamário",
      "pega"
    ]
  },
  {
    "id": "dante2026-39",
    "topography": "1.1",
    "topic": "TCE",
    "module": "Pediatria",
    "text": "Menino, de 7 anos de idade, sofreu queda da própria altura na escola em colisão frontal com outro menino, da mesma idade e biotipo, com traumatismo craniano (TCE) na região posterior da cabeça. A criança evoluiu com dois episódios de vômito e cefaleia de intensidade progressiva após o TCE. Foi admitido no pronto atendimento apresentando-se em regular estado geral, descorado, hidratado, acianótico, anictérico, afebril, com escala de coma de Glasgow (ECG) 14 com fala confusa, pupilas isocóricas e fotorreagentes, desorientado e sem déficits neurológicos. Não há deformidades ou afundamentos cranianos. O restante do exame físico está normal.\n\nConsiderando a classificação do TCE na faixa etária do paciente, trata-se de TCE leve, mas foi indicada a realização de tomografia de crânio.\n\nQuais são os critérios para indicar a realização do exame?",
    "options": [
      "Escala de coma de Glasgow maior ou igual a 14, fratura de crânio palpável e alteração do estado mental.",
      "Escala de coma de Glasgow menor ou igual a 14, fratura de crânio palpável e hematoma subgaleal occipital.",
      "Escala de coma de Glasgow maior ou igual a 14, fratura de base de crânio e presença de hematoma subgaleal temporal.",
      "Escala de coma de Glasgow menor ou igual a 14, fratura de base de crânio e alteração do estado mental."
    ],
    "correctAnswer": 3,
    "explanation": "Criança de 7 anos com TCE, vômitos, cefaleia progressiva e Glasgow 14 com confusão e desorientação.\n\nPelas regras do PECARN para maiores de 2 anos, a tomografia é indicada (alto risco) quando há:\n\n• Glasgow ≤ 14 ou outros sinais de alteração do estado mental (agitação, sonolência, perguntas repetitivas, resposta lenta).\n• Sinais de fratura de base de crânio (hemotímpano, olhos de guaxinim, sinal de Battle, rinorreia ou otorreia de líquor).\n\nVômitos e cefaleia intensa são critérios intermediários, que levam a TC ou observação.",
    "commentary": "Glasgow ≥ 14 e fratura palpável (A): o critério é Glasgow ≤ 14 (alteração), e fratura palpável é critério para menores de 2 anos.\n\nGlasgow ≤ 14, fratura palpável e hematoma occipital (B): fratura palpável e hematoma de couro cabeludo não frontal são critérios da faixa abaixo de 2 anos.\n\nGlasgow ≥ 14 e hematoma temporal (C): Glasgow 15 normal não é critério, e hematoma de couro cabeludo entra na regra para menores de 2 anos.",
    "tip": "PECARN ≥ 2 anos: TC se Glasgow ≤ 14, alteração do estado mental ou sinais de fratura de base. < 2 anos: inclui fratura palpável e hematoma não frontal.",
    "reference": "Kuppermann N et al. Identification of children at very low risk of clinically-important brain injuries after head trauma (PECARN). Lancet, 2009.",
    "tags": [
      "traumatismo cranioencefálico",
      "PECARN",
      "tomografia de crânio",
      "pediatria"
    ]
  },
  {
    "id": "dante2026-40",
    "topography": "1.1",
    "topic": "TCE",
    "module": "Pediatria",
    "text": "Menino, de 7 anos de idade, sofreu queda da própria altura na escola em colisão frontal com outro menino, da mesma idade e biotipo, com traumatismo craniano (TCE) na região posterior da cabeça. A criança evoluiu com dois episódios de vômito e cefaleia de intensidade progressiva após o TCE. Foi admitido no pronto atendimento apresentando-se em regular estado geral, descorado, hidratado, acianótico, anictérico, afebril, com escala de coma de Glasgow (ECG) 14 com fala confusa, pupilas isocóricas e fotorreagentes, desorientado e sem déficits neurológicos. Não há deformidades ou afundamentos cranianos. O restante do exame físico está normal.\n\nO paciente evoluiu com deterioração neurológica, com queda da ECG para 10. Foi indicada intubação orotraqueal para proteção de via aérea. O paciente apresenta pressão arterial sistêmica normal.\n\nConsiderando as etapas e a ordem de administração das medicações utilizadas na sequência rápida de intubação, qual é a sequência correta a ser seguida?",
    "options": [
      "Lidocaína e atropina",
      "Midazolam e propofol",
      "Cetamina e rocurônio",
      "Succinilcolina e etomidato"
    ],
    "correctAnswer": 2,
    "explanation": "A sequência rápida de intubação tem duas etapas farmacológicas: primeiro o indutor (sedativo hipnótico) e logo em seguida o bloqueador neuromuscular.\n\nNo TCE com pressão arterial normal, cetamina (indutor) e rocurônio (bloqueador) formam uma combinação adequada. A cetamina preserva a pressão arterial e, portanto, a pressão de perfusão cerebral; o receio antigo de aumentar a pressão intracraniana não se confirmou. O rocurônio tem início rápido e evita os efeitos da succinilcolina (hipercalemia, aumento discreto da PIC).",
    "commentary": "Lidocaína e atropina (A): são pré-medicações opcionais (pouca evidência); nenhuma é indutor ou bloqueador neuromuscular.\n\nMidazolam e propofol (B): dois sedativos, sem bloqueador neuromuscular; além disso, o propofol causa hipotensão, que piora a perfusão cerebral.\n\nSuccinilcolina e etomidato (D): a ordem está invertida — o bloqueador nunca vem antes do indutor (paralisar um paciente acordado).",
    "tip": "Sequência rápida: primeiro o indutor (cetamina, etomidato), depois o bloqueador (rocurônio, succinilcolina). No TCE, evitar hipotensão.",
    "reference": "American Heart Association. PALS – Pediatric Advanced Life Support, 2020. Sociedade Brasileira de Pediatria. Sequência rápida de intubação em pediatria.",
    "tags": [
      "sequência rápida de intubação",
      "traumatismo cranioencefálico",
      "cetamina",
      "rocurônio"
    ]
  },
  {
    "id": "dante2026-41",
    "topography": "1.1",
    "topic": "TCE",
    "module": "Pediatria",
    "text": "Menino, de 7 anos de idade, sofreu queda da própria altura na escola em colisão frontal com outro menino, da mesma idade e biotipo, com traumatismo craniano (TCE) na região posterior da cabeça. A criança evoluiu com dois episódios de vômito e cefaleia de intensidade progressiva após o TCE. Foi admitido no pronto atendimento apresentando-se em regular estado geral, descorado, hidratado, acianótico, anictérico, afebril, com escala de coma de Glasgow (ECG) 14 com fala confusa, pupilas isocóricas e fotorreagentes, desorientado e sem déficits neurológicos. Não há deformidades ou afundamentos cranianos. O restante do exame físico está normal.\n\nO paciente apresentou crise convulsiva tônico-clônica generalizada.\n\nConsiderando o TCE prévio, quais são as condutas corretas para este caso?",
    "options": [
      "Administração de fenitoína endovenosa e manutenção do PaCO2 entre 35 e 40mmHg.",
      "Administração de fenobarbital endovenoso e manutenção do PaCO2 entre 35 e 40mmHg.",
      "Administração de fenitoína endovenosa e manutenção do PaCO2 menor que 30mmHg.",
      "Administração de fenobarbital endovenoso e manutenção do PaCO2 maior que 45mmHg."
    ],
    "correctAnswer": 0,
    "explanation": "Crise convulsiva após TCE: além de interromper a crise com benzodiazepínico, a fenitoína endovenosa (ataque de 15–20 mg/kg) é a droga clássica para controlar e prevenir novas crises pós-traumáticas precoces (primeira semana), que aumentam a demanda metabólica e a pressão intracraniana. O levetiracetam é alternativa.\n\nNa ventilação, o alvo é normocapnia (PaCO₂ 35–40 mmHg). A hiperventilação reduz a PIC por vasoconstrição, mas também reduz o fluxo sanguíneo cerebral e pode causar isquemia; só é usada brevemente como resgate em sinais de herniação.",
    "commentary": "Fenobarbital e PaCO₂ 35–40 (B): a ventilação está certa, mas o fenobarbital causa mais sedação, depressão respiratória e hipotensão, atrapalhando a avaliação neurológica; não é a escolha no TCE.\n\nFenitoína e PaCO₂ < 30 (C): hiperventilação profilática piora a isquemia cerebral.\n\nFenobarbital e PaCO₂ > 45 (D): hipercapnia causa vasodilatação cerebral e aumenta a pressão intracraniana.",
    "tip": "TCE com convulsão: fenitoína (ou levetiracetam) e PaCO₂ 35–40. Hiperventilar só na herniação, por pouco tempo.",
    "reference": "Kochanek PM et al. Guidelines for the Management of Pediatric Severe Traumatic Brain Injury, Third Edition. Pediatr Crit Care Med, 2019.",
    "tags": [
      "traumatismo cranioencefálico",
      "crise convulsiva",
      "fenitoína",
      "normocapnia"
    ]
  },
  {
    "id": "dante2026-42",
    "topography": "11",
    "topic": "Diarreia aguda",
    "module": "Pediatria",
    "text": "Menino, de 10 meses de idade, é levado ao pronto-socorro por diarreia aquosa há 24 horas, com 5 episódios ao dia. O pai nega presença de sangue ou muco. O bebê está ativo, chorando com lágrimas. Apresenta mucosas úmidas, com turgor de pele preservado, sem sinais de choque. O pai refere recusa alimentar parcial, principalmente de sólidos, mas aceita líquidos. Nega vômitos.\n\nQual é a classificação e qual é a conduta correta para este paciente?",
    "options": [
      "Sem desidratação. Líquidos caseiros ou sais de reidratação oral 50-100mL após cada episódio de diarreia e zinco 20mg/dia.",
      "Desidratação leve. Sais de reidratação oral 50mL/kg em 4 horas, oferta livre de outros líquidos e zinco 10mg/dia.",
      "Desidratação moderada. Sais de reidratação oral no estabelecimento de saúde, 50-100mL/kg em 4 a 6 horas, com controle de diurese.",
      "Desidratação grave. Soro fisiológico 0,9% 30mL/kg em 1 hora, depois administrar 70mL/kg em 3 horas, seguido de soro de manutenção basal."
    ],
    "correctAnswer": 0,
    "explanation": "Lactente com diarreia aquosa, ativo, chorando com lágrimas, mucosas úmidas, turgor preservado e aceitando líquidos: sem sinais de desidratação — Plano A do Ministério da Saúde.\n\nPlano A (tratamento em casa):\n\n• Oferecer mais líquidos (soro de reidratação oral, líquidos caseiros) após cada evacuação: 50–100 mL até 1 ano, 100–200 mL de 1 a 10 anos.\n• Manter a alimentação habitual e o aleitamento.\n• Zinco por 10–14 dias: 10 mg/dia até 6 meses, 20 mg/dia acima de 6 meses.\n• Orientar sinais de alarme para retorno.",
    "commentary": "Desidratação leve com 50 mL/kg em 4 horas (B): não há sinais de desidratação; e a dose de zinco acima de 6 meses é 20 mg/dia.\n\nDesidratação moderada, Plano B (C): o Plano B (TRO na unidade, 50–100 mL/kg em 4–6 h) exige 2 sinais de desidratação (inquietação, olhos fundos, sede, sinal da prega lento), ausentes aqui.\n\nDesidratação grave, Plano C (D): reservado para letargia, incapacidade de beber, sinal da prega muito lento ou choque.",
    "tip": "Diarreia sem desidratação = Plano A: líquidos após cada evacuação, manter dieta e zinco (10 mg < 6 m; 20 mg ≥ 6 m) por 10–14 dias.",
    "reference": "Ministério da Saúde. Manejo do paciente com diarreia (cartaz Planos A, B e C), 2023. Sociedade Brasileira de Pediatria. Diarreia aguda: diagnóstico e tratamento, 2017.",
    "tags": [
      "diarreia aguda",
      "desidratação",
      "terapia de reidratação oral",
      "zinco"
    ]
  },
  {
    "id": "dante2026-43",
    "topography": "11",
    "topic": "Pneumonia infantil",
    "module": "Pediatria",
    "text": "Menino, de 13 anos de idade, é levado ao pronto-socorro por sua mãe por quadro de tosse seca persistente, cefaleia e febre baixa intermitente há 10 dias. Já fez uso de lavagem nasal com soro fisiológico 0,9% e xaropes caseiros, sem melhora. Nega otalgia e espirros. Nega comorbidades prévias. Ao exame físico, apresenta-se em bom estado geral, eupneico, com saturação periférica de oxigênio adequada. A ausculta pulmonar apresenta estertores finos dispersos bilateralmente. Realizou radiografia de tórax para elucidação diagnóstica.\n\nAssinale a alternativa que contém o achado esperado no exame de imagem, diagnóstico, agente etiológico e tratamento corretos para este paciente:",
    "options": [
      "Consolidação retrocardíaca. Pneumonia bacteriana por Streptococcus pneumoniae. Amoxicilina por 7 dias.",
      "Aumento da trama vascular pulmonar. Crise de asma por Rinovírus. Salbutamol inalatório por 5 dias.",
      "Infiltrado intersticial difuso. Pneumonia atípica por Mycoplasma pneumoniae. Azitromicina por 5 dias.",
      "Pequena área de atelectasia. Crise de asma por Rinovírus. Azitromicina, prednisolona e salbutamol por 5 dias."
    ],
    "correctAnswer": 2,
    "explanation": "Adolescente de 13 anos com tosse seca persistente, cefaleia e febre baixa há 10 dias, bom estado geral, saturação normal e estertores finos difusos — dissociação entre exame/estado geral e a ausculta: quadro de pneumonia atípica.\n\nO agente mais comum em escolares e adolescentes é o Mycoplasma pneumoniae. A radiografia costuma mostrar infiltrado intersticial difuso, frequentemente mais extenso do que o exame sugere. O tratamento é com macrolídeo: azitromicina por 5 dias (10 mg/kg no 1º dia e 5 mg/kg do 2º ao 5º).",
    "commentary": "Consolidação, pneumococo e amoxicilina (A): a pneumonia pneumocócica tem início mais abrupto, febre alta, toxemia e consolidação lobar.\n\nTrama vascular aumentada e crise de asma por rinovírus (B): não há sibilância nem história de asma; a crise não tem febre por 10 dias e estertores difusos.\n\nAtelectasia, asma por rinovírus e azitromicina com corticoide (D): mistura diagnósticos; azitromicina não trata rinovírus.",
    "tip": "Escolar/adolescente, tosse seca arrastada, febre baixa, cefaleia, bom estado geral e infiltrado intersticial = Mycoplasma → azitromicina 5 dias.",
    "reference": "Sociedade Brasileira de Pediatria. Documento científico: Pneumonia adquirida na comunidade na infância, 2018. Bradley JS et al. IDSA/PIDS Guideline: Community-Acquired Pneumonia in Infants and Children, 2011.",
    "tags": [
      "pneumonia atípica",
      "pneumonia por Mycoplasma",
      "azitromicina",
      "pediatria"
    ]
  },
  {
    "id": "dante2026-44",
    "topography": "14",
    "topic": "Parada cardiorrespiratória",
    "module": "Pediatria",
    "text": "Menino, de 7 meses de idade, é encontrado inconsciente na sala de aula, sem respiração e sem pulso central palpável. Imediatamente, a professora chamou a equipe de atendimento médico da escola, que chegou em poucos segundos e realizou a monitorização cardíaca do paciente com o desfibrilador, sendo mostrado atividade elétrica organizada.\n\nQual é a sequência correta da ressuscitação cardiopulmonar?",
    "options": [
      "Iniciar compressões torácicas imediatas com frequência de 100 a 120 compressões por minuto, profundidade de um terço do tórax e relação de 15 compressões para 2 ventilações, permitindo retorno completo do tórax. Puncionar acesso venoso periférico e administrar adrenalina 0,1mg/kg via endovenosa. Checar ritmo e pulso após 2 minutos.",
      "Garantir via aérea pérvia, com melhor posicionamento de cabeça e pescoço. Iniciar ventilação com dispositivo bolsa-válvula-máscara ligado a fonte de oxigênio, com ventilações de um segundo e frequência de 20 a 30 ventilações por minuto, durante 2 minutos. Então, checar novamente ritmo e pulso.",
      "Fazer desfibrilação imediata, com carga de 2J/kg e imediatamente iniciar compressões torácicas com frequência de 100 a 120 compressões por minuto e profundidade de um terço do tórax. Puncionar acesso venoso periférico e administrar adrenalina 0,01mg/kg via endovenosa. Checar ritmo e pulso após 2 minutos.",
      "Iniciar compressões torácicas imediatas com frequência de 100 a 120 compressões por minuto, profundidade de 4cm no tórax e relação de 15 compressões para 2 ventilações. Puncionar acesso venoso periférico e administrar adrenalina 0,01mg/kg via endovenosa. Checar ritmo e pulso após 2 minutos."
    ],
    "correctAnswer": 3,
    "explanation": "Lactente sem pulso, com atividade elétrica organizada no monitor: atividade elétrica sem pulso (AESP), ritmo não chocável.\n\nConduta (PALS):\n\n• RCP de alta qualidade imediata: 100 a 120 compressões por minuto, profundidade de pelo menos 1/3 do diâmetro anteroposterior do tórax (cerca de 4 cm no lactente), retorno completo do tórax, 15:2 com dois socorristas.\n• Acesso venoso ou intraósseo e adrenalina 0,01 mg/kg (0,1 mL/kg da solução 1:10.000) o quanto antes, repetida a cada 3–5 minutos.\n• Checar ritmo a cada 2 minutos e buscar causas reversíveis (hipóxia é a principal em crianças).",
    "commentary": "Adrenalina 0,1 mg/kg (A): a dose está 10 vezes maior; 0,1 mg/kg era usada antigamente apenas por via endotraqueal.\n\nSó ventilação por 2 minutos (B): conduta para bradicardia ou parada respiratória com pulso; sem pulso, é preciso comprimir.\n\nDesfibrilação (C): AESP não é ritmo chocável; o choque é para fibrilação ventricular e taquicardia ventricular sem pulso.",
    "tip": "AESP/assistolia: RCP + adrenalina 0,01 mg/kg o quanto antes, a cada 3–5 min. Não chocar.",
    "reference": "Topjian AA et al. Part 4: Pediatric Basic and Advanced Life Support: 2020 American Heart Association Guidelines. Circulation, 2020.",
    "tags": [
      "parada cardiorrespiratória",
      "AESP",
      "adrenalina",
      "PALS"
    ]
  },
  {
    "id": "dante2026-45",
    "topography": "11",
    "topic": "Cardiopatias congênitas",
    "module": "Pediatria",
    "text": "Recém-nascido de 39 semanas de idade gestacional, nascido de parto vaginal, no momento com 36 horas de vida, apresenta-se em boas condições gerais. Na avaliação de rotina, realiza-se o teste do coraçãozinho, com o seguinte resultado: saturação periférica de oxigênio (SatO2) na mão direita de 97% e SatO2 no pé direito de 92%. Ao exame clínico, nota-se ausculta cardíaca com ritmo regular, em 2 tempos, com bulhas normofonéticas e discreto sopro contínuo em região infraclavicular. Os pulsos estão normais e palpáveis em membros superiores e reduzidos em membros inferiores.\n\nCom base nos valores do teste do coraçãozinho, qual é o resultado e qual é a conduta inicial?",
    "options": [
      "Teste duvidoso. Repetir o exame em 1 hora.",
      "Teste negativo. Alta com seguimento ambulatorial.",
      "Teste positivo. Solicitar ecocardiograma.",
      "Teste duvidoso. Observação em alojamento conjunto."
    ],
    "correctAnswer": 0,
    "explanation": "Teste do coraçãozinho entre 24 e 48 horas de vida: medir SatO₂ na mão direita (pré-ductal) e em um dos pés (pós-ductal).\n\nPelo protocolo do Ministério da Saúde/SBP:\n\n• Normal: SatO₂ ≥ 95% nas duas medidas e diferença < 3%.\n• Alterado: SatO₂ < 95% em qualquer medida ou diferença ≥ 3%. Repete-se em 1 hora; se continuar alterado, ecocardiograma em 24 horas, e o RN não recebe alta.\n\nAqui o pé tem 92% (< 95%) e a diferença é de 5%: resultado alterado na primeira medida, então repetir em 1 hora. (Pelo algoritmo americano, esse resultado é chamado de duvidoso, com a mesma conduta.)",
    "commentary": "Negativo com alta (B): SatO₂ de 92% e diferença de 5% são alterações.\n\nPositivo com ecocardiograma direto (C): pelo protocolo, uma primeira medida alterada deve ser repetida em 1 hora; o ecocardiograma vem se a alteração persistir. (Saturação < 90% indicaria ecocardiograma direto.)\n\nDuvidoso com observação no alojamento (D): o reteste em 1 hora é obrigatório; não basta observar.",
    "tip": "Teste do coraçãozinho: ≥ 95% e diferença < 3% = normal. Alterado → repetir em 1 h → persistiu → ecocardiograma.",
    "reference": "Sociedade Brasileira de Pediatria. Diagnóstico precoce de cardiopatia congênita crítica: oximetria de pulso como ferramenta de triagem neonatal, 2011. Ministério da Saúde. Portaria nº 20/2014.",
    "tags": [
      "teste do coraçãozinho",
      "oximetria de pulso",
      "cardiopatia congênita crítica",
      "triagem neonatal"
    ]
  },
  {
    "id": "dante2026-46",
    "topography": "11",
    "topic": "Cardiopatias congênitas",
    "module": "Pediatria",
    "text": "Recém-nascido de 39 semanas de idade gestacional, nascido de parto vaginal, no momento com 36 horas de vida, apresenta-se em boas condições gerais. Na avaliação de rotina, realiza-se o teste do coraçãozinho, com o seguinte resultado: saturação periférica de oxigênio (SatO2) na mão direita de 97% e SatO2 no pé direito de 92%. Ao exame clínico, nota-se ausculta cardíaca com ritmo regular, em 2 tempos, com bulhas normofonéticas e discreto sopro contínuo em região infraclavicular. Os pulsos estão normais e palpáveis em membros superiores e reduzidos em membros inferiores.\n\nConsiderando o resultado do teste e o exame físico descritos, qual é a cardiopatia congênita mais provável para este paciente?",
    "options": [
      "Transposição das grandes artérias",
      "Coarctação de aorta crítica",
      "Atresia pulmonar com septo íntegro",
      "Tronco arterial comum"
    ],
    "correctAnswer": 1,
    "explanation": "Saturação menor no pé que na mão direita (cianose diferencial), pulsos reduzidos nos membros inferiores e normais nos superiores, com sopro contínuo infraclavicular (canal arterial patente): coarctação crítica da aorta.\n\nNa coarctação crítica, a circulação para a parte inferior do corpo depende do canal arterial, que leva sangue pouco oxigenado do tronco pulmonar para a aorta descendente. Quando o canal fecha (primeiros dias), o RN pode evoluir com choque, acidose e insuficiência renal.\n\nConduta: prostaglandina E1 para manter o canal aberto, ecocardiograma e correção cirúrgica.",
    "commentary": "Transposição das grandes artérias (A): causa cianose intensa e generalizada, geralmente com saturação mais baixa na mão (diferencial reverso), e não reduz pulsos femorais.\n\nAtresia pulmonar com septo íntegro (C): cianose generalizada importante, dependente do canal para o fluxo pulmonar; não há diferença de pulsos entre membros.\n\nTronco arterial comum (D): mistura completa, com saturação semelhante em mão e pé, pulsos amplos e insuficiência cardíaca.",
    "tip": "SatO₂ do pé < mão + pulsos femorais fracos = coarctação de aorta crítica → prostaglandina E1.",
    "reference": "Sociedade Brasileira de Pediatria. Tratado de Pediatria, 5ª ed. Cardiopatias congênitas críticas.",
    "tags": [
      "coarctação de aorta",
      "cardiopatia congênita crítica",
      "prostaglandina"
    ]
  },
  {
    "id": "dante2026-47",
    "topography": "11",
    "topic": "Puericultura",
    "module": "Pediatria",
    "text": "Menina, de um mês de vida, é levada para a primeira consulta médica na Unidade Básica de Saúde. A criança nasceu de parto normal sem intercorrências e com os seguintes dados antropométricos: peso de 2450g, estatura de 45cm e perímetro cefálico de 34cm. A mãe tem 29 anos de idade e esta foi sua primeira gestação. Fez pré-natal regular e apresentou infecção urinária tratada com 37 semanas de gestação. A mãe relata que o bebê está em aleitamento materno exclusivo. Ao exame físico, a criança está em bom estado geral, com ganho de 27 gramas ao dia, cresceu 3,5cm e o perímetro cefálico aumentou 2cm no período.\n\nQual é o diagnóstico e a conduta correta para esta criança?",
    "options": [
      "Prematuridade e baixo ganho pondero-estatural. Programação de retorno em uma semana.",
      "Pequena para idade gestacional e bom ganho pôndero-estatural. Programação de retorno de rotina em um mês.",
      "Pequena para idade gestacional e regular ganho pôndero-estatural. Programação de retorno em uma semana.",
      "Baixo peso ao nascer e bom ganho pôndero-estatural. Programação de retorno de rotina em um mês."
    ],
    "correctAnswer": 3,
    "explanation": "Nasceu com 2450 g: baixo peso ao nascer (< 2500 g). A idade gestacional não foi informada, então não é possível classificar como prematura nem como pequena para a idade gestacional (que exige peso abaixo do percentil 10 para a idade gestacional).\n\nNo primeiro mês, ganhou 27 g/dia (esperado: 20–30 g/dia no 1º trimestre), cresceu 3,5 cm e o perímetro cefálico aumentou 2 cm: bom ganho pôndero-estatural. Em aleitamento exclusivo e com bom ganho, o retorno de rotina é suficiente.",
    "commentary": "Prematuridade com baixo ganho (A): não há dado de idade gestacional, e o ganho de 27 g/dia é bom.\n\nPequena para idade gestacional com bom ganho (B): sem a idade gestacional, não se pode afirmar que é PIG; o dado disponível é apenas o peso < 2500 g.\n\nPIG com ganho regular (C): mesmo problema de classificação, e o ganho é bom, não regular.",
    "tip": "< 2500 g = baixo peso ao nascer (independe da IG). PIG exige peso < p10 para a IG. Ganho esperado no 1º trimestre: 20–30 g/dia.",
    "reference": "Ministério da Saúde. Caderneta da Criança, 2024. Cadernos de Atenção Básica nº 33 – Saúde da Criança: crescimento e desenvolvimento, 2012.",
    "tags": [
      "baixo peso ao nascer",
      "crescimento",
      "puericultura"
    ]
  },
  {
    "id": "dante2026-48",
    "topography": "1.1",
    "topic": "Encefalite",
    "module": "Pediatria",
    "text": "Menino, de 8 anos de idade, apresenta febre e cefaleia progressiva há dois dias. É admitido no pronto-socorro com confusão mental, apresentando uma convulsão tônico-clônica generalizada com duração de 6 minutos, revertida com administração de midazolam. Os pais negam outros sintomas atuais ou nos últimos dias. A tomografia de crânio está normal. A punção lombar mostra líquido límpido, com 18 células/mm³ (predomínio linfocitário), proteína de 80mg/dL e glicose de 60mg/dL (glicemia capilar 90mg/dL). Foi coletada cultura do líquor e painel molecular de meningoencefalites no líquor.\n\nDiante da principal hipótese diagnóstica para este caso, qual é a conduta inicial correta?",
    "options": [
      "Aguardar o resultado da cultura e painel molecular para definição do tratamento.",
      "Iniciar antibiótico de amplo espectro endovenoso e repetir tomografia de crânio em 24 horas.",
      "Iniciar imediatamente aciclovir endovenoso, sem aguardar a confirmação do painel molecular no líquor.",
      "Iniciar corticoide endovenoso, sem aguardar confirmação do painel molecular no líquor, e observar evolução clínica por 24 horas."
    ],
    "correctAnswer": 2,
    "explanation": "Febre, cefaleia, confusão mental e convulsão, com tomografia normal e líquor com pleocitose linfocitária discreta, proteína elevada e glicose normal: meningoencefalite viral, cuja principal causa tratável é o herpes simples tipo 1.\n\nA encefalite herpética tem alta mortalidade e sequelas sem tratamento, e o prognóstico depende de iniciar cedo. Por isso o aciclovir endovenoso (10 mg/kg a cada 8 horas, 20 mg/kg em crianças pequenas) deve ser começado imediatamente diante da suspeita, sem esperar o PCR do líquor. Tratamento por 14 a 21 dias se confirmado.",
    "commentary": "Aguardar cultura e painel (A): o atraso no aciclovir aumenta mortalidade e sequelas.\n\nAntibiótico de amplo espectro e nova TC (B): o líquor não sugere meningite bacteriana (glicose normal, linfócitos, poucas células); a TC repetida não muda a conduta. Em dúvida, antibiótico pode ser associado, mas sem o aciclovir a conduta está errada.\n\nCorticoide e observação (D): corticoide não é tratamento da encefalite herpética e não substitui o aciclovir.",
    "tip": "Febre + alteração do comportamento/convulsão + líquor linfocitário = aciclovir EV já, sem esperar o PCR.",
    "reference": "Tunkel AR et al. The Management of Encephalitis: Clinical Practice Guidelines by the IDSA. Clin Infect Dis, 2008. Sociedade Brasileira de Pediatria. Encefalites na infância.",
    "tags": [
      "encefalite herpética",
      "aciclovir",
      "meningoencefalite",
      "líquor"
    ]
  },
  {
    "id": "dante2026-49",
    "topography": "5.2",
    "topic": "Infecções na gestação",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher gestante de 29 anos, primigesta, previamente hígida, comparece ao ambulatório de pré-natal para avaliação dos exames solicitados na primeira consulta. Está assintomática no momento. Os resultados dos exames sorológicos realizados podem ser vistos a seguir:\n\n• HIV: não reagente\n• HBsAg: não reagente\n• Anti-HCV: não reagente\n• VDRL: não reagente\n• FTA-Abs: reagente\n• Toxoplasmose IgG: reagente\n• Toxoplasmose IgM: não reagente\n• HTLV 1/2: reagente\n• Rubéola IgG: não reagente\n• Rubéola IgM: não reagente\n\nQual é a alternativa correta acerca da infecção pelo HTLV nesta paciente?",
    "options": [
      "A infecção e as doenças associadas ao HTLV não são de notificação compulsória no país.",
      "O diagnóstico é semelhante ao da infecção pelo HIV. Realiza-se triagem com WESTERN-BLOT e, se positivo, realiza-se teste confirmatório com ELISA.",
      "A sorologia para HTLV não é obrigatória no pré-natal, sendo indicada nas gestantes que são profissionais de saúde ou têm contato com crianças em idade pré-escolar.",
      "As principais formas de infecção são a transmissão sexual, o compartilhamento de agulhas e seringas e a transmissão vertical."
    ],
    "correctAnswer": 3,
    "explanation": "HTLV-1/2 reagente no pré-natal. O HTLV é um retrovírus transmitido por:\n\n• Via sexual.\n• Sangue (transfusão, compartilhamento de agulhas e seringas).\n• Transmissão vertical, principalmente pelo aleitamento materno prolongado; a transmissão na gestação e no parto é menos frequente.\n\nA maioria dos infectados é assintomática, mas parte desenvolve leucemia/linfoma de células T do adulto ou mielopatia (paraparesia espástica tropical).",
    "commentary": "Não é de notificação compulsória (A): desde 2024 a infecção pelo HTLV em gestantes, parturientes, puérperas e crianças expostas é de notificação compulsória no Brasil.\n\nTriagem com Western blot e confirmação com ELISA (B): a ordem é inversa — triagem com imunoensaio (ELISA/quimioluminescência) e confirmação com Western blot ou PCR.\n\nSorologia só para profissionais de saúde ou contato com crianças (C): a testagem para HTLV foi incluída na rotina do pré-natal para todas as gestantes (Rede Alyne, 2024).",
    "tip": "HTLV: transmissão sexual, sanguínea e vertical (sobretudo amamentação). Triagem por imunoensaio, confirmação por Western blot/PCR. Notificação compulsória desde 2024.",
    "reference": "Ministério da Saúde. Guia de manejo clínico da infecção pelo HTLV, 2021. Inclusão da infecção pelo HTLV na Lista Nacional de Notificação Compulsória, 2024.",
    "tags": [
      "HTLV",
      "pré-natal",
      "transmissão vertical",
      "notificação compulsória"
    ]
  },
  {
    "id": "dante2026-50",
    "topography": "5.2",
    "topic": "Infecções na gestação",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher gestante de 29 anos, primigesta, previamente hígida, comparece ao ambulatório de pré-natal para avaliação dos exames solicitados na primeira consulta. Está assintomática no momento. Os resultados dos exames sorológicos realizados podem ser vistos a seguir:\n\n• HIV: não reagente\n• HBsAg: não reagente\n• Anti-HCV: não reagente\n• VDRL: não reagente\n• FTA-Abs: reagente\n• Toxoplasmose IgG: reagente\n• Toxoplasmose IgM: não reagente\n• HTLV 1/2: reagente\n• Rubéola IgG: não reagente\n• Rubéola IgM: não reagente\n\nQual orientação deve ser dada à gestante com relação à sorologia positiva para HTLV?",
    "options": [
      "A principal forma de transmissão vertical é pelo aleitamento, sendo uma contraindicação absoluta de amamentação.",
      "Se houver carga viral detectável no terceiro trimestre, está contraindicado o parto vaginal.",
      "O uso de dolutegravir durante a gestação impedirá que ocorra a transmissão vertical.",
      "Está indicada a realização de cesariana eletiva para redução do risco de transmissão vertical."
    ],
    "correctAnswer": 0,
    "explanation": "Na gestante com HTLV, a principal via de transmissão para o filho é o aleitamento materno: o vírus está nos linfócitos do leite, e o risco aumenta com a duração da amamentação (até 20–30% com amamentação prolongada).\n\nPor isso, a amamentação é contraindicada: a criança deve receber fórmula infantil (disponibilizada pelo SUS), e a mãe recebe inibição da lactação (cabergolina). A via de parto segue a indicação obstétrica.",
    "commentary": "Cesárea se carga viral detectável (B): não há recomendação de cesárea pela carga viral do HTLV; essa lógica é do HIV.\n\nDolutegravir (C): antirretrovirais não têm eficácia comprovada para prevenir a transmissão do HTLV; o dolutegravir é usado no HIV.\n\nCesárea eletiva (D): não reduz de forma comprovada a transmissão, que ocorre sobretudo pelo leite.",
    "tip": "Gestante com HTLV: não amamentar (fórmula + cabergolina). Parto pela indicação obstétrica.",
    "reference": "Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas para Prevenção da Transmissão Vertical de HIV, Sífilis, Hepatites Virais e HTLV, 2022.",
    "tags": [
      "HTLV",
      "aleitamento materno",
      "transmissão vertical",
      "inibição da lactação"
    ]
  },
  {
    "id": "dante2026-51",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher gestante de 29 anos, primigesta, previamente hígida, comparece ao ambulatório de pré-natal para avaliação dos exames solicitados na primeira consulta. Está assintomática no momento. Os resultados dos exames sorológicos realizados podem ser vistos a seguir:\n\n• HIV: não reagente\n• HBsAg: não reagente\n• Anti-HCV: não reagente\n• VDRL: não reagente\n• FTA-Abs: reagente\n• Toxoplasmose IgG: reagente\n• Toxoplasmose IgM: não reagente\n• HTLV 1/2: reagente\n• Rubéola IgG: não reagente\n• Rubéola IgM: não reagente\n\nCom relação ao resultado das outras sorologias, qual recomendação deve ser dada à gestante?",
    "options": [
      "Orientar sobre infecção atual por toxoplasmose, iniciar espiramicina e fornecer encaminhamento para medicina fetal.",
      "Vacinar com a tríplice viral durante a gestação para garantir proteção contra a rubéola.",
      "Iniciar imediatamente o tratamento para infecção primária de sífilis com penicilina benzatina intramuscular.",
      "Vacinar contra hepatite B durante a gestação, caso ainda não vacinada, sendo o esquema completo composto por 3 doses."
    ],
    "correctAnswer": 3,
    "explanation": "Interpretando as outras sorologias:\n\n• HBsAg não reagente, sem informação de vacinação: vacinar contra hepatite B na gestação (vacina inativada, segura), esquema de 3 doses (0, 1 e 6 meses).\n• Toxoplasmose IgG reagente e IgM não reagente: infecção antiga, gestante imune; não precisa de tratamento nem de nova sorologia.\n• VDRL não reagente com FTA-Abs reagente: geralmente cicatriz sorológica de sífilis tratada no passado (ou falso-positivo do teste treponêmico); não indica sífilis primária ativa. Na ausência de registro de tratamento, a conduta depende da história e do seguimento.\n• Rubéola IgG e IgM não reagentes: suscetível; a tríplice viral é contraindicada na gestação e deve ser feita no puerpério.",
    "commentary": "Toxoplasmose atual com espiramicina (A): IgG positiva com IgM negativa indica infecção antiga; não há infecção aguda.\n\nTríplice viral na gestação (B): vacinas de vírus vivo atenuado são contraindicadas na gestação; vacinar no puerpério.\n\nSífilis primária com penicilina (C): na sífilis primária, o VDRL costuma estar reagente e há cancro; teste treponêmico isolado positivo com VDRL negativo sugere sífilis passada.",
    "tip": "Gestante: hepatite B suscetível → vacinar (3 doses). Rubéola suscetível → tríplice viral só no puerpério. Toxo IgG+/IgM− = imune.",
    "reference": "Ministério da Saúde. PCDT para Prevenção da Transmissão Vertical de HIV, Sífilis e Hepatites Virais, 2022. Calendário Nacional de Vacinação da Gestante, 2025.",
    "tags": [
      "pré-natal",
      "sorologias na gestação",
      "vacinação na gestação",
      "hepatite B"
    ]
  },
  {
    "id": "dante2026-52",
    "topography": "5.2",
    "topic": "Restrição de crescimento fetal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher gestante, primigesta, previamente hígida, comparece à Unidade Básica de Saúde (UBS), pois deseja avaliação antecipada devido à preocupação com o resultado de um ultrassom realizado no dia anterior. Encontra-se com idade gestacional de 30 semanas e 4 dias pela data da última menstruação e 31 semanas e 2 dias pela primeira ultrassonografia. O laudo do exame apresenta a seguinte conclusão: “Gestação de feto único e vivo, com idade gestacional de 31 semanas e 1 dia. Peso fetal estimado no percentil 9 para a idade gestacional. Volume de líquido amniótico normal.”\n\nDiante dessa situação, qual é a conduta que deve ser adotada?",
    "options": [
      "Se a estatura materna for inferior a 1,55m, deve-se orientar que se trata de um feto pequeno constitucional e o seguimento pré-natal deve ser mantido como habitual.",
      "Tranquilizar a paciente, visto que a datação da ultrassonografia está incorreta, o que torna o peso fetal adequado para a idade gestacional.",
      "Informar e orientar a paciente sobre o quadro de restrição de crescimento fetal precoce e encaminhar para serviço pré natal de alto risco.",
      "Informar a paciente que pode ser mantido o seguimento com consultas na UBS, mas terá que fazer ultrassonografia obstétrica com doppler com frequência."
    ],
    "correctAnswer": 1,
    "explanation": "A idade gestacional deve ser definida pela data da última menstruação confirmada (ou corrigida) pela primeira ultrassonografia, de preferência no 1º trimestre. Uma vez definida, a idade gestacional não muda com exames posteriores: ultrassonografias tardias não servem para redatar.\n\nAqui, a DUM dá 30 semanas e 4 dias e a 1ª ultrassonografia, 31 semanas e 2 dias — diferença pequena, compatível com a margem do exame, e a idade gestacional fica definida. O exame atual calculou o percentil do peso para 31 semanas e 1 dia, idade estimada pela própria biometria fetal, e não pela datação correta. Com a datação certa, o peso fetal deixa de estar abaixo do percentil 10.\n\nAlém disso, mesmo um peso no percentil 9 isolado, com líquido e Doppler normais, não faz diagnóstico de restrição de crescimento.",
    "commentary": "Feto pequeno constitucional pela estatura materna (A): não existe esse critério; a decisão depende da datação correta e da avaliação do crescimento, não da altura da mãe.\n\nRestrição de crescimento precoce (C): a restrição é chamada de precoce quando diagnosticada antes de 32 semanas, mas exige critérios (peso < p3, ou < p10 com alteração de Doppler); e aqui o problema é de datação.\n\nSeguimento na UBS com Doppler frequente (D): parte do pressuposto de que há um feto pequeno; com a datação corrigida, o crescimento é adequado.",
    "tip": "Idade gestacional = DUM confirmada pela 1ª USG. Não redatar por ultrassom tardio. Percentil de peso só vale com a datação certa.",
    "reference": "FEBRASGO. Restrição de crescimento fetal – Protocolo nº 34, 2021. ACOG Committee Opinion nº 700: Methods for Estimating the Due Date, 2017.",
    "tags": [
      "datação da gestação",
      "restrição de crescimento fetal",
      "ultrassonografia obstétrica"
    ]
  },
  {
    "id": "dante2026-53",
    "topography": "15",
    "topic": "Saúde da mulher",
    "module": "Ginecologia e Obstetrícia",
    "text": "Em agosto de 2025 entrou em vigor a Lei nº 15.139/2025, que institui a Política Nacional de Humanização do Luto Materno e Parental. A lei garante acolhimento humanizado nos serviços de saúde para famílias que vivenciaram perda gestacional, óbito fetal ou óbito neonatal.\n\nConsiderando as disposições legais, qual das ações abaixo envolvendo mulheres que enfrentaram perda gestacional, por óbito fetal ou neonatal, mais se adequa aos termos desta lei?",
    "options": [
      "É garantida licença médica de 30 dias a partir da data da alta hospitalar após o parto.",
      "A puérpera pode ser alocada no alojamento conjunto, desde que em quarto separado das demais puérperas.",
      "É garantido o registro do recém-nascido natimorto incluindo nome e, se possível, impressões plantares e digitais.",
      "A alta precoce deve ser priorizada para evitar o contato prolongado da mãe com o ambiente hospitalar após o óbito fetal."
    ],
    "correctAnswer": 2,
    "explanation": "A Lei nº 15.139/2025 criou a Política Nacional de Humanização do Luto Materno e Parental. Entre os direitos que garante às famílias que vivem perda gestacional, óbito fetal ou neonatal estão:\n\n• Acomodação da mãe em ala separada das demais parturientes e puérperas com bebês.\n• Possibilidade de ver o bebê, despedir-se e ter acompanhante.\n• Registro do natimorto com nome, se a família desejar, e guarda de lembranças (impressões plantar e digital, mecha de cabelo, fotos).\n• Acompanhamento psicológico e investigação da causa do óbito.",
    "commentary": "Licença médica de 30 dias (A): a lei não cria esse prazo; os direitos trabalhistas seguem as regras próprias (licença-maternidade para natimorto após 23 semanas, por exemplo).\n\nAlojamento conjunto em quarto separado (B): a lei garante acomodação em ala separada das puérperas com recém-nascidos, não no alojamento conjunto.\n\nPriorizar a alta precoce (D): a lei busca acolhimento e tempo para o luto, não apressar a saída da mãe.",
    "tip": "Luto materno (Lei 15.139/2025): ala separada, despedida, nome do natimorto, lembranças (impressões, fotos) e apoio psicológico.",
    "reference": "Brasil. Lei nº 15.139/2025. Política Nacional de Humanização do Luto Materno e Parental.",
    "tags": [
      "luto materno",
      "óbito fetal",
      "humanização",
      "legislação"
    ]
  },
  {
    "id": "dante2026-54",
    "topography": "5.2",
    "topic": "Rotura prematura de membranas",
    "module": "Ginecologia e Obstetrícia",
    "text": "Durante o plantão, você é chamado para avaliar uma mulher gestante que chegou à unidade de emergência com queixa de contrações. Ela é primigesta, com idade gestacional de 36 semanas e 0 dia, previamente hígida e sem intercorrências no pré natal. Refere contrações dolorosas há 2 horas e perda de líquido amniótico em quantidade moderada há 8 horas. Nega sangramento vaginal, queixas urinárias ou febre, e relata boa movimentação fetal. Ao exame, está em bom estado geral, corada, hidratada e afebril. A pressão arterial está em 108x68mmHg, com frequência cardíaca de 78bpm e temperatura de 36,1ºC. A altura uterina é de 33cm e o batimento cardíaco fetal está em 141bpm. A dinâmica uterina demonstra duas contrações moderadas a cada dez minutos, com tônus uterino normal e movimentação fetal presente. Exame especular evidencia saída ativa de líquido claro com grumos. Ao toque vaginal, o colo se encontra pérvio para 4cm, de consistência média e medianizado.\n\nQuais condutas devem ser adotadas para essa paciente após a internação?",
    "options": [
      "Ampicilina endovenosa, coleta de hemograma e proteína C reativa.",
      "Betametasona intramuscular e ampicilina endovenosa.",
      "Ampicilina endovenosa e misoprostol vaginal.",
      "Betametasona intramuscular e terbutalina endovenosa."
    ],
    "correctAnswer": 0,
    "explanation": "Gestante de 36 semanas com rotura de membranas há 8 horas (líquido claro com grumos no especular) e em trabalho de parto (4 cm, contrações), sem sinais de infecção.\n\nConduta após a internação:\n\n• Profilaxia para estreptococo do grupo B com ampicilina (ou penicilina) endovenosa: indicada porque o parto é prematuro (< 37 semanas) e a pesquisa de GBS não é conhecida.\n• Hemograma e PCR para vigilância de corioamnionite.\n• Seguir a assistência ao trabalho de parto.\n\nCom 36 semanas e em trabalho de parto ativo, não há indicação de corticoide nem de tocólise.",
    "commentary": "Betametasona e ampicilina (B): o corticoide antenatal é indicado até 33 semanas e 6 dias; entre 34 e 36+6 semanas é controverso e não se aplica a quem já está em trabalho de parto ativo.\n\nAmpicilina e misoprostol (C): a paciente já está em trabalho de parto, sem necessidade de indução.\n\nBetametasona e terbutalina (D): tocólise é contraindicada na rotura de membranas acima de 34 semanas e em trabalho de parto avançado.",
    "tip": "RPMO ≥ 34 semanas: não fazer corticoide nem tocólise; profilaxia para GBS se status desconhecido ou < 37 semanas; vigiar infecção.",
    "reference": "FEBRASGO. Rotura prematura das membranas ovulares – Protocolo nº 26, 2021. ACOG Practice Bulletin nº 217: Prelabor Rupture of Membranes, 2020.",
    "tags": [
      "rotura prematura de membranas",
      "estreptococo do grupo B",
      "trabalho de parto prematuro"
    ]
  },
  {
    "id": "dante2026-55",
    "topography": "5.2",
    "topic": "Trabalho de parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Durante o plantão, você é chamado para avaliar uma mulher gestante que chegou à unidade de emergência com queixa de contrações. Ela é primigesta, com idade gestacional de 36 semanas e 0 dia, previamente hígida e sem intercorrências no pré natal. Refere contrações dolorosas há 2 horas e perda de líquido amniótico em quantidade moderada há 8 horas. Nega sangramento vaginal, queixas urinárias ou febre, e relata boa movimentação fetal. Ao exame, está em bom estado geral, corada, hidratada e afebril. A pressão arterial está em 108x68mmHg, com frequência cardíaca de 78bpm e temperatura de 36,1ºC. A altura uterina é de 33cm e o batimento cardíaco fetal está em 141bpm. A dinâmica uterina demonstra duas contrações moderadas a cada dez minutos, com tônus uterino normal e movimentação fetal presente. Exame especular evidencia saída ativa de líquido claro com grumos. Ao toque vaginal, o colo se encontra pérvio para 4cm, de consistência média e medianizado.\n\nAlém da realização das medidas de ressuscitação intrauterina, qual conduta deve ser tomada?",
    "options": [
      "A presença de desaceleração tardia com linha de base em taquicardia representa sofrimento fetal e o parto pela via mais rápida está indicado.",
      "Investigar se há sinais de corioamnionite pela avaliação dos sinais vitais maternos e do aspecto da secreção vaginal.",
      "Os achados sugerem excesso de movimentação fetal, portanto pode-se seguir com a assistência ao trabalho de parto e cardiotocografia intermitente.",
      "A presença de taquissistolia pode justificar a taquicardia fetal, logo deve-se proceder com hidratação venosa e, se foi prescrita, suspensão da ocitocina."
    ],
    "correctAnswer": 1,
    "explanation": "A cardiotocografia mostra frequência cardíaca fetal basal elevada (acima de 160 bpm, em torno de 170–180 bpm): taquicardia fetal.\n\nNuma gestante com rotura de membranas há mais de 8 horas e em trabalho de parto, a taquicardia fetal é um dos primeiros sinais de corioamnionite (infecção intra-amniótica), muitas vezes antes da febre materna. Além das medidas de ressuscitação intrauterina (decúbito lateral, hidratação, suspender ocitocina se houver), deve-se procurar sinais de infecção: febre e taquicardia materna, útero doloroso, secreção purulenta ou fétida, leucocitose.\n\nSe confirmada, antibiótico de amplo espectro e resolução da gestação, sem que a infecção por si indique cesárea.",
    "commentary": "Desaceleração tardia e parto imediato (A): o traçado não mostra desacelerações tardias recorrentes; a alteração principal é a taquicardia de base, que pede investigação da causa.\n\nExcesso de movimentação fetal (C): movimentação fetal causa acelerações transitórias, não taquicardia mantida; e o traçado exige atenção, não monitorização intermitente.\n\nTaquissistolia (D): não há mais de 5 contrações em 10 minutos descritas; a paciente tinha 2 contrações em 10 minutos.",
    "tip": "Taquicardia fetal (> 160 bpm) com bolsa rota = pensar em corioamnionite: checar febre, taquicardia materna, útero doloroso, secreção.",
    "reference": "FEBRASGO. Avaliação do bem-estar fetal intraparto. ACOG Committee Opinion nº 712: Intrapartum Management of Intraamniotic Infection, 2017.",
    "tags": [
      "cardiotocografia",
      "taquicardia fetal",
      "corioamnionite",
      "vitalidade fetal"
    ],
    "image": "/images/dante2026-55.webp"
  },
  {
    "id": "dante2026-56",
    "topography": "5.1",
    "topic": "Câncer de colo uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 34 anos, previamente hígida, com vida sexual ativa, comparece em consulta ambulatorial na unidade básica de saúde solicitando rastreamento de câncer de colo do útero após ter visto nas redes sociais que houve atualização nas recomendações nacionais.\n\nNo que tange a esse rastreio, de acordo com as novas recomendações do Ministério da Saúde, o que deve ser orientado?",
    "options": [
      "A conduta adequada para essa paciente é a coleta anual de colpocitologia oncótica associada à realização de DNA HPV a cada 5 anos.",
      "Fazer colpocitologia oncótica coletada por profissional de saúde. Caso apresente dois resultados normais, o teste poderá ser realizado a cada 3 anos.",
      "Indicar a realização de colpocitologia oncótica em associação à realização do teste de DNA HPV. Caso sejam normais, deve-se repetir a cada 3 anos.",
      "O rastreamento é indicado para essa paciente por meio da realização do teste de DNA HPV. Caso seja negativo, o exame deve ser realizado a cada 5 anos."
    ],
    "correctAnswer": 3,
    "explanation": "As Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero de 2025 adotaram o teste de DNA-HPV oncogênico como método primário de rastreamento, substituindo gradualmente a citologia.\n\nNo novo modelo:\n\n• Público: mulheres e pessoas com colo do útero de 25 a 64 anos.\n• Teste de DNA-HPV; se negativo, repetir a cada 5 anos.\n• Se positivo para HPV 16 ou 18: colposcopia direto.\n• Se positivo para outros tipos oncogênicos: citologia reflexa (na mesma amostra).",
    "commentary": "Citologia anual e DNA-HPV a cada 5 anos (A): não existe esse esquema; citologia anual não é recomendada em nenhum modelo.\n\nCitologia trienal após dois exames normais (B): era o modelo anterior, baseado em citologia, que está sendo substituído pelo DNA-HPV.\n\nCo-teste a cada 3 anos (C): o co-teste (citologia + HPV) não foi adotado no Brasil; aumenta custo sem ganho relevante em relação ao HPV isolado.",
    "tip": "Rastreio do colo (MS 2025): DNA-HPV de 25 a 64 anos; negativo → 5 anos; HPV 16/18 → colposcopia; outros → citologia reflexa.",
    "reference": "INCA/Ministério da Saúde. Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero – Parte I: rastreamento organizado utilizando testes moleculares para detecção de DNA-HPV oncogênico, 2025.",
    "tags": [
      "rastreamento",
      "câncer de colo uterino",
      "DNA-HPV"
    ]
  },
  {
    "id": "dante2026-57",
    "topography": "5.2",
    "topic": "Assistência ao parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "A imagem a seguir representa uma laceração ocorrida durante o parto vaginal, visualizada logo após a dequitação.\n\nCom base na figura e nas classificações de laceração perineal, segundo a profundidade e estruturas cometidas, assinale a alternativa correta:",
    "options": [
      "A lesão é uma laceração cujo reparo deve ser iniciado pela sutura da mucosa vaginal, sendo a realização do toque retal obrigatória após o procedimento.",
      "A lesão é uma laceração de terceiro grau, que acomete o esfíncter anal externo, mas preserva o esfíncter anal interno e a mucosa retal.",
      "A lesão é uma laceração de segundo grau, com comprometimento do músculo transverso superficial do períneo.",
      "A lesão ilustrada é compatível com laceração de quarto grau, pois há comprometimento da mucosa retal e do esfíncter anal."
    ],
    "correctAnswer": 3,
    "explanation": "A ilustração mostra uma laceração que se estende da vagina ao períneo e atinge o complexo do esfíncter anal e a mucosa do reto: laceração perineal de quarto grau.\n\nClassificação (RCOG):\n\n• 1º grau: pele e mucosa vaginal.\n• 2º grau: músculos do períneo, sem atingir o esfíncter anal.\n• 3º grau: esfíncter anal — 3a (< 50% do esfíncter externo), 3b (> 50% do externo), 3c (externo e interno).\n• 4º grau: esfíncter anal e mucosa retal.\n\nO reparo de 3º e 4º graus deve ser feito por profissional experiente, em centro cirúrgico, começando pela mucosa retal, depois o esfíncter interno, o externo, os músculos do períneo, a mucosa vaginal e a pele. Antibiótico profilático e laxativos no pós-parto.",
    "commentary": "Reparo começando pela mucosa vaginal (A): na lesão de 4º grau, o reparo começa pela mucosa retal; o toque retal é feito para avaliar e checar o reparo, mas a sequência descrita está errada.\n\nTerceiro grau (B): a imagem mostra lesão da mucosa retal, que caracteriza o quarto grau.\n\nSegundo grau (C): o segundo grau acomete os músculos do períneo sem atingir o esfíncter; aqui o esfíncter e o reto estão lesados.",
    "tip": "Laceração: 1º pele/mucosa; 2º músculos do períneo; 3º esfíncter anal (a/b/c); 4º esfíncter + mucosa retal. Reparo de dentro para fora.",
    "reference": "Royal College of Obstetricians and Gynaecologists. Green-top Guideline nº 29: The Management of Third- and Fourth-Degree Perineal Tears, 2015.",
    "tags": [
      "laceração perineal",
      "lesão do esfíncter anal",
      "assistência ao parto"
    ],
    "image": "/images/dante2026-57.webp"
  },
  {
    "id": "dante2026-58",
    "topography": "10",
    "topic": "Infecções sexualmente transmissíveis",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, de 25 anos, vem à unidade de emergência relatando ter sido vítima de violência sexual com penetração vaginal há aproximadamente 24 horas. Informa que não houve uso de preservativo na relação e desconhece o agressor. Informa que o evento foi agudo e nega histórico de vacinação para hepatite B, estando com as demais vacinas atualizadas. O exame físico está dentro da normalidade, sendo seu peso de 52kg.\n\nSegundo o PCDT-IST 2022, qual a conduta mais adequada neste momento?",
    "options": [
      "Fazer PEP para HIV; profilaxia para sífilis, gonorreia, clamídia e tricomoníase; vacina e imunoglobulina para hepatite B e anticoncepção de emergência.",
      "Aguardar os resultados das sorologias para HIV, sífilis e hepatites virais, adiando a profilaxia combinada até a confirmação laboratorial inicial.",
      "Indicar somente a anticoncepção de emergência devido à exposição ter ocorrido há menos de 72 horas, sem necessidade imediata das demais profilaxias.",
      "Instituir apenas a PEP para HIV neste momento e postergar as demais profilaxias até a obtenção dos resultados sorológicos iniciais."
    ],
    "correctAnswer": 0,
    "explanation": "Violência sexual com penetração vaginal desprotegida há 24 horas, agressor desconhecido, sem vacinação para hepatite B.\n\nAtendimento dentro de 72 horas (PCDT-IST 2022):\n\n• PEP para HIV (tenofovir + lamivudina + dolutegravir por 28 dias), iniciada o quanto antes, sem esperar resultados.\n• Profilaxia das IST bacterianas: penicilina benzatina (sífilis), ceftriaxona (gonorreia), azitromicina (clamídia) e metronidazol (tricomoníase, pode ser adiado).\n• Hepatite B: vacina e imunoglobulina humana anti-hepatite B (agressor desconhecido e vítima não vacinada).\n• Anticoncepção de emergência (levonorgestrel 1,5 mg) o quanto antes, até 5 dias.\n• Coleta de sorologias basais, sem que isso atrase as profilaxias.",
    "commentary": "Aguardar sorologias (B): as profilaxias têm eficácia que cai com o tempo (PEP do HIV até 72 horas); não se espera resultado.\n\nSó anticoncepção de emergência (C): deixa a vítima sem proteção contra HIV, hepatite B e outras IST.\n\nSó PEP para HIV (D): também é incompleto; as demais profilaxias são dadas no mesmo atendimento.",
    "tip": "Violência sexual < 72 h: PEP HIV + profilaxia de sífilis, gonorreia, clamídia e tricomoníase + vacina/IGHAHB + anticoncepção de emergência. Tudo no mesmo dia.",
    "reference": "Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com IST, 2022. PCDT para Profilaxia Pós-Exposição de Risco à Infecção pelo HIV, IST e Hepatites Virais.",
    "tags": [
      "violência sexual",
      "profilaxia pós-exposição",
      "IST",
      "anticoncepção de emergência"
    ]
  },
  {
    "id": "dante2026-59",
    "topography": "5.1",
    "topic": "Sangramento uterino anormal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 42 anos, secundigesta, previamente hígida, com antecedente de laqueadura tubária e sem desejo reprodutivo, comparece ao ambulatório de ginecologia referindo sangramento menstrual aumentado há quatro meses. Relata ciclos regulares que anteriormente apresentavam fluxo leve e duravam quatro dias, mas agora tem volume aumentado e duram nove dias, com episódios de sangramento em borra de café fora do período menstrual. Nega dismenorreia, dispareunia ou outras queixas. Durante a investigação foi realizada histeroscopia diagnóstica, cujo achado pode ser visto na imagem a seguir:\n\nQual é o diagnóstico?",
    "options": [
      "Adenomiose",
      "Mioma subseroso",
      "Pólipo endometrial",
      "Endometriose"
    ],
    "correctAnswer": 2,
    "explanation": "Mulher de 42 anos com sangramento menstrual aumentado e prolongado e sangramento intermenstrual. A histeroscopia mostra uma lesão de aspecto liso, róseo, alongado, com vasos finos na superfície, projetando-se na cavidade: pólipo endometrial.\n\nPólipos são crescimentos localizados do endométrio, causa frequente de sangramento intermenstrual (P do PALM-COEIN). O tratamento é a polipectomia histeroscópica, com estudo anatomopatológico.",
    "commentary": "Adenomiose (A): endométrio dentro do miométrio; causa útero aumentado e doloroso, dismenorreia e sangramento aumentado, sem lesão visível na cavidade à histeroscopia.\n\nMioma subseroso (B): projeta-se para fora do útero (serosa), não aparece na cavidade e raramente causa sangramento. O mioma submucoso aparece na histeroscopia como nódulo esbranquiçado, firme e mais arredondado.\n\nEndometriose (D): implantes fora do útero; não é vista na histeroscopia e cursa com dor (dismenorreia, dispareunia), que ela nega.",
    "tip": "Sangramento intermenstrual + lesão lisa, rósea e pediculada na histeroscopia = pólipo endometrial → polipectomia histeroscópica.",
    "reference": "Munro MG et al. FIGO classification system (PALM-COEIN) for causes of abnormal uterine bleeding, 2018. FEBRASGO. Sangramento uterino anormal – Protocolo, 2021.",
    "tags": [
      "pólipo endometrial",
      "histeroscopia",
      "sangramento uterino anormal"
    ],
    "image": "/images/dante2026-59.webp"
  },
  {
    "id": "dante2026-60",
    "topography": "10",
    "topic": "Infecções sexualmente transmissíveis",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 45 anos comparece ao atendimento ginecológico relatando lesões vulvares dolorosas há três dias, associadas a sensação de queimação, ardência e fisgadas no local. Refere que inicialmente surgiram bolhas, que evoluíram para essas feridas. Informa ter apresentado cinco episódios semelhantes no último ano. Ao exame, observa-se uma lesão ulcerada típica.\n\nConsiderando a principal hipótese diagnóstica, qual é o tratamento indicado?",
    "options": [
      "Iniciar o tratamento para o episódio atual com aciclovir 200mg, por via oral, 3 vezes ao dia por 5 dias.",
      "Iniciar terapia supressiva com aciclovir 400mg, por via oral, 2 vezes ao dia por até 12 meses.",
      "Iniciar o uso de valaciclovir 500mg, por via oral, 2 vezes ao dia por 5 dias, sem necessidade de manutenção.",
      "Iniciar o tratamento para o episódio atual com famciclovir 250mg, por via oral, 3 vezes ao dia por 10 dias."
    ],
    "correctAnswer": 1,
    "explanation": "Vesículas dolorosas que evoluem para úlceras, com ardor e pródromo de queimação, e cinco episódios semelhantes no último ano: herpes genital recorrente.\n\nCom seis ou mais recorrências por ano (contando o atual), está indicada terapia supressiva, que reduz a frequência das crises e a transmissão. Pelo PCDT-IST 2022: aciclovir 400 mg, 2 vezes ao dia, por até 6 meses, podendo se estender por até 2 anos, com reavaliação periódica. O gabarito considera o esquema por até 12 meses.",
    "commentary": "Aciclovir 200 mg 3 vezes ao dia por 5 dias (A): trata só o episódio atual (e a dose de recorrência no PCDT é 400 mg 3×/dia por 5 dias); não reduz as recorrências frequentes.\n\nValaciclovir por 5 dias sem manutenção (C): trata o episódio, mas ignora a indicação de supressão.\n\nFamciclovir por 10 dias (D): duração de primeiro episódio; não é a conduta para quem tem recorrências frequentes, e o famciclovir não está disponível no SUS.",
    "tip": "Herpes genital com ≥ 6 recorrências/ano: terapia supressiva (aciclovir 400 mg 12/12 h por meses).",
    "reference": "Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com IST, 2022.",
    "tags": [
      "herpes genital",
      "terapia supressiva",
      "aciclovir",
      "IST"
    ],
    "image": "/images/dante2026-60.webp"
  },
  {
    "id": "dante2026-61",
    "topography": "5.1",
    "topic": "Prolapso genital",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 73 anos comparece ao atendimento ginecológico com queixa de sensação de “bola na vagina”. Relata tratamento prévio com fisioterapia pélvica, sem melhora. Refere ter desconforto significativo, incluindo incômodo durante relação sexual. Após avaliação clínica e exame pélvico com POP-Q, indicou-se tratamento cirúrgico. Os achados do POP-Q podem ser vistos a seguir:\n\n• Aa: +1 | Ba: +1 | C: −8\n• gh: 2 | pb: 3 | TVL: 10\n• Ap: −3 | Bp: −3 | D: −10\n\nQual é a técnica cirúrgica mais adequada para o caso?",
    "options": [
      "Fazer dois pontos do ligamento útero sacro até a parte ipsilateral da cúpula vaginal e repetir esse passo no ligamento contralateral.",
      "Fazer a plicatura dos músculos puborretais com identificação de defeitos transversos e plicatura da fáscia e anel pericervical.",
      "Fazer incisão na parede vaginal anterior, separar os resquícios da fáscia existente nas bordas laterais e realizar a plicatura central.",
      "Fazer a exposição do promontório sacral com fixação de tela inabsorvível em Y ao nível de colo uterino e no promontório."
    ],
    "correctAnswer": 2,
    "explanation": "Interpretando o POP-Q:\n\n• Parede anterior: Aa +1 e Ba +1 — o ponto mais baixo da parede anterior está 1 cm além do hímen.\n• Ápice: C −8 e D −10 com comprimento vaginal total de 10 — colo e fundo de saco bem suspensos, ápice sem prolapso.\n• Parede posterior: Ap −3 e Bp −3 — posição normal.\n\nTrata-se de prolapso de parede anterior (cistocele) estágio II (ponto mais distal entre −1 e +1 cm em relação ao hímen), isolado. Após falha da fisioterapia e com sintomas, a cirurgia indicada é a colporrafia anterior: incisão na parede vaginal anterior, dissecção e plicatura central da fáscia pubocervical.",
    "commentary": "Fixação nos ligamentos uterossacros (A): técnica de suspensão do ápice (cúpula vaginal) para prolapso apical; o ápice desta paciente está normal.\n\nPlicatura dos puborretais e da fáscia retovaginal (B): corresponde à correção da parede posterior (retocele), que está normal.\n\nPromontofixação sacral com tela (D): cirurgia para prolapso apical avançado; seria excessiva para cistocele isolada estágio II.",
    "tip": "POP-Q: Aa/Ba = anterior; C/D = ápice; Ap/Bp = posterior. Corrija só o compartimento que está prolapsado.",
    "reference": "Bump RC et al. The standardization of terminology of female pelvic organ prolapse (POP-Q). Am J Obstet Gynecol, 1996. FEBRASGO. Prolapso genital – Protocolo, 2021.",
    "tags": [
      "prolapso genital",
      "POP-Q",
      "cistocele",
      "colporrafia anterior"
    ]
  },
  {
    "id": "dante2026-62",
    "topography": "5.1",
    "topic": "Vaginose bacteriana",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 20 anos comparece ao ambulatório referindo corrimento vaginal há uma semana, associado a odor fétido que se intensificou após relação sexual sem preservativo no dia anterior. Nega dor abdominal ou dispareunia. Ao exame, observa-se corrimento vaginal branco, homogêneo, com odor fétido após teste com hidróxido de potássio (KOH). O colo uterino apresenta epitélio preservado, sem alterações. Foi realizada microscopia do conteúdo vaginal, com achado apresentado na imagem a seguir:\n\nQual é o diagnóstico mais provável para essa paciente?",
    "options": [
      "Tricomoníase",
      "Candidíase vulvovaginal",
      "Vaginose bacteriana",
      "Vaginite descamativa"
    ],
    "correctAnswer": 2,
    "explanation": "Corrimento branco-acinzentado, homogêneo, com odor fétido que piora após a relação sexual (o sêmen alcalino libera aminas) e teste das aminas (KOH) positivo. A microscopia mostra uma célula epitelial recoberta por cocobacilos, com bordas apagadas: \"clue cell\" (célula-chave ou célula-guia).\n\nSão os critérios de Amsel (3 de 4): corrimento homogêneo, pH > 4,5, teste das aminas positivo e clue cells. Diagnóstico: vaginose bacteriana, por desequilíbrio da flora com predomínio de Gardnerella vaginalis e anaeróbios.\n\nTratamento: metronidazol 500 mg, 2 vezes ao dia, por 7 dias. Não é necessário tratar o parceiro.",
    "commentary": "Tricomoníase (A): corrimento amarelo-esverdeado, bolhoso, com colpite (colo em framboesa), e protozoários flagelados móveis no exame a fresco.\n\nCandidíase (B): corrimento branco grumoso, sem odor, com prurido intenso, pH normal (< 4,5) e hifas ou pseudo-hifas na microscopia.\n\nVaginite descamativa (D): corrimento purulento com muitas células inflamatórias e células parabasais, pH alto, com dispareunia; sem clue cells.",
    "tip": "Odor de peixe que piora após o sexo + KOH positivo + clue cells = vaginose bacteriana → metronidazol 7 dias.",
    "reference": "Ministério da Saúde. PCDT para Atenção Integral às Pessoas com IST, 2022. Workowski KA et al. CDC Sexually Transmitted Infections Treatment Guidelines, 2021.",
    "tags": [
      "vaginose bacteriana",
      "clue cells",
      "critérios de Amsel",
      "corrimento vaginal"
    ],
    "image": "/images/dante2026-62.webp"
  },
  {
    "id": "dante2026-63",
    "topography": "5.1",
    "topic": "Contracepção",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 23 anos comparece ao ambulatório após início de vida sexual, desejando um método contraceptivo eficaz e com baixo risco de falha. Refere antecedente de enxaqueca com aura e relata dificuldade importante para adesão a medicamentos de uso oral. Traz ultrassonografia transvaginal recém-realizada, não avaliada previamente, que pode ser vista na imagem a seguir:\n\nConsiderando o quadro atual, qual é o método contraceptivo de escolha para a paciente?",
    "options": [
      "Implante subdérmico",
      "Dispositivo intrauterino (DIU) com levonorgestrel",
      "Dispositivo intrauterino (DIU) de cobre e prata",
      "Anel vaginal"
    ],
    "correctAnswer": 0,
    "explanation": "Mulher de 23 anos com enxaqueca com aura, dificuldade de adesão a medicamentos orais e ultrassonografia transvaginal mostrando duas cavidades endometriais: malformação uterina (útero bicorno ou septado/didelfo).\n\nTrês pontos definem a escolha:\n\n• Enxaqueca com aura: contraindicação absoluta a métodos com estrogênio (categoria 4 da OMS) pelo risco de AVC — exclui o anel vaginal.\n• Malformação que distorce a cavidade uterina: contraindicação ao DIU (categoria 4 da OMS), por dificuldade de inserção, expulsão e falha.\n• Dificuldade de adesão: favorece método de longa duração.\n\nO implante subdérmico de etonogestrel atende a tudo: só progestagênio, longa duração (3 anos) e o método reversível mais eficaz.",
    "commentary": "DIU de levonorgestrel (B): seria excelente pela eficácia e ausência de estrogênio, mas a malformação uterina que distorce a cavidade o contraindica.\n\nDIU de cobre e prata (C): mesma contraindicação pela anatomia uterina.\n\nAnel vaginal (D): contém estrogênio, contraindicado na enxaqueca com aura.",
    "tip": "Enxaqueca com aura = nada de estrogênio. Cavidade uterina distorcida = nada de DIU. Sobra o implante.",
    "reference": "Organização Mundial da Saúde. Critérios Médicos de Elegibilidade para Uso de Métodos Anticoncepcionais, 5ª ed., 2015. FEBRASGO. Manual de Anticoncepção, 2021.",
    "tags": [
      "contracepção",
      "implante subdérmico",
      "enxaqueca com aura",
      "malformação uterina"
    ],
    "image": "/images/dante2026-63.webp"
  },
  {
    "id": "dante2026-64",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 29 anos comparece à unidade de emergência com quadro de dor pélvica que se iniciou subitamente há 1 hora, associada a náuseas e episódios de vômito, sem melhora após uso de sintomático. É nuligesta, não possui comorbidades, nega cirurgias abdominais prévias e relata que os hábitos urinário e intestinal estão normais. Usa dispositivo intrauterino hormonal (levonorgestrel 52mg) como método contraceptivo. Ao exame, tem fácies de dor, abdome doloroso em fossa ilíaca direita, com sinal de descompressão brusca positivo. Foram realizados exames laboratoriais, que evidenciaram: hemoglobina 12,2g/dL; leucócitos 5.490/mm³; plaquetas 230.000/mm³; razão normalizada internacional de 1,01 e hormônio gonadotrofina coriônica humano (B-HCG) indetectável. A paciente traz ressonância magnética de pelve realizada há 1 mês, que pode ser vista na imagem a seguir:\n\nQual é a principal hipótese diagnóstica e a conduta a ser realizada?",
    "options": [
      "Abdome agudo por cisto hemorrágico; indicado abordagem cirúrgica de urgência com o objetivo de preservação ovariana.",
      "Abdome agudo por torção anexial; indicado abordagem cirúrgica de urgência com o objetivo de preservação ovariana.",
      "Abdome agudo por gestação ectópica; indicado laparoscopia com salpingectomia imediata.",
      "Abdome agudo por abscesso tubo ovariano; indicada antibioticoterapia endovenosa devido à peritonite e avaliar necessidade de abordagem cirúrgica no seguimento."
    ],
    "correctAnswer": 1,
    "explanation": "Mulher jovem com dor pélvica súbita e intensa, náuseas e vômitos, sinal de irritação peritoneal, β-hCG negativo e sem leucocitose. A ressonância de 1 mês antes mostra uma lesão anexial cística volumosa.\n\nMassa anexial é o principal fator de risco para torção: o ovário aumentado gira sobre o próprio pedículo, interrompendo primeiro a drenagem venosa e depois o fluxo arterial. O quadro de dor súbita com vômitos numa paciente com massa anexial conhecida é torção anexial até prova em contrário.\n\nA conduta é laparoscopia de urgência com distorção do anexo e cistectomia, preservando o ovário sempre que possível — mesmo que pareça escurecido, ele costuma recuperar a função.",
    "commentary": "Cisto hemorrágico (A): pode causar dor aguda, mas geralmente é tratado de forma conservadora se estável; a massa prévia volumosa e os vômitos apontam para torção. O DIU hormonal, além disso, tende a reduzir cistos funcionais hemorrágicos ovulatórios.\n\nGravidez ectópica (C): β-hCG indetectável exclui.\n\nAbscesso tubo-ovariano (D): exige febre, leucocitose, corrimento e quadro de doença inflamatória pélvica; aqui os leucócitos são normais e não há febre.",
    "tip": "Dor pélvica súbita + vômitos + massa anexial = torção: laparoscopia de urgência, distorcer e preservar o ovário.",
    "reference": "ACOG Committee Opinion nº 783: Adnexal Torsion in Adolescents, 2019. FEBRASGO. Abdome agudo em ginecologia.",
    "tags": [
      "torção anexial",
      "abdome agudo ginecológico",
      "massa anexial",
      "laparoscopia"
    ],
    "image": "/images/dante2026-64.webp"
  },
  {
    "id": "dante2026-65",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Homem, de 38 anos de idade, pedreiro, procura a Unidade Básica de Saúde por dor na lombar “no centro das costas, embaixo”, há cerca de 8 meses. Dor em peso/fadiga, que piora ao final do dia e melhora com repouso, banho quente e analgésico comum que ele compra na farmácia. Refere formigamento ocasional em nádega direita “quando força muito”, mas nega perda de força ou queda do pé. Nega antecedentes pessoais ou familiares relevantes. Diz que “precisa fazer uma ressonância da coluna”, porque acha que pode estar com “bico de papagaio” e ter algo sério que o deixe \"travado\". Relata que está há 3 dias sem conseguir trabalhar por causa da dor e teme ser despedido: “Se eu travo, o patrão já arruma outro”.\n\nQual dos aspectos do Primeiro Componente do Método Clínico Centrado na Pessoa está mais comprometido neste caso?",
    "options": [
      "Funcionalidade",
      "Expectativas",
      "Sentimentos",
      "Ideias"
    ],
    "correctAnswer": 0,
    "explanation": "O Primeiro Componente do Método Clínico Centrado na Pessoa é explorar a saúde, a doença e a experiência da doença. A experiência é investigada pelo acrônimo SIFE:\n\n• Sentimentos (medos, preocupações).\n• Ideias (o que a pessoa acha que tem).\n• Funcionalidade (como a doença afeta a vida diária e o trabalho).\n• Expectativas (o que espera do médico).\n\nNo caso, todas aparecem: ideia de \"bico de papagaio\", expectativa de fazer ressonância, medo de ser despedido. Mas o aspecto mais comprometido é a funcionalidade: está há 3 dias sem conseguir trabalhar, e a dor ameaça seu sustento como pedreiro.",
    "commentary": "Expectativas (B): ele espera uma ressonância, mas isso não é o que está comprometido; é o que ele pede.\n\nSentimentos (C): o medo de ser despedido decorre justamente da perda de função; o comprometimento principal é a incapacidade de trabalhar.\n\nIdeias (D): a crença no \"bico de papagaio\" é uma ideia sobre a doença, não um prejuízo.",
    "tip": "Experiência da doença (SIFE): Sentimentos, Ideias, Funcionalidade, Expectativas. Não conseguir trabalhar = Funcionalidade.",
    "reference": "Stewart M et al. Medicina Centrada na Pessoa: transformando o método clínico, 3ª ed. Artmed, 2017.",
    "tags": [
      "método clínico centrado na pessoa",
      "SIFE",
      "medicina de família e comunidade"
    ]
  },
  {
    "id": "dante2026-66",
    "topography": "6.2",
    "topic": "Lombalgia",
    "module": "Saúde Coletiva",
    "text": "Homem, de 38 anos de idade, pedreiro, procura a Unidade Básica de Saúde por dor na lombar “no centro das costas, embaixo”, há cerca de 8 meses. Dor em peso/fadiga, que piora ao final do dia e melhora com repouso, banho quente e analgésico comum que ele compra na farmácia. Refere formigamento ocasional em nádega direita “quando força muito”, mas nega perda de força ou queda do pé. Nega antecedentes pessoais ou familiares relevantes. Diz que “precisa fazer uma ressonância da coluna”, porque acha que pode estar com “bico de papagaio” e ter algo sério que o deixe \"travado\". Relata que está há 3 dias sem conseguir trabalhar por causa da dor e teme ser despedido: “Se eu travo, o patrão já arruma outro”.\n\nAo exame clínico, o paciente apresenta dor à palpação da musculatura paravertebral, sem alterações ao exame neurológico e com discreta limitação de movimentos da coluna devido à dor.\n\nQual é a hipótese diagnóstica inicial mais provável para este paciente, considerando os dados clínicos e epidemiológicos?",
    "options": [
      "Espondilite anquilosante",
      "Osteoartrose de coluna",
      "Lombalgia mecânica",
      "Ruptura de hérnia discal"
    ],
    "correctAnswer": 2,
    "explanation": "Homem de 38 anos, trabalhador braçal, com dor lombar baixa há 8 meses, em peso, que piora no fim do dia e com esforço e melhora com repouso e calor; formigamento ocasional na nádega sem déficit neurológico; exame com dor paravertebral e sem sinais de alarme.\n\nÉ uma lombalgia mecânica inespecífica (crônica, por durar mais de 12 semanas), a causa da maior parte das dores lombares na APS. Não há necessidade de exame de imagem. O tratamento é manter-se ativo, exercício, analgesia, calor local e abordar os fatores psicossociais (medo de perder o emprego), que são os principais preditores de cronicidade.",
    "commentary": "Espondilite anquilosante (A): dor inflamatória — início antes dos 40, insidiosa, com rigidez matinal prolongada, piora com repouso e melhora com exercício; aqui é o contrário.\n\nOsteoartrose de coluna (B): mais comum após 50–60 anos; o \"bico de papagaio\" é achado radiológico frequente e pouco relacionado à dor.\n\nRuptura de hérnia discal (D): causaria dor irradiada para a perna (ciatalgia), com sinal de Lasègue positivo ou déficit neurológico; o formigamento ocasional na nádega não basta.",
    "tip": "Dor lombar mecânica, sem bandeiras vermelhas e sem déficit: lombalgia inespecífica — sem imagem, mantenha-se ativo.",
    "reference": "Qaseem A et al. Noninvasive Treatments for Acute, Subacute, and Chronic Low Back Pain: ACP Guideline, 2017. Gusso G, Lopes JMC. Tratado de Medicina de Família e Comunidade, 2ª ed.",
    "tags": [
      "lombalgia",
      "dor lombar mecânica",
      "atenção primária"
    ]
  },
  {
    "id": "dante2026-67",
    "topography": "6.2",
    "topic": "Lombalgia",
    "module": "Saúde Coletiva",
    "text": "Homem, de 38 anos de idade, pedreiro, procura a Unidade Básica de Saúde por dor na lombar “no centro das costas, embaixo”, há cerca de 8 meses. Dor em peso/fadiga, que piora ao final do dia e melhora com repouso, banho quente e analgésico comum que ele compra na farmácia. Refere formigamento ocasional em nádega direita “quando força muito”, mas nega perda de força ou queda do pé. Nega antecedentes pessoais ou familiares relevantes. Diz que “precisa fazer uma ressonância da coluna”, porque acha que pode estar com “bico de papagaio” e ter algo sério que o deixe \"travado\". Relata que está há 3 dias sem conseguir trabalhar por causa da dor e teme ser despedido: “Se eu travo, o patrão já arruma outro”.\n\nEm qual das situações abaixo seria indicada a solicitação de exames de imagem para complementar a investigação do quadro de dor lombar em caráter ambulatorial?",
    "options": [
      "Suspeita de fratura ou luxação associada a traumatismo recente.",
      "Concomitância com infecção por HIV.",
      "Suspeita de infecção óssea ativa.",
      "Anestesia em sela."
    ],
    "correctAnswer": 1,
    "explanation": "Exames de imagem na dor lombar só são indicados diante de sinais de alarme (bandeiras vermelhas). A pergunta é qual situação pede imagem em caráter ambulatorial (eletivo).\n\nImunossupressão — como a infecção pelo HIV — é bandeira vermelha para infecção (espondilodiscite, tuberculose) e neoplasia, e justifica investigação com exame de imagem programado, a partir do ambulatório.\n\nAs demais situações são urgências que exigem avaliação e imagem imediatas em serviço de emergência.",
    "commentary": "Suspeita de fratura ou luxação com trauma recente (A): é indicação de imagem, mas em caráter de urgência, não ambulatorial.\n\nSuspeita de infecção óssea ativa (C): febre e dor lombar com suspeita de osteomielite ou abscesso epidural exigem investigação imediata.\n\nAnestesia em sela (D): sinal da síndrome da cauda equina — emergência neurocirúrgica, com ressonância de urgência.",
    "tip": "Dor lombar: emergência (imagem já) = cauda equina, déficit progressivo, fratura, infecção. Ambulatorial = idade > 50, câncer prévio, imunossupressão, dor que não melhora em 4–6 semanas.",
    "reference": "Chou R et al. Diagnostic Imaging for Low Back Pain: Advice for High-Value Health Care from the American College of Physicians. Ann Intern Med, 2011.",
    "tags": [
      "lombalgia",
      "bandeiras vermelhas",
      "exames de imagem"
    ]
  },
  {
    "id": "dante2026-68",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "Homem, de 38 anos de idade, pedreiro, procura a Unidade Básica de Saúde por dor na lombar “no centro das costas, embaixo”, há cerca de 8 meses. Dor em peso/fadiga, que piora ao final do dia e melhora com repouso, banho quente e analgésico comum que ele compra na farmácia. Refere formigamento ocasional em nádega direita “quando força muito”, mas nega perda de força ou queda do pé. Nega antecedentes pessoais ou familiares relevantes. Diz que “precisa fazer uma ressonância da coluna”, porque acha que pode estar com “bico de papagaio” e ter algo sério que o deixe \"travado\". Relata que está há 3 dias sem conseguir trabalhar por causa da dor e teme ser despedido: “Se eu travo, o patrão já arruma outro”.\n\nApós um mês, o paciente retorna em consulta médica e conta que perdeu o emprego por recorrência de faltas pela dor lombar, que só piora apesar do uso das medicações prescritas na última consulta. Desde então, além das dores, ele está apresentando insônia, falta de apetite e muito desânimo, a ponto de passar dias inteiros na cama. Ele chora na consulta, ao contar que a renda caiu e que não sabe “como vai pagar o aluguel do mês que vem”.\n\nConsiderando o papel da Atenção Primária à Saúde e o impacto dos determinantes sociais de saúde no adoecimento, qual é a conduta adequada neste momento?",
    "options": [
      "Encaminhar à ortopedia para avaliação cirúrgica da coluna, e à psiquiatria para avaliação da suspeita de depressão, pois o quadro com complexidade é incompatível com a abordagem na Atenção Primária à Saúde.",
      "Prescrever novo ciclo de anti-inflamatório e emitir novo atestado médico para afastamento prolongado, a fim de tratar a dor lombar e permitir o retorno ao trabalho assim que possível.",
      "Prescrever novo ciclo de anti-inflamatório e associar antidepressivo e benzodiazepínico para tratar os sintomas apresentados. Solicitar ressonância magnética da coluna lombar para excluir lesão estrutural grave e justificar aposentadoria por invalidez.",
      "Reconhecer que perda do emprego, insegurança financeira e risco de exclusão social estão contribuindo para agravar dor e humor. Abordar sofrimento psíquico e acionar recursos intersetoriais, além de manejo clínico da dor."
    ],
    "correctAnswer": 3,
    "explanation": "Após perder o emprego, o paciente tem piora da dor, insônia, falta de apetite, desânimo e choro, preocupado com o aluguel: sofrimento psíquico (possível episódio depressivo) agravado por determinantes sociais (desemprego, insegurança financeira).\n\nNa APS, a abordagem deve ser integral: reconhecer o peso dos determinantes sociais na dor e no humor, acolher e abordar o sofrimento psíquico (incluindo avaliar risco de suicídio e tratar depressão, se confirmada), acionar recursos intersetoriais (assistência social, CRAS, seguro-desemprego, programas de qualificação e renda), manter o manejo da dor e o acompanhamento longitudinal.",
    "commentary": "Encaminhar à ortopedia e à psiquiatria (A): a APS é capaz de manejar lombalgia e depressão na maioria dos casos; encaminhar tudo fragmenta o cuidado e ignora os determinantes sociais.\n\nNovo anti-inflamatório e atestado prolongado (B): foca só na dor e no afastamento, sem abordar o sofrimento psíquico e social; afastamento prolongado piora a lombalgia crônica.\n\nAnti-inflamatório, antidepressivo, benzodiazepínico e ressonância para aposentadoria (C): medicaliza sem abordar as causas, o benzodiazepínico tem risco de dependência, e a ressonância não está indicada.",
    "tip": "Sofrimento agravado por desemprego e pobreza: acolher, tratar e acionar a rede intersetorial (assistência social). Cuidado integral, na APS.",
    "reference": "Gusso G, Lopes JMC. Tratado de Medicina de Família e Comunidade, 2ª ed. Ministério da Saúde. Cadernos de Atenção Básica nº 34 – Saúde Mental, 2013.",
    "tags": [
      "determinantes sociais da saúde",
      "saúde mental",
      "atenção primária",
      "intersetorialidade"
    ]
  },
  {
    "id": "dante2026-69",
    "topography": "15",
    "topic": "Rastreamento",
    "module": "Saúde Coletiva",
    "text": "Mulher, de 27 anos de idade, comparece à Unidade Básica de Saúde para “fazer o preventivo”. Ela está assintomática, nunca teve sangramento vaginal anormal nem sangramento pós-coito e não está grávida. Relata vida sexual ativa desde os 17 anos de idade e nunca fez rastreamento para câncer do colo do útero.\n\nQual é a conduta adequada, segundo a diretriz do Ministério da Saúde de 2025?",
    "options": [
      "Realizar teste primário de DNA-HPV oncogênico agora e, se negativo, repetir em 5 anos.",
      "Coletar citologia oncótica (Papanicolau) anual, pois ela iniciou vida sexual há mais de 10 anos.",
      "Solicitar co-teste (citologia + DNA-HPV simultâneos) e repetir em 12 meses, se ambos vierem negativos.",
      "Adiar qualquer rastreamento até os 35 anos, pois abaixo dessa idade o risco de desenvolver câncer de colo de útero é irrelevante."
    ],
    "correctAnswer": 0,
    "explanation": "Mulher de 27 anos, sexualmente ativa, nunca rastreada. Pelas Diretrizes do Ministério da Saúde de 2025, o rastreamento do câncer do colo do útero é feito com o teste de DNA-HPV oncogênico, dos 25 aos 64 anos.\n\nSe o teste for negativo, repete-se em 5 anos. Se positivo, a conduta depende do genótipo: HPV 16 ou 18 → colposcopia; outros tipos oncogênicos → citologia reflexa.",
    "commentary": "Citologia anual (B): o intervalo nunca foi anual, a citologia está sendo substituída pelo DNA-HPV e o início do rastreio é pela idade (25 anos), não pelo tempo de vida sexual.\n\nCo-teste repetido em 12 meses (C): o co-teste não é adotado no Brasil, e com resultados negativos o intervalo seria de 5 anos.\n\nAdiar até os 35 anos (D): o rastreamento começa aos 25 anos; a ideia de iniciar o teste de HPV aos 30 anos existe em alguns países, mas a diretriz brasileira mantém 25 anos.",
    "tip": "Colo do útero (MS 2025): DNA-HPV de 25 a 64 anos, a cada 5 anos se negativo.",
    "reference": "INCA/Ministério da Saúde. Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero – rastreamento organizado com testes de DNA-HPV oncogênico, 2025.",
    "tags": [
      "rastreamento",
      "câncer de colo uterino",
      "DNA-HPV"
    ]
  },
  {
    "id": "dante2026-70",
    "topography": "5.1",
    "topic": "Câncer de colo uterino",
    "module": "Saúde Coletiva",
    "text": "Mulher, de 27 anos de idade, comparece à Unidade Básica de Saúde para “fazer o preventivo”. Ela está assintomática, nunca teve sangramento vaginal anormal nem sangramento pós-coito e não está grávida. Relata vida sexual ativa desde os 17 anos de idade e nunca fez rastreamento para câncer do colo do útero.\n\nApós dois meses, a paciente retorna com o resultado do exame alterado e presença do genótipo 16 do HPV.\n\nQual é a conduta recomendada?",
    "options": [
      "Indicar tratamento ablativo imediato do colo uterino.",
      "Aguardar 12 meses e repetir o teste de DNA-HPV oncogênico.",
      "Solicitar citologia reflexa e encaminhar para colposcopia.",
      "Encaminhar diretamente para a colposcopia."
    ],
    "correctAnswer": 3,
    "explanation": "Teste de DNA-HPV positivo para o genótipo 16. Os tipos 16 e 18 respondem por cerca de 70% dos cânceres de colo e têm o maior risco de lesão de alto grau. Pela diretriz de 2025, o resultado positivo para HPV 16 e/ou 18 leva diretamente à colposcopia, sem necessidade de citologia antes.\n\nJá o positivo para outros tipos oncogênicos (não 16/18) segue para citologia reflexa: se alterada, colposcopia; se normal, repetir o teste de HPV em 1 ano.",
    "commentary": "Tratamento ablativo imediato (A): não se trata sem diagnóstico; a colposcopia com biópsia define se há lesão e qual tratamento.\n\nRepetir o HPV em 12 meses (B): conduta para HPV positivo de outros tipos com citologia reflexa normal; não para HPV 16.\n\nCitologia reflexa e colposcopia (C): a citologia reflexa é usada para os tipos não 16/18; no 16/18 o encaminhamento é direto.",
    "tip": "DNA-HPV: 16/18 → colposcopia direto. Outros oncogênicos → citologia reflexa (alterada → colposcopia; normal → HPV em 1 ano).",
    "reference": "INCA/Ministério da Saúde. Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero, 2025.",
    "tags": [
      "DNA-HPV",
      "HPV 16",
      "colposcopia",
      "câncer de colo uterino"
    ]
  },
  {
    "id": "dante2026-71",
    "topography": "15",
    "topic": "Testes diagnósticos",
    "module": "Saúde Coletiva",
    "text": "“No Brasil, o programa de rastreamento organizado baseado na detecção de testes de DNA-HPV oncogênico implementado em Idaiatuba (SP) foi capaz de detectar proporcionalmente quatro vezes mais neoplasia intraepitelial cervical grau 2 ou mais grave (NIC2+) e 1,5 vezes mais cânceres na primeira rodada de rastreamento do que a citologia no período imediatamente anterior. Dos casos de doença invasiva, 87% foram detectados no estágio FIGO I, em oposição a 67% em estágios avançados detectados no período imediatamente anterior.”\n\nO fato de o teste de DNA-HPV ter identificado proporcionalmente quatro vezes mais casos comprovados de NIC2+ e 1,5 vez mais neoplasias de colo uterino, comparado ao período anterior com citologia, pode sugerir que:",
    "options": [
      "O teste de DNA-HPV tem menor especificidade do que a citologia, produzindo mais falso-positivos. Por isso, observou-se um aumento dos números de NIC2 positiva.",
      "O teste de DNA-HPV tem maior sensibilidade, pois identifica corretamente mais pessoas que têm NIC2 ou câncer de colo uterino em comparação com a citologia.",
      "O teste de DNA-HPV tem menor valor preditivo negativo, pois encontra mais doenças entre as pessoas com teste negativo.",
      "O teste de DNA-HPV tem maior valor preditivo positivo, pois identifica mais pessoas com resultado negativo que realmente não têm a doença."
    ],
    "correctAnswer": 1,
    "explanation": "Sensibilidade é a capacidade do teste de identificar corretamente quem tem a doença (verdadeiros positivos entre os doentes).\n\nSe, na mesma população, o teste de DNA-HPV detectou quatro vezes mais NIC2+ comprovadas e 1,5 vez mais cânceres do que a citologia, ele deixou de perder casos que a citologia perdia: maior sensibilidade. Isso é coerente com a literatura: o DNA-HPV tem sensibilidade bem maior que a citologia para NIC2+, com especificidade um pouco menor.\n\nComo os casos foram confirmados por histologia, não se trata de falso-positivos.",
    "commentary": "Menor especificidade com mais falso-positivos (A): o texto fala em casos comprovados de NIC2+, ou seja, verdadeiros positivos; o aumento reflete sensibilidade, não falso-positivos.\n\nMenor valor preditivo negativo (C): um teste mais sensível tem maior valor preditivo negativo (menos doentes entre os negativos), por isso o intervalo pode ser de 5 anos.\n\nMaior VPP por identificar negativos verdadeiros (D): mistura conceitos — identificar corretamente os negativos é especificidade/VPN, não VPP.",
    "tip": "Detectou mais doentes confirmados = mais sensível. Teste mais sensível tem VPN alto → permite intervalo maior entre exames.",
    "reference": "Teixeira JC et al. Organization of cervical cancer screening with DNA-HPV testing impact on early-stage cancer detection: a population-based demonstration study in a Brazilian city. Lancet Reg Health Am, 2022.",
    "tags": [
      "sensibilidade",
      "testes diagnósticos",
      "DNA-HPV",
      "rastreamento"
    ]
  },
  {
    "id": "dante2026-72",
    "topography": "15",
    "topic": "Testes diagnósticos",
    "module": "Saúde Coletiva",
    "text": "Em um programa de rastreamento de câncer de colo uterino, 200 mulheres foram testadas com um exame de DNA-HPV. Após confirmação diagnóstica, obteve-se a seguinte tabela:\n\n• Teste positivo: doença presente 36, doença ausente 12 (total 48)\n• Teste negativo: doença presente 4, doença ausente 148 (total 152)\n• Total: doença presente 40, doença ausente 160 (total 200)\n\nQual é a sensibilidade do teste de DNA-HPV neste cenário?",
    "options": [
      "47,5%",
      "75%",
      "90%",
      "92,5%"
    ],
    "correctAnswer": 2,
    "explanation": "Montando a tabela 2×2:\n\n• Verdadeiros positivos (VP): 36.\n• Falsos negativos (FN): 4.\n• Doentes: 40.\n\nSensibilidade = VP / (VP + FN) = 36 / 40 = 0,9 = 90%.\n\nPara comparar, com os mesmos dados: especificidade = 148/160 = 92,5%; valor preditivo positivo = 36/48 = 75%; valor preditivo negativo = 148/152 ≈ 97,4%.",
    "commentary": "47,5% (A): não corresponde a nenhum indicador; vem de uma divisão errada da tabela.\n\n75% (B): é o valor preditivo positivo (36/48), não a sensibilidade.\n\n92,5% (D): é a especificidade (148/160).",
    "tip": "Sensibilidade = VP/doentes (coluna). Especificidade = VN/não doentes. VPP = VP/positivos (linha). VPN = VN/negativos.",
    "reference": "Fletcher RH, Fletcher SW, Fletcher GS. Epidemiologia Clínica: Elementos Essenciais, 5ª ed.",
    "tags": [
      "sensibilidade",
      "tabela 2×2",
      "testes diagnósticos",
      "bioestatística"
    ]
  },
  {
    "id": "dante2026-73",
    "topography": "7.2",
    "topic": "Hanseníase",
    "module": "Saúde Coletiva",
    "text": "Mulher, de 40 anos de idade, pertencente a uma comunidade indígena e residente em uma grande capital do Sudeste, retorna após viagem para visitar a família no interior do Pará. Há alguns meses, ela percebe “manchas claras” na face lateral da perna direita e relata que a área fica “dormente, como se estivesse anestesiada”. Ao exame físico, observam-se duas lesões hipocrômicas bem delimitadas, com redução da sensibilidade térmica e dolorosa.\n\nQual é a hipótese diagnóstica mais provável, considerando dados clínicos e epidemiológicos?",
    "options": [
      "Tinea cruris, em razão da exposição à umidade durante a viagem ao Pará.",
      "Pitiríase versicolor, pela característica das lesões e longo tempo de evolução.",
      "Hanseníase, pela presença de lesões com alteração de sensibilidade.",
      "Leishmaniose, pela característica das lesões e tempo de evolução."
    ],
    "correctAnswer": 2,
    "explanation": "Manchas hipocrômicas bem delimitadas, com perda da sensibilidade térmica e dolorosa, em pessoa vinda de área endêmica (Pará): hanseníase.\n\nO diagnóstico de hanseníase é clínico, por um ou mais sinais cardinais: lesão de pele com alteração de sensibilidade, espessamento de nervo periférico com alteração sensitiva, motora ou autonômica, ou baciloscopia positiva. Com até 5 lesões e baciloscopia negativa, é paucibacilar; mas, desde 2021, o Ministério da Saúde trata todos com poliquimioterapia única (rifampicina, dapsona e clofazimina), por 6 meses (paucibacilar) ou 12 meses (multibacilar).",
    "commentary": "Tinea cruris (A): micose da região inguinal, com bordas descamativas e pruriginosas, sem alteração de sensibilidade.\n\nPitiríase versicolor (B): manchas hipocrômicas finamente descamativas (sinal de Zileri), geralmente no tronco, sem perda de sensibilidade.\n\nLeishmaniose (D): a forma cutânea causa úlcera de bordas elevadas e fundo granuloso, não mancha hipocrômica anestésica.",
    "tip": "Mancha com perda de sensibilidade = hanseníase até prova em contrário. Diagnóstico é clínico.",
    "reference": "Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas da Hanseníase, 2022.",
    "tags": [
      "hanseníase",
      "mancha hipocrômica",
      "alteração de sensibilidade",
      "doenças negligenciadas"
    ]
  },
  {
    "id": "dante2026-74",
    "topography": "7.2",
    "topic": "Hanseníase",
    "module": "Saúde Coletiva",
    "text": "Mulher, de 40 anos de idade, pertencente a uma comunidade indígena e residente em uma grande capital do Sudeste, retorna após viagem para visitar a família no interior do Pará. Há alguns meses, ela percebe “manchas claras” na face lateral da perna direita e relata que a área fica “dormente, como se estivesse anestesiada”. Ao exame físico, observam-se duas lesões hipocrômicas bem delimitadas, com redução da sensibilidade térmica e dolorosa.\n\nQuatro semanas após iniciar o tratamento adequado, a paciente retorna referindo dor em choque e queimação intensa na borda cubital do antebraço direito (“parece fio desencapado”), dificuldade para segurar objetos leves e novo edema eritematoso em lesões antigas. Ao exame clínico, o nervo ulnar direito está espessado, muito doloroso à palpação e há perda de força de flexão do 5º dedo.\n\nQual hipótese diagnóstica e conduta imediata estão corretas para prevenir incapacidade permanente?",
    "options": [
      "Reação hansênica tipo 1 com neurite aguda. Manter tratamento e iniciar rapidamente corticoide sistêmico.",
      "Efeito adverso neuromuscular do antifúngico oral. Suspender o tratamento até cessar a dor e substituir por tratamento tópico.",
      "Efeito adverso neuromuscular do antifúngico oral. Suspender antifúngico e substituir por corticoide tópico e analgésico comum.",
      "Neurite aguda por miltefosina. Manter o tratamento e iniciar rapidamente corticoide sistêmico."
    ],
    "correctAnswer": 0,
    "explanation": "Quatro semanas após iniciar a poliquimioterapia, surgem neurite aguda do ulnar (dor intensa, nervo espessado e doloroso, perda de força) e inflamação das lesões antigas (eritema e edema): reação hansênica tipo 1 (reação reversa), uma resposta imune celular exacerbada contra os antígenos do bacilo.\n\nA neurite é a principal causa de incapacidade na hanseníase e deve ser tratada imediatamente com corticoide sistêmico (prednisona 1 mg/kg/dia, com redução lenta) e imobilização do membro. A poliquimioterapia deve ser mantida: a reação não é falha nem efeito adverso do tratamento.",
    "commentary": "Efeito adverso de antifúngico, trocar por tópico (B): o tratamento não é antifúngico, e suspender a poliquimioterapia permitiria a progressão da doença.\n\nEfeito adverso de antifúngico, corticoide tópico e analgésico (C): mesmo erro de diagnóstico; corticoide tópico não trata neurite e o atraso causa dano neural permanente.\n\nNeurite por miltefosina (D): miltefosina é usada na leishmaniose, não na hanseníase.",
    "tip": "Hanseníase em tratamento com neurite e piora das lesões = reação tipo 1: prednisona já, sem suspender a PQT. Reação tipo 2 (ENH) = nódulos dolorosos e febre: talidomida.",
    "reference": "Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas da Hanseníase, 2022. Guia prático sobre a hanseníase, 2017.",
    "tags": [
      "hanseníase",
      "reação hansênica tipo 1",
      "neurite",
      "corticoide"
    ]
  },
  {
    "id": "dante2026-75",
    "topography": "15",
    "topic": "Ética médica",
    "module": "Saúde Coletiva",
    "text": "Mulher, de 40 anos de idade, pertencente a uma comunidade indígena e residente em uma grande capital do Sudeste, retorna após viagem para visitar a família no interior do Pará. Há alguns meses, ela percebe “manchas claras” na face lateral da perna direita e relata que a área fica “dormente, como se estivesse anestesiada”. Ao exame físico, observam-se duas lesões hipocrômicas bem delimitadas, com redução da sensibilidade térmica e dolorosa.\n\nApós o manejo do evento adverso, a equipe multiprofissional opta por fazer uma visita domiciliar à paciente. Ela conta que a pajé da comunidade recomendou aplicar diariamente um unguento de ervas “quentes” sobre as áreas dormentes para “acordar o sangue” e orientou evitar “remédio forte da cidade” porque “pode piorar o espírito do membro dormente”. A paciente ficou com medo da medicação e está pensando em interromper o tratamento. Ela também relata medo de ser discriminada na própria rede de parentes, pois “vão dizer que está com a alma suja”.\n\nQual é a resposta clínica e ética correta dentro dos princípios de integralidade, equidade, prevenção de incapacidade e abordagem psicossocial?",
    "options": [
      "Comunicar imediatamente à liderança indígena do diagnóstico, para garantir que siga o tratamento indicado pela unidade de saúde e reduzir o estigma da comunidade.",
      "Explicar com linguagem acessível a importância do tratamento, negociar o uso do unguento como complemento e oferecer suporte contra estigma.",
      "Suspender o tratamento para não romper o vínculo, deixando apenas a terapia tradicional. Explicar com linguagem acessível as potenciais complicações, reavaliando clinicamente em alguns meses.",
      "Advertir a paciente de que práticas tradicionais são ilegais e ameaçar notificar a Vigilância Sanitária, caso a pajé insista em orientá-la a não usar o tratamento proposto."
    ],
    "correctAnswer": 1,
    "explanation": "A paciente indígena, influenciada pela orientação da pajé e com medo do estigma, pensa em abandonar o tratamento.\n\nA resposta adequada combina integralidade, equidade e respeito à cultura (atenção diferenciada aos povos indígenas, prevista na política nacional):\n\n• Explicar em linguagem acessível a importância do tratamento e o risco de incapacidade.\n• Negociar o unguento tradicional como complemento, desde que não cause dano (por exemplo, sem queimar a pele insensível) — sem desqualificar a medicina tradicional.\n• Oferecer apoio contra o estigma e, se a paciente quiser, envolver a comunidade e a pajé no cuidado.",
    "commentary": "Comunicar a liderança indígena sem consentimento (A): viola o sigilo médico e a autonomia da paciente, e pode aumentar o estigma.\n\nSuspender o tratamento e manter só a terapia tradicional (C): deixa a hanseníase progredir, com risco de incapacidade e transmissão; vínculo não justifica abandonar o tratamento eficaz.\n\nAdvertir que práticas tradicionais são ilegais (D): é falso, desrespeitoso e rompe o vínculo; as práticas tradicionais indígenas são reconhecidas pela política de saúde indígena.",
    "tip": "Cuidado intercultural: explicar, negociar práticas tradicionais que não causem dano, manter o tratamento e proteger o sigilo e a autonomia.",
    "reference": "Ministério da Saúde. Política Nacional de Atenção à Saúde dos Povos Indígenas, 2002. Código de Ética Médica (Resolução CFM nº 2.217/2018).",
    "tags": [
      "saúde indígena",
      "competência cultural",
      "adesão ao tratamento",
      "estigma"
    ]
  },
  {
    "id": "dante2026-76",
    "topography": "15",
    "topic": "Epidemiologia",
    "module": "Saúde Coletiva",
    "text": "Mulher, de 40 anos de idade, pertencente a uma comunidade indígena e residente em uma grande capital do Sudeste, retorna após viagem para visitar a família no interior do Pará. Há alguns meses, ela percebe “manchas claras” na face lateral da perna direita e relata que a área fica “dormente, como se estivesse anestesiada”. Ao exame físico, observam-se duas lesões hipocrômicas bem delimitadas, com redução da sensibilidade térmica e dolorosa.\n\nConsidere que o diagnóstico dessa paciente é considerado uma doença endêmica no estado do Pará, havendo grande quantidade de casos de incapacidade em pessoas diagnosticadas por ano.\n\nSupondo que o tratamento reduz em 50% o risco relativo de desenvolver incapacidade física grave em um ano, qual alternativa descreve corretamente a implicação prática para o cálculo do NNT (Número Necessário para Tratar) no Sudeste e no Pará?",
    "options": [
      "No Pará, o NNT é maior, porque o risco é mais alto; então é preciso tratar mais gente para prevenir a incapacidade.",
      "No Sudeste, o NNT é menor, porque a prevalência de incapacidade é baixa e há menos pessoas em risco de desenvolver a doença.",
      "No Sudeste, o NNT é maior, porque a prevalência é baixa e o mesmo tratamento evitará mais casos de incapacidade.",
      "No Pará, o NNT é menor, pois a prevalência da doença é maior e o mesmo tratamento evitará mais casos de incapacidade."
    ],
    "correctAnswer": 3,
    "explanation": "NNT = 1 / redução absoluta do risco (RAR). Com a mesma redução relativa de risco (50%), a redução absoluta depende do risco basal:\n\n• Risco basal alto (Pará, área endêmica com muitos casos de incapacidade), por exemplo 20%: RAR = 10% → NNT = 10.\n• Risco basal baixo (Sudeste), por exemplo 2%: RAR = 1% → NNT = 100.\n\nOnde o risco é maior, o tratamento evita mais casos em números absolutos, e é preciso tratar menos pessoas para evitar uma incapacidade: o NNT é menor no Pará.",
    "commentary": "No Pará o NNT é maior (A): com risco mais alto, a redução absoluta é maior e o NNT é menor.\n\nNo Sudeste o NNT é menor (B): com risco basal baixo, a redução absoluta é pequena e o NNT é maior.\n\nNo Sudeste o NNT é maior porque evitará mais casos (C): o NNT é de fato maior no Sudeste, mas a justificativa está errada — lá o tratamento evita menos casos, e não mais.",
    "tip": "Mesma redução relativa + risco basal maior = maior redução absoluta = NNT menor.",
    "reference": "Fletcher RH, Fletcher SW, Fletcher GS. Epidemiologia Clínica: Elementos Essenciais, 5ª ed.",
    "tags": [
      "NNT",
      "redução absoluta de risco",
      "epidemiologia"
    ]
  },
  {
    "id": "dante2026-77",
    "topography": "15",
    "topic": "Estudos epidemiológicos",
    "module": "Saúde Coletiva",
    "text": "Um estudo recente publicado na Revista Lancet avaliou o efeito do uso profilático de paracetamol administrado imediatamente após a vacinação infantil sobre febre pós-vacinal e resposta imunológica. Para isso, foram incluídos 459 lactentes saudáveis, que foram aleatoriamente alocados em dois grupos: um grupo recebia paracetamol profilático após cada dose de vacina e o outro não recebia paracetamol profilático.\n\nQual é o delineamento do estudo descrito?",
    "options": [
      "Ensaio clínico randomizado",
      "Coorte retrospectiva",
      "Caso-controle",
      "Estudo observacional"
    ],
    "correctAnswer": 0,
    "explanation": "O pesquisador decide a intervenção (paracetamol profilático ou não) e a aloca aleatoriamente aos participantes, depois compara os desfechos (febre, resposta imune): ensaio clínico randomizado.\n\nA alocação aleatória é o que distingue o ensaio clínico randomizado dos estudos observacionais: ela distribui igualmente os fatores de confusão, conhecidos e desconhecidos, entre os grupos.",
    "commentary": "Coorte retrospectiva (B): estudo observacional em que a exposição não é atribuída pelo pesquisador e é levantada em registros do passado.\n\nCaso-controle (C): parte do desfecho (doentes e não doentes) e investiga exposições passadas.\n\nEstudo observacional (D): neste tipo, o pesquisador apenas observa a exposição; aqui ele intervém e randomiza.",
    "tip": "Pesquisador atribui a exposição = experimental. Atribuiu por sorteio = ensaio clínico randomizado.",
    "reference": "Prymula R et al. Effect of prophylactic paracetamol administration at time of vaccination on febrile reactions and antibody responses in children. Lancet, 2009. Medronho RA. Epidemiologia, 2ª ed.",
    "tags": [
      "ensaio clínico randomizado",
      "estudos epidemiológicos",
      "delineamento de estudo"
    ]
  },
  {
    "id": "dante2026-78",
    "topography": "15",
    "topic": "Estudos epidemiológicos",
    "module": "Saúde Coletiva",
    "text": "Um estudo recente publicado na Revista Lancet avaliou o efeito do uso profilático de paracetamol administrado imediatamente após a vacinação infantil sobre febre pós-vacinal e resposta imunológica. Para isso, foram incluídos 459 lactentes saudáveis, que foram aleatoriamente alocados em dois grupos: um grupo recebia paracetamol profilático após cada dose de vacina e o outro não recebia paracetamol profilático.\n\nAinda em relação aos métodos do estudo, os participantes foram recrutados em dez centros na República Tcheca, incluíram apenas lactentes saudáveis e foram randomizados em dois grupos (paracetamol profilático versus não-paracetamol profilático). Não houve uso de placebo e os pais sabiam a qual grupo a criança pertencia. A resposta primária avaliada foi a ocorrência de febre ≥ 38°C após a vacinação.\n\nQual das alternativas descreve corretamente uma característica metodológica importante desse desenho?",
    "options": [
      "Foi um estudo duplo-cego, pois nem pesquisadores nem pais sabiam quem recebeu paracetamol.",
      "Foi um estudo cego simples, em que apenas os pais desconheciam a alocação do lactente.",
      "Foi um estudo aberto (open-label), pois não houve mascaramento dos pais quanto à intervenção recebida.",
      "Foi um estudo quase-experimental, sem randomização formal dos lactentes aos grupos."
    ],
    "correctAnswer": 2,
    "explanation": "Não houve placebo e os pais sabiam a qual grupo a criança pertencia: não houve mascaramento (cegamento). Um ensaio em que participantes e pesquisadores conhecem a intervenção é chamado de aberto (open-label).\n\nEstudos abertos estão mais sujeitos a viés de aferição, principalmente quando o desfecho depende de quem mede (os pais medindo a temperatura em casa, por exemplo). A randomização protege contra confusão, mas não contra esse viés.",
    "commentary": "Duplo-cego (A): exigiria que pais e pesquisadores não soubessem o grupo, o que normalmente requer placebo; aqui os pais sabiam.\n\nCego simples com pais sem saber (B): o enunciado diz que os pais sabiam a alocação.\n\nQuase-experimental (D): o estudo foi randomizado; quase-experimentos não têm alocação aleatória.",
    "tip": "Sem placebo e todos sabem o grupo = estudo aberto. Randomização evita confusão; cegamento evita viés de aferição.",
    "reference": "Medronho RA. Epidemiologia, 2ª ed. Schulz KF et al. CONSORT 2010 Statement.",
    "tags": [
      "cegamento",
      "estudo aberto",
      "ensaio clínico randomizado",
      "viés"
    ]
  },
  {
    "id": "dante2026-79",
    "topography": "11",
    "topic": "Desenvolvimento neuropsicomotor",
    "module": "Saúde Coletiva",
    "text": "Menina, de 2 anos e 4 meses, é levada pela avó à Unidade Básica de Saúde (UBS) com relato de que a criança “não fala quase nada”. A avó relata que a criança fala frases quando quer, mas tem demonstrado o costume de apontar para pedir coisas e puxar a mão do adulto quando quer algo. Não frequenta creche. Não há história de regressão de linguagem (ela nunca perdeu palavras que já falava), crises convulsivas, nem alterações motoras. Ao exame clínico, encontra-se em bom estado geral, com contato visual presente, atendendo a comandos simples (“pega o sapato”, “dá tchau”), sem outras alterações neurológicas.\n\nQual é o próximo passo adequado na investigação dessa paciente?",
    "options": [
      "Acalmar e explicar à avó que o neurodesenvolvimento está normal, sem necessidade de nova intervenção.",
      "Investigar sobre tempo de tela e estímulo à comunicação ativa (conversar, ler histórias, brincar simbólico).",
      "Encaminhar ao pronto-socorro para coleta de exames laboratoriais e de líquor. Evitar contato social com outras crianças até avaliação neurológica.",
      "Solicitar ressonância magnética de crânio com sedação para afastar presença de lesão estrutural."
    ],
    "correctAnswer": 1,
    "explanation": "Criança de 2 anos e 4 meses que \"não fala quase nada\", mas fala frases quando quer, aponta para pedir, tem contato visual, atende comandos, nunca perdeu habilidades e não tem alterações neurológicas. Não frequenta creche.\n\nSem sinais de alerta para autismo (aponta, olha nos olhos, compreende) e sem regressão, o mais provável é atraso de linguagem expressiva por pouca estimulação. O próximo passo na APS é investigar o ambiente: tempo de exposição a telas (associado a atraso de linguagem), quantidade de conversa, leitura e brincadeira simbólica, e orientar a família a estimular a comunicação ativa — além de avaliar a audição e reavaliar a criança.",
    "commentary": "Tranquilizar sem intervir (A): há queixa de linguagem que merece investigação do contexto e orientação; não se deve só esperar.\n\nPronto-socorro, exames e líquor (C): não há sinal de doença aguda, regressão ou alteração neurológica que justifique; isolar a criança socialmente piora a linguagem.\n\nRessonância com sedação (D): sem alteração neurológica, regressão ou crises, não há indicação de neuroimagem, que tem riscos (sedação) e baixo rendimento.",
    "tip": "Atraso de fala com compreensão, contato visual e gestos preservados: investigar telas e estímulo, avaliar audição e orientar a família.",
    "reference": "Sociedade Brasileira de Pediatria. Manual de orientação: Saúde de Crianças e Adolescentes na Era Digital, 2019. Ministério da Saúde. Caderneta da Criança, 2024.",
    "tags": [
      "atraso de linguagem",
      "tempo de tela",
      "desenvolvimento neuropsicomotor",
      "atenção primária"
    ]
  },
  {
    "id": "dante2026-80",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "Menina, de 2 anos e 4 meses, é levada pela avó à Unidade Básica de Saúde (UBS) com relato de que a criança “não fala quase nada”. A avó relata que a criança fala frases quando quer, mas tem demonstrado o costume de apontar para pedir coisas e puxar a mão do adulto quando quer algo. Não frequenta creche. Não há história de regressão de linguagem (ela nunca perdeu palavras que já falava), crises convulsivas, nem alterações motoras. Ao exame clínico, encontra-se em bom estado geral, com contato visual presente, atendendo a comandos simples (“pega o sapato”, “dá tchau”), sem outras alterações neurológicas.\n\nA criança retorna à UBS para seguimento. Após a consulta médica, ela iniciou o tratamento recomendado anteriormente. Na consulta atual, a mãe relata que a criança já forma frases curtas, pede ajuda com palavras e participa mais ativamente das interações.\n\nAssinale a alternativa que contenha o princípio do Sistema Único de Saúde predominante neste caso e a sua definição correta:",
    "options": [
      "Universalidade: transferência para níveis de maior complexidade, independentemente da avaliação clínica inicial e das possibilidades de intervenção no território.",
      "Universalidade: priorização do caso, garantindo acesso preferencial aos serviços especializados e outros equipamentos do território.",
      "Integralidade: garantia de acesso a todas as ações e serviços de saúde, sem qualquer tipo de discriminação.",
      "Integralidade: organização do cuidado de modo articulado e multiprofissional, reconhecendo as dimensões biológica, emocional, familiar e social."
    ],
    "correctAnswer": 3,
    "explanation": "A criança melhorou com o cuidado articulado entre família, equipe de saúde e estímulo do desenvolvimento, considerando as dimensões biológica, emocional, familiar e social.\n\nEsse é o princípio da integralidade: ver a pessoa como um todo e organizar o cuidado de forma articulada entre ações de promoção, prevenção, tratamento e reabilitação, entre profissionais e entre níveis de atenção.",
    "commentary": "Universalidade como transferência para maior complexidade (A): universalidade é o direito de todos ao acesso; encaminhar sem avaliação não define o princípio.\n\nUniversalidade como priorização do caso (B): priorizar quem mais precisa corresponde à equidade, não à universalidade.\n\nIntegralidade como acesso sem discriminação (C): a definição dada é de universalidade (acesso a todos, sem discriminação), e não de integralidade.",
    "tip": "Universalidade = acesso para todos. Equidade = mais para quem mais precisa. Integralidade = a pessoa como um todo e cuidado articulado.",
    "reference": "Brasil. Lei nº 8.080, de 19 de setembro de 1990 (Lei Orgânica da Saúde), art. 7º.",
    "tags": [
      "princípios do SUS",
      "integralidade",
      "SUS"
    ]
  }
];
