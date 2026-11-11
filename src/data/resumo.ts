// Arquivo gerado por `npm run gen` a partir do banco de questões. Não editar à mão.
// O build e o servidor local regeneram este arquivo sozinhos; o `npm run validate` acusa se ficar desatualizado.
import type { Question } from '../types';

export const TOTAL_QUESTIONS = 1160;

export const COUNT_BY_AREA: Record<string, number> = {
  "Pediatria": 160,
  "Clínica Médica": 160,
  "Cirurgia": 160,
  "Ginecologia e Obstetrícia": 160,
  "Saúde Coletiva": 160,
  "Ciências Básicas": 160,
  "ENAMED": 200
};

export interface ExamEdition {
  label: string; // "TP 2024", "ENAMED 2026"
  kind: 'TP' | 'ENAMED';
  year: number;
  count: number;
}

/** Provas presentes no banco, em ordem cronológica (TP primeiro, depois ENAMED). */
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
  }
];

/** Questões por especialidade ou região da topografia ("1.1", "8"). */
export const TOPOGRAPHY_COUNT: Record<string, number> = {
  "1.1": 80
};

/** Questões por assunto, na chave "1.1|Cefaleias". */
export const TOPIC_COUNT: Record<string, number> = {
  "1.1|Cefaleias": 40,
  "1.1|AVC": 40
};

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
    "id": "tp2023-42",
    "module": "Pediatria",
    "text": "Em exame hematológico de rotina de uma criança de um ano de idade, encontrou-se anemia discreta, hipocrômica e RDW (medida de anisocitose) normal. No seguimento longitudinal, posteriormente, observou-se aumento na concentração de hemoglobina A2. É provável que esta criança tenha:",
    "options": [
      "(A) Anemia da doença crônica",
      "(B) ß talassemia heterozigota",
      "(C) Anemia falciforme",
      "(D) Anemia ferropriva"
    ],
    "correctAnswer": 1,
    "explanation": "Anemia leve, hipocrômica e microcítica com RDW normal é o padrão do traço talassêmico: as hemácias são pequenas, mas de tamanho uniforme. Na ferropenia, ao contrário, o RDW sobe cedo, porque hemácias pequenas novas convivem com as antigas, de tamanho normal.\n\nO aumento da hemoglobina A2 (acima de cerca de 3,5%) na eletroforese confirma a betatalassemia heterozigota (minor): um dos genes da cadeia beta é defeituoso, e a cadeia delta compensa. Ela costuma ser assintomática ou causar anemia leve e não precisa de tratamento. O cuidado é não prescrever ferro sem necessidade e fazer aconselhamento genético.",
    "commentary": "Anemia da doença crônica (A): costuma ser normocítica ou levemente microcítica, ligada a inflamação ou infecção crônica, com ferritina normal ou alta e Hb A2 normal.\n\nAnemia falciforme (C): é anemia hemolítica grave, normocítica, com crises de dor; a eletroforese mostra predomínio de Hb S, e não aumento de Hb A2.\n\nAnemia ferropriva (D): é a causa mais comum de microcitose no lactente, mas cursa com RDW elevado e Hb A2 normal ou baixa.",
    "tip": "Microcitose com RDW normal = pense em talassemia; Hb A2 aumentada = betatalassemia minor.",
    "reference": "Hay et al pp, 844-845; Kliegman et al pp, 2033-2037; Mc Millan et al pp, 1699-1700; Rudolph et al, pp 1536-1538.",
    "tags": [
      "hematologia"
    ]
  },
  {
    "id": "tp2022-51",
    "module": "Pediatria",
    "text": "Menino de 4 anos com sopro suave 2+/6+ em foco tricúspide durante quadro febril. Ecocardiograma prévio normal. Sobre este sopro, assinale a correta:",
    "options": [
      "(A) A principal causa de sopro fisiológico nesta idade é o forame oval pérvio.",
      "(B) O sopro fisiológico é comum nesta idade e tende a ficar mais audível em situações de febre.",
      "(C) O sopro fisiológico está presente em menos de 30% das crianças.",
      "(D) O sopro fisiológico normalmente é acompanhado de alterações de bulhas."
    ],
    "correctAnswer": 1,
    "explanation": "Criança de 4 anos com febre, sopro suave e de baixa intensidade (2+/6+), sem outras alterações e com ecocardiograma e ECG normais há 1 ano: é um sopro inocente (fisiológico), e a febre o tornou mais audível.\n\nSopros inocentes são muito frequentes em pré-escolares e escolares; o mais comum é o sopro de Still, vibratório, na borda esternal esquerda baixa. Eles aumentam em estados de débito cardíaco elevado (febre, anemia, exercício, ansiedade) e podem sumir com a mudança de posição. São sistólicos, suaves, sem frêmito, com bulhas normais, e não exigem tratamento, só reavaliação fora do quadro febril.",
    "commentary": "Forame oval pérvio (A): em geral não produz sopro audível; não é a causa dos sopros fisiológicos da infância.\n\nMenos de 30% das crianças (C): o sopro inocente é auscultado na maioria das crianças em algum momento da infância, bem acima de 30%.\n\nAlterações de bulhas (D): bulhas alteradas, sopro diastólico, intensidade de 3+/6+ ou mais e frêmito são sinais de sopro patológico, que pede investigação.",
    "tip": "Sopro inocente: sistólico, suave, sem frêmito, bulhas normais e mais audível com febre ou anemia.",
    "reference": "Tratado de Pediatria Burns - 4ª Ed.",
    "tags": [
      "cardiologia"
    ]
  },
  {
    "id": "tp2021-47",
    "module": "Pediatria",
    "text": "Menino, 5 anos, acorda pela manhã e a mãe observa o aparecimento de edema facial, marcadamente bipalpebral. Evolui com edema generalizado, acometendo os membros inferiores e parede do abdômen ao longo da semana. Refere diminuição da diurese sem outras alterações urinárias. Nega doenças anteriores. Exame físico: PA entre percentil 50 e 90 para a idade, sexo e percentil de altura. As alterações laboratoriais esperadas são:",
    "options": [
      "(A) Hematúria e cilindros hemáticos em Urina tipo 1 (EAS).",
      "(B) Proteinúria maciça e colesterol total e frações aumentadas.",
      "(C) Consumo de complemento C3 e complemento total CH50.",
      "(D) Antiestreptolisina (ASLO) aumentada e hematúria."
    ],
    "correctAnswer": 1,
    "explanation": "A instalação insidiosa de edema generalizado (anasarca) associada a níveis tensionais normais em pré-escolar é o protótipo clínico da Síndrome Nefrótica Idiopática (geralmente por doença de lesão mínima). Laboratorialmente, caracteriza-se por proteinúria massiva e hipercolesterolemia com hipoalbuminemia.",
    "commentary": "O quadro clínico descreve paciente com fenótipo sugestivo de Síndrome Nefrótica. A proteinúria intensa leva a hipoalbuminemia acentuada, a qual reduz a pressão oncótica capilar gerando edema volumoso. Em resposta, há aumento reflexo da síntese hepática de lipoproteínas, elevando sobremaneira o colesterol urinário e circulante. Hematúria e consumo de complemento apontariam para diagnóstico nefrítico.",
    "reference": "Nefrologia Pediátrica - Prática Clínica, SBP.",
    "tags": [
      "nefrologia"
    ]
  },
  {
    "id": "tp2019-54",
    "module": "Pediatria",
    "text": "Adolescente, 17 anos, feminino, apresenta desmaios e tosse há 40 dias. Relata fraqueza e diminuição do apetite há 10 dias. Exame físico: emagrecida, palidez cutâneo-mucosa, frequência respiratória = 36 ipm, frequência cardíaca = 78 bpm, pressão arterial = 120 x 70 mmHg, discreta turgência jugular à direita, sem fígado e baço palpáveis. RX de tórax: massa mediastinal estendendo-se para hemitórax superior direito.\n\nA hipótese diagnóstica é:",
    "options": [
      "(A) Linfoma",
      "(B) Higroma cístico",
      "(C) Bócio mergulhante",
      "(D) Tuberculose pulmonar"
    ],
    "correctAnswer": 0,
    "explanation": "Adolescente com sintomas constitucionais, tosse e massa mediastinal com turgência jugular (sinal de compressão da veia cava superior): a principal hipótese é linfoma, a causa mais comum de massa de mediastino anterior nessa faixa etária.",
    "commentary": "O higroma cístico é congênito e cervical. O bócio mergulhante é raro em adolescentes. A tuberculose pulmonar não costuma causar síndrome de veia cava superior.",
    "reference": "Nelson Tratado de Pediatria – 16ª. ed / Kliegman, Stanton, St. Geme, Schor, Elsevier, 2003.",
    "tags": [
      "pediatria",
      "oncologia pediátrica",
      "linfoma"
    ]
  },
  {
    "id": "tp2023-28",
    "module": "Clínica Médica",
    "text": "JM está em situação de rua e na primeira vez em que experimentou cocaína teve uma sensação de intensa euforia, bem-estar, desinibição, perda de apetite e aumento da energia e libido; porém, com o uso prolongado da droga, passou a ter que usar cada vez mais a cocaína para obter esses mesmos efeitos. O nome que corresponde a esse efeito causado pelo consumo prolongado de drogas é:",
    "options": [
      "(A) Abuso",
      "(B) Abstinência",
      "(C) Tolerância",
      "(D) Overdose"
    ],
    "correctAnswer": 2,
    "explanation": "Precisar de doses cada vez maiores para obter o mesmo efeito, ou ter efeito menor com a mesma dose, é a definição de tolerância. Ela surge com o uso repetido, por adaptação do organismo à substância (mudanças nos receptores, na neurotransmissão e no metabolismo).\n\nA tolerância é um dos critérios do transtorno por uso de substâncias e costuma andar junto com a abstinência e a perda de controle sobre o consumo, por isso é peça central na evolução para a dependência.",
    "commentary": "Abuso (A): designa um padrão de uso que traz prejuízos (sociais, legais, de saúde), não a necessidade de aumentar a dose; o DSM-5 substituiu abuso e dependência por transtorno por uso de substâncias.\n\nAbstinência (B): são os sintomas que surgem ao parar ou reduzir o uso; na cocaína, disforia, cansaço, sonolência, aumento do apetite e fissura.\n\nOverdose (D): é a intoxicação grave por dose excessiva, com risco de arritmia, infarto, convulsão e hipertermia.",
    "tip": "Mais droga para o mesmo efeito = tolerância. Sintomas ao parar = abstinência.",
    "reference": "DIEHL, A.; CORDEIRO, D. C.; LARANJEIRA, R. (Orgs.). Dependência química: prevenção, tratamento e políticas públicas. 2. ed. Porto Alegre: Artmed, 2018. 554 p.",
    "tags": [
      "psiquiatria"
    ]
  },
  {
    "id": "tp2025-31",
    "module": "Clínica Médica",
    "text": "Homem de 58 anos, portador de doença renal crônica estágio 5, dá entrada na emergência com dispneia intensa, edema generalizado e náuseas. Exames: potássio 7,0mEq/L; ureia 192mg/dL, creditiantina 8,5mg/dL e ECG ritmo sinusal, normal. A conduta indicada para este paciente é:",
    "options": [
      "(A) Restrição hídrica rigorosa e uso de furosemida em altas doses.",
      "(B) Iniciar hemodiálise de emergência.",
      "(C) Administração de gluconato de cálcio, insulina e glicose.",
      "(D) Expansão volêmica, bicarbonato e repetir exames."
    ],
    "correctAnswer": 1,
    "explanation": "O paciente apresenta indicações clássicas de diálise de urgência (hipercalemia grave de 7,0 mEq/L, sobrecarga volêmica refratária com dispneia importante, além de uremia sintomática com náuseas).",
    "commentary": "O paciente com doença renal crônica terminal (estágio 5) apresenta critérios inequívocos de urgência dialítica. Embora medidas de deslocamento interno do potássio (insulina, glicose) e estabilização de membrana (gluconato de cálcio) sejam temporariamente válidas para evitar arritmias em hipercalemia grave, elas não resolvem a sobrecarga hídrica nem a uremia severa, tornando a hemodiálise de emergência a conduta definitiva e imediata indicada.",
    "reference": "KDIGO Clinical Practice Guideline for Acute Kidney Injury. UpToDate, 2023.",
    "tags": [
      "nefrologia",
      "emergência"
    ]
  },
  {
    "id": "tp2021-36",
    "module": "Clínica Médica",
    "text": "Homem, 50 anos, portador de hipertensão, dislipidemia e Diabetes mellitus tipo 2 há 10 anos, é admitido no Pronto Socorro com quadro de confusão mental há 1 dia. Familiares informam uso irregular de metformina, glimepirida, sinvastatina e losartana; vinha apresentando diarreia, náuseas e febre há 2 dias. Exames: glicemia 650 mg/dL; K+ = 2,5 mEq/L; discreta cetonemia e cetonúria. Enquanto aguarda vaga na UTI, como deve ser o manejo da insulinização?",
    "options": [
      "(A) Insulina regular intramuscular a cada 1 hora.",
      "(B) Insulina regular intravenosa contínua.",
      "(C) Não iniciar insulinização até normalização do potássio.",
      "(D) Análogo de insulina ultrarrápida subcutânea a cada 1 hora."
    ],
    "correctAnswer": 2,
    "explanation": "O paciente exibe quadro de Estado Hiperglicêmico Hiperosmolar (EHH). Contudo, apresenta potássio sérico amplamente baixo (K+ = 2,5 mEq/L). Como a insulina promove o desvio interno rápido de potássio para dentro das células, iniciar a insulinização nessa fase gera risco altíssimo de hipocalemia catastrófica e óbito por arritmias graves. A conduta determina repor o eletrólito e adiar a insulina.",
    "commentary": "No manejo inicial das emergências glicêmicas graves, o status do potássio dita o tempo da introdução da insulina. Se o valor do potássio medido for menor que 3,3 mEq/L, a insulinoterapia deve ser rigorosamente suspensa. Deve-se iniciar hidratação salina e reposição robusta de cloreto de potássio para primeiro normalizar os valores iônicos séricos.",
    "reference": "MILECH, A. Diretrizes da Sociedade Brasileira de Diabetes (2019-2020). São Paulo: A.C. Farmacêutica, 2016. FAUCI, A.S et al. Medicina Interna de Harrison. 20ª ed. Rio de Janeiro: McGrawHill, 2019",
    "tags": [
      "endocrinologia",
      "emergência",
      "fisiopatologia"
    ]
  },
  {
    "id": "tp2019-33",
    "module": "Clínica Médica",
    "text": "Mulher, 28 anos, refere dificuldade de concentração, sono não reparador, sensação de cansaço ao acordar e dor articular e muscular em membros superiores e inferiores há seis meses. Nega perda de peso, hiporexia e febre. Exame físico: pele e mucosa sem alterações, articulações ou músculos sem sinais inflamatórios, força muscular preservada e dor em tender points.\n\nO tratamento mais efetivo é:",
    "options": [
      "(A) Anti-inflamatório não hormonal",
      "(B) Atividade física aeróbica",
      "(C) Agulhamento de tender points",
      "(D) Anti-inflamatório hormonal"
    ],
    "correctAnswer": 1,
    "explanation": "Dor musculoesquelética difusa há mais de 3 meses, sono não reparador, fadiga e alteração cognitiva, com exame físico sem sinais inflamatórios e dor em pontos dolorosos: fibromialgia.\n\nO tratamento com melhor evidência é a atividade física aeróbica regular, associada a educação em dor e, se necessário, fármacos como amitriptilina ou duloxetina.",
    "commentary": "Anti-inflamatórios (hormonais ou não) não têm eficácia na fibromialgia, que não é inflamatória. O agulhamento de pontos não tem evidência consistente.",
    "reference": "Goldenberg, DL. Patient education: Fibromyalgia (Beyond the Basics) UpToDate 2018. / https://www.uptodate.com/contents/fibromyalgia-beyond-the-basics.",
    "tags": [
      "reumatologia",
      "fibromialgia",
      "dor crônica"
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
    "id": "tp2022-61",
    "module": "Cirurgia",
    "text": "Paciente de 25 anos, masculino, será submetido a correção de hérnia inguinal direita por via convencional - inguinotomia. Visando a ligadura dos vasos superficiais do subcutâneo, o fechamento da aponeurose e o fechamento da pele, quais seriam os fios utilizados, respectivamente?",
    "options": [
      "(A) Algodão, PDS (polidioxanona), monocryl (poliglecaprona 25).",
      "(B) Vicryl (poliglactina 370), nylon, monocryl (poliglecaprona 25).",
      "(C) PDS (polidioxanona), monocryl (poligecaprina 25), algodão.",
      "(D) Catgut, monocryl (poliglecaprona 25), nylon."
    ],
    "correctAnswer": 0,
    "explanation": "Algodão para vasos superficiais, PDS (fio de longa absorção) para aponeurose e Monocryl para sutura intradérmica na pele.",
    "commentary": "Para ligaduras superficiais, o algodão é tradicional. A aponeurose exige um fio que suporte tração por tempo prolongado (PDS). Na pele, o monocryl evita cicatrizes exageradas.",
    "reference": "Sabiston - Tratado de Cirurgia - 18ª Ed.",
    "tags": [
      "cirurgia geral",
      "suturas"
    ]
  },
  {
    "id": "tp2025-62",
    "module": "Cirurgia",
    "text": "Homem de 65 anos, tabagista e com histórico de colangite esclerosante primária, apresenta icterícia progressiva há dois meses, associada a perda de peso não intencional e prurido cutâneo. Colangiopancreatografia por ressonância magnética revela uma estenose irregular da via biliar hepática comum, com dilatação dos ductos intra-hepáticos. Qual é o diagnóstico mais provável?",
    "options": [
      "(A) Hepatocarcinoma com invasão da via biliar.",
      "(B) Adenocarcinoma pancreático com invasão da via biliar.",
      "(C) Colelitíase complicada com colangite crônica.",
      "(D) Colangiocarcinoma peri-hilar – Tumor de Klatskin."
    ],
    "correctAnswer": 3,
    "explanation": "O colangiocarcinoma peri-hilar (Tumor de Klatskin) é o tumor biliar primário mais comum no hilo hepático, fortemente associado à colangite esclerosante primária.",
    "commentary": "O colangiocarcinoma peri-hilar, ou hilar (chamado tumor de Klatskin), é um tumor maligno da árvore biliar, frequentemente associado à colangite esclerosante primária. Os achados clínicos incluem icterícia progressiva indolor, perda de peso e prurido, além de exames de imagem demonstrando estenose irregular da via biliar com dilatação dos ductos intra-hepáticos. O hepatocarcinoma está usualmente associado a cirrose e nódulos parenquimatosos. O adenocarcinoma pancreático cursa com massa pancreática e sinal de Courvoisier. A colelitíase cursa com quadro febril e álgico mais agudo.",
    "reference": "Rizvi, S., & Gores, G. J. (2013). Pathogenesis, diagnosis, and management of cholangiocarcinoma. Gastroenterology, 145(6), 1215-1229; Khan, S. A., Davidson, B. R. et al. (2012). Guidelines for the diagnosis and treatment of cholangiocarcinoma. Gut, 61(12), 1657-1669.",
    "tags": [
      "oncologia",
      "gastroenterologia"
    ]
  },
  {
    "id": "tp2021-80",
    "module": "Cirurgia",
    "text": "Homem, 60 anos, apresentou em ultrassom de carótidas um nódulo de 1 cm de diâmetro no lobo direito da tireoide, de aspecto sólido e hipoecogênico, com bordas irregulares e microcalcificações. Tem exames de sangue recentes sem alterações, com dosagens de TSH e T4 livre normais. A próxima conduta deve ser:",
    "options": [
      "(A) Repetir a ultrassom de tireoide em seis meses.",
      "(B) Solicitar cintilografia de tireoide.",
      "(C) Indicar lobectomia tireoidiana à direita.",
      "(D) Fazer punção aspirativa com agulha fina do nódulo (PAAF)."
    ],
    "correctAnswer": 3,
    "explanation": "Nódulo de tireoide eutireoidiano medindo 1,0 cm com padrões de alta classificação de risco (TIRADS V/VI - hipoecoico, limites irregulares e microcalcificações) indica a feitura imediata de punção aspirativa por agulha fina (PAAF) guiada por USG.",
    "commentary": "Nódulo de 1,0 cm de diâmetro com padrões ultrassonográficos suspeitos (formato sólido, hipoecogênico, limites microlobulados ou irregulares e com presença de microcalcificações de cálcio pontual) manifesta critérios diagnósticos consistentes com malignização (carcinoma papilífero de tireoide). Em pacientes eutireoidianos (com TSH e hormônios tieroidenos devidamente em faixa normal), a imediata investigação citológica por Punção Aspirativa com Agulha Fina (PAAF) dirigida é soberana. O rastreio por cintilografia é restrito a nódulos quentes ou hiperfuncionantes em vigência de TSH suprimido. Esperar seis meses ou lobectomia cirúrgica direta prévia sem estudo citopatológico são imprudentes.",
    "reference": "Towsend, CM; Beauchamp, RD; Evans, BM; Sabiston - Tratado de Cirurgia, 20ª edição, Editora Guanabara-Koogan, 2019.",
    "tags": [
      "cabeça e pescoço",
      "endocrinologia",
      "oncologia"
    ]
  },
  {
    "id": "tp2019-64",
    "module": "Cirurgia",
    "text": "Mulher de 65 anos apresenta há três dias icterícia, dor abdominal e urina de cor escura. Antecedentes pessoais: colecistopatia crônica calculosa, aguardando cirurgia. Exame físico: febril, ictérica 3+/4, com dor à palpação de hipocôndrio direito. Exames laboratoriais: bilirrubina total de 4,8 mg/dL (bilirrubina direta: 3,8 mg/dL), leucograma de 15.000/mm³ sem desvio.\n\nA hipótese diagnóstica mais provável é:",
    "options": [
      "(A) Cólica biliar",
      "(B) Pancreatite aguda",
      "(C) Colecistite aguda calculosa",
      "(D) Coledocolitíase com colangite"
    ],
    "correctAnswer": 3,
    "explanation": "Paciente com colelitíase que evolui com icterícia colestática (predomínio de bilirrubina direta), febre e dor em hipocôndrio direito — tríade de Charcot: coledocolitíase complicada por colangite.",
    "commentary": "A cólica biliar não causa febre nem icterícia. A colecistite aguda isolada não cursa com icterícia significativa. A pancreatite cursaria com dor em faixa e elevação de amilase/lipase.",
    "reference": "José Cesar Assef et. Al. Emergências cirúrgicas traumáticas e não traumáticas. Condutas e algorítimo. Capítulo 24. Colangite aguda. 9 13",
    "tags": [
      "cirurgia",
      "vias biliares",
      "colangite"
    ]
  },
  {
    "id": "tp2024-87",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 30 anos, citologia: \"Células escamosas atípicas não podendo excluir lesão de alto grau (ASC-H)\". Conduta?",
    "options": [
      "(A) Encaminhar para colposcopia.",
      "(B) Repetir citologia em 6 meses.",
      "(C) Repetir citologia em 12 meses.",
      "(D) Repetir citologia em 3 anos."
    ],
    "correctAnswer": 0,
    "explanation": "ASC-H significa células escamosas atípicas em que não se pode afastar lesão de alto grau. Uma parte importante dessas mulheres tem, de fato, lesão intraepitelial de alto grau ou até câncer na investigação.\n\nPor isso as Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero recomendam que toda mulher com ASC-H, em qualquer idade, seja encaminhada diretamente à colposcopia, com biópsia das áreas suspeitas. Não se repete a citologia.",
    "commentary": "Repetir em 6 meses (B): é a conduta para ASC-US em mulheres a partir de 30 anos, não para ASC-H, que pode esconder lesão de alto grau.\n\nRepetir em 12 meses (C): é a conduta para ASC-US e LSIL em mulheres mais jovens; atrasaria o diagnóstico de uma lesão potencialmente grave.\n\nRepetir em 3 anos (D): é o intervalo do rastreamento após dois exames normais, sem lugar diante de um laudo alterado.",
    "tip": "ASC-H, HSIL, AGC ou suspeita de invasão: colposcopia direto, sem repetir citologia.",
    "reference": "Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero.",
    "tags": [
      "ginecologia oncológica",
      "patologia do trato genital inferior"
    ]
  },
  {
    "id": "tp2023-88",
    "module": "Ginecologia e Obstetrícia",
    "text": "26 anos, secundigesta com 1 abortamento anterior há 3 anos, portadora do vírus HIV, em uso regular de tenofovir, lamivudina e dolutegravir. Apresenta carga viral menor que 1000 cópias/mL com 36 semanas, tendo indicação de zidovudina intravenosa até o clampeamento do cordão. Apresentação cefálica. A conduta em relação ao parto é:",
    "options": [
      "(A) Interromper por cesárea com 39 semanas.",
      "(B) Induzir com ocitocina na 37ª semana.",
      "(C) Aguardar pelo parto vaginal.",
      "(D) Iniciar prostaglandina via vaginal com 37 semanas."
    ],
    "correctAnswer": 2,
    "explanation": "Pelo protocolo do Ministério da Saúde para prevenção da transmissão vertical do HIV, a via de parto é decidida pela carga viral medida a partir de 34 semanas. Quando ela está inferior a 1.000 cópias/mL, a cesariana eletiva não reduz de forma relevante a transmissão, e a via de parto segue a indicação obstétrica.\n\nEsta gestante usa a terapia antirretroviral corretamente, tem carga viral inferior a 1.000 cópias/mL com 36 semanas e feto cefálico, então o correto é aguardar o trabalho de parto espontâneo e o parto vaginal. A cesariana nas mulheres vivendo com HIV tem mais complicações pós-operatórias e só é eletiva quando a carga viral é igual ou maior que 1.000 cópias/mL ou desconhecida.",
    "commentary": "Cesárea com 39 semanas (A): a cesariana eletiva por HIV fica para carga viral igual ou maior que 1.000 cópias/mL ou desconhecida após 34 semanas (nesse caso, programada com 38 semanas), não para esta paciente.\n\nIndução com ocitocina na 37ª semana (B): não há indicação obstétrica para antecipar o parto; o HIV controlado não justifica indução.\n\nProstaglandina vaginal com 37 semanas (D): da mesma forma, não há motivo para preparar o colo e induzir; o caminho é esperar o trabalho de parto espontâneo.",
    "tip": "HIV na gestação: carga viral abaixo de 1.000 após 34 semanas = parto vaginal; acima ou desconhecida = cesárea eletiva.",
    "reference": "Ministério da saúde. Protocolo clínico e diretrizes terapêuticas para prevenção da transmissão vertical de hiv, sífilis e hepatites virais. Página 108. 2022. Disponível em https://bvsms.saude.gov.br/bvs/publicacoes/protocolo_clinico_hiv_sifilis_hepatites.pdf",
    "tags": [
      "obstetrícia",
      "infecções"
    ]
  },
  {
    "id": "tp2022-92",
    "module": "Ginecologia e Obstetrícia",
    "text": "Primigesta, 34 semanas, Hb 11,5 g/dL (era 12,5 g/dL com 10 semanas). Conduta correta?",
    "options": [
      "(A) Pesquisar hemoglobinopatias por eletroforese.",
      "(B) Orientar dieta ricas em legumes, verduras e proteínas.",
      "(C) Encaminhar ao alto risco por anemia severa.",
      "(D) Ferro elementar em doses terapêuticas."
    ],
    "correctAnswer": 1,
    "explanation": "Na gestação, considera-se anemia a hemoglobina abaixo de 11 g/dL. Esta gestante tem 11,5 g/dL, portanto não está anêmica.\n\nA queda de 12,5 para 11,5 g/dL ao longo da gravidez é esperada: o volume de plasma aumenta mais do que a massa de hemácias, o que dilui a hemoglobina (hemodiluição fisiológica). A conduta é apenas orientar alimentação saudável e variada, com fontes de ferro e proteínas, e manter a suplementação profilática de ferro e ácido fólico que o Ministério da Saúde recomenda a todas as gestantes.",
    "commentary": "Eletroforese de hemoglobina (A): investigação de hemoglobinopatias faz sentido diante de anemia, microcitose sem deficiência de ferro ou história familiar; aqui a hemoglobina é normal.\n\nEncaminhar ao alto risco por anemia severa (C): não há anemia; a anemia grave na gestação corresponde a valores muito mais baixos (abaixo de 8 g/dL).\n\nFerro em dose terapêutica (D): dose de tratamento é para gestante com anemia confirmada; com hemoglobina normal, usa-se apenas a dose profilática.",
    "tip": "Gestação: anemia é Hb abaixo de 11 g/dL. Queda leve ao longo da gravidez é hemodiluição fisiológica.",
    "reference": "MS - Atenção ao Pré-Natal de Baixo Risco.",
    "tags": [
      "obstetrícia",
      "nutrição"
    ]
  },
  {
    "id": "tp2025-97",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 39 anos, G3PN3 com histórico de pré-eclâmpsia sobreposta a hipertensão arterial crônica, teve parto normal há 50 minutos e está apresentando sangramento vaginal abundante. Ao chegar ao leito, ela se encontra em regular estado geral, frequência cardíaca de 120bpm, pressão arterial de 90x60 e útero amolecido acima da cicatriz umbilical. Diante do quadro, assinale a alternativa com a sequência e o protocolo terapêutico adequados:",
    "options": [
      "(A) Compressão uterina bimanual e revisão de canal vaginal.",
      "(B) Ocitocina, metilergometrina e misoprostol.",
      "(C) Compressão uterina bimanual, ocitocina e misoprostol.",
      "(D) Ocitocina e curetagem imediata."
    ],
    "correctAnswer": 2,
    "explanation": "Diante de hemorragia pós-parto por atonia uterina, a conduta mecânica inicial com compressão bimanual (manobra de Hamilton) deve ser associada imediatamente a ocitocina e misoprostol, evitando metilergometrina pelo histórico de hipertensão.",
    "commentary": "A atonia uterina consolidada por útero amolecido (globo de segurança de Pinard ausente) é responsável por mais de 80% das causas de hemorragia pós-parto (HPP). A conduta de urgência exige manobras de fechamento e compressão física mecânica imediata (como a manobra bimanual de Hamilton) aliada à infusão veloz de ocitocina sistêmica endovenosa e administração retal/sublingual de misoprostol (800mcg). É imperioso destacar que o uso de Metilergometrina (Ergotrate) é estritamente contraindicado nesse caso, pelo grave histórico relatado de pré-eclâmpsia e hipertensão crônica na paciente, antevisto o seu potente e deletério efeito vasoconstritor arterial.",
    "reference": "Hemorragia pós-parto, Protocolo FEBRASGO-Obstetrícia, nº 36, 2021.",
    "tags": [
      "obstetrícia",
      "emergência"
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
    "id": "tp2024-116",
    "module": "Saúde Coletiva",
    "text": "Sobre o Método Clínico Centrado na Pessoa (MCCP), é correto afirmar:",
    "options": [
      "O componente \"Sendo Realista\" foca apenas nos recursos financeiros do paciente.",
      "O acrônimo SIFE refere-se à anamnese técnica por sistemas.",
      "Deve-se seguir rigidamente a ordem dos quatro componentes em todas as consultas.",
      "O primeiro componente foca em entender a experiência da doença para o indivíduo (ideias, sentimentos, expectativas)."
    ],
    "correctAnswer": 3,
    "explanation": "O Método Clínico Centrado na Pessoa organiza a consulta em quatro componentes: explorar a saúde, a doença e a experiência de adoecer; entender a pessoa como um todo (história de vida, família, contexto); elaborar um plano conjunto de manejo; e intensificar a relação médico-pessoa.\n\nO primeiro componente vai além do diagnóstico biomédico: busca saber como a pessoa vive aquele problema. Para isso usa-se o acrônimo SIFE — Sentimentos, Ideias, Funcionalidade (o impacto no dia a dia) e Expectativas em relação à consulta. É essa compreensão que permite chegar a um plano que a pessoa aceite e consiga seguir.",
    "commentary": "Sendo realista restrito ao dinheiro do paciente (A): a ideia de ser realista diz respeito ao uso sensato do tempo, dos recursos do serviço e da equipe e das próprias habilidades do médico, e não só às finanças da pessoa.\n\nSIFE como anamnese por sistemas (B): o SIFE explora a experiência subjetiva da doença (sentimentos, ideias, funcionalidade e expectativas); o interrogatório sobre os diversos aparelhos é outra ferramenta.\n\nOrdem rígida dos componentes (C): os componentes se entrelaçam e são retomados conforme a conversa e o vínculo evoluem; não existe sequência obrigatória em cada consulta.",
    "tip": "MCCP, 1º componente = SIFE: Sentimentos, Ideias, Funcionalidade e Expectativas do paciente sobre a doença.",
    "reference": "Consulta centrada na pessoa, José Mauro Ceratti Lopes; Lêda Chaves Dias, Tratado de Medicina de Família e Comunidade, Capítulo 15, 2ª edição, Gustavo Gusso, 2019. Método clínico centrado na pessoa, Marcelo Garcia Kolling, Medicina Ambulatorial – Condutas de Atenção Primária baseadas em Evidências, Cap 11, 5ª edição, Artmed, 2022",
    "tags": [
      "MCCP",
      "relação médico-paciente",
      "APS"
    ]
  },
  {
    "id": "tp2022-103",
    "module": "Saúde Coletiva",
    "text": "Gestante atendida em UBS após crise convulsiva recebe medicação, cadastro no pré-natal e encaminhamento ao neurologista da rede municipal. Quais princípios doutrinários do SUS foram atendidos?",
    "options": [
      "(A) Universalidade e Regionalização.",
      "(B) Intersetorialidade e Equidade.",
      "(C) Universalidade e Integralidade.",
      "(D) Integralidade e Territorialização."
    ],
    "correctAnswer": 2,
    "explanation": "O acesso à UBS (Universalidade) e o cuidado que vai da atenção primária à especializada (Integralidade) exemplificam esses princípios.",
    "commentary": "A universalidade garante o acesso. A integralidade é vista no atendimento que considera todas as necessidades da paciente, articulando diferentes níveis de complexidade.",
    "reference": "Lei nº 8.080/1990.",
    "tags": [
      "SUS",
      "políticas de saúde"
    ]
  },
  {
    "id": "tp2025-107",
    "module": "Saúde Coletiva",
    "text": "Paciente com diabetes mellitus tipo 2 já diagnosticada realiza acompanhamento regular com equipe multidisciplinar para evitar retinopatia e nefropatia diabética. Este caso representa qual nível de prevenção?",
    "options": [
      "(A) Prevenção primária",
      "(B) Prevenção secundária",
      "(C) Prevenção terciária",
      "(D) Prevenção quaternária"
    ],
    "correctAnswer": 1,
    "explanation": "De acordo com referenciais clássicos da Medicina de Família sobre níveis preventivos, a prevenção secundária visa à detecção precoce de lesões assintomáticas e ao tratamento de base imediato para conter o avanço ao espectro clínico desfavorável.",
    "commentary": "Embora o manejo de complicações estabelecidas de longo prazo seja classificado sob o crivo preventivo terciário (focado em reabilitação e limitação de incapacidades), a conduta ativa diagnóstica multiprofissional periódica voltada a interceptar manifestações ainda subclínicas em fase latente (como a busca ativa precoce por microalbuminúria ou retinopatia diabética inicial incipiente em paciente diagnosticado) assenta-se sob o escopo preventivo secundário.",
    "reference": "Lopes JM, Gusso G. Tratado de Medicina de Família e Comunidade, 2a ed. Porto Alegre: Artmed, 2019.",
    "tags": [
      "prevenção",
      "atenção primária"
    ]
  },
  {
    "id": "tp2026-103",
    "module": "Saúde Coletiva",
    "text": "Em uma UBS, mulher de 74 anos, diabética e hipertensa, independente para atividades de vida diária, apresenta quedas recorrentes no último ano. Considerando ações de promoção e prevenção, qual estratégia deve ser priorizada pela equipe?",
    "options": [
      "(A) Fazer avaliação multifatorial de risco de quedas, revisão medicamentosa e orientação de exercício físico.",
      "(B) Solicitar densitometria óssea anual, independentemente de fatores adicionais de risco.",
      "(C) Encaminhar para otorrino para investigação de alteração do equilíbrio como causa principal das quedas.",
      "(D) Encaminhar para ortopedia para investigação de artrose como causa principal das quedas."
    ],
    "correctAnswer": 0,
    "explanation": "Idosa com quedas recorrentes precisa de uma avaliação multifatorial, porque a queda raramente tem uma única causa. A equipe deve investigar fatores do próprio paciente (força, marcha e equilíbrio, visão, hipotensão postural, hipoglicemia, cognição, pés), revisar os medicamentos (anti-hipertensivos, hipoglicemiantes, sedativos e a polifarmácia em geral) e avaliar riscos em casa.\n\nA intervenção com melhor resultado para prevenir novas quedas é o exercício físico regular com treino de equilíbrio e fortalecimento, associado à correção dos fatores encontrados. Tudo isso pode ser feito e coordenado na Atenção Primária.",
    "commentary": "Densitometria anual (B): pode ser indicada para avaliar osteoporose e risco de fratura, mas não previne a queda em si, e não há motivo para repeti-la todo ano de forma rotineira.\n\nEncaminhar ao otorrino (C): alteração vestibular é apenas um dos fatores possíveis; encaminhar sem avaliação global ignora os demais e tira o cuidado da APS.\n\nEncaminhar à ortopedia (D): da mesma forma, a artrose é só uma possível contribuição; o encaminhamento isolado não aborda medicamentos, visão, ambiente e condicionamento.",
    "tip": "Quedas no idoso: avaliação multifatorial + revisão de remédios + exercício de equilíbrio e força.",
    "reference": "Ministério da Saúde. Caderneta de Saúde da Pessoa Idosa; Sociedade Brasileira de Geriatria e Gerontologia (SBGG).",
    "tags": [
      "saúde do idoso",
      "prevenção de quedas",
      "multifatorialidade"
    ]
  },
  {
    "id": "tp2019-118",
    "module": "Saúde Coletiva",
    "text": "Quanto aos segmentos sociais que compõem o Conselho Nacional de Saúde (CNS), a alternativa correta de acordo com a lei 8.142/90 é:",
    "options": [
      "(A) 50% de usuário do SUS, 30% de trabalhadores do SUS e 20% de gestores/prestadores de serviço de saúde.",
      "(B) 30% de usuário do SUS, 30% de trabalhadores do SUS e 40% de gestores/prestadores de serviço de saúde.",
      "(C) 25% de usuário do SUS, 25% de trabalhadores do SUS e 50% de gestores/prestadores de serviço de saúde.",
      "(D) 50% de usuário do SUS, 25% de trabalhadores do SUS e 25% de gestores/prestadores de serviço de saúde."
    ],
    "correctAnswer": 3,
    "explanation": "A Lei 8.142/1990 estabelece a paridade nos conselhos de saúde: 50% de representantes de usuários e 50% divididos entre os demais segmentos — 25% de trabalhadores da saúde e 25% de gestores e prestadores.",
    "commentary": "As demais distribuições não respeitam a paridade dos usuários.",
    "reference": "Página do Conselho Nacional de Saúde – ministério da saúde, https://conselho.saude.gov.br/apresentacao/composicao.htm Lei 8.142/90, 28/12/90 / Instituto de Métrica e Avaliação em Saúde. Estudo de Carga de Doença Global: gerando evidências, informando políticas de saúde. Seattle, WA: IHME, 2013.",
    "tags": [
      "saúde coletiva",
      "SUS",
      "controle social"
    ]
  },
  {
    "id": "tp2022-19",
    "module": "Ciências Básicas",
    "text": "Homem de 55 anos, em situação de rua e etilista, foi internado devido a pneumonia multilobar grave. Desenvolveu quadro de insuficiência respiratória grave. Foi solicitada uma baciloscopia de escarro, que revelou bastonetes gram-negativos encapsulados. O organismo é fermentador de lactose em ágar de MacConkey e é muito mucoide. O agente etiológico mais provável é:",
    "options": [
      "(A) Nocardia abscessos",
      "(B) Clostridium difficile",
      "(C) Streptococcus pneumoniae",
      "(D) Klebsiella pneumoniae"
    ],
    "correctAnswer": 3,
    "explanation": "Klebsiella pneumoniae é um bacilo Gram-negativo encapsulado, fermentador de lactose, associado a pneumonias graves em etilistas.",
    "commentary": "A Klebsiella pneumoniae (família Enterobacteriaceae) é um bastonete Gram-negativo, lactose positivo e apresenta uma cápsula proeminente que resulta em colônias muito mucoides. O S. pneumoniae é Gram-positivo. Clostridium é anaeróbio.",
    "reference": "TRABULSI, L. R.; ALTERTHUM, F. (Ed.). Microbiologia. 5. ed. São Paulo: Atheneu, 2010.",
    "tags": [
      "microbiologia",
      "pneumologia",
      "infectologia"
    ]
  },
  {
    "id": "tp2021-13",
    "module": "Ciências Básicas",
    "text": "Homem, 23 anos, vítima de trauma abdominal fechado com hipovolemia por provável hemorragia intra-abdominal. Qual é a ação direta das células justaglomerulares nessa situação?",
    "options": [
      "(A) Bloqueio da liberação do hormônio antidiurético.",
      "(B) Liberação de aldosterona.",
      "(C) Aumento da reabsorção da creatinina.",
      "(D) Liberação de renina."
    ],
    "correctAnswer": 3,
    "explanation": "As células justaglomerulares renais respondem diretamente à hipotensão arterial e hipovolemia por meio da síntese e liberação de renina para ativar o eixo SRAA.",
    "commentary": "A redução da pressão de perfusão na artéria aferente renal estimula as células do aparelho justaglomerular a secretar renina por ação direta. A renina cliva o angiotensinogênio hepático em angiotensina I, iniciando a cascata que estabiliza a pressão circulatória por vasoconstrição (via Angiotensina II) e retenção de sódio/água (via aldosterona, liberada pela adrenal pós-estímulo).",
    "reference": "Berne & Levy - Fisiologia - 6a Ed. Elsevier",
    "tags": [
      "fisiologia",
      "nefrologia",
      "fisiopatologia"
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
    "id": "enamed-2025-25",
    "module": "ENAMED",
    "text": "Multípara, 37 semanas, obesa, apresentando diabetes mellitus gestacional controlada com insulina NPH e regular. Evoluiu para parto normal, e o recém-nascido pesou 3.300 g.\n\nA conduta no puerpério imediato deve ser",
    "options": [
      "(A) suspender insulinoterapia.",
      "(B) iniciar hipoglicemiante oral.",
      "(C) manter insulina NPH em 1/3 da dose da gravidez.",
      "(D) manter insulinoterapia com a dosagem do pré-natal."
    ],
    "correctAnswer": 0,
    "explanation": "No diabetes mellitus gestacional (DMG), a resistência à insulina é induzida por hormônios de origem placentária (como o lactogênio placentário). Com a dequitação e saída da placenta no parto, há uma queda abrupta e imediata desses níveis hormonais contrarreguladores, cessando o estímulo diabetogênico temporário. Portanto, a insulinoterapia deve ser suspensa imediatamente no puerpério, mantendo-se apenas o monitoramento glicêmico capilar de rotina e agendando reavaliação de tolerância glicêmica (com TOTG 75g) entre 4 e 12 semanas pós-parto.",
    "commentary": "Iniciar hipoglicemiantes orais ou manter a insulina pós-parto sem necessidade comprovada induzirá hipoglicemia iatrogênica na paciente, visto que a fisiologia retorna ao basal rapidamente.",
    "reference": "Diretrizes da Sociedade Brasileira de Diabetes (SBD) / FEBRASGO",
    "tags": [
      "ginecologia",
      "obstetrícia",
      "diabetes gestacional",
      "puerpério"
    ]
  },
  {
    "id": "enamed-2025-68",
    "module": "ENAMED",
    "text": "Homem de 60 anos procura atendimento por apresentar perda urinária aos esforços há seis meses após prostatectomia radical realizada para tratamento de câncer de próstata localizado. Nega urgência miccional ou sintomas obstrutivos.\n\nQual é a conduta inicial mais adequada?",
    "options": [
      "(A) Implante imediato de esfíncter urinário artificial.",
      "(B) Exercícios para fortalecimento do assoalho pélvico.",
      "(C) Prescrição de oxibutinina.",
      "(D) Ressecção transuretral da próstata."
    ],
    "correctAnswer": 1,
    "explanation": "A incontinência urinária de esforço é uma complicação conhecida após prostatectomia radical, decorrente do enfraquecimento ou lesão do esfíncter uretral intrínseco. A conduta inicial e conservadora mais recomendada consiste no fortalecimento da musculatura do assoalho pélvico por meio de fisioterapia pélvica e exercícios de Kegel, apresentando ótimas taxas de melhora e cura ao longo do primeiro ano pós-cirúrgico.",
    "commentary": "O implante de esfíncter urinário artificial (A) é a terapia padrão-ouro cirúrgica, mas é indicado apenas após falha do tratamento conservador por pelo menos 6 a 12 meses. A oxibutinina (C) é um anticolinérgico indicado para incontinência de urgência (bexiga hiperativa), e não de esforço pura. A RTUp (D) não tem papel aqui, pois o paciente não possui próstata (foi submetido a prostatectomia radical).",
    "reference": "Diretrizes de Urologia da Sociedade Brasileira de Urologia (SBU) / Campbell-Walsh Urology",
    "tags": [
      "cirurgia",
      "urologia",
      "incontinência urinária",
      "pós-operatório",
      "prostatectomia"
    ]
  }
];
