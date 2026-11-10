import { Question } from '../types';

export const ENAMED_QUESTIONS: Question[] = [
  {
    id: 'enamed-2025-1',
    module: 'ENAMED',
    text: 'Mulher de 58 anos, com diagnóstico de hipertensão arterial sistêmica (HAS) e em tratamento irregular, é encaminhada ao ambulatório de clínica médica de atenção secundária. Queixa-se de fadiga e dispneia aos esforços, com piora progressiva.\n\nAo exame físico, é observado ritmo cardíaco regular em 4 tempos (B3 + B4), sem sopros no precórdio, mas com crépitos em bases pulmonares; pressão arterial: 148 x 90 mmHg.\n\nEcocardiograma transtorácico evidencia hipertrofia ventricular esquerda concêntrica, associada com fração de ejeção de 38% (por Simpson). Exames laboratoriais normais, salvo pela elevação sérica de peptídeo natriurético tipo B (BNP). Para melhorar o controle da HAS e o prognóstico da paciente, o tratamento com inibidor da enzima conversora de angiotensina foi mantido, e o especialista optou por associar determinado fármaco, devido ao impacto positivo no prognóstico de sobrevida dessa paciente.\n\nO fármaco introduzido no tratamento da paciente foi:',
    options: [
      '(A) espironolactona.',
      '(B) clortalidona.',
      '(C) hidralazina.',
      '(D) clonidina.'
    ],
    correctAnswer: 0, // A
    explanation: 'A paciente apresenta um quadro típico de insuficiência cardíaca com fração de ejeção reduzida (ICFEr), evidenciado pela dispneia progressiva, presença de terceira bulha (B3), estertores pulmonares, BNP elevado e fração de ejeção de 38% ao ecocardiograma. A hipertensão arterial de longa data levou ao remodelamento cardíaco e à disfunção sistólica do ventrículo esquerdo.\n\nApenas a espironolactona possui benefício comprovado na redução da mortalidade em pacientes com ICFEr entre as alternativas. Como antagonista do receptor mineralocorticoide, reduz os efeitos deletérios da aldosterona, diminuindo retenção hidrossalina, fibrose miocárdica e remodelamento ventricular.',
    commentary: 'Clortalidona, hidralazina e clonidina podem ser utilizadas para controle pressórico em situações específicas, porém não apresentam o mesmo benefício prognóstico na insuficiência cardíaca com fração de ejeção reduzida.',
    reference: 'Diretrizes Brasileiras de Insuficiência Cardíaca / Sociedade Brasileira de Cardiologia (SBC)',
    tags: ['cardiologia', 'farmacologia', 'insuficiência cardíaca']
  },
  {
    id: 'enamed-2025-2',
    module: 'ENAMED',
    text: 'Lactente de 4 meses é levado ao serviço de emergência com história de vômitos, poliúria, episódios de fraqueza intensa e febre. Ao exame físico, apresenta-se com desidratação grave e déficit de crescimento significativo. Encontram-se, ainda, sinais radiológicos de osteopenia e raquitismo resistente à vitamina D.\n\nCom base na principal hipótese diagnóstica, o distúrbio ácido-básico relacionado ao caso é:',
    options: [
      '(A) alcalose respiratória hipoclorêmica.',
      '(B) acidose metabólica hiperclorêmica.',
      '(C) alcalose respiratória hipocalêmica.',
      '(D) acidose metabólica hipercalêmica.'
    ],
    correctAnswer: 1, // B
    explanation: 'O quadro clínico é altamente sugestivo de acidose tubular renal (ATR), doença caracterizada por incapacidade dos túbulos renais em reabsorver bicarbonato ou secretar adequadamente íons hidrogênio. Como consequência, desenvolve-se uma acidose metabólica com ânion gap normal, também denominada acidose metabólica hiperclorêmica.\n\nEssa acidose crônica leva à mobilização de cálcio dos ossos, justificando a osteopenia, o raquitismo resistente à vitamina D e o importante déficit de crescimento. A poliúria, a desidratação recorrente e a fraqueza muscular também são manifestações frequentes dessa doença.',
    commentary: 'Observação: esta questão foi excluída do cálculo da nota pelo ENAMED devido a desajuste estatístico na prova oficial, mas seu conceito fisiopatológico e correlação clínica de ATR continuam extremamente educativos.',
    reference: 'Tratado de Pediatria da SBP / Manual de Nefrologia Pediátrica',
    tags: ['pediatria', 'nefrologia', 'distúrbio ácido-básico']
  },
  {
    id: 'enamed-2025-3',
    module: 'ENAMED',
    text: 'Homem de 45 anos foi encontrado inconsciente por familiares junto a uma escada de sua casa. Familiares o conduziram em carro próprio, sem medidas-padrão de atendimento pré-hospitalar. Não sabem por quanto tempo ficou desacordado e nem sobre o histórico de saúde. Quando deu entrada no pronto-socorro, encontrava-se inconsciente, com equimose e escoriações na região orbital e palpebral direita, além de escoriações na região cervical posterior e em membros à direita. Não apresentava resposta ao comando verbal, mas respirava espontaneamente com frequência normal. Pressão arterial de 140 × 90 mmHg e pupilas isocóricas. Durante a avaliação, abriu os olhos e começou a se mexer, ainda sem responder a questões ou comandos. Após 30 minutos começou a responder, mas informava não se lembrar de ter caído da escada.\n\nConsiderando o quadro, a conduta adequada é:',
    options: [
      '(A) tomografia de crânio, face e coluna cervical; radiografia de membros; manter o paciente em observação por 12 horas.',
      '(B) radiografia de crânio, coluna cervical e membros em duas posições; internar o paciente para observação.',
      '(C) tomografia de crânio, face e radiografia de membros; liberar o paciente para observação domiciliar.',
      '(D) radiografia de crânio e face; radiografia de membros; internar o paciente por 24 horas.'
    ],
    correctAnswer: 0, // A
    explanation: 'O paciente sofreu um traumatismo cranioencefálico decorrente de queda de escada, apresentando perda de consciência, amnésia pós-traumática e lesões na face e na região cervical. Esses achados representam critérios para realização de tomografia computadorizada de crânio e de coluna cervical, conforme recomendado pelas diretrizes do Advanced Trauma Life Support (ATLS) e da Brain Trauma Foundation.\n\nAlém da investigação das possíveis lesões intracranianas e cervicais, as escoriações em membros justificam a realização de radiografias para pesquisa de fraturas. Apesar da melhora do nível de consciência durante a observação, a presença de perda de consciência e amnésia contraindica alta imediata, sendo recomendado manter o paciente em observação hospitalar para identificação precoce de possíveis complicações tardias.',
    commentary: 'As alternativas que utilizam apenas radiografias simples não correspondem à abordagem atual do traumatismo cranioencefálico (TCE), e a alta domiciliar imediata seria inadequada diante dos fatores de risco apresentados.',
    reference: 'Diretrizes do ATLS (Advanced Trauma Life Support) / Brain Trauma Foundation',
    tags: ['cirurgia', 'trauma', 'tce']
  },
  {
    id: 'enamed-2025-4',
    module: 'ENAMED',
    text: 'Paciente de 30 anos procurou consultório de ginecologia relatando fadiga, dismenorreia progressiva e dispareunia de profundidade. Toque vaginal: útero de volume normal, retroversofletido, dor à mobilização do colo.\n\nCom base nessas informações, a principal hipótese diagnóstica é:',
    options: [
      '(A) doença inflamatória pélvica.',
      '(B) miomatose uterina.',
      '(C) cisto hemorrágico.',
      '(D) endometriose.'
    ],
    correctAnswer: 3, // D
    explanation: 'A paciente apresenta o quadro clínico clássico de endometriose. A dismenorreia progressiva, a dispareunia profunda e a dor à mobilização do colo uterino são manifestações frequentes dessa doença. O achado de útero retroversofletido também é comum, principalmente quando existem aderências envolvendo o fundo de saco de Douglas e os ligamentos uterossacros.\n\nA endometriose é caracterizada pela presença de tecido semelhante ao endométrio fora da cavidade uterina, desencadeando inflamação crônica, fibrose e aderências, responsáveis pela dor pélvica progressiva e pelas alterações ao exame físico.',
    commentary: 'A doença inflamatória pélvica geralmente cursa com quadro infeccioso agudo, frequentemente acompanhado de febre e corrimento vaginal. A miomatose uterina costuma provocar aumento do volume uterino e sangramento uterino anormal, enquanto os cistos hemorrágicos ovarianos normalmente causam dor pélvica aguda e unilateral, sem o padrão crônico e progressivo observado neste caso.',
    reference: 'Tratado de Ginecologia da FEBRASGO',
    tags: ['ginecologia', 'endometriose', 'dor pélvica']
  },
  {
    id: 'enamed-2025-5',
    module: 'ENAMED',
    text: 'Homem de 28 anos, estudante universitário, residente em zona urbana, comparece à Unidade Básica de Saúde (UBS) referindo aparecimento de lesão cutânea em região dorsal da mão, cerca de 1 mês após ter sofrido arranhadura de gato de rua. A lesão apresenta úlceras com presença de crostas além de nodulações próximas. Foi submetido à biópsia da lesão cutânea e cultura de material. Observou-se dermatite granulomatosa difusa, presença de corpos asteroides e material eosinofílico ao redor de células características.\n\nQual é a principal hipótese diagnóstica e o respectivo tratamento para esse caso?',
    options: [
      '(A) Furunculose; cefalexina por 7 dias.',
      '(B) Herpes-zoster; aciclovir por 10 dias.',
      '(C) Esporotricose; itraconazol por 120 dias.',
      '(D) Paracoccidioidomicose; anfotericina B por 30 dias.'
    ],
    correctAnswer: 2, // C
    explanation: 'O quadro clínico é típico de esporotricose cutâneo-linfática, causada pelo fungo Sporothrix spp. A história de arranhadura de gato, seguida do surgimento de úlcera com crostas e nódulos distribuídos ao longo dos vasos linfáticos, é altamente sugestiva dessa micose. A biópsia demonstra dermatite granulomatosa e corpos asteroides, achados frequentemente observados na doença.\n\nO tratamento de primeira linha é o itraconazol, administrado por aproximadamente 3 a 6 meses, ou até 2 a 4 semanas após a resolução completa das lesões, sendo 120 dias um tempo compatível com as recomendações das diretrizes.',
    commentary: 'As demais alternativas não são compatíveis com o quadro clínico apresentado.',
    reference: 'Consenso Brasileiro de Esporotricose / Sociedade Brasileira de Infectologia',
    tags: ['infectologia', 'dermatologia', 'esporotricose'],
    image: '/images/enamed2025-5.webp'
  },
  {
    id: 'enamed-2025-6',
    module: 'ENAMED',
    text: 'Observe o encaminhamento realizado por um médico de família.\n\n"À cardiologia,\n\nEncaminho o Sr. J. L. S., de 56 anos, com diagnóstico de cardiopatia isquêmica, que sofreu um infarto agudo do miocárdio há 3 meses. Tem orientação para o uso de antiagregantes plaquetários, mas tem história de úlcera péptica e teve reação alérgica ao clopidogrel e à ticlopidina. Desta forma, solicito orientação quanto à conduta preventiva."\n\nAo ser assistido pelo cardiologista, o paciente será atendido em qual nível de atenção e receberá que tipo de prevenção, respectivamente?',
    options: [
      '(A) Primário; secundário.',
      '(B) Secundário; secundário.',
      '(C) Terciário; terciário.',
      '(D) Quaternário; terciário.'
    ],
    correctAnswer: 1, // B
    explanation: 'O paciente foi encaminhado da Unidade Básica de Saúde para avaliação por um cardiologista, caracterizando atendimento na atenção secundária, que corresponde ao nível especializado ambulatorial.\n\nComo o paciente já apresenta cardiopatia isquêmica e sofreu infarto agudo do miocárdio, todas as medidas terapêuticas visam evitar novos eventos cardiovasculares. Portanto, trata-se de prevenção secundária, cujo objetivo é reduzir recorrências, complicações e mortalidade em indivíduos que já possuem doença estabelecida.',
    commentary: 'O encaminhamento ao especialista focaliza o nível secundário, e a abordagem de patologia já manifesta visando evitar novos eventos caracteriza a prevenção secundária.',
    reference: 'Tratado de Medicina de Família e Comunidade / Diretrizes de Prevenção Cardiovascular',
    tags: ['saúde coletiva', 'prevenção', 'níveis de atenção']
  },
  {
    id: 'enamed-2025-7',
    module: 'ENAMED',
    text: 'Homem de 20 anos, com diagnóstico de esquizofrenia, chega à Unidade de Pronto Atendimento (UPA) acompanhado de familiares, que descrevem que o paciente acordou "torto". Há 5 dias, foi realizada a troca de risperidona por haloperidol, pois aquela estava em falta na farmácia. Paciente nega outras queixas clínicas. Ao exame, apresenta contratura de região cervical e fácies de dor.\n\nQuais são, respectivamente, a hipótese diagnóstica mais provável e a conduta mais adequada?',
    options: [
      '(A) Distonia; biperideno intramuscular.',
      '(B) Acatisia; haloperidol intramuscular.',
      '(C) Discinesia tardia; diazepam intramuscular.',
      '(D) Síndrome extrapiramidal; prometazina intramuscular.'
    ],
    correctAnswer: 0, // A
    annulled: true,
    explanation: 'O quadro clínico é bastante sugestivo de distonia aguda induzida por haloperidol, caracterizada por contrações musculares involuntárias, principalmente em pescoço, mandíbula e musculatura ocular, surgindo poucos dias após o início de um antipsicótico típico. O tratamento mais recomendado consiste na administração de biperideno intramuscular (anticolinérgico de ação rápida).',
    commentary: 'Observação: Esta questão foi anulada pelo ENAMED devido à possibilidade de uso alternativo de prometazina intramuscular em alguns protocolos locais, gerando margem para dupla interpretação nas alternativas A e D.',
    reference: 'Diretrizes de Psiquiatria / Emergências Psiquiátricas',
    tags: ['psiquiatria', 'farmacologia', 'efeitos extrapiramidais']
  },
  {
    id: 'enamed-2025-8',
    module: 'ENAMED',
    text: 'Mulher de 20 anos procura atendimento médico no ambulatório de clínica médica de referência devido a quadro iniciado há 3 meses, com dor e edema articular acometendo articulações das mãos (interfalangeanas proximais, metacarpofalangeanas e punhos), assim como cotovelos, joelhos e tornozelos. Relata rigidez matinal que persiste por mais de 2 horas. O exame físico confirma dor e edema nas articulações descritas, além de mucosas hipocoradas (++/4+), sem outras alterações.\n\nA hipótese diagnóstica a ser considerada, o achado laboratorial esperado e a primeira linha de tratamento indicada são, respectivamente,',
    options: [
      '(A) esclerose sistêmica; níveis elevados de creatina quinase; prednisona.',
      '(B) artrite reumatoide; pesquisa de fator reumatoide (FR) positivo; metotrexato.',
      '(C) lúpus eritematoso sistêmico; FAN com padrão nuclear pontilhado fino denso; cloroquina.',
      '(D) doença mista do tecido conjuntivo; FAN com padrão nuclear pontilhado fino; azatioprina.'
    ],
    correctAnswer: 1, // B
    explanation: 'A paciente apresenta um quadro clássico de artrite reumatoide, caracterizado por poliartrite inflamatória simétrica envolvendo pequenas articulações das mãos, punhos e outras articulações, associada à rigidez matinal prolongada por mais de uma hora. A anemia (mucosas hipocoradas) é frequente em doenças inflamatórias crônicas. O fator reumatoide é comumente solicitado e o metotrexato é a droga modificadora do curso da doença (DMARD) de primeira escolha.',
    commentary: 'O metotrexato deve ser iniciado precocemente para reduzir inflamação, prevenir deformidades e retardar a progressão da doença.',
    reference: 'Consenso Brasileiro de Artrite Reumatoide / Sociedade Brasileira de Reumatologia (SBR)',
    tags: ['reumatologia', 'artrite reumatoide', 'autoimune']
  },
  {
    id: 'enamed-2025-9',
    module: 'ENAMED',
    text: 'Paciente de 7 anos, na 4ª semana de tratamento quimioterápico para leucemia linfocítica aguda, é admitido em hospital terciário com história de febre há 12 horas (temperatura axilar de 39 °C), tosse e dispneia. Após 24 horas da admissão, segue febril, apesar de ter usado dipirona há 1 hora, e mantém diurese de 2 mL/kg/h. Exame físico: hidratado; pálido; orientado no tempo e no espaço; frequência cardíaca de 130 bpm; temperatura axilar de 39 °C; frequência respiratória de 36 irpm; pressão arterial de 90 × 60 mmHg; boa perfusão periférica; murmúrio vesicular diminuído em base de hemitórax à direita, com crepitações; bulhas taquicárdicas; fígado a 4 cm do rebordo costal direito e 5 cm do apêndice xifoide; baço a 4 cm do rebordo costal esquerdo. Os exames laboratoriais evidenciam lactato aumentado, acidose metabólica e hemograma com leucocitose com desvio à esquerda.\n\nCom base no quadro descrito, o diagnóstico é:',
    options: [
      '(A) sepse.',
      '(B) choque séptico.',
      '(C) disfunção de múltiplos órgãos.',
      '(D) síndrome da resposta inflamatória sistêmica.'
    ],
    correctAnswer: 0, // A
    annulled: true,
    explanation: 'O caso descreve uma criança imunossuprimida com provável pneumonia e sinais laboratoriais de gravidade, como lactato elevado e acidose metabólica. Esses elementos sugerem sepse (disfunção orgânica decorrente de resposta desregulada do hospedeiro à infecção).',
    commentary: 'Observação: Esta questão foi anulada pelo ENAMED administrativamente devido a divergências de critérios diagnósticos em pediatria internacional versus nacional.',
    reference: 'Campanha de Sobrevivência à Sepse em Pediatria',
    tags: ['pediatria', 'oncologia', 'sepse']
  },
  {
    id: 'enamed-2025-10',
    module: 'ENAMED',
    text: 'Paciente feminina de 78 anos, com 24 horas de evolução de dor e abaulamento progressivo em região inguinal direita. Apresentou também alguns episódios de vômitos e diminuição da eliminação de flatos. Antecedentes: neoplasia de mama há 30 anos, diabetes mellitus há 20 anos e tabagista de 40 maços/ano. Ao exame estava normotensa, eucárdica, afebril, eupneica. Índice de massa corporal de 35 kg/m². Abdome globoso, depressível, com abaulamento não redutível e desconforto à palpação em região inguinal direita, com discreta hiperemia local e sem sinais de irritação peritoneal.\n\nResultados dos exames laboratoriais:\n\nHemoglobina: 13 g/dL\nLeucócitos: 10.300/mm³\nPlaquetas: 261.000/mm³\nCreatinina: 1,8 mg/dL\nUreia: 65 mg/dL\n\nA hipótese diagnóstica mais provável é:',
    options: [
      '(A) isquemia mesentérica.',
      '(B) hérnia inguinal indireta.',
      '(C) hérnia femoral encarcerada.',
      '(D) neoplasia de cólon obstrutiva.'
    ],
    correctAnswer: 2, // C
    annulled: true,
    explanation: 'O quadro clínico é altamente sugestivo de hérnia femoral encarcerada, diagnóstico comum em mulheres idosas. O abaulamento inguinal doloroso, irredutível, associado a sintomas de oclusão intestinal (vômitos e diminuição de eliminação de flatos) sinaliza o encarceramento agudo.',
    commentary: 'Observação: Esta questão foi anulada oficialmente pelo ENAMED por erro material de digitação/redação divergente entre os cadernos de prova, mas o raciocínio diagnóstico permanece perfeitamente válido.',
    reference: 'Sabiston Tratado de Cirurgia',
    tags: ['cirurgia', 'hérnia', 'obstrução intestinal']
  },
  {
    id: 'enamed-2025-11',
    module: 'ENAMED',
    text: 'Paciente de 25 anos, com duas gestações e um parto, no segundo trimestre de gestação, compareceu à primeira consulta de pré-natal sem queixas. Após orientações e realização dos testes rápidos, verificou-se que o teste para sífilis foi positivo e imediatamente a paciente recebeu 2,4 milhões UI de penicilina benzatina intramuscular. Paciente nega diagnóstico e tratamento prévios para sífilis.\n\nEm relação ao acompanhamento da paciente, é correto afirmar que',
    options: [
      '(A) com o tratamento instituído, o feto não terá sequelas.',
      '(B) titulações menores ou iguais a um quarto indicarão cicatriz sorológica.',
      '(C) a queda de duas titulações do VDRL indicará efetividade de tratamento.',
      '(D) o exame de FTA-Abs reagente indicará doença ativa.'
    ],
    correctAnswer: 2, // C
    annulled: true,
    explanation: 'Embora a questão tenha sido anulada, o acompanhamento da sífilis durante a gestação é realizado principalmente por meio dos testes não treponêmicos, como o VDRL. Em geral, espera-se uma queda de duas diluições (quatro vezes) do título do VDRL após tratamento adequado, indicando resposta terapêutica.',
    commentary: 'Observação: Esta questão foi anulada pelo ENAMED. A alternativa C é a que mais se aproxima do conceito correto, mas a forma como foi redigida gerou interpretação controversa, motivo pelo qual a banca optou pela anulação. A alternativa A é falsa porque o tratamento reduz de forma significativa, mas não zera o risco. B utiliza um conceito inadequado de cicatriz sorológica, que não é definida apenas por um título do VDRL. D é incorreta pois o FTA-Abs permanece reagente por muitos anos (frequentemente para toda a vida) e não indica atividade da doença.',
    reference: 'Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com Infecções Sexualmente Transmissíveis (IST) / Ministério da Saúde',
    tags: ['ginecologia', 'obstetrícia', 'sífilis', 'gestação']
  },
  {
    id: 'enamed-2025-12',
    module: 'ENAMED',
    text: 'Homem de 52 anos, branco, solteiro, comparece à consulta agendada na Unidade Básica de Saúde (UBS) desejando realizar revisão clínica e exames laboratoriais. Desde os 35 anos não faz acompanhamento de saúde. Relata história familiar de diabetes e hipertensão, e a mãe faleceu com câncer de pulmão. Sem história familiar de câncer de próstata. Fuma cerca de 2 maços por dia há 21 anos. Exame físico: pressão arterial de 120 × 80 mmHg, índice de massa corporal de 23 kg/m², sem outras alterações.\n\nConsiderando as recomendações de rastreamento para esse paciente, o médico de família e comunidade deve',
    options: [
      '(A) solicitar exames de colesterol total e frações, hemograma, glicemia de jejum, creatinina, PSA, radiografia de tórax, colonoscopia, realizar toque retal; orientar sobre a prática de atividade física regular.',
      '(B) solicitar exames de colesterol total, glicemia de jejum, pesquisa de sangue oculto nas fezes, PSA, ofertar anti-HIV e HBsAg, realizar toque retal; orientar sobre participação no grupo na UBS para abandono do tabagismo.',
      '(C) abordar mudanças no estilo de vida e cessação do tabagismo; acompanhar, em consultas longitudinais, as futuras possibilidades de exames complementares, quando o paciente atingir faixa etária para investigações adicionais.',
      '(D) solicitar exames de colesterol total, HDL e triglicerídeos, glicemia de jejum, pesquisa de sangue oculto nas fezes, ofertar testes rápidos para HIV, sífilis e hepatites B e C; realizar abordagem sobre possibilidade de cessação do tabagismo.'
    ],
    correctAnswer: 3, // D
    explanation: 'O paciente possui 52 anos e apresenta importante fator de risco cardiovascular devido ao tabagismo intenso. Nessa faixa etária, recomenda-se rastreamento para dislipidemia (colesterol total, HDL e triglicerídeos), diabetes mellitus (glicemia de jejum) e câncer colorretal (pesquisa de sangue oculto nas fezes), além da oferta de testes para infecções sexualmente transmissíveis conforme avaliação individual. Também é fundamental realizar abordagem estruturada para cessação do tabagismo.',
    commentary: 'As alternativas A e B incluem rastreamento rotineiro para câncer de próstata (PSA e toque retal), além de exames que não são recomendados para indivíduos assintomáticos, como radiografia de tórax, hemograma e creatinina. A alternativa C está incorreta porque o paciente já possui idade para alguns exames preventivos, não sendo adequado apenas acompanhar sem realizar o rastreamento indicado.',
    reference: 'Diretrizes de Rastreamento do Ministério da Saúde / Cadernos de Atenção Básica',
    tags: ['saúde coletiva', 'rastreamento', 'tabagismo']
  },
  {
    id: 'enamed-2025-13',
    module: 'ENAMED',
    text: 'Mulher de 32 anos, parda, ensino fundamental incompleto, trabalhadora rural, diarista no plantio de morango, procura Unidade Básica de Saúde (UBS) com queixas de tonturas, dores de cabeça, cansaço, náuseas e falta de ar. Ela referiu que desde os 20 anos sofre com dores de cabeça frequentes, mas há 2 semanas, após uma pulverização de agrotóxicos, começou a apresentar os sintomas descritos. Disse ainda que sua colega de trabalho apresentava queixas similares. Ao ouvir esses relatos, a médica da UBS suspeita de intoxicação aguda por agrotóxicos.\n\nNessa situação, qual é a conduta adequada a ser adotada na assistência?',
    options: [
      '(A) Encaminhar como caso suspeito ao centro de referência em saúde do trabalhador estadual e formalizar denúncia ao Ministério Público do Trabalho.',
      '(B) Estabelecer nexo causal entre os sintomas e os resultados de exames complementares, para confirmar diagnóstico de intoxicação por agrotóxicos, e notificar a Vigilância em Saúde municipal.',
      '(C) Tratar os sintomas, solicitar exames complementares, notificar o caso no Sistema de Informação de Agravos de Notificação (Sinan), conceder atestado médico e solicitar matriciamento à Vigilância em Saúde do Trabalhador.',
      '(D) Informar não ser responsável pelo preenchimento da comunicação de acidente de trabalho (CAT), por ser atribuição exclusiva da medicina do trabalho, no centro municipal de referência em saúde do trabalhador.'
    ],
    correctAnswer: 2, // C
    explanation: 'A intoxicação por agrotóxicos é um agravo de notificação compulsória. Diante de um caso suspeito, o profissional deve iniciar o tratamento, solicitar exames quando necessários e realizar imediatamente a notificação ao Sinan, sem necessidade de confirmação laboratorial. Além disso, a Vigilância em Saúde do Trabalhador deve ser acionada para investigação do ambiente ocupacional e prevenção de novos casos.',
    commentary: 'A notificação no Sinan deve ser disparada perante a suspeita clínica fundamentada, e não após confirmações demoradas. O matriciamento e a emissão de atestado médico/afastamento são ferramentas primordiais de atenção integral ao trabalhador.',
    reference: 'Guia de Vigilância em Saúde do Ministério da Saúde / Protocolos de Saúde do Trabalhador',
    tags: ['saúde coletiva', 'notificação compulsória', 'saúde do trabalhador']
  },
  {
    id: 'enamed-2025-14',
    module: 'ENAMED',
    text: 'Pais de um menino de 10 anos levam a criança para avaliação médica em Unidade Básica de Saúde (UBS). Relatam que seu filho se dá bem com a família até que não lhe seja permitido fazer algo que deseja. Quando isso ocorre, ele fica irritado, impulsivamente agressivo e agitado por várias horas. Assim que se acalma ou consegue o que quer, fica feliz e agradável novamente. Os pais entendem que o filho parece agir deliberadamente para aborrecer os outros e nunca assume a culpa por seus próprios erros ou mau comportamento. Relatam ainda que ele discute com adultos ou figuras de autoridade e em várias situações não aceita as regras de boa convivência com os familiares.\n\nConsiderando o caso descrito, qual é o diagnóstico mais provável?',
    options: [
      '(A) Transtorno afetivo bipolar.',
      '(B) Transtorno de oposição desafiante.',
      '(C) Transtorno disruptivo da desregulação do humor.',
      '(D) Transtorno do déficit de atenção e hiperatividade.'
    ],
    correctAnswer: 1, // B
    explanation: 'O quadro é compatível com Transtorno de Oposição Desafiante (TOD), caracterizado por comportamento persistente de desafio às figuras de autoridade, discussões frequentes, irritabilidade, recusa em obedecer regras, tendência a culpar outras pessoas pelos próprios erros e comportamento provocador.',
    commentary: 'Diferentemente do transtorno disruptivo da desregulação do humor (TDDH), a irritabilidade no TOD não é persistente entre as crises (o garoto volta a ficar alegre assim que se acalma ou atinge seu desejo). O TDAH tem como núcleo sintomas de desatenção e hiperatividade, e não padrão opositor puro. E não há episódios maníacos/hipomaníacos que definam bipolaridade infantil cíclica.',
    reference: 'DSM-5 (Manual Diagnóstico e Estatístico de Transtornos Mentais)',
    tags: ['psiquiatria', 'pediatria', 'tod']
  },
  {
    id: 'enamed-2025-15',
    module: 'ENAMED',
    text: 'Homem de 50 anos, queixando-se de astenia e constipação com fezes em fita. Há 15 dias, apresenta edema de membros inferiores até a raiz da região crural, bilateralmente, com pouca melhora à elevação dos membros. Ele perdeu 10 kg em 6 meses. Nega hipertensão arterial e diabetes mellitus e não faz uso de medicamento. Os exames do paciente apresentaram os seguintes resultados:\n\nPressão arterial: 130 × 80 mmHg\nHematócrito: 35%\nGlicemia: 88 mg/dL\nAlbumina sérica: 1,8 g/dL\nCreatinina: 1,2 mg/dL\nTriglicerídeos: 200 mg/dL\nProteína urinária de 24 horas: 3,6 g/24 horas\nSedimento urinário: proteínas +++; hemácias + (5/campo)\n\nDentre esses achados laboratoriais, quais são necessários para a definição da síndrome renal do paciente?',
    options: [
      '(A) Proteína urinária de 24 horas = 3,6 g e albumina sérica = 1,8 g/dL.',
      '(B) Proteína urinária de 24 horas = 3,6 g e triglicerídeos = 200 mg/dL.',
      '(C) Hematúria e triglicerídeos = 200 mg/dL.',
      '(D) Hematúria e albumina sérica = 1,8 g/dL.'
    ],
    correctAnswer: 0, // A
    explanation: 'O paciente apresenta critérios diagnósticos para síndrome nefrótica, definida principalmente por proteinúria ≥ 3,5 g/24 horas associada à hipoalbuminemia (albumina sérica < 3,0 g/dL). Esses dois achados laboratoriais são indispensáveis para estabelecer o diagnóstico da síndrome renal.',
    commentary: 'Embora edema e hiperlipidemia (triglicerídeos elevados) sejam manifestações clássicas da síndrome nefrótica, eles representam consequências da perda urinária de proteínas e não constituem os critérios mínimos laboratoriais definitórios. A hematúria pode ocorrer secundariamente em algumas glomerulopatias primárias ou secundárias, mas também não define a síndrome nefrótica.',
    reference: 'Harrison Princípios de Medicina Interna / Tratado de Nefrologia',
    tags: ['clínica médica', 'nefrologia', 'síndrome nefrótica']
  },
  {
    id: 'enamed-2025-16',
    module: 'ENAMED',
    text: 'Recém-nascido de 15 dias, a termo, Apgar 8/9, peso e comprimento ao nascer de 2.600 g e 46 cm, respectivamente, com síndrome de Down, e cuja gestação não apresentou outras intercorrências. Está na consulta de puericultura com peso e comprimento atuais de 2.900 g e 47 cm, respectivamente.\n\nPara o acompanhamento pôndero-estatural, os dados devem ser plotados nas',
    options: [
      '(A) curvas de crescimento da OMS desde o nascimento até a adolescência.',
      '(B) curvas de crescimento específicas para síndrome de Down desde o nascimento.',
      '(C) curvas de crescimento da OMS, corrigindo o peso e o comprimento para síndrome de Down.',
      '(D) curvas de crescimento da OMS até os dois anos e, a partir daí, em curvas específicas para síndrome de Down.'
    ],
    correctAnswer: 1, // B
    explanation: 'Crianças com síndrome de Down apresentam um padrão de crescimento diferente da população geral, com velocidade de crescimento, peso e estatura próprios. Por esse motivo, recomenda-se utilizar curvas de crescimento específicas para síndrome de Down desde o nascimento, permitindo uma avaliação mais precisa do desenvolvimento pôndero-estatural.',
    commentary: 'As curvas da Organização Mundial da Saúde (OMS) continuam sendo úteis para comparação populacional, porém não refletem adequadamente o padrão esperado desses pacientes. Também não existe correção matemática do peso ou comprimento para síndrome de Down, tornando incorretas as demais alternativas.',
    reference: 'Ministério da Saúde / Puericultura e acompanhamento da criança com Síndrome de Down',
    tags: ['pediatria', 'puericultura', 'síndrome de down']
  },
  {
    id: 'enamed-2025-17',
    module: 'ENAMED',
    text: 'Paciente de 20 anos, sexo masculino, vítima de colisão "automóvel a muro", sem cinto de segurança, é atendido ainda na cena pelo Serviço Móvel de Atendimento de Urgência (SAMU). Exame físico: paciente torporoso; saturação de O₂ de 60% em ar ambiente; frequência respiratória de 28 irpm; frequência cardíaca de 112 bpm; pressão arterial de 90 × 50 mmHg. Desvio da traqueia para a direita, turgência de veias jugulares, hipofonese de bulhas cardíacas e diminuição acentuada do murmúrio vesicular à esquerda.\n\nQual é a conduta adequada no atendimento pré-hospitalar?',
    options: [
      '(A) Reposição volêmica.',
      '(B) Cricotireoidostomia.',
      '(C) Pericardiocentese.',
      '(D) Toracocentese.'
    ],
    correctAnswer: 3, // D
    explanation: 'O paciente apresenta quadro clássico de pneumotórax hipertensivo, uma emergência que ameaça imediatamente a vida. Os principais achados são hipotensão, dessaturação importante, desvio contralateral da traqueia (para a direita), turgência jugular e diminuição do murmúrio vesicular no hemitórax acometido (à esquerda). Segundo o protocolo ATLS, o diagnóstico é clínico e o tratamento não deve aguardar exames complementares. A conduta imediata consiste na descompressão torácica por toracocentese.',
    commentary: 'A pericardiocentese é indicada no tamponamento cardíaco, cuja tríade clássica (hipotensão, turgência jugular e hipofonese de bulhas) pode gerar confusão. Entretanto, a ausência de murmúrio vesicular e o desvio da traqueia apontam fortemente para pneumotórax hipertensivo.',
    reference: 'Diretrizes do ATLS® 10ª edição / Suporte Avançado de Vida no Trauma',
    tags: ['cirurgia', 'trauma', 'emergência', 'pneumotórax']
  },
  {
    id: 'enamed-2025-18',
    module: 'ENAMED',
    text: 'Paciente de 16 anos comparece ao ambulatório para mostrar os resultados dos exames complementares solicitados na consulta anterior. Está preocupada porque todas as colegas da mesma idade já menstruaram e ela não. O fenótipo é feminino, com pelos pubianos e axilares esparsos. Os exames complementares evidenciam ausência do útero à ultrassonografia pélvica, dosagem sérica do hormônio folículo estimulante (FSH) normal, dosagem de testosterona sérica compatível com níveis do sexo masculino e cariótipo 46 XY.\n\nCom base no quadro clínico e nos dados apresentados, a principal hipótese diagnóstica dessa paciente é',
    options: [
      '(A) disgenesia gonadal.',
      '(B) malformação Mulleriana.',
      '(C) obstrução do trato genital.',
      '(D) insensibilidade androgênica.'
    ],
    correctAnswer: 3, // D
    explanation: 'A paciente apresenta amenorreia primária, fenótipo feminino, ausência de útero, cariótipo 46,XY, testosterona em níveis masculinos e escassez de pelos pubianos e axilares. Esse conjunto de achados caracteriza a Síndrome de Insensibilidade Completa aos Andrógenos (SICA). Nessa condição, há mutação do receptor de andrógenos: embora os testículos produzam testosterona normalmente, os tecidos periféricos não respondem a ela. Como também há produção de hormônio anti-mülleriano pelos testículos, ocorre regressão das estruturas müllerianas, justificando a ausência de útero.',
    commentary: 'As demais alternativas não explicam simultaneamente o cariótipo masculino, os níveis de testosterona do sexo masculino e o fenótipo feminino.',
    reference: 'ACOG Practice Bulletin: Primary Amenorrhea / Endocrine Society Clinical Practice Guideline',
    tags: ['ginecologia', 'obstetrícia', 'amenorreia', 'endocrinologia']
  },
  {
    id: 'enamed-2025-19',
    module: 'ENAMED',
    text: 'Mulher de 82 anos, sem história prévia de hipertensão, comparece à consulta preocupada porque aferiu a pressão na farmácia há 1 semana e estava em 146 × 86 mmHg. Em outra aferição, há 2 semanas, na unidade de saúde, a pressão estava em 144 × 88 mmHg. No momento da consulta, a pressão está em 148 × 88 mmHg. Não apresenta sintomas nem está em acompanhamento de outros agravos neste momento.\n\nQual é a abordagem adequada nesse caso?',
    options: [
      '(A) Referenciar ao cardiologista para um manejo específico.',
      '(B) Solicitar holter 24 horas e ecocardiograma para ampliar a avaliação.',
      '(C) Prescrever losartana 50 mg, 1 comprimido à noite, com monitoramento da pressão arterial na unidade.',
      '(D) Realizar uma conduta expectante, sem necessidade de medicamentos, com monitoramento da pressão arterial na unidade.'
    ],
    correctAnswer: 3, // D
    explanation: 'Apesar de apresentar níveis pressóricos elevados em diferentes aferições, o diagnóstico de hipertensão arterial deve ser confirmado antes do início do tratamento farmacológico. Como a paciente é assintomática, não apresenta lesão de órgão-alvo conhecida nem situação de urgência hipertensiva, a conduta inicial consiste em acompanhamento clínico, repetição das medidas da pressão arterial em consultas distintas e orientação sobre hábitos de vida saudáveis. Somente após confirmação diagnóstica definitiva deve-se considerar o início de terapia medicamentosa.',
    commentary: 'O encaminhamento ao especialista, exames complementares de alta complexidade imediatos ou a prescrição precoce de anti-hipertensivos sem diagnóstico fechado não são recomendados neste cenário.',
    reference: 'Diretriz Brasileira de Hipertensão Arterial / Sociedade Brasileira de Cardiologia',
    tags: ['saúde coletiva', 'clínica médica', 'hipertensão', 'puericultura']
  },
  {
    id: 'enamed-2025-20',
    module: 'ENAMED',
    text: 'Mulher travesti de 28 anos, profissional do sexo, comparece à Unidade Básica de Saúde (UBS) em demanda espontânea. Relata relações sexuais frequentes com diferentes parceiros, com uso inconsistente de preservativos, principalmente durante relações anais receptivas. Há 2 dias teve uma relação sexual desprotegida com um cliente que se recusou a usar camisinha. Nunca utilizou medicamento para profilaxia pré-exposição (PrEP) ou pós-exposição (PEP) à infecção pelo HIV.\n\nConsiderando que a paciente está assintomática no momento, qual a melhor estratégia de prevenção?',
    options: [
      '(A) Prescrever PrEP após resultado não reagente para HIV; indicar PEP após tratamento inicial e orientar rastreamento de ISTs a cada 3 meses.',
      '(B) Oferecer teste rápido para HIV e sífilis; prescrever PrEP de início imediato; orientar sobre as vacinas disponíveis no SUS para seu grupo populacional.',
      '(C) Realizar testagem rápida para HIV e sífilis; prescrever PEP mediante resultado não reagente para HIV e programar início da PrEP após término da PEP.',
      '(D) Prescrever PEP e PrEP de forma concomitante; solicitar sorologias para ISTs; agendar retorno para analisar os resultados e revisar adesão ao tratamento.'
    ],
    correctAnswer: 2, // C
    explanation: 'A paciente sofreu uma exposição sexual de alto risco há apenas dois dias, permanecendo dentro da janela de 72 horas, período em que a profilaxia pós-exposição (PEP) apresenta eficácia comprovada. Antes de iniciá-la, deve-se realizar teste rápido para HIV, garantindo que não exista infecção previamente estabelecida. Após completar os 28 dias de PEP, pacientes com risco contínuo, como profissionais do sexo com uso inconsistente de preservativos, devem ser avaliados para iniciar profilaxia pré-exposição (PrEP), reduzindo o risco de futuras infecções.',
    commentary: 'A PrEP não substitui a PEP após uma exposição recente de alto risco ocorrida na janela de 72 horas. E iniciar concomitantemente ou pular a PEP para começar PrEP de imediato deixaria a exposição desprotegida sem cobertura adequada.',
    reference: 'Protocolo Clínico e Diretrizes Terapêuticas para Profilaxia Pós-Exposição (PEP) e Pré-Exposição (PrEP) / Ministério da Saúde',
    tags: ['saúde coletiva', 'infectologia', 'pep', 'prep', 'ist']
  },
  {
    id: 'enamed-2025-21',
    module: 'ENAMED',
    text: 'Mulher de 21 anos comparece à consulta médica em Unidade Básica de Saúde (UBS) para avaliação de amenorreia há 4 meses, sendo descartada gravidez. Paciente relata que há 10 meses iniciou dieta para perder peso, tendo emagrecido aproximadamente 30 kg. Há 2 dias relata desmaio durante prática de exercício físico e, por isso, realizou eletrocardiograma (ECG) que indicou alterações no segmento ST e na onda T. Afirma manter o padrão alimentar, pois ainda quer perder peso. Ao exame físico, apresenta palidez de mucosa e turgor cutâneo diminuído. Altura = 1,63 m; peso = 39 kg (IMC = 14,7 kg/m²); pressão arterial = 80 × 60 mmHg; frequência cardíaca = 55 bpm e frequência respiratória = 15 irpm.\n\nQual é a conduta adequada nesse momento?',
    options: [
      '(A) Solicitar internação em enfermaria de clínica médica.',
      '(B) Encaminhar para internação em enfermaria de saúde mental.',
      '(C) Continuar a investigação para causas da amenorreia na UBS.',
      '(D) Acompanhar em ambulatório do Centro de Atenção Psicossocial (CAPS).'
    ],
    correctAnswer: 0, // A
    explanation: 'A paciente apresenta quadro compatível com anorexia nervosa grave, associado a critérios de instabilidade clínica que indicam internação hospitalar. O IMC extremamente reduzido (14,7 kg/m²), a hipotensão, a bradicardia, o episódio de síncope (desmaio) e as alterações eletrocardiográficas sugerem importante comprometimento metabólico e risco aumentado de arritmias potencialmente fatais.',
    commentary: 'A prioridade absoluta é estabilizar as alterações clínicas em ambiente hospitalar de clínica médica, corrigindo distúrbios hidroeletrolíticos graves e iniciando reabilitação nutricional lenta para evitar a Síndrome de Realimentação. O manejo exclusivamente ambulatorial ou psiquiátrico imediato em enfermaria de saúde mental é insuficiente diante do risco clínico de morte iminente por arritmia.',
    reference: 'Diretrizes da Associação Brasileira de Psiquiatria (ABP) / Protocolo de Transtornos Alimentares',
    tags: ['psiquiatria', 'clínica médica', 'anorexia nervosa', 'emergência']
  },
  {
    id: 'enamed-2025-22',
    module: 'ENAMED',
    text: 'Mulher de 65 anos iniciou quadro de lentidão dos movimentos há 6 meses, com dificuldade para amarrar sapatos, abotoar roupas e digitar. Ao caminhar, apresentava passos mais curtos e sensação de instabilidade, com 1 episódio de queda. Concomitantemente apresentou tremores nas mãos, de repouso, associados à rigidez e alteração do padrão do sleep (sono). Nega alterações de memória e cognição. Ao exame físico apresentava fácies em máscara, marcha em pequenos passos, tremor assimétrico, hipertonia em roda dentada. A ressonância magnética demonstrou apenas atrofia compatível com a idade.\n\nO tratamento medicamentoso inicial recomendado será',
    options: [
      '(A) levodopa e carbidopa.',
      '(B) donepezila e memantina.',
      '(C) propranolol e amantadina.',
      '(D) atorvastatina e baclofeno.'
    ],
    correctAnswer: 0, // A
    explanation: 'A paciente apresenta quadro típico de Doença de Parkinson, caracterizado por bradicinesia (lentidão de movimentos), tremor de repouso assimétrico, rigidez em roda dentada, instabilidade postural (marcha em pequenos passos) e fácies hipomímica (em máscara). Em pacientes acima de 65 anos, a levodopa associada a um inibidor da descarboxilase periférica (carbidopa ou benserazida) é considerada o tratamento farmacológico inicial de escolha por proporcionar excelente controle motor e maior benefício funcional imediato com menor risco de efeitos colaterais psiquiátricos.',
    commentary: 'Donepezila e memantina são utilizados na Doença de Alzheimer. Propranolol é indicado para tremor essencial (que é tipicamente postural/cinético e simétrico). Atorvastatina e baclofeno não tratam o cerne fisiopatológico motor dopaminérgico do Parkinson.',
    reference: 'Consenso da Academia Brasileira de Neurologia (ABN) / Tratamento da Doença de Parkinson',
    tags: ['neurologia', 'geriatria', 'parkinson', 'farmacologia']
  },
  {
    id: 'enamed-2025-23',
    module: 'ENAMED',
    text: 'A violência contra adolescentes pode ter várias causas e atores. Os sinais que demonstram essas ações podem ser indiretos, mas devem ser observados pelos profissionais da saúde.\n\nAssinale a alternativa com a situação em que se deve notificar o Conselho Tutelar.',
    options: [
      '(A) Manuel, 15 anos, abandonado pelos pais e sob os cuidados de uma família acolhedora, apresenta febre, vômitos, petéquias, rigidez de nuca e história vacinal desconhecida.',
      '(B) Michele, 13 anos, está morando temporariamente com os tios enquanto a mãe faz um curso no exterior. Há 1 mês vem apresentando equimoses em face, pernas e coxas, em vários estágios de evolução, e evita falar sobre o fato.',
      '(C) Felipe, 11 anos, acolhido em abrigo, apresenta febre, dor retro-orbitária, petéquias e sangramento gengival.',
      '(D) Edilene, 16 anos, em medida socioeducativa, apresenta equimoses associadas à perda de peso, febre e linfonodomegalias.'
    ],
    correctAnswer: 1, // B
    explanation: 'A presença de equimoses em diferentes estágios de evolução, localizadas em áreas propensas a agressões físicas (face, coxas, pernas), associada ao comportamento evasivo e defensivo de evitar falar sobre o ocorrido, constitui forte suspeita de violência física contra adolescente. Conforme o Estatuto da Criança e do Adolescente (ECA), situações suspeitas ou confirmadas de maus-tratos e violência contra menores devem ser obrigatoriamente notificadas e comunicadas ao Conselho Tutelar.',
    commentary: 'As demais alternativas retratam patologias clínicas graves de notificação epidemiológica ou urgência médica (como meningite em Manuel, dengue/plaquetopenia em Felipe, ou síndrome consumptiva/leucemia em Edilene), mas não apontam para abuso, negligência ou violência ativa de terceiros que exija acionamento do Conselho Tutelar.',
    reference: 'Estatuto da Criança e do Adolescente (ECA) / Linhas de Cuidado para Atenção Integral às Pessoas em Situação de Violência',
    tags: ['saúde coletiva', 'pediatria', 'violência', 'eca', 'notificação']
  },
  {
    id: 'enamed-2025-24',
    module: 'ENAMED',
    text: 'Paciente do sexo feminino, 27 anos, é atendida em Unidade de Pronto Atendimento (UPA) com história de dor abdominal iniciada em epigástrio há dois dias, contínua, associada a náuseas e perda de apetite, evoluindo para dor em fossa ilíaca direita há um dia e febre de 38,2 °C. O exame físico demonstra descompressão brusca dolorosa em quadrante inferior direito. Beta-hCG negativo. Hemograma com leucocitose de 13.400/mm³ e desvio à esquerda.\n\nConsiderando o diagnóstico mais provável, a conduta adequada é',
    options: [
      '(A) iniciar antibioticoterapia empírica até resultado da urocultura.',
      '(B) realizar tomografia de abdome e iniciar metotrexato.',
      '(C) iniciar antibioticoterapia empírica e acompanhamento ambulatorial.',
      '(D) realizar ultrassonografia de abdome e solicitar parecer cirúrgico.'
    ],
    correctAnswer: 3, // D
    explanation: 'O quadro clínico é altamente sugestivo de apendicite aguda (dor migratória, anorexia, febre, sinal de Blumberg positivo e leucocitose com desvio). Em mulheres jovens em idade fértil, diagnósticos diferenciais ginecológicos (como gestação ectópica ou DIP) devem ser afastados; a negatividade do beta-hCG reduz a probabilidade de gestação. A ultrassonografia de abdome é o exame de imagem inicial ideal para confirmar o diagnóstico e o parecer cirúrgico imediato é imperativo para programar a apendicectomia, que é o tratamento padrão.',
    commentary: 'O tratamento definitivo da apendicite aguda não complicada é cirúrgico. Antibioticoterapia isolada e alta ambulatorial seriam um erro grave, e o metotrexato é usado em gravidez ectópica íntegra (que foi descartada pelo beta-hCG negativo).',
    reference: 'Sabiston Tratado de Cirurgia / Diretrizes do Colégio Brasileiro de Cirurgiões (CBC)',
    tags: ['cirurgia', 'apendicite', 'abdome agudo']
  },
  {
    id: 'enamed-2025-25',
    module: 'ENAMED',
    text: 'Multípara, 37 semanas, obesa, apresentando diabetes mellitus gestacional controlada com insulina NPH e regular. Evoluiu para parto normal, e o recém-nascido pesou 3.300 g.\n\nA conduta no puerpério imediato deve ser',
    options: [
      '(A) suspender insulinoterapia.',
      '(B) iniciar hipoglicemiante oral.',
      '(C) manter insulina NPH em 1/3 da dose da gravidez.',
      '(D) manter insulinoterapia com a dosagem do pré-natal.'
    ],
    correctAnswer: 0, // A
    explanation: 'No diabetes mellitus gestacional (DMG), a resistência à insulina é induzida por hormônios de origem placentária (como o lactogênio placentário). Com a dequitação e saída da placenta no parto, há uma queda abrupta e imediata desses níveis hormonais contrarreguladores, cessando o estímulo diabetogênico temporário. Portanto, a insulinoterapia deve ser suspensa imediatamente no puerpério, mantendo-se apenas o monitoramento glicêmico capilar de rotina e agendando reavaliação de tolerância glicêmica (com TOTG 75g) entre 4 e 12 semanas pós-parto.',
    commentary: 'Iniciar hipoglicemiantes orais ou manter a insulina pós-parto sem necessidade comprovada induzirá hipoglicemia iatrogênica na paciente, visto que a fisiologia retorna ao basal rapidamente.',
    reference: 'Diretrizes da Sociedade Brasileira de Diabetes (SBD) / FEBRASGO',
    tags: ['ginecologia', 'obstetrícia', 'diabetes gestacional', 'puerpério']
  },
  {
    id: 'enamed-2025-26',
    module: 'ENAMED',
    text: 'Homem de 34 anos se dirige à Unidade Básica de Saúde (UBS) com febre (38,5 °C), dores de moderada intensidade e manchas no corpo há 3 dias. No dia da consulta, iniciou dores abdominais e vômitos incontroláveis. Exame físico: prostrado, mucosas coradas, extremidades bem perfundidas. Pressão arterial de 120 × 80 mmHg; frequência respiratória de 16 irpm; frequência cardíaca de 80 bpm. Leve dor à palpação abdominal, sem outras alterações.\n\nQual a hipótese diagnóstica e o manejo, respectivamente?',
    options: [
      '(A) Dengue grupo B. Prescrever hidratação oral, analgésico e antiemético; solicitar hemograma, plaquetas e antígeno NS1; realizar acompanhamento domiciliar após exames.',
      '(B) Dengue grupo C. Prescrever hidratação oral, analgésico e antiemético; solicitar hemograma, plaquetas e anticorpo IgM; realizar acompanhamento ambulatorial após exames.',
      '(C) Dengue grupo C. Prescrever hidratação parenteral, analgésico e antiemético; solicitar hemograma, plaquetas e antígeno NS1; manter em leito de observação até estabilização.',
      '(D) Dengue grupo B. Prescrever hidratação parenteral, analgésico e antiemético; solicitar hemograma, plaquetas, antígeno NS1 e anticorpo IgM; manter em leito de observação até estabilização.'
    ],
    correctAnswer: 2, // C
    explanation: 'O paciente apresenta quadro sugestivo de dengue associado a sinais de alarme, como dor abdominal e vômitos persistentes. Segundo o Ministério da Saúde, esses pacientes são classificados como Grupo C, necessitando hidratação venosa, observação hospitalar e monitorização clínica e laboratorial. Como os sintomas iniciaram há apenas três dias, o antígeno NS1 é o exame mais indicado para confirmação diagnóstica. A sorologia IgM geralmente torna-se positiva apenas após o quinto dia de doença.',
    commentary: 'As alternativas A e B subestimam a gravidade do quadro ao indicar apenas hidratação oral. A alternativa D classifica incorretamente o paciente como Grupo B e solicita IgM em momento inadequado da evolução da doença.',
    reference: 'Ministério da Saúde / Diretrizes para Manejo Clínico da Dengue',
    tags: ['saúde coletiva', 'infectologia', 'dengue', 'sinais de alarme']
  },
  {
    id: 'enamed-2025-27',
    module: 'ENAMED',
    text: 'Homem de 48 anos, auxiliar de pedreiro, procura Unidade Básica de Saúde (UBS) com queixa de dor lombar iniciada há 3 semanas, de instalação insidiosa, sem irradiação. Relata que a dor piora ao final do dia e melhora parcialmente com repouso e uso de paracetamol. Nega perda de peso, febre, traumas, incontinência ou fraqueza nos membros inferiores. Ao exame físico, apresenta dor à palpação paravertebral em região lombar, sem alterações neurológicas.\n\nCom base na história clínica e no exame físico, qual o próximo passo na condução desse caso?',
    options: [
      '(A) Solicitar ressonância magnética da coluna lombar e encaminhar para a ortopedia.',
      '(B) Solicitar radiografia lombar, prescrever corticoide oral e agendar retorno após 10 dias.',
      '(C) Orientar repouso, fornecer atestado de 7 dias e otimizar a analgesia com antidepressivo tricíclico.',
      '(D) Explicar a natureza benigna, orientar analgesia e atividade física leve, com reavaliação em 4 a 6 semanas.'
    ],
    correctAnswer: 3, // D
    explanation: 'O paciente apresenta lombalgia mecânica inespecífica, sem sinais de alerta ("red flags") como déficit neurológico, febre, perda ponderal, trauma importante ou suspeita de neoplasia. Nesses casos, as diretrizes recomendam tratamento conservador, com analgesia, manutenção das atividades habituais dentro da tolerância e incentivo à atividade física, evitando repouso prolongado.',
    commentary: 'Não há indicação de exames de imagem nas primeiras semanas de evolução na ausência de sinais de gravidade. O repouso absoluto também não é recomendado, pois pode retardar a recuperação funcional.',
    reference: 'Sociedade Brasileira de Reumatologia e Sociedade Brasileira de Ortopedia (lombalgia)',
    tags: ['clínica médica', 'reumatologia', 'ortopedia', 'lombalgia']
  },
  {
    id: 'enamed-2025-28',
    module: 'ENAMED',
    text: '"Internações sem consentimento aumentam na Cracolândia, em meio a denúncias de agressões".\n\nNotícias como esta têm se tornado frequentes em jornais brasileiros nos últimos anos. Alguns municípios têm criado leis locais próprias para as internações involuntárias que muitas vezes contradizem as leis federais sobre o tema.\n\nSobre a internação involuntária no Brasil, é correto afirmar que',
    options: [
      '(A) a internação involuntária é determinada, de acordo com a legislação, pela Justiça.',
      '(B) é autorizada por médico devidamente registrado no Conselho Regional de Medicina.',
      '(C) no prazo de 15 dias, a internação deve ser comunicada ao Ministério Público Federal.',
      '(D) o término da internação involuntária ocorrerá por solicitação do Ministério Público Municipal.'
    ],
    correctAnswer: 1, // B
    explanation: 'De acordo com a Lei nº 10.216/2001 (Lei da Reforma Psiquiátrica), a internação psiquiátrica involuntária depende de avaliação e autorização médica fundamentada, realizada por médico regularmente inscrito no Conselho Regional de Medicina. A internação deve ser comunicada ao Ministério Público Estadual no prazo de até 72 horas, e sua manutenção depende da persistência da indicação clínica.',
    commentary: 'A alternativa A descreve a internação compulsória, determinada pelo Poder Judiciário. A alternativa C está incorreta porque menciona prazo e órgão inadequados (deve ser o Ministério Público Estadual em até 72 horas). A alternativa D também é incorreta, pois a alta pode ocorrer por decisão médica ou solicitação do familiar/responsável legal.',
    reference: 'Lei nº 10.216/2001 (Lei da Reforma Psiquiátrica)',
    tags: ['saúde coletiva', 'psiquiatria', 'legislação', 'reforma psiquiátrica']
  },
  {
    id: 'enamed-2025-29',
    module: 'ENAMED',
    text: 'Homem de 68 anos, em tratamento crônico irregular de hipertensão arterial sistêmica, diabetes mellitus e fibrilação atrial, é admitido em Unidade de Pronto Atendimento (UPA) com quadro de rebaixamento do nível de consciência e déficit neurológico do lado esquerdo, de predomínio braquiofacial. Segundo o acompanhante, o paciente foi visto sem sintomas pela última vez há aproximadamente 3 horas. A tomografia computadorizada de crânio sem contraste revela área de hipodensidade envolvendo cerca de 40% do território da artéria cerebral média direita.\n\nO médico explica ao acompanhante que, apesar dos potenciais benefícios da terapia trombolítica, o paciente apresenta contraindicação em função de',
    options: [
      '(A) apresentar extensão de isquemia superior a um terço do território da artéria cerebral média acometida.',
      '(B) haver decorrido período de tempo superior ao limite máximo tolerável desde o início do déficit.',
      '(C) evoluir com glicemia acima de 200 mg/dL.',
      '(D) ter níveis pressóricos superiores aos permitidos para uso do fármaco.'
    ],
    correctAnswer: 0, // A
    explanation: 'Embora o paciente esteja dentro da janela terapêutica para trombólise (menos de 4,5 horas), a tomografia computadorizada demonstra acometimento de aproximadamente 40% (superior a um terço) do território da artéria cerebral média direita, o que caracteriza extenso infarto estabelecido. Essa situação representa contraindicação absoluta ao uso de trombolítico (como alteplase) devido ao elevadíssimo risco de transformação hemorrágica sintomática.',
    commentary: 'O tempo desde o último momento sem sintomas permanece dentro da janela terapêutica. A glicemia elevada e níveis de pressão arterial (se controláveis abaixo de 185x110) não são contraindicações absolutas isoladas como é a isquemia cerebral muito extensa na TC inicial.',
    reference: 'Sociedade Brasileira de Doenças Cerebrovasculares e AHA/ASA Guidelines para AVC Isquêmico',
    tags: ['neurologia', 'emergência', 'avc', 'trombólise']
  },
  {
    id: 'enamed-2025-30',
    module: 'ENAMED',
    text: 'Menino de 6 anos é levado à Unidade Básica de Saúde (UBS) com queixa de fimose. Mãe relata balanopostites frequentes, sendo o primeiro episódio com 1 ano de vida. Nega infecções do trato urinário. Ao exame físico, apresenta prepúcio cobrindo toda a glande que, quando tracionado, expõe meato uretral e anel fibrótico prepucial.\n\nSobre o caso, assinale a alternativa correta.',
    options: [
      '(A) Trata-se de fimose fisiológica, necessitando de exercícios de redução e higiene do prepúcio.',
      '(B) Há indicação cirúrgica na adolescência, pois já está apresentando exposição do meato uretral.',
      '(C) Há indicação cirúrgica, pois a criança apresenta balanopostites recorrentes com fibrose prepucial.',
      '(D) Indica-se uso de creme de betametasona e hialuronidase por 4 semanas, uma vez que apresenta exposição do meato uretral.'
    ],
    correctAnswer: 2, // C
    explanation: 'A criança apresenta fimose patológica, evidenciada pela presença de anel fibrótico prepucial associado a episódios recorrentes de balanopostite. Essas condições constituem indicação clássica de postectomia (circuncisão), uma vez que o processo inflamatório recorrente favorece a fibrose progressiva, impossibilitando a resolução espontânea ou clínica.',
    commentary: 'A alternativa A está incorreta porque não se trata de fimose fisiológica (há anel fibrótico patológico). A alternativa B posterga inadequadamente o tratamento necessário. A alternativa D também está incorreta, pois o tratamento tópico com corticosteroides tem pouca eficácia na presença de cicatrizes fibróticas estabelecidas por balanopostites recorrentes.',
    reference: 'Sociedade Brasileira de Pediatria e Sociedade Brasileira de Urologia',
    tags: ['pediatria', 'urologia', 'cirurgia pediátrica', 'fimose']
  },
  {
    id: 'enamed-2025-31',
    module: 'ENAMED',
    text: 'Mulher de 72 anos foi atendida em hospital de médio porte. Relatava emagrecimento e dor abdominal com irradiação para região dorsal há 3 meses; há 1 mês a urina ficou mais escura, começou a apresentar prurido cutâneo intenso e icterícia em escleras. Ao exame físico, encontrava-se ictérica +++/4+, emagrecida; exame do abdome com fígado palpável abaixo da borda costal direita, assim como uma massa bem definida, de consistência cística, não dolorosa em hipocôndrio direito.\n\nNesse caso, o mais adequado é solicitar',
    options: [
      '(A) ultrassonografia para avaliar colecistite crônica calculosa.',
      '(B) tomografia computadorizada para avaliar vias biliares e pâncreas.',
      '(C) colangiopancreatografia por ressonância para avaliar coledocolitíase.',
      '(D) biópsia percutânea com agulha da massa palpada para avaliar neoplasia.'
    ],
    correctAnswer: 1, // B
    explanation: 'O quadro é altamente sugestivo de neoplasia da cabeça do pâncreas, caracterizado por icterícia obstrutiva progressiva, colúria, prurido, emagrecimento e dor irradiada para o dorso. O achado de vesícula biliar palpável, indolor e distendida corresponde ao sinal de Courvoisier-Terrier, que sugere obstrução maligna da via biliar distal, geralmente causada por câncer de cabeça de pâncreas. O exame inicial mais indicado é a tomografia computadorizada de abdome com contraste, pois permite avaliar o pâncreas, a extensão da lesão, a invasão vascular, o acometimento linfonodal e a presença de metástases, sendo fundamental para o estadiamento e planejamento terapêutico.',
    commentary: 'A ultrassonografia possui menor sensibilidade para tumores pancreáticos. A colangiorressonância é útil na investigação das vias biliares, mas não substitui a tomografia no estadiamento do câncer pancreático. A biópsia percutânea não deve ser o primeiro exame, pois o diagnóstico e a ressecabilidade são inicialmente definidos pelos exames de imagem.',
    reference: 'Sabiston Tratado de Cirurgia / Harrison Princípios de Medicina Interna',
    tags: ['cirurgia', 'gastroenterologia', 'neoplasia', 'pâncreas', 'icterícia obstrutiva']
  },
  {
    id: 'enamed-2025-32',
    module: 'ENAMED',
    text: 'Paciente G5P3C1, 35 anos, idade gestacional de 15 semanas por ecografia realizada com 8 semanas, hipertensa crônica em uso de enalapril, antecedente de pré-eclâmpsia. Comparece à consulta de pré-natal na Unidade Básica de Saúde (UBS) com pressão arterial de 140 × 90 mmHg.\n\nQual é a conduta medicamentosa indicada para essa paciente?',
    options: [
      '(A) Captopril, varfarina e ácido acetilsalicílico.',
      '(B) Furosemida, varfarina e carbonato de cálcio.',
      '(C) Losartana, enoxaparina e carbonato de cálcio.',
      '(D) Alfa-metildopa, ácido acetilsalicílico e carbonato de cálcio.'
    ],
    correctAnswer: 3, // D
    explanation: 'A paciente apresenta hipertensão arterial crônica na gestação e antecedente de pré-eclâmpsia, configurando alto risco obstétrico. O enalapril (IECA) deve ser suspenso imediatamente, pois inibidores da enzima conversora de angiotensina são teratogênicos e contraindicados na gravidez. Entre os anti-hipertensivos seguros, a alfa-metildopa é a escolha padrão de primeira linha. Adicionalmente, gestantes com alto risco para pré-eclâmpsia se beneficiam de ácido acetilsalicílico (AAS) em baixa dose (iniciado preferencialmente antes de 16 semanas) associado à suplementação de carbonato de cálcio.',
    commentary: 'As demais alternativas contêm fármacos formalmente contraindicados na gestação, como varfarina (anticoagulante oral altamente teratogênico), losartana (BRA) e captopril (IECA).',
    reference: 'Diretrizes da FEBRASGO / Sociedade Brasileira de Cardiologia',
    tags: ['ginecologia', 'obstetrícia', 'hipertensão na gravidez', 'pré-eclâmpsia']
  },
  {
    id: 'enamed-2025-33',
    module: 'ENAMED',
    text: 'Homem de 48 anos busca atendimento na Unidade Básica de Saúde (UBS) para reiniciar tratamento para tuberculose. Paciente refere que iniciou o tratamento poliquimioterápico há 6 meses, quando foi diagnosticado com tuberculose; porém, há 2 meses interrompeu o acompanhamento na sua unidade de origem devido ao uso de substâncias psicoativas. Ele se mudou para o território da unidade há 15 dias e foi visitado pelo agente comunitário, que o orientou a procurar atendimento médico para avaliação e retomada do tratamento. Foram solicitados, inicialmente, o teste rápido molecular para tuberculose (TRM-TB), baciloscopia de escarro e radiografia de tórax.\n\nQual a conduta adequada para esse caso?',
    options: [
      '(A) Se o TRM-TB for positivo, sem resistência à rifampicina, e a baciloscopia for negativa, reiniciar o esquema básico.',
      '(B) Se o TRM-TB for negativo e a baciloscopia for positiva, reiniciar o esquema básico, desde que a resistência à rifampicina seja positiva.',
      '(C) Se o TRM-TB for negativo e a baciloscopia for positiva, solicitar cultura de escarro com teste de sensibilidade e reiniciar o esquema básico enquanto se aguarda a cultura.',
      '(D) Se o TRM-TB for positivo, com resistência à rifampicina, e a baciloscopia for positiva, solicitar cultura de escarro com teste de sensibilidade e reiniciar o esquema básico enquanto se aguarda a cultura.'
    ],
    correctAnswer: 2, // C
    explanation: 'Pacientes que abandonam o tratamento da tuberculose devem ser investigados com TRM-TB, baciloscopia e cultura. Se o TRM-TB for negativo mas a baciloscopia for positiva, há suspeita de infecção por micobactérias não tuberculosas (MNT) ou falha de detecção pelo teste rápido de biologia molecular. A conduta padrão é solicitar cultura de escarro com teste de sensibilidade para diferenciar o patógeno, iniciando o esquema básico de re-tratamento imediatamente enquanto se aguarda os resultados para não postergar o cuidado do paciente bacilífero.',
    commentary: 'Se houvesse resistência confirmada à rifampicina pelo TRM-TB, o esquema básico (RHZE) não deveria ser reiniciado, e sim direcionado a um centro de referência para esquema específico de tuberculose resistente.',
    reference: 'Manual de Recomendações para o Controle da Tuberculose no Brasil / Ministério da Saúde',
    tags: ['saúde coletiva', 'infectologia', 'tuberculose', 'tratamento']
  },
  {
    id: 'enamed-2025-34',
    module: 'ENAMED',
    text: 'Uma instituição de saúde está pesquisando um novo teste de triagem para hanseníase, com sensibilidade de 92% e especificidade de 65%, aplicado em uma população com baixa prevalência da doença.\n\nNesse contexto, é correto afirmar que',
    options: [
      '(A) quase todos os testes positivos indicarão verdadeiros casos de hanseníase, diante da elevada sensibilidade do teste.',
      '(B) o número de falsos-positivos será elevado, devido à baixa especificidade do teste e à baixa prevalência da doença.',
      '(C) o número de falsos-negativos será elevado, reduzindo a capacidade do teste em detectar casos reais.',
      '(D) a elevada sensibilidade do teste o torna ideal para a confirmação do diagnóstico de hanseníase.'
    ],
    correctAnswer: 1, // B
    explanation: 'A baixa especificidade de um teste (65%) gera uma proporção considerável de falsos-positivos. Ao aplicar este teste em uma população de baixa prevalência, onde a imensa maioria dos indivíduos é saudável, o número absoluto de pessoas saudáveis testadas falso-positivas será extremamente elevado em relação aos verdadeiros positivos, reduzindo drasticamente o Valor Preditivo Positivo (VPP).',
    commentary: 'A alta sensibilidade minimiza os falsos-negativos (portanto, a C está incorreta). Testes de alta sensibilidade são ideais para triagem (screening), mas não para confirmação diagnóstica, que exige alta especificidade para evitar iatrogenias e diagnósticos incorretos (o que invalida a D).',
    reference: 'Medicina Preventiva e Epidemiologia Clínica / Fletcher',
    tags: ['saúde coletiva', 'epidemiologia', 'bioestatística', 'testes diagnósticos']
  },
  {
    id: 'enamed-2025-35',
    module: 'ENAMED',
    text: 'Mulher de 52 anos chega ao acolhimento de Unidade Básica de Saúde (UBS), muito chorosa, e relata: "Estou com dificuldade para dormir, não tenho comido direito, desde o ocorrido... é o meu filho, sabe... ele morreu há 3 dias... e a dor no meu coração está muito forte, quase insuportável". A paciente chora copiosamente e diz que sonha com uma pessoa gritando o nome de seu filho, relembrando o momento em que o encontrou na rua, vítima de atropelamento. Após o primeiro acolhimento, ela fica um pouco mais calma, relatando que não pensa em se matar, que nunca havia sido atendida por psiquiatra ou tomado medicamentos antes, mas que nesse momento precisa de muita ajuda.\n\nDiante do caso, qual a conduta adequada?',
    options: [
      '(A) Prescrever inibidor da recaptação de serotonina para alívio dos sintomas depressivos e ansiosos.',
      '(B) Encaminhar ao Centro de Atenção Psicossocial (CAPS) para seguimento intensivo com médico psiquiatra.',
      '(C) Encaminhar para psicologia na atenção secundária para ofertar terapia psicanalítica breve.',
      '(D) Acompanhar longitudinalmente para observação e ofertar apoio pela equipe da UBS.'
    ],
    correctAnswer: 3, // D
    explanation: 'A paciente vivencia um quadro de luto agudo normal após a perda trágica e recente do filho (há apenas 3 dias). Reações intensas de choro, dor psíquica profunda, insônia inicial e sofrimento emocional são fisiológicos e esperados. A conduta ideal na Atenção Primária à Saúde é acolher, escutar de forma qualificada, validar o sofrimento, oferecer suporte psicossocial e realizar o acompanhamento longitudinal, intervindo apenas se houver sinais de luto complicado, ideação suicida ou evolução para transtorno depressivo estabelecido.',
    commentary: 'A prescrição imediata de antidepressivos (A) patologiza um sofrimento humano legítimo e não tem benefício provado no luto agudo inicial. O encaminhamento imediato ao CAPS (B) é inadequado, pois o CAPS atende transtornos mentais graves e persistentes ou uso abusivo de substâncias. O encaminhamento para atenção secundária em psicologia (C) é precoce, devendo o suporte e a escuta terapêutica serem iniciados na própria UBS.',
    reference: 'Cadernos de Atenção Básica: Saúde Mental / Ministério da Saúde',
    tags: ['psiquiatria', 'saúde coletiva', 'luto', 'saúde mental']
  },
  {
    id: 'enamed-2025-36',
    module: 'ENAMED',
    text: 'Mulher de 86 anos é levada pela filha à consulta no ambulatório de clínica médica, com queixa de quedas frequentes. A paciente tem diagnóstico prévio de hipertensão arterial sistêmica, diabetes mellitus tipo 2, dislipidemia, depressão, déficit cognitivo leve e constipação intestinal. Está em uso de losartana, hidroclorotiazida, atenolol, metformina, gliclazida, rosuvastatina, escitalopram, donepezila e lactulose. Segundo a filha da paciente, as quedas ocorrem em diversos horários do dia, mais frequentemente na madrugada, ao se levantar para ir ao banheiro. Ao exame físico, a idosa apresenta leve bradipsiquismo e sinais de sarcopenia; pressão arterial de 138 × 92 mmHg, quando deitada, e 110 × 70 mmHg, quando sentada.\n\nO plano terapêutico apropriado ao contexto desse caso deve incluir',
    options: [
      '(A) sugerir avaliação oftalmológica para investigação de catarata.',
      '(B) encaminhar ao neurologista para investigar a presença de disautonomia.',
      '(C) rever a polifarmácia para reduzir fármacos indutores de hipotensão arterial.',
      '(D) adicionar fármaco capaz de elevar os níveis tensionais, como a fludrocortisona.'
    ],
    correctAnswer: 2, // C
    explanation: 'A paciente apresenta hipotensão ortostática, caracterizada pela redução significativa da pressão arterial ao passar da posição deitada para sentada, associada a quedas recorrentes. Além disso, faz uso de diversos medicamentos capazes de favorecer hipotensão, como losartana, hidroclorotiazida, atenolol e donepezila. Em idosos, a revisão da polifarmácia constitui uma das principais medidas para prevenção de quedas. Antes de introduzir novos medicamentos, deve-se reavaliar a necessidade e a dose daqueles que aumentam o risco de hipotensão e síncope, além de orientar mudanças posturais graduais, hidratação adequada e fortalecimento muscular.',
    commentary: 'As alternativas A e B podem ser consideradas em situações específicas, porém não abordam a principal causa identificada. A fludrocortisona é reservada para casos persistentes após correção das causas reversíveis, não sendo a primeira conduta.',
    reference: 'Diretrizes de Atenção à Saúde da Pessoa Idosa / Ministério da Saúde',
    tags: ['geriatria', 'clínica médica', 'polifarmácia', 'quedas', 'hipotensão ortostática']
  },
  {
    id: 'enamed-2025-37',
    module: 'ENAMED',
    text: 'Menino de 10 anos, morador de área urbana, está em avaliação no pronto-atendimento por apresentar dor em cotovelo direito há 1 dia. Há 1 semana iniciou quadro de febre de 38,5 °C, associada à dificuldade para deambular devido ao joelho direito doloroso e inchado. Após quatro dias houve melhora do joelho, porém surgiu edema e dor no tornozelo direito, que também melhoraram após dois dias. Há três semanas apresentou dor de garganta. Ao exame apresenta artrite em cotovelo direito, frequência cardíaca de 110 bpm e sopro sistólico 3+/6+.\n\nConsiderando o quadro clínico apresentado, o agente etiológico e o tratamento de escolha são, respectivamente,',
    options: [
      '(A) Borrelia burgdorferi; doxiciclina.',
      '(B) Staphylococcus aureus; oxacilina.',
      '(C) Treponema pallidum; penicilina G benzatina.',
      '(D) Streptococcus pyogenes; penicilina G benzatina.'
    ],
    correctAnswer: 3, // D
    explanation: 'O paciente apresenta quadro clássico de febre reumática, caracterizado por artrite migratória de grandes articulações, antecedente recente de faringoamigdalite estreptocócica e surgimento de sopro cardíaco sugestivo de cardite. Trata-se de uma doença autoimune desencadeada por infecção pelo Streptococcus pyogenes (estreptococo beta-hemolítico do grupo A). O tratamento de escolha para erradicação do estreptococo e profilaxia secundária é a penicilina G benzatina.',
    commentary: 'As demais alternativas de patógenos (Borrelia burgdorferi na doença de Lyme, Staphylococcus aureus na artrite séptica ou Treponema pallidum na sífilis) não se encaixam no conjunto sindrômico clássico da Febre Reumática (critérios de Jones) com artrite migratória e cardite após faringoamigdalite.',
    reference: 'Sociedade Brasileira de Pediatria / Sociedade Brasileira de Cardiologia',
    tags: ['pediatria', 'cardiologia', 'febre reumática', 'reumatologia']
  },
  {
    id: 'enamed-2025-38',
    module: 'ENAMED',
    text: 'Homem de 58 anos deu entrada no pronto-socorro com dor epigástrica irradiada para as costas, iniciada há 2 horas, progressiva, pós-prandial, acompanhada de náuseas, vômitos e sudorese. Relata episódios semelhantes no último ano, que melhoraram com analgésicos. Tabagista ativo e etilista de longa data. Os exames laboratoriais mostram amilase e lipase normais.\n\nQual é o provável diagnóstico?',
    options: [
      '(A) Colangite aguda.',
      '(B) Colecistite aguda.',
      '(C) Doença ulcerosa péptica.',
      '(D) Pancreatite crônica.'
    ],
    correctAnswer: 3, // D
    explanation: 'O paciente apresenta dor epigástrica irradiada para o dorso, recorrente ao longo do último ano, associada ao etilismo crônico, principal fator de risco para pancreatite crônica. Embora apresente dor semelhante à pancreatite aguda, os níveis de amilase e lipase encontram-se normais, situação comum na pancreatite crônica devido à perda progressiva do tecido acinar pancreático, reduzindo a produção e liberação destas enzimas.',
    commentary: 'A colangite cursa com a tríade de Charcot (febre, icterícia, dor em HCD). A colecistite aguda cursa com sinal de Murphy positivo e dor típica em hipocôndrio direito. A úlcera péptica gera dor do tipo queimação mais localizada, aliviada ou piorada por alimentos, sem a típica irradiação em barra e histórico etilista de surtos recorrentes de dor de características pancreáticas.',
    reference: 'Harrison Princípios de Medicina Interna / Federação Brasileira de Gastroenterologia',
    tags: ['gastroenterologia', 'clínica médica', 'pancreatite', 'etilismo']
  },
  {
    id: 'enamed-2025-39',
    module: 'ENAMED',
    text: 'Primigesta de 29 anos, com 41 semanas de gestação e pré-natal de risco habitual, comparece à Unidade Básica de Saúde (UBS) para consulta de rotina. Está assintomática, refere movimentação fetal presente e apresenta perfil biofísico fetal realizado há um dia dentro da normalidade.\n\nConsiderando o quadro clínico apresentado e a idade gestacional, a conduta é',
    options: [
      '(A) orientar repouso domiciliar, com planejamento da indução do parto após 42 semanas.',
      '(B) solicitar dopplervelocimetria obstétrica para avaliar o bem-estar fetal e planejar o manejo.',
      '(C) realizar amnioscopia para verificar a presença de mecônio e planejar o manejo.',
      '(D) solicitar perfil biofísico fetal e cardiotocografia a cada 2 a 3 dias e planejamento da indução do parto até 41 semanas e 6 dias.'
    ],
    correctAnswer: 3, // D
    explanation: 'Gestações que ultrapassam 41 semanas apresentam aumento progressivo do risco de insuficiência placentária, sofrimento fetal, aspiração de mecônio e óbito fetal. Por isso, as diretrizes recomendam vigilância fetal intensificada com perfil biofísico fetal e cardiotocografia seriados a cada 2 a 3 dias, associada ao planejamento da indução do parto no ambiente hospitalar até 41 semanas e 6 dias.',
    commentary: 'Aguardar após 42 semanas sem monitorização rigorosa (A) aumenta perigosamente os riscos perinatais. A dopplervelocimetria (B) não tem indicação na gravidez de risco habitual pós-termo isolada. A amnioscopia (C) caiu em desuso por sua baixa acurácia e caráter invasivo.',
    reference: 'Manual de Gestação de Alto Risco / Ministério da Saúde / FEBRASGO',
    tags: ['ginecologia', 'obstetrícia', 'gestação prolongada', 'indução do parto']
  },
  {
    id: 'enamed-2025-40',
    module: 'ENAMED',
    text: 'Médica de 32 anos foi contratada pelo Programa Mais Médicos para trabalhar na Unidade Básica de Saúde (UBS) no Distrito Sanitário Especial Indígena Yanomami, na Amazônia, região endêmica para malária. Considerando que a médica não possui morbidades ou problemas de saúde em tratamento, qual quimioprofilaxia está indicada?',
    options: [
      '(A) Artesunato.',
      '(B) Doxiciclina.',
      '(C) Primaquina.',
      '(D) Cloroquina.'
    ],
    correctAnswer: 1, // B
    annulled: true,
    explanation: 'A questão foi excluída/anulada pela banca oficial do ENAMED devido a discordâncias epidemiológicas locais e falta de dados adicionais de resistência regional do Plasmodium no enunciado. Sob a ótica teórica geral, a doxiciclina é uma das alternativas de escolha reconhecidas para quimioprofilaxia em indivíduos que vão se expor a áreas de risco com circulação de Plasmodium falciparum resistente a múltiplos fármacos (incluindo cloroquina).',
    commentary: 'Observação: Esta questão foi oficialmente excluída/anulada pela banca realizadora do ENAMED 2025, não somando pontos para classificação. A alternativa B (doxiciclina) representa a droga profilática mais plausível em regimes de alta resistência.',
    reference: 'Guia de Vigilância em Saúde do Ministério da Saúde / Organização Mundial da Saúde (OMS)',
    tags: ['saúde coletiva', 'infectologia', 'malária', 'medicina de viagem']
  },
  {
    id: 'enamed-2025-41',
    module: 'ENAMED',
    text: 'Homem de 21 anos, portador de diabetes mellitus tipo 1, diagnosticado há 5 anos, foi levado à Unidade de Pronto Atendimento (UPA) devido à dor abdominal, náuseas e vômitos. Familiares informam que está sem utilizar insulina há 3 dias por dificuldades financeiras. No exame físico, encontra-se torporoso, desidratado, com hálito cetótico e dor abdominal à palpação profunda de forma generalizada. Ao exame, frequência cardíaca de 112 bpm; frequência respiratória de 38 irpm; pressão arterial de 110 × 70 mmHg.\n\nOs exames laboratoriais na admissão indicam:\n- Glicemia: 472 mg/dL\n- pH arterial: 7,2\n- Bicarbonato: 10 mEq/L\n- Creatinina: 1,6 mg/dL\n- Potássio sérico: 3,0 mEq/L\n\nO diagnóstico e a conduta inicial indicada para esse paciente são, respectivamente,',
    options: [
      '(A) pancreatite aguda; iniciar dieta oral zero.',
      '(B) estado hiperosmolar hiperglicêmico; iniciar insulinoterapia.',
      '(C) cetoacidose diabética; prescrever solução fisiológica a 0,9%.',
      '(D) insuficiência renal aguda; prescrever bicarbonato de sódio.'
    ],
    correctAnswer: 2, // C
    explanation: 'O paciente apresenta quadro clássico de cetoacidose diabética (CAD), caracterizado por hiperglicemia importante, acidose metabólica (pH 7,2 e bicarbonato de 10 mEq/L), desidratação, hálito cetônico, taquipneia (respiração de Kussmaul) e história de suspensão da insulina. A primeira medida terapêutica é a reposição volêmica com solução fisiológica a 0,9%, pois a hipovolemia é um dos principais determinantes da gravidade da CAD. Após estabilização inicial, deve-se corrigir a hipocalemia (potássio de 3,0 mEq/L) antes do início da insulinoterapia intravenosa, reduzindo o risco de arritmias.',
    commentary: 'A alternativa A é incorreta pois a dor abdominal e vômitos na CAD simulam abdome agudo/pancreatite, mas resolvem com hidratação e insulina. B está incorreta pois o estado hiperosmolar cursa com pH > 7,3 e bicarbonato > 18 mEq/L, sem cetose/acidose acentuada. D é incorreta pois o bicarbonato de sódio só é indicado em casos extremos (pH < 6,9) e a insuficiência renal aqui é pré-renal por desidratação.',
    reference: 'Diretrizes da Sociedade Brasileira de Diabetes (SBD) / ADA Guidelines',
    tags: ['clínica médica', 'endocrinologia', 'cetoacidose diabética', 'emergência']
  },
  {
    id: 'enamed-2025-42',
    module: 'ENAMED',
    text: 'Recém-nascido de 14 dias, hipoativo e com desconforto respiratório, é levado para avaliação na Unidade de Pronto Atendimento (UPA). Antecedentes obstétricos: não foi realizado pré-natal e o parto ocorreu a termo no domicílio. Exame clínico: hipoativo e pouco responsivo, hipocorado, cianótico. Aparelho respiratório: 70 irpm com tiragem subcostal. Murmúrio vesicular diminuído bilateralmente. Saturação de O₂ em ar ambiente de 82%. Aparelho cardiovascular: pulsos débeis, tempo de perfusão capilar de 5 segundos. Frequência cardíaca de 160 bpm. Abdome globoso, com fígado a 2,5 cm do rebordo costal direito, presença de halo de hiperemia e edema em torno do coto umbilical.\n\nO diagnóstico e as condutas adequadas são, respectivamente,',
    options: [
      '(A) choque cardiogênico; manter suporte ventilatório, evitar excesso de volume intravascular devido ao risco de piora, administrar fármacos vasoativos e prostaglandina E1.',
      '(B) choque neurogênico; manter suporte ventilatório, acesso venoso para expansão rápida com cristaloide isotônico, hidratação venosa de manutenção e administrar corticoide.',
      '(C) choque obstrutivo; manter suporte ventilatório, expansão volêmica e descompressão torácica com agulha.',
      '(D) choque distributivo; manter suporte ventilatório, expansão volêmica com cristaloide isotônico, hidratação venosa de manutenção, administrar antibióticos e fármacos vasoativos.'
    ],
    correctAnswer: 3, // D
    explanation: 'O recém-nascido apresenta quadro altamente sugestivo de sepse neonatal grave secundária à onfalite, evidenciada pelo halo de hiperemia e edema ao redor do coto umbilical. Há sinais de hipoperfusão (tempo de enchimento capilar prolongado, pulsos débeis), insuficiência respiratória e choque. O choque séptico em recém-nascidos é classificado como choque distributivo. O tratamento deve ser iniciado imediatamente com suporte ventilatório, reposição volêmica com cristaloides, antibioticoterapia empírica de amplo espectro e drogas vasoativas caso persista instabilidade hemodinâmica após a expansão volêmica.',
    commentary: 'O choque neurogênico e cardiogênico não se coadunam com a onfalite ativa (foco infeccioso evidente no coto umbilical). O choque obstrutivo (como no pneumotórax ou tamponamento) também não possui substrato clínico aqui.',
    reference: 'Diretrizes de Reanimação Neonatal da Sociedade Brasileira de Pediatria (SBP)',
    tags: ['pediatria', 'neonatologia', 'choque', 'sepse neonatal', 'onfalite']
  },
  {
    id: 'enamed-2025-43',
    module: 'ENAMED',
    text: 'Homem de 66 anos, em pós-operatório precoce de revascularização cardíaca, é encaminhado ao pronto-socorro com dor abdominal progressiva em quadrante inferior esquerdo há 5 dias e piora há 1 dia, com aumento do número de evacuações para três vezes ao dia. Apresenta febre, massa dolorosa em fossa ilíaca esquerda e tomografia demonstrando diverticulite do sigmoide associada a coleção de aproximadamente 100 cm³.\n\nApós iniciada a antibioticoterapia sistêmica, qual é a conduta mais adequada?',
    options: [
      '(A) Laparotomia para drenagem.',
      '(B) Tratamento clínico conservador.',
      '(C) Drenagem guiada por colonoscopia.',
      '(D) Drenagem percutânea guiada por tomografia.'
    ],
    correctAnswer: 3, // D
    annulled: true,
    explanation: 'Embora a questão tenha sido anulada oficialmente pela banca do ENAMED devido a um erro material de grafia na unidade de medida (citou-se 100 mm³ em vez de 100 cm³ ou mL em algumas versões de prova, o que seria microscópico), teoricamente a conduta indicada para diverticulite aguda complicada por abscesso pélvico volumoso (Hinchey II, > 3-4 cm) é a drenagem percutânea guiada por imagem (TC ou US) associada a antibioticoterapia de amplo espectro.',
    commentary: 'Observação: Esta questão foi oficialmente anulada pela banca do ENAMED 2025 por imprecisões no enunciado (incluindo o volume do abscesso). A alternativa D (drenagem percutânea) é a conduta clássica para coleções volumosas e acessíveis na diverticulite aguda Hinchey II.',
    reference: 'Diretrizes da Sociedade Brasileira de Coloproctologia / ASCRS',
    tags: ['cirurgia', 'diverticulite', 'abscesso', 'drenagem percutânea']
  },
  {
    id: 'enamed-2025-44',
    module: 'ENAMED',
    text: 'Parturiente de 29 anos, sem comorbidades, esteve em trabalho de parto por 8 horas e evoluiu para parto vaginal. Após 10 minutos do desprendimento do feto, ainda não se observou a expulsão da placenta. A paciente está estável e sem sinais de hemorragia.\n\nDiante do quadro apresentado, a conduta a ser adotada é',
    options: [
      '(A) aguardar a expulsão espontânea da placenta, sem intervenções adicionais, e observar sinais de separação.',
      '(B) realizar tração controlada do cordão umbilical, enquanto se estabiliza o útero com a mão suprapúbica.',
      '(C) iniciar curagem placentária, devido ao tempo transcorrido sem desprendimento placentário.',
      '(D) administrar uterotônico adicional e realizar massagem uterina para auxiliar a dequitação.'
    ],
    correctAnswer: 1, // B
    explanation: 'A paciente encontra-se no terceiro período do parto (dequitação), está hemodinamicamente estável e não apresenta hemorragia. O manejo ativo do terceiro período do parto inclui tração controlada do cordão umbilical, associada à estabilização do útero pela mão suprapúbica (manobra de Brandt-Andrews), reduzindo significativamente o risco de hemorragia pós-parto e encurtando o tempo de dequitação.',
    commentary: 'Aguardar de forma passiva (A) não faz parte das diretrizes de assistência ativa ao terceiro período. A curagem manual (C) é um procedimento invasivo indicado em casos de retenção placentária persistente (geralmente definida após 30 minutos sob manejo ativo) ou sangramento. A administração intempestiva de uterotônicos adicionais e massagem agressiva (D) não deve anteceder a tentativa de tração controlada sob as manobras adequadas.',
    reference: 'Diretrizes de Assistência ao Parto Normal do Ministério da Saúde / FEBRASGO',
    tags: ['ginecologia', 'obstetrícia', 'parto', 'dequitação', 'Brandt-Andrews']
  },
  {
    id: 'enamed-2025-45',
    module: 'ENAMED',
    text: 'Paciente de 27 anos, em regime fechado em penitenciária, queixa-se de tosse há 2 semanas.\n\nConsiderando a situação na qual se encontra esse paciente, o médico de família e comunidade deve',
    options: [
      '(A) encaminhar para internação clínica, objetivando rapidez no diagnóstico e garantia da segurança.',
      '(B) solicitar radiografia de tórax, pesquisa laboratorial de Mycobacterium tuberculosis e garantir o tratamento em caso de positividade.',
      '(C) solicitar internação social, a fim de garantir tratamento supervisionado por 6 meses, caso seja confirmada a tuberculose.',
      '(D) aguardar evolução, com uso de sintomáticos; caso a tosse persista por mais de 3 semanas, proceder à investigação diagnóstica.'
    ],
    correctAnswer: 1, // B
    explanation: 'Pessoas privadas de liberdade (PPL) representam um grupo de altíssima vulnerabilidade para tuberculose. Nesses cenários, qualquer indivíduo com tosse por 2 semanas ou mais (ou até mesmo qualquer tempo de tosse, dependendo de busca ativa de rotina) é classificado como sintomático respiratório. Deve-se iniciar imediatamente a investigação diagnóstica com radiografia de tórax, baciloscopia de escarro, teste rápido molecular para tuberculose (TRM-TB) e cultura, além de garantir o tratamento imediato supervisionado (TDO) em caso de confirmação.',
    commentary: 'Aguardar 3 semanas (D) atrasa o diagnóstico e dissemina o bacilo no ambiente confinado da penitenciária. Internação hospitalar (A) ou internação social (C) não são indicadas rotineiramente para tratamento básico de tuberculose, devendo este ser realizado em nível ambulatorial/primário sob regime supervisionado na própria unidade prisional.',
    reference: 'Manual de Recomendações para o Controle da Tuberculose no Brasil / Ministério da Saúde',
    tags: ['saúde coletiva', 'tuberculose', 'sistema prisional', 'saúde do trabalhador']
  },
  {
    id: 'enamed-2025-46',
    module: 'ENAMED',
    text: 'Homem de 32 anos apresenta quadro de dor lombar crônica de início insidioso, com duração aproximada de 6 meses, que piora pela manhã e melhora com o movimento. Refere rigidez matinal, principalmente nas regiões lombar e sacroilíaca, com duração de mais de 30 minutos, com dor nas articulações sacroilíacas e sensação de fadiga durante as últimas semanas. Não há histórico de trauma. A história familiar é positiva para doenças reumatológicas, mas o paciente desconhece diagnósticos específicos.\n\nPainel de autoanticorpos:\n- ANA: Positivo (1:80, padrão homogêneo)\n- Anti-DNA dupla hélice: Negativo\n- HLA-B27: Positivo\n- Fator reumatoide: Negativo\n- Anti-CCP: Negativo\n- Anti-Ro: Negativo\n- Anti-La: Negativo\n\nCom base no caso clínico e nos exames laboratoriais apresentados, qual é o diagnóstico mais provável?',
    options: [
      '(A) Artrite reativa.',
      '(B) Artrite psoriática.',
      '(C) Espondilite anquilosante.',
      '(D) Lúpus eritematoso sistêmico.'
    ],
    correctAnswer: 2, // C
    explanation: 'O paciente apresenta quadro típico de dor lombar inflamatória, caracterizada por início antes dos 45 anos, evolução crônica, rigidez matinal prolongada e melhora com o exercício físico. A dor em articulações sacroilíacas, associada à positividade para HLA-B27, reforça fortemente o diagnóstico de espondilite anquilosante, a forma mais clássica das espondiloartrites.',
    commentary: 'O ANA em baixo título (1:80) pode ser encontrado em indivíduos saudáveis e não define lúpus, especialmente na ausência de anti-DNA positivo e de manifestações clínicas compatíveis. O fator reumatoide e o anti-CCP negativos tornam artrite reumatoide improvável. A artrite reativa costuma ser precedida por infecção gastrointestinal ou geniturinária, e a artrite psoriática geralmente está associada a lesões cutâneas de psoríase, ausentes neste caso.',
    reference: 'Sociedade Brasileira de Reumatologia. Diretrizes para Espondiloartrites.',
    tags: ['reumatologia', 'clínica médica', 'espondilite anquilosante', 'dor lombar']
  },
  {
    id: 'enamed-2025-47',
    module: 'ENAMED',
    text: 'Adolescente de 12 anos, sexo feminino, é levada à Unidade Básica de Saúde (UBS) para verificar se suas vacinas estão atualizadas. Até os 8 anos, todas as vacinas preconizadas pelo Ministério da Saúde para o biênio 2024-2025 foram feitas, sendo que tomou 1 dose da vacina contra febre amarela aos 9 meses.\n\nNeste momento, deve receber as vacinas',
    options: [
      '(A) HPV, reforço da hepatite B e dT.',
      '(B) reforço da hepatite B, dT e SCR.',
      '(C) HPV, meningocócica ACWY e febre amarela.',
      '(D) SCR, meningocócica ACWY e febre amarela.'
    ],
    correctAnswer: 2, // C
    explanation: 'Segundo o Calendário Nacional de Vacinação, adolescentes de 11 a 14 anos devem receber a vacina contra o HPV e o reforço da meningocócica ACWY, caso ainda não tenham sido vacinados. Além disso, a paciente recebeu apenas uma dose da vacina contra febre amarela aos 9 meses. Pelas recomendações do Programa Nacional de Imunizações (PNI), indivíduos vacinados nessa idade devem receber uma segunda dose aos 4 anos. Como ela não recebeu esse reforço, há indicação de atualização vacinal.',
    commentary: 'Não existe reforço rotineiro da hepatite B para indivíduos adequadamente vacinados, nem indicação de nova dose da tríplice viral (SCR) quando o esquema infantil está completo.',
    reference: 'Ministério da Saúde. Calendário Nacional de Vacinação 2025 / PNI',
    tags: ['saúde coletiva', 'pediatria', 'vacinação', 'imunização']
  },
  {
    id: 'enamed-2025-48',
    module: 'ENAMED',
    text: 'Paciente masculino, 36 anos, tabagista e ascensorista, procura atendimento ambulatorial queixando-se de tosse seca persistente há mais de três semanas, febre vespertina, dispneia aos esforços e dor infraescapular esquerda. Ao exame físico encontra-se emagrecido, descorado e apresenta murmúrio vesicular diminuído com macicez à percussão na base do hemitórax esquerdo.\n\nCom base no diagnóstico provável, quais são, respectivamente, o exame complementar e a conduta adequada ao caso?',
    options: [
      '(A) Ressonância magnética; programação cirúrgica.',
      '(B) Tomografia de tórax; lobectomia segmentar.',
      '(C) Tomografia de tórax; drenagem de tórax.',
      '(D) Ultrassonografia; toracocentese.'
    ],
    correctAnswer: 3, // D
    explanation: 'O exame físico é sugestivo de derrame pleural, evidenciado por macicez à percussão e redução do murmúrio vesicular. A ultrassonografia torácica apresenta alta sensibilidade para detectar pequenas coleções pleurais, definir sua localização e orientar procedimentos invasivos. A toracocentese diagnóstica é indicada em praticamente todos os derrames pleurais de causa desconhecida, permitindo análise bioquímica, microbiológica e citológica do líquido pleural para definição da etiologia.',
    commentary: 'A tomografia de tórax pode ser necessária posteriormente, mas não substitui a toracocentese como primeira abordagem diagnóstica. Não há indicação imediata de cirurgia (como lobectomia ou programação cirúrgica) ou drenagem torácica sem confirmação prévia de empiema ou outras complicações.',
    reference: 'Sociedade Brasileira de Pneumologia e Tisiologia. Diretrizes sobre derrame pleural.',
    tags: ['pneumologia', 'clínica médica', 'derrame pleural', 'toracocentese']
  },
  {
    id: 'enamed-2025-49',
    module: 'ENAMED',
    text: 'Nulípara de 30 anos, com diagnóstico de lúpus eritematoso sistêmico e história recente de trombose venosa, apresenta ciclos menstruais prolongados de 8 a 10 dias, com intenso sangramento e cólicas fortes, buscando orientação sobre métodos contraceptivos.\n\nConsiderando os critérios de elegibilidade para uso de anticoncepção e o quadro clínico, qual é a melhor opção de contracepção?',
    options: [
      '(A) DIU de cobre.',
      '(B) DIU de levonorgestrel.',
      '(C) Anticoncepcional injetável mensal.',
      '(D) Pílula anticoncepcional combinada contínua.'
    ],
    correctAnswer: 1, // B
    explanation: 'Pacientes com lúpus eritematoso sistêmico e antecedente de tromboembolismo venoso apresentam contraindicação formal ao uso de contraceptivos contendo estrogênio devido ao aumento acentuado do risco trombótico. O DIU liberador de levonorgestrel (SIU-LNG) constitui excelente opção nestes casos, pois apresenta elevada eficácia contraceptiva e reduz drasticamente o fluxo menstrual e as cólicas, tratando de forma ideal o sangramento abundante e a dismenorreia.',
    commentary: 'O DIU de cobre (A) pode agravar o fluxo menstrual e as cólicas intensas já relatadas pela paciente. Os anticoncepcionais combinados (C e D) contêm estrogênios e são contraindicados (Categoria 4 dos critérios da OMS) devido ao histórico de trombose.',
    reference: 'OMS e CDC. Medical Eligibility Criteria for Contraceptive Use.',
    tags: ['ginecologia', 'obstetrícia', 'contracepção', 'lúpus', 'trombose']
  },
  {
    id: 'enamed-2025-50',
    module: 'ENAMED',
    text: 'Homem de 55 anos, com diagnóstico de diabetes mellitus, comparece à consulta de rotina na Unidade Básica de Saúde (UBS) levando exames laboratoriais. Faz uso de metformina 850 mg três vezes ao dia e glicazida 30 mg uma vez ao dia há mais de seis meses. Os exames mostram hemoglobina glicada de 9,5% e creatinina sérica de 0,8 mg/dL.\n\nQual das condutas é a mais adequada para o seguimento desse caso?',
    options: [
      '(A) Suspender os medicamentos orais e iniciar insulina NPH 10 UI pela manhã e 20 UI à noite.',
      '(B) Aumentar a glicazida para 60 mg ao dia, aumentar a metformina para 1 g três vezes ao dia e reavaliar em um mês.',
      '(C) Manter a dose de metformina e glicazida, iniciar insulina NPH 10 UI à noite, associada à monitorização da glicemia de jejum, ajustando 2 a 3 UI a cada 2 a 3 dias até atingir a meta.',
      '(D) Trocar a glicazida por glibenclamida 20 mg/dia, aumentar a metformina para 1 g três vezes ao dia e reavaliar em um mês.'
    ],
    correctAnswer: 2, // C
    explanation: 'O paciente apresenta diabetes mellitus tipo 2 inadequadamente controlado, com hemoglobina glicada de 9,5% (bem acima da meta convencional de < 7%), apesar do uso regular de dose plena de metformina (2.550 mg/dia) e dose associada de glicazida. As diretrizes recomendam iniciar insulinização basal (insulina NPH ao deitar, 10 UI ou 0,2 UI/kg) mantendo os sensibilizadores de insulina orais (como a metformina), com autoajuste progressivo (titulação de 2 a 3 UI a cada 2 a 3 dias) guiado pela glicemia de jejum.',
    commentary: 'As alternativas B e D propõem elevar a metformina para 3 g/dia, o que ultrapassa o limite de segurança terapêutico (máximo recomendado de 2.550 mg/dia) e não resolveria a refratariedade insulínica de HbA1c 9,5%. A suspensão imediata dos orais (A) não é recomendada por perder o efeito sinérgico e a sensibilização periférica.',
    reference: 'Diretrizes da Sociedade Brasileira de Diabetes (SBD) / Protocolos do Ministério da Saúde',
    tags: ['clínica médica', 'endocrinologia', 'diabetes mellitus', 'insulinoterapia']
  },
  {
    id: 'enamed-2025-51',
    module: 'ENAMED',
    text: 'Homem de 38 anos retorna a ambulatório de clínica médica de um hospital de atenção secundária, onde faz acompanhamento clínico de retocolite ulcerativa. Analisando os exames complementares solicitados na última consulta, o médico atendente observa elevações significativas da fosfatase alcalina e gama-GT, com discreta elevação dos níveis séricos de aminotransferases, sem hiperbilirrubinemia. Questionado, o paciente refere apenas leve desconforto no hipocôndrio direito. Ao exame físico, não há icterícia, febre ou presença de sinal de Murphy.\n\nConsiderando a doença de base do caso, o exame complementar indicado e seu resultado provável são, respectivamente,',
    options: [
      '(A) tomografia computadorizada de abdome; lesão tumoral presente ao nível do hilo hepático.',
      '(B) colangiopancreatografia retrógrada endoscópica; presença de litíase impactada no colédoco terminal.',
      '(C) colangiorressonância; múltiplas estenoses intercaladas na árvore biliar, com áreas normais ou dilatadas de permeio.',
      '(D) ultrassonografia abdominal total; espessamento da parede da vesícula biliar com nodulação no interior, sem sombra acústica.'
    ],
    correctAnswer: 2, // C
    explanation: 'Pacientes com retocolite ulcerativa (RCU) apresentam forte associação com a colangite esclerosante primária (CEP). O padrão laboratorial de colestase (elevação acentuada de fosfatase alcalina e gama-GT) associado ao quadro clínico em paciente com RCU é clássico de CEP. O exame de escolha para o diagnóstico é a colangiorressonância (CPRM), que demonstra o aspecto típico em "contas de rosário", caracterizado por múltiplas estenoses alternadas com segmentos normais ou dilatados das vias biliares.',
    commentary: 'A CPRE (B) era o padrão antigo, mas hoje é reservada para intervenções terapêuticas pelo risco de pancreatite e infecção. A tomografia (A) e a ultrassonografia (D) são menos sensíveis e não trazem o achado anatomopatológico típico de estenoses multifocais característico das vias biliares na CEP.',
    reference: 'Federação Brasileira de Gastroenterologia / Sabiston Tratado de Cirurgia',
    tags: ['gastroenterologia', 'hepatologia', 'colangite esclerosante', 'retocolite ulcerativa']
  },
  {
    id: 'enamed-2025-52',
    module: 'ENAMED',
    text: 'Mãe de menina de 11 meses, em consulta de puericultura, relata que não há queixas específicas no momento e refere que a criança está começando a trocar passos de maneira independente. Apresenta marcos do desenvolvimento anteriores a 11 meses dentro da normalidade e bom ganho pôndero-estatural. Gestação e parto sem intercorrências.\n\nO reflexo primitivo usualmente presente nessa faixa etária é o',
    options: [
      '(A) reflexo plantar.',
      '(B) reflexo de Moro.',
      '(C) reflexo de procura.',
      '(D) reflexo tônico cervical.'
    ],
    correctAnswer: 0, // A
    explanation: 'O reflexo plantar (Babinski fisiológico) é um reflexo primitivo que normalmente permanece presente em lactentes e crianças pequenas, podendo persistir de forma fisiológica até aproximadamente 12 a 24 meses de idade devido à incompleta mielinização do trato corticoespinal (via piramidal).',
    commentary: 'Os demais reflexos primitivos desaparecem bem mais cedo no desenvolvimento do lactente normal: o reflexo de procura (C) some com 3 a 4 meses; o reflexo de Moro (B) desaparece entre 4 e 6 meses; e o reflexo tônico-cervical assimétrico (D) desaparece por volta dos 6 meses de idade.',
    reference: 'Nelson Tratado de Pediatria / Sociedade Brasileira de Pediatria (SBP)',
    tags: ['pediatria', 'puericultura', 'desenvolvimento infantil', 'reflexos primitivos']
  },
  {
    id: 'enamed-2025-53',
    module: 'ENAMED',
    text: 'Paciente do sexo masculino, 23 anos, vítima de acidente automobilístico, usando cinto de segurança. Foi retirado consciente do veículo, apresentando amnésia anterógrada. Após atendimento pré-hospitalar, foi levado ao pronto-socorro, sem déficits motores ou sensitivos. Durante a realização da tomografia computadorizada de crânio, evoluiu com rebaixamento do nível de consciência, anisocoria com pupila esquerda dilatada e necessidade de intubação orotraqueal.\n\nA tomografia computadorizada evidencia coleção hiperdensa biconvexa.\n\nO médico diagnosticou',
    options: [
      '(A) hematoma subdural agudo, sendo necessário realizar hidantalização e aguardar melhora clínica.',
      '(B) contusão cerebral, sendo necessária cirurgia de emergência.',
      '(C) hematoma epidural, sendo necessária cirurgia de emergência para controle da hipertensão intracraniana.',
      '(D) hematoma intraparenquimatoso, sendo necessário realizar hidantalização e aguardar melhora clínica.'
    ],
    correctAnswer: 2, // C
    explanation: 'O quadro de trauma crânio-encefálico (TCE) com perda inicial de consciência, intervalo lúcido (paciente acordado e estável na admissão) seguido de rápida deterioração neurológica, herniação uncal (anisocoria com pupila ipsilateral midriática) e imagem tomográfica hiperdensa com formato biconvexo (lenticular) é patognomônico de hematoma epidural (ou extradural), usualmente decorrente de lesão da artéria meníngea média. Trata-se de uma emergência neurocirúrgica absoluta (craniotomia descompressiva e drenagem).',
    commentary: 'O hematoma subdural agudo (A) apresenta-se na TC como uma imagem em crescente (côncavo-convexa) e o curso costuma ser mais progressivo ou de imediato coma. Contusões e hematomas intraparenquimatosos (B e D) mostram padrão heterogêneo dentro do parênquima cerebral, sem o formato biconvexo típico.',
    reference: 'Diretrizes do ATLS (Advanced Trauma Life Support) / Tratado de Neurocirurgia',
    tags: ['cirurgia', 'neurocirurgia', 'traumatologia', 'TCE', 'emergência'],
    image: '/images/enamed2025-53.webp'
  },
  {
    id: 'enamed-2025-54',
    module: 'ENAMED',
    text: 'Uma adolescente de 15 anos comparece em consulta ginecológica com a finalidade de iniciar contracepção. Na história patológica pregressa, refere episódios de enxaqueca com aura. Nos antecedentes familiares, relata que a avó materna teve diagnóstico de câncer de mama, sua mãe é hipertensa e sua irmã tem diabetes.\n\nO uso do contraceptivo combinado está contraindicado para essa paciente devido ao risco de',
    options: [
      '(A) câncer de mama.',
      '(B) diabetes mellitus.',
      '(C) acidente vascular cerebral.',
      '(D) hipertensão arterial sistêmica.'
    ],
    correctAnswer: 2, // C
    explanation: 'A presença de enxaqueca com aura constitui uma contraindicação absoluta (Categoria 4 dos Critérios de Elegibilidade da OMS) para o uso de qualquer contraceptivo hormonal combinado (que contenha estrogênio), pois o estrogênio aumenta significativamente o risco relativo e absoluto de ocorrência de Acidente Vascular Cerebral (AVC) isquêmico nessas pacientes.',
    commentary: 'Histórico familiar de câncer de mama (A), diabetes (B) ou hipertensão (D) em parentes de segundo ou primeiro grau não contraindicam o uso de contraceptivo combinado na paciente. É a enxaqueca com aura (condição clínica pessoal) que impõe a contraindicação de forma absoluta pelo risco catastrófico de AVC.',
    reference: 'Critérios Médicos de Elegibilidade para Uso de Contraceptivos da OMS / FEBRASGO',
    tags: ['ginecologia', 'obstetrícia', 'contracepção', 'enxaqueca', 'AVC']
  },
  {
    id: 'enamed-2025-55',
    module: 'ENAMED',
    text: 'Ao visitar um idoso acamado de 80 anos, restrito ao lar e dependente para atividades de vida diária, a médica de família verificou que ele não havia recebido as vacinas indicadas pelo Ministério da Saúde para idosos. A filha, cuidadora principal, afirmou que preferiu não vaciná-lo por considerá-lo muito frágil e acreditar que, por permanecer em casa, não correria riscos.\n\nAssinale a alternativa que inclui, respectivamente, vacinas disponibilizadas no calendário nacional para idosos e uma forma adequada de abordar essa situação.',
    options: [
      '(A) Pneumocócica 23-valente, uma dose com reforço em 5 anos; dupla adulto (dT) a cada 10 anos; influenza e covid-19 anualmente; hepatite B (3 doses). Agendar nova visita domiciliar com mais membros da família para dialogar sobre a situação.',
      '(B) Influenza e covid-19 anualmente; dT a cada 10 anos; hepatite B (3 doses); herpes-zóster (2 doses). Fazer denúncia ao Conselho Municipal do Idoso.',
      '(C) Pneumocócica 10-valente; dT; influenza; covid-19; hepatite B. Solicitar que a filha assine termo de responsabilidade.',
      '(D) Pneumocócica 10-valente; influenza; covid-19; herpes-zóster; dT. Respeitar a decisão da filha.'
    ],
    correctAnswer: 0, // A
    explanation: 'O calendário nacional de vacinação do idoso do SUS contempla as vacinas de Influenza, Covid-19, Hepatite B, Dupla Adulto (dT) e a Pneumocócica 23-valente (esta última para idosos acamados, institucionalizados ou com comorbidades específicas, em esquema de uma dose com reforço em 5 anos). A abordagem dialogada, envolvendo o núcleo familiar na discussão pedagógica de riscos e benefícios, é a conduta ética e tecnicamente mais adequada na Atenção Primária para desfazer falsas crenças sobre vacinação.',
    commentary: 'A vacina de herpes-zóster (B e D) não está atualmente inserida no Programa Nacional de Imunizações (PNI) do SUS para idosos de forma universal (apenas no mercado privado). A pneumocócica 10-valente (C e D) é vacina pediátrica conjugada. A denúncia imediata (B) ou exigência de termo (C) são condutas punitivas inadequadas antes de esgotar o diálogo instrutivo.',
    reference: 'Calendário Nacional de Vacinação do Idoso - Ministério da Saúde / SBIm',
    tags: ['saúde coletiva', 'geriatria', 'vacinação', 'ética médica', 'visita domiciliar']
  },
  {
    id: 'enamed-2025-56',
    module: 'ENAMED',
    text: 'O vírus Chikungunya é transmitido pelo mosquito Aedes sp. e foi responsável por grandes epidemias associadas a desfechos clínicos agudos, crônicos e graves.\n\nAs ações voltadas para o controle do Aedes sp. incluem medidas como o manejo integrado de vetores, que envolve atividades a serem executadas pela equipe de vigilância do território em um processo cíclico, tais como',
    options: [
      '(A) levantamento do índice larvário, notificação de vetores infectados e avaliação dos indicadores entomológicos e epidemiológicos.',
      '(B) treinamento da equipe de controle de vetores, uso intensivo de inseticidas, mutirões de limpeza e tratamento de pontos estratégicos.',
      '(C) vigilância virológica, notificação semanal dos casos suspeitos de Chikungunya em áreas sem transmissão e definição do local provável de infecção.',
      '(D) análise situacional com base em informações epidemiológicas e entomológicas, desenho das operações de planificação, implementação, monitoramento e avaliação.'
    ],
    correctAnswer: 3, // D
    explanation: 'O Manejo Integrado de Vetores (MIV), recomendado pela Organização Mundial da Saúde e adotado pelo Ministério da Saúde, baseia-se em um processo contínuo de planejamento das ações de controle. Esse processo inicia-se com a análise conjunta de dados epidemiológicos e entomológicos, seguida do planejamento das intervenções, implementação das medidas, monitoramento e avaliação dos resultados.',
    commentary: 'As demais alternativas descrevem apenas ações isoladas de controle vetorial ou vigilância, mas não representam o conceito completo e cíclico do manejo integrado de vetores.',
    reference: 'Diretrizes nacionais para o controle do Aedes do Ministério da Saúde / OMS',
    tags: ['saúde coletiva', 'epidemiologia', 'vetores', 'chikungunya', 'vigilância em saúde']
  },
  {
    id: 'enamed-2025-57',
    module: 'ENAMED',
    text: 'Criança de 9 anos chega à Unidade Básica de Saúde (UBS) com diagnóstico de transtorno do déficit de atenção e hiperatividade (TDAH) há 2 anos. Faz uso de metilfenidato há pelo menos 1 ano. O pai informa que, desde o início do uso, apresentou grande melhora na escola e solicita que o tratamento seja mantido.\n\nQuais estratégias de monitoramento referentes ao uso dessa medicação devem ser utilizadas?',
    options: [
      '(A) Realizar seguimento conjunto com neuropediatra para acompanhar aumento de peso e possível dislipidemia.',
      '(B) Acompanhar com testes psicodinâmicos parâmetros de atenção e desempenho escolar.',
      '(C) Coletar hemograma e hormônios tireoidianos anualmente e eventualmente prescrever antipsicóticos.',
      '(D) Agendar consultas periódicas para verificação da estatura, peso e pressão arterial, com nova avaliação para retirada após 1 ano.'
    ],
    correctAnswer: 3, // D
    explanation: 'O metilfenidato pode causar redução do apetite, perda ponderal, desaceleração do crescimento e discreto aumento da pressão arterial e da frequência cardíaca. Dessa forma, o acompanhamento periódico deve incluir a avaliação de peso, estatura, pressão arterial, frequência cardíaca e avaliação clínica da resposta terapêutica e efeitos adversos, além de programar uma reavaliação periódica (usualmente após 1 ano) para determinar a necessidade de continuidade.',
    commentary: 'Não existe recomendação para realização rotineira de hemograma, exames de tireoide (C) ou monitoração de dislipidemia (A) induzida por estimulantes em crianças sem outros fatores. Testes psicodinâmicos (B) também não são a ferramenta padrão de acompanhamento terapêutico na Atenção Primária.',
    reference: 'Diretrizes de TDAH da Sociedade Brasileira de Pediatria (SBP) / DSM-5',
    tags: ['pediatria', 'saúde mental', 'psiquiatria infantil', 'TDAH', 'psicofarmacologia']
  },
  {
    id: 'enamed-2025-58',
    module: 'ENAMED',
    text: 'Mulher de 45 anos é internada em hospital de média complexidade com febre, mialgia, mal-estar e dor na região cervical anterior irradiada para mandíbula e orelhas. Há duas semanas apresentou quadro sugestivo de infecção viral de vias aéreas superiores. Evoluiu com palpitações e tremores. Ao exame físico apresenta tireoide dolorosa, firme, discretamente aumentada e velocidade de hemossedimentação e proteína C reativa elevadas.\n\nConsiderando a principal hipótese diagnóstica para o caso, quais exames complementares a sustentariam e qual o tratamento indicado, respectivamente?',
    options: [
      '(A) Redução da captação tireoidiana de iodo radioativo; betabloqueador e anti-inflamatório.',
      '(B) Presença de nódulo quente à cintilografia; tireoidectomia subtotal.',
      '(C) Aumento de TSH, T4 livre e TRAb; ablação com iodo radioativo.',
      '(D) Aumento de TSH, T3 e T4 livre; oseltamivir, metimazol e atenolol.'
    ],
    correctAnswer: 0, // A
    explanation: 'O quadro clínico é típico de tireoidite subaguda (de Quervain), caracterizado por pródromo viral, dor cervical anterior intensa irradiada para mandíbula/orelhas, tireoide dolorosa e marcadores inflamatórios (VHS/PCR) elevados, associado a um quadro de tireotoxicose transitória inicial. Na tireoidite de Quervain, a captação de iodo radioativo (RAIU) está severamente reduzida, pois as células foliculares estão danificadas e não captam iodo para sintetizar hormônios. O tratamento baseia-se em anti-inflamatórios (não esteroides ou corticoides) e betabloqueadores (como atenolol ou propranolol) para controle dos sintomas adrenérgicos.',
    commentary: 'As drogas antitireoidianas (como metimazol) não são indicadas porque a tireotoxicose decorre da liberação passiva de hormônios pré-formados, e não de hiperfunção glandular (hipertiroidismo verdadeiro). A presença de nódulo quente (B) indicaria adenoma tóxico. TRAb elevado (C) é específico da Doença de Graves.',
    reference: 'Diretrizes da Sociedade Brasileira de Endocrinologia e Metabologia (SBEM) / Harrison',
    tags: ['clínica médica', 'endocrinologia', 'tireoidite', 'tireoidite de Quervain']
  },
  {
    id: 'enamed-2025-59',
    module: 'ENAMED',
    text: 'Lactente de 9 meses é atendido em Unidade Básica de Saúde (UBS) devido ao surgimento de crises epilépticas há 3 meses. Os episódios caracterizam-se por espasmos em flexão dos membros superiores sobre o tronco, semelhantes a sustos, ocorrendo principalmente nos períodos de sonolência. Ao exame físico apresenta atraso do desenvolvimento motor e múltiplas manchas hipomelanóticas no tronco e membros inferiores. A ressonância magnética evidencia duas áreas compatíveis com astrocitomas subependimários de células gigantes.\n\nA principal hipótese diagnóstica é',
    options: [
      '(A) Neurofibromatose.',
      '(B) Esclerose tuberosa.',
      '(C) Síndrome de Sturge-Weber.',
      '(D) Doença de von Hippel-Lindau.'
    ],
    correctAnswer: 1, // B
    explanation: 'A associação de espasmos infantis (Síndrome de West), atraso no desenvolvimento neuropsicomotor, manchas hipomelanóticas ("folha de freixo" ou ash-leaf spots) e astrocitomas subependimários de células gigantes (SEGA) na neuroimagem constitui a apresentação clássica da Esclerose Tuberosa (Complexo da Esclerose Tuberosa). Esta é uma síndrome neurocutânea autossômica dominante de alta penetrância.',
    commentary: 'A neurofibromatose tipo 1 (A) cursa com manchas café-com-leite, sardas axilares/inguinais e neurofibromas. A síndrome de Sturge-Weber (C) associa angioma facial em vinho do Porto e glaucoma. A doença de von Hippel-Lindau (D) associa-se a hemangioblastomas no SNC/retina e carcinoma de células renais.',
    reference: 'Nelson Tratado de Pediatria / Diretrizes da Sociedade Brasileira de Neurologia Infantil',
    tags: ['pediatria', 'neurologia', 'genética', 'esclerose tuberosa', 'síndromes neurocutâneas']
  },
  {
    id: 'enamed-2025-60',
    module: 'ENAMED',
    text: 'Paciente masculino, 59 anos, atendido em hospital terciário com dor em fossa ilíaca esquerda há cinco dias, febre nas últimas 48 horas e prostração. Relata episódio semelhante há um ano e hematoquezia há seis meses. Ao exame físico apresenta plastrão palpável em hipogástrio. Hemograma mostra leucocitose de 17.000/mm³ com desvio à esquerda.\n\nConsiderando o quadro, qual é o exame complementar de maior acurácia para estabelecer o diagnóstico?',
    options: [
      '(A) Radiografia abdominal em três posições.',
      '(B) Colonoscopia com biópsia.',
      '(C) Tomografia de abdome com contraste.',
      '(D) Ultrassonografia de abdome.'
    ],
    correctAnswer: 2, // C
    explanation: 'A tomografia computadorizada (TC) de abdome e pelve com contraste endovenoso é o método de escolha de maior acurácia diagnóstica na diverticulite aguda do cólon sigmoide, permitindo também classificar a gravidade da doença (através da classificação de Hinchey), identificar a formação de coleções (plastrão/abscesso, sugerido no exame físico pela massa palpável) e planejar intervenções terapêuticas.',
    commentary: 'A colonoscopia (B) é formalmente contraindicada na fase aguda da diverticulite pelo altíssimo risco de perfuração da parede colônica inflamada e fragilizada, devendo ser postergada por 6 semanas. A radiografia (A) possui baixa acurácia e a ultrassonografia (D) é operador-dependente e tem menor acurácia na presença de gases e obesidade.',
    reference: 'Diretrizes da Sociedade Brasileira de Coloproctologia (SBCP) / Sabiston',
    tags: ['cirurgia', 'gastroenterologia', 'diverticulite', 'tomografia']
  },
  {
    id: 'enamed-2025-61',
    module: 'ENAMED',
    text: 'Mulher de 35 anos, diabética, com laqueadura tubária bilateral, procurou atendimento médico com queixa de prurido genital e disúria terminal, com 7 dias de evolução. Recentemente, fez uso de antibiótico para tratamento de abscesso dental. Ao exame especular, notava-se edema vulvar, hiperemia, fissura, corrimento esbranquiçado e teste das aminas negativo.\n\nCom base no agente etiológico mais provável, o tratamento é',
    options: [
      '(A) miconazol, 1 aplicador, via vaginal, por 7 noites.',
      '(B) cefalexina, 2 g/dia, via oral, por 7 dias.',
      '(C) azitromicina 1 g/dia, via oral, por 10 dias.',
      '(D) metronidazol, 1 aplicador, via vaginal, por 10 noites.'
    ],
    correctAnswer: 0, // A
    explanation: 'O quadro clínico exposto é típico de candidíase vulvovaginal, que tem como fatores de risco proeminentes o diabetes mellitus e o uso recente de antibióticos de amplo espectro (que alteram a microbiota vaginal protetora, permitindo a proliferação fúngica). O achado de prurido, edema e hiperemia vulvar, corrimento esbranquiçado grumoso e teste das aminas negativo sela a hipótese de infecção por Candida spp. O tratamento padrão de primeira linha é o uso de antifúngicos tópicos intravaginais como o miconazol creme por 7 noites.',
    commentary: 'Cefalexina (B) e azitromicina (C) são antibióticos ineficazes contra fungos e agravariam o desequilíbrio da flora. Metronidazol (D) é o tratamento de escolha para vaginose bacteriana e tricomoníase, que tipicamente apresentam teste das aminas positivo e pH alterado.',
    reference: 'Protocolo de Infecções Sexualmente Transmissíveis (IST) - Ministério da Saúde / FEBRASGO',
    tags: ['ginecologia', 'obstetrícia', 'candidíase', 'corrimento vaginal', 'saúde da mulher']
  },
  {
    id: 'enamed-2025-62',
    module: 'ENAMED',
    text: 'Médica de família e comunidade foi solicitada para preencher a declaração de óbito de um paciente que acompanhava regularmente em sua área adstrita. O paciente era hipertenso há 30 anos, com histórico pessoal de acidente vascular encefálico (AVE) há 5 anos. Há 10 dias o paciente apresentou quadro gripal e há 1 dia teve agravamento dos sintomas respiratórios, com dispneia e cianose.\n\nA declaração de óbito deverá ser preenchida',
    options: [
      '(A) pelo Instituto Médico Legal e constar: Parte I: a) Insuficiência respiratória aguda grave (horas); b) Síndrome gripal (10 dias); c) Hipertensão arterial sistêmica (30 anos). Parte II: Acidente vascular encefálico (5 anos).',
      '(B) pela médica e constar: Parte I: a) Insuficiência respiratória aguda grave (horas); b) Pneumonia (1 dia); c) Síndrome gripal (10 dias). Parte II: a) Acidente vascular encefálico (5 anos); b) Hipertensão arterial sistêmica (30 anos).',
      '(C) pelo Serviço de Verificação de Óbitos e constar: Parte I: a) Síndrome gripal (10 dias); b) Pneumonia (1 dia); c) Insuficiência respiratória aguda grave (horas). Parte II: a) Acidente vascular encefálico (5 anos); b) Hipertensão arterial sistêmica (30 anos).',
      '(D) pelo Serviço de Verificação de Óbitos e constar: Parte I: a) Insuficiência respiratória aguda grave (horas); b) Acidente vascular encefálico (5 anos); c) Hipertensão arterial sistêmica (30 anos). Parte II: a) Pneumonia (1 dia); b) Síndrome gripal (10 dias).'
    ],
    correctAnswer: 1, // B
    explanation: 'A médica assistente da Atenção Primária que acompanhava o paciente em sua área adstrita tem a responsabilidade e o dever ético de preencher a Declaração de Óbito (DO) em caso de morte natural domiciliar, sem indícios de violência. No preenchimento, a Parte I destina-se à cadeia causal direta que levou à morte (causa imediata: insuficiência respiratória grave; causa intermediária: pneumonia; causa básica: síndrome gripal). A Parte II destina-se às causas preexistentes/concomitantes que influenciaram negativamente a evolução do paciente, mas que não iniciaram a cadeia de eventos diretamente ligada ao óbito (como AVE prévio e hipertensão arterial crônica).',
    commentary: 'O IML (A) só atua em óbitos por causas externas/violentas ou suspeitas. O SVO (C e D) é acionado para mortes naturais sem assistência médica ou de causa mal definida em locais onde não há médico assistente disponível, o que não é o caso, pois havia acompanhamento regular pela médica de família.',
    reference: 'Instruções para o Preenchimento da Declaração de Óbito / Ministério da Saúde / Conselho Federal de Medicina (CFM)',
    tags: ['saúde coletiva', 'medicina de família', 'declaração de óbito', 'ética médica', 'vigilância epidemiológica']
  },
  {
    id: 'enamed-2025-63',
    module: 'ENAMED',
    text: 'Uma equipe de Saúde da Família percebeu aumento do número de casos complicados de diabetes mellitus. Entre 3.500 pacientes cadastrados, 280 possuem diabetes tipo 2. A equipe elaborou um projeto de intervenção coletiva com orientação nutricional e incentivo à atividade física para reduzir complicações.\n\nQual é o desenho de pesquisa mais adequado para avaliar o impacto desse projeto?',
    options: [
      '(A) Estudo de caso-controle aninhado.',
      '(B) Ensaio clínico não randomizado.',
      '(C) Estudo de coorte retrospectivo.',
      '(D) Ensaio clínico randomizado.'
    ],
    correctAnswer: 3, // D
    explanation: 'Para avaliar com o maior rigor metodológico possível o impacto de uma intervenção ativa (projeto educativo de orientação nutricional e atividade física), eliminando vieses de confusão e seleção, o Ensaio Clínico Randomizado (ECR) é considerado o delineamento experimental padrão-ouro. Nele, os indivíduos (ou as microáreas/grupos) são aleatorizados entre receber a intervenção e o cuidado habitual, permitindo inferir relação de causalidade direta sobre a redução de complicações.',
    commentary: 'Estudos observacionais como coorte retrospectivo (C) e caso-controle (A) apenas avaliam retrospectivamente associações de risco preexistentes, sem controle experimental ativo da intervenção. Ensaios não randomizados (B) sofrem com forte viés de seleção sistemático.',
    reference: 'Epidemiologia Clínica: Elementos Essenciais / Fletcher / Medronho',
    tags: ['saúde coletiva', 'metodologia científica', 'epidemiologia', 'ensaio clínico']
  },
  {
    id: 'enamed-2025-64',
    module: 'ENAMED',
    text: 'Homem de 23 anos é levado à Unidade de Pronto Atendimento após ser encontrado chorando, trancado no banheiro, com diversas cartelas de medicamentos ao seu redor. Nega ter ingerido medicamentos, mas admite estar pensando em morrer, afirma que pesquisou formas de suicídio na internet, apresenta tristeza intensa há dois meses, isolamento social, insônia, perda do apetite e prejuízo acadêmico. Mora sozinho, longe da família, e abandonou psicoterapia. Ao exame, apresenta humor deprimido, discurso lentificado e pobre contato visual, sem alterações laboratoriais.\n\nQual é a conduta adequada?',
    options: [
      '(A) Encaminhar para acompanhamento em Unidade Básica de Saúde.',
      '(B) Encaminhar para psicoterapia na Atenção Primária.',
      '(C) Encaminhar para acompanhamento ambulatorial em CAPS I.',
      '(D) Encaminhar para internação em enfermaria de saúde mental em hospital geral ou serviço congênere.'
    ],
    correctAnswer: 3, // D
    explanation: 'O paciente de 23 anos apresenta um quadro de depressão maior grave associado a ALTO RISCO IMINENTE de suicídio (ideação suicida ativa estruturada, planejamento de meios com aquisição de medicamentos, pesquisa prévia de métodos na internet, falta de rede de apoio/mora sozinho, e interrupção do acompanhamento de saúde mental anterior). Diante do iminente risco à integridade da própria vida, a conduta de emergência psiquiátrica indicada é a internação hospitalar protetiva (de preferência em enfermaria de saúde mental em hospital geral) para estabilização do quadro clínico agudo e garantia da segurança do paciente.',
    commentary: 'Encaminhar para cuidados ambulatoriais de longo prazo ou apenas psicoterapia de rotina (A, B e C) representaria uma negligência grave frente ao alto risco imediato de autoextermínio evidenciado pelas circunstâncias do banheiro e planejamento com as cartelas de fármacos.',
    reference: 'Diretrizes de Emergências Psiquiátricas da ABP (Associação Brasileira de Psiquiatria) / Ministério da Saúde',
    tags: ['psiquiatria', 'saúde mental', 'suicidologia', 'emergência psiquiátrica', 'luto']
  },
  {
    id: 'enamed-2025-65',
    module: 'ENAMED',
    text: 'Mulher de 35 anos procura Unidade Básica de Saúde informando ter apresentado trombose venosa profunda há cerca de dois anos. Nos últimos seis meses, seu pai e sua irmã também apresentaram episódios de trombose venosa. O médico solicita investigação para trombofilia hereditária.\n\nQual alteração laboratorial é compatível com essa suspeita?',
    options: [
      '(A) Presença de Fator V de Leiden.',
      '(B) Níveis aumentados de proteína S.',
      '(C) Níveis aumentados de antitrombina III.',
      '(D) Níveis reduzidos de fator de Von Willebrand.'
    ],
    correctAnswer: 0, // A
    explanation: 'O histórico pessoal e familiar marcante de tromboembolismo venoso (TEV) de repetição em parentes de primeiro grau jovens sugere uma desordem de hipercoagulabilidade hereditária (trombofilia hereditária). A causa hereditária mais comum de trombofilia é a mutação do Fator V de Leiden (gerando resistência à degradação pela Proteína C Ativada).',
    commentary: 'Níveis aumentados de Proteína S (B) e Antitrombina III (C) são fatores protetores que reduzem a coagulação, de modo que a trombofilia se associa à deficiência (níveis reduzidos) destas proteínas regulatórias. Níveis reduzidos de Fator de von Willebrand (D) cursam com distúrbio hemorrágico (Doença de von Willebrand), e não trombótico.',
    reference: 'Hematologia Clínica / Zago / Sociedade Brasileira de Hematologia e Hemoterapia (SBHH)',
    tags: ['clínica médica', 'hematologia', 'trombofilia', 'tromboembolismo', 'fator V de Leiden']
  },
  {
    id: 'enamed-2025-66',
    module: 'ENAMED',
    text: 'Homem de 24 anos comparece à Unidade Básica de Saúde (UBS) para avaliação de lesão ulcerada em pênis com cerca de 10 dias de evolução. Refere relação sexual desprotegida há aproximadamente 3 semanas. Ao exame físico, observa-se úlcera única, de bordas elevadas, endurecidas, indolor e com fundo limpo. Linfonodos inguinais discretamente aumentados, móveis e indolores.\n\nO diagnóstico mais provável e o tratamento indicado são, respectivamente,',
    options: [
      '(A) Cancro mole; azitromicina 1 g VO em dose única.',
      '(B) Herpes genital; aciclovir 400 mg VO por 7 dias.',
      '(C) Sífilis primária; penicilina benzatina 2,4 milhões UI IM em dose única.',
      '(D) Linfogranuloma venéreo; doxiciclina 100 mg VO por 21 dias.'
    ],
    correctAnswer: 2, // C
    explanation: 'A lesão descrita corresponde ao cancro duro, manifestação clássica da sífilis primária, causada pelo Treponema pallidum. Caracteriza-se por ser uma úlcera única, de bordas elevadas e endurecidas, indolor, de fundo limpo, frequentemente associada à linfadenomegalia inguinal indolor e bilateral. O tratamento de escolha recomendado pelo Ministério da Saúde é a penicilina G benzatina 2,4 milhões UI IM em dose única.',
    commentary: 'O cancro mole (A) apresenta lesões múltiplas, dolorosas, com fundo purulento e linfadenite que fistuliza por orifício único (asclere). O herpes genital (B) cursa com múltiplas vesículas que evoluem para úlceras rasas dolorosas e recorrentes. O linfogranuloma venéreo (D) se manifesta por pápula/pústula efêmera seguida por adenopatia inguinal dolorosa com múltiplos orifícios de drenagem (bico de regador).',
    reference: 'Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com Infecções Sexualmente Transmitíveis (PCDT-IST) - Ministério da Saúde',
    tags: ['infectologia', 'ginecologia', 'urologia', 'sífilis', 'IST']
  },
  {
    id: 'enamed-2025-67',
    module: 'ENAMED',
    text: 'Recém-nascido a termo, com 36 horas de vida, apresenta icterícia progressiva. Mãe possui tipagem sanguínea O Rh positivo e o recém-nascido A Rh positivo. Exames mostram bilirrubina indireta elevada, teste de Coombs direto positivo e hemoglobina discretamente reduzida.\n\nO diagnóstico mais provável é',
    options: [
      '(A) incompatibilidade ABO.',
      '(B) incompatibilidade Rh.',
      '(C) deficiência de G6PD.',
      '(D) icterícia fisiológica.'
    ],
    correctAnswer: 0, // A
    explanation: 'O cenário de mãe O positivo e recém-nascido A positivo com icterícia precoce, anemia leve, hiperbilirrubinemia indireta e teste de Coombs direto positivo é altamente característico de incompatibilidade sanguínea materno-fetal pelo sistema ABO. Gestantes do grupo O possuem anticorpos da classe IgG anti-A e anti-B que atravessam a barreira placentária e promovem a hemólise das hemácias fetais.',
    commentary: 'A incompatibilidade Rh (B) é descartada porque mãe e filho são Rh positivo. A deficiência de G6PD (C) é uma causa importante de icterícia neonatal por hemólise, mas não cursa tipicamente com Coombs direto positivo (que sinaliza etiologia imune). A icterícia fisiológica (D) inicia-se após as 24-36 horas, mas de forma alguma cursa com anemia hemolítica ou Coombs direto positivo.',
    reference: 'Tratado de Pediatria Nelson / Sociedade Brasileira de Pediatria (SBP)',
    tags: ['pediatria', 'neonatologia', 'icterícia neonatal', 'hemólise', 'incompatibilidade ABO']
  },
  {
    id: 'enamed-2025-68',
    module: 'ENAMED',
    text: 'Homem de 60 anos procura atendimento por apresentar perda urinária aos esforços há seis meses após prostatectomia radical realizada para tratamento de câncer de próstata localizado. Nega urgência miccional ou sintomas obstrutivos.\n\nQual é a conduta inicial mais adequada?',
    options: [
      '(A) Implante imediato de esfíncter urinário artificial.',
      '(B) Exercícios para fortalecimento do assoalho pélvico.',
      '(C) Prescrição de oxibutinina.',
      '(D) Ressecção transuretral da próstata.'
    ],
    correctAnswer: 1, // B
    explanation: 'A incontinência urinária de esforço é uma complicação conhecida após prostatectomia radical, decorrente do enfraquecimento ou lesão do esfíncter uretral intrínseco. A conduta inicial e conservadora mais recomendada consiste no fortalecimento da musculatura do assoalho pélvico por meio de fisioterapia pélvica e exercícios de Kegel, apresentando ótimas taxas de melhora e cura ao longo do primeiro ano pós-cirúrgico.',
    commentary: 'O implante de esfíncter urinário artificial (A) é a terapia padrão-ouro cirúrgica, mas é indicado apenas após falha do tratamento conservador por pelo menos 6 a 12 meses. A oxibutinina (C) é um anticolinérgico indicado para incontinência de urgência (bexiga hiperativa), e não de esforço pura. A RTUp (D) não tem papel aqui, pois o paciente não possui próstata (foi submetido a prostatectomia radical).',
    reference: 'Diretrizes de Urologia da Sociedade Brasileira de Urologia (SBU) / Campbell-Walsh Urology',
    tags: ['cirurgia', 'urologia', 'incontinência urinária', 'pós-operatório', 'prostatectomia']
  },
  {
    id: 'enamed-2025-69',
    module: 'ENAMED',
    text: 'Mulher de 63 anos procura atendimento por dispneia progressiva aos esforços, tosse seca e crepitações bibasais à ausculta pulmonar. A tomografia computadorizada de alta resolução evidencia padrão de pneumonia intersticial usual (UIP).\n\nO diagnóstico mais provável é',
    options: [
      '(A) Sarcoidose.',
      '(B) Fibrose pulmonar idiopática.',
      '(C) Asma grave.',
      '(D) Pneumonia bacteriana.'
    ],
    correctAnswer: 1, // B
    explanation: 'A associação de quadro clínico respiratório restritivo crônico (dispneia progressiva, tosse seca e crepitações do tipo velcro bibasais) com achado tomográfico de Pneumonia Intersticial Usual (UIP) - caracterizado por faveolamento subpleural, bronquiectasias de tração e opacidades reticulares com gradiente crânio-caudal, sem outras causas identificáveis - sela o diagnóstico de Fibrose Pulmonar Idiopática (FPI).',
    commentary: 'A sarcoidose (A) tipicamente apresenta adenopatia hilar bilateral e infiltrado micronodular perilinfático bilateral. A asma grave (C) é uma doença obstrutiva reversível com sibilância e sem alterações intersticiais fibróticas na TC. A pneumonia bacteriana (D) é um processo infeccioso agudo que se apresenta com consolidações alveolares segmentares ou lobares com broncogramas aéreos.',
    reference: 'Diretrizes de Doenças Pulmonares Intersticiais da SBPT (Sociedade Brasileira de Pneumologia e Tisiologia) / Harrison',
    tags: ['clínica médica', 'pneumologia', 'fibrose pulmonar', 'doença intersticial']
  },
  {
    id: 'enamed-2025-70',
    module: 'ENAMED',
    text: 'Paciente de 58 anos, hipertenso e tabagista, comparece ao pronto-socorro com dor torácica intensa iniciada há uma hora. O eletrocardiograma demonstra supradesnivelamento do segmento ST em parede anterior. O hospital possui serviço de hemodinâmica disponível imediatamente.\n\nQual é a melhor estratégia de reperfusão?',
    options: [
      '(A) Trombólise intravenosa.',
      '(B) Angioplastia coronária primária.',
      '(C) Apenas tratamento clínico.',
      '(D) Cirurgia de revascularização miocárdica de urgência.'
    ],
    correctAnswer: 1, // B
    explanation: 'No infarto agudo do miocárdio com supradesnivelamento do segmento ST (IAMCSST), o tempo é músculo, e a reperfusão coronária de emergência deve ser instituída o mais rápido possível. Quando o hospital possui serviço de hemodinâmica disponível imediatamente e o procedimento pode ser realizado em tempo oportuno (meta de tempo porta-balão de até 90 minutos), a angioplastia coronária primária (ICP primária) é a estratégia de escolha por demonstrar maior taxa de patência arterial, menor taxa de reoclusão/reinfarto e menor incidência de complicações hemorrágicas, como AVC, em comparação aos fibrinolíticos.',
    commentary: 'A trombólise intravenosa (A) é a estratégia de escolha quando a ICP primária não puder ser realizada em até 120 minutos do diagnóstico ou se o hospital não tiver hemodinâmica disponível. A revascularização cirúrgica de urgência (D) é reservada para anatomias desfavoráveis de tronco com choque cardiogênico ou complicações mecânicas agudas pós-infarto.',
    reference: 'Diretrizes da Sociedade Brasileira de Cardiologia (SBC) sobre Tratamento do IAMCSST',
    tags: ['clínica médica', 'cardiologia', 'infarto', 'síndrome coronariana aguda', 'angioplastia']
  },
  {
    id: 'enamed-2025-71',
    module: 'ENAMED',
    text: 'Homem de 28 anos, solteiro e residindo com os pais, comparece ao Centro de Atenção Psicossocial (CAPS), com visível constrangimento ao longo da consulta. Apesar de sua resistência inicial, relata que tem pensamentos recorrentes e indesejados, os quais invadem sua cabeça, tendo como temática a sua mãe sendo vítima de grande violência. Enfatiza sua angústia com esses pensamentos, que já duram mais de 6 meses, provocando significativo prejuízo em sua vida pessoal e profissional. Afirma ter o entendimento de que não há fundamento nessas ideias e que não faz sentido sofrer com isso.\n\nA denominação para a descrição clínica apresentada é',
    options: [
      '(A) delírio.',
      '(B) obsessão.',
      '(C) hipertimia.',
      '(D) compulsão.'
    ],
    correctAnswer: 1, // B
    explanation: 'O paciente apresenta obsessões, definidas como pensamentos, imagens ou impulsos recorrentes, persistentes e intrusivos, vivenciados como indesejados e causadores de sofrimento acentuado. Um ponto crucial é a preservação da autocrítica, ou seja, o indivíduo reconhece a irracionalidade ou o exagero dessas ideias (são egodistônicas), o que diferencia a obsessão de um delírio.',
    commentary: 'O delírio (A) caracteriza-se por crenças rígidas, inabaláveis e falsas, com perda completa de julgamento e autocrítica. A compulsão (D) é o ato físico ou mental repetitivo (ritual) executado em resposta à obsessão para aliviar a ansiedade. A hipertimia (C) é a elevação persistente do humor e da energia.',
    reference: 'Manual Diagnóstico e Estatístico de Transtornos Mentais (DSM-5-TR) / Dalgalarrondo',
    tags: ['psiquiatria', 'saúde mental', 'TOC', 'psicopatologia', 'obsessão']
  },
  {
    id: 'enamed-2025-72',
    module: 'ENAMED',
    text: 'Homem de 35 anos, índice de massa corporal de 15 kg/m², é internado devido à diarreia líquida, com produtos patológicos, acompanhada de flatulência e desconforto abdominal há 4 semanas. Apresentou emagrecimento de cerca de 10 kg em 1 mês. Foram solicitados exames com endoscopia digestiva alta e baixa, sem alterações macroscópicas. Estudos histopatológicos de estômago, intestino delgado e cólon normais. Teste respiratório com lactulose positivo.\n\nO plano terapêutico adequado para esse paciente será',
    options: [
      '(A) neomicina e rifaximina.',
      '(B) loperamida e escopolamina.',
      '(C) dieta sem glúten e sem lactose.',
      '(D) probióticos e inibidores da bomba de prótons.'
    ],
    correctAnswer: 0, // A
    explanation: 'O quadro de diarreia crônica, flatulência, desnutrição grave (IMC 15 kg/m² com perda ponderal rápida) e exames endoscópicos e histopatológicos normais, associado ao teste respiratório com lactulose positivo, é clássico para Supercrescimento Bacteriano do Intestino Delgado (SIBO). O tratamento padrão de primeira linha é a descontaminação bacteriana com antibióticos de ação preferencialmente intraluminal, sendo a rifaximina e/ou a neomicina as escolhas mais recomendadas.',
    commentary: 'Loperamida e escopolamina (B) apenas tratam sintomas secundários e não resolvem a etiologia bacteriana da SIBO. A restrição de glúten (C) destina-se à doença celíaca, descartada pela histopatologia normal do duodeno. Inibidores da bomba de prótons (D) diminuem a acidez gástrica, o que é um fator de risco clássico para o surgimento de SIBO.',
    reference: 'Tratado de Gastroenterologia / Federação Brasileira de Gastroenterologia (FBG) / Sleisenger and Fordtran',
    tags: ['gastroenterologia', 'SIBO', 'diarreia crônica', 'má absorção']
  },
  {
    id: 'enamed-2025-73',
    module: 'ENAMED',
    text: 'Criança de 2 anos encaminhada ao matriciamento de pediatria, com história de ter apresentado há 7 dias uma crise tônico-clônica generalizada em vigência de temperatura axilar de 39,3 °C, duração de 2 minutos, sem recorrência em 24 horas. Naquela ocasião foi realizado exame físico e neurológico, compatível com infecção viral de vias aéreas superiores, sem outras alterações.\n\nA conduta adequada nesse caso é',
    options: [
      '(A) solicitar eletroencefalograma.',
      '(B) indicar profilaxia com barbitúricos.',
      '(C) tranquilizar e orientar puericultura de rotina.',
      '(D) solicitar exames laboratoriais e de imagem.'
    ],
    correctAnswer: 2, // C
    explanation: 'A criança apresentou uma crise febril simples (típica), caracterizada por: idade entre 6 meses e 5 anos, crise tônico-clônica generalizada, curta duração (inferior a 15 minutos, neste caso 2 minutos), sem reincidência nas primeiras 24 horas e com rápido retorno ao estado neurológico basal. Nesse cenário, o prognóstico é benigno e não há indicação de investigação complementar (EEG, exames laboratoriais ou neuroimagem) ou de tratamento anticonvulsivante profilático crônico. A conduta adequada é a orientação cuidadosa da família sobre a natureza benigna e autolimitada da crise febril simples, mantendo o acompanhamento de puericultura habitual.',
    commentary: 'Não há qualquer benefício na realização de EEG (A) ou exames de imagem (D) para crises febris simples, que não elevam o risco de epilepsia futura de forma substancial. Profilaxia com anticonvulsivantes (B) não é recomendada devido aos expressivos efeitos colaterais cognitivos e comportamentais.',
    reference: 'Diretrizes de Crise Febril da Sociedade Brasileira de Pediatria (SBP) / Academia Americana de Pediatria (AAP)',
    tags: ['pediatria', 'neurologia infantil', 'crise febril', 'puericultura']
  },
  {
    id: 'enamed-2025-74',
    module: 'ENAMED',
    text: 'Paciente de 47 anos, sexo feminino, atendida no ambulatório de cirurgia geral. A paciente havia sido submetida à tireoidectomia total há 60 dias devido a carcinoma folicular de tireoide, restrito à glândula. No pós-operatório imediato apresentou rouquidão, que persistiu durante todo o acompanhamento ambulatorial.\n\nCom base no quadro clínico apresentado, qual foi o nervo lesionado durante a cirurgia?',
    options: [
      '(A) Laríngeo recorrente.',
      '(B) Glossofaríngeo.',
      '(C) Hipoglosso.',
      '(D) Vago.'
    ],
    correctAnswer: 0, // A
    explanation: 'A paralisia de prega vocal por lesão unilateral do nervo laríngeo recorrente (ramo do nervo vago) é uma das complicações mais descritas em tireoidectomias, manifestando-se por rouquidão persistente e voz soprosa ou fraca, consequente à incapacidade de adução simétrica das cordas vocais.',
    commentary: 'O nervo glossofaríngeo (B) inerva a musculatura estilofaríngea e a sensibilidade do terço posterior da língua. O hipoglosso (C) confere motricidade aos músculos da língua. A lesão do nervo vago principal (D) causaria déficits bem mais amplos que apenas a rouquidão isolada e específica por disfunção cordal.',
    reference: 'Sabiston Tratado de Cirurgia / Tratado de Otorrinolaringologia e Cirurgia de Cabeça e Pescoço',
    tags: ['cirurgia', 'cabeça e pescoço', 'tireoidectomia', 'complicações cirúrgicas', 'anatomia']
  },
  {
    id: 'enamed-2025-75',
    module: 'ENAMED',
    text: 'Paciente de 29 anos, nuligesta, ciclos menstruais com intervalos de 20 a 65 dias, duração de 4 a 10 dias e intensidade moderada. Apresenta índice de massa corporal de 41,5 kg/m² e será submetida à cirurgia bariátrica em alguns meses. Necessita de orientação para contracepção.\n\nCom base nessas informações, assinale a alternativa correta.',
    options: [
      '(A) Para contracepção efetiva e proteção endometrial, está indicado o endoceptivo antes da operação.',
      '(B) Devido ao risco de apresentar tromboembolismo, está contraindicado o uso de métodos hormonais.',
      '(C) Apresenta quadro de anovulação crônica, portanto deve ser orientada a usar preservativo masculino.',
      '(D) Está contraindicada gravidez na fase de perda de peso, logo ela pode usar o adesivo anticoncepcional.'
    ],
    correctAnswer: 0, // A
    explanation: 'A paciente apresenta obesidade de terceiro grau (grau III) e ciclos menstruais irregulares sugestivos de anovulação crônica (provável Síndrome dos Ovários Policísticos). Ela será submetida a cirurgia bariátrica, situação na qual a gestação é formalmente contraindicada na fase de rápida perda ponderal (primeiros 12 a 18 meses) devido aos elevados riscos de restrição de crescimento fetal e carências nutricionais. O DIU liberador de levonorgestrel (SIRE ou endoceptivo) é a escolha ideal: oferece altíssima eficácia contraceptiva sem depender da absorção gastrointestinal (que fica prejudicada após a cirurgia de bypass gástrico/disabsortiva) e atua na proteção endometrial contra a hiperplasia decorrente da anovulação crônica.',
    commentary: 'Os métodos hormonais combinados que contêm estrogênio, como o adesivo (D), são contraindicados (OMS Categoria 3/4) em mulheres com IMC > 35 kg/m² pelo elevado risco de tromboembolismo (B não proíbe métodos de progesterona isolada ou DIU de cobre, apenas estrogênios). O preservativo (C) apresenta taxas de falha típicas muito altas para uma fase de contraindicação formal e crítica de gravidez.',
    reference: 'Critérios Médicos de Elegibilidade para Uso de Contraceptivos da OMS / FEBRASGO',
    tags: ['ginecologia', 'obstetrícia', 'contracepção', 'cirurgia bariátrica', 'obesidade', 'DIU']
  },
  {
    id: 'enamed-2025-76',
    module: 'ENAMED',
    text: 'Mulher de 28 anos, estudante universitária, comparece à Unidade Básica de Saúde (UBS) para consulta agendada. Refere ter realizado seus últimos exames de rotina há cerca de 3 anos, com resultados normais. Faz uso regular de anticoncepcional oral combinado há 2 anos, não faz uso de preservativo. Relata que seu namorado apresentou uma úlcera no pênis há cerca de 30 dias, tratada com uma injeção de benzetacil. Ele realizou teste rápido para HIV com resultado reagente. A última relação sexual ocorreu há 2 dias. O exame físico é normal.\n\nO manejo inicial para essa paciente é\n\n*(Questão anulada oficialmente pelo ENAMED)*',
    options: [
      '(A) solicitar teste rápido para sífilis, HIV e hepatites B e C. Em caso de teste reagente para sífilis, prescrever penicilina G benzatina. Prescrever 1 comprimido de tenofovir/lamivudina (TDF/3TC) 300 mg/300 mg + 1 comprimido de dolutegravir (DTG) 50 mg ao dia, durante 28 dias.',
      '(B) solicitar sumário de urina e anti-HIV. Prescrever azitromicina 1 g VO dose única e, caso haja piúria e nitrito positivo, fosfomicina trometamol. Solicitar que o namorado retorne para confirmação do teste.',
      '(C) solicitar VDRL e anti-HIV. Realizar abordagem sindrômica e prescrever doxiciclina por 21 dias, juntamente com TDF/FTC por 3 meses.',
      '(D) solicitar urocultura, colpocitologia oncótica e anti-HIV. Em caso de presença de Escherichia coli e Trichomonas vaginalis, prescrever ciprofloxacino e metronidazol vaginal.'
    ],
    correctAnswer: 0, // A
    annulled: true,
    explanation: 'A banca anulou esta questão. Do ponto de vista técnico, a paciente apresenta exposição sexual de alto risco ocorrida há menos de 72 horas, com parceiro sabidamente HIV reagente, situação que indica profilaxia pós-exposição (PEP), além de investigação para outras infecções sexualmente transmissíveis (como sífilis, hepatites, etc.). Entretanto, havia inconsistências e imprecisões técnicas nas alternativas, principalmente com relação ao esquema terapêutico descrito e à abordagem inicial das ISTs, o que motivou a anulação oficial pela banca examinadora.',
    commentary: 'A alternativa A seria a mais próxima da conduta adequada ao contemplar a PEP (com TDF/3TC + DTG por 28 dias) e a triagem de ISTs, mas a formulação das diretrizes e o fluxo de manejo possuíam lacunas conceituais e inconsistências formais que justificaram a anulação.',
    reference: 'Protocolo Clínico e Diretrizes Terapêuticas (PCDT) para PEP - Ministério da Saúde',
    tags: ['ginecologia', 'infectologia', 'PEP', 'HIV', 'sífilis', 'questão anulada']
  },
  {
    id: 'enamed-2025-77',
    module: 'ENAMED',
    text: 'Uma equipe de Saúde da Família realiza atendimento itinerante a comunidades ribeirinhas e aldeias indígenas na Região Amazônica. Em visita, uma médica recém-chegada observa que uma mulher ribeirinha evita contato visual durante a consulta e responde às perguntas apenas com monossílabos. Em outra situação, um indígena da etnia Tikuna não aceita ser atendido sozinho e insiste na presença de um pajé da comunidade.\n\nA abordagem adequada que a equipe deve adotar é',
    options: [
      '(A) investir na padronização de rotinas clínicas e na capacitação da equipe para comunicação técnica, propositiva e objetiva.',
      '(B) promover espaços formativos para a equipe assistencial, reconhecendo saberes e práticas das populações atendidas.',
      '(C) reforçar a autonomia profissional da médica, mantendo as condutas clínicas baseadas exclusivamente em evidências científicas.',
      '(D) estabelecer rotinas padronizadas uniformes de atendimento para ribeirinhos e indígenas.'
    ],
    correctAnswer: 1, // B
    explanation: 'A Política Nacional de Atenção à Saúde dos Povos Indígenas e os princípios que regem a Atenção Primária à Saúde valorizam a competência cultural e a abordagem intercultural. A equipe assistencial deve reconhecer e respeitar as particularidades socioculturais, ritos, crenças e o tempo de comunicação das populações tradicionais e indígenas, estimulando espaços formativos e a integração de saberes tradicionais (como a presença do pajé Tikuna) com a medicina baseada em evidências, estabelecendo vínculos terapêuticos sólidos.',
    commentary: 'As alternativas A, C e D desconsideram a pluralidade cultural e tentam forçar uma padronização biomédica e inflexível das condutas, o que viola o princípio da equidade e afasta as comunidades ribeirinhas e indígenas dos serviços oficiais de saúde.',
    reference: 'Política Nacional de Atenção à Saúde dos Povos Indígenas (PNASPI) / Diretrizes de Competência Cultural no SUS',
    tags: ['saúde coletiva', 'medicina de família', 'saúde indígena', 'interculturalidade', 'ética médica']
  },
  {
    id: 'enamed-2025-78',
    module: 'ENAMED',
    text: 'Paciente de 21 anos comparece à Unidade Básica de Saúde (UBS). Durante o atendimento, informa reconhecer-se como homem trans e estar em processo de afirmação de gênero. Relata participar de grupos de apoio, utilizar binder (faixa compressiva torácica) e cogitar terapia hormonal futuramente. Nega sofrimento psíquico intenso e não apresenta sintomas depressivos, ansiosos ou psicóticos.\n\nQual é a conduta mais adequada?',
    options: [
      '(A) Solicitar avaliação psiquiátrica para diagnóstico de disforia de gênero antes do acompanhamento na UBS.',
      '(B) Iniciar terapia hormonal imediatamente na UBS.',
      '(C) Encaminhar para serviço especializado e informar que todo o acompanhamento deverá ocorrer exclusivamente com especialista.',
      '(D) Esclarecer que identidade de gênero não é transtorno mental, oferecer acompanhamento contínuo na UBS e orientar sobre cuidados gerais de saúde.'
    ],
    correctAnswer: 3, // D
    explanation: 'A identidade trans não é e não deve ser encarada ou classificada como um transtorno mental. O papel da Atenção Primária à Saúde (APS/UBS) é prover um acolhimento digno, livre de discriminação e pautado na despatologização da transexualidade, mantendo o acompanhamento longitudinal preventivo integral do paciente e prestando orientações gerais (como o uso seguro do binder).',
    commentary: 'Encaminhar para avaliação psiquiátrica buscando um diagnóstico de "doença" (A) reforça o estigma patologizante. Iniciar hormonioterapia imediatamente (B) sem exames prévios, consentimento informado e avaliação de critérios ou contrarreferência médica é precipitado. Abandonar o cuidado na UBS encaminhando exclusivamente ao especialista (C) contraria o princípio da coordenação do cuidado e integralidade na Atenção Primária.',
    reference: 'Política Nacional de Saúde Integral de Lésbicas, Gays, Bissexuais, Travestis e Transexuais - Ministério da Saúde / Resolução CFM nº 2.265/2019',
    tags: ['saúde coletiva', 'medicina de família', 'saúde LGBT', 'transexualidade', 'acolhimento']
  },
  {
    id: 'enamed-2025-79',
    module: 'ENAMED',
    text: 'Mulher de 62 anos, com histórico de infecções urinárias de repetição, procura a Unidade de Pronto Atendimento (UPA) apresentando febre alta e calafrios. É portadora de diabetes mellitus tipo 2. Ao exame: pressão arterial de 110 × 70 mmHg, frequência cardíaca de 106 bpm, frequência respiratória de 25 irpm e temperatura de 38 °C. Exames laboratoriais mostram leucocitose de 14.000/mm³, neutrofilia e desvio à esquerda.\n\nA conduta para esse caso deve recomendar',
    options: [
      '(A) antitérmico, hidratação oral vigorosa e observação.',
      '(B) tratamento com esquema antibiótico de amplo espectro ainda na primeira hora da chegada da paciente.',
      '(C) cobertura antifúngica para Candida por ser diabética com ITU de repetição.',
      '(D) manter antibiótico de amplo espectro durante todo o tratamento, independentemente do resultado das culturas.'
    ],
    correctAnswer: 1, // B
    explanation: 'A paciente apresenta manifestações clínicas e laboratoriais de resposta inflamatória sistêmica severa (taquicardia, taquipneia, febre, leucocitose marcante com desvio à esquerda) secundária a um provável foco infeccioso urinário (ITU de repetição prévia), configurando um quadro grave de sepse de foco urinário (urosepse). Segundo as diretrizes internacionais e nacionais da Surviving Sepsis Campaign (SSC), a administração rápida de antimicrobianos empíricos de amplo espectro na primeira hora da identificação da sepse ou choque séptico é o fator determinante mais crítico para reduzir a mortalidade.',
    commentary: 'A conduta expectante com hidratação oral (A) é perigosa e insuficiente para sepse. Cobertura empírica para Candida (C) não é indicada de rotina na admissão sem evidência de fungemia. Manter o amplo espectro cegamente (D) sem descalonamento após as culturas contraria o uso racional de antibióticos e estimula a multirresistência bacteriana.',
    reference: 'Diretrizes da Surviving Sepsis Campaign (SSC) / Protocolo de Sepse do Instituto Latino-Americano de Sepse (ILAS)',
    tags: ['clínica médica', 'infectologia', 'sepse', 'uropatologia', 'antibioticoterapia']
  },
  {
    id: 'enamed-2025-80',
    module: 'ENAMED',
    text: 'Recém-nascido a termo apresenta, no primeiro minuto de vida, quadro de apneia e bradicardia, desvio do ictus para a direita, abdome escavado e presença de ruídos hidroaéreos à ausculta do hemitórax esquerdo.\n\nNo decorrer do atendimento desse recém-nascido, em sala de parto, os procedimentos adequados a serem realizados são',
    options: [
      '(A) intubação traqueal e massagem cardíaca externa.',
      '(B) cateterismo umbilical e drenagem de hemitórax esquerdo.',
      '(C) ventilação com óxido nítrico e administração de surfactante.',
      '(D) ventilação com balão autoinflável com pressão expiratória final positiva.'
    ],
    correctAnswer: 0, // A
    explanation: 'A tríade clássica de insuficiência respiratória imediata ao nascimento com cianose/apneia/bradicardia, abdome escavado (pela passagem do conteúdo abdominal para o tórax) e ausculta de ruídos hidroaéreos em hemitórax esquerdo (com consequente desvio ipsilateral do mediastino e ictus para a direita) é patognomônica de Hérnia Diafragmática Congênita (geralmente de Bochdalek, à esquerda). Em sala de parto, a ventilação com pressão positiva por máscara (balão e máscara - opção D) é formalmente contraindicada pois insuflaria ar nas alças intestinais intratorácicas, colapsando ainda mais o pulmão contralateral e agravando gravemente a hipóxia. Portanto, deve-se realizar intubação orotraqueal imediata e, se a frequência cardíaca permanecer abaixo de 60 bpm apesar de ventilação efetiva com oxigênio, deve-se iniciar a massagem cardíaca externa, conforme as diretrizes do Programa de Reanimação Neonatal.',
    commentary: 'A drenagem de tórax (B) é inútil ou letal, pois não se trata de pneumotórax, mas sim de alças intestinais no tórax. Surfactante e óxido nítrico (C) podem ser usados posteriormente na UTI, mas não resolvem o manejo imediato de sala de parto de via aérea definitiva.',
    reference: 'Programa de Reanimação Neonatal da Sociedade Brasileira de Pediatria (PRN-SBP) / Nelson Tratado de Pediatria',
    tags: ['pediatria', 'neonatologia', 'sala de parto', 'hérnia diafragmática', 'reanimação neonatal']
  },
  {
    id: 'enamed-2025-81',
    module: 'ENAMED',
    text: 'Adulto jovem, sexo masculino, atendido em Unidade Básica de Saúde (UBS), relata dor e ardor no ânus acompanhados de sangramento vivo em pequena quantidade ao evacuar com esforço e fezes endurecidas. Nega tumoração perianal. Portador de constipação crônica e diagnóstico recente de doença de Crohn. Exame geral sem alterações.\n\nQual é o diagnóstico mais provável?',
    options: [
      '(A) Abscesso perianal.',
      '(B) Fístula perianal.',
      '(C) Cisto pilonidal.',
      '(D) Fissura anal.'
    ],
    correctAnswer: 3, // D
    explanation: 'O quadro é característico de fissura anal, definida como uma ruptura linear do revestimento do canal anal. Suas manifestações mais típicas são dor ou ardor intenso durante e após a evacuação, associado a pequena quantidade de sangue vermelho vivo, geralmente percebido nas fezes ou no papel higiênico. A constipação, o esforço evacuatório e a passagem de fezes endurecidas são fatores desencadeantes clássicos. A doença de Crohn também aumenta o risco de fissuras anais, que nesses pacientes podem apresentar localizações atípicas ou múltiplas lesões.',
    commentary: 'O abscesso perianal (A) costuma causar dor contínua, edema, calor e possível febre. A fístula (B) geralmente se manifesta por drenagem recorrente de secreção por um orifício próximo ao ânus. O cisto pilonidal (C) ocorre predominantemente na região sacrococcígea, e não no canal anal.',
    reference: 'Tratado de Coloproctologia / Sabiston Tratado de Cirurgia',
    tags: ['proctologia', 'cirurgia', 'fissura anal', 'doença de Crohn', 'constipação']
  },
  {
    id: 'enamed-2025-82',
    module: 'ENAMED',
    text: 'Paciente G3P1A1, idade gestacional de 24 semanas, comparece à consulta. Refere que, na primeira gestação, teve um abortamento com 16 semanas e, na segunda, teve trabalho de parto vaginal muito rápido, na idade gestacional de 28 semanas. Na ultrassonografia transvaginal, realizada com 23 semanas desta gestação, detectou-se colo uterino com 1,5 cm de comprimento.\n\nQual é a conduta adequada à situação?',
    options: [
      '(A) Solicitar a pesquisa de estreptococo do grupo B na 28ª semana.',
      '(B) Internar a paciente para receber atosiban intravenoso até 34 semanas.',
      '(C) Prescrever nifedipina 20 mg via oral diariamente à noite até 39 semanas.',
      '(D) Prescrever progesterona micronizada via vaginal, 200 mg ao dia, até 36 semanas.'
    ],
    correctAnswer: 3, // D
    explanation: 'A paciente apresenta antecedentes obstétricos de perda gestacional tardia e parto prematuro, além de colo uterino curto, medindo 15 mm. Um colo inferior a 25 mm antes de 24 semanas está associado a maior risco de parto prematuro espontâneo. A progesterona vaginal reduz a contratilidade uterina e modula processos inflamatórios relacionados ao amadurecimento cervical, sendo indicada em gestantes assintomáticas com colo curto. Entre as alternativas, a progesterona micronizada vaginal é a medida apropriada.',
    commentary: 'Atosiban (B) e nifedipina (C) são tocolíticos usados diante de trabalho de parto prematuro com contrações e modificação cervical, situação não descrita. A pesquisa de estreptococo do grupo B (A) não trata nem reduz o risco relacionado ao colo curto. Cabe observar que, diante de história altamente sugestiva de insuficiência cervical, a possibilidade de cerclagem também poderia ser discutida dependendo da avaliação obstétrica completa.',
    reference: 'Diretrizes de Parto Prematuro da FEBRASGO / Protocolo de Obstetrícia de Alto Risco',
    tags: ['ginecologia', 'obstetrícia', 'parto prematuro', 'progesterona', 'colo curto']
  },
  {
    id: 'enamed-2025-83',
    module: 'ENAMED',
    text: 'Mulher de 32 anos, sexualmente ativa, comparece à consulta com o médico de família e comunidade para realização do seu primeiro exame preventivo. O médico realiza a coleta de citologia oncótica. Após 3 semanas, a paciente retorna com o resultado “presença de lesão intraepitelial de baixo grau”.\n\nConsiderando esse resultado, qual é a conduta adequada do médico?',
    options: [
      '(A) Solicitar ultrassonografia transvaginal.',
      '(B) Repetir o exame citopatológico em 6 meses.',
      '(C) Encaminhar para realização de colposcopia.',
      '(D) Repetir o exame citopatológico imediatamente.'
    ],
    correctAnswer: 1, // B
    explanation: 'O resultado corresponde a lesão intraepitelial escamosa de baixo grau, LSIL, geralmente associada a infecção transitória pelo HPV. Em mulheres com 25 anos ou mais, o protocolo brasileiro tradicional (Diretrizes do INCA) recomenda repetir a citologia em 6 meses, porque grande parte dessas alterações regride espontaneamente.',
    commentary: 'Se o resultado persistir ou evoluir para alteração mais significativa, a paciente deverá ser encaminhada para colposcopia (C). Não há indicação de ultrassonografia transvaginal (A), pois esse exame não avalia adequadamente lesões do epitélio cervical. Também não é necessário repetir a citologia imediatamente (D).',
    reference: 'Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero - INCA / Ministério da Saúde',
    tags: ['ginecologia', 'preventivo', 'citopatologia', 'LSIL', 'HPV', 'INCA']
  },
  {
    id: 'enamed-2025-84',
    module: 'ENAMED',
    text: 'A agente comunitária de saúde de uma Unidade Básica de Saúde (UBS) relata, durante a reunião de equipe, preocupação com os idosos de uma instituição de longa permanência para idosos no território da UBS. Em sua última visita, observou que havia 38 idosos vivendo em isolamento excessivo, a maioria sem vínculos familiares ativos e sofrendo constantes agressões dos funcionários. Havia sinais de contenção física em idosos com demência avançada e presença de lesões por pressão.\n\nQual é a conduta mais adequada da equipe de saúde?',
    options: [
      '(A) Formalizar denúncia ao Conselho Municipal do Idoso, considerando que contenção e lesões por pressão podem ocorrer em ambientes de institucionalização e não requerem intervenção clínica imediata.',
      '(B) Oferecer apoio clínico apenas para os casos de maior vulnerabilidade, sugerindo adequações na rotina assistencial e respeitando a autonomia da instituição.',
      '(C) Articular ação intersetorial com órgãos de controle social, registrar notificação compulsória de violência institucional e elaborar plano de ação conjunto com a equipe da instituição.',
      '(D) Agendar reuniões quinzenais para educação permanente sobre cuidados paliativos, sem envolver outras instâncias legais ou sociais.'
    ],
    correctAnswer: 2, // C
    explanation: 'O caso apresenta indícios claros de violência institucional contra pessoas idosas, incluindo agressões, isolamento excessivo, contenções físicas possivelmente inadequadas e falhas assistenciais representadas pelas lesões por pressão. A suspeita ou confirmação de violência contra a pessoa idosa deve ser registrada nos sistemas de notificação compulsória e comunicada aos órgãos responsáveis pela proteção e fiscalização (vigilância, assistência social, Conselho do Idoso, Ministério Público, etc.), além de requerer uma atuação clínica imediata da equipe da UBS para interromper as violações de direitos e reabilitar as lesões por pressão.',
    commentary: 'Apenas formalizar denúncia sem intervenção clínica ou achar que lesões por pressão são normais em ILPIs (A) é incorreto. Oferecer apoio parcial respeitando uma suposta autonomia de uma instituição negligente (B) ou agendar reuniões educativas paliativas isoladas sem envolver instâncias de proteção (D) falha na responsabilidade ética e legal de notificação de violência e proteção ativa do idoso.',
    reference: 'Estatuto do Idoso / Cadernos de Atenção Básica - Violência e Maus-Tratados contra Idosos',
    tags: ['geriatria', 'saúde coletiva', 'violência institucional', 'notificação compulsória', 'ética médica', 'ILPI']
  },
  {
    id: 'enamed-2025-85',
    module: 'ENAMED',
    text: 'Mulher de 42 anos é levada pelo irmão à Unidade de Pronto Atendimento (UPA) com fala alterada, lentificação, tontura e sonolência após relatar ingestão intencional de grande quantidade de clonazepam pouco tempo antes. A paciente evolui com hipotensão, rebaixamento do nível de consciência, coma e necessidade de ventilação mecânica.\n\nQual medicação é indicada nessa situação?',
    options: [
      '(A) N-acetilcisteína.',
      '(B) Flumazenil.',
      '(C) Naloxona.',
      '(D) Atropina.'
    ],
    correctAnswer: 1, // B
    explanation: 'O clonazepam pertence à classe dos benzodiazepínicos. O flumazenil é um antagonista competitivo específico dos receptores benzodiazepínicos e pode ser utilizado para reverter a sedação e depressão do sistema nervoso central induzidas por essas substâncias em casos de intoxicação aguda grave (como coma e depressão respiratória).',
    commentary: 'A N-acetilcisteína (A) é o antídoto específico para a intoxicação por paracetamol. A naloxona (C) reverte os efeitos de opioides. A atropina (D) é indicada no tratamento de intoxicações por organofosforados/carbamatos (síndrome colinérgica). Nota clínica: na prática real, o flumazenil deve ser usado com extrema cautela devido ao risco de desencadear convulsões refratárias em usuários crônicos de benzodiazepínicos ou em co-ingestão de agentes pró-convulsivantes.',
    reference: 'Medicina de Emergência / Toxicologia Clínica',
    tags: ['clínica médica', 'toxicologia', 'emergência', 'intoxicação', 'benzodiazepínicos', 'flumazenil']
  },
  {
    id: 'enamed-2025-86',
    module: 'ENAMED',
    text: 'Mulher de 55 anos, sem história de doenças crônicas, procura atendimento por queixa de cefaleia persistente em ambos os lados do crânio, associada a alterações de visão, como amaurose fugaz e diplopia, cansaço e artralgias. Relata dor em todo o couro cabeludo. Notou perda de peso de 2 kg em 2 meses. Nega fotofobia, fonofobia, febre, náuseas ou despertar noturno pela cefaleia. Ao exame, encontra-se afebril, com pupilas isocóricas e sem rigidez de nuca.\n\nQual é o tipo de cefaleia dessa paciente e qual exame seria útil na investigação preliminar, respectivamente?',
    options: [
      '(A) Cefaleia primária, cefaleia tensional; nenhum exame é necessário.',
      '(B) Cefaleia secundária, hemorragia subaracnoide; análise de líquor.',
      '(C) Cefaleia primária, migrânea; tomografia computadorizada de encéfalo.',
      '(D) Cefaleia secundária, arterite temporal; velocidade de hemossedimentação.'
    ],
    correctAnswer: 3, // D
    explanation: 'O quadro sugere arterite de células gigantes (arterite temporal), uma vasculite sistêmica que acomete artérias de médio e grande calibre, comum em indivíduos com mais de 50 anos. Apresenta-se tipicamente com cefaleia de início recente de caráter temporal ou difuso, claudicação de mandíbula, hipersensibilidade do couro cabeludo, sintomas constitucionais (como perda de peso, fadiga, artralgia) e manifestações visuais graves (diplopia, amaurose fugaz) por acometimento vascular ocular, podendo evoluir para perda visual definitiva irreversível. Os exames laboratoriais de fase aguda, como a velocidade de hemossedimentação (VHS) e proteína C reativa (PCR), encontram-se acentuadamente elevados e constituem a triagem inicial de escolha diagnóstica.',
    commentary: 'As cefaleias primárias (A e C) são descartadas pela presença de "sinais de alerta" (red flags): idade de início superior a 50 anos, perda de peso associada e queixas visuais de caráter isquêmico. A hemorragia subaracnoide (B) cursa com cefaleia em trovoada (thunderclap), de início súbito e intensidade máxima em segundos ou minutos, comumente acompanhada de rigidez de nuca.',
    reference: 'Harrison Princípios de Medicina Interna / Consenso de Cefaleias da Sociedade Brasileira de Cefaleia (SBCe)',
    tags: ['clínica médica', 'neurologia', 'cefaleia', 'arterite temporal', 'vasculite', 'sinais de alerta']
  },
  {
    id: 'enamed-2025-87',
    module: 'ENAMED',
    text: 'Adolescente de 13 anos, sexo masculino, procura atendimento na Unidade Básica de Saúde devido a manchas escurecidas nas dobras do pescoço, axilas e virilhas. Ao exame físico, o índice de massa corporal encontra-se no escore Z entre +2 e +3 para idade e sexo, a relação entre circunferência abdominal e estatura está aumentada e há manchas hipercrômicas no pescoço, nas axilas e na raiz das coxas, sem outros achados significativos.\n\nAlém de prescrever mudanças dos hábitos alimentares e aumento da atividade física, deve-se',
    options: [
      '(A) solicitar biópsia das lesões e hemoglobina glicada.',
      '(B) solicitar perfil lipídico e ultrassonografia de abdome.',
      '(C) indicar corticoide tópico nas lesões e evitar exposição solar.',
      '(D) indicar antifúngico nas lesões e solicitar teste oral de tolerância à glicose.'
    ],
    correctAnswer: 1, // B
    explanation: 'O adolescente apresenta acantose nigricans (lesões aveludadas hipercrômicas em áreas flexurais), que é um marcador dermatológico clássico de resistência à insulina de alta intensidade. Adicionalmente, possui obesidade (escore Z de IMC entre +2 e +3) e aumento de adiposidade visceral (relação cintura/estatura elevada), o que configura risco significativo para síndrome metabólica, dislipidemia e doença hepática gordurosa associada à disfunção metabólica (esteatose hepática). Assim, a investigação clínica de triagem inicial recomendada inclui o perfil lipídico e a ultrassonografia de abdome total.',
    commentary: 'A biópsia cutânea (A) é desnecessária, pois o diagnóstico de acantose nigricans é clínico. Corticoides tópicos (C) ou antifúngicos (D) não tratam a acantose nigricans, que melhora progressivamente com a perda de peso, reversão da resistência insulínica e controle do distúrbio metabólico de base.',
    reference: 'Tratado de Pediatria da Sociedade Brasileira de Pediatria (SBP)',
    tags: ['pediatria', 'endocrinologia', 'obesidade infantil', 'resistência à insulina', 'acantose nigricans']
  },
  {
    id: 'enamed-2025-88',
    module: 'ENAMED',
    text: 'Homem de 72 anos, encaminhado a ambulatório especializado, apresenta dor epigástrica com irradiação em faixa para a região dorsal há 3 meses e perda de 8 kg. Na última semana, evoluiu com prurido, icterícia, náuseas, colúria e acolia fecal. Refere carga tabágica de 30 maços/ano e consumo de bebidas alcoólicas há 35 anos. Há 15 anos trata dislipidemia, hipertensão arterial e diabetes mellitus. Apresenta índice de massa corporal de 30 kg/m².\n\nCom base na principal hipótese diagnóstica, quais exames iniciais devem ser solicitados?\n\n*(Questão anulada/excluída oficialmente pelo ENAMED)*',
    options: [
      '(A) Ultrassonografia de abdome, dosagem de aminotransferases, bilirrubinas e sorologias para hepatites.',
      '(B) Colangiopancreatografia endoscópica retrógrada e dosagem de aminotransferases e gama-GT.',
      '(C) Ressonância magnética de abdome e dosagem de amilase, lipase e cálcio.',
      '(D) Tomografia de abdome com contraste e dosagem de CA 19-9.'
    ],
    correctAnswer: 3, // D
    annulled: true,
    explanation: 'A banca examinadora excluiu esta questão do cálculo de pontos da prova por haver discussões e imprecisões metodológicas na formulação das alternativas. Do ponto de vista clínico, a principal suspeita diagnóstica diante de perda de peso marcante, dor epigástrica em faixa que irradia para o dorso e icterícia obstrutiva progressiva (colúria, acolia fecal, prurido) em paciente idoso, tabagista e diabético de longa data, é o adenocarcinoma de cabeça de pâncreas (tumor periampular). Para a investigação diagnóstica inicial dessa hipótese, a tomografia computadorizada multislice (TC) de abdome com contraste (protocolo pâncreas) é o exame de escolha para avaliar massa, invasão vascular, metástases e ressecabilidade, associada ao marcador tumoral CA 19-9 para monitorização.',
    commentary: 'Embora a alternativa D seja o par de exames mais adequado para o pâncreas, a questão foi anulada provavelmente porque o CA 19-9 não é um exame de triagem universal obrigatório inicial na primeira linha comparado à triagem inicial biliar por ultrassom e provas bioquímicas hepáticas gerais de padrão obstrutivo (presentes na A, que falha no diagnóstico definitivo).',
    reference: 'Sabiston Tratado de Cirurgia / Diretrizes de Câncer de Pâncreas do Ministério da Saúde',
    tags: ['cirurgia', 'gastroenterologia', 'oncologia', 'câncer de pâncreas', 'icterícia obstrutiva', 'questão anulada']
  },
  {
    id: 'enamed-2025-89',
    module: 'ENAMED',
    text: 'Gestante de 28 anos, com idade gestacional desconhecida e em situação de vulnerabilidade social, chega trazida pelo Serviço Móvel de Atendimento de Urgência com sangramento vaginal intenso, hipertonia uterina, pressão arterial de 130 × 90 mmHg, altura uterina de 32 cm e batimentos cardíacos fetais de 90 bpm. Ao toque vaginal, o colo está grosso, posterior e impérvio. A acompanhante refere que a paciente usou cocaína antes do ocorrido.\n\nO diagnóstico, a conduta adequada e a possível complicação são, respectivamente,',
    options: [
      '(A) Descolamento de placenta; cesárea; útero de Couvelaire.',
      '(B) Rotura de vasa prévia; amniotomia; anemia fetal.',
      '(C) Trabalho de parto; inibição; prematuridade.',
      '(D) Pré-eclâmpsia; cesárea; rotura uterina.'
    ],
    correctAnswer: 0, // A
    explanation: 'O quadro clínico com sangramento vaginal, hipertonia uterina marcante, dor abdominal e bradicardia fetal severa (FCF 90 bpm) em paciente que consumiu cocaína (potente vasoconstritor adrenérgico) é o cenário clássico de Descolamento Prematuro de Placenta (DPP). Devido à presença de sofrimento fetal agudo grave e colo uterino desfavorável para o parto por via vaginal (colo grosso, posterior e impérvio), a via de parto indicada de emergência é a cesariana. Uma das complicações obstétricas mais graves do DPP é o útero de Couvelaire (apoplexia uteroplacentária), que consiste na infiltração hemorrágica difusa do miométrio, comprometendo a sua contratilidade no pós-parto e induzindo atonia uterina grave com risco de histerectomia.',
    commentary: 'Rotura de vasa prévia (B) não cursa com hipertonia uterina dolorosa e ocorre após amniorrexe. Trabalho de parto simples (C) não justifica hipertonia persistente nem sofrimento fetal severo. Embora haja hipertensão gestacional associada, a fisiopatologia e sintomatologia são francas para o diagnóstico de DPP (D).',
    reference: 'Diretrizes de Assistência ao Parto e Sangramentos de Terceiro Trimestre da FEBRASGO',
    tags: ['ginecologia', 'obstetrícia', 'descolamento de placenta', 'DPP', 'cesárea', 'útero de Couvelaire']
  },
  {
    id: 'enamed-2025-90',
    module: 'ENAMED',
    text: 'Homem de 23 anos, previamente saudável, procura atendimento na Unidade Básica de Saúde relatando que, há cerca de 2 horas, foi mordido por um gato de rua ao tentar retirá-lo de uma árvore. A mordida provocou feridas cortocontusas nos dedos da mão esquerda. O animal não pertence à vizinhança e fugiu após o ocorrido. No ano anterior, houve confirmação de raiva em felinos na cidade.\n\nA conduta adequada no atendimento imediato é',
    options: [
      '(A) Higienizar e suturar as lacerações; aplicar soro antirrábico e penicilina benzatina.',
      '(B) Lavar com antissépticos, aguardar busca ativa do animal antes de iniciar profilaxia e aplicar reforço da vacina dT.',
      '(C) Lavar os ferimentos com água corrente abundante e sabão; administrar vacina antirrábica em quatro doses nos dias 0, 3, 7 e 14; aplicar imunoglobulina humana antirrábica.',
      '(D) Higienizar com antisséptico, administrar apenas a primeira dose da vacina e suspender as doses seguintes se ocorrer reação adversa; aplicar soro antirrábico.'
    ],
    correctAnswer: 2, // C
    explanation: 'A mordedura por felino em extremidades (mão, região altamente inervada) causada por um animal silvestre/de rua não observável ou desaparecido, em uma cidade com histórico recente de raiva animal ativa, constitui um acidente de altíssimo risco (exposição grave). A conduta de urgência preconizada pelo Ministério da Saúde consiste em: 1) Lavagem local exaustiva imediata com água corrente e sabão neutro para reduzir a carga viral; 2) Profilaxia antirrábica pós-exposição completa com 4 doses de vacina antirrábica aplicadas nos dias 0, 3, 7 e 14; 3) Indicação de imunoglobulina humana antirrábica (IGHAR) ou soro antirrábico infiltrado na maior quantidade possível nos bordos das lesões.',
    commentary: 'Sutura precoce de mordidas de gato (A) é contraindicada por aprisionar bactérias anaeróbias/Pasteurella na ferida profunda e oclusiva, exceto em locais estéticos sob cobertura. Não se deve retardar o início da profilaxia aguardando a captura do animal (B). O esquema de vacinação não deve ser interrompido ou sub-administrado em acidentes graves (D) sem indicação técnica expressa.',
    reference: 'Guia de Vigilância em Saúde - Profilaxia da Raiva Humana - Ministério da Saúde do Brasil',
    tags: ['clínica médica', 'infectologia', 'raiva humana', 'profilaxia pós-exposição', 'mordedura de animais']
  },
  {
    id: 'enamed-2025-91',
    module: 'ENAMED',
    text: 'Homem de 56 anos, em acompanhamento médico por angina instável de início recente, diabetes mellitus tipo 2, hipertensão arterial sistêmica e dislipidemia, é internado em unidade coronariana de hospital de atenção terciária com quadro de dor torácica em aperto, de forte intensidade, irradiada para o membro superior esquerdo e mandíbula, iniciada há cerca de 2 horas. O paciente relata ter sofrido 3 episódios de dor com características similares, mas de menor duração, nas últimas 24 horas. Ele vem em uso crônico de losartana, hidroclorotiazida, ácido acetilsalicílico, dapagliflozina, metformina e atorvastatina. Ao exame físico, ausculta-se quarta bulha, níveis pressóricos dentro da normalidade, sem congestão pulmonar. O eletrocardiograma mostra novo infradesnivelamento do segmento ST de 1 mm, com inversão da onda T em parede anterior. Evolui com elevação da troponina I, fazendo curva enzimática. O escore GRACE é de 152 pontos e o TIMI Risk Score é de 5 pontos.\n\nA conduta indicada nesse caso é realizar',
    options: [
      '(A) Angiotomografia coronária em até 48 horas.',
      '(B) Cateterismo cardíaco nas primeiras 24 horas.',
      '(C) Cateterismo cardíaco em até 3 dias do evento.',
      '(D) Ecocardiograma de estresse em até 7 dias do evento.'
    ],
    correctAnswer: 1, // B
    explanation: 'O paciente apresenta um infarto agudo do miocárdio sem supradesnivelamento do segmento ST (IAMSSST) de alto risco, evidenciado por marcadores de necrose miocárdica positivos (troponina elevada em curva), infradesnivelamento isquêmico agudo do segmento ST no eletrocardiograma e escores de prognóstico/risco elevados, como o GRACE > 140 (152 pontos) e TIMI Risk Score de 5. Para pacientes classificados como de alto risco, as diretrizes da Sociedade Brasileira de Cardiologia (SBC) e da European Society of Cardiology (ESC) recomendam a adoção de uma estratégia invasiva precoce, com a realização de cineangiocoronariografia (cateterismo cardíaco) nas primeiras 24 horas da admissão.',
    commentary: 'A angiotomografia de coronárias (A) e o ecocardiograma de estresse (D) são testes de imagem indicados para estratificação de pacientes de probabilidade pré-teste intermediária ou em cenários de dor torácica crônica estável, não sendo recomendados na fase aguda de infarto confirmado. O cateterismo em até 72 horas (C) é indicado para pacientes de risco intermediário (escore GRACE entre 109 e 140, ou sem critérios de alto risco).',
    reference: 'Diretrizes da Sociedade Brasileira de Cardiologia sobre Angina Instável e IAM sem Supra de ST',
    tags: ['clínica médica', 'cardiologia', 'síndrome coronariana aguda', 'cateterismo', 'IAM', 'escore GRACE']
  },
  {
    id: 'enamed-2025-92',
    module: 'ENAMED',
    text: 'Menina de 1 ano e 10 meses é levada ao serviço de urgência com quadro de tosse e dispneia há 4 dias. A mãe refere que aumentou a frequência do salbutamol, utilizado rotineiramente, porém sem melhora, havendo piora importante da dispneia nas últimas 6 horas. Relata frequentes exacerbações da asma nos últimos 3 meses, apesar da utilização de prednisolona. Ao exame físico, encontra-se sonolenta, taquidispneica, chorando entrecortadamente, saturação de 94% em ar ambiente e retração de musculatura acessória.\n\nAlém da internação da criança, a conduta adequada é prescrever',
    options: [
      '(A) Metilprednisolona endovenosa.',
      '(B) Ventilação não invasiva com sedação.',
      '(C) Salbutamol endovenoso em infusão contínua.',
      '(D) Sulfato de magnésio em infusão intravenosa contínua.'
    ],
    correctAnswer: 0, // A
    explanation: 'A paciente apresenta uma crise de exacerbação grave de asma, refratária ao tratamento inalatório domiciliar intensificado com salbutamol e com histórico recente de dependência ou uso frequente de corticosteroide sistêmico (prednisolona). Ao exame físico, a presença de sonolência e choro entrecortado com intensa tiragem/retração acessória são sinais clínicos de iminência de fadiga respiratória. Nesses casos de asma aguda grave que necessitam de internação hospitalar, a administração precoce de corticoterapia sistêmica intravenosa (como a metilprednisolona) é mandatória para reduzir o processo inflamatório das vias aéreas, melhorar a resposta aos beta-2-agonistas e diminuir o risco de intubação orotraqueal.',
    commentary: 'A ventilação não invasiva com sedação (B) apresenta alto risco de depressão respiratória e parada cardiorrespiratória em crianças com asma grave. O salbutamol endovenoso (C) é uma medida de exceção de terceira linha devido aos significativos efeitos colaterais cardiovasculares (taquiarritmias). O sulfato de magnésio (D) é administrado como dose única em infusão rápida (ao longo de 20 a 30 minutos) em exacerbações graves refratárias, e não como infusão intravenosa contínua.',
    reference: 'Global Initiative for Asthma (GINA) / Diretrizes da Sociedade Brasileira de Pediatria (SBP) para Manejo da Asma',
    tags: ['pediatria', 'pneumologia', 'asma infantil', 'crise de asma', 'metilprednisolona', 'emergência']
  },
  {
    id: 'enamed-2025-93',
    module: 'ENAMED',
    text: 'Paciente de 45 anos é atendida na Unidade Básica de Saúde com dor ocular após acidente doméstico com alvejante, que atingiu seu olho direito. Ao exame físico, observa-se hiperemia intensa, opacidade de córnea e queimadura química da pálpebra superior.\n\nQual é o manejo correto?',
    options: [
      '(A) Prescrever analgésico tópico e colírio lubrificante.',
      '(B) Lavar os olhos com solução de água boricada e realizar curativo oclusivo.',
      '(C) Lavagem ocular com solução fisiológica e avaliação imediata pelo especialista.',
      '(D) Prescrever colírio de corticoide tópico e encaminhar precocemente ao especialista.'
    ],
    correctAnswer: 2, // C
    explanation: 'Queimaduras químicas oculares (por ácidos ou bases, como o alvejante) constituem emergências oftalmológicas absolutas. A conduta imediata e mais crítica, que deve ser iniciada ainda no local do acidente ou na primeira unidade de saúde atendida, é a lavagem ocular abundante com solução salina (fisiológica) ou água corrente por no mínimo 15 a 30 minutos, visando remover resíduos do agente químico e restaurar o pH fisiológico da superfície ocular. Em seguida, após a lavagem exaustiva, o paciente deve ser encaminhado com extrema urgência para avaliação por um oftalmologista para avaliação de lesão límbica, isquemia e conduta definitiva.',
    commentary: 'Prescrever apenas analgésico e lubrificante (A) ou corticoides tópicos (D) sem lavagem imediata é incorreto e pode levar a sequelas cicatriciais graves e cegueira. A lavagem com água boricada (B) e a realização de curativo oclusivo imediato não são indicados, pois o curativo oclusivo em queimadura química aguda pode reter substâncias nocivas e piorar a isquemia da superfície ocular.',
    reference: 'Manual de Urgências em Oftalmologia / Conselho Brasileiro de Oftalmologia (CBO)',
    tags: ['oftalmologia', 'urgência e emergência', 'queimadura química', 'lavagem ocular', 'trauma ocular']
  },
  {
    id: 'enamed-2025-94',
    module: 'ENAMED',
    text: 'Mulher de 72 anos, previamente hígida, menopausa aos 53 anos, obesa, nulípara, nunca utilizou terapia hormonal, procura Unidade de Pronto Atendimento por sangramento vaginal iniciado há dois dias. Ao exame especular observa-se lesão polipoide exteriorizando-se pelo orifício cervical externo. Ultrassonografia transvaginal mostra três miomas, sendo um submucoso de 1,5 cm, além de espessamento endometrial de 8 mm.\n\nQual é a principal hipótese diagnóstica?',
    options: [
      '(A) Hiperplasia endometrial.',
      '(B) Câncer de colo do útero.',
      '(C) Leiomioma submucoso.',
      '(D) Endométrio atrófico.'
    ],
    correctAnswer: 0, // A
    explanation: 'O sangramento uterino anormal na pós-menopausa é um sinal de alerta clássico que exige exclusão de neoplasias endometriais. A paciente apresenta múltiplos fatores de risco fortemente associados ao estímulo estrogênico crônico não contraposto pela progesterona (obesidade, nuliparidade, menopausa tardia aos 53 anos). A presença de um espessamento endometrial de 8 mm à ultrassonografia transvaginal (onde o valor de referência normal na pós-menopausa sem terapia hormonal é inferior a 4 ou 5 mm) torna a hiperplasia endometrial (com ou sem atipias) a principal hipótese diagnóstica inicial a ser investigada via biópsia ou histeroscopia.',
    commentary: 'O câncer de colo de útero (B) usualmente se apresenta com sangramento ao coito, odor fétido e lesões exofíticas cervicais evidentes. Embora haja um leiomioma submucoso de 1,5 cm (C) e uma lesão polipoide cervical, em uma paciente de 72 anos obesa e nulípara, a investigação prioritária do endométrio espessado é imperativa para descartar hiperplasia/câncer. O endométrio atrófico (D) cursa tipicamente com espessamento < 4 mm.',
    reference: 'Tratado de Ginecologia FEBRASGO / Diretrizes de Investigação de Sangramento Pós-Menopausa',
    tags: ['ginecologia', 'oncologia ginecológica', 'hiperplasia endometrial', 'sangramento pós-menopausa', 'menopausa']
  },
  {
    id: 'enamed-2025-95',
    module: 'ENAMED',
    text: 'Menina de 11 anos é levada pela mãe à Unidade Básica de Saúde por cansaço, palidez cutânea e baixo rendimento escolar há três meses. O hemograma mostra hemoglobina de 8,4 g/dL, VCM de 62 fL, HCM de 24 pg, CHCM de 28 g/dL, RDW de 22%, eosinofilia discreta e plaquetas de 480.000/mm³.\n\nQual é a conduta mais adequada?',
    options: [
      '(A) Dosar ferro sérico, por ser exame sensível e específico.',
      '(B) Iniciar ferro elementar 4 mg/kg/dia, esperando aumento dos reticulócitos em 4 a 7 dias.',
      '(C) Classificar a anemia como normocítica e solicitar esfregaço pela presença de anisocitose e eliptocitose.',
      '(D) Encaminhar ao hematologista devido à eosinofilia e trombocitose.'
    ],
    correctAnswer: 1, // B
    explanation: 'O hemograma revela uma anemia microcítica (VCM 62 fL) e hipocrômica (HCM 24 pg, CHCM 28 g/dL) com anisocitose acentuada (RDW de 22% - valor de referência < 14,5%), que é a apresentação laboratorial clássica da anemia ferropriva (deficiência de ferro). Diante de forte suspeita epidemiológica e laboratorial na infância/adolescência, a conduta recomendada na atenção básica é o teste terapêutico com reposição de ferro elementar (dose de 3 a 5 mg/kg/dia). O primeiro sinal de eficácia do tratamento é a resposta reticulocitária (aumento dos reticulócitos), observada entre o 4º e o 7º dia do início da terapia.',
    commentary: 'O ferro sérico isolado (A) é um exame de baixa sensibilidade e especificidade devido à variação circadiana e influência da dieta. A anemia é francamente microcítica, não normocítica (C). A trombocitose (plaquetas 480.000/mm³) é reacional à deficiência de ferro (eritropoietina estimula a trombopoiese por homologia estrutural) e a eosinofilia discreta é comum e frequentemente associada a parasitoses intestinais na infância (causa de perda crônica de ferro), não justificando encaminhamento ao hematologista (D).',
    reference: 'Tratado de Pediatria da Sociedade Brasileira de Pediatria (SBP) / Diretrizes de Anemia Ferropriva',
    tags: ['pediatria', 'hematologia', 'anemia ferropriva', 'deficiência de ferro', 'ferro elementar', 'reticulócitos']
  },
  {
    id: 'enamed-2025-96',
    module: 'ENAMED',
    text: 'Homem de 30 anos chega para consulta em Unidade Básica de Saúde (UBS) devido à astenia e úlcera no pênis. Trabalha como profissional do sexo e nem sempre faz uso de preservativo. Há cerca de 3 meses, vem notando emagrecimento de 10 kg, astenia e febre baixa sem horário fixo. Há 1 semana, observou o aparecimento de úlcera dolorosa no pênis. Nega secreção uretral. Ao exame físico, apresenta lesão ulcerada de aproximadamente 3 cm, com bordas elevadas, base mole, sem secreção, além de linfonodomegalia inguinal direita dolorosa, com sinais inflamatórios e sem fistulização.\n\nNesse caso, a investigação, o achado esperado e o tratamento referentes à úlcera devem ser, respectivamente,',
    options: [
      '(A) Sorologia para Chlamydia trachomatis; positiva; doxiciclina 100 mg, duas vezes ao dia, por 7 dias.',
      '(B) Biópsia da úlcera; bacilos álcool-ácido resistentes; esquema com pirazinamida, isoniazida e rifampicina.',
      '(C) VDRL; reagente; benzilpenicilina benzatina 1,2 milhão UI IM em dose única.',
      '(D) Microscopia de esfregaço do fundo da úlcera; bacilos Gram-negativos agrupados em correntes; azitromicina 1 g VO em dose única.'
    ],
    correctAnswer: 3, // D
    explanation: 'O quadro clínico apresentado (úlcera genital dolorosa de base mole com linfadenopatia inguinal dolorosa inflamatória / bubão) é altamente característico de cancro mole (cancroide), infecção sexualmente transmissível causada pelo Haemophilus ducreyi. A confirmação diagnóstica pode ser auxiliada pela microscopia do esfregaço da secreção ou do fundo da úlcera (corado por Gram), evidenciando bacilos Gram-negativos agrupados de forma paralela (aspecto em "corrente" ou "escola de peixes"). O tratamento preconizado pelo Ministério da Saúde consiste no uso de azitromicina 1 g por via oral em dose única ou ceftriaxona 250 mg intramuscular dose única.',
    commentary: 'A sorologia para Chlamydia trachomatis (A) refere-se ao linfogranuloma venéreo, que se manifesta tipicamente por linfadenite inguinal dolorosa fistulizada por múltiplos orifícios ("bico de regador"), sem úlcera genital ativa concomitante (que costuma ser efêmera e indolor). O VDRL reagente com penicilina benzatina (C) é o manejo clássico da sífilis primária (cancro duro), caracterizada por úlcera genital única, de base endurecida, limpa e indolor, acompanhada de linfonodomegalia regional indolor e não inflamatória.',
    reference: 'Protocolo Clínico e Diretrizes Terapêuticas (PCDT) para Atenção Integral às Pessoas com Infecções Sexualmente Transmissíveis (IST) - Ministério da Saúde do Brasil',
    tags: ['infectologia', 'ginecologia', 'urologia', 'IST', 'cancro mole', 'penis'],
    image: '/images/enamed2025-96.webp'
  },
  {
    id: 'enamed-2025-97',
    module: 'ENAMED',
    text: 'Mãe de menina de 7 anos procura a Unidade Básica de Saúde preocupada porque a filha é a menor da turma. Nega intercorrências gestacionais e neonatais. Ao exame: Tanner M1P1; peso de 19 kg (Z -1); estatura de 1,07 m (-3 < Z < -2); alvo familiar correspondente a Z -2; IMC normal. Relação segmento superior/inferior normal. Idade óssea compatível com 5 anos e 10 meses, embora a idade cronológica seja de 6 anos e 8 meses na avaliação anterior.\n\nA hipótese diagnóstica mais adequada é',
    options: [
      '(A) Acondroplasia.',
      '(B) Síndrome de Turner.',
      '(C) Baixa estatura familiar.',
      '(D) Atraso constitucional do crescimento.'
    ],
    correctAnswer: 3, // D
    explanation: 'O atraso constitucional do crescimento e da puberdade (ACCP) é uma variante normal do desenvolvimento caracterizada por desaceleração temporária do crescimento na infância, com atraso na idade óssea em relação à idade cronológica (frequentemente superior a 1 ou 2 anos). No entanto, o potencial genético de estatura (alvo familiar) e a velocidade de crescimento final estão preservados, de modo que a estatura adulta final prevista situa-se dentro da faixa familiar.',
    commentary: 'Na baixa estatura familiar (C), a velocidade de crescimento é normal, as proporções corporais estão preservadas, mas a idade óssea é compatível com a idade cronológica, e a estatura final se correlaciona diretamente com o alvo familiar baixo. A acondroplasia (A) cursa com desproporção corporal severa (membros curtos) evidente ao exame físico. A Síndrome de Turner (B) deve ser considerada em meninas com baixa estatura inexplicada, mas geralmente cursa com outros estigmas físicos (pescoço alado, tórax em escudo, cubito valgo) e cariótipo alterado.',
    reference: 'Tratado de Pediatria da Sociedade Brasileira de Pediatria (SBP) / Diretrizes de Baixa Estatura',
    tags: ['pediatria', 'endocrinologia', 'baixa estatura', 'atraso constitucional', 'idade óssea']
  },
  {
    id: 'enamed-2025-98',
    module: 'ENAMED',
    text: 'Paciente de 43 anos internada por icterícia, colúria e acolia fecal iniciadas há 72 horas. Ao exame apresenta dor em hipocôndrio direito, porém permanece afebril e hemodinamicamente estável. Ultrassonografia demonstra múltiplos cálculos e dilatação das vias biliares intra e extra-hepáticas. Laboratório evidencia importante elevação de fosfatase alcalina, gama-GT e bilirrubina direta, sem leucocitose significativa.\n\nNesse momento, quais são, respectivamente, o diagnóstico sindrômico e o exame complementar mais indicado?',
    options: [
      '(A) Síndrome colestática sem colangite; tomografia de abdome.',
      '(B) Síndrome colestática com colangite; ressonância das vias biliares.',
      '(C) Síndrome colestática sem colangite; ressonância das vias biliares.',
      '(D) Síndrome colestática com colangite; colangiopancreatografia retrógrada endoscópica.'
    ],
    correctAnswer: 2, // C
    explanation: 'A paciente apresenta quadro clínico-laboratorial típico de icterícia obstrutiva de padrão colestático (icterícia, colúria, acolia fecal, elevação marcante de fosfatase alcalina, gama-GT e bilirrubina direta, associados à dilatação biliar biliar intra e extra-hepática documentada por ultrassom devido a coledocolitíase). Como a paciente encontra-se afebril, estável e sem sinais inflamatórios sistêmicos (leucocitose ausente), ela não preenche os critérios para colangite aguda (Triáde de Charcot incompleta, ausência de febre/calafrios). Portanto, trata-se de uma síndrome colestática sem colangite. O exame diagnóstico não invasivo padrão-ouro para investigar e mapear a árvore biliar em busca de cálculos na via biliar principal é a colangiorressonância (ressonância magnética das vias biliares - CPRM).',
    commentary: 'As opções com colangite (B e D) estão incorretas porque a paciente não apresenta febre ou infecção de via biliar. A tomografia de abdome (A) apresenta menor sensibilidade que a CPRM para detecção de microlitíase ou coledocolitíase sem calcificação. A colangiopancreatografia retrógrada endoscópica (CPRE) possui alta morbidade (risco de pancreatite aguda, sangramento, perfuração) e deve ser reservada para intervenções terapêuticas imediatas, e não como exame puramente diagnóstico de primeira linha (conforme D).',
    reference: 'Diretrizes de Coledocolitíase da Federação Brasileira de Gastroenterologia (FBG) / Sabiston Tratado de Cirurgia',
    tags: ['gastroenterologia', 'cirurgia', 'vias biliares', 'coledocolitíase', 'icterícia', 'colangiorressonância']
  },
  {
    id: 'enamed-2025-99',
    module: 'ENAMED',
    text: 'Primigesta de 28 anos, com 33 semanas de gestação, pré-natal de risco habitual, procura pronto-atendimento obstétrico relatando perda de líquido claro pela vagina há cerca de duas horas. Não apresenta contrações uterinas. Ao exame especular observa-se saída de líquido amniótico pelo colo uterino. Após receber antibiótico e corticoterapia antenatal, qual deve ser a conduta?',
    options: [
      '(A) Internação hospitalar e monitoramento materno-fetal diário.',
      '(B) Internação hospitalar, cardiotocografia e indução imediata do parto.',
      '(C) Alta com repouso domiciliar e acompanhamento diário.',
      '(D) Alta com repouso domiciliar e acompanhamento semanal.'
    ],
    correctAnswer: 0, // A
    explanation: 'A paciente apresenta ruptura prematura pré-termo das membranas ovulares (RPMPT) com idade gestacional de 33 semanas (período de viabilidade fetal mas com imaturidade pulmonar relativa). Na ausência de contraindicações maternas ou fetais imediatas (como corioamnionite clínica, sofrimento fetal agudo, descolamento de placenta), a conduta preconizada é a internação hospitalar para repouso, vigilância clínica rigorosa diária (temperatura, frequência cardíaca, dor abdominal, aspecto do líquido), acompanhamento fetal diário (perfil biofísico, cardiotocografia) e administração de corticoterapia antenatal de maturação pulmonar e antibioticoterapia de latência. A interrupção da gestação (parto) é programada para ocorrer a partir de 34 semanas de idade gestacional.',
    commentary: 'A indução imediata do parto (B) antes de 34 semanas sem complicações aumenta desnecessariamente os riscos de morbidade respiratória neonatal. A alta hospitalar para repouso domiciliar (C e D) é formalmente proscrita na RPMPT pré-termo devido ao elevado risco de infecção intra-amniótica rápida e oculta, compressão de cordão umbilical ou descolamento prematuro de placenta.',
    reference: 'Protocolos de Obstetrícia de Alto Risco - FEBRASGO / Manual de Gestação de Alto Risco do Ministério da Saúde',
    tags: ['ginecologia', 'obstetrícia', 'ruptura de membranas', 'prematurez', 'conduta expectante']
  },
  {
    id: 'enamed-2025-100',
    module: 'ENAMED',
    text: 'Considerando a atenção ao pré-natal de pacientes na atenção primária à saúde, assinale a condição clínica que indica referência da gestante para acompanhamento conjunto em centro especializado (pré-natal de alto risco).\n\n*(Questão anulada oficialmente pelo ENAMED)*',
    options: [
      '(A) Malária no terceiro trimestre.',
      '(B) Anemia com hemoglobina de 9,5 g/dL.',
      '(C) Gestação gemelar dicoriônica diamniótica.',
      '(D) Diabetes mellitus gestacional controlado apenas com dieta.'
    ],
    correctAnswer: 2, // C
    annulled: true,
    explanation: 'A banca anulou oficialmente esta questão devido à possibilidade de múltiplas respostas corretas pautadas nas diretrizes nacionais e de diferentes estados do Brasil. Do ponto de vista técnico, a gestação gemelar (C) - mesmo a mais benigna das gemelaridades (dicoriônica e diamniótica) - é classificada em quase todos os protocolos nacionais como fator de risco que demanda encaminhamento para o pré-natal de alto risco. No entanto, a malária na gestação (A), sobretudo no terceiro trimestre, também é classificada como emergência ou de alto risco infeccioso e clínico grave, exigindo acompanhamento compartilhado ou de referência rápida. Essa sobreposição de critérios gerou ambiguidade e motivou a anulação.',
    commentary: 'Anemia moderada (hemoglobina de 9,5 g/dL - opção B) e diabetes mellitus gestacional bem controlado apenas com dieta e medidas de estilo de vida (opção D) são situações que, pelas diretrizes de atenção primária do Ministério da Saúde, podem ser manejadas integralmente no âmbito da Unidade Básica de Saúde, não demandando encaminhamento obrigatório ao alto risco caso estejam controladas e sem repercussões.',
    reference: 'Manual de Gestação de Alto Risco - Ministério da Saúde do Brasil / Diretrizes de Atenção Primária à Saúde (APS)',
    tags: ['ginecologia', 'obstetrícia', 'pré-natal', 'gestação de alto risco', 'questão anulada', 'gemelaridade']
  }
];

