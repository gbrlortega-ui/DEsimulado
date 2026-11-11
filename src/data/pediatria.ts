import { Question } from '../types';

export const PEDIATRIA_QUESTIONS: Question[] = [
  {
    id: 'tp2024-41',
    module: 'Pediatria',
    text: 'Menino de 2 anos e 3 meses é levado por sua mãe à consulta pediátrica com queixa de febre de até 38,5°C há 3 dias e irritabilidade. A mãe queixa-se também de que o filho “não come nada”. As imagens mostradas (descritas no exame físico) são vesículas na região da mão e boca. Qual é o agente etiológico responsável pelo quadro?',
    image: '/images/tp2024-41.webp',
    options: [
      '(A) Varicela Zoster',
      '(B) Vírus Epstein Barr',
      '(C) Coxsackie',
      '(D) Parvovírus B19'
    ],
    correctAnswer: 2,
    explanation: "Criança pequena com febre baixa, irritabilidade e recusa alimentar (as lesões na boca doem ao comer) somadas a vesículas em mãos e na mucosa oral formam o quadro clássico da doença mão-pé-boca.\n\nEla é causada por enterovírus, principalmente o Coxsackie A16 (também o enterovírus 71 e o Coxsackie A6). O tratamento é de suporte: analgesia, antitérmico e atenção à hidratação, porque a dor oral leva à desidratação.",
    commentary: "Varicela-zóster (A): lesões em vários estágios ao mesmo tempo (mácula, pápula, vesícula e crosta), muito pruriginosas, começando no tronco e na face — não se concentram em mãos e boca.\n\nEpstein-Barr (B): causa mononucleose, com faringite exsudativa, linfonodos cervicais aumentados e hepatoesplenomegalia, sem vesículas em mãos.\n\nParvovírus B19 (D): eritema infeccioso, com bochechas vermelhas (\"face esbofeteada\") e depois exantema rendilhado nos membros, sem vesículas.",
    tip: "Febre + recusa alimentar + vesículas em mãos, pés e boca = Coxsackie (doença mão-pé-boca).",
    reference: 'Tratado de pediatria / organização Sociedade Brasileira de Pediatria. - 5. ed. - Barueri [SP]: Manole, 2022. Seção 20. Infectologia',
    tags: ['infectologia', 'exantemáticas']
  },
  {
    id: 'tp2024-42',
    module: 'Pediatria',
    text: 'Menina com 1 ano e 6 meses de idade apresenta desenvolvimento de pilificação em região genital há 2 meses, associado a acne e odor axilar. Ao exame físico, há pelos grossos escuros e encaracolados em região de grandes lábios e pube, além de hipertrofia de clítoris; não há tecido mamário palpável. Qual o melhor exame a ser solicitado para a principal hipótese dessa paciente?',
    options: [
      '(A) LH e FSH',
      '(B) Tomografia da glândula adrenal',
      '(C) Ultrassom pélvico',
      '(D) Idade óssea'
    ],
    correctAnswer: 1,
    explanation: "Pelos pubianos grossos, acne, odor axilar e aumento do clitóris em uma menina de 1 ano e meio, sem mamas, indicam excesso de andrógenos (virilização), e não puberdade verdadeira: se o eixo hipotálamo-hipófise-gônadas estivesse ativado, haveria telarca.\n\nA instalação rápida (2 meses) e a virilização intensa nessa idade levantam a suspeita de tumor adrenal produtor de andrógenos (carcinoma adrenocortical é o principal). Por isso o exame que investiga a principal hipótese é a imagem da adrenal, como a tomografia.",
    commentary: "LH e FSH (A): servem para avaliar puberdade precoce central, que começa com telarca nas meninas — aqui não há tecido mamário.\n\nUltrassom pélvico (C): procura tumor ovariano ou sinais de estímulo estrogênico no útero e ovários; não é o exame da hipótese principal, que é adrenal.\n\nIdade óssea (D): mostra o quanto os andrógenos aceleraram a maturação e ajuda no prognóstico de altura, mas não identifica a causa.",
    tip: "Virilização rápida sem mamas na lactente: pense em tumor de adrenal e peça imagem da adrenal.",
    reference: 'Tratado de pediatria / organização Sociedade Brasileira de Pediatria. - 5. ed. - Barueri [SP]: Manole, 2022. Seção 16 endocrinologia. Endocrinologia pediátrica / Crésio de Aragão Dantas Alves. - 1. ed. - Barueri [SP]: Manole, 2019.',
    tags: ['endocrinologia']
  },
  {
    id: 'tp2024-43',
    module: 'Pediatria',
    text: 'Recém-nascido de parto normal, sexo feminino, a termo, pequeno para a idade gestacional, mãe primigesta, pré-natal sem intercorrências, refere pai com cegueira em olho D. No alojamento conjunto, foi feito o teste do olhinho no RN (Reflexo Vermelho) que se apresentou negativo no olho E e foi positivo no olho D. Diante do caso, qual a principal hipótese diagnóstica e a conduta a ser tomada pelo pediatra?',
    options: [
      '(A) Retinoblastoma no olho direito. Repetir o exame de reflexo vermelho com 7 dias de vida.',
      '(B) Retinoblastoma no olho esquerdo. Solicitar fundo de olho ao oftalmologista.',
      '(C) Glaucoma congênito no olho direito. Solicitar fundo de olho ao oftalmologista.',
      '(D) Catarata congênita no olho esquerdo. Repetir o exame de reflexo vermelho com 7 dias de vida.'
    ],
    correctAnswer: 1,
    explanation: 'Reflexo vermelho negativo (ausente) em recém-nascido é uma emergência oftalmológica para descartar retinoblastoma ou catarata.',
    commentary: 'O reflexo vermelho negativo no olho E significa que está alterado. O reflexo positivo significa normalidade. Trata-se de retinoblastoma em olho E, doença que pode ser de causa genética em uma porcentagem dos casos. A solicitação de oftalmologista é fundamental para confirmação diagnóstica feita pelo FO. O retinoblastoma é o câncer ocular mais comum em crianças, mas é raro e responde por 3% dos cânceres infantis. Entre 60% e 75% dos casos de retinoblastoma são esporádicos, isto é, uma célula sofre mutação e passa a se multiplicar descontroladamente. Essa forma de retinoblastoma geralmente aparece em crianças com mais de 1 ano de idade. Os demais casos são hereditários e a criança tem uma mutação num gene supressor de tumor chamado RB1, que está presente em todas as células de seu corpo, inclusive nas que vão dar origem a óvulos ou espermatozoides. Geralmente, essa mutação é herdada de um dos pais, embora possa ser também uma mutação nova que comece com o paciente, que vai transmiti-la aos descendentes. Nesses casos, o retinoblastoma se desenvolve no bebê, antes de 1 ano de idade.',
    reference: 'https://accamargo.org.br/sobre-o-cancer/tipos-decancer/retinoblastoma',
    tags: ['oftalmologia', 'oncologia']
  },
  {
    id: 'tp2024-44',
    module: 'Pediatria',
    text: 'Recém-nascido com 19 horas de vida apresent apresentou icterícia zona II de Kramer e bilirrubina total transcutânea de 10mg/dL. Mãe O negativo, Coombs indireto positivo. RN: B positivo, Coombs direto positivo e eluato anti-B positivo. No segundo dia, BT = 25mg/dL, BI = 23mg/dL e BD = 2mg/dL. Qual o diagnóstico e conduta?',
    options: [
      '(A) Isoimunização Rh e realizar exsanguineotransfusão.',
      '(B) Isoimunização BO e transfundir concentrado de glóbulos vermelhos.',
      '(C) Esferocitose Hereditária e transfundir concentrado de glóbulos vermelhos.',
      '(D) Isoimunização BO e realizar exsanguineotransfusão.'
    ],
    correctAnswer: 3,
    explanation: "Icterícia nas primeiras 24 horas de vida é sempre patológica e sugere hemólise. A mãe é O e o bebê é B, com Coombs direto positivo e eluato anti-B positivo: o anticorpo grudado nas hemácias do bebê é o anti-B da mãe, o que confirma a doença hemolítica por incompatibilidade ABO.\n\nNo segundo dia, a bilirrubina indireta chegou a 23 mg/dL, acima do limite de exsanguineotransfusão para um recém-nascido com doença hemolítica nessa idade. A conduta é exsanguineotransfusão o quanto antes, mantendo fototerapia intensiva enquanto ela é preparada: ela retira bilirrubina e anticorpos e corrige a anemia.",
    commentary: "Isoimunização Rh (A): a mãe é Rh negativo e o bebê Rh positivo, mas o eluato identificou anti-B como o anticorpo nas hemácias — a causa é ABO, não Rh.\n\nTransfusão de concentrado de hemácias (B e C): corrige anemia, mas não remove a bilirrubina nem os anticorpos; não trata o risco de kernicterus.\n\nEsferocitose hereditária (C): microesferócitos também aparecem na hemólise por ABO. O diagnóstico de esferocitose exige teste de fragilidade osmótica (ou EMA) e história familiar, pois é doença autossômica dominante.",
    tip: "Icterícia < 24 h + Coombs direto positivo + mãe O e bebê A ou B = incompatibilidade ABO; bilirrubina acima do limite → exsanguineotransfusão.",
    reference: 'Cloherty and Stark\'s Manual of Neonatal Care, 9th Edition, 2023',
    tags: ['neonatologia', 'icterícia']
  },
  {
    id: 'tp2024-45',
    module: 'Pediatria',
    text: 'Adolescente, 12 anos, obesidade grave (IMC = 33,2kg/m², escore Z > +3), estrias violáceas, PA 130x85mmHg. Hábitos inadequados (sedentarismo, alimentação ultraprocessada). Qual a abordagem inicial mais adequada?',
    options: [
      '(A) Orientar alimentação fracionada, aumento da ingestão de frutas, verduras e legumes; solicitar perfil lipídico e glicemia de jejum.',
      '(B) Iniciar jejum intermitente e solicitar gasometria venosa, cetonúria, perfil lipídico e glicemia de jejum.',
      '(C) Orientar produtos “diet” e “light” e solicitar hemograma, albumina e perfil lipídico.',
      '(D) Orientar restrição de glúten, lactose e gordura poliinsaturada; solicitar perfil lipídico e vitamina D.'
    ],
    correctAnswer: 0,
    explanation: "Adolescente com obesidade grave (IMC com escore Z acima de +3), pressão elevada para a idade e hábitos inadequados. A abordagem inicial recomendada pelo Ministério da Saúde é mudar o estilo de vida da família toda: alimentação baseada em alimentos in natura e minimamente processados, refeições regulares, mais frutas, verduras e legumes, menos ultraprocessados e mais atividade física.\n\nAo mesmo tempo, rastreiam-se as complicações metabólicas mais comuns: perfil lipídico e glicemia de jejum (e, conforme o caso, transaminases para doença hepática gordurosa). A pressão de 130x85 mmHg também precisa ser confirmada e acompanhada.",
    commentary: "Jejum intermitente (B): não é recomendado para crianças e adolescentes; e gasometria e cetonúria não fazem parte da investigação da obesidade.\n\nProdutos diet e light (C): costumam ser ultraprocessados e não ensinam uma alimentação saudável; hemograma e albumina não rastreiam as complicações da obesidade.\n\nRestrição de glúten, lactose e gorduras poli-insaturadas (D): sem indicação em quem não tem doença celíaca ou intolerância; as gorduras poli-insaturadas são, inclusive, saudáveis.",
    tip: "Obesidade infantil: mudança de hábitos da família + rastrear lipídios e glicose. Nada de dietas restritivas da moda.",
    reference: 'Brasil. Ministério da Saúde. Instrutivo para o cuidado da criança e do adolescente com sobrepeso e obesidade no âmbito da Atenção Primária à Saúde [recurso eletrônico] / Ministério da Saúde, Universidade do Estado do Rio de Janeiro. – Brasília: Ministério da Saúde, 2022. 201 p.: il. Tratado de Pediatria. Sociedade Brasileira de Pediatria. 5ª Edição, 2021.',
    tags: ['nutrologia', 'hebiatria']
  },
  {
    id: 'tp2024-46',
    module: 'Pediatria',
    text: 'Menino de 7 anos com febre e odinofagia há 6 dias. Usou Amoxicilina há 3 dias e evoluiu com exantema maculopapular pruriginoso. Apresenta hepatoesplenomegalia e linfonodopatia generalizada. Qual a hipótese e conduta?',
    image: '/images/tp2024-46.webp',
    options: [
      '(A) Infecção pelo Streptococcus pyogenes resistente à Amoxicilina. Prescrever Amoxicilina com clavulanato.',
      '(B) Infecção pelo Vírus Epstein-Barr. Prescrever repouso, hidratação e sintomáticos.',
      '(C) Infecção pelo Stafilococcus aureus. Realizar internação e prescrever Oxacilina.',
      '(D) Leucemia mieloide aguda. Encaminhar urgente para serviço com oncopediatria.'
    ],
    correctAnswer: 1,
    explanation: "Febre e dor de garganta prolongadas, linfonodos aumentados em várias regiões e hepatoesplenomegalia formam o quadro de mononucleose infecciosa pelo vírus Epstein-Barr. O detalhe que fecha o diagnóstico é o exantema maculopapular pruriginoso que surgiu depois da amoxicilina: é uma reação característica de quem tem mononucleose e recebe aminopenicilina, e não uma alergia verdadeira ao antibiótico.\n\nO tratamento é de suporte (repouso, hidratação e sintomáticos). Por causa da esplenomegalia, a criança deve evitar esportes de contato por algumas semanas, pelo risco de ruptura do baço.",
    commentary: "Streptococcus pyogenes resistente (A): o estreptococo não desenvolve resistência à amoxicilina, e a faringite estreptocócica não causa hepatoesplenomegalia nem linfonodos aumentados em todo o corpo.\n\nStaphylococcus aureus (C): não explica faringite com hepatoesplenomegalia e linfadenopatia generalizada, nem o exantema após amoxicilina.\n\nLeucemia (D): pode ter hepatoesplenomegalia e linfonodos, mas o conjunto faringite + exantema após amoxicilina aponta para mononucleose. Se houver citopenias ou blastos no hemograma, aí sim a investigação muda.",
    tip: "Faringite que \"piora\" com exantema após amoxicilina = mononucleose (Epstein-Barr).",
    reference: 'Tratado de Pediatria. Sociedade Brasileira de Pediatria. 5ª edição. Volume 1. 2022. Capítulo 5, página 4131, Vírus Epstein-Barr.',
    tags: ['infectologia', 'mononucleose']
  },
  {
    id: 'tp2024-47',
    module: 'Pediatria',
    text: 'Menino, 4 anos, com placas urticariformes pruriginosas há 2 horas por todo o corpo. Alimentação habitual, sem novos medicamentos. Qual a provável causa e conduta?',
    options: [
      '(A) Desconhecida, prescrever anti-histamínico de 2ª geração e encaminhar ao alergista.',
      '(B) Desconhecida, prescrever um anti-histamínico de 1ª geração.',
      '(C) Desconhecida, prescrever um anti-histamínico de 1ª geração e retirar corantes.',
      '(D) Viral, prescrever um anti-histamínico de 2ª geração por 7 dias e orientar a mãe.'
    ],
    correctAnswer: 3,
    explanation: "Placas urticariformes pruriginosas há poucas horas definem urticária aguda (menos de 6 semanas). Em crianças, a principal causa identificável são infecções virais leves, sobretudo das vias aéreas superiores — bem mais comuns que alimentos ou remédios. Em boa parte dos casos nenhum gatilho é encontrado.\n\nComo não houve alimento nem remédio novo, a causa viral é a mais provável. O tratamento é anti-histamínico de segunda geração (como cetirizina, loratadina ou desloratadina) por alguns dias, com orientação à família sobre sinais de alerta, como falta de ar e inchaço de lábios ou língua.",
    commentary: "Anti-histamínico de 1ª geração (B e C): causa sonolência e prejudica a atenção e o aprendizado; os de 2ª geração são a primeira escolha.\n\nRetirar corantes (C): não há alimento suspeito, e dietas de restrição sem indicação não ajudam.\n\nEncaminhar ao alergista (A): um episódio agudo, sem gatilho e sem sinais de gravidade, não precisa de especialista; o encaminhamento cabe à urticária crônica (mais de 6 semanas) ou a reações graves.",
    tip: "Urticária aguda na criança: pense em vírus e trate com anti-histamínico de 2ª geração.",
    reference: 'Alcântara CT, Raeder DFT, Campinhos FL, et al. Guia prático para urticária aguda. Arq Asma Alerg Imunol. 2022;6(2):214- 24. Zuberbier T, Latiff AHA, Abuzakouk M, Aquilina S, et al. The international EAACI/GA LEN/EuroGuiDerm/APAAACI guideline for the definition, classification, diagnosis, and management of urticaria. Allergy 2022 Mar;77(3):734-766. doi: 10.1111/all.15090. Epub 2021 Oct 2',
    tags: ['alergia e imunologia']
  },
  {
    id: 'tp2024-48',
    module: 'Pediatria',
    text: 'Menina de 4 anos com Artrite Idiopática Juvenil (AIJ) tipo oligoarticular e FAN (AAN) positivo 1/160. Qual a principal complicação a ser monitorada?',
    options: [
      '(A) Uveíte anterior aguda',
      '(B) Sarcoidose',
      '(C) Uveíte anterior crônica',
      '(D) Anquilose'
    ],
    correctAnswer: 2,
    explanation: "Na artrite idiopática juvenil oligoarticular, meninas pequenas com FAN positivo formam o grupo de maior risco de uveíte anterior crônica (iridociclite). Essa uveíte é silenciosa: não causa olho vermelho nem dor, e pode levar a catarata, glaucoma e perda visual se não for detectada.\n\nPor isso essas crianças fazem rastreio oftalmológico regular com lâmpada de fenda, a cada 3 meses no grupo de maior risco, mesmo sem sintomas.",
    commentary: "Uveíte anterior aguda (A): dolorosa, com olho vermelho e fotofobia; é típica da artrite relacionada à entesite, mais comum em meninos maiores com HLA-B27.\n\nSarcoidose (B): não é complicação da AIJ.\n\nAnquilose (D): fusão articular aparece em formas mais destrutivas, como a poliarticular com fator reumatoide positivo e a artrite relacionada à entesite (na coluna e sacroilíacas), não como principal risco da oligoarticular.",
    tip: "AIJ oligoarticular + menina pequena + FAN positivo = uveíte crônica silenciosa → lâmpada de fenda periódica.",
    reference: 'https://www.gov.br/conitec/ptbr/midias/protocolos/resumidos/PCDTResumidoAIJ.pdf Cassidy JT, Petty RE. Juvenile rheumatoid arthritis. In: Cassidy JT, Petty RE, editors. Textbook of pediatric rheumatology. 8th ed. Philadelphia: WB Saunders; 2021. p. 218-321.',
    tags: ['reumatologia']
  },
  {
    id: 'tp2024-49',
    module: 'Pediatria',
    text: 'Recém-nascido masculino com hidronefrose bilateral constatada no pré-natal (bexiga distendida). US com 48h de vida confirma hidronefrose e dilatação de ureteres. Causa mais provável?',
    options: [
      '(A) Válvula de uretra posterior',
      '(B) Estenose de junção uretero-piélica bilateral',
      '(C) Rins multicísticos displásicos',
      '(D) Defeito da junção uretero-vesical bilateral'
    ],
    correctAnswer: 0,
    explanation: "Hidronefrose bilateral com ureteres dilatados e bexiga distendida em um menino indica obstrução abaixo da bexiga, na uretra. A causa mais comum de obstrução uretral congênita em meninos é a válvula de uretra posterior.\n\nO diagnóstico é confirmado pela uretrocistografia miccional. Depois do nascimento, o primeiro passo é descomprimir a bexiga com sonda; o tratamento definitivo é a ablação endoscópica das válvulas. O acompanhamento da função renal é essencial.",
    commentary: "Estenose de junção ureteropiélica (B): dilata só a pelve renal, com ureter e bexiga normais, e costuma ser unilateral.\n\nRim multicístico displásico (C): cistos que não se comunicam em um rim sem função, geralmente unilateral, sem dilatação do ureter nem da bexiga.\n\nDefeito da junção ureterovesical (D): o megaureter obstrutivo dilata o ureter e a pelve, mas a bexiga é normal; não explica a bexiga distendida.",
    tip: "Menino + hidronefrose bilateral + ureteres dilatados + bexiga distendida = válvula de uretra posterior.",
    reference: 'Cascio, S., Coyle, D., Nappo, S., Caione, P. (2023). Posterior Urethral Valves. In: Puri, P., Höllwarth, M.E. (eds) Pediatric Surgery. Springer, Cham. https://doi.org/10.1007/978-3-030- 81488-5_94',
    tags: ['nefrologia', 'urologia']
  },
  {
    id: 'tp2024-50',
    module: 'Pediatria',
    text: 'Quais as principais modificações no Calendário Vacinal de 2024 do Ministério da Saúde?',
    options: [
      '(A) Inclusão da vacina COVID-19 em duas doses, aos 6 e 9 meses.',
      '(B) Febre amarela obrigatória aos 5 anos para todas as crianças.',
      '(C) Inclusão da pneumo 23 para todas as crianças aos 5 anos.',
      '(D) COVID-19 em 3 doses (6, 7 e 9 meses) e vacina contra HPV em dose única.'
    ],
    correctAnswer: 3,
    explanation: "Em 2024, o calendário de vacinação infantil do Ministério da Saúde passou a incluir a vacina contra a COVID-19 em três doses, aos 6, 7 e 9 meses de idade (quem não completou pode vacinar até antes dos 5 anos). No mesmo ano, a vacina contra o HPV para crianças e adolescentes passou a ser aplicada em dose única.",
    commentary: "Duas doses aos 6 e 9 meses (A): o esquema adotado foi de três doses (6, 7 e 9 meses).\n\nFebre amarela aos 5 anos para todos (B): o esquema é uma dose aos 9 meses e reforço aos 4 anos; a dose aos 5 anos é só para quem não recebeu as anteriores.\n\nPneumocócica 23-valente aos 5 anos para todos (C): no calendário de rotina, ela é indicada à população indígena e a grupos com condições especiais, não a todas as crianças.",
    tip: "Calendário 2024: COVID-19 aos 6, 7 e 9 meses + HPV em dose única.",
    reference: 'https://www.gov.br/saude/pt-br/vacinacao/calendario',
    tags: ['imunização']
  },
  {
    id: 'tp2024-51',
    module: 'Pediatria',
    text: 'Menino, 4 anos, queda de 1,70m. Apresenta equimose retroauricular (sinal de Battle) e hemotímpano. Consciente (GCS 15). Qual a conduta?',
    options: [
      '(A) Observação hospitalar por 24 horas.',
      '(B) Realizar tomografia de crânio em 24 horas.',
      '(C) Realizar tomografia de crânio imediatamente.',
      '(D) Avaliação por cirurgião pediátrico para abdome.'
    ],
    correctAnswer: 2,
    explanation: 'Sinais de fratura de base de crânio (Battle, hemotímpano) ou queda de altura significativa em crianças exigem TC imediata.',
    commentary: 'Realizar tomografia de crânio imediatamente, pela possibilidade de fratura de base de crânio devido sinal de battle e hemotímpano, assim como queda maior de 1,5 metro.',
    reference: 'Bressan S, Eapen N, Phillips N, Gilhotra Y, Kochar A, Dalton S, Cheek JA, Furyk J, Neutze J, Williams A, Hearps S, Donath S, Oakley E, Singh S, Dalziel SR, Borland ML, Babl FE; Paediatric Research in Emergency Departments International Collaborative (PREDICT). PECARN algorithms for minor head trauma: Risk stratification estimates from a prospective PREDICT cohort study. Acad Emerg Med. 2021 Oct;28(10):1124-1133. doi: 10.1111/acem.14308. Epub 2021 Jul 8. PMID: 34236116.',
    tags: ['emergência', 'trauma']
  },
  {
    id: 'tp2024-52',
    module: 'Pediatria',
    text: 'Adolescente, 13 anos, vítima de abuso sexual há 6 horas. Qual a conduta prioritária segundo o Ministério da Saúde?',
    options: [
      '(A) Acolhimento, coleta de material, profilaxia das ISTs e da gravidez, e notificação compulsória.',
      '(B) Encaminhamento obrigatório ao IML antes de qualquer conduta.',
      '(C) Encaminhamento para delegacia para BO e posterior retorno.',
      '(D) Acolhimento e notificação apenas com consentimento do responsável.'
    ],
    correctAnswer: 0,
    explanation: "Diante de violência sexual, o atendimento de saúde é urgente e não depende de boletim de ocorrência nem de exame no IML. A adolescente deve ser acolhida e receber, o quanto antes, as profilaxias: anticoncepção de emergência, profilaxia pós-exposição ao HIV (até 72 horas), profilaxia das ISTs bacterianas e vacina contra hepatite B quando indicada. Quanto mais cedo, maior a eficácia.\n\nNo mesmo atendimento coletam-se os vestígios de interesse forense, que se perdem com o tempo. A notificação da violência é compulsória e, por ser menor de idade, o Conselho Tutelar deve ser comunicado.",
    commentary: "Ir antes ao IML (B) ou à delegacia (C): atrasa as profilaxias, que perdem eficácia com o tempo. O registro policial é direito da vítima, mas não condição para o atendimento de saúde.\n\nNotificar só com consentimento do responsável (D): a notificação é obrigatória para o profissional de saúde e não depende de autorização da vítima nem da família.",
    tip: "Violência sexual: acolher + profilaxias o quanto antes (até 72 h) + coleta de vestígios + notificação. Sem exigir BO.",
    reference: 'Ministério da Saúde. Secretaria de Vigilância em Saúde. Notificação de violências interpessoais e autoprovocadas [recurso eletrônico]. Brasília: Ministério da Saúde, 2017. Ministério da Saúde. Ministério da Justiça. Secretaria de Políticas para as Mulheres. Norma Técnica Atenção Humanizadas às Pessoas em Situação de Violência Sexual com Registro de Informações e Coleta de Vestígios. 1ª Ed.Brasília-DF, 2015. https://bvsms.saude.gov.br/bvs/publicacoes/atencao_humaniz ada_pessoas_violencia_sexual_norma_tecnica.pdf Brasil. Ministério da Saúde. Programa Nacional de DST/AIDS. Protocolo Clínico e Diretrizes Terapêuticas para Manejo da Infecção pelo HIV em Crianças e Adolescentes- Brasília, 2014. Ministério da Saúde. Portaria 1271 de 06 de junho de 2014. Define a Lista Nacional de Notificação Compulsória de doenças, agravos e eventos de saúde pública nos serviços de saúde públicos e privados em todo o território nacional, nos termos do anexo, e dá outras providências. Disponível em: http://dtr2004.saude.gov.br/sinanweb/novo/Documentos/Portar ia_1271_06jun2014.pdf. Acesso em 04 nov.2014.',
    tags: ['heabiaria', 'violência']
  },
  {
    id: 'tp2024-53',
    module: 'Pediatria',
    text: 'RN 37 semanas (New Ballard). Peso 3920g. Mãe com DMG (dieta). Bolsa rota há 28 horas. Terceira gestação (2 cesáreas prévias). Classificação do RN?',
    image: '/images/tp2024-53.webp',
    options: [
      '(A) Pré-termo, GIG, sem risco infeccioso.',
      '(B) Termo, GIG, com risco infeccioso.',
      '(C) Pré-termo, AIG, sem risco infeccioso.',
      '(D) Termo, AIG, com risco infeccioso.'
    ],
    correctAnswer: 1,
    explanation: 'RN com 37 semanas é termo. Peso > p90 é GIG. Ruptura de membranas > 18h é fator de risco infeccioso.',
    commentary: 'Neste caso o recém-nascido apresenta a idade gestacional de 37 semanas pelo New Ballard, escore que avalia as características físicas e neurológicas do neonato determinando sua Idade Gestacional. Recém-nascido com idade gestacional de 37 semanas à 41 semanas e 6dias são classificados como a termo. Quanto ao peso de nascimento e idade gestacional, temos um bebê de 37 semanas com peso de 3920 gramas, ficando acima do percentil 90% da curva de adequação peso/idade gestacional do gráfico, o que é considerado um recém-nascido grande para idade gestacional (GIG). O risco infeccioso para este bebê se faz presente pelo tempo de rotura da bolsa com líquido amniótico por mais de 18 horas. E por fim, a Cesárea é indicada por Iteratividade, ou seja, por já ter sido submetida à duas ou mais cesáreas anteriores.',
    reference: 'Brasil. Ministério da Saúde. Secretaria de Atenção à Saúde. Departamento de Ações Programáticas Estratégicas. Área Técnica de Saúde da Mulher. Pré-natal e Puerpério: atenção qualificada e humanizada – manual técnico. Brasília, 2005.',
    tags: ['neonatologia']
  },
  {
    id: 'tp2024-54',
    module: 'Pediatria',
    text: 'Lactente, 11 meses, uso de leite integral e ultraprocessados. Hb 7,8, VCM baixo, RDW 16,7 (aumentado). Sem outras alterações. Qual a conduta?',
    options: [
      '(A) Sulfato ferroso via oral',
      '(B) Transfusão de sangue',
      '(C) Ferro dextrano intramuscular',
      '(D) Cereal enriquecido com ferro'
    ],
    correctAnswer: 0,
    explanation: 'Anemia microcítica e hipocrômica com RDW aumentado sugere ferropenia, sendo o sulfato ferroso oral o tratamento de escolha.',
    commentary: 'A resposta à prova terapêutica com sulfato ferroso via oral é um método apropriado e de baixo custo no diagnóstico da anemia por deficiência de ferro, desde que exista hipocromia, microcitose e anisocitose (RDW, a medida da anisocitose, aumentado). Uma reticulocitose imediata e aumento da hemoglobina e hematócrito em 1 mês, seguem a administração de uma preparação oral de sultado terroso. Ferro dextrano intramuscular deve ser reservado para situações especiais como ressecções altas intestinais, impossibilidade de via enteral uma vez que este tratamento é caro, doloroso e não mais eficaz que o ferro oral. O ferro intramuscular pode saturar de maneira inadequada a transferrina, uma vez que não há o bloco de mucosa e predispor a quadros infecciosos. Modificações dietéticas, como adequar a ingesta de leite à faixa etária, incluir alimentos com alta biodisponibilidade de ferro como o ferro heme das carnes, aves, peixes e vísceras além de promover a ingestão de alimentos fortificados com ferro são adequadas, porém de longo prazo, insuficientes para repor os depósitos de ferro. O início gradual da anemia por deficiência de ferro permite que uma criança se adapte a níveis surpreendentemente baixos de concentrações de hemoglobina. A transfusão não é indicada, a menos que a criança se apresente sintomática, hemodinamicamente instável ou com o estado geral comprometido.',
    reference: 'Hay et al, pp 837-838, Kliegman et al, pp 2014-2017, McMillan et al, pp 1692-1694, Rudolph et al, pp 1525-1528.',
    tags: ['hematologia', 'nutrição']
  },
  {
    id: 'tp2024-55',
    module: 'Pediatria',
    text: 'Criança de 4 anos com gastroenterite sanguinolenta, seguida de palidez, oligúria e edema. Hb 8, plaquetas 72.000, hematúria e proteinúria. Qual o diagnóstico?',
    options: [
      '(A) Púrpura Henoch-Schönlein',
      '(B) Divertículo de Meckel',
      '(C) Síndrome Hemolítico Urêmica',
      '(D) Nefropatia por IgA'
    ],
    correctAnswer: 2,
    explanation: 'A tríade de anemia hemolítica microangiopática, trombocitopenia e insuficiência renal aguda após diarreia sanguinolenta define SHU.',
    commentary: 'A Síndrome Hemolítico-urêmica é mais comum em crianças menores do que 4 anos e é caracterizada por anemia hemolítica microangiopática, trombocitopenia por aumento de utilização de plaquetas e insuficiência renal, por lesão endotelial vascular e depósito local de fibrina. As alterações isquêmicas resultam em necrose cortical renal e dano a outros órgãos, tais como, colón, fígado, coração, cérebro e adrenal. Uma acentuada redução na função renal leva a oligúria/anuria. Sangramento gastrointestinal, ascite e sintomas de sistema nervoso central tais como, sonolência, convulsões e coma podem ocorrer. Os achados laboratoriais incluem, baixos níveis de hemoglobina, plaquetopenia, e aumento nos níveis de ureia e creatinina, hipoalbuminemia e evidencias de hemólise do esfregaço periférico. O sedimento urinário mostra hematúria e proteinúria. A infecção por E coli 0157:H7 produtora de verotoxicina tem sido implicada como causa de surtos associados com ingestão de alimentos contaminados como carne mal cozida, leite de vaca e vegetais. O teste de Coombs não é positivo neste tipo de anemia hemolítica. A Purpura de Henoch-Schönlein é uma vasculite que se apresenta com rash petequial em membros inferiores (mas a contagem de plaquetas é normal); e não é usualmente associada com febre, mas sim com sangramento microscópico nas fezes e urina e dor abdominal. A nefropatia por IgA pode causar hematúria, mas nenhum dos outros achados descritos é encontrado na nefropatia por IgA.',
    reference: 'Hay et al, pp 694-695, Kliegman et al, pp 2181-2182, McMillan et al, pp 2600-2602, Rudolph et al, pp 1696-1698.',
    tags: ['nefrologia', 'gastroenterologia']
  },
  {
    id: 'tp2024-56',
    module: 'Pediatria',
    text: 'Sobre as situações de contraindicação absoluta ao aleitamento materno, assinale a correta:',
    options: [
      '(A) Mãe com COVID-19 não deve amamentar.',
      '(B) Herpes simples na mama contraindica amamentação em ambas as mamas.',
      '(C) Mãe HIV-positiva com carga viral indetectável pode amamentar.',
      '(D) O aleitamento materno por mães com HTLV1 e HTLV2 é contraindicado.'
    ],
    correctAnswer: 3,
    explanation: 'No Brasil, HIV e HTLV são contraindicações absolutas e permanentes ao aleitamento materno.',
    commentary: 'Em relação à covid-19, FEBRASGO, SBP e Ministério da Saúde recomendam que a amamentação seja mantida, desde que a mãe deseje amamentar e tenha condições clínicas para fazê-lo. Os seguintes cuidados devem ser tomados para tal: • Lavar as mãos com água e sabão antes e após amamentar por, pelo menos, 20 segundos; usar desinfetante para as mãos com álcool a 60%, no mínimo, se não houver água e sabão disponíveis; • Usar máscara facial para cobrir a boca e o nariz durante a amamentação; • Evitar que o RN toque o rosto da mãe, especialmente boca, nariz, olhos e cabelos; • Após a mamada, os cuidados com o RN (banhos, sono, troca de fraldas) devem ser realizados por outra pessoa na casa que não tenha sintomas ou que não seja também um caso confirmado de COVID-19. Em caso de troca de fraldas, recomenda-se o uso de luvas cirúrgicas ou de procedimento descartáveis; Sugere-se respeitar a distância de 2 metros entre o leito da mãe e o berço do RN; • Em ambiente hospitalar, visando à proteção do RN, podem ser consideradas algumas alternativas, como utilização de incubadoras, ao invés de berços, ou barreiras físicas entre a mãe e o RN, como cortinas. Na infecção herpética quando há vesículas localizado na pele da mama contraindica-se a amamentação nesta mama, estando liberada aquela sem lesões. O HIV é uma contraindicação absoluta à amamentação. O risco de transmissão vertical pelo leite materno é de 14-22%. Independentemente da tarv, carga viral ou profilaxia anteparto, a amamentação é sempre contraindicada.',
    reference: 'Aleitamento Materno em tempos de COVID-19 – recomendações na maternidade e após a alta – Sociedade Brasileira de Pediatria (22/05/2020) – Disponível em <https://www.sbp.com.br/index.php?eID=cw_filedownload&file=717> Yamamoto AY, Mussi-Pinhata MM. Herpes neonatal: diagnóstico e tratamento. In: Sociedade Brasileira de Pediatria; Procianoy RS, Leone CR, organizadores. PRORN Programa de Atualização em Neonatologia: Ciclo 14. Porto Alegre: Artmed Panamericana; 2017. P. 87–108. (Sistema de Educação Continuada a Distância, v. 2).',
    tags: ['saúde pública', 'nutrição']
  },
  {
    id: 'tp2024-57',
    module: 'Pediatria',
    text: 'RN, 24 dias, triagem neonatal (teste do pezinho) com TSH 257mUI/L. Icterícia zona II. Qual a conduta?',
    options: [
      '(A) Solicitar TSH e T4 livre séricos para confirmar antes de tratar.',
      '(B) Solicitar TSH e T4l séricos para confirmar e iniciar tratamento imediatamente.',
      '(C) Solicitar US tireoide apenas.',
      '(D) Iniciar tratamento e solicitar US tireoide para investigação.'
    ],
    correctAnswer: 1,
    explanation: 'Níveis muito elevados de TSH no teste do pezinho (> 40 ou 100 dependendo do protocolo) exigem início imediato do tratamento após coleta do confirmatório.',
    commentary: 'A maioria das crianças que tem o diagnóstico precoce de Hipotiroidismo congênito estabelecido não deverá apresentar sintomatologia clínica, desde que a terapia de reposição hormonal com a administração oral de levotiroxina, seja iniciada no tempo oportuno. O momento ideal para o diagnóstico do Hipotireoidismo Congênito é, sem dúvida, o período neonatal, pois é sabido que a partir da segunda semana de vida a deficiência de hormônios tireóideos poderá causar alguma lesão neurológica levando ao retardo mental grave. Neste caso, a manifestação clínica que pode estar associada ao hipotiroidismo congênito é a icterícia prolongada. Após o resultado positivo inicial no Programa de Triagem Neonatal, deve ser realizada a dosagem do T4 (total e livre) e do TSH em amostra de sangue venoso, para que haja a efetiva confirmação diagnóstica. Seguindo essa estratégia, a média de detecção dos casos suspeitos estará ao redor de 90%. Os 10% restantes não são detectáveis por TSH até a idade de 2 a 6 semanas. Cabe ressaltar que, estes últimos, serão menos gravemente afetados.',
    reference: 'Brasil MdS, Saúde. SdAà, Temática. DdAEe. Triagem Neonatal biológica: manual técnico. http://bvsms.saude.gov.br/bvs/publicacoes/triagemneonatalbiol ogicamanualtécnico.pdf: Brasília: Ministério da Saúde.; 2016.',
    tags: ['endocrinologia', 'neonatologia']
  },
  {
    id: 'tp2024-58',
    module: 'Pediatria',
    text: 'RN com asfixia perinatal grave (Apgar 3) e desconforto respiratório. Qual consequência hemodinâmica seria esperada?',
    options: [
      '(A) Trombocitose',
      '(B) Microcefalia',
      '(C) Catarata',
      '(D) Hipertensão pulmonar persistente'
    ],
    correctAnswer: 3,
    explanation: 'A asfixia neonatal causa vasoconstrição pulmonar refletiva à hipóxia, levando à hipertensão pulmonar persistente neonatal (HPPN).',
    commentary: 'O boletim de Apgar baixo, a presença de líquido amniótico espesso e o desconforto respiratório, sugerem que asfixia perinatal tenha ocorrido. Durante o período de asfixia, ocorre hipoxemia, acidose e perfusão tecidual diminuída que leva a disfunção de múltiplos órgãos (cérebro, coração, rins, fígado e pulmões). As anormalidades clínicas resultantes incluem: edema cerebral, irritabilidade, convulsões, cardiomegalia, insuficiência cardíaca, insuficiência renal, disfunção hepática e Síndrome do Desconforto Respiratório (SDR). Existe aumento de pressão na artéria pulmonar e simultaneamente a pressão arterial sistêmica começa a cair, resultando em shunt persistente da direita para a esquerda através do ducto arterioso patente e foramen oval.',
    reference: 'Hay et al, pp 551-552, Kliegman et al, p 1727, McMillan et al, pp 315-319.',
    tags: ['neonatologia']
  },
  {
    id: 'tp2024-59',
    module: 'Pediatria',
    text: 'RN 38 semanas, cesárea eletiva, 3940g. Taquipneia (88 irpm) e desconforto leve com 3 horas de vida. RX: congestão hilar, cisurite e hiperinsuflação. Diagnóstico?',
    options: [
      '(A) Taquipneia transitória do recém-nascido (TTRN).',
      '(B) Pneumonia pelo Streptococcus agalactie.',
      '(C) Síndrome do desconforto respiratório (SDR).',
      '(D) Hipertensão pulmonar persistente neonatal (HPPN).'
    ],
    correctAnswer: 0,
    explanation: 'A TTRN (síndrome do pulmão úmido) é comum em cesáreas eletivas devido ao retardo na reabsorção do líquido pulmonar.',
    commentary: 'A causa da TTRN é a presença de líquido nos pulmões do recém-nascido, enquanto o trabalho de parto, sobretudo as contrações, favorece a reabsorção do líquido dos pulmões, a cesariana sem o trabalho de parto aumenta o risco de taquipnéia. No RX de tórax evidencia-se: Aumento da trama peri-hilar; Cardiomegalia leve a moderada; Densidades algodoadas e grosseiras decorrentes de alvéolos cheios de líquido; Derrame pleural, líquido na fissura menor e alargamento das fissuras interlobares;Hiperinsuflação; Rebaixamento do diafragma.',
    reference: 'LOPES, M. E. S.; ONUKI DE MENDONÇA, B. T.; GUIMARÃES, P. J. R.; ALMEIDA, R. B. de A. de; OLIVEIRA, D. L. C. de; OLIVEIRA, S. G. de. FISIOPATOLOGIA DA TAQUIPNEIA TRANSITÓRIA DO RECÉM-NASCIDO',
    tags: ['neonatologia']
  },
  {
    id: 'tp2024-60',
    module: 'Pediatria',
    text: 'Sobre a recepção do RN na sala de parto e as diretrizes de reanimação, assinale a correta:',
    options: [
      '(A) Clampeamento do cordão deve ser sempre antes de 60 segundos.',
      '(B) Apgar é usado para indicar o início da reanimação.',
      '(C) A primeira ação da equipe é realizar o “briefing” antes do nascimento.',
      '(D) Todos os RNs devem ser rotineiramente aspirados nas vias aéreas.'
    ],
    correctAnswer: 2,
    explanation: 'O briefing é essencial para coordenar funções e preparar o material antes da recepção do RN.',
    commentary: 'A primeira ação da equipe que irá cuidar do RN é realizar o “briefing”, que inclui anamnese materna, preparo do ambiente e do material para uso imediato na sala de parto e divisão das funções de cada membro da equipe, deixando claro a quem caberá o papel de liderança dos procedimentos de reanimação. O briefing consiste em uma rápida reunião entre os membros da equipe para planejar o atendimento neonatal, antes do nascimento. A divisão de tarefas e responsabilidades de cada membro da equipe, com a definição de quem será o líder antes do nascimento, permite a atuação coordenada e a comunicação efetiva em alça fechada, o que confere um atendimento com qualidade e segurança ao RN.',
    reference: 'Sociedade Brasileira de Pediatria. Programa de Reanimação Neonatal [homepage on the Internet]. Recomendações para assistência ao recém-nascido na sala de parto de mãe com COVID-19 suspeita ou confirmada – Atualização 2. Mai 2020 [Cited 2022 Mar 17]. Available from: www.sbp. com.br/reanimacao.',
    tags: ['neonatologia', 'reanimação']
  },
  {
    id: 'tp2023-41',
    module: 'Pediatria',
    text: 'Paciente de 7 anos, feminina, em consulta na Unidade Básica de Saúde, foi encaminhada à Unidade de Pronto Atendimento 24h (pediatria) para investigação de febre há 3 semanas, acompanhada de dor articular em joelhos e punhos, apresentando febre com picos vespertinos. Os sintomas estão acompanhados de exantema macular, que desaparece junto com a febre. Relata perda de 1kg de peso no período, sem outros sintomas. Exame físico: bom estado geral, hidratada, corada, anictérica e acianótica. Aparelho cardiovascular e respiratório sem alterações. Joelho direito com discreto edema, sem outros sinais flogísticos. A principal hipótese diagnóstica é:',
    options: [
      '(A) Artrite séptica de joelho',
      '(B) Leucemia linfoblástica aguda',
      '(C) Febre reumática',
      '(D) Artrite idiopática juvenil'
    ],
    correctAnswer: 3,
    explanation: 'Febre prolongada, dor articular e exantema evanescente (que some com a febre) são clássicos da forma sistêmica da Artrite Idiopática Juvenil.',
    commentary: 'A artrite idiopática juvenil é uma doença comum em pacientes após 5 anos de idade, com prevalencia no sexo feminino. acompanhado de febre vespertina ou noturna, com exantema evanescente e padrão oligoarticular na maioria dos casos. A leucemia linfobástica aguda a perda de peso é mais acentuada, além de presença de sangramento e petéquias. A febre reumática tem antecedente de infecção streptococcica. A artrite séptica de joelho apresenta-se com sinais flogísticos mais acentuados.',
    reference: 'Sheila Knupp Feitosa de Oliveira & Eneida Correia Lima Azevedo. Reumatologia Pediátrica. 2ª edição. Editora Revinter',
    tags: ['reumatologia']
  },
  {
    id: 'tp2023-42',
    module: 'Pediatria',
    text: 'Em exame hematológico de rotina de uma criança de um ano de idade, encontrou-se anemia discreta, hipocrômica e RDW (medida de anisocitose) normal. No seguimento longitudinal, posteriormente, observou-se aumento na concentração de hemoglobina A2. É provável que esta criança tenha:',
    options: [
      '(A) Anemia da doença crônica',
      '(B) ß talassemia heterozigota',
      '(C) Anemia falciforme',
      '(D) Anemia ferropriva'
    ],
    correctAnswer: 1,
    explanation: 'Anemia microcítica com RDW normal e aumento de HbA2 é característica do traço talassêmico (beta-talassemia minor).',
    commentary: 'A concentração de hemoglobina A2 aumenta no traço talassêmico ou ß talassemia minor. Os pacientes tem um único gene anormal para a cadeia beta da hemoglobina e habitualmente não tem problemas a não ser uma discreta anemia microcítica. A talassemia homozigota evoluiria de forma mais tempestuosa com anemia severa, hepatoesplenomegalia , necessidade de múltiplas transfusões, presença de RDW (a medida da anisocitose) normal, com microcitia, alerta para este diagnóstico, um vez que ele está aumentado, devido à anisocitose, na anemia ferropriva. Na anemia ferropriva severa a hemoglobina A2 está diminuída e na anemia ferropriva leve ou moderada a hemoglobina A2 está normal.O nível de hemoglobina A2 também está normal na anemia falciforme e na anemia da doença crônica.',
    reference: 'Hay et al pp, 844-845; Kliegman et al pp, 2033-2037; Mc Millan et al pp, 1699-1700; Rudolph et al, pp 1536-1538.',
    tags: ['hematologia']
  },
  {
    id: 'tp2023-43',
    module: 'Pediatria',
    text: 'Uma menina de 4 anos, com antecedentes de três pielonefrites, apresenta, no momento, uma pressão arterial de 135x90mmHg. Qual dos seguintes sinais ou sintomas seria mais provável que ela apresentasse?',
    options: [
      '(A) Hiporreflexia',
      '(B) Hipertrofia de ventrículo direito',
      '(C) Cefaleia',
      '(D) Aumento do débito urinário'
    ],
    correctAnswer: 2,
    explanation: 'A hipertensão arterial grave em crianças pode se manifestar com cefaleia, zumbido e distúrbios visuais.',
    commentary: 'É obrigatória a aferição da pressão arterial anualmente em crianças maiores do que 3 anos e adolescentes e naquelas com idade inferior a esta, em todas as consultas que apresentarem algumas das seguintes condições: prematuridade, baixo peso ao nascer, cardiopatias congênitas, diabetes, obesidade, doença renal, doença falciforme, transplantados, coarctação da aorta, em uso de medicamentos para hipertensão arterial. A hipertensão arterial na infância e adolescência, é definida como valores de pressão arterial sistólica e/ou diastólica iguais ou superiores ao percentil 95 para gênero, idade e percentil da altura, aferidas em três ou mais ocasiões distintas. A maioria das vezes é assintomática, porém com sintomas ou grave (estadio 2), como neste caso, deve ser referenciada, imediatamente para tratamento. Os sintomas ou sinais podem incluir cefaleia, zumbido, distúrbios visuais ou despertar noturno. A hipertrofia de ventrículo esquerdo constitui a “lesão de órgão alvo” detectada por ecocardiograma, cuja pesquisa é obrigatória nos estadios 1 e 2 da hipertensão arterial sistêmica na infância, não se constituindo sinal ou sintoma.',
    reference: 'Kliegman et al, pp 2223-2227. National High Blood Pressure Education Program Working Group on High Blood Pressure in Children and Adolescents. Pediatrics. 1996; 98;649-658. The Fourth Report on the Diagnosis, Evaluation, and Treatment of the High Blood Pressure in Children and Adolescents. Pediatrics, 2004;114;555-576. Flynn JT et al. Pediatrics. 2017 Sep;140(3).',
    tags: ['nefrologia', 'cardiologia']
  },
  {
    id: 'tp2023-44',
    module: 'Pediatria',
    text: 'Os pais de um menino de 14 anos de idade estão preocupados com seu crescimento e o atraso no aparecimento de caracteres sexuais secundários. Antecedentes pessoais: pré-natal sem intercorrências, nascido a termo, peso ao nascimento de 3kg e comprimento de 50cm. Ele é mais baixo que seus colegas da mesma idade. O exame físico não apresenta alterações e com estadiamento puberal P2G2; sua curva de crescimento demonstra a estatura inicialmente entre z escore -2 e z escore -1 e atualmente em z escore -1. Qual seria a conduta mais apropriada para este caso?',
    options: [
      '(A) Esclarecer aos pais do adolescente que estes achados são normais.',
      '(B) Mensuração das gonadotrofinas hipofisárias.',
      '(C) Obter uma tomografia computadorizada (CT) de hipófise.',
      '(D) Biópsia de testículos.'
    ],
    correctAnswer: 0,
    explanation: 'O estágio puberal P2G2 aos 14 anos indica que a puberdade já se iniciou, sendo um achado normal de maturação lenta.',
    commentary: 'O conhecimento da estatura dos pais, de seu padrão de crescimento e maturação sexual seriam muito úteis, uma vez que estes padrões de maturação frequentemente são familiares. Chamamos de “atraso puberal”, no gênero masculino, quando os caracteres sexuais secundários aparecem depois dos 14 anos, o que também não ocorre neste caso, pois o adolescente é Tanner G2P2, ou seja já tem crescimento da bolsa escrotal e do testículo mas não do pênis, com pelos longos e macios e ligeiramente pigmentados na base do pênis. Uma criança com baixa estatura e atraso puberal terá seu crescimento em estatura abaixo do recomendado para sua própria idade, crescendo em curva paralela a esta, o que não ocorre neste caso. Adolescentes com problemas orgânicos de crescimento, apresentam um padrão de crescimento em estatura não seguem determinado percentil ou z escore desviando-se progressivamente destes. É importante assegurar aos familiares que o desenvolvimento sexual normal irá ocorrer e que atingirá, na idade adulta, se não ocorreram agravos nutricionais graves no período pós-natal, uma média da estatura de ambos os pais. Portanto não se trata de atraso puberal, e a dosagem de gonadotrofinas hipofisárias também é indicada.',
    reference: 'www. sbp.com.br. Hay et al, p 938-964. Kliegman et al, p 2297. Mc Millan et al, pp 2085-2090.',
    tags: ['endocrinologia', 'hebiatria']
  },
  {
    id: 'tp2023-45',
    module: 'Pediatria',
    text: 'Lactente com 7 meses, vive em um assentamento junto com os pais e 2 irmãos de 4 e 6 anos. Alimenta-se com leite materno e alimentação complementar iniciados há 20 dias, após orientação recebida em consulta com o médico de família. Há 2 dias iniciou quadro de diarreia com evacuações líquidas, sem sangue, 6 a 7 vezes ao dia, febre não aferida. Está um pouco mais chorosa e irritada que o habitual. Em consulta no pronto atendimento, apresenta: olhos fundos, língua e boca secas, sinal da prega de 2 segundos, perfusão periférica de 3 segundos, frequência cardíaca de 135 batimentos por minuto, frequência respiratória de 28 incursões por minuto, temperatura de 37,5ºC. Qual a melhor conduta a ser seguida nesse caso?',
    options: [
      '(A) Realizar hidratação venosa com ringer lactato 30mL/kg em 1 hora e 70mL/kg em 5 horas, e alta para casa com orientação dos sinais de alerta.',
      '(B) Prescrever Terapia de Reidratação Oral (TRO) para uso domiciliar e orientar para retorno imediato em caso de sinais de alerta presentes.',
      '(C) Encaminhar à sala de emergência, coletar gasometria venosa e eletrólitos, realizar expansão volêmica com solução cristaloide 20mL/kg até completar hidratação e manter em observação hospitalar.',
      '(D) Prescrever Terapia de Reidratação Oral (TRO) na própria Unidade de Saúde, mantendo o leite materno durante o procedimento e alta quando hidratada, com orientação dos sinais de alerta.'
    ],
    correctAnswer: 3,
    explanation: 'Paciente com desidratação clínica (olhos fundos, boca seca, sinal da prega) deve receber TRO na unidade de saúde até reidratação.',
    commentary: 'Trata-se de um quadro de diarréia aguda aquosa, de provável etiologia viral, com desidratação de algum grau, portanto sem instabilidade hemodinâmica. Nessa situação, a indicação é de terapia de reidratação oral que deve ser realizada no próprio local de atendimento. A hidratação endovenosa é contraindicada por não haver complicações que impeçam a administração de soro de reidratação oral.',
    reference: 'HTTPS://BVSMS.SAUDE.GOV.BR/BVS/CARTAZES/MANEJO_PACIENTE_DIARREIA_CARTAZ.PDF',
    tags: ['gastroenterologia']
  },
  {
    id: 'tp2023-46',
    module: 'Pediatria',
    text: 'Menino de 6 anos sofreu acidente automobilístico. A criança foi socorrida pelo SAMU e deu entrada em uma unidade de pronto atendimento com fratura exposta de tíbia direita, com sangramento. Ao exame físico de entrada apresentava: FC 187bpm; FR 29ipm; PA 70x30mmHg; perfusão periférica de 5 segundos; T 35ºC. Ausculta pulmonar e cardíaca normais, abdome sem alterações. Ao exame neurológico, apresentava: abertura ocular ao estímulo pressórico, sem resposta verbal aos chamados ou aos estímulos pressóricos e tentava retirar a mão durante a punção venosa (Escala de coma de Glasgow = 8). Exames laboratoriais: Hb 7,3g/dL (VN 11,5 - 13); dextro 210mg% (VN 70 - 100); sódio 122mEq/L (VN 135 - 145). Quais as condutas a serem adotadas até a criança ser transferida para um serviço de referência para trauma?',
    options: [
      '(A) Intubação orotraqueal ou uso de máscara laríngea, expansão volêmica com cristaloide, manutenção do paciente em normotermia, correção de hiponatremia.',
      '(B) Acoplamento de máscara não reinalante, correção dos níveis de hemoglobina quando possível, insulina regular para correção da hiperglicemia.',
      '(C) Intubação orotraqueal ou uso de máscara laríngea, correção dos níveis de hemoglobina quando possível, manutenção do paciente em hipotermia.',
      '(D) Acoplamento de máscara não reinalante, correção dos níveis de hemoglobina quando possível, manutenção do paciente em normotermia, insulina regular para correção da hiperglicemia.'
    ],
    correctAnswer: 0,
    explanation: 'GCS <= 8 exige via aérea definitiva; o choque hipovolêmico/neurogênico exige expansão volêmica e controle térmico/eletrolítico.',
    commentary: 'O atendimento inicial ao traumatismo crânio encefálico grave pressupõe estabilização hemodinâmica e prevenção das lesões secundárias que são responsáveis por graves sequelas. Dessa forma, a orientação será manter o paciente dentro de condições no mais proximo possível da normalidade: garantir a ventilação e aporte adequado de oxigênio, temperatura corpórea normal, evitar grandes oscilações glicêmicas, e corrigir distúrbios eletrolíticos',
    reference: 'Traumatismo cranioencefálico em pediatria J. pediatr. (Rio J.). 1999; 75 (Supl.2): S279-S293. Guidelines for the Management of Pediatric Severe Traumatic Brain Injury, Third Edition, 2019. https://protocolos.hcrp.usp.br/exportar-pdf.php?idVersao=1076',
    tags: ['emergência', 'trauma']
  },
  {
    id: 'tp2023-47',
    module: 'Pediatria',
    text: 'As cardiopatias congênitas são defeitos estruturais do coração que estão presentes na vida fetal e ao nascimento. Esse grupo representa cerca de 30% de todas as malformações congênitas e tem incidência em torno de 9,4 casos para cada 1000 nascidos vivos. O diagnóstico das cardiopatias congênitas pode ser feito na vida fetal ou após o nascimento através do exame clínico pós-natal. Acerca do teste de oximetria de pulso (teste do coraçãozinho), podemos afirmar:',
    options: [
      '(A) Ao aferir a oximetria de pulso do RN, o valor de referência normal da SpO2 deve estar entre 90% e 94% ou uma diferença entre as medidas do membro superior direito e o membro inferior maior ou igual a 4%.',
      '(B) O teste consiste em aferir a oximetria de pulso na mão direita (MSD) e em um dos pés (MI) do recém-nascido, e considera-se como normal a SpO2 maior ou igual a 95% e uma diferença de SpO2 entre o membro superior direito e um dos membros inferiores menor ou igual a 3%.',
      '(C) O teste deve ser feito após 48 horas de vida, pois a maioria das cardiopatias congênitas manifestam-se tardiamente.',
      '(D) O teste deve ser feito em todos os RN que se encontram clinicamente bem, assintomáticos, em ambiente de alojamento conjunto, independentemente de sua idade gestacional.'
    ],
    correctAnswer: 1,
    explanation: 'O teste do coraçãozinho é normal quando a saturação é >= 95% em ambos os membros e a diferença é <= 3%.',
    commentary: 'O diagnóstico precoce das cardiopatias congênitas críticas no RN é crucial visto que o atraso no diagnóstico está relacionado a aumento de morbidade e mortalidade nesta população. Sabemos também que RN com cardiopatias congênitas críticas e graves podem estar assintomáticos nas primeiras 48 horas de vida, podendo até mesmo receber alta hospitalar sem que se faça a suspeita clínica de cardiopatia, o que pode ocorrer em até 30% dos casos como demonstrado em estudos prévios. A utilização da oximetria de pulso como ferramenta de triagem neonatal para detecção destas cardiopatias pode ajudar a detectar a hipoxemia presente na maioria destas cardiopatias, em uma fase em que o exame clínico ainda não consegue detectar. Considera-se como normal a SpO2 maior ou igual a 95% e uma diferença de SpO2 entre o membro superior direito e um dos membros inferiores menor ou igual a 3%, sendo que alterações dessas medidas mostraram que podem ser utilizadas para a suspeita de cardiopatia congênita crítica no recém-nascido, apresentando uma sensibilidade de 76% e especificidade de 99% para o diagnóstico definitivo. Devemos realizar este teste de forma rotineira em todos os RN com idade gestacional igual ou maior que 35 semanas e que se encontram clinicamente bem, assintomáticos, em ambiente de alojamento conjunto. O teste deve ser feito preferencialmente entre 24 e 48 horas de vida. Esta estratégia mostrou reduzir a taxa de falso positivo ao mesmo tempo em que não retarda o diagnóstico nos casos patológicos. A taxa de falso positivo do teste quando realizado após 24 horas de vida é de apenas 0,05%, bem menor que a taxa observada quanto realizado antes das 24 horas de vida que é de 0,5%. As medidas de oximetria devem ser realizadas em dois sítios: na mão direita (medida pré-ductal) e em um dos membros inferiores (medida pós-ductal). Os valores obtidos devem ser analisados da seguinte forma: Teste negativo: SpO2 maior ou igual a 95% e a diferença entre as medidas no membro superior direito e o membro inferior deve ser menor ou igual a 3%. Nessa situação, a probabilidade de cardiopatia congênita crítica é pequena e o RN deve seguir os cuidados habituais da maternidade. Vale ressaltar que um teste do coraçãozinho negativo não exclui completamente a presença de cardiopatia congênita. Caso o RN apresente diagnóstico fetal ou sinais clínicos sugestivos de cardiopatia congênita, a avaliação cardiológica deverá ser realizada. Teste positivo: SpO2 menor ou igual a 89% no membro superior direito ou no membro inferior. Nessa situação, o RN deverá ser reavaliado de forma minuciosa pelo médico pediatra/ neonatologista e a avaliação cardiológica e ecocardiográfica deverá também ser realizada para confirmação diagnóstica. É importante ressaltar que este RN não deveria receber alta hospitalar antes que seja realizada esta avaliação cardiológica. Teste duvidoso: SpO2 entre 90% e 94% ou uma diferença entre as medidas do membro superior direito e o membro inferior maior ou igual a 4%. Nesta situação, o teste deve ser realizado novamente após uma hora por até duas vezes. Caso as medidas de oximetria se mantenham nestes valores mesmo após a terceira avaliação, o teste será considerado positivo e o RN deverá ser submetido à avaliação cardiológica/ecocardiográfica. A realização do reteste nesta situação mostrou-se importante por reduzir consideravelmente o número de falsos positivo com o teste.',
    reference: 'Documento Científico da Sociedade Brasileira de Pediatria: Sistematização do atendimento ao recém-nascido com suspeita ou diagnóstico de cardiopatia congênita. Departamento Científico de Cardiologia e Neonatologia (2019-2021) publicado em 11 de agosto de 2022.',
    tags: ['neonatologia', 'cardiologia']
  },
  {
    id: 'tp2023-48',
    module: 'Pediatria',
    text: 'Criança com quatro anos apresenta menos de três evacuações completas por semana há dois meses. As fezes são em cíbalos. Ainda queixa falta de apetite, que melhora com a evacuação. Apresenta evidência de postura retentiva. Assinale a alternativa correta em relação ao diagnóstico e conduta para o caso:',
    options: [
      '(A) Constipação funcional; indicar o uso de laxativos e manter por tempo prolongado nesse caso.',
      '(B) Ritmo intestinal normal; o uso de laxativos não está indicado nesse caso.',
      '(C) Constipação crônica; indicar óleo mineral, que é a primeira escolha nesse caso.',
      '(D) Constipação crônica secundária; indicar Lactulose.'
    ],
    correctAnswer: 0,
    explanation: 'A tríade de frequência reduzida, fezes duras e comportamento de retenção define constipação funcional pelos critérios de Roma.',
    commentary: 'Definição de constipação funcional: deve ser identificada pela escala de Bristol que descreve a consistência das fezes (fezes em cíbalos) e pelos critérios ROMA IV (postura retentiva e número de evacuações) que descreve as dificuldades evacuatórias. Constipação funcional: indicar o uso de laxativos e manter por tempo prolongado nesse caso. Existe uma heterogeneidade nos critérios para caracterizar a constipação, não entanto, esse caso se trata de constipação e o uso de laxativos está indicado. O óleo mineral não é a primeira escolha nesse caso. Não é possível fazer o diagnóstico de constipação crônica secundária.',
    reference: 'Morais, MB et al. Constipação intestinal Jornal de Pediatria - Vol. 76, Supl.2, 2000 S149. Bresolin, NL et al. Disfunção Vesical e Intestinal na Infância. SBP. Nº 03, maio de 2019. MARCONDES, E. et al. Pediatria Básica: pediatria geral e neonatal. 9. ed. São Paulo: Sarvier, 2003.',
    tags: ['gastroenterologia']
  },
  {
    id: 'tp2023-49',
    module: 'Pediatria',
    text: 'Recém-nascido com 25 dias de vida é levado para a primeira consulta de puericultura após alta da maternidade. Nasceu de parto normal, idade gestacional pelo Capurro de 38 semanas e sem intercorrências no parto e/ou gestação. Encontra-se em aleitamento materno exclusivo e a mãe informa que o recém-nascido parece se cansar durante algumas mamadas. Teve um ganho ponderal de 200g desde o nascimento. Ao exame físico: FC 168bpm, pulsos periféricos palpáveis difusamente e de boa amplitude. Sopro sistólico em borda esternal esquerda baixa de +2/+6, sem frêmito. O pediatra que fez a sala de parto e atendeu o recém-nascido no alojamento conjunto não relatou a presença de qualquer anormalidade no exame de alta com 72 horas de vida. A principal hipótese diagnóstica a ser considerada é:',
    options: [
      '(A) Coarctação de aorta',
      '(B) Comunicação interatrial',
      '(C) Persistência do canal arterial',
      '(D) Comunicação interventricular ampla'
    ],
    correctAnswer: 3,
    explanation: 'Sinais de insuficiência cardíaca no primeiro mês e sopro holossistólico em borda esternal esquerda baixa são clássicos de CIV.',
    commentary: 'Trata-se de um paciente que apresenta, já no primeiro mês de vida, sinais sugestivos de insuficiência cardíaca: déficit de ganho ponderal, cansaço às mamadas, frequência cardíaca elevada. Ao exame verifica-se a presença de um sopro sistólico em borda esternal esquerda baixa e de baixa intensidade. Não há cianose. A associação de quadro clínico e achados de exame físico sugerem a presença de uma comunicação interventricular – CIV, a malformação cardíaca mais comum e responsável por 25% dos casos de cardiopatia congênita. Alguns dados são sugestivos de uma lesão ampla: a presença de manifestações de falência cardíaca já no primeiro mês, a baixa intensidade do sopro e a ausência de sopro no exame do recém-nascido. A ausência de sopro nessa fase sugere que o shunt através do defeito era mínimo, demonstrando uma queda lenta da pressão pulmonar após o nascimento, o que ocorre quando há uma grande comunicação entre as cavidades ventriculares direita e esquerda. A persistência do canal arterial também pode se apresentar clinicamente sob a forma de insuficiência cardíaca no primeiro mês de vida em defeitos amplos. Entretanto, nessa cardiopatia o sopro, sistólico ou contínuo, é mais audível no segundo espaço intercostal esquerdo e os pulsos são caracteristicamente descritos como amplos.',
    reference: 'MARCONDES, E. et al. Pediatria básica ed. São Paulo: Sarvier, 2003.',
    tags: ['cardiologia']
  },
  {
    id: 'tp2023-50',
    module: 'Pediatria',
    text: 'Menino com 4 anos com mordida de cachorro conhecido e vacinado, ferimento único e superficial no braço. Foi feita limpeza. Qual a conduta?',
    options: [
      '(A) Manter o cão em observação durante 10 dias.',
      '(B) Encaminhar a criança para vacinação antirrábica imediatamente.',
      '(C) Aplicar soro antirrábico imediatamente.',
      '(D) Se o cão não for vacinado, a criança deve receber vacina antirrábica.'
    ],
    correctAnswer: 0,
    explanation: 'Acidentes leves com animais de baixo risco (conhecidos/saudáveis) permitem apenas a observação do animal.',
    commentary: 'Condições do Animal Agressor Cão ou Gato sem Suspeita de Raiva no Momento da Agressão. Acidentes Leves ferimentos superficiais, pouco extensos, geralmente únicos, em tronco e membros (exceto mãos e polpas digitais e planta dos pés); podem acontecer em decorrência de mordeduras ou arranhaduras causadas por unha ou dente lambedura de pele com lesões superficiais: lavar com água e sabão, observar o animal durante 10 dias após a exposição, se o animal permanecer sadio no período de observação, encerrar o caso, se o animal morrer, desaparecer ou se tornar raivoso, administrar cinco doses de vacina (dias 0, 3, 7, 14 e 28)',
    reference: 'Normas técnicas Profilaxia Raiva – MS 2011',
    tags: ['infectologia', 'saúde pública']
  },
  {
    id: 'tp2023-51',
    module: 'Pediatria',
    text: 'O teste do reflexo vermelho ou “teste do olhinho” é um exame simples, rápido, indolor e de baixo custo realizado em recém-nascidos, e seu objetivo é a detecção precoce de problemas oculares congênitos que comprometem a transparência dos meios oculares e que podem impedir o desenvolvimento visual cortical. Tem como objetivo detectar algumas patologias oculares. Assinale a alternativa que apresenta estas patologias:',
    options: [
      '(A) Inflamações intraoculares da retina e vítreo e telecanto.',
      '(B) Catarata congênita, glaucoma congênito, retinoblastoma.',
      '(C) Retinopatia da prematuridade no estágio 1 e retinose pigmentar.',
      '(D) Descolamento de retina, vascularização fetal persistente e telecanto.'
    ],
    correctAnswer: 1,
    explanation: 'O teste tria qualquer opacidade ou massa no eixo visual que impeça a reflexão da luz na retina.',
    commentary: 'O teste do reflexo vermelho permite identificar e tratar precocemente o retinoblastoma, a catarata congênita e o glaucoma congênito. A identificação precoce destas patologias melhora o prognóstico dos bebês.',
    reference: 'Grupo de trabalho em Oftalmologia Pediátrica (2019-2021). Sociedade Brasileira de Pediatria. Teste do reflexo vermelho – Atualização: 27 abril de 2022.',
    tags: ['oftalmologia']
  },
  {
    id: 'tp2023-52',
    module: 'Pediatria',
    text: 'Lactente de 9 meses de vida tem febre de 38,5 - 39ºC há 3 dias, acompanhado de choro intenso. Há aproximadamente 6 horas iniciou quadro de desconforto respiratório e recusa de aleitamento materno, água e papinha. Mãe refere que a criança é saudável, porém tem duas internações anteriores, uma aos 3 e outra aos 6 meses de vida, ambas por infecção urinária. Não faz seguimento ambulatorial. Ao exame está afebril, prostrado, toxemiado, descorado, desidratado e taquipneico. Coração: bulhas ritimicas normofonéticas sem sopros a dois tempos, pulmões limpos, abdome pouco distendido, sem visceromegalias, ruído hidroaéreo presente. Perfusão tecidual lentificada. Oroscopia e otoscopia normais, ausência de indícios de irritação meníngea. Foi realizada expansão volêmica, com melhora da perfusão tecidual e da taquipneia. Coletado exame de urina por cateterismo vesical: Leucócitos: 1.600.000 (normal: até 1.000), 1.000 hemácias (normal: até 1.000), proteínas ausentes (normal: ausentes), nitrito positivo (normal: negativo). Aguardando urocultura. A melhor conduta para o quadro acima seria:',
    options: [
      '(A) Internar a criança, solicitar uretrocistografia miccional e aguardar urocultura para início de antimicrobiano.',
      '(B) Internar a criança, iniciar imediatamente ampicilina e manter hidratação.',
      '(C) Internar a criança, iniciar ceftriaxona, manter a hidratação.',
      '(D) Liberar a criança para tratamento domiciliar com ceftriaxona intramuscular.'
    ],
    correctAnswer: 2,
    explanation: 'Lactente febril, toxemiado e com ITU de repetição deve ser internado para tratamento parenteral.',
    commentary: 'Trata-se de uma criança com alta probabilidade de má formação associada a ITU, também risco de urosepse, além de recusa alimentar (sólidos e líquidos), por isso deve ser internado e iniciado tratamento endovenoso, o mais rápido possível. O ceftriaxone seria uma boa escolha terapêutica.',
    reference: 'TRATADO DE PEDIATRIA: Sociedade Brasileira de Pediatria, 4º edição, Barueri, SP: Manole, 2017.',
    tags: ['infectologia', 'nefrologia']
  },
  {
    id: 'tp2023-53',
    module: 'Pediatria',
    text: 'A obesidade está se tornando uma epidemia global, pois sua prevalência vem aumentando tanto em países desenvolvidos como em desenvolvimento, sendo observada já durante a infância. Em relação ao crescimento e índice de massa corpórea (IMC) para cada faixa etária, é certo afirmar que:',
    options: [
      '(A) Em pacientes com obesidade exógena causada por erro alimentar, observamos uma baixa velocidade de crescimento e IMC elevado.',
      '(B) Em pacientes com obesidade endógena, como síndrome de Cushing ou hipotireoidismo, observamos alta velocidade de crescimento e IMC elevado.',
      '(C) Em pacientes com obesidade associada a síndromes genéticas, como Síndrome de Prader Willi e Síndrome de Bardet Biedl, observamos uma baixa velocidade de crescimento e IMC elevado.',
      '(D) Em pacientes com obesidade monogênica o ganho de peso tem início precoce e está associado a alta velocidade de crescimento com alta estatura final e IMC elevado.'
    ],
    correctAnswer: 2,
    explanation: 'Obesidades sindrômicas e endócrinas geralmente cursam com redução do crescimento linear, ao contrário da obesidade exógena.',
    commentary: 'As síndromes genéticas podem envolver múltiplos genes, mas as síndromes citadas se associam a baixa estatura, atraso cognitivo e obesidade em pacientes que apresentam hiperfagia. A obesidade tem sua prevalência aumentada e muitas vezes se inicia na infância. Quando seu início é muito precoce , a partir do primeiro ano de vida, mesmo que não esteja associada a fatores ambientais, deve-se pensar em obesidade monogênica, sendo seu diagnóstico confirmado através de pesquisa molecular das mutações em genes do sistema leptina-melanocortina que estão envolvidos no controle do balanço energético, e podem apresentar as seguintes características: hiperfagia intensa, incapacidade de sentir saciedade, obesidade grave início no primeiro ano de vida, hipogonadismo hipogonadrotófico, hipotireoidismo hipotalâmico e baixa estatura final. A obesidade associada a endocrinopatias apresenta a característica de redução na velocidade de crescimento associada ao aumento de peso corporal, geralmente decorrente de desbalanço no gasto metabólico e ingesta alimentar, sendo que o metabolismo basal está menor, inclusive por redução do crescimento linear. A obesidade exógena tem etiologia multifatorial, sendo que o excesso de nutriente promove alterações metabólicas que aumentam a velocidade de crescimento, avanço do amadurecimento puberal e antecipação da puberdade, mas geralmente terminam com estatura final dentro do padrão genético familiar.',
    reference: 'Departamento Científico de Endocrinologia. SBP. Quando suspeitar que a obesidade “não é comum”: orientações para o pediatra Nº 9, Outubro de 2020. Kochi, C.; Siviero-Miachon A.A. Do Pediatra ao Endocrinologista Pediátrico: quando encaminhar? SPSP, Ed Atheneu 2016, p117. Longui , C. A. et al. Endocrinologia Pediátrica. Manole 2021 cap 13.1- 13.5.',
    tags: ['endocrinologia', 'genética']
  },
  {
    id: 'tp2023-54',
    module: 'Pediatria',
    text: 'Menina com 10 anos de idade é levada a atendimento por queixa de cefaleia há 1 ano. As dores têm localização frontal e estão associadas a fotofobia, fonofobia, náuseas e vômitos. Nega diplopia, perda de visão, parestesias ou perda de força muscular. A cefaleia ocorre 1 a 2 vezes por mês, com duração de 4 a 10 horas, geralmente após a escola, de intensidade moderada e piora com a atividade física. Entre os eventos, não apresenta queixas e seu rendimento escolar é exemplar. Exame físico e neurológico sem alterações. Assinale a conduta esperada no manejo desse caso:',
    options: [
      '(A) Realizar punção lombar.',
      '(B) Solicitar triagem metabólica e hemograma.',
      '(C) Avaliação com exame de neuroimagem.',
      '(D) Realizar medidas educativas e orientação sobre analgesia.'
    ],
    correctAnswer: 3,
    explanation: 'Quadro típico de migrânea sem sinais de alerta em paciente com exame físico normal dispensa neuroimagem.',
    commentary: 'O quadro descreve um quadro de enxaqueca ou migrânea sem sinais de alarme ou mudança de padrão não sendo indicadas investigações complementares. O manejo inclui orientação psicoeducacional com identificação de fatores desencadeantes e uso de analgesia. Dentre as medidas gerais a serem realizadas pode-se citar: evitar, quando possível, fatores referidos pelos pacientes como desencadeantes de suas crises; tratar de doenças concomitantes, particularmente hipertensão arterial e depressão; uso de técnicas de relaxamento físico e mental, regular o padrão de sono e aconselhar a prática de atividades físicas. É importante evitar o uso abusivo desses analgésicos sob risco de desencadear cefaleia resultante do uso excessivo de medicações abortivas de crise. A solicitação de exames complementares nesse paciente não encontra justificativa clínica já que não foram apresentados sinais de alarme e o paciente apresenta os critérios diagnósticos para o quadro de migrânea. As cefaleias primárias dispensam a investigação complementar, uma vez que seu diagnóstico é clínico.',
    reference: 'Tratado de Pediatria: Sociedade Brasileira de Pediatria, 5ª edição, Barueri, SP: Manole,2021. Greene K, Irwin SL, Gelfand AA. Pediatric Migraine: An Update. Neurol Clin. 2019 Nov;37(4):815-833.',
    tags: ['neurologia']
  },
  {
    id: 'tp2023-55',
    module: 'Pediatria',
    text: 'Uma menina de 6 anos de idade é admitida na UTI-Pediátrica após ser resgatada de um afogamento em um lago. Durante a primeira hora após a admissão, recebeu 60mL/kg de solução salina a 0,9%, em decorrência de má perfusão e hipotensão. Ela respondia a comunicação verbal. Nas 8 horas seguintes, desenvolveu um aumento no gradiente alveolar arterial progressivo. A sua PaO2 (pressão parcial de oxigênio) é de 88mmHg, recebendo FIO2 (fluxo inspiratório de oxigênio) de 60% na ventilação mecânica. O RX de tórax mostra uma piora na imagem de infiltrado pulmonar bilateralmente. A sua temperatura é de 37,8ºC e a pressão venosa central é de 5mmHg. Das alternativas a seguir, qual é o mecanismo que está levando à sua piora respiratória?',
    options: [
      '(A) Aumento da permeabilidade capilar',
      '(B) Sobrecarga de volume',
      '(C) Falência ventricular E',
      '(D) Infecção bacteriana secundária'
    ],
    correctAnswer: 0,
    explanation: 'O afogamento causa lesão direta da barreira alvéolo-capilar (SDRA), aumentando a permeabilidade e gerando edema não-cardiogênico.',
    commentary: 'A aspiração de fluido resulta em vários graus de injúria pulmonar. Tanto a água salgada quanto a água doce lava e destrói o surfactante, levando a disrupção da membrana álveolo-capilar e aumentando a sua permeabilidade. O desvio de líquido geralmente resulta em um edema pulmonar não-cardiogênico e na síndrome do desconforto respiratório agudo. A hipoxemia é decorrente da diminuição da complacência pulmonar, desequilíbrio da ventilação-perfusão e do shunt intrapulmonar. Tanto a água salgada quanto a água doce podem causar a lesão pulmonar aguda.',
    reference: 'CHANDY, Dipak; WEINHOUSE, Gerald L. Drowning (submersion injuries). UpToDate, 2019.',
    tags: ['emergência', 'pneumologia']
  },
  {
    id: 'tp2023-56',
    module: 'Pediatria',
    text: 'Na figura abaixo, observamos um paciente com Síndrome de Treacher Collins. O pai e os dois irmãos do paciente apresentam características similares. Assinale a alternativa que indica corretamente o padrão de herança, risco de recorrência e sinais clínicos:',
    image: '/images/tp2023-56.webp',
    options: [
      '(A) Herança autossômica recessiva; risco de recorrência 50%; coloboma de pálpebras, microrretrognatia, hipoplasia malar.',
      '(B) Herança autossômica dominante; risco de recorrência 50%; microtia, microrretrognatia, fendas palpebrais oblíquas para baixo, hipoplasia malar.',
      '(C) Herança autossômica recessiva; risco de recorrência 25%; microtia, microrretrognatia, fendas palpebrais oblíquas para baixo, hipoplasia malar.',
      '(D) Herança autossômica dominante; risco de recorrência 25%; coloboma de pálpebras, microrretrognatia, hipoplasia malar.'
    ],
    correctAnswer: 1,
    explanation: 'A herança dominante se manifesta em sucessivas gerações (vertical); cada gestação tem 50% de chance de afetar o filho.',
    commentary: 'Trata-se de uma doença autossômica dominante, com risco de recorrência de 50% para os descendentes de todo indivíduo portador do gene. Os sinais clínicos evidenciados na figura são: fendas palpebrais obliquas para baixo, coloboma de pálpebras inferiores, microtia, microrretrognatia, hipoplasia malar. Não pode ser a alternativa B e nem a C porque não é uma doença recessiva, pois repete gerações, onde pai e filhos são afetados. A alternativa D não pode ser porque o risco de recorrência é de 50% e não 25%.',
    reference: 'Lodovichi FF et al. Ciência & Saúde Coletiva, v. 23, p. 4311-4318, 2018. Thompson & Thompson: Genética Médica, 8ª Edição, 2016.',
    tags: ['genética']
  },
  {
    id: 'tp2023-57',
    module: 'Pediatria',
    text: 'Menino, 4 anos, comparece à Unidade Básica de Saúde com encaminhamento da escola, devido a dificuldade em se comunicar e interagir com outras crianças. A escola refere também agressividade quando é contrariado. Durante a consulta, os pais referem agitação e têm a sensação dele não se concentrar, nem para assistir desenhos. A família relata que ele apresenta interesse por poucos brinquedos, normalmente os mesmos, e que aprendeu a fazer contas de soma recentemente, mas lê os números desde os 2 anos de idade. Qual a hipótese diagnóstica mais provável?',
    options: [
      '(A) Transtorno do Déficit de Atenção e Hiperatividade',
      '(B) Transtorno do Espectro do Autismo',
      '(C) Transtorno Desafiador Opositor',
      '(D) Não há nenhum transtorno, o comportamento é o esperado para a idade.'
    ],
    correctAnswer: 1,
    explanation: 'Déficit na comunicação social, padrões restritos/repetitivos de comportamento e hiperfoco são a base do diagnóstico de TEA.',
    commentary: 'O diagnóstico do transtorno do espectro do autismo (TEA) deve seguir critérios definidos internacionalmente, com avaliação completa e uso de escalas validadas. A SBP orienta o pediatra ao uso do instrumento de triagem M-CHAT, validado e traduzido para o português em 2008, com a recomendação em crianças entre 16 e 30 meses, revisado, com Entrevista de Seguimento (M-CHAT-R/F). O diagnóstico é clínico. Deve-se identificar possíveis fatores de risco para TEA: idade dos pais, gravidez espontânea ou induzida, uso de medicamentos, consumo de drogas ilícitas, álcool e tabagismo durante a gestação. São de relevante importância dados do recém-nascido no momento do nascimento, a época em que os pais ou cuidadores notaram perda de habilidades já adquiridas ou alterações no comportamento da criança (contato visual, sorriso social, atraso na linguagem, ecolalia, pouco interesse em pessoas, etc).',
    reference: 'Sociedade Brasileira de Pediatria (SBP). Manual de orientação: Transtorno do Espectro do Autismo, n. 5, 2019.',
    tags: ['psiquiatria', 'desenvolvimento']
  },
  {
    id: 'tp2023-58',
    module: 'Pediatria',
    text: 'Qual o resultado característico para traço falciforme no teste do pezinho?',
    options: [
      '(A) FA',
      '(B) SS',
      '(C) FAS',
      '(D) FAC'
    ],
    correctAnswer: 2,
    explanation: 'No recém-nascido, a presença de Hemoglobina Fetal (F), Adulta (A) e S (S) indica o portador sadio (traço).',
    commentary: 'A Doença falciforme é uma alteração genética caracterizada por um tipo de hemoglobina mutante designada como hemoglobina S (ou Hb S), que provoca a distorção dos eritrócitos. O padrão genético do traço falciforme é representado pela Hemoglobina A (HbA) associada à Hemoglobina S (HbS) e cuja representação universal é HbAs. O diagnóstico é feito pela eletroforese de Hb, onde pacientes com HbS ≥50% são doentes falciforme e aqueles com HbS <50% são traço falciforme. O recém-nascido com traço falciforme apresenta Hemoglobina Fetal (F), Hemoglobina adulto (A) e algumas hemoglobinas falcizadas (S), sendo assim o perfil na triagem neonatal encontrado é o FAS. O traço falciforme não é anêmico e não necessita de tratamento.',
    reference: 'Brasil. Ministério da Saúde. Doença falciforme: condutas básicas para tratamento, Brasília: Ministério da Saúde, 2012.',
    tags: ['hematologia', 'triagem neonatal']
  },
  {
    id: 'tp2023-59',
    module: 'Pediatria',
    text: 'Menino de 7 anos é trazido ao ambulatório de pediatria, devido a ocorrência de cansaço aos esforços. Pai refere que, há um ano, após correr ou brincar, a criança tem ficado ofegante, com esforço para respirar e necessita parar as atividades até recuperar o fôlego. Refere duas internações anteriores, com 2 e 3 anos, devido a cansaço, tendo recebido alta com medicações das quais não recorda o nome. Ao exame físico: paciente apresenta-se em regular estado geral, corado, eupneico e afebril. Face: pregas horizontais em pálpebras inferiores (linhas de Dennie-Morgan). Rinoscopia: palidez de mucosa e hipertrofia de cornetos. Pele: xerótica com placas hiperemiadas e descamativas em flexuras (fossa cubital e poplítea). Tórax: sem abaulamentos, retrações ou deformidades. Expansibilidade normal, percussão de tórax e ausculta pulmonar normais. Ausculta cardíaca normal. Qual o provável diagnóstico?',
    options: [
      '(A) Tuberculose',
      '(B) Fibrose cística',
      '(C) Asma',
      '(D) Pneumonia atípica.'
    ],
    correctAnswer: 2,
    explanation: 'A associação de rinite, dermatite atópica e sintomas respiratórios de esforço define a marcha atópica da asma.',
    commentary: 'A fisiopatologia da asma possui estreita relação com outras doenças alérgicas como rinite alérgica e dermatite atópica. Esta relação é conhecida como a marcha atópica, onde a criança apresenta sequencialmente manifestações alérgicas em diferentes órgãos.',
    reference: 'Marcha atópica Rev. bras. alerg. imunopatol. – Vol. 31, Nº 4, 2008. Asma grave em crianças e adolescentes – Chong-Neto HJ et al - Arq Asma Alerg Imunol – Vol. 4, N° 1, 2020. Evidências da relação entre a dermatite atópica e o desenvolvimento da marcha atópica: revisão integrativa https://doi.org/10.34119fa/bjhrv2n4-125',
    tags: ['pneumologia', 'alergia']
  },
  {
    id: 'tp2023-60',
    module: 'Pediatria',
    text: 'Lactente de 2 meses de idade passa em primeira consulta no Ambulatório de Cardiologia Pediátrica. A mãe refere que a criança tem diagnóstico de cardiopatia congênita ao nascimento e está percebendo que seu bebê está ficando mais arroxeado ultimamente, principalmente com o choro, evacuação e mamada. Não trouxe o resumo de alta médica. Ao exame físico, nota-se uma cianose intensa acompanhada de períodos de agitação e de letargia, cianose de mucosas, labial, língua, leitos ungueais de mãos que se exacerbam ao choro e às mamadas, precórdio calmo, na ausculta cardíaca sopro sistólico ejetivo 2+/6+ de menor intensidade, em borda esternal esquerda superior e média. No eletrocardiograma, sinais de hipertrofia ventricular direita e, no raio X de tórax, área cardíaca aumentada às custas do ventrículo direito, com silhueta cardíaca em formato de bota, hipofluxo pulmonar, arco médio escavado. Qual o diagnóstico e a conduta sequencial nesse caso?',
    options: [
      '(A) Atresia tricúspide com atresia pulmonar – Prostaglandina E1 – Septostomia atrial por balão – Anastomose sistêmico pulmonar.',
      '(B) Transposição das grandes artérias simples – Prostaglandina E1 – Septostomia atrial por balão.',
      '(C) Atresia pulmonar com septo íntegro – Prostaglandina E1 – Septostomia atrial por balão – Anastomose sistêmico pulmonar.',
      '(D) Tetralogia de Fallot – Crise hipoxêmica – Oxigenioterapia – Beta-bloqueador.'
    ],
    correctAnswer: 3,
    explanation: 'Coração em tamanco/bota, cianose que piora no choro (crise de hipóxia) e hipofluxo pulmonar são patognomônicos de Fallot.',
    commentary: '(A) Na Tetralogia de Fallot a maioria dos bebês é sintomática com cianose, dispnéia aos esforços, adoção da posição de cócoras ou crises de hipóxia. Achados na ausculta cardíaca click ejetivo de origem aórtica, B2 única e hiperfonética, sopro sistólico 3+ a 5+/6+ na borda esternal esquerda superior e média. Eletrocardiograma com desvio do eixo para a direita e hipertrofia ventricular direita. Na radiografia de tórax área cardíaca normal, trama vascular pulmonar diminuída, coração em formato de bota, com tronco pulmonar escavado. As crises de hipóxia são caracerizadas por hiperpnéia, irritabilidade e choro prolongado, aumento da cianose, diminuição da intensidade do sopro cardíaco. Crises graves pode levar a déficit muscular, convulsão, acidente vascular cerebral e óbito. Pico de incidência entre 2 a 4 meses de idade. As crises precisam ser tratadas com oxigenioterapia e beta bloqueador pela ação estabilizadora sobre a reatividade vascular periférica ou na prevenção do espasmo da via de saída do ventrículo direito.\n\n(B) Na Transposição das Grandes Artérias cianose e sinais de insuficiência cardíaca se desenvolvem no período neonatal. Hipóxia arterial grave não responsiva à oxigenioterapia e acidose estão presentes nos neonatos com mistura insuficiente. Achados da ausculta inespecíficos, B2 única e hiperfonética. Eletrocardiograma com desvio do eixo para a direita e hipertrofia ventricular direita. Radiografia de tórax com cardiomegalia, aumento da trama vascular pulmonar e mediastino superior estreito com silhueta cardíaca em formato de ovo. Nestes bebês a melhora da oxigenação ocorre com a infusão de prostaglandina ou após septostomia atrial por balão.\n\n(C) Na Atresia Pulmonar com septo íntegro há necessidade de uma comunicação entre os átrios e persistência do canal arterial para sobrevida. A cianose é importante e progressiva presente desde o nascimento. B2 única, geralmente não há sopro, um sopro contínuo de canal arterial pode ser audível. Eletrocardiograma hipertrofia ventricular direita ou esquerda, hipertrofia atrial direita. Radiografia de tórax com cardiomegalia ou não dilatação do átrio direito, redução importante da trama vascular pulmonar e segmento do tronco pulmonar e concavo.\n\n(D) Na Atresia Tricúspide com atresia pulmonar há cianose importante, taquipneia, B2 única, sopro sistólico regurgitante 2+/6+ em borda esternal esquerda inferior, sopro continuo de canal arterial ocasionalmente audível. Eletrocardiograma com sobrecarga biatrial e hipertrofia ventricular esquerda. Radiografia de tórax com área cardíaca normal ou discretamente aumentada, redução da trama vascular pulmonar e segmento do tronco pulmonar escavado. Nestes bebês a infusão de prostaglandina esta indicada.',
    reference: 'Park, Myung K. Manual Park de cardiologia pediátrica. 5.ed.-Rio de Janeiro: Elsevier,2016.',
    tags: ['cardiologia', 'neonatologia']
  },
  {
    id: 'tp2022-41',
    module: 'Pediatria',
    text: 'Uma criança de 4 anos e 3 meses, sexo masculino, com história de coriza, tosse seca e febre há 7 dias. Evoluiu com conjuntivite não supurativa, dor de garganta, adenopatia cervical unilateral, exantema polimorfo escarlatiniforme com acentuação perineal e língua em morango. Assinale a alternativa que contemple o diagnóstico mais provável e uma possível complicação:',
    options: [
      '(A) Síndrome inflamatória multissistêmica e arterite de coronárias.',
      '(B) Doença reumática e valvopatia.',
      '(C) Escarlatina e cardite reumática.',
      '(D) Síndrome de Reye e encefalopatia hepática.'
    ],
    correctAnswer: 0,
    explanation: 'Febre prolongada, exantema perineal, língua em morango e adenopatia sugerem Kawasaki/SIM-P, com risco de coronariopatia.',
    commentary: 'Trata-se de Síndrome inflamatória multissistêmica (Kawasaki-like), justificada pela febre prolongada, rash com exacerbação perineal, adenopatia unilateral e língua em morango. A principal complicação é a arterite de coronárias.',
    reference: 'Tratado de Pediatria SBP - 4ª Ed.',
    tags: ['infectologia', 'reumatologia']
  },
  {
    id: 'tp2022-42',
    module: 'Pediatria',
    text: 'Lactente de 18 meses com marcos de desenvolvimento adequados (anda, aponta, entende o não), porém fala apenas "mamã" e "papá" e não compõe frases. Qual a conduta esperada do pediatra?',
    options: [
      '(A) Sobre a estimulação da fala e encaminhar para a fonoaudióloga.',
      '(B) Quanto ao atraso de linguagem e solicitar uma audiometria.',
      '(C) Sobre o atraso de desenvolvimento global e encaminhar ao neurologista.',
      '(D) Sobre a estimulação da fala e reavaliar dentro de 30 dias.'
    ],
    correctAnswer: 3,
    explanation: 'Aos 18 meses, a ausência de frases com marcos motores normais indica orientação de estímulo e reavaliação em 30 dias.',
    commentary: 'A criança apresenta marcos esperados, exceto a fala fluida. Segundo o Ministério da Saúde, a conduta inicial é orientar estimulação e reavaliar em 30 dias.',
    reference: 'Caderneta de Saúde da Criança, Ministério da Saúde, 2020.',
    tags: ['desenvolvimento']
  },
  {
    id: 'tp2022-43',
    module: 'Pediatria',
    text: 'Lactente de 12 meses, vacinas em dia até os 6 meses, viajará para o Pará (área endêmica). Quais vacinas deve receber neste momento?',
    options: [
      '(A) Pneumocócica 10 valente, meningococo C e febre amarela concomitantes; tríplice viral após um mês.',
      '(B) Tríplice viral (SCR), meningococo C e pneumocócica 10 valente concomitantes; febre amarela após um mês.',
      '(C) Tríplice bacteriana (DPT), meningococo C e tríplice viral (SCR) concomitantes; varicela após um mês.',
      '(D) Pneumocócica 10 valente, meningococo C, tetra viral (SCRV) e febre amarela concomitantes.'
    ],
    correctAnswer: 0,
    explanation: 'A vacina de febre amarela não deve ser dada junto com a tríplice viral em menores de 2 anos (intervalo de 30 dias).',
    commentary: 'Como a criança vai para área endêmica, a FA é prioridade. As vacinas de 12 meses (Pneumo 10 e Meningo C) podem ser dadas juntas. Deve-se aguardar 30 dias para a tríplice viral.',
    reference: 'Norma Técnica do Programa de Imunização, SES-SP, 2021.',
    tags: ['imunização']
  },
  {
    id: 'tp2022-44',
    module: 'Pediatria',
    text: 'Recém-nascido com 24 horas de vida, teste do coraçãozinho: SatO2 MSD = 98% e MI = 94%. Qual o passo seguinte?',
    options: [
      '(A) Alta hospitalar e reavaliação clínica no 7º dia de vida.',
      '(B) Investigação cardiológica com ecocardiograma.',
      '(C) Realizar nova aferição em 1 hora.',
      '(D) Realizar nova aferição em 48 horas.'
    ],
    correctAnswer: 2,
    explanation: 'Diferença de saturação > 3% entre MSD e MI exige repetição do teste em 1 hora.',
    commentary: 'Se a diferença entre MSD e MI for > 3% ou saturação < 95% em qualquer membro, deve-se repetir em 1h. Se persistir, solicita-se o ecocardiograma.',
    reference: 'Diretrizes SBP - Triagem Neonatal de Cardiopatias.',
    tags: ['neonatologia', 'cardiologia']
  },
  {
    id: 'tp2022-45',
    module: 'Pediatria',
    text: 'Recém-nascido com traços de Síndrome de Down, evolui com 72h de vida com taquipneia, taquicardia, hepatomegalia, precórdio hiperdinâmico e B2 com desdobramento amplo. Qual o diagnóstico e conduta?',
    options: [
      '(A) Pneumonia neonatal - Antibioticoterapia.',
      '(B) Taquipneia transitória do recém-nascido - VNI.',
      '(C) Sepse neonatal precoce - Antibioticoterapia.',
      '(D) Insuficiência cardíaca congestiva - Ecocardiograma.'
    ],
    correctAnswer: 3,
    explanation: 'Sinais de congestão sistêmica (hepatomegalia) e hiperfluxo pulmonar em Down sugerem cardiopatia congênita (como DSAV).',
    commentary: 'O quadro de ICC em RN com estigmas de Down sugere cardiopatia estrutural (comum nesta síndrome). O ecocardiograma é essencial para definição diagnóstica.',
    reference: 'Das BB. Current State of Pediatric Heart Failure. 2018.',
    tags: ['neonatologia', 'cardiologia']
  },
  {
    id: 'tp2022-46',
    module: 'Pediatria',
    text: 'Menina de 14 anos com menstruação irregular, pele e cabelos secos, bócio indolor, bradicardia e alopecia areata. Qual a hipótese mais provável?',
    options: [
      '(A) Hipotireoidismo por hipoplasia tireoidiana.',
      '(B) Hipotireoidismo por tireoidite autoimune.',
      '(C) Hipotireoidismo por defeito de síntese.',
      '(D) Hipotireoidismo por tireoidite subaguda.'
    ],
    correctAnswer: 1,
    explanation: 'A tireoidite de Hashimoto é a principal causa de hipotireoidismo adquirido e associa-se a outras doenças autoimunes (alopecia).',
    commentary: 'Hashimoto é a causa mais comum na adolescência. A associação com alopecia areata reforça a natureza autoimune do quadro.',
    reference: 'Tratado de Pediatria 4ª edição.',
    tags: ['endocrinologia']
  },
  {
    id: 'tp2022-47',
    module: 'Pediatria',
    text: 'Menina de 13 anos com emagrecimento, tremores, taquicardia, TSH suprimido, T4 livre aumentado e anticorpo contra receptor de TSH (TRAb) positivo. Qual o diagnóstico?',
    options: [
      '(A) Tireoidite de Hashimoto com tireotoxicose.',
      '(B) Hipertiroidismo por Doença de Plummer.',
      '(C) Hipertiroidismo por Doença de Graves.',
      '(D) Hipertireoidismo por Carcinoma Papilífero.'
    ],
    correctAnswer: 2,
    explanation: 'Hipertiroidismo com TRAb positivo define Doença de Graves.',
    commentary: 'A presença do TRAb (anti-receptor de TSH) é patognomônica da Doença de Graves, causa mais comum de hipertiroidismo na infância.',
    reference: 'Tratado de Pediatria 4ª edição.',
    tags: ['endocrinologia']
  },
  {
    id: 'tp2022-48',
    module: 'Pediatria',
    text: 'Criança de 3 anos com diarreia intensa, sonolência, taquicardia e perfusão periférica de 5 segundos. Qual a conduta e prováveis distúrbios?',
    options: [
      '(A) Hidratação endovenosa imediata (SF 0,9% 20mL/kg aberto); acidose metabólica e hipocalemia.',
      '(B) Hidratação oral (TRO); alcalose metabólica.',
      '(C) Hidratação venosa em 20 min; acidose lática apenas.',
      '(D) Hidratação venosa escalonada (Ringer); hipercalcemia.'
    ],
    correctAnswer: 0,
    explanation: 'Choque hipovolêmico por diarreia exige expansão rápida; a perda de bicarbonato e K+ pelas fezes causa acidose e hipocalemia.',
    commentary: 'O choque exige expansão com cristaloides. A acidose metabólica é esperada pela perda de base nas fezes e má perfusão. A hipocalemia justifica a fraqueza muscular.',
    reference: 'Guia Prático SBP - Diarreia Aguda. 2017.',
    tags: ['gastroenterologia', 'emergência']
  },
  {
    id: 'tp2022-49',
    module: 'Pediatria',
    text: 'Lactente de 6 meses, nascido a termo com 3120g, em aleitamento materno exclusivo. Como deve ser a suplementação de ferro?',
    options: [
      '(A) Iniciar suplementação de 2mg de ferro/kg/dia.',
      '(B) Iniciar suplementação de 1mg de ferro/kg/dia.',
      '(C) Não há necessidade de suplementação no momento.',
      '(D) Deveria ter iniciado com 30 dias de vida.'
    ],
    correctAnswer: 1,
    explanation: 'Termos em AME devem iniciar suplementação de ferro (1mg/kg/dia) aos 6 meses, conforme SBP.',
    commentary: 'Segundo o consenso da SBP, lactentes a termo em aleitamento exclusivo devem iniciar a suplementação com 1mg de ferro elementar/kg/dia aos 6 meses (ou quando for introduzida a dieta complementar).',
    reference: 'Consenso sobre Anemia Ferropriva SBP.',
    tags: ['nutrição', 'hematologia']
  },
  {
    id: 'tp2022-50',
    module: 'Pediatria',
    text: 'RN 33 semanas, bolsa rota há 24h, corioamnionite materna. Evolui com choque e cultura de líquor positiva com 12h de vida. Agentes mais prováveis?',
    options: [
      '(A) Enterobacter sp e Candida albicans.',
      '(B) Pseudomonas sp e Klebsiella sp.',
      '(C) Stafilococcus aureus e S. epidermidis.',
      '(D) Streptococcus do grupo B e Escherichia coli.'
    ],
    correctAnswer: 3,
    explanation: 'GBS e E. coli são os principais agentes da sepse neonatal precoce (transmissão vertical).',
    commentary: 'Em quadros de sepse precoce (contato no canal de parto), o GBS (S. agalactiae) e a E. coli são os patógenos mais comuns.',
    reference: 'Diretrizes de Neonatologia.',
    tags: ['neonatologia', 'infectologia']
  },
  {
    id: 'tp2022-51',
    module: 'Pediatria',
    text: 'Menino de 4 anos com sopro suave 2+/6+ em foco tricúspide durante quadro febril. Ecocardiograma prévio normal. Sobre este sopro, assinale a correta:',
    options: [
      '(A) A principal causa de sopro fisiológico nesta idade é o forame oval pérvio.',
      '(B) O sopro fisiológico é comum nesta idade e tende a ficar mais audível em situações de febre.',
      '(C) O sopro fisiológico está presente em menos de 30% das crianças.',
      '(D) O sopro fisiológico normalmente é acompanhado de alterações de bulhas.'
    ],
    correctAnswer: 1,
    explanation: 'Sopros inocentes são comuns na infância e tornam-se audíveis em estados hiperdinâmicos (febre).',
    commentary: 'O sopro fisiológico (inocente) pode estar presente em até 85% das crianças. Ele se exacerba com a febre (estado circulatório hipercinético) e não possui cliques ou alterações de bulhas.',
    reference: 'Tratado de Pediatria Burns - 4ª Ed.',
    tags: ['cardiologia']
  },
  {
    id: 'tp2022-52',
    module: 'Pediatria',
    text: 'Menino de 7 anos com febre prolongada, dor articular, hematomas, hepatoesplenomegalia e linfadenopatia. Hemograma: Pancitopenia com 13% de células atípicas. Diagnóstico e conduta:',
    options: [
      '(A) Mononucleose; sorologias e observação domiciliar.',
      '(B) Leishmaniose visceral; Anfotericina B.',
      '(C) Leucemia aguda; internação em isolamento e mielograma.',
      '(D) Púrpura (PTI); transfusão de plaquetas imediata.'
    ],
    correctAnswer: 2,
    explanation: 'A pancitopenia associada a organomegalia e febre em criança deve levantar suspeita imediata de Leucemia (LLA).',
    commentary: 'A presença de falha em múltiplas linhagens (anemia, plaquetopenia, leucopenia) associada a hepatoesplenomegalia e dor óssea/articular indica urgência para investigação de leucemia aguda.',
    reference: 'Protocolo de Diagnóstico Precoce do Câncer Pediátrico - MS 2017.',
    tags: ['hematologia', 'oncologia']
  },
  {
    id: 'tp2022-53',
    module: 'Pediatria',
    text: 'Atendimento a criança vítima de abuso sexual. Sobre o manejo, é correto afirmar:',
    options: [
      '(A) Dispensar exames caso não haja lesões genitais visíveis.',
      '(B) Não repetir a entrevista com a criança sobre o relato (evitar revitimização).',
      '(C) Não registrar em prontuário até confirmação da autoria.',
      '(D) Restringir o exame ao aparelho genital.'
    ],
    correctAnswer: 1,
    explanation: 'A escuta especializada visa evitar que a criança repita a narrativa traumática múltiplas vezes (revitimização).',
    commentary: 'O protocolo orienta evitar a revitimização. O prontuário deve ser detalhado e o exame físico completo (não restrito à genitália) para buscar outros sinais de violência.',
    reference: 'Protocolo de Atenção Integral - UNICEF/MS.',
    tags: ['violência', 'ética']
  },
  {
    id: 'tp2022-54',
    module: 'Pediatria',
    text: 'Escolar de 7 anos com dificuldade escolar, fala que "não entende", retração timpânica e bolhas de ar na otoscopia. Hipóteses iniciais:',
    options: [
      '(A) Dificuldade escolar; déficit auditivo; otite média com efusão; hipertrofia de adenoide.',
      '(B) Déficit auditivo; otite média aguda; transtorno do espectro autista.',
      '(C) T.D.H.A.; otite média aguda; hipertrofia de adenoide.',
      '(D) T.D.H.A.; otite externa aguda.'
    ],
    correctAnswer: 0,
    explanation: 'Problemas de audição por otite secretora (efusão) são causas frequentes de falsa suspeita de TDAH.',
    commentary: 'A visualização de bolhas e retração timpânica indica OME (otite média com efusão). Isso causa perda auditiva condutiva, prejudicando o aprendizado.',
    reference: 'Tratado de Pediatria SBP - 4ª Ed.',
    tags: ['otorrinolaringologia', 'educação']
  },
  {
    id: 'tp2022-55',
    module: 'Pediatria',
    text: 'Menino de 3 anos, convulsão tônico-clônica única de 5 min durante quadro febril (otite). História familiar positiva para crises febris. Exame neurológico normal. Tipo de crise e conduta:',
    options: [
      '(A) Crise febril complexa; punção lombar e profilaxia com benzo.',
      '(B) Crise febril simples; punção lombar e fenobarbital contínuo.',
      '(C) Crise febril simples; tratar otite, orientar antitérmico e benignidade.',
      '(D) Crise febril complexa; diagnosticar etiologia e orientação.'
    ],
    correctAnswer: 2,
    explanation: 'Crises generalizadas curtas (< 15 min) em vigência de febre são crises febris simples, de prognóstico benigno.',
    commentary: 'Crise febril simples é autolimitada e não requer anticonvulsivante contínuo ou exames invasivos se houver foco infeccioso claro e exame neurológico normal.',
    reference: 'Machado MR, Residência Pediátrica 2018.',
    tags: ['neurologia']
  },
  {
    id: 'tp2022-56',
    module: 'Pediatria',
    text: 'Recém-nascido de 21 dias com tosse seca, conjuntivite prévia com secreção e infiltrado intersticial no RX. Hemograma com eosinofilia. Diagnóstico e conduta:',
    options: [
      '(A) Pneumonia por S. aureus; glicopeptídios.',
      '(B) Pneumonia por M. pneumoniae; macrolídeos.',
      '(C) Bronquiolite viral; macrolídeos.',
      '(D) Pneumonia por Chlamydia trachomatis; macrolídeos.'
    ],
    correctAnswer: 3,
    explanation: 'Pneumonia afebril do lactente com conjuntivite e eosinofilia é clássica de Chlamydia (contato no canal de parto).',
    commentary: 'A pneumonia por Chlamydia trachomatis ocorre via transmissão vertical. Caracteriza-se por tosse, eosinofilia e pode haver conjuntivite prévia. O tratamento é com macrolídeos (Azitromicina ou Eritromicina).',
    reference: 'Tratado de Pediatria SBP - 4ª Ed.',
    tags: ['infectologia', 'pneumologia']
  },
  {
    id: 'tp2022-57',
    module: 'Pediatria',
    text: 'Menina de 6 anos com AIJ oligoarticular e FAN positivo. Qual a complicação crônica mais esperada?',
    options: [
      '(A) Uveíte anterior aguda.',
      '(B) Uveíte anterior crônica.',
      '(C) Síndrome de ativação macrofágica.',
      '(D) Síndrome inflamatória sistêmica.'
    ],
    correctAnswer: 1,
    explanation: 'Uveíte anterior crônica (muitas vezes assintomática) é o maior risco na AIJ oligoarticular com FAN+.',
    commentary: 'Pacientes com AIJ oligoarticular e FAN positivo devem realizar triagem periódica com lâmpada de fenda para detectar uveíte anterior crônica, que pode ser assintomática mas levar à cegueira.',
    reference: 'Sen ES, Ramanan AV. Juvenile idiopathic arthritis. 2020.',
    tags: ['reumatologia', 'oftalmologia']
  },
  {
    id: 'tp2022-58',
    module: 'Pediatria',
    text: 'Recém-nascido com 1 mês de vida, icterícia moderada, fezes claras (acolia) e urina escura (colúria). Qual o provável perfil laboratorial?',
    options: [
      '(A) Hiperbilirrubinemia direta e aumento de transaminases/GGT.',
      '(B) Hiperbilirrubinemia indireta predominante.',
      '(C) Transaminases normais.',
      '(D) GGT diminuída e bilirrubina direta normal.'
    ],
    correctAnswer: 0,
    explanation: 'Acolia e colúria são sinais patognomônicos de colestase (aumento de BD).',
    commentary: 'A icterícia colestática (BD elevada) indica obstrução (ex: atresia de vias biliares). GGT e transaminases costumam estar elevadas pelo dano biliar/hepático.',
    reference: 'Cloherty, 2015. Manual de Neonatologia.',
    tags: ['gastroenterologia', 'neonatologia']
  },
  {
    id: 'tp2022-59',
    module: 'Pediatria',
    text: 'Recém-nascido a termo (3530g), tipagem O- (mãe) e B+ (filho), Coombs e Eluato negativos. Icterícia Zona 4 com 48h (BI 15.5). Diagnóstico:',
    options: [
      '(A) Icterícia por isoimunização ABO.',
      '(B) Icterícia por deficiência de G6PD.',
      '(C) Icterícia fisiológica do RN.',
      '(D) Icterícia precoce por incompatibilidade.'
    ],
    correctAnswer: 2,
    explanation: 'Com Coombs e Eluato negativos, afasta-se isoimunização; BI elevada aos 2 dias sem precocidade extrema sugere fisiologia.',
    commentary: 'Como não há evidência laboratorial de hemólise imune (Coombs/Eluato neg), trata-se de icterícia fisiológica, comum após 24h de vida.',
    reference: 'Manual de Neonatologia Cloherty.',
    tags: ['neonatologia']
  },
  {
    id: 'tp2022-60',
    module: 'Pediatria',
    text: 'Lactente de 8 meses, regurgitações desde nascimento, baixo ganho de peso (queda de percentil) e episódios de sibilância. Hipótese mais provável:',
    options: [
      '(A) Estenose hipertrófica do piloro.',
      '(B) Refluxo fisiológico do lactente.',
      '(C) Atresia de esôfago.',
      '(D) Doença do refluxo gastroesofágico (DRGE).'
    ],
    correctAnswer: 3,
    explanation: 'O refluxo que causa repercussão sistêmica (baixo peso) ou respiratória (chiado) é considerado doença (DRGE).',
    commentary: 'Diferente do refluxo fisiológico ("regurgitador feliz"), a DRGE causa prejuízo ponderal, sintomas respiratórios ou dor. O baixo ganho de peso aqui sela o diagnóstico clínico.',
    reference: 'Guia Prático SBP - DRGE 2021.',
    tags: ['gastroenterologia']
  },
  {
    id: 'tp2025-41',
    module: 'Pediatria',
    text: 'Recém-nascido do sexo masculino, nascido a termo, com 3 dias de vida, apresenta cianose central progressiva e taquipneia. A saturação de oxigênio está em 75%, sem melhora significativa com administração de oxigênio a 100%. O exame físico revela pulsos normais, sopro sistólico e hiperfonese da segunda bulha cardíaca. Qual das seguintes cardiopatias congênitas é a mais provável neste caso?',
    options: [
      '(A) Coarctação de Aorta',
      '(B) Tetralogia de Fallot',
      '(C) Comunicação Interatrial',
      '(D) Transposição de Grandes Artérias'
    ],
    correctAnswer: 3,
    explanation: 'A Transposição das Grandes Artérias (TGA) é a cardiopatia congênita cianótica mais comum no período neonatal. A hipoxemia grave e refratária à oxigenoterapia é um achado clássico, e o diagnóstico é confirmado pelo ecocardiograma.',
    commentary: 'A Transposição das Grandes Artérias (TGA) é a cardiopatia congênita cianótica mais comum no período neonatal. A hipoxemia grave e refratária à oxigenoterapia é um achado clássico, e o diagnóstico é confirmado pelo ecocardiograma. A Coarctação da Aorta pode se manifestar com insuficiência cardíaca e pulsos reduzidos em membros inferiores, mas não costuma causar cianose significativa como no caso apresentado. A Tetralogia de Fallot can cause cianose, mas geralmente não se manifesta de forma tão precoce. A Comunicação Interatrial (CIA) é uma cardiopatia acianogênica com hiperfluxo pulmonar, não sendo compatível com o quadro descrito.',
    reference: 'Pediatria SBD. Tratado de pediatria. (6a edição). Barueri - SP: Editora Manole; 2024.',
    tags: ['cardiologia', 'neonatologia']
  },
  {
    id: 'tp2025-42',
    module: 'Pediatria',
    text: 'Um recém-nascido prematuro de 29 semanas de idade gestacional evoluiu com dificuldade respiratória progressiva e necessidade de intubação, taquicardia e pulsos periféricos amplos. Na ausculta cardíaca identifica-se sopro contínuo em maquinaria, mais audível na região infraclavicular esquerda. Considerando esse quadro clínico, qual o diagnóstico mais provável e qual é o exame complementar mais indicado para confirmar o diagnóstico?',
    options: [
      '(A) Persistência do canal arterial (PCA). Ecocardiograma com Doppler, com a presença do canal arterial patente.',
      '(B) Comunicação interatrial (CIA). Ecocardiograma com Doppler, evidenciando a presença de falha no septo interatrial.',
      '(C) Persistência do canal arterial (PCA). Radiografia de tórax, com aumento da área cardíaca e hipofluxo pulmonar.',
      '(D) Comunicação interatrial (CIA). Gasometria arterial, demonstrando acidose metabólica e hipoxemia.'
    ],
    correctAnswer: 0,
    explanation: 'O quadro clínico de insuficiência respiratória em paciente prematuro associado a sopro em maquinaria em região infraclavicular esquerda é compatível com a persistência do canal arterial, sendo o exame diagnóstico para cardiopatias congênitas o ecocardiograma com Doppler.',
    commentary: 'O quadro clínico de insuficiência respiratória em paciente prematuro associado a sopro em maquinaria em região infraclavicular esquerda é compatível com a persistência do canal arterial, sendo o exame diagnóstico para cardiopatias congênitas o ecocardiograma com Doppler. Apesar de o ecocardiograma com Doppler ser o exame complementar indicado, o quadro clínico não é compatível com comunicação interatrial (CIA), que costuma dar repercussão em crianças mais velhas e sopro em foco pulmonar, e não em região infraclavicular. O quadro clínico é compatível com persistência do canal arterial (PCA), porém o exame para diagnóstico é o ecocardiograma, e não a radiografia de tórax.',
    reference: 'Pediatria SBD. Tratado de pediatria. (6a edição). Barueri - SP: Editora Manole; 2024.',
    tags: ['cardiologia', 'neonatologia']
  },
  {
    id: 'tp2025-43',
    module: 'Pediatria',
    text: 'Uma menina com 18 meses de idade é levada à UBS com quadro de coriza e febre baixa há 3 dias. A mãe refere melhora da febre, porém evoluiu há 12 horas com tosse seca, dispneia leve e diminuição da mamada. Ao exame físico: coriza hialina, bom estado geral, hidratada, afebril, com sibilos esparsos, tempo expiratório prolongado e tiragem intercostal leve, com frequência respiratória de 40irpm. Mãe nega episódios semelhantes anteriores, prematuridade ou doenças de base. Frequenta creche há 2 meses. Qual a conduta mais adequada para esta criança?',
    options: [
      '(A) Referenciar para internação e iniciar antibiótico.',
      '(B) Broncodilatador e corticoide inalatório com seguimento ambulatorial.',
      '(C) Seguimento ambulatorial e orientação da família para sinais de alerta.',
      '(D) Encaminhar para internação e medidas de suporte.'
    ],
    correctAnswer: 2,
    explanation: 'O quadro é compatível com Bronquiolite Viral Aguda - principal causa de infecção de vias aéreas nesta faixa etária, e como a criança não apresenta critérios de gravidade ou fatores de risco, pode ser realizado seguimento ambulatorial e orientações gerais.',
    commentary: 'O quadro é compatível com Bronquiolite Viral Aguda - principal causa de infecção de vias aéreas nesta faixa etária, e como a criança não apresenta critérios de gravidade ou fatores de risco – não é menor que 3 meses, não foi prematura, sem patologias prévias, sem cardiopatia, com diminuição leve da aceitação da dieta e sem alterações clínicas importantes, pode ser realizado seguimento ambulatorial e orientações gerais e sobre sinais de gravidade ou alerta. O diagnóstico de pneumonia pode ser clínico, mas envolve febre alta e presença de estertores crepitantes. Criança sem episódios semelhantes anteriores, ainda muito jovem, sem critérios para diagnóstico de asma.',
    reference: 'Tratado de Pediatria da SBP – 5º edição - 2024; Ministério da Saúde - 2022; Manejo clínico da Bronquiolite viral em lactentes – Portal de boas práticas (25/10/2024)',
    tags: ['pneumologia', 'atenção primária']
  },
  {
    id: 'tp2025-44',
    module: 'Pediatria',
    text: 'Um menino de 4 anos é levado à Unidade Básica de Saúde (UBS) pela mãe, que relata que ele está com febre há 2 dias, tosse seca, coriza e obstrução nasal. A criança está ativa, hidratada e sem dificuldade respiratória. Ao exame físico, observam-se hiperemia de orofaringe, sem exsudatos, e ausculta pulmonar normal. Não há sinais de alarme como cianose, tiragem ou gemência. A mãe menciona que a criança frequenta creche e que outros colegas apresentaram sintomas semelhantes recentemente. Selecione a conduta mais adequada a ser tomada pelo médico:',
    options: [
      '(A) Solicitar radiografia de tórax e hemograma completo para afastar pneumonia bacteriana.',
      '(B) Orientar medidas como hidratação, antitérmicos e lavagem nasal, e aguardar evolução natural do quadro.',
      '(C) Prescrever antibiótico oral (amoxicilina) para prevenir complicações bacterianas.',
      '(D) Encaminhar imediatamente para o pronto-socorro, devido ao risco de insuficiência respiratória.'
    ],
    correctAnswer: 1,
    explanation: 'A conduta mais adequada é o manejo sintomático, incluindo hidratação, antitérmicos e lavagem nasal com solução salina, suficientes para aliviar os sintomas e permitir a evolução natural do quadro autolimitado de IVAS viral.',
    commentary: 'A conduta mais adequada é o manejo sintomático, incluindo hidratação, antitérmicos (como paracetamol ou ibuprofeno) e lavagem nasal com solução salina. Essas medidas são suficientes para aliviar os sintomas e permitir a evolução natural do quadro, que é autolimitado na maioria dos casos de IVAS viral. A ausência de sinais de alarme e o bom estado geral da criança reforçam essa conduta. Exames complementares como radiografia de tórax e hemograma não são indicados em casos de infecção de vias aéreas superiores (IVAS) sem sinais de complicações.',
    reference: 'SOCIEDADE BRASILEIRA DE PEDIATRIA (SBP). Tratado de Pediatria. 6 ed. Barueri: Manole, 2025.',
    tags: ['atenção primária', 'pneumologia']
  },
  {
    id: 'tp2025-45',
    module: 'Pediatria',
    text: 'Na Unidade Básica de Saúde (UBS), um menino de 2 anos e 6m é levado pela mãe com história de diarreia aquosa há três dias, acompanhada de vômitos e febre moderada (38,2°C). A mãe refere que ele está menos ativo e que sua diurese diminuiu. Ao exame, a criança apresenta mucosas secas, olhos levemente encovados e tempo de enchimento capilar de 2 segundos. Peso atual: 13kg (redução de aproximadamente 800g em relação ao peso habitual). Qual a conduta inicial mais adequada para esse paciente?',
    options: [
      '(A) Orientar jejum de sólidos e líquidos por 4 a 6 horas para evitar a piora dos episódios de diarreia e vômitos.',
      '(B) Prescrever antibioticoterapia empírica e probióticos para reduzir a duração da diarreia.',
      '(C) Iniciar hidratação venosa imediata com solução fisiológica 0,9%, devido à presença de desidratação.',
      '(D) Administrar solução de reidratação oral (SRO), manter aleitamento materno e orientar sinais de alerta.'
    ],
    correctAnswer: 3,
    explanation: 'O paciente apresenta sinais de desidratação leve (mucosas secas, olhos levemente encovados, redução de peso inferior a 5-10% do habitual). O manejo adequado inclui reidratação oral com SRO, manutenção da alimentação habitual e orientações de alerta.',
    commentary: 'O paciente apresenta sinais de desidratação leve (mucosas secas, olhos levemente encovados, redução de peso inferior a 10% do habitual). O manejo adequado inclui reidratação oral com SRO, manutenção da alimentação habitual (incluindo o aleitamento materno, se presente) e orientações sobre sinais de alerta. O jejum não é recomendado, pois pode agravar o estado nutricional. A maioria das gastroenterites agudas é viral, de modo que antibióticos não são indicados de rotina. A hidratação venosa está indicada apenas em casos de desidratação grave ou choque.',
    reference: 'BRASIL. Ministério da Saúde. Manejo das Doenças Diarreicas Infecciosas em Crianças. Brasília, 2023.',
    tags: ['gastroenterologia', 'atenção primária']
  },
  {
    id: 'tp2025-46',
    module: 'Pediatria',
    text: 'João, com 1 ano e 3 meses, é levado à Unidade Básica de Saúde (UBS) por sua mãe, devido a baixo ganho de peso e episódios frequentes de infecções respiratórias nos últimos meses. Desde os 9 meses, quando ocorreu o desmame, recusa alimentos sólidos, mantendo alimentação predominantemente baseada em leite de vaca diluído. Ao exame físico, João apresenta-se irritado, com fácies triste, pele seca e descamativa, cabelos finos e despigmentados, além de edema de membros inferiores. Seu peso está abaixo do percentil 3 para a idade e a estatura também demonstra um desvio importante na curva de crescimento. Aponte a principal hipótese diagnóstica para este paciente:',
    options: [
      '(A) Marasmo',
      '(B) Doença celíaca',
      '(C) Kwashiorkor',
      '(D) Deficiência de ferro'
    ],
    correctAnswer: 2,
    explanation: 'O quadro clínico é clássico de Kwashiorkor, caracterizado por desnutrição proteica grave com edema provocado pela redução de albumina plasmática.',
    commentary: 'O quadro clínico de João é altamente sugestivo de Kwashiorkor, caracterizado por desnutrição proteica severa, edema, pele descamativa e alterações capilares. A fisiopatologia envolve a deficiência de proteínas, levando à redução da síntese de albumina hepática e consequente edema por diminuição da pressão oncótica plasmática. O marasmo se caracteriza por desnutrição global com depleção de gordura e massa muscular, mas sem edema. A doença celíaca apresenta diarreia crônica importante.',
    reference: 'Sociedade Brasileira de Pediatria. Tratado de Pediatria. 6ª ed. Barueri, SP: Manole; 2024.',
    tags: ['nutrologia', 'atenção primária']
  },
  {
    id: 'tp2025-47',
    module: 'Pediatria',
    text: 'Uma lactente de 5 meses, previamente hígida, é levada à Unidade Básica de Saúde (UBS) com febre alta (39°C) há dois dias, associada a irritabilidade e recusa alimentar. A mãe relata que, nas últimas 24 horas, a criança passou a apresentar secreção nasal hialina, conjuntivite não purulenta e episódios de tosse seca. Ao exame físico observam-se irritabilidade, faringe hiperemiada e presença de lesões esbranquiçadas na mucosa jugal. Nas últimas horas, surgiram lesões maculopapulares eritematosas, iniciando-se na face e espalhando-se para o tronco, além de taquipneia sem sinais de esforço respiratório importante. Diante do quadro clínico apresentado, qual a principal hipótese diagnóstica e a conduta inicial mais adequada?',
    options: [
      '(A) Eritema infeccioso – Suporte clínico e acompanhamento, pois o Parvovírus B19 tem evolução autolimitada na maioria dos casos.',
      '(B) Exantema súbito – Monitoramento ambulatorial e hidratação oral, pois o quadro tende a resolução espontânea após o aparecimento do exantema.',
      '(C) Doença de Kawasaki – Indicação de ecocardiograma e início de imunoglobulina intravenosa, devido ao risco de aneurismas coronarianos.',
      '(D) Sarampo – Encaminhamento para hospitalização e suporte clínico, devido ao risco aumentado de complicações em lactentes menores de 6 meses.'
    ],
    correctAnswer: 3,
    explanation: 'A presença de febre alta, sintomas respiratórios/oculares (coriza, conjuntivite, tosse) e manchas de Koplik (lesões esbranquiçadas em mucosa jugal) seguidas por exantema craniocaudal é patognomônica de Sarampo. Em menores de 6 meses, há alto risco de complicações e a hospitalização é recomendada.',
    commentary: 'O sarampo em lactentes menores de 6 meses é raro, mas em bebês de mães não vacinadas ou com falha vacinal pode ocorrer. O quadro clínico clássico inclui febre alta, tosse, conjuntivite e coriza, seguidos pelo exantema morbiliforme craniocaudal. As manchas de Koplik são patognomônicas e antecedem o exantema. A hospitalização é recomendada em lactentes jovens devido ao alto risco de complicações graves, como pneumonia e encefalite. No eritema infeccioso, o exantema tem aspecto de "face esbofeteada" e ocorre sem pródomo gripal exuberante; no exantema súbito, a febre cede antes do aparecimento do exantema.',
    reference: 'Ministério da Saúde. Guia de Vigilância em Saúde (3ª edição). Brasília: Ministério da Saúde, 2019.',
    tags: ['infectologia', 'exantemáticas']
  },
  {
    id: 'tp2025-48',
    module: 'Pediatria',
    text: 'Mariana, lactente de 1 ano e 2 meses, é levada à Unidade Básica de Saúde (UBS) para consulta de rotina. A mãe relata que a criança está ativa, sem doenças recentes, e que sua alimentação inclui aleitamento materno e alimentos variados, conforme dieta da família. No entanto, seus familiares comentaram que a menina "parece pequena para a idade". Ao exame físico, Mariana apresenta peso de 7,5kg (abaixo do percentil 3) e estatura de 71cm (abaixo do percentil 3), com perímetro cefálico adequado para a idade. Ao exame físico não apresenta alterações. A análise da curva de crescimento revela que a criança segue um padrão de crescimento abaixo dos percentis esperados desde os 6 meses de idade. Com base no caso, qual a melhor conduta inicial na avaliação do crescimento de Mariana?',
    options: [
      '(A) Avaliar o padrão da curva de crescimento desde o nascimento, antecedentes familiares de baixa estatura, recordatório alimentar e iniciar investigação.',
      '(B) Orientar alimentação adequada e solicitar retorno em quatro meses, para reavaliação das curvas de crescimento pondero-estatural.',
      '(C) Tranquilizar a família e reforçar orientações sobre alimentação e estímulo ao desenvolvimento, pois a curva de crescimento não é relevante nesta idade.',
      '(D) Considerar a suplementação empírica de ferro e vitaminas, pois o baixo crescimento é sempre indicativo de deficiência nutricional.'
    ],
    correctAnswer: 0,
    explanation: 'A avaliação da curva de crescimento é fundamental na puericultura. Padrão alterado e persistente de baixo ganho estatural-ponderal desde os 6 meses exige investigação inicial completa com recordatório alimentar, história e antecedentes.',
    commentary: 'A avaliação da curva de crescimento é fundamental na puericultura, permitindo a identificação precoce de desvios. No caso apresentado, a criança apresenta peso e estatura abaixo do percentil 3 desde os 6 meses, o que sugere um possível comprometimento crônico do crescimento. A conduta correta é analisar o padrão de crescimento desde o nascimento, buscar antecedentes familiares e investigar o recordatório alimentar, e não simplesmente aguardar ou suplementar empiricamente de forma cega.',
    reference: 'Sociedade Brasileira de Pediatria. Tratado de Pediatria. 6ª ed. Barueri, SP: Manole; 2024.',
    tags: ['atenção primária', 'puericultura']
  },
  {
    id: 'tp2025-49',
    module: 'Pediatria',
    text: 'Mulher de 29 anos apresentou no pré-natal do 1º trimestre VDRL de 1:128. Logo após o diagnóstico, realizou o tratamento com 3 doses de penicilina benzatina com 1 semana de intervalo entre elas, porém o seu parceiro não foi tratado. Na admissão para o parto, o VDRL materno era de 1:16. Demais exames de pré-natal sem alterações. O bebê nasceu com 38 semanas e sem alterações no exame físico. Acerca das condutas para o caso, assinale a alternativa correta:',
    options: [
      '(A) A mãe recebeu tratamento adequado para sífilis, mas se o VDRL do RN for maior ou igual a 1:64, o tratamento será definido com o resultado do LCR.',
      '(B) A mãe recebeu tratamento adequado para sífilis e o exame físico do RN está normal, portanto, deve-se considerar um caso de exposição à sífilis, sem necessidade de tratamento.',
      '(C) A mãe recebeu tratamento inadequado para sífilis, portanto, deve-se considerar o caso como sífilis congênita. A conduta envolve a notificação e o tratamento do RN com penicilina.',
      '(D) A mãe recebeu tratamento inadequado para sífilis e o tratamento do RN será indicado se seu VDRL for positivo, independentemente da titulação.'
    ],
    correctAnswer: 0,
    explanation: 'A mãe recebeu tratamento adequado (adequação materna não depende mais do tratamento do parceiro). O RN deve ser investigado e, caso o VDRL do RN seja 2 diluições maior que o materno (1:16 -> 1:64), deve-se colher LCR para guiar o esquema de penicilina.',
    commentary: 'O tratamento da mãe está adequado (3 doses de penicilina benzatina com 1 semana de intervalo, finalizado pelo menos 30 dias antes do parto). O tratamento do parceiro não define mais a adequação do tratamento materno na diretriz atual. O acompanhamento do RN inclui o VDRL; se maior ou igual a 2 diluições do VDRL materno (ou seja, 1:64), a triagem necessita da avaliação de LCR (líquor) para caracterizar o envolvimento neurológico e escolher o tipo de Penicilina (cristalina ou procaína).',
    reference: 'Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com IST - Ministério da Saúde, 2022.',
    tags: ['infectologia', 'neonatologia']
  },
  {
    id: 'tp2025-50',
    module: 'Pediatria',
    text: 'Criança do sexo masculino, 1 ano e 8 meses de idade, comparece ao ambulatório de Pediatria, devido a atraso na linguagem e dificuldades na interação social. Sua mãe relata que ele raramente atende pelo nome e tem crises de irritabilidade frequentes. Permanece a maior parte de seu tempo sob os cuidados de uma babá, com exposição excessiva a telas. No exame, apresenta contato visual adequado, imitação de gestos, responde a comandos simples e mantém uma boa interação com os pais. Selecione a principal hipótese diagnóstica para este paciente:',
    options: [
      '(A) Surdez Neurossensorial Moderada',
      '(B) Transtorno do Déficit de Atenção e Hiperatividade',
      '(C) Atraso do Desenvolvimento Secundário a Privação Ambiental',
      '(D) Transtorno do Espectro Autista'
    ],
    correctAnswer: 2,
    explanation: 'A presença de bom contato visual, imitação de gestos e interesse social responsivo descarta o TEA, apontando para atraso secundário a fatores ambientais (exposição a telas e falta de estímulo).',
    commentary: 'Crianças com exposição excessiva a telas e pouca interação social estimulada podem apresentar atraso de linguagem e dificuldades na comunicação. No entanto, ao contrário de crianças com TEA, as competências de contato visual, imitação e resposta a comandos simples estão preservadas. Reduzindo o tempo de tela e aumentando o estímulo interativo, o prognóstico é excelente.',
    reference: 'Zimmerman FJ et al. J Pediatr, 2007; Rowe ML et al. J Child Lang, 2014.',
    tags: ['atenção primária', 'puericultura']
  },
  {
    id: 'tp2025-51',
    module: 'Pediatria',
    text: 'Lactente de 16 meses, feminina, está em consulta de puericultura numa Unidade Básica de Saúde. A criança está ativa, sem intercorrências ou doenças crônicas. Nega uso de medicamentos. O calendário vacinal está completo até o 12º mês, inclusive recebeu 2 doses de vacina contra influenza (2024) e COVID-19, de acordo com a recomendação para a faixa etária. Conforme PNI 2025, assinale a alternativa com as vacinas que deverá receber nesta data:',
    options: [
      '(A) Reforço das vacinas pólio (VOP), DTP, reforço da vacina tríplice viral, vacina hepatite A.',
      '(B) Reforço das vacinas pólio (VIP), DTP, reforço da vacina tríplice viral, e vacina varicela.',
      '(C) Vacina pneumococo 10 valente; reforço das vacinas pólio: (VOP), DTP, Hib (Hemófilos influenza b), vacina tríplice viral, vacina hepatite A e vacina varicela.',
      '(D) Vacina pneumococo 10 valente; reforço das vacinas pólio: (VIP), DTP, hepatite B, reforço da vacina tríplice viral, vacina hepatite A e reforço da vacina varicela.'
    ],
    correctAnswer: 1,
    explanation: 'De acordo com as atualizações do PNI 2025, o reforço contra poliomielite aos 15 meses de vida passa a ser feito exclusivamente com a VIP (injetável), substituindo a VOP (gotinha). As vacinas devidas aos 15 meses são: VIP, DTP, tríplice viral (2ª dose) e varicela.',
    commentary: 'De acordo com o PNI de 2025, a VOP foi integralmente descontinuada e substituída pela VIP injetável nos reforços aos 15 meses. Com a carteira vacinal completa até o 12º mês, a criança chega com atraso das vacinas de 15 meses, devendo receber nesta data: Reforço de VIP, reforço de DTP, reforço da tríplice viral (SCR) e a 1ª dose da varicela (a dose de reforço da varicela ocorre apenas aos 4 anos).',
    reference: 'PNI 2025 - Ministério da Saúde - Calendário da Criança.',
    tags: ['imunizações', 'atenção primária']
  },
  {
    id: 'tp2025-52',
    module: 'Pediatria',
    text: 'RN de 33 semanas nasce de parto normal, respirando e com tônus presente. O clampeamento do cordão umbilical foi feito 30 segundos após o nascimento e o RN foi levado para a mesa de reanimação. Após as etapas iniciais, o bebê apresentava FC de 80bpm. Assinale a alternativa com as condutas corretas. Considere que o hospital dispõe de todos os equipamentos necessários para o caso.',
    options: [
      '(A) O RN apresentou boa vitalidade ao nascer, sem necessidade de condutas além dos passos iniciais.',
      '(B) Se apresentar alteração na respiração, iniciar ventilação com pressão positiva com FiO2 21% por 30 segundos, no ritmo “aperta, solta, solta”.',
      '(C) Iniciar massagem cardíaca na técnica dos 2 polegares, com uma relação de 3 compressões para 1 ventilação.',
      '(D) Iniciar ventilação com pressão positiva com FiO2 30% por 30 segundos, na frequência de 40-60 movimentos por minuto, e monitorizar com oxímetro e monitor cardíaco.'
    ],
    correctAnswer: 3,
    explanation: 'RN prematuro <34 semanas com FC < 100 bpm após passos iniciais exige Ventilação com Pressão Positiva (VPP) com FiO2 ajustada de início em 30% por 30 segundos, monitorando-se a oximetria de pulso e o traçado cardíaco.',
    commentary: 'O RN prematuro de 33 semanas (<34 semanas), tendo apresentado FC < 100 bpm após passos iniciais, tem indicação absoluta de Ventilação com Pressão Positiva (VPP) sob frequência de 40-60 movimentos por minuto por 30 segundos. Por ser prematuro de moderado a limiar, a FiO2 recomendada de partida é 30% (não 21%), concomitante à instalação do oxímetro de pulso e monitor de eletrocardiograma (ECG) contínuo.',
    reference: 'WHO recommendations on newborn health: guidelines approved by the WHO Guidelines Review Committee, 2017.',
    tags: ['neonatologia']
  },
  {
    id: 'tp2025-53',
    module: 'Pediatria',
    text: 'Primípara comparece em UBS com seu filho de 7 dias, referindo que ele chora muito desde o nascimento e apresenta pouca diurese. Refere que não percebe suas mamas se esvaziarem, as quais estão túrgidas, com fissuras e dor durante toda a amamentação. Pré-natal sem intercorrências, criança nasceu de parto cesáreo por opção materna, a termo, bolsa rota no ato, sem alterações, peso de nascimento 3,5kg. Hoje está com 3,1kg, exame físico sem alterações. Selecione a conduta mais adequada para este caso:',
    options: [
      '(A) Realizar exames de triagem infecciosa, iniciar antibioticoterapia endovenosa e solicitar internação.',
      '(B) Manter aleitamento materno exclusivo, corrigir técnica de amamentação (pega e posição) e reavaliar em 3 dias.',
      '(C) Acalmar a mãe, orientar que a apojadura deverá ocorrer até os 15 dias de vida e retornar com 30 dias de vida.',
      '(D) Indicar mamadas de no máximo 10 minutos, prescrever galactogogo para a mãe e retornar em 1 semana.'
    ],
    correctAnswer: 1,
    explanation: 'A perda de peso excedeu o limite de 10% aos 7 dias de vida. Diante de queixas de mamas túrgidas, dor e fissuras, a conduta é preservar o aleitamento exclusivo e proceder à correção técnica imediata de pega/posição, agendando retorno rápido em 3 dias.',
    commentary: 'O lactente perdeu 11,4% do peso, ultrapassando os 10% esperados para a primeira semana de vida. O choro e a baixa diurese evidenciam esvaziamento inefetivo, corroborado pela presença de dor e fissuras decorrentes de má técnica na amamentação. É fundamental manter o aleitamento exclusivo corrigindo a posição (corpo alinhado) e a pega (boca bem aberta, lábio inferior evertido, nariz livre), reavaliando a evolução ponderal e hidratativa em 3 dias.',
    reference: 'Sociedade Brasileira de Pediatria. Guia prático de aleitamento materno atualizado 2024.',
    tags: ['aleitamento materno', 'atenção primária']
  },
  {
    id: 'tp2025-54',
    module: 'Pediatria',
    text: 'Recém-nascido, em sala de parto, apresenta apneia e cianose. Ao exame, encontra-se sem resposta, sem respiração espontânea e sem pulso palpável. O protocolo de reanimação é iniciado. Qual a primeira medida a ser adotada para otimizar as chances de sucesso da reanimação cardiopulmonar (RCP) neste paciente?',
    options: [
      '(A) Priorizar a ventilação com pressão positiva.',
      '(B) Iniciar compressões torácicas imediatamente antes da ventilação.',
      '(C) Administrar epinefrina intravenosa antes de iniciar qualquer outra medida.',
      '(D) Realizar desfibrilação precoce com carga baixa, devido à idade do paciente.'
    ],
    correctAnswer: 0,
    explanation: 'Em neonatos, a etiologia típica da parada cardiopulmonar é respiratória/asfíxica. A priorização absoluta inicial deve ser direcionada à ventilação com pressão positiva (VPP).',
    commentary: 'A reanimação neonatal e manejo de PCR em sala de parto priorizam maciçamente a ventilação alveolar (VPP), pois nela repousa a reversão da asfixia secundária na imensa maioria dos casos. Compressões torácicas só são indicadas se, após 30 segundos de VPP bem executada com oxigênio, a FC se mantiver menor que 60 bpm. A epinefrina é uma medida tardia no algoritmo.',
    reference: 'Diretrizes 2022 da Sociedade Brasileira de Pediatria – Programa de Reanimação Neonatal.',
    tags: ['neonatologia']
  },
  {
    id: 'tp2025-55',
    module: 'Pediatria',
    text: 'Menino de 2 anos e 5 meses comparece em ambulatório especializado com queixa de inchaço há 2 dias e mal-estar. Achados de exame: edema bipalpebral e em MMII (++/+4); pressão arterial acima do percentil 95 para sexo, idade e estatura; estertores subcrepitantes em bases pulmonares; fígado a 2cm do rebordo costal direito; membros inferiores: lesões cicatriciais de impetigo. Urina I: densidade 1025; pH 5,5; leucócitos 12/campo, hemácias 50/campo, albumina +. Ureia 12mg/dL e creatinina 0,4mg/dL. RX de tórax: aumento discreto de área cardíaca. A conduta adequada para o caso é:',
    options: [
      '(A) Solicitar uroculltura por jato médio, iniciar antibioticoterapia empírica oral e solicitar reavaliação em 24-48 horas.',
      '(B) Solicitar RX de tórax em incidência de Hjelm-Laurell, internar e administrar oxacilina endovenosa.',
      '(C) Solicitar C3 sérico, restringir ingestão hidrossalina, considerar o uso de anti-hipertensivos e diuréticos.',
      '(D) Solicitar relação proteína/creatinina urinárias, iniciar corticoterapia oral e orientar repouso relativo.'
    ],
    correctAnswer: 2,
    explanation: 'O quadro clínico e de sedimento urinário com edema, hipertensão, congestão circulatória (estertores, hepatomegalia) e lesão de pele ativa/recente (impetigo) descreve a Síndrome Nefrítica Clássica (Glomerulonefrite Pós-Estreptocócica - GNPE). O manejo inclui monitoração de C3 sérico e terapia de suporte e controle volêmico.',
    commentary: 'O quadro descreve manifestações cardinais da síndrome nefrítica pós-estreptocócica (GNPE) decorrente de piodermite prévia. Manifesta-se com hematúria, hipertensão grave e sobrecarga volumétrica (congestão cardíaca e pulmonar demonstradas pelos estertores e cardiomegalia leve). A conduta envolve a restrição rigorosa hidrossalina, administração de diuréticos de alça (furosemida) e controle tensor, com solicitação da dosagem do complemento C3 (que se encontra caracteristicamente consumido).',
    reference: 'Recomendações: atualização de Condutas em Pediatria (síndrome nefrítica) - SPSP, 2019.',
    tags: ['nefrologia']
  },
  {
    id: 'tp2025-56',
    module: 'Pediatria',
    text: 'Menino de 3 anos é levado ao ambulatório com história de tosse crônica, episódios recorrentes de pneumonia e diarreia com fezes volumosas e de odor fétido, de aparência brilhante e que boiam no vaso. A mãe relata que a criança tem dificuldade de ganhar peso, apesar de bom apetite. Qual é a abordagem inicial indicada para la investigação diagnóstica?',
    options: [
      '(A) Encaminhar para broncoscopia, para avaliação da via aérea.',
      '(B) Repetir teste do pezinho para pesquisa de doenças metabólicas.',
      '(C) Solicitar dosagem sérica de IgE específica para alergia alimentar.',
      '(D) Solicitar teste do suor para dosagem de cloro.'
    ],
    correctAnswer: 3,
    explanation: 'A ocorrência de infecções pulmonares bacterianas repetidas associada a sinais de insuficiência pancreática exócrina (diarreia de odor fétido e com esteatorreia) e desnutrição secundária é típica de Fibrose Cística (mucoviscidose). O teste do suor com dosagem de cloro é o método confirmatório preferencial.',
    commentary: 'A fibrose cística deve ser investigada em crianças com a combinação de manifestações digestivas de má absorção de gorduras (fezes volumosas, brilhantes, fétidas e de baixa densidade, que boiam) e quadros infecciosos pulmonares de repetição. O teste de eleição para o diagnóstico inicial é o teste do suor, que demonstrará valores elevados de cloro devido ao defeito no canal regulador CFTR.',
    reference: 'Nelson, W. Tratado de Pediatria. 21ª edição. Elsevier, 2020.',
    tags: ['pneumologia', 'gastroenterologia']
  },
  {
    id: 'tp2025-57',
    module: 'Pediatria',
    text: 'B.R., 8 anos, está há 3 dias com conjuntivite, febre de 38ºC, cansaço no peito, tosse seca, cefaleia e mialgia. Há um dia apresenta piora da falta de ar. Exame físico: frequência respiratória de 60irpm, com retração intercostal e subdiafragmática. Ausculta respiratória: presença de estertores crepitantes esparsos em ambos hemitórax; SO2 de 89%, restante sem alterações. O RX de tórax mostrou infiltrado intersticial difuso bilateral. Indique a melhor conduta terapêutica, de acordo com a hipótese diagnóstica mais adequada para o caso:',
    options: [
      '(A) Corticoterapia',
      '(B) Antibiótico macrolídeo',
      '(C) Beta 2 agonista',
      '(D) Antibiótico carbapenêmico'
    ],
    correctAnswer: 1,
    explanation: 'Em crianças com mais de 5 anos (escolares), o quadro clínico sistêmico (conjuntivite, tosse seca, artromialgia) combinado com infiltrado intersticial bilateral no RX de tórax aponta para pneumonia atípica (Mycoplasma/Chlamydia pneumoniae). A escolha terapêutica é o antibiótico macrolídeo.',
    commentary: 'As pneumonias atípicas são bastante prevalentes em escolares e adolescentes (acima de 5 anos de idade). Podem cursar com queixas extrapulmonares (como conjuntivite, cefaleia, febre moderada e mialgia) e padrão de imagem de acometimento intersticial retículo-nodular bilateral. O agente bacteriano atípico desprovido de parede celular clássica demanda uso terapêutico de macrolídeos (Ex: Claritromicina, Azitromicina).',
    reference: 'Pneumonia adquirida na comunidade na infância - Dept. Científico SBP, 2018; Lopez, FA; Junior, DC. Tratado de Pediatria, 2ª ed.',
    tags: ['pneumologia', 'infectologia']
  },
  {
    id: 'tp2025-58',
    module: 'Pediatria',
    text: 'Escolar do sexo masculino, 8 anos, é trazido ao ambulatório de Pediatria pelos pais, que estão preocupados com o desenvolvimento de sua genitália. Ao exame físico, você observa que há aumento do volume testicular bilateral e do comprimento do pênis, com presença de pelos pubianos, escuros e espessos. Diante desse quadro, assinale a alternativa correta:',
    options: [
      '(A) A criança apresenta desenvolvimento dos caracteres sexuais secundários no limite inferior da idade considerada para o gênero masculino.',
      '(B) A criança está apresentando variante da normalidade para a idade, com sinais de adrenarca precoce.',
      '(C) A criança encontra-se no estágio puberal de Tanner G3P3, sendo indicado iniciar avaliação laboratorial para puberdade precoce.',
      '(D) A criança apresenta sinais precoces de virilização, configurando puberdade precoce periférica.'
    ],
    correctAnswer: 2,
    explanation: 'O desenvolvimento de caracteres sexuais secundários secundário a aumento bilateral do volume testicular (estágio de Tanner G3P3) antes dos 9 anos em meninos caracteriza puberdade precoce central/verdadeira, necessitando de triagem hormonal-radiológica.',
    commentary: 'No sexo masculino, o limite inferior normal para início puberal é de 9 anos. O surgimento de pubarca, estirão e aumento bilateral de volume testicular em menino de 8 anos aponta para ativação verdadeira do eixo HHG (puberdade precoce central) no estágio G3P3 de Tanner, devendo-se iniciar investigação diagnóstica profunda. Na puberdade periférica ou adrenarca isolada, não se observa aumento testicular bilateral associado.',
    reference: 'Nelson, Tratado de Pediatria - Elsevier, 2017; Boletim da Sociedade de Pediatria de SP, 2021.',
    tags: ['endocrinologia']
  },
  {
    id: 'tp2025-59',
    module: 'Pediatria',
    text: 'Menina, com 12 dias de vida, é levada à emergência, devido a vômitos e recusa alimentar há 5 dias. Nasceu de parto normal a termo, adequado para idade gestacional. Está em aleitamento materno exclusivo, sem recuperação do peso de nascimento. Ao exame: regular estado geral; hipoativa; frequência cardíaca 158bpm; pressão arterial 68x42mmHg; pulsos periféricos finos; tempo de enchimento capilar: 3 segundos; frequência respiratória 64irpm; saturação de O2 95%; abdome globoso, com ruídos hidroaéreos normais; genitália feminina típica, com clitoromegalia. Diante desse quadro clínico e laboratorial, o diagnóstico mais provável é:',
    options: [
      '(A) Doença do refluxo gastroesofágico',
      '(B) Hiperplasia adrenal congênita',
      '(C) Estenose hipertrófica do piloro',
      '(D) Alergia à proteína do leite de vaca'
    ],
    correctAnswer: 1,
    explanation: 'A combinação de choque hemodinâmico (hipotensão, perfusão lenta), vômitos intratáveis com desidratação grave no recém-nascido e genitália com virilização (clitoromegalia) sem gônadas palpáveis é patognomônica de Hiperplasia Adrenal Congênita (HAC) na forma clássica perdedora de sal.',
    commentary: 'O quadro clínico descreve uma crise adrenal com choque circulatório hipovolêmico-salino resultante da deficiência de 21-hidroxilase na Hiperplasia Adrenal Congênita (HAC), forma perdedora de sal. A deficiência na biossíntese de cortisol e aldosterona cursa com perda maciça renal de sódio, hipotensão e choque em meados de 7-14 dias de vida. No sexo feminino, a virilização da genitália externa (clitoromegalia) facilita o raciocínio diagnóstico de forma precoce.',
    reference: 'HAC due to steroid 21-hydroxylase deficiency: an Endocrine Society clinical practice guideline, 2010.',
    tags: ['endocrinologia', 'neonatologia']
  },
  {
    id: 'tp2025-60',
    module: 'Pediatria',
    text: 'Uma menina de 3 anos é levada ao pronto-socorro por sua mãe, devido a episódios de vômitos e sonolência progressiva nas últimas 24 horas. A mãe relata que a criança caiu da escada há 2 dias, mas não procurou atendimento médico na ocasião. Ao exame físico, a criança apresenta-se sonolenta, com resposta lenta a estímulos verbais. Observa-se edema e hematoma periorbital bilateral e equimoses em diferentes estágios de cicatrização nos braços e nas costas. Não há sinais de fratura evidente nos membros. A pressão arterial está dentro dos limites normais e não há sinais de infecção sistêmica. Qual é a principal hipótese diagnóstica?',
    options: [
      '(A) Abuso físico',
      '(B) Traumatismo cranioencefálico devido à queda',
      '(C) Osteogênese imperfeita',
      '(D) Hemofilia'
    ],
    correctAnswer: 0,
    explanation: 'O achado de hematomas e equimoses em múltiplas fases temporais distintas de evolução de cicatrização correlacionado a edema periorbital e sonolência, incoerente com história de queda única de escada, denota alta probabilidade de injúrias físicas não-acidentais provocadas por lesões repetidas de abuso físico.',
    commentary: 'A despeito do relato materno de queda de escada acidental há 2 dias, múltiplos elementos sugerem fortemente agressão física e violência doméstica continuada (síndrome de maus-tratos infantis): a existência de equimoses multiformes espalhadas em diferentes estados evolutivos de reabsorção (múltiplos traumas no tempo) e o severo padrão de "olho de guaxinim" (hematoma periorbital bilateral) sem fatores hereditários visíveis. Deve-se notificar amplamente as esferas protetivas obrigatórias.',
    reference: 'Critérios diagnósticos da violência física ou trauma intencional contra crianças e adolescentes - Nota de alerta nº 180, SBP, 2024.',
    tags: ['atenção primária', 'urgência e emergência']
  },
  {
    id: 'tp2021-41',
    module: 'Pediatria',
    text: 'Gestante, 27 anos, em exame de rotina no pré-natal apresentou VDRL reagente 1:64 no primeiro trimestre. A gestante e seu parceiro foram adequadamente tratados com penicilina benzatina, como confirmado por anotações na carteira de pré-natal. A evolução do VDRL foi: pré-tratamento – 1:64; após o tratamento – 1:4; na internação para o parto – 1:32. No recém-nascido (RN) o VDRL foi 1:16, e o exame físico estava normal. De acordo com as recomendações do Ministério da Saúde, a conduta é:',
    options: [
      '(A) Não tratar, se o RN permanecer assintomático até a alta. Deve-se repetir o VDRL com 1, 2 e 6 meses de vida.',
      '(B) Realizar hemograma, radiografia de ossos longos e exame do líquor. Tratar o RN com penicilina cristalina ou procaína dependendo do resultado do líquor.',
      '(C) Aplicar uma dose de penicilina benzatina, pois o RN está assintomático. Encaminhar para seguimento ambulatorial.',
      '(D) Realizar hemograma, radiografia de ossos longos e FTA-Abs. Se algum destes exames estiver alterado, coletar líquor e iniciar tratamento.'
    ],
    correctAnswer: 1,
    explanation: 'Apesar do tratamento adequado no início da gestação, o aumento do título de VDRL coletado na internação para o parto indica que houve uma reinfecção, portanto o RN deverá ser submetido aos seguintes exames: hemograma completo, radiografia de ossos longos e líquor. Apesar de assintomático, deverá ser instituído tratamento com penicilina cristalina ou procaína, dependendo do resultado do líquor. Como o VDRL do RN é reagente, não será tratado com penicilina benzatina, mas sim, com penicilina cristalina ou penicilina procaína.',
    commentary: 'Apesar do tratamento adequado no início da gestação, o aumento do título de VDRL coletado na internação para o parto indica que houve uma reinfecção, portanto o RN deverá ser submetido aos seguintes exames: hemograma completo, radiografia de ossos longos e líquor. Apesar de assintomático, deverá ser instituído tratamento com penicilina cristalina ou procaína, dependendo do resultado do líquor. Como o VDRL do RN é reagente, não será tratado com penicilina benzatina, mas sim, com penicilina cristalina ou penicilina procaína.',
    reference: 'Ministério da Saúde - Protocolo Clínico e Diretrizes Terapêuticas para Prevenção da Transmissão Vertical de HIV, Sífilis e Hepatites Virais, junho/2020',
    tags: ['infectologia', 'neonatologia']
  },
  {
    id: 'tp2021-42',
    module: 'Pediatria',
    text: 'Menino, 9 anos, claudicando da perna direita há um mês. Há duas semanas tem referido dor na virilha e região anteromedial da coxa ou no joelho, também à direita, principalmente após correr ou jogar futebol. Nega febre, trauma e infecção, sinais flogísticos articulares antecedendo o quadro atual. Exame físico: limitação da mobilidade de abdução, flexão e rotação interna de quadril. A hipótese diagnóstica mais provável é:',
    options: [
      '(A) Dor do crescimento.',
      '(B) Doença de Legg-Calvé-Perthes.',
      '(C) Doença de Osgood-Schlatter.',
      '(D) Sinovite transitória do quadril.'
    ],
    correctAnswer: 1,
    explanation: 'A doença de Legg-Calvé-Perthes é um transtorno no quadril de etiologia desconhecida associada a uma interrupção temporária do suprimento sanguíneo na epífise femoral proximal, levando a osteonecrose e deformidade da cabeça do fêmur. Acomete mais meninos na idade entre 4 e 8 anos. O sinal clínico cardeal é a limitação de abdução e rotação interna.',
    commentary: 'A doença de Legg-Calvé-Perthes é um transtorno no quadril de etiologia desconhecida associada a uma interrupção temporária do suprimento sanguíneo na epífise femoral proximal, levando a osteonecrose e deformidade da cabeça do fêmur. Acomete mais meninos (proporção de 4:1) na idade entre 4 e 8 anos de idade. Em geral a apresentação clínica mais frequente é a claudicação de duração variável. A dor, quando presente, se manifesta na virilha ou na região anteromedial da coxa ou na região do joelho e relacionada a atividade. Ao exame pode ou não haver encurtamento, mas o principal sinal é a limitação da rotação interna do quadril. A “dor do crescimento” é uma dor geralmente bilateral e noturna sem limitação física. A doença de Osgood-Schlatter se manifesta na tuberosidade anterior da tíbia e a sinovite transitória do quadril dura menos que 15 dias.',
    reference: 'Reumatologia para pediatras, Sheila Knupp Feitosa de Oliveira, 2ª ed, 2014.',
    tags: ['reumatologia', 'ortopedia']
  },
  {
    id: 'tp2021-43',
    module: 'Pediatria',
    text: 'Menina, 12 meses de idade, chega à emergência devido a quadro de vômitos que se iniciou há 1 dia (3 episódios) acompanhados de diarreia (8 episódios nas últimas 24h), fezes volumosas, líquidas, com odor fétido, sem sangue ou muco. A criança é previamente hígida e frequenta escola, está bebendo avidamente a água oferecida. Exame físico: bom estado geral, chorosa, olhos levemente encovados, saliva pouco espessa, tempo de enchimento capilar 2-3seg; peso = 10 kg; FC = 120 bpm; FR = 30 irpm. Diante destes achados, a conduta inicial é:',
    options: [
      '(A) Hidratação com terapia de reidratação oral na unidade de emergência até que desapareçam os sinais de desidratação.',
      '(B) Infusão intravenosa de soro fisiológico 20 mL/kg em 20min e repetir até que a criança fique hidratada.',
      '(C) Expansão intravenosa com soro fisiológico ou ringer lactato 10-20 mL/kg em 10min e indicar hospitalização.',
      '(D) Liberar com prescrição de sais de reidratação oral, alimentação habitual e oferta de líquidos abundante.'
    ],
    correctAnswer: 0,
    explanation: 'Os sinais clínicos indicam uma desidratação leve a moderada, mas a paciente está tolerando via oral e bebe avidamente, o que possibilita e indica a hidratação oral supervisionada baseada no Plano B da OMS.',
    commentary: 'Os sinais clínicos indicam uma desidratação leve cujo tratamento preconizado inicialmente é a reidratação oral na unidade de saúde sob supervisão (Plano B), e apesar da história de vômitos, o lactente está aceitando líquido por via oral e não apresenta sinais de gravidade extrema ou choque que indicassem expansão intravenosa (Plano C).',
    reference: 'Manejo da Diarreia Aguda OMS – 2016. SBP - Diarreia aguda: diagnóstico e tratamento, 2017.',
    tags: ['gastroenterologia', 'atenção primária']
  },
  {
    id: 'tp2021-44',
    module: 'Pediatria',
    text: 'Menino, 9 anos, brincando sobre os dormentes do trilho do trem ao anoitecer quando sentiu uma picada ardida e extremamente dolorosa sendo que o local edemaciou e ficou vermelho, não conseguindo identificar o bicho que o havia picado. Chega ao hospital 1 hora após com dor intensa no local da picada, sudorese copiosa, vômitos profusos, taquicardia, hipertensão e dispneia, além de dor abdominal, intercalando períodos de sonolência com agitação. A conduta é:',
    options: [
      '(A) Soro antiofídico crotálico, sintomáticos e acompanhamento da função renal pelo risco de lesão renal aguda.',
      '(B) Soro antilonômico e monitoramento pelo risco de coagulopatia.',
      '(C) Soro antiescorpiônico, sintomáticos com monitoração cardiocirculatória pelo risco de choque cardiogênico e edema agudo de pulmão.',
      '(D) Soro antiofídico botrópico e acompanhamento das lesões do local da picada por risco de infecção e síndrome compartimental.'
    ],
    correctAnswer: 2,
    explanation: 'O acidente ocorreu ao anoitecer seguido de dor excruciante e rápida progressão para sintomas autonômicos sistêmicos (sudorese, vômitos profusos, taquicardia, manifestações cardiorrespiratórias), indicando escorpionismo grave. A conduta imediata consiste em soro antiescorpiônico e cuidados intensivos pelo risco cardiogênico.',
    commentary: 'O escorpião é animal peçonhento de hábitos noturnos quando sai para se alimentar. Sua picada causa descarga autonômica maciça adrenérgica e colinérgica, levando, na dependência da intensidade, a falência cardiocirculatória (choque cardiogênico e edema pulmonar agudo) que é a principal causa de mortalidade. Exige aplicação rápida de soro escorpiônico.',
    reference: 'Martin JG, Fioretto JR, Carpi MF. In: Emergências Pediátricas, Atheneu, 2019.',
    tags: ['toxicologia', 'urgência e emergência']
  },
  {
    id: 'tp2021-45',
    module: 'Pediatria',
    text: 'Menina, 15 anos, é trazida pelo namorado de 20 anos ao Pronto Socorro devido a um quadro de desidratação grave. Após o tratamento inicial, foi verificada a história de compulsão alimentar e vômitos. Além disso, a paciente faz uso excessivo de laxante. Após correção do choque e chegada dos pais, a adolescente solicitou para não contar aos pais sobre o transtorno alimentar e o namoro, fatos desconhecidos pela família. A melhor maneira de abordar esse caso sobre o sigilo profissional é:',
    options: [
      '(A) Revelar na situação do namoro porque a paciente menor de idade apresenta risco de IST e gravidez.',
      '(B) Manter o sigilo profissional relacionado ao transtorno alimentar e namoro conforme solicitado pela adolescente.',
      '(C) Revelar o sigilo profissional a seus pais, relacionado ao transtorno alimentar da paciente menor de idade.',
      '(D) Revelar o sigilo profissional da adolescente a seus representantes referente ao transtorno alimentar e namoro.'
    ],
    correctAnswer: 2,
    explanation: 'O sigilo sobre as preferências e relações afetivas (o namoro) deve ser integralmente preservado. Porém, um transtorno alimentar grave que causou desidratação grave com choque hipovolêmico representa risco iminente de graves danos e óbito à menor, justificando a quebra de sigilo apenas referente a essa patologia.',
    commentary: 'Conforme Código de Ética Médica: “É vedado ao médico revelar sigilo profissional relacionado a paciente menor de idade, inclusive a seus pais, desde que o menor tenha capacidade de discernimento, salvo quando a não revelação possa acarretar dano ao paciente.” No quadro relatado, o transtorno alimentar acarreta nítido perigo de dano somático severo devido aos episódios de choque e laxantes, exigindo ciência parental para manejo de segurança. Informações sobre namoro continuam sob sigilo.',
    reference: 'Conselho Federal de Medicina - Código de Ética Médica.',
    tags: ['ética médica', 'psiquiatria']
  },
  {
    id: 'tp2021-46',
    module: 'Pediatria',
    text: 'Lactente, 3 meses, com história de vômitos após todas as mamadas. Mãe refere que algumas vezes o conteúdo alimentar sai pelas narinas, mas nega cianose, tosse ou outros sintomas relacionados ao quadro. O lactente encontra-se com bom estado geral e está no escore 0 para peso e comprimento. A conduta é:',
    options: [
      '(A) Iniciar tratamento farmacológico para doença do refluxo gastroesofágico.',
      '(B) Solicitar exame radiológico contrastado do esôfago, estômago e duodeno.',
      '(C) Tranquilizar os familiares pois se trata de refluxo gastroesofágico fisiológico.',
      '(D) Solicitar pHmetria esofágica de 24 horas para avaliar esofagite péptica.'
    ],
    correctAnswer: 2,
    explanation: 'Lactente saudável, em aleitamento, apresentando regurgitações ou vômitos pós-prandiais indolores, sem engasgos incapacitantes ou cianose, e mantendo ótimo desenvolvimento pondero-estatural (Z-score 0), é classificado como "regurgitador feliz" (refluxo gastroesofágico fisiológico). A conduta consiste apenas em suporte educativo e tranquilização familiar.',
    commentary: 'O lactente apresenta bom ganho de peso e estatura, bom estado geral e ausência de complicações, caracterizando o clássico refluxo fisiológico do lactente. Não há indicação para investigações ou exames diagnósticos invasivos (como pHmetria ou REED) e nenhuma terapia medicamentosa está sugerida.',
    reference: 'SOCIEDADE BRASILEIRA DE PEDIATRIA. Tratado de Pediatria. Editora Manole, 2017.',
    tags: ['gastroenterologia', 'puericultura']
  },
  {
    id: 'tp2021-47',
    module: 'Pediatria',
    text: 'Menino, 5 anos, acorda pela manhã e a mãe observa o aparecimento de edema facial, marcadamente bipalpebral. Evolui com edema generalizado, acometendo os membros inferiores e parede do abdômen ao longo da semana. Refere diminuição da diurese sem outras alterações urinárias. Nega doenças anteriores. Exame físico: PA entre percentil 50 e 90 para a idade, sexo e percentil de altura. As alterações laboratoriais esperadas são:',
    options: [
      '(A) Hematúria e cilindros hemáticos em Urina tipo 1 (EAS).',
      '(B) Proteinúria maciça e colesterol total e frações aumentadas.',
      '(C) Consumo de complemento C3 e complemento total CH50.',
      '(D) Antiestreptolisina (ASLO) aumentada e hematúria.'
    ],
    correctAnswer: 1,
    explanation: 'A instalação insidiosa de edema generalizado (anasarca) associada a níveis tensionais normais em pré-escolar é o protótipo clínico da Síndrome Nefrótica Idiopática (geralmente por doença de lesão mínima). Laboratorialmente, caracteriza-se por proteinúria massiva e hipercolesterolemia com hipoalbuminemia.',
    commentary: 'O quadro clínico descreve paciente com fenótipo sugestivo de Síndrome Nefrótica. A proteinúria intensa leva a hipoalbuminemia acentuada, a qual reduz a pressão oncótica capilar gerando edema volumoso. Em resposta, há aumento reflexo da síntese hepática de lipoproteínas, elevando sobremaneira o colesterol urinário e circulante. Hematúria e consumo de complemento apontariam para diagnóstico nefrítico.',
    reference: 'Nefrologia Pediátrica - Prática Clínica, SBP.',
    tags: ['nefrologia']
  },
  {
    id: 'tp2021-48',
    module: 'Pediatria',
    text: 'Menino, 1 ano e 6 meses, apresentando há dois dias disfonia, tosse seca de padrão irritativo, com aumento progressivo de intensidade e frequência, e temperatura aferida de 37,5 ºC. Exame físico: bom estado geral com presença de coriza hialina, estridor, taquidispneia, com retração intercostal e subdiafragmática, ausculta pulmonar sem alterações. SatO2 = 97%. A conduta inicial é:',
    options: [
      '(A) Antibioticoterapia, hidratação, inalação com vasoconstritor.',
      '(B) Hidratação e aspiração de secreções em vias aéreas superiores.',
      '(C) Hidratação, inalação com vasoconstritor e corticoterapia.',
      '(D) Antibioticoterapia, oxigenoterapia, corticoterapia, hidratação.'
    ],
    correctAnswer: 2,
    explanation: 'Quadro clínico de Crupe Viral Aguda (Laringoesofagite/laringite estridulosa) marcada por disfonia, estridor respiratório e desconforto de vias superiores, mas com oximetria excelente (97%). Exige laringificação de urgência com inalação de adrenalina (vasoconstritor) e corticoterapia sistêmica (geralmente dexametasona).',
    commentary: 'O estridor associado à obstrução laringotraqueal alta sugere inflamação glótica de etiologia viral (laringite). Nos quadros de crupe em que há desconforto moderado evidenciado pelas tiragens, as intervenções comprovadamente eficazes são o uso de adrenalina inalatória nebulizada (para redução local rápida da estenose por vasoconstrição capilar) e corticoide de ação prolongada.',
    reference: 'Programa de Atualização em Laringites Agudas — Sociedade Brasileira de Pediatria.',
    tags: ['pneumologia', 'urgência e emergência']
  },
  {
    id: 'tp2021-49',
    module: 'Pediatria',
    text: 'Menina, 13 anos, trazida à consulta com queixa de irregularidade menstrual, constipação e queda de cabelo. A menarca foi aos 11 anos. A mãe se queixa que a filha já vinha crescendo pouco nos últimos anos e que atualmente parou de crescer, ficando sua estatura abaixo do padrão familiar. Tem um primo por parte da mãe com diabetes mellitus tipo 1. Exame físico: aumento do pescoço na região da tireoide e uma lesão hipocrômica na região genital. O diagnóstico e resultados esperados de dosagem de T4 livre e TSH são:\n(Valores de normalidade para T4livre = 0,7 – 1,5 ng/dL e TSH = 0,3 – 4,0 mUI/L).',
    options: [
      '(A) Doença de Graves; T4livre = 0,4 ng/dL e TSH = 25 mUI/L.',
      '(B) Tireoidite de Hashimoto; T4livre = 0,5 ng/dL e TSH = 25 mUI/L.',
      '(C) Nódulo benigno; T4livre = 2,3 ng/dL e TSH < 0,01 mUI/L.',
      '(D) Bócio puberal; T4livre = 1,0 ng/dL e TSH = 2,0 mUI/L.'
    ],
    correctAnswer: 1,
    explanation: 'O quadro de parada de crescimento estatural, bócio, xerose/queda de cabelos, irregularidade menstrual e constipação em adolescente com predileção autoimune (área despigmentada sugestiva de vitiligo vulvar e primo com DM1) é indicativo de hipotireoidismo autoimune, cuja forma principal é a Tireoidite de Hashimoto.',
    commentary: 'A tireoidite crônica linfocítica (Hashimoto) é a principal etiologia do bócio e do hipotireoidismo adquirido na população infantojuvenil. Seus fatores predisponentes envolvem herança autoimune poligênica (associação descrita com vitiligo e diabetes tipo 1 na linhagem familiar). O diagnóstico hormonal de hipotireoidismo primário estabelece baixos níveis de hormônios periféricos (T4 livre) sob maciça estimulação hipofisária (TSH elevado).',
    reference: 'Nelson Tratado de Pediatria. Editora Elsevier, 20ª ed.',
    tags: ['endocrinologia']
  },
  {
    id: 'tp2021-50',
    module: 'Pediatria',
    text: 'Menino, 8 anos, atendido em Pronto Socorro, com queixa de cefaleia, inapetência e adinamia há cerca de 2 meses. Tem história patológica pregressa de rinite alérgica e IVAS de repetição. Nos últimos 15 dias apresenta irritabilidade, piora da cefaleia principalmente no período noturno e vômitos esporádicos. A conduta é:',
    options: [
      '(A) Encaminhamento para o neurologista.',
      '(B) Solicitação de eletroencefalograma.',
      '(C) Encaminhamento para otorrinolaringologista.',
      '(D) Solicitação de tomografia computadorizada de crânio.'
    ],
    correctAnswer: 3,
    explanation: 'Cefaleia de caráter subagudo e progressivo, com despertares noturnos bem marcados por dor exuberante, acompanhada por alterações de comportamento (irritabilidade) e vômitos espontâneos constitui sinal clássico de alerta cerebral para hipertensão intracraniana. Demanda imediata realização de exame de imagem (TC de crânio) para descartar neoplasias do SNC.',
    commentary: 'Presença de sinais de alarme ("red flags") em cefaleias na infância (padrão progressivo em semanas, dor noturna relevante ou logo ao levantar, vômitos em jato, manifestações comportamentais) exigem de pronto a exclusão de lesão expansiva estrutural craniana, como meduloblastoma ou astrocitoma. A tomografia computadorizada craniocerebral é o exame mais ágil disponível para esse escopo de urgência.',
    reference: 'Cefaleias na Infância—Diretrizes do Departamento Científico de Neurologia Pediátrica, SBP.',
    tags: ['neurologia', 'oncologia', 'urgência e emergência']
  },
  {
    id: 'tp2021-51',
    module: 'Pediatria',
    text: 'Pré-escolar, levado ao pediatra por apresentar lesão eritematosa em fossas ante cubitais e poplíteas há 1 mês. Mãe refere que as lesões são acompanhadas por prurido que piora com o suor. Exame físico: placas e pápulas eritematosas que desaparecem à digito pressão nos locais descritos. Apresenta xerose cutânea e pitiríase alba em face. É critério diagnóstico para a doença apresentada:',
    options: [
      '(A) Linfocitose.',
      '(B) IgE sérica elevada.',
      '(C) IgA sérica diminuída.',
      '(D) Leucocitose com eosinofilia.'
    ],
    correctAnswer: 1,
    explanation: 'A dermatite atópica clássica flexural (lesões pruriginosas localizadas em dobras cutâneas antecubitais e poplíteas) associada a xerodermia e pitiríase alba facial é guiada pelos critérios clínicos estabelecidos por Hanifin e Rajka. Entre os dados menores aceitos, a elevação sérica de IgE destaca-se como critério imunológico clássico.',
    commentary: 'Os critérios de Hanifin e Rajka constituem o padrão diagnótico na Dermatite Atópica. Exigem a preexistência de critérios maiores (prurido intenso, distribuição típica flexural na infância/liquenificação, cronicidade recidivante e história familiar de atopia). Entre os critérios secundários/menores estão achados de hipersensibilidade cutânea e exames laboratoriais como reatividade imunoespecífica e títulos elevados de IgE circulante.',
    reference: 'Consenso de Dermatite Atópica da SBP/SBD.',
    tags: ['dermatologia', 'alergia e imunologia']
  },
  {
    id: 'tp2021-52',
    module: 'Pediatria',
    text: 'Criança, sexo feminino, 18 meses, chega ao Pronto Socorro de Pediatria com quadro de febre (39 ºC) aferida em casa. A paciente vem alternando episódios de irritabilidade e letargia há 1 dia. A mãe refere que ela não está aceitando o leite, está hipoativa e que apresentou quadro de vômitos, cerca de 6 episódios em abundância. Ao exame físico: FC = 180 bpm, FR = 65 irpm, PA = 60 x 40 mmHg, saturação de 89% em ar ambiente, pele mosqueada, tempo de enchimento capilar de 5 segundos, pulsos periféricos ausentes e pulso central filiforme. A conduta imediata é:',
    options: [
      '(A) Reposição volêmica com solução glicosada.',
      '(B) Expansão volêmica com albumina.',
      '(C) Administração de aminas vasoativas em bomba de infusão.',
      '(D) Reposição volêmica com solução cristaloide.'
    ],
    correctAnswer: 3,
    explanation: 'Choque séptico clássico na infância em fase descompensada de perfusão (hipotensão acentuada, pulsos ausentes, livedo reticular/mosqueamento cutâneo e letargia). A ação prioritária absoluta para manutenção de perfusão de órgãos é a infusão rápida e agressiva de solução cristaloide isotônica isotônica (Soro Fisiológico ou Ringer Lactato).',
    commentary: 'O choque séptico representa uma emergência pediátrica onde o tempo dita o prognóstico ventilatório e vital. Sinais de hipotensão severa numa criança toxemiada exigem imediato acesso vascular intraósseo ou periférico calibroso e início tempestivo de infusão isotônica de volume sob pressão em frações de 20mL/kg. Glicose não serve para fins de expansão intravascular imediata.',
    reference: 'Suporte Avançado de Vida em Pediatria (PALS), Diretrizes American Heart Association / SBP.',
    tags: ['urgência e emergência', 'infectologia']
  },
  {
    id: 'tp2021-53',
    module: 'Pediatria',
    text: 'Lactente, 6 meses, nascido a termo, com peso ao nascimento de 3000 gramas. Após mudar de município, a mãe quer orientações sobre alimentação com nova equipe médica. Refere que ele está bem, tendo recebido aleitamento materno exclusivo até os quatro meses de idade, sendo então necessária a complementação de 250 mL de fórmula infantil por dia. Além disso, ela dá à criança 1mg de ferro elementar/kg de peso/dia, desde o quarto mês de idade. Nesse caso, seguindo as recomendações do Ministério da Saúde, a orientação em relação à suplementação de ferro é:',
    options: [
      '(A) Manter o uso de ferro elementar na dose que está utilizando até os 24 meses de idade.',
      '(B) Suspender o uso do ferro elementar, pois já está recebendo fórmula infantil que contém quantidades necessárias desse elemento.',
      '(C) Suspender o uso do ferro elementar, pois além do aleitamento materno, irá receber alimentação complementar.',
      '(D) Aumentar a dose de sulfato ferroso para 2 mg/kg de peso/dia devido à velocidade de crescimento no primeiro ano de vida.'
    ],
    correctAnswer: 0,
    explanation: 'Lactentes nascidos a termo e com bom peso de nascimento, que recebem leite materno em regime predominante ou alimentação cujo aporte diário de fórmula de transição seja inferior a 500mL/dia (paciente ingere apenas 250mL) devem manter suplementação preventiva de Ferro (1mg/kg/dia) até completar os 24 meses.',
    commentary: 'Conforme diretrizes atualizadas da Sociedade Brasileira de Pediatria, menores nascidos no termo e peso favorável em regime de aleitamento completo (ou misto que tome <500mL de fórmula esterificada por dia) recebem aporte profilático de ferro complementar visando prevenção de anemia ferropênica em períodos de estirão puberal. A profilaxia clássica prossegue de forma regular durante todo o primeiro e segundo anos de vida.',
    reference: 'Consenso Preventivo de Anemia Ferropriva e Micronutrientes, SBP (Nutrologia/Hematologia).',
    tags: ['puericultura', 'nutrologia']
  },
  {
    id: 'tp2021-54',
    module: 'Pediatria',
    text: 'Recém-nascido, 4 dias de vida, deu entrada na unidade de pronto atendimento apresentando hipoatividade, dificuldade para mamar e história de um episódio de vômito há 1 hora. Pré-natal sem intercorrências, parto vaginal com 37 semanas e tempo de bolsa rota de 24 horas. Peso de nascimento do RN: 2575 g tendo alta da maternidade há 2 dias em aleitamento materno exclusivo. Exame físico: regular estado geral, hipoativo, hiporreativo, corado, desidratado 1+/4+, levemente taquipneico, taquicárdico, ictérico zona II de Kramer, e acianótico. Fontanela anterior plana e normotensa. Tempo de enchimento capilar de 3 segundos. Realizados exames laboratoriais para triagem infecciosa incluindo coleta de líquor que evidenciou aumento de celularidade, hiperproteinorraquia, hipoglicorraquia e bacterioscopia com presença de cocos Gram-positivo. O agente etiológico mais provável é:',
    options: [
      '(A) Escherichia coli.',
      '(B) Streptococcus agalactiae.',
      '(C) Neisseria meningitidis.',
      '(D) Streptococcus β-hemolítico do grupo A.'
    ],
    correctAnswer: 1,
    explanation: 'Quadro clínico de sepse/meningite neonatal de instalação precoce (primeiras 72-96h), com antecedente gravídico de rotura prematura e prolongada de membranas (bolsa rota >18h) associada a líquor infeccioso exibindo cocos Gram-positivos purificados. O patógeno mais prevalente nessas condições é o Streptococcus agalactiae (Estreptococo do Grupo B).',
    commentary: 'O Streptococcus agalactiae (EGB) e a E. coli representam os pilares das infecções bacterianas precoces no âmbito neonatal. A colonização do canal vaginal materno coloca o feto sob risco de aspiração ascensional intraparto, amplificado pelo cenário de bolsa rota duradoura (24 horas). O diagnóstico de cocos Gram-positivos no sedimento liquórico fecha o canal para exclusão de bacilos Gram-negativos (como a E. coli).',
    reference: 'Guia de Condutas de Assistência ao Recém-Nascido — SBP/Ministério da Saúde.',
    tags: ['neonatologia', 'infectologia']
  },
  {
    id: 'tp2021-55',
    module: 'Pediatria',
    text: 'Menina, pré-escolar de três anos, é atendida no ambulatório de pediatria com história de pneumonia diagnosticada há 30 dias sem melhora radiológica. Fez uso de amoxicilina por 10 dias, cefalosporina por 7 dias e macrolídeo por 10 dias. A mãe de Joana traz três radiografias realizadas nesse período: a primeira radiografia demonstrava um infiltrado pulmonar de opacidade homogênea, em lobo superior direito; a segunda radiografia (6 dias após a primeira) demonstrava um infiltrado pulmonar com densidade heterogênea e fugaz em lobo inferior direito e a terceira (15 dias após a primeira) demonstrava um infiltrado pulmonar de opacidade homogênea em lobo superior esquerdo. Além dos raios X, a mãe de Joana trazia um hemograma com leucocitose discreta e eosinofilia de 21%. A hipótese diagnóstica é:',
    options: [
      '(A) Síndrome de Löefller.',
      '(B) Aspiração de corpo estranho.',
      '(C) Pneumonia atípica.',
      '(D) Bronquiolite.'
    ],
    correctAnswer: 0,
    explanation: 'A tríade de sintomas pulmonares recorrentes, infiltrados migratórios e fugazes (que mudam de localização nos lobos sem padrão anatômico definido) e intensa eosinofilia periférica (21%) constitui o quadro patognomônico da Síndrome de Löffler, decorrente do ciclo pulmonar (ciclo de Loss) executado por larvas de helmintos (como Ascaris lumbricoides ou ancilostomídeos).',
    commentary: 'A pneumonite eosinofílica autolimitada (Löffler) ocorre pela passagem transalveolar larvária de parasitas intestinais específicos. Causa resposta imune rica em eosinófilos originando as consolidationes radiológicas fugazes, erradamente manejadas com cursos repetitivos inócuos de antibióticos por serem confundidas com pneumonias bacterianas primárias.',
    reference: 'Infectologia e Doenças Parasitárias na Infância - Sociedade Brasileira de Pediatria.',
    tags: ['pneumologia', 'infectologia']
  },
  {
    id: 'tp2021-56',
    module: 'Pediatria',
    text: 'Menina, 2 anos, apresentando pubarca, acne e fome excessiva há 6 meses. Ao exame físico é evidenciado estatura acima do percentil 95, obesidade, estadiamento puberal de Tanner = M1P3, hipertrofia de clitóris, estrias vinhosas em abdome, PA = 100 x 70 mmHg (>P95). A hipótese diagnóstica mais provável é:',
    options: [
      '(A) Tumor de supra-renal.',
      '(B) Pubarca precoce idiopática.',
      '(C) Puberdade precoce central.',
      '(D) Hiperplasia congênita de suprarrenal.'
    ],
    correctAnswer: 0,
    explanation: 'Cenário clínico exuberante em lactente de 2 anos combinando sinais de virilização androgênica grave (pubarca no limite P3, clitoromegalia severa e acne) com marcadores cardinais de excesso de glicocorticoides/Cushing (obesidade rápida, hiperfagia, estrias vinhosas e hipertensão arterial grave). Essa hipersecreção mista adrenocortical é típica de neoplasias corticais (tumor de supra-renal).',
    commentary: 'Os tumores adrenocorticais na infância respondem por quadros de puberdade precoce periférica isossexual ou heterossexual de instalação agressiva. O achado misto de sintomas de Cushing e virilização acelerada decorre da produção aberrante simultânea de esteroides sexuais e cortisol livre pelas células adrenocorticais neoplásicas. A hiperplasia adrenal congênita se manifestaria mais precocemente ou não virilizaria em tal intensidade mista em fase de 2 anos com o Cushing concomitante.',
    reference: 'Oncologia Pediátrica — SBP; Nelson Tratado de Pediatria.',
    tags: ['endocrinologia', 'oncologia']
  },
  {
    id: 'tp2021-57',
    module: 'Pediatria',
    text: 'Menino, 5 anos, previamente hígido, refere história de febre baixa não medida há 5 dias e dor de garganta, associado a adinamia e mal estar. Exame físico: BEG, T = 37,8º, corado, hidratado. Vários linfonodos submandibulares, cervicais anteriores e posteriores de 2 cm de diâmetro, móveis e indolores, sem sinais flogísticos. Discreto exantema maculopapular cutâneo. Otoscopia sem alterações. Orofaringe: hiperemiada e hipertrofiada bilateralmente, sem secreção purulenta. Pulmões limpos. Coração: BRNF sem sopros. Abdome: fígado não palpável; baço percutível e palpável há 2 cm do RCE de consistência levemente endurecida. Genital masculino típico. Membros sem alterações. O agente etiológico é:',
    options: [
      '(A) Mycobacterium tuberculosis.',
      '(B) Togavírus.',
      '(C) Parvovírus humano B19.',
      '(D) Vírus Epstein Barr.'
    ],
    correctAnswer: 3,
    explanation: 'A síndrome de mononucleose infecciosa clássica caracteriza-se por faringoamigdalite hipertrófica, febre de padrão linfático crônico, exantema cutâneo eventual, linfadenopatia generalizada com nítido compromisso de cadeias cervicais posteriores/occipitais e visceromegalia (esplenomegalia inflamatória palpável). Doença causada predominantemente pelo vírus Epstein-Barr.',
    commentary: 'O acometimento linfático difuso cervical, splenomegalia inflamatória e irritabilidade em pré-escola na presença de faringe congestionada mímica a mononucleose infecciosa típica (Epstein-Barr - EBV). O Togavírus (rubéola) e Parvovírus (eritema face esbofeteada) cursam com pródomos mais curtos, exantemas específicos e padrão linfadenopático distinto ou ausente de baço palpável duradouro.',
    reference: 'Tratado de Pediatria SBP — Seção de Doenças Infecciosas.',
    tags: ['infectologia']
  },
  {
    id: 'tp2021-58',
    module: 'Pediatria',
    text: 'Menino, 14a, é levado à emergência por sua mãe, em virtude de “vômitos e dor na virilha” há 2 horas, história anterior de crise semelhante. Desta vez estava jogando futebol e ao chegar a casa vomitou 2 vezes e começou a sentir dores na região pélvica. Exame físico: afebril, discreta palidez, fácies de dor, FC = 80 bpm, dor hemiescrotal esquerda com irradiação para a região inguinal e baixo ventre, reflexo cremastérico ausente. A hipótese diagnóstica é:',
    options: [
      '(A) Torção do cordão espermático.',
      '(B) Epididimite aguda.',
      '(C) Torção do apêndice testicular.',
      '(D) Hérnia inguinal encarcerada.'
    ],
    correctAnswer: 0,
    explanation: 'A manifestação súbita de dor violenta em hemiescroto durante atividade desportiva em adolescente puberal, com dor inguinal irradiada e perda unilateral do reflexo cremastérico (Sinal de Rabinowitz), é indicativa de Torção do Cordão Espermático (urgência urológica absoluta).',
    commentary: 'É a principal urgência urológica, mais frequente em adolescentes. A história é fundamental: história anterior de crise semelhante, fazendo exercício físico, em puberdade. Exame físico: Ausência do reflexo cremastérico (Sinal de Rabinowitz). Pode haver piora da dor com a elevação do testículo. O diagnóstico dita conduta cirúrgica reconstrutiva imediata ou orquidopexia exploradora nas primeiras 6 horas de isquemia glandular.',
    reference: 'Urgências Urológicas em Pediatria — Departamento Científico de Cirurgia Pediátrica, SBP.',
    tags: ['urgência e emergência', 'urologia']
  },
  {
    id: 'tp2021-59',
    module: 'Pediatria',
    text: 'Menina, com 12 dias de vida, é levada à emergência, devido a vômitos e recusa alimentar há 5 dias. Nasceu de parto normal a termo, adequado para idade gestacional. Está em aleitamento materno exclusivo, sem recuperação do peso de nascimento. Ao exame: regular estado geral; hipoativa; frequência cardíaca 158bpm; pressão arterial 68x42mmHg; pulsos periféricos finos; tempo de enchimento capilar: 3 segundos; frequência respiratória 64irpm; saturação de O2 95%; abdome globoso, com ruídos hidroaéreos normais; genitália feminina típica, com clitoromegalia. Diante desse quadro clínico e laboratorial, o diagnóstico mais provável é:',
    options: [
      '(A) Doença do refluxo gastroesofágico',
      '(B) Hiperplasia adrenal congênita',
      '(C) Estenose hipertrófica do piloro',
      '(D) Alergia à proteína do leite de vaca'
    ],
    correctAnswer: 1,
    explanation: 'A gravidade hemodinâmica no recém-nascido (choque circulatório desidratativo/salino) associada a vômitos recorrentes e clitoromegália sem testículos palpáveis é indicativo de puberdade heterossexual precoce periférica provocada pela forma clássica perdedora de sal da Hiperplasia Adrenal Congênita.',
    commentary: 'A síndrome perdedora de sal na Hiperplasia Adrenal Congênita decorre comumente do defeito na enzima 21-hidroxilase. Provoca perda volumétrica renal grave de sódio por falta de aldosterona, originando hiponatremia extrema, hipercalemia e choque de 7 a 14 dias de vida. A virilização física em recém-nascido feminino de genitália típica (clitoromegalia) auxilia fortemente o raciocínio clínico emergencial.',
    reference: 'Consenso em Hiperplasia Adrenal Congênita, Sociedade Brasileira de Endocrinologia e Metabologia / SBP.',
    tags: ['endocrinologia', 'neonatologia']
  },
  {
    id: 'tp2021-60',
    module: 'Pediatria',
    text: 'Uma menina de 3 anos é levada ao pronto-socorro por sua mãe, devido a episódios de vômitos e sonolência progressiva nas últimas 24 horas. A mãe relata que a criança caiu da escada há 2 dias, mas não procurou atendimento médico na ocasião. Ao exame físico, a criança apresenta-se sonolenta, com resposta lenta a estímulos verbais. Observa-se edema e hematoma periorbital bilateral e equimoses em diferentes estágios de cicatrização nos braços e nas costas. Não há sinais de fratura evidente nos membros. A pressão arterial está dentro dos limites normais e não há sinais de infecção sistêmica. Qual é a principal hipótese diagnóstica?',
    options: [
      '(A) Abuso físico',
      '(B) Traumatismo cranioencefálico devido à queda',
      '(C) Osteogênese imperfeita',
      '(D) Hemofilia'
    ],
    correctAnswer: 0,
    explanation: 'O aparecimento de sequelas hemorrágicas multiformes em diferentes fases de reabsorção (equimoses de colorações temporais distintas na pele) correlacionado a hematoma periorbital em TCE grave suspeito e incoerência com história de trauma acidental isolado, denota alta probabilidade de abuso físico (trauma não-acidental continuado).',
    commentary: 'A disparidade entre o mecanismo presumido do acidente (queda tardia sem aviso médico) e as marcas cutâneas disseminadas em fases discrepantes cronológicas de cicatrização são o marco da Síndrome de Maus-Tratos Físicos. Sinais de hipertensão craniana traumática concomitante necessitam de internação protetiva e notificação oficial.',
    reference: 'Critérios diagnósticos da violência física ou trauma intencional infantil — Notificação e Alerta SBP, 2024.',
    tags: ['atenção primária', 'urgência e emergência']
  },
  {
    id: 'tp2026-41',
    module: 'Pediatria',
    text: 'Paciente de 4 meses é admitido em enfermaria de pediatria com quadro de tosse, secreção clara em via aérea superior há 3 dias, e os pais referem piora nas últimas 12 horas com diminuição das mamadas, temperatura de 37,5ºC e taquipneia. Ao exame físico, apresenta FR 64ipm, FC140bpm, tiragem intercostal e subdiafragmática leve, sibilos e roncos difusos, saturação de 91%. Com base no quadro clínico e diagnóstico mais provável, qual a conduta mais adequada?',
    options: [
      '(A) Administrar corticosteroide sistêmico e manter em observação ambulatorial, devido ao padrão inflamatório das vias aéreas.',
      '(B) Iniciar antibioticoterapia adequada para a idade, juntamente com suporte ventilatório não invasivo para diminuir as complicações.',
      '(C) Realizar resgate com salbutamol inalatório, associado a corticoterapia sistêmica; se saturações abaixo de 90%, indicar oxigenoterapia.',
      '(D) Devem ser realizadas medidas de suporte para manter hidratação adequada e oxigenoterapia por cânula nasal de O2.'
    ],
    correctAnswer: 3,
    explanation: 'O quadro é compatível com Bronquiolite Viral Aguda (BVA), cujo tratamento é de suporte, focado em manter a hidratação adequada e oxigenoterapia se a saturação estiver abaixo de 90-92%.',
    commentary: 'Comentários sobre a resposta correta:\n(D) Para lactentes com Bronquiolite Viral Aguda (BVA) previamente saudáveis, as principais intervenções terapêuticas são de suporte, incluindo a garantia de uma hidratação adequada (vias oral, enteral ou endovenosa, se necessário) e suporte de oxigênio (por cânula nasal de O2 ou cateter de alto fluxo) quando a saturação estiver persistentemente baixa (abaixo de 90% ou 92% dependendo do protocolo).\n\nComentários sobre os distratores:\n(A) Corticosteroides sistêmicos não têm eficácia clínica comprovada e não são recomendados rotineiramente em lactentes com BVA sem comorbidades.\n(B) Antibióticos não são indicados rotineiramente na BVA, uma vez que a etiologia é essencialmente viral (geralmente vírus sincicial respiratório - VSR).\n(C) O salbutamol inalatório (broncodilatador) e a corticoterapia sistêmica não demonstraram benefício consistente na BVA e não devem ser usados rotineiramente em lactentes de 4 meses em primeiro episódio.',
    reference: 'Tratamento da bronquiolite viral aguda (Revista de Residência Pediátrica da SBP) | FUNDAÇÃO OSWALDO CRUZ. Portal de Boas Práticas em Saúde da Mulher, da Criança e do Adolescente. Manejo Clínico da Bronquiolite em Lactentes. 2024.',
    tags: ['pneumologia', 'infectologia', 'emergência']
  },
  {
    id: 'tp2026-42',
    module: 'Pediatria',
    text: 'Criança de 8 anos dá entrada no hospital com queixa de evacuações dolorosas há 4 meses. A mãe relata que a criança evacua cerca de duas vezes por semana, fezes endurecidas e de grande volume, além de apresentar episódios ocasionais de escape fecal. Refere dor abdominal associada à evacuação, que se intensificou nas últimas 24 horas. Considerando esse quadro clínico, o diagnóstico mais provável é:',
    options: [
      '(A) Doença orgânica intestinal',
      '(B) Síndrome do intestino irritável',
      '(C) Constipação funcional',
      '(D) Adenite mesentérica'
    ],
    correctAnswer: 2,
    explanation: 'O quadro é compatível com constipação funcional segundo os critérios de Roma IV (frequência evacuatória reduzida, fezes endurecidas, dor e escape fecal na ausência de sinais de doença orgânica).',
    commentary: 'Comentários sobre a resposta correta:\n(C) A constipação funcional é diagnosticada clinicamente pelos critérios de Roma IV. A paciente apresenta frequência de evacuações ≤ 2 vezes por semana, fezes endurecidas e volumosas, dor à evacuação e episódios de escape fecal (incontinência fecal por transbordamento), sem sinais de alerta que sugiram causas orgânicas.\n\nComentários sobre os distratores:\n(A) Não há sinais de alerta (perda de peso, febre, sangramento retal macroscópico ativo, atraso no desenvolvimento pôndero-estatural) que justifiquem suspeitar de causa orgânica intestinal primária.\n(B) A Síndrome do Intestino Irritável (SII) exige dor abdominal recorrente relacionada à alteração do hábito intestinal por pelo menos 2 meses, o que não descreve o padrão clínico de retenção voluntária e escape fecal apresentados.\n(D) A adenite mesentérica cursa tipicamente com dor abdominal aguda, frequentemente associada a infecção de vias aéreas superiores recente, não se relacionando à queixa crônica de constipação e escape fecal.',
    reference: 'PEDIATRIA, Sociedade Brasileira de. Tratado de pediatria. 6. ed. Barueri: Manole, 2024.',
    tags: ['gastroenterologia']
  },
  {
    id: 'tp2026-43',
    module: 'Pediatria',
    text: 'Um recém-nascido, com 7 dias de vida, retorna ao hospital com história de recusa alimentar e irritabilidade. Ao exame físico, apresenta taquipneia, palidez cutânea, sinais de desidratação, além de coto umbilical em mumificação com odor fétido e pequenas lesões vesico-bolhosas, com áreas de hiperemia espalhadas pelo abdômen e membros superiores. Considerando o quadro clínico apresentado, a conduta adequada é:',
    options: [
      '(A) Internar, iniciar antibioticoterapia empírica intravenosa de amplo espectro após coleta de culturas e suporte clínico intensivo.',
      '(B) Prescrever antibiótico via oral e tópico, reorientar cuidados com o coto umbilical e monitorar febre, com retorno em 48 horas para reavaliação.',
      '(C) Internar, solicitar hemocultura e cultura de secreção das lesões, iniciar antibioticoterapia de acordo com os resultados das culturas.',
      '(D) Realizar cuidados locais do coto umbilical na unidade, instituir antibiótico via oral e tópico para casa e orientar sinais de alarme.'
    ],
    correctAnswer: 0,
    explanation: 'Sinais sistêmicos de alerta associados a onfalite e lesões cutâneas vesico-bolhosas em recém-nascido caracterizam sepse neonatal tardia, impondo internação imediata, culturas e antibioticoterapia empírica parenteral.',
    commentary: 'Comentários sobre a resposta correta:\n(A) O paciente apresenta manifestações sistêmicas graves (recusa alimentar, irritabilidade, taquipneia, palidez cutânea e desidratação) associadas a focos de infecção ativa localizados no coto umbilical (onfalite) e pele (lesões vesico-bolhosas tipo impetigo neonatal/síndrome da pele escaldada estafilocócica). Essa constelação clínica caracteriza sepse neonatal tardia, uma emergência médica que exige internação imediata, coleta de exames e culturas (sangue, líquor, urina) e pronto início de antibioticoterapia intravenosa de amplo espectro combinada a cuidados intensivos de suporte.\n\nComentários sobre os distratores:\n(B, D) Prescrever antibioticoterapia oral e manejo ambulatorial são condutas de extremo risco e incorretas diante de um recém-nascido com evidente comprometimento sistêmico e sinais flogísticos infecciosos cutâneo-umbilicais.\n(C) Embora a internação e a coleta de hemocultura estejam corretas, é formalmente proibido e clinicamente perigoso postergar o início da antibioticoterapia empírica até a liberação dos resultados das culturas.',
    reference: 'PEDIATRIA, Sociedade Brasileira de. Tratado de pediatria. 6. ed. Barueri: Manole, 2024.',
    tags: ['infectologia', 'neonatologia', 'emergência']
  },
  {
    id: 'tp2026-44',
    module: 'Pediatria',
    text: 'Recém-nascido, 38 semanas e 2 dias, parto vaginal, líquido amniótico claro. Ao nascer, apresentou choro fraco, respiração irregular, hipotonia, FC 88bpm e cianose de extremidades. Após os cuidados iniciais, a equipe inicia ventilação com pressão positiva (VPP) com máscara e balão. Depois de 30 segundos de VPP eficaz, apresenta FC 70bpm. Realizados mais 30 segundos de VPP com técnica corrigida, com nova FC 55bpm. Com base nas diretrizes de reanimação neonatal, o próximo passo é:',
    options: [
      '(A) Iniciar massagem cardíaca coordenada com VPP ao oxigênio (3:1), considerar acesso venoso para adrenalina, se FC permanecer < 60bpm.',
      '(B) Realizar intubação orotraqueal, providenciar acesso venoso para adrenalina, uma vez que FC < 60bpm.',
      '(C) Manter VPP e oxigênio a 21% e aguardar mais 60 segundos para decisão de massagem cardíaca.',
      '(D) Iniciar massagem cardíaca coordenada e realizar intubação orotraqueal imediata, pois com FC < 60bpm deve-se suspender VPP.'
    ],
    correctAnswer: 0,
    explanation: 'RN com FC < 60 bpm após VPP com técnica corretiva eficaz necessita do início imediato de massagem cardíaca coordenada com a VPP (relação 3:1) com oxigênio a 100% e preparação de via aérea avançada/acesso venoso.',
    commentary: 'Comentários sobre a resposta correta:\n(A) De acordo com as Diretrizes da Sociedade Brasileira de Pediatria de Reanimação Neonatal (2022), se após 30 segundos de VPP com técnica corrigida e via aérea garantida a FC do recém-nascido permanece menor que 60 bpm, está indicado o início imediato de compressões torácicas (massagem cardíaca) coordenadas com a ventilação na proporção de 3:1. Nessa fase, a concentração de oxigênio na ventilação deve ser elevada para 100%, e a equipe deve preparar o acesso vascular (veia umbilical) para eventual infusão de adrenalina se a FC se mantiver < 60 bpm após 60 segundos de massagem cardíaca eficaz coordenada com a ventilação.\n\nComentários sobre os distratores:\n(B) A intubação traqueal pode ser considerada para facilitar a coordenação da massagem cardíaca, porém o uso de adrenalina sérica requer antes a realização de pelo menos 60 segundos de massagem cardíaca adequada conjunta com ventilação.\n(C) Aguardar mais tempo com FC < 60 bpm sem iniciar compressões é incorreto e perpetua a hipóxia miocárdica.\n(D) Nunca se deve suspender a VPP durante a massagem cardíaca; a ventilação e as compressões devem atuar de forma rigorosamente coordenada.',
    reference: 'Diretrizes de Reanimação do recém-nascido ≥ 34 semanas em sala de parto da Sociedade Brasileira de Pediatria, maio 2022.',
    tags: ['neonatologia', 'emergência', 'reanimação']
  },
  {
    id: 'tp2026-45',
    module: 'Pediatria',
    text: 'Recém-nascido, 32 semanas e 4 dias, nascido por cesariana indicada por pré-eclâmpsia grave materna, Apgar 5/7, líquido com mecônio +/4+. Evolui nas primeiras horas de vida com desconforto respiratório progressivo, caracterizado por taquipneia, gemência, retrações subcostais e necessidade crescente de oxigênio, sendo encaminhado à UTI neonatal. Radiografia de tórax com padrão reticulogranular difuso, presença de broncograma aéreo e redução do volume pulmonar. Qual é o principal mecanismo fisiopatológico responsável pelo quadro apresentado?',
    options: [
      '(A) Retardo e falha na reabsorção do líquido pulmonar fetal, dinâmica de absorção de sódio pelos canais epiteliais, reduzindo a passagem de líquido dos alvéolos para o interstício e circulação.',
      '(B) Deficiência de surfactante, levando ao aumento da tensão superficial alveolar, colapso alveolar difuso, redução da complacência pulmonar e prejuízo das trocas gasosas.',
      '(C) Imaturidade do centro respiratório, que causa alternância progressiva entre períodos de respiração normal e pausas respiratórias, com respiração periódica e apneia sustentada por no mínimo 30 segundos.',
      '(D) Presença de líquido meconial, que leva à diminuição da tensão superficial alveolar e colapso alveolar, devido a obstruções dos bronquíolos adjacentes, comprometendo as trocas gasosas.'
    ],
    correctAnswer: 1,
    explanation: 'A síndrome do desconforto respiratório (doença da membrana hialina) no recém-nascido prematuro tem como base fisiopatológica a deficiência quantitativa e qualitativa de surfactante pulmonar.',
    commentary: 'Comentários sobre a resposta correta:\n(B) A história clínica (prematuro de 32 semanas exposto à pré-eclâmpsia sem trabalho de parto) associada ao quadro clínico-radiológico típico (início precoce, gemência, padrão reticulogranular difuso, broncogramas aéreos e redução volumétrica pulmonar) é patognomônica da Síndrome do Desconforto Respiratório (SDR), ou Doença da Membra Hialina. A base fisiopatológica primária da SDR é a deficiência de surfactante pulmonar devido à imaturidade pneumocitária tipo II, elevando a tensão superficial nos alvéolos, o que gera colapso alveolar progressivo (atelectasias), redução acentuada da complacência pulmonar e distúrbio ventilação-perfusão por shunt intrapulmonar.\n\nComentários sobre os distratores:\n(A) Descreve a fisiopatologia da Taquipneia Transitória do Recém-Nascido (TTRN), que cursa com pulmões hiperinsuflados e congestão hilar ao raio-X, sem padrão reticulogranular difuso ou broncogramas.\n(C) Descreve a apneia da prematuridade, que cursa com pausas respiratórias puras e sem desconforto respiratório e gemência contínuos ou alterações estruturais radiográficas.\n(D) Embora houvesse líquido meconial discreto, a Síndrome de Aspiração Meconial é típica do RN a termo ou pós-termo e sua radiografia reveals hiperinsuflação e infiltrado heterogêneo grosseiro por obstrução de pequenas vias aéreas.',
    reference: 'BUENO, A. C. et al. Neonatologia - Série Pediatria SOPERJ. 1. ed. Barueri (SP): Manole, 2021. | Tratado de Pediatria (SBP). Barueri (SP): Manole, 2025.',
    tags: ['neonatologia', 'pneumologia']
  },
  {
    id: 'tp2026-46',
    module: 'Pediatria',
    text: 'Menino, 6 anos e 2 meses, é levado à UBS por preocupação com “baixa estatura” em relação aos colegas. Ao exame, apresenta escore Z de estatura para idade < -2, com velocidade de crescimento reduzida no último ano. Não há sinais de doenças crônicas evidentes. Aguarda exames complementares, como idade óssea, TSH e IGF-1. Considerando este quadro clínico e os exames complementares solicitados, a fisiopatologia que melhor explica a principal hipótese diagnóstica é:',
    options: [
      '(A) O crescimento linear é principalmente dependente do neuroeixo e do TSH, e nesta faixa etária o crescimento é predominantemente influenciado pela qualidade nutricional.',
      '(B) A redução de GH causa aumento de IGF-1, levando ao comprometimento do crescimento ósseo e aumento do risco de osteoporose juvenil.',
      '(C) A baixa estatura ocorre por alterações de IGF-1, que inibe diretamente a placa epifisária e prejudica a regulação promovida por fatores nutricionais.',
      '(D) A deficiência de GH leva à redução da produção hepática de IGF-1, comprometendo a proliferação das cartilagens de crescimento.'
    ],
    correctAnswer: 3,
    explanation: 'A deficiência do hormônio do crescimento (GH) reduz a produção hepática e tecidual de IGF-1, o principal estimulador da proliferação condrocitária na placa de crescimento.',
    commentary: 'Comentários sobre a resposta correta:\n(D) O hormônio de crescimento (GH), secretado de forma pulsátil pela adenohipófise, atua estimulando os hepatócitos a produzirem e secretarem o fator de crescimento semelhante à insulina tipo 1 (IGF-1), que circula ligado a proteínas transportadoras. O IGF-1 é o principal mediador endócrino e parácrino do crescimento linear, agindo na placa epifisária (cartilagem de crescimento) ao estimular a proliferação, hipertrofia e diferenciação dos condrócitos. A deficiência de GH ou de sua sinalização resulta em baixos níveis de IGF-1, comprometendo a ossificação endocondral e levando à velocidade de crescimento reduzida e baixa estatura proporcional.\n\nComentários sobre os distratores:\n(A) O crescimento na infância e período escolar é fortemente dependente do eixo GH-IGF-1 e dos hormônios tireoidianos, não dependendo exclusivamente de TSH ou somente de aporte nutricional em crianças previamente hígidas.\n(B) A redução de GH leva à diminuição de IGF-1 (e não aumento), além de osteoporose juvenil não ser a manifestação característica primária desse eixo.\n(C) O IGF-1 não inibe a placa epifisária; ao contrário, ele é o principal fator estimulador da proliferação condrocitária no disco epifisário.',
    reference: 'KLIEGMAN, R. M; ST. GEME III, J. W. et al. Nelson Tratado de Pediatria. 21. ed. Rio de Janeiro: GEN Guanabara Koogan, 2022. | SBP. Tratado de Pediatria. 6. ed. Barueri: Manole, 2024.',
    tags: ['endocrinologia']
  },
  {
    id: 'tp2026-47',
    module: 'Pediatria',
    text: 'Criança, 3 anos, apresenta febre alta por 4 dias, com melhora súbita e surgimento de exantema róseo em tronco. Sem sintomas respiratórios associados. Assinale o diagnóstico mais provável.',
    options: [
      '(A) Sarampo em resolução',
      '(B) Exantema súbito clássico',
      '(C) Rubéola atípica',
      '(D) Eritema infeccioso inicial'
    ],
    correctAnswer: 1,
    explanation: 'A febre alta prolongada que desaparece repentinamente (defervescência em crise) concomitante com o surgimento imediato de exantema maculopapular róseo em tronco é característica do exantema súbito.',
    commentary: 'Comentários sobre a resposta correta:\n(B) O exantema súbito (roséola infantil), causado pelos herpesvírus humanos 6 e 7 (HHV-6 e HHV-7), é caracterizado classicamente por febre alta contínua ou remitente por 3 a 5 dias, sem causa aparente e com bom estado geral preservado na maior parte do tempo. De forma súbita, ocorre a defervescência da febre (queda da temperatura) e, no mesmo momento ou poucas horas depois, surge um exantema maculopapular róseo não pruriginoso, que se inicia em tronco e se espalha para o pescoço e membros, sumindo em poucas horas ou dias.\n\nComentários sobre os distratores:\n(A) O sarampo cursa com sintomas respiratórios e oculares marcantes (tosse, coriza, conjuntivite com fotofobia, manchas de Koplik), e o exantema surge no pico da febre, sem melhora imediata desta.\n(C) A rubéola manifesta-se com febre baixa concomitante ao exantema, acompanhada de linfadenopatia retroauricular, occipital e cervical proeminentes.\n(D) O eritema infeccioso (parvovírus B19) se caracteriza pelo exantema trifásico, iniciando com a face esbofeteada, sem pródromos febris elevados seguidos de cura imediata.',
    reference: 'Ministério da Saúde. Doenças Exantemáticas. 2022 | Sociedade Brasileira de Pediatria. 2021.',
    tags: ['infectologia', 'exantemáticas']
  },
  {
    id: 'tp2026-48',
    module: 'Pediatria',
    text: 'Uma criança de 4 anos e 3 meses é levada para consulta de rotina em um ambulatório secundário de pediatria. Durante a anamnese, a mãe relata que o filho é ativo, mas ela tem dúvidas se ele está "no tempo certo" em relação aos colegas da escola. Ao realizar o exame físico e a observação direta do desenvolvimento, o médico solicita que a criança realize algumas tarefas para avaliar os marcos do DNPM. Qual conjunto de achados adequados é esperado como marco de desenvolvimento nesta idade para esta criança?',
    options: [
      '(A) Consegue amarrar sapatos, escreve o próprio nome, apresenta ansiedade de separação com estranhos e desenha figuras humanas detalhadas.',
      '(B) Alterna os pés ao subir escadas, constrói torres de 3 - 5 cubos e possui vocabulário de aproximadamente 50 palavras, sem formar frases.',
      '(C) Copia um círculo, veste-se sozinho (exceto amarrar sapatos), pula em um pé só e articula frases completas usando conectivos.',
      '(D) Copia um losango, anda de bicicleta de duas rodas sem auxílio e já possui algum domínio de leitura e escrita funcional.'
    ],
    correctAnswer: 2,
    explanation: 'Aos 4 anos, os marcos normais de desenvolvimento incluem pular em um pé só, copiar um círculo, vestir-se sozinho (com auxílio para sapatos) e falar frases completas.',
    commentary: 'Comentários sobre a resposta correta:\n(C) Aos 4 anos de idade, os marcos típicos do desenvolvimento neuropsicomotor (DNPM) esperados incluem: no aspect motor grosseiro, pular em um pé só e alternar os pés ao descer escadas; no motor fino, conseguir copiar formas geométricas simples como um círculo; na linguagem, formar frases completas utilizando pronomes e conectivos; e na socialização/independência, vestir-se com autonomia para a maioria das peças (com exceção de tarefas complexas como laço/cadarço).\n\nComentários sobre os distratores:\n(A) Amarrar sapatos, escrever o próprio nome e desenhar figura humana detalhada são marcos do final do 5º ou 6º ano de vida (5 a 6 anos).\n(B) Construir torres de apenas 3 a 5 cubos e vocabulário limitado a 50 palavras sem formar frases são marcos típicos de crianças menores, entre 18 e 24 meses.\n(D) Copiar um losango, andar de bicicleta de duas rodas sem rodinhas e domínio inicial de leitura/escrita funcional são marcos esperados a partir dos 6 a 7 anos.',
    reference: 'SOCIEDADE BRASILEIRA DE PEDIATRIA. Tratado de Pediatria. 5. ed. Barueri: Manole, 2022.',
    tags: ['desenvolvimento', 'atenção primária']
  },
  {
    id: 'tp2026-49',
    module: 'Pediatria',
    text: 'Paciente A.R.S., 2 anos e 8 meses, sexo masculino. Possui história familiar de atraso de fala em primo paterno. Pais relatam pouco contato visual, atraso de linguagem e preferência por brincar sozinho, além de irritabilidade diante de mudanças de rotina. Ao exame físico, observam-se contato visual reduzido e movimentos repetitivos das mãos. Foi aplicado o teste de triagem M-CHAT-R/F, com resultado de alto risco. Considerando os dados clínicos e o teste aplicado, qual é a interpretação mais adequada?',
    options: [
      '(A) Resultado do M-CHAT-R/F de alto risco indica necessidade de avaliação multidisciplinar especializada para diagnóstico de transtorno do espectro autista.',
      '(B) Resultado do M-CHAT-R/F de alto risco sugere diagnóstico de deficiência intelectual global, sendo necessária avaliação multidisciplinar.',
      '(C) Resultado do M-CHAT-R/F de alto risco indica necessidade de complementar a avaliação com questionário SNAP IV para diagnóstico definitivo.',
      '(D) Resultado do M-CHAT-R/F de alto risco indica atraso motor global com necessidade de avaliação fisioterapêutica, fonoaudiológica e psicológica.'
    ],
    correctAnswer: 0,
    explanation: 'O M-CHAT-R/F é um instrumento de rastreamento para Transtorno do Espectro Autista (TEA); um resultado de alto risco indica forte suspeita clínica e impõe encaminhamento para avaliação especializada.',
    commentary: 'Comentários sobre a resposta correta:\n(A) O M-CHAT-R/F (Modified Checklist for Autism in Toddlers, Revised with Follow-Up) é uma ferramenta de rastreio/triagem do desenvolvimento validada para identificar riscos de Transtorno do Espectro Autista (TEA) em crianças entre 16 e 30 meses. Um resultado classificado como "alto risco" (pontuação ≥ 8) não sela um diagnóstico definitivo isoladamente, mas indica alta probabilidade de desvio no desenvolvimento sociocomunicativo e impõe encaminhamento prioritário para avaliação médica e multidisciplinar especializada para confirmação diagnóstica clínica.\n\nComentários sobre os distratores:\n(B) O M-CHAT-R/F foca em sinais de comunicação social e comportamentos estereotipados, não se destinando à avaliação de quociente de inteligência ou diagnóstico de deficiência intelectual.\n(C) O questionário SNAP IV é um instrumento de triagem para Transtorno do Déficit de Atenção com Hiperatividade (TDAH), não sendo aplicável para o diagnóstico ou acompanhamento inicial do risco de TEA nesta faixa etária.\n(D) Embora a criança com TEA possa necessitar de fonoaudiologia e psicologia, o teste M-CHAT-R/F não avalia especificamente marcos de desenvolvimento motor grosseiro ou fino para determinar atraso motor global.',
    reference: 'American Academy of Pediatrics. Identification, evaluation, and management of children with autism spectrum disorder. Pediatrics. 2020.',
    tags: ['desenvolvimento', 'atenção primária', 'psiquiatria']
  },
  {
    id: 'tp2026-50',
    module: 'Pediatria',
    text: 'Criança de 2 anos de idade é levada pelos pais ao pronto atendimento logo após quadro de perda de consciência, seguido de movimentação tônica e clônica de membros, com recuperação total após 3 minutos. Pais negam antecedentes relevantes e referem coriza e tosse discretos há 1 dia, sem febre. Negam episódios semelhantes anteriores e patologias de base. Pai refere que apresentava convulsões na infância. Ao exame: bom estado geral, alerta e vigil, calmo, ativo e reativo, FR 30ipm, FC 105bpm, T 38,3°C, avaliação neurológica, respiratória, cardiológica e abdominal normais para a idade. Qual a conduta mais adequada para o paciente em questão?',
    options: [
      '(A) Internar para coleta de hemocultura e realização de punção lombar, iniciar antibioticoterapia de acordo com os resultados.',
      '(B) Indicar punção lombar com análise do líquido cefalorraquidiano, após descartar, com tomografia computadorizada, a presença de edema cerebral.',
      '(C) Internar a criança para avaliação complementar com exame de imagem, punção lombar e eletroencefalograma.',
      '(D) Indicar observação clínica breve, sem necessidade de exames complementares específicos, e orientação à família quanto à benignidade do quadro, apesar do risco de recorrência.'
    ],
    correctAnswer: 3,
    explanation: 'A crise febril simples é uma entidade benigna, autolimitada e de diagnóstico clínico; a conduta baseia-se em observação clínica curta, busca do foco febril infeccioso e tranquilização familiar.',
    commentary: 'Comentários sobre a resposta correta:\n(D) O paciente apresenta um quadro clássico de crise convulsiva febril simples (crise única, generalizada do tipo tônico-clônica, com duração < 15 minutos, sem déficit neurológico pós-ictal prolongado e ocorrendo na vigência de febre - T 38,3°C). Diante de uma crise febril simples em criança com exame físico e neurológico completamente normais após o evento, o diagnóstico é estritamente clínico. Não há indicação para exames complementares invasivos (punção lombar), de imagem (TC de crânio) ou eletroencefalograma. A conduta adequada consiste em observação clínica breve na unidade, busca ativa pelo foco infeccioso extracraniano (infecção viral de vias aéreas superiores) e orientação à família sobre o caráter benigno, autolimitado da condição e do risco de recorrência em picos febris futuros.\n\nComentários sobre os distratores:\n(A, B, C) Investigações invasivas ou de imagem (punção lombar, TC de crânio) estão indicadas apenas se houver sinais meníngeos, rebaixamento persistente de consciência, crises focais repetidas, crise febril complexa ou em menores de 6 a 12 meses sem vacinação adequada, o que não se aplica ao caso.',
    reference: 'Alencar SP. Convulsão febril: aspectos clínicos e terapêuticos. Rev Med UFC. 2015. | SBP. Crise convulsiva febril na infância, 2021.',
    tags: ['neurologia', 'emergência', 'atenção primária']
  },
  {
    id: 'tp2026-51',
    module: 'Pediatria',
    text: 'Uma criança de 2 meses vem à consulta na UBS acompanhada da mãe, que relata raias de sangue nas fezes há uma semana, sem outros sintomas. Criança previamente hígida, nascida a termo, sem intercorrências neonatais, com ganho de peso e desenvolvimento adequados para a idade. Recebe apenas fórmula láctea, com preparo adequado. O exame físico está normal. Considerando a principal hipótese para o quadro, qual a conduta mais adequada?',
    options: [
      '(A) Realizar troca de fórmula para fórmula láctea sem lactose e manter acompanhamento ambulatorial em 2 a 4 semanas.',
      '(B) Realizar troca de fórmula para fórmula extensamente hidrolisada e programar teste de provocação oral em 2 a 4 semanas.',
      '(C) Realizar troca de fórmula para fórmula de aminoácidos livres e programar teste de provocação após quatro semanas de uso da nova fórmula.',
      '(D) Manter fórmula atual, iniciar antibioticoterapia via oral e reavaliar em 2 a 4 semanas.'
    ],
    correctAnswer: 1,
    explanation: 'A proctocolite alérgica por alergia à proteína do leite de vaca (APLV) é a principal suspeita para sangramento retal isolado em lactente; a conduta é a exclusão da proteína intacta através de fórmula extensamente hidrolisada.',
    commentary: 'Comentários sobre a resposta correta:\n(B) A presença de sangramento retal isolado (raias de sangue nas fezes) em um lactente de 2 meses com excelente ganho de peso, sem sintomas sistêmicos (como febre ou vômitos) e com exame físico normal é altamente sugestiva de proctocolite alérgica induzida pela proteína do leite de vaca (APLV não IgE-mediada). A conduta inicial em crianças em uso de fórmula infantil é a substituição da fórmula láctea regular por uma fórmula extensamente hidrolisada (onde as proteínas são quebradas em peptídeos pequenos, reduzindo a antigenicidade). Deve-se avaliar a resposta clínica em 2 a 4 semanas de exclusão e, havendo melhora, realizar o teste de provocação oral (TPO) para confirmação diagnóstica definitiva.\n\nComentários sobre os distratores:\n(A) A lactose é o açúcar do leite; a restrição de lactose não trata a APLV (que é uma reação imunológica a proteínas) e intolerância primária à lactose é extremamente rara nesta faixa etária e não causa sangramento nas fezes.\n(C) Fórmulas de aminoácidos livres (elementares) são caras e reservadas para casos de anafilaxia, recusa alimentar grave, sangramento persistente com repercussão sistêmica ou falha no uso de fórmula extensamente hidrolisada.\n(D) Na ausência de sinais de enterocolite infecciosa ativa (febre, diarreia, queda do estado geral), o uso de antibióticos empíricos é contraindicado.',
    reference: 'Vandenplas Y, et al. An ESPGHAN position paper on the diagnosis, management, and prevention of cow\'s milk allergy. J Pediatr Gastroenterol Nutr. 2024. | Oliveira LCL et al. Atualização em alergia alimentar 2025: posicionamento conjunto ASBAI/SBP.',
    tags: ['gastroenterologia', 'alergia e imunologia']
  },
  {
    id: 'tp2026-52',
    module: 'Pediatria',
    image: '/images/tp2026-52.webp',
    text: 'Criança, 2 anos, na sala de emergência em regular estado geral, cianótica, sonolenta, temperatura de 36ºC, taquipneia, frequência respiratória de 48irpm, tiragem intercostal e subcostal, saturação em ar ambiente de 88%, FC 220bpm, pressão arterial de 70x40mmHg e tempo de enchimento capilar de 4 segundos. Instalada monitorização, máscara não reinalante com 15 litros/minuto e puncionado acesso venoso periférico. É constatada no monitor a seguinte imagem, confirmada pelo ECG. Qual conduta deve ser realizada?',
    options: [
      '(A) Desfibrilação ventricular 1 Joule/kg',
      '(B) Adrenalina endovenosa 0,1mg/kg',
      '(C) Adenosina endovenosa 0,1mg/kg',
      '(D) Expansão com soro fisiológico 0,9% 20mL/kg'
    ],
    correctAnswer: 2,
    explanation: 'Criança com Taquicardia Supraventricular (TSV) e sinais de instabilidade hemodinâmica (choque cardiogênico) com acesso venoso disponível deve receber adenosina IV imediata ou cardioversão elétrica sincronizada.',
    commentary: 'Comentários sobre a resposta correta:\n(C) O quadro clínico (frequência cardíaca de 220 bpm, ausência de onda P, taquicardia de complexo estreito regular) é típico de Taquicardia Supraventricular (TSV) na infância. A paciente exibe sinais francos de choque circulatório/instabilidade (tempo de enchimento capilar de 4s, PA limítrofe de 70x40 mmHg, sonolência, cianose, má perfusão). Pelo algoritmo do PALS (Pediatric Advanced Life Support), se o paciente com TSV instável já possui um acesso venoso periférico puncionado e viável, a conduta medicamentosa inicial é a infusão rápida de adenosina na dose de 0,1 mg/kg em bólus (seguido de flush de soro fisiológico). Se não houver acesso venoso imediato ou se a adenosina falhar, deve-se proceder à cardioversão elétrica sincronizada (e não desfibrilação) com 0,5 a 1 J/kg.\n\nComentários sobre os distratores:\n(A) A desfibrilação (choque não sincronizado) está indicada apenas em ritmos de parada cardiorrespiratória chocáveis (Fibrilação Ventricular e Taquicardia Ventricular sem pulso), não se aplicando a arritmias estáveis ou instáveis com pulso.\n(B) Adrenalina endovenosa não é tratamento para TSV de complexo estreito regular estável ou instável com pulso.\n(D) Como a criança está em choque cardiogênico secundário a uma arritmia extrema, a expansão volêmica vigorosa com soro fisiológico pode desencadear ou agravar congestão pulmonar aguda e insuficiência cardíaca.',
    reference: 'Pediatric Advanced Life Support (PALS) Guidelines - AHA 2020.',
    tags: ['cardiologia', 'emergência']
  },
  {
    id: 'tp2026-53',
    module: 'Pediatria',
    text: 'Criança de 3 anos, previamente hígida, é trazida à UBS por terceiro episódio de tosse e sibilância nos últimos 6 meses, sempre associados a quadros de resfriado, com intervalos assintomáticos entre as crises. Não há sintomas respiratórios entre os episódios, nem história familiar de asma ou atopia. Ao exame atual, apresenta sibilos expiratórios difusos e boa resposta a broncodilatador inalatório. Qual a conduta mais adequada para o manejo deste caso na atenção primária?',
    options: [
      '(A) Solicitar radiografia de tórax e espirometria para confirmar o diagnóstico de asma e, após o resultado, programar acompanhamento em serviço especializado.',
      '(B) Iniciar corticoide inalatório diário em baixa dose como terapia de controle contínuo, considerando o quadro de asma persistente.',
      '(C) Orientar broncodilatador de resgate e reavaliar padrão de recorrência dos episódios antes de instituir terapia de controle diária.',
      '(D) Associar corticoide via oral nos episódios de sibilância, como forma de prevenir a progressão do quadro para asma persistente.'
    ],
    correctAnswer: 2,
    explanation: 'Lactentes e pré-escolares com sibilância episódica viral devem ser manejados com broncodilatador de resgate durante as crises, sem indicação imediata de corticoide de controle na ausência de sintomas intercrises ou atopia.',
    commentary: 'Comentários sobre a resposta correta:\n(C) A paciente apresenta um fenótipo de sibilância induzida por vírus (sibilância episódica associada exclusivamente a resfriados), caracterizado por crises espaçadas com intervalos assintomáticos, boa resposta a broncodilatadores e ausência de atopia pessoal ou familiar de asma. Na atenção primária, a conduta correta consiste no tratamento sintomático das crises com broncodilatadores de curta ação (salbutamol) por via inalatória (espaçador) e acompanhamento longitudinal clínico para mapear a frequência e a gravidade das exacerbações antes de cogitar terapia preventiva diária.\n\nComentários sobre os distratores:\n(A) A espirometria não é viável ou confiável em crianças menores de 5-6 anos, e radiografia de tórax de rotina é dispensada em crises típicas não complicadas.\n(B) Corticoide inalatório contínuo diário é indicado para o fenótipo de sibilador persistente (múltiplos desencadeantes, sintomas frequentes intercrises) ou com alto risco de asma (Índice Preditivo de Asma positivo), o que não é o caso do pré-escolar em tela.\n(D) O uso empírico e repetido de corticoide oral a cada episódio de sibilância viral não previne a progressão para asma, devendo ser evitado pelos potenciais efeitos colaterais sistêmicos.',
    reference: 'Global Initiative for Asthma (GINA). 2025. | SBP. Diretrizes para manejo de sibilância na infância.',
    tags: ['pneumologia', 'atenção primária']
  },
  {
    id: 'tp2026-54',
    module: 'Pediatria',
    text: 'Uma adolescente de 13 anos e 10 meses comparece à UBS para consulta. Durante a entrevista confidencial, relata que mantém relações sexuais com namorado de 23 anos há vários meses, solicita ao médico orientação contraceptiva e que não conte a ninguém. Qual deve ser a conduta adequada para este caso?',
    options: [
      '(A) Notificar o caso às autoridades competentes e acionar a rede de proteção à criança e ao adolescente.',
      '(B) Respeitar o sigilo da consulta, orientando a adolescente e estimulando diálogo com os responsáveis.',
      '(C) Orientar a adolescente para dialogar com os pais, aguardar e respeitar a decisão familiar.',
      '(D) Registrar em prontuário e orientar a contracepção, mantendo o sigilo solicitado pela adolescente.'
    ],
    correctAnswer: 0,
    explanation: 'Nas situações de suspeita ou confirmação de relação sexual envolvendo menores de 14 anos (vulneráveis), configura-se crime de estupro de vulnerável, obrigando a quebra de sigilo e notificação de maus-tratos/violência.',
    commentary: 'Comentários sobre a resposta correta:\n(A) Conforme o Código Penal Brasileiro, a conjunção carnal ou ato libidinoso com menor de 14 anos caracteriza o crime de Estupro de Vulnerável (Art. 217-A). Trata-se de uma situação de violência sexual presumida pela lei, onde o consentimento da vítima é legalmente irrelevante. Nessas circunstâncias de violência infanto-juvenil confirmada ou suspeitada, o médico tem a obrigação legal e o dever ético de quebrar o sigilo profissional para acionar as redes de proteção social (Conselho Tutelar) e notificar compulsoriamente os órgãos de vigilância em saúde para resguardar a integridade física e psíquica da adolescente.\n\nComentários sobre os distratores:\n(B, D) Manter sigilo absoluto diante de um crime de estupro de vulnerável em andamento contra um menor de 14 anos é uma infração ética e legal grave do profissional.\n(C) Embora estimular o diálogo familiar seja importante, a conduta protetiva obrigatória de notificação e acionamento dos órgãos competentes não pode ser postergada ou condicionada à decisão da família.',
    reference: 'Brasil. Estatuto da Criança e do Adolescente - ECA. | SBP. Manual de atendimento ao adolescente vítima de violência.',
    tags: ['atenção primária', 'ética médica', 'saúde pública']
  },
  {
    id: 'tp2026-55',
    module: 'Pediatria',
    text: 'Criança de 2 anos e 4 meses, com tetralogia de Fallot, dá entrada na UBS com "crise de hipoxemia". Considerando a fisiopatologia da doença em questão, qual a melhor posição para acomodar a criança na maca de exame físico visando melhorar a hipoxemia?',
    options: [
      '(A) Posição de Trendelemburg.',
      '(B) Posição genupeitoral.',
      '(C) Decúbito dorsal com as pernas esticadas.',
      '(D) Decúbito ventral com as pernas esticadas.'
    ],
    correctAnswer: 1,
    explanation: 'A posição genupeitoral eleva a resistência vascular sistêmica, reduzindo o shunt direita-esquerda no ventrículo e otimizando o fluxo sanguíneo pulmonar durante crises hipercianóticas.',
    commentary: 'Comentários sobre a resposta correta:\n(B) A crise de hipoxemia (ou crise hipercianótica) na Tetralogia de Fallot ocorre devido a um espasmo do infundíbulo pulmonar ou queda na resistência vascular sistêmica (RVS), o que desvia massivamente o sangue desoxigenado do ventrículo direito para a aorta através da ampla CIV (shunt direita-esquerda). A posição genupeitoral (knee-chest) ou o agachamento provoca a flexão dos membros inferiores sobre o tronco, o que acarreta a compressão mecânica das artérias femorais, elevando agudamente a RVS. Esse aumento de resistência dificulta a saída do sangue pela aorta, forçando um maior fluxo em direção à artéria pulmonar, reduzindo o shunt D-E e atenuando rapidamente a hipoxemia sistêmica.\n\nComentários sobre os distratores:\n(A) A posição de Trendelenburg melhora o retorno venoso, mas não atua aumentando a resistência vascular sistêmica para mitigar o shunt cardíaco primário.\n(C, D) Manter os membros inferiores estendidos reduz a resistência vascular sistêmica periférica, o que agrava o fluxo de shunt direita-esquerda e piora a hipoxemia.',
    reference: 'SOCIEDADE BRASILEIRA DE PEDIATRIA. Diretrizes em Cardiopatias Congênitas. | Kliegman, R. M. et al. Nelson Textbook of Pediatrics.',
    tags: ['cardiologia', 'emergência']
  },
  {
    id: 'tp2026-56',
    module: 'Pediatria',
    text: 'Uma menina de 7 anos é levada ao ambulatório de pediatria pela mãe, devido ao aparecimento de desenvolvimento mamário há cerca de 6 meses, associado a crescimento acelerado e surgimento recente de odor axilar. Não há relato de uso de medicamentos hormonais ou doenças crônicas. Ao exame físico, apresenta estágio II de Tanner para mamas, sem desenvolvimento de pelos pubianos. A estatura encontra-se acima do percentil esperado para a idade, com avanço recente da velocidade de crescimento. Qual é o exame inicial mais indicado para investigação deste quadro clínico?',
    options: [
      '(A) Análise sérica de PTHi',
      '(B) Análise sérica de TSH',
      '(C) Análise sérica de GH e IGF-1',
      '(D) Análise sérica de LH e FSH'
    ],
    correctAnswer: 3,
    explanation: 'O aparecimento de caracteres sexuais secundários em meninas antes dos 8 anos caracteriza puberdade precoce, cuja triagem laboratorial inicial avalia a ativação do eixo hipotálamo-hipófise-gonadal por LH e FSH.',
    commentary: 'Comentários sobre a resposta correta:\n(D) O desenvolvimento de mamas (telarca) antes dos 8 anos de idade em meninas preenche critérios para o diagnóstico de Puberdade Precoce. O avanço concomitante da velocidade de crescimento apoia o diagnóstico clínico de puberdade verdadeira. A primeira etapa da investigação visa a diferenciar a etiologia central (dependente de gonadorofinas - ativação do eixo hipotálamo-hipófise-gônadas) da periférica (independente de gonadotrofinas). Dessa forma, a dosagem basal sérica de LH (hormônio luteinizante) e FSH (hormônio folículo-estimulante) - idealmente por ensaios ultrassensíveis de quimioluminescência - é a triagem hormonal padrão inicial recomendada.\n\nComentários sobre os distratores:\n(A) O paratormônio (PTHi) regula o metabolismo do cálcio e fósforo, sem papel na investigação de desvios puberais.\n(B) TSH avalia a função tireoidiana; embora o hipotireoidismo primário severo possa causar puberdade precoce (Síndrome de Van Wyk-Grumbach), este cursa com parada do crescimento, e não aceleração do crescimento linear.\n(C) Embora o GH e IGF-1 atuem no crescimento linear, a aceleração da velocidade de crescimento na puberdade precoce é secundária ao estirão induzido pelo aumento de esteroides sexuais (estrógeno) que otimizam a secreção de GH, sendo o LH/FSH as dosagens prioritárias.',
    reference: 'Endocrine Society Guidelines on Gonadotropins. | SBP. Puberdade precoce feminina e masculina, 2021.',
    tags: ['endocrinologia']
  },
  {
    id: 'tp2026-57',
    module: 'Pediatria',
    text: 'Um menino de 8 anos é acompanhado em ambulatório pediátrico por apresentar três episódios de infecção do trato urinário febril nos últimos 12 meses, todos confirmados por urocultura positiva para Escherichia coli e tratados adequadamente. A mãe relata que, durante os episódios, a criança apresentou febre alta, dor lombar e mal-estar. Entre os episódios infecciosos, a criança permanece assintomática. Ao exame físico atual, não há alterações significativas. Qual é o exame indicado como primeira etapa da avaliação complementar?',
    options: [
      '(A) Ultrassonografia renal e das vias urinárias.',
      '(B) Tomografia computadorizada de abdome e pelve.',
      '(C) Cintilografia renal com DMSA.',
      '(D) Uretrocistografia miccional seriada.'
    ],
    correctAnswer: 0,
    explanation: 'A ultrassonografia de rins e vias urinárias é o exame não invasivo inicial indicado para rastrear malformações estruturais ou sinais obstrutivos em crianças com infecção urinária febril de repetição.',
    commentary: 'Comentários sobre a resposta correta:\n(A) Em crianças com infecções recorrentes do trato urinário febris (sugestivas de pielonefrite de repetição), a avaliação de imagem inicial não invasiva recomendada por diretrizes nacionais e internacionais (como AAP e SBP) é a ultrassonografia (US) de rins e vias urinárias. A US é excelente para detectar anomalias estruturais grosseiras do trato urinário, rins duplicados, hidronefrose acentuada ou dilatação ureteral que predisponham à estase urinária e infecção.\n\nComentários sobre os distratores:\n(B) A tomografia computadorizada é reservada para suspeitas de complicações agudas graves (como abscesso renal) refratárias ao tratamento antimicrobiano, não sendo exame de triagem de repetição.\n(C) A cintilografia renal com DMSA avalia a presença de cicatrizes renais parenquimatosas tardias e disfunção focal renal, sendo comumente solicitada após o resultado da ultrassonografia ou uretrocistografia.\n(D) A uretrocistografia miccional seriada (UCM) é o padrão ouro para diagnosticar Refluxo Vesicoureteral (RVU), porém é um exame invasivo que costuma ser agendado como etapa posterior após triagem inicial ou na vigência de alterações na US ou no DMSA.',
    reference: 'American Academy of Pediatrics (AAP) Guidelines on UTI. | SBP. Departamento de Nefrologia Pediátrica: Infecção do Trato Urinário.',
    tags: ['nefrologia', 'urologia']
  },
  {
    id: 'tp2026-58',
    module: 'Pediatria',
    text: 'Uma criança de 3 anos é levada à Unidade Básica de Saúde (UBS) pela mãe, devido a infecções recorrentes desde o primeiro ano de vida. A mãe relata episódios frequentes de infecções bacterianas como pneumonia, otite e infecções de pele, que muitas vezes necessitam de antibióticos e internações. A criança apresenta baixo ganho de peso para a idade. Diante desses achados, qual é a conduta inicial mais adequada?',
    options: [
      '(A) Prescrever apenas vitaminas e acompanhar na UBS.',
      '(B) Iniciar antibiótico profilático, suplementação de zinco e manter acompanhamento na UBS.',
      '(C) Solicitar hemograma e avaliação imunológica inicial e referenciar ao especialista em imunologia/pediatria.',
      '(D) Tranquilizar a mãe, pois infecções são comuns nessa idade, 8-10 episódios/ano são normais na primeira infância.'
    ],
    correctAnswer: 2,
    explanation: 'Crianças com infecções bacterianas recorrentes de vias aéreas e de pele associadas a déficit pôndero-estatural devem ser investigadas para erros inatos da imunidade (imunodeficiências primárias) com triagem básica e especialista.',
    commentary: 'Comentários sobre a resposta correta:\n(C) A ocorrência de infecções bacterianas de repetição e com gravidade (pneumonias, otites purulentas e infecções de pele de repetição exigindo internações e antibioticoterapia sistêmica) associada ao déficit de ganho de peso constitui um importante sinal de alerta para Erros Inatos da Imunidade (Imunodeficiências Primárias). A conduta correta inicial consiste na realização de exames laboratoriais básicos de triagem (hemograma completo para avaliar neutrófilos e linfócitos, dosagem de imunoglobulinas séricas IgG, IgA e IgM) concomitante ao encaminhamento ao pediatra especialista em alergia/imunologia para investigação pormenorizada.\n\nComentários sobre os distratores:\n(A, B) Suplementação vitamínica isolada ou antibioticoterapia profilática empírica sem um diagnóstico de base definido são inócuas e atrasam o tratamento curativo ou preventivo adequado.\n(D) Embora episódios de infecções virais simples e benignas possam ocorrer em pré-escolares em creches, infecções bacterianas sistêmicas profundas associadas a falha no crescimento pôndero-estatural nunca devem ser minimizadas ou consideradas normais.',
    reference: 'RICH, Robert R. et al. Clinical Immunology: Principles and Practice. 5. ed. Philadelphia: Elsevier, 2019. | SBP. Sinais de Alerta para Erros Inatos da Imunidade.',
    tags: ['alergia e imunologia', 'atenção primária']
  },
  {
    id: 'tp2026-59',
    module: 'Pediatria',
    text: 'Paciente com 5 anos é internado para investigação de febre persistente há 4 dias, acompanhada de faringite exsudativa, linfadenopatia cervical generalizada e baço a 3cm do rebordo costal esquerdo. O hemograma revelou linfocitose com 20% de atipia linfocitária. Durante a internação, a criança apresenta boa aceitação hídrica, mas os pais estão ansiosos quanto ao manejo. Com base no planejamento do cuidado e terapêutica adequados para este caso, a conduta correta é:',
    options: [
      '(A) Orientar hidratação e prescrever dexametasona oral para reduzir o tempo de febre e o volume dos linfonodos cervicais.',
      '(B) Iniciar Aciclovir, para reduzir a carga viral e acelerar a resolução da esplenomegalia.',
      '(C) Prescrever Amoxicilina para tratar a faringite exsudativa e prevenir febre reumática.',
      '(D) Instituir repouso relativo, analgesia e a suspensão de atividades físicas e contato por 2 a 4 semanas.'
    ],
    correctAnswer: 3,
    explanation: 'A mononucleose infecciosa é autolimitada e o tratamento é de suporte, sendo indispensável a suspensão de atividades físicas e esportes de contato por semanas devido ao risco de ruptura esplênica.',
    commentary: 'Comentários sobre a resposta correta:\n(D) A paciente apresenta um quadro clínico clássico de Mononucleose Infecciosa (febre prolongada, faringotonsilite exsudativa membranosa, linfadenopatia generalizada, esplenomegalia e linfocitose com atipia linfocitária expressiva de 20%). Em pacientes imunocompetentes, o curso da doença é habitualmente autolimitado e o tratamento é estritamente sintomático e de suporte (analgesia, antipiréticos e hidratação). O planejamento do cuidado impõe restrição relativa e suspensão formal de atividades físicas vigorosas e esportes de contato nas primeiras 2 a 4 semanas da doença pelo risco agudo de ruptura esplênica, complicação mecânica potencialmente fatal decorrente da esplenomegalia inflamatória.\n\nComentários sobre os distratores:\n(A) Corticosteroides sistêmicos (dexametasona, prednisona) não devem ser usados rotineiramente na mononucleose, ficando reservados para complicações como obstrução iminente de vias aéreas por hipertrofia amigdaliana severa, plaquetopenia grave ou anemia hemolítica.\n(B) Antivirais como o aciclovir não reduzem significativamente o tempo de doença ou o tamanho da esplenomegalia e não estão recomendados.\n(C) A faringite exsudativa na mononucleose é viral; o uso inadvertido de amoxicilina induz o surgimento de um exantema maculopapular em até 80-90% das crianças afetadas, não tendo indicação e não prevenindo febre reumática (que é desencadeada por Streptococcus pyogenes).',
    reference: 'SOCIEDADE BRASILEIRA DE PEDIATRIA. Mononucleose infecciosa. In: Tratado de Pediatria, 6. ed. Barueri: Manole, 2024.',
    tags: ['infectologia', 'pneumologia']
  },
  {
    id: 'tp2026-60',
    module: 'Pediatria',
    text: 'Menina de 4 anos comparece em UBS acompanhada da mãe, com queixa de dor e rigidez matinal, intermitente em tornozelos e joelhos, de início há 5 meses. Além da dor, apresenta edema e vermelhidão nas articulações, sem relato de trauma. Apresenta febre de 38ºC por 2 semanas, durante as quais apresentou exantema no tronco. Considerando os aspects morfofuncionais do processo inflamatório articular nessa doença, a alteração diretamente relacionada ao dano articular progressivo é:',
    options: [
      '(A) Degeneração primária da cartilagem articular por sobrecarga mecânica.',
      '(B) Hiperplasia sinovial com formação de pannus.',
      '(C) Deposição de imunocomplexos localizada na cápsula articular.',
      '(D) Redução transitória do líquido sinovial, predominantemente no período da manhã.'
    ],
    correctAnswer: 1,
    explanation: 'Na artrite idiopática juvenil (AIJ), a inflamação sinovial crônica leva a hiperplasia celular e à formação de pannus, um tecido proliferativo inflamatório que invade e destrói progressivamente a cartilagem e o osso subcondral.',
    commentary: 'Comentários sobre a resposta correta:\n(B) O quadro clínico (menina de 4 anos com artrite crônica ≥ 6 semanas, rigidez matinal, febre persistente e exantema macular evanescente compatível com a forma sistêmica de Artrite Idiopática Juvenil - AIJ) tem como mecanismo central de destruição articular a sinovite proliferativa crônica. O processo inflamatório estimula a angiogênese e a hiperplasia das células sinoviais, dando origem ao "pannus" — um tecido de granulação inflamatório invasivo rico em macrófagos, fibroblastos e linfócitos. O pannus adere firmemente e invade a cartilagem articular e o osso subcondral adjacente, liberando metaloproteinases e citocinas pró-inflamatórias (como TNF-alfa, IL-1 e IL-6) que degradam progressivamente a matriz extracelular, causando o dano articular estrutural e irreversível típico da doença descontrolada.\n\nComentários sobre os distratores:\n(A) Descreve a fisiopatologia da osteoartrite (doença degenerativa articular), incomum na infância, que não possui a base inflamatória autoimune sistêmica da AIJ.\n(C) Embora haja mecanismos imunológicos humorais e celulares envolvidos na AIJ, a deposição de imunocomplexos isoladamente na cápsula não é o mecanismo anatômico primário do dano articular invasivo que leva a erosões.\n(D) Na artrite inflamatória ocorre efusão articular ativa (aumento do líquido sinovial com características inflamatórias), e não redução deste.',
    reference: 'PETTY, R. E. et al. Textbook of Pediatric Rheumatology. 8. ed. Philadelphia: Elsevier, 2021. | Nelson Textbook of Pediatrics, 22. ed. 2024.',
    tags: ['reumatologia']
  },
  // ---- Teste de Progresso 2019 (gabarito oficial) ----
  {
    id: 'tp2019-41',
    module: 'Pediatria',
    text: 'Menino, 2 anos, em consulta de rotina, apresenta ao exame físico: pregas palpebrais oblíquas para cima, epicanto, base nasal plana, face aplanada, protusão lingual, palato ogival, orelhas de implantação baixa, pavilhão auricular pequeno, cabelo fino, clinodactilia do 5º dedo da mão, pé plano, prega palmar única transversa, hipotonia, frouxidão ligamentar, excesso de tecido adiposo no dorso do pescoço, retrognatia, diástase de retos abdominais, hérnia umbilical e sopro sistólico.\n\nConsiderando a síndrome deste paciente, qual afirmativa apenas enumera doenças cuja incidência é maior do que na população normal?',
    options: [
      '(A) Fibrose cística, surdez, instabilidade atlanto-axial.',
      '(B) Catarata congênita, tetralogia de Fallot, instabilidade atlanto-axial.',
      '(C) Leucemia, defeitos do septo átrio-ventricular, hipotireoidismo.',
      '(D) Anemia megaloblástica, retinoblastoma, persistência do canal arterial.'
    ],
    correctAnswer: 2,
    explanation: 'O fenótipo (fendas palpebrais oblíquas, epicanto, prega palmar única, hipotonia, sopro) é de síndrome de Down. Essas crianças têm risco aumentado de leucemias, cardiopatias — especialmente o defeito do septo atrioventricular — e hipotireoidismo, entre outras condições.',
    commentary: 'Fibrose cística, retinoblastoma, anemia megaloblástica e tetralogia de Fallot (isoladamente) não são as associações típicas; cada alternativa incorreta mistura ao menos uma doença sem incidência aumentada na síndrome.',
    reference: 'Ministério da Saúde. Diretrizes de atenção à pessoa com Síndrome de Down. Disponível em: http://www.hc.ufpr.br/files/diretrizes_cuidados_sindrome_down.pdf. Acesso em 30/06/2017. / BULL, M. J. Clinical report: health supervision for children with Down syndrome. Pediatrics, Illinois, v. 128, n. 2, p. 393- 405, ago. 2011. / MUSTACCHI, Z. Guia do bebê com síndrome de Down. São Paulo: Companhia Editora Nacional, 2009.',
    tags: ['pediatria', 'genética', 'síndrome de down']
  },
  {
    id: 'tp2019-42',
    module: 'Pediatria',
    text: 'Recém-nascido (RN) a termo apresentando icterícia Zona 2 de Krammer, com 40 horas de vida. Mãe primigesta apresenta tipagem sanguínea A negativo, Coombs indireto negativo. O RN é O positivo, Coombs direto negativo. Dosagem de bilirrubina indireta de 9,0 mg/dL, bilirrubina direta de 0,8 mg/dL.\n\nO diagnóstico mais provável é:',
    options: [
      '(A) Atresia de vias biliares extra-hepáticas.',
      '(B) Icterícia fisiológica do RN.',
      '(C) Icterícia por isoimunização ABO.',
      '(D) Icterícia por isoimunização Rh.'
    ],
    correctAnswer: 1,
    explanation: 'Recém-nascido a termo com icterícia leve (zona 2 de Kramer) após 24 horas de vida, à custa de bilirrubina indireta, sem incompatibilidade sanguínea (mãe A e RN O — não há incompatibilidade ABO; Coombs direto e indireto negativos): icterícia fisiológica.',
    commentary: 'Atresia de vias biliares cursa com hiperbilirrubinemia direta e acolia. Não há incompatibilidade ABO (mãe A, RN O) nem Rh com Coombs negativo.',
    reference: 'Hiperbilirrubinemia Neonatal. Cloherty, 2015. Manual de Neonatologia.',
    tags: ['pediatria', 'neonatologia', 'icterícia neonatal']
  },
  {
    id: 'tp2019-43',
    module: 'Pediatria',
    text: 'Criança, 3 meses de vida, nascida de parto normal, gestação de 40 semanas, com peso de 3400 gramas, em aleitamento materno exclusivo. Na consulta de rotina, é observado que está discretamente descorada, fígado e baço não palpáveis. Mãe nega queixas, nega anemia na família. Teste do pezinho: sem alterações. Solicitado hemograma que revela: GV: 3,6 milhões/mm³; Hb: 9,8 g/dL, Ht: 32%; GB: 6000/mm³; Plaquetas: 250.000/mm³; VCM: 91fL (74 - 108); HCM: 30pg (25 - 35).\n\nA hipótese diagnóstica e conduta são:',
    options: [
      '(A) Anemia fisiológica, não necessita terapêutica.',
      '(B) Anemia falciforme, encaminhamento ao hematologista.',
      '(C) Anemia ferropriva, medicamento com ferro.',
      '(D) Anemia por traço talassêmico, aconselhamento genético.'
    ],
    correctAnswer: 0,
    explanation: 'Lactente de 3 meses, a termo, em aleitamento exclusivo, com Hb 9,8 g/dL e índices normocíticos e normocrômicos, sem outros achados: anemia fisiológica do lactente, com nadir entre 8 e 12 semanas de vida. Não exige tratamento.',
    commentary: 'A anemia ferropriva é microcítica e improvável aos 3 meses em nascido a termo. A falciforme seria detectada no teste do pezinho. O traço talassêmico também é microcítico.',
    reference: 'Chopard MRT et al. Deficiência de ferro no feto e recém-nascido. RevBrasHematolHemoter. 23 (supl 2):32-37. / Nathan and Oski’s hematology of infancy and childhood. 8ªed, Elsevier Saunders, Philadelphia, 2015',
    tags: ['pediatria', 'hematologia', 'anemia']
  },
  {
    id: 'tp2019-44',
    module: 'Pediatria',
    text: 'Criança, 18 meses, iniciou quadro de febre alta há 3 dias e irritação durante os episódios febris. Passou por consulta 48 horas antes, tendo sido receitada amoxicilina para infecção de garganta, sem melhora do quadro. Mãe refere que hoje a febre cessou, mas surgiram manchas na pele, além de ter evacuado 3 vezes amolecido. Exame físico: bom estado geral, exantema maculopapular que desaparece à compressão na face, pescoço e tronco, mais discreto em membros, leve eritema de orofaringe, sem outras alterações.\n\nO diagnóstico mais provável e a conduta são:',
    options: [
      '(A) Exantema por alergia à amoxicilina; trocar droga por azitromicina e antialérgico.',
      '(B) Exantema por alergia à amoxicilina; suspender a medicação e aguardar a evolução.',
      '(C) Exantema súbito por herpesvírus-6 humano (HHV-6); manter a amoxicilina.',
      '(D) Exantema súbito por herpesvírus-6 humano (HHV-6); suspender amoxicilina.'
    ],
    correctAnswer: 3,
    explanation: 'Febre alta por 3 dias em criança de 18 meses, com exantema maculopapular surgindo após o desaparecimento da febre: exantema súbito (roséola), causado pelo herpesvírus humano 6 (ou 7).\n\nA amoxicilina não estava indicada (faringite viral é a regra nessa idade) e deve ser suspensa.',
    commentary: 'O exantema não é alérgico: o momento de surgimento (após defervescência) é típico da roséola. Manter a amoxicilina seria uso desnecessário de antibiótico.',
    reference: 'Carvalho AP. Exantema súbito. In: Farhat CK, Carvalho ES, Carvalho LHFR, Succi RCM, eds. Infectologia Pediátrica. 2rd ed. São Paulo. Editora Atheneu, 1998. p. 389-93. / Rosário NA, Grumach AS. Allergy to betalactams in pediatrics: a practical approach. J Pediatr (Rio J). 2006: 82 (5 Suppl): S181-8.',
    tags: ['pediatria', 'infectologia', 'doenças exantemáticas']
  },
  {
    id: 'tp2019-45',
    module: 'Pediatria',
    text: 'Recém-nascido (RN) nascido a termo, sem queixas e sem alterações ao exame físico.\n\nConsiderando-se que os exames pré-natais ao final da gestação apontaram infecção materna pelo vírus da imunodeficiência humana, a recomendação correta em relação à alimentação desse RN é:',
    options: [
      '(A) Indicar aleitamento materno em regime de livre demanda.',
      '(B) Contraindicar a amamentação e prescrever fórmula láctea.',
      '(C) Indicar aleitamento materno com leite ordenhado após congelamento.',
      '(D) Contraindicar a amamentação e indicar aleitamento humano cruzado.'
    ],
    correctAnswer: 1,
    explanation: 'No Brasil, a infecção materna pelo HIV é contraindicação ao aleitamento materno, pelo risco de transmissão vertical. O recém-nascido deve receber fórmula láctea, fornecida pelo SUS, e a lactação da mãe deve ser inibida.',
    commentary: 'Leite ordenhado congelado não elimina o vírus. O aleitamento cruzado (por outra mulher) não é recomendado.',
    reference: 'Tratado de Pediatria – Sociedade Brasileira de Pediatria 4ª Edição / Ministério da Saúde. Protocolo clínico e diretrizes terapêuticas para manejo da infecção pelo HIV em crianças e adolescentes. Brasília, 2018.',
    tags: ['pediatria', 'aleitamento materno', 'HIV']
  },
  {
    id: 'tp2019-46',
    module: 'Pediatria',
    text: 'Jovem, 17 anos, apresenta ferimento profundo no pé por caco de vidro. O ferimento já foi lavado com soro fisiológico e solução antisséptica. Não havia corpos estranhos nem tecidos desvitalizados. Trata-se de jovem saudável, consciente e responsável, que se comprometeu a cuidar adequadamente do ferimento em casa. Em seu cartão de vacinação constam 3 doses e 2 reforços de vacina antitetânica, tendo sido o último aos 5 anos de idade.\n\nA conduta para a profilaxia do tétano é:',
    options: [
      '(A) Aplicar apenas um reforço da vacina Dupla Adulto.',
      '(B) Iniciar o esquema de três doses de vacina antitetânica.',
      '(C) Aplicar soro antitetânico e penicilina benzatina.',
      '(D) Aplicar um reforço da vacina Dupla Adulto e soro antitetânico.'
    ],
    correctAnswer: 0,
    explanation: 'Ferimento profundo em paciente com esquema completo, cuja última dose foi há mais de 10 anos: indicada uma dose de reforço da vacina dupla adulto (dT). Em imunocompetente, capaz de cuidar da ferida, não há necessidade de soro antitetânico.',
    commentary: 'Não é preciso reiniciar o esquema, já que ele foi completo. Soro e penicilina não estão indicados nesse cenário.',
    reference: 'http://bvsms.saude.gov.br/bvs/publicacoes/doencas_infecciosas_ parasitaria_guia_bolso.pdf http://www.cve.saude.sp.gov.br/htm/imuni/pdf/imuni08_prof_tetan o.pdf',
    tags: ['pediatria', 'imunização', 'tétano']
  },
  {
    id: 'tp2019-47',
    module: 'Pediatria',
    text: 'Menina, 12 meses de idade, pesando 10kg, chega à emergência devido a quadro de vômitos que iniciou há 1 dia (3 episódios) acompanhados de diarreia (8 episódios nas últimas 24h), fezes volumosas, líquidas, com odor fétido, sem sangue ou muco. A criança é previamente hígida e frequenta escola. Ao exame: bom estado geral, chorosa, olhos levemente encovados, saliva pouco espessa, FC = 120 bpm, tempo de enchimento capilar 2seg.\n\nO diagnóstico provável e a conduta inicial são:',
    options: [
      '(A) Desidratação grave; bolo de soro fisiológico 20 mL/kg em 10min seguido de terapia de reposição oral, coleta de fezes para cultura.',
      '(B) Desidratação leve; terapia de reposição oral, coleta de fezes para cultura.',
      '(C) Desidratação grave; bolo de soro fisiológico 20 mL/kg em 10min seguido de terapia de reposição oral, sem coleta de exames.',
      '(D) Desidratação leve; terapia de reposição oral, sem coleta de exames.'
    ],
    correctAnswer: 3,
    explanation: 'Criança em bom estado geral, chorosa (irritável), com olhos levemente encovados e enchimento capilar normal: tem \'algum grau\' de desidratação (desidratação leve), tratada com terapia de reidratação oral (plano B).\n\nDiarreia aguda aquosa em criança previamente hígida não exige exames laboratoriais.',
    commentary: 'Não há sinais de desidratação grave (letargia, incapacidade de beber, enchimento capilar lento) que justifiquem expansão endovenosa. Coprocultura não é rotina na diarreia aquosa.',
    reference: 'Shane AL, Mody RK, Crump JA, Tarr PI, Steiner TS, Kotlloff K, et al. 2017 Infectious Diseases Society of America Clinical Practice Guidelines for de Diagnosis and Management of Infectious Diarrhea. ClinInfectDis. 2017, 65(12): 1963-1973.',
    tags: ['pediatria', 'diarreia aguda', 'desidratação']
  },
  {
    id: 'tp2019-48',
    module: 'Pediatria',
    text: 'Menina, 13 anos, trazida à consulta com queixa de irregularidade menstrual, constipação e queda de cabelo. A menarca foi aos 11 anos. A mãe se queixa de que a filha já vinha crescendo pouco nos últimos anos e parou de crescer, ficando sua estatura abaixo do padrão da família. Tem um primo por parte da mãe com diabetes mellitus tipo 1. Exame físico: aumento do pescoço na região da tireoide e uma lesão hipocrômica na região genital.\n\nOs prováveis diagnóstico e resultado de dosagem de T4 livre e TSH são: (Valores de normalidade para T4livre = 0,7 - 1,5 ng/dL e TSH = 0,3 - 4,0 mUI/L).',
    options: [
      '(A) Tireoidite de Hashimoto; T4livre = 0,5 ng/dL e TSH = 25 mUI/L.',
      '(B) Bócio puberal; T4livre = 0,4 ng/dL e TSH = 25 mUI/L.',
      '(C) Tireoidite de Hashimoto; T4livre = 2,3 ng/dL e TSH < 0,01 mUI/L.',
      '(D) Bócio puberal; T4livre = 1,0 ng/dL e TSH = 2,0 mUI/L.'
    ],
    correctAnswer: 0,
    explanation: 'Bócio, desaceleração do crescimento, constipação, queda de cabelo e irregularidade menstrual sugerem hipotireoidismo. O vitiligo genital e o familiar com diabetes tipo 1 apontam para autoimunidade: tireoidite de Hashimoto, principal causa de hipotireoidismo adquirido na infância.\n\nO perfil laboratorial esperado é T4 livre baixo e TSH alto.',
    commentary: 'O bócio puberal é eutireoidiano e não explica os sintomas. A combinação T4 livre alto e TSH suprimido é de hipertireoidismo.',
    reference: 'Radetti G. Clinical aspects of Hashimoto\'s thyroiditis. Endocr Dev. 2014; 26:158-70.',
    tags: ['pediatria', 'endocrinologia', 'tireoide']
  },
  {
    id: 'tp2019-49',
    module: 'Pediatria',
    text: 'Adolescente, 12 anos, masculino, encaminhado para avaliação de hipertensão arterial detectada há 3 meses. Apresentou cefaleia, palpitações, tontura, dor abdominal e perda de 3kg nesse período. Hoje apresentou episódio súbito de perda de consciência durante jogo de futebol na escola. Exame físico, uma hora após o evento: letárgico: FC = 124 bpm, FR = 20 irpm, PA = 195 x 125 mmHg, estertores crepitantes em bases pulmonares e hepatomegalia (4cm do rebordo costal direito).\n\nEste quadro sugere:',
    options: [
      '(A) Síndrome de Cushing',
      '(B) Coarctação da aorta',
      '(C) Feocromocitoma',
      '(D) Hipertireoidismo'
    ],
    correctAnswer: 2,
    explanation: 'Hipertensão grave e sintomática em adolescente, com cefaleia, palpitações, sudorese/tontura e perda de peso, evoluindo com crise hipertensiva, síncope ao esforço e congestão: feocromocitoma (excesso de catecolaminas).',
    commentary: 'A síndrome de Cushing causaria ganho de peso. A coarctação cursaria com diferença de pulsos e PA entre membros. O hipertireoidismo não produz hipertensão diastólica tão grave nem crises paroxísticas.',
    reference: 'Sociedade Brasileira de Pediatria. Tratado de Pediatria - SBP 4ª edição. 2017. 9 11',
    tags: ['pediatria', 'endocrinologia', 'hipertensão']
  },
  {
    id: 'tp2019-50',
    module: 'Pediatria',
    text: 'Gestante, 25 anos, em exame de rotina no pré-natal apresentou VDRL reagente 1:64 no primeiro trimestre. A gestante e seu parceiro foram adequadamente tratados com penicilina benzatina, como confirmado por anotações na carteira de pré-natal. A evolução do VDRL foi: pré-tratamento – 1:64; após o tratamento – 1:4; na internação para o parto – 1:32. No recém-nascido (RN) o VDRL foi 1:16, e o exame físico estava normal.\n\nDe acordo com as recomendações do Ministério da Saúde:',
    options: [
      '(A) Se o RN permanecer assintomático até a alta, não há necessidade de tratamento e deve-se repetir o VDRL com 1, 2 e 6 meses de vida.',
      '(B) Como o RN está assintomático, aplicar uma dose de penicilina benzatina e encaminhar para seguimento ambulatorial.',
      '(C) Deve-se realizar hemograma, radiografia de ossos longos, líquor e iniciar tratamento do RN com penicilina cristalina.',
      '(D) Coletar FTA-Abs, hemograma e radiografia de ossos longos; se algum destes exames estiver alterado, coletar líquor e iniciar tratamento.'
    ],
    correctAnswer: 2,
    explanation: 'Apesar do tratamento adequado no início da gestação, o VDRL subiu de 1:4 para 1:32 no parto (aumento de mais de duas diluições), indicando reinfecção. Por isso, o recém-nascido é considerado exposto a sífilis materna não adequadamente tratada no momento do parto.\n\nDeve ser investigado com hemograma, radiografia de ossos longos e líquor e tratado com penicilina cristalina.',
    commentary: 'A conduta expectante e a penicilina benzatina em dose única são reservadas a recém-nascidos de mães adequadamente tratadas, sem reinfecção. O FTA-Abs não é usado no recém-nascido.',
    reference: 'Ministério da Saúde Departamento de Gestão e Incorporação de Tecnologias em Saúde da Secretaria de Ciência, Tecnologia e Insumos Estratégicos – DGITS/SCTIE Comissão Nacional de Incorporação de Tecnologias no SUS (CONITEC) - Protocolo Clínico e Diretrizes Terapêuticas para Prevenção da Transmissão Vertical de HIV, Sífilis e Hepatites Virais, junho/ 2017',
    tags: ['pediatria', 'sífilis congênita', 'neonatologia']
  },
  {
    id: 'tp2019-51',
    module: 'Pediatria',
    text: 'Menina, 7 anos, apresenta excesso de peso desde os 4 anos. Os pais são obesos. Avaliação nutricional atual: Escore Z do índice de massa corporal/idade entre +2,0 e +3,0 Escore Z da estatura/idade: +2,0. Estadiamento puberal: M1P1. Ao exame físico: acantose nigricans em pescoço, estrias no abdome, circunferência abdominal aumentada, pressão arterial 120 x 70 mmHg.\n\nO quadro clínico sugere:',
    options: [
      '(A) Sobrepeso secundário a hipotireoidismo não tratado.',
      '(B) Obesidade exógena.',
      '(C) Excesso de peso secundário a tumor de sistema nervoso central.',
      '(D) Obesidade de causa genética (Prader-Willy).'
    ],
    correctAnswer: 1,
    explanation: 'IMC/idade com escore Z entre +2 e +3 em criança de 7 anos define obesidade. A estatura alta (escore Z +2), os pais obesos e a acantose (resistência insulínica) apontam para obesidade exógena (nutricional).\n\nNas causas endócrinas e genéticas, a criança costuma ter baixa estatura.',
    commentary: 'Hipotireoidismo, tumor de SNC e síndrome de Prader-Willi cursam tipicamente com baixa estatura ou atraso do crescimento, além de outros sinais.',
    reference: 'Sociedade Brasileira de Pediatria. Obesidade na infância e adolescência. 4ª Edição. Rio de Janeiro, 2016.',
    tags: ['pediatria', 'obesidade infantil']
  },
  {
    id: 'tp2019-52',
    module: 'Pediatria',
    text: 'Menino, 1 ano e 6 meses, atendido no Pronto-Socorro, apresentando há dois dias disfonia, tosse seca de padrão irritativo, com aumento progressivo de intensidade e frequência, e temperatura corpórea subfebril. Exame físico: bom estado geral com presença de coriza hialina, estridor, taquidispneia, com retração intercostal e subdiafragmática, ausculta pulmonar sem alterações.\n\nO diagnóstico e conduta são:',
    options: [
      '(A) Faringo-tonsilite; antibioticoterapia, hidratação, inalação com vasoconstritor e corticoterapia.',
      '(B) Rinossinusite; hidratação e aspiração de secreções em vias aéreas superiores.',
      '(C) Epiglotite; antibioticoterapia, corticoterapia, hidratação e aspiração de secreções em vias aéreas superiores.',
      '(D) Laringite aguda; hidratação, inalação com vasoconstritor e corticoterapia.'
    ],
    correctAnswer: 3,
    explanation: 'Lactente com quadro gradual de rouquidão, tosse ladrante e estridor, febre baixa, coriza e bom estado geral: laringotraqueíte viral aguda (crupe).\n\nO tratamento inclui corticoide (dexametasona) e, nos casos com estridor em repouso ou desconforto, nebulização com adrenalina.',
    commentary: 'A epiglotite tem início súbito, toxemia, febre alta e sialorreia. Faringotonsilite e rinossinusite não causam estridor e disfonia.',
    reference: 'Pediatria – Diagnóstico e Tratamento. Morais, MB; Campos, SO; Hilario, MOE. FAP/UNIFESP Editora Manole, 2013. 1839p.',
    tags: ['pediatria', 'crupe', 'via aérea']
  },
  {
    id: 'tp2019-53',
    module: 'Pediatria',
    text: 'Pré-escolar, levado ao pediatra por apresentar lesão eritematosa em fossas antecubitais e poplíteas há 1 mês. Mãe refere que as lesões são acompanhadas por prurido que piora com o suor. Exame físico: placas e pápulas eritematosas que desaparecem à digitopressão nos locais descritos. Apresenta xerose cutânea e pitiríase alba em face.\n\nQual alteração laboratorial é critério diagnóstico para a doença apresentada?',
    options: [
      '(A) Linfocitose',
      '(B) IgA sérica diminuída',
      '(C) IgE sérica elevada',
      '(D) Leucocitose com eosinofilia'
    ],
    correctAnswer: 2,
    explanation: 'Lesões eczematosas pruriginosas em fossas antecubitais e poplíteas, xerose e pitiríase alba: dermatite atópica.\n\nA IgE sérica elevada é um dos critérios menores de Hanifin e Rajka, embora seja inespecífica.',
    commentary: 'Linfocitose e deficiência de IgA não fazem parte dos critérios. A eosinofilia pode ocorrer, mas leucocitose com eosinofilia não é critério diagnóstico.',
    reference: 'Tratado de Pediatria – Sociedade Brasileira de Pediatria 4a Edição. 2017.',
    tags: ['pediatria', 'dermatologia', 'dermatite atópica']
  },
  {
    id: 'tp2019-54',
    module: 'Pediatria',
    text: 'Adolescente, 17 anos, feminino, apresenta desmaios e tosse há 40 dias. Relata fraqueza e diminuição do apetite há 10 dias. Exame físico: emagrecida, palidez cutâneo-mucosa, frequência respiratória = 36 ipm, frequência cardíaca = 78 bpm, pressão arterial = 120 x 70 mmHg, discreta turgência jugular à direita, sem fígado e baço palpáveis. RX de tórax: massa mediastinal estendendo-se para hemitórax superior direito.\n\nA hipótese diagnóstica é:',
    options: [
      '(A) Linfoma',
      '(B) Higroma cístico',
      '(C) Bócio mergulhante',
      '(D) Tuberculose pulmonar'
    ],
    correctAnswer: 0,
    explanation: 'Adolescente com sintomas constitucionais, tosse e massa mediastinal com turgência jugular (sinal de compressão da veia cava superior): a principal hipótese é linfoma, a causa mais comum de massa de mediastino anterior nessa faixa etária.',
    commentary: 'O higroma cístico é congênito e cervical. O bócio mergulhante é raro em adolescentes. A tuberculose pulmonar não costuma causar síndrome de veia cava superior.',
    reference: 'Nelson Tratado de Pediatria – 16ª. ed / Kliegman, Stanton, St. Geme, Schor, Elsevier, 2003.',
    tags: ['pediatria', 'oncologia pediátrica', 'linfoma']
  },
  {
    id: 'tp2019-55',
    module: 'Pediatria',
    text: 'Menina, 4 anos, trazida à Unidade Básica de Saúde por dificuldade para deambular há 2 meses. Mãe refere que a criança acorda com dificuldade de estender o joelho direito, com melhora após cerca de 3 horas de atividade. Notou inchaço no joelho direito durante o mesmo período. Nega emagrecimento ou lesão cutânea. Exame físico: bom estado geral, com peso, altura e pressão arterial dentro do percentil 75 para a idade, sinais flogísticos no joelho direito com contratura em flexão.\n\nEm relação à investigação complementar, podemos dizer que:',
    options: [
      '(A) Níveis elevados de ASLO confirmam o diagnóstico.',
      '(B) A presença de uveíte anterior corrobora o diagnóstico.',
      '(C) A presença de FAN confirma o diagnóstico.',
      '(D) A ausência de fator reumatoide afasta o diagnóstico.'
    ],
    correctAnswer: 1,
    explanation: 'Artrite de joelho há mais de 6 semanas, rigidez matinal e contratura em flexão em menina de 4 anos: artrite idiopática juvenil, provavelmente oligoarticular.\n\nO diagnóstico é clínico. A uveíte anterior, frequente nas meninas com forma oligoarticular e FAN positivo, corrobora o diagnóstico e exige rastreio oftalmológico periódico.',
    commentary: 'ASLO elevada indica estreptococcia prévia. FAN positivo não confirma o diagnóstico (é marcador de risco de uveíte). A maioria das crianças com AIJ tem fator reumatoide negativo.',
    reference: 'Tratado de Pediatria: Sociedade Brasileira de Pediatria, 4ª. Ed. Manole: Barueri-SP. 2017- Cap de Artrite Idiopática Juvenil Pg 1775.',
    tags: ['pediatria', 'reumatologia', 'artrite idiopática juvenil']
  },
  {
    id: 'tp2019-56',
    module: 'Pediatria',
    text: 'Lactente, sexo masculino, 6 meses de idade, inicia quadro de febre intermitente, inapetência e pouco ganho ponderal, apresentando exame qualitativo de urina com nitritos (++), esterases leucocitárias (++) e urocultura com mais de 100.000 colônias de Escherichia coli. Inicia prontamente o tratamento com antimicrobiano.\n\nA seguir, deve-se solicitar:',
    options: [
      '(A) Ultrassonografia de vias urinárias',
      '(B) Urografia excretora',
      '(C) Uretrocistografia miccional',
      '(D) Tomografia computadorizada de abdome'
    ],
    correctAnswer: 0,
    explanation: 'Após a primeira infecção urinária febril em lactente, a investigação inicial é a ultrassonografia de rins e vias urinárias, que é não invasiva e identifica malformações, hidronefrose e alterações do parênquima.',
    commentary: 'A uretrocistografia miccional é reservada a casos com alteração na ultrassonografia ou ITU de repetição. A urografia excretora caiu em desuso. A tomografia expõe à radiação sem indicação.',
    reference: 'Tratado de Pediatria: Sociedade Brasileira de Pediatria, 4ª. Ed. Manole: Barueri-SP. 2017. Pg 1109.',
    tags: ['pediatria', 'nefrologia', 'infecção urinária']
  },
  {
    id: 'tp2019-57',
    module: 'Pediatria',
    text: 'Lactente, sexo feminino, 2 meses de idade, atendida no Pronto-Socorro com história de cansaço, sudorese e interrupções às mamadas, acompanhada de palidez cutânea e discreta cianose perioral, além de ganho de peso insuficiente. Exame físico: regular estado geral, pulsos dos membros inferiores com amplitude diminuída em relação à dos superiores. Frequência respiratória = 72 irpm, tiragens intercostais, SaO₂ = 94%. Coração rítmico a 168 bpm, com sopro sistólico na borda esternal esquerda (3+/6+). Pressão arterial = 80 x 40 mmHg no membro superior direito. Fígado palpável a 4cm do rebordo costal direito na linha hemiclavicular. Eletrocardiograma: sinais de sobrecarga ventricular esquerda com ondas T invertidas nas derivações V5 e V6 (tipo “strain”).\n\nA cardiopatia congênita é:',
    options: [
      '(A) Comunicação interventricular',
      '(B) Persistência do canal arterial',
      '(C) Estenose valvar aórtica',
      '(D) Coarctação da aorta'
    ],
    correctAnswer: 3,
    explanation: 'Lactente com insuficiência cardíaca (taquipneia, taquicardia, hepatomegalia, baixo ganho de peso) e pulsos femorais diminuídos em relação aos braquiais, com sobrecarga ventricular esquerda no ECG: coarctação da aorta.\n\nA diferença de pulsos entre membros superiores e inferiores é a pista clínica fundamental.',
    commentary: 'CIV e PCA causam IC por hiperfluxo pulmonar, sem diferença de pulsos entre membros. A estenose aórtica valvar produz sopro em foco aórtico e pulsos reduzidos globalmente.',
    reference: 'Cavalini JF et. L. Coarctação da aorta. In: Atik E ed. Cardiopatias congênitas: guia prático de diagnóstico, tratamento e conduta geral. 1ª. ed. São Paulo: Ed. Atheneu. 2014, p.341-52',
    tags: ['pediatria', 'cardiologia', 'cardiopatias congênitas']
  },
  {
    id: 'tp2019-58',
    module: 'Pediatria',
    text: 'Menino, 5 anos, chega ao Pronto-Socorro com história de vômitos, perda de peso, polidipsia e poliúria. Exame físico: mucosas secas, turgor semipastoso, taquidispneico e torporoso. Exames laboratoriais: glicemia = 620 mg/dL; gasometria – pH: 7,08, HCO3: 4,0 mEq/L, BE: –20; Na: 135 mEq/L; K = 3,5 mEq/L; urina 1 – cetonúria +++.\n\nA primeira conduta é:',
    options: [
      '(A) Reposição de potássio.',
      '(B) Insulina rápida ou ultra-rápida.',
      '(C) Manitol e hiperventilação.',
      '(D) Hidratação com solução isotônica.'
    ],
    correctAnswer: 3,
    explanation: 'Cetoacidose diabética (glicemia 620, pH 7,08, bicarbonato 4, cetonúria) na abertura do diabetes tipo 1, com desidratação.\n\nA primeira medida é a hidratação com solução isotônica (soro fisiológico 0,9%). A insulina é iniciada depois da expansão inicial (em geral 1–2 horas), e o potássio é reposto conforme o nível sérico.',
    commentary: 'Insulina antes da hidratação aumenta o risco de choque e de hipocalemia. A reposição de potássio é feita junto com a insulina. Manitol é para edema cerebral estabelecido.',
    reference: 'Wolfsdorf JI, Allgrove J, Craig ME, Edge J, Glaser N, Jain V, Lee WW, Mungai LN, Rosenbloom AL, Sperling MA, Hanas R; International Society for Pediatric and Adolescent Diabetes. ISPAD Clinical Practice Consensus Guidelines 2014. Diabetic ketoacidosis and hyperglycemic hyperosmolar state. Pediatr Diabetes. 2014;15 Suppl 20:154-79',
    tags: ['pediatria', 'endocrinologia', 'cetoacidose diabética']
  },
  {
    id: 'tp2019-59',
    module: 'Pediatria',
    text: 'Criança, 7 anos, proveniente de região rural, deu entrada no Pronto-Socorro com história de possível acidente com animal peçonhento, não sabendo informar a espécie, há cerca de três horas. Ao exame, apresentava edema tenso de cor violácea no pé e tornozelo direitos, com duas lesões puntiformes no pé direito, presença de botão hemorrágico e dor local. O resultado do exame tempo de coagulação apresentou-se prolongado de 15 minutos.\n\nA hipótese diagnóstica é de acidente:',
    options: [
      '(A) loxoscélico',
      '(B) botrópico',
      '(C) crotálico',
      '(D) elapídico'
    ],
    correctAnswer: 1,
    explanation: 'Dor e edema local importantes, equimose e bolha hemorrágica no local da picada e tempo de coagulação prolongado: acidente botrópico (jararaca), o mais comum no Brasil. O veneno tem ação proteolítica (inflamatória), coagulante e hemorrágica.',
    commentary: 'O acidente crotálico tem poucos sinais locais e cursa com neurotoxicidade e mialgia/rabdomiólise. O elapídico (coral) é neurotóxico, com poucos sinais locais. O loxoscélico (aranha-marrom) causa lesão necrótica de evolução lenta.',
    reference: 'Fundação Nacional de Saúde.Manual de diagnóstico e tratamento de acidentes por animais peçonhentos, 2ed. Brasília; 2001. / Cardoso, JLC, França, OSF, Wen, FH, M laque, CMS, Haddad Jr, V. Animais peçonhentos no Brasil: biologia clínica e terapêutica. São Paulo: Sarvier; 2002.',
    tags: ['pediatria', 'toxicologia', 'acidentes por animais peçonhentos']
  },
  {
    id: 'tp2019-60',
    module: 'Pediatria',
    text: 'Lactente, 3 meses, chega ao Pronto-Socorro com história de choro intenso, por vezes contínuo, geralmente no período vespertino. Foi atendido em várias ocasiões, nas quais foi diagnosticada cólica do lactente, sendo a última vez há 3 semanas. Pais negam traumas, febre, vômitos ou outras alterações. Não recebeu a vacina de 2 meses. Mãe e pai hígidos com 18 e 19 anos, respectivamente. Exame físico: choroso, principalmente à manipulação de membro inferior direito, com edema na coxa direita, presença de alguns hematomas. Realizada radiografia de membro inferior direito: fratura de fêmur direito.\n\nO exame mais útil para elucidação diagnóstica é:',
    options: [
      '(A) Hemograma mais coagulograma.',
      '(B) Dosagem de Cálcio sérico e Vitamina D.',
      '(C) Raio-X de corpo inteiro.',
      '(D) Ultrassonografia de abdome.'
    ],
    correctAnswer: 2,
    explanation: 'Lactente de 3 meses, sem capacidade de locomoção, com fratura de fêmur sem história de trauma, hematomas, choro recorrente, atraso vacinal e pais muito jovens: forte suspeita de maus-tratos.\n\nA radiografia de esqueleto inteiro (inventário ósseo) é o exame mais útil para identificar fraturas ocultas, múltiplas e em diferentes estágios de consolidação.',
    commentary: 'Hemograma, coagulograma, cálcio e vitamina D ajudam a excluir causas orgânicas, mas não elucidam a principal hipótese. A ultrassonografia de abdome não é o exame central.',
    reference: 'RevBras Ortop. 2013;48(1). Maus tratos infantis. Revisão da literatura. Bernardo B. Terra, Eduardo A. Figueiredo, Morena P E O L Terra, Carlos V. Andreoli, Benno Ejnisman',
    tags: ['pediatria', 'maus-tratos', 'ortopedia']
  },
  // ---- Teste de Progresso 2020 — Consórcio SP 1, outubro (gabarito oficial) ----
  {
    id: 'tp2020-61',
    module: 'Pediatria',
    text: 'RN com 10 dias de vida é levado para primeira consulta na UBS. Mãe refere que o bebê chora muito e dorme pouco. Nega intercorrências neonatais. Durante toda a consulta, observa-se a mãe apática, referindo muito cansaço e dificuldade para amamentar o seu filho.\n\nDentre as alternativas abaixo, assinale a melhor conduta frente ao caso:',
    options: [
      '(A) Orientar amamentação livre demanda a fim de aumentar a produção de leite. Prescrever ansiolítico para a mãe e dosar T4 e TSH séricos do RN.',
      '(B) Orientar a amamentação a cada 3 horas e solicitar retorno em 5 dias. Dosar TSH e T4 séricos na mãe e no RN.',
      '(C) Incentivar a amamentação a fim de fortalecer o vínculo mãe-filho. Fornecer apoio psicológico para a mãe se necessário.',
      '(D) Inspecionar a amamentação e as mamas durante a consulta. Dosar T4 e TSH séricos na mãe.'
    ],
    correctAnswer: 2,
    explanation: 'Na primeira consulta do recém-nascido, a mãe apática, cansada e com dificuldade de amamentar sugere tristeza ou depressão pós-parto. O pediatra deve incentivar e apoiar a amamentação, fortalecer o vínculo mãe-bebê e oferecer apoio psicológico, acompanhando a evolução.',
    commentary: 'Não há indicação de dosar hormônios tireoidianos do RN (o teste do pezinho rastreia hipotireoidismo), de prescrever ansiolítico nem de impor horários rígidos às mamadas.',
    reference: 'Saúde da Criança: aleitamento materno e alimentação complementar, 2015. Ministério da Saúde.',
    tags: ['pediatria', 'aleitamento materno', 'puerpério']
  },
  {
    id: 'tp2020-62',
    module: 'Pediatria',
    text: 'Escolar de sete anos, sexo feminino, está há dois dias em tratamento para provável infecção do trato urinário com sulfametoxazol-trimetoprim, na dose de 40mg/kg/dia de sulfa. No início do quadro, apresentava urgência, dor e dificuldade para urinar. No momento, a mãe refere melhora significativa das queixas, entretanto o resultado da urinocultura mostra 500.000 colônias de E.coli resistente ao antimicrobiano em uso.\n\nA conduta, neste caso, deverá ser:',
    options: [
      '(A) Trocar o antimicrobiano em uso de acordo com a sensibilidade in vitro.',
      '(B) Trocar o antimicrobiano em uso por ácido nalidíxico.',
      '(C) Trocar o antimicrobiano em uso por amoxicilina oral.',
      '(D) Manter o esquema antimicrobiano em uso.'
    ],
    correctAnswer: 3,
    explanation: 'Na ITU baixa, a resposta clínica ao antimicrobiano é suficiente para mantê-lo, mesmo com resistência in vitro: a concentração urinária do fármaco costuma ser muito maior que a dos discos do antibiograma.',
    commentary: 'Trocar o antibiótico em uma criança que já melhorou é desnecessário. Ácido nalidíxico e amoxicilina não estão indicados com base no antibiograma.',
    reference: 'National Institute for Health and Clinical Excellence. UrinaryTractInfection in Children: Diagnosis, Tratament, and Longterm Management: Nice Clinical Guideline 54. London, England: National Institute for Health and Clinical Excellence; 2007. Available at: www.nice.org.uk/nicemedia/live/11819/36032/36032.pdf.',
    tags: ['pediatria', 'infecção urinária']
  },
  {
    id: 'tp2020-63',
    module: 'Pediatria',
    text: 'Menina de 9 anos é levada a um hospital do interior de São Paulo por sua mãe. Criança relata que machucou o tornozelo direito em um arbusto há 8 horas. Apresenta lesão com 2 orifícios em face lateral de perna direita com parestesia local e pouco edema. Ao exame físico está com diplopia, disartria, ptose palpebral bilateral, fácies miastênica, mal-estar, náuseas, cefaleia, mialgia generalizada e urina escurecida. Nega dispneia. Tem dosagem de creatinofosfoquinase: 1.800 (VR: 30 – 210 U/L) e hemoglobinúria.\n\nBaseado nas informações acima, assinale o acidente ofídico da paciente:',
    options: [
      '(A) Acidente elapídico',
      '(B) Acidente botrópico',
      '(C) Acidente crotálico',
      '(D) Acidente laquético'
    ],
    correctAnswer: 2,
    explanation: 'Pouca reação local, fácies miastênica (ptose bilateral), diplopia, mialgia, urina escura e CPK elevada (rabdomiólise com mioglobinúria): acidente crotálico (cascavel), cujo veneno é neurotóxico, miotóxico e coagulante.',
    commentary: 'O botrópico tem dor e edema locais intensos. O elapídico é neurotóxico, sem rabdomiólise. O laquético se parece com o botrópico, acrescido de manifestações vagais.',
    reference: 'Ministério da Saúde do Brasil: https://www.saude.gov.br/saude-de-a-z/acidentes-por-animais-peconhentos-serpentes [citado em 07/05/2020]',
    tags: ['pediatria', 'toxicologia', 'acidentes por animais peçonhentos']
  },
  {
    id: 'tp2020-64',
    module: 'Pediatria',
    text: 'Mãe de um lactante de quatro meses está preocupada, pois seu filho não sustenta a cabeça. História perinatal: parto vaginal, banhado em mecônio espesso, necessitando de reanimação na sala de parto, Apgar 1/4/7, peso: 2.800g, comprimento: 49cm. Exame físico: eleva momentaneamente a cabeça em posição de prono e sorri, faz semiflexão dos cotovelos e pronação do antebraço e flexão de punhos e dedos, reflexo tônico cervical assimétrico, reflexo de Moro exarcebado.\n\nNessa situação, deve-se informar à mãe que seu filho apresenta:',
    options: [
      '(A) Distúrbio neuropsicomotor pela asfixia perinatal e necessita de acompanhamento multiprofissional.',
      '(B) Limites normais do desenvolvimento neuropsicomotor e necessita de estimulação em casa.',
      '(C) Distúrbio neuropsicomotor pela asfixia perinatal e que terá um atraso físico e mental.',
      '(D) Distúrbio neuropsicomotor temporário pela asfixia perinatal e que irá se desenvolver normalmente.'
    ],
    correctAnswer: 0,
    explanation: 'Aos 4 meses, o lactente deveria sustentar a cabeça e ter abandonado o reflexo tônico cervical assimétrico, além de levar as mãos à linha média. A persistência de reflexos primitivos e o Moro exacerbado após asfixia perinatal grave (Apgar 1/4/7) indicam distúrbio do desenvolvimento neuropsicomotor.\n\nA criança precisa de acompanhamento e estimulação multiprofissional precoce.',
    commentary: 'Não é desenvolvimento normal. Não é possível prever, nesse momento, atraso mental definitivo nem evolução normal garantida.',
    reference: 'Tratado de Pediatria Nelson 20ª edição / Pediatria Básica tomo 1 Marcondes 9ª edição / Tratado de Pediatria SBP 4ª edição',
    tags: ['pediatria', 'desenvolvimento neuropsicomotor', 'asfixia perinatal']
  },
  {
    id: 'tp2020-65',
    module: 'Pediatria',
    text: 'Criança de quatro anos chega ao ambulatório de Pediatria, acompanhada pela mãe, com história de febre intermitente há duas semanas, manchas arroxeadas pelo corpo e em membros superiores e inferiores, além de inapetência e perda de peso. Exame físico: Inspeção: Regular Estado Geral, descorada 3+/4+, eupneica, com presença de petéquias principalmente em MMII. Palpação: Linfonodomegalia cervical, supraclavicular e inguinal. Na palpação abdominal, presença de hepatoesplenomegalia. Exames Laboratoriais: Hemograma: Hb: 5,2 g/dL / Ht: 18% / Leucócitos: 57.200/mm³. Neutrófilos: 572 mm3 (1%) / Bastonetes: 0 mm3 (0%). Segmentados: 572 mm3 (1%) Linfócitos típicos: 16.016 mm3 (28%). Linfócitos atípicos: 0 mm3 (0%) Blastos: 39.468 mm3 (69%). Plaquetas: 49.000 mm3.\n\nO quadro clínico desta criança é compatível com:',
    options: [
      '(A) Leucemia Mieloide Aguda (LMA)',
      '(B) Leucemia Linfoide Aguda (LLA)',
      '(C) Artrite Reumatoide Juvenil (ARJ)',
      '(D) Parvovirose'
    ],
    correctAnswer: 1,
    explanation: 'Pré-escolar com febre, palidez, petéquias, linfadenopatia generalizada, hepatoesplenomegalia, hiperleucocitose com 69% de blastos, anemia e plaquetopenia: leucemia linfoblástica aguda, o câncer mais comum da infância (pico entre 2 e 5 anos).',
    commentary: 'A LMA é menos frequente nessa idade. A artrite idiopática juvenil e a parvovirose não cursam com blastos no sangue.',
    reference: 'Goodman JE, McGrath PJ. The epidemiology of pain in children and adolescents: a review. Pain 1991; 46:247-64. / Bowyer SL, Hollister RJ. Dores em membros em crianças. In: Levine MD. Clínicas Pediátricas da América do Norte 1984;5: 1105-35. / Trapani S, Grisolia F, Simonini G, Calabri GB, Falcini F. Incidence of occult cancer in children presenting with musculoskeletal symptoms: A 10-year survey in a pediatric rheumatology unit. Seminars in arthritis and rheumatism 2000; 29(6):348-59.',
    tags: ['pediatria', 'hematologia', 'oncologia pediátrica']
  },
  {
    id: 'tp2020-66',
    module: 'Pediatria',
    image: '/images/tp2020-66.webp',
    text: 'Laura, 18 meses de idade, chega ao Pronto-Socorro com quadro de febre há quatro dias, associada a vômitos e alternando irritabilidade e letargia há 1 dia. Tem antecedente pessoal de infecção urinária de repetição. Ao exame físico apresenta-se em mau estado geral, cianose de extremidades, anictérica, febril, dispneia leve (tiragem subcostal e intercostal leves), taquicárdica, pálida e letárgica. Aparelho respiratório e abdome com exames físicos normais. Aparelho cardíaco com BRNF em 2 tempos sem sopros. Pulsos periféricos filiformes e perfusão periférica de 7 segundos. Possui este traçado em monitorização cardíaca:\n\nOs diagnósticos mais prováveis são:',
    options: [
      '(A) Taquicardia supraventricular consequente a choque séptico.',
      '(B) Taquicardia sinusal consequente a episódio de febre.',
      '(C) Taquicardia ventricular com pulso consequente a choque obstrutivo.',
      '(D) Taquicardia sinusal consequente a intoxicação.'
    ],
    correctAnswer: 0,
    explanation: 'Lactente com febre e ITU de repetição, letárgica, com pulsos filiformes e enchimento capilar de 7 segundos: choque séptico de provável foco urinário. O traçado mostra taquicardia de QRS estreito, regular e muito rápida, sem ondas P visíveis — taquicardia supraventricular.',
    commentary: 'Taquicardia sinusal em lactente raramente ultrapassa 220 bpm e tem ondas P visíveis e variabilidade. O QRS é estreito, o que afasta taquicardia ventricular.',
    reference: 'Identificação de Arritmias. In: Suporte de vida avançado em pediatria: Manual do Profissional. Guarulhos: Artes Gráficas e EditoraSesil LTDA – Gráfica Bandeirantes, 2017. P.239-245.',
    tags: ['pediatria', 'emergência', 'arritmias']
  },
  {
    id: 'tp2020-67',
    module: 'Pediatria',
    text: 'Paciente de dois anos de vida é levada à Unidade Básica de Saúde com história de diarreia desde os 9 meses, com padrão de evacuações amolecidas e às vezes líquidas. A mãe refere quadro de dor abdominal e distensão. No histórico alimentar recebeu aleitamento materno exclusivo até os 6 meses, quando iniciou com alimentação complementar. Atualmente mantém aleitamento materno associado a duas refeições, e nos intervalos oferece pães, bolachas e frutas. Há dois meses notou diminuição da aceitação dos alimentos e está perdendo peso, segundo informação da mãe. Exame físico: bom estado geral, hidratada, pálida e emagrecida, distensão abdominal importante e achatamento da região glútea.\n\nDetermine o diagnóstico sindrômico e a provável etiologia:',
    options: [
      '(A) Diarreia Crônica, com provável diagnóstico de Doença Inflamatória Intestinal.',
      '(B) Diarreia Persistente, com intolerância a lactose e indicação de retirada do aleitamento materno devido à alta concentração de lactose.',
      '(C) Diarreia Crônica sem má absorção intestinal, com provável diagnóstico etiológico de Síndrome do Intestino Irritável.',
      '(D) Diarreia Crônica, com indicação de investigar má absorção intestinal como Doença Celíaca e parasitoses.'
    ],
    correctAnswer: 3,
    explanation: 'Diarreia há mais de 30 dias (crônica) com distensão abdominal, palidez, emagrecimento e atrofia glútea, iniciada após a introdução do glúten: síndrome de má absorção. É preciso investigar doença celíaca (anticorpo antitransglutaminase IgA com IgA total) e parasitoses.',
    commentary: 'Diarreia persistente dura de 14 a 29 dias. Não há indicação de suspender o aleitamento. A síndrome do intestino irritável não cursa com má absorção e perda de peso. A DII é rara nessa idade.',
    reference: 'Tratado de Pediatria - Sociedade Brasileira de Pediatria 3ª Edição; Editora Manole, 2014, volume 2; 1067 -1069.',
    tags: ['pediatria', 'gastroenterologia', 'doença celíaca']
  },
  {
    id: 'tp2020-68',
    module: 'Pediatria',
    text: 'O pediatra recebe em seu consultório um paciente do sexo masculino de 14 meses para consulta de rotina. Os pais referem estar preocupados, pois a criança fala muito pouco. Pais referem que a criança nasceu a termo, sem intercorrências pré e perinatais, alimenta-se bem e a vacinação encontra-se atualizada. Sentou-se aos seis meses, engatinhou aos 10 meses e andou com 13 meses. Nega cirurgias ou internações prévias. Passa o dia em casa com a babá, gosta de brincar no tablet. Ao exame, o pediatra observa que fala algumas sílabas, porém sem significado. Aponta para o que quer e imita gestos.\n\nNesta situação, o pediatra deveria:',
    options: [
      '(A) Realizar avaliação de triagem para transtorno do espectro autista e acompanhar clinicamente.',
      '(B) Solicitar avaliação auditiva e encaminhar para a fonoaudiologia.',
      '(C) Orientar os pais quanto à estimulação da criança e fazer acompanhamento clínico frequente.',
      '(D) Solicitar tomografia de crânio e avaliação da neuropediatria.'
    ],
    correctAnswer: 2,
    explanation: 'Aos 14 meses, a criança tem desenvolvimento motor adequado e boa comunicação não verbal (aponta, imita gestos). A fala de palavras com significado ainda pode estar surgindo. A conduta é orientar a estimulação (mais interação, menos telas) e acompanhar de perto.',
    commentary: 'Apontar e imitar gestos falam contra TEA. Avaliação auditiva e fonoaudiológica e exames de imagem não estão indicados nesse momento.',
    reference: 'Burns DAR et al. Tratado de Pediatria. Sociedade Brasileira de Pediatria. 4 Ed, 2017. Seção2, Cap3 – Desenvolvimento normal. / Ministério da Saúde. Caderno de atenção Básica n.33, Saúde da criança: Crescimento de Desenvolvimento, p.119-30, Acompanhamento do Desenvolvimento.',
    tags: ['pediatria', 'desenvolvimento', 'linguagem']
  },
  {
    id: 'tp2020-69',
    module: 'Pediatria',
    text: 'Escolar, 6 anos, masculino, comparece à UBS com história de crises de chiado recorrentes desde os 2 anos de idade. No último mês nega crises ou necessidade de uso de medicação de alívio, mas toda vez que corre ou ri muito, apresenta tosse. Refere dois episódios de despertar noturno por tosse nesse período. Como antecedentes pessoais, nunca foi internado, mas já permaneceu em observação por algumas horas para realização de nebulizações com Fenoterol, sempre com boa resposta. Apresenta também queixas nasais de obstrução e coriza diariamente há três anos, o que traz prejuízo às suas atividades escolares. Tem prick test positivo para epitélio animal. De antecedentes familiares, a mãe refere ter asma.\n\nAssinale a alternativa que melhor representa os diagnósticos desse paciente e o tratamento de manutenção de primeira escolha para esses diagnósticos:',
    options: [
      '(A) Asma parcialmente controlada; rinite alérgica persistente moderada/grave. Corticosteroide inalado em dose baixa a moderada, associado a corticosteroide nasal.',
      '(B) Asma não controlada; rinite alérgica persistente leve. Antagonista do receptor de leucotrieno e higiene nasal com soro fisiológico.',
      '(C) Asma persistente moderada; rinite crônica. Corticosteroide inalado em dose baixa a moderada associado a corticosteroide nasal.',
      '(D) Bronquite crônica, rinite alérgica persistente moderada/grave. Profilaxia ambiental e beta 2 agonista de curta duração, se crise de tosse.'
    ],
    correctAnswer: 0,
    explanation: 'Asma com sintomas aos esforços e despertares noturnos (parcialmente controlada) e rinite alérgica persistente, com prejuízo escolar (moderada/grave). O tratamento de manutenção é corticoide inalatório em dose baixa a moderada associado a corticoide nasal.',
    commentary: 'O antileucotrieno é alternativa, não primeira escolha. Os termos \'bronquite crônica\' e \'persistente moderada\' não são a classificação atual de controle. Usar apenas broncodilatador de resgate é inadequado.',
    reference: 'Diretrizes da Sociedade Brasileira de Pneumologia e Tisiologia para o Manejo da Asma – 2012 / Guideline Global Initiative for Asthma (GINA) update 2019 / IV Brazilian Consensus on Rhinitis - an update on allergic rhinitis 2018',
    tags: ['pediatria', 'asma', 'rinite alérgica']
  },
  {
    id: 'tp2020-70',
    module: 'Pediatria',
    text: 'A.C.S., 18 meses de idade, sexo masculino, é levado à Unidade Básica de Saúde para consulta de rotina. Mãe informa que durante atendimento em Pronto-Socorro há duas semanas por quadro de tosse e coriza foi informada que seu filho apresentava sopro cardíaco. Não havia qualquer queixa em antecedentes pessoais, exceto o fato de apresentar quadros de tosse, coriza e febre de repetição desde que entrou na creche. Nega internações. Desenvolvimento pondero estatural e desenvolvimento neuropsicomotor normal. Ao exame físico encontra-se em bom estado geral, hidratado, ativo, eupneico, acianótico, afebril, boa perfusão periférica, pulsos simétricos. Aparelho Cardiovascular: BRNF, com sopro sistólico suave 2+ em 6+, musical, melhor audível em bordo esternal esquerdo baixo e que diminui de intensidade ao exame, se paciente muda da posição deitado para sentado. FC: 100 bpm, SatO₂ de 95%. Restante do exame físico normal.\n\nFrente aos dados de história e exame físico, qual a principal hipótese diagnóstica e conduta inicial?',
    options: [
      '(A) Principal hipótese diagnóstica é CIV, por tratar-se de cardiopatia congênita acianótica de hiperfluxo pulmonar mais frequente em Pediatria, com clássico sopro sistólico suave, justificando os quadros respiratórios do lactente. Conduta inicial é solicitar ecocardiograma e eletrocardiograma, esperando evidenciar sobrecarga de ventrículo esquerdo.',
      '(B) Principal hipótese diagnóstica é comunicação interatrial (CIA), por tratar-se de cardiopatia congênita cianótica com evolução silenciosa e baixo fluxo sistêmico. A conduta inicial é tranquilizar a mãe e solicitar eletrocardiograma e ecocardiograma.',
      '(C) Principal hipótese diagnóstica é sopro inocente, clássico sopro de Still. A conduta inicial é tranquilizar a mãe, orientando o caráter benigno do provável sopro inocente, solicitar ecocardiograma e acompanhamento pediátrico na Unidade Básica de Saúde.',
      '(D) Principal hipótese diagnóstica é persistência do canal arterial (PCA), cardiopatia congênita acianótica de hipofluxo pulmonar, com sopro sistólico em maquinaria, justificando os quadros respiratórios do lactente. Conduta inicial é solicitar eletrocardiograma, ecocardiograma e avaliação com cardiologista infantil.'
    ],
    correctAnswer: 2,
    explanation: 'Lactente assintomático, com bom desenvolvimento, sopro sistólico suave, musical, em borda esternal esquerda baixa, que diminui ao sentar: sopro de Still, o sopro inocente mais comum na infância.\n\nA conduta é tranquilizar a família e manter o acompanhamento; a banca inclui o ecocardiograma para confirmar.',
    commentary: 'A CIV produz sopro holossistólico rude. A CIA é acianótica. A PCA tem sopro contínuo em maquinaria e é de hiperfluxo. As infecções respiratórias são explicadas pela creche.',
    reference: 'Souza PG, Carvalho MF, Bresolin AC, Santos CCL, Afiune JY, Leite MFM, Barriodíaco PM. / SBP – Departamento Científico de Cardiologia.Avaliação da Criança com Sopro, novembro 2018. / Porto. Semiologia Médica, 8 ed, 2019.',
    tags: ['pediatria', 'cardiologia', 'sopro inocente']
  },
  {
    id: 'tp2020-71',
    module: 'Pediatria',
    text: 'Criança de quatro meses é levada ao Pronto-Socorro Infantil porque não para de chorar. Mãe relata que faz 7 dias que a lactente apresenta choro inconsolável e apresentou crise convulsiva. Nega febre, diarreia, coriza, desconforto respiratório. Faz aleitamento artificial, porque a mãe precisou voltar a trabalhar. O pediatra pergunta se fica na creche, mas a mãe responde que a lactente fica aos cuidados do namorado, que atualmente não trabalha. Ao exame clínico: regular estado geral, afebril, corada, hipoativa e chorosa à manipulação. Durante o exame apresentou uma crise convulsiva tônico-clônica, que cedeu com uso de Diazepam. Crânio: sem abaulamentos ou depressão. Aparelho cardiovascular e aparelho respiratório sem alterações. Abdome: doloroso à palpação, sem visceromegalias. Extremidades: pulso amplo, com perfusão adequada. O pediatra solicita o RX de corpo total: fratura de clavícula direita e alguns calos ósseos. O pediatra suspeita então de maus tratos.\n\nQual é o exame de eleição para fechar o diagnóstico?',
    options: [
      '(A) Líquido cefalorraquidiano',
      '(B) Fundo de olho',
      '(C) Hemograma completo',
      '(D) Tomografia de crânio'
    ],
    correctAnswer: 1,
    explanation: 'Lactente de 4 meses com choro inconsolável, convulsões e fraturas em diferentes estágios de consolidação: forte suspeita de maus-tratos, com possível síndrome do bebê sacudido. O exame de eleição para o diagnóstico é o fundo de olho, que mostra hemorragias retinianas bilaterais.',
    commentary: 'A tomografia de crânio é complementar e deve ser feita, mas o achado característico para o diagnóstico é a hemorragia retiniana. Líquor e hemograma não fecham o diagnóstico.',
    reference: 'SBP, SPSP, CFM, 2018',
    tags: ['pediatria', 'maus-tratos', 'oftalmologia']
  },
  {
    id: 'tp2020-72',
    module: 'Pediatria',
    text: 'Adolescente, 13 anos, com queixa de dor abdominal e vômitos ha 1 dia. Nega febre. Deu entrada no Pronto-Socorro Infantil em regular estado geral, afebril, hipoativo, desidratado ++/4+, com FR 40 rpm, FC 130 bpm, PA 100 x 60 mmHg. Coletado exames: HMG: Hb: 12,8; HT: 38; Leucócitos 9600 (1 bastonete / 40 segmentados / 50 linfócitos); Plaquetas 255.000; Glicemia 289; Na 136; K 5,0; Ureia 20; Creatinina 0,5; PCR 1,0.\n\nUrina 1: 5.000 leucócitos, 3.000 hemácias, proteínas +, corpos cetônicos ++ Gasometria venosa: pH: 7,15 / bicarbonato: 8 Diante deste caso, qual sua conduta inicial?',
    options: [
      '(A) Expansão com soro fisiológico 0,9% 20 mL/kg e insulina regular intramuscular 0,25 UI/kg.',
      '(B) Expansão com soro fisiológico 0,9% 20 mL/kg e reposição de bicarbonato.',
      '(C) Antiemético e analgésico intramuscular e posterior terapia de reidratação oral.',
      '(D) Expansão com soro fisiológico 0,9% 20 mL/kg.'
    ],
    correctAnswer: 3,
    explanation: 'Glicemia de 289, cetonúria e acidose metabólica (pH 7,15 e bicarbonato 8): cetoacidose diabética, sem sinais de choque. A conduta inicial é a expansão com soro fisiológico 0,9% 20 mL/kg. A insulina vem depois da expansão.',
    commentary: 'Insulina IM e bicarbonato não são condutas iniciais (o bicarbonato é reservado a pH < 6,9). Reidratação oral é inadequada na CAD.',
    reference: 'Stape A, Bousso A, Troster EJ, et al. Manual de Normas: Terapia Intensiva Pediátrica, 2 ª edição, São Paulo, Savier, 2009, p 459-463 / Cesar RG, Oecchini R, Passareli MLB, Torre FPF, et al. Emergencias em Pediatria – Protocolos da Santa Casa, 1ª edição, São Paulo, Monole, 2011; 19:257- 268 / Roger´s Textbook of Pediatric Intensive care, 5ª edição, Wolters Kluwer, 2015, 106: 3228 - 3234',
    tags: ['pediatria', 'endocrinologia', 'cetoacidose diabética']
  },
  {
    id: 'tp2020-73',
    module: 'Pediatria',
    image: '/images/tp2020-73.webp',
    text: 'Paciente de três anos iniciou há duas semanas com febre baixa por dois dias, mal-estar, cefaleia e por cinco dias com lesões eritematosas maculo papulares que se confluíram em face e espalharam para braços, pernas e pouco em tronco (conforme foto). Todos os sintomas desapareceram e há um dia, após ter frequentado parque aquático por um dia, reapareceram as lesões na pele.\n\nA mãe, preocupada com a volta da doença, procurou o atendimento e o pediatra pôde presumir que o agente infeccioso dessa patologia é:',
    options: [
      '(A) Morbillivirus paramyxoviridae',
      '(B) Parvovírus B19',
      '(C) Herpes vírus 6 ou 7',
      '(D) Varicela-zoster'
    ],
    correctAnswer: 1,
    explanation: 'Exantema com eritema facial em \'face esbofeteada\', que se espalha em padrão rendilhado para membros e reaparece com calor, exercício ou sol após a resolução: eritema infeccioso (quinta doença), causado pelo parvovírus B19.',
    commentary: 'O sarampo tem pródromo catarral e exantema craniocaudal com febre alta. O HHV-6/7 causa o exantema súbito. A varicela tem lesões vesiculares polimórficas.',
    reference: 'Tratado de Pediatria da Sociedade Brasileira de Pediatria 4ª edição 2017 Campos Júnior, Dioclécio / Burns, Dennis Alexander Rabelo / Lopez, Fabio Ancona. / Belver, Natàlia Claver, et al. "Infecciones por Erythrovirus B19. Seis años de seguimiento en población adulta y pediátrica." Anales de Pediatría. Vol. 90. No. 5. Elsevier Doyma, 2019. / Xavier, Analucia R., et al. "Diagnóstico clínico, laboratorial e profilático do sarampo no Brasil." Jornal Brasileiro de Patologia e Medicina Laboratorial 55.4 (2019): 390-401.',
    tags: ['pediatria', 'doenças exantemáticas', 'parvovírus b19']
  },
  {
    id: 'tp2020-74',
    module: 'Pediatria',
    text: 'Pedro, de 6 meses, iniciou com febre e irritabilidade há 1 dia, sem outros sintomas. Procurou a emergência pediátrica e ao exame encontra-se afebril, em bom estado, hidratado, ativo e chorando frequentemente. Restante do exame normal. Foi solicitado sumário de urina, que mostrou leucocitúria, nitrito positivo e leucoesterase positiva. A amostra foi colhida por sonda vesical de alívio e a urocultura está em andamento.\n\nDesta forma, o socorrista deve proceder com a seguinte terapêutica baseada na hipótese diagnóstica inicial:',
    options: [
      '(A) Como se trata de infecção do trato urinário (ITU), o socorrista deve introduzir aminoglicosídeo endovenoso, solicitar ultrassom de rins e vias urinárias, aguardando urocultura para adequar antibiótico via oral.',
      '(B) Como se trata de febre sem sinais localizatórios, o socorrista deve aguardar hemograma, PCR (proteína C reativa) para introduzir antibióticos confirmando sua conduta com o antibiograma.',
      '(C) Como se trata de febre sem sinais localizatórios, o socorrista deve checar o status vacinal do paciente e se duas doses de pneumococo e hemófilos deve aguardar urocultura para introdução de antibiótico, visto que o diagnóstico de ITU se faz com urocultura.',
      '(D) Como se trata de infecção do trato urinário (ITU), o socorrista deve introduzir amoxacilina com clavulanato de potássio via oral e retorno em 2 dias para resultado de urocultura e confirmar esquema antibiótico.'
    ],
    correctAnswer: 0,
    explanation: 'Lactente febril com urina sugestiva de infecção (leucocitúria, nitrito e esterase positivos): ITU febril/pielonefrite. A banca indica antibiótico parenteral (aminoglicosídeo), ultrassonografia de vias urinárias e adequação para via oral após a urocultura e a melhora.',
    commentary: 'Não se deve aguardar hemograma, PCR ou urocultura para iniciar antibiótico. Observação: lactentes acima de 2–3 meses, em bom estado e tolerando via oral, podem ser tratados por via oral (como na alternativa D), segundo várias diretrizes — o ponto é discutível.',
    reference: 'Documento científico do departamento de nefrologia da Sociedade Brasileira de Pediatria dezembro 2016. Infecção do Trato urinário. Lipinski, RW; Garcia, CD; Kaufman, A; Uhmann, A; Silvestre, LC, Bresolin, NL. / Machado, Pâmela Araujo, Ethel Antunes Wilhelm, and Cristiane Luchese. "Prevalência de infecções do trato urinário e perfil de susceptibilidade a antimicrobianos de bactérias isoladas." Disciplinarum Scientia| Saúde 18.2 (2018): 271-287. / Marcdante, Karen. Nelson princípios de pediatria. Elsevier Brasil, 2016. Capítulo 114 Infecção do trato urinário.',
    tags: ['pediatria', 'nefrologia', 'infecção urinária']
  },
  {
    id: 'tp2020-75',
    module: 'Pediatria',
    text: 'Recém-nascido com 24 horas de vida, prematuro, peso de nascimento de 1200g, com diagnóstico de septicemia, é internato na Unidade de Tratamento Intensivo, com quadro de instabilidade térmica, irritabilidade e convulsão. Ao exame físico, apresenta abaulamento da fontanela anterior. Após admissão, o médico suspeitou de meningite e solicitou vários exames, além do líquor cefalorraquidiano.\n\nAssinale a alternativa correta em relação ao agente etiológico:',
    options: [
      '(A) Estreptococo do grupo B',
      '(B) Haemophilus influenzae',
      '(C) Estreptococo do grupo A',
      '(D) Neisseria meningitidis'
    ],
    correctAnswer: 0,
    explanation: 'Sepse e meningite neonatal precoce (primeiras 72 horas) em prematuro: os principais agentes são o estreptococo do grupo B (S. agalactiae), E. coli e outras enterobactérias, além de Listeria.',
    commentary: 'Haemophilus influenzae e Neisseria meningitidis acometem lactentes maiores e crianças. O estreptococo do grupo A não é agente típico de meningite neonatal.',
    reference: 'Infectologia pediatrica; Calil KairallaFarhat, Luiza Helena Fallerios Rodrigues Carvalho, Regina Celia de Menezes Succi, 3a edição 2007. / Terapêutica em pediatria; Fábio Ancona Lopes. Flávio Giribela, Túlio Kanstantyner. Manole, 2010. / Pediatria: Diagnostico e Tratamento; Murahovschi, Jayme. 4.ed. / rev. Ampl. São Paulo: Sarvier, 1990.',
    tags: ['pediatria', 'neonatologia', 'meningite']
  },
  {
    id: 'tp2020-76',
    module: 'Pediatria',
    text: 'Criança de 7 anos, sexo masculino, é trazida ao ambulatório de pediatria por dor na região inguinal esquerda com irradiação para o joelho há 2 semanas, associado a claudicação. Nega febre, dor ou edema em outras articulações. O exame físico é normal, exceto pela restrição da flexão, abdução e rotação interna do quadril esquerdo. Hemograma normal, VHS = 15 mmHg; proteína C reativa (PCR) = 12. Radiografia fragmentação parte anterior da epífise.\n\nQual sua hipótese diagnostica?',
    options: [
      '(A) Artrite séptica de quadril',
      '(B) Epifisiólise',
      '(C) Osteossarcoma',
      '(D) Legg-Calvé-Perthes'
    ],
    correctAnswer: 3,
    explanation: 'Menino de 7 anos com dor no quadril referida no joelho, claudicação, limitação de abdução e rotação interna, provas inflamatórias normais e radiografia com fragmentação da epífise femoral: doença de Legg-Calvé-Perthes (necrose avascular da cabeça femoral).',
    commentary: 'A artrite séptica cursa com febre e provas inflamatórias elevadas. A epifisiólise ocorre em adolescentes obesos. O osteossarcoma acomete metáfises.',
    reference: 'Tratado de pediatria, 4ª edição volume 2. Sessão 24, Capítulo 6 Dores nos Membros Inferiores da Criança, página 2025.',
    tags: ['pediatria', 'ortopedia']
  },
  {
    id: 'tp2020-77',
    module: 'Pediatria',
    text: 'Escolar de 8 anos com queixa de cefaleia holocraniana há alguns meses. Mãe refere que a criança chora com a dor de cabeça e está muito preocupada. Nega obstrução nasal, coriza e febre. Não acompanhada de náuseas ou vômitos. Apresenta melhora com analgésico, como dipirona ou paracetamol, e melhora também com o sono.\n\nAssinale a alternativa correta em relação ao provável diagnóstico dessa criança:',
    options: [
      '(A) Cefaleia tipo enxaqueca',
      '(B) Cefaleia tipo tensional',
      '(C) Cefaleia trigêmino-autonômica',
      '(D) Cefaleia por hipertensão intracraniana'
    ],
    correctAnswer: 1,
    explanation: 'Cefaleia holocraniana crônica, sem náuseas ou vômitos, que melhora com analgésicos simples e com o sono: cefaleia do tipo tensional.',
    commentary: 'A enxaqueca na criança costuma ser pulsátil, com náuseas, foto/fonofobia e piora com atividade. A cefaleia trigêmino-autonômica tem sinais autonômicos. A hipertensão intracraniana causa cefaleia matinal com vômitos e não melhora com o sono.',
    reference: 'Pediatria Básica. Pediatria Geral e Neonatologia; Eduardo Marcondes, Flávio Adolfo Costa Vaz, José Lauro Araujo Ramos, Yassuhiko Okay. 9ª edição. Sarvier, 2003. / Pediatria: Diagnostico e Tratamento; Murahovschi, Jayme. 4.ed. / rev. Ampl. São Paulo: Sarvier, 1990. / Terapêutica em pediatria; Fábio Ancona Lopes. Flávio Giribela, Túlio Konstantyner. Manole, 2010.',
    tags: ['pediatria', 'neurologia', 'cefaleias']
  },
  {
    id: 'tp2020-78',
    module: 'Pediatria',
    text: 'Lactente de 6 meses está em aleitamento materno exclusivo e vai iniciar introdução de frutas. Nasceu com 2.300g, 47cm, de 38 semanas de gestação.\n\nQuanto à suplementação de Ferro elementar, deve-se prescrever neste momento:',
    options: [
      '(A) Tratamento com 1 mg/kg de peso/dia de Ferro elementar.',
      '(B) Profilaxia com 3 mg/kg de peso/dia de Fe elementar.',
      '(C) Profilaxia com 2 mg/kg de peso/dia de Fe elementar.',
      '(D) O aleitamento materno exclusivo não indica prescrição de ferro nessa faixa etária.'
    ],
    correctAnswer: 2,
    explanation: 'Lactente a termo, porém com baixo peso ao nascer (2.300 g), em aleitamento materno exclusivo: pela SBP, recém-nascidos com peso < 2.500 g devem receber ferro profilático na dose de 2 mg/kg/dia de ferro elementar.',
    commentary: 'A dose de 1 mg/kg/dia é para RN a termo com peso adequado. 3 mg/kg/dia é para peso < 1.500 g. O aleitamento exclusivo não dispensa a profilaxia.',
    reference: 'Manual de Nutrição da Sociedade Brasileira de Pediatria / Consenso de Anemia da Sociedade Brasileira de Pediatria / Diretrizes Anemia do Ministério da Saúde',
    tags: ['pediatria', 'nutrição', 'anemia ferropriva']
  },
  {
    id: 'tp2020-79',
    module: 'Pediatria',
    text: 'Escolar, 9 anos, apresenta quadro de fotofobia, ardor, hiperemia conjuntival e lacrimejamento ocular e cefaleia. É levado ao pediatra na unidade de pronto atendimento. A história clínica revela que sintomas apareceram desde o final do ano passado e que regrediram um pouco durante as férias, porém com o retorno das atividades escolares observou piora do quadro novamente. Mãe também observou que apresenta sonolência durante o dia, principalmente quando força os olhos (sic).\n\nResponda qual deve ser a provável hipótese diagnóstica e conduta do pediatra após examiná-lo:',
    options: [
      '(A) Enxaqueca, encaminhar para neurologista.',
      '(B) Conjuntivite, prescrever colírio antibacteriano.',
      '(C) Alergia, encaminhar para alergologista.',
      '(D) Ametropia, encaminhar para oftalmologista.'
    ],
    correctAnswer: 3,
    explanation: 'Fotofobia, ardor, lacrimejamento, cefaleia e sonolência que pioram com o esforço visual escolar e melhoram nas férias: ametropia (erro refrativo). A criança deve ser encaminhada ao oftalmologista para avaliação da acuidade visual e refração.',
    commentary: 'Enxaqueca, conjuntivite bacteriana e alergia não explicam a relação com o esforço visual.',
    reference: 'PROPED Programa de atualização em terapêutica Pediátrica. Ciclo 5, v. 1. 2018, p 11-49. / Revista de Pediatria SOPERJ - suplemento, p40-46, 2011 / PROMEF – Ciclo 15, vol 1, 2020. p 35-60.',
    tags: ['pediatria', 'oftalmologia']
  },
  {
    id: 'tp2020-80',
    module: 'Pediatria',
    text: 'Menor com 4 anos de idade é levada ao Pronto-Socoro devido a quadro de intensa dor abdominal, periumbilical e diarreia fétida há cerca de 7 dias. Mãe relata perda de apetite e muitos gases intestinais.\n\nApós exame físico normal, com ruídos hidroaéreos aumentados, sem visceromegalias, qual a hipótese diagnóstica mais provável?',
    options: [
      '(A) Alergia à proteína do leite de vaca',
      '(B) Giardíase',
      '(C) Infecção urinária',
      '(D) Intoxicação alimentar'
    ],
    correctAnswer: 1,
    explanation: 'Criança de 4 anos com dor abdominal periumbilical, diarreia fétida, flatulência e perda de apetite: giardíase, parasitose muito prevalente em crianças menores de 10 anos.',
    commentary: 'Alergia à proteína do leite de vaca é mais comum no lactente. Infecção urinária e intoxicação alimentar não explicam o quadro arrastado com má absorção.',
    reference: 'Projeto Diretrizes AMB - Abordagem das Parasitoses Intestinais mais Prevalentes na Infância. / Rev. APS, Juiz de Fora, v. 13, n. 2, p. 231-240, abr./jun. 2010. / Brasil - Secretaria de Vigilância em Saúde, 8. ed. rev. Brasília: Ministério da Saúde, 2010.',
    tags: ['pediatria', 'parasitoses intestinais']
  }
];
