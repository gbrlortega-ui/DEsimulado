// Arquivo gerado por `npm run gen` a partir do banco de questões. Não editar à mão.
// O build e o servidor local regeneram este arquivo sozinhos; o `npm run validate` acusa se ficar desatualizado.
import type { Question } from '../types';

export const TOTAL_QUESTIONS = 1259;

export const COUNT_BY_AREA: Record<string, number> = {
  "Pediatria": 218,
  "Clínica Médica": 246,
  "Cirurgia": 204,
  "Ginecologia e Obstetrícia": 210,
  "Saúde Coletiva": 221,
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
  "Pediatria|UNIFESP": 19
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
    "id": "tp2023-48",
    "module": "Pediatria",
    "text": "Criança com quatro anos apresenta menos de três evacuações completas por semana há dois meses. As fezes são em cíbalos. Ainda queixa falta de apetite, que melhora com a evacuação. Apresenta evidência de postura retentiva. Assinale a alternativa correta em relação ao diagnóstico e conduta para o caso:",
    "options": [
      "(A) Constipação funcional; indicar o uso de laxativos e manter por tempo prolongado nesse caso.",
      "(B) Ritmo intestinal normal; o uso de laxativos não está indicado nesse caso.",
      "(C) Constipação crônica; indicar óleo mineral, que é a primeira escolha nesse caso.",
      "(D) Constipação crônica secundária; indicar Lactulose."
    ],
    "correctAnswer": 0,
    "explanation": "Criança de 4 anos com no máximo duas evacuações por semana há 2 meses, fezes em cíbalos (endurecidas) e postura de retenção preenche os critérios de Roma IV de constipação funcional. Sem sinais de alarme (início no primeiro mês de vida, atraso para eliminar mecônio, sangue nas fezes, falha de crescimento, alterações neurológicas), não é preciso investigar causa orgânica.\n\nO tratamento inclui orientação da família, treino de toalete após as refeições, dieta com fibras e líquidos e laxativo. O polietilenoglicol é o de primeira escolha. O laxativo deve ser mantido por meses (em geral pelo menos 2 meses após a normalização do hábito) e retirado aos poucos, porque a suspensão precoce leva a recaídas.",
    "commentary": "Ritmo intestinal normal (B): duas ou menos evacuações por semana, com fezes duras e retenção, é constipação e precisa de tratamento.\n\nÓleo mineral como primeira escolha (C): é uma alternativa, mas não a primeira opção, e tem risco de pneumonia lipoídica se aspirado; a escolha preferencial é o polietilenoglicol.\n\nConstipação secundária com lactulose (D): nada no caso sugere causa orgânica; a lactulose é uma alternativa ao polietilenoglicol, não a conduta específica.",
    "tip": "Constipação funcional na criança: polietilenoglicol + treino de toalete, mantidos por meses e retirados aos poucos.",
    "reference": "Morais, MB et al. Constipação intestinal Jornal de Pediatria - Vol. 76, Supl.2, 2000 S149. Bresolin, NL et al. Disfunção Vesical e Intestinal na Infância. SBP. Nº 03, maio de 2019. MARCONDES, E. et al. Pediatria Básica: pediatria geral e neonatal. 9. ed. São Paulo: Sarvier, 2003.",
    "tags": [
      "gastroenterologia"
    ]
  },
  {
    "id": "tp2022-55",
    "module": "Pediatria",
    "text": "Menino de 3 anos, convulsão tônico-clônica única de 5 min durante quadro febril (otite). História familiar positiva para crises febris. Exame neurológico normal. Tipo de crise e conduta:",
    "options": [
      "(A) Crise febril complexa; punção lombar e profilaxia com benzo.",
      "(B) Crise febril simples; punção lombar e fenobarbital contínuo.",
      "(C) Crise febril simples; tratar otite, orientar antitérmico e benignidade.",
      "(D) Crise febril complexa; diagnosticar etiologia e orientação."
    ],
    "correctAnswer": 2,
    "explanation": "Criança de 3 anos com febre por otite média aguda que teve uma única crise tônico-clônica generalizada de 5 minutos, com recuperação completa e exame neurológico normal: é crise febril simples. Ela é generalizada, dura menos de 15 minutos, não se repete em 24 horas e não deixa déficit focal; a história familiar é comum.\n\nO diagnóstico é clínico, e o foco é tratar a causa da febre (aqui, a otite). Não há indicação de punção lombar nem de anticonvulsivante contínuo. A família deve ser tranquilizada: o quadro é benigno, mas pode voltar em novos episódios febris; antitérmicos dão conforto, embora não previnam a recorrência.",
    "commentary": "Crise complexa com punção e benzodiazepínico (A): crise complexa é focal, dura 15 minutos ou mais ou se repete em 24 horas, o que não ocorreu; punção e profilaxia intermitente não são rotina.\n\nPunção e fenobarbital até os 5 anos (B): a crise simples não pede profilaxia contínua, cujos efeitos adversos superam o benefício; punção lombar se considera em menores de 12 meses ou com sinais meníngeos.\n\nCrise complexa (D): a classificação está errada pelos mesmos motivos da alternativa A.",
    "tip": "Crise febril simples: generalizada, menos de 15 min, única em 24 h. Trate a febre e tranquilize a família.",
    "reference": "Machado MR, Residência Pediátrica 2018.",
    "tags": [
      "neurologia"
    ]
  },
  {
    "id": "tp2026-42",
    "module": "Pediatria",
    "text": "Criança de 8 anos dá entrada no hospital com queixa de evacuações dolorosas há 4 meses. A mãe relata que a criança evacua cerca de duas vezes por semana, fezes endurecidas e de grande volume, além de apresentar episódios ocasionais de escape fecal. Refere dor abdominal associada à evacuação, que se intensificou nas últimas 24 horas. Considerando esse quadro clínico, o diagnóstico mais provável é:",
    "options": [
      "(A) Doença orgânica intestinal",
      "(B) Síndrome do intestino irritável",
      "(C) Constipação funcional",
      "(D) Adenite mesentérica"
    ],
    "correctAnswer": 2,
    "explanation": "O quadro é compatível com constipação funcional segundo os critérios de Roma IV (frequência evacuatória reduzida, fezes endurecidas, dor e escape fecal na ausência de sinais de doença orgânica).",
    "commentary": "Comentários sobre a resposta correta:\n(C) A constipação funcional é diagnosticada clinicamente pelos critérios de Roma IV. A paciente apresenta frequência de evacuações ≤ 2 vezes por semana, fezes endurecidas e volumosas, dor à evacuação e episódios de escape fecal (incontinência fecal por transbordamento), sem sinais de alerta que sugiram causas orgânicas.\n\nComentários sobre os distratores:\n(A) Não há sinais de alerta (perda de peso, febre, sangramento retal macroscópico ativo, atraso no desenvolvimento pôndero-estatural) que justifiquem suspeitar de causa orgânica intestinal primária.\n(B) A Síndrome do Intestino Irritável (SII) exige dor abdominal recorrente relacionada à alteração do hábito intestinal por pelo menos 2 meses, o que não descreve o padrão clínico de retenção voluntária e escape fecal apresentados.\n(D) A adenite mesentérica cursa tipicamente com dor abdominal aguda, frequentemente associada a infecção de vias aéreas superiores recente, não se relacionando à queixa crônica de constipação e escape fecal.",
    "reference": "PEDIATRIA, Sociedade Brasileira de. Tratado de pediatria. 6. ed. Barueri: Manole, 2024.",
    "tags": [
      "gastroenterologia"
    ]
  },
  {
    "id": "tp2024-22",
    "module": "Clínica Médica",
    "text": "Paciente do sexo feminino, 30 anos, admitida no prontosocorro com queixa de febre há 3 dias, associada a cefaleia, dor retro-orbitária, prostração e mialgia. Nega náuseas e vômitos. Foi diagnosticada como dengue e classificada como grupo A, com tratamento ambulatorial e orientada a retornar caso apresentasse sinais de alarme. É considerado um sinal de alarme:",
    "options": [
      "(A) Esplenomegalia",
      "(B) Derrame pleural",
      "(C) Petéquias",
      "(D) Prova do laço positiva"
    ],
    "correctAnswer": 1,
    "explanation": "Os sinais de alarme da dengue marcam o extravasamento de plasma que costuma surgir na defervescência, entre o terceiro e o sétimo dia. Pelo Ministério da Saúde, entram na lista: dor abdominal forte e persistente, vômitos que não cessam, coleções de líquido (ascite, derrame pleural ou pericárdico), queda da pressão ao ficar de pé ou lipotimia, fígado palpável 2 cm ou mais abaixo da costela, sangramento em mucosas, sonolência ou irritabilidade e hematócrito em elevação progressiva.\n\nO derrame pleural é um desses sinais. Quem os apresenta passa para o grupo C e precisa de hidratação venosa e internação.",
    "commentary": "Esplenomegalia (A): não faz parte da lista de sinais de alarme da dengue.\n\nPetéquias (C): sangramento de pele espontâneo coloca o paciente no grupo B, mas não é sinal de alarme; o sangramento que alarma é o de mucosa.\n\nProva do laço positiva (D): também classifica no grupo B (sangramento induzido), mas não indica extravasamento de plasma.",
    "tip": "Dengue: acúmulo de líquido (ascite, derrame pleural) é alarme; petéquias e prova do laço só levam ao grupo B.",
    "reference": "Dengue: Diagnóstico e manejo clínico – Adulto e criança, 6ª edição. Ministério da Saúde, Secretaria de vigilância e saúde e ambiente, Departamento de doenças transmissíveis, Brasil, 2024.",
    "tags": [
      "infectologia",
      "dengue"
    ]
  },
  {
    "id": "tp2022-36",
    "module": "Clínica Médica",
    "text": "Qual medicamento inibe a recaptação de serotonina e norepinefrina, sendo útil na fibromialgia?",
    "options": [
      "(A) Corticosteroide",
      "(B) Paracetamol",
      "(C) Nimesulide",
      "(D) Duloxetina"
    ],
    "correctAnswer": 3,
    "explanation": "Dor crônica generalizada com fadiga, sono não reparador e queixas cognitivas é o quadro da fibromialgia. O tratamento se apoia em exercício físico e educação; entre os fármacos, usam-se os que modulam as vias descendentes de controle da dor.\n\nA duloxetina é um inibidor da recaptação de serotonina e noradrenalina (IRSN) e é um dos medicamentos com eficácia na fibromialgia, ao lado da amitriptilina e da pregabalina. Das alternativas, é a única com esse mecanismo.",
    "commentary": "Corticosteroide (A): anti-inflamatório hormonal; a fibromialgia não é doença inflamatória e o corticoide não traz benefício.\n\nParacetamol (B): analgésico simples, sem ação sobre a recaptação de serotonina e noradrenalina e com pouco efeito nessa dor.\n\nNimesulida (C): anti-inflamatório não esteroide; também não age no mecanismo central de amplificação da dor da fibromialgia.",
    "tip": "Fibromialgia: exercício + amitriptilina, duloxetina (IRSN) ou pregabalina. Corticoide e AINE não.",
    "reference": "Expert opinion on pharmacotherapy, 2015.",
    "tags": [
      "reumatologia",
      "farmacologia"
    ]
  },
  {
    "id": "tp2021-29",
    "module": "Clínica Médica",
    "text": "Homem, 60 anos, diabético e dislipidêmico foi atendido na Unidade Básica de Saúde com PA = 170 x 110 mmHg, aferidas em três medidas em dias e horários distintos. Após uma semana, o paciente é reavaliado e apresenta os mesmos níveis pressóricos. Além de mudanças no estilo de vida, o tratamento mais apropriado consiste em iniciar de imediato:",
    "options": [
      "(A) Hidroclorotiazida em monoterapia.",
      "(B) Metoprolol em monoterapia.",
      "(C) Enalapril + espironolactona.",
      "(D) Losartana + anlodipino."
    ],
    "correctAnswer": 3,
    "explanation": "O paciente apresenta hipertensão estágio 2 (PA diastólica ≥ 110 mmHg) em meio a perfil de risco cardiovascular muito alto (diabético, idoso e obeso/dislipidêmico). O tratamento de escolha envolve combinação precoce de fármacos de classes sinérgicas. Pelo diabetes, a preferência recai sobre a associação de um BRA (Losartana) com antagonista de canal de cálcio (Anlodipino).",
    "commentary": "Diante de hipertensão estágio 2 de alto risco, a diretriz consolidada recomenda o início direto de terapia farmacológica combinada. Diuréticos tiazídicos de forma isolada ou betabloqueadores em monoterapia devem ser preteridos em diabéticos em favor de agentes bloqueadores do sistema renina-angiotensina aliados a bloqueadores de canais de cálcio, oferecendo melhor sensibilidade insulínica, excelente poder de controle tensional e nefroproteção prolongada.",
    "reference": "Barroso WKS, Rodrigues CIS, Bortolotto LA, Mota-Gomes MA, Brandão AA, Feitosa ADM, et al. Diretrizes Brasileiras de Hipertensão Arterial – 2020. Arq Bras Cardiol. 2021;116(3):516-658.",
    "tags": [
      "cardiologia",
      "endocrinologia"
    ]
  },
  {
    "id": "tp2026-39",
    "module": "Clínica Médica",
    "text": "Mulher cis, de 52 anos, chega ao pronto-socorro com dispneia súbita e ortopneia. PA 180/100mmHg, SatO₂ 86%. Radiografia de tórax mostra opacidades alveolares bilaterais perihilares simétricas. Gasometria: pH 7,30; pCO₂ 50mmHg; pO₂ 60mmHg. Qual a principal hipótese diagnóstica?",
    "options": [
      "(A) Edema agudo de pulmão cardiogênico",
      "(B) Síndrome do desconforto respiratório agudo",
      "(C) Pneumonia adquirida na comunidade",
      "(D) Tromboembolismo pulmonar"
    ],
    "correctAnswer": 0,
    "explanation": "A dispneia de instalação hiperaguda com ortopneia associada a crise hipertensiva sistêmica severa e imagem radiográfica clássica de infiltrado alveolar bilateral em \"asa de borboleta\" (perihilar simétrico) confirma Edema Agudo de Pulmão Cardiogênico.",
    "commentary": "Comentários sobre a resposta correta:\n(A) O quadro de insuficiência respiratória hipoxêmica e hipercápnica por fadiga muscular ventilatória, crise hipertensiva severa (PA 180/100 mmHg), ortopneia e radiologia de tórax exibindo o infiltrado alveolar simétrico perihilar clássico em \"asa de borboleta\" é a apresentação típica do Edema Agudo de Pulmão (EAP) cardiogênico secundário a disfunção ventricular aguda.\n\nComentários sobre os distratores:\n(B) A SDRA apresenta infiltrado bilateral difuso semelhante, porém tipicamente ocorre de forma subaguda após desencadeante sistêmico grave (ex.: sepse abdominal) e sem perfil de crise hipertensiva mecânica e ortopneia proeminente.\n(C) A pneumonia comunitária cursa de forma típica com febre, tosse produtiva mucopurulenta e consolidação lobar bem delimitada ao raio-X, sem infiltrado alveolar simétrico bilateral e hipertensão arterial concomitante.\n(D) O tromboembolismo pulmonar (TEP) gera dispneia súbita intensa e hipoxemia, mas cursa de forma típica com radiografia de tórax limpa ou com achados discretos e localizados (ex.: sinal de Westermark), sem edema alveolar difuso bilateral.",
    "reference": "Sociedade Brasileira de Cardiologia. Diretrizes de insuficiência cardíaca. Arquivos Brasileiros de Cardiologia, Rio de Janeiro, v. 111, n. 3, supl. 1, p. 1-436, 2018. | Braunwald’s Heart Disease: A Textbook of Cardiovascular Medicine. 12. ed. Philadelphia: Elsevier, 2022.",
    "tags": [
      "cardiologia",
      "emergência",
      "pneumologia"
    ]
  },
  {
    "id": "tp2024-74",
    "module": "Cirurgia",
    "text": "Soda cáustica no olho. Dor intensa, vermelhidão e baixa visão. Qual a conduta?",
    "options": [
      "(A) Antibiótico tópico e endovenoso e chamar oftalmo.",
      "(B) Encaminhamento urgente cirúrgico.",
      "(C) Antibiótico tópico e retorno em 15 dias.",
      "(D) Lavagem intensa com soro fisiológico e encaminhamento ao oftalmologista."
    ],
    "correctAnswer": 3,
    "explanation": "Soda cáustica é um álcali, e queimaduras oculares por álcali são as mais graves, porque o produto saponifica as membranas celulares e continua penetrando na córnea e nas estruturas internas do olho enquanto houver contato. Dor intensa, hiperemia, baixa da visão e ceratite grave mostram lesão importante.\n\nA conduta imediata, antes de qualquer outra coisa, é irrigação abundante e prolongada com soro fisiológico (ou água limpa, se não houver soro), com o olho aberto e removendo partículas dos fundos de saco, até neutralizar o pH da superfície. Depois, usam-se colírio antibiótico e lubrificante para proteger a córnea enquanto ela reepiteliza, e o paciente é encaminhado ao oftalmologista para avaliação da extensão da lesão.",
    "commentary": "Internação com antibiótico tópico e endovenoso (A): antibiótico venoso não tem papel, e chamar o oftalmologista sem antes irrigar deixa o álcali agir por mais tempo.\n\nEncaminhamento cirúrgico urgente (B): a lesão aguda não é cirúrgica de imediato; o que define o prognóstico é a irrigação feita no primeiro atendimento.\n\nColírio antibiótico e retorno em 15 dias (C): sem irrigação e sem seguimento próximo, a queimadura progride e pode levar a perda visual.",
    "tip": "Queimadura química no olho, sobretudo por álcali: irrigar muito, já, antes de qualquer exame; depois oftalmologista.",
    "reference": "Oftalmologia Geral - Vaughan & Asbury, 17ª ed.",
    "tags": [
      "oftalmologia",
      "emergência"
    ]
  },
  {
    "id": "tp2022-63",
    "module": "Cirurgia",
    "text": "Paciente de 45 anos, obesa, com dor em hipocôndrio direito, Murphy positivo e febre (38,2ºC). Qual a conduta recomendada?",
    "options": [
      "(A) Tomografia com contraste e tratamento clínico apenas.",
      "(B) Exames laboratoriais, ultrassom para confirmação e indicação cirúrgica laparoscópica.",
      "(C) Laparotomia exploradora urgente imediata.",
      "(D) Colangiorressonância e CPRE conservadora."
    ],
    "correctAnswer": 1,
    "explanation": "Mulher de 45 anos, obesa, com dor em hipocôndrio direito há 2 dias, náuseas, vômitos, febre, taquicardia e sinal de Murphy positivo: a principal hipótese é colecistite aguda, inflamação da vesícula geralmente por cálculo impactado no infundíbulo.\n\nA investigação inclui exames laboratoriais (leucograma, PCR, bilirrubinas, enzimas hepáticas, amilase ou lipase) e ultrassonografia de abdome, exame de escolha para confirmar (cálculos, parede espessada, líquido perivesicular, Murphy ultrassonográfico). Confirmado o diagnóstico, o tratamento definitivo é a colecistectomia videolaparoscópica, de preferência precoce, junto com hidratação, analgesia e antibiótico.",
    "commentary": "Tomografia e só tratamento clínico (A): a TC não é o exame inicial para doença da vesícula (o ultrassom é mais sensível para cálculos), e manter apenas suporte adia a cirurgia, que é o tratamento.\n\nLaparotomia exploradora urgente (C): não há peritonite difusa nem instabilidade que justifiquem cirurgia aberta sem diagnóstico; a via de escolha é a laparoscópica, após confirmação.\n\nColangiorressonância e CPRE (D): servem para suspeita de cálculo no colédoco (icterícia, colangite, dilatação da via biliar), o que não é descrito; e obesidade não contraindica a laparoscopia.",
    "tip": "Febre + dor em hipocôndrio direito + Murphy: ultrassom confirma colecistite; trate com colecistectomia laparoscópica precoce.",
    "reference": "Coelho, Júlio Cezar - Aparelho Digestivo - 4ª Ed.",
    "tags": [
      "gastroenterologia",
      "cirurgia biliar"
    ]
  },
  {
    "id": "tp2025-70",
    "module": "Cirurgia",
    "text": "Homem, cisgênero, 60 anos, hipertenso, comparece ao serviço de urgência com dor intensa e súbita em membro inferior direito há 6 horas. Ao exame: ausculta cardíaca com bulhas arrítmicas; membro inferior direito com extremidade fria, pálida, sem pulsos palpáveis e sem alteração de trofismo. Qual conduta mais adequada?",
    "options": [
      "(A) Analgesia e anti-inflamatórios, aguardando melhora clínica para posterior avaliação cirúrgica.",
      "(B) Heparinização plena e angiotomografia do membro para decisão terapêutica com urgência.",
      "(C) Doppler arterial e fasciotomia profilática do membro para evitar síndrome compartimental.",
      "(D) Repouso físico e anticoagulação plena por três meses."
    ],
    "correctAnswer": 1,
    "explanation": "Na suspeita clínica de oclusão arterial aguda de membro (isquemia com viabilidade preservada), a conduta imediata consiste em heparinização plena (para cessar propagação do trombo) e angiotomografia urgente.",
    "commentary": "O doente apresenta quadro clássico de Oclusão Arterial Aguda de membro inferior, de importante etiologia provável embólica, sugerida pela associação de dor súbita severa e ritmo cardíaco arrítmico (sugestivo de fibrilamento atrial). A imediata heparinização sistêmica é indispensável para obstar a progressão de novos coágulos na vasculatura. A angiotomografia cervical/abdominal/ilíaco-femoral é fundamental na urgência para programar o desfecho operatório (trombectomia aberta, embolectomia de Fogarty ou terapia endovascular). Medidas conservadoras puras com repouso, sem o tratamento reconstrutivo imediato, estendem o tempo de anóxia tecidual à necrose irrecuperável.",
    "reference": "Rutherfords Vascular Surgery and Endovascular Therapy, 9ª ed., 2018.",
    "tags": [
      "cirurgia vascular",
      "emergência"
    ]
  },
  {
    "id": "tp2026-69",
    "module": "Cirurgia",
    "text": "Homem de 40 anos apresenta tumefação dolorosa em coxa há 7 dias, com aumento progressivo, flutuação e eritema. Após tentativa prévia de antibioticoterapia e sem drenagem da lesão, houve piora do quadro. Considerando a fisiopatologia do abscesso, qual mecanismo explica a falha do tratamento clínico isolado?",
    "options": [
      "(A) Formação de cavidade encapsulada com baixa penetração de antibióticos e alta carga bacteriana.",
      "(B) Redução da perfusão tecidual local por vasoconstrição reflexa.",
      "(C) Produção bacteriana de toxinas que inativam diretamente antibióticos sistêmicos.",
      "(D) Formação de biofilme bacteriano, impedindo resposta inflamatória local."
    ],
    "correctAnswer": 0,
    "explanation": "O abscesso estabelece uma cavidade encapsulada espessa contendo pus e detritos necróticos, criando uma barreira física com baixa perfusão interna. Isso impede que os antibióticos sistêmicos atinjam concentrações terapêuticas eficazes no local infectado, exigindo drenagem cirúrgica.",
    "commentary": "O abscesso cutâneo ou muscular profundo forma uma coleção purulenta envolta por uma pseudocápsula de fibrina e tecido colágeno inflamatório. Essa barreira vascularizada externamente mas avascular internamente cria um ambiente com baixíssima perfusão central, pH ácido e altíssima carga bacteriana ativa e dormente. Como resultado, os antibióticos circulantes não penetram no interior do abscesso em quantidade suficiente, o que dita o antigo aforismo cirúrgico: \"ubi pus, ibi evacua\" (onde há pus, esvazie/drene). Sobre os distratores: (B, C, D) Embora vasoconstrição tecidual periférica, toxinas bacterianas e biofilmes bacterianos desempenhem papéis em infecções, a barreira mecânica e biológica da cápsula do abscesso é o fator fisiopatológico primário reconhecido na falha da terapia medicamentosa isolada.",
    "reference": "Stevens DL et al. Practice Guidelines for Skin and Soft Tissue Infections. Clin Infect Dis. 2014. Miller JM et al. Guide to Microbiology Laboratory Utilization. Clin Infect Dis. 2024. Seidelman JL et al. Surgical Site Infection Prevention. JAMA. 2023.",
    "tags": [
      "abscesso",
      "fisiopatologia",
      "infecção"
    ]
  },
  {
    "id": "tp2020-116",
    "module": "Cirurgia",
    "text": "Paciente de 15 anos de idade apresenta quadro de dor inguinal direita há 3 dias, com piora do quadro nas últimas 24 horas. Apresenta parada de eliminação de gases e fezes há um dia e febre. Ao exame físico apresenta tumoração inguinal com dor à palpação e eritema importante da pele.\n\nQual o diagnóstico mais provável e a conduta?",
    "options": [
      "(A) Hérnia inguinal estrangulada. Tentar reduzir manualmente.",
      "(B) Hérnia inguinal encarcerada. Tentar reduzir manualmente.",
      "(C) Hérnia inguinal estrangulada. Antibioticoterapia e cirurgia imediata.",
      "(D) Hérnia inguinal encarcerada. Observação e analgesia."
    ],
    "correctAnswer": 2,
    "explanation": "Hérnia inguinal com dor, obstrução intestinal, febre e eritema da pele: hérnia estrangulada, com sofrimento isquêmico da alça. A conduta é antibioticoterapia e cirurgia de urgência.",
    "commentary": "A redução manual é contraindicada na suspeita de estrangulamento (risco de reduzir alça necrótica). Observação e analgesia são inadequadas.",
    "reference": "Sabiston, Tratado de cirurgia, 17ª edição. Hérnias, pag. 1199-1217. Editora Elsevier. / Schwartz’s, Manual of Surgery, eighth edition, Inguinal hernias, pag. 920-942. Editora McGRAW-HILL.",
    "tags": [
      "cirurgia",
      "hérnias",
      "abdome agudo"
    ]
  },
  {
    "id": "tp2024-97",
    "module": "Ginecologia e Obstetrícia",
    "text": "Tumor Phyllodes borderline (2,0cm), margem de 0,5cm. Conduta correta?",
    "options": [
      "(A) Quimioterapia adjuvante.",
      "(B) Radioterapia adjuvante.",
      "(C) Ampliação de margens.",
      "(D) Esvaziamento axilar."
    ],
    "correctAnswer": 2,
    "explanation": "O tumor phyllodes é uma lesão fibroepitelial que cresce rápido e que, ao contrário do fibroadenoma, tende a voltar no mesmo lugar quando a retirada é incompleta. O tratamento é cirúrgico, e o que mais importa para evitar a recidiva local é a margem livre.\n\nNos tumores borderline e malignos, recomenda-se margem de pelo menos 1 cm. Como a margem foi de 0,5 cm, a conduta é ampliar a ressecção.",
    "commentary": "Quimioterapia adjuvante (A): não há tratamento sistêmico adjuvante com benefício comprovado para o tumor phyllodes, e menos ainda na forma borderline.\n\nRadioterapia adjuvante (B): seu papel é discutido apenas em tumores malignos, principalmente os grandes ou com margens comprometidas; não é indicada no borderline.\n\nEsvaziamento axilar (D): o phyllodes raramente dá metástase para linfonodos (quando se espalha, é por via sanguínea), por isso não se faz cirurgia axilar de rotina.",
    "tip": "Phyllodes borderline ou maligno: margem de pelo menos 1 cm. Margem menor → ampliar. Sem axila e sem quimio.",
    "reference": "Doenças da Mama. 3ª edição. Rio de Janeiro: Atheneu, 2022",
    "tags": [
      "mastologia",
      "cirurgia"
    ]
  },
  {
    "id": "tp2022-88",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher 52 anos, menopausa há 4 anos, fogachos intensos. Útero presente, endométrio 3mm, mioma intramural de 10mm. Mamografia BI-RADS 2. Sobre TH:",
    "options": [
      "(A) Está indicada apenas a TH com estrogênio.",
      "(B) Pode receber TH combinada (estrogênio + progestagênio).",
      "(C) A presença de mioma contraindica o uso de TH.",
      "(D) Categoria 2 no BI-RADS contraindica o uso de estrogênio."
    ],
    "correctAnswer": 1,
    "explanation": "Mulher de 52 anos, menopausada há 4 anos, com fogachos intensos que atrapalham sua vida: tem indicação de terapia hormonal (TH). Ela está na chamada janela de oportunidade (menos de 60 anos e menos de 10 anos de menopausa), quando os benefícios superam os riscos, e não apresenta contraindicações: não tem câncer de mama, trombose, doença hepática grave nem sangramento genital sem explicação.\n\nComo tem útero, precisa receber estrogênio associado a progestagênio. O progestagênio protege o endométrio da hiperplasia e do câncer que o estrogênio isolado provocaria.",
    "commentary": "Apenas estrogênio (A): a TH só com estrogênio é reservada a mulheres sem útero (histerectomizadas); com útero, aumenta o risco de câncer de endométrio.\n\nMioma contraindica a TH (C): um mioma pequeno (10 mm) e assintomático não contraindica; recomenda-se apenas acompanhar o tamanho e os sintomas.\n\nBI-RADS 2 contraindica o estrogênio (D): a categoria 2 indica achado benigno; o que contraindica a TH é câncer de mama atual ou passado, não uma mamografia benigna.",
    "tip": "Fogacho, menos de 60 anos e menos de 10 anos de menopausa, sem contraindicação: TH. Tem útero? Estrogênio + progestagênio.",
    "reference": "Consenso Brasileiro de Terapêutica Hormonal da Menopausa, 2018.",
    "tags": [
      "climatério",
      "terapia hormonal"
    ]
  },
  {
    "id": "tp2025-95",
    "module": "Ginecologia e Obstetrícia",
    "text": "Primigesta, com última menstruação há oito semanas, procura o pronto atendimento com queixa de cólicas hipogástricas e relato de sangramento vaginal há dois dias. Ao exame físico, foi evidenciada consistência uterina amolecida e volume aumentado, compatível com o tempo de amenorreia, além de colo uterino fechado. Identifique a hipótese diagnóstica e o método propedêutico indicado para o esclarecimento do caso:",
    "options": [
      "(A) Abortamento completo – Dosagem de beta HCG",
      "(B) Gestação ectópica – Dosagem de beta HCG",
      "(C) Aborto incompleto – Ultrassom pélvico transvaginal",
      "(D) Ameaça de aborto – Ultrassom pélvico transvaginal"
    ],
    "correctAnswer": 3,
    "explanation": "Gestante de primeiro trimestre com queixa álgica tipo cólica abdominal baixa associada a hemorragias autolimitadas locais que preserva útero volumoso gravídico e colo impérvio fechado ao toque define a ameaça de aborto.",
    "commentary": "A ameaça de abortamento caracteriza-se classicamente por sangramento uterino discreto, dores pélvicas mecânicas, altura uterina em conformidade ao tempo provável de amenorreia e óstio cervical impérvio ao toque ginecológico. O pilar propedêutico ouro indispensável para assegurar e confirmar a vitalidade embriofetal e descartar desprendimentos ou perdas irreparáveis (como o abortamento consumado ou incompleto) consiste na realização do ultrassom pélvico transvaginal, identificando batimentos cardíacos fetais ativos.",
    "reference": "Tratado de Obstetrícia FEBRASGO, Elsevier, 2019.",
    "tags": [
      "obstetrícia",
      "sangramento 1º trimestre"
    ]
  },
  {
    "id": "tp2021-96",
    "module": "Ginecologia e Obstetrícia",
    "text": "Adolescente, 15 anos, na 10ª semana de gravidez resultante de violência sexual, não deseja manter a gravidez. Vem à consulta acompanhada pelos pais. Para a interrupção legal desta gestação é necessário:",
    "options": [
      "(A) Autorização expedida pelo juiz da comarca de residência.",
      "(B) Solicitação assinada pela paciente e representante legal.",
      "(C) Laudo pericial do exame de corpo delito expedido pelo IML.",
      "(D) Boletim de ocorrência lavrado pela autoridade policial."
    ],
    "correctAnswer": 1,
    "explanation": "Pelas normas diretivas e leis penais brasileiras, a interrupção da gravidez fruto de abuso ou estupro (violento/vulnerável) independe de alvarás judiciais, registros policiais prévios de boletins de ocorrência ou atestados legistas periciais do Instituto Médico Legal (IML). O único documento de elegibilidade e autonomia obrigatório é o Termo de Consentimento Livre e Esclarecido assinado pela paciente acompanhada perante o seu representante ou responsável legal.",
    "commentary": "A legislação nacional e as normativas de violência sexual preconizadas pelo Ministério da Saúde estabelecem que a palavra do doente presencial é soberana e suficiente para caracterizar e assegurar a violência contra a maturidade da mulher. Caberá à equipe multiprofissional (médico, psicólogo, enfermeiro e assistente social) ratificar a compatibilidade evolutiva da idade gestacional e o termo assinado, prosseguindo com o abortamento legal na rede pública garantida, sem necessidade de burocracias externas ou alvarás.",
    "reference": "Norma Técnica de Prevenção e Tratamento dos Agravos Resultantes da Violência Sexual contra Mulheres e Adolescentes, Ministério da Saúde, 3ª ed (2012).",
    "tags": [
      "obstetrícia",
      "aborto legal",
      "violência sexual"
    ]
  },
  {
    "id": "tp2020-89",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente aos 30 anos, hígida e assintomática, realizou Colpocitologia Oncótica (CCO) compatível com “Atipias Glandulares de Significado Indeterminado (AGC)”.\n\nA conduta correta é:",
    "options": [
      "(A) Repetir CCO em 6 meses.",
      "(B) Realizar colposcopia.",
      "(C) Curetagem de canal endocervical.",
      "(D) Realizar colposcopia e nova CCO com atenção ao canal endocervical."
    ],
    "correctAnswer": 3,
    "explanation": "Atipias glandulares de significado indeterminado (AGC) na citologia exigem colposcopia com nova coleta de citologia, com especial atenção ao canal endocervical. Acima de 35 anos ou com sangramento anormal, avalia-se também o endométrio.",
    "commentary": "Repetir a citologia em 6 meses é inadequado para AGC. A curetagem isolada não substitui a colposcopia.",
    "reference": "Martins, Nelson Valente. Patologia do trato genital inferior: diagnóstico e tratamento – 2. Ed. São Paulo, 2014. Pág.: 368-377 / https://www.inca.gov.br/sites/ufu.sti.inca.local/files//media/docu ment//diretrizesparaorastreamentodocancerdocolodoutero_20 16_corrigido.pdf",
    "tags": [
      "ginecologia",
      "rastreamento",
      "câncer de colo uterino"
    ]
  },
  {
    "id": "tp2024-120",
    "module": "Saúde Coletiva",
    "text": "Homem, 52 anos, hipertenso e tabagista assintomático. Quais exames de rastreio são adequados?",
    "options": [
      "PSA e Creatinina isolados.",
      "PA, Glicemia, Colesterol e abordagem de álcool/drogas.",
      "Hemograma completo e TGO/TGP.",
      "PSA, Urina tipo I e Potássio."
    ],
    "correctAnswer": 1,
    "explanation": "Rastreamento é procurar doença em quem não tem sintomas, e só faz sentido para condições em que há benefício comprovado. Para um homem de 52 anos, hipertenso e tabagista, o Caderno de Atenção Primária nº 29 (Rastreamento) apoia: aferição da pressão arterial, dosagem de colesterol (dislipidemia), glicemia (diabetes, indicada de forma especial em hipertensos) e abordagem do uso de álcool, tabaco e outras drogas.\n\nNessa idade também se inclui o rastreamento do câncer colorretal. Já o PSA não é recomendado pelo Ministério da Saúde para rastreio populacional, e exames como hemograma e transaminases não rastreiam nenhuma condição com benefício estabelecido. Creatinina, potássio e urina tipo I fazem parte do acompanhamento da hipertensão já diagnosticada, e não do rastreamento.",
    "commentary": "PSA e creatinina (A): o PSA não é recomendado para rastreamento populacional do câncer de próstata pelo Ministério da Saúde, e a creatinina é exame de avaliação do hipertenso, não de rastreio.\n\nHemograma e TGO/TGP (C): não há evidência de benefício em pedi-los de rotina em pessoa assintomática.\n\nPSA, urina tipo I e potássio (D): o PSA não é indicado para rastrear, e urina e potássio servem para acompanhar a hipertensão, não para rastrear doenças.",
    "tip": "Rastreio no adulto: PA, colesterol, glicemia, álcool/tabaco e câncer colorretal a partir dos 50. PSA de rotina, não.",
    "reference": "https://bvsms.saude.gov.br/bvs/publicacoes/caderno_atencao_primaria_29_rastreamento.pdf",
    "tags": [
      "rastreamento",
      "saúde do homem",
      "prevenção"
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
    "id": "tp2021-107",
    "module": "Saúde Coletiva",
    "text": "Foi instalada uma nova equipe de Estratégia de Saúde da família em uma área de risco. A equipe iniciou o trabalho percorrendo área, fazendo o levantamento dos recursos disponíveis, possíveis barreiras ao acesso e cadastrando os residentes da área. Que princípios norteadores da Estratégia de Saúde da Família foram utilizados nesse trabalho?",
    "options": [
      "(A) Territorialização e adscrição da clientela.",
      "(B) Hierarquização e integralidade.",
      "(C) Equidade e caráter substitutivo.",
      "(D) Referência e contrarreferência."
    ],
    "correctAnswer": 0,
    "explanation": "O processo de percorrer e mapear a área geográfica delimitada de atuação da equipe (definindo barreiras, vulnerabilidades e recursos) e identificar e cadastrar os habitantes da localidade caracteriza de maneira explícita os princípios norteadores de territorialização e adscrição da clientela.",
    "commentary": "No âmbito organizacional da Atenção Primária no Brasil, a territorialização define a área geográfica de corresponsabilidade da ESF e o mapeamento locorregional. Conectado a ela, a adscrição consagra o vínculo e responsabilidade permanente sobre uma população específica descrita (indivíduos cadastrados vinculados ao serviço no território demarcado).",
    "reference": "PNAB - Política Nacional de Atenção Básica, Portaria nº 2.436/2017.",
    "tags": [
      "estratégia saúde da família",
      "territorialização",
      "princípios do SUS"
    ]
  },
  {
    "id": "tp2019-103",
    "module": "Saúde Coletiva",
    "text": "No Brasil, o perfil de morbimortalidade passou do predomínio de doenças infectocontagiosas para o predomínio de doenças crônicas não transmissíveis.\n\nEsse fenômeno é denominado:",
    "options": [
      "(A) Falácia ecológica",
      "(B) Perfil de morbimortalidade da população",
      "(C) Transição epidemiológica",
      "(D) Evolução natural das doenças"
    ],
    "correctAnswer": 2,
    "explanation": "A transição epidemiológica é a mudança, a longo prazo, dos padrões de morbimortalidade de uma população — no Brasil, o predomínio passou das doenças infecciosas para as doenças crônicas não transmissíveis, acompanhando a transição demográfica.",
    "commentary": "A falácia ecológica é um erro de inferência em estudos ecológicos. 'Perfil de morbimortalidade' e 'evolução natural das doenças' não nomeiam o fenômeno.",
    "reference": "Medronho RA, Carvalho DM, Bloch KV, Luiz RR, Werneck GL. Epidemiologia. São Paulo: Atheneu, 2006. / Rouquayrol MZ, Gurgel M. Epidemiologia e saúde. 8ª Ed. Rio de Janeiro: MedBook, 2018.",
    "tags": [
      "saúde coletiva",
      "epidemiologia",
      "transição epidemiológica"
    ]
  },
  {
    "id": "tp2022-6",
    "module": "Ciências Básicas",
    "text": "Homem de 35 anos, sem filhos, não fumante, nega história de doenças crônicas ou recorrentes, bem como exposição tóxica prévia. Ao exame físico, apresenta volume testicular reduzido com ductos palpáveis. Os níveis de FSH séricos estão aumentados. Há presença de oligospermia em volume de sêmen normal, com espermatozoides com motilidade e morfologia normais. Cariótipo em bandamento GTG: 46,XY. A investigação diagnóstica deve prosseguir para:",
    "options": [
      "(A) Análise de microdeleções no cromossomo Y.",
      "(B) Análise molecular do gene CFTR.",
      "(C) Painel de genes por NGS para síndrome de Kallmann.",
      "(D) Diagnóstico molecular da síndrome de Kartagener."
    ],
    "correctAnswer": 0,
    "explanation": "Em casos de insuficiência testicular primária (FSH alto) com cariótipo normal, a análise de microdeleções do cromossomo Y é a próxima etapa.",
    "commentary": "O enunciado apresenta quadro de insuficiência testicular primária (FSH elevado) com oligospermia e cariótipo 46,XY normal. A avaliação inicial padrão nestes casos é o cariótipo seguido pela análise de microdeleções no braço longo do cromossomo Y (região AZF). A análise do gene CFTR seria mais indicada em casos obstrutivos (azoospermia com volume seminal baixo). A síndrome de Kallmann cursaria com FSH baixo (hipogonadismo hipogonadotrófico).",
    "reference": "Wosnitzer, M.S. - Genetic evaluation of male infertility. Transl Androl Urol 2014;3(1):17-26.",
    "tags": [
      "genética",
      "urologia"
    ]
  },
  {
    "id": "tp2021-11",
    "module": "Ciências Básicas",
    "text": "Homem, 45 anos, em acompanhamento pós-transplante renal há 10 meses, apresenta proteinúria, aumento da creatinina sanguínea e perda progressiva da função do enxerto. Realizada biópsia renal que evidenciou fibrose e anormalidades vasculares. Pode-se concluir que o paciente apresenta rejeição:",
    "options": [
      "(A) Aguda.",
      "(B) Hiperaguda.",
      "(C) Crônica.",
      "(D) Trombótica."
    ],
    "correctAnswer": 2,
    "explanation": "A biópsia renal com predomínio de fibrose intersticial, atrofia tubular e espessamento fibrointimal vascular de curso lento (10 meses pós-transplante) caracteriza a rejeição crônica do enxerto.",
    "commentary": "A rejeição crônica é patologicamente definida por lesão vascular arterial progressiva (íntima espessada secundária a proliferação celular), fibrose intersticial crônica e perda insidiosa de função glomerular renal. A rejeição hiperaguda ocorre em minutos por anticorpos pré-formados, e a aguda desenvolve infiltrado inflamatório túbulo-intersticial em semanas.",
    "reference": "SEMENTILLI, A. et al. Renal transplant pathology: main morphological findings and how to sign out biopsies. J. Bras. Patol. Med. Lab. Aug. 2008",
    "tags": [
      "patologia",
      "nefrologia",
      "cirurgia"
    ]
  },
  {
    "id": "tp2019-1",
    "module": "Ciências Básicas",
    "text": "Paciente alcoolista e sem-teto queixa-se que seus dentes estão soltos e as gengivas sangram com facilidade. Suspeita-se que ele tenha uma dieta pobre e que pode ter escorbuto (deficiência de vitamina C). O escorbuto é caracterizado por um defeito na hidroxilação de prolina.\n\nDos componentes químicos abaixo, o relacionado com esta condição é:",
    "options": [
      "(A) Fibronectina",
      "(B) Elastina",
      "(C) Ácido hialurônico",
      "(D) Colágeno"
    ],
    "correctAnswer": 3,
    "explanation": "A vitamina C é cofator das enzimas prolil e lisil-hidroxilases, essenciais para a hidroxilação dos resíduos de prolina e lisina do colágeno. Sem ela, a tripla hélice fica instável e o colágeno, frágil.\n\nIsso explica os sinais do escorbuto: sangramento gengival, perda dentária, hemorragias perifoliculares e má cicatrização.",
    "commentary": "Fibronectina, elastina e ácido hialurônico são componentes da matriz extracelular, mas não dependem da hidroxilação de prolina mediada pela vitamina C.",
    "reference": "Junqueira LC & Carneiro J. Biologia Celular e Molecular - Biologia da Interação Célula-Matriz Extracelular. 8 ed. Guanabara Koogan, 2005, pag. 229-238.",
    "tags": [
      "bioquímica",
      "vitaminas",
      "colágeno"
    ]
  },
  {
    "id": "enamed-2025-32",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente G5P3C1, 35 anos, idade gestacional de 15 semanas por ecografia realizada com 8 semanas, hipertensa crônica em uso de enalapril, antecedente de pré-eclâmpsia. Comparece à consulta de pré-natal na Unidade Básica de Saúde (UBS) com pressão arterial de 140 × 90 mmHg.\n\nQual é a conduta medicamentosa indicada para essa paciente?",
    "options": [
      "(A) Captopril, varfarina e ácido acetilsalicílico.",
      "(B) Furosemida, varfarina e carbonato de cálcio.",
      "(C) Losartana, enoxaparina e carbonato de cálcio.",
      "(D) Alfa-metildopa, ácido acetilsalicílico e carbonato de cálcio."
    ],
    "correctAnswer": 3,
    "explanation": "A paciente apresenta hipertensão arterial crônica na gestação e antecedente de pré-eclâmpsia, configurando alto risco obstétrico. O enalapril (IECA) deve ser suspenso imediatamente, pois inibidores da enzima conversora de angiotensina são teratogênicos e contraindicados na gravidez. Entre os anti-hipertensivos seguros, a alfa-metildopa é a escolha padrão de primeira linha. Adicionalmente, gestantes com alto risco para pré-eclâmpsia se beneficiam de ácido acetilsalicílico (AAS) em baixa dose (iniciado preferencialmente antes de 16 semanas) associado à suplementação de carbonato de cálcio.",
    "commentary": "As demais alternativas contêm fármacos formalmente contraindicados na gestação, como varfarina (anticoagulante oral altamente teratogênico), losartana (BRA) e captopril (IECA).",
    "reference": "Diretrizes da FEBRASGO / Sociedade Brasileira de Cardiologia",
    "tags": [
      "ginecologia",
      "obstetrícia",
      "hipertensão na gravidez",
      "pré-eclâmpsia"
    ]
  },
  {
    "id": "enamed-2025-74",
    "module": "Cirurgia",
    "text": "Paciente de 47 anos, sexo feminino, atendida no ambulatório de cirurgia geral. A paciente havia sido submetida à tireoidectomia total há 60 dias devido a carcinoma folicular de tireoide, restrito à glândula. No pós-operatório imediato apresentou rouquidão, que persistiu durante todo o acompanhamento ambulatorial.\n\nCom base no quadro clínico apresentado, qual foi o nervo lesionado durante a cirurgia?",
    "options": [
      "(A) Laríngeo recorrente.",
      "(B) Glossofaríngeo.",
      "(C) Hipoglosso.",
      "(D) Vago."
    ],
    "correctAnswer": 0,
    "explanation": "A paralisia de prega vocal por lesão unilateral do nervo laríngeo recorrente (ramo do nervo vago) é uma das complicações mais descritas em tireoidectomias, manifestando-se por rouquidão persistente e voz soprosa ou fraca, consequente à incapacidade de adução simétrica das cordas vocais.",
    "commentary": "O nervo glossofaríngeo (B) inerva a musculatura estilofaríngea e a sensibilidade do terço posterior da língua. O hipoglosso (C) confere motricidade aos músculos da língua. A lesão do nervo vago principal (D) causaria déficits bem mais amplos que apenas a rouquidão isolada e específica por disfunção cordal.",
    "reference": "Sabiston Tratado de Cirurgia / Tratado de Otorrinolaringologia e Cirurgia de Cabeça e Pescoço",
    "tags": [
      "cirurgia",
      "cabeça e pescoço",
      "tireoidectomia",
      "complicações cirúrgicas",
      "anatomia"
    ]
  },
  {
    "id": "enamed-2026-42",
    "module": "Pediatria",
    "text": "Lactente de 5 meses, prematuro de 32 semanas, com antecedente de displasia broncopulmonar, é levado pela mãe a uma Unidade de Pronto Atendimento, com relato de que, há 3 dias, iniciou quadro de coriza e tosse, com piora progressiva do estado geral e dificuldade para mamar nas últimas 24 horas. O exame físico mostra: FR 65 irpm; tiragem subcostal, sibilos e roncos à ausculta; SpO₂ 90% em ar ambiente.\n\nA conduta inicial nesse caso consiste em",
    "options": [
      "(A) oxigenoterapia e amoxicilina oral.",
      "(B) hidratação endovenosa e suporte ventilatório.",
      "(C) salbutamol inalatório e corticoide sistêmico.",
      "(D) fisioterapia respiratória e dexametasona intramuscular."
    ],
    "correctAnswer": 1,
    "explanation": "Bronquiolite viral aguda grave em lactente de alto risco (prematuro com displasia broncopulmonar): taquipneia importante, tiragem, SatO₂ 90% e dificuldade para mamar.\n\nO tratamento é de suporte: oxigenoterapia/suporte ventilatório conforme a gravidade e hidratação adequada (endovenosa ou por sonda quando a alimentação oral não é possível).",
    "commentary": "Antibióticos não tratam infecção viral sem sinais de bacteriana. Broncodilatadores e corticoides não são recomendados de rotina na bronquiolite. A fisioterapia respiratória não tem benefício comprovado. (Gabarito preliminar do INEP.)",
    "reference": "Sociedade Brasileira de Pediatria. Diretrizes para o manejo da bronquiolite viral aguda / AAP 2014",
    "tags": [
      "pediatria",
      "bronquiolite",
      "pneumologia"
    ]
  },
  {
    "id": "unifesp2025-3",
    "module": "Cirurgia",
    "text": "Homem, 24 anos de idade, é admitido no PS por acidente automobilístico. Exame físico: via aérea pérvia, pneumotórax esquerdo com fratura linear da 3ª, 4ª e 5ª costelas, estável hemodinamicamente, sinais de trauma raquimedular em L3-L4, múltiplas fraturas em membros superiores e inferiores. Exames de imagem: ausência de outras lesões no abdômen e na pelve.\n\nCom relação à drenagem da via urinária, qual é a conduta mais adequada?",
    "options": [
      "(A) Sondagem vesical de demora.",
      "(B) Cistostomia supra-púbica.",
      "(C) Cateterismo intermitente.",
      "(D) Nefrostomia bilateral guiada por radiointervenção."
    ],
    "correctAnswer": 0,
    "explanation": "Politraumatizado com trauma raquimedular lombar alto evolui com bexiga neurogênica na fase de choque medular (retenção urinária), e precisa de controle rigoroso da diurese na fase aguda.\n\nSem lesão uretral (não há sangue no meato, hematoma perineal ou fratura de pelve), a conduta é a sondagem vesical de demora. Ela garante a drenagem e permite medir o débito urinário durante a reanimação. O cateterismo intermitente fica para depois, quando o paciente estiver estável e a reposição volêmica estabilizada.",
    "commentary": "Cistostomia (B): reservada para lesão de uretra ou impossibilidade de cateterismo transuretral, ausentes no caso.\n\nCateterismo intermitente (C): é o método de escolha a longo prazo na bexiga neurogênica, mas não na fase aguda do politrauma, quando é preciso monitorar a diurese.\n\nNefrostomia bilateral (D): trata obstrução do trato urinário alto, que não existe aqui.",
    "reference": "ATLS — Advanced Trauma Life Support, 10ª ed. / Diretrizes de bexiga neurogênica no trauma raquimedular (SBU)",
    "tags": [
      "trauma",
      "trauma raquimedular",
      "bexiga neurogênica",
      "urologia"
    ]
  },
  {
    "id": "unifesp2025-31",
    "module": "Clínica Médica",
    "text": "Mulher, 66 anos de idade, é atendida em consulta de rotina por diabetes tipo 2 e hipertensão arterial. Exame físico: PA = 140/96 mmHg. Exames laboratoriais: taxa de filtração glomerular estimada = 28 mL/min/1,73 m², proteinúria = 1,9 g/24h.\n\nQual é a conduta mais apropriada?",
    "options": [
      "(A) Prescrever inibidores da enzima conversão da angiotensina ou bloqueadores dos receptores da angiotensina II.",
      "(B) Evitar bloqueadores do sistema renina-angiotensina devido à função renal diminuída.",
      "(C) Não iniciar drogas anti-hipertensivas uma vez que a pressão arterial está controlada.",
      "(D) Iniciar bloqueador de canal de cálcio para diminuir proteinúria."
    ],
    "correctAnswer": 0,
    "explanation": "Diabética e hipertensa com doença renal crônica (TFG 28 mL/min/1,73 m²) e proteinúria de 1,9 g/24 h, com PA acima da meta (140/96).\n\nIECA ou BRA reduzem a proteinúria e retardam a progressão da doença renal diabética e são indicados mesmo com TFG reduzida. Exigem monitorização de potássio e creatinina, e uma queda de até 30% na TFG após o início é aceitável.",
    "commentary": "Evitar bloqueio do SRAA (B): a TFG baixa não contraindica; os benefícios renais persistem, com monitorização de potássio.\n\nNão tratar (C): a PA está acima da meta (< 130/80 mmHg nessa população).\n\nBCC para proteinúria (D): os di-hidropiridínicos não reduzem proteinúria como os bloqueadores do SRAA.",
    "reference": "KDIGO 2022 Diabetes in CKD / Diretrizes da SBD 2024 / Diretriz Brasileira de Hipertensão 2020",
    "tags": [
      "nefrologia",
      "doença renal diabética",
      "IECA",
      "BRA",
      "proteinúria"
    ]
  }
];
