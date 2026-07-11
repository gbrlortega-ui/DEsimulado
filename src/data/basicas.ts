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
    explanation: 'A Fenilcetonúria decorre do acúmulo de fenilalanina devido à deficiência da enzima fenilalanina hidroxilase.',
    commentary: 'Fenilcetonúria é uma doença metabólica congênita causada por um defeito na enzima fenilalanina hidroxilase, levando à acumulação de fenilalanina no organismo. Os sintomas incluem deficiência intelectual devido à toxicidade da fenilalanina para o sistema nervoso central, convulsões devido à toxicidade cerebral, náusea e erupção cutânea.',
    reference: 'Nelson, D.L.; Cox, M.M. (2019). Princípios de bioquímica de Lehninger (7a ed.). Artmed. Guyton, A. C., & Hall, J. E. (2016). Tratado de Fisiologia Médica (13ª ed.). Elsevier.',
    tags: ['Bioquímica', 'Erros Inatos do Metabolismo']
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
    explanation: 'A resistência à insulina reduz a atividade da lipase lipoproteica, impedindo a hidrólise adequada de triglicérides nas lipoproteínas.',
    commentary: 'A enzima lipase lipoproteica hidrolisa triglicérides de lipoproteínas VLDL e quilomicrom circulantes no sangue com estímulo da insulina. No diabetes mellitus tipo II esta enzima tem sua ativação prejudicada pela resistência à insulina. Com a baixa atividade da lipase lipoproteica ocorre acúmulo dos triglicérides nas lipoproteínas plasmáticas e consequentemente a hiperglicemia. No diabetes mellitus tipo II não há redução da atividade da lipase hormônio sensível, de qualquer forma esta alteração não resulta em hipertrigliceridemia. No diabetes mellitus tipo II há aumento da neoglicogênese hepática, no entanto o estímulo desta via não favorece a hipertrigliceridemia. No diabetes mellitus tipo II há aumento da atividade da hmg-coa redutase, enzima regulatória da síntese de colesterol, favorecendo a hipercolesterolemia, mas não tendo repercussão sobre a hipertrigliceridemia.',
    reference: 'Nelson DL, Cox MM - Princípios de Bioquímica de Lehninger 5ª ed. Artmed, 2011. Baynes JW, Dominiczak MH – Bioquímica Médica 2ª ed, Ed. Elsevier, 2009. Harvey RA, Ferrier DR - Bioquímica Ilustrada 5ª ed. Artmed, 2012.',
    tags: ['Bioquímica', 'Metabolismo', 'Diabetes']
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
    explanation: 'No processamento do RNA (splicing), os íntrons são removidos e os éxons são unidos para formar a sequência codificante final.',
    commentary: 'Éxons são regiões codificantes do RNA mensageiro, enquanto íntrons são segmentos removidos durante o processamento do RNA mensageiro, sendo não codificantes e não traduzidos em proteínas. Essa afirmação corretamente descreve a diferença entre éxons e íntrons e o processo de splicing que remove os íntrons do RNA mensageiro antes da tradução.',
    reference: 'Alberts, B.; Johnson, A.; Lewis, J.; Raff, M.; Roberts, K.; Walter, P. (2017). Biologia Molecular da Célula. (6ª ed.) Artmed. Nature Education Home (2024). Nature. Disponível em: <https://www.nature.com/scitable/definition/intron-introns67/#:~:text=Introns%20are%20noncoding%20sections%20of,f or%20proteins%20are%20called%20exons>. Acesso em: 25 de maio de 2024.',
    tags: ['Genética Molecular', 'Biologia Celular']
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
    explanation: 'O FISH usa sondas fluorescentes para identificar translocações cromossômicas específicas.',
    commentary: 'A identificação do cromossomo Filadélfia pode ser feita por FISH, PCR em tempo real (qPCR) ou por cariótipo. Como a pergunta é sobre a técnica de biologia molecular, cariótipo não é molecular e o qPCR não foi citado entre as alternativas, a alternativa C é a única possível.',
    reference: 'JORDE, Lynn B. Genética médica. Rio de Janeiro GEN Guanabara Koogan 2017 1 recurso online ISBN 9788595151659. NUSSBAUM, Robert L. Thompson & Thompson Genética médica. Rio de Janeiro GEN Guanabara Koogan 2016 1 recurso online ISBN 9788595151819.',
    tags: ['Genética Molecular', 'Hematologia']
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
    explanation: 'A maturação final (capacitação) ocorre no trato reprodutivo feminino.',
    commentary: 'Quando o espermatozoide deixa o túbulo seminífero está morfologicamente completo, porém precisa adquirir função para a fecundação e isso ocorre no genital feminino, através da capacitação e reação acrossomal.',
    reference: 'SADLER, T.W; Langman, Embriologia médica. 14a ed. Rio de Janeiro: Guanavara-Koogan Editora, 2021. JUNQUEIRA LC., CARNEIRO J. Histologia Básica 13ª Edição. Editora Guanabara Koogan, 2017. KIERSZENBAUM AL., TRES LL. Histologia e Biologia Celular: Uma Introdução a Patologia. 4ª Edição. Editora GEN Guanabara Koogan, 2016.',
    tags: ['Embriologia', 'Histologia']
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
    explanation: 'A neurulação é induzida pela notocorda sobre a ectoderme.',
    commentary: 'A neurulação ocorre a partir da ectoderme sob estimulação da notocorda. As demais alternativas ficam incorretas pelas seguintes razões: a neurulação ocorre a partir da ectoderme, e não da notocorda, das cristas neurais e da mesoderme. Quando o espermatozoide deixa o túbulo seminífero está morfologicamente completo, porém precisa adquirir função para a fecundação e isso ocorre no genital feminino e não no epidídimo.',
    reference: 'SADLER, T.W; Langman, Embriologia médica. 14a ed. Rio de Janeiro: Guanavara-Koogan Editora, 2021. JUNQUEIRA LC., CARNEIRO J. Histologia Básica 13ª Edição. Editora Guanabara Koogan, 2017.',
    tags: ['Embriologia', 'Neuroembriologia']
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
    explanation: 'Uma mutação pontual no gene da globina beta causa a troca de ácido glutâmico por valina.',
    commentary: 'A anemia falciforme é uma patologia caracterizada pela alteração do aminoácido ácido glutâmico pela valina derivada de uma substituição da timina pela adenina no sexto códon no DNA do cromossomo 11.',
    reference: 'Guyton, A. C., & Hall, J. E. (2016). Tratado de Fisiologia Médica (13ª ed.). Elsevier. Ganong, W. F. (2016). Fisiologia Médica (25ª ed.). McGrawHill Education. Nelson, D.L.; Cox, M.M. (2019). Princípios de bioquímica de Lehninger (7a ed.). Artmed.',
    tags: ['Genética', 'Hematologia', 'Bioquímica']
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
    explanation: 'Miócitos cardíacos possuem alta concentração de mitocôndrias para a demanda aeróbica constante.',
    commentary: 'Os miócitos são as células musculares do coração (miocárdio). O coração é um órgão que trabalha de forma contínua e intensa para bombear sangue por todo o corpo, o que exige uma grande quantidade de energia. Já os pneumócitos do tipo II não são células colunares grandes e espessas; são pequenas e cúbicas, responsáveis pela produção de surfactante, que reduz a tensão superficial nos alvéolos, e não pela troca gasosa, que é função dos pneumócitos do tipo I. Por sua vez, as células da glia não estão localizadas na área olfatória das fossas nasais, mas no sistema nervoso central. As células responsáveis pela detecção de odores são os neurônios olfatórios. Por fim, os fibroblastos não produzem impulsos elétricos; eles são responsáveis pela síntese de componentes da matriz extracelular, como colágeno, e não pela coordenação da movimentação no trato digestivo.',
    reference: 'Guyton, A. C., & Hall, J. E. (2016). Tratado de Fisiologia Médica (13ª ed.). Elsevier. Silverthorn, D. U. (2018). Human Physiology: An Integrated Approach (8ª ed.). Pearson.',
    tags: ['Histologia', 'Fisiologia']
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
    explanation: 'A aterosclerose é fundamentalmente um processo inflamatório crônico da parede arterial.',
    commentary: 'A aterosclerose é um processo multifatorial inflamatório crônico e com deposição de lipídeos. Esta condição não guarda relação com etiologias não proliferativas neoplásicas, exclusivamente degenerativas e/ou exclusivamente obstrutivas por deposição lipídica.',
    reference: 'MALTA, DC; PINHEIRO, PC; TEIXEIRA, RA; MACHADO, IE; dos SANTOS, FM; RIBEIRO, RIBEIRO, AL Estimativas do Risco Cardiovascular em Dez Anos na População Brasileira: Um Estudo de Base Populacional Arq Bras Cardiol.; 116(3):423-431, 2021. FILHO, GB; Bogliolo, Patologia, 8 ed, Guanabara-Koogan, Rio de Janeiro, 2011. KUMMAR, V; ABBAS, AK; FAUSTO, N; ASTER, JC; ROBBINS&COTRAN, Bases Patológicas das Doenças, 8ed, Elsevier, Rio de Janeiro, 2010.',
    tags: ['Patologia', 'Cardiologia']
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
    explanation: 'Na disfunção sistólica, o ventrículo não esvazia adequadamente, aumentando o volume e pressão no final da diástole.',
    commentary: 'A insuficiência cardíaca com fração de ejeção reduzida (disfunção sistólica) resulta em um aumento do volume diastólico final, pois o ventrículo esquerdo não consegue bombear eficientemente o sangue para fora, levando a uma sobrecarga de volume e sintomas como dispneia e edema.',
    reference: 'Guyton, A. C., & Hall, J. E. (2016). Tratado de Fisiologia Médica (13ª ed.). Elsevier. Ganong, W. F. (2016). Fisiologia Médica (25ª ed.). McGrawHill Education.',
    tags: ['Fisiologia Cardiovascular', 'Insuficiência Cardíaca']
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
    explanation: 'O laudo citológico deve relatar adequabilidade, representatividade dos epitélios e a presença/ausência de lesões.',
    commentary: 'De acordo com as diretrizes nacionais preconizadas pelo Instituto Nacional do Câncer (INCA), o laudo deve contar informações relacionadas a adequabilidade da amostra, representação epitelial e a referência sobre as lesões intraepiteliais.',
    reference: 'BARROS, ALS; LIMA, DNO; AZEVEDO, MD; Micheline de Lucena OLIVEIRA, ML; Caderno de referência 1: Citopatologia Ginecológica/ – Brasília: Ministério da Saúde; Rio de Janeiro: CEPESC, 2012. FILHO, GB; Bogliolo, Patologia, 8 ed, Guanabara-Koogan, Rio de Janeiro, 2011. KUMMAR, V; ABBAS, AK; FAUSTO, N; ASTER, JC; ROBBINS&COTRAN, Bases Patológicas das Doenças, 8ed, Elsevier, Rio de Janeiro, 2010.',
    tags: ['Patologia', 'Ginecologia']
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
    explanation: 'Órgãos primários são medula e timo. Órgãos secundários são baço, linfonodos e MALT.',
    commentary: 'Os órgãos linfoides primários e secundários desempenham papéis cruciais no sistema imunológico. Os primários, como a medula óssea e o timo, são responsáveis pela produção e maturação das células imunes, como os linfócitos. A medula óssea é o local onde as células-tronco se diferenciam em linfócitos B, enquanto o timo é fundamental para a maturação dos linfócitos T. Já os órgãos linfoides secundários, como os linfonodos, baço e tecido linfoide associado a mucosa, são onde ocorrem as respostas imunológicas adaptativas. Neles, os linfócitos ativados respondem a antígenos, produzindo uma variedade de mediadores imunes para combater infecções e patógenos.',
    reference: 'DELVES, Peter J. ROITT - Fundamentos de Imunologia, 13ª edição Grupo GEN, 2018. E-book. ISBN 9788527733885.',
    tags: ['Imunologia', 'Histologia']
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
    explanation: 'A diapedese é o processo de migração celular através do endotélio íntegro durante a inflamação.',
    commentary: 'Como descrito em diferentes literaturas, a inflamação é caracterizada por uma série de eventos relacionados, entre os quais aumento no fluxo sanguíneo, permeabilidade vascular e exsudação de líquido derivado do sangue na região afetada, além do acúmulo de leucócitos e proteínas plasmáticas. É conhecido que, esse processo, ocorre na imunidade inata ou inespecífica.',
    reference: 'ABBAS, Abul K.; PILLAI, Shiv; LICHTMAN, Andrew H. Imunologia: Celular e Molecular. 9 ed. Rio De Janeiro: Editora Elsevier Ltda, 2019.',
    tags: ['Imunologia', 'Patologia']
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
    explanation: 'Clostridium (Clostridioides) difficile causa colite pseudomembranosa após uso de antibióticos.',
    commentary: 'É possível inferir que se trata de patógenos do gênero Clostridium por fatores como: anaerobiose, catalase-negativo, produção de toxinas, especialmente após tratamento com antibióticos.',
    reference: 'TORTORA, Gerard J.; FUNKE, Berdell R.; CASE, Christine L. Microbiologia. Grupo A, 2017. E-book. ISBN 9788582713549.',
    tags: ['Microbiologia', 'Gastroenterologia']
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
    explanation: 'A hipertensão portal na esquistossomose causa formação de varizes no terço distal do esôfago.',
    commentary: 'A alternativa correta descreve com precisão uma das complicações graves da esquistossomose hepatoesplênica: a hipertensão portal que pode resultar em hemorragias maciças devido ao rompimento de varizes esofágicas presentes principalmente nos terços médio e distal do esôfago. As demais alternativas apresentam erros conceituais, como a referência a amastigotas e trofozoítos, que não são estágios do ciclo de vida dos patógenos do gênero Schistosoma, e a localização incorreta das varizes esofágicas no terço proximal, o que não é característico da esquistossomose.',
    reference: 'FERREIRA, M. U. Parasitologia Contemporânea. Grupo GEN, 2020. E-book. ISBN 9788527737166. Disponível em: https://integrada.minhabiblioteca.com.br/#/books/9788527737 166/',
    tags: ['Parasitologia', 'Hepatologia']
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
    explanation: 'A inibição irreversível é um tipo de antagonismo não competitivo/irreversível.',
    commentary: 'A interação fármaco-receptor, responsável pelo efeito sobre a agregação plaquetária relacionado ao AAS ocorre de forma irreversível, sendo assim antagonistas não competitivos, já que diminuem a eficácia (efeito máximo) do agonista.',
    reference: 'Rang, H.P; Dale, M.M. (2016). Farmacologia (8a ed.). Elsevier. Golan, D.E.; Tashjian, A.H.; Armstrong, E.J.; Armstrong, A.W. (2014). Princípios de Farmacologia: A Base Fisiopatológica da Farmacoterapia. (3ª ed.) Guanabara Koogan.',
    tags: ['Farmacologia', 'Hematologia']
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
    explanation: 'A necrose de coagulação mantém o contorno celular apesar da morte, sendo típica de isquemia.',
    commentary: 'Os achados de aumento de acidofilia, perda de limites celulares e preservação de arcabouço tecidual referem-se à Necrose de Coagulação, uma lesão irreversível.',
    reference: 'FILHO, GB; Bogliolo, Patologia, 8 ed, Guanabara-Koogan, Rio de Janeiro, 2011. KUMMAR, V; ABBAS, AK; FAUSTO, N; ASTER, JC; ROBBINS&COTRAN, Bases Patológicas das Doenças, 8ed, Elsevier, Rio de Janeiro, 2010.',
    tags: ['Patologia', 'Fisiopatologia']
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
    explanation: 'A inflamação e regeneração crônica facilitam o acúmulo de mutações oncogênicas.',
    commentary: 'A Hepatite Crônica Viral caracterizada por eventos cirróticos determina proliferação nos eventos reparativos, o que deixa as células hepáticas vulneráveis a mutagênese.',
    reference: 'Marcio F. CHEDID, MF Carcinoma Hepatocelular: Diagnóstico e Manejo Cirúrgico Arq Bras Cir Dig Artigo de Revisão;30(4):272-278, 2017. FILHO, GB; Bogliolo, Patologia, 8 ed, Guanabara-Koogan, Rio de Janeiro, 2011. KUMMAR, V; ABBAS, AK; FAUSTO, N; ASTER, JC; ROBBINS&COTRAN, Bases Patológicas das Doenças, 8ed, Elsevier, Rio de Janeiro, 2010.',
    tags: ['Oncologia', 'Hepatologia']
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
    explanation: 'Células T citotóxicas (CD8+) reconhecem antígenos via MHC classe I.',
    commentary: 'As células T citotóxicas (ou células T CD8+) são ativadas quando seus receptores de célula T (TCR) reconhecem antígenos específicos apresentados por moléculas do complexo maior de histocompatibilidade (MHC) classe I. As células dendríticas são células apresentadoras de antígenos profissionais que capturam antígenos virais, processam-nos e os apresentam em moléculas MHC classe I para ativar células T CD8+.',
    reference: 'DELVES, Peter J. ROITT - Fundamentos de Imunologia, 13ª edição Grupo GEN, 2018. E-book. ISBN 9788527733885.',
    tags: ['Imunologia', 'Biologia Celular']
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
    explanation: 'PINK1 e Parkin eliminam mitocôndrias defeituosas; sua falha causa acúmulo de organelas tóxicas.',
    commentary: 'Esta alternativa descreve com precisão a função de PINK1 e Parkin na mitofagia. A PINK1 se acumula na membrana externa das mitocôndrias danificadas e recruta a Parkin, que marca essas mitocôndrias para degradação. Este processo é essencial para a manutenção da saúde celular e prevenção da neurodegeneração observada na doença de Parkinson.',
    reference: 'Alberts, B., Johnson, A., Lewis, J., Morgan, D., Raff, M., Roberts, K., & Walter, P. (2015). Biologia Molecular da Célula (6ª ed.). Artmed. Youle, R. J., & Narendra, D. P. (2011). Mechanisms of mitophagy. Nature Reviews Molecular Cell Biology, 12(1), 9- 14. Exner, N., Lutz, A. K., Haass, C., & Winklhofer, K. F. (2012). Mitochondrial dysfunction in Parkinson\'s disease: molecular mechanisms and pathophysiological consequences. The EMBO Journal, 31(14), 3038-3062.',
    tags: ['Neurologia', 'Biologia Celular']
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
    explanation: 'Em infecções urinárias comunitárias, a E. coli é o agente isolado em mais de 80% dos casos, sendo identificada por urocultura.',
    commentary: 'O caso é de uma infecção do trato urinário comunitária. Mais de 80% destas infecções são causadas por Enterobactérias em especial a Escherichia coli. O exame laboratorial capaz de identificar gênero e espécie é a urocultura. Exame bacterioscópico não revela estas informações.',
    reference: 'Lo, DS et al. Infecção urinária comunitária: etiologia segundo idade e sexo. Braz. J. Nephrol. 35 (2) • Jun 2013 • https://doi.org/10.5935/0101-2800.20130016',
    tags: ['Microbiologia', 'Infectologia']
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
    explanation: 'A isquemia reduz o ATP, falhando a bomba de sódio-potássio, gerando acúmulo de sódio e água (edema) intracelular.',
    commentary: 'A falta de oxigênio leva à menor produção de ATP e diminuição da atividade da bomba de sódio e potássio, causando aumento de sódio intracelular e edema celular, que também é chamado de degeneração hidrópica.',
    reference: 'KUMAR, Vinay; ASTER, Jon C.; ABBAS, Abul K. Robbins &Cotran Patologia: bases patológicas das doenças. 9 ed. Rio de Janeiro: Guanabara Koogan, 2021, 1421 p.',
    tags: ['Fisiologia', 'Patologia Celular']
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
    explanation: 'No jejum prolongado, o esqueleto carbônico de aminoácidos é a principal fonte para a gliconeogênese.',
    commentary: 'Durante o período de jejum prolongado, as proteínas musculares são mobilizadas e quebradas para liberar aminoácidos, que são utilizados para a síntese de glicose no fígado por meio da gliconeogênese.\n\nOs ácidos graxos resultantes da lipólise não são utilizados para síntese de glicose, eles são oxidados para produzir ATP.\n\nA insulina é um hormônio que desempenha um papel importante na regulação do metabolismo dos carboidratos, facilitando a entrada de glicose nas células musculares e adipócitos para ser utilizada como fonte de energia. Além disso, a insulina também estimula a síntese de proteínas, sendo essencial para o anabolismo.\n\nA cetose é um estado metabólico em que o organismo utiliza predominantemente ácidos graxos como fonte de energia, em vez de glicose. Geralmente, a cetose está associada a uma dieta com baixa ingestão de carboidratos.',
    reference: 'Marzzoco, Anita; Torres, Bayardo Baptista, Bioquímica básica. 4.ed. Editora(s) Guanabara Koogan, 2015 [Disponível na rede de bibliotecas da Unoeste e na BV Minha Biblioteca], capítulo: 16, pg.206-208.',
    tags: ['Bioquímica', 'Metabolismo']
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
    explanation: 'A perda crônica de sangue (como menometrorragia) é uma causa comum de depleção de estoques de ferro.',
    commentary: 'Este tipo de anemia está relacionada com a perda de sangue, mas também com baixa ingestão de nutrientes, como o ferro. Os médicos recomendam o aumento do consumo de carnes e folhas escuras por conterem este mineral.',
    reference: 'Zago, M. A.; Falcão, R. P.; Pasquini, R. Hematologia: fundamentos e prática. Rio de Janeiro: Atheneu, 2004. Bain BJ, Gupta R. A – Z ofHaematology. BlackwellPubli., London, 2003.',
    tags: ['Hematologia', 'Nutrologia']
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
    explanation: 'A artéria cólica média (da mesentérica superior) e a cólica esquerda (da mesentérica inferior) anastomosam-se formando a arcada de Riolan.',
    commentary: 'Para responder à questão é necessário identificar os ramos que representam a anastomose entre as artérias mesentérica superior e mesentérica inferior. Assim, o ramo distal da artéria mesentérica superior e o ramo proximal da artéria mesentérica inferior são respectivamente: artéria cólica média (ramo da artéria mesentérica superior) e artéria cólica esquerda (ramo da artéria mesentérica inferior).',
    reference: 'Keith L.; DALLEY, Arthur F.; AGUR, Anne M R. Anatomia Orientada para Clínica. Rio de Janeiro: Guanabara Koogan (Grupo GEN), 2022. E-book. ISBN 9788527734608. Disponível em: https://integrada.minhabiblioteca.com.br/#/books/9788527734608/. Acesso em: 25 jul. 2023.',
    tags: ['Anatomia', 'Cirurgia Vascular']
  },
  {
    id: 'tp2023-6',
    module: 'Ciências Básicas',
    text: 'A pneumonia adquirida na comunidade (PAC) é definida como uma infecção aguda do parênquima pulmonar, que o indivíduo adquire por transmissão na comunidade, distinguindo-a daquela adquirida no hospital. O tratamento proposto pelas diretrizes mais recentes para tratamento de PAC com necessidade de internação (enfermaria), elaboradas pela Sociedade Brasileira de Pneumologia e Tisiologia, é apresentado a seguir. Com relação às drogas antimicrobianas propostas, pode se afirmar que:',
    image: '/images/tp2023-6.PNG',
    options: [
      '(A) As cefalosporinas de terceira geração (ceftriaxona e cefotaxima) têm característica teratogênica, estando relacionadas a malformações neurológicas embrionárias e devem ser evitadas na gestação.',
      '(B) A associação entre ampicilina/sulbactam apresenta ótima cobertura para germes Gram negativos hospitalares, tais como o Pseudomonas aeruginosa.',
      '(C) As fluoroquinolonas respiratórias (levofloxacino e moxifloxacino) tem biodisponibilidade sérica ampla, com possibilidade de aplicação única diária e boa penetração em barreira hematoencefálica.',
      '(D) A ceftriaxona tem biodisponibilidade que permite aplicação única diária e não necessita de ajuste de dosagem em casos de insuficiência renal.'
    ],
    correctAnswer: 3,
    explanation: 'A ceftriaxona possui meia-vida longa (dose única diária) e eliminação biliar/renal balanceada, dispensando ajuste em insuficiência renal leve a moderada.',
    commentary: 'A ceftriaxona tem bom perfil metabólico permitindo aplicação única diária e não é metabolizada sistemicamente, mas convertida a metabólitos microbiologicamente inativos pela flora intestinal.\n\nA associação entre ampicilina/sulbactan tem boa cobertura para germes Gram negativos, mas não para germes hospitalares, tais como a Pseudomonas aeruginosa ou a Klebsiella pneumoniae hospitalar (KPC).\n\nAs fluoroquinolonas respiratórias (levofloxacino e moxifloxacino) têm bom perfil metabólico, permitindo aplicação única diária, mas sem penetração satisfatória na barreira hematoencefálica.\n\nAs cefalosporinas de 3ª geração (ceftriaxona e cefotaxima) podem ser utilizadas na gestação, sem efeito teratogênico significativo ou comprovado.',
    reference: 'As Bases farmacológicas da terapêutica de Goodman & Gilman. 13. ed. Porto Alegre: Artmed, 2019. ISBN 9788580556148.',
    tags: ['Farmacologia', 'Pneumologia']
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
    explanation: 'A disfunção mitocondrial na senescência celular contribui para a resistência à apoptose, favorecendo a sobrevivência de células senescentes.',
    commentary: 'A senescência é caracterizada por uma parada irreversível do ciclo celular e um fenótipo pró-inflamatório, comumente conhecido como fenótipo secretor associado a senescência (SASP). A disfunção mitocondrial é uma característica frequentemente não apreciada da senescência celular, que desempenha papéis importantes não apenas na parada do crescimento da senescência, mas também no desenvolvimento do SASP e na resistência à morte celular por apoptose.\n\nALTERNATIVA ERRADA: "O que regula a taxa de captação de glicose é principalmente a concentração de insulina no sangue." O que regula a taxa de captação de glicose é principalmente a concentração de glicose no sangue. A glicose entra nas células por meio de transportadores específicos (GLUTs) localizados na membrana celular.\n\n"Células tumorais alteram a dinâmica mitocondrial favorecendo a fissão de mitocôndrias." Sob estímulos extracelulares, as mitocôndrias sofrem constantes dinâmicas de fusão e fissão para atender a diferentes demandas celulares. A dinâmica mitocondrial é regulada por proteínas e lipídios especializados. A dinâmica mitocondrial desregulada tem sido associada ao início e progressão de diversos cânceres humanos, afetando aspectos como metástase do câncer, resistência a drogas e sobrevivência de células-tronco cancerígenas. Na maioria dos casos, a fissão mitocondrial facilita a proliferação, metástase e resistência às drogas das células cancerígenas, causando o desenvolvimento do câncer.\n\n"Estados prolongados de hiperglicemia promovem a redução da fosforilação oxidativa mitocondrial." O diabetes tipo 2 é caracterizado por disfunção mitocondrial, alta produção de espécies reativas de oxigênio (ROS) e baixos níveis de ATP.',
    reference: 'doi: 10.15252/embr.201948395; https://doi.org/10.1016/j.redox.2017.01.013; Am J Cancer Res. 2020; 10(5): 1278–1293.',
    tags: ['Biologia Celular', 'Metabolismo']
  },
  {
    id: 'tp2023-8',
    module: 'Ciências Básicas',
    text: 'Uma mulher de 55 de anos queixa-se de dificuldade para engolir alguns tipos de alimentos nos últimos meses. Refere que teve problemas de azia e queimação há muitos anos e já tentou diferentes abordagens terapêuticas, como elevação da cabeceira da cama e uso de inibidores de bomba de prótons. Realizada uma biópsia endoscópica para investigação, esta revelou epitélio colunar com células caliciformes na mucosa esofágica, sem displasia associada. Uma resposta adaptativa semelhante a esta é encontrada também na seguinte situação:',
    image: '/images/tp2023-8.PNG',
    options: [
      '(A) Nos miocardiócitos em pacientes com hipertensão arterial sistêmica.',
      '(B) Nas células escamosas do colo uterino em pacientes com infecção por HPV.',
      '(C) No epitélio da mucosa brônquica em fumantes de longa data.',
      '(D) Nos miócitos esqueléticos após longo tempo de imobilidade.'
    ],
    correctAnswer: 2,
    explanation: 'A metaplasia brônquica (substituição do epitélio respiratório por escamoso) é análoga à metaplasia intestinal no esôfago (Barrett).',
    commentary: 'O caso refere-se a metaplasia intestinal na mucosa esofágica (Esôfago de Barrett). A metaplasia é um processo de adaptação celular frente a um novo estímulo. Na mucosa brônquica de fumantes, ocorre metaplasia escamosa. Hipertrofia ocorre no miocárdio hipertenso; displasia no HPV; atrofia no músculo imobilizado.',
    reference: 'Patologia, Bogliolo-9ª Edição. 2016.',
    tags: ['Patologia', 'Gastroenterologia']
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
    explanation: 'Sem a ativação da glicogênio fosforilase, o fígado não libera glicose no jejum, exigindo aporte exógeno constante (amido) para evitar hipoglicemia.',
    commentary: 'A enzima fosforilase quinase é responsável por fosforilar e ativar a enzima glicogênio fosforilase. A enzima glicogênio fosforilase, por sua vez, hidrolisa as ligações glicosídicas alfa 1→4 dos feixes do glicogênio, sendo a principal responsável pela glicogenólise.\n\nNa paciente com deficiência de fosforilase quinase hepática, a quebra do glicogênio fica comprometida. Sem a quebra do glicogênio do fígado, a manutenção da glicemia no jejum recente fica comprometida, havendo risco de hipoglicemia. Por esta razão, a paciente deve consumir amido com frequência para a obter glicose por meio da digestão e garantir que haja glicose suficiente no sangue na ausência da glicogenólise.\n\nO consumo de amido promove a secreção de insulina estimulando a síntese de glicogênio muscular, mas este efeito não é importante para a terapia da paciente. O consumo de amido promove a secreção de insulina inibindo a quebra de glicogênio hepático, que já estava prejudicada pela deficiência genética. O consumo de amido promove a secreção de insulina estimulando a síntese de glicogênio hepático.',
    reference: 'Harvey RA, Ferrier DR - Bioquímica Ilustrada 5ª. ed. Artmed, 2012. Marzzoco A, Torres BB - Bioquímica Básica. 3ª ed. Ed. Guanabara Koogan, 2007. Nelson DL, Cox MM - Princípios de Bioquímica de Lehninger 5ª ed. Artmed, 2011.',
    tags: ['Bioquímica', 'Erros Inatos do Metabolismo']
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
    explanation: 'A queda da PA reduz inicialmente a TFG, mas os mecanismos de autorregulação renal (miogênico e feedback tubuloglomerular) estabilizam o fluxo.',
    commentary: 'Se a pressão arterial diminui durante o sono, ocorre uma diminuição da taxa de filtração glomerular, logo depois ocorre aumento da filtração glomerular pelo mecanismo de autorregulação renal para manter a homeostase.',
    reference: 'Sato, M.A. Tratado de Fisiologia Médica – 1a ed (2021). Editora Guanabara Koogan/Grupo GEN, Rio de Janeiro.',
    tags: ['Fisiologia Renal']
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
    explanation: 'Leucócitos (linfócitos, granulócitos e monócitos) compõem a linhagem de defesa contra patógenos.',
    commentary: 'Os leucócitos são os elementos da linhagem branca do sangue, divididos em componentes mieloides e linfoides, unicamente relacionados à proteção do organismo contra patógenos e infecções.',
    reference: 'Boehm T, Swann JB. Origin na devolution of adaptive immunity. Annu Ver Anim Biosci. 2014;2:259-283.',
    tags: ['Histologia', 'Imunologia']
  },
  {
    id: 'tp2023-12',
    module: 'Ciências Básicas',
    text: 'Paciente do sexo feminino, 65 anos, com hipertensão arterial não controlada e sintomas de cefaleias, mal-estar geral e flushing facial relacionados aos picos de pressão arterial elevada. Os exames realizados incluíram eletrocardiograma normal, radiografia de tórax sem alterações e tomografia computadorizada abdominal. Verificou-se um aumento da aldosterona sérica (798μmol/L; normal: 28 a 443μmol/L), com renina sérica, metanefrinas plasmáticas, cortisol, ácido vanilmandélico e ionograma dentro dos parâmetros normais. Como deve ser interpretado o distúrbio da pressão arterial apresentado pela paciente desse relato?',
    image: '/images/tp2023-12.PNG',
    options: [
      '(A) Síndrome de Cushing',
      '(B) Tumor associado a glândula adrenal',
      '(C) Hipertensão renovascular',
      '(D) Hipertensão essencial'
    ],
    correctAnswer: 1,
    explanation: 'Aldosterona alta com renina normal/baixa sugere hiperaldosteronismo primário (ex: tumor de Conn).',
    commentary: 'Embora a hipertensão possa ser observada como uma adaptação homeostática devido a mudanças no sistema cardiovascular e ao enrijecimento das artérias com o avanço da idade, mesmo entre idosos, é importante considerar causas secundárias para essa manifestação. O caso apresentado evidencia a presença de um tumor raro nas glândulas suprarrenais em uma paciente de 65 anos, o que é evidenciado pela ultrassonografia abdominal e os valores aumentados de aldosterona.',
    reference: 'Bortolotto, Luiz Aparecido, and Marcus Vinícius Bolívar Malachias. "Atualização no diagnóstico e tratamento das principais causas de hipertensão secundária." Rev. bras. hipertens (2011): 46-66. Oigman, Wille. "Sinais e sintomas em hipertensão arterial." JBM 102.5 (2014): 13-8. Silva, Joana, et al. "Hipertensão arterial secundária a tumor raro da glândula adrenal." Arquivos Brasileiros de Cardiologia 95 (2010): 144-147.',
    tags: ['Fisiologia Endócrina', 'Cardiologia']
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
    explanation: 'A liberação de lipases pancreáticas no tecido peripancreático causa digestão de gordura e formação de sabões de cálcio (esteatonecrose).',
    commentary: 'Trata-se de quadro clínico de pancreatite aguda, na qual pode ser observada necrose gordurosa (esteatonecrose) no tecido peripancreático devido à ação de enzimas lipolíticas (lipase) que extravasam.',
    reference: 'Patologia -Bases Patológicas das Doenças – Robbins & Contron.',
    tags: ['Patologia', 'Gastroenterologia']
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
    explanation: 'Os corticoides atuam em receptores intracitoplasmáticos que migram ao núcleo para alterar a expression gênica, o que leva horas.',
    commentary: 'Os corticosteroides são fármacos de natureza mais hidrofóbica, portanto, atravessam com facilidade a membrana plasmática e atuam em nível de regulação da transcrição gênica. todo esse processo é bastante lento, demorando várias horas ou até mesmo dia para gerar alterações.\n\nCorticosteroides reduzem a produção de prostaglandinas via inibição da fosfolipase a2 que gera ácido araquidônico (molécula precursora de prostaglandinas).\n\nA supressão da fosfolipase a2 acarreta uma redução na produção de prostaglandinas, acarretando uma redução da permeabilidade vascular.\n\nInteração dos corticosteroides se dá com receptores nucleares, que estão no citoplasma e depois são deslocados para o núcleo para a regulação da expressão gênica.',
    reference: 'Brunton, L.L. Goodman & Gilman: As Bases Farmacológicas da Terapêutica. 12ª ed. Rio de Janeiro: McGrawHill, 2012. Rachelle Etienne, Flávia Pereira Dias Viegas, Claudio Viegas Jr. Aspectos Fisiopatológicos da Inflamação e o Planejamento de Fármacos: uma Visão Geral Atualizada. Revista Virtual de Química, 2021.',
    tags: ['Farmacologia', 'Imunologia']
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
    explanation: 'IgG positivo e IgM negativo indicam imunidade pregressa (infecção antiga), sem risco de transmissão vertical atual.',
    commentary: 'A sorologia para toxoplasmose é um dos exames de rotina preconizados pelo Ministério da Saúde a ser realizado na primeira consulta pré-natal. A conduta adotada depende dos resultados de tal exame, quando:\n- IgM negativo e IgG positivo temos uma gestante que no passado teve toxoplasmose, encontrando-se imune não sendo necessário adotar qualquer medida além da manutenção habitual do pré-natal;\n- IgM negativo e IgG negativo temos uma gestante susceptível, sendo assim deve-se repetir trimestralmente a sorologia para acompanhar caso ocorra infecção em algum momento da gestação;\n- IgM positivo e IgG negativo temos uma gestante com infecção aguda que deverá ser tratada;\n- Em relação a pesquisa de avidez de IgG: IgM positivo e IgG positivo em gestantes com menos de 16 semanas teremos que realizar o exame de avidez do IgG para definir. Se a avidez for alta indica infecção antiga, não sendo necessário tratamento e realiza apenas seguimento habitual. Porém, se a avidez for baixa ou a gestante tiver mais de 16 semanas considera infecção aguda.\n\nNos casos de infecção materna aguda deve-se descartar um resultado falso positivo repetindo a sorologia ou solicitando IgA quando disponível. Caso não tenha tais opções já pode indicar tratamento com espiramicina 1g de 8/8h para diminuir o risco de infecção fetal até que se realize a investigação de infecção fetal por meio da amniocentese ou PCR do líquido amniótico.',
    reference: 'NEVES, D.P. Parasitologia Humana. 13ª ed. São Paulo: Atheneu, 2016. BRASIL. Protocolo de Notificação e Investigação: Toxoplasmose Gestacional e congênita. Brasília: Ministério da Saúde, 2018.',
    tags: ['Infectologia', 'Obstetrícia']
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
    explanation: 'A criptosporidiose é uma infecção oportunista clássica definidora de AIDS em casos de diarreia crônica/severa.',
    commentary: 'A criptosporidiose provoca diarreia autolimitada em imunocompetentes. Em pacientes com AIDS e imunodeficiência avançada (queda de LTCD4), torna-se uma causa comum de diarreia prolongada e grave.',
    reference: 'Mims Microbiologia Médica e Imunologia, 6ª. Ed. 2020.',
    tags: ['Infectologia', 'Imunologia']
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
    explanation: 'A urina fetal é a principal fonte de líquido amniótico no 2º e 3º trimestres; falhas renais (como agenesia) causam oligoâmnio.',
    commentary: 'O sistema urinário fetal é a principal fonte de líquido amniótico que desempenha importantes funções como maturação pulmonar, amortecimento de choques, barreira contra infecções e evita aderência do embrião ao âmnio. Todas as outras alternativas são responsáveis por excesso de líquido amniótico (polidrâmnio), seja por ausência do reflexo de deglutição (Anencefalia) ou obstrução de trato digestivo (atresia de esôfago e pâncreas anular), onde o líquido seria reabsorvido.',
    reference: 'MOORE, K. L.; PERSAUD, T. V. N.; TORCHIA, M. G. Embriologia clínica. 10. ed. Rio de Janeiro: Elsevier, 2016. SADLER, T. W. Langman embriologia médica. 13. ed. São Paulo: Guanabara Koogan, 2016.',
    tags: ['Embriologia', 'Obstetrícia']
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
    explanation: 'O mercúrio liga-se a grupos SH de enzimas do ciclo de Krebs e da síntese de porfirinas (heme), levando à anemia.',
    commentary: 'O mercúrio ao se ligar a grupos sulfidrilas das enzimas promove precipitação e inibição de várias vias metabólicas como: descarboxilação do piruvato, ciclo de Kreb’s, síntese de porfirina. O anel de porfirina com o ferro compõe o Heme que com as globinas compõem a estrutura da hemoglobina. A diminuição da hemoglobina leva a um quadro de anemia.\n\nAo se inibir os sistemas enzimáticos do metabolismo as vias metabólicas aeróbicas são inibidas e como o catabolismo lipídico é aeróbico não há maior utilização deste. Com o desenvolvimento da hipoxemia há alta produção de lactato desenvolvendo acidose metabólica.\n\nPara que a gliconeogênese aconteça a partir do lactato tem-se que utilizar parte do ciclo de Kreb’s, estando este inibido e a reação de piruvato para fosfoenolpiruvato sendo irreversível não há condições para que a glioneogênese ocorra.',
    reference: 'Baynes, John W. e Dominiczak, Marek H. Bioquímica Médica. 5 ed. Rio de Janeiro: Elsevier, 2022. Murray, Robert K. et al. Bioquímica Ilustrada de HARPER. 31 ed. Porto Alegre: AMGH, 2021. Sanches, José A. Garcia; Compri-Nardy, Mariane B. e Breda-Stella, Mercia. Bases da Bioquímica e Tópicos de Biofísica- Um Marco Inicial. 2 ed. Rio de Janeiro: Guanabara Koogan, 2021.',
    tags: ['Toxicologia', 'Bioquímica']
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
    explanation: 'Anticorpos anti-receptor de TSH (TRAb) agem como agonistas do receptor, estimulando continuamente a glândula.',
    commentary: 'A doença de Graves é causada pela produção de anticorpos com ação agonista (estimuladores) específicos para o receptor de TSH. A ligação desses autoanticorpos com o receptor “simula” a ação do Hormônio Estimulador da Tireoide, induzindo a secreção dos hormônios tireoidianos, e consequente hipertireoidismo. Trata-se, portanto, de uma resposta autoimune mediada por anticorpos não-IgE (hipersensibilidade do tipo II), com disfunção celular. As demais alternativas estão incorretas pois: 1) não existe destruição direta das células da tireóide em decorrência da presença dos autoanticorpos; 2) a Doença de Graves não é decorrente de hipersensibilidade mediada por deposição de imunocomplexos (hipersensibilidade do tipo III); 3) Os autoanticorpos presentes na Doença de Graves são direcionados ao receptor do TSH, e não ao próprio TSH.',
    reference: 'RICH, R.R..; FLEISHER, T.A.; SCHROEDER, H.W.; WEYAND, C.M.; CORRY, D.B. ; PUCK, J.M. Clinical Immunology: Principles and Practice. 6th. ed. Elsevier, 2022.',
    tags: ['Imunologia', 'Endocrinologia']
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
    explanation: 'O haloperidol é um neuroléptico típico que atua bloqueando receptores D2 dopaminérgicos.',
    commentary: 'O mecanismo de ação dos neurolépticos típicos como o haloperidol baseia-se no bloqueio dos receptores dopaminérgicos centrais, o que explica tanto seu efeito antipsicótico quanto seus efeitos extrapiramidais.',
    reference: 'Farmacologia ( Rang H.P., Dale M.M. 9 ed. 2020).',
    tags: ['Farmacologia', 'Psiquiatria']
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
    explanation: 'O salbutamol é um agonista beta 2 adrenérgico utilizado na asma, podendo causar tremor e taquicardia como efeitos colaterais.',
    commentary: 'O salbutamol é utilizado na asma como beta 2 agonista, tendo como efeito colateral o tremor de extremidades e taquicardia. O ipratrópio atua como antagonista dos receptores muscarínicos e a boca seca é o único efeito colateral. Solumedrol é um corticoide, que na crise de asma atua como antiinflamatório e pode causar hipopotassemia e não causa diarreia. Ipratrópio e salbutamol atuam em recepotres diferentes.',
    reference: 'RANG, H. P.; DALE, M.M.; RITTER, J. M. Farmacologia. 8. ed. Rio de Janeiro: Elsevier, 2016',
    tags: ['Farmacologia', 'Pneumologia']
  },
  {
    id: 'tp2022-2',
    module: 'Ciências Básicas',
    text: 'Mulher, 35 anos, queixa-se de ardor ao urinar e desconforto durante o ato sexual. Exame físico normal. Ao exame ginecológico foi observado corrimento vaginal fino, de cor amarelo/esverdeado, bolhoso e de odor fétido. No exame colposcópico, a cérvice se apresentou levemente edemaciada, com eritemas e raros pontos hemorrágicos na mucosa vaginal. A paciente nega febre ou dores abdominais e não foram detectados sinais de infartamento ganglionar. Foi solicitada urinálise, que mostrou os seguintes resultados: urina turva, com hemácias, cilindros proteicos, células epiteliais e leucócitos em abundância, e a estrutura mostrada na imagem a seguir:',
    image: '/images/tp2022-2.PNG',
    options: [
      '(A) Gardnerella vaginalis',
      '(B) Clamídia trachomatis',
      '(C) Neisseria gonorrhoeae',
      '(D) Trichomonas vaginalis'
    ],
    correctAnswer: 3,
    explanation: 'O corrimento amarelo-esverdeado bolhoso com odor fétido e cérvice em framboesa (pontos hemorrágicos) é característico de Trichomonas vaginalis.',
    commentary: 'Mulheres com vaginite aguda causada por T. vaginalis frequentemente têm corrimento devido a infiltração por leucócitos. A consistência do corrimento varia de acordo com a paciente, de fino e escasso a espesso e abundante. O sintoma clássico de corrimento amarelo, abundante, espumoso e mucopurulento ocorre em somente 20% dos casos. Há também odor vaginal anormal e prurido vulvar. A vagina e a cérvice podem ser edematosas e eritematosas, com erosão e pontos hemorrágicos na parede cervical conhecidos como colpitis macularis ou cérvice com aspecto de morango. O protozoário pode ser visualizado em microscopia óptica e o aspecto bolhoso da secreção é um sinal típico desse parasita.',
    reference: 'LÓPEZ, L. B. et al. Strategies by which some pathogenictrichomonads integrate diverse signals in the decision-making process. An Acad Bras, v. 72, p. 173-86, 2000. AMATO NETO, V.; AMATO, V. S.; GRYSCHEK, Ronaldo Cesar Borges . Parasitologia: Uma Abordagem Clínica. 1. ed. São Paulo: Elsevier, 2008. v. 1. 456p',
    tags: ['Microbiologia', 'Ginecologia']
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
    explanation: 'Na hepatite viral, há deficiência da glicuronil transferase na captação e conjugação, elevando a bilirrubina indireta.',
    commentary: 'Este caso clínico trata de uma situação de hepatite viral, a icterícia nesta situação ocorre por alteração hepática. A glicuronil transferase é a enzima que capta a bilirrubina indireta e a conjuga com ácido glicurônico formando a bilirrubina direta ou conjugada. Na hepatite viral há deficiência desta enzima, levando ao aumento da bilirrubina indireta. Na icterícia por obstrução biliar há aumento da bilirrubina direta e não há alteração das enzimas hepáticas. O caso mostra número normal de hemácias e hematócrito, o que indica que a icterícia não é provocada por anemia hemolítica.',
    reference: 'Douglas, C.R. Tratado de Fisiologia Aplicado às Ciências Médicas – 6a ed (2006). Koeppen, B.M.& Stanton, B.A. Berne & Levy – Fisiologia – 6a ed. (2009). Sato, M.A. Tratado de Fisiologia Médica – 1a ed (2021). Grossman, S., Porth C.M. Porth fisiopatologia. 9ª ed.',
    tags: ['Fisiologia', 'Hepatologia']
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
    explanation: 'O quilotórax é causado pela laceração ou obstrução do ducto torácico, que transporta o quilo pelo mediastino.',
    commentary: 'O quilotórax resulta tanto da obstrução, ou dificuldade de escoamento do quilo, quanto da laceração do ducto torácico. Este ducto que tem início no abdome, na cisterna do quilo, ascende pelo mediastino posterior e pela abertura torácica superior. Em parte de seu trajeto, o ducto torácico entra na veia braquiocefálica esquerda.',
    reference: 'MOORE, K. L.; DALLEY, A. F.; AGUR, A. M. R. Moore anatomia orientada para a clínica. 7. ed. Rio de Janeiro: Guanabara Koogan, 2014.',
    tags: ['Anatomia', 'Cirurgia']
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
    explanation: 'O músculo glúteo médio, inervado pelo nervo glúteo superior, é o principal estabilizador pélvico na marcha.',
    commentary: 'O nervo glúteo superior inerva os músculos glúteo médio, glúteo mínimo e tensor da fáscia lata. Desses, o músculo glúteo médio é responsável pela abdução de quadril e pela estabilidade pélvica importante na marcha.',
    reference: 'MOORE, K. L.; DALLEY, A. F.; AGUR, A. M. R. Moore anatomia orientada para a clínica. 7. ed. Rio de Janeiro: Guanabara Koogan, 2014.',
    tags: ['Anatomia', 'Ortopedia']
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
    tags: ['Genética', 'Urologia']
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
    tags: ['Farmacologia', 'Nefrologia', 'Patologia']
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
    tags: ['Imunologia', 'Cardiologia']
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
    tags: ['Fisiologia', 'Pneumologia', 'Emergência']
  },
  {
    id: 'tp2022-10',
    module: 'Ciências Básicas',
    text: 'Com exceção das glândulas anexas do digestório, todos os órgãos do trato digestivo apresentam túnicas, constituídas por diferentes tecidos e estruturas com funções específicas. As lâminas A, B, C e D representam um corte histológico de estômago. Indique a classificação do tecido na respectiva túnica.',
    image: '/images/tp2022-10.PNG',
    options: [
      '(A) Seta 1 indica mucosa com epitélio simples cilíndrico, tecido conjuntivo frouxo, criptas e glândulas.',
      '(B) Seta 2 indica submucosa de tecido conjuntivo denso.',
      '(C) Seta 3 indica muscular do órgão com uma direção de tecido muscular liso.',
      '(D) Seta 4 indica adventícia com tecido conjuntivo frouxo.'
    ],
    correctAnswer: 0,
    explanation: 'A mucosa gástrica é revestida por epitélio simples cilíndrico que se invagina formando as criptas e glândulas.',
    commentary: 'O estômago apresenta túnica mucosa com epitélio simples cilíndrico, tecido conjuntivo frouxo, criptas e glândulas. A submucosa é de tecido conjuntivo moderadamente denso. A muscular apresenta três direções de fibras. A quarta camada é a serosa (abaixo do diafragma) e não adventícia.',
    reference: 'JUNQUEIRA, L. U.; CARNEIRO, J. Histologia Básica – Texto e Atlas. 13. Ed. Rio de Janeiro: Guanabara Koogan, 2017.',
    tags: ['Histologia', 'Gastroenterologia']
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
    tags: ['Imunologia', 'Alergologia']
  },
  {
    id: 'tp2022-12',
    module: 'Ciências Básicas',
    text: 'Homem de 68 anos, hipertenso e dislipidêmico, há vários anos em tratamento, apresenta-se na clínica com queixa de piora de dispneia agora e aos pequenos esforços há várias semanas, e inchaço nos pés ao final do dia. Tem tosse noturna e, ultimamente, dificuldade para dormir, necessitando apoiar-se em 2 traveissoiros, acordando à noite, às vezes, com falta de ar, que melhora ao se sentar com as pernas para fora da cama. Em análises post mortem, observam-se alterações histopatológicas no miocárdio, assim como alterações estruturais e funcionais no ventrículo esquerdo, responsáveis pela insuficiência cardíaca. Identifique a melhor descrição das alterações encontradas na insuficiência cardíaca.',
    image: '/images/tp2022-12.PNG',
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
    tags: ['Patologia', 'Cardiologia', 'Fisiopatologia']
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
    tags: ['Endocrinologia', 'Fisiologia']
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
    explanation: 'O nó sinoatrial é irrigado em 60% das pessoas pela artéria coronária direita (ramo do nó sinoatrial).',
    commentary: 'O nó sinoatrial (sinusal) é geralmente irrigado pelo ramo para o nó sinoatrial oriundo da artéria coronária direita. Portanto, uma obstrução na artéria circunflexa (ramo da coronária esquerda) geralmente não afeta o nó sinoatrial na maioria da população.',
    reference: 'MOORE, K. L.; DALLEY, A. F.; AGUR, A. M. R. Moore anatomia orientada para a clínica. 7. ed. Rio de Janeiro: Guanabara Koogan, 2014.',
    tags: ['Anatomia', 'Cardiologia']
  },
  {
    id: 'tp2022-15',
    module: 'Ciências Básicas',
    text: 'A imagem a seguir é referente a biópsia cutânea de paciente do sexo masculino, 51 anos, que apresenta no tórax múltiplas lesões maculares, hipopigmentadas, acompanhadas de rarefação de pelos e perda de sensibilidade. Detecção precoce e tratamento adequado têm papel fundamental na prevenção de incapacidades provocadas por esta doença. O agente etiológico e a respectiva patologia são:',
    image: '/images/tp2022-15.PNG',
    options: [
      '(A) Mycobacterium tuberculosis; Tuberculose',
      '(B) Paracoccidioides brasiliensis; Paracoccidioidomicose',
      '(C) Leishmania braziliensis; Leishmaniose tegumentar',
      '(D) Mycobacterium Leprae; Hanseníase'
    ],
    correctAnswer: 3,
    explanation: 'Lesões hipopigmentadas com perda de sensibilidade e rarefação de pelos são clássicas de Hanseníase (M. leprae).',
    commentary: 'O diagnóstico de Hanseníase baseia-se em lesões cutâneas com alteração de sensibilidade e sinais de comprometimento neural. A biópsia com Ziehl-Neelsen pode identificar o bacilo álcool-ácido resistente Mycobacterium leprae. A detecção precoce é crucial para prevenir sequelas e incapacidades físicas.',
    reference: 'Robbins & Cotran - Patologia - Bases Patológicas das Doenças, 9ª ed. Guia prático sobre a Hanseníase, MS, 2017.',
    tags: ['Infectologia', 'Dermatologia', 'Microbiologia']
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
    explanation: 'A mola hidatiforme é uma doença trofoblástica que afeta a placenta em formação.',
    commentary: 'A placenta é o anexo derivado do trofoblasto. Na mola hidatiforme, ocorre proliferação exacerbada do trofoblasto (sincicio e citotrofoblasto), com hidropisia das vilosidades coriônicas. O sinciciotrofoblasto produz altos níveis de beta-hCG, o que pode causar hiperêmese, pré-eclâmpsia precoce e cistos tecaluteínicos nos ovários.',
    reference: 'Garner EI et al. Gestational trophoblastic disease. Clin Obstet Gynecol. 2007.',
    tags: ['Embriologia', 'Obstetrícia']
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
    tags: ['Anatomia', 'Neurologia']
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
    explanation: 'Diplococos Gram-negativos no líquor são patognomônicos de Neisseria meningitidis (meningococo).',
    commentary: 'A Neisseria meningitidis apresenta-se como diplococos Gram-negativos em "grão de café". O Haemophilus influenzae é um cocobacilo Gram-negativo. O Streptococcus pneumoniae (pneumococo) é um diplococo Gram-positivo.',
    reference: 'JAWETZ, E. et al. Microbiologia médica. 21. ed. Rio de Janeiro: Guanabara Koogan, 2000.',
    tags: ['Microbiologia', 'Pediatria', 'Infectologia']
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
    tags: ['Microbiologia', 'Pneumologia', 'Infectologia']
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
    tags: ['Parasitologia', 'Infectologia']
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
    tags: ['Fisiologia', 'Nefrologia', 'Parâmetros Clínicos']
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
    tags: ['Microbiologia', 'Infectologia', 'Neurologia']
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
    tags: ['Pneumologia', 'Bioquímica']
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
    tags: ['Hematologia', 'Infectologia']
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
    tags: ['Fisiologia', 'Hematologia', 'Patologia']
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
    tags: ['Fisiologia', 'Cardiologia', 'Emergência']
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
    tags: ['Fisiologia', 'Neurologia', 'Ortopedia']
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
    tags: ['Anatomia', 'Neurologia', 'Emergência']
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
    tags: ['Fisiologia', 'Angiologia', 'Cirurgia']
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
    tags: ['Fisiologia', 'Neurologia', 'Emergência']
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
    tags: ['Fisiologia', 'Pneumologia']
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
    tags: ['Farmacologia', 'Obstetrícia', 'Emergência']
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
    tags: ['Farmacologia', 'Cardiologia']
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
    tags: ['Farmacologia', 'Urologia']
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
    tags: ['Genética', 'Patologia', 'Oncologia']
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
    tags: ['Imunologia', 'Infectologia', 'Microbiologia']
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
    tags: ['Bioquímica', 'Fisiologia']
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
    tags: ['Fisiologia', 'Nefrologia', 'Emergência']
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
    tags: ['Patologia', 'Fisiopatologia', 'Emergência']
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
    tags: ['Cardiologia', 'Fisiologia']
  },
  {
    id: 'tp2021-1',
    module: 'Ciências Básicas',
    image: '/images/tp2021-1.PNG',
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
    tags: ['Farmacologia', 'Psiquiatria']
  },
  {
    id: 'tp2021-2',
    module: 'Ciências Básicas',
    image: '/images/tp2021-2.PNG',
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
    tags: ['Patologia', 'Pneumologia', 'Dermatologia']
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
    tags: ['Fisiologia', 'Nefrologia', 'Fisiopatologia']
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
    tags: ['Anatomia', 'Ginecologia', 'Cirurgia']
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
    tags: ['Microbiologia', 'Infectologia', 'Reumatologia']
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
    tags: ['Parasitologia', 'Infectologia', 'Gastroenterologia']
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
    tags: ['Genética', 'Pediatria']
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
    tags: ['Embriologia', 'Pediatria', 'Cirurgia Pediátrica']
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
    tags: ['Bioquímica', 'Hematologia', 'Neurologia']
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
    tags: ['Fisiologia', 'Ginecologia', 'Endocrinologia']
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
    tags: ['Patologia', 'Nefrologia', 'Cirurgia']
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
    tags: ['Patologia', 'Neurologia']
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
    tags: ['Fisiologia', 'Nefrologia', 'Fisiopatologia']
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
    tags: ['Farmacologia', 'Pneumologia', 'Cardiologia']
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
    tags: ['Genética', 'Biologia Molecular']
  },
  {
    id: 'tp2021-16',
    module: 'Ciências Básicas',
    image: '/images/tp2021-16.PNG',
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
    tags: ['Fisiologia', 'Gasometria', 'Pneumologia']
  },
  {
    id: 'tp2021-17',
    module: 'Ciências Básicas',
    image: '/images/tp2021-17.PNG',
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
    tags: ['Radiologia', 'Cirurgia', 'Emergência']
  },
  {
    id: 'tp2021-18',
    module: 'Ciências Básicas',
    image: '/images/tp2021-18.PNG',
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
    tags: ['Histologia', 'Fisiologia', 'Gastroenterologia']
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
    tags: ['Bioestatística', 'Metodologia Científica']
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
    tags: ['Anatomia', 'Cardiologia']
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
    explanation: 'O gradiente soro-ascite de albumina (GASA = 3,0 – 1,0 = 2,0 g/dL) é maior que 1,1 g/dL, indicando ascite por hipertensão portal. O mecanismo fisiopatológico envolve aumento da pressão hidrostática no sistema porta, além de ativação de SRAA, promovendo retenção de sódio e água.',
    commentary: 'Comentários sobre a resposta correta:\n(D) O gradiente soro-ascite de albumina (GASA = 3,0 – 1,0 = 2,0 g/dL) é maior que 1,1 g/dL, indicando ascite por hipertensão portal. O mecanismo fisiopatológico envolve aumento da pressão hidrostática no sistema porta, além de ativação de sistemas neuro-hormonais (como SRAA), promovendo retenção de sódio e água.\n\nComentários sobre os distratores:\n(A) A hipoalbuminemia pode causar ascite (ex: síndrome nefrótica), mas a albumina sérica geralmente está muito baixa, o GASA tende a ser baixo (<1,1 g/dL), pois há pouca diferença entre soro e líquido e, no caso: Albumina sérica = 3,0 g/dL (não é gravemente baixa) e GASA = 2,0 g/dL (alto), logo, a hipoalbuminemia isolada não explica o quadro.\n(B) Esse mecanismo é típico de ascite exsudativa, como ocorre em peritonite bacteriana, tuberculose peritoneal, carcinomatose. Nesses casos, espera-se: GASA < 1,1 g/dL; proteínas elevadas no líquido (>2,5 g/dL); maior contagem de leucócitos. No caso apresentado: GASA = 2,0 g/dL (alto, sugere hipertensão portal) Proteína = 1,5 g/dL (baixa). Portanto, não há evidência de processo inflamatório/permeabilidade aumentada.\n(C) Esse mecanismo ocorre em situações como linfoma, carcinomatose, ascite quilosa. Características esperadas são líquido ricos em proteínas, aspecto frequentemente leitoso (quiloso) e GASA geralmente baixo (<1,1). No caso: Proteína baixa (1,5 g/dL) e GASA alto. Isso afasta fortemente ascite por obstrução linfática.',
    reference: 'LOPES, A. C. Tratado de clínica médica, v. 1, 3. ed. – Rio de Janeiro: Roca, 2016.',
    tags: ['Fisiopatologia', 'Gastroenterologia']
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
    explanation: 'A pCO₂ de 23mmHg está dentro do intervalo esperado (23 ± 2mmHg) pela fórmula de Winter, confirmando hiperventilação como compensação respiratória adequada da cetoacidose diabética, sem distúrbio respiratório primário.',
    commentary: 'Comentários sobre a resposta correta:\n(B) Aplicando a fórmula: (1,5 × 10) + 8 ± 2 = 23 ± 2 mmHg. A pCO₂ de 23 mmHg está exatamente no valor central esperado, confirmando compensação respiratória adequada. O pH permanece baixo (7,18) porque a compensação respiratória tem eficiência de 50–75% e jamais normaliza completamente o pH no distúrbio metabólico primário.\n\nComentários sobre os distratores:\n(A) Acidose respiratória associada existiria se a pCO₂ estivesse acima de 25 mmHg (limite superior do intervalo esperado). A pCO₂ de 23 mmHg está dentro do intervalo calculado, afastando esse diagnóstico.\n(C) Erro conceitual grave: a compensação respiratória é parcial (eficiência de 50–75%) e nunca normaliza o pH em distúrbios metabólicos primários. O pH de 7,18 confirma compensação adequada, porém incompleta — como esperado fisiologicamente.\n(D) A persistência do pH baixo (7,18) após compensação respiratória adequada é um achado esperado e fisiologicamente normal — a compensação é parcial por definição (eficiência de 50–75%). O pH de 7,18 não indica falência dos sistemas de tamponamento nem necessidade de bicarbonato intravenoso.',
    reference: 'Albert MS, Dell RB, Winters RW. Quantitative displacement of acid-base equilibrium in metabolic acidosis. PMID: 6016545. | HALL, John E. Tratado de Fisiologia Médica. Cap. 31. 13. ed. Rio de Janeiro: Elsevier, 2017.',
    tags: ['Fisiologia', 'Nefrologia', 'Endocrinologia']
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
    explanation: 'Solicitar urocultura e antibiograma para identificar o agente etiológico e seu perfil de sensibilidade é a conduta mais adequada dado o histórico de infecções urinárias de repetição recorrentes.',
    commentary: 'Comentários sobre a resposta correta:\n(C) A paciente apresenta sintomas clássicos de ITU e um EAS com alterações que confirmam processo inflamatório/infeccioso. No entanto, o histórico de ITUs de repetição, tratadas empiricamente, aumenta o risco de resistência bacteriana. Nesses casos, o planejamento diagnóstico mais apropriado inclui a solicitação de urocultura e antibiograma. Este exame é fundamental para identificar o patógeno específico e seu perfil de sensibilidade aos antimicrobianos, permitindo um tratamento antibiótico direcionado, mais eficaz e que minimize o risco de falha terapêutica e de desenvolvimento de mais resistência. A antibioticoterapia empírica deve ser considerada com cautela em casos de recorrência, sendo a cultura essencial para guiar a conduta.\n\nComentários sobre os distratores:\n(A) Incorreta. A presença de disúria, urgência, aumento da frequência urinária, esterase leucocitária positiva e grande quantidade de leucócitos e bactérias no EAS, mesmo sem febre, é altamente sugestiva de ITU. A hipótese de contaminação é menos provável com um EAS tão alterado e sintomatologia clara.\n(B) Incorreta. Embora a antibioticoterapia empírica possa ser uma opção em casos de ITU não complicada e primeiro episódio, em pacientes com histórico de recorrência e tratamentos empíricos prévios, a probabilidade de resistência é maior.\n(D) Incorreta. Embora a investigação de causas de ITU recorrente por um especialista possa ser necessária a longo prazo, a conduta imediata na UBS, diante de um quadro agudo e um EAS alterado, é confirmar a infecção e planejar o tratamento.',
    reference: 'SOCIEDADE BRASILEIRA DE INFECTOLOGIA. Recomendações para o manejo das infecções do trato urinário. 2019. | HOOTON, T. M. et al. Clinical Infectious Diseases, 2018.',
    tags: ['Infectologia', 'Nefrologia']
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
    explanation: 'Na cirrose hepática, há redução do fluxo sanguíneo hepático e da função hepatocelular, diminuindo o metabolismo de primeira passagem e aumentando a biodisponibilidade de fármacos de alta extração hepática.',
    commentary: 'Comentários sobre a resposta correta:\n(D) Na cirrose hepática, há comprometimento da função hepatocelular e redução do fluxo sanguíneo hepático, o que diminui o metabolismo de primeira passagem, especialmente para fármacos com alta taxa de extração hepática. Isso leva ao aumento da biodisponibilidade oral.\n\nComentários sobre os distratores:\n(A) Incorreta: a hipoalbuminemia pode aumentar a fração livre do fármaco e, em muitos casos, aumentar (não reduzir) o volume de distribuição.\n(B) Incorreta: ocorre o oposto — há redução (e não aumento) do metabolismo de primeira passagem.\n(C) Incorreta: a cirrose reduz a depuração hepática, não a aumenta.',
    reference: 'Brunton LL et al. Goodman & Gilman’s The Pharmacological Basis of Therapeutics.',
    tags: ['Farmacologia', 'Gastroenterologia']
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
    explanation: 'As quinolonas atuam inibindo as topoisomerases bacterianas, principalmente a DNA girase, impedindo a duplicação do DNA bacteriano.',
    commentary: 'Comentários sobre a resposta correta:\n(A) A classe das fluoroquinolonas, cuja ação antimicrobiana ocorre por inibição da DNA girase (topoisomerase II) e da topoisomerase IV bacterianas, enzimas essenciais para a replicação e transcrição do DNA bacteriano. A inibição dessas enzimas impede a duplicação do material genético, levando à morte bacteriana.\n\nComentários sobre os distratores:\n(B) Esse mecanismo corresponde aos antibióticos β-lactâmicos, como penicilinas e cefalosporinas, que atuam inibindo a síntese da parede celular bacteriana.\n(C) A inibição da síntese proteica na subunidade ribossomal 50S é característica de antibióticos como macrolídeos (azitromicina), cloranfenicol e lincosamidas, e não das fluoroquinolonas.\n(D) A inibição da síntese de ácido fólico bacteriano por bloqueio da diidropteroato sintetase é o mecanismo de ação das sulfonamidas.',
    reference: 'Brunton LL, Hilal-Dandan R, Knollmann BC. Goodman & Gilman\'s the pharmacological basis of therapeutics. 14th ed. New York: McGraw-Hill Education; 2023.',
    tags: ['Farmacologia', 'Infectologia']
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
    explanation: 'A Penicilina G (Benzetacil) é um antibiótico beta-lactâmico que atua inibindo a síntese da parede celular bacteriana por meio do bloqueio da transpeptidação do peptidoglicano.',
    commentary: 'Comentários sobre a resposta correta:\n(B) Os antibióticos β-lactâmicos (como penicilinas) atuam inibindo a síntese da parede celular bacteriana, especificamente interferindo na formação do peptidoglicano, componente estrutural essencial para a integridade da célula bacteriana. Esse efeito leva à lise bacteriana, especialmente em bactérias Gram-positivas como o Streptococcus pyogenes.\n\nComentários sobre os distratores:\n(A) Inibe a síntese proteica ao se ligar à subunidade 30S do ribossomo bacteriano. Esse é o mecanismo de antibióticos como aminoglicosídeos e tetraciclinas.\n(C) Altera a permeabilidade da membrana celular ao se ligar a ergosterol. O ergosterol é um componente típico da membrana de fungos, não de bactérias. Esse mecanismo é característico de antifúngicos (ex.: anfotericina B).\n(D) Inibe a replicação do DNA bacteriano por bloqueio da DNA girase. Esse é o mecanismo das fluoroquinolonas.',
    reference: 'Goodman & Gilman\'s The Pharmacological Basis of Therapeutics. Brunton LL, Hilal-Dandan R, Knollmann BC.',
    tags: ['Farmacologia', 'Infectologia']
  },
  {
    id: 'tp2026-7',
    module: 'Ciências Básicas',
    text: 'Durante atendimento ambulatorial, quatro pacientes apresentam manifestações imunológicas distintas: glomerulonefrite por imunocomplexos, anafilaxia alimentar, dermatite de contato e doença hemolítica mediada por anticorpos. A alternativa que apresenta corretamente o principal mediador imunológico envolvido, respectively, é:',
    options: [
      '(A) Imunocomplexos – Mastócitos – Linfócitos T – IgG citotóxico',
      '(B) Complemento – IgM citotóxico – Eosinófilos – IgE',
      '(C) Imunocomplexos – IgE – Linfócitos B – Macrófagos',
      '(D) Complemento – Mastócitos – Macrófagos – IgA citotóxico'
    ],
    correctAnswer: 0,
    explanation: 'A sequência de mecanismos envolve hipersensibilidade tipo III (imunocomplexos), tipo I (mastócitos/IgE), tipo IV (linfócitos T) e tipo II (anticorpos IgG/citotóxica).',
    commentary: 'Comentários sobre a resposta correta:\n(A) Imunocomplexos → Complexos Ag-Ac (Reação de Hipersensibilidade do Tipo III)\nAnafilaxia → Mastócitos (Reação de Hipersensibilidade do Tipo I)\nDermatite tardia → Linfócitos T (Reação de Hipersensibilidade do Tipo IV)\nCitotoxicidade → IgG (Reação de Hipersensibilidade do Tipo II)\n\nComentários sobre os distratores:\n(B) Atribui IgM à Anafilaxia e IgE à doença hemolítica, o que é incorreto.\n(C) Linfócitos B não atuam diretamente na resposta inflamatória tardia de contato (células T).\n(D) IgA não é o mediador principal de citotoxicidade clássica da doença hemolítica.',
    reference: 'ABBAS, Abul K.; LICHTMAN, Andrew H.; PILLAI, Shiv. Imunologia celular e molecular. 10. ed. Rio de Janeiro: Guanabara Koogan, 2023, Capítulo 16.',
    tags: ['Imunologia']
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
    explanation: 'A hanseníase virchowiana decorre de uma deficiência na resposta celular (Th1), impedindo a destruição intracelular dos bacilos e resultando em sua proliferação massiva.',
    commentary: 'Comentários sobre a resposta correta:\n(C) Casos de hanseníase virchowiana ocorrem quando a resposta imune celular, ou seja, Th1, está deficiente. Por isso são identificados numerosos bacilos à coloração de Fite-Faraco devido à incapacidade do macrófago de lisar o microrganismo por falta de estímulo do IFN-gama.\n\nComentários sobre os distratores:\n(A) A resposta Th2 realmente está ativa com níveis altos de anticorpos ineficazes, mas a causa primária da incapacidade de contenção é a deficiência celular Th1.\n(B) A resposta Th2 não está deficiente; e encontram-se numerosos bacilos, não raros.\n(D) Na virchowiana a resposta Th1 está gravemente deprimida e não há formação típica de granulomas tuberculoides organizados com raros bacilos.',
    reference: 'BRASILEIRO, Filho G.: Bogliolo: Patologia. 10. ed. Rio de Janeiro. Guanabara Koogan, 2021.',
    tags: ['Infectologia', 'Patologia', 'Imunologia']
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
    explanation: 'No herpes-zóster, o vírus migra a partir do gânglio sensitivo da raiz dorsal através da raiz espinhal torácica correspondente, afetando estritamente aquele dermátomo correspondente.',
    commentary: 'Comentários sobre a resposta correta:\n(B) Os dermátomos correspondem a áreas cutâneas inervadas por uma única raiz nervosa espinhal. No herpes-zóster, o vírus permanece latente nos gânglios sensitivos e, ao reativar, segue o trajeto da raiz nervosa, produzindo lesões restritas a um dermátomo, sem cruzar a linha média.\n\nComentários sobre os distratores:\n(A) Os nervos intercostais derivam das raízes espinhais, mas representam ramos periféricos mistos, não sendo a estrutura primária que define o padrão segmentar do gânglio dorsal infectado.\n(C) Não existe um “plexo torácico” com organização segmentar típica como descrito.\n(D) Os ramos comunicantes estão relacionados ao sistema nervoso autônomo simpático e não são responsáveis pela inervação sensitiva cutânea segmentar.',
    reference: 'HAMMER, G.D.; MCPHEE, S.J. Fisiopatologia da Doença: Uma Introdução à Medicina Clínica. 7 ed. São Paulo: Artmed, 2015.',
    tags: ['Anatomia', 'Neurologia', 'Infectologia']
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
    explanation: 'O tronco celíaco irriga os órgãos derivados do intestino anterior (foregut), que compreendem esôfago distal, estômago, duodeno proximal, fígado, vesícula biliar, pâncreas e baço.',
    commentary: 'Comentários sobre a resposta correta:\n(D) O tronco celíaco é o principal vaso responsável pela irrigação dos órgãos derivados do intestino anterior (foregut), incluindo estômago, fígado, baço e parte do duodeno. A dor epigástrica associada a sinais de isquemia nesses órgãos sugere comprometimento desse tronco arterial.\n\nComentários sobre os distratores:\n(A) Artéria mesentérica superior: irriga o intestino médio (midgut), incluindo jejuno, íleo, ceco, apêndice e cólon transverso proximal.\n(B) Artéria mesentérica inferior: irriga estruturas do intestino posterior (hindgut), como cólon descendente, sigmoide e reto superior.\n(C) Artéria ilíaca comum: participa da irrigação dos membros inferiores e órgãos pélvicos.',
    reference: 'MOORE, K. L.; DALLEY, A. F.; AGUR, A. M. R. Anatomia Orientada para a Clínica. 8ª ed. Rio de Janeiro: Guanabara Koogan.',
    tags: ['Anatomia', 'Gastroenterologia']
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
    explanation: 'A ativação dos receptores adrenérgicos beta-1 no coração aumenta tanto o cronotropismo quanto o inotropismo, promovendo elevação direta do débito cardíaco.',
    commentary: 'Comentários sobre a resposta correta:\n(C) O receptor β1 está localizado predominantemente no coração e sua ativação aumenta a frequência cardíaca (cronotropismo) e a contratilidade (inotropismo), contribuindo para o aumento do débito cardíaco e, consequentemente, da pressão arterial.\n\nComentários sobre os distratores:\n(A) Receptor α1: promove vasoconstrição arteriolar periférica, aumentando a resistência vascular sistêmica.\n(B) Receptor α2: feedback inibitório pré-sináptico central, que diminui o efluxo simpático.\n(D) Receptor β2: promove vasodilatação muscular esquelética e relaxamento bronquial.',
    reference: 'COSTANZO, L. S. Fisiologia. 6ª ed. Elsevier.',
    tags: ['Fisiologia', 'Farmacologia', 'Cardiologia']
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
    explanation: 'Os IECAs provocam dilatação da arteríola eferente ao bloquear a angiotensina II. Isto reduz a pressão de filtração dentro do glomérulo, gerando queda transitória e aceitável da TFG.',
    commentary: 'Comentários sobre a resposta correta:\n(A) Vasodilatação da arteríola eferente glomerular, resultando na redução da pressão hidrostática intraglomerular: A angiotensina II (Ang II) é um potente vasoconstritor eferente. Ao inibir a enzima conversora, os IECAs causam vasodilatação da arteríola eferente. Essa dilatação reduz a resistência de saída do sangue do glomérulo, resultando em diminuição da pressão hidrostática intraglomerular e, consequentemente, uma redução esperada na TFG.\n\nComentários sobre os distratores:\n(B) A permeabilidade capilar não é reduzida agudamente por esse mecanismo podocitário em condições não-nefróticas.\n(C) O aumento da pressão hidrostática na cápsula de Bowman ocorre em obstruções pós-renais, não sendo efeito dos IECAs.\n(D) O efeito esperado é a vasodilatação e não o aumento da resistência aferente.',
    reference: 'LINDA S COSTANZO. Fisiologia, Elsevier, 7 edição, 2025. | GUYTON & HALL. Tratado de Fisiologia Médica, Elsevier, 14 edição, 2021.',
    tags: ['Fisiologia', 'Farmacologia', 'Nefrologia']
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
    tags: ['Fisiologia', 'Hematologia']
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
    tags: ['Fisiologia', 'Nefrologia', 'Endocrinologia']
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
    tags: ['Fisiologia', 'Cardiologia']
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
    tags: ['Fisiologia', 'Nefrologia', 'Endocrinologia']
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
    tags: ['Fisiologia', 'Endocrinologia']
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
    tags: ['Fisiologia', 'Pneumologia']
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
    tags: ['Genética', 'Oncologia', 'Patologia']
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
    tags: ['Genética', 'Pediatria']
  }
];
