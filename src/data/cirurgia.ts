import { Question } from '../types';

export const CIRURGIA_QUESTIONS: Question[] = [
  {
    id: 'tp2024-61',
    module: 'Cirurgia',
    text: 'Maria, de 30 anos, é uma mulher saudável que realizou uma cirurgia cesariana há 6 meses. A recuperação inicial foi boa. Retorna relatando que a cicatriz está aumentando de tamanho, está elevada, rígida e com coloração mais escura. Ela também menciona que a área está frequentemente coçando e dolorida ao toque. Qual é o diagnóstico mais provável?',
    options: [
      '(A) Dermatofibroma',
      '(B) Tipo de cicatrização hipertrófica',
      '(C) Infecção de ferida operatória',
      '(D) Tipo de cicatrização queloide'
    ],
    correctAnswer: 3,
    explanation: 'O queloide ultrapassa os limites da ferida original, ao contrário da cicatriz hipertrófica.',
    commentary: 'A cicatrização queloide ocorre quando o tecido cicatricial cresce além dos limites da ferida original, resultando em uma área elevada, rígida e frequentemente mais escura. Este tipo de cicatriz pode causar sintomas como prurido e dor, como descrito no quadro clínico de Maria. Diferente da cicatriz hipertrófica, que também é elevada, mas se mantém dentro dos limites da ferida original, a cicatriz queloide se estende para além desses limites.',
    reference: 'Sabiston - Tratado de Cirurgia - Townsend, Courtney; Beauchamp, Daniel - 2 Volumes - 18ª Ed. Cirurgia Vascular: Doenças Vasculares Periféricas, 4ª edição, volume 01 e 02 Maffei, Lastória, Yoshida, Rollo, Giannini, Moura.',
    tags: ['Cirurgia Geral', 'Cicatrização']
  },
  {
    id: 'tp2024-62',
    module: 'Cirurgia',
    text: 'Em relação aos cuidados pré-operatórios, além da avaliação do risco cirúrgico pelo ASA, avaliação nutricional, avaliação funcional (DASI), por vezes há a necessidade de exames complementares. Podemos afirmar:',
    options: [
      '(A) O ECG é indicado para pacientes maiores de 35 anos, mesmo em cirurgia de baixo risco.',
      '(B) São exames minimamente requeridos no pré-operatório: Hemograma, Na, K, Glicemia, Coagulograma, mesmo em pacientes saudáveis.',
      '(C) Exames laboratoriais pré-operatórios de rotina não demonstram melhorar os resultados dos pacientes saudáveis menores de 45 anos submetidos a cirurgia de baixo risco.',
      '(D) Rx de tórax deve ser solicitado acima dos 35 anos, mesmo que a cirurgia seja de baixo risco.'
    ],
    correctAnswer: 2,
    explanation: 'Não há necessidade de exames pré-operatórios de rotina em pacientes saudáveis menores de 45 anos submetidos a cirurgias de baixo risco.',
    commentary: 'Segundo estudos, não há necessidade de exames préoperatórios de rotina em pacientes saudáveis menores de 40 anos de idade, submetidos a cirurgias de baixo risco.',
    reference: 'Associação Americana de Anestesiologia. Questionário préanestésico. Disponível em: [link](https://www.aana.com/patients/pre-anesthesiaquestionnaire) (Acessado em 31 de janeiro de 2022). Utilidade do eletrocardiograma de rotina antes da cirurgia e na internação hospitalar geral. Revisão crítica e novas orientações. UA, Goldberger AL, O\'Konski M. Testes pré-operatórios (atualização): Testes pré-operatórios de rotina para cirurgias eletivas, National Guideline Center (Reino Unido). (Ed), National Institute for Health and Care Excellence (NICE), Londres 2016. Colégio Brasileiro de Cirurgiões – Programa de autoavaliação em Cirurgia – Pré-operatórios. TCBC Guilherme Pinto Bravo Neto; TCBC Manuel Domingos da Cruz Gonçalves',
    tags: ['Cirurgia Geral', 'Pré-operatório']
  },
  {
    id: 'tp2024-63',
    module: 'Cirurgia',
    text: 'Homem de 60 anos, metalúrgico, DPOC, diabético tipo 2, refere dor e protusão na região inguinal direita há 3 meses. Ao exame físico, é evidenciada uma hérnia inguinal à direita e aumento volumétrico da próstata. Assinale a afirmativa correta:',
    options: [
      '(A) A fraqueza do triângulo de Hesselbach, esforço físico e DPOC são as causas da formação da hérnia.',
      '(B) A hiperplasia prostática é responsável por 50% das hérnias inguinais no homem.',
      '(C) Trata-se de uma hérnia que está se exteriorizando através do anel inguinal profundo (interno).',
      '(D) Como se trata de uma hérnia direta, congênita, o tratamento é a herniorrafia inguinal.'
    ],
    correctAnswer: 0,
    explanation: 'Hérnias diretas ocorrem por fraqueza da parede posterior (Triângulo de Hesselbach), associadas a fatores que aumentam a pressão intra-abdominal.',
    commentary: 'Neste caso, o esforço físico criando uma pressão maior no triângulo de Hesselbach, associado à perfusão diminuída em razão da DPOC, são os principais fatores para a formação da hérnia, que, no caso, é uma hérnia direta. A hiperplasia prostática também é um fator importante, mas não representa isoladamente importância tão significativa. A hérnia em questão é direta, as indiretas são as que se exteriorizam pelo anel inguinal. O tratamento padrão-ouro para os adultos com hérnias inguinais é a hernioplastia inguinal.',
    reference: 'Hérnias de Parede Abdominal – Diagnóstico e Tratamento, 2ª Edição 2009. Juan Carlos M. Gonzáles, Capítulo 13.',
    tags: ['Cirurgia Geral', 'Hérnias']
  },
  {
    id: 'tp2024-64',
    module: 'Cirurgia',
    text: 'Homem de 45 anos com história de retocolite ulcerativa em tratamento com Infliximabe é atendido toxemiado, com dor e distensão abdominal. A radiografia simples mostrou grande dilatação do cólon transverso (12cm). Qual o diagnóstico e conduta na urgência?',
    options: [
      '(A) Megacólon tóxico e proctocolectomia total com bolsa ileal.',
      '(B) Megacólon idiopático e tratamento clínico.',
      '(C) Megacólon chagásico e colectomia total com ileostomia terminal.',
      '(D) Megacólon tóxico e colectomia total com ileostomia terminal.'
    ],
    correctAnswer: 3,
    explanation: 'Megacólon tóxico com falha ao tratamento clínico exige colectomia subtotal com ileostomia.',
    commentary: 'Enquanto a maioria dos pacientes que desenvolvem megacólon tóxico relacionado à DII apresenta colite ulcerativa, alguns apresentam colite de Crohn ou colite indeterminada. Como essas três entidades podem não ser facilmente distinguíveis durante um surto agudo, como o megacólon tóxico, sugere-se tratar todos os megacólons tóxicos relacionados à DII com a mesma abordagem. Pacientes com megacólon tóxico relacionado à DII que não respondem aos glicocorticoides intravenosos dentro de três dias devem ser considerados para um teste de infliximabe ou ciclosporina como terapia de segunda linha. Pacientes que não respondem a um dos agentes de segunda linha (infliximabe ou ciclosporina) após mais três dias necessitam de cirurgia. Pacientes que desenvolvem megacólon tóxico enquanto tomam infliximabe ou ciclosporina devem ser submetidos à cirurgia sem demora, de colectomia subtotal com ileostomia terminal em vez de uma proctocolectomia de estágio único.',
    reference: 'Etiologia e Tratamento Cirúrgico do Megacólon Tóxico. Ausch C, Madoff RD, Gnant M, Rosen HR, Garcia-Aguilar J, Hölbling N, Herbst F, Buxhofer V, Holzer B, Rothenberger DA, Schiessel R; Doença Colorretal. 2006;8(3):195.',
    tags: ['Coloproctologia', 'Emergência']
  },
  {
    id: 'tp2024-65',
    module: 'Cirurgia',
    text: 'Paciente de 45 anos chega ao PS com dor abdominal intensa no QSD, febre, icterícia e calafrios. US revela múltiplos cálculos na via biliar comum. Qual é a condição mais provável?',
    options: [
      '(A) Colecistite aguda',
      '(B) Colangite aguda',
      '(C) Pancreatite aguda',
      '(D) Hepatite aguda'
    ],
    correctAnswer: 1,
    explanation: 'A tríade de Charcot (dor, febre e icterícia) é clássica de colangite aguda.',
    commentary: 'Os sintomas apresentados pelo paciente, incluindo dor abdominal no quadrante superior direito, febre, icterícia, calafrios e náuseas/vômitos, sugerem fortemente colangite aguda. A presença de múltiplos cálculos na via biliar comum, conforme observado na ultrassonografia abdominal, é consistente com o diagnóstico de colangite aguda por coledocolitíase. Esta é uma condição de emergência que requer tratamento imediato, incluindo antibioticoterapia e drenagem biliar, seguida por colecistectomia e remoção dos cálculos biliares.',
    reference: 'Sabiston - Tratado de Cirurgia - Townsend, Courtney; Beauchamp, Daniel - 2 Volumes - 18ª Ed. Cirurgia Vascular: Doenças Vasculares Periféricas, 4ª edição, volume 01 e 02 Maffei, Lastória, Yoshida, Rollo, Giannini, Moura.',
    tags: ['Cirurgia Biliar', 'Gastroenterologia']
  },
  {
    id: 'tp2024-66',
    module: 'Cirurgia',
    text: 'Mulher de 70 anos, 80kg, hipertensa controlada. Refere sangramento vivo nas fezes ("tingindo o vaso"). Exame físico: estável, descorada +/4, toque retal sem massas, sangue em dedo de luva. Qual a melhor conduta e principal suspeita?',
    options: [
      '(A) Anuscopia – Fissura anal',
      '(B) Tomografia de abdome – Doença diverticular dos cólons',
      '(C) Retossigmoidoscopia – Doença hemorroidária',
      '(D) Colonoscopia – Doença diverticular dos cólons'
    ],
    correctAnswer: 3,
    explanation: 'A colonoscopia é o exame inicial para HDB em pacientes estáveis. A DDC é a principal causa nesta faixa etária.',
    commentary: 'Na hemorragia digestiva baixa em paciente estável, deve-se seguir o algoritmo da situação. Em questão, HAD paciente estável = Colonoscopia. A tomografia não trará resposta adequada, visto que se trata de sangramento e não infecção. A doença hemorroidária tem como seu principal sintoma o sangramento, porém na grande maioria das vezes repetitivos e de pequena monta.',
    reference: 'Management of the Adult Patient with Acute Lower Gastrointestinal Bleeding. American College of Gastroenterology. Practice Parameters Committee. Zuccaro G Jr; Am J Gastroenterol. 1998;93(8):1202. Department of Gastroenterology, Cleveland Clinic Foundation, Ohio 44195, USA. PMID 9707037',
    tags: ['Coloproctologia', 'HDB']
  },
  {
    id: 'tp2024-67',
    module: 'Cirurgia',
    text: 'Neonato masculino com malformação de parede abdominal extensa (vísceras expostas). Qual a conduta indicada?',
    image: '/images/tp2024-67.PNG',
    options: [
      '(A) Solução tópica de nitrato de prata.',
      '(B) Plastia umbilical com tela imediata.',
      '(C) Instalação de um silo para redução visceral progressiva.',
      '(D) Transplante multivisceral.'
    ],
    correctAnswer: 2,
    explanation: 'Defeitos extensos de parede abdominal (como gastrosquise/onfalocele gigante) exigem fechamento estagiado com silo.',
    commentary: 'Trata-se de um defeito extenso demais para fazer a correção em um único tempo cirúrgico. Nessas situações, o mais indicado é a instalação de um silo, evitando assim a ocorrência de síndrome compartimental.',
    reference: 'Handbook of Pediatric Surgery, Second Edition – Springer',
    tags: ['Cirurgia Pediátrica']
  },
  {
    id: 'tp2024-68',
    module: 'Cirurgia',
    text: 'Paciente de 75 anos, diabética, com ferida dolorosa no dorso do pé direito. Relata claudicação para 80m. Ausência de pulsos podálicos bilateralmente. Qual a correta interpretação?',
    options: [
      '(A) Insuficiência arterial crônica devido à claudicação intermitente.',
      '(B) Doença obstrutiva arterial periférica; amputação primária devido à ausência de Doppler.',
      '(C) Isquemia crítica; indicada investigação com US Doppler e/ou angiotomografia.',
      '(D) Claudicação neurológica, pois só ocorre em subidas.'
    ],
    correctAnswer: 2,
    explanation: 'A presença de serviço trófico define isquemia crítica, exigindo investigação para revascularização.',
    commentary: 'Paciente com quadro de insuficiência arterial crônica devido ao quadro de claudicação para aclives, evoluindo para isquemia crítica, que é definida como lesão trófica e/ou dor de repouso, sendo o critério para indicação de tratamento cirúrgico para revascularização. Isso aprofunda o diagnóstico com ultrassom Doppler e/ou angiotomografia. A claudicação intermitente é caracterizada por dor muscular durante a caminhada, geralmente com distâncias parecidas, com necessidade de repouso para melhora. A presença de lesão trófica é critério de indicação de tratamento cirúrgico, com tentativa de revascularização do membro, mesmo com ultrassom Doppler de ondas contínuas sem fluxo arterial, pois a avaliação de leito distal se dá através de algum exame de imagem, como ultrassom Doppler pulsado, angiotomografia ou angiografia. A amputação primária só é indicada para os casos de ausência de leito distal para revascularização. A claudicação neurológica é dor em membro inferior durante a caminhada com distância variável, associada com sintomas neurológicos, podendo apresentar posição antálgica para melhora. A ausência de fluxo arterial ao Doppler de ondas contínuas impossibilita o cálculo do índice tornozelo-braço, mas não é um critério para a indicação de tratamento cirúrgico, e sim para diagnóstico e acompanhamento de doença arterial crônica.',
    reference: 'BRITO, Carlos José de. Cirurgia Vascular: Cirurgia Endovascular, Angiologia. In: Cirurgia Vascular: Cirurgia Endovascular, Angiologia. 2019.',
    tags: ['Cirurgia Vascular']
  },
  {
    id: 'tp2024-69',
    module: 'Cirurgia',
    text: 'Homem, 54 anos, tabagista, perda ponderal e dispneia. RX com derrame pleural à direita. Qual procedimento e resultado esperado para neoplasia?',
    image: '/images/tp2024-69.PNG',
    options: [
      '(A) Paracentese; Critérios de Light; exsudato linfocítico.',
      '(B) Drenagem tubular; Critérios de Wells; exsudato linfocítico.',
      '(C) Toracocentese; Critérios de Wells; transudato neutrofílico.',
      '(D) Toracocentese; Critério de Light; exsudato linfocítico.'
    ],
    correctAnswer: 3,
    explanation: 'Derrames pleurais neoplásicos são exsudatos (Light) com predomínio linfocítico.',
    commentary: 'O critério diagnóstico de Light é composto por 5 critérios. Tem por objetivo diferenciar derrame pleural transudativo de exsudativo. Define-se derrame pleural exsudativo se pelo menos um dos seguintes for verdadeiro: ⦁ Relação Proteína do líquido pleural / Proteína sérica > 0,5 ⦁ Relação DHL líquido pleural / DHL sérico > 0,6 ⦁ DHL do líquido pleural > 2/3 do limite superior da normalidade de DHL sérico (limite normal 246 U/L) Os Writérios de Wells leva em consideração os principais fatores de risco para o desenvolvimento Tromboembolismo pulmonar.',
    reference: 'J, D., Meyerson, S. L., A, P. (Ed.), & JD, C. (Ed.) (2008). Pearson\'s Thoracic and Esophageal Surgery 3rd edition. Churchill Livingstone. SAAD Jr, Roberto ET AL. Cirurgia Torácica Geral. 2.ed. São Paulo: Atheneu, 2010. Medicina intensiva: abordagem prática. Universidade de São Paulo / Luciano César Pontes de Azevedo et al. 2. ed. Barueri, SP: Manole, 2015.',
    tags: ['Cirurgia Torácica', 'Oncologia']
  },
  {
    id: 'tp2024-70',
    module: 'Cirurgia',
    text: 'João, 7 anos, queda de bicicleta com fratura diafisária de rádio e ulna. Desvio angular pequeno (<10-15 graus). Pulsos e nervos OK. Qual a conduta?',
    options: [
      '(A) Imobilização com tipoia simples.',
      '(B) Redução aberta e placas.',
      '(C) Redução fechada e imobilização gessada axilopalmar.',
      '(D) Redução fechada e haste intramedular.'
    ],
    correctAnswer: 2,
    explanation: 'Em crianças < 10 anos, o tratamento conservador com redução fechada e gesso tem excelentes resultados.',
    commentary: 'O tratamento conservador é o tratamento padrão para fraturas abaixo de 10 anos, com resultados excelentes. Os desvios angulares aceitáveis variam de acordo com a idade da criança e o nível da fratura. Em crianças até 8 anos de idade são considerados aceitáveis desvios inferiores a 15 graus de angulação na incidência AP e 20 graus em perfil.',
    reference: 'Beaty JH, Kasser JR. In Rockwood and Wilkins (ed). Fractures in Children. Baltimore: Lippincott Williams and Wilkins, 2001. Manual de trauma ortopédico / SBOT - Sociedade Brasileira de Ortopedia e Traumatologia; coordenadores, Isabel Pozzi... [et al.] - São Paulo: SBOT - Sociedade Brasileira de Ortopedia e Traumatologia, 2011.',
    tags: ['Ortopedia', 'Cirurgia Pediátrica']
  },
  {
    id: 'tp2024-71',
    module: 'Cirurgia',
    text: 'Homem, 70 anos, HAS. Evolui com Glasgow 7, midríase fixa à direita, Bradipneia (8), Bradicardia (48) e PA 240/120. Qual o diagnóstico e conduta inicial?',
    options: [
      '(A) Síndrome de hipertensão intracraniana e intubação orotraqueal.',
      '(B) AVC isquêmico e TC de crânio.',
      '(C) Hematoma intracerebral e drenagem cirúrgica imediata.',
      '(D) Estado de mal não convulsivo e hidantalização.'
    ],
    correctAnswer: 0,
    explanation: 'A Tríade de Cushing (HI, Bradicardia, Bradipneia) indica iminência de herniação. IOT é prioritária.',
    commentary: 'Idoso abre o quadro com mal-estar e após 30 minutos o quadro muda drasticamente: Glasgow de 7, midríase fixa unilateral, além de bradipneia, bradicardia e hipertensão. Esses três últimos dados compõem a tríade de Cushing, achado que indica a presença de hipertensão intracraniana. Nesse momento, a prioridade é a intubação orotraqueal como medida emergencial.',
    reference: 'Tratado de Neurologia da Academia Brasileira de Neurologia, 2ª edição.',
    tags: ['Neurocirurgia', 'Emergência']
  },
  {
    id: 'tp2024-72',
    module: 'Cirurgia',
    text: 'Homem de 70kg, queimaduras de 2º e 3º graus (chama direta). Área: tórax frontal/abdome (18%), membro superior direito (9%), face anterior perna direita (9%) e área genital (1%). Extensão (SCQ) e volume em 24h?',
    options: [
      '(A) 37% de área queimada e 6320mL de soro glicosado.',
      '(B) 37% de área queimada e 5180mL de Ringer Lactato.',
      '(C) 27% de área queimada e 9450mL de Ringer Lactato.',
      '(D) 27% de área queimada e 4305mL de soro glicosado.'
    ],
    correctAnswer: 1,
    explanation: 'SCQ = 18 + 9 + 9 + 1 = 37%. Parkland (2ml/kg/%): 2 * 70 * 37 = 5180mL.',
    commentary: 'As queimaduras representam uma condição médica grave, exigindo uma abordagem cuidadosa e multidisciplinar. Além da avaliação inicial da extensão e profundidade das queimaduras, a reposição volêmica desempenha um papel crítico na gestão desses pacientes, especialmente nas queimaduras extensas que podem levar a um estado de choque hipovolêmico. O protocolo ATLS (Suporte Avançado de Vida no Trauma) fornece diretrizes valiosas para a abordagem inicial desses casos, enfatizando a priorização da via aérea, respiração e circulação. A reposição volêmica é parte integrante do manejo inicial, visando restaurar a perfusão tecidual adequada e prevenir complicações graves. Utiliza-se a regra de Parkland: 2x SCQ x Peso, com o resultado sendo o volume a ser infundido em 24 horas, de preferência Ringer Lactato, por diminuir o risco de acidose metabólica. A implementação adequada do protocolo ATLS pode melhorar significativamente os resultados clínicos em pacientes com queimaduras graves.',
    reference: 'American College of Surgeons. Advanced Trauma Life Support: Student Course Manual. 10th ed. Chicago, IL: American College of Surgeons; 2018. Schaefer TJ, Omar Nunez Lopez. Burn Resuscitation And Management [Internet]. Nih.gov. StatPearls Publishing; 2019. Galvagno SM, Nahmias JT, Young DA. Advanced Trauma Life Support® Update 2019. Anesthesiology Clinics. 2019 Mar;37(1):13–32. Hudspith J, Rayatt S. First aid and treatment of minor burns. BMJ. 2004 Jun 17;328(7454):1487–9.',
    tags: ['Queimados', 'Emergência']
  },
  {
    id: 'tp2024-73',
    module: 'Cirurgia',
    text: 'Homem, 56 anos, tabaco/etilismo. Disfagia, alteração da voz ("abafada"), lesão em epiglote estendendo-se à banda ventricular. Pregas vocais móveis. Linfonodo cervical móvel de 3cm. Qual a origem e voz?',
    options: [
      '(A) Glote / voz metálica',
      '(B) Supraglote / voz abafada',
      '(C) Transglótico / voz metálica',
      '(D) Glote / rouquidão'
    ],
    correctAnswer: 1,
    explanation: 'Tumores de epiglote (supraglote) têm voz abafada ("hot potato voice"), enquanto glóticos causam rouquidão.',
    commentary: 'Tumores malignos da região supraglótica apresentam-se com alteração da voz, desconforto faríngeo, disfagia e/ou linfonodo cervical. A voz geralmente é descrita como "abafada". A rouquidão é típica de tumores glóticos ou lesões mais avançadas, devido à fixação de prega vocal por invasão da aritenóide ou articulação cricoaritenoidea.',
    reference: 'Cirurgia de Cabeça e Pescoço - Fundamentos para a Graduação Médica. Lenine Garcia Brandão & Marilia D’Elboux Guimarães, Sarvier, 2011.',
    tags: ['Cirurgia de Cabeça e Pescoço', 'Oncologia']
  },
  {
    id: 'tp2024-74',
    module: 'Cirurgia',
    text: 'Soda cáustica no olho. Dor intensa, vermelhidão e baixa visão. Qual a conduta?',
    options: [
      '(A) Antibiótico tópico e endovenoso e chamar oftalmo.',
      '(B) Encaminhamento urgente cirúrgico.',
      '(C) Antibiótico tópico e retorno em 15 dias.',
      '(D) Lavagem intensa com soro fisiológico e encaminhamento ao oftalmologista.'
    ],
    correctAnswer: 3,
    explanation: 'Queimaduras químicas oculares são emergências que exigem lavagem copiosa imediata.',
    commentary: 'Trata-se de um quadro de queimadura química da córnea levando a grave desepitelização (ceratite). Nestes casos, a conduta correta é a lavagem intensa da córnea com soro fisiológico para retirar os resíduos da substância agressora, instilação tópica de antibioticotico e lubrificantes oculares e oclusão para estimular o processo de reepitelização.',
    reference: 'Oftalmologia Geral - Vaughan & Asbury, 17ª ed.',
    tags: ['Oftalmologia', 'Emergência']
  },
  {
    id: 'tp2024-75',
    module: 'Cirurgia',
    text: 'Gestante em cesariana após peridural apresenta queda na PA e náuseas ao ficar em decúbito dorsal. Quais os fatores responsáveis?',
    options: [
      '(A) Aumento dos volumes pulmonares.',
      '(B) Compressão aorto-cava e bloqueio simpático.',
      '(C) Aumento da capacidade residual funcional.',
      '(D) Compressão pulmonar pelo útero.'
    ],
    correctAnswer: 1,
    explanation: 'O bloqueio simpático da anestesia somado à compressão da veia cava pelo útero causa hipotensão.',
    commentary: 'A compressão aorto-cava em gestantes é uma realidade com início precoce, que promove redução do retorno venoso ao coração, causando hipotensão arterial e favorecendo que essas busquem o decúbito lateral. A anestesia regional (raqui ou peridural) promove bloqueio simpático com redução da pressão arterial. Durante a gestação, ocorre redução dos volumes residuais e de reserva expiratório e aumento do volume de ar corrente e de reserva inspiratória, assim como redução da capacidade residual funcional e aumento da capacidade inspiratória.',
    reference: 'Cavalcante FS. Alterações fisiológicas da gravidez em: Cangiani LM, Carmona MJC, Ferez D, Bastos CO, Duarte LTD, Cangiani LH, et al. Tratado de Anestesiologia, 9ª ed, Editora dos Editores, 2021; 2461-98. Bastos CO, Castro LFC. Anestesia para cesariana em: Cangiani LM, Carmona MJC, Ferez D, Bastos CO, Duarte LTD, Cangiani LH, et al. Tratado de Anestesiologia, 9ª ed, Editora dos Editores, 2021; 2537-64.',
    tags: ['Anestesiologia', 'Obstetrícia']
  },
  {
    id: 'tp2024-76',
    module: 'Cirurgia',
    text: 'Vítima de atropelamento, 70kg. Pálido, frio e confuso. FC 135, FR 32, PA 85x40. Qual o grau de choque?',
    options: [
      '(A) Esse paciente perdeu entre 1500-2000mL e apresenta choque grau III.',
      '(B) Choque grau II (perda de 20-30%).',
      '(C) Perda de mais de 2000mL sangues.',
      '(D) Débito urinário ainda normal.'
    ],
    correctAnswer: 0,
    explanation: 'Choque Grau III (perda 30-40%) caracteriza-se por hipotensão, taquicardia (>120) e alteração do sensório.',
    commentary: 'De acordo com a classificação do choque hipovolêmico abaixo, fica claro que se trata de um paciente em choque grau III.',
    reference: 'Advanced Trauma Life Support (ATLS), 9ª Ed 2014. MARTINS, H. S.; DAMASCENO, M. C. T.; AWADA, S. Pronto Socorro: Medicina de emergência; 3ª Ed. Nicholas H, Tyler JA. Hemorrhagic Shock. Treasure Island (FL): StatPearls [Internet]. 2022.',
    tags: ['Trauma', 'Choque']
  },
  {
    id: 'tp2024-77',
    module: 'Cirurgia',
    text: 'Trauma de moto, inconsciente, choque, distensão abdominal e FAST positivo. Próximo passo?',
    options: [
      '(A) Tomografia de abdome e pelve.',
      '(B) Estabilizar com fluidos e transfusão.',
      '(C) Laparotomia exploratória.',
      '(D) Lavado peritoneal.'
    ],
    correctAnswer: 2,
    explanation: 'Paciente instável com FAST positivo para líquido livre exige cirurgia imediata para controle de danos.',
    commentary: 'O paciente apresenta sinais de hemoperitônio traumático, uma condição que requer intervenção cirúrgica imediata. A laparotomia exploratória é o próximo passo mais apropriado no manejo deste paciente, pois permite uma avaliação direta da cavidade abdominal para identificar e controlar a fonte de sangramento, além de possibilitar a realização de procedimentos de controle de danos, se necessário. As outras opções (A, B e D) podem ser consideradas em situações específicas, mas não são apropriadas como próximo passo primário no manejo de um paciente com suspeita de hemoperitônio traumático.',
    reference: 'Sabiston - Tratado de Cirurgia - Townsend, Courtney; Beauchamp, Daniel - 2 Volumes - 18ª Ed. Cirurgia Vascular: Doenças Vasculares Periféricas, 4ª edição, volume 01 e 02 Maffei, Lastória, Yoshida, Rollo, Giannini, Moura.',
    tags: ['Trauma', 'Emergência']
  },
  {
    id: 'tp2024-78',
    module: 'Cirurgia',
    text: 'Disfagia progressiva (3 meses), perda ponderal > 20%, tabagista e etilista. Qual o principal diagnóstico?',
    options: [
      '(A) Adenocarcinoma do esôfago',
      '(B) Carcinoma espinocelular do esôfago',
      '(C) Megaesôfago chagásico',
      '(D) Esôfago de Barrett'
    ],
    correctAnswer: 1,
    explanation: 'O tabaco e álcool são os principais fatores de risco para o carcinoma espinocelular (CEC) de esôfago.',
    commentary: 'O álcool e o tabaco são fatores de risco significativos para câncer esofágico. A progressão rápida dos sintomas disfágicos, a perda de peso e os antecedentes de tabagismo e etilismo sugerem um carcinoma esofágico, especialmente carcinoma espinocelular, que é mais comumente associado a esses fatores.',
    reference: 'Engel LS, Chow WH, Vaughan TL, et al. Riscos atribuíveis à população de câncer de esôfago e gástrico. J Natl Cancer Inst. 2003;95(18):1404.',
    tags: ['Oncologia', 'Gastroenterologia']
  },
  {
    id: 'tp2024-79',
    module: 'Cirurgia',
    text: 'Sobre a classificação ASA de estado físico, assinale a correta:',
    options: [
      '(A) ASA 2 - Paciente sadio normal.',
      '(B) ASA 3 - Paciente com doença sistêmica leve.',
      '(C) ASA 4 - Paciente com doença sistêmica grave que é um constante risco para a vida.',
      '(D) ASA 5 - Morte cerebral declarada.'
    ],
    correctAnswer: 2,
    explanation: 'ASA 4 é um paciente com doença sistêmica que ameaça a vida constantemente.',
    commentary: 'A classificação ASA avalia o estado físico e o risco anestésicocirúrgico. A ASA 4 é para pacientes com doença sistêmica grave que representa um risco constante para a vida. ASA 1 é para pacientes saudáveis, ASA 2 para pacientes com doença sistêmica leve, ASA 3 para doença sistêmica grave, ASA 5 para moribundos e ASA 6 para pacientes com morte cerebral cuja morte está sendo realizada para doação de órgãos.',
    reference: 'Sociedade de Anestesiologia do Estado de São Paulo. Tratado de Anestesiologia. 7ª ed. São Paulo: SAESP; 2011.',
    tags: ['Anestesiologia']
  },
  {
    id: 'tp2024-80',
    module: 'Cirurgia',
    text: 'Politraumatizado grave (fraturas expostas, dor abdominal, lacerações). Qual o primeiro passo prioritário no ATLS?',
    options: [
      '(A) Avaliação primária com controle da via aérea.',
      '(B) Avaliação neurológica detalhada.',
      '(C) Fluidos IV rápidos.',
      '(D) Radiografia de tórax.'
    ],
    correctAnswer: 0,
    explanation: 'O manejo da via aérea (A) é a primeira prioridade no ABCDE do trauma.',
    commentary: 'Independentemente de outras lesões visíveis, a sequência ABCDE deve ser rigorosamente seguida, iniciando pela via aérea e proteção cervical.',
    reference: 'ATLS 10ª ed.',
    tags: ['Trauma', 'Emergência']
  },
  {
    id: 'tp2023-61',
    module: 'Cirurgia',
    text: 'Mulher, 30 anos, com história de retocolite ulcerativa há 3 meses, em terapia com infliximabe há 2 meses, dá entrada no pronto atendimento com disenteria intensa, distensão abdominal, febre de 38ºC, taquicardia (120 bpm), anemia leve, hipotensão, dor abdominal e descompressão brusca negativa. Podemos afirmar que:',
    options: [
      '(A) A tomografia computadorizada de abdome não acrescenta nada ao diagnóstico em relação ao RX de abdome.',
      '(B) Deverá ser submetida a cirurgia de colectomia subtotal com ileostomia terminal.',
      '(C) A colonoscopia é o exame de eleição para a situação descrita.',
      '(D) 50% dos pacientes nesta situação se beneficiará com tratamento clínico.'
    ],
    correctAnswer: 1,
    explanation: 'Paciente com colite grave em uso de infliximabe com provável megacólon tóxico tem indicação cirúrgica de colectomia subtotal.',
    commentary: 'A TC abdominal é mais confiável para avaliar a extensão e a gravidade da colite e a presença de dilatação colônica do que as radiografias abdominais, a TC pode ser capaz de distinguir megacólon tóxico, distensão de ar acima de 6 cm com padrão austral anormal, pseudopólipos nodulares espessamentos difusos da parede colônica, edema submucoso.\n\nApenas uma minoria de pacientes é elegível para uma colonoscopia, talvez uma retossigmoidoscopia seja mais indicada.\n\nCerca de 50% dos pacientes se beneficiarão com o tratamento clínico, porém não uma paciente medicada recentemente com infliximabe.',
    reference: 'Megacólon tóxico: papel da TC na avaliação e detecção de complicações. Imbriaco m, Balthazar ej clin imaging. 2001;25(5):349. Colonoscopy during an attack of severe ulcerative colitis is a safe procedure and of great value in clinical decision making. alemayehu g, järnerot g am j gastroenterol. 1991;86(2):187. Megacólon tóxico na colite ulcerativa e na colite de crohn. fazio vw Clin gastroenterol. 1980;9(2):389. Aetiology and surgical management of toxic megacolon. Ausch c, madoff rd, gnant m, rosen hr, garcia-aguilar j, hölbling n, herbst f, buxhofer v, holzer b, rothenberger da, schiessel r colorectal dis. 2006;8(3):195.',
    tags: ['Coloproctologia', 'Emergência']
  },
  {
    id: 'tp2023-62',
    module: 'Cirurgia',
    text: 'Paciente idoso e diabético foi submetido a laparotomias prévias e evoluiu com hérnia incisional. A aponeurose é de cicatrização lenta e necessita de fios, de preferência não absorvíveis, para manter as bordas aponeuróticas unidas até sua total cicatrização. Neste caso, optamos por fios de sutura não absorvíveis principalmente em doentes diabéticos, que têm maior dificuldade na cicatrização das feridas. O fio considerado ideal para o fechamento da aponeurose é:',
    options: [
      '(A) Ácido poliglicoico',
      '(B) Catgut',
      '(C) Poligalactina',
      '(D) Nylon'
    ],
    correctAnswer: 3,
    explanation: 'O Nylon é um fio monofilamentar não absorvível, ideal para síntese de aponeurose em pacientes com risco de má cicatrização (diabéticos).',
    commentary: 'O nylon é um fio sintético monofilamentar não absorvível ideal para suturas que exigem resistência permanente e pouca reação tecidual. Todos os outros citados são absorvíveis.',
    reference: 'Skandalakis, JE; Anatomia e técnica cirúrgica - manual prático, segunda edição, 2007 , editora Revinter',
    tags: ['Cirurgia Geral', 'Suturas']
  },
  {
    id: 'tp2023-63',
    module: 'Cirurgia',
    text: 'No trauma esplênico grau I, com estabilidade hemodinâmica e líquido na cavidade estimado em 500mL, que ocorreu 6 horas antes do atendimento, qual o tratamento recomendado?',
    options: [
      '(A) Tratamento não-operatório em leito intensivo.',
      '(B) Punção abdominal.',
      '(C) Laparotomia com esplenectomia.',
      '(D) Laparoscopia diagnóstica e esplenectomia, se necessário.'
    ],
    correctAnswer: 0,
    explanation: 'Trauma esplênico em paciente estável tem como padrão o tratamento conservador (não-operatório).',
    commentary: 'Como o paciente está estável hemodinamicamente e o trauma tendo sido há seis horas supõe-se que não há mais sangramento ativo e o tratamento pode ser conservador sem laparotomias e em observação rigorosa em uti',
    reference: 'Sabiston: textbook of surgery; 21 edition, 2022; editora Elsevier',
    tags: ['Trauma']
  },
  {
    id: 'tp2023-64',
    module: 'Cirurgia',
    text: 'Paciente de 45 anos, masculino, pedreiro, queixa-se de dor na região lombar há 5 dias, após esforço ao levantar peso. Ao exame físico, apresenta alteração de sensibilidade na face medial da perna e do pé, fraqueza para dorsofletir o pé e hiporreflexia patelar. A hipótese diagnóstica é hérnia discal da raiz de:',
    options: [
      '(A) L3',
      '(B) L4',
      '(C) L5',
      '(D) S1'
    ],
    correctAnswer: 1,
    explanation: 'A raiz L4 é responsável pelo reflexo patelar e pela sensibilidade na face medial da perna.',
    commentary: 'A raiz l4 é responsável pelo reflexo patelar, da inervação do músculo tibial anterior e a sensibilidade na face medial da perna e pé. A raiz l5 é responsável pelo reflexo do tibial posterior, inervação do músculo extensor longo do hálux e sensibilidade na face lateral da perna e dorso do pé. A raiz de s1 e responsável pelo reflexo aquileu, da musculatura do músculo fibular longo e curto e sensibilidade na face lateral do pé.',
    reference: 'Propedeutica ortopédica e traumatológica, Nelson mattioli leit, flávio faloppa- porto alegre artmed, 2013. Manual básico de ortopedia da sbot.2010 , coordenadores. Gerra m i p, fucks r. Cec sbot.',
    tags: ['Ortopedia', 'Neurocirurgia']
  },
  {
    id: 'tp2023-65',
    module: 'Cirurgia',
    text: 'Paciente de 60 anos vem ao ambulatório com queixas de dor epigástrica e emagrecimento de 20 quilos nos últimos dois meses. Ao exame físico apresenta massa abdominal palpável em epigástrio, indolor, desidratado e anêmico. Após receber hidratação e repor eletrólitos, foi submetido a endoscopia digestiva alta, que demonstrou tumor de estômago obstrutivo não permitindo a passagem do aparelho ao duodeno. Qual dos sintomas e/ou sinais é característico do câncer de estômago obstrutivo descrito?',
    options: [
      '(A) Vômitos precoces',
      '(B) Vômitos fecaloides',
      '(C) Distensão abdominal importante',
      '(D) Parada de eliminação de gases e fezes'
    ],
    correctAnswer: 0,
    explanation: 'Obstruções altas (gástricas) causam vômitos precoces, logo após a alimentação.',
    commentary: 'Como a obstrução é gástrica os sintomas são de vômitos precoces logo após a alimentação já que o alimento não passa para o intestino delgado',
    reference: 'Sabiston: textbook of surgery; 21 edition, 2022 ; editora Elsevier',
    tags: ['Gastroenterologia', 'Oncologia']
  },
  {
    id: 'tp2023-66',
    module: 'Cirurgia',
    text: 'Paciente de 52 anos procura unidade de pronto atendimento referindo dor abdominal difusa e constipação intestinal progressiva há 10 dias, parada de eliminação de gases e fezes há 2 dias, acompanhada de vômitos de odor fétido. Ao exame físico, encontra-se desidratado 3/4+, com dor à palpação superficial e profunda em todo o abdome, distensão abdominal, hipertimpanismo e com ruídos hidroaéreos aumentados. Frente ao caso descrito, qual o melhor exame a ser solicitado para confirmar o diagnóstico e favorecer uma tomada de decisão?',
    options: [
      '(A) Enema opaco',
      '(B) Raio X de abdome',
      '(C) Tomografia computadorizada de abdome e pelve',
      '(D) Videolaparoscopia'
    ],
    correctAnswer: 2,
    explanation: 'A TC com contraste é o padrão-ouro no abdome agudo obstrutivo para definir causa e nível da obstrução.',
    commentary: 'A Tomografia computadorizada com contraste é o método diagnóstico preferencial na suspeita de abdome agudo obstrutivo, com sensibilidade e especificidade superiores a 90%\n\nA Tomografia computadorizada desempenha um papel fundamental na triagem de emergência, tratamento adequado e tomada de decisão e fornece alta sensibilidade, especificidade e precisão na detecção de obstrução intestinal em estágio inicial e comprometimento vascular intestinal agudo. A tc também pode diferenciar entre várias etiologias, que é considerado um critério importante na triagem de pacientes para tratamento cirúrgico versus não cirúrgico.',
    reference: 'Curr med imaging, 2022;18(3):275-284. Doi:10.2174/1573405617666210628154218.',
    tags: ['Gastroenterologia', 'Emergência']
  },
  {
    id: 'tp2023-67',
    module: 'Cirurgia',
    text: 'Adolescente, 13 anos, admitido no pronto-socorro com dor inguinal à direita com irradiação escrotal, de início súbito há cerca de 2 horas, com melhora parcial há cerca de 1 hora. O paciente referiu ter participado de atividades esportivas na manhã do mesmo dia. Exame físico de genital: testículo esquerdo elevado no escroto e fora do eixo longitudinal habitual, aumento do volume e da consistência com discreta hiperemia, ausência de reflexo cremastérico. Qual é o diagnóstico e a conduta?',
    options: [
      '(A) Neoplasia; biópsia.',
      '(B) Trauma testicular; analgesia e seguimento ambulatorial.',
      '(C) Orquite; analgesia e antibioticoterapia.',
      '(D) Torção testicular; cirurgia de urgência.'
    ],
    correctAnswer: 3,
    explanation: 'A tríade de dor súbita em adolescente, testículo elevado/horizontalizado e ausência de reflexo cremastérico é torção testicular.',
    commentary: 'Paciente jovem com dor unilateral súbita com história de atividade física prévia sempre se deve considerar torção testicular. O exame físico demonstra sinais clássicos de torção com elevação e angulação secundária a torção no próprio eixo e ausência de reflexo cremastérico.\n\nTrauma testicular é uma hipótese plausível pela história de prática de esportes, mas a história deixaria claro que o início foi durante o esporte e no exame físico não teríamos o achado de elevação e angulação.\n\nOrquite é um quadro também de escroto agudo, mas apresenta melhora da dor à elevação testicular (sinal de Prehn) e não apresenta os achados de exame físico desse paciente. O quadro também é mais arrastado, não súbito.\n\nNeoplasia não se apresenta com dor, em geral é indolor com crescimento progressivo podendo apresentar síndromes paraneoplásicas como ginecomastia e hipertireoidismo.',
    reference: 'Campbell-walsh urologia. Gen guanabara koogan; 11ª edição. 2018',
    tags: ['Urologia', 'Emergência']
  },
  {
    id: 'tp2023-68',
    module: 'Cirurgia',
    text: 'Paciente masculino, 65 anos, vem ao hospital referindo dor progressiva e aumento do volume abdominal há 6 horas. Tem antecedente de constipação intestinal crônica, com piora progressiva com o passar dos anos. Realizou o exame de RX. Ao exame físico o abdome se encuentra distendido, timpânico, com dor à palpação superficial e profunda difusamente, com sinal de descompressão brusca dolorosa negativo. Qual hipótese diagnóstica se enquadra com a análise do quadro clínico e exame radiológico?',
    image: '/images/tp2023-68.PNG',
    options: [
      '(A) Fecaloma',
      '(B) Volvo de sigmoide',
      '(C) Aderência intestinal',
      '(D) Tumor de ceco'
    ],
    correctAnswer: 1,
    explanation: 'O volvo de sigmoide é uma causa comum de obstrução baixa em idosos e apresenta imagem radiológica típica de "U invertido" ou "grão de café".',
    commentary: 'A imagem radiológica e o quadro clínico são clássicos de volvo de sigmoide.',
    reference: 'Schuwartz. Tratado de cirurgia. 9 edição. Sabiston. Tratado de cirurgia. A base biológica da prática cirúrgica moderna. 20a.',
    tags: ['Coloproctologia', 'Emergência']
  },
  {
    id: 'tp2023-69',
    module: 'Cirurgia',
    text: 'Paciente de 18 anos iniciou uso de anticoncepcional há 3 dias e apresenta aumento de volume da panturrilha direita (7cm maior que a esquerda). Ao se realizar a dorsiflexão plantar, apresenta dor nos músculos da panturrilha, apresenta ainda veias dos pés ingurgitadas e discreta cianose. Qual a hipótese diagnóstica?',
    options: [
      '(A) Trombose venosa profunda',
      '(B) Oclusão arterial aguda',
      '(C) Doença arterial oclusiva crônica',
      '(D) Lesão óssea'
    ],
    correctAnswer: 0,
    explanation: 'A associação de uso de estrogênio (ACO) e edema unilateral com sinal de Homans positivo sugere TVP.',
    commentary: 'A paciente acima além de a história do uso de hormônios anticoncepcional oral que podem interferir na tríade de Virchow (hipercoagulabilidade) apresenta ao exame físico: edema, aumento da panturrilha em relação ao outro membro, sinal de romans positivo, veias superficiais ingurgitadas demonstrando uma provável trombose do sistema profundo.',
    reference: 'Maffei doenças vasculares periféricas. Rutherford,vascular disease',
    tags: ['Cirurgia Vascular']
  },
  {
    id: 'tp2023-70',
    module: 'Cirurgia',
    text: 'Paciente de 43 anos, sexo masculino, no pós-operatório tardio (um ano) de uma laparotomia exploradora por ferimento (projétil de arma de fogo). Apresenta, há 2 dias, náuseas seguidas de vômitos, que se intensificaram nas últimas 6 horas, acompanhados por aumento do volume abdominal e dor tipo cólica. Ao exame físico encontra-se corado, desidratado ++/4+, acianótico, anictérico, afebril e eupneico. Frequência cardíaca de 98bpm, pressão arterial de 120x70mmHg. Ausculta pulmonar e cardíaca normais. Exame abdominal com distensão e dor na palpação superficial e profunda difusamente, com descompressão brusca dolorosa negativa. Realizou Raio X de abdome. Qual a hipótese diagnóstica e a conduta a ser adotada inicialmente?',
    image: '/images/tp2023-70.PNG',
    options: [
      '(A) Oclusão intestinal por torção de cólon; correção de distúrbios hidroeletrolíticos e laparotomia.',
      '(B) Abscesso intracavitário; tomografia de abdome e antibioticoterapia.',
      '(C) Perfuração intestinal; laparotomia.',
      '(D) Aderência intestinal; correção de distúrbios hidroeletrolíticos e tratamento conservador com sonda nasogástrica aberta.'
    ],
    correctAnswer: 3,
    explanation: 'Aderências (bridas) são a principal causa de obstrução de delgado em pacientes com cirurgia prévia; o tratamento inicial costuma ser conservador.',
    commentary: 'O RX mostra um padrão de obstrução de intestino delgado. relacionando a imagem com o histórico do paciente chegamos a hipótese de brida (aderência intestinal), sendo a correção dos distúrbios hidroeletrolíticos e o tratamento conservador as primeiras medidas a serem adotadas. abscesso intracavitário não se enquadra no tempo de pós-operatório do paciente. Não existe sinal de pneumoperitônio no RX apresentado e a história clínica associada ao exame físico, também não são compatíveis com perfuração intestinal. a radiografia mostra um padrão de distensão de alças de intestino delgado e não de cólon, não sendo característica da torção de cólon.',
    reference: 'Schuwartz. Tratado de cirurgia. 9 edição. Sabiston. Tratado de cirurgia. A base biológica da prática cirúrgica moderna. 20 edição',
    tags: ['Gastroenterologia', 'Emergência']
  },
  {
    id: 'tp2023-71',
    module: 'Cirurgia',
    text: 'Paciente masculino, 18 anos, dá entrada na Unidade de Pronto Atendimento com desvio ósseo em tíbia direita. Ao exame, apresenta laceração de pele e subcutâneo com exposição de sítio de fratura. Em relação às fraturas expostas, podemos afirmar:',
    options: [
      '(A) Fraturas provocadas por projéteis de arma de fogo não são consideradas expostas.',
      '(B) Toda fratura exposta é considerada infectada.',
      '(C) Um dos intuitos do desbridamento cirúrgico da fratura exposta é reduzir a contaminação bacteriana.',
      '(D) Fraturas expostas somente podem ser fixadas cirurgicamente com fixadores externos. O uso de antibiótico só deve ser realizado se a lesão apresentar sinais de infecção.'
    ],
    correctAnswer: 2,
    explanation: 'O desbridamento cirúrgico é a medida mais importante para prevenir a infecção em fraturas expostas.',
    commentary: 'A fratura exposta é uma lesão considerada contaminada e não infectada. As fraturas provocadas por projétil de arma de fogo são consideradas expostas pois levam à comunicação do hematoma fraturário com o ambiente externo. Fraturas expostas classificadas até o grau 3b podem ser fixadas com fixação interna e em todos os graus podem ser fixadas com fixação externa. Os intuitos do debridamento cirúrgico são retirar corpos estranhos, retirar tecidos desvitalizados e reduzir a contaminação bacteriana.',
    reference: 'Hebert, Sizínio et al. Ortopedia e traumatologia: princípios e prática. São Paulo: Artmed.',
    tags: ['Ortopedia', 'Emergência']
  },
  {
    id: 'tp2023-72',
    module: 'Cirurgia',
    text: 'Homem de 64 anos comparece ao ambulatório de urologia para avaliação de doenças da próstata, pois seu pai fora diagnosticado com câncer de próstata ainda jovem. No momento, não apresenta qualquer queixa espontânea e está contente com o jato urinário. Ao toque, foi encontrado um nódulo indolor em lobo esquerdo em uma próstata de volume normal. Ele também trouxe os exames anteriores registrados: 2020 (PSA total 0.9/livre 0.4), 2021 (1.1/0.3), 2022 (1.3/0.5) e 2023 (2.1/0.2). Com base no enunciado, podemos afirmar que:',
    image: '/images/tp2023-72.PNG',
    options: [
      '(A) Estamos diante de um possível caso de câncer de próstata e o próximo passo é a biópsia prostática.',
      '(B) A velocidade de crescimento do PSA já vinha dando indicações desde 2021 de que era um caso de câncer de próstata e a biopsia deveria ter sido solicitada anteriormente.',
      '(C) A relação PSA livre/PSA total deve ser o fator de escolha para a decisão de biopsiar o paciente sempre que o resultado for maior que 25%.',
      '(D) O toque retal é um exame antiquado e atualmente desnecessário, visto os avanços tecnológicos. Portanto, o ideal é solicitar uma ressonância magnética multiparamétrica da próstata.'
    ],
    correctAnswer: 0,
    explanation: 'Qualquer nódulo ao toque retal ou alteração significativa na velocidade do PSA exige biópsia, independente do valor absoluto do PSA.',
    commentary: 'O paciente deste relato deve ser biopsiado devido aos seguintes fatores: toque sugestivo, velocidade de progressão maior que 0,75ng/dl e relação PSA livre/PSA total menor que 20%. Note que o valor atual do PSA total não atinge o nível teto de referência que é 2,5ng/dl, porém não há valor de PSA completamente seguro. Além disso o histórico familiar é fator de realce.',
    reference: 'Nardozza Júnior, A.; Zerati Filho, M.; Reis, RB. Urologia fundamental. São Paulo: Planmark, 2010.',
    tags: ['Urologia', 'Oncologia']
  },
  {
    id: 'tp2023-73',
    module: 'Cirurgia',
    text: 'Paciente masculino, 48 anos, cirrótico por vírus C, Child-Pugh B, apresenta hematêmese em grande volume, rebaixamento do nível de consciência, frequência cardíaca de 120bpm, pressão arterial de 60x40mmHg. No hemograma observa-se dosagem de hemoglobina de 7,0g/dL e plaquetas de 78.000/mm3. Qual a conduta inicial?',
    options: [
      '(A) Solicitar endoscopia digestiva alta com ligadura de varizes.',
      '(B) Garantir via aérea e reposição volêmica.',
      '(C) Administrar terlipressina e antibiótico.',
      '(D) Instituir inibidor de bomba de prótons.'
    ],
    correctAnswer: 1,
    explanation: 'O manejo inicial de qualquer sangramento digestivo grave prioriza a estabilização hemodinâmica e proteção de via aérea.',
    commentary: 'O paciente em questão apresenta hematêmese em grande volume, com sinais de sangramento digestivo grave (rebaixamento do nível de consciência e hipotensão arterial), necessitando de tratamento urgente.\n\nO primeiro passo é garantir a via aérea do paciente. Isso pode ser feito com uma intubação endotraqueal, garantindo que a via aérea esteja segura, a seguir o paciente deve receber reposição volêmica.\n\nO uso de terlipressina, um medicamento que contrai os vasos sanguíneos diminuído a pressão portal, ele pode ser usado para tratar sangramento de varizes esofágicas. O antibiótico deve ser utilizado para prevenção de infeções bacterianas em cirróticos com hemorragia digestiva. Todavia, eles são medicamentos que devem ser utilizados na sequência do tratamento após garantir a proteção das vias aéreas e reposição volêmica.\n\nApós a estabilização do paciente, ele deve ser encaminhado para uma endoscopia digestiva alta. O que permite identificar o ponto de sangramento e realizar o tratamento adequado.\n\nO inibidor de bomba de prótons é um medicamento que reduz a produção de ácido gástrico. Ele não é eficaz no tratamento de sangramento de varizes esofágicas, sendo recomendado para o tratamento de sangramento secundário doenças pépticas.',
    reference: 'Hepatology, vol. 65, no. 1, 2017. Portal hypertensive bleeding in cirrhosis: risk stratification, diagnosis, and management: 2016 practice guidance by the american association for the study of liver diseases.',
    tags: ['Gastroenterologia', 'Emergência']
  },
  {
    id: 'tp2023-74',
    module: 'Cirurgia',
    text: 'Sangramento anal é uma queixa comum na atenção básica. Em se tratando de hemorroidas, podemos afirmar que:',
    options: [
      '(A) A linha denteada é o limite anatômico para classificar as hemorroidas em externas e internas.',
      '(B) Nas hemorroidas internas de terceiro grau, o prolapso reduz-se espontaneamente.',
      '(C) As hemorroidas externas tendem a sangrar mais do que as internas.',
      '(D) Os plicomas são frequentes nas hemorroidas internas e relacionam-se com fenômeno trombótico.'
    ],
    correctAnswer: 0,
    explanation: 'Hemorroidas internas originam-se acima da linha denteada, enquanto as externas originam-se abaixo.',
    commentary: 'A linha denteada é o limite anatômico utilizado para classificar as hemorroidas em Externas (abaixo) e internas (acima). As hemorroidas internas cursam mais comumente com sangramento e prolapso e as externas, com dor, prurido, cicatrização secundaria (plicomas), podendo desenvolver processo trombótico. As hemorroidas internas são classificadas em:\n\n• 1° grau: somente sangram.\n• 2° grau: sangram e desenvolvem prolapso de redução espontânea.\n• 3° grau: sangram e desenvolvem prolapso com redução manual\n• 4° grau: sangramento e prolapso permanente',
    reference: 'American society for gastrointestinal endoscopy. Asge guideline: endoscopy in the diagnosis and treat mento f inflammatory bowel disease. Gastrointestinal endoscopy. 2006; 63(4):558-65. Dani r. Gastroenterologia essencial. 2. Ed. Rio de janeiro: guanabara koogan; 2001. P. 336-44. Galvão-alves j, rodrigues rhr. Constipação intestinal. In: galvão-alves j. Temas de atualização em gastroenterologia. Rio de janeiro: rubio; 2006. P. 81-8. Kudo s, kashida h, tamura t, kogure e, imai y, yamano h et al. Colonoscopic diagnosis and management of nonpolypoid early colorectal cancer. Word j surg. 2000; 24(9):1081-90.',
    tags: ['Coloproctologia']
  },
  {
    id: 'tp2023-75',
    module: 'Cirurgia',
    text: 'O exame considerado padrão ouro para avaliação do aneurisma de aorta abdominal é:',
    options: [
      '(A) Arteriografia',
      '(B) Ultrassom doppler',
      '(C) Pletismografia',
      '(D) Angiotomografia'
    ],
    correctAnswer: 3,
    explanation: 'A angiotomografia permite avaliar o diâmetro da parede aórtica e a anatomia para planejamento cirúrgico.',
    commentary: 'Como o aneurisma é uma doença de parede e não de luz do vaso a angiotomografia avalia melhor a parede do que a arteriografia (avalia melhor a luz do vaso).',
    reference: 'Maffei, doença vascular periferia. Rutherford - vascular dissesse.',
    tags: ['Cirurgia Vascular']
  },
  {
    id: 'tp2023-76',
    module: 'Cirurgia',
    text: 'Paciente de 52 anos, masculino, vitimado de queda de motocicleta a 60km/h. Dá entrada na unidade de urgência referenciada trazido pelo SAMU, com imobilização completa. Refere dor em hipocôndrio esquerdo, equimose em flanco. Está consciente, lúcido e orientado. Refere que utiliza 100mg de aspirina. Sinais vitais: tensão arterial de 100x65mmHg, pulso de 100bpm, frequência cardíaca de 100bpm, frequência respiratória de 16irpm, saturação de oxigênio de 96% em ar ambiente. Realizada tomografia de abdome com contraste, evidenciando lesão de baço grau II (AAST), com presença de sangue livre na cavidade. Realizado tromboelastograma, evidenciando redução da Amplitude Máxima (MA). O tratamento hemoterápico mais efetivo neste momento, baseado no tromboelastrograma, é:',
    image: '/images/tp2023-76.PNG',
    options: [
      '(A) Transfusão de concentrado de hemácias.',
      '(B) Infusão de 1000mL de ringer e plasma fresco congelado.',
      '(C) Transfusão de plaquetas, somente.',
      '(D) Protocolo de transfusão maciça.'
    ],
    correctAnswer: 2,
    explanation: 'No TEG, a Máxima Amplitude (MA) reflete a contribuição plaquetária na formação do coágulo.',
    commentary: 'A tromboelastograma (TEG) é um exame que analisa como um todo coagulação sanguínea. Sua interpretação deriva de análise dos seguintes seguimentos:\n\nTime - r - "tempo de reação" até formas iniciais do coágulo. Se o tempo r for aumentado, o paciente precisa de flama fresco congelado ou preservado.\n\nTime - k - "tempo cinético" para coágulo alcance 20 mm; reflete fibrinogênio e níveis de plaquetas; se k tem o tempo aumentou, o paciente pode precisar crio precipitado ou plaquetas.\n\nÂngulo ∝ - ângulo de inclinação que indica velocidade do coágulo formação; reflete fibrinogênio e níveis de plaquetas.\n\nMáxima amplitude: amplitude máxima de rastreamento, reflete a contribuição das plaquetas na formação do coágulo; se diminuído, o paciente tem plaquetas disfunção e necessidades plaquetas.\n\nLy-30: porcentagem de redução da amplitude 30 minutos após a máxima amplitude; ly-30 elevado significa que o coágulo também está sendo quebrado rapidamente.\n\nNo caso analisado, temos uma alteração de máxima amplitude (ma), sendo necessário transfusão de plaquetas.',
    reference: 'AMERICAN COLLEGE OF SURGIONS COMMITTEE ON TRAUMA. Advanced Trauma Life Suport - ATLS. 10 edição',
    tags: ['Trauma', 'Hematologia']
  },
  {
    id: 'tp2023-77',
    module: 'Cirurgia',
    text: 'Paciente cirrótico por hepatite C apresenta 2 nódulos hepáticos com “wash-out” em tomografia de abdome com contraste trifásico (1 nódulo tem 2,2cm no segmento 5 e outro tem 2,5cm no segmento 7), MELD 12, alfafetoproteína de 600ng/dL (normal até 10ng/dL). No estadiamento não apresenta metástases à distância. Qual a conduta frente a esse caso, considerando que o paciente tem boa performance clínica?',
    options: [
      '(A) Hepatectomia direita',
      '(B) Quimioembolização',
      '(C) Transplante hepático',
      '(D) Sorafenib'
    ],
    correctAnswer: 2,
    explanation: 'Pacientes com hepatocarcinoma dentro dos critérios de Milão (nódulos < 3cm) e cirrose têm indicação de transplante.',
    commentary: 'Paciente cirrótico com bom perfil clinico, tem dois nódulos (hepatocarcinoma). Esta dentro de critério de Milão. Alfafetoproteína é menor que 1000. Portanto a conduta é transplante hepático em situação especial devido hepatocarcinoma',
    reference: 'Sabiston: textbook of surgery; 21 edition, 2022; editora Elsevier',
    tags: ['Oncologia', 'Gastroenterologia']
  },
  {
    id: 'tp2023-78',
    module: 'Cirurgia',
    text: 'Paciente do sexo feminino, 50 anos, proveniente do norte de Minas Gerais, com queixa de disfagia progressiva há 5 anos, associada a regurgitação e necessidade de ingesta de água para auxílio durante a alimentação. A endoscopia digestiva alta mostra grande quantidade de estase alimentar e esôfago de calibre aumentado. A radiografia contrastada de esôfago-estômago-duodeno evidencia esôfago com 7cm e presença de ondas terciárias. De acordo com a epidemiologia, os dados clínicos e de exames complementares, qual o diagnóstico e o tratamento?',
    options: [
      '(A) Câncer esofágico e ressecção endoscópica.',
      '(B) Câncer esofágico e esofagectomia.',
      '(C) Megaesôfago chagásico e dilatação com balão.',
      '(D) Megaesôfago chagásico e cardiomiotomia a Heller-Pinotti.'
    ],
    correctAnswer: 3,
    explanation: 'Esôfago Grau III de Rezende (calibre entre 7-10cm) tem como tratamento de escolha a cirurgia de Heller-Pinotti.',
    commentary: 'Trata-se de um paciente com disfagia progressiva, com epidemiologia positiva para chagas, com esôfago aumentado, com ondas terciárias e estase alimentar – quadro compatível com megaesôfago por chagas. O esôfago de 7cm configura grau 3 de Rezende e a melhora conduta terapêutica é a cardiomiotomia a Heller-Pinotti',
    reference: 'Sabiston: textbook of surgery; 21 edition, 2022; editora Elsevier',
    tags: ['Gastroenterologia']
  },
  {
    id: 'tp2023-79',
    module: 'Cirurgia',
    text: 'Homem de 60 anos, metalúrgico, portador de doença pulmonar obstrutiva crônica (DPOC), diabético tipo 2, refere dor e protusão na região inguinal direita, principalmente aos esforços, há 3 meses. Ao exame físico é evidenciada uma hérnia inguinal à direita e aumento volumétrico da próstata. Em relação à hérnia, é correto afirmar que:',
    options: [
      '(A) A hiperplasia prostática é responsável por 50% das hérnias inguinais no homem.',
      '(B) Trata-se de uma hérnia que está se exteriorizando através do anel inguinal profundo (interno).',
      '(C) A fraqueza do triângulo de Hesselbach, esforço físico e DPOC são fatores de risco na formação da hérnia.',
      '(D) Por se tratar de uma hérnia direta, congênita, o tratamento é a herniorrafia inguinal.'
    ],
    correctAnswer: 2,
    explanation: 'Hérnias diretas ocorrem por fraqueza da parede posterior e são agravadas por doenças que aumentam a pressão abdominal (DPOC, prostatismo).',
    commentary: 'Das tramas do colágeno em decorrentes da idade (alterações bioquímicas e metabólicas), associada a DPOC e a hiperplasia prostática e esforço físico (fatores mecânicos), são os fatores mais importantes para a formação das hernias inguinais diretas, que se exteriorizam pelo anel inguinal externo, a hiperplasia prostática colabora porem não de maneira significativa para o quadro em questão, e o tratamento é a hernioplastia inguinal.',
    reference: 'Hernias de parede abdominal – diagnóstico e tratamento 2ª edição 2009. Juan Carlos M Gonzáles capítulo 13.',
    tags: ['Cirurgia Geral', 'Hérnias']
  },
  {
    id: 'tp2023-80',
    module: 'Cirurgia',
    text: 'Paciente de 30 anos, masculino, refere avulsão do terceiro molar inferior direito há 6 dias. O dentista receitou-lhe amoxicilina por 7 dias. Há 3 dias notou abaulamento na região submandibular direita, com dor local e febre. Procurou Unidade Básica de Saúde, sendo avaliado, mantido o uso de antibiótico, introduzido anti-inflamatório e foi dispensado. Hoje dá entrada no pronto-socorro de hospital de referência, queixando-se de piora da dor, picos febris, aumento da lesão cervical, acompanhada por hiperemia da pele, taquicardia, odinofagia, disfagia e elevação do soalho da boca. Qual é o diagnóstico e o exame de imagem para complementação diagnóstica?',
    image: '/images/tp2023-80.PNG',
    options: [
      '(A) Sialoadenite aguda; ressonância nuclear magnética do pescoço com contraste.',
      '(B) Angina de Ludwig (fasciíte necrotizante cervical); tomografia computadorizada do pescoço com contraste.',
      '(C) Infecção profunda da mandíbula; Raio X panorâmico da mandíbula.',
      '(D) Cisto radicular do terceiro molar inferior infectado; Raio X panorâmico da mandíbula.'
    ],
    correctAnswer: 1,
    explanation: 'A Angina de Ludwig é uma celulite grave dos espaços submandibulares, geralmente de origem odontogênica.',
    commentary: 'Angina de Ludwig: infecção nos espaços submandibular, submentoniano e sublingual. De origem dentária e com rápida evolução para obstrução de vias aéreas superiores. O termo angina deriva do termo grego, que significa “estrangulamento”, revelando o acometimento da via aérea em questão. O exame mais adequado para o diagnóstico e programação terapêutica é a tomografia computadorizada, preferencialmente com contraste, que deve incluir planos da face, do pescoço e do tórax. As imagens permitem avaliação da real extensão da loja, se é única ou múltipla, situação dos tecidos adjacentes, previsão de via aérea difícil e extensão para o tórax.',
    reference: 'Lenine gb & guimarães md. Cirurgia de cabeça e pescoço- fundamentos para a graduação médica. Sarvier, 2011. Araujo fo. V j., cemea cr, brandão lg. Manual do residente de cirurgia de cabeça e pescoço - 2.ed.-barueri, sp: manole. 2013. Rev col bras cir 47:e20202524. Doi: 10.1590/0100-6991e-20202524',
    tags: ['Cirurgia de Cabeça e Pescoço', 'Emergência']
  },
  {
    id: 'tp2022-61',
    module: 'Cirurgia',
    text: 'Paciente de 25 anos, masculino, será submetido a correção de hérnia inguinal direita por via convencional - inguinotomia. Visando a ligadura dos vasos superficiais do subcutâneo, o fechamento da aponeurose e o fechamento da pele, quais seriam os fios utilizados, respectivamente?',
    options: [
      '(A) Algodão, PDS (polidioxanona), monocryl (poliglecaprona 25).',
      '(B) Vicryl (poliglactina 370), nylon, monocryl (poliglecaprona 25).',
      '(C) PDS (polidioxanona), monocryl (poligecaprina 25), algodão.',
      '(D) Catgut, monocryl (poliglecaprona 25), nylon.'
    ],
    correctAnswer: 0,
    explanation: 'Algodão para vasos superficiais, PDS (fio de longa absorção) para aponeurose e Monocryl para sutura intradérmica na pele.',
    commentary: 'Para ligaduras superficiais, o algodão é tradicional. A aponeurose exige um fio que suporte tração por tempo prolongado (PDS). Na pele, o monocryl evita cicatrizes exageradas.',
    reference: 'Sabiston - Tratado de Cirurgia - 18ª Ed.',
    tags: ['Cirurgia Geral', 'Suturas']
  },
  {
    id: 'tp2022-62',
    module: 'Cirurgia',
    text: 'Paciente de 18 anos com abaulamento inguinal há 4 anos. Iniciou dor forte, febre, calor local e vermelhidão na pele sobre o saco herniário, sem redução do conteúdo. Qual a hipótese e conduta?',
    options: [
      '(A) Hérnia femoral e indicar videolaparoscopia.',
      '(B) Hérnia inguinal e encaminhar para cirurgia ambulatorial.',
      '(C) Abdome agudo inflamatório e tomografia de abdome total.',
      '(D) Hérnia inguinal encarcerada e indicar cirurgia de urgência.'
    ],
    correctAnswer: 3,
    explanation: 'Sinais flogísticos (vermelhidão, calor) sobre o saco herniário sugerem encarceramento com sofrimento de alça (estrangulamento).',
    commentary: 'A dor intensa associada a sinais inflamatórios na pele indica complicação da hérnia, exigindo urgência cirúrgica para evitar necrose intestinal.',
    reference: 'Sabiston - Tratado de Cirurgia - 18ª Ed.',
    tags: ['Cirurgia Geral', 'Hérnias']
  },
  {
    id: 'tp2022-63',
    module: 'Cirurgia',
    text: 'Paciente de 45 anos, obesa, com dor em hipocôndrio direito, Murphy positivo e febre (38,2ºC). Qual a conduta recomendada?',
    options: [
      '(A) Tomografia com contraste e tratamento clínico apenas.',
      '(B) Exames laboratoriais, ultrassom para confirmação e indicação cirúrgica laparoscópica.',
      '(C) Laparotomia exploradora urgente imediata.',
      '(D) Colangiorressonância e CPRE conservadora.'
    ],
    correctAnswer: 1,
    explanation: 'Murphy positivo e febre definem colecistite aguda; o US é o exame inicial e a colecistectomia precoce é o padrão.',
    commentary: 'Os fatores de risco (4Fs: female, fat, forty, fertile) e o sinal de Murphy sugerem colecistite. O US confirma e o tratamento é cirúrgico (videolaparoscopia).',
    reference: 'Coelho, Júlio Cezar - Aparelho Digestivo - 4ª Ed.',
    tags: ['Gastroenterologia', 'Cirurgia Biliar']
  },
  {
    id: 'tp2022-64',
    module: 'Cirurgia',
    text: 'As neoplasias do esôfago em seu terço distal têm como principais fatores de risco:',
    options: [
      '(A) Esôfago em quebra nozes e tabagismo.',
      '(B) Tabagismo e etilismo.',
      '(C) Diabetes e hipertensão arterial sistêmica.',
      '(D) Doença do refluxo crônica, hérnia de hiato importante e obesidade.'
    ],
    correctAnswer: 3,
    explanation: 'O adenocarcinoma (habitual no terço distal) associa-se ao Barrett/DRGE e obesidade.',
    commentary: 'O adenocarcinoma de esôfago distal está intimamente ligado ao esôfago de Barrett (metaplasia intestinal secundaria ao refluxo crônico).',
    reference: 'Sabiston - Tratado de Cirurgia - 18ª Ed.',
    tags: ['Oncologia', 'Gastroenterologia']
  },
  {
    id: 'tp2022-65',
    module: 'Cirurgia',
    text: 'Mulher, 30 anos, apresenta cefaleia pós-raquianestesia. Qual a conduta inicial recomendada?',
    options: [
      '(A) Blood-patch imediato em enfermaria.',
      '(B) Blood-patch contraindicado pela idade.',
      '(C) Repouso no leito e hidratação cristaloide generosa.',
      '(D) Blood-patch imediato em UTI.'
    ],
    correctAnswer: 2,
    explanation: 'O tratamento inicial da cefaleia pós-raqui é conservador; o blood-patch reserva-se a casos refratários.',
    commentary: 'Repouso e hidratação costumam resolver a maioria dos casos. O blood-patch é invasivo e realizado por anestesiologista em ambiente controlado.',
    reference: 'Manica, James - Anestesiologia - 4ª Ed.',
    tags: ['Anestesiologia']
  },
  {
    id: 'tp2022-66',
    module: 'Cirurgia',
    text: 'Vítima de trauma, AO paradoxal à dor (2), RM inespecífica à dor (4), sem resposta verbal (1). PA 90/60, FC 68, pele aquecida. Qual o Glasgow e conduta?',
    options: [
      '(A) ECG 9; reposição volêmica agressiva.',
      '(B) ECG 7; intubação orotraqueal.',
      '(C) ECG 5; Ringer Lactato agressivo.',
      '(D) ECG 9; intubação orotraqueal.'
    ],
    correctAnswer: 1,
    explanation: 'AO 2 + RM 4 + RV 1 = GCS 7. Pacientes com GCS < 8 exigem via aérea definitiva (IOT).',
    commentary: 'A hipotensão com frequência cardíaca normal sugere choque neurogênico (distributivo). Independente do tipo de choque, o GCS de 7 obriga a proteção da via aérea.',
    reference: 'ATLS 10ª Edição.',
    tags: ['Trauma', 'Neurocirurgia']
  },
  {
    id: 'tp2022-67',
    module: 'Cirurgia',
    text: 'Vítima de trauma automobilístico com dor torácica e falta de ar. Imagem radiológica evidencia velamento de base pulmonar com desvio de mediastino. Qual a conduta?',
    image: '/images/tp2022-67.PNG',
    options: [
      '(A) Punção torácica diagnóstica.',
      '(B) Drenagem torácica aberta.',
      '(C) Drenagem torácica fechada (em selo d\'água).',
      '(D) Drenagem por toracocentese.'
    ],
    correctAnswer: 2,
    explanation: 'O tratamento de escolha para o hemotórax no trauma é a drenagem torácica fechada.',
    commentary: 'A drenagem em selo d\'água permite a reexpandir o pulmão e monitorar o débito hemático.',
    reference: 'ATLS 10ª Edição.',
    tags: ['Trauma', 'Cirurgia Torácica']
  },
  {
    id: 'tp2022-68',
    module: 'Cirurgia',
    text: 'Trauma de tórax com murmúrio diminuído e saturação 88%. Imagem radiográfica mostra pneumotórax. Qual a conduta imediata?',
    image: '/images/tp2022-68.PNG',
    options: [
      '(A) Proceder drenagem de tórax em selo d’água.',
      '(B) Realizar radiografia de Laurel.',
      '(C) Cateter de O2 10L/min e observar.',
      '(D) Solicitar tomografia corporativa.'
    ],
    correctAnswer: 0,
    explanation: 'O pneumotórax sintomático no trauma exige drenagem imediata (selo d\'água).',
    commentary: 'O diagnóstico de pneumotórax é clínico no trauma e a drenagem não deve ser retardada por exames complexos se o paciente estiver sintomático.',
    reference: 'Sabiston - Tratado de Cirurgia - 19ª Ed.',
    tags: ['Trauma', 'Cirurgia Torácica']
  },
  {
    id: 'tp2022-69',
    module: 'Cirurgia',
    text: 'Paciente no pós-operatório com dor e inchaço em panturrilha direita. Sinal de Homans positivo. Qual a conduta?',
    options: [
      '(A) Observação e elevação do membro (baixa probabilidade por Wells).',
      '(B) Dímero-D inicial (alta sensibilidade).',
      '(C) Ecografia vascular direta (Wells de alta probabilidade).',
      '(D) Ultrassom é a primeira modalidade em qualquer suspeita de TVP.'
    ],
    correctAnswer: 3,
    explanation: 'Em suspeitas clínicas reais de TVP, o US Doppler é o exame de escolha inicial.',
    commentary: 'O escore de Wells ajuda a estratificar. Se a probabilidade for alta, parte-se direto para o exame de imagem.',
    reference: 'ESVS 2021 Clinical practice guidelines on venous thrombosis.',
    tags: ['Cirurgia Vascular']
  },
  {
    id: 'tp2022-70',
    module: 'Cirurgia',
    text: 'Politrauma com respiração ruidosa, hipertimpanismo à direita, choque, percussão pulmonar alterada e sínfise púbica alargada. Próximo passo?',
    options: [
      '(A) Toracostomia de alívio e via aérea definitiva.',
      '(B) Fechamento de pelve e transfusão massiva.',
      '(C) Via aérea definitiva, drenagem torácica à direita e fechamento de pelve.',
      '(D) Via aérea, toracostomia de alívio e aguardar exames para fechar pelve.'
    ],
    correctAnswer: 2,
    explanation: 'O ABCDE exige: A (via aérea definitiva pela obstrução/consciência), B (drenagem pelo pneumo hipertensivo), C (pelve e restrição de cristaloides).',
    commentary: 'O fechamento temporário da pelve (lençol/cinta) é parte do controle de danos no "C" do trauma.',
    reference: 'ATLS 10ª Edição.',
    tags: ['Trauma', 'Emergência']
  },
  {
    id: 'tp2022-71',
    module: 'Cirurgia',
    text: 'Diabético com necrose seca em hálux há 1 semana e dor de repouso. Pulsos distais ausentes. Qual a conduta?',
    options: [
      '(A) Amputar hálux antes de revascularizar.',
      '(B) Arteriografia e revascularização, aguardando delimitação da lesão.',
      '(C) Apenas amputar o hálux.',
      '(D) Amputação infrapatelar imediata.'
    ],
    correctAnswer: 1,
    explanation: 'Na isquemia crítica, deve-se revascularizar antes de qualquer desbridamento/amputação para garantir cicatrização.',
    commentary: 'Amputar um membro isquêmico sem revascularização leva à necrose da ferida cirúrgica e perda do nível de amputação.',
    reference: 'Maffei - Doenças Vasculares Periféricas.',
    tags: ['Cirurgia Vascular']
  },
  {
    id: 'tp2022-72',
    module: 'Cirurgia',
    text: 'Lombalgia súbita irradiada para testículo, acordando o paciente, associada a febre. Qual a investigação inicial?',
    options: [
      '(A) USG de abdome e enzimas pancreáticas.',
      '(B) Ressonância Magnética e urina I.',
      '(C) Tomografia de abdome/pelve sem contraste, hemograma e urina I.',
      '(D) Raio X simples e amilase.'
    ],
    correctAnswer: 2,
    explanation: 'A TC sem contraste é o padrão-ouro para litíase; febre indica litíase infectada (emergência urológica).',
    commentary: 'A litíase obstrutiva febril exige drenagem imediata da via urinária (duplo J ou nefrostomia) para evitar choque séptico.',
    reference: 'Diretrizes SBU - Urolitíase.',
    tags: ['Urologia', 'Emergência']
  },
  {
    id: 'tp2022-73',
    module: 'Cirurgia',
    text: 'Mulher de 63 anos com enterorragia moderada. Abdome inocente, toque retal com sangue vivo. Qual a principal suspeita e conduta?',
    options: [
      '(A) Internação e colonoscopia - Doença diverticular.',
      '(B) Tomografia e colonoscopia ambulatorial - Doença diverticular.',
      '(C) Retossigmoidoscopia no PS - Hemorroidas.',
      '(D) Encaminhamento ambulatorial - Hemorroidas.'
    ],
    correctAnswer: 0,
    explanation: 'A doença diverticular é a principal causa de HDB vultosa em idosos; exige internação para investigação.',
    commentary: 'A estabilização hemodinâmica e a colonoscopia após preparo são os passos fundamentais.',
    reference: 'British Society of Gastroenterology - HDB Guidelines.',
    tags: ['Coloproctologia', 'HDB']
  },
  {
    id: 'tp2022-74',
    module: 'Cirurgia',
    text: 'Paciente em uso de rivaroxabana por TEP fará artroplastia de quadril. Qual o cuidado perioperatório?',
    options: [
      '(A) Suspender rivaroxabana 48h antes e dar AAS.',
      '(B) Substituir por Varfarina.',
      '(C) Manter rivaroxabana e dar Vitamina K.',
      '(D) Suspender rivaroxabana 48h antes e retomar 12h após se sem sangramento.'
    ],
    correctAnswer: 3,
    explanation: 'Novos anticoagulantes orais (DOACs) devem ser suspensos 48h antes de cirurgia de grande porte.',
    commentary: 'Não há necessidade de ponte com heparina (bridging) para DOACs na maioria dos cenários de risco cirúrgico alto.',
    reference: 'Med Clin North Am. 2020.',
    tags: ['Hematologia', 'Cirurgia Geral']
  },
  {
    id: 'tp2022-75',
    module: 'Cirurgia',
    text: 'Homem de 18 anos com dor no epigástrio que migrou para FID, defesa abdominal e descompressão brusca positiva. Leucocitose 17.000. Próximo passo?',
    options: [
      '(A) Tomografia de abdome.',
      '(B) Indicar apendicectomia.',
      '(C) Ultrassonografia de abdome.',
      '(D) Antibiótico e observação.'
    ],
    correctAnswer: 1,
    explanation: 'Em homens jovens, a clínica de apendicite é soberana e permite indicação cirúrgica direta (Escore de Alvarado ≥ 7).',
    commentary: 'A migração da dor e o sinal de Blumberg são altamente específicos para apendicite aguda.',
    reference: 'JAMA 2021 - Acute Appendicitis Review.',
    tags: ['Gastroenterologia', 'Emergência']
  },
  {
    id: 'tp2022-76',
    module: 'Cirurgia',
    text: 'Criança com meningite em tratamento evolui com piora do Glasgow e cefaleia. TC mostra hidrocefalia comunicante. Qual a conduta?',
    options: [
      '(A) Trocar antibiótico.',
      '(B) Derivação ventrículo-peritoneal (DVP).',
      '(C) Derivação ventricular externa (DVE).',
      '(D) Angiografia cerebral.'
    ],
    correctAnswer: 2,
    explanation: 'Na hidrocefalia aguda pós-meningite (ambiente infectado), a DVE é preferível à DVP definitiva.',
    commentary: 'A DVE permite o controle da pressão intracraniana enquanto se trata o processo infeccioso liquórico.',
    reference: 'Nitrini - A Neurologia que todo médico deve saber.',
    tags: ['Neurocirurgia', 'Pediatria']
  },
  {
    id: 'tp2022-77',
    module: 'Cirurgia',
    text: 'Pós-operatório (5º dia) com pus na ferida mas abdome normal à palpação. Qual o diagnóstico e conduta?',
    options: [
      '(A) Infecção do sítio cirúrgico (ISC); abertura parcial, limpeza e curativos.',
      '(B) Fístula digestiva; reoperar.',
      '(C) Eventração; enfaixamento.',
      '(D) ISC; antibióticos e manutenção dos pontos.'
    ],
    correctAnswer: 0,
    explanation: 'Infecção superficial de incisão trata-se com drenagem e curativos; antibióticos são reservados para celulite extensa.',
    commentary: 'A drenagem do pus e a limpeza mecânica são fundamentais na ISC superficial.',
    reference: 'Surgical Infection Society Guidelines - 2016.',
    tags: ['Cirurgia Geral', 'Infectologia']
  },
  {
    id: 'tp2022-78',
    module: 'Cirurgia',
    text: 'Cefaleia súbita durante relação sexual, Glasgow 4 e anisocoria. TC mostra imagem hiperdensa em parênquima e ventrículos. Diagnosis?',
    image: '/images/tp2022-78.PNG',
    options: [
      '(A) Hematoma apenas intraventricular.',
      '(B) Hematoma intraparenquimatoso e derrame intraventricular.',
      '(C) Hemorragia subaracnoidea isolada.',
      '(D) Isquemia cerebral volumosa.'
    ],
    correctAnswer: 1,
    explanation: 'A hipertensão súbita pode causar hematomas parenquimatosos com inundação ventricular associada.',
    commentary: 'O rebaixamento brusco do nível de consciência sugere evento hemorrágico central.',
    reference: 'Tratado de Neurologia e Neurocirurgia - Giacomelli.',
    tags: ['Neurocirurgia', 'Emergência']
  },
  {
    id: 'tp2022-79',
    module: 'Cirurgia',
    text: 'Sobre a criptorquidia (testículo não identificado em bolsa), é correto afirmar:',
    options: [
      '(A) A temperatura não afeta a espermatogênese.',
      '(B) Não causa efeitos psicológicos.',
      '(C) Não há risco aumentado de torção.',
      '(D) O risco de degeneração maligna é maior do que na população normal.'
    ],
    correctAnswer: 3,
    explanation: 'Testículos criptorquídicos têm risco significativamente maior de seminoma e outros tumores germinativos.',
    commentary: 'A orquidopexia precoce visa preservar a fertilidade e facilitar o autoexame para detecção de tumores.',
    reference: 'Urologia Fundamental - SBU.',
    tags: ['Urologia', 'Pediatria']
  },
  {
    id: 'tp2022-80',
    module: 'Cirurgia',
    text: 'Queimadura por água fervente em face anterior do membro superior esquerdo e eritema no rosto. Qual a SCQ de 2º grau?',
    options: [
      '(A) 4,5%',
      '(B) 7,5%',
      '(C) 9%',
      '(D) 18%'
    ],
    correctAnswer: 0,
    explanation: 'Membro superior total = 9%. Face anterior = 4.5%. Eritema no rosto é 1º grau (não conta na Parkland/SCQ).',
    commentary: 'Apenas queimaduras de 2º e 3º grau entram no cálculo da superfície corpórea queimada.',
    reference: 'Neligan - Cirurgia Plástica - Vol 6.',
    tags: ['Queimados', 'Emergência']
  },
  {
    id: 'tp2025-61',
    module: 'Cirurgia',
    text: 'Homem de 45 anos, previamente saudável, procura o serviço de emergência com quadro de dor abdominal intensa e súbita há aproximadamente 6 horas. Relata que a dor iniciou na região epigástrica e rapidamente se generalizou pelo abdome. Exame físico: posição antálgica com abdome rígido, doloroso à palpação difusa e com sinal de irritação peritoneal. Exames laboratoriais: leucocitose com desvio à esquerda. O RX de abdome em posição ortostática evidencia pneumoperitônio. Baseado nesse quadro clínico, qual a conduta mais adequada?',
    options: [
      '(A) Antibioticoterapia venosa e jejum rigoroso, aguardando melhora clínica para posterior investigação endoscópica.',
      '(B) Laparotomia exploradora ou laparoscopia para reparo da perfuração, associando antibioticoterapia de amplo espectro.',
      '(C) Tratamento clínico com inibidores de bomba de prótons e analgesia, pois a maioria dos casos evolui com fechamento espontâneo da perfuração.',
      '(D) Solicitar tomografia computadorizada de abdome para confirmação diagnóstica antes de definir conduta cirúrgica.'
    ],
    correctAnswer: 1,
    explanation: 'A úlcera péptica perfurada é uma emergência cirúrgica clássica com dor de início súbito e pneumoperitônio, cujo tratamento definitivo é a cirurgia precoce, associada a antibioticoterapia.',
    commentary: 'A úlcera péptica perfurada é uma emergência cirúrgica que se manifesta, classicamente, com dor abdominal súbita, intensa e sinais de peritonite. O pneumoperitônio, na radiografia de abdome, reforça a suspeita diagnóstica. O tratamento definitivo envolve cirurgia para fechamento da perfuração, preferencialmente por laparoscopia, associada a suporte clínico com antibióticos de amplo espectro e reposição volêmica. O manejo conservador é reservado para casos excepcionais (por exemplo, Taylor). A demora na intervenção aumenta expressivamente a morbimortalidade. Na vigência de peritonite e pneumoperitônio clássico, a TC não é obrigatória antes da indicação cirúrgica.',
    reference: 'Soreide, K., Thorsen, K., Harrison, E. M., Bingener, J., Moller, M. H., Ohene-Yeboah, M., & Søreide, J. A. (2015). Perforated peptic ulcer. The Lancet, 386(10000), 1288-1298.',
    tags: ['Gastroenterologia', 'Emergência']
  },
  {
    id: 'tp2025-62',
    module: 'Cirurgia',
    text: 'Homem de 65 anos, tabagista e com histórico de colangite esclerosante primária, apresenta icterícia progressiva há dois meses, associada a perda de peso não intencional e prurido cutâneo. Colangiopancreatografia por ressonância magnética revela uma estenose irregular da via biliar hepática comum, com dilatação dos ductos intra-hepáticos. Qual é o diagnóstico mais provável?',
    options: [
      '(A) Hepatocarcinoma com invasão da via biliar.',
      '(B) Adenocarcinoma pancreático com invasão da via biliar.',
      '(C) Colelitíase complicada com colangite crônica.',
      '(D) Colangiocarcinoma peri-hilar – Tumor de Klatskin.'
    ],
    correctAnswer: 3,
    explanation: 'O colangiocarcinoma peri-hilar (Tumor de Klatskin) é o tumor biliar primário mais comum no hilo hepático, fortemente associado à colangite esclerosante primária.',
    commentary: 'O colangiocarcinoma peri-hilar, ou hilar (chamado tumor de Klatskin), é um tumor maligno da árvore biliar, frequentemente associado à colangite esclerosante primária. Os achados clínicos incluem icterícia progressiva indolor, perda de peso e prurido, além de exames de imagem demonstrando estenose irregular da via biliar com dilatação dos ductos intra-hepáticos. O hepatocarcinoma está usualmente associado a cirrose e nódulos parenquimatosos. O adenocarcinoma pancreático cursa com massa pancreática e sinal de Courvoisier. A colelitíase cursa com quadro febril e álgico mais agudo.',
    reference: 'Rizvi, S., & Gores, G. J. (2013). Pathogenesis, diagnosis, and management of cholangiocarcinoma. Gastroenterology, 145(6), 1215-1229; Khan, S. A., Davidson, B. R. et al. (2012). Guidelines for the diagnosis and treatment of cholangiocarcinoma. Gut, 61(12), 1657-1669.',
    tags: ['Oncologia', 'Gastroenterologia']
  },
  {
    id: 'tp2025-63',
    module: 'Cirurgia',
    text: 'Mulher de 47 anos, etilista crônica, é admitida no PS com dor abdominal intensa em faixa, localizada em epigástrio e irradiando para dorso, associada a náuseas e vômitos há 24 horas. Exame físico: abdome distendido e doloroso à palpação profunda em epigástrio, sem sinais de peritonite. Exames laboratoriais: amilase sérica de 1.200U/L (valor de referência: < 100U/L) e lipase sérica de 1.500U/L (valor de referência: < 160U/L). TC de abdome: aumento difuso do pâncreas, com borramento da gordura peripancreática, mas sem necrose ou coleções líquidas. Qual o diagnóstico mais provável?',
    options: [
      '(A) Úlcera péptica perfurada',
      '(B) Colecistite aguda alitiásica',
      '(C) Pancreatite aguda',
      '(D) Isquemia mesentérica aguda'
    ],
    correctAnswer: 2,
    explanation: 'A associação de dor em faixa no epigástrio, náuseas/vômitos e elevação acentuada de amilase e lipase maior que 3 vezes o valor de referência é diagnóstica de pancreatite aguda.',
    commentary: 'A pancreatite aguda é caracterizada por dor epigástrica de forte intensidade irradiando para o dorso, frequentemente associada a etiologias como etilismo crônico e litíase biliar. A elevação expressiva da amilase e lipase séricas (> 3 vezes o limite superior da normalidade) reforça o diagnóstico. A tomografia computadorizada confirma o acometimento pancreático, evidenciando edema e inflamação peripancreática sem necrose relevante na fase precoce (pancreatite edematosa intersticial).',
    reference: 'Banks, P. A., Bollen, T. L., Dervenis, C., Gooszen, H. G., Johnson, C. D., Sarr, M. G., ... & Vege, S. S. (2013). Classification of acute pancreatitis—2012. Gut, 62(1), 102-111; Tenner, S., Baillie, J., DeWitt, J., & Vege, S. S. (2013). ACG guideline: management of acute pancreatitis. Am J Gastroenterol, 108(9), 1400-1415.',
    tags: ['Gastroenterologia', 'Emergência']
  },
  {
    id: 'tp2025-64',
    module: 'Cirurgia',
    text: 'Homem com 18 anos, soterrado por destroços de desabamento de prédio, foi trazido ao hospital após resgate com fraturas costais à direita, pneumotórax à direita (drenado na sala de emergência), PA 110x60mmHg, FC 100bpm e SpO2 94%. Foi submetido a tomografia contrastada de abdome, que detectou laceração de 3cm e hematoma subcapsular com 8cm no lobo direito do fígado, sem extravasamento de contraste, e discreto líquido livre intra-abdominal. Não há trauma penetrante. Considerando a inexistência de outras lesões significativas, como deve ser conduzido o trauma hepático neste momento?',
    options: [
      '(A) Monitorização clínica e laboratorial.',
      '(B) Laparotomia e hepatectomia direita.',
      '(C) Laparotomia e empacotamento hepático com compressas.',
      '(D) Angiografia e embolização dos ramos envolvidos da artéria hepática direita.'
    ],
    correctAnswer: 0,
    explanation: 'Pacientes estáveis hemodinamicamente com trauma hepático fechado grau III sem extravasamento ativo de contraste (blush) têm indicação de manejo conservador.',
    commentary: 'O trauma hepático deste paciente classifica-se como grau III de acordo com a AAST. O índice de falha do tratamento não-operatório (conservador) para esses graus é muito baixo (< 2%) em pacientes com estabilidade hemodinâmica e sem outros achados cirúrgicos. O debridamento ou empacotamento cirúrgico precipitado pode violar o tamponamento natural e piorar o prognóstico. A intervenção com embolização ou cirurgia estaria indicada se existissem sinais de sangramento ativo com extravasamento de contraste ou instabilidade hemodinâmica refratária.',
    reference: 'Coccolini, F., Coimbra, R., Ordonez, C. et al. Liver trauma: WSES 2020 guidelines. World J Emerg Surg 15, 24 (2020).',
    tags: ['Trauma']
  },
  {
    id: 'tp2025-65',
    module: 'Cirurgia',
    text: 'Homem de 50 anos, com história de cirrose hepática por etilismo, é admitido no hospital com hematêmese volumosa e sinais de instabilidade hemodinâmica. Após estabilização inicial com reposição volêmica e uso de terlipressina, qual deve ser a próxima conduta prioritária?',
    options: [
      '(A) Antibioticoterapia profilática de amplo espectro',
      '(B) Tomografia computadorizada',
      '(C) Endoscopia digestiva alta',
      '(D) Cirurgia para derivação porto-sistêmica'
    ],
    correctAnswer: 2,
    explanation: 'A Endoscopia Digestiva Alta (EDA) é o passo primordial no manejo diagnóstico e terapêutico duma suspeita de hemorragia por varizes esofágicas.',
    commentary: 'A realização precoce da endoscopia digestiva alta (idealmente em menos de 12 horas pós-admissão) é mandatória para identificar a fonte de sangramento (varizes de esôfago) e realizar terapia hemostática (como a ligadura elástica), que possui forte evidência no controle de recidivas imediatas. A antibioticoterapia faz parte do manejo padrão preventivo de PBE, mas a conduta diagnóstica e terapêutica prioritária após estabilização é a EDA. A TC não tem utilidade imediata e a derivação porto-sistêmica é terapia de resgate secundário.',
    reference: 'FELDMAN, Mark et al. Sleisenger and Fordtran’s Gastrointestinal and Liver Disease. 11ª ed. Elsevier, 2021.',
    tags: ['Gastroenterologia', 'Emergência']
  },
  {
    id: 'tp2025-66',
    module: 'Cirurgia',
    text: 'Mulher de 65 anos, previamente hígida, sem comorbidades conhecidas, apresenta anemia ferropriva e alteração do hábito intestinal há três meses, associada a perda ponderal. Realizada uma colonoscopia, que evidenciou lesão vegetante em cólon descendente de 8x8x5cm, cujo exame anatomopatológico revelou um adenocarcinoma. Qual deve ser a próxima conduta?',
    options: [
      '(A) Imunoterapia antes da conduta cirúrgica.',
      '(B) Radioterapia redutora e colectomia esquerda.',
      '(C) Quimioterapia neoadjuvante antes da conduta cirúrgica.',
      '(D) Tomografia de abdome, pelve e tórax para estadiamento.'
    ],
    correctAnswer: 3,
    explanation: 'O estadiamento sistêmico completo com tomografias é mandatório antes da definição terapêutica no câncer de cólon.',
    commentary: 'Após a confirmação diagnóstica do adenocarcinoma de cólon por colonoscopia com biópsia, a conduta imperiosa imediata consiste na realização das TCs de tórax, abdome e pelve para estadiamento do tumor. O estadiamento define o prognóstico e a estratégia terapêutica subsequente (ressecção oncológica curativa vs paliativa). Terapias sistêmicas sistêmicas neoadjuvantes ou adjuvantes não devem ser implementadas sem a avaliação prévia de metástases à distância.',
    reference: 'NCCN Clinical Practice Guidelines in Oncology: Colon Cancer, 2023.',
    tags: ['Oncologia', 'Coloproctologia']
  },
  {
    id: 'tp2025-67',
    module: 'Cirurgia',
    text: 'Homem de 37 anos procurou atendimento de urgência com queixa de dor abdominal difusa e de forte intensidade, associada a diarreia muco-sanguinolenta e febre há dois dias. Refere ter retocolite ulcerativa (RCU), que foi diagnosticada há 5 anos, mas não fez mais acompanhamento ou uso de medicação nos últimos anos. Apresenta-se ao exame físico desidratado, taquicárdico e febril (39°C); abdome globoso, distendido, tenso, doloroso difusamente, com mais intensidade no quadrante inferior direito. Foi realizada tomografia computadorizada do abdome, que revelou dilatação importante do cólon, principalmente nos segmentos ascendente e transverso, sem ponto de obstrução ou pneumoperitônio. Qual a principal hipótese diagnóstica?',
    options: [
      '(A) Neoplasia de cólon',
      '(B) Apendicite aguda',
      '(C) Diverticulite aguda',
      '(D) Megacólon tóxico'
    ],
    correctAnswer: 3,
    explanation: 'O megacólon tóxico é uma complicação inflamatória grave de RCU, caracterizado clinicamente por toxicidade sistêmica associada a dilatação colônica severa (> 6 cm) sem ponto de obstrução.',
    commentary: 'O megacólon tóxico constitui uma complicação com alta taxa de morbimortalidade consequente a doenças inflamatórias intestinais (como a retocolite ulcerativa). Caracteriza-se clinicamente por manifestações de toxicidade grave (febre alta, taquicardia persistente, leucocitose significativa) e evidência imagológica de grande dilatação intestinal, acometendo o cólon ascendente e transverso de modo difuso, na ausência de distúrbio mecânico obstrutor ou perfurativo evidente. Os critérios diagnósticos clássicos apoiam-se no estigma sistêmico delineado por Jalan e colaboradores.',
    reference: 'PROACI – Programa de Atualização em Cirurgia, ciclo 8, volume 1; Tratado de Cirurgia Sabiston 2023.',
    tags: ['Coloproctologia', 'Emergência']
  },
  {
    id: 'tp2025-68',
    module: 'Cirurgia',
    text: 'Homem de 22 anos relata abaulamento na região inguinal direita, que aumenta aos esforços e reduz espontaneamente em repouso. No exame físico, observa-se protrusão palpável na região inguinal ao aumento da pressão intra-abdominal. Qual o mecanismo fisiopatológico mais envolvido na formação desse quadro?',
    options: [
      '(A) Fraqueza da parede posterior do canal inguinal com protrusão do conteúdo abdominal.',
      '(B) Compressão do nervo ilioinguinal, levando a perda de suporte da musculatura.',
      '(C) Falha na oclusão do processo vaginalis, resultando em hérnia congênita.',
      '(D) Desorganização da fáscia transversalis secundária a processos infecciosos prévios.'
    ],
    correctAnswer: 0,
    explanation: 'A fraqueza da parede posterior do canal inguinal (fáscia transversalis no triângulo de Hesselbach) predispõe à protrusão do conteúdo peritoneal, provocando a hérnia inguinal direta.',
    commentary: 'As hérnias inguinais diretas são adquiridas, fundamentando-se no enfraquecimento tissular crônico da fáscia transversalis que delineia a parede posterior do canal inguinal. Fatores de esforço repetitivos exercem estresse direto sob essa fragilidade mecânica. Diverge da hérnia inguinal indireta, que possui caráter congênito por permeabilidade do conduto peritônio-vaginal (falha na oclusão do processo vaginalis). A neuropatia ilioinguinal provoca dor, sem desencadear fraqueza de parede causadora de hérnias.',
    reference: 'ZINNER, Michael J.; ASHLEY, Stanley W. Maingot’s Abdominal Operations. 13ª ed. McGraw-Hill, 2018.',
    tags: ['Hérnias']
  },
  {
    id: 'tp2025-69',
    module: 'Cirurgia',
    text: 'Mulher de 38 anos, com IMC de 42kg/m², hipertensa controlada com três classes de medicamentos, com apneia obstrutiva do sono e sem diabetes mellitus, é encaminhada para equipe multiprofissional, comparecendo ao ambulatório para avaliação pré-operatória de cirurgia bariátrica. Tentou emagrecer com várias dietas e acompanhamento com nutricionistas há quase 10 anos, sem sucesso, por isso manifesta desejo de ser operada. Com base nos critérios da Sociedade Brasileira de Cirurgia Bariátrica e Metabólica (SBCBM), qual a conduta mais indicada para esta paciente?',
    options: [
      '(A) Acompanhamento local com equipe multiprofissional para tentativa de perda de peso, antes de ser encaminhada para cirurgia bariátrica.',
      '(B) Contraindicar a cirurgia bariátrica, pois a paciente deve primeiro atingir um IMC ≥ 50kg/m² para ser considerada candidata ao procedimento.',
      '(C) Proceder com a cirurgia bariátrica, visto que a paciente possui IMC ≥ 40kg/m², independentemente da presença de comorbidades.',
      '(D) Postergar a indicação cirúrgica, pois a paciente apresenta apneia obstrutiva do sono, além de não ser diabética.'
    ],
    correctAnswer: 2,
    explanation: 'Paciente com IMC maior ou igual a 40 kg/m² com longo histórico documentado de falha de tratamento clínico possui indicação direta e protocolar para cirurgia bariátrica, independente de comorbidades.',
    commentary: 'De acordo com as normas emanadas pela diretriz da SBCBM e das sociedades internacionais, o critério estrito de IMC baseia-se na indicação soberana para cirurgia bariátrica em doentes de IMC ≥ 40 kg/m², dispensando a obrigatoriedade da persistência de comorbidades para o avanço operatório. Na faixa entre 35-39,9 kg/m², requer-se a documentação de agravos sistêmicos específicos (que esta doente de fato preenche, vide HAS refratária e apneia do sono). Diante do insucesso mantido por quase dez anos, a liberação para o ato cirúrgico é recomendada.',
    reference: 'Sociedade Brasileira de Cirurgia Bariátrica e Metabólica (SBCBM). Diretrizes para Indicação da Cirurgia Bariátrica, 2021; American Society for Metabolic and Bariatric Surgery (ASMBS) Guidelines, 2022.',
    tags: ['Bariátrica']
  },
  {
    id: 'tp2025-70',
    module: 'Cirurgia',
    text: 'Homem, cisgênero, 60 anos, hipertenso, comparece ao serviço de urgência com dor intensa e súbita em membro inferior direito há 6 horas. Ao exame: ausculta cardíaca com bulhas arrítmicas; membro inferior direito com extremidade fria, pálida, sem pulsos palpáveis e sem alteração de trofismo. Qual conduta mais adequada?',
    options: [
      '(A) Analgesia e anti-inflamatórios, aguardando melhora clínica para posterior avaliação cirúrgica.',
      '(B) Heparinização plena e angiotomografia do membro para decisão terapêutica com urgência.',
      '(C) Doppler arterial e fasciotomia profilática do membro para evitar síndrome compartimental.',
      '(D) Repouso físico e anticoagulação plena por três meses.'
    ],
    correctAnswer: 1,
    explanation: 'Na suspeita clínica de oclusão arterial aguda de membro (isquemia com viabilidade preservada), a conduta imediata consiste em heparinização plena (para cessar propagação do trombo) e angiotomografia urgente.',
    commentary: 'O doente apresenta quadro clássico de Oclusão Arterial Aguda de membro inferior, de importante etiologia provável embólica, sugerida pela associação de dor súbita severa e ritmo cardíaco arrítmico (sugestivo de fibrilamento atrial). A imediata heparinização sistêmica é indispensável para obstar a progressão de novos coágulos na vasculatura. A angiotomografia cervical/abdominal/ilíaco-femoral é fundamental na urgência para programar o desfecho operatório (trombectomia aberta, embolectomia de Fogarty ou terapia endovascular). Medidas conservadoras puras com repouso, sem o tratamento reconstrutivo imediato, estendem o tempo de anóxia tecidual à necrose irrecuperável.',
    reference: 'Rutherfords Vascular Surgery and Endovascular Therapy, 9ª ed., 2018.',
    tags: ['Cirurgia Vascular', 'Emergência']
  },
  {
    id: 'tp2025-71',
    module: 'Cirurgia',
    text: 'Um homem de 68 anos, hipertenso e tabagista de longa data, é levado ao serviço de urgência com queixa de dor abdominal intensa e de início súbito, irradiando para a região lombar. Relata episódios de tontura e sudorese. Ao exame físico, apresenta-se hipotenso (PA 90x60mmHg) e taquicárdico (FC 120bpm). Palpa-se uma massa pulsátil expansiva na região abdominal. Diante deste quadro, qual é a principal hipótese diagnóstica?',
    options: [
      '(A) Isquemia mesentérica aguda',
      '(B) Dissecção de aorta torácica',
      '(C) Aneurisma de aorta abdominal roto',
      '(D) Pancreatite aguda necrosante'
    ],
    correctAnswer: 2,
    explanation: 'A tríade clássica de dor dor abdominal/lombar súbita, hipotensão e palpação de massa abdominal pulsátil expansiva em idoso com fatores de risco cardiovasculares é patognomônica de aneurisma de aorta abdominal roto.',
    commentary: 'O Aneurisma de Aorta Abdominal (AAA) roto constitui emergência urológica e vascular de altíssimo risco de mortalidade imediata. O quadro clínico clássico combina o choque hemodinâmico por hemorragia retroperitoneal maciça com a dor referida na região lombar posterior e o achado palpável de massa pulsátil. A isquemia de mesentério, as dissecções isoladas proximais ou as inflamações agudas do pâncreas não costumam gerar massas pulsáteis expansíveis de caráter perivascular.',
    reference: 'Sociedade Brasileira de Angiologia e Cirurgia Vascular (SBACV) - Projeto Diretrizes; Rutherford’s Vascular Surgery and Endovascular Therapy.',
    tags: ['Cirurgia Vascular', 'Emergência']
  },
  {
    id: 'tp2025-72',
    module: 'Cirurgia',
    text: 'Mulher de 38 anos procura o serviço de emergência com queixa de dor e vermelhidão ao longo de uma veia na perna esquerda há 4 dias. Relata uso recente de anticoncepcional oral. Nega traumas ou cirurgias recentes. Ao exame físico observa-se um cordão endurecido, eritematoso e doloroso ao longo da veia safena magna, sem sinais de edema significativo no membro. Considerando a principal hipótese diagnóstica, qual é a melhor conduta inicial?',
    options: [
      '(A) Anti-inflamatórios não esteroides, compressão elástica e mobilização precoce.',
      '(B) Anticoagulação plena com heparina de baixo peso molecular imediatamente.',
      '(C) Indicar repouso absoluto do membro afetado e antibioticoterapia profilática para evitar infecção secundária.',
      '(D) Realizar punção da veia afetada para aspiração do trombo e reduzir a inflamação local.'
    ],
    correctAnswer: 0,
    explanation: 'A tromboflebite superficial estéril é tratada preferencialmente com medidas conservadoras e sintomáticas: AINEs, terapia compressiva elástica de suporte e estímulo à deambulação ativa.',
    commentary: 'Este caso exibe traços nítidos de tromboflebite superficial da via venosa subcutânea (safena magna), favorecida na mulher jovem sob terapia de anticoncepção oral combinada. Por constituir enfermidade eminentemente imunológica local autolimitada e estéril, o plano de frente abjura o repouso estrito (contra-indicado pelo aumento do estase e risco subsequente de TVP). O alívio decorre de anti-inflamatórios (AINEs), compressão graduada e mobilidade física regular. Anticoagulação formal estaria balizada em caso de proximidade direta ao sistema venoso profundo (< 3-5 cm da crossa de safena) ou lesões com extensão superior a 5 cm.',
    reference: 'Diretrizes do American College of Chest Physicians (ACCP); Sociedade Brasileira de Angiologia e Cirurgia Vascular (SBACV) - Projeto Diretrizes.',
    tags: ['Cirurgia Vascular']
  },
  {
    id: 'tp2025-73',
    module: 'Cirurgia',
    text: 'Homem de 26 anos, vítima de atropelamento, deu entrada no pronto-socorro apresentando tórax instável e respiração paradoxal secundária a fraturas cominutivas em vários arcos costais. Apresentava pneumotórax bilateralmente, que foram drenados no atendimento primário. Foi encaminhado à UTI consciente, respirando espontaneamente e estável hemodinamicamente. Após quatro horas do atendimento, apresentou quadro de insuficiência respiratória aguda progressiva. Qual é a causa mais provável dessa evolução clínica?',
    options: [
      '(A) Tromboembolismo pulmonar maciço',
      '(B) Embolia gordurosa',
      '(C) Broncoaspiração',
      '(D) Contusão pulmonar'
    ],
    correctAnswer: 3,
    explanation: 'A contusão pulmonar resulta do colapso e consolidação hemática alveolar progressiva subsequente ao trauma mecânico volumoso direto sob a caixa torácica, manifestando-se clinicamente no intervalo de 4 a 6 horas.',
    commentary: 'A contusão pulmonar consolida a principal explicação para o desgaste de oxigenação pulmonar nas primeiras horas subsequentes ao ferimento fechado de energia elevada do tórax. Conforme o edema intersticial e a instilação hemática transudativa de alvéolos progride, a troca gasosa degrada-se rumo à insuficiência respiratória aguda hipoxêmica ou hipercápnica. A embolia gordurosa desenha latência de doze a setenta e duas horas após fraturas de esqueleto apendicular (fêmur) com manifestação petequial característica; o TEP clássico exige tempos maiores de estase clínica.',
    reference: 'Advanced Trauma Life Support (ATLS), 10ª edição (2018).',
    tags: ['Trauma', 'Emergência']
  },
  {
    id: 'tp2025-74',
    module: 'Cirurgia',
    text: 'Homem cis, 22 anos, sofre um ferimento por arma branca no precórdio e chega à emergência com sinais de atividade elétrica no monitor cardíaco e ausência de pulsos carotídeos. Qual a abordagem cirúrgica indicada para este paciente?',
    options: [
      '(A) Esternotomia mediana',
      '(B) Toracotomia anterolateral esquerda',
      '(C) Incisão mediana subxifoide',
      '(D) Punção de Marfan'
    ],
    correctAnswer: 1,
    explanation: 'Em parada cardiorrespiratória traumática por tamponamento decorrente de penetração precordial, a toracotomia anterolateral esquerda emergencial é o procedimento imediato de escolha.',
    commentary: 'A toracotomia anterolateral de urgência constitui indicação absoluta na PCR traumática com sinais recentes de vitalidade, pelo rápido acesso que concede para realizar a descompressão imediata do tamponamento cardíaco (janela pericárdica direta), pinçar temporariamente a aorta descendente distal para direcionar fluxo ao cérebro e realizar massagem cardíaca aberta interna de sustentação. A esternotomia mediana exige serras mecânicas e maior tática temporal; a abertura mediana subxifoide não concede acessibilidade reconstrutiva adequada e a punção tem papel apenas temporário propedêutico.',
    reference: 'Hromalik LR Jr, Wall MJ Jr, Mattox KL, Tsai PI. Penetrating cardiac injury: a narrative review. Mediastinum. 2023.',
    tags: ['Trauma', 'Emergência']
  },
  {
    id: 'tp2025-75',
    module: 'Cirurgia',
    text: 'Mulher, 24 anos, deu entrada no pronto-socorro com quadro de dor lombar esquerda de forte intensidade, associada a vômitos, inapetência e mal-estar há 4 dias. Ao exame físico: regular estado geral, desidratada +/4, febril 38.5ºC, frequência cardíaca 120bpm, pressão arterial 110/70mmHg. Abdômen flácido e indolor, com dor à percussão lombar à esquerda. Exames laboratoriais: hemograma com leucocitose e desvio à esquerda, leucocitúria e hematúria. Tomografia de abdômen: cálculo de 2x1cm na junção ureterovesical esquerda, com hidronefrose. Qual a conduta adequada neste caso?',
    options: [
      '(A) Drenagem renal com implante de cateter duplo “J” e antibioticoterapia.',
      '(B) Antibioticoterapia e revaliação em 48 horas para planejar a ureterolitotripsia endoscópica.',
      '(C) Ureterolitotripsia endoscópica e colocação de duplo “J” na urgência.',
      '(D) Analgesia e alfabloqueador na tentativa de expulsão espontânea do cálculo por 72 horas.'
    ],
    correctAnswer: 0,
    explanation: 'A litíase obstrutiva renal complicada com infecção sistêmica ativa (pielonefrite obstrutiva) impõe descompressão renal imediata por cateter duplo “J” ou nefrostomia percutânea combinada a antibioticoterapia venosa para conter o choque séptico.',
    commentary: 'Este caso delineia quadro de Pielonefrite Obstrutiva por cálculo aprisionado na JUV. A existência de febre, taquicardia severa e leucocitose com desvio esquerdo traduz a vigência de infecção sistêmica ativa em parênquima renal aprisionado. A retardo da drenagem ou pretensão de remoção endoscópica imediata do cálculo (ureterolitotripsia) com bombas de irrigação hídrica positiva propicia translocação bacteriana bacterêmica direta do urotélio. A conduta salvadora reside na implantação imediata de cateter descompressivo Duplo J sob antibioticoterapia de amplo espectro, reprogramando a fragmentação do cálculo para oclusão tardia pós-infecciosa.',
    reference: 'Assimos D, Krambeck A, Miller NL, Monga M, Murad MH, Nelson CP, et al. Surgical Management of Stones: American Urological Association/Endourological Society Guideline, PART II. Journal of Urology. 2016.',
    tags: ['Urologia', 'Emergência']
  },
  {
    id: 'tp2025-76',
    module: 'Cirurgia',
    text: 'Homem, 25 anos, comparece ao pronto-socorro com queixa de dor em região escrotal há 3 horas, de início súbito e intensidade progressiva. Nega trauma local ou esforço físico associado. Ao exame, testículo direito normal, testículo esquerdo elevado, aumentado de tamanho e horizontalizado (sinal de Angel positivo), com dor intensa à manipulação. Qual o diagnóstico e a melhor conduta?',
    options: [
      '(A) Epididimite aguda; ultrassonografia com Doppler',
      '(B) Torção testicular; cirurgia de urgência',
      '(C) Torção testicular; ultrassonografia com Doppler',
      '(D) Epididimite aguda; analgesia e antibioticoterapia'
    ],
    correctAnswer: 1,
    explanation: 'Em homens jovens, a suspeita clínica inequívoca de torção testicular impõe a imediata exploração cirúrgica emergencial para tentativa de preservação biológica da gônada, abdicando de tardar por exames de imagem.',
    commentary: 'A instalação de dor testicular súbita violenta, no paciente jovem, acompanhada de retração anatômica para ápice escrotal e horizontalização (sinal de Angel clássico positivo) consolida o diagnóstico de Torção Testicular (isquemia arterial testicular). Trata-se de uma emergência cirúrgica máxima com margem de ouro inferior a 6-12 horas da dor para resgatar a fertilidade. Diante da apresentação descrita, o médico deve guiar a indicação cirúrgica aberta direta, ignorando exames propedêuticos longitudinais (como o Ultrassom com Doppler) sob pena de agravar a isquemia e inviabilizar o desfecho.',
    reference: 'Manual de Residência em Urologia; Marcos Dall’Oglio; Editora Manole - 2021; Campbell-Walsh Urologia; 12ª edição, 2018.',
    tags: ['Urologia', 'Emergência']
  },
  {
    id: 'tp2025-77',
    module: 'Cirurgia',
    text: 'Mulher de 50 anos, com diabetes mellitus tipo 2 descompensada, deu entrada no hospital com quadro de dor perianal e febre há 2 dias, sem sangramentos. Nega episódios anteriores semelhantes. Foi apendicectomizada há um ano. Ao exame físico, apresenta presença de tumor e sinais flogísticos e crepitação no períneo. A dor impossibilitou o toque retal. A hipótese diagnóstica mais provável é:',
    options: [
      '(A) Vulvovaginite',
      '(B) Fissura anal',
      '(C) Síndrome de Fournier',
      '(D) Hemorroidas trombosadas'
    ],
    correctAnswer: 2,
    explanation: 'A Síndrome de Fournier consiste em uma fasciite bacteriana necrotizante altamente invasiva que acomete o tecido celular subcutâneo do abdome e períneo, apresentando-se com crepitação ao toque e febre em doentes vulneráveis (diabéticos descompensados).',
    commentary: 'A Síndrome de Fournier (gangrena sinérgica necrotizante perineal) é uma emergência infecciosa em cirurgia. É potenciada por desequilíbrio imunossupressor do diabetes mellitus em portadores de focos proctológicos profundos invisíveis (como abscessos de fossas isquiorretais). O indicativo físico patognomônico é a crepitação tecidual local, reflexo da produção de hidrogênio e compostos moleculares gasosos por bacilos anaeróbias. Impõe ampla ressecção tecidual desbridante mecânica com antibioticoterapia agressiva de amplo espectro.',
    reference: 'Rev. Bras. Cir. Plást. 2012;27(4):600-4; Adson, Ciências da Saúde, Volume 29 - Edição 142/JAN 2025.',
    tags: ['Infectologia', 'Emergência']
  },
  {
    id: 'tp2025-78',
    module: 'Cirurgia',
    text: 'Recém-nascido prematuro, 32 semanas de idade gestacional, com 14 dias de vida, apresenta há 24 horas distensão abdominal progressiva, intolerância alimentar, letargia, instabilidade térmica e hemodinâmica, emese biliar, hematoquezia discreta, diminuição da consistência das fezes e episódios de apneia. Ao exame físico: abdome distendido e tenso, minimamente doloroso à palpação. O RX abdominal revela pneumatose intestinal, sem pneumoperitônio. Com o provável diagnóstico em mente, qual a conduta mais apropriada para este caso?',
    options: [
      '(A) Antibioticoterapia e cirurgia imediata.',
      '(B) Jejum, alimentação parenteral, antibioticoterapia de amplo espectro e suporte clínico.',
      '(C) Amamentação exclusiva de leite materno, antibioticoterapia profilática e suporte clínico.',
      '(D) Cirurgia eletiva após estabilização clínica e controle da infecção intestinal.'
    ],
    correctAnswer: 1,
    explanation: 'O tratamento inicial para Enterocolite Necrotizante (Estágio II de Bell pela pneumatose sem pneumoperitônio) baseia-se em jejum restritivo de repouso alçar, NPT, sonda descompressora e dorgas bactericidas.',
    commentary: 'A detecção radiológica de pneumatose intestinal (presença de gás circunscrito na submucosa ou subserosa de alças do cólon/íleo) consolidada pelos sinais de distensão e emese biliar no prematuro é diagnóstica da Enterocolite Necrotizante (ECN). Para o Estágio Bell II (doença moderada sem perfuração mecânica constatada via pneumoperitônio), a abordagem prioritária padrão assenta-se no tratamento clínico rigoroso preservando o coto por intermédio do repouso entérico (jejum por 7 a 14 dias), administração de coloides parenterais e terapia por antibióticos empíricos amplos. Resoluções cirúrgicas (laparotomia/drenagem) são exclusivas de ocorrência de peritonites severas ou pneumoperitônio franco.',
    reference: 'Tratado de pediatria / organização Sociedade Brasileira de Pediatria. - 6. ed. - Barueri [SP]: Manole, 2025; Xiong T, Maheshwari A, Neu J, Ei-Saie A, Pammi M. An overview of systematic reviews for preventing necrotizing enterocolitis. Neonatology. 2020.',
    tags: ['Cirurgia Pediátrica', 'Neonatologia']
  },
  {
    id: 'tp2025-79',
    module: 'Cirurgia',
    text: 'Recém-nascido do sexo masculino, parto normal expulsivo, sem acompanhamento pré-natal, 12 hours de vida, com abdome distendido, irritado e ausência de eliminação de mecônio. Visivel malformação da impressão anal no períneo com impossibilidade de passagem de sonda Levine de 6 French. Qual a melhor conduta inicial a ser tomada para este recém-nascido?',
    options: [
      '(A) Realizar exame físico cuidadoso procurando outras malformações e solicitar radiografia em posição invertida, com marcador metálico na impressão anal (invertograma).',
      '(B) Prescrever pró-cinético e laxativos por sonda nasoenteral, para poder avaliar a possibilidade de fístulas digestivas/urinárias associadas.',
      '(C) Indicar prontamente anuscopia com sedação em ambiente cirúrgico para confirmação diagnóstica.',
      '(D) Laparotomia exploradora imediata por acesso transverso supraumbilical e correção primária das malformações anorretais.'
    ],
    correctAnswer: 0,
    explanation: 'Na suspeição de malformação anorretal, a conduta clínica inicial assenta-se no despiste sindrómico de defeitos congênitos adicionais e na feitura do invertograma após 12-24 horas do nascimento para avaliar o nível do coto retal.',
    commentary: 'A hipótese recai sobre uma Malformação Anorretal (MAR) com ânus imperfurado. Exames de imagem diagnósticos iniciais como o invertograma (radiografia na posição invertida com referencial radiopaco metálico em ranhura perineal) ou a ecografia transperineal permitem classificar a altura da fístula anorretal (alta vs média vs baixa) e estruturar a conduta (anoplastia primária imediata no períneo nas baixas ou colostomia de proteção proximal antes da cirurgia corretiva definitiva nas altas). O uso de laxantes na vigência de obstrução digestiva é proscrito.',
    reference: 'Cirurgia pediátrica volume II, 2ª. Edição, João Gilberto Maksoud cap.73; Tratado de Clínica Pediátrica. 3ª edição. Lisboa: Círculo Médico, 2022.',
    tags: ['Cirurgia Pediátrica', 'Neonatologia']
  },
  {
    id: 'tp2025-80',
    module: 'Cirurgia',
    text: 'Lactente, sexo masculino, primogênito, com 20 dias de vida, é levado ao pronto atendimento infantil devido a episódios frequentes de vômitos não biliosos, em jato, ocorrendo logo após as mamadas. A mãe refere que a criança permanece irritada e chorosa após os episódios, retornando ao seio materno a cada hora. Ao exame físico, notam-se hiperperistalse gástrica e massa palpável no quadrante superior direito do abdome. O diagnóstico mais provável é:',
    options: [
      '(A) Atresia de esôfago',
      '(B) Refluxo gastroesofágico',
      '(C) Atresia duodenal',
      '(D) Estenose hipertrófica do piloro'
    ],
    correctAnswer: 3,
    explanation: 'A tríade clássica de vômitos gástricos frequentes (em jato não bilioso), ondas de peristaltismo estomacal visíveis e palpação de oliva pilórica em lactente de poucas semanas é diagnóstica de Estenose Hipertrófica do Piloro.',
    commentary: 'A Estenose Hipertrófica do Piloro (EHP) é uma desordem de obstrução esvaziadora gástrica na infância (com predileção por primogênitos do sexo masculino na 2ª à 6ª semana). A clínica reside sob a expressão clássica de vômitos repetitivos profusos (não biliosos pela barreira pilórica pré-duodenal) e palpação da glândula pilórica hipertrofiada ("oliva pilórica") no epigástrio. O tratamento baseia-se na estabilização de distúrbio metabólico (alcalose hipoclorêmica e hipopotassêmica) seguido de cirurgia (piloromiotomia de Fredet-Ramstedt).',
    reference: 'Tratado de pediatria / organização Sociedade Brasileira de Pediatria. - 6. ed. - Barueri [SP] : Manole, 2025.',
    tags: ['Cirurgia Pediátrica', 'Neonatologia']
  },
  {
    id: 'tp2021-61',
    module: 'Cirurgia',
    text: 'Recém-nascido de termo, sexo masculino, com cinco dias de vida, recebeu alta hospitalar com 36 horas de vida. A mãe refere que estava aceitando bem o leite materno, mas tem vomitado nas últimas 24 horas. O vômito inicialmente era de leite, mas agora está levemente esverdeado. Hoje evacuou pela primeira vez na vida, uma pequena quantidade de mecônio. Ao exame físico o bebê está em bom estado geral, hidratado e corado, FC 125 bpm, FR 38 ipm. O abdome está distendido, sem massas palpáveis e sem reação peritoneal. O exame do períneo mostra ânus tópico e há saída de grande quantidade de mecônio, de modo explosivo, após a realização de estímulo retal. O diagnóstico mais provável e a conduta mais adequada neste momento são:',
    options: [
      '(A) Enterocolite necrosante / cirurgia de emergência.',
      '(B) Doença de Hirschsprung / enteroclisma.',
      '(C) Atresia duodenal / cirurgia de emergência.',
      '(D) Estenose hipertrófica de piloro / piloromiotomia.'
    ],
    correctAnswer: 1,
    explanation: 'Recém-nascido com atraso na eliminação de mecônio, distensão abdominal progressiva, vômitos biliosos e saída explosiva de mecônio após toque retal tem quadro clássico de Doença de Hirschsprung. A conduta inicial é o alívio obstrutivo com enteroclisma.',
    commentary: 'A principal hipótese diagnóstica para este caso é a Doença de Hirschsprung (ou aganglionose congênita do cólon). Esta malformação congênita, caracterizada pela ausência das células ganglionares dos plexos nervosos do intestino terminal, acomete tipicamente recém-nascidos a termo, levando a um quadro clínico de obstrução intestinal baixa (uma das principais causas de obstrução intestinal no período neonatal). Na história clínica, encontramos elementos que sugerem fortemente este diagnóstico, tais como o atraso na eliminação do mecônio (>48 horas), evacuações em pequena quantidade e em menor frequência, eliminação de fezes explosivas após estímulo retal (sinal clínico clássico desta doença), além da progressiva evolução para obstrução intestinal (baixa aceitação da dieta, distensão abdominal progressiva e vômitos). A conduta neste momento deve ser a realização de lavagem intestinal com SF0,9% morno, para o alívio da obstrução intestinal. Após isto, inicia-se a investigação diagnóstica através de exames complementares específicos (manometria anorretal, enema opaco e biópsia retal). Após a confirmação diagnóstica, o tratamento cirúrgico é indicado, através da técnica cirúrgica de abaixamento de colonendorretaltransanal (procedimento de De La Torre-Mondragon). A atresia duodenal cursa com vômitos bilaterais desde as primeiras horas; a enterocolite acomete marcadamente prematuros graves com descompensação sistêmica e fezes hemorrágicas; a estenose de piloro manifesta-se entre a 3ª e 6ª semana com vômitos não-biliosos.',
    reference: 'Cirurgia Pediátrica – Teoria e Prática. João Carlos Ketzer de Souza. 1ª edição – Ed. Roca – 2008. Cirurgia Pediátrica – João Gilberto Maksoud. 2ª edição – Ed. Revinter – 2003.',
    tags: ['Cirurgia Pediátrica', 'Neonatologia']
  },
  {
    id: 'tp2021-62',
    module: 'Cirurgia',
    text: 'Menino, 2 anos, é trazido à consulta de rotina com relato de que um dos testículos não está na bolsa escrotal. Não há história de trauma ou cirurgia prévia. A mãe relata que nunca prestou atenção se os testículos estavam antes na bolsa escrotal. Exame físico: testículo direito palpável na região inguinal, testículo esquerdo tópico; boa exposição da glande. A conduta é:',
    options: [
      '(A) Ultrassom para posterior definição de cirurgia.',
      '(B) Indicação de cirurgia o mais breve possível.',
      '(C) Reavaliação semestral até 5 anos de idade.',
      '(D) Testosterona para estimular a descida testicular.'
    ],
    correctAnswer: 1,
    explanation: 'Criança de 2 anos com distopia testicular unilateral persistente (criptorquidia palpável na região inguinal) apresenta indicação formal de correção cirúrgica o mais breve possível por já ter passado da idade limiar de descida espontânea.',
    commentary: 'A distopia testicular pode se manifestar de várias maneiras, como testículo palpável em região inguinal, testículos retráteis e testículo não palpável, podendo ter abordagens diferentes de acordo com a idade da criança e os achados de exame físico. A literatura mais recente mostra a indicação cirúrgica ideal a partir de 6 meses de vida, de modo que aos 2 anos de idade, a correção cirúrgica por orquidopexia deve ser estabelecida o quanto antes para prevenir danos à linhagem celular germinativa, infertilidade futura e malignização das células germinativas. A terapia hormonal para casos de criptorquidia é controversa, com discrepância nos resultados apresentados, e com poucas indicações, não sendo usada rotineiramente. Alguns dos hormônios, que apresentam resultados variáveis na literatura, são: Gonadotrofina Coriônica humana (hCG), hormônio liberador de hormônio luteinizante (LHRH), análogo sintético LHRH - spray nasal. Ultrassonografia não altera a necessidade de exploração e posicionamento cirúrgico de testículo nitidamente palpável no canal inguinal.',
    reference: 'Carnevale, J; Miranda E.G; Silveira A.E; Tiburcio, M.A. Tratado de Urologia Pediátrica. Editora Sparta. Holcomb, G. Ascraft Cirurgia Pediátrica. 6ª edição. Elsevier 2017. Maksoud, J.G. Cirurgia Pediátrica / vol II. 2ª Edição. RJ: Revinter 2003.',
    tags: ['Urologia Pediátrica', 'Cirurgia Pediátrica']
  },
  {
    id: 'tp2021-63',
    module: 'Cirurgia',
    text: 'Paciente de 46 anos, masculino, usa fluoxetina 20 mg/dia. Vítima de queda de bicicleta, deu entrada no pronto socorro, consciente, deambulando, com vários pequenos ferimentos superficiais em membros inferiores e superiores necessitando múltiplas suturas. Recebeu por via venosa 1 g de cefalotina e 100 mg de cetoprofeno. Durante a realização das suturas, apresenta inquietação, vertigem, zumbido, fala arrastada e culminando em convulsão tônico-clônica. O diagnóstico para este caso é de:',
    options: [
      '(A) Reação alérgica ao antibiótico.',
      '(B) Intoxicação por antidepressivos.',
      '(C) Sobredose de anestésico local.',
      '(D) Interação medicamentosa (antidepressivo e anti-inflamatório).'
    ],
    correctAnswer: 2,
    explanation: 'A progressão clássica de sinais neurológicos excitatórios (inquietação, vertigem, zumbido, fala arrastada) seguidos de convulsão tônico-clônica generalizada durante ou logo após infiltração de lidocaína é patognomônica de toxicidade sistêmica / sobredose de anestésico local.',
    commentary: 'O aumento das concentrações plasmáticas de anestésicos locais por absorção rápida sistêmica ou injeção intravascular acidental direta está associado inicialmente com inquietação e vertigem, zumbido, fala arrastada culminando em convulsões tônico-clônicas de difícil controle. As convulsões podem ser seguidas de severa depressão do sistema nervoso central (apneia) e colapso cardiocirculatório/morte, caso não ocorra intervenção rápida com ventilação com oxigênio a 100%, anticonvulsivantes e emulsão lipídica. Não se trata de reação ao antibiótico (que geraria rash, broncoespasmo ou anafilaxia) ou efeito isolado do uso crônico regular de fluoxetina.',
    reference: 'MILLER, RD. Bases da anestesia, 7ª ed. Ed. Elsevier, 2019.',
    tags: ['Anestesiologia', 'Emergência']
  },
  {
    id: 'tp2021-64',
    module: 'Cirurgia',
    text: 'Menino, 10 anos, no 1º dia pós-operatório de apendicectomia por apendicite aguda perfurada, sonolento e hipoativo há 2 horas. A mãe relata que, antes disso, apresentou 3 episódios de vômitos, de conteúdo bilioso, em grande quantidade. Desde o momento da cirurgia, encontra-se em jejum e ainda não evacuou, mas está eliminando flatos. Hoje urinou apenas uma vez, em pequena quantidade, urina de cor amarelo escura. Exame físico: regular estado geral, hipoativo, descorado 2+/4, anictérico, com turgor pastoso. T = 37,2 ºC, FC = 106 bpm, FR = 15 irpm, PA = 100 x 70 mmHg. Abdome: ruídos hidro aéreos propulsivos, com dor à palpação profunda da região próxima à ferida cirúrgica, sem reação peritoneal. O diagnóstico é:',
    options: [
      '(A) Desidratação aguda.',
      '(B) Abscesso intracavitário.',
      '(C) Abdome agudo obstrutivo.',
      '(D) Choque séptico.'
    ],
    correctAnswer: 0,
    explanation: 'Idoso ou criança em pós-operatório sob jejum com perdas por vômitos volumosos, exibindo letargia, turgor cutâneo pastoso, oligúria concentrada e taquicardia compensatória na vigência de pressão arterial mantida preenche critérios de desidratação aguda.',
    commentary: 'Desidratação aguda é uma complicação pós-operatória bastante comum. Neste caso, tanto a resposta inflamatória do processo abdominal, levando à perda de líquido para o compartimento extravascular, quanto os vômitos apresentados pelo paciente, explicam esta complicação. Além disso, o paciente encontra-se em jejum desde a cirurgia, possivelmente com reposição hídrica endovenosa insuficiente. São sinais clínicos da desidratação, a sonolência e a hipoatividade, a desidratação das mucosas, a taquicardia e a urina em pequeno volume e de aspecto concentrado. Apesar de apresentar taquicardia, o paciente não apresenta taquipneia, nem hipotensão arterial, afastando o diagnóstico de choque, tanto hemorrágico, quanto séptico. Além disso, a criança não apresenta reação peritoneal ao exame abdominal ou febre exuberante, afastando o diagnóstico de abscesso intracavitário precoce. Apesar dos vômitos esverdeados e da ausência de evacuações desde a cirurgia, há a presença de ruídos hidroaéreos propulsivos e eliminação de flatos, afastando o diagnóstico de abdome agudo obstrutivo.',
    reference: 'Carlotti APCP. Choque em crianças. Medicina (Ribeirão Preto) 2012; 45(2):197-207. Spadella CT. Pós-operatório. In: Cataneo AJM, Kobayasi S. Clínica cirúrgica. Faculdade de Medicina de Botucatu – UNESP. Elsevier 2003. 254-61.',
    tags: ['Cirurgia Pediátrica', 'Pós-Operatório']
  },
  {
    id: 'tp2021-65',
    module: 'Cirurgia',
    text: 'Mulher, 60 anos, com áreas de hiperpigmentação em bota no terço inferior de perna esquerda, pele ressecada e descamativa, úlcera de aproximadamente 5 cm com bordas irregulares e escavadas. Veias dilatadas bilateralmente e pulsos normais. Nega dor local. Além de curativo, a conduta é:',
    options: [
      '(A) Elasto-compressão.',
      '(B) Antibioticoterapia.',
      '(C) Repouso em céfalo-aclive.',
      '(D) Safenectomia.'
    ],
    correctAnswer: 0,
    explanation: 'A úlcera com hiperpigmentação ocre ao redor em região maleolar com pulsos distais preservados representa insuficiência venosa crônica. O pilar terapêutico para reverter a hipertensão venosa é a terapia elastocompressiva (elasto-compressão).',
    commentary: 'As características apresentadas para a lesão são compatíveis com úlcera de origem venosa. O mecanismo fisiopatológico consiste em hipertensão venosa nos capilares cutâneos, devido à insuficiência venosa (refluxo venoso pelas veias insuficientes), com subsequente edema, translocação de hemácias com deposição de hemossiderina (hiperpigmentação em bota), processo inflamatório cutâneo crônico e lesão. Para regressão do quadro deve-se reduzir a pressão através de elasto-compressão da perna e curativos locais. A paciente precisa evitar quaisquer posições que dificultem o retorno venoso, pois contribuirão para a manutenção do edema e, consequente, piora do quadro (por isso o céfalo-aclive ou posições declives prolongadas são proscritos). A paciente não apresenta dados que sugiram infecção (dor aguda forte, calor, hiperemia local franca em ascensão e secreção fétida), portanto não há indicação imediata para antibioticoterapia sistêmica.',
    reference: 'BRITO, C.J. et al. Cirurgia Vascular: Cirurgia Endovascular, Angiologia. 4ª ed. Rio de Janeiro: Dilivros, 2020.',
    tags: ['Cirurgia Vascular']
  },
  {
    id: 'tp2021-66',
    module: 'Cirurgia',
    image: '/images/tp2021-66.PNG',
    text: 'Paciente comparece ao ambulatório após realização de ponte de safena com o seguinte achado de exame físico: área de deiscência total de pele, com granulação no subcutâneo subjacente. Hiperemia leve ao redor da ferida e edema do membro. A enfermeira solicita avaliação em relação à ferida cirúrgica. Pode-se afirmar:',
    options: [
      '(A) O ferimento está em fase retardada de cicatrização, com risco elevado de desenvolver infecção secundária de ferida cirúrgica. Introduzir antibioticoterapia de largo espectro por 10 dias.',
      '(B) O ferimento está em fase avançada de granulação (cicatrização por segunda intenção), sem sinais de infecção local. Manter a aplicação de curativos oclusivos.',
      '(C) O ferimento está com aspecto infeccioso, com hiperemia e exsudação do leito da ferida. Realizar desbridamento cirúrgico e introduzir antibioticoterapia para germes Gram positivos por 14 dias.',
      '(D) Deiscência recente de pele e subcutâneo com exposição muscular, sem sinais de infecção. Limpeza e desbridamento da ferida, reavivamento de bordas e ressutura da pele.'
    ],
    correctAnswer: 1,
    explanation: 'Deiscência crônica de ferida de safenectomia apresentando leito composto exclusivamente por tecido de granulação vermelho maduro e plano, sem secreção purulenta grosseira e sem sinais inflamatórios sistêmicos, deve ser tratada conservadoramente apenas com curativos oclusivos protetores.',
    commentary: 'Deiscência profunda (pele e subcutâneo) após cirurgia de retirada de safena. Já se percebe completa granulação do subcutâneo, sem exsudação importante e sem sinais inflamatórios ao redor da ferida. Nestes casos o tratamento é manter limpeza adequada e curativos oclusivos, preferencialmente os de longa duração entre as trocas, como as placas de hidrocoloide e permitir a completa cicatrização por segunda intenção. A boa granulação do leito mostra que o ferimento não é recente, não há exsudação, coleções purulentas ou restos necróticos e por se tratar de fase tardia de cicatrização por segunda intenção não há necessidade de retornar ao centro cirúrgico e ressutura, como seria feito se a deiscência fosse precoce, cruenta e limpa.',
    reference: 'Sabiston - Cap 13 - Surgical Complications, p. 282-288.',
    tags: ['Pós-Operatório', 'Cirurgia Geral']
  },
  {
    id: 'tp2021-67',
    module: 'Cirurgia',
    image: '/images/tp2021-67.PNG',
    text: 'Homem, 57 anos, apresenta queixa de dor abdominal em hipocôndrio direito há cinco dias, associado a náuseas e vômitos. Comorbidades: hipertenso e diabético. Exame físico: mau estado geral, confuso, sudoreico, ictérico 2+/4+, T = 38 ºC, FC = 130 bpm, SaO2 ar ambiente = 95%, tempo de enchimento capilar > 2 segundos, PA = 70 x 45 mmHg. Abdome flácido, dolorido em hipocôndrio direito, ruídos hidroaéreos presentes. Exames laboratoriais e tomografia apresentados abaixo. O diagnóstico, a síndrome e a conduta são, respectivamente:',
    options: [
      '(A) Colecistite; síndrome colestática; colecistectomia videolaparoscopica de urgência.',
      '(B) Colangite; pentalogia de Reynolds; estabilização hemodinâmica e colangiopancreatografia endoscópica retrógrada.',
      '(C) Colangite; tríade de Charcot; estabilização hemodinâmica e colangiopancreatografia endoscópica retrógrada.',
      '(D) Pancreatite; choque hipovolêmico; estabilização hemodinâmica e ressonância magnética de vias biliares.'
    ],
    correctAnswer: 1,
    explanation: 'A ocorrência conjunta de transtorno obstrutivo biliar agudo com febre, icterícia, dor em hipocôndrio direito (tríade de Charcot) associados a hipotensão refratária e alteração do nível de consciência compõe a Pêntade de Reynolds (colangite grave supurada). A conduta é suporte circulatório hemodinâmico urgente e desobstrução rápida biliar por CPER.',
    commentary: 'Paciente com dor abdominal, febre e icterícia (tríade de Charcot) apresenta os sinais clássicos de colangite aguda ascendente obstrutiva, ocasionada na imensa maioria das vezes por cálculo impactado em colédoco distal, gerando estase e proliferação bacteriana. Com a evolução sistêmica rápida da infecção, o paciente cursa com confusão mental e instabilidade hemodinâmica severa (choque séptico / tempo de enchimento prolongado), preenchendo todos os cinco critérios diagnósticos da Pêntade de Reynolds. Nesses casos de extrema gravidade, a conduta iminente deve ser a estabilização hemodinâmica robusta e a desobstrução imediata de via biliar através de drenagem biliar endoscópica ou colangiopancreatografia endoscópica retrógrada (CPER) de urgência para descompressão local.',
    reference: 'SABISTON. Tratado de cirurgia: a base biológica da prática cirúrgica moderna. 19. ed. Elsevier, 2014. 2240p.',
    tags: ['Vias Biliares', 'Gastroenterologia', 'Emergência']
  },
  {
    id: 'tp2021-68',
    module: 'Cirurgia',
    text: 'Homem, 60 anos, pintor e pedreiro, procura por atendimento médico ambulatorial queixando-se de dor na região ântero-lateral do ombro direito há quatro meses. Refere que a dor é de intensidade moderada e irradia para região lateral do braço, piorando com movimentos e à noite. Refere alívio parcial com analgésicos e anti-inflamatórios não hormonais. Exame físico: diminuição de força da elevação lateral (abdução) do ombro direito. O diagnóstico mais provável é:',
    options: [
      '(A) Radiculopatia cervical.',
      '(B) Luxação de ombro.',
      '(C) Capsulite adesiva de ombro.',
      '(D) Síndrome do manguito rotador.'
    ],
    correctAnswer: 3,
    explanation: 'Idoso com histórico de atividade laboral repetitiva acima da cabeça (pintor/pedreiro) que apresenta dor no ombro com irradiação mecânica lateral, dor de predomínio noturno e fraqueza focal na abdução do membro apresenta lesão compatível com a Síndrome do Manguito Rotador.',
    commentary: 'A dor na articulação do ombro é uma das queixas mais frequentes nos consultórios ortopédicos e pode ser causada por diversas patologias, provenientes dos componentes da cintura escapular (osso, cartilagem, músculo, tendão, bolsa sinovial ou ligamento) ou irradiadas de outras regiões (como radiculopatia). O manguito rotador do ombro é formado por quatro músculos (supraespinhal, infraespinhal, redondo menor e subescapular) e os seus respectivos tendões, que se originam na escápula e se inserem na região proximal do úmero. Atuam na estabilização e movimentação ativa da articulação do ombro. A lesão de um tendão ou mais deste conjunto é chamada de síndrome do manguito rotador, caracterizada clinicamente por dor exacerbada com mobilidade ativa e noturna, e perda de força específica (como no teste de Job que avalia o supraespinhal). Patologias como artrose ou capsulite adesiva causam perda generalizada de mobilidade ativa e passiva uniforme.',
    reference: 'Sella GV, Miyazaki AN, Checchia SL. Lesão do Manguito Rotador. In: Reis FBD, Santili C, Barros Filho TEPD. Série Ortopedia e Traumatologia Fundamentos e Prática: Ortopedia do Adulto. 1. ed. São Paulo: Atheneu, 2019. p. 127-134.',
    tags: ['Ortopedia', 'Medicina do Trabalho']
  },
  {
    id: 'tp2021-69',
    module: 'Cirurgia',
    text: 'Homem, 50 anos, refere sangramento de cor vermelho “vivo” associado à evacuação, não misturado às fezes, há 1 semana. Relata também dor e abaulamento da região anal com concomitante prurido e ardência local. Ao exame físico: nodulação azulada/vinhosa, dolorosa ao toque, mas redutível com a manobra digital. A conduta é:',
    options: [
      '(A) Escleroterapia.',
      '(B) Crioterapia.',
      '(C) Hemorroidectomia.',
      '(D) Ligadura elástica.'
    ],
    correctAnswer: 3,
    explanation: 'Na hemorroida interna que prolapsa sob esforço mas recua de forma redutível manualmente (Grau III), aliada a sangramento episódico vermelho vivo na evacuação, o tratamento ambulatorial intervencionista preferencial de primeira linha é a ligadura elástica.',
    commentary: 'Na doença hemorroidária, o sangramento é o sintoma mais comum e, na grande maioria das vezes, não é volumoso e sim intermitente e de pequena monta. O aumento crônico do esforço evacuatório aumenta a possibilidade de surgimento do prolapso hemorroidário devido à flacidez e relaxamento do tecido conjuntivo de fixação do canal anal. Quando há dor aguda persistente, deve-se afastar trombose hemorroidária. Existem várias formas de tratamento ambulatorial para hemorróidas internas: ligadura elástica, escleroterapia, crioterapia, coagulação infravermelha e laser. A ligadura elástica como método de escolha para o tratamento de hemorróidas internas, é o procedimento mais seguro e aceito na literatura médica para o tratamento do sangramento de repetição e prolapso nos graus I, II e III, mostrando melhores resultados consolidados a longo prazo, menor dor pós-procedimento quando comparado ao cirúrgico completo e baixas taxas de recidiva.',
    reference: 'TOWNSEND, CM et al. Sabiston, tratado de Cirurgia: a base biológica da moderna prática cirúrgica. 20ª ed. Rio de Janeiro: Elsevier, 2019.',
    tags: ['Coloproctologia', 'Ambulatório']
  },
  {
    id: 'tp2021-70',
    module: 'Cirurgia',
    text: 'Homem de 68 anos de idade, procura a emergência com dor abdominal em mesogastro de forte intensidade, início súbito, há 6 horas, não melhorando após o uso de medicação oral. Refere quadros semelhantes de menor intensidade há 6 meses. Nega alteração de hábito intestinal. Faz uso de antidepressivo e antiarrítmico. Ao exame físico: afebril, anictérico, pressão arterial 95 X 60 mmHg, frequência cardíaca 125 bpm, ritmo cardíaco irregular, abdome distendido, doloroso, difusamente, sem sinais de irritação peritoneal com ruídos hidroaéreos diminuídos. Exames complementares: Hemoglobina 11 g/dL. Leucócitos 12.500/mm, 2% bastões e 30% segmentados, plaquetas 400.000 mm, amilase 65 U/I (normal até 55 U/I), lipase 125 U/I (normal até 60 U/I). Radiografia simples de abdome com distensão de alças de jejuno e íleo, sem pneumoperitônio. Tomografia de abdome evidencia ar na parede de alças de delgado, sem evidência de obstrução e imagens lineares hipotensas em projeção do fígado indo até a periferia hepática. Com base nos achados, qual a hipótese diagnóstica?',
    options: [
      '(A) Isquemia mesentérica.',
      '(B) Pancreatite aguda.',
      '(C) Diverticulite complicada.',
      '(D) Enterocolite.'
    ],
    correctAnswer: 0,
    explanation: 'Idoso cardiopata arrítmico (FA crônica) evoluindo com quadro súbito de dor abdominal de extrema intensidade desproporcional ao exame físico, e cuja tomografia revela o binômio grave de pneumatose na parede de alças delgadas e aeroportia (gás portal), tem diagnóstico de Isquemia Mesentérica.',
    commentary: 'O cenário clínico descreve de forma fidedigna um quadro de Isquemia Mesentérica Aguda, comumente provocada por embolismo da artéria mesentérica superior potencializada pela vigência de arritmia cardíaca (fibrilação atrial). A gravidade evolutiva de isquemia avançada com sofrimento transmural de alças é firmada nos exames de imagem da TC de abdômen pela pneumatose intestinal (ar na parede de alça de delgado) e imagens lineares gasosas no fígado que se ramificam até a periferia (gás na veia porta / aeroportia). A pancreatite aguda não causaria isquemia parietal em alça sem achados inflamatórios na glândula pancreática; a enterocolite é típica da infância com diarreias exuberantes; e a diverticulite não causaria pneumatose seletiva do delgado e gás portal sistêmico nestas bases.',
    reference: 'Ronald A Squires, Russell G. Postier. Acute abdomen In: Sabiston Textbook of Surgery. The biological basis of modern surgical practice. Elsevier, 19th. Ed. 2012. Townsend CM, Beuchamp RD, Evers BM, Mattos KL. P. 1141-1159.',
    tags: ['Cirurgia Vascular', 'Gastroenterologia', 'Emergência']
  },
  {
    id: 'tp2021-71',
    module: 'Cirurgia',
    image: '/images/tp2021-71.PNG',
    text: 'Homem, 20 anos, deu entrada na Emergência 2 horas após acidente motociclístico, em que houve breve perda de consciência. Seguindo-se à avaliação inicial do paciente politraumatizado, a equipe da neurocirurgia foi contactada. O exame neurológico foi normal, exceto por queixa de dor cervical, recebendo o escore de 15 na Escala de Coma de Glasgow, além de equimose periorbital esquerda. Paciente permaneceu internado para observação hospitalar. Após 3 horas, o paciente estava sonolento, com discreta dilatação pupilar esquerda e movimentação simétrica dos membros. A imagem tomográfica compatível com a provável lesão do paciente é:',
    options: [
      '(A) Lesão axonal difusa.',
      '(B) Hematoma intraparenquimatoso.',
      '(C) Hematoma extradural agudo (epidural).',
      '(D) Hematoma subdural agudo.'
    ],
    correctAnswer: 2,
    explanation: 'Trauma cranioencefálico com perda de consciência, seguido por plena recuperação (escore de Glasgow 15) e deterioração rápida de consciência associada a anisocoria anisocórnica pupilar ipsilateral (midríase unilateral / dilatação pupilar), representa a clássica evolução em "intervalo lúcido" do hematoma extradural agudo.',
    commentary: 'O quadro clínico descreve a evolução característica do intervalo lúcido de um hematoma extradural (ou epidural agudo). A associação com a equimose periorbital (olho de guaxinim unilateral) traduz a presença de fratura na base do crânio (geralmente temporal-esfenoidal com laceração associada da artéria meníngea média). Na tomografia, esta lesão é visível como uma área hiperdensa de contornos biconvexos (lente biconvexa). A lesão axonal difusa cursa tipicamente com coma inicial duradouro sem lesões expansivas focais; o hematoma intraparenquimatoso possui outra conformação histológica traumática; e o hematoma subdural exibe imagem em formato de crescente sem a caracterização cirúrgica estrita do intervalo lúcido no TCE moderado.',
    reference: 'WINN, HR. Youmans & Winn Neurological Surgery. 6th ed. Philadelphia: Saunders, 2011.',
    tags: ['Trauma', 'Neurocirurgia', 'Emergência']
  },
  {
    id: 'tp2021-72',
    module: 'Cirurgia',
    image: '/images/tp2021-72.PNG',
    text: 'Mulher, 68 anos, procura atendimento por quadro de dor abdominal em cólica há 3 dias, acompanhada de distensão, náuseas, hiporexia e parada de eliminação de flatos e fezes. Antecedentes pessoais: há seis meses apresenta emagrecimento e episódios de dores abdominais, associados a constipação intestinal. Exame físico: abdome distendido, globoso, hipertimpânico em andar superior, levemente doloroso, com massa endurecida palpável em hipogástrio. Radiografia de abdome: imagem abaixo. O diagnóstico e o achado de imagem são:',
    options: [
      '(A) Constipação intestinal crônica, distensão de cólon e intestino delgado e ar na ampola retal.',
      '(B) Obstrução intestinal, distensão de alças de intestino delgado e cólon.',
      '(C) Obstrução intestinal baixa, distensão colônica e válvula ileocecal competente.',
      '(D) Abdome agudo obstrutivo, pneumoperitônio e ausência de ar na ampola retal.'
    ],
    correctAnswer: 2,
    explanation: 'Idosa com perda de peso crônica, constipação intestinal progressiva e distensão de cólon (com massa palpável). O quadro radiológico de distensão massiva confinada ao arco cólico sem distensão do delgado indica obstrução intestinal crônica baixa com válvula ileocecal competente.',
    commentary: 'O doente apresenta quadro clínico característico de Obstrução Intestinal Baixa de caráter progressivo neoplásico de cólon esquerdo / retossigmoide (evidenciado por emagrecimento, dor crônica prévia e toque de massa palpável). Na radiografia de abdômen da obstrução colônica, se a válvula ileocecal for competente (o que ocorre em cerca de 70% dos casos), há sequestro mecânico de ar gasoso de alça fechada, poupando a distensão volumosa do jejuno e íleo proximal. Isto magnifica a tensão sob a parede cecal de acordo com a Lei de Laplace, aumentando vertiginosamente as chances de isquemia transmural e perfuração do ceco, exigindo intervenção cirúrgica desobstrutiva imediata.',
    reference: 'Sabiston – Tratado de Cirurgia – 2 Volumes – 18ª Ed. Beauchamp; Townsend; Courtney, Mary. Elsevier / Medicina Nacionais.',
    tags: ['Gastroenterologia', 'Oncologia', 'Emergência']
  },
  {
    id: 'tp2021-73',
    module: 'Cirurgia',
    text: 'Mulher, 46 anos, chega à unidade de pronto atendimento com quadro de dor em região lombar e flanco direito, vômitos, febre, taquicardia e mal-estar. Relata antecedente de urolitíase. Apresenta melhora parcial com analgésico, antitérmico e antiemético endovenosos. Exames – Hemograma: glóbulos brancos 19.600/mm³, bastões 15%; creatinina: 2,1 mg/dL; urina I: leucocitúria importante e hematúria. Tomografia de abdome evidencia cálculo ureteral proximal à direita com cerca de 0,8 cm, com dilatação moderada ureteropielocalicial a montante e borramento perirenal. A conduta é:',
    options: [
      '(A) Antibioticoterapia por 14 dias, analgesia e acompanhamento clínico ambulatorial.',
      '(B) Ureterolitotripsia endoscópica para retirada do cálculo, hidratação e antibioticoterapia.',
      '(C) Antibioticoterapia e desobstrução de emergência com passagem de cateter ureteral duplo J ou nefrostomia.',
      '(D) Litotripsia extracorpórea, equilíbrio hemodinâmico e analgesia.'
    ],
    correctAnswer: 2,
    explanation: 'A vigência de obstrução ureteral aguda por cálculo associada a infecção em via excretora alta (febre, dor lombar e leucocitose expressiva com desvio esquerdo - urosepse) configura situação de emergência urológica absoluta. A prioridade máxima é a desobstrução mecânica urgente com implante de cateter duplo J ou nefrostomia percutânea sob terapia antibiótica venosa.',
    commentary: 'A pileonefrite aguda obstrutiva representa uma infecção de alto potencial septicêmico. Diante da vigência de infecção grave com borramento e disfunção renal associada (leucocitose com desvio esquerdo importante, bastões 15%, e aumento da creatinina), o doente necessita de internação, início tempestivo de drogas bactericidas venosas e desobstrução mecânica de urgência (implantação de cateter ureteral duplo J ou confecção de nefrostomia percutânea para drenagem de urina purulenta sob pressão). Qualquer manipulação direta invasiva para fragmentação do cálculo por ureterolitotripsia ou litotripsia neste momento eleva a pressão intracalicial, potencializando inundação bacteriana de vasos e choque cardiogênico / séptico, sendo proscrita.',
    reference: 'Pearle MS, Antonelli JA, Lotan Y. Urinary Lithiasis. In: Campbell-Walsh Urology, 11th ed. Local: Philadelphia, 2016. Elsevier. Türk C, Neisius A, Petrik A, Seitz C, Skolarikos A, Tepeler A, Thomas K. Guidelines on Urolithiasis, 2016 (atualização 2017). European Association of Urology.',
    tags: ['Urologia', 'Infectologia', 'Emergência']
  },
  {
    id: 'tp2021-74',
    module: 'Cirurgia',
    text: 'Homem, 68 anos, refere jato urinário fraco e entrecortado, esforço para iniciar micção e noctúria há 6 meses. Antígeno prostático específico (PSA) do ano anterior de 1,2 ng/mL. PSA atual = 2,6 ng/mL. Toque retal: próstata com dimensões de aproximadamente 40 g de peso e consistência fibroelástica. Para descartar neoplasia maligna da próstata, deve-se solicitar inicialmente:',
    options: [
      '(A) Tomografia computadorizada de abdome total.',
      '(B) Ressonância magnética multiparamétrica.',
      '(C) Ultrassom de abdome total e fosfatase alcalina.',
      '(D) Cintilografia com gálio-67.'
    ],
    correctAnswer: 1,
    explanation: 'Paciente com sintomas miccionais obstrutivos moderados, próstata de textura normal elástica ao toque, porém exibindo cinética de elevação rápida do PSA (ultrapassando velocidade limite aceitável de 0,75 ng/mL ao ano) tem indicação inicial de afastar adenocarcinoma por Ressonância Magnética Multiparamétrica (RMmp).',
    commentary: 'Apesar de exibir valor absoluto do PSA atual abaixo de 4,0 ng/mL, o paciente em tela apresenta critério de alta suspeição pela taxa de velocidade anual de ascensão sérica do antígeno prostático (que saltou de 1,2 para 2,6 ng/mL em apenas doze meses, um ganho bem acima do limite aceitável anualizado de 0,75 ng/mL). A conduta atual recomendada pelas sociedades de urologia e oncologia indica a feitura prévia de Ressonância Magnética Multiparamétrica (RMmp) para detecção de sítios suspeitos e cálculo do PI-RADS, permitindo orientar com precisão a posterior biópsia prostática dirigida. Tomografia e ultrassonografia simples de vias não dispõem de resolução ou acurácia estrutural fina para diagnóstico precoce de câncer intraprostático.',
    reference: 'Campbells Urology. 9th Edition. New York: Saunders Company, 2007. Zerati Filho M, Nardozza Jr A, Reis RB. Urologia fundamental. São Paulo: Planmark, 2010.',
    tags: ['Urologia', 'Oncologia', 'Ambulatório']
  },
  {
    id: 'tp2021-75',
    module: 'Cirurgia',
    text: 'Homem, 66 anos, queixa-se de astenia, emagrecimento e perda de apetite há cerca de 30 dias, acompanhadas de febre intermitente e não aferida. Ao exame físico e à radiografia de tórax confirmou-se a presença de derrame pleural em base torácica direita. Após a pleurocentese confirmou-se o diagnóstico de tuberculose pleural. A análise de líquido pleural que corrobora esta hipótese é:',
    options: [
      '(A) Exsudato linfocitário, com elevação de DHL (desidrogenase láctica – aumento de 0,6 x DHL sérico); alto número de células mesoteliais e ADA (adenosina deaminase) > 40.',
      '(B) Exsudato neutrofílico, com DHL (desidrogenase láctica) > 1.000 UI/L e glicose < 20 mg/dL.',
      '(C) Exsudato linfocitário, com elevação de proteínas (aumento de 0,5 x proteína sérica); baixo número de células mesoteliais e ADA (adenosina deaminase) > 40.',
      '(D) Exsudato neutrofílico, com aspecto macroscópico purulento e ADA (adenosina deaminase) < 40.'
    ],
    correctAnswer: 2,
    explanation: 'A tuberculose pleural é a causa principal de derrame pleural exsudativo linfocitário (relação de proteínas pleural/sérica > 0,5), com marcante escassez de células mesoteliais (< 5%) e níveis elevados de Adenosina Deaminase (ADA) superiores a 40 U/L.',
    commentary: 'O derrame biliar ou pleural por infecção de M. tuberculosis decorre de uma reação celular imunológica do tipo IV (hipersensibilidade tardia retardada) na cavidade pleural. Laboratorialmente, o painel liquórico exibe um exsudato límpido, com predomínio franco de leucócitos mononucleares (linfócitos), aumento robusto de proteínas no líquido de modo que a divisão de teor de proteína pleural/sérica supere o fator de reabsorção 0,5. Por se tratar de agressão imune com forte fibrina inflamatória adjacente ao mesotélio, a celularidade mesotelial na lâmina é muito desfavorável (usualmente < 5%). O achado clínico fidedigno para firmar a hipótese reside sob a taxa de ADA (adenosina deaminase) seletiva no líquido pleural com valores superiores a 40 U/L.',
    reference: 'Seiscento M, Conde M, Dalcolmo M. Tuberculose pleural. J Bras Pneumol. 2006;32(Supl 4): S174-S181. Manual de recomendações para o controle da tuberculose no Brasil, 2ª edição. Ministério da Saúde, 2019.',
    tags: ['Pneumologia', 'Infectologia']
  },
  {
    id: 'tp2021-76',
    module: 'Cirurgia',
    text: 'Mulher, 25 anos, procurou a Unidade Básica de Saúde com história de acidente na cozinha de casa com derramamento de óleo quente, atingindo a parte anterior da coxa direita há uma hora. A paciente refere dor intensa no local e ao exame, a região se apresentava coberta de flictenas. Vacinação antitetânica em dia. A conduta é:',
    options: [
      '(A) Analgesia e hidratação venosa, solicitar internação em unidade hospitalar com avaliação de cirurgião plástico.',
      '(B) Encaminhamento para serviço de pronto atendimento em unidade hospitalar, por se tratar de queimadura de 3º grau.',
      '(C) Analgesia, limpeza e curativo oclusivo com gaze embebida em ácidos graxos essenciais, retorno em 48 horas para troca de curativo.',
      '(D) Analgesia, limpeza e curativo oclusivo com gaze embebida em ácidos graxos essenciais, transferência para unidade hospitalar com avaliação de cirurgião plástico.'
    ],
    correctAnswer: 2,
    explanation: 'Paciente com queimadura térmica de segundo grau (presença de bolhas/flictenas) de pequena extensão (~ 4-5% da superfície corporal) e imunização antitetânica atualizada deve receber manejo puramente ambulatorial (analgesia, limpeza, cobertura com AGE e revisão em 48 horas).',
    commentary: 'O caso acima descreve uma lesão queimada de espessura parcial (segundo grau) em aproximadamente 4 a 5% da superfície corporal em um adulto. Conforme as regras da Sociedade Brasileira de Queimaduras e manuais de atenção básica da APS, o tratamento é conduzido na UBS de forma ambulatorial por não preencher critérios de internação hospitalar (extensão inferior a 20% da SC em adultos, ausência de lesões de 3º grau ou acometimento de áreas especiais como períneo, mãos, pés, face e olhos). A conduta clínica padrão envolve analgesia robusta, higiene estéril local com clorexidina, remoção de tecidos desprendidos frouxos preservando teto das bolhas se íntegras e aplicação de curativo oclusivo farto não aderente enriquecido com Ácidos Graxos Essenciais (AGE) ou pomada de sulfadiazina de prata a 1%, progredindo com troca e avaliação de granulação em 48 horas.',
    reference: 'BRASIL. MINISTÉRIO DA SAÚDE. Atenção à demanda espontânea na APS. Brasília: Ministério da Saúde, 2010. p. 186-194.',
    tags: ['Atenção Primária', 'Urgência e Emergência']
  },
  {
    id: 'tp2021-77',
    module: 'Cirurgia',
    text: 'Mulher, 72 anos, queixa-se de dificuldades visuais para costurar há 1 ano com evolução insidiosa. Na revisão de prontuário, observou-se que nas duas últimas consultas (4 e 8 meses) houve mudança do exame de refração. No exame oftalmológico, observa-se redução de acuidade bilateral assimétrica, tonometria normal. É portadora de diabetes mellitus, hipertireoidismo e lúpus, com uso crônico de corticoide oral e tem contato regular com gatos. Nega tabagismo ou etilismo. O diagnóstico mais provável é:',
    options: [
      '(A) Uveíte por toxoplasmose.',
      '(B) Glaucoma de ângulo aberto.',
      '(C) Catarata senil.',
      '(D) Catarata por lúpus.'
    ],
    correctAnswer: 2,
    explanation: 'Mulher idosa (72 anos) com baixa visual insidiosa bilateral assimétrica e alteração repetitiva com miopização refracional sob tonometria intraocular normal tem quadro altamente condizente com a evolução fisiopatológica da Catarata Senil.',
    commentary: 'A queixa de baixa gradual de acuidade visual para focar detalhes próximos (como costurar no idoso), associada à miopização refracional típica (melhora visual temporária relatada por endurecimento central de núcleo do cristalino) e pressão intraocular normal afasta diagnósticos graves imediatos de glaucoma agudo ou uveítes inflamatórias crônicas. O diagnóstico mais prevalente no idoso reside sob a Catarata Senil (opacificação progressiva do cristalino). O glaucoma de ângulo aberto é sorrateiro por anos com perda de campo periférico inicial e pressão ocular elevada ao tonômetro; a uveíte por toxoplasmose cursa de forma unilateral no jovem; e a catarata associada à atividade imunológica de Lúpus ou induzida por corticoide é uma entidade oftalmológica rara perto do volumoso espectro senil.',
    reference: 'Centurion B et al. Catarata: Diagnóstico e Tratamento. Projeto Diretrizes Associação Médica Brasileira. 2003. Lauretti CR, Lauretti Filho A. Glaucomas. Medicina, Ribeirão Preto, 30:56-65. 1997.',
    tags: ['Oftalmologia', 'Ambulatório']
  },
  {
    id: 'tp2021-78',
    module: 'Cirurgia',
    text: 'Homem, 35 anos, trazido por ambulância do Corpo de Bombeiros com história de colisão veículo versus anteparo, onde era o motorista e estava sem cinto de segurança em carro sem airbag. Há relato de trauma direto contra o volante. Chega ao serviço em prancha rígida, com colar cervical e headblock. Ao exame: paciente agitado, pouco cooperativo, interagindo com o interlocutor, queixando-se de falta de ar. Orofaringe sem alterações. Turgência jugular à direita e desvio da traqueia para esquerda. Hemitórax direito com aumento de volume, ausência de murmúrio vesicular e hipertimpanismo à direita. PA = 90 x 60 mmHg, FC = 112 bpm; FR = 28 irpm. A conduta imediata é:',
    options: [
      '(A) Solicitar radiografia de tórax em incidência anteroposterior e perfil no leito.',
      '(B) Realizar descompressão torácica imediata (punção/toracostomia com agulha ou digital).',
      '(C) Proceder à intubação orotraqueal imediata com sequência rápida.',
      '(D) Passagem de cateter venoso central de duplo lúmen para ressuscitação.'
    ],
    correctAnswer: 1,
    explanation: 'Vítima de trauma sob impacto volante com hipotensão arterial, taquicárdica, dispneia intensa associada a desvio contralateral traqueal, turgência de jugular e murmúrio ausente hipertimpânico apresenta Pneumotórax Hipertensivo. A conduta imediata mandatória é a descompressão cirúrgica por toracostomia digital ou punção por agulha calibrosa de alívio.',
    commentary: 'O pneumotórax hipertensivo é uma emergência extrema no trauma e causa rápida deterioração respiratória e colapso cardíaco circulatório imediato pelo desvio restritivo de vasos do mediastino. Seu diagnóstico é estritamente clínico e físico, e impede taxativamente qualquer bloqueio para confirmação de imagem por raio X ou tomografia. O achado de murmúrio ausente com hipertimpanismo unilateral sob desvio contralateral traqueal e hipotensão dita a conduta imediata: descompressão torácica imediata (em geral por toracostomia cortocontundente com agulha no quinto espaço intercostal na linha axilar anterior no adulto) seguido de drenagem torácica fechada sob selo d’água.',
    reference: 'Advanced Trauma Life Support – Student Course Manual – 10th. American College of Surgeons. TOWNSEND, CM et al. Sabiston, tratado de Cirurgia: a base biológica da moderna prática cirúrgica. 20ª ed. Rio de Janeiro: Elsevier, 2019.',
    tags: ['Trauma', 'Emergência']
  },
  {
    id: 'tp2021-79',
    module: 'Cirurgia',
    text: 'Um motoqueiro de 21 anos de idade foi vítima de uma colisão que resultou em traumatismo fechado do abdome. Encontra-se internado na Emergência sem sinais de irritação peritoneal e apresentando estabilidade hemodinâmica, porém a tomografia de abdome evidenciou gás no retroperitônio. O diagnóstico mais provável é:',
    options: [
      '(A) Ruptura de baço.',
      '(B) Lesão de duodeno (segunda porção).',
      '(C) Ruptura vesical.',
      '(D) Perfuração de divertículo cecal.'
    ],
    correctAnswer: 1,
    explanation: 'Em doente estável pós-atropelamento, a presença seletiva de ar/gás aprisionado no espaço retroperitoneal ao exame de imagem aponta obrigatoriamente para a rotura de uma víscera oca digestiva retroperitoneal, cujo sítio anatômico clássico é o duodeno (segunda e terceira porções).',
    commentary: 'A constatação de retro-pneumoperitônio (ar/gás livre no retroperitônio) após lesão por trauma mecânico contuso em abdômen direciona a hipótese diagnóstica de imediato para a rotura de segmento de víscera oca localizado anatomicamente nesse recesso profundo. De todos os órgãos citados, o único que se comporta como uma víscera oca essencialmente retroperitoneal é o duodeno (em sua porção infragástrica retroperitoneal, especificamente o arco de segunda colatitude e terceira porções transcolônicas). Lesões de baço ou de órgãos essencialmente de fâneros intraperitoneais como o sigmoide resultariam prioritariamente em hemoperitônio maciço livre ou pneumoperitônio clássico em espaço perito-peritoneal alto.',
    reference: 'GRAY, H.; GOSS, C.M. Anatomia. 29. ed. Rio de Janeiro: Guanabara Koogan, 1988. MOORE, L.K.; DALLEY, A.F.; AGUR, A.M.R. Anatomia Aplicada para a Clínica, Rio de Janeiro: Guanabara Koogan, 11 r.ed., 2011.',
    tags: ['Trauma', 'Emergência']
  },
  {
    id: 'tp2021-80',
    module: 'Cirurgia',
    text: 'Homem, 60 anos, apresentou em ultrassom de carótidas um nódulo de 1 cm de diâmetro no lobo direito da tireoide, de aspecto sólido e hipoecogênico, com bordas irregulares e microcalcificações. Tem exames de sangue recentes sem alterações, com dosagens de TSH e T4 livre normais. A próxima conduta deve ser:',
    options: [
      '(A) Repetir a ultrassom de tireoide em seis meses.',
      '(B) Solicitar cintilografia de tireoide.',
      '(C) Indicar lobectomia tireoidiana à direita.',
      '(D) Fazer punção aspirativa com agulha fina do nódulo (PAAF).'
    ],
    correctAnswer: 3,
    explanation: 'Nódulo de tireoide eutireoidiano medindo 1,0 cm com padrões de alta classificação de risco (TIRADS V/VI - hipoecoico, limites irregulares e microcalcificações) indica a feitura imediata de punção aspirativa por agulha fina (PAAF) guiada por USG.',
    commentary: 'Nódulo de 1,0 cm de diâmetro com padrões ultrassonográficos suspeitos (formato sólido, hipoecogênico, limites microlobulados ou irregulares e com presença de microcalcificações de cálcio pontual) manifesta critérios diagnósticos consistentes com malignização (carcinoma papilífero de tireoide). Em pacientes eutireoidianos (com TSH e hormônios tieroidenos devidamente em faixa normal), a imediata investigação citológica por Punção Aspirativa com Agulha Fina (PAAF) dirigida é soberana. O rastreio por cintilografia é restrito a nódulos quentes ou hiperfuncionantes em vigência de TSH suprimido. Esperar seis meses ou lobectomia cirúrgica direta prévia sem estudo citopatológico são imprudentes.',
    reference: 'Towsend, CM; Beauchamp, RD; Evans, BM; Sabiston - Tratado de Cirurgia, 20ª edição, Editora Guanabara-Koogan, 2019.',
    tags: ['Cabeça e Pescoço', 'Endocrinologia', 'Oncologia']
  },
  {
    id: 'tp2026-61',
    module: 'Cirurgia',
    text: 'Mulher de 45 anos é admitida em um serviço de emergência com queixa de dor abdominal súbita e intensa, em "barra", no andar superior do abdome, com irradiação para o dorso, iniciada há 8 horas. Relata náuseas e vômitos persistentes. Ao exame físico, apresenta dor severa à palpação de epigástrio, sem sinais de peritonite. Exame laboratorial: Lipase de 1.200U/L (VR: até 160U/L). Qual é o evento inicial envolvido na fisiopatologia dessa doença?',
    options: [
      '(A) Translocação bacteriana precoce de microrganismos entéricos para o tecido pancreático, resultando em necrose infectada e formação de abscessos nas primeiras 12 horas do quadro.',
      '(B) Obstrução do ducto colédoco com refluxo biliar retrógrado para os hepatócitos, gerando necrose hepática aguda e liberação secundária de enzimas pancreáticas na circulação.',
      '(C) Ativação intrapancreática de zimogênios proteolíticos, como a conversão do tripsinogênio em tripsina no interior das células acinares, desencadeando autodigestão tecidual.',
      '(D) Isquemia primária da microvasculatura pancreática por vasoconstrição reflexa, levando à falência imediata das ilhotas de Langerhans e instalação de cetoacidose diabética.'
    ],
    correctAnswer: 2,
    explanation: 'O evento inicial na fisiopatologia da pancreatite aguda é a ativação intrapancreática precoce de zimogênios proteolíticos (como a conversão do tripsinogênio em tripsina) no interior das células acinares, levando à autodigestão do tecido pancreático.',
    commentary: 'O evento inicial da pancreatite aguda é a falha nos mecanismos de proteção celular que mantêm as enzimas digestivas em sua forma inativa (zimogênios). A ativação precoce da tripsina dentro do ácino pancreático desencadeia uma cascata de ativação de outras enzimas (fosfolipases, elastases), causando a autodigestão do parênquima, edema, hemorragia e resposta inflamatória local e sistêmica. Sobre os distratores: (A) A translocação bacteriana e a infecção da necrose pancreática são complicações tardias (segunda/terceira semana); nas primeiras 12-24 horas, a inflamação é estéril. (B) O refluxo biliar para os hepatócitos causaria colestase/hepatite e não pancreatite. (D) A pancreatite é primariamente do pâncreas exócrino; a falência endócrina é sequela tardia, não evento inicial.',
    reference: 'SABISTON, David C. Tratado de Cirurgia: A Base Biológica da Prática Cirúrgica Moderna. Rio de Janeiro: Elsevier. KUMAR, Vinay et al. Robbins & Cotran: Patologia Estrutural e Funcional. 10ª ed. Rio de Janeiro: Elsevier, 2021.',
    tags: ['Pancreatite Aguda', 'Fisiopatologia', 'Pâncreas']
  },
  {
    id: 'tp2026-62',
    module: 'Cirurgia',
    text: 'Homem de 60 anos, em tratamento de arritmia cardíaca com AAS (ácido acetilsalicílico) 200mg ao dia, procura a UBS com queixa de fraqueza, adinamia e epigastralgia há 2 meses. Refere perda ponderal de 2kg nos últimos meses. Fez uso de omeprazol 20mg por 7 dias, mas abandonou o uso devido ao escurecimento das fezes. Ao exame físico, encontra-se descorado 1/4+, PA = 120x80mmHg, FC = 80bpm e FR = 16irpm. Qual a conduta inicial mais adequada?',
    options: [
      '(A) Iniciar omeprazol 40mg via oral e cessar uso de AAS.',
      '(B) Endoscopia digestiva alta de urgência.',
      '(C) Realizar colonoscopia, devido à alteração da coloração das fezes.',
      '(D) Solicitar arteriografia para localizar o foco do sangramento.'
    ],
    correctAnswer: 0,
    explanation: 'A principal hipótese diagnóstica é uma gastrite hemorrágica ou úlcera péptica decorrente do uso crônico de AAS. Retirar o agente agressor (AAS) e otimizar a proteção gástrica com IBP (omeprazol 40mg VO) constitui a conduta inicial ideal.',
    commentary: 'A principal hipótese para o quadro crônico do paciente (epigastralgia, melena - disfarçada/confundida pelo escurecimento de fezes atribuído incorretamente ao omeprazol, fraqueza, anemia leve) é gastrite hemorrágica ou úlcera induzida por AAS. Retirar o agente lesivo (AAS) e iniciar IBP em dose terapêutica (omeprazol 40mg VO) é a conduta inicial adequada. Sobre os distratores: (B) O paciente está hemodinamicamente estável, sem sangramento ativo agudo, logo não há indicação de EDA de urgência. (C) O escurecimento das fezes (melena) indica hemorragia digestiva alta e não colonoscopia como abordagem primária. (D) A arteriografia se reserva a sangramentos maciços com instabilidade hemodinâmica sem foco definido.',
    reference: 'FELDMAN, Mark; FRIEDMAN, Lawrence S.; BRANDT, Lawrence J. Sleisenger and Fordtran\'s gastrointestinal and liver disease: pathophysiology, diagnosis, management. 11. ed. Philadelphia: Elsevier, 2021. TOWNSEND, Courtney M. et al. Sabiston textbook of surgery: the biological basis of modern surgical practice. 21. ed. Philadelphia: Elsevier, 2022. BARKUN, Alan N. et al. Management of nonvariceal upper gastrointestinal bleeding: guideline recommendations. Annals of Internal Medicine, Philadelphia, v. 171, n. 11, p. 805-822, 2019.',
    tags: ['Hemorragia Digestiva Alta', 'AAS', 'Farmacologia']
  },
  {
    id: 'tp2026-63',
    module: 'Cirurgia',
    text: 'Homem de 72 anos chega ao pronto atendimento hospitalar com dor abdominal súbita e intensa, referida como em “facada”, iniciada há poucas horas. Relata náuseas, abdome rígido à palpação e história de epigastralgia recorrente há meses, com uso frequente de anti-inflamatórios para dor no quadril. A tomografia sugere pneumoperitônio. Qual é a conduta terapêutica inicial mais adequada para esse paciente?',
    options: [
      '(A) Solicitar endoscopia digestiva alta imediata e aguardar confirmação histológica antes de qualquer intervenção.',
      '(B) Administrar analgésicos e observar a evolução clínica por 24 horas antes de definir a conduta.',
      '(C) Reposição volêmica, antibioticoterapia, inibidor de bomba de prótons intravenoso e cirurgia de urgência.',
      '(D) Prescrever dieta zero, orientar repouso e programar tratamento ambulatorial com antiácidos.'
    ],
    correctAnswer: 2,
    explanation: 'O quadro de dor abdominal em facada com abdome em tábua e pneumoperitônio configura abdome agudo perfurativo por úlcera péptica. O tratamento consiste em reposição volêmica, antibioticoterapia de amplo espectro, IBP venoso e cirurgia de urgência.',
    commentary: 'O quadro é altamente compatível com úlcera péptica perfurada, uma emergência cirúrgica clássica (abdome agudo perfurativo). O manejo inicial deve priorizar a ressuscitação volêmica, cobertura antibiótica contra flora gastrointestinal, supressão ácida com IBP intravenoso e encaminhamento imediato para cirurgia de urgência. Sobre os distratores: (A) A endoscopia digestiva alta é formalmente contraindicada na suspeita de perfuração livre por risco de aumentar o pneumoperitônio e a contaminação. (B) Analgesia isolada e conduta expectante retardam o tratamento cirúrgico definitivo de uma sepse abdominal iminente. (D) O tratamento ambulatorial é totalmente inadequado e fatal no contexto de abdome agudo perfurativo.',
    reference: 'SAGES/World Society of Emergency Surgery. Guidelines for the management of perforated peptic ulcer. 2020',
    tags: ['Abdome Agudo', 'Urgência e Emergência', 'Perfurativo']
  },
  {
    id: 'tp2026-64',
    module: 'Cirurgia',
    text: 'Homem, 32 anos, foi levado a um serviço de urgência após colisão frontal de automóvel em alta velocidade. Na admissão, apresentava confusão mental. Após ressuscitação volêmica inicial, os exames foram: FC 128bpm, PA 85/55mmHg e FR 24irpm; ausculta pulmonar normal e abdome distendido e doloroso à palpação. Realizado o exame FAST (Focused Assessment with Sonography for Trauma, ou avaliação com ultrassom focada no trauma), que revelou lâmina anecoica no espaço de Morrison e região periesplênica. Qual a conduta mais adequada neste caso?',
    options: [
      '(A) Solicitar Tomografia Computadorizada (TC) de abdome e pelve para estadiamento da lesão orgânica.',
      '(B) Encaminhar o paciente imediatamente para laparotomia exploradora.',
      '(C) Realizar Lavado Peritoneal Diagnóstico (LPD) para confirmar a presença de hemoperitônio.',
      '(D) Iniciar protocolo de transfusão maciça e repetir o FAST após 30 minutos para reavaliar o sangramento.'
    ],
    correctAnswer: 1,
    explanation: 'Paciente com trauma abdominal contuso, instabilidade hemodinâmica persistente (choque) e FAST positivo com líquido livre intraperitoneal tem indicação direta e imediata de laparotomia exploradora.',
    commentary: 'O paciente apresenta sinais claros de choque hipovolêmico classe III/IV (FC 128 bpm, PA 85/55 mmHg) e o FAST revelou líquido livre intraperitoneal (espaço de Morrison e recesso esplenorrenal). Pelas diretrizes do ATLS, um paciente instável hemodinamicamente com FAST positivo após trauma contuso tem indicação formal imediata de laparotomia exploradora. Sobre os distratores: (A) A Tomografia Computadorizada é contraindicada em pacientes hemodinamicamente instáveis, pois o deslocamento e o tempo do exame colocam a vida em risco. (C) O LPD é desnecessário porque o FAST já diagnosticou o líquido livre (hemoperitônio). (D) Esperar 30 minutos para repetir o FAST em um paciente chocado e com sangramento ativo evidente é um erro grave.',
    reference: 'ATLS – Advanced Trauma Life Support, 11ª ed., American College of Surgeons',
    tags: ['Trauma', 'Urgência e Emergência', 'ATLS']
  },
  {
    id: 'tp2026-65',
    module: 'Cirurgia',
    text: 'Mulher de 33 anos chega ao pronto-socorro após colisão automobilística. Era a condutora e utilizava cinto de segurança. Encontra-se orientada e referindo dor abdominal difusa. Ao exame: dor à palpação no hipocôndrio esquerdo, sem irritação peritoneal e equimose no andar superior do abdome. PA 120x75mmHg, FC 94bpm, FR 20irpm, saturando 96% em ar ambiente. FAST (Focused Assessment with Sonography for Trauma, ou avaliação com ultrassom focada no trauma) positivo para líquido livre no abdome na janela esplenorrenal. Qual a melhor conduta?',
    options: [
      '(A) Encaminhar imediatamente a paciente para laparotomia exploradora.',
      '(B) Solicitar tomografia computadorizada do abdome com contraste.',
      '(C) Realizar o lavado peritoneal diagnóstico.',
      '(D) Realizar curva de hemoglobina-hematócrito e repetir o FAST em 6 horas.'
    ],
    correctAnswer: 1,
    explanation: 'No trauma abdominal contuso, o paciente que se apresenta hemodinamicamente ESTÁVEL com FAST positivo tem indicação de realizar Tomografia Computadorizada (TC) de abdome com contraste para identificar e estadiar as lesões viscerais.',
    commentary: 'Diferente do caso anterior, esta paciente apresenta estabilidade hemodinâmica (PA 120x75, FC 94). No contexto do trauma abdominal fechado, a estabilidade hemodinâmica associada ao FAST positivo indica a realização de tomografia computadorizada (TC) com contraste para delimitar a lesão visceral e planejar o tratamento (que frequentemente pode ser conservador). Sobre os distratores: (A) A laparotomia imediata está indicada apenas se houvesse instabilidade hemodinâmica refratária. (C) O LPD já foi superado pelo FAST positivo e não traria novos dados anatômicos. (D) Observação com curva laboratorial isolada e FAST tardio sem TC atrasaria o diagnóstico de lesões esplênicas ou hepáticas graves que necessitam de estadiamento imediato.',
    reference: 'Sabiston Textbook of Surgery. Philadelphia: Elsevier; 2021. ATLS – Advanced Trauma Life Support, 11ª ed., American College of Surgeons',
    tags: ['Trauma', 'Urgência e Emergência', 'ATLS']
  },
  {
    id: 'tp2026-66',
    module: 'Cirurgia',
    text: 'Homem de 32 anos sofreu queda de 3 metros de altura. No pronto-socorro, referiu intensa dor torácica. Ao exame: vias aéreas pérvias; ausência de turgência jugular; FC 112bpm; PA 90x50mmHg; FR 28irpm e saturando 90% com máscara nasal de O2 a 15L/min. Expansão torácica assimétrica. Hemitórax esquerdo: M.V. abolido, som maciço à percussão, crepitação de costelas à palpação. Hemitórax direito: murmúrio vesicular presente. Qual o diagnóstico?',
    options: [
      '(A) Contusão pulmonar.',
      '(B) Lesão miocárdica com tamponamento.',
      '(C) Pneumotórax hipertensivo à esquerda.',
      '(D) Hemotórax maciço à esquerda.'
    ],
    correctAnswer: 3,
    explanation: 'A presença de trauma torácico unilateral associado a choque (hipotensão e taquicardia), abolição do murmúrio vesicular e maciez à percussão (indicando líquido/sangue no espaço pleural) é diagnóstica de hemotórax maciço à esquerda.',
    commentary: 'O diagnóstico de hemotórax maciço é fundamentado na anamnese de trauma torácico associada ao choque hipovolêmico (hipotensão, taquicardia, ausência de turgência jugular devido à hipovolemia) e no exame físico do tórax: murmúrio vesicular abolido ipsilateralmente e macicez à percussão (sangue livre no espaço pleural). Sobre os distratores: (A) A contusão pulmonar não se apresenta com macicez pleural significativa e choque imediato. (B) No tamponamento cardíaco há turgência jugular e bulhas abafadas, sem abolição de murmúrio vesicular. (C) No pneumotórax hipertensivo a percussão seria hipertimpânica e haveria turgência jugular pelo desvio mediastinal.',
    reference: 'Sabiston Textbook of Surgery. Philadelphia: Elsevier; 2021. ATLS – Advanced Trauma Life Support, 11ª ed., American College of Surgeons',
    tags: ['Trauma', 'Tórax', 'Hemotórax']
  },
  {
    id: 'tp2026-67',
    module: 'Cirurgia',
    text: 'Mulher de 45 anos, submetida a colecistectomia aberta há cinco dias, apresenta dor persistente e calor local em região de incisão cirúrgica. Exame físico: afebril, normocárdica, normotensa e eupneica. Observa-se hiperemia perilesional, edema e saída de secreção purulenta pelos bordos da ferida. Qual a conduta mais adequada neste momento?',
    options: [
      '(A) Coletar swab da secreção purulenta para cultura antes de qualquer manipulação local e manter observação clínica.',
      '(B) Solicitar ultrassonografia de parede abdominal para confirmar coleção e iniciar antibioticoterapia sistêmica.',
      '(C) Realizar a abertura de pontos (drenagem) para inspeção da ferida e exploração digital da integridade da aponeurose.',
      '(D) Prescrever compressas mornas e anti-inflamatórios, orientando retorno em 48 horas ou antes, caso surja febre.'
    ],
    correctAnswer: 2,
    explanation: 'Diante de uma infecção de sítio cirúrgico incisional com saída de secreção purulenta, a conduta imediata é a drenagem mediante abertura de pontos da ferida, associada à exploração digital para verificar se há deiscência aponeurótica oculta.',
    commentary: 'O diagnóstico de infecção do sítio cirúrgico (ISC) incisional é clínico, definido pela presença de drenagem purulenta e sinais inflamatórios locais. O tratamento de escolha absoluto é mecânico: abertura dos pontos (drenagem) para esvaziamento e exploração digital cuidadosa da ferida para avaliar a integridade da aponeurose e excluir deiscência profunda. Sobre os distratores: (A) Coleta de swab de ferida aberta tem baixíssimo valor preditivo, pois identifica colonizadores habituais da pele. (B) A ISC é um diagnóstico puramente clínico, não havendo necessidade de ultrassonografia rotineira quando há saída óbvia de pus; além disso, antibióticos sistêmicos só são iniciados em caso de celulite extensa ou repercussão sistêmica, sendo a drenagem a medida principal. (D) Conduta expectante com compressas mornas em vigência de abscesso ou secreção purulenta ativa é negligência.',
    reference: 'TOWNSEND, Courtney M. et al. Sabiston: Tratado de Cirurgia. 21. ed. Rio de Janeiro: Elsevier, 2023. ISBN 978-8535292412.',
    tags: ['Infecção de Sítio Cirúrgico', 'Pós-operatório', 'Complicações']
  },
  {
    id: 'tp2026-68',
    module: 'Cirurgia',
    text: 'Homem de 55 anos procura pronto atendimento com dor inguinal há 8 horas e masa dolorosa, irredutível, sem sinais sistêmicos. Apresenta-se afebril, com FC 88bpm, sem sinais de peritonite ou obstrução intestinal. Qual a conduta mais adequada neste caso?',
    options: [
      '(A) Prescrever analgesia e antibiótico, reavaliando o caso em 24 horas.',
      '(B) Indicar laparotomia imediata, devido ao risco de estrangulamento.',
      '(C) Solicitar hemograma e proteína C reativa para definir a conduta.',
      '(D) Realizar tentativa de redução manual (taxis) sob analgesia e sedação.'
    ],
    correctAnswer: 3,
    explanation: 'Na presença de hérnia inguinal encarcerada recente (<24h) sem sinais de sofrimento de alça (estrangulamento, peritonite ou resposta inflamatória sistêmica), a conduta inicial consiste na tentativa de redução manual (taxis) assistida por analgesia/sedação.',
    commentary: 'Para casos de hérnia inguinal encarcerada aguda (8 horas de evolução) na ausência de manifestações clínicas de estrangulamento (sem peritonite, febre, taquicardia ou obstrução intestinal), a abordagem inicial recomendada é a tentativa de redução manual guiada (taxis) sob analgesia sistêmica e sedação leve. Isso pode converter uma cirurgia de emergência em um procedimento eletivo programado. Sobre os distratores: (A) A mera observação clínica com analgésicos é perigosa devido ao risco de estrangulamento iminente. (B) A cirurgia urgente está indicada apenas em caso de falha da taxis ou se houvesse sinais francos de isquemia/estrangulamento. (C) Exames laboratoriais não devem retardar a intervenção de redução da hérnia.',
    reference: 'Fitzgibbons RJ, Forse RA. Groin Hernias in Adults. N Engl J Med. 2015. Sartelli M et al. WSES Guidelines for Emergency Repair of Complicated Hernias. World J Emerg Surg. 2013. Pawlak M et al. Management of Incarcerated Inguinal Hernia with Taxis. Hernia. 2021.',
    tags: ['Hérnias', 'Urgência e Emergência', 'Hérnia Inguinal']
  },
  {
    id: 'tp2026-69',
    module: 'Cirurgia',
    text: 'Homem de 40 anos apresenta tumefação dolorosa em coxa há 7 dias, com aumento progressivo, flutuação e eritema. Após tentativa prévia de antibioticoterapia e sem drenagem da lesão, houve piora do quadro. Considerando a fisiopatologia do abscesso, qual mecanismo explica a falha do tratamento clínico isolado?',
    options: [
      '(A) Formação de cavidade encapsulada com baixa penetração de antibióticos e alta carga bacteriana.',
      '(B) Redução da perfusão tecidual local por vasoconstrição reflexa.',
      '(C) Produção bacteriana de toxinas que inativam diretamente antibióticos sistêmicos.',
      '(D) Formação de biofilme bacteriano, impedindo resposta inflamatória local.'
    ],
    correctAnswer: 0,
    explanation: 'O abscesso estabelece uma cavidade encapsulada espessa contendo pus e detritos necróticos, criando uma barreira física com baixa perfusão interna. Isso impede que os antibióticos sistêmicos atinjam concentrações terapêuticas eficazes no local infectado, exigindo drenagem cirúrgica.',
    commentary: 'O abscesso cutâneo ou muscular profundo forma uma coleção purulenta envolta por uma pseudocápsula de fibrina e tecido colágeno inflamatório. Essa barreira vascularizada externamente mas avascular internamente cria um ambiente com baixíssima perfusão central, pH ácido e altíssima carga bacteriana ativa e dormente. Como resultado, os antibióticos circulantes não penetram no interior do abscesso em quantidade suficiente, o que dita o antigo aforismo cirúrgico: "ubi pus, ibi evacua" (onde há pus, esvazie/drene). Sobre os distratores: (B, C, D) Embora vasoconstrição tecidual periférica, toxinas bacterianas e biofilmes bacterianos desempenhem papéis em infecções, a barreira mecânica e biológica da cápsula do abscesso é o fator fisiopatológico primário reconhecido na falha da terapia medicamentosa isolada.',
    reference: 'Stevens DL et al. Practice Guidelines for Skin and Soft Tissue Infections. Clin Infect Dis. 2014. Miller JM et al. Guide to Microbiology Laboratory Utilization. Clin Infect Dis. 2024. Seidelman JL et al. Surgical Site Infection Prevention. JAMA. 2023.',
    tags: ['Abscesso', 'Fisiopatologia', 'Infecção']
  },
  {
    id: 'tp2026-70',
    module: 'Cirurgia',
    text: 'Uma mulher de 54 anos, tabagista e hipertensa, procura atendimento hospitalar com queixa de dor em panturrilha ao caminhar cerca de 200 metros, com melhora após alguns minutos de repouso. Ao exame físico, apresenta pulsos pediosos e tibiais posteriores diminuídos bilateralmente. Qual mecanismo fisiopatológico explica os sintomas desta paciente?',
    options: [
      '(A) Aumento da pressão venosa nos membros inferiores causado por insuficiência das válvulas venosas.',
      '(B) Redução do fluxo sanguíneo durante o exercício por estenose aterosclerótica das artérias dos membros inferiores.',
      '(C) Compressão mecânica das artérias femorais por estruturas musculares durante a deambulação.',
      '(D) Inflamação aguda das artérias periféricas, associada a processo infeccioso sistêmico.'
    ],
    correctAnswer: 1,
    explanation: 'A claudicação intermitente na Doença Arterial Obstrutiva Periférica (DAOP) decorre do descompasso entre a oferta e a demanda de oxigênio muscular. A estenose aterosclerótica limita o fluxo arterial e impede o seu aumento durante o exercício físico.',
    commentary: 'A claudicação intermitente é a manifestação clínica clássica da DAOP. Sob repouso, o fluxo de sangue é suficiente para a taxa metabólica do músculo. Durante a deambulação, a musculatura da panturrilha demanda maior fluxo sanguíneo e suprimento de O2. Diante de estenoses arteriais fixas por placas ateroscleróticas, ocorre uma incapacidade de vasodilatação compensatória proporcional, resultando em isquemia tecidual temporária com acúmulo de lactato e dor, que cessa rapidamente com o repouso. Sobre os distratores: (A) A insuficiência venosa crônica cursa com dor em peso, edema e varizes, piorando ao ortostatismo e melhorando ao repouso elevado (e não ao simples repouso em pé). (C) Síndromes de aprisionamento arterial são anomalias raras do jovem e não o mecanismo típico da DAOP do idoso/tabagista. (D) A etiologia é degenerativa/aterosclerótica crônica e não uma arterite inflamatória infecciosa aguda.',
    reference: 'McDermott MM. Peripheral Artery Disease in the Legs. New England Journal of Medicine. 2026;394:486-496. Gornik HL et al. 2024 ACC/AHA Guideline for the Management of Lower Extremity Peripheral Artery Disease. JACC, 2024. Kullo IJ, Rooke TW. Peripheral Artery Disease. NEJM. 2016;374:861-871.',
    tags: ['Vascular', 'DAOP', 'Fisiopatologia']
  },
  {
    id: 'tp2026-71',
    module: 'Cirurgia',
    text: 'Uma mulher de 63 anos, obesa (IMC 32kg/m²), procura atendimento na UBS com queixa de dor, sensação de peso e edema em membros inferiores ao final do dia, com melhora ao elevar as pernas. Ao exame físico observam-se varizes bilaterais, edema maleolar e hiperpigmentação na região do tornozelo. Diante deste quadro clínico, qual o exame complementar mais indicado para avaliar a causa estrutural da doença?',
    options: [
      '(A) Venografia contrastada dos membros inferiores.',
      '(B) Pletismografia venosa dos membros inferiores.',
      '(C) Angiotomografia venosa dos membros inferiores.',
      '(D) Ultrassonografia venosa com Doppler dos membros inferiores.'
    ],
    correctAnswer: 3,
    explanation: 'A ultrassonografia venosa com Doppler é o método de escolha (padrão-ouro não invasivo) para o diagnóstico e avaliação anatomofuncional da insuficiência venosa crônica.',
    commentary: 'A ultrassonografia venosa com Doppler (duplex scan) é o exame complementar de primeira linha. Permite a avaliação anatômica (presença de trombos, calibres venosos) e funcional (mapeamento do refluxo valvular no sistema venoso superficial, profundo e perfurante) com excelente acurácia, de forma não invasiva e sem contraste. Sobre os distratores: (A) A venografia retrógrada contrastada é invasiva e hoje reservada apenas para fins terapêuticos de exceção ou anatomia complexa. (B) A pletismografia avalia a hemodinâmica global do esvaziamento venoso, mas não provê detalhes anatômicos estruturais específicos. (C) A angiotomografia venosa é reservada para investigação de eixos venosos ilíaco-cavais (ex: Síndrome de May-Thurner) e não como exame inicial estrutural periférico.',
    reference: 'Eberhardt RT, Raffetto JD. Chronic Venous Insufficiency. Circulation. 2014;130:333-346. Wittens C et al. Management of Chronic Venous Disease: Clinical Practice Guidelines of the European Society for Vascular Surgery. Eur J Vasc Endovasc Surg. 2015. Gloviczki P et al. The care of patients with varicose veins and associated chronic venous diseases. J Vasc Surg. 2011.',
    tags: ['Vascular', 'Insuficiência Venosa', 'Exames']
  },
  {
    id: 'tp2026-72',
    module: 'Cirurgia',
    text: 'Homem, 29 anos, apresenta-se no pronto-socorro com quadro de dor lombar à direita de forte intensidade, com irradiação para região genital ipsilateral, acompanhado de náuseas e urina escura. Não apresentava febre. Foi medicado com melhora importante do quadro. Realizada tomografia sem contraste, que evidenciou cálculo de 4mm em ureter direito distal, sem hidronefrose. Ureia e creatinina séricas normais. Qual a conduta?',
    options: [
      '(A) Analgesia e alfa bloqueador (tansulozina)',
      '(B) Ureterolitotripsia de urgência',
      '(C) Tratamento sintomático e antibioticoprofilaxia',
      '(D) Litotripsia extracorpórea'
    ],
    correctAnswer: 0,
    explanation: 'Para cálculos ureterais distais menores que 10 mm em pacientes estáveis, sem infecção, sem obstrução bilateral ou rim único e com dor controlada, a conduta ideal é a Terapia Expulsiva Médica (MET) com alfa-bloqueador (tansulozina) e analgesia.',
    commentary: 'Trata-se de cólica nefrética por cálculo ureteral distal pequeno (4mm). Uma vez obtido o controle da dor com analgésicos e na ausência de fatores de complicação (infecção, insuficiência renal, hidronefrose grave, anúria ou obstrução bilateral), a conduta padrão é o manejo conservador/expulsivo. O uso de alfabloqueadores como a tansulozina reduz o espasmo do músculo liso ureteral distal, acelerando significativamente a eliminação espontânea do cálculo (MET). Sobre os distratores: (B) A ureterolitotripsia cirúrgica de urgência não se justifica dada a alta taxa de eliminação espontânea de cálculos < 5 mm estáveis. (C) Antibioticoprofilaxia não tem papel em litíase não infectada. (D) A litotripsia extracorpórea por ondas de choque (LEOC) é preferida para cálculos renais pequenos e ureterais proximais, não se aplicando de rotina como primeira linha para ureter distal de 4 mm.',
    reference: 'Campbell-Walsh-Wein Urology. 11ª ed. Elsevier.',
    tags: ['Urologia', 'Litíase Urinária', 'Conduta']
  },
  {
    id: 'tp2026-73',
    module: 'Cirurgia',
    text: 'Em uma UBS, um homem de 72 anos apresenta febre, dor lombar intensa e prostração. Exames mostram leucocitose, PCR elevada, creatinina de 1,4mg/dL e urina com leucócitos e nitrito positivo. Ultrassonografia evidencia hidronefrose à direita, associada a imagem sugestiva de cálculo ureteral. O diagnóstico e a conduta inicial neste caso são:',
    options: [
      '(A) Colonização bacteriana assintomática associada a cálculo renal; administrar tansulozina (alfabloqueador).',
      '(B) Infecção urinária baixa com achados laboratoriais exacerbados, podendo ser tratada ambulatorialmente.',
      '(C) Insuficiência renal crônica descompensada, sem relação com processo infeccioso urinário; deve ser hospitalizado.',
      '(D) Pielonefrite aguda por obstrução urinária, necessitando desobstrução cirúrgica urgente.'
    ],
    correctAnswer: 3,
    explanation: 'A associação de obstrução do trato urinário (cálculo ureteral com hidronefrose) e infecção sistêmica (febre, leucocitose, prostração) caracteriza uma Pielonefrite Aguda Complicada (Urosepse obstrutiva), constituindo uma emergência urológica absoluta que exige internação, antibioticoterapia e desobstrução cirúrgica urgente.',
    commentary: 'O quadro clínico combina dor lombar obstrutiva (litíase com hidronefrose), infecção bacteriana urinária ativa (nitrito+, leucocitúria) e sinais sistêmicos graves (febre, prostração, leucocitose, disfunção renal aguda com creatinina elevada). Esta é uma "via urinária obstruída e infectada", uma verdadeira urgência urológica de alto risco de choque séptico e óbito. Exige internação imediata para antibioticoterapia de amplo espectro venosa e desobstrução ureteral urgente (via passagem de cateter duplo J retrógrado ou nefrostomia percutânea). Sobre os distratores: (A, B) Há infecção sistêmica grave e obstrução mecânica evidente, impossibilitando conduta conservadora simples ou diagnóstico de colonização. (C) A disfunção renal (creatinina de 1,4) decorre diretamente da hidronefrose aguda somada à sepse renal (lesão renal aguda obstrutiva/infecciosa) e não de descompensação crônica primária isolada.',
    reference: 'RIELLA, M. C. Princípios de Nefrologia e Distúrbios Hidroeletrolíticos. 2024. JOHNSON, R. Nefrologia Clínica – Abordagem Abrangente. 5ª ed. Elsevier, 2016. SOCIEDADE BRASILEIRA DE UROLOGIA. Diretrizes em infecção do trato urinário. Disponível em: www.sbu.org.br',
    tags: ['Urologia', 'Infecção Urinária', 'Urgência e Emergência']
  },
  {
    id: 'tp2026-74',
    module: 'Cirurgia',
    text: 'Lactente de 7 meses foi atendido em PS com história de choro súbito e intenso, com flexão de membros inferiores sobre o abdome. Mãe relata 2 episódios de vômitos e eliminação de fezes avermelhadas, com aspecto de "geleia de morango". Ao exame físico, nota-se massa alongada, palpável em hipocôndrio direito. Considerando o diagnóstico de intussuscepção intestinal, qual a fisiopatologia responsável pela isquemia com saída de muco e sangue pelo reto?',
    options: [
      '(A) Compressão do plexo mioentérico de Auerbach, levando à paralisia motora e necrose por pressão direta arterial.',
      '(B) Obstrução primária do fluxo arterial mesentérico, devido à torção do pedículo vascular (volvo).',
      '(C) Congestão venosa e linfática devido à invaginação do mesentério, evoluindo com edema da parede e falência arterial.',
      '(D) Translocação bacteriana imediata para a serosa, causando peritonite química e necrose transmural precoce.'
    ],
    correctAnswer: 2,
    explanation: 'Na intussuscepção intestinal, a invaginação de um segmento do intestino no outro traciona o mesentério associado, comprimindo inicialmente os vasos linfáticos e as veias (baixa pressão). Isso gera edema local que, ao aumentar a pressão tecidual, obstrui o fluxo arterial secundariamente, levando à isquemia, descamação e sangramento mucoso (fezes em geleia de morango).',
    commentary: 'O mecanismo fisiopatológico da intussuscepção intestinal envolve a penetração de um segmento intestinal proximal (geralmente o íleo terminal) no lúmen do segmento distal (geralmente o cólon cecal), levando consigo o mesentério e seus vasos. O primeiro efeito mecânico é a oclusão dos vasos de baixa pressão (veias e linfáticos), o que desencadeia congestão venosa, estase linfática e rápido edema na parede intestinal. Conforme o edema se acentua, a pressão tecidual intersticial ultrapassa a pressão de perfusão arterial, interrompendo o aporte sanguíneo (isquemia arterial secundária). Isso leva a infarto hemorrágico da mucosa, descamação celular e produção excessiva de muco misturado com hemácias, gerando o sinal clássico das fezes em "geleia de morango". Sobre os distratores: (A) A compressão do plexo mioentérico gera distúrbios de motilidade (como no megacólon), mas não sofrimento vascular isquêmico agudo primário. (B) A torção global do pedículo vascular é característica do volvo e não da invaginação. (D) A translocação bacteriana e peritonite são consequências finais tardias da necrose transmural e não o mecanismo gerador inicial do sangramento e isquemia.',
    reference: 'Maksoud, João Gilberto. Cirurgia Pediatrica 2ª Edição 2017 volume II',
    tags: ['Pediatria', 'Cirurgia Pediátrica', 'Fisiopatologia']
  },
  {
    id: 'tp2026-75',
    module: 'Cirurgia',
    text: 'RN a termo, com peso adequado para a idade gestacional, apresentou, na sala de parto, sialorreia intensa. Na primeira tentativa de amamentação no peito da mãe, engasgou e ficou cianótico. Ato seguido, na admissão, a enfermagem relatou dificuldade em progressão de sonda oroenteral prescrita. Neste caso, qual o próximo passo para a confirmação da suspeita diagnóstica?',
    options: [
      '(A) Introduzir sonda com contraste até o ponto de resistência e realizar radiografia simples de tórax e abdome.',
      '(B) Realizar endoscopia digestiva alta imediata para localizar o nível da atresia.',
      '(C) Solicitar esofagograma com contraste baritado para avaliar a presença de fístula traqueoesofágica.',
      '(D) Realizar tomografia computadorizada de pescoço e tórax com reconstrução 3D.'
    ],
    correctAnswer: 0,
    explanation: 'A principal suspeita clínica é de atresia de esôfago. A confirmação inicial é feita pela radiografia simples de tórax e abdome com uma sonda radiopaca ou preenchida com contraste injetado até o ponto de obstrução esofágica, o que demonstrará o fundo de saco cego.',
    commentary: 'A apresentação clínica de sialorreia abundante ao nascimento, engasgos e cianose na primeira mamada, somada à incapacidade de progressão de sonda gástrica, é patognomônica de atresia de esôfago. O exame padrão para confirmar a suspeita é a radiografia simples de tórax e abdome após inserção de sonda de aspiração radiopaca (ou preenchida com contraste radiopaco solúvel em água) até o ponto de resistência esofágica, que revelará o esôfago proximal terminando em fundo de saco cego (sonda enrolada). A radiografia de abdome também ajuda na classificação (a presença de gás no estômago revela fístula traqueoesofágica distal [Tipo C, a mais comum]; a ausência total de gás abdominal indica atresia isolada sem fístula distal [Tipo A]). Sobre os distratores: (B) A EDA neonatal é desnecessariamente invasiva, de baixa disponibilidade no berçário e associada a riscos anestésicos elevados. (C) O sulfato de bário é formalmente contraindicado pelo alto risco de pneumonia química grave por aspiração para a árvore traqueobrônquica se houver fístula. (D) A TC de tórax envolve alta exposição à radiação e não é o exame diagnóstico inicial preconizado.',
    reference: 'Maksoud, João Gilberto. Cirurgia Pediatrica 2ª Edição 2017 volume I',
    tags: ['Pediatria', 'Cirurgia Pediátrica', 'Diagnóstico']
  },
  {
    id: 'tp2026-76',
    module: 'Cirurgia',
    text: 'Menino de 2 anos, nascido a termo e com desenvolvimento adequado para a idade, é levado à Unidade Básica de Saúde para consulta de puericultura. A mãe relata que, desde o nascimento, acha que o testículo direito não está presente no escroto. Ao exame físico, observa-se bolsa testicular direita hipodesenvolvida, sem testículo palpável. O testículo esquerdo encontra-se normal, em posição habitual. Qual é a conduta mais adequada neste momento?',
    options: [
      '(A) Manter acompanhamento clínico até a puberdade, pois há possibilidade de descida espontânea tardia.',
      '(B) Encaminhar para avaliação cirúrgica para realização de orquidopexia.',
      '(C) Solicitar dosagem de testosterona, LH e FSH.',
      '(D) Iniciar tratamento hormonal com gonadotrofina coriônica humana (hCG).'
    ],
    correctAnswer: 1,
    explanation: 'Para crianças com criptorquidia unilateral persistente após os 6 a 12 meses de idade, a conduta recomendada é o encaminhamento para cirurgia de orquidopexia, para prevenir infertilidade futura e reduzir o risco de malignização/torção.',
    commentary: 'A descida testicular espontânea raramente ocorre após os 6 meses de vida pós-natal. No menino de 2 anos com testículo direito persistentemente impalpável e hemi-escroto hipodesenvolvido (confirmando criptorquidia verdadeira), a cirurgia de orquidopexia eletiva deve ser programada de imediato (preferencialmente idealizada entre os 6 e 18 meses de vida). A correção precoce preserva a espermatogênese residual, facilita o acompanhamento para detecção precoce de malignização e previne torções ou hérnias associadas. Sobre os distratores: (A) Aguardar até a puberdade é incorreto e resulta em atrofia testicular irreversível e esterilidade. (C) Dosagens hormonais não são necessárias rotineiramente para criptorquidia unilateral em paciente hígido. (D) O tratamento clínico com hCG tem baixíssima taxa de eficácia a longo prazo e não é indicado como primeira linha.',
    reference: 'American Urological Association Guidelines. ASHCRAFT, Keith W.; HOLCOMB, George W.; MURPHY, J. Patrick. Pediatric Surgery. 7. ed. Philadelphia: Elsevier, 2020.',
    tags: ['Pediatria', 'Cirurgia Pediátrica', 'Criptorquidia']
  },
  {
    id: 'tp2026-77',
    module: 'Cirurgia',
    text: 'Mulher de 68 anos é internada em enfermaria, com queixa de dor abdominal e parada de eliminação de flatos e fezes há 3 dias, com vômitos há 24 horas. Ao exame físico, apresenta dor abdominal importante, com dor à descompressão brusca, FC 123bpm e PA 100x50mmHg. Tomografia de abdome total evidenciou massa abdominal em sigmoide com oclusão intestinal. Diante do quadro exposto, qual a conduta inicial adequada?',
    options: [
      '(A) Cirurgia de urgência.',
      '(B) Tratamento conservador; não havendo melhora clínica, indicar cirurgia.',
      '(C) Administrar sintomáticos e iniciar quimioterapia após melhora clínica.',
      '(D) Radioterapia redutora antes da cirurgia definitiva.'
    ],
    correctAnswer: 0,
    explanation: 'Diante de um quadro de abdome agudo obstrutivo total (com sinais de sofrimento de alça/peritonite, desidratação e taquicardia) secundário a uma neoplasia obstrutiva de sigmoide, a conduta imediata e mandatória é a cirurgia de urgência.',
    commentary: 'A paciente apresenta quadro típico de abdome agudo obstrutivo baixo (parada de eliminação de gases e fezes, vômitos feculoides tardios) com sinais de gravidade sistêmica e complicação local (taquicardia, dor abdominal intensa com descompressão dolorosa positiva, sugerindo isquemia ou perfuração iminente de alça). A tomografia confirma obstrução mecânica por massa em sigmoide (provável adenocarcinoma colorretal obstrutivo). Neste cenário de oclusão total com sinais de sofrimento abdominal, medidas conservadoras estão contraindicadas, exigindo-se cirurgia de urgência (laparotomia com ressecção tumoral e colostomia terminal à Hartmann ou anastomose primária com estoma de proteção). Sobre os distratores: (B) O tratamento conservador é inútil e perigoso na oclusão neoplásica total mecânica com peritonite. (C, D) A quimioterapia e radioterapia neoadjuvantes necessitam de estadiamento prévio e não têm papel no tratamento agudo de uma emergência cirúrgica obstrutiva com abdome agudo.',
    reference: 'SOCIEDADE BRASILEIRA DE ONCOLOGIA CLÍNICA (SBOC). Diretrizes SBOC: câncer colorretal. São Paulo: SBOC, [2024 ou 2025].',
    tags: ['Oncologia', 'Urgência e Emergência', 'Abdome Agudo']
  },
  {
    id: 'tp2026-78',
    module: 'Cirurgia',
    text: 'Mulher de 65 anos refere sangramento às evacuações e exteriorização de massa anal durante o esforço evacuatório. Antecedente de três partos normais e obstipação intestinal. Exame proctológico: hemorroidas mistas com componente interno importante e prolapso à manobra de Valsalva, redutível ao toque. O mecanismo fisiopatológico envolvido no quadro é:',
    options: [
      '(A) Hipertrofia progressiva dos plexos hemorroidários, por hiperplasia vascular local.',
      '(B) Aumento persistente da pressão venosa no plexo hemorroidário, decorrente do esforço evacuatório crônico.',
      '(C) Degeneração do tecido de sustentação dos coxins hemorroidários e dilatação dos plexos vasculares anorretais.',
      '(D) Inflamação crônica da mucosa perianal, com congestão vascular secundária.'
    ],
    correctAnswer: 2,
    explanation: 'A fisiopatologia da doença hemorroidária envolve a degeneração do tecido conjuntivo de sustentação dos coxins vasculares (como o ligamento de Parks) e a dilatação progressiva dos plexos venosos anorretais, promovendo o deslocamento e prolapso desses coxins através do canal anal.',
    commentary: 'A fisiopatologia mais aceita para a doença hemorroidária baseia-se na teoria do deslizamento/deslocamento dos coxins anales. Os coxins hemorroidários são estruturas anatômicas normais compostas por anastomoses arteriovenosas e tecido conjuntivo elástico de suporte (estroma de sustentação). Com o envelhecimento, gestações sucessivas, esforço evacuatório repetido e obstipação, ocorre a degeneração e frouxidão do colágeno e das fibras de sustentação muscular desses coxins (desintegração do tecido de suporte). Consequentemente, esses coxins dilatam-se e deslizam canal anal abaixo, manifestando-se como sangramento e prolapso hemorroidário. Sobre os distratores: (A) Não há hiperplasia celular verdadeira ou hipertrofia tumoral. (B) Embora a hipertensão venosa participe da congestão, estudos mostram que a constipação/esforço crônico não causa hemorroidas isoladamente na ausência de degeneração do tecido colágeno de suporte anal (muitos obstipados crônicos têm canal anal normal e vice-versa). (D) A inflamação local é um evento secundário ao trauma e engasgamento das hemorroidas prolapsadas, não a causa primária.',
    reference: 'Coelho, Júlio Cezar Uili. Aparelho digestivo: clínica e cirurgia/Júlio Coelho. 4a edição - São Paulo: Editora Atheneu, 2012.',
    tags: ['Coloproctologia', 'Hemorroidas', 'Fisiopatologia']
  },
  {
    id: 'tp2026-79',
    module: 'Cirurgia',
    text: 'Homem de 68 anos, com histórico de fibrilação atrial crônica e dislipidemia, procura a emergência com dor abdominal intensa, de início súbito, periumbilical, há 6 horas. A intensidade da dor é desproporcional aos achados do exame físico abdominal, que demonstra apenas leve distensão e pouca sensibilidade à palpação. Os exames laboratoriais iniciais revelam leucocitose e acidose metabólica com elevação do lactato. Qual é o exame de imagem mais indicado para confirmar o diagnóstico e planejar o tratamento neste momento?',
    options: [
      '(A) Ultrassonografia abdominal com doppler.',
      '(B) Angiotomografia Computadorizada (AngioTC) de abdômen e pelve.',
      '(C) Ressonância Nuclear Magnética (RNM) abdominal.',
      '(D) Radiografia simples de abdome em posição ortostática.'
    ],
    correctAnswer: 1,
    explanation: 'A Angiotomografia Computadorizada (AngioTC) de abdômen e pelve (com contraste venoso em fases arterial e portal) é o padrão-ouro não invasivo e exame de escolha imediato para o diagnóstico de Isquemia Mesentérica Aguda.',
    commentary: 'O quadro clássico de dor abdominal aguda desproporcional aos achados físicos num paciente com fibrilação atrial (fator cardioembólico) é altamente sugestivo de Isquemia Mesentérica Aguda (IMA), secundária a embolia da artéria mesentérica superior. O exame padrão-ouro imediato é a AngioTC abdominal. Esse exame permite identificar diretamente falhas de enchimento vascular (trombos/êmbolos), avaliar sinais de sofrimento de parede de alça (pneumatose intestinal, espessamento de parede, falha de realce de contraste) e orientar o planejamento cirúrgico reconstrutor ou de ressecção. Sobre os distratores: (A) O ultrassom com Doppler tem baixa acurácia na emergência devido ao meteorismo intestinal obstrutivo que impede a visibilização das artérias mesentéricas distais. (C) A RNM é demorada, de baixa disponibilidade na urgência e incompatível com o diagnóstico célere necessário na IMA. (D) A radiografia simples só revela alterações em fases extremamente tardias de perfuração ou necrose avançada (como pneumoperitônio ou pneumatose), não auxiliando no diagnóstico precoce.',
    reference: 'Sabiston Textbook of Surgery. Philadelphia: Elsevier; 2021.',
    tags: ['Vascular', 'Isquemia Mesentérica', 'Urgência e Emergência']
  },
  {
    id: 'tp2026-80',
    module: 'Cirurgia',
    text: 'Homem, de 28 anos, é levado ao pronto-socorro após ser atingido por uma barra de ferro na região têmporo-parietal direita em uma briga. No local do incidente, o paciente apresentou uma breve perda de consciência, mas recuperou-se totalmente, conversando com os socorristas (Escala de Coma de Glasgow 15). Durante o transporte, ele tornou-se subitamente sonolento, evoluindo rapidamente para coma (Glasgow 7) e apresentando midríase à direita. Qual é a principal hipótese diagnóstica e o achado radiológico esperado na Tomografia de Crânio?',
    options: [
      '(A) Lesão axonal difusa; múltiplos pontos hemorrágicos na transição entre substância branca e cinzenta.',
      '(B) Hematoma subdural agudo; imagem hipodensa em formato de crescente (côncavo-convexo).',
      '(C) Hemorragia subaracnoidea traumática; sangue preenchendo as cisternas da base.',
      '(D) Hematoma epidural (extradural); imagem hiperdensa em formato de lente biconvexa.'
    ],
    correctAnswer: 3,
    explanation: 'O quadro clínico de trauma temporal seguido de perda transitória de consciência, "intervalo lúcido", e posterior deterioração neurológica súbita com midríase ipsilateral (herniação uncal) é clássico do Hematoma Epidural (Extradural), cujo achado tomográfico é uma imagem hiperdensa em formato de lente biconvexa.',
    commentary: 'O hematoma epidural (extradural) decorre do sangramento arterial (frequentemente da artéria meníngea média) entre a dura-máter e a tábua óssea interna do crânio, comumente após fratura do osso temporal. Apresenta o clássico padrão de "intervalo lúcido": trauma inicial seguido de desmaio breve, recuperação neurológica completa e posterior declínio neurológico catastrófico devido à rápida expansão do hematoma e compressão cerebral. A midríase ipsilateral é decorrente da herniação do uncus do lobo temporal que comprime o terceiro par craniano (oculomotor) ipsilateral. Na TC de crânio, observa-se uma coleção de sangue hiperdensa limitada pelas suturas cranianas, formando o aspecto de lente biconvexa. Sobre os distratores: (A) A LAD cursa com coma imediato desde o impacto, sem intervalo lúcido. (B) O hematoma subdural agudo tem formato em crescente (côncavo-convexo) e decorre tipicamente de ruptura de veias em ponte, com pior prognóstico e evolução menos focal/lúcida. (C) A HSA traumática cursa com cefaleia súbita e sangue nas cisternas e sulcos, sem o efeito de massa biconvexo agudo descrito.',
    reference: 'ATLS (Advanced Trauma Life Support). 11ª Edição. American College of Surgeons. Sabiston Textbook of Surgery: The Biological Basis of Modern Surgical Practice. 21st Edition. Manual MSD - Versão para Profissionais de Saúde: Traumatismo Cranioencefálico (TCE).',
    tags: ['Trauma', 'Neurocirurgia', 'TCE']
  },
  // ---- Teste de Progresso 2019 (gabarito oficial) ----
  {
    id: 'tp2019-61',
    module: 'Cirurgia',
    image: '/images/tp2019-61.PNG',
    text: 'Mulher, 68 anos, procura atendimento por quadro de dor abdominal em cólica há 3 dias, acompanhada de distensão, náuseas, hiporexia e parada de eliminação de flatos e fezes. Antecedentes pessoais: há seis meses apresenta emagrecimento e episódios de dores abdominais, associados a constipação intestinal. Exame físico: abdome distendido, globoso, hipertimpânico em andar superior, levemente doloroso, com massa endurecida palpável em hipogástrio. Radiografia de abdome: imagem abaixo.\n\nO diagnóstico e o achado de imagem são:',
    options: [
      '(A) Abdome agudo obstrutivo, pneumoperitônio e ausência de ar na ampola retal.',
      '(B) Constipação intestinal crônica, distensão de cólon e intestino delgado e ar na ampola retal.',
      '(C) Obstrução intestinal, distensão de alças de intestino delgado e cólon.',
      '(D) Obstrução intestinal baixa, distensão colônica e válvula ileocecal competente.'
    ],
    correctAnswer: 3,
    explanation: 'Idosa com alteração do hábito intestinal, emagrecimento e massa em hipogástrio, evoluindo com parada de eliminação de gases e fezes: obstrução intestinal baixa, provavelmente por neoplasia de cólon.\n\nA radiografia mostra distensão do cólon sem distensão significativa do delgado — sinal de válvula ileocecal competente, situação de alça fechada com risco de perfuração do ceco.',
    commentary: 'Não há pneumoperitônio na imagem. Não se trata de constipação crônica simples. A distensão concomitante de delgado e cólon ocorreria se a válvula ileocecal fosse incompetente.',
    reference: 'Sabiston – Tratado de Cirurgia – 2 Volumes – 18ª Ed. Beauchamp; Townsend; Courtney, Mary. Elsevier / Medicina Nacionais',
    tags: ['cirurgia', 'abdome agudo obstrutivo', 'câncer colorretal']
  },
  {
    id: 'tp2019-62',
    module: 'Cirurgia',
    text: 'Homem, 66 anos, atendido no serviço de emergência por parada de eliminação de fezes e flatos há 5 dias, associada a vômitos e aumento progressivo do volume abdominal. Refere que seu hábito intestinal é de uma evacuação a cada dois dias. Antecedente pessoal: laparotomia exploradora prévia, devido a úlcera gástrica perfurada há 20 anos. Exame físico: abdome globoso, timpânico, sem sinais de irritação peritoneal, com uma cicatriz xifopúbica. Radiografia de abdome: sinais de empilhamento de moedas e níveis hidroaéreos, sem pneumoperitônio.\n\nO diagnóstico etiológico e a conduta são:',
    options: [
      '(A) Bridas e aderências; tratamento clínico com sonda gástrica e jejum nas primeiras 48 a 72 horas.',
      '(B) Neoplasia de cólon; laparotomia exploradora.',
      '(C) Diverticulite aguda bloqueada; tratamento clínico com sonda gástrica, jejum e antibioticoterapia.',
      '(D) Hérnia femoral encarcerada; inguinotomia para correção da hérnia.'
    ],
    correctAnswer: 0,
    explanation: 'Obstrução de delgado (empilhamento de moedas e níveis hidroaéreos) em paciente com laparotomia prévia: a causa mais provável são bridas e aderências.\n\nSem sinais de sofrimento de alça ou peritonite, o tratamento inicial é conservador — jejum, sonda nasogástrica, hidratação e correção eletrolítica por 48–72 horas —, com cirurgia se não houver resolução.',
    commentary: 'O padrão de \'empilhamento de moedas\' é de delgado, não de cólon. Não há sinais de diverticulite. Não há hérnia descrita ao exame.',
    reference: 'SABISTON. Tratado de cirurgia: a base biológica da prática cirúrgica moderna. 19. ed. Elsevier, 2014. 2240p. / Tratado de cirurgia do CBC. 2. ed. Atheneu, 2015. 1612p.',
    tags: ['cirurgia', 'obstrução intestinal', 'bridas']
  },
  {
    id: 'tp2019-63',
    module: 'Cirurgia',
    image: '/images/tp2019-63.PNG',
    text: 'Homem, 68 anos, apresenta há 4 meses dificuldade para engolir, inicialmente apenas alimentos mais sólidos e atualmente até para beber água. Refere perda de 8kg neste período e sensação de fraqueza. Antecedentes pessoais: tabagista (4 cigarros de palha ao dia, por mais de 20 anos), etilista (2 doses de pinga ao dia, parou logo que os sintomas se iniciaram), e morou em zona rural na infância. Realizado exame contrastado do esôfago, a seguir.\n\nA hipótese diagnóstica e a respectiva justificativa são:',
    options: [
      '(A) Divertículo de terço médio do esôfago; exame contrastado mostrando imagem sacular em terço médio com retração da luz do esôfago.',
      '(B) Megaesôfago chagásico; história clínica típica, morou em zona rural e exame contrastado mostrando dilatação do esôfago com ondas terciárias.',
      '(C) Neoplasia de esôfago médio; disfagia progressiva, com irregularidade da mucosa do esôfago no seu terço médio, com dilatação a montante.',
      '(D) Estenose péptica em esôfago distal; disfagia de início súbito, tabagismo, etilismo e exame contrastado mostrando estenose em esôfago inferior.'
    ],
    correctAnswer: 2,
    explanation: 'Disfagia progressiva (de sólidos para líquidos), perda de peso, tabagismo e etilismo, com esôfago contrastado mostrando irregularidade e estreitamento da luz no terço médio e dilatação a montante: neoplasia de esôfago (carcinoma epidermoide é o tipo associado a tabaco e álcool).',
    commentary: 'No megaesôfago chagásico, a disfagia é longa e lenta, com afilamento distal regular em \'bico de pássaro\'. O divertículo é imagem sacular sem estenose. A estenose péptica é distal.',
    reference: 'Sabiston - Tratado de Cirurgia - 2 Volumes - 18ª Ed Beauchamp; Townsend; Courtney, MaryElsevier / MedicinaNacionais.',
    tags: ['cirurgia', 'câncer de esôfago', 'disfagia']
  },
  {
    id: 'tp2019-64',
    module: 'Cirurgia',
    text: 'Mulher de 65 anos apresenta há três dias icterícia, dor abdominal e urina de cor escura. Antecedentes pessoais: colecistopatia crônica calculosa, aguardando cirurgia. Exame físico: febril, ictérica 3+/4, com dor à palpação de hipocôndrio direito. Exames laboratoriais: bilirrubina total de 4,8 mg/dL (bilirrubina direta: 3,8 mg/dL), leucograma de 15.000/mm³ sem desvio.\n\nA hipótese diagnóstica mais provável é:',
    options: [
      '(A) Cólica biliar',
      '(B) Pancreatite aguda',
      '(C) Colecistite aguda calculosa',
      '(D) Coledocolitíase com colangite'
    ],
    correctAnswer: 3,
    explanation: 'Paciente com colelitíase que evolui com icterícia colestática (predomínio de bilirrubina direta), febre e dor em hipocôndrio direito — tríade de Charcot: coledocolitíase complicada por colangite.',
    commentary: 'A cólica biliar não causa febre nem icterícia. A colecistite aguda isolada não cursa com icterícia significativa. A pancreatite cursaria com dor em faixa e elevação de amilase/lipase.',
    reference: 'José Cesar Assef et. Al. Emergências cirúrgicas traumáticas e não traumáticas. Condutas e algorítimo. Capítulo 24. Colangite aguda. 9 13',
    tags: ['cirurgia', 'vias biliares', 'colangite']
  },
  {
    id: 'tp2019-65',
    module: 'Cirurgia',
    image: '/images/tp2019-65.PNG',
    text: 'Homem, 63 anos, refere o aparecimento de tumoração localizada no flanco esquerdo, ligeiramente dolorosa, com aumento discreto, porém progressivo do seu volume há seis meses. Nega traumatismo local ou sinais inflamatórios. Foi realizada tomografia computadorizada (abaixo).\n\nO diagnóstico é:',
    options: [
      '(A) Hérnia na linha semilunar de Spiegel',
      '(B) Hérnia lombar congênita',
      '(C) Sarcoma de retroperitôneo',
      '(D) Lipoma de parede abdominal'
    ],
    correctAnswer: 0,
    explanation: 'Tumoração lateral na parede abdominal anterior, de crescimento lento, com tomografia mostrando herniação através da aponeurose na linha semilunar, sob o oblíquo externo: hérnia de Spiegel.',
    commentary: 'A hérnia lombar ocorre na região posterior (triângulos de Petit e Grynfeltt). O sarcoma de retroperitônio é massa profunda. O lipoma é tumor de tecido gorduroso subcutâneo, sem defeito aponeurótico.',
    reference: 'Townsend CM (ed) et al. Sabiston textbook of surgery: the biological basis of modern surgical practice. 17th ed. Elsevier, Philadelphia, 2004:1214.',
    tags: ['cirurgia', 'hérnias de parede abdominal']
  },
  {
    id: 'tp2019-66',
    module: 'Cirurgia',
    image: '/images/tp2019-66.PNG',
    text: 'Homem, 57 anos, apresenta queixa de dor abdominal em hipocôndrio direito há cinco dias, associado a náuseas e vômitos. Comorbidades: hipertenso e diabético. Exame físico: mau estado geral, confuso, sudoreico, ictérico 2+/4+, T = 38°C, FC = 130bpm, SaO₂ ar ambiente = 95%, tempo de enchimento capilar > 2 segundos, PA = 70 x 45 mmHg. Abdome flácido, dolorido em hipocôndrio direito, ruídos hidroaéreos presentes. Exames laboratoriais: Hb: 13,0 g/dL; leucócitos: 16.000/mm³ com 10% de bastonetes; ureia: 98 mg/dL; creatinina sérica: 3,2 mg/dL; bilirrubinas totais: 6,9 mg/dL (direta: 4,0 mg/dL); AST 150u/mL; ALT: 101 u/mL; Gama-GT 980 u/mL; fosfatase alcalina: 748 u/mL; amilase: 80 u/mL. Tomografia de abdome apresentada abaixo.\n\nO diagnóstico, a síndrome e a conduta são, respectivamente:',
    options: [
      '(A) Colecistite; síndrome colestática; colecistectomia videolaparoscopica de urgência.',
      '(B) Colangite; pentalogia de Reynolds; estabilização hemodinâmica e colangiopancreatografia endoscópica retrógrada.',
      '(C) Colangite; tríade de Charcot; estabilização hemodinâmica e colangiopancreatografia endoscópica retrógrada.',
      '(D) Pancreatite; choque hipovolêmico; estabilização hemodinâmica e ressonância nuclear magnética de vias biliares.'
    ],
    correctAnswer: 1,
    explanation: 'Dor em hipocôndrio direito, febre e icterícia (tríade de Charcot) somadas a hipotensão/choque e confusão mental compõem a pêntade de Reynolds — colangite grave com sepse.\n\nO tratamento é estabilização hemodinâmica, antibioticoterapia e drenagem biliar urgente, preferencialmente por CPRE.',
    commentary: 'Com choque e confusão, o quadro já ultrapassou a tríade de Charcot. A colecistite não explica a icterícia colestática importante. A amilase normal afasta pancreatite.',
    reference: 'SABISTON. Tratado de cirurgia: a base biológica da prática cirúrgica moderna. 19. ed. Elsevier, 2014. 2240p.',
    tags: ['cirurgia', 'colangite', 'sepse']
  },
  {
    id: 'tp2019-67',
    module: 'Cirurgia',
    text: 'Homem, 18 anos, sem comorbidades, procura atendimento na UBS com queixa de dor lombar há 3 dias. A dor é intensa na região lombar e se irradia pela face posterior da coxa direita até o joelho. Há limitação da amplitude dos movimentos pela dor.\n\nO exame de sensibilidade é normal, como também o são os reflexos tendinosos profundos dos membros inferiores. A conduta é:',
    options: [
      '(A) Realizar ressonância magnética para investigar hérnia de disco extrusa e iniciar tratamento com medicação para dor neuropática.',
      '(B) Recomendar repouso absoluto e realização de radiografia de coluna lombar para investigar hérnia de disco.',
      '(C) Iniciar tratamento analgésico, podendo-se optar por anti-inflamatórios não hormonais e reservando o uso de opioides, se houver refratariedade.',
      '(D) Iniciar tratamento analgésico com medicação neuropática e analgesia simples de resgate (dipirona ou paracetamol).'
    ],
    correctAnswer: 2,
    explanation: 'Lombalgia aguda com dor referida à coxa, sem alteração de sensibilidade, reflexos ou força e sem sinais de alerta (déficit motor, alteração esfincteriana, febre, trauma, câncer): lombalgia mecânica inespecífica.\n\nNão há indicação de exame de imagem. O tratamento é sintomático (AINE ou analgésico simples, reservando opioides para refratários) e manter-se ativo.',
    commentary: 'Ressonância só é indicada com sinais de alerta ou falha do tratamento após semanas. Repouso absoluto atrasa a recuperação. Medicação para dor neuropática não se justifica sem radiculopatia.',
    reference: 'Brazil AV. et al. Diagnóstico e tratamento das lombalgias e lombociatalgias. Rev Bras Reumatol 2004; 44(6):419-25. / Stump PRNAG, Kobayashi R, Campos AW. Lombociatalgia. Rev Dor São Paulo 2016; 17(supl 1):S63-6.',
    tags: ['ortopedia', 'lombalgia', 'atenção primária']
  },
  {
    id: 'tp2019-68',
    module: 'Cirurgia',
    text: 'Mulher, 36 anos, procura atendimento ambulatorial para tratamento da obesidade. Refere ter obesidade há 12 anos, após gestação, e realizado inúmeras dietas sem sucesso. Fez uso de Sibutramina e Bupropiona nos últimos dois anos com efeitos colaterais (taquicardia e irritabilidade) e perda ponderal de 12kg. Ao exame: peso = 104kg; altura = 1,68m e IMC 36,8 kg/m². Refere esteatose hepática, doença do refluxo gastroesofágico e artropatia de joelho direito.\n\nA melhor orientação clínica para esta paciente é:',
    options: [
      '(A) Encaminhar para o serviço de cirurgia bariátrica, pois preenche os critérios de indicação cirúrgica.',
      '(B) Encaminhar para nutricionista e educador físico, e evitar o uso de medicamentos devido aos efeitos colaterais já observados.',
      '(C) Encaminhar para o endocrinologista e nutricionista, pois a paciente não preenche os critérios para cirurgia bariátrica.',
      '(D) Encaminhar para o nutricionista e prescrever sibutramina e naltrexona, por ser a melhor combinação medicamentosa para tratamento da obesidade.'
    ],
    correctAnswer: 0,
    explanation: 'IMC de 36,8 kg/m² com comorbidades relacionadas à obesidade (esteatose, refluxo, artropatia), obesidade há mais de 5 anos e falha de tratamento clínico por pelo menos 2 anos: preenche os critérios da Portaria 424/2013 do Ministério da Saúde para cirurgia bariátrica (IMC ≥ 35 com comorbidade).',
    commentary: 'Insistir apenas em tratamento clínico ou dizer que não há critério cirúrgico contraria as normas. Sibutramina com naltrexona não é combinação padrão.',
    reference: 'Portarias GM 424 e 425 / 2013 – Ministério da Saúde – Brasil.',
    tags: ['cirurgia', 'obesidade', 'cirurgia bariátrica']
  },
  {
    id: 'tp2019-69',
    module: 'Cirurgia',
    text: 'Menino, 10 anos, no 1º pós-operatório de apendicectomia por apendicite aguda perfurada, sonolento e hipoativo há 2 horas. A mãe relata que, antes disso, apresentou 3 episódios de vômitos, de conteúdo bilioso, em grande quantidade. Desde o momento da cirurgia, encontra-se em jejum e ainda não evacuou, mas está eliminando flatos. Hoje, urinou apenas uma vez, em pequena quantidade, urina de cor amarelo escura. Exame físico: REG, hipoativo, descorado 2+/4, anictérico, com turgor pastoso. T = 37,2ºC, FC = 106 bpm, FR = 15 irpm, PA = 100 x 70 mmHg. Abdome: ruídos hidroaéreos propulsivos, com dor à palpação profunda da região próxima à ferida cirúrgica, sem reação peritoneal.\n\nO diagnóstico é:',
    options: [
      '(A) Choque séptico',
      '(B) Abscesso intracavitário',
      '(C) Abdome agudo obstrutivo',
      '(D) Desidratação aguda'
    ],
    correctAnswer: 3,
    explanation: 'Criança no pós-operatório com vômitos volumosos, jejum, oligúria com urina concentrada, turgor pastoso, taquicardia e sonolência, mas com ruídos hidroaéreos presentes, eliminando flatos e sem peritonite: desidratação aguda por perdas não repostas.',
    commentary: 'Não há febre nem instabilidade compatíveis com choque séptico. O abscesso intracavitário surge mais tarde (5º–7º dia), com febre. Há eliminação de flatos, o que afasta obstrução.',
    reference: 'Carlotti APCP. Choque em crianças. Medicina (Ribeirão Preto) 2012; 45(2):197-207. / Spadella CT. Pós-operatório. In: Cataneo AJM, Kobayasi S. Clínica cirúrgica. Faculdade de Medicina de Botucatu – UNESP. Elsevier 2003. 254-61.',
    tags: ['cirurgia', 'pediatria', 'pós-operatório']
  },
  {
    id: 'tp2019-70',
    module: 'Cirurgia',
    text: 'Homem, 20 anos, vítima de capotamento de automóvel há 30 minutos, com escore de Glasgow = 7, com equimose periorbitária bilateral e trauma complexo de face com sangramento intenso.\n\nPA = 120 x 90 mmHg, FC = 100 bpm e FR = 18 ipm, saturação em ar ambiente de 96%. A conduta é:',
    options: [
      '(A) Pela dificuldade de intubação e riscos envolvidos, a melhor opção é a cricotiroidostomia.',
      '(B) Como o paciente está estável, pelo risco da intubação poderá receber oxigênio em máscara ou cateter.',
      '(C) Pelo risco de lesão da coluna cervical, a intubação nasotraqueal deverá ser realizada cuidadosamente.',
      '(D) Para garantir uma via aérea definitiva, deve-se realizar a traqueostomia de emergência.'
    ],
    correctAnswer: 0,
    explanation: 'Trauma grave com Glasgow 7 exige via aérea definitiva. Há trauma complexo de face com sangramento intenso e sinais de fratura de base de crânio (equimose periorbitária bilateral): a intubação orotraqueal é difícil e a nasotraqueal está contraindicada.\n\nNessa situação, a via aérea cirúrgica indicada na emergência é a cricotireoidostomia.',
    commentary: 'Oxigênio por máscara não protege a via aérea com Glasgow ≤ 8. A intubação nasotraqueal é contraindicada na suspeita de fratura de base de crânio. A traqueostomia não é procedimento de emergência no adulto.',
    reference: 'Advanced Trauma Life Support. 10ª ed. 2018',
    tags: ['cirurgia', 'trauma', 'via aérea']
  },
  {
    id: 'tp2019-71',
    module: 'Cirurgia',
    text: 'Homem, 59 anos, referia dispneia importante e apresentava história clínica compatível com pneumonia comunitária. Foi realizada uma radiografia de tórax, que evidenciou um derrame pleural volumoso ocupando os 2/3 inferiores do hemitórax direito. O paciente foi submetido a uma toracocentese diagnóstica.\n\nAs características do líquido pleural que indicam uma drenagem torácica imediata são:',
    options: [
      '(A) pH = 7,35; glicose = 70 mg%; DHL = 700 UI/L; predomínio de linfócitos e monócitos.',
      '(B) pH = 7,31; glicose = 80 mg%; DHL = 800 UI/L; predomínio de polimorfonucleares.',
      '(C) pH = 7,18; glicose = 40 mg%; DHL = 1200 UI/L; predomínio de polimorfonucleares.',
      '(D) Relação entre proteína do líquido pleural/sérica = 0,4; DHL do líquido pleural/sérica = 0,5, e DHL no líquido pleural ˂ 2/3 do limite superior no soro.'
    ],
    correctAnswer: 2,
    explanation: 'Derrame parapneumônico com pH < 7,2, glicose < 60 mg/dL, DHL elevada e predomínio de polimorfonucleares define derrame complicado/empiema, com indicação de drenagem torácica imediata.',
    commentary: 'A alternativa A é sugestiva de derrame linfocitário (tuberculose, por exemplo). A B ainda é limítrofe (pH > 7,2). A D é um transudato pelos critérios de Light.',
    reference: 'Catâneo, AJM & Kobayasi, S. Clínica Cirúrgica. Revinter, 2003.',
    tags: ['cirurgia', 'pneumologia', 'derrame pleural']
  },
  {
    id: 'tp2019-72',
    module: 'Cirurgia',
    text: 'Homem, 70 anos, deu entrada no Pronto-Socorro com quadro de dor abdominal, com irradiação para o dorso e para o flanco esquerdo, com início 4 horas antes da admissão hospitalar. Antecedentes pessoais: tabagismo, hipertensão arterial, enfisema pulmonar e dislipidemia. Exame físico: ansioso, sudoreico, PA = 90 x 50 mmHg, FC = 130 bpm. Ausculta cardíaca: presença de duas bulhas rítmicas e hipofonéticas. Abdome: massa pulsátil em região epigástrica, com dor intensa à palpação local e sinais de irritação peritoneal. MMII: pulsos femorais, poplíteos, tibiais posteriores e pediosos palpáveis, porém com amplitude diminuída.\n\nO diagnóstico é:',
    options: [
      '(A) Isquemia mesentérica aguda.',
      '(B) Oclusão aguda de aorta abdominal.',
      '(C) Rotura de aneurisma de aorta abdominal.',
      '(D) Rotura de hemangioma hepático.'
    ],
    correctAnswer: 2,
    explanation: 'Idoso tabagista e hipertenso com dor abdominal irradiada para o dorso, hipotensão e massa pulsátil: tríade clássica da rotura de aneurisma de aorta abdominal. É emergência cirúrgica.',
    commentary: 'A isquemia mesentérica cursa com dor desproporcional ao exame, sem massa pulsátil. A oclusão aguda da aorta causaria ausência de pulsos distais. Hemangioma hepático roto é raro e não se apresenta com massa pulsátil.',
    reference: 'Maffei FHA, Lastória S, Yoshida WB, Rollo HÁ, Giannini M, Moura R. Doenças Vasculares Periféricas. 2015. Quarta edição.',
    tags: ['cirurgia vascular', 'aneurisma de aorta']
  },
  {
    id: 'tp2019-73',
    module: 'Cirurgia',
    text: 'Homem, 45 anos, tabagista, etilista, deu entrada no PS com queixa de dor de forte intensidade em região mesogástrica de início súbito há 6 horas, após vômitos intensos. Exame físico: hálito etílico, hipocorado 1+/4+, PA = 100 x 60 mmHg, FC = 110 bpm, abdome tenso, em tábua, doloroso à palpação em região de mesogástrio, sinal de Jobert positivo.\n\nO diagnóstico e o exame complementar a se solicitar são, respectivamente:',
    options: [
      '(A) Gastrite aguda; endoscopia digestiva alta.',
      '(B) Úlcera perfurada; radiografia de tórax com cúpulas.',
      '(C) Úlcera terebrante; tomografia computadorizada de abdome.',
      '(D) Pancreatite aguda; amilase.'
    ],
    correctAnswer: 1,
    explanation: 'Dor abdominal súbita e intensa, abdome em tábua e sinal de Jobert (perda da macicez hepática por ar livre) em tabagista e etilista: úlcera péptica perfurada.\n\nA radiografia de tórax em pé com cúpulas diafragmáticas mostra pneumoperitônio.',
    commentary: 'Gastrite não causa peritonite com pneumoperitônio. A úlcera terebrante penetra órgão vizinho sem ar livre. A pancreatite não causa sinal de Jobert.',
    reference: 'Clínica Cirúrgica; Alipio Correia Neto, Manlio Esperanzini. Manual do Residente de Cirurgia.',
    tags: ['cirurgia', 'abdome agudo perfurativo']
  },
  {
    id: 'tp2019-74',
    module: 'Cirurgia',
    text: 'Mulher, 58 anos, hipertensa, é levada ao hospital devido a cefaleia súbita, intensa, acompanhada de vômitos e rebaixamento do nível de consciência há 3 horas. Exame físico: sonolenta, confusa, rigidez de nuca; PA = 200 x 120 mmHg, FC = 84bpm.\n\nO diagnóstico e a conduta são, respectivamente:',
    options: [
      '(A) Meningite meningogócica fulminante; punção liquórica.',
      '(B) Hemorragia subaracnoidea secundária a aneurisma roto; tomografia de crânio.',
      '(C) Acidente vascular cerebral hemorrágico intraparenquimatoso; angiografia digital cerebral.',
      '(D) Encefalopatia hipertensiva; nitroprussiato de sódio.'
    ],
    correctAnswer: 1,
    explanation: 'Cefaleia súbita e intensa (\'a pior da vida\'), vômitos, rebaixamento de consciência e rigidez de nuca: hemorragia subaracnoide, cuja principal causa espontânea é a rotura de aneurisma intracraniano.\n\nO primeiro exame é a tomografia de crânio sem contraste.',
    commentary: 'Na meningite há febre e pródromo. A angiografia é posterior à confirmação pela tomografia. A encefalopatia hipertensiva não cursa com cefaleia ictal e rigidez de nuca.',
    reference: 'Nitrini R, Bacheschi LA. A Neurologia que Todo Médico Deve Saber. Atheneu, São Paulo, 2003.',
    tags: ['neurologia', 'neurocirurgia', 'hemorragia subaracnoide']
  },
  {
    id: 'tp2019-75',
    module: 'Cirurgia',
    text: 'Mulher, 36 anos, renal crônica, em uso contínuo de AAS, foi submetida a passagem de cateter de diálise (Shilley) em veia subclávia direita para iniciar hemodiálise. O método foi realizado segundo a técnica de Seldinger, não guiado por ultrassom. Após o procedimento, a paciente começou a apresentar dispneia, taquipneia e dessaturação de O₂. Submetida a radiografia de tórax, que evidenciou hemotórax extenso à direita. Realizada drenagem torácica à direita com saída imediata de 800mL de sangue. A paciente manteve-se com episódios de hipotensão arterial e necessidade de transfusões sanguíneas sucessivas. O débito no dreno de tórax foi de 280 mL/hora nas primeiras 3 horas. Não há serviço de cirurgia endovascular disponível no hospital.\n\nAs indicações para abordagem cirúrgica da paciente são:',
    options: [
      '(A) Necessidade de transfusões sucessivas e débito do dreno > 200 mL/hora.',
      '(B) Débito do dreno > 250 mL/hora e uso de AAS.',
      '(C) Debito do dreno > 150 mL/hora e dessaturação de O₂.',
      '(D) Doença renal crônica dialítica e saída imediata de 800mL de sangue.'
    ],
    correctAnswer: 0,
    explanation: 'Pelo ATLS, as indicações de toracotomia no hemotórax são: drenagem imediata ≥ 1.500 mL, débito ≥ 200 mL/h por 2–4 horas ou necessidade persistente de transfusão.\n\nA paciente mantém débito de 280 mL/h por 3 horas e precisa de transfusões sucessivas — e não há serviço endovascular disponível.',
    commentary: 'O uso de AAS, a doença renal crônica e a dessaturação não são critérios de indicação cirúrgica. A drenagem inicial de 800 mL não atinge o limiar de 1.500 mL.',
    reference: 'Advanced Trauma Life Support. 10ª ed. 2018',
    tags: ['cirurgia', 'hemotórax', 'complicações de procedimentos']
  },
  {
    id: 'tp2019-76',
    module: 'Cirurgia',
    text: 'Homem, 65 anos, trabalhador rural, apresenta lesão ulcerada de 3cm de diâmetro no antebraço direito há um ano. Refere sangramento esporádico.\n\nAo exame, apresenta lesão de margens elevadas, não muito bem definidas, com aspecto perláceo, leito hipervascularizado e ulceração central. A conduta é:',
    options: [
      '(A) Curetagem seguida de eletrocoagulação do leito, com encaminhamento para anatomia patológica e posterior ampliação de margens, se necessário.',
      '(B) Ressecção com margens superficiais de 0,5 a 1cm, e encaminhamento para análise anátomo-patológica.',
      '(C) Biópsia, e somente após o resultado anátomo-patológico deverá ser realizado o tratamento cirúrgico.',
      '(D) Radioterapia inicial para obter regressão do tumor e, após 30 dias, biópsia excisional.'
    ],
    correctAnswer: 1,
    explanation: 'Lesão ulcerada de crescimento progressivo, com bordas elevadas e infiltradas, em área fotoexposta de trabalhador rural, com sangramento: a banca a interpreta como carcinoma espinocelular.\n\nSem dúvida diagnóstica e com lesão ressecável, a conduta é a excisão com margens de segurança e exame anatomopatológico da peça.',
    commentary: 'Curetagem e eletrocoagulação não permitem avaliar margens. Biópsia prévia é desnecessária quando a ressecção é factível. Radioterapia inicial não é a escolha. Observação: o aspecto \'perláceo\' descrito evoca carcinoma basocelular; de todo modo, a excisão com margens é a conduta adequada para ambos.',
    reference: 'Guia de Cirurgia Plástica. Ferreira LM. Editor da Série: Schor N. 2007 – Barueri: Ed. Manole, p. 259. / Plastic Surgery. Stephen Mathes. Esevier, 2nd Edition, 2006, p. 391.',
    tags: ['cirurgia', 'câncer de pele', 'carcinoma espinocelular']
  },
  {
    id: 'tp2019-77',
    module: 'Cirurgia',
    text: 'Menino, 13 anos, apresentou queda sobre objeto cortante em via pública. Dá entrada no Pronto-Socorro com perfuração do olho direito.\n\nAté a chegada do oftalmologista, a conduta é:',
    options: [
      '(A) Aplicação de anestésico tópico e tampão ocular.',
      '(B) Curativo compressivo e antibioticoterapia sistêmica.',
      '(C) Lavagem com água corrente e antibioticoterapia tópica.',
      '(D) Oclusão ocular com gaze e verificação de vacinação antitetânica.'
    ],
    correctAnswer: 3,
    explanation: 'No trauma ocular penetrante, até a avaliação do oftalmologista, deve-se proteger o olho com oclusão sem compressão (gaze ou protetor rígido), evitar manipulação e colírios/pomadas e verificar a vacinação antitetânica.',
    commentary: 'Curativo compressivo pode extruir o conteúdo ocular. Lavagem e antibiótico tópico manipulam o olho perfurado. Anestésico tópico não deve ser usado.',
    reference: 'VAUGHAN, D – Oftalmologia Geral / RODRIGUES, M.L.V. - Oftalmologia Clínica',
    tags: ['oftalmologia', 'trauma ocular']
  },
  {
    id: 'tp2019-78',
    module: 'Cirurgia',
    text: 'Mulher, 46 anos, chega à unidade de pronto atendimento com quadro de dor em região lombar e flanco direito, vômitos, febre, taquicardia e mal-estar. Relata antecedente de urolitíase. Apresenta melhora parcial com analgésico, antitérmico e antiemético endovenosos. Exames: Hemograma: glóbulos brancos 19.600/mm³, bastões 15%; creatinina: 2,1 mg/dL; urina I: leucocitúria importante e hematúria.\n\nTomografia de abdome evidencia cálculo ureteral proximal à direita com cerca de 0,8cm, com dilatação moderada ureteropielocalicial a montante e borramento peri-renal. A conduta é:',
    options: [
      '(A) Antibioticoterapia por 14 dias, analgesia e acompanhamento clínico ambulatorial.',
      '(B) Antibioticoterapia, equilíbrio hemodinâmico e desobstrução de emergência (cateter ureteral duplo J ou nefrostomia).',
      '(C) Antibioticoterapia, ureterolitotripsia endoscópica para retirada do cálculo e hidratação com solução isotônica.',
      '(D) Litotripsia extracorpórea, equilíbrio hemodinâmico e analgesia.'
    ],
    correctAnswer: 1,
    explanation: 'Cálculo ureteral obstrutivo com sinais de infecção (febre, leucocitose com desvio, leucocitúria) e lesão renal: pielonefrite obstrutiva, uma emergência urológica.\n\nA conduta é antibioticoterapia, suporte hemodinâmico e desobstrução de urgência da via urinária (cateter duplo J ou nefrostomia). O cálculo é tratado depois.',
    commentary: 'Tratamento ambulatorial é inadequado. A retirada do cálculo (ureteroscopia ou litotripsia) deve ser adiada até o controle da infecção, pelo risco de sepse.',
    reference: 'Pearle MS, Antonelli JA, Lotan Y. Urinary Lithiasis. In: Campbell-Walsh Urology, 11th ed. Editor-in-chief, Alan J. Wein. Local: Philadelphia, 2016. Elsevier. / Türk C, Neisius A, Petrik A, Seitz C, Skolarikos A, Tepeler A, Thomas K. Guidelines on Urolithiasis, 2016 (atualização 2017). European Association of Urology.',
    tags: ['urologia', 'litíase urinária', 'sepse']
  },
  {
    id: 'tp2019-79',
    module: 'Cirurgia',
    text: 'Homem, 60 anos, com sintomas miccionais leves, procurou atendimento ambulatorial para avaliação prostática. O toque retal mostrou próstata fibroelástica, sem nódulos e com peso estimado de 30 gramas. A dosagem do Antígeno Prostático Específico (PSA) total foi de 11,8 ng/mL (VR: até 4,0 ng/mL) e o exame de sedimento urinário foi normal.\n\nA melhor conduta é:',
    options: [
      '(A) Tomografia computadorizada da pelve, para melhor avaliação prostática.',
      '(B) Dosagem de enzimas hepáticas que podem interferir com o valor do PSA.',
      '(C) Ultrassonografia transretal com biópsia prostática.',
      '(D) Reavaliação clínica e laboratorial em seis meses.'
    ],
    correctAnswer: 2,
    explanation: 'PSA de 11,8 ng/mL (acima de 10) com próstata pequena (30 g) e sedimento normal: a probabilidade de câncer é alta. Está indicada biópsia prostática guiada por ultrassonografia transretal.',
    commentary: 'Tomografia não diagnostica câncer de próstata. Enzimas hepáticas não interferem no PSA. Reavaliar em 6 meses atrasaria o diagnóstico. Observação: hoje, em muitos serviços, a ressonância multiparamétrica precede a biópsia.',
    reference: 'Campbell-Walsh, Urology, TenthEditionReview, 2012. 9 15',
    tags: ['urologia', 'câncer de próstata', 'PSA']
  },
  {
    id: 'tp2019-80',
    module: 'Cirurgia',
    text: 'Mulher, 21 anos, foi encaminhada ao serviço de cirurgia ambulatorial para uma biópsia de linfonodo cervical. Após o preparo pré-operatório e antissepsia, foi iniciado o procedimento com anestesia local. Momentos após, ao se iniciar a manipulação do linfonodo, a paciente referiu gosto metálico na boca, vertigem e turvação visual. Passou a ficar agitada e a movimentar-se constantemente na maca.\n\nA causa dessas alterações e a conduta são:',
    options: [
      '(A) Ansiedade relacionada à cirurgia; administrar Midazolam endovenoso e concluir o procedimento.',
      '(B) Estimulação vagal secundária à manipulação cervical; interromper ou abreviar o procedimento e administrar atropina intravenosa.',
      '(C) Reação alérgica ao antisséptico de pele clorexedina; administrar anti-histamínico e corticosteroide endovenoso e concluir o procedimento.',
      '(D) Intoxicação sistêmica por anestésico local lidocaína; interromper ou abreviar o procedimento, promover oxigenação, monitorização contínua de sinais vitais.'
    ],
    correctAnswer: 3,
    explanation: 'Gosto metálico, tontura, turvação visual e agitação durante anestesia local são sinais precoces de toxicidade sistêmica por anestésico local (lidocaína). Podem evoluir para convulsões e arritmias.\n\nA conduta é interromper o procedimento, oxigenar, monitorizar e tratar complicações (benzodiazepínico para convulsão, emulsão lipídica em casos graves).',
    commentary: 'A ansiedade não causa gosto metálico. A resposta vagal cursa com bradicardia e hipotensão. A alergia à clorexidina provocaria urticária e broncoespasmo.',
    reference: 'Brunton, L.L. Goodman & Gilman: As Bases Farmacológicas da Terapêutica. 12ª ed. Rio de Janeiro: McGraw-Hill, 2012',
    tags: ['cirurgia', 'anestesiologia', 'toxicidade']
  }
];
