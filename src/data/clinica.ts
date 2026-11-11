import { Question } from '../types';

export const CLINICA_QUESTIONS: Question[] = [
  {
    id: 'tp2024-21',
    module: 'Clínica Médica',
    text: 'A dengue é uma doença endêmica no Brasil, com ocorrência de casos o ano todo com um padrão sazonal, coincidente com períodos chuvosos e quentes, quando são observados o aumento do número de casos e um maior risco para epidemias. Do ponto de vista clínico é um desafio. Em relação ao diagnóstico laboratorial da dengue, podemos afirmar que:',
    options: [
      '(A) A sorologia para dengue deve ser solicitada em todos os pacientes com suspeita de dengue em qualquer período do início dos sintomas.',
      '(B) O teste de antígeno NS1 está presente em altas concentrações no soro de pacientes e podem ser assim detectados em qualquer período dos sintomas do paciente.',
      '(C) A sorologia para dengue deve ser solicitada em todos os pacientes com suspeita de dengue até o 5º dia do início dos sintomas.',
      '(D) O teste de antígeno NS1 está presente em altas concentrações no soro de pacientes e podem ser detectados após os primeiros sintomas e devem ser solicitados até o 5º dia.'
    ],
    correctAnswer: 3,
    explanation: "O NS1 é uma proteína não estrutural do vírus da dengue liberada em grande quantidade no sangue durante a fase de viremia. Por isso pode ser detectado desde o primeiro dia de sintomas, antes do aparecimento dos anticorpos, e o Ministério da Saúde orienta solicitá-lo até o quinto dia, junto com os métodos de detecção viral (RT-PCR, isolamento viral).\n\nA partir do sexto dia, a viremia cai e o exame indicado passa a ser a sorologia IgM. É importante lembrar que o resultado não muda a conduta inicial: o manejo é guiado pela classificação clínica de risco.",
    commentary: "Sorologia em qualquer período (A): a IgM só se torna detectável a partir do quinto ou sexto dia, então uma sorologia precoce pode dar falso negativo.\n\nNS1 em qualquer período (B): o antígeno acompanha a viremia e diminui depois da primeira semana; após o quinto dia a sensibilidade cai.\n\nSorologia até o quinto dia (C): inverte a lógica; a sorologia é indicada a partir do sexto dia, e não até o quinto.",
    tip: "Dengue: NS1 ou RT-PCR até o 5º dia; sorologia IgM a partir do 6º dia.",
    reference: 'Dengue: Diagnóstico e manejo clínico – Adulto e criança, 6ª edição. Ministério da Saúde, Secretaria de vigilância e saúde e ambiente, Departamento de doenças transmissíveis, Brasil, 2024.',
    tags: ['infectologia', 'dengue']
  },
  {
    id: 'tp2024-22',
    module: 'Clínica Médica',
    text: 'Paciente do sexo feminino, 30 anos, admitida no prontosocorro com queixa de febre há 3 dias, associada a cefaleia, dor retro-orbitária, prostração e mialgia. Nega náuseas e vômitos. Foi diagnosticada como dengue e classificada como grupo A, com tratamento ambulatorial e orientada a retornar caso apresentasse sinais de alarme. É considerado um sinal de alarme:',
    options: [
      '(A) Esplenomegalia',
      '(B) Derrame pleural',
      '(C) Petéquias',
      '(D) Prova do laço positiva'
    ],
    correctAnswer: 1,
    explanation: "Os sinais de alarme da dengue marcam o extravasamento de plasma que costuma surgir na defervescência, entre o terceiro e o sétimo dia. Pelo Ministério da Saúde, entram na lista: dor abdominal forte e persistente, vômitos que não cessam, coleções de líquido (ascite, derrame pleural ou pericárdico), queda da pressão ao ficar de pé ou lipotimia, fígado palpável 2 cm ou mais abaixo da costela, sangramento em mucosas, sonolência ou irritabilidade e hematócrito em elevação progressiva.\n\nO derrame pleural é um desses sinais. Quem os apresenta passa para o grupo C e precisa de hidratação venosa e internação.",
    commentary: "Esplenomegalia (A): não faz parte da lista de sinais de alarme da dengue.\n\nPetéquias (C): sangramento de pele espontâneo coloca o paciente no grupo B, mas não é sinal de alarme; o sangramento que alarma é o de mucosa.\n\nProva do laço positiva (D): também classifica no grupo B (sangramento induzido), mas não indica extravasamento de plasma.",
    tip: "Dengue: acúmulo de líquido (ascite, derrame pleural) é alarme; petéquias e prova do laço só levam ao grupo B.",
    reference: 'Dengue: Diagnóstico e manejo clínico – Adulto e criança, 6ª edição. Ministério da Saúde, Secretaria de vigilância e saúde e ambiente, Departamento de doenças transmissíveis, Brasil, 2024.',
    tags: ['infectologia', 'dengue']
  },
  {
    id: 'tp2024-23',
    module: 'Clínica Médica',
    text: 'Homem, 78 anos, com antecedente de Hipertensão Arterial Sistêmica e Diabetes Mellitus tipo 2 de longa data, é admitido no pronto-socorro com quadro de confusão mental, dispneia, náusea, diminuição do volume urinário e edema de membros inferiores. Familiar refere que o paciente faz uso de Losartana 50mg/dia, Atenolol 50mg/dia, Gliclazida 60mg/dia e fez uso de Cetoprofeno 150mg/dia por 5 dias, devido a dor nas costas. Exame físico: mau estado geral, confuso, taquipneico, acianótico, anictérico, afebril, PA 161/102mmHg, FC 92 bpm, ausculta pulmonar com estertores bilaterais, presença de edema de MMII 2+/4+ e demais sistemas sem alterações. Exames laboratoriais: creatinina = 5,9mg/dL (VR: 0,5 a 1,2mg/dL); ureia = 186mg/dL (VR: 10 a 50mg/dL); potássio = 7,6mEq/L (VR: 3,5 a 5,0mEq/L); sódio = 137mEq/L (VR: 136 a 145mEq/L); Urina tipo I: densidade = 1.010, proteína = 1+/5, nitrito = negativo, leucócitos = 25.000/mL, hemácias = 35.000/mL (VR: densidade = 1.005 a 1.030; proteína = negativa; nitrito = negativo; leucócitos = até 10.000/mL; hemácias = até 5.000/mL); eletrocardiograma = presença de onda T apiculada, mesmo após medidas contra hipercalemia. Qual a conduta correta?',
    options: [
      '(A) Iniciar o tratamento de diálise devido ao quadro de hipercalemia refratária.',
      '(B) Prescrever hidratação endovenosa para promover a diurese.',
      '(C) Prescrever hidratação e diurético endovenoso para promover a diurese.',
      '(D) Prescrever diurético endovenoso para promover a diurese.'
    ],
    correctAnswer: 0,
    explanation: "Idoso com doença renal crônica provável (hipertensão e diabetes de longa data) em uso de losartana que tomou cetoprofeno por 5 dias: o AINE reduz as prostaglandinas que dilatam a arteríola aferente, e o bloqueador do receptor de angiotensina tira a vasoconstrição da eferente. O rim perde a capacidade de manter a filtração e surge uma lesão renal aguda grave, com oligúria, congestão (estertores e edema) e confusão mental por uremia.\n\nO potássio de 7,6 mEq/L com onda T apiculada que persiste após as medidas clínicas é hipercalemia refratária com repercussão no ECG, uma indicação de diálise de urgência. O paciente ainda tem sobrecarga de volume e sinais de uremia, outras indicações que reforçam a decisão.",
    commentary: "Hidratação venosa (B): o paciente já está hipervolêmico, com estertores e edema; mais volume pioraria a congestão pulmonar.\n\nHidratação com diurético (C): o volume extra é contraindicado, e o diurético não corrige a tempo uma hipercalemia refratária com alteração no ECG.\n\nDiurético isolado (D): pode ajudar na congestão em quem ainda responde, mas não é suficiente diante de hipercalemia grave refratária e uremia.",
    tip: "Indicações de diálise de urgência: hipercalemia refratária, acidose grave, hipervolemia refratária e uremia (AEIOU).",
    reference: 'THOMÉ, Fernando Saldanha; ANTUNES, Verônica V. Hörbe; THOMÉ, Gustavo. Insuficiência renal aguda. In: VERONESE, Fernando Veríssimo; MANFRO, Roberto Ceratti; THOMÉ, Fernando Saldanha; BARROS, Elvino. Nefrologia na prática clínica. 1ª Ed. São Paulo: Livraria Balieiro, 2019. BOIM, Mirian Aparecida; SANTOS, Oscar F. Pavão dos; SCHOR, Nestor. Insuficiência renal aguda. In: AJZEN, Horácio; SCHOR, Nestor. Guia de Nefrologia. 3ª Ed. Barueri: Editora Manole, 2011.',
    tags: ['nefrologia', 'emergência']
  },
  {
    id: 'tp2024-24',
    module: 'Clínica Médica',
    text: 'A definição de injúria renal aguda (IRA) passou, nos últimos anos, por uma longa lista de discussões envolvendo critérios RIFLE, AKIN, até que em 2012 um grupo de experts no tema, através dos critérios KDIGO (Kidney Disease to Improve Global Outcomes), definiu os critérios atualmente aceitos como IRA. Assinale a alternativa correta:',
    options: [
      '(A) Entende-se como IRA: elevação de valores de creatinina acima de 1,5mg/dL.',
      '(B) Entende-se como IRA: elevação em 0,5mg/dL de creatinina em relação aos valores de base em 48 horas OU elevação em 2 vezes dentro de um período de 7 dias OU redução do débito urinário para menos que 0,5mL/kg/h em 12 horas consecutivas.',
      '(C) Entende-se como IRA: elevação em 0,3mg/dL de creatinina em relação aos valores de base em 48 horas OU elevação em 1,5 vezes dentro de um período de 7 dias OU redução do débito urinário para menos que 0,5mL/kg/h em 6 horas consecutivas.',
      '(D) Entende-se como IRA: elevação em 0,3mg/dL de creatinina em relação aos valores de base em 7 dias OU elevação em 1,5 vezes dentro de um período de 48 horas OU redução do débito urinário para menos que 0,3mL/kg/h em 6 horas consecutivas.'
    ],
    correctAnswer: 2,
    explanation: "Pelo KDIGO de 2012, há injúria renal aguda quando ocorre qualquer um destes critérios: aumento da creatinina de pelo menos 0,3 mg/dL em 48 horas; aumento para 1,5 vez o valor basal ou mais, sabido ou presumido nos últimos 7 dias; ou débito urinário abaixo de 0,5 mL/kg/h por 6 horas.\n\nO critério de 0,3 mg/dL foi incorporado porque mesmo pequenas elevações da creatinina se associam a pior prognóstico. Os mesmos parâmetros servem para estadiar a IRA de 1 a 3.",
    commentary: "Creatinina acima de 1,5 mg/dL (A): um valor absoluto não define IRA; o critério é a variação em relação ao basal.\n\nElevação de 0,5 mg/dL e duas vezes o basal em 12 horas de oligúria (B): os números estão errados; a elevação mínima é 0,3 mg/dL, a relativa é 1,5 vez, e a oligúria conta a partir de 6 horas (dobrar a creatinina já é estágio 2).\n\nJanelas trocadas e 0,3 mL/kg/h (D): o aumento de 0,3 mg/dL vale em 48 horas e o de 1,5 vez em 7 dias; débito abaixo de 0,3 mL/kg/h é critério de estágio 3, não de definição.",
    tip: "KDIGO: creatinina +0,3 em 48 h, ou 1,5 vez em 7 dias, ou diurese < 0,5 mL/kg/h por 6 h.",
    reference: 'Khwaja A. KDIGO clinical practice guidelines for acute kidney injury. Nephron Clin Pract. 2012;120(4):c179-84. Palevsky PM, Liu KD, Brophy PD, Chawla LS, Parikh CR, Thakar CV, et al. KDOQI US commentary on the 2012 KDIGO clinical practice guideline for acute kidney injury. Am J Kidney Dis. 2013;61(5):649-72.',
    tags: ['nefrologia']
  },
  {
    id: 'tp2024-25',
    module: 'Clínica Médica',
    text: 'Mulher de 56 anos, obesa, sem tratamento específico, hipertensa, em uso de losartana 100mg/dia e com diabetes tipo 2 em uso de metformina 1500mg/dia, queixa-se de dor em joelhos ao subir escadas e após varrer a casa há uns 2 anos. Nega febre e parestesias. Nega lesões de pele. Refere rigidez matinal de curta duração. No exame físico osteoarticular apresenta crepitação grosseira patelofemorais e limitação de amplitude articular em ambos os joelhos. O diagnóstico mais provável é osteoartrite e a conduta a ser seguida é:',
    options: [
      '(A) Tratamento não farmacológico com fortalecimento muscular das coxas, além de treino de equilíbrio e propriocepção.',
      '(B) Tratamento não farmacológico com controle da dieta, orientação de menor consumo de alimentos ricos em purina e álcool.',
      '(C) Solicitar primeiro densitometria óssea para investigação da causa.',
      '(D) Solicitar eletromiografia para avaliar neuropatia relacionada ao diabetes como a principal causa da dor.'
    ],
    correctAnswer: 0,
    explanation: "Dor mecânica nos joelhos (piora ao subir escadas e com esforço), rigidez matinal curta, crepitação grosseira e limitação de movimento em mulher obesa acima dos 50 anos fecham o quadro clínico de osteoartrite. O diagnóstico é clínico e não exige exame para ser estabelecido.\n\nA base do tratamento é não farmacológica: educação, perda de peso e exercício. O fortalecimento do quadríceps diminui a carga sobre a articulação e melhora dor e função, e o treino de equilíbrio e propriocepção reduz instabilidade e quedas. Analgésicos e anti-inflamatórios tópicos entram como complemento, e não no lugar dessas medidas.",
    commentary: "Dieta pobre em purinas e álcool (B): é orientação para gota, doença inflamatória com crises de artrite aguda, quadro diferente do descrito.\n\nDensitometria óssea (C): avalia osteoporose, que não causa dor articular nem crepitação; não investiga a causa da dor no joelho.\n\nEletromiografia (D): a paciente nega parestesias, e a dor ligada ao esforço com crepitação é articular, não neuropática.",
    tip: "Osteoartrite de joelho: o primeiro tratamento é exercício (quadríceps) e perda de peso.",
    reference: 'Pendleton A, Ardeu N, Dougados M, et al. EULAR recommendations for the management of knee osteoarthritis: report of a task force of the Standing Committee for International Clinical Studies Including Therapeutic Trials (ESCISIT). Ann Rheum Dis 59:936-44, 2000.',
    tags: ['reumatologia', 'ortopedia']
  },
  {
    id: 'tp2024-26',
    module: 'Clínica Médica',
    text: 'Paciente de 84 anos apresenta, há cerca de 9 meses, quadro de flutuação cognitiva com variação acentuada da atenção, dificuldade em dirigir e estacionar seu carro, além do relato por parte da esposa de sono muito agitado e alucinações visuais. Ao exame físico apresenta rigidez axial e bradicinesia em membros inferiores e superiores. A avaliação geriátrica ampla evidencia: Mini-exame do estado mental: 19/30 com escolaridade de 4 anos, Lawton: 18/27, Katz: 6/6 e Geriatric Depression Scale: 3/15. Ressonância magnética de encéfalo mostra atrofia cerebral difusa com escores MTA (Medial Temporal Lobe Atroph) 2 e Escala Fazekas 1. O diagnóstico mais provável é:',
    options: [
      '(A) Demência frontotemporal',
      '(B) Demência por corpos de Lewy',
      '(C) Demência da doença de Alzheimer',
      '(D) Demência vascular'
    ],
    correctAnswer: 1,
    explanation: "O idoso tem demência com flutuação marcante da atenção, alucinações visuais bem formadas, sono agitado (sugere distúrbio de comportamento no sono REM) e parkinsonismo (rigidez axial e bradicinesia). Esses são justamente os quatro achados centrais da demência com corpos de Lewy; dois deles já tornam o diagnóstico provável.\n\nA dificuldade para dirigir e estacionar aponta para déficit visuoespacial e executivo, também típico dessa demência no início, quando a memória pode estar relativamente poupada. A ressonância mostra apenas alterações esperadas para a idade. Na prática, esses pacientes são muito sensíveis a antipsicóticos, que devem ser evitados; os inibidores da colinesterase costumam ajudar.",
    commentary: "Demência frontotemporal (A): começa com mudança de comportamento ou de linguagem, em geral antes dos 65 anos, sem alucinações visuais e sem parkinsonismo precoce.\n\nDoença de Alzheimer (C): começa com perda de memória recente e progressão gradual, sem grande flutuação, e o parkinsonismo e as alucinações aparecem só em fases avançadas; a atrofia temporal medial aqui é compatível com a idade.\n\nDemência vascular (D): exige doença cerebrovascular relevante na imagem e evolução relacionada a eventos vasculares; Fazekas 1 indica apenas alteração leve de substância branca.",
    tip: "Corpos de Lewy: flutuação + alucinações visuais + parkinsonismo + transtorno do sono REM. Evite antipsicóticos.",
    reference: 'Tratado de Geriatria e Gerontologia - Quinta edição - Freitas & Py - Guanabara Koogan 2022. Geriatria Prática Clínica - Segunda edição - Duarte & Amaral - Manole 2023.',
    tags: ['geriatria', 'neurologia']
  },
  {
    id: 'tp2024-27',
    module: 'Clínica Médica',
    text: 'Paciente, sexo feminino, 40 anos, encaminhada ao ambulatório de reumatologia devido a queixa de “dores nas juntas” e “arroxeamento dos dedos” quando exposta ao frio. Ao exame físico nota-se cianose em dedos das mãos enquanto o arcondicionado da sala estava ligado, além de edema generalizado e discreto espessamento cutâneo também em mãos. Pensando na principal hipótese diagnóstica, quais exames auxiliariam na confirmação?',
    options: [
      '(A) Pesquisa de autoanticorpos nucleares (FAN) e a realização da ultrassonografia de mãos.',
      '(B) Pesquisa de autoanticorpos nucleares (FAN) e a realização do exame de capilaroscopia periungueal.',
      '(C) Fator Reumatoide e a realização da radiografia de mãos.',
      '(D) Fator Reumatoide e a realização do exame de capilaroscopia periungueal.'
    ],
    correctAnswer: 1,
    explanation: "Fenômeno de Raynaud (dedos que ficam roxos no frio), mãos inchadas e espessamento da pele em mulher de 40 anos sugerem esclerose sistêmica. O Raynaud pode anteceder em anos as demais manifestações, e as mãos edemaciadas (\"puffy hands\") são uma fase inicial da doença.\n\nOs exames que mais ajudam são o FAN, positivo na grande maioria dos pacientes (com os autoanticorpos específicos anticentrômero e anti-Scl-70 na sequência), e a capilaroscopia periungueal, que mostra o padrão esclerodérmico de capilares dilatados e áreas sem capilares. Ambos fazem parte dos critérios classificatórios e ajudam a separar o Raynaud secundário do primário.",
    commentary: "FAN e ultrassonografia de mãos (A): o FAN é útil, mas a ultrassonografia avalia sinovite e tendões e não confirma esclerose sistêmica.\n\nFator reumatoide e radiografia de mãos (C): são exames voltados para artrite reumatoide; o fator reumatoide é pouco específico, e a radiografia não identifica a doença inicial.\n\nFator reumatoide e capilaroscopia (D): a capilaroscopia é adequada, mas o fator reumatoide não é o autoanticorpo de triagem da esclerose sistêmica.",
    tip: "Raynaud + mãos inchadas + pele espessa: peça FAN e capilaroscopia periungueal (esclerose sistêmica).",
    reference: 'Livro da Sociedade Brasileira de Reumatologia, 2ª edição, capítulo de Esclerose Sistêmica. Cartilha SBR – Esclerose Sistêmica.',
    tags: ['reumatologia']
  },
  {
    id: 'tp2024-28',
    module: 'Clínica Médica',
    text: 'Paciente evoluindo com perda de memória importante acompanhado de incontinência urinária e quedas frequentes concomitantes ao início do déficit cognitivo. Qual a causa mais provável destas alterações?',
    options: [
      '(A) Demência frontotemporal',
      '(B) Doença de Alzheimer',
      '(C) Demência vascular',
      '(D) Hidrocefalia de pressão normal'
    ],
    correctAnswer: 3,
    explanation: "A tríade de Hakim (alteração da marcha com quedas, incontinência urinária e declínio cognitivo) é a apresentação da hidrocefalia de pressão normal. O que chama a atenção é a marcha e a incontinência surgirem logo no começo, junto com o déficit cognitivo, o que não acontece nas demências degenerativas comuns.\n\nA imagem mostra ventrículos dilatados sem atrofia proporcional dos sulcos, e a punção lombar tem pressão normal. A melhora da marcha depois da retirada de líquor (tap test) ajuda a selecionar quem se beneficia da derivação ventriculoperitoneal; por ser uma causa tratável de demência, não pode passar despercebida.",
    commentary: "Demência frontotemporal (A): começa com alteração de comportamento ou de linguagem; distúrbio de marcha e incontinência precoces não são típicos.\n\nDoença de Alzheimer (B): a perda de memória domina por anos, e quedas e incontinência só aparecem em fases avançadas.\n\nDemência vascular (C): pode ter alteração de marcha e incontinência, mas em geral com história de AVC, fatores de risco e déficits focais; a tríade de instalação conjunta sugere mais hidrocefalia de pressão normal.",
    tip: "Marcha alterada + incontinência + demência (\"wacky, wobbly, wet\") = hidrocefalia de pressão normal, causa tratável.",
    reference: 'Normal Pressure Hidrocephalis - uptodate.com. Acta Neurochir Suppl Acta Neurochir Suppl. 2002:81:93-7. Neurosurgery. 2005;57(Suppl 3):S2-1-S2-52.',
    tags: ['neurologia', 'geriatria']
  },
  {
    id: 'tp2024-29',
    module: 'Clínica Médica',
    text: 'Homem de 70 anos deu entrada no PS devido a quadro de crise convulsiva, que aconteceu durante o sono. Tem antecedente de acidente vascular cerebral em território da artéria cerebral média direita, que aconteceu há 1 ano. Qual o diagnóstico mais provável e a conduta?',
    options: [
      '(A) Epilepsia. Como é o primeiro evento, não iniciar fármacos antiepilépticos.',
      '(B) Novo evento de acidente vascular cerebral. Acompanhar com exames de imagem.',
      '(C) Epilepsia. Como tem lesão estrutural prévia deve-se iniciar fármacos antiepilépticos.',
      '(D) Parassonia, distúrbio do sono não-REM, discutir medicamentos para aprofundar o sono do paciente.'
    ],
    correctAnswer: 2,
    explanation: "O paciente teve uma crise epiléptica não provocada, um ano depois de um AVC no território da artéria cerebral média direita. A cicatriz cortical do AVC é uma lesão estrutural remota que torna o cérebro propenso a novas crises.\n\nPela definição prática da ILAE, uma única crise não provocada já caracteriza epilepsia quando o risco de recorrência é alto (como na lesão estrutural prévia). Por isso, nesse cenário, indica-se iniciar fármaco antiepiléptico já após o primeiro evento. Crise que ocorre durante o sono também é fator que aumenta a chance de recorrência.",
    commentary: "Não iniciar fármaco por ser o primeiro evento (A): essa conduta vale para a primeira crise sem fatores de risco; com lesão estrutural prévia o risco de recorrência é alto e o tratamento é indicado.\n\nNovo AVC (B): o quadro foi de crise convulsiva, sem déficit focal novo descrito; a crise tardia pós-AVC decorre da cicatriz antiga, embora a imagem ajude a afastar lesão nova.\n\nParassonia (D): parassonias do sono não REM são comuns na infância e não produzem crise convulsiva; aprofundar o sono não é tratamento de epilepsia.",
    tip: "Primeira crise + lesão estrutural prévia (AVC antigo) = epilepsia: já inicie antiepiléptico.",
    reference: 'Classificação das epilepsias da ILAE: Relatório da Comissão de Classificação e Terminologia da ILAE. Epilepsia, 58(4):512-521, 2017 Doi:10.111/epi.13709',
    tags: ['neurologia']
  },
  {
    id: 'tp2024-30',
    module: 'Clínica Médica',
    text: 'Paciente masculino, 74 anos, chega ao Pronto Atendimento após um episódio de lipotimia. Família conta que vem apresentando emagrecimento há 6 meses de 8kg, com piora importante nos últimos 10 dias com inapetência, náuseas, alguns episódios de vômitos e febre há 2 dias. Está em tratamento para infecção urinária. Ao redor de um mês teve piora da dor abdominal e foi observado escurecimento da pele. Ao exame físico apresentase desidratado, com distensão abdominal, escurecimento da pele em dobras e da gengiva. Está em acompanhamento por carcinoma de próstata metastático e já realizou, há um ano, adrenalectomia à D, por metástase. Quanto às hipóteses diagnósticas, alterações laboratoriais esperadas nos exames a serem solicitados e conduta inicial, assinale a alternativa mais correta:',
    options: [
      '(A) Deve-se suspeitar de insuficiência adrenal primária devido à hiperpigmentação, dosar ACTH e Cortisol (apresentam-se baixos), fazer hidratação e prescrever prednisona.',
      '(B) A hiperpigmentação sugere insuficiência adrenal secundária, deve-se dosar eletrólitos (pode apresentar hiponatremia e hipoglicemia), e prescrever prednisona e fludrocortisona.',
      '(C) Deve-se suspeitar de insuficiência adrenal secundária, fazer teste de supressão com 1mg de dexametasona com dosagem de cortisol para descartar Doença de Cushing.',
      '(D) Deve-se suspeitar de insuficiência adrenal, dosar eletrólitos (pode apresentar hiponatremia e hipoglicemia), se possível dosar cortisol, ACTH, e imediatamente fazer hidratação e reposição de sódio e hidrocortisona EV.'
    ],
    correctAnswer: 3,
    explanation: "O paciente perdeu uma adrenal por metástase de câncer de próstata e agora tem emagrecimento, náuseas, vômitos, desidratação, lipotimia e escurecimento da pele em dobras e gengiva. A infiltração metastática da adrenal restante leva a insuficiência adrenal primária. A hiperpigmentação indica a origem adrenal: com cortisol baixo, a hipófise produz mais POMC, que gera ACTH e MSH.\n\nA infecção urinária precipitou uma crise adrenal. Os exames esperados são hiponatremia, hipercalemia e hipoglicemia, com cortisol baixo e ACTH alto, mas a coleta não pode atrasar o tratamento: soro fisiológico, glicose se necessário e hidrocortisona intravenosa (100 mg em bolus e depois 50 mg a cada 6 horas, ou dose equivalente). Depois da fase aguda, faz-se a reposição oral de glicocorticoide e fludrocortisona.",
    commentary: "ACTH baixo e prednisona (A): na insuficiência primária o ACTH está alto; e na crise adrenal o corticoide deve ser hidrocortisona venosa, não prednisona oral.\n\nHiperpigmentação na insuficiência secundária (B): na causa hipofisária o ACTH está baixo e não há hiperpigmentação; além disso, a fludrocortisona não é necessária na forma secundária, e a crise pede hidrocortisona venosa.\n\nTeste de supressão com dexametasona (C): investiga excesso de cortisol (síndrome de Cushing), o oposto do quadro apresentado.",
    tip: "Hiperpigmentação + hiponatremia + hipercalemia = Addison (ACTH alto). Crise adrenal: soro + hidrocortisona EV já.",
    reference: 'Vilar L. Endocrinologia Clínica. 7 ed. Rio de Janeiro, Editora: Guanabara Koogan, 2022. Bandeira F. Protocolos Clínicos em endocrinologia e diabetes. 3 ed. Rio de Janeiro, Editora guanabara Koogan, 2019',
    tags: ['endocrinologia', 'emergência']
  },
  {
    id: 'tp2024-31',
    module: 'Clínica Médica',
    text: 'A tuberculose é a segunda causa de morte por doenças infecciosas em todo o mundo, perdendo apenas para a AIDS. Não obstante, a incidência de tuberculose e resistência aos medicamentos está aumentando em algumas partes do mundo. A resistência bacilar ocorre devido ao uso inadequado de antimicrobianos. Segundo dados do Ministério da Saúde, 96% dos casos brasileiros de resistência bacilar são adquiridos por tratamentos irregulares e abandono de tratamento. Para o diagnóstico da tuberculose é utilizado o teste rápido molecular que, além de detectar o DNA do bacilo, também avalia a resistência a um antibiótico utilizado no tratamento, sendo este:',
    options: [
      '(A) Rifampicina',
      '(B) Isoniazida',
      '(C) Pirazinamida',
      '(D) Etambutol'
    ],
    correctAnswer: 0,
    explanation: "O teste rápido molecular para tuberculose (TRM-TB, plataforma GeneXpert) é um PCR em tempo real que, em poucas horas, identifica o DNA do complexo Mycobacterium tuberculosis e procura mutações na região do gene rpoB, associadas à resistência à rifampicina.\n\nA rifampicina é o principal fármaco do esquema básico, e a resistência a ela funciona como marcador de tuberculose multirresistente. Por isso o resultado \"rifampicina resistente\" exige encaminhamento para referência, cultura e teste de sensibilidade completo. O TRM-TB é o exame inicial de escolha para diagnóstico de tuberculose pulmonar no Brasil.",
    commentary: "Isoniazida (B): o TRM-TB convencional não avalia resistência a ela; a resistência à isoniazida é vista por cultura com teste de sensibilidade ou por testes moleculares específicos.\n\nPirazinamida (C): não é testada pelo TRM-TB; sua sensibilidade é avaliada em cultura.\n\nEtambutol (D): também não faz parte do que o TRM-TB detecta.",
    tip: "TRM-TB (GeneXpert): detecta o bacilo e a resistência à rifampicina (gene rpoB).",
    reference: 'Salomão, Reinaldo Infectologia: Bases clínicas e tratamento / Reinaldo Salomão - 1. ed. - Rio de Janeiro: Guanabara Koogan, 2017 (252-264). Brasil, Ministério da Saúde, Secretaria de Vigilância em Saúde. Departamento de Vigilância das Doenças Transmissíveis. Manual de recomendações para o controle de tuberculose no Brasil; 2ª edição; 2022.',
    tags: ['infectologia']
  },
  {
    id: 'tp2024-32',
    module: 'Clínica Médica',
    text: 'Homem de 32 anos procura a UBS, relatando ter apresentado primeira crise convulsiva há 1 mês, quando procurou o hospital. Na ocasião, foram descartadas causas agudas por meio de anamnese, exame físico, exames laboratoriais e de tomografia de crânio. Foi introduzido valproato em baixa dose (10mg/kg/dia). Evoluiu assintomático desde então. Exame físico sem alterações. A conduta adequada, de acordo com o protocolo do Ministério da Saúde, é:',
    options: [
      '(A) Otimizar dose de valproato e reavaliar em 3 meses.',
      '(B) Manter dose de valproato e reavaliar em 3 meses.',
      '(C) Descontinuar valproato e reavaliar em 3 meses.',
      '(D) Manter valproato e realizar ressonância magnética de encéfalo.'
    ],
    correctAnswer: 2,
    explanation: "O rapaz teve uma crise única, investigada sem causa aguda, tem exame físico normal e não há relato de lesão cerebral prévia, alteração no EEG nem crise durante o sono. Nessa situação, o risco de nova crise é relativamente baixo, e o protocolo do Ministério da Saúde não recomenda manter antiepiléptico após uma única crise sem fatores de risco.\n\nO valproato foi iniciado sem indicação clara e ainda traz efeitos adversos relevantes (ganho de peso, tremor, toxicidade hepática e teratogenicidade). A conduta é retirá-lo e reavaliar, orientando o paciente a procurar atendimento se houver nova crise; uma segunda crise não provocada define epilepsia e indica tratamento.",
    commentary: "Otimizar a dose de valproato (A): não há indicação de tratar, então aumentar a dose expõe o paciente a efeitos adversos sem benefício.\n\nManter a dose (B): manter o fármaco sem indicação também não é recomendado após primeira crise sem fatores de risco.\n\nManter valproato e pedir ressonância (D): a ressonância pode completar a investigação, mas não justifica manter o antiepiléptico em um paciente sem critérios para tratamento.",
    tip: "Primeira crise sem causa e sem fator de risco (EEG, lesão, exame, sono): não trate; espere a segunda.",
    reference: 'Tratado de Neurologia da Academia Brasileira de Neurologia, 2ª edição.',
    tags: ['neurologia']
  },
  {
    id: 'tp2024-33',
    module: 'Clínica Médica',
    text: 'Paciente jovem, 23 anos, sexo masculino, refere que há 8 meses iniciou quadro de petéquias em membros inferiores e gengivorragia, e há cerca de 2 meses sem manifestação hemorrágica até o momento, mesmo sem tratamento específico. Hemograma demonstra plaquetas = 65.000/mm3 de sangue. Mielograma com celularidade normal e discreto aumento do número de megacariócitos. Diagnóstico de púrpura trombocitopênica idiopática. Qual seria a conduta terapêutica mais adequada?',
    options: [
      '(A) Transfusão de Concentrado de Plaquetas e iniciar imediatamente prednisona na dose de 1mg/kg/dia.',
      '(B) Apenas acompanhar paciente, já que a contagem de plaquetas está acima de 20.000/mm3 e não tem sangramento.',
      '(C) Imunoglobulina humana na dose de 1g/kg/dia por 5 dias e manter prednisona 1mg/kg/dia e protetor gástrico.',
      '(D) Apenas o uso de prednisona na dose de 1mg/kg/dia e protetor gástrico.'
    ],
    correctAnswer: 1,
    explanation: "O paciente tem púrpura trombocitopênica imune com mais de 6 meses de evolução (forma crônica), plaquetas em 65.000/mm³ e nenhum sangramento há 2 meses. O objetivo do tratamento na PTI é evitar sangramento grave, e não normalizar a contagem de plaquetas.\n\nCom plaquetas acima de 20.000 a 30.000/mm³ e sem sangramento, a conduta é observar, com hemogramas periódicos e orientação para evitar AAS, anti-inflamatórios e outros fármacos que prejudicam a função plaquetária. O tratamento com corticoide, imunoglobulina ou outras linhas fica para quem sangra ou tem plaquetas muito baixas.",
    commentary: "Transfusão de plaquetas e prednisona (A): as plaquetas transfundidas são destruídas rapidamente pelos anticorpos; a transfusão é reservada para sangramento grave, e o corticoide não está indicado sem sangramento com essa contagem.\n\nImunoglobulina e prednisona (C): é tratamento para sangramento ou contagens muito baixas; a dose também está incorreta (o habitual é 1 g/kg por 1 a 2 dias, ou 0,4 g/kg por 5 dias).\n\nPrednisona isolada (D): expõe o paciente aos efeitos adversos do corticoide sem benefício, já que ele não sangra e tem plaquetas em nível seguro.",
    tip: "PTI: trate o paciente que sangra, não o número. Plaquetas acima de 20-30 mil sem sangramento: observar.",
    reference: 'Protocolo clínico e diretrizes terapêuticas da púrpura trombocitopênica idiopática. Brasil. Ministério da Saúde. Secretaria de Ciência, Tecnologia, Inovação e Insumos Estratégicos em Saúde. Departamento de Gestão e Incorporação de Tecnologias e Inovação em Saúde. Protocolo Clínico e Diretrizes Terapêuticas da Púrpura Trombocitopênica Idiopática [recurso eletrônico] / Ministério da Saúde, Secretaria de Ciência, Tecnologia, Inovação e Insumos Estratégicos em Saúde, Departamento de Gestão e Incorporação de Tecnologias e Inovação em Saúde. – Brasília: Ministério da Saúde, 2020.44 p',
    tags: ['hematologia']
  },
  {
    id: 'tp2024-34',
    module: 'Clínica Médica',
    text: 'O tratamento de doença pulmonar obstrutiva crônica envolve medidas preventivas, farmacológicas e não farmacológicas. Em relação à escolha das opções terapêuticas, assinale a alternativa correta:',
    options: [
      '(A) Medidas não farmacológicas como cessação de tabagismo, reabilitação pulmonar e vacinações melhoram apenas sintomas e não o prognóstico.',
      '(B) A combinação de duas classes de broncodilatadores de longa ação (antimuscarínicos e beta-agonistas) não é indicada, por aumentar o risco cardiovascular.',
      '(C) Um paciente com uma internação recente por exacerbação da DPOC e dispneia MRC 1 pode utilizar medicações inalatórias somente nas crises.',
      '(D) O grau de dispneia e o número de exacerbações no último ano norteiam as decisões terapêuticas.'
    ],
    correctAnswer: 3,
    explanation: "Na estratégia GOLD, o tratamento inicial da DPOC estável é escolhido pela combinação de dois critérios: a intensidade dos sintomas (dispneia pelo mMRC ou escore CAT) e a história de exacerbações no último ano. Assim se formam os grupos A, B e E.\n\nQuem tem duas ou mais exacerbações moderadas, ou uma que levou à internação, é do grupo E e recebe LAMA mais LABA, acrescentando corticoide inalatório se os eosinófilos forem altos. Os grupos A e B dependem dos sintomas: broncodilatador para o A e dupla broncodilatação de longa ação para o B. Os eosinófilos no sangue também ajudam a decidir o uso de corticoide inalatório.",
    commentary: "Medidas não farmacológicas só aliviam sintomas (A): parar de fumar e a oxigenoterapia prolongada (quando indicada) reduzem mortalidade, e vacinas e reabilitação diminuem exacerbações e internações; há impacto no prognóstico.\n\nDupla broncodilatação contraindicada (B): LAMA mais LABA é o esquema recomendado para os grupos B e E, sem aumento relevante de risco cardiovascular.\n\nMedicação só nas crises após internação (C): uma internação por exacerbação já coloca o paciente no grupo E, que precisa de tratamento de manutenção com broncodilatadores de longa ação, mesmo com dispneia leve.",
    tip: "GOLD: sintomas (mMRC/CAT) + exacerbações no último ano definem A, B ou E. Uma internação já é grupo E.",
    reference: 'Global Strategy for the Diagnosis, Management, and Prevention of Chronic Obstructive Pulmonary Disease. 2023.',
    tags: ['pneumologia']
  },
  {
    id: 'tp2024-35',
    module: 'Clínica Médica',
    text: 'A sífilis terciária é um importante diagnóstico diferencial das síndromes demenciais no Brasil. Assinale a alternativa correta quanto à interpretação dos exames diagnósticos:',
    options: [
      '(A) VDRL positivo e FTAbs negativo sempre indicam cicatriz sorológica e não há necessidade de outro teste treponêmico para confirmação do resultado.',
      '(B) Somente valores de VDRL acima de 1/64 devem ser considerados para o diagnóstico de sífilis, devendo ser solicitado também o FTA-ABs nestes casos.',
      '(C) VDRL reagente e FTA-ABs reagente indicam sífilis ativa, não necessitando de outros testes para confirmação diagnóstica.',
      '(D) VDRL negativo e FTA-ABs positivos descartam o diagnóstico de sífilis e não há necessidade de solicitar outro exame confirmatório.'
    ],
    correctAnswer: 2,
    explanation: "O diagnóstico de sífilis usa dois tipos de teste. O não treponêmico (VDRL) detecta anticorpos contra lipídios liberados pela lesão celular, é quantitativo e serve para acompanhar o tratamento, já que os títulos caem com a cura. O treponêmico (FTA-ABs, testes rápidos) detecta anticorpos contra o Treponema pallidum e costuma ficar positivo pelo resto da vida.\n\nQuando os dois são reagentes, o caso é considerado sífilis e, se não houver registro de tratamento adequado anterior, deve ser tratado. Na neurossífilis, que entra no diagnóstico diferencial das demências, a confirmação exige ainda a análise do líquor (VDRL no líquor, celularidade e proteínas).",
    commentary: "VDRL positivo e FTA-ABs negativo como cicatriz (A): um teste não treponêmico reagente com treponêmico não reagente sugere falso positivo do VDRL; cicatriz sorológica é o padrão oposto (treponêmico positivo e VDRL baixo ou negativo).\n\nSó VDRL acima de 1/64 (B): não existe esse ponto de corte; qualquer título reagente deve ser confirmado com teste treponêmico, e títulos baixos ocorrem na sífilis latente e tardia.\n\nTreponêmico reagente com VDRL não reagente descartando sífilis (D): esse padrão pode ser sífilis muito recente, sífilis tardia ou tratada, ou falso positivo; recomenda-se um segundo teste treponêmico de outra metodologia, e não se descarta a doença.",
    tip: "Sífilis: VDRL acompanha o tratamento; o treponêmico fica positivo para sempre. Os dois reagentes sem tratamento prévio: tratar.",
    reference: 'https://www.saude.sp.gov.br/resources/crt/eventos/transmissao-vertical-da-sifilis/2-webinar10032021/diagnosticolaboratorialdasifilis_edilene_10032021.p df',
    tags: ['infectologia']
  },
  {
    id: 'tp2024-36',
    module: 'Clínica Médica',
    text: 'Mulher, 37 anos, apresenta obesidade centrípeta, depósitos de gordura na região da coluna cervicotorácica (“giba de búfalo”) e na região supraclavicular, assim como rosto arredondado ("face de lua cheia"). Outros achados clínicos relevantes foram pele fina, estrias violáceas no abdômen e hipertensão arterial. Os exames laboratoriais revelaram cortisol urinário = 507-773µg/24h (normal = 30 a 300µg/24h), e uma tomografia computadorizada do abdome indicou hiperplasia macronodular bilateral das adrenais, com dois nódulos grandes, proeminentes, bilaterais, de 3 e 3,5cm no maior diâmetro. O estudo anatomopatológico demonstrou que os nódulos eram compostos por células claras que apresentavam monotonia nuclear, achado típico de células do córtex adrenal. A hipótese diagnóstica mais condizente é:',
    options: [
      '(A) Tumor hipofisário, o qual induz à maior liberação de ACTH pela adenoipófise, o que leva à hiperplasia das adrenais e, consequentemente, a uma baixa concentração plasmática de cortisol.',
      '(B) Doença de Addison, em que se observa uma hipofunção adrenocortical e que, no paciente em questão, trata-se de uma endocrinopatia de etiologia autoimune com baixa produção mineralocorticoide.',
      '(C) Hiperaldosteronismo primário, uma condição associada ao crescimento de nódulos adrenocorticais e que leva à retenção de sódio, o que explica o estabelecimento de hipertensão arterial na paciente.',
      '(D) Síndrome de Cushing, caracterizada pela hiperfunção adrenocortical, nesse caso resultante da produção excessiva de cortisol associada ao desenvolvimento de nódulos adrenais.'
    ],
    correctAnswer: 3,
    explanation: "Obesidade centrípeta, giba de búfalo, preenchimento supraclavicular, face de lua cheia, pele fina, estrias violáceas e hipertensão compõem o quadro clínico do hipercortisolismo. O cortisol livre urinário bem acima do limite superior confirma a produção excessiva do hormônio: é a síndrome de Cushing.\n\nA causa aqui está na própria adrenal: a hiperplasia macronodular bilateral, com nódulos de células corticais, produz cortisol de forma autônoma, sem depender do ACTH (Cushing ACTH-independente). Na investigação, o cortisol não suprime com dexametasona e o ACTH plasmático tende a ficar baixo, o que separa essa forma das causas hipofisárias e ectópicas.",
    commentary: "Tumor hipofisário (A): o adenoma produtor de ACTH (doença de Cushing) estimula as adrenais e eleva o cortisol, não o reduz; além disso, causa hiperplasia difusa, e a paciente tem cortisol urinário alto.\n\nDoença de Addison (B): é o oposto, com falta de cortisol e aldosterona; cursa com fraqueza, hipotensão, hiperpigmentação e perda de peso, nada parecido com o quadro descrito.\n\nHiperaldosteronismo primário (C): explica hipertensão (em geral com hipocalemia), mas não produz o fenótipo cushingoide nem eleva o cortisol urinário.",
    tip: "Fenótipo cushingoide + cortisol urinário alto + nódulos adrenais bilaterais = Cushing ACTH-independente.",
    reference: 'PEREIRA, M.A.A.; ARAÚJO, R.S.; BISI, H. Síndrome de Cushing Associada à Hiperplasia Macronodular das Adrenais. Apresentação de um Caso e Revisão da Literatura. Arq Bras Endocrinol Metab, 45 (6): 619-627, 2001. KRONENBERG, H.M.; MELMED, S.; POLONSKY, K.S; LARSEN, P. R. Williams Tratado de Endocrinologia. 11. ed. Rio de Janeiro: Elsevier, 2010. 1532 p. MOLINA, P.E. Fisiologia Endócrina. 5. ed. São Paulo: Mc Graw Hill Brasil, 2021. 320 p.',
    tags: ['endocrinologia']
  },
  {
    id: 'tp2024-37',
    module: 'Clínica Médica',
    text: 'Hipertensão pulmonar é uma condição hemodinâmica grave com múltiplas causas, que pode se apresentar como dispneia aos esforços, dor precordial, tontura e/ou síncope. Diante da suspeita de hipertensão pulmonar, diversos são os exames que podem ser utilizados para a investigação. Dentre os citados abaixo, qual o principal exame utilizado para avaliação inicial de uma suspeita de hipertensão pulmonar?',
    options: [
      '(A) Radiografia de Tórax',
      '(B) Eletrocardiograma',
      '(C) Ecocardiografia',
      '(D) Espirometria'
    ],
    correctAnswer: 2,
    explanation: "Diante da suspeita de hipertensão pulmonar (dispneia aos esforços, dor torácica, tontura ou síncope), o primeiro exame recomendado pelas diretrizes é o ecocardiograma transtorácico. Ele é não invasivo, amplamente disponível e estima a probabilidade de hipertensão pulmonar pela velocidade do refluxo tricúspide e por sinais indiretos, como dilatação e disfunção do ventrículo direito e aumento do átrio direito. Também ajuda a achar a causa, como doença do coração esquerdo ou cardiopatia congênita.\n\nO diagnóstico definitivo, porém, é feito pelo cateterismo cardíaco direito: pela diretriz ESC/ERS de 2022, pressão média da artéria pulmonar acima de 20 mmHg.",
    commentary: "Radiografia de tórax (A): pode mostrar artérias pulmonares centrais aumentadas e doença pulmonar associada, mas é pouco sensível e pode ser normal nas fases iniciais.\n\nEletrocardiograma (B): sinais de sobrecarga direita reforçam a suspeita, mas um traçado normal não afasta a doença; não serve para estimar a pressão pulmonar.\n\nEspirometria (D): faz parte da investigação etiológica (procura doença pulmonar como causa), mas não avalia a hemodinâmica pulmonar.",
    tip: "Suspeitou de hipertensão pulmonar: ecocardiograma primeiro; quem confirma é o cateterismo direito.",
    reference: '2022 ESC/ERS Guidelines for the diagnosis and treatment of pulmonary hypertension Developed by the task force for the diagnosis and treatment of pulmonary hypertension of the European Society of Cardiology (ESC) and the European Respiratory Society (ERS). Endorsed by the International Society for Heart and Lung Transplantation (ISHLT) and the European Reference Network on rare respiratory diseases (ERN-LUNG). Práticas Pneumológicas. 1ed.Rio de Janeiro: Di Livros Editora, 2022. Sociedade Brasileira de Pneumologia e Tisiologia. Classificação e avaliação diagnóstica da hipertensão pulmonar. J Bras Pneumol. 2005;31(2 Suppl):S1-S8.',
    tags: ['cardiologia', 'pneumologia']
  },
  {
    id: 'tp2024-38',
    module: 'Clínica Médica',
    text: 'Paciente masculino, 42 anos, vem ao consultório com queixa de fraqueza, queda de cabelo e indisposição. Apresenta-se ao exame descorado ++/4 com queilite angular. Refere, quando indagado, que os hábitos alimentares mudaram e recentemente adquiriu gosto por grãos crus, em particular arroz. Refere ainda ter recentemente iniciado sertralina por diagnóstico de depressão, e tônicos capilares sob recomendação do dermatologista para controle da queda de cabelo. Nega dores osteomusculares. Quando questionado mais a fundo sobre a mudança alimentar, refere que observou sensível perda de peso, de cerca de 12kg no período (peso atual 74kg). Exames resultam em hemoglobina de 8,2g/dL, leucócitos de 11300cel/mm³ com diferencial preservado e plaquetas de 560.000/mm³. A anemia apresenta VCM de 69fL (VR 80-100fL), HCM 20pg/célula (VR 27-35pg/célula), RDW de 17,5% (VR 11-15%). O diagnóstico mais provável e os respectivos exames fundamentais a serem solicitados são:',
    options: [
      '(A) Anemia ferropriva; ferritina e colonoscopia.',
      '(B) Doença mieloproliferativa crônica; biópsia de medula óssea.',
      '(C) Anemia da inflamação; PCR, VHS, FAN.',
      '(D) Anemia ferropriva; ferro sérico, ferritina, saturação de transferrina, sangue oculto nas fezes.'
    ],
    correctAnswer: 0,
    explanation: "Fraqueza, queda de cabelo, queilite angular e vontade de comer grãos crus (pica, aqui amilofagia) somados a anemia microcítica e hipocrômica com RDW alto e plaquetose reativa formam o retrato da anemia ferropriva.\n\nQuando a suspeita clínica é tão alta, a ferritina baixa sozinha basta para confirmar a falta de ferro; o perfil completo (ferro sérico, transferrina, saturação) é útil sobretudo quando há inflamação associada. O ponto principal da questão é a causa: homem adulto, sem sangramento visível e com perda de 12 kg tem ferropenia por perda digestiva oculta até prova em contrário, e o câncer colorretal precisa ser afastado com colonoscopia (com endoscopia digestiva alta, em geral, na mesma investigação).",
    commentary: "Doença mieloproliferativa crônica (B): a plaquetose de 560 mil é reativa à ferropenia; não há esplenomegalia nem outras alterações que justifiquem biópsia de medula.\n\nAnemia da inflamação (C): costuma ser normocítica ou levemente microcítica, com RDW pouco alterado e ferritina normal ou alta; o quadro clínico aponta para falta de ferro.\n\nPerfil de ferro com sangue oculto (D): o diagnóstico está certo, mas a pesquisa de sangue oculto é exame de rastreamento; num paciente com anemia ferropriva e emagrecimento, um resultado negativo não afasta tumor, e a colonoscopia é obrigatória de qualquer forma.",
    tip: "Homem ou mulher pós-menopausa com anemia ferropriva sem causa aparente: ferritina e endoscopia (colonoscopia + EDA).",
    reference: 'Auerbach, M. and Adamson, J.W. (2016), How we diagnose and treat iron deficiency anemia. Am. J. Hematol., 91: 31- 38. https://doi.org/10.1002/ajh.24201 Douglas K Rex et al. Colorectal Cancer Screening: Recommendations for Physicians and Patients From the U.S. Multi-Society Task Force on Colorectal Cancer. June 06, 2017DOI:https://doi.org/10.1053/j.gastro.2017.05.013',
    tags: ['hematologia', 'gastroenterologia']
  },
  {
    id: 'tp2024-39',
    module: 'Clínica Médica',
    text: 'Mulher de 63 anos, natural e procedente de Manaus, apresenta cansaço, dor no corpo e discreta icterícia. Trabalha em serviços domésticos. Internou em hospital local para investigação diagnóstica. Ao exame clínico, foi observado discreto aumento do fígado (1,5cm do rebordo costal direito), de consistência endurecida; icterícia ++/4. Em análise laboratorial, foi constatado TGO de 200U/L (VR: inferior a 34U/L), TGP de 130U/L (VR: Mulheres: 10-37U/L), anti-HCV (+) com carga viral de 300.000UI. Desta forma:',
    options: [
      '(A) Deve ser solicitado exame de genotipagem, visando escolher o melhor tratamento entre os DAAs.',
      '(B) Devemos iniciar o tratamento com as drogas antivirais de ação direta (DAAs), não havendo necessidade de outros exames.',
      '(C) Devemos solicitar elastografia hepática ou biópsia para avaliar a necessidade de tratamento no momento.',
      '(D) A genotipagem e a elastografia são fundamentais no prétratamento e devem ser realizadas.'
    ],
    correctAnswer: 1,
    explanation: "A paciente tem hepatite C com viremia detectável (anti-HCV reagente e carga viral positiva). Pelas recomendações atuais do Ministério da Saúde, toda pessoa com HCV-RNA detectável tem indicação de tratamento, independentemente do grau de fibrose ou do genótipo.\n\nCom os antivirais de ação direta pangenotípicos disponíveis no SUS (como sofosbuvir associado a velpatasvir), a genotipagem deixou de ser necessária para escolher o esquema, e a biópsia não é exigida para indicar o tratamento. O esquema típico dura 12 semanas, por via oral, com altas taxas de cura e poucos efeitos adversos. A avaliação de fibrose por escores simples (APRI, FIB-4) continua útil para identificar cirrose, que muda a duração do tratamento e exige rastreamento de carcinoma hepatocelular depois da cura.",
    commentary: "Genotipagem para escolher o DAA (A): com os esquemas pangenotípicos, o genótipo não muda a escolha do tratamento na maioria dos pacientes.\n\nElastografia ou biópsia para decidir se trata (C): o grau de fibrose não define mais se a pessoa deve ser tratada; todos com viremia são tratados.\n\nGenotipagem e elastografia obrigatórias (D): nenhum dos dois é pré-requisito para iniciar o tratamento; exigir esses exames só atrasa o acesso.",
    tip: "Hepatite C com carga viral detectável = tratar todos com DAA pangenotípico; genótipo e biópsia não são pré-requisito.",
    reference: 'Nota Técnica no. 30/2023 - CGAHV/DVIHV/SVSA/MSMinistério da Saúde -Secretaria de Vigilância em Saúde e Ambiente. Departamento de HIV/Aids, hepatites virais, tuberculose e infecções sexualmente transmissíveis – MS',
    tags: ['hepatologia', 'infectologia']
  },
  {
    id: 'tp2024-40',
    module: 'Clínica Médica',
    text: 'Homem, 72 anos, diabético, hipertenso e dislipidêmico, com histórico de infarto do miocárdio há 6 meses, doença arterial periférica sintomática e doença renal crônica (ClCr estimado de 53mL/min/1,73m² – Valor de referência do clearance de creatinina: 75 a 115mL/min/1,73m²). Apresentou rabdomiólise em uso de estatinas. Qual estatina deve ser recomendada no tratamento de dislipidemia em pacientes com disfunção renal?',
    options: [
      '(A) Pravastatina',
      '(B) Atorvastatina',
      '(C) Sinvastatina',
      '(D) Rosuvastatina'
    ],
    correctAnswer: 0,
    explanation: "O paciente tem risco cardiovascular muito alto (infarto recente, doença arterial periférica, diabetes e doença renal crônica) e, portanto, precisa de hipolipemiante, mas já teve rabdomiólise com estatina. Nessa situação, prefere-se uma estatina com menor potencial de toxicidade muscular e de interação medicamentosa.\n\nA pravastatina é hidrofílica e não é metabolizada pelo citocromo CYP3A4, o que reduz interações que elevam o nível do fármaco e o risco de miopatia. Com clearance em torno de 53 mL/min, pode ser usada sem ajuste, iniciando em dose baixa e com monitoramento de sintomas musculares e CK. Como é uma estatina de menor potência, a meta de LDL costuma exigir associação com ezetimiba.",
    commentary: "Atorvastatina (B): quase não depende do rim e não exige ajuste na DRC, mas é metabolizada pelo CYP3A4 e é de maior potência, o que aumenta o risco muscular em quem já teve rabdomiólise.\n\nSinvastatina (C): é a mais associada a miopatia e rabdomiólise, sobretudo em doses altas e com interações pelo CYP3A4; deve ser evitada nesse paciente.\n\nRosuvastatina (D): é de alta potência, tem eliminação renal relevante e exige redução de dose na disfunção renal avançada; após rabdomiólise, não é a primeira escolha.",
    tip: "Estatina após miopatia: hidrofílica e fora do CYP3A4 (pravastatina), dose baixa, CK de controle e ezetimiba se preciso.",
    reference: 'Dislipidemia na Prática Clínica. Renato JORGE ALVES e Raul Dias Santos. Editora dos Editores; 1ª edição (19 dezembro 2022). Ferreira SRC. Estatinas na doença renal crônica. Arquivos Brasileiros de Cardiologia - Volume 85, Suplemento V, outubro/2005.',
    tags: ['cardiologia', 'nefrologia']
  },
  {
    id: 'tp2023-21',
    module: 'Clínica Médica',
    text: 'A insuficiência cardíaca (IC) é uma síndrome na qual o coração é incapaz de bombear sangue de forma a atender às necessidades metabólicas tissulares e pode ser causada por alterações estruturais ou funcionais cardíacas. Determine a afirmativa correta sobre o tratamento da IC:',
    options: [
      '(A) A ingesta de bebidas alcoólicas em pequena quantidade em pacientes com IC crônica estável e de etiologias não relacionadas com uso de álcool pode ser estimulada devido ao comprovado fator protetor miocárdico.',
      '(B) Os inibidores da fosfodiesterase tipo 5 (sildenafila e outros) não devem ser prescritos aos portadores de IC crônica compensada para o tratamento da disfunção erétil, levando em consideração o seu risco específico neste grupo.',
      '(C) O treinamento físico regular é seguro, aumenta a tolerância aos exercícios, melhora a qualidade de vida e reduz hospitalizações por IC.',
      '(D) Há evidências de que o consumo excessivo de sódio e o de fluidos pode acarretar um aumento da volemia, mas não constitui fator de descompensação e risco de hospitalização em pacientes com IC crônica sintomática.'
    ],
    correctAnswer: 2,
    explanation: "A reabilitação com exercício físico regular é recomendada para pacientes com insuficiência cardíaca crônica estável. Ela é segura quando bem prescrita, melhora a capacidade funcional e a qualidade de vida e diminui as internações por descompensação.\n\nO treino deve ser individualizado (de preferência após teste cardiopulmonar ou ergométrico), combinando atividade aeróbica e de resistência, e faz parte das medidas não farmacológicas ao lado do controle de sal e líquidos, da vacinação e da educação do paciente.",
    commentary: "Álcool em pequena quantidade como protetor (A): não há proteção miocárdica comprovada; em IC de outra etiologia, a liberação de pequenas doses é discutível e deve ser decidida em conjunto, nunca estimulada.\n\nInibidores da fosfodiesterase-5 proibidos (B): sildenafila e similares costumam ser seguros e eficazes para disfunção erétil na IC compensada; a contraindicação absoluta é o uso associado a nitratos.\n\nSódio e líquidos sem papel na descompensação (D): a ingestão excessiva de sal e água é uma causa frequente de descompensação e internação na IC sintomática.",
    tip: "IC crônica estável: exercício regular é seguro, melhora a qualidade de vida e reduz internações.",
    reference: 'Diretriz Brasileira de Insuficiência Cardíaca Crônica e Aguda. Arq Bras Cardiol. 2018; 111(3):436-539.',
    tags: ['cardiologia']
  },
  {
    id: 'tp2023-22',
    module: 'Clínica Médica',
    text: 'Mulher, 54 anos, faz acompanhamento na Unidade Básica de Saúde há seis anos por hipertensão arterial, em uso de losartana 100mg/dia. Seu peso é normal, não fuma e pratica caminhada de 40 minutos durante cinco dias da semana. Os exames de laboratório solicitados, de acordo com as Diretrizes Brasileiras de Hipertensão Arterial, estão normais. Porém, nos últimos três meses, os níveis pressóricos estão em elevação. As duas últimas medidas chegaram a 160x100mmHg. O médico optou então por acrescentar uma segunda droga ao esquema terapêutico. Dos grupos farmacológicos listados e disponíveis na Unidade de Saúde, qual o mais apropriado?',
    options: [
      '(A) Diuréticos tiazídicos (hidroclorotiazida)',
      '(B) Alfa-agonistas de ação central (metildopa)',
      '(C) Inibidores da Enzima Conversora da Angiotensina (captopril)',
      '(D) Betabloqueadores (atenolol)'
    ],
    correctAnswer: 0,
    explanation: "Hipertensa em uso de BRA (losartana) com pressão de 160x100 mmHg, já com hábitos saudáveis: é preciso associar um segundo fármaco. As Diretrizes Brasileiras de Hipertensão (2020) consideram preferencial combinar um bloqueador do sistema renina-angiotensina (IECA ou BRA) com um antagonista de cálcio di-hidropiridínico ou com um diurético tiazídico ou similar.\n\nComo o bloqueador de canal de cálcio não está entre as opções, a escolha é a hidroclorotiazida, que tem efeito sinérgico com a losartana e ainda reduz a tendência à hipercalemia do BRA.",
    commentary: "Metildopa (B): sua principal indicação é a hipertensão na gestação; fora dela não é fármaco de primeira linha, por efeitos adversos como sedação.\n\nCaptopril (C): somar IECA a um BRA é duplo bloqueio do sistema renina-angiotensina, contraindicado porque aumenta hipercalemia e lesão renal sem reduzir eventos cardiovasculares.\n\nAtenolol (D): os betabloqueadores ficam reservados para situações específicas, como insuficiência cardíaca, pós-infarto, angina e controle de frequência cardíaca.",
    tip: "IECA/BRA + segundo fármaco: tiazídico ou bloqueador de cálcio. Nunca IECA + BRA.",
    reference: 'Diretrizes Brasileiras de Hipertensão Arterial – 2020. Arq Bras Cardiol. 2021; 116(3):516-658',
    tags: ['cardiologia', 'hipertensão']
  },
  {
    id: 'tp2023-23',
    module: 'Clínica Médica',
    text: 'Paciente feminina de 25 anos, apresentando quadro de gengivorragia e hiperplasia gengival há 20 dias, hoje deu entrada no Pronto-Socorro com metrorragia e febre. Hemograma: Hb 7,6g/dL (VN 12 a 16g/dL); Ht 22% (VN 36 a 50%); leucometria 18.000/mm3 (VN 6.000 a 10.000/mm3) - neutrófilos 900; linfócitos 1.000; eosinófilos 100 e plaquetas 89.000/mm3 (VN 150.000 a 300.000/mm3). Obs: presença de células com característica presença de blastos (16.000 células imaturas) com intensa granulação. Qual o provável diagnóstico?',
    options: [
      '(A) Púrpura trombocitopênica imune',
      '(B) Leucemia crônica',
      '(C) Reação leucemoide',
      '(D) Leucemia aguda'
    ],
    correctAnswer: 3,
    explanation: "Mulher jovem com sangramento gengival, hiperplasia de gengiva, metrorragia e febre, instalados em poucas semanas, e um hemograma com anemia, plaquetopenia, neutropenia e grande número de blastos no sangue periférico. Esse conjunto define leucemia aguda: a medula é tomada por células imaturas que não amadurecem, e faltam as células normais (daí anemia, sangramento e infecção).\n\nA granulação abundante sugere linhagem mieloide, e a hiperplasia gengival é mais típica das formas mielomonocítica e monocítica. A confirmação é feita por mielograma com imunofenotipagem e citogenética. Se houver suspeita de leucemia promielocítica aguda, que cursa com coagulação intravascular disseminada, o ácido transretinoico deve começar já na suspeita.",
    commentary: "Púrpura trombocitopênica imune (A): reduz só as plaquetas; não há anemia importante, neutropenia nem blastos circulantes.\n\nLeucemia crônica (B): tem curso insidioso e predomínio de células maduras (na mieloide crônica, todas as fases da maturação; na linfoide crônica, linfócitos maduros em idosos), sem tantos blastos.\n\nReação leucemoide (C): é leucocitose reacional, geralmente a infecção, com neutrófilos maduros e desvio à esquerda, sem citopenias e sem domínio de blastos.",
    tip: "Citopenias + blastos no sangue periférico + quadro de semanas = leucemia aguda até prova em contrário.",
    reference: 'ZAGO, Marco Antônio; FALCÃO, Roberto Passetto; PASQUINI, Ricardo, Tratado de hematologia, São Paulo.Atheneu,2013. 2- HOFFBRAND, A.Victor; MOSS,P.A.H. Fundamento em Hematologia.6.ed,Porto Alegre:Artmed,2015.',
    tags: ['hematologia', 'oncologia']
  },
  {
    id: 'tp2023-24',
    module: 'Clínica Médica',
    text: 'Paciente feminina, 25 anos, utilizando contraceptivo oral, deu entrada no Pronto-Socorro há 3 dias com diagnóstico de Trombose Venosa Profunda, quando iniciou uso de heparina. No exame laboratorial de hoje a contagem de plaquetas está em 85.000/mm3, repetidas e confirmadas (VN 150.000 a 300.000/mm3). A dosagem de plaquetas ao início do tratamento era de 180.000/mm3. Qual o provável diagnóstico?',
    options: [
      '(A) Variação normal do laboratório.',
      '(B) Trombocitopenia induzida por heparina.',
      '(C) Consumo de plaquetas pela trombose venosa.',
      '(D) Consumo de plaquetas na formação do coágulo.'
    ],
    correctAnswer: 1,
    explanation: "Queda das plaquetas de 180 mil para 85 mil (mais de 50%) depois de iniciar heparina, sem outra causa evidente, deve levantar a suspeita de trombocitopenia induzida por heparina (TIH). A forma que importa é a imune: anticorpos contra o complexo heparina-fator plaquetário 4 ativam as plaquetas, que caem e, paradoxalmente, geram trombose arterial e venosa.\n\nA suspeita se organiza pelo escore 4T (grau da queda, momento, trombose e outras causas). Diante dela, suspende-se toda heparina, inclusive a de lavagem de cateteres, e troca-se por anticoagulante não heparínico (argatrobana, fondaparinux ou anticoagulante oral direto), além de pedir anticorpos anti-PF4. Não se deve transfundir plaquetas de rotina.",
    commentary: "Variação do laboratório (A): a contagem foi repetida e confirmada, e uma queda de mais da metade do valor basal não é variação normal.\n\nConsumo pela trombose venosa (C): a TVP isolada não consome plaquetas a ponto de derrubá-las desse modo; isso exigiria um processo como a coagulação intravascular disseminada.\n\nConsumo na formação do coágulo (D): é a mesma ideia da anterior; a formação do trombo não explica uma plaquetopenia dessa intensidade.",
    tip: "Plaquetas caem mais de 50% após heparina: suspenda toda heparina e troque por anticoagulante não heparínico.",
    reference: 'Sandes, Alex F. Diagnósticos em hematologia 2a ed. Disponível em: Minha Biblioteca, (2nd edição). Editora Manole, 2020.',
    tags: ['hematologia', 'angiologia']
  },
  {
    id: 'tp2023-25',
    module: 'Clínica Médica',
    text: 'Paciente, 25 anos, sexo feminino, vem em consulta com queixa de dor abdominal em hipogástrio, indisposição, diminuição do apetite e disúria há 2 dias. Nega febre e diarreia, nega outras patologias prévias ou comorbidades. Ao exame físico, apresenta-se em bom estado geral, afebril. Dados vitais: FC 70bpm, PA 120x70mmHg. Abdome flácido, doloroso à palpação profunda em hipogástrico, descompressão brusca negativa, ruídos hidroaéreos presentes e punho-percussão lombar negativa. Sem alterações em outros aspectos do exame físico. Realizados exames: hemograma normal; Elementos Anormais do Sedimento (urina): leucócitos 150.000/campo (VN até 10.000/campo); hemácias 5.000/campo (VN até 5.000/campo), nitrito positivo e bactérias presentes (urocultura em andamento). Determine a conduta:',
    options: [
      '(A) Solicitar ultrassonografia de abdome total para descartar lesão renal aguda.',
      '(B) Tratamento ambulatorial com ciprofloxacina 500mg 12/12h.',
      '(C) Tratamento ambulatorial com nitrofurantoína 100mg 6/6h.',
      '(D) Tratamento hospitalar com ceftriaxone 2g endovenoso 1 vez ao dia, por 7 dias.'
    ],
    correctAnswer: 2,
    explanation: "Mulher jovem, sem comorbidades, afebril, com disúria e dor suprapúbica, punho-percussão negativa e urina com leucocitúria, nitrito positivo e bactérias: cistite aguda não complicada. O diagnóstico é clínico e não exige exame de imagem.\n\nO tratamento é ambulatorial com um antibiótico de primeira linha que se concentra na bexiga e preserva os de amplo espectro: nitrofurantoína 100 mg de 6 em 6 horas por 5 dias, ou fosfomicina em dose única como alternativa. Hidratação e analgesia ajudam no alívio dos sintomas.",
    commentary: "Ultrassonografia de abdome (A): não há sinal de pielonefrite, obstrução, gestação ou outro fator de complicação, nem suspeita de lesão renal; a imagem não muda a conduta.\n\nCiprofloxacino (B): as quinolonas não são primeira escolha na cistite simples, por efeitos adversos e para evitar resistência; ficam para pielonefrite e situações específicas.\n\nCeftriaxona hospitalar (D): internação e antibiótico venoso são para pielonefrite grave, sepse ou impossibilidade de tratar por via oral, o que não é o caso.",
    tip: "Cistite simples em mulher jovem: nitrofurantoína 5 dias (ou fosfomicina dose única), sem imagem.",
    reference: 'KNOBEL, E. Condutas no paciente grave. São Paulo: Editora Atheneu, 2016. VELASCO, I, T, Saraiva et al. Medicina de Emergência: abordagem prática. Manole, 16º ed, 2022',
    tags: ['infectologia', 'urologia']
  },
  {
    id: 'tp2023-26',
    module: 'Clínica Médica',
    text: 'Homem de 25 anos, soropositivo para HIV, em uso de terapia antirretroviral há cerca de dois anos, com carga viral indetectável e CD4 de 820 células, procura o ambulatório de infectologia para relatar que há cerca de 4 dias notou o aparecimento de manchas arredondadas, numulares, de coloração avermelhada por todo o corpo. Refere que essas manchas não possuíam características pruriginosas e que notou ainda a presença de alguns pequenos nódulos no pescoço nessa mesma época. Considerando apenas o que foi até aqui relatado, qual das hipóteses pode estar possivelmente relacionada ao diagnóstico clínico dessa doença?',
    options: [
      '(A) Meningite meningocócica',
      '(B) Sífilis secundária',
      '(C) Reação cutânea a medicações',
      '(D) Papilomavírus cutâneo humano'
    ],
    correctAnswer: 1,
    explanation: "Manchas eritematosas arredondadas, numulares, não pruriginosas, espalhadas pelo corpo, junto com linfonodos cervicais aumentados, sugerem sífilis secundária: a roséola sifilítica com micropoliadenopatia. Também podem aparecer lesões em palmas e plantas, condiloma plano, placas mucosas e alopecia em clareira.\n\nA sífilis é muito frequente em pessoas que vivem com HIV, mesmo com boa imunidade, e o quadro é muitas vezes confundido com alergia. O diagnóstico é feito com teste treponêmico e não treponêmico (VDRL), e o tratamento da sífilis recente é penicilina benzatina 2,4 milhões UI IM em dose única, com testagem e tratamento das parcerias.",
    commentary: "Meningite meningocócica (A): cursa com febre alta, toxemia e lesões petequiais ou purpúricas de evolução rápida, não com manchas assintomáticas e bom estado geral.\n\nReação a medicações (C): o paciente usa a mesma TARV há dois anos, sem fármaco novo, e as farmacodermias costumam coçar.\n\nHPV cutâneo (D): causa verrugas, e não máculas eritematosas disseminadas com linfonodos.",
    tip: "Manchas avermelhadas que não coçam + linfonodos + até palmas e plantas = sífilis secundária: peça VDRL.",
    reference: 'Tratado de Infectologia – Veronesi e Focaccia (6a edição – 2020) Editora Atheneu',
    tags: ['infectologia', 'dermatologia']
  },
  {
    id: 'tp2023-27',
    module: 'Clínica Médica',
    text: 'Paciente do sexo feminino, 45 anos, com quadro de insônia, irritabilidade e palpitações há 2 meses. Relata ter perdido 4kg no período, mesmo sem alterar a alimentação. Nega comorbidades ou uso contínuo de medicações. Ao exame físico geral, apresenta-se em bom estado, com frequência cardíaca de 126bpm, PA 120x70mmHg, presença de tremores finos de extremidades, exoftalmia bilateral, simétrica. Tireoide aumentada à palpação, sem nódulos. Foram solicitados os seguintes exames complementares: TSH 0,01mUI/mL (VN 0,4 - 4,5mUI/mL) e T4L 2,7ng/dL (VN 0,8 - 1,7ng/dL). Mediante o diagnóstico mais provável, podemos afirmar que:',
    options: [
      '(A) O tratamento medicamentoso é feito preferencialmente com tiamazol.',
      '(B) É uma doença provocada pelo autoanticorpo estimulador da tireoide anti-tireoperoxidase (anti-TPO).',
      '(C) A cirurgia da tireoide é o tratamento de escolha para a maioria dos pacientes.',
      '(D) A insônia e os tremores devem ser tratados com benzodiazepínicos.'
    ],
    correctAnswer: 0,
    explanation: "Hipertireoidismo (TSH suprimido, T4 livre alto) com bócio difuso e exoftalmia bilateral é doença de Graves. O tratamento medicamentoso preferencial é o tiamazol (metimazol), que bloqueia a síntese hormonal, é dado uma vez ao dia e tem menos hepatotoxicidade que o propiltiouracil.\n\nO propiltiouracil fica reservado ao primeiro trimestre da gestação e à crise tireotóxica. Enquanto o hormônio não normaliza, um betabloqueador como o propranolol alivia taquicardia, tremor e ansiedade. As outras opções definitivas são o iodo radioativo e a tireoidectomia.",
    commentary: "Anti-TPO como anticorpo estimulador (B): o anti-TPO é marcador de autoimunidade tireoidiana (típico de Hashimoto); o anticorpo que estimula a glândula na doença de Graves é o TRAb, contra o receptor do TSH.\n\nCirurgia como escolha para a maioria (C): a tireoidectomia é indicada em situações específicas, como bócio volumoso com compressão, nódulo suspeito ou contraindicação às outras opções.\n\nBenzodiazepínicos para insônia e tremor (D): esses sintomas são adrenérgicos e melhoram com betabloqueador e com o controle do hipertireoidismo.",
    tip: "Graves: tiamazol é a 1ª escolha; propiltiouracil só no 1º trimestre ou na crise tireotóxica. Sintomas: betabloqueador.",
    reference: 'Guia Prático em Doenças da Tireoide-Capítulo 10, pag 163. Doença de Graves – Sociedade Brasileira de Endocrinologia e Metabologia 2022.',
    tags: ['endocrinologia']
  },
  {
    id: 'tp2023-28',
    module: 'Clínica Médica',
    text: 'JM está em situação de rua e na primeira vez em que experimentou cocaína teve uma sensação de intensa euforia, bem-estar, desinibição, perda de apetite e aumento da energia e libido; porém, com o uso prolongado da droga, passou a ter que usar cada vez mais a cocaína para obter esses mesmos efeitos. O nome que corresponde a esse efeito causado pelo consumo prolongado de drogas é:',
    options: [
      '(A) Abuso',
      '(B) Abstinência',
      '(C) Tolerância',
      '(D) Overdose'
    ],
    correctAnswer: 2,
    explanation: "Precisar de doses cada vez maiores para obter o mesmo efeito, ou ter efeito menor com a mesma dose, é a definição de tolerância. Ela surge com o uso repetido, por adaptação do organismo à substância (mudanças nos receptores, na neurotransmissão e no metabolismo).\n\nA tolerância é um dos critérios do transtorno por uso de substâncias e costuma andar junto com a abstinência e a perda de controle sobre o consumo, por isso é peça central na evolução para a dependência.",
    commentary: "Abuso (A): designa um padrão de uso que traz prejuízos (sociais, legais, de saúde), não a necessidade de aumentar a dose; o DSM-5 substituiu abuso e dependência por transtorno por uso de substâncias.\n\nAbstinência (B): são os sintomas que surgem ao parar ou reduzir o uso; na cocaína, disforia, cansaço, sonolência, aumento do apetite e fissura.\n\nOverdose (D): é a intoxicação grave por dose excessiva, com risco de arritmia, infarto, convulsão e hipertermia.",
    tip: "Mais droga para o mesmo efeito = tolerância. Sintomas ao parar = abstinência.",
    reference: 'DIEHL, A.; CORDEIRO, D. C.; LARANJEIRA, R. (Orgs.). Dependência química: prevenção, tratamento e políticas públicas. 2. ed. Porto Alegre: Artmed, 2018. 554 p.',
    tags: ['psiquiatria']
  },
  {
    id: 'tp2023-29',
    module: 'Clínica Médica',
    text: 'Paciente do sexo feminino, 32 anos, procedente de São Paulo/SP, foi admitida na UTI por quadro de hepatite fulminante pelo vírus da hepatite B, com indicação de transplante hepático. Tem antecedente de hepatite C, tratada com resposta virológica sustentada (cura). Assinale a alternativa que melhor reflete seu estado sorológico atual:',
    options: [
      '(A) HBsAg (+), anti-HBc IgG (+), anti-HBc IgM (-), anti-HBs (-), Anti-HCV (-)',
      '(B) HBsAg (+), anti-HBc IgG (+), anti-HBc IgM (+), anti-HBs (-), Anti-HCV (+)',
      '(C) HBsAg (+), anti-HBc IgG (+), anti-HBc IgM (+), anti-HBs (-), Anti-HCV (-)',
      '(D) HBsAg (-), anti-HBc IgG (+), anti-HBc IgM (-), anti-HBs (+), Anti-HCV (+)'
    ],
    correctAnswer: 1,
    explanation: "A hepatite fulminante pelo vírus B ocorre na fase aguda da infecção, com insuficiência hepática (encefalopatia e coagulopatia). O perfil sorológico esperado é HBsAg positivo, anti-HBc positivo com IgM positivo (marcador de infecção recente) e anti-HBs negativo, porque não houve cura.\n\nQuanto à hepatite C, quem teve contato com o vírus mantém o anti-HCV positivo por toda a vida, mesmo depois da cura; o que fica negativo após a resposta virológica sustentada é o HCV-RNA. Vale lembrar que, na forma fulminante, a resposta imune intensa pode negativar o HBsAg precocemente, e o anti-HBc IgM é o marcador mais confiável.",
    commentary: "Anti-HBc IgM negativo e anti-HCV negativo (A): seria um perfil de hepatite B crônica, sem infecção aguda, e ignora que o anti-HCV persiste após a cura da hepatite C.\n\nAnti-HCV negativo (C): o perfil do vírus B está certo, mas o anti-HCV continua positivo em quem já teve hepatite C, mesmo curada.\n\nHBsAg negativo e anti-HBs positivo (D): indica hepatite B passada e curada, com imunidade, o que não combina com hepatite fulminante atual pelo vírus B.",
    tip: "Hepatite B aguda: HBsAg+ e anti-HBc IgM+. Hepatite C curada: anti-HCV+ para sempre, RNA negativo.",
    reference: 'Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas para o Tratamento da Hepatite Viral Crônica B e Coinfeccões, Brasília, 2009.',
    tags: ['gastroenterologia', 'infectologia']
  },
  {
    id: 'tp2023-30',
    module: 'Clínica Médica',
    text: 'Paciente do sexo feminino, 27 anos, sem antecedentes mórbidos relevantes, queixa-se de azia e regurgitação há alguns meses, com sensação de queimação retroesternal e gosto amargo na boca. Esses sintomas aconteciam ocasionalmente, mas se intensificaram após ela ter ganho mais 8kg devido a estresse no trabalho e interrupção de suas atividades físicas. Feito diagnóstico clínico de doença do refluxo gastroesofágico, procedidas as orientações dietéticas, como perda de peso. A prescrição médica deverá conter:',
    options: [
      '(A) Tratamento com antagonistas dos receptores de histamina-2 (H2RA) durante 6 a 8 semanas.',
      '(B) Endoscopia digestiva alta para confirmação diagnóstica e, a seguir, iniciar o inibidor de bomba de prótons.',
      '(C) Manometria de alta resolução do esôfago para um diagnóstico mais preciso da gravidade do caso.',
      '(D) Tratamento empírico com inibidor de bomba de prótons durante 8 semanas.'
    ],
    correctAnswer: 3,
    explanation: "Mulher de 27 anos com azia e regurgitação típicas, piora após ganho de peso e sem sinais de alarme: o diagnóstico de doença do refluxo é clínico. A conduta é mudar hábitos (perda de peso, evitar refeições volumosas antes de deitar, elevar a cabeceira) e fazer teste terapêutico com inibidor de bomba de prótons por 8 semanas.\n\nA endoscopia fica para quem tem sinais de alarme (disfagia, odinofagia, perda de peso, sangramento, anemia, vômitos persistentes), início dos sintomas em idade mais avançada ou falha do tratamento empírico.",
    commentary: "Antagonista H2 por 6 a 8 semanas (A): alivia menos a azia e a regurgitação do que o inibidor de bomba de prótons; pode ser usado em sintomas ocasionais ou como complemento noturno.\n\nEndoscopia antes de tratar (B): sem sinais de alarme, o exame não é necessário para iniciar o tratamento em paciente jovem com sintomas típicos.\n\nManometria esofágica (C): não diagnostica refluxo; serve para avaliar distúrbios motores (como acalasia), para posicionar o cateter da pHmetria e antes de cirurgia antirrefluxo.",
    tip: "DRGE típica em jovem sem alarme: mudança de hábitos + IBP por 8 semanas, sem endoscopia inicial.",
    reference: 'Katz, PO, et al. ACG Clinical Guideline: Guidelines for the Diagnosis and Management of Gastroesophageal Reflux Disease. Am J Gastroenterol. 2022 January 01; 117(1): 27–56.',
    tags: ['gastroenterologia']
  },
  {
    id: 'tp2023-31',
    module: 'Clínica Médica',
    text: 'Paciente do sexo feminino, 23 anos, queixa-se de “dor nas juntas e inchaço nas pernas” há cerca de 15 dias e “urina espumando”. Ao exame físico, apresenta-se em bom estado geral, PA 150x100mmHg, saturação periférica de O2 98% em ar ambiente, com edema de membros inferiores (2+/4+ bilateral), sem evidência de artrite. Presença de eritema em região malar, que a paciente correlaciona com viagem à praia há 1 mês. Qual exame deve ser solicitado para auxílio diagnóstico?',
    options: [
      '(A) Fator antinúcleo (FAN)',
      '(B) Anticorpo anticitoplasma de neutrófilos (ANCA)',
      '(C) Fator reumatoide',
      '(D) Ácido úrico'
    ],
    correctAnswer: 0,
    explanation: "Mulher jovem com eritema malar que piorou após exposição ao sol, dor articular, edema, hipertensão e urina espumosa (proteinúria) reúne sinais cutâneos e renais típicos de lúpus eritematoso sistêmico. O quadro renal sugere nefrite lúpica, que precisa ser investigada com urina tipo 1, proteinúria quantificada e função renal.\n\nO primeiro exame a pedir é o fator antinúcleo (FAN). Nos critérios de classificação EULAR/ACR de 2019, FAN positivo (título de pelo menos 1:80) é o critério de entrada: sem ele, não se segue com a pontuação. Com FAN positivo, confirmam-se a suspeita e a atividade com anti-DNA dupla hélice, anti-Sm e complemento (C3 e C4).",
    commentary: "ANCA (B): é o marcador das vasculites de pequenos vasos (granulomatose com poliangeíte, poliangeíte microscópica), que podem causar glomerulonefrite, mas não explicam o eritema malar fotossensível.\n\nFator reumatoide (C): ajuda no diagnóstico de artrite reumatoide, que não tem rash malar nem síndrome nefrótica; além disso, a paciente não tem artrite ao exame.\n\nÁcido úrico (D): investiga gota ou nefropatia por urato, quadros que não combinam com mulher jovem, eritema malar e proteinúria.",
    tip: "Mulher jovem + eritema malar fotossensível + urina espumosa = pense em lúpus; o primeiro exame é o FAN (critério de entrada).",
    reference: '2019 European League Against Rheumatism/American College of Rheumatology Classification Criteria for Systemic Lupus Erythematosus. Arthritis Rheumatol 71(9):1400–1412, 2019.',
    tags: ['reumatologia', 'nefrologia']
  },
  {
    id: 'tp2023-32',
    module: 'Clínica Médica',
    text: 'Paciente do sexo masculino, 23 anos, queixa-se de cefaleia pulsátil hemicraniana, acompanhada de fotofobia, fonofobia e náuseas, de início há mais de 10 anos. Relata que houve piora da intensidade das dores há cerca de 6 meses, agora com a ocorrência de despertares noturnos pela dor. Identifique a afirmativa correta:',
    options: [
      '(A) Paciente apresenta cefaleia tensional, que pode ser tratada com a prescrição de um antidepressivo tricíclico (amitriptilina).',
      '(B) Paciente apresenta migrânea sem aura e não há necessidade de solicitação de exame complementar neste momento.',
      '(C) Paciente apresenta migrânea sem aura, onde fármacos da classe dos inibidores seletivos de recaptação da serotonina seriam primeira escolha de tratamento.',
      '(D) Paciente tem como principal hipótese diagnóstica migrânea sem aura e necessita de exame de imagem para afastar cefaleia secundária.'
    ],
    correctAnswer: 3,
    explanation: "Cefaleia pulsátil de um lado só, com fotofobia, fonofobia e náuseas, presente há mais de 10 anos e sem aura, tem as características da migrânea sem aura. O problema é a mudança recente: nos últimos 6 meses a dor ficou mais forte e passou a acordar o paciente à noite.\n\nMudança do padrão de uma cefaleia antiga e despertar noturno pela dor são sinais de alarme, que obrigam a afastar uma causa secundária (tumor, hipertensão intracraniana, lesão estrutural). Por isso, mesmo com o diagnóstico principal de migrânea, está indicado exame de imagem do encéfalo, de preferência ressonância magnética.",
    commentary: "Cefaleia tensional (A): é em aperto, bilateral, de leve a moderada intensidade, sem náuseas e com no máximo um entre fotofobia ou fonofobia; o quadro aqui é de migrânea.\n\nMigrânea sem exames (B): estaria certa se não houvesse sinais de alarme. A piora recente com despertar noturno exige investigação.\n\nISRS como primeira escolha (C): os inibidores seletivos de recaptação de serotonina não têm boa eficácia na profilaxia da migrânea. As opções de primeira linha são betabloqueadores (propranolol), amitriptilina, topiramato e flunarizina.",
    tip: "Cefaleia antiga que muda de padrão ou acorda o paciente = sinal de alarme: pedir neuroimagem.",
    reference: 'Nitrini, Ricardo; Bacheschi, Luiz Alberto (eds). A neurologia que todo médico deve saber [3.ed.]. SÃO PAULO: Atheneu, 2015.',
    tags: ['neurologia']
  },
  {
    id: 'tp2023-33',
    module: 'Clínica Médica',
    text: 'Homem, 23 anos, em consulta de rotina; relata que há 3 meses vem apresentando crises de dispneia com sintomas diurnos (mais de 2 vezes por semana) e despertares noturnos frequentes. No mesmo período, faltou ao trabalho por 3 vezes devido ao quadro. Está em uso de beclometasona inalada 200mcg 2x ao dia e salbutamol spray 200mcg 3x ao dia (e doses “extra” conforme a necessidade). Nega tabagismo e outras patologias associadas ou uso contínuo de outras medicações. Ao exame físico apresenta-se em bom estado geral, eupneico. Ao exame do aparelho respiratório está confortável, sem esforço muscular e com raros sibilos à ausculta pulmonar. Identifique o diagnóstico e a conduta:',
    options: [
      '(A) Trata-se de asma parcialmente controlada; deverá ser aumentada a dose da beclometasona inalada, 400mcg 3x ao dia, e do salbutamol spray, 400mcg 3x ao dia, e associada uma metilxantina (aminofilina 200mg via oral 3x ao dia).',
      '(B) Trata-se de asma não-controlada; deverão ser revistas as orientações não-medicamentosas e prescrito formoterol + budesonida 12+400mcg 2x ao dia, com a utilização de dose “extra” de resgaste, se necessário.',
      '(C) Trata-se de asma não-controlada; o paciente deverá ser orientado com relação à patologia (de caráter alérgico e imune) e fenotipado com vistas à prescrição de imunobiológico.',
      '(D) Trata-se de asma parcialmente controlada; o paciente está eupneico e sem esforço respiratório, com raros sibilos à ausculta. A medicação em uso pode ser mantida e o paciente deverá ser encaminhado para avaliação psicológica.'
    ],
    correctAnswer: 1,
    explanation: "Para avaliar o controle da asma, olham-se as últimas 4 semanas: sintomas diurnos mais de 2 vezes por semana, despertar noturno, uso de resgate mais de 2 vezes por semana e limitação das atividades. Este paciente tem os quatro (inclusive faltas ao trabalho), o que define asma não controlada, mesmo com exame físico tranquilo no dia da consulta.\n\nAntes de subir o tratamento, revisam-se técnica inalatória, adesão, exposição a alérgenos e irritantes e comorbidades (rinite, refluxo, obesidade, ansiedade). Depois, pela SBPT e pela GINA, a conduta é passar do corticoide inalatório isolado para a combinação corticoide inalatório + formoterol, como budesonida/formoterol, que também pode ser usada como resgate. Isso substitui o resgate com salbutamol isolado, que está sendo usado demais.",
    commentary: "Asma parcialmente controlada com aminofilina (A): com os quatro critérios presentes, a asma é não controlada. Aumentar o salbutamol e acrescentar metilxantina não é recomendado: as xantinas têm pouca eficácia e muitos efeitos adversos.\n\nImunobiológico (C): reservado para asma grave que segue sem controle mesmo com doses altas de corticoide inalatório + LABA, técnica e adesão corretas. O paciente ainda está em etapa inicial de tratamento.\n\nManter a medicação e encaminhar ao psicólogo (D): o controle é ruim, não parcial; manter o esquema deixa o paciente exposto a crises graves.",
    tip: "Sintoma diurno > 2x/sem, despertar noturno, resgate > 2x/sem, limitação: 3 ou 4 = asma não controlada. Subir para CI + formoterol.",
    reference: 'Recomendações para o manejo da asma da Sociedade Brasileira de Pneumologia e Tisiologia – 2020. J Bras Pneumol. 2020;46(1):e20190307. Global Initiative for Asthma, 2023.',
    tags: ['pneumologia']
  },
  {
    id: 'tp2023-34',
    module: 'Clínica Médica',
    text: 'Homem, 70 anos, queixa-se de dispneia aos pequenos esforços e tosse com expectoração clara matinal há cerca de 2 anos. Não apresenta comorbidades, nem usava medicações previamente. Tabagista de 40 maços/ano. Há cerca de 3 dias houve piora da dispneia, agora presente em repouso, com aumento e mudança da expectoração para amarelada, febre referida com calafrios e perda do apetite. Determine o diagnóstico mais provável para o quadro agudo:',
    options: [
      '(A) Pleurite aguda',
      '(B) Crise de asma',
      '(C) Exacerbação de DPOC',
      '(D) Tuberculose pulmonar'
    ],
    correctAnswer: 2,
    explanation: "Homem idoso com carga tabágica alta (40 maços-ano), dispneia progressiva e tosse produtiva matinal há 2 anos: é o quadro de DPOC, que se confirma com espirometria mostrando obstrução que não reverte com broncodilatador (VEF1/CVF menor que 0,70 pós-broncodilatador).\n\nNos últimos 3 dias houve piora aguda da dispneia, aumento do volume e purulência do escarro e febre. Essa piora aguda dos sintomas respiratórios além da variação do dia a dia é a exacerbação da DPOC, na maioria das vezes desencadeada por infecção respiratória. Aumento da dispneia, do volume e da purulência do escarro (critérios de Anthonisen) indicam antibiótico, além de broncodilatador de curta ação e corticoide sistêmico.",
    commentary: "Pleurite aguda (A): o sintoma principal é dor torácica que piora com a respiração, que o paciente não tem; não explica a história de 2 anos.\n\nCrise de asma (B): a asma costuma começar na infância ou juventude, com sintomas variáveis e episódicos; um tabagista pesado de 70 anos com sintomas contínuos tem DPOC.\n\nTuberculose pulmonar (D): tosse por mais de 3 semanas com febre vespertina, sudorese noturna e emagrecimento; aqui a febre e a mudança do escarro surgiram de forma aguda, há 3 dias.",
    tip: "Tabagista com tosse e dispneia crônicas que piora em dias, com mais escarro e escarro purulento = exacerbação de DPOC.",
    reference: 'GLOBAL INITIATIVE FOR CHRONIC OBSTRUCTIVE LUNG DISEASE. Global strategy for Diagnosis, Management and Prevention of Chronic Obstructive Pulmonary Disease 2023 REPORT.',
    tags: ['pneumologia']
  },
  {
    id: 'tp2023-35',
    module: 'Clínica Médica',
    text: 'Masculino, 66 anos, etilista, relata tosse há 5 dias, dor torácica em hemitórax direito ventilatório-dependente e calafrios. Nega alergia a medicamentos. Ao exame físico: orientado, temperatura de 38ºC, pressão arterial normal, frequência respiratória de 26ipm, oximetria de pulso de 95%, acianótico e hidratado. A ausculta na base torácica direita mostrou estertores crepitantes finos e pectoriloquia. Realizou radiografia de tórax com opacidade homogênea basal direita com broncograma aéreo; ureia sérica de 35mg/dL (normal: 13 - 40), creatinina sérica de 1,0mg/dL (normal: 0,7 - 1,3). Qual a programação e a terapia medicamentosa adequadas para o caso exposto?',
    options: [
      '(A) Manter tratamento ambulatorial com betalactâmico (amoxicilina) e macrolídeo (azitromicina).',
      '(B) Indicar tratamento hospitalar com betalactâmico (ceftriaxona).',
      '(C) Manter o tratamento ambulatorial com betalactâmico (amoxicilina).',
      '(D) Indicar tratamento hospitalar com quinolona (levofloxacina).'
    ],
    correctAnswer: 0,
    explanation: "Tosse, febre, dor pleurítica, crepitações e pectorilóquia na base direita, com opacidade e broncograma aéreo na radiografia, confirmam pneumonia adquirida na comunidade. A gravidade se avalia pelo CURB-65: confusão (não), ureia acima de 50 mg/dL (não, 35), frequência respiratória de 30 ou mais (não, 26), PA sistólica abaixo de 90 ou diastólica de 60 ou menos (não) e idade de 65 anos ou mais (sim). Escore 1, com saturação adequada e paciente estável: tratamento ambulatorial.\n\nNa diretriz da SBPT de 2018, quem tem comorbidade ou fator de risco (como o etilismo) ou usou antibiótico recentemente deve receber um betalactâmico associado a um macrolídeo (por exemplo, amoxicilina ou amoxicilina-clavulanato + azitromicina) ou, como alternativa, uma quinolona respiratória em monoterapia.",
    commentary: "Internação com ceftriaxona (B): com CURB-65 de 1 e estabilidade clínica, não há indicação de internação; e o betalactâmico isolado deixa sem cobertura os germes atípicos.\n\nAmoxicilina isolada (C): é a opção para adulto previamente hígido, sem comorbidades. O etilismo pede esquema mais amplo, com macrolídeo associado.\n\nInternação com levofloxacina (D): a quinolona respiratória é uma alternativa aceitável no tratamento ambulatorial, mas o paciente não precisa ser internado.",
    tip: "PAC com CURB-65 de 0 a 1 trata em casa; se houver comorbidade (etilismo, DM, DPOC), betalactâmico + macrolídeo.",
    reference: 'Recomendações para o manejo da pneumonia adquirida na comunidade 2018. J Bras Pneumol. 2018;44(5):405-425',
    tags: ['pneumologia', 'infectologia']
  },
  {
    id: 'tp2023-36',
    module: 'Clínica Médica',
    text: 'Paciente de 45 anos, desacompanhado, aparência descuidada, dá entrada no Pronto-Socorro com sintomas de tremores nas mãos, nas pernas e na voz, hálito etílico, febre, confusão mental/desorientação, agitação, irritabilidade, raiva, apatia, alucinações visuais e paranoia, mudanças de humor. Paciente deixa de reconhecer seus familiares e amigos e troca o dia pela noite, dormindo durante o dia e permanecendo acordado à noite. A hipótese diagnóstica correspondente ao quadro acima é:',
    options: [
      '(A) Transtorno de personalidade paranoide',
      '(B) Esquizofrenia',
      '(C) Transtorno bipolar',
      '(D) Delirium tremens'
    ],
    correctAnswer: 3,
    explanation: "Paciente com sinais de uso pesado de álcool que chega com tremores, febre, agitação, desorientação, alucinações visuais, paranoia, oscilações de humor e inversão do ciclo sono-vigília. O que domina o quadro é a alteração aguda e flutuante da consciência e da atenção, isto é, delirium, junto com hiperatividade autonômica (tremor, febre): é o delirium tremens, a forma mais grave da abstinência alcoólica, que costuma surgir de 48 a 96 horas após a última dose.\n\nÉ uma emergência médica, com risco de morte. O tratamento inclui benzodiazepínico (diazepam ou, em hepatopatas e idosos, lorazepam), tiamina antes da glicose para prevenir encefalopatia de Wernicke, hidratação, correção de eletrólitos e ambiente seguro. As alucinações visuais e a desorientação não indicam doença psiquiátrica primária.",
    commentary: "Transtorno de personalidade paranoide (A): é um padrão duradouro de desconfiança, desde o início da vida adulta, sem rebaixamento da consciência, febre ou tremor.\n\nEsquizofrenia (B): predominam alucinações auditivas e delírios com consciência e orientação preservadas; não cursa com febre, tremor e desorientação aguda.\n\nTranstorno bipolar (C): é marcado por episódios de mania e depressão, também com orientação preservada; a variação de humor aqui é parte do delirium.",
    tip: "Etilista com tremor, febre, desorientação e alucinação visual = delirium tremens: benzodiazepínico + tiamina antes da glicose.",
    reference: 'DIEHL, A.; CORDEIRO, D. C.; LARANJEIRA, R. (Orgs.). Dependência química: prevenção, tratamento e políticas públicas. 2. ed. Porto Alegre: Artmed, 2018. 554 p.',
    tags: ['psiquiatria', 'emergência']
  },
  {
    id: 'tp2023-37',
    module: 'Clínica Médica',
    text: 'Jovem de 19 anos, gênero feminino, natural e procedente de São Paulo, procura o ambulatório de infectologia por apresentar febre diária há cinco dias, além de dor de garganta, discreta icterícia e manchas avermelhadas, semelhantes ao sarampo, no tórax. Conta ainda que notou nesses dias a presença de pequenos “gânglios no pescoço” e que, ao olhar a garganta no espelho, observou placas esbranquiçadas em amígdalas. Considerando apenas esses dados, qual o possível diagnóstico clínico?',
    options: [
      '(A) Toxoplasmose forma linfoglandular',
      '(B) Mononucleose infecciosa',
      '(C) Faringite estreptocócica',
      '(D) Síndrome retroviral aguda'
    ],
    correctAnswer: 1,
    explanation: "Adolescente/adulta jovem com febre há 5 dias, dor de garganta com placas esbranquiçadas nas amígdalas, linfonodos cervicais aumentados, exantema e discreta icterícia. Essa combinação de faringoamigdalite exsudativa, linfadenopatia e acometimento hepático é a apresentação típica da mononucleose infecciosa pelo vírus Epstein-Barr, frequente nessa faixa etária.\n\nO diagnóstico é confirmado com hemograma (linfocitose com linfócitos atípicos), aumento discreto de transaminases e sorologia (anti-VCA IgM ou teste de anticorpos heterófilos). O tratamento é de suporte. Vale lembrar que amoxicilina ou ampicilina nesses pacientes frequentemente provoca exantema, e que a esplenomegalia exige evitar esportes de contato.",
    commentary: "Toxoplasmose linfoglandular (A): causa linfadenopatia cervical, febre baixa e cansaço, mas raramente faringite com placas nas amígdalas e icterícia.\n\nFaringite estreptocócica (C): tem febre e exsudato amigdaliano, mas não costuma causar icterícia, exantema morbiliforme nem linfadenopatia além da cervical anterior; o exantema da escarlatina é áspero (\"lixa\"), não semelhante ao do sarampo.\n\nSíndrome retroviral aguda (D): pode dar febre, faringite, linfonodos e exantema, mas a faringite costuma ser sem exsudato, e pode haver úlceras orais; a história de exposição de risco ajudaria. Deve ser lembrada no diagnóstico diferencial e o anti-HIV é recomendado, mas a combinação com placas e icterícia aponta para mononucleose.",
    tip: "Jovem com faringite com placas + linfonodos + hepatite discreta (icterícia) = mononucleose; amoxicilina pode causar rash.",
    reference: 'Tratado de Infectologia – Veronesi e Focaccia (6a edição – 2020) Editora Atheneu',
    tags: ['infectologia']
  },
  {
    id: 'tp2023-38',
    module: 'Clínica Médica',
    text: 'Mulher de 54 anos, obesa, hipertensa e diabética (controlada), queixa-se há 3 anos de dor e edema nos joelhos ao subir escadas e após varrer a casa. Nega febre, nega parestesias, nega lesões de pele. Refere rigidez matinal de curta duração. Ao exame físico, verifica-se a presença de crepitações grosseiras patelofemorais e limitação de amplitude articular em ambos os joelhos. Diante do diagnóstico mais provável, qual a conduta a ser seguida?',
    options: [
      '(A) Tratamento não-farmacológico inclui fortalecimento muscular das coxas, além de treino de equilíbrio e propriocepção.',
      '(B) Tratamento não-farmacológico com controle da dieta, orientação de menor consumo de alimentos ricos em purina e álcool.',
      '(C) Solicitar primeiro densitometria óssea para investigação da causa.',
      '(D) Solicitar eletromiografia para avaliar neuropatia relacionada ao diabetes, a principal causa da dor.'
    ],
    correctAnswer: 0,
    explanation: "Mulher de 54 anos, obesa, com dor nos joelhos há 3 anos que piora com o uso (subir escadas, varrer), rigidez matinal curta, crepitação grosseira e limitação de movimento, sem febre: é o quadro de osteoartrite (artrose) de joelhos. O diagnóstico é clínico, e a radiografia pode mostrar redução do espaço articular e osteófitos.\n\nA base do tratamento é não farmacológica: educação sobre a doença, perda de peso e exercícios, principalmente o fortalecimento do quadríceps, além de treino de equilíbrio e propriocepção e atividade aeróbica de baixo impacto. Os medicamentos (analgésicos, anti-inflamatórios tópicos ou orais por curto período, infiltração com corticoide) complementam essas medidas.",
    commentary: "Dieta pobre em purinas e álcool (B): é orientação para gota, que tem crises agudas de artrite com sinais inflamatórios, e não dor mecânica com crepitação.\n\nDensitometria óssea (C): avalia osteoporose, que não causa dor articular nem crepitação; não investiga a causa do quadro.\n\nEletromiografia (D): a neuropatia diabética causa parestesias e queimação em pés, que a paciente nega; ela não explica dor mecânica nos joelhos.",
    tip: "Dor no joelho que piora com o uso + rigidez matinal curta + crepitação = artrose; trate com perda de peso e fortalecimento do quadríceps.",
    reference: 'Pendleton A, Ardeu N, Dougados M, et al. EULAR recommendations for the management of knee osteoarthritis. Ann Rheum Dis 59:936-44, 2000.',
    tags: ['reumatologia', 'ortopedia']
  },
  {
    id: 'tp2023-39',
    module: 'Clínica Médica',
    text: 'Paciente de 23 anos com queixa de tosse com expectoração amarelada e alguns episódios de expectoração com sangue há 4 semanas. Apresenta febre e sudorese noturna. Notou emagrecimento de 4kg nesse período. Consome bebidas alcoólicas diariamente há 5 anos, meia garrafa de pinga. Fuma 1 maço de cigarro por dia há 5 anos. Trouxe uma radiografia do tórax solicitada num atendimento há 5 dias, na emergência. Determine a hipótese diagnóstica e o exame laboratorial útil para o diagnóstico:',
    image: '/images/tp2023-39.webp',
    options: [
      '(A) Pneumonia Adquirida na Comunidade. Solicitar hemograma, ureia e Proteína C Reativa.',
      '(B) Tuberculose Pleural. Solicitar Teste de Mantoux e toracocentese para exame do líquido pleural.',
      '(C) Neoplasia de Pulmão. Solicitar citologia oncótica do escarro.',
      '(D) Tuberculose Pulmonar. Solicitar pesquisa de BAAR no escarro ou teste molecular para tuberculose.'
    ],
    correctAnswer: 3,
    explanation: "Tosse com escarro há 4 semanas, hemoptise, febre, sudorese noturna e perda de peso em um paciente etilista e tabagista formam o quadro clássico de tuberculose pulmonar. Tosse por 3 semanas ou mais já define sintomático respiratório, que deve ser investigado; o alcoolismo é fator de risco importante.\n\nNa radiografia, a tuberculose do adulto costuma acometer os lobos superiores, às vezes com cavitação. Para confirmar, o Ministério da Saúde recomenda o teste rápido molecular para tuberculose (que também detecta resistência à rifampicina) ou a baciloscopia (pesquisa de BAAR) no escarro, com cultura nas situações indicadas. Diagnóstico confirmado: esquema RHZE e testagem para HIV.",
    commentary: "Pneumonia adquirida na comunidade (A): costuma ter evolução de poucos dias, não de 4 semanas com emagrecimento e sudorese noturna; hemograma, ureia e PCR avaliam gravidade, mas não fazem o diagnóstico etiológico.\n\nTuberculose pleural (B): apresenta dor torácica pleurítica e derrame pleural; aqui predominam tosse com escarro e hemoptise. O teste de Mantoux não confirma doença ativa.\n\nNeoplasia de pulmão (C): pode causar tosse, hemoptise e perda de peso, mas a febre com sudorese noturna em jovem de 23 anos aponta para infecção; a citologia do escarro não é o exame inicial.",
    tip: "Tosse por 3 semanas ou mais + febre vespertina + sudorese noturna + emagrecimento = tuberculose: teste rápido molecular ou BAAR no escarro.",
    reference: 'Manual de Recomendações para o controle da tuberculose no Brasil. 2a edição atualizada. 2019.',
    tags: ['infectologia', 'pneumologia']
  },
  {
    id: 'tp2023-40',
    module: 'Clínica Médica',
    text: 'Herpes zoster, conhecido popularmente como “cobreiro”, é uma infecção viral que ocorre pela reativação do vírus varicela zoster (VVZ). A infecção primária pelo VVZ resulta na varicela (catapora), de forma que o vírus permanece em sua forma latente nos gânglios nervosos sensitivos, podendo ser reativado durante a vida, especialmente em idosos. Sobre o herpes zoster, podemos afirmar:',
    options: [
      '(A) A reativação do vírus está geralmente associada a viagens para locais frios.',
      '(B) Caracteriza-se por erupção cutânea vesículo-eritematosa indolor, que acomete geralmente a região do tronco bilateralmente.',
      '(C) A forma mais segura e eficaz de prevenção para o herpes zoster é a vacinação. Trata-se de vacina de vírus inativado, indicada para homens e mulheres acima de 50 anos.',
      '(D) A vacina para o herpes zoster é indicada apenas para indivíduos imunossuprimidos, especialmente em vigência de tratamento oncológico.'
    ],
    correctAnswer: 2,
    explanation: "O herpes-zóster é a reativação do vírus varicela-zóster que ficou latente em um gânglio sensitivo. Ela ocorre quando a imunidade celular cai, como no envelhecimento, no câncer, no HIV e em uso de imunossupressores. A lesão é uma erupção de vesículas sobre base eritematosa, dolorosa, que segue um dermátomo de um lado só do corpo; a complicação mais temida é a neuralgia pós-herpética.\n\nA prevenção mais eficaz é a vacina. Hoje se usa a vacina recombinante adjuvada (não é de vírus vivo), recomendada pela SBIm para pessoas a partir de 50 anos, em duas doses, e que pode ser usada também em imunossuprimidos. Por isso a alternativa C é a correta, mesmo chamando a vacina de \"inativada\".",
    commentary: "Viagens para lugares frios (A): o que reativa o vírus é a queda da imunidade celular (idade, doenças, medicamentos), e não o clima.\n\nErupção indolor e bilateral (B): o zóster é tipicamente doloroso (a dor pode até começar antes das lesões) e unilateral, respeitando um dermátomo.\n\nVacina só para imunossuprimidos (D): a vacina é recomendada para todas as pessoas a partir de 50 anos; os imunossuprimidos são um grupo a mais em que ela é indicada, e não o único.",
    tip: "Zóster = vesículas dolorosas, unilaterais, em um dermátomo. Vacina recombinante a partir de 50 anos, inclusive em imunossuprimidos.",
    reference: 'Calendário de Vacinação SBIm Idoso 2022/2023. Guia de Vacinação Geriatria SBIm / SBGG 2022/2023.',
    tags: ['infectologia', 'geriatria']
  },
  {
    id: 'tp2022-21',
    module: 'Clínica Médica',
    text: 'Mulher, 72 anos, hipertensa e diabética, deu entrada no pronto-socorro com quadro de desvio de rima labial para a direita e hemiparesia à esquerda, que começou há 2 horas da admissão. Os sinais vitais da entrada eram PA: 174/104mmHg, FC: 82bpm, FR: 14ipm, SatO2: 95% em ar ambiente. Paciente realizou tomografia de crânio. Assinale a alternativa correta em relação ao diagnóstico provável e a melhor conduta:',
    image: '/images/tp2022-21.webp',
    options: [
      '(A) Acidente vascular cerebral isquêmico. Trombólise química, se não houver contraindicações.',
      '(B) Acidente vascular cerebral hemorrágico. Craniectomia descompressiva.',
      '(C) Acidente vascular cerebral hemorrágico. Trombólise química, se não houver contraindicações.',
      '(D) Acidente vascular cerebral isquêmico. Transferência para UTI e observar a evolução.'
    ],
    correctAnswer: 0,
    explanation: "Déficit neurológico focal de início súbito (desvio de rima e hemiparesia) em idosa hipertensa e diabética é acidente vascular cerebral até prova em contrário. A tomografia sem contraste não mostra sangramento (que apareceria como área hiperdensa); nas primeiras horas, o AVC isquêmico costuma ter tomografia normal.\n\nCom início há 2 horas, ela está dentro da janela de 4,5 horas para trombólise intravenosa (alteplase, ou tenecteplase onde disponível), desde que não haja contraindicações. A pressão de 174/104 mmHg permite trombolisar, pois o limite é 185/110 mmHg; antes, é preciso checar a glicemia capilar, porque hipo e hiperglicemia podem imitar AVC.",
    commentary: "AVC hemorrágico com craniectomia (B): a tomografia não mostra hiperdensidade, e não há sinais de hipertensão intracraniana ou efeito de massa que indiquem descompressão.\n\nAVC hemorrágico com trombólise (C): além de o diagnóstico estar errado, sangramento intracraniano é contraindicação absoluta à trombólise.\n\nAVC isquêmico com UTI e observação (D): o diagnóstico está certo, mas apenas observar perde a janela terapêutica; quanto mais cedo a reperfusão, mais tecido cerebral se salva.",
    tip: "Déficit focal súbito + TC sem sangue + < 4,5 h + PA < 185/110 + glicemia ok = trombólise.",
    reference: 'SOPESP/BRASIL. Diretrizes de atenção à reabilitação da pessoa com acidente vascular cerebral. 1ª ed. Brasília: Ministério da Saúde, 2013.',
    tags: ['neurologia', 'emergência']
  },
  {
    id: 'tp2022-22',
    module: 'Clínica Médica',
    text: 'Paciente de 47 anos com queixa de tosse seca de início há 3 meses, com piora noturna e associada a rouquidão matutina e sensação de pigarro. Diz ser hipertenso e utiliza bisoprolol. Nega tabagismo. Refere dispepsia eventual. Em relação ao caso descrito, assinale a alternativa correta:',
    options: [
      '(A) A medicação anti-hipertensiva utilizada no caso é uma causa importante de tosse crônica, por se tratar de inibidor da ECA e liberar bradicinina.',
      '(B) A ausência de perda de peso ou sudorese noturna afasta a possibilidade de tuberculose como hipótese provável.',
      '(C) Tosse crônica é aquela que persiste após o período de duas semanas.',
      '(D) A tosse crônica, devido ao refluxo, pode se manifestar mesmo na ausência de sintomas dispépticos importantes, quando forem excluídas a asma e as rinopatias na avaliação.'
    ],
    correctAnswer: 3,
    explanation: 'A tosse crônica (>8 semanas) por DRGE pode ser a única manifestação (forma atípica), mesmo sem sintomas dispépticos importantes.',
    commentary: 'Tosse crônica é definida por duração > 8 semanas (opção C errada). O bisoprolol é um betabloqueador (não causa tosse como os iECA - opção A errada). O refluxo gastroesofágico (DRGE) é uma causa comum de tosse crônica e pode se manifestar apenas com sintomas atípicos (pigarro, rouquidão), mesmo sem pirose ou regurgitação evidente.',
    reference: 'J Bras Pneumol. 2006;32(Supl 6): S 403-S 446. J Bras Pneumol. 2021;47(2): e20210054',
    tags: ['pneumologia', 'gastroenterologia']
  },
  {
    id: 'tp2022-23',
    module: 'Clínica Médica',
    text: 'Paciente masculino, 21 anos, procura atendimento médico com o seguinte quadro: febre há 4 dias, linfonodos cervicais fibroelásticos bilateral, discreta hepatomegalia. Hemograma: 12.000 leucócitos, sendo 55% de linfócitos e 11% de linfócitos atípicos. Qual a melhor opção diagnóstica?',
    options: [
      '(A) Adenite bacteriana',
      '(B) Linfoma não Hodgkin',
      '(C) Tuberculose ganglionar',
      '(D) Síndrome da mononucleose'
    ],
    correctAnswer: 3,
    explanation: 'Linfocitose com atipia linfocitária associada a febre e linfonodomegalia cervical em jovem é característico de mononucleose.',
    commentary: 'Esta questão caracteriza a síndrome da mononucleose: jovem com febre aguda, linfonodos cervicais fibroelásticos bilaterais e linfocitose com atipia.',
    reference: 'Infectologia. Bases clínicas e tratamento Reinaldo Salomão, edição 2017',
    tags: ['infectologia', 'hematologia']
  },
  {
    id: 'tp2022-24',
    module: 'Clínica Médica',
    text: 'Mulher, 58 anos, DM2 há 12 anos em uso de Metformina e Gliclazida. Últimos 6 meses com aumento da sede, diurese, apetite e perda de peso de 8kg. Hemoglobina glicada: 10,3%. Em relação ao caso, é correto afirmar que:',
    options: [
      '(A) Como a paciente tem sinais clínicos de descompensação do diabetes e hemoglobina glicada fora do alvo, uma opção terapêutica viável seria a introdução de insulina NPH na hora de dormir (bed time).',
      '(B) Paciente está descompensada do diabetes mellitus, devendo neste momento ser introduzido inibidor do SGLT2.',
      '(C) A Metformina é uma sulfonilureia e age aumentando a secreção de insulina pela célula beta pancreática.',
      '(D) Por se tratar de uma doença de início relativamente recente, não se deve realizar rastreio das complicações microvasculares (nefro e retinopatia).'
    ],
    correctAnswer: 0,
    explanation: 'Sinais clínicos de insulinopenia (perda de peso e sintomas 4Ps) com falha da terapia dupla oral indicam necessidade de insulina.',
    commentary: 'A paciente apresenta sinais claros de insulinopenia. Com HbA1c de 10,3% e sintomas persistentes apesar de dose otimizada de orais, a introdução de insulina basal (NPH "bed time") é a conduta correta. A metformina é uma biguanida. O rastreio de complicações microvasculares no DM2 deve ser feito no momento do diagnóstico.',
    reference: 'Diretrizes da Sociedade Brasileira de Diabetes, 2022.',
    tags: ['endocrinologia']
  },
  {
    id: 'tp2022-25',
    module: 'Clínica Médica',
    text: 'Paciente masculino, 50 anos, queixa de mal-estar, febre (38°C) e lesão eritematosa bem delimitada na perna. A principal hipótese diagnóstica e a conduta são:',
    image: '/images/tp2022-25.webp',
    options: [
      '(A) Celulite - Antibioticoterapia com cobertura para gram negativos.',
      '(B) Erisipela - Antibioticoterapia com cobertura para Streptococcus do grupo A.',
      '(C) Trombose venosa profunda - Anticoagulação plena.',
      '(D) Necrobiose lipoídica - Corticoterapia sistêmica.'
    ],
    correctAnswer: 1,
    explanation: "Febre, mal-estar e placa eritematosa, quente e de bordas bem delimitadas e elevadas na perna caracterizam a erisipela, infecção da derme superficial e dos linfáticos causada principalmente pelo Streptococcus pyogenes (estreptococo beta-hemolítico do grupo A).\n\nO tratamento é antibiótico com cobertura estreptocócica, como penicilina, amoxicilina ou cefalexina, além de repouso e elevação do membro. Vale procurar e tratar a porta de entrada, como frieira entre os dedos, para evitar recorrências.",
    commentary: "Celulite com cobertura para Gram-negativos (A): a celulite é mais profunda e tem bordas mal definidas; quando tratada, a cobertura é para Gram-positivos (estreptococo e Staphylococcus aureus), não Gram-negativos.\n\nTrombose venosa profunda (C): causa edema, dor e empastamento da panturrilha, mas não placa eritematosa bem delimitada com febre.\n\nNecrobiose lipoídica (D): placas amareladas e atróficas na região pré-tibial, de evolução crônica, associadas ao diabetes, sem febre; corticoide sistêmico pioraria uma infecção.",
    tip: "Placa vermelha, quente, de borda bem delimitada + febre = erisipela (estreptococo do grupo A): penicilina.",
    reference: 'Guia de Vigilância em Saúde. Ministério da Saúde.',
    tags: ['dermatologia', 'infectologia']
  },
  {
    id: 'tp2022-26',
    module: 'Clínica Médica',
    text: 'Paciente masculino, 58 anos, apresenta lesão pigmentada no tronco com assimetria, bordas irregulares e variação de cores. Qual a principal hipótese diagnóstica?',
    image: '/images/tp2022-26.webp',
    options: [
      '(A) Melanoma',
      '(B) Dermatofibrosarcoma',
      '(C) Carcinoma basocelular pigmentado',
      '(D) Carcinoma espinocelular'
    ],
    correctAnswer: 0,
    explanation: "Lesão pigmentada com assimetria, bordas irregulares e mais de uma cor preenche três critérios da regra ABCDE (Assimetria, Bordas, Cor, Diâmetro acima de 6 mm e Evolução), o que torna o melanoma a principal hipótese.\n\nA conduta é a biópsia excisional com margem estreita, para confirmar o diagnóstico e medir a espessura de Breslow, que define a margem da ampliação e o prognóstico. Em idoso, o tronco é localização comum, e por isso o exame completo da pele vale em toda consulta.",
    commentary: "Dermatofibrossarcoma (B): é placa ou nódulo endurecido, da cor da pele ou violáceo, de crescimento lento no tronco; não é lesão pigmentada multicolorida.\n\nCarcinoma basocelular pigmentado (C): costuma ser pápula de aspecto perolado, com bordas brilhantes e telangiectasias, em área de exposição solar, geralmente com pigmento mais uniforme.\n\nCarcinoma espinocelular (D): lesão ceratósica, descamativa ou ulcerada em área fotoexposta, em geral não pigmentada.",
    tip: "ABCDE: Assimetria, Bordas irregulares, Cores, Diâmetro > 6 mm, Evolução. Suspeitou de melanoma? Biópsia excisional.",
    reference: 'National Comprehensive Cancer Network: www.nccn.org',
    tags: ['dermatologia', 'oncologia']
  },
  {
    id: 'tp2022-27',
    module: 'Clínica Médica',
    text: 'Feminino, 38 anos, dor lombar direita de forte intensidade, início há 12 horas, Giordano positivo à direita, afebril. Qual a principal hipótese diagnóstica?',
    options: [
      '(A) Pielonefrite',
      '(B) Lombociatalgia',
      '(C) Cálculo ureteral',
      '(D) Abscesso renal'
    ],
    correctAnswer: 2,
    explanation: "Dor lombar unilateral intensa, de início súbito, sem febre e sem sintomas urinários, com Giordano positivo, é a apresentação típica da cólica renal por cálculo ureteral. A obstrução distende a pelve e a cápsula renal, o que explica a dor e o Giordano; a taquicardia acompanha a dor intensa.\n\nO exame de escolha para confirmar é a tomografia de abdome sem contraste; o ultrassom é alternativa, sobretudo em gestantes. O tratamento inicial é analgesia (anti-inflamatório e, se preciso, opioide). Se surgir febre com obstrução, é urgência: a via urinária precisa ser desobstruída.",
    commentary: "Pielonefrite (A): também dá dor lombar e Giordano positivo, mas costuma vir com febre, calafrios e sintomas urinários, ausentes aqui.\n\nLombociatalgia (B): dor mecânica que piora com o movimento e pode irradiar para a perna; não costuma dar Giordano positivo.\n\nAbscesso renal (D): quadro infeccioso, com febre geralmente prolongada e estado geral comprometido.",
    tip: "Dor lombar súbita, forte, unilateral, sem febre = cálculo ureteral. Febre + obstrução = desobstruir com urgência.",
    reference: 'ZERATI FILHO, Miguel et al. Urologia fundamental. 1. ed. São Paulo: Planmark, 2010.',
    tags: ['urologia', 'nefrologia']
  },
  {
    id: 'tp2022-28',
    module: 'Clínica Médica',
    text: 'Jovem de 17 anos com anemia falciforme. Apresenta odinofagia, febre e dor intensa em face anterior do tórax. Descorada e levemente ictérica. Quanto à dor em tórax, afirma-se:',
    options: [
      '(A) É comum em todas as formas de doença falciforme e surge principalmente por manifestação resultante da autoesplenectomia, que permite um número elevado de células falcêmicas circulantes.',
      '(B) Deve-se a crise vaso oclusiva e necrose isquêmica, comuns em pacientes falcêmicos homozigotos.',
      '(C) A dor surge em um cenário onde o paciente falcêmico homozigoto agrava sua anemia por hemólise, causando isquemia sistêmica.',
      '(D) A combinação de foco inflamatório, autoesplenectomia e bacteremia causa osteomielite bacteriana, geralmente por Salmonella, que provoca a dor.'
    ],
    correctAnswer: 1,
    explanation: "Na anemia falciforme (forma homozigota SS), a hemoglobina S polimeriza quando desoxigenada e deforma as hemácias, que obstruem a microcirculação. A crise vaso-oclusiva causa isquemia e necrose dos tecidos, inclusive da medula óssea de costelas e esterno, e é essa isquemia que provoca a dor. Infecções, desidratação, frio e estresse são gatilhos frequentes, como a amigdalite do caso.\n\nPonto prático: dor torácica com febre em paciente falcêmico exige afastar síndrome torácica aguda (procurar infiltrado novo na radiografia e hipoxemia), que é grave. A crise dolorosa é tratada com analgesia potente (opioide se necessário) e hidratação.",
    commentary: "Comum a todas as formas e causada pela autoesplenectomia (A): o traço falcêmico (AS) não causa crises de dor, e a perda do baço aumenta o risco de infecção, mas não é o mecanismo da dor.\n\nPiora da anemia por hemólise (C): a hemólise explica anemia e icterícia, mas a dor vem da vaso-oclusão local, e não de isquemia sistêmica por anemia.\n\nOsteomielite por Salmonella (D): existe e é mais frequente em falcêmicos, mas é infecção localizada, geralmente em ossos longos; o quadro de dor recorrente desencadeada por infecção é de crise vaso-oclusiva.",
    tip: "Dor na anemia falciforme = vaso-oclusão e isquemia. Dor torácica + febre: afaste síndrome torácica aguda.",
    reference: 'Robbins e Cotran, Patologia; Bases patológicas das doenças. 7ª edição.',
    tags: ['hematologia']
  },
  {
    id: 'tp2022-29',
    module: 'Clínica Médica',
    text: 'Mulher, 28 anos, palpitação, tremores, perda de peso e proptose ocular. De acordo com a principal hipótese diagnóstica (Graves), assinale a correta:',
    options: [
      '(A) O tratamento é realizado com reposição de Levotiroxina.',
      '(B) Na ultrassonografia de tireoide espera-se diminuição do volume da tireoide com nódulos acima de 2,5cm.',
      '(C) Níveis aumentados de TRAb (anti-receptor de TSH) são esperados nesta doença.',
      '(D) É esperado aumento nos níveis de TSH e diminuição de T4 livre.'
    ],
    correctAnswer: 2,
    explanation: "Mulher jovem com palpitação, tremores, perda de peso, intestino mais solto, taquicardia, PA diferencial alargada e proptose: é tireotoxicose, e a oftalmopatia aponta para doença de Graves, a causa mais comum de hipertireoidismo nessa faixa etária.\n\nGraves é autoimune: anticorpos estimulam o receptor do TSH (TRAb) e fazem a tireoide produzir hormônio sem controle. Por isso o TRAb elevado é o achado esperado e é o exame que confirma a etiologia quando a clínica não basta. A oftalmopatia e o mixedema pré-tibial são manifestações próprias de Graves, não vistas nas outras causas de hipertireoidismo.",
    commentary: "Levotiroxina (A): é reposição para hipotireoidismo. Em Graves o tratamento usa antitireoidianos (metimazol de escolha; propiltiouracil em situações específicas), iodo radioativo ou cirurgia.\n\nTireoide pequena com nódulos (B): em Graves a glândula costuma estar aumentada de forma difusa e muito vascularizada ao Doppler, sem nódulos. Nódulos grandes sugerem bócio multinodular tóxico ou adenoma tóxico.\n\nTSH alto e T4 livre baixo (D): é o perfil do hipotireoidismo primário. No hipertireoidismo primário o TSH está suprimido e o T4 livre (ou o T3) elevado.",
    tip: "Hipertireoidismo + oftalmopatia = Graves: TSH suprimido, T4L alto e TRAb positivo.",
    reference: 'Diretrizes da SBEM - Hipertiroidismo.',
    tags: ['endocrinologia']
  },
  {
    id: 'tp2022-30',
    module: 'Clínica Médica',
    text: 'Em um desastre com múltiplas vítimas e recursos limitados, quais pacientes devem ser atendidos com maior prioridade no setor de urgência e emergência?',
    options: [
      '(A) Pacientes com maior chance de sobrevida de acordo com protocolos de gravidade.',
      '(B) Pacientes jovens, independentemente de gravidade, por terem maior expectativa de vida.',
      '(C) Pacientes mais velhos, em consonância com o Estatuto do Idoso.',
      '(D) Pacientes que foram trazidos por equipes de resgate seguindo ordem de chegada ao pronto-socorro.'
    ],
    correctAnswer: 0,
    explanation: "Em desastre com múltiplas vítimas e recursos insuficientes, a prioridade é definida pela gravidade e pela chance de o atendimento mudar o desfecho. Protocolos de triagem (como o START) classificam as vítimas por cores e priorizam quem tem lesão grave, mas com boa possibilidade de sobreviver se tratado rapidamente.\n\nIsso se apoia nos princípios bioéticos de beneficência (fazer o maior bem possível com o que se tem) e de justiça distributiva (alocar recursos escassos por critérios clínicos objetivos e iguais para todos). O Código de Ética Médica proíbe discriminar pacientes por qualquer característica, inclusive idade.",
    commentary: "Jovens primeiro (B): idade isolada não é critério clínico; priorizar por expectativa de vida discrimina e ignora a gravidade das lesões.\n\nIdosos primeiro (C): a prioridade prevista no Estatuto da Pessoa Idosa (Lei 10.741/2003) não substitui a triagem por gravidade em situações de emergência com múltiplas vítimas.\n\nOrdem de chegada (D): a classificação de risco existe justamente para abandonar esse critério, que pode deixar o paciente grave esperando enquanto o leve é atendido.",
    tip: "Múltiplas vítimas: triagem por gravidade e chance de sobrevida (justiça e beneficência), nunca idade ou ordem de chegada.",
    reference: 'Código de Ética Médica. Resolução CFM n° 2.217/2018.',
    tags: ['bioética', 'emergência']
  },
  {
    id: 'tp2022-31',
    module: 'Clínica Médica',
    text: 'Mulher de 60 anos com anemia ferropriva (Hb 7,0, VCM 63, HCM 20). Nega sangramento. Qual a conduta mais adequada para essa paciente?',
    options: [
      '(A) Iniciar sulfato ferroso oral e repetir hemograma em 3 meses.',
      '(B) Solicitar endoscopia digestiva alta e colonoscopia para investigação da anemia.',
      '(C) Solicitar exame de sangue oculto nas fezes (3 amostras) para diagnóstico de sangramento.',
      '(D) Solicitar cintilografia com hemácias marcadas para avaliação de sangramento no intestino delgado.'
    ],
    correctAnswer: 1,
    explanation: "Anemia microcítica e hipocrômica (VCM 63, HCM 20), RDW alto e reticulócitos baixos em mulher de 60 anos, já na pós-menopausa, configuram anemia ferropriva. Nessa idade, sem menstruação, a falta de ferro é considerada perda sanguínea oculta pelo tubo digestivo até prova em contrário, mesmo sem relato de sangramento.\n\nO trato gastrointestinal concentra as causas mais importantes, como doença péptica e câncer colorretal (o de cólon direito pode sangrar sem mudar o hábito intestinal). Por isso a conduta é investigar com endoscopia digestiva alta e colonoscopia, enquanto se repõe o ferro.",
    commentary: "Ferro oral e repetir em 3 meses (A): tratar sem investigar pode atrasar o diagnóstico de um câncer. Além disso, a reposição não deve parar assim que a hemoglobina melhora; ela continua até repor os estoques (ferritina).\n\nSangue oculto nas fezes (C): é teste de rastreamento em pessoas sem sintomas. Diante de anemia ferropriva o resultado negativo não exclui lesão, e a endoscopia será necessária de qualquer forma.\n\nCintilografia com hemácias marcadas (D): serve para localizar sangramento ativo, geralmente quando a endoscopia alta e a colonoscopia não acharam a fonte. Não é exame inicial.",
    tip: "Anemia ferropriva em homem ou mulher pós-menopausa: endoscopia digestiva alta + colonoscopia.",
    reference: 'Hoffbrand, A.V; MOSS, P. A. H. Fundamentos em hematologia.',
    tags: ['hematologia', 'gastroenterologia', 'geriatria']
  },
  {
    id: 'tp2022-32',
    module: 'Clínica Médica',
    text: 'Mauro, 22 anos, tosse seca, dor torácica ventilatório-dependente e febre. Radiografia com lesão de lobo médio. Sem comorbidades. Defina o diagnóstico e conduta.',
    image: '/images/tp2022-32.webp',
    options: [
      '(A) Pneumonia com lesão de lobos médio e inferior; tratamento domiciliar com macrolídeo.',
      '(B) Tuberculose pulmonar com lesão de lobo inferior direito; tratamento hospitalar com esquema RIPE.',
      '(C) Pneumonia de lobo inferior direito; tratamento domiciliar com fluoroquinolona respiratória.',
      '(D) Pneumonia adquirida na comunidade de lobo médio; tratamento domiciliar com betalactâmico via oral.'
    ],
    correctAnswer: 3,
    explanation: "Jovem sem comorbidades, com quadro agudo de tosse, febre, dor pleurítica e crepitações em base direita, estável (FR 18, SpO2 98%, PA normal, consciente): pneumonia adquirida na comunidade sem critérios de gravidade (CURB-65 = 0), que pode ser tratada em casa.\n\nNa radiografia, a consolidação apaga o contorno direito do coração (sinal da silhueta) e fica delimitada pela cissura horizontal, o que localiza a lesão no lobo médio. Na lesão de lobo inferior, o que se apaga é a cúpula diafragmática, e no perfil a opacidade fica posterior. Para o adulto previamente hígido, a diretriz brasileira aceita betalactâmico oral (amoxicilina) como tratamento ambulatorial.",
    commentary: "Lobos médio e inferior com macrolídeo (A): o macrolídeo seria uma opção aceitável, mas a imagem não mostra acometimento do lobo inferior (diafragma preservado e espaço retrocardíaco livre no perfil).\n\nTuberculose com RIPE (B): o quadro tem 2 dias; a tuberculose cursa com tosse por mais de 3 semanas, febre vespertina, sudorese noturna e emagrecimento, e não exige internação para tratar.\n\nLobo inferior com fluoroquinolona (C): a localização está errada e a quinolona respiratória fica reservada a quem tem comorbidades, uso recente de antibiótico ou quadro mais grave.",
    tip: "Apagou a borda do coração = lobo médio; apagou o diafragma = lobo inferior. PAC leve no jovem: amoxicilina em casa.",
    reference: 'Recomendações para o manejo da PAC 2018. J Bras Pneumol. 2018.',
    tags: ['pneumologia', 'infectologia']
  },
  {
    id: 'tp2022-33',
    module: 'Clínica Médica',
    text: 'Mulher hipertensa com obesidade mórbida. Qual a técnica correta de aferição da pressão arterial para esta paciente?',
    options: [
      '(A) Bolsa cerca de 2 a 10cm acima da fossa antecubital, largura de 30% da circunferência.',
      '(B) Inflar o manguito atingindo valor máximo de 220mmHg diretamente.',
      '(C) Utilizar manguito de tamanho adequado, 2 a 3cm acima da fossa antecubital, largura da bolsa de 40% da circunferência e comprimento de 80%.',
      '(D) Manguito 10cm acima da fossa antecubital, centralizado na artéria braquial.'
    ],
    correctAnswer: 2,
    explanation: "A técnica correta de aferição vale para todos, e na obesidade o detalhe que mais pesa é o tamanho do manguito: manguito estreito demais superestima a pressão. A bolsa de borracha deve ter largura de cerca de 40% da circunferência do braço e comprimento que envolva 80% a 100% dele; em braços muito largos usa-se manguito de obeso (ou, se não houver, o do antebraço com ausculta da radial).\n\nO manguito vai 2 a 3 cm acima da fossa cubital, com o centro da bolsa sobre a artéria braquial, braço apoiado na altura do coração e paciente sentado em repouso. Antes de inflar, estima-se a sistólica pela palpação do pulso radial e infla-se 20 a 30 mmHg acima dela.",
    commentary: "2 a 10 cm acima e largura de 30% (A): a distância é imprecisa, a posição da bolsa sobre a braquial importa, e largura de 30% é pequena, o que superestima a pressão.\n\nSó envolver o braço e inflar até 220 mmHg (B): ignora o tamanho do manguito e a estimativa palpatória da sistólica; inflar demais causa dor e não garante leitura correta.\n\n10 cm acima da fossa cubital (D): o manguito fica alto demais e longe do ponto de ausculta; o correto é 2 a 3 cm acima.",
    tip: "Manguito: largura 40% e comprimento 80 a 100% do braço, 2 a 3 cm acima da fossa cubital, bolsa sobre a braquial.",
    reference: "Barroso WKS et al. Diretrizes Brasileiras de Hipertensão Arterial – 2020. Arq Bras Cardiol. 2021;116(3):516-658. Ministério da Saúde. Cadernos de Atenção Básica nº 15 – Hipertensão Arterial Sistêmica. 2006.",
    tags: ['cardiologia']
  },
  {
    id: 'tp2022-34',
    module: 'Clínica Médica',
    text: 'Mulher de 62 anos, HAS crônica. Há 6 meses com dispneia progressiva, paroxística noturna, edema de MMII e presença de B3. ECG com sobrecarga de VE. Qual o exame complementar e conduta mais apropriados?',
    options: [
      '(A) Monitorização Ambulatorial da Pressão Arterial; substituir Captopril por Hidralazina.',
      '(B) Ecocardiograma; manter Captopril e associar Carvedilol e Furosemida.',
      '(C) Cintilografia Miocárdica; manter Captopril, associar Ivabradina e Furosemida.',
      '(D) Holter de 24 horas; manter Captopril, associar Carvedilol e Sustrate.'
    ],
    correctAnswer: 1,
    explanation: "Hipertensa de longa data, mal controlada, com dispneia progressiva, dispneia paroxística noturna, ortopneia, edema de membros inferiores, B3, estertores em bases, hepatomegalia e cardiomegalia: quadro de insuficiência cardíaca congestiva, provavelmente de causa hipertensiva.\n\nO ecocardiograma é o exame que confirma o diagnóstico e mede a fração de ejeção, que define o tratamento. Na conduta, mantém-se o IECA (captopril, agora em uso correto), usa-se furosemida para aliviar a congestão e associa-se betabloqueador com benefício comprovado na IC (carvedilol), iniciado em dose baixa e aumentado aos poucos, o que também ajuda a controlar a taquicardia.",
    commentary: "MAPA e hidralazina com tiazídico (A): a dúvida não é se a paciente é hipertensa, e sim a função do coração. Trocar o IECA por hidralazina retira um fármaco que reduz mortalidade na IC, e o tiazídico é fraco para a congestão.\n\nCintilografia e ivabradina (C): a cintilografia investiga isquemia, não é o exame inicial da IC. A ivabradina só entra em IC com fração reduzida em ritmo sinusal que segue com FC alta já em uso de betabloqueador na dose tolerada.\n\nHolter e Sustrate (D): o Holter avalia arritmias, que não são o problema principal. Sustrate (propatilnitrato) é nitrato antianginoso, sem papel no tratamento crônico dessa paciente.",
    tip: "Suspeita de IC: ecocardiograma. Congestão: furosemida. Base do tratamento: IECA + betabloqueador da IC.",
    reference: 'Diretriz Brasileira de Insuficiência Cardíaca Aguda e Crônica – SBC. 2019.',
    tags: ['cardiologia']
  },
  {
    id: 'tp2022-35',
    module: 'Clínica Médica',
    text: 'Homem de 19 anos, dispneia progressiva, hemoptise isolada, amigdalites de repetição na infância. Exame: B1 hiperfonética, estalido de abertura e sopro diastólico em ruflar. Qual a melhor hipótese?',
    options: [
      '(A) Insuficiência da Válvula Aórtica',
      '(B) Doença Pulmonar Obstrutiva Crônica (DPOC)',
      '(C) Estenose da Válvula Mitral',
      '(D) Tuberculose Pulmonar'
    ],
    correctAnswer: 2,
    explanation: "Jovem de zona rural com amigdalites de repetição na infância (pista de febre reumática), dispneia progressiva aos esforços, taquicardia, hemoptise e congestão pulmonar. Na ausculta, B1 hiperfonética, estalido de abertura e sopro diastólico em ruflar no foco mitral: é a tríade da estenose mitral, cuja causa principal no Brasil é a doença reumática.\n\nA investigação inclui radiografia, ECG e, sobretudo, ecocardiograma, que mede a área valvar. No tratamento inicial, diurético alivia a congestão e o betabloqueador reduz a frequência cardíaca, alongando a diástole e dando mais tempo para o sangue passar pela valva estreitada.",
    commentary: "Insuficiência aórtica (A): dá sopro diastólico aspirativo, em decrescendo, no foco aórtico, com pulsos amplos e PA diferencial alargada, sem estalido de abertura nem ruflar.\n\nDPOC (B): improvável aos 19 anos sem tabagismo, e não explica estalido de abertura e sopro diastólico.\n\nTuberculose (D): não há febre, emagrecimento nem tosse prolongada, e a ausculta cardíaca é típica de valvopatia; sedativo da tosse não é tratamento.",
    tip: "B1 hiperfonética + estalido de abertura + ruflar diastólico = estenose mitral (reumática).",
    reference: 'Diretrizes Brasileiras de Valvopatias – 2020.',
    tags: ['cardiologia']
  },
  {
    id: 'tp2022-36',
    module: 'Clínica Médica',
    text: 'Qual medicamento inibe a recaptação de serotonina e norepinefrina, sendo útil na fibromialgia?',
    options: [
      '(A) Corticosteroide',
      '(B) Paracetamol',
      '(C) Nimesulide',
      '(D) Duloxetina'
    ],
    correctAnswer: 3,
    explanation: "Dor crônica generalizada com fadiga, sono não reparador e queixas cognitivas é o quadro da fibromialgia. O tratamento se apoia em exercício físico e educação; entre os fármacos, usam-se os que modulam as vias descendentes de controle da dor.\n\nA duloxetina é um inibidor da recaptação de serotonina e noradrenalina (IRSN) e é um dos medicamentos com eficácia na fibromialgia, ao lado da amitriptilina e da pregabalina. Das alternativas, é a única com esse mecanismo.",
    commentary: "Corticosteroide (A): anti-inflamatório hormonal; a fibromialgia não é doença inflamatória e o corticoide não traz benefício.\n\nParacetamol (B): analgésico simples, sem ação sobre a recaptação de serotonina e noradrenalina e com pouco efeito nessa dor.\n\nNimesulida (C): anti-inflamatório não esteroide; também não age no mecanismo central de amplificação da dor da fibromialgia.",
    tip: "Fibromialgia: exercício + amitriptilina, duloxetina (IRSN) ou pregabalina. Corticoide e AINE não.",
    reference: 'Expert opinion on pharmacotherapy, 2015.',
    tags: ['reumatologia', 'farmacologia']
  },
  {
    id: 'tp2022-37',
    module: 'Clínica Médica',
    text: "Homem de 65 anos, diabético, com dengue confirmada. Há 5 dias teve febre, cefaleia, mialgia e dor retro-orbitária. Está afebril há 1 dia, mas surgiu dor abdominal forte e contínua, que não melhora com analgésicos. Nega sangramentos. Ao exame, está hemodinamicamente estável, com dor difusa à palpação do abdome; glicemia capilar normal e prova do laço negativa. Qual a classificação e a conduta?",
    options: [
      '(A) Dengue C; reposição volêmica endovenosa imediata (10mL/kg na primeira hora) e internação.',
      '(B) Dengue B; hemograma e se plaquetopenia grave iniciar reposição venosa.',
      '(C) Dengue B; reposição volêmica oral imediata e observação por 6 horas.',
      '(D) Dengue D; reposição volêmica endovenosa (30mL/kg na primeira hora) e UTI.'
    ],
    correctAnswer: 0,
    explanation: "Paciente com dengue no 5º dia, entrando na fase crítica (logo após a queda da febre), surge dor abdominal intensa e contínua. Isso é sinal de alarme. Como ele está hemodinamicamente estável, sem sinais de choque, a classificação é grupo C.\n\nNo grupo C, a hidratação venosa começa imediatamente, sem esperar exames: soro fisiológico 10 mL/kg em 1 hora, com reavaliação clínica e do hematócrito para decidir os próximos passos. O paciente fica em leito de internação até estabilizar, por no mínimo 48 horas segundo o manual do Ministério da Saúde citado. Idade acima de 65 anos e diabetes já o colocariam ao menos no grupo B.",
    commentary: "Hemograma antes de hidratar (B): no grupo C a reposição venosa não pode esperar o resultado de exames; condicionar a hidratação à plaquetopenia está errado.\n\nHidratação oral e 6 horas de observação (C): é a conduta do grupo B, para quem não tem sinal de alarme. Dor abdominal intensa exige hidratação venosa e internação.\n\n30 mL/kg e UTI (D): é a fase de expansão do grupo D (choque ou sangramento grave). O paciente está estável.",
    tip: "Dengue com sinal de alarme e sem choque = grupo C: SF 10 mL/kg na 1ª hora, já, e internação.",
    reference: 'Dengue: diagnóstico e manejo clínico. Ministério da Saúde, 2016.',
    tags: ['infectologia', 'emergência']
  },
  {
    id: 'tp2022-38',
    module: 'Clínica Médica',
    text: 'Homem, 75 anos, queda há 2 meses, usuário de varfarina. TC mostra coleção hipodensa em crescente acompanhando a convexidade cerebral. Qual o diagnóstico?',
    image: '/images/tp2022-38.webp',
    options: [
      '(A) Contusão cerebral',
      '(B) Hematoma epidural',
      '(C) Hematoma subdural crônico',
      '(D) Hemorragia subaracnoidea traumática'
    ],
    correctAnswer: 2,
    explanation: "Idoso anticoagulado (varfarina por fibrilação atrial) que caiu há 2 meses e agora tem confusão, sonolência e piora do estado geral, sem déficit focal grosseiro. A tomografia mostra coleção hipodensa em forma de crescente acompanhando a convexidade: hematoma subdural crônico.\n\nO sangramento vem da ruptura de veias-ponte entre o córtex e os seios durais, favorecida pela atrofia cerebral do idoso e pela anticoagulação; por isso o trauma pode ser mínimo e os sintomas aparecerem semanas depois. Com o tempo o coágulo se liquefaz e forma membranas, e a coleção fica hipodensa na TC. A conduta inclui reverter a anticoagulação e avaliar drenagem neurocirúrgica.",
    commentary: "Contusão cerebral (A): lesão dentro do parênquima, geralmente em polos frontais e temporais, com focos hiperdensos de sangue, logo após o trauma.\n\nHematoma epidural (B): coleção aguda, hiperdensa e biconvexa (em lente), por lesão arterial (meníngea média) associada a fratura, com intervalo lúcido de horas, não de meses.\n\nHemorragia subaracnoidea traumática (D): sangue hiperdenso nos sulcos e cisternas, na fase aguda, sem formar coleção em crescente.",
    tip: "Idoso, anticoagulado, queda há semanas, crescente hipodenso na TC = hematoma subdural crônico.",
    reference: 'SABISTON. Tratado de cirurgia: A base biológica da prática cirúrgica moderna.',
    tags: ['neurologia', 'cirurgia', 'emergência']
  },
  {
    id: 'tp2022-39',
    module: 'Clínica Médica',
    text: 'Gestante, 27 anos, com 12 semanas de gestação, apresenta a seguinte sorologia de hepatite B: HBsAg não reagente, anti-HBsAg reagente, anti-HBcAg não reagente. Qual a melhor avaliação?',
    options: [
      '(A) Hepatite B crônica.',
      '(B) Paciente vacinada.',
      '(C) Hepatite B em fase imunorreativa.',
      '(D) Paciente com Hepatite B curada.'
    ],
    correctAnswer: 1,
    explanation: "Para ler a sorologia da hepatite B, três marcadores bastam: HBsAg indica infecção atual; anti-HBc indica contato prévio com o vírus; anti-HBs indica imunidade.\n\nAqui o HBsAg é negativo (sem infecção), o anti-HBc é negativo (nunca teve contato com o vírus) e o anti-HBs é positivo (imune). A única forma de ter anti-HBs sem anti-HBc é a vacina, que contém apenas o antígeno de superfície. A gestante está vacinada e protegida; o recém-nascido seguirá a rotina de vacina ao nascer.",
    commentary: "Hepatite B crônica (A): exigiria HBsAg positivo por mais de 6 meses e anti-HBc positivo; na fase de imunotolerância há HBeAg positivo e transaminases normais.\n\nFase imunorreativa (C): também tem HBsAg e anti-HBc positivos, agora com transaminases elevadas e inflamação hepática.\n\nHepatite B curada (D): quem teve a infecção mantém o anti-HBc positivo junto com o anti-HBs; o anti-HBc negativo afasta contato com o vírus.",
    tip: "Anti-HBs isolado (HBsAg e anti-HBc negativos) = vacinado. Anti-HBs + anti-HBc = curado.",
    reference: 'Infectologia. Bases clínicas e tratamento Reinaldo Salomão.',
    tags: ['infectologia', 'hepatologia']
  },
  {
    id: 'tp2022-40',
    module: 'Clínica Médica',
    text: "Homem de 42 anos com tosse seca há 6 meses, que piora aos grandes esforços e ao deitar. A radiografia de tórax mostra imagem retrocardíaca com nível hidroaéreo. Qual exame complementar é necessário para avaliar a causa da tosse?",
    image: '/images/tp2022-40.webp',
    options: [
      '(A) Angiografia torácica',
      '(B) Broncoscopia com lavado',
      '(C) Ecodopplercardiograma',
      '(D) Endoscopia digestiva alta'
    ],
    correctAnswer: 3,
    explanation: "Tosse seca há 6 meses é tosse crônica (mais de 8 semanas). A piora ao deitar e aos grandes esforços sugere refluxo, e a radiografia mostra imagem retrocardíaca com nível hidroaéreo, que corresponde a estômago herniado no tórax: hérnia de hiato.\n\nA hérnia de hiato favorece a doença do refluxo gastroesofágico, uma das principais causas de tosse crônica com radiografia de pulmão sem lesão parenquimatosa. O exame que avalia a hérnia e as lesões de refluxo (esofagite, esôfago de Barrett) é a endoscopia digestiva alta.",
    commentary: "Angiografia torácica (A): investiga vasos (aneurisma, tromboembolismo), sem suspeita no caso.\n\nBroncoscopia com lavado (B): é útil quando há lesão no parênquima ou nas vias aéreas, como massa, infecção ou suspeita de corpo estranho; a imagem aqui é digestiva.\n\nEcodopplercardiograma (C): não há sinais de doença cardíaca; a imagem retrocardíaca com nível hidroaéreo não é do coração.",
    tip: "Nível hidroaéreo atrás do coração na radiografia = hérnia de hiato: peça endoscopia digestiva alta.",
    reference: 'Michaudet C, Malaty J. Chronic Cough: Evaluation and Management. Am Fam Physician. 2017.',
    tags: ['gastroenterologia', 'pneumologia']
  },
  {
    id: 'tp2025-21',
    module: 'Clínica Médica',
    text: 'Homem de 52 anos, hipertenso e tabagista, procura pronto-socorro de hospital de referência que tem todos os recursos disponíveis, com dor torácica intensa em aperto há 40 minutos, irradiada para o braço esquerdo. Ao exame físico, tem sudorese profusa, palidez, FC = 65bpm e PA = 140/90mmHg. A ausculta cardiorrespiratória não tem alterações. Realizou o ECG abaixo: Já tendo administrado AAS, clopidogrel e heparina, a próxima conduta deve ser:',
    options: [
      '(A) Iniciar imediatamente trombólise com alteplase.',
      '(B) Encaminhar para cineangiocoronariografia em até 24 horas.',
      '(C) Encaminhar para angioplastia primária em até 90 minutos.',
      '(D) Administrar nitrato sublingual e acompanhar curva enzimática.'
    ],
    correctAnswer: 2,
    explanation: 'O IAM com supradesnivelamento do ST é uma emergência cardiovascular, e a estratégia de reperfusão imediata de escolha é a angioplastia primária em até 90 minutos.',
    commentary: 'O IAM com supradesnivelamento do ST é uma emergência cardiovascular, e a estratégia de reperfusão deve ser imediata. O tratamento de escolha é a angioplastia primária, desde que possa ser realizada em até 90 minutos. A trombólise é alternativa se a angioplastia primária não estiver disponível.',
    reference: 'Diretriz de Síndromes Coronarianas Agudas da Sociedade Brasileira de Cardiologia (SBC)',
    tags: ['cardiologia', 'emergência'],
    image: '/images/tp2025-21.webp'
  },
  {
    id: 'tp2025-22',
    module: 'Clínica Médica',
    text: 'Mulher de 35 anos dá entrada ao serviço de urgência de um hospital de referência da região, com queixa de dispneia súbita e dor torácica de caráter pleurítica, há 6 horas. Faz uso de anticoncepcional oral com estrogênio há 4 anos. Ao exame físico, apresenta taquipneia (24irpm), taquicardia (112bpm), saturação de oxigênio 92% em ar ambiente e pressão arterial de 110/70mmHg. A ausculta pulmonar é normal. Em membros inferiores possui edema assimétrico de membro inferior direito, com dor à palpação. Após admissão e monitorização inicial, a conduta inicial mais adequada para essa paciente é:',
    options: [
      '(A) Solicitar ecocardiograma transtorácico.',
      '(B) Realizar trombólise com alteplase.',
      '(C) Solicitar dosagem sérica d-dímero.',
      '(D) Solicitar angiotomografia de tórax.'
    ],
    correctAnswer: 3,
    explanation: 'Paciente estável com alta probabilidade de TEP pelo escore de Wells (7,5 pontos). O exame de escolha é a angiotomografia de tórax.',
    commentary: 'Paciente se encontra em estabilidade hemodinâmica com alta probabilidade de TEP pelo escore de Wells (7,5 pontos) e desta forma o exame de escolha é a angiotomografia de tórax. O d-dímero não exclui TEP neste cenário de alta probabilidade, e trombólise é reservada para choque/hipotensão.',
    reference: '2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism developed in collaboration with the European Respiratory Society (ERS).',
    tags: ['pneumologia', 'emergência', 'angiologia']
  },
  {
    id: 'tp2025-23',
    module: 'Clínica Médica',
    text: 'Homem de 65 anos, preto, comparece à Unidade Básica de Saúde para seguimento de hipertensão arterial sistêmica. Ele tem diagnóstico de hipertensão há 10 anos e faz uso de losartana 50mg 2x/dia. Nos últimos meses, tem apresentado níveis pressóricos persistentemente elevados (média de 160x100mmHg em três consultas consecutivas), sem sintomas. Ele não tem histórico de doença renal, diabetes ou insuficiência cardíaca. O exame físico revela IMC de 28kg/m² e ausência de sopros carotídeos ou edema periférico. A conduta indicada para esse paciente é:',
    options: [
      '(A) Associar anlodipino 5mg/dia ao esquema atual.',
      '(B) Substituir losartana por enalapril 10mg 2x/dia.',
      '(C) Associar atenolol 25mg/dia ao esquema atual.',
      '(D) Substituir losartana por hidroclorotiazida 25mg/dia.'
    ],
    correctAnswer: 0,
    explanation: 'Em pacientes da raça negra com hipertensão não controlada em monoterapia com BRA, a associação de um bloqueador de canais de cálcio (como anlodipino) ou diuréticos tiazídicos é recomendada e mais eficaz.',
    commentary: 'Associar um bloqueador de canal de cálcio, como anlodipino, ao esquema atual é a melhor conduta. Diretrizes recomendam terapia combinada para hipertensão não controlada, especialmente em pacientes negros, que tendem a responder melhor à combinação de bloqueadores de canal de cálcio e diuréticos, em vez de bloqueadores do sistema renina-angiotensina isolados.',
    reference: 'Diretriz Brasileira de Hipertensão Arterial 2020 – Sociedade Brasileira de Cardiologia (SBC)',
    tags: ['cardiologia', 'parâmetros clínicos']
  },
  {
    id: 'tp2025-24',
    module: 'Clínica Médica',
    text: 'Adolescente de 15 anos, com história de febre reumática, apresenta dispneia aos pequenos esforços e sopro diastólico em foco mitral. O ecocardiograma evidencia área valvar mitral de 0,9cm² e gradiente médio de 12mmHg. A conduta indicada nesse caso é:',
    options: [
      '(A) Realizar cirurgia de troca valvar, preferencialmente.',
      '(B) Prescrever anticoagulação oral isolada.',
      '(C) Indicar valvoplastia percutânea com balão.',
      '(D) Prescrever ácido acetilsalicílico e atorvastatina.'
    ],
    correctAnswer: 2,
    explanation: 'A valvoplastia percutânea por balão é indicada em pacientes sintomáticos com estenose mitral reumática grave com anatomia favorável.',
    commentary: 'A valvoplastia percutânea é indicada em pacientes sintomáticos com estenose mitral reumática e anatomia favorável. A troca valvar é reservada para casos graves, com anatomia inadequada para valvoplastia.',
    reference: 'Atualização das Diretrizes Brasileiras de Valvopatias – 2020',
    tags: ['cardiologia', 'pediatria']
  },
  {
    id: 'tp2025-25',
    module: 'Clínica Médica',
    text: 'Homem de 53 anos procura a Unidade de Emergência, por apresentar palpitações e tontura há 4 horas. Refere que os sintomas começaram durante uma discussão calorosa em seu trabalho. Nega dor torácica ou dispneia e ao exame físico apresenta: pressão arterial 123x75mmHg, frequência cardíaca 182bpm, saturação de oxigênio 98%, sem sinais de baixo débito cardíaco ou congestão. O paciente é alocado em sala de emergência e monitorizado. Realizado o eletrocardiograma abaixo: A conduta indicada para esse caso é:',
    options: [
      '(A) Manobra de Valsalva modificada.',
      '(B) Cardioversão elétrica sincronizada.',
      '(C) Amiodarona intravenosa em dose de ataque.',
      '(D) Betabloqueador para controle de frequência cardíaca.'
    ],
    correctAnswer: 0,
    explanation: 'Por se tratar de uma taquiarritmia estável de QRS estreito e intervalo RR regular, sem onda P (taquicardia paroxística supraventricular), a conduta inicial recomendada é realizar a manobra de Valsalva modificada ou outra manobra vagal.',
    commentary: 'Por se tratar de uma taquiarritmia de QRS estreito e intervalo RR regular, sem onda P (taquicardia paroxística supraventricular) em um paciente estável hemodinamicamente, segundo o algoritmo do ACLS, a melhor conduta para este paciente é realizar a manobra de Valsalva modificada ou qualquer outra manobra vagal. A cardioversão sincronizada seria para instabilidade.',
    reference: 'Manual do suporte avançado de vida ACLS',
    tags: ['cardiologia', 'emergência'],
    image: '/images/tp2025-25.webp'
  },
  {
    id: 'tp2025-26',
    module: 'Clínica Médica',
    text: 'Homem de 65 anos, tabagista atual e com antecedente de DPOC, procura PS devido a piora aguda da tosse, aumento do volume de expectoração com coloração mais escura que seu padrão habitual, sem febre. Teve outros dois quadros similares nos últimos doze meses. Ao exame físico, cianose com saturação de O2 = 86%, roncos difusos e frequência respiratória = 30ipm. A conduta adequada para seu tratamento é:',
    options: [
      '(A) Amoxacilina + clavulanato oral e internação hospitalar.',
      '(B) Ciprofloxacina endovenosa em hospital-dia.',
      '(C) Claritromicina endovenosa em hospital-dia.',
      '(D) Levofloxacina endovenosa e internação hospitalar.'
    ],
    correctAnswer: 3,
    explanation: 'O paciente possui perfil exacerbador de DPOC clássico, com indícios de hipoxemia severa (SatO2 = 86%), acidose provável e alto risco para Pseudomonas, exigindo internação para antibioticoterapia endovenosa de largo espectro (Levofloxacina).',
    commentary: 'O paciente apresenta perfil exacerbador com alto risco para pseudomonas e hipoxemia acentuada que exige tratamento inicialmente endovenoso com levofloxacina (quinolona respiratória) e internação hospitalar.',
    reference: 'PCDT – DPOC – Ministério da Saúde 2022; GOLD – COPD – 2025',
    tags: ['pneumologia', 'infectologia', 'emergência']
  },
  {
    id: 'tp2025-27',
    module: 'Clínica Médica',
    text: 'ASL, mulher cis, 19 anos, procura atendimento na Unidade Básica de Saúde devido a crises de falta de ar. Informa ter recebido o diagnóstico de asma em atendimento médico recente no Pronto Atendimento, mas não lhe foi prescrito nenhum medicamento para tratamento em domicílio. Refere que suas crises estão presentes há um mês, são predominantemente noturnas e está acordando duas a três vezes por semana por causa da falta de ar e tosse. De acordo com o Protocolo Clínico e Diretrizes Terapêuticas para Asma, de maio de 2021, a conduta farmacológica inicial preferencial para essa paciente é:',
    options: [
      '(A) Beclometasona dose baixa + formoterol 6mcg quando tiver sintomas.',
      '(B) Beclometasona dose baixa diária e salbutamol de resgate.',
      '(C) Budesonida dose média + formoterol de manutenção e salbutamol de resgate.',
      '(D) Budesonida dose média + formoterol de manutenção e prednisona via oral.'
    ],
    correctAnswer: 2,
    explanation: 'A paciente apresenta sintomas frequentes com despertares noturnos recorrentes (Etapa 3), requerendo corticoide inalatório de manutenção associado a LABA e broncodilatador de curta ação para resgate.',
    commentary: 'De acordo com as diretrizes do Ministério da Saúde para o manejo da asma (2021), a conduta inicial preferencial requer corticoide inalatório associado a LABA (Budesonida dose média + formoterol de manutenção) e uso de SABA (salbutamol) de resgate.',
    reference: 'Protocolos Clínicos e Diretrizes Terapêuticas, do Ministério da Saúde, para Manejo da Asma - 2021',
    tags: ['pneumologia']
  },
  {
    id: 'tp2025-28',
    module: 'Clínica Médica',
    text: 'Paciente do sexo masculino, 55 anos, tabagista ativo acumulando carga tabágica de 60 anos-maço. Em tomografia de tórax de baixa dose, lesão sólida, em brônquio principal direito, expansiva, com padrão de crescimento concêntrico e atelectasia do segmento broncopulmonar correspondente. Escolha o método diagnóstico mais indicado para esse caso:',
    options: [
      '(A) Encaminhamento para serviço de apoio diagnóstico e terapêutico para realizar PET Scan, para definição diagnóstica.',
      '(B) Encaminhamento para equipe de radiologia intervencionista para biopsia pulmonar transtorácica.',
      '(C) Exame de escarro e encaminhamento para laboratório de apoio da atenção primária para citologia.',
      '(D) Encaminhamento para serviço especializado de broncoscopia para escovado e biópsia brônquica.'
    ],
    correctAnswer: 3,
    explanation: 'A broncoscopia com escovado e biópsia brônquica é o método de escolha para lesão pulmonar central/proximal de crescimento concêntrico e atelectasia.',
    commentary: 'Trata-se de uma lesão proximal de brônquio principal direito com alto risco de origem epidermoide. Nestas condições, a abordagem endobrônquica via broncoscopia é preferencial e mais sensível/segura que punção transtorácica.',
    reference: 'Recomendações da Sociedade Brasileira de Cirurgia Torácica, Sociedade Brasileira de Pneumologia e Tisiologia e Colégio Brasileiro de Radiologia e Diagnóstico por Imagem para o rastreamento do câncer de pulmão no Brasil – 2024',
    tags: ['pneumologia', 'oncologia']
  },
  {
    id: 'tp2025-29',
    module: 'Clínica Médica',
    text: 'Paciente estudante universitária, com 19 anos, procurou atendimento de emergência com febre e sintomas gripais (coriza hialina, cefaleia, tosse sem expectoração) evoluindo há quatro dias, que pioraram nas últimas 24 horas, com dispneia e sensação de opressão torácica difusa. Ao exame, hemodinamicamente estável, com FR = 35ipm, SpO2 = 92% e ausculta pulmonar preservada. O teste para COVID-19 resultou positivo. No hemograma há linfocitose discreta. Além da suplementação de oxigênio e internação hospitalar, neste caso está indicado administrar:',
    options: [
      '(A) Dexametasona 6mg uma vez ao dia, por 10 dias.',
      '(B) Enoxaparina 1mg/kg a cada 12 horas durante a internação.',
      '(C) Azitromicina 500mg uma vez ao dia, por 7 dias.',
      '(D) Levofloxacina 750mg uma vez ao dia, por 10 a 14 dias.'
    ],
    correctAnswer: 0,
    explanation: 'Pacientes internados por COVID-19 que necessitam de oxigênio suplementar (SpO2 92%) têm indicação formal de corticoide sistêmico, com preferência para Dexametasona 6mg ao dia por 10 dias.',
    commentary: 'De acordo com as diretrizes de tratamento farmacológico para pacientes COVID-19 hospitalizados (SBTI/AMIB), a dexametasona na dose de 6mg diárias por via oral ou endovenosa por 10 dias mostrou clara redução de mortalidade em pacientes sob oxigenoterapia suplementar. Anticoagulação plena ou antibióticos empíricos sem suspeita de superinfecção bacteriana não devem ser utilizados rotineiramente.',
    reference: 'Falavigna et al: Brazilian Guidelines for the pharmacological treatment of patients hospitalized with COVID-19. Rev Bras Ter Intensiva. 2022.',
    tags: ['infectologia', 'pneumologia', 'diretrizes médicas']
  },
  {
    id: 'tp2025-30',
    module: 'Clínica Médica',
    text: 'Mulher de 30 anos, sem antecedentes, procurou PA devido a três dias de febre não medida, náuseas e dores musculares, piores em região lombar esquerda, inespecífica. Ao exame físico, tem PA = 130/70mmHg, FC = 98bpm, T = 38,2ºC, Peso = 60kg, sinal de Giordano + à esquerda, sem outras alterações. USG renal sem alterações. Exame de urina revela leucocitúria, discreta hematúria, proteinúria discreta e presença de cilindros leucocitários. A medicação a ser iniciada neste momento é:',
    options: [
      '(A) Fosfomicina 3g oral em dose única.',
      '(B) Norfloxacina 400mg oral a cada 12 horas.',
      '(C) Ciprofloxacina 400mg endovenosa a cada 12 horas.',
      '(D) Metilprednisolona 1g endovenoso a cada 24 horas.'
    ],
    correctAnswer: 2,
    explanation: 'O quadro clínico de febre, náuseas, sinal de Giordano positivo e cilindros leucocitários na urina é típico de Pielonefrite Aguda. A via endovenosa com Ciprofloxacina é a mais apropriada na presença de náuseas.',
    commentary: 'Trata-se de paciente com quadro clínico de pielonefrite aguda (lombalgia, febre, náuseas, Giordano +), com laboratório de urina com cilindros leucocitários (patognomônicos de acometimento do parênquima renal). Devido a náuseas e risco de intolerância à via oral, a terapêutica empírica deve iniciar por via endovenosa com fluorquinolona.',
    reference: 'Martins; HC-FMUSP: Clínica Médica, Volume 3, Seção 3, Capítulo 17 (Infecções do Trato Urinário).',
    tags: ['nefrologia', 'infectologia', 'urologia'],
    image: '/images/tp2025-30.webp'
  },
  {
    id: 'tp2025-31',
    module: 'Clínica Médica',
    text: 'Homem de 58 anos, portador de doença renal crônica estágio 5, dá entrada na emergência com dispneia intensa, edema generalizado e náuseas. Exames: potássio 7,0mEq/L; ureia 192mg/dL, creditiantina 8,5mg/dL e ECG ritmo sinusal, normal. A conduta indicada para este paciente é:',
    options: [
      '(A) Restrição hídrica rigorosa e uso de furosemida em altas doses.',
      '(B) Iniciar hemodiálise de emergência.',
      '(C) Administração de gluconato de cálcio, insulina e glicose.',
      '(D) Expansão volêmica, bicarbonato e repetir exames.'
    ],
    correctAnswer: 1,
    explanation: 'O paciente apresenta indicações clássicas de diálise de urgência (hipercalemia grave de 7,0 mEq/L, sobrecarga volêmica refratária com dispneia importante, além de uremia sintomática com náuseas).',
    commentary: 'O paciente com doença renal crônica terminal (estágio 5) apresenta critérios inequívocos de urgência dialítica. Embora medidas de deslocamento interno do potássio (insulina, glicose) e estabilização de membrana (gluconato de cálcio) sejam temporariamente válidas para evitar arritmias em hipercalemia grave, elas não resolvem a sobrecarga hídrica nem a uremia severa, tornando a hemodiálise de emergência a conduta definitiva e imediata indicada.',
    reference: 'KDIGO Clinical Practice Guideline for Acute Kidney Injury. UpToDate, 2023.',
    tags: ['nefrologia', 'emergência']
  },
  {
    id: 'tp2025-32',
    module: 'Clínica Médica',
    text: 'Mulher, cisgênero, 35 anos, comparece ao ambulatório com diarreia sanguinolenta há três meses, associada a dor abdominal difusa e urgência evacuatória. Relata perda ponderal de 4kg no período. A colonoscopia revela inflamação difusa e contínua da mucosa do reto e do cólon, sem áreas de ulceração profunda. O diagnóstico provável é:',
    options: [
      '(A) Doença celíaca',
      '(B) Doença de Crohn',
      '(C) Síndrome do intestino irritável',
      '(D) Retocolite ulcerativa idiopática'
    ],
    correctAnswer: 3,
    explanation: 'A retocolite ulcerativa idiopática (RCUI) acomete o intestino grosso de maneira contínua, simétrica e superficial (mucosa), cursando com diarreia sanguinolenta e tenesmo.',
    commentary: 'A retocolite ulcerativa idiopática (RCUI) é uma doença inflamatória intestinal crônica caracterizada por inflamação contínua e difusa limitada à mucosa do cólon e reto. A doença de Crohn, por outro lado, apresenta lesões descontínuas (saltatórias), transmurais e com risco de estenoses e fístulas.',
    reference: 'Kornbluth A, Sachar DB. Ulcerative Colitis Practice Guidelines in Adults. Am J Gastroenterol, 2018.',
    tags: ['gastroenterologia', 'patologia']
  },
  {
    id: 'tp2025-33',
    module: 'Clínica Médica',
    text: 'Homem de 52 anos comparece ao ambulatório com queixa de pirose e regurgitação há mais de 10 anos, com piora progressiva nos últimos meses, apesar do uso irregular de inibidor da bomba de prótons. Nega disfagia, odinofagia ou emagrecimento. Relata histórico de tabagismo e consumo regular de álcool. Ao exame físico, sem alterações relevantes. A endoscopia digestiva alta revela metaplasia intestinal na mucosa esofágica distal. Com base nesse caso, a hipótese diagnóstica mais provável é:',
    options: [
      '(A) Esôfago de Barret',
      '(B) Adenocarcinoma de esôfago',
      '(C) Carcinoma espinocelular',
      '(D) Acalasia esofágica'
    ],
    correctAnswer: 0,
    explanation: 'A presença de metaplasia intestinal especializada na mucosa do esôfago distal em resposta ao refluxo crônico define o Esôfago de Barrett.',
    commentary: 'O Esôfago de Barrett é uma complicação da doença do refluxo gastroesofágico (DRGE) crônica caracterizada pela metaplasia intestinal do epitélio escamoso esofágico. Embora haja um risco aumentado de progressão para adenocarcinoma de esôfago, a biópsia atual descreve apenas metaplasia intestinal distal, sem menção a massas ou displasias graves.',
    reference: 'Shaheen, N.J. et al. ACG Clinical Guideline: Diagnosis and Management of Barrett’s Esophagus. Am J Gastroenterol. 2016.',
    tags: ['gastroenterologia', 'patologia']
  },
  {
    id: 'tp2025-34',
    module: 'Clínica Médica',
    text: 'Uma paciente diabética insulino-dependente, de 19 anos, tem histórico de diarreia sem sangue ou pus, distensão abdominal, perda ponderal não quantificada e flatulência iniciadas há 4 meses. Exames solicitados pelo médico do posto de saúde mostraram hematócrito de 25%; hemoglobina de 7g/dL, VCM de 67 e ferritina de 3ng/mL. A pesquisa de gordura fecal quantitativa é de 10g. De acordo com a principal hipótese diagnóstica, o próximo exame deve ser:',
    options: [
      '(A) Cultura de aspirado do delgado',
      '(B) Dosagem de IgA antitransglutaminase tecidual',
      '(C) Colonoscopia',
      '(D) Trânsito intestinal baritado'
    ],
    correctAnswer: 1,
    explanation: 'A associação de DM tipo 1 e Doença Celíaca é comum. A anemia ferropriva microcítica marcante refratária e a esteatorreia (gordura fecal de 10g) corroboram a hipótese, devendo-se solicitar anticorpo tTG IgA.',
    commentary: 'A suspeita principal é Doença Celíaca (frequente associação imunológica com DM1), que acomete o epitélio do delgado proximal, prejudicando a absorção de ferro (anemia grave) e nutrientes. O teste sorológico de escolha pela excelente sensibilidade e especificidade é a dosagem de IgA antitransglutaminase tecidual.',
    reference: 'Rubio-Tapia & col. ACG Guidelines: Diagnosis and Management of Celiac Disease. Am J Gastroenterol. 108, 2013.',
    tags: ['gastroenterologia', 'endocrinologia', 'parâmetros clínicos']
  },
  {
    id: 'tp2025-35',
    module: 'Clínica Médica',
    text: 'Homem de 48 anos procura ambulatório por fadiga persistente e desconforto abdominal progressivo há dois anos. Antecedente de hepatite B diagnosticada há 10 anos, usando antiviral irregularmente. Ao exame físico, discretamente ictérico, com telangectasias cutâneas e esplenomegalia palpável. Exames laboratoriais: elevação de transaminases, hipoalbuminemia e trombocitopenia. O quadro clínico sugere:',
    options: [
      '(A) Reativação de replicação viral, sem dano hepático significativo.',
      '(B) Hepatopatia crônica viral com cirrose compensada.',
      '(C) Transformação neoplásica com sinais de alarme.',
      '(D) Cirrose grave com iminência de insuficiência hepática aguda.'
    ],
    correctAnswer: 1,
    explanation: 'A evolução de hepatite B crônica com sinais de hipertensão portal (esplenomegalia descrita) associados a hipoalbuminemia, transaminases elevadas e plaquetopenia sugere cirrose compensada.',
    commentary: 'Os achados do exame físico (telangiectasias, esplenomegalia) e do laboratório (plaquetopenia, hipoalbuminemia e transaminases alteradas) traduzem evolução crônica para cirrose com hipertensão portal já estabelecida. Como o paciente não apresenta ascite rebelde, encefalopatia de repetição ou sangramentos, classifica-se em cirrose compensada neste momento.',
    reference: 'HARRISON\'S Principles of Internal Medicine. 21. ed. McGraw-Hill. Sociedade Brasileira de Hepatologia, 2019.',
    tags: ['hepatologia', 'infectologia']
  },
  {
    id: 'tp2025-36',
    module: 'Clínica Médica',
    text: 'Adolescente de 16 anos é levado ao pronto-socorro com febre alta, cefaleia intensa, rigidez de nuca e rebaixamento do nível de consciência. Apresenta ainda vômitos em jato e pressão arterial de 150/100mmHg. O exame de fundo de olho revela papiledema. A conduta inicial mais apropriada é:',
    options: [
      '(A) Administrar corticoide isolado para reduzir a resposta inflamatória.',
      '(B) Coletar hemoculturas e aguardar o resultado antes de iniciar antibiótico.',
      '(C) Realizar punção lombar imediatamente para análise do líquido cefalorraquidiano.',
      '(D) Iniciar antibioticoterapia empírica e solicitar tomografia de crânio.'
    ],
    correctAnswer: 3,
    explanation: 'Os sinais de hipertensão intracraniana grave (papiledema, rebaixamento e vômitos) contraindicam formalmente a realização de punção lombar imediata por risco de herniação. Deve-se iniciar antibioterapia e solicitar tomografia.',
    commentary: 'Na meningite bacteriana presumível com sinais focais ou de hipertensão intracraniana (HIC), a punção lombar cega é proscrita sob alto risco de herniação. Coleta-se hemocultura e institui-se de modo imediato antibioticoterapia empírica concomitante a corticoide, procedendo após à neuroimagem craniana de controle.',
    reference: 'Medicina Interna de Harrison. 21ª ed. Porto Alegre: Artmed; 2023.',
    tags: ['infectologia', 'neurologia', 'emergência']
  },
  {
    id: 'tp2025-37',
    module: 'Clínica Médica',
    text: 'Paciente de 72 anos, hipertenso e diabético, é levado ao Pronto-Socorro devido a um início súbito de fraqueza no lado direito do corpo e dificuldade para falar, ocorrido há aproximadamente 2 horas. Ao exame, PA 160/100mmHg, FC 80bpm, hemiparesia direita, desvio da rima labial para a esquerda e dificuldade em compreender comandos verbais. A tomografia de crânio, sem contraste, não evidencia sangramento. A conduta inicial indicada é:',
    options: [
      '(A) Administração de anti-hipertensivos para reduzir, imediatamente, a pressão arterial abaixo de 140/90mmHg.',
      '(B) Administração de heparina endovenosa para prevenir novos eventos trombóticos.',
      '(C) Administração de trombolítico intravenoso com alteplase, após exclusão de contraindicações.',
      '(D) Observação clínica e início de antiagregação plaquetária após 24 horas.'
    ],
    correctAnswer: 2,
    explanation: 'Paciente apresenta sintomas súbitos em janela altamente ideal para trombólise venosa isquêmica (2 horas do início dos sintomas, limite de 4,5h) após exclusão de hemorragia por tomografia sem contraste.',
    commentary: 'Tratando-se de acidente vascular cerebral isquêmico agudo em janela (até 4,5 horas), na ausência de contraindicações formais e com TC sem sinal de hemorragia, a infusão de alteplase intravenosa é a primeira linha terapêutica de reperfusão, visando resgatar a penumbra isquêmica. A pressão não requer tratamento agressivo exceto se PA > 185/110 mmHg no pré-rtPA.',
    reference: 'Diretriz do Ministério da Saúde e Powers, W. J. et al. 2021 Guidelines for the Early Management of Patients With Acute Ischemic Stroke.',
    tags: ['neurologia', 'emergência']
  },
  {
    id: 'tp2025-38',
    module: 'Clínica Médica',
    text: 'Homem, cisgênero, 68 anos, comparece ao ambulatório com queixa de tremor em repouso na mão direita há um ano, associado a lentidão dos movimentos e rigidez. O exame neurológico revela bradicinesia, rigidez em roda denteada e tremor de repouso assimétrico. Não há sinais de paralisia, déficits sensoriais ou alteração da consciência. Qual é o diagnóstico mais provável?',
    options: [
      '(A) Tremor essencial',
      '(B) Doença de Parkinson',
      '(C) Esclerose múltipla',
      '(D) Demência com corpos de Lewy'
    ],
    correctAnswer: 1,
    explanation: 'O quadro clínico de bradicinesia, tremor assimétrico de repouso e rigidez em roda denteada sem prejuízos sensitivos iniciais firma o diagnóstico da Doença de Parkinson.',
    commentary: 'O parkinsonismo clássico é definido por bradicinesia associada ao tremor de repouso e rigidez. A instalação tipicamente assimétrica corrobora o diagnóstico de Doença de Parkinson primária. O tremor essencial piora à movimentação e não tem hipertonia plástica.',
    reference: 'Jankovic J. Parkinson’s disease: clinical features and diagnosis. J Neurol Neurosurg Psychiatry, 2020.',
    tags: ['neurologia', 'geriatria']
  },
  {
    id: 'tp2025-39',
    module: 'Clínica Médica',
    text: 'Um homem de 40 anos, raça negra, é admitido no hospital com fadiga intensa, icterícia e urina escura. O hemograma revela anemia (Hb 7,0g/dL), reticulocitose, bilirrubina indireta elevada e DHL elevado. O esfregaço de sangue periférico mostra esferócitos. A conduta mais adequada para esse caso é:',
    options: [
      '(A) Solicitar dosagem de ferritina e iniciar reposição de ferro oral.',
      '(B) Realizar teste de Coombs direto e considerar o uso de corticosteroides.',
      '(C) Prescrever transfusão de concentrado de hemácias imediatamente.',
      '(D) Solicitar eletroforese de hemoglobina e iniciar hidroxiureia.'
    ],
    correctAnswer: 1,
    explanation: 'Anemia aguda com marcadores hemolíticos acentuados (reticulócitos, DHL e BI altos) associados a esferócitos direciona para Anemia Hemolítica Autoimune (AHAI), devendo-se realizar teste de Coombs direto e prescrever imunossupressão primária.',
    commentary: 'A presença de esferócitos no esfregaço de sangue periférico em meio a marcadores exacerbados de hemólise pode corresponder à esferocitose hereditária ou Anemia Hemolítica Autoimune (AHAI). No adulto com instalação aguda de sintomas, o teste de Coombs direto é a chave diagnóstica inicial e a terapia de escolha primária de controle imunogênico utiliza corticoides.',
    reference: 'Hoffman, R., et al. Hematology: Basic Principles and Practice. 7th ed. Elsevier.',
    tags: ['hematologia', 'imunologia']
  },
  {
    id: 'tp2025-40',
    module: 'Clínica Médica',
    text: 'Paciente do sexo feminino, 32 anos, há 4 dias apresentando febre aferida, mialgia, cefaleia e náuseas, conduzida como dengue após NS1 reagente no 2º dia de sintomas. Hoje comparece para reavaliação clínica. Ao exame físico, paciente consciente e orientada, porém sonolenta, com tempo de enchimento capilar de 4 segundos, extremidades frias, frequência cardíaca 120bpm e pressão arterial 100x60mmHg. A conduta imediata é:',
    options: [
      '(A) Iniciar hidratação EV com SF 0,9% 20mL/kg em até 20 minutos e solicitar leito de terapia intensiva.',
      '(B) Iniciar hidratação EV com SF 0,9% 20mL/kg em 6 horas, com alta e reavaliação em 24 horas.',
      '(C) Iniciar hidratação EV com SF 0,9% 20mL/kg em 6 horas e internação em leito de enfermaria.',
      '(D) Iniciar expansão volêmica com albumina 5% EV e solicitar leito de terapia intensiva.'
    ],
    correctAnswer: 0,
    explanation: 'A paciente exibe sinais nítidos de choque circulatório hipotensivo por Dengue Grave (Grupo D). A conduta urgente de escolha é a infusão rápida de cristaloide (20 mL/kg em 20 minutos) e leito de terapia intensiva.',
    commentary: 'Conforme as diretrizes e fluxograma de manejo clínico de dengue para 2025 emitidos pelo Ministério da Saúde, a vigência de choque circulatório ativo (extremidades frias, perfusão de 4s, taquicardia descrita e alteração de nível com sonolência) eleva a paciente imediatamente ao Grupo D de gravidade clínica, determinando reidratação volêmica agressiva inicial ultra-rápida (20 mL/kg sob controle restrito em até 20 minutos) acompanhado de transferência de leito monitorizado em UTI.',
    reference: 'Fluxograma para o manejo clínico da dengue – Ministério da Saúde – 28/02/2025.',
    tags: ['infectologia', 'dengue', 'emergência']
  },
  {
    id: 'tp2021-21',
    module: 'Clínica Médica',
    text: 'Mulher, 56 anos, obesa, hipertensa e diabética, foi atendida no Pronto Atendimento com quadro agudo de afasia e hemiparesia direita iniciado há uma hora. PA = 150 x 73 mmHg, FC = 90 bpm, ritmo cardíaco irregular. Escore NIHSS (National Institutes of Health Stroke Scale) = 19. Tomografia computadorizada craniana: normal. O próximo passo no manejo dessa paciente é:',
    options: [
      '(A) Hemicraniectomia descompressiva.',
      '(B) Anticoagulação com heparina endovenosa.',
      '(C) Trombolítico endovenoso.',
      '(D) Antiagregação dupla com aspirina e clopidogrel.'
    ],
    correctAnswer: 2,
    explanation: 'A paciente em questão tem apresentação clínica e achado de imagem compatíveis com um acidente vascular cerebral isquêmico. Como o quadro é de instalação recente, alterações na tomografia computadorizada ainda não são detectáveis. Ela é candidata a terapia trombolítica com ativador de plasminogênio tecidual (rt-PA) endovenoso que deve ser iniciado imediatamente.',
    commentary: 'A paciente apresenta déficit neurológico focal compatível com AVC isquêmico agudo em janela (1 hora do início, dentro de 4,5h) e tomografia computada de crânio normal. A terapia de escolha imediata é a trombólise endovenosa com rt-PA (Alteplase). Anticoagulação e dupla antiagregação estão contraindicadas nesta fase imediata pré-trombólise. A hemicraniectomia descompressiva reserva-se a infartos extensos com edema cerebral importante tardio.',
    reference: 'Launes J, Ketonen L. Dense middle cerebral artery sign: an indicator of poor outcome in middle cerebral artery area infarction. J Neurol Neurosurg Psychiatry 1987; 50(11):1550-1552. Pontes-Neto OM, Cougo P, Martins SCO, Abud DG, Nogueira RG, Miranda M, et al. Brazilian guidelines for endovascular treatment of patients with acute ischemic stroke. Arq Neuropsiquiatr 2017; 75 (1): 50-56. Powers WJ, Rabinstein AA, Ackerson T, Adeoye OM, Bambakidis NC, Becker K, et al. Guidelines for the early management of patients with acute ischemic stroke: a guideline for healthcare professionals from the American Heart Association/American Stroke Association. Stroke 2018;49(3):e46-110.',
    tags: ['neurologia', 'emergência']
  },
  {
    id: 'tp2021-22',
    module: 'Clínica Médica',
    text: 'Homem, 48 anos, hepatopata crônico, admitido no Pronto Socorro com confusão mental e agitação há 1 dia. Exame físico: desorientado no tempo e no espaço, ictérico e asteríxis (flapping) presente. Abdome globoso, doloroso à palpação difusa e com sinal do piparote presente. Paracentese diagnóstica: 1.200 leucócitos/mm³ com 80% de polimorfonucleares. Sódio sérico = 130 mEq/L. A conduta adequada para o paciente é:',
    options: [
      '(A) Lactulose oral e cefalosporina de 3ª geração.',
      '(B) Reposição endovenosa de sódio e benzodiazepínico.',
      '(C) Paracentese de alívio e reposição de albumina.',
      '(D) Neomicina oral e restrição hídrica.'
    ],
    correctAnswer: 0,
    explanation: 'O diagnóstico do paciente é hepatopatia crônica complicada com encefalopatia hepática (desorientação e asteríxis), ascite de base com peritonite bacteriana espontânea (PBE) (> 250 polimorfonucleares/mm³ no líquido ascítico) e hiponatremia dilucional. O tratamento da PBE consiste no uso de cefalosporina de 3ª geração e albumina endovenosa, associado à lactulose oral para a encefalopatia.',
    commentary: 'A peritonite bacteriana espontânea (PBE) é definida por > 250 PMN/mm³ no líquido de ascite (neste caso, 80% de 1200 leucócitos = 960 PMN/mm³). O tratamento de escolha envolve cefalosporina de 3ª geração (como Cefotaxima ou Ceftriaxona). Para a encefalopatia hepática concomitante (caracterizada por flapping/asteríxis e confusão), a lactulose oral é a terapêutica de primeira linha para favorecer a excreção intestinal de amônia.',
    reference: 'AUSIELLO, D & GOLDMAN, L. Cecil - Tratado de Medicina Interna. 23ª ed. Rio de Janeiro: Elsevier, 2010. FAUCI, A et al. Harrison Medicina Interna. 18ªed. Rio de Janeiro: McGraw-Hill, 2013.',
    tags: ['gastroenterologia', 'hepatologia', 'infectologia']
  },
  {
    id: 'tp2021-23',
    module: 'Clínica Médica',
    text: 'Homem, 19 anos, comparece ao atendimento em Unidade Básica de Saúde, agendado pela mãe, mas não entende o motivo da consulta. Não demonstra oscilações de humor, como se não sentisse nada, e apresenta fala empobrecida e sem alteração de voz e da expressão facial. Relata sentir “que seu cérebro está vazando e que estão querendo seu mal e que ouve seus vizinhos falando mal dele e estão vigiando-lhe através do chip do celular.” Refere que o apresentador do telejornal lhe manda mensagens por meio das notícias divulgadas na TV dando comandos mentais de como deve agir. Trancou a faculdade de Ciências Sociais há 5 meses. Mãe refere desenvolvimento neuropsicomotor sem alterações; nega uso e abuso prévio de substâncias ilícitas. Das medicações abaixo, a mais indicada no tratamento farmacológico desse paciente é:',
    options: [
      '(A) Sertralina.',
      '(B) Clorpromazina.',
      '(C) Ácido valproico.',
      '(D) Levodopa.'
    ],
    correctAnswer: 1,
    explanation: 'O quadro clínico com delírios (persecutórios, de referência e de influência/controle corporal), alucinações auditivas de vizinhos falando dele, embotamento afetivo (afeto plano) e prejuízo funcional (trancou a faculdade há 5 meses) é altamente característico de esquizofrenia. O tratamento dos sintomas positivos da esquizofrenia é feito com medicações antipsicóticas, como a Clorpromazina.',
    commentary: 'A esquizofrenia é diagnosticada clinicamente na vigência de sintomas psicóticos salientes (delírios de referência, perseguição e comandos mentais de controle, alucinações auditivas) associados a sintomas negativos expressivos (embotamento de afeto facial, ausência de modulação vocal, discurso empobrecido/alogia) persistentes e com comprometimento laboral ou social marcante. Medicamentos antipsicóticos (como a clorpromazina, um antipsicótico típico de primeira geração) são a pedra angular do tratamento.',
    reference: 'Compêndio de psiquiatria: ciências do comportamento e psiquiatria clínica. Sadock B. J, Sdock A V- 9 edição - Porto Alegre: Artmed, 2017. AMERICAN PSYCHIATRIC ASSOCIATION. Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition (DSM-V). Arlington, VA: American Psychiatric Association, 2016.',
    tags: ['psiquiatria']
  },
  {
    id: 'tp2021-24',
    module: 'Clínica Médica',
    image: '/images/tp2021-24.webp',
    text: 'Mulher, 18 anos, queixa-se de dor forte em membros superiores e mãos há 1 dia, sem fator desencadeante, com melhora parcial com dipirona. Refere que já sentiu dor semelhante várias vezes desde a infância. Nega edema, vermelhidão, trauma recente ou febre. Exame físico: bom estado geral, palidez cutâneo mucosa e icterícia (1+/4+). Murmúrio vesicular normal, simétrico e sem ruídos adventícios. Bulhas rítmicas taquicárdicas, com sopro holossistólico em focos tricúspide e mitral. Abdome e membros sem alteração. Hemograma: Hb = 8,3 g/dL; Ht = 26%; VCM = 91 fL; HCM = 29,6 pg; Leucócitos = 10,9 x 10⁶/μL (neutrófilos 72%, linfócitos 28%), Plaquetas = 480.000/mm³; Reticulócitos = 430.000/mm³. O diagnóstico mais provável é:',
    options: [
      '(A) Crise álgica por vaso-oclusão.',
      '(B) Isquemia arterial periférica por hemólise microangiopática.',
      '(C) Isquemia arterial periférica por plaquetose.',
      '(D) Trombose venosa por vaso-oclusão.'
    ],
    correctAnswer: 0,
    explanation: 'A presença de hemácias falcizadas no esfregaço de sangue periférico, associado a anemia hemolítica indica o diagnóstico de anemia falciforme. A complicação de dor em membros é característica de crise álgica por vaso oclusão.',
    commentary: 'A presença de anemia crônica regenerativa (reticulócitos muito elevados), palidez e icterícia flutuante em uma jovem com episódios repetitivos de dores intensas sem fator flogístico local desde a infância é o quadro de apresentação da anemia falciforme (ou outras hemoglobinopatias do complexo falciforme). A crise dolorosa ou álgica resulta do fenômeno de vaso-oclusão microvascular pelas hemácias falcizadas, gerando isquemia tecidual e óssea aguda.',
    reference: 'Tratado de Hematologia. Zago, Marco Antonio - Falcão, Roberto Passetto - Pasquini, Ricardo. 2013.',
    tags: ['hematologia', 'pediatria']
  },
  {
    id: 'tp2021-25',
    module: 'Clínica Médica',
    text: 'Homem, 60 anos, chega ao Pronto Socorro com queixa de dor em hálux direito desde a madrugada, que o fez acordar. Nega trauma no local. Relata ingestão de grande quantidade de carne vermelha e cerveja. Teve três episódios semelhantes no último ano. Nega uso de medicamentos. Exame físico: IMC 32 kg/m², afebril, primeira articulação metatarsofalângica direita com edema, calor local e hiperemia, com muita dor ao toque e à movimentação ativa e passiva. O exame que confirma o diagnóstico mais provável nesse caso é:',
    options: [
      '(A) Dosagem de ácido úrico no sangue.',
      '(B) Contagem de leucócitos no líquido sinovial.',
      '(C) Dosagem de proteína C reativa no sangue.',
      '(D) Pesquisa de cristais intracelulares no líquido sinovial.'
    ],
    correctAnswer: 3,
    explanation: 'Os pacientes com crise álgica da gota referem início agudo de dor intensa, com dificuldade de caminhar e realizar atividades da vida diária, de preferência de madrugada. Há evidência de inflamação aguda na articulação (edema, eritema, calor local). O diagnóstico de certeza da gota é a identificação dos cristais de urato monossódico (UMS) fagocitados por polimorfonucleares (intracelulares) em amostra de material biológico (líquido sinovial).',
    commentary: 'Os pacientes com gota aguda podem apresentar ácido úrico normal em até 63,3% dos casos, devendo-se repetir a dosagem pós-resolução. O padrão de referência indiscutível para o diagnóstico definitivo é o encontro microscópico de cristais de urato monossódico intracelulares fagocitados por leucócitos polimorfonucleares frescos no líquido sinovial.',
    reference: 'CARVALHO, Marco Antonio P. et al. Reumatologia - Diagnóstico e Tratamento. 5. ed. Rio de Janeiro: Guanabara Koogan, 2019. KASPER, D. L. et al, (org.). Medicina interna de Harrison. 19. ed. São Paulo: AMGH Editora, 2017.',
    tags: ['reumatologia']
  },
  {
    id: 'tp2021-26',
    module: 'Clínica Médica',
    text: 'Mulher, 71 anos, é avaliada na Unidade de Pronto Atendimento com quadro febril agudo e dispneia, recebendo o diagnóstico de pneumonia. Não apresenta comorbidades, internações ou procedimentos invasivos recentes. Exame físico: FR = 32 irpm, PA = 100 x 65 mmHg, com desorientação têmporo-espacial. A conduta é:',
    options: [
      '(A) Alta para domicílio e terapia antimicrobiana com betalactâmico.',
      '(B) Internação hospitalar e terapia antimicrobiana com macrolídeo.',
      '(C) Alta para domicílio e terapia antimicrobiana com fluorquinolona.',
      '(D) Internação hospitalar e terapia antimicrobiana com betalactâmico e macrolídeo.'
    ],
    correctAnswer: 3,
    explanation: 'Trata-se de pneumonia comunitária (PAC) em paciente idosa. Utilizando o escore simplificado CRB-65 (Confusão mental, Respiração ≥ 30 irpm, Blood pressure normal, Idade ≥ 65), a paciente soma 3 pontos (idade, FR e confusão), o que indica alta mortalidade e necessidade de hospitalização urgente com uso de betalactâmico associado a macrolídeo ou fluoroquinolona respiratória.',
    commentary: 'Analisando os critérios de internação na PAC, a pontuação de 3 a 4 no escore clínico CRB-65 desaconselha formalmente o cuidado puramente domiciliar devido à elevada morbimortalidade associada. A conduta adequada exige necessariamente internação em enfermaria geral ou sob vigilância e terapia mista antibiótica (β-lactâmico associado a macrolídeo).',
    reference: 'Corrêa RA, Costa AN, Lundgren F, Michelin L, Figueiredo MR, Holanda M, Gomes M, Teixeira PJZ, Martins R, Silva R, Athanasio RA, Silva RM, Pereira MC. Recomendações para o manejo da pneumonia adquirida na comunidade 2018. J Bras Pneumol. 2018;44(5):405 424.',
    tags: ['pneumologia', 'infectologia', 'geriatria']
  },
  {
    id: 'tp2021-27',
    module: 'Clínica Médica',
    image: '/images/tp2021-27.webp',
    text: 'Adolescente, 15 anos, atendido em Unidade Básica de Saúde por lesão assintomática na face, que surgiu há 1 ano e não regrediu com medicamentos tópicos. Exame: lesão arredondada na região mandibular esquerda, medindo 4,5 cm no maior eixo, com borda de 0,5 cm de largura, levemente elevada, contínua na maior extensão, entremeada por alguns tubérculos e pequenos trechos descontínuos, de coloração eritematosa-ferruginosa e centro mais claro e discretamente atrófico. O diagnóstico mais provável é:',
    options: [
      '(A) Tinea corporis.',
      '(B) Granuloma anular.',
      '(C) Sarcoidose.',
      '(D) Hanseníase tuberculóide.'
    ],
    correctAnswer: 3,
    explanation: 'As características da lesão cutânea granulomatosa única na face, arredondada com bordas contendo tubérculos, coloração eritematosa-ferruginosa e centro atrófico claro colocam como principal hipótese diagnóstica a hanseníase tuberculoide.',
    commentary: 'Sendo o Brasil altamente endêmico, as características morfológicas descritas são a assinatura da hanseníase tuberculoide. A lesão anular crônica de contorno tuborcular e centro discretamente atrófico indica o padrão granulomatoso focal específico no polo de boa imunidade celular do paciente. A preservação aparente de sensibilidade na face ocorre pela rica inervação anastomótica local que mascara perdas sensitivas superficiais precoces.',
    reference: 'Brasil. Ministério da Saúde. Diretrizes para vigilância, atenção e eliminação da hanseníase como problema de saúde pública. Brasília-DF. 2016. Brasil. Ministério da Saúde. Guia Prático sobre a Hanseníase. Brasília-DF. 2017.',
    tags: ['dermatologia', 'infectologia']
  },
  {
    id: 'tp2021-28',
    module: 'Clínica Médica',
    text: 'Mulher, 25 anos, com prurido no corpo todo há 10 dias. Trabalha em fábrica de peças para automóveis, manipulando graxa e solventes. Tem um filho de oito anos que passa o dia na escola e que também está se coçando muito, principalmente à noite. As lesões são pápulas eritematosas, algumas encimadas por crostículas, outras em arranjo linear, com muita escoriação, distribuindo-se no abdome, mamas, axilas e face interna dos braços. A droga de escolha para o tratamento dessa doença é:',
    options: [
      '(A) Betametasona.',
      '(B) Cetoconazol.',
      '(C) Neomicina.',
      '(D) Ivermectina.'
    ],
    correctAnswer: 3,
    explanation: 'O quadro agudo de prurido noturno, com pápulas eritematosas escoriadas (algumas lineares) distribuídas na pele do abdome, mamas, axilas e braços em contexto familiar epidêmico é característico de escabiose, ectoparasitose tratada sistemicamente por Ivermectina.',
    commentary: 'A escabiose (sarna) é uma moléstia contagiosa causada pelo Sarcoptes scabiei. O ciclo biológico do ácaro favorece o agravamento do prurido no período noturno devido à maior temperatura sob o leito e atividade escavadora. O tratamento do caso e de todos os contatos domiciliares próximos é fundamental, e a Ivermectina oral desponta como opção de alta comodidade terapêutica.',
    reference: 'Dermatologia de Sampaio e Rivitti, de Rivitti, Evandro A. Editora : Artes Médicas; 4ª edição. Belda W, Di Chiachio N, Criado PR. Tratado de Dermatologia, Ed. Atheneu, 2015.',
    tags: ['dermatologia', 'infectologia']
  },
  {
    id: 'tp2021-29',
    module: 'Clínica Médica',
    text: 'Homem, 60 anos, diabético e dislipidêmico foi atendido na Unidade Básica de Saúde com PA = 170 x 110 mmHg, aferidas em três medidas em dias e horários distintos. Após uma semana, o paciente é reavaliado e apresenta os mesmos níveis pressóricos. Além de mudanças no estilo de vida, o tratamento mais apropriado consiste em iniciar de imediato:',
    options: [
      '(A) Hidroclorotiazida em monoterapia.',
      '(B) Metoprolol em monoterapia.',
      '(C) Enalapril + espironolactona.',
      '(D) Losartana + anlodipino.'
    ],
    correctAnswer: 3,
    explanation: 'O paciente apresenta hipertensão estágio 2 (PA diastólica ≥ 110 mmHg) em meio a perfil de risco cardiovascular muito alto (diabético, idoso e obeso/dislipidêmico). O tratamento de escolha envolve combinação precoce de fármacos de classes sinérgicas. Pelo diabetes, a preferência recai sobre a associação de um BRA (Losartana) com antagonista de canal de cálcio (Anlodipino).',
    commentary: 'Diante de hipertensão estágio 2 de alto risco, a diretriz consolidada recomenda o início direto de terapia farmacológica combinada. Diuréticos tiazídicos de forma isolada ou betabloqueadores em monoterapia devem ser preteridos em diabéticos em favor de agentes bloqueadores do sistema renina-angiotensina aliados a bloqueadores de canais de cálcio, oferecendo melhor sensibilidade insulínica, excelente poder de controle tensional e nefroproteção prolongada.',
    reference: 'Barroso WKS, Rodrigues CIS, Bortolotto LA, Mota-Gomes MA, Brandão AA, Feitosa ADM, et al. Diretrizes Brasileiras de Hipertensão Arterial – 2020. Arq Bras Cardiol. 2021;116(3):516-658.',
    tags: ['cardiologia', 'endocrinologia']
  },
  {
    id: 'tp2021-30',
    module: 'Clínica Médica',
    text: 'Mulher, 57 anos, com câncer de mama, em tratamento quimioterápico iniciado há 60 dias. No Pronto Socorro, refere que desde há duas semanas apresenta dispneia aos pequenos esforços e episódios de dispneia paroxística noturna. Exame físico: presença de 3ª bulha, estertores crepitantes em bases pulmonares e ausência de engurgitamento jugular. ECG demonstra taquicardia sinusal e a radiografia de tórax indica congestão com inversão do fluxo pulmonar e linhas B de Kerley. Ecocardiograma demonstrou fração de ejeção de 45%. O diagnóstico mais provável é:',
    options: [
      '(A) Tromboembolismo pulmonar por síndrome paraneoplásica.',
      '(B) Insuficiência cardíaca secundária a miocardiopatia por infiltração miocárdica.',
      '(C) Insuficiência cardíaca secundária a cardiotoxicidade por quimioterápico.',
      '(D) Tamponamento cardíaco por infiltração pericárdica.'
    ],
    correctAnswer: 2,
    explanation: 'A instalação subaguda de congestão pulmonar sistêmica sob evidência de disfunção sistólica ventricular esquerda (FE = 45% com B3 e linhas B de Kerley) em paciente sob quimioterapia recente para câncer de mama aponta primordialmente para a cardiotoxicidade induzida por quimioterápicos.',
    commentary: 'Fármacos largamente utilizados no câncer de mama (p.ex., antraciclinas ou anticorpos monoclonais anti-HER2 como o transtuzumabe) têm notável potencial de causar disfunção miocárdica transitória ou permanente. O quadro de cansaço agudo progressivo e insuficiência cardíaca reflete essa complicação tóxico-farmacológica sistêmica.',
    reference: 'KALIL FILHO, R et al. I Diretriz Brasileira de Cardio-Oncologia da Sociedade Brasileira de Cardiologia. Arq. Bras. Cardiol., 2011.',
    tags: ['cardiologia', 'oncologia']
  },
  {
    id: 'tp2021-31',
    module: 'Clínica Médica',
    image: '/images/tp2021-31.webp',
    text: 'Homem, 70 anos, hipertenso, sedentário, dislipidêmico, com sobrepeso, tabagista, diabético, com dor torácica retroesternal em peso iniciada em repouso, de forte intensidade, sem irradiação, acompanhada de sudorese, há 3 horas. Foi admitido na emergência com sinais de congestão pulmonar e o eletrocardiograma a seguir. O diagnóstico mais provável é:',
    options: [
      '(A) Infarto agudo do miocárdio com supradesnivelamento do segmento ST.',
      '(B) Angina instável de alto risco.',
      '(C) Pericardite aguda.',
      '(D) Dor torácica de origem não cardíaca.'
    ],
    correctAnswer: 1,
    explanation: 'Diante de múltiplos fatores latentes para coronariopatia crônica, dor retroesternal em repouso prolongada com manifestações de disfunção cardiovascular (sinais de congestão pulmonar) e eletrocardiograma sem alterações específicas com supradesnivelamento, define-se um quadro clínico de Angina Instável de alto risco.',
    commentary: 'O perfil de dor anginosa progressiva e prolongada sob franco estresse cardiovascular em idoso polipatológico (diabetes, HAS, fumo) determina a imediata estratificação na via de síndrome coronariana sem supra. A presença de congestão retrata o comprometimento miocárdico, caracterizando a angina de alto risco, independente de marcadores e do traçado inicial.',
    reference: 'Braunwald E, Zipes DP, Bonow R. Braunwald: Tratado de Doenças Cardiovasculares. 10ª. Ed. Rio de Janeiro: Guanabara Koogan, 2020. Nobre F, Magalhães CC, Serrano Jr CV et al. Tratado de Cardiologia SOCESP. 3ª ed. Barueri: Manole, 2015.',
    tags: ['cardiologia', 'emergência']
  },
  {
    id: 'tp2021-32',
    module: 'Clínica Médica',
    text: 'Homem, 48 anos, apresenta edema de face e de membros inferiores, leve, mole, frio e depressível, hematúria glomerular, hipertensão arterial, oligúria e creatinina de 3,6 mg/dL, cuja biópsia renal mostra alterações glomerulares proliferativas e formação de crescentes epiteliais extracapilares em 60% dos glomérulos. O diagnóstico é:',
    options: [
      '(A) Nefroesclerose maligna.',
      '(B) Doença de lesões mínimas.',
      '(C) Glomerulonefrite difusa aguda.',
      '(D) Glomerulonefrite rapidamente progressiva.'
    ],
    correctAnswer: 3,
    explanation: 'A síndrome nefrítica acompanhada de declínio rápido e severo de função excretora renal em que a análise de biópsia exibe lesões de padrão proliferativo difuso com formação de crescentes em mais de 50% dos glomérulos firma o diagnóstico de Glomerulonefrite Rapidamente Progressiva (GNRP).',
    commentary: 'Anatomopatologicamente, a presença de crescentes extracapilares (proliferação do folheto parietal e recrutamento inflamatório macrofágico) espalhada por mais de 50% da amostra glomerular ilustra lesão grave glomerular de curso fulminante. Clinicamente, a perda veloz e aguda de taxa de filtração com hematúria é o fenótipo definidor da GNRP.',
    reference: 'Riella MC. Princípios de Nefrologia e Distúrbios Hidroeletrolíticos. 6ª ed. Rio de Janeiro: Guanabara Koogan, 2018.',
    tags: ['nefrologia']
  },
  {
    id: 'tp2021-33',
    module: 'Clínica Médica',
    text: 'Mulher, 18 anos, queixa-se de perda de peso, palpitações e agitação psicomotora há dois meses. Exame físico: PA = 130 x 60 mmHg, FC = 132 bpm, tremores finos de extremidades e tireoide aumentada difusamente de volume, indolor, com temperatura local elevada e sopro tireoidiano, além de proptose bilateral sem sinais flogísticos oculares. Exames laboratoriais: TSH = 0,01 mcUI/ml; T4 livre = 2,5 ng/dL; T3 = 268 ng/dL. Ultrassom: bócio difuso. O provável diagnóstico é:',
    options: [
      '(A) Doença de Plummer.',
      '(B) Doença de Graves.',
      '(C) Tireoidite granulomatosa subaguda.',
      '(D) Tireoidite linfocítica subaguda.'
    ],
    correctAnswer: 1,
    explanation: 'A tireotoxicose associada a bócio simétrico difuso hipervascularizado (temperatura elevada e presença de sopro) e manifestações extratireoidianas específicas como proptose ocular bilateral em jovem aponta indubitavelmente para a Doença de Graves.',
    commentary: 'A doença de Graves é uma afecção autoimune mediada pela produção de autoanticorpos direcionados contra o receptor de TSH (TRAb). A ativação contínua da tireoide leva à hiperplasia difusa (bócio) e acentuado aumento do fluxo microrregional, manifestado semiologicamente pelo sopro tireoidiano. A proptose é decorrente do acometimento inflamatório e deposição de glicosaminoglicanos na órbita.',
    reference: 'FAUCI, A.S et al. Medicina Interna de Harrison. 20ª ed. Rio de Janeiro: McGraw Hill, 2019. Vilar, L. Endocrinologia Clínica. 7ª ed. Rio de Janeiro: Guanabara Koogan, 2020.',
    tags: ['endocrinologia']
  },
  {
    id: 'tp2021-34',
    module: 'Clínica Médica',
    text: 'Mulher, 43 anos, com ganho ponderal de 10 kg em 6 meses, fraqueza, ciclos menstruais irregulares e há 4 meses diagnóstico de hipertensão arterial sistêmica. Nega uso de quaisquer medicações. Exame físico: FC = 80 bpm, PA = 160 x 90 mmHg, IMC = 26 kg/m², circunferência abdominal = 100 cm, fácies em lua cheia, pletórica, com estrias largas e violáceas em abdômen, pele fina e com equimoses em membros. A primeira etapa na investigação diagnóstica é:',
    options: [
      '(A) Dosagem de ACTH plasmático matinal em pelo menos 3 amostras.',
      '(B) Realização de tomografia computadorizada de adrenais e ressonância magnética de hipófise.',
      '(C) Dosagem de catecolaminas plasmáticas e urinárias.',
      '(D) Dosagem de cortisol sérico matinal após dexametasona e de cortisol em urina de 24 horas.'
    ],
    correctAnswer: 3,
    explanation: 'A paciente apresenta os sinais clássicos da Síndrome de Cushing de causa endógena. Antes de buscar a etiologia com exames de imagem ou dosagem direta de ACTH, a primeira etapa obrigatória consiste na documentação quantitativa de hipercortisolemia ativa via cortisol pós-supressão com dexametasona overnight ou cortisol urinário livre de 24h.',
    commentary: 'Na vigência de suspeita clínica sólida de hipercortisolismo endógeno, os testes de triagem iniciais visam ratificar a secreção autônoma aumentada de glicocorticoide. Os exames de imagem e a medição do ACTH são ferramentas subsequentes usadas unicamente para localização diagnóstica refinada após confirmação bioquímica do excesso de cortisol.',
    reference: 'FAUCI, A.S et al. Medicina Interna de Harrison. 20ª ed. Rio de Janeiro: McGraw Hill, 2019. GOLDMAN, L & SCHAFEER, A.I. Goldman-Cecil. Medicine. 26ª ed. Philadelphia: Elsevier, 2019',
    tags: ['endocrinologia']
  },
  {
    id: 'tp2021-35',
    module: 'Clínica Médica',
    text: 'Homem, 39 anos, há 8 semanas apresentando diarreia líquida com cólica abdominal e dores articulares. Procurou a emergência com queixa de dor predominante em quadrante inferior direito do abdome, que ameniza com a evacuação. Exame físico: febril, pálido, emagrecido. Massa palpável e dolorosa em fossa ilíaca direita. Leucocitose no hemograma. Mencionou ter sido operado de fístula anorretal há 1 ano. O diagnóstico e a opção terapêutica são:',
    options: [
      '(A) Retocolite ulcerativa / hidrocortisona.',
      '(B) Doença de Crohn / sulfassalazina.',
      '(C) Apendicite aguda complicada / cirurgia.',
      '(D) Colite por Clostridium difficile / metronidazol.'
    ],
    correctAnswer: 1,
    explanation: 'O quadro de diarreia prolongada crônica e dor abdominal no quadrante inferior direito que melhora ao evacuar, associado a febre, emagrecimento, massa dolorosa palpável local e presença marcante de antecedente de cirurgia por fístula anal é típico de Doença de Crohn, cujo manejo medicamentoso de manutenção pode ser feito com sulfassalazina.',
    commentary: 'A Doença de Crohn é uma patologia inflamatória transmural que pode acometer de forma descontínua qualquer porção do trato digestório, exibindo robusta afinidade pela região ileocecal (comum mimetizar apendicite subaguda com plastrão palpável) e alta incidência de fístulas anorretais. A retocolite ulcerativa, em contrapartida, limita-se estritamente à mucosa colorretal e não gera fístulas profundas anal.',
    reference: 'FAUCI, AS et al. Harrison Medicina Interna. 18ªed. Rio de Janeiro: McGraw-Hill, 2013.',
    tags: ['gastroenterologia']
  },
  {
    id: 'tp2021-36',
    module: 'Clínica Médica',
    text: 'Homem, 50 anos, portador de hipertensão, dislipidemia e Diabetes mellitus tipo 2 há 10 anos, é admitido no Pronto Socorro com quadro de confusão mental há 1 dia. Familiares informam uso irregular de metformina, glimepirida, sinvastatina e losartana; vinha apresentando diarreia, náuseas e febre há 2 dias. Exames: glicemia 650 mg/dL; K+ = 2,5 mEq/L; discreta cetonemia e cetonúria. Enquanto aguarda vaga na UTI, como deve ser o manejo da insulinização?',
    options: [
      '(A) Insulina regular intramuscular a cada 1 hora.',
      '(B) Insulina regular intravenosa contínua.',
      '(C) Não iniciar insulinização até normalização do potássio.',
      '(D) Análogo de insulina ultrarrápida subcutânea a cada 1 hora.'
    ],
    correctAnswer: 2,
    explanation: 'O paciente exibe quadro de Estado Hiperglicêmico Hiperosmolar (EHH). Contudo, apresenta potássio sérico amplamente baixo (K+ = 2,5 mEq/L). Como a insulina promove o desvio interno rápido de potássio para dentro das células, iniciar a insulinização nessa fase gera risco altíssimo de hipocalemia catastrófica e óbito por arritmias graves. A conduta determina repor o eletrólito e adiar a insulina.',
    commentary: 'No manejo inicial das emergências glicêmicas graves, o status do potássio dita o tempo da introdução da insulina. Se o valor do potássio medido for menor que 3,3 mEq/L, a insulinoterapia deve ser rigorosamente suspensa. Deve-se iniciar hidratação salina e reposição robusta de cloreto de potássio para primeiro normalizar os valores iônicos séricos.',
    reference: 'MILECH, A. Diretrizes da Sociedade Brasileira de Diabetes (2019-2020). São Paulo: A.C. Farmacêutica, 2016. FAUCI, A.S et al. Medicina Interna de Harrison. 20ª ed. Rio de Janeiro: McGrawHill, 2019',
    tags: ['endocrinologia', 'emergência', 'fisiopatologia']
  },
  {
    id: 'tp2021-37',
    module: 'Clínica Médica',
    text: 'Homem, 22 anos, chega ao Pronto Socorro com queixa de diminuição de força em dimídio direito há 2 dias com piora progressiva. É hemofílico grave, com diagnóstico de HIV há 10 anos, sem uso de antirretroviral. Exame físico: hemiparesia direita incompleta com liberação piramidal e monilíase oral. Tomografia de crânio com contraste evidenciou duas lesões com captação periférica de contraste e efeito de massa. A principal hipótese diagnóstica é:',
    options: [
      '(A) Neurocriptococose.',
      '(B) Meningite por herpes simples.',
      '(C) Leucoencefalopatia multifocal progressiva.',
      '(D) Neurotoxoplasmose.'
    ],
    correctAnswer: 3,
    explanation: 'Em indivíduo jovem com AIDS e imunossupressão profunda (indício de monilíase), a ocorrência de sinais focais deficitários rápidos associados a múltiplas lesões cerebrais com realce anelar periférico de contraste e edema adjacente na tomografia de crânio é altamente diagnóstica de neurotoxoplasmose.',
    commentary: 'A encefalite toxoplásmica, causada por reativação do Toxoplasma gondii, é o agressor mais habitual do SNC na AIDS sem tratamento adequado de base. A presença de monilíase ratifica o estado imunodeficiente. O achado de realce em anel nas imagens sela fortemente essa hipótese inicial sobre meningite ou leucoencefalopatia (que não gera realce).',
    reference: 'Mofenson, LM et al. Guidelines for the prevention and treatment of opportunistic infections in HIV-infected Adults and adolescents. MMWR Recomm Rep. 2009, Set 4, 58 (RR-11):1',
    tags: ['infectologia', 'neurologia', 'emergência']
  },
  {
    id: 'tp2021-38',
    module: 'Clínica Médica',
    text: 'Homem, 58 anos, com antecedente de dislipidemia e tabagismo, apresenta dor epigástrica em queimação irradiada para região precordial, associada à náusea e sudorese há 7 horas. ECG: supradesnivelamento de ST em DII, DIII e AVF e infradesnivelamento em V1-V2. Evoluiu com hipotensão, dispneia intensa, sopro sistólico em foco mitral e crepitações pulmonares. A localização do IAM e possível complicação são:',
    options: [
      '(A) Parede lateral; ruptura de septo interventricular.',
      '(B) Parede ínfero-dorsal; ruptura de músculo papilar.',
      '(C) Parede anterior; ruptura de músculo papilar.',
      '(D) Parede inferior; ruptura de septo interventricular.'
    ],
    correctAnswer: 1,
    explanation: 'O supradesnivelamento em DII, DIII e aVF representa infarto inferior do miocárdio, e o infradesnivelamento em espelho nas precordiais V1-V2 traduz acometimento dorsal concomitante (infarto ínfero-dorsal). A congestão súbita com hipotensão e o aparecimento de sopro de regurgitação mitral sela a complicação mecânica de insuficiência mitral aguda por isquemia/ruptura do músculo papilar.',
    commentary: 'A parede inferior e dorsal recebe irrigação habitual pela coronária direita ou pela artéria circunflexa, as quais são também as exclusivas condutoras de fluxo do músculo papilar posteromedial. Sendo assim, o infarto ínfero-dorsal predispõe fortemente a lesões agudas desse músculo papilar, induzindo insuficiência mitral aguda com congestão retrógrada catastrófica na monta descrita.',
    reference: 'ZIPES, MDP et al. Braunwald – Tratado de Doenças Cardiovasculares. 9ª ed. Rio de Janeiro: Elsevier, 2013',
    tags: ['cardiologia', 'emergência']
  },
  {
    id: 'tp2021-39',
    module: 'Clínica Médica',
    text: 'Mulher, 50 anos, com diabetes tipo 2 e dislipidemia mista, iniciou uso de estatina há 2 meses. Exames: creatinina = 1,5 mg/dL; ureia = 65 mg/dL; potássio = 6,0 mEq/L; CPK = 2.200 UI/L. Além da alcalinização da urina, a conduta adequada é:',
    options: [
      '(A) Trocar estatina por fibrato e fazer controle glicêmico rigoroso com hipoglicemiante oral, iniciar antiproteinúrico.',
      '(B) Suspender imediatamente a estatina, iniciar diurético de alça e solução polarizante.',
      '(C) Suspender imediatamente a estatina, iniciar diurético de alça e gluconato de cálcio.',
      '(D) Suspender imediatamente a estatina, hidratação endovenosa com salina isotônica e solução polarizante.'
    ],
    correctAnswer: 3,
    explanation: 'A paciente exibe quadro de injúria renal aguda secundária a rabdomiólise após estatina (CPK = 2.200 UI/L) com hipercalemia moderada-grave (K+ = 6,0 mEq/L). O pilar da conduta de rabdomiólise é a suspensão do agente causador associado à vigorosa hidratação endovenosa com salina para desobstruir os túbulos da mioglobina nefrotóxica, aliada à imediata infusão de solução polarizante para corrigir o potássio plasmático.',
    commentary: 'A rabdomiólise tem como complicação temida a necrose tubular aguda obstrutiva por depósito de mioglobina. A nefropatia de base impõe restrição no uso de IECA/BRA (antiproteinúrico sugerido) pela hipercalemia existente. Diuréticos devem ser indicados com prudência apenas na vigência de hipervolemia refratária pós-volume. A conduta padrão assenta-se na hidratação, suspensão da estatina e estabilização da calemia.',
    reference: 'FAUCI, AS et al. Harrison Medicina Interna. 18ªed. Rio de Janeiro: McGraw-Hill, 2013.',
    tags: ['nefrologia', 'cardiologia', 'farmacologia', 'emergência']
  },
  {
    id: 'tp2021-40',
    module: 'Clínica Médica',
    text: 'Homem de 85 anos está internado para realização de procedimento cirúrgico eletivo devido à hiperplasia prostática benigna. Durante a madrugada passa a apresentar flutuações da consciência, desorientação, períodos de agitação intercalados com apatia, frases desconexas e agressividade verbal. Família refere ausência de episódios prévios e que o paciente era independente e lúcido. Qual o diagnóstico e a terapia farmacológica adequada?',
    options: [
      '(A) Doença de Alzheimer; benzodiazepínico de curta duração.',
      '(B) Delirium; benzodiazepínico de curta duração.',
      '(C) Doença de Alzheimer; benzodiazepínico de longa duração.',
      '(D) Delirium; neuroléptico da classe das butirofenonas.'
    ],
    correctAnswer: 3,
    explanation: 'A instalação aguda com curso flutuante característico de agitação alternada com apatia, desorientação e agressividade no pós/pré-operatório de idoso hígido ilustra o Delirium (estado confusional agudo). O tratamento da agitação requer antipsicóticos/neurolépticos (como as butirofenonas, ex: Haloperidol), visto que benzodiazepínicos podem induzir reações paradoxais e exacerbar a confusão nos idosos.',
    commentary: 'O delirium é uma manifestação frequente de disfunção da integridade cognitiva no idoso hospitalizado frente a estressores orgânicos, em que o uso de tranquilizantes benzodiazepínicos é contraindicado sob pena de piora ou agitação reativa secundária. Os neurolépticos da classe do haloperidol constituem a escolha farmacológica regulamentada para o controle comportamental agudo se houver sofrimento ou perigo.',
    reference: 'BRENDA TP et al. The Importance of Diagnosing and Managing ICU Delirium. CHEST, 132:624–636, 2007. SCHWARTZ CE. Delirium in hospitalized older pacients. N.Engl.J.Med., 341(5):369-70, 1999.',
    tags: ['geriatria', 'psiquiatria', 'neurologia']
  },
  {
    id: 'tp2026-21',
    module: 'Clínica Médica',
    text: 'Sérgio, 62 anos, em atendimento na UBS, portador de doença pulmonar obstrutiva crônica (DPOC), secundário ao tabagismo de longa data. Nesta semana, precisou buscar atendimento e, após um resfriado, sentiu falta de ar, tosse com catarro amarelado e chiado no peito. Quanto à fisiopatologia da DPOC, é correto afirmar que:',
    options: [
      '(A) A difusão de gás carbônico é comprometida principalmente pela destruição da parede alveolar, por isso Sérgio poderá apresentar hipercapnia durante a crise.',
      '(B) Broncoconstrição reversível é característica da DPOC e justifica o porquê de Sérgio, anteriormente assintomático, evoluiu com sintomas nesta crise.',
      '(C) O distúrbio ventilação/perfusão é o principal responsável pela hipoxemia durante a exacerbação da DPOC, situação à qual Sérgio pode estar sujeito.',
      '(D) Inflamação de pequenas vias aéreas, aumento na produção de muco e aprisionamento aéreo ocasionam o efeito espaço morto, razão da dispneia de Sérgio.'
    ],
    correctAnswer: 2,
    explanation: "Sérgio está em exacerbação da DPOC, provavelmente desencadeada por infecção respiratória: mais dispneia, escarro purulento e sibilância. A hipoxemia nesse momento vem principalmente do desequilíbrio entre ventilação e perfusão (V/Q).\n\nA inflamação, o edema e o muco nas pequenas vias aéreas fazem com que vários alvéolos continuem recebendo sangue, mas sejam mal ventilados. O sangue passa por eles sem se oxigenar o suficiente, e a saturação cai. Por isso a oferta de oxigênio em baixo fluxo costuma corrigir a hipoxemia, buscando saturação entre 88% e 92% para não agravar a retenção de CO₂.",
    commentary: "Difusão de CO₂ comprometida (A): o CO₂ atravessa a membrana alveolocapilar com muita facilidade; quando há hipercapnia na exacerbação, ela se deve à hipoventilação alveolar e ao cansaço da musculatura respiratória, não a falha de difusão.\n\nBroncoconstrição reversível (B): obstrução variável e reversível é marca da asma; a DPOC se define por limitação persistente ao fluxo aéreo.\n\nEfeito espaço morto (D): áreas mal ventiladas e ainda perfundidas produzem efeito shunt (V/Q baixo); espaço morto é o contrário, área ventilada e pouco perfundida.",
    tip: "Hipoxemia na exacerbação da DPOC = distúrbio V/Q. Oxigênio em baixo fluxo, alvo de SpO₂ 88–92%.",
    reference: 'Fisiopatologia Pulmonar de West: Princípios Básicos.',
    tags: ['pneumologia', 'fisiopatologia']
  },
  {
    id: 'tp2026-22',
    module: 'Clínica Médica',
    text: 'Mulher de 35 anos apresenta episódios recorrentes de dispneia, tosse seca e chiado, com piora noturna e após exposição à poeira. Fora das crises, permanece assintomática. Espirometria basal sem padrão obstrutivo. Teste de broncoprovocação com metacolina demonstra queda de 22% no VEF1 (volume expiratório forçado no primeiro segundo). Nessa paciente, o principal mecanismo fisiopatológico responsável pela obstrução reversível das vias aéreas é:',
    options: [
      '(A) Obstrução fixa das vias aéreas associada a remodelamento estrutural irreversível.',
      '(B) Doença das vias aéreas com hiperresponsividade brônquica e obstrução variável.',
      '(C) Redução da complacência pulmonar por acometimento intersticial difuso.',
      '(D) Perda da retração elástica pulmonar com aprisionamento aéreo progressivo.'
    ],
    correctAnswer: 1,
    explanation: "Crises de dispneia, tosse seca e chiado, piores à noite e com poeira, e normalidade entre as crises sugerem asma. Como a espirometria basal veio normal, o diagnóstico foi confirmado pelo teste de broncoprovocação: a metacolina provocou queda de 20% ou mais no VEF1 (aqui, 22%), o que demonstra hiperresponsividade brônquica.\n\nNa asma, a inflamação crônica das vias aéreas as torna exageradamente sensíveis a estímulos. A obstrução surge, varia ao longo do tempo e regride, sozinha ou com broncodilatador. Essa variabilidade é a principal diferença em relação à DPOC.",
    commentary: "Obstrução fixa com remodelamento (A): descreve a DPOC ou a asma grave de longa data com remodelamento; não combina com uma paciente sem sintomas e com espirometria normal entre as crises.\n\nRedução da complacência por doença intersticial (C): as doenças intersticiais deixam o pulmão rígido e produzem padrão restritivo, sem hiperresponsividade brônquica.\n\nPerda da retração elástica (D): é o mecanismo do enfisema, em que a destruição do parênquima causa obstrução persistente e aprisionamento de ar.",
    tip: "Espirometria normal + suspeita de asma: broncoprovocação. Queda ≥ 20% do VEF1 = hiperresponsividade brônquica.",
    reference: 'GINA – Global Strategy for Asthma Management and Prevention. 2024. Harrison’s Principles of Internal Medicine. 21ª ed. Sociedade Brasileira de Pneumologia e Tisiologia – Diretrizes de Asma.',
    tags: ['pneumologia', 'fisiopatologia']
  },
  {
    id: 'tp2026-23',
    module: 'Clínica Médica',
    text: 'Homem indígena de 58 anos, com histórico de etilismo crônico e infarto agudo do miocárdio há 5 anos, evolui com insuficiência cardíaca com fração de ejeção reduzida (FEVE 32%) após infarto agudo. Exame físico com presença de b3, sem outras alterações. Você o recebe na atenção básica para início do tratamento do quadro. Nesse paciente, foi introduzido Sacubitril, Valsartana, Carvedilol e Inibidor SGLT2. O diurético mais indicado neste momento que diminui mortalidade a longo prazo para esse paciente é:',
    options: [
      '(A) Acetazolamida',
      '(B) Furosemida',
      '(C) Hidroclorotiazida',
      '(D) Espironolactona'
    ],
    correctAnswer: 3,
    explanation: 'A espironolactona combate o remodelamento cardíaco patológico e reduz de forma consistente a mortalidade a longo prazo em pacientes com insuficiência cardíaca com fração de ejeção reduzida (ICFEr).',
    commentary: 'Comentários sobre a resposta correta:\n(D) A espironolactona (antagonista do receptor mineralocorticoide) atua atenuando o remodelamento cardíaco patológico, a fibrose miocárdica e reduzindo comprovadamente a mortalidade e a taxa de hospitalizações na ICFEr.\n\nComentários sobre os distratores:\n(A) Acetazolamida não reduz mortalidade a longo prazo na ICFEr.\n(B) A furosemida é essencial no manejo da congestão sintomática, contudo não reduz mortalidade cardiovascular a longo prazo.\n(C) A hidroclorotiazida não possui efeito demonstrado na redução da mortalidade a longo prazo de pacientes com ICFEr.',
    reference: 'Heidenreich PA, Bozkurt B, Aguilar D, et al. 2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure. Circulation. 2022;145(18):e895–e1032.',
    tags: ['cardiologia', 'farmacologia']
  },
  {
    id: 'tp2026-24',
    module: 'Clínica Médica',
    text: 'Mulher, 52 anos, internada por dispneia progressiva há 5 dias, refere ortopneia, dispneia paroxística noturna e piora importante da tolerância aos esforços. Ao exame físico, apresenta turgência jugular, edema maleolar bilateral, crepitações bibasais, bulha acessória (B3), frequência cardíaca de 108bpm, pressão arterial de 112x74mmHg, extremidades quentes, pulsos periféricos palpáveis, sem rebaixamento do nível de consciência e com tempo de enchimento capilar de 3,0 segundos. Com base na anamnese e no exame físico, qual é o perfil clínico-hemodinâmico predominante?',
    options: [
      '(A) Fria e seca',
      '(B) Quente e seca',
      '(C) Quente e úmida',
      '(D) Fria e úmida'
    ],
    correctAnswer: 2,
    explanation: 'A paciente apresenta sinais inequívocos de congestão (úmida) associados a uma perfusão tecidual periférica adequada e preservada (quente), o que define o Perfil Quente e Úmido (Perfil B).',
    commentary: 'Comentários sobre a resposta correta:\n(C) A paciente apresenta sinais clássicos de congestão sistêmica e pulmonar (ortopneia, turgência jugular, edema bilateral, crepitações, B3), mas mantém perfusão tecidual intacta (extremidades quentes, PA adequada, pulsos normais, nível de consciência normal, tempo de enchimento capilar normal de 3s). Isso configura o perfil hemodinâmico "quente e úmido" (Perfil B).\n\nComentários sobre os distratores:\n(A) Fria e seca descreve pacientes com hipoperfusão sistêmica mas sem congestão.\n(B) Quente e seca descreve pacientes compensados clinicamente (sem congestão e bem perfundidos).\n(D) Fria e úmida descreve pacientes graves com congestão aliada a sinais claros de má perfusão tecidual periférica.',
    reference: 'Heidenreich PA, Bozkurt B, Aguilar D, et al. 2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure. | McDonagh TA, Metra M, Adamo M, et al. 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. | Braunwald\'s Heart Disease. 12th ed. 2022.',
    tags: ['cardiologia', 'emergência']
  },
  {
    id: 'tp2026-25',
    module: 'Clínica Médica',
    text: 'Mulher, 54 anos, diabética, admitida no hospital com fraqueza, dispneia progressiva e oligúria há 3 dias. Exame físico: PA 160/95mmHg, FC 98bpm, FR 26irpm, saturação de O₂ 92%, presença de estertores crepitantes bibasais e edema de membros inferiores (+++/4+). Exames laboratoriais: Ureia 210mg/dL; Creatinina 8,5mg/dL; Potássio 6,8mEq/L; pH arterial 7,21; HCO₃⁻ 14mEq/L. Apesar de administração de 100mg de furosemida, mantém oligúria. Qual a próxima conduta?',
    options: [
      '(A) Encaminhar para hemodiálise de urgência.',
      '(B) Administrar bicarbonato de sódio em infusão contínua.',
      '(C) Restrição hídrica e reavaliação laboratorial em 24 horas.',
      '(D) Iniciar espironolactona via oral associado a furosemida.'
    ],
    correctAnswer: 0,
    explanation: 'A paciente apresenta critérios inequívocos de hemodiálise de urgência: acidose grave (pH 7,21), hipercalemia grave (K+ 6,8 mEq/L) e sobrecarga volêmica sintomática refratária ao uso de doses elevadas de diuréticos.',
    commentary: 'Comentários sobre a resposta correta:\n(A) A paciente apresenta múltiplos critérios para indicação de terapia de substituição renal de urgência (urgência dialítica): acidose metabólica importante (pH 7,21), hipercalemia grave refratária (K⁺ 6,8 mEq/L), hipervolemia com edema pulmonar franco e uremia sintomática na presença de oligúria sem resposta ao teste de diurético de alça (100mg de furosemida).\n\nComentários sobre os distratores:\n(B) A infusão contínua de bicarbonato de sódio acarretaria severa sobrecarga adicional de sódio e líquido, agravando gravemente a congestão pulmonar aguda e a hipoxemia.\n(C) Postergar o tratamento por 24 horas expõe a paciente a risco altíssimo de óbito decorrente de arritmias ventriculares induzidas pela hipercalemia extrema ou por fadiga respiratória severa.\n(D) Iniciar espironolactona é formalmente contraindicado devido ao altíssimo risco de elevação adicional do potássio sérico.',
    reference: 'HAJJAR, Ludhmila Abrahão; BRANDÃO NETO, Rodrigo Antonio (eds.). Medicina de emergência: abordagem prática. 19. ed. Santana de Parnaíba (SP): Manole, 2025.',
    tags: ['nefrologia', 'emergência']
  },
  {
    id: 'tp2026-26',
    module: 'Clínica Médica',
    image: '/images/tp2026-26.webp',
    text: 'Mulher, 60 anos, com história de nefrolitíase, foi encaminhada ao nefrologista devido a redução do volume urinário, hematúria, dor lombar intermitente bilateral tipo cólica e vômitos quando apresenta dor. Fez uso de dipirona e escopolamina via oral. Exame de creatinina: 7mg/dL. Traz ultrassom de rins e vias urinárias, que evidencia dilatação pielocalicial bilateral. Diante do caso exposto, qual a etiologia da alteração de função renal?',
    options: [
      '(A) Lesão renal secundária a doença policística.',
      '(B) Lesão pós-renal secundária a obstrução ureteral por cálculo.',
      '(C) Lesão renal secundária a nefrite intersticial aguda medicamentosa.',
      '(D) Lesão pré-renal devido a desidratação por vômitos.'
    ],
    correctAnswer: 1,
    explanation: 'A dilatação pielocalicial bilateral observada no ultrassom confirma processo obstrutivo bilateral do trato urinário, caracterizando etiologia pós-renal por obstrução litiásica.',
    commentary: 'Comentários sobre a resposta correta:\n(B) A presença de dilatação pielocalicial ao ultrassom indica hidronefrose obstrutiva pós-renal. Dado o histórico de cólica renal bilateral e nefrolitíase preexistente, a etiologia mais provável é a obstrução ureteral bilateral por cálculos, justificando a acentuada perda aguda da função renal.\n\nComentários sobre os distratores:\n(A) A doença policística renal cursa com múltiplos cistos bilaterais volumosos alterando o parênquima renal, o que não foi descrito no ultrassom.\n(C) A nefrite intersticial aguda medicamentosa é uma lesão intrínseca (parenquimatosa) e não se manifesta tipicamente com dilatação pielocalicial no ultrassom.\n(D) Causas pré-renais por desidratação (ex.: vômitos) cursam com rims e vias urinárias normais ao ultrassom, sem obstrução e sem dilatação de vias.',
    reference: 'RIELLA, Miguel Carlos. Princípios de Nefrologia e Distúrbios Hidroeletrolíticos. Editora Guanabara, 2003.',
    tags: ['nefrologia', 'urologia']
  },
  {
    id: 'tp2026-27',
    module: 'Clínica Médica',
    text: 'Homem cis, 42 anos, branco, procura atendimento em UBS com queixa de dor epigástrica em queimação há 3 meses, piora após ingestão de alimentos gordurosos e uso frequente de anti-inflamatórios não esteroidais (AINEs), por dor lombar crônica. Refere consumo regular de álcool (3-4 vezes por semana) e tabagismo (10 maços/ano). Foi levantada a hipótese diagnóstica de gastrite. Qual das alternativas abaixo contempla de forma mais adequada as medidas de prevenção e promoção de saúde para esse paciente?',
    options: [
      '(A) Iniciar inibidor de bomba de prótons (IBP).',
      '(B) Reduzir consumo de álcool.',
      '(C) Prescrever antibiótico empírico para H. pylori.',
      '(D) Solicitar EDA.'
    ],
    correctAnswer: 1,
    explanation: 'A redução do consumo de álcool e suspensão de agentes agressores gástricos como AINEs representam medidas primordiais de prevenção primária e promoção de saúde.',
    commentary: 'Comentários sobre a resposta correta:\n(B) A redução do consumo regular de álcool (e controle de outros hábitos como tabagismo e uso de AINEs) foca na raiz fisiopatológica dos danos à mucosa gástrica, constituindo medidas centrais de promoção e prevenção à saúde de forma sustentável.\n\nComentários sobre os distratores:\n(A) O início imediato de IBP é uma conduta farmacológica terapêutica e curativa e não previne o hábito agressor de base. Além disso, o uso indiscriminado crônico de IBPs traz riscos como hipomagnesemia e infecção por C. difficile.\n(C) O uso empírico de esquemas antimicrobianos contra H. pylori sem a devida confirmação ("test and treat") é contraindicado, pois induz resistência bacteriana e efeitos colaterais desnecessários.\n(D) A solicitação de endoscopia digestiva alta (EDA) em paciente jovem e sem sinais de alarme ("red flags", como perda ponderal, anemia ou sangramento) não é recomendada como etapa preventiva inicial.',
    reference: 'SOUTO, E. P.; et al. Tratado de Gastroenterologia. 2ª ed. Rio de Janeiro: Guanabara Koogan, 2019. | MALFERTHEINER, P.; et al. Management of Helicobacter pylori infection—the Maastricht VI/Florence Consensus Report. Gut. 2022;71(9):1724–1762.',
    tags: ['gastroenterologia', 'medicina preventiva']
  },
  {
    id: 'tp2026-28',
    module: 'Clínica Médica',
    text: 'J.S.L., sexo feminino, 23 anos, comparece ao pronto atendimento com queixa de diarreia aquosa 10 vezes ao dia, acompanhada de muco e raias de sangue há 8 meses. Refere perda de 7kg no período. Traz colonoscopia, com resultado de colite de descendente moderada e ileíte terminal moderada (confirmados por biópsia). Ao exame físico apresenta abdome doloroso, sem defesa e presença de fístulas anorretais. Qual o diagnóstico provável da paciente?',
    options: [
      '(A) Adenocarcinoma de cólon',
      '(B) Retocolite Ulcerativa',
      '(C) Síndrome do intestino irritável',
      '(D) Doença de Crohn'
    ],
    correctAnswer: 3,
    explanation: 'O acometimento descontínuo acometendo tanto o íleo terminal (delgado) quanto o cólon descendente, somado à presença de fístulas anorretais, é a manifestação clássica da Doença de Crohn.',
    commentary: 'Comentários sobre a resposta correta:\n(D) A Doença de Crohn é caracterizada pelo acometimento transmural e potencialmente descontínuo de qualquer segmento do trato digestivo (como demonstrado pela ileíte e colite simultâneas) e tem tendência marcante a complicações penetrantes, como fístulas anorretais.\n\nComentários sobre os distratores:\n(A) O adenocarcinoma de cólon em paciente de 23 anos seria atípico e foi completamente excluído pelas biópsias colonoscópicas compatíveis com doença inflamatória intestinal crônica.\n(B) A Retocolite Ulcerativa cursa com inflamação restrita à mucosa do reto e cólon de forma contínua e ascendente, poupando habitualmente o intestino delgado (ileíte primária) e não provocando fístulas de padrão penetrante.\n(C) A Síndrome do Intestino Irritável é um distúrbio funcional no qual a colonoscopia e as biópsias intestinais se apresentam rigorosamente normais.',
    reference: 'Tratado de Coloproctologia CAMPOS, Fábio Guilherme et al. 2. ed. Rio de Janeiro: Thieme Revinter, 2017. | Diretrizes da Doença de Crohn – GEDIIB Grupo de Estudos da Doença Inflamatória do Brasil.',
    tags: ['gastroenterologia']
  },
  {
    id: 'tp2026-29',
    module: 'Clínica Médica',
    text: 'Mulher de 32 anos procura pronto atendimento por cefaleia hemicraniana pulsátil há 10 horas, associada a náuseas, fotofobia e piora com esforços habituais. Refere episódios semelhantes nos últimos dois anos, com melhora espontânea entre as crises, sem febre, déficit focal ou alteração do nível de consciência. Indique a investigação diagnóstica:',
    options: [
      '(A) Realizar o diagnóstico clínico de enxaqueca.',
      '(B) Solicitar tomografia computadorizada de crânio.',
      '(C) Indicar punção lombar para afastar causas secundárias.',
      '(D) Solicitar eletroencefalograma.'
    ],
    correctAnswer: 0,
    explanation: 'A enxaqueca é diagnosticada clinicamente com base em critérios estabelecidos (IHS), dispensando exames de imagem e laboratoriais na ausência de sinais de alerta (red flags).',
    commentary: 'Comentários sobre a resposta correta:\n(A) A enxaqueca (migrânea) típica apresenta sintomas clássicos (hemicraniana, pulsátil, associada a náuseas e fotofobia, recidivante há anos). Na ausência completa de sinais de alarme ("red flags", como febre, déficit focal, início súbito em trovão, edema de papila), o diagnóstico é estritamente clínico e exames complementares de imagem são desnecessários.\n\nComentários sobre os distratores:\n(B) A tomografia computadorizada de crânio não deve ser solicitada em cefaleias recorrentes típicas sem sinais de alerta ou mudança de padrão álgico.\n(C) A punção lombar é indicada na investigação de suspeitas infecciosas (meningite), hemorragia subaracnoidea de TC normal, ou hipertensão intracraniana, não se aplicando à crise migranosa típica.\n(D) O eletroencefalograma não possui sensibilidade, especificidade ou utilidade no diagnóstico da enxaqueca ou outras cefaleias primárias.',
    reference: 'INTERNATIONAL HEADACHE SOCIETY. The International Classification of Headache Disorders, 3rd edition. Cephalalgia, 2018. | HARRISON’S Principles of Internal Medicine. 21st ed. New York: McGraw-Hill, 2022.',
    tags: ['neurologia']
  },
  {
    id: 'tp2026-30',
    module: 'Clínica Médica',
    text: 'Paciente de 72 anos é levado ao médico da Saúde da Família, na UBS, por sua filha, que relata um declínio progressivo da memória do pai há cerca de dois anos, com esquecimento de fatos recentes e dificuldade em encontrar palavras. Nos últimos meses, ele começou a apresentar desorientação em locais conhecidos e necessitar de ajuda para tarefas diárias, como se vestir. Após avaliação clínica e exames complementares, foi diagnosticado com Doença de Alzheimer em fase moderada. Qual plano terapêutico mais adequado deve ser iniciado na Estratégia da Saúde da Família?',
    options: [
      '(A) Recomendar apenas o tratamento multiprofissional, incluindo aconselhar a família a matricular o paciente em atividades de lazer em grupo, sem a necessidade de outras intervenções farmacológicas.',
      '(B) Iniciar imediatamente o uso de memantina em monoterapia e encaminhar o paciente para um serviço de neurologia, a fim de avaliar o motivo do início precoce da doença.',
      '(C) Prescrever um inibidor da acetilcolinesterase, como a rivastigmina, e orientar a família sobre a importância de um ambiente seguro, rotina estruturada e estimulação cognitiva. Além do acompanhamento com a equipe multiprofissional da atenção primária, conforme disponibilidade local.',
      '(D) Encaminhar o paciente diretamente para uma instituição de longa permanência para idosos, informando à família que não há tratamentos.'
    ],
    correctAnswer: 2,
    explanation: 'No Alzheimer em fase moderada, o tratamento padrão inicia-se com inibidores da acetilcolinesterase associado a intervenções não farmacológicas de reabilitação cognitiva e orientação familiar.',
    commentary: 'Comentários sobre a resposta correta:\n(C) Os inibidores da acetilcolinesterase (como a rivastigmina, donepezila ou galantamina) são fármacos de primeira linha recomendados na fase leve a moderada da Doença de Alzheimer. Em conjunto, o papel da equipe da ESF é orientar a família sobre organização do ambiente, prevenção de acidentes/quedas, reabilitação cognitiva domiciliar e suporte psicoemocional.\n\nComentários sobre os distratores:\n(A) A reabilitação não farmacológica isolada é insuficiente, pois os inibidores da colinesterase promovem melhora funcional e cognitiva significativa.\n(B) A memantina é indicada classicamente para as fases moderada a grave e não constitui monoterapia inicial de escolha habitual; além disso, o diagnóstico aos 72 anos de idade não caracteriza "início precoce".\n(D) A institucionalização de longa permanência é uma medida de exceção, reservada a casos de refratariedade de sintomas comportamentais graves associados a esgotamento do cuidador.',
    reference: 'Protocolo Clínico e Diretrizes Terapêuticas (PCDT) - Doença de Alzheimer, Ministério da Saúde Brasil; NICE Guidelines 2023.',
    tags: ['geriatria', 'neurologia', 'psiquiatria']
  },
  {
    id: 'tp2026-31',
    module: 'Clínica Médica',
    text: 'Homem indígena, 32 anos, atendido em UBS, apresenta perda de peso não intencional e febre há 3 semanas, associadas a diarreia intermitente. Ao exame, apresenta candidíase oral. Foi realizado teste rápido para HIV, com resultado reagente. Indique a melhor conduta diagnóstica a ser realizada neste momento.',
    options: [
      '(A) Repetir o mesmo teste rápido para confirmação.',
      '(B) Solicitar carga viral para confirmação diagnóstica.',
      '(C) Solicitar contagem de linfócitos CD4.',
      '(D) Realizar segundo teste rápido com metodologia diferente.'
    ],
    correctAnswer: 3,
    explanation: 'O fluxograma diagnóstico do Ministério da Saúde para HIV com testes rápidos estabelece que, diante de um TR1 reagente, deve-se realizar de forma imediata o TR2 com metodologia diferente.',
    commentary: 'Comentários sobre a resposta correta:\n(D) De acordo com as diretrizes do Ministério da Saúde do Brasil, a confirmação diagnóstica da infecção pelo HIV em serviços como a atenção primária por testes rápidos exige que após um resultado reagente no teste inicial (TR1), realize-se obrigatoriamente um segundo teste rápido confirmatório (TR2) que apresente princípios metodológicos ou antígenos de fabricantes distintos.\n\nComentários sobre os distratores:\n(A) A mera repetição do mesmo teste (TR1) não possui poder confirmatório nem validação técnica.\n(B) A carga viral é extremamente útil no acompanhamento e controle terapêutico ou suspeita de infecção aguda em janela imunológica, mas não substitui a triagem em rede pelo fluxograma rápido.\n(C) A contagem de linfócitos T CD4 serve para o estadiamento imunológico da doença instalada e orientação de profilaxias, sem papel no diagnóstico inicial de triagem.',
    reference: 'Manual técnico para o diagnóstico da infecção pelo HIV em adultos e crianças. Brasília: Ministério da Saúde, 2018.',
    tags: ['infectologia', 'saúde coletiva']
  },
  {
    id: 'tp2026-32',
    module: 'Clínica Médica',
    text: 'A agente comunitária visita a Sra. Maria Alice, 32 anos, que relata nunca ter tido dengue e no momento apresenta-se saudável e sem comorbidades. A moradora pergunta se pode receber a vacina Qdenga® contra a dengue, já disponível, e quais orientações de prevenção deve seguir após a vacinação. Considerando as diretrizes mais recentes do Ministério da Saúde e as recomendações para promoção e prevenção em saúde, identifique a conduta adequada.',
    options: [
      '(A) Receber a vacina Qdenga®, desde que não seja gestante, lactante ou imunossuprimido, devendo manter as medidas de prevenção contra picadas de mosquito mesmo após a vacinação.',
      '(B) Pode ser vacinada, pois está na faixa etária aprovada, e poderá suspender as medidas de proteção, pois estará protegida contra todos os sorotipos da dengue.',
      '(C) Não receber a vacina Qdenga®, pois ela é indicada prioritariamente para pessoas que já tiveram dengue anteriormente (soropositivos), manter medidas de proteção contra o vetor da dengue.',
      '(D) Não receber a vacina Qdenga®, pois a vacinação contra a dengue está indicada para 10 a 14 anos e profissionais de saúde; deverá seguir com medidas de eliminação do criadouro do mosquito.'
    ],
    correctAnswer: 0,
    explanation: 'A vacina Qdenga® é licenciada para indivíduos de 4 a 60 anos, independentemente de infecção prévia por dengue, sendo contraindicada em gestantes, lactantes e imunossuprimidos. O uso da vacina não elimina a necessidade do controle de vetores.',
    commentary: 'Comentários sobre a resposta correta:\n(A) A vacina atenuada Qdenga® é aprovada no Brasil para a faixa etária de 4 a 60 anos, tanto para indivíduos previamente expostos (soropositivos) quanto virgens de infecção (soronegativos). Por ser uma vacina de vírus vivo atenuado, é formalmente contraindicada para gestantes, lactantes e imunossuprimidos graves. Mesmo vacinados, o controle do vetor Aedes aegypti e a proteção individual são indispensáveis.\n\nComentários sobre os distratores:\n(B) A vacinação não confere eficácia absoluta de 100% contra todos os sorotipos de forma permanente, de modo que os métodos físicos de combate ao vetor não podem ser abandonados.\n(C) A Qdenga® é indicada para soropositivos e soronegativos, diferentemente da vacina Dengvaxia® que exigia testagem e histórico positivo prévio obrigatório.\n(D) Embora o SUS priorize o grupo de 10 a 14 anos devido a restrições temporárias de oferta de doses, a vacina está amplamente aprovada pela Anvisa e indicada na faixa etária de 4 a 60 anos no Brasil.',
    reference: 'Ministério da Saúde – Nota Técnica nº 8/2024 CGICI/DPNI/SVSA/MS | Nota Técnica nº 4/2026-CGICI/DPNI/SVSA/MS.',
    tags: ['infectologia', 'medicina preventiva', 'saúde coletiva']
  },
  {
    id: 'tp2026-33',
    module: 'Clínica Médica',
    text: 'Mulher, 19 anos, de etnia amarela, previamente hígida, encontra-se em investigação no ambulatório de clínica médica, devido a trombose venosa profunda em membro inferior direito há 4 meses. Há 1 ano, apresentou perda fetal na 26ª semana gestacional, sem causa definida. Nega tabagismo e uso contínuo de medicações. Exame físico: livedo reticular em membros inferiores. Exames laboratoriais evidenciam plaquetopenia. A alteração mais associada ao quadro é:',
    options: [
      '(A) Presença do fator V de Leiden em heterozigose.',
      '(B) Deficiência de proteína S.',
      '(C) Deficiência de antitrombina III.',
      '(D) Presença de anticoagulante lúpico.'
    ],
    correctAnswer: 3,
    explanation: 'O quadro de trombose venosa, perda gestacional de feto morfologicamente normal após a 10ª semana de gestação, livedo reticular e plaquetopenia é clássico da Síndrome do Anticorpo Antifosfolípide (SAF), na qual o anticoagulante lúpico constitui uma das alterações laboratoriais definidoras.',
    commentary: 'Comentários sobre a resposta correta:\n(D) A paciente preenche critérios diagnósticos clínicos rígidos para a Síndrome do Anticorpo Antifosfolípide (SAF), uma trombofilia autoimune adquirida associada a trombose vascular (TVP) e morbidade gestacional (morte de feto saudável após 10 semanas de gestação). Manifestações como livedo reticular e plaquetopenia de caráter autoimune também dão forte suporte diagnóstico. O anticoagulante lúpico é o anticorpo que mais se correlaciona com o risco trombótico nessas pacientes.\n\nComentários sobre os distratores:\n(A, B, C) Fator V de Leiden e deficiências de proteína S ou de antitrombina III são trombofilias hereditárias importantes que elevam o risco de TVP, mas tipicamente não cursam com livedo reticular, plaquetopenia crônica ou perdas fetais tardias repetidas desse padrão específico.',
    reference: 'BARBHAIYA, M; et al. 2023 ACR/EULAR Antiphospholipid Syndrome Classification Criteria. Arthritis & Rheumatology. 2023; 0(0): 1-16. | CARVALHO, M. A. P; et al. Reumatologia: Diagnóstico e Tratamento. 5. ed. Rio de Janeiro: Guanabara Koogan, 2019.',
    tags: ['reumatologia', 'hematologia']
  },
  {
    id: 'tp2026-34',
    module: 'Clínica Médica',
    text: 'Um adolescente de 16 anos é levado ao hospital com história de fadiga, febre e sangramentos gengivais há 3 semanas. Ao exame físico apresenta palidez, petéquias e linfadenomegalia cervical. Hemograma: Hb 8g/dL; Leucócitos 35.000/mm³; Plaquetas 40.000/mm³. Presença de blastos no sangue periférico. Qual é o exame diagnóstico confirmatório mais indicado?',
    options: [
      '(A) Dosagem de ferritina',
      '(B) Mielograma',
      '(C) Biópsia de linfonodo',
      '(D) Eletroforese de hemoglobina'
    ],
    correctAnswer: 1,
    explanation: 'O mielograma (aspirado de medula óssea) é o exame padrão ouro indispensável para a análise citomorfológica e confirmação diagnóstica das leucemias agudas pela identificação de infiltração por mais de 20% de blastos.',
    commentary: 'Comentários sobre a resposta correta:\n(B) A tríade clínica (febre, manifestações hemorrágicas por plaquetopenia, palidez por anemia) associada a leucocitose com presença de células imaturas (blastos) no sangue periférico indica fortemente um quadro de leucemia aguda. O mielograma é o exame inicial confirmatório padrão ouro, complementado pela imunofenotipagem para definição de linhagem mieloide ou linfoide.\n\nComentários sobre os distratores:\n(A) A dosagem de ferritina avalia as reservas orgânicas de ferro e não possui utilidade em diagnóstico de distúrbios linfoproliferativos agudos.\n(C) A biópsia de linfonodo é diagnóstica para linfomas, mas não deve atrasar a realização de mielograma diante de infiltração medular com pancitopenia periférica evidente.\n(D) A eletroforese de hemoglobina é indicada para identificação de hemoglobinopatias hereditárias (como anemia falciforme), sem relevância diagnóstica em suspeitas de leucemia.',
    reference: 'World Health Organization Classification of Tumours of Haematopoietic and Lymphoid Tissues. | Hoffbrand’s Essential Haematology, 8th edition, Wiley-Blackwell, 2020.',
    tags: ['hematologia', 'oncologia']
  },
  {
    id: 'tp2026-35',
    module: 'Clínica Médica',
    text: 'Homem de 70 anos procura a UBS, pois vem apresentando quadro progressivo de contrações musculares involuntárias, espasmos, câimbras dolorosas principalmente em membros e fraqueza. Refere perda de peso não intencional nos últimos meses e aumento de linfonodos cervicais em investigação. Ao exame físico, encontra-se discretamente desidratado. Laboratoriais: Fósforo 6,2mg/dL; Cálcio total 5,5mg/dL; Creatinina 2,3mg/dL; Hemoglobina 13g/dL. Considerando a principal hipótese diagnóstica, esperam-se as seguintes alterações laboratoriais adicionais:',
    options: [
      '(A) Hipouricemia e hipoglicemia',
      '(B) Hipomagnesemia e hipouricemia',
      '(C) Hipercalemia e hiperuricemia',
      '(D) Hipocalemia e hiperuricemia'
    ],
    correctAnswer: 2,
    explanation: 'A Síndrome de Lise Tumoral (SLT) decorre de liberação massiva de componentes intracelulares, caracterizando-se por hiperfosfatemia, hipocalcemia sintomática secundária, hipercalemia e hiperuricemia.',
    commentary: 'Comentários sobre a resposta correta:\n(C) O quadro clínico (paciente com suspeita de linfoma exibindo emagrecimento e linfadenopatia progressiva) com hiperfosfatemia e hipocalcemia severa (que deflagrou sintomas de irritabilidade neuromuscular: espasmos, contrações) e lesão renal aguda é clássico da Síndrome de Lise Tumoral (SLT) espontânea. Pelos critérios de Cairo-Bishop, as anormalidades eletrolíticas e metabólicas adicionais esperadas são a hipercalemia (liberação do potássio celular) e a hiperuricemia (pela quebra dos ácidos nucleicos celulares).\n\nComentários sobre os distratores:\n(A, B) A SLT cursa necessariamente com hiperuricemia robusta devido à catabolização das purinas liberadas, o que exclui as alternativas que sugerem hipouricemia.\n(D) A lise celular provoca a liberação maciça do potássio intracelular na circulação, acarretando hipercalemia grave, e não hipocalemia.',
    reference: 'Duminuco A, Del Fabro V, De Luca P, Leotta D, Limoli MC, Longo E, Nardo A, Santuccio G, Petronaci A, Stanzione G, Di Raimondo F, Palumbo GA. Emergencies in Hematology: Why, When and How I Treat? J Clin Med. 2024 Dec 12;13(24):7572.',
    tags: ['hematologia', 'oncologia', 'nefrologia']
  },
  {
    id: 'tp2026-36',
    module: 'Clínica Médica',
    text: 'Homem de 62 anos, tabagista, com DPOC, chega ao pronto atendimento com dispneia, sonolência, FR 10irpm e uso de musculatura acessória. Gasometria: pH 7,28; PaCO₂ 62mmHg; PaO₂ 58mmHg. Após oxigênio suplementar, mantém rebaixamento do nível de consciência. Qual a melhor conduta inicial?',
    options: [
      '(A) Indicar intubação orotraqueal e ventilação mecânica invasiva.',
      '(B) Iniciar ventilação mecânica não invasiva.',
      '(C) Manter apenas oxigenoterapia de baixo fluxo e reavaliar em 6 horas.',
      '(D) Instalar catéter nasal de alto fluxo.'
    ],
    correctAnswer: 0,
    explanation: 'O rebaixamento do nível de consciência e incapacidade de proteger vias aéreas associados à acidose respiratória severa em paciente com insuficiência respiratória hipercápnica por DPOC determinam indicação imediata de intubação orotraqueal (IOT) e ventilação mecânica invasiva.',
    commentary: 'Comentários sobre a resposta correta:\n(A) O paciente apresenta insuficiência respiratória hipercápnica descompensada (PaCO₂ 62 mmHg e pH 7,28) e sinais francos de fadiga respiratória severa associados a rebaixamento persistente do nível de consciência (sonolência). A incapacidade de proteger vias aéreas e cooperar contraindica formalmente a ventilação não invasiva (VNI), impondo a necessidade imediata de via aérea avançada (IOT) e ventilação mecânica invasiva.\n\nComentários sobre os distratores:\n(B) A ventilação mecânica não invasiva (VNI) é a escolha padrão ouro na DPOC exacerbada hipercápnica, porém sua contraindicação formal é o rebaixamento persistente da consciência pelo alto risco de broncoaspiração de secreções e insucesso ventilatório.\n(C, D) Apenas manter oxigênio (seja por baixo fluxo ou cateter de alto fluxo) sem suporte mecânico pressórico ventilatório ativo em paciente com hipoventilação alveolar (FR 10 rpm) agravará a narcose por CO₂ e poderá culminar em parada respiratória.',
    reference: 'Lagina M, Valley TS. Diagnosis and Management of Acute Respiratory Failure. Critical Care Clinics. 2024. | Munshi L, Mancebo J, Brochard LJ. Noninvasive Respiratory Support for Adults with Acute Respiratory Failure. N Engl J Med. 2022.',
    tags: ['pneumologia', 'emergência']
  },
  {
    id: 'tp2026-37',
    module: 'Clínica Médica',
    text: 'Paciente de 58 anos, previamente hígido, procura pronto atendimento com história de febre há 2 dias, associada a tosse prodututiva e dispneia progressiva. Na admissão, apresenta-se com extremidades frias, sonolento, com os seguintes sinais vitais: Tax 38,7°C, FC 112bpm, FR 26rpm, PA 92/58mmHg, Saturação de O₂ 91% em ar ambiente. Ao exame físico, observam-se estertores crepitantes em base pulmonar direita. Considerando o quadro clínico, qual a melhor conduta inicial nas primeiras horas de atendimento?',
    options: [
      '(A) Iniciar antibioticoterapia empírica imediata e monitorização clínica. Coleta de exames complementares e reposição volêmica otimizada após estabilização inicial do paciente.',
      '(B) Coletar exames laboratoriais e hemoculturas, iniciar reposição volêmica e aguardar os resultados para definição da antibioticoterapia direcionada.',
      '(C) Reconhecer quadro sugestivo de sepse de foco pulmonar, coletar exames iniciais e iniciar antibioticoterapia empírica associada a reposição volêmica, com monitorização em ambiente de emergência.',
      '(D) Aplicar critérios de gravidade e iniciar antibioticoterapia empírica, priorizando confirmação do foco infeccioso por exames de imagem antes da reposição volêmica.'
    ],
    correctAnswer: 2,
    explanation: 'O reconhecimento rápido da sepse e o início coordenado do feixe de condutas nas primeiras horas (coleta de culturas, início célere de antimicrobianos e ressuscitação volêmica precoce) diminuem comprovadamente a mortalidade.',
    commentary: 'Comentários sobre a resposta correta:\n(C) O paciente preenche os critérios diagnósticos clássicos de sepse (foco infeccioso pulmonar associado a manifestações de disfunção orgânica de perfusão: hipotensão arterial, sonolência, taquicardia e extremidades frias). A conduta consensual imediata envolve: monitorização na sala de emergência, coleta rápida de exames laboratoriais e culturas (hemoculturas) sem retardar o início da reposição volêmica agressiva com cristaloides e a infusão de antibiótico de amplo espectro nas primeiras horas.\n\nComentários sobre os distratores:\n(A) A reposição volêmica precoce constitui medida salvadora de urgência e não deve ser postergada até "após a estabilização".\n(B) Jamais se deve aguardar os resultados laboratoriais ou identificação de culturas para iniciar a antibioticoterapia na suspeita clínica de sepse.\n(D) Exames de imagem diagnósticos (raio-X/tomografia) não devem de forma alguma atrasar as condutas iniciais de reperfusão sistêmica e reanimação volêmica.',
    reference: 'INSTITUTO LATINO-AMERICANO DE SEPSE (ILAS). Protocolo clínico de sepse: atendimento ao paciente adulto com sepse/choque séptico. São Paulo: ILAS, 2023.',
    tags: ['infectologia', 'emergência', 'pneumologia']
  },
  {
    id: 'tp2026-38',
    module: 'Clínica Médica',
    text: 'Homem de 58 anos chega ao pronto atendimento com dor torácica há 2 horas. ECG mostra supradesnivelamento do segmento ST in parede anterior. O hospital não possui hemodinâmica e o tempo estimado para transferência é de 150 minutos. Qual a melhor conduta inicial?',
    options: [
      '(A) Indicar angiografia coronariana eletiva após 72 horas.',
      '(B) Transferir para angioplastia primária.',
      '(C) Manter apenas terapia medicamentosa via oral.',
      '(D) Iniciar terapia fibrinolítica imediatamente, se não houver contraindicações.'
    ],
    correctAnswer: 3,
    explanation: 'No IAM com supra de ST, quando o tempo previsto para transferência visando à angioplastia primária ultrapassa os 120 minutos, a terapia fibrinolítica imediata deve ser a conduta prioritária de escolha.',
    commentary: 'Comentários sobre a resposta correta:\n(D) A meta de tempo ideal para angioplastia primária (ICP primária) é de até 120 minutos do primeiro contato médico. Diante da impossibilidade física demonstrada pelo tempo de transporte de 150 minutos, o benefício da recanalização mecânica tardia é superado pela agilidade da recanalização química imediata. Deve-se iniciar a terapia fibrinolítica no próprio serviço de origem, se não houver contraindicações absolutas, visando abrir a artéria em menos de 30 minutos.\n\nComentários sobre os distratores:\n(A) O cateterismo eletivo após 72 horas é contraindicado na vigência de oclusão coronariana aguda ativa em andamento com supra de ST.\n(B) Postergar a reperfusão coronariana por mais de 120 minutos aguardando transporte eleva substancialmente a perda de massa miocárdica e mortalidade na parede anterior do ventrículo esquerdo.\n(C) A terapia apenas medicamentosa sem conduta imediata de reperfusão ativa (química ou mecânica) é proscrita.',
    reference: 'Rao SV et al. 2025 ACC/AHA Guideline for Acute Coronary Syndromes. J Am Coll Cardiol. 2025. | Thygesen K et al. Fourth Universal Definition of Myocardial Infarction. J Am Coll Cardiol. 2018.',
    tags: ['cardiologia', 'emergência']
  },
  {
    id: 'tp2026-39',
    module: 'Clínica Médica',
    text: 'Mulher cis, de 52 anos, chega ao pronto-socorro com dispneia súbita e ortopneia. PA 180/100mmHg, SatO₂ 86%. Radiografia de tórax mostra opacidades alveolares bilaterais perihilares simétricas. Gasometria: pH 7,30; pCO₂ 50mmHg; pO₂ 60mmHg. Qual a principal hipótese diagnóstica?',
    options: [
      '(A) Edema agudo de pulmão cardiogênico',
      '(B) Síndrome do desconforto respiratório agudo',
      '(C) Pneumonia adquirida na comunidade',
      '(D) Tromboembolismo pulmonar'
    ],
    correctAnswer: 0,
    explanation: 'A dispneia de instalação hiperaguda com ortopneia associada a crise hipertensiva sistêmica severa e imagem radiográfica clássica de infiltrado alveolar bilateral em "asa de borboleta" (perihilar simétrico) confirma Edema Agudo de Pulmão Cardiogênico.',
    commentary: 'Comentários sobre a resposta correta:\n(A) O quadro de insuficiência respiratória hipoxêmica e hipercápnica por fadiga muscular ventilatória, crise hipertensiva severa (PA 180/100 mmHg), ortopneia e radiologia de tórax exibindo o infiltrado alveolar simétrico perihilar clássico em "asa de borboleta" é a apresentação típica do Edema Agudo de Pulmão (EAP) cardiogênico secundário a disfunção ventricular aguda.\n\nComentários sobre os distratores:\n(B) A SDRA apresenta infiltrado bilateral difuso semelhante, porém tipicamente ocorre de forma subaguda após desencadeante sistêmico grave (ex.: sepse abdominal) e sem perfil de crise hipertensiva mecânica e ortopneia proeminente.\n(C) A pneumonia comunitária cursa de forma típica com febre, tosse produtiva mucopurulenta e consolidação lobar bem delimitada ao raio-X, sem infiltrado alveolar simétrico bilateral e hipertensão arterial concomitante.\n(D) O tromboembolismo pulmonar (TEP) gera dispneia súbita intensa e hipoxemia, mas cursa de forma típica com radiografia de tórax limpa ou com achados discretos e localizados (ex.: sinal de Westermark), sem edema alveolar difuso bilateral.',
    reference: 'Sociedade Brasileira de Cardiologia. Diretrizes de insuficiência cardíaca. Arquivos Brasileiros de Cardiologia, Rio de Janeiro, v. 111, n. 3, supl. 1, p. 1-436, 2018. | Braunwald’s Heart Disease: A Textbook of Cardiovascular Medicine. 12. ed. Philadelphia: Elsevier, 2022.',
    tags: ['cardiologia', 'emergência', 'pneumologia']
  },
  {
    id: 'tp2026-40',
    module: 'Clínica Médica',
    text: 'Paciente de 21 anos, com antecedente de diabetes mellitus tipo 1, refere quadro gripal há cerca de uma semana, associado a inapetência, o que levou à omissão de doses de insulina. Procura atendimento de urgência com náuseas, vômitos, dor abdominal e sinais de desidratação. Exames laboratoriais evidenciam: glicemia 420mg/dL; pH 7,1; bicarbonato 3mEq/L. Diante do quadro, a conduta inicial mais adequada é:',
    options: [
      '(A) Administração de bicarbonato de sódio intravenoso.',
      '(B) Hidratação e dosagem de potássio sérico.',
      '(C) Iniciar infusão de insulina regular intravenosa.',
      '(D) Iniciar insulina subcutânea de ação intermediária.'
    ],
    correctAnswer: 1,
    annulled: true,
    explanation: "Questão anulada pela banca: aparece para estudo, mas não conta na nota.\n\nNa cetoacidose diabética, a diurese osmótica causa desidratação importante. O primeiro passo é a reposição volêmica com soro fisiológico e a dosagem do potássio: a insulina leva o potássio para dentro das células, e iniciá-la com potássio abaixo de 3,3 mEq/L pode causar hipocalemia grave e arritmias. Por isso a alternativa B é a mais aceita.",
    commentary: 'Comentários sobre a resposta correta:\n(B) A cetoacidose diabética (CAD) causa desidratação profunda decorrente de diurese osmótica maciça. O passo prioritário inicial do tratamento é a reposição volêmica imediata com soro fisiológico e a dosagem do potássio sérico. É imperativo conhecer os níveis de potássio antes de iniciar a infusão de insulina regular, pois a insulina desvia o potássio para o intracelular, o que pode desencadear hipocalemia severa e arritmias cardíacas fatais se os níveis basais forem menores que 3,3 mEq/L.\n\nComentários sobre os distratores:\n(A) O uso de bicarbonato na CAD é de exceção e reservado a casos de acidemia extrema com pH < 6,9 pelo risco de hipocalemia refratária, edema cerebral e acidose liquórica paradoxal.\n(C) Embora a insulina regular intravenosa seja o tratamento específico para a CAD, ela não deve anteceder a expansão volêmica vigorosa inicial e deve aguardar a confirmação de que o potássio sérico está > 3,3 mEq/L.\n(D) A insulina subcutânea de ação intermediária (NPH) não possui papel terapêutico útil no manejo de urgência de crises hiperglicêmicas agudas no pronto-socorro.',
    reference: 'American Diabetes Association (ADA) Guidelines on Hyperglycemic Crises in Adult Patients with Diabetes. | HAJJAR, Ludhmila Abrahão; BRANDÃO NETO, Rodrigo Antonio (eds.). Medicina de emergência: abordagem prática. 19. ed. Santana de Parnaíba (SP): Manole, 2025. Note: esta questão foi originalmente anulada no gabarito oficial por imprecisão de opções, porém clinicamente a hidratação associada à dosagem de potássio permanece como a conduta primária obrigatória.',
    tags: ['endocrinologia', 'emergência']
  },
  // ---- Teste de Progresso 2019 (gabarito oficial) ----
  {
    id: 'tp2019-21',
    module: 'Clínica Médica',
    image: '/images/tp2019-21.webp',
    text: 'Homem, 82 anos, 60kg, com hipertensão arterial sistêmica e diabetes melitus 2, vem ao pronto-socorro referindo dor torácica há um dia com duração de mais ou menos 20 minutos. Relata também dispneia ao deitar, edema nas pernas e diminuição da diurese. Refere ter “problema de coração”. Faz uso de furosemida 40mg (2x/dia), carvedilol 6,25mg (2x/dia), enalapril 20mg (2x/dia). Exame físico: estase jugular, edema de membros inferiores 2+/4+, PA = 140 x 90 mmHg e boa perfusão periférica. Eletrocardiograma a seguir:\n\nQual exame deve ser solicitado nesse momento e qual a primeira medicação a ser realizada?',
    options: [
      '(A) Troponina; trombolítico.',
      '(B) Eletrólitos; furosemida.',
      '(C) Troponina; furosemida.',
      '(D) Eletrólitos; gluconato de cálcio.'
    ],
    correctAnswer: 3,
    explanation: 'Idoso com insuficiência cardíaca descompensada, em uso de IECA em dose alta e com oligúria: o ECG mostra ondas T apiculadas, sugestivas de hipercalemia.\n\nCom alteração eletrocardiográfica, o gluconato de cálcio deve ser feito antes mesmo do resultado do potássio, para estabilizar a membrana miocárdica e prevenir arritmias. Os eletrólitos confirmam o diagnóstico.',
    commentary: 'Trombolítico não tem indicação sem supradesnivelamento de ST. A furosemida ajuda a tratar a congestão e a eliminar potássio, mas não é a primeira medida diante de alteração eletrocardiográfica por hipercalemia.',
    reference: 'Suporte Avançado de Vida em Insuficiência Cardíaca: SAVIC. Ed. Canesin MF, Oliveira Jr MT, Pereira-Barretto AC. 3a edição, São Paulo: Editora Manole Ltda, 2014, pp 37-44. / Emergências Clínicas: abordagem prática. Ed. Martins HS, Brandão Neto RA, Scalabrini Neto A, Velasco IT. 9a edição: Editora Manole Ltda, 2014, pp 1130-1135.',
    tags: ['cardiologia', 'hipercalemia', 'insuficiência cardíaca']
  },
  {
    id: 'tp2019-22',
    module: 'Clínica Médica',
    text: 'Mulher, 70 anos, está em observação no Pronto-Socorro devido a febre, tosse com expectoração purulenta e dor ventilatório-dependente em região posterior do hemitórax esquerdo há três dias. Na admissão, estava com FC = 98 bpm, temperatura axilar = 39ºC, FR = 22 ipm e PA = 90 x 58 mmHg. Evoluiu com redução do débito urinário < 0,5 mL/kg/h por 24h e aumento proporcionado dos níveis séricos de ureia e creatinina. O sedimento de urina revelou cilindros granulosos e epiteliais. A osmolaridade urinária está normal.\n\nA causa provável da insuficiência renal aguda é:',
    options: [
      '(A) Lesão pré-renal, queda da filtração renal por sepse.',
      '(B) Lesão renal, necrose tubular aguda por sepse.',
      '(C) Lesão pré-renal, queda da filtração renal por hipotensão.',
      '(D) Lesão renal, nefrite intersticial por pielonefrite aguda.'
    ],
    correctAnswer: 1,
    explanation: 'Idosa com pneumonia e hipotensão (sepse de foco pulmonar) evoluindo com oligúria, elevação proporcional de ureia e creatinina, cilindros granulosos e epiteliais e osmolaridade urinária normal (sem concentração).\n\nEsse padrão indica lesão renal intrínseca — necrose tubular aguda por sepse.',
    commentary: 'Na lesão pré-renal, a relação ureia/creatinina é desproporcionalmente elevada e a urina é concentrada, com sedimento pobre. Não há dados de pielonefrite.',
    reference: 'http://www.uptodate.com/contents/overview-of-the-management-of-acute-kidney-injury-acute-renal-failure',
    tags: ['nefrologia', 'lesão renal aguda', 'sepse']
  },
  {
    id: 'tp2019-23',
    module: 'Clínica Médica',
    image: '/images/tp2019-23.webp',
    text: 'Homem, 80 anos, admitido para avaliação no Pronto-Socorro por lombalgia intensa há duas horas. Nega história de trauma ou esforço. Queixa-se de dor localizada em região lombar alta, sem irradiação, sem outros sintomas. Histórico de nefrolitíase, gota e doença pulmonar obstrutiva crônica (DPOC) grave, com inúmeras crises de exacerbação, com necessidade de internação e corticoterapia sistêmica. Exame físico: dor à palpação local e à mobilização da coluna, porém com amplitude de movimento preservada. Radiografia de coluna a seguir:\n\nDiante desse quadro, o diagnóstico é:',
    options: [
      '(A) Osteoartrite',
      '(B) Hérnia de disco vertebral',
      '(C) Osteoporose',
      '(D) Espondilodiscite'
    ],
    correctAnswer: 2,
    explanation: 'Idoso com DPOC grave e uso repetido de corticoide sistêmico, com lombalgia súbita sem trauma: os dois principais fatores de risco para fratura vertebral por fragilidade. A radiografia mostra corpos vertebrais hipertransparentes e acunhamento vertebral — osteoporose com fratura por compressão.',
    commentary: 'Osteoartrite causa osteófitos e redução de espaço articular. A hérnia de disco não é visível em radiografia e cursa com radiculopatia. A espondilodiscite cursa com febre e destruição do disco.',
    reference: 'Lindsay R, Cosman F. Osteoporosis. In: Kasper D, Fauci A, Hauser S, Longo D, Jameson J, Loscalzo J. eds. Harrison\'s Principles of Internal Medicine, 19e. New York, NY: McGraw-Hill; 2015.',
    tags: ['reumatologia', 'osteoporose', 'corticoterapia']
  },
  {
    id: 'tp2019-24',
    module: 'Clínica Médica',
    image: '/images/tp2019-24.webp',
    text: 'Homem, 53 anos, lavrador, apresenta há oito meses lesão indolor e de crescimento lento, medindo 3cm, na região bucinadora esquerda (figura a seguir), associada a manchas hipercrômicas em áreas expostas ao sol.\n\nO diagnóstico, o tratamento e o prognóstico são:',
    options: [
      '(A) Carcinoma basocelular; excisão cirúrgica com margens de segurança; bom prognóstico por não causar metástases.',
      '(B) Carcinoma basocelular; eletrocoagulação; bom prognóstico por não causar metástases.',
      '(C) Carcinoma espinocelular; excisão cirúrgica com margens de segurança; prognóstico reservado, pois pode causar metástases.',
      '(D) Carcinoma espinocelular; eletrocoagulação; prognóstico reservado, pois pode causar metástases.'
    ],
    correctAnswer: 0,
    explanation: 'Lesão nodular perolada, com telangiectasias e crescimento lento em área fotoexposta de lavrador: carcinoma basocelular nodular.\n\nO tratamento de escolha é a excisão cirúrgica com margens de segurança e análise histológica. O prognóstico é muito bom, pois o CBC raramente metastatiza, embora possa ser localmente destrutivo.',
    commentary: 'A eletrocoagulação não permite avaliação de margens e não é a opção indicada para lesão desse tamanho na face. O carcinoma espinocelular tende a ser ceratósico, ulcerado e de crescimento mais rápido.',
    reference: 'Belda W, Di Chiachio N, Criado PR. Tratado de Dermatologia, Ed. Atheneu, 2015. / Sampaio SAP; Rivitti EA. Dermatologia - edição 2011 - São Paulo: Artes médicas. 9 5',
    tags: ['dermatologia', 'câncer de pele', 'carcinoma basocelular']
  },
  {
    id: 'tp2019-25',
    module: 'Clínica Médica',
    text: 'Homem, 47 anos, dá entrada na Unidade de Emergência trazido por familiares, com história de etilismo crônico. Encontrava-se acamado há dois dias por queda do estado geral, fraqueza generalizada e anorexia. Não apresentava febre. Hoje, iniciou confusão mental, alucinações, ideação paranoide e abalos musculares tônico-clônicos generalizados fugazes, com recuperação espontânea, recobrando a consciência entre as crises. Exame físico: PA = 150/90 mmHg; FC = 120 bpm; T = 37,6ºC; FR = 22 ipm, ansioso, agitado, confuso, desorientado, com sudorese profusa e tremor intenso das mãos. Glicemia capilar = 75 mg/dL.\n\nO diagnóstico clínico mais provável é:',
    options: [
      '(A) Crise epiléptica do paciente etilista crônico',
      '(B) Síndrome colinérgica',
      '(C) Delirium tremens',
      '(D) Síndrome de Wernicke-Korsakoff'
    ],
    correctAnswer: 2,
    explanation: 'Etilista crônico com abstinência (acamado há 2 dias) apresenta confusão, alucinações, crises convulsivas, hiperatividade autonômica intensa (taquicardia, hipertensão, febre baixa, sudorese) e tremor: delirium tremens, a forma mais grave da síndrome de abstinência alcoólica, em geral 48–72 horas após a última dose.\n\nO tratamento envolve benzodiazepínicos, tiamina antes da glicose e suporte.',
    commentary: 'Uma crise epiléptica isolada não explica o delirium e a hiperatividade autonômica. A síndrome colinérgica cursa com miose, bradicardia e secreções. A encefalopatia de Wernicke cursa com ataxia, oftalmoplegia e confusão, sem hiperatividade autonômica.',
    reference: 'Condutas em urgências e emergências da Faculdade de Medicina de Botucatu-UNESP / editores Regina Helena Garcia Martins, Silvana Artioli Schellini. - Botucatu: UNESP, Faculdade de Medicina de Botucatu e Pró-Reitoria de Graduação da UNESP: Cultura acadêmica, 2014. / Hoffman RS, Weinhouse GL. Management of moderate and severe alcohol withdrawal. In: Post TW, ed. UpToDate. Waltham, MA: UpToDate Inc. Disponível online em: https://www.uptodate.com (Último acesso em 25 de julho de 2019.)',
    tags: ['clínica médica', 'álcool', 'emergência']
  },
  {
    id: 'tp2019-26',
    module: 'Clínica Médica',
    text: 'Mulher, 45 anos, portadora de Doença de Crohn com acometimento ileal, apresenta-se com queixas de mal-estar, fadiga, astenia, tontura e palpitações de caráter progressivo. Exame físico: emagrecida, descorada 3+/4+, glossite e queilite angular. Hb = 6,8 g/dL (VR > 12,5), Ht = 22% (VR > 38%), VCM = 116 fL (VR = 80 - 100), HCM = 38 pg (VR = 28 - 34), RDW = 14,5% (VR < 15,5%), leucócitos = 2.800 células/mm³ (VR = 3.500 - 10.500), plaquetas = 110.000/mm³ (VR = 150.000 - 450.000).\n\nA causa mais provável da anemia nesta paciente é:',
    options: [
      '(A) Anemia por doença crônica',
      '(B) Deficiência de ferro',
      '(C) Síndrome mielodisplásica',
      '(D) Deficiência de vitamina B12'
    ],
    correctAnswer: 3,
    explanation: 'Doença de Crohn com acometimento ileal compromete a absorção de vitamina B12 (absorvida no íleo terminal). A anemia é macrocítica (VCM 116), com glossite, queilite e pancitopenia, compatíveis com anemia megaloblástica por deficiência de B12.\n\nObservação: o enunciado traz \'Hb = 6,8 g/L\', o que é um erro de digitação da prova — o valor é g/dL.',
    commentary: 'A deficiência de ferro e a anemia de doença crônica são micro ou normocíticas. A mielodisplasia é diagnóstico de exclusão e menos provável nesse contexto.',
    reference: 'Tratado de Clínica Médica - Obra Completa - 2 Vols. - 3ª Ed. 2015. (Cód: 9205200) Lopes, Antonio Carlos - Roca – Brasil.',
    tags: ['hematologia', 'anemia megaloblástica', 'doença de crohn']
  },
  {
    id: 'tp2019-27',
    module: 'Clínica Médica',
    image: '/images/tp2019-27.webp',
    text: 'Mulher, 25 anos, procura a Unidade Básica de Saúde por prurido no corpo todo há 10 dias. Trabalha em fábrica de peças para automóveis, manipulando graxa e solventes. Tem um filho de três anos que passa o dia na creche e que também está se coçando muito, principalmente à noite. As lesões são pápulas eritematosas, algumas encimadas por crostículas, outras em arranjo linear, com muita escoriação, distribuindo-se no abdome, mamas, axilas e face interna dos braços (foto a seguir).\n\nO diagnóstico e os achados clínicos que o definem são:',
    options: [
      '(A) Dermatofitose; caso semelhante em criança da família que frequenta creche.',
      '(B) Escabiose; pápulas escoriadas e túneis, prurido noturno e topografia.',
      '(C) Dermatite atópica; prurido, escoriações e topografia das lesões.',
      '(D) Dermatite de contato; histórico profissional, características e distribuição das lesões.'
    ],
    correctAnswer: 1,
    explanation: 'Prurido intenso, pior à noite, com pápulas escoriadas e túneis em abdome, mamas, axilas e face interna dos braços, e caso semelhante em contactante (filho): escabiose, causada pelo Sarcoptes scabiei.\n\nO tratamento deve ser feito em todos os contactantes ao mesmo tempo.',
    commentary: 'A dermatofitose forma lesões anulares descamativas. A dermatite atópica é crônica e flexural, sem túneis. A dermatite de contato ocupacional acometeria as áreas de contato com graxa e solventes (mãos e antebraços).',
    reference: 'Sampaio SAP; Rivitti EA. Dermatologia - edição 2011 - São Paulo: Artes médicas. / Belda W, Di Chiachio N, Criado PR. Tratado de Dermatologia, Ed. Atheneu, 2015. / BOLOGNIA, J.; JORIZZO, J & RAPINI, RP. Dermatology, Mosby: 2nd ed, 2014.',
    tags: ['dermatologia', 'escabiose', 'ectoparasitoses']
  },
  {
    id: 'tp2019-28',
    module: 'Clínica Médica',
    text: 'Homem, 75 anos, hipertenso e diabético do tipo 2, procura Unidade de Emergência com queixa de ortopneia, edema de membros inferiores e cansaço. Refere uso de enalapril 10mg 12/12h, furosemida 40mg/dia e AAS 100mg/dia. Foi administrado furosemida por via endovenosa sem melhora do quadro, mantendo estase jugular, edema de membros inferiores e crepitação pulmonar bilateral até ápice. FR = 35 ipm, saturação de O₂ = 89% com fração inspirada de O₂ = 10 L/min em máscara com reservatório, FC = 92 bpm, PA = 190 x 100 mmHg e tempo de enchimento capilar de 2 segundos.\n\nA medicação mais adequada indicada nesse momento é:',
    options: [
      '(A) Dobutamina',
      '(B) Carvedilol',
      '(C) Nitroprussiato',
      '(D) Captopril'
    ],
    correctAnswer: 2,
    explanation: 'Edema agudo de pulmão hipertensivo (PA 190 x 100) em insuficiência cardíaca perfil B (quente e úmido), sem resposta ao diurético.\n\nO vasodilatador endovenoso arterial e venoso — nitroprussiato — reduz pré e pós-carga, alivia a congestão e controla a pressão rapidamente.',
    commentary: 'Dobutamina é indicada no paciente frio (baixo débito). Carvedilol não deve ser iniciado na descompensação aguda. Captopril oral age mais lentamente e é introduzido após a estabilização.',
    reference: 'Suporte Avançado de Vida em Insuficiência Cardíaca: SAVIC. Ed. Canesin MF, Oliveira Jr MT, Pereira-Barretto AC. 3a edição, São Paulo: Editora Manole Ltda, 2014, pp 09-14 e 37-44.',
    tags: ['cardiologia', 'insuficiência cardíaca', 'edema agudo de pulmão']
  },
  {
    id: 'tp2019-29',
    module: 'Clínica Médica',
    text: 'Mulher, 40 anos, apresenta há dois meses poliartrite simétrica em articulações das mãos e punhos, aditiva, com rigidez matinal superior a uma hora. A radiografia de mãos apresenta osteopenia periarticular, erosões marginais e cistos subcondrais em articulações metacarpofalangeanas e interfalangeanas proximais. Exames laboratoriais com anemia normocítica normocrômica, elevação de provas inflamatórias e fator reumatoide negativo.\n\nO diagnóstico mais provável é:',
    options: [
      '(A) Artrite Reumatoide',
      '(B) Lúpus Eritematoso Sistêmico',
      '(C) Osteoartrite',
      '(D) Fibromialgia'
    ],
    correctAnswer: 0,
    explanation: 'Poliartrite simétrica, aditiva, de pequenas articulações das mãos e punhos, rigidez matinal maior que uma hora, osteopenia periarticular e erosões marginais à radiografia, com provas inflamatórias elevadas: artrite reumatoide.\n\nO fator reumatoide negativo não exclui o diagnóstico, pois cerca de 25% dos pacientes são soronegativos; o anti-CCP pode ajudar.',
    commentary: 'O lúpus causa artrite não erosiva. A osteoartrite acomete interfalangeanas distais, com osteófitos e rigidez curta. A fibromialgia não tem sinovite nem alterações radiográficas.',
    reference: 'Protocolo Clínico e Diretrizes Terapêuticas. Ministério de Saúde. Portaria SAS/MS nº 710, de 27 de junho de 2013, retificada em 06 de março de 2014 e 10 de junho de 2014. / Altman R, Alarcón G, Appelrouth D, Bloch D, Borenstein D, Brandt K, et al. The American College of Rheumatology criteria for the classification Andre porting of osteoarthritis of the hand. Arthritis Rheum. 1990;33(11):1601-10. / Wolfe F, Clauw DJ, Fitzcharles MA, Goldenberg DL, Katz RS, Mease P, et al. The American College of Rheumatology preliminary diagnostic criteria for fibromyalgia and measurement of symptom severity. Arthritis Care Res (Hoboken). 2010;62:600-10. 9 7',
    tags: ['reumatologia', 'artrite reumatoide']
  },
  {
    id: 'tp2019-30',
    module: 'Clínica Médica',
    text: 'Homem, 50 anos, queixa-se de cefaleia diária nas últimas duas semanas. Relata dois episódios diários de dor, um deles ocorrendo sempre no período noturno, despertando-o do sono. A dor é de grande intensidade, no lado direito da face e crânio, com duração de uma hora, acompanhada de lacrimejamento e hiperemia do olho direito e congestão nasal. Exame neurológico normal.\n\nO diagnóstico mais provável é:',
    options: [
      '(A) Glaucoma de ângulo fechado',
      '(B) Sinusite etmoidal',
      '(C) Neuralgia idiopática persistente',
      '(D) Cefaleia em salvas'
    ],
    correctAnswer: 3,
    explanation: 'Homem com crises de dor unilateral intensa periorbitária de cerca de uma hora, uma ou duas vezes ao dia, despertando-o à noite, com lacrimejamento, hiperemia ocular e congestão nasal ipsilaterais: cefaleia em salvas, uma cefaleia trigêmino-autonômica.\n\nA crise é tratada com oxigênio a 100% ou triptano subcutâneo.',
    commentary: 'O glaucoma agudo cursa com baixa visual e olho vermelho persistente, sem padrão em crises diárias. A sinusite causa dor contínua com febre e secreção. A neuralgia idiopática persistente não tem sinais autonômicos.',
    reference: 'Headache Classification Committee of the International Headache Society (IHS). The international classification of headache disorders, 3rd edition. Cephalalgia 2018, 38(1): 1- 211. / Speciali JG, Kowacs F, Jurno ME et al. Protocolo nacional para diagnóstico e manejo das cefaleias nas unidades de urgência do brasil. ABN, 2018. / Paço J, Sousa MT. Patologia naso-sinusal. Círculo Médico, 2008. Disponível em: repositorio.hff.min-saude.pt. Acesso em: 05/07/2019. / Gronseth G, Cruccu G, Alksne J, Argoff C, Brainin M, Burchiel K, Nurmikko T, Zakrzewska JM. Practice parameter: the diagnostic evaluation and treatment of trigeminal neuralgia (an evidence-based review): report of the Quality Standards Subcommittee of the American Academy of Neurology and the European Federation of Neurological Societies. Neurology 2008;71: 1183– 90. / Conselho Brasileiro de Oftalmologia. Glaucoma. Disponível em: http://www.cbo.com.br/pacientes/doencas/doencas_glaucoma.htm. Acesso em: 05/07/2019.',
    tags: ['neurologia', 'cefaleias']
  },
  {
    id: 'tp2019-31',
    module: 'Clínica Médica',
    image: '/images/tp2019-31.webp',
    text: 'Homem, 68 anos, há 20 dias apresentou mal-estar, tosse com expectoração amarelada e febre de até 39°C. Foi tratado com amoxicilina e apresentou melhora do quadro. Há dois dias, surgiu dor no hemitórax direito, ventilatório-dependente, sem irradiação e sem fatores de melhora. Procurou novamente o serviço médico. Exame físico: bom estado geral, hidratado, eupneico. PA = 130 x 80 mmHg, SatO₂ em ar ambiente = 94%, FR = 14 ipm, FC = 100 bpm, T = 36,5°C. Bulhas rítmicas e normofonéticas sem sopros. Expansibilidade diminuída, redução do frêmito toracovocal, macicez à percussão e diminuição do murmúrio vesicular no terço inferior do hemitórax direito. Radiografia de tórax:\n\nA conduta mais adequada é:',
    options: [
      '(A) Drenagem torácica',
      '(B) Tratamento com analgésico',
      '(C) Toracocentese diagnóstica',
      '(D) Tratamento com novo antibiótico'
    ],
    correctAnswer: 2,
    explanation: 'Após pneumonia tratada, o paciente desenvolve dor pleurítica e sinais de derrame pleural à direita (macicez, murmúrio e frêmito reduzidos), confirmado à radiografia.\n\nTodo derrame parapneumônico significativo deve ser puncionado (toracocentese diagnóstica) para diferenciar derrame não complicado, complicado ou empiema — o que define a necessidade de drenagem.',
    commentary: 'A drenagem antes da análise do líquido seria precipitada. Analgesia isolada ou troca de antibiótico não esclarecem a natureza do derrame.',
    reference: 'Marchi, E; Vaz MAC, Fernandes, PMP; Derrames parapneumônicos e empiema. In: Vargas, F; Teixeira, L, Marchi, E. Derrame pleural. São Paulo, Roca, 2004.',
    tags: ['pneumologia', 'derrame pleural', 'pneumonia']
  },
  {
    id: 'tp2019-32',
    module: 'Clínica Médica',
    image: '/images/tp2019-32.webp',
    text: 'Homem, 60 anos, está em tratamento para psoríase sem controle adequado da doença. Há oito meses iniciou uso de imunobiológico (infliximabe) e obteve significativa melhora. Há três semanas começou a apresentar febre e tosse seca. Foi à Unidade de Pronto Atendimento há uma semana e foi tratado com azitromicina, sem melhora. Refere perda do apetite e diminuição do peso (3kg) no período. Exame físico: bom estado geral, hidratado, taquipneico e afebril. Exame respiratório, cardiovascular e abdominal sem alterações. FC = 90 bpm; PA = 120 x 70 mmHg, T = 38,6ºC. Radiografia de tórax:\n\nA hipótese diagnóstica mais provável é:',
    options: [
      '(A) Tuberculose miliar',
      '(B) Histoplasmose disseminada',
      '(C) Broncopneumonia',
      '(D) Paracoccidiodomicose'
    ],
    correctAnswer: 0,
    explanation: 'Paciente em uso de anti-TNF (infliximabe), que aumenta muito o risco de reativação de tuberculose, com febre, tosse seca, perda de peso, sem resposta à azitromicina, e radiografia com infiltrado micronodular difuso (padrão miliar): tuberculose miliar.\n\nPor isso, rastrear e tratar infecção latente antes de iniciar imunobiológicos é obrigatório.',
    commentary: 'A broncopneumonia não tem esse padrão radiológico nem evolução subaguda. Não há dados epidemiológicos para histoplasmose ou paracoccidioidomicose.',
    reference: 'Manual de Controle da Tuberculose – Ministério da Saúde – 2011.',
    tags: ['pneumologia', 'tuberculose', 'imunobiológicos']
  },
  {
    id: 'tp2019-33',
    module: 'Clínica Médica',
    text: 'Mulher, 28 anos, refere dificuldade de concentração, sono não reparador, sensação de cansaço ao acordar e dor articular e muscular em membros superiores e inferiores há seis meses. Nega perda de peso, hiporexia e febre. Exame físico: pele e mucosa sem alterações, articulações ou músculos sem sinais inflamatórios, força muscular preservada e dor em tender points.\n\nO tratamento mais efetivo é:',
    options: [
      '(A) Anti-inflamatório não hormonal',
      '(B) Atividade física aeróbica',
      '(C) Agulhamento de tender points',
      '(D) Anti-inflamatório hormonal'
    ],
    correctAnswer: 1,
    explanation: 'Dor musculoesquelética difusa há mais de 3 meses, sono não reparador, fadiga e alteração cognitiva, com exame físico sem sinais inflamatórios e dor em pontos dolorosos: fibromialgia.\n\nO tratamento com melhor evidência é a atividade física aeróbica regular, associada a educação em dor e, se necessário, fármacos como amitriptilina ou duloxetina.',
    commentary: 'Anti-inflamatórios (hormonais ou não) não têm eficácia na fibromialgia, que não é inflamatória. O agulhamento de pontos não tem evidência consistente.',
    reference: 'Goldenberg, DL. Patient education: Fibromyalgia (Beyond the Basics) UpToDate 2018. / https://www.uptodate.com/contents/fibromyalgia-beyond-the-basics.',
    tags: ['reumatologia', 'fibromialgia', 'dor crônica']
  },
  {
    id: 'tp2019-34',
    module: 'Clínica Médica',
    text: 'Mulher, 30 anos, professora, foi encaminhada da Unidade de Emergência para a Unidade de Saúde da Família (USF), após ter sido atendida seis vezes no último mês por queixas de desconforto precordial, palpitações, falta de ar, sensação de desmaio e medo de estar tendo um ataque cardíaco. Os exames realizados na emergência estavam normais e as crises passavam após a injeção de benzodiazepínico. Na USF, a paciente diz estar com receio de ter crises na frente dos alunos. Nega uso de substâncias psicoativas.\n\nA opção farmacológica de primeira escolha é:',
    options: [
      '(A) Betabloqueador',
      '(B) Antidepressivo',
      '(C) Benzodiazepínico',
      '(D) Estabilizador de humor'
    ],
    correctAnswer: 1,
    explanation: 'Crises recorrentes e inesperadas de palpitações, dispneia, dor precordial e medo de morrer, com exames normais e ansiedade antecipatória: transtorno de pânico.\n\nA primeira escolha farmacológica são os antidepressivos (ISRS), associados à terapia cognitivo-comportamental.',
    commentary: 'Benzodiazepínicos aliviam as crises, mas não devem ser a base do tratamento pelo risco de dependência. Betabloqueadores têm eficácia controversa. Estabilizadores de humor não têm indicação.',
    reference: 'National Institute for National Care and Excellence (NICE). Managing panic disorder in primary care. Disponível em: https://pathways.nice.org.uk/pathways/panic-disorder#path=view%3A;pathways/panic-disorder/stepas-2-to-5-managing-panic=disorder-in-primary-care.xml&content=view-node%3Anodes-drug-treatment',
    tags: ['psiquiatria', 'transtorno de pânico', 'atenção primária']
  },
  {
    id: 'tp2019-35',
    module: 'Clínica Médica',
    text: 'Mulher, 25 anos, operada de fístula perianal há um ano, procura o ambulatório com queixa de diarreia líquida e cólica abdominal há 10 meses. Exame físico: pálida, emagrecida, com massa palpável e dolorosa em fossa ilíaca direita. Exame contrastado do trânsito intestinal com área de estenose do íleo terminal. A colonoscopia revelou úlcera de coloração avermelhada superficial em cólon ascendente, algumas erosões lineares entremeadas por mucosa normal em cólon transverso. A análise histopatológica mostrou intenso infiltrado inflamatório linfomononuclear constituindo formações granulomatosas sem material caseoso.\n\nO diagnóstico mais provável é:',
    options: [
      '(A) Doença celíaca',
      '(B) Tuberculose intestinal',
      '(C) Retocolite ulcerativa',
      '(D) Doença de Crohn'
    ],
    correctAnswer: 3,
    explanation: 'Mulher jovem com diarreia crônica, dor, massa em fossa ilíaca direita, doença perianal (fístula), estenose de íleo terminal, lesões descontínuas no cólon e granulomas não caseosos à biópsia: doença de Crohn.',
    commentary: 'A retocolite ulcerativa é contínua, a partir do reto, restrita à mucosa e sem granulomas. A tuberculose intestinal tem granulomas caseosos. A doença celíaca acomete o delgado proximal, sem granulomas ou fístulas.',
    reference: 'KASPER, Dennis L. et al. Medicina interna de Harrison. 19. ed. Porto Alegre: AMGH, 2017.',
    tags: ['gastroenterologia', 'doença inflamatória intestinal']
  },
  {
    id: 'tp2019-36',
    module: 'Clínica Médica',
    text: 'Mulher, 68 anos, é avaliada na Unidade de Pronto Atendimento com quadro febril agudo e dispneia, recebendo o diagnóstico de pneumonia. Não apresenta comorbidades, internações ou procedimentos invasivos recentes. Exame físico: FR = 32 irpm, PA = 100 / 65 mmHg, com desorientação têmporo-espacial.\n\nO plano terapêutico para o caso deve incluir:',
    options: [
      '(A) Internação hospitalar e terapia antimicrobiana com betalactâmico e macrolídeo.',
      '(B) Observação no leito de retaguarda da UPA e terapia antimicrobiana com macrolídeo.',
      '(C) Internação hospitalar e terapia antimicrobiana com macrolídeo.',
      '(D) Alta para domicílio e terapia antimicrobiana com quinolona.'
    ],
    correctAnswer: 0,
    explanation: 'Pneumonia em idosa com confusão mental, FR ≥ 30 e idade ≥ 65 anos: CURB-65 ≥ 3, que indica internação hospitalar.\n\nPara pneumonia comunitária internada fora da UTI, o esquema recomendado é β-lactâmico associado a macrolídeo (ou quinolona respiratória isolada).',
    commentary: 'Observação na UPA ou alta domiciliar são inadequadas pela gravidade. Monoterapia com macrolídeo é reservada a pacientes ambulatoriais de baixo risco.',
    reference: 'Welte T, Torres A, Nathwani D. Clinical and economic burden of community-acquired pneumonia amongadults in Europe. Thorax. 2012; 67(1):71-9. https://doi.org/10.1136/thx.2009.129502 / Eccles S, Pincus C, Higgins B, Woodhead M; Guideline Development Group. Diagnosisand management of communityand hospital acquired pneumonia in adults: summaryof NICE guidance. BMJ. 2014; 349: g6722. / https://doi.org/10.1136/bmj.g6722 / Arnold FW, Summersgill JT, Ramirez JA. Role of Atypical Pathogens in theEtiologyofCommunity-Acquired Pneumonia. Semin Respir Crit Care Med. 2016;37(6):819-828. https://doi. org/10.1055/s-0036-1592121 / Corrêa RA, Costa AN, Lundgren F, Michelin L, Figueiredo MR, Holanda M, Gomes M, Teixeira PJZ, Martins R, Silva R, Athanasio RA, Silva RM, Pereira MC. Recomendações para o manejo da pneumonia adquirida na comunidade 2018. J BrasPneumol. 2018;44(5):405 424.',
    tags: ['pneumologia', 'pneumonia', 'infectologia']
  },
  {
    id: 'tp2019-37',
    module: 'Clínica Médica',
    text: 'Mulher, 30 anos, procura Pronto Atendimento com história de agitação, perda de peso (5kg) e palpitações há 15 dias. Há dois dias houve piora dos sintomas, principalmente das palpitações. Exame físico: agitada, consciente e acianótica. Pele quente e úmida. T = 37,4°C. Pulso = 160 bpm, arrítmico; PA = 90 x 60 mmHg. Aumento da tireoide de três vezes e proptose ocular bilateral. ECG mostrou ritmo de fibrilação atrial.\n\nA hipótese diagnóstica mais provável e a conduta mais apropriada são:',
    options: [
      '(A) Tempestade tiroidiana; internar e medicar com antitiroidianos, betabloqueadores, corticoide.',
      '(B) Crise de pânico; medicar com ansiolítico e encaminhar para avaliação psiquiátrica.',
      '(C) Hipertiroidismo por doença de Graves; medicar com antitiroidiano e betabloqueador e encaminhar para especialista.',
      '(D) Crise adrenérgica por feocromocitoma; internar para alfabloqueio e planejamento cirúrgico.'
    ],
    correctAnswer: 0,
    explanation: 'Hipertireoidismo (doença de Graves: bócio difuso e proptose) com disfunção orgânica grave: taquicardia de 160 bpm, fibrilação atrial, hipotensão e agitação. Esse quadro é a tempestade tireoidiana (crise tireotóxica), emergência com alta mortalidade.\n\nO tratamento é em ambiente hospitalar com tionamida (propiltiouracil ou metimazol), betabloqueador, corticoide e, depois, iodo.',
    commentary: 'Tratar como Graves ambulatorial subestima a gravidade. A crise de pânico não explica bócio, proptose e FA. O feocromocitoma não cursa com bócio e proptose.',
    reference: 'NAYAK, B & BURMAN, K. Thyrotoxicosis and thyroid storm. Endocrinol Metab Clin N Am 2006, 35:663-686.',
    tags: ['endocrinologia', 'tireoide', 'emergência']
  },
  {
    id: 'tp2019-38',
    module: 'Clínica Médica',
    text: 'Homem, 56 anos, com diabetes mellitus há 12 anos, está em uso de metformina 2g de liberação prolongada e gliclazida 120mg por dia. Exames laboratoriais: Hb glicada = 10,2%; glicemia de jejum = 190 mg/dL.\n\nA melhor conduta para esse caso é:',
    options: [
      '(A) Substituir a gliclazida por insulina regular no jantar.',
      '(B) Aumentar a metformina para 3g/dia.',
      '(C) Introduzir insulina NPH ao deitar.',
      '(D) Reforçar modificação do estilo de vida e reavaliar em seis meses.'
    ],
    correctAnswer: 2,
    explanation: 'Diabético tipo 2 com HbA1c de 10,2% apesar de metformina e sulfonilureia em doses plenas: está muito acima da meta e precisa de intensificação.\n\nA conduta clássica é iniciar insulina basal (NPH ao deitar), mantendo os orais, e titular pela glicemia de jejum.',
    commentary: 'Trocar a gliclazida por insulina regular no jantar não é o esquema inicial. A dose de 2 g/dia já é a máxima efetiva da metformina. Apenas reforçar o estilo de vida e reavaliar em 6 meses atrasaria o controle.',
    reference: 'Qaseem A, Wilt TJ, Kansagara D, Horwitch C, Barry MJ, Forciea MA, et al. Hemoglobin A1c Targets for Glycemic Control With Pharmacologic Therapy for Non pregnant Adults With Type 2. / Diabetes Mellitus: A Guidance Statement Update From the American College of Physicians. Ann Intern Med. [Epubahead of print 6 March 2018]168:569–576. doi: 10.7326/M17-0939. / Diretrizes da Sociedade Brasileira de Diabetes 2017-2018 /Organização José Egídio Paulo de Oliveira, Renan Magalhães Montenegro Junior, Sérgio Vencio. -- São Paulo: Editora Clannad, 2017. / Netto, A P. Conduta terapêutica no Diabetes tipo 2: Algoritmo SBD 2017. 9 9',
    tags: ['endocrinologia', 'diabetes', 'insulinoterapia']
  },
  {
    id: 'tp2019-39',
    module: 'Clínica Médica',
    text: 'Homem de 75 anos, aposentado, oito anos de escolaridade, é levado ao consultório pela esposa com quadro evolutivo de esquecimento e desorientação temporal que interferem em atividades diárias, como sair sozinho para fazer as compras e controlar as finanças. Mini-exame do estado mental = 20 pontos (normal > 24), Memory Impairment Screen = 3 pontos (normal > 5), Teste de fluência verbal = 6 animais/minuto (normal > 13).\n\nO diagnóstico é compatível com:',
    options: [
      '(A) Comprometimento cognitivo leve',
      '(B) Doença de Alzheimer',
      '(C) Síndrome depressiva',
      '(D) Síndrome demencial'
    ],
    correctAnswer: 3,
    explanation: 'Declínio cognitivo progressivo que já interfere nas atividades instrumentais (compras, finanças), com testes alterados (MEEM 20 para 8 anos de escolaridade, MIS e fluência verbal baixos): síndrome demencial.\n\nO enunciado permite afirmar a síndrome, mas não sua etiologia — a doença de Alzheimer exige investigação adicional.',
    commentary: 'O comprometimento cognitivo leve não prejudica a funcionalidade. Apontar Alzheimer seria saltar para a etiologia sem dados. A depressão não é sugerida pelo quadro.',
    reference: 'Consenso brasileiro de demência (Frota et al. 2011). Frota, N., Nitrini, R., Damasceno, B. P. & Forlenza, O. V. Critérios para o diagnóstico de doença de Alzheimer. Dement Neuropsychol 5 (supl 1), (2011).',
    tags: ['geriatria', 'neurologia', 'demência']
  },
  {
    id: 'tp2019-40',
    module: 'Clínica Médica',
    image: '/images/tp2019-40.webp',
    text: 'Mulher, 38 anos, tem crises de dispneia, sibilância e tosse produtiva, frequentes nos meses de clima frio, há cerca de oito anos. Tem rinite desde a infância e história de tabagismo de longa data. Radiografia do tórax: sinais de hiperinsuflação pulmonar. Espirometria:\n\nO melhor diagnóstico que se aplica a este caso é:',
    options: [
      '(A) Bronquiectasia',
      '(B) Asma',
      '(C) Doença pulmonar obstrutiva crônica',
      '(D) Fibrose pulmonar'
    ],
    correctAnswer: 1,
    explanation: 'Rinite desde a infância, crises de sibilância desencadeadas pelo frio e espirometria com obstrução que responde de forma acentuada ao broncodilatador (VEF1 aumenta 700 mL e 25%; critério: > 200 mL e > 12%) caracterizam asma.\n\nO tabagismo não exclui asma, e a reversibilidade expressiva fala contra DPOC.',
    commentary: 'Na DPOC a obstrução é pouco reversível. A bronquiectasia cursa com infecções de repetição e broncorreia. A fibrose pulmonar produz padrão restritivo.',
    reference: 'GINA (Global Initiative for Asthma): https://ginasthma.org/2018-gina/ / Diretrizes da Sociedade Brasileira de Pneumologia e Tisiologia para o Manejo da Asma – 2012. Jornal Brasileiro de Pneumologia, Vol. 38 - Supl. 1.',
    tags: ['pneumologia', 'asma', 'espirometria']
  },
  // ---- Teste de Progresso 2020 — Consórcio SP 1, outubro (gabarito oficial) ----
  {
    id: 'tp2020-41',
    module: 'Clínica Médica',
    text: 'Paciente do sexo feminino, 22 anos, recém-divorciada e com dois filhos, procurou médico de família por sentir fadiga, apresentar ideias suicidas elaboradas e recorrentes, ganho de peso, insônia e agitação quase todos os dias há três meses, além de profundos sentimentos de inutilidade ou culpa excessiva ou inapropriada do tipo delirante. Houve prejuízo no funcionamento social e não há relato de uso de substâncias. Segundo informações da paciente e dos familiares, não houve surgimento de humor anormal e persistentemente elevado, expansivo ou irritável, bem como também não há relato prévio de distúrbios do sono.\n\nDetermine o diagnóstico:',
    options: [
      '(A) Transtorno bipolar.',
      '(B) Transtorno acentuado do ciclo sono-vigília.',
      '(C) Transtorno dissociativo.',
      '(D) Transtorno depressivo maior.'
    ],
    correctAnswer: 3,
    explanation: 'Humor deprimido com fadiga, insônia, agitação, alteração de peso, culpa excessiva e ideação suicida recorrente há mais de 2 semanas, com prejuízo funcional e sem episódio maníaco ou hipomaníaco: transtorno depressivo maior.\n\nA ideação suicida elaborada exige avaliação de risco imediata.',
    commentary: 'Sem história de humor elevado não há critérios de transtorno bipolar. Não há dissociação descrita, e a insônia é sintoma do episódio depressivo.',
    reference: 'Manual Diagnóstico e Estatístico de Transtornos Mentais. American Psychiatric Association. DSM-V, 5ª Ed., 2014. Ed. Artmed, pg 155.',
    tags: ['psiquiatria', 'depressão']
  },
  {
    id: 'tp2020-42',
    module: 'Clínica Médica',
    text: 'ALM, 30 anos, sexo masculino, vítima de acidente de motocicleta com TCE grave, com múltiplos mecanismos (lesão axonal difusa, hematoma subdural, hematoma extradural e contusão cerebral), tendo sido submetido a drenagem de hematoma extradural e permanecendo internado durante 35 dias no hospital. Na alta, apresentava-se eupneico em ar ambiente pela cânula de traqueostomia, vigil, sem interação com o meio, com dupla hemiparesia, com espasticidade nos 4 membros, sinal de Babinski presente bilateralmente e sem ciclo sono-vigília. Iniciou acompanhamento com a Equipe de Saúde de Família dois meses após a alta. Na ocasião, a mãe relatava que o paciente permanecia com o mesmo quadro neurológico da alta hospitalar, em uso de sonda nasoenteral, com cânula de traqueostomia e sonda vesical de demora.\n\nIdentifique as orientações a serem priorizadas à família do paciente:',
    options: [
      '(A) Trata-se de um paciente em mutismo acinético e a família deverá ser orientada com relação à necessidade de tenotomia, visando melhora da espasticidade e prevenção de dor crônica.',
      '(B) Trata-se de um paciente em estado de consciência mínima e a família deverá ser orientada sobre a irreversibilidade do quadro.',
      '(C) Trata-se de um paciente em estado vegetativo persistente e a família deverá ser orientada sobre a possibilidade de realizar gastrostomia, tentativa de retirada da sonda vesical de demora e com relação aos riscos de infecções de repetição e tromboembolismo venoso.',
      '(D) A família deve ser orientada que o paciente terá plena recuperação, uma vez que a neuroplasticidade é comumente observada em pacientes jovens.'
    ],
    correctAnswer: 2,
    explanation: 'Após TCE grave, o paciente abre os olhos e tem ciclo de vigília, mas não interage com o meio por mais de 1 mês: estado vegetativo persistente (síndrome da vigília sem resposta).\n\nAs orientações priorizam os cuidados: gastrostomia, tentativa de retirada da sonda vesical e prevenção de infecções e de tromboembolismo.',
    commentary: 'No estado de consciência mínima há sinais intermitentes de percepção. No mutismo acinético há atenção visual preservada. Prometer recuperação plena seria inadequado.',
    reference: 'Tratado de Neurologia da Academia Brasileira de Neurologia. Rubens J. Gagliardi & Osvaldo M. Takayanagui; 2 ᵃ Edição, 2019. Editora Elsevier, página 2519.',
    tags: ['neurologia', 'traumatismo cranioencefálico', 'cuidados paliativos']
  },
  {
    id: 'tp2020-43',
    module: 'Clínica Médica',
    text: 'Paciente do sexo masculino, 65 anos, refere dispneia aos esforços, progressiva, há 2 anos. Atualmente, a dispneia ocorre ao andar 100 metros no plano. No último ano, teve uma crise de piora dos sintomas, tratada ambulatorialmente com antibiótico e corticoide oral. É tabagista há 45 anos, um maço/dia. Exame físico: índice massa corpórea 20 kg/m², murmúrio vesicular reduzido bilateralmente sem ruídos adventícios. Exames complementares: Espirometria: distúrbio ventilatório obstrutivo. [Pré-broncodilatador: VEF1/CVF: 0,50; CVF: 2,4L (86%); VEF1: 1,19L (54%)]. [Pós-broncodilatador: VEF1/CVF: 0,52; CVF: 2,4L (86%); VEF1: 1,22L (55%)]. Hemograma: eosinófilos em sangue periférico: 70 células/microlitro.\n\nDefina o diagnóstico e a conduta:',
    options: [
      '(A) O diagnóstico é Doença Pulmonar Obstrutiva Crônica (DPOC). A prescrição é broncodilatador de ação prolongada para uso diário e broncodilatador de ação curta para uso, se necessário. O corticoide inalado provavelmente não beneficiará este paciente, pois há relato de apenas uma exacerbação moderada no último ano e eosinófilos em sangue periférico < 100 células/microlitro.',
      '(B) O diagnóstico é Doença Pulmonar Obstrutiva Crônica (DPOC). A prescrição é broncodilatador de ação prolongada para uso diário e broncodilatador de ação curta para uso, se necessário. O diagnóstico é determinado pelos sintomas e exposição ao fator de risco. O tratamento farmacológico é guiado pela espirometria.',
      '(C) O diagnóstico é Doença Pulmonar Obstrutiva Crônica (DPOC). A prescrição é broncodilatador de ação prolongada para uso diário e broncodilatador de ação curta para uso, se necessário. O tratamento farmacológico previne sintomas, exacerbações e reverte a obstrução observada na espirometria. Cessar o tabagismo tem grande impacto no prognóstico deste paciente.',
      '(D) O diagnóstico é Doença Pulmonar Obstrutiva Crônica (DPOC). A prescrição é corticoide inalado associado a broncodilatador de ação prolongada para uso diário. Todo o paciente com DPOC com sintomas respiratórios deve usar esta combinação de fármacos. Avaliações adicionais recomendadas neste paciente são: radiografia de tórax em duas posições e oximetria.'
    ],
    correctAnswer: 0,
    explanation: 'Tabagista com dispneia progressiva e obstrução não reversível (VEF1/CVF pós-broncodilatador 0,52; VEF1 55%): DPOC.\n\nCom muitos sintomas e apenas uma exacerbação moderada no ano, o tratamento é broncodilatador de longa ação (com resgate de curta ação). O corticoide inalado não está indicado com eosinófilos < 100/µL.',
    commentary: 'O tratamento é guiado por sintomas e exacerbações, não pela espirometria. Os broncodilatadores não revertem a obstrução. CI não é para todos os pacientes com DPOC.',
    reference: 'GLOBAL INITIATIVE FOR CHRONIC OBSTRUCTIVE LUNG DISEASE (GOLD) 2020. Disponível em: https://goldcopd.org/wp-content/uploads/2019/12/GOLD-2020-FINAL-ver1.2-03Dec19_WMV.pdf',
    tags: ['pneumologia', 'DPOC']
  },
  {
    id: 'tp2020-44',
    module: 'Clínica Médica',
    text: 'J.A., sexo feminino, 35 anos, refere que há 2 meses sente tremores diários, batedeira, insônia, e que perdeu 6kg neste período, mesmo se alimentando normalmente. Ao exame físico, a paciente apresenta tremores finos de extremidades; FC = 120 bpm em repouso, PA = 140 x 90 mmHg. À palpação, apresenta aumento da tireoide em cerca de 3 vezes, sem nódulos palpáveis. Traz os exames laboratoriais: TSH = 0,02 mUI/L (VR: 0,5 - 4,2 mUI/L); T4 livre = 2,7 ng/dL (VR: 0,8 - 1,9 ng/dL); hemograma e transaminases normais.\n\nO diagnóstico é:',
    options: [
      '(A) Tireoidite subaguda linfocítica, e a paciente deve iniciar uso de droga antitireoidiana e beta-bloqueadores para alívio dos sintomas adrenérgicos.',
      '(B) Hipotireoidismo, e a paciente deve iniciar reposição de levotiroxina 1,6 mcg/kg/dia.',
      '(C) Tireoidite viral, e a paciente deve iniciar uso de anti-inflamatórios e beta-bloqueadores para alívio dos sintomas adrenérgicos.',
      '(D) Doença de Graves, e a paciente deve iniciar uso de droga antitireoidiana e beta-bloqueadores para alívio dos sintomas adrenérgicos.'
    ],
    correctAnswer: 3,
    explanation: 'Tireotoxicose (TSH suprimido e T4 livre elevado) em mulher jovem, com bócio difuso e sintomas há 2 meses: doença de Graves.\n\nO tratamento inicial é a droga antitireoidiana (metimazol) associada a betabloqueador para os sintomas adrenérgicos.',
    commentary: 'Tireoidites (subaguda ou viral) cursam com captação baixa e não se tratam com antitireoidianos. O perfil laboratorial não é de hipotireoidismo.',
    reference: 'Vilar, L; Endocrinologia Clínica, 6ª ed, 2016; capítulo30 - Diagnóstico e Tratamento da Doença de Graves.',
    tags: ['endocrinologia', 'tireoide', 'doença de graves']
  },
  {
    id: 'tp2020-45',
    module: 'Clínica Médica',
    text: 'Paciente de 30 anos, sexo masculino, previamente hígido, apresentou quadro agudo de febre, mal-estar, linfonodomegalia cervical e lesões máculo-papulares pelo corpo, não pruriginosas, acometendo palmas das mãos e plantas dos pés. Refere relações sexuais desprotegidas. Foi realizado teste treponêmico: reagente, e teste não-treponêmico: reagente (VDRL 1/96).\n\nDefina o diagnóstico e o tratamento:',
    options: [
      '(A) Trata-se de um caso de sífilis primária. As lesões de pele são chamadas de cancro duro e regridem espontaneamente, sem necessidade de antibioticoterapia.',
      '(B) O quadro clínico, associado a um teste treponêmico e VDRL reagentes, confirma o diagnóstico de sífilis secundária. Deve ser tratada com penicilina benzatina.',
      '(C) Um teste treponêmico e não-treponêmico positivos, associados ao quadro clínico, indicam diagnóstico de sífilis latente tardia. Este caso deve ser tratado com cefalosporina de terceira geração.',
      '(D) A sorologia, neste caso, apenas demonstra que o paciente teve sífilis previamente (cicatriz sorológica), sendo necessário, portanto, investigar outras hipóteses diagnósticas para este caso.'
    ],
    correctAnswer: 1,
    explanation: 'Febre, mal-estar, linfadenopatia e exantema maculopapular com acometimento palmoplantar após exposição sexual, com testes treponêmico e não treponêmico reagentes: sífilis secundária.\n\nO tratamento é penicilina benzatina 2,4 milhões UI IM em dose única.',
    commentary: 'O cancro duro é a lesão genital da sífilis primária. A sífilis latente tardia é assintomática. Testes reagentes com títulos altos e clínica exuberante não são cicatriz sorológica.',
    reference: 'Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com Infecções Sexualmente Transmissíveis (IST) - Ministério da Saúde (2018).',
    tags: ['infectologia', 'sífilis', 'IST']
  },
  {
    id: 'tp2020-46',
    module: 'Clínica Médica',
    text: 'Jovem de 17 anos refere o aparecimento de manchas roxas nas pernas e bolhas escuras na boca há cerca de 7 dias, além de sangramento nasal espontâneo há algumas horas. Nega patologias prévias ou uso de medicações. Ao exame físico, apresenta-se em bom estado geral, corada e hidratada. Exame pulmonar, cardiovascular e abdominal sem alterações; frequência cardíaca de 66 bpm. Membros inferiores com a presença de petéquias difusas, equimoses em coxa direita e braço esquerdo. Oroscopia evidencia uma bolha hemática em mucosa jugal. Resultado de hemograma realizado no dia anterior: hemoglobina: 12,4 g/dl; leucócitos: 4560/mm³ (diferencial normal); plaquetas: 6.000/mm³.\n\nO diagnóstico e a conduta inicial são:',
    options: [
      '(A) Aplasia de Medula. Encaminhar para internação hospitalar para realização de transfusão de concentrado de plaquetas.',
      '(B) Púrpura Trombocitopênica Idiopática. Encaminhar para internação hospitalar para realização de transfusão de concentrado de plaquetas.',
      '(C) Púrpura Trombocitopênica Idiopática. Encaminhar para internação hospitalar para realização de pulsoterapia com metilprednisolona.',
      '(D) Leucemia Aguda. Encaminhar para internação hospitalar para realização de avaliação medular (mielograma, imunofenotipagem).'
    ],
    correctAnswer: 2,
    explanation: 'Plaquetopenia isolada grave (6.000/mm³) em adolescente sem doenças, com hemoglobina e leucócitos normais: púrpura trombocitopênica imune.\n\nCom sangramento mucoso (bolha hemorrágica, epistaxe) e plaquetas < 20.000, está indicada internação e corticoterapia em altas doses (pulsoterapia). A transfusão de plaquetas é reservada a sangramento grave, com risco de vida.',
    commentary: 'Na aplasia e na leucemia haveria comprometimento das outras séries. A transfusão isolada tem efeito fugaz na PTI, pela destruição imune das plaquetas.',
    reference: 'Hoffbrand, A.V.; MOSS, P. A. H. Fundamentos em hematologia. 6. Ed. Porto Alegre: Artmed, 2013.',
    tags: ['hematologia', 'púrpura trombocitopênica imune']
  },
  {
    id: 'tp2020-47',
    module: 'Clínica Médica',
    image: '/images/tp2020-47.webp',
    text: 'Paciente de 52 anos, sexo masculino, tabagista, obeso, sedentário e portador de dislipidemia, chega ao setor de emergência com queixa de dor precordial em pontada, de forte intensidade e iniciada há poucos instantes, irradiada para a região epigástrica, acompanhada de sudorese fria e vômitos. O eletrocardiograma está representado a seguir:\n\nDetermine a hipótese diagnóstica e as medidas terapêuticas que devem ser tomadas pensando em diminuir a mortalidade da doença:',
    options: [
      '(A) Infarto agudo do miocárdio com supradesnivelamento do segmento ST. Realizar sedação, oxigênio, nitrato, AAS, Clopidogrel e encaminhar para sala de hemodinâmica imediatamente.',
      '(B) Angina instável de alto risco. Realizar sedação, oxigênio, nitrato, AAS, clopidogrel e aguardar resultado de marcadores de necrose miocárdica (MNM) para determinar a conduta.',
      '(C) Infarto agudo do miocárdio sem supradesnivelamento do segmento ST. Realizar sedação, oxigênio, nitrato, AAS, Clopidogrel e tratamento com trombolítico imediatamente.',
      '(D) Infarto agudo do miocárdio com supradesnivelamento do segmento ST. Realizar sedação, oxigênio, nitrato sublingual, AAS, Clopidogrel e aguardar resultado de MNM para determinar a conduta.'
    ],
    correctAnswer: 0,
    explanation: 'Dor torácica típica de início recente com ECG mostrando supradesnivelamento do segmento ST: infarto agudo do miocárdio com supra.\n\nA medida que mais reduz a mortalidade é a reperfusão o mais rápido possível — preferencialmente angioplastia primária, encaminhando o paciente imediatamente à hemodinâmica — além de AAS e clopidogrel.',
    commentary: 'Aguardar marcadores atrasa a reperfusão no IAM com supra. Trombolítico não é indicado no IAM sem supra. Observação: oxigênio é indicado apenas se SatO₂ < 90%.',
    reference: 'Diretriz da Sociedade Brasileira de Cardiologia sobre Tratamento do Infarto Agudo do Miocárdio com Supradesnível do Segmento ST. Arq Bras Cardiol. 2015; 105(2):1-105.',
    tags: ['cardiologia', 'infarto agudo do miocárdio']
  },
  {
    id: 'tp2020-48',
    module: 'Clínica Médica',
    image: '/images/tp2020-48.webp',
    text: 'Paciente de 75 anos sofreu queda da própria altura e apresenta sintomas de confusão mental e dores de cabeça. Realizou tomografia computadorizado do crânio (a seguir).\n\nDetermine o diagnóstico:',
    options: [
      '(A) Abscesso cerebral',
      '(B) Hematoma subdural agudo',
      '(C) Metástase',
      '(D) Meningioma'
    ],
    correctAnswer: 1,
    explanation: 'Idoso com queda da própria altura, confusão e cefaleia. A tomografia mostra coleção extra-axial hiperdensa em forma de crescente, com efeito de massa: hematoma subdural agudo, comum em idosos pela atrofia cerebral e tração das veias-ponte.',
    commentary: 'Abscesso e metástase são lesões intraparenquimatosas com realce anelar. O meningioma é tumor extra-axial de base dural, de crescimento lento.',
    reference: 'Dewan MC, Rattani A, Gupta S et al.Estimating the global incidence of traumatic brain injury. J Neurosurg 2018:1-18 [Epub ahead of print], Disponível em: https://doi.org/10.3171/2017.10.JNS17352. Google Scholar / Link TW, Boddu S, Paine SM, Kamel H, Knopman J. Middle Meningeal Artery Embolization for Chronic Subdural Hematoma: A Series of 60 Cases. Neurosurgery 2018 Nov 9 [Epub ahead of print], Disponível em: https://doi.org/10.1093/neuros/nyy521. Google Scholar',
    tags: ['neurologia', 'neurocirurgia', 'trauma']
  },
  {
    id: 'tp2020-49',
    module: 'Clínica Médica',
    image: '/images/tp2020-49.webp',
    text: 'Homem, 23 anos, com diarreia há 3 meses (6 a 8 episódios por dia, inclusive noturnos), acompanhada de muco e cólicas abdominais, sendo que estas últimas são aliviadas com a evacuação. Refere piora da diarreia com o estresse. Relata emagrecimento não quantificado e fraqueza. Refere fazer uso “recreativo” de drogas (cigarro, maconha, ecstasy e álcool), nega uso de drogas injetáveis. Vida sexual ativa, heterossexual com várias parceiras, sem uso regular de preservativos. Pai falecido aos 48 anos de idade por neoplasia de cólon. Procurou gastroenterologista e foi solicitada uma colonoscopia para melhor elucidação diagnóstica (foto a seguir com a visão do íleo terminal):\n\nCom relação a este quadro, é correto afirmar que:',
    options: [
      '(A) Trata-se de diarreia por colite pseudomembranosa, e este paciente se beneficiará com o uso de metronidazol ou vancomicina.',
      '(B) O diagnóstico mais provável é de síndrome do intestino irritável, devendo ser introduzida dieta e tratamento com antiespasmódicos.',
      '(C) É necessária a realização de PPD, sorologia para HIV e hepatite virais, albumina sérica, PCR, calprotectina fecal e indicação de terapia biológica.',
      '(D) É necessária uma dieta com a suspensão da ingestão de glúten e lactose para tratamento de Doença Celíaca.'
    ],
    correctAnswer: 2,
    explanation: 'Diarreia crônica com sintomas noturnos, emagrecimento e colonoscopia com úlceras no íleo terminal sugerem doença de Crohn.\n\nAntes de iniciar terapia biológica (anti-TNF), é necessário rastrear tuberculose latente (PPD), HIV e hepatites virais e avaliar a atividade da doença (albumina, PCR, calprotectina fecal).',
    commentary: 'Diarreia noturna e emagrecimento são sinais de alarme que afastam intestino irritável. Não há uso de antibióticos sugerindo colite pseudomembranosa. As lesões não são compatíveis com doença celíaca.',
    reference: 'Tratado de Gastroenterologia da graduação à pós-graduação, 2º edição, São Paulo: Editora Atheneu, 2016.',
    tags: ['gastroenterologia', 'doença de crohn', 'imunobiológicos']
  },
  {
    id: 'tp2020-50',
    module: 'Clínica Médica',
    text: 'Paciente do sexo feminino, 47 anos, realizou glicemia como exame de rotina, com resultado: 220 mg/dL, levando ao diagnóstico de diabetes mellitus. Assintomática, relata apenas preocupação com a glicemia elevada. Antecedentes familiares: pai com diabetes e hipertensão, falecido por Infarto Agudo do Miocárdio. Mãe viva, 74 anos. Irmão de 50 anos, com diabetes. Histórico de vida: consome álcool socialmente; nega tabagismo. Ao exame físico: IMC = 27 kg/m²; cintura abdominal = 94cm; ausculta cardíaca e pulmonar normais; PA = 130 x 75 mmHg; FC = 78 bpm. Abdome globoso com fígado palpável no rebordo costal. Sem edemas. Pés com xerodermia, sem feridas, pulsos adequados; exame do monofilamento normal.\n\nA conduta inicial mais adequada, considerando o ambiente da UBS, é:',
    options: [
      '(A) Plano alimentar, atividade física e 2 hipoglicemiantes orais em associação.',
      '(B) Plano alimentar, atividade física e insulina.',
      '(C) Plano alimentar, atividade física e um inibidor da SGLT2.',
      '(D) Plano alimentar, atividade física e o hipoglicemiante oral metformina.'
    ],
    correctAnswer: 3,
    explanation: 'Diabetes tipo 2 recém-diagnosticado, assintomático, com glicemia de 220 mg/dL e sem sinais de descompensação: o tratamento inicial é mudança do estilo de vida associada a metformina.',
    commentary: 'Terapia dupla e insulina são reservadas a HbA1c muito elevada ou a sintomas de hiperglicemia/catabolismo. O iSGLT2 não é o fármaco inicial de primeira escolha nesse cenário de UBS.',
    reference: 'Oliveira M., Lyra R., Cavalcanti M. Abordagem geral no tratamento do Diabetes, em: Lyra R. Cavalcanti M: Diabetes Mellitus. 3ª Edição, GEN GRUPO EDITORIAL, Rio de Janeiro, 213-222; 2013. / Coopan R. Abordagem geral ao tratamento do Diabetes Mellitus, em Kahn R, Weir G, King G I, M. Jacobson A M, Moses A C, Smith R J: Joslin’ Diabetes Mellitus, 14ª Edição, Art Med, Porto Alegre: 599-608, 2008. / Jin HY, Lee KA, Park TS. The impact of glycemic variability on diabetic peripheral neuropathy. Endocrine. Sep;53(3):643-8; 2016. / Rosenstock J, et Al. Dual Add-on Therapy in Type 2 Diabetes Poorly Controlled with Metformin Monotherapy: A Randomized Double-Blind Trial of Saxagliptin Plus Dapagliflozin Addition Versus Single Addition of Saxagliptin or Dapagliflozin to Metformin. Diabetes Care; 38:376–83; 2015. / Garber AJ, et Al. Consensus Statement by The American Association of Clinical Endocrinologists and American College of Endocrinology on The Comprehensive T2DM Management Algorithm – 2017. / Ferrannini E et al. Dapagliflozin Monotherapy in Type 2 Diabetic Patients with Inadequate Glycemic Control by Diet and Exercise. Diabetes Care; 33(10):2217–2224; 2010. / Jahagirdar V et al. Empaglifozin for the treatment of Type 2 Diabetes. Expert Opinion on Pharmacotherapy; 15 :2419-2441. 2014.',
    tags: ['endocrinologia', 'diabetes', 'atenção primária']
  },
  {
    id: 'tp2020-51',
    module: 'Clínica Médica',
    image: '/images/tp2020-51.webp',
    text: 'PCR, 65 anos, portador de hipertensão arterial sistêmica e insuficiência cardíaca congestiva, faz uso de AAS, carvedilol 6,25 mg/dia, losartana 100 mg/dia e hidroclorotiazida 25 mg/dia. Tem edema de membros inferiores recorrente, porém há cerca de 3 dias apresentou lesão avermelhada acompanhada de dor para caminhar no membro inferior esquerdo, acompanhado de febre e calafrios. Ao exame físico, o paciente apresenta-se toxemiado, com temperatura de 38,2°C. Verifica-se lesão eritematosa com bordas bem demarcadas, conforme a figura, acompanhada de adenite regional.\n\nO diagnóstico, o agente etiológico e a conduta terapêutica são:',
    options: [
      '(A) Celulite devido a Staphylococcus aureus. O tratamento indicado é internação, Penicilina G Cristalina na dose de 5 a 10 milhões de unidades por via intravenosa ou intramuscular por 7 a 10 dias, manter elevação do membro afetado. É importante recomendar repouso prolongado após a alta e usar meias elásticas para não promover estase venosa no membro afetado.',
      '(B) Erisipela devido a Estreptococo β-hemolítico. O tratamento indicado é internação, uso de Penicilina G Cristalina na dose de 5 a 10 milhões de unidades por via intravenosa ou intramuscular por 7 a 10 dias, manter elevação do membro afetado. Após a fase aguda, para prevenir recaída, evitar ficar em pé e deambular o máximo possível para evitar a recaída.',
      '(C) Erisipela devido a Staphylococcus aureus. O tratamento indicado é azitromicina 500mg via oral por 3 dias em regime de ambulatório. Deve deambular o máximo possível e evitar o uso de meias elásticas no membro afetado para não promover microlesões na pele e oferecer porta de entrada para microorganismos.',
      '(D) Celulite devido a Staphylococcus aureus. O tratamento indicado é internação, Penicilina G Cristalina na dose de 5 a 10 milhões de unidades por via intravenosa ou intramuscular por 7 a 10 dias, manter elevação do membro afetado. Após a fase aguda, recomendar evitar ficar em pé e deambular o máximo possível para evitar a recaída.'
    ],
    correctAnswer: 1,
    explanation: 'Placa eritematosa de bordas bem delimitadas e elevadas, com bolhas, febre e adenite, em membro com edema crônico: erisipela, causada principalmente por estreptococo β-hemolítico do grupo A.\n\nCom toxemia, indica-se internação, penicilina cristalina IV e elevação do membro.',
    commentary: 'A celulite tem bordas mal definidas e acomete planos mais profundos. Azitromicina oral não é adequada para paciente toxemiado. Observação: a orientação da alternativa oficial (\'evitar ficar em pé e deambular o máximo possível\') é ambígua; o objetivo é reduzir a estase venosa.',
    reference: 'Dermatologia - Sampaio E Rivitti, 4ª Edicão, Editora Artes Médicas. Capítulo 37, páginas: 616-617.',
    tags: ['dermatologia', 'infectologia', 'erisipela']
  },
  {
    id: 'tp2020-52',
    module: 'Clínica Médica',
    text: 'CAS, 15 anos, sexo masculino, iniciou subitamente quadro de febre, prostração, mialgia e exantema. Feito o diagnóstico de "dengue clássica", apresentou boa recuperação em alguns dias. Permaneceu assintomático até que, após 15 dias, passou a apresentar crises convulsivas, alteração do nível de consciência e parestesia ascendente com perda de força muscular de membros inferiores.\n\nIdentifique a afirmativa correta sobre o caso:',
    options: [
      '(A) Dentre os distúrbios pós-dengue são relatados epilepsia, tremores, amnésia, demência, psicose maníaca, paralisia de Bell, envolvimento de laringe, paralisia de extremidades inferiores, de palato, de nervo ulnar, de nervo torácico longo, de nervo peroneal, síndrome de Reye, síndrome de Guillain-Barré, meningoencefalomielite e mononeuropatias.',
      '(B) A infecção do sistema nervoso central (SNC) pela dengue requer o conhecimento das três hipóteses de infecção viral sistêmica: a teoria da infecção sequencial, desenvolvida por Halstead; a teoria de hiperendemicidade de Rosen e a ocorrência de recombinação gênica, resultante de infecções simultâneas por sorotipos virais diferentes no hospedeiro humano, mas não no vetor.',
      '(C) A partir da constatação de que os pacientes tinham história clínica compatível com dengue, devem ser solicitadas as tipagens virais apenas no líquor, cujos resultados confirmaram a hipótese diagnóstica.',
      '(D) Infecções por dengue em indivíduos que já tiveram contato com outros sorotipos do vírus ou mesmo com outros flavivírus (como os vacinados contra a febre amarela), podem alterar o perfil da resposta imune, que passa a ser do tipo anamnésico ou de infecção secundária (reinfecção), com baixa produção de IgG e resposta aumentada precoce de IgM.'
    ],
    correctAnswer: 0,
    explanation: 'Manifestações neurológicas após dengue (encefalite, convulsões, síndrome de Guillain-Barré) são complicações descritas, e a alternativa A lista o amplo espectro de distúrbios neurológicos relatados após a doença.',
    commentary: 'A recombinação ocorre no hospedeiro e no vetor. A pesquisa viral deve ser feita no soro e no líquor. Na infecção secundária, há resposta precoce e intensa de IgG, com IgM baixa.',
    reference: 'Rosen L. Dengue hemorrhagic fever. Bull Soc Pathol Exot 1998;89:1-3. / Shepherd S, Hinfey P, Shoff WH. Dengue fever. Med J 2002;3:1-20. / Ferreira M. Brito L., Cavalcanti C. G., Coelho C. A., Mesquita S. D. Manifestação neurológicas de dengue. Estudos de 41 casos. Arq Neuropsiquiatr 2005;63(2-B):488-493.',
    tags: ['infectologia', 'dengue', 'neurologia']
  },
  {
    id: 'tp2020-53',
    module: 'Clínica Médica',
    text: 'Paciente de 34 anos com quadro súbito de cefaleia excruciante, holocraniana, ao realizar levantamento de peso na academia. Evoluiu com crise convulsiva tônico-clônica generalizada e liberação esfincteriana. À entrada no Pronto-Socorro, observou-se anisocoria, rigidez de nuca, ptose palpebral e estrabismo divergente. Sem comorbidades prévias.\n\nDetermine o provável diagnóstico e a lesão correspondente:',
    options: [
      '(A) Tumor cerebral (transformação hemorrágica) associado a herniação uncal e compressão do nervo abducente.',
      '(B) Acidente vascular isquêmico evoluindo com hipertensão intracraniana e lesão do nervo abducente.',
      '(C) Acidente vascular hemorrágico evoluindo com hipertensão intracraniana e compressão do nervo oculomotor.',
      '(D) Esclerose múltipla em evolução justificando lesão de pares cranianos e crise convulsiva causada pela desmielinização neuronal.'
    ],
    correctAnswer: 2,
    explanation: 'Cefaleia súbita e excruciante durante esforço, convulsão e rigidez de nuca: hemorragia subaracnoide, provavelmente por rotura de aneurisma da artéria comunicante posterior.\n\nO aneurisma comprime o nervo oculomotor (III par), causando ptose, midríase (anisocoria) e estrabismo divergente.',
    commentary: 'O nervo abducente (VI) causaria estrabismo convergente, sem ptose. O AVC isquêmico não causa cefaleia ictal com meningismo. A esclerose múltipla não explica o quadro súbito.',
    reference: 'Rouanet Carolina, Silva Gisele Sampaio. Aneurysmal subarachnoid hemorrhage: current concepts and updates. Arq. Neuro-Psiquiatr. 2019 Nov [cited 2020 May 18]; 77(11): 806-814. Disponível em: http://dx.doi.org/10.1590/0004-282x20190112.',
    tags: ['neurologia', 'hemorragia subaracnoide']
  },
  {
    id: 'tp2020-54',
    module: 'Clínica Médica',
    text: 'R.L.N., sexo masculino, 22 anos, vegano há aproximadamente 3 anos, sem suplementação alimentar, com queixa de fraqueza, parestesias e hipoestesia nos membros inferiores. Ao exame físico, apresenta-se descorado 2+/4+, sem outras alterações. Realizou hemograma: Hb: 9,2 g/dL; Ht: 28%; VCM: 100fL; RDW: 16%; Leucócitos: 8.300/mm³ com diferencial normal. Plaquetas: 214.000/mm³; DHL: 1.500 U/L.\n\nDetermine a causa da anemia e do quadro clínico do paciente:',
    options: [
      '(A) Anemia megaloblástica, deficiência de vitamina B12.',
      '(B) Anemia megaloblástica, deficiência de ácido fólico.',
      '(C) Anemia falciforme, microinfartos em circulação de membro inferior.',
      '(D) Anemia hemolítica autoimune pelo aumento do DHL.'
    ],
    correctAnswer: 0,
    explanation: 'Vegano sem suplementação, com anemia macrocítica, DHL elevada (eritropoiese ineficaz) e parestesias/hipoestesia em membros inferiores (lesão de cordões posteriores — degeneração combinada subaguda): deficiência de vitamina B12.',
    commentary: 'A deficiência de folato causa anemia megaloblástica sem alterações neurológicas, e é improvável em vegano. Não há dados de anemia falciforme. A DHL alta reflete hemólise intramedular, não autoimune.',
    reference: 'ZAGO, Marco Antônio; FALCÃO, Roberto Passetto; PASQUINI, Ricardo. Tratado de hematologia. São Paulo: Atheneu, 2013.',
    tags: ['hematologia', 'anemia megaloblástica', 'neurologia']
  },
  {
    id: 'tp2020-55',
    module: 'Clínica Médica',
    text: 'Paciente masculino, 60 anos, procura atendimento por ter despertado durante a madrugada com dor intensa no hálux direito acompanhado de rubor e inchaço local. Relata dificuldade para a deambulação porque os sintomas estão intensos. Refere ser hipertenso em uso de hidroclorotiazida e ter colesterol alto. Tem como hábitos alimentação rica em carne vermelha e ingesta de bebidas alcoólicas, em média duas cervejas ao dia. Nega outros sintomas associados.\n\nIdentifique a afirmativa correta em relação ao quadro:',
    options: [
      '(A) As provas inflamatórias como velocidade de hemossedimentação e proteína C reativa normais afastam o diagnóstico de Gota.',
      '(B) A confirmação de hiperuricemia confirma o diagnóstico de Gota.',
      '(C) Os achados de articulação inflamada observados na radiografia permitem a realização do diagnóstico.',
      '(D) Os achados de cristais em formato de agulha, especialmente se fagocitados pelos leucócitos, são considerados patognomônicos da Gota.'
    ],
    correctAnswer: 3,
    explanation: 'Monoartrite aguda do hálux (podagra) em homem com hiperuricemia, uso de tiazídico e consumo de álcool e carne vermelha: crise de gota.\n\nO diagnóstico definitivo é a identificação de cristais de monourato de sódio em forma de agulha, com birrefringência negativa, sobretudo quando fagocitados por leucócitos.',
    commentary: 'Provas inflamatórias normais não afastam gota. A hiperuricemia isolada não confirma o diagnóstico (o ácido úrico pode estar normal na crise). As alterações radiográficas surgem tardiamente.',
    reference: 'H. Ralph Schumacher, Lan X. Chen. Medicina Interna de Harrison, Reumatologia 18a Edição. Editora AMGH, 2014; páginas 188-190. / Castelar G, Livro da Sociedade Brasileira de Reumatologia, Editor José Tupinambá Sousa Vasconcelos. Editora Manole, 2019; páginas 377-380.',
    tags: ['reumatologia', 'gota']
  },
  {
    id: 'tp2020-56',
    module: 'Clínica Médica',
    text: 'Paciente do sexo feminino, 35 anos, comparece em Estratégia Saúde da Família com queixa de cefaleia e turvação visual, associadas a fraqueza e episódios de formigamento e câimbras nas pernas, com 6 semanas de evolução e piora progressiva nos últimos 5 dias. Nega histórico patológico pessoal e informa antecedente familiar de hipertensão arterial. Ao exame físico, verificam-se: PA: 190 x 110 mmHg, FC: 74 bpm; ausculta cardiopulmonar sem alterações. Traz exames recentes: potássio: 2,4 mmol/L (valor de referência: 3,5 - 5,1 mmol/L) e sódio: 152 mmol/L (valor de referência: 135 - 148 mmol/L).\n\nConsiderando a principal hipótese diagnóstica, identifique os exames complementares pertinentes:',
    options: [
      '(A) TSH e T4 Livre',
      '(B) Cortisol e ACTH (hormônio adrenocorticotrófico)',
      '(C) Metanefrinas Urinárias e Plasmáticas',
      '(D) Renina e Aldosterona'
    ],
    correctAnswer: 3,
    explanation: 'Hipertensão grave em mulher jovem com hipocalemia espontânea e hipernatremia: a principal hipótese é hiperaldosteronismo primário.\n\nO rastreamento é feito com a relação aldosterona/renina (aldosterona alta e renina suprimida).',
    commentary: 'TSH/T4 investigam hipertireoidismo, cortisol/ACTH a síndrome de Cushing e metanefrinas o feocromocitoma — nenhum explica a hipocalemia com hipernatremia tão bem.',
    reference: 'Malachias MVB, Souza WKSB, Plavnik FL, Rodrigues CIS, Brandão AA, Neves MFT, et al. 7ª Diretriz Brasileira de Hipertensão Arterial. Arq Bras Cardiol 2016; 107(3Supl.3):1-83. Magalhães CC et al. Tratado de Cardiologia SOCESP. 3. Ed. Barueri/SP: Manole, 2015.',
    tags: ['endocrinologia', 'hipertensão secundária', 'hiperaldosteronismo']
  },
  {
    id: 'tp2020-57',
    module: 'Clínica Médica',
    text: 'Paciente masculino, 29 anos, branco, vem à consulta com quadro de fraqueza, emagrecimento progressivo e “pressão baixa”. Refere ser portador de HIV e ter feito tratamento de tuberculose no passado. Ao exame apresenta-se em regular estado geral, desidratado +/4+, afebril. PA: 110 x 80 mmHg (deitado) e 90 x 60 mmHg (em pé). Apresenta escurecimento da pele em região axilar e região posterior do pescoço, bem como de mucosa oral.\n\nDetermine o diagnóstico e a conduta:',
    options: [
      '(A) Insuficiência adrenal secundária à tuberculose de região selar, e deverá realizar-se uma ressonância magnética de sela túrcica.',
      '(B) Insuficiência adrenal primária, e deve-se realizar a dosagem de ACTH, que deverá estar diminuído para a confirmação do diagnóstico.',
      '(C) Doença de Addison, e o primeiro teste a ser solicitado para estes pacientes é a dosagem do cortisol basal às 8 horas.',
      '(D) Hipercortisolismo, e deve ser submetido ao teste de cortrosina para a confirmação do diagnóstico.'
    ],
    correctAnswer: 2,
    explanation: 'Fraqueza, emagrecimento, hipotensão postural e hiperpigmentação de pele e mucosas em paciente com HIV e tuberculose prévia (causas de destruição adrenal): insuficiência adrenal primária (doença de Addison).\n\nO primeiro exame é o cortisol basal às 8 horas.',
    commentary: 'A hiperpigmentação indica ACTH elevado, o que afasta causa secundária (selar). Na insuficiência primária o ACTH está aumentado, não diminuído. Não há hipercortisolismo.',
    reference: 'O essencial em endocrinologia. Patrícia Sales, Alfredo Halpern, Cintia Cercato. – 1ª Edição, Editora Guanabara, 2016.',
    tags: ['endocrinologia', 'insuficiência adrenal']
  },
  {
    id: 'tp2020-58',
    module: 'Clínica Médica',
    text: 'Maria, 50 anos, doméstica, em acompanhamento há um ano (na ocasião com creatinina sérica: 1,8 mg/dL e ritmo de filtração glomerular estimado de 37 mL/minuto). Informa que não consegue manter a adesão à dieta porque come no emprego e seus patrões gostam de massas, frituras e todos os dias faz e come sobremesas variadas. Nos últimos dias, percebeu sua urina espumosa e em menor quantidade, fraqueza, seus pés não estão cabendo nos sapatos e até seus olhos estão inchados. Nesta noite, procurou o Pronto Atendimento com queixas de náuseas, falta de ar, palidez cutânea e edema generalizado. Realizados exames: Creatinina sérica: 5,4 mg/dL (a última era 2,4 mg/dL); Albumina sérica: 2,1 g/dL; Hb: 8 mg/dL e Hematócrito: 25%; Urina I: proteinúria 4+ (quantificada em 5,0g / 24 horas); leucocitúria: 24.000/mL, hemácias: 5.000/mL.\n\nCom relação aos achados diagnósticos de Dona Maria, é possível afirmar:',
    options: [
      '(A) A presença de leucocitúria é diagnóstica de infecção do trato urinário.',
      '(B) O estágio de doença renal crônica da paciente era IIIb quando foi encaminhada para o especialista.',
      '(C) A causa da hipoalbuminemia é a doença hepática gordurosa não alcoólica que acompanha a Síndrome Metabólica.',
      '(D) A doença renal do diabetes costuma cursar com Síndrome Nefrótica e componente nefrítico.'
    ],
    correctAnswer: 1,
    explanation: 'Com TFG de 37 mL/min, a paciente estava no estágio G3b da doença renal crônica (30–44 mL/min) quando foi encaminhada.',
    commentary: 'Leucocitúria sugere, mas não confirma, ITU (exige urocultura). A hipoalbuminemia decorre da proteinúria nefrótica (> 3,5 g/24h), não de doença hepática. A doença renal do diabetes cursa com proteinúria, tipicamente sem componente nefrítico.',
    reference: 'Princípios de Nefrologia e Distúrbios Hidreletrolíticos. Miguel Carlos Riella. Editora Guanabara Koogan. 2018.',
    tags: ['nefrologia', 'doença renal crônica']
  },
  {
    id: 'tp2020-59',
    module: 'Clínica Médica',
    image: '/images/tp2020-59.webp',
    text: 'Observe atentamente a descrição dos sintomas de dois pacientes distintos:\n\nPaciente I: jovem, sexo masculino, há 4 dias com quadro de tosse inicialmente seca, que evoluiu para expectoração com secreção amarelada espessa e presença de laivos de sangue, associado a febre alta e discreta dor ventilatório-dependente dorsal à direita.\n\nPaciente II: idoso, tabagista, com perda de peso de 7kg em 2 meses, associada a tosse seca, dispneia aos grandes esforços e dor torácica ventilatório dependente em base direita. Verifique as imagens radiográficas a seguir (figuras A e B):\n\nCorrelacione os achados clínicos e radiológicos e selecione a afirmativa correta:',
    options: [
      '(A) A descrição de sintomas “II” associado ao radiograma “B” permite inferir um diagnóstico sindrômico de Derrame Pleural. Os sinais esperados no exame físico seriam na base direita: a palpação com diminuição da expansibilidade e do frêmito toraco vocal, percussão maciça e diminuição ou abolição da ausculta de murmúrio vesicular.',
      '(B) A descrição de sintomas “I” associado ao radiograma “A” permite inferir um diagnóstico sindrômico de Consolidação Pulmonar com provável diagnóstico etiológico de Pneumonia. Os sinais esperados no exame físico seriam na base direita: palpação com diminuição da expansibilidade e do frêmito toraco vocal, percussão maciça e presença de estertores crepitantes na ausculta.',
      '(C) A descrição de sintomas “I” associado ao radiograma “A” permite inferir um diagnóstico sindrômico de Tromboembolismo Pulmonar com consequente infarto do parênquima pulmonar. Os sinais esperados no exame físico seriam na base direita: palpação com diminuição da expansibilidade e aumento do fremito toracovocal, percussão timpânica e estertores crepitantes na ausculta.',
      '(D) A descrição de sintomas “II” associado ao radiograma “A” permite inferir um diagnóstico sindrômico de Consolidação Pulmonar com provável diagnóstico etiológico de Pneumonia. Os sinais esperados no exame físico seriam na base direita: palpação com diminuição da expansibilidade e diminuição do frêmito toraco vocal, percussão maciça e estertores crepitantes na ausculta.'
    ],
    correctAnswer: 0,
    explanation: 'Paciente II (idoso, tabagista, emagrecido, dor pleurítica e dispneia) com a radiografia B, que mostra velamento da base direita com parábola de Damoiseau: derrame pleural.\n\nNo exame físico esperam-se, na base direita, expansibilidade e frêmito toracovocal diminuídos, macicez à percussão e murmúrio vesicular diminuído ou abolido.',
    commentary: 'Na consolidação (paciente I), o frêmito toracovocal está aumentado, e não diminuído — por isso a alternativa B está errada. A radiografia A não mostra infarto pulmonar.',
    reference: 'Atualização e reciclagem – Pneumologia. SPPT, 2008, 7ª Edição. Editora Roca. / Condutas em Pneumologia. Luis Carlos Corrêa, 2002, 1ª Edição. Editora Revinter.',
    tags: ['pneumologia', 'semiologia', 'derrame pleural']
  },
  {
    id: 'tp2020-60',
    module: 'Clínica Médica',
    text: 'Mulher, 35 anos, em tratamento de Artrite Reumatoide (AR) com metotrexato + anti-TNF. Clinicamente, a patologia inflamatória (AR) está em remissão, sem uso de corticoterapia há anos. Queixa-se de calafrios noturnos, emagrecimento e tosse há 3 meses. A radiografia de tórax mostra um infiltrado no ápice pulmonar direito.\n\nDefina a complicação demonstrada:',
    options: [
      '(A) Neoplasia pulmonar',
      '(B) Tuberculose pulmonar',
      '(C) Sarcoidose',
      '(D) Acometimento pulmonar da AR'
    ],
    correctAnswer: 1,
    explanation: 'Paciente em uso de anti-TNF e metotrexato com febre noturna, emagrecimento, tosse por 3 meses e infiltrado apical: tuberculose pulmonar, complicação classicamente associada ao bloqueio do TNF (essencial para a formação e manutenção do granuloma).',
    commentary: 'Neoplasia, sarcoidose e acometimento pulmonar da AR são diferenciais, mas o contexto de imunobiológico e o quadro consumptivo com lesão apical apontam para tuberculose.',
    reference: 'Treatment of rheumatoid arthritis with tumor necrosis factor inhibitors may predispose to significant increase in tuberculosis risk: a multicenter active-surveillance report. Arthritis Rheum. 2003 Aug; 48(8): 2122-7. doi: 10.1002/art.11137. / Tuberculosis and biologics in rheumatology: A special situation. Int J Rheum Dis. 2017 Oct; 20(10): 1313-1325. doi: 10.1111/1756-185X.13129. / Tuberculosis risk and anti-tumour necrosis factor agents in rheumatoid arthritis: a critical appraisal of national registry data. Int J Rheum Dis. 2014 Sep; 17(7):716-24. doi: 10.1111/1756-185X.12375. / The Risk of Tuberculosis in Patients with Rheumatoid Arthritis Treated with Tumor Necrosis Factor-α Antagonist: A Metaanalysis of Both Randomized Controlled Trials and Registry/Cohort Studies. J Rheumatol. 2015 Dec;42(12):2229-37. doi: 10.3899/jrheum.150057. Epub 2015 Oct 15.',
    tags: ['pneumologia', 'tuberculose', 'imunobiológicos']
  }
];
