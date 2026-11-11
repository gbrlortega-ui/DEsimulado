// Arquivo gerado por `npm run gen` a partir do banco de questões. Não editar à mão.
// O build e o servidor local regeneram este arquivo sozinhos; o `npm run validate` acusa se ficar desatualizado.
import type { Question } from '../types';

export const TOTAL_QUESTIONS = 1359;

export const COUNT_BY_AREA: Record<string, number> = {
  "Pediatria": 238,
  "Clínica Médica": 266,
  "Cirurgia": 224,
  "Ginecologia e Obstetrícia": 230,
  "Saúde Coletiva": 241,
  "Ciências Básicas": 160
};

export interface ExamEdition {
  label: string; // "TP 2024", "ENAMED 2026", "UNIFESP 2025"
  kind: 'TP' | 'ENAMED' | 'Residência';
  year: number;
  count: number;
}

/** Provas presentes no banco, em ordem cronológica (TP, depois ENAMED, depois residência). */
export const EDITIONS: ExamEdition[] = [
  {
    "label": "TP 2019",
    "kind": "TP",
    "year": 2019,
    "count": 120
  },
  {
    "label": "TP 2020",
    "kind": "TP",
    "year": 2020,
    "count": 120
  },
  {
    "label": "TP 2021",
    "kind": "TP",
    "year": 2021,
    "count": 120
  },
  {
    "label": "TP 2022",
    "kind": "TP",
    "year": 2022,
    "count": 120
  },
  {
    "label": "TP 2023",
    "kind": "TP",
    "year": 2023,
    "count": 120
  },
  {
    "label": "TP 2024",
    "kind": "TP",
    "year": 2024,
    "count": 120
  },
  {
    "label": "TP 2025",
    "kind": "TP",
    "year": 2025,
    "count": 120
  },
  {
    "label": "TP 2026",
    "kind": "TP",
    "year": 2026,
    "count": 120
  },
  {
    "label": "ENAMED 2025",
    "kind": "ENAMED",
    "year": 2025,
    "count": 100
  },
  {
    "label": "ENAMED 2026",
    "kind": "ENAMED",
    "year": 2026,
    "count": 100
  },
  {
    "label": "UNIFESP 2025",
    "kind": "Residência",
    "year": 2025,
    "count": 99
  },
  {
    "label": "HOS-BOS 2027",
    "kind": "Residência",
    "year": 2027,
    "count": 100
  }
];

export interface ExamSource {
  key: string; // sigla usada no filtro: "TP", "ENAMED", "UNIFESP"
  label: string; // "Teste de Progresso", "ENAMED", "UNIFESP"
  kind: 'TP' | 'ENAMED' | 'Residência';
  years: string; // "2019–2026" ou "2025"
  count: number;
}

/** Origens da prova disponíveis no filtro do simulado. */
export const SOURCES: ExamSource[] = [
  {
    "key": "TP",
    "label": "Teste de Progresso",
    "kind": "TP",
    "years": "2019–2026",
    "count": 960
  },
  {
    "key": "ENAMED",
    "label": "ENAMED",
    "kind": "ENAMED",
    "years": "2025–2026",
    "count": 200
  },
  {
    "key": "UNIFESP",
    "label": "UNIFESP",
    "kind": "Residência",
    "years": "2025",
    "count": 99
  },
  {
    "key": "HOS-BOS",
    "label": "HOS-BOS",
    "kind": "Residência",
    "years": "2027",
    "count": 100
  }
];

/** Questões por área e origem, na chave "Pediatria|ENAMED". */
export const COUNT_BY_AREA_SOURCE: Record<string, number> = {
  "Pediatria|TP": 160,
  "Clínica Médica|TP": 160,
  "Cirurgia|TP": 160,
  "Ginecologia e Obstetrícia|TP": 160,
  "Saúde Coletiva|TP": 160,
  "Ciências Básicas|TP": 160,
  "Clínica Médica|ENAMED": 60,
  "Pediatria|ENAMED": 39,
  "Cirurgia|ENAMED": 25,
  "Ginecologia e Obstetrícia|ENAMED": 33,
  "Saúde Coletiva|ENAMED": 43,
  "Cirurgia|UNIFESP": 19,
  "Saúde Coletiva|UNIFESP": 18,
  "Clínica Médica|UNIFESP": 26,
  "Ginecologia e Obstetrícia|UNIFESP": 17,
  "Pediatria|UNIFESP": 19,
  "Cirurgia|HOS-BOS": 20,
  "Clínica Médica|HOS-BOS": 20,
  "Ginecologia e Obstetrícia|HOS-BOS": 20,
  "Pediatria|HOS-BOS": 20,
  "Saúde Coletiva|HOS-BOS": 20
};

/** Questões por especialidade ou região da topografia ("1.1", "8"). */
export const TOPOGRAPHY_COUNT: Record<string, number> = {};

/** Questões por assunto, na chave "1.1|Cefaleias". */
export const TOPIC_COUNT: Record<string, number> = {};

export interface SuggestedExamInfo {
  id: string;
  title: string;
  description: string;
  /** Aviso mostrado antes de começar e na primeira questão. */
  warning: string;
  count: number;
}

/** Simulados sugeridos, sem as questões (elas carregam junto com o banco). */
export const SUGERIDOS_INFO: SuggestedExamInfo[] = [
  {
    "id": "sugerido-enamed-1",
    "title": "ENAMED 1",
    "description": "Questões no formato do ENAMED, de todas as áreas, sempre na mesma ordem.",
    "warning": "O gabarito deste simulado é técnico, não oficial: nenhuma banca publicou respostas para estas questões. As questões com gabarito provisório têm um aviso no comentário.",
    "count": 100
  }
];

/** Amostra para a questão de exemplo da página inicial. */
export const SAMPLE_QUESTIONS: Question[] = [
  {
    "id": "tp2024-42",
    "module": "Pediatria",
    "text": "Menina com 1 ano e 6 meses de idade apresenta desenvolvimento de pilificação em região genital há 2 meses, associado a acne e odor axilar. Ao exame físico, há pelos grossos escuros e encaracolados em região de grandes lábios e pube, além de hipertrofia de clítoris; não há tecido mamário palpável. Qual o melhor exame a ser solicitado para a principal hipótese dessa paciente?",
    "options": [
      "(A) LH e FSH",
      "(B) Tomografia da glândula adrenal",
      "(C) Ultrassom pélvico",
      "(D) Idade óssea"
    ],
    "correctAnswer": 1,
    "explanation": "Pelos pubianos grossos, acne, odor axilar e aumento do clitóris em uma menina de 1 ano e meio, sem mamas, indicam excesso de andrógenos (virilização), e não puberdade verdadeira: se o eixo hipotálamo-hipófise-gônadas estivesse ativado, haveria telarca.\n\nA instalação rápida (2 meses) e a virilização intensa nessa idade levantam a suspeita de tumor adrenal produtor de andrógenos (carcinoma adrenocortical é o principal). Por isso o exame que investiga a principal hipótese é a imagem da adrenal, como a tomografia.",
    "commentary": "LH e FSH (A): servem para avaliar puberdade precoce central, que começa com telarca nas meninas — aqui não há tecido mamário.\n\nUltrassom pélvico (C): procura tumor ovariano ou sinais de estímulo estrogênico no útero e ovários; não é o exame da hipótese principal, que é adrenal.\n\nIdade óssea (D): mostra o quanto os andrógenos aceleraram a maturação e ajuda no prognóstico de altura, mas não identifica a causa.",
    "tip": "Virilização rápida sem mamas na lactente: pense em tumor de adrenal e peça imagem da adrenal.",
    "reference": "Tratado de pediatria / organização Sociedade Brasileira de Pediatria. - 5. ed. - Barueri [SP]: Manole, 2022. Seção 16 endocrinologia. Endocrinologia pediátrica / Crésio de Aragão Dantas Alves. - 1. ed. - Barueri [SP]: Manole, 2019.",
    "tags": [
      "endocrinologia"
    ]
  },
  {
    "id": "tp2023-50",
    "module": "Pediatria",
    "text": "Menino com 4 anos com mordida de cachorro conhecido e vacinado, ferimento único e superficial no braço. Foi feita limpeza. Qual a conduta?",
    "options": [
      "(A) Manter o cão em observação durante 10 dias.",
      "(B) Encaminhar a criança para vacinação antirrábica imediatamente.",
      "(C) Aplicar soro antirrábico imediatamente.",
      "(D) Se o cão não for vacinado, a criança deve receber vacina antirrábica."
    ],
    "correctAnswer": 0,
    "explanation": "Mordedura por cão é exposição ao vírus da raiva, mas a conduta depende do animal e da lesão. Aqui o cão é conhecido, vacinado, está sem sinais de raiva e pode ser observado, e o ferimento é único e superficial em braço, o que é classificado como acidente leve.\n\nNesse caso, o Ministério da Saúde orienta lavar bem a ferida com água e sabão e observar o animal por 10 dias. Se ele continuar saudável, o caso é encerrado sem vacina. Se o animal morrer, sumir ou apresentar sinais de raiva nesse período, inicia-se o esquema de vacina antirrábica. O período de 10 dias se explica porque o cão só transmite o vírus pela saliva poucos dias antes dos sintomas e morre logo depois.",
    "commentary": "Vacinação imediata (B): em acidente leve com cão observável e sadio, a vacina só é iniciada se o animal adoecer, morrer ou desaparecer durante a observação.\n\nSoro antirrábico imediato (C): é indicado em acidentes graves (ferimentos profundos, múltiplos ou em cabeça, mãos e pés) quando o animal é suspeito ou não pode ser observado, sempre junto com a vacina.\n\nVacinar se o cão não for vacinado (D): o que define a conduta é poder observar o animal e ele permanecer sadio, e não só a vacinação dele; mesmo um cão não vacinado pode ser observado por 10 dias.",
    "tip": "Cão ou gato sadio e observável + acidente leve = lavar com água e sabão e observar o animal por 10 dias.",
    "reference": "Normas técnicas Profilaxia Raiva – MS 2011",
    "tags": [
      "infectologia",
      "saúde pública"
    ]
  },
  {
    "id": "tp2022-57",
    "module": "Pediatria",
    "text": "Menina de 6 anos com AIJ oligoarticular e FAN positivo. Qual a complicação crônica mais esperada?",
    "options": [
      "(A) Uveíte anterior aguda.",
      "(B) Uveíte anterior crônica.",
      "(C) Síndrome de ativação macrofágica.",
      "(D) Síndrome inflamatória sistêmica."
    ],
    "correctAnswer": 1,
    "explanation": "Menina pequena com artrite crônica que começou em um joelho e, ao longo do tempo, atingiu poucas grandes articulações, com FAN positivo em título alto e fator reumatoide negativo: é artrite idiopática juvenil (AIJ) oligoarticular.\n\nNesse subtipo, sobretudo em meninas pequenas com FAN positivo, a complicação mais temida é a uveíte anterior crônica. Ela é silenciosa, sem olho vermelho ou dor, e pode levar a catarata, glaucoma e perda visual se não for detectada. Por isso essas crianças precisam de avaliação oftalmológica periódica com lâmpada de fenda, mesmo sem queixas, com intervalo mais curto (a cada 3 meses) no grupo de maior risco.",
    "commentary": "Uveíte anterior aguda (A): é sintomática (olho vermelho, dor, fotofobia) e típica da AIJ relacionada a entesite, em meninos maiores com HLA-B27.\n\nSíndrome de ativação macrofágica (C): complicação grave associada principalmente à forma sistêmica da AIJ, com febre, exantema e serosite, não à oligoarticular.\n\nMIS-C (D): síndrome inflamatória multissistêmica pós-covid-19, sem relação com o quadro crônico descrito.",
    "tip": "AIJ oligoarticular + menina pequena + FAN positivo = uveíte anterior crônica silenciosa: lâmpada de fenda periódica.",
    "reference": "Sen ES, Ramanan AV. Juvenile idiopathic arthritis-associated uveitis. Clin Immunol. 2020;211:108322.",
    "tags": [
      "reumatologia",
      "oftalmologia"
    ]
  },
  {
    "id": "tp2026-55",
    "module": "Pediatria",
    "text": "Criança de 2 anos e 4 meses, com tetralogia de Fallot, dá entrada na UBS com \"crise de hipoxemia\". Considerando a fisiopatologia da doença em questão, qual a melhor posição para acomodar a criança na maca de exame físico visando melhorar a hipoxemia?",
    "options": [
      "(A) Posição de Trendelemburg.",
      "(B) Posição genupeitoral.",
      "(C) Decúbito dorsal com as pernas esticadas.",
      "(D) Decúbito ventral com as pernas esticadas."
    ],
    "correctAnswer": 1,
    "explanation": "A posição genupeitoral eleva a resistência vascular sistêmica, reduzindo o shunt direita-esquerda no ventrículo e otimizando o fluxo sanguíneo pulmonar durante crises hipercianóticas.",
    "commentary": "Comentários sobre a resposta correta:\n(B) A crise de hipoxemia (ou crise hipercianótica) na Tetralogia de Fallot ocorre devido a um espasmo do infundíbulo pulmonar ou queda na resistência vascular sistêmica (RVS), o que desvia massivamente o sangue desoxigenado do ventrículo direito para a aorta através da ampla CIV (shunt direita-esquerda). A posição genupeitoral (knee-chest) ou o agachamento provoca a flexão dos membros inferiores sobre o tronco, o que acarreta a compressão mecânica das artérias femorais, elevando agudamente a RVS. Esse aumento de resistência dificulta a saída do sangue pela aorta, forçando um maior fluxo em direção à artéria pulmonar, reduzindo o shunt D-E e atenuando rapidamente a hipoxemia sistêmica.\n\nComentários sobre os distratores:\n(A) A posição de Trendelenburg melhora o retorno venoso, mas não atua aumentando a resistência vascular sistêmica para mitigar o shunt cardíaco primário.\n(C, D) Manter os membros inferiores estendidos reduz a resistência vascular sistêmica periférica, o que agrava o fluxo de shunt direita-esquerda e piora a hipoxemia.",
    "reference": "SOCIEDADE BRASILEIRA DE PEDIATRIA. Diretrizes em Cardiopatias Congênitas. | Kliegman, R. M. et al. Nelson Textbook of Pediatrics.",
    "tags": [
      "cardiologia",
      "emergência"
    ]
  },
  {
    "id": "tp2024-32",
    "module": "Clínica Médica",
    "text": "Homem de 32 anos procura a UBS, relatando ter apresentado primeira crise convulsiva há 1 mês, quando procurou o hospital. Na ocasião, foram descartadas causas agudas por meio de anamnese, exame físico, exames laboratoriais e de tomografia de crânio. Foi introduzido valproato em baixa dose (10mg/kg/dia). Evoluiu assintomático desde então. Exame físico sem alterações. A conduta adequada, de acordo com o protocolo do Ministério da Saúde, é:",
    "options": [
      "(A) Otimizar dose de valproato e reavaliar em 3 meses.",
      "(B) Manter dose de valproato e reavaliar em 3 meses.",
      "(C) Descontinuar valproato e reavaliar em 3 meses.",
      "(D) Manter valproato e realizar ressonância magnética de encéfalo."
    ],
    "correctAnswer": 2,
    "explanation": "O rapaz teve uma crise única, investigada sem causa aguda, tem exame físico normal e não há relato de lesão cerebral prévia, alteração no EEG nem crise durante o sono. Nessa situação, o risco de nova crise é relativamente baixo, e o protocolo do Ministério da Saúde não recomenda manter antiepiléptico após uma única crise sem fatores de risco.\n\nO valproato foi iniciado sem indicação clara e ainda traz efeitos adversos relevantes (ganho de peso, tremor, toxicidade hepática e teratogenicidade). A conduta é retirá-lo e reavaliar, orientando o paciente a procurar atendimento se houver nova crise; uma segunda crise não provocada define epilepsia e indica tratamento.",
    "commentary": "Otimizar a dose de valproato (A): não há indicação de tratar, então aumentar a dose expõe o paciente a efeitos adversos sem benefício.\n\nManter a dose (B): manter o fármaco sem indicação também não é recomendado após primeira crise sem fatores de risco.\n\nManter valproato e pedir ressonância (D): a ressonância pode completar a investigação, mas não justifica manter o antiepiléptico em um paciente sem critérios para tratamento.",
    "tip": "Primeira crise sem causa e sem fator de risco (EEG, lesão, exame, sono): não trate; espere a segunda.",
    "reference": "Tratado de Neurologia da Academia Brasileira de Neurologia, 2ª edição.",
    "tags": [
      "neurologia"
    ]
  },
  {
    "id": "tp2025-28",
    "module": "Clínica Médica",
    "text": "Paciente do sexo masculino, 55 anos, tabagista ativo acumulando carga tabágica de 60 anos-maço. Em tomografia de tórax de baixa dose, lesão sólida, em brônquio principal direito, expansiva, com padrão de crescimento concêntrico e atelectasia do segmento broncopulmonar correspondente. Escolha o método diagnóstico mais indicado para esse caso:",
    "options": [
      "(A) Encaminhamento para serviço de apoio diagnóstico e terapêutico para realizar PET Scan, para definição diagnóstica.",
      "(B) Encaminhamento para equipe de radiologia intervencionista para biopsia pulmonar transtorácica.",
      "(C) Exame de escarro e encaminhamento para laboratório de apoio da atenção primária para citologia.",
      "(D) Encaminhamento para serviço especializado de broncoscopia para escovado e biópsia brônquica."
    ],
    "correctAnswer": 3,
    "explanation": "A broncoscopia com escovado e biópsia brônquica é o método de escolha para lesão pulmonar central/proximal de crescimento concêntrico e atelectasia.",
    "commentary": "Trata-se de uma lesão proximal de brônquio principal direito com alto risco de origem epidermoide. Nestas condições, a abordagem endobrônquica via broncoscopia é preferencial e mais sensível/segura que punção transtorácica.",
    "reference": "Recomendações da Sociedade Brasileira de Cirurgia Torácica, Sociedade Brasileira de Pneumologia e Tisiologia e Colégio Brasileiro de Radiologia e Diagnóstico por Imagem para o rastreamento do câncer de pulmão no Brasil – 2024",
    "tags": [
      "pneumologia",
      "oncologia"
    ]
  },
  {
    "id": "tp2021-38",
    "module": "Clínica Médica",
    "text": "Homem, 58 anos, com antecedente de dislipidemia e tabagismo, apresenta dor epigástrica em queimação irradiada para região precordial, associada à náusea e sudorese há 7 horas. ECG: supradesnivelamento de ST em DII, DIII e AVF e infradesnivelamento em V1-V2. Evoluiu com hipotensão, dispneia intensa, sopro sistólico em foco mitral e crepitações pulmonares. A localização do IAM e possível complicação são:",
    "options": [
      "(A) Parede lateral; ruptura de septo interventricular.",
      "(B) Parede ínfero-dorsal; ruptura de músculo papilar.",
      "(C) Parede anterior; ruptura de músculo papilar.",
      "(D) Parede inferior; ruptura de septo interventricular."
    ],
    "correctAnswer": 1,
    "explanation": "O supradesnivelamento em DII, DIII e aVF representa infarto inferior do miocárdio, e o infradesnivelamento em espelho nas precordiais V1-V2 traduz acometimento dorsal concomitante (infarto ínfero-dorsal). A congestão súbita com hipotensão e o aparecimento de sopro de regurgitação mitral sela a complicação mecânica de insuficiência mitral aguda por isquemia/ruptura do músculo papilar.",
    "commentary": "A parede inferior e dorsal recebe irrigação habitual pela coronária direita ou pela artéria circunflexa, as quais são também as exclusivas condutoras de fluxo do músculo papilar posteromedial. Sendo assim, o infarto ínfero-dorsal predispõe fortemente a lesões agudas desse músculo papilar, induzindo insuficiência mitral aguda com congestão retrógrada catastrófica na monta descrita.",
    "reference": "ZIPES, MDP et al. Braunwald – Tratado de Doenças Cardiovasculares. 9ª ed. Rio de Janeiro: Elsevier, 2013",
    "tags": [
      "cardiologia",
      "emergência"
    ]
  },
  {
    "id": "tp2020-60",
    "module": "Clínica Médica",
    "text": "Mulher, 35 anos, em tratamento de Artrite Reumatoide (AR) com metotrexato + anti-TNF. Clinicamente, a patologia inflamatória (AR) está em remissão, sem uso de corticoterapia há anos. Queixa-se de calafrios noturnos, emagrecimento e tosse há 3 meses. A radiografia de tórax mostra um infiltrado no ápice pulmonar direito.\n\nDefina a complicação demonstrada:",
    "options": [
      "(A) Neoplasia pulmonar",
      "(B) Tuberculose pulmonar",
      "(C) Sarcoidose",
      "(D) Acometimento pulmonar da AR"
    ],
    "correctAnswer": 1,
    "explanation": "Paciente em uso de anti-TNF e metotrexato com febre noturna, emagrecimento, tosse por 3 meses e infiltrado apical: tuberculose pulmonar, complicação classicamente associada ao bloqueio do TNF (essencial para a formação e manutenção do granuloma).",
    "commentary": "Neoplasia, sarcoidose e acometimento pulmonar da AR são diferenciais, mas o contexto de imunobiológico e o quadro consumptivo com lesão apical apontam para tuberculose.",
    "reference": "Treatment of rheumatoid arthritis with tumor necrosis factor inhibitors may predispose to significant increase in tuberculosis risk: a multicenter active-surveillance report. Arthritis Rheum. 2003 Aug; 48(8): 2122-7. doi: 10.1002/art.11137. / Tuberculosis and biologics in rheumatology: A special situation. Int J Rheum Dis. 2017 Oct; 20(10): 1313-1325. doi: 10.1111/1756-185X.13129. / Tuberculosis risk and anti-tumour necrosis factor agents in rheumatoid arthritis: a critical appraisal of national registry data. Int J Rheum Dis. 2014 Sep; 17(7):716-24. doi: 10.1111/1756-185X.12375. / The Risk of Tuberculosis in Patients with Rheumatoid Arthritis Treated with Tumor Necrosis Factor-α Antagonist: A Metaanalysis of Both Randomized Controlled Trials and Registry/Cohort Studies. J Rheumatol. 2015 Dec;42(12):2229-37. doi: 10.3899/jrheum.150057. Epub 2015 Oct 15.",
    "tags": [
      "pneumologia",
      "tuberculose",
      "imunobiológicos"
    ]
  },
  {
    "id": "tp2023-63",
    "module": "Cirurgia",
    "text": "No trauma esplênico grau I, com estabilidade hemodinâmica e líquido na cavidade estimado em 500mL, que ocorreu 6 horas antes do atendimento, qual o tratamento recomendado?",
    "options": [
      "(A) Tratamento não-operatório em leito intensivo.",
      "(B) Punção abdominal.",
      "(C) Laparotomia com esplenectomia.",
      "(D) Laparoscopia diagnóstica e esplenectomia, se necessário."
    ],
    "correctAnswer": 0,
    "explanation": "Paciente com lesão esplênica grau I (hematoma ou laceração pequenos e superficiais), estável hemodinamicamente, avaliado 6 horas após o trauma, com cerca de 500 mL de líquido livre. Em pacientes estáveis, a maioria das lesões de baço para de sangrar sozinha, e o tratamento não operatório é o padrão, preservando o órgão e sua função imunológica.\n\nEsse tratamento exige vigilância: internação em local com monitorização (UTI ou unidade semi-intensiva), exames seriados (hemoglobina e exame abdominal), repouso e centro cirúrgico disponível. Se o paciente ficar instável ou tiver sinais de peritonite, indica-se a cirurgia; em casos selecionados com extravasamento de contraste, a angioembolização é uma alternativa.",
    "commentary": "Punção abdominal (B): a paracentese ou o lavado peritoneal só mostram que há sangue, o que a imagem já mostrou; não tratam nem mudam a conduta em paciente estável.\n\nLaparotomia com esplenectomia (C): é indicada em paciente instável ou com peritonite, não em lesão grau I estável.\n\nLaparoscopia com esplenectomia (D): procedimento invasivo sem indicação em paciente estável com lesão leve; a esplenectomia desnecessária ainda expõe a infecções graves por germes encapsulados.",
    "tip": "Trauma de baço com paciente estável = tratamento não operatório com monitorização; instabilidade = cirurgia.",
    "reference": "Sabiston: textbook of surgery; 21 edition, 2022; editora Elsevier",
    "tags": [
      "trauma"
    ]
  },
  {
    "id": "tp2022-75",
    "module": "Cirurgia",
    "text": "Homem de 18 anos com dor no epigástrio que migrou para FID, defesa abdominal e descompressão brusca positiva. Leucocitose 17.000. Próximo passo?",
    "options": [
      "(A) Tomografia de abdome.",
      "(B) Indicar apendicectomia.",
      "(C) Ultrassonografia de abdome.",
      "(D) Antibiótico e observação."
    ],
    "correctAnswer": 1,
    "explanation": "Homem jovem com dor que começou no epigástrio e migrou para a fossa ilíaca direita, náuseas, hiporexia, febre, defesa e descompressão brusca dolorosa na FID, leucocitose de 17.000 com desvio: é apendicite aguda clássica.\n\nPelo escore de Alvarado, ele soma pelo menos 8 pontos (migração da dor, anorexia, náuseas, dor em FID, descompressão, febre e leucocitose), o que torna o diagnóstico clínico muito provável. Em homem jovem com quadro típico, exames de imagem não acrescentam e só atrasam a cirurgia; a conduta é apendicectomia, com antibiótico profilático.\n\nA imagem fica para os casos duvidosos (escore intermediário), mulheres em idade fértil, idosos, crianças e suspeita de complicação.",
    "commentary": "Tomografia de abdome (A): tem ótima acurácia, mas é desnecessária quando a clínica já confirma o diagnóstico; atrasa a cirurgia e irradia o paciente.\n\nUltrassonografia (C): útil em crianças, gestantes e casos duvidosos; aqui não muda a conduta.\n\nAntibiótico e observação (D): o tratamento só com antibiótico é opção estudada para apendicite não complicada confirmada por imagem, com maior recorrência; com peritonismo e sem imagem, não é a conduta indicada.",
    "tip": "Homem jovem, dor migratória para FID, peritonismo e leucocitose (Alvarado alto): cirurgia, sem precisar de imagem.",
    "reference": "JAMA 2021 - Acute Appendicitis Review.",
    "tags": [
      "gastroenterologia",
      "emergência"
    ]
  },
  {
    "id": "tp2021-74",
    "module": "Cirurgia",
    "text": "Homem, 68 anos, refere jato urinário fraco e entrecortado, esforço para iniciar micção e noctúria há 6 meses. Antígeno prostático específico (PSA) do ano anterior de 1,2 ng/mL. PSA atual = 2,6 ng/mL. Toque retal: próstata com dimensões de aproximadamente 40 g de peso e consistência fibroelástica. Para descartar neoplasia maligna da próstata, deve-se solicitar inicialmente:",
    "options": [
      "(A) Tomografia computadorizada de abdome total.",
      "(B) Ressonância magnética multiparamétrica.",
      "(C) Ultrassom de abdome total e fosfatase alcalina.",
      "(D) Cintilografia com gálio-67."
    ],
    "correctAnswer": 1,
    "explanation": "Paciente com sintomas miccionais obstrutivos moderados, próstata de textura normal elástica ao toque, porém exibindo cinética de elevação rápida do PSA (ultrapassando velocidade limite aceitável de 0,75 ng/mL ao ano) tem indicação inicial de afastar adenocarcinoma por Ressonância Magnética Multiparamétrica (RMmp).",
    "commentary": "Apesar de exibir valor absoluto do PSA atual abaixo de 4,0 ng/mL, o paciente em tela apresenta critério de alta suspeição pela taxa de velocidade anual de ascensão sérica do antígeno prostático (que saltou de 1,2 para 2,6 ng/mL em apenas doze meses, um ganho bem acima do limite aceitável anualizado de 0,75 ng/mL). A conduta atual recomendada pelas sociedades de urologia e oncologia indica a feitura prévia de Ressonância Magnética Multiparamétrica (RMmp) para detecção de sítios suspeitos e cálculo do PI-RADS, permitindo orientar com precisão a posterior biópsia prostática dirigida. Tomografia e ultrassonografia simples de vias não dispõem de resolução ou acurácia estrutural fina para diagnóstico precoce de câncer intraprostático.",
    "reference": "Campbells Urology. 9th Edition. New York: Saunders Company, 2007. Zerati Filho M, Nardozza Jr A, Reis RB. Urologia fundamental. São Paulo: Planmark, 2010.",
    "tags": [
      "urologia",
      "oncologia",
      "ambulatório"
    ]
  },
  {
    "id": "tp2019-70",
    "module": "Cirurgia",
    "text": "Homem, 20 anos, vítima de capotamento de automóvel há 30 minutos, com escore de Glasgow = 7, com equimose periorbitária bilateral e trauma complexo de face com sangramento intenso.\n\nPA = 120 x 90 mmHg, FC = 100 bpm e FR = 18 ipm, saturação em ar ambiente de 96%. A conduta é:",
    "options": [
      "(A) Pela dificuldade de intubação e riscos envolvidos, a melhor opção é a cricotiroidostomia.",
      "(B) Como o paciente está estável, pelo risco da intubação poderá receber oxigênio em máscara ou cateter.",
      "(C) Pelo risco de lesão da coluna cervical, a intubação nasotraqueal deverá ser realizada cuidadosamente.",
      "(D) Para garantir uma via aérea definitiva, deve-se realizar a traqueostomia de emergência."
    ],
    "correctAnswer": 0,
    "explanation": "Trauma grave com Glasgow 7 exige via aérea definitiva. Há trauma complexo de face com sangramento intenso e sinais de fratura de base de crânio (equimose periorbitária bilateral): a intubação orotraqueal é difícil e a nasotraqueal está contraindicada.\n\nNessa situação, a via aérea cirúrgica indicada na emergência é a cricotireoidostomia.",
    "commentary": "Oxigênio por máscara não protege a via aérea com Glasgow ≤ 8. A intubação nasotraqueal é contraindicada na suspeita de fratura de base de crânio. A traqueostomia não é procedimento de emergência no adulto.",
    "reference": "Advanced Trauma Life Support. 10ª ed. 2018",
    "tags": [
      "cirurgia",
      "trauma",
      "via aérea"
    ]
  },
  {
    "id": "tp2024-91",
    "module": "Ginecologia e Obstetrícia",
    "text": "Puérpera (45 dias) com COVID-19 leve. Preocupada com a amamentação exclusiva. Qual a orientação?",
    "options": [
      "(A) Interromper amamentação; usar fórmula.",
      "(B) Continuar amamentando com precauções de higiene (máscara e lavagem das mãos).",
      "(C) Amamentar apenas se estiver vacinada.",
      "(D) Amamentar apenas se o bebê já tiver sido exposto."
    ],
    "correctAnswer": 1,
    "explanation": "O leite materno não é considerado meio de passagem do SARS-CoV-2 para o bebê, e amamentar continua trazendo benefícios ao bebê, inclusive anticorpos. Por isso Ministério da Saúde, OMS e sociedades de pediatria recomendam que a mãe com COVID-19, suspeita ou confirmada, continue amamentando.\n\nO cuidado é evitar a transmissão por gotículas: usar máscara durante as mamadas, higienizar as mãos antes de pegar a criança e higienizar superfícies. Essa orientação vale independentemente de a mãe estar vacinada.",
    "commentary": "Interromper e usar fórmula (A): suspender o aleitamento não protege o bebê, já que o leite não transmite o vírus, e o priva dos benefícios da amamentação.\n\nAmamentar só se vacinada (C): a recomendação de manter o aleitamento não depende do estado vacinal da mãe.\n\nAmamentar só se o bebê já foi exposto (D): não há base para essa restrição; com as medidas de higiene, a amamentação deve continuar em qualquer caso.",
    "tip": "Mãe com COVID-19: continua amamentando, com máscara e mãos lavadas.",
    "reference": "Centers for Disease Control and Prevention. (2021). Care for Breastfeeding People: Interim Guidance on Breastfeeding and Breast Milk Feeds in the Context of COVID-19. CDC. World Health Organization. (2020). Breastfeeding and COVID19: Scientific Brief. WHO. American Academy of Pediatrics. (2021). Breastfeeding During the COVID-19 Pandemic. AAP. Ministério da Saúde do Brasil (2021) Campanha incentiva o aleitamento materno no Brasil",
    "tags": [
      "puerpério",
      "aleitamento"
    ]
  },
  {
    "id": "tp2022-83",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher na menacme com ciclos regulares apresenta: Estradiol 300pg/mL, Progesterona 450ng/dL (fase lútea ref: 183-2390), LH 8,0 UI/L, FSH 8,0 UI/L. Podemos afirmar que ela:",
    "options": [
      "(A) Está menstruada.",
      "(B) Está grávida.",
      "(C) Teve ovulação.",
      "(D) Está no climatério pré-menopausal."
    ],
    "correctAnswer": 2,
    "explanation": "A chave está na progesterona: 450 ng/dL fica na faixa da fase lútea (183 a 2390 ng/dL), muito acima do valor da fase folicular. A progesterona alta só é produzida pelo corpo lúteo, que se forma a partir do folículo depois da ovulação. Então essa mulher ovulou e está na segunda metade do ciclo.\n\nOs demais exames combinam: estradiol dentro do esperado para a fase lútea e LH e FSH baixos (8 UI/L), sem pico ovulatório e sem a elevação típica da falência ovariana.",
    "commentary": "Está menstruada (A): na menstruação, estradiol e progesterona estão baixos, por causa da queda do corpo lúteo; aqui a progesterona está em nível lúteo.\n\nEstá grávida (B): a progesterona alta não basta para afirmar gravidez, que é feita pela dosagem do beta-hCG, não informada.\n\nClimatério pré-menopausal (D): a perda da função ovariana eleva as gonadotrofinas, principalmente o FSH; com FSH de 8 UI/L e ciclos regulares, não há indício de climatério.",
    "tip": "Progesterona em nível de fase lútea = houve ovulação (só o corpo lúteo produz progesterona em quantidade).",
    "reference": "Tratado de Ginecologia FEBRASGO, 2019.",
    "tags": [
      "endocrinologia"
    ]
  },
  {
    "id": "tp2025-86",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 33 anos, nuligesta, teve a menarca aos 13 anos. Refere vida sexual activa, em uso regular de preservativo. Relata que apresentava cólicas menstruais leves que melhoravam com analgésicos, mas há 2 anos as dores pioraram e atualmente não melhoram nem com anti-inflamatórios. Apresenta queixa de dispareunia de profundidade, que se iniciou há 1 ano. Diante do quadro descrito, assinale a conduta correta:",
    "options": [
      "(A) Ultrassonografia transvaginal",
      "(B) Introdução de anticoncepcional oral",
      "(C) Videolaparoscopia diagnóstica",
      "(D) Tomografia computadorizada de pelve"
    ],
    "correctAnswer": 0,
    "explanation": "A Ultrassonografia Transvaginal (com preparo intestinal prévio) consagra-se como o método propedêutico não invasivo de primeira escolha para iniciar a propedêutica de dismenorreia secundária refratária.",
    "commentary": "A progressão severa adquirida de dismenorreia refratária aos analgésicos e anti-inflamatórios em associação com dispareunia de profundidade sugere fortemente a hipótese de endometriose profunda infiltrativa (dismenorreia secundária). No itinerário de investigação diagnóstica inicial, a Ultrassonografia Transvaginal especializada com preparo intestinal constitui o primeiro exame complementar de imagem de escolha, dotado de alta sensibilidade diagnóstica. Métodos puramente empíricos terapêuticos ou videolaparoscopia direta ficam preteridos até o término do estudo por imagem.",
    "reference": "HOFFMAN, Barbara L. et al. Ginecologia de Williams. Grupo A, 2014; ACOG Practice Bulletin: Diagnosis and Management of Endometriosis, 2021.",
    "tags": [
      "ginecologia geral",
      "dor pélvica"
    ]
  },
  {
    "id": "tp2021-93",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 34 anos, veio à consulta médica de rotina. Na anamnese, referiu que seu pai havia apresentado câncer de mama aos 40 anos de idade. O exame das mamas foi normal. A conduta é indicar:",
    "options": [
      "(A) Mamografia imediatamente e controle anual.",
      "(B) Mamografia anual a partir de 40 anos.",
      "(C) Mamografia bianual a partir dos 40 anos.",
      "(D) Ultrassom de mamas imediatamente."
    ],
    "correctAnswer": 0,
    "explanation": "A presença de câncer de mama em parente masculino de primeiro grau, independentemente da idade do diagnóstico de parentesco, eleva de maneira acentuada a susceptibilidade familiar a mutações hereditárias (ex: genes BRCA1/2), enquadrando a paciente no grupo de alto risco. O rastreamento de alto risco com mamografia deve iniciar aos 30 anos de idade, ou 10 anos antes do tumor do parente jovem mais próximo (nunca antes dos 25 anos). Como a paciente tem 34 anos, deve iniciar mamografia anual imediatamente.",
    "commentary": "Grupos populacionais de alto risco para neoplasia de mama devem receber rastreamento anual individualizado antecipado e diferenciado. O câncer de mama no pai (masculino) confere alto risco hereditário para a prole. Recomenda-se iniciar a mamografia anual retrospectivamente aos 30 anos ou estimando dez anos antes do aparecimento do câncer familiar primário de maior juventude relevante. Tendo o pai recebido o diagnóstico aos 40 anos, a paciente deve iniciar sua mamografia agora (imediatamente), aos 34 anos, de forma anual.",
    "reference": "Diretrizes para a detecção precoce do câncer de mama no Brasil, INCA, 2015; Cadernos de Atenção Básica de Controle dos Cânceres nº 13, Ministério da Saúde.",
    "tags": [
      "mastologia",
      "rastreamento",
      "câncer de mama"
    ]
  },
  {
    "id": "tp2019-100",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 33 anos de idade, apresenta citologia cervical compatível com lesão intraepitelial de baixo grau (LIEBG/LSIL).\n\nDe acordo com as orientações do Instituto Nacional do Câncer (INCA), como deve ser o seguimento desta mulher?",
    "options": [
      "(A) Repetir a citologia imediatamente e, se persistir a alteração, encaminhar para colposcopia.",
      "(B) Repetir a citologia em 6 meses e, se persistir a alteração, encaminhar para colposcopia.",
      "(C) Ser encaminhada para a colposcopia imediata.",
      "(D) Colher exame de detecção de DNA-HPV."
    ],
    "correctAnswer": 1,
    "explanation": "Pelas diretrizes do INCA (2016) para rastreamento citológico, a lesão intraepitelial de baixo grau em mulheres com 25 anos ou mais deve ser seguida com repetição da citologia em 6 meses. Se a alteração persistir, a paciente é encaminhada para colposcopia.",
    "commentary": "A colposcopia imediata é para lesões de alto grau. Observação: com a nova diretriz de rastreamento por DNA-HPV (INCA, 2024), a conduta passa a depender do resultado do teste de HPV nos locais que já a adotaram.",
    "reference": "Diretrizes brasileiras para o rastreamento do câncer do colo do útero / Instituto Nacional de Câncer. Coordenação Geral de Ações Estratégicas. Divisão de Apoio à Rede de Atenção Oncológica. – Rio de Janeiro: INCA, 2011. ISBN 978-85-7318-184-5",
    "tags": [
      "ginecologia",
      "rastreamento",
      "câncer de colo uterino"
    ]
  },
  {
    "id": "tp2024-119",
    "module": "Saúde Coletiva",
    "text": "Em comunidades pobres, qual a melhor intervenção para apoiar uma mãe com dificuldades na amamentação?",
    "options": [
      "Oferecer apoio emocional e orientação sobre técnicas de amamentação.",
      "Introduzir alimentos sólidos precocemente (antes dos 6 meses).",
      "Fornecer fórmulas infantis industrializadas como primeira opção.",
      "Substituir o leite materno por leite de vaca in natura."
    ],
    "correctAnswer": 0,
    "explanation": "A maior parte das dificuldades na amamentação (pega incorreta, posição inadequada, dor mamilar, sensação de pouco leite, insegurança) é resolvida com aconselhamento: ouvir a mãe, observar a mamada, corrigir a técnica e reforçar a confiança dela.\n\nEm comunidades com poucos recursos, manter o aleitamento exclusivo até os 6 meses é ainda mais valioso: o leite materno é gratuito, sempre disponível, sem risco de contaminação na preparação e protege contra diarreia e infecções respiratórias. Por isso a intervenção indicada é apoio emocional somado a orientação prática, de preferência com acompanhamento pela equipe da atenção básica.",
    "commentary": "Introduzir sólidos antes dos 6 meses (B): diminui a sucção e, com ela, a produção de leite, e aumenta o risco de infecções e de alergias; a alimentação complementar começa aos 6 meses.\n\nFórmula como primeira opção (C): desestimula o aleitamento, é cara para a família e, em locais com água e higiene precárias, aumenta o risco de diluição errada e contaminação.\n\nLeite de vaca no lugar do leite materno (D): não é adequado para o lactente pequeno, pois tem excesso de proteína e sódio e pouco ferro, favorecendo anemia e sobrecarga renal.",
    "tip": "Dificuldade para amamentar: o tratamento é aconselhamento (pega, posição e confiança), não fórmula.",
    "reference": "Ministério da Saúde (Brasil). \"Saúde da Criança: Nutrição Infantil - Aleitamento Materno e Alimentação Complementar.\" Cadernos de Atenção Básica, n. 33. Brasília: Ministério da Saúde, 2015. Rede IBFAN Brasil. \"Manual de Aconselhamento em Amamentação.\" São Paulo: IBFAN Brasil, 2012. Sociedade Brasileira de Pediatria (SBP). \"Aleitamento Materno: Manual de Orientação.\" 4ª edição, 2018. World Health Organization (WHO) e Fundo das Nações Unidas para a Infância (UNICEF). \"Estratégia Global para a Alimentação de Lactentes e Crianças de Primeira Infância.\" Brasília: Ministério da Saúde, 2003.",
    "tags": [
      "aleitamento materno",
      "saúde da criança",
      "puericultura"
    ]
  },
  {
    "id": "tp2022-109",
    "module": "Saúde Coletiva",
    "text": "Gestante de 32 semanas com HIV positivo recém-descoberto. CV desconhecida. Sobre as recomendações do Ministério da Saúde para o parto:",
    "options": [
      "(A) Parto natural induzido na 34ª semana.",
      "(B) Cesárea eletiva após a 38ª semana e AZT injetável 3h antes.",
      "(C) Parto induzido apenas se ultrapassar a 40ª semana com AZT injetável.",
      "(D) Cesárea eletiva após 34 semanas."
    ],
    "correctAnswer": 1,
    "explanation": "Gestante com HIV descoberto com 32 semanas e sem carga viral: a via de parto é decidida pela carga viral a partir de 34 semanas. Se nesse momento ela não é conhecida, ou passa de 1.000 cópias/mL, o Ministério da Saúde indica cesárea eletiva a partir de 38 semanas, antes do início do trabalho de parto e com bolsa íntegra, porque isso reduz a transmissão vertical.\n\nNessas gestantes, o AZT (zidovudina) intravenoso é iniciado pelo menos 3 horas antes da cesárea (ou no início do trabalho de parto) e mantido até o clampeamento do cordão. Ao mesmo tempo, ela deve começar já a terapia antirretroviral e colher a carga viral, que pode mudar o planejamento se vier baixa a tempo.",
    "commentary": "Parto natural induzido com 34 semanas (A): indução prematura não tem indicação, e o parto vaginal só é opção com carga viral abaixo de 1.000 cópias/mL; o dolutegravir oral não substitui o AZT intravenoso no parto.\n\nIndução só após 40 semanas (C): com carga viral desconhecida, a via indicada é a cesárea eletiva, não a espera pelo trabalho de parto.\n\nCesárea eletiva após 34 semanas (D): antecipar a cesárea traria riscos de prematuridade; ela é programada a partir de 38 semanas.",
    "tip": "HIV na gestação com carga viral desconhecida ou acima de 1.000 após 34 semanas: cesárea eletiva com 38 semanas + AZT IV 3 h antes.",
    "reference": "Protocolo Transmissão Vertical HIV/Sífilis/Hepatites, 2022.",
    "tags": [
      "obstetrícia",
      "infectologia"
    ]
  },
  {
    "id": "tp2021-108",
    "module": "Saúde Coletiva",
    "text": "No primeiro mês de epidemia de febre amarela, registraram-se 20 casos numa comunidade indígena composta por 500 indivíduos. No mesmo período, 5 índios morreram em consequência da doença. As taxas de ataque/incidência, de mortalidade e de letalidade dessa doença neste período, considerando a base de 100 indivíduos, foram respectivamente de:",
    "options": [
      "(A) 4; 1; 25",
      "(B) 25; 1; 4",
      "(C) 4; 25; 1",
      "(D) 25; 4; 1"
    ],
    "correctAnswer": 0,
    "explanation": "As taxas calculadas em porcentagem (base de 100 indivíduos) são:\n1) Taxa de ataque (incidência no surto) = (20 casos / 500 expostos) * 100 = 4%.\n2) Taxa de mortalidade = (5 óbitos / 500 indivíduos sob risco) * 100 = 1%.\n3) Taxa de letalidade = (5 óbitos / 20 doentes) * 100 = 25%.",
    "commentary": "Os coeficientes epidemiológicos medem distintos atributos da doença:\n- Taxa de Ataque estima a incidência cumulativa numa população exposta síncrona durante período epidêmico: 20/500 = 0,04 (ou 4%).\n- Taxa de Mortalidade estima a proporção absoluta sobre a população exposta total de quem veio a morrer daquela causa: 5/500 = 0,01 (ou 1%).\n- Taxa de Letalidade avalia o potencial de gravidade ou agressividade clínica do agravo (óbitos entre os doentes aferidos): 5/20 = 0,25 (ou 25%).",
    "reference": "ROUQUAYROL, M. Z. & GURGEL, M. Epidemiologia & saúde. 7. ed. Rio de Janeiro: Medbook, 2013.",
    "tags": [
      "epidemiologia",
      "coeficientes de saúde",
      "febre amarela"
    ]
  },
  {
    "id": "tp2019-108",
    "module": "Saúde Coletiva",
    "text": "Um pesquisador diz que um determinado exame laboratorial tem sensibilidade de 98% para o diagnóstico de uma doença.\n\nEle está dizendo que:",
    "options": [
      "(A) 98% dos indivíduos que não têm essa doença terão resultados negativos nesse exame.",
      "(B) 2% dos indivíduos que têm essa doença terão resultados negativos para ela.",
      "(C) 98% dos indivíduos que têm resultados positivos para essa doença serão verdadeiramente doentes.",
      "(D) 2% dos indivíduos que não têm essa doença terão resultados positivos para ela."
    ],
    "correctAnswer": 1,
    "explanation": "Sensibilidade é a proporção de doentes com teste positivo. Sensibilidade de 98% significa que 98% dos doentes testam positivo — e, portanto, 2% dos doentes terão resultado negativo (falsos negativos).",
    "commentary": "A alternativa A descreve especificidade. A C descreve valor preditivo positivo. A D descreve o complemento da especificidade (falsos positivos).",
    "reference": "Weiss, N S. Clinical Epidemiology. In: Rothman KJ, Organizador. Modern Epidemiology. 3o. Philadelphia: Lippincott Williams & Wilkins; 2008. p. 641.",
    "tags": [
      "saúde coletiva",
      "epidemiologia",
      "testes diagnósticos"
    ]
  },
  {
    "id": "tp2022-18",
    "module": "Ciências Básicas",
    "text": "Criança de 4 anos é atendida no pronto-socorro com história de um dia de febre alta e cefaleia intensa. Ao exame, nota-se rigidez de nuca. A amostra colhida do líquor apresenta conteúdo turvo e na bacterioscopia visualizam-se diplococos Gram-negativos. O provável patógeno é:",
    "options": [
      "(A) Streptococcus pneumoniae",
      "(B) Staphylococcus aureus",
      "(C) Neisseria meningitidis",
      "(D) Haemophilus influenzae"
    ],
    "correctAnswer": 2,
    "explanation": "Febre alta, cefaleia intensa e rigidez de nuca com líquor turvo indicam meningite bacteriana. A bacterioscopia com diplococos Gram-negativos aponta para Neisseria meningitidis, o meningococo, que também pode causar meningococcemia com petéquias e choque.\n\nNa prática: iniciar ceftriaxona sem atraso, notificar imediatamente e fazer quimioprofilaxia dos contatos próximos (rifampicina é a opção mais usada).",
    "commentary": "Streptococcus pneumoniae (A): também causa meningite, mas aparece como diplococo Gram-positivo (lanceolado).\n\nStaphylococcus aureus (B): é coco Gram-positivo em cachos e é causa rara de meningite fora de contexto de neurocirurgia, trauma ou derivação.\n\nHaemophilus influenzae (D): causa meningite em crianças pequenas (hoje rara com a vacina), mas é cocobacilo Gram-negativo, não diplococo.",
    "tip": "Líquor com diplococo Gram-negativo = meningococo; Gram-positivo = pneumococo; cocobacilo Gram-negativo = Haemophilus.",
    "reference": "JAWETZ, E. et al. Microbiologia médica. 21. ed. Rio de Janeiro: Guanabara Koogan, 2000.",
    "tags": [
      "microbiologia",
      "pediatria",
      "infectologia"
    ]
  },
  {
    "id": "tp2021-15",
    "module": "Ciências Básicas",
    "text": "A fibrose cística é causada por mutações no gene CFTR. Algumas substituições de bases não resultam em doença. Isso é explicado por mutações:",
    "options": [
      "(A) De sentido trocado.",
      "(B) Compensadoras.",
      "(C) Sem sentido.",
      "(D) Silenciosas."
    ],
    "correctAnswer": 3,
    "explanation": "Mutações silenciosas caracterizam-se por substituições de nucleotídeos que mantêm a codificação do mesmo aminoácido original devido ao código genético degenerativo.",
    "commentary": "Sendo o código genético degenerativo/redundante, múltiplos códons de trincas de nucleotídeos especificam o mesmo aminoácido. Uma mutação silenciosa altera a base mas gera o mesmo aminoácido residual na proteína CFTR, preservando sua integridade funcional e biológica.",
    "reference": "Nussbaum RL, McInnes RR, Willard HF. Thompson & Thompson. Genética Médica, 7a. Ed., Guanabara Koogan, Rio de Janeiro, 2008.",
    "tags": [
      "genética",
      "biologia molecular"
    ]
  },
  {
    "id": "tp2019-16",
    "module": "Ciências Básicas",
    "text": "Paciente com quadro de coágulo migratório (êmbolo) na veia femoral profunda direita, associado a trombo no ventrículo esquerdo.\n\nOs destinos finais dos fenômenos tromboembólicos podem ser, respectivamente:",
    "options": [
      "(A) Átrio direito e artéria cerebral anterior direita.",
      "(B) Ventrículo esquerdo e artéria cerebral posterior direita.",
      "(C) Pulmão direito e artéria cerebral média direita.",
      "(D) Ventrículo direito e artéria cerebral anterior esquerda."
    ],
    "correctAnswer": 2,
    "explanation": "O êmbolo da veia femoral segue pela cava inferior até o coração direito e se impacta na circulação pulmonar (tromboembolismo pulmonar). O trombo do ventrículo esquerdo vai para a circulação sistêmica; pela carótida, atinge mais frequentemente a artéria cerebral média, continuação direta da carótida interna.",
    "commentary": "Átrio e ventrículo direito são locais de passagem, não destino final do êmbolo venoso. A artéria cerebral posterior deriva do sistema vertebrobasilar, menos atingido por êmbolos cardíacos.",
    "reference": "Moore KL. Anatomia Orientada para a Clínica. 6a ed. Rio de Janeiro: Guanabara Koogan; 2011.",
    "tags": [
      "anatomia",
      "tromboembolismo",
      "circulação"
    ]
  },
  {
    "id": "enamed-2025-52",
    "module": "Pediatria",
    "text": "Mãe de menina de 11 meses, em consulta de puericultura, relata que não há queixas específicas no momento e refere que a criança está começando a trocar passos de maneira independente. Apresenta marcos do desenvolvimento anteriores a 11 meses dentro da normalidade e bom ganho pôndero-estatural. Gestação e parto sem intercorrências.\n\nO reflexo primitivo usualmente presente nessa faixa etária é o",
    "options": [
      "(A) reflexo plantar.",
      "(B) reflexo de Moro.",
      "(C) reflexo de procura.",
      "(D) reflexo tônico cervical."
    ],
    "correctAnswer": 0,
    "explanation": "O reflexo plantar (Babinski fisiológico) é um reflexo primitivo que normalmente permanece presente em lactentes e crianças pequenas, podendo persistir de forma fisiológica até aproximadamente 12 a 24 meses de idade devido à incompleta mielinização do trato corticoespinal (via piramidal).",
    "commentary": "Os demais reflexos primitivos desaparecem bem mais cedo no desenvolvimento do lactente normal: o reflexo de procura (C) some com 3 a 4 meses; o reflexo de Moro (B) desaparece entre 4 e 6 meses; e o reflexo tônico-cervical assimétrico (D) desaparece por volta dos 6 meses de idade.",
    "reference": "Nelson Tratado de Pediatria / Sociedade Brasileira de Pediatria (SBP)",
    "tags": [
      "pediatria",
      "puericultura",
      "desenvolvimento infantil",
      "reflexos primitivos"
    ]
  },
  {
    "id": "enamed-2025-85",
    "module": "Clínica Médica",
    "text": "Mulher de 42 anos é levada pelo irmão à Unidade de Pronto Atendimento (UPA) com fala alterada, lentificação, tontura e sonolência após relatar ingestão intencional de grande quantidade de clonazepam pouco tempo antes. A paciente evolui com hipotensão, rebaixamento do nível de consciência, coma e necessidade de ventilação mecânica.\n\nQual medicação é indicada nessa situação?",
    "options": [
      "(A) N-acetilcisteína.",
      "(B) Flumazenil.",
      "(C) Naloxona.",
      "(D) Atropina."
    ],
    "correctAnswer": 1,
    "explanation": "O clonazepam pertence à classe dos benzodiazepínicos. O flumazenil é um antagonista competitivo específico dos receptores benzodiazepínicos e pode ser utilizado para reverter a sedação e depressão do sistema nervoso central induzidas por essas substâncias em casos de intoxicação aguda grave (como coma e depressão respiratória).",
    "commentary": "A N-acetilcisteína (A) é o antídoto específico para a intoxicação por paracetamol. A naloxona (C) reverte os efeitos de opioides. A atropina (D) é indicada no tratamento de intoxicações por organofosforados/carbamatos (síndrome colinérgica). Nota clínica: na prática real, o flumazenil deve ser usado com extrema cautela devido ao risco de desencadear convulsões refratárias em usuários crônicos de benzodiazepínicos ou em co-ingestão de agentes pró-convulsivantes.",
    "reference": "Medicina de Emergência / Toxicologia Clínica",
    "tags": [
      "clínica médica",
      "toxicologia",
      "emergência",
      "intoxicação",
      "benzodiazepínicos",
      "flumazenil"
    ]
  },
  {
    "id": "enamed-2026-63",
    "module": "Saúde Coletiva",
    "text": "Uma equipe técnica do Ministério da Saúde está avaliando os efeitos da redução do ponto de corte da medida de PA sistólica de 130 mmHg para 120 mmHg para o diagnóstico de hipertensão arterial (HA).\n\nConsiderando-se as mudanças nos valores de referência, o que se espera em relação ao diagnóstico de HA?",
    "options": [
      "(A) Aumento na detecção da HA e redução na frequência de falsos positivos.",
      "(B) Aumento na detecção da HA e aumento na frequência de falsos positivos.",
      "(C) Redução na detecção da HA e redução na frequência de falsos positivos.",
      "(D) Redução na detecção da HA e aumento na frequência de falsos positivos."
    ],
    "correctAnswer": 1,
    "explanation": "Reduzir o ponto de corte para o diagnóstico (de 130 para 120 mmHg) aumenta a sensibilidade e diminui a especificidade do critério.\n\nAssim, mais pessoas serão classificadas como hipertensas (aumento da detecção), mas também haverá mais falsos positivos.",
    "commentary": "Toda mudança de ponto de corte gera um trade-off: não é possível aumentar a detecção e reduzir falsos positivos ao mesmo tempo apenas deslocando o limiar. (Gabarito preliminar do INEP.)",
    "reference": "Fletcher RH. Epidemiologia Clínica — Testes diagnósticos e pontos de corte",
    "tags": [
      "saúde coletiva",
      "epidemiologia",
      "hipertensão"
    ]
  },
  {
    "id": "unifesp2025-14",
    "module": "Cirurgia",
    "text": "Mulher, 32 anos, vem ao ambulatório com tubo T devido estenose traqueal. Refere que está com esta órtese há 7 meses. Durante investigação complementar é realizada uma broncoscopia que evidencia estenose fixa, compreendendo 1º e 2º anéis traqueais sem processo inflamatório local.\n\nQual a conduta mais adequada?",
    "options": [
      "(A) Realizar a troca do tubo T.",
      "(B) Programar traqueoplastia.",
      "(C) Corticoterapia.",
      "(D) Cânula metálica."
    ],
    "correctAnswer": 1,
    "explanation": "Estenose traqueal fixa, curta (1º e 2º anéis), sem atividade inflamatória e já tratada com órtese (tubo T) por 7 meses: lesão cicatricial madura.\n\nSem inflamação e com segmento curto, a paciente é candidata ao tratamento definitivo com ressecção do segmento estenótico e anastomose término-terminal (traqueoplastia), que tem altas taxas de cura. O tubo T é uma medida temporária enquanto a lesão amadurece ou quando o paciente não pode ser operado.",
    "commentary": "Troca do tubo T (A): perpetua o tratamento paliativo em uma paciente candidata à correção definitiva.\n\nCorticoterapia (C): útil na fase inflamatória; não age sobre estenose fibrótica madura.\n\nCânula metálica (D): é uma traqueostomia definitiva, que não trata a estenose e compromete a fonação.",
    "reference": "Grillo HC — Surgery of the Trachea and Bronchi / Diretrizes da SBCT",
    "tags": [
      "cirurgia torácica",
      "estenose traqueal"
    ]
  },
  {
    "id": "unifesp2025-51",
    "module": "Saúde Coletiva",
    "text": "Para determinar se, de fato, um programa de rastreamento de câncer de próstata é benéfico para aumento da longevidade de homens (\"prolongar vidas\"), qual dos seguintes desfechos clínicos é o mais adequado?",
    "options": [
      "(A) Redução na mortalidade geral.",
      "(B) Redução na mortalidade específica por câncer de próstata.",
      "(C) Aumento na sobrevida em 5 anos."
    ],
    "correctAnswer": 0,
    "explanation": "Para saber se o rastreamento 'prolonga vidas', o desfecho mais adequado é a mortalidade geral (por todas as causas).\n\nA mortalidade específica pode cair sem ganho real de longevidade se o rastreamento e o tratamento (biópsias, prostatectomia, radioterapia) causarem mortes por outras causas, ou se houver erro na atribuição da causa do óbito. A mortalidade geral capta o efeito líquido.",
    "commentary": "Mortalidade específica (B): é o desfecho usual dos ensaios de rastreamento, mas não demonstra aumento da longevidade, pois ignora mortes causadas pela própria intervenção.\n\nSobrevida em 5 anos (C): sujeita aos vieses de tempo de antecipação (lead time), de duração (length bias) e de sobrediagnóstico; aumenta mesmo que ninguém viva mais.",
    "reference": "Fletcher — Epidemiologia Clínica (Prevenção) / USPSTF Prostate Cancer Screening",
    "tags": [
      "epidemiologia",
      "rastreamento",
      "câncer de próstata",
      "vieses"
    ]
  },
  {
    "id": "unifesp2025-86",
    "module": "Pediatria",
    "text": "Menino, 10 anos de idade, joga futebol desde pequeno; queixa-se de que há 5 meses vem apresentando dificuldade para correr, há um mês não consegue terminar a partida devido a crises de tosse seca e falta de ar. Há 2 semanas, com resfriado, piorou da tosse, principalmente na madrugada e pela manhã. Tem diagnóstico de rinite alérgica.\n\nQual dos exames abaixo confirma a principal hipótese diagnóstica para sua queixa?",
    "options": [
      "(A) PHmetria",
      "(B) Rx de tórax",
      "(C) Prova de função pulmonar",
      "(D) IgE específicos para aeroalérgenos"
    ],
    "correctAnswer": 2,
    "explanation": "Escolar com rinite alérgica, tosse seca e dispneia desencadeadas por exercício e infecção viral, com piora noturna e matinal: asma (com broncoespasmo induzido por exercício).\n\nA confirmação é funcional: espirometria (prova de função pulmonar) com obstrução reversível ao broncodilatador. Se a espirometria for normal, faz-se broncoprovocação (por exemplo, por exercício).",
    "commentary": "pHmetria (A): investiga doença do refluxo, que não é a hipótese principal.\n\nRadiografia de tórax (B): geralmente normal na asma; não confirma o diagnóstico.\n\nIgE para aeroalérgenos (D): documenta sensibilização (atopia), não a doença das vias aéreas.",
    "reference": "GINA 2024 / Diretrizes da SBPT para o manejo da asma (2020)",
    "tags": [
      "pediatria",
      "asma",
      "espirometria",
      "broncoespasmo induzido por exercício"
    ]
  }
];
