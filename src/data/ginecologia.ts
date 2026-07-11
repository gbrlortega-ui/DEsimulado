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
    explanation: 'BI-RADS 5 indica lesão altamente suspeita. Core biopsy ou mamotomia fornecem o diagnóstico do nódulo, e a PAAF do linfonodo axilar avalia o comprometimento nodal.',
    commentary: 'O bi-rads 5 é utilizado para classificar exame de mamografia com lesão altamente suspeita para câncer de mama, como no exemplo acima. O diagnóstico anatomopatológico é sempre necessário para nortear a melhor conduta e se possível deve ser feito antes da abordagem cirúrgica. Tanto core biopsy quanto mamotomia fornecem diagnostico histopatológico, permitindo a realização de imuno-histoquímica essencial para a escolha da abordagem terapêutica inicial (cirurgia ou quimioterapia neoadjuvante). A PAAF permite identificar presença ou ausência de células neoplásicas, cujo resultado tem impacto na abordagem cirúrgica da axila.',
    reference: 'Diretrizes em mastologia: Facina, G; Oliveira, V.M. et al, Sociedade Brasileira de Mastologia, 2021.',
    tags: ['Mastologia', 'Oncologia']
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
    explanation: 'Os miomas submucosos (estruturais) são os mais sintomáticos e apresentam pouca resposta ao tratamento clínico farmacológico.',
    commentary: 'Os miomas submucosos, são geralmente os mais sintomáticos em relação a sangramento uterino aumentado e tem pouca resposta ao tratamento clínico. Geralmente os distúrbios ovulatórios cursam com irregularidade menstrual. Deve ter atenção especial ao uso de anticoncepcional nos casos de risco de trombose. Não existe técnica de exérese de focos de adenomiose.',
    reference: 'Yela DA, Benetti-Pinto CL. Sangramento uterino anormal. São Paulo: Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO), 2018.',
    tags: ['Ginecologia Geral', 'DIP']
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
    explanation: 'Menopausa (especialmente precoce), histórico familiar (genética), tabagismo e uso de corticoides são fatores clássicos de risco.',
    commentary: 'Os fatores de risco para osteoporose são: Idade, glicocorticoides orais ou sistêmicos, história de quedas, osteoporose secundária (menopausa precoce, hipertireoidismo, hiperprolactinemia, doença de Cushing , diabetes mellitus, mieloma múltiplo, hemoglobinopatias, mastocitose, fibrose cística, doença pulmonar obstrutiva crônica, doença celíaca, doença inflamatória intestinal, síndrome de má absorção, intestino curto, artrite reumatoide, espondiloartrite, tabagismo, etilismo (Homens > 21 unidades/semana mulheres > 14 unidades/semana), fratura prévia por fragilidade, insuficiência ovariana prematura não tratada ou hipogonadismo masculino, História familiar de fratura de quadril, baixo índice de massa corpórea (< 18,5 kg/m2 ).',
    reference: 'Manual brasileiro de osteoporose: orientações práticas para os profissionais de saúde / organização Adriana Orcesi Pedro , Perola Grinberg Plapler , Vera Lúcia Szejnfeld - 1. ed. - São Paulo: Editora Clannad, 2021, ISBN 978-65-89832-00-3',
    tags: ['Climatério', 'Osteoporose']
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
    explanation: 'Paciente com sintomas vasomotores e atrofia urogenital na janela de oportunidade. Devido à hipertensão, a via transdérmica é preferível por evitar metabolismo de primeira passagem.',
    commentary: 'Paciente se encontra na janela de oportunidade para Terapia Hormonal (TH) -10 anos de sintomas e abaixo de 60 anos; além de nenhuma contraindicação para o uso. A condição de Hipertensão não é contraindicação para TH, porém diante essa comorbidades opta-se por via transdérmica, por evitar o metabolismo hepático de 1ª passagem. A opção da resposta é comercializada através do Systen Sequi®ou Estalis®.',
    reference: 'CONSENSO BRASILEIRO DE TERAPIA HORMONAL DO CLIMATÉRIO, 2024. https://app.ginecoacademy.com/consenso-brasileiro-deterapeutica-hormonal-2024-principais-recomendacoes/',
    tags: ['Climatério', 'Terapia Hormonal']
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
    explanation: 'O estágio M5 e P5 representa o patamar de desenvolvimento adulto completo. O tamanho final das mamas é individual.',
    commentary: 'Correta, pois de acordo com a classificação de Tanner, esta adolescente tem o desenvolvimento mamário normal, cabendo aí, variações constitucionais individuais. A telarca (desenvolvimento do tecido mamário glandular) é o 1º evento da puberdade. A aplicação da escala de Tanner deve fazer parte da avaliação rotineira para acompanhamento do estágio da maturação sexual da adolescente. O uso de hormônios não tem aplicabilidade neste caso, já que a mama se encontra em estadio adequado à idade cronológica.',
    reference: 'Endocrinologia Feminina/ Fernandes CE, Pompei LM. Ed Manole 2016, pag. 173-82. Hormônios em Ginecologia/ Benetti-Pinto CL, Fernandes CE, Silva filhos AL. Ed Manole 2024, pag. 91-7.',
    tags: ['Ginecologia Infanto-Puberal', 'Puberdade']
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
    explanation: 'Em hipertensas, os métodos com estrogênio (combinados) devem ser evitados. Progestagênios isolados e DIUs são categoria 1 ou 2 pela OMS.',
    commentary: 'Segundo os critérios de elegibilidade da Organização Mundial de Saúde, para estes casos, a melhor escolha será pelo progestagênio isolado por essas vias que constam na alternativa (B). Apesar da hipertensão, existe a alternativa de métodos mais seguros de que preservativos, como os progestagênios isolados. Contraceptivos combinados são proscritos pelos critérios de elegibilidade da OMS por conterem estrogênios. É verdade que a decisão deva ser da mulher, mas como neste caso, somente após colocadas todas as possibilidades que não interfiram com a quadro hipertensivo, ou seja, deve-se excluir contraceptivo combinado por qualquer via.',
    reference: 'Hormônios em Ginecologia/ Benetti-Pinto CL, Fernandes CE, Silva filhos AL. Ed Manole 2024, pag. 11-7. Endocrinologia Feminina/ Fernandes CE, Pompei LM. Ed Manole 2016, pag. 341-97',
    tags: ['Contracepção']
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
    explanation: 'ASC-H possui alto risco de lesão precursora (NIC 2/3) ou câncer invasivo latente. Colposcopia é obrigatória.',
    commentary: 'Estudos revelam frequência de lesão de alto grau entre 12,2% e 68% e de câncer em torno de 1,3% a 3% nas mulheres com citologia de ASC-H. Recomendação: Todas as mulheres com laudo citopatológico de ASC-H devem ser encaminhadas para uma unidade de referência para colposcopia.',
    reference: 'Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero.',
    tags: ['Ginecologia Oncológica', 'Patologia do Trato Genital Inferior']
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
    explanation: 'Vaginose bacteriana (Gardnerella) apresenta corrimento característico, Whiff positivo e ausência de processo inflamatório (não é vaginite).',
    commentary: '(C) correta, pois trata-se de quadro clínico típico de vaginose bacteriana, confirmada pelo teste do KOH, que alcaliniza o meio e produz odor de putrecina (teste de Whiff). O mesmo efeito ocorre após coito e menstrução, situações que alcalinizam o meio vaginal. No caso de tricomoníase, existe processo inflamatório e prurido como queixa e a secreção usualmente tem coloração amareloesverdeada. Na presença de sintomas clássicos, o exame físico confirma a suspeita, não se deve pedir exame complementar e sim tratar em seguida da consulta clínica.',
    reference: 'Peixoto S. Infecção Genital na Mulher Ed Roca 2007.Pag 89- 113. Tratado de Ginecologia FEBRASGO. Elsevier 2019. Pag. 265- 78',
    tags: ['Ginecologia Geral', 'Infecções']
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
    explanation: 'Glicemia de jejum ≥ 126 mg/dL no primeiro trimestre define Diabetes Pré-Gestacional (paciente já era diabética antes da gravidez).',
    commentary: 'Exame de glicemia de jejum com valor acima de 126 mg/dl primeiro trimestre, caracteriza diabetes pré-gestacional ou “overt diabetes”, paciente que estava diabética e não sabia, seguimento a princípio com controle dietético e com glicosimetria de horário, e podemos acrescentar exercícios físicos.',
    reference: 'Organização Pan-Americana da Saúde. Ministério da Saúde. Federação Brasileira das Associações de Ginecologia e Obstetrícia. Sociedade Brasileira de Diabetes Rastreamento e diagnóstico de diabetes mellitus gestacional no Brasil. Brasília, DF: OPAS, 2016. 32p.: il. ISBN: 978-85-7967-118-0',
    tags: ['Obstetrícia', 'Diabetes']
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
    explanation: 'A tríade de interrupção de contrações, dor lancinante e subida/perda da apresentação fetal com sofrimento agudo é clássica de rotura uterina (especialmente em cicatriz prévia).',
    commentary: 'Os sinais e sintomas da ruptura uterina incluem bradicardia fetal, desacelerações variáveis, evidência de hipovolemia, perda da posição fetal (detectada durante o exame cervical) e dor abdominal intensa ou constante. Se o feto foi expelido do útero e está localizado no interior da cavidade peritoneal, a morbidade e mortalidade fetal e materna aumentam significativamente. O tratamento da ruptura uterina é laparotomia imediata com cesariana e, se necessário, histerectomia.',
    reference: 'BRASIL. Ministério da Saúde. Secretaria de Atenção à Saúde. Atenção ao pré-natal de baixo risco. I.ed. Brasília: Ministério da Saúde; 2012. BRASIL. Ministério da Saúde. Secretaria de Atenção A Saúde. Gestação de alto risco. Brasília: Editora do Ministério da Saúde, 2010. BRASIL. Ministério da Saúde. Secretaria de Atenção à Saúde. Pré-natal e Puerpério: atenção qualificada e humanizada. 1.ed. Brasília: Ministério da Saúde; 2005. BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde. Saúde Brasil 2011: uma análise da situação de saúde e a vigilância da saúde da mulher. Brasília: Ministério da Saúde, 2012.',
    tags: ['Obstetrícia', 'Emergência']
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
    explanation: 'O SARS-CoV-2 não é transmitido pelo leite. Os benefícios dos anticorpos maternos superam os riscos.',
    commentary: 'Evidências atuais sugerem que o leite materno não é uma fonte de transmissão do SARS-CoV-2. Portanto, as mães com suspeita ou confirmação de COVID-19 devem continuar amamentando, desde que tomem precauções de higiene, como usar máscara e lavar as mãos antes de tocar no bebê. Esta recomendação é independente do status de vacinação contra COVID-19. Interromper a amamentação imediatamente e alimentar o bebê com fórmula até se recuperar completamente do COVID-19: Interromper a amamentação não é necessário, pois o leite materno não transmite o vírus. Além disso, a amamentação proporciona anticorpos e outros benefícios imunológicos importantes para o bebê. Amamentar apenas se tiver sido vacinada contra COVID-19, caso contrário, deve usar fórmula: A continuidade da amamentação não depende do status de vacinação da mãe. Mesmo mães não vacinadas devem amamentar enquanto tomam precauções de higiene. Amamentar apenas se o bebê já tiver sido exposto ao COVID-19, caso contrário, usar fórmula: Não há necessidade de restringir a amamentação com base na exposição do bebê ao COVID-19, pois o leite materno não transmite o vírus e fornece benefícios significativos.',
    reference: 'Centers for Disease Control and Prevention. (2021). Care for Breastfeeding People: Interim Guidance on Breastfeeding and Breast Milk Feeds in the Context of COVID-19. CDC. World Health Organization. (2020). Breastfeeding and COVID19: Scientific Brief. WHO. American Academy of Pediatrics. (2021). Breastfeeding During the COVID-19 Pandemic. AAP. Ministério da Saúde do Brasil (2021) Campanha incentiva o aleitamento materno no Brasil',
    tags: ['Puerpério', 'Aleitamento']
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
    explanation: 'A tríade clássica de endometrite/infecção puerperal envolve febre, dor uterina e lóquios fétidos/purulentos.',
    commentary: 'Na sepse puerperal estão presentes dois ou mais dos seguintes eventos: dor pélvica; febre; conteúdo vaginal anormal; cheiro anormal do corrimento vaginal; atraso na redução do tamanho do útero (< 2cm/dia durante os primeiros dias).',
    reference: 'Infecção puerperal. Sérgio Hecker Luz, João Alfredo Piffero Steibel, Gustavo Steibel, Edson Vieira da Cunha Filho. FEMINA 2019;47(12): 898-901.',
    tags: ['Puerpério', 'Infecções']
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
    explanation: 'Em gestantes com tempo de infecção desconhecido, utiliza-se esquema de sífilis latente tardia (3 doses de 2,4 milhões). O tratamento do parceiro é obrigatório para evitar reinfecção.',
    commentary: 'Segundo o Ministério da Saúde o tratamento proposto para gestante diante de um teste rápido positivo para a sífilis é: • Tratamento imediato com penicilina benzatina na dose compatível com o estadio da doença, que no caso é desconhecido, então, deve ser tratado com a dose de 7,2 milhões. • Coleta de novo teste para confirmação. • Tratar o parceiro sempre. • Notificar a vigilância sanitária • Acompanhar com teste não treponêmico mensal para verificar aumento de titulação.',
    reference: 'Protocolo clínico e diretrizes terapêuticas para a prevenção da transmissão vertical de HIV, sífilis e hepatites virais Ministério da Saúde 2022',
    tags: ['Obstetrícia', 'IST']
  },
  {
    id: 'tp2024-94',
    module: 'Ginecologia e Obstetrícia',
    text: 'Paciente, 30 semanas, perda líquida clara abrupta. Exame: especular confirma saída de líquido odor "água sanitária". Conduta correta?',
    options: [
      '(A) Corioamnionite; induzir parto imediatamente.',
      '(B) Iniciar tocólise imediatamente.',
      '(C) Cardiotocografia não tem valor antes de 32 semanas.',
      '(D) Administrar corticosteroides (betametasona ou dexametasona).'
    ],
    correctAnswer: 3,
    explanation: 'RPMO prematura exige corticoterapia para maturação pulmonar e neuroproteção se indicado.',
    commentary: 'A ruptura prematura das membranas é o vazamento do líquido amniótico que envolve o feto em qualquer momento antes de o trabalho de parto ter começado. Administrar corticosteroides de 24 semanas a 34 semanas (deve-se individualizar o caso par a uso até 35 semanas e seis dias); Para o uso correto da tocólise, há necessidade de realizar adequadamente o diagnóstico de verdadeiro trabalho de parto prematuro, com presença de contrações uterinas regulares e alterações cervicais progressivas. Classicamente, devem ocorrer duas ou três contrações em 10 minutos, acompanhadas de dilatação cervical superior a 1 – 2 centímetros, ou esvaecimento maior que 80%. O pleno desenvolvimento do sistema parassimpático ocorre no início do terceiro trimestre. No segundo trimestre, a utilização da CTG anteparto está prejudicada, pois apenas 50% dos fetos saudáveis demonstram acelerações da FCF. No termo, as acelerações transitórias da FCF constituem o melhor marcador de bem-estar fetal. A maturação progressiva do sistema parassimpático fetal provoca redução nos níveis da FCF basal, mantendo-se dentro da faixa normal de 110 a 160 batimentos por minuto (bpm). As acelerações da FCF apresentam menor amplitude e duração antes de 32 semanas de gestação, sendo mais exuberantes após esse período. Antes de 32 semanas, em geral, observam-se acelerações com amplitude de apenas 10 bpm e duração de dez segundos. Após 32 semanas, as acelerações são mais evidentes, de maior amplitude e duração, geralmente acima de 15 bpm e com duração de, pelo menos, 15 segundos. É importante acompanhar os batimentos cardíacos fetais (BCFs) com cardiotocografia para identificar sinais de infecção intraútero, que incluem taquicardia, redução da variabilidade da frequência cardíaca fetal e/ou outros achados de condição não tranquilizadora. A complicação mais temida, a corioamnionite, pode ser assintomática inicialmente, mas também se manifestar pelo desencadeamento do trabalho de parto, acompanhado de perda de líquido amniótico de aspecto purulento e/ou odor fétido. Nesses casos, podem ser observadas febre, dor à palpação uterina e taquicardias fetal e materna, essas últimas um sinal que pode preceder a identificação do aumento de temperatura.',
    reference: 'Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO). Rotura prematura de membranas ovulares. São Paulo: FEBRASGO; 2021 (Protocolo FEBRASGO Obstetrícia, n. 45/ Comissão Nacional Especializada em Assistência Pré-Natal). Souza E, Fava JL, Musiello RB, Camano L. Trabalho de parto prematuro: uso racional da tocólise. São Paulo: Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO); 2018. Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO). Cardiotocografia anteparto. São Paulo: FEBRASGO; 2021. (Protocolo FEBRASGO-Obstetrícia, n. 17/Comissão Nacional Especializada em Medicina Fetal).',
    tags: ['Obstetrícia', 'Prematuridade']
  },
  {
    id: 'tp2024-95',
    module: 'Ginecologia e Obstetrícia',
    text: 'Gestante HIV positivo, 38 semanas, colo 6cm, bolsa íntegra. Carga viral indetectável na 34ª semana. Conduta?',
    options: [
      '(A) Realizar nova carga viral; se >1000, cesárea e AZT.',
      '(B) Condução do trabalho de parto vaginal; sem necessidade de AZT endovenoso.',
      '(C) Condução do trabalho de parto vaginal; realizar AZT endovenoso.',
      '(D) Indicar cesariana eletiva obrigatoriamente.'
    ],
    correctAnswer: 1,
    explanation: 'Pacientes com carga viral indetectável após a 34ª semana, em uso de TARV, podem ter parto vaginal sem necessidade de AZT profilático no parto.',
    commentary: 'Paciente vive com HIV e carga viral indetectada na 34 semana de gestação e faz uso regular de TARV, pode ter parto vaginal sem a necessidade do uso de AZT endovenosa',
    reference: 'Brasil. Ministério da Saúde. Secretaria de Atenção Primária à Saúde. Departamento de Ações Programáticas. Manual de gestação de alto risco [recurso eletrônico] / Ministério da Saúde, Secretaria de Atenção Primária à Saúde. Departamento de Ações Programáticas. – Brasília : Ministério da Saúde, 2022. 692p.:il.',
    tags: ['Obstetrícia', 'Infecções']
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
    explanation: 'Trabalho de parto prolongado e múltiplos toques vaginais são os principais fatores de risco para endometrite.',
    commentary: 'A alternativa correta (A), o trabalho de parto prolongado é um fator de risco para infecção puerperal. A hipertensão arterial está relacionada a aumento de risco de morte materna não é fator de risco para infecção puerperal. A rotura das membranas inferior a 16 horas quando exame de Streptococcus negativo baixo risco de infecção e adolescente não é fator de risco.',
    reference: 'Assistência ao quarto período do parto de risco habitual, protocolo Febrasgo 2018. Manual técnico do Pré-natal e puerpério no SUS-SP 2010. Pré-natal e Puerpério, atenção qualificada e humanizada. Ministério da Saúde, 2006.',
    tags: ['Puerpério', 'Infecções']
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
    explanation: 'No tumor Phyllodes, margens de pelo menos 1,0cm são ideais para prevenir recidiva local.',
    commentary: 'A margem em um Phyllodes Boderline deve ser igual ou maior que 1 cm. O papel da radioterapia em TF na variante maligna é controverso. Dados limitados em série de casos, mostram maior controle das recidivas locais nos casos de tumores de grandes dimensões. Não é indicado radioterapia em TF Boderline. Não existe indicação de terapia farmacológica adjuvante. Não há necessidade de cirurgia axilar em TP malignos e com gânglios palpáveis. Linfonodos com altíssima suspeita clínica de comprometimento deve ser ressecado, mas não deve ser realizado esvaziamento axilar completo. No TP Boderline não deve ser realizado esvaziamento axilar completo.',
    reference: 'Doenças da Mama. 3ª edição. Rio de Janeiro: Atheneu, 2022',
    tags: ['Mastologia', 'Cirurgia']
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
    explanation: 'Paciente em idade de rastreamento (50-69 anos) sem fatores de alto risco (tia-avó tardia não conta como risco familiar forte).',
    commentary: 'O caso consiste em uma paciente com risco habitual para câncer de mama e sem sinais de suspeição que está em idade de rastreamento pelo ministério da saúde. Sendo assim, o exame padrão ouro para ser indicado é a mamografia bilateral de rastreamento.',
    reference: 'Instituto Nacional de Câncer José Alencar Gomes da Silva. Diretrizes para a detecção precoce do câncer de mama no Brasil/ Instituto Nacional de Câncer José Alencar Gomes da Silva – Rio de Janeiro: INCA, 2015. https://www.gov.br/conitec/ptbr/midias/protocolos/diretrizes_de teccaoprecoce_cm.pdf',
    tags: ['Mastologia', 'Rastreamento']
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
    explanation: 'Sertralina e depressão não contraindicam nenhum método contraceptivo moderno. Todos são Categoria 1.',
    commentary: 'Os critérios de elegibilidade são orientações da OMS (organização mundial de saúde) sobre a prescrição de métodos contraceptivos levando em consideração o risco-benefício para a saúde de cada paciente. (A) O Acetado de Medroxiprogesterona pode ser usado sem nenhum problema. (B) Não há contraindicações ao uso de métodos orais. (C) Paciente jovem e em tratamento para a depressão com medicação que não há contraindicação a nenhum método contraceptivo. (D) Não há efeito positivo no humor com o uso de contraceptivos combinados',
    reference: 'Tratado de Ginecologia: Manuel João Batista Castello Girão, Edmund C. Baracat, Geraldo R. Lima (2017)',
    tags: ['Contracepção', 'Saúde Mental']
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
    explanation: 'Sangramento na pós-menopausa com endométrio espessado (>4-5mm) é câncer de endométrio até que se prove o contrário. Biópsia é mandatória.',
    commentary: 'Trata-se de uma mulher na pós-menopausa tardia apresentando sangramento vaginal, com fatores de risco presentes para câncer de endométrio (obesidade, nuliparidade, pós-menopausa), ausência de lesões visíveis no exame ginecológico e espessamento endometrial ao ultrassom. Nesse caso trata-se de um sangramento pós-menopausa com indicação de biópsia de endométrio para afastar lesões como hiperplasia endometrial com atipia e neoplasia maligna de endométrio.',
    reference: 'Protocolos Febrasgo. Hiperplasia endometrial e câncer de endométrio. 2021.',
    tags: ['Ginecologia Oncológica', 'Pós-menopausa']
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
    explanation: 'Quadro de choque hemorrágico (hipotensão, taquicardia, palidez) em paciente com beta-hCG positivo e líquido livre em cavidade sugere gravidez ectópica rota.',
    commentary: 'A gravidez ectópica em geral, não se apresenta classicamente com atraso menstrual regular, mas sim, com sangramento vaginal irregular. O teste de gravidez acima de 3000 mui/ml em geral, deve apresentar a visualização de saco gestacional intra-uterino. A sua ausência, nestas condições, mesmo sem visualização de gestação ectópica, deve fazer a sugestão deste diagnóstico, como é o caso.\n\nGestações ectópicas acima de 8-10 semanas estão mais sujeitas à ruptura, que, clinicamente se manifesta com sinais e sintomas de abdome agudo hemorrágico, com dor abdominal, mal estar, tontura, náuseas, vômitos, hipotensão, taquisfigmia, taquicardia, mucosas hipocoradas, distensão abdominal, dor à palpação abdominal, sinais de descompressão brusca. O ultrassom pode sugerir a presença de sangue em cavidade abdominal, que se traduz por imagem hipoecóica.',
    reference: 'Zugaib Obstetrícia, Ed. Manole, 4ª edição, 2020. Novak, Tratado de Ginecologia. Rio de Janeiro: Guanabara-Koogan. 16.ed, 2021. Rezende, Obstetrícia, Guanabara-Koogan, 14ª edição, 2022.',
    tags: ['Obstetrícia', 'Emergência']
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
    explanation: 'O hCG (Gonadotrofina Coriônica Humana) mantém o corpo lúteo no início da gestação e está associado aos vômitos gestacionais e rastreio de aneuploidias.',
    commentary: 'A hCG é o mais importante hormônio glicoproteico produzido pela placenta. A molécula de hCG é constituída pelas subunidades α e β. A principal função da hCG é dar suporte ao corpo lúteo no início da gravidez. Nas primeiras semanas, os níveis sanguíneos do hormônio dobram a cada dois a três dias, atingem um pico máximo entre 8 e 12 semanas (50.000 a 150.000 mUI/mL) e, a seguir, decrescem gradualmente até níveis baixos (3.000 a 10.000 mUI/mL), que permanecem inalterados até o termo da gestação. Em casos de cromossomopatias os níveis de β hCG se alteram (aumentam na trissomia do 21 e diminuem nas trissomias do 13 e 18) auxiliando do diagnóstico precoce de cromossomopatias.\n\nTanto a progesterona quanto o estrogênio, o β hCG e o lactogenio placentário são hormônios produzidos pelo complexo feto-placentário, no entanto, apresentam funções em diferentes sistemas dos descritos na questão. Além do mais tais hormônios não apresentam grande impacto na detecção de cromossomopatias quanto β hCG.',
    reference: 'Coutinho T, Coutinho CM, Coutinho LM; Anatomia, Desenvolvimento e Fisiologia dos Anexos Embrionáriose Fetais; Tratado de Obstetrícia - Febrasgo / editores Cesar Eduardo Fernandes, Marcos Felipe Silva de Sá; 1. ed.; 4: (275-308)- Rio de Janeiro : Elsevier, 2019. Nicolaides NH, FMF; 2011.',
    tags: ['Obstetrícia', 'Fisiologia']
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
    explanation: 'Mastite lactacional sem abscesso é tratada com antibióticos orais e manutenção do esvaziamento mamário (amamentação).',
    commentary: 'Não há sinais de comprometimento sistêmico ou profundo na mama (abcesso). A conduta é ATB oral com manutenção da amamentação (esvaziamento mamário) e reavaliação em 48h.',
    reference: 'Febrasgo - Tratado de Ginecologia. Disponível em: Minha Biblioteca, Grupo GEN, 2018.',
    tags: ['Puerpério', 'Mastologia']
  },
  {
    id: 'tp2023-84',
    module: 'Ginecologia e Obstetrícia',
    text: 'Paciente de 23 anos, primigesta, Índice de Massa Corporal (IMC) 28kg/m2. Sem comorbidades prévias. Vem à segunda consulta de pré-natal com idade gestacional de 10 semanas e 5 dias. Traz exame de glicemia de jejum = 93mg/dL. Frente a este resultado do exame, qual a conduta para esta paciente? Parâmetros laboratoriais: Glicemia de jejum no pré-natal: Glicemia de jejum < 92mg/dL – normal; Glicemia de jejum - 92 a 125mg/dL – Diabetes Mellitus Gestacional; Glicemia de jejum ≥ 126mg/dL – Diabetes Mellitus',
    image: '/images/tp2023-84.PNG',
    options: [
      '(A) Encaminhar a paciente para iniciar insulinoterapia.',
      '(B) Prescrever medicação hipoglicemiante oral imediatamente.',
      '(C) Orientar dieta, realização de exercícios físicos e monitoração glicêmica.',
      '(D) Realizar teste oral de tolerância à glicose de 75g.'
    ],
    correctAnswer: 2,
    explanation: 'Glicemia de jejum entre 92 e 125 mg/dL no início da gestação define Diabetes Mellitus Gestacional (DMG); a conduta inicial é mudança no estilo de vida.',
    commentary: 'Após o diagnóstico de diabetes gestacional a paciente deverá ser orientada a realizar dieta, exercícios e monitoração glicêmica. Estas medidas apontarão para a necessidade da introdução da insulina ou se o controle continuará com as medidas adotadas. A glicemia de jejum está alterada e o valor está dentro da faixa de diabetes mellitus gestacional. Diante do diagnóstico realizado, não deverão ser realizados outros testes para diagnóstico. A droga de escolha para tratamento na gestação é a insulina, que não ultrapassa a barreira placentária e não atinge o feto. O uso da insulina será empregado, após tentativa de controlar os níveis glicêmicos com dieta e exercício físico.',
    reference: 'Rastreamento e diagnóstico de diabetes mellitus gestacional no Brasil. © 2017 Organização Pan-Americana da Saúde. Ministério da Saúde. Federação Brasileira das Associações de Ginecologia e Obstetrícia. Sociedade Brasileira de Diabetes. Tratado de obstetrícia FEBRASGO / editores Cesar Eduardo Fernandes, Marcos Felipe Silva de Sá; coordenação Coríntio Mariani Neto. – 1. ed. – Rio de Janeiro: Elsevier, 2019.',
    tags: ['Obstetrícia', 'Diabetes']
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
    explanation: 'Prurido palmoplantar no terceiro trimestre associado à icterícia é patognomônico de Colestase Gestacional.',
    commentary: 'A colestase intra-hepática da gravidez é uma disfunção, principalmente no terceiro trimestre, do transporte de ácidos biliares (AB) através da membrana canalicular, que resulta em acúmulo sistêmico de AB com prurido intenso. A patogênese é desconhecida, mas envolve uma hipersensibilidade genética aos metabólitos do estrogênio. Tem um prognóstico benigno para as mães, mas traz um risco maior para o feto. O tratamento é com alívio sintomático para a mãe, supervisão do feto, ácido ursodesoxicólico e programação oportuna do parto.',
    reference: 'Freitas, F et al. Rotinas em Obstetrícia. 6Ed. Porto Alegre: Artmed, 2011.',
    tags: ['Obstetrícia']
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
    explanation: 'Índice de choque = FC/PAS (110/100 = 1.1). Sobredistensão por polidrâmnio/macrossomia causa atonia.',
    commentary: 'O índice de choque é calculado a partir da fórmula FC/PAS. O principal elemento de risco do caso apresentado é a sobre distensão uterina decorrente do polidrâmnio e feto GIG. Sendo a HPP por atonia a primeira hipótese, a conduta inicial é ocitocina e transamin.',
    reference: 'Febrasgo - Tratado de Ginecologia. Disponível em: Minha Biblioteca, Grupo GEN, 2018.',
    tags: ['Obstetrícia', 'Hemorragia']
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
    explanation: 'Trabalho de parto prematuro exige internação para tocólise, corticoterapia e profilaxia para GBS.',
    commentary: 'A questão aborda anamnese obstétrica relatando que paciente já teve um parto prematuro na gestação anterior, oferecendo risco da repetição do fato, entendendo à necessidade de internação de fundamental importância na tentativa de prorrogar a gestação com medicação uterolítico e o uso do corticoide para maturidade pulmonar e uso antibiótico para evitar possível contaminação com Streptococcus do Grupo B, pois neste período da gestação não foi pesquisado a presença EGB e faz parte protocolo assistência ao parto prematuro. Há erro ao orientar a paciente repousar em casa e também ao propor observação, sem a necessidade de atuação rápida para inibir o trabalho de parto prematuro (TPP) que é de fundamental importância. Não há indicação da inibição do TPP antes do parto cesária, a fase do TPP no momento tem a possibilidade de inibir as contrações.',
    reference: 'saude.gov.br. https://bvsms.saude.gov.br › gestacao_alto_risco. https://fi-admin.bvsalud.org/document/view/gatn7. https://www.febrasgo.org.br/rbgo/uploads/arquivos/html/2009-31-tratamento-do-trabalho-de-parto-prematuro.',
    tags: ['Obstetrícia', 'Prematuridade']
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
    explanation: 'Gestantes com carga viral < 1000 cópias/mL podem ter parto por indicação obstétrica (incluindo vaginal).',
    commentary: 'A recomendação é que o parto vaginal seja a via de escolha nas gestantes com cv-hiv menor que 1.000 cópias/ml a partir da 34ª semana. Abaixo dessa contagem, a cesariana não é fator estatisticamente relevante para prevenção de tv-hiv e se mostra como importante causa de morbidade nessa população. A incidência de complicações pós- operatórias e hospitalizações após a cesariana é maior nas mvhiv do que nas mulheres soronegativas. Portanto, se não houver indicação obstétrica, não se recomenda realizar cesariana eletiva em gestante com cv-hiv abaixo de 1.000 cópias/ml para prevenir tv-hiv.',
    reference: 'Ministério da saúde. Protocolo clínico e diretrizes terapêuticas para prevenção da transmissão vertical de hiv, sífilis e hepatites virais. Página 108. 2022. Disponível em https://bvsms.saude.gov.br/bvs/publicacoes/protocolo_clinico_hiv_sifilis_hepatites.pdf',
    tags: ['Obstetrícia', 'Infecções']
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
    explanation: 'Útero aumentado e irregular associado a menorragia sugere miomatose uterina.',
    commentary: 'Das opções apresentadas, somente o mioma intramural seria capaz de gerar aumento do volume do útero, promovendo irregularidade de sua superfície externa e ainda sangramento uterino anormal.',
    reference: 'Donnez J, Dolmans MM. Uterine fibroid management: from the present to the future. Hum Reprod Update. 2016 Nov;22(6):665-686. doi: 10.1093/humupd/dmw023. Epub 2016 Jul 27. PMID: 27466209; PMCID: PMC5853598. Febrasgo, . Febrasgo - Tratado de Ginecologia. Disponível em: Minha Biblioteca, Grupo GEN, 2018.',
    tags: ['Ginecologia Geral']
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
    explanation: 'O CA 125 possui baixa sensibilidade e especificidade para o diagnóstico de endometriose.',
    commentary: 'A endometriose tem na sua suspeita clínica, indicação de prova terapêutica. A vídeo-laparoscopia com biópsia de lesões sugestivas de endometriose não é obrigatória para a instituição de um tratamento, ao contrário, a forte suspeita clínica de endometriose pode servir de base como indicação de tratamento clínico. O CA 125 é uma glicoproteína produzida naturalmente nos ovários, serosas, tubas uterinas e intestino, podendo estar aumentada no sangue devido à gravidez, período menstrual, endometriose e, algumas vezes, em casos de câncer, especialmente o câncer de ovário. Na maioria dos casos de endometriose, ela não sofre elevação, desta forma, atualmente, a sua dosagem é muito pouco utilizada para o diagnóstico de endometriose uma vez que ela tem baixa correlação com o diagnóstico, especialmente nos casos leves da doença.',
    reference: 'Novak, Tratado de Ginecologia. Rio de Janeiro: Guanabara-Koogan. 16.ed, 2021. Ginecologia de Willians, Hoffman et al. McGrawHIll 2ª edição, 2014.',
    tags: ['Ginecologia Geral', 'DIP']
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
    explanation: 'A enxaqueca com aura contraindica o uso de estrogênio pelo risco aumentado de AVC.',
    commentary: 'A cefaleia apresentada caracteriza uma enxaqueca com aura. a presença de aura é fator de risco para acidente vascular cerebral e a associação com contraceptivos que contém estrógenos aumenta esse risco. Dessa forma, qualquer contraceptivo hormonal contendo estrogênio (pílula contraceptiva, injetável mensal, anel vaginal e adesivo contraceptivo) são contraindicados. Métodos que contém somente progestagênios, como as pílulas de progestagênio, além de métodos não hormonais são adequados para essa situação clínica.',
    reference: 'Sacco S, Merki-Feld GS, Ægidius KL et al. Hormonal contraceptives and risk of ischemic stroke in women with migraine: a consensus statement from the European Headache Federation (EHF) and the European Society of Contraception and Reproductive Health (ESC). J Headache Pain. 2017;18(1):108.',
    tags: ['Contracepção']
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
    explanation: 'A propedêutica básica foca no fator masculino, reserva ovariana e fator tuboperitoneal.',
    commentary: 'A pesquisa básica de infertilidade compreende a pesquisa do fator masculino (50% das causas de infertilidade) através do espermograma; na mulher a pesquisa da reserva ovariana pelo AMH ou FSH juntamente com o estradiol (ambas na fase folicular inicial) e ultrasson transvaginal e histerossalpingografia para a avalição do fator anatômico.',
    reference: 'Infertilidade da prática clínica à laboratorial. Elvio Tognotti. 1 Ed, 2014, Editora Manole. ENDOCRINOLOGIA GINECOLÓGICA CLINICA E INFERTILIDADE. FRITZ, MARC A./SPEROFF, LEON, 2015, Revinter RJ.',
    tags: ['Infertibilidade']
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
    explanation: 'O achado de ASC-H exige avaliação colposcópica imediata pelo alto risco de lesão de alto grau.',
    commentary: 'Segundo as diretrizes do ministério da saúde /INCA de 2016 os casos de ASC-H devem ser encaminhados para avaliação colpscópica.',
    reference: 'Diretrizes brasileiras para o rastreamento do câncer do colo uterino. Segunda edição revista, ampliada e atualizada. INCA, RJ 2016.',
    tags: ['Ginecologia Oncológica', 'Patologia do Trato Genital Inferior']
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
    explanation: 'Paciente na janela de oportunidade com sintomas marcantes e risco de osteoporose tem indicação de TH.',
    commentary: 'A terapia hormonal da menopausa encontra indicação para alivio dos sintomas vasomotores, da atrofia vaginal e na prevenção de fraturas osteoporóticas. Os benefícios da TH superam os riscos quando iniciada para mulheres sintomáticas com menos de 60 anos de idade ou dentro do período de 10 anos de pós-menopausa. A hipertensão controlada não constitui contraindicação à TH, podendo a paciente agregar benefício ao seu uso. O tratamento tópico poderá aliviar os sintomas da atrofia vaginal, porém não apresentam resultados com relação aos fogachos. Para esses, a melhor escolha será a TH que deverá passar pela escolha do melhor esquema posológico e via de administração.',
    reference: 'Endocrinologia Feminina. César Eduardo Fernandes, Luciano de Melo Pompei – Barueri, SP: Manole, 2016',
    tags: ['Climatério', 'Terapia Hormonal']
  },
  {
    id: 'tp2023-95',
    module: 'Ginecologia e Obstetrícia',
    text: 'Paciente de 74 anos, viúva, moradora de casa de repouso para idosos, apresenta queixa de sangramento vaginal em pequena quantidade há 7 dias. É hipertensa crônica e diabética. Menopausada desde os 50 anos, nega terapia de reposição hormonal, teve 5 gestações, sendo elas 4 partos vaginais e 1 aborto sem necessidade de curetagem. Conta que há mais de 10 anos tem a sensação de peso e bola na vagina, e que muitas vezes perde urina aos pequenos esforços. Seu último exame de “prevenção” foi em 2010. Ao exame físico, observa-se a seguinte imagem: A principal hipótese diagnóstica é:',
    image: '/images/tp2023-95.PNG',
    options: [
      '(A) Prolapso uterovaginal',
      '(B) Carcinoma de colo uterino',
      '(C) Mioma parido',
      '(D) Pólipo endometrial friável'
    ],
    correctAnswer: 0,
    explanation: 'Sensação de "bola na vagina" associada a exteriorização em idosa multípara é prolapso.',
    commentary: 'A queixa e quadro clínico descrito, assim como a imagem do exame físico demonstrado na questão demonstram classicamente o diagnóstico de Prolapso uterovaginal completo. Apesar da queixa de sangramento uterino pós menopausa e a ausência de acompanhamento médico nos últimos 13 anos pode sugerir a presença de carcinoma de colo uterino, no entanto a queixa e quadro clínico descrito, assim como a imagem do exame físico demonstram classicamente o diagnóstico de Prolapso Uterovaginal Completo. Dificilmente uma paciente pós menopausa apresentaria diagnóstico de pólipo endometrial ou mioma parido, além disso são situações em que há sangramento mais abundante do que ao descrito no enunciado da questão.',
    reference: 'Brito LGO, Juliato CRT, Castro EB; Prolapso do Órgãos Genitais; Tratado de ginecologia Febrasgo / editores Cesar Eduardo Fernandes, Marcos Felipe Silva de Sá; 1. ed.;65: (2020-2052)- Rio de Janeiro : Elsevier, 2019.',
    tags: ['Ginecologia Geral', 'Uroginecologia']
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
    explanation: 'Tumores sólidos com contornos irregulares e alta vascularização são marcadores de malignidade (M-rules).',
    commentary: 'Desde o ano 2000, a classificação IOTA (international ovarian tumor analysis) vem padronizando descritores ecográficos que devem ser valorizados na avaliação de massas anexiais. São 5 descritores de malignidade e 5 de benignidade. as características tumor sólido de contornos irregulares e vascularização abundante são critérios de malignidade.',
    reference: 'MASSAS ANEXIAIS: DESCRIÇÃO E INTERPRETAÇÃO ULTRASSONOGRÁFICA POR IOTA. REVISTA FÊMINA, FEBRASGO, 2021; 49: 6-11',
    tags: ['Ginecologia Oncológica', 'Imagenologia']
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
    explanation: 'As diretrizes desaconselham a coleta em < 25 anos pela raridade do câncer invasivo e alta taxa de regressão de lesões.',
    commentary: 'Nas diretrizes brasileiras para o rastreamento do câncer de colo de útero não se recomenda a coleta de citologia oncológica de colo uterino abaixo de 25 anos, porque, além da baixa incidência de câncer do colo do útero em mulheres jovens, há evidências de que o rastreamento em mulheres com menos de 25 anos seja menos eficiente do que em mulheres mais maduras. Além disto, lesões tipo NIC II em mulheres jovens tem um comportamento evolutivo semelhante à lesão de baixo grau. Outro fato relevante mais recentemente demonstrado é de que o tratamento de lesões precursoras do câncer de colo em adolescentes e mulheres jovens está associado ao aumento de morbidade obstétrica e neonatal, principalmente nas mulheres em que são feitos processos cirúrgicos no colo uterino, aumentando o risco de parto prematuro (evidência alta).',
    reference: 'Zugaib Obstetrícia, Ed. Manole, 4ª edição, 2020. Novak, Tratado de Ginecologia. Rio de Janeiro: Guanabara-Koogan. 16.ed, 2021. Rezende, Obstetrícia, Guanabara-Koogan, 14ª edição, 2022.',
    tags: ['Ginecologia Oncológica']
  },
  {
    id: 'tp2023-98',
    module: 'Ginecologia e Obstetrícia',
    text: 'Mulher, 26 anos, G4P3A0, branca, desempregada, sem parceria sexual no momento, procura atendimento em Pronto-Socorro Ginecológico, devido ao aparecimento de “caroços" na vulva e odor na vagina há mais ou menos 5 dias. Ao exame ginecológico, observam-se as lesões abaixo e um corrimento vaginal mal-cheiroso, branco e abundante. Qual o método para confirmação diagnóstica e o tratamento correto?',
    image: '/images/tp2023-98.PNG',
    options: [
      '(A) VDRL e penicilina benzatina 2.400.000UI via intramuscular; repetir em 7 dias.',
      '(B) Teste rápido treponêmico e penicilina benzatina 2.400.000UI via intramuscular.',
      '(C) O diagnóstico é clínico. O tratamento deve ser iniciado com ácido tricloroacético a 90%.',
      '(D) Deve-se realizar biópsia para anatomopatológico e o tratamento é a completa ressecção com anestesia local.'
    ],
    correctAnswer: 1,
    explanation: 'Condiloma lata e roséolas são sinais de Sífilis Secundária; o diagnóstico é por teste rápido ou sorologia.',
    commentary: 'A sífilis secundária se caracteriza pelo aparecimento de manchas descamativas em região palmar e plantar (roséolas sifilíticas). Com o surgimento em genitais e próximo ao ânus de lesões papulosas não verrucosas ricas em treponemas. Essas lesões, conhecidas como Condiloma Sifilítico ou Lata, são facilmente confundidas com condiloma acuminado. A falta do tratamento correto na grávida proporciona uma taxa de transmissão vertical entre 50 a 100%',
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
    explanation: 'O atendimento de emergência é prioritário e não depende de registro policial ou laudo pericial.',
    commentary: 'A exigência destes documentos para atendimento à vítima de violência sexual, nos serviços de saúde é incorreta e ilegal. A assistência à saúde é prioritária e a recusa de atendimento pode ser caracterizada, ética e legalmente, como omissão. Após o atendimento médico, caso seja desejo da mulher, e ela tenha condições, ela poderá ir à delegacia para lavrar o Boletim de Ocorrência Policial. Caso o exame pericial pelo IML não tenha sido realizado, o laudo será feito com base no prontuário médico. Dessa forma, o atendimento de emergência a pacientes vítimas de violência sexual é um desafio para os profissionais da saúde e exige uma capacitação adequada para que seja feita de forma ética, legal, respeitosa e eficiente. O profissional médico deve estar preparado tanto para o manejo clínico quanto psicológico de pacientes vítimas de violência sexual, visto que falhas nessa abordagem podem ocasionar casos de reincidência dessas agressões e sérios danos para a paciente, especialmente quando a vítima é criança ou adolescente.',
    reference: 'Ética em ginecologia e obstetrícia / Conselho Federal de Medicina. Câmara Técnica de Ginecologia e Obstetrícia. – Brasília: CFM, 2021.',
    tags: ['Ética', 'Saúde Pública']
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
    explanation: 'Fluxo papilar suspeito exige investigação com imagem para afastar papiloma ou carcinoma.',
    commentary: 'A citologia de fluxo papilar tem alto percentual (de até 90%) para falso negativo. Por isso não solicitamos este exame. Os exames de imagem identificam a maioria das causas de fluxo papilar patológico e permitem a orientação de biopsia para diagnostico histológico.',
    reference: 'Diretrizes em Mastologia, 2022, Sociedade Brasileira de Mastologia.',
    tags: ['Mastologia']
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
    explanation: 'Gestantes devem seguir o rastreamento de câncer de colo do útero conforme a periodicidade e faixa etária recomendadas para as demais mulheres.',
    commentary: 'Gestantes têm o mesmo risco que não gestantes de apresentarem câncer do colo do útero. O pré-natal é uma excelente oportunidade para atualizar o rastreamento.',
    reference: 'Diretrizes brasileiras para o rastreamento do câncer do colo do útero, INCA 2020.',
    tags: ['Obstetrícia', 'Rastreamento']
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
    explanation: 'Pelas diretrizes brasileiras, a conduta para ASC-US em mulheres de 30 anos ou mais é a repetição em 6 meses.',
    commentary: 'ASC-US em mulheres >= 30 anos exige repetição semestral. Se houver dois resultados consecutivos de ASC-US ou pior, encaminha-se para colposcopia.',
    reference: 'Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero, INCA 2016.',
    tags: ['Ginecologia Geral', 'Rastreamento']
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
    explanation: 'O nível de progesterona (450 ng/dL) é característico da fase lútea, o que comprova a ocorrência de ovulação.',
    commentary: 'Os padrões hormonais (especialmente a progesterona elevada) referem-se à fase lútea, indicando que a ovulação ocorreu.',
    reference: 'Tratado de Ginecologia FEBRASGO, 2019.',
    tags: ['Endocrinologia']
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
    explanation: 'Adolescentes têm direito à privacidade, autonomia e sigilo na escolha de métodos contraceptivos.',
    commentary: 'A adolescente tem direito à privacidade. DIUs (LARCs) são ótimas opções por não dependerem da adesão diária da usuária.',
    reference: 'Manual SOGESP de Assistência Ginecológica a Adolescentes, 2021.',
    tags: ['Ginecologia Infanto-Puberal', 'Ética']
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
    tags: ['Infertilidade']
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
    explanation: 'Lesões BI-RADS 3 (provavelmente benignas) têm recomendação de controle de imagem em 6 meses.',
    commentary: 'BI-RADS 3 infere baixa probabilidade de malignidade. O controle semestral é o padrão para observar estabilidade.',
    reference: 'Sistema BI-RADS, ACR.',
    tags: ['Mastologia']
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
    tags: ['Ginecologia Geral']
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
    explanation: 'Para pacientes com útero, a terapia de reposição hormonal deve ser combinada (E+P) para proteção endometrial.',
    commentary: 'Miomas pequenos e BI-RADS 2 não contraindicam TH. A associação de progesterona é obrigatória se o útero estiver presente.',
    reference: 'Consenso Brasileiro de Terapêutica Hormonal da Menopausa, 2018.',
    tags: ['Climatério', 'Terapia Hormonal']
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
    explanation: 'O tratamento da mastite envolve antibióticos e manutenção do esvaziamento mamário (amamentação continuada).',
    commentary: 'Não se deve suspender a amamentação. A drenagem só é indicada se houver abscesso formado.',
    reference: 'Zugaib Obstetrícia, 2020.',
    tags: ['Puerpério', 'Mastologia']
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
    tags: ['Uroginecologia', 'Cirurgia']
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
    explanation: 'A presença de flutuação indica abscesso mamário, que exige drenagem cirúrgica associada a antibióticos.',
    commentary: 'Abscessos lactacionais devem ser drenados. A amamentação deve ser mantida na mama contralateral e, se possível, na afetada após melhora.',
    reference: 'Zugaib Obstetrícia, 2020.',
    tags: ['Puerpério', 'Mastologia']
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
    explanation: 'Hemoglobina >= 11 g/dL na gestação é considerada normal; a queda leve deve-se à hemodiluição fisiológica.',
    commentary: 'Hb 11,5 é normal na gestação. A suplementação profilática de ferro deve ser mantida, e a dieta orientada.',
    reference: 'MS - Atenção ao Pré-Natal de Baixo Risco.',
    tags: ['Obstetrícia', 'Nutrição']
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
    explanation: 'Jejum >= 92 mg/dL em gestante fecha diagnóstico de DMG.',
    commentary: 'Um único valor alterado no TOTG (jejum >= 92, 1h >= 180, 2h >= 153) é suficiente para o diagnóstico de DMG.',
    reference: 'Consenso Brasileiro DMG, 2017.',
    tags: ['Obstetrícia', 'Diabetes']
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
    explanation: 'Creatinina sérica > 1,1 mg/dL é um critério de gravidade na pré-eclâmpsia.',
    commentary: 'Insuficiência renal (Cr > 1.1) é sinal de gravidade. Edema e RCF não são critérios diagnósticos de gravidade isoladamente pela classificação atual.',
    reference: 'Tratado de Obstetrícia FEBRASGO.',
    tags: ['Obstetrícia', 'Hipertensão']
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
    tags: ['Obstetrícia', 'Hipertensão']
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
    tags: ['Obstetrícia', 'Fisiologia']
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
    explanation: 'O tratamento da sífilis na gestação deve ser imediato após teste rápido positivo para evitar transmissão vertical.',
    commentary: 'Não se deve atrasar o tratamento aguardando confirmação em gestantes. O parceiro deve ser tratado simultaneamente.',
    reference: 'Ministério da Saúde - Protocolo Transmissão Vertical 2021.',
    tags: ['Obstetrícia', 'IST']
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
    explanation: 'Hepatite B, dTpa, Influenza e COVID-19 são as vacinas recomendadas de rotina no Calendário da Gestante.',
    commentary: 'Vacinas de vírus vivos (como SCR - rubéola, sarampo, caxumba) são contraindicadas na gestação.',
    reference: 'Calendário Nacional de Vacinação - MS.',
    tags: ['Obstetrícia', 'Imunização']
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
    explanation: 'Perdas fetais recorrentes no segundo trimestre, sem dor/contrações prévias, sugerem insuficiência istmo-cervical.',
    commentary: 'A história clínica de partos prematuros exclusivos rápidos e indolores é patognomônica de IIC.',
    reference: 'Zugaib Obstetrícia, 2020.',
    tags: ['Obstetrícia']
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
    tags: ['Obstetrícia']
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
    tags: ['Ginecologia Geral', 'Ética']
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
    tags: ['Ginecologia Geral', 'DIP'],
    image: '/images/tp2025-82.PNG'
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
    tags: ['Endocrinologia Feminina', 'SOP']
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
    tags: ['Cervicite', 'Oncologia']
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
    tags: ['Ginecologia Geral', 'Infectologia']
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
    tags: ['Ginecologia Geral', 'Dor Pélvica']
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
    tags: ['Mastologia', 'Oncologia']
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
    tags: ['Infectologia', 'Leucorreias']
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
    tags: ['Planejamento Familiar', 'Contracepção']
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
    tags: ['Diferenciação Sexual', 'Amenorreia']
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
    tags: ['Obstetrícia', 'Endocrinologia na Gestação']
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
    tags: ['Obstetrícia', 'Hipertensão na Gestação']
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
    tags: ['Obstetrícia', 'Partograma'],
    image: '/images/tp2025-93.PNG'
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
    tags: ['Obstetrícia', 'Infectologia na Gestação']
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
    tags: ['Obstetrícia', 'Sangramento 1º Trimestre']
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
    tags: ['Obstetrícia', 'Emergência']
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
    tags: ['Obstetrícia', 'Emergência']
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
    tags: ['Obstetrícia', 'Doença Trofoblástica'],
    image: '/images/tp2025-98.PNG'
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
    tags: ['Obstetrícia', 'Sangramento 1º Trimestre']
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
    tags: ['Obstetrícia', 'Imunização na Gestação']
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
    tags: ['Contracepção', 'Enxaqueca com Aura', 'Planejamento Familiar']
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
    tags: ['Obstetrícia', 'Hemorragia Pós-Parto', 'Emergência']
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
    tags: ['Obstetrícia', 'Cardiotocografia', 'Indução do Trabalho de Parto']
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
    tags: ['Obstetrícia', 'Diabetes Gestacional', 'Pré-natal']
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
    tags: ['Obstetrícia', 'Gravidez Ectópica', 'Emergência']
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
    tags: ['Ginecologia Geral', 'Endometriose', 'Infertilidade']
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
    tags: ['Obstetrícia', 'Incompetência Istmocervical', 'Abortamento Tardio']
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
    tags: ['Obstetrícia', 'Descolamento de Placenta', 'Urgência']
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
    tags: ['Ginecologia Geral', 'Tricomoníase', 'Infecções Vaginais']
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
    tags: ['Obstetrícia', 'HIV na Gestação', 'Transmissão Vertical']
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
    tags: ['Obstetrícia', 'Inibição do Parto', 'Prematuridade']
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
    tags: ['Obstetrícia', 'Ruptura de Membranas', 'Prematuridade']
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
    tags: ['Mastologia', 'Rastreamento', 'Câncer de Mama']
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
    tags: ['Obstetrícia', 'Pré-eclâmpsia', 'Síndrome HELLP']
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
    tags: ['Amenorreia Primária', 'Disgenesia Gonadal', 'Ginecologia Infanto-Puberal']
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
    tags: ['Obstetrícia', 'Aborto Legal', 'Violência Sexual']
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
    tags: ['Patologia Cervical', 'Colposcopia', 'Oncologia']
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
    tags: ['Climatério', 'Terapia Hormonal', 'Ginecologia Geral']
  },
  {
    id: 'tp2021-99',
    module: 'Ginecologia e Obstetrícia',
    image: '/images/tp2021-99.PNG',
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
    tags: ['Uroginecologia', 'Distopia Genital', 'Prolapso Uterino']
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
    tags: ['Ginecologia Geral', 'Cisto de Ovário', 'Mioma Uterino', 'Conduta Expectante']
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
    explanation: 'A testosterona não é um método contraceptivo confiável. Homens trans com útero e ovários mantêm potencial reprodutivo e necessitam de orientação sobre métodos contraceptivos adequados e sobre o planejamento de gestações futuras na Atenção Primária.',
    commentary: 'A alternativa está correta porque respeita os direitos reprodutivos e a autonomia do paciente, princípios fundamentais da bioética. Homens trans que possuem útero e ovários podem engravidar, e a testosterona não é método contraceptivo. Assim, cabe ao médico oferecer acolhimento, orientação sobre métodos contraceptivos e informações sobre fertilidade, garantindo atendimento ético, sem discriminação e alinhado às diretrizes do SUS. Sobre os distratores: (B) A testosterona pode bloquear o eixo e impedir a ovulação, mas o processo é dose e tempo dependente por isso não é método contraceptivo confiável. (C) Negar aconselhamento reprodutivo com base na identidade de gênero fere princípios éticos, direitos reprodutivos e o princípio da equidade no SUS. (D) A Atenção Primária à Saúde tem competência para realizar aconselhamento em planejamento reprodutivo.',
    reference: 'Ministério da Saúde. Atenção integral à saúde da população LGBT no SUS. Brasília: Ministério da Saúde, 2013. Lei nº 9.263 de 1996. Dispõe sobre o planejamento familiar no Brasil.',
    tags: ['Bioética', 'Planejamento Reprodutivo', 'Saúde LGBT']
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
    explanation: 'A Doença Inflamatória Pélvica (DIP) é caracterizada pela ascensão de patógenos do trato genital inferior (colo/vagina) para o trato genital superior (endométrio, trompas, peritônio pélvico), gerando uma resposta inflamatória que lesiona o epitélio tubário.',
    commentary: 'A doença inflamatória pélvica ocorre principalmente por infecção ascendente do trato genital inferior. Microrganismos associados a infecções sexualmente transmissíveis, como Chlamydia trachomatis e Neisseria gonorrhoeae, podem atravessar o canal cervical e alcançar o endométrio e as trompas. A resposta inflamatória local provoca infiltração de neutrófilos, edema e destruição do epitélio tubário, levando a salpingite e podendo evoluir para aderências, abscesso tubo-ovariano e infertilidade. Sobre os distratores: (A) A translocação bacteriana intestinal pode ocorrer em quadros intra-abdominais específicos, mas não representa o mecanismo típico de desenvolvimento da doença inflamatória pélvica. (B) A disseminação hematogênica não corresponde ao mecanismo fisiopatológico habitual da DIP. (D) A DIP não é causada por processo autoimune primário, mas sim por resposta imunológica à infecção bacteriana do trato genital superior.',
    reference: 'FEBRASGO. Manual de Orientação: Doença Inflamatória Pélvica. Federação Brasileira das Associações de Ginecologia e Obstetrícia, 2023. BEREK, J. S. Berek & Novak’s Gynecology. 16ª ed. Philadelphia: Wolters Kluwer, 2020.',
    tags: ['DIP', 'Fisiopatologia', 'Infecções Sexualmente Transmissíveis']
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
    explanation: 'O DIU de cobre é um método contraceptivo reversível de longa duração (LARC) altamente eficaz que não depende da adesão diária e é seguro para pacientes com histórico de eventos tromboembólicos, pois não contém hormônios.',
    commentary: 'O DIU de cobre é um método altamente eficaz, reversível, de longa duração e adequado para início na UBS, alinhado à promoção da saúde e à prevenção de gravidez não planejada. Além disso, não depende de adesão diária, o que é especialmente relevante para pacientes com dificuldade de uso contínuo de métodos orais. Adicionalmente, por ser isento de hormônios, não apresenta risco de eventos trombóticos. Sobre os distratores: (A, D) Métodos combinados contêm estrogênio, sendo contraindicados em pacientes com histórico suspeito ou confirmado de trombose venosa profunda (Categoria 4 da OMS). (C) Embora seguros, os métodos de barreira apresentam menor eficácia clínica real e dependem de uso correto em cada relação, não preenchendo os requisitos de alta eficácia solicitados pela paciente.',
    reference: 'World Health Organization. Medical eligibility criteria for contraceptive use. 6th ed. Geneva: WHO; 2024.',
    tags: ['Contracepção', 'DIU de Cobre', 'Critérios de Elegibilidade']
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
    explanation: 'A ultrassonografia pélvica transvaginal é o exame de imagem inicial de escolha para avaliação de queixas de sangramento uterino anormal e massa pélvica/útero aumentado por miomatose uterina devido a sua ampla disponibilidade, baixo custo e alta acurácia.',
    commentary: 'A ultrassonografia pélvica, especialmente pela via transvaginal, é o exame inicial de escolha na investigação de leiomioma uterino, pois é amplamente disponível, não invasivo e apresenta boa acurácia para avaliar número, tamanho e localização dos miomas. Sobre os distratores: (A) A ressonância magnética pélvica é excelente para mapeamento de miomas em úteros muito volumosos ou para planejamento cirúrgico complexo (miomectomias múltiplas), mas não constitui abordagem inicial. (B) A histeroscopia é padrão para avaliação endometrial e de miomas submucosos (cavidade uterina), mas não avalia miomas intramurais ou subserosos nem o volume uterino global como exame inicial. (C) A tomografia não tem boa resolução espacial para tecidos moles da pelve ginecológica e não é usada de rotina nesta indicação.',
    reference: 'Tratado de Ginecologia da FEBRASGO. Cesar Eduardo Fernandes, Marcos Felipe Silva de Sá. 1ª ed. Rio de Janeiro: Elsevier, 2019.',
    tags: ['Miomatose Uterina', 'Ultrassonografia', 'Diagnóstico']
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
    tags: ['Hiperprolactinemia', 'Amenorreia', 'Galactorreia']
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
    tags: ['Amenorreia', 'Investigação Clínica', 'Ginecologia Endócrina']
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
    tags: ['Mastologia', 'Ultrassonografia', 'Câncer de Mama']
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
    tags: ['Condiloma Acuminado', 'HPV', 'DST']
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
    tags: ['SOP', 'Fisiopatologia', 'Endocrinologia Ginecológica']
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
    tags: ['Amenorreia Hipotalâmica', 'Fisiopatologia', 'Transtornos Alimentares']
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
    tags: ['Gestação de Alto Risco', 'Lúpus', 'Autoimunidade']
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
    tags: ['Pré-eclâmpsia', 'Urgência e Emergência', 'Hipertensão na Gestação']
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
    tags: ['Obstetrícia', 'Descolamento Prematuro de Placenta', 'Coagulopatia de Consumo']
  },
  {
    id: 'tp2026-94',
    module: 'Ginecologia e Obstetrícia',
    image: '/images/tp2026-94.PNG',
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
    tags: ['Trabalho de Parto', 'Partograma', 'Cesariana']
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
    tags: ['Ruptura Prematura de Membranas', 'Fisiopatologia', 'Prematuridade']
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
    tags: ['Hemorragia Pós-Parto', 'Atonia Uterina', 'Obstetrícia']
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
    tags: ['Ética Médica', 'Bioética', 'Autonomia', 'Direitos do Paciente']
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
    tags: ['HIV e Gestação', 'Transmissão Vertical', 'Cesariana Eletiva']
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
    tags: ['Pré-natal de Baixo Risco', 'Atenção Primária', 'Rotina de Rastreamento']
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
    tags: ['SAF', 'Bioética', 'Ética Médica', 'Abortamento de Repetição']
  }
];

