import { Question } from '../types';

// UNIFESP 2025 (residência médica, acesso direto) — 99 questões.
// Gabarito conferido no gabarito comentado do AjudaMédico; explicações com texto próprio.
export const UNIFESP_2025_QUESTIONS: Question[] = [
  {
    "id": "unifesp2025-1",
    "topography": "16",
    "topic": "Pré-operatório",
    "module": "Cirurgia",
    "text": "Mulher, 27 anos de idade, 55 kg e 1,65 m, submetida a raquianestesia e anestesia geral para tratamento cirúrgico de endometriose. Durante avaliação pré-anestésica foi identificado alto risco para náusea e vômito no pós-operatório.\n\nCom objetivo de reduzir o risco de ocorrência de complicação no pós-operatório, qual é a conduta mais adequada?",
    "options": [
      "(A) Anestesia balanceada com propofol, remifentanil e sevoflurano.",
      "(B) Anestesia inalatória com sevoflurano e óxido nitroso.",
      "(C) Anestesia combinada com propofol e isoflurano.",
      "(D) Anestesia venosa total com propofol e remifentanil."
    ],
    "correctAnswer": 3,
    "explanation": "A paciente reúne vários fatores de risco do escore de Apfel para náusea e vômito pós-operatórios (NVPO): sexo feminino, provável não tabagismo e cirurgia ginecológica/laparoscópica com previsão de opioide no pós-operatório.\n\nAlém da profilaxia antiemética multimodal, a medida mais eficaz é retirar da técnica anestésica os agentes emetogênicos — halogenados e óxido nitroso. A anestesia venosa total (TIVA) com propofol e remifentanil faz isso, e o próprio propofol tem efeito antiemético.",
    "commentary": "Anestesia balanceada (A): mantém um halogenado (sevoflurano), principal causa de NVPO nas primeiras horas; o propofol só na indução não neutraliza esse efeito.\n\nInalatória com sevoflurano e N₂O (B): é a combinação mais emetogênica possível para uma paciente de alto risco.\n\nPropofol e isoflurano (C): o isoflurano também é halogenado e mantém o risco elevado.",
    "reference": "Consenso de manejo de náusea e vômito pós-operatórios (Gan et al., 4ª diretriz, 2020) / Escore de Apfel",
    "tags": [
      "anestesiologia",
      "náusea e vômito pós-operatórios",
      "anestesia venosa total"
    ]
  },
  {
    "id": "unifesp2025-2",
    "topography": "16",
    "topic": "Obstrução intestinal",
    "module": "Cirurgia",
    "text": "75 anos de idade, apresenta dor abdominal em cólica de forte intensidade e com 36 horas de evolução, de localização difusa, acompanhado de náuseas e vômitos. Nas últimas 24 horas, nega eliminação de gases e fezes. Exame físico: REG, descorada, FC 90 bpm, PA 150 x 95 mm Hg, temperatura 37,5 °C; abdômen globoso, distendido, ruídos hidroaéreos aumentados, hipertimpanismo difuso e doloroso à palpação, mas sem sinais de irritação peritoneal. A sequência do Rx de abdome em três posições evidenciou estômago e alças intestinais difusamente dilatadas, níveis hidroaéreos e pneumocolangiograma presente.\n\nQual é o diagnóstico mais provável?",
    "options": [
      "(A) Hérnia interna",
      "(B) Trombose mesentérica",
      "(C) Íleo biliar",
      "(D) Neoplasia colorretal obstrutiva"
    ],
    "correctAnswer": 2,
    "explanation": "Idosa com obstrução intestinal mecânica (cólica, vômitos, parada de eliminação de gases e fezes, distensão e ruídos aumentados) e radiografia com aerobilia (pneumocolangiograma). Somando-se a dilatação de delgado e os níveis hidroaéreos, a aerobilia completa a tríade de Rigler do íleo biliar.\n\nO íleo biliar ocorre quando um cálculo grande passa para o duodeno por uma fístula colecistoentérica e impacta no íleo terminal. A fístula explica o ar nas vias biliares. É típico de mulheres idosas.",
    "commentary": "Hérnia interna (A): causa obstrução mecânica, mas não há mecanismo para ar na via biliar.\n\nTrombose mesentérica (B): dor desproporcional ao exame físico, com íleo paralítico ou sinais de isquemia (pneumatose, gás portal); não causa aerobilia nem quadro obstrutivo clássico.\n\nNeoplasia colorretal (D): obstrução de cólon, de instalação mais arrastada, sem pneumobilia.",
    "reference": "Sabiston Tratado de Cirurgia, 20ª ed. — Obstrução do intestino delgado",
    "tags": [
      "cirurgia geral",
      "obstrução intestinal",
      "íleo biliar",
      "tríade de Rigler"
    ]
  },
  {
    "id": "unifesp2025-3",
    "topography": "14",
    "topic": "Trauma",
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
    "id": "unifesp2025-4",
    "topography": "7.1",
    "topic": "Dissecção de aorta",
    "module": "Cirurgia",
    "text": "Homem, 48 anos de idade, previamente assintomático, comparece ao PS com dor torácica de forte intensidade, em aperto, com início súbito e irradiação para dorso e região interescapular, há 2 horas. Exame físico: sudoreico, FC 100 bpm, PA 190 x 100 mm Hg nos quatro membros, pulsos rítmicos e presença de sopro diastólico suave, 4+/6+, no foco aórtico.\n\nApós análise do eletrocardiograma, qual é a conduta mais adequada?",
    "options": [
      "(A) Cirurgia de emergência",
      "(B) Angioplastia primária da artéria culpada",
      "(C) Passagem de balão intra-aórtico",
      "(D) Trombólise com alteplase"
    ],
    "correctAnswer": 0,
    "explanation": "Dor torácica súbita e lancinante, irradiada para dorso e região interescapular, com hipertensão grave e sopro diastólico novo no foco aórtico (insuficiência aórtica aguda), é dissecção aguda de aorta tipo A (aorta ascendente) até prova em contrário.\n\nO ECG mostra supradesnivelamento de ST em parede inferior (DII, DIII e aVF). A dissecção que se estende até o óstio da coronária direita pode simular um infarto inferior. O tratamento da dissecção tipo A é cirúrgico de emergência, com controle de FC e PA até a cirurgia.",
    "commentary": "Angioplastia primária (B): tratar o supra de ST como infarto aterotrombótico atrasa a cirurgia e expõe o paciente a anticoagulação e antiagregação, potencialmente fatais na dissecção.\n\nBalão intra-aórtico (C): contraindicado na dissecção de aorta e na insuficiência aórtica significativa.\n\nTrombólise (D): contraindicação absoluta; pode levar a ruptura e tamponamento.",
    "reference": "Diretriz da SBC sobre doenças da aorta / ESC Guidelines on aortic diseases",
    "tags": [
      "cirurgia cardiovascular",
      "dissecção de aorta",
      "dor torácica",
      "eletrocardiograma"
    ],
    "image": "/images/unifesp2025-4.webp"
  },
  {
    "id": "unifesp2025-5",
    "topography": "3.4",
    "topic": "Pancreatite aguda",
    "module": "Cirurgia",
    "text": "Mulher, 47 anos de idade, antecedente de colelitíase, dá entrada no PS com queixa de dor epigástrica há 8 horas. Exame físico: estável hemodinamicamente, com abdômen distendido, doloroso difusamente no andar superior e DB negativa. Exames laboratoriais: leucograma 14.120 células/mm³ (80% de neutrófilos), PCR 32 mcg/dL e amilase 1.340 mcg/dL.\n\nQual é a conduta nutricional mais adequada?",
    "options": [
      "(A) Dieta oral após melhora da dor e da amilase.",
      "(B) Dieta oral entre 24 a 48 horas.",
      "(C) Dieta enteral por sonda pós-pilórica.",
      "(D) Dieta parenteral por acesso venoso central."
    ],
    "correctAnswer": 1,
    "explanation": "Pancreatite aguda biliar (dor epigástrica, amilase acima de 3 vezes o normal e colelitíase), hemodinamicamente estável e sem sinais de disfunção orgânica: quadro leve.\n\nNa pancreatite leve, as diretrizes recomendam reintroduzir a dieta oral precocemente, em 24 a 48 horas, conforme a tolerância. Não é preciso esperar a dor desaparecer nem a amilase normalizar. A alimentação precoce reduz complicações infecciosas e o tempo de internação.",
    "commentary": "Esperar melhora da dor e da amilase (A): conduta antiga; a normalização da amilase não orienta a realimentação e o jejum prolongado aumenta a translocação bacteriana.\n\nEnteral pós-pilórica (C): reservada a pacientes graves que não toleram dieta oral; a via gástrica geralmente é suficiente.\n\nParenteral (D): só se a via enteral for impossível ou insuficiente, pelo maior risco de infecção.",
    "reference": "Diretrizes ACG 2024 e AGA para pancreatite aguda / Classificação de Atlanta revisada",
    "tags": [
      "cirurgia geral",
      "pancreatite aguda",
      "nutrição"
    ]
  },
  {
    "id": "unifesp2025-6",
    "topography": "16",
    "topic": "Obstrução intestinal",
    "module": "Cirurgia",
    "text": "Um recém-nascido de 48 horas de vida apresenta vômitos biliosos e grande distensão abdominal. Eliminou mecônio 16 horas após o nascimento. Rx abdominal: intensa distensão de alças.\n\nQual é o diagnóstico mais provável?",
    "options": [
      "(A) Megacólon congênito.",
      "(B) Atresia jejunal.",
      "(C) Íleo meconial.",
      "(D) Obstrução duodenal."
    ],
    "correctAnswer": 1,
    "explanation": "Vômitos biliosos indicam obstrução abaixo da ampola de Vater. A grande distensão abdominal aponta para obstrução mais distal que a duodenal (a obstrução duodenal dá distensão só de abdome superior). A eliminação de mecônio em 16 horas é normal e torna menos provável a doença de Hirschsprung.\n\nNa atresia jejunoileal o RN elimina mecônio (às vezes em pouca quantidade ou acinzentado) e evolui nas primeiras 24–48 horas com vômitos biliosos e distensão, com radiografia mostrando alças dilatadas e ausência de ar distal.",
    "commentary": "Megacólon congênito (A): o atraso da eliminação de mecônio (> 48 h) é a marca da doença de Hirschsprung, o que não ocorreu.\n\nÍleo meconial (C): associado à fibrose cística, geralmente sem eliminação de mecônio e com aspecto de 'bolhas de sabão' na radiografia.\n\nObstrução duodenal (D): distensão restrita ao epigástrio e sinal da dupla bolha, sem 'intensa distensão de alças'.",
    "reference": "Tratado de Cirurgia Pediátrica (Maksoud) / Ashcraft's Pediatric Surgery",
    "tags": [
      "cirurgia pediátrica",
      "neonatologia",
      "atresia intestinal",
      "vômitos biliosos"
    ]
  },
  {
    "id": "unifesp2025-7",
    "module": "Cirurgia",
    "text": "Recém-nascido de 35 semanas de idade gestacional, apresenta desconforto respiratório logo após o nascimento. Ao exame, está cianótico +/4+, com murmúrio vesicular presente bilateralmente com roncos disseminados; sopro sistólico rude no foco aórtico; abdome globoso, distendido, flácido, RHA + e normais, ausência de orifício anal; apresenta escoliose e deformidade em perna e pé à direita.\n\nQual é a conduta inicial mais adequada?",
    "options": [
      "(A) Ultrassonografia de abdome.",
      "(B) Ecocardiograma com doppler.",
      "(C) Tomografia computadorizada de tórax.",
      "(D) Passagem de sonda nasogástrica."
    ],
    "correctAnswer": 3,
    "explanation": "O RN tem anomalia anorretal (ausência de orifício anal), anomalia vertebral (escoliose), malformação de membro, provável cardiopatia (sopro) e roncos disseminados. É a associação VACTERL (vertebral, anal, cardíaca, traqueoesofágica, renal e de membros).\n\nNesse contexto é obrigatório pesquisar atresia de esôfago com fístula traqueoesofágica, que explica os roncos por aspiração de saliva. O primeiro passo, simples e à beira do leito, é passar sonda nasogástrica (orogástrica): se ela não progride, confirma-se a atresia. Isso define a conduta imediata (decúbito elevado, aspiração do coto e jejum) antes dos exames de imagem.",
    "commentary": "Ultrassonografia de abdome (A): necessária para pesquisar anomalias renais, mas não é a prioridade inicial.\n\nEcocardiograma (B): será feito (avaliação pré-operatória obrigatória), mas depois de afastar a atresia de esôfago, que muda o manejo imediato.\n\nTomografia de tórax (C): não está indicada na avaliação inicial.",
    "reference": "Tratado de Pediatria SBP — Malformações do trato digestivo / Associação VACTERL",
    "tags": [
      "cirurgia pediátrica",
      "neonatologia",
      "atresia de esôfago",
      "VACTERL",
      "anomalia anorretal"
    ]
  },
  {
    "id": "unifesp2025-8",
    "topography": "16",
    "topic": "Feridas",
    "module": "Cirurgia",
    "text": "Homem, 18 anos de idade, vítima de acidente por queda de moto, apresenta lesão na face posterior do antebraço direito. Exame físico: lesão de aproximadamente 25 x 7 cm, com sangramento e sujidade local, exposição da musculatura e gordura e sem exposição de vasos, nervos, tendões ou osso. Radiografia: ausência de fraturas. Submeteu-se a lavagem com desbridamento pela equipe da Cirurgia Geral. Após 10 dias, foi solicitada uma interconsulta para a equipe de Cirurgia Plástica.\n\nQual é a conduta mais adequada para a cobertura?",
    "options": [
      "(A) Enxerto de pele total.",
      "(B) Enxerto de pele parcial.",
      "(C) Retalho microcirúrgico.",
      "(D) Fechamento por segunda intenção."
    ],
    "correctAnswer": 1,
    "explanation": "Ferida extensa (25 x 7 cm) em antebraço, com exposição apenas de gordura e músculo, sem exposição de osso, tendão, vaso ou nervo, já desbridada há 10 dias e, portanto, com leito de granulação.\n\nUm leito bem vascularizado aceita enxerto, e para áreas extensas o enxerto de pele parcial é a escolha. Ele pega com mais facilidade, a área doadora reepiteliza sozinha e é possível cobrir grandes superfícies (inclusive com expansão em malha).",
    "commentary": "Enxerto de pele total (A): usado em áreas pequenas e de importância estética ou funcional (face, mãos); a área doadora limitada impede cobrir 25 x 7 cm.\n\nRetalho microcirúrgico (C): indicado quando há exposição de estruturas nobres (osso sem periósteo, tendão sem paratendão, vasos e nervos), ausentes aqui.\n\nSegunda intenção (D): uma ferida desse tamanho levaria muito tempo para fechar, com retração cicatricial e risco de limitação funcional.",
    "reference": "Escada reconstrutiva — Tratado de Cirurgia Plástica (SBCP) / Grabb and Smith's Plastic Surgery",
    "tags": [
      "cirurgia plástica",
      "enxerto de pele",
      "feridas"
    ]
  },
  {
    "id": "unifesp2025-9",
    "topography": "7.1",
    "topic": "Aneurisma de aorta abdominal",
    "module": "Cirurgia",
    "text": "Homem, 78 anos de idade, realizou ultrassonografia abdominal que evidenciou dilatação da aorta abdominal abaixo das artérias renais de 4,5 cm de diâmetro e 10 cm de extensão.\n\nQual é a conduta mais adequada?",
    "options": [
      "(A) Acompanhamento seriado com ultrassom a cada 6 meses.",
      "(B) Tratamento endovascular com prótese reta.",
      "(C) Cirurgia convencional.",
      "(D) Tratamento endovascular com prótese bifurcada."
    ],
    "correctAnswer": 0,
    "explanation": "Aneurisma de aorta abdominal infrarrenal assintomático de 4,5 cm em homem. A indicação de reparo eletivo em homens é diâmetro ≥ 5,5 cm, crescimento rápido (> 0,5 cm em 6 meses ou > 1 cm/ano) ou sintomas.\n\nAbaixo desse limiar, o reparo não reduz a mortalidade em relação à vigilância (ensaios UKSAT e ADAM). A conduta é o seguimento com ultrassonografia seriada, com intervalo menor (3 a 6 meses) para aneurismas entre 4,5 e 5,4 cm, além de controle de fatores de risco e cessação do tabagismo.",
    "commentary": "Endoprótese reta (B): não há indicação de reparo; além disso, a anatomia do AAA infrarrenal costuma exigir prótese bifurcada.\n\nCirurgia convencional (C): sem indicação abaixo de 5,5 cm em assintomático.\n\nEndoprótese bifurcada (D): seria a técnica endovascular usual, mas só quando houver indicação de reparo.",
    "reference": "ESVS 2024 Clinical Practice Guidelines on Abdominal Aorto-Iliac Artery Aneurysms / SBACV",
    "tags": [
      "cirurgia vascular",
      "aneurisma de aorta abdominal"
    ]
  },
  {
    "id": "unifesp2025-10",
    "topography": "15",
    "topic": "Estudos epidemiológicos",
    "module": "Saúde Coletiva",
    "text": "Um ensaio clínico randomizado é considerado \"duplo-cego\" quando são mascarados para o desfecho em questão:",
    "options": [
      "(A) Participantes e equipe.",
      "(B) Participantes, equipe e avaliadores de desfecho.",
      "(C) Equipe e avaliadores de desfecho.",
      "(D) Participantes e avaliadores de desfecho."
    ],
    "correctAnswer": 1,
    "explanation": "No uso tradicional, 'duplo-cego' significa que nem os participantes nem os investigadores e a equipe que conduz o estudo sabem quem recebe a intervenção. Na interpretação mais aceita, os avaliadores de desfecho também ficam mascarados, para que a aferição dos desfechos não seja influenciada pelo conhecimento do grupo.\n\nO gabarito adotou a definição ampla: participantes, equipe e avaliadores de desfecho. Por causa dessa variabilidade de terminologia, o CONSORT recomenda descrever explicitamente quem foi mascarado em vez de usar só o rótulo.",
    "commentary": "Participantes e equipe (A): definição clássica mais restrita, que não inclui os avaliadores de desfecho; o gabarito a considerou incompleta.\n\nEquipe e avaliadores (C): sem mascarar os participantes, o viés de desempenho e de relato persiste.\n\nParticipantes e avaliadores (D): deixa de fora a equipe que administra a intervenção.",
    "reference": "CONSORT 2010 / Fletcher — Epidemiologia Clínica: Elementos Essenciais",
    "tags": [
      "epidemiologia",
      "ensaio clínico",
      "mascaramento"
    ]
  },
  {
    "id": "unifesp2025-11",
    "topography": "3.1",
    "topic": "Diverticulose/diverticulite",
    "module": "Cirurgia",
    "text": "Homem, 70 anos de idade, com doença diverticular do cólon, apresenta-se estável hemodinamicamente, com dor abdominal intensa, febre e leucócitose. A tomografia computadorizada mostra um abscesso pericólico de 5 cm associado a diverticulite aguda.\n\nQual é a conduta inicial mais adequada?",
    "options": [
      "(A) Antibióticos intravenosos e observação.",
      "(B) Colectomia segmentar de urgência.",
      "(C) Cirurgia laparoscópica para drenagem e lavagem peritoneal.",
      "(D) Drenagem percutânea do abscesso guiada por imagem."
    ],
    "correctAnswer": 3,
    "explanation": "Diverticulite aguda complicada com abscesso pericólico de 5 cm (Hinchey Ib/II), em paciente estável.\n\nAbscessos maiores que 3–4 cm respondem mal só ao antibiótico, e a conduta inicial é a drenagem percutânea guiada por imagem associada à antibioticoterapia. Isso controla a sepse e evita a cirurgia de urgência. Se a cirurgia for necessária depois, ela pode ser feita de forma eletiva e em um tempo.",
    "commentary": "Antibiótico e observação (A): adequados para abscessos pequenos (< 3–4 cm).\n\nColectomia de urgência (B): reservada para peritonite generalizada (Hinchey III/IV) ou falha do tratamento conservador.\n\nLavagem laparoscópica (C): opção discutível na peritonite purulenta (Hinchey III), não no abscesso localizado drenável por via percutânea.",
    "reference": "Diretriz ASCRS 2020 para diverticulite / Classificação de Hinchey",
    "tags": [
      "coloproctologia",
      "diverticulite",
      "abscesso"
    ]
  },
  {
    "id": "unifesp2025-12",
    "topography": "2.1",
    "topic": "Derrame pleural",
    "module": "Cirurgia",
    "text": "Homem, 35 anos de idade, foi submetido à descorticação pulmonar devido empiema pleural em fase fibrinopurulenta. No pós-operatório, permaneceu com febre e a radiografia de tórax mostrou uma coleção pleural septada e única. O débito do dreno permanece com aspecto purulento.\n\nQual é a conduta mais adequada?",
    "options": [
      "(A) Trocar antibiótico.",
      "(B) Redrenar o tórax.",
      "(C) Pleurostomia.",
      "(D) Aspiração contínua."
    ],
    "correctAnswer": 2,
    "explanation": "Mesmo após a decorticação, persiste uma coleção pleural purulenta septada e única, com febre e saída de pus pelo dreno: é um empiema residual loculado em fase crônica, com pulmão encarcerado que não reexpande para obliterar a cavidade.\n\nNessa situação, a drenagem fechada não resolve. A conduta é a drenagem aberta (pleurostomia ou janela torácica), que garante o esvaziamento contínuo e a limpeza da cavidade até a sua obliteração. O pulmão já está aderido à parede, o que evita o colapso pulmonar.",
    "commentary": "Trocar antibiótico (A): o problema é a coleção não drenada; nenhum antibiótico esteriliza uma cavidade purulenta encistada.\n\nRedrenagem (B): um novo dreno fechado tem baixa chance de sucesso numa coleção septada e espessa após falha da decorticação.\n\nAspiração contínua (D): não resolve uma cavidade rígida, loculada e com pus espesso.",
    "reference": "Diretrizes da SBPT para derrame pleural e empiema / Shields — General Thoracic Surgery",
    "tags": [
      "cirurgia torácica",
      "empiema pleural",
      "pleurostomia"
    ]
  },
  {
    "id": "unifesp2025-13",
    "topography": "2.1",
    "topic": "Câncer de pulmão",
    "module": "Cirurgia",
    "text": "Homem, 70 anos de idade, apresenta adenocarcinoma em lobo superior do pulmão esquerdo. Durante estadiamento da neoplasia observou-se comprometimento dos linfonodos das cadeias 4 ipsilateral e 7. Não foram identificadas metástases no PET-CT.\n\nQual a conduta mais adequada?",
    "options": [
      "(A) Tratamento não cirúrgico.",
      "(B) Lobectomia superior esquerda.",
      "(C) Pneumonectomia esquerda.",
      "(D) Segmentectomia esquerda."
    ],
    "correctAnswer": 0,
    "explanation": "Adenocarcinoma de lobo superior esquerdo com comprometimento das cadeias 4L (paratraqueal inferior ipsilateral) e 7 (subcarinal): doença N2 multiestação, estádio III, sem metástases ao PET-CT.\n\nCom N2 multiestação comprovado no estadiamento, a ressecção primária não é recomendada. O tratamento padrão é não cirúrgico: quimiorradioterapia concomitante seguida de imunoterapia de consolidação (durvalumabe). A cirurgia fica restrita a casos selecionados após indução e resposta mediastinal.",
    "commentary": "Lobectomia (B): ressecção indicada em estádios I–II; na doença N2 multiestação não é o tratamento inicial.\n\nPneumonectomia (C): maior morbimortalidade, sem benefício oncológico na doença N2 multiestação.\n\nSegmentectomia (D): reservada a tumores periféricos pequenos (≤ 2 cm) e N0.",
    "reference": "NCCN Guidelines — Non-Small Cell Lung Cancer / Estadiamento TNM 8ª ed. (IASLC)",
    "tags": [
      "cirurgia torácica",
      "câncer de pulmão",
      "estadiamento"
    ]
  },
  {
    "id": "unifesp2025-14",
    "module": "Cirurgia",
    "text": "Mulher, 32 anos, vem ao ambulatório com tubo T devido estenose traqueal. Refere que está com esta órtese há 7 meses. Durante investigação complementar é realizada uma broncoscopia que evidencia estenose fixa, compreendendo 1º e 2º anéis traqueais sem processo inflamatório local.\n\nQual a conduta mais adequada?",
    "options": [
      "(A) Realizar a troca do tubo T.",
      "(B) Programar traqueoplastia.",
      "(C) Corticoterapia.",
      "(D) Cânula metálica."
    ],
    "correctAnswer": 1,
    "explanation": "Estenose traqueal fixa, curta (1º e 2º anéis), sem atividade inflamatória e já tratada com órtese (tubo T) por 7 meses: lesão cicatricial madura.\n\nSem inflamação e com segmento curto, a paciente é candidata ao tratamento definitivo com ressecção do segmento estenótico e anastomose término-terminal (traqueoplastia), que tem altas taxas de cura. O tubo T é uma medida temporária enquanto a lesão amadurece ou quando o paciente não pode ser operado.",
    "commentary": "Troca do tubo T (A): perpetua o tratamento paliativo em uma paciente candidata à correção definitiva.\n\nCorticoterapia (C): útil na fase inflamatória; não age sobre estenose fibrótica madura.\n\nCânula metálica (D): é uma traqueostomia definitiva, que não trata a estenose e compromete a fonação.",
    "reference": "Grillo HC — Surgery of the Trachea and Bronchi / Diretrizes da SBCT",
    "tags": [
      "cirurgia torácica",
      "estenose traqueal"
    ]
  },
  {
    "id": "unifesp2025-15",
    "topography": "4.2",
    "topic": "Câncer de bexiga",
    "module": "Cirurgia",
    "text": "Homem, 65 anos de idade, apresenta sangramento na urina há 6 meses. Exame físico: BEG, FC 80 bpm, PA 120x80 mm Hg, T 36,5 °C, e abdômen indolor à palpação. Exames: Hb 12,3 g/dL, leucócitos 9.000 células/mm³, plaquetas 170.000/mm³, Na 144 mEq/L, K 4,0 mEq/L, U 30 mg/dL, C 1,2 mg/dL, TGO 30 U/L, TGP 40 U/L, FA 30 U/L, GGT 50 U/L. Ultrassonografia do abdômen: lesão polipoide da bexiga de 3 cm na parede lateral direita, com presença de fluxo ao estudo Doppler. Submeteu-se à ressecção transuretral da lesão vesical.\n\nQual é o diagnóstico mais provável?",
    "options": [
      "(A) Carcinoma espinocelular.",
      "(B) Carcinoma urotelial.",
      "(C) Adenocarcinoma.",
      "(D) Carcinoma de pequenas células."
    ],
    "correctAnswer": 1,
    "explanation": "Hematúria macroscópica indolor em homem idoso, com lesão vegetante vesical vascularizada: câncer de bexiga até prova em contrário.\n\nMais de 90% dos tumores de bexiga no Brasil e no Ocidente são carcinomas uroteliais (de células transicionais), associados a tabagismo e exposição a aminas aromáticas.",
    "commentary": "Carcinoma espinocelular (A): raro; associado a inflamação crônica (esquistossomose por S. haematobium, sonda de demora, litíase).\n\nAdenocarcinoma (C): raro; associado a úraco persistente e extrofia vesical.\n\nPequenas células (D): variante neuroendócrina muito rara e agressiva.",
    "reference": "Campbell-Walsh Urology / Diretrizes da SBU para câncer de bexiga",
    "tags": [
      "urologia",
      "câncer de bexiga",
      "hematúria"
    ]
  },
  {
    "id": "unifesp2025-16",
    "topography": "4.2",
    "topic": "Retenção urinária",
    "module": "Cirurgia",
    "text": "Homem, 74 anos de idade, apresenta dor abdominal supra-púbica de forte intensidade, com última micção há 16 horas e perda urinária em gotas, em pouco volume. Exame físico: REG, afebril, globo vesical palpável. Exames laboratoriais: C 1,3 mg/dL, U 60 mg/dL, hemograma sem alteração. Realizado sondagem vesical de alívio, com saída de 1.300 mL de urina concentrada, e alívio do desconforto.\n\nQual é a conduta mais adequada?",
    "options": [
      "(A) Treinar cateterismo intermitente.",
      "(B) Passagem de sonda vesical de demora.",
      "(C) Iniciar terapia combinada com alfa-bloqueador e inibidor de 5-alfa-redutase.",
      "(D) Solicitar estudo urodinâmico."
    ],
    "correctAnswer": 1,
    "explanation": "Retenção urinária aguda com bexigoma, perda por transbordamento e esvaziamento de 1.300 mL no cateterismo, com elevação de ureia e creatinina (provável componente pós-renal). Em homem idoso, a causa mais comum é a hiperplasia prostática benigna.\n\nCom volume retido acima de 1.000 mL e repercussão renal, a bexiga está hiperdistendida e com contratilidade prejudicada. A conduta é deixar sonda vesical de demora por alguns dias para descompressão e recuperação do detrusor e da função renal, iniciando alfabloqueador antes de tentar a retirada.",
    "commentary": "Cateterismo intermitente (A): pode ser alternativa depois, mas na fase aguda, com bexiga hiperdistendida e função renal alterada, a drenagem contínua é preferível.\n\nTerapia combinada (C): faz parte do tratamento da HPB, mas não resolve a retenção atual; o inibidor da 5-alfa-redutase leva meses para agir.\n\nEstudo urodinâmico (D): não se faz na fase aguda; pode ser considerado depois na investigação.",
    "reference": "Diretrizes da SBU / AUA Guideline on Benign Prostatic Hyperplasia",
    "tags": [
      "urologia",
      "retenção urinária",
      "hiperplasia prostática benigna"
    ]
  },
  {
    "id": "unifesp2025-17",
    "module": "Cirurgia",
    "text": "Mulher, 62 anos de idade, em estado crítico após sepse grave, necessita de acesso vascular central para administração de medicamentos e monitorização hemodinâmica. Após a punção venosa, a ultrassonografia revela a presença de bolhas de ar entre a agulha de punção e a veia jugular interna.\n\nQual é a conduta mais adequada?",
    "options": [
      "(A) Aspirar as bolhas de ar com seringa e prosseguir com a inserção do cateter no mesmo sítio.",
      "(B) Realizar nova punção em outro local, sob orientação ultrassonográfica.",
      "(C) Injetar contraste venoso sob orientação ultrassonográfica para confirmar a punção correta.",
      "(D) Abandonar a inserção do acesso por veia jugular interna e considerar o acesso femoral."
    ],
    "correctAnswer": 1,
    "explanation": "Bolhas de ar no trajeto entre a agulha e a jugular interna indicam que a agulha atravessou uma estrutura com ar (ápice pleural ou traqueia) ou que entrou ar nos tecidos. O ar ainda gera artefatos que prejudicam a visão ultrassonográfica.\n\nA conduta mais segura é interromper a punção naquele sítio, comprimir, avaliar complicações (pneumotórax) e realizar nova punção em outro local, sempre guiada por ultrassom.",
    "commentary": "Aspirar e prosseguir (A): não corrige a causa e mantém a punção num campo com visão prejudicada e possível complicação.\n\nContraste venoso (C): não é usado para confirmar punção à beira do leito e não resolve o problema.\n\nAbandonar a jugular e ir para a femoral (D): não é obrigatório abandonar o território cervical; outro sítio guiado por ultrassom (como a jugular contralateral) é aceitável, e o acesso femoral tem maior risco de infecção e trombose.",
    "reference": "Diretrizes de acesso venoso central guiado por ultrassom (ASA 2020; WINFOCUS)",
    "tags": [
      "procedimentos",
      "acesso venoso central",
      "ultrassonografia"
    ]
  },
  {
    "id": "unifesp2025-18",
    "topography": "3.1",
    "topic": "Úlcera péptica",
    "module": "Cirurgia",
    "text": "Homem, 60 anos de idade, realizou endoscopia digestiva alta por melena sem repercussão hemodinâmica. O laudo apresenta lesão ulcerada bem delimitada de 8 mm na pequena curvatura do antro, com fundo recoberto por fibrina. A biópsia revelou gastrite crônica e presença de Helicobacter pylori.\n\nQual é a conduta mais adequada?",
    "options": [
      "(A) Nova endoscopia com biópsia.",
      "(B) Eco-endoscopia.",
      "(C) Angiotomografia.",
      "(D) Claritromicina 500 mg e amoxicilina 1 g, de 12/12 horas, por 7 dias."
    ],
    "correctAnswer": 0,
    "explanation": "Toda úlcera gástrica precisa ter malignidade excluída, porque o adenocarcinoma gástrico pode se apresentar como úlcera de aspecto benigno e uma biópsia isolada pode não amostrar o tumor.\n\nA conduta é tratar a úlcera (IBP e erradicação do H. pylori) e repetir a endoscopia com múltiplas biópsias da borda e do fundo, documentando a cicatrização e confirmando a erradicação. Por isso o gabarito escolheu a nova endoscopia com biópsia.",
    "commentary": "Ecoendoscopia (B): usada para estadiamento ou lesões subepiteliais, não na investigação de úlcera péptica.\n\nAngiotomografia (C): indicada em sangramento ativo não localizado ou refratário, não em úlcera com fibrina sem repercussão hemodinâmica.\n\nClaritromicina e amoxicilina (D): o esquema de erradicação exige IBP associado (terapia tripla) e, de preferência, 14 dias; sozinho, não substitui o controle endoscópico da úlcera gástrica.",
    "reference": "IV Consenso Brasileiro sobre Helicobacter pylori / ACG Guideline on Peptic Ulcer Bleeding",
    "tags": [
      "gastroenterologia",
      "úlcera gástrica",
      "H. pylori",
      "endoscopia"
    ],
    "alert": "O gabarito considera o achado como úlcera gástrica e indica repetir a endoscopia com biópsias. A erradicação do H. pylori também está indicada, mas o esquema da alternativa D está incompleto (falta o inibidor de bomba de prótons)."
  },
  {
    "id": "unifesp2025-19",
    "topography": "1.3",
    "topic": "Vertigem",
    "module": "Clínica Médica",
    "text": "Mulher, 44 anos de idade, apresenta quadro súbito de vertigem rotatória intensa há 3 horas, associada a náuseas, vômitos, sudorese profusa e mal-estar, que pioram à movimentação cefálica. Nega sintomas auditivos associados. Antecedentes: diabetes tipo 1 em uso de insulina, dislipidemia em uso de atorvastatina, hipertensão arterial em uso de anlodipino. Refere cefaleia por abuso de analgésico, em seguimento. Exame físico: PA 100x60 mmHg, FC 98 bpm, SatO₂ 98% em ar ambiente, dextro 113 mg/dL, REG, descorada (1+/4+), desidratada (2+/4+), eupneica. Nistagmo: espontâneo horizontal para a direita, semi espontâneo presente ao olhar para a direita (horizontal para a direita) e ao olhar para a esquerda (horizontal para a direita), sendo mais intenso com o olhar para a direita e ausente com o olhar para cima e para baixo. HIT (head impulse test): presença de sacada corretiva ao virar a cabeça para a esquerda. Otoscopia: membranas timpânicas íntegras e translúcidas, meato acústico externo livre. Paciente não tolerou testes de Romberg, Fukuda e manobras posicionais por quadro de vômitos e mal-estar.\n\nQual é o diagnóstico mais provável?",
    "options": [
      "(A) Migrânea vestibular.",
      "(B) Acidente Vascular Cerebral.",
      "(C) Vertigem Posicional Paroxística Benigna.",
      "(D) Neurite vestibular."
    ],
    "correctAnswer": 3,
    "explanation": "Síndrome vestibular aguda: vertigem rotatória intensa e contínua, com náuseas e vômitos, sem sintomas auditivos. O exame HINTS diferencia causa periférica de central:\n\n• Head impulse: sacada corretiva ao girar para a esquerda (alterado = periférico, hipofunção do vestíbulo esquerdo)\n• Nistagmo: horizontal, unidirecional, batendo para a direita (lado oposto à lesão) e mais intenso ao olhar nessa direção (lei de Alexander)\n• Sem nistagmo vertical\n\nEsse padrão periférico, sem sintomas auditivos, caracteriza neurite vestibular esquerda.",
    "commentary": "Migrânea vestibular (A): episódios de minutos a horas, com cefaleia migranosa ou fenômenos visuais; não produz déficit vestibular unilateral no head impulse.\n\nAVC (B): a paciente tem fatores de risco, mas o padrão HINTS é periférico (head impulse alterado, nistagmo unidirecional, sem desvio vertical); no AVC o head impulse costuma ser normal.\n\nVPPB (C): crises de segundos desencadeadas por mudanças de posição, sem vertigem contínua por horas nem nistagmo espontâneo.",
    "reference": "Tratado de Otorrinolaringologia ABORL-CCF / Kattah JC et al. — HINTS (Stroke, 2009)",
    "tags": [
      "otorrinolaringologia",
      "vertigem",
      "neurite vestibular",
      "HINTS"
    ]
  },
  {
    "id": "unifesp2025-20",
    "topography": "6.2",
    "topic": "Lesão do ligamento cruzado anterior",
    "module": "Cirurgia",
    "text": "Homem, 35 anos de idade, vem ao ambulatório de joelho após 3 semanas de acidente de carro no qual sofreu trauma direto no seu joelho esquerdo contra o painel do carro. Refere que na ocasião percebeu grande hematoma, inchaço e dor no joelho. Foi ao pronto socorro e realizou radiografias sem fraturas, sendo recomendado anti-inflamatórios e crioterapia. Exame físico: aumento da translação posterior do joelho esquerdo e deslizamento posterior da tíbia.\n\nQual é o diagnóstico mais provável?",
    "options": [
      "(A) Lesão do ligamento cruzado posterior.",
      "(B) Lesão do ligamento cruzado anterior.",
      "(C) Lesão do ligamento menisco-femoral.",
      "(D) Lesão do ligamento oblíquo posterior."
    ],
    "correctAnswer": 0,
    "explanation": "O mecanismo clássico de lesão do ligamento cruzado posterior (LCP) é o trauma direto na face anterior da tíbia proximal com o joelho fletido: a 'lesão do painel' no acidente automobilístico.\n\nO exame confirma: aumento da translação posterior (gaveta posterior positiva) e queda posterior da tíbia (sinal de Godfrey ou sag sign).",
    "commentary": "LCA (B): lesão por entorse em rotação com pé fixo, com gaveta anterior e Lachman positivos, não translação posterior.\n\nLigamento meniscofemoral (C): estrutura acessória do LCP; sua lesão isolada não produz instabilidade posterior franca.\n\nLigamento oblíquo posterior (D): faz parte do canto posteromedial; causa instabilidade em valgo e rotatória, não posterior pura.",
    "reference": "Campbell's Operative Orthopaedics / SBOT — Lesões ligamentares do joelho",
    "tags": [
      "ortopedia",
      "joelho",
      "ligamento cruzado posterior"
    ]
  },
  {
    "id": "unifesp2025-21",
    "topography": "2.2",
    "topic": "Infarto agudo do miocárdio",
    "module": "Clínica Médica",
    "text": "Homem, 65 anos de idade, apresentou dor precordial no domicílio, de forte intensidade, com irradiação para membro superior esquerdo e sudorese, porém só procurou atendimento médico 14 horas após o quadro, quando a dor já havia cessado. O exame cardíaco inicial não mostrou alterações significativas. ECG: supradesnivelamento do segmento ST de aproximadamente 1 mm nas derivações D2, D3 e aVF, com inversão de onda T e onda Q patológica nas mesmas derivações. Após 48 horas, notou-se um sopro holossistólico em ápice, irradiado para axila, associado a hipotensão arterial e má perfusão periférica.\n\nQual é a explicação mais provável para o quadro?",
    "options": [
      "(A) Ruptura do músculo papilar posterior.",
      "(B) Ruptura da parede livre de ventrículo esquerdo.",
      "(C) Comunicação interventricular.",
      "(D) Insuficiência aórtica."
    ],
    "correctAnswer": 0,
    "explanation": "Infarto de parede inferior (supra de ST, onda Q e inversão de T em DII, DIII e aVF) de apresentação tardia, sem reperfusão. Entre o 2º e o 7º dia surge sopro holossistólico apical irradiado para a axila (insuficiência mitral aguda), com hipotensão e má perfusão.\n\nÉ a ruptura do músculo papilar posteromedial. Ele tem irrigação única, em geral pela coronária direita (descendente posterior), e por isso é o mais vulnerável no infarto inferior. O anterolateral tem dupla irrigação. O tratamento é suporte (vasodilatador, balão intra-aórtico) e cirurgia de emergência.",
    "commentary": "Ruptura de parede livre (B): causa tamponamento com dissociação eletromecânica e morte súbita, sem sopro novo.\n\nComunicação interventricular (C): também causa sopro holossistólico novo, mas paraesternal esquerdo e com frêmito; não irradia para a axila.\n\nInsuficiência aórtica (D): sopro diastólico, e não é complicação mecânica do infarto.",
    "reference": "Diretriz da SBC sobre IAM com supradesnivelamento do ST / Braunwald's Heart Disease",
    "tags": [
      "cardiologia",
      "infarto agudo do miocárdio",
      "complicações mecânicas",
      "insuficiência mitral"
    ]
  },
  {
    "id": "unifesp2025-22",
    "topography": "8",
    "topic": "Distúrbios do cálcio",
    "module": "Clínica Médica",
    "text": "Mulher, 70 anos de idade, com hipertensão, osteoartrose e osteoporose em coluna lombar (T-score -2,9), realiza investigação laboratorial com os seguintes resultados: creatinina = 0,9 mg/dL (VR 0,6 a 1,1 mg/dL), TSH = 3,0 mUI/L (VR 0,44 a 5,4 mUI/L), PTH = 15 pg/mL (VR 22 a 84 pg/mL), cálcio total = 10,7 mg/dL (VR 8,6 a 10,3 mg/dL).\n\nQual medicamento listado abaixo pode causar a alteração laboratorial observada?",
    "options": [
      "(A) Denosumabe.",
      "(B) Glicocorticoide.",
      "(C) Diurético tiazídico.",
      "(D) Cloroquina."
    ],
    "correctAnswer": 2,
    "explanation": "A paciente tem hipercalcemia com PTH suprimido, ou seja, hipercalcemia não mediada por PTH. Entre as opções, o diurético tiazídico é o fármaco que eleva o cálcio sérico, por aumentar a reabsorção tubular distal de cálcio. A paciente é hipertensa, o que torna o uso provável.\n\nNo hiperparatireoidismo primário o PTH estaria alto ou inapropriadamente normal. Com PTH baixo, a causa é extraparatireoidiana: medicamentos (tiazídicos, intoxicação por vitamina D ou A), malignidade e doenças granulomatosas.",
    "commentary": "Denosumabe (A): inibe a reabsorção óssea e causa hipocalcemia, não hipercalcemia.\n\nGlicocorticoide (B): reduz a absorção intestinal e aumenta a excreção renal de cálcio; é inclusive tratamento de algumas hipercalcemias.\n\nCloroquina (D): não causa hipercalcemia; é usada para tratar a hipercalcemia de doenças granulomatosas.",
    "reference": "Harrison — Distúrbios do cálcio / Diretrizes da SBEM para hipercalcemia",
    "tags": [
      "endocrinologia",
      "hipercalcemia",
      "diurético tiazídico",
      "osteoporose"
    ]
  },
  {
    "id": "unifesp2025-23",
    "topography": "14",
    "topic": "Parada cardiorrespiratória",
    "module": "Clínica Médica",
    "text": "Homem, 55 anos de idade, com histórico de doença pulmonar obstrutiva crônica sofre uma parada cardiorrespiratória em atividade elétrica sem pulso enquanto estava na UTI. A equipe inicia as manobras de ressuscitação cardiopulmonar (RCP) imediatamente, mas não há retorno da circulação espontânea após 5 minutos. Durante a ressuscitação, o monitor de capnografia mostra um valor de dióxido de carbono ao final da expiração (ETCO₂) de 8 mmHg e a pressão arterial diastólica (PAD) é registrada como 15 mmHg durante as compressões torácicas.\n\nQual deve ser a próxima ação para melhorar a qualidade da RCP?",
    "options": [
      "(A) Manter as compressões torácicas sem alterações e aumentar a frequência da ventilação por minuto.",
      "(B) Reduzir o número de compressões, uma vez que os valores de ETCO₂ e PAD indicam uma velocidade de compressão excessiva.",
      "(C) Ajustar a profundidade e frequência das compressões torácicas para aumentar os valores de ETCO₂ e PAD.",
      "(D) Continuar as compressões torácicas sem alterações e administrar uma dose adicional de epinefrina."
    ],
    "correctAnswer": 2,
    "explanation": "Durante a RCP, ETCO₂ < 10 mmHg e pressão diastólica arterial < 20 mmHg (com linha arterial) indicam compressões de baixa qualidade e fluxo coronariano e cerebral insuficientes.\n\nA resposta é otimizar as compressões: profundidade de 5–6 cm, frequência de 100–120/min, retorno completo do tórax, mínimo de interrupções e troca do compressor a cada 2 minutos. O objetivo é elevar ETCO₂ e PAD.",
    "commentary": "Aumentar a ventilação (A): hiperventilar eleva a pressão intratorácica e reduz o retorno venoso; o problema é a compressão, não a ventilação.\n\nReduzir compressões (B): valores baixos indicam fluxo insuficiente, não excesso de velocidade.\n\nEpinefrina adicional sem ajuste (D): a epinefrina segue o intervalo de 3–5 minutos, mas não corrige compressões ineficazes.",
    "reference": "Diretrizes da AHA 2020/2023 para RCP e ACE / Atualização da Diretriz de RCP da SBC",
    "tags": [
      "emergência",
      "parada cardiorrespiratória",
      "capnografia",
      "RCP"
    ]
  },
  {
    "id": "unifesp2025-24",
    "topography": "8",
    "topic": "Prolactinoma",
    "module": "Clínica Médica",
    "text": "Mulher, 60 anos de idade, em amenorreia há quatro anos, foi recentemente diagnosticada com anemia e na investigação apresenta os seguintes exames: TSH = 1,97 mUI/mL (VR 0,45 a 4,5 mUI/mL), T4 livre = 0,3 ng/dL (VR 0,9 a 1,8 ng/dL), FSH = 4,0 mUI/mL (VR 3,6 a 16,6 mUI/mL), LH = 1,6 mUI/mL (VR 1,1 a 11,1 mUI/mL), cortisol = 6,6 mcg/dL (VR 5,0 a 25 mcg/dL), ACTH = 12,6 pg/mL (VR < 46 pg/mL), IGF-1 = 64 ng/mL (VR 83 a 241 ng/mL), prolactina = 80 ng/dL (VR 5 a 25 ng/dL). A ressonância magnética da sela túrcica evidenciou lesão hipofisária de 3,5 x 2,8 x 3,1 cm em região selar compatível com adenoma hipofisário.\n\nQual é a alternativa mais adequada?",
    "options": [
      "(A) É possível excluir o diagnóstico de hipotiroidismo devido aos níveis normais de TSH.",
      "(B) Para a confirmação do diagnóstico de deficiência de GH é necessária a dosagem do GH basal.",
      "(C) Trata-se de pan-hipopituitarismo por apresentar deficiência de mais de um setor de hormônios adeno-hipofisários.",
      "(D) O nível elevado de prolactina descarta o diagnóstico de hipopituitarismo."
    ],
    "correctAnswer": 2,
    "explanation": "Macroadenoma hipofisário (3,5 cm) com várias deficiências da adeno-hipófise:\n\n• Tireotrófica: T4 livre baixo com TSH inapropriadamente normal (hipotireoidismo central)\n• Gonadotrófica: FSH e LH baixos para uma mulher na pós-menopausa, que deveria ter gonadotrofinas elevadas\n• Somatotrófica: IGF-1 baixo\n\nA prolactina discretamente elevada (80) sugere efeito haste por compressão, não prolactinoma. Há deficiência de mais de um eixo, o que o gabarito classificou como pan-hipopituitarismo.",
    "commentary": "Excluir hipotireoidismo pelo TSH (A): no hipotireoidismo central o TSH é normal ou baixo; o diagnóstico se faz pelo T4 livre baixo.\n\nGH basal (B): o GH é pulsátil e o basal não serve para diagnóstico; usa-se IGF-1 e testes de estímulo, que podem até ser dispensados com três ou mais eixos deficientes e IGF-1 baixo.\n\nProlactina alta descarta hipopituitarismo (D): a hiperprolactinemia leve por desconexão da haste é comum nos macroadenomas e coexiste com hipopituitarismo.",
    "reference": "Diretrizes da Endocrine Society para hipopituitarismo (2016) / SBEM",
    "tags": [
      "endocrinologia",
      "hipopituitarismo",
      "adenoma hipofisário"
    ]
  },
  {
    "id": "unifesp2025-25",
    "topography": "2.2",
    "topic": "Insuficiência cardíaca",
    "module": "Clínica Médica",
    "text": "Homem, 70 anos de idade, com diagnóstico de miocardiopatia dilatada por doença de Chagas é admitido no PS por piora da dispneia, ortopneia, dispneia paroxística noturna, edema de membros inferiores bilateralmente até a região escrotal e ganho de peso. Exame físico: sonolência, PA = 90/50 mmHg, FC = 100 bpm em ritmo sinusal, FR = 30 rpm, SpO₂ = 90% em ar ambiente, tempo de enchimento capilar = 4 s, ausculta cardíaca com presença de terceira bulha e sopro holossistólico de foco mitral 3+/6+, ausculta pulmonar reduzida em campos médio-inferiores bilateralmente.\n\nQual é o perfil clínico-hemodinâmico da insuficiência cardíaca e a estratégia terapêutica inicial mais adequada?",
    "options": [
      "(A) Perfil C; furosemida e captopril",
      "(B) Perfil B; furosemida e captopril",
      "(C) Perfil B; furosemida, nitroprussiato de sódio e dobutamina",
      "(D) Perfil C; furosemida e dobutamina"
    ],
    "correctAnswer": 3,
    "explanation": "Insuficiência cardíaca descompensada com congestão (ortopneia, DPN, edema até a bolsa escrotal, B3, estertores e derrame) e baixo débito (sonolência, PA 90/50, enchimento capilar de 4 s): perfil C, 'frio e úmido', de Stevenson.\n\nCom PAS de 90 mmHg e hipoperfusão, o paciente precisa de inotrópico (dobutamina) para restaurar a perfusão e de diurético de alça para a congestão. Vasodilatadores e IECA devem ser evitados na hipotensão.",
    "commentary": "Perfil C com captopril (A): o perfil está certo, mas o IECA pioraria a hipotensão e a perfusão renal na fase aguda.\n\nPerfil B com captopril (B): o perfil B é 'quente e úmido' (perfusão preservada), o que não é o caso.\n\nPerfil B com nitroprussiato e dobutamina (C): perfil errado, e o nitroprussiato está contraindicado com PAS ≤ 90 mmHg.",
    "reference": "Diretriz Brasileira de Insuficiência Cardíaca Crônica e Aguda (SBC, 2018 e atualização 2021)",
    "tags": [
      "cardiologia",
      "insuficiência cardíaca descompensada",
      "perfis hemodinâmicos",
      "doença de Chagas"
    ]
  },
  {
    "id": "unifesp2025-26",
    "topography": "1.1",
    "topic": "Demências",
    "module": "Clínica Médica",
    "text": "Mulher, 87 anos de idade, viúva, mora com a filha. A paciente apresenta quadro de perambulação noturna, choro fácil, agressividade verbal. Há 4 anos, apresenta perda de memória recente gradual e lentamente e, há 1 ano, piora da funcionalidade, com necessidade de ajuda para banho, higiene pessoal, alimentação e uso de fraldas.\n\nDiante da principal hipótese diagnóstica, quais são as escalas mais indicadas para avaliação do estágio da doença?",
    "options": [
      "(A) Avaliação Geriátrica Ampla e velocidade de marcha",
      "(B) Timed Up and Go Test e Clinical Dementia Rating",
      "(C) Estágio de Avaliação Funcional e Clinical Dementia Rating",
      "(D) Estágio de Avaliação Funcional e Short Physical Performance Battery"
    ],
    "correctAnswer": 2,
    "explanation": "Idosa com declínio de memória recente lento e progressivo há 4 anos, perda de funcionalidade e sintomas comportamentais (perambulação, agressividade, labilidade): demência de Alzheimer em fase moderada a grave.\n\nPara estadiar a demência usam-se o Clinical Dementia Rating (CDR), que gradua a gravidade em domínios cognitivos e funcionais, e o FAST (Functional Assessment Staging), que descreve a progressão funcional do Alzheimer em 7 estágios.",
    "commentary": "AGA e velocidade de marcha (A): a avaliação geriátrica ampla é abrangente, mas não estadia demência; a velocidade de marcha avalia fragilidade e mobilidade.\n\nTUG e CDR (B): o Timed Up and Go avalia mobilidade e risco de quedas, não o estágio da demência.\n\nFAST e SPPB (D): o SPPB avalia desempenho físico, não a gravidade da demência.",
    "reference": "Recomendações da Academia Brasileira de Neurologia para diagnóstico e tratamento da doença de Alzheimer (2022) / Tratado de Geriatria e Gerontologia",
    "tags": [
      "geriatria",
      "demência",
      "doença de Alzheimer",
      "escalas"
    ]
  },
  {
    "id": "unifesp2025-27",
    "topography": "10",
    "topic": "Infecções relacionadas à assistência",
    "module": "Clínica Médica",
    "text": "Homem, 66 anos de idade, portador de doença renal crônica, evoluiu com febre durante sessão de hemodiálise. Foi coletada hemocultura que mostrou crescimento de Staphylococcus aureus resistente à oxacilina.\n\nQual é a opção terapêutica mais adequada para o caso de bacteremia?",
    "options": [
      "(A) Vancomicina",
      "(B) Ceftriaxona",
      "(C) Cefuroxima",
      "(D) Ampicilina"
    ],
    "correctAnswer": 0,
    "explanation": "Bacteremia por Staphylococcus aureus resistente à oxacilina (MRSA) em paciente em hemodiálise, provavelmente relacionada ao acesso.\n\nNo MRSA, todos os betalactâmicos comuns (exceto ceftarolina) perdem atividade. A vancomicina é o tratamento de escolha. É prática na hemodiálise, com doses após as sessões guiadas por nível sérico; a daptomicina é alternativa.",
    "commentary": "Ceftriaxona (B): betalactâmico sem atividade contra MRSA.\n\nCefuroxima (C): também inativa contra MRSA.\n\nAmpicilina (D): o S. aureus é quase universalmente resistente por betalactamase, e o MRSA é resistente a todas as penicilinas.",
    "reference": "IDSA Guidelines for MRSA infections / Manual de prevenção de infecção de corrente sanguínea (ANVISA)",
    "tags": [
      "infectologia",
      "MRSA",
      "bacteremia",
      "hemodiálise"
    ]
  },
  {
    "id": "unifesp2025-28",
    "topography": "14",
    "topic": "Choque",
    "module": "Clínica Médica",
    "text": "Homem, 27 anos de idade, previamente hígido, foi vítima de acidente automobilístico com sangramentos. Apresenta, à avaliação, PA = 94/52 mmHg, oligúria, creatinina = 1,9 mg/dL (VR 0,7 a 1,3 mg/dL), ureia = 96 mg/dL (VR 20 a 50 mg/dL), K = 6,1 mEq/L (VR 3,5 a 5,1 mEq/L), densidade urinária = 1036 (VR 1005 a 1030), fração de excreção de ureia = 27% e urina I com presença de cilindros hialinos abundantes.\n\nQual é o tratamento mais adequado neste momento?",
    "options": [
      "(A) Diálise de urgência.",
      "(B) Reposição de volume.",
      "(C) Droga inotrópica.",
      "(D) Furosemida intravenosa."
    ],
    "correctAnswer": 1,
    "explanation": "Lesão renal aguda em politraumatizado hipotenso por sangramento, com urina concentrada (densidade 1036), fração de excreção de ureia de 27% (< 35% sugere causa pré-renal) e cilindros hialinos (sedimento 'inocente'): LRA pré-renal por hipovolemia.\n\nO tratamento é a reposição volêmica (com controle do sangramento), que deve reverter a azotemia. O K de 6,1 sem descrição de alterações eletrocardiográficas não justifica, por si só, diálise de urgência.",
    "commentary": "Diálise de urgência (A): indicada para hipercalemia refratária, acidose grave, hipervolemia refratária ou uremia sintomática, ausentes aqui.\n\nInotrópico (C): o choque é hipovolêmico; a primeira medida é repor volume.\n\nFurosemida (D): agrava a hipovolemia e piora a lesão pré-renal.",
    "reference": "KDIGO Clinical Practice Guideline for Acute Kidney Injury",
    "tags": [
      "nefrologia",
      "lesão renal aguda",
      "pré-renal",
      "fração de excreção de ureia"
    ]
  },
  {
    "id": "unifesp2025-29",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "Mulher, 65 anos de idade, é viúva, tem diagnóstico de artrite reumatoide e é atendida em uma UBS. Ela mora com sua filha de 25 anos que não trabalha porque apresenta um quadro de depressão grave. A paciente nunca teve um emprego formal, nunca contribuiu com a Previdência Social e, na última consulta, foi atendida pela assistente social que a orientou a buscar um benefício.\n\nQual é o benefício no qual a paciente se enquadra?",
    "options": [
      "(A) Aposentadoria por idade",
      "(B) Benefício de Prestação Continuada",
      "(C) Aposentadoria por invalidez",
      "(D) Auxílio doença"
    ],
    "correctAnswer": 1,
    "explanation": "Idosa de 65 anos que nunca contribuiu com a Previdência, sem renda própria, morando com filha também sem renda. O Benefício de Prestação Continuada (BPC), previsto na LOAS, é da Assistência Social e não exige contribuição prévia.\n\nO BPC garante um salário mínimo mensal ao idoso com 65 anos ou mais, ou à pessoa com deficiência, cuja renda familiar per capita seja de até 1/4 do salário mínimo. É solicitado no INSS com inscrição no CadÚnico.",
    "commentary": "Aposentadoria por idade (A): benefício previdenciário que exige tempo mínimo de contribuição.\n\nAposentadoria por invalidez (C): hoje 'aposentadoria por incapacidade permanente', exige qualidade de segurado e carência.\n\nAuxílio-doença (D): hoje 'auxílio por incapacidade temporária', também previdenciário e dependente de contribuição.",
    "reference": "Lei Orgânica da Assistência Social — Lei nº 8.742/1993, art. 20",
    "tags": [
      "saúde coletiva",
      "seguridade social",
      "BPC",
      "assistência social"
    ]
  },
  {
    "id": "unifesp2025-30",
    "topography": "10",
    "topic": "Sepse",
    "module": "Clínica Médica",
    "text": "A sepse é uma disfunção orgânica com risco de morte, causada por uma resposta à infecção. O diagnóstico precoce e o atendimento sistematizado ao paciente séptico têm grande impacto no prognóstico.\n\nQual é a conduta que comprovadamente aumenta a chance de sobrevida do paciente?",
    "options": [
      "(A) Uso de corticosteroide e expansão de volume na presença de choque séptico",
      "(B) Administração de antimicrobianos de amplo espectro dirigidos ao foco infeccioso na primeira hora",
      "(C) Transfusão de concentrado de hemácias para manter a dosagem de hemoglobina acima de 10 g/dL",
      "(D) Monitorização hemodinâmica invasiva com cateter venoso central, para controle da pressão venosa central e saturação venosa central"
    ],
    "correctAnswer": 1,
    "explanation": "Entre as opções, a medida associada de forma consistente a menor mortalidade na sepse é a administração precoce de antimicrobianos de amplo espectro, idealmente na primeira hora após o reconhecimento do choque séptico ou da sepse de alta probabilidade.\n\nCada hora de atraso no antibiótico se associa a aumento progressivo da mortalidade, e isso é a base do pacote da primeira hora da Surviving Sepsis Campaign.",
    "commentary": "Corticoide (A): a hidrocortisona é sugerida no choque com necessidade persistente de vasopressor; acelera a reversão do choque, mas sem benefício consistente de sobrevida.\n\nTransfusão para Hb > 10 (C): estratégia liberal sem benefício; recomenda-se transfundir com Hb < 7 g/dL na maioria dos casos.\n\nMonitorização de PVC e SvcO₂ (D): a terapia guiada por metas com cateter central (EGDT) não reduziu mortalidade nos ensaios ProCESS, ARISE e ProMISe.",
    "reference": "Surviving Sepsis Campaign 2021 / Instituto Latino-Americano de Sepse (ILAS)",
    "tags": [
      "terapia intensiva",
      "sepse",
      "antibioticoterapia"
    ]
  },
  {
    "id": "unifesp2025-31",
    "topography": "4.1",
    "topic": "Nefropatia diabética",
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
  },
  {
    "id": "unifesp2025-32",
    "topography": "2.2",
    "topic": "Choque cardiogênico",
    "module": "Clínica Médica",
    "text": "Mulher, 70 anos de idade, com histórico de insuficiência cardíaca, foi admitida na UTI com choque cardiogênico após um infarto agudo do miocárdio. Exame físico: PA = 95/60 mmHg, FC = 110 bpm, FR = 25 irpm, SpO₂ = 90% com máscara de oxigênio; extremidades frias, pele úmida e distensão jugular.\n\nQual é a escolha mais adequada de agente inotrópico para esta paciente?",
    "options": [
      "(A) Dopamina",
      "(B) Noradrenalina",
      "(C) Dobutamina",
      "(D) Adrenalina"
    ],
    "correctAnswer": 2,
    "explanation": "Choque cardiogênico pós-infarto com congestão (turgência jugular) e baixo débito (extremidades frias, pele úmida), mas com PAS de 95 mmHg.\n\nCom pressão arterial ainda razoável, o inotrópico de escolha para aumentar o débito cardíaco é a dobutamina. Se houver hipotensão grave (PAS < 90 ou PAM < 65), associa-se noradrenalina como vasopressor de primeira linha.",
    "commentary": "Dopamina (A): associou-se a mais arritmias e maior mortalidade no subgrupo cardiogênico do estudo SOAP II; não é preferida.\n\nNoradrenalina (B): é vasopressor (efeito predominantemente alfa); indicada se houver hipotensão significativa, não como inotrópico isolado.\n\nAdrenalina (D): aumenta consumo de oxigênio, lactato e arritmias; associada a pior evolução no choque cardiogênico.",
    "reference": "Diretriz Brasileira de Insuficiência Cardíaca Aguda (SBC) / Posicionamento da SBC sobre choque cardiogênico",
    "tags": [
      "cardiologia",
      "choque cardiogênico",
      "inotrópicos",
      "dobutamina"
    ]
  },
  {
    "id": "unifesp2025-33",
    "topography": "4.1",
    "topic": "Distúrbios ácido-base",
    "module": "Clínica Médica",
    "text": "Mulher, 37 anos de idade, é admitida no PS com febre, disúria e lombalgia à direita. Exame físico: paciente torporosa, T = 38,4 °C, tempo de enchimento capilar de 4 segundos, PA = 88/46 mmHg, FC = 108 bpm, FR = 10 irpm, SpO₂= 83%. Exames laboratoriais: creatinina = 1,4 mg/dL; sódio = 145 mEq/L; potássio = 4,7 mEq/L; cloro = 105 mmol/L; gasometria arterial com pH = 7,19, pCO₂= 40 mmHg, pO₂ = 79 mmHg, bicarbonato = 10 mEq/L.\n\nQual é o distúrbio ácido-base observado?",
    "options": [
      "(A) Acidose respiratória com ânion-gap elevado e resposta metabólica compensatória não adequada",
      "(B) Equilíbrio ácido-base ajustado com resposta compensatória adequada",
      "(C) Acidose metabólica com ânion-gap elevado e resposta respiratória compensatória não adequada",
      "(D) Alcalose respiratória aguda com ânion-gap normal e resposta metabólica adequada"
    ],
    "correctAnswer": 2,
    "explanation": "Análise passo a passo:\n\n• pH 7,19 e HCO₃⁻ 10: acidose metabólica\n• Ânion-gap = Na – (Cl + HCO₃⁻) = 145 – (105 + 10) = 30 (elevado; provável acidose lática por choque séptico de foco urinário)\n• pCO₂ esperada (Winter) = 1,5 × 10 + 8 = 23 ± 2 mmHg\n\nA pCO₂ medida é de 40 mmHg, bem acima da esperada: a compensação respiratória é inadequada (acidose respiratória associada). Isso é compatível com o rebaixamento de consciência e a FR de 10 irpm.",
    "commentary": "Acidose respiratória primária (A): o distúrbio primário é metabólico (HCO₃⁻ muito baixo); a pCO₂ é 'normal', mas inadequada para a acidose.\n\nEquilíbrio ajustado (B): o pH de 7,19 mostra acidemia franca.\n\nAlcalose respiratória (D): exigiria pCO₂ baixa e pH alto.",
    "reference": "Harrison — Distúrbios ácido-base / Fórmula de Winter",
    "tags": [
      "nefrologia",
      "distúrbios ácido-base",
      "ânion-gap",
      "sepse"
    ]
  },
  {
    "id": "unifesp2025-34",
    "topography": "6.1",
    "topic": "Artrite reumatoide",
    "module": "Clínica Médica",
    "text": "Mulher, 28 anos de idade, refere dor e edema em mãos, punhos e tornozelos há 6 meses. Nega outras queixas em outros órgãos ou sistemas. Exame físico: edema e dor à palpação em punhos e articulações metacarpofalângicas bilateralmente.\n\nConsiderando a principal hipótese diagnóstica, qual dos exames abaixo apresenta melhor valor preditivo positivo para o diagnóstico da doença?",
    "options": [
      "(A) Fator reumatoide",
      "(B) FAN",
      "(C) Anti-CCP",
      "(D) Proteína C reativa ultrassensível"
    ],
    "correctAnswer": 2,
    "explanation": "Mulher jovem com poliartrite simétrica de pequenas articulações (punhos e metacarpofalângicas) há 6 meses: artrite reumatoide.\n\nO anti-CCP (anticorpo antipeptídeo citrulinado cíclico) tem especificidade de cerca de 95–98% para AR. Com isso, um resultado positivo tem o maior valor preditivo positivo entre os exames listados, além de indicar pior prognóstico erosivo.",
    "commentary": "Fator reumatoide (A): sensível, mas menos específico; positivo em infecções crônicas, outras colagenoses e idosos saudáveis.\n\nFAN (B): pouco específico para AR; útil para pensar em lúpus e outras colagenoses.\n\nPCR ultrassensível (D): marcador inflamatório inespecífico, usado para atividade e risco cardiovascular, sem valor diagnóstico para AR.",
    "reference": "Recomendações da SBR para o diagnóstico da artrite reumatoide / Critérios ACR/EULAR 2010",
    "tags": [
      "reumatologia",
      "artrite reumatoide",
      "anti-CCP",
      "valor preditivo"
    ]
  },
  {
    "id": "unifesp2025-35",
    "topography": "7.2",
    "topic": "Hanseníase",
    "module": "Clínica Médica",
    "text": "Homem, 40 anos de idade, está em tratamento para hanseníase dimorfo-virchowiana há 2 meses com poliquimioterapia multibacilar. Refere, há três dias, “caroços” dolorosos na face, tronco e membros, associados a febre de 38,5°C, edema nas mãos e pés, e dor no trajeto dos nervos ulnares bilateralmente.\n\nQual é a conduta mais adequada?",
    "options": [
      "(A) Suspender o tratamento para a hanseníase e iniciar anti-inflamatórios não hormonais.",
      "(B) Manter o tratamento para a hanseníase e associar claritromicina.",
      "(C) Suspender o tratamento para a hanseníase e iniciar metotrexato via oral.",
      "(D) Manter o tratamento para a hanseníase e iniciar prednisona e talidomida."
    ],
    "correctAnswer": 3,
    "explanation": "Paciente multibacilar (dimorfo-virchowiano) em tratamento que desenvolve nódulos dolorosos disseminados, febre, edema de extremidades e neurite: reação hansênica tipo 2 (eritema nodoso hansênico), com acometimento neural.\n\nA poliquimioterapia não deve ser suspensa durante as reações. A talidomida é a droga de escolha no ENH (homem, sem risco de gestação). Como há neurite, associa-se prednisona (1 mg/kg/dia), que protege o nervo.",
    "commentary": "Suspender PQT e usar AINE (A): a PQT nunca é suspensa por reação, e o AINE é insuficiente diante de neurite.\n\nAssociar claritromicina (B): é droga alternativa para a infecção (em resistência ou intolerância), não trata a reação imunológica.\n\nSuspender PQT e usar metotrexato (C): o tratamento não deve ser suspenso, e o metotrexato é opção de terceira linha em ENH refratário.",
    "reference": "Diretrizes para vigilância, atenção e eliminação da hanseníase — Ministério da Saúde, 2016 / Protocolo Clínico e Diretrizes Terapêuticas da Hanseníase (2022)",
    "tags": [
      "dermatologia",
      "hanseníase",
      "reação hansênica",
      "eritema nodoso hansênico"
    ]
  },
  {
    "id": "unifesp2025-36",
    "topography": "2.1",
    "topic": "Embolia pulmonar",
    "module": "Clínica Médica",
    "text": "Mulher transgênero, 35 anos de idade, realizou cirurgia plástica há 3 semanas. Procura PS após síncope, dor torácica e dispneia. Faz uso de estrogênio nos últimos 10 anos e há 3 meses trocou para injetável. Exame físico: REG, T = 37,1°C, PA = 90/50 mmHg, FC = 110 bpm, FR = 22 irpm, SpO₂ = 94% (ar ambiente). Ausculta pulmonar e cardíaca normais.\n\nConsiderando a hipótese diagnóstica mais provável, qual é a conduta mais apropriada?",
    "options": [
      "(A) Angiotomografia de tórax e infusão endovenosa de heparina não fracionada em bomba de infusão contínua nas próximas 48h",
      "(B) Dímero-D e heparina de baixo peso molecular em dose profilática enquanto aguarda o resultado do exame",
      "(C) Dímero-D, angiotomografia de tórax e heparina de baixo peso molecular em dose plena nas primeiras 48h seguida de anticoagulante de ação direta",
      "(D) Ecodopplercardiograma e infusão endovenosa de rt-PA em 2h"
    ],
    "correctAnswer": 3,
    "explanation": "Alto risco trombótico (estrogênio injetável e pós-operatório recente) com síncope, dor torácica, dispneia, taquicardia e hipotensão (PA 90/50): tromboembolismo pulmonar de alto risco (instável).\n\nNo TEP instável, o tratamento de escolha é a trombólise sistêmica. Se a angiotomografia não for imediatamente disponível ou o paciente estiver instável demais para o transporte, o ecocardiograma à beira do leito mostrando disfunção de VD justifica a trombólise. O rt-PA (alteplase) é infundido em 2 horas (100 mg).",
    "commentary": "Angiotomografia e heparina (A): heparina isolada é para TEP sem instabilidade; no TEP de alto risco a reperfusão é obrigatória.\n\nDímero-D e profilaxia (B): o dímero-D serve para excluir TEP em baixa probabilidade, e a dose profilática é inadequada no TEP confirmado ou altamente provável.\n\nDímero-D, angiotomografia e HBPM plena (C): é a conduta do TEP estável; com hipotensão, atrasa a reperfusão.",
    "reference": "ESC 2019 Guidelines on Acute Pulmonary Embolism / Diretriz da SBPT para TEV",
    "tags": [
      "pneumologia",
      "tromboembolismo pulmonar",
      "trombólise",
      "estrogênio"
    ]
  },
  {
    "id": "unifesp2025-37",
    "topography": "14",
    "topic": "Sepse e choque séptico",
    "module": "Clínica Médica",
    "text": "Mulher, 30 anos de idade, previamente hígida, é admitida no PS com dor torácica, expectoração amarelada e febre há cinco dias, apresentando hoje dispneia. Na triagem, foi constatado: PA = 85/40 mmHg, FC = 130 bpm, FR = 28 irpm e SpO₂ =85%. A paciente foi levada à sala de emergência. Exames: gasometria arterial pH = 7,23, PaCO₂ = 30 mmHg, PaO₂ = 55 mmHg, bicarbonato = 16 mEq/L e lactato = 35 mg/L.\n\nDe acordo com a Campanha de Sobrevivência à Sepse, qual é a alternativa correta?",
    "options": [
      "(A) Como há insuficiência respiratória, a expansão volêmica deve ser realizada com volumes menores que 30 mL/kg, a fim de se evitar congestão volêmica e piora da dispneia.",
      "(B) Um vasopressor pode ser iniciado em veia periférica mesmo antes de completar a expansão volêmica, até que se obtenha um acesso venoso profundo.",
      "(C) Como o paciente não tem choque séptico, devemos esperar os exames para confirmação da hipótese de infecção nas próximas 3 horas, antes de se iniciar antibioticoterapia.",
      "(D) Como se trata de foco pulmonar, não é necessária a coleta de hemoculturas dada a sua baixa positividade nesse cenário."
    ],
    "correctAnswer": 1,
    "explanation": "Pneumonia com hipotensão (PA 85/40), taquicardia, hipoxemia e lactato elevado (35 mg/dL ≈ 3,9 mmol/L): sepse com hipoperfusão, provável choque séptico.\n\nA Surviving Sepsis Campaign recomenda iniciar vasopressor (noradrenalina) por veia periférica se necessário, sem esperar o acesso central, para não atrasar a restauração da PAM. Também se pode iniciá-lo durante a ressuscitação volêmica se a hipotensão for grave.",
    "commentary": "Expansão < 30 mL/kg (A): a recomendação é de pelo menos 30 mL/kg de cristaloide nas primeiras 3 horas, reavaliando a resposta; a insuficiência respiratória isoladamente não justifica reduzir o volume.\n\nEsperar 3 horas para antibiótico (C): há hipotensão e hiperlactatemia; o antibiótico deve ser dado na primeira hora.\n\nDispensar hemoculturas (D): devem ser colhidas antes do antibiótico em toda sepse, sem atrasá-lo, independentemente do foco.",
    "reference": "Surviving Sepsis Campaign 2021 / ILAS",
    "tags": [
      "terapia intensiva",
      "sepse",
      "vasopressor",
      "pneumonia"
    ]
  },
  {
    "id": "unifesp2025-38",
    "topography": "2.1",
    "topic": "Pneumonia comunitária",
    "module": "Clínica Médica",
    "text": "Homem, 67 anos de idade, procurou PS com quadro de três dias febre, dor torácica em base direita ventilatório-dependente e tosse produtiva com expectoração esverdeada. Exame físico: REG, orientado, T axilar = 38 °C, PA = 110/70 mmHg, FC = 110 bpm, FR = 32 irpm, SpO₂ = 95% em ar ambiente; expansibilidade torácica discretamente diminuída em hemitórax direito; na base direita, observa-se frêmito toracovocal aumentado, som respiratório abolido e broncofonia aumentada. Exames: glicemia = 420 mg/dL; ureia = 70 mg/dL; creatinina = 1,3 mg/dL; TGO = 24 U/L; TGP = 20 U/L; hemograma com 14.000 leucócitos com desvio à esquerda; PCR = 35 mg/dL.\n\nAplique o escore de gravidade CURB-65 e indique o local de tratamento recomendado.",
    "options": [
      "(A) CURB-65 = 2; tratamento hospitalar.",
      "(B) CURB-65 = 4; tratamento em unidade de terapia intensiva.",
      "(C) CURB-65 = 3; tratamento hospitalar.",
      "(D) CURB-65 = 2; tratamento ambulatorial."
    ],
    "correctAnswer": 2,
    "explanation": "Cálculo do CURB-65 (1 ponto cada):\n\n• Confusão: não (orientado) — 0\n• Ureia > 43 mg/dL (> 7 mmol/L): 70 mg/dL — 1\n• FR ≥ 30 irpm: 32 — 1\n• PAS < 90 ou PAD ≤ 60 mmHg: 110/70 — 0\n• Idade ≥ 65 anos: 67 — 1\n\nTotal = 3: pneumonia grave, com indicação de internação hospitalar (e avaliação de UTI se houver critérios adicionais). O exame físico mostra consolidação em base direita.",
    "commentary": "CURB-65 = 2 com internação (A): o escore está errado (são 3 pontos).\n\nCURB-65 = 4 com UTI (B): o paciente está orientado e com PA normal; não soma 4.\n\nCURB-65 = 2 com ambulatório (D): o escore está errado, e mesmo 2 pontos indicariam internação ou observação hospitalar.",
    "reference": "Diretrizes brasileiras para pneumonia adquirida na comunidade em adultos (SBPT, 2018)",
    "tags": [
      "pneumologia",
      "pneumonia",
      "CURB-65"
    ]
  },
  {
    "id": "unifesp2025-39",
    "topography": "6.1",
    "topic": "Artrite séptica",
    "module": "Clínica Médica",
    "text": "Mulher, 32 anos de idade, previamente hígida procura pronto atendimento com queixas de poliartralgia migratória de grandes e pequenas articulações há 10 dias, após viagem de férias. No momento refere dor e limitação de movimento em punho direito. Nega trauma e febre. Exame físico: edema, eritema e dor em punho direito. Ultrassom: tenossinovite em punho direito.\n\nConsiderando o diagnóstico mais provável, qual é a conduta mais adequada?",
    "options": [
      "(A) Ceftriaxona",
      "(B) Oxacilina",
      "(C) Prednisona",
      "(D) Metotrexato"
    ],
    "correctAnswer": 0,
    "explanation": "Mulher jovem e sexualmente ativa (viagem de férias) com poliartralgia migratória seguida de tenossinovite de punho: forma de artrite-dermatite da infecção gonocócica disseminada.\n\nA tríade clássica é poliartralgia migratória, tenossinovite e lesões cutâneas (pústulas), que podem estar ausentes. O tratamento é ceftriaxona parenteral (1 g/dia), associada a tratamento para clamídia e investigação de outras ISTs.",
    "commentary": "Oxacilina (B): cobre S. aureus (artrite séptica monoarticular), mas não é o tratamento do gonococo e não explica o quadro migratório com tenossinovite.\n\nPrednisona (C): imunossupressão em quadro infeccioso.\n\nMetotrexato (D): tratamento de artrite reumatoide e outras doenças inflamatórias crônicas, não de infecção aguda.",
    "reference": "PCDT para Atenção Integral às Pessoas com IST — Ministério da Saúde, 2022",
    "tags": [
      "reumatologia",
      "artrite gonocócica",
      "infecções sexualmente transmissíveis"
    ]
  },
  {
    "id": "unifesp2025-40",
    "module": "Clínica Médica",
    "text": "Homem, 28 anos de idade, apresenta lesões de pele há 4 dias, após 10 dias do início do uso de carbamazepina. Exame físico: lesões em alvo atípico na pele, vesículas e bolhas sobre base eritematosa difusa, com áreas de descolamento da pele (total cerca de 10% de pele descolada), erosões na mucosa oral e na glande e eritema conjuntival.\n\nQual é o diagnóstico mais provável?",
    "options": [
      "(A) Pênfigo vulgar.",
      "(B) Síndrome de Stevens-Johnson.",
      "(C) Eritema polimorfo minor.",
      "(D) Necrólise epidérmica tóxica."
    ],
    "correctAnswer": 1,
    "explanation": "Farmacodermia grave após 10 dias de carbamazepina (intervalo típico), com lesões em alvo atípicas, bolhas, descolamento cutâneo e acometimento de mucosas (oral, genital e conjuntival).\n\nA classificação depende da área de pele descolada: menos de 10% = síndrome de Stevens-Johnson; 10–30% = sobreposição SSJ/NET; acima de 30% = necrólise epidérmica tóxica. Com cerca de 10%, o gabarito enquadra como SSJ. Conduta: suspender a droga e dar suporte em unidade especializada.",
    "commentary": "Pênfigo vulgar (A): doença autoimune crônica, sem relação temporal com medicamento e sem lesões em alvo.\n\nEritema polimorfo minor (C): associado a herpes simples, com alvos típicos acrais e pouco ou nenhum acometimento mucoso.\n\nNET (D): exige descolamento acima de 30% da superfície corporal.",
    "reference": "Consenso da SBD sobre SSJ/NET / Bastuji-Garin — classificação por área de descolamento",
    "tags": [
      "dermatologia",
      "Stevens-Johnson",
      "farmacodermia",
      "carbamazepina"
    ]
  },
  {
    "id": "unifesp2025-41",
    "topography": "1.1",
    "topic": "AVC",
    "module": "Clínica Médica",
    "text": "Homem, 63 anos de idade, com histórico de hipertensão arterial crônica e uso ocasional de álcool, é trazido ao PS após sua esposa encontrá-lo caído no chão do banheiro. Ele está confuso, queixando-se de dor de cabeça intensa e apresenta fraqueza no lado direito do corpo. Exame Físico: PA = 190/110 mmHg, FC = 88 bpm; hemiparesia direita e afasia parcial. Não há sinais de trauma externo. Tomografia computadorizada de crânio realizada à admissão: hematoma intracerebral de aproximadamente 40 mL localizado no lobo temporal esquerdo, sem sinais de herniação ou edema cerebral significativo.\n\nQual é a conduta mais adequada, considerando que está dentro de 3 horas do início dos sintomas?",
    "options": [
      "(A) Controle intensivo da PA nas primeiras 24 horas e controle de temperatura.",
      "(B) Administração imediata de manitol intravenoso.",
      "(C) Elevação da cabeceira do leito a 30 graus e controle glicêmico.",
      "(D) Realização imediata de craniotomia."
    ],
    "correctAnswer": 0,
    "explanation": "Hemorragia intracerebral espontânea lobar (40 mL) em hipertenso, nas primeiras horas, sem herniação. O manejo inicial é clínico:\n\n• Redução da PA sistólica para cerca de 140 mmHg (faixa de 130–150), evitando quedas abruptas, para limitar a expansão do hematoma\n• Normotermia, normoglicemia, reversão de anticoagulação quando houver e cabeceira elevada\n\nEntre as alternativas, o controle intensivo da PA nas primeiras horas é a medida com maior impacto, associada ao controle de temperatura.",
    "commentary": "Manitol imediato (B): reservado para hipertensão intracraniana ou herniação, ausentes; não há benefício profilático.\n\nCabeceira e glicemia (C): medidas gerais corretas, mas não a conduta mais relevante sem o controle pressórico.\n\nCraniotomia imediata (D): não é rotina na HIC supratentorial sem deterioração; a cirurgia é considerada em hematoma cerebelar > 3 cm, deterioração neurológica ou hidrocefalia.",
    "reference": "AHA/ASA 2022 Guideline for Spontaneous Intracerebral Hemorrhage / Diretrizes da SBDCV",
    "tags": [
      "neurologia",
      "hemorragia intracerebral",
      "AVC hemorrágico",
      "controle pressórico"
    ]
  },
  {
    "id": "unifesp2025-42",
    "topography": "15",
    "topic": "Bioestatística",
    "module": "Saúde Coletiva",
    "text": "Em um estudo randomizado, controlado, que investigou os efeitos da tração controlada do cordão umbilical na terceira fase do trabalho de parto sobre a hemorragia pós-parto, a redução do risco associada à intervenção foi não significante (RR = 0,95; IC95% = 0,79 a 1,15).\n\nCom base neste resultado, qual é a alternativa correta?",
    "options": [
      "(A) O intervalo de confiança de 95% quantifica a imprecisão da amostra em estimar o parâmetro populacional do risco relativo de hemorragia pós-parto.",
      "(B) Se o tamanho da amostra do estudo fosse aumentado, a largura do intervalo de confiança de 95% aumentaria.",
      "(C) Um intervalo de confiança de 99% para o risco relativo populacional seria mais estreito do que o intervalo de confiança de 95% apresentado.",
      "(D) Pode-se inferir que 95% das amostras do grupo de intervenção perderam entre 0,79 e 1,15 vezes mais sangue do que o grupo controle."
    ],
    "correctAnswer": 0,
    "explanation": "O intervalo de confiança de 95% expressa a imprecisão da estimativa amostral: é a faixa de valores compatíveis com o verdadeiro risco relativo populacional, dado o erro aleatório da amostra.\n\nComo inclui o 1 (0,79 a 1,15), o resultado não é estatisticamente significativo.",
    "commentary": "Aumentar a amostra alargaria o IC (B): é o contrário; amostras maiores reduzem o erro padrão e estreitam o intervalo.\n\nIC de 99% mais estreito (C): exigir maior confiança alarga o intervalo.\n\n95% das amostras perderam 0,79 a 1,15 vezes mais sangue (D): o IC não descreve a distribuição dos indivíduos nem o volume de sangue; refere-se ao parâmetro (RR de hemorragia).",
    "reference": "Fletcher — Epidemiologia Clínica / Medronho — Epidemiologia",
    "tags": [
      "bioestatística",
      "intervalo de confiança",
      "risco relativo"
    ]
  },
  {
    "id": "unifesp2025-43",
    "topography": "15",
    "topic": "Vigilância epidemiológica",
    "module": "Saúde Coletiva",
    "text": "Criança, 10 anos de idade, refugiada, é atendida no pronto-socorro apresentando febre e deficiência motora flácida de início súbito. A situação vacinal é ignorada.\n\nConsiderando a(s) hipótese(s) diagnóstica(s) mais provável(eis), a conduta adequada neste momento, em relação à vigilância epidemiológica, é notificar o caso às autoridades de saúde:",
    "options": [
      "(A) Após resultado positivo da cultura de líquor.",
      "(B) Após resultado positivo da cultura de fezes.",
      "(C) Em até 24 horas após o atendimento.",
      "(D) Após resultado positivo da cultura de fezes e líquor."
    ],
    "correctAnswer": 2,
    "explanation": "Criança com paralisia flácida aguda (PFA) e situação vacinal desconhecida. Todo caso de PFA em menor de 15 anos é de notificação compulsória imediata, por ser a estratégia de vigilância da poliomielite, que tem risco de reintrodução no Brasil pela baixa cobertura vacinal e pela migração.\n\nA notificação deve ser feita em até 24 horas, com coleta de fezes até o 14º dia do déficit. Não se espera confirmação laboratorial: notificar é obrigatório diante da suspeita.",
    "commentary": "Após cultura de líquor (A): a notificação não depende de resultado laboratorial.\n\nApós cultura de fezes (B): a amostra de fezes é colhida para investigação, mas a notificação é imediata, diante da suspeita.\n\nApós fezes e líquor (D): mesmo erro — notificação compulsória imediata não aguarda exames.",
    "reference": "Guia de Vigilância em Saúde — Ministério da Saúde, 2024 (Poliomielite/Paralisia flácida aguda)",
    "tags": [
      "vigilância epidemiológica",
      "paralisia flácida aguda",
      "poliomielite",
      "notificação compulsória"
    ]
  },
  {
    "id": "unifesp2025-44",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "Nos anos 90, após a criação do SUS e a partir da luta do movimento indígena, foi regulamentada a Lei Arouca, que instituiu o Subsistema de Atenção à Saúde dos Povos Indígenas (SasiSUS), com o objetivo de garantir aos povos indígenas o acesso à atenção integral à saúde e contemplando a diversidade social, cultural, geográfica, histórica e política.\n\nComo é estruturado o atendimento aos povos indígenas dentro do SasiSUS?",
    "options": [
      "(A) É um sistema de saúde à parte do SUS, gerido pelo Ministério dos Povos Indígenas (MPI) e se organiza em Distritos Sanitários Especiais Indígenas (DSEI) que executam ações de atenção à saúde, saneamento básico, gestão, apoio técnico e apoio ao controle social dos povos indígenas.",
      "(B) É gerido pela Fundação Nacional dos Povos Indígenas (FUNAI) e organiza o atendimento das populações indígenas por meio de missões periódicas realizadas por equipes multiprofissionais com objetivo de trazer as pessoas doentes para atendimento nos serviços do SUS mais próximos de seus territórios.",
      "(C) É gerido pelo Ministério dos Povos Indígenas (MPI) e prevê o atendimento das pessoas indígenas nos serviços de atenção primária, secundária, terciária e quaternária destinados à toda população.",
      "(D) É gerido pela Secretaria de Saúde Indígena (SESAI) e se organiza em Distritos Sanitários Especiais Indígenas (DSEI) que executam ações de atenção à saúde, saneamento básico, gestão, apoio técnico e apoio ao controle social dos povos indígenas."
    ],
    "correctAnswer": 3,
    "explanation": "O Subsistema de Atenção à Saúde Indígena (SasiSUS) faz parte do SUS (Lei nº 9.836/1999, Lei Arouca) e é gerido pela Secretaria de Saúde Indígena (SESAI), do Ministério da Saúde, criada em 2010.\n\nEstá organizado em 34 Distritos Sanitários Especiais Indígenas (DSEI), que executam atenção primária (polos base, equipes multidisciplinares), saneamento, gestão e apoio ao controle social nos territórios. Os casos de maior complexidade são referenciados à rede do SUS.",
    "commentary": "Sistema à parte gerido pelo MPI (A): o SasiSUS integra o SUS e é gerido pela SESAI/MS, não pelo Ministério dos Povos Indígenas.\n\nGerido pela FUNAI com missões periódicas (B): a gestão da saúde indígena saiu da FUNAI (e depois da FUNASA) para a SESAI; a atenção é permanente nos territórios.\n\nGerido pelo MPI com atendimento na rede geral (C): o órgão gestor está errado, e o modelo é diferenciado (DSEI), não apenas a rede comum.",
    "reference": "Lei nº 9.836/1999 / Política Nacional de Atenção à Saúde dos Povos Indígenas",
    "tags": [
      "saúde coletiva",
      "saúde indígena",
      "SUS",
      "SESAI"
    ]
  },
  {
    "id": "unifesp2025-45",
    "topography": "15",
    "topic": "Estudos epidemiológicos",
    "module": "Saúde Coletiva",
    "text": "Um estudo clínico está investigando a eficácia de um novo medicamento para reduzir o risco de determinada doença em pacientes de alto risco. O estudo envolveu 1000 pacientes, divididos igualmente em dois grupos: um grupo recebeu o novo medicamento e o outro grupo recebeu um placebo. Após um ano de acompanhamento, 100 pacientes no grupo do novo medicamento e 250 pacientes no grupo do placebo foram acometidos pela doença.\n\nPodemos concluir que a eficácia do novo medicamento foi de:",
    "options": [
      "(A) 30%.",
      "(B) 60%.",
      "(C) 20%.",
      "(D) 40%."
    ],
    "correctAnswer": 1,
    "explanation": "Cálculo:\n\n• Risco no grupo medicamento = 100/500 = 0,20\n• Risco no grupo placebo = 250/500 = 0,50\n• Risco relativo = 0,20/0,50 = 0,40\n• Eficácia = redução relativa do risco = 1 – RR = 0,60 = 60%\n\nO medicamento reduziu em 60% o risco de adoecer em relação ao placebo.",
    "commentary": "30% (A): corresponde à redução absoluta do risco (0,50 – 0,20), não à eficácia.\n\n20% (C): é o risco no grupo tratado.\n\n40% (D): é o risco relativo, não a redução relativa.",
    "reference": "Fletcher — Epidemiologia Clínica / Medronho — Epidemiologia",
    "tags": [
      "epidemiologia",
      "eficácia",
      "risco relativo",
      "redução de risco"
    ]
  },
  {
    "id": "unifesp2025-46",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "Gestores municipais e estaduais de saúde em todo o país contratam cada vez mais Organizações Sociais de Saúde (OSS) para a gestão de serviços de saúde.\n\nSobre este modelo de gestão, qual é a alternativa correta?",
    "options": [
      "(A) Entidades privadas, sem fins lucrativos, que atendem aos requisitos da lei, podem ser qualificadas como OSS e receber recursos, bens e servidores públicos para realizar atividades como a gestão de serviços de atenção básica, especializada e hospitalar.",
      "(B) As OSS relacionam-se com o Poder Público mediante contrato de gestão, conforme definido na lei municipal ou estadual que a instituiu, tendo autonomia para definir o perfil assistencial e o volume de serviços ofertados ao SUS por serem entidades privadas.",
      "(C) As OSS integram a administração pública e executam tanto serviços assistenciais (atenção básica, especializada e hospitalar), como aqueles que requerem poder de polícia (regulação, controle e avaliação, vigilância sanitária, epidemiológica e ambiental).",
      "(D) Entidades privadas, com ou sem fins lucrativos, que atendem aos requisitos da lei, podem ser qualificadas como OSS e receber recursos, bens e servidores públicos para realizar a gestão do SUS e de serviços de atenção básica, especializada e hospitalar."
    ],
    "correctAnswer": 0,
    "explanation": "As Organizações Sociais (Lei federal nº 9.637/1998 e leis estaduais e municipais equivalentes) são entidades privadas sem fins lucrativos que recebem do Poder Público a qualificação de OS.\n\nPor meio do contrato de gestão, podem receber recursos orçamentários, bens públicos (permissão de uso) e cessão de servidores para gerir serviços de saúde — unidades básicas, ambulatórios e hospitais. As metas e o perfil assistencial são definidos pelo gestor público no contrato.",
    "commentary": "Autonomia para definir perfil e volume (B): o perfil assistencial e as metas de produção são fixados pelo Poder Público no contrato de gestão, não pela OSS.\n\nIntegram a administração pública e exercem poder de polícia (C): são entidades privadas do terceiro setor; atividades com poder de polícia (vigilância sanitária, regulação, controle e avaliação) são indelegáveis.\n\nCom ou sem fins lucrativos, gerindo o SUS (D): a lei exige ausência de fins lucrativos, e a gestão do sistema (função de Estado) não é transferível.",
    "reference": "Lei nº 9.637/1998 / STF — ADI 1.923",
    "tags": [
      "saúde coletiva",
      "gestão em saúde",
      "organizações sociais",
      "SUS"
    ]
  },
  {
    "id": "unifesp2025-47",
    "topography": "15",
    "topic": "Vigilância epidemiológica",
    "module": "Saúde Coletiva",
    "text": "A notificação de gestantes diagnosticadas com HIV no Sistema de Informação de Agravos de Notificação (SINAN) é uma etapa fundamental para a vigilância epidemiológica, visando o controle da transmissão vertical do vírus.\n\nCom base nos protocolos de notificação e seguimento de gestantes com HIV no Brasil, qual das alternativas está correta?",
    "options": [
      "(A) A notificação de gestantes com HIV deve ser realizada preferencialmente no momento do parto.",
      "(B) A notificação de gestantes com HIV deve ocorrer tão logo seja feito o diagnóstico, independentemente do trimestre gestacional ou do uso de terapia antirretroviral.",
      "(C) A notificação é flexibilizada para gestantes com HIV que estejam em terapia antirretroviral e apresentem carga viral indetectável.",
      "(D) A notificação de casos de gestantes com HIV é dispensável em gestantes que já foram notificadas em gestação anterior."
    ],
    "correctAnswer": 1,
    "explanation": "A infecção pelo HIV em gestantes, parturientes ou puérperas é de notificação compulsória (Portaria de Consolidação nº 4/2017 e atualizações).\n\nA notificação deve ser feita assim que o diagnóstico é estabelecido, em qualquer idade gestacional, independentemente do uso de TARV ou da carga viral. Também deve ser repetida a cada nova gestação, porque o objeto da vigilância é a gestação exposta e o risco de transmissão vertical.",
    "commentary": "No momento do parto (A): atrasaria a vigilância e as ações de prevenção da transmissão vertical durante o pré-natal.\n\nFlexibilizada se carga viral indetectável (C): a obrigatoriedade não depende da resposta ao tratamento.\n\nDispensável se notificada em gestação anterior (D): cada gestação deve ser notificada.",
    "reference": "Guia de Vigilância em Saúde — Ministério da Saúde / PCDT para Prevenção da Transmissão Vertical de HIV, Sífilis e Hepatites Virais",
    "tags": [
      "vigilância epidemiológica",
      "HIV",
      "gestação",
      "transmissão vertical",
      "notificação compulsória"
    ]
  },
  {
    "id": "unifesp2025-48",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "O Plano Municipal de Saúde (PMS) constitui-se no instrumento central de planejamento para definição e implementação de todas as iniciativas no âmbito da saúde na gestão municipal do SUS, sendo a base para a execução, acompanhamento e avaliação da gestão do sistema de saúde local para o período de quatro anos.\n\nA qual instância o PMS deve ser submetido para apreciação e aprovação?",
    "options": [
      "(A) Câmara Municipal de Vereadores.",
      "(B) Conselho Municipal de Saúde.",
      "(C) Tribunal de Contas do Estado.",
      "(D) Secretaria Municipal de Saúde."
    ],
    "correctAnswer": 1,
    "explanation": "O Plano Municipal de Saúde é elaborado pela gestão (Secretaria Municipal de Saúde), mas deve ser submetido à apreciação e aprovação do Conselho Municipal de Saúde, instância deliberativa do controle social (Lei nº 8.142/1990 e LC nº 141/2012).\n\nO plano deve considerar as diretrizes da Conferência de Saúde e se desdobra em Programações Anuais e Relatórios de Gestão, também apreciados pelo Conselho.",
    "commentary": "Câmara de Vereadores (A): aprova as leis orçamentárias (PPA, LDO, LOA), mas não é a instância de aprovação do Plano de Saúde; recebe prestação de contas quadrimestral.\n\nTribunal de Contas (C): faz controle externo de legalidade e contas, não aprova instrumentos de planejamento.\n\nSecretaria Municipal de Saúde (D): elabora o plano, mas não o aprova; a aprovação cabe ao controle social.",
    "reference": "Lei nº 8.142/1990 / LC nº 141/2012 / Portaria de Consolidação nº 1/2017 (planejamento do SUS)",
    "tags": [
      "saúde coletiva",
      "planejamento em saúde",
      "controle social",
      "conselho de saúde"
    ]
  },
  {
    "id": "unifesp2025-49",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "No atendimento dentro da Unidade Básica de Saúde, cada profissional faz um recorte, um destaque de sintomas e informações, de acordo com seu núcleo de conhecimento profissional. A discussão de casos clínicos em equipe, principalmente os mais complexos, é um recurso clínico e gerencial importante.\n\nEste modelo corresponde a:",
    "options": [
      "(A) Atenção no modelo biomédico.",
      "(B) Ação de gestão de conflitos.",
      "(C) Clínica ampliada.",
      "(D) Ações de macrogestão."
    ],
    "correctAnswer": 2,
    "explanation": "A Clínica Ampliada, diretriz da Política Nacional de Humanização, propõe articular os diferentes enfoques disciplinares: cada profissional contribui com seu núcleo de saber para uma compreensão integral do caso.\n\nSuas ferramentas incluem a discussão de casos em equipe e o Projeto Terapêutico Singular, sobretudo para os casos complexos.",
    "commentary": "Modelo biomédico (A): centrado na doença e no saber médico, fragmentado, sem construção compartilhada.\n\nGestão de conflitos (B): não descreve a discussão clínica interprofissional sobre casos.\n\nMacrogestão (D): refere-se à gestão do sistema (políticas, planejamento regional), não ao cuidado clínico na unidade.",
    "reference": "Clínica Ampliada e Compartilhada — Ministério da Saúde/PNH, 2009",
    "tags": [
      "saúde coletiva",
      "clínica ampliada",
      "humanização",
      "atenção primária"
    ]
  },
  {
    "id": "unifesp2025-50",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "O SUS está organizado de forma regionalizada e hierarquizada para formar as Redes de Atenção à Saúde no âmbito de Regiões de Saúde.\n\nQual é o serviço necessário para que um território seja reconhecido como Região de Saúde?",
    "options": [
      "(A) Centro de alta complexidade em oncologia.",
      "(B) Centro de Terapia Renal Substitutiva.",
      "(C) Maternidade de alto risco.",
      "(D) Unidade Básica de Saúde."
    ],
    "correctAnswer": 3,
    "explanation": "Pelo Decreto nº 7.508/2011, para ser instituída, a Região de Saúde deve conter no mínimo ações e serviços de:\n\n• Atenção primária\n• Urgência e emergência\n• Atenção psicossocial\n• Atenção ambulatorial especializada e hospitalar\n• Vigilância em saúde\n\nEntre as alternativas, apenas a atenção primária (Unidade Básica de Saúde) faz parte desse conjunto mínimo.",
    "commentary": "Alta complexidade em oncologia (A): serviço de referência macrorregional, não requisito mínimo.\n\nTerapia renal substitutiva (B): serviço especializado, não exigido para instituir a região.\n\nMaternidade de alto risco (C): referência que pode atender várias regiões; não é requisito mínimo.",
    "reference": "Decreto nº 7.508/2011, art. 5º",
    "tags": [
      "saúde coletiva",
      "regionalização",
      "região de saúde",
      "SUS"
    ]
  },
  {
    "id": "unifesp2025-51",
    "topography": "15",
    "topic": "Rastreamento",
    "module": "Saúde Coletiva",
    "text": "Para determinar se, de fato, um programa de rastreamento de câncer de próstata é benéfico para aumento da longevidade de homens (\"prolongar vidas\"), qual dos seguintes desfechos clínicos é o mais adequado?",
    "options": [
      "(A) Redução na mortalidade geral.",
      "(B) Redução na mortalidade específica por câncer de próstata.",
      "(C) Aumento na sobrevida em 5 anos."
    ],
    "correctAnswer": 0,
    "explanation": "Para saber se o rastreamento 'prolonga vidas', o desfecho mais adequado é a mortalidade geral (por todas as causas).\n\nA mortalidade específica pode cair sem ganho real de longevidade se o rastreamento e o tratamento (biópsias, prostatectomia, radioterapia) causarem mortes por outras causas, ou se houver erro na atribuição da causa do óbito. A mortalidade geral capta o efeito líquido.",
    "commentary": "Mortalidade específica (B): é o desfecho usual dos ensaios de rastreamento, mas não demonstra aumento da longevidade, pois ignora mortes causadas pela própria intervenção.\n\nSobrevida em 5 anos (C): sujeita aos vieses de tempo de antecipação (lead time), de duração (length bias) e de sobrediagnóstico; aumenta mesmo que ninguém viva mais.",
    "reference": "Fletcher — Epidemiologia Clínica (Prevenção) / USPSTF Prostate Cancer Screening",
    "tags": [
      "epidemiologia",
      "rastreamento",
      "câncer de próstata",
      "vieses"
    ]
  },
  {
    "id": "unifesp2025-52",
    "topography": "15",
    "topic": "Testes diagnósticos",
    "module": "Saúde Coletiva",
    "text": "Você quer diagnosticar hipertensão arterial (PA ≥ 140/90 mmHg) e está usando um esfigmomanômetro que, por um defeito, sempre marca 140/90 mmHg ou mais, indicando corretamente as pressões acima destas. Indique o ponto da curva ROC (imagem a seguir) que representa a sensibilidade e a especificidade desse instrumento.",
    "options": [
      "(A) I",
      "(B) IV",
      "(C) III",
      "(D) II"
    ],
    "correctAnswer": 1,
    "explanation": "O aparelho sempre marca 140/90 mmHg ou mais, ou seja, classifica todos os indivíduos como hipertensos:\n\n• Todos os hipertensos são detectados: sensibilidade = 100%\n• Nenhum normotenso é identificado como tal: especificidade = 0%, logo 1 – especificidade = 100%\n\nNa curva ROC (sensibilidade no eixo y, 1 – especificidade no eixo x), esse é o canto superior direito: o ponto IV.",
    "commentary": "Ponto I (A): sensibilidade 0 e especificidade 100% — o teste que chama todos de negativos.\n\nPonto III (C): sensibilidade e especificidade próximas de 100% — o teste ideal.\n\nPonto II (D): especificidade alta com sensibilidade intermediária.",
    "reference": "Fletcher — Epidemiologia Clínica (Diagnóstico) / Curvas ROC",
    "tags": [
      "epidemiologia",
      "testes diagnósticos",
      "curva ROC",
      "sensibilidade",
      "especificidade"
    ],
    "image": "/images/unifesp2025-52.webp"
  },
  {
    "id": "unifesp2025-53",
    "topography": "15",
    "topic": "Estudos epidemiológicos",
    "module": "Saúde Coletiva",
    "text": "Em um estudo observacional, prospectivo, analítico foi avaliada a relação entre fumar e a incidência de acidente vascular cerebral (AVC) em mulheres com idade entre 30-55 anos, acompanhadas por um período de 10 anos que, no início do estudo, não tinham história de doença coronariana, AVC ou câncer. Os pesquisadores calcularam a incidência de AVC em mulheres fumantes e em mulheres não fumantes, resultando em uma força de associação de 2,8 IC95% (2,4-3,9).\n\nCom esse resultado podemos afirmar que:",
    "options": [
      "(A) Faltou o cálculo do p para afirmarmos que mulheres fumantes possuem 2,8 vezes o risco de ter AVC em relação a mulheres não fumantes.",
      "(B) Faltou o cálculo do p para afirmarmos que mulheres fumantes possuem 2,8 vezes a chance de ter AVC em relação a mulheres não fumantes.",
      "(C) Mulheres fumantes possuem 2,8 vezes a chance de ter AVC em relação a mulheres não fumantes.",
      "(D) Mulheres fumantes possuem 2,8 vezes o risco de ter AVC em relação a mulheres não fumantes."
    ],
    "correctAnswer": 3,
    "explanation": "O estudo é uma coorte prospectiva: parte da exposição (fumar ou não), acompanha as mulheres e mede a incidência de AVC. Na coorte, a medida de associação é o risco relativo (razão de incidências), interpretado como 'vezes o risco'.\n\nO IC95% (2,4 a 3,9) não inclui o 1, então a associação é estatisticamente significativa sem precisar do valor de p. Mulheres fumantes têm 2,8 vezes o risco de AVC das não fumantes.",
    "commentary": "Faltou o p (A): o intervalo de confiança já informa a significância (não contém 1) e ainda dá a precisão da estimativa.\n\nFaltou o p, com 'chance' (B): dois erros — o p é dispensável e a medida da coorte é risco, não chance.\n\nChance (C): odds ratio ('chance') é a medida típica do caso-controle; em coorte calcula-se risco.",
    "reference": "Medronho — Epidemiologia / Fletcher — Epidemiologia Clínica",
    "tags": [
      "epidemiologia",
      "estudo de coorte",
      "risco relativo",
      "intervalo de confiança"
    ]
  },
  {
    "id": "unifesp2025-54",
    "topography": "8",
    "topic": "Diabetes mellitus tipo 1 e 2",
    "module": "Clínica Médica",
    "text": "Mulher, 65 anos de idade, faz acompanhamento ambulatorial devido a hipertensão arterial sistêmica há 20 anos, diabetes mellitus tipo 2 há 15 anos, sem outros antecedentes patológicos. Faz uso de anlodipino 10 mg 1x/dia, losartana 50 mg 2x/dia, hidroclorotiazida 25mg 1x/dia, metformina 500 mg 3x/dia, ácido acetil salicílico 100 mg 1x/dia. Queixa-se de edema de membros inferiores iniciado há 3 meses. Exame físico: PA = 118/78 mmHg, edema de membros inferiores +/4, frio, mole, indolor, pulsos cheios e simétricos, panturrilhas livres, sem outras alterações. Exames: hemoglobina glicada = 7,8%, relação albumina/creatinina em amostra isolada de urina = 210 mg/g (VR < 30 mg/g).\n\nConsiderando efeitos adversos de medicamentos, a renoproteção e a prevenção de eventos cardiovasculares, quais são as condutas mais adequadas?",
    "options": [
      "(A) Substituir bloqueador do canal de cálcio; iniciar inibidor do cotransportador sódio-glicose 2 (iSGLT2); suspender uso de ácido acetilsalicílico.",
      "(B) Substituir losartana; iniciar inibidor do cotransportador sódio-glicose 2 (iSGLT2); suspender uso de ácido acetilsalicílico.",
      "(C) Substituir bloqueador do canal de cálcio; iniciar semaglutida subcutâneo; manter uso de ácido acetilsalicílico.",
      "(D) Substituir losartana; iniciar semaglutida; suspender uso de ácido acetilsalicílico."
    ],
    "correctAnswer": 0,
    "explanation": "Três pontos:\n\n• Edema: frio, mole, simétrico e indolor em usuária de anlodipino 10 mg — efeito adverso clássico do bloqueador de canal de cálcio di-hidropiridínico. Deve-se substituí-lo ou reduzi-lo.\n• Renoproteção: DM2 com albuminúria (210 mg/g) — o iSGLT2 reduz progressão renal e eventos cardiovasculares, independentemente da glicemia, e já está indicado.\n• AAS: sem doença cardiovascular estabelecida, é prevenção primária; o risco de sangramento supera o benefício e ele deve ser suspenso.",
    "commentary": "Substituir losartana (B): o BRA é o pilar da renoproteção na albuminúria e não causa esse edema.\n\nSemaglutida e manter AAS (C): o AGLP-1 é opção, mas o iSGLT2 tem maior evidência de renoproteção, e o AAS em prevenção primária deve ser suspenso.\n\nSubstituir losartana e semaglutida (D): retira o bloqueio do SRAA, que é essencial.",
    "reference": "Diretrizes da SBD 2024 / KDIGO 2022 Diabetes in CKD / Diretriz Brasileira de Hipertensão 2020",
    "tags": [
      "endocrinologia",
      "diabetes mellitus tipo 2",
      "doença renal diabética",
      "iSGLT2",
      "anlodipino"
    ]
  },
  {
    "id": "unifesp2025-55",
    "topography": "8",
    "topic": "Diabetes mellitus tipo 1 e 2",
    "module": "Clínica Médica",
    "text": "Homem, 66 anos de idade, é avaliado em consulta ambulatorial com queixa de prurido na glande, hiperemia local e aumento da produção de esmegma. Trata-se de paciente com antecedente de obesidade, dislipidemia, diabetes mellitus tipo 2, doença renal crônica, estágio 4 A2 filtração glomerular estimada de 28 mL/min/1,73 m² e relação albumina/creatinina em amostra isolada de urina de 200 mg/g (VR < 30 mg/g). Faz uso de metformina 850mg 3x/dia e dapagliflozin 10 mg/dia.\n\nQual é a conduta mais adequada neste momento em relação ao tratamento do diabetes?",
    "options": [
      "(A) A dapagliflozina deve ser suspensa devido à infecção urogenital.",
      "(B) A metformina deve ser substituída devido ao risco de acidose lática.",
      "(C) A metformina deve ser mantida para aumentar a atividade da enzima piruvato carboxilase.",
      "(D) A dapagliflozina deve ser suspensa devido ao risco de cetoacidose euglicêmica."
    ],
    "correctAnswer": 1,
    "explanation": "DRC estágio 4 (TFG 28 mL/min/1,73 m²) em uso de metformina 2.550 mg/dia. A metformina é contraindicada com TFG < 30 mL/min/1,73 m², pelo risco de acúmulo e acidose lática, e deve ter a dose reduzida entre 30 e 45.\n\nPortanto, a metformina deve ser substituída. A balanopostite candidiásica é efeito comum dos iSGLT2, mas não obriga suspender o fármaco: trata-se a infecção e reforça-se a higiene, mantendo a dapagliflozina, que tem benefício renal comprovado (DAPA-CKD) até TFG de 20–25.",
    "commentary": "Suspender dapagliflozina pela infecção (A): a candidíase genital é leve e tratável; suspender o iSGLT2 privaria o paciente de nefroproteção.\n\nManter metformina pela piruvato carboxilase (C): a metformina inibe, não estimula, a gliconeogênese hepática; e está contraindicada com essa TFG.\n\nSuspender dapagliflozina pela cetoacidose (D): o risco de cetoacidose euglicêmica existe, mas não há situação de risco atual (cirurgia, jejum, doença aguda).",
    "reference": "Diretrizes da SBD 2024 / KDIGO 2022 Diabetes in CKD",
    "tags": [
      "endocrinologia",
      "diabetes mellitus tipo 2",
      "metformina",
      "doença renal crônica",
      "iSGLT2"
    ]
  },
  {
    "id": "unifesp2025-56",
    "topography": "15",
    "topic": "Rastreamento",
    "module": "Saúde Coletiva",
    "text": "A Força Tarefa Americana para Serviços Preventivos (US Preventive Service Task Force) atualizou sua recomendação para rastreamento de câncer de mama em mulheres, sugerindo mamografias bienais a partir dos 40 anos de idade, ao invés dos 50 anos de idade.\n\nConsiderando que a prevalência de câncer de mama é menor em mulheres jovens, qual é o impacto esperado desta nova Recomendação na performance do teste diagnóstico?",
    "options": [
      "(A) A sensibilidade da mamografia será maior.",
      "(B) A especificidade da mamografia será menor.",
      "(C) O valor preditivo positivo da mamografia será menor.",
      "(D) A razão de verossimilhança positiva será menor."
    ],
    "correctAnswer": 2,
    "explanation": "Sensibilidade e especificidade são propriedades do teste e, em princípio, não variam com a prevalência. Já os valores preditivos dependem da prevalência da doença na população testada.\n\nAo incluir mulheres de 40 a 49 anos, em quem o câncer de mama é menos prevalente, a probabilidade de um exame positivo ser verdadeiramente câncer diminui. O valor preditivo positivo será menor, com mais falso-positivos, biópsias e ansiedade.",
    "commentary": "Sensibilidade maior (A): não depende da prevalência; na prática, a mama mais densa das jovens até reduz a sensibilidade da mamografia.\n\nEspecificidade menor (B): propriedade intrínseca do teste, não afetada pela prevalência.\n\nRazão de verossimilhança positiva menor (D): derivada de sensibilidade e especificidade, também independe da prevalência.",
    "reference": "USPSTF Breast Cancer Screening (2024) / Fletcher — Epidemiologia Clínica",
    "tags": [
      "epidemiologia",
      "rastreamento",
      "câncer de mama",
      "valor preditivo positivo"
    ]
  },
  {
    "id": "unifesp2025-57",
    "module": "Saúde Coletiva",
    "text": "A codeína e o tramadol podem ser prescritos em dois tipos de notificação de receitas, segundo a Portaria 344/98. Para decisão do tipo de notificação a ser utilizada lança-se mão dos chamados \"adendos de lista\", os quais preveem os tipos de notificação conforme a unidade posológica e concentração.\n\nSendo assim, quais as notificações de receitas possíveis de serem elaboradas para estes opioides?",
    "options": [
      "(A) Notificação de Receita A - acima de 100 mg e Notificação de Receita B -psicotrópico - acima de 100 mg.",
      "(B) Notificação de Receita B - acima de 100 mg e Receituário Sujeito a Controle Especial - abaixo de 100 mg.",
      "(C) Notificação de Receita B - acima de 100 mg e Notificação de Receita C2 - abaixo de 100 mg.",
      "(D) Notificação de Receita A - acima de 100 mg e Receituário Sujeito a Controle Especial - abaixo de 100 mg."
    ],
    "correctAnswer": 3,
    "explanation": "Codeína e tramadol pertencem à lista A2 da Portaria SVS/MS nº 344/1998 (entorpecentes de uso permitido em concentrações especiais). Os adendos dessa lista estabelecem que preparações com até 100 mg por unidade posológica (e concentração limitada) ficam sujeitas à prescrição em Receita de Controle Especial, em duas vias.\n\nAcima desse limite, aplica-se a regra da lista A: Notificação de Receita A (amarela).",
    "commentary": "Notificação A e Notificação B (A): a Notificação B (azul) é para psicotrópicos da lista B, não para opioides.\n\nNotificação B e controle especial (B): a notificação de maior concentração é a A, não a B.\n\nNotificação B e C2 (C): a C2 é para retinoides; nenhuma das duas se aplica a opioides.",
    "reference": "Portaria SVS/MS nº 344/1998 e atualizações (RDC Anvisa) — Lista A2 e adendos",
    "tags": [
      "farmacologia",
      "prescrição",
      "opioides",
      "portaria 344/98"
    ]
  },
  {
    "id": "unifesp2025-58",
    "topography": "6.2",
    "topic": "Fraturas",
    "module": "Cirurgia",
    "text": "Homem, 63 anos de idade, diabético tipo 2 bem controlado, apresentou queda ao solo há 3 horas, com trauma lateral do quadril direito, evoluindo com dor intensa, encurtamento aparente e rotação externa do membro inferior direito e sem alterações neurovasculares agudas.\n\nQual é a conduta mais adequada?",
    "options": [
      "(A) Osteossíntese com placa e parafusos.",
      "(B) Osteossíntese com haste bloqueada intramedular por via retrógrada",
      "(C) Osteossíntese com parafusos canulados.",
      "(D) Artroplastia total do quadril."
    ],
    "correctAnswer": 3,
    "explanation": "Queda da própria altura com dor no quadril, encurtamento e rotação externa do membro: fratura do colo do fêmur (ou transtrocantérica). Pelo gabarito, trata-se de fratura do colo femoral desviada em paciente de 63 anos.\n\nEm idosos com fratura desviada do colo (Garden III–IV), o risco de necrose avascular e pseudoartrose após fixação é alto. A artroplastia é preferível, e a total é indicada no paciente ativo, independente e com boa expectativa de vida, como este (DM bem controlado).",
    "commentary": "Placa e parafusos (A): não é o implante usado na fratura do colo do fêmur no idoso.\n\nHaste retrógrada (B): usada em fraturas diafisárias e supracondilianas do fêmur, não no colo.\n\nParafusos canulados (C): indicados em fraturas sem desvio ou em jovens (preservação da cabeça); no idoso com desvio, a falha é frequente.",
    "reference": "SBOT — Fraturas do colo do fêmur / AAOS Clinical Practice Guideline on Hip Fractures in Older Adults (2021)",
    "tags": [
      "ortopedia",
      "fratura do colo do fêmur",
      "artroplastia"
    ],
    "alert": "O enunciado não informa o tipo nem o desvio da fratura; o gabarito assume fratura desviada do colo do fêmur. Em fratura transtrocantérica, a conduta seria osteossíntese com haste cefalomedular."
  },
  {
    "id": "unifesp2025-59",
    "topography": "15",
    "topic": "Rastreamento",
    "module": "Saúde Coletiva",
    "text": "Considerando adultos acima de 40 anos de idade, não gestantes, assintomáticos, independentemente da presença de outros fatores de risco, para quais condições é recomendado o rastreamento populacional?",
    "options": [
      "(A) Diabetes tipo 2 e hipertensão arterial.",
      "(B) Câncer de mama e câncer de próstata.",
      "(C) Câncer colorretal e diabetes tipo 2.",
      "(D) Câncer de mama e hipertensão arterial."
    ],
    "correctAnswer": 0,
    "explanation": "A hipertensão arterial deve ser rastreada em todos os adultos a partir dos 18 anos, em toda consulta. O diabetes tipo 2 tem rastreamento populacional recomendado a partir de determinada idade mesmo sem outros fatores de risco: a SBD recomenda a partir dos 35 anos (ou antes, se houver fatores de risco).\n\nAs duas doenças são prevalentes, têm fase assintomática detectável e tratamento precoce que muda o prognóstico.",
    "commentary": "Mama e próstata (B): o rastreio de mama é só para mulheres (o enunciado inclui homens), e o de próstata não é recomendado como rastreamento populacional (decisão compartilhada).\n\nColorretal e diabetes (C): o rastreamento colorretal começa aos 45–50 anos, não aos 40.\n\nMama e hipertensão (D): o rastreio de mama não se aplica a 'adultos' em geral e, pelo Ministério da Saúde, é bienal dos 50 aos 69 anos.",
    "reference": "Caderno de Atenção Primária nº 29 — Rastreamento (MS) / Diretrizes da SBD 2024 / USPSTF",
    "tags": [
      "saúde coletiva",
      "rastreamento",
      "hipertensão arterial",
      "diabetes mellitus tipo 2",
      "medicina preventiva"
    ],
    "alert": "Gabarito discutível: hipertensão é rastreada em todos os adultos, mas o rastreamento de diabetes 'independentemente de fatores de risco' varia entre diretrizes (SBD: a partir dos 35 anos; USPSTF: 35–70 anos com sobrepeso/obesidade; Ministério da Saúde: rastreio orientado por fatores de risco)."
  },
  {
    "id": "unifesp2025-60",
    "topography": "15",
    "topic": "Estudos epidemiológicos",
    "module": "Saúde Coletiva",
    "text": "Durante a epidemia de Zika no nordeste do Brasil, um estudo foi conduzido para investigar a associação entre a infecção congênita pelo vírus Zika e a microcefalia em recém-nascidos. Os pesquisadores selecionaram neonatos com microcefalia e neonatos sem microcefalia. Em seguida, eles investigaram retrospectivamente a exposição materna à infecção pelo vírus Zika confirmada por testes laboratoriais em ambos os grupos.\n\nQual é o desenho de estudo utilizado neste caso?",
    "options": [
      "(A) Estudo de coorte.",
      "(B) Ensaio clínico.",
      "(C) Estudo de caso-controle.",
      "(D) Estudo transversal."
    ],
    "correctAnswer": 2,
    "explanation": "Os pesquisadores partiram do desfecho (neonatos com e sem microcefalia) e investigaram retrospectivamente a exposição (infecção materna por Zika). Esse é o desenho do estudo de caso-controle, cuja medida de associação é a odds ratio.\n\nÉ o desenho ideal para desfechos raros e investigação rápida de surtos, como foi feito na epidemia de 2015–2016.",
    "commentary": "Coorte (A): parte da exposição e acompanha até o desfecho.\n\nEnsaio clínico (B): exige intervenção alocada pelo pesquisador.\n\nTransversal (D): mede exposição e desfecho no mesmo momento, sem selecionar por desfecho.",
    "reference": "Medronho — Epidemiologia / de Araújo TVB et al. — Lancet Infect Dis, 2018",
    "tags": [
      "epidemiologia",
      "estudo de caso-controle",
      "desenhos de estudo",
      "vírus Zika"
    ]
  },
  {
    "id": "unifesp2025-61",
    "module": "Clínica Médica",
    "text": "Mulher, 30 anos de idade, previamente saudável, vem apresentando nos últimos 3 meses quadro progressivo de fraqueza, envolvendo principalmente o segmento craniocervical. Relata engasgos frequentes, voz anasalada e percebe também que no final do dia sua pálpebra direita está um pouco mais “caída” em relação a pálpebra esquerda, além da presença de discreta diplopia, também pior no final do dia. Nega outras doenças ou história familiar de doença neurológica.\n\nNesta situação clínica quais exames seriam os mais adequados a serem solicitados?",
    "options": [
      "(A) Biopsia muscular com imuno-histoquímica.",
      "(B) Ressonância magnética de coluna cervical e crânio.",
      "(C) Eletroneuromiografia e anticorpos anti-receptor de acetilcolina.",
      "(D) Liquor e bandas oligoclonais."
    ],
    "correctAnswer": 2,
    "explanation": "Mulher jovem com fraqueza flutuante e fatigável, pior no fim do dia, envolvendo musculatura ocular (ptose e diplopia) e bulbar (disfagia, voz anasalada): miastenia gravis.\n\nA confirmação se faz com anticorpos antirreceptor de acetilcolina (positivos em cerca de 85% das formas generalizadas; se negativos, pesquisa-se anti-MuSK) e eletroneuromiografia com estimulação repetitiva (decremento) ou eletromiografia de fibra única. Depois, investiga-se timoma com tomografia de tórax.",
    "commentary": "Biópsia muscular (A): indicada em miopatias, que causam fraqueza proximal sem flutuação nem ptose ou diplopia.\n\nRM de coluna e crânio (B): investigaria lesão estrutural central, que não explica a fatigabilidade.\n\nLíquor e bandas oligoclonais (D): investigação de esclerose múltipla, que não cursa com fraqueza flutuante.",
    "reference": "Consenso brasileiro de miastenia gravis (Academia Brasileira de Neurologia) / International Consensus Guidance for MG (2020)",
    "tags": [
      "neurologia",
      "miastenia gravis",
      "junção neuromuscular"
    ]
  },
  {
    "id": "unifesp2025-62",
    "module": "Clínica Médica",
    "text": "Homem, 23 anos de idade, apresenta alta estatura, pectus excavatum, escoliose, aracnodactilia, frouxidão ligamentar, luxação de cristalino em olho esquerdo e discreta dilatação de aorta ascendente. A história familiar revela que sua mãe tem luxação de cristalino bilateral e prolapso da valva mitral, enquanto uma irmã do paciente tem alta estatura, pectus excavatum, escoliose e prolapso da valva mitral.\n\nConsiderando o diagnóstico mais provável, qual é o padrão de herança implicado nesta condição?",
    "options": [
      "(A) Herança autossômica recessiva",
      "(B) Herança autossômica dominante",
      "(C) Herança mitocondrial",
      "(D) Herança ligada ao X"
    ],
    "correctAnswer": 1,
    "explanation": "Alta estatura, aracnodactilia, pectus excavatum, escoliose, frouxidão ligamentar, ectopia do cristalino e dilatação da aorta ascendente: síndrome de Marfan (critérios de Ghent), por mutação no gene FBN1 (fibrilina-1).\n\nA herança é autossômica dominante, com acometimento em gerações sucessivas e em ambos os sexos (mãe e irmã), como mostra a história familiar. Há expressividade variável.",
    "commentary": "Autossômica recessiva (A): os pais seriam portadores assintomáticos; aqui a mãe é afetada.\n\nMitocondrial (C): transmissão exclusivamente materna, com fenótipos neuromusculares e metabólicos.\n\nLigada ao X (D): predomínio no sexo masculino; não explicaria o padrão observado.",
    "reference": "Critérios de Ghent revisados (Loeys et al., 2010) / Thompson & Thompson — Genética Médica",
    "tags": [
      "genética",
      "síndrome de Marfan",
      "herança autossômica dominante"
    ]
  },
  {
    "id": "unifesp2025-63",
    "topography": "1.1",
    "topic": "AVC",
    "module": "Clínica Médica",
    "text": "Mulher, 45 anos de idade, hipertensa e diabética dá entrada no pronto-socorro com rebaixamento do nível de consciência há 4 horas. Familiares relatam que ela se queixou de forte cefaleia repentina há 6 horas. Exame oftalmológico: fundo de olho com hemorragia vítrea e sub-hialoidea.\n\nO diagnóstico mais provável é:",
    "options": [
      "(A) Status Epiléptico",
      "(B) Hemorragia Subaracnoide",
      "(C) Tumor em sistema nervoso central",
      "(D) Coma hiperglicêmico"
    ],
    "correctAnswer": 1,
    "explanation": "Cefaleia súbita e intensa ('a pior da vida') seguida de rebaixamento de consciência, com hemorragia vítrea e sub-hialoide ao fundo de olho (síndrome de Terson): hemorragia subaracnoide, geralmente por ruptura de aneurisma.\n\nA síndrome de Terson resulta do aumento abrupto da pressão intracraniana e se associa a maior gravidade e mortalidade. A conduta é TC de crânio sem contraste, seguida de angiografia.",
    "commentary": "Status epiléptico (A): não explica a cefaleia súbita nem as hemorragias oculares.\n\nTumor do SNC (C): cefaleia progressiva e papiledema, não instalação ictal com hemorragia vítrea.\n\nComa hiperglicêmico (D): instalação mais lenta, sem cefaleia em trovoada ou achados hemorrágicos oculares.",
    "reference": "AHA/ASA 2023 Guideline for Aneurysmal Subarachnoid Hemorrhage",
    "tags": [
      "neurologia",
      "hemorragia subaracnoide",
      "síndrome de Terson"
    ]
  },
  {
    "id": "unifesp2025-64",
    "topography": "5.1",
    "topic": "Câncer de endométrio",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 54 anos de idade, refere sangramento genital progressivo há 2 anos. Biopsia endometrial: adenocarcinoma endometrial do tipo seroso. Estudo imuno-histoquímico: expressão anormal para p53. Ressonância Magnética da Pelve: doença restrita ao útero, ausência de linfonodomegalias pélvicas e para-aórticas. Tomografia de abdome superior e tórax: sem alterações.\n\nQual é a conduta mais adequada?",
    "options": [
      "(A) Histerectomia total com congelação intraoperatória e linfadenectomia pélvica e periaórtica apenas se invasão miometrial maior que 50%.",
      "(B) Quimioterapia e radioterapia neoadjuvante seguida de histerectomia total e salpingooforectomia bilateral 4 a 6 semanas após.",
      "(C) Imunoterapia devido mutação de p53 seguido de radioterapia e quimioterapia sistêmica.",
      "(D) Histerectomia total, salpingooforectomia bilateral, linfadenectomia pélvica bilateral e para-aórtica, omentectomia infra cólica e coleta de lavado peritoneal."
    ],
    "correctAnswer": 3,
    "explanation": "O carcinoma seroso de endométrio (p53 anormal) é um tipo histológico de alto risco, com tendência à disseminação peritoneal e linfonodal mesmo com doença uterina aparentemente restrita.\n\nO tratamento é o estadiamento cirúrgico completo: histerectomia total com salpingo-ooforectomia bilateral, linfadenectomia pélvica e para-aórtica (ou linfonodo sentinela), omentectomia e lavado peritoneal. O tratamento adjuvante (quimioterapia com ou sem radioterapia) é definido depois pelo estadiamento.",
    "commentary": "Linfadenectomia só se invasão > 50% (A): esse critério se aplica a tumores endometrioides de baixo grau; no seroso, o estadiamento completo é obrigatório.\n\nNeoadjuvância (B): não é padrão em doença aparentemente restrita ao útero e operável.\n\nImunoterapia pela mutação de p53 (C): o p53 anormal não é alvo de imunoterapia; ela tem papel na doença avançada ou dMMR.",
    "reference": "FIGO 2023 — Estadiamento do câncer de endométrio / ESGO-ESTRO-ESP Guidelines / NCCN Uterine Neoplasms",
    "tags": [
      "ginecologia",
      "câncer de endométrio",
      "carcinoma seroso",
      "estadiamento cirúrgico"
    ]
  },
  {
    "id": "unifesp2025-65",
    "topography": "4.2",
    "topic": "Incontinência urinária",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 54 anos de idade, 4G 4P (partos normais), refere perda urinária aos grandes esforços (tosse e atividade física) há 3 meses. Nega outras queixas. Ao exame físico observou-se o seguinte POP-Q: Aa=-1 Ba=-1 C=-7 HG=5 CP=2 CVT=10 Ap=-1 Bp=-1 D= -9.\n\nQual é a conduta mais adequada?",
    "options": [
      "(A) Fisioterapia do assoalho pélvico",
      "(B) Cirurgia de Burch",
      "(C) Mirabegrona",
      "(D) Pessário vaginal em anel"
    ],
    "correctAnswer": 0,
    "explanation": "Incontinência urinária de esforço pura (perda à tosse e ao exercício, sem urgência). O POP-Q mostra prolapso de parede anterior e posterior em estádio II (pontos a –1 cm), assintomático.\n\nA primeira linha do tratamento da incontinência de esforço é conservadora: treinamento da musculatura do assoalho pélvico com fisioterapia por pelo menos 3 meses. Ele melhora ou cura grande parte das pacientes e também atua no prolapso leve.",
    "commentary": "Cirurgia de Burch (B): opção cirúrgica (hoje menos usada que o sling) reservada à falha do tratamento conservador.\n\nMirabegrona (C): agonista beta-3 para bexiga hiperativa (urgência), não para incontinência de esforço.\n\nPessário em anel (D): tratamento de prolapso sintomático ou opção em quem não quer ou não pode operar; não é a primeira escolha aqui.",
    "reference": "Diretrizes da FEBRASGO para incontinência urinária / NICE NG123 (2019)",
    "tags": [
      "ginecologia",
      "uroginecologia",
      "incontinência urinária de esforço",
      "POP-Q"
    ]
  },
  {
    "id": "unifesp2025-66",
    "topography": "5.1",
    "topic": "Câncer de colo uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 48 anos de idade, submeteu-se à histerectomia total abdominal por mioma uterino há 4 meses. Refere ter realizado conização por NIC 3 com margens livres há 8 anos.\n\nSegundo as Diretrizes Brasileiras para o rastreamento do câncer do colo do útero a conduta é:",
    "options": [
      "(A) Descontinuar o exame citológico.",
      "(B) Realizar pesquisa vaginal de HPV 16.",
      "(C) Realizar vaginoscopia anual.",
      "(D) Manter o rastreio colpocitológico trienal."
    ],
    "correctAnswer": 3,
    "explanation": "Pelas Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero, só podem sair do rastreamento as mulheres histerectomizadas por doença benigna sem história de lesão precursora de alto grau ou câncer.\n\nEsta paciente tem antecedente de NIC 3 tratada e mantém risco de neoplasia intraepitelial vaginal. Deve continuar o rastreamento citológico (da cúpula vaginal) no intervalo habitual: trienal, após dois exames anuais negativos.",
    "commentary": "Descontinuar (A): só vale para histerectomia por doença benigna sem antecedente de lesão de alto grau.\n\nHPV 16 vaginal (B): não é a estratégia preconizada pela diretriz baseada em citologia.\n\nVaginoscopia anual (C): não há indicação de exame colposcópico rotineiro sem alteração citológica.",
    "reference": "Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero — INCA, 2016",
    "tags": [
      "ginecologia",
      "rastreamento",
      "câncer do colo do útero",
      "histerectomia"
    ]
  },
  {
    "id": "unifesp2025-67",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 44 anos de idade, multípara, realizou a primeira mamografia da vida (quatro incidências básicas) que mostrou mamas lipossubstituídas com presença de calcificações heterogêneas localizadas na região retroareolar da mama esquerda, BI-RADS 0.\n\nQual é o complemento mamográfico adicional necessário para a classificação adequada?",
    "options": [
      "(A) Compressão localizada",
      "(B) Incidência craniocaudal exagerada",
      "(C) Ampliação",
      "(D) Incidência em perfil absoluto"
    ],
    "correctAnswer": 2,
    "explanation": "Calcificações classificadas como BI-RADS 0 precisam de avaliação adicional da morfologia e da distribuição para serem categorizadas (benignas, suspeitas ou altamente suspeitas).\n\nO complemento específico para calcificações é a magnificação (ampliação), em geral associada a compressão localizada, que mostra o formato, o número e a distribuição das partículas.",
    "commentary": "Compressão localizada (A): indicada principalmente para assimetrias e nódulos, para diferenciar sobreposição de tecido de lesão real.\n\nCraniocaudal exagerada (B): usada para lesões nas porções lateral ou medial posteriores não incluídas na CC padrão.\n\nPerfil absoluto (D): ajuda a localizar a lesão e a identificar calcificações em 'leite de cálcio', mas não substitui a ampliação para estudar a morfologia.",
    "reference": "ACR BI-RADS Atlas, 5ª ed. / Colégio Brasileiro de Radiologia",
    "tags": [
      "mastologia",
      "mamografia",
      "BI-RADS",
      "microcalcificações"
    ]
  },
  {
    "id": "unifesp2025-68",
    "topography": "5.1",
    "topic": "Climatério e menopausa",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 61 anos de idade, refere aumento progressivo e intenso de pelos pelo corpo, queda de cabelos importante, engrossamento da voz e aumento do clitóris há 6 meses.\n\nQual é a hipótese mais provável?",
    "options": [
      "(A) Tecoma ovariano.",
      "(B) Tumor da suprarrenal.",
      "(C) Hipertecose.",
      "(D) Tumor das células da granulosa."
    ],
    "correctAnswer": 2,
    "explanation": "Na pós-menopausa, a virilização (hirsutismo, alopecia androgenética, voz grave, clitoromegalia) indica níveis de testosterona elevados. As principais causas são tumores ovarianos virilizantes, tumores adrenais e hipertecose ovariana.\n\nO gabarito considerou a hipertecose ovariana, condição não neoplásica com ninhos de células tecais luteinizadas no estroma. É mais comum na pós-menopausa, estimulada pelo LH elevado, e pode causar virilização. A investigação inclui testosterona total, DHEA-S (elevado na origem adrenal) e imagem ovariana e adrenal.",
    "commentary": "Tecoma (A): tumor geralmente produtor de estrogênio, que se manifesta por sangramento e hiperplasia endometrial, não por virilização.\n\nTumor da suprarrenal (B): pode causar virilização rápida, com DHEA-S muito elevado; o gabarito não o considerou a principal hipótese.\n\nTumor de células da granulosa (D): secreta estrogênio e inibina; causa sangramento pós-menopausa, não virilização.",
    "reference": "Diretrizes da FEBRASGO para hiperandrogenismo / Endocrine Society — Hirsutism in Premenopausal and Postmenopausal Women",
    "tags": [
      "ginecologia",
      "hiperandrogenismo",
      "virilização",
      "hipertecose ovariana",
      "pós-menopausa"
    ],
    "alert": "Gabarito discutível: virilização intensa e progressiva em 6 meses (clitoromegalia, voz grave) sugere classicamente tumor produtor de androgênio (ovariano, como Sertoli-Leydig, ou adrenal). A hipertecose costuma ter evolução mais lenta. O gabarito oficial é hipertecose ovariana."
  },
  {
    "id": "unifesp2025-69",
    "topography": "5.1",
    "topic": "Contracepção",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 26 anos de idade, 3G 3 partos normais, vem ao ambulatório solicitar método contraceptivo. Refere fluxo menstrual abundante com 10 dias de duração acompanhado de cólica menstrual forte nos 3 primeiros dias. Ultrassonografia pélvica: útero com volume 180 mL, presença de nódulo intramural medindo 35x30 mm com distorção do eco endometrial de 10 mm, ovário direito volume 8 mL e ovário esquerdo com cisto simples 20x25 mm e volume 15mL.\n\nQual dos métodos contraceptivos é o mais adequado?",
    "options": [
      "(A) Injetável com estradiol e medroxiprogesterona.",
      "(B) DIU liberador de levonorgestrel.",
      "(C) Pílula com etinilestradiol e ciproterona.",
      "(D) Pílula com noretisterona."
    ],
    "correctAnswer": 0,
    "explanation": "Sangramento uterino aumentado e dismenorreia por mioma intramural que distorce a cavidade endometrial.\n\nA distorção da cavidade uterina é categoria 4 dos Critérios de Elegibilidade da OMS para dispositivos intrauterinos (cobre e levonorgestrel), pelo risco de expulsão e mau posicionamento. A paciente não tem contraindicações ao estrogênio, e um método hormonal combinado sistêmico (o injetável mensal com estradiol e medroxiprogesterona) oferece contracepção e controle do ciclo.",
    "commentary": "DIU-LNG (B): seria excelente para o sangramento, mas a distorção da cavidade pelo mioma o contraindica (OMS categoria 4).\n\nEtinilestradiol e ciproterona (C): combinação com maior risco tromboembólico, indicada para hiperandrogenismo (acne, hirsutismo), sem vantagem aqui.\n\nNoretisterona isolada (D): a minipílula de baixa dose tem padrão de sangramento irregular e não controla bem o fluxo abundante.",
    "reference": "Critérios Médicos de Elegibilidade para Uso de Métodos Anticoncepcionais — OMS, 5ª ed. / FEBRASGO",
    "tags": [
      "ginecologia",
      "contracepção",
      "mioma uterino",
      "critérios de elegibilidade"
    ]
  },
  {
    "id": "unifesp2025-70",
    "topography": "5.1",
    "topic": "Climatério e menopausa",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 41 anos de idade, nuligesta, refere que não menstrua há 8 meses e apresenta ondas de calor eventuais e sudorese noturna duas vezes por mês. Como método contraceptivo utiliza pílula contendo 4mg de drospirenona. Realizou duas coletas sanguíneas com 14 dias de intervalo, respectivamente: 1ª. Coleta FSH= 87 mUI/mL; estradiol= 2 pg/mL e 2ª coleta FSH 61mUI/mL; estradiol 4 pg/mL.\n\nQual é a conduta mais adequada?",
    "options": [
      "(A) Suspender a drospirenona e observar.",
      "(B) Prescrever estradiol e progesterona.",
      "(C) Prescrever isoflavona.",
      "(D) Encaminhar para coleta de óvulos."
    ],
    "correctAnswer": 1,
    "explanation": "Mulher de 41 anos com amenorreia de 8 meses, sintomas vasomotores, FSH muito elevado em duas dosagens com intervalo e estradiol baixo: falência ovariana precoce (menopausa precoce, entre 40 e 45 anos). A drospirenona isolada não explica FSH tão alto.\n\nA terapia hormonal com estrogênio associado a progestagênio (ela tem útero) está indicada pelo menos até a idade média da menopausa natural (cerca de 50 anos). Isso trata os sintomas e previne osteoporose e doença cardiovascular, e o benefício supera os riscos nessa faixa etária.",
    "commentary": "Suspender e observar (A): deixaria a paciente hipoestrogênica, com risco ósseo e cardiovascular.\n\nIsoflavona (C): sem eficácia comprovada e sem proteção óssea ou cardiovascular.\n\nColeta de óvulos (D): com FSH nesses níveis e estradiol mínimo, a reserva é praticamente inexistente; a paciente não manifestou desejo reprodutivo.",
    "reference": "Consenso Brasileiro de Terapêutica Hormonal da Menopausa (SOBRAC, 2018) / ESHRE Guideline on Premature Ovarian Insufficiency (2024)",
    "tags": [
      "ginecologia",
      "menopausa precoce",
      "insuficiência ovariana",
      "terapia hormonal"
    ]
  },
  {
    "id": "unifesp2025-71",
    "topography": "5.2",
    "topic": "Diabetes gestacional",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 32 anos de idade, primigesta, na 12ª semana de gestação, está realizando pré-natal em Unidade Básica de Saúde. Exame físico: PA 120 x 80 mmHg, ausência de edemas. Exame obstétrico: útero aumentado para 12 semanas, batimentos cardíacos fetais = 144 bpm ao sonar. A glicemia de jejum apresenta resultado de 90 mg/dL.\n\nQual é a conduta mais adequada?",
    "options": [
      "(A) Perfil glicêmico, hemoglobina glicada e avaliação da vitalidade fetal.",
      "(B) Repetir a glicemia de jejum com 28 semanas e 34 semanas.",
      "(C) Orientar exercícios físicos e dieta, com glicemia de jejum em 2 semanas.",
      "(D) Realizar curva glicêmica com 75 g de glicose no segundo trimestre."
    ],
    "correctAnswer": 3,
    "explanation": "Pelo protocolo brasileiro (Ministério da Saúde, FEBRASGO, SBD e OPAS), a glicemia de jejum no primeiro trimestre classifica:\n\n• < 92 mg/dL: normal → TOTG 75 g entre 24 e 28 semanas\n• 92–125 mg/dL: diabetes gestacional\n• ≥ 126 mg/dL: diabetes prévio (overt)\n\nCom 90 mg/dL, o resultado é normal e a gestante deve fazer o TOTG com 75 g no segundo trimestre.",
    "commentary": "Perfil glicêmico e vitalidade (A): seria conduta para diabetes já diagnosticado.\n\nRepetir jejum com 28 e 34 semanas (B): não é a estratégia preconizada; o teste do segundo trimestre é o TOTG.\n\nDieta e jejum em 2 semanas (C): não há diagnóstico de DMG que justifique intervenção.",
    "reference": "Rastreamento e diagnóstico de diabetes mellitus gestacional no Brasil — OPAS/MS/FEBRASGO/SBD, 2017",
    "tags": [
      "obstetrícia",
      "pré-natal",
      "diabetes mellitus gestacional",
      "TOTG"
    ]
  },
  {
    "id": "unifesp2025-72",
    "topography": "5.1",
    "topic": "Infertilidade",
    "module": "Ginecologia e Obstetrícia",
    "text": "Um casal formado por um homem de 28 anos de idade e uma mulher nuligesta de 27 anos idade, refere 2 anos de tentativas de gestação. Ele, com histórico de uretrite tratada, exame físico sem alterações e espermograma normal. Ela, saudável, com ciclos menstruais regulares, sem queixas de dismenorreia ou dispareunia e com exame físico sem alterações.\n\nQual é o próximo exame na investigação da infertilidade desse casal?",
    "options": [
      "(A) Avaliação hormonal para ele.",
      "(B) Ressonância magnética de pelve para ela.",
      "(C) Histerossalpingografia para ela.",
      "(D) Cariótipo para ambos."
    ],
    "correctAnswer": 2,
    "explanation": "Casal com 2 anos de infertilidade, espermograma normal e ciclos regulares (ovulação provável). Falta avaliar o fator tubário, sobretudo porque o homem tem antecedente de uretrite (risco de doença inflamatória pélvica e obstrução tubária na parceira, muitas vezes subclínica, como na clamídia).\n\nO exame inicial para permeabilidade tubária é a histerossalpingografia.",
    "commentary": "Avaliação hormonal masculina (A): com espermograma normal, não há indicação.\n\nRM de pelve (B): útil para endometriose profunda ou adenomiose, sem suspeita clínica aqui (sem dismenorreia ou dispareunia).\n\nCariótipo (D): indicado em perdas gestacionais de repetição ou alterações graves do espermograma.",
    "reference": "ASRM — Diagnostic evaluation of the infertile female (2021) / FEBRASGO — Investigação do casal infértil",
    "tags": [
      "ginecologia",
      "infertilidade",
      "fator tubário",
      "histerossalpingografia"
    ]
  },
  {
    "id": "unifesp2025-73",
    "topography": "5.2",
    "topic": "Isoimunização Rh",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante, 25 anos de idade, apresenta tipagem sanguínea B negativo e o esposo O positivo. Na 21ª semana, após realizar exames laboratoriais de rotina, apresentou pela primeira vez o coombs indireto positivo e com titulação inicial de 1:32, que passou para 1:128 após 3 semanas.\n\nQual é a conduta mais adequada?",
    "options": [
      "(A) Avaliação do pico sistólico da artéria cerebral média.",
      "(B) Repetição da pesquisa de anticorpos irregulares em 1 semana.",
      "(C) Cordocentese e dosagem de hemoglobina.",
      "(D) Cordocentese e transfusão intrauterina."
    ],
    "correctAnswer": 0,
    "explanation": "Gestante Rh negativo aloimunizada, com Coombs indireto em ascensão (1:32 → 1:128), acima do título crítico (≥ 1:16).\n\nCom título crítico, o seguimento da anemia fetal é não invasivo, pela dopplervelocimetria da artéria cerebral média: pico de velocidade sistólica acima de 1,5 MoM indica anemia moderada a grave e, aí sim, cordocentese com possível transfusão intrauterina.",
    "commentary": "Repetir anticorpos em 1 semana (B): acima do título crítico, o controle sorológico isolado não basta; é preciso avaliar o feto.\n\nCordocentese e hemoglobina (C): procedimento invasivo indicado só se o Doppler sugerir anemia.\n\nCordocentese e transfusão (D): sem evidência de anemia fetal, não há indicação de transfusão.",
    "reference": "Manual de Gestação de Alto Risco — Ministério da Saúde, 2022 / FEBRASGO — Aloimunização Rh",
    "tags": [
      "obstetrícia",
      "aloimunização Rh",
      "doppler da artéria cerebral média",
      "anemia fetal"
    ]
  },
  {
    "id": "unifesp2025-74",
    "topography": "5.2",
    "topic": "Abortamento",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante, 32 anos de idade, III G, IP, idade gestacional de 10 semanas pela DUM, apresentou sangramento vaginal, submetendo-se à curetagem uterina com diagnóstico de abortamento incompleto. O aspecto macroscópico e o resultado do exame histopatológico do material da cavidade uterina é de mola hidatiforme completa. Exames laboratoriais: hCG: 250.000 UI/L antes da curetagem, 50.000 UI/L após 7 dias, 70.000 UI/L após 14 dias e 85.000UI/L após 21 dias do procedimento. Nessa última avaliação, observou-se o aparecimento de lesão arroxeada na parede vaginal posterior, com 2 cm de diâmetro.\n\nQual é a conduta mais adequada?",
    "options": [
      "(A) Biópsia excisional da lesão vaginal e exame anátomo patológico.",
      "(B) Nova curetagem uterina e biópsia da lesão vaginal.",
      "(C) Repetição da dosagem sérica do hCG em 7 dias.",
      "(D) Estadiamento juntamente com quimioterapia."
    ],
    "correctAnswer": 3,
    "explanation": "Após esvaziamento de mola completa, o hCG subiu em três dosagens semanais consecutivas (50.000 → 70.000 → 85.000): critério de neoplasia trofoblástica gestacional pela FIGO (elevação > 10% em 3 valores ao longo de 2 semanas). A lesão arroxeada na vagina é metástase.\n\nA conduta é estadiar (FIGO e escore prognóstico da OMS: radiografia ou TC de tórax e imagem abdominal e cerebral conforme o caso) e iniciar quimioterapia. O diagnóstico é clínico e laboratorial, sem necessidade de histologia.",
    "commentary": "Biópsia da lesão vaginal (A): metástases de NTG são muito vascularizadas e podem sangrar de forma volumosa; não devem ser biopsiadas.\n\nNova curetagem e biópsia (B): a curetagem não trata a NTG, aumenta o risco de perfuração, e a biópsia também é contraindicada.\n\nRepetir hCG em 7 dias (C): o critério diagnóstico já foi preenchido; esperar atrasa o tratamento.",
    "reference": "FIGO Cancer Report 2021 — Gestational trophoblastic disease / Centro de Doenças Trofoblásticas — FEBRASGO",
    "tags": [
      "obstetrícia",
      "doença trofoblástica gestacional",
      "mola hidatiforme",
      "neoplasia trofoblástica"
    ]
  },
  {
    "id": "unifesp2025-75",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Secundigesta, 39 anos de idade, 26 semanas, diabética gestacional controlada com dieta, vem à consulta de pré-natal. Hemoglobina de 10,9 g/dL, hematócrito 32%, VCM 78 fL, HCM 25 pg, ferritina 10 ng/mL, eletroforese de hemoglobina normal.\n\nQual é a conduta mais adequada?",
    "options": [
      "(A) Ferro oral na dose de 30 mg/dia e reavaliação em 8 semanas.",
      "(B) Ferro oral na dose de 160 a 200 mg/dia e reavaliação em 4 semanas.",
      "(C) Sacarato de hidróxido de ferro parenteral e reavaliação em 1 semana.",
      "(D) Aumentar ingestão de ferro na dieta e reavaliação em 8 semanas."
    ],
    "correctAnswer": 1,
    "explanation": "Anemia ferropriva na gestação: Hb 10,9 g/dL (abaixo de 11 g/dL), microcitose e hipocromia, ferritina de 10 ng/mL e eletroforese normal (afasta talassemia).\n\nO tratamento é ferro elementar oral em dose terapêutica, que no protocolo do Ministério da Saúde para anemia leve a moderada é de cerca de 120 a 240 mg/dia (ex.: 5 drágeas de 40 mg de sulfato ferroso). Reavalia-se em 4 semanas, esperando elevação da Hb (cerca de 1 g/dL) e reticulocitose.",
    "commentary": "30 mg/dia (A): é a dose profilática, insuficiente para tratar anemia já instalada.\n\nFerro parenteral (C): reservado para intolerância ou falha do ferro oral, anemia grave ou necessidade de reposição rápida no fim da gestação.\n\nSó dieta (D): não corrige anemia ferropriva com estoques depletados.",
    "reference": "Manual de Gestação de Alto Risco — Ministério da Saúde, 2022 / Cadernos de Atenção Básica nº 32 — Pré-natal de baixo risco",
    "tags": [
      "obstetrícia",
      "anemia ferropriva",
      "pré-natal",
      "sulfato ferroso"
    ]
  },
  {
    "id": "unifesp2025-76",
    "topography": "5.2",
    "topic": "Diabetes gestacional",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante 38 anos, primigesta, com 36 semanas de gestação, com diagnóstico de diabetes mellitus gestacional estabelecido com 13 semanas tendo sido iniciada Insulinização com 25 semanas e desde então vem mantendo cerca de 80 a 85% dos valores do controle glicosimétrico dentro do normal. Exame físico: IMC = 32 Kg/m², altura uterina= 35 cm. Ultrassom: peso estimado = 2890 gramas e o maior bolsão de líquido amniótico: 5 cm.\n\nQual é a conduta mais adequada em relação à resolução da gravidez?",
    "options": [
      "(A) Cesárea eletiva entre 38 0/7 e 38 6/7 semanas.",
      "(B) Indução do parto entre 39 0/7 e 39 6/7 semanas.",
      "(C) Indução do parto entre 37 6/7 e 38 6/7 semanas.",
      "(D) Cesárea eletiva entre 37 0/7 e 38 0/7 semanas."
    ],
    "correctAnswer": 1,
    "explanation": "Diabetes gestacional em uso de insulina, com bom controle (mais de 70–80% das glicemias na meta), feto sem macrossomia (peso estimado de 2.890 g com 36 semanas) e líquido amniótico normal.\n\nNo DMG bem controlado com medicação e sem complicações, recomenda-se programar a resolução entre 39 0/7 e 39 6/7 semanas. A via é obstétrica, com indução do parto, já que o diabetes por si não indica cesárea.",
    "commentary": "Cesárea eletiva com 38 semanas (A): não há indicação de cesárea, e a antecipação para 38 semanas fica para mau controle glicêmico.\n\nIndução entre 37 6/7 e 38 6/7 (C): antecipação reservada a controle inadequado ou complicações.\n\nCesárea entre 37 e 38 semanas (D): sem indicação obstétrica e com prematuridade tardia evitável.",
    "reference": "ACOG Committee Opinion 831 — Medically indicated late-preterm and early-term deliveries / FEBRASGO — Diabetes gestacional",
    "tags": [
      "obstetrícia",
      "diabetes mellitus gestacional",
      "momento do parto",
      "indução do parto"
    ]
  },
  {
    "id": "unifesp2025-77",
    "topography": "5.2",
    "topic": "Abortamento",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher 40 anos de idade, IIIG, IP, IIA com o mesmo parceiro. Os abortamentos ocorreram entre 7 e 8 semanas de gestação. Os cariótipos do casal são normais. Exames laboratoriais: anticorpo anticardiolipina IgA = 22 mg/dL que se manteve positivo após 12 semanas de intervalo, mutação em heterozigose G20210 A da protrombina, reação para Citomegalovírus com IgG positivo e IgM negativo. Chega ao pré-natal com 6 semanas de atraso menstrual.\n\nQual é a conduta mais adequada?",
    "options": [
      "(A) Medicar com aspirina e enoxaparina.",
      "(B) Orientar seguimento pré-natal rotineiro.",
      "(C) Medicar com heparina até 42 dias após resolução da gestação.",
      "(D) Orientar pesquisa de aneuploidia durante a gravidez."
    ],
    "correctAnswer": 3,
    "explanation": "A paciente tem duas perdas embrionárias precoces, e nenhum dos achados fecha um diagnóstico que mude a conduta:\n\n• Anticardiolipina IgA: não faz parte dos critérios laboratoriais da síndrome antifosfolípide (só IgG e IgM em títulos médios ou altos)\n• Mutação G20210A da protrombina em heterozigose: trombofilia hereditária de baixo risco, sem evidência de que a anticoagulação melhore desfechos gestacionais\n• CMV IgG positivo e IgM negativo: infecção prévia\n\nO fator mais relevante é a idade materna de 40 anos, que eleva muito a frequência de aneuploidias, principal causa de aborto precoce. A conduta é oferecer rastreio de aneuploidias nesta gestação.",
    "commentary": "AAS e enoxaparina (A): tratamento da SAF obstétrica, cujos critérios não estão preenchidos.\n\nPré-natal rotineiro (B): a idade e as perdas justificam oferecer rastreio de aneuploidia.\n\nHeparina até 42 dias pós-parto (C): profilaxia para trombofilia de alto risco ou trombose prévia, ausentes.",
    "reference": "Critérios ACR/EULAR 2023 para SAF / ASRM — Evaluation and treatment of recurrent pregnancy loss / FEBRASGO",
    "tags": [
      "obstetrícia",
      "abortamento de repetição",
      "síndrome antifosfolípide",
      "trombofilias",
      "aneuploidia"
    ]
  },
  {
    "id": "unifesp2025-78",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante, 36 anos de idade, IG 38 semanas e 3 dias, com gestação gemelar dicoriônica, apresenta diabetes mellitus gestacional. Possui bom controle glicêmico, alcançado com orientação dietética. Exames: taxas de hemoglobina glicada que variaram entre 4,9 e 5,4% e ultrassonografia recente mostrando o feto I em apresentação cefálica e peso estimado no percentil 35, e o feto II em apresentação pélvica e peso estimado no percentil 38 da curva própria para gestação gemelar.\n\nQual é a conduta mais adequada?",
    "options": [
      "(A) Indução do trabalho de parto.",
      "(B) Retorno para controle em 7 dias.",
      "(C) Parto cesáreo.",
      "(D) Perfil biofísico em dias alternados até 40 semanas."
    ],
    "correctAnswer": 0,
    "explanation": "Gestação gemelar dicoriônica e diamniótica sem complicações (DMG controlado com dieta e fetos com crescimento adequado), já com 38 semanas e 3 dias.\n\nNa gemelar dicoriônica não complicada, a resolução é recomendada com 37–38 semanas, pelo aumento do risco de óbito fetal depois disso. Com o primeiro gemelar cefálico, o parto vaginal é possível mesmo com o segundo pélvico, e a conduta é induzir o trabalho de parto.",
    "commentary": "Retorno em 7 dias (B): prolongar além de 38 semanas aumenta o risco de natimortalidade nos gemelares.\n\nCesárea (C): com o primeiro gemelar cefálico, a cesárea não é obrigatória (estudo Twin Birth Study).\n\nPerfil biofísico até 40 semanas (D): não se recomenda manter a gemelar dicoriônica até 40 semanas.",
    "reference": "ACOG Practice Bulletin 231 — Multifetal Gestations / NICE NG137 (Twin and triplet pregnancy)",
    "tags": [
      "obstetrícia",
      "gestação gemelar",
      "momento do parto"
    ]
  },
  {
    "id": "unifesp2025-79",
    "topography": "5.2",
    "topic": "Assistência ao parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Parturiente de risco habitual, 26 anos de idade, 38 semanas de gestação, primigesta, encontra-se em trabalho de parto espontâneo, sem bloqueio neuraxial. Exame obstétrico: frequência cardíaca fetal basal de 136 batimentos por minuto e com desacelerações precoces repetitivas à cardiotocografia, apresentação cefálica em OP e plano +3 de DeLee. Após 4 horas na fase ativa do período expulsivo, refere estar exausta e não consegue mais realizar puxos.\n\nQual é a conduta mais adequada?",
    "options": [
      "(A) Hiperoxigenação materna e continuação do período expulsivo.",
      "(B) Realizar operação cesariana.",
      "(C) Aplicação de vácuo-extrator ou fórcipe."
    ],
    "correctAnswer": 2,
    "explanation": "Período expulsivo prolongado (4 horas em primigesta sem analgesia, além do limite de 3 horas), exaustão materna e cabeça fetal profundamente insinuada (plano +3 de DeLee) em occipito-posterior, com cardiotocografia tranquilizadora (desacelerações precoces por compressão cefálica).\n\nCom as condições de aplicabilidade presentes (dilatação total, apresentação insinuada e baixa, membranas rotas), está indicado o parto vaginal operatório com vácuo-extrator ou fórcipe, que é mais rápido e tem menor morbidade que a cesárea com a cabeça tão baixa.",
    "commentary": "Oxigênio e continuar o expulsivo (A): a paciente está exausta e já ultrapassou o tempo; além disso, a hiperoxigenação materna não tem benefício.\n\nCesárea (B): com a cabeça em +3, a extração abdominal é mais difícil e mórbida (risco de extensão de histerotomia); o parto instrumental é preferível.",
    "reference": "Diretrizes Nacionais de Assistência ao Parto Normal — Ministério da Saúde, 2017 / ACOG Practice Bulletin 219 — Operative Vaginal Birth",
    "tags": [
      "obstetrícia",
      "período expulsivo",
      "parto vaginal operatório",
      "fórcipe",
      "vácuo-extrator"
    ]
  },
  {
    "id": "unifesp2025-80",
    "topography": "5.1",
    "topic": "Câncer de colo uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher, 33 anos de idade, nulípara, deseja engravidar. Realizou cirurgia de alta frequência no colo do útero. Anatomia patológica: neoplasia intraepitelial escamosa de alto grau extensa, com foco de invasão de 4mm, presença de êmbolos carcinomatosos em vasos linfáticos, margens livres para componente invasor e intraepitelial.\n\nQual é a conduta mais adequada?",
    "options": [
      "(A) Nova cirurgia de alta frequência e reavaliação em 3 meses.",
      "(B) Liberar para gestação com cerclagem após 6 meses.",
      "(C) Traquelectomia radical e linfadenectomia pélvica bilateral.",
      "(D) Realizar cerclagem e liberar para gestação imediatamente."
    ],
    "correctAnswer": 2,
    "explanation": "Carcinoma escamoso do colo com invasão de 4 mm (estádio IA2 da FIGO: 3–5 mm) e invasão linfovascular, em nulípara que deseja engravidar.\n\nNo IA2, o risco de metástase linfonodal justifica avaliação linfonodal. A opção que preserva a fertilidade é a traquelectomia radical com linfadenectomia pélvica bilateral (ou linfonodo sentinela). A conização isolada só é suficiente no IA1 sem invasão linfovascular.",
    "commentary": "Nova CAF (A): não trata o paramétrio nem os linfonodos em tumor IA2 com invasão linfovascular.\n\nGestação após 6 meses com cerclagem (B): deixa sem tratamento adequado uma doença com risco linfonodal.\n\nCerclagem e gestação imediata (D): mesmo erro, sem estadiamento linfonodal.",
    "reference": "FIGO 2018 — Estadiamento do câncer do colo do útero / NCCN Cervical Cancer / INCA",
    "tags": [
      "ginecologia",
      "câncer do colo do útero",
      "preservação da fertilidade",
      "traquelectomia"
    ]
  },
  {
    "id": "unifesp2025-81",
    "topography": "10",
    "topic": "Tuberculose",
    "module": "Pediatria",
    "text": "Menina, 4 anos de idade, é contato domiciliar da mãe recentemente diagnosticada com tuberculose pulmonar. A criança está assintomática e apresentou teste tuberculínico de 6 mm. O exame de RX de tórax da criança não apresentou anormalidades.\n\nQual é a conduta mais adequada para essa criança?",
    "options": [
      "(A) Realizar um novo teste tuberculínico em 3 meses e reavaliar a necessidade de tratamento profilático.",
      "(B) Não iniciar esquema terapêutico no momento e apenas monitorar a criança, já que está assintomática e com RX normal.",
      "(C) Iniciar esquema terapêutico completo para tuberculose ativa devido ao contato próximo e alto risco de doença instalada.",
      "(D) Iniciar isoniazida por 6 meses ou rifampicina por 4 meses e realizar acompanhamento clínico regular."
    ],
    "correctAnswer": 3,
    "explanation": "Criança contato domiciliar de tuberculose pulmonar, assintomática, com radiografia normal (afasta doença ativa) e prova tuberculínica de 6 mm.\n\nPelo Manual de Recomendações do Ministério da Saúde (2019), em contatos a PT ≥ 5 mm indica infecção latente (ILTB), independentemente da vacinação BCG. O tratamento é isoniazida por 6 meses (ou 9 meses) ou rifampicina por 4 meses, que é preferida em menores de 10 anos. Mantém-se o acompanhamento clínico regular.",
    "commentary": "Repetir PT em 3 meses (A): conduta para contato com PT < 5 mm (busca de viragem); aqui já há ILTB.\n\nApenas monitorar (B): a criança tem ILTB e alto risco de adoecer; o tratamento preventivo está indicado.\n\nEsquema para tuberculose ativa (C): não há doença ativa (assintomática e com radiografia normal).",
    "reference": "Manual de Recomendações para o Controle da Tuberculose no Brasil — Ministério da Saúde, 2ª ed., 2019",
    "tags": [
      "pediatria",
      "tuberculose",
      "infecção latente",
      "contatos"
    ]
  },
  {
    "id": "unifesp2025-82",
    "topography": "11",
    "topic": "Calendário vacinal",
    "module": "Pediatria",
    "text": "Menino, 7 meses de idade, hígido, foi levado à Unidade Básica de Saúde para atualização vacinal. Ele tinha recebido apenas a vacina para hepatite B ao nascimento.\n\nEm relação às vacinas que devem ser administradas, assinale a alternativa correta.",
    "options": [
      "(A) BCG, pentavalente, pneumocócica 10V, meningocócica C, COVID-19 e influenza, na sazonalidade.",
      "(B) Pentavalente, pneumocócica 10V, COVID-19, tríplice viral e febre amarela.",
      "(C) BCG, rotavírus, pentavalente, pneumocócica 10V, meningocócica C, COVID-19, tríplice viral.",
      "(D) BCG, rotavírus, pentavalente, pneumocócica 10V, meningocócica C, COVID-19, influenza."
    ],
    "correctAnswer": 0,
    "explanation": "Lactente de 7 meses que só recebeu hepatite B ao nascer:\n\n• BCG: pode ser feita até 4 anos, 11 meses e 29 dias\n• Pentavalente, pneumocócica 10V e meningocócica C: iniciar os esquemas em atraso\n• Influenza (a partir de 6 meses, na sazonalidade) e COVID-19 (a partir de 6 meses, no calendário infantil)\n\nNão entram o rotavírus (a 1ª dose só pode ser dada até 3 meses e 15 dias), a tríplice viral (aos 12 meses) e a febre amarela (aos 9 meses).",
    "commentary": "Inclui tríplice viral e febre amarela e omite a BCG (B): ambas ainda não estão na idade, e a BCG é devida.\n\nInclui rotavírus e tríplice viral (C): o rotavírus passou do prazo e a tríplice viral é só aos 12 meses.\n\nInclui rotavírus (D): a idade máxima para a 1ª dose (3 meses e 15 dias) já passou.",
    "reference": "Calendário Nacional de Vacinação da Criança — PNI/Ministério da Saúde, 2024",
    "tags": [
      "pediatria",
      "imunização",
      "calendário vacinal",
      "atraso vacinal"
    ]
  },
  {
    "id": "unifesp2025-83",
    "topography": "11",
    "topic": "Aleitamento materno",
    "module": "Pediatria",
    "text": "Menino, 45 dias de vida, há 15 dias apresenta eliminação de fezes com raios de sangue em todas as evacuações. Evacua de 6 a 8 vezes ao dia desde o nascimento e não houve mudança na frequência ou consistência das fezes. Recebe fórmula láctea de partida desde a segunda semana de vida. Não apresenta outros sintomas e não tem alterações ao exame físico.\n\nConsiderando o diagnóstico mais provável, qual é o mecanismo fisiopatológico envolvido?",
    "options": [
      "(A) Reação mediada por IgE",
      "(B) Reação não mediada por IgE",
      "(C) Deficiência de lactase",
      "(D) Reação mista"
    ],
    "correctAnswer": 1,
    "explanation": "Lactente de 45 dias em bom estado, em uso de fórmula de leite de vaca, com sangue vivo nas fezes, sem outros sintomas e com exame normal: proctocolite alérgica induzida por proteína alimentar.\n\nÉ uma forma de alergia à proteína do leite de vaca não mediada por IgE (mediada por células). O diagnóstico é clínico, com melhora após exclusão (fórmula extensamente hidrolisada) e teste de provocação posterior.",
    "commentary": "Mediada por IgE (A): manifestações imediatas (urticária, angioedema, vômitos, anafilaxia) minutos após a ingestão.\n\nDeficiência de lactase (C): causa diarreia osmótica, distensão e assaduras, não sangue nas fezes; a hipolactasia primária é rara nessa idade.\n\nReação mista (D): exemplos são a esofagite eosinofílica e a dermatite atópica, não a proctocolite.",
    "reference": "Consenso Brasileiro sobre Alergia Alimentar (ASBAI/SBP, 2018)",
    "tags": [
      "pediatria",
      "alergia à proteína do leite de vaca",
      "proctocolite alérgica",
      "gastroenterologia pediátrica"
    ]
  },
  {
    "id": "unifesp2025-84",
    "topography": "3.1",
    "topic": "DRGE",
    "module": "Pediatria",
    "text": "Menino, 7 anos de idade, apresenta queixa de refluxo, queimação retroesternal e dor epigástrica há 1 ano, que não melhoram com uso de inibidor da bomba de prótons. Tem antecedente de alergia à proteína do leite de vaca quando era lactente.\n\nConsiderando o diagnóstico mais provável, qual é o exame recomendado para a confirmação diagnóstica?",
    "options": [
      "(A) Cintilografia gastroesofágica com pesquisa de aspiração pulmonar.",
      "(B) Dosagem de IgE (RAST) para leite de vaca",
      "(C) Manometria esofágica.",
      "(D) Endoscopia digestiva alta com biópsias seriadas."
    ],
    "correctAnswer": 3,
    "explanation": "Criança com sintomas de refluxo (pirose, epigastralgia) refratários ao IBP e antecedente de alergia à proteína do leite de vaca (atopia): a principal hipótese é esofagite eosinofílica.\n\nO diagnóstico exige endoscopia digestiva alta com biópsias de vários níveis do esôfago (proximal, médio e distal), demonstrando 15 ou mais eosinófilos por campo de grande aumento.",
    "commentary": "Cintilografia (A): avalia esvaziamento gástrico e aspiração, não diagnostica esofagite eosinofílica.\n\nIgE específica para leite (B): a esofagite eosinofílica é predominantemente não mediada por IgE; o RAST não confirma o diagnóstico.\n\nManometria (C): avalia distúrbios motores (acalasia); não é exame diagnóstico aqui.",
    "reference": "Consenso Brasileiro sobre Alergia Alimentar (ASBAI/SBP, 2018) / Diretrizes internacionais de esofagite eosinofílica (AGREE, 2018)",
    "tags": [
      "pediatria",
      "esofagite eosinofílica",
      "gastroenterologia pediátrica",
      "endoscopia"
    ]
  },
  {
    "id": "unifesp2025-85",
    "topography": "11",
    "topic": "Desidratação",
    "module": "Pediatria",
    "text": "Menino, 1 ano e 8 meses de idade, comparece à UBS com história de diarreia por 3 dias com eliminação de vermes nas fezes há 4 dias. Há 1 dia parou de evacuar, apresenta vômitos, dor abdominal; não está aceitando a alimentação e a mãe notou que a criança está com o abdômen inchado e urinando pouco.\n\nQual é a conduta recomendada?",
    "options": [
      "(A) Encaminhar para serviço de urgência, pois a criança apresenta quadro provável de desidratação e de suboclusão por Ascaris lumbricoides.",
      "(B) Encaminhar para serviço de urgência, pois a criança apresenta quadro provável de desidratação e gastroenterocolite aguda, presumivelmente infecciosa.",
      "(C) Iniciar tratamento com mebendazol e soro oral, realizar acompanhamento na UBS e solicitar exame parasitológico de fezes após tratamento.",
      "(D) Iniciar tratamento com nitazoxanida via oral, acompanhar na UBS e instituir tratamento para todos os familiares."
    ],
    "correctAnswer": 0,
    "explanation": "Criança pequena com eliminação de vermes, seguida de parada de evacuação, vômitos, dor e distensão abdominal, recusa alimentar e oligúria: suboclusão intestinal por bolo de Ascaris lumbricoides, com desidratação.\n\nÉ uma complicação que exige atendimento de urgência para hidratação venosa, descompressão gástrica, óleo mineral e, se houver falha ou sinais de complicação, cirurgia. Não deve ser manejada na UBS.",
    "commentary": "Gastroenterocolite infecciosa (B): não explica a parada de evacuação nem a eliminação de vermes com quadro obstrutivo.\n\nMebendazol e soro oral na UBS (C): o anti-helmíntico na fase obstrutiva pode agravar a suboclusão (agitação dos vermes), e a desidratação exige hidratação venosa.\n\nNitazoxanida na UBS (D): mesmo problema — ignora o quadro obstrutivo, que é a emergência.",
    "reference": "Tratado de Pediatria SBP — Parasitoses intestinais / AIDPI — Ministério da Saúde",
    "tags": [
      "pediatria",
      "ascaridíase",
      "suboclusão intestinal",
      "desidratação"
    ]
  },
  {
    "id": "unifesp2025-86",
    "topography": "11",
    "topic": "Asma infantil",
    "module": "Pediatria",
    "text": "Menino, 10 anos de idade, joga futebol desde pequeno; queixa-se de que há 5 meses vem apresentando dificuldade para correr, há um mês não consegue terminar a partida devido a crises de tosse seca e falta de ar. Há 2 semanas, com resfriado, piorou da tosse, principalmente na madrugada e pela manhã. Tem diagnóstico de rinite alérgica.\n\nQual dos exames abaixo confirma a principal hipótese diagnóstica para sua queixa?",
    "options": [
      "(A) PHmetria",
      "(B) Rx de tórax",
      "(C) Prova de função pulmonar",
      "(D) IgE específicos para aeroalérgenos"
    ],
    "correctAnswer": 2,
    "explanation": "Escolar com rinite alérgica, tosse seca e dispneia desencadeadas por exercício e infecção viral, com piora noturna e matinal: asma (com broncoespasmo induzido por exercício).\n\nA confirmação é funcional: espirometria (prova de função pulmonar) com obstrução reversível ao broncodilatador. Se a espirometria for normal, faz-se broncoprovocação (por exemplo, por exercício).",
    "commentary": "pHmetria (A): investiga doença do refluxo, que não é a hipótese principal.\n\nRadiografia de tórax (B): geralmente normal na asma; não confirma o diagnóstico.\n\nIgE para aeroalérgenos (D): documenta sensibilização (atopia), não a doença das vias aéreas.",
    "reference": "GINA 2024 / Diretrizes da SBPT para o manejo da asma (2020)",
    "tags": [
      "pediatria",
      "asma",
      "espirometria",
      "broncoespasmo induzido por exercício"
    ]
  },
  {
    "id": "unifesp2025-87",
    "topography": "3.1",
    "topic": "Constipação intestinal",
    "module": "Pediatria",
    "text": "Lactente de 8 meses, bem nutrido, há 2 meses, desde o início da alimentação complementar, evacua fezes endurecidas e muito calibrosas, a cada 4 a 5 dias, com muito esforço e dor (choro). Mãe aumentou fibra na dieta, sem melhora. Nega atraso de eliminação de mecônio e apresenta exame físico sem alterações.\n\nConsiderando o diagnóstico mais provável, qual é o tratamento recomendado?",
    "options": [
      "(A) Óleo mineral.",
      "(B) Probiótico.",
      "(C) Exclusão da proteína do leite de vaca.",
      "(D) Lactulose."
    ],
    "correctAnswer": 3,
    "explanation": "Constipação funcional do lactente (fezes endurecidas e calibrosas a cada 4–5 dias, com dor e esforço, iniciada com a alimentação complementar), sem sinais de alarme: mecônio sem atraso, bom crescimento e exame normal.\n\nCom a falha das medidas dietéticas, o tratamento é o laxativo osmótico. Em lactentes, a lactulose é segura; o polietilenoglicol também pode ser usado conforme o protocolo local.",
    "commentary": "Óleo mineral (A): contraindicado em lactentes pelo risco de aspiração e pneumonia lipoídica.\n\nProbiótico (B): sem evidência suficiente para recomendação no tratamento da constipação.\n\nExclusão da proteína do leite (C): cogitada só em constipação refratária ao tratamento habitual, não como primeira linha.",
    "reference": "ESPGHAN/NASPGHAN — Constipação funcional na infância (2014) / SBP — Constipação intestinal",
    "tags": [
      "pediatria",
      "constipação funcional",
      "gastroenterologia pediátrica",
      "lactulose"
    ]
  },
  {
    "id": "unifesp2025-88",
    "topography": "14",
    "topic": "Emergências pediátricas",
    "module": "Pediatria",
    "text": "Ao nascimento, um recém-nascido a termo, filho de mãe multipara com período expulsivo prolongado, estava hipotônico e em apneia. O recém-nascido foi levado à mesa de reanimação sob fonte de calor radiante e foi iniciada a ventilação com balão e máscara e ar ambiente, mas o paciente mantinha-se em apneia e bradicárdico. Após ajuste da técnica da ventilação e aumento da concentração de oxigênio, o recém-nascido não melhorou.\n\nQual é o próximo passo indicado na reanimação?",
    "options": [
      "(A) Proceder à intubação e iniciar a ventilação com cânula traqueal.",
      "(B) Prosseguir com a ventilação com máscara facial e iniciar a massagem cardíaca.",
      "(C) Prosseguir com a ventilação com máscara facial e administrar adrenalina por via intraóssea.",
      "(D) Proceder à intubação, iniciar a ventilação com cânula traqueal e a massagem cardíaca."
    ],
    "correctAnswer": 0,
    "explanation": "RN a termo em apneia e bradicardia que não responde à VPP com máscara, mesmo após correção da técnica e aumento do oxigênio.\n\nPelo programa de reanimação neonatal da SBP, quando a VPP com máscara não é efetiva, indica-se a intubação traqueal (ou máscara laríngea). Isso garante ventilação adequada antes de iniciar a massagem cardíaca, que só começa se a FC permanecer < 60 bpm após 30 segundos de VPP efetiva por cânula.",
    "commentary": "Máscara e massagem (B): a massagem só se inicia após ventilação efetiva, de preferência por via aérea avançada.\n\nMáscara e adrenalina intraóssea (C): a adrenalina vem depois de ventilação efetiva e massagem sem resposta; a via preferencial é a veia umbilical.\n\nIntubar e já massagear (D): antes de massagear é preciso confirmar FC < 60 bpm após VPP efetiva pela cânula.",
    "reference": "Reanimação do recém-nascido ≥ 34 semanas em sala de parto — Diretrizes da SBP, 2022",
    "tags": [
      "neonatologia",
      "reanimação neonatal",
      "ventilação com pressão positiva",
      "intubação"
    ]
  },
  {
    "id": "unifesp2025-89",
    "topography": "9",
    "topic": "Anemia hemolítica",
    "module": "Pediatria",
    "text": "Menino, 15 dias de vida, apresentou triagem neonatal positiva para deficiência de G6PD e foi convocado para repetição do exame. Na avaliação pediátrica, a mãe não tem queixas e o exame físico é normal.\n\nQual é a conduta mais adequada neste momento?",
    "options": [
      "(A) Realizar a nova coleta e orientar o afastamento de desencadeantes de hemólise.",
      "(B) Solicitar análise molecular do gene G6PD e hemograma para fazer o aconselhamento genético.",
      "(C) Considerar resultado da primeira coleta como diagnóstico definitivo e afastar desencadeantes de crise.",
      "(D) Considerar resultado falso positivo e suspender a nova coleta."
    ],
    "correctAnswer": 0,
    "explanation": "Triagem neonatal com deficiência de G6PD alterada deve ser confirmada em nova coleta (dosagem quantitativa da enzima), porque há falso-positivos por coleta e armazenamento inadequados.\n\nAté a confirmação, a família é orientada a evitar desencadeantes de hemólise (medicamentos oxidantes como sulfas, primaquina e nitrofurantoína, naftalina, fava e infecções), já que o RN pode ser de fato deficiente.",
    "commentary": "Molecular e hemograma para aconselhamento (B): antes é preciso confirmar o resultado; o diagnóstico é feito por dosagem enzimática, não molecular.\n\nPrimeira coleta como definitiva (C): resultados de triagem precisam de confirmação.\n\nFalso-positivo e suspender (D): não se descarta sem nova dosagem.",
    "reference": "Manual Técnico de Triagem Neonatal Biológica — Ministério da Saúde, 2016 / SBTEIM",
    "tags": [
      "neonatologia",
      "triagem neonatal",
      "deficiência de G6PD"
    ]
  },
  {
    "id": "unifesp2025-90",
    "topography": "1.5",
    "topic": "Hipotireoidismo",
    "module": "Pediatria",
    "text": "Menino, 1 ano de idade, iniciou tratamento para hipotireoidismo congênito com 15 dias de vida, sem elucidação etiológica. Apresenta bom crescimento e ganho de peso, além de desenvolvimento neuropsicomotor normal, com dosagens de TSH e hormônios tireoidianos normais e boa aderência ao tratamento. Ultrassonografia de tireoide: glândula tópica de dimensões normais.\n\nSegundo o Manual Técnico da Triagem Neonatal Biológica do Ministério da Saúde (2016), qual é a conduta recomendada?",
    "options": [
      "(A) Realizar cintilografia de tireoide para complementar a investigação etiológica",
      "(B) Suspender a reposição hormonal e monitorar crescimento e desenvolvimento.",
      "(C) Reduzir a dose da reposição hormonal em 50% e repetir USG de tireoide em 30 dias.",
      "(D) Manter reposição hormonal até dois anos de idade."
    ],
    "correctAnswer": 3,
    "explanation": "Hipotireoidismo congênito com glândula tópica e de tamanho normal, sem etiologia definida: pode ser disormonogênese (permanente) ou transitório.\n\nComo o SNC depende criticamente do hormônio tireoidiano nos primeiros anos, a reposição deve ser mantida sem interrupção durante esse período. A reavaliação diagnóstica (suspensão por cerca de 30 dias com nova dosagem e, se preciso, cintilografia) é feita a partir dos 2 a 3 anos. O gabarito adotou manter a reposição até os 2 anos.",
    "commentary": "Cintilografia agora (A): exige TSH elevado, ou seja, suspender a levotiroxina, o que é inaceitável aos 12 meses.\n\nSuspender (B): arriscaria hipotireoidismo na fase crítica do neurodesenvolvimento.\n\nReduzir 50% e repetir USG (C): sem respaldo; a ultrassonografia não muda em 30 dias e a redução expõe a criança a hipotireoidismo.",
    "reference": "Manual Técnico de Triagem Neonatal Biológica — Ministério da Saúde, 2016 / Consenso da SBEM/SBTEIM para hipotireoidismo congênito",
    "tags": [
      "pediatria",
      "hipotireoidismo congênito",
      "triagem neonatal",
      "endocrinologia pediátrica"
    ]
  },
  {
    "id": "unifesp2025-91",
    "topography": "2.2",
    "topic": "Febre reumática",
    "module": "Pediatria",
    "text": "Menina, 7 anos de idade, apresentou artrite em joelho direito há 20 dias com duração de 3 dias, em tornozelo esquerdo há 15 dias com duração de 4 dias e em cotovelo esquerdo há 10 dias com duração de 3 dias. Exame físico: sem sinais de artrite ou outras alterações significativas. A ausculta torácica é normal.\n\nQual é a necessidade de solicitar um ecocardiograma neste caso?",
    "options": [
      "(A) Para afastar endocardite bacteriana.",
      "(B) Para afastar aneurisma de coronária.",
      "(C) Para afastar hipertensão pulmonar.",
      "(D) Para afastar cardite subclínica."
    ],
    "correctAnswer": 3,
    "explanation": "Escolar com poliartrite migratória de grandes articulações, com episódios de poucos dias cada: quadro sugestivo de febre reumática (artrite é critério maior de Jones).\n\nA cardite é a manifestação mais importante, por ser a única que deixa sequelas. Muitas vezes é subclínica (sem sopro audível) e só detectada pela ecocardiografia com Doppler, que pelos critérios de Jones revisados (2015) pode confirmar a cardite e definir a duração da profilaxia secundária.",
    "commentary": "Endocardite bacteriana (A): não há febre persistente, sopro, fenômenos embólicos ou fator de risco.\n\nAneurisma de coronária (B): complicação da doença de Kawasaki, que tem febre prolongada, conjuntivite e alterações de mucosas e extremidades.\n\nHipertensão pulmonar (C): sem relação com o quadro clínico.",
    "reference": "Critérios de Jones revisados (AHA, 2015) / Diretrizes Brasileiras para o Diagnóstico, Tratamento e Prevenção da Febre Reumática (SBC/SBP/SBR)",
    "tags": [
      "pediatria",
      "febre reumática",
      "cardite",
      "ecocardiograma"
    ]
  },
  {
    "id": "unifesp2025-92",
    "topography": "11",
    "topic": "Síndrome do desconforto respiratório neonatal",
    "module": "Pediatria",
    "text": "Recém-nascido (RN) com 28 semanas de idade gestacional, peso de nascimento de 1000g, nasceu vigoroso, mas apresentou desconforto respiratório com 3 minutos de vida, com piora progressiva. Na UTI, RX de tórax apresenta infiltrado reticulogranular.\n\nConsiderando o diagnóstico mais provável, qual é a conduta recomendada?",
    "options": [
      "(A) Iniciar ventilação pulmonar invasiva imediatamente.",
      "(B) Iniciar antibioticoterapia após coleta da hemocultura.",
      "(C) Iniciar suporte ventilatório com o CPAP nasal.",
      "(D) Administrar surfactante exógeno apenas se o RN for intubado."
    ],
    "correctAnswer": 2,
    "explanation": "Prematuro de 28 semanas e 1.000 g com desconforto respiratório progressivo desde os primeiros minutos e infiltrado reticulogranular difuso: síndrome do desconforto respiratório (doença da membrana hialina), por deficiência de surfactante.\n\nNo RN que respira espontaneamente, a conduta inicial recomendada é o CPAP nasal precoce. O surfactante (de preferência por técnica minimamente invasiva, LISA/MIST) é dado se houver piora, por exemplo com FiO₂ > 0,30. Assim evita-se a ventilação invasiva e a lesão pulmonar.",
    "commentary": "Ventilação invasiva imediata (A): o RN nasceu vigoroso; intubação de rotina aumenta a displasia broncopulmonar comparada ao CPAP.\n\nAntibiótico após hemocultura (B): pode ser considerado na suspeita de sepse precoce, mas não é a conduta principal para o quadro descrito.\n\nSurfactante só se intubado (D): hoje existem técnicas de administração sem ventilação mecânica (LISA/MIST).",
    "reference": "Diretrizes da SBP — Síndrome do desconforto respiratório / European Consensus Guidelines on the Management of RDS (2022)",
    "tags": [
      "neonatologia",
      "prematuridade",
      "síndrome do desconforto respiratório",
      "CPAP"
    ]
  },
  {
    "id": "unifesp2025-93",
    "topography": "11",
    "topic": "Icterícia neonatal",
    "module": "Pediatria",
    "text": "Recém-nascido com 36 semanas de idade gestacional, peso ao nascer de 2850 gramas, filho de mãe secundigesta, hígida, sem intercorrências na gestação, nasceu de parto normal com boa vitalidade. Com 48 horas de vida, está em alojamento conjunto, em aleitamento moderno exclusivo, com diurese e evacuação presentes e normais. Exame físico: ictérico zona II, sem outras alterações.\n\nQual é a conduta recomendada?",
    "options": [
      "(A) Iniciar fototerapia e coletar bilirrubinas em 24 horas para avaliar alta hospitalar.",
      "(B) Indicar alta hospitalar e reavaliação clínica em 48 horas.",
      "(C) Indicar alta hospitalar sem necessidade de reavaliação precoce.",
      "(D) Dosar bilirrubinas para avaliar indicação de fototerapia."
    ],
    "correctAnswer": 3,
    "explanation": "RN de 36 semanas (pré-termo tardio, fator de risco para hiperbilirrubinemia grave) com icterícia que já atinge a zona II de Kramer com 48 horas de vida.\n\nA estimativa visual da bilirrubina é imprecisa, especialmente no prematuro. Antes de decidir alta ou fototerapia, é preciso dosar a bilirrubina (sérica ou transcutânea) e plotá-la nos nomogramas por idade gestacional e horas de vida.",
    "commentary": "Fototerapia empírica (A): a indicação depende do valor de bilirrubina, ainda não medido.\n\nAlta com retorno em 48 h (B): alta sem dosagem num pré-termo tardio ictérico é arriscada (risco de kernicterus).\n\nAlta sem reavaliação (C): todo RN, especialmente o pré-termo tardio, deve ser reavaliado precocemente após a alta.",
    "reference": "SBP — Icterícia no recém-nascido com idade gestacional ≥ 35 semanas (2021) / AAP 2022 Hyperbilirubinemia Guideline",
    "tags": [
      "neonatologia",
      "icterícia neonatal",
      "hiperbilirrubinemia",
      "pré-termo tardio"
    ]
  },
  {
    "id": "unifesp2025-94",
    "topography": "12",
    "topic": "Cuidados paliativos",
    "module": "Pediatria",
    "text": "Os pais de Paulo de 7 anos chegam à consulta ambulatorial com os exames do filho que demonstram um quadro sugestivo de leucemia mieloide aguda. Você deverá comunicar o diagnóstico à família.\n\nCom base nos principais passos do Protocolo SPIKES de comunicação de más notícias, além de preparar um ambiente privado para conversar com a família, quais seriam suas principais atitudes, em sequência?",
    "options": [
      "(A) Investigar o conhecimento e angústias dos pais; identificar o que eles desejam saber; compartilhar as informações de forma pausada evitando jargões médicos; identificar e acolher as emoções da família; resumir e elaborar um plano de cuidados e acompanhamento com os pais.",
      "(B) Perguntar sobre a história clínica da criança; compartilhar as informações de forma pausada evitando jargões médicos; identificar e conter as emoções da família; resumir e elaborar um plano de cuidados e acompanhamento com os pais.",
      "(C) Identificar o que os pais desejam saber; compartilhar as informações de forma objetiva e breve, evitando jargões médicos; identificar e conter as emoções da família; resumir e elaborar um plano de cuidados e acompanhamento com os pais.",
      "(D) Perguntar sobre a história clínica da criança; compartilhar as informações de forma pausada e empática evitando jargões médicos; ouvir, identificar e conter as emoções da família; estabelecer uma estratégia de conduta e um sumário para os pais."
    ],
    "correctAnswer": 0,
    "explanation": "O protocolo SPIKES organiza a comunicação de más notícias em seis passos:\n\n• S (Setting): preparar o ambiente\n• P (Perception): avaliar o que a família já sabe e entende\n• I (Invitation): identificar o quanto ela deseja saber\n• K (Knowledge): transmitir a informação de forma clara, pausada e sem jargões\n• E (Emotions): acolher as emoções com empatia\n• S (Strategy and Summary): resumir e combinar o plano\n\nA alternativa A segue exatamente essa sequência.",
    "commentary": "Começa pela história clínica e pula Perception e Invitation (B): além disso, 'conter' emoções contraria o passo de acolhê-las.\n\nOmite a percepção e propõe informação breve (C): a informação deve ser pausada e adaptada; 'conter' emoções está errado.\n\nOmite percepção e convite (D): o passo inicial de explorar o conhecimento da família não aparece.",
    "reference": "Baile WF et al. — SPIKES (The Oncologist, 2000) / INCA — Comunicação de notícias difíceis",
    "tags": [
      "pediatria",
      "comunicação de más notícias",
      "SPIKES",
      "ética médica"
    ]
  },
  {
    "id": "unifesp2025-95",
    "topography": "11",
    "topic": "Desnutrição",
    "module": "Pediatria",
    "text": "Menino, 15 meses de idade, mantém crescimento abaixo de -2DP (Peso, Estatura e IMC). A família se queixa de baixa aceitação alimentar. Lactente nasceu com 36 semanas de gestação, peso abaixo do Percentil 10 em curvas de crescimento intrauterino, sem intercorrências na evolução neonatal. Mãe fez tratamento para hipotireoidismo na gestação e ultrassom gestacional com 33 semanas identificou oligoidrâmnio. Previsão de estatura final = 167 cm. Exame físico sem alterações.\n\nQual é a conduta mais adequada para a elucidação diagnóstica?",
    "options": [
      "(A) Dosagens séricas de hormônio do crescimento, IGF-1 e IGFBP-3.",
      "(B) RX de esqueleto e de mãos e punhos para avaliar a idade óssea.",
      "(C) Dosagens séricas de T4, TSH e anticorpos antitireoglobulina.",
      "(D) Exame de urina tipo I, ureia, creatinina e eletrólitos."
    ],
    "correctAnswer": 3,
    "explanation": "Lactente com falha de crescimento (peso, estatura e IMC < –2 DP) apesar de alvo genético normal (167 cm), nascido pequeno para a idade gestacional e com oligoidrâmnio no pré-natal.\n\nOligoidrâmnio sugere comprometimento do trato urinário fetal, e doenças renais (tubulopatias, como acidose tubular renal, ou doença renal crônica) são causas importantes e silenciosas de déficit de crescimento com baixa aceitação alimentar. A investigação inicial inclui urina tipo I, ureia, creatinina e eletrólitos (com gasometria).",
    "commentary": "GH, IGF-1 e IGFBP-3 (A): a deficiência de GH compromete mais a estatura que o peso; o IMC baixo aponta para causa nutricional ou sistêmica.\n\nIdade óssea (B): ajuda a classificar a baixa estatura, mas não elucida a etiologia sistêmica.\n\nFunção tireoidiana (C): o hipotireoidismo materno tratado não sugere doença tireoidiana do filho, e o hipotireoidismo da criança cursa com ganho de peso relativamente preservado.",
    "reference": "Tratado de Pediatria SBP — Baixa estatura e falha de crescimento / Diretrizes de acidose tubular renal na infância",
    "tags": [
      "pediatria",
      "falha de crescimento",
      "baixa estatura",
      "nefrologia pediátrica"
    ]
  },
  {
    "id": "unifesp2025-96",
    "topography": "11",
    "topic": "Maus-tratos infantis",
    "module": "Pediatria",
    "text": "Menino, 7 anos de idade, é trazido à UBS pela mãe com história de desobediência e agressividade em casa e na escola. Durante a consulta, ele revela sofrer agressões frequentes por parte do pai, inclusive com uso de objetos como cinto e chinelo. Exame físico: bom estado geral, duas equimoses de 3 cm de diâmetro no dorso, sem outras alterações. A criança parece tranquila na consulta e colabora com o exame.\n\nAlém de orientar a mãe sobre as consequências da violência, quais as condutas recomendadas para o caso?",
    "options": [
      "(A) Como as lesões são leves e a criança parece tranquila, não é necessário acompanhamento específico para a situação de violência.",
      "(B) Comunicar a Delegacia local e o Ministério Público para proteção à criança e eventual destituição do poder familiar por violência.",
      "(C) Reunir informações, avaliar a família, prosseguir com avaliação social e psicológica e comunicar o Conselho Tutelar da região de moradia.",
      "(D) Orientar a criança quanto ao seu comportamento agressivo e acompanhar o caso individualmente mantendo sigilo do atendimento."
    ],
    "correctAnswer": 2,
    "explanation": "Criança que relata agressão física repetida pelo pai, com equimoses compatíveis: suspeita de violência física.\n\nPelo Estatuto da Criança e do Adolescente (art. 13 e art. 245), a suspeita ou confirmação de maus-tratos obriga a comunicação ao Conselho Tutelar, além da notificação no SINAN (violência interpessoal). A conduta inclui acolhimento, reunião de informações, avaliação da família e acompanhamento pela equipe multiprofissional (social e psicológico) e pela rede de proteção.",
    "commentary": "Lesões leves dispensam acompanhamento (A): a gravidade das lesões não diminui o dever de proteger nem de comunicar.\n\nDelegacia e Ministério Público (B): a comunicação obrigatória é ao Conselho Tutelar, que aciona a rede; a destituição do poder familiar não é a conduta inicial.\n\nSigilo e acompanhamento individual (D): o sigilo não se aplica à suspeita de maus-tratos; a comunicação é obrigatória.",
    "reference": "Estatuto da Criança e do Adolescente (Lei nº 8.069/1990), arts. 13 e 245 / SBP — Manual de atendimento às crianças e adolescentes vítimas de violência",
    "tags": [
      "pediatria",
      "maus-tratos",
      "violência infantil",
      "conselho tutelar",
      "ECA"
    ]
  },
  {
    "id": "unifesp2025-97",
    "module": "Pediatria",
    "text": "Menino, 7 anos de idade, apresenta baixa estatura, dificuldade de aprendizagem e comportamento hiperativo. Mãe relata uso frequente de álcool durante toda a gestação. Exame físico: fendas palpebrais curtas, hipoplasia de face média, filtro nasolabial apagado e lábio superior fino.\n\nConsiderando o diagnóstico de transtorno do espectro alcoólico fetal, qual é a alternativa correta?",
    "options": [
      "(A) Recomenda-se abstinência de bebidas alcoólicas nos dois primeiros trimestres gestacionais, sendo o uso social de álcool permitido no terceiro trimestre de gravidez.",
      "(B) O álcool atravessa a barreira placentária, contudo não atravessa a barreira hematoencefálica fetal, permitindo o consumo de até 10 gramas semanais.",
      "(C) Não existe quantidade segura definida para o uso de bebidas alcoólicas na gestação, portanto, a recomendação é abstinência absoluta de álcool durante toda a gravidez.",
      "(D) Mesmo que a gestante se abstenha de ingerir álcool durante a gravidez, uma história pregressa de uso de bebidas alcoólicas aumenta o risco de desenvolvimento de transtornos do espectro alcoólico fetal."
    ],
    "correctAnswer": 2,
    "explanation": "O álcool atravessa livremente a placenta e é teratogênico em qualquer fase da gestação: no primeiro trimestre afeta a morfogênese (fácies típica) e ao longo de toda a gravidez afeta o desenvolvimento do SNC.\n\nComo não existe dose segura conhecida nem período seguro, a recomendação é abstinência total de álcool durante toda a gestação (e quando se planeja engravidar).",
    "commentary": "Permitido no terceiro trimestre (A): o SNC continua em desenvolvimento e vulnerável no terceiro trimestre.\n\nNão atravessa a barreira hematoencefálica (B): o álcool atravessa as duas barreiras, e não há quantidade semanal segura.\n\nHistória pregressa aumenta o risco (D): o transtorno decorre da exposição fetal; se a gestante não beber na gravidez, o feto não é exposto.",
    "reference": "SBP — Síndrome Alcoólica Fetal / Ministério da Saúde — Atenção ao pré-natal de baixo risco",
    "tags": [
      "pediatria",
      "transtorno do espectro alcoólico fetal",
      "gestação",
      "álcool"
    ]
  },
  {
    "id": "unifesp2025-98",
    "topography": "10",
    "topic": "Toxoplasmose",
    "module": "Pediatria",
    "text": "Recém-nascida (RN) de 7 dias de vida, é levada à UBS para a primeira consulta pediátrica. Sua mãe foi diagnosticada com toxoplasmose aguda no terceiro trimestre da gestação e iniciou tratamento com espiramicina. O USG fetal identificou calcificações intracranianas. O exame físico da RN é normal, o USG transfontanelar não revelou novas lesões além das já detectadas e sua sorologia é IgG positivo e IgM negativo para toxoplasmose.\n\nCom base no protocolo de manejo de toxoplasmose congênita, qual é a conduta mais apropriada?",
    "options": [
      "(A) Iniciar o tratamento com espiramicina e realizar exames mensais de acompanhamento até que a IgM se torne positiva.",
      "(B) Não iniciar o tratamento neste momento, mas realizar acompanhamento mensal com exames físico, neurológico, sorologia e avaliação oftalmológica.",
      "(C) Iniciar o tratamento tríplice com pirimetamina, sulfadiazina e ácido folínico por 12 meses, independentemente de novos achados clínicos.",
      "(D) Repetir a sorologia e ultrassonografia transfontanelar em 15 dias antes de tomar qualquer decisão sobre o início do tratamento."
    ],
    "correctAnswer": 2,
    "explanation": "Toxoplasmose materna aguda no terceiro trimestre (maior risco de transmissão) e calcificações intracranianas na ultrassonografia fetal: o RN tem toxoplasmose congênita sintomática (com alteração de neuroimagem), ainda que o exame físico seja normal e o IgM negativo.\n\nO IgM negativo não exclui infecção (sensibilidade limitada, especialmente após tratamento materno). O tratamento é pirimetamina, sulfadiazina e ácido folínico por 12 meses, com seguimento oftalmológico e neurológico.",
    "commentary": "Espiramicina até IgM positivar (A): a espiramicina é usada na gestante para reduzir transmissão; não trata o RN infectado, e não se espera IgM.\n\nNão tratar e acompanhar (B): conduta para RN assintomático com investigação negativa; aqui há lesão em SNC.\n\nRepetir exames em 15 dias (D): atrasaria o tratamento de uma infecção comprovada por imagem.",
    "reference": "Protocolo de notificação e investigação: toxoplasmose gestacional e congênita — Ministério da Saúde, 2018 / SBP",
    "tags": [
      "neonatologia",
      "toxoplasmose congênita",
      "infecções congênitas"
    ]
  },
  {
    "id": "unifesp2025-99",
    "topography": "5.2",
    "topic": "Infecções na gestação",
    "module": "Pediatria",
    "text": "Menino, 5 dias de vida, apresenta icterícia colestática, púrpura, hepatomegalia e esplenomegalia. Emissão otoacústica: resposta ausente bilateral. Tomografia de crânio: atrofia cortical, dilatação ventricular e calcificações periventriculares.\n\nConsiderando o diagnóstico mais provável, qual exame é o mais recomendado para identificar o agente etiológico da doença?",
    "options": [
      "(A) Cultura no líquido cefalorraquidiano.",
      "(B) Cultura no sangue.",
      "(C) Dosagem de IgM específica.",
      "(D) PCR na urina."
    ],
    "correctAnswer": 3,
    "explanation": "RN com hepatoesplenomegalia, icterícia colestática, púrpura (plaquetopenia), perda auditiva neurossensorial bilateral, microcefalia ou atrofia com ventriculomegalia e calcificações periventriculares: citomegalovírus congênito.\n\nO diagnóstico se faz pela detecção do vírus em urina ou saliva (PCR ou cultura) nas primeiras 3 semanas de vida. Depois disso não é possível distinguir infecção congênita de adquirida. A PCR na urina é o exame mais recomendado.",
    "commentary": "Cultura de líquor (A): não é o método diagnóstico do CMV congênito.\n\nHemocultura (B): pesquisa bactérias, não vírus.\n\nIgM específica (C): tem baixa sensibilidade e especificidade no RN; não confirma nem exclui o diagnóstico.",
    "reference": "SBP — Citomegalovírus congênito / International Congenital CMV Recommendations Group (2017)",
    "tags": [
      "neonatologia",
      "citomegalovírus congênito",
      "infecções congênitas",
      "perda auditiva"
    ]
  }
];
