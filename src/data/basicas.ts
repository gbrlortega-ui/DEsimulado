import { Question } from '../types';

export const BASICAS_QUESTIONS: Question[] = [
  {
    id: 'tp2024-1',
    module: 'Ciências Básicas',
    text: 'Um bebê do sexo masculino, recém-nascido e a termo, é atendido em unidade de cuidados intensivos neonatais com vômitos frequentes, irritabilidade e falta de ganho de peso. Como em toda criança ao nascer, foi realizado o "Teste do Pezinho" no paciente, o qual detectou uma das mais conhecidas doenças metabólicas congênitas. Essa patologia é resultado de um defeito na enzima fenilalanina hidroxilase, que participa do catabolismo do aminoácido fenilalanina. Desta forma, qual a patologia e quais outros sintomas o bebê poderá apresentar caso não receba o devido tratamento?',
    options: [
      '(A) Hipotireoidismo; dores musculares, pele seca e queda de cabelo.',
      '(B) Fenilcetonúria; deficiência intelectual, convulsões, náusea e erupção cutânea.',
      '(C) Anemia falciforme; fadiga, fraqueza e palidez.',
      '(D) Hiperplasia adrenal; dores abdominais graves, fraqueza extrema e insuficiência renal.'
    ],
    correctAnswer: 1,
    explanation: "A fenilalanina hidroxilase converte fenilalanina em tirosina. Quando ela falta, a fenilalanina se acumula no sangue e no cérebro, e parte dela vira fenilcetonas eliminadas na urina: é a fenilcetonúria, doença autossômica recessiva rastreada no Teste do Pezinho.\n\nSem dieta restrita em fenilalanina desde as primeiras semanas, o excesso é tóxico para o sistema nervoso em formação e causa deficiência intelectual, convulsões e alterações de comportamento. Também há vômitos, eczema (erupção cutânea), odor de \"mofo\" na urina e pele e cabelos mais claros, já que falta tirosina para fazer melanina.",
    commentary: "Hipotireoidismo (A): também é rastreado no Teste do Pezinho, mas decorre da falta de hormônio tireoidiano, não de defeito na fenilalanina hidroxilase.\n\nAnemia falciforme (C): é uma hemoglobinopatia por mutação no gene da betaglobina; não tem relação com o metabolismo de aminoácidos.\n\nHiperplasia adrenal (D): resulta de defeito enzimático na síntese de cortisol (em geral a 21-hidroxilase), com perda de sal e virilização, e não de defeito na fenilalanina hidroxilase.",
    tip: "Fenilalanina hidroxilase deficiente = fenilcetonúria: sem dieta, deficiência intelectual e convulsões.",
    reference: 'Nelson, D.L.; Cox, M.M. (2019). Princípios de bioquímica de Lehninger (7a ed.). Artmed. Guyton, A. C., & Hall, J. E. (2016). Tratado de Fisiologia Médica (13ª ed.). Elsevier.',
    tags: ['bioquímica', 'erros inatos do metabolismo']
  },
  {
    id: 'tp2024-2',
    module: 'Ciências Básicas',
    text: 'O diabetes mellitus é uma doença com elevada prevalência global, associada à mortalidade cardiovascular e complicações microvasculares, que conferem o caráter crônico a essa patologia. No diabetes tipo II, o processo aterosclerótico tem início antes mesmo do diagnóstico, daí a importância do reconhecimento dos fatores de risco implicados na fisiopatologia da doença vascular nessa população. A dislipidemia no diabético é caracterizada por lipoproteínas ricas em triglicérides, LDL pequenas, densas e muito aterogênicas e HDL-c baixo. (Fonte: Chacra AP. Dislipidemia Diabética. Rev. Soc. Cardiol. Estado de Säo Paulo; 26(3): 195-204, 2016). É correto afirmar que uma das causas da hipertrigliceridemia observada em pacientes com diabetes mellitus é causada por:',
    options: [
      '(A) Aumento da atividade da HMG-CoA redutase.',
      '(B) Redução da atividade da lipase hormônio sensível.',
      '(C) Aumento da neoglicogênese hepática.',
      '(D) Redução da atividade da lipase lipoproteica.'
    ],
    correctAnswer: 3,
    explanation: "A lipase lipoproteica fica no endotélio dos capilares e quebra os triglicérides transportados por quilomícrons e VLDL, liberando ácidos graxos para os tecidos. A insulina é o principal estímulo para sua síntese e atividade.\n\nNo diabetes tipo 2, a resistência à insulina reduz a ação dessa enzima, e os triglicérides deixam de ser retirados da circulação com eficiência. Some-se a isso o maior aporte de ácidos graxos ao fígado, que aumenta a produção de VLDL. O resultado é a dislipidemia típica do diabético: triglicérides altos, HDL baixo e LDL pequenas e densas.",
    commentary: "HMG-CoA redutase (A): é a enzima-chave da síntese de colesterol; seu aumento eleva o colesterol, e não explica a hipertrigliceridemia.\n\nLipase hormônio sensível (B): na resistência à insulina ela fica mais ativa, e não menos, porque a insulina normalmente a inibe; mais lipólise no tecido adiposo envia mais ácidos graxos ao fígado.\n\nNeoglicogênese hepática (C): está aumentada no diabetes e contribui para a hiperglicemia, mas não é a via que leva ao acúmulo de triglicérides no plasma.",
    tip: "Diabetes tipo 2 + triglicérides altos: pense na lipase lipoproteica pouco ativa por resistência à insulina.",
    reference: 'Nelson DL, Cox MM - Princípios de Bioquímica de Lehninger 5ª ed. Artmed, 2011. Baynes JW, Dominiczak MH – Bioquímica Médica 2ª ed, Ed. Elsevier, 2009. Harvey RA, Ferrier DR - Bioquímica Ilustrada 5ª ed. Artmed, 2012.',
    tags: ['bioquímica', 'metabolismo', 'diabetes']
  },
  {
    id: 'tp2024-3',
    module: 'Ciências Básicas',
    text: 'A compreensão detalhada da estrutura e função do material genético é fundamental para a prática da medicina, especialmente no diagnóstico e tratamento de doenças genéticas. O genoma humano é composto de muitas regiões que desempenham papéis diferentes na síntese de proteínas e na regulação gênica. Dentro do processo de transcrição e tradução do DNA em proteínas, certas sequências de RNA desempenham funções específicas e importantes. Diferenciar entre essas sequências é essencial para entender como a informação genética é expressa e regulada. Assinale a alternativa correta:',
    options: [
      '(A) Éxons são regiões codificantes do RNA mensageiro, enquanto íntrons são segmentos removidos durante o processamento do RNA mensageiro, sendo não codificantes e não traduzidos em proteínas.',
      '(B) Íntrons são regiões codificantes do RNA mensageiro, enquanto éxons são segmentos removidos durante o processamento do RNA mensageiro, sendo não codificantes e não traduzidos em proteínas.',
      '(C) A Cap 5’ no RNA mensageiro protege o mRNA da degradação enzimática e é traduzido na formação da proteína no citoplasma.',
      '(D) A cauda poliA no RNA mensageiro é um tipo de íntrom localizada em uma porção terminal dessa molécula e removida através do processo denominado splicing.'
    ],
    correctAnswer: 0,
    explanation: "O gene é transcrito inteiro em um RNA precursor (pré-mRNA), que contém éxons e íntrons. No processamento dentro do núcleo, o splicing retira os íntrons e une os éxons; são os éxons que permanecem no RNA mensageiro maduro e carregam a sequência que será traduzida em proteína.\n\nAlém do splicing, o processamento inclui a adição do cap 5' e da cauda poli-A, que protegem o RNA e ajudam na exportação e na tradução, mas não são traduzidos.",
    commentary: "Íntrons como regiões codificantes (B): inverte os conceitos; os íntrons é que são removidos, e os éxons formam o mRNA maduro.\n\nCap 5' (C): protege o mRNA da degradação e ajuda o ribossomo a reconhecê-lo, mas é um nucleotídeo modificado que não é traduzido em aminoácidos.\n\nCauda poli-A (D): não é íntron; é uma sequência de adeninas adicionada à extremidade 3' durante o processamento, e permanece no mRNA maduro em vez de ser retirada pelo splicing.",
    tip: "Éxon expressa e fica; íntron interrompe e sai no splicing. Cap e cauda poli-A protegem, mas não são traduzidos.",
    reference: 'Alberts, B.; Johnson, A.; Lewis, J.; Raff, M.; Roberts, K.; Walter, P. (2017). Biologia Molecular da Célula. (6ª ed.) Artmed. Nature Education Home (2024). Nature. Disponível em: <https://www.nature.com/scitable/definition/intron-introns67/#:~:text=Introns%20are%20noncoding%20sections%20of,f or%20proteins%20are%20called%20exons>. Acesso em: 25 de maio de 2024.',
    tags: ['genética molecular', 'biologia celular']
  },
  {
    id: 'tp2024-4',
    module: 'Ciências Básicas',
    text: 'A identificação de variantes genéticas, cromossômicas e gênicas é uma etapa importante na medicina de precisão, auxiliando na determinação do diagnóstico e prognóstico de doenças, e também na orientação de terapias medicamentosas alvo-específicas. A presença do cromossomo Filadélfia, por exemplo, é o produto da translocação entre os cromossomos 9 e 22, que leva à fusão entre os genes BCR-ABL, presente em mais de 90% dos casos de leucemia mieloide crônica (LMC). A identificação desta alteração cromossômica determina a conduta terapêutica nos casos de LMC. O acompanhamento da variante também é utilizado para determinar a efetividade do tratamento oncológico aplicado. Qual técnica de genética molecular deve ser utilizada entre as metodologias apresentadas para a identificação deste marcador genético?',
    options: [
      '(A) Digestão dos cromossomos 9 e 22 com enzimas de restrição.',
      '(B) Multiplex Ligation Probe Amplification (MLPA).',
      '(C) FISH com sondas sequência-específicas.',
      '(D) Sequenciamento de Sanger dos cromossomos 9 e 22.'
    ],
    correctAnswer: 2,
    explanation: "O cromossomo Filadélfia é a translocação t(9;22), que junta o gene BCR (cromossomo 22) ao ABL1 (cromossomo 9). A hibridização in situ fluorescente (FISH) usa sondas marcadas que se ligam a essas sequências específicas: quando há fusão, os sinais de cores diferentes aparecem colados, o que identifica o rearranjo mesmo em núcleos fora da divisão celular.\n\nNa prática, o diagnóstico da LMC também usa o cariótipo e o RT-PCR para o transcrito BCR-ABL1; o RT-PCR quantitativo é o exame de escolha para monitorar a resposta aos inibidores de tirosina quinase. Entre as opções oferecidas, porém, a única adequada para detectar a translocação é a FISH.",
    commentary: "Enzimas de restrição (A): cortam o DNA em sequências curtas e serviriam para análise de fragmentos, mas não detectam de forma prática uma translocação entre dois cromossomos inteiros.\n\nMLPA (B): é útil para identificar deleções e duplicações (alterações de número de cópias), mas não detecta translocações equilibradas como a t(9;22).\n\nSequenciamento de Sanger (D): lê trechos curtos de DNA e serve para mutações pontuais; não é capaz de sequenciar cromossomos inteiros nem é método de rotina para rearranjos.",
    tip: "Cromossomo Filadélfia: detectado por cariótipo, FISH ou RT-PCR; o PCR quantitativo acompanha o tratamento.",
    reference: 'JORDE, Lynn B. Genética médica. Rio de Janeiro GEN Guanabara Koogan 2017 1 recurso online ISBN 9788595151659. NUSSBAUM, Robert L. Thompson & Thompson Genética médica. Rio de Janeiro GEN Guanabara Koogan 2016 1 recurso online ISBN 9788595151819.',
    tags: ['genética molecular', 'hematologia']
  },
  {
    id: 'tp2024-5',
    module: 'Ciências Básicas',
    text: 'O processo de gametogênese masculina se desenvolve em etapas. Inicia-se pela espermatogênese com a formação da célula germinativa, haploide, denominada espermatozoide. Porém, a capacidade para a fecundação ainda necessita ser adquirida por esses espermatozoides, permitindo o acesso ao gameta feminino e posteriormente a fusão do material genético masculino e feminino e formação do zigoto. Em relação a esse processo de espermatogênese e capacitação da célula germinativa masculina em fecundar um ovócito, assinale a alternativa correta:',
    options: [
      '(A) A espermatogênese, em epidídimo, determina a formação morfológica completa. Entretanto, há necessidade de maturação funcional, que é adquirida no interior do útero/tuba uterina, denominadas de capacitação e reação acrossomal, permitindo assim o rompimento da zona pelúcida ovocitária, entrada do espermatozoide no gameta feminino e fusão dos pró-núcleos.',
      '(B) A espermatogênese, em túbulo seminífero testicular, determina a formação morfológica e funcional completa. Nesse momento, o espermatozoide está apto ao rompimento da zona pelúcida do gameta feminino e fusão dos prónúcleos.',
      '(C) A espermatogênese, em túbulo seminífero testicular, determina a formação morfológica completa. Entretanto, há necessidade de maturação funcional, que é adquirida no interior do epidídimo, denominadas de capacitação e reação acrossomal, permitindo assim o rompimento da zona pelúcida ovocitária, entrada do espermatozoide no gameta feminino e fusão dos pró-núcleos.',
      '(D) A espermatogênese, em túbulo seminífero testicular, determina a formação morfológica completa. Entretanto, há necessidade de maturação funcional, adquirida no interior do útero/tuba uterina, denominadas de capacitação e reação acrossomal, permitindo assim o rompimento da zona pelúcida ovocitária, entrada do espermatozoide no gameta feminino e fusão dos pró-núcleos.'
    ],
    correctAnswer: 3,
    explanation: "A espermatogênese acontece nos túbulos seminíferos do testículo e termina com a espermiogênese, quando a espermátide ganha cabeça, acrossomo e flagelo: o espermatozoide sai dali com a forma completa. No epidídimo ele ganha motilidade e amadurece, mas ainda não consegue fecundar.\n\nA capacitação ocorre no trato genital feminino (útero e tubas): há remoção de glicoproteínas e colesterol da membrana da cabeça. Só o espermatozoide capacitado, ao encontrar a zona pelúcida, sofre a reação acrossomal, liberando enzimas que permitem atravessá-la, fundir-se ao ovócito e formar os pró-núcleos.",
    commentary: "Espermatogênese no epidídimo (A): a formação dos espermatozoides ocorre nos túbulos seminíferos; o epidídimo é local de armazenamento e maturação.\n\nFormação funcional completa no testículo (B): o espermatozoide que deixa o túbulo seminífero não está apto a fecundar; precisa de maturação no epidídimo e de capacitação no trato feminino.\n\nCapacitação no epidídimo (C): a capacitação e a reação acrossomal acontecem no trato genital feminino, não no epidídimo.",
    tip: "Forma no túbulo seminífero, amadurece no epidídimo, capacita no trato feminino.",
    reference: 'SADLER, T.W; Langman, Embriologia médica. 14a ed. Rio de Janeiro: Guanavara-Koogan Editora, 2021. JUNQUEIRA LC., CARNEIRO J. Histologia Básica 13ª Edição. Editora Guanabara Koogan, 2017. KIERSZENBAUM AL., TRES LL. Histologia e Biologia Celular: Uma Introdução a Patologia. 4ª Edição. Editora GEN Guanabara Koogan, 2016.',
    tags: ['embriologia', 'histologia']
  },
  {
    id: 'tp2024-6',
    module: 'Ciências Básicas',
    text: 'A anencefalia, um dos defeitos de formação de tubo neural (DFTN) mais frequentes, é uma malformação congênita decorrente da falha no fechamento da extremidade superior do tubo neural durante a quarta semana de embriogênese, resultando na ausência total ou parcial do cérebro e do crânio, deixando o cérebro exposto, quando este é desenvolvido parcialmente. Trata-se de uma doença letal que ocorre em um a cinco em 1000 nascidos vivos e é mais frequente no sexo feminino. Esse acometimento do feto o torna inviável, ou seja, há incompatibilidade com a vida extrauterina. Em mais de metade dos casos, os fetos não resistem à gestação e os que alcançam o momento do parto sobrevivem minutos ou horas fora do útero. Tal como no caso dos DFTN, estima-se que o principal agente causador da anencefalia seja a deficiência de vitaminas durante a gestação, principalmente do ácido fólico, além da influência de outros agentes teratogênicos como radiação, sulfonamidas e salicilatos. Associando as informações do texto acima aos conhecimentos da Neuroembriologia e Teratogênese, assinale a alternativa correta:',
    options: [
      '(A) O processo de neurulação se desenvolve a partir do espessamento de uma região da notocorda. Tal evento é estimulado e induz a formação da placa neural, pregas neurais e posterior fechamento do tubo neural. Agentes teratogênicos interferem na movimentação das células e determinam má formação, tal como a anencefalia.',
      '(B) O processo de neurulação se desenvolve a partir do espessamento de uma região da ectoderme. Tal evento é estimulado pela notocorda que induz a formação da placa neural, pregas neurais e posterior fechamento do tubo neural. Agentes teratogênicos interferem na movimentação das células e determinam má formação, tal como a anencefalia.',
      '(C) O processo de neurulação se desenvolve a partir do espessamento de uma região da ectoderme. Tal evento é estimulado pelas cristas neurais que induzem a formação da placa neural, pregas neurais e posterior fechamento do tubo neural. Agentes teratogênicos interferem na movimentação das células e determinam má formação, tal como a anencefalia.',
      '(D) O processo de neurulação se desenvolve a partir do espessamento de uma região da mesoderme. Tal evento é estimulado pela notocorda que induz a formação da placa neural, pregas neurais e posterior fechamento do tubo neural. Agentes teratogênicos interferem na movimentação das células e determinam má formação, tal como a anencefalia.'
    ],
    correctAnswer: 1,
    explanation: "Na terceira semana, a notocorda (derivada do mesoderma) libera sinais que induzem o ectoderma que está acima dela a se espessar, formando a placa neural. As bordas da placa se elevam como pregas neurais, que se aproximam e se fundem, formando o tubo neural; as extremidades (neuroporos) fecham na quarta semana.\n\nFalha no fechamento do neuroporo cranial leva à anencefalia; falha no caudal, à espinha bífida. A suplementação de ácido fólico antes da concepção e no início da gestação reduz o risco desses defeitos.",
    commentary: "Neurulação a partir da notocorda (A): a notocorda induz, mas é o ectoderma que se espessa e forma a placa neural.\n\nIndução pelas cristas neurais (C): as cristas neurais surgem das bordas das pregas durante a neurulação; elas não são o indutor do processo.\n\nNeurulação a partir do mesoderma (D): o sistema nervoso deriva do ectoderma; o mesoderma forma, entre outros, a própria notocorda, os somitos e os músculos.",
    tip: "Notocorda induz, ectoderma forma o tubo neural. Neuroporo cranial aberto = anencefalia.",
    reference: 'SADLER, T.W; Langman, Embriologia médica. 14a ed. Rio de Janeiro: Guanavara-Koogan Editora, 2021. JUNQUEIRA LC., CARNEIRO J. Histologia Básica 13ª Edição. Editora Guanabara Koogan, 2017.',
    tags: ['embriologia', 'neuroembriologia']
  },
  {
    id: 'tp2024-7',
    module: 'Ciências Básicas',
    text: 'Uma mulher de 25 anos apresenta-se no consultório médico com queixas de fadiga, palidez, dor no peito e dificuldade respiratória. Seus exames laboratoriais revelam valores de hemoglobina abaixo do valor de referência, apresentando células falciformes e presença de hemoglobina S, subsidiando um diagnóstico de anemia falciforme. Desta forma, pode-se afirmar que:',
    options: [
      '(A) A anemia falciforme é uma condição genética recessiva, resultante da substituição de um único aminoácido na molécula de hemoglobina, prejudicando o transporte de oxigênio e levando à formação de células falciformes.',
      '(B) A anemia falciforme é mais comum em pessoas que praticam exercícios físicos intensos regularmente, devido à quebra acelerada dos glóbulos vermelhos durante o esforço para a liberação de glicídios, destinados à produção de energia.',
      '(C) A anemia falciforme é causada por uma infecção bacteriana que afeta a produção de hemoglobina, afetando o transporte de oxigênio e nutrientes no sangue.',
      '(D) A anemia falciforme é causada por uma dieta rica em gorduras saturadas, que afeta a produção de hemoglobina, alterando sua conformação estrutural e funcionalidade.'
    ],
    correctAnswer: 0,
    explanation: "A anemia falciforme é herdada de forma autossômica recessiva: a pessoa doente tem duas cópias do gene alterado da betaglobina (HbSS). A mutação troca um único aminoácido, o ácido glutâmico, por valina na sexta posição da cadeia beta, formando a hemoglobina S.\n\nQuando desoxigenada, a HbS se polimeriza e deforma a hemácia em foice. Essas células rígidas são destruídas antes do tempo (anemia hemolítica) e obstruem a microcirculação, causando crises de dor, síndrome torácica aguda e lesões de órgãos.",
    commentary: "Exercício físico intenso (B): a doença é genética e não é causada por exercício; esforço com desidratação pode, no máximo, precipitar crises em quem já tem a doença.\n\nInfecção bacteriana (C): infecções desencadeiam complicações, mas não causam a anemia falciforme, que é hereditária.\n\nDieta rica em gordura saturada (D): a alimentação não muda a estrutura da hemoglobina; a alteração está no gene da betaglobina.",
    tip: "HbS: valina no lugar do ácido glutâmico na posição 6 da betaglobina; herança autossômica recessiva.",
    reference: 'Guyton, A. C., & Hall, J. E. (2016). Tratado de Fisiologia Médica (13ª ed.). Elsevier. Ganong, W. F. (2016). Fisiologia Médica (25ª ed.). McGrawHill Education. Nelson, D.L.; Cox, M.M. (2019). Princípios de bioquímica de Lehninger (7a ed.). Artmed.',
    tags: ['genética', 'hematologia', 'bioquímica']
  },
  {
    id: 'tp2024-8',
    module: 'Ciências Básicas',
    text: 'A organização dos diversos tipos celulares de organismos vivos varia de acordo com as funções dos tecidos e sistemas orgânicos dos quais fazem parte. No corpo humano, a regra se mantém. Cada célula tecidual de diferentes sistemas é uma estrutura funcional com organelas que desempenham importantes funções fisiológicas. Marque a alternativa correta:',
    options: [
      '(A) No sistema respiratório, as células da glia (células não neuronais que desempenham diversas funções de suporte e proteção no sistema nervoso) estão localizadas na área olfatória das fossas nasais, desempenhando um papel essencial na detecção e distinção de uma variedade de odores.',
      '(B) Os pneumócitos do tipo II são células colunares, grandes e espessas que revestem a maior parte da superfície interna dos alvéolos. Essas células formam uma barreira fina que permite a troca eficiente de oxigênio e dióxido de carbono entre os alvéolos e os capilares sanguíneos adjacentes.',
      '(C) Os miócitos são células que contêm uma grande quantidade de mitocôndrias, essenciais para atender às demandas energéticas intensas e contínuas do miocárdio.',
      '(D) No sistema digestório, os fibroblastos produzem impulsos elétricos para coordenar a movimentação dos alimentos pelo trato digestivo.'
    ],
    correctAnswer: 2,
    explanation: "O miocárdio contrai sem parar, a vida toda, e depende quase totalmente do metabolismo aeróbico. Por isso os cardiomiócitos têm grande quantidade de mitocôndrias, que ocupam cerca de um terço do volume celular e produzem o ATP necessário para a contração e para o bombeamento de íons.\n\nIsso também explica por que o coração é tão sensível à falta de oxigênio: na isquemia, a produção de energia cai rapidamente e a contração é afetada em pouco tempo.",
    commentary: "Células da glia na área olfatória (A): a detecção dos odores é feita pelos neurônios olfatórios do epitélio olfatório; as células da glia dão suporte no sistema nervoso e não são receptoras de odor.\n\nPneumócitos tipo II (B): são células cúbicas e pequenas que produzem surfactante; a barreira fina por onde ocorre a troca gasosa é formada pelos pneumócitos tipo I, achatados, que revestem a maior parte do alvéolo.\n\nFibroblastos no tubo digestivo (D): produzem colágeno e matriz extracelular; o ritmo elétrico da motilidade intestinal é dado pelas células intersticiais de Cajal e pelo sistema nervoso entérico.",
    tip: "Coração trabalha sem parar: cardiomiócito é lotado de mitocôndrias e vive de metabolismo aeróbico.",
    reference: 'Guyton, A. C., & Hall, J. E. (2016). Tratado de Fisiologia Médica (13ª ed.). Elsevier. Silverthorn, D. U. (2018). Human Physiology: An Integrated Approach (8ª ed.). Pearson.',
    tags: ['histologia', 'fisiologia']
  },
  {
    id: 'tp2024-9',
    module: 'Ciências Básicas',
    text: 'A aterosclerose é uma condição associada às doenças cardiovasculares que possui uma importante razão de prevalência. Esta condição pode estar associada a quadros isquêmicos no coração, cérebro e extremidades, afetando preferencialmente artérias de grande e médio calibre, elásticas ou musculares. Frequentemente estão envolvidas em quadros isquêmicos de coração, cérebro e extremidades. Do ponto de vista fisiopatológico, esta condição pode ser caracterizada como:',
    options: [
      '(A) Processo exclusivamente obstrutivo, devido à deposição lipídica vascular.',
      '(B) Processo proliferativo neoplásico vascular, consequente à deposição lipídica em parede de vasos.',
      '(C) Processo vascular de gênese somente degenerativa, devido à deposição lipídica em vasos.',
      '(D) Processo inflamatório crônico vascular, devido à deposição lipídica em parede vascular.'
    ],
    correctAnswer: 3,
    explanation: "A aterosclerose começa com disfunção do endotélio, que permite a entrada e a retenção de LDL na íntima. A LDL oxidada ativa o endotélio, atrai monócitos que viram macrófagos e células espumosas, e estimula a migração de células musculares lisas, que formam a capa fibrosa da placa.\n\nTodo esse processo é mantido por citocinas e células inflamatórias por anos, por isso é definido como doença inflamatória crônica da parede arterial associada ao depósito de lipídios. A inflamação também explica a instabilidade da placa: a capa fibrosa fina pode romper e causar trombose, que leva ao infarto e ao AVC.",
    commentary: "Processo exclusivamente obstrutivo (A): a obstrução é uma consequência; a doença envolve inflamação, proliferação celular e remodelamento da parede, e a placa pode causar eventos por ruptura mesmo sem obstruir muito.\n\nProcesso neoplásico (B): há proliferação de células musculares lisas, mas reativa, sem caráter de neoplasia.\n\nGênese somente degenerativa (C): reduzir a aterosclerose a degeneração ignora o papel central da inflamação e da resposta imune.",
    tip: "Aterosclerose = inflamação crônica da parede arterial com depósito de LDL; placa instável rompe e trombosa.",
    reference: 'MALTA, DC; PINHEIRO, PC; TEIXEIRA, RA; MACHADO, IE; dos SANTOS, FM; RIBEIRO, RIBEIRO, AL Estimativas do Risco Cardiovascular em Dez Anos na População Brasileira: Um Estudo de Base Populacional Arq Bras Cardiol.; 116(3):423-431, 2021. FILHO, GB; Bogliolo, Patologia, 8 ed, Guanabara-Koogan, Rio de Janeiro, 2011. KUMMAR, V; ABBAS, AK; FAUSTO, N; ASTER, JC; ROBBINS&COTRAN, Bases Patológicas das Doenças, 8ed, Elsevier, Rio de Janeiro, 2010.',
    tags: ['patologia', 'cardiologia']
  },
  {
    id: 'tp2024-10',
    module: 'Ciências Básicas',
    text: 'Uma mulher de 65 anos apresenta-se no consultório médico com queixas de dispneia ao realizar atividades cotidianas, edema nas pernas e fadiga. Ela relata que esses sintomas pioraram nos últimos seis meses. A paciente tem um histórico de hipertensão arterial mal controlada e foi diagnosticada com diabetes mellitus tipo 2 há 10 anos. Durante o exame físico, seus sinais vitais são: Pressão arterial 140/90mmHg; frequência cardíaca 85 bpm; frequência respiratória 20 rpm. Um ecocardiograma mostra uma fração de ejeção de 35% (normal: ≥ 55%). Qual é o principal mecanismo fisiológico responsável pelos sintomas da paciente, considerando a fração de ejeção reduzida?',
    options: [
      '(A) Aumento do volume diastólico final devido à disfunção sistólica.',
      '(B) Aumento da contratilidade miocárdica para compensar a disfunção ventricular.',
      '(C) Diminuição da resistência vascular periférica para melhorar o débito cardíaco.',
      '(D) Aumento da frequência cardíaca para manter a perfusão tecidual.'
    ],
    correctAnswer: 0,
    explanation: "Com fração de ejeção de 35%, o ventrículo esquerdo ejeta pouco sangue em cada batimento (disfunção sistólica). O volume que sobra no fim da sístole se soma ao retorno venoso e aumenta o volume e a pressão diastólica final.\n\nEssa pressão elevada é transmitida para trás: ao átrio esquerdo e às veias pulmonares, causando congestão pulmonar e dispneia, e, com o tempo, ao sistema venoso sistêmico, causando edema de membros inferiores. A fadiga vem do débito cardíaco baixo.",
    commentary: "Aumento da contratilidade (B): na insuficiência cardíaca com fração reduzida a contratilidade está diminuída; o estímulo adrenérgico tenta compensar, mas não é a causa dos sintomas.\n\nDiminuição da resistência periférica (C): ocorre o contrário; a ativação simpática e do sistema renina-angiotensina-aldosterona aumenta a resistência vascular, piorando a pós-carga.\n\nAumento da frequência cardíaca (D): a taquicardia é um mecanismo compensatório (a paciente está com 85 bpm), mas não explica a congestão e o edema.",
    tip: "Fração de ejeção reduzida: sobra sangue no ventrículo, sobe a pressão diastólica e vem a congestão.",
    reference: 'Guyton, A. C., & Hall, J. E. (2016). Tratado de Fisiologia Médica (13ª ed.). Elsevier. Ganong, W. F. (2016). Fisiologia Médica (25ª ed.). McGrawHill Education.',
    tags: ['fisiologia cardiovascular', 'insuficiência cardíaca']
  },
  {
    id: 'tp2024-11',
    module: 'Ciências Básicas',
    text: 'A infecção pelo Papilomavírus humano (HPV) é bastante prevalente, sendo que na maioria das vezes, a infecção cervical pelo HPV é transitória e regride espontaneamente. No pequeno número de casos nos quais a infecção persiste e, especialmente, é causada por um subtipo viral oncogênico, pode ocorrer o desenvolvimento de lesões precursoras, cuja identificação e tratamento adequado previne a progressão para o câncer cervical invasivo. Uma das metodologias empregadas para estas etapas de rastreio e identificação é a Avaliação Colpocitológica Oncótica Cervical. A respeito da emissão de laudo desta metodologia diagnóstica, assinale a alternativa correta:',
    options: [
      '(A) O laudo precisa informar a ausência/presença de lesões intraepiteliais e malignidade e epitélios representados. Demais achados e adequabilidade são opcionais.',
      '(B) O laudo precisa informar a adequabilidade da amostra e ausência/presença de lesões intraepiteliais e malignidade. Opcional a informação da representação dos epitélios e demais achados.',
      '(C) O laudo precisa informar a adequabilidade da amostra, epitélios representados na coleta e ausência/presença de lesões intraepiteliais e malignidade. Demais achados se estiverem presentes.',
      '(D) O laudo precisa informar a adequabilidade da amostra e epitélios representados na coleta. A referência a lesões intraepiteliais e malignidade e demais achados é opcional.'
    ],
    correctAnswer: 2,
    explanation: "A Nomenclatura Brasileira para Laudos Citopatológicos Cervicais, adotada pelo INCA, organiza o laudo em partes. Primeiro, a adequabilidade da amostra (satisfatória ou insatisfatória, com o motivo). Depois, os epitélios representados (escamoso, glandular, metaplásico), que mostram se a junção escamocolunar foi amostrada.\n\nEm seguida vem o diagnóstico: dentro dos limites da normalidade, alterações benignas ou atipias celulares (lesões intraepiteliais e carcinoma). Outros achados, como microrganismos, são descritos quando presentes. A adequabilidade é obrigatória porque uma amostra ruim deve ser repetida.",
    commentary: "Adequabilidade opcional (A): a adequabilidade é item obrigatório; sem ela não se sabe se um resultado negativo é confiável.\n\nRepresentação dos epitélios opcional (B): os epitélios representados fazem parte obrigatória do laudo, pois indicam se a zona de transformação foi coletada.\n\nLesões intraepiteliais opcionais (D): informar presença ou ausência de lesão e malignidade é o objetivo principal do exame, e não pode ser opcional.",
    tip: "Laudo do preventivo: adequabilidade + epitélios representados + diagnóstico (normal, benigno ou atipia).",
    reference: 'BARROS, ALS; LIMA, DNO; AZEVEDO, MD; Micheline de Lucena OLIVEIRA, ML; Caderno de referência 1: Citopatologia Ginecológica/ – Brasília: Ministério da Saúde; Rio de Janeiro: CEPESC, 2012. FILHO, GB; Bogliolo, Patologia, 8 ed, Guanabara-Koogan, Rio de Janeiro, 2011. KUMMAR, V; ABBAS, AK; FAUSTO, N; ASTER, JC; ROBBINS&COTRAN, Bases Patológicas das Doenças, 8ed, Elsevier, Rio de Janeiro, 2010.',
    tags: ['patologia', 'ginecologia']
  },
  {
    id: 'tp2024-12',
    module: 'Ciências Básicas',
    text: 'O entendimento fisiopatológico de inúmeros processos de adoecimento requer o domínio dos mecanismos pelos quais os indivíduos elicitam a sua resposta imune. Para tal, é fundamental que se compreenda a função dos múltiplos órgãos que integram o sistema linfoide. Considerando as características inerentes aos mesmos, assinale a alternativa correta:',
    options: [
      '(A) O órgão linfoide primário é a medula óssea, onde são gerados os linfócitos B e T; os órgãos linfoides secundários são o timo, os linfonodos, o baço, sistema imune cutâneo e sistema imune associado às mucosas.',
      '(B) Os órgãos linfoides primários são a medula óssea, onde são gerados os linfócitos B e T, e o timo, onde os linfócitos T se desenvolvem; os órgãos linfoides secundários são os linfonodos, o baço, o sistema imune cutâneo e o sistema imune mucoso.',
      '(C) Os órgãos linfoides primários são a medula óssea, onde são gerados os linfócitos B e o timo, onde são gerados os linfócitos T e seus precursores; os órgãos linfoides secundários são os linfonodos, o baço, o sistema imune cutâneo e o sistema imune associado às mucosas.',
      '(D) Os órgãos linfoides primários são a medula óssea, o timo e o baço, que produzem e amadurecem os linfócitos; os órgãos linfoides secundários são os linfonodos, o sistema imune cutâneo e o sistema imune mucoso.'
    ],
    correctAnswer: 1,
    explanation: "Os órgãos linfoides primários (ou centrais) são onde os linfócitos nascem e amadurecem: a medula óssea, que gera os precursores de linfócitos B e T e onde os linfócitos B amadurecem, e o timo, para onde os precursores T migram para amadurecer e passar pela seleção que elimina os autorreativos.\n\nOs órgãos linfoides secundários (periféricos) são onde os linfócitos maduros encontram os antígenos e iniciam a resposta adaptativa: linfonodos, baço, sistema imune cutâneo e tecido linfoide associado às mucosas.",
    commentary: "Timo como órgão secundário (A): o timo é órgão primário, pois é onde os linfócitos T amadurecem.\n\nLinfócitos T gerados no timo (C): os precursores dos linfócitos T são gerados na medula óssea; o timo é o local de maturação e seleção, não de origem.\n\nBaço como órgão primário (D): o baço é órgão secundário, local de resposta a antígenos do sangue, e não de produção de linfócitos.",
    tip: "Primários: medula óssea (gera todos e amadurece o B) e timo (amadurece o T). Secundários: onde se encontra o antígeno.",
    reference: 'DELVES, Peter J. ROITT - Fundamentos de Imunologia, 13ª edição Grupo GEN, 2018. E-book. ISBN 9788527733885.',
    tags: ['imunologia', 'histologia']
  },
  {
    id: 'tp2024-13',
    module: 'Ciências Básicas',
    text: 'O sistema imunológico possui células capazes de atravessar os vasos sanguíneos e se dirigirem para o tecido conjuntivo, onde exercem importantes funções de defesa. Assim, com base nessas informações, determine o mecanismo imunológico ao qual se refere o enunciado:',
    options: [
      '(A) Trata-se do mecanismo adaptativo conhecido como imunidade, processo através do qual os linfócitos B passam a secretar proteínas de defesa denominadas IgM e IgG, importantes para ativação do sistema complemento e opsonização de antígenos.',
      '(B) Trata-se do mecanismo adquirido conhecido como inflamação, processo através do qual os neutrófilos e monócitos atravessam o endotélio por um movimento chamado citocina e dirigem-se ao tecido conjuntivo para promover a apoptose de antígenos.',
      '(C) Trata-se do sistema complemento que, ativado a partir de três vias diferentes, tem por função a opsonização de antígenos bacterianos e a formação do CAM (Complexo de Ataque à Membrana).',
      '(D) Trata-se do mecanismo inato conhecido como inflamação, processo através do qual células fagocíticas atravessam o endotélio por diapedese e se dirigem ao tecido conjuntivo para promover a fagocitose de antígenos.'
    ],
    correctAnswer: 3,
    explanation: "O enunciado descreve leucócitos que saem do vaso e chegam ao tecido conjuntivo para defender o organismo: é a inflamação, resposta da imunidade inata. Diante de uma agressão, o endotélio passa a expressar moléculas de adesão; neutrófilos e monócitos rolam, aderem firmemente e atravessam a parede entre as células endoteliais, processo chamado diapedese.\n\nNo tecido, guiados por quimiocinas (quimiotaxia), essas células fagocitam e destroem os microrganismos. Os monócitos se transformam em macrófagos, que também apresentam antígenos e ajudam a acionar a resposta adaptativa.",
    commentary: "Imunidade adaptativa com IgM e IgG (A): a produção de anticorpos pelos plasmócitos não envolve células atravessando o endotélio para fagocitar; é outro braço da resposta.\n\nInflamação como mecanismo adquirido (B): a inflamação é inata; além disso, o movimento através do endotélio é a diapedese (citocinas são mediadores químicos), e os fagócitos fazem fagocitose, não \"apoptose de antígenos\".\n\nSistema complemento (C): é um conjunto de proteínas plasmáticas, e não células que migram para os tecidos, embora participe da opsonização e da formação do complexo de ataque à membrana.",
    tip: "Leucócito saindo do vaso por diapedese para fagocitar = inflamação, resposta inata.",
    reference: 'ABBAS, Abul K.; PILLAI, Shiv; LICHTMAN, Andrew H. Imunologia: Celular e Molecular. 9 ed. Rio De Janeiro: Editora Elsevier Ltda, 2019.',
    tags: ['imunologia', 'patologia']
  },
  {
    id: 'tp2024-14',
    module: 'Ciências Básicas',
    text: 'Paciente masculino, 56 anos, teve admissão com quadro de distensão abdominal aguda e fortes dores no local. Na anamnese, foi informado que ele fez tratamento com clindamicina há 4 meses para tratamento de uma infecção bacteriana. Para o diagnóstico, primeiramente foi realizado cultivo em meio de cultura em tubo de ensio, observando-se aumento da turbidez apenas no fundo do tubo. Com base neste resultado laboratorial, somado ao fato da observação de colite pseudomembranosa, assinale a qual gênero pertence o provável patógeno responsável por acometer o paciente:',
    options: [
      '(A) Gênero Streptococcus',
      '(B) Gênero Bacillus',
      '(C) Gênero Clostridium',
      '(D) Gênero Pseudomonas'
    ],
    correctAnswer: 2,
    explanation: "Em um tubo com meio de cultura, o oxigênio se concentra na superfície e falta no fundo. Crescimento só no fundo indica bactéria anaeróbia obrigatória, que não tolera oxigênio.\n\nSomando o uso prévio de clindamicina, que altera a microbiota intestinal, à colite pseudomembranosa, o agente é o Clostridioides difficile (antigo Clostridium difficile): bacilo gram-positivo, anaeróbio e formador de esporos, que produz as toxinas A e B. O diagnóstico é feito com pesquisa de toxinas ou PCR nas fezes, e o tratamento de escolha é vancomicina oral ou fidaxomicina.",
    commentary: "Streptococcus (A): são anaeróbios facultativos, crescendo ao longo de todo o tubo, e não causam colite pseudomembranosa.\n\nBacillus (B): são em geral aeróbios ou facultativos, crescendo perto da superfície; o B. cereus causa intoxicação alimentar, não colite associada a antibiótico.\n\nPseudomonas (D): é aeróbia estrita e cresceria apenas na superfície do meio, o oposto do observado.",
    tip: "Crescimento só no fundo do tubo = anaeróbio estrito. Antibiótico + colite pseudomembranosa = C. difficile.",
    reference: 'TORTORA, Gerard J.; FUNKE, Berdell R.; CASE, Christine L. Microbiologia. Grupo A, 2017. E-book. ISBN 9788582713549.',
    tags: ['microbiologia', 'gastroenterologia']
  },
  {
    id: 'tp2024-15',
    module: 'Ciências Básicas',
    text: 'A esquistossomose é uma doença intimamente relacionada a iniquidades de acesso aos serviços básicos, e que ainda hoje representa um agravo de elevada prevalência em múltiplos territórios do mundo. A etiologia desta enfermidade parasitária está correlacionada com patógenos do gênero Schistosoma, cujo ciclo de transmissão depende do contato com coleções hídricas contaminadas. A respeito das manifestações clínicas associadas à infecção, assinale a alternativa correta:',
    options: [
      '(A) A hipertensão portal grave, uma complicação da esquistossomose hepatoesplênica, pode levar a hemorragias maciças a partir do rompimento de varizes esofágicas presentes principalmente nos terços médio e distal do esôfago.',
      '(B) A apresentação clínica nas formas crônicas de esquistossomose é variável, oscilando de acordo com a carga parasitária e com a resposta inflamatória desencadeada no organismo pelos amastigotas circulantes.',
      '(C) A hipertensão portal grave, uma complicação da esquistossomose hepatoesplênica, pode levar a hemorragias maciças a partir do rompimento de varizes esofágicas presentes exclusivamente no terço proximal do esôfago.',
      '(D) A apresentação clínica nas formas crônicas de esquistossomose é variável, oscilando de acordo com a carga parasitária e com a resposta inflamatória desencadeada no organismo pelos trofozoítos alojados nas varizes esofágicas.'
    ],
    correctAnswer: 0,
    explanation: "Na forma hepatoesplênica da esquistossomose mansônica, os ovos de Schistosoma mansoni presos nos ramos da veia porta provocam granulomas e fibrose periportal (fibrose de Symmers). Isso cria uma hipertensão portal pré-sinusoidal, com a função do fígado em geral preservada.\n\nO sangue procura caminhos alternativos para chegar à circulação sistêmica, e as varizes se formam principalmente no terço distal do esôfago e no fundo gástrico, onde há comunicação entre a veia gástrica esquerda e as veias esofágicas. A ruptura dessas varizes causa hemorragia digestiva alta volumosa, a complicação mais grave dessa forma.",
    commentary: "Amastigotas circulantes (B): amastigota é forma de protozoários como Leishmania e Trypanosoma cruzi; o Schistosoma é um helminto, e a lesão crônica vem da reação aos ovos.\n\nVarizes no terço proximal (C): as varizes da hipertensão portal ficam sobretudo no esôfago distal e no estômago, não exclusivamente no terço proximal.\n\nTrofozoítos nas varizes (D): trofozoíto também é forma de protozoário; o Schistosoma vive como verme adulto nas veias mesentéricas, não nas varizes esofágicas.",
    tip: "Esquistossomose hepatoesplênica: fibrose periportal, hipertensão portal pré-sinusoidal e varizes no esôfago distal.",
    reference: 'FERREIRA, M. U. Parasitologia Contemporânea. Grupo GEN, 2020. E-book. ISBN 9788527737166. Disponível em: https://integrada.minhabiblioteca.com.br/#/books/9788527737 166/',
    tags: ['parasitologia', 'hepatologia']
  },
  {
    id: 'tp2024-16',
    module: 'Ciências Básicas',
    text: 'O ácido acetilsalicílico, popularmente conhecido como AAS, é um fármaco pertencente à classe dos anti-inflamatórios não esteroidais (AINES) com ação analgésica, antipirética e antiinflamatória, além de apresentar efeito antiagregante plaquetário, este último decorrente da acetilação irreversível da enzima ciclooxigenase, responsável pela produção de tromboxano A2 nas plaquetas. Com base nisto, assinale a alternativa que corresponde corretamente ao tipo de interação fármaco-receptor envolvida neste efeito antiagregante:',
    options: [
      '(A) Agonista inverso',
      '(B) Antagonismo competitivo',
      '(C) Agonista parcial',
      '(D) Antagonismo não-competitivo'
    ],
    correctAnswer: 3,
    explanation: "O AAS acetila de forma irreversível um resíduo de serina da ciclooxigenase 1 das plaquetas, bloqueando a produção de tromboxano A2. Como a plaqueta não tem núcleo para fabricar nova enzima, o efeito dura toda a vida dela, cerca de 7 a 10 dias.\n\nEm farmacologia, um bloqueio irreversível como esse não é superado por mais substrato ou agonista: o efeito máximo possível cai. Por isso é classificado como antagonismo não competitivo (irreversível), diferente do competitivo, em que aumentar a concentração do agonista restaura a resposta.",
    commentary: "Agonista inverso (A): é o fármaco que se liga a um receptor com atividade basal e produz efeito oposto ao do agonista; não descreve a inativação de uma enzima.\n\nAntagonismo competitivo (B): é reversível e pode ser superado por mais agonista, deslocando a curva sem reduzir o efeito máximo; a ligação do AAS não se desfaz.\n\nAgonista parcial (C): ativa o receptor, mas sem atingir o efeito máximo; o AAS não ativa, ele inativa a enzima.",
    tip: "AAS acetila a COX-1 para sempre: antagonismo não competitivo (irreversível), efeito pela vida da plaqueta.",
    reference: 'Rang, H.P; Dale, M.M. (2016). Farmacologia (8a ed.). Elsevier. Golan, D.E.; Tashjian, A.H.; Armstrong, E.J.; Armstrong, A.W. (2014). Princípios de Farmacologia: A Base Fisiopatológica da Farmacoterapia. (3ª ed.) Guanabara Koogan.',
    tags: ['farmacologia', 'hematologia']
  },
  {
    id: 'tp2024-17',
    module: 'Ciências Básicas',
    text: 'Em uma situação de suspeita de nefrose isquêmica, o exame histopatológico de rim revelou alterações caracterizadas como lesões difusas abrangendo região cortical, caracterizada pelo aumento de acidofilia, perda de limites celulares e preservação do arcabouço tubular, preferencialmente em túbulo contorcido proximal. Em função deste achado, assinale a alternativa que caracteriza adequadamente o padrão de lesão descrito:',
    options: [
      '(A) Lesão irreversível do tipo degeneração vacuolar.',
      '(B) Lesão irreversível do tipo necrose de coagulação.',
      '(C) Lesão reversível do tipo necrose de coagulação.',
      '(D) Lesão irreversível do tipo necrose liquefativa.'
    ],
    correctAnswer: 1,
    explanation: "Citoplasma mais eosinofílico (acidófilo), limites celulares apagados e contorno dos túbulos preservado é a descrição clássica da necrose de coagulação. A isquemia desnatura as proteínas estruturais e as enzimas, de modo que a célula morre, mas a arquitetura do tecido permanece por alguns dias.\n\nOs túbulos contorcidos proximais são os mais atingidos por terem alto consumo de oxigênio. Toda necrose é lesão irreversível; a necrose de coagulação é o padrão típico do infarto em órgãos sólidos como rim e coração (o cérebro é a exceção, com liquefação).",
    commentary: "Degeneração vacuolar (A): é uma lesão reversível, com acúmulo de água no citoplasma (tumefação celular), sem perda dos limites celulares.\n\nNecrose de coagulação reversível (C): necrose é, por definição, morte celular e, portanto, irreversível.\n\nNecrose liquefativa (D): ocorre por digestão enzimática, com perda total da arquitetura; é típica de infecções bacterianas e do infarto cerebral.",
    tip: "Acidofilia + células sem limites + arquitetura preservada = necrose de coagulação (isquemia de órgão sólido).",
    reference: 'FILHO, GB; Bogliolo, Patologia, 8 ed, Guanabara-Koogan, Rio de Janeiro, 2011. KUMMAR, V; ABBAS, AK; FAUSTO, N; ASTER, JC; ROBBINS&COTRAN, Bases Patológicas das Doenças, 8ed, Elsevier, Rio de Janeiro, 2010.',
    tags: ['patologia', 'fisiopatologia']
  },
  {
    id: 'tp2024-18',
    module: 'Ciências Básicas',
    text: 'O carcinoma hepatocelular (CHC) é responsável por mais de 90% das neoplasias malignas hepáticas primárias. Nos países ocidentais, incluindo o Brasil, 70-80% dos casos de carcinoma hepatocelular estão associados à cirrose secundária, decorrente da infecção crônica pelos vírus B. A respeito desta relação causal, podemos afirmar que a hepatite crônica:',
    options: [
      '(A) Se caracteriza por eventos cirróticos (regeneração e fibrose) e determina potencial vulnerabilidade à mutação gênica, pois envolve constante proliferação em associação à infecção viral.',
      '(B) Se caracteriza por eventos cirróticos (regeneração e fibrose) e determina potencial vulnerabilidade à mutação gênica, pois não envolve constante proliferação em associação à infecção viral.',
      '(C) Não se caracteriza por eventos cirróticos que associam a regeneração e fibrose, por isso não determina potencial vulnerabilidade à mutação gênica em associação à infecção viral.',
      '(D) Se caracteriza por eventos cirróticos que associam a angiogênese e fibrose, mas nunca determina potencial vulnerabilidade à mutação gênica, pois não envolve constante proliferação em associação à infecção viral.'
    ],
    correctAnswer: 0,
    explanation: "A hepatite crônica viral mantém uma agressão contínua aos hepatócitos. O fígado responde com regeneração, e os ciclos de morte e reparo produzem fibrose e nódulos de regeneração, que formam a cirrose.\n\nCada divisão celular é uma oportunidade de erro na replicação do DNA. Com a proliferação constante, somada ao estresse oxidativo da inflamação, as mutações se acumulam e surgem displasia e carcinoma hepatocelular. No vírus B há ainda um efeito direto: o DNA viral pode se integrar ao genoma do hepatócito, e por isso o CHC pode aparecer mesmo sem cirrose.",
    commentary: "Sem proliferação constante (B): a vulnerabilidade a mutações decorre justamente da proliferação contínua; a alternativa nega o mecanismo.\n\nSem eventos cirróticos (C): a hepatite crônica pode evoluir com regeneração e fibrose, e é exatamente isso que aumenta o risco de câncer.\n\nNunca determina vulnerabilidade (D): a hepatite crônica viral é um dos principais fatores de risco para CHC, pela proliferação constante e pelos efeitos do vírus.",
    tip: "Hepatite crônica: lesão contínua, regeneração e fibrose; muita divisão celular gera mutação e CHC.",
    reference: 'Marcio F. CHEDID, MF Carcinoma Hepatocelular: Diagnóstico e Manejo Cirúrgico Arq Bras Cir Dig Artigo de Revisão;30(4):272-278, 2017. FILHO, GB; Bogliolo, Patologia, 8 ed, Guanabara-Koogan, Rio de Janeiro, 2011. KUMMAR, V; ABBAS, AK; FAUSTO, N; ASTER, JC; ROBBINS&COTRAN, Bases Patológicas das Doenças, 8ed, Elsevier, Rio de Janeiro, 2010.',
    tags: ['oncologia', 'hepatologia']
  },
  {
    id: 'tp2024-19',
    module: 'Ciências Básicas',
    text: 'Considere que um dado paciente foi diagnosticado com uma infecção viral crônica e sua resposta imune adaptativa está sendo avaliada. Durante a análise, foi observado um aumento significativo na atividade das células T citotóxicas, que apresentam alta especificidade para os antígenos virais. Qual dos seguintes mecanismos é mais provavelmente responsável pela ativação inicial dessas células T citotóxicas na infecção viral?',
    options: [
      '(A) Produção de interferon tipo I pelas células infectadas para recrutar células T reguladoras.',
      '(B) Ativação de células B e subsequente produção de anticorpos específicos contra o vírus.',
      '(C) Apresentação de antígenos virais pelas células dendríticas no contexto de moléculas MHC classe I.',
      '(D) Ativação direta de macrófagos que fagocitam o vírus e apresentam antígenos no contexto de moléculas MHC classe II.'
    ],
    correctAnswer: 2,
    explanation: "Os linfócitos T CD8+ (citotóxicos) reconhecem peptídeos apresentados em moléculas de MHC classe I. A ativação inicial do linfócito T virgem acontece no linfonodo, e quem consegue fazê-la é a célula dendrítica, a apresentadora profissional, que oferece o antígeno e os sinais coestimulatórios necessários.\n\nPara isso, a célula dendrítica pode ser infectada diretamente ou capturar restos de células infectadas e levar esses antígenos para a via do MHC I (apresentação cruzada). Depois de ativados, os CD8+ se multiplicam e matam qualquer célula infectada que exponha o peptídeo viral no MHC I.",
    commentary: "Interferon tipo I para recrutar células T reguladoras (A): o interferon tipo I tem ação antiviral e estimula a resposta, mas não ativa os CD8+ por recrutamento de reguladoras, que, ao contrário, frenam a resposta.\n\nAtivação de células B e anticorpos (B): faz parte da resposta humoral; os anticorpos não ativam diretamente os linfócitos T citotóxicos.\n\nMacrófagos com MHC classe II (D): o MHC II apresenta antígenos para os linfócitos T CD4+ (auxiliares), não para os CD8+.",
    tip: "CD8 lê MHC I, CD4 lê MHC II. Quem ativa o T virgem é a célula dendrítica.",
    reference: 'DELVES, Peter J. ROITT - Fundamentos de Imunologia, 13ª edição Grupo GEN, 2018. E-book. ISBN 9788527733885.',
    tags: ['imunologia', 'biologia celular']
  },
  {
    id: 'tp2024-20',
    module: 'Ciências Básicas',
    text: 'O Parkinson é uma doença neurodegenerativa caracterizada pela perda progressiva de neurônios dopaminérgicos na substância negra do cérebro. Estudos recentes têm mostrado que a disfunção mitocondrial desempenha um papel crítico na patogênese do Parkinson. As proteínas PINK1 e Parkin são fundamentais para a regulação da qualidade mitocondrial, participando de um processo chamado mitofagia, que é a degradação seletiva de mitocôndrias danificadas. Qual das alternativas abaixo descreve corretamente a relação entre as proteínas PINK1, Parkin, a doença de Parkinson e o metabolismo celular?',
    options: [
      '(A) A PINK1 e a Parkin atuam na regulação do ciclo celular e na replicação do DNA, processos que são diretamente implicados na disfunção mitocondrial observada na doença de Parkinson.',
      '(B) A PINK1 se acumula na membrana externa das mitocôndrias danificadas, recrutando a Parkin, que, por sua vez, marca essas mitocôndrias para degradação através da mitofagia, um processo crucial para a manutenção da qualidade mitocondrial e prevenção da doença de Parkinson.',
      '(C) As proteínas PINK1 e Parkin são envolvidas na biossíntese de ATP nas mitocôndrias e a deficiência na produção de ATP é a principal causa da neurodegeneração observada na doença de Parkinson.',
      '(D) A principal função da PINK1 é atuar como um receptor mitocondrial de cálcio, enquanto a Parkin está envolvida na sinalização apoptótica, ambos processos fundamentais na neurodegeneração associada à doença de Parkinson.'
    ],
    correctAnswer: 1,
    explanation: "Em uma mitocôndria saudável, a PINK1 é importada para a membrana interna e degradada. Quando a mitocôndria está danificada e perde o potencial de membrana, a PINK1 não consegue entrar e se acumula na membrana externa, onde é ativada.\n\nA PINK1 ativa recruta a Parkin, uma ubiquitina ligase, que coloca ubiquitina nas proteínas da membrana externa. Essa marcação sinaliza para o autofagossomo englobar a mitocôndria, que é degradada no lisossomo: é a mitofagia. Mutações em PINK1 e PRKN causam formas familiares de doença de Parkinson de início precoce, pelo acúmulo de mitocôndrias defeituosas nos neurônios dopaminérgicos.",
    commentary: "Ciclo celular e replicação do DNA (A): PINK1 e Parkin atuam no controle de qualidade mitocondrial, não na regulação do ciclo celular.\n\nBiossíntese de ATP (C): elas não produzem ATP; a queda de energia é consequência do acúmulo de mitocôndrias doentes que deixaram de ser removidas.\n\nReceptor de cálcio e sinalização apoptótica (D): não são as funções principais dessas proteínas; a PINK1 é uma quinase sensora de dano, e a Parkin é uma ubiquitina ligase.",
    tip: "PINK1 acumula na mitocôndria danificada e chama a Parkin, que marca para mitofagia.",
    reference: 'Alberts, B., Johnson, A., Lewis, J., Morgan, D., Raff, M., Roberts, K., & Walter, P. (2015). Biologia Molecular da Célula (6ª ed.). Artmed. Youle, R. J., & Narendra, D. P. (2011). Mechanisms of mitophagy. Nature Reviews Molecular Cell Biology, 12(1), 9- 14. Exner, N., Lutz, A. K., Haass, C., & Winklhofer, K. F. (2012). Mitochondrial dysfunction in Parkinson\'s disease: molecular mechanisms and pathophysiological consequences. The EMBO Journal, 31(14), 3038-3062.',
    tags: ['neurologia', 'biologia celular']
  },
  {
    id: 'tp2023-1',
    module: 'Ciências Básicas',
    text: 'Paciente do sexo feminino, 22 anos, sem histórico de internação hospitalar recente ou outra queixa médica, procura pronto atendimento com dor ao urinar. Diz que, apesar da vontade de urinar, quando vai ao banheiro não consegue urinar direito e de vez em quando acaba “vazando” um pouco de urina na roupa. Diz também que a urina está um pouco mais turva e com cheiro forte. Analisando o caso clínico, o microrganismo mais provável de causar este quadro, sua classificação microbiológica e o exame laboratorial que pode identificar o microrganismo em nível de gênero e espécie são, respectivamente:',
    options: [
      '(A) Escherichia coli, enterobactéria e urocultura.',
      '(B) Staphylococcus saprophyticus, coco gram positivo e urocultura.',
      '(C) Klebsiella pneumoniae, enterobactéria e urocultura.',
      '(D) Streptococcus agalactiae, coco gram positivo e exame bacterioscópico de urina.'
    ],
    correctAnswer: 0,
    explanation: "Mulher jovem, sem internação recente, com disúria, urgência, pequenas perdas de urina e urina turva e com odor forte: quadro de cistite adquirida na comunidade.\n\nNessas infecções, o agente predominante, com folga, é a Escherichia coli, um bacilo gram-negativo da família das enterobactérias, que vem da flora intestinal e ascende pela uretra. O exame que identifica o microrganismo até gênero e espécie, e ainda permite o antibiograma, é a urocultura.",
    commentary: "Staphylococcus saprophyticus (B): é de fato coco gram-positivo e causa cistite em mulheres jovens sexualmente ativas, mas é o segundo agente, bem menos frequente que a E. coli.\n\nKlebsiella pneumoniae (C): é enterobactéria e pode causar ITU, porém é mais comum em infecções complicadas ou relacionadas à assistência à saúde.\n\nStreptococcus agalactiae e bacterioscopia (D): o estreptococo do grupo B importa sobretudo em gestantes e recém-nascidos; além disso, a bacterioscopia (Gram) mostra só a forma e a coloração da bactéria, sem definir a espécie.",
    tip: "ITU comunitária: E. coli (enterobactéria). Gênero e espécie com antibiograma = urocultura.",
    reference: 'Lo, DS et al. Infecção urinária comunitária: etiologia segundo idade e sexo. Braz. J. Nephrol. 35 (2) • Jun 2013 • https://doi.org/10.5935/0101-2800.20130016',
    tags: ['microbiologia', 'infectologia']
  },
  {
    id: 'tp2023-2',
    module: 'Ciências Básicas',
    text: 'A produção de ATP e a disponibilidade de oxigênio desempenham papéis essenciais no funcionamento energético do organismo. O ATP é a molécula responsável pelo armazenamento e liberação de energia nas células, enquanto o oxigênio desempenha um papel vital na produção eficiente desse ATP. A falta de oxigênio leva à lesão celular devido a:',
    options: [
      '(A) Ativação da apoptose pela via intrínseca, devido a lesão de membrana mitocondrial e liberação de citocromo-c.',
      '(B) Maior acúmulo de potássio extracelular com consequente edema celular, que pode ser chamado de degeneração hidrofílica.',
      '(C) Maior atividade da bomba Na+/K+ ATPase, com diminuição do sódio intracelular e diminuição da célula, que pode ocasionar apoptose.',
      '(D) Menor atividade da bomba Na+/K+ ATPase, com acúmulo de sódio intracelular e edema celular, que pode ser chamado de degeneração hidrópica.'
    ],
    correctAnswer: 3,
    explanation: "Sem oxigênio, a fosforilação oxidativa mitocondrial para e a produção de ATP cai. A bomba Na+/K+ ATPase depende de ATP, então perde atividade: o sódio se acumula dentro da célula, o potássio sai e a água entra junto com o sódio.\n\nO resultado é a tumefação celular, chamada degeneração hidrópica, a primeira e ainda reversível manifestação da lesão hipóxica. Paralelamente, a célula recorre à glicólise anaeróbia, acumula lactato e acidifica o citoplasma. Se a hipóxia persistir, a lesão pode evoluir para necrose.",
    commentary: "Apoptose pela via intrínseca (A): a via mitocondrial pode ser ativada em algumas situações, mas o mecanismo central e inicial da lesão hipóxica é a queda de ATP com falência da bomba de sódio; isquemia intensa costuma levar à necrose.\n\nAcúmulo de potássio extracelular e degeneração hidrofílica (B): o edema decorre da entrada de sódio e água, e o termo correto é degeneração hidrópica.\n\nMaior atividade da bomba e redução celular (C): descreve o contrário do que acontece; sem ATP a bomba trabalha menos, e a célula incha em vez de diminuir.",
    tip: "Hipóxia: menos ATP, bomba de Na+/K+ falha, sódio e água entram = degeneração hidrópica (reversível).",
    reference: 'KUMAR, Vinay; ASTER, Jon C.; ABBAS, Abul K. Robbins &Cotran Patologia: bases patológicas das doenças. 9 ed. Rio de Janeiro: Guanabara Koogan, 2021, 1421 p.',
    tags: ['fisiologia', 'patologia celular']
  },
  {
    id: 'tp2023-3',
    module: 'Ciências Básicas',
    text: 'A integração entre os metabolismos de carboidratos, lipídeos e proteínas é essencial para a homeostase do organismo humano. Com relação à integração entre os metabolismos de carboidratos, lipídeos e proteínas, é correto afirmar que:',
    options: [
      '(A) No jejum, ocorre a lipólise no tecido adiposo, que aumenta as concentrações de ácidos graxos livres no sangue, sendo que os mesmos podem ser utilizados na síntese de glicose no fígado.',
      '(B) Durante o período de jejum prolongado, os aminoácidos resultantes da proteólise são utilizados para síntese de glicose no fígado, processo conhecido como gliconeogênese.',
      '(C) A insulina é um hormônio que facilita a saída de glicose nas células musculares e adipócitos e estimula a síntese de proteínas, contribuindo para o anabolismo.',
      '(D) A cetose é um estado metabólico em que ocorre um aumento de glicose no sangue, geralmente associado a uma dieta rica em carboidratos e baixa em gorduras e proteínas.'
    ],
    correctAnswer: 1,
    explanation: "No jejum prolongado, depois que o glicogênio hepático se esgota, o fígado precisa fabricar glicose para manter a glicemia, sobretudo para cérebro e hemácias. Uma das principais fontes de carbono para isso são os aminoácidos liberados pela quebra de proteínas musculares (alanina e glutamina, em especial), convertidos em glicose pela gliconeogênese.\n\nTambém servem de substrato o lactato e o glicerol dos triglicerídeos. Com o tempo, o aumento dos corpos cetônicos reduz a necessidade de glicose pelo cérebro e poupa proteína muscular.",
    commentary: "Ácidos graxos gerando glicose (A): ácidos graxos de cadeia par são oxidados até acetil-CoA, que não pode ser convertido em glicose porque a reação da piruvato desidrogenase é irreversível; só o glicerol dos triglicerídeos é gliconeogênico. Os ácidos graxos servem como fonte de energia.\n\nInsulina facilitando a saída de glicose (C): a insulina faz o contrário, promovendo a entrada de glicose em músculo e tecido adiposo (pelo GLUT4); a parte sobre síntese proteica e anabolismo está certa.\n\nCetose com glicose alta e dieta rica em carboidratos (D): cetose é o aumento de corpos cetônicos quando há pouca glicose ou pouca insulina, típica do jejum e de dietas pobres em carboidratos.",
    tip: "Jejum prolongado: proteína muscular vira aminoácido, que vira glicose no fígado (gliconeogênese). Ácido graxo não vira glicose.",
    reference: 'Marzzoco, Anita; Torres, Bayardo Baptista, Bioquímica básica. 4.ed. Editora(s) Guanabara Koogan, 2015 [Disponível na rede de bibliotecas da Unoeste e na BV Minha Biblioteca], capítulo: 16, pg.206-208.',
    tags: ['bioquímica', 'metabolismo']
  },
  {
    id: 'tp2023-4',
    module: 'Ciências Básicas',
    text: 'Os glóbulos vermelhos são componentes do tecido sanguíneo relacionados com o transporte de oxigênio, que em baixos níveis podem indicar a presença de anemia no paciente. Sabemos que existem diversos tipos de anemia, tais como a falciforme, a ferropriva e as talassemias. Sobre a anemia ferropriva, marque a alternativa correta:',
    options: [
      '(A) Tem causa genética, e por isso não pode ser tratada com o aumento de ferro na dieta.',
      '(B) É relacionada com a produção incorreta de cadeias de hemoglobina e pode ser tratada com o aumento de ferro na alimentação.',
      '(C) Pode ser relacionada com grande perda de sangue, como menstruações que permanecem por um grande período.',
      '(D) Caracteriza-se principalmente pela presença de hemácias com o formato de foice.'
    ],
    correctAnswer: 2,
    explanation: "A anemia ferropriva é adquirida: resulta de perda crônica de sangue, ingestão ou absorção insuficiente de ferro ou aumento da demanda (gestação, crescimento). Na mulher em idade fértil, o sangramento menstrual aumentado ou prolongado é uma das causas mais comuns.\n\nÉ uma anemia microcítica e hipocrômica, com ferritina baixa. O tratamento é repor ferro e corrigir a causa. Em homens e em mulheres após a menopausa, deve-se investigar perda pelo trato gastrointestinal.",
    commentary: "Causa genética, sem resposta ao ferro (A): a ferropriva não é hereditária e responde justamente à reposição de ferro.\n\nProdução incorreta de cadeias de hemoglobina (B): esse defeito define as talassemias; nelas, dar ferro sem deficiência comprovada não ajuda e pode causar sobrecarga.\n\nHemácias em foice (D): são características da anemia falciforme (hemoglobina S), não da ferropriva.",
    tip: "Ferropriva = perda de sangue ou falta de ferro. Na mulher jovem, pense em menstruação aumentada; em homem, no intestino.",
    reference: 'Zago, M. A.; Falcão, R. P.; Pasquini, R. Hematologia: fundamentos e prática. Rio de Janeiro: Atheneu, 2004. Bain BJ, Gupta R. A – Z ofHaematology. BlackwellPubli., London, 2003.',
    tags: ['hematologia', 'nutrologia']
  },
  {
    id: 'tp2023-5',
    module: 'Ciências Básicas',
    text: 'Em uma angiotomografia observou-se obstrução da artéria mesentérica inferior devido a aterosclerose, porém o paciente era assintomático. A área irrigada por esta artéria será suprida pela irrigação colateral entre as artérias:',
    options: [
      '(A) Ileocólica e cólica média',
      '(B) Cólica média e cólica esquerda',
      '(C) Sigmoidea e retal superior',
      '(D) Cólica direita e cólica média'
    ],
    correctAnswer: 1,
    explanation: "A artéria mesentérica superior irriga o intestino até cerca dos dois terços proximais do cólon transverso, e a mesentérica inferior irriga o restante do cólon até a porção superior do reto. As duas se comunicam no cólon transverso e no ângulo esplênico, pela anastomose entre a artéria cólica média (ramo da mesentérica superior) e a cólica esquerda (ramo da mesentérica inferior), por meio da artéria marginal (de Drummond) e do arco de Riolan.\n\nQuando a mesentérica inferior se oclui lentamente por aterosclerose, o sangue segue da mesentérica superior pela cólica média até a cólica esquerda e preenche o território da mesentérica inferior, o que explica o paciente assintomático. O reto ainda recebe sangue das artérias retais média e inferior, ramos da ilíaca interna.",
    commentary: "Ileocólica e cólica média (A): as duas são ramos da mesentérica superior; a comunicação entre elas não leva sangue ao território da mesentérica inferior.\n\nSigmoidea e retal superior (C): ambas são ramos da própria mesentérica inferior, e ficariam sem fluxo com a obstrução de sua origem.\n\nCólica direita e cólica média (D): novamente, dois ramos da mesentérica superior, sem relação com a irrigação colateral do território da inferior.",
    tip: "Ponte entre mesentérica superior e inferior: cólica média com cólica esquerda (artéria marginal e arco de Riolan).",
    reference: 'Keith L.; DALLEY, Arthur F.; AGUR, Anne M R. Anatomia Orientada para Clínica. Rio de Janeiro: Guanabara Koogan (Grupo GEN), 2022. E-book. ISBN 9788527734608. Disponível em: https://integrada.minhabiblioteca.com.br/#/books/9788527734608/. Acesso em: 25 jul. 2023.',
    tags: ['anatomia', 'cirurgia vascular']
  },
  {
    id: 'tp2023-6',
    module: 'Ciências Básicas',
    text: 'A pneumonia adquirida na comunidade (PAC) é definida como uma infecção aguda do parênquima pulmonar, que o indivíduo adquire por transmissão na comunidade, distinguindo-a daquela adquirida no hospital. O tratamento proposto pelas diretrizes mais recentes para tratamento de PAC com necessidade de internação (enfermaria), elaboradas pela Sociedade Brasileira de Pneumologia e Tisiologia, é apresentado a seguir. Com relação às drogas antimicrobianas propostas, pode se afirmar que:',
    image: '/images/tp2023-6.webp',
    options: [
      '(A) As cefalosporinas de terceira geração (ceftriaxona e cefotaxima) têm característica teratogênica, estando relacionadas a malformações neurológicas embrionárias e devem ser evitadas na gestação.',
      '(B) A associação entre ampicilina/sulbactam apresenta ótima cobertura para germes Gram negativos hospitalares, tais como o Pseudomonas aeruginosa.',
      '(C) As fluoroquinolonas respiratórias (levofloxacino e moxifloxacino) tem biodisponibilidade sérica ampla, com possibilidade de aplicação única diária e boa penetração em barreira hematoencefálica.',
      '(D) A ceftriaxona tem biodisponibilidade que permite aplicação única diária e não necessita de ajuste de dosagem em casos de insuficiência renal.'
    ],
    correctAnswer: 3,
    explanation: "A ceftriaxona, cefalosporina de 3ª geração usada na PAC internada (associada a um macrolídeo), tem meia-vida longa, o que permite uma dose ao dia. Sua eliminação é mista, renal e biliar: quando o rim falha, a via biliar compensa, e por isso não é preciso ajustar a dose na insuficiência renal isolada.\n\nEssa combinação de posologia simples, boa cobertura para pneumococo e Haemophilus e segurança na disfunção renal faz dela uma das bases do tratamento da PAC em enfermaria.",
    commentary: "Cefalosporinas de 3ª geração teratogênicas (A): não há efeito teratogênico estabelecido; as cefalosporinas estão entre os antibióticos considerados seguros na gestação.\n\nAmpicilina/sulbactam contra gram-negativos hospitalares (B): a associação cobre bem germes comunitários, mas não cobre Pseudomonas aeruginosa nem gram-negativos multirresistentes hospitalares.\n\nFluoroquinolonas com boa penetração na barreira hematoencefálica (C): levofloxacino e moxifloxacino de fato têm ótima biodisponibilidade oral e dose única diária; o ponto incorreto da afirmação é a penetração no sistema nervoso central, pois não são antibióticos de escolha para infecções do SNC.",
    tip: "Ceftriaxona: uma dose ao dia e eliminação renal e biliar, então não ajusta na insuficiência renal.",
    reference: 'As Bases farmacológicas da terapêutica de Goodman & Gilman. 13. ed. Porto Alegre: Artmed, 2019. ISBN 9788580556148.',
    tags: ['farmacologia', 'pneumologia']
  },
  {
    id: 'tp2023-7',
    module: 'Ciências Básicas',
    text: 'Necessidades energéticas celulares devem ser atendidas, apesar das flutuações na disponibilidade de nutrientes que o corpo experimenta diariamente. Alterações em fatores que regulam o metabolismo energético estão relacionadas ao envelhecimento e condições patológicas bem conhecidas, como obesidade, diabetes tipo 2 e síndrome metabólica, e alguns tipos de câncer. Considerando a regulação nos mecanismos de captação e utilização da glicose no contexto saúde e doença, assinale a alternativa correta:',
    options: [
      '(A) A disfunção mitocondrial no envelhecimento tem efeitos antiapoptóticos.',
      '(B) O que regula a taxa de captação de glicose é principalmente a concentração de insulina no sangue.',
      '(C) Células tumorais alteram a dinâmica mitocondrial, favorecendo a fusão de mitocôndrias.',
      '(D) Estados prolongados de hiperglicemia no diabetes tipo 2 promovem a redução da fosforilação oxidativa mitocondrial.'
    ],
    correctAnswer: 0,
    explanation: "Células senescentes param de se dividir de forma irreversível e passam a secretar mediadores inflamatórios (o fenótipo secretor associado à senescência, SASP). A disfunção mitocondrial, frequente no envelhecimento, participa da manutenção desse estado e também deixa essas células resistentes à apoptose.\n\nEsse é o ponto da alternativa correta: em vez de morrerem, as células senescentes se acumulam nos tecidos e mantêm um ambiente inflamatório crônico, que contribui para doenças ligadas à idade.",
    commentary: "Insulina como principal regulador da captação de glicose (B): a velocidade com que as células captam glicose, pelos transportadores GLUT, é ditada sobretudo pela glicemia; a insulina modula essa captação sobretudo em músculo e tecido adiposo (GLUT4).\n\nFusão mitocondrial em tumores (C): na maioria dos cânceres predomina a fissão mitocondrial, que favorece proliferação, metástase e resistência a quimioterápicos.\n\nRedução da fosforilação oxidativa pela hiperglicemia no diabetes tipo 2 (D): a hiperglicemia crônica sobrecarrega a mitocôndria de substrato e aumenta a geração de espécies reativas de oxigênio; o gabarito considera a afirmação incorreta, mas o tema é controverso.",
    tip: "Mitocôndria disfuncional no envelhecimento ajuda a célula senescente a escapar da apoptose (efeito antiapoptótico).",
    reference: 'doi: 10.15252/embr.201948395; https://doi.org/10.1016/j.redox.2017.01.013; Am J Cancer Res. 2020; 10(5): 1278–1293.',
    tags: ['biologia celular', 'metabolismo']
  },
  {
    id: 'tp2023-8',
    module: 'Ciências Básicas',
    text: 'Uma mulher de 55 de anos queixa-se de dificuldade para engolir alguns tipos de alimentos nos últimos meses. Refere que teve problemas de azia e queimação há muitos anos e já tentou diferentes abordagens terapêuticas, como elevação da cabeceira da cama e uso de inibidores de bomba de prótons. Realizada uma biópsia endoscópica para investigação, esta revelou epitélio colunar com células caliciformes na mucosa esofágica, sem displasia associada. Uma resposta adaptativa semelhante a esta é encontrada também na seguinte situação:',
    image: '/images/tp2023-8.webp',
    options: [
      '(A) Nos miocardiócitos em pacientes com hipertensão arterial sistêmica.',
      '(B) Nas células escamosas do colo uterino em pacientes com infecção por HPV.',
      '(C) No epitélio da mucosa brônquica em fumantes de longa data.',
      '(D) Nos miócitos esqueléticos após longo tempo de imobilidade.'
    ],
    correctAnswer: 2,
    explanation: "Epitélio colunar com células caliciformes no lugar do epitélio escamoso do esôfago, após anos de refluxo, é o esôfago de Barrett: uma metaplasia intestinal. Metaplasia é a troca de um tipo de epitélio maduro por outro, mais resistente ao agressor persistente — no caso, o ácido e a bile refluídos.\n\nO exemplo paralelo é o brônquio do fumante crônico: o epitélio colunar ciliado é substituído por epitélio escamoso, que suporta melhor a fumaça, mas perde a limpeza mucociliar. Nos dois casos, a metaplasia é potencialmente reversível, porém, se o estímulo continuar, pode evoluir para displasia e câncer (adenocarcinoma de esôfago e carcinoma epidermoide de pulmão).",
    commentary: "Miocardiócitos na hipertensão (A): o aumento da sobrecarga leva a hipertrofia, ou seja, aumento do tamanho das células, sem troca de tipo celular.\n\nColo uterino com HPV (B): a infecção pelo HPV causa alterações virais (coilocitose) e displasia (lesões intraepiteliais), que não são adaptação, e sim lesão pré-neoplásica.\n\nMúsculo esquelético após imobilidade (D): a perda de estímulo leva à atrofia, com redução do tamanho das fibras.",
    tip: "Barrett e brônquio do fumante: os dois são metaplasia (troca de epitélio) e podem evoluir para displasia.",
    reference: 'Patologia, Bogliolo-9ª Edição. 2016.',
    tags: ['patologia', 'gastroenterologia']
  },
  {
    id: 'tp2023-9',
    module: 'Ciências Básicas',
    text: 'A paciente mencionada no texto (rainha da maisena) tem deficiência genética de uma proteína envolvida no metabolismo do glicogênio, a enzima fosforilase quinase hepática. Considerando a deficiência desta enzima, a principal finalidade terapêutica do consumo de amido com alta frequência pela paciente é:',
    options: [
      '(A) Garantir a manutenção da glicemia.',
      '(B) Promover a síntese de glicogênio muscular.',
      '(C) Estimular a quebra do glicogênio hepático.',
      '(D) Inibir a síntese de glicogênio hepático.'
    ],
    correctAnswer: 0,
    explanation: "A fosforilase quinase ativa a glicogênio fosforilase, enzima que quebra o glicogênio. Na deficiência hepática dessa enzima (glicogenose tipo IX), o fígado acumula glicogênio, mas não consegue liberá-lo como glicose entre as refeições, e a paciente tende à hipoglicemia de jejum.\n\nO amido de milho cru é digerido devagar e libera glicose de forma contínua no intestino. Tomado em intervalos curtos, ele substitui a glicogenólise hepática que falta e mantém a glicemia estável, inclusive à noite.",
    commentary: "Síntese de glicogênio muscular (B): o músculo não tem glicose-6-fosfatase e não libera glicose para o sangue; aumentar seu glicogênio não corrige a hipoglicemia, que é o problema da paciente.\n\nEstimular a quebra do glicogênio hepático (C): a quebra está bloqueada pela própria deficiência, e a refeição com amido, ao elevar a insulina, ainda inibe a glicogenólise.\n\nInibir a síntese de glicogênio hepático (D): não é esse o objetivo; a insulina liberada após a ingestão até favorece a síntese, e o alvo terapêutico é evitar a hipoglicemia.",
    tip: "Glicogenose hepática: o fígado não solta glicose. Amido de milho cru frequente = glicemia mantida.",
    reference: 'Harvey RA, Ferrier DR - Bioquímica Ilustrada 5ª. ed. Artmed, 2012. Marzzoco A, Torres BB - Bioquímica Básica. 3ª ed. Ed. Guanabara Koogan, 2007. Nelson DL, Cox MM - Princípios de Bioquímica de Lehninger 5ª ed. Artmed, 2011.',
    tags: ['bioquímica', 'erros inatos do metabolismo']
  },
  {
    id: 'tp2023-10',
    module: 'Ciências Básicas',
    text: 'Considerando que o sono é ausência do estado de vigília, metabolicamente regulado, ocorrendo pequena queda da pressão arterial, podemos afirmar que:',
    options: [
      '(A) Ocorre queda inicial da taxa de filtração glomerular e posterior aumento da taxa de filtração por ativação do mecanismo neural de ajuste da taxa de filtração glomerular.',
      '(B) Ocorre aumento inicial da taxa de filtração glomerular e posterior ativação do mecanismo neural de ajuste da taxa de filtração glomerular.',
      '(C) Ocorre queda inicial da taxa de filtração glomerular e posterior ativação do mecanismo de autorregulação da taxa de filtração glomerular.',
      '(D) Não ocorre alteração da taxa de filtração glomerular.'
    ],
    correctAnswer: 2,
    explanation: "Durante o sono a pressão arterial cai um pouco. Como a pressão de perfusão renal diminui, a filtração glomerular tende a cair num primeiro momento.\n\nO rim, porém, tem mecanismos próprios que mantêm o fluxo sanguíneo e a filtração quase constantes numa ampla faixa de pressão (aproximadamente 80 a 180 mmHg de pressão média): a autorregulação. Ela envolve o reflexo miogênico da arteríola aferente, que se dilata quando a pressão cai, e o feedback tubuloglomerular, em que a mácula densa percebe menos cloreto de sódio e sinaliza dilatação aferente e liberação de renina. Assim a filtração volta ao normal sem depender do sistema nervoso.",
    commentary: "Recuperação por mecanismo neural (A): a queda inicial está correta, mas a correção é intrínseca ao rim (autorregulação); a ativação simpática renal, ao contrário, contrai arteríolas e tende a reduzir a filtração.\n\nAumento inicial da filtração (B): com pressão menor a filtração não sobe, ela cai, e o ajuste também não é neural.\n\nSem nenhuma alteração (D): há uma queda transitória da filtração até que a autorregulação a restabeleça.",
    tip: "Pressão cai, filtração cai um pouco e a autorregulação renal (miogênica + mácula densa) a restabelece.",
    reference: 'Sato, M.A. Tratado de Fisiologia Médica – 1a ed (2021). Editora Guanabara Koogan/Grupo GEN, Rio de Janeiro.',
    tags: ['fisiologia renal']
  },
  {
    id: 'tp2023-11',
    module: 'Ciências Básicas',
    text: 'Os componentes figurados do sangue têm funções importantes na manutenção da homeostase. Entre as funções dos leucócitos, podemos afirmar:',
    options: [
      '(A) São células que desempenham sua função após completarem a maturação tímica.',
      '(B) São células responsáveis pela coagulação do sangue e formação de hemácias.',
      '(C) São células do sistema circulatório responsável pela formação de insulina.',
      '(D) São células do sistema imunológico responsáveis pela defesa do organismo contra agentes infecciosos.'
    ],
    correctAnswer: 3,
    explanation: "Leucócitos são os glóbulos brancos e têm como função a defesa do organismo. Dividem-se em linhagem mieloide (neutrófilos, eosinófilos, basófilos e monócitos), ligada sobretudo à resposta inata, e linhagem linfoide (linfócitos B, T e NK), base da imunidade adaptativa.\n\nTodos nascem na medula óssea; somente os linfócitos T completam a maturação no timo.",
    commentary: "Funcionamento após maturação no timo (A): isso vale apenas para os linfócitos T; neutrófilos, monócitos e linfócitos B amadurecem na medula óssea.\n\nCoagulação e formação de hemácias (B): a hemostasia primária cabe às plaquetas e aos fatores de coagulação, e as hemácias derivam de precursores eritroides da medula.\n\nProdução de insulina (C): quem secreta insulina são as células beta das ilhotas pancreáticas.",
    tip: "Leucócito = defesa. Todos nascem na medula; só o linfócito T termina de amadurecer no timo.",
    reference: "Boehm T, Swann JB. Origin and evolution of adaptive immunity. Annu Rev Anim Biosci. 2014;2:259-283.",
    tags: ['histologia', 'imunologia']
  },
  {
    id: 'tp2023-12',
    module: 'Ciências Básicas',
    text: 'Paciente do sexo feminino, 65 anos, com hipertensão arterial não controlada e sintomas de cefaleias, mal-estar geral e flushing facial relacionados aos picos de pressão arterial elevada. Os exames realizados incluíram eletrocardiograma normal, radiografia de tórax sem alterações e tomografia computadorizada abdominal. Verificou-se um aumento da aldosterona sérica (798 pmol/L; normal: 28 a 443 pmol/L), com renina sérica, metanefrinas plasmáticas, cortisol, ácido vanilmandélico e ionograma dentro dos parâmetros normais. Como deve ser interpretado o distúrbio da pressão arterial apresentado pela paciente desse relato?',
    image: '/images/tp2023-12.webp',
    options: [
      '(A) Síndrome de Cushing',
      '(B) Tumor associado a glândula adrenal',
      '(C) Hipertensão renovascular',
      '(D) Hipertensão essencial'
    ],
    correctAnswer: 1,
    explanation: "Hipertensão de difícil controle com aldosterona elevada, metanefrinas, ácido vanilmandélico e cortisol normais aponta para hiperaldosteronismo primário, cuja causa tumoral clássica é o adenoma adrenal produtor de aldosterona (síndrome de Conn).\n\nNo hiperaldosteronismo primário, a aldosterona é produzida de forma autônoma, retém sódio e água e eleva a pressão; a renina fica tipicamente suprimida, e a relação aldosterona/renina é o exame de triagem. A hipocalemia ajuda, mas falta em boa parte dos pacientes. Confirmada a produção autônoma, faz-se a tomografia das adrenais e, quando indicado, cateterismo das veias adrenais antes da cirurgia.",
    commentary: "Síndrome de Cushing (A): o cortisol está normal e não há sinais de hipercortisolismo (obesidade central, estrias violáceas, fraqueza proximal).\n\nHipertensão renovascular (C): a estenose da artéria renal ativa o sistema renina-angiotensina, e a aldosterona sobe junto com a renina (hiperaldosteronismo secundário).\n\nHipertensão essencial (D): o diagnóstico só é feito quando não há causa secundária, e aqui há excesso de aldosterona, que obriga a investigar a adrenal.",
    tip: "Hipertensão resistente + aldosterona alta + renina suprimida = hiperaldosteronismo primário; procure adenoma de adrenal.",
    reference: 'Bortolotto, Luiz Aparecido, and Marcus Vinícius Bolívar Malachias. "Atualização no diagnóstico e tratamento das principais causas de hipertensão secundária." Rev. bras. hipertens (2011): 46-66. Oigman, Wille. "Sinais e sintomas em hipertensão arterial." JBM 102.5 (2014): 13-8. Silva, Joana, et al. "Hipertensão arterial secundária a tumor raro da glândula adrenal." Arquivos Brasileiros de Cardiologia 95 (2010): 144-147.',
    tags: ['fisiologia endócrina', 'cardiologia']
  },
  {
    id: 'tp2023-13',
    module: 'Ciências Básicas',
    text: 'Homem com 54 anos apresenta dor abdominal intensa com início há algumas horas, localizada no andar superior do abdome, com irradiação para as costas, acompanhada de náuseas e vômitos. Ao exame, abdome distendido, tenso à palpação, com sensibilidade maior em região epigástrica e periumbilical. Exames laboratoriais: lipase 625U/L (inferior a 60U/L); amilase 980U/L (valor de referência de 28 a 100U/L). Na tomografia computadorizada de abdome, foi visualizada coleção de líquido intraperitoneal e aumento difuso do pâncreas. Qual das alterações é mais provável de ser vista nesta condição?',
    options: [
      '(A) Necrose coagulativa',
      '(B) Necrose fibrinoide',
      '(C) Necrose caseosa',
      '(D) Necrose gordurosa'
    ],
    correctAnswer: 3,
    explanation: "Dor epigástrica intensa irradiada para o dorso, com náuseas e vômitos, lipase e amilase muito acima de três vezes o limite e pâncreas aumentado na tomografia: pancreatite aguda.\n\nA lesão tecidual típica é a necrose gordurosa enzimática. As lipases que escapam dos ácinos digerem a gordura do pâncreas e ao redor dele; os ácidos graxos liberados se ligam ao cálcio e formam sabões (saponificação), visíveis como manchas branco-giz. Esse consumo de cálcio explica a hipocalcemia, que é um marcador de gravidade.",
    commentary: "Necrose coagulativa (A): é o padrão da isquemia em órgãos sólidos (infarto do miocárdio, do rim), com preservação temporária do contorno das células.\n\nNecrose fibrinoide (B): ocorre na parede dos vasos, em vasculites por imunocomplexos e na hipertensão maligna.\n\nNecrose caseosa (C): é característica da tuberculose, com aspecto de queijo friável dentro do granuloma.",
    tip: "Pancreatite: lipase digere gordura e o ácido graxo se liga ao cálcio (saponificação) = necrose gordurosa.",
    reference: "KUMAR, V.; ABBAS, A. K.; ASTER, J. C. Robbins & Cotran Patologia: bases patológicas das doenças. Rio de Janeiro: Elsevier.",
    tags: ['patologia', 'gastroenterologia']
  },
  {
    id: 'tp2023-14',
    module: 'Ciências Básicas',
    text: 'Levando em consideração o processo inflamatório, seus mediadores e fármacos capazes de antagonizar essa reação, pode-se afirmar que:',
    options: [
      '(A) As alterações acarretadas pelos anti-inflamatórios corticosteroides são mais lentas, devido ao mecanismo de ação nuclear desta categoria de fármacos.',
      '(B) Fármacos anti-inflamatórios causam alterações teciduais por meio do aumento de prostaglandinas vasodilatadoras.',
      '(C) O aumento de permeabilidade vascular é acarretado pela supressão da fosfolipase A2 e pelos aumentos de expressão da enzima ciclo-oxigenase.',
      '(D) Os anti-inflamatórios esteroidais causam maiores alterações teciduais, pois seu principal mecanismo de ação está associado à interação com proteínas celulares de superfície.'
    ],
    correctAnswer: 0,
    explanation: "Os corticosteroides são lipossolúveis, atravessam a membrana e se ligam ao receptor de glicocorticoide no citoplasma. O complexo vai ao núcleo e muda a transcrição de genes: aumenta proteínas anti-inflamatórias (como a anexina-1, que inibe a fosfolipase A2) e reduz citocinas, moléculas de adesão e a expressão da COX-2.\n\nComo dependem da síntese de novas proteínas, seus efeitos levam horas para aparecer, diferentemente dos AINEs, que inibem a ciclo-oxigenase diretamente e agem mais rápido.",
    commentary: "Aumento de prostaglandinas vasodilatadoras (B): anti-inflamatórios agem justamente reduzindo a síntese de prostaglandinas.\n\nPermeabilidade por supressão da fosfolipase A2 (C): inibir a fosfolipase A2 diminui a liberação de ácido araquidônico e de seus derivados, o que reduz a permeabilidade vascular; o aumento de permeabilidade decorre de mediadores como histamina, bradicinina, prostaglandinas e leucotrienos.\n\nAção por proteínas de superfície (D): os esteroides atuam por receptores intracelulares que agem no núcleo, e não por receptores de membrana.",
    tip: "Corticoide: receptor intracelular, ação no núcleo (transcrição gênica), por isso o efeito demora horas.",
    reference: 'Brunton, L.L. Goodman & Gilman: As Bases Farmacológicas da Terapêutica. 12ª ed. Rio de Janeiro: McGrawHill, 2012. Rachelle Etienne, Flávia Pereira Dias Viegas, Claudio Viegas Jr. Aspectos Fisiopatológicos da Inflamação e o Planejamento de Fármacos: uma Visão Geral Atualizada. Revista Virtual de Química, 2021.',
    tags: ['farmacologia', 'imunologia']
  },
  {
    id: 'tp2023-15',
    module: 'Ciências Básicas',
    text: 'Gestante de 25 anos, com 2 partos prévios, moradora de zona rural, apresenta sorologia para toxoplasmose com lgG positivo e IgM negativo. Está na décima semana de gestação. Identifique a conduta a ser adotada neste caso:',
    options: [
      '(A) Tratamento imediato com espiramicina até o parto.',
      '(B) Pesquisa de avidez IgG.',
      '(C) Não é necessário tratamento.',
      '(D) Cordocentese ou PCR de líquido amniótico.'
    ],
    correctAnswer: 2,
    explanation: "IgG positivo com IgM negativo no primeiro trimestre indica infecção antiga: a gestante já teve contato com o Toxoplasma e está imune. A chance de transmissão fetal em gestante imunocompetente nessa situação é desprezível.\n\nNão há tratamento a fazer nem necessidade de repetir a sorologia; segue-se o pré-natal habitual. A exceção são as gestantes imunossuprimidas (como as que vivem com HIV), em que pode haver reativação.",
    commentary: "Espiramicina até o parto (A): é indicada na suspeita ou confirmação de infecção aguda materna, para reduzir a transmissão ao feto, o que não é o caso.\n\nAvidez de IgG (B): é usada quando IgG e IgM são positivos, de preferência até 16 semanas, para diferenciar infecção recente de antiga.\n\nCordocentese ou PCR no líquido amniótico (D): investigam infecção fetal depois de diagnosticada infecção aguda na mãe; a PCR por amniocentese é o método usado hoje.",
    tip: "Toxo: IgG+ e IgM- = imune. Nada a tratar e não repete sorologia (salvo imunossuprimida).",
    reference: 'NEVES, D.P. Parasitologia Humana. 13ª ed. São Paulo: Atheneu, 2016. BRASIL. Protocolo de Notificação e Investigação: Toxoplasmose Gestacional e congênita. Brasília: Ministério da Saúde, 2018.',
    tags: ['infectologia', 'obstetrícia']
  },
  {
    id: 'tp2023-16',
    module: 'Ciências Básicas',
    text: 'Geraldo, 45 anos, apresenta diarreia severa e fétida, relata fortes dores abdominais, febre ocasional aferida em 37,8ºC, náuseas e um episódio de vômito. Ao exame clínico. o paciente se apresentava desidratado (+++/+++++) e em estado geral regular. Foi solicitada a internação para a administração endovenosa de soro e exames laboratoriais, que incluíram hemograma completo, coprocultura, exame parasitológico de fezes (EPF) com pesquisa de coccídios e sangue oculto nas fezes. Em relação aos parâmetros hematológicos, o paciente apresentou eosinofilia em 3200 (VR 50 - 500/mm3) e os demais parâmetros próximos à normalidade, positivo para sangue oculto nas fezes no EPF, negativo para ovos e cistos de enteroparasitas e positivo para oocistos de Criptosporidium parvum. Por se tratar de uma coccidiose, qual doença de base deve ser investigada nesse paciente?',
    options: [
      '(A) Doença de Crohn',
      '(B) AIDS',
      '(C) Neoplasias',
      '(D) Doença autoimune'
    ],
    correctAnswer: 1,
    explanation: "Cryptosporidium parvum é um protozoário coccídio que infecta o epitélio intestinal. No imunocompetente causa diarreia aquosa autolimitada; quando há queda importante de linfócitos T CD4, a infecção vira diarreia volumosa e prolongada, com perda de peso, desidratação e distúrbios eletrolíticos.\n\nPor isso, diante de coccidiose intestinal (Cryptosporidium, Cystoisospora, Cyclospora) em adulto com quadro grave, é obrigatório investigar infecção pelo HIV, já que a AIDS é a imunodeficiência mais associada a esses parasitas. A base do tratamento é recuperar a imunidade com a terapia antirretroviral.",
    commentary: "Doença de Crohn (A): causa diarreia crônica inflamatória, mas não é a doença de base que predispõe classicamente à criptosporidiose grave.\n\nNeoplasias (C): pacientes oncológicos em quimioterapia podem ficar imunossuprimidos, porém a condição a ser investigada primeiro e de forma rotineira é a infecção pelo HIV.\n\nDoença autoimune (D): não é a associação típica; só haveria risco por imunossupressão do tratamento, o que não é sugerido no caso.",
    tip: "Coccídio intestinal (Cryptosporidium, Cystoisospora) com diarreia grave em adulto: peça anti-HIV.",
    reference: 'Mims Microbiologia Médica e Imunologia, 6ª. Ed. 2020.',
    tags: ['infectologia', 'imunologia']
  },
  {
    id: 'tp2023-17',
    module: 'Ciências Básicas',
    text: 'Um ultrassom morfológico de segundo semestre de gestação identificou oligoâmnio (pouco líquido amniótico para essa idade gestacional). Pode ser responsável por essa alteração a seguinte condição:',
    options: [
      '(A) Anencefalia',
      '(B) Atresia de esôfago (ou obstrução esofágica)',
      '(C) Agenesia renal unilateral',
      '(D) Pâncreas anular'
    ],
    correctAnswer: 2,
    explanation: "A partir do segundo trimestre, o líquido amniótico vem principalmente da urina fetal, e é removido sobretudo pela deglutição do feto e absorção no intestino. Por isso, o que reduz a produção ou a saída de urina causa oligoâmnio, e o que impede a deglutição ou o trânsito intestinal causa polidrâmnio.\n\nEntre as opções, a única ligada ao sistema urinário é a agenesia renal, por isso é a resposta. Na prática, o oligoâmnio grave é típico da agenesia renal bilateral (sequência de Potter, com hipoplasia pulmonar); na unilateral, o rim contralateral costuma manter o volume de líquido.",
    commentary: "Anencefalia (A): o feto não deglute adequadamente por falta do controle neural, e o líquido se acumula (polidrâmnio).\n\nAtresia de esôfago (B): o líquido deglutido não chega ao intestino para ser absorvido, causando polidrâmnio.\n\nPâncreas anular (D): comprime o duodeno, obstrui o trânsito e também leva a polidrâmnio.",
    tip: "Líquido amniótico: falta urina = oligoâmnio; feto não engole ou intestino obstruído = polidrâmnio.",
    reference: 'MOORE, K. L.; PERSAUD, T. V. N.; TORCHIA, M. G. Embriologia clínica. 10. ed. Rio de Janeiro: Elsevier, 2016. SADLER, T. W. Langman embriologia médica. 13. ed. São Paulo: Guanabara Koogan, 2016.',
    tags: ['embriologia', 'obstetrícia']
  },
  {
    id: 'tp2023-18',
    module: 'Ciências Básicas',
    text: 'Um laudo da Polícia Federal revelou que quatro rios da maior reserva Yanomami estão contaminados por mercúrio com mais de 8600% do estipulado máximo para águas de consumo humano (ipen.br/portal, 06/06/22). Sabe-se que o mercúrio tem efeito extremo no metabolismo, ligando-se a grupos sulfidrila de sistemas enzimáticos. Em casos graves de intoxicação, os pacientes podem desenvolver lesão pulmonar aguda e desconforto respiratório grave com hipoxemia. Assinale a alternativa correta:',
    options: [
      '(A) O paciente deve apresentar alcalose metabólica devido à alta produção de piruvato.',
      '(B) Há maior utilização da reserva lipídica (triglicerídeo) em detrimento da síntese de ATP.',
      '(C) A via metabólica da gliconeogênese hepática a partir do lactato (ou ácido lático) estará ativada.',
      '(D) Ocorre inibição do ciclo de Krebs com desenvolvimento de anemia, devido a menor síntese de heme.'
    ],
    correctAnswer: 3,
    explanation: "O mercúrio se liga aos grupos sulfidrila (–SH) e inativa várias enzimas, entre elas o complexo da piruvato desidrogenase e enzimas do ciclo de Krebs. Com o ciclo bloqueado, falta succinil-CoA, que é o ponto de partida da síntese do heme (junto com a glicina, pela ALA sintase, na mitocôndria). Algumas enzimas seguintes da via da porfirina também têm grupos –SH e são inibidas.\n\nMenos heme significa menos hemoglobina, e o resultado é anemia. Somada à lesão pulmonar com hipoxemia, a célula passa a depender da glicólise anaeróbia.",
    commentary: "Alcalose metabólica por excesso de piruvato (A): com o metabolismo aeróbio bloqueado e hipoxemia, o piruvato vira lactato e o resultado é acidose metabólica.\n\nMaior uso de triglicerídeos (B): a beta-oxidação depende do ciclo de Krebs e da cadeia respiratória; com essas vias inibidas, a gordura não pode ser aproveitada como fonte de energia.\n\nGliconeogênese a partir do lactato ativada (C): transformar lactato em glicose exige converter piruvato em oxaloacetato na mitocôndria, etapa ligada ao ciclo de Krebs; com essas enzimas comprometidas, a via não funciona.",
    tip: "Mercúrio bloqueia enzimas com –SH: Krebs para, falta succinil-CoA, cai a síntese de heme e surge anemia.",
    reference: 'Baynes, John W. e Dominiczak, Marek H. Bioquímica Médica. 5 ed. Rio de Janeiro: Elsevier, 2022. Murray, Robert K. et al. Bioquímica Ilustrada de HARPER. 31 ed. Porto Alegre: AMGH, 2021. Sanches, José A. Garcia; Compri-Nardy, Mariane B. e Breda-Stella, Mercia. Bases da Bioquímica e Tópicos de Biofísica- Um Marco Inicial. 2 ed. Rio de Janeiro: Guanabara Koogan, 2021.',
    tags: ['toxicologia', 'bioquímica']
  },
  {
    id: 'tp2023-19',
    module: 'Ciências Básicas',
    text: 'Uma mulher de 29 anos consulta seu médico com uma história de 3 meses de intensa sudorese, palpitações e perda de peso (7kg). Ao exame, ela apresenta nervosismo e agitação, tremor em suas mãos e uma frequência cardíaca de 150bpm. Além disso, o médico nota um aumento de sua tireoide e exoftalmia. Os exames laboratoriais demonstraram aumento sérico de T3 e T4 e uma diminuição dos níveis de TSH. O médico então levanta a hipótese diagnóstica de doença de Graves, posteriormente confirmada. Assinale a alternativa correta:',
    options: [
      '(A) Os anticorpos antirreceptores de TSH presentes na doença de Graves levam à destruição das células da tireoide, causando a liberação de grandes quantidades de hormônios tireoidianos e, consequentemente, ao hipertireoidismo.',
      '(B) O aumento dos níveis de T3 e T4 observado é causado pela presença de anticorpos antirreceptores de TSH com ação agonista, que levam à estimulação da produção dos hormônios tireoidianos e consequente hipertireoidismo.',
      '(C) A doença de Graves é causada pela deposição de imunocomplexos nos vasos da glândula tireoide, que levam à ativação de complemento e induzem uma resposta inflamatória local, causando o aumento da produção de T3 e T4.',
      '(D) A diminuição do TSH observada na doença de Graves é decorrente da destruição das células produtoras desse hormônio na hipófise. A destruição dessas células causa uma desregulação da produção de hormônios tireoidianos (T3 e T4), levando ao hipertireoidismo.'
    ],
    correctAnswer: 1,
    explanation: "Hipertireoidismo com bócio difuso e exoftalmia caracteriza a doença de Graves. Ela é causada por autoanticorpos contra o receptor do TSH (TRAb) que agem como agonistas: ligam-se ao receptor e imitam o TSH, estimulando a glândula a crescer e a produzir T3 e T4 sem controle.\n\nÉ uma hipersensibilidade do tipo II mediada por anticorpo que altera a função celular sem destruir a célula. O excesso de hormônios inibe a hipófise por retroalimentação negativa, o que explica o TSH suprimido.",
    commentary: "Destruição das células da tireoide (A): a liberação de hormônio pré-formado por destruição ocorre nas tireoidites (como a fase inicial da tireoidite de Hashimoto ou a subaguda), não na doença de Graves.\n\nDeposição de imunocomplexos (C): esse é o mecanismo da hipersensibilidade tipo III (lúpus, glomerulonefrite pós-estreptocócica), que não explica a doença de Graves.\n\nDestruição de células hipofisárias (D): o TSH está baixo porque o excesso de T3 e T4 freia a hipófise; se as células produtoras de TSH fossem destruídas, o resultado seria hipotireoidismo central.",
    tip: "Graves: TRAb estimulante imita o TSH (hipersensibilidade tipo II). TSH baixo por retroalimentação.",
    reference: 'RICH, R.R..; FLEISHER, T.A.; SCHROEDER, H.W.; WEYAND, C.M.; CORRY, D.B. ; PUCK, J.M. Clinical Immunology: Principles and Practice. 6th. ed. Elsevier, 2022.',
    tags: ['imunologia', 'endocrinologia']
  },
  {
    id: 'tp2023-20',
    module: 'Ciências Básicas',
    text: 'Um paciente foi trazido por familiares ao hospital psiquiátrico, pois estava agressivo, quebrando objetos em casa e tentou bater em seu pai. Durante a entrevista, o paciente teve que ser contido devido à franca agressividade. A história pregressa foi colhida com familiares, os quais relataram que seis meses antes ele começou a dizer a familiares que estava ouvindo vozes. Uma noite acordou aos gritos e risadas, sem que ninguém soubesse o motivo. Frente a este quadro, foi estabelecida a hipótese diagnóstica de esquizofrenia e foi indicado o uso de um neuroléptico, da família das butirofenonas, o haloperidol, cujo mecanismo de ação farmacológica é explicado por bloqueio dos receptores centrais:',
    options: [
      '(A) Dopaminérgicos',
      '(B) Noradrenérgicos',
      '(C) Serotoninérgicos',
      '(D) Acetilcolinérgicos'
    ],
    correctAnswer: 0,
    explanation: "O haloperidol é um antipsicótico típico de alta potência, da classe das butirofenonas. Seu efeito vem do bloqueio dos receptores dopaminérgicos D2 no cérebro.\n\nNa via mesolímbica, esse bloqueio reduz alucinações e delírios. Nas outras vias, ele explica os principais efeitos adversos: na nigroestriatal, sintomas extrapiramidais (distonia aguda, acatisia, parkinsonismo e discinesia tardia); na tuberoinfundibular, aumento da prolactina; na mesocortical, piora de sintomas negativos e cognitivos. A síndrome neuroléptica maligna é a complicação grave a lembrar.",
    commentary: "Noradrenérgicos (B): o bloqueio alfa-1 adrenérgico, que causa hipotensão postural, é marcante nos típicos de baixa potência como a clorpromazina, não é o mecanismo do efeito antipsicótico do haloperidol.\n\nSerotoninérgicos (C): o bloqueio 5-HT2A é característico dos antipsicóticos atípicos (risperidona, olanzapina, quetiapina, clozapina).\n\nColinérgicos (D): o efeito antimuscarínico (boca seca, constipação, retenção urinária) aparece em fármacos como clorpromazina e clozapina; o haloperidol tem pouca ação nesses receptores.",
    tip: "Haloperidol = bloqueio D2. Alta potência, logo muito efeito extrapiramidal e pouco anticolinérgico.",
    reference: 'Farmacologia ( Rang H.P., Dale M.M. 9 ed. 2020).',
    tags: ['farmacologia', 'psiquiatria']
  },
  {
    id: 'tp2022-1',
    module: 'Ciências Básicas',
    text: 'Paciente de 34 anos é atendido no pronto-socorro com crise de asma, tendo sido medicado com salbutamol e ipratrópio por via inalatória (4 inalações) e solumedrol por via intravenosa. Com relação às medicações administradas, é correto afirmar que:',
    options: [
      '(A) O ipratrópio é uma xantina, que tem como efeito colateral constipação e retenção urinária.',
      '(B) O salbutamol é um agonista beta 2 adrenérgico e pode causar, como efeitos colaterais, o tremor de extremidade e taquicardia.',
      '(C) O solumedrol é um antagonista dos leucotrienos, que pode causar hiperpotassemia e diarreia.',
      '(D) A associação de salbutamol e ipratrópio é contraindicada por atuarem no mesmo receptor.'
    ],
    correctAnswer: 1,
    explanation: "O salbutamol é um agonista beta-2 adrenérgico de curta ação: relaxa a musculatura lisa brônquica e é a base do tratamento da crise de asma. Como também estimula receptores beta no músculo esquelético e no coração, seus efeitos adversos mais comuns são tremor de extremidades e taquicardia (além de hipocalemia em doses altas).\n\nNa crise moderada a grave, associa-se o brometo de ipratrópio, um antagonista muscarínico, e um corticoide sistêmico, como a metilprednisolona (Solu-Medrol), para controlar a inflamação.",
    commentary: "Ipratrópio como xantina (A): o ipratrópio é anticolinérgico (antimuscarínico), não xantina; por via inalatória, o efeito adverso mais comum é boca seca. Xantinas são aminofilina e teofilina.\n\nSolumedrol como antileucotrieno (C): é metilprednisolona, um corticoide; pode causar hipocalemia e hiperglicemia, e não hiperpotassemia. Antileucotrieno é o montelucaste.\n\nAssociação contraindicada (D): os dois agem em receptores diferentes (beta-2 e muscarínico) e a associação é recomendada na crise moderada a grave, pois tem efeito broncodilatador somado.",
    tip: "Salbutamol = beta-2 agonista (tremor, taquicardia). Ipratrópio = antimuscarínico (boca seca). Solu-Medrol = corticoide.",
    reference: 'RANG, H. P.; DALE, M.M.; RITTER, J. M. Farmacologia. 8. ed. Rio de Janeiro: Elsevier, 2016',
    tags: ['farmacologia', 'pneumologia']
  },
  {
    id: 'tp2022-2',
    module: 'Ciências Básicas',
    text: 'Mulher, 35 anos, queixa-se de ardor ao urinar e desconforto durante o ato sexual. Exame físico normal. Ao exame ginecológico foi observado corrimento vaginal fino, de cor amarelo/esverdeado, bolhoso e de odor fétido. No exame colposcópico, a cérvice se apresentou levemente edemaciada, com eritemas e raros pontos hemorrágicos na mucosa vaginal. A paciente nega febre ou dores abdominais e não foram detectados sinais de infartamento ganglionar. Foi solicitada urinálise, que mostrou os seguintes resultados: urina turva, com hemácias, cilindros proteicos, células epiteliais e leucócitos em abundância, e a estrutura mostrada na imagem a seguir:',
    image: '/images/tp2022-2.webp',
    options: [
      '(A) Gardnerella vaginalis',
      '(B) Clamídia trachomatis',
      '(C) Neisseria gonorrhoeae',
      '(D) Trichomonas vaginalis'
    ],
    correctAnswer: 3,
    explanation: "Corrimento amarelo-esverdeado, bolhoso e fétido, disúria, dispareunia e colo do útero edemaciado com pontos hemorrágicos (o chamado colo em framboesa ou em morango) formam o quadro típico da tricomoníase. A estrutura vista na urina é o protozoário flagelado Trichomonas vaginalis, que pode aparecer no exame de urina e no exame a fresco da secreção, onde se vê seu movimento.\n\nÉ uma IST: o tratamento é com metronidazol, e a parceria sexual também deve ser tratada.",
    commentary: "Gardnerella vaginalis (A): causa vaginose bacteriana, com corrimento acinzentado, homogêneo e odor de peixe, sem inflamação do colo; ao microscópio aparecem células-guia (clue cells), não protozoários.\n\nChlamydia trachomatis (B): causa cervicite, muitas vezes assintomática, com secreção mucopurulenta endocervical; é bactéria intracelular e não é vista como estrutura móvel no exame de urina.\n\nNeisseria gonorrhoeae (C): também causa cervicite e uretrite purulenta; na bacterioscopia aparecem diplococos Gram-negativos, não protozoários flagelados.",
    tip: "Corrimento amarelo-esverdeado bolhoso + colo em framboesa = Trichomonas; trate com metronidazol, inclusive a parceria.",
    reference: 'LÓPEZ, L. B. et al. Strategies by which some pathogenictrichomonads integrate diverse signals in the decision-making process. An Acad Bras, v. 72, p. 173-86, 2000. AMATO NETO, V.; AMATO, V. S.; GRYSCHEK, Ronaldo Cesar Borges . Parasitologia: Uma Abordagem Clínica. 1. ed. São Paulo: Elsevier, 2008. v. 1. 456p',
    tags: ['microbiologia', 'ginecologia']
  },
  {
    id: 'tp2022-3',
    module: 'Ciências Básicas',
    text: 'Homem de 36 anos procura Unidade Básica de Saúde por sentir fraqueza e cansaço. Relata não fumar nem beber. Ao exame clínico, o médico observa pele amarelada, pressão arterial 120/70mmHg, frequência cardíaca de 84 sístoles/minuto. Resultados laboratoriais: o exame de sangue apresenta hematócrito de 46%, número de hemácias 5.250.000/mm3, hemoglobina 16g/dL, Leucócitos 7.500/mm3, plaquetas 230.000/mm3; AST e ALT aumentadas; fezes acólicas e urina escura. Nesta situação, a icterícia ocorre por acúmulo de bilirrubina:',
    options: [
      '(A) Indireta no plasma, por deficiência da glicuronil transferase.',
      '(B) Indireta no plasma, por obstrução do canalículo biliar.',
      '(C) Indireta no plasma, por aumento da hemólise.',
      '(D) Direta no plasma, por obstrução do canalículo biliar.'
    ],
    correctAnswer: 0,
    explanation: "Pele amarelada com AST e ALT elevadas em homem que não bebe sugere lesão hepatocelular, como uma hepatite viral. O hemograma normal (hemoglobina, hematócrito e hemácias normais) afasta hemólise como causa da icterícia.\n\nA banca considera que a lesão do hepatócito reduz a capacidade de conjugar a bilirrubina, já que a glicuronil transferase (UDP-glicuronosiltransferase) é a enzima que transforma a bilirrubina indireta em direta; por isso marca a alternativa A. Na prática, porém, a lesão hepatocelular prejudica todas as etapas (captação, conjugação e excreção), e costuma predominar a bilirrubina direta: é ela, por ser hidrossolúvel, que escurece a urina, e as fezes acólicas indicam que pouca bilirrubina chega ao intestino. A deficiência isolada da enzima é o mecanismo de Gilbert e Crigler-Najjar, em que não há colúria.",
    commentary: "Indireta por obstrução do canalículo (B): obstrução das vias biliares impede a saída da bilirrubina já conjugada, elevando a bilirrubina direta, não a indireta.\n\nIndireta por hemólise (C): o hemograma normal afasta anemia hemolítica, e a hemólise não explica transaminases elevadas, colúria e acolia.\n\nDireta por obstrução do canalículo (D): a banca a descartou por interpretar o quadro como lesão hepatocelular (transaminases altas), e não como obstrução; ainda assim, colúria e acolia são achados de aumento da bilirrubina direta.",
    tip: "Colúria = bilirrubina direta. Deficiência isolada de glicuronil transferase (Gilbert) eleva só a indireta, sem colúria.",
    reference: 'Douglas, C.R. Tratado de Fisiologia Aplicado às Ciências Médicas – 6a ed (2006). Koeppen, B.M.& Stanton, B.A. Berne & Levy – Fisiologia – 6a ed. (2009). Sato, M.A. Tratado de Fisiologia Médica – 1a ed (2021). Grossman, S., Porth C.M. Porth fisiopatologia. 9ª ed.',
    tags: ['fisiologia', 'hepatologia']
  },
  {
    id: 'tp2022-4',
    module: 'Ciências Básicas',
    text: 'Homem de 56 anos, após o 7º dia de pós-operatório de cirurgia do esôfago realizada no mediastino superior, apresenta discreta dor torácica e dispneia moderada, sem alterações nos sinais vitais. Após a realização de uma radiografia de tórax, notou-se derrame pleural à esquerda, e a toracocentese evidenciou a formação de líquido de aspecto leitoso (quilotórax). A causa do derrame pleural é devido a lesão no:',
    options: [
      '(A) Linfonodos broncomediastinais',
      '(B) Ducto torácico',
      '(C) Cisterna do Quilo',
      '(D) Ducto linfático direito'
    ],
    correctAnswer: 1,
    explanation: "Líquido leitoso na toracocentese é quilo, linfa rica em gordura absorvida no intestino. Quilotórax após cirurgia de esôfago indica lesão do ducto torácico, que carrega o quilo do abdome até o sistema venoso.\n\nO ducto torácico começa na cisterna do quilo, no abdome, sobe pelo mediastino posterior à direita da aorta e, por volta da altura de T4-T5, cruza para a esquerda, terminando na junção das veias subclávia e jugular interna esquerdas. Por isso uma lesão no mediastino superior costuma causar quilotórax à esquerda, como no caso.",
    commentary: "Linfonodos broncomediastinais (A): drenam linfa de pulmões e mediastino, sem conteúdo de quilo intestinal; não produzem quilotórax.\n\nCisterna do quilo (C): fica no abdome, na altura das primeiras vértebras lombares, longe do campo da cirurgia no mediastino superior.\n\nDucto linfático direito (D): drena só o quadrante superior direito do corpo, não recebe linfa intestinal e, se lesado, o derrame seria à direita.",
    tip: "Líquido leitoso no tórax = quilotórax = lesão do ducto torácico (no mediastino superior, derrame à esquerda).",
    reference: 'MOORE, K. L.; DALLEY, A. F.; AGUR, A. M. R. Moore anatomia orientada para a clínica. 7. ed. Rio de Janeiro: Guanabara Koogan, 2014.',
    tags: ['anatomia', 'cirurgia']
  },
  {
    id: 'tp2022-5',
    module: 'Ciências Básicas',
    text: 'Paciente com claudicação devido a desalinhamento e dificuldade de sustentação pélvica unilateral, provocado por fraqueza muscular decorrente de uma lesão do nervo glúteo superior. Ao exame físico, observou-se a presença do Sinal de Trendelenburg positivo. O músculo específico afetado é:',
    options: [
      '(A) Músculo glúteo máximo',
      '(B) Músculo glúteo médio',
      '(C) Músculo piriforme',
      '(D) Músculo iliopsoas'
    ],
    correctAnswer: 1,
    explanation: "O nervo glúteo superior inerva o glúteo médio, o glúteo mínimo e o tensor da fáscia lata. O glúteo médio é o principal abdutor do quadril e, durante a marcha, mantém a pelve nivelada quando o corpo se apoia em uma perna só.\n\nCom ele fraco, ao apoiar no membro afetado a pelve cai para o lado oposto: é o sinal de Trendelenburg positivo. Para compensar, o paciente inclina o tronco para o lado da lesão, produzindo a marcha característica.",
    commentary: "Glúteo máximo (A): é inervado pelo nervo glúteo inferior e atua principalmente na extensão do quadril (levantar da cadeira, subir escadas); sua fraqueza não dá sinal de Trendelenburg.\n\nPiriforme (C): é rotador lateral do quadril, inervado por ramos diretos do plexo sacral; não sustenta a pelve no apoio unipodal.\n\nIliopsoas (D): é o principal flexor do quadril, inervado pelo plexo lombar e pelo nervo femoral; não tem relação com o nervo glúteo superior.",
    tip: "Trendelenburg positivo = glúteo médio fraco = nervo glúteo superior. A pelve cai para o lado sadio.",
    reference: 'MOORE, K. L.; DALLEY, A. F.; AGUR, A. M. R. Moore anatomia orientada para a clínica. 7. ed. Rio de Janeiro: Guanabara Koogan, 2014.',
    tags: ['anatomia', 'ortopedia']
  },
  {
    id: 'tp2022-6',
    module: 'Ciências Básicas',
    text: 'Homem de 35 anos, sem filhos, não fumante, nega história de doenças crônicas ou recorrentes, bem como exposição tóxica prévia. Ao exame físico, apresenta volume testicular reduzido com ductos palpáveis. Os níveis de FSH séricos estão aumentados. Há presença de oligospermia em volume de sêmen normal, com espermatozoides com motilidade e morfologia normais. Cariótipo em bandamento GTG: 46,XY. A investigação diagnóstica deve prosseguir para:',
    options: [
      '(A) Análise de microdeleções no cromossomo Y.',
      '(B) Análise molecular do gene CFTR.',
      '(C) Painel de genes por NGS para síndrome de Kallmann.',
      '(D) Diagnóstico molecular da síndrome de Kartagener.'
    ],
    correctAnswer: 0,
    explanation: 'Em casos de insuficiência testicular primária (FSH alto) com cariótipo normal, a análise de microdeleções do cromossomo Y é a próxima etapa.',
    commentary: 'O enunciado apresenta quadro de insuficiência testicular primária (FSH elevado) com oligospermia e cariótipo 46,XY normal. A avaliação inicial padrão nestes casos é o cariótipo seguido pela análise de microdeleções no braço longo do cromossomo Y (região AZF). A análise do gene CFTR seria mais indicada em casos obstrutivos (azoospermia com volume seminal baixo). A síndrome de Kallmann cursaria com FSH baixo (hipogonadismo hipogonadotrófico).',
    reference: 'Wosnitzer, M.S. - Genetic evaluation of male infertility. Transl Androl Urol 2014;3(1):17-26.',
    tags: ['genética', 'urologia']
  },
  {
    id: 'tp2022-7',
    module: 'Ciências Básicas',
    text: 'Aminoglicosídeos são fármacos considerados nefrotóxicos que podem promover aumento dos níveis séricos de creatinina e ureia ou proteinúria, sendo importante o monitoramento da função renal dos pacientes que os utilizam. Correlacione a alteração renal ao principal mecanismo patológico de toxicidade destes fármacos.',
    options: [
      '(A) Vasculite - Lesão direta endotelial por depósitos de imunocomplexos.',
      '(B) Nefrite intersticial - Inflamação crônica induzida por resposta de hipersensibilidade.',
      '(C) Glomerulonefrite - Alteração da hemodinâmica intraglomerular e formação de trombos na microvasculatura renal.',
      '(D) Necrose tubular aguda - Apoptose e necrose das células dos túbulos renais por lesão direta e estresse oxidativo.'
    ],
    correctAnswer: 3,
    explanation: 'A nefrotoxicidade dos aminoglicosídeos é caracterizada por necrose tubular aguda (NTA) devido ao acúmulo nas células tubulares proximais.',
    commentary: 'A Necrose Tubular Aguda é a forma mais frequente de Insuficiência Renal Aguda por aminoglicosídeos. Estes fármacos causam lesão direta e estresse oxidativo nas células dos túbulos renais, levando à apoptose e necrose.',
    reference: 'Robbins & Cotran - Patologia - Bases Patológicas das Doenças, 9ª ed. Mello, P. A. de et al. (2021). Nefrotoxicidade e alterações de exames laboratoriais por fármacos.',
    tags: ['farmacologia', 'nefrologia', 'patologia']
  },
  {
    id: 'tp2022-8',
    module: 'Ciências Básicas',
    text: 'A febre reumática é uma sequela principalmente de infecções por Streptococcus pyogenes e pode cursar com cardite ou outras complicações, como artrite, coreia, eritema e/ou nódulos cutâneos. Acredita-se que a lesão cardíaca é causada pela ativação inapropriada de linfócitos T no miocárdio, devido ao mimetismo molecular. Sobre a ativação dos linfócitos T na febre reumática, é correto afirmar que:',
    options: [
      '(A) A presença da bactéria no miocárdio do paciente desencadeia uma reação inflamatória que facilita a apresentação cruzada entre antígenos bacterianos e a miosina, ativando linfócitos T, desencadeando a cardite.',
      '(B) Cardiomiócitos de pacientes com determinados genes HLA-II apresentam autoantígenos do coração, como a miosina, para linfócitos T com receptores antimiosina, desencadeando a cardite.',
      '(C) O processamento de antígenos do Streptococcus pyogenes em peptídeos menores, pelas células apresentadoras de antígenos e sua apresentação por algumas moléculas HLA-II, pode ativar linfócitos T com receptores TCR antimiosina, desencadeando a cardite.',
      '(D) A inflamação do miocárdio é decorrente da intensa produção de IL-2, que por sua vez é decorrente da secreção de citocinas por macrófagos que fagocitaram a bactéria presente no tecido cardíaco.'
    ],
    correctAnswer: 2,
    explanation: 'O mimetismo molecular ocorre quando peptídeos bacterianos são apresentados via HLA-II e ativam clones de células T auto-reativas contra a miosina cardíaca.',
    commentary: 'Na febre reumática, não há bactéria no miocárdio. A cardite é mediada por imunidade. O processamento de antígenos do S. pyogenes e sua apresentação por moléculas HLA-II específicas ativa linfócitos T que, por mimetismo molecular, reconhecem a miosina cardíaca (possuem TCR antimiosina). Cardiomiócitos não expressam HLA-II em condições normais.',
    reference: 'Guilherme L, Kalil J, Cunningham M. Molecular mimicry in the autoimmune pathogenesis of rheumatic heart disease. Autoimmunity, 2006.',
    tags: ['imunologia', 'cardiologia']
  },
  {
    id: 'tp2022-9',
    module: 'Ciências Básicas',
    text: 'Paciente de 74 anos, portador de DPOC grave, deu entrada na Emergência com quadro de dispneia, febre e expectoração de coloração amarelada, de início há 3 dias. Durante o atendimento inicial, evoluiu com rebaixamento de nível de consciência e necessitou de intubação orotraqueal. Após as condutas iniciais, exames complementares foram solicitados: Hemograma (Hb: 16g/dL, Ht 48%, Leucócitos: 30.000/mm3 com a presença de metamielócitos e desvio à esquerda); Na+: 140mEq/L, K+: 4,3mEq/L; creatinina: 1,5mg/dL; ureia: 68mg/dL. Gasometria arterial com pH: 7,13; pO2: 55mmHg; HCO3: 13mEq/L; pCO2: 84mmHg; SatO2: 85% com FiO2 (ventilação mecânica): 80%. Determine o diagnóstico gasométrico e a pCO2 esperada para tal paciente.',
    options: [
      '(A) Acidose metabólica com pCO2 esperada de 30 a 34mmHg.',
      '(B) Acidose respiratória com pCO2 esperada de 55 a 59mmHg.',
      '(C) Acidose mista com pCO2 esperada de 26 a 30mmHg.',
      '(D) Acidose mista com pCO2 esperada de 55 a 59mmHg.'
    ],
    correctAnswer: 2,
    explanation: 'Acidose mista: pH baixo com HCO3 baixo (metabólica) e pCO2 alto (respiratória). A pCO2 esperada no componente metabólico seria baixa, mas está elevada.',
    commentary: 'Trata-se de acidose mista, pois possui bicarbonato abaixo do nível da normalidade (acidose metabólica, provavelmente por sepse/lactato) associado a uma pCO2 muito acima do esperado (acidose respiratória por DPOC/insuficiência respiratória). Em uma acidose metabólica pura com HCO3 de 13, a pCO2 esperada seria (1.5 * 13) + 8 = 27.5 (+/- 2), ou seja, entre 26 e 30 mmHg. Como a pCO2 real é 84, o distúrbio é misto.',
    reference: 'KNOBEL, E.; Condutas no Paciente Grave.; Ed Atheneu, 2016.',
    tags: ['fisiologia', 'pneumologia', 'emergência']
  },
  {
    id: 'tp2022-10',
    module: 'Ciências Básicas',
    text: 'Com exceção das glândulas anexas do digestório, todos os órgãos do trato digestivo apresentam túnicas, constituídas por diferentes tecidos e estruturas com funções específicas. As lâminas A, B, C e D representam um corte histológico de estômago. Indique a classificação do tecido na respectiva túnica.',
    image: '/images/tp2022-10.webp',
    options: [
      '(A) Seta 1 indica mucosa com epitélio simples cilíndrico, tecido conjuntivo frouxo, criptas e glândulas.',
      '(B) Seta 2 indica submucosa de tecido conjuntivo denso.',
      '(C) Seta 3 indica muscular do órgão com uma direção de tecido muscular liso.',
      '(D) Seta 4 indica adventícia com tecido conjuntivo frouxo.'
    ],
    correctAnswer: 0,
    explanation: "A parede do estômago tem quatro túnicas: mucosa, submucosa, muscular e serosa. A mucosa (seta 1) é formada por epitélio simples cilíndrico secretor de muco, que se aprofunda formando as fossetas gástricas (fovéolas) onde desembocam as glândulas, apoiado na lâmina própria de tecido conjuntivo frouxo e na muscular da mucosa.\n\nPor isso a alternativa A descreve corretamente a túnica indicada. Vale lembrar a particularidade do estômago: a muscular própria tem três camadas (oblíqua interna, circular média e longitudinal externa).",
    commentary: "Submucosa de tecido conjuntivo denso (B): a banca considera a submucosa um conjuntivo menos compacto, rico em vasos e com o plexo submucoso; na lâmina, a camada da seta 2 aparece clara e frouxa.\n\nMuscular com uma só direção (C): no estômago, a muscular própria tem fibras lisas em três direções, e não em uma.\n\nAdventícia (D): o estômago fica na cavidade abdominal, revestido por peritônio; sua camada externa é a serosa (conjuntivo frouxo coberto por mesotélio), não adventícia.",
    tip: "Estômago: mucosa com epitélio cilíndrico simples e fovéolas, muscular em três camadas e serosa por fora.",
    reference: 'JUNQUEIRA, L. U.; CARNEIRO, J. Histologia Básica – Texto e Atlas. 13. Ed. Rio de Janeiro: Guanabara Koogan, 2017.',
    tags: ['histologia', 'gastroenterologia']
  },
  {
    id: 'tp2022-11',
    module: 'Ciências Básicas',
    text: 'Mulher de 55 anos foi passear em um sítio e, durante uma caminhada pelo lugar, foi picada por uma vespa. Logo apresentou coceira, vermelhidão e inchaço local. Após 20 minutos da picada, chegou ao hospital mais próximo com edema de glote, teve choque anafilático e foi a óbito. A paciente desenvolveu uma hipersensibilidade do tipo I, que envolve o mecanismo imunológico por participação de anticorpos. O mecanismo imunológico da hipersensibilidade tipo I ocorre quando:',
    options: [
      '(A) Anticorpos IgG e IgM são ativados pelo alérgeno, induzindo a ativação de mastócitos que vão degranular leucotrienos e prostaglandinas.',
      '(B) A entrada do alérgeno na mucosa induz a ativação de LTh1 e através da ação de citocinas ativam os ceratinócitos, com recrutamento de células monocíticas que degranulam substâncias tóxicas.',
      '(C) O alérgeno no local da picada ativa LTh1 e libera TNF, induzindo a formação do granuloma caracterizado por células epitelioides.',
      '(D) O alérgeno na mucosa sofre ligação cruzada com os anticorpos IgE nos receptores de mastócitos que degranulam histamina imediatamente.'
    ],
    correctAnswer: 3,
    explanation: 'A hipersensibilidade tipo I (imediata) ocorre pela ligação cruzada de antígenos com IgE fixada em mastócitos, liberando mediadores como a histamina.',
    commentary: 'A hipersensibilidade tipo I tem relação com a participação de anticorpos do tipo IgE. Na fase de ativação, o alérgeno faz ligação cruzada com a IgE pré-formada na superfície de mastócitos, induzindo a degranulação imediata de histamina e outros mediadores, podendo levar ao choque anafilático em minutos.',
    reference: 'ABBAS, Abul K. et al. Imunologia Básica: Funções e Distúrbios do Sistema Imunológico. Elsevier. ROITT, Ivan Maurice. Imunologia. Manole, 2003.',
    tags: ['imunologia', 'alergologia']
  },
  {
    id: 'tp2022-12',
    module: 'Ciências Básicas',
    text: 'Homem de 68 anos, hipertenso e dislipidêmico, há vários anos em tratamento, apresenta-se na clínica com queixa de piora de dispneia agora e aos pequenos esforços há várias semanas, e inchaço nos pés ao final do dia. Tem tosse noturna e, ultimamente, dificuldade para dormir, necessitando apoiar-se em 2 traveissoiros, acordando à noite, às vezes, com falta de ar, que melhora ao se sentar com as pernas para fora da cama. Em análises post mortem, observam-se alterações histopatológicas no miocárdio, assim como alterações estruturais e funcionais no ventrículo esquerdo, responsáveis pela insuficiência cardíaca. Identifique a melhor descrição das alterações encontradas na insuficiência cardíaca.',
    image: '/images/tp2022-12.webp',
    options: [
      '(A) Hipertrofia dos miócitos, em decorrência do aumento da síntese de proteínas contráteis, com intuito de mecanismo adaptativo para compensar a demanda aumentada e normalizar o estresse parietal.',
      '(B) Expansão da matriz extracelular no miocárdio, constituída pela fibrose intersticial e acúmulo de colágeno entre os cardiomiócitos, devido à ação de miofibroblastos sob a influência de vários hormônios, como angiotensina II e aldosterona.',
      '(C) Fibroblastos entre os miócitos, aumentando a expansão da matriz extracelular com aumento da síntese de colágeno e da força contrátil do miocárdio.',
      '(D) Fibrose intersticial devido ao acúmulo de colágeno entre os cardiomiócitos, estimulado pela liberação de peptídeo natriurético em resposta a aumento de volume e pressão intraventricular, presente na insuficiência cardíaca.'
    ],
    correctAnswer: 1,
    explanation: 'O remodelamento cardíaco na IC envolve fibrose intersticial mediada por miofibroblastos sob estímulo de AGT II e aldosterona.',
    commentary: 'O remodelamento ventricular na insuficiência cardíaca inclui a expansão da matriz extracelular com fibrose intersticial. Isso ocorre devido à ativação de miofibroblastos estimulados por hormônios como angiotensina II, aldosterona, endotelinas e citocinas inflamatórias. O peptídeo natriurético tem efeito oposto (antifibrótico).',
    reference: 'Pontes, M.R.N. & Leães, P.E. Remodelamento Ventricular: dos mecanismos moleculares e celulares ao tratamento. Revista da Sociedade de Cardiologia do RS, 2004.',
    tags: ['patologia', 'cardiologia', 'fisiopatologia']
  },
  {
    id: 'tp2022-13',
    module: 'Ciências Básicas',
    text: 'Mulher de 36 anos procura o médico com queixa de fraqueza, anorexia e perda de peso nos últimos meses. Relata que apresentou nos últimos dias quadro de síncope e entre as outras vezes que percebeu que iria desmaiar, usou sal de cozinha na boca, com melhora. Ao exame físico: pressão arterial deitada 90/60mmHg e sentada 80/50mmHg; paciente emagrecida, hidratada, porém chama a atenção a hiperpigmentação das mãos, braços, face e pescoço. A paciente relata que a cicatriz da cesárea também se tornou mais evidente. Exames laboratoriais: o hemograma apresentou parâmetros normais, porém, observou-se hiponatremia e hipercalemia. Diante do quadro apresentado, suspeitou-se de hipocortisolismo. A doença associada a essa suspeita afeta diretamente a região:',
    options: [
      '(A) do córtex da adrenal bilateralmente',
      '(B) da hipófise anterior',
      '(C) do hipotálamo',
      '(D) da medula da adrenal, região central da glândula'
    ],
    correctAnswer: 0,
    explanation: 'A Doença de Addison (insuficiência adrenal primária) cursa com hiperpigmentação por excesso de ACTH e distúrbios eletrolíticos por falta de mineralocorticoides.',
    commentary: 'Trata-se de Insuficiência de adrenais primária (Doença de Addison). A hiperpigmentação ocorre porque o ACTH elevado (por falta de feedback do cortisol) estimula os melanócitos. A hiponatremia e hipercalemia decorrem da falta de aldosterona, produzida na camada glomerular do córtex da adrenal. O cortisol é produzido na camada fasciculada do córtex.',
    reference: 'VILLAR, Lucio. Endocrinologia clínica. 6.ed. Rio de Janeiro: Guanabara Koogan, 2017.',
    tags: ['endocrinologia', 'fisiologia']
  },
  {
    id: 'tp2022-14',
    module: 'Ciências Básicas',
    text: 'Ao analisar uma angiografia de um paciente de 55 anos do sexo masculino, foi observada uma obstrução do ramo circunflexo da artéria coronária esquerda. Essa obstrução pode afetar o sistema de condução do miocárdio?',
    options: [
      '(A) Sim, pois a irrigação do nó atrioventricular, responsável pelo sistema de condução do miocárdio, é feita pelo ramo para o nó sinusal, proveniente da artéria coronária esquerda.',
      '(B) Não, pois a irrigação do nó sinoatrial, responsável pelo sistema de condução do miocárdio, é feita pelo ramo para o nó sinoatrial, proveniente da artéria coronária direita.',
      '(C) Não, pois a irrigação do nó sinusal, responsável pelo sistema de condução do miocárdio, é feita pelo ramo para o nó atrioventricular, proveniente do ramo interventricular posterior da artéria coronária direita.',
      '(D) Sim, pois a irrigação do nó sinoatrial, responsável pelo sistema de condução do miocárdio, é feita pelo ramo para o nó sinoatrial, proveniente da artéria coronária esquerda.'
    ],
    correctAnswer: 1,
    explanation: "O nó sinoatrial é o marca-passo natural do coração. A artéria do nó sinoatrial nasce, na maioria das pessoas (cerca de 60%), da artéria coronária direita; o nó atrioventricular também costuma ser irrigado pela coronária direita, por um ramo que surge perto da origem da artéria interventricular posterior, nos corações de dominância direita.\n\nNesse padrão mais comum, a obstrução do ramo circunflexo da coronária esquerda não compromete o sistema de condução. É esse padrão anatômico que a banca cobra, e por isso a resposta é B.",
    commentary: "AV irrigado pelo ramo do nó sinusal vindo da esquerda (A): mistura os dois nós; o nó AV recebe a artéria do nó atrioventricular, e não a do nó sinusal, e no padrão comum ela vem da coronária direita.\n\nNó sinusal irrigado pelo ramo do nó AV (C): inverte as estruturas; o nó sinusal tem sua própria artéria, que não é ramo da interventricular posterior.\n\nArtéria do nó sinoatrial vinda da coronária esquerda (D): isso acontece em uma minoria das pessoas (pelo circunflexo); no padrão mais frequente ela nasce da coronária direita.",
    tip: "Artéria do nó sinusal e artéria do nó AV vêm, na maioria das pessoas, da coronária direita.",
    reference: 'MOORE, K. L.; DALLEY, A. F.; AGUR, A. M. R. Moore anatomia orientada para a clínica. 7. ed. Rio de Janeiro: Guanabara Koogan, 2014.',
    tags: ['anatomia', 'cardiologia']
  },
  {
    id: 'tp2022-15',
    module: 'Ciências Básicas',
    text: 'A imagem a seguir é referente a biópsia cutânea de paciente do sexo masculino, 51 anos, que apresenta no tórax múltiplas lesões maculares, hipopigmentadas, acompanhadas de rarefação de pelos e perda de sensibilidade. Detecção precoce e tratamento adequado têm papel fundamental na prevenção de incapacidades provocadas por esta doença. O agente etiológico e a respectiva patologia são:',
    image: '/images/tp2022-15.webp',
    options: [
      '(A) Mycobacterium tuberculosis; Tuberculose',
      '(B) Paracoccidioides brasiliensis; Paracoccidioidomicose',
      '(C) Leishmania braziliensis; Leishmaniose tegumentar',
      '(D) Mycobacterium Leprae; Hanseníase'
    ],
    correctAnswer: 3,
    explanation: "Manchas hipocrômicas com perda de sensibilidade e rarefação de pelos são o quadro clássico da hanseníase. Na biópsia corada por Ziehl-Neelsen aparecem bacilos álcool-ácido resistentes, o Mycobacterium leprae, que tem predileção por pele e nervos periféricos.\n\nO diagnóstico é principalmente clínico (lesão de pele com alteração de sensibilidade, nervo espessado ou baciloscopia positiva). O tratamento é a poliquimioterapia, oferecida gratuitamente pelo SUS, e o diagnóstico precoce evita incapacidades físicas, além de interromper a transmissão.",
    commentary: "Tuberculose (A): na pele aparece em formas como escrofuloderma e lúpus vulgar; não causa manchas hipocrômicas anestésicas.\n\nParacoccidioidomicose (B): é causada por fungo, com lesões ulceradas em mucosa oral (estomatite moriforme) e pulmão; na biópsia aparecem leveduras com brotamento múltiplo, não bacilos álcool-ácido resistentes.\n\nLeishmaniose tegumentar (C): causa úlcera de bordas elevadas e fundo granuloso; na biópsia veem-se formas amastigotas dentro de macrófagos, não bacilos.",
    tip: "Mancha hipocrômica com perda de sensibilidade + BAAR no Ziehl-Neelsen = hanseníase.",
    reference: 'Robbins & Cotran - Patologia - Bases Patológicas das Doenças, 9ª ed. Guia prático sobre a Hanseníase, MS, 2017.',
    tags: ['infectologia', 'dermatologia', 'microbiologia']
  },
  {
    id: 'tp2022-16',
    module: 'Ciências Básicas',
    text: 'Paciente de 23 anos, no fim do primeiro trimestre de gestação, apresenta sangramento pelo canal vaginal e relata dor abdominal frequente e hiperêmese. O exame clínico apontou pré-eclâmpsia e, ao ultrassom, foram observados cistos foliculares de 15 a 20mm em ambos os ovários. O saco gestacional apresentava modificações morfológicas importantes, com a presença de múltiplos cistos e o embrião não era visível. Suspeitando-se de doença trofoblástica gestacional, foi solicitada a dosagem sérica de gonadotrofina coriônica humana. A concentração apresentou níveis muito superiores ao normal, indicando o diagnóstico de mola hidatiforme. O anexo embrionário responsável pela condição detectada é:',
    options: [
      '(A) Alantoide',
      '(B) Cordão umbilical',
      '(C) Placenta',
      '(D) Saco vitelino'
    ],
    correctAnswer: 2,
    explanation: "A mola hidatiforme é uma doença trofoblástica gestacional: o trofoblasto prolifera de forma exagerada e as vilosidades coriônicas ficam edemaciadas, formando as vesículas vistas no ultrassom. Como o sinciciotrofoblasto produz hCG, os níveis do hormônio ficam muito acima do esperado, o que explica a hiperêmese, os cistos ovarianos (cistos tecaluteínicos, estimulados pelo hCG) e a pré-eclâmpsia antes de 20 semanas.\n\nO trofoblasto e as vilosidades coriônicas formam a parte fetal da placenta; por isso o anexo embrionário envolvido é a placenta. Na mola completa não há embrião, como no caso.",
    commentary: "Alantoide (A): participa da formação dos vasos umbilicais e dá origem ao úraco; não é tecido trofoblástico.\n\nCordão umbilical (B): conecta embrião e placenta e contém os vasos umbilicais; não produz hCG nem forma as vesículas da mola.\n\nSaco vitelino (D): participa da nutrição inicial, da hematopoese precoce e da origem das células germinativas; está ligado a tumores que produzem alfafetoproteína, não à mola.",
    tip: "Mola hidatiforme = proliferação do trofoblasto (placenta) + hCG muito alto + cistos tecaluteínicos.",
    reference: 'Garner EI et al. Gestational trophoblastic disease. Clin Obstet Gynecol. 2007.',
    tags: ['embriologia', 'obstetrícia']
  },
  {
    id: 'tp2022-17',
    module: 'Ciências Básicas',
    text: 'Paciente com quadro de Doença Encefálica Vascular (AVC) apresentando dificuldade de movimentar o membro superior direito, fala pastosa e desvio da comissura labial à direita. Indique a alternativa que corresponde ao nome do vaso, o ramo e a sua área irrigada, respectivamente:',
    options: [
      '(A) Cerebral média esquerda / Artéria carótida interna esquerda / Face superolateral do giro pré-central.',
      '(B) Cerebral média direita / Artéria carótida interna direita / Face superolateral do giro pós-central.',
      '(C) Cerebral anterior esquerda / Artéria carótida interna esquerda / Face superolateral do giro pré-central.',
      '(D) Cerebral anterior direita / Artéria carótida interna esquerda / Face medial do giro pós-central.'
    ],
    correctAnswer: 0,
    explanation: 'Déficit motor à direita indica lesão no hemisfério esquerdo. A face superolateral do giro pré-central (área motora) é irrigada pela cerebral média.',
    commentary: 'O déficit motor no lado direito do corpo indica uma lesão no hemisfério cerebral esquerdo devido à decussação das pirâmides. A dificuldade de fala e fraqueza na face e membro superior sugerem acometimento da face superolateral do giro pré-central, território da artéria cerebral média esquerda (ramo da carótida interna).',
    reference: 'MOORE, K. L. Anatomia orientada para a clínica. 7. ed. Rio de Janeiro: Guanabara Koogan, 2014.',
    tags: ['anatomia', 'neurologia']
  },
  {
    id: 'tp2022-18',
    module: 'Ciências Básicas',
    text: 'Criança de 4 anos é atendida no pronto-socorro com história de um dia de febre alta e cefaleia intensa. Ao exame, nota-se rigidez de nuca. A amostra colhida do líquor apresenta conteúdo turvo e na bacterioscopia visualizam-se diplococos Gram-negativos. O provável patógeno é:',
    options: [
      '(A) Streptococcus pneumoniae',
      '(B) Staphylococcus aureus',
      '(C) Neisseria meningitidis',
      '(D) Haemophilus influenzae'
    ],
    correctAnswer: 2,
    explanation: "Febre alta, cefaleia intensa e rigidez de nuca com líquor turvo indicam meningite bacteriana. A bacterioscopia com diplococos Gram-negativos aponta para Neisseria meningitidis, o meningococo, que também pode causar meningococcemia com petéquias e choque.\n\nNa prática: iniciar ceftriaxona sem atraso, notificar imediatamente e fazer quimioprofilaxia dos contatos próximos (rifampicina é a opção mais usada).",
    commentary: "Streptococcus pneumoniae (A): também causa meningite, mas aparece como diplococo Gram-positivo (lanceolado).\n\nStaphylococcus aureus (B): é coco Gram-positivo em cachos e é causa rara de meningite fora de contexto de neurocirurgia, trauma ou derivação.\n\nHaemophilus influenzae (D): causa meningite em crianças pequenas (hoje rara com a vacina), mas é cocobacilo Gram-negativo, não diplococo.",
    tip: "Líquor com diplococo Gram-negativo = meningococo; Gram-positivo = pneumococo; cocobacilo Gram-negativo = Haemophilus.",
    reference: 'JAWETZ, E. et al. Microbiologia médica. 21. ed. Rio de Janeiro: Guanabara Koogan, 2000.',
    tags: ['microbiologia', 'pediatria', 'infectologia']
  },
  {
    id: 'tp2022-19',
    module: 'Ciências Básicas',
    text: 'Homem de 55 anos, em situação de rua e etilista, foi internado devido a pneumonia multilobar grave. Desenvolveu quadro de insuficiência respiratória grave. Foi solicitada uma baciloscopia de escarro, que revelou bastonetes gram-negativos encapsulados. O organismo é fermentador de lactose em ágar de MacConkey e é muito mucoide. O agente etiológico mais provável é:',
    options: [
      '(A) Nocardia abscessos',
      '(B) Clostridium difficile',
      '(C) Streptococcus pneumoniae',
      '(D) Klebsiella pneumoniae'
    ],
    correctAnswer: 3,
    explanation: 'Klebsiella pneumoniae é um bacilo Gram-negativo encapsulado, fermentador de lactose, associado a pneumonias graves em etilistas.',
    commentary: 'A Klebsiella pneumoniae (família Enterobacteriaceae) é um bastonete Gram-negativo, lactose positivo e apresenta uma cápsula proeminente que resulta em colônias muito mucoides. O S. pneumoniae é Gram-positivo. Clostridium é anaeróbio.',
    reference: 'TRABULSI, L. R.; ALTERTHUM, F. (Ed.). Microbiologia. 5. ed. São Paulo: Atheneu, 2010.',
    tags: ['microbiologia', 'pneumologia', 'infectologia']
  },
  {
    id: 'tp2022-20',
    module: 'Ciências Básicas',
    text: 'Caminhoneiro, 42 anos, comparece ao serviço de saúde referindo febre alta (39ºC) precedida de calafrios e astenia há 3 dias. Esteve em várias localidades na BR 364 (Cuiabá-Porto Velho) por 45 dias. Relata que há 30 dias teve quadro febril semelhante e recebeu diagnóstico de malária, sendo tratado apenas com cloroquina. Pode-se afirmar que:',
    options: [
      '(A) Independentemente da espécie de Plasmodium que tenha causado o primeiro episódio, não existe a possibilidade de tratar-se de uma recaída.',
      '(B) Como teve diagnóstico de malária durante a viagem e tendo sido tratado com cloroquina, dificilmente a doença atual é a mesma.',
      '(C) Dependendo da espécie de Plasmodium envolvida no primeiro episódio, pode estar ocorrendo uma recaída ou reinfecção.',
      '(D) Pode-se afastar a possibilidade de recaída mesmo que o primeiro episódio tenha sido causado por Plasmodium vivax, visto que a maioria das cepas desse parasita é sensível à cloroquina.'
    ],
    correctAnswer: 2,
    explanation: 'O Plasmodium vivax e P. ovale possuem formas dormentes (hipnozoítos) no fígado que causam recaídas se não tratados com primaquina/tafenoquina.',
    commentary: 'P. vivax e P. ovale originam hipnozoítos no fígado. A cloroquina trata apenas o ciclo sanguíneo (esquizogonia). Sem o uso de primaquina ou tafenoquina para erradicar as formas hepáticas latentes, o paciente pode apresentar recaídas tardias.',
    reference: 'Neves, D. P. Parasitologia Humana. 13ª Edição. Guia de Tratamento da Malária no Brasil, MS, 2019.',
    tags: ['parasitologia', 'infectologia']
  },
  {
    id: 'tp2025-1',
    module: 'Ciências Básicas',
    text: 'Homem negro, com 50 anos de idade, sem comorbidades, foi admitido no Pronto-Socorro com queixas de febre aferida, dor na perna esquerda associada a hiperemia local e linfadenite inguinal ipsilateral. Ao exame físico, PA 90x60mmHg, FC 104bpm e tempo de enchimento capilar de 4s. Dentre os exames, foi coletada gasometria arterial, que mostrou: pH 7,25; HCO3 16mEq/L; PaCO2 36mmHg; PaO2 87mmHg. Exames laboratoriais: Na 140mEq/L; Cl 101mEq/L; Ca 9,5mEq/L; creatinina 1,1mg/dL e ureia 40mg/dL). Qual o distúrbio acidobásico apresentado por este paciente e a provável condição clínica associada?',
    options: [
      '(A) Acidose mista hiperclorêmica, devido ao quadro de insuficiência renal em fase inicial.',
      '(B) Acidose metabólica com ânion-gap aumentado, devido ao processo infeccioso e insuficiência renal.',
      '(C) Acidose respiratória e acidose metabólica com ânion-gap normal, devido ao processo infeccioso.',
      '(D) Acidose metabólica normoclorêmica e acidose respiratória, devido ao processo infeccioso.'
    ],
    correctAnswer: 3,
    explanation: 'O paciente apresenta acidose mista (metabólica e respiratória). O ânion-gap de 23 está aumentado (tipo normoclorêmica), sugerindo acidose lática secundária a processo infeccioso (sepse).',
    commentary: 'O pH baixo (7,25) define a acidose. O HCO₃⁻ de 16 indica acidose metabólica. Pela fórmula de Winter, a PaCO₂ esperada seria 30-34 mmHg; como está em 36, há também acidose respiratória. O ânion-gap é calculado como 140 - (101 + 16) = 23 (elevado), o que caracteriza acidose metabólica normoclorêmica.',
    reference: 'Medicina intensiva: abordagem prática. Azevedo et al., 5. ed. Barueri, SP: Manole, 2022.',
    tags: ['fisiologia', 'nefrologia', 'parâmetros clínicos']
  },
  {
    id: 'tp2025-2',
    module: 'Ciências Básicas',
    text: 'Homem de 45 anos, previamente hígido, foi admitido no pronto-socorro com febre alta, cefaleia intensa, rigidez de nuca e rebaixamento do nível de consciência. A tomografia de crânio sem contraste não mostrou sinais de hipertensão intracraniana. A punção lombar foi realizada, e os achados do líquor foram: leucócitos = 1.500/mm³ (90% polimorfonucleares), proteínas = 250mg/dL, glicose = 20mg/dL (glicemia plasmática = 100mg/dL). Assinale a alternativa que propõe o diagnóstico correto:',
    options: [
      '(A) Meningite tuberculosa',
      '(B) Meningite viral',
      '(C) Meningite bacteriana',
      '(D) Encefalite herpética'
    ],
    correctAnswer: 2,
    explanation: 'A pleocitose volumosa com predomínio de polimorfonucleares (neutrófilos), hipoglicorraquia acentuada e hiperproteinorraquia são típicas de meningite bacteriana.',
    commentary: 'Os achados do líquor são clássicos de infecção bacteriana aguda: leucocitose acentuada (> 1000/mm³) com predomínio polimorfonuclear, glicose muito reduzida (líquor/plasma < 0,4) e proteínas significativamente elevadas.',
    reference: 'BURTIS, C. A. et al. TIETZ Fundamentos de Química Clínica. 7. ed. Rio de Janeiro: Elsevier, 2016.',
    tags: ['microbiologia', 'infectologia', 'neurologia']
  },
  {
    id: 'tp2025-3',
    module: 'Ciências Básicas',
    text: 'Paciente com 68 anos, ex-tabagista, apresenta-se com dispneia progressiva, dor torácica pleurítica e perda de peso inexplicada nos últimos meses. O exame físico revela diminuição do murmúrio vesicular na base pulmonar esquerda, com macicez à percussão desta área. A radiografia de tórax mostra grande derrame pleural esquerdo. Realiza-se toracocentese diagnóstica, com os seguintes resultados:\nProteína do líquido pleural: 5,2g/dL\nProteína sérica: 6,8g/dL\nLDH do líquido pleural: 450U/L\nLDH sérico: 200U/L\nQual das seguintes opções descreve corretamente a classificação do derrame pleural, com base nos critérios de Light?',
    options: [
      '(A) Exsudato, pois a razão LDH líquido pleural/LDH sérico é superior a 0,6.',
      '(B) Transudato, pois a razão proteína líquido pleural/proteína sérica é inferior a 0,5.',
      '(C) Transudato, pois o LDH no líquido pleural é inferior a 2/3 do limite superior do LDH sérico.',
      '(D) Exsudato, pois a razão proteína líquido pleural/proteína sérica é inferior a 0,5.'
    ],
    correctAnswer: 0,
    explanation: 'Qualquer um dos critérios de Light preenchidos classifica o líquido como exsudato: razão de proteínas > 0,5, razão de LDH > 0,6, ou LDH pleural > 2/3 do limite sérico superior. Aqui, a razão de LDH é 450/200 = 2,25 (> 0,6).',
    commentary: 'A divisão clínica fundamental de derrames pleurais é feita via critérios de Light. A razão de proteínas pleural/sérica foi de 5,2/6,8 = 0,76 (> 0,5) e a de LDH foi 450/200 = 2,25 (> 0,6), firmando o diagnóstico de exsudato.',
    reference: 'Light RW et al. Pleural effusions: the diagnostic separation of transudates and exudates. Ann Intern Med. 1972.',
    tags: ['pneumologia', 'bioquímica']
  },
  {
    id: 'tp2025-4',
    module: 'Ciências Básicas',
    text: 'Um paciente foi admitido no hospital com febre alta, calafrios e dor abdominal intensa há 48 horas. O hemograma revelou leucocitose (glóbulos brancos = 27.500/mm3) com predomínio de neutrófilos segmentados e aumento de bastonetes. Assinale a alternativa que apresenta a interpretação correta dos achados laboratoriais:',
    options: [
      '(A) Infecção viral, pois há predomínio de neutrófilos.',
      '(B) Infecção bacteriana aguda, devido ao desvio à esquerda da série branca.',
      '(C) Leucemia, caracterizada pela leucocitose com neutrofilia.',
      '(D) Reação alégica e, consequentemente, aumento do número de bastonetes.'
    ],
    correctAnswer: 1,
    explanation: 'O desvio à esquerda (aumento de formas jovens de neutrófilos, como bastonetes) aliado à leucocitose acentuada indica uma forte reação mielóide a um processo infeccioso bacteriano agudo.',
    commentary: 'A resposta imune medular a uma infecção bacteriana aguda mobiliza o "pool" de reserva de neutrófilos da medula óssea, liberando bastonetes na circulação (desvio à esquerda). Infecções virais tipicamente cursam com linfocitose.',
    reference: 'Hoffbrand, A. V., & Moss, P. A. H. (2023). Hematology: A Pathophysiologic Approach. Elsevier.',
    tags: ['hematologia', 'infectologia']
  },
  {
    id: 'tp2025-5',
    module: 'Ciências Básicas',
    text: 'Um paciente é encaminhado ao ambulatório secundário para investigação de tendência a sangramentos após pequenos traumas. Os exames laboratoriais revelam um aumento no Tempo de Protrombina (TP) e no Tempo de Tromboplastina Parcial Ativada (TTPa). Com base nesses achados, qual das condições abaixo pode justificar essa alteração na cascata da coagulação?',
    options: [
      '(A) Deficiência do Fator VIII, levando à hemofilia A.',
      '(B) Deficiência do Fator XIII, impedindo a estabilização da fibrina.',
      '(C) Deficiência do Fator VII, comprometendo exclusivamente a via extrínseca.',
      '(D) Deficiência do Fator X, afetando tanto a via intrínseca quanto a extrínseca.'
    ],
    correctAnswer: 3,
    explanation: 'O Fator X é o ponto de convergência de ambas as vias (intrínseca e extrínseca) na via comum. Sua deficiência prolonga simultaneamente o TP e o TTPa.',
    commentary: 'O TP avalia a via extrínseca e comum (fatores VII, X, V, II, I); o TTPa avalia a via intrínseca e comum (XII, XI, IX, VIII, X, V, II, I). Como o Fator X faz parte da via comum, sua deficiência altera ambos os testes.',
    reference: 'Guyton, A. C., & Hall, J. E. (2021). Tratado de Fisiologia Médica. 14ª edição. Elsevier.',
    tags: ['fisiologia', 'hematologia', 'patologia']
  },
  {
    id: 'tp2025-6',
    module: 'Ciências Básicas',
    text: 'Um paciente de 70 anos, é encaminhado para atendimento de emergência com quadro de hipotensão severa (PA 80/50mmHg), taquicardia (120bpm) e extremidades frias, devido ao uso excessivo de diurético. Com base na situação clínica descrita, assinale a alternativa que melhor explica os mecanismos compensatórios associados aos sintomas do paciente:',
    options: [
      '(A) Maior liberação de substâncias vasodilatadoras para aumentar a perfusão periférica.',
      '(B) Aumento da liberação de catecolaminas para a redistribuição do sangue para os órgãos vitais.',
      '(C) Inibição do sistema renina-angiotensina-aldosterona para retenção de sódio e água pelos rins.',
      '(D) Aumento nas concentrações plasmáticas de peptídeo natriurético atrial para reduzir a volemia.'
    ],
    correctAnswer: 1,
    explanation: 'A perda de volume ativa o sistema nervoso simpático, que libera catecolaminas (adrenalina e noradrenalina) para aumentar a frequência cardíaca (taquicardia), contratilidade e promover vasoconstrição periférica, redistribuindo o sangue.',
    commentary: 'A redução acentuada de volemia (choque hipovolêmico por diuréticos) é detectada por barorreferência, estimulando o tônus simpático e a liberação de catecolaminas. Esse mecanismo gera vasoconstrição (extremidades frias) e taquicardia adaptativa.',
    reference: 'HALL, J. E. Guyton e Hall tratado de fisiologia médica. 13.ed. Rio de Janeiro: Elsevier, 2017.',
    tags: ['fisiologia', 'cardiologia', 'emergência']
  },
  {
    id: 'tp2025-7',
    module: 'Ciências Básicas',
    text: 'Um homem de 38 anos, pedreiro, procura a urgência com dor lombar há uma semana, irradiando para membro inferior direito. Refere fraqueza na perna e dificuldade para estender a perna. Ao exame clínico apresentou força reduzida no iliopsoas (4/5). Exames mostram compressão da raiz nervosa de L1 à direita. Qual reflexo tendinoso deve ser pesquisado para avaliação da queixa motora e relacionado ao resultado dos exames complementares?',
    options: [
      '(A) Reflexo patelar, pois envolve as raízes L2-L4.',
      '(B) Reflexo aquileu, pois avalia a função de L1-L2.',
      '(C) Reflexo bicipital, pois está relacionado às raízes lombares.',
      '(D) Reflexo adutor, pois envolve as raízes L2-L4.'
    ],
    correctAnswer: 0,
    explanation: 'O reflexo patelar (L2-L4) avalia indiretamente a extensão da perna, intimamente associada às raízes lombares altas que podem sofrer repercussão da compressão em L1.',
    commentary: 'Embora a compressão seja especificamente na raiz de L1, o complexo do quadríceps e a extensão da perna integram as raízes de L2 a L4. O reflexo patelar é a melhor opção semiológica das listadas para avaliar essa porção motora.',
    reference: 'HALL, John E. Guyton & Hall Fundamentos de Fisiologia. 14. ed. GEN Guanabara Koogan, 2023.',
    tags: ['fisiologia', 'neurologia', 'ortopedia']
  },
  {
    id: 'tp2025-8',
    module: 'Ciências Básicas',
    text: 'Ao ser submetido a terapia de reperfusão de oclusão de artéria vertebral com alteplase, um paciente teve melhora dos sintomas iniciais (disartria, nistagmos e vertigem), porém evoluiu com sonolência excessiva em seguida. Diante de uma nova tomografia sem hiperdensidades anormais, o paciente foi submetido a arteriografia de urgência, que evidenciou que o trombo “migrara” em relação a sua posição original. Caracterize corretamente o caso.',
    options: [
      '(A) Trata-se de uma oclusão da artéria cerebral posterior, onde há isquemia de núcleos da rafe e locus ceruleus.',
      '(B) Trata-se de uma oclusão da artéria basilar, onde há isquemia dos colículos superiores e tálamo.',
      '(C) Trata-se de uma oclusão da artéria basilar, onde há isquemia de núcleos da rafe e locus ceruleus.',
      '(D) Trata-se de uma oclusão da artéria cerebral posterior, onde há isquemia dos colículos superiores e tálamo.'
    ],
    correctAnswer: 2,
    explanation: 'O trombo migrou da artéria vertebral para a artéria basilar (via perfusional comum posterior), causando isquemia das estruturas responsáveis pelo alerta (SRAA - núcleos da rafe e locus ceruleus).',
    commentary: 'A migração do trombo em direção cranial obstrui a artéria basilar. A basilar irriga o tronco cerebral superior, onde estão o locus ceruleus e núcleos da rafe, essenciais para o estado desperto (Sistema Reticular Ativador Ascendente).',
    reference: 'Blumenfeld, Hal. Neuroanatomy Through Clinical Cases. 3rd ed., Oxford University Press, 2021.',
    tags: ['anatomia', 'neurologia', 'emergência']
  },
  {
    id: 'tp2025-9',
    module: 'Ciências Básicas',
    text: 'Um paciente de 68 anos é admitido no setor de Urgência e Emergência com dor intensa, edema e aumento da temperatura na panturrilha direita, com evolução há dois dias. Ele foi submetido a uma cirurgia ortopédica há uma semana e permaneceu em repouso no leito, desde então. O exame físico revela assimetria de volume entre os membros inferiores e a ultrassonografia Doppler confirma a presença de trombose venosa profunda (TVP).\nCom base na Tríade de Virchow, assinale a alternativa que indica a alteração fisiológica determinante para a gênese do trombo nesse paciente e o mecanismo subjacente:',
    options: [
      '(A) Lesão endotelial por microtraumas cirúrgicos, ativando diretamente a via extrínseca da coagulação e desencadeando a formação do trombo.',
      '(B) Hipercoagulabilidade induzida pelo estado inflamatório pós-cirúrgico, resultando no aumento da síntese hepática de fatores pró-coagulantes.',
      '(C) Estase venosa causada pela imobilização prolongada, reduzindo o fluxo sanguíneo e favorecendo a ativação das plaquetas e da cascata de coagulação.',
      '(D) Aumento da pressão venosa na panturrilha devido à resposta inflamatória, promovendo extravasamento plasmático e edema, levando à ativação da hemostasia primária.'
    ],
    correctAnswer: 2,
    explanation: 'A imobilização no leito após cirurgia acarreta estase venosa profunda (Tríade de Virchow - alteração no fluxo), o que retarda a lavagem de fatores de coagulação e gera ativação plaquetária local.',
    commentary: 'A Tríade de Virchow compreende: lesão endotelial, estase venosa e hipercoagulabilidade. O repouso absoluto reduz a bomba muscular da panturrilha, levando a estase profunda (mecanismo principal da TVP pós-operatória de imobilizados).',
    reference: 'NORRIS, Tommie L. Porth - Fisiopatologia. 10. ed. Rio de Janeiro: Guanabara Koogan, 2021.',
    tags: ['fisiologia', 'angiologia', 'cirurgia']
  },
  {
    id: 'tp2025-10',
    module: 'Ciências Básicas',
    text: 'Um homem de 58 anos, hipertenso crônico, deu entrada na emergência após queda de motocicleta. Apresenta-se com rebaixamento do nível de consciência e sinais de hipertensão intracraniana. Durante o monitoramento, sua pressão arterial média (PAM) foi de 80mmHg e a pressão intracraniana (PIC) estimada em 35mmHg. Considerando os princípios fisiológicos da hemodinâmica cerebral, qual é a conduta mais adequada para preservar a pressão de perfusão cerebral (PPC) e evitar isquemia?',
    options: [
      '(A) Reduzir a ventilação mecânica para aumentar o CO₂ e promover vasodilatação cerebral.',
      '(B) Administrar anti-hipertensivos para reduzir a PAM e proteger contra possíveis hemorragias.',
      '(C) Aumentar a sedação para reduzir o metabolismo cerebral e, assim, elevar a PIC compensatoriamente.',
      '(D) Iniciar infusão de manitol ou solução salina hipertônica para reduzir a PIC.'
    ],
    correctAnswer: 3,
    explanation: 'A PPC é calculada pela diferença entre PAM e PIC (PPC = PAM - PIC). Com PAM de 80 e PIC de 35, a PPC resulta em 45 mmHg, o que é crítico (< 50-60). A conduta urgente de escolha é usar manitol ou solução salina hipertônica para drenar o edema cerebral e abaixar a PIC.',
    commentary: 'Utiliza-se terapia de osmose ativa (manitol ou salina hipertônica) para criar gradiente absoluto e reduzir o volume hídrico cerebral, diminuindo a PIC e reestabelecendo a pressão perfusional com segurança.',
    reference: 'GUYTON, Arthur C.; HALL, John E. Fisiologia médica. 14. ed. Rio de Janeiro: Elsevier, 2020.',
    tags: ['fisiologia', 'neurologia', 'emergência']
  },
  {
    id: 'tp2025-11',
    module: 'Ciências Básicas',
    text: 'Durante uma avaliação em um ambulatório secundário, um paciente realizou um exame de espirometria para investigar sintomas de dispneia e tosse crônica. O laudo evidenciou uma redução significativa no Volume Expiratório Forçado no primeiro segundo (VEF1) e uma razão VEF1/CVF abaixo do valor de referência. Com base nestes dados, qual é a principal conclusão sobre o padrão ventilatório identificado nelas exames?',
    options: [
      '(A) O exame sugere um padrão ventilatório obstrutivo, indicado pela redução do VEF1 e da razão VEF1/CVF.',
      '(B) O padrão restritivo se caracteriza pela redução proporcional do VEF1 e da Capacidade Vital Forçada (CVF), mantendo a razão VEF1/CVF normal ou elevada.',
      '(C) A redução significativa do VEF1 e da razão VEF1/CVF não é compatível com função pulmonar normal.',
      '(D) Embora o teste broncodilatador seja útil para confirmar reversibilidade em crises obstrutivas, os valores do exame já indicam o padrão obstrutivo.'
    ],
    correctAnswer: 0,
    explanation: 'A queda do Tiffeneau (VEF1/CVF) indica diretamente obstrução ao fluxo respiratório, reduzindo a velocidade de esvaziamento.',
    commentary: 'A espirometria confirma o padrão obstrutivo (como na asma ou DPOC) quando a relação VEF1/CVF cai abaixo de 0,70 ou do limite inferior da normalidade, o que sinaliza aumento de resistência aérea.',
    reference: 'WEST, J. B. Fisiologia Respiratória: Princípios Básicos. 11. ed. Rio de Janeiro: Elsevier, 2024.',
    tags: ['fisiologia', 'pneumologia']
  },
  {
    id: 'tp2025-12',
    module: 'Ciências Básicas',
    text: 'Maria, gestante de 32 anos, primigesta, com 32 semanas de gestação, chega ao hospital com cefaleia intensa, edema em membros inferiores e pressão arterial de 160/110mmHg. Refere escotomas e dor epigástrica nas últimas horas. Ao exame, apresenta proteinúria. A equipe médica inicia conduta emergencial para controle da pressão arterial. Assinale a alternativa que apresenta o tratamento farmacológico adequado para Maria e o correto mecanismo de ação do fármaco escolhido:',
    options: [
      '(A) Metildopa, um bloqueador de canais de cálcio capaz de reduzir o débito cardíaco e as contrações uterinas.',
      '(B) Hidralazina, um vasodilatador direto capaz de reduzir a resistência vascular periférica e a pressão arterial.',
      '(C) Losartana, um inibidor do sistema renina-angiotensina-aldosterona capaz de reduzir pré e pós-carga.',
      '(D) Hidroclorotiazida, um diurético de alça capaz de reduzir a volemia e a pressão arterial.'
    ],
    correctAnswer: 1,
    explanation: 'Em crises hipertensivas gestacionais (Eclâmpsia iminente), a hidralazina endovenosa atua como vasodilatador de ação direta nas arteríolas, reduzindo a RVP rapidamente.',
    commentary: 'A hidralazina é um fármaco de escolha para controle agudo da hipertensão severa na gestação. Agentes como Losartana (IECA/BRA) e diuréticos são contraindicados pelo risco de teratogênese e hipoperfusão placentária crônica.',
    reference: 'GOLAN, D. E. Princípios de farmacologia. VIII Diretriz Brasileira de Hipertensão. 2021.',
    tags: ['farmacologia', 'obstetrícia', 'emergência']
  },
  {
    id: 'tp2025-13',
    module: 'Ciências Básicas',
    text: 'Um paciente idoso de 60 anos, com histórico de hipertensão arterial, inicia o uso de captopril para controle da pressão arterial. Após algumas semanas de tratamento, ele relata o surgimento de tosse persistente. O médico explica que este é um efeito colateral comum do medicamento. Qual é o mecanismo responsável pela tosse persistente induzida pelo captopril?',
    options: [
      '(A) O captopril inibe a enzima conversora de angiotensina (ECA), o que resulta no acúmulo de bradicinina, um peptídeo que pode causar tosse.',
      '(B) O captopril aumenta a secreção de aldosterona, o que leva a um aumento da retenção de líquidos e contribui para a tosse persistente.',
      '(C) O captopril bloqueia os receptores de angiotensina II, impedindo a vasodilatação e causando irritação nas vias respiratórias, resultando em tosse.',
      '(D) O captopril reduz a secreção de renina, o que provoca a acumulação de sódio nas vias respiratórias e desencadeia a tosse como efeito colateral.'
    ],
    correctAnswer: 0,
    explanation: 'A cininase II é a mesma enzima que a ECA. Ao inibir a ECA, o captopril impede a degradação da bradicinina, cujo acúmulo nas vias aéreas superiores estimula receptores sensoriais e causa tosse seca.',
    commentary: 'O acúmulo de bradicinina e substância P ativa vias inflamatórias e estimula fibras C sensoriais do epitélio bronquial, resultando na clássica tosse induzida por IECAs.',
    reference: 'Goodman & Gilman: As Bases Farmacológicas da Terapêutica. 13ª ed. 2018.',
    tags: ['farmacologia', 'cardiologia']
  },
  {
    id: 'tp2025-14',
    module: 'Ciências Básicas',
    text: 'Um paciente de 59 anos, com histórico de hipertensão, apresenta sintomas de dificuldade para urinar e jato urinário fraco. Após avaliação, foi iniciado tratamento com mesilato de doxazosina. Qual efeito adverso comum deve ser monitorado?',
    options: [
      '(A) Diminuição da diurese',
      '(B) Aumento da pressão arterial',
      '(C) Hipotensão ortostática',
      '(D) Hiperplasia prostática benigna'
    ],
    correctAnswer: 2,
    explanation: 'Doxazosina é um antagonista seletivo dos receptores alfa-1 adrenérgicos que reduz a RVP, relaxando o esfíncter urinário, mas podendo induzir hipotensão ortostática (efeito de primeira dose).',
    commentary: 'Ao bloquear os receptores alfa-1 nos vasos sanguíneos, impede-se a vasoconstrição simpática reflexa quando o paciente se levanta, facilitando tonturas e síncope postural de regulação autonômica.',
    reference: 'Goodman & Gilman: As Bases Farmacológicas da Terapêutica. 13ª ed. 2018.',
    tags: ['farmacologia', 'urologia']
  },
  {
    id: 'tp2025-15',
    module: 'Ciências Básicas',
    text: 'Um paciente de 45 anos, previamente saudável, é encaminhado ao ambulatório por apresentar um nódulo indolor em região cervical, acompanhado de perda de peso inexplicada e fadiga. Exames laboratoriais revelam níveis elevados da proteína c-Myc. A biópsia do nódulo indica proliferação celular atípica. Qual o papel do gene c-Myc na oncogênese observada no paciente?',
    options: [
      '(A) O gene c-Myc é um marcador da resposta imune adaptativa contra células tumorais.',
      '(B) O gene c-Myc funciona como um supressor tumoral, regulando negativamente o ciclo celular.',
      '(C) O gene c-Myc promove a apoptose celular em resposta ao dano no DNA.',
      '(D) O gene c-Myc atua como um oncogene, impulsionando a proliferação celular descontrolada.'
    ],
    correctAnswer: 3,
    explanation: 'O gene c-Myc é um conhecido proto-oncogene codificador de fator de transcrição nuclear que induz crescimento e duplicação ativa das ciclinas, impulsionando proliferação celular irrestrita.',
    commentary: 'A hiperexpressão ou amplificação do gene c-Myc suprime transitoriamente fatores de parada do ciclo e amplifica promotores de crescimento autônomo, agindo como oncogene primário na proliferação de linfomas.',
    reference: 'Baluapuri, A. et al. Target gene-independent functions of MYC oncoproteins. Nat Rev Mol Cell Biol, 2020.',
    tags: ['genética', 'patologia', 'oncologia']
  },
  {
    id: 'tp2025-16',
    module: 'Ciências Básicas',
    text: 'Um paciente imunocomprometido é internado com quadro de sepse por bactéria gram-negativa. Durante a investigação clínica, nota-se deficiência na ativação da via alternativa do sistema do complemento. Com base nesse achado, qual das opções abaixo descreve corretamente uma das principais funções do sistema do complemento?',
    options: [
      '(A) A via clássica do complemento é ativada por endotoxinas bacterianas, promovendo a liberação de histamina por mastócitos.',
      '(B) A ativação das vias do complemento resulta na formação do complexo de ataque à membrana, responsável pela lise de células-alvo, especialmente bactérias gram-negativas.',
      '(C) A ativação do sistema do complemento, independentemente da via, leva à formação do complexo de ataque à membrana, cuja função é promover a fagocitose de antígenos circulantes.',
      '(D) A via alternativa do complemento é dependente da ligação entre antígenos e anticorpos, e por isso está ausente em indivíduos imunocomprometidos.'
    ],
    correctAnswer: 1,
    explanation: 'A via do complemento assembleia a cadeia de proteínas C5b-9 para formar o Complexo de Ataque à Membrana (MAC/CAM), cuja formação gera poros líticos celulares estruturais.',
    commentary: 'O MAC perfura diretamente bicamadas de fosfolipídeos. Bactérias Gram-negativas, por conterem parede externa mais delgada que Gram-positivas, são os alvos primários vulneráveis de lise por complemento.',
    reference: 'Abbas AK, Lichtman AH, Pillai S. Imunologia Celular e Molecular. 10ª ed. Elsevier, 2021.',
    tags: ['imunologia', 'infectologia', 'microbiologia']
  },
  {
    id: 'tp2025-17',
    module: 'Ciências Básicas',
    text: 'Pacientes em unidades de terapia intensiva frequentemente apresentam quadros inflamatórios exacerbados, associados a altos níveis de espécies reativas de oxigênio (EROs). Essas moléculas podem danificar macromoléculas celulares e contribuir para a progressão de diversas patologias. Considerando o papel das EROs no metabolismo celular, qual das seguintes alternativas representa um dos principais mecanismos de defesa contra esses compostos?',
    options: [
      '(A) A degradação do NADPH, essencial para a ativação da via da pentose-fosfato e a produção de glutationa reduzida.',
      '(B) A inibição da glicólise, que reduz a produção de ATP e minimiza o consumo de oxigênio celular.',
      '(C) A ação da enzima superóxido dismutase, que converte o ânion superóxido em peróxido de hidrogênio, reduzindo o estresse oxidativo.',
      '(D) O aumento da atividade da fosfolipase A2, promovendo a liberação de ácidos graxos poli-insaturados para serem oxidados como forma de neutralizar as EROs.'
    ],
    correctAnswer: 2,
    explanation: 'A neutralização de EROs ativa enzimas do grupo primário antioxidante, destacando-se a superóxido dismutase (SOD) na conversão de superóxido (O₂⁻) em peróxido de hidrogênio (H₂O₂).',
    commentary: 'A SOD catalisa a reação de destoxificação direta do radical oxigênio intracelular. O H₂O₂ resultante é degradado pela catalase ou glutationa peroxidase, impedindo a lesão molecular oxidativa.',
    reference: 'NELSON, D. L.; COX, M. M. Lehninger – Princípios de Bioquímica. 8ª ed. Artmed, 2021.',
    tags: ['bioquímica', 'fisiologia']
  },
  {
    id: 'tp2025-18',
    module: 'Ciências Básicas',
    text: 'Um paciente de 65 anos é admitido na emergência com confusão mental, náuseas e fraqueza muscular. Seu histórico revela o uso de diuréticos tiazídicos e uma recente ingestão excessiva de água. Os exames laboratoriais mostram uma concentração plasmática de sódio de 122mEq/L (valor normal: 135-145mEq/L). Com base na fisiologia do controle do sódio no organismo, assinale a alternativa que explica o mecanismo fisiopatológico subjacente ao quadro do paciente:',
    options: [
      '(A) A hiponatremia reduz a osmolaridade plasmática, favorecendo a entrada de água nas células, especialmente nas do sistema nervoso central, podendo levar a edema cerebral e disfunção neurológica.',
      '(B) A hiponatremia resulta da diminuição da osmolaridade plasmática, levando à saída de água das células para o meio extracelular e causando edema periférico significativo.',
      '(C) A hiponatremia leva a uma deminuição na secreção do hormônio antidiurético (ADH), aumentando a diurese e corrigindo espontaneamente o distúrbio hidroeletrolítico.',
      '(D) A hiponatremia aumenta a osmolaridade plasmática, ativando o sistema renina-angiotensina-aldosterona, promovendo retenção de sódio e corrigindo rapidamente a concentração plasmática.'
    ],
    correctAnswer: 0,
    explanation: 'A hiponatremia (redução da osmolaridade sérica) causa gradiente para fluxo de água extracelular-intracelular, induzindo dilatação osmótica e edema celular cerebral agudo.',
    commentary: 'O volume do cérebro é estritamente limitado pelo crânio. Em hiponatremias severas (<125), o edema das células da glia e neurônios provoca desregulação e elevação da PIC, cursando com cefaleia, confusão mental e convulsões.',
    reference: 'HALL, John E. Guyton & Hall - Tratado de Fisiologia Médica. 14. ed. GEN Guanabara Koogan, 2021.',
    tags: ['fisiologia', 'nefrologia', 'emergência']
  },
  {
    id: 'tp2025-19',
    module: 'Ciências Básicas',
    text: 'Um homem de 34 anos foi admitido na emergência após sofrer uma queda de 4 metros de altura, enquanto trabalhava em um canteiro de obras. Foi resgatado consciente, com dor intensa nos membros inferiores, principalmente nas coxas, além de fraqueza muscular generalizada. Ele permaneceu imobilizado no chão por cerca de 1 hora antes de ser socorrido. Ao exame físico, observou-se dor muscular intensa, rigidez nas coxas e sem sinais de fraturas ósseas aparentes. O paciente apresenta urina de cor escura, FC 110bpm e PA 95/60mmHg. Os exames revelaram níveis elevados de creatina quinase (CK = 20.000U/L), mioglobina sérica aumentada e creatinina elevada (1.9mg/dL). Assinale a alternativa correta:',
    options: [
      '(A) A condição mais provável é uma lesão muscular devido a esforço extremo sem complicações renais, dado que o paciente não apresenta sinais de insuficiência renal significativa, como aumento acentuado de creatinina ou oligúria.',
      '(B) A provável causa do quadro é uma síndrome compartimental com lesão muscular extensa, pois a dor e a rigidez muscular, associadas à pressão arterial baixa, indicam uma elevação da pressão intramuscular, o que pode causar isquemia e dano renal.',
      '(C) O quadro é compatível com uma miopatologia genética, como a miopatia mitocondrial, que pode se manifestar após trauma físico intenso, com dor muscular generalizada e aumento de mioglobina.',
      '(D) A hipótese diagnóstica mais provável é rabdomiólise com insuficiência renal aguda pré-renal, secundária à desidratação e à compressão muscular prolongada.'
    ],
    correctAnswer: 3,
    explanation: 'O trauma contuso extenso e a imobilização por compressão prolongada induzem lesão do sarcolema. A liberação de mioglobina obstrui tubos e gera necrose tubular (rabdomiólise).',
    commentary: 'A rabdomiólise por esmagamento (crush syndrome) libera grande quantidade de CK e mioglobina, que se precipitam nos túbulos renais sob pH ácido e desidratação concorrente, provocando insuficiência renal aguda pré-renal integrada à necrose tubular direta.',
    reference: 'KASPER, Dennis L. Medicina interna de Harrison. 19 ed. Porto Alegre, 2017.',
    tags: ['patologia', 'fisiopatologia', 'emergência']
  },
  {
    id: 'tp2025-20',
    module: 'Ciências Básicas',
    text: 'Um paciente de 58 anos chega ao pronto atendimento relatando dor torácica intensa há aproximadamente quatro horas, acompanhada de sudorese e dispneia. O exame físico revela taquicardia e pressão arterial de 140/90mmHg. O eletrocardiograma mostra alterações sugestivas de isquemia miocárdica. Para confirmar o diagnóstico de infarto agudo do miocárdio (IAM), qual marcador sérico é considerado o principal, devido a sua alta especificidade?',
    options: [
      '(A) Creatina quinase total (CK total)',
      '(B) Troponinas (cTnI e cTnT)',
      '(C) Desidrogenase lática (LDH)',
      '(D) Aspartato aminotransferase (AST)'
    ],
    correctAnswer: 1,
    explanation: 'As troponinas (cTnI e cTnT) são altamente específicas para o músculo cardíaco e o principal biomarcador de escolha preconizado para a confirmação de lesão miocárdica no IAM.',
    commentary: 'As troponinas elevam-se 3-6 horas pós-evento isquêmico e têm alta especificidade diagnóstica. CK-total, LDH e AST são enzimas dispersas em tecidos musculoesqueléticos ou hepatócitos.',
    reference: 'THYGESEN, K. et al. Fourth Universal Definition of Myocardial Infarction (2018). J Am Coll Cardiol.',
    tags: ['cardiologia', 'fisiologia']
  },
  {
    id: 'tp2021-1',
    module: 'Ciências Básicas',
    image: '/images/tp2021-1.webp',
    text: 'A tabela abaixo mostra os valores de Kd de 4 antipsicóticos típicos denominados drogas A, B, C e D a vários receptores (nenhuma droga possui qualquer atividade intrínseca nestes receptores). Kd é a constante de dissociação cuja concentração em nM reflete a ocupância de 50% dos receptores, ou seja, menor Kd significa maior afinidade pelo receptor.\n\nBaseado nisso, qual é o antipsicótico que provavelmente produzirá a menor incidência de efeitos sedativos?',
    options: [
      '(A) Droga A.',
      '(B) Droga B.',
      '(C) Droga C.',
      '(D) Droga D.'
    ],
    correctAnswer: 2,
    explanation: 'A droga C é que possui menor afinidade por receptores histamínicos (H1), cujo bloqueio é responsável pelos efeitos sedativos destas drogas. Além disso, por ter alta afinidade pelo receptor D2, necessitará de doses menores para atingir o efeito terapêutico.',
    commentary: 'A constante de dissociação (Kd) é inversamente proporcional à afinidade. Para minimizar os efeitos sedativos, procura-se uma droga com menor afinidade (maior Kd) pelo receptor H1 da histamina, que é o principal mediador da sedação induzida por antipsicóticos convencionais.',
    reference: 'Goodman & Gilman. The Therapeutical Basis of Pharmacology, 11a ed, 2006.',
    tags: ['farmacologia', 'psiquiatria']
  },
  {
    id: 'tp2021-2',
    module: 'Ciências Básicas',
    image: '/images/tp2021-2.webp',
    text: 'Homem, 40 anos, apresenta febre, lesão cutânea no braço esquerdo e à radiografia simples de tórax presença de adenomegalia hilar bilateral. A biópsia da pele mostrou acúmulo de células epitelioides na derme, formando granulomas “nus” (sem coroa linfocitária), contendo células gigantes multinucleadas e ausência de necrose. A pesquisa de microrganismos pelas colorações especiais foi negativa. Diante do quadro clínico e morfológico, a principal hipótese diagnóstica é:',
    options: [
      '(A) Sarcoidose.',
      '(B) Tuberculose.',
      '(C) Sífilis terciária.',
      '(D) Granuloma tipo corpo estranho.'
    ],
    correctAnswer: 0,
    explanation: 'Os achados clínicos e radiológicos associados ao quadro histopatológico (granulomas epitelioides "nus" sem necrose de caseificação, com células gigantes) e ausência de agentes patogênicos pelas colorações especiais são característicos da Sarcoidose.',
    commentary: 'A sarcoidose é uma doença multissistêmica de etiologia desconhecida que se caracteriza pelo acúmulo de granulomas não caseosos (nus) contendo células gigantes. A adenomegalia hilar bilateral e lesões cutâneas com granulomas não necrotizantes sem coroa linfocitária periférica nítida corroboram fortemente esse diagnóstico, diferente da tuberculose (necrose caseosa e coroa de linfócitos) e sífilis.',
    reference: 'KUMAR, V. Robbins and Cotran Pathologic Basis of Disease. 9th ed. Philadelphia: Elsevier, 2015. AZULAY, R. D. et al. Dermatologia. 7. ed. Rio de Janeiro: Guanabara Koogan, 2017.',
    tags: ['patologia', 'pneumologia', 'dermatologia']
  },
  {
    id: 'tp2021-3',
    module: 'Ciências Básicas',
    text: 'Homem, 48 anos, com insuficiência renal crônica, em realização de hemodiálise, apresenta hiperparatireoidismo secundário com hormônio paratireoidiano plasmático de 860 pg/mL (referência de 10–65 pg/mL), cuja fisiopatologia está associada:',
    options: [
      '(A) Ao aumento de 1,25 (OH)₂ vitamina D.',
      '(B) À redução da produção de FGF23 pelo osso.',
      '(C) Ao aumento das concentrações plasmáticas de fósforo.',
      '(D) À redução das concentrações plasmáticas de fósforo.'
    ],
    correctAnswer: 2,
    explanation: 'Na insuficiência renal crônica ocorre retenção de fósforo (hiperfosfatemia), o qual reduz a síntese de 1,25 (OH)₂ vitamina D e estimula de forma direta a produção e secreção do paratormônio (PTH).',
    commentary: 'A perda da função renal leva ao acúmulo de fosfato, gerando hiperfosfatemia. O fósforo elevado plasmático atua diretamente regulando para cima a expressão gênica e secreção de PTH nas glândulas paratireoides, além de complexar com o cálcio livre (reduzindo o cálcio iônico) e inibir a alfa-1-hidroxilase (reduzindo a vitamina D ativa). Isso culmina em hiperparatireoidismo secundário.',
    reference: 'Fisiologia. 4a edição. 2012. Margarida de Mello Ayres.',
    tags: ['fisiologia', 'nefrologia', 'fisiopatologia']
  },
  {
    id: 'tp2021-4',
    module: 'Ciências Básicas',
    text: 'Paciente foi submetida a tratamento cirúrgico de câncer de mama e apresentou uma complicação denominada “escápula alada”, resultante de lesão do nervo:',
    options: [
      '(A) Toracodorsal.',
      '(B) Peitoral medial.',
      '(C) Torácico longo.',
      '(D) Peitoral lateral.'
    ],
    correctAnswer: 2,
    explanation: 'A complicação de "escápula alada" resulta da lesão do nervo torácico longo (que inerva o músculo serrátil anterior), frequentemente decorrente de dissecção axilar na mastectomia.',
    commentary: 'Durante a mastectomia com linfadenectomia axilar, o nervo torácico longo (nervo de Bell) pode ser lesionado pelo curso anatômico rente à parede lateral do tórax. Sua lesão suspende o suprimento motor ao serrátil anterior, músculo responsável por ancorar a borda medial da escápula contra a parede torácica posterior.',
    reference: 'MOORE, K. et al. Anatomia orientada para a clínica. 8. ed. São Paulo: Guanabara Koogan, 2019. ROHEN, J. et al. Anatomy: A photographic atlas. 8th ed. Philidelphia: Schattauer, 2016.',
    tags: ['anatomia', 'ginecologia', 'cirurgia']
  },
  {
    id: 'tp2021-5',
    module: 'Ciências Básicas',
    text: 'Mulher, 22 anos, procura atendimento médico com queixa de febre e inchaço no joelho direito. Ela também tinha história recente de quadro de cervicite. O exame do líquido aspirado da articulação do joelho revela a presença de diplococos Gram negativos. O agente mais provável dessa artrite séptica é:',
    options: [
      '(A) Pseudomonas aeruginosa.',
      '(B) Neisseria gonorrhoeae.',
      '(C) Streptococcus pyogenes.',
      '(D) Staphylococcus aureus.'
    ],
    correctAnswer: 1,
    explanation: 'A artrite séptica por Neisseria gonorrhoeae (diplococo Gram-negativo) é uma complicação clássica decorrente de emanação de infecção sexualmente transmissível disseminada (anteposta por cervicite na paciente).',
    commentary: 'O achado de artrite monoarticular aguda em jovem sexualmente ativa antecedida de cervicite associado ao isolamento de diplococos Gram-negativos no líquido sinovial é altamente sugestivo de artrite gonocócica. Outros organismos como Staphylococcus e Streptococcus são cocos Gram-positivos, enquanto Pseudomonas é um bastonete Gram-negativo.',
    reference: 'BROOKS, G. F. et al. Microbiologia Médica de Jawetz, Melnick e Adelberg. 26. ed. Porto Alegre: AMGH EDITORA, 2014.',
    tags: ['microbiologia', 'infectologia', 'reumatologia']
  },
  {
    id: 'tp2021-6',
    module: 'Ciências Básicas',
    text: 'Em determinadas situações a biópsia de mucosa retal é realizada em pacientes com esquistossomose mansônica. Qual o objetivo da indicação deste exame?',
    options: [
      '(A) Para pesquisa de vermes adultos que estão na luz intestinal aderidos à mucosa.',
      '(B) Pela necessidade de avaliar a intensidade do processo inflamatório para aplicação da medicação específica.',
      '(C) Para pesquisa de ovos em trânsito ou retidos na mucosa.',
      '(D) Pela necessidade do estudo de antígenos de superfície para aplicação da medicação específica.'
    ],
    correctAnswer: 2,
    explanation: 'A biópsia retal (oograma) na esquistossomose objetiva a pesquisa de ovos viáveis e calcificados retidos na submucosa intestinal para fins diagnósticos e de controle de cura.',
    commentary: 'Na infecção por Schistosoma mansoni, os vermes adultos habitam o plexo venoso hemorroidário, porém os ovos migram em direção à luz para a eliminação fecal. Uma fração desses ovos permanece presa e é englobada na mucosa/submucosa retal por reação granulomatosa, servindo como excelente substrato diagnóstico via biópsia retal.',
    reference: 'Coura JR. Dinâmica das doenças infecciosas e parasitárias. 1a ed. Rio de Janeiro: Guanabara Koogan, 2005.',
    tags: ['parasitologia', 'infectologia', 'gastroenterologia']
  },
  {
    id: 'tp2021-7',
    module: 'Ciências Básicas',
    text: 'A investigação do cariótipo de uma criança do sexo masculino com alterações morfológicas e comprometimento cognitivo verificou que ela apresentava fórmula cariotípica 47, XY, +18. A alteração cromossômica da criança pode ser classificada como:',
    options: [
      '(A) Numérica, do tipo euploidia.',
      '(B) Estrutural, do tipo duplicação.',
      '(C) Numérica, do tipo aneuploidia.',
      '(D) Estrutural, do tipo deleção.'
    ],
    correctAnswer: 2,
    explanation: 'O cariótipo 47, XY, +18 (Síndrome de Edwards) demonstra uma alteração cromossômica numérica do tipo aneuploidia, na qual há adição de um autossomo avulso.',
    commentary: 'Aneuploidias envolvem alteração numérica cromossômica que não afeta múltiplos completos do conjunto haploide de cromossomos (diferente da euploidia, como a triploidia 3n). A trissomia do 18 é um exemplo clássico de aneuploidia em humanos.',
    reference: 'NUSSBAUM, R. L., McINNES, R. R., WILLARD, H. F. Thompson & Thompson. Genética médica. 8. ed. Rio de Janeiro: Guanabara Koogan, 2016.',
    tags: ['genética', 'pediatria']
  },
  {
    id: 'tp2021-8',
    module: 'Ciências Básicas',
    text: 'Mulher, 38 anos, terceiro trimestre gestacional, vem para consulta de pré-natal na Unidade Básica de Saúde, com o resultado do exame ultrassonográfico, que detectou a presença de saco herniário na linha mediana da região abdominal do feto, com diâmetro de ± 2 cm. Anomalia cardiovascular associada. O defeito consiste de:',
    options: [
      '(A) Onfalocele, que resulta da falha do retorno das alças intestinais para o abdome no final da 10ª semana, levando à exteriorização das vísceras, que ficam recobertas pela membrana que envolve o cordão umbilical.',
      '(B) Onfalocele, que decorre da falha na rotação das alças intestinais durante a herniação fisiológica, resultando em exteriorização das vísceras, que ficam recobertas pela membrana que envolve o cordão umbilical.',
      '(C) Gastrosquise, que resulta da falha na rotação das alças intestinais durante a herniação fisiológica, levando à exteriorização das vísceras, as quais são recobertas pela membrana que envolve o cordão umbilical.',
      '(D) Gastrosquise, que decorre da falha do retorno das alças intestinais para o abdome no final da 10ª semana, resultando em vísceras herniadas e recobertas pela membrana que envolve o cordão umbilical.'
    ],
    correctAnswer: 0,
    explanation: 'O fechamento incompleto da parede abdominal caracterizado pela permanência de vísceras herniadas dentro do cordão umbilical e envelopadas por membrana constitui a Onfalocele, fruto de falha do retorno das alças na 10ª semana.',
    commentary: 'A onfalocele decorre do não-retorno embriológico fisiológico das alças intestinais da hérnia umbilical extracelômica na 10ª semana de gestação. As vísceras localizam-se na linha mediana cobertas por peritônio e âmnion, e associa-se fortemente a outras anomalias cromossômicas e cardiovasculares. A gastrosquise não é envelopada por membrana e ocorre à direita do cordão umbilicial.',
    reference: 'SADLER, T. W. Langman Embriologia Médica. 13. ed. Rio de Janeiro: Guanabara koogan. 2016.',
    tags: ['embriologia', 'pediatria', 'cirurgia pediátrica']
  },
  {
    id: 'tp2021-9',
    module: 'Ciências Básicas',
    text: 'Mulher, 80 anos, foi admitida em hospital com histórico de um ano de parestesias em membros inferiores, queda do estado geral e piora cognitiva progressiva. A um mês da internação, parou de deambular e evoluiu com disfagia orofaríngea. Na admissão apresentava-se em regular estado geral, descorada, hiporresponsiva e com déficit da memória recente. Ao exame: déficit de sensibilidade em membros inferiores, incoordenação motora, Babinski bilateral, paraparesia crural e desorientação têmporo-espacial. No laboratório, apresentava Hb: 8,4 g/dL, VCM: 110 fl, hipersegmentação de neutrófilos, TSH normal e gastrite atrófica. A carência vitamínica envolvida com o quadro é:',
    options: [
      '(A) Tiamina.',
      '(B) Niacina.',
      '(C) Cobalamina.',
      '(D) Piridoxina.'
    ],
    correctAnswer: 2,
    explanation: 'A carência de cobalamina (vitamina B12) cursa com anemia macrocítica (VCM > 100 fl, neutrófilos hipersegmentados) associada a degeneração combinada subaguda da medula espinhal (déficit de sensibilidade profunda, Babinski, paraparesia) e demência pela gastrite atrófica (anemia perniciosa).',
    commentary: 'A carência de vitamina B12 (cobalamina) impede a síntese de DNA e mielina. A falta de fator intrínseco secundária à gastrite atrófica impede sua absorção retendo o eritrócito no estágio megacítico (anemia megaloblástica com neutrófilos hipersegmentados) e causando lesões degenerativas do cordão posterior e lateral da medula, traduzidas em incoordenação, perda de sensibilidade vibratória/posicional e distúrbios cognitivos.',
    reference: 'NELSON, K. Y.; COX, M. M. Princípios de bioquímica de Lehninger. 6. ed. Porto Alegre: Artmed, 2017.',
    tags: ['bioquímica', 'hematologia', 'neurologia']
  },
  {
    id: 'tp2021-10',
    module: 'Ciências Básicas',
    text: 'Noticiário divulgou que técnica de implante de ovário pode ter sucesso no campo da fertilidade. Mulher que sofria de leucemia teve os ovários retirados e conservados em laboratório e, após o tratamento da doença, foi submetida ao reimplante dos seus ovários, com sucesso na produção de ovócitos.\n\nApós o procedimento médico-cirúrgico, foi possível verificar o crescimento e maturação dos ovócitos. Os hormônios secretados pela hipófise e pelo ovário, respectivamente, que induziram a ovulação são:',
    options: [
      '(A) Folículo estimulante e estrógenos; hormônio luteotrófico.',
      '(B) Luteinizante e folículo estimulante; progesterona.',
      '(C) Folículo estimulante e luteotrófico; estrógenos.',
      '(D) Folículo estimulante e luteotrófico; progesterona.'
    ],
    correctAnswer: 2,
    explanation: 'O FSH e o LH (luteotrófico) secretados pela adeno-hipófise, em conjunto com os estrógenos produzidos pelas células foliculares ovarianas, formam a cascata de feedback positivo e integridade endócrina para deflagrar a ovulação.',
    commentary: 'O FSH (folículo estimulante) estimula a proliferação folicular e secreção de estrógenos pelo ovário. O pico de estrógeno estimula a liberação maciça do hormônio luteotrófico/luteinizante (LH) por feedback positivo, o qual promove a ruptura folicular e ovulação.',
    reference: 'AIRES, M. M. Fisiologia. 5. ed. Rio de Janeiro: Guanabara Koogan, 2018. GUYTON, A. C.; HALL, J. E. Tratado de fisiologia médica. 13. ed. Rio de Janeiro: Elsevier, 2017.',
    tags: ['fisiologia', 'ginecologia', 'endocrinologia']
  },
  {
    id: 'tp2021-11',
    module: 'Ciências Básicas',
    text: 'Homem, 45 anos, em acompanhamento pós-transplante renal há 10 meses, apresenta proteinúria, aumento da creatinina sanguínea e perda progressiva da função do enxerto. Realizada biópsia renal que evidenciou fibrose e anormalidades vasculares. Pode-se concluir que o paciente apresenta rejeição:',
    options: [
      '(A) Aguda.',
      '(B) Hiperaguda.',
      '(C) Crônica.',
      '(D) Trombótica.'
    ],
    correctAnswer: 2,
    explanation: 'A biópsia renal com predomínio de fibrose intersticial, atrofia tubular e espessamento fibrointimal vascular de curso lento (10 meses pós-transplante) caracteriza a rejeição crônica do enxerto.',
    commentary: 'A rejeição crônica é patologicamente definida por lesão vascular arterial progressiva (íntima espessada secundária a proliferação celular), fibrose intersticial crônica e perda insidiosa de função glomerular renal. A rejeição hiperaguda ocorre em minutos por anticorpos pré-formados, e a aguda desenvolve infiltrado inflamatório túbulo-intersticial em semanas.',
    reference: 'SEMENTILLI, A. et al. Renal transplant pathology: main morphological findings and how to sign out biopsies. J. Bras. Patol. Med. Lab. Aug. 2008',
    tags: ['patologia', 'nefrologia', 'cirurgia']
  },
  {
    id: 'tp2021-12',
    module: 'Ciências Básicas',
    text: 'Homem, 70 anos, apresentou perda da consciência repentina e, após aproximadamente uma hora, despertou. Ao exame estava incapaz de falar e mover os membros à esquerda. Exame de imagem 6 meses após revelou áreas císticas no lobo parietal direito. As alterações decorrem do processo denominado:',
    options: [
      '(A) Esteatonecrose.',
      '(B) Necrose liquefativa.',
      '(C) Apoptose.',
      '(D) Necrose caseosa.'
    ],
    correctAnswer: 1,
    explanation: 'A isquemia no sistema nervoso central gera tipicamente necrose liquefativa, cuja digestão enzimática rápida do tecido deixa cavidades ou áreas císticas residuais ao exame de imagem.',
    commentary: 'No encéfalo, a isquemia local (AVC) causa morte do tecido cerebral, mas os tecidos com alto teor lipídico e pouca matriz de sustentação sofrem necrose liquefativa em virtude da liberação maciça de emanação enzimática lisossômica, deixando áreas cavitárias ocupadas por líquido (cistos) em fases crônicas.',
    reference: 'KUMAR, V., ABBAS, A.; ASTER, J. Robbins & Cotran – Patologia - BASES PATOLÓGICAS DAS DOENÇAS. 9. ed. Rio de Janeiro: Elsevier, 2016.',
    tags: ['patologia', 'neurologia']
  },
  {
    id: 'tp2021-13',
    module: 'Ciências Básicas',
    text: 'Homem, 23 anos, vítima de trauma abdominal fechado com hipovolemia por provável hemorragia intra-abdominal. Qual é a ação direta das células justaglomerulares nessa situação?',
    options: [
      '(A) Bloqueio da liberação do hormônio antidiurético.',
      '(B) Liberação de aldosterona.',
      '(C) Aumento da reabsorção da creatinina.',
      '(D) Liberação de renina.'
    ],
    correctAnswer: 3,
    explanation: 'As células justaglomerulares renais respondem diretamente à hipotensão arterial e hipovolemia por meio da síntese e liberação de renina para ativar o eixo SRAA.',
    commentary: 'A redução da pressão de perfusão na artéria aferente renal estimula as células do aparelho justaglomerular a secretar renina por ação direta. A renina cliva o angiotensinogênio hepático em angiotensina I, iniciando a cascata que estabiliza a pressão circulatória por vasoconstrição (via Angiotensina II) e retenção de sódio/água (via aldosterona, liberada pela adrenal pós-estímulo).',
    reference: 'Berne & Levy - Fisiologia - 6a Ed. Elsevier',
    tags: ['fisiologia', 'nefrologia', 'fisiopatologia']
  },
  {
    id: 'tp2021-14',
    module: 'Ciências Básicas',
    text: 'Homem, 45 anos, asmático, iniciou anti-hipertensivo e apresentou broncoespasmo logo após a medicação. Qual fármaco anti-hipertensivo foi provavelmente introduzido?',
    options: [
      '(A) Propranolol.',
      '(B) Hidroclorotiazida.',
      '(C) Captopril.',
      '(D) Losartana.'
    ],
    correctAnswer: 0,
    explanation: 'O propranolol é um betabloqueador não-seletivo que antagoniza receptores beta-2 adrenérgicos no pulmão, precipitando broncoespasmo agudo em pacientes asmáticos.',
    commentary: 'Beta-bloqueadores não seletivos como o Propranolol bloqueiam a ação de broncodilatação mediada por receptores beta-2. Desse modo, a estimulação simpática tônica sobre as vias aéreas é cortada, acarretando broncoespasmo em pacientes com vias aéreas hiper-responsivas (asma/DPOC).',
    reference: 'RANG, H. P. et al. Farmacologia. 8. ed. Rio de Janeiro: Elsevier, 2016.',
    tags: ['farmacologia', 'pneumologia', 'cardiologia']
  },
  {
    id: 'tp2021-15',
    module: 'Ciências Básicas',
    text: 'A fibrose cística é causada por mutações no gene CFTR. Algumas substituições de bases não resultam em doença. Isso é explicado por mutações:',
    options: [
      '(A) De sentido trocado.',
      '(B) Compensadoras.',
      '(C) Sem sentido.',
      '(D) Silenciosas.'
    ],
    correctAnswer: 3,
    explanation: 'Mutações silenciosas caracterizam-se por substituições de nucleotídeos que mantêm a codificação do mesmo aminoácido original devido ao código genético degenerativo.',
    commentary: 'Sendo o código genético degenerativo/redundante, múltiplos códons de trincas de nucleotídeos especificam o mesmo aminoácido. Uma mutação silenciosa altera a base mas gera o mesmo aminoácido residual na proteína CFTR, preservando sua integridade funcional e biológica.',
    reference: 'Nussbaum RL, McInnes RR, Willard HF. Thompson & Thompson. Genética Médica, 7a. Ed., Guanabara Koogan, Rio de Janeiro, 2008.',
    tags: ['genética', 'biologia molecular']
  },
  {
    id: 'tp2021-16',
    module: 'Ciências Básicas',
    image: '/images/tp2021-16.webp',
    text: 'Mulher de 60 anos internada com pneumonia lobar, em uso de tiazídico há 9 meses. O distúrbio ácido-básico esperado é:',
    options: [
      '(A) Distúrbio misto: alcalose respiratória e acidose metabólica.',
      '(B) Alcalose metabólica com tentativa de compensação respiratória.',
      '(C) Distúrbio misto: alcalose metabólica e alcalose respiratória.',
      '(D) Alcalose respiratória, com tentativa de compensação metabólica.'
    ],
    correctAnswer: 2,
    explanation: 'O uso crônico de tiazídico predispõe a alcalose metabólica (eliminação renal de H+ e K+), enquanto o quadro agudo de pneumonia gera hiperventilação compensatória (alcalose respiratória).',
    commentary: 'Dois mecanismos paralelos justificam o distúrbio misto: os diuréticos tiazídicos induzem depleção de volume e excreção aumentada de K+/H+ gerando alcalose metabólica. A pneumonia lobar provoca desequilíbrio ventilação-perfusão, induzindo o centro respiratório a aumentar a frequência de trocas gasosas com consequente lavagem de CO₂ (alcalose respiratória).',
    reference: 'Berne, M.R.; Levy, M.N. Fisiologia. Elsevier. 6a Ed., 2009. Guyton, A. Tratado de Fisiologia Médica. Elsevier 12a Ed., 2011.',
    tags: ['fisiologia', 'gasometria', 'pneumologia']
  },
  {
    id: 'tp2021-17',
    module: 'Ciências Básicas',
    image: '/images/tp2021-17.webp',
    text: 'FAST mostrando sangramento intra-abdominal no espaço de Morrison, região periesplênica e retrovesical. A alteração aparece como região:',
    options: [
      '(A) Anecoica.',
      '(B) Hiperecoica.',
      '(C) Isoecoica.',
      '(D) Hipoecoica.'
    ],
    correctAnswer: 0,
    explanation: 'Em exames de ultrassonografia, o líquido livre agudo (como sangue livre intra-abdominal) exibe-se tipicamente como uma imagem anecoica (escura, sem ecogenicidade interna).',
    commentary: 'O líquido simples (sangue agudo, urina, líquido ascítico) não reflete as ondas sonoras e exibe-se como uma fenda ou espaço totalmente preto (anecoico), gerando um reforço acústico posterior. No FAST pós-trauma, a identificação de áreas anecoicas nos espaços dependentes (como recesso hepatorrenal de Morrison e periesplênico) é diagnóstico de líquido livre hemorrágico.',
    reference: 'LEVITOV, A. B. et al. Ultrassonografia à Beira do Leito na Medicina Clínica. 1. ed. Porto Alegre: Artmed/McGraw-Hill, 2013.',
    tags: ['radiologia', 'cirurgia', 'emergência']
  },
  {
    id: 'tp2021-18',
    module: 'Ciências Básicas',
    image: '/images/tp2021-18.webp',
    text: 'As células principais da mucosa gástrica são responsáveis pela síntese de pepsinogênio. Na imagem histológica da glândula oxíntica gástrica, qual célula corresponde ao tipo citado?',
    options: [
      '(A) Célula indicada pela letra A, que é a célula parietal.',
      '(B) Célula indicada pela letra B, que representa a célula principal.',
      '(C) Célula indicada pela letra C, correspondente à célula epitelial.',
      '(D) Célula indicada pela letra D, correspondente à célula mucosa.'
    ],
    correctAnswer: 1,
    explanation: 'A célula indicada pela letra B representa a célula principal (ou peptídica), responsável pela secreção de pepsinogênio, amilase e lipase gástrica na mucosa estomacal.',
    commentary: 'A estruturação histológica estomacal diferencia: células epiteliais de revestimento (letra C), células mucosas do colo (letra D), células parietais produtoras de HCl e fator intrínseco (letra A), e células principais secretoras de pepsinogênio dispostas preferencialmente na base das criptas (letra B).',
    reference: 'JUNQUEIRA, L. U.; CARNEIRO, J. Histologia Básica – Texto e Atlas. 13. ed. Rio de Janeiro: Guanabara Koogan, 2017.',
    tags: ['histologia', 'fisiologia', 'gastroenterologia']
  },
  {
    id: 'tp2021-19',
    module: 'Ciências Básicas',
    text: 'Um estudo epidemiológico mostrou IC95% da contagem de linfócitos T CD4 entre 254 e 429 células/mm³. Podemos afirmar corretamente que:',
    options: [
      '(A) O desvio padrão pode ser calculado pela diferença entre 429 e 254 células/mm³.',
      '(B) A probabilidade do valor verdadeiro da média populacional estar entre 254 e 429 células/mm³ é de 95%.',
      '(C) O maior valor encontrado foi 429 e o menor 254 células/mm³.',
      '(D) A média pode ser calculada somando 254 + 429 e dividindo por 2.'
    ],
    correctAnswer: 1,
    explanation: 'O intervalo de confiança de 95% representa que a probabilidade do parâmetro populacional verdadeiro (como a média de CD4) estar contido nos limites calculados é de 95%.',
    commentary: 'A definição de Intervalo de Confiança (IC95%) refere-se à acurácia de estimativa, indicando que, se repetíssemos o protocolo amostral inúmeras vezes, 95% dos intervalos gerados englobariam a real média populacional. Não define os valores isolados máximos/mínimos ou estimativa direta do desvio padrão.',
    reference: 'VIEIRA, S. Introdução à Bioestatística. 5. ed. Rio de Janeiro: Guanabara Koogan, 2015.',
    tags: ['bioestatística', 'metodologia científica']
  },
  {
    id: 'tp2021-20',
    module: 'Ciências Básicas',
    text: 'Homem, 44 anos, apresentou oclusão do ramo circunflexo da artéria coronária esquerda. Pode sofrer infarto do miocárdio prioritariamente em qual região cardíaca?',
    options: [
      '(A) Ventrículos direito e esquerdo.',
      '(B) Átrio e ventrículo esquerdo.',
      '(C) Átrios direito e esquerdo.',
      '(D) Septo interventricular.'
    ],
    correctAnswer: 1,
    explanation: 'A artéria circunflexa, ramo da artéria coronária esquerda, é responsável prioritariamente por nutrir a parede lateral do ventrículo esquerdo e porções do átrio esquerdo.',
    commentary: 'A oclusão do ramo circunflexo da coronária esquerda (Cx) acarreta isquemia aguda (infarto) na parede lateral do ventrículo esquerdo e no átrio esquerdo. O septo interventricular e parede anterior são comumente nutridos pela interventricular anterior (ADA), enquanto o ventrículo direito é domínio da coronária direita (CD).',
    reference: 'Drake RL, Vogl AW, Mitchell AWM. Gray’s Anatomy for students. 2nd edition. Churchill Livingstone, Elsevier, Philadelphia, 2005.',
    tags: ['anatomia', 'cardiologia']
  },
  {
    id: 'tp2026-1',
    module: 'Ciências Básicas',
    text: 'Homem cis, pardo, de 48 anos, etilista, é admitido em um hospital com aumento do volume abdominal, edema de membros inferiores e fadiga. Ao exame físico, observa-se ascite volumosa e a paracentese diagnóstica revela os seguintes dados: Albumina do líquido ascítico: 1,0g/dL; Albumina sérica: 3,0g/dL; Contagem de leucócitos: 150 células/mm³ (predomínio de mononucleares); Proteínas totais no líquido: 1,5g/dL. Qual é o principal mecanismo fisiopatológico responsável pela formação da ascite nesse paciente?',
    options: [
      '(A) Redução da pressão oncótica plasmática causada por hipoalbuminemia grave, age como principal motor da ascite.',
      '(B) Elevação da permeabilidade capilar peritoneal devido a processo inflamatório infeccioso.',
      '(C) Obstrução do fluxo linfático abdominal, levando ao acúmulo de líquido rico em proteínas.',
      '(D) Elevação da pressão hidrostática devido à hipertensão portal.'
    ],
    correctAnswer: 3,
    explanation: "O primeiro passo diante de uma ascite é calcular o GASA, a diferença entre a albumina do sangue e a do líquido ascítico. Neste caso a conta dá 2,0 g/dL (3,0 menos 1,0). Valor igual ou acima de 1,1 g/dL indica que a ascite se deve à hipertensão portal.\n\nNo etilista, a causa é a cirrose: a fibrose aumenta a resistência ao fluxo portal e eleva a pressão hidrostática nos sinusoides, empurrando líquido para a cavidade. A vasodilatação esplâncnica ativa o sistema renina-angiotensina-aldosterona e o sistema simpático, que retêm sódio e água e perpetuam a ascite. A proteína baixa no líquido (menor que 2,5 g/dL) e a celularidade baixa, com mononucleares, reforçam que não há infecção nem inflamação peritoneal.",
    commentary: "Hipoalbuminemia grave (A): com albumina no sangue de 3,0 g/dL, a hipoalbuminemia é apenas leve; além disso, a ascite por queda da pressão oncótica (como na síndrome nefrótica) cursa com GASA abaixo de 1,1 g/dL.\n\nAumento da permeabilidade por infecção (B): peritonite bacteriana, tuberculose ou carcinomatose geram GASA baixo e líquido rico em proteínas; uma peritonite bacteriana teria 250 ou mais neutrófilos/mm³, o que não ocorre aqui.\n\nObstrução linfática (C): produz ascite quilosa, de aspecto leitoso, rica em proteínas e triglicerídeos e com GASA geralmente baixo, o oposto dos achados.",
    tip: "GASA ≥ 1,1 g/dL = hipertensão portal. Proteína do líquido < 2,5 g/dL sugere cirrose; ≥ 2,5 g/dL, causa cardíaca.",
    reference: 'LOPES, A. C. Tratado de clínica médica, v. 1, 3. ed. – Rio de Janeiro: Roca, 2016.',
    tags: ['fisiopatologia', 'gastroenterologia']
  },
  {
    id: 'tp2026-2',
    module: 'Ciências Básicas',
    text: 'Homem de 28 anos com diabetes mellitus tipo 1 é admitido em emergência hospitalar com respiração de Kussmaul e confusão mental. Gasometria: pH 7,18; HCO₃⁻: 10mEq/L; pCO₂: 23mmHg. Aplicando a fórmula de Winter ‒ ([1,5 × HCO₃⁻] + 8) ± 2mmHg ‒ qual é o raciocínio fisiopatológico correto acerca da resposta compensatória pulmonar nesse paciente?',
    options: [
      '(A) A pCO₂ de 23mmHg está acima do intervalo esperado pela fórmula de Winter, indicando falha ventilatória que configura acidose respiratória concomitante, com dois distúrbios primários acidóticos coexistindo e agravando mutuamente o desequilíbrio ácido-base.',
      '(B) A pCO₂ de 23mmHg está dentro do intervalo esperado (23 ± 2mmHg) pela fórmula de Winter, confirmando hiperventilação como compensação respiratória adequada da cetoacidose diabética, sem distúrbio respiratório primário ‒ a persistência do pH baixo reflete o caráter parcial da compensação.',
      '(C) A pCO₂ de 23mmHg está dentro do intervalo esperado pela fórmula de Winter, e o fato de o pH ter se normalizado confirma que a hiperventilação foi suficiente para corrigir completamente o distúrbio.',
      '(D) A pCO₂ de 23mmHg está abaixo do intervalo esperado para compensação respiratória, e a persistência do pH em 7,18 demonstra que os sistemas de tamponamento foram superados pela produção de corpos cetônicos.'
    ],
    correctAnswer: 1,
    explanation: "O paciente tem cetoacidose diabética: acidose metabólica (pH 7,18 com bicarbonato de 10 mEq/L) e respiração de Kussmaul. Para saber se o pulmão está compensando bem, usa-se a fórmula de Winter: pCO₂ esperada = 1,5 × 10 + 8 = 23, com margem de ± 2, ou seja, de 21 a 25 mmHg.\n\nA pCO₂ medida é 23 mmHg, dentro da faixa: a hiperventilação é a compensação adequada e não há distúrbio respiratório associado. O pH continua ácido porque a compensação respiratória de um distúrbio metabólico é sempre parcial e nunca devolve o pH ao normal. O tratamento é corrigir a causa com hidratação venosa e insulina; bicarbonato só em acidose muito grave (pH abaixo de 6,9).",
    commentary: "Acidose respiratória associada (A): só seria o caso com pCO₂ maior que 25 mmHg, o teto da faixa calculada; com 23 mmHg, a ventilação está fazendo o esperado.\n\npH normalizado (C): o pH é 7,18, longe do normal; além disso, a compensação nunca corrige totalmente um distúrbio primário.\n\npCO₂ abaixo do esperado (D): o valor está exatamente no centro da faixa calculada; uma pCO₂ abaixo de 21 mmHg é que indicaria alcalose respiratória associada. O pH baixo é esperado e não significa falência dos tampões.",
    tip: "Winter: pCO₂ esperada = 1,5 × HCO₃⁻ + 8 ± 2. Acima = acidose respiratória junto; abaixo = alcalose respiratória junto.",
    reference: 'Albert MS, Dell RB, Winters RW. Quantitative displacement of acid-base equilibrium in metabolic acidosis. PMID: 6016545. | HALL, John E. Tratado de Fisiologia Médica. Cap. 31. 13. ed. Rio de Janeiro: Elsevier, 2017.',
    tags: ['fisiologia', 'nefrologia', 'endocrinologia']
  },
  {
    id: 'tp2026-3',
    module: 'Ciências Básicas',
    text: 'Mulher, 35 anos, procurou a UBS com disúria, urgência e aumento da frequência urinária há dois dias, sem febre ou dor lombar. Possui histórico de infecções urinárias de repetição, tratadas empiricamente. Diante dos sintomas, o médico solicitou exame de urina tipo I, que revelou esterase leucocitária positiva, 50-70 leucócitos/campo e presença de bactérias. Qual a conduta diagnóstica mais apropriada nesse momento?',
    options: [
      '(A) Considerar a possibilidade de contaminação da amostra e solicitar nova coleta de urina, pois a presença de leucócitos e bactérias sem febre pode ser inconclusiva para uma ITU verdadeira.',
      '(B) Iniciar imediatamente antibioticoterapia empírica com fluoroquinolona ou sulfametoxazol-trimetoprim, visto que o EAS já confirmou processo infeccioso significativo.',
      '(C) Solicitar urocultura e antibiograma para identificar o agente etiológico e seu perfil de sensibilidade, permitindo um tratamento direcionado e eficaz.',
      '(D) Encaminhar a paciente para avaliação com nefrologista para investigação aprofundada de causas de ITU recurrentes, sem a necessidade de exames adicionais de urina na UBS.'
    ],
    correctAnswer: 2,
    explanation: "Disúria, urgência e polaciúria sem febre ou dor lombar caracterizam cistite, e o exame de urina com esterase leucocitária positiva, muitos leucócitos e bactérias confirma um processo infeccioso. O dado que muda a conduta é a história de infecções de repetição tratadas sempre de forma empírica.\n\nO uso repetido de antibióticos seleciona bactérias resistentes. Por isso, na cistite recorrente, deve-se colher urocultura com antibiograma antes de tratar: ela identifica o agente e mostra a que antibióticos ele é sensível, o que permite escolher (ou ajustar) o tratamento e reduzir a chance de falha. A investigação de fatores que favorecem a recorrência pode ser feita depois, na própria APS.",
    commentary: "Contaminação da amostra (A): sintomas típicos associados a uma urina tão alterada tornam a infecção verdadeira muito provável; recoletar só atrasaria a conduta. A ausência de febre apenas indica infecção baixa.\n\nAntibiótico empírico imediato (B): é aceitável na cistite não complicada isolada, mas aqui há recorrência e tratamentos empíricos prévios, com maior risco de resistência; além disso, fluoroquinolona não é primeira escolha para cistite.\n\nEncaminhar ao nefrologista sem exames (D): o quadro agudo deve ser resolvido na UBS, e a urocultura é básica; a recorrência de cistite, em geral, não exige especialista de imediato.",
    tip: "Cistite de repetição ou tratamentos empíricos prévios: colha urocultura com antibiograma antes do antibiótico.",
    reference: 'SOCIEDADE BRASILEIRA DE INFECTOLOGIA. Recomendações para o manejo das infecções do trato urinário. 2019. | HOOTON, T. M. et al. Clinical Infectious Diseases, 2018.',
    tags: ['infectologia', 'nefrologia']
  },
  {
    id: 'tp2026-4',
    module: 'Ciências Básicas',
    text: 'Um paciente de 52 anos, acompanhado em uma Unidade Básica de Saúde (UBS), é portador de cirrose hepática avançada secundária ao etilismo crônico. Durante consulta, apresenta queixa de insônia, sendo prescrita uma medicação sedativa de metabolização predominantemente hepática e alta taxa de extração hepática. Considerando o caso clínico, qual das alternativas descreve a alteração farmacocinética esperada para esse medicamento?',
    options: [
      '(A) Redução do volume de distribuição, devido à hipoalbuminemia.',
      '(B) Redução da biodisponibilidade oral, devido ao aumento do metabolismo de primeira passagem.',
      '(C) Aumento da depuração hepática, devido à indução enzimática.',
      '(D) Aumento da biodisponibilidade oral, devido à redução do metabolismo de primeira passagem.'
    ],
    correctAnswer: 3,
    explanation: "Fármacos de alta taxa de extração hepática são aqueles que o fígado retira em grande parte já na primeira passagem do sangue portal. Por isso a quantidade que chega à circulação depois de uma dose oral costuma ser pequena, e a depuração deles depende principalmente do fluxo sanguíneo hepático.\n\nNa cirrose avançada, há menos hepatócitos funcionantes e o sangue portal é desviado por shunts portossistêmicos, sem passar pelo fígado. O metabolismo de primeira passagem cai muito, e a biodisponibilidade oral aumenta. Na prática, um sedativo nessa situação atinge níveis mais altos e age por mais tempo, com risco de precipitar encefalopatia hepática: deve-se reduzir a dose ou escolher outro fármaco.",
    commentary: "Redução do volume de distribuição (A): a hipoalbuminemia deixa mais fármaco solto no plasma, sem ligação a proteínas, e, junto com a retenção de líquido (ascite), tende a aumentar o volume de distribuição, não a reduzir.\n\nRedução da biodisponibilidade por mais primeira passagem (B): é o inverso; na cirrose, o fígado retira menos fármaco na primeira passagem.\n\nAumento da depuração por indução enzimática (C): a cirrose reduz a capacidade metabólica e o fluxo hepático, diminuindo a depuração.",
    tip: "Cirrose + fármaco de alta extração hepática = menos primeira passagem, mais biodisponibilidade oral. Reduza a dose.",
    reference: 'Brunton LL et al. Goodman & Gilman’s The Pharmacological Basis of Therapeutics.',
    tags: ['farmacologia', 'gastroenterologia']
  },
  {
    id: 'tp2026-5',
    module: 'Ciências Básicas',
    text: 'Paciente de 47 anos, gênero feminino. Procura a UBS com sintomas urinários, febre e urgência miccional. Antecedentes de diabetes mellitus tipo 2 e obesidade, em uso de metformina diariamente. O médico suspeita de ITU (infecção do trato urinário) e prescreve quinolona para tratamento. Considerando a farmacodinâmica desse antibiótico, qual mecanismo explica sua ação antimicrobiana?',
    options: [
      '(A) Inibição da DNA girase bacteriana, interferindo na replicação do material genético.',
      '(B) Inibição da síntese da parede celular bacteriana.',
      '(C) Inibição da síntese proteica bacteriana por ligação à subunidade ribossomal 50S.',
      '(D) Inibição da síntese de ácido fólico bacteriano por bloqueio da diidropteroato sintetase.'
    ],
    correctAnswer: 0,
    explanation: "As quinolonas (como ciprofloxacino e levofloxacino) agem sobre o DNA bacteriano. Elas inibem duas topoisomerases: a DNA girase (topoisomerase II), que desfaz o superenrolamento da fita para permitir a replicação, e a topoisomerase IV, que separa as fitas-filhas ao final da duplicação.\n\nCom essas enzimas bloqueadas, o DNA sofre quebras que a bactéria não consegue reparar, e o efeito é bactericida. Em geral, nos gram-negativos, o alvo principal é a DNA girase; nos gram-positivos, a topoisomerase IV.",
    commentary: "Inibição da parede celular (B): é o mecanismo dos betalactâmicos (penicilinas, cefalosporinas, carbapenêmicos), que se ligam às proteínas ligadoras de penicilina, e da vancomicina.\n\nLigação à subunidade 50S (C): é como agem macrolídeos, clindamicina, cloranfenicol e linezolida, que bloqueiam a síntese de proteínas.\n\nBloqueio da diidropteroato sintetase (D): é o mecanismo das sulfonamidas, como o sulfametoxazol, que impedem a síntese de folato; o trimetoprim atua em outra etapa dessa via, a di-hidrofolato redutase.",
    tip: "Quinolona = DNA girase (topoisomerase II) e topoisomerase IV. Lembre: quinolona mexe no DNA.",
    reference: 'Brunton LL, Hilal-Dandan R, Knollmann BC. Goodman & Gilman\'s the pharmacological basis of therapeutics. 14th ed. New York: McGraw-Hill Education; 2023.',
    tags: ['farmacologia', 'infectologia']
  },
  {
    id: 'tp2026-6',
    module: 'Ciências Básicas',
    text: 'Um adolescente de 16 anos é acompanhado em atendimento domiciliar por quadro de faringite bacteriana, com cultura positiva para Streptococcus pyogenes. O médico prescreve a Benzetacil (Penicilina G) como tratamento. Considerando os aspectos da bactéria e do antibiótico prescrito para o caso clínico, qual alternativa melhor explica como esse fármaco atua sobre a bactéria?',
    options: [
      '(A) Inibe a síntese proteica ao se ligar à subunidade 30S do ribossomo bacteriano.',
      '(B) Inibe a síntese da parede celular bacteriana ao interferir na formação do peptidoglicano.',
      '(C) Altera a permeabilidade da membrana celular ao se ligar a ergosterol.',
      '(D) Inibe a replicação do DNA bacteriano por bloqueio da DNA girase.'
    ],
    correctAnswer: 1,
    explanation: "A penicilina G benzatina é um betalactâmico. Esses antibióticos se ligam às proteínas ligadoras de penicilina (PBPs), enzimas transpeptidases que fazem as ligações cruzadas entre as cadeias de peptidoglicano, a malha que dá rigidez à parede bacteriana.\n\nSem essas ligações, a parede fica frágil e a bactéria se rompe por lise osmótica, efeito bactericida sobre células em multiplicação. O Streptococcus pyogenes, gram-positivo com parede espessa de peptidoglicano, continua sensível à penicilina, que segue como tratamento de escolha da faringite estreptocócica, inclusive para prevenir febre reumática.",
    commentary: "Ligação à subunidade 30S (A): é o mecanismo dos aminoglicosídeos e das tetraciclinas, que atuam no ribossomo e bloqueiam a síntese proteica.\n\nLigação ao ergosterol (C): o ergosterol existe na membrana dos fungos, não das bactérias; esse é o mecanismo dos polienos, como a anfotericina B e a nistatina.\n\nBloqueio da DNA girase (D): é a ação das quinolonas, que atuam na replicação do DNA, sem relação com a parede.",
    tip: "Betalactâmico = liga-se às PBPs e impede as ligações cruzadas do peptidoglicano → lise da bactéria.",
    reference: 'Goodman & Gilman\'s The Pharmacological Basis of Therapeutics. Brunton LL, Hilal-Dandan R, Knollmann BC.',
    tags: ['farmacologia', 'infectologia']
  },
  {
    id: 'tp2026-7',
    module: 'Ciências Básicas',
    text: 'Durante atendimento ambulatorial, quatro pacientes apresentam manifestações imunológicas distintas: glomerulonefrite por imunocomplexos, anafilaxia alimentar, dermatite de contato e doença hemolítica mediada por anticorpos. A alternativa que apresenta corretamente o principal mediador imunológico envolvido, respectivamente, é:',
    options: [
      '(A) Imunocomplexos – Mastócitos – Linfócitos T – IgG citotóxico',
      '(B) Complemento – IgM citotóxico – Eosinófilos – IgE',
      '(C) Imunocomplexos – IgE – Linfócitos B – Macrófagos',
      '(D) Complemento – Mastócitos – Macrófagos – IgA citotóxico'
    ],
    correctAnswer: 0,
    explanation: "A questão cobra a classificação de Gell e Coombs das reações de hipersensibilidade, na ordem dos quatro casos:\n\n• Glomerulonefrite por imunocomplexos: tipo III, em que complexos antígeno-anticorpo se depositam nos tecidos e ativam o complemento.\n• Anafilaxia alimentar: tipo I, imediata, com IgE ligada aos mastócitos, que degranulam e liberam histamina.\n• Dermatite de contato: tipo IV, tardia, mediada por linfócitos T sensibilizados.\n• Doença hemolítica por anticorpos: tipo II, citotóxica, com IgG (ou IgM) dirigida contra antígenos da hemácia.\n\nA alternativa A traz a sequência correta: imunocomplexos, mastócitos, linfócitos T e IgG.",
    commentary: "Complemento, IgM, eosinófilos e IgE (B): coloca IgM na anafilaxia (que é mediada por IgE e mastócitos), eosinófilos na dermatite de contato (que é por linfócitos T) e IgE na hemólise (que é por IgG/IgM).\n\nImunocomplexos, IgE, linfócitos B e macrófagos (C): acerta as duas primeiras, mas a reação tardia é comandada por linfócitos T, não B, e a hemólise é mediada por anticorpos, não por macrófagos como mediador principal.\n\nComplemento, mastócitos, macrófagos e IgA (D): a dermatite de contato depende de linfócitos T, e a IgA não é o anticorpo da citotoxicidade nas reações tipo II.",
    tip: "Gell e Coombs: I = IgE/mastócito; II = IgG/IgM contra célula; III = imunocomplexo; IV = linfócito T (tardia).",
    reference: 'ABBAS, Abul K.; LICHTMAN, Andrew H.; PILLAI, Shiv. Imunologia celular e molecular. 10. ed. Rio de Janeiro: Guanabara Koogan, 2023, Capítulo 16.',
    tags: ['imunologia']
  },
  {
    id: 'tp2026-8',
    module: 'Ciências Básicas',
    text: 'Paciente de 40 anos, sexo masculino, exibe lesão de pele eritematosa em face associada a madarose. Após realização de biópsia, foi realizado o diagnóstico de hanseníase virchowiana. Em relação à resposta inflamatória envolvida nesse processo, assinale a alternativa correta:',
    options: [
      '(A) Trata-se de caso no qual a resposta imune Th2 está ativa, resultando em níveis sorológicos elevados de imunoglobulinas e, por isso, à coloração de Fite-Faraco são identificados numerosos bacilos.',
      '(B) Trata-se de caso no qual a resposta imune Th2 está deficiente e, por isso, à coloração de Fite-Faraco são identificados raros bacilos.',
      '(C) Trata-se de caso no qual a resposta imune do tipo Th1 está deficiente e, por isso, à coloração de Fite-Faraco são identificados numerosos bacilos.',
      '(D) Trata-se de caso no qual a resposta imune Th1 está ativa, resultando em numerosas formações granulomatosas e, por isso, à coloração de Fite-Faraco são identificados raros bacilos.'
    ],
    correctAnswer: 2,
    explanation: "A hanseníase forma um espectro definido pela resposta imune do paciente ao Mycobacterium leprae. No polo tuberculoide, a resposta celular Th1 (interferon-gama ativando macrófagos) é forte: há granulomas bem formados e raros bacilos.\n\nNo polo virchowiano, a resposta Th1 é deficiente. Os macrófagos não conseguem destruir o bacilo, que se multiplica dentro deles (células de Virchow, espumosas), e a coloração de Fite-Faraco mostra muitos bacilos, muitas vezes em globias. A doença é disseminada, com infiltração da face e perda dos pelos das sobrancelhas (madarose), e a baciloscopia é fortemente positiva.",
    commentary: "Th2 ativa (A): o virchowiano tem de fato predomínio Th2 e muitos anticorpos, mas esses anticorpos não protegem; a explicação para os numerosos bacilos é a falha da imunidade celular Th1, que é o ponto central cobrado.\n\nTh2 deficiente e raros bacilos (B): no virchowiano a resposta Th2 está presente, e os bacilos são numerosos, não raros.\n\nTh1 ativa com granulomas (D): descreve o polo tuberculoide, com granulomas bem formados e poucos bacilos, o oposto do virchowiano.",
    tip: "Hanseníase: Th1 forte = tuberculoide, poucos bacilos; Th1 fraca (Th2 predomina) = virchowiana, muitos bacilos.",
    reference: 'BRASILEIRO, Filho G.: Bogliolo: Patologia. 10. ed. Rio de Janeiro. Guanabara Koogan, 2021.',
    tags: ['infectologia', 'patologia', 'imunologia']
  },
  {
    id: 'tp2026-9',
    module: 'Ciências Básicas',
    text: 'Um paciente de 65 anos procura a Unidade Básica de Saúde com dor em faixa no hemitórax direito, associada a lesões vesiculares na pele, respeitando uma distribuição linear sem cruzar a linha média. Considerando a organização dos dermátomos, qual estrutura nervosa está relacionada ao padrão apresentado?',
    options: [
      '(A) Nervo intercostal periférico do mesmo nível torácico.',
      '(B) Raiz nervosa espinhal torácica correspondente ao segmento acometido.',
      '(C) Tronco do plexo nervoso torácico com distribuição segmentar.',
      '(D) Ramo comunicante do sistema nervoso autônomo torácico.'
    ],
    correctAnswer: 1,
    explanation: "Dor em faixa seguida de vesículas agrupadas num lado do tórax, que param na linha média, em um idoso: é herpes-zóster. Depois da varicela, o vírus fica latente no gânglio sensitivo da raiz dorsal e, quando a imunidade cai (com a idade, por exemplo), reativa e desce pelas fibras sensitivas daquela raiz.\n\nDermátomo é justamente a faixa de pele inervada pelas fibras sensitivas de uma única raiz espinhal. Por isso as lesões seguem um dermátomo e não cruzam a linha média: a estrutura que define o padrão é a raiz nervosa torácica do segmento acometido.",
    commentary: "Nervo intercostal (A): é o ramo anterior da raiz, um nervo periférico misto; ele faz parte do trajeto, mas o que delimita o dermátomo é a raiz espinhal (e seu gânglio), e o ramo posterior também inerva parte do dermátomo, no dorso.\n\nTronco de plexo torácico (C): os nervos torácicos não formam plexo; além disso, plexos misturam fibras de várias raízes, o que desfaz a distribuição em faixas.\n\nRamo comunicante (D): liga o nervo espinhal à cadeia simpática e conduz fibras autonômicas, não a sensibilidade cutânea por segmento.",
    tip: "Herpes-zóster: reativação no gânglio da raiz dorsal → lesões em um só dermátomo, que param na linha média.",
    reference: 'HAMMER, G.D.; MCPHEE, S.J. Fisiopatologia da Doença: Uma Introdução à Medicina Clínica. 7 ed. São Paulo: Artmed, 2015.',
    tags: ['anatomia', 'neurologia', 'infectologia']
  },
  {
    id: 'tp2026-10',
    module: 'Ciências Básicas',
    text: 'Um homem de 59 anos, de etnia amarela, é admitido em ambiente hospitalar com dor abdominal intensa de início súbito, localizada na região epigástrica, associada a náuseas e vômitos. Exames de imagem sugerem comprometimento vascular de um dos principais ramos arteriais do abdome, levando à isquemia de órgãos derivados do intestino anterior. Com base na irrigação abdominal e nos aspectos morfofuncionais, qual das artérias abaixo está mais provavelmente envolvida?',
    options: [
      '(A) Artéria mesentérica superior',
      '(B) Artéria mesentérica inferior',
      '(C) Artéria ilíaca comum',
      '(D) Tronco celíaco'
    ],
    correctAnswer: 3,
    explanation: "O tubo digestivo é dividido, pela embriologia, em intestino anterior, médio e posterior, e cada parte tem sua artéria. O intestino anterior dá origem ao esôfago abdominal, estômago, duodeno até a papila maior, fígado, vias biliares e pâncreas (com o baço irrigado pelo mesmo tronco), e todos são supridos pelo tronco celíaco, por meio das artérias gástrica esquerda, esplênica e hepática comum.\n\nA dor desses órgãos é referida no epigástrio, como neste paciente. Isquemia de órgãos do intestino anterior aponta, portanto, para o tronco celíaco.",
    commentary: "Mesentérica superior (A): irriga o intestino médio, da segunda metade do duodeno até cerca de dois terços do cólon transverso; sua dor é referida na região periumbilical.\n\nMesentérica inferior (B): irriga o intestino posterior (terço distal do transverso, descendente, sigmoide e reto superior); a dor é referida no hipogástrio.\n\nIlíaca comum (C): ramo terminal da aorta que supre a pelve e os membros inferiores, sem relação com as vísceras do intestino anterior.",
    tip: "Anterior = tronco celíaco (epigástrio); médio = mesentérica superior (umbigo); posterior = mesentérica inferior (hipogástrio).",
    reference: 'MOORE, K. L.; DALLEY, A. F.; AGUR, A. M. R. Anatomia Orientada para a Clínica. 8ª ed. Rio de Janeiro: Guanabara Koogan.',
    tags: ['anatomia', 'gastroenterologia']
  },
  {
    id: 'tp2026-11',
    module: 'Ciências Básicas',
    text: 'Um paciente de 55 anos é atendido no pronto-socorro com quadro de crise hipertensiva associada a taquicardia. Durante a avaliação, observa-se aumento do débito cardíaco como um dos principais determinantes da elevação pressórica. Qual receptor está mais diretamente envolvido nesse caso?',
    options: [
      '(A) Receptor α1',
      '(B) Receptor α2',
      '(C) Receptor β1',
      '(D) Receptor β2'
    ],
    correctAnswer: 2,
    explanation: "Pressão arterial é débito cardíaco multiplicado pela resistência vascular periférica, e o débito é frequência cardíaca vezes volume sistólico. O enunciado diz que o aumento da pressão vem do débito, com taquicardia.\n\nO receptor que aumenta a frequência (efeito cronotrópico) e a força de contração (efeito inotrópico) é o β1, predominante no coração, estimulado pela noradrenalina e pela adrenalina. O β1 também está nas células justaglomerulares e estimula a liberação de renina. É o receptor bloqueado pelos betabloqueadores cardiosseletivos, como metoprolol e atenolol.",
    commentary: "Receptor α1 (A): fica na musculatura lisa dos vasos e eleva a pressão por vasoconstrição, isto é, pelo aumento da resistência periférica, não do débito.\n\nReceptor α2 (B): atua sobretudo na terminação pré-sináptica e no sistema nervoso central, inibindo a liberação de noradrenalina; reduz a atividade simpática (base da ação da clonidina).\n\nReceptor β2 (D): causa broncodilatação e vasodilatação em alguns leitos, como o músculo esquelético; seu efeito cardíaco é pequeno.",
    tip: "β1 = coração (FC e contratilidade) e renina; β2 = brônquios e vasodilatação; α1 = vasoconstrição; α2 = freio pré-sináptico.",
    reference: 'COSTANZO, L. S. Fisiologia. 6ª ed. Elsevier.',
    tags: ['fisiologia', 'farmacologia', 'cardiologia']
  },
  {
    id: 'tp2026-12',
    module: 'Ciências Básicas',
    text: 'Paciente feminina, 48 anos, com histórico de hipertensão arterial essencial bem controlada, comparece ao ambulatório para acompanhamento. Há três meses, iniciou tratamento com um inibidor da enzima conversora de angiotensina (IECA). Nos exames de rotina atuais, observa-se uma elevação discreta e estável da creatinina sérica (de 0,9mg/dL para 1,2mg/dL) e uma consequente redução na taxa de filtração glomerular estimada (TFGe), que o médico assistente considera uma alteração esperada e clinicamente aceitável nesse contexto, após exclusão de outras causas. Qual o efeito renal esperado com o início do tratamento?',
    options: [
      '(A) Vasodilatação da arteríola eferente glomerular, resultando na redução da pressão hidrostática intraglomerular.',
      '(B) Diminuição da permeabilidade capilar glomerular, devido à inibição direta da angiotensina II nos podócitos.',
      '(C) Aumento da pressão hidrostática no espaço de Bowman, dificultando o processo de filtração.',
      '(D) Aumento da resistência vascular na arteríola aferente, diminuindo o fluxo sanguíneo renal para os glomérulos.'
    ],
    correctAnswer: 0,
    explanation: "A angiotensina II contrai as duas arteríolas do glomérulo, mas age mais sobre a eferente. Essa constrição na saída do glomérulo mantém a pressão hidrostática dentro dos capilares glomerulares e, com ela, a filtração.\n\nAo bloquear a formação de angiotensina II, o IECA dilata a arteríola eferente: a pressão intraglomerular cai, a filtração diminui um pouco e a creatinina sobe discretamente. É um efeito esperado e, a longo prazo, protetor, porque reduz a hiperfiltração e a proteinúria. Na prática, uma elevação de creatinina de até cerca de 30% em relação ao basal, estável, é tolerada sem suspender o remédio; aumentos maiores levam a investigar estenose de artéria renal ou hipovolemia.",
    commentary: "Menor permeabilidade por ação nos podócitos (B): a queda da filtração com IECA é hemodinâmica, por mudança de pressão, e não por alteração da barreira de filtração.\n\nAumento da pressão no espaço de Bowman (C): ocorre quando há obstrução ao fluxo urinário, como em cálculos ou aumento da próstata, não como efeito do IECA.\n\nMais resistência na arteríola aferente (D): sem angiotensina II, a tendência da aferente é dilatar ou se manter, não contrair; contrair a aferente é efeito, por exemplo, dos anti-inflamatórios não esteroides.",
    tip: "IECA/BRA dilatam a eferente → menos pressão no glomérulo → creatinina sobe até ~30% e é aceitável.",
    reference: 'LINDA S COSTANZO. Fisiologia, Elsevier, 7 edição, 2025. | GUYTON & HALL. Tratado de Fisiologia Médica, Elsevier, 14 edição, 2021.',
    tags: ['fisiologia', 'farmacologia', 'nefrologia']
  },
  {
    id: 'tp2026-13',
    module: 'Ciências Básicas',
    text: 'Paciente pardo de 34 anos, em avaliação pré-operatória para colecistectomia eletiva. Seus exames laboratoriais revelam: Plaquetas dentro da normalidade, Tempo de Protrombina (TP) normal, mas Tempo de Tromboplastina Parcial Ativada (TTPA) significativamente prolongado. O teste de mistura (plasma do paciente + plasma normal) corrige o TTPA para valores normais. A deficiência de qual fator da coagulação melhor explica o achado?',
    options: [
      '(A) Fator II (Protrombina), impossibilitando a conversão de fibrinogênio em fibrina.',
      '(B) Fator VII, indicando comprometimento da via extrínseca.',
      '(C) Fator VIII, indicando comprometimento da via intrínseca.',
      '(D) Fator X, indicando comprometimento da via comum.'
    ],
    correctAnswer: 2,
    explanation: 'O prolongamento isolado do TTPA com TP normal aponta para defeito na via intrínseca da coagulação (Fatores XII, XI, IX ou VIII). O Fator VIII é o mais representativo neste cenário.',
    commentary: 'Comentários sobre a resposta correta:\n(C) O TTPA (Tempo de Tromboplastina Parcial Ativada) avalia a integridade da via intrínseca e comum. Como o TP (via extrínseca) está normal, o defeito deve estar em fator exclusivo da via intrínseca, como o Fator VIII. O teste de mistura corrigido afasta inibidores circulantes e confirma a deficiência de fator.\n\nComentários sobre os distratores:\n(A) O Fator II pertence à via comum e prolongaria ambos os tempos.\n(B) O Fator VII pertence à via extrínseca e prolongaria exclusivamente o TP.\n(D) O Fator X pertence à via comum e causaria alteração no TP e no TTPA.',
    reference: 'GUYTON, A. C.; HALL, J. E. Tratado de Fisiologia Médica. 14. ed. Rio de Janeiro: Elsevier, 2021.',
    tags: ['fisiologia', 'hematologia']
  },
  {
    id: 'tp2026-14',
    module: 'Ciências Básicas',
    text: 'Mulher, 35 anos, previamente hígida, dá entrada no hospital com quadro de vômitos, desidratação e taquipneia. Dextro: 500mg/dL. Gasometria arterial revela: pH 7,09 (VR: 7,35 - 7,45); HCO₃ 6mEq/L (VR: 22 - 26) e pCO₂ 18mmHg (VR: 35 - 45). Exames laboratoriais: Na 140mEq/L (VR: 135 - 145) e Cl 100mEq/L (VR: 98 - 106). Sobre o ânion gap, pode-se afirmar que:',
    options: [
      '(A) Está reduzido, indicando perda de bicarbonato e compensação respiratória por hipoventilação.',
      '(B) Está aumentado, e a hiperventilação reduz a pCO₂, atuando como mecanismo compensatório para a acidemia.',
      '(C) Está normal, caracterizando acidose metabólica hiperclorêmica com compensação renal imediata.',
      '(D) Está aumentado, sendo a compensação realizada principalmente pelo aumento da retenção de CO₂.'
    ],
    correctAnswer: 1,
    explanation: 'O cálculo do ânion gap é: 140 - (100 + 6) = 34 mEq/L, que está expressivamente elevado, secundário ao acúmulo de cetoácidos. A hiperventilação compensatória visa reduzir a pCO₂ para atenuar o pH ácido.',
    commentary: 'Comentários sobre a resposta correta:\n(B) O ânion gap está aumentado [AG = Na - (Cl + HCO3) = 140 - 106 = 34 mEq/L], indicando acúmulo de corpos cetônicos. A hiperventilação reduz o CO₂, atuando como mecanismo compensatório essencial para tentar elevar o pH sanguíneo.\n\nComentários sobre os distratores:\n(A) O ânion gap está expressivamente aumentado e a compensação pulmonar ocorre por hiperventilação.\n(C) O ânion gap está aumentado (34), o que afasta acidose hiperclorêmica pura.\n(D) A compensação envolve eliminação vigorosa de CO₂ através da taquipneia (respiração de Kussmaul), não retenção.',
    reference: 'HALL, J. E; HALL, M. E. Guyton & Hall - Tratado de Fisiologia Médica. 14. ed. Rio de Janeiro: GEN Guanabara Koogan, 2021.',
    tags: ['fisiologia', 'nefrologia', 'endocrinologia']
  },
  {
    id: 'tp2026-15',
    module: 'Ciências Básicas',
    text: 'Homem de 52 anos é internado com diagnóstico de insuficiência cardíaca descompensada. Apresenta dispneia aos mínimos esforços, ortopneia, edema de membros inferiores, turgência jugular e crepitações bibasais. Durante a avaliação hemodinâmica, identifica-se aumento da pressão de enchimento ventricular, sem elevação proporcional do débito cardíaco. Qual mecanismo fisiopatológico explica melhor esse achado?',
    options: [
      '(A) Diminuição do retorno venoso com redução do volume sistólico.',
      '(B) Aumento da contratilidade miocárdica proporcional ao volume diastólico final.',
      '(C) Aumento da complacência ventricular com deslocamento da curva de Frank-Starling para baixo.',
      '(D) Aumento da frequência cardíaca compensatória com elevação do débito cardíaco.'
    ],
    correctAnswer: 2,
    explanation: 'A disfunção miocárdica grave desloca a curva de Frank-Starling para baixo, de modo que o aumento no volume diastólico final/pressão de enchimento não se traduz em maior volume de ejeção sistólico.',
    commentary: 'Comentários sobre a resposta correta:\n(C) O aumento do volume/pressão diastólica final sem aumento do débito cardíaco demonstra uma falha e exaustão do mecanismo de Frank-Starling em corações insuficientes, com deslocamento nítido da curva de performance ventricular para baixo.\n\nComentários sobre os distratores:\n(A) O retorno venoso e as pressões de enchimento encontram-se elevados secundariamente à congestão.\n(B) Descreve a regulação miocárdica intacta (fisiológica), inexistente no paciente cardiopata dilatado descompensado.\n(D) A taquicardia é resposta compensatória mas é ineficaz para normalizar o débito cardíaco per se.',
    reference: 'Han JC, Loiselle D, Taberner A, Tran K. Re-visiting the Frank-Starling nexus. Prog Biophys Mol Biol. 2021 Jan;159:10-21.',
    tags: ['fisiologia', 'cardiologia']
  },
  {
    id: 'tp2026-16',
    module: 'Ciências Básicas',
    text: 'Um homem de 41 anos, internado por hipertensão resistente e fraqueza muscular, apresenta PA de 168/100mmHg. Exames sanguíneos revelam: potássio 2,9mEq/L (VR: 3,5 - 5,0); bicarbonato 33mEq/L (VR: 22 - 28); pH arterial 7,48 (VR: 7,35 - 7,45), atividade de renina plasmática reduzida e aldosterona elevada. Identifique a alteração que melhor explica os achados clínicos e laboratoriais desse paciente.',
    options: [
      '(A) Redução da reabsorção distal de Na⁺, com redução da secreção de K⁺ e H⁺, favorecendo diminuição do HCO₃⁻ plasmático.',
      '(B) Aumento da reabsorção distal de Na⁺, com aumento da secreção de K⁺ e H⁺, favorecendo elevação do HCO₃⁻ plasmático.',
      '(C) Aumento da secreção tubular de HCO₃⁻, com redução da reabsorção de Na⁺ e retenção simultânea de K⁺.',
      '(D) Redução da secreção tubular de K⁺, com aumento da excreção de Na⁺ e retenção compensatória de H⁺.'
    ],
    correctAnswer: 1,
    explanation: 'O hiperaldosteronismo primário aumenta a reabsorção distal de Na⁺ (provocando hipertensão) e estimula a secreção de K⁺ e H⁺ pelas células intercaladas, gerando hipocalemia e alcalose metabólica.',
    commentary: 'Comentários sobre a resposta correta:\n(B) O quadro clínico-laboratorial é compatível com hiperaldosteronismo primário. A aldosterona atua promovendo reabsorção distal de Na⁺ (expansão volêmica/hipertensão), secreção tubular ativa de K⁺ (hipocalemia) e secreção de H⁺ pelas células intercaladas alfa, promovendo alcalose metabólica com elevação de HCO₃⁻.\n\nComentários sobre os distratores:\n(A) A aldosterona aumenta, e não reduz, a reabsorção de sódio e a eliminação de K⁺ e H⁺.\n(C) Contradiz o papel de retenção de Na e espoliação de K clássica da aldosterona.\n(D) No hiperaldosteronismo a secreção de K⁺ e de H⁺ está aumentada, e a excreção de Na⁺ reduzida distalmente.',
    reference: 'HALL, John E.; HALL, Michael E. Guyton & Hall - Tratado de Fisiologia Médica. 14. ed. Rio de Janeiro: GEN Guanabara Koogan, 2021. Capítulo 28.',
    tags: ['fisiologia', 'nefrologia', 'endocrinologia']
  },
  {
    id: 'tp2026-17',
    module: 'Ciências Básicas',
    text: 'Paciente de 29 anos procura ambulatório por palpitações, sudorese excessiva e intolerância ao calor há 4 meses. Ao exame físico, apresenta tremor fino de extremidades, taquicardia e aumento difuso da glândula tireoide. Os exames laboratoriais revelam T4 livre elevado, e a pesquisa de anticorpos contra o receptor de TSH (TRAb) é positiva. Assinale o perfil hormonal e a relação de feedback do eixo hipotálamo-hipófise-tireoide mais compatíveis com esse quadro.',
    options: [
      '(A) TSH reduzido, com redução de TRH, por feedback negativo exercido pelo excesso de T4 sobre o hipotálamo e a adenohipófise.',
      '(B) TSH elevado, com aumento de TRH, por perda do feedback negativo normalmente exercido pelos hormônios tireoidianos sobre o hipotálamo e a adeno-hipófise.',
      '(C) TSH elevado, com redução de TRH, por dissociação entre a resposta da adeno-hipófise e a regulação hipotalâmica do eixo.',
      '(D) TSH reduzido, com aumento de TRH, por estímulo compensatório do hipotálamo diante da hiperfunção tireoidiana.'
    ],
    correctAnswer: 0,
    explanation: 'A doença de Graves estimula excessivamente a tireoide via TRAb. O excesso de T4 livre circulante exerce feedback negativo robusto sobre hipotálamo e hipófise, suprimindo o TRH e o TSH.',
    commentary: 'Comentários sobre a resposta correta:\n(A) O quadro clínico é compatível com hipertireoidismo primário (Doença de Graves). O T4 livre elevado exerce feedback negativo clássico sobre o hipotálamo e a adeno-hipófise, inibindo coordenadamente a síntese de TRH e TSH.\n\nComentários sobre os distratores:\n(B) TSH e TRH elevados são compatíveis com hipotireoidismo ou adenoma hipofisário central, não Graves.\n(C) Incorreta pois o feedback negativo suprime de forma alinhada ambos os hormônios regulatórios superiores.\n(D) Diante de T4 livre elevado, o hipotálamo reduz a síntese de TRH por feedback, não havendo ativação.',
    reference: 'HALL, John E.; HALL, Michael E. Guyton & Hall - Tratado de Fisiologia Médica. 14. ed. Rio de Janeiro: GEN Guanabara Koogan, 2021. Capítulos 76 e 77.',
    tags: ['fisiologia', 'endocrinologia']
  },
  {
    id: 'tp2026-18',
    module: 'Ciências Básicas',
    text: 'Paciente, 55 anos, tabagista de longa data, com diagnóstico de DPOC, apresenta dispneia progressiva e hipoxemia crônica ao exame clínico durante internação. Considerando as alterações fisiopatológicas da relação ventilação-perfusão, assinale o padrão predominante nesse paciente.',
    options: [
      '(A) Difusão aumentada',
      '(B) Áreas com alto V/Q',
      '(C) Relação V/Q normal',
      '(D) Áreas com baixo V/Q'
    ],
    correctAnswer: 3,
    explanation: 'O principal mecanismo de hipoxemia na DPOC é a incompatibilidade ventilação-perfusão, com predomínio de áreas de baixo V/Q, causadas por obstrução e hipoventilação alveolar relativa.',
    commentary: 'Comentários sobre a resposta correta:\n(D) Na DPOC há áreas de alvéolos mal ventilados (obstrução crônica por muco/espasmo) com perfusão sanguínea regional mantida. Isso gera áreas de baixo quociente V/Q, as quais representam o principal motor da hipoxemia arterial nestes indivíduos.\n\nComentários sobre os distratores:\n(A) A capacidade de difusão está diminuída e não aumentada na DPOC.\n(B) Áreas com alto V/Q agem como espaço morto fisiológico (comum na DPOC, mas não o principal causador da hipoxemia crônica comparado ao efeito shunt).\n(C) A doença cursa com severa inadequação da homogeneidade da relação V/Q.',
    reference: 'West. Respiratory Physiology. 2021 | Guyton & Hall. Fisiologia Médica. 2021.',
    tags: ['fisiologia', 'pneumologia']
  },
  {
    id: 'tp2026-19',
    module: 'Ciências Básicas',
    text: 'Mulher cis, branca, 42 anos, é encaminhada do ambulatório secundário de oncologia para avaliação de adenocarcinoma broncoalveolar. A investigação diagnóstica inclui tomografia de tórax, biópsia pulmonar com exame histopatológico e análise molecular que evidencia mutação pontual no gene EGFR (exon 19), com aumento da expressão da proteína receptora tirosina quinase. A paciente apresenta exames laboratoriais com leucocitose discreta, VHS elevada e níveis séricos de lactato desidrogenase (LDH) acima dos valores de referência. Com base nessas informações, qual a alternativa que melhor expressa o papel desse gene alterado no contexto da patogênese tumoral?',
    options: [
      '(A) O gene EGFR atua como inibidor da apoptose celular, inibindo o complexo ciclina-quinase (CDKs).',
      '(B) O gene EGFR é uma oncoproteína supressora de crescimento, cuja inativação por mutação pontual reduz a proliferação celular.',
      '(C) O gene EGFR é um gene supressor de tumor que, quando mutado, perde a capacidade de reparar DNA, favorecendo a apoptose exacerbada.',
      '(D) O gene EGFR atua como proto-oncogene e sua mutação pontual o converte em oncogene, levando à ativação crônica de vias de sinalização de crescimento e à expansão clonal de células neoplásicas.'
    ],
    correctAnswer: 3,
    explanation: 'O gene EGFR é um proto-oncogene. Mutação com ganho de função gera uma proteína constitutivamente ativa (oncogene) que promove crescimento e proliferação contínuas das células tumorais.',
    commentary: 'Comentários sobre a resposta correta:\n(D) O gene EGFR é um proto-oncogene que codifica receptor com atividade tirosina quinase. Sua mutação pontual gera hiperativação permanente das vias de sinalização intracelular mitogênica, constituindo um oncogene que promove replicação celular descontrolada.\n\nComentários sobre os distratores:\n(A) A inibição direta das CDKs não é a via principal de atuação oncogênica do EGFR.\n(B) EGFR não é uma proteína supressora de tumor, e a mutação é de ganho de função.\n(C) EGFR não é um gene supressor de tumor nem participa de reparo de DNA direto.',
    reference: 'ZANDI, Roza et al. Cellular signalling, v. 19, n. 10, p. 2013-2023, 2007.',
    tags: ['genética', 'oncologia', 'patologia']
  },
  {
    id: 'tp2026-20',
    module: 'Ciências Básicas',
    text: 'Recém-nascido de 10 dias, encaminhado ao ambulatório secundário por apresentar hipotonia, braquicefalia, fendas palpebrais oblíquas para cima, prega epicantal, mãos pequenas com clinodactilia do quinto dedo e prega palmar única bilateral. Considerando a hipótese diagnóstica principal, qual é o mecanismo genético mais frequente responsável pelo quadro e qual alteração citogenética corresponde a esse mecanismo, respectivamente?',
    options: [
      '(A) Não disjunção meiótica durante a gametogênese materna, resultando em 47 cromossomos com trissomia livre do cromossomo 21.',
      '(B) Translocação robertsoniana desequilibrada entre os cromossomos 14 e 21 herdada de um dos genitores, resultando em 46 cromossomos com trissomia funcional do braço longo do 21.',
      '(C) Não disjunção mitótica pós-zigótica em fases iniciais do desenvolvimento embrionário, resultando em mosaicismo com duas linhagens celulares (46/47,+21).',
      '(D) Duplicação segmentar do braço longo do cromossomo 21 decorrente de crossing-over desigual na meiose parental, resultando em cromossomo 21 estruturalmente anormal com material duplicado.'
    ],
    correctAnswer: 0,
    explanation: 'A trissomia livre do cromossomo 21 é responsável por ~95% dos casos de Síndrome de Down, originada principalmente por não disjunção meiótica materna.',
    commentary: 'Comentários sobre a resposta correta:\n(A) O mecanismo citogenético mais comum na Síndrome de Down é a não disjunção meiótica materna (cerca de 95%), resultando na trissomia livre do 21 e cariótipo com 47 cromossomos.\n\nComentários sobre os distratores:\n(B) A translocação robertsoniana representa aproximadamente 3-4% dos casos.\n(C) O mosaicismo celular representa cerca de 1-2% dos casos.\n(D) Duplicações segmentares por crossing-over desigual ocorrem em menos de 1% dos casos.',
    reference: 'JONES, K. L.; JONES, M. C.; DEL CAMPO. Smith\'s Recognizable Patterns of Human Malformation.',
    tags: ['genética', 'pediatria']
  },
  // ---- Teste de Progresso 2019 (gabarito oficial) ----
  {
    id: 'tp2019-1',
    module: 'Ciências Básicas',
    text: 'Paciente alcoolista e sem-teto queixa-se que seus dentes estão soltos e as gengivas sangram com facilidade. Suspeita-se que ele tenha uma dieta pobre e que pode ter escorbuto (deficiência de vitamina C). O escorbuto é caracterizado por um defeito na hidroxilação de prolina.\n\nDos componentes químicos abaixo, o relacionado com esta condição é:',
    options: [
      '(A) Fibronectina',
      '(B) Elastina',
      '(C) Ácido hialurônico',
      '(D) Colágeno'
    ],
    correctAnswer: 3,
    explanation: 'A vitamina C é cofator das enzimas prolil e lisil-hidroxilases, essenciais para a hidroxilação dos resíduos de prolina e lisina do colágeno. Sem ela, a tripla hélice fica instável e o colágeno, frágil.\n\nIsso explica os sinais do escorbuto: sangramento gengival, perda dentária, hemorragias perifoliculares e má cicatrização.',
    commentary: 'Fibronectina, elastina e ácido hialurônico são componentes da matriz extracelular, mas não dependem da hidroxilação de prolina mediada pela vitamina C.',
    reference: 'Junqueira LC & Carneiro J. Biologia Celular e Molecular - Biologia da Interação Célula-Matriz Extracelular. 8 ed. Guanabara Koogan, 2005, pag. 229-238.',
    tags: ['bioquímica', 'vitaminas', 'colágeno']
  },
  {
    id: 'tp2019-2',
    module: 'Ciências Básicas',
    text: 'Menino, 2 anos, apresenta desde o nascimento esclera azulada, edema de extremidades e histórico de fraturas. As radiografias mostram fratura recente do colo do fêmur direito, bem como várias calosidades ósseas indicativas de consolidações de fraturas anteriores.\n\nO diagnóstico é:',
    options: [
      '(A) Esclerose sistêmica progressiva',
      '(B) Osteogênese imperfeita',
      '(C) Síndrome de Ehler-Danlos',
      '(D) Raquitismo'
    ],
    correctAnswer: 1,
    explanation: 'Fraturas de repetição desde o nascimento, com calos de consolidação de fraturas antigas e escleras azuladas, caracterizam a osteogênese imperfeita, um defeito quantitativo ou qualitativo do colágeno tipo I.\n\nA esclera fina deixa transparecer a coroide, daí a cor azulada.',
    commentary: 'A síndrome de Ehlers-Danlos cursa com hiperelasticidade da pele e hipermobilidade articular, não com fraturas múltiplas. O raquitismo causa deformidades por falha de mineralização, sem esclera azul. A esclerose sistêmica é doença autoimune do adulto.',
    reference: 'JUNQUEIRA, L. C. U. CARNEIRO, J. Histologia Básica: texto e atlas. 12. ed. Rio de Janeiro: Guanabara Koogan, 2013. / KIERSZENBAUM, A. L; TRES, L. L. Histologia e Biologia Celular: uma introdução à patologia. 4. ed. Rio de Janeiro: Elsevier, 2016.',
    tags: ['histologia', 'genética', 'colágeno']
  },
  {
    id: 'tp2019-3',
    module: 'Ciências Básicas',
    image: '/images/tp2019-3.webp',
    text: 'Mulher, 15 anos, procurou a UBS referindo edema de pálpebras bilateral, com prurido intenso, acompanhado de lesões avermelhadas no pescoço, também pruriginosas, que se repetem em intervalos variados nos últimos seis meses. Refere ainda que, anteriormente, as lesões apareciam no início da semana e desapareciam sem necessidade de tratamento, porém nas últimas semanas elas permanecem inalteradas.\n\nA resposta imune envolvida é:',
    options: [
      '(A) Hipersensibilidade tipo II ou citotóxica.',
      '(B) Hipersensibilidade tipo I ou imediata.',
      '(C) Hipersensibilidade tipo IV ou tardia.',
      '(D) Hipersensibilidade tipo III ou mediada por complexo imune.'
    ],
    correctAnswer: 2,
    explanation: 'Edema palpebral pruriginoso e lesões eczematosas recorrentes no pescoço, que surgem no início da semana e regridem com o afastamento, sugerem dermatite alérgica de contato (por exemplo, a cosméticos ou esmaltes).\n\nA dermatite de contato alérgica é o protótipo da hipersensibilidade tipo IV (tardia), mediada por linfócitos T sensibilizados, com reação 48–72 horas após a reexposição.',
    commentary: 'A tipo I (IgE) é imediata e produz urticária e angioedema em minutos. A tipo II é citotóxica, mediada por anticorpos contra antígenos de membrana. A tipo III depende de imunocomplexos (doença do soro, nefrite lúpica).',
    reference: 'Azulay, Ruben David. Dermatologia 7ª edição, 2017 / Belda Jr., Walter. Tratado de Dermatologia 2ª edição, 2014',
    tags: ['imunologia', 'hipersensibilidade', 'dermatologia']
  },
  {
    id: 'tp2019-4',
    module: 'Ciências Básicas',
    text: 'Mulher, 25 anos, portadora de Esclerose Lateral Amiotrófica (ELA) apresenta piora da deambulação. Exame físico geral: sem alterações aparentes. Exame neurológico com alteração motora importante em membros inferiores e moderada em membros superiores.\n\nConsiderando que a ELA é uma doença neurodegenerativa que atinge especificamente neurônios motores que controlam os músculos esqueléticos, a localização anatômica dos corpos celulares para os referidos neurônios é nos:',
    options: [
      '(A) Gânglios da cadeia simpática.',
      '(B) Cornos posteriores da medula espinal.',
      '(C) Cornos anteriores da medula espinal.',
      '(D) Gânglios da raiz posterior.'
    ],
    correctAnswer: 2,
    explanation: 'Os corpos celulares dos neurônios motores inferiores que inervam a musculatura esquelética de tronco e membros ficam no corno anterior da substância cinzenta da medula espinal. A ELA acomete esses neurônios e os neurônios motores superiores do córtex.',
    commentary: 'Os gânglios da cadeia simpática pertencem ao sistema nervoso autônomo. Os cornos posteriores e os gânglios da raiz dorsal são estruturas sensitivas.',
    reference: 'Cosenza RM. Fundamentos de Neuroanatomia. 4a Ed. Rio de Janeiro: Guanabara-Koogan. 2013. / Pezzi LHA, Correia JAP, Prinz RAD, Pessanha Neto S. Anatomia Clínica Baseada em Problemas. Rio de Janeiro: Guanabara- Koogan. 2013. / Moore KL, Agur AMR, Dalley AF. Fundamentos de Anatomia Clínica. 4a Ed. Rio de Janeiro: Guanabara-Koogan. 2013.',
    tags: ['neuroanatomia', 'medula espinal']
  },
  {
    id: 'tp2019-5',
    module: 'Ciências Básicas',
    text: 'Homem, 40 anos, com antecedente de febre reumática, queixa-se de falta de ar e fraqueza aos esforços. Exame físico: sopro sistólico no 2º espaço intercostal paraesternal direito.\n\nCorrelacionando as queixas, a ausculta e a morfologia cardíaca, provavelmente o paciente é portador de:',
    options: [
      '(A) Insuficiência mitral',
      '(B) Estenose aórtica',
      '(C) Insuficiência aórtica',
      '(D) Estenose mitral'
    ],
    correctAnswer: 1,
    explanation: 'O 2º espaço intercostal paraesternal direito é o foco aórtico. Um sopro sistólico nesse foco indica fluxo turbulento pela valva aórtica durante a ejeção, isto é, estenose aórtica — compatível com a sequela reumática e os sintomas de baixo débito aos esforços.',
    commentary: 'A insuficiência aórtica produz sopro diastólico. A estenose mitral, sopro diastólico no foco mitral. A insuficiência mitral, sopro sistólico no foco mitral (ápice), irradiado para a axila.',
    reference: 'BICKLEY, LS. Propedêutica Médica. 11ª. Ed, Guanabara Koogan, Rio de Janeiro, 2015.',
    tags: ['semiologia', 'cardiologia', 'valvopatias']
  },
  {
    id: 'tp2019-6',
    module: 'Ciências Básicas',
    image: '/images/tp2019-6.webp',
    text: 'A figura abaixo representa uma condição em que a frequência cardíaca, gerada pelo principal marcapasso cardíaco (nó sinoatrial) é modificada.\n\nEste fato é decorrente de:',
    options: [
      '(A) A atividade da porção eferente simpática aumenta a permeabilidade da membrana ao íon Na⁺ e Ca²⁺, com isso, aumenta a frequência de despolarização do marcapasso.',
      '(B) A atividade da porção eferente parassimpática aumenta a permeabilidade da membrana ao íon Na⁺, com isso, diminui a frequência de despolarização do marcapasso.',
      '(C) A atividade da porção eferente parassimpática aumenta a permeabilidade da membrana ao íon K⁺, com isso, aumenta a frequência de despolarização do marcapasso.',
      '(D) A atividade da porção eferente simpática aumenta a permeabilidade da membrana ao íon K⁺, com isso, aumenta a frequência de despolarização do marcapasso.'
    ],
    correctAnswer: 0,
    explanation: 'A estimulação simpática (noradrenalina em receptores β1) aumenta as correntes de entrada de Na⁺ (corrente \'funny\', If) e de Ca²⁺ nas células do nó sinoatrial. A despolarização diastólica fica mais rápida, o limiar é atingido antes e a frequência cardíaca aumenta — a curva azul da figura.',
    commentary: 'A estimulação parassimpática (acetilcolina) aumenta a condutância ao K⁺ e hiperpolariza a célula, reduzindo a frequência (curva vermelha). O aumento da permeabilidade ao K⁺ não acelera a despolarização.',
    reference: 'Douglas, C.R. - Tratado de Fisiologia Aplicada às Ciências Médicas. 6ª edição, Guanabara Koogan. Rio de Janeiro, 2006. / Berne & Levy - Fisiologia. 6ª edição, Elsevier. Rio de janeiro, 2009.',
    tags: ['fisiologia', 'cardiologia', 'sistema nervoso autônomo']
  },
  {
    id: 'tp2019-7',
    module: 'Ciências Básicas',
    text: 'Mulher, 38 anos, terceiro trimestre gestacional, vem para consulta de pré-natal na unidade básica de saúde com o resultado do exame ultrassonográfico, que detectou a presença de saco herniário na linha mediana da região abdominal do feto, com diâmetro de ± 2cm. Anomalia cardiovascular estava associada.\n\nO defeito consiste de:',
    options: [
      '(A) Gastrosquise, que decorre da falha do retorno das alças intestinais para o abdome no final da 10ª semana, resultando em vísceras herniadas e recobertas pela membrana que envolve o cordão umbilical.',
      '(B) Onfalocele, que decorre da falha na rotação das alças intestinais durante a herniação fisiológica, resultando em exteriorização das vísceras, que ficam recobertas pela membrana que envolve o cordão umbilical.',
      '(C) Gastrosquise, que resulta da falha na rotação das alças intestinais durante a herniação fisiológica, leva à exteriorização das vísceras, as quais são recobertas pela membrana que envolve o cordão umbilical.',
      '(D) Onfalocele, que resulta da falha do retorno das alças intestinais para o abdome no final da 10ª semana, levando à exteriorização das vísceras, que ficam recobertas pela membrana que envolve o cordão umbilical.'
    ],
    correctAnswer: 3,
    explanation: 'A alça intestinal média hernia fisiologicamente para o cordão umbilical na 6ª semana e retorna à cavidade abdominal ao fim da 10ª semana. A falha desse retorno gera a onfalocele: defeito na linha média, com vísceras recobertas pela membrana do cordão (âmnio e peritônio).\n\nA onfalocele associa-se com frequência a cardiopatias e cromossomopatias, como no caso.',
    commentary: 'A gastrosquise é um defeito paraumbilical, geralmente à direita, com alças expostas sem membrana de cobertura e baixa associação com outras malformações. A falha de rotação causa má rotação intestinal, não onfalocele.',
    reference: 'Sadler, T.W. Langman Embriologia Médica. 12.ª ed. Rio de Janeiro: Guanabara koogan. 2013. / Moore, K. L., Persaud, T.V.N., Torchia, M.G. Embriologia Clínica. 10.ª ed. Rio de Janeiro: Elsevier. 2016.',
    tags: ['embriologia', 'defeitos da parede abdominal']
  },
  {
    id: 'tp2019-8',
    module: 'Ciências Básicas',
    image: '/images/tp2019-8.webp',
    text: 'Parturiente desenvolveu infecção hospitalar na incisão cirúrgica da cesariana, da qual foi isolado Staphylococcus aureus, cujo antibiograma é representado pela figura abaixo:\n\nEm Staphylococcus aureus, a resistência à oxacilina é:',
    options: [
      '(A) Determinada pelo gene mecA, localizado no cromossomo da bactéria, e geralmente é acompanhada por resistência aos demais antibióticos beta-lactâmicos.',
      '(B) Observada em poucas amostras isoladas de pacientes hospitalizados, mas indutor de alta mortalidade pela frequente capacidade de causar sepse.',
      '(C) Contornada pela utilização da associação de outras penicilinas com inibidores de beta-lactamases do tipo sulbactam e clavulanato.',
      '(D) Mediada essencialmente pela produção de beta-lactamases, enzimas que hidrolisam o anel beta-lactâmico e inativam a droga, codificadas por genes plasmidiais.'
    ],
    correctAnswer: 0,
    explanation: 'A resistência do Staphylococcus aureus à oxacilina (MRSA) é mediada pelo gene cromossômico mecA, que codifica a PBP2a, uma proteína ligadora de penicilina com baixa afinidade pelos β-lactâmicos. Por isso, o MRSA é resistente a praticamente todos os β-lactâmicos.',
    commentary: 'O MRSA é frequente em infecções hospitalares no Brasil, não raro. Inibidores de β-lactamase não superam a PBP2a. A produção de penicilinase (plasmidial) explica a resistência à penicilina, não à oxacilina.',
    reference: 'Murray PR, Rosenthal KS & Pfaller MA. Microbiologia Médica. 6a Ed. Elsevier Editora Ltda, Rio de Janeiro, 2009. / Ratti RP & Sousa CP. Staphylococcus aureus meticilina resistente (MRSA) e infecções nosocomiais. Ver,Ciewnc.Fram.Basica Apl. 30(2):137-43, 2009.',
    tags: ['microbiologia', 'resistência bacteriana', 'staphylococcus']
  },
  {
    id: 'tp2019-9',
    module: 'Ciências Básicas',
    text: 'A extensa variabilidade genética existente na maioria dos vírus de RNA deve-se à:',
    options: [
      '(A) Grande capacidade de recombinação entre segmentos de genomas de dois vírus diferentes em situações de coinfecção.',
      '(B) Pressão seletiva de anticorpos que induz os vírus à variação antigênica.',
      '(C) Falta da função de correção de erros de transcrição na RNA-polimerase viral.',
      '(D) Reconhecimento de RNA de dupla fita por receptores do tipo ‘toll’.'
    ],
    correctAnswer: 2,
    explanation: 'As RNA-polimerases virais não têm atividade de revisão (proofreading 3\'→5\'). Erros de incorporação se acumulam a cada ciclo de replicação, gerando grande diversidade genética e rápido surgimento de variantes.',
    commentary: 'Recombinação/rearranjo ocorre em vírus segmentados (como influenza), mas não explica a variabilidade contínua da maioria dos vírus de RNA. A pressão de anticorpos seleciona variantes, mas não as cria. Receptores toll-like participam da resposta imune.',
    reference: 'Brooks GF et al. Jawetz Medical Microbiology (25th Ed). McGraw Hill, 2010',
    tags: ['microbiologia', 'virologia']
  },
  {
    id: 'tp2019-10',
    module: 'Ciências Básicas',
    text: 'Menino, 5 anos, morador da zona urbana do centro-oeste paulista, compareceu à Unidade Básica de Saúde apresentando quadro de febre não aferida há 1 mês. Há 15 dias, a mãe também observou perda do apetite e emagrecimento, além de episódios de diarreia. Exame físico: regular estado geral, sinais vitais preservados, mucosas descoradas 2+/4+ e hepatoesplenomegalia. O hemograma revelou anemia, leucopenia e plaquetopenia.\n\nConsiderando que o paciente nunca se ausentou da cidade, nunca recebeu transfusão sanguínea, mora em casa de alvenaria, e os aspectos clínicos e epidemiológicos, a conduta é:',
    options: [
      '(A) Coleta de material para pesquisa de H1N1 e tratamento adequado.',
      '(B) Realização de teste rápido para leishmaniose e pesquisa de leishmania em esfregaço de aspirado de medula óssea.',
      '(C) Xenodiagnóstico para pesquisa de Trypanosoma cruzi (fase aguda da doença de Chagas).',
      '(D) Exame parasitológico das fezes para pesquisa de ovos de Schistosoma mansoni.'
    ],
    correctAnswer: 1,
    explanation: 'Febre prolongada, perda de peso, hepatoesplenomegalia e pancitopenia em criança do centro-oeste paulista, região que se tornou área de transmissão de leishmaniose visceral a partir de Araçatuba, apontam para calazar.\n\nA investigação inclui teste rápido sorológico (rK39) e pesquisa de Leishmania em aspirado de medula óssea.',
    commentary: 'O quadro não é compatível com H1N1 nem com doença de Chagas aguda (sem exposição a triatomíneos ou transfusão). A esquistossomose tem outra epidemiologia e não causa pancitopenia febril dessa forma.',
    reference: 'Parasitologia Humana, 12º edição. David Pereira Neves. Livraria Atheneu, 2011. / Parasitologia, 4ª edição. Luis Rey. Guanabara Koogan, 2013. / Doenças Infecciosas e Parasitárias. Sylvia Lemos Hinrichsen. GuanabaraKoogan, 2013.',
    tags: ['parasitologia', 'infectologia', 'leishmaniose visceral']
  },
  {
    id: 'tp2019-11',
    module: 'Ciências Básicas',
    text: 'Homem, 55 anos, apresenta inflamação articular compatível com crise de gota e elevado nível sérico de ácido úrico. Relata que esses sintomas surgiram algum tempo após ter iniciado um novo esquema terapêutico para o tratamento da hipertensão, com a utilização combinada de três anti-hipertensivos: captopril, hidroclorotiazida e nifedipina.\n\nO mecanismo responsável por esse quadro se deve a:',
    options: [
      '(A) A nifedipina competiu com o ácido úrico por sítios de ligação a proteínas plasmáticas, permitindo que uma fração maior deste último ficasse livre e se depositasse nas articulações.',
      '(B) O esquema terapêutico tríplice utilizado para o tratamento da hipertensão não tem qualquer relação com a elevação dos níveis séricos de ácido úrico.',
      '(C) O captopril (iECA) aumentou a biossíntese de ácido úrico, causando a elevação dos níveis séricos desta substância e sua consequente deposição nas articulações.',
      '(D) A hidroclorotiazida reduziu excreção do ácido úrico, causando a elevação dos níveis séricos desta substância e sua consequente deposição nas articulações.'
    ],
    correctAnswer: 3,
    explanation: 'Diuréticos tiazídicos reduzem a excreção renal de ácido úrico: a contração de volume aumenta a reabsorção proximal de urato e o diurético compete com o urato pelos transportadores secretores de ácidos orgânicos. A hiperuricemia resultante pode precipitar crises de gota.',
    commentary: 'A nifedipina não desloca o urato de proteínas plasmáticas, e o captopril não aumenta a síntese de ácido úrico. Os anti-hipertensivos têm, sim, relação com a uricemia (losartana, ao contrário, é uricosúrica).',
    reference: 'KNOLLMAN, BJORN C. – As bases farmacológicas da terapêutica – Goodman & Gilman. 12ª edição, 2012. Editora: MCGRAW HILL – ARTMED. 2012.',
    tags: ['farmacologia', 'diuréticos', 'gota']
  },
  {
    id: 'tp2019-12',
    module: 'Ciências Básicas',
    text: 'Logo após o nascimento de seu filho, uma mãe apresentou quadro convulsivo, sendo diagnosticado um foco epileptogênico e indicado o uso de fenobarbital sódico por tempo prolongado. Após os três primeiros meses do nascimento da criança, a mãe voltou a tomar anticoncepcional oral de microdosagem. No entanto, os ciclos menstruais continuaram irregulares e o ginecologista suspeitou que não estivesse sendo efetivo, tendo pedido à mãe que utilizasse outro método anticoncepcional até a retirada do fenobarbital.\n\nEsta interação medicamentosa pode ser explicada porque o medicamento:',
    options: [
      '(A) Aumenta a quantidade de enzimas citocrômicas hepáticas (CYP) e a metabolização dos hormônios do anticoncepcional.',
      '(B) Diminui a absorção dos hormônios existentes no anticoncepcional.',
      '(C) Aumenta a capacidade renal em excretar os hormônios existentes no anticoncepcional.',
      '(D) Altera o efeito do anticoncepcional no útero, inibindo o efeito deste hormônio na movimentação das tubas uterinas.'
    ],
    correctAnswer: 0,
    explanation: 'O fenobarbital é um potente indutor enzimático do citocromo P450 hepático (especialmente CYP3A4). Aumenta a metabolização de estrogênios e progestagênios, reduzindo seus níveis e a eficácia contraceptiva — daí o sangramento irregular e a recomendação de outro método.',
    commentary: 'A interação não envolve absorção, excreção renal ou efeito local nas tubas.',
    reference: 'RANG HP, Dale MM. Farmacologia. 7ª ed. 2011. 9 3',
    tags: ['farmacologia', 'interações medicamentosas', 'contracepção']
  },
  {
    id: 'tp2019-13',
    module: 'Ciências Básicas',
    text: 'Mulher, 45 anos, foi diagnosticada com câncer de mama. A análise histopatológica do tumor classificou-o como pouco diferenciado (GH3) e acusou a presença de comedonecrose. Testes imunohistoquímicos mostraram alto percentual de células com expressão de Ki-67 (uma proteína nuclear expressa em todo o ciclo celular, exceto G0) e altos níveis de expressão de bcl-2 (uma proteína com função antiapoptótica).\n\nAs áreas de necrose observadas no tumor podem ser interpretadas como:',
    options: [
      '(A) Morte de células indiferenciadas que permanecem em G0, crescimento lento e a elevada taxa de bcl-2 sugere baixo índice apoptótico.',
      '(B) Morte de células tumorais por apoptose, sendo que o crescimento lento do tumor garante a ocorrência de apoptose, apesar da elevada expressão de bcl-2.',
      '(C) Morte de células tumorais provocada por privação de nutrientes, favorecida pelo crescimento acelerado apresentado por esse tumor, evidenciado pelo elevado índice Ki-67.',
      '(D) Restos da fagocitose de células tumorais, devido ao elevado índice proliferativo pelo alto percentual de células com expressão de Ki67.'
    ],
    correctAnswer: 2,
    explanation: 'Ki-67 elevado indica alta fração de células em proliferação: o tumor cresce rapidamente. Em tumores de crescimento acelerado, o centro da massa fica distante da vascularização e sofre necrose por privação de oxigênio e nutrientes (comedonecrose).\n\nO bcl-2 alto, antiapoptótico, reforça que a morte observada não é apoptose.',
    commentary: 'As alternativas que falam em crescimento lento ou células em G0 contradizem o Ki-67 elevado. A necrose não é resto de fagocitose.',
    reference: 'Carvalho HF, SM Recco-Pimentel. A Célula. 3a Edição. Editora Manole, 2013. / Alberts B, Johnson A, Lewis J, Morgan D, Raff M, Roberts K, Walter P. Molecular Biology of the Cell. 6th Edition. Garland Science (New York), 2014.',
    tags: ['patologia', 'oncologia', 'biologia celular']
  },
  {
    id: 'tp2019-14',
    module: 'Ciências Básicas',
    text: 'Homem, afrodescendente, 35 anos, atendido na emergência com quadro de dor torácica, palidez intensa e icterícia, e história pregressa de dores articulares. A suspeita diagnóstica foi de síndrome torácica aguda, por crise vaso-oclusiva associada.\n\nOs exames laboratoriais necessários para confirmar o diagnóstico da doença de base, além do hemograma, são:',
    options: [
      '(A) Contagem de reticulócitos e eletroforese de proteínas.',
      '(B) Teste de falcização e Coombs direto.',
      '(C) Teste de falcização e Coombs indireto.',
      '(D) Contagem de reticulócitos e eletroforese de hemoglobina.'
    ],
    correctAnswer: 3,
    explanation: 'Homem afrodescendente com síndrome torácica aguda, icterícia e história de dor articular: a principal hipótese é anemia falciforme.\n\nA confirmação é feita pela eletroforese de hemoglobina (identifica a HbS e define o genótipo), e a contagem de reticulócitos documenta a hemólise com resposta medular.',
    commentary: 'Coombs direto e indireto investigam hemólise imune, que não é o caso. O teste de falcização apenas detecta a presença de HbS, sem diferenciar traço de doença. A eletroforese de proteínas não identifica hemoglobinas.',
    reference: 'LOBO, C. Doenças falciformes. In: LOPES, A. C. (Ed.). Tratado de clínica médica. 2. ed. São Paulo: Roca, 2009. v. 2, cap. 157, p. 1951-1963.',
    tags: ['hematologia', 'anemia falciforme', 'laboratório']
  },
  {
    id: 'tp2019-15',
    module: 'Ciências Básicas',
    text: 'Mulher, 32 anos, com histórico de diabetes insulinodependente, apresentando quadro de febre, vômitos e diarreia há 3 dias e piora do controle glicêmico. Deu entrada na unidade de emergência sonolenta, com frequência cardíaca = 130 bpm, frequência respiratória = 30 irpm e pressão arterial = 100 x 60 mmHg. Glicemia capilar: 375 mg/dL. O exame de gasometria arterial e dosagens séricas mostrava os seguintes parâmetros:\n\n• pH: 7,13 (VR: 7,35 - 7,45)\n• pO₂: 99,5 mmHg (VR: 83 - 108 mmHg)\n• pCO₂: 30,5 mmHg (VR: 32 - 45 mmHg)\n• HCO₃⁻: 10 mmol/L (VR: 18 - 23 mmol/L)\n• BE (Base Excess): -17,8 mmol/L (VR: -2 a 3 mmol/L)\n• Cloreto: 105 mmol/L (VR: 98 - 106 mmol/L)\n• Sódio: 136 mmol/L (VR: 136 - 146 mmol/L)\n• Potássio: 4,4 mmol/L (VR: 3,5 - 5,0 mmol/L)\n• Hiato aniônico: 25,4 mmol/L (VR: 8 - 16 mmol/L)\n• Glicose: 428 mg/dL (VR: 70 - 99 mg/dL)\n• Lactato: 1,4 mmol/L (VR: 0,5 - 1,6 mmol/L)\n\nO diagnóstico do distúrbio do equilíbrio ácido-base é:',
    options: [
      '(A) Distúrbio misto: acidose metabólica por excesso de ânions e alcalose metabólica pelos vômitos.',
      '(B) Distúrbio misto: acidose metabólica pela perda de bicarbonato nas fezes diarreicas, com acidose respiratória pela taquipneia.',
      '(C) Acidose metabólica pela perda de bicarbonato nas fezes diarreicas, com tentativa de compensação respiratória.',
      '(D) Acidose metabólica por excesso de cetoácidos, com tentativa de compensação respiratória.'
    ],
    correctAnswer: 3,
    explanation: 'pH 7,13, bicarbonato de 10 e BE −17,8 definem acidose metabólica; o pCO₂ baixo (30,5) indica tentativa de compensação respiratória.\n\nO ânion gap está elevado (25,4) com glicemia de 428 em diabética tipo 1 e lactato normal: o excesso de ânions são cetoácidos — cetoacidose diabética precipitada pela infecção.',
    commentary: 'A perda de bicarbonato pela diarreia gera acidose com ânion gap normal (hiperclorêmica). Não há alcalose metabólica associada nem acidose respiratória (o pCO₂ está baixo, não alto).',
    reference: 'Diagnósticos clínicos e tratamento por métodos laboratoriais de Henry - 21ª edição. Autores: Richard A. McPherson e Mathew R. Pincus. / Tietz. Fundamentos da Química Clínica - 6a edição. Autores: Carl A. Burtis, Edward R. Ashwood, David E. Bruns.',
    tags: ['fisiologia', 'distúrbios ácido-base', 'cetoacidose diabética']
  },
  {
    id: 'tp2019-16',
    module: 'Ciências Básicas',
    text: 'Paciente com quadro de coágulo migratório (êmbolo) na veia femoral profunda direita, associado a trombo no ventrículo esquerdo.\n\nOs destinos finais dos fenômenos tromboembólicos podem ser, respectivamente:',
    options: [
      '(A) Átrio direito e artéria cerebral anterior direita.',
      '(B) Ventrículo esquerdo e artéria cerebral posterior direita.',
      '(C) Pulmão direito e artéria cerebral média direita.',
      '(D) Ventrículo direito e artéria cerebral anterior esquerda.'
    ],
    correctAnswer: 2,
    explanation: 'O êmbolo da veia femoral segue pela cava inferior até o coração direito e se impacta na circulação pulmonar (tromboembolismo pulmonar). O trombo do ventrículo esquerdo vai para a circulação sistêmica; pela carótida, atinge mais frequentemente a artéria cerebral média, continuação direta da carótida interna.',
    commentary: 'Átrio e ventrículo direito são locais de passagem, não destino final do êmbolo venoso. A artéria cerebral posterior deriva do sistema vertebrobasilar, menos atingido por êmbolos cardíacos.',
    reference: 'Moore KL. Anatomia Orientada para a Clínica. 6a ed. Rio de Janeiro: Guanabara Koogan; 2011.',
    tags: ['anatomia', 'tromboembolismo', 'circulação']
  },
  {
    id: 'tp2019-17',
    module: 'Ciências Básicas',
    text: 'Homem, 48 anos, com insuficiência renal crônica, em realização de hemodiálise, apresenta hiperparatireodismo secundário, com hormônio paratireoidiano plasmático de 860 pg/mL (referência de 10 - 65 pg/mL), cuja fisiopatologia está associada:',
    options: [
      '(A) À redução das concentrações plasmáticas de fósforo.',
      '(B) Ao aumento das concentrações plasmáticas de fósforo.',
      '(C) Ao aumento de 1,25 (OH)2 vitamina D.',
      '(D) À redução da produção de FGF23 pelo osso.'
    ],
    correctAnswer: 1,
    explanation: 'Na doença renal crônica, a queda da filtração causa retenção de fosfato. A hiperfosfatemia estimula diretamente as paratireoides e o FGF23, reduz a síntese renal de calcitriol e diminui o cálcio ionizado — tudo convergindo para o hiperparatireoidismo secundário.',
    commentary: 'Na DRC o fósforo está aumentado, não reduzido. A 1,25(OH)₂ vitamina D está diminuída. O FGF23 está aumentado.',
    reference: 'Fisiologia. 4a edição. 2012. Margarida de Mello Ayres.',
    tags: ['fisiologia', 'nefrologia', 'metabolismo mineral']
  },
  {
    id: 'tp2019-18',
    module: 'Ciências Básicas',
    text: 'Quais das seguintes alterações seriam esperadas quando ocorre aumento discreto da resistência da arteríola eferente do néfron?',
    options: [
      '(A) Diminuição do fluxo sanguíneo, aumento da pressão hidrostática nos capilares glomerulares e aumento da taxa de filtração glomerular.',
      '(B) Aumento do fluxo sanguíneo e aumento da taxa de filtração glomerular.',
      '(C) Aumento do fluxo sanguíneo e redução da taxa de filtração glomerular.',
      '(D) Diminuição do fluxo sanguíneo, diminuição da pressão efetiva de ultrafiltração e redução da taxa de filtração glomerular.'
    ],
    correctAnswer: 0,
    explanation: 'O aumento discreto da resistência da arteríola eferente represa o sangue no glomérulo: o fluxo plasmático renal cai, mas a pressão hidrostática nos capilares glomerulares sobe. Com aumento discreto, o efeito pressórico predomina e a taxa de filtração glomerular aumenta (é o mecanismo da angiotensina II).\n\nCom constrição intensa, a queda do fluxo passa a predominar e a TFG cai.',
    commentary: 'A constrição eferente nunca aumenta o fluxo sanguíneo renal. A alternativa D descreve o efeito de uma constrição acentuada.',
    reference: 'Zatz, Atheneu, 2011. -Berne: Fisiologia Renal, Elsevier, 2009. - Margarida Aires Fisiologia Renal, 2012.',
    tags: ['fisiologia', 'fisiologia renal']
  },
  {
    id: 'tp2019-19',
    module: 'Ciências Básicas',
    text: 'A análise da sequência primária de duas proteínas mostrou que elas diferem apenas em relação aos últimos 20 aminoácidos da porção C-terminal. Ao investigar, em diferentes tecidos, a expressão dessas proteínas, denominadas de variantes A e B, notou-se que ambas são codificadas pelo mesmo gene (gene P) e que este apresenta a mesma sequência de nucleotídeos, tanto nos tecidos que produzem a variante A quanto naqueles que expressam a variante B. Experimentos adicionais mostraram que nenhuma alteração ocorria depois da formação dos RNA mensageiros maduros utilizados na síntese dessas variantes proteicas.\n\nCom base nesses dados, conclui-se que a produção das duas variantes proteicas em questão resulta de:',
    options: [
      '(A) Mutação de ponto que afetou a região codificadora do gene P nas linhagens celulares que expressam uma das variantes proteicas.',
      '(B) Formas alternativas de processamento pós-transcricional, que geram diferentes RNA mensageiros maduros a partir de um único transcrito primário de RNA.',
      '(C) Clivagem da porção 5 do RNA mensageiro utilizado para a síntese de uma das variantes proteicas.',
      '(D) Metilação e consequente silenciamento do gene P nas linhagens celulares que expressam uma das variantes proteicas.'
    ],
    correctAnswer: 1,
    explanation: 'Duas proteínas codificadas pelo mesmo gene, sem diferença na sequência do DNA e sem modificação após a formação do RNA mensageiro maduro, só podem diferir no processamento do transcrito primário: o splicing alternativo, que combina éxons de formas distintas e gera RNAs maduros diferentes.',
    commentary: 'Mutação pontual alteraria a sequência do gene. Clivagem da extremidade 5\' afetaria a porção N-terminal, não a C-terminal. A metilação silenciaria o gene, sem produzir variante.',
    reference: 'Alberts, B. et al. Molecular Biology of the Cell. Garland Publ. Inc., N. York & London, 2008. / Carvalho, H.F.; Recco-Pimentel, S.M. A Célula. 3a. Edição. Editora Manole, 2013.',
    tags: ['biologia molecular', 'genética']
  },
  {
    id: 'tp2019-20',
    module: 'Ciências Básicas',
    text: 'Homem, 72 anos, apresentou vômito excessivo em um curto período de tempo, decorrente de uma virose gastrintestinal. No hospital, seus exames revelaram hipocalemia.\n\nUm possível resultado de hipocalemia sobre as células excitáveis é:',
    options: [
      '(A) Diminuição da probabilidade de geração de potencial de ação.',
      '(B) Diminuição do efluxo de potássio.',
      '(C) Redução na atividade da bomba de sódio e potássio.',
      '(D) Despolarização e geração de potenciais de ação.'
    ],
    correctAnswer: 0,
    explanation: 'Com potássio extracelular baixo, o gradiente de K⁺ aumenta e mais potássio sai das células. A membrana se hiperpolariza, afastando-se do limiar de disparo: fica mais difícil gerar potenciais de ação — o que explica fraqueza muscular e íleo na hipocalemia.',
    commentary: 'O efluxo de K⁺ aumenta, não diminui. A hipocalemia não despolariza a membrana em repouso.',
    reference: 'HALL, J. E. Guyton & Hall Tratado de Fisiologia Médica. 12ª ed. Rio de Janeiro: Elsevier, 2011. / KOEPPEN, B. M.; STANTON, B. A. (Ed.). Berne & Levy Fisiologia. 6ª ed. Rio de Janeiro: Elsevier, 2009.',
    tags: ['fisiologia', 'eletrofisiologia', 'distúrbios hidroeletrolíticos']
  },
  // ---- Teste de Progresso 2020 — Consórcio SP 1, outubro (gabarito oficial) ----
  {
    id: 'tp2020-1',
    module: 'Ciências Básicas',
    image: '/images/tp2020-1.webp',
    text: 'Uma mulher branca de 58 anos, de descendência norte-europeia, apresenta uma história de 2 meses de aumento de fadiga, dificuldade de deambulação e déficits de memória. A história familiar apresenta doença autoimune. Os achados laboratoriais destacam uma anemia macrocítica, uma redução acentuada na vitamina B12 sérica e a presença de anticorpos anticélulas parietais.\n\nAnalise a fotomicrografia abaixo e assinale a alternativa que estiver indicando a célula da mucosa gástrica associada à redução acentuada na vitamina B12 e aos anticorpos anticélulas parietais:',
    options: [
      '(A) Letra A',
      '(B) Letra B',
      '(C) Letra C',
      '(D) Letra D'
    ],
    correctAnswer: 0,
    explanation: 'Anemia macrocítica com deficiência de vitamina B12 e anticorpos anticélulas parietais caracteriza a anemia perniciosa (gastrite atrófica autoimune). As células parietais secretam HCl e o fator intrínseco, indispensável para a absorção da B12 no íleo.\n\nNa fotomicrografia, a seta A indica a célula parietal: grande, de citoplasma eosinofílico, situada no colo e no corpo das glândulas fúndicas.',
    commentary: 'B indica a célula principal (pepsinogênio), C o epitélio de revestimento e D a célula mucosa do colo (mucina).',
    reference: 'JUNQUEIRA, Luiz Uchoa, CARNEIRO, José. Histologia Básica, 12ª edição. Guanabara Koogan, 08/2013. / ROSS, Michael H., PAWLINA, Wojciech. Histologia - Texto e Atlas - Em Correlação com Biologia Celular e Molecular, 6ª edição. Guanabara Koogan, 05/2012.',
    tags: ['histologia', 'estômago', 'anemia perniciosa']
  },
  {
    id: 'tp2020-2',
    module: 'Ciências Básicas',
    image: '/images/tp2020-2.webp',
    text: '“A anatomia macroscópica subdivide o estômago em quatro regiões. A cárdia circunda o orifício esofágico; o fundo gástrico fica acima do nível de uma linha horizontal traçada através do óstio cárdico (orifício esofágico); o corpo gástrico fica abaixo dessa linha e a porção pilórica, a região em formato de funil que leva ao piloro. A porção pilórica é uma região distal estreita de esfíncter entre o estômago e o duodeno. Do ponto de vista histológico podemos dividir o estômago em apenas três regiões. Essas três regiões não consideram apenas a localização, mas também os tipos de glândulas que ocorrem na mucosa gástrica”.\n\nCom base nas informações do enunciado, analise a fotomicrografia abaixo e assinale a alternativa que estiver indicando a região da mucosa gástrica correspondente:',
    options: [
      '(A) Região do corpo',
      '(B) Região do fundo',
      '(C) Região cárdia',
      '(D) Região pilórica'
    ],
    correctAnswer: 2,
    explanation: 'A imagem mostra a transição esofagogástrica: à direita, epitélio estratificado pavimentoso do esôfago; à esquerda, mucosa gástrica com fossetas e glândulas curtas, tubulares e mucosas. Esse é o padrão da região da cárdia.',
    commentary: 'Corpo e fundo têm glândulas longas e retas, ricas em células parietais e principais. A região pilórica tem fossetas profundas e glândulas mucosas enoveladas, sem transição com epitélio pavimentoso.',
    reference: 'JUNQUEIRA, Luiz Uchoa, CARNEIRO, José. Histologia Básica, 12ª edição. Guanabara Koogan, 08/2013. / ROSS, Michael H., PAWLINA, Wojciech. Histologia - Texto e Atlas - Em Correlação com Biologia Celular e Molecular, 6ª edição. Guanabara Koogan, 05/2012.',
    tags: ['histologia', 'estômago']
  },
  {
    id: 'tp2020-3',
    module: 'Ciências Básicas',
    image: '/images/tp2020-3.webp',
    text: 'As células principais da mucosa gástrica são células típicas secretoras de proteínas, são responsáveis pela síntese de pepsinogênio, que em meio ácido é convertido em pepsina. A quantidade abundante de RER no citoplasma basal confere a essa parte da célula uma aparência basófila, enquanto o citoplasma apical é eosinófilo, devido à existência das vesículas secretoras, também denominadas grânulos de zimogênio, uma vez que contêm precursores enzimáticos.\n\nTomando como referência as informações do enunciado, identifique na fotomicrografia abaixo a célula principal:',
    options: [
      '(A) Célula indicada pela letra A.',
      '(B) Célula indicada pela letra B.',
      '(C) Célula indicada pela letra C.',
      '(D) Célula indicada pela letra D.'
    ],
    correctAnswer: 1,
    explanation: 'A célula principal tem citoplasma basal basófilo (abundante retículo endoplasmático rugoso) e apical com grânulos de zimogênio, localizando-se na base das glândulas gástricas. Na fotomicrografia, corresponde à seta B.',
    commentary: 'A seta A indica a célula parietal, C o epitélio de revestimento e D a célula mucosa.',
    reference: 'JUNQUEIRA, Luiz Uchoa, CARNEIRO, José. Histologia Básica, 12ª edição. Guanabara Koogan, 08/2013. / ROSS, Michael H., PAWLINA, Wojciech. Histologia - Texto e Atlas - Em Correlação com Biologia Celular e Molecular, 6ª edição. Guanabara Koogan, 05/2012.',
    tags: ['histologia', 'estômago']
  },
  {
    id: 'tp2020-4',
    module: 'Ciências Básicas',
    text: 'Clodoaldo, 66 anos, agricultor, é chagásico crônico há pelo menos 5 anos. Apesar da infecção ser acompanhada desde a fase aguda, foi obsevado apenas uma cardiomegalia leve que não interfere nas atividades diárias do paciente.\n\nComo podemos classificar a doença do paciente?',
    options: [
      '(A) Oligossintomática',
      '(B) Determinada',
      '(C) Assintomática',
      '(D) Indeterminada'
    ],
    correctAnswer: 3,
    explanation: 'Doença de Chagas crônica sem manifestações clínicas limitantes, com alteração cardíaca discreta que não interfere na vida diária: a banca a classifica como forma indeterminada.\n\nPela definição clássica, a forma indeterminada exige sorologia positiva com ECG e radiografias normais; cardiomegalia, mesmo leve, já indicaria forma cardíaca (determinada).',
    commentary: 'Observação: pelo II Consenso Brasileiro de Doença de Chagas, qualquer cardiomegalia caracteriza forma cardíaca, o que torna a alternativa B defensável — questão passível de recurso.',
    reference: 'REY, Luís. Parasitologia: parasitos e doenças parasitárias do homem nos trópicos ocidentais. 4. ed. Rio de Janeiro: Guanabara Koogan, 2008. / AMATO NETO, V. et al. Parasitologia: uma abordagem clínica. Rio de Janeiro: Elsevier, 2008.',
    tags: ['parasitologia', 'doença de chagas']
  },
  {
    id: 'tp2020-5',
    module: 'Ciências Básicas',
    text: 'Uma senhora de 62 anos de idade, IMS, previamente hígida, foi picada por uma abelha de uma colmeia em seu jardim, o que já havia acontecido várias vezes durante o verão. Alguns minutos após a última picada, ela começou a se queixar de coceira nas mãos, pés e virilha, acompanhada por cãibra abdominal. Logo após ela caiu desmaiada com respiração ofegante, entrou em colapso e perdeu a consciência. Seu marido, um médico, percebeu que a respiração estava taquipneica e apresentava edema em seus lábios e pálpebras; ela estava pálida e havia um eritema em seu pescoço e braços. Ao exame, seu batimento podia ser sentido, porém sua pulsação radial estava muito fraca. Seu marido imediatamente administrou adrenalina via I.M., um anti-histamínico (inibidor do receptor H1) I.V. e hidrocortisona. Ela recobrou a consciência e seu ritmo respiratório diminuiu. IMS não tinha história de reações adversas ao veneno de abelha, alimentos ou antibióticos; não havia também histórico de asma, rinite alérgica ou dermatite atópica. No dia seguinte ela estava completamente recuperada. Os resultados das investigações foram:\n\n• Células brancas: 7,5 x 10⁹/L (normalidade: 4 - 11)\n• Neutrófilos: 4,4 x 10⁹/L (normalidade: 2 - 7,5)\n• Eosinófilos: 0,40 x 10⁹/L (normalidade: 0,4 - 0,44)\n• Linfócitos: 2,4 x 10⁹/L (normalidade: 1,6 - 3,5)\n• Plaquetas: 296 x 10⁹/L (normalidade: 150 - 400)\n\nCom base no caso relatado, trata-se de um caso clássico de:',
    options: [
      '(A) Hipersensibilidade Retardada (tipo IV de Gel e Coombs), que deverá ser confirmado após a realização de teste cutâneo de exposição aos antígenos ou Patch Test.',
      '(B) Doença do Soro, que deverá ser confirmado através da dosagem de IgG total no soro da paciente.',
      '(C) Atopia mediado por IgE, que deve ser confirmado através da dosagem desta imunoglobulina e encaminhamento da paciente para realização de teste cutâneo contra alérgenos – Prick Test.',
      '(D) Reação de Arthus com deposição de complexo antígeno-anticorpo e inflamação imediata.'
    ],
    correctAnswer: 2,
    explanation: 'Prurido, cólicas, edema de lábios e pálpebras, eritema, broncoespasmo e colapso minutos após picada de abelha, com resposta à adrenalina: anafilaxia, reação de hipersensibilidade tipo I mediada por IgE.\n\nA sensibilização se explica pelas picadas repetidas no verão. A confirmação é feita com IgE específica para o veneno e testes cutâneos.',
    commentary: 'A tipo IV (patch test) é tardia, em 48–72 horas. A doença do soro (tipo III) surge dias depois, com febre, artralgia e urticária. A reação de Arthus é localizada.',
    reference: 'Delves, Peter J.; Martin, Seamus J.; Roitt, Ivan M., Burton, Dennis R. In: - Fundamentos de Imunologia, Ed Guanabara Koogam, Rio de Janeiro. 13ª Ed. 2018.',
    tags: ['imunologia', 'hipersensibilidade', 'anafilaxia']
  },
  {
    id: 'tp2020-6',
    module: 'Ciências Básicas',
    text: 'Maria Paula, 45 anos, apresenta-se ao consultório médico relatando importante perda de peso (aproximadamente 7 quilos em 3 meses), fadiga, redução do pelo corporal nas axilas e regiões púbicas e ausência de menstruação nos últimos 3 meses, com teste de gravidez negativo. Ao exame físico apresentava-se emagrecida, olhos profundos e redução do turgor da pele. Em posição supina, a PA era de 90/60 mmHg e a FC era de 95 batim/min; na posição ereta a PA era de 70/35 mmHg e FC: 120 batim/min. Apresenta hiperpigmentação nos mamilos e nos vincos da palma da mão. Exames sanguíneos laboratoriais revelaram: Na⁺: 125 mEq/L (Ref. 140 mEq/L); K⁺: 5,7 mEq/L (Ref. 4,5 mEq/L); Osmolaridade: 265 mOsm/L (Ref. 290 mOsm/L); Glicose em jejum: 50 mg/dL (Ref. 70 – 100 mg/dL); Cortisol: reduzido; Aldosterona: reduzida; ACTH: elevado; pH arterial: 7,32 (Ref. 7,4); HCO₃⁻:18 mEq/L (Ref: 24 mEq/L).\n\nA disfunção em qual dos locais abaixo poderia justificar o quadro clínico?',
    options: [
      '(A) Córtex da adrenal',
      '(B) Seguimentos distais do néfron',
      '(C) Medula da adrenal',
      '(D) Hipotálamo'
    ],
    correctAnswer: 0,
    explanation: 'Hipotensão postural, hiperpigmentação, hiponatremia, hipercalemia, hipoglicemia e acidose metabólica, com cortisol e aldosterona baixos e ACTH elevado: insuficiência adrenal primária (doença de Addison), por destruição do córtex da adrenal.',
    commentary: 'Na causa hipotalâmica (ou hipofisária), o ACTH estaria baixo e não haveria hiperpigmentação nem falta de aldosterona. A medula adrenal produz catecolaminas, não corticoides. Os segmentos distais do néfron não explicam o cortisol baixo.',
    reference: 'Guyton, A. Tratado de fisiologia médica. 11ª Edição. Guanabara Koogan. Rio de Janeiro, RJ. 2006. Cap. 77 / Berne & Levy. Fisiologia. 6 ª Edição. Elsevier. Rio de Janeiro, RJ 2009. Cap. 42 / Aires, MM. Fisiologia. 3ª Edição. Guanabara Koogan. Rio de Janeiro, RJ. 2008. Cap.66.',
    tags: ['fisiologia', 'endocrinologia', 'insuficiência adrenal']
  },
  {
    id: 'tp2020-7',
    module: 'Ciências Básicas',
    text: 'Em relação às causas atribuídas para a infertilidade masculina, podemos afirmar:',
    options: [
      '(A) Microdeleções na região Yp são encontradas em uma proporção significativa dos homens com baixa contagem de espermatozoide, que vão desde casos de azoospermia até oligospermia grave.',
      '(B) Deleções de novo de AZFc podem ser a causa da azoospermia não obstrutiva e da oligozoospermia severa.',
      '(C) No braço longo do cromossomo Y (Yq), localizam-se duas regiões (AZFa e AZFb), importantes na fertilidade masculina por apresentar genes que são expressos na espermatogênese.',
      '(D) As áreas do Yp, responsáveis pela espermatogênese, foram denominadas de Fatores de Azoospermia - AZF.'
    ],
    correctAnswer: 1,
    explanation: 'Os fatores de azoospermia (AZFa, AZFb e AZFc) estão no braço longo do cromossomo Y (Yq). Microdeleções de novo da região AZFc são a causa genética mais comum de azoospermia não obstrutiva e de oligozoospermia grave.',
    commentary: 'As regiões AZF não estão em Yp, que contém o SRY (determinação testicular). Yq tem três regiões AZF, não duas.',
    reference: 'NUSSBAUM, R.L.; MCLNNES, R.R.; WILLARD, H.F. Thompson & Thompson - Genética Médica. Oitava Edição. Editora Guanabara Koogan S.A., Rio de Janeiro, RJ, 2016. / BORGES, C.H.S.; MACEDO, L.C. Infertilidade Masculina Decorrente de Microdeleções no Cromossomo Y. Reprod. Clim., v. 31, n. 3, p. 169-174, 2016.',
    tags: ['genética', 'infertilidade masculina']
  },
  {
    id: 'tp2020-8',
    module: 'Ciências Básicas',
    text: 'Paciente do sexo feminino, 45 anos, apresenta-se em Unidade de Pronto Atendimento com queixa de perda da sensibilidade nas mãos. Ao exame físico foram evidenciados nódulos eritemato-acastanhados, com aspecto de queloides ou fibromas. Foi realizada uma biópsia com achados histopatológicos de macrófagos com citoplasma repleto de bacilos de Hansen, formando acúmulos denominados Globias.\n\nO diagnóstico definitivo é:',
    options: [
      '(A) Hanseníase Dimorfa',
      '(B) Hanseníase Virchowiana',
      '(C) Hanseníase Tuberculoide',
      '(D) Hanseníase Indeterminada'
    ],
    correctAnswer: 1,
    explanation: 'Macrófagos repletos de bacilos formando globias (aglomerados de bacilos) são achado típico da hanseníase virchowiana, o polo de baixa resposta imune celular, com nódulos e infiltração cutânea (hansenomas).',
    commentary: 'Na forma tuberculoide há granulomas epitelioides bem formados, com poucos ou nenhum bacilo. A dimorfa tem padrão intermediário. A indeterminada tem infiltrado inespecífico.',
    reference: 'KUMAR, V.; ABBAS, A. K.; FAUSTO, N.; MITCHELL, R. N. Robbins. Patologia básica. 8. ed. Rio de Janeiro: Elsevier, 2008.',
    tags: ['patologia', 'hanseníase']
  },
  {
    id: 'tp2020-9',
    module: 'Ciências Básicas',
    text: 'Paciente do sexo feminino, 45 anos, apresenta-se em Unidade de Pronto Atendimento com oligúria. Relata que está em tratamento para herpes simples com Aciclovir há quatro dias, e que há 48 horas não consegue urinar. Foram solicitados exames laboratoriais que sugeriram o diagnóstico de necrose tubular aguda.\n\nSobre o padrão de lesão encontrado na necrose tubular aguda, é correto afirmar que:',
    options: [
      '(A) São observados glomérulos fibrinóticos e com depósito de material purulento em alça capilar.',
      '(B) Nos glomérulos são evidenciadas áreas de esteatonecrose e células com cariorrexe.',
      '(C) Os túbulos são dilatados e hialinizados. Os glomérulos são atróficos e repletos de macrovesículas de colesterol.',
      '(D) São evidenciadas áreas de isquemia glomerular e células necróticas, que são eliminadas sob a forma de cilindros.'
    ],
    correctAnswer: 3,
    explanation: 'A necrose tubular aguda por nefrotoxicidade (aciclovir, por cristalúria e lesão tubular) cursa com necrose de células epiteliais, que se descamam e formam cilindros (granulosos, \'marrom-barrento\') no sedimento urinário.\n\nA alternativa aceita pela banca é a que fala em células necróticas eliminadas sob a forma de cilindros.',
    commentary: 'As demais descrevem lesões glomerulares ou achados inexistentes na NTA. Observação: a lesão da NTA é essencialmente tubular, e a menção a \'isquemia glomerular\' na alternativa oficial é imprecisa.',
    reference: 'ROBBINS. Patologia Estrutural e Funcional, 8ª edição.',
    tags: ['patologia', 'nefrologia', 'necrose tubular aguda']
  },
  {
    id: 'tp2020-10',
    module: 'Ciências Básicas',
    text: 'Dietas vegetarianas e veganas são compostas basicamente de frutas, folhas, legumes, cereais, leguminosas, nozes e sementes. Na dieta vegana não entra qualquer alimento de origem animal, incluindo mel. Na vegetariana não se come carne, aves, peixes e frutos do mar. Existem vitaminas praticamente inexistentes em alimentos de origem vegetal e, se não suplementadas, os indivíduos podem apresentar fraqueza, fadiga e anemia trazendo alterações metabólicas principalmente nos lipídeos.\n\nQual das vitaminas está associada a essas dietas?',
    options: [
      '(A) Vitamina B12',
      '(B) Vitamina A',
      '(C) Vitamina D',
      '(D) Vitamina B1'
    ],
    correctAnswer: 0,
    explanation: 'A vitamina B12 está presente quase exclusivamente em alimentos de origem animal. Veganos e vegetarianos estritos sem suplementação têm alto risco de deficiência, com anemia megaloblástica, fadiga e alterações neurológicas.',
    commentary: 'As vitaminas A, D e B1 têm fontes vegetais ou síntese endógena (D) e não se associam tipicamente a essas dietas.',
    reference: 'COZZOLINO Silvia. Biodisponibilidade de Nutrientes. 4º. Brasil: Manole Ltda, 2012, 513-525. / BAYNES, JW, DOMINICZAK, MH. Bioquímica médica, 4ª ed. Rio de Janeiro: Elsevier, 2015.',
    tags: ['bioquímica', 'nutrição', 'vitamina b12']
  },
  {
    id: 'tp2020-11',
    module: 'Ciências Básicas',
    text: 'Indivíduos submetidos a cirurgia bariátrica na técnica de bypass gástrico em Y-de-Roux (BGYR) têm vários benefícios metabólicos pós-cirurgia como: redução dos níveis de colesterol, LDL-colesterol, triglicerídeos e glicemia. Porém, com o passar do tempo há diminuição de absorção de micronutrientes (vitaminas e minerais) que consequentemente pode levar o paciente a uma diminuição da concentração de hemoglobina e eritropoiese ineficaz, com redução número de hemácias, levando o paciente à anemia.\n\nEssa anemia deve-se à deficiência de qual micronutriente?',
    options: [
      '(A) Cálcio e vitamina D',
      '(B) Vitamina B1',
      '(C) Magnésio',
      '(D) Vitamina B12'
    ],
    correctAnswer: 3,
    explanation: 'Após o bypass gástrico em Y de Roux, a menor secreção ácida e de fator intrínseco e a exclusão do estômago distal e do duodeno prejudicam a absorção de vitamina B12, levando a anemia megaloblástica — além do risco de deficiência de ferro.',
    commentary: 'Cálcio, vitamina D, magnésio e tiamina também podem faltar após a bariátrica, mas não explicam a anemia por eritropoiese ineficaz descrita.',
    reference: 'ZAGO, Marco Antônio; FALCÃO, Roberto Passetto; PASQUINI, Ricardo. Tratado de hematologia. São Paulo: Atheneu, 2013. In: cap 1” Carências de Folatos ou Vitamina B12. Anemias Megaloblásticas”. / TOLEDO, Fábio Martins Teodoro; RUIZ, Sandra Silva Datore. Alterações Nutricionais após Cirurgia Bariátrica. Revista Científica Multidisciplinar Núcleo do Conhecimento. Ano 03, Ed.05, Vol. 04, pp. 186-199, Maio de 2018. ISSN:2448-0959. / ROCHA, José Carlos Gomes. Deficiência de Vitamina B12 no pós-operatório de Cirurgia Bariátrica. International Journal of Nutrology, v.5, n.2, p. 82-89, mai/ago 2012.',
    tags: ['bioquímica', 'cirurgia bariátrica', 'anemia']
  },
  {
    id: 'tp2020-12',
    module: 'Ciências Básicas',
    text: 'Paciente com 55 anos de idade é encaminhado para hospital com queixas de apresentar nos últimos 5 dias tosse não produtiva, febre (superior a 38ºC, aferida pelo próprio paciente), inflamação de garganta, cansaço e dificuldades respiratórias. O paciente relata viagem à China há 20 dias. No exame clínico apresentou febre de 38,2ºC, pressão arterial normal, frequência respiratória de 30 rpm e crepitações na ausculta pulmonar. Foi solicitado hemograma, que apresentou linfopenia, e TC de tórax, que apresentou opacidades com atenuação em vidro-fosco multifocais, bilateralmente. Tendo em vista o quadro clínico e as informações epidemiológicas, o diagnóstico presuntivo de infecção por SARS-CoV-2 foi estabelecido. Sendo solicitado exame de material de mucosa nasal para confirmação.\n\nEm relação às características do vírus associado a essa infecção, assinale abaixo a alternativa correta:',
    options: [
      '(A) Trata-se de vírus da família Coronaviridae, não-envelopado, com RNA de dupla fita (dsRNA), cuja proteína de superfície S se liga ao receptor ACE2 da célula do hospedeiro.',
      '(B) Trata-se de vírus da família Coronaviridae, envelopado, com RNA de simples fita (ssRNA), cuja proteína de superfície S se liga ao receptor ACE2 da célula do hospedeiro.',
      '(C) Trata-se de vírus da família Coronaviridae, envelopado, com RNA de simples fita (ssRNA), cuja proteína de superfície S se liga à molécula de CD4 da célula do hospedeiro.',
      '(D) Trata-se de vírus da família Coronaviridae, não-envelopado, com DNA de dupla fita (dsDNA), cuja proteína de superfície S se liga ao receptor ACE2 da célula do hospedeiro.'
    ],
    correctAnswer: 1,
    explanation: 'O SARS-CoV-2 é um coronavírus envelopado, com genoma de RNA de fita simples e polaridade positiva. Sua proteína de superfície S (spike) se liga ao receptor ACE2 das células do hospedeiro.',
    commentary: 'O vírus não é desnudo nem tem RNA ou DNA de fita dupla. A ligação ao CD4 é característica do HIV.',
    reference: 'Walls, A.C. et al. Structure, Function, and Antigenicity of the SARS-CoV-2 Spike Glycoprotein. Cell, 181 (2):281-292, 2020. / Han R. et al. Early Clinical and CT manifestations of Coronavirus Disease 2019 (COVID-19) pneumonia. American Journal of Roentgenology, 215:1-6, 2020.',
    tags: ['microbiologia', 'virologia', 'covid-19']
  },
  {
    id: 'tp2020-13',
    module: 'Ciências Básicas',
    text: 'JFP, 25 anos, portador de Anemia Falciforme, iniciou quadro doloroso leve em MID. Não apresentava febre, queixas urinárias ou cardiorrespiratórias. Como a dor estava leve, iniciou Ibuprofeno 3x/dia, intercalando com paracetamol também 3x/dia. Por causa do calor achou melhor iniciar hidratação via oral.\n\nVocê acha que a conduta tomada é correta e tem base fisiopatológica?',
    options: [
      '(A) Sim, as crises dolorosas decorrem da falcização em microcirculação e consequente isquemia e processo inflamatório local. A desidratação é um importante fator desencadeante.',
      '(B) Não, as crises dolorosas são causadas pela liberação de citocinas por agentes bacterianos e o tratamento correto é iniciar antibioticoterapia o mais breve possível.',
      '(C) Não, as crises dolorosas são causadas por crises hiper hemolíticas e o tratamento correto é a transfusão de sangue.',
      '(D) Não, o uso de anti-inflamatório é contraindicado, já que não tem nenhuma ação sobre as crises dolorosas.'
    ],
    correctAnswer: 0,
    explanation: 'A crise álgica decorre da falcização na microcirculação, com vaso-oclusão, isquemia e inflamação local. A desidratação favorece a polimerização da HbS e precipita crises.\n\nEm dor leve, analgesia com paracetamol e AINE (na ausência de contraindicações) associada a hidratação é conduta adequada.',
    commentary: 'As crises não são causadas por infecção bacteriana nem por hiper-hemólise. O AINE tem ação sobre o componente inflamatório e pode ser usado com cautela.',
    reference: 'Zago MA; Falcão RP, Pasquini R. Tratado de Hematologia. 1ª ed. Atheneu, 2013; 211-219.',
    tags: ['hematologia', 'anemia falciforme']
  },
  {
    id: 'tp2020-14',
    module: 'Ciências Básicas',
    text: 'A meningomielocele leva à exposição da medula ao ambiente externo. Trata-se de uma malformação de alta incidência em todo o mundo. Indivíduos afetados pela doença podem apresentar graus variados de déficit motor, incontinência fecal e urinária, além de alterações do sistema nervoso central decorrentes da herniação dos elementos da fossa posterior para o canal medular. Esse complexo de malformações do sistema nervoso central, conhecida como malformação de Arnold-Chiari do tipo 2, pode levar a uma dilatação progressiva dos ventrículos cerebrais, tornando necessária uma derivação ventrículo-peritoneal para tratamento da hidrocefalia.\n\nA malformação a que o texto se refere é proveniente de distúrbio em qual evento do desenvolvimento embrionário?',
    options: [
      '(A) Formação do canal neuroentérico',
      '(B) Fechamento do processo notocordal',
      '(C) Fechamento do tubo neural',
      '(D) Gastrulação'
    ],
    correctAnswer: 2,
    explanation: 'A meningomielocele é um defeito de fechamento do tubo neural (neuróporo posterior), que ocorre na quarta semana do desenvolvimento. Associa-se à malformação de Arnold-Chiari tipo II e à hidrocefalia.',
    commentary: 'Canal neuroentérico, processo notocordal e gastrulação são eventos anteriores e não explicam o defeito do tubo neural.',
    reference: 'Bevilacqua, NS; Pedreira, DAL. Cirurgia fetal endoscópica para correção de mielomeningocele: passado, presente e futuro. Einstein. 2015; 13(2):283-9. / Brasil. Ministério da Saúde. Departamento de Informática do Sistema Único de Saúde (DATASUS). Sistema de Informações Sobre Nascidos Vivos (SINASC). 1994. / Mathews TJ, Honein MA, Erickson JD. Spina bifida and anencephaly prevalence--United States, 1991-2001. MMWR Recomm Rep. 2002;51(RR-13):9-11.',
    tags: ['embriologia', 'defeitos do tubo neural']
  },
  {
    id: 'tp2020-15',
    module: 'Ciências Básicas',
    text: 'Infecções virais têm sido associadas ao desenvolvimento de doenças autoimunes como diabetes melito tipo 1 e esclerose múltipla. No caso da esclerose múltipla, há uma associação com infecção pelo vírus Epstein-Barr.\n\nA explicação para esta associação imunológica é:',
    options: [
      '(A) Neurônios infectados pelo vírus Epstein-Barr atraem células inflamatórias do sistema imune inato, como as dendríticas, que causam a desmielinização do neurônio.',
      '(B) Neurônios infectados pelo vírus Epstein-Barr processam antígenos pela via do proteossomo e expressam antígenos virais que são reconhecidos por linfócitos T auxiliares, causando a morte destes neurônios.',
      '(C) A semelhança da estrutura molecular entre antígenos do vírus Epstein-Barr e da bainha de mielina do neurônio e a presença de determinados genes MHC/HLA, facilitam a apresentação e reconhecimento de antígenos próprios pelo complexo TCR de linfócitos T citotóxicos.',
      '(D) O vírus Epstein-Barr, durante seu ciclo de replicação, causa alterações em proteínas neuronais, transformando-as em neoantígenos.'
    ],
    correctAnswer: 2,
    explanation: 'A associação entre EBV e esclerose múltipla é explicada principalmente pelo mimetismo molecular: antígenos virais semelhantes a proteínas da mielina, apresentados por moléculas HLA de risco, ativam linfócitos T autorreativos que atacam a bainha de mielina.',
    commentary: 'A desmielinização não é causada por infecção neuronal direta pelo EBV, e os neurônios não são o alvo primário (a lesão é da mielina/oligodendrócitos).',
    reference: 'Roitt fundamentos de imunologia. - 13ª ed. - Rio de Janeiro: Guanabara Koogan, 2018. Capítulo 17, página 474.',
    tags: ['imunologia', 'autoimunidade', 'esclerose múltipla']
  },
  {
    id: 'tp2020-16',
    module: 'Ciências Básicas',
    text: 'As novas ferramentas moleculares de identificação de variantes genéticas associadas ao desenvolvimento de neoplasias, aliadas a novas abordagens terapêuticas mutação-dependente tornaram possível a identificação de indivíduos portadores de síndrome de câncer familial.\n\nDurante o aconselhamento oncogenético é possível:',
    options: [
      '(A) Aguardar o seguimento cirúrgico e adjuvante para a realização de análise molecular do paciente e seus familiares.',
      '(B) Usar a técnica de FISH para identificar a síndrome de câncer familial através das características tumorais, na fase diagnóstica.',
      '(C) Solicitar avaliação de painéis de genes selecionados na fase de comunicação de fatos médicos e com base na história familial de 3 gerações.',
      '(D) Identificar indivíduos em risco e, através de análise molecular direcionada, realizar procedimentos terapêuticos profiláticos na fase de cálculo de risco e seguimento.'
    ],
    correctAnswer: 3,
    explanation: 'No aconselhamento oncogenético, a fase de cálculo de risco e seguimento envolve identificar familiares em risco, fazer teste molecular direcionado à variante encontrada e oferecer medidas preventivas (rastreamento intensivo, cirurgias redutoras de risco).',
    commentary: 'A análise molecular não deve aguardar o fim do tratamento. O FISH raramente é usado nesse contexto. Os painéis pertencem à fase diagnóstica, e o heredograma deve ter pelo menos 3–4 gerações.',
    reference: 'INCA-Manual operacional sobre a Rede Nacional de Câncer Familial- Rede Nacional de Câncer Familial, disponível em https://www.inca.gov.br/publicacoes/manuais/rede-nacional-de-cancer-familial.',
    tags: ['genética', 'oncogenética']
  },
  {
    id: 'tp2020-17',
    module: 'Ciências Básicas',
    text: 'Durante a pandemia causada pelo Coronavírus, três tipos de testes para diagnóstico e/ou detecção de imunidade à COVID19 podem ser realizados: detecção de antígenos virais em material biológico do trato respiratório por RT-PCR (reverse transcription polymerase chain reverse) e detecção de anticorpos das classes IgM e IgG contra o vírus no sangue do paciente.\n\nBaseado nos resultados encontrados nas alternativas abaixo, assinale a mais provável:',
    options: [
      '(A) RT-PCR positivo; IgM positivo; IgG negativo: paciente nos estágios iniciais da infecção.',
      '(B) RT-PCR positivo; IgM negativo e IgG negativo: paciente no estágio tardio da infecção.',
      '(C) RT-PCR negativo; IgM negativo; IgG positivo: paciente com infecção ativa.',
      '(D) RT-PCR positivo; IgM positivo; IgG positivo: paciente teve a infecção e está recuperado.'
    ],
    correctAnswer: 0,
    explanation: 'Na fase inicial da COVID-19, o RT-PCR detecta o RNA viral e o IgM começa a surgir; o IgG ainda é negativo. Com o tempo, o PCR negativa e o IgG se torna positivo (infecção pregressa).',
    commentary: 'PCR positivo com sorologia negativa indica fase muito inicial, não tardia. IgG isolado indica infecção passada. PCR, IgM e IgG positivos indicam fase ativa/convalescença, não recuperação.',
    reference: 'BRASIL, MINISTÉRIO DA SAÚDE, 2020. Secretaria Executiva (SE), Secretaria de Atenção Especializada à Saúde (SAES), Secretaria de Atenção Primária à Saúde (SAPS), Secretaria de Vigilância em Saúde (SVS), Secretaria de Gestão do Trabalho e da Educação na Saúde (SGTES), Secretaria de Ciência, Tecnologia e Insumos Estratégicos. Orientações para manejo de pacientes com Covid 19. / BRASIL, MINISTÉRIO DA SAÚDE, 2020. Secretaria de Vigilância em Saúde. Guia de Vigilância epidemiológica. Emergência de Saúde Pública de Importância Nacional pela Doença pelo Coronavírus 2019. Vigilância de Síndromes Respiratórias Agudas COVID-19.',
    tags: ['imunologia', 'covid-19', 'testes diagnósticos']
  },
  {
    id: 'tp2020-18',
    module: 'Ciências Básicas',
    text: '“A infecção pelo Helicobacter pylori tem sido associada a câncer gástrico, linfoma do tecido linfoide associado a mucosa gástrica (MALT) e úlcera péptica, e sua erradicação pode curar o linfoma MALT gástrico e prevenir a recorrência de úlcera péptica. A infecção apresenta alta prevalência em todo o mundo, principalmente em países em desenvolvimento. Doenças relacionadas ao H. pylori são raras em crianças, mas a maioria dos pacientes infectados contrai a infecção nesta idade. Apesar do fato de que a estratégia "testar e tratar" não seja recomendada em crianças com dor abdominal ou dispepsia funcional, se os sintomas forem recorrentes ou graves recomenda-se a endoscopia digestiva alta com biópsia.\n\nNão há consenso sobre se o tratamento do H. pylori é útil em crianças com distúrbios gastrointestinais funcionais, mas o tratamento é geralmente indicado se a infecção foi diagnosticada, principalmente devido à morbidade de longo prazo.” Em relação aos principais aspectos práticos dos medicamentos utilizados para doenças ácido-pépticas, assinale a alternativa correta abaixo:',
    options: [
      '(A) Os inibidores da bomba de prótons sofrem baixo metabolismo sistêmico e de primeira passagem, por este motivo podem ser administrados por via oral.',
      '(B) Os fármacos antagonistas de receptores H2 são pouco prescritos devido à alta quantidade de efeitos colaterais (mais de 10% dos pacientes sofrem efeitos colaterais).',
      '(C) A redução da acidez gástrica pode alterar a biodisponibilidade de fármacos que dependem deste parâmetro para serem absorvidos como o cetoconazol.',
      '(D) A utilização frequente de Mg(OH)2 está associada a alcalose metabólica, devido à sua alta taxa de absorção intestinal.'
    ],
    correctAnswer: 2,
    explanation: 'Fármacos que dependem do pH ácido para dissolução e absorção, como o cetoconazol e o itraconazol (cápsulas), têm sua biodisponibilidade reduzida quando a acidez gástrica é suprimida por IBP ou antagonistas H2.',
    commentary: 'Os IBP sofrem extenso metabolismo de primeira passagem (CYP2C19). Os antagonistas H2 são bem tolerados. O hidróxido de magnésio é pouco absorvido e causa diarreia, não alcalose metabólica significativa.',
    reference: 'Machado, R. S. Silva, M. R., Viriato, A. Furazolidona, tetraciclina e omeprazol: uma alternativa de baixo custo para erradicação de Helicobacter pylori em crianças. J. Pediatr. (Rio J.) vol.84 no.2 Porto Alegre Mar./Apr. 2008. / KATZUNG, B. G.; MASTERS, S. B.; TREVOR, A. J. Farmacologia básica e clínica. 13. ed. Porto Alegre: McGraw Hill, 2017. / BRUNTON, L. L. As bases farmacológicas e terapêuticas de Goodman & Gilman. 13. ed. Rio de Janeiro: McGraw Hill/Artmed, 2018.',
    tags: ['farmacologia', 'doença ácido-péptica']
  },
  {
    id: 'tp2020-19',
    module: 'Ciências Básicas',
    text: 'Analise a artigo abaixo e assinale a alternativa correta: “Li-Fraumeni syndrome (LFS) is an autosomal dominant disorder occurring at a young age that predisposes individuals to multiple forms of cancer and to a heterogeneous spectrum of malignancies. We describe the clinical history of a patient who had 5 primary malignant cancers and a familiar history consistent with LFS. We analyzed the genomic DNA of the proband and her relatives by next-generation sequencing (NGS) technology using an enrichment protocol for the simultaneous sequencing of 94 genes involved in hereditary cancers. Genetic analysis of the proband revealed a TP53 germline mutation in exon 5 determining a nucleotide alteration at codon 175 (R175H), a hot spot mutation site related to LFS and a reported pathogenic mutation. The proband daughter\'s and brother\'s DNA did not carry the TP53 mutation but they had some rare variants in common with the proband, in addition to other variants with a still unclear role. In conclusion, we identified a TP53 mutation in a patient with multiple primary tumors and a family history characterized by a severe susceptibility to cancer. The genetic analysis by targeted NGS led to the identification of the genetic background and to the exclusion of a cancer risk for the family members.\n\nTargeted NGS represents an efficient approach for the identification of mutations in families with a heterogeneous phenotype.” (Zampiga et al., 2016 doi: 10.5301/jbm.5000227).',
    options: [
      '(A) As síndromes de câncer hereditário são causadas por mutações (alterações) em certos genes que são transmitidos dos pais para os filhos. Em uma síndrome hereditária do câncer, alguns padrões de tumores malignos podem ser vistos nas famílias e esses padrões incluem: ter vários membros próximos da família (como mãe, filha e irmã) com o mesmo tipo de câncer; desenvolver câncer em idade precoce ou desenvolver dois ou mais tipos de câncer na mesma pessoa. Exemplos de síndromes hereditárias de câncer incluem Esclerose Lateral Amiotrófica (ELA), Fenilcetonúria (PKU), Doença de Pompe e Fibrose Cística.',
      '(B) O geneTP53 codifica uma proteína supressora de tumor que, em resposta a mutações ou danos causados ao DNA, desencadeia um programa de transcrição gênica que regula os mecanismos de reparo do DNA, progressão do ciclo celular e apoptose. Assim, TP53 é essencial para regular a divisão celular e prevenir a formação de tumores, além de atuar no envelhecimento, metabolismo, regulação da homeostase e função imunológica.',
      '(C) A síndrome de Li-Fraumeni (LFS) é caracterizada por uma alta predisposição ao desenvolvimento de tumores malignos ao longo da vida do paciente. Os tipos de câncer observados em pacientes com LFS incluem: carcinomas gástricos, hepatocarcinomas, retinoblastoma, melanoma e linfomas.',
      '(D) Mutações no gene supressor tumoral TP53 estão associadas à síndrome de Li-Fraumeni. A proteína TP53 é um tetrâmero e nos pacientes com LFS a maioria das mutações está localizada na região que codifica o domínio tetramerização da proteína e somente alguns poucos casos abrigam mutações TP53 fora deste local de hotspot.'
    ],
    correctAnswer: 1,
    explanation: 'O TP53 codifica a proteína p53, supressora de tumor e \'guardiã do genoma\': diante de dano ao DNA, ativa genes de reparo, parada do ciclo celular e apoptose. Mutações germinativas causam a síndrome de Li-Fraumeni.',
    commentary: 'ELA, fenilcetonúria, Pompe e fibrose cística não são síndromes de câncer. Os tumores típicos de Li-Fraumeni são sarcomas, câncer de mama, tumores de SNC e adrenocortical. As mutações concentram-se no domínio de ligação ao DNA, não no de tetramerização.',
    reference: 'Zampiga V, Danesi R, Tedaldi G, Tebaldi M, Cangini I, Pirini F,Pittureri C, Amaducci E, Guidi L, Faedi M, Amadori D, Falcini F, Calistri D. Multiple primary tumors in a family with Li-Fraumeni syndrome with a TP53germline mutation identified by next-generation sequencing. Int J Biol Markers. 2016 Dec 23;31(4):e461-e465. doi: 10.5301/jbm.5000227. / Gargallo P, Yáñez Y, Segura V, Juan A, Torres B, Balaguer J, Oltra S Castel V, Cañete A. Li-Fraumeni syndrome heterogeneity. Clin Transl Oncol. 2019 Nov 5. doi: 10.1007/s12094-019-02236-2. [Epub ahead of print]',
    tags: ['genética', 'oncologia', 'síndrome de li-fraumeni']
  },
  {
    id: 'tp2020-20',
    module: 'Ciências Básicas',
    text: '“Homem de 49 anos de idade procurou atendimento médico por dispneia intensa. Apresentou dor epigástrica intensa de uma hora de duração, acompanhada de dispneia, sudorese e palidez, dez dias antes do atendimento. Tal sintoma foi seguido de outros episódios de dor precordial acompanhados de dispneia, desencadeados por esforços progressivamente menores. A dispneia isoladamente passou a ocorrer mesmo em repouso e em decúbito dorsal, e houve aparecimento de edema de membros inferiores, três dias antes do atendimento médico. O paciente era tabagista. O exame físico dessa consulta revelou paciente com dispneia ruidosa, pressão arterial 80/50 mmHg, pulso regular, frequência 110 bpm e sinais de vasoconstrição periférica. O exame dos pulmões revelou estertores e sibilos disseminados, até os ápices de ambos os hemitórax. A semiologia cardíaca revelou a presença de 3ª bulha. O exame do abdome foi normal. Havia edema discreto de membros inferiores. Foi feito o diagnóstico de edema agudo de pulmão”.\n\nConsiderando o caso clinico acima, a principal hipótese diagnóstica e a alteração anatomopatológica correspondente seriam, respectivamente:',
    options: [
      '(A) DPOC - Atrofia do tecido pulmonar resultante da hiperinsuflação pulmonar.',
      '(B) Pneumonia - Inflamação (pneumonia) difusa com preenchimento das luzes alveolares por exsudato fibrino-purulento.',
      '(C) Asma - Espessamento da lamina reticular associado ao aumento de colágeno tipos III e V.',
      '(D) Insuficiência cardíaca - Aumento de colágeno entre as fibras musculares do miocárdio.'
    ],
    correctAnswer: 3,
    explanation: 'Dor epigástrica prolongada com sudorese seguida de angina progressiva, ortopneia, edema, B3, estertores difusos e choque: insuficiência cardíaca aguda pós-infarto.\n\nO remodelamento após o infarto envolve fibrose, com aumento de colágeno entre as fibras musculares do miocárdio.',
    commentary: 'O quadro não é de DPOC, pneumonia ou asma: a B3, a estase e o antecedente isquêmico apontam para causa cardíaca.',
    reference: 'GRAZILLO, Cibele Laprosa and BENVENUTI, Luiz Alberto. Caso 2/2007: homem de 49 anos de idade, com insuficiência cardíaca após infarto do miocárdio. Arq. Bras. Cardiol [online]. 2007, vol.88, n.3 [cited 2020-05-19], pp.361-366. / AZEVEDO, Paula S. et al. Remodelação Cardíaca: Conceitos, Impacto Clínico, Mecanismos Fisiopatológicos e Tratamento Farmacológico. Arq. Bras. Cardiol [online]. 2016, vol.106, n.1 [cited 2020-05-19], pp.62-69.',
    tags: ['patologia', 'cardiologia', 'insuficiência cardíaca']
  }
];
