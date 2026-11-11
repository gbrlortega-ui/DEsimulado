import { Question } from '../types';

export const GINECOLOGIA_QUESTIONS: Question[] = [
  {
    id: 'tp2024-81',
    module: 'Ginecologia e Obstetrícia',
    text: 'J.P., 42 anos, mamografia retroareolar esquerda: nódulo espiculado, alta radiodensidade, calcificações pleomorfas (2,2cm). Exame físico: retração do complexo areolopapilar, linfonodo axilar endurecido e fixo. Categoria BI-RADS e biópsias indicadas?',
    options: [
      '(A) BI-RADS 0, core biopsy do nódulo e PAAF do linfonodo.',
      '(B) BI-RADS 5, biópsia cirúrgica para as duas lesões.',
      '(C) BI-RADS 5, core biopsy/mamotomia do nódulo e PAAF do linfonodo.',
      '(D) BI-RADS 5, core biopsy do nódulo, sem necessidade de biopsiar o linfonodo.'
    ],
    correctAnswer: 2,
    explanation: "Nódulo espiculado, denso, com calcificações pleomorfas é um achado mamográfico altamente sugestivo de malignidade, o que corresponde à categoria BI-RADS 5. A retração do complexo areolopapilar e o linfonodo axilar duro e fixo reforçam a suspeita de carcinoma com comprometimento axilar.\n\nAntes de qualquer cirurgia é preciso ter o diagnóstico histológico. A core biopsy (ou a mamotomia) retira fragmentos de tecido do nódulo, o que permite a imuno-histoquímica (receptores hormonais, HER2, Ki-67), essencial para decidir entre cirurgia primária e quimioterapia neoadjuvante. Já no linfonodo suspeito, a PAAF basta para mostrar se há células neoplásicas, e esse resultado muda a abordagem da axila.",
    commentary: "BI-RADS 0 (A): é usado quando o exame está incompleto e precisa de incidências ou exames adicionais; aqui os achados já são característicos de lesão altamente suspeita.\n\nBiópsia cirúrgica das duas lesões (B): é mais invasiva e não é a primeira escolha; as biópsias percutâneas dão o diagnóstico com menos morbidade e permitem planejar o tratamento, inclusive a neoadjuvância.\n\nSem biopsiar o linfonodo (D): linfonodo axilar clinicamente suspeito precisa ser investigado, porque a confirmação de metástase muda a cirurgia axilar (dispensa a pesquisa do linfonodo sentinela de início) e o estadiamento.",
    tip: "Espiculado + calcificações pleomorfas = BI-RADS 5: core biopsy no nódulo e PAAF na axila suspeita antes de operar.",
    reference: 'Diretrizes em mastologia: Facina, G; Oliveira, V.M. et al, Sociedade Brasileira de Mastologia, 2021.',
    tags: ['mastologia', 'oncologia']
  },
  {
    id: 'tp2024-82',
    module: 'Ginecologia e Obstetrícia',
    text: 'Sobre as causas de sangramento uterino anormal (classificação FIGO - PALM-COEIN), assinale a correta:',
    options: [
      '(A) A adenomiose é estrutural; exérese de focos com preservação uterina tem grande sucesso.',
      '(B) Distúrbios ovulatórios são não estruturais e cursam com sangramento regular aumentado.',
      '(C) Distúrbios da hemostasia são não estruturais; anticoncepcionais são contraindicados pelo risco de trombose.',
      '(D) A miomatose submucosa é um desafio para o tratamento clínico.'
    ],
    correctAnswer: 3,
    explanation: "A FIGO divide as causas de sangramento uterino anormal em estruturais (PALM: pólipo, adenomiose, leiomioma, malignidade/hiperplasia) e não estruturais (COEIN: coagulopatia, disfunção ovulatória, endometrial, iatrogênica e não classificada).\n\nO mioma é uma das causas estruturais mais frequentes. Entre eles, os submucosos, que deformam a cavidade endometrial, são os que mais provocam sangramento aumentado e os que menos respondem ao tratamento medicamentoso; o tratamento de escolha costuma ser a miomectomia histeroscópica.",
    commentary: "Adenomiose (A): é de fato causa estrutural, mas o tratamento é clínico (progestagênios, DIU de levonorgestrel) ou, quando falha, histerectomia; não existe técnica consagrada de retirada dos focos com preservação do útero.\n\nDistúrbios ovulatórios (B): são não estruturais, mas a anovulação causa sangramento irregular e imprevisível, e não um ciclo regular com fluxo aumentado.\n\nDistúrbios da hemostasia (C): são não estruturais, mas os contraceptivos hormonais são parte importante do tratamento, por exemplo na doença de von Willebrand; a cautela com estrogênio vale para quem tem trombofilia ou risco trombótico, não para as coagulopatias em geral.",
    tip: "PALM é estrutural, COEIN não. Mioma submucoso: o que mais sangra e o que menos responde a remédio.",
    reference: 'Yela DA, Benetti-Pinto CL. Sangramento uterino anormal. São Paulo: Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO), 2018.',
    tags: ['ginecologia geral', 'DIP']
  },
  {
    id: 'tp2024-83',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher negra, 54 anos, menopausa há 15 anos. Asma grave (corticoide crônico), hipertensa (tiazídico), insônia (benzodiazepínico). Tabagista, sedentária. Mãe/avó com osteoporose. Fatores de risco para osteoporose presentes:',
    options: [
      '(A) Raça negra, uso de benzodiazepínico e sedentarismo.',
      '(B) Menopausa precoce, antecedente familiar de osteoporose, tabagismo.',
      '(C) Uso de benzodiazepínico, antecedente familiar e obesidade.',
      '(D) História familiar de câncer de mama, sedentarismo e uso crônico de corticoide.'
    ],
    correctAnswer: 1,
    explanation: "A paciente tem 54 anos e está na menopausa há 15 anos, ou seja, parou de menstruar por volta dos 39 anos: menopausa precoce (antes dos 40), que expõe o osso a longo período sem estrogênio. Somam-se o tabagismo e a história de osteoporose na mãe e na avó, todos fatores de risco reconhecidos.\n\nO uso crônico de corticoide sistêmico também é fator de risco importante, mas a única alternativa que reúne apenas fatores verdadeiros é a que cita menopausa precoce, história familiar e tabagismo. Ela tem indicação de densitometria óssea.",
    commentary: "Raça negra e benzodiazepínico (A): mulheres negras têm, em média, maior massa óssea, o que é proteção, não risco. O benzodiazepínico aumenta o risco de quedas e fraturas, mas não é fator de risco para baixa massa óssea; sedentarismo também não completa a alternativa.\n\nObesidade (C): o caso não descreve obesidade, e o baixo peso (IMC abaixo de 18,5) é que se associa a osteoporose; o benzodiazepínico, como dito, não entra na lista.\n\nHistória familiar de câncer de mama (D): não tem relação com a massa óssea; o corticoide crônico é fator de risco, mas a alternativa traz um item errado.",
    tip: "Menopausa antes dos 40, cigarro, corticoide, baixo peso e osteoporose ou fratura de quadril na família: fatores de risco para osteoporose.",
    reference: 'Manual brasileiro de osteoporose: orientações práticas para os profissionais de saúde / organização Adriana Orcesi Pedro , Perola Grinberg Plapler , Vera Lúcia Szejnfeld - 1. ed. - São Paulo: Editora Clannad, 2021, ISBN 978-65-89832-00-3',
    tags: ['climatério', 'osteoporose']
  },
  {
    id: 'tp2024-84',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher, 52 anos, última menstruação há 13 meses. Fogachos intensos, ressecamento vaginal e dispareunia. Hipertensa controlada, IMC 22. Tratamento mais adequado?',
    options: [
      '(A) Estradiol transdérmico e acetato de noretisterona transdérmico.',
      '(B) 17 beta estradiol oral e didrogesterona oral.',
      '(C) Gabapentina oral e acetato de noretisterona transdérmico.',
      '(D) Anticoncepção hormonal combinada com estradiol transdérmico.'
    ],
    correctAnswer: 0,
    explanation: "Mulher de 52 anos, com amenorreia há mais de 12 meses (pós-menopausa), fogachos que atrapalham o sono e sintomas geniturinários. Ela está no período em que a terapia hormonal tem melhor relação entre risco e benefício (menos de 60 anos e menos de 10 anos de menopausa) e não tem contraindicação: hipertensão controlada não impede o tratamento.\n\nComo tem útero, o estrogênio precisa ser associado a um progestagênio para proteger o endométrio. Na hipertensa, prefere-se a via transdérmica, que evita a primeira passagem hepática e tem menor impacto sobre a pressão, a coagulação e os triglicerídeos. Estradiol com noretisterona em adesivo atende a esses critérios.",
    commentary: "Estradiol oral e didrogesterona (B): o esquema protege o endométrio, mas a via oral passa pelo fígado e não é a preferida em hipertensa quando há opção transdérmica.\n\nGabapentina e noretisterona (C): a gabapentina é alternativa não hormonal para quem não pode usar estrogênio, o que não é o caso; progestagênio isolado não trata o ressecamento vaginal.\n\nAnticoncepção hormonal combinada (D): na pós-menopausa não há necessidade de contracepção, e as doses de anticoncepcional são maiores que as de reposição; somar outro estradiol seria excesso de estrogênio.",
    tip: "Climatério sintomático com útero e hipertensão controlada: estrogênio transdérmico + progestagênio.",
    reference: 'CONSENSO BRASILEIRO DE TERAPIA HORMONAL DO CLIMATÉRIO, 2024. https://app.ginecoacademy.com/consenso-brasileiro-deterapeutica-hormonal-2024-principais-recomendacoes/',
    tags: ['climatério', 'terapia hormonal']
  },
  {
    id: 'tp2024-85',
    module: 'Ginecologia e Obstetrícia',
    text: 'Adolescente, 17 anos, queixa-se de mamas pequenas. Exame: Tanner M5 e P5. Qual a orientação?',
    options: [
      '(A) Iniciar estrogênios para acelerar crescimento.',
      '(B) Orientar que a telarca é o último evento puberal e aguardar.',
      '(C) A classificação de Tanner não é mais usada rotineiramente.',
      '(D) Desenvolvimento compatível com a idade; tamanho segue variantes físicas individuais.'
    ],
    correctAnswer: 3,
    explanation: "Tanner M5 (mama adulta, com a aréola no mesmo contorno da mama) e P5 aos 17 anos indicam que a puberdade terminou e que o desenvolvimento está adequado para a idade. O estadiamento de Tanner avalia a maturação, não o volume: o tamanho final da mama varia muito entre mulheres e não indica doença.\n\nA conduta é tranquilizar a adolescente e explicar que a diferença em relação às irmãs é uma variação individual normal. Não há indicação de hormônio.",
    commentary: "Estrogênio para acelerar o crescimento (A): a mama já está em estágio adulto; hormônio não muda o tamanho de uma mama normal e traria riscos sem benefício.\n\nTelarca como último evento (B): é o contrário; nas meninas, a telarca costuma ser o primeiro sinal da puberdade, e a menarca vem depois.\n\nTanner fora da rotina (C): o estadiamento de Tanner continua sendo parte do exame de rotina para acompanhar a maturação sexual de crianças e adolescentes.",
    tip: "Telarca é o primeiro sinal da puberdade feminina. M5 aos 17 anos = mama adulta; tamanho é variação individual.",
    reference: 'Endocrinologia Feminina/ Fernandes CE, Pompei LM. Ed Manole 2016, pag. 173-82. Hormônios em Ginecologia/ Benetti-Pinto CL, Fernandes CE, Silva filhos AL. Ed Manole 2024, pag. 91-7.',
    tags: ['ginecologia infanto-puberal', 'puberdade']
  },
  {
    id: 'tp2024-86',
    module: 'Ginecologia e Obstetrícia',
    text: 'Paciente, 32 anos, hipertensa (uso de Losartana). Orientação contraceptiva correta?',
    options: [
      '(A) Apenas métodos de barreira (preservativos) são permitidos.',
      '(B) Progestagênio isolado (oral/implante) ou DIU (cobre/levonorgestrel) são indicados.',
      '(C) Contraceptivos combinados orais são seguros.',
      '(D) O médico não deve interferir na escolha mesmo se houver contraindicação.'
    ],
    correctAnswer: 1,
    explanation: "Paciente hipertensa em tratamento, com pressão controlada. Segundo os critérios médicos de elegibilidade da OMS para uso de contraceptivos, os métodos com estrogênio (pílula, adesivo ou anel combinados) devem ser evitados em hipertensas, pelo aumento do risco de AVC e infarto.\n\nJá os métodos só com progestagênio (pílula, implante de etonogestrel) e os DIUs de cobre ou de levonorgestrel são seguros nessa situação e muito eficazes. Cabe ao médico apresentar essas opções e ajudar a mulher a escolher entre elas.",
    commentary: "Apenas métodos de barreira (A): não há motivo para excluir todos os hormônios; progestagênios isolados e DIU são seguros e bem mais eficazes que o preservativo.\n\nCombinados seguros (C): qualquer via de contraceptivo combinado (oral, adesivo ou anel) leva estrogênio e está contraindicada ou desaconselhada na hipertensa.\n\nDecisão sem interferência médica (D): a escolha é da mulher, mas o médico deve informar e orientar sobre os métodos adequados ao seu quadro clínico, evitando os que podem lhe fazer mal.",
    tip: "Hipertensa: nada de estrogênio. Progestagênio isolado, implante ou DIU (cobre ou levonorgestrel).",
    reference: 'Hormônios em Ginecologia/ Benetti-Pinto CL, Fernandes CE, Silva filhos AL. Ed Manole 2024, pag. 11-7. Endocrinologia Feminina/ Fernandes CE, Pompei LM. Ed Manole 2016, pag. 341-97',
    tags: ['contracepção']
  },
  {
    id: 'tp2024-87',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher, 30 anos, citologia: "Células escamosas atípicas não podendo excluir lesão de alto grau (ASC-H)". Conduta?',
    options: [
      '(A) Encaminhar para colposcopia.',
      '(B) Repetir citologia em 6 meses.',
      '(C) Repetir citologia em 12 meses.',
      '(D) Repetir citologia em 3 anos.'
    ],
    correctAnswer: 0,
    explanation: "ASC-H significa células escamosas atípicas em que não se pode afastar lesão de alto grau. Uma parte importante dessas mulheres tem, de fato, lesão intraepitelial de alto grau ou até câncer na investigação.\n\nPor isso as Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero recomendam que toda mulher com ASC-H, em qualquer idade, seja encaminhada diretamente à colposcopia, com biópsia das áreas suspeitas. Não se repete a citologia.",
    commentary: "Repetir em 6 meses (B): é a conduta para ASC-US em mulheres a partir de 30 anos, não para ASC-H, que pode esconder lesão de alto grau.\n\nRepetir em 12 meses (C): é a conduta para ASC-US e LSIL em mulheres mais jovens; atrasaria o diagnóstico de uma lesão potencialmente grave.\n\nRepetir em 3 anos (D): é o intervalo do rastreamento após dois exames normais, sem lugar diante de um laudo alterado.",
    tip: "ASC-H, HSIL, AGC ou suspeita de invasão: colposcopia direto, sem repetir citologia.",
    reference: 'Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero.',
    tags: ['ginecologia oncológica', 'patologia do trato genital inferior']
  },
  {
    id: 'tp2024-88',
    module: 'Ginecologia e Obstetrícia',
    text: 'Corrimento branco acinzentado, odor fétido (pior após coito/menstruação). Whiff teste positivo. Sem inflamação vulvovaginal. Diagnóstico e conduta?',
    options: [
      '(A) Candidíase; Fluconazol oral.',
      '(B) Tricomoníase; tratar parceiro.',
      '(C) Vaginose bacteriana; Metronidazol.',
      '(D) Encaminhar para cultura antes de tratar.'
    ],
    correctAnswer: 2,
    explanation: "Corrimento branco-acinzentado, homogêneo, com odor fétido que piora após a relação e na menstruação, sem prurido e sem inflamação de vulva e vagina, é o quadro típico de vaginose bacteriana. O sêmen e o sangue menstrual são alcalinos e liberam as aminas produzidas pelos anaeróbios, por isso o odor aumenta nessas situações; o teste de Whiff (KOH a 10%) positivo reproduz esse fenômeno.\n\nO diagnóstico é clínico (critérios de Amsel) e o tratamento de escolha é metronidazol por via oral, por 7 dias, com o gel vaginal como alternativa. Não é necessário tratar o parceiro.",
    commentary: "Candidíase (A): o corrimento é branco, grumoso, sem odor, com prurido intenso e vulvovaginite (hiperemia e edema); o teste de Whiff é negativo.\n\nTricomoníase (B): costuma vir com corrimento amarelo-esverdeado e bolhoso, prurido e sinais inflamatórios, como colo em framboesa; o caso não tem inflamação.\n\nCultura antes de tratar (D): com quadro clínico típico e teste de Whiff positivo, o diagnóstico está feito no consultório e o tratamento pode começar na hora; cultura não é útil para vaginose, cuja flora inclui bactérias da vagina normal.",
    tip: "Vaginose: corrimento acinzentado, cheiro de peixe pior após o coito, Whiff positivo, sem inflamação = metronidazol.",
    reference: 'Peixoto S. Infecção Genital na Mulher Ed Roca 2007.Pag 89- 113. Tratado de Ginecologia FEBRASGO. Elsevier 2019. Pag. 265- 78',
    tags: ['ginecologia geral', 'infecções']
  },
  {
    id: 'tp2024-89',
    module: 'Ginecologia e Obstetrícia',
    text: 'Primigesta, 12 semanas, IMC 29. Glicemia de jejum: 132 mg/dL. Histórico familiar de DM2. Diagnóstico?',
    options: [
      '(A) Não é diabética; aguardar TOTG com 24-28 semanas.',
      '(B) Não é diabética; apenas dieta e exercício.',
      '(C) Diabetes Mellitus Gestacional (DMG).',
      '(D) Diabetes Pré-Gestacional (Overt Diabetes).'
    ],
    correctAnswer: 3,
    explanation: "Na rotina do pré-natal, a glicemia de jejum é pedida já na primeira consulta. Pelo consenso brasileiro (OPAS, Ministério da Saúde, FEBRASGO e SBD, 2016), valor de 92 a 125 mg/dL define diabetes gestacional, e valor de 126 mg/dL ou mais define diabetes diagnosticado na gestação (overt diabetes), que corresponde a um diabetes prévio não reconhecido.\n\nCom 132 mg/dL às 12 semanas, a paciente tem diabetes pré-gestacional. A conduta inicial é dieta, atividade física e monitorização da glicemia capilar em vários horários; se as metas não forem atingidas, inicia-se insulina. Ela não precisa fazer o TOTG.",
    commentary: "Não diabética, TOTG com 24 a 28 semanas (A): o TOTG é para quem tem jejum abaixo de 92 mg/dL; com 132 mg/dL o diagnóstico já está feito.\n\nNão diabética, apenas dieta e exercício (B): ignora o diagnóstico e deixa de monitorar a glicemia, expondo mãe e feto às complicações da hiperglicemia.\n\nDiabetes gestacional (C): vale para jejum entre 92 e 125 mg/dL; a partir de 126 mg/dL considera-se diabetes prévio à gestação.",
    tip: "Jejum na gestação: < 92 normal; 92 a 125 = DMG; ≥ 126 = overt diabetes (diabetes prévio).",
    reference: 'Organização Pan-Americana da Saúde. Ministério da Saúde. Federação Brasileira das Associações de Ginecologia e Obstetrícia. Sociedade Brasileira de Diabetes Rastreamento e diagnóstico de diabetes mellitus gestacional no Brasil. Brasília, DF: OPAS, 2016. 32p.: il. ISBN: 978-85-7967-118-0',
    tags: ['obstetrícia', 'diabetes']
  },
  {
    id: 'tp2024-90',
    module: 'Ginecologia e Obstetrícia',
    text: 'Gestante, 41 semanas, cesárea prévia. Trabalho de parto ativo. Bradicardia fetal sustentada, dor abdominal súbita intensa, interrupção das contrações e choque materno. Qual o diagnóstico?',
    options: [
      '(A) Descolamento prematuro de placenta (DPP).',
      '(B) Rotura uterina.',
      '(C) Rotura de cápsula hepática.',
      '(D) Abdome agudo não obstétrico.'
    ],
    correctAnswer: 1,
    explanation: "Gestante com cesárea anterior (cicatriz uterina) em trabalho de parto que evolui com dor súbita e lancinante, parada das contrações, bradicardia fetal sustentada e sinais de choque (hipotensão, taquicardia, taquipneia) tem rotura uterina até prova em contrário. A ausência de sangramento vaginal não afasta o diagnóstico, porque o sangue vai para a cavidade abdominal.\n\nOutros sinais são a perda da altura da apresentação e a palpação de partes fetais sob a pele. A conduta é laparotomia imediata para retirar o feto e reparar o útero, e muitas vezes a histerectomia é necessária.",
    commentary: "Descolamento prematuro de placenta (A): também causa dor, sofrimento fetal e choque, mas o útero fica hipertônico, endurecido, com contrações; a parada da atividade uterina aponta para rotura.\n\nRotura de cápsula hepática (C): complicação rara da pré-eclâmpsia grave e da síndrome HELLP, com dor em epigástrio e hipocôndrio direito; não há quadro hipertensivo aqui.\n\nAbdome agudo não obstétrico (D): não explica o conjunto de cicatriz uterina, parada das contrações e sofrimento fetal agudo durante o trabalho de parto.",
    tip: "Cesárea prévia + dor súbita + parada das contrações + bradicardia fetal + choque = rotura uterina → laparotomia já.",
    reference: 'BRASIL. Ministério da Saúde. Secretaria de Atenção à Saúde. Atenção ao pré-natal de baixo risco. I.ed. Brasília: Ministério da Saúde; 2012. BRASIL. Ministério da Saúde. Secretaria de Atenção A Saúde. Gestação de alto risco. Brasília: Editora do Ministério da Saúde, 2010. BRASIL. Ministério da Saúde. Secretaria de Atenção à Saúde. Pré-natal e Puerpério: atenção qualificada e humanizada. 1.ed. Brasília: Ministério da Saúde; 2005. BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde. Saúde Brasil 2011: uma análise da situação de saúde e a vigilância da saúde da mulher. Brasília: Ministério da Saúde, 2012.',
    tags: ['obstetrícia', 'emergência']
  },
  {
    id: 'tp2024-91',
    module: 'Ginecologia e Obstetrícia',
    text: 'Puérpera (45 dias) com COVID-19 leve. Preocupada com a amamentação exclusiva. Qual a orientação?',
    options: [
      '(A) Interromper amamentação; usar fórmula.',
      '(B) Continuar amamentando com precauções de higiene (máscara e lavagem das mãos).',
      '(C) Amamentar apenas se estiver vacinada.',
      '(D) Amamentar apenas se o bebê já tiver sido exposto.'
    ],
    correctAnswer: 1,
    explanation: "O leite materno não é considerado meio de passagem do SARS-CoV-2 para o bebê, e amamentar continua trazendo benefícios ao bebê, inclusive anticorpos. Por isso Ministério da Saúde, OMS e sociedades de pediatria recomendam que a mãe com COVID-19, suspeita ou confirmada, continue amamentando.\n\nO cuidado é evitar a transmissão por gotículas: usar máscara durante as mamadas, higienizar as mãos antes de pegar a criança e higienizar superfícies. Essa orientação vale independentemente de a mãe estar vacinada.",
    commentary: "Interromper e usar fórmula (A): suspender o aleitamento não protege o bebê, já que o leite não transmite o vírus, e o priva dos benefícios da amamentação.\n\nAmamentar só se vacinada (C): a recomendação de manter o aleitamento não depende do estado vacinal da mãe.\n\nAmamentar só se o bebê já foi exposto (D): não há base para essa restrição; com as medidas de higiene, a amamentação deve continuar em qualquer caso.",
    tip: "Mãe com COVID-19: continua amamentando, com máscara e mãos lavadas.",
    reference: 'Centers for Disease Control and Prevention. (2021). Care for Breastfeeding People: Interim Guidance on Breastfeeding and Breast Milk Feeds in the Context of COVID-19. CDC. World Health Organization. (2020). Breastfeeding and COVID19: Scientific Brief. WHO. American Academy of Pediatrics. (2021). Breastfeeding During the COVID-19 Pandemic. AAP. Ministério da Saúde do Brasil (2021) Campanha incentiva o aleitamento materno no Brasil',
    tags: ['puerpério', 'aleitamento']
  },
  {
    id: 'tp2024-92',
    module: 'Ginecologia e Obstetrícia',
    text: 'A sepse puerperal é definida por infecção do trato genital até 42 dias pós-parto. Quais sinais estão presentes?',
    options: [
      '(A) Conteúdo vaginal anormal e mialgia.',
      '(B) Dor pélvica e mialgia.',
      '(C) Dor pélvica, conteúdo vaginal anormal e febre.',
      '(D) Apenas atraso na involução uterina.'
    ],
    correctAnswer: 2,
    explanation: "A sepse puerperal é a infecção do trato genital que ocorre do parto até 42 dias depois. Pela definição da OMS, o diagnóstico exige dois ou mais dos seguintes: dor pélvica, febre, corrimento vaginal anormal, odor anormal do corrimento e atraso na involução uterina.\n\nA única alternativa que reúne pelo menos dois desses critérios é a que cita dor pélvica, conteúdo vaginal anormal e febre. A forma mais comum é a endometrite, cujo tratamento é antibiótico de amplo espectro por via venosa (clindamicina com gentamicina é o esquema clássico).",
    commentary: "Conteúdo vaginal anormal e mialgia (A): a mialgia não faz parte dos critérios, então sobra apenas um item.\n\nDor pélvica e mialgia (B): de novo, só um critério verdadeiro; mialgia é sintoma inespecífico.\n\nAtraso na involução uterina (D): é um dos critérios, mas sozinho não basta; é preciso pelo menos dois.",
    tip: "Sepse puerperal (OMS): 2 ou mais entre dor pélvica, febre, corrimento ou odor anormal e útero que não involui.",
    reference: 'Infecção puerperal. Sérgio Hecker Luz, João Alfredo Piffero Steibel, Gustavo Steibel, Edson Vieira da Cunha Filho. FEMINA 2019;47(12): 898-901.',
    tags: ['puerpério', 'infecções']
  },
  {
    id: 'tp2024-93',
    module: 'Ginecologia e Obstetrícia',
    text: 'Gestante (8 semanas), teste rápido positivo para sífilis. Nega sintomas, múltiplos parceiros. Tratamento e conduta pelo Ministério da Saúde?',
    options: [
      '(A) Penicilina benzatina 7,2 milhões (3 doses); tratar parceiro, acompanhar mensal com VDRL.',
      '(B) Penicilina benzatina 2,4 milhões (1 dose); repetir VDRL.',
      '(C) Penicilina benzatina 7,2 milhões; repetir VDRL trimestral.',
      '(D) Penicilina benzatina 2,4 milhões; não tratar parceiro.'
    ],
    correctAnswer: 0,
    explanation: "Na gestante, um teste rápido (treponêmico) reagente já basta para começar o tratamento no mesmo dia, sem esperar o resultado do teste não treponêmico (VDRL), que é colhido em seguida para confirmar e servir de base ao seguimento. A sífilis na gestação também é de notificação compulsória.\n\nComo ela não tem sinais e não se sabe quando se infectou, a doença é tratada como sífilis latente de duração ignorada: penicilina benzatina 2,4 milhões de UI por semana, por 3 semanas (7,2 milhões no total). As parcerias sexuais devem ser testadas e tratadas, e na gestação o VDRL é repetido todo mês para confirmar a queda dos títulos e detectar reinfecção.",
    commentary: "Dose única de 2,4 milhões (B): serve só para sífilis recente (primária, secundária ou latente com menos de um ano); sem saber o tempo de infecção, o tratamento deve ser o de sífilis tardia.\n\nVDRL trimestral (C): a dose está certa, mas na gestante o controle é mensal; o seguimento a cada 3 meses é o usado fora da gestação.\n\nNão tratar o parceiro (D): a dose é insuficiente e deixar a parceria sem tratamento leva à reinfecção da gestante e à sífilis congênita.",
    tip: "Gestante com teste rápido reagente: trata no dia. Tempo desconhecido = 3 doses de benzatina (7,2 milhões), parceiro tratado e VDRL mensal.",
    reference: 'Protocolo clínico e diretrizes terapêuticas para a prevenção da transmissão vertical de HIV, sífilis e hepatites virais Ministério da Saúde 2022',
    tags: ['obstetrícia', 'IST']
  },
  {
    id: 'tp2024-94',
    module: 'Ginecologia e Obstetrícia',
    text: "Gestante, 30 semanas, com perda de líquido abrupta pela vagina há 4 horas. Afebril e normotensa, tônus uterino normal, frequência cardíaca fetal de 160 bpm. Ao exame especular, saída de líquido claro pelo colo, com odor de \"água sanitária\". Qual a conduta correta?",
    options: [
      '(A) Corioamnionite; induzir parto imediatamente.',
      '(B) Iniciar tocólise imediatamente.',
      '(C) Cardiotocografia não tem valor antes de 32 semanas.',
      '(D) Administrar corticosteroides (betametasona ou dexametasona).'
    ],
    correctAnswer: 3,
    explanation: "Saída de líquido claro pelo colo, com o odor característico do líquido amniótico, confirma a rotura prematura das membranas ovulares (antes do trabalho de parto), aqui com 30 semanas. Não há febre, dor uterina nem líquido purulento, ou seja, nada que indique infecção, e não há quadro de trabalho de parto.\n\nNessa idade gestacional a conduta é expectante, com internação, e o corticoide para maturação pulmonar fetal é obrigatório entre 24 e 34 semanas: betametasona 12 mg IM, duas doses com 24 horas de intervalo, ou dexametasona 6 mg IM de 12 em 12 horas, quatro doses. Somam-se antibiótico de latência, vigilância de sinais de infecção e avaliação do bem-estar fetal.",
    commentary: "Corioamnionite (A): exigiria sinais como febre, útero doloroso, líquido purulento ou fétido e taquicardia materna e fetal; a paciente está afebril, com tônus normal e líquido claro.\n\nTocólise imediata (B): não há diagnóstico de trabalho de parto (contrações regulares com modificação do colo); além disso, a tocólise não é rotina na rotura de membranas.\n\nCardiotocografia sem valor (C): o exame tem utilidade nessa idade gestacional, apenas com critérios de aceleração menores antes de 32 semanas; é importante para notar taquicardia fetal e perda de variabilidade, que podem ser os primeiros sinais de infecção.",
    tip: "Rotura prematura de membranas entre 24 e 34 semanas, sem infecção: internar, corticoide, antibiótico de latência e vigiar infecção.",
    reference: 'Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO). Rotura prematura de membranas ovulares. São Paulo: FEBRASGO; 2021 (Protocolo FEBRASGO Obstetrícia, n. 45/ Comissão Nacional Especializada em Assistência Pré-Natal). Souza E, Fava JL, Musiello RB, Camano L. Trabalho de parto prematuro: uso racional da tocólise. São Paulo: Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO); 2018. Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO). Cardiotocografia anteparto. São Paulo: FEBRASGO; 2021. (Protocolo FEBRASGO-Obstetrícia, n. 17/Comissão Nacional Especializada em Medicina Fetal).',
    tags: ['obstetrícia', 'prematuridade']
  },
  {
    id: 'tp2024-95',
    module: 'Ginecologia e Obstetrícia',
    text: "Gestante com HIV, 38 semanas, em uso regular de terapia antirretroviral, com carga viral indetectável na 34ª semana. Chega em trabalho de parto: colo com 6 cm, bolsa íntegra, feto cefálico e cardiotocografia normal. Qual a conduta?",
    options: [
      '(A) Realizar nova carga viral; se >1000, cesárea e AZT.',
      '(B) Condução do trabalho de parto vaginal; sem necessidade de AZT endovenoso.',
      '(C) Condução do trabalho de parto vaginal; realizar AZT endovenoso.',
      '(D) Indicar cesariana eletiva obrigatoriamente.'
    ],
    correctAnswer: 1,
    explanation: "O que define a via de parto e o uso de zidovudina (AZT) no parto da gestante com HIV é a carga viral medida a partir de 34 semanas. Com carga viral indetectável nessa época e uso regular da terapia antirretroviral, o risco de transmissão vertical é muito baixo.\n\nPor isso, segundo o Ministério da Saúde, a via de parto segue a indicação obstétrica (aqui, parto vaginal, já em fase ativa) e o AZT endovenoso no parto não é necessário. A medicação antirretroviral oral deve ser mantida. Durante o trabalho de parto, evitam-se amniotomia e procedimentos invasivos, e o recém-nascido recebe profilaxia conforme o risco.",
    commentary: "Nova carga viral e cesárea se acima de 1000 (A): o resultado de 34 semanas já orienta a conduta; além disso, ela está com 6 cm de dilatação, e a cesárea eletiva para prevenção só faz sentido antes do trabalho de parto e com membranas íntegras.\n\nAZT endovenoso (C): é indicado quando a carga viral é detectável, desconhecida ou foi colhida antes de 34 semanas, ou quando a adesão é duvidosa; não é o caso.\n\nCesárea obrigatória (D): a cesárea eletiva é indicada quando a carga viral é desconhecida ou de 1000 cópias/mL ou mais após 34 semanas; com carga viral indetectável, a via é obstétrica.",
    tip: "HIV com carga viral indetectável após 34 semanas e TARV regular: parto pela indicação obstétrica, sem AZT endovenoso.",
    reference: 'Brasil. Ministério da Saúde. Secretaria de Atenção Primária à Saúde. Departamento de Ações Programáticas. Manual de gestação de alto risco [recurso eletrônico] / Ministério da Saúde, Secretaria de Atenção Primária à Saúde. Departamento de Ações Programáticas. – Brasília : Ministério da Saúde, 2022. 692p.:il.',
    tags: ['obstetrícia', 'infecções']
  },
  {
    id: 'tp2024-96',
    module: 'Ginecologia e Obstetrícia',
    text: 'Puérpera, 4º dia, febre 38,5ºC, útero doloroso e subinvoluído. Trabalho de parto durou 18h, bolsa rota há 4h. Qual o fator de risco para infecção?',
    options: [
      '(A) Trabalho de parto prolongado.',
      '(B) Hipertensão arterial.',
      '(C) Rotura da bolsa (4 horas).',
      '(D) Idade adolescente.'
    ],
    correctAnswer: 0,
    explanation: "Febre no 4º dia pós-parto com útero doloroso e maior que o esperado (subinvoluído) indica endometrite, a forma mais comum de infecção puerperal. Entre os dados do caso, o que aumenta o risco é o trabalho de parto prolongado (18 horas): mais tempo de trabalho de parto significa mais toques vaginais e mais tempo de exposição da cavidade uterina às bactérias da vagina.\n\nOs principais fatores de risco são cesárea, trabalho de parto prolongado, bolsa rota por muito tempo, muitos toques vaginais, manipulação intrauterina e retenção de restos placentários. O tratamento é antibiótico venoso de amplo espectro, como clindamicina associada a gentamicina.",
    commentary: "Hipertensão arterial (B): é fator de risco para outras complicações maternas, mas não favorece infecção puerperal.\n\nRotura da bolsa há 4 horas (C): a bolsa rota só se torna fator de risco relevante quando prolongada (classicamente mais de 18 horas); 4 horas, com pesquisa de estreptococo do grupo B negativa, é tempo curto.\n\nIdade adolescente (D): ser adolescente não aumenta, por si, o risco de infecção puerperal.",
    tip: "Infecção puerperal: cesárea, trabalho de parto prolongado, bolsa rota prolongada e muitos toques são os fatores de risco.",
    reference: 'Assistência ao quarto período do parto de risco habitual, protocolo Febrasgo 2018. Manual técnico do Pré-natal e puerpério no SUS-SP 2010. Pré-natal e Puerpério, atenção qualificada e humanizada. Ministério da Saúde, 2006.',
    tags: ['puerpério', 'infecções']
  },
  {
    id: 'tp2024-97',
    module: 'Ginecologia e Obstetrícia',
    text: 'Tumor Phyllodes borderline (2,0cm), margem de 0,5cm. Conduta correta?',
    options: [
      '(A) Quimioterapia adjuvante.',
      '(B) Radioterapia adjuvante.',
      '(C) Ampliação de margens.',
      '(D) Esvaziamento axilar.'
    ],
    correctAnswer: 2,
    explanation: "O tumor phyllodes é uma lesão fibroepitelial que cresce rápido e que, ao contrário do fibroadenoma, tende a voltar no mesmo lugar quando a retirada é incompleta. O tratamento é cirúrgico, e o que mais importa para evitar a recidiva local é a margem livre.\n\nNos tumores borderline e malignos, recomenda-se margem de pelo menos 1 cm. Como a margem foi de 0,5 cm, a conduta é ampliar a ressecção.",
    commentary: "Quimioterapia adjuvante (A): não há tratamento sistêmico adjuvante com benefício comprovado para o tumor phyllodes, e menos ainda na forma borderline.\n\nRadioterapia adjuvante (B): seu papel é discutido apenas em tumores malignos, principalmente os grandes ou com margens comprometidas; não é indicada no borderline.\n\nEsvaziamento axilar (D): o phyllodes raramente dá metástase para linfonodos (quando se espalha, é por via sanguínea), por isso não se faz cirurgia axilar de rotina.",
    tip: "Phyllodes borderline ou maligno: margem de pelo menos 1 cm. Margem menor → ampliar. Sem axila e sem quimio.",
    reference: 'Doenças da Mama. 3ª edição. Rio de Janeiro: Atheneu, 2022',
    tags: ['mastologia', 'cirurgia']
  },
  {
    id: 'tp2024-98',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher, 58 anos, dor mamária esporádica. Tia-avó com câncer de mama aos 72 anos. Exame físico normal. Qual o exame indicado?',
    options: [
      '(A) Mamografia Bilateral.',
      '(B) Ressonância Magnética com contraste.',
      '(C) Ressonância Magnética sem contraste.',
      '(D) Ultrassonografia apenas.'
    ],
    correctAnswer: 0,
    explanation: "Mulher de 58 anos sem sinais suspeitos no exame físico e cuja única queixa é dor mamária passageira, que isoladamente raramente indica câncer. A tia-avó que teve câncer de mama aos 72 anos é parente distante, com diagnóstico em idade avançada, e não coloca a paciente em alto risco.\n\nEla tem, portanto, risco habitual e está na faixa do rastreamento recomendada pelo Ministério da Saúde e pelo INCA (50 a 69 anos, a cada 2 anos). Como nunca fez exame de imagem, o indicado é a mamografia bilateral.",
    commentary: "Ressonância com contraste (B): é reservada ao rastreamento de mulheres de alto risco (mutação BRCA, radioterapia torácica na juventude, risco calculado elevado) e a situações diagnósticas específicas.\n\nRessonância sem contraste (C): sem contraste a ressonância não avalia o tecido mamário em busca de câncer; serve, por exemplo, para avaliar implantes de silicone.\n\nUltrassonografia (D): não é exame de rastreamento isolado; complementa a mamografia em mamas densas ou na avaliação de nódulos.",
    tip: "Risco habitual, 50 a 69 anos: mamografia a cada 2 anos. Ressonância é para alto risco.",
    reference: 'Instituto Nacional de Câncer José Alencar Gomes da Silva. Diretrizes para a detecção precoce do câncer de mama no Brasil/ Instituto Nacional de Câncer José Alencar Gomes da Silva – Rio de Janeiro: INCA, 2015. https://www.gov.br/conitec/ptbr/midias/protocolos/diretrizes_de teccaoprecoce_cm.pdf',
    tags: ['mastologia', 'rastreamento']
  },
  {
    id: 'tp2024-99',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher, 19 anos, Depressão (em uso de Sertralina). Qual a orientação contraceptiva correta?',
    options: [
      '(A) Evitar acetato de Medroxiprogesterona.',
      '(B) Evitar métodos orais por interação com Sertralina.',
      '(C) Todos os contraceptivos reversíveis podem ser prescritos (Categoria 1).',
      '(D) Combinados são obrigatórios pelo humor.'
    ],
    correctAnswer: 2,
    explanation: "Pelos critérios médicos de elegibilidade da OMS, os transtornos depressivos são categoria 1 para todos os métodos hormonais: combinados, progestagênio oral, injetável trimestral, implante e DIU de levonorgestrel. Não há evidência de que esses métodos piorem a depressão.\n\nA sertralina também não reduz a eficácia dos contraceptivos. Como ela é jovem e não tem outra condição clínica, qualquer método reversível pode ser oferecido, e a escolha depende da preferência dela após orientação.",
    commentary: "Evitar acetato de medroxiprogesterona (A): o injetável trimestral também é categoria 1 na depressão; não há restrição específica por esse motivo.\n\nEvitar métodos orais por interação (B): a sertralina não induz as enzimas hepáticas que metabolizam os hormônios; as interações importantes são com anticonvulsivantes indutores, rifampicina e alguns antirretrovirais.\n\nCombinados preferíveis pelo humor (D): não há efeito benéfico comprovado sobre o humor que justifique dar preferência a eles.",
    tip: "Depressão (e uso de ISRS) = categoria 1 da OMS para todos os contraceptivos hormonais.",
    reference: 'Tratado de Ginecologia: Manuel João Batista Castello Girão, Edmund C. Baracat, Geraldo R. Lima (2017)',
    tags: ['contracepção', 'saúde mental']
  },
  {
    id: 'tp2024-100',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher, 60 anos, obesa, nuligesta. Sangramento genital pós-menopausa. USG: endométrio 12mm heterogêneo. Diagnóstico e conduta?',
    options: [
      '(A) Sangramento uterino anormal; pólipo; histectomia.',
      '(B) Miomatose uterina; miomectomia.',
      '(C) Sangramento pós-menopausa; hiperplasia; biópsia de linfonodo.',
      '(D) Sangramento pós-menopausa; neoplasia maligna; biópsia de endométrio.'
    ],
    correctAnswer: 3,
    explanation: "Sangramento que aparece depois de 12 meses ou mais de amenorreia é chamado de sangramento pós-menopausa, e não de sangramento uterino anormal, termo reservado à menacme. Ele deve ser investigado sempre, porque o câncer de endométrio é a causa que não pode passar despercebida.\n\nA paciente reúne fatores de risco importantes (obesidade grave, nuliparidade, pós-menopausa) e o endométrio está espessado e heterogêneo (12 mm, quando o esperado é abaixo de 4 a 5 mm). A conduta é obter amostra do endométrio para estudo histológico, de preferência por histeroscopia com biópsia, para afastar hiperplasia com atipia e carcinoma.",
    commentary: "Sangramento uterino anormal, pólipo e histerectomia (A): o nome não se aplica após a menopausa, e não se indica histerectomia sem diagnóstico histológico.\n\nMiomatose e miomectomia (B): miomas não costumam crescer nem começar a sangrar depois da menopausa; o ultrassom mostra endométrio espessado, não miomas.\n\nHiperplasia e biópsia de linfonodo sentinela (C): a hiperplasia é uma hipótese possível, mas o linfonodo sentinela faz parte do estadiamento cirúrgico de um câncer já diagnosticado, não da investigação inicial.",
    tip: "Sangramento pós-menopausa + endométrio acima de 4 a 5 mm: amostra de endométrio (histeroscopia com biópsia) para afastar câncer.",
    reference: 'Protocolos Febrasgo. Hiperplasia endometrial e câncer de endométrio. 2021.',
    tags: ['ginecologia oncológica', 'pós-menopausa']
  },
  {
    id: 'tp2023-81',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher, 26 anos, com última menstruação há 9 semanas e sangramento vaginal irregular por duas vezes. Beta hCG 3000mUI/mL (referência positivo acima de 2,35mUI/mL). Referindo mal-estar, dor abdominal e sensação de desmaio (sic). Ao exame clínico, descorada ++/4+, pressão arterial 100x60mmHg, frequência cardíaca 110bpm, abdome distendido, doloroso, com dor à descompressão brusca em fossa ilíaca à direita. Ultrassom endovaginal com útero anteroversofletido, endométrio regular, hiperecogênico com 8mm de espessura, observa-se imagem hipoecoica sugestiva de grande quantidade de líquido retrouterina e em cavidade abdominal. Qual a suspeita diagnóstica?',
    options: [
      '(A) Gravidez ectópica rota',
      '(B) Abscesso tubo-ovariano',
      '(C) Cisto ovariano roto',
      '(D) Peritonite secundária à apendicite'
    ],
    correctAnswer: 0,
    explanation: "Atraso menstrual com sangramento irregular, beta-hCG positivo de 3.000 mUI/mL e útero vazio (só endométrio espessado) já sugerem gestação ectópica: com esse nível de hCG, a gestação intrauterina normalmente seria visível ao ultrassom transvaginal.\n\nSomam-se sinais de abdome agudo hemorrágico: palidez, taquicardia, pressão no limite, sensação de desmaio, dor com descompressão brusca e grande volume de líquido livre na pelve e no abdome. O diagnóstico é gravidez ectópica rota. Com instabilidade hemodinâmica e hemoperitônio, a conduta é cirúrgica de urgência, além da reposição volêmica e da imunoglobulina anti-D se a paciente for Rh negativo.",
    commentary: "Abscesso tubo-ovariano (B): cursa com febre, corrimento e massa anexial complexa, e não explica o beta-hCG positivo nem o choque hemorrágico.\n\nCisto ovariano roto (C): pode causar hemoperitônio, mas o beta-hCG positivo com útero vazio aponta para a ectópica.\n\nApendicite com peritonite (D): teria febre, dor migratória para fossa ilíaca direita e quadro infeccioso, sem teste de gravidez positivo nem sangue livre volumoso.",
    tip: "Beta-hCG positivo + útero vazio + líquido livre + choque = ectópica rota: cirurgia de urgência.",
    reference: 'Zugaib Obstetrícia, Ed. Manole, 4ª edição, 2020. Novak, Tratado de Ginecologia. Rio de Janeiro: Guanabara-Koogan. 16.ed, 2021. Rezende, Obstetrícia, Guanabara-Koogan, 14ª edição, 2022.',
    tags: ['obstetrícia', 'emergência']
  },
  {
    id: 'tp2023-82',
    module: 'Ginecologia e Obstetrícia',
    text: 'Entre os vários hormônios responsáveis pelas mudanças fisiológicas que ocorrem no corpo da mulher durante a gestação, existe um hormônio glicoproteico produzido pelo complexo feto-placentário, cuja função é dar suporte ao corpo lúteo no início da gravidez; seu rápido aumento nas fases iniciais da gestação é responsável pelo clássico sintoma gestacional de náuseas e vômitos, no entanto, após 12 semanas de gestação, seus valores hormonais diminuem gradualmente e entram em um patamar aliviando os sintomas descritos na maior parte dos casos; mas, em casos de cromossomopatias fetais, os valores desse hormônio podem seguir padrões diferentes e sua dosagem nos auxilia no diagnóstico precoce. Qual é esse hormônio?',
    options: [
      '(A) Lactogenio Placentário',
      '(B) Progesterona',
      '(C) Estrogênio',
      '(D) Gonadotrofina Coriônica Humana'
    ],
    correctAnswer: 3,
    explanation: "O hormônio descrito é a gonadotrofina coriônica humana (hCG), glicoproteína formada por subunidades alfa e beta e produzida pelo trofoblasto. Seu papel no início da gestação é manter o corpo lúteo produzindo progesterona até que a placenta assuma essa função.\n\nA hCG sobe rapidamente nas primeiras semanas, chega ao pico entre 8 e 12 semanas e depois cai e se estabiliza, o que coincide com o período de maior náusea e com a melhora dos sintomas. Como seus valores se alteram nas cromossomopatias (a fração beta livre sobe na trissomia do 21 e cai nas trissomias 13 e 18), ela faz parte do rastreamento bioquímico do primeiro trimestre, junto com a PAPP-A e a translucência nucal.",
    commentary: "Lactogênio placentário (A): aumenta progressivamente ao longo da gestação e atua no metabolismo materno, gerando resistência à insulina; não sustenta o corpo lúteo nem é usado no rastreamento de aneuploidias.\n\nProgesterona (B): é um esteroide, não uma glicoproteína; é produzida pelo corpo lúteo e depois pela placenta, mantendo o endométrio e a quiescência uterina.\n\nEstrogênio (C): também é esteroide, aumenta durante toda a gravidez e não tem o padrão de pico no primeiro trimestre nem o papel de manter o corpo lúteo.",
    tip: "hCG: mantém o corpo lúteo, pico com 8 a 12 semanas, náuseas, e beta livre alto na trissomia do 21.",
    reference: 'Coutinho T, Coutinho CM, Coutinho LM; Anatomia, Desenvolvimento e Fisiologia dos Anexos Embrionáriose Fetais; Tratado de Obstetrícia - Febrasgo / editores Cesar Eduardo Fernandes, Marcos Felipe Silva de Sá; 1. ed.; 4: (275-308)- Rio de Janeiro : Elsevier, 2019. Nicolaides NH, FMF; 2011.',
    tags: ['obstetrícia', 'fisiologia']
  },
  {
    id: 'tp2023-83',
    module: 'Ginecologia e Obstetrícia',
    text: 'Puérpera, 20 anos, G1P1, amamentando recém-nascido de 20 dias de vida, comparece à Unidade Básica de Saúde com queixa de dor mamária e febre há dois dias. Exame físico: bom estado geral, FC 100bpm, FR 18irpm, PA 125x88mmHg, T 38°C. Exame das mamas: ingurgitamento bilateral; mama direita avermelhada e dolorosa à palpação, com edema de pele, sem sinais de abscesso, com fissura mamilar. Além da ordenha das mamas, a conduta é:',
    options: [
      '(A) Antibioticoterapia endovenosa; suspensão temporária da amamentação.',
      '(B) Antibioticoterapia oral; manutenção da amamentação.',
      '(C) Analgesia; manutenção da amamentação.',
      '(D) Antibioticoterapia oral; suspensão temporária da amamentação.'
    ],
    correctAnswer: 1,
    explanation: "Puérpera amamentando com febre, mama vermelha, dolorosa e edemaciada, com fissura mamilar como porta de entrada, tem mastite lactacional. Não há abscesso e ela está em bom estado geral, sem sinais de sepse, o que permite tratamento ambulatorial.\n\nA conduta é antibiótico oral com cobertura para Staphylococcus aureus (como cefalexina), analgesia e esvaziamento eficaz da mama, mantendo a amamentação, inclusive na mama afetada. O leite não faz mal ao bebê e a interrupção favorece a estase láctea, que piora a infecção e aumenta o risco de abscesso. Reavaliar em 48 horas; sem melhora, pesquisar abscesso com ultrassom.",
    commentary: "Antibiótico venoso com suspensão da amamentação (A): a via venosa fica para casos graves, com sepse ou falha do tratamento oral, e suspender a amamentação piora a estase.\n\nSó analgesia (C): com febre, sinais flogísticos e fissura, já é mastite infecciosa e precisa de antibiótico.\n\nAntibiótico oral com suspensão da amamentação (D): a interrupção não é necessária e prejudica o esvaziamento, que é parte central do tratamento.",
    tip: "Mastite sem abscesso: antibiótico oral antiestafilocócico e manter a amamentação, esvaziando bem a mama.",
    reference: 'Febrasgo - Tratado de Ginecologia. Disponível em: Minha Biblioteca, Grupo GEN, 2018.',
    tags: ['puerpério', 'mastologia']
  },
  {
    id: 'tp2023-84',
    module: 'Ginecologia e Obstetrícia',
    text: 'Paciente de 23 anos, primigesta, Índice de Massa Corporal (IMC) 28kg/m2. Sem comorbidades prévias. Vem à segunda consulta de pré-natal com idade gestacional de 10 semanas e 5 dias. Traz exame de glicemia de jejum = 93mg/dL. Frente a este resultado do exame, qual a conduta para esta paciente? Parâmetros laboratoriais: Glicemia de jejum no pré-natal: Glicemia de jejum < 92mg/dL – normal; Glicemia de jejum - 92 a 125mg/dL – Diabetes Mellitus Gestacional; Glicemia de jejum ≥ 126mg/dL – Diabetes Mellitus',
    image: '/images/tp2023-84.webp',
    options: [
      '(A) Encaminhar a paciente para iniciar insulinoterapia.',
      '(B) Prescrever medicação hipoglicemiante oral imediatamente.',
      '(C) Orientar dieta, realização de exercícios físicos e monitoração glicêmica.',
      '(D) Realizar teste oral de tolerância à glicose de 75g.'
    ],
    correctAnswer: 2,
    explanation: "Pelo critério brasileiro (Ministério da Saúde, FEBRASGO, SBD), uma glicemia de jejum entre 92 e 125 mg/dL em qualquer fase da gestação já faz o diagnóstico de diabetes mellitus gestacional, sem necessidade de outro teste. A glicemia de 93 mg/dL desta gestante se encaixa nessa faixa.\n\nO tratamento começa com mudanças de estilo de vida: orientação nutricional, atividade física regular e automonitorização da glicemia capilar. Se as metas glicêmicas não forem atingidas em cerca de duas semanas, inicia-se a insulina, que é o fármaco de escolha na gravidez.",
    commentary: "Insulinoterapia imediata (A): a insulina é indicada quando dieta e exercício não alcançam as metas, e não logo no diagnóstico.\n\nHipoglicemiante oral imediato (B): não é a primeira opção no Brasil; os orais atravessam a placenta e ficam restritos a situações em que a insulina não é viável.\n\nTOTG 75 g (D): o diagnóstico já está feito pela glicemia de jejum; o TOTG entre 24 e 28 semanas é para quem teve jejum normal no início do pré-natal.",
    tip: "Jejum de 92 a 125 mg/dL na gestação = DMG: dieta, exercício e monitorização; insulina se não controlar.",
    reference: 'Rastreamento e diagnóstico de diabetes mellitus gestacional no Brasil. © 2017 Organização Pan-Americana da Saúde. Ministério da Saúde. Federação Brasileira das Associações de Ginecologia e Obstetrícia. Sociedade Brasileira de Diabetes. Tratado de obstetrícia FEBRASGO / editores Cesar Eduardo Fernandes, Marcos Felipe Silva de Sá; coordenação Coríntio Mariani Neto. – 1. ed. – Rio de Janeiro: Elsevier, 2019.',
    tags: ['obstetrícia', 'diabetes']
  },
  {
    id: 'tp2023-85',
    module: 'Ginecologia e Obstetrícia',
    text: 'Gestante, G1P0, 33 semanas e 4 dias, procura a emergência da Maternidade com queixas de astenia, mal-estar, prurido em face plantar e palma das mãos, náuseas e perda ponderal de 4kg nas últimas 2 semanas. Alega que, há uma semana, apresentou quadro de prurido em abdome e foi orientada a utilizar loratadina 5mg/dia, à noite, por cinco dias, com melhora parcial. Ao exame físico: bom estado geral, mucosas úmidas e coradas, ictérica (2+/4), PA 122x78mmHg, FC 63bpm, FR 17irpm, Tax 36,1ºC. Ao exame obstétrico: AU 32cm, BCF 153bpm, tônus uterino normal, toque vaginal não se aplica. Presença de escoriações em abdome, palma das mãos e planta dos pés. Diante do caso clínico acima, qual alternativa define o diagnóstico e a conduta a ser realizada?',
    options: [
      '(A) Colestase gestacional. Dosar ácidos biliares séricos e prescrever ácido ursodesoxicólico 5mg/kg/dia para controle clínico e laboratorial.',
      '(B) Infecção por Sarcoptes scabiei. Ivermectina 200mcg/kg/dia por 7-14 dias, associado ao banho com loção de permetrina a 5% e orientações de higiene das roupas de cama e vestuário.',
      '(C) Hepatite B. Solicitar as demais sorologias e carga viral; realizar imunoglobulina para proteção fetal.',
      '(D) Colecistite gestacional. Avaliar a possibilidade de utilizar sintomáticos até adquirir a viabilidade do feto para realizar o tratamento cirúrgico.'
    ],
    correctAnswer: 0,
    explanation: "Prurido intenso no terceiro trimestre, que começa ou predomina em palmas e plantas, piora à noite, sem lesões primárias de pele (só escoriações de coçar) e com icterícia leve, é o quadro da colestase intra-hepática da gestação. A causa envolve suscetibilidade genética aos estrogênios e progesterona, que dificultam a excreção dos ácidos biliares.\n\nO diagnóstico é confirmado pela dosagem de ácidos biliares séricos elevados, e as transaminases costumam estar aumentadas. Para a mãe a evolução é benigna, mas há risco fetal (prematuridade, mecônio e óbito fetal, sobretudo com ácidos biliares muito altos). O tratamento é com ácido ursodesoxicólico, vigilância fetal e programação do parto conforme o nível dos ácidos biliares.",
    commentary: "Escabiose (B): causa prurido noturno com pápulas e túneis em dobras, punhos e espaços interdigitais, sem icterícia; e a ivermectina não é recomendada na gestação.\n\nHepatite B (C): não costuma ter o prurido palmoplantar como queixa principal; e a imunoglobulina é dada ao recém-nascido logo após o parto, junto com a vacina, e não à gestante para proteção fetal.\n\nColecistite (D): cursa com dor em hipocôndrio direito, febre e sinal de Murphy, ausentes; e a colecistectomia pode ser feita na gestação, sem esperar a viabilidade fetal.",
    tip: "Prurido palmoplantar noturno no 3º trimestre, sem lesões = colestase gestacional: ácidos biliares e ácido ursodesoxicólico.",
    reference: 'Freitas, F et al. Rotinas em Obstetrícia. 6Ed. Porto Alegre: Artmed, 2011.',
    tags: ['obstetrícia']
  },
  {
    id: 'tp2023-86',
    module: 'Ginecologia e Obstetrícia',
    text: 'Puérpera de 28 anos apresenta sangramento uterino em grande quantidade, quarenta minutos pós-parto vaginal, sem intercorrências. AP: diabetes gestacional, polidrâmnio e feto Grande para Idade Gestacional (GIG). Exame físico: FC 110bpm, PA 100x60mmHg, útero com tônus diminuído. O índice de choque, o principal fator de risco para hemorragia pós-parto e o tratamento inicial recomendados são, respectivamente:',
    options: [
      '(A) 1,83 / Diabetes gestacional; infusão de metilergometrina.',
      '(B) 1,1 / Sobredistensão uterina; infusão de ocitocina + ácido tranexâmico.',
      '(C) 1,83 / Sobredistensão uterina; infusão de ocitocina + misoprostol.',
      '(D) 1,1 / Diabetes gestacional; infusão de ocitocina + ácido tranexâmico.'
    ],
    correctAnswer: 1,
    explanation: "O índice de choque é a frequência cardíaca dividida pela pressão sistólica: 110/100 = 1,1. Valores acima de 0,9 no pós-parto indicam perda volumosa e necessidade de atenção, mesmo com pressão ainda aparentemente aceitável.\n\nO sangramento ocorre com útero hipotônico, logo a causa é atonia uterina, a principal causa de hemorragia pós-parto. O fator de risco central aqui é a sobredistensão uterina, produzida pelo polidrâmnio e pelo feto grande. O tratamento inicial é massagem uterina e ocitocina, associadas ao ácido tranexâmico, que deve ser dado o mais cedo possível (até 3 horas do parto).",
    commentary: "1,83 / diabetes gestacional / metilergometrina (A): o índice está errado; o diabetes age indiretamente, pelo feto grande e polidrâmnio; e a metilergometrina é opção de segunda linha, não a primeira escolha.\n\n1,83 / sobredistensão / ocitocina e misoprostol (C): o valor 1,83 sai de dividir a frequência cardíaca pela pressão diastólica (110/60), e o índice usa a sistólica; o misoprostol é alternativa adicional, não a dupla inicial padrão.\n\n1,1 / diabetes gestacional (D): o índice e o tratamento estão certos, mas o fator de risco mais direto para a atonia é a sobredistensão uterina.",
    tip: "Índice de choque = FC/PAS (acima de 0,9 alerta). Atonia: ocitocina + ácido tranexâmico nas 3 primeiras horas.",
    reference: 'Febrasgo - Tratado de Ginecologia. Disponível em: Minha Biblioteca, Grupo GEN, 2018.',
    tags: ['obstetrícia', 'hemorragia']
  },
  {
    id: 'tp2023-87',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher, Gesta II, Para I, procura o pronto atendimento da maternidade com queixa de apresentar perda de uma secreção mucosa pela vagina. Refere dores abdominais em cólica há 2 dias e está com 28 semanas de gestação. Na sua primeira gestação, teve um parto vaginal prematuro com 32 semanas e o recém-nascido permaneceu 21 dias na UTI, mas teve alta em boas condições. Ao exame clínico, não apresentava nada digno de nota e, ao obstétrico, estava com AU de 28, FCF 136bpm, dinâmica uterina com 2 contrações em 10 minutos. Ao toque, o colo estava centrado, médio, pérvio para 2cm, membrana íntegra e apresentação pélvica alta e móvel. Frente ao quadro descrito, é correto se afirmar que deve-se:',
    options: [
      '(A) Indicar cesária, por ser apresentação pélvica e prematuro, mas antes deve fazer sulfato de magnésio para neuroproteção fetal.',
      '(B) Orientar a gestante a repouso domiciliar com abstinência sexual, prescrever uterolítico, introduzir antibiótico e retorno, se não melhorar.',
      '(C) Internar, observar sem medicar pelo período de latência e, se depois voltar a ter contrações, entrar com uterolítico até atingir o termo.',
      '(D) Internar, avaliar a vitalidade fetal, entrar com uterolítico, fazer a corticoterapia e introduzir antibiótico para prevenção da infecção pelo Streptococcus do Grupo B.'
    ],
    correctAnswer: 3,
    explanation: "Gestante de 28 semanas com contrações regulares e colo já modificado (médio, centrado e com 2 cm), membranas íntegras e antecedente de parto prematuro está em trabalho de parto prematuro. Nessa idade gestacional, prolongar a gravidez por pelo menos 48 horas traz grande benefício ao recém-nascido.\n\nA conduta é internar, avaliar a vitalidade fetal, iniciar tocolítico (como nifedipino ou atosibana) para ganhar tempo para o corticoide (betametasona) agir na maturação pulmonar fetal, e iniciar profilaxia antibiótica para estreptococo do grupo B, já que a pesquisa de colonização não foi feita. Abaixo de 32 semanas, com parto iminente, também se usa sulfato de magnésio para neuroproteção fetal.",
    commentary: "Cesárea imediata por apresentação pélvica (A): não há indicação de interromper agora; o trabalho de parto pode ser inibido, e a via de parto só é discutida se ele progredir.\n\nRepouso domiciliar (B): trabalho de parto prematuro com colo modificado exige internação; repouso e abstinência sexual não têm eficácia comprovada para impedir o parto.\n\nObservar sem medicar até o termo (C): perder tempo sem corticoide e sem tocólise piora o prognóstico do prematuro; além disso, a tocólise é usada por curto prazo, não até o termo.",
    tip: "TPP antes de 34 semanas: internar, tocolítico, corticoide e profilaxia para EGB; abaixo de 32 semanas, magnésio.",
    reference: 'saude.gov.br. https://bvsms.saude.gov.br › gestacao_alto_risco. https://fi-admin.bvsalud.org/document/view/gatn7. https://www.febrasgo.org.br/rbgo/uploads/arquivos/html/2009-31-tratamento-do-trabalho-de-parto-prematuro.',
    tags: ['obstetrícia', 'prematuridade']
  },
  {
    id: 'tp2023-88',
    module: 'Ginecologia e Obstetrícia',
    text: '26 anos, secundigesta com 1 abortamento anterior há 3 anos, portadora do vírus HIV, em uso regular de tenofovir, lamivudina e dolutegravir. Apresenta carga viral menor que 1000 cópias/mL com 36 semanas, tendo indicação de zidovudina intravenosa até o clampeamento do cordão. Apresentação cefálica. A conduta em relação ao parto é:',
    options: [
      '(A) Interromper por cesárea com 39 semanas.',
      '(B) Induzir com ocitocina na 37ª semana.',
      '(C) Aguardar pelo parto vaginal.',
      '(D) Iniciar prostaglandina via vaginal com 37 semanas.'
    ],
    correctAnswer: 2,
    explanation: "Pelo protocolo do Ministério da Saúde para prevenção da transmissão vertical do HIV, a via de parto é decidida pela carga viral medida a partir de 34 semanas. Quando ela está inferior a 1.000 cópias/mL, a cesariana eletiva não reduz de forma relevante a transmissão, e a via de parto segue a indicação obstétrica.\n\nEsta gestante usa a terapia antirretroviral corretamente, tem carga viral inferior a 1.000 cópias/mL com 36 semanas e feto cefálico, então o correto é aguardar o trabalho de parto espontâneo e o parto vaginal. A cesariana nas mulheres vivendo com HIV tem mais complicações pós-operatórias e só é eletiva quando a carga viral é igual ou maior que 1.000 cópias/mL ou desconhecida.",
    commentary: "Cesárea com 39 semanas (A): a cesariana eletiva por HIV fica para carga viral igual ou maior que 1.000 cópias/mL ou desconhecida após 34 semanas (nesse caso, programada com 38 semanas), não para esta paciente.\n\nIndução com ocitocina na 37ª semana (B): não há indicação obstétrica para antecipar o parto; o HIV controlado não justifica indução.\n\nProstaglandina vaginal com 37 semanas (D): da mesma forma, não há motivo para preparar o colo e induzir; o caminho é esperar o trabalho de parto espontâneo.",
    tip: "HIV na gestação: carga viral abaixo de 1.000 após 34 semanas = parto vaginal; acima ou desconhecida = cesárea eletiva.",
    reference: 'Ministério da saúde. Protocolo clínico e diretrizes terapêuticas para prevenção da transmissão vertical de hiv, sífilis e hepatites virais. Página 108. 2022. Disponível em https://bvsms.saude.gov.br/bvs/publicacoes/protocolo_clinico_hiv_sifilis_hepatites.pdf',
    tags: ['obstetrícia', 'infecções']
  },
  {
    id: 'tp2023-89',
    module: 'Ginecologia e Obstetrícia',
    text: 'Paciente de 30 anos de idade queixa-se de aumento do fluxo menstrual, sangramento intenso por 7 dias, com eliminação de coágulos e cólicas importantes. Essa queixa tem cerca de um ano de duração. Refere ter engravidado uma vez, tendo parto normal há 3 anos, sem intercorrência. Usa preservativo como método contraceptivo. Ao exame físico, observa-se colo normal, com moderada quantidade de sangue coletado na vagina. O toque bimanual mostra útero aumentado a 10cm da sínfise púbica, superfície irregular, móvel, discretamente doloroso à palpação. Pensando nas causas de sangramento uterino anormal, a primeira hipótese diagnóstica deve ser:',
    options: [
      '(A) Endometriose pélvica',
      '(B) Sarcoma uterino',
      '(C) Pólipo endocervical',
      '(D) Mioma uterino intramural'
    ],
    correctAnswer: 3,
    explanation: "Mulher em idade reprodutiva com sangramento menstrual aumentado, coágulos e cólicas há um ano e útero aumentado, de contorno irregular e móvel ao toque bimanual tem como primeira hipótese leiomioma uterino, o tumor pélvico mais comum da mulher.\n\nNa classificação PALM-COEIN do sangramento uterino anormal, os miomas são causa estrutural. Os intramurais aumentam o volume do útero e deformam seu contorno; quando distorcem a cavidade, aumentam a superfície endometrial e prejudicam a contração do miométrio, o que explica o aumento do fluxo. O ultrassom transvaginal é o exame inicial para confirmar e mapear os nódulos.",
    commentary: "Endometriose pélvica (A): manifesta-se por dismenorreia progressiva, dor pélvica crônica, dispareunia e infertilidade, e não aumenta o útero de forma irregular; quem aumenta o útero é a adenomiose, mas de modo difuso e regular.\n\nSarcoma uterino (B): é raro, mais comum após a menopausa, e costuma crescer rapidamente; não é a primeira hipótese numa mulher de 30 anos com quadro de um ano.\n\nPólipo endocervical (C): seria visto no exame especular saindo pelo orifício do colo (que aqui estava normal) e causa sangramento intermenstrual ou pós-coito, sem aumento do útero.",
    tip: "Sangramento aumentado + útero grande, irregular e móvel = mioma, até que se prove o contrário.",
    reference: 'Donnez J, Dolmans MM. Uterine fibroid management: from the present to the future. Hum Reprod Update. 2016 Nov;22(6):665-686. doi: 10.1093/humupd/dmw023. Epub 2016 Jul 27. PMID: 27466209; PMCID: PMC5853598. Febrasgo, . Febrasgo - Tratado de Ginecologia. Disponível em: Minha Biblioteca, Grupo GEN, 2018.',
    tags: ['ginecologia geral']
  },
  {
    id: 'tp2023-90',
    module: 'Ginecologia e Obstetrícia',
    text: 'Na avaliação diagnóstica da endometriose, está correto afirmar que:',
    options: [
      '(A) Valores de CA 125 guardam baixa correlação com o diagnóstico.',
      '(B) Os valores de CA 125 são imprescindíveis para o diagnóstico.',
      '(C) A videolaparoscopia deve ser obrigatória para o diagnóstico e instituição de um tratamento.',
      '(D) Geralmente os casos de endometriose com acometimento intestinal apresentam valores elevados de CA 125.'
    ],
    correctAnswer: 0,
    explanation: "O CA-125 é um marcador produzido por vários epitélios (ovário, peritônio, pleura, endométrio, tubas) e se eleva em muitas situações benignas, como menstruação, gestação, doença inflamatória pélvica e miomas, além do câncer de ovário. Na endometriose, ele fica normal na maior parte dos casos, principalmente nas formas leves.\n\nPor isso sua correlação com o diagnóstico é baixa: um resultado normal não exclui a doença, e um elevado não a confirma. O diagnóstico da endometriose hoje se apoia na clínica e nos exames de imagem (ultrassom transvaginal com preparo intestinal e ressonância), e o tratamento clínico pode ser iniciado com base na suspeita, sem confirmação cirúrgica obrigatória.",
    commentary: "CA-125 imprescindível (B): o exame tem baixa sensibilidade e especificidade e não é necessário para diagnosticar a doença.\n\nVideolaparoscopia obrigatória (C): ela permite ver e biopsiar as lesões, mas não é exigida antes de iniciar o tratamento clínico; fica para casos com indicação cirúrgica ou falha do tratamento.\n\nEndometriose intestinal com CA-125 alto (D): a forma profunda pode elevar um pouco o marcador, mas isso não é regra e não serve para identificar acometimento intestinal, que é avaliado por imagem.",
    tip: "Endometriose: CA-125 não diagnostica; suspeita clínica e imagem bastam para iniciar o tratamento.",
    reference: 'Novak, Tratado de Ginecologia. Rio de Janeiro: Guanabara-Koogan. 16.ed, 2021. Ginecologia de Willians, Hoffman et al. McGrawHIll 2ª edição, 2014.',
    tags: ['ginecologia geral', 'DIP']
  },
  {
    id: 'tp2023-91',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher de 24 anos comparece à UBS em busca de método contraceptivo. Em seu histórico apresenta crises de cefaleia unilateral pulsátil precedidas de escotomas, que ocorrem com maior frequência no período menstrual. Entre os contraceptivos, a indicação correta para essa situação é:',
    options: [
      '(A) Adesivo contraceptivo contendo estrogênio e progestagênio.',
      '(B) Pílula combinada contendo estrogênio e progestagênio.',
      '(C) Pílula de progestagênio.',
      '(D) Injetável mensal contendo estrogênio e progestagênio.'
    ],
    correctAnswer: 2,
    explanation: "Cefaleia unilateral, pulsátil, ligada à menstruação e precedida por escotomas é enxaqueca com aura. A aura é fator de risco independente para acidente vascular cerebral isquêmico, e o estrogênio dos métodos combinados aumenta ainda mais esse risco.\n\nPelos critérios de elegibilidade da OMS, enxaqueca com aura é categoria 4 (contraindicação absoluta) para todos os métodos com estrogênio, em qualquer via: pílula, adesivo, anel e injetável mensal. Ficam disponíveis os métodos só de progestagênio (pílula, injetável trimestral, implante, DIU hormonal) e os não hormonais, como o DIU de cobre. Entre as alternativas, a pílula de progestagênio é a única adequada.",
    commentary: "Adesivo combinado (A): libera estrogênio pela pele, com o mesmo risco trombótico das pílulas combinadas; contraindicado.\n\nPílula combinada (B): contém estrogênio e é categoria 4 na enxaqueca com aura.\n\nInjetável mensal (D): também combina estrogênio e progestagênio, portanto tem a mesma contraindicação.",
    tip: "Enxaqueca com aura = nenhum método com estrogênio (OMS 4); use progestagênio isolado ou DIU de cobre.",
    reference: 'Sacco S, Merki-Feld GS, Ægidius KL et al. Hormonal contraceptives and risk of ischemic stroke in women with migraine: a consensus statement from the European Headache Federation (EHF) and the European Society of Contraception and Reproductive Health (ESC). J Headache Pain. 2017;18(1):108.',
    tags: ['contracepção']
  },
  {
    id: 'tp2023-92',
    module: 'Ginecologia e Obstetrícia',
    text: 'Paciente de 36 anos, tentando engravidar há 4 anos, sem sucesso. Teve antecedente de aborto retido, com a necessidade de curetagem uterina. Mantém relações sexuais frequentes, ciclos menstruais regulares. Nega dismenorreia. Refere mãe menopausada aos 42 anos e antecedente de apendicectomia. Procurou o ginecologista para investigar a infertilidade. Quais exames deveriam ser solicitados para a propedêutica básica da infertilidade?',
    options: [
      '(A) Espermograma, TSH, T4L, AMH, ultrassom transvaginal, histerossalpingografia e histeroscopia diagnóstica.',
      '(B) Espermograma, AMH, ultrassom transvaginal, histerossalpingografia.',
      '(C) Espermograma, TSH, T4L, FSH, estradiol, ultrassom transvaginal, histerossalpingografia e histeroscopia diagnóstica.',
      '(D) Espermograma, TSH, T4L, FSH, estradiol, ultrassom transvaginal, histerossalpingografia, histeroscopia diagnóstica e cariótipo do casal.'
    ],
    correctAnswer: 1,
    explanation: "Infertilidade é a falta de gestação após 12 meses de relações regulares sem contracepção (6 meses quando a mulher tem 35 anos ou mais). Esta paciente de 36 anos tenta há 4 anos, então a investigação já deveria ter começado.\n\nA propedêutica básica cobre os fatores principais com poucos exames: espermograma para o fator masculino, que responde por cerca de metade dos casos; avaliação da reserva ovariana, pelo hormônio antimülleriano (ou FSH e estradiol no início do ciclo), importante pela idade e pela menopausa precoce da mãe; ultrassom transvaginal para útero, ovários e contagem de folículos antrais; e histerossalpingografia para a permeabilidade tubária, já que ela teve curetagem e apendicectomia. Com ciclos regulares, a ovulação é presumida.",
    commentary: "Com TSH, T4 livre e histeroscopia (A): a histeroscopia não faz parte da propedêutica básica, sendo indicada quando a histerossalpingografia ou o ultrassom sugerem alteração da cavidade; e a função tireoidiana não é obrigatória para todas.\n\nTireoide, FSH, estradiol e histeroscopia (C): acrescenta exames que só entram com indicação específica, além de repetir a avaliação de reserva que o AMH já fornece.\n\nTudo isso mais cariótipo do casal (D): o cariótipo é para perdas gestacionais de repetição ou alteração grave do espermograma, não para a investigação inicial de um casal com um único aborto.",
    tip: "Infertilidade básica: espermograma, reserva ovariana (AMH), ultrassom transvaginal e histerossalpingografia.",
    reference: 'Infertilidade da prática clínica à laboratorial. Elvio Tognotti. 1 Ed, 2014, Editora Manole. ENDOCRINOLOGIA GINECOLÓGICA CLINICA E INFERTILIDADE. FRITZ, MARC A./SPEROFF, LEON, 2015, Revinter RJ.',
    tags: ['infertibilidade']
  },
  {
    id: 'tp2023-93',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher, 32 anos, G3P3, laqueada, fez exame colpocitológico de rotina na Unidade Básica de Saúde, cujo laudo veio compatível com ASC-H (células escamosas atípicas de significado indeterminado). Segundo as diretrizes do Ministério da Saúde/INCA (Instituto Nacional do Câncer), qual conduta deve ser adotada?',
    options: [
      '(A) Encaminhar para histerectomia.',
      '(B) Realizar biópsia.',
      '(C) Repetir a colpocitologia em 6 meses.',
      '(D) Realizar colposcopia.'
    ],
    correctAnswer: 3,
    explanation: "ASC-H significa células escamosas atípicas em que não se pode afastar lesão de alto grau. Mesmo sem ser um diagnóstico definitivo, uma parte relevante desses casos corresponde a NIC 2 ou 3 na histologia.\n\nPor isso as diretrizes brasileiras do INCA determinam encaminhar para colposcopia, independentemente da idade (com particularidades apenas para menores de 25 anos e gestantes, que também vão à colposcopia). Na colposcopia, se houver achado anormal, faz-se biópsia dirigida ou, em casos selecionados, a exérese da zona de transformação.",
    commentary: "Histerectomia (A): é tratamento desproporcional; nem há diagnóstico histológico, e as lesões precursoras são tratadas com exérese da zona de transformação.\n\nBiópsia (B): deve ser guiada pela colposcopia, que mostra onde está a área alterada; não se faz biópsia às cegas antes desse exame.\n\nRepetir a citologia em 6 meses (C): é a conduta para ASC-US e lesão de baixo grau em determinadas idades, não para ASC-H, pelo risco de lesão de alto grau.",
    tip: "ASC-H, HSIL, AGC ou atipias de origem indefinida: colposcopia direto.",
    reference: 'Diretrizes brasileiras para o rastreamento do câncer do colo uterino. Segunda edição revista, ampliada e atualizada. INCA, RJ 2016.',
    tags: ['ginecologia oncológica', 'patologia do trato genital inferior']
  },
  {
    id: 'tp2023-94',
    module: 'Ginecologia e Obstetrícia',
    text: 'Paciente de 54 anos procura atendimento ginecológico para alívio dos fogachos que surgiram há 6 anos, por ocasião da menopausa. Refere ainda alteração do sono e secura vaginal, o que traz desconforto na qualidade de vida. Apresenta hábitos de vida saudáveis e trouxe exames recentes realizados com seu cardiologista, sem alterações dignas de nota. Trata-se de uma hipertensão leve e controlada com medicação. Nos antecedentes familiares, refere mãe que sofreu recente fratura do colo do fêmur. Questiona sobre a possibilidade de iniciar tratamento para menopausa. Determine a conduta adequada para o caso:',
    options: [
      '(A) Paciente apresenta contraindicação para iniciar a terapia hormonal da menopausa por já ter ultrapassado a janela de oportunidade, que é de 5 anos.',
      '(B) A terapia hormonal sistêmica da menopausa está indicada neste caso por via oral ou transdérmica para alívio dos sintomas vasomotores, da atrofia vaginal e na prevenção da osteoporose.',
      '(C) Pacientes hipertensas apresentam contraindicação para o uso da terapia hormonal, pois o uso do estrogênio piora o quadro.',
      '(D) Para essa paciente, a melhor opção seria o tratamento tópico vaginal exclusivo, obedecendo os critérios da OMS (Organização Mundial de Saúde).'
    ],
    correctAnswer: 1,
    explanation: "A terapia hormonal da menopausa é o tratamento mais eficaz para os sintomas vasomotores e também melhora a atrofia geniturinária e previne a perda óssea. O benefício supera os riscos quando é iniciada antes dos 60 anos ou nos primeiros 10 anos após a menopausa, a chamada janela de oportunidade.\n\nEsta paciente tem 54 anos e está a 6 anos da menopausa, com fogachos, distúrbio do sono e secura vaginal que prejudicam a qualidade de vida, exames cardiológicos normais e hipertensão leve controlada, que não contraindica o tratamento. O histórico de fratura de fêmur da mãe aumenta o interesse na proteção óssea. Ela tem útero, então o estrogênio deve ser associado a progestagênio; a via transdérmica é interessante em hipertensas por ter menor efeito trombótico.",
    commentary: "Janela de 5 anos (A): o limite usado é de 10 anos desde a menopausa ou 60 anos de idade, e ela está dentro dele.\n\nHipertensão contraindica (C): a hipertensão controlada não é contraindicação; o que contraindica são doença coronariana, AVC, tromboembolismo prévio e câncer de mama, entre outros.\n\nSó tratamento vaginal tópico (D): melhora a secura vaginal, mas não controla os fogachos nem protege o osso, que são queixas e objetivos importantes nesta paciente.",
    tip: "TH da menopausa: iniciar antes dos 60 anos ou até 10 anos da menopausa; hipertensão controlada não contraindica.",
    reference: 'Endocrinologia Feminina. César Eduardo Fernandes, Luciano de Melo Pompei – Barueri, SP: Manole, 2016',
    tags: ['climatério', 'terapia hormonal']
  },
  {
    id: 'tp2023-95',
    module: 'Ginecologia e Obstetrícia',
    text: 'Paciente de 74 anos, viúva, moradora de casa de repouso para idosos, apresenta queixa de sangramento vaginal em pequena quantidade há 7 dias. É hipertensa crônica e diabética. Menopausada desde os 50 anos, nega terapia de reposição hormonal, teve 5 gestações, sendo elas 4 partos vaginais e 1 aborto sem necessidade de curetagem. Conta que há mais de 10 anos tem a sensação de peso e bola na vagina, e que muitas vezes perde urina aos pequenos esforços. Seu último exame de “prevenção” foi em 2010. Ao exame físico, observa-se a seguinte imagem: A principal hipótese diagnóstica é:',
    image: '/images/tp2023-95.webp',
    options: [
      '(A) Prolapso uterovaginal',
      '(B) Carcinoma de colo uterino',
      '(C) Mioma parido',
      '(D) Pólipo endometrial friável'
    ],
    correctAnswer: 0,
    explanation: "Idosa com cinco gestações (quatro partos vaginais), sensação de peso e de bola na vagina há mais de 10 anos e perda de urina aos esforços tem a história clássica de distopia genital, causada pelo enfraquecimento do assoalho pélvico pelos partos, pela idade e pelo hipoestrogenismo. A imagem mostra o útero e as paredes vaginais exteriorizados além do introito, ou seja, prolapso uterovaginal completo.\n\nO pequeno sangramento se explica pela mucosa exposta, ressecada e atrófica, que sofre atrito e ulcera (úlcera de decúbito). Mesmo assim, por ser sangramento pós-menopausa em mulher sem rastreio há anos, a úlcera e o colo devem ser avaliados com citologia e, se necessário, biópsia, antes de tratar o prolapso com pessário ou cirurgia.",
    commentary: "Carcinoma de colo (B): o sangramento pós-menopausa e a falta de rastreio exigem afastar essa hipótese, mas a história longa de bola na vagina e a imagem de órgão exteriorizado definem o prolapso como diagnóstico principal.\n\nMioma parido (C): é um mioma submucoso que sai pelo colo, mais comum em mulheres no menacme com sangramento volumoso; não explica a exteriorização do útero com paredes vaginais.\n\nPólipo endometrial friável (D): pode causar sangramento pós-menopausa, mas é pequeno, intrauterino e não gera sensação de bola na vagina nem a imagem descrita.",
    tip: "Multípara idosa com bola na vagina e incontinência aos esforços = prolapso; sangramento vem da mucosa exposta.",
    reference: 'Brito LGO, Juliato CRT, Castro EB; Prolapso do Órgãos Genitais; Tratado de ginecologia Febrasgo / editores Cesar Eduardo Fernandes, Marcos Felipe Silva de Sá; 1. ed.;65: (2020-2052)- Rio de Janeiro : Elsevier, 2019.',
    tags: ['ginecologia geral', 'uroginecologia']
  },
  {
    id: 'tp2023-96',
    module: 'Ginecologia e Obstetrícia',
    text: 'A classificação IOTA (International Ovarian Tumor Analysis) é uma padronização quanto à descrição de tumores anexiais por exame ultrassonográfico. Assinale a alternativa que contém apenas critérios de malignidade:',
    options: [
      '(A) Tumor multilocular > 7cm sem áreas sólidas e com sombra acústica.',
      '(B) Componente sólido menor que 7mm e vascularização ausente.',
      '(C) Tumor sólido de contornos irregulares e vascularização abundante.',
      '(D) Tumor cístico sem debris e unilocular.'
    ],
    correctAnswer: 2,
    explanation: "As regras simples do grupo IOTA usam cinco características ultrassonográficas de benignidade (B) e cinco de malignidade (M) para classificar massas anexiais. Sinais de malignidade: tumor sólido irregular (M1), ascite (M2), quatro ou mais projeções papilares (M3), tumor multilocular sólido irregular com 10 cm ou mais (M4) e fluxo sanguíneo muito intenso ao Doppler (M5).\n\nSinais de benignidade: cisto unilocular (B1), componente sólido menor que 7 mm (B2), sombra acústica (B3), tumor multilocular liso menor que 10 cm (B4) e ausência de fluxo (B5). A alternativa C combina dois critérios de malignidade, tumor sólido irregular e vascularização abundante, o que caracteriza massa suspeita a ser encaminhada à oncologia ginecológica.",
    commentary: "Multilocular sem áreas sólidas e com sombra acústica (A): a sombra acústica é critério de benignidade, e um multilocular liso sem componente sólido também tende a ser benigno.\n\nComponente sólido menor que 7 mm sem fluxo (B): são dois critérios de benignidade (B2 e B5).\n\nCisto unilocular sem debris (D): o cisto unilocular é o critério B1, de benignidade.",
    tip: "IOTA maligno: sólido irregular, ascite, 4 ou mais papilas, multilocular sólido de 10 cm ou mais e muito fluxo.",
    reference: 'MASSAS ANEXIAIS: DESCRIÇÃO E INTERPRETAÇÃO ULTRASSONOGRÁFICA POR IOTA. REVISTA FÊMINA, FEBRASGO, 2021; 49: 6-11',
    tags: ['ginecologia oncológica', 'imagenologia']
  },
  {
    id: 'tp2023-97',
    module: 'Ginecologia e Obstetrícia',
    text: 'No rastreio do câncer de colo uterino, sobre a recomendação da citologia oncológica em mulheres com menos de 25 anos, está correto afirmar que:',
    options: [
      '(A) A sua prevenção e tratamento têm a mesma morbidade do que para mulheres mais velhas.',
      '(B) Está recomendada, porque a sua efetividade no diagnóstico de câncer do colo uterino é semelhante aos resultados observados em mulheres mais velhas.',
      '(C) Está recomendada, porque a progressão das lesões precursoras para o câncer de colo uterino tem alta incidência.',
      '(D) Não está recomendada, pela baixa incidência de câncer do colo do útero em mulheres jovens.'
    ],
    correctAnswer: 3,
    explanation: "As diretrizes brasileiras de rastreamento do câncer do colo do útero começam a coleta aos 25 anos para quem já iniciou a vida sexual. Antes dessa idade, o câncer invasor é raro, e a infecção pelo HPV e as lesões que ela causa costumam regredir sozinhas.\n\nAlém de detectar pouco câncer, rastrear mulheres jovens leva a muitos tratamentos de lesões que regrediriam. Os procedimentos excisionais no colo nessa faixa aumentam a morbidade obstétrica, sobretudo o risco de parto prematuro. Por isso o benefício não compensa e a coleta não é recomendada antes dos 25 anos.",
    commentary: "Mesma morbidade (A): tratar lesões em jovens traz mais prejuízo reprodutivo, justamente porque elas ainda vão engravidar, e muitas lesões regrediriam sem tratamento.\n\nMesma efetividade que em mais velhas (B): o rastreamento é menos eficiente nessa faixa, com pouca detecção de câncer e muitos achados transitórios.\n\nAlta progressão das lesões precursoras (C): ocorre o contrário; nas jovens, a maioria das lesões, inclusive parte das de grau 2, regride espontaneamente.",
    tip: "Rastreio do colo começa aos 25 anos: antes disso, pouco câncer, muita regressão e risco de tratar à toa.",
    reference: 'Zugaib Obstetrícia, Ed. Manole, 4ª edição, 2020. Novak, Tratado de Ginecologia. Rio de Janeiro: Guanabara-Koogan. 16.ed, 2021. Rezende, Obstetrícia, Guanabara-Koogan, 14ª edição, 2022.',
    tags: ['ginecologia oncológica']
  },
  {
    id: 'tp2023-98',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher, 26 anos, G4P3A0, branca, desempregada, sem parceria sexual no momento, procura atendimento em Pronto-Socorro Ginecológico, devido ao aparecimento de “caroços" na vulva e odor na vagina há mais ou menos 5 dias. Ao exame ginecológico, observam-se as lesões abaixo e um corrimento vaginal mal-cheiroso, branco e abundante. Qual o método para confirmação diagnóstica e o tratamento correto?',
    image: '/images/tp2023-98.webp',
    options: [
      '(A) VDRL e penicilina benzatina 2.400.000UI via intramuscular; repetir em 7 dias.',
      '(B) Teste rápido treponêmico e penicilina benzatina 2.400.000UI via intramuscular.',
      '(C) O diagnóstico é clínico. O tratamento deve ser iniciado com ácido tricloroacético a 90%.',
      '(D) Deve-se realizar biópsia para anatomopatológico e o tratamento é a completa ressecção com anestesia local.'
    ],
    correctAnswer: 1,
    explanation: "As lesões papulosas, úmidas e planas na vulva da imagem correspondem ao condiloma plano (condiloma lata), manifestação da sífilis secundária. São lesões muito ricas em treponemas, portanto altamente contagiosas, e frequentemente confundidas com verrugas por HPV.\n\nPelo fluxograma do Ministério da Saúde, o diagnóstico começa com o teste rápido treponêmico, complementado por teste não treponêmico (VDRL) para confirmar e servir de base ao seguimento. A sífilis secundária é sífilis recente, tratada com penicilina benzatina 2.400.000 UI por via intramuscular em dose única (1.200.000 UI em cada glúteo). O seguimento é feito com VDRL trimestral, e a parceria sexual deve ser testada e tratada.",
    commentary: "VDRL e penicilina repetida em 7 dias (A): o esquema em três doses semanais é para sífilis latente tardia ou de duração ignorada; a sífilis secundária se trata com dose única.\n\nDiagnóstico clínico e ácido tricloroacético (C): seria a conduta para condiloma acuminado (HPV), que tem lesões vegetantes, secas, em couve-flor, e não as pápulas planas e úmidas da sífilis.\n\nBiópsia e ressecção (D): não se resseca lesão de sífilis; a sorologia faz o diagnóstico e a penicilina resolve as lesões.",
    tip: "Pápulas planas e úmidas na vulva = condiloma plano (sífilis secundária): teste rápido e penicilina benzatina em dose única.",
    reference: 'PROTOCOLO CLÍNICO E DIRETRIZES TERAPÊUTICAS PARA PROFILAXIA PÓS-EXPOSIÇÃO (PEP) DE RISCO À INFECÇÃO PELO HIV, IST E HEPATITES VIRAIS (PCDT, MINISTÉRIO DA SAÚDE, 2021). TRATADO DE OBSTETRÍCIA DA FEBRASGO (ELSEVIER, 2019)',
    tags: ['IST']
  },
  {
    id: 'tp2023-99',
    module: 'Ginecologia e Obstetrícia',
    text: 'O atendimento de pessoas em situação de violência sexual exige o cumprimento dos princípios do sigilo, da ética e dos aspectos legais. Dessa forma, no atendimento de emergência a essas pacientes, deve-se realizar a seguinte abordagem:',
    options: [
      '(A) Solicitar Boletim de Ocorrência Policial para registrar a violência e, assim, o conhecimento da autoridade policial.',
      '(B) Realizar a notificação da violência pelo preenchimento da Ficha de Notificação/Investigação de Violência Doméstica, Sexual e/ou outras Violências (Ficha de notificação).',
      '(C) A assistência à saúde é prioritária e a recusa de atendimento pode ser caracterizada, ética e legalmente, como omissão.',
      '(D) Exigir primeiramente o laudo do Instituto Médico Legal (IML), documento elaborado para fazer prova criminal.'
    ],
    correctAnswer: 2,
    explanation: "Ao atender uma pessoa que sofreu violência sexual, a saúde vem antes de qualquer exigência policial ou pericial. Nenhum documento (boletim de ocorrência, laudo do IML) pode ser condição para atender, e negar atendimento configura omissão, com consequências éticas e legais.\n\nO atendimento de emergência inclui acolhimento, exame e registro detalhado em prontuário, anticoncepção de emergência, profilaxias de IST e HIV (até 72 horas), vacinação contra hepatite B quando indicada e apoio psicológico. Registrar a ocorrência na polícia é decisão da vítima; se o exame do IML não for feito, o prontuário pode servir de base para o laudo indireto.",
    commentary: "Exigir boletim de ocorrência (A): o registro policial não é obrigatório para receber atendimento e não pode ser pré-requisito.\n\nNotificação da violência (B): a notificação é compulsória e deve ser feita pelo serviço, mas é um instrumento de vigilância epidemiológica, não o princípio que orienta o atendimento de emergência; ela não substitui nem antecede o cuidado.\n\nExigir laudo do IML (D): a perícia é opcional para a vítima e nunca condição para o atendimento médico.",
    tip: "Violência sexual: atender primeiro, sem exigir BO ou IML; recusar atendimento é omissão.",
    reference: 'Ética em ginecologia e obstetrícia / Conselho Federal de Medicina. Câmara Técnica de Ginecologia e Obstetrícia. – Brasília: CFM, 2021.',
    tags: ['ética', 'saúde pública']
  },
  {
    id: 'tp2023-100',
    module: 'Ginecologia e Obstetrícia',
    text: 'Paciente, sexo feminino, 46 anos, em uso de DIU de cobre. Refere saída espontânea de secreção avermelhada pelo mamilo esquerdo há três semanas. Última mamografia aos 43 anos, sem alterações. Nega uso de medicamentos. Ao exame físico, mamas de médio volume, ptose grau dois, com saída de secreção serossanguinolenta, uniorificial, espontânea, com ponto de gatilho às 3 horas na mama esquerda. Não apresenta nódulo palpável. Qual conduta seria mais adequada para o diagnóstico desta paciente?',
    options: [
      '(A) Realizar mamografia e ultrassonografia e definir a conduta baseada nos resultados destes exames.',
      '(B) Coleta da secreção para exame citológico e, se o resultado for positivo para presença de células neoplásicas, solicitar mamografia e ultrassonografia.',
      '(C) Coleta da secreção para exame citológico e, se o resultado for negativo para presença de células neoplásicas, tranquilizar a paciente, pois não é câncer.',
      '(D) Solicitar exames de laboratório como TSH, T4 livre, T3 e prolactina, pois estamos diante de um caso de distúrbio hormonal.'
    ],
    correctAnswer: 0,
    explanation: "Descarga papilar espontânea, unilateral, uniductal (por um só orifício), serossanguinolenta e com ponto de gatilho é descarga papilar suspeita, chamada patológica. A causa mais comum é o papiloma intraductal, mas é preciso afastar carcinoma, cujo risco aumenta com a idade (aqui, 46 anos).\n\nA investigação começa por exames de imagem, mamografia e ultrassonografia, que identificam a maioria das lesões responsáveis e guiam a biópsia para o diagnóstico histológico. Se forem normais, a ressonância magnética ou a ductoscopia podem ajudar, e a excisão do ducto envolvido é uma opção.",
    commentary: "Citologia da secreção como primeiro passo (B): a citologia tem alta taxa de falso-negativo; não deve condicionar os exames de imagem, que precisam ser feitos de qualquer forma.\n\nCitologia negativa para tranquilizar (C): pelo mesmo motivo, um resultado negativo não exclui câncer e não permite liberar a paciente.\n\nDosagens hormonais (D): prolactina e tireoide são investigadas na descarga bilateral, multiductal, leitosa (galactorreia), e não na descarga sanguinolenta de um só ducto.",
    tip: "Descarga papilar espontânea, unilateral, uniductal e sanguinolenta = patológica: mamografia e ultrassom.",
    reference: 'Diretrizes em Mastologia, 2022, Sociedade Brasileira de Mastologia.',
    tags: ['mastologia']
  },
  {
    id: 'tp2022-81',
    module: 'Ginecologia e Obstetrícia',
    text: 'Paciente de 34 anos, G III C II, 10 semanas de gestação. Último preventivo há 5 anos (normal). Sobre a coleta de colpocitológico na gestação, é correto afirmar:',
    options: [
      '(A) A coleta do colpocitológico do colo uterino durante a gestação é contraindicada.',
      '(B) O exame está dispensado por tratar-se de gestante, sendo facultativa a sua coleta.',
      '(C) Paciente deverá fazer a coleta do exame de colpocitologia oncológica do colo uterino.',
      '(D) A interpretação do exame colpocitológico fica prejudicada durante a gravidez.'
    ],
    correctAnswer: 2,
    explanation: "A gravidez não muda o risco de câncer do colo do útero nem as regras do rastreamento. Pelas diretrizes brasileiras, a citologia é feita dos 25 aos 64 anos, a cada 3 anos depois de dois exames anuais normais. Esta paciente fez o último preventivo há 5 anos, então está com o rastreamento atrasado e deve colher o exame.\n\nO pré-natal é uma ótima oportunidade para isso, já que muitas mulheres só procuram o serviço de saúde nessa fase. A coleta é segura na gestação quando feita com técnica cuidadosa; como a junção escamocolunar costuma estar exteriorizada, a amostra da ectocérvice geralmente é adequada.",
    commentary: "Coleta contraindicada na gestação (A): não há contraindicação; o exame com espátula e escova, feito com delicadeza, não aumenta o risco de perda gestacional.\n\nExame dispensado por ser gestante (B): a gestante segue a mesma periodicidade e faixa etária das demais mulheres; dispensar o exame atrasaria ainda mais um rastreamento já vencido.\n\nInterpretação prejudicada, adiar para depois do parto (D): as alterações da gravidez são conhecidas pelo citopatologista e não impedem a leitura; adiar faria perder uma chance de detectar lesões precursoras.",
    tip: "Gestante segue o rastreamento normal do colo (25 a 64 anos, a cada 3 anos): se está vencido, colhe no pré-natal.",
    reference: 'Diretrizes brasileiras para o rastreamento do câncer do colo do útero, INCA 2020.',
    tags: ['obstetrícia', 'rastreamento']
  },
  {
    id: 'tp2022-82',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher de 32 anos, nuligesta, resultado de citologia oncótica: ASC-US (células escamosas atípicas de significado indeterminado). Conduta preconizada pelo Ministério da Saúde:',
    options: [
      '(A) Repetir a colpocitologia em 6 meses.',
      '(B) Repetir a colpocitologia em 12 meses.',
      '(C) Fazer a colposcopia em 18 meses.',
      '(D) Colposcopia com biópsia dirigida.'
    ],
    correctAnswer: 0,
    explanation: "ASC-US (atipias de células escamosas de significado indeterminado) é a alteração citológica mais frequente e, na maioria das vezes, corresponde a alterações transitórias ou lesões de baixo grau que regridem sozinhas. Só uma pequena parte esconde lesão de alto grau.\n\nPor isso, nas diretrizes brasileiras de rastreamento citológico (INCA/Ministério da Saúde), a conduta para mulheres de 30 anos ou mais com ASC-US é repetir a citologia em 6 meses. Se a repetição vier normal, faz-se outra em 6 meses e, com dois exames normais, ela volta ao rastreamento de rotina. Se a alteração persistir (ASC-US ou mais grave), encaminha-se para colposcopia. Entre 25 e 29 anos, o intervalo de repetição é de 12 meses.",
    commentary: "Repetir em 12 meses (B): é o intervalo indicado para mulheres de 25 a 29 anos com ASC-US; esta paciente tem 32 anos.\n\nColposcopia em 18 meses (C): esse intervalo não existe nas diretrizes; a colposcopia é feita quando a atipia persiste na repetição, sem esperar tanto.\n\nColposcopia com biópsia de imediato (D): é a conduta para atipias mais suspeitas (ASC-H, lesão de alto grau, AGC); para um único ASC-US seria excesso de intervenção.",
    tip: "ASC-US: 30 anos ou mais repete em 6 meses; 25 a 29 anos repete em 12 meses. Persistiu, colposcopia.",
    reference: 'Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero, INCA 2016.',
    tags: ['ginecologia geral', 'rastreamento']
  },
  {
    id: 'tp2022-83',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher na menacme com ciclos regulares apresenta: Estradiol 300pg/mL, Progesterona 450ng/dL (fase lútea ref: 183-2390), LH 8,0 UI/L, FSH 8,0 UI/L. Podemos afirmar que ela:',
    options: [
      '(A) Está menstruada.',
      '(B) Está grávida.',
      '(C) Teve ovulação.',
      '(D) Está no climatério pré-menopausal.'
    ],
    correctAnswer: 2,
    explanation: "A chave está na progesterona: 450 ng/dL fica na faixa da fase lútea (183 a 2390 ng/dL), muito acima do valor da fase folicular. A progesterona alta só é produzida pelo corpo lúteo, que se forma a partir do folículo depois da ovulação. Então essa mulher ovulou e está na segunda metade do ciclo.\n\nOs demais exames combinam: estradiol dentro do esperado para a fase lútea e LH e FSH baixos (8 UI/L), sem pico ovulatório e sem a elevação típica da falência ovariana.",
    commentary: "Está menstruada (A): na menstruação, estradiol e progesterona estão baixos, por causa da queda do corpo lúteo; aqui a progesterona está em nível lúteo.\n\nEstá grávida (B): a progesterona alta não basta para afirmar gravidez, que é feita pela dosagem do beta-hCG, não informada.\n\nClimatério pré-menopausal (D): a perda da função ovariana eleva as gonadotrofinas, principalmente o FSH; com FSH de 8 UI/L e ciclos regulares, não há indício de climatério.",
    tip: "Progesterona em nível de fase lútea = houve ovulação (só o corpo lúteo produz progesterona em quantidade).",
    reference: 'Tratado de Ginecologia FEBRASGO, 2019.',
    tags: ['endocrinologia']
  },
  {
    id: 'tp2022-84',
    module: 'Ginecologia e Obstetrícia',
    text: 'Adolescente de 15 anos busca contracepção hormonal. Qual a orientação correta sobre autonomia e métodos?',
    options: [
      '(A) A escolha é de responsabilidade exclusiva do médico prescritor.',
      '(B) Uso hormonal interfere no amadurecimento do eixo gonadal.',
      '(C) DIUs e SIUs são contraindicados nesta idade.',
      '(D) Pode ser atendida sem responsável e tem direito ao sigilo e escolha informada.'
    ],
    correctAnswer: 3,
    explanation: "A adolescente de 15 anos tem direito a ser atendida sozinha, com privacidade e sigilo, inclusive para receber orientação e prescrição de anticoncepção. O sigilo só é quebrado em situações de risco à vida ou à saúde dela ou de terceiros, como violência ou abuso. Para o exame ginecológico, se ela concordar, basta a presença de um auxiliar ou acompanhante de sala, sem precisar do responsável.\n\nA escolha do método é compartilhada: o médico apresenta as opções seguras para a idade (todas são, inclusive os métodos de longa duração), e ela decide de forma informada. Vale reforçar o uso do preservativo junto com o método hormonal, para prevenir infecções sexualmente transmissíveis (dupla proteção).",
    commentary: "Escolha exclusiva do médico (A): contraria a autonomia e a decisão compartilhada; impor um método reduz a adesão e o vínculo.\n\nHormônio interfere no amadurecimento do eixo gonadal (B): não há essa interferência; os métodos hormonais são seguros após a menarca, e só o preservativo é pouco eficaz para evitar gravidez.\n\nDIU e SIU contraindicados nesta idade (C): os LARCs, métodos de longa ação e reversíveis (DIU de cobre, SIU de levonorgestrel e implante) são considerados de primeira linha para adolescentes, inclusive nulíparas, pela alta eficácia.",
    tip: "Adolescente: atendimento sem responsável, com sigilo e escolha informada; LARC é ótima opção e preservativo sempre junto.",
    reference: 'Manual SOGESP de Assistência Ginecológica a Adolescentes, 2021.',
    tags: ['ginecologia infanto-puberal', 'ética']
  },
  {
    id: 'tp2022-85',
    module: 'Ginecologia e Obstetrícia',
    text: 'Casal (mulher 35, homem 36) tentando engravidar. Ela tem histórico de infertilidade prévia. Ele já tem um filho. Sobre a investigação básica da infertilidade:',
    options: [
      '(A) Solicitar espermograma, avaliação da ovulação, cavidade uterina e permeabilidade tubária.',
      '(B) O parceiro é dispensado do espermograma por já ter um filho.',
      '(C) CA-125 baixo descarta endometriose.',
      '(D) USG transvaginal convencional é o padrão para permeabilidade tubária.'
    ],
    correctAnswer: 0,
    explanation: 'A investigação inicial da infertilidade deve contemplar o casal, incluindo espermograma e avaliação tubária (histerossalpingografia).',
    commentary: 'O fato de o parceiro ter um filho não garante fertilidade atual. A permeabilidade tubária é avaliada idealmente pela histerossalpingografia.',
    reference: 'Infertilidade – Propedêutica do casal infértil, Febrasgo 2020.',
    tags: ['infertilidade']
  },
  {
    id: 'tp2022-86',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher de 40 anos, nódulo mamário palpável. Mamografia BI-RADS 0. USG: nódulo hipoecogênico, regular, 1,2 cm, BI-RADS 3. Seguimento?',
    options: [
      '(A) Realizar ressonância mamária imediata.',
      '(B) Repetição da mamografia em 6 meses.',
      '(C) Indica-se biópsia com agulha grossa por ser palpável.',
      '(D) Repetição da ultrassonografia em 6 meses.'
    ],
    correctAnswer: 3,
    explanation: "Mulher de 40 anos com nódulo palpável: a mamografia veio BI-RADS 0 (inconclusiva, precisa de complementação), e a ultrassonografia mostrou nódulo hipoecoico, de contornos regulares, paralelo à pele (mais largo que alto) e com 1,2 cm. Essas características são de lesão provavelmente benigna, como fibroadenoma, e por isso receberam BI-RADS 3.\n\nNa categoria 3, a chance de câncer é muito baixa (até 2%), e a recomendação é controle de curto prazo com o mesmo exame que mostrou a lesão: nova ultrassonografia em 6 meses, seguida de controles até completar cerca de 2 anos de estabilidade. Se a lesão crescer ou mudar de aspecto, passa a ter indicação de biópsia.\n\nO antecedente familiar (tia materna, segundo grau, diagnóstico aos 66 anos) não coloca a paciente em alto risco.",
    commentary: "Ressonância mamária (A): é reservada a casos que a mamografia e a ultrassonografia não resolvem ou a mulheres de alto risco; uma tia com câncer depois da menopausa não configura alto risco.\n\nRepetir a mamografia em 6 meses (B): o nódulo foi caracterizado na ultrassonografia, então é ela que deve ser repetida para comparar a lesão.\n\nBiópsia com agulha grossa por ser palpável (C): o fato de ser palpável, isoladamente, não obriga a biópsia quando a imagem é típica de benignidade; a biópsia é indicada para BI-RADS 4 e 5 ou se houver mudança no controle.",
    tip: "BI-RADS 3: controle com o mesmo exame em 6 meses. BI-RADS 4 e 5: biópsia.",
    reference: 'Sistema BI-RADS, ACR.',
    tags: ['mastologia']
  },
  {
    id: 'tp2022-87',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher de 40 anos, USG (18/set): cisto unilocular ecorrefringente de 4,18 cm em ovário direito. Toque vaginal: consistência cística e dolorosa. Conduta?',
    options: [
      '(A) Laparoscopia imediata por suspeita de endometriose.',
      '(B) Conduta expectante com reavaliação em 6 meses.',
      '(C) Repetir o USG logo após a próxima menstruação.',
      '(D) Punção do cisto por USG.'
    ],
    correctAnswer: 2,
    explanation: 'Muitos cistos anexiais são funcionais (ovulatórios) e devem ser reavaliados após o período menstrual para confirmar resolução espontânea.',
    commentary: 'A probabilidade de ser um cisto funcional é alta. Repetir o exame após a menstruação ajuda a evitar cirurgias desnecessárias.',
    reference: 'Tratado de Ginecologia Febrasgo.',
    tags: ['ginecologia geral']
  },
  {
    id: 'tp2022-88',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher 52 anos, menopausa há 4 anos, fogachos intensos. Útero presente, endométrio 3mm, mioma intramural de 10mm. Mamografia BI-RADS 2. Sobre TH:',
    options: [
      '(A) Está indicada apenas a TH com estrogênio.',
      '(B) Pode receber TH combinada (estrogênio + progestagênio).',
      '(C) A presença de mioma contraindica o uso de TH.',
      '(D) Categoria 2 no BI-RADS contraindica o uso de estrogênio.'
    ],
    correctAnswer: 1,
    explanation: "Mulher de 52 anos, menopausada há 4 anos, com fogachos intensos que atrapalham sua vida: tem indicação de terapia hormonal (TH). Ela está na chamada janela de oportunidade (menos de 60 anos e menos de 10 anos de menopausa), quando os benefícios superam os riscos, e não apresenta contraindicações: não tem câncer de mama, trombose, doença hepática grave nem sangramento genital sem explicação.\n\nComo tem útero, precisa receber estrogênio associado a progestagênio. O progestagênio protege o endométrio da hiperplasia e do câncer que o estrogênio isolado provocaria.",
    commentary: "Apenas estrogênio (A): a TH só com estrogênio é reservada a mulheres sem útero (histerectomizadas); com útero, aumenta o risco de câncer de endométrio.\n\nMioma contraindica a TH (C): um mioma pequeno (10 mm) e assintomático não contraindica; recomenda-se apenas acompanhar o tamanho e os sintomas.\n\nBI-RADS 2 contraindica o estrogênio (D): a categoria 2 indica achado benigno; o que contraindica a TH é câncer de mama atual ou passado, não uma mamografia benigna.",
    tip: "Fogacho, menos de 60 anos e menos de 10 anos de menopausa, sem contraindicação: TH. Tem útero? Estrogênio + progestagênio.",
    reference: 'Consenso Brasileiro de Terapêutica Hormonal da Menopausa, 2018.',
    tags: ['climatério', 'terapia hormonal']
  },
  {
    id: 'tp2022-89',
    module: 'Ginecologia e Obstetrícia',
    text: 'Pós-parto recente, mastite em mama esquerda (eritema, dor, calor). Conduta clínica correta?',
    options: [
      '(A) Antibiótico associado à drenagem mamária rotineira.',
      '(B) Antibiótico e suspensão obrigatória da amamentação.',
      '(C) Antibiótico com cobertura específica apenas para anaeróbios.',
      '(D) Antibiótico (ex: Clindamicina), analgésico e manutenção da amamentação.'
    ],
    correctAnswer: 3,
    explanation: "Puérpera com dor intensa, eritema e calor em um quadrante da mama: é mastite lactacional, geralmente causada por Staphylococcus aureus que entra por fissuras do mamilo em uma mama com leite parado.\n\nO tratamento combina antibiótico com cobertura para estafilococo (cefalexina ou dicloxacilina são as opções habituais; a clindamicina é alternativa, sobretudo em alérgicas), analgésico ou anti-inflamatório e esvaziamento eficiente da mama. A amamentação deve continuar, inclusive na mama afetada: ela ajuda a drenar o leite, e o leite não faz mal ao bebê.",
    commentary: "Antibiótico com drenagem sempre necessária (A): a drenagem só é indicada quando se forma abscesso (área flutuante ou coleção na ultrassonografia), o que não é o caso.\n\nSuspender a amamentação durante o antibiótico (B): interromper a amamentação aumenta a estase de leite e o risco de abscesso; os antibióticos usados são compatíveis com o aleitamento.\n\nCobertura específica para anaeróbios (C): os agentes principais são o estafilococo e, menos vezes, estreptococos e gram-negativos; anaeróbios não são o alvo.",
    tip: "Mastite: antibiótico antiestafilocócico, analgesia e continuar amamentando. Drenagem só se houver abscesso.",
    reference: 'Zugaib Obstetrícia, 2020.',
    tags: ['puerpério', 'mastologia']
  },
  {
    id: 'tp2022-90',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher de 82 anos, prolapso uterino estádio 3, ulceração em ectocérvice. Cardiopata grave. Sem interesse sexual. Cirurgia indicada?',
    options: [
      '(A) Colpocleise (Cirurgia de Le Fort).',
      '(B) Fixação no ligamento sacroespinhoso.',
      '(C) Histerectomia total abdominal.',
      '(D) Culdoplastia de McCall.'
    ],
    correctAnswer: 0,
    explanation: 'A colpocleise (Le Fort) é um procedimento rápido e eficaz para prolapso genital em pacientes sem atividade sexual e com alto risco cirúrgico.',
    commentary: 'A cirurgia obliterativa de Le Fort é ideal para idosas frágeis, sendo rápida e com baixa morbidade.',
    reference: 'Manual de Ginecologia e Obstetrícia da SGOB, 2017.',
    tags: ['uroginecologia', 'cirurgia']
  },
  {
    id: 'tp2022-91',
    module: 'Ginecologia e Obstetrícia',
    text: 'Puérpera (10º dia), febre (38.2ºC), mama direita com hiperemia, edema e ponto de flutuação em QSL. Qual o manejo correto?',
    options: [
      '(A) Setorectomia cirúrgica imediata.',
      '(B) Mamografia para descartar carcinoma inflamatório.',
      '(C) Interrupção da lactação com cabergolina.',
      '(D) Antibioticoterapia, elevação da mama e drenagem do abscesso.'
    ],
    correctAnswer: 3,
    explanation: "Puérpera no 10º dia, em amamentação exclusiva, com febre, prostração, hiperemia e edema extensos na mama direita e um ponto de flutuação no quadrante superior lateral: a mastite evoluiu para abscesso mamário.\n\nAbscesso precisa ser drenado, por punção aspirativa guiada por ultrassonografia (preferida, repetida se necessário) ou por incisão cirúrgica nos maiores. Junto, mantêm-se antibiótico antiestafilocócico, analgésico, elevação e suporte das mamas e esvaziamento da mama, de preferência continuando a amamentação (pelo menos na mama sadia, e na afetada quando a dor e a posição da drenagem permitirem).",
    commentary: "Setorectomia (A): retirar um setor da mama é tratamento exagerado para um abscesso, que se resolve com drenagem.\n\nMamografia para descartar carcinoma inflamatório (B): a mamografia é pouco útil e muito dolorosa na mama lactante e inflamada; o exame de escolha é a ultrassonografia. O carcinoma inflamatório só é investigado se o quadro não responder ao tratamento.\n\nInterromper a lactação com cabergolina (C): o leite não está contaminado a ponto de prejudicar o bebê, e suspender a amamentação favorece a estase e piora o quadro.",
    tip: "Mastite com flutuação = abscesso: drenar (punção guiada por US ou incisão) + antibiótico, sem parar a amamentação.",
    reference: 'Zugaib Obstetrícia, 2020.',
    tags: ['puerpério', 'mastologia']
  },
  {
    id: 'tp2022-92',
    module: 'Ginecologia e Obstetrícia',
    text: 'Primigesta, 34 semanas, Hb 11,5 g/dL (era 12,5 g/dL com 10 semanas). Conduta correta?',
    options: [
      '(A) Pesquisar hemoglobinopatias por eletroforese.',
      '(B) Orientar dieta ricas em legumes, verduras e proteínas.',
      '(C) Encaminhar ao alto risco por anemia severa.',
      '(D) Ferro elementar em doses terapêuticas.'
    ],
    correctAnswer: 1,
    explanation: "Na gestação, considera-se anemia a hemoglobina abaixo de 11 g/dL. Esta gestante tem 11,5 g/dL, portanto não está anêmica.\n\nA queda de 12,5 para 11,5 g/dL ao longo da gravidez é esperada: o volume de plasma aumenta mais do que a massa de hemácias, o que dilui a hemoglobina (hemodiluição fisiológica). A conduta é apenas orientar alimentação saudável e variada, com fontes de ferro e proteínas, e manter a suplementação profilática de ferro e ácido fólico que o Ministério da Saúde recomenda a todas as gestantes.",
    commentary: "Eletroforese de hemoglobina (A): investigação de hemoglobinopatias faz sentido diante de anemia, microcitose sem deficiência de ferro ou história familiar; aqui a hemoglobina é normal.\n\nEncaminhar ao alto risco por anemia severa (C): não há anemia; a anemia grave na gestação corresponde a valores muito mais baixos (abaixo de 8 g/dL).\n\nFerro em dose terapêutica (D): dose de tratamento é para gestante com anemia confirmada; com hemoglobina normal, usa-se apenas a dose profilática.",
    tip: "Gestação: anemia é Hb abaixo de 11 g/dL. Queda leve ao longo da gravidez é hemodiluição fisiológica.",
    reference: 'MS - Atenção ao Pré-Natal de Baixo Risco.',
    tags: ['obstetrícia', 'nutrição']
  },
  {
    id: 'tp2022-93',
    module: 'Ginecologia e Obstetrícia',
    text: 'Gestante (25 semanas), TOTG 75g: Jejum 97, 1h 150, 2h 112 mg/dL. Qual o diagnóstico?',
    options: [
      '(A) Diabetes Mellitus Gestacional (DMG).',
      '(B) Exame normal.',
      '(C) Diabetes pré-existente.',
      '(D) Repetir glicemia pós-prandial.'
    ],
    correctAnswer: 0,
    explanation: "No teste oral de tolerância à glicose com 75 g, feito entre 24 e 28 semanas, basta um valor alterado para diagnosticar diabetes mellitus gestacional (DMG). Os pontos de corte são: jejum de 92 mg/dL ou mais, 1 hora de 180 mg/dL ou mais e 2 horas de 153 mg/dL ou mais.\n\nA glicemia de jejum desta gestante foi de 97 mg/dL, acima de 92. Mesmo com os valores de 1 e 2 horas normais, o diagnóstico de DMG está feito, e ela deve iniciar dieta, atividade física e monitorização glicêmica.",
    commentary: "Exame normal (B): um único valor alterado já basta; o jejum de 97 mg/dL está acima do limite.\n\nDiabetes pré-existente (C): esse diagnóstico exige glicemia de jejum de 126 mg/dL ou mais, glicemia ao acaso de 200 mg/dL ou mais ou HbA1c de 6,5% ou mais; nada disso aparece aqui.\n\nGlicemia pós-prandial para confirmar (D): o TOTG já é o teste diagnóstico; não precisa de outro exame para confirmar.",
    tip: "TOTG 75 g na gestação: 92 / 180 / 153 mg/dL. Um valor alterado = DMG.",
    reference: 'Consenso Brasileiro DMG, 2017.',
    tags: ['obstetrícia', 'diabetes']
  },
  {
    id: 'tp2022-94',
    module: 'Ginecologia e Obstetrícia',
    text: 'Gestante (26 semanas), PA 150/100, creatinina 1,3 mg/dL, proteína/creatinina 0,58. Qual parâmetro define "sinal de gravidade" na pré-eclâmpsia aqui?',
    options: [
      '(A) Restrição de crescimento fetal.',
      '(B) Edema generalizado.',
      '(C) Elevação de creatinina sérica (> 1,1 mg/dL).',
      '(D) Plaquetas abaixo de 200.000/mm³.'
    ],
    correctAnswer: 2,
    explanation: "Gestante de 26 semanas, antes normotensa, com PA de 150/100 mmHg e relação proteína/creatinina urinária de 0,58 (acima de 0,3): tem pré-eclâmpsia.\n\nEntre os achados, o que define sinal de gravidade é a creatinina de 1,3 mg/dL. Creatinina acima de 1,1 mg/dL (ou o dobro do valor basal, sem outra doença renal) indica lesão renal e enquadra o caso como pré-eclâmpsia com sinais de gravidade. Os outros sinais clássicos são PA de 160/110 mmHg ou mais, plaquetas abaixo de 100.000/mm³, transaminases em dobro, dor epigástrica ou em hipocôndrio direito, edema pulmonar e sintomas visuais ou cerebrais.\n\nA restrição de crescimento fetal, embora importante para a conduta e a vigilância fetal, não entra nessa lista de critérios de gravidade.",
    commentary: "Restrição de crescimento fetal (A): é sinal de disfunção placentária e pesa na conduta, mas não faz parte dos critérios atuais de pré-eclâmpsia grave.\n\nEdema generalizado (B): edema é comum em gestantes, inclusive normais, e deixou de ser critério de diagnóstico ou de gravidade.\n\nPlaquetas abaixo de 200.000/mm³ (D): o limite de gravidade é abaixo de 100.000/mm³; 198.000 é contagem normal.",
    tip: "Pré-eclâmpsia grave no laboratório: creatinina acima de 1,1, plaquetas abaixo de 100 mil, transaminases em dobro.",
    reference: 'Tratado de Obstetrícia FEBRASGO.',
    tags: ['obstetrícia', 'hipertensão']
  },
  {
    id: 'tp2022-95',
    module: 'Ginecologia e Obstetrícia',
    text: 'Gestante (30 semanas), PA 150/90, feto < P3, oligoâmnio, Doppler normal. PA era normal no início. Diagnóstico?',
    options: [
      '(A) Hipertensão gestacional.',
      '(B) Pré-Eclâmpsia.',
      '(C) Hipertensão Arterial Crônica (HAC).',
      '(D) Pré-eclâmpsia sobreposta a HAC.'
    ],
    correctAnswer: 1,
    explanation: 'Hipertensão após 20 semanas associada a repercussão fetal (RCF < P3) caracteriza pré-eclâmpsia, mesmo sem proteinúria descrita.',
    commentary: 'A presença de restrição de crescimento fetal (RCF) associada à hipertensão após 20 semanas fecha diagnóstico de pré-eclâmpsia.',
    reference: 'Tratado de Obstetrícia FEBRASGO.',
    tags: ['obstetrícia', 'hipertensão']
  },
  {
    id: 'tp2022-96',
    module: 'Ginecologia e Obstetrícia',
    text: 'Após a ovulação, o corpo lúteo produz progesterona. Na evolução da gestação, qual estrutura assume essa produção a partir da 12ª semana?',
    options: [
      '(A) Ovário.',
      '(B) Placenta.',
      '(C) Cordão umbilical.',
      '(D) Colo uterino.'
    ],
    correctAnswer: 1,
    explanation: 'A placenta torna-se o principal local de produção de progesterona após o primeiro trimestre (transição lúteo-placentária).',
    commentary: 'A partir da 12ª semana, a placenta assume a produção hormonal necessária para a manutenção da gravidez.',
    reference: 'Febrasgo.',
    tags: ['obstetrícia', 'fisiologia']
  },
  {
    id: 'tp2022-97',
    module: 'Ginecologia e Obstetrícia',
    text: 'Gestante (18 semanas), teste rápido para sífilis positivo. Como proceder de acordo com o Ministério da Saúde?',
    options: [
      '(A) Tratar o casal imediatamente e solicitar exames mensais.',
      '(B) Aguardar o teste treponêmico de confirmação antes de tratar.',
      '(C) Tratar com eritromicina se for alérgica.',
      '(D) Tratar apenas se o parceiro for positivo.'
    ],
    correctAnswer: 0,
    explanation: "Na gestação, um teste rápido (treponêmico) reagente para sífilis já basta para começar o tratamento, sem esperar o resultado de outros exames. Isso porque a sífilis tem alta transmissão vertical e pode causar aborto, natimorto e sífilis congênita, e qualquer atraso aumenta o risco para o feto.\n\nAo mesmo tempo, colhe-se um teste não treponêmico (VDRL) para confirmar e servir de base ao seguimento, que na gestação é mensal. O tratamento é com penicilina benzatina, em dose e número de aplicações conforme a fase da doença. A parceria sexual também deve ser testada e tratada, mesmo com teste negativo, para evitar reinfecção da gestante.",
    commentary: "Aguardar o treponêmico de confirmação (B): esperar atrasa o tratamento, e a gestante pode não voltar; o Ministério da Saúde orienta tratar já no primeiro teste reagente.\n\nEritromicina se for alérgica (C): a eritromicina atravessa mal a placenta e não trata o feto; o único tratamento eficaz na gestação é a penicilina benzatina, e a gestante alérgica deve passar por dessensibilização.\n\nTratar o parceiro só se for positivo (D): a parceria pode estar no período de janela, com teste ainda negativo; o tratamento é indicado mesmo assim, senão a gestante se reinfecta.",
    tip: "Gestante com teste rápido de sífilis reagente: penicilina benzatina na hora, VDRL mensal e tratar a parceria mesmo se negativa.",
    reference: 'Ministério da Saúde - Protocolo Transmissão Vertical 2021.',
    tags: ['obstetrícia', 'IST']
  },
  {
    id: 'tp2022-98',
    module: 'Ginecologia e Obstetrícia',
    text: 'Gestante em pré-natal de baixo risco. Quais vacinas devem ser orientadas de rotina?',
    options: [
      '(A) Hepatite B, tétano, rubéola e caxumba.',
      '(B) Hepatite B, tríplice bacteriana (dTpa), influenza e COVID-19.',
      '(C) Hepatite B, tríplice bacteriana, sarampo e caxumba.',
      '(D) Hepatite B, dTpa, COVID-19 e febre amarela.'
    ],
    correctAnswer: 1,
    explanation: "O calendário do Ministério da Saúde para gestantes inclui vacinas de vírus inativado, toxoides e vacinas de componentes, que são seguras na gravidez:\n\n• Hepatite B, se não houver esquema completo;\n• dTpa (difteria, tétano e coqueluche acelular), a partir de 20 semanas, em toda gestação, para proteger o bebê contra a coqueluche nos primeiros meses;\n• Influenza, na campanha anual;\n• COVID-19.\n\nVacinas de vírus vivos atenuados, como tríplice viral (sarampo, caxumba e rubéola), são contraindicadas na gestação e ficam para o puerpério nas mulheres não imunes.",
    commentary: "Rubéola e caxumba (A): fazem parte da tríplice viral, de vírus vivos, contraindicada na gestação.\n\nSarampo e caxumba (C): também componentes da tríplice viral; não se aplica na gravidez.\n\nFebre amarela (D): vacina de vírus vivo, que não faz parte da rotina da gestante; só é considerada em situação de alto risco de exposição, como viagem inadiável a área com transmissão.",
    tip: "Gestante: hepatite B, dTpa, influenza e COVID-19. Vírus vivo (tríplice viral, febre amarela), em regra, não.",
    reference: 'Calendário Nacional de Vacinação - MS.',
    tags: ['obstetrícia', 'imunização']
  },
  {
    id: 'tp2022-99',
    module: 'Ginecologia e Obstetrícia',
    text: 'Paciente com perdas fetais tardias (26 e 24 semanas), indolores, com expulsão fetal imediata rápida. Qual o diagnóstico mais provável?',
    options: [
      '(A) Incompatibilidade genética.',
      '(B) Incompatibilidade do fator Rh.',
      '(C) Insuficiência istmo-cervical (IIC).',
      '(D) Perdas fetais sem correlação.'
    ],
    correctAnswer: 2,
    explanation: "As perdas desta paciente seguem o padrão típico da insuficiência istmo-cervical (IIC): ocorrem no segundo trimestre, cada vez mais cedo (26 e depois 24 semanas), com pouca ou nenhuma dor ou contração, sensação de peso no períneo e expulsão rápida de fetos vivos e sem malformações, que morrem pela prematuridade extrema. O colo se dilata sem trabalho de parto típico.\n\nA história de duas curetagens, com infecção depois da primeira, é fator de risco por lesão do colo. Na próxima gestação, o tratamento é a cerclagem do colo, que pode ser indicada pela própria história, geralmente entre 12 e 14 semanas.",
    commentary: "Incompatibilidade genética (A): causas genéticas (cromossômicas) costumam levar a abortos no primeiro trimestre, muitas vezes com fetos malformados; aqui as perdas são tardias e os fetos nasceram vivos e sem malformações.\n\nIncompatibilidade Rh (B): a paciente recebeu imunoglobulina anti-D e tem Coombs indireto negativo, então não está sensibilizada; além disso, a doença hemolítica causaria anemia e hidropsia fetal, não parto rápido e indolor.\n\nPerdas sem correlação (D): o padrão repetido e característico aponta uma causa comum, que deve ser tratada na próxima gestação.",
    tip: "Perda no 2º trimestre, indolor, rápida, com feto vivo e normal = insuficiência istmo-cervical: cerclagem na próxima gestação.",
    reference: 'Zugaib Obstetrícia, 2020.',
    tags: ['obstetrícia']
  },
  {
    id: 'tp2022-100',
    module: 'Ginecologia e Obstetrícia',
    text: 'Gestante (36 semanas), perda líquida clara. Especular: saída ativa por Valsalva. Toque: colo fechado. Sobre este caso:',
    options: [
      '(A) Prescrição de penicilina após 18h de bolsa rota.',
      '(B) Cesárea de urgência obrigatória se bolsa rota > 6h.',
      '(C) Corticoindução é mandatória.',
      '(D) USG com ILA normal não exclui o diagnóstico de amniorexe.'
    ],
    correctAnswer: 3,
    explanation: 'O diagnóstico de rotura de membranas é clínico (anamnese e especular); o volume de líquido no USG pode estar normal em roturas altas.',
    commentary: 'O ILA normal não afasta bolsa rota. Com 36 semanas, a conduta é resolução da gravidez e profilaxia para GBS se indicado (sem necessidade de corticoide após 34 semanas).',
    reference: 'Cartilha Ministério da Saúde, 2021.',
    tags: ['obstetrícia']
  },
  {
    id: 'tp2025-81',
    module: 'Ginecologia e Obstetrícia',
    text: 'Paciente feminina, 16 anos, procura o seu atendimento na Unidade Básica de Saúde, sem acompanhante. Relata ter iniciado vida sexual com o atual namorado há 6 meses e solicita prescrição de pílula contraceptiva, apesar de referir uso adequado de preservativo. Nega qualquer comorbidade, uso de medicações e vícios. Diante do caso, assinale a alternativa correta:',
    options: [
      '(A) Como a adolescent é menor de idade, a prescrição da pílula anticoncepcional só poderá ser feita na presença de seus pais ou responsável legal.',
      '(B) A prescrição da pílula deve ser feita, pois a paciente mostra-se capaz de tomar decisões relativas à sua saúde e não há necessidade de comunicar aos responsáveis legais.',
      '(C) Nesse caso, para prescrição da pílula deve ser feito atendimento em ambulatório de planejamento familiar com o namorado.',
      '(D) A prescrição de pílula está contraindicada para a adolescente, pelo risco de abandono do uso do preservativo.'
    ],
    correctAnswer: 1,
    explanation: 'A menor de idade tem direito à privacidade em questões de saúde sexual e reprodutiva, de modo que a prescrição de pílula contraceptiva pode ser efetuada sem intermediação ou conhecimento compulsório dos pais se demonstrada capacidade de autodecisão.',
    commentary: 'De acordo com o Estatuto da Criança e do Adolescente (ECA) e o Código de Ética Médica, a menor de idade que apresenta capacidade de discernimento e autodecisão possui o direito assegurado ao sigilo profissional, à privacidade e à confidencialidade no atendimento em saúde reprodutiva e de planejamento familiar. O médico só deve quebrar o sigilo se constatar grave prejuízo de saúde física/mental ou riscos iminentes de vida. Portanto, a alternativa correta prevê a prescrição livre de intermediação dos pais, sem necessidade de acompanhamento pelo namorado ou de exclusão do método pelo medo de abandono do preservativo.',
    reference: 'Código de Ética Médica - CFM; Aspectos éticos e legais do atendimento à adolescente – FEBRASGO; Manual de Orientação SBP, 2019.',
    tags: ['ginecologia geral', 'ética']
  },
  {
    id: 'tp2025-82',
    module: 'Ginecologia e Obstetrícia',
    text: 'Paciente feminina, de 46 anos, foi encaminhada ao ambulatório de cirurgia ginecológica devido a sangramento uterino anormal, que não apresentou melhora com o uso de ibuprofeno. Relata que o sangramento é intenso no período menstrual. No período intermenstrual, ocorre após algumas relações sexuais. Baseado na imagem de ultrassonografia transvaginal com doppler, assinale a alternativa que contém a hipótese diagnóstica para esse sangramento uterino anormal.',
    options: [
      '(A) Adenomiose',
      '(B) Mioma uterino, FIGO 3',
      '(C) Pólipo endometrial',
      '(D) Câncer de colo uterino'
    ],
    correctAnswer: 2,
    explanation: 'O sangramento menstrual abundante acoplado a perdas intermenstruais decorrentes do coito (sinusorragia) e o espessamento endometrial focal polipoide com pedículo vascular único ao Doppler orientam ao diagnóstico de pólipo endometrial.',
    commentary: 'O pólipo endometrial constitui uma proliferação exofítica focal local benigna do estroma e das glândulas endometriais, manifestando-se clinicamente com menorragia e, proeminentemente, sangramentos intermenstruais e spotting pós-coito (sinusorragia). À ultrassonografia, exibe-se como imagem polipoide bem delimitada e hiperecogênica no eco endometrial, cuja marcação sob Doppler colorido revela uma via arterial pediculada única de nutrição. Os miomas FIGO 3 assentam-se inteiramente intramurais no miométrio, a adenomiose exibe espessamento heterogêneo miometrial assimétrico difuso com cistos subendometriais, e o câncer exocervical manifesta-se no colo uterino distal.',
    reference: 'Simões RS, Soares Júnior JM, Pastore AR, Baracat EC. Importância do diagnóstico por imagem em pacientes com sangramento uterino anormal. Feminina. 2023;51(8):454-61.',
    tags: ['ginecologia geral', 'DIP'],
    image: '/images/tp2025-82.webp'
  },
  {
    id: 'tp2025-83',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher, 22 anos de idade, procurou o ambulatório de ginecologia preocupada por estar há 6 meses sem menstruar, desde que parou uso de anticoncepcional oral combinado, pois deseja engravidar. Refere menarca aos 12 anos, mas como apresentava irregularidade menstrual e acne grave na adolescência, iniciou a pílula aos 15 anos e só suspendeu agora. Nega comorbidades e uso de medicamentos. Ao exame físico, apresenta IMC de 30kg/m², hirsutismo e acne. Assinale a conduta preconizada para este caso:',
    options: [
      '(A) Mudanças de hábito de vida, com dieta e exercícios físicos, monitorada por profissionais.',
      '(B) Introdução de análogo de GLP-1 e acompanhamento com endocrinologista.',
      '(C) Prescrição de citrato de clomifeno associado a progesterona mensalmente.',
      '(D) Reintrodução da pílula anticoncepcional e retorno em 6 meses.'
    ],
    correctAnswer: 0,
    explanation: 'A modificação dietética e prática física orientada pelo foco na perda de gordura corporal constitui a terapia de primeira linha soberana nos quadros de Síndrome dos Ovários Policísticos (SOP).',
    commentary: 'Esta paciente apresenta amenorreia hipoandrogênica secundária iniciada após o término do contraceptivo oral, com evidências nítidas de hiperandrogenismo clínico (acne, hirsutismo) sob IMC de sobrepeso/obesidade de 30, preenchendo os critérios de Rotterdam para a Síndrome dos Ovários Policísticos (SOP). Nas diretrizes multiprofissionais e de sociedades internacionales de ginecologia, a perda de peso por intermédio de mudanças de hábito de vida (MEV) constitui a primeira linha de tratamento absoluta, agindo sobre a resistência insulínica de base e restituindo em múltiplos casos os ciclos ovulatórios espontâneos e fertilidade sem indutores hormonais primários adicionais.',
    reference: 'Síndrome dos ovários policísticos. 3ª ed. -- São Paulo: FEBRASGO, 2023 (Orientações e Recomendações FEBRASGO, nº 1).',
    tags: ['endocrinologia feminina', 'SOP']
  },
  {
    id: 'tp2025-84',
    module: 'Ginecologia e Obstetrícia',
    text: 'Paciente de 26 anos, com vida sexual ativa desde os 18 anos, em uso de anticoncepcional oral combinado como método contraceptivo e sem comorbidades, apresenta em sua primeira citologia oncótica o diagnóstico de lesão intraepitelial escamosa de baixo grau (LSIL). Assinale a alternativa que indica a conduta inicial indicada para essa paciente:',
    options: [
      '(A) Realizar colposcopia.',
      '(B) Repetir o exame citopatológico em 6 meses.',
      '(C) Repetir o exame citopatológico em 12 meses.',
      '(D) Iniciar tratamento ablativo da zona de transformação.'
    ],
    correctAnswer: 1,
    explanation: 'As Diretrizes Brasileiras para o Rastreamento do Câncer do Colo de Útero padronizam a repetição do exame citológico em 6 meses para pacientes adultas (≥ 25 anos) com diagnóstico inicial de LSIL.',
    commentary: 'Para as lesões intraepiteliais escamosas de baixo grau (LSIL) diagnosticadas em mulheres maiores ou iguais de 25 anos, a conduta recomendada nacionalmente consiste em repetir o controle colpocitológico oncológico em 6 meses. Tal intervalo é preconizado para monitorar se haverá clareamento espontâneo do HPV ou se a lesão persistirá. O direcionamento célere para colposcopia imediata fica reservado para a permanência confirmada da LSIL em repetições subsequentes ou diante de citologias preliminares com indícios de alto grau (HSIL/ASC-H).',
    reference: 'Instituto Nacional de Câncer José Alencar Gomes da Silva (INCA). Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero. 2ª ed. Rio de Janeiro: INCA, 2016.',
    tags: ['cervicite', 'oncologia']
  },
  {
    id: 'tp2025-85',
    module: 'Ginecologia e Obstetrícia',
    text: 'Paciente de 19 anos, nuligesta, usuária de dispositivo intra-uterino (DIU) de cobre há 3 anos, com parceiro sexual fixo há 2 meses, procura ginecologista com queixa de dor em baixo ventre, dispareunia e corrimento fétido há duas semanas. Ao exame físico, encontra-se em bom estado geral, corada, hidratada, PA 100x70mmHg; FC 72bpm; temperatura axilar de 37,7°C. Ausculta respiratória e cardiovascular sem alterações. Abdome plano, normotenso, doloroso à palpação profunda de hipogástrio, descompressão brusca ausente. Ao exame ginecológico, ectoscopia vulvar sem alterações; especular: vagina e colo tróficos, com presença de leucorreia amarelada fétida. Ao toque vaginal, dor à palpação e mobilização do colo. Considerando a hipótese diagnóstica do quadro, assinale a alternativa que contenha a sequência de condutas mais adequadas:',
    options: [
      '(A) Internar e introduzir ceftriaxona 500mg 12/12h + metronidazol 500mg 12/12h + doxiciclina 100mg 12/12h até melhora do quadro; retirar o DIU; tratar o parceiro.',
      '(B) Prescrever ceftriaxona 500mg IM dose única e metronidazol 500mg 12/12h + doxiciclina 100mg 12/12h por 14 dias; retirar o DIU e reavaliar a paciente em 72h; tratar o parceiro.',
      '(C) Internar e introduzir ceftriaxona 500mg IV 12/12h + metronidazol 500mg 12/12h + doxiciclina 100mg 12/12h até melhora do quadro; manter o DIU e avaliar retirada em 72h; tratar o parceiro.',
      '(D) Prescrever ceftriaxona 500mg IM dose única e metronidazol 500mg 12/12h + doxiciclina 100mg 12/12hs por 14 dias; manter o DIU e reavaliar a paciente em 72h; tratar o parceiro.'
    ],
    correctAnswer: 3,
    explanation: 'A Doença Inflamatória Pélvica (DIP) de espectro clínico moderado/leve tem indicação de tratamento tríplice ambulatorial, associando a manutenção monitorada do DIU sob antibioticoterapia inicial nas primeiras 48-72h de seguimento.',
    commentary: 'O quadro revela DIP em Estágio Clínico Monif I (enfermidade pélvica sem peritonite ativa no abdome superior ou pelve profunda, bom estado hemodinâmico geral). O tratamento empírico preferencial ambulatorial recai sobre o esquema composto por Ceftriaxona 500mg IM (dose única), Metronidazol 50VO 12/12h e Doxiciclina 100mg VO 12/12h por 14 dias corridos. Fatos baseados em alta evidência apontam que a remoção urgente/imediata do DIU de cobre não gera benefícios clínicos, devendo o dispositivo ser mantido e reavaliado após 48 a 72 horas pós-fármacos. O parceiro sexual deve obrigatoriamente ser assistido sob cobertura empírica para conter transmissão repetida.',
    reference: 'Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com IST, Ministério da Saúde, 2022.',
    tags: ['ginecologia geral', 'infectologia']
  },
  {
    id: 'tp2025-86',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher de 33 anos, nuligesta, teve a menarca aos 13 anos. Refere vida sexual activa, em uso regular de preservativo. Relata que apresentava cólicas menstruais leves que melhoravam com analgésicos, mas há 2 anos as dores pioraram e atualmente não melhoram nem com anti-inflamatórios. Apresenta queixa de dispareunia de profundidade, que se iniciou há 1 ano. Diante do quadro descrito, assinale a conduta correta:',
    options: [
      '(A) Ultrassonografia transvaginal',
      '(B) Introdução de anticoncepcional oral',
      '(C) Videolaparoscopia diagnóstica',
      '(D) Tomografia computadorizada de pelve'
    ],
    correctAnswer: 0,
    explanation: 'A Ultrassonografia Transvaginal (com preparo intestinal prévio) consagra-se como o método propedêutico não invasivo de primeira escolha para iniciar a propedêutica de dismenorreia secundária refratária.',
    commentary: 'A progressão severa adquirida de dismenorreia refratária aos analgésicos e anti-inflamatórios em associação com dispareunia de profundidade sugere fortemente a hipótese de endometriose profunda infiltrativa (dismenorreia secundária). No itinerário de investigação diagnóstica inicial, a Ultrassonografia Transvaginal especializada com preparo intestinal constitui o primeiro exame complementar de imagem de escolha, dotado de alta sensibilidade diagnóstica. Métodos puramente empíricos terapêuticos ou videolaparoscopia direta ficam preteridos até o término do estudo por imagem.',
    reference: 'HOFFMAN, Barbara L. et al. Ginecologia de Williams. Grupo A, 2014; ACOG Practice Bulletin: Diagnosis and Management of Endometriosis, 2021.',
    tags: ['ginecologia geral', 'dor pélvica']
  },
  {
    id: 'tp2025-87',
    module: 'Ginecologia e Obstetrícia',
    text: 'Uma mulher de 50 anos realiza mamografia de rastreamento, que evidencia nódulo espiculado de 2cm na mama direita, com microcalcificações pleomórficas associadas. Considerando o diagnóstico diferencial, qual dos achados abaixo reforça a suspeita de malignidade?',
    options: [
      '(A) Nódulo sólido intraductal na ultrassonografia, associado a secreção mamilar unilateral sanguinolenta.',
      '(B) Nódulo bem delimitado, homogêneo e anecogênico na ultrassonografia mamária.',
      '(C) Assimetria focal com distorção arquitetural na mamografia.',
      '(D) Aumento difuso da densidade mamária, associado a microcalcificações regulares e dispersas.'
    ],
    correctAnswer: 2,
    explanation: 'A ocorrência de assimetria focal e distorção estrutural arquitetural do estroma mamário aliadas a agrupamento de microcalcificações pleomórficas são achados mamográficos de altíssima probabilidade de malignidade.',
    commentary: 'No rastreamento mamográfico, distorção estrutural e a presença de assimetria focal constituem achados altamente suspeitos de malignidade (comumente categorizados como BI-RADS 4 ou 5), exigindo elucidação diagnóstica invasiva através de biópsia por agulha grossa (Core Biopsy). Cistos simples em ultrassonografia são homogêneos/anecogênicos e benignos, as microcalcificações dispersas regulares são de natureza eminentemente benigna, e o papiloma ductal caracteriza-se morfológicamente por nódulo canalicular sólido e descarga sanguinolenta uniductal.',
    reference: 'NCCN Clinical Practice Guidelines in Oncology: Breast Cancer, 2023.',
    tags: ['mastologia', 'oncologia']
  },
  {
    id: 'tp2025-88',
    module: 'Ginecologia e Obstetrícia',
    text: 'Paciente de 28 anos, refere que apresentou infecção urinária e utilizou antibiótico por 10 dias; procura agora a UBS com queixa de ardência e desconforto vulvar. Nega odor desagradável. O exame especular revela secreção esbranquiçada, espessa e aderente às paredes vaginais. O pH vaginal está em 4,0. Assinale a alternativa com a hipótese diagnóstica:',
    options: [
      '(A) Tricomoníase',
      '(B) Vaginose bacteriana',
      '(C) Candidíase vulvovaginal',
      '(D) Cervicite mucopurulenta'
    ],
    correctAnswer: 2,
    explanation: 'A candidíase vulvovaginal apresenta-se com corrimento esbranquiçado pastoso grumoso aderido às paredes vaginais, pH vaginal fisiológico (< 4,5), ardência e história típica de uso de antibióticos de amplo espectro.',
    commentary: 'O tratamento antibiótico elimina os lactobacilos vaginais protetores produtores de ácido lático, impulsionando a proliferação agressiva e oportunista de fungos do gênero Candida. Os seus atributos clínicos e de bancada típicos constituem corrimento esbranquiçado que se assemelha a "nata de coalhada", com ardência/prurido intensificados locais, sem odor desagradável, e pH vaginal persistentemente menor do que 4,5 (neste cenário 4,0). A vaginose apresenta pH mais alcalino (> 4,5), as aminas livres provocam comumente odor fétido pronunciado e a tricomoníase expõe corrimento amarelado bolhoso.',
    reference: 'CDC. Guidelines for Treatment of Sexually Transmitted Diseases, 2021.',
    tags: ['infectologia', 'leucorreias']
  },
  {
    id: 'tp2025-89',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher de 29 anos, com um filho de 5 anos, vai à UBS com desejo de contracepção. Está em um relacionamento estável e pretende ter outro filho nos próximos 5 ou 6 anos. Refere vida sexual ativa, com uso regular de preservativo masculino, mas sente-se insegura somente com esse método. Refere ciclos menstruais regulares. Nega doenças, cirurgias prévias ou uso de medicamentos. Refere cefaleia com aura em investigação. Assinale a alternativa correta em relação à indicação do método contraceptivo diante da história clínica descrita:',
    options: [
      '(A) Sistema intra-uterino de levonorgestrel',
      '(B) Preservativo feminino',
      '(C) Anticoncepcional oral combinado',
      '(D) Laqueadura'
    ],
    correctAnswer: 0,
    explanation: 'Para mulheres portadoras de cefaleia/enxaqueca com aura, contraceptivos estrogênicos combinados são contraindicados de forma absoluta pelo risco cerebrovascular severo de AVC. Métodos de progesterona isolada de longo prazo reversíveis (LARC), como o SIU-LNG, são os ideais pela alta segurança e prazo correspondente.',
    commentary: 'A história clínica de cefaleia com aura (em vigência de investigação diagnóstica) confere pontuação Categoria 4 (risco inaceitável à saúde) para quaisquer métodos hormonais combinados que apresentem estradiol/etinilestradiol, motivado pelo risco aumentado de Acidente Vascular Cerebral Isquêmico. Métodos à base de progesterona isolada, como o Sistema Intrauterino de Levonorgestrel (SIU-LNG), e o preservativo figuram na Categoria 1/2 pelo excelente perfil de segurança. Dada a necessidade do doente por método reversível seguro por um horizonte temporal de 5 a 6 anos, o SIU-LNG consagra-se como a perfeita adequação de elegibilidade.',
    reference: 'Manual de anticoncepção da FEBRASGO, 2015; Critérios Médicos de Elegibilidade da OMS para Uso de Contraceptivos, 5ª ed, 2015.',
    tags: ['planejamento familiar', 'contracepção']
  },
  {
    id: 'tp2025-90',
    module: 'Ginecologia e Obstetrícia',
    text: 'Paciente feminina, 19 anos, procura o ambulatório de ginecologia com desejo de gestação. Refere que tem vida sexual ativa desde os 15 anos e usa preservativo. Tem desenvolvimento sexual normal, mas nega menarca. Não procurou o médico antes, pois tem familiares que nunca menstruaram e dizem que “é coisa de família”. Ao exame, apresenta fenótipo feminino, desenvolvimento sexual adequado para a idade. Exame ginecológico: inspeção normal. Toque: vagina em fundo cego, ausência de útero. Assinale a alternativa com a hipótese diagnóstica e resultados de exames compatíveis com o quadro clínico descrito:',
    options: [
      '(A) Hímen imperfurado. FSH e LH normais e cariótipo 46XX.',
      '(B) Síndrome de Rokitansky-Kuster-Hauser, FSH e LH aumentados, testosterona normal e cariótipo 46XX.',
      '(C) Síndrome de Swayer. FSH e LH reduzidos, testosterona aumentada e cariótipo 46XY.',
      '(D) Síndrome de insensibilidade androgênica, FSH e LH normais, testosterona aumentada e cariótipo 46XY.'
    ],
    correctAnswer: 3,
    explanation: 'A Síndrome de Insensibilidade aos Androgênios (Síndrome de Morris) cursa com fenótipo feminino, ausência de útero e vagina curta, cariótipo 46,XY e níveis elevados de testosterona sérica masculina circulante.',
    commentary: 'Paciente apresenta quadro clássico de agenesia uterovaginal (amenorreia primária com vagina curta em fundo cego) e mamas em pleno desenvolvimento. As duas principais hipóteses recaem sob a Síndrome de Rokitansky (cariótipo 46,XX, fita hormonal de esteroides na faixa feminina normal, gônadas normais) e a Síndrome de Insensibilidade aos Androgênios complete (Síndrome de Morris: cromossomos sexuais 46,XY, testículos internos intactos produzindo altos níveis de testosterona circulante equivalentes aos de homens, convertida perifericamente em estrogênios pelas aromatases). A ocorrência familiar herdada maternalmente e a presença de testosterona aumentada e cariótipo 46,XY consolidam o diagnóstico de Morris. Na Síndrome de Swyer, as mamas e os caracteres seriam subdesenvolvidos (infantilismo sexual residual por gônadas disgenéticas estéreis).',
    reference: 'BEREK, Jonathan S.; BEREK, Deborah L. Berek & Novak Tratado de Ginecologia. 16. ed. Rio de Janeiro: Guanabara Koogan, 2021.',
    tags: ['diferenciação sexual', 'amenorreia']
  },
  {
    id: 'tp2025-91',
    module: 'Ginecologia e Obstetrícia',
    text: 'Secundigesta, 36 semanas de gestação, 1 parto normal anterior, 35 anos de idade. Fez 7 consultas de pré-natal e, diante do diagnóstico de diabetes gestacional, fazia dieta e exercícios físicos, obtendo controle glicêmico adequado. Realizou uma ultrassonografia obstétrica há 3 semanas, que evidenciou peso fetal de 2900g, placenta grau 1, ILA normal. O exame físico desta consulta é PA 125/80mmHg, Pulso 84bpm, BCF 148bpm, boa movimentação fetal e altura uterina de 35cm. Diante do descrito, assinale a alternativa com a orientação correta para o parto desta paciente:',
    options: [
      '(A) Está indicado o parto cesáreo imediatamente, devido ao risco de crescimento fetal excessivo.',
      '(B) Pode-se esperar o parto espontâneo até 40 6/7 semanas, se mantiver o controle glicêmico adequado.',
      '(C) Está indicada imediatamente a indução de parto, se o controle glicêmico estiver normal.',
      '(D) Pode-se indicar a indução do parto, se o controle glicêmico estiver normal, a partir de 37 semanas.'
    ],
    correctAnswer: 1,
    explanation: 'Em gestantes portadoras de Diabetes Mellitus Gestacional (DMG) sob controle estável obtido por meio de dieta alimentar exclusiva, a conduta expectante permitindo o parto espontâneo até as 40 semanas e 6 dias de IG é plenamente segura.',
    commentary: 'O diabetes gestacional controlado por medidas não farmacológicas exclusivamente (dieta e atividade física integrada), na ausência de repercussão em peso fetal (sem evidências de macrossomia fetal, feto com peso de 2.900g com 33 semanas o que traduz harmonia do percentil) e perfil biofísico amniótico intacto, confere excelente estabilidade clínica. Desse modo, as recomendações nacionais de obstetrícia eximem de induções agressivas no termo precoce (≥ 37 semanas), incentivando a continuidade expectante ambulatorial monitorada e o aguardo do trabalho de parto de término espontâneo até 40 semanas e 6 dias.',
    reference: 'Manual de gestação de alto risco, Ministério da Saúde, Secretaria de Atenção Primária à Saúde. Brasília: Ministério da Saúde, 2022.',
    tags: ['obstetrícia', 'endocrinologia na gestação']
  },
  {
    id: 'tp2025-92',
    module: 'Ginecologia e Obstetrícia',
    text: 'Primigesta, 35 semanas, chega inconsciente ao PS, trazida por familiares, com história de ter apresentado crise convulsiva em casa. Ao exame, nota-se PA de 160/110mmHg, altura uterina de 30cm, dinâmica uterina ausente, colo impérvio, BCF 155bpm. Os familiares negam história de epilepsia e na carteira de pré-natal consta aumento de pressão arterial a partir de 28 semanas, quando foi indicado uso de metildopa. Assinale a alternativa que indica a conduta clínico-obstétrica:',
    options: [
      '(A) Indicar hidralazina e sulfato de magnésio e indicar indução do parto com a paciente inconsciente.',
      '(B) Estabilizar a pressão com hidralazina e aguardar o parto espontâneo com a paciente internada.',
      '(C) Indicar hidralazina e sulfato de magnésio e indicar cesariana no termo da gestação.',
      '(D) Indicar hidralazina e sulfato de magnésio e cesariana, quando a paciente estiver estável clinicamente.'
    ],
    correctAnswer: 3,
    explanation: 'A crise clássica de eclãmpsia exige pronto controle clínico das convulsões (via sulfato de magnésio) e controle pressórico (via hidralazina), procedendo-se subsequentemente à cesariana de urgência após restabelecer a segurança sistêmica materna.',
    commentary: 'A instalação abrupta de convulsões em gestante com proteinúria e hipertensão arterial persistente prévia (eclâmpsia) constitui uma das mais graves emergências em obstetrícia. A abordagem imediata consiste em hidratação protetiva e de estabilização respiratória e sistêmica, administração de agentes neurolíticos e anticonvulsivantes como o Sulfato de Magnésio (protocolos Zuspan ou Pritchard) e controle hemodinâmico por hidralazina venosa rápida. Estabilizado o tônus hemodinâmico primário e com o feto vivo viável com 35 semanas sob colo impérvio desfavorável, o parto cesáreo impõe-se de modo prioritário na urgência, estando contraindicadas tentativas de conduções prolongadas ou esperas expectantes ao termo.',
    reference: 'Manual de gestação de alto risco, Ministério da Saúde. Brasília: Ministério da Saúde, 2022.',
    tags: ['obstetrícia', 'hipertensão na gestação']
  },
  {
    id: 'tp2025-93',
    module: 'Ginecologia e Obstetrícia',
    text: 'Gestante, 2G1PN, com 39 semanas e 1 dia, é internada em trabalho de parto com 7cm de dilatação e bolsa rota há 30 minutos. As evoluções do trabalho de parto foram descritas no partograma a seguir: Assinale a alternativa correta em relação ao diagnóstico e à conduta nesse caso:',
    options: [
      '(A) Parada secundária da dilatação. Avaliar a introdução da ocitocina.',
      '(B) Desproporção céfalo-pélvica. Indicar cesárea.',
      '(C) Distócia de rotação. Indicar fórcipe.',
      '(D) Evolução dentro do esperado. Aguardar evolução.'
    ],
    correctAnswer: 0,
    explanation: 'O partograma exibe padrão contínuo sem ganho de dilatação cervical por período de duas ou mais horas de vigilância pós-ruptura, definindo parada secundária da dilatação por hipoatividade contrátil.',
    commentary: 'A estagnação gráfica do progresso cervical horizontal da dilatação nas anotações do partograma por 2 horas consecutivas consagra o quadro clínico de parada secundária da dilatação cervical. Este desvio decorre comumente de hipotonia dinâmica de fibra uterina. A conduta subsequente em fase ativa repousa na otimização dinâmica, recomendando-se deambulação livre ativa ou a administração venosa diluída calibrada de ocitocina exógena para amparar a regularidade e potência contrátil uterina, restabelecendo a progressão fisiológica do polo cefálico fetal.',
    reference: 'Diretriz Nacional de Assistência ao Parto Normal, Ministério da Saúde, 2016.',
    tags: ['obstetrícia', 'partograma'],
    image: '/images/tp2025-93.webp'
  },
  {
    id: 'tp2025-94',
    module: 'Ginecologia e Obstetrícia',
    text: 'Paciente de 25 anos, primigesta, com idade gestacional de 12 semanas, compareceu em consulta de pré-natal de rotina com resultado de exames laboratoriais solicitados pela enfermeira. Após análise dos exames, o médico da UBS constatou que a sorologia de toxoplasmose IgM e IgG eram positivos. Assinale a alternativa abaixo que tenha a conduta adequada neste caso:',
    options: [
      '(A) Iniciar esquema tríplice e encaminhar paciente ao pré-natal de alto risco.',
      '(B) Iniciar espiramicina na dose de 3g/dia e solicitar teste de avidez.',
      '(C) Orientações sobre cuidados com higiene e repetir exames em 30 dias.',
      '(D) Tranquilizar paciente sobre benignidade do caso e dar seguimento ao pré-natal de rotina.'
    ],
    correctAnswer: 1,
    explanation: 'No pré-natal precoce de primeiro trimestre (≤ 16 semanas), a positividade simultânea para anticorpos IgG e IgM para toxoplasmose exige a imediata prescrição de espiramicina associada à pesquisa de teste de avidez de IgG.',
    commentary: 'A positividade concomitante de IgM/IgG na gravidez de primeiro trimestre traduz alta suspeita ou risco de infecção fetal congênita de evolução recente. Enquanto se elucida o tempo cronológico da transmissão, impõe-se a imediata introdução de espiramicina (3g/dia) com vistas a restringir barreiras de transporte transplacentário. Simultaneamente, solicita-se o teste de avidez de IgG (preferencialmente na própria fração hemática armazenada). Se evidenciada alta avidez nas primeiras 16 semanas de gestação, descarta-se acometimento agudo, cessando-se o fármaco; avidez fraca ou moderada ratifica a vigência infecciosa aguda uterina, devendo-se manter e guiar a paciente ao pré-natal especializado de alto risco.',
    reference: 'Manual de gestação de alto risco, Ministério da Saúde, 2022.',
    tags: ['obstetrícia', 'infectologia na gestação']
  },
  {
    id: 'tp2025-95',
    module: 'Ginecologia e Obstetrícia',
    text: 'Primigesta, com última menstruação há oito semanas, procura o pronto atendimento com queixa de cólicas hipogástricas e relato de sangramento vaginal há dois dias. Ao exame físico, foi evidenciada consistência uterina amolecida e volume aumentado, compatível com o tempo de amenorreia, além de colo uterino fechado. Identifique a hipótese diagnóstica e o método propedêutico indicado para o esclarecimento do caso:',
    options: [
      '(A) Abortamento completo – Dosagem de beta HCG',
      '(B) Gestação ectópica – Dosagem de beta HCG',
      '(C) Aborto incompleto – Ultrassom pélvico transvaginal',
      '(D) Ameaça de aborto – Ultrassom pélvico transvaginal'
    ],
    correctAnswer: 3,
    explanation: 'Gestante de primeiro trimestre com queixa álgica tipo cólica abdominal baixa associada a hemorragias autolimitadas locais que preserva útero volumoso gravídico e colo impérvio fechado ao toque define a ameaça de aborto.',
    commentary: 'A ameaça de abortamento caracteriza-se classicamente por sangramento uterino discreto, dores pélvicas mecânicas, altura uterina em conformidade ao tempo provável de amenorreia e óstio cervical impérvio ao toque ginecológico. O pilar propedêutico ouro indispensável para assegurar e confirmar a vitalidade embriofetal e descartar desprendimentos ou perdas irreparáveis (como o abortamento consumado ou incompleto) consiste na realização do ultrassom pélvico transvaginal, identificando batimentos cardíacos fetais ativos.',
    reference: 'Tratado de Obstetrícia FEBRASGO, Elsevier, 2019.',
    tags: ['obstetrícia', 'sangramento 1º trimestre']
  },
  {
    id: 'tp2025-96',
    module: 'Ginecologia e Obstetrícia',
    text: 'Paciente de 27 anos, G1P0A0, IG de 37 semanas e 5 dias, dá entrada no PS obstétrico referindo sangramento vaginal há 20 minutos, de início súbito, associado a dor abdominal intensa. Ao exame físico, evidencia-se PA materna 90/50mmHg, FC materna 123bpm, BCF 110bpm, sangramento vaginal moderado, tônus uterino aumentado. Toque evidencia dilatação de 3cm, bolsa íntegra. Identifique a alternativa que apresenta a conduta adequada frente ao caso:',
    options: [
      '(A) Realizar amniotomia e indução de trabalho de parto.',
      '(B) Solicitar ultrassonografia de urgência.',
      '(C) Realizar amniotomia e encaminhar para cesárea de urgência.',
      '(D) Encaminhar diretamente para a cesárea de urgência.'
    ],
    correctAnswer: 2,
    explanation: 'No Descolamento Prematuro de Placenta (DPP) com feto vivo, a conduta de urgência exige a amniotomia imediata e o rápido encaminhamento do doente para o parto cesáreo emergencial.',
    commentary: 'Este quadro reflete com fidedignidade o Descolamento Prematuro de Placenta (DPP): dor de instalação abrupta súbita em cólica persistente, hipertonia uterina perceptível (útero lenhoso), taquicardia/choque materno por perda hemática oculta e padrão de bradicardia/sofrimento fetal agudo (BCF 110bpm). Diante de feto viável em sofrimento com colo de 3cm em evolução desfavorável temporal, a resolução urgente por cesariana constitui a melhor tática de salvamento. Consagra-se vital a realização imediata da amniotomia diagnóstica e descompressiva ainda antes de cruzar o corredor do bloco cirúrgico, pois reduz a pressão interna da cavidade no leito placentário, modera a velocidade de cisalhamento do descolamento e alivia a hemorragia sistêmica.',
    reference: 'Manual de gestação de alto risco, Ministério da Saúde, 2022.',
    tags: ['obstetrícia', 'emergência']
  },
  {
    id: 'tp2025-97',
    module: 'Ginecologia e Obstetrícia',
    text: 'Paciente de 39 anos, G3PN3 com histórico de pré-eclâmpsia sobreposta a hipertensão arterial crônica, teve parto normal há 50 minutos e está apresentando sangramento vaginal abundante. Ao chegar ao leito, ela se encontra em regular estado geral, frequência cardíaca de 120bpm, pressão arterial de 90x60 e útero amolecido acima da cicatriz umbilical. Diante do quadro, assinale a alternativa com a sequência e o protocolo terapêutico adequados:',
    options: [
      '(A) Compressão uterina bimanual e revisão de canal vaginal.',
      '(B) Ocitocina, metilergometrina e misoprostol.',
      '(C) Compressão uterina bimanual, ocitocina e misoprostol.',
      '(D) Ocitocina e curetagem imediata.'
    ],
    correctAnswer: 2,
    explanation: 'Diante de hemorragia pós-parto por atonia uterina, a conduta mecânica inicial com compressão bimanual (manobra de Hamilton) deve ser associada imediatamente a ocitocina e misoprostol, evitando metilergometrina pelo histórico de hipertensão.',
    commentary: 'A atonia uterina consolidada por útero amolecido (globo de segurança de Pinard ausente) é responsável por mais de 80% das causas de hemorragia pós-parto (HPP). A conduta de urgência exige manobras de fechamento e compressão física mecânica imediata (como a manobra bimanual de Hamilton) aliada à infusão veloz de ocitocina sistêmica endovenosa e administração retal/sublingual de misoprostol (800mcg). É imperioso destacar que o uso de Metilergometrina (Ergotrate) é estritamente contraindicado nesse caso, pelo grave histórico relatado de pré-eclâmpsia e hipertensão crônica na paciente, antevisto o seu potente e deletério efeito vasoconstritor arterial.',
    reference: 'Hemorragia pós-parto, Protocolo FEBRASGO-Obstetrícia, nº 36, 2021.',
    tags: ['obstetrícia', 'emergência']
  },
  {
    id: 'tp2025-98',
    module: 'Ginecologia e Obstetrícia',
    text: 'Paciente de 30 anos, secundigesta com 1 aborto espontâneo anterior, vai ao pronto-socorro com diagnóstico de gravidez e quadro de sangramento vaginal há 2 dias. Refere ter apresentado fortes dores e eliminado a gestação em casa há 2 horas. Ela traz o material para ser analisado. Ao exame físico, apresenta exame especular com moderada quantidade de sangue em fundo de saco vaginal, sangramento ativo via orifício externo do colo e ao toque com colo pérvio. Abaixo, a imagem do material entregue por ela à equipe: Assinale a alternativa com a hipótese diagnóstica:',
    options: [
      '(A) Mola hidatiforme incompleta',
      '(B) Mola hidatiforme completa',
      '(C) Abortamento incompleto',
      '(D) Abortamento completo'
    ],
    correctAnswer: 0,
    explanation: 'A identificação de vilosidades hidrópicas hidropformáveis com morfologia macroscópica vesicular "em cachos de uva" em associação com remanescentes de âmnion ou material embrionário define o diagnóstico de mola hidatiforme incompleta.',
    commentary: 'A Doença Trofoblástica Gestacional benigna em sua forma de Mola Hidatiforme Incompleta caracteriza-se histológica e macroscopicamente pela presença de fragmentos placentários e vilosidades hidrópicas vesicularmente dilatadas as quais se encontram entremescladas a porções de saco gestacional ou feto identificáveis (cariótipo triploide por fecundação dispermissiva). Diverge da mola completa na qual a degeneração é universal e total, destituída de quaisquer indícios de material conceptual embriofetal.',
    reference: 'Doença trofoblástica gestacional, Protocolo FEBRASGO-Obstetrícia, nº 24, 2021.',
    tags: ['obstetrícia', 'doença trofoblástica'],
    image: '/images/tp2025-98.webp'
  },
  {
    id: 'tp2025-99',
    module: 'Ginecologia e Obstetrícia',
    text: 'Uma mulher de 28 anos chega ao serviço de urgência com queixa de dor abdominal em cólica e sangramento vaginal há 2 dias. Ela relata última menstruação há 7 semanas e história de doença inflamatória pélvica há 2 anos. Ao exame físico, apresenta palidez cutânea, taquicardia (100bpm) e pressão arterial de 100/70mmHg. Ao exame abdominal apresenta dor à palpação profunda no hipogástrio e descompressão brusca positiva. Toque com dor à mobilização uterina e colo impérvio. Qual é a conduta inicial mais adequada para esta paciente?',
    options: [
      '(A) Solicitar Beta HCG quantitativo, hemograma e encaminhar a paciente para curetagem uterina imediata.',
      '(B) Solicitar Beta HCG quantitativo, hemograma e ultrassonografia transvaginal.',
      '(C) Solicitar exames como hemograma e PCR e iniciar antibioticoterapia empírica para infecção pélvica.',
      '(D) Realizar laparotomia exploradora, devido ao quadro de abdome agudo.'
    ],
    correctAnswer: 1,
    explanation: 'A suspeita de gravidez ectópica tubária em vigência de queixas pélvicas álgicas agudas e atraso menstrual exige confirmação quantitativa de beta-hCG combinada ao estudo por ultrassonografia transvaginal.',
    commentary: 'O antecedente de Doença Inflamatória Pélvica (DIP) predispõe à ocorrência de lesões nas ciliaturas das tubas uterinas, elevando significativamente o risco relativo para gestação ectópica por aprisionamento mecânico do blastocisto. Diante de sinais locais agudos moderados periféricos (dor ao descompressivo abdominal e ao toque vaginal), a conduta oportuna inicial consiste na dosagem sérica quantitativa de beta-hCG e no ultrassom pélvico transvaginal para mapear a posição sacular. A laparotomia direta é reservada para cenários catastróficos hemáticos refratários instáveis.',
    reference: 'Tratado de Obstetrícia FEBRASGO, Elsevier, 2018.',
    tags: ['obstetrícia', 'sangramento 1º trimestre']
  },
  {
    id: 'tp2025-100',
    module: 'Ginecologia e Obstetrícia',
    text: 'Gestante de 23 anos, está em acompanhamento pré-natal e nega gestações anteriores ou abortamentos. Apresenta tipagem sanguínea AB Rh negativo, com parceiro O Rh positivo. Assinale a alternativa que indica o momento adequado para receber imunoglobulina anti-D, caso o Coombs indireto se mantenha negativo durante a gravidez:',
    options: [
      '(A) Não há necessidade de imunoglobulina anti-D nessa situação.',
      '(B) Somente após o parto, se o RN for Rh positivo.',
      '(C) Somente no após parto, se o RN for RH positivo e se houver sangramento durante a gravidez.',
      '(D) Entre 28 e 32 semanas de gestação, se houver sangramento durante a gravidez e no pós-parto se o RN for Rh positivo.'
    ],
    correctAnswer: 3,
    explanation: 'A prevenção para isoimunização em gestantes com tipagem sanguínea Rh-negativo não sensibilizadas está balizada na dosagem de imunoglobulina anti-D entre 28 e 32 semanas se detectados sangramentos na gestação atual, devendo ser repetida no pós-parto imediato do concepto comprovado Rh-positivo.',
    commentary: 'A indicação profilática de imunoglobulina anti-D protege contra a produção pós-exposição de anticorpos anti-hemácia fetal Rh em gestantes Rh-negativo não imunizadas (Coombs indireto negativo persitente). O momento adequado para aplicação compreende as 28 a 32 semanas gestacionais se houver quaisquer indícios de hemorragias ou exames traumáticos intra-útero nas semanas precedentes. Igualmente, nova administração no puerpério imediato (em até 72 horas) está indicada se a tipagem do recém-nascido comprovar-se Rh-positivo.',
    reference: 'Freitas F, et al. Isoimunização Rh: abordagem e condutas. J Bras de Gin e Obs, 42(7), 439-445, 2020.',
    tags: ['obstetrícia', 'imunização na gestação']
  },
  {
    id: 'tp2021-81',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher, 15 anos, em acompanhamento por dismenorreia primária, deseja iniciar uso de método contraceptivo. Nega história prévia de eventos tromboembólicos ou tabagismo e está em acompanhamento por enxaqueca com aura em uso de topiramato. A melhor conduta é:',
    options: [
      '(A) Contraceptivo hormonal combinado oral sem pausa.',
      '(B) Anel vaginal contraceptivo.',
      '(C) Contraceptivo hormonal injetável combinado.',
      '(D) Implante subdérmico.'
    ],
    correctAnswer: 3,
    explanation: 'Enxaqueca com aura contraindica o uso de métodos contraceptivos hormonais combinados (contendo estrogênio) pelo elevado risco cardiovascular de acidente vascular cerebral. Além disso, o topiramato é um indutor enzimático hepático que reduz a eficácia dos contraceptivos orais. O implante subdérmico de progestagênio isolado é eficaz e seguro nesse cenário.',
    commentary: 'Pacientes com diagnóstico de enxaqueca com aura têm contraindicação absoluta (Categoria 4 da OMS) ao uso de métodos hormonais combinados (pelo risco de AVC). A prescrição de topiramato e outros anticonvulsivantes induz enzimas microoxigênicas hepáticas que aceleram a depuração metabólica dos hormônios por via oral, comprometendo a eficácia contraceptiva. Métodos hormonais à base de progestagênio isolado não orais de liberação sustentada ou métodos não hormonais (como o DIU de cobre) são as escolhas adequadas. Portanto, o implante subdérmico (progestagênio isolado de depósito) é seguro (Categoria 1 ou 2) e ideal para esta paciente.',
    reference: 'Tratado de Ginecologia FEBRASGO (2019); CAMARGOS, A. F. et al. Ginecologia Ambulatorial Baseada em Evidências Científicas (2016).',
    tags: ['contracepção', 'enxaqueca com aura', 'planejamento familiar']
  },
  {
    id: 'tp2021-82',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher, 26 anos, com 2 horas de pós-parto vaginal, inicia quadro de sudorese, palidez e sangramento vaginal em grande intensidade. Exame físico: hipocorada 2+/4+, PA = 80 x 40 mmHg, FC = 110 bpm, ritmo cardíaco regular. Fundo uterino na cicatriz umbilical, hipotônico, sangramento vaginal volumoso e de grande intensidade. Em associação aos cuidados de suporte de vida materna, as condutas imediatas são:',
    options: [
      '(A) Administração de metilergonovina e balão de tamponamento uterino.',
      '(B) Administração de uterotônicos e sutura compressiva de B-Lynch.',
      '(C) Sondagem para esvaziamento vesical e curagem uterina.',
      '(D) Massagem no fundo uterino e administração de ocitocina endovenosa.'
    ],
    correctAnswer: 3,
    explanation: 'A paciente apresenta hemorragia pós-parto (HPP) decorrente de hipotonia/atonia uterina imediata. O primeiro passo terapêutico, conjuntamente com a ressuscitação volêmica e de suporte, consiste em medidas mecânicas conservadoras (massagem bimanual do fundo uterino / manobra de Hamilton) e a administração de uterotônicos de primeira linha (ocitocina intravenosa).',
    commentary: 'A paciente está no momento com um quadro de hipotonia uterina e devem-se iniciar as medidas gerais, com acesso venoso calibroso com infusão rápida de 2.000 a 3.000 ml de SF 0,9% ou ringer lactato, reserva de sangue, sondagem vesical de demora e massagem no fundo uterino. Além disso, devem-se tomar medidas farmacológicas imediatas de primeira linha, tais como drogas uterotônicas: ocitocina endovenosa. O tratamento cirúrgico ou invasivo (balão de tamponamento, sutura B-Lynch, ligadura das artérias hipogástricas, cura ou curetagem) só é realizado em casos refratários às medidas conservadoras e farmacológicas iniciais.',
    reference: 'FILHO, J. (Eds.). Rezende Obstetrícia. 13. ed. Rio de Janeiro: Guanabara Koogan, 2016. p. 264-270; Tratado de obstetrícia FEBRASGO (2019).',
    tags: ['obstetrícia', 'hemorragia pós-parto', 'emergência']
  },
  {
    id: 'tp2021-83',
    module: 'Ginecologia e Obstetrícia',
    text: 'Parturiente, 28 anos, 38 semanas de gestação, com diagnóstico de pré-eclâmpsia, está internada para iniciar indução do trabalho de parto. É realizada cardiotocografia de 20 minutos que apresenta traçado de frequência cardíaca fetal com linha de base de 140 bpm, variabilidade de 20 bpm, 2 acelerações transitórias e ausência de desacelerações. Baseando-se somente na descrição do traçado, a conduta é:',
    options: [
      '(A) Iniciar indução do trabalho de parto.',
      '(B) Refazer exame e considerar cesárea se o traçado permanecer inalterado.',
      '(C) Resolver imediatamente a gestação por cesárea.',
      '(D) Oxigenar a mãe, e repetir o exame em decúbito lateral esquerdo.'
    ],
    correctAnswer: 0,
    explanation: 'A cardiotocografia descreve um traçado Categoria I (ativo/reativo e normal), com linha de base, variabilidade e acelerações normais, e sem desacelerações. Isso indica excelente bem-estar fetal e permite que se prossiga com a indução planejada do trabalho de parto.',
    commentary: 'O exame da paciente apresenta padrão normal (Categoria I), caracterizado por linha de base entre 110-160 bpm, variabilidade entre 6-25 bpm, reatividade presente (pelo menos 2 acelerações transitórias em 20 minutos) e ausência de desacelerações patológicas (DIPs). Sendo assim, não há sofrimento fetal agudo que contraindique a via vaginal, podendo ser iniciada com segurança a indução do trabalho de parto.',
    reference: 'Tratado de Obstetrícia FEBRASGO / editores Cesar Eduardo Fernandes, Marcos Felipe Silva de Sá; coordenação Coríntio Mariani Neto. – 1. ed. – Rio de Janeiro: Elsevier, 2018.',
    tags: ['obstetrícia', 'cardiotocografia', 'indução do trabalho de parto']
  },
  {
    id: 'tp2021-84',
    module: 'Ginecologia e Obstetrícia',
    text: 'Gestante, 35 anos, com idade gestacional de 29 semanas, comparece à consulta pré-natal com a seguinte curva glicêmica (após sobrecarga de 75g de glicose): 85 mg/dL (jejum) – 188 mg/dL (1h) – 150 mg/dL (2h). Apresentou glicemia de jejum no primeiro trimestre de 78 mg/dL. A orientação que terá melhor resultado na condução desse caso é:',
    options: [
      '(A) Orientar terapia nutricional e prática de atividade física.',
      '(B) Iniciar metformina e avaliar perfil glicêmico em duas semanas.',
      '(C) Solicitar curva glicêmica com sobrecarga de 100 g de glicose.',
      '(D) Iniciar insulina e orientar perfil glicêmico.'
    ],
    correctAnswer: 0,
    explanation: 'O TOTG-75g mostra valores alterados (glicemia em 1h ≥ 180 mg/dL é diagnóstica de diabetes gestacional, e o valor foi 188). A primeira etapa do tratamento do diabetes mellitus gestacional (DMG) é dietocitoterapia (terapia nutricional) associada a exercícios físicos e automonitorização da glicemia capilar por 1 a 2 semanas.',
    commentary: 'Paciente com diabetes gestacional, diagnosticada por valores alterados no teste oral de tolerância a glicose com sobrecarga de 75g (no caso, o valor de 1 hora de 188 mg/dL ultrapassou o ponto de corte de 180 mg/dL). A conduta inicial é dieta, exercícios físicos e perfil glicêmico. Inicia-se insulina somente se, após estas medidas não farmacológicas, o controle glicêmico permanecer alterado nas avaliações capilares.',
    reference: 'Fernandes CE, Silva de Sá MF. Tratado de Obstetrícia FEBRASGO. São Paulo: Elsevier, 2018; Montenegro CABR. Rezende Obstetrícia. 13ª ED. Rio de Janeiro: Guanabara Koogan, 2017.',
    tags: ['obstetrícia', 'diabetes gestacional', 'pré-natal']
  },
  {
    id: 'tp2021-85',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher, 26 anos, é admitida na emergência de uma maternidade com queixas de dor pélvica, atraso menstrual de 2 meses e discreto sangramento vaginal. Refere ciclos menstruais irregulares. Não faz uso de métodos contraceptivos, pois deseja engravidar. Ao exame: corada, hidratada, PA = 120 x 80 mmHg; FC = 90 bpm. Há dois dias realizou β-hCG com resultado de 1280 mUI/mL. Foi solicitado exame de ultrassonografia pélvica que mostrou massa complexa com sinal do anel tubário em anexo uterino esquerdo, medindo 3,0cm, e endométrico ecogênico medindo 13 mm. Os resultados do exame de sangue foram: β-hCG de 1360 mUI/mL; Hematócrito: 39%; Hemoglobina: 11,6 g/dL. A conduta mais indicada para a paciente nesse momento é:',
    options: [
      '(A) Conservadora, com o uso de metotrexato, 50 mg/m² IM.',
      '(B) Laparotomia exploradora com salpingectomia.',
      '(C) Laparotomia exploradora com salpingostomia.',
      '(D) Expectante, pela possibilidade de resolução espontânea.'
    ],
    correctAnswer: 0,
    explanation: 'A paciente apresenta uma gestação ectópica íntegra com estabilidade hemodinâmica, massa anexial íntegra e pequena (3,0 cm, o que é ≤ 3,5 cm) e valores de β-hCG basais baixos com evolução estável (de 1280 para 1360). Tais preceitos favorecem o tratamento farmacológico clínico conservador com dose única de metotrexato (MTX - 50 mg/m² IM).',
    commentary: 'Nesse caso clínico, a paciente apresenta quadro de prenhez ectópica com indicação de terapêutica clínica conservadora, cujos critérios são: quadro clínico estável, ausência de sinais de rotura peritoneal, presença de saco gestacional ou massa anexial ≤ 3,5 cm e β-hCG estável ou em discreta ascensão (inferior a 5000 mUI/mL). O metotrexato (MTX) é administrado na dose única intramuscular de 50 mg/m². A laparotomia exploradora (ou laparoscopia) com salpingec/salpingostomia está reservada para falha terapêutica ou rotura com instabilidade cardiovascular. A conduta expectante não deve ser feita quando o β-hCG está estável ou ascendente.',
    reference: 'MONTENEGRO, C.A.B & REZENDE-FILHO, J. Obstetrícia fundamental. 14ª ed. Rio de Janeiro: Guanabara Koogan, 2018.',
    tags: ['obstetrícia', 'gravidez ectópica', 'emergência']
  },
  {
    id: 'tp2021-86',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher, 28 anos, com dois filhos nascidos de cesárea, há oito meses procurou atendimento ginecológico por dor pélvica de forte intensidade, tipo cólica, na região pélvica, irradiando para a região lombar. A dor tem caráter progressivo e contínuo e se exacerba durante o período menstrual. Há sete meses, passou a apresentar dispareunia profunda. Está tentando engravidar há 10 meses. A melhor propedêutica a ser realizada é:',
    options: [
      '(A) Vídeolaparoscopia diagnóstica.',
      '(B) Histeroscopia diagnóstica.',
      '(C) Ultrassom transvaginal com preparo intestinal.',
      '(D) Dosagem do antígeno CA125.'
    ],
    correctAnswer: 2,
    explanation: 'O quadro de dismenorreia secundária progressiva, dispareunia de profundidade e subfertilidade é altamente sugestivo de endometriose profunda. O exame de triagem de imagem preferível e de excelência inicial é o Ultrassom transvaginal com preparo intestinal específico ou a Ressonância Magnética da pelve.',
    commentary: 'A dor pélvica crônica, que varia ciclicamente acompanhando o período menstrual, associada a dispareunia profunda, direciona o raciocínio clínico para endometriose. Atualmente, o exame propedêutico inicial padrão-ouro não-invasivo é o ultrassom transvaginal com preparo intestinal (USTV-PI), que permite excelente mapeamento de lesões infiltrativas profundas e aderências pélvicas (inclusive em retossigoide, septo retovaginal e ligamentos uterossacros). A laparoscopia continua diagnóstica e terapêutica, mas hoje é postergada para momentos cirúrgicos oportunos de tratamento, não de primeira linha puramente propedêutica diagnóstica.',
    reference: 'Tratado de Ginecologia FEBRASGO / editores Cesar Eduardo Fernandes, Marcos Felipe Silva de Sá; coordenação Agnaldo Lopes da Silva Filho...[et al]. – 1. ed. – Rio de Janeiro: Elsevier, 2019.',
    tags: ['ginecologia geral', 'endometriose', 'infertilidade']
  },
  {
    id: 'tp2021-87',
    module: 'Ginecologia e Obstetrícia',
    text: 'Multípara, 30 anos, G3P0A3, comparece em consulta com desejo de gravidez. Relata abortamentos prévios entre 16 e 20 semanas de idade gestacional, sem quadro de dor ou sangramento, com rotura espontânea das membranas e dilatação cervical. A causa mais provável é:',
    options: [
      '(A) Cromossomopatia.',
      '(B) Disfunção hormonal.',
      '(C) Síndrome do anticorpo antifosfolipídio.',
      '(D) Insuficiência istmocervical.'
    ],
    correctAnswer: 3,
    explanation: 'O relato de perdas tardias ou abortos habituais de repetição de segundo trimestre médio (entre 16 e 22 semanas de IG), tipicamente caracterizados por dilatação cervical indolor e sem contrações uterinas, seguidos de eliminação fetal rápida e rotura de membranas, constitui o quadro patognomônico de insuficiência istmocervical (IIC).',
    commentary: 'As perdas gestacionais que ocorrem de forma imotivada, indolor, progressiva e na ausência de contrações uterinas dolorosas estabelecidas no 2º trimestre de gestação decorrem da incapacidade estrutural/funcional do colo de reter a gestação. Trata-se de alteração funcional e/ou estrutural do colo uterino e corresponde à insuficiência istmocervical, cuja profilaxia padrão para futuras gestações é a realização de circlagem uterina eletiva via vaginal (técnica de McDonald) entre 12 e 14 semanas de gestação.',
    reference: 'Tratado de obstetrícia FEBRASGO / editores Cesar Eduardo Fernandes, Marcos Felipe Silva de Sá; coordenação Coríntio Mariani Neto. – 1. ed. – Rio de Janeiro: Elsevier, 2019.',
    tags: ['obstetrícia', 'incompetência istmocervical', 'abortamento tardio']
  },
  {
    id: 'tp2021-88',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher, com idade gestacional de 32 semanas, chega à emergência com dor abdominal de início súbito, contínua, associada a sangramento transvaginal de coloração escura. Traz ultrassom do dia anterior mostrando feto vivo e placenta corporal posterior. Exame físico: PA = 160 x 90 mmHg, feto longitudinal, pélvico, BCF = 110 bpm constante, útero hipertônico, colo fechado. A conduta é:',
    options: [
      '(A) Cesárea imediata.',
      '(B) Conduta expectante.',
      '(C) Inibição de trabalho de parto.',
      '(D) Indução do trabalho de parto.'
    ],
    correctAnswer: 0,
    explanation: 'O quadro de dor abdominal contínua súbita, hipertonia uterina (útero lenhoso), elevação da pressão arterial e sofrimento fetal agudo (BCF 110 bpm fixo) com sangramento escuro é típico de Descolamento Prematuro de Placenta (DPP). Sendo um feto vivo com sofrimento agudo e sem parto vaginal iminente, indica-se a cesariana imediata.',
    commentary: 'A suspeita clínica de DPP é essencialmente clínica (dor abdominal súbita intensa contínua + hipertonia uterina + sangramento escuro). Sendo o feto vivo, e na presença de sofrimento fetal agudo sem parto vaginal iminente (no caso o colo está impérvio e fechado), a conduta prioritária é a resolução cirúrgica por cesariana rápida, precedida de amniotomia que reduz a hipertensão intraútero e evita infiltração miometrial (útero de Couvelaire) e coagulação intravascular disseminada.',
    reference: 'Fernandes CE, Silva de Sá MF. Tratado de Obstetrícia FEBRASGO. São Paulo: Elsevier, 2018; Montenegro CABR. Rezende Obstetrícia. 13ª ED. Rio de Janeiro: Guanabara Koogan, 2017.',
    tags: ['obstetrícia', 'descolamento de placenta', 'urgência']
  },
  {
    id: 'tp2021-89',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher, 32 anos, apresenta corrimento vaginal de coloração amarelo-esverdeada, prurido vulvar discreto e disúria. Exame físico: conteúdo vaginal esverdeado, bolhoso e colo em “framboesa”. O exame complementar para confirmação diagnóstica é:',
    options: [
      '(A) Colposcopia com biópsia.',
      '(B) Citologia oncótica do colo uterino e vagina.',
      '(C) Bacterioscopia do conteúdo vaginal.',
      '(D) Exame a fresco do conteúdo vaginal direto.'
    ],
    correctAnswer: 3,
    explanation: 'O quadro clínico de corrimento bolhoso de coloração amarelo-esverdeada, prurido vaginal/disúria e colo em aspecto de "framboesa" (colpite focal) é patognomônico de Tricomoníase. A confirmação diagnóstica imediata em consultório é feita por meio do exame microscópico a fresco direto do conteúdo vaginal.',
    commentary: 'O diagnóstico da secreção vaginal por Trichomonas vaginalis é agilizado pelo exame microscópico direto de gota a fresco adicionado de soro fisiológico morno, evidenciando piriformes flagelados com motilidade ondulante. A biópsia cervical é indicada para rastreio histológico de pré-neoplasias. A bacterioscopia destina-se a diplococos de gonorreia e outras cocobaciloses.',
    reference: 'Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com Infecções Sexualmente Transmistíveis (IST), Ministério da Saúde (2020).',
    tags: ['ginecologia geral', 'tricomoníase', 'infecções vaginais']
  },
  {
    id: 'tp2021-90',
    module: 'Ginecologia e Obstetrícia',
    text: 'Primigesta, 24 anos, portadora do vírus HIV, idade gestacional de 36 semanas, em uso de Nevirapina, Zidovudina e Lamivudina. Com 35 semanas, apresentou carga viral menor do que mil cópias. No nascimento, será administrada Zidovudina endovenosa em dose de ataque e de manutenção até o clampeamento do cordão umbilical. A resolução da gestação nessa paciente é:',
    options: [
      '(A) Interromper por cesariana com 39 semanas.',
      '(B) Induzir com Ocitocina na 37ª semana.',
      '(C) Induzir com Prostaglandina na 38ª semana.',
      '(D) Aguardar pelo parto vaginal.'
    ],
    correctAnswer: 3,
    explanation: 'Gestantes portadoras do vírus HIV que atingem carga viral indetectável ou de baixo título (< 1.000 cópias/mL) documentada a partir da 34ª semana de gestação têm indicação de parto com base puramente em critérios obstétricos regulares, ou seja, pode-se aguardar/conduzir o parto por via vaginal espontâneo.',
    commentary: 'De acordo com o Ministério da Saúde do Brasil, grávidas sob terapia antirretroviral (TARV) regular com carga viral menor que 1.000 cópias pós-34 semanas não apresentam benefício mensurável na taxa de transmissão vertical ao se indicarem cesarianas eletivas isoladas. Portanto, a indicação assistencial deve aguardar ou induzir o parto via vaginal normal, mantendo-se a infusão endovenosa recomendada de Zidovudina (AZT) intraparto.',
    reference: 'Protocolo Clínico e Diretrizes Terapêuticas para Prevenção da Transmissão Vertical do HIV, Sífilis e Hepatites Virais, Ministério da Saúde (2019).',
    tags: ['obstetrícia', 'HIV na gestação', 'transmissão vertical']
  },
  {
    id: 'tp2021-91',
    module: 'Ginecologia e Obstetrícia',
    text: 'Secundigesta, 25 anos, parto vaginal prévio há dois anos, é internada com 31 semanas de gestação devido a cólicas em baixo ventre há 4 horas. Tem história de trabalho de parto pré-termo e infecção do trato urinário tratada nesta gravidez. Nega doenças. Exame obstétrico: 3 contrações de 30 segundos, moderadas, em 10 minutos. O colo uterino é médio, centrado, com 3 cm de dilatação. O tocolítico mais indicado nesse caso é:',
    options: [
      '(A) Bloqueador de canal de cálcio.',
      '(B) Agonista beta2 adrenérgico.',
      '(C) Inibidor da ciclo-oxigenase.',
      '(D) Sulfato de magnésio.'
    ],
    correctAnswer: 0,
    explanation: 'A nifedipina, um bloqueador de canal de cálcio de atuação vascular periférica, constitui o agente tocolítico (inibidor contrátil do miométrio) de primeira escolha clínico e protocolar no manejo da inibição do trabalho de parto pré-termo devido ao seu baixíssimo perfil de efeitos colaterais materno-fetais.',
    commentary: 'No desencadeamento de Trabalho de Parto Prematuro (TPP), a tocólise primária é introduzida para postergar o parto por 48 horas (viabilizando a ação da corticoterapia para maturação pulmonar e transferência para centro de referência neonatal). A nifedipina é segura e eficaz. Os agonistas beta-2 têm alta repercussão de taquicardia materna, arritmias e edema pulmonar. Os inibidores da COX (como indometacina) trazem risco de fechamento precoce do ducto arterioso fetal e oligodrâmnio (sendo indicação restrita antes de 32 semanas). O sulfato de magnésio é excelente para neuroproteção fetal, mas ineficaz puramente como tocolítico primário.',
    reference: 'Montenegro CABR, Rezende Filho J. Obstetrícia Fundamental. 14. ed. Rio de Janeiro: Guanabara Koogan, 2018.',
    tags: ['obstetrícia', 'inibição do parto', 'prematuridade']
  },
  {
    id: 'tp2021-92',
    module: 'Ginecologia e Obstetrícia',
    text: 'Primigesta, 45 anos, com 32 semanas de gestação, procura maternidade com queixa de perda de líquido por via vaginal há 6 horas. Nega doenças ou intercorrências no pré-natal. Exame físico: sinais vitais normais, dinâmica uterina ausente; vitalidade fetal preservada; tônus uterino normal. Exame especular: visualização de perda de líquido amniótico claro por orifício cervical externo. A conduta inicial para essa gestante é:',
    options: [
      '(A) Internação para antibioticoterapia e corticoterapia.',
      '(B) Internação para controle de hemograma e administração de tocolíticos orais.',
      '(C) Alta com orientações sobre abstinência sexual e retornos semanais.',
      '(D) Internação para antibioticoterapia e indução do trabalho de parto.'
    ],
    correctAnswer: 0,
    explanation: 'Diante do quadro de Rotura Prematura de Membranas Ovulares (RPMO) pré-termo (32 semanas) sem sinais associados de corioamnionite (febre, taquicardia materno-fetal, secreção purulenta com odor), a conduta imediata preconizada é a internação para instituição de corticoterapia (para amparo da maturidade pulmonar e cerebral fetal) e antibioticoterapia de latência.',
    commentary: 'Entre as 24 e 34 semanas de idade gestacional em pacientes com RPMO sem sinais de infecção ou sofrimento fetal agudo, adota-se conduta conservadora sob rigorosa vigilância de infecção ovular. A conduta inicial é a internação para administração de corticoides (betametasona ou dexametasona) e cursos antibióticos protetivos de latência (ampicilina, eritromicina/azitromicina), objetivando estender o período gestacional até as 34 semanas, quando se procede ao parto.',
    reference: 'Tratado de Obstetrícia FEBRASGO. Rio de Janeiro: Elsevier, 2018.',
    tags: ['obstetrícia', 'ruptura de membranas', 'prematuridade']
  },
  {
    id: 'tp2021-93',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher, 34 anos, veio à consulta médica de rotina. Na anamnese, referiu que seu pai havia apresentado câncer de mama aos 40 anos de idade. O exame das mamas foi normal. A conduta é indicar:',
    options: [
      '(A) Mamografia imediatamente e controle anual.',
      '(B) Mamografia anual a partir de 40 anos.',
      '(C) Mamografia bianual a partir dos 40 anos.',
      '(D) Ultrassom de mamas imediatamente.'
    ],
    correctAnswer: 0,
    explanation: 'A presença de câncer de mama em parente masculino de primeiro grau, independentemente da idade do diagnóstico de parentesco, eleva de maneira acentuada a susceptibilidade familiar a mutações hereditárias (ex: genes BRCA1/2), enquadrando a paciente no grupo de alto risco. O rastreamento de alto risco com mamografia deve iniciar aos 30 anos de idade, ou 10 anos antes do tumor do parente jovem mais próximo (nunca antes dos 25 anos). Como a paciente tem 34 anos, deve iniciar mamografia anual imediatamente.',
    commentary: 'Grupos populacionais de alto risco para neoplasia de mama devem receber rastreamento anual individualizado antecipado e diferenciado. O câncer de mama no pai (masculino) confere alto risco hereditário para a prole. Recomenda-se iniciar a mamografia anual retrospectivamente aos 30 anos ou estimando dez anos antes do aparecimento do câncer familiar primário de maior juventude relevante. Tendo o pai recebido o diagnóstico aos 40 anos, a paciente deve iniciar sua mamografia agora (imediatamente), aos 34 anos, de forma anual.',
    reference: 'Diretrizes para a detecção precoce do câncer de mama no Brasil, INCA, 2015; Cadernos de Atenção Básica de Controle dos Cânceres nº 13, Ministério da Saúde.',
    tags: ['mastologia', 'rastreamento', 'câncer de mama']
  },
  {
    id: 'tp2021-94',
    module: 'Ginecologia e Obstetrícia',
    text: 'Primigesta, 42 anos, previamente hígida, com idade gestacional de 32 semanas, é admitida na maternidade com pressão arterial de 140 x 90 mmHg e queixa de epigastralgia. Nega cefaleia ou qualquer outra queixa. Proteinúria de fita está positiva 2+. Exames laboratoriais: AST: 136 U/l, ALT: 154 U/l, bilirrubina total: 2,3 mg/dL, plaquetas: 90.000/mm³ e LDH: 1450 U/l. O diagnóstico é:',
    options: [
      '(A) Hipertensão transitória gestacional com colestase intra-hepática da gravidez.',
      '(B) Hipertensão transitória gestacional complicada por esteatose hepática.',
      '(C) Eclâmpsia associada a colestase intra-hepática da gravidez.',
      '(D) Pré-eclâmpsia complicada por síndrome HELLP.'
    ],
    correctAnswer: 3,
    explanation: 'A grávida preenche critérios de pré-eclâmpsia (hipertensão arterial nova pós-20 semanas associada a proteinúria de 2+ e sintomatologia de dor epigástrica/em barra). Além disso, os marcadores laboratoriais definem desfecho grave de hemólise com plaquetopenia (plaquetas < 100.000, LDH > 600 U/L, hiperbilirrubinemia indireta) e lesão de hepatócitos (AST/ALT elevados), consagrando a Síndrome HELLP.',
    commentary: 'A dor epigástrica reflexa de estiramento da cápsula hepática de Glisson em vigilância pressórica identifica a gravidade endotelial da pré-eclâmpsia. A Síndrome HELLP exige, além de controle anti-hipertensivo (com hidralazina ou nifedipina) e prevenção imediata de convulsões (via sulfato de magnésio), a indução monitorada do parto ou a interrupção assistida rápida por cesariana decorrente da gravidade materno-fetal estabelecida pelas plaquetas reduzidas e disfunção multissistêmica.',
    reference: 'Tratado de obstetrícia FEBRASGO / editores Cesar Eduardo Fernandes, Marcos Felipe Silva de Sá; coordenação Coríntio Mariani Neto. – 1. ed. – Rio de Janeiro: Elsevier, 2019.',
    tags: ['obstetrícia', 'pré-eclâmpsia', 'síndrome HELLP']
  },
  {
    id: 'tp2021-95',
    module: 'Ginecologia e Obstetrícia',
    text: 'Menina de 17 anos de idade vem acompanhada pela mãe para o ambulatório de ginecologia com queixa de nunca ter menstruado. A paciente não apresenta outras queixas. Nega doenças crônicas e uso de medicamentos. Ao exame: estatura = 1,47 m, mamas em estágio M1 e pelos pubianos em P1 (classificação de Tanner). Traz exames laboratoriais que mostram níveis muito elevados de FSH. O diagnóstico e conduta são:',
    options: [
      '(A) Disgenesia gonadal – cariótipo.',
      '(B) Atraso puberal fisiológico – teste do progestogênio',
      '(C) Agenesia uterovaginal – ultrassonografia pélvica.',
      '(D) Hipogonadismo hipogonadotrófico – dosagem de prolactina e TSH.'
    ],
    correctAnswer: 0,
    explanation: 'A paciente apresenta amenorreia primária (ausência de menarca em menina com 15 anos ou mais) associada a infantilismo sexual completo de mamas e de pelos (estágio Tanner M1P1) com baixa estatura (1,47 m). A concomitância desses fatores com gonadotrofinas elevadas (FSH alto) ratifica o diagnóstico de hipogonadismo hipergonadotrófico secundário a falência ovariana (disgenesia gonadal), cuja conduta inicial indispensável é a solicitação do cariótipo.',
    commentary: 'Amenorreia primária sem desenvolvimento mamário aponta para disfunção do eixo gonadotrófico. O achado de FSH aumentado ratifica que o defeito situa-se diretamente nas gônadas (ovários estéreis resistentes/disgenéticos, sem secreção de estrogênios para Telarca, e eliminando o feedback negativo no hipotálamo/hipófise), configurando falência gonadal prematura hereditária ou disgenesia gonadal (ex: Síndrome de Turner, cariótipo 45,X). O cariótipo é o exame padrão decisivo para identificar cromossomopatias associadas. Na agenese uterovaginal (Rokitansky), os hormônios e caracteres Tanner (mamas) são plenamente normais e de desenvolvimento típico.',
    reference: 'Tratado de Ginecologia FEBRASGO / editores Cesar Eduardo Fernandes, Marcos Felipe Silva de Sá; coordenação Agnaldo Lopes da Silva Filho ...[et al.]. - 1. ed. - Rio de Janeiro : Elsevier, 2019. p. 496.',
    tags: ['amenorreia primária', 'disgenesia gonadal', 'ginecologia infanto-puberal']
  },
  {
    id: 'tp2021-96',
    module: 'Ginecologia e Obstetrícia',
    text: 'Adolescente, 15 anos, na 10ª semana de gravidez resultante de violência sexual, não deseja manter a gravidez. Vem à consulta acompanhada pelos pais. Para a interrupção legal desta gestação é necessário:',
    options: [
      '(A) Autorização expedida pelo juiz da comarca de residência.',
      '(B) Solicitação assinada pela paciente e representante legal.',
      '(C) Laudo pericial do exame de corpo delito expedido pelo IML.',
      '(D) Boletim de ocorrência lavrado pela autoridade policial.'
    ],
    correctAnswer: 1,
    explanation: 'Pelas normas diretivas e leis penais brasileiras, a interrupção da gravidez fruto de abuso ou estupro (violento/vulnerável) independe de alvarás judiciais, registros policiais prévios de boletins de ocorrência ou atestados legistas periciais do Instituto Médico Legal (IML). O único documento de elegibilidade e autonomia obrigatório é o Termo de Consentimento Livre e Esclarecido assinado pela paciente acompanhada perante o seu representante ou responsável legal.',
    commentary: 'A legislação nacional e as normativas de violência sexual preconizadas pelo Ministério da Saúde estabelecem que a palavra do doente presencial é soberana e suficiente para caracterizar e assegurar a violência contra a maturidade da mulher. Caberá à equipe multiprofissional (médico, psicólogo, enfermeiro e assistente social) ratificar a compatibilidade evolutiva da idade gestacional e o termo assinado, prosseguindo com o abortamento legal na rede pública garantida, sem necessidade de burocracias externas ou alvarás.',
    reference: 'Norma Técnica de Prevenção e Tratamento dos Agravos Resultantes da Violência Sexual contra Mulheres e Adolescentes, Ministério da Saúde, 3ª ed (2012).',
    tags: ['obstetrícia', 'aborto legal', 'violência sexual']
  },
  {
    id: 'tp2021-97',
    module: 'Ginecologia e Obstetrícia',
    text: 'Paciente, 57 anos, Gesta 3/Para 3, realizou colpocitologia de rotina com resultado de lesão intraepitelial escamosa de alto grau (HSIL), presença de Gardnerella vaginalis e Mobiluncus sp. O próximo passo do acompanhamento deve ser:',
    options: [
      '(A) Citologia em 6 meses.',
      '(B) Metronidazol e repetição da colpocitologia.',
      '(C) Histerectomia.',
      '(D) Colposcopia.'
    ],
    correctAnswer: 3,
    explanation: 'A identificação de HSIL (Lesão Intraepitelial Escamosa de Alto Grau) na colpocitologia oncótica é indicativa de lesão precursora verdadeira de alto risco para progressão neoplásica. Independentemente da concomitância secundária de floras bacterianas patogênicas oportunistas (como vaginose bacteriana por Gardnerella/Mobiluncus), a paciente deve ser encaminhada de modo célere direto para avaliação sob exame colposcópico pormenorizado.',
    commentary: 'A diretriz nacional de rastreamento do câncer cervical estabelece que toda citologia alterada com laudo de lesão de alto grau (HSIL) exige avaliação diagnóstica imediata em colposcopia. A presença de vaginose oportunista associada não altera o fluxo nem posterga a avaliação oncogênica principal. Se na colposcopia forem encontradas lesões suspeitas, procede-se à biópsia direta; se a junção escamocolunar (JEC) for plenamente visível, pode ser realizado o tratamento excisional de forma síncrona (ver e tratar).',
    reference: 'Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero, MS/INCA (2016); Tratado de Ginecologia FEBRASGO (2019).',
    tags: ['patologia cervical', 'colposcopia', 'oncologia']
  },
  {
    id: 'tp2021-98',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher de 52 anos procura atendimento por ondas de calor há 24 meses, com piora após a parada do fluxo menstrual (há 14 meses). Há 6 meses, apresenta também sensação de secura vaginal com dor ao coito. Refere estar em tratamento para hipertensão e diabetes há 7 anos, ambos controlados. Mãe com história de morte aos 65 anos por tromboembolismo. Sem outros achados dignos de nota. Ao exame: PA = 120/82 mmHg, mucosa vaginal hipotrófica, pele seca. Demais, sem particularidades. Traz exames de mamografia, densitometria, exames séricos e citopatológicos de colo uterino normais. O tratamento para este caso será:',
    options: [
      '(A) Estrogênio isolado.',
      '(B) Estrogênio e progestágeno.',
      '(C) Venlafaxina.',
      '(D) Isoflavona.'
    ],
    correctAnswer: 1,
    explanation: 'A paciente apresenta sintomas vasomotores severos (ondas de calor) associados a queixas graves de atrofia geniturinária (secura vaginal e dispareunia), sem contraindicações formais absolutas para Terapia Hormonal (TH). Como a paciente possui útero íntegro, a reposição estrogênica deve ser obrigatoriamente associada a um progestágeno para evitar estimulação estrogênica desimpedida sobre o endométrio (prevenindo hiperplasia e adenocarcinoma endometrial).',
    commentary: 'A reposição hormonal é o tratamento mais eficaz para fogachos e atrofia vaginal. O uso de estrogênio isolado sistêmico é contraindicado devido ao risco oncológico do tecido endometrial nas mulheres não histerectomizadas. A via transdérmica é preferível devido à presença de diabetes e hipertensão, mitigando o metabolismo hepático de primeira passagem e diminuindo riscos de eventos tromboembólicos. O antecedente familiar tardio materno de tromboembolismo aos 65 anos não anula a indicação terapêutica diante de controles lipídicos e cardiovasculares saudáveis em exames normais.',
    reference: 'Consenso Brasileiro de Terapêutica Hormonal da Menopausa – SOBRAC (2018).',
    tags: ['climatério', 'terapia hormonal', 'ginecologia geral']
  },
  {
    id: 'tp2021-99',
    module: 'Ginecologia e Obstetrícia',
    image: '/images/tp2021-99.webp',
    text: 'Paciente de 55 anos com queixa de “sensação de bola na vagina” e dificuldade para urinar. Relata atividade sexual regular. O exame ginecológico revela prolapso uterino completo (estágio IV). Qual o tratamento cirúrgico mais indicado?',
    options: [
      '(A) Histerectomia vaginal.',
      '(B) Histeropexia sacral.',
      '(C) Colporrafia anterior.',
      '(D) Colpocleise.'
    ],
    correctAnswer: 1,
    explanation: 'A correção de defeito de compartimento apical grave/prolapso uterino completo em mulher de 55 anos com vida sexual activa regular está balizada na suspensão cirúrgica de sustentação do ápice vaginal por via abdominal/laparoscópica, por meio da histeropexia sacral (preservando o útero ou associando à retirada) que preserva o comprimento e funcionalidade coaxial da vagina para coito. A colpocleise (fechamento vaginal) impede relações sexuais.',
    commentary: 'Na distopia apical avançada (prolapso uterino significativo), o objetivo cirúrgico primordial é devolver sustentação e eixos ao ápice vaginal. A colpocleise (técnicas de LeFort ou colpocleise total) possui excelentes resultados em doentes idosas frágeis desprovidas de perspectiva ou desejo reprodutivo/sexual futuro, pois oclui definitivamente a vagina. Para mulheres ativas no coito, a preservação do canal vaginal deve ser mantida. A histeropexia sacral constitui excelente via reconstrutiva, restabelecendo a biomecânica pélvica sem anular o canal de coito vaginal.',
    reference: 'Tratado de Ginecologia FEBRASGO. Rio de Janeiro: Elsevier, 2019. p. 2041.',
    tags: ['uroginecologia', 'distopia genital', 'prolapso uterino']
  },
  {
    id: 'tp2021-100',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher, 47 anos, solteira, nuligesta, traz exames de rotina. Apresenta ciclos menstruais regulares. Nega atividade sexual e não tem desejo de engravidar. A ultrassonografia endovaginal mostrou útero de volume 160 cm³ (média até 120 cm³), miométrio regular apresentando mioma intramural com 20 mm no maior diâmetro, endométrio regular trilaminar de espessura 8 mm, ovário direito com volume 8 cm³ (normal até 10 cm³) e ovário esquerdo com volume 9 cm³ com cisto anexial único, não septado, anecoico medindo 23 x 24 x 19 mm. A citologia oncológica do colo uterino, mamografia, e exames laboratoriais estão com valores normais. A conduta a ser adotada é:',
    options: [
      '(A) Histerectomia e ooforoplastia esquerda.',
      '(B) Contraceptivo hormonal contínuo.',
      '(C) Miomectomia histeroscópica.',
      '(D) Expectante.'
    ],
    correctAnswer: 3,
    explanation: 'A paciente encontra-se assintomática e apresenta ciclos menstruais regulares normais. Os achados incidentais de imagem representam pequenas alterações ginecológicas benignas sem repercussão de urgência: um pequeno mioma intramural (20 mm) e um cisto folicular ovariano simples unilocular unianecoico medindo menos de 3,0 cm de diâmetro. Nesses cenários assintomáticos, a conduta ideal é a expectante.',
    commentary: 'Miomas pequenos e assintomáticos intramurais não necessitam de abordagens cirúrgicas eletivas (miomectomia ou histerectomia) ou hormonais preventivas, especialmente nos cenários de perimenopausa e aproximação do silenciamento menstrual fisiológico. O cisto ovariano visualizado é simples, unilocular, de conteúdo inteiramente anecoico medindo menos de 30 mm de diâmetro, preenchendo todos os preceitos de um cisto lúteo/folicular fisiológico temporário autolimitado. Portanto, conduta puramente expectante monitorada com exames futuros de rotina regular é a diretriz mais segura e correta.',
    reference: 'Tratado de Ginecologia FEBRASGO. Rio de Janeiro: Elsevier, 2019. p. 956.',
    tags: ['ginecologia geral', 'cisto de ovário', 'mioma uterino', 'conduta expectante']
  },
  {
    id: 'tp2026-81',
    module: 'Ginecologia e Obstetrícia',
    text: 'Durante atendimento em uma UBS, um homem trans de 32 anos, em uso de testosterona e sem cirurgias ginecológicas, procura orientação sobre planejamento reprodutivo, desejando evitar gestação no momento, mas manter a possibilidade futura. Considerando princípios bioéticos, direitos reprodutivos e a atuação da Atenção Primária, assinale a alternativa correta.',
    options: [
      '(A) Informar que a testosterona não é contraceptivo, discutir métodos contraceptivos e orientar sobre possibilidade futura de gestação.',
      '(B) Informar que a testosterona impede a ovulação, sendo suficiente como método contraceptivo.',
      '(C) Explicar que homens trans não devem receber aconselhamento sobre gestação, pois conflita com a identidade de gênero.',
      '(D) Encaminhar para serviço especializado antes de qualquer orientação sobre os métodos contraceptivos.'
    ],
    correctAnswer: 0,
    explanation: "Um homem trans que tem útero e ovários pode engravidar, mesmo em uso de testosterona. O hormônio pode suprimir a ovulação e causar amenorreia, mas isso depende de dose e tempo e não é seguro: o hormônio não pode ser usado como anticoncepcional e, se houver gestação, é teratogênica.\n\nPortanto, o médico da Atenção Primária deve acolher, informar que é preciso contracepção, discutir os métodos (os de progestagênio isolado, o DIU de cobre e o preservativo são opções que não interferem na hormonização masculinizante) e orientar sobre a fertilidade futura. Isso respeita a autonomia e os direitos reprodutivos garantidos pela Lei do Planejamento Familiar.",
    commentary: "Testosterona como contraceptivo (B): a ovulação pode ocorrer mesmo com amenorreia; confiar no hormônio expõe a pessoa a uma gravidez não desejada.\n\nNegar aconselhamento sobre gestação (C): é discriminatório e viola os direitos reprodutivos e a equidade; a identidade de gênero não impede o desejo de gestar ou de evitar gestação.\n\nEncaminhar antes de orientar (D): planejamento reprodutivo é atribuição da APS; o encaminhamento fica para situações específicas, sem atrasar a orientação.",
    tip: "Testosterona não é anticoncepcional. Homem trans com útero precisa de orientação contraceptiva na APS.",
    reference: 'Ministério da Saúde. Atenção integral à saúde da população LGBT no SUS. Brasília: Ministério da Saúde, 2013. Lei nº 9.263 de 1996. Dispõe sobre o planejamento familiar no Brasil.',
    tags: ['bioética', 'planejamento reprodutivo', 'saúde LGBT']
  },
  {
    id: 'tp2026-82',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher cis, branca, 30 anos, refere dor pélvica há 5 dias, febre (38,1°C) e corrimento vaginal. Exame abdominal: dor em hipogástrio, sem sinais de irritação peritoneal. Exame especular: secreção mucopurulenta cervical; toque bimanual: dor à mobilização do colo e dor anexial bilateral. Leucócitos 15.200/mm³ e PCR elevada. Qual mecanismo fisiopatológico explica o quadro descrito?',
    options: [
      '(A) Translocação de bactérias intestinais para a cavidade peritoneal, com inflamação pélvica secundária e posterior contaminação do trato genital.',
      '(B) Disseminação hematogênica de patógenos sistêmicos, com implantação inicial da infecção nos ovários e posterior acometimento tubáreo.',
      '(C) Ascensão de microrganismos do trato genital inferior através do canal cervical, com infecção do endométrio e trompas e resposta inflamatória que lesa o epitélio tubáreo.',
      '(D) Processo inflamatório autoimune primário das trompas uterinas, desencadeado por alteração hormonal do ciclo menstrual.'
    ],
    correctAnswer: 2,
    explanation: "Dor pélvica, febre, secreção cervical mucopurulenta, dor à mobilização do colo e dor anexial bilateral, com leucocitose e PCR elevada, configuram doença inflamatória pélvica (DIP).\n\nO mecanismo é a infecção ascendente: microrganismos do colo e da vagina, sobretudo Chlamydia trachomatis e Neisseria gonorrhoeae, além de bactérias da vaginose, sobem pelo canal cervical e atingem endométrio, trompas e às vezes o peritônio pélvico. A inflamação lesa o epitélio ciliado das tubas, e as cicatrizes explicam as sequelas: infertilidade, gravidez ectópica e dor pélvica crônica. O tratamento deve cobrir gonococo, clamídia e anaeróbios, e as parcerias sexuais também precisam ser tratadas.",
    commentary: "Translocação intestinal (A): pode ocorrer em processos abdominais, como a apendicite, que inflamam secundariamente a pelve, mas não é o caminho da DIP, que começa no trato genital.\n\nDisseminação hematogênica (B): a via sanguínea só é relevante em casos raros, como a tuberculose genital; a DIP começa no colo e progride para cima.\n\nAutoimunidade primária (D): a inflamação da DIP é uma resposta à infecção bacteriana, não um processo autoimune ou hormonal.",
    tip: "DIP = infecção ascendente (clamídia e gonococo) do colo para endométrio e trompas; sequelas: infertilidade e ectópica.",
    reference: 'FEBRASGO. Manual de Orientação: Doença Inflamatória Pélvica. Federação Brasileira das Associações de Ginecologia e Obstetrícia, 2023. BEREK, J. S. Berek & Novak’s Gynecology. 16ª ed. Philadelphia: Wolters Kluwer, 2020.',
    tags: ['DIP', 'fisiopatologia', 'infecções sexualmente transmissíveis']
  },
  {
    id: 'tp2026-83',
    module: 'Ginecologia e Obstetrícia',
    text: 'Na UBS, uma mulher de 28 anos procura atendimento para orientações sobre anticoncepção. Ela relata vida sexual ativa com parceiro fixo, menstruações regulares e deseja um método eficaz, reversível e de uso contínuo, pois tem dificuldade de se lembrar dos comprimidos diariamente. Está bastante preocupada com uma gravidez indesejada e gostaria de iniciar o método logo. Refere que não fuma, não tem enxaqueca. Refere que após uma viagem longa apresentou um episódio de trombose em membro inferior esquerdo, o diagnóstico não foi feito oportunamente, mas os médicos a alertaram para a possibilidade. Assinale a alternativa com a indicação de método anticoncepcional para essa paciente.',
    options: [
      '(A) Anticoncepcional oral combinado',
      '(B) Dispositivo intrauterino de cobre',
      '(C) Método contraceptivo de barreira',
      '(D) Anticoncepcional injetável combinado mensal'
    ],
    correctAnswer: 1,
    explanation: "A paciente quer um método muito eficaz, reversível e que não dependa de tomar comprimido todo dia, e tem história de provável trombose venosa profunda. Métodos com estrogênio aumentam o risco de trombose e ficam contraindicados (categoria 4 dos critérios de elegibilidade da OMS) em quem já teve trombose venosa.\n\nO DIU de cobre não tem hormônio, é seguro após trombose (categoria 1), é um dos métodos mais eficazes, dura cerca de 10 anos e pode ser inserido na própria UBS. O DIU hormonal com levonorgestrel e o implante seriam alternativas aceitáveis, mas não estão entre as opções.",
    commentary: "Anticoncepcional oral combinado (A): tem estrogênio, contraindicado com antecedente de trombose, e depende do uso diário, que é justamente a dificuldade da paciente.\n\nMétodo de barreira (C): não tem risco de trombose e protege contra infecções sexualmente transmissíveis, mas falha muito no uso real e não atende ao desejo de alta eficácia.\n\nInjetável combinado mensal (D): também contém estrogênio e, portanto, é contraindicado após trombose.",
    tip: "História de trombose: nada de estrogênio. DIU de cobre é eficaz, sem hormônio e dura cerca de 10 anos.",
    reference: 'World Health Organization. Medical eligibility criteria for contraceptive use. 6th ed. Geneva: WHO; 2024.',
    tags: ['contracepção', 'DIU de cobre', 'critérios de elegibilidade']
  },
  {
    id: 'tp2026-84',
    module: 'Ginecologia e Obstetrícia',
    text: 'Uma mulher de 38 anos, nuligesta, parda, procura atendimento ambulatorial com queixa de aumento do fluxo menstrual há cerca de 8 meses, associado a sensação de peso pélvico. Ao exame ginecológico, observa-se útero aumentado de volume, irregular, móvel e indolor à palpação. Diante do quadro descrito, assinale a alternativa que indica a abordagem diagnóstica inicial para essa paciente.',
    options: [
      '(A) Ressonância magnética pélvica',
      '(B) Histeroscopia diagnóstica',
      '(C) Tomografia computadorizada de abdome e pelve',
      '(D) Ultrassonografia pélvica transvaginal'
    ],
    correctAnswer: 3,
    explanation: "Mulher de 38 anos com sangramento menstrual aumentado, sensação de peso pélvico e útero aumentado, irregular e móvel ao toque: o diagnóstico mais provável é leiomioma uterino (mioma), o tumor pélvico benigno mais comum na mulher.\n\nO primeiro exame é a ultrassonografia pélvica transvaginal, que é acessível, barata, não invasiva e mostra bem o número, o tamanho e a localização dos nódulos (submucoso, intramural ou subseroso), além de avaliar o endométrio. Exames mais complexos ficam para casos selecionados.",
    commentary: "Ressonância magnética (A): é útil para mapear miomas antes de cirurgia conservadora ou quando o ultrassom é inconclusivo, por exemplo para diferenciar de adenomiose; não é o exame inicial.\n\nHisteroscopia (B): avalia e trata lesões da cavidade, como miomas submucosos e pólipos; é invasiva e entra depois do ultrassom, quando ele sugere lesão intracavitária.\n\nTomografia (C): avalia mal os órgãos pélvicos, expõe à radiação e não tem papel na investigação de miomas.",
    tip: "Útero aumentado e irregular com sangramento aumentado: pense em mioma e peça ultrassom transvaginal primeiro.",
    reference: 'Tratado de Ginecologia da FEBRASGO. Cesar Eduardo Fernandes, Marcos Felipe Silva de Sá. 1ª ed. Rio de Janeiro: Elsevier, 2019.',
    tags: ['miomatose uterina', 'ultrassonografia', 'diagnóstico']
  },
  {
    id: 'tp2026-85',
    module: 'Ginecologia e Obstetrícia',
    text: 'Katia, 29 anos, procura atendimento em ambulatório de ginecologia apresentando quadro de amenorreia. Refere uso de DIU de cobre. Durante o exame físico, é detectada a presença de galactorreia bilateral. Com base no caso apresentado, qual informação adicional da anamnese contribuiria para fortalecer a principal suspeita clínica?',
    options: [
      '(A) Presença de sangramento uterino aumentado com ciclos menstruais irregulares e acne.',
      '(B) Presença de prurido mamário bilateral periareolar associado a galactorreia encontrada no exame físico.',
      '(C) Relato de dismenorreia intensa associada a dor pélvica crônica e infertilidade.',
      '(D) História de uso recente de medicamentos psiquiátricos, como alguns antipsicóticos ou antidepressivos.'
    ],
    correctAnswer: 3,
    explanation: 'A combinação de amenorreia e galactorreia sugere hiperprolactinemia. O uso de medicamentos que antagonizam os receptores dopaminérgicos D2 na hipófise anterior, como antipsicóticos ou antidepressivos, é a principal causa farmacológica desse quadro.',
    commentary: 'A hiperprolactinemia pode ser definida como aumento das concentrações séricas de prolactina (PRL). O uso de medicamentos é a causa não fisiológica mais frequente, sendo antipsicóticos e antidepressivos os que mais comumente provocam esse quadro devido ao antagonismo dopaminérgico. Manifestações clínicas incluem irregularidade menstrual, amenorreia, galactorreia e infertilidade. Portanto, investigar o uso de tais medicações na anamnese é crucial para identificar a etiologia. Sobre os distratores: (A) Sangramento aumentado e acne sugerem outras condições (como SOP), mas não explicam a galactorreia. (B) O prurido mamário bilateral geralmente se associa a patologias cutâneas benignas (ex: eczema), sem relação direta com prolactina. (C) Dismenorreia e infertilidade sugerem endometriose, não explicando a galactorreia.',
    reference: 'Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO). Diagnóstico e tratamento da hiperprolactinemia. São Paulo: FEBRASGO; 2021 (Protocolo FEBRASGO. Ginecologia, n. 79/Comissão Nacional Especializada em Ginecologia Endócrina).',
    tags: ['hiperprolactinemia', 'amenorreia', 'galactorreia']
  },
  {
    id: 'tp2026-86',
    module: 'Ginecologia e Obstetrícia',
    text: 'Uma mulher de 26 anos procura a Unidade Básica de Saúde (UBS) com queixa de ausência de menstruação há 8 meses. Relata que seus ciclos eram regulares anteriormente. Nega gravidez (teste urinário negativo), uso de medicações, perda de peso súbita ou estresse excessivo. Ao exame físico, apresenta índice de massa corporal (IMC) de 24kg/m², ausência de galactorreia ou sinais de hiperandrogenismo. Foi realizado o teste da progesterona (Acetato de Medroxiprogesterona 10mg/dia, por 10 dias), que resultou em ausência de sangramento após a suspensão. Em seguida, foi realizado o teste do estrogênio e progesterona combinados, que resultou em sangramento vaginal normal. Considerando a descrição do caso, qual a interpretação correta sobre o mecanismo da doença desta paciente?',
    options: [
      '(A) O teste da progesterona negativo confirma que a paciente possui níveis adequados de estrogênio endógeno, mas falha na ovulação.',
      '(B) A paciente apresenta uma alteração anatômica na saída (útero/ vagina), como a Síndrome de Asherman, impedindo o fluxo menstrual, apesar do estímulo hormonal.',
      '(C) O sangramento após o teste combinado descarta causas anatômicas e indica que a amenorreia decorre de uma falha na produção de gonadotrofinas ou falência ovariana.',
      '(D) A resposta positiva ao teste combinado sugere que a causa da amenorreia é a hipofisária, pelo bloqueio da produção de progesterona.'
    ],
    correctAnswer: 2,
    explanation: 'O sangramento após o teste combinado de estrogênio e progesterona demonstra que a via de saída (útero, colo e vagina) está pérvia e funcional. Como o teste de progesterona isolado foi negativo, conclui-se que o endométrio não estava previamente exposto ao estrogênio endógeno (hipoestrogenismo), apontando para falha ovariana ou central.',
    commentary: 'A investigação de amenorreia secundária segue passos diagnósticos precisos. O teste da progesterona avalia o nível de estrogênio endógeno e a integridade anatômica; se negativo, indica hipoestrogenismo ou barreira anatômica. O teste combinado (estrogênio + progesterona) simula um ciclo endometrial completo. Havendo sangramento, excluem-se causas anatômicas (como a Síndrome de Asherman ou estenoses). Assim, a disfunção localiza-se no ovário (falha ovariana precoce) ou no eixo central (hipotálamo/hipófise), devendo prosseguir-se com a dosagem de FSH. Sobre os distratores: (A) O teste da progesterona negativo indica baixos níveis de estrogênio ou causa anatômica. (B) Na causa anatômica, o teste combinado também seria negativo. (D) A falha hipofisária pode causar o quadro, mas o teste combinado não avalia o "bloqueio da progesterona" e sim a integridade anatômica e a responsividade endometrial.',
    reference: 'Tratado de Ginecologia da FEBRASGO. Cesar Eduardo Fernandes, Marcos Felipe Silva de Sá. 1ª ed. Rio de Janeiro: Elsevier, 2019.',
    tags: ['amenorreia', 'investigação clínica', 'ginecologia endócrina']
  },
  {
    id: 'tp2026-87',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher de 34 anos, preta, apresenta nódulo mamário palpável, móvel, sem sinais inflamatórios. Sem história familiar relevante. Indique a estratégia diagnóstica inicial.',
    options: [
      '(A) Ultrassonografia mamária',
      '(B) Mamografia bilateral',
      '(C) Biópsia por core',
      '(D) Ressonância mamária'
    ],
    correctAnswer: 0,
    explanation: 'Em pacientes jovens (< 40 anos), a avaliação inicial de nódulos mamários palpáveis deve ser realizada prioritariamente por ultrassonografia devido à maior densidade do tecido mamário nessa faixa etária.',
    commentary: 'Em mulheres com idade inferior a 40 anos, a ultrassonografia mamária é a modalidade de escolha inicial na investigação de nódulos palpáveis, em razão de sua alta acurácia em mamas densas e ausência de radiação ionizante. A mamografia, embora padrão-ouro no rastreamento acima dos 50 anos, tem sua sensibilidade reduzida nessas faixas etárias pelo padrão denso da glândula. Sobre os distratores: (B) A mamografia não é recomendada como exame de primeira linha nesta faixa etária. (C) A biópsia é indicada apenas após a identificação de imagens com critérios de suspeita de malignidade (BI-RADS 4 ou 5). (D) A ressonância magnética é exame complementar e não inicial.',
    reference: 'INCA. Diretrizes para o diagnóstico do câncer de mama. 2022. Ministério da Saúde. Rastreamento do câncer de mama. 2021. FEBRASGO. Manual de Mastologia. 2021.',
    tags: ['mastologia', 'ultrassonografia', 'câncer de mama']
  },
  {
    id: 'tp2026-88',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher de 32 anos, branca, procura a Unidade Básica de Saúde devido a lesões verrucosas na vulva há 3 meses. Refere vida sexual ativa, sem queixas. Ao exame, há múltiplas verrugas exofíticas pequenas em vulva/períneo, sem sinais de complicação. Sem sinais de imunossupressão. Teste de gravidez negativo. Indique a conduta inicial.',
    options: [
      '(A) Iniciar imiquimode tópico 5% e programar reavaliação em 4 a 8 semanas.',
      '(B) Indicar a aplicação de ATA (ácido tricloroacético) domiciliar, 1 vez ao dia, até o desaparecimento das lesões.',
      '(C) Realizar biópsia e aguardar o resultado anatomopatológico para a indicação do tratamento.',
      '(D) Indicar medidas de higiene local e programar retorno para reavaliação em 6 meses.'
    ],
    correctAnswer: 0,
    explanation: 'O tratamento de verrugas anogenitais benignas causadas por HPV pode ser feito com imiquimode tópico a 5%, uma opção de autoaplicação domiciliar eficaz e segura sob acompanhamento clínico.',
    commentary: 'O tratamento do condiloma acuminado visa à destruição ou remoção das lesões clínicas. O imiquimode 5% é um imunomodulador de aplicação domiciliar pelo próprio paciente, indicado para lesões externas vulvares e perineais. Sobre os distratores: (B) O ácido tricloroacético (ATA) é um agente cáustico que causa necrose química e deve ser obrigatoriamente aplicado por profissional médico em consultório, devido ao alto risco de queimaduras graves na pele sadia se usado de forma domiciliar. (C) A biópsia não é necessária de rotina para condilomas típicos, sendo reservada para lesões suspeitas, refratárias ou em pacientes imunocomprometidos. (D) A conduta expectante não é recomendada na presença de lesões clínicas ativas.',
    reference: 'Ministério da Saúde (Brasil). Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com Infecções Sexualmente Transmissíveis (PCDT IST). Seção sobre HPV e tratamento/seguimento de verrugas anogenitais. 2022.',
    tags: ['condiloma acuminado', 'HPV', 'DST']
  },
  {
    id: 'tp2026-89',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher de 26 anos, parda, procura a Unidade Básica de Saúde devido a ciclos menstruais longos, com intervalos que variam entre 40 e 60 dias desde a adolescência e acne persistente. Refere dificuldade para perder peso. Nega uso de anticoncepcional. Ao exame: IMC 31kg/m², acantose nigricans em pescoço e hirsutismo leve. Teste de gravidez negativo. Dentre os possíveis mecanismos fisiopatológicos da doença, assinale o que explica o conjunto de achados dessa paciente.',
    options: [
      '(A) Aumento de LH hipofisário',
      '(B) Supressão ovariana por FSH',
      '(C) Resistência à insulina',
      '(D) Aumento de SHBG hepática'
    ],
    correctAnswer: 2,
    explanation: 'A resistência periférica à insulina e a consequente hiperinsulinemia compensatória desempenham papel fisiopatológico central na Síndrome dos Ovários Policísticos (SOP). A insulina estimula a produção de andrógenos nas células da teca ovariana e suprime a síntese hepática de SHBG, aumentando a testosterona livre.',
    commentary: 'A paciente apresenta clínica e sinais clássicos da Síndrome dos Ovários Policísticos (SOP), incluindo anovulação crônica (ciclos oligomenorreicos), hiperandrogenismo clínico (acne, hirsutismo leve) e obesidade com acantose nigricans (marcador clássico de resistência à insulina). Na SOP, a resistência à insulina leva a hiperinsulinemia, que atua diretamente nos receptores de insulina ovarianos potencializando o estímulo do LH nas células da teca, resultando em hiperandrogenismo. A insulina também inibe a produção hepática de SHBG (globulina transportadora de hormônios sexuais), aumentando as frações livres de andrógenos circulantes. Sobre os distratores: (A) Embora alterações nos pulsos de LH ocorram na SOP, o aumento do LH isolado não explica diretamente a acantose nigricans ou a totalidade das alterações metabólicas. (B) Não há supressão ovariana por FSH envolvida na patogênese. (D) A hiperinsulinemia reduz a SHBG hepática, não ocorrendo seu aumento.',
    reference: 'Williams Gynecology. 4th ed. McGraw Hill, 2020. FEBRASGO. Síndrome dos Ovários Policísticos – Diretrizes. São Paulo: FEBRASGO, 2021.',
    tags: ['SOP', 'fisiopatologia', 'endocrinologia ginecológica']
  },
  {
    id: 'tp2026-90',
    module: 'Ginecologia e Obstetrícia',
    text: 'Uma paciente de 22 anos, branca, procura atendimento por amenorreia há 8 meses. Relata perda ponderal de 10kg no último ano, associada a prática intensa de exercícios físicos e restrição alimentar. Nega uso de anticonceptivos. Ao exame físico, apresenta IMC de 17kg/m², frequência cardíaca de 52bpm e sinais de hipoestrogenismo. Teste de gravidez negativo. Exames laboratoriais: LH, FSH, Estradiol: abaixo dos valores de referência; Prolactina normal e TSH normal. Nesse caso, a amenorreia apresentada pela paciente apresenta como principal mecanismo fisiopatológico:',
    options: [
      '(A) Falência ovariana primária com depleção folicular precoce.',
      '(B) Supressão pulsátil do GnRH por alteração no eixo hipotálamo-hipófise.',
      '(C) Hiperprolactinemia levando à inibição da secreção de gonadotrofinas.',
      '(D) Resistência ovariana aos hormônios gonadotróficos.'
    ],
    correctAnswer: 1,
    explanation: 'A perda de peso rápida, desnutrição (IMC 17) e exercício extenuante geram um estresse metabólico que altera a secreção pulsátil de GnRH no hipotálamo, resultando em hipogonadismo hipogonadotrófico (amenorreia hipotalâmica funcional).',
    commentary: 'O quadro de amenorreia secundária associado a baixo peso (IMC < 18,5), exercícios intensos e restrição calórica caracteriza a Amenorreia Hipotalâmica Funcional. Sob estresse metabólico e balanço energético negativo, há uma diminuição da frequência e amplitude da secreção pulsátil do hormônio liberador de gonadotrofinas (GnRH) pelo hipotálamo, o que secundariamente reduz a produção de LH e FSH pela hipófise e de estradiol pelos ovários. Sobre os distratores: (A) Na falência ovariana primária, os níveis de FSH e LH estariam elevados (hipogonadismo hipergonadotrófico). (C) A prolactina sérica encontra-se em níveis normais, descartando hiperprolactinemia. (D) A resistência ovariana (Síndrome de Savage) também cursa com níveis elevados de gonadotrofinas.',
    reference: 'Manual de Ginecologia Endócrina FEBRASGO, 2015. BEREK, J. S. Berek & Novak’s Gynecology. 16ª ed. Philadelphia: Wolters Kluwer, 2020.',
    tags: ['amenorreia hipotalâmica', 'fisiopatologia', 'transtornos alimentares']
  },
  {
    id: 'tp2026-91',
    module: 'Ginecologia e Obstetrícia',
    text: 'Primigesta de 24 semanas, com lúpus eritematoso sistêmico, em uso de hidroxicloroquina e azatioprina, refere artralgia em mãos e fadiga há 2 semanas; nega febre, edema ou sintomas urinários. PA 120/78mmHg, exame obstétrico normal. Identifique o próximo passo no planejamento diagnóstico para determinar atividade da doença.',
    options: [
      '(A) Solicitar biópsia renal em associação com exame de urina e hemograma.',
      '(B) Solicitar ultrassonografia obstétrica com Doppler e avaliação do bem-estar fetal.',
      '(C) Solicitar punção lombar para excluir neurolúpus diante de fadiga em gestante lúpica.',
      '(D) Solicitar complemento sérico (C3/C4), anti-dsDNA, hemograma e provas de atividade inflamatória.'
    ],
    correctAnswer: 3,
    explanation: 'A suspeita de reativação de lúpus eritematoso sistêmico (LES) durante a gestação deve ser investigada laboratorialmente pela dosagem de frações de complemento (C3/C4), anticorpo anti-dsDNA, hemograma completo e provas inflamatórias para confirmar atividade imunológica.',
    commentary: 'Artralgia e fadiga em gestante com LES podem indicar atividade lúpica ativa. O monitoramento imunológico laboratorial com dosagem de complemento (C3 e C4) e títulos de anti-dsDNA é considerado o padrão-ouro; a redução de C3/C4 e a elevação do anti-dsDNA corroboram a atividade de doença. Hemograma e reagentes de fase aguda avaliam manifestações hematológicas (como anemia, plaquetopenia ou leucopenia) e inflamatórias sistêmicas. Sobre os distratores: (A) A biópsia renal é invasiva e só se justifica em caso de forte suspeita de nefrite lúpica ativa (como proteinúria nefrótica, hematúria e piora de função renal). (B) O Doppler avalia a repercussão fetal, mas não afere o grau de atividade da doença materna propriamente dita. (C) A punção lombar é invasiva e inadequada na ausência de sintomas neurológicos objetivos.',
    reference: 'BRASIL. Ministério da Saúde. Manual Técnico de Gestação de Alto Risco. Brasília: MS; 2022. FEBRASGO. Lúpus Eritematoso Sistêmico e Gravidez. São Paulo: FEBRASGO; 2025.',
    tags: ['gestação de alto risco', 'lúpus', 'autoimunidade']
  },
  {
    id: 'tp2026-92',
    module: 'Ginecologia e Obstetrícia',
    text: 'Primigesta de 32 anos, com 35 semanas de gestação, dá entrada no Serviço de Urgência apresentando cefaleia holocraniana persistente, visão turva e dor em hipocôndrio direito. Ao exame físico, apresenta-se consciente, orientada, com pressão arterial de 170/115mmHg, edema de membros inferiores (3+/4+) e reflexos osteotendíneos aumentados. A avaliação obstétrica demonstra batimentos cardiofetais presentes e rítmicos, sem sinais de trabalho de parto. Diante do quadro descrito, qual deve ser o planejamento terapêutico imediato para esta paciente?',
    options: [
      '(A) Iniciar Hidralazina venosa para controle da crise hipertensiva e, após o controle dos níveis pressóricos, iniciar o esquema de Sultato de Magnésio.',
      '(B) Iniciar esquema de ataque e manutenção com Sulfato de Magnésio para prevenção de eclâmpsia e Hidralazina venosa para controle da pressão arterial diastólica.',
      '(C) Administrar Nifedipina oral de curta duração para redução rápida da pressão arterial abaixo de 120/80mmHg e realizar a indução imediata do parto com ocitocina.',
      '(D) Prescrever Fenobarbital para profilaxia de convulsões e iniciar Nitroprussiato de Sódio para controle rigoroso da pressão arterial média.'
    ],
    correctAnswer: 1,
    explanation: 'Gestante com pré-eclâmpsia grave com sinais de iminência de eclâmpsia exige manejo terapêutico imediato com Sulfato de Magnésio (esquema de ataque e manutenção) para profilaxia de convulsões, associado ao controle da crise hipertensiva aguda com anti-hipertensivo venoso de ação rápida (Hidralazina).',
    commentary: 'O quadro clínico descreve uma emergência hipertensiva da gravidez (Pré-eclâmpsia grave com sinais de iminência de eclâmpsia: cefaleia, distúrbios visuais, dor em hipocôndrio [estiramento da cápsula de Glisson] e hiperreflexia). A conduta medicamentosa imediata baseia-se em dois pilares: a) Prevenção de eclâmpsia com Sulfato de Magnésio (padrão-ouro); b) Controle urgente da crise hipertensiva com Hidralazina IV (ou labetalol) visando baixar a PA diastólica para faixa segura (90-100 mmHg), reduzindo o risco de hemorragia cerebral sem comprometer a perfusão uteroplacentária. Sobre os distratores: (A) A infusão de magnésio não deve ser postergada. (C) Redução rápida para níveis normotensivos estritos (120/80) causa sofrimento fetal agudo grave por queda de fluxo útero-placentário; além disso, a Nifedipina sublingual de curta duração é contraindicada. (D) O fenobarbital não é de primeira escolha e o nitroprussiato apresenta toxicidade por cianeto ao feto.',
    reference: 'FEDERAÇÃO BRASILEIRA DAS ASSOCIAÇÕES DE GINECOLOGIA E OBSTETRÍCIA (FEBRASGO). Pré-eclâmpsia. São Paulo: FEBRASGO, 2023.',
    tags: ['pré-eclâmpsia', 'urgência e emergência', 'hipertensão na gestação']
  },
  {
    id: 'tp2026-93',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher de 27 anos, G2P1, com hypertension arterial crônica, em uso de metildopa, dá entrada na maternidade com 36 semanas gestacionais apresentando dor abdominal de início súbito, hipertonia uterina permanente, sangramento vaginal de coloração escura e ausência de batimentos cardíacos fetais. Exame físico: PA 160x110mmHg, FC 122bpm e útero lenhoso à palpação. Exames laboratoriais: fibrinogênio 75mg/dL; plaquetas 54.000/mm³; TP: alargado, D-dímero: fortemente positivo e presença de esquizócitos no esfregaço periférico. O mecanismo que explica os aspectos morfofuncionais envolvidos no caso descrito e sugerido pelo padrão laboratorial encontrado é:',
    options: [
      '(A) A infiltração hemorrágica miometrial (útero de Couvelaire), agravada pela hipertensão subjacente, libera hemoglobina livre, que inibe diretamente a trombina e a plasmina, determinando hipofibrinogenemia por bloqueio enzimático, sem ativação prévia da via extrínseca da coagulação.',
      '(B) O vasoespasmo placentário crônico da hipertensão promove isquemia vilositária e, associado à hipertonia uterina do hematoma retroplacentário, causa hemólise mecânica intravascular com consumo isolado de plaquetas, sem comprometimento primário dos fatores de coagulação plasmáticos.',
      '(C) A lesão endotelial crônica pela hipertensão fragiliza os vasos deciduais; o descolamento expõe tromboplastina tecidual à circulação materna, ativa a via extrínseca da coagulação com geração excessiva de trombina e consumo sistêmico de fibrinogênio, plaquetas e fatores V e VIII, configurando CIVD com fibrinólise secundária.',
      '(D) O choque hipovolêmico do descolamento prematuro de placenta grave em hipertensa crônica precipita síndrome hepatorrenal aguda, com queda na síntese hepática de fatores vitamina K dependentes (II, VII, IX e X) e plaquetopenia por hiperesplenismo portal, justificando o alargamento do TP e a trombocitopenia observados.'
    ],
    correctAnswer: 2,
    explanation: 'No Descolamento Prematuro de Placenta (DPP), a lesão vascular decidual e o descolamento coriodecidual liberam tromboplastina tecidual na circulação materna. Isso desencadeia a cascata extrínseca da coagulação, levando a consumo de plaquetas e fatores plasmáticos (CIVD), evidenciado laboratorialmente pelo fibrinogênio baixo, plaquetopenia, prolongamento do TP, esquizócitos (anemia microangiopática) e elevação do D-dímero.',
    commentary: 'O caso descreve um Descolamento Prematuro de Placenta (DPP) grave com óbito fetal, complicação clássica em gestantes hipertensas. O mecanismo fisiopatológico central reside na arteriolopatia crônica das artérias espiraladas deciduais. Com a ruptura destes vasos e formação do hematoma retroplacentário, há maciça liberação de tromboplastina tecidual na circulação materna. Esse fator ativa intensamente a via extrínseca da coagulação, gerando trombina sistêmica em excesso, consumo de fibrinogênio, plaquetas e cofatores V e VIII (Coagulação Intravascular Disseminada - CIVD). A ativação secundária da fibrinólise resulta em elevação expressiva do D-dímero, e a passagem de hemácias pela malha de fibrina provoca a fragmentação eritrocitária (esquizócitos). Sobre os distratores: (A) A hipofibrinogenemia não decorre de bloqueio enzimático direto pela hemoglobina livre, mas sim de consumo real por coagulopatia difusa. (B) A coagulopatia do DPP é marcadamente de consumo plasmático, e não hemólise mecânica com consumo isolado de plaquetas. (D) A disfunção sintética hepática e o hiperesplenismo são processos puramente crônicos e não explicam a coagulopatia hiperaguda nem os esquizócitos no esfregaço periférico.',
    reference: 'ZUGAIB, M. Zugaib Obstetrícia. 5. ed. Barueri: Manole, 2023. BENZ, E. J. Hematology: Basic Principles and Practice. 8th ed. Elsevier, 2022.',
    tags: ['obstetrícia', 'descolamento prematuro de placenta', 'coagulopatia de consumo']
  },
  {
    id: 'tp2026-94',
    module: 'Ginecologia e Obstetrícia',
    image: '/images/tp2026-94.webp',
    text: 'Mulher de 31 anos, G2P1, com 39 semanas gestacionais, encontra-se em trabalho de parto no centro obstétrico, com evolução conforme o partograma abaixo:\n[Partograma mostra parada secundária da dilatação: ausência de progressão da dilatação cervical por 2 horas ou mais durante a fase ativa na presença de contrações adequadas]\nA conduta adequada para essa gestante é:',
    options: [
      '(A) Realizar amniotomia imediata para acelerar o trabalho de parto, independentemente da avaliação da dinâmica uterina e progressão cervical.',
      '(B) Manter conduta expectante com reavaliação em 2 horas, pois o partograma ainda se encontra dentro dos limites de normalidade evolutiva.',
      '(C) Iniciar ocitocina para correção de possível hipodinamia uterina, mesmo com contrações adequadas, visando acelerar a dilatação cervical.',
      '(D) Realizar cesariana por falha de progressão do trabalho de parto, considerando parada secundária da dilatação com contrações adequadas.'
    ],
    correctAnswer: 3,
    explanation: 'A parada de evolução da dilatação por duas horas consecutivas com contrações uterinas efetivas e adequadas caracteriza uma parada secundária da dilatação (distocia funcional), constituindo indicação formal para parto cesáreo.',
    commentary: 'Segundo as diretrizes de condução do parto, quando o partograma sinaliza parada secundária da dilatação (duas avaliações sucessivas com intervalo de 2 horas ou mais sem qualquer modificação no colo em fase ativa) e a dinâmica uterina é comprovadamente adequada e eficaz (contrações de intensidade e frequência normais), a conduta preconizada é a indicação de cesariana, pois não há disfunção motora a ser corrigida com ocitocina e o risco de desproporção cefalopélvica é elevado. Sobre os distratores: (A) Amniotomia isolada não reverte a parada quando as contrações já são eficazes. (B) Aguardar mais tempo expõe o binômio a riscos de sofrimento fetal e infecção amniótica. (C) A ocitocina é contraindicada na presença de dinâmica uterina já adequada devido ao risco de taquissistolia e ruptura uterina.',
    reference: 'ZUGAIB, M. Zugaib Obstetrícia. 5. ed. Barueri: Manole, 2023. Rezende Obstetrícia. 14ª ed. Rio de Janeiro: Guanabara Koogan, 2021.',
    tags: ['trabalho de parto', 'partograma', 'cesariana']
  },
  {
    id: 'tp2026-95',
    module: 'Ginecologia e Obstetrícia',
    text: 'Primigesta de 25 anos, com gestação única de 31 semanas, procura o serviço de urgência referindo perda súbita de líquido vaginal há 4 horas. Nega dor ou febre. Traz o cartão de acompanhamento pré-natal sem descrição de intercorrências. Nega doenças clínicas e ginecológicas, uso de medicamentos ou tabagismo. Ao exame especular, observa-se coleção de líquido no fundo de saco posterior com pH alcalino (teste com papel de nitrazina positivo) e ausência de dilatação cervical. Não há sinais de corioamnionite. Ultrassonografia confirma oligoidrâmnio moderado. Exames laboratoriais não sugerem quadro infeccioso. O principal mecanismo responsável pela fragilização e ruptura das membranas ovulares nesse caso é:',
    options: [
      '(A) Redução da perfusão placentária com hipóxia tecidual progressiva, levando à degeneração isquêmica das membranas e ruptura espontânea precoce.',
      '(B) Ativação inflamatória local com aumento de citocinas e metaloproteinases, promovendo degradação do colágeno e enfraquecimento estrutural das membranas.',
      '(C) Alteração da pressão hidrostática intrauterina por disfunção miometrial, resultando em sobrecarga mecânica direta e ruptura abrupta das membranas.',
      '(D) Diminuição da síntese de líquido amniótico por disfunção fetal renal, causando adelgaçamento progressivo e perda da resistência das membranas ovulares.'
    ],
    correctAnswer: 1,
    explanation: 'A Ruptura Prematura de Membranas Ovulares (RPMO) pré-termo é desencadeada principalmente por processos de ativação inflamatória local (frequentemente decorrentes de infecção vaginal subclínica ou de desequilíbrios da flora). Citocinas inflamatórias ativam enzimas colagenolíticas (metaloproteinases de matriz), degradando o colágeno tipo I, III e IV que sustenta a resistência mecânica das membranas.',
    commentary: 'A fisiopatologia da RPMO pré-termo envolve a quebra da homeostase enzimática que regula a resistência das membranas coriônicas e amnióticas. O processo inflamatório subclínico promove a síntese de citocinas pró-inflamatórias (como TNF-α e IL-1) que regulam positivamente as metaloproteinases de matriz (MMPs), principalmente as colagenases. Essas enzimas degradam ativamente o colágeno do tipo I e III que compõe a matriz extracelular do corioâmnio, fragilizando a barreira e levando ao rompimento. Sobre os distratores: (A) A hipóxia isquêmica crônica não é o mecanismo habitual de ruptura de membranas. (C) A disfunção miometrial ou alterações de pressão isoladas não causam ruptura se as membranas conservarem seu colágeno intacto. (D) A oligodrâmnia secundária a uma causa fetal renal não gera fragilidade direta estrutural intrínseca das membranas coriônicas.',
    reference: 'ZUGAIB, M. Zugaib Obstetrícia. 5. ed. Barueri: Manole, 2023.',
    tags: ['ruptura prematura de membranas', 'fisiopatologia', 'prematuridade']
  },
  {
    id: 'tp2026-96',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher de 29 anos, após parto vaginal há 20 minutos, evolui com sangramento vaginal intenso. O partograma evidenciou trabalho de parto prolongado, com uso de ocitocina. Ao exame físico: útero aumentado, amolecido e acima da cicatriz umbilical. Sinais vitais: taquicardia e hipotensão leve. A conduta imediata mais adequada é:',
    options: [
      '(A) Realizar massagem uterina bimanual associada à administração de ocitocina intravenosa, para promover contração uterina eficaz.',
      '(B) Indicar revisão cirúrgica uterina imediata sob anestesia geral, considerando retenção placentária como principal causa do sangramento atual.',
      '(C) Iniciar reposição volêmica exclusiva com cristaloides em grande volume, adiando intervenções uterotônicas até estabilização hemodinâmica completa.',
      '(D) Administrar antibióticos de amplo espectro e aguardar resposta clínica, aventando infecção puerperal como principal etiologia do sangramento.'
    ],
    correctAnswer: 0,
    explanation: 'O sangramento pós-parto associado a útero aumentado e amolecido (hipotônico) configura uma Atonia Uterina (causa mais comum de hemorragia pós-parto). O tratamento imediato consiste em massagem uterina bimanual (manobra de Hamilton) combinada com agentes uterotônicos (ocitocina intravenosa).',
    commentary: 'O cenário clínico descreve hemorragia pós-parto imediata decorrente de atonia uterina, favorecida pelo fator de risco "trabalho de parto prolongado com ocitocinoterapia crônica" (que satura os receptores miometriais). O útero amolecido e elevado no exame físico confirma a hipotonia. Pelos protocolos nacionais e internacionais (como o "Golden Hour" da HPP), a primeira linha de conduta imediata consiste na realização concomitante de massagem uterina externa e infusão de ocitocina IV. Sobre os distratores: (B) A revisão uterina sob anestesia é secundária e invasiva, indicada apenas se houvesse forte suspeita de retenção ou laceração com útero contraído. (C) A reposição volêmica ocorre em paralelo, mas adiar o controle da causa primária (atonia) perpetua a hemorragia ativa. (D) A infecção puerperal não se manifesta com sangramento maciço 20 minutos pós-parto.',
    reference: 'ZUGAIB, M. Zugaib Obstetrícia. 5. ed. Barueri: Manole, 2023. Organização Mundial da Saúde. Recomendações da OMS para a Prevenção e Tratamento da Hemorragia Pós-Parto. Genebra: OMS; 2014.',
    tags: ['hemorragia pós-parto', 'atonia uterina', 'obstetrícia']
  },
  {
    id: 'tp2026-97',
    module: 'Ginecologia e Obstetrícia',
    text: 'Gestante de 16 semanas, com diagnóstico recente de toxoplasmose, é acompanhada pela mãe, que solicita ao médico omitir informações à menor para não “prejudicar a gestação”. Sob a perspectiva ética e médico-legal, a conduta adequada é:',
    options: [
      '(A) Informar a gestante sobre o diagnóstico, mas solicitar que a mãe conduza o tratamento.',
      '(B) Atender ao pedido familiar para evitar sofrimento emocional.',
      '(C) Orientar o tratamento e prognóstico ao familiar responsável, para garantir a condução adequada.',
      '(D) Informar a paciente sobre o diagnóstico para que tenha autonomia no tratamento.'
    ],
    correctAnswer: 3,
    explanation: 'A paciente gestante, independentemente da idade se tiver capacidade de discernimento (competência civil/cognitiva), tem direito ao sigilo médico e à verdade diagnóstica. O médico deve garantir sua autonomia, informando-a diretamente sobre o diagnóstico de toxoplasmose e os passos do tratamento.',
    commentary: 'Sob a égide da bioética médica e das normas do Conselho Federal de Medicina (CFM), a menor de idade que apresenta capacidade de compreensão de sua condição de saúde deve ser ativamente integrada às tomadas de decisão. O sigilo e a autonomia na relação médico-paciente são direitos invioláveis do doente (titular da informação). A omissão diagnóstica requerida pela mãe transgride preceitos fundamentais de não-maleficência e autonomia do Código de Ética Médica. Sobre os distratores: (A) A paciente é o agente primário do tratamento, cabendo a ela a anuência. (B) O paternalismo médico e a ocultação de diagnósticos graves são posturas contrárias às diretrizes éticas brasileiras. (C) A primazia de repasse de dados clínicos apenas aos responsáveis desrespeita o direito de sigilo da adolescente em idade reprodutiva.',
    reference: 'Conselho Federal de Medicina. Código de Ética Médica. Resolução CFM nº 2.217/2018. Estatuto da Criança e do Adolescente (ECA). Lei Federal nº 8.069 de 1990.',
    tags: ['ética médica', 'bioética', 'autonomia', 'direitos do paciente']
  },
  {
    id: 'tp2026-98',
    module: 'Ginecologia e Obstetrícia',
    text: 'Primigesta de 32 anos, com 36 semanas de gestação, em acompanhamento por infecção pelo HIV, em uso regular de terapia antirretroviral (TARV) desde o primeiro trimestre, apresenta carga viral de 1.200 cópias/mL no último exame. Evolui sem intercorrências obstétricas. Diante desse cenário, qual a conduta para redução do risco de transmissão vertical?',
    options: [
      '(A) Indicar cesariana eletiva a partir de 38 semanas e realizar zidovudina intravenosa intraparto.',
      '(B) Manter conduta expectante e indicar parto vaginal, pois está em uso regular de TARV.',
      '(C) Indicar parto vaginal com uso de fórceps para reduzir o tempo expulsivo.',
      '(D) Suspender TARV no intraparto e iniciar profilaxia apenas no recém-nascido.'
    ],
    correctAnswer: 0,
    explanation: 'Gestantes vivendo com HIV que apresentem Carga Viral indetectável ou desconhecida, ou ainda carga viral maior ou igual a 1.000 cópias/mL detectada próximo ao termo (após 34 semanas), têm indicação formal de parto por via cesariana eletiva (com membranas íntegras, a partir de 38 semanas de gestação) associada à infusão de Zidovudina (AZT) endovenosa intraparto.',
    commentary: 'O protocolo clínico brasileiro estabelece que a determinação da via de parto na gestante infectada pelo HIV baseia-se na aferição da Carga Viral (CV) colhida na idade gestacional de 34 semanas ou mais. Se a CV for maior ou igual a 1.000 cópias/mL (ou desconhecida), a via preferencial obrigatória de eleição é a cesariana eletiva (programada, realizada antes do início do trabalho de parto e de qualquer ruptura de membranas), devendo-se infundir o AZT venoso contínuo desde 3 horas antes da incisão cirúrgica até o clampeamento do cordão. Sobre os distratores: (B) O parto vaginal só é seguro e elegível quando a Carga Viral do terceiro trimestre encontra-se comprovadamente indetectável ou < 1.000 cópias/mL. (C) O fórceps de alívio e outros procedimentos invasivos (como amniotomia ou episiotomia) devem ser evitados devido ao risco de sangramento e infecção cruzada. (D) A TARV materna jamais deve ser suspensa, sendo somada à profilaxia infundida.',
    reference: 'BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde. Protocolo clínico e diretrizes terapêuticas para prevenção da transmissão vertical de HIV, sífilis e hepatites virais. Brasília: Ministério da Saúde, 2022.',
    tags: ['HIV e gestação', 'transmissão vertical', 'cesariana eletiva']
  },
  {
    id: 'tp2026-99',
    module: 'Ginecologia e Obstetrícia',
    text: 'Durante consulta de pré-natal em uma UBS, uma primigesta de 28 anos, com 10 semanas de gestação, sem comorbidades, comparece para sua primeira consulta. Considerando as recomendações da atenção primária, assinale a alternativa correta.',
    options: [
      '(A) Priorizar nesse primeiro momento as orientações sobre alimentação e atividade física, deixando o pedido de ultrassonografia e exames laboratoriais para consultas posteriores.',
      '(B) Solicitar ultrassonografia obstétrica no primeiro trimestre na primeira consulta, e os exames laboratoriais a partir das próximas consultas.',
      '(C) Solicitar exames laboratoriais iniciais, ultrassonografia, atualizar vacinas recomendadas e orientar sobre hábitos de vida saudáveis.',
      '(D) Indicar a atualização das vacinas e a realização dos exames laboratoriais, deixando a realização da ultrassonografia e a suplementação de ferro apenas para o terceiro trimestre.'
    ],
    correctAnswer: 2,
    explanation: 'A consulta inicial de pré-natal na Atenção Primária deve ser abrangente: engloba a solicitação da rotina de exames laboratoriais do primeiro trimestre, a prescrição/orientação de ultrassonografia precoce, a avaliação vacinal com atualização de esquemas protetivos e orientações gerais sobre saúde e hábitos de vida.',
    commentary: 'Segundo o Caderno de Atenção Básica do Ministério da Saúde para o Pré-natal de Baixo Risco, a captação precoce da gestante (idealmente antes de 12 semanas) deve ser aproveitada para otimizar os exames de rastreamento. Devem ser solicitados exames laboratoriais de rotina inicial (tipagem sanguínea, hemograma, glicemia de jejum, urocultura, sorologias para HIV, sífilis, hepatite B, toxoplasmose), prescrição de ultrassonografia para aferição de IG, atualização do cartão de vacinação (influenza, dTpa, hepatite B) e aconselhamento de hábitos de vida. Sobre os distratores: (A, B) Postergar os exames laboratoriais compromete o rastreamento oportuno de agravos graves como sífilis e infecção urinária oculta. (D) A ultrassonografia é ideal no 1º trimestre (datação confiável) e não apenas no 3º trimestre.',
    reference: 'Ministério da Saúde. Atenção ao Pré-Natal de Baixo Risco. Cadernos de Atenção Básica, n. 32. Brasília: Ministério da Saúde, 2012.',
    tags: ['pré-natal de baixo risco', 'atenção primária', 'rotina de rastreamento']
  },
  {
    id: 'tp2026-100',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher de 30 anos apresenta história de três perdas gestacionais consecutivas antes de 10 semanas. Traz exames laboratoriais recentes, mostrando anticorpo anticardiolipina IgG positivo em título moderado em uma única dosagem. A paciente demonstra ansiedade e solicita ao médico que “inicie imediatamente qualquer tratamento para evitar nova perda gestacional”, mesmo antes da confirmação diagnóstica. Considerando os princípios éticos, bioéticos e médico-legais envolvidos na prática clínica, qual é a conduta adequada?',
    options: [
      '(A) Prescrever heparina de baixo peso molecular, respeitando a autonomia da paciente e priorizando possível benefício gestacional.',
      '(B) Explicar os critérios diagnósticos da SAF, discutir riscos e benefícios do tratamento, contraindicar anticoagulação neste momento, justificando a conduta.',
      '(C) Recusar a prescrição, encerrar o atendimento e encaminhar para que o acompanhamento seja feito por outro colega.',
      '(D) Prescrever heparina em dose profilática reduzida como medida intermediária, mesmo sem critérios diagnósticos completos, para minimizar risco emocional da paciente.'
    ],
    correctAnswer: 1,
    explanation: 'O diagnóstico definitivo da Síndrome do Anticorpo Antifosfolipídeo (SAF) obstétrica requer a confirmação da positividade laboratorial em uma segunda dosagem, decorridas no mínimo 12 semanas da primeira. Diante disso, iniciar a anticoagulação sistêmica sem o diagnóstico firmado viola o princípio da não-maleficência, expondo a paciente a riscos iatrogênicos (como sangramentos graves), devendo o médico explicar os critérios e contraindicar a medicação no momento.',
    commentary: 'O cenário envolve um dilema bioético clássico de conflito entre Autonomia (pedido explícito da paciente de iniciar heparina) versus Não-Maleficência/Beneficência (o risco de prescrever heparina sem o diagnóstico correto firmado). O diagnóstico da SAF requer um critério clínico (perdas gestacionais recorrentes) somado a um critério laboratorial que deve ser confirmado em duas ou mais ocasiões, com intervalo mínimo de 12 semanas. Uma única dosagem positiva de anticardiolipina IgG moderada não fecha o critério laboratorial de SAF. Prescrever anticoagulação empírica expõe a gestante a riscos hemorrágicos consideráveis e carece de embasamento científico de eficácia. A conduta do profissional deve ser pedagógica e ética: acolher o sofrimento da paciente, elucidar os critérios clínicos e os riscos inerentes à terapêutica impensada, e contraindicar a medicação até a confirmação sorológica após 12 semanas. Sobre os distratores: (A, D) A prescrição de heparina sem critérios diagnósticos e sem indicação clara constitui negligência e imperícia ética. (C) O encaminhamento abrupto de paciente sob angústia emocional caracteriza abandono de assistência ginecológica.',
    reference: 'Conselho Federal de Medicina. Código de Ética Médica – Resolução nº 2.217/2018. ACOG Practice Bulletin. Clinical Management Guidelines for Obstetrician-Gynecologists. Number 134: Antiphospholipid Syndrome. 2013.',
    tags: ['SAF', 'bioética', 'ética médica', 'abortamento de repetição']
  },
  // ---- Teste de Progresso 2019 (gabarito oficial) ----
  {
    id: 'tp2019-81',
    module: 'Ginecologia e Obstetrícia',
    text: 'Gestante comparece para primeira consulta de pré-natal com 12 semanas de gestação, confirmada por ultrassonografia precoce.\n\nEm relação à avaliação da vitalidade fetal, é correto afirmar que:',
    options: [
      '(A) Os batimentos cardíacos fetais podem ser auscultados com Sonar.',
      '(B) Os batimentos cardíacos fetais podem ser auscultados com estetoscópio de Pinard.',
      '(C) Nessa idade gestacional, os batimentos cardíacos fetais podem ser identificados somente com ultrassonografia.',
      '(D) Nessa idade gestacional não é possível a ausculta dos batimentos cardíacos fetais.'
    ],
    correctAnswer: 0,
    explanation: 'O sonar Doppler detecta os batimentos cardíacos fetais a partir de cerca de 10–12 semanas. O estetoscópio de Pinard só os capta a partir de aproximadamente 20 semanas.',
    commentary: 'Com 12 semanas não é necessário ultrassom para detectar os batimentos — o sonar já os capta. O Pinard ainda não permite a ausculta nessa idade gestacional.',
    reference: 'Assistência Pré-Natal. In: Zugaib Obstetrícia. Zugaib M & Francisco RPV. 3ª ed. Manole, 2017',
    tags: ['obstetrícia', 'pré-natal', 'vitalidade fetal']
  },
  {
    id: 'tp2019-82',
    module: 'Ginecologia e Obstetrícia',
    text: 'Para calcular a idade gestacional, nos baseamos na data da última menstruação.\n\nPortanto, a mulher que menstruou pela última vez em 01/03/2018, no dia 03/12/2018 está com:',
    options: [
      '(A) 37 semanas e 2 dias',
      '(B) 39 semanas e 2 dias',
      '(C) 38 semanas e 5 dias',
      '(D) 40 semanas e 3 dias'
    ],
    correctAnswer: 1,
    explanation: 'De 01/03/2018 a 03/12/2018 há 277 dias: março (30 dias a partir do dia 1), abril (30), maio (31), junho (30), julho (31), agosto (31), setembro (30), outubro (31), novembro (30) e 3 dias de dezembro.\n\n277 ÷ 7 = 39 semanas e 4 dias pela contagem exata; a banca considerou 39 semanas e 2 dias, a única alternativa compatível com 39 semanas.',
    commentary: 'As demais alternativas erram o número de semanas. Observação: pela contagem exata, o resultado é 39 semanas e 4 dias; a alternativa oficial é a mais próxima, mas os dias não batem — questão passível de recurso.',
    reference: 'MONTENEGRO, Rezende Filho. Obstetrícia Fundamental (2012).',
    tags: ['obstetrícia', 'idade gestacional']
  },
  {
    id: 'tp2019-83',
    module: 'Ginecologia e Obstetrícia',
    text: 'Primigesta, 17 anos de idade, chega ao hospital com queixas de cefaleia intensa, dor epigástrica e alterações visuais. Está com 35 semanas de gravidez, pressão arterial de 170 x 110 mmHg, útero com tônus normal, dinâmica ausente, altura uterina de 29cm, frequência cardíaca fetal de 136 bpm.\n\nO diagnóstico provável e conduta são:',
    options: [
      '(A) Eclâmpsia; administar sulfato de magnésio e hidralazina e interromper a gravidez.',
      '(B) Iminência de eclâmpsia; administrar hidralazina e indicar a cesárea imediatamente.',
      '(C) Pré-eclâmpsia grave; realizar o parto cesárea imediatamente.',
      '(D) Iminência de eclâmpsia; administrar sulfato de magnésio e hidralazina e interromper a gravidez.'
    ],
    correctAnswer: 3,
    explanation: 'Gestante de 35 semanas com crise hipertensiva (170 x 110 mmHg) e sinais de iminência de eclâmpsia (cefaleia intensa, escotomas, dor epigástrica). A conduta é sulfato de magnésio (prevenção de convulsões), anti-hipertensivo de ação rápida (hidralazina) e interrupção da gestação após estabilização materna.',
    commentary: 'Não houve convulsão, logo não é eclâmpsia. Cesárea imediata sem sulfato de magnésio expõe a gestante a convulsão. Iminência de eclâmpsia é mais que pré-eclâmpsia grave \'simples\'.',
    reference: 'Tratado Obstetrícia da FEBRASGO, 2019',
    tags: ['obstetrícia', 'pré-eclâmpsia', 'síndromes hipertensivas']
  },
  {
    id: 'tp2019-84',
    module: 'Ginecologia e Obstetrícia',
    text: 'Secundigesta, 31 anos, na 24ª semana apresentou teste de tolerância à glicose (TTG 75g) alterado, tendo sido instituída nesse momento uma dieta para diabetes com 2.000Kcal e atividade física (caminhada – 150 minutos/semana). Com 29 semanas, a gestante realiza ultrassonografia, que mostra crescimento fetal no percentil 90 e polidrâmnio, e traz o controle glicêmico da última semana (dias 1, 3, 5 e 7):\n\n• Jejum (mg/dL): 97 / 96 / 99 / 101\n• 1h pós-café (mg/dL): 139 / 136 / 142 / 141\n• 1h pós-almoço (mg/dL): 150 / 144 / 141 / 138\n• 1h pós-jantar (mg/dL): 153 / 140 / 134 / 137\n• Hb glicada: 6,5%\n\nConsiderando o quadro atual, a conduta é:',
    options: [
      '(A) Diminuir a dieta para 1.800Kcal e intensificar a atividade física.',
      '(B) Manter a dieta, atividade física e associar glibenclamida.',
      '(C) Manter a dieta, atividade física e associar o uso de insulina.',
      '(D) Manter a dieta e a atividade física.'
    ],
    correctAnswer: 2,
    explanation: 'Diabetes gestacional sem controle após dieta e atividade física: jejum persistentemente ≥ 95 mg/dL e pós-prandiais no limite, com repercussão fetal (crescimento no percentil 90 e polidrâmnio).\n\nIndica-se manter dieta e exercício e iniciar insulina, que é a primeira escolha farmacológica na gestação.',
    commentary: 'Restringir mais calorias aumenta o risco de cetose. A glibenclamida atravessa a placenta e se associa a pior desfecho neonatal. Manter apenas dieta e atividade física ignora a falha de controle.',
    reference: 'Management of Diabetes in Pregnancy. Diabetes Care 2018, vol 41, supplement 1: S137-S143.',
    tags: ['obstetrícia', 'diabetes gestacional']
  },
  {
    id: 'tp2019-85',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher, 30 anos, sem morbidades, com antecedente obstétrico de parto pré-termo (24ª semana) na primeira gravidez e de três abortamentos tardios nas gestações subsequentes. Atualmente está na 13ª semana de gravidez, sem queixas. Realizou exames de rotina de pré-natal (normais) e ultrassonografia de primeiro trimestre, com morfologia fetal e transluscência nucal normais.\n\nCom base no antecedente obstétrico da gestante e no resultado dos exames, a melhor conduta é:',
    options: [
      '(A) Prescrever inibina e progesterona a partir da 16ª semana.',
      '(B) Prescrever progesterona vaginal com 20 semanas.',
      '(C) Medir o comprimento do colo com ultrassom mensalmente.',
      '(D) Realizar cerclagem cervical entre 14-16 semanas.'
    ],
    correctAnswer: 3,
    explanation: 'Parto pré-termo extremo e abortamentos tardios de repetição, tipicamente indolores, sugerem insuficiência istmocervical. Com esse diagnóstico pela história, a conduta é a cerclagem eletiva entre 14 e 16 semanas, após confirmar vitalidade e morfologia fetal.',
    commentary: 'A medida seriada do colo é indicada quando há antecedente de prematuridade sem diagnóstico de IIC. A progesterona vaginal tem papel no colo curto, mas não substitui a cerclagem na IIC. Inibina não é tratamento.',
    reference: 'Zugaib M & Francisco RMP. Zugaib Obstetrícia – 3. ed. – Barueri, SP: Manole, 2017.',
    tags: ['obstetrícia', 'insuficiência istmocervical', 'prematuridade']
  },
  {
    id: 'tp2019-86',
    module: 'Ginecologia e Obstetrícia',
    text: 'Primigesta, 28 anos de idade, gestação de 11 semanas, apresenta queixa de cólica em baixo ventre e sangramento vaginal de moderada intensidade há dois dias. Ao exame, encontra-se febril (37,8°C), PA: 110 x 70 mmHg e FC: 108bpm. Ao exame especular, observa-se grande quantidade de sangue vivo em fundo de saco vaginal, com odor fétido e orifício interno do colo uterino pérvio para 1 polpa digital.\n\nNesse caso, a conduta é:',
    options: [
      '(A) Realizar esvaziamento uterino e antibioticoterapia.',
      '(B) Solicitar ultrassonografia e manter observação.',
      '(C) Iniciar antibioticoterapia e manter observação.',
      '(D) Realizar apenas aspiração manual intrauterina.'
    ],
    correctAnswer: 0,
    explanation: 'Abortamento com colo pérvio, sangramento, febre, taquicardia e odor fétido: abortamento infectado.\n\nA conduta é antibioticoterapia de amplo espectro e esvaziamento uterino (após o início dos antibióticos), para remover o foco infeccioso.',
    commentary: 'Observação expectante é inadequada diante da infecção. Antibiótico sem esvaziamento mantém o foco. Aspiração sem antibiótico expõe ao risco de sepse.',
    reference: 'Zugaib, M & Francisco RP. Obstetrícia. Editora Manole, 2017 Duarte G, et al. Protocolos de Conduta em Gestação de Alto Risco, 2003',
    tags: ['obstetrícia', 'abortamento']
  },
  {
    id: 'tp2019-87',
    module: 'Ginecologia e Obstetrícia',
    text: 'Primigesta, 37 semanas de gravidez, comparece ao pronto atendimento da maternidade por dor abdominal de forte intensidade, acompanhada por sangramento vaginal de coloração viva, em moderada quantidade. Exame físico: PA = 100/60 mmHg, hipertonia uterina, FCF = 80 bpm, especular com sangramento pelo orifício externo em moderada quantidade, com coágulos. Toque: colo dilatado 4cm, bolsa íntegra.\n\nConsiderando o caso descrito, a hipótese diagnóstica e a melhor conduta são:',
    options: [
      '(A) Placenta prévia; ultrassonografia e cardiotocografia.',
      '(B) Placenta prévia e sofrimento fetal; cesárea.',
      '(C) Descolamento prematuro de placenta e sofrimento fetal; amniotomia e cesárea.',
      '(D) Descolamento prematuro de placenta; indução do trabalho de parto.'
    ],
    correctAnswer: 2,
    explanation: 'Dor abdominal intensa, sangramento vivo, hipertonia uterina e bradicardia fetal (80 bpm) a termo: descolamento prematuro de placenta com sofrimento fetal.\n\nCom feto vivo e parto não iminente (colo com 4 cm), a conduta é amniotomia (reduz a pressão intrauterina e a passagem de tromboplastina para a circulação materna) e cesárea.',
    commentary: 'A placenta prévia sangra sem dor e sem hipertonia. Indução do parto com sofrimento fetal atrasaria a extração.',
    reference: 'Zugaib, M & Francisco RP. Obstetrícia. Editora Manole, 2017',
    tags: ['obstetrícia', 'descolamento prematuro de placenta']
  },
  {
    id: 'tp2019-88',
    module: 'Ginecologia e Obstetrícia',
    text: 'Primigesta, 29 anos, 33 semanas, pré-natal sem intercorrências. Procura pronto atendimento com queixa de dor em hipogástrio há 3 horas. Ao exame físico, bom estado geral, sinais vitais normais, altura uterina de 31cm, feto cefálico, FCF = 140 bpm, dinâmica uterina de 3 contrações em 10 minutos, com 50 segundos de duração, rítmicas, dolorosas. Ao exame de toque: colo médio com 3cm, medianizado, bolsa íntegra, cefálico, -2.\n\nNesse caso, o próximo passo no cuidado da gestante é prescrever:',
    options: [
      '(A) Terbutalina, sulfato de magnésio e corticoterapia.',
      '(B) Nifedipina, corticoterapia e profilaxia para Estreptococo do grupo B.',
      '(C) Indometacina, corticoterapia e antibioticoterapia para corioamnionite.',
      '(D) Atosibano, sulfato de magnésio e profilaxia para Estreptococo do grupo B.'
    ],
    correctAnswer: 1,
    explanation: 'Trabalho de parto prematuro (33 semanas, contrações regulares e colo com 3 cm) com bolsa íntegra e sem contraindicações: indicam-se tocólise (nifedipina), corticoide para maturação pulmonar e profilaxia para estreptococo do grupo B, já que o status é desconhecido.',
    commentary: 'A indometacina não deve ser usada após 32 semanas (fechamento do ducto arterioso). O sulfato de magnésio para neuroproteção é indicado abaixo de 32 semanas. Terbutalina não é primeira escolha. Não há sinais de corioamnionite.',
    reference: 'Brasil. Ministério da Saúde. Gestação de alto risco: manual técnico. 5. ed. – Brasília: Editora do Ministério da Saúde, 2012.',
    tags: ['obstetrícia', 'trabalho de parto prematuro']
  },
  {
    id: 'tp2019-89',
    module: 'Ginecologia e Obstetrícia',
    text: 'Primigesta, 20 anos de idade, 24 semanas de gestação, retorna para checar exames da rotina de pré-natal. Dentre eles, o teste não treponêmico mostrou-se positivo na titulação 1:256 e teste treponêmico reagente.\n\nFrente a este resultado, qual seria a conduta?',
    options: [
      '(A) Tratamento com penicilina benzatina, 2.400.000UI, intramuscular, semanalmente, por 3 semanas. Controle com VDRL mensal após o tratamento.',
      '(B) Tratamento com penicilina benzatina, 2.400.000UI, intramuscular, semanalmente, por 3 semanas. Controle com FTA-Abs mensal após o tratamento.',
      '(C) Tratamento com penicilina benzatina 2.400.000UI, intramuscular, semanalmente, por 2 semanas. Controle com VDRL mensal após o tratamento.',
      '(D) Tratamento com penicilina benzatina 2.400.000UI, intramuscular, semanalmente, por 2 semanas. Controle com FTA-Abs mensal após o tratamento.'
    ],
    correctAnswer: 0,
    explanation: 'Gestante com VDRL 1:256 e teste treponêmico reagente, sem dados de tempo de infecção: tratada como sífilis latente de duração indeterminada, com penicilina benzatina 2,4 milhões UI IM semanal por 3 semanas (total 7,2 milhões UI).\n\nO controle de cura é feito com teste não treponêmico (VDRL) mensal durante a gestação.',
    commentary: 'Duas doses são insuficientes. O FTA-Abs é treponêmico e permanece positivo, logo não serve para seguimento.',
    reference: 'PCDT – Prevenção da transmissão vertical de HIV, sífilis e hepatites virais, 2018',
    tags: ['obstetrícia', 'sífilis', 'pré-natal']
  },
  {
    id: 'tp2019-90',
    module: 'Ginecologia e Obstetrícia',
    image: '/images/tp2019-90.webp',
    text: 'Secundigesta, 28 anos, fumante de 20 cigarros/dia, idade gestacional 38 semanas, apresenta-se em trabalho de parto com dinâmica uterina = 3 contrações de 40 segundos, moderadas, em 10min. Ao toque, colo uterino com 3cm de dilatação, esvaecido 80%, cefálico alto e fixo, com saída de líquido meconial. A monitorização fetal está representada na imagem a seguir:\n\nO tipo de desacelerações da frequência cardíaca fetal e a conduta neste caso são, respectivamente:',
    options: [
      '(A) Tardia, expectante.',
      '(B) Precoce, cesárea imediata.',
      '(C) Tardia, cesárea imediata.',
      '(D) Precoce, expectante.'
    ],
    correctAnswer: 2,
    explanation: 'A cardiotocografia mostra desacelerações que começam após o pico da contração e retornam após seu término: desacelerações tardias (DIP II), sinal de hipóxia fetal — agravado pelo mecônio e pelo tabagismo.\n\nCom 3 cm de dilatação e apresentação alta, o parto vaginal demoraria; a conduta é a cesárea imediata.',
    commentary: 'Desacelerações precoces coincidem com a contração (compressão do polo cefálico) e são benignas. Conduta expectante diante de desaceleração tardia é inadequada.',
    reference: 'ACOG. ACOG Practice Bulletin No 106: Intrapartum fetal heart rate monitoring: nomenclature, interpretation, AND GENERAL MANAGEMENT PRINCIPLES. ObstetGynecol 2009; 114(1):192-202.',
    tags: ['obstetrícia', 'vitalidade fetal', 'cardiotocografia']
  },
  {
    id: 'tp2019-91',
    module: 'Ginecologia e Obstetrícia',
    text: 'Nuligesta, 28 anos de idade, procura atendimento por estar sem menstruar há 7 meses. Traz exames de TSH e prolactina dentro dos limites de normalidade e teste de gravidez negativo. Continuou sem menstruar após ter utilizado progestagênio por 10 dias. Exame físico sem alterações.\n\nNesse caso, a conduta para estabelecer a melhor hipótese diagnóstica é:',
    options: [
      '(A) Realizar um ciclo com pílula hormonal combinada e, se apresentar sangramento uterino, solicitar gonadrofinas para diagnóstico de falência ovariana.',
      '(B) Realizar um ciclo com pílula hormonal combinada e, se não apresentar sangramento uterino, solicitar gonadrofinas para diagnóstico de Amenorreia hipotalâmica.',
      '(C) Realizar um ciclo com pílula hormonal combinada e se apresentar sangramento uterino por se tratar de Síndrome de Asherman.',
      '(D) Solicitar testosterona total e livre, SDhEA e HOMA-IR, que estarão alterados por se tratar de síndrome do ovário policístico.'
    ],
    correctAnswer: 0,
    explanation: 'Amenorreia com teste de progestagênio negativo indica estrogenização insuficiente ou problema no trato de saída. O próximo passo é o teste com estrogênio e progestagênio (pílula combinada).\n\nSe houver sangramento, o útero é funcional e falta estrogênio: dosa-se FSH/LH para distinguir falência ovariana (FSH alto) de causa hipotalâmica (FSH baixo/normal).',
    commentary: 'Se não houver sangramento após estrogênio + progestagênio, a causa é uterina (como síndrome de Asherman). A SOP cursa com hiperandrogenismo e teste do progestagênio positivo.',
    reference: 'Leon Speroff e Marc Fritz in Clinical gynecologic endocrinology and infertility. chapter 11: Amenorrhea. 7th ed. Lippincott williams & wilkins.',
    tags: ['ginecologia', 'amenorreia', 'endocrinologia ginecológica']
  },
  {
    id: 'tp2019-92',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher, 42 anos de idade, G4P4, com diagnóstico histopatológico de endometriose peritoneal superficial realizado durante cirurgia de laqueadura tubária há 2 anos. Procura Unidade Básica de Saúde para rotina ginecológica. Relata ciclos menstruais regulares, com fluxo menstrual pouco aumentado e dismenorreia moderada não incapacitante. Nega outras queixas ginecológicas.\n\nEm relação ao acompanhamento da paciente, é correto afirmar que:',
    options: [
      '(A) O médico deverá solicitar ultrassonografia transvaginal anual.',
      '(B) A dosagem sérica de antígeno carcinogênico 125 (CA125) é indispensável.',
      '(C) A avaliação deverá ser realizada pela história clínica e exame ginecológico.',
      '(D) A paciente deverá ser encaminhada para centro especializado de referência.'
    ],
    correctAnswer: 2,
    explanation: 'Endometriose peritoneal superficial com sintomas leves, ciclos regulares e prole constituída: o seguimento é clínico, baseado na história e no exame ginecológico. Exames são solicitados apenas se houver mudança dos sintomas.',
    commentary: 'Ultrassonografia anual e CA-125 não estão indicados de rotina (o CA-125 é inespecífico). O encaminhamento a centro de referência é para doença profunda, infertilidade ou dor refratária.',
    reference: 'Schorge, JO et al. Endometriose. In: Ginecologia de Williams. John O. Schorge et al. Porto Alegre, Artmed, 2011. cap 10. pp 225-243.',
    tags: ['ginecologia', 'endometriose']
  },
  {
    id: 'tp2019-93',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher, 18 anos de idade, iniciou vida sexual e deseja orientação para anticoncepção. Refere cefaleia frequente com duração de 4 a 6 horas, pulsátil, latejante, unilateral associada a náusea e, às vezes, vômitos, com sensibilidade a luz. Nega antecedente familiar de trombose venosa.\n\nA opção de anticoncepção mais indicada é:',
    options: [
      '(A) Anel vaginal',
      '(B) Hormonal Injetável mensal',
      '(C) Hormonal oral combinada',
      '(D) Hormonal oral com progestágeno'
    ],
    correctAnswer: 3,
    explanation: 'Cefaleia pulsátil, unilateral, com náusea e fotofobia, sem aura: enxaqueca sem aura. Em mulher jovem, contraceptivos combinados podem até ser usados (categoria 2 pela OMS), mas o risco de AVC limita seu uso — e a aura contraindica de vez.\n\nOs métodos só de progestagênio (categoria 1) são a opção mais segura.',
    commentary: 'Anel vaginal, injetável mensal e pílula combinada contêm estrogênio e aumentam o risco de AVC em pacientes com enxaqueca.',
    reference: 'World Health Organization. Medical eligibility criteria for contraceptive use. Reproductive Health and Research,5th edition: Geneve: World Health Organization; 2015. / http://www.who.int/reproductivehealth/publications/family_planning /MEC-5/en/9 17',
    tags: ['ginecologia', 'contracepção', 'enxaqueca']
  },
  {
    id: 'tp2019-94',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher, 52 anos de idade, menopausa há três anos, submetida a exérese de fibroadenoma de mama há 10 anos. Antecedente familiar de irmã com câncer de mama. Refere intensos fogachos e interroga seu médico a respeito da possibilidade de realizar Terapia Hormonal (TH).\n\nQual seria a melhor orientação a ser dada para esta paciente?',
    options: [
      '(A) Discutir com a paciente os riscos e benefícios da TH.',
      '(B) Os fogachos justificam a TH, independentemente dos antecedentes.',
      '(C) O fibroadenoma, apesar de sua benignidade, contraindica a TH.',
      '(D) Antecedentes familiares de câncer de mama sempre contraindicam a TH.'
    ],
    correctAnswer: 0,
    explanation: 'Fogachos intensos são a principal indicação de terapia hormonal. A história de irmã com câncer de mama aumenta o risco basal, mas não é contraindicação absoluta. O fibroadenoma prévio não contraindica a TH.\n\nA decisão deve ser individualizada, discutindo riscos e benefícios com a paciente.',
    commentary: 'Fogachos não justificam TH independentemente dos antecedentes, e nem o fibroadenoma nem a história familiar a contraindicam sempre.',
    reference: 'North American Menopause Society. The 2012 hormone therapy position statement of The North American Menopause Society. Menopause. 2012 Mar; 19(3):257-71. / Santen RJ, Allred DC, Ardoin SP, Archer DF, Boyd N, Braunstein GD, et al.Postmenopausal hormone therapy: an Endocrine Society scientific statement. J Clin Endocrinol Metab. 2010,95(7 Suppl 1): S1-S66.',
    tags: ['ginecologia', 'climatério', 'terapia hormonal']
  },
  {
    id: 'tp2019-95',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher, 50 anos de idade, chega à Unidade Básica de Saúde com queixa de perda urinária, precedida de vontade súbita de urinar, associada a dispareunia e diminuição de lubrificação vaginal. Nega que essa perda seja relacionada aos esforços. Como comorbidades, apresenta diabetes mellitus tipo 2, controlado com metformina e dieta. Ao exame ginecológico, apresenta hipotrofia vulvar, manobra de Valsalva negativa e região genital sem lesões.\n\nA hipótese diagnóstica e a conduta são:',
    options: [
      '(A) Incontinência Urinária de Esforço/Síndrome Climatérica; tratamento comportamental.',
      '(B) Síndrome da Bexiga Hiperativa/Atrofia vulvovaginal; tratamento clínico e fisioterápico.',
      '(C) Incontinência Urinária Mista/Síndrome Climatérica; tratamento clínico.',
      '(D) Síndrome da Bexiga Hiperativa/Atrofia vulvovaginal; tratamento cirúrgico com sling.'
    ],
    correctAnswer: 1,
    explanation: 'Urgência miccional com perda (sem relação com esforço, Valsalva negativa): síndrome da bexiga hiperativa. Dispareunia, ressecamento e hipotrofia vulvar indicam síndrome geniturinária da menopausa (atrofia vulvovaginal).\n\nO tratamento é clínico (comportamental, fisioterapia do assoalho pélvico, estrogênio vaginal e, se necessário, antimuscarínicos).',
    commentary: 'Não há incontinência de esforço (Valsalva negativa). O sling é tratamento da incontinência de esforço, não da bexiga hiperativa.',
    reference: 'Moroni RM; Magnani PS; Rodrigues HL; Barrilari SE; Candido-dos-Reis FJ; Brito LG. Tratamento da síndrome da bexiga hiperativa idiopática refratária. Femina. 2013;41(3):147-153. / Tratado de Ginecologia da FEBRASGO, 2019',
    tags: ['ginecologia', 'uroginecologia', 'climatério']
  },
  {
    id: 'tp2019-96',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher, 32 anos de idade, identificou um nódulo na mama esquerda há 6 meses, que manteve o mesmo tamanho nesse período. Realizou mamografia que demonstrou lesão nodular única, ovalada, com margens bem definidas no quadrante superior externo. O exame físico revelou ausência de gânglios palpáveis, nódulo firme de aproximadamente 2cm de diâmetro, móvel, superfície regular, consistência elástica, indolor à palpação.\n\nNesse caso, a hipótese diagnóstica mais provável e a conduta inicial são:',
    options: [
      '(A) Cisto de mama; realizar punção por agulha grossa.',
      '(B) Tumor filoide; realizar ultrassonografia de mamas.',
      '(C) Adenocarcinoma de mama; realizar biópsia.',
      '(D) Fibroadenoma de mama; realizar ultrassonografia de mamas.'
    ],
    correctAnswer: 3,
    explanation: 'Nódulo mamário em mulher jovem, móvel, elástico, bem delimitado e estável, com mamografia mostrando lesão ovalada de margens bem definidas: fibroadenoma.\n\nA ultrassonografia é o exame complementar de escolha nessa faixa etária, para caracterizar a lesão (sólida, de contornos regulares).',
    commentary: 'O cisto é avaliado por ultrassonografia, e não diretamente por punção com agulha grossa. O tumor filoide costuma crescer rapidamente. As características não são suspeitas de carcinoma.',
    reference: 'Tratado de Ginecologia Berek & Novak.15ª edição. Capítulo 21 – Doença Benigna da Mama.',
    tags: ['ginecologia', 'mastologia', 'nódulo mamário']
  },
  {
    id: 'tp2019-97',
    module: 'Ginecologia e Obstetrícia',
    text: 'Nuligesta, 49 anos de idade, sem desejo de engravidar. Ciclos menstruais regulares, foi submetida à ultrassonografia endovaginal de rotina com útero de volume 140cm3 (média até 120cm3), miométrio regular apresentando mioma intramural com 20mm no maior diâmetro, endométrio regular trilaminar de espessura 8mm (normal na fase proliferativa até 14mm), ovário direito com volume 8cm3 (normal até 10cm3) e ovário esquerdo com volume de 9cm3 com cisto anexial único, não septado, hipoecogênico medindo 23x24x19mm. A citologia oncótica, mamografia, hemograma, coagulograma, glicose sérica, TSH, T4 livre, urina tipoI, colesterol e frações estão com valores normais.\n\nA conduta a ser adotada é:',
    options: [
      '(A) Miomectomia e ooforoplastia',
      '(B) Contraceptivo hormonal contínuo',
      '(C) Histerectomia e ooforoplastia',
      '(D) Expectante'
    ],
    correctAnswer: 3,
    explanation: 'Mulher assintomática com mioma intramural pequeno (2 cm), ciclos regulares, sem sangramento anormal ou anemia, e cisto ovariano simples de 2,4 cm: ambos os achados são benignos e não exigem tratamento. A conduta é expectante.',
    commentary: 'Cirurgia (miomectomia, histerectomia, ooforoplastia) e hormônio contínuo não se justificam em achados assintomáticos.',
    reference: 'Berek & Novak, Tratado de Ginecologia, 15ª edição, Rio de Janeiro: Guanabara-Koogan, 2014. Capítulo 15, Miomas uterinos.',
    tags: ['ginecologia', 'mioma uterino', 'massas anexiais']
  },
  {
    id: 'tp2019-98',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher, 30 anos de idade, G3P2A1, com queixa de corrimento vaginal com odor desagradável. Relata que sempre teve odor vaginal, mas nos últimos 3 meses ficou mais intenso no período menstrual e após as relações sexuais. Refere que recentemente fez tratamento com creme vaginal de metronidazol por 10 dias, porém sem melhora. Nega febre, dor ao ato sexual ou dificuldades para urinar. Exame ginecológico: corrimento vaginal em pequena quantidade, branco-acinzentado com odor intenso ao teste com KOH 10%.\n\nNesse caso, a hipótese diagnóstica, o pH vaginal e o tratamento são:',
    options: [
      '(A) Vaginose Citolítica; > 4,5; Metronidazol via oral.',
      '(B) Vaginose Bacteriana; > 4,5; Fosfato de Clindamicina.',
      '(C) Vaginose Bacteriana; < 4,5; Metronidazol via oral.',
      '(D) Vaginose Citolítica; < 4,5; Borato de Sódio.'
    ],
    correctAnswer: 1,
    explanation: 'Corrimento branco-acinzentado com odor fétido que piora após a menstruação e o coito e com teste das aminas positivo (KOH): vaginose bacteriana. O pH vaginal é > 4,5.\n\nApós falha do metronidazol tópico, a clindamicina é uma alternativa terapêutica adequada.',
    commentary: 'Na vaginose citolítica (excesso de lactobacilos), o pH é ácido (< 4,5) e não há odor. Na vaginose bacteriana o pH nunca é < 4,5.',
    reference: 'Patologia do Trato Genital Inferior- Diagnóstico e Tratamento, 2ª Edição; Editora Rocca; 2014. Autor Nelson Valente Martins.',
    tags: ['ginecologia', 'vulvovaginites']
  },
  {
    id: 'tp2019-99',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher, 28 anos de idade, G3P3, último parto há 2 anos, casada, em uso de anticoncepcional oral, comparece a consulta solicitando realização de esterilização cirúrgica. Nega comorbidades, nega queixas e apresenta exame físico e ginecológico normais.\n\nA laqueadura tubária poderá ser realizada nas seguintes condições:',
    options: [
      '(A) Aconselhamento prévio por equipe multidisciplinar, registro de expressa vontade pela paciente e observação do prazo mínimo de 60 dias entre a manifestação da vontade e o ato cirúrgico.',
      '(B) Aconselhamento prévio por equipe multidisciplinar, consentimento expresso de ambos os cônjuges e observação do prazo mínimo de 42 dias entre a manifestação da vontade e o ato cirúrgico.',
      '(C) Aconselhamento prévio por equipe multidisciplinar, consentimento expresso de ambos os cônjuges e observação do prazo mínimo de 60 dias entre a manifestação da vontade e o ato cirúrgico.',
      '(D) Aconselhamento prévio por equipe multidisciplinar, registro de expressa vontade pela paciente e observação do prazo mínimo de 42 dias entre a manifestação da vontade e o ato cirúrgico.'
    ],
    correctAnswer: 2,
    explanation: 'Pela Lei 9.263/1996, na redação vigente em 2019, a esterilização voluntária exigia: maioridade e mais de 25 anos ou ao menos dois filhos vivos; aconselhamento por equipe multidisciplinar; prazo mínimo de 60 dias entre a manifestação da vontade e a cirurgia; e consentimento expresso de ambos os cônjuges na vigência de sociedade conjugal.',
    commentary: 'ATENÇÃO — LEGISLAÇÃO ALTERADA: a Lei 14.443/2022 aboliu a exigência de consentimento do cônjuge e reduziu a idade mínima para 21 anos (ou dois filhos vivos). Hoje, a alternativa A (manifestação expressa da própria paciente, aconselhamento e prazo de 60 dias) é a correta. O gabarito oficial de 2019 (C) foi mantido por fidelidade à prova.',
    reference: 'Ética em Ginecologia e Obstetrícia, 4ª edição / Organização de Krikor Boyaciyan. São Paulo: Conselho Regional de Medicina do estado de São Paulo, 2011',
    tags: ['ginecologia', 'planejamento familiar', 'legislação']
  },
  {
    id: 'tp2019-100',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher, 33 anos de idade, apresenta citologia cervical compatível com lesão intraepitelial de baixo grau (LIEBG/LSIL).\n\nDe acordo com as orientações do Instituto Nacional do Câncer (INCA), como deve ser o seguimento desta mulher?',
    options: [
      '(A) Repetir a citologia imediatamente e, se persistir a alteração, encaminhar para colposcopia.',
      '(B) Repetir a citologia em 6 meses e, se persistir a alteração, encaminhar para colposcopia.',
      '(C) Ser encaminhada para a colposcopia imediata.',
      '(D) Colher exame de detecção de DNA-HPV.'
    ],
    correctAnswer: 1,
    explanation: 'Pelas diretrizes do INCA (2016) para rastreamento citológico, a lesão intraepitelial de baixo grau em mulheres com 25 anos ou mais deve ser seguida com repetição da citologia em 6 meses. Se a alteração persistir, a paciente é encaminhada para colposcopia.',
    commentary: 'A colposcopia imediata é para lesões de alto grau. Observação: com a nova diretriz de rastreamento por DNA-HPV (INCA, 2024), a conduta passa a depender do resultado do teste de HPV nos locais que já a adotaram.',
    reference: 'Diretrizes brasileiras para o rastreamento do câncer do colo do útero / Instituto Nacional de Câncer. Coordenação Geral de Ações Estratégicas. Divisão de Apoio à Rede de Atenção Oncológica. – Rio de Janeiro: INCA, 2011. ISBN 978-85-7318-184-5',
    tags: ['ginecologia', 'rastreamento', 'câncer de colo uterino']
  },
  // ---- Teste de Progresso 2020 — Consórcio SP 1, outubro (gabarito oficial) ----
  {
    id: 'tp2020-81',
    module: 'Ginecologia e Obstetrícia',
    text: 'Nas pacientes com massas anexiais é de suma importância a diferenciação entre as de etiologia benigna e maligna.\n\nNo exame ultrassonográfico de abordagem transvaginal, são fatores sugestivos de malignidade:',
    options: [
      '(A) Septos finos, conteúdo sem debris e sem áreas sólidas.',
      '(B) Paredes e septos irregulares e grossos, projeções papilares e áreas sólidas.',
      '(C) Ausência de fluxo ao Doppler, uniloculados, presença de sombra acústica.',
      '(D) Tamanho menor que 100mm, ausência de septos, ausência de projeções papilares.'
    ],
    correctAnswer: 1,
    explanation: 'São sinais ultrassonográficos de malignidade em massas anexiais: paredes e septos grossos e irregulares, projeções papilares, componentes sólidos e vascularização interna ao Doppler (critérios IOTA).',
    commentary: 'Septos finos, conteúdo anecoico, ausência de fluxo, cisto unilocular e sombra acústica são características de benignidade.',
    reference: 'Improving strategies for diagnosing ovarian cancer: a summary of the International Ovarian Tumor Analysis (IOTA) studies. Ultrasound Obstet Gynecol 2013; 41: 9-20. / Tratado de Ginecologia FEBRASGO 2019.',
    tags: ['ginecologia', 'massas anexiais']
  },
  {
    id: 'tp2020-82',
    module: 'Ginecologia e Obstetrícia',
    text: 'A contracepção de longa duração (LARC – long-acting reversible contraception) que envolve implantes subdérmicos, DIU de cobre e SIU com levonorgestrel, são ultimamente recomendados pela OMS para mulheres mais jovens, devido maior falha dos métodos tradicionais, como ocorre com os contraceptivos hormonais orais quando usados nessa faixa etária, levando assim ao risco de gravidez indesejada.\n\nSobre os LARC, qual a alternativa correta dentre as abaixo relacionadas?',
    options: [
      '(A) O DIU de cobre pode ser inserido no intraparto, entretanto apresenta risco maior para expulsão, logo o ideal é ser inserido no 4º dia de puerpério.',
      '(B) O uso de DIU ou SIU em adolescentes propicia maior risco de doença inflamatória pélvica, portanto seu uso será restrito para aquelas com relacionamento estável.',
      '(C) O DIU de cobre e o SIU com levonorgestrel podem ser utilizados em mulheres nulíparas que desejam contracepção.',
      '(D) O implante subdérmico com etonogestrel não deve ser indicado nas pacientes com história de cisto mamário.'
    ],
    correctAnswer: 2,
    explanation: 'O DIU de cobre e o SIU de levonorgestrel podem ser usados por nulíparas e adolescentes (critérios de elegibilidade da OMS, categoria 2), com acompanhamento pelo maior risco de expulsão.',
    commentary: 'O DIU pode ser inserido até 48 horas pós-parto ou após 4 semanas, não no 4º dia. O risco de DIP é maior apenas no momento da inserção, sem restrição a relacionamento estável. Cisto mamário não contraindica o implante.',
    reference: 'Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO). Tratado de ginecologia. Rio de Janeiro: Revinter; 2000. / HOFFMAN, Barbara L. et al. Ginecologia de WILLIAMS. 2ª ed. Porto Alegre. Artmed. 2014. / BEREK, Jonathan S. Tratado de Ginecologia Berek & Novak. 14 ed. Rio de Janeiro. Guanabara Koogan. 2008.',
    tags: ['ginecologia', 'contracepção']
  },
  {
    id: 'tp2020-83',
    module: 'Ginecologia e Obstetrícia',
    text: 'Menina, 12 anos de idade, procura a Unidade Básica de Saúde acompanhada dos pais para consulta ginecológica de rotina, pois iniciou suas relações sexuais. Durante a consulta os pais apresentam dúvidas sobre a vacinação contra o vírus do HPV.\n\nVocê, conhecendo as recomendações do Ministério da Saúde e os benefícios da vacinação, deve assinalar a alternativa INCORRETA sobre essas orientações:',
    options: [
      '(A) Por já ter iniciado as relações sexuais, o esquema de dose recomendado será de dose inicial, seguido de 1º reforço com 2 meses e de 2º reforço após 6 meses.',
      '(B) A vacina HPV quadrivalente está disponível no Brasil para meninas dos 9 aos 14 anos de idade e para os meninos dos 11 aos 14 anos de idade com esquema vacinal de duas doses.',
      '(C) A indicação do esquema vacinal na população jovem apresenta melhor eficácia quando aplicada antes do contado com vírus HPV, e a vacinação proporciona níveis de anticorpos muito mais altos que a imunidade natural produzida pela infecção.',
      '(D) Os efeitos colaterais da vacina HPV incluem predominantemente reações locais, sendo classificada por organizações oficiais de saúde (como a OMS e o Ministério da Saúde) como extremamente segura.'
    ],
    correctAnswer: 0,
    explanation: 'A questão pede a alternativa INCORRETA. Pelo esquema vigente em 2020, meninas de 9 a 14 anos recebiam 2 doses (0 e 6 meses), mesmo já tendo iniciado a vida sexual. O esquema de 3 doses era para imunossuprimidos.\n\nPortanto, a alternativa A (três doses por já ter iniciado relações) é a incorreta.',
    commentary: 'ATENÇÃO — ESQUEMA ATUALIZADO: desde 2024 o Ministério da Saúde adota a vacina HPV em dose única para a faixa etária de rotina, e a vacina passou a ser oferecida a ambos os sexos dos 9 aos 14 anos. As demais alternativas estavam corretas à época.',
    reference: 'DE, M. Informe técnico da ampliação da oferta das vacinas papilomavírus humano 6, 11, 16 e 18 (recombinante) – vacina HPV quadrivalente e meningocócica C (conjugada). p. 39, [s.d.] / JOURA, E. A. et al. Human papillomavirus vaccination: The ESGO–EFC position paper of the European society of Gynaecologic Oncology and the European Federation for colposcopy. European Journal of Cancer, v. 116, p. 21–26, 1 jul. 2019.',
    tags: ['ginecologia', 'imunização', 'HPV']
  },
  {
    id: 'tp2020-84',
    module: 'Ginecologia e Obstetrícia',
    text: 'Em atendimento na UBS consulta-se mulher de 54 anos, com achado de “caroço” em sua mama esquerda há aproximadamente 1 mês, sem história de trauma, dor ou queixa de sinais flogísticos locais. No histórico ginecológico refere menarca aos 15 anos, teve seu primeiro filho aos 18 anos e todos os 4 filhos nasceram de parto cesariana, tendo amamentado todos por pelo menos 1 ano cada. Faz uso regular de anticoncepcional hormonal oral combinado devido ao medo de nova gravidez, já que no seu último parto o obstetra disse que seu útero estava “fino” e que agora com sua idade sabia que seria uma gestação de risco. Não tem histórico familiar de câncer de mama ou comorbidades. Última mamografia realizada 3 anos atrás, com laudo de BIRADS 0 devido a imagem arredondada de 2cm em QSL de mama esquerda. Ao exame físico nota-se: inspeção estática e dinâmica sem alterações, palpação de cadeias linfonodais sem anormalidades, palpação de nódulo móvel de consistência fibroelástica, indolor, não aderido a planos profundos, com aproximadamente 2cm de diâmetro em QSL de mama esquerda. Expressão mamária negativa. Em dúvida sobre a melhor conduta a ser tomada, você pede a opinião dos colegas do grupo da sala, que fizeram as seguintes considerações:\n\nI. A menarca tardia, juntamente com o histórico gestacional e lactacional desta paciente, são fatores protetores para câncer de mama.\nII. Com uma mamografia BIRADS 0, essa paciente já deveria ter sido submetida a ultrassonografia mamária para complementação diagnóstica.\nIII. O uso do anticoncepcional oral combinado é indispensável nessa situação, mas caso fosse uma terapia de reposição hormonal deveria ser suspensa imediatamente.\nIV. A ultrassonografia de mama com nódulo palpável no mínimo constaria como BIRADS 4, o que obrigaria a confirmação com ressonância magnética.\nV. Por tratar-se de nódulo em QSL, que é uma localidade com pouca ocorrência de lesões malignas, associado ao fato de o nódulo não ter crescido, dispensa qualquer conduta diagnóstica.\n\nAnalisando as afirmativas acima, assinale a alternativa correta:',
    options: [
      '(A) I e II estão corretas.',
      '(B) I e III estão corretas.',
      '(C) II e IV estão corretas.',
      '(D) III e V não estão corretas.'
    ],
    correctAnswer: 0,
    explanation: 'I está correta: menarca tardia, gestação precoce e amamentação prolongada são fatores protetores para câncer de mama.\nII está correta: mamografia BI-RADS 0 exige complementação imediata (ultrassonografia, incidências adicionais).\n\nIII está errada (o anticoncepcional combinado não é indispensável). IV está errada (nódulo palpável não é automaticamente BI-RADS 4, e RM não é obrigatória). V está errada (todo nódulo palpável deve ser investigado).',
    commentary: 'As alternativas que incluem III, IV ou V como corretas estão erradas.',
    reference: 'Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO). Tratado de Ginecolo-gia. Rio de Janeiro: Revinter; 2000. p. 927-34. / Freitas Jr R, Soares VF, Melo NF, Andrade ML, Philocreon GR. Fatores determinantes do conhecimento e prática do auto-exame da Mama. Rev Bras Ginecol Obstet.1996; (18): 387-91. / Souen J. Detecção precoce de câncer de mama: experiência pessoal. Rev Bras Ginecol Obstet. 1995; 17(3) :333-9.',
    tags: ['ginecologia', 'mastologia', 'nódulo mamário']
  },
  {
    id: 'tp2020-85',
    module: 'Ginecologia e Obstetrícia',
    text: 'Paciente de 41 anos procura atendimento médico com queixa de dor pélvica há mais de seis meses, com piora no período pré-menstrual, acompanhado de dismenorreia intensa que se intensificou nos últimos seis meses. Ela é nuligesta e está sem método contraceptivo há três anos, com desejo de engravidar. Exame físico geral normal, abdome doloroso à palpação de fossa ilíaca direita, sem sinais de irritação peritoneal. Ao exame ginecológico, colo de aspecto epitelizado e conteúdo vaginal normal. Paciente refere dor à palpação de anexos direitos no toque bimanual e dor à mobilização do útero. Anexos esquerdos indolores à palpação. Solicitado ultrassom pélvico transvaginal, que evidenciou cisto de conteúdo espesso em ovário direito de 2,8cm no seu maior diâmetro e nódulo em região de ureter direito, com hidronefrose discreta à direita.\n\nApós a análise do quadro clínico e o ultrassom, assinale a conduta correta entre as alternativas abaixo:',
    options: [
      '(A) Progestagênio oral contínuo, repetir ecografia em 6 meses.',
      '(B) Análogo do GnRh por seis meses e repetir exame de imagem após.',
      '(C) Ooforoplastia a direita e exérese do nódulo em região de ureter.',
      '(D) Histerectomia com anexectomia bilateral.'
    ],
    correctAnswer: 2,
    explanation: 'Dor pélvica crônica, dismenorreia progressiva, endometrioma e nódulo de endometriose profunda em ureter com hidronefrose. O comprometimento ureteral com hidronefrose torna a cirurgia mandatória, para preservar o rim.\n\nComo a paciente deseja engravidar, a cirurgia deve ser conservadora: ooforoplastia e exérese do nódulo ureteral.',
    commentary: 'O tratamento hormonal isolado não resolve a obstrução ureteral e impede a gestação. A histerectomia com anexectomia não respeita o desejo reprodutivo.',
    reference: 'Clinical diagnosis of endometriosis: a call to action (Sanjay K. Agarwal, et al., 2019). / Chronic Niche Inflammation in Endometriosis-Associated Infertility: Current Understanding and Future Therapeutic Strategies (Yi-Heng Lin et al., 2018). / Endometriosis: diagnosis and management-NICE guideline (2017).',
    tags: ['ginecologia', 'endometriose']
  },
  {
    id: 'tp2020-86',
    module: 'Ginecologia e Obstetrícia',
    text: 'Você é o médico da UBS e atendeu a Sra. Maria, de 28 anos, com 2 filhos vivos, e que está acima do peso. Ela compareceu à consulta por ter um corrimento branco em grande quantidade com coceira associada a ardor quando urina. Também refere que esse corrimento piora no período pré-menstrual. Detalha que isso a incomoda há alguns meses e diz que o marido está se queixando de coceira no pênis há 2 dias, após coito vaginal recente.\n\nQual a sua hipótese diagnóstica provável e a conduta correta dentre as abaixo relacionadas?',
    options: [
      '(A) Vaginose Bacteriana. Realizar teste das aminas e aferir pH vaginal. Solicitar Microscopia Vaginal. Tratar o casal com Tinidazol em dose única.',
      '(B) Infecção do Trato Urinário. Confirmar o diagnóstico com fita reagente para uroanálise. Tratar com Cefalexina por 7 dias.',
      '(C) Tricomoníase genitourinária. Solicitar sorologia específica para T.vaginalis. Tratar com Metronidazol o casal por 7 dias.',
      '(D) Candidíase vaginal. Realizar teste das aminas e aferir pH vaginal para melhorar a acurácia do diagnóstico. Tratar com Fluconazol em dose única.'
    ],
    correctAnswer: 3,
    explanation: 'Corrimento branco grumoso, prurido e ardor, com piora pré-menstrual e balanite no parceiro: candidíase vulvovaginal. O pH vaginal fica ≤ 4,5 e o teste das aminas é negativo, o que ajuda a diferenciar de vaginose e tricomoníase.\n\nO tratamento é fluconazol 150 mg em dose única. O parceiro sintomático também deve ser tratado.',
    commentary: 'A vaginose bacteriana cursa com odor fétido e pouco prurido. A tricomoníase tem corrimento amarelo-esverdeado e bolhoso. A ITU não explica o corrimento.',
    reference: 'Tratado de Ginecologia da FEBRASGO 2019. Cap 23. Vaginites e Vaginoses. / ISBN: 978-85-352-3302-5 e Infecções genitais femininas: Suporte teórico-prático. 2013. Gráfica DGA, UNICAMP. ISBN: 978-85-64762-046.',
    tags: ['ginecologia', 'vulvovaginites']
  },
  {
    id: 'tp2020-87',
    module: 'Ginecologia e Obstetrícia',
    text: 'ANS, 55 anos, procura atendimento na Unidade Básica de Saúde queixando-se de fogachos eventuais de forte intensidade, principalmente no período noturno. Informa que a última menstruação ocorreu há 3 anos. Secundigesta, com dois partos cesárea. Laqueada. Nega patologias de base ou cirurgias prévias. O médico solicita exames de rotina como hemograma, colesterol e frações, triglicerídios, glicose, TSH, urina I. Todos se encontram sem alterações relevantes. A citologia do colo uterino igualmente está sem alterações. O ultrassom endovaginal demonstrou útero em retroversoflexão com volume de 100cm3, endométrio regular com 3mm de espessura, anexos sem alterações. Mamografia classificada como BIRADS categoria 2. A paciente está muito preocupada quanto ao envelhecimento causado pela “menopausa” e solicita a orientação quanto ao uso de terapia hormonal.\n\nA alternativa correta dentre as abaixo relacionadas é:',
    options: [
      '(A) Não está indicada a terapia hormonal, uma vez que a categoria da mamografia é Bi-Rads® 2, exigindo primeiro controle com ecografia mamária.',
      '(B) Não há indicação de terapia hormonal, uma vez que a paciente está fora da janela de oportunidade.',
      '(C) Indicação da terapia estrogênica exclusiva, por período de 6 meses, reavaliando então a necessidade de manutenção da terapêutica.',
      '(D) Utilização da terapia estro-progestagênica, uma vez que os exames não demonstram qualquer contraindicação.'
    ],
    correctAnswer: 3,
    explanation: 'Mulher de 55 anos, com menopausa há 3 anos (dentro da janela de oportunidade: menos de 10 anos de menopausa e menos de 60 anos de idade), com fogachos intensos e sem contraindicações. Como tem útero, a terapia indicada é estroprogestativa, para proteger o endométrio.',
    commentary: 'Mamografia BI-RADS 2 é benigna e não impede a TH. A paciente está dentro da janela. Estrogênio isolado só é indicado para histerectomizadas.',
    reference: 'Novak & Berek, Tratado de Ginecologia, 15ª edição ed. Guanabara-Koogan.',
    tags: ['ginecologia', 'climatério', 'terapia hormonal']
  },
  {
    id: 'tp2020-88',
    module: 'Ginecologia e Obstetrícia',
    text: 'Maria tem 38 anos, é nuligesta, está casada com Joaquim há três anos, com quem teve a sexarca. Durante os dois primeiros anos de relacionamento usou anticoncepcional oral, mas está sem contracepção desde então. O seu esposo tem 2 filhos de outro relacionamento, sendo que o mais novo tem 4 anos. Ela procura atendimento em um consultório de ginecologia de convênio, com desejo de engravidar.\n\nSobre o caso acima, está correto afirmar:',
    options: [
      '(A) Na pesquisa básica para infertilidade não será necessário solicitar o espermograma de Joaquim, já que ele tem 2 filhos e, portanto, seria um gasto desnecessário para o convênio médico.',
      '(B) A reserva ovariana (“pool folicular”) de Maria já perdeu tanto em qualidade quanto em quantidade, a pesquisa básica para infertilidade deve ser iniciada.',
      '(C) A quantidade de oócitos de Maria está comprometida, mas a qualidade só é afetada após os 40 anos.',
      '(D) A faixa etária de Maria leva a acreditar que a dificuldade em gestar deve-se à endometriose.'
    ],
    correctAnswer: 1,
    explanation: 'Aos 38 anos, a reserva ovariana já declinou em quantidade e qualidade dos oócitos. Por isso, após 6 meses sem gestar (em mulheres acima de 35 anos), a investigação básica de infertilidade do casal deve ser iniciada.',
    commentary: 'O espermograma é obrigatório mesmo que o parceiro tenha filhos. A qualidade oocitária cai antes dos 40 anos. A idade não implica endometriose.',
    reference: 'Ginecologia Hormonal. Tratado de Reprodução Humana SBRH. Badalotti, M; Fernandes, C. E: De Melo, N. R; Amaral, W.N. SBUS, 2013.',
    tags: ['ginecologia', 'infertilidade']
  },
  {
    id: 'tp2020-89',
    module: 'Ginecologia e Obstetrícia',
    text: 'Paciente aos 30 anos, hígida e assintomática, realizou Colpocitologia Oncótica (CCO) compatível com “Atipias Glandulares de Significado Indeterminado (AGC)”.\n\nA conduta correta é:',
    options: [
      '(A) Repetir CCO em 6 meses.',
      '(B) Realizar colposcopia.',
      '(C) Curetagem de canal endocervical.',
      '(D) Realizar colposcopia e nova CCO com atenção ao canal endocervical.'
    ],
    correctAnswer: 3,
    explanation: 'Atipias glandulares de significado indeterminado (AGC) na citologia exigem colposcopia com nova coleta de citologia, com especial atenção ao canal endocervical. Acima de 35 anos ou com sangramento anormal, avalia-se também o endométrio.',
    commentary: 'Repetir a citologia em 6 meses é inadequado para AGC. A curetagem isolada não substitui a colposcopia.',
    reference: 'Martins, Nelson Valente. Patologia do trato genital inferior: diagnóstico e tratamento – 2. Ed. São Paulo, 2014. Pág.: 368-377 / https://www.inca.gov.br/sites/ufu.sti.inca.local/files//media/docu ment//diretrizesparaorastreamentodocancerdocolodoutero_20 16_corrigido.pdf',
    tags: ['ginecologia', 'rastreamento', 'câncer de colo uterino']
  },
  {
    id: 'tp2020-90',
    module: 'Ginecologia e Obstetrícia',
    image: '/images/tp2020-90.webp',
    text: 'Os números 1, 2, 3 e 4 identificam aleatoriamente hormônios esteroides ovarianos e gonadotrofinas.\n\nBaseado no comportamento dessas linhas ao longo do ciclo, refletidas no esquema abaixo, assinale a alternativa INCORRETA:',
    options: [
      '(A) O hormônio assinalado como 4 induz a célula da teca e granulosa a adquirir uma enzima aromatizante que fornece o passo essencial para a produção do hormônio assinalado como 1.',
      '(B) O aparecimento de receptores para o hormônio assinalado como 2 nos folículos é responsável pela produção do hormônio assinalado como 3.',
      '(C) O fator endócrino mais importante na fase lútea do ciclo menstrual é o marcante aumento da secreção do hormônio assinalado como 2.',
      '(D) A seleção de um único folículo (folículo dominante) destinado à ovulação está intimamente relacionado com a sua capacidade para biossíntese do hormônio assinalado como 1.'
    ],
    correctAnswer: 2,
    explanation: 'No esquema: 1 = estradiol, 2 = LH, 3 = progesterona e 4 = FSH. A questão pede a alternativa INCORRETA.\n\nNa fase lútea, o fator endócrino mais importante é o aumento da progesterona (3) produzida pelo corpo lúteo, e não do LH (2). Por isso, a alternativa C é a incorreta.',
    commentary: 'As demais estão corretas: o FSH induz a aromatase (produção de estradiol); os receptores de LH nas células da granulosa permitem a produção de progesterona; o folículo dominante é o de maior capacidade de produzir estradiol.',
    reference: 'Ovário - Cap. 4 Ross GT & Schreiber JR In: Endocrinologia Reprodutiva: fisiologia, fisiopatologia e tratamento clínico/ Yen S.S.C. and Jaffer R.B. São Paulo, Editora Roca, 1990.',
    tags: ['ginecologia', 'fisiologia', 'ciclo menstrual']
  },
  {
    id: 'tp2020-91',
    module: 'Ginecologia e Obstetrícia',
    text: 'Gestante com 36 anos, II Gesta I Para, compareceu à 1ª. consulta na UBS para acompanhamento pré-natal. A PA era de 120 x 80 mmHg, peso 84kg, estatura 1,65m. Trouxe exames realizados que foram pedidos pela enfermeira na ocasião do agendamento da consulta médica. Entre eles, uma glicemia de jejum de 94 mg/dL.\n\nFrente a essa informação, é correto afirmar que se trata de paciente:',
    options: [
      '(A) Com diabetes gestacional.',
      '(B) De alto risco para diabetes gestacional, pois tem 36 anos e é obesa, devendo fazer TTGO com 100g de dextrosol na 28ª semana.',
      '(C) De alto risco para diabetes gestacional, pois tem 36 anos e é obesa, devendo fazer TTGO com 75g de dextrosol entre a 24ª e 28ª semanas.',
      '(D) Sem diagnóstico definido de diabetes, devendo repetir a glicemia de jejum e fazer a hemoglobina glicada com 24 semanas.'
    ],
    correctAnswer: 0,
    explanation: 'Na primeira consulta de pré-natal, glicemia de jejum entre 92 e 125 mg/dL já define diabetes mellitus gestacional, sem necessidade de repetir ou de fazer TOTG.',
    commentary: 'O TOTG 75 g entre 24 e 28 semanas é indicado quando a glicemia de jejum inicial é < 92 mg/dL. O TOTG de 100 g não é o padrão no Brasil. A HbA1c não é usada para diagnóstico de DMG.',
    reference: 'https://www.febrasgo.org.br/pt/noticias/item/530-protocolo-febrasgo-para-o-manejo-de-diabetes-gestacional',
    tags: ['obstetrícia', 'diabetes gestacional']
  },
  {
    id: 'tp2020-92',
    module: 'Ginecologia e Obstetrícia',
    text: 'MSC, 32 anos, G2P1 com parto normal anterior, sem comorbidades na gravidez atual, negava qualquer tipo de alergia. Em gestação anterior apresentou colonização anal e vaginal positiva para Streptococcus agalactiae (EGB). Atualmente está com 34 5/7 sem, e apresenta gestação gemelar diamniótica e dicoriônica. Chegou ao plantão com queixa de perda de líquido há dois dias e dores abdominais que se intensificaram há 3 horas. Ao exame: PA: 120/80 mmHg; FC: 76 bpm; AU:40cm; BCF feto 1: 146 bpm e feto 2: 152 bpm; dinâmica uterina de 3 contrações em 10 minutos, de média intensidade e duração de 40 segundos. Ao exame especular, apresentava saída de líquido pelo orifício externo do colo, caracterizando uma rotura prematura de membranas ovulares pré-termo (RPMO-PT). Ao toque, colo dilatado com 5cm, médio, apresentação do feto 1 cefálico. MSC relata que ainda não havia coletado swab para EGB. Exames de vitalidade e ultrassonografia demonstravam boa oxigenação em ambos os fetos e pesos semelhantes.\n\nQual o melhor conjunto de condutas para este caso?',
    options: [
      '(A) Administrar antibiótico profilático (penicilina cristalina) para prevenção da sepse neonatal, usar tocolítico (terbutalina) para aumentar o período de latência do parto, porque trata-se de fetos prematuros.',
      '(B) Administrar antibiótico profilático (penicilina cristalina) para prevenção de sepse neonatal, realizar cesariana por ser gemelar.',
      '(C) Administrar antibiótico profilático (clindamicina) para prevenção de sepse neonatal e corticoterapia (betametasona 12mg IM) para estimular surfactante pulmonar fetal, manter condução do parto por via vaginal e técnicas de alívio da dor.',
      '(D) Administrar antibiótico profilático (penicilina cristalina) para prevenção da sepse neonatal, manter assistência ao parto por via vaginal e técnicas de alívio da dor.'
    ],
    correctAnswer: 3,
    explanation: 'Gestação gemelar de 34 semanas e 5 dias, em trabalho de parto ativo (5 cm), com rotura prematura de membranas e EGB desconhecido (e colonização em gestação anterior): profilaxia com penicilina cristalina e assistência ao parto vaginal (primeiro gemelar cefálico), com medidas de alívio da dor.',
    commentary: 'Tocólise é contraindicada com rotura de membranas e trabalho de parto ativo. Gemelaridade com primeiro feto cefálico não indica cesárea. Clindamicina é reservada a alérgicas, e o corticoide não é indicado após 34 semanas.',
    reference: 'Naef R W et al. Prematurerupture of membranes at 34 to 37 weeks gestation:Agressive versus conservative management. Am J Obstet Gynecol 2008; 178:126-30. / American College of Obstetricians and Gynecologists. Premature rupture of membranes. ACOG Practice Bulletin. Obstet Gynecol 2013; 122: 918-30. / Galletta MAK. Rotura prematura das membranas ovulares: protocolo clínico. São Paulo: Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO); 2018. (Protocolo FEBRASGO Obstetrícia, no. 30/ Comissão Nacional Especializada em Assistência Pré-Natal).',
    tags: ['obstetrícia', 'rotura prematura de membranas', 'estreptococo do grupo b']
  },
  {
    id: 'tp2020-93',
    module: 'Ginecologia e Obstetrícia',
    text: 'Gestante, G2P1, atualmente com 38 semanas e com parto normal anterior. Relata história pregressa de óbito neonatal precoce por sepse. Dá entrada no pronto atendimento com queixa de perda líquida. Sem comorbidades na gestação atual. Realizou 7 consultas no pré-natal de risco habitual, com exames normais, inclusive com coleta de EGB negativa com 35 semanas. Negava alergias. Ao exame físico geral: corada, hidratada, eupneica, sem outros comemorativos ao exame. Ao exame obstétrico apresentava: feto em situação longitudinal e apresentação cefálica, com AU de 36cm, BCF de 140 bpm sem desacelerações. Exame especular com presença de secreção transparente em fundo de saco, com pH 8,0 ao teste da fita. Toque vaginal: colo grosso, posteriorizado com 01 polpa justa.\n\nQual a melhor conduta?',
    options: [
      '(A) Internação com início imediato de penicilina cristalina e preparo de colo para interrupção da gestação.',
      '(B) Alta hospitalar, já que se trata de secreção fisiológica.',
      '(C) Internação e parto cesáreo imediato, devido ao risco infeccioso.',
      '(D) Internação e prescrição de penicilina cristalina após 18h de rotura de membranas.'
    ],
    correctAnswer: 0,
    explanation: 'Rotura de membranas a termo com antecedente de filho anterior com sepse neonatal (provável EGB): mesmo com swab negativo, há indicação de profilaxia intraparto com penicilina cristalina. A conduta é internar, iniciar o antibiótico e induzir o parto, com preparo do colo.',
    commentary: 'Não é secreção fisiológica (pH alcalino de 8). A cesárea não está indicada. Não se deve esperar 18 horas para iniciar a profilaxia nessa situação de risco.',
    reference: 'Gestação de Alto Risco, manual técnico - Ministério da Saúde - 2012. M. Zugaib; Bittar, R.E; Francisco, R.P.V - Protocolos Assistenciais. 5ª ed, 2015. / Naef R W et al. Prematurerupture of membranes at 34 to 37 weeks gestation:Agressive versus conservative management. Am J Obstet Gynecol 2008; 178:126-30. / American College of Obstetricians and Gynecologists. Premature rupture of membranes. ACOG Practice Bulletin. Obstet Gynecol 2013; 122: 918-30. / Galletta MAK. Rotura prematura das membranas ovulares: protocolo clínico. São Paulo: Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO); 2018. (Protocolo FEBRASGO Obstetrícia, no. 30/ Comissão Nacional Especializada em Assistência Pré-Natal).',
    tags: ['obstetrícia', 'rotura prematura de membranas']
  },
  {
    id: 'tp2020-94',
    module: 'Ginecologia e Obstetrícia',
    text: 'JLS, 28 anos, procura atendimento na Unidade Básica de Saúde. Encontra-se em período de pós-parto normal ocorrido há 45 dias. Relata estar em amamentação exclusiva e que não foi orientada quanto ao método contraceptivo.\n\nEntre os métodos abaixo, qual poderia ser recomendado?',
    options: [
      '(A) Uso de contraceptivo hormonal oral combinado de estrogênio e progesterona.',
      '(B) Utilização de contraceptivo hormonal oral com progesterona.',
      '(C) Apenas tabelinha é recomendada no puerpério para não influenciar na lactação.',
      '(D) Injetável mensal combinado.'
    ],
    correctAnswer: 1,
    explanation: 'Puérpera em aleitamento exclusivo: os métodos com estrogênio devem ser evitados nos primeiros 6 meses (redução da produção de leite e risco tromboembólico). Os métodos só de progestagênio são seguros e podem ser usados — pílula de progestagênio, injetável trimestral, implante ou DIU.',
    commentary: 'Combinados orais e injetáveis mensais contêm estrogênio. A tabelinha não é recomendada no puerpério, pelos ciclos irregulares.',
    reference: 'Novak & Berek, Tratado de Ginecologia, 15ª edição, Guanabara-Koogan.',
    tags: ['obstetrícia', 'contracepção', 'puerpério']
  },
  {
    id: 'tp2020-95',
    module: 'Ginecologia e Obstetrícia',
    text: 'MML, 20 anos, primigesta com 40 semanas de gravidez, não está fazendo acompanhamento regular de pré-natal. É atendida no ambulatório de gestação de alto risco trazendo exames solicitados em consulta anterior. Os resultados para sífilis são apresentados na seguinte forma: VDRL 1:32 e FTA-Abs positivo. Paciente nega qualquer antecedente de sífilis, tratamentos prévios do casal, presença de lesões vulvares ou outras doenças sexualmente transmissíveis.\n\nA melhor conduta para este caso é:',
    options: [
      '(A) Utilizar penicilina benzatina 7.200.000 UI para o casal e, caso o tratamento seja feito até antes do parto, considerar o caso como adequadamente tratado.',
      '(B) Iniciar tratamento do casal como sífilis de tempo desconhecido com 7.200.000 UI e orientar o serviço de pediatria quando do nascimento, como sífilis não adequadamente tratada.',
      '(C) Levando-se em conta a idade da paciente, apenas tratamento com penicilina benzatina 2.400.000 UI para o casal, porque provavelmente é um caso de sífilis primária.',
      '(D) Tratamento com penicilina benzatina 2.400.000 UI para o casal e comunicar o serviço de pediatria quando do nascimento como provável sífilis não adequadamente tratada.'
    ],
    correctAnswer: 1,
    explanation: 'Gestante com VDRL 1:32 e FTA-Abs positivo sem tempo de infecção conhecido: sífilis latente de duração indeterminada, tratada com penicilina benzatina 7,2 milhões UI (3 doses semanais) no casal.\n\nComo o tratamento não será concluído pelo menos 30 dias antes do parto (a gestante está com 40 semanas), a pediatria deve ser informada para conduzir o RN como exposto à sífilis não adequadamente tratada.',
    commentary: 'Tratamento iniciado tão perto do parto não é considerado adequado. A dose de 2,4 milhões UI é para sífilis recente (primária ou secundária).',
    reference: 'Zugaib Obstetrícia. Marcelo Zugaib e Rossana Pulcinelli, editora Manole, 3ª edição.',
    tags: ['obstetrícia', 'sífilis', 'pré-natal']
  },
  {
    id: 'tp2020-96',
    module: 'Ginecologia e Obstetrícia',
    text: 'RBS, 29. Anos, IIIGIIPc0A, com dois partos prematuros anteriores em decorrência de mau controle pressórico, é encaminhada de pré-natal de UBS com 33 semanas de gestação e pico pressórico de 170 x 110. Paciente apresentando edema em membros inferiores e queixando-se de cefaleia, escotomas e epigastralgia.\n\nSobre este caso, é correto afirmar que:',
    options: [
      '(A) Trata-se de pré-eclâmpsia grave, podendo ser aplicada conduta expectante, com administração de sulfato de magnésio, anti-hipertensivos de ação rápida, corticoide-profilaxia e aguardar o exame de proteinúria de 24hs para definir melhor conduta.',
      '(B) Trata-se de iminência de eclâmpsia, devendo a gestante ser preparada para interrupção da gestação imediatamente com urgência, com solicitação de exames no período pós-parto. Aplicação de hidralazina imediatamente e administração de sulfato de magnésio antes da resolução, estendendo-se por 24hs.',
      '(C) Trata-se de iminência de eclâmpsia, sendo necessário administração de sulfato de magnésio, hipotensor de ação rápida e avaliação do quadro materno e fetal com exames laboratoriais e de vitalidade fetal após estabilização, para definir melhor conduta.',
      '(D) Trata-se de pré-eclâmpsia grave, e após estabilização materna inicial, a gestante deve ser preparada para interrupção da gestação, com manutenção de sulfato de magnésio por 24hs após a resolução por cesariana devido à gravidade da doença.'
    ],
    correctAnswer: 2,
    explanation: 'Gestante de 33 semanas com crise hipertensiva (170 x 110 mmHg), cefaleia, escotomas e epigastralgia: iminência de eclâmpsia.\n\nA conduta é sulfato de magnésio, anti-hipertensivo de ação rápida e, após estabilização, avaliação laboratorial (síndrome HELLP) e da vitalidade fetal para decidir o momento e a via do parto.',
    commentary: 'Não é necessário aguardar a proteinúria para conduzir. A resolução imediata sem estabilização e avaliação é inadequada. Iminência de eclâmpsia não é só \'pré-eclâmpsia grave\', e cesárea não é obrigatória.',
    reference: 'Peraçoli JC, Borges VT, Ramos JG, Cavalli RC, Costa SH, Oliveira LG, et al. Pré-eclâmpsia/eclâmpsia. São Paulo: Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO); 2018. (Protocolo FEBRASGO - Obstetrícia, no. 8/ Comissão Nacional Especializada em Hipertensão na Gestação). / American College of Obstetricians and Gynecologists; Task Force on Hypertension in Pregnancy. Hypertension in pregnancy. Report of the American College of Obstetricians and Gynecologists’ Task Force on Hypertension in Pregnancy. Obstet Gynecol. 2013;122(5):1122–31. / Brown MA, Magee LA, Kenny LC, Karumanchi SA, McCarthy FP, Saito S, et al.; International Society for the Study of Hypertension in Pregnancy (ISSHP). Hypertensive Disorders of Pregnancy: ISSHP Classification, Diagnosis, and Management Recommendations for International Practice [Review]. Hypertension. 2018;72(1):24–43. / Committee on Obstetric Practice. Committee Opinion No. 692: Emergent Therapy for Acute-Onset, Severe Hypertension During Pregnancy and the Postpartum Period. Obstet Gynecol. 2017;129(4):e90–5.',
    tags: ['obstetrícia', 'pré-eclâmpsia', 'síndromes hipertensivas']
  },
  {
    id: 'tp2020-97',
    module: 'Ginecologia e Obstetrícia',
    image: '/images/tp2020-97.webp',
    text: 'J.M.S., 28 anos, secundigesta com 1 parto normal de termo, em trabalho de parto, com idade gestacional de 36 semanas e 3 dias, é internada em maternidade em franco trabalho de parto com 3cm de dilatação, colo médio, anterior, bolsa íntegra e apresentação cefálica. Ao internar, paciente é submetida a exame da figura 1 para avaliação de vitalidade fetal. Instalada em leito em centro obstétrico, é monitorada durante todo o trabalho de parto. Transcorridas 4 horas da internação, apresenta-se com dores em baixo ventre de moderada a forte intensidade, dinâmica uterina mantida 4 contrações em 10 minutos. Avaliado colo, este estava anterior, fino, previno para 5/6cm e a bolsa ainda encontrava-se íntegra. Solicitada nova avaliação, realizado exame da figura 2.\n\nSobre os exames, podemos concluir que:',
    options: [
      '(A) A figura 1 demonstra uma cardiotocografia categoria 1, normal, com acompanhamento normal do restante do trabalho de parto. Já a figura 2 demonstra um padrão de cardiotocografia indeterminado, ou categoria 3, fazendo com que medidas de suporte de reanimação intraútero sejam realizadas no transcorrer do acompanhamento.',
      '(B) A figura 1 demonstra uma cardiotocografia categoria 1, permitindo que a equipe realize reavaliações contínuas durante todo o trabalho de parto. Já a figura 2 demonstra um padrão anormal, ou categoria 2, fazendo com que haja imediata avaliação e reanimação intraútero. A realização do parto cesariano pode ser considerada.',
      '(C) A figura 1 demonstra uma cardiotocografia categoria 1, permitindo que a equipe assista com tranquilidade o trabalho de parto desta paciente. Já a figura 2 demonstra um padrão indeterminado, ou categoria 2, fazendo com que a equipe realize avaliações contínuas, podendo necessitar de outros métodos ou medidas de reanimação do intraútero.',
      '(D) A figura 1 demonstra uma cardiotocografia de traçado indeterminado, ou categoria 2, sendo necessárias medidas de reanimação intraútero e reavaliações contínuas de vitalidade fetal. A figura 2 demonstra padrão anormal, ou categoria 3, em que a realização do parto pode ser considerada.'
    ],
    correctAnswer: 2,
    explanation: 'A figura 1 é uma cardiotocografia categoria I (normal): linha de base normal, variabilidade moderada e sem desacelerações. A figura 2 é categoria II (indeterminada), o que exige avaliação contínua e, se necessário, medidas de reanimação intrauterina ou outros métodos de avaliação.',
    commentary: 'A categoria III (anormal) exige intervenção imediata. A figura 2 não preenche critérios de categoria III, e a figura 1 não é indeterminada.',
    reference: 'Macones et al. The 2008 National Institute of Child Helth and Human Development Workshop Report on Eletronic Fetal Monitoring. Obstet Gynecol, 2008; 112-661-6.',
    tags: ['obstetrícia', 'cardiotocografia', 'vitalidade fetal']
  },
  {
    id: 'tp2020-98',
    module: 'Ginecologia e Obstetrícia',
    text: 'O médico pré-natalista deve ter em mente que a necessidade de ferro aumenta durante o período gestacional e a suplementação é recomendada tanto pela Organização Mundial da Saúde quanto pelo Ministério da Saúde.\n\nAssinale a alternativa correta quanto ao tema citado:',
    options: [
      '(A) A suplementação recomendada para a prevenção da anemia materna é de 30mg de ferro elementar por dia, para pacientes sem anemia e geralmente iniciando no segundo trimestre.',
      '(B) A suplementação de ferro para pacientes não anêmicas deve ser iniciada logo que tiver início o pré-natal, de preferência antes das 8 semanas, nas doses de 60 mg/dia.',
      '(C) A suplementação de ferro só deve ser realizada se a gestante apresentar hemoglobina inferior a 10 g/dL.',
      '(D) Para que se tenha a absorção máxima de ferro é necessário que o ácido fólico seja também prescrito durante toda a gestação.'
    ],
    correctAnswer: 0,
    explanation: 'Para gestantes sem anemia, a suplementação recomendada (OMS/FEBRASGO) é de 30 a 60 mg/dia de ferro elementar, geralmente a partir do segundo trimestre, para prevenir anemia materna.',
    commentary: 'O início precoce antes de 8 semanas não é obrigatório. A suplementação não depende de Hb < 10. O ácido fólico previne defeitos do tubo neural, mas não é necessário para absorver o ferro. Observação: o Ministério da Saúde recomenda 40 mg/dia de ferro elementar.',
    reference: 'Protocolos Assistenciais, Quarta Edição. Zugaib, M; Bittar, E.B. Atheneu, 2013. / El Beitune P, Jiménez MF, Salcedo MM, Ayub AC, Cavalli RC, Duarte G. Nutrição durante a gravidez. São Paulo: Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO); 2018. (Protocolo FEBRASGO - Obstetrícia, nº 14/Comissão Nacional Especializada em Assistência Pré-Natal).',
    tags: ['obstetrícia', 'pré-natal', 'anemia']
  },
  {
    id: 'tp2020-99',
    module: 'Ginecologia e Obstetrícia',
    text: 'Em um plantão na maternidade, o Dr. João atende uma gestante com 33 semanas, queixando-se de sangramento vaginal intermitente, de pequena monta, há 2 meses que acentuou há 4 horas, após ela ter feito faxina em sua casa. Ela informa que morava na zona rural e ainda não iniciou o pré-natal. Ao exame físico apresenta-se hipocorada, com AU = 26cm, BCF = 133 bpm e PA = 110 x 70 mmHg; D.U = ausente e tônus uterino normal. Ao exame especular: sangue em moderada quantidade, coletado. Ele então solicita uma ultrassonografia com urgência, a qual evidencia uma gestação tópica, única, com feto vivo com biometria compatível com 32 semanas, líquido normal e placenta prévia centro-total.\n\nEntre as alternativas abaixo, a conduta correta a ser tomada pelo Dr. João é:',
    options: [
      '(A) Prescrever papa de hemácias, uterolítico, corticoide para a maturação pulmonar e realizar o toque vaginal para avaliar a dilatação.',
      '(B) Prescrever hioscina e sulfato ferroso, orientar repouso em casa e encaminhar para o ambulatório de alto risco.',
      '(C) Indicar a interrupção da gestação, porque pode ocorrer o descolamento placentário súbito e o feto obituar, já que se trata da forma mais grave de placenta prévia.',
      '(D) Internar a paciente, solicitar hemograma e tipagem sanguínea; repouso no leito, avaliar sinais vitais, prescrever corticoide, observar sangramento e acompanhar a vitalidade fetal.'
    ],
    correctAnswer: 3,
    explanation: 'Placenta prévia centro-total com sangramento de moderada monta, mãe estável e feto pré-termo (33 semanas) sem comprometimento: a conduta é expectante, em ambiente hospitalar — internação, hemograma e tipagem, repouso, corticoide para maturação pulmonar e monitorização da vitalidade fetal.',
    commentary: 'O toque vaginal é contraindicado na placenta prévia. O tratamento ambulatorial é inadequado com sangramento moderado. A interrupção imediata não é necessária com mãe e feto estáveis.',
    reference: 'Protocolos Assistenciais, Quarta Edição. Zugaib, M; Bittar, E.B. Atheneu, 2013.',
    tags: ['obstetrícia', 'hemorragia da segunda metade', 'placenta prévia']
  },
  {
    id: 'tp2020-100',
    module: 'Ginecologia e Obstetrícia',
    text: 'Gestante de 25 anos, 35 semanas de amenorreia, pré-natal adequado, última consulta há 3 semanas. Procura UBS referindo dor em BV há 4 horas. Exame físico: bom estado geral, PA 120/80 mmHg, peso 52kg, ausência de edema em MMII. Exame obstétrico AU = 32cm; BCF 144 bpm; DU: 3 contrações moderadas de 10 minutos com toque vaginal de 2,0cm, esvaecido 60%, cefálico, plano-2 De Lee, bolsa íntegra.\n\nA conduta correta é:',
    options: [
      '(A) Investigar infecção urinária, soroterapia com antiespasmódico e alta com sintomáticos.',
      '(B) Avaliar vitalidade fetal e encaminhar para unidade terciária.',
      '(C) Antibiótico profilático, investigar infecção urinária, corticoterapia e encaminhar para unidade terciária.',
      '(D) Corticoterapia, profilaxia do streptococcus do grupo B e encaminhar para unidade terciária.'
    ],
    correctAnswer: 1,
    explanation: 'Trabalho de parto prematuro a 35 semanas. Após 34 semanas não há indicação de tocólise nem, de rotina, de corticoide. A conduta na UBS é avaliar a vitalidade fetal e encaminhar a gestante à unidade terciária para assistência ao parto pré-termo.',
    commentary: 'Alta com sintomáticos é inadequada. Corticoide e antibiótico profilático não são as condutas centrais na UBS nessa idade gestacional.',
    reference: 'Montenegro, Carlos Antonio Barbosa Rezende, Obstetrícia Fundamental /Carlos Antonio Barbosa Montenegro, Jorge de Rezende Filho -11ª ed - Rio de Janeiro; Guanabara Koogan, 2008. / Luis Camano, Eduardo de Souza, Nelson Sass, Rosiane Mattar Guias de Medicina Ambulatorial e Hospitalar UNIFESP / EPM 1ª ed = São Paulo, Manole, 2003.',
    tags: ['obstetrícia', 'trabalho de parto prematuro']
  }
];
