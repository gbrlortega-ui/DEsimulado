import { Question } from '../types';

// HOS-BOS 2025 — Hospital Oftalmológico de Sorocaba / Banco de Olhos de Sorocaba (residência médica, SP). 100 questões.
// Gabarito conferido no gabarito comentado do AjudaMédico; explicações com texto próprio.
export const HOSBOS_2025_QUESTIONS: Question[] = [
  {
    "id": "hosbos2025-1",
    "topography": "16",
    "topic": "Perfuração de víscera oca",
    "module": "Cirurgia",
    "text": "Mulher de 43 anos deu entrada em unidade de pronto atendimento com quadro de dor abdominal muito intensa, de início súbito há 30 minutos, inicialmente em epigástrio, irradiando-se para todo o abdome, associada a náuseas sem vômitos. Ao exame clínico, a paciente está em estabilidade hemodinâmica e, no exame abdominal, notam-se presença de abdome rígido (em tábua), ausência de ruídos hidroaéreos na ausculta, na percussão sinal de Jobert presente e descompressão brusca positiva em todo o abdome. O diagnóstico mais provável e a conduta indicada para esta paciente, respectivamente, são:",
    "options": [
      "(A) peritonite primária e antibioticoterapia ampla + hidratação IV.",
      "(B) trombose mesentérica e angiorressonância do tronco celíaco.",
      "(C) hemorragia intracavitária e transfusão de hemocomponentes.",
      "(D) abscesso hepático e tomografia computadorizada de abdome com triplo contraste.",
      "(E) perfuração de víscera oca e abordagem cirúrgica (laparotomia ou laparoscopia)."
    ],
    "correctAnswer": 4,
    "explanation": "Dor epigástrica súbita e intensa que se generaliza, abdome em tábua, descompressão brusca dolorosa difusa e silêncio abdominal indicam peritonite química generalizada. O sinal de Jobert (timpanismo no lugar da macicez hepática) denuncia pneumoperitônio.\n\nO conjunto aponta perfuração de víscera oca — na maioria das vezes úlcera péptica perfurada —, cujo tratamento é cirúrgico (rafia/omentoplastia por laparotomia ou videolaparoscopia), junto com hidratação, antibiótico e IBP.",
    "commentary": "Peritonite primária (A): ocorre em cirróticos com ascite (PBE), tem início insidioso e não produz pneumoperitônio.\n\nTrombose mesentérica (B): a marca é dor desproporcional ao exame físico, sem abdome em tábua no início; o exame de escolha é a angiotomografia.\n\nHemorragia intracavitária (C): cursaria com instabilidade hemodinâmica e macicez, não com timpanismo hepático.\n\nAbscesso hepático (D): quadro febril e subagudo, com dor em hipocôndrio direito, sem peritonite difusa súbita.",
    "reference": "Sabiston Textbook of Surgery, 21ª ed. — Abdome agudo / Úlcera péptica perfurada",
    "tags": [
      "abdome agudo perfurativo",
      "sinal de Jobert",
      "pneumoperitônio",
      "úlcera péptica perfurada"
    ]
  },
  {
    "id": "hosbos2025-2",
    "topography": "3.3",
    "topic": "Coledocolitíase",
    "module": "Cirurgia",
    "text": "Assinale a alternativa correta de acordo com as atuais recomendações para diagnóstico e manejo da coledocolitíase em pacientes com colelitíase, segundo o último guideline da American Society for Gastrointestinal Endoscopy (ASGE).",
    "options": [
      "(A) Estas recomendações incluem um algoritmo, utilizando fatores como idade, alteração de exames laboratoriais e achados ultrassonográficos.",
      "(B) Pacientes com um preditor muito forte ou dois preditores fortes são classificados como risco médio e não devem ser submetidos a colangiopancreatografia retrógrada endoscópica (CPRE).",
      "(C) Na presença de dois fatores preditores fracos, o risco é moderado, e recomenda-se investigação adicional com ultrassonografia convencional, sem indicação de colecistectomia.",
      "(D) Caso não seja evidenciado nenhum fator preditor, o risco é baixo, e a conduta é observação com nova ultrassonografia em 6 meses.",
      "(E) Em casos diagnosticados de coledocolitíase em pacientes assintomáticos, não é recomendado tratamento para remoção dos cálculos, mesmo que o paciente esteja em condições clínicas para realizar a intervenção."
    ],
    "correctAnswer": 0,
    "explanation": "A diretriz da ASGE de 2019 estratifica o risco de coledocolitíase em pacientes com colelitíase sintomática combinando dados clínicos (colangite, idade > 55 anos), laboratoriais (bilirrubina, outras provas hepáticas) e de imagem (cálculo ou dilatação do colédoco na ultrassonografia).\n\nAlto risco (cálculo visto no colédoco, colangite, ou bilirrubina > 4 mg/dL com colédoco dilatado) → CPRE; risco intermediário → colangiorressonância, ecoendoscopia ou colangiografia intraoperatória; baixo risco → colecistectomia direta.",
    "commentary": "Preditor muito forte ou dois fortes = risco médio sem CPRE (B): na classificação antiga, isso era alto risco, com indicação de CPRE.\n\nDois preditores fracos (C): a conduta é investigação com ecoendoscopia ou colangiorressonância, e o paciente com colelitíase sintomática segue com indicação de colecistectomia.\n\nNenhum preditor (D): baixo risco → colecistectomia, não observação com nova ultrassonografia.\n\nColedocolitíase assintomática (E): a ASGE recomenda remover os cálculos do colédoco mesmo sem sintomas, se o paciente tiver condições clínicas, pelo risco de colangite e pancreatite.",
    "reference": "ASGE Guideline on the role of endoscopy in the evaluation and management of choledocholithiasis (Gastrointest Endosc, 2019)",
    "tags": [
      "coledocolitíase",
      "ASGE",
      "CPRE",
      "colangiorressonância"
    ]
  },
  {
    "id": "hosbos2025-3",
    "topography": "3.1",
    "topic": "Câncer colorretal",
    "module": "Cirurgia",
    "text": "Com relação ao uso de stents nas afecções dos cólons, assinale a alternativa correta.",
    "options": [
      "(A) Para sua realização, é mandatório o preparo intestinal anterógrado.",
      "(B) No caso de um tumor obstrutivo de cólon ser irressecável, a prótese pode servir de tratamento paliativo definitivo.",
      "(C) A única contraindicação formal ao uso de próteses no cólon é a presença de abdome agudo obstrutivo.",
      "(D) O uso de próteses no cólon está indicado na presença de perfuração intestinal em pacientes graves com choque séptico.",
      "(E) É necessário um cirurgião capacitado para tratamento de tumores de cólon com próteses metálicas autoexpansíveis, não sendo possível por via endoscópica."
    ],
    "correctAnswer": 1,
    "explanation": "A prótese metálica autoexpansível colocada por colonoscopia tem dois usos na obstrução maligna do cólon esquerdo: ponte para cirurgia eletiva (descomprime o cólon e evita a colostomia de urgência) e paliação definitiva em tumores irressecáveis ou pacientes sem condição cirúrgica.",
    "commentary": "Preparo anterógrado obrigatório (A): o preparo por via oral é contraindicado na obstrução; faz-se, no máximo, enema retrógrado.\n\nÚnica contraindicação é o abdome agudo obstrutivo (C): a obstrução é justamente a indicação; as contraindicações são perfuração, peritonite e isquemia.\n\nIndicado na perfuração com choque séptico (D): perfuração é contraindicação absoluta — a conduta é cirurgia.\n\nPrecisa de cirurgião, não pode ser endoscópico (E): a prótese é colocada por colonoscopia com radioscopia, pelo endoscopista.",
    "reference": "ESGE Guideline: Self-expandable metal stents for obstructing colonic and extracolonic cancer (2020)",
    "tags": [
      "câncer colorretal",
      "obstrução intestinal maligna",
      "prótese colônica",
      "colonoscopia"
    ]
  },
  {
    "id": "hosbos2025-4",
    "topography": "16",
    "topic": "Feridas",
    "module": "Cirurgia",
    "text": "Mulher de 39 anos dá entrada no pronto-socorro por ferimento lacerocontuso de 2,0 cm no joelho esquerdo após queda, e é indicada sutura. Ao exame, o ferimento é superficial, acometendo a pele e subcutâneo; realizada limpeza com soro fisiológico e prescrita cobertura antitetânica. RX normal. Considerando as informações, o fio cirúrgico e o tipo de sutura mais indicados, respectivamente, para tratamento do ferimento são:",
    "options": [
      "(A) nylon 3-0 e ponto Donatti.",
      "(B) polipropileno 4-0 e ponto em U.",
      "(C) categute simples e ponto em X.",
      "(D) categute cromado e ponto simples.",
      "(E) ácido poliglicólico e ponto simples invertido."
    ],
    "correctAnswer": 0,
    "explanation": "Ferida superficial de pele e subcutâneo em área de tensão e grande mobilidade (joelho) pede fio inabsorvível monofilamentar (nylon) de calibre 3-0 ou 4-0 — mais grosso que o usado em face — e um ponto que distribua a tensão e everta as bordas.\n\nO ponto Donatti (vertical em U) faz exatamente isso: boa coaptação e eversão em áreas de tração, como joelho e cotovelo.",
    "commentary": "Polipropileno 4-0 e ponto em U (B): o polipropileno é usado em suturas vasculares e aponeuroses; para pele de área de tensão o padrão é o nylon com Donatti.\n\nCategute simples e ponto em X (C): o categute é absorvível e reacional, inadequado para pele; o ponto em X serve para hemostasia.\n\nCategute cromado (D): absorvível, usado em mucosas e ligaduras, não em pele.\n\nÁcido poliglicólico com ponto invertido (E): fio absorvível para planos profundos; o ponto invertido sepulta o nó no subcutâneo, não fecha pele em área de tensão.",
    "reference": "Goffi FS. Técnica Cirúrgica: Bases Anatômicas, Fisiopatológicas e Técnicas da Cirurgia, 4ª ed.",
    "tags": [
      "sutura",
      "fios cirúrgicos",
      "ponto Donatti",
      "ferimento lacerocontuso"
    ]
  },
  {
    "id": "hosbos2025-5",
    "topography": "3.1",
    "topic": "Hemorragia digestiva alta",
    "module": "Cirurgia",
    "text": "É cada vez mais notável a importância do adequado alinhamento entre as equipes de cirurgia geral e endoscopia digestiva em relação ao tratamento de pacientes com patologias cirúrgicas. A importância é ainda maior quando se trata de pacientes com patologias graves, que necessitam de conduta rápida e efetiva, cujo tratamento multidisciplinar pode evitar desfechos catastróficos. Dentro deste contexto, com relação ao Escore de Glasgow-Blatchford, assinale a alternativa correta.",
    "options": [
      "(A) Foi desenvolvido para predizer o risco de morte em 48 horas e necessidade de intervenção em pacientes com abdome agudo hemorrágico.",
      "(B) O Escore varia de 0 a 11, sendo que 0 representa a menor taxa de mortalidade (0,2%), e seu parâmetros são idade, frequência cardíaca, pressão arterial e presença de sangue vermelho-vivo na lesão.",
      "(C) Pacientes com graduação de 0-1 têm alto risco de desenvolverem câncer gástrico na úlcera gástrica sangrante.",
      "(D) Pacientes com graduação maior ou igual a 2 no Escore devem ser internados para tratamento adequado.",
      "(E) Este sistema de pontuação baseia-se em 3 achados clínicos e dois endoscópicos."
    ],
    "correctAnswer": 3,
    "explanation": "O escore de Glasgow-Blatchford é aplicado na admissão da hemorragia digestiva alta, antes da endoscopia, com ureia, hemoglobina, pressão sistólica, frequência cardíaca, melena, síncope, hepatopatia e insuficiência cardíaca. Varia de 0 a 23 e prevê a necessidade de intervenção (transfusão, endoscopia terapêutica, cirurgia).\n\nPontuação 0–1 identifica paciente de muito baixo risco, que pode ter alta e fazer endoscopia ambulatorial; ≥ 2 indica internação.",
    "commentary": "Morte em 48 h no abdome agudo hemorrágico (A): o escore é para hemorragia digestiva alta e prevê necessidade de intervenção, não morte.\n\nVaria de 0 a 11 com idade e sangue vermelho-vivo (B): essa descrição lembra o escore de Rockall; o Glasgow-Blatchford vai até 23 e não inclui idade.\n\n0–1 com alto risco de câncer (C): 0–1 é baixo risco de intervenção; o escore não avalia malignidade.\n\n3 achados clínicos e 2 endoscópicos (E): o Glasgow-Blatchford não usa nenhum achado endoscópico — é pré-endoscópico.",
    "reference": "ESGE Guideline: Endoscopic diagnosis and management of nonvariceal upper GI hemorrhage (2021)",
    "tags": [
      "hemorragia digestiva alta",
      "escore de Glasgow-Blatchford",
      "estratificação de risco"
    ]
  },
  {
    "id": "hosbos2025-6",
    "topography": "16",
    "topic": "Trauma torácico",
    "module": "Cirurgia",
    "text": "A aorta pode sofrer ruptura completa ou incompleta após trauma torácico contuso ou penetrante. No caso de trauma torácico contuso em um condutor de veículo jovem, vítima de acidente automobilístico frontal, sem dispositivos de contenção, deve-se suspeitar de trauma aórtico em qual das situações abaixo?",
    "options": [
      "(A) e-FAST positivo na janela pericárdica.",
      "(B) Rebaixamento do brônquio fonte direito, visualizado na tomografia de tórax.",
      "(C) Alargamento de mediastino, visualizado no RX de tórax.",
      "(D) Diminuição da pressão arterial nos membros superiores em comparação aos membros inferiores.",
      "(E) Desvio da traqueia e do esôfago (e, portanto, também da sonda nasogástrica) para a esquerda, visualizado no RX de tórax."
    ],
    "correctAnswer": 2,
    "explanation": "Desaceleração brusca (colisão frontal sem cinto) é o mecanismo clássico da lesão de aorta torácica, junto ao istmo (ligamento arterioso). Na radiografia de tórax, o sinal mais lembrado é o alargamento do mediastino (> 8 cm), que motiva a angiotomografia.\n\nOutros sinais: apagamento do botão aórtico, desvio da traqueia e da sonda nasogástrica para a DIREITA, rebaixamento do brônquio-fonte ESQUERDO, hemotórax à esquerda e capuz apical.",
    "commentary": "e-FAST positivo na janela pericárdica (A): sugere hemopericárdio/tamponamento, não lesão de aorta.\n\nRebaixamento do brônquio-fonte direito (B): o sinal é o rebaixamento do brônquio esquerdo.\n\nPA menor nos membros superiores (D): quando há diferença, a pressão costuma ser menor nos membros inferiores (pseudocoarctação).\n\nDesvio da traqueia e da sonda para a esquerda (E): o hematoma periaórtico empurra essas estruturas para a direita.",
    "reference": "ATLS — Advanced Trauma Life Support, 10ª ed. (American College of Surgeons) — Trauma torácico",
    "tags": [
      "trauma torácico",
      "lesão de aorta",
      "alargamento de mediastino",
      "ATLS"
    ]
  },
  {
    "id": "hosbos2025-7",
    "topography": "14",
    "topic": "Choque",
    "module": "Cirurgia",
    "text": "De acordo com os preceitos da 10ª edição do Advanced Trauma Life Support (ATLS®), a necessidade de reposição volêmica inicial no choque classificado como IV é de",
    "options": [
      "(A) 2000 mL de solução cristaloide + 2000 mL de hemocomponentes.",
      "(B) 3000 mL de sangue total + 500 mL de solução hipertônica 7,5%.",
      "(C) 1000 mL de solução cristaloide e observação dos sinais vitais.",
      "(D) 1000 mL de Ringer Lactato e protocolo de transfusão maciça.",
      "(E) reposição maciça com 4000 mL de solução cristaloide e vasoconstritores."
    ],
    "correctAnswer": 3,
    "explanation": "Choque classe IV (perda > 40% da volemia) exige reposição imediata de sangue. Pelo ATLS 10ª edição, a infusão inicial de cristaloide aquecido é de 1 litro no adulto, e a perda maciça com instabilidade indica o protocolo de transfusão maciça (concentrado de hemácias, plasma e plaquetas em proporção balanceada), com controle cirúrgico precoce do sangramento.",
    "commentary": "2 L de cristaloide + 2 L de hemocomponentes (A): o ATLS 10 abandonou os 2 litros de cristaloide; volumes grandes causam coagulopatia dilucional.\n\nSangue total e salina hipertônica (B): não é a recomendação do ATLS.\n\n1 L de cristaloide e observação (C): na classe IV não se observa — é preciso transfusão imediata.\n\n4 L de cristaloide com vasoconstritores (E): reposição agressiva com cristaloide e vasopressor piora a coagulopatia e não trata a hemorragia.",
    "reference": "ATLS — Advanced Trauma Life Support, 10ª ed. (American College of Surgeons) — Choque",
    "tags": [
      "choque hemorrágico",
      "ATLS",
      "transfusão maciça",
      "trauma"
    ]
  },
  {
    "id": "hosbos2025-8",
    "topography": "1.5",
    "topic": "Hiperparatireoidismo",
    "module": "Cirurgia",
    "text": "Com relação ao metabolismo em pacientes cirúrgicos, a hipercalcemia está mais frequentemente relacionada à seguinte situação:",
    "options": [
      "(A) tireoidectomia total.",
      "(B) hipoparatireoidismo primário.",
      "(C) hiperparatireoidismo primário.",
      "(D) síndrome compartimental.",
      "(E) tireotoxicose."
    ],
    "correctAnswer": 2,
    "explanation": "O hiperparatireoidismo primário (em geral, adenoma de paratireoide) é a causa mais frequente de hipercalcemia em pacientes ambulatoriais e cirúrgicos; em internados, a segunda grande causa é a hipercalcemia da malignidade. O tratamento definitivo é a paratireoidectomia.",
    "commentary": "Tireoidectomia total (A): o risco é de HIPOcalcemia, por lesão ou desvascularização das paratireoides.\n\nHipoparatireoidismo (B): falta de PTH causa hipocalcemia.\n\nSíndrome compartimental (D): a rabdomiólise associada causa hipocalcemia inicial (deposição de cálcio no músculo).\n\nTireotoxicose (E): pode elevar discretamente o cálcio por reabsorção óssea, mas é causa rara.",
    "reference": "Diretrizes da SBEM — Hiperparatireoidismo primário / Sabiston Textbook of Surgery, 21ª ed.",
    "tags": [
      "hipercalcemia",
      "hiperparatireoidismo primário",
      "paratireoide"
    ]
  },
  {
    "id": "hosbos2025-9",
    "topography": "16",
    "topic": "Obstrução intestinal",
    "module": "Cirurgia",
    "text": "A etiologia mais frequentemente associada à obstrução intestinal, atualmente, é:",
    "options": [
      "(A) neoplasia intestinal.",
      "(B) hérnia inguinal encarcerada.",
      "(C) intussuscepção intestinal.",
      "(D) volvo de sigmoide.",
      "(E) aderência pós-operatória."
    ],
    "correctAnswer": 4,
    "explanation": "As aderências (bridas) pós-operatórias são hoje a principal causa de obstrução do intestino delgado e de obstrução intestinal em geral nos adultos, respondendo por cerca de 60–75% dos casos.\n\nNos países em que as hérnias não são operadas eletivamente, a hérnia encarcerada ainda aparece como causa importante, mas perdeu o primeiro lugar.",
    "commentary": "Neoplasia (A): é a principal causa de obstrução do intestino grosso, não da obstrução intestinal como um todo.\n\nHérnia inguinal encarcerada (B): já foi a primeira causa; hoje é a segunda.\n\nIntussuscepção (C): causa principal em lactentes, rara em adultos.\n\nVolvo de sigmoide (D): causa relevante de obstrução colônica em idosos e chagásicos, mas bem menos frequente que bridas.",
    "reference": "Sabiston Textbook of Surgery, 21ª ed. — Obstrução do intestino delgado",
    "tags": [
      "obstrução intestinal",
      "bridas",
      "aderências"
    ]
  },
  {
    "id": "hosbos2025-10",
    "module": "Cirurgia",
    "text": "O agente anestésico inalatório não indicado em presença de espaços aéreos fechados, como procedimentos laparoscópicos, pneumotórax, obstrução intestinal, operações do ouvido médio ou retina, é o",
    "options": [
      "(A) óxido nitroso.",
      "(B) halotano.",
      "(C) propofol.",
      "(D) etomidato.",
      "(E) tiopental."
    ],
    "correctAnswer": 0,
    "explanation": "O óxido nitroso é cerca de 30 vezes mais solúvel no sangue que o nitrogênio. Ele entra nas cavidades fechadas de gás mais rápido do que o nitrogênio consegue sair, aumentando o volume ou a pressão dessas cavidades.\n\nPor isso é evitado em pneumotórax, obstrução intestinal, pneumoperitônio, cirurgia de ouvido médio e cirurgia de retina com bolha de gás intraocular.",
    "commentary": "Halotano (B): anestésico inalatório halogenado; suas restrições são arritmias e hepatite, não espaços aéreos fechados.\n\nPropofol (C): é um anestésico venoso, não inalatório.\n\nEtomidato (D): venoso; o efeito marcante é a supressão adrenal.\n\nTiopental (E): barbitúrico venoso.",
    "reference": "Miller's Anesthesia, 9ª ed. — Anestésicos inalatórios",
    "tags": [
      "anestesiologia",
      "óxido nitroso",
      "anestésicos inalatórios"
    ]
  },
  {
    "id": "hosbos2025-11",
    "topography": "3.1",
    "topic": "Hemorragia digestiva baixa",
    "module": "Cirurgia",
    "text": "As causas mais prevalentes de hemorragia digestiva baixa em crianças (com idade entre 2 a 5 anos) são:",
    "options": [
      "(A) intussuscepção intestinal, pólipos e fissuras anais.",
      "(B) fissuras anais, intussuscepção intestinal e hemangiomas.",
      "(C) divertículo de Meckel, pólipos juvenis e doença inflamatória intestinal.",
      "(D) doença diverticular dos cólons, angiodisplasias e hemangiomas.",
      "(E) divertículo de Zenker, polipose múltipla familiar e abuso sexual."
    ],
    "correctAnswer": 2,
    "explanation": "A hemorragia digestiva baixa na infância tem causas que mudam com a idade. No pré-escolar (2 a 5 anos), as listas clássicas destacam o pólipo juvenil (principal causa de sangramento indolor nessa idade), o divertículo de Meckel (sangramento volumoso e indolor) e a doença inflamatória intestinal, além de fissura anal e intussuscepção.\n\nA banca escolheu a combinação Meckel + pólipo juvenil + DII.",
    "commentary": "Intussuscepção, pólipos e fissuras (A): é uma combinação plausível, mas a intussuscepção predomina em lactentes (6 meses a 2 anos); a banca não a considerou.\n\nFissura, intussuscepção e hemangiomas (B): hemangiomas são causa rara.\n\nDiverticulose, angiodisplasia e hemangiomas (D): diverticulose e angiodisplasia são causas de idosos.\n\nZenker, polipose familiar e abuso sexual (E): o divertículo de Zenker fica na faringe e afeta idosos; não causa hemorragia baixa.",
    "reference": "Nelson Textbook of Pediatrics, 21ª ed. — Sangramento gastrointestinal",
    "tags": [
      "hemorragia digestiva baixa",
      "divertículo de Meckel",
      "pólipo juvenil",
      "cirurgia pediátrica"
    ]
  },
  {
    "id": "hosbos2025-12",
    "topography": "16",
    "topic": "Hérnias",
    "module": "Cirurgia",
    "text": "Mulher de 76 anos apresenta massa dolorosa logo abaixo do ligamento inguinal, em raiz da coxa esquerda, que se evidencia com os esforços. O diagnóstico mais provável é hérnia",
    "options": [
      "(A) inguinal direta.",
      "(B) femoral.",
      "(C) inguinal indireta.",
      "(D) obturadora.",
      "(E) de Spiegel."
    ],
    "correctAnswer": 1,
    "explanation": "Abaulamento logo abaixo do ligamento inguinal, na raiz da coxa, em mulher idosa: hérnia femoral (crural). Ela passa pelo canal femoral, medial à veia femoral, e é mais comum em mulheres e idosas.\n\nTem o maior risco de encarceramento e estrangulamento entre as hérnias da virilha, por isso deve ser operada sempre, mesmo assintomática.",
    "commentary": "Inguinal direta (A): sai acima do ligamento inguinal, pelo triângulo de Hesselbach.\n\nInguinal indireta (C): também acima do ligamento, pelo anel inguinal profundo; é a mais comum em ambos os sexos, mas não na raiz da coxa.\n\nObturadora (D): raramente palpável; manifesta-se como obstrução intestinal e dor na face medial da coxa (sinal de Howship-Romberg).\n\nSpiegel (E): na borda lateral do reto abdominal, na linha semilunar.",
    "reference": "Sabiston Textbook of Surgery, 21ª ed. — Hérnias / HerniaSurge Guidelines (2018)",
    "tags": [
      "hérnia femoral",
      "hérnias da parede abdominal"
    ]
  },
  {
    "id": "hosbos2025-13",
    "topography": "3.3",
    "topic": "Câncer de vesícula",
    "module": "Cirurgia",
    "text": "Homem de 87 anos, assintomático, realizou ultrassonografia abdominal para controle de esteatose hepática. Ao exame, foi detectado um pólipo de 2,3 cm de diâmetro no fundo da vesícula biliar associado à colelitíase. O tratamento adequado para este paciente deverá ser:",
    "options": [
      "(A) ultrassonografia seriada a cada 6 meses.",
      "(B) complementação diagnóstica com endoscopia digestiva alta.",
      "(C) acompanhamento ambulatorial sem necessidade de abordagem cirúrgica.",
      "(D) tratamento por colangiografia endoscópica.",
      "(E) colecistectomia por via convencional ou por videolaparoscopia."
    ],
    "correctAnswer": 4,
    "explanation": "Pólipo de vesícula ≥ 10 mm tem risco relevante de malignidade e indica colecistectomia. Outros fatores que reforçam a indicação: idade > 50 anos, colelitíase associada, base séssil e crescimento.\n\nAqui o pólipo tem 2,3 cm, há cálculo e o paciente é idoso: a conduta é colecistectomia. Pólipos maiores que 18–20 mm são suspeitos de câncer, e o planejamento deve considerar ressecção oncológica.",
    "commentary": "Ultrassonografia a cada 6 meses (A): vale para pólipos de 6–9 mm sem fatores de risco.\n\nEndoscopia digestiva alta (B): não avalia a vesícula.\n\nAcompanhamento sem cirurgia (C): inaceitável com pólipo de 2,3 cm.\n\nColangiografia endoscópica (D): avalia e trata a via biliar principal, não pólipos da vesícula.",
    "reference": "Joint guidelines ESGAR/EAES/EFISDS/ESGE — Management of gallbladder polyps (2022)",
    "tags": [
      "pólipo de vesícula",
      "colecistectomia",
      "câncer de vesícula"
    ]
  },
  {
    "id": "hosbos2025-14",
    "topography": "7.2",
    "topic": "Carcinoma espinocelular",
    "module": "Cirurgia",
    "text": "Com relação à úlcera de Marjolin, assinale a alternativa correta.",
    "options": [
      "(A) A incidência de degeneração maligna nesta úlcera é alta, ocorrendo em 40 a 70% das feridas e cicatrizes.",
      "(B) O período de tempo para esta lesão evoluir para carcinoma basocelular é curto, ocorrendo em média em 2 a 7 anos.",
      "(C) Apresenta maior prevalência em mulheres jovens e não apresenta evolução maligna na história natural da doença.",
      "(D) É uma ulceração crônica decorrente de cicatriz de queimadura, que pode evoluir para o desenvolvimento de carcinoma de células escamosas da pele.",
      "(E) Evolui rapidamente para melanoma maligno, o câncer mais frequentemente relacionado a esta condição."
    ],
    "correctAnswer": 3,
    "explanation": "Úlcera de Marjolin é a transformação maligna de feridas crônicas e cicatrizes — classicamente de queimadura, mas também de úlceras venosas, osteomielite fistulizada e outras cicatrizes. O tipo histológico mais comum é o carcinoma espinocelular (de células escamosas).\n\nA latência é longa (média de 25–35 anos) e o tumor é agressivo, com maior risco de metástase linfonodal.",
    "commentary": "Degeneração em 40–70% (A): a transformação é rara (cerca de 1–2% das cicatrizes de queimadura).\n\nBasocelular em 2–7 anos (B): o tipo mais comum é o espinocelular, e a latência média passa de 20 anos.\n\nMulheres jovens sem evolução maligna (C): a úlcera de Marjolin é, por definição, uma lesão maligna.\n\nMelanoma (E): melanoma é raro nessa situação.",
    "reference": "Bolognia JL. Dermatology, 4ª ed. / Sabiston Textbook of Surgery — Queimaduras",
    "tags": [
      "úlcera de Marjolin",
      "carcinoma espinocelular",
      "queimaduras",
      "cicatriz"
    ]
  },
  {
    "id": "hosbos2025-15",
    "module": "Cirurgia",
    "text": "Homem de 69 anos apresentou-se em consulta médica referindo tosse irritativa, salivação excessiva, disfagia, regurgitação constante, halitose e disfonia há 6 meses. Na investigação diagnóstica, solicitou-se um esofagograma, encontrando-se uma \"bolsa\" ao nível da cartilagem cricotireóidea preenchida com bário de aproximadamente 2,5 cm, que repousava posteriormente ao longo do esôfago (\"barra cricofaríngea\"). A conduta correta a ser adotada com este paciente deverá ser:",
    "options": [
      "(A) complementação com endoscopia digestiva alta.",
      "(B) ressecção cirúrgica ou endoscópica da lesão.",
      "(C) realização de manometria esofágica.",
      "(D) acompanhamento ambulatorial.",
      "(E) esofagectomia subtotal."
    ],
    "correctAnswer": 1,
    "explanation": "Disfagia alta, regurgitação de alimento não digerido, halitose e tosse em idoso, com bolsa posterior na transição faringoesofágica no esofagograma: divertículo de Zenker (de pulsão, no triângulo de Killian, acima do cricofaríngeo).\n\nDivertículos sintomáticos devem ser tratados: miotomia do cricofaríngeo associada a diverticulectomia ou diverticulopexia (via cervical), ou septotomia endoscópica (grampeador ou POEM).",
    "commentary": "Endoscopia digestiva alta (A): não é necessária para o diagnóstico (o esofagograma é o exame de escolha) e tem risco de perfuração do divertículo.\n\nManometria (C): não muda a conduta no Zenker sintomático.\n\nAcompanhamento ambulatorial (D): divertículo sintomático tem indicação de tratamento pelo risco de aspiração e desnutrição.\n\nEsofagectomia subtotal (E): procedimento desproporcional para doença benigna da transição faringoesofágica.",
    "reference": "Sabiston Textbook of Surgery, 21ª ed. — Divertículos esofágicos",
    "tags": [
      "divertículo de Zenker",
      "disfagia",
      "esofagograma"
    ]
  },
  {
    "id": "hosbos2025-16",
    "topography": "1.1",
    "topic": "TCE",
    "module": "Cirurgia",
    "text": "Homem de 28 anos sofreu acidente automobilístico rotacional há cerca de 15 minutos (estava sem cinto de segurança) e deu entrada na emergência apresentando ferimento lacerocontuso em região temporal esquerda; no exame neurológico: gemidos incompreensíveis, abertura ocular sem resposta e localizava a dor. Sinais vitais normais. Após receber o atendimento inicial, foi encaminhado para realização de tomografia de crânio. Em relação ao caso, o diagnóstico do paciente é:",
    "options": [
      "(A) lesão axonal difusa associada com hematoma ventricular.",
      "(B) hematoma epidural agudo associado com hemorragia tentorial.",
      "(C) hematoma subdural agudo associado com hemorragia parenquimatosa.",
      "(D) concussão cerebral central associada com hemorragia ventricular.",
      "(E) hematoma epidural agudo associado com lesão axonal difusa."
    ],
    "correctAnswer": 2,
    "explanation": "Glasgow: abertura ocular ausente (1), gemidos incompreensíveis (2) e localiza a dor (5) = 8 — TCE grave.\n\nNa tomografia, há coleção hiperdensa em crescente à esquerda, acompanhando a convexidade e cruzando suturas (hematoma subdural agudo, por ruptura de veias-ponte em trauma rotacional), e um foco hiperdenso arredondado no parênquima temporal esquerdo (contusão/hematoma intraparenquimatoso).",
    "commentary": "Lesão axonal difusa com hematoma ventricular (A): a LAD costuma ter TC quase normal ou pequenas hemorragias puntiformes; não há sangue intraventricular evidente.\n\nHematoma epidural (B e E): seria uma lente biconvexa, limitada pelas suturas, geralmente por lesão da artéria meníngea média; a imagem mostra crescente.\n\nConcussão com hemorragia ventricular (D): concussão não tem lesão estrutural na TC.",
    "reference": "ATLS — Advanced Trauma Life Support, 10ª ed. — Trauma cranioencefálico",
    "tags": [
      "TCE",
      "hematoma subdural agudo",
      "contusão cerebral",
      "escala de coma de Glasgow",
      "tomografia de crânio"
    ],
    "image": "/images/hosbos2025-16.webp"
  },
  {
    "id": "hosbos2025-17",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Mulher de 34 anos, vítima de tentativa de estrangulamento, deu entrada na emergência apresentando intensa dificuldade respiratória, rouquidão, estridor laríngeo, enfisema subcutâneo cervical e fratura palpável na região anterior do pescoço. Saturação de O₂: 88%; FR: 22 mrpm; PA: 125/75 mmHg; FC: 108 bpm. Demais segmentos do corpo sem lesões. A suspeita diagnóstica e a conduta a ser tomada na sala de emergência, respectivamente, são:",
    "options": [
      "(A) trauma da laringe e via aérea definitiva.",
      "(B) pneumotórax simples e drenagem torácica.",
      "(C) pneumotórax hipertensivo e toracocentese descompressiva.",
      "(D) lesão esofágica e endoscopia digestiva alta.",
      "(E) trauma brônquico e broncoscopia."
    ],
    "correctAnswer": 0,
    "explanation": "Trauma cervical anterior com rouquidão, estridor, enfisema subcutâneo e crepitação/fratura palpável é a tríade da fratura de laringe. Com dessaturação e desconforto, há risco iminente de perda da via aérea.\n\nA conduta é via aérea definitiva imediata — intubação orotraqueal cuidadosa (de preferência por profissional experiente, idealmente com visualização) ou, se falhar, traqueostomia de urgência; a cricotireoidostomia é evitada na fratura de laringe.",
    "commentary": "Pneumotórax simples (B): não explica rouquidão, estridor e fratura laríngea; o exame não descreve alteração torácica.\n\nPneumotórax hipertensivo (C): cursaria com hipotensão, turgência jugular e murmúrio abolido; a paciente está normotensa.\n\nLesão esofágica (D): pode coexistir, mas a prioridade (A do ABCDE) é a via aérea.\n\nTrauma brônquico (E): lesão intratorácica, com pneumotórax e fuga aérea persistente.",
    "reference": "ATLS — Advanced Trauma Life Support, 10ª ed. — Via aérea / Trauma cervical",
    "tags": [
      "trauma de laringe",
      "via aérea definitiva",
      "trauma cervical",
      "ATLS"
    ]
  },
  {
    "id": "hosbos2025-18",
    "topography": "3.1",
    "topic": "Gastrite",
    "module": "Cirurgia",
    "text": "Com relação à gastrite hipertrófica ou Doença de Ménétrier, assinale a alternativa correta.",
    "options": [
      "(A) Não é considerada uma doença pré-maligna do estômago.",
      "(B) O exame histopatológico revela células parietais abundantes.",
      "(C) Não tem indicação cirúrgica mesmo quando o paciente apresenta perda proteica abundante a despeito do tratamento adequado.",
      "(D) Tem sido associada à infecção por citomegalovírus em crianças e por H. pylori em adultos.",
      "(E) A pHmetria de 24 horas mostra hipercloridria."
    ],
    "correctAnswer": 3,
    "explanation": "A doença de Ménétrier é uma gastropatia hipertrófica com pregas gigantes no corpo e fundo, hiperplasia foveolar e perda de células parietais e principais. Causa hipocloridria e gastropatia perdedora de proteína (hipoalbuminemia, edema).\n\nEm crianças é associada à infecção por citomegalovírus (forma autolimitada); em adultos, alguns casos são ligados ao H. pylori e regridem após a erradicação. A superexpressão de TGF-α é o mecanismo central.",
    "commentary": "Não é pré-maligna (A): há risco aumentado de adenocarcinoma gástrico, por isso exige seguimento endoscópico.\n\nCélulas parietais abundantes (B): há hiperplasia foveolar com atrofia glandular — as células parietais diminuem.\n\nSem indicação cirúrgica (C): perda proteica grave e refratária, sangramento ou suspeita de malignidade indicam gastrectomia.\n\nHipercloridria (E): o achado é hipocloridria.",
    "reference": "Feldman M. Sleisenger and Fordtran's Gastrointestinal and Liver Disease, 11ª ed.",
    "tags": [
      "doença de Ménétrier",
      "gastropatia hipertrófica",
      "gastropatia perdedora de proteína"
    ]
  },
  {
    "id": "hosbos2025-19",
    "topography": "16",
    "topic": "Feridas",
    "module": "Cirurgia",
    "text": "Analise a seguinte descrição e assinale a alternativa correta. É um fio de sutura sintético, obtido pela polimerização do ácido glicólico. A reabsorção ocorre por hidrólise, em 60 a 90 dias após sua utilização. Muito usado na sutura de músculos, fáscias, ocasiona pouca reação inflamatória. É multifilamentado, podendo, como qualquer fio com esta característica, albergar em seu interior bactérias que escapam da fagocitose.",
    "options": [
      "(A) Nylon.",
      "(B) Ethibond®.",
      "(C) Maxon®.",
      "(D) Dexon®.",
      "(E) Categute."
    ],
    "correctAnswer": 3,
    "explanation": "Fio sintético, multifilamentar, obtido do ácido poliglicólico, absorvido por hidrólise em 60–90 dias, com pouca reação inflamatória: Dexon®.\n\nO Vicryl® (poliglactina 910) é parecido, mas é um copolímero de ácido glicólico e láctico.",
    "commentary": "Nylon (A): inabsorvível, monofilamentar.\n\nEthibond® (B): poliéster trançado inabsorvível.\n\nMaxon® (C): poligliconato — absorvível, mas monofilamentar.\n\nCategute (E): fio biológico (colágeno), absorvido por proteólise, com reação inflamatória intensa.",
    "reference": "Goffi FS. Técnica Cirúrgica, 4ª ed. — Fios de sutura",
    "tags": [
      "fios cirúrgicos",
      "dexon",
      "técnica cirúrgica"
    ]
  },
  {
    "id": "hosbos2025-20",
    "module": "Cirurgia",
    "text": "Com relação aos abscessos hepáticos, assinale a alternativa correta.",
    "options": [
      "(A) O tratamento inicial dos abscessos amebianos hepáticos, na grande maioria dos casos, é cirúrgico, pela drenagem por via endoscópica.",
      "(B) Alterações radiológicas estão presentes em 30-45% dos pacientes portadores de abscesso hepático.",
      "(C) Atualmente, as infecções da árvore biliar são a causa mais comum de abscesso hepático.",
      "(D) A drenagem cirúrgica do abscesso piogênico deve ser a mais tardia possível, a fim de permitir antibioticoterapia ampla prévia.",
      "(E) A maioria dos abscessos hepáticos envolve o lobo esquerdo, sendo esta topografia responsável por cerca de 75% dos casos."
    ],
    "correctAnswer": 2,
    "explanation": "Hoje a infecção da via biliar (colangite ascendente, principalmente por obstrução maligna ou litiásica) é a principal causa de abscesso hepático piogênico, à frente da via portal (apendicite, diverticulite), hematogênica e por contiguidade.",
    "commentary": "Amebiano tratado com cirurgia/drenagem endoscópica (A): o abscesso amebiano é tratado com metronidazol na grande maioria dos casos; drenagem só em casos selecionados (percutânea).\n\nAlterações radiológicas em 30–45% (B): as alterações na radiografia de tórax (elevação de cúpula, derrame) aparecem em mais da metade dos casos, e a TC/US praticamente sempre mostram a lesão.\n\nDrenagem o mais tardia possível (D): o piogênico precisa de antibiótico E drenagem precoce (de preferência percutânea).\n\nMaioria no lobo esquerdo (E): cerca de 75% acometem o lobo DIREITO, pelo maior volume e fluxo portal.",
    "reference": "Sabiston Textbook of Surgery, 21ª ed. — Abscessos hepáticos",
    "tags": [
      "abscesso hepático",
      "colangite",
      "abscesso amebiano"
    ]
  },
  {
    "id": "hosbos2025-21",
    "topography": "2.2",
    "topic": "Hipertensão arterial sistêmica",
    "module": "Clínica Médica",
    "text": "Principais efeitos colaterais em relação ao uso de nitroprussiato de sódio são:",
    "options": [
      "(A) náusea e vômitos.",
      "(B) fraqueza e cefaleia.",
      "(C) tosse e rouquidão.",
      "(D) aumento da pressão intraocular e zumbido.",
      "(E) bradicardia e taquicardia."
    ],
    "correctAnswer": 4,
    "explanation": "O nitroprussiato é um vasodilatador arterial e venoso direto, de ação imediata, usado em emergências hipertensivas. A queda brusca da resistência vascular dispara taquicardia reflexa; em pacientes com pouca pré-carga, a queda abrupta do retorno venoso pode provocar bradicardia paradoxal (reflexo de Bezold-Jarisch). A banca escolheu essas alterações de frequência cardíaca como resposta.\n\nOs efeitos mais temidos, porém, são hipotensão excessiva e intoxicação por cianeto/tiocianato em infusões prolongadas, doses altas ou insuficiência renal/hepática.",
    "commentary": "Náusea e vômitos (A): constam nas bulas e nos manuais como efeitos adversos frequentes, em geral ligados à queda rápida da pressão. Por isso a questão é discutível.\n\nFraqueza e cefaleia (B): podem ocorrer com vasodilatadores, mas são inespecíficas.\n\nTosse e rouquidão (C): tosse é efeito típico dos IECA.\n\nPressão intraocular e zumbido (D): o nitroprussiato pode aumentar a pressão INTRACRANIANA; pressão intraocular e zumbido não fazem parte do seu perfil.",
    "reference": "Diretrizes Brasileiras de Hipertensão Arterial (SBC, 2020) — Emergências hipertensivas",
    "tags": [
      "nitroprussiato de sódio",
      "emergência hipertensiva",
      "farmacologia",
      "efeitos adversos"
    ],
    "alert": "Gabarito oficial discutível: náuseas e vômitos (A) também são efeitos adversos descritos do nitroprussiato; a alternativa A também foi aceita aqui.",
    "alsoAccepted": [
      0
    ]
  },
  {
    "id": "hosbos2025-22",
    "module": "Clínica Médica",
    "text": "Com relação ao midazolam, muito utilizado em sedação, assinale a alternativa correta.",
    "options": [
      "(A) Sua diluição é obrigatória, e apenas com soro fisiológico.",
      "(B) Seu tempo de início de ação é, em média, de 3-4 minutos.",
      "(C) Seu tempo de ação é, em média, de 60 a 90 minutos.",
      "(D) Doses repetidas se acumulam no tecido adiposo, prolongando seu efeito sedativo.",
      "(E) O evento adverso mais encontrado durante seu uso é a hipotensão."
    ],
    "correctAnswer": 3,
    "explanation": "O midazolam é um benzodiazepínico lipossolúvel de início rápido (1–3 minutos IV) e efeito curto em dose única (cerca de 15–30 minutos, até 1–2 horas). Em doses repetidas ou infusão contínua, acumula-se no tecido adiposo e redistribui, prolongando a sedação — principalmente em obesos, idosos, hepatopatas e pacientes com disfunção renal (metabólito ativo).",
    "commentary": "Diluição obrigatória só em SF (A): pode ser feito sem diluir ou diluído em SF ou SG 5%.\n\nInício em 3–4 minutos (B): o início IV é mais rápido (1–3 min).\n\nDuração de 60–90 minutos (C): em dose única a sedação dura menos; a duração longa aparece com doses repetidas.\n\nHipotensão como evento mais comum (E): o efeito adverso mais relevante é a depressão respiratória, principalmente associada a opioides.",
    "reference": "Miller's Anesthesia, 9ª ed. — Benzodiazepínicos",
    "tags": [
      "midazolam",
      "sedação",
      "benzodiazepínicos",
      "farmacologia"
    ]
  },
  {
    "id": "hosbos2025-23",
    "topography": "3.2",
    "topic": "Encefalopatia hepática",
    "module": "Clínica Médica",
    "text": "Com relação aos quadros de encefalopatia hepática, é correto afirmar que",
    "options": [
      "(A) o uso de lactulona é considerado o padrão-ouro no seu tratamento.",
      "(B) o uso de flumazenil, em caso inicial, tem grande impacto na sobrevida.",
      "(C) para o controle da agitação motora, recomenda-se o uso de benzodiazepínico.",
      "(D) neomicina ou metronidazol administrados isoladamente são indicados para aqueles pacientes com classe I de West-Haven.",
      "(E) a ingestão de proteína deve ser limitada a 1 g/kg/dia."
    ],
    "correctAnswer": 0,
    "explanation": "A lactulose (dissacarídeo não absorvível) é o tratamento de primeira linha da encefalopatia hepática: acidifica o cólon, converte amônia em amônio (não absorvível) e acelera o trânsito. A rifaximina é associada na recorrência.\n\nTambém é essencial procurar e tratar o fator precipitante (infecção, sangramento, distúrbio eletrolítico, constipação, sedativos).",
    "commentary": "Flumazenil com grande impacto na sobrevida (B): pode melhorar transitoriamente o nível de consciência, sem benefício em sobrevida.\n\nBenzodiazepínico para agitação (C): benzodiazepínicos pioram a encefalopatia e devem ser evitados.\n\nNeomicina ou metronidazol isolados no grau I (D): são alternativas de segunda linha, limitadas por toxicidade, não o tratamento inicial.\n\nRestrição de proteína a 1 g/kg/dia (E): não se restringe proteína; a recomendação é 1,2–1,5 g/kg/dia para evitar sarcopenia.",
    "reference": "AASLD/EASL Practice Guideline — Hepatic Encephalopathy in Chronic Liver Disease (2014) / EASL Clinical Practice Guidelines on nutrition in chronic liver disease (2019)",
    "tags": [
      "encefalopatia hepática",
      "lactulose",
      "cirrose"
    ]
  },
  {
    "id": "hosbos2025-24",
    "topography": "3.1",
    "topic": "Diarreia aguda",
    "module": "Clínica Médica",
    "text": "Considerando-se os quadros de diarreia aguda, assinale a alternativa correta.",
    "options": [
      "(A) Período de incubação causado pelo S. aureus é, em média, de 1-6 horas.",
      "(B) Causados por norovírus, mais frequentemente observados em meses do verão.",
      "(C) Causados pela Giardia lamblia, e o tratamento mais recomendado é com quinolona em dose única.",
      "(D) Causados por rotavírus, que raramente cursa com quadro de epigastralgia.",
      "(E) Recidiva causada pelo Clostridium difficile é, em geral, da ordem de 5%."
    ],
    "correctAnswer": 0,
    "explanation": "A intoxicação alimentar por Staphylococcus aureus é causada por enterotoxina pré-formada no alimento. Por isso o período de incubação é curto, de 1 a 6 horas, com vômitos intensos, cólica e pouca ou nenhuma febre. O Bacillus cereus (forma emética) tem quadro semelhante.",
    "commentary": "Norovírus no verão (B): a sazonalidade predominante é no inverno (\"winter vomiting disease\").\n\nGiardia tratada com quinolona (C): o tratamento é com metronidazol, tinidazol ou secnidazol.\n\nRotavírus raramente com epigastralgia (D): vômitos e dor abdominal são comuns no rotavírus.\n\nRecidiva de C. difficile em 5% (E): a recorrência é de cerca de 20–25% após o primeiro episódio.",
    "reference": "IDSA Clinical Practice Guidelines for the Diagnosis and Management of Infectious Diarrhea (2017)",
    "tags": [
      "diarreia aguda",
      "intoxicação alimentar",
      "staphylococcus aureus"
    ]
  },
  {
    "id": "hosbos2025-25",
    "topography": "1.1",
    "topic": "Meningite",
    "module": "Clínica Médica",
    "text": "O tratamento mais benéfico das meningites em pacientes adultos, que apresentam a correta correlação entre seus agentes, está contido na alternativa:",
    "options": [
      "(A) encefalite herpética, e aciclovir associado a corticoide.",
      "(B) Neisseria meningitis, e ceftrixone associado a corticoide.",
      "(C) Haemophylus influenzae, e ceftrixone associado a corticoide.",
      "(D) Lysteria monocytogenes, e ampicilina associada a corticoide.",
      "(E) Streptococcus pneumonie, e ceftrixone, vancomicina e corticoide."
    ],
    "correctAnswer": 4,
    "explanation": "Na meningite pneumocócica do adulto, o tratamento empírico é ceftriaxona associada a vancomicina (pela possibilidade de resistência à penicilina e às cefalosporinas). A dexametasona, iniciada antes ou junto da primeira dose do antibiótico, reduz mortalidade e sequelas neurológicas — o benefício é comprovado justamente na meningite pneumocócica.",
    "commentary": "Encefalite herpética com aciclovir e corticoide (A): o tratamento é aciclovir; o corticoide não tem benefício estabelecido.\n\nMeningococo com ceftriaxona e corticoide (B): a ceftriaxona está certa, mas a dexametasona não mostrou benefício específico no meningococo; a pergunta pede o tratamento mais benéfico.\n\nHaemophilus com ceftriaxona e corticoide (C): o benefício do corticoide em H. influenzae é demonstrado em crianças.\n\nListeria com ampicilina e corticoide (D): a ampicilina está certa, mas o corticoide não traz benefício comprovado na listeriose.",
    "reference": "ESCMID guideline: diagnosis and treatment of acute bacterial meningitis (2016) / IDSA Practice Guidelines for Bacterial Meningitis",
    "tags": [
      "meningite bacteriana",
      "streptococcus pneumoniae",
      "dexametasona",
      "ceftriaxona"
    ]
  },
  {
    "id": "hosbos2025-26",
    "topography": "10",
    "topic": "Dengue",
    "module": "Clínica Médica",
    "text": "É considerado critério de indicação de internação hospitalar em caso de quadro de dengue a presença de",
    "options": [
      "(A) PA < 100/50 mmHg.",
      "(B) plaquetas < 80000 células/mm³.",
      "(C) hematócrito > 50%.",
      "(D) idade menor do que 25 anos.",
      "(E) obesidade."
    ],
    "correctAnswer": 2,
    "explanation": "O Ministério da Saúde classifica a dengue em grupos A–D. Os grupos C (sinais de alarme) e D (choque, sangramento grave, disfunção grave de órgãos) exigem internação.\n\nO aumento progressivo do hematócrito é um sinal de alarme, porque indica extravasamento plasmático. Valores acima de 50% (ou elevação de mais de 10–20% sobre o basal) denotam hemoconcentração importante — foi o critério escolhido pela banca.",
    "commentary": "PA < 100/50 mmHg (A): o que define choque é PA convergente (diferencial ≤ 20 mmHg) ou hipotensão para a idade; 100/50 tem diferencial de 50.\n\nPlaquetas < 80.000 (B): plaquetopenia isolada não é sinal de alarme; o critério de maior atenção é < 20.000 com sangramento.\n\nIdade < 25 anos (D): as condições especiais são extremos de idade (lactentes e idosos), não jovens.\n\nObesidade (E): é comorbidade que classifica no grupo B (observação e exames), sem internação obrigatória.",
    "reference": "Ministério da Saúde. Dengue: diagnóstico e manejo clínico — adulto e criança, 6ª ed. (2024)",
    "tags": [
      "dengue",
      "sinais de alarme",
      "hemoconcentração",
      "internação"
    ]
  },
  {
    "id": "hosbos2025-27",
    "topography": "1.1",
    "topic": "Cefaleias",
    "module": "Clínica Médica",
    "text": "Os triptanos são medicamentos de grande indicação de uso em quadros agudos de enxaqueca. Tem sua contraindicação em casos de",
    "options": [
      "(A) associação com vômitos e náusea.",
      "(B) presença de doença arterial prévia.",
      "(C) presença inicial de aura.",
      "(D) presença inicial de fotofobia.",
      "(E) presença inicial de fonofobia."
    ],
    "correctAnswer": 1,
    "explanation": "Os triptanos são agonistas 5-HT1B/1D: além de inibirem a inflamação neurogênica, causam vasoconstrição, inclusive coronariana. Por isso são contraindicados na doença arterial estabelecida — coronariopatia, AVC/AIT, doença arterial periférica — e na hipertensão não controlada.",
    "commentary": "Náuseas e vômitos (A): não contraindicam; nesses casos usa-se via nasal ou subcutânea.\n\nAura (C): enxaqueca com aura não contraindica triptano (só se evita usar durante a aura prolongada/hemiplégica).\n\nFotofobia (D) e fonofobia (E): são sintomas típicos da enxaqueca, não contraindicações.",
    "reference": "Consenso da Sociedade Brasileira de Cefaleia — Tratamento agudo da migrânea (2018)",
    "tags": [
      "enxaqueca",
      "triptanos",
      "contraindicações"
    ]
  },
  {
    "id": "hosbos2025-28",
    "topography": "2.1",
    "topic": "Pneumonia comunitária",
    "module": "Clínica Médica",
    "text": "Paciente vem a unidade de saúde com quadro de pneumonia de comunidade. É critério do escore CURB 65:",
    "options": [
      "(A) PAS < 80 mmHg.",
      "(B) PAD ≤ 60 mmHg.",
      "(C) frequência respiratória > 35 ipm.",
      "(D) idade > 65 anos.",
      "(E) ureia > 40 mg/dL."
    ],
    "correctAnswer": 1,
    "explanation": "CURB-65: Confusão, Ureia > 50 mg/dL (ou > 7 mmol/L), frequência Respiratória ≥ 30 irpm, pressão Baixa (PAS < 90 ou PAD ≤ 60 mmHg) e idade ≥ 65 anos. Cada item vale 1 ponto.\n\nA PAD ≤ 60 mmHg é critério.",
    "commentary": "PAS < 80 mmHg (A): o corte é PAS < 90.\n\nFR > 35 (C): o corte é ≥ 30.\n\nIdade > 65 (D): o corte é ≥ 65 anos.\n\nUreia > 40 mg/dL (E): o corte é > 50 mg/dL.",
    "reference": "Diretrizes Brasileiras para Pneumonia Adquirida na Comunidade em Adultos Imunocompetentes (SBPT, 2018)",
    "tags": [
      "pneumonia comunitária",
      "CURB-65",
      "estratificação de risco"
    ]
  },
  {
    "id": "hosbos2025-29",
    "topography": "2.1",
    "topic": "Derrame pleural",
    "module": "Clínica Médica",
    "text": "Paciente tem quadro de derrame pleural. Atualmente, constitui indicação de drenagem a",
    "options": [
      "(A) ocupação de 1/3 do hemitórax na radiografia.",
      "(B) presença de pH do líquido pleural < 7,3.",
      "(C) presença de glicose do líquido pleural < 60 mg/dL.",
      "(D) presença de DHL > 1000 U/L.",
      "(E) presença de citologia oncótica positiva."
    ],
    "correctAnswer": 2,
    "explanation": "No derrame parapneumônico, indicam drenagem: pus franco (empiema), Gram ou cultura positivos, pH < 7,2, glicose < 60 mg/dL e derrame loculado ou volumoso (≥ metade do hemitórax).\n\nA glicose < 60 mg/dL é o critério correto entre as alternativas.",
    "commentary": "1/3 do hemitórax (A): o volume que indica drenagem é ≥ metade do hemitórax ou loculado.\n\npH < 7,3 (B): o corte é pH < 7,2.\n\nDHL > 1.000 U/L (D): sugere derrame complicado, mas não é o critério clássico de drenagem isolado.\n\nCitologia oncótica positiva (E): confirma derrame neoplásico; o manejo depende de sintomas (toracocentese de alívio, pleurodese, cateter), não de drenagem obrigatória.",
    "reference": "BTS Guideline for pleural disease (2023) / ACCP consensus on parapneumonic effusions",
    "tags": [
      "derrame pleural",
      "derrame parapneumônico",
      "drenagem torácica"
    ]
  },
  {
    "id": "hosbos2025-30",
    "topography": "14",
    "topic": "Sepse e choque séptico",
    "module": "Clínica Médica",
    "text": "Paciente tem febre e tosse e, por isso, procura unidade de saúde. É critério de resposta inflamatória sistêmica a presença de",
    "options": [
      "(A) temperatura < 37 °C.",
      "(B) frequência cardíaca > 85 bpm.",
      "(C) frequência respiratória > 25 ipm.",
      "(D) PaCO₂ < 32 mmHg.",
      "(E) leucócitos < 5000 mm³."
    ],
    "correctAnswer": 3,
    "explanation": "Critérios de SIRS: temperatura > 38 °C ou < 36 °C; FC > 90 bpm; FR > 20 irpm ou PaCO₂ < 32 mmHg; leucócitos > 12.000 ou < 4.000/mm³ ou > 10% de bastões.\n\nPaCO₂ < 32 mmHg é critério.",
    "commentary": "Temperatura < 37 °C (A): o corte inferior é < 36 °C.\n\nFC > 85 bpm (B): o corte é > 90 bpm.\n\nFR > 25 (C): o corte é > 20 irpm.\n\nLeucócitos < 5.000 (E): o corte é < 4.000/mm³.",
    "reference": "ACCP/SCCM Consensus Conference (1992) — definições de SIRS e sepse",
    "tags": [
      "SIRS",
      "sepse",
      "critérios diagnósticos"
    ]
  },
  {
    "id": "hosbos2025-31",
    "topography": "9",
    "topic": "Neutropenia febril",
    "module": "Clínica Médica",
    "text": "Paciente tem quadro de neutropenia febril. Considerando esse quadro, assinale a alternativa correta.",
    "options": [
      "(A) A incidência de infecções aumenta substancialmente quando a contagem de neutrófilos fica abaixo de 600 células/µL.",
      "(B) Pacientes entre o 5º e o 10º dia pós-quimioterapia estão sob maior risco de neutropenia.",
      "(C) Recomendações atuais preconizam que a antibioticoterapia de amplo espectro deve ser iniciada dentro de 2 horas da apresentação na unidade hospitalar.",
      "(D) A terapia empírica inicial mais recomendada é feita com ceftrixone.",
      "(E) Bacilos gram-negativos têm grande relevância na ocorrência, assim como cocos gram-positivos."
    ],
    "correctAnswer": 4,
    "explanation": "Na neutropenia febril, cocos gram-positivos (estafilococos, estreptococos, ligados a cateteres e mucosite) são hoje os isolados mais frequentes, mas os bacilos gram-negativos (incluindo Pseudomonas aeruginosa) continuam muito relevantes porque causam as infecções mais graves e rapidamente fatais. Por isso a terapia empírica precisa cobrir Pseudomonas.",
    "commentary": "Incidência aumenta abaixo de 600 (A): o risco aumenta abaixo de 500 neutrófilos/µL e é máximo abaixo de 100.\n\nMaior risco entre o 5º e o 10º dia (B): o nadir costuma ocorrer entre o 7º e o 14º dia após a quimioterapia.\n\nAntibiótico em até 2 horas (C): a recomendação é em até 60 minutos da chegada.\n\nCeftriaxona como terapia inicial (D): não cobre Pseudomonas; usa-se cefepima, piperacilina-tazobactam ou carbapenêmico.",
    "reference": "IDSA/ASCO Guideline — Outpatient Management of Fever and Neutropenia (2018) / IDSA Febrile Neutropenia Guideline (2010)",
    "tags": [
      "neutropenia febril",
      "oncologia",
      "antibioticoterapia empírica",
      "pseudomonas"
    ]
  },
  {
    "id": "hosbos2025-32",
    "topography": "8",
    "topic": "Diabetes mellitus tipo 1 e 2",
    "module": "Clínica Médica",
    "text": "Atualmente é recomendado utilizar como um dos critérios de diagnóstico do diabetes melito a presença de",
    "options": [
      "(A) glicemia de jejum maior que 125 mg/dL.",
      "(B) HbA1c maior ou igual a 6,5%.",
      "(C) glicemia no teste de tolerância à glicose por via oral (TTGO), com 1 hora maior que 200 mg/dL.",
      "(D) glicemia no teste de tolerância à glicose por via oral (TTGO), com 2 horas maior ou igual a 190 mg/dL.",
      "(E) cetonemia em jejum."
    ],
    "correctAnswer": 1,
    "explanation": "Critérios diagnósticos de diabetes (SBD/ADA): glicemia de jejum ≥ 126 mg/dL, glicemia 2 h após 75 g de glicose (TTGO) ≥ 200 mg/dL, HbA1c ≥ 6,5% ou glicemia ao acaso ≥ 200 mg/dL com sintomas. A SBD também aceita glicemia de 1 hora no TTGO ≥ 209 mg/dL.\n\nA HbA1c ≥ 6,5% é critério.",
    "commentary": "Jejum > 125 mg/dL (A): na prática equivale a ≥ 126, mas o critério é escrito como ≥ 126 mg/dL; a banca considerou incorreta a formulação.\n\nTTGO 1 h > 200 mg/dL (C): o critério de 1 hora da SBD é ≥ 209 mg/dL.\n\nTTGO 2 h ≥ 190 mg/dL (D): o corte é ≥ 200 mg/dL.\n\nCetonemia de jejum (E): não é critério diagnóstico.",
    "reference": "Diretriz da Sociedade Brasileira de Diabetes (2024) — Diagnóstico do diabetes",
    "tags": [
      "diabetes mellitus",
      "diagnóstico",
      "hemoglobina glicada"
    ]
  },
  {
    "id": "hosbos2025-33",
    "topography": "9",
    "topic": "Coagulopatias",
    "module": "Clínica Médica",
    "text": "Paciente será submetido a procedimento cirúrgico. Durante a avaliação pré-operatória, encontrou-se um tempo de protrombina (TP) alterado. Sugere-se a presença, mais provavelmente, de",
    "options": [
      "(A) uso de heparina.",
      "(B) deficiência de fator VII.",
      "(C) deficiência de fator IX.",
      "(D) deficiência de fibrinogênio.",
      "(E) doença de Von Willebrand."
    ],
    "correctAnswer": 1,
    "explanation": "O tempo de protrombina avalia a via extrínseca (fator VII) e a via comum (X, V, II, fibrinogênio). Um TP alterado isoladamente, com TTPa normal, aponta deficiência de fator VII — o primeiro a cair na deficiência de vitamina K, no uso de varfarina e na hepatopatia, por ter a meia-vida mais curta.",
    "commentary": "Heparina (A): prolonga principalmente o TTPa.\n\nDeficiência de fator IX (C): hemofilia B — prolonga o TTPa.\n\nDeficiência de fibrinogênio (D): alteraria TP e TTPa juntos (e o tempo de trombina).\n\nDoença de von Willebrand (E): afeta hemostasia primária e pode alargar o TTPa (fator VIII); o TP é normal.",
    "reference": "Hoffman R. Hematology: Basic Principles and Practice, 8ª ed. — Avaliação laboratorial da hemostasia",
    "tags": [
      "tempo de protrombina",
      "coagulograma",
      "fator VII",
      "pré-operatório"
    ]
  },
  {
    "id": "hosbos2025-34",
    "topography": "8",
    "topic": "Cetoacidose diabética",
    "module": "Clínica Médica",
    "text": "Paciente chega a unidade saúde com quadro de cetoacidose diabética. Com relação ao seu tratamento, assinale a alternativa correta.",
    "options": [
      "(A) Reposição de bicarbonato de sódio está indicada para casos de pH menor ou igual a 6,9.",
      "(B) Reposição de potássio é obrigatória, previamente à introdução da insulina, caso seu valor se encontre menor do que 3,5 mEq/L.",
      "(C) A dose inicial de insulina é de 1 U/kg/hora.",
      "(D) A hidratação inicial em paciente normotenso deve ser iniciada com 500 a 1000 mL de SF 0,9%.",
      "(E) A bomba de infusão pode ser desligada, caso dois destes fatores estejam presentes: pH > 7,3, ânion gap ≤ 12 ou bicarbonato ≥ 15."
    ],
    "correctAnswer": 2,
    "explanation": "O gabarito oficial é a C, mas a dose padrão de insulina regular na cetoacidose é 0,1 U/kg/h em infusão contínua (com ou sem bolus de 0,1 U/kg) — dez vezes menos que o texto da alternativa. A banca provavelmente quis escrever 0,1.\n\nPor outro lado, a alternativa A corresponde à recomendação clássica da ADA: bicarbonato só se pH < 6,9. Por isso a questão é discutível.",
    "commentary": "Bicarbonato com pH ≤ 6,9 (A): é a indicação da ADA (pH < 6,9); a banca não a considerou, mas está de acordo com a literatura.\n\nPotássio antes da insulina se < 3,5 (B): o corte para adiar a insulina e repor potássio primeiro é K⁺ < 3,3 mEq/L.\n\nHidratação inicial de 500–1.000 mL (D): no adulto, a primeira hora recebe 15–20 mL/kg (1.000–1.500 mL) de SF 0,9%.\n\nDesligar a bomba com dois critérios (E): a resolução exige glicemia < 200 mg/dL e pelo menos dois critérios (pH > 7,3, bicarbonato ≥ 15, ânion gap ≤ 12), e a infusão só é suspensa 1–2 horas após a insulina subcutânea.",
    "reference": "ADA Consensus Report — Hyperglycemic Crises in Adults With Diabetes (2024) / Diretriz da SBD (2024)",
    "tags": [
      "cetoacidose diabética",
      "insulina",
      "bicarbonato",
      "emergências endócrinas"
    ],
    "alert": "Gabarito oficial discutível: a dose de insulina na cetoacidose é 0,1 U/kg/h (provável erro de digitação na alternativa C). A alternativa A, que descreve a indicação de bicarbonato, também foi aceita aqui.",
    "alsoAccepted": [
      0
    ]
  },
  {
    "id": "hosbos2025-35",
    "topography": "2.1",
    "topic": "DPOC",
    "module": "Clínica Médica",
    "text": "A classificação de GOLD para DPOC estabelece que",
    "options": [
      "(A) I (leve) VEF1 ≥ 80%.",
      "(B) II (moderado) VEF1 ≥ 60% e 80%.",
      "(C) III (grave) VEF1 ≥ 40% e 55%.",
      "(D) IV (muito grave) VEF1 < 40%.",
      "(E) IV (muito grave) VEF1/CVF < 50%."
    ],
    "correctAnswer": 0,
    "explanation": "Classificação espirométrica GOLD (com VEF1/CVF < 0,70 pós-broncodilatador): GOLD 1 (leve) VEF1 ≥ 80%; GOLD 2 (moderado) 50–79%; GOLD 3 (grave) 30–49%; GOLD 4 (muito grave) < 30% do previsto.",
    "commentary": "GOLD 2 entre 60 e 80% (B): o intervalo é 50–79%.\n\nGOLD 3 entre 40 e 55% (C): o intervalo é 30–49%.\n\nGOLD 4 com VEF1 < 40% (D): o corte é < 30%.\n\nGOLD 4 com VEF1/CVF < 50% (E): a relação VEF1/CVF define obstrução (< 0,70), não gravidade.",
    "reference": "GOLD — Global Strategy for the Diagnosis, Management and Prevention of COPD (2025)",
    "tags": [
      "DPOC",
      "classificação GOLD",
      "espirometria"
    ]
  },
  {
    "id": "hosbos2025-36",
    "topography": "2.2",
    "topic": "Fibrilação atrial",
    "module": "Clínica Médica",
    "text": "Paciente tem indicação de anticoagulação. Considerando o escore CHA₂DS₂-VASc, é correto afirmar que o critério que contribui com 2 pontos para a pontuação final é",
    "options": [
      "(A) idade ≥ 75 anos.",
      "(B) presença de insuficiência cardíaca.",
      "(C) presença de hipertensão arterial sistólica.",
      "(D) presença de diabetes melito.",
      "(E) sexo feminino."
    ],
    "correctAnswer": 0,
    "explanation": "CHA₂DS₂-VASc: Insuficiência cardíaca (1), Hipertensão (1), Idade ≥ 75 anos (2), Diabetes (1), AVC/AIT/tromboembolismo prévio (2), doença Vascular (1), idade 65–74 (1) e sexo feminino (1).\n\nOs itens que valem 2 pontos são idade ≥ 75 anos e AVC/AIT prévio.",
    "commentary": "Insuficiência cardíaca (B): 1 ponto.\n\nHipertensão (C): 1 ponto.\n\nDiabetes (D): 1 ponto.\n\nSexo feminino (E): 1 ponto (atua como modificador de risco).",
    "reference": "Diretrizes Brasileiras de Fibrilação Atrial (SBC) / ESC Guidelines for the management of atrial fibrillation (2024)",
    "tags": [
      "fibrilação atrial",
      "CHA2DS2-VASc",
      "anticoagulação"
    ]
  },
  {
    "id": "hosbos2025-37",
    "topography": "1.3",
    "topic": "Vertigem",
    "module": "Clínica Médica",
    "text": "Com relação à vertigem posicional paroxística benigna, assinale a alternativa correta.",
    "options": [
      "(A) Sua duração máxima, em média, é de 2 minutos.",
      "(B) Nistagmo que a acompanha em 90% das vezes é horizontal.",
      "(C) É a causa mais comum de vertigem episódica.",
      "(D) Raramente ocorre fatigabilidade do nistagmo.",
      "(E) A manobra de Epley é a mais utilizada para confirmação diagnóstica."
    ],
    "correctAnswer": 2,
    "explanation": "A vertigem posicional paroxística benigna (VPPB) é a causa mais comum de vertigem periférica episódica. Os episódios são breves (segundos, em geral < 1 minuto), desencadeados por mudança de posição da cabeça, sem perda auditiva.\n\nNa forma mais comum (canal semicircular posterior), a manobra de Dix-Hallpike provoca nistagmo vertical para cima e torcional, com latência e fatigabilidade.",
    "commentary": "Duração máxima de 2 minutos (A): as crises costumam durar menos de 1 minuto.\n\nNistagmo horizontal em 90% (B): o canal posterior (80–90% dos casos) produz nistagmo vertical-torcional; o horizontal ocorre no canal lateral.\n\nFatigabilidade rara (D): o nistagmo da VPPB é tipicamente fatigável.\n\nEpley para diagnóstico (E): Epley é manobra de TRATAMENTO (reposicionamento); o diagnóstico é feito com Dix-Hallpike.",
    "reference": "AAO-HNS Clinical Practice Guideline: Benign Paroxysmal Positional Vertigo (2017)",
    "tags": [
      "vertigem",
      "VPPB",
      "manobra de Dix-Hallpike",
      "manobra de Epley"
    ]
  },
  {
    "id": "hosbos2025-38",
    "topography": "1.1",
    "topic": "AVC",
    "module": "Clínica Médica",
    "text": "Paciente vem a unidade de saúde com quadro de acidente vascular cerebral isquêmico. Considerando tal quadro, é correto afirmar que é critério atual de indicação de trombólise no AVC isquêmico o seguinte:",
    "options": [
      "(A) tempo < que 6 horas, desde o último momento visto assintomático.",
      "(B) entre 2 e 4 horas e meia, desde o último momento visto assintomático.",
      "(C) ≥ 18 anos.",
      "(D) paciente diabético com glicemia, no momento do evento > 50 e < 250 mg/dL.",
      "(E) pressão arterial 185 x 110 mmHg."
    ],
    "correctAnswer": 2,
    "explanation": "Critérios de inclusão para trombólise IV (alteplase ou tenecteplase) no AVC isquêmico: idade ≥ 18 anos, déficit neurológico mensurável, TC sem hemorragia e início dos sintomas (ou último momento visto bem) até 4,5 horas.",
    "commentary": "Até 6 horas (A): a janela da trombólise é de 4,5 h; 6 h (ou até 24 h em casos selecionados) é para trombectomia.\n\nEntre 2 e 4,5 horas (B): a janela começa no início dos sintomas — quanto mais cedo, melhor; não há limite inferior.\n\nGlicemia > 50 e < 250 (D): a glicemia < 50 ou > 400 mg/dL é que deve ser corrigida/excluir mimetizadores; o critério não está formulado assim.\n\nPA 185 × 110 mmHg (E): a PA deve estar ABAIXO de 185 × 110 antes da trombólise.",
    "reference": "AHA/ASA Guidelines for the Early Management of Acute Ischemic Stroke (2019) / Diretrizes da SBDCV",
    "tags": [
      "AVC isquêmico",
      "trombólise",
      "alteplase"
    ]
  },
  {
    "id": "hosbos2025-39",
    "module": "Clínica Médica",
    "text": "A correta correlação entre tumor e o respectivo marcador mais relacionado está contido na alternativa:",
    "options": [
      "(A) ovário/alfa-fetoproteína.",
      "(B) fígado/PSA.",
      "(C) pulmão/CEA.",
      "(D) mama/CA 15-3.",
      "(E) próstata/CA-125."
    ],
    "correctAnswer": 3,
    "explanation": "O CA 15-3 é o marcador associado ao câncer de mama, usado no seguimento da doença metastática (não serve para rastreamento).",
    "commentary": "Ovário/alfafetoproteína (A): o marcador do câncer epitelial de ovário é o CA-125; a AFP sobe em tumores de células germinativas e no hepatocarcinoma.\n\nFígado/PSA (B): o PSA é da próstata; no fígado, alfafetoproteína.\n\nPulmão/CEA (C): o CEA pode subir no câncer de pulmão, mas é classicamente o marcador do câncer colorretal.\n\nPróstata/CA-125 (E): próstata é PSA; CA-125 é ovário.",
    "reference": "ASCO Guideline — Use of Biomarkers to Guide Decisions on Adjuvant Systemic Therapy / Tumor markers in breast cancer",
    "tags": [
      "marcadores tumorais",
      "CA 15-3",
      "oncologia"
    ]
  },
  {
    "id": "hosbos2025-40",
    "topography": "6.2",
    "topic": "Lombalgia",
    "module": "Clínica Médica",
    "text": "Com relação aos quadros de lombalgia e seus exames complementares, assinale a alternativa correta.",
    "options": [
      "(A) Tomografia de coluna lombar é bastante sensível quando há quadro de radiculopatia.",
      "(B) Eletroneuromiografia é o exame de maior especificidade para quadro de herniação discal.",
      "(C) Patologias inflamatórias da coluna lombar são mais bem identificadas com realização de ultrassom abdominal.",
      "(D) RX de coluna é de fácil acesso, embora de baixa sensibilidade.",
      "(E) Aumento de valor do VHS, frequentemente, está associado a casos de mieloftise."
    ],
    "correctAnswer": 3,
    "explanation": "A radiografia de coluna é barata e disponível, mas tem baixa sensibilidade para as causas que importam (hérnia discal, infecção, metástase inicial) e não está indicada de rotina na lombalgia aguda sem sinais de alarme.",
    "commentary": "TC sensível para radiculopatia (A): o exame de escolha para radiculopatia e hérnia é a ressonância magnética.\n\nEletroneuromiografia mais específica para hérnia (B): avalia função da raiz, não a hérnia em si; o padrão é a RM.\n\nUltrassom abdominal para doença inflamatória da coluna (C): espondiloartrites são avaliadas com RM de sacroilíacas.\n\nVHS elevado frequentemente associado a mieloftise (E): VHS alto sugere infecção, inflamação ou neoplasia, sem relação específica com mieloftise (infiltração medular).",
    "reference": "American College of Physicians — Noninvasive Treatments for Low Back Pain (2017) / ACR Appropriateness Criteria — Low Back Pain",
    "tags": [
      "lombalgia",
      "exames de imagem",
      "radiografia de coluna"
    ]
  },
  {
    "id": "hosbos2025-41",
    "topography": "5.2",
    "topic": "Restrição de crescimento fetal",
    "module": "Ginecologia e Obstetrícia",
    "text": "F.B.V., 27 anos, GIII PII 1N 1C há 2 anos A0, idade gestacional por ultrassom precoce de 34 semanas e 1 dia, hipertensa crônica, em uso de metildopa 2 g/dia. Veio encaminhada ao pronto-socorro obstétrico pela Medicina Fetal por apresentar ao ultrassom: feto em apresentação cefálica, peso fetal no percentil 2, placenta anterior, grau II de Grannum, Maior bolsão vertical: 3 cm, Doppler: artéria umbilical com diástole zero. Ao exame físico: normotensa, dinâmica uterina ausente, colo uterino impérvio, assintomática. Relação proteína na urina/creatinina na urina: 0,2. De acordo com o caso, assinale a alternativa que apresenta a interpretação correta",
    "options": [
      "(A) Trata-se de um caso de feto pequeno para a idade gestacional.",
      "(B) Há diminuição do índice de pulsatilidade da artéria umbilical.",
      "(C) Trata-se de oligoâmnio.",
      "(D) Trata-se de paciente com pré-eclampsia sobreposta.",
      "(E) Trata-se de um caso de provável sofrimento fetal crônico."
    ],
    "correctAnswer": 4,
    "explanation": "Peso fetal abaixo do percentil 3 já define restrição de crescimento fetal (RCF) grave, independentemente do Doppler; aqui ainda há diástole zero na artéria umbilical, sinal de insuficiência placentária avançada.\n\nEm gestante hipertensa crônica, isso traduz comprometimento crônico da oxigenação fetal — o que a banca chamou de provável sofrimento fetal crônico. O líquido (maior bolsão de 3 cm) está normal e a relação proteína/creatinina de 0,2 afasta pré-eclâmpsia sobreposta.",
    "commentary": "Feto pequeno para a idade gestacional (A): PIG é o feto entre os percentis 3 e 10 com Doppler normal; abaixo do p3, ou com Doppler alterado, é RCF.\n\nDiminuição do IP da artéria umbilical (B): a diástole zero corresponde a resistência muito AUMENTADA (IP elevado).\n\nOligoâmnio (C): oligoâmnio é maior bolsão < 2 cm; 3 cm é normal.\n\nPré-eclâmpsia sobreposta (D): exige proteinúria (relação P/C ≥ 0,3) ou lesão de órgão-alvo nova; a paciente está normotensa e com P/C de 0,2.",
    "reference": "FEBRASGO — Restrição de crescimento fetal (Protocolo nº 12, 2021) / Consenso Delphi de RCF (Gordijn, 2016)",
    "tags": [
      "restrição de crescimento fetal",
      "doppler obstétrico",
      "diástole zero",
      "hipertensão crônica"
    ]
  },
  {
    "id": "hosbos2025-42",
    "topography": "5.2",
    "topic": "Restrição de crescimento fetal",
    "module": "Ginecologia e Obstetrícia",
    "text": "F.B.V., 27 anos, GIII PII 1N 1C há 2 anos A0, idade gestacional por ultrassom precoce de 34 semanas e 1 dia, hipertensa crônica, em uso de metildopa 2 g/dia. Veio encaminhada ao pronto-socorro obstétrico pela Medicina Fetal por apresentar ao ultrassom: feto em apresentação cefálica, peso fetal no percentil 2, placenta anterior, grau II de Grannum, Maior bolsão vertical: 3 cm, Doppler: artéria umbilical com diástole zero. Ao exame físico: normotensa, dinâmica uterina ausente, colo uterino impérvio, assintomática. Relação proteína na urina/creatinina na urina: 0,2. De acordo com o caso, assinale a alternativa que apresenta a conduta correta.",
    "options": [
      "(A) Alta com reavaliação da vitalidade fetal com cardiotocografia a cada 3 dias.",
      "(B) Internação para indução do trabalho de parto com misoprostol.",
      "(C) Internação para preparo do colo uterino com sonda de Foley.",
      "(D) Internação para indução do trabalho de parto com ocitocina.",
      "(E) Internação para interrupção da gestação por via alta."
    ],
    "correctAnswer": 4,
    "explanation": "RCF com diástole zero na artéria umbilical indica resolução da gestação a partir de 32–34 semanas, após corticoide se ainda indicado. Com 34 semanas, a recomendação é interromper.\n\nPela gravidade do comprometimento placentário (feto com pouca reserva, que tende a não tolerar as contrações), colo desfavorável e cesárea anterior, a banca indicou a via alta (cesárea).",
    "commentary": "Alta com cardiotocografia a cada 3 dias (A): diástole zero exige internação e vigilância diária até a resolução.\n\nIndução com misoprostol (B): contraindicado com cesárea anterior e feto com reserva comprometida.\n\nPreparo do colo com sonda de Foley (C): induzir o parto em feto com diástole zero e colo impérvio aumenta o risco de sofrimento agudo; a banca preferiu a cesárea.\n\nIndução com ocitocina (D): com colo impérvio, a indução seria longa e mal tolerada pelo feto.",
    "reference": "FEBRASGO — Restrição de crescimento fetal (Protocolo nº 12, 2021) / ISUOG Practice Guidelines: diagnosis and management of small-for-gestational-age fetus and fetal growth restriction (2020)",
    "tags": [
      "restrição de crescimento fetal",
      "diástole zero",
      "via de parto",
      "cesárea"
    ]
  },
  {
    "id": "hosbos2025-43",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "R.T.B., 29 anos, primigesta, idade gestacional de 11 semanas, veio à segunda consulta de pré-natal com glicemia de jejum de 92 mg/dL. IMC de 24 kg/m², sorologia para toxoplasmose: IgG positivo e IgM positivo. Teste de avidez para IgG 90%. Nega comorbidades. Sobre o caso, assinale a alternativa correta.",
    "options": [
      "(A) Trata-se de diabetes gestacional.",
      "(B) Trata-se de overt diabetes.",
      "(C) Trata-se de diabetes tipo II.",
      "(D) Deve-se solicitar TOTG (Teste Oral de Tolerância à Glicose) com idade gestacional de 24 – 28 semanas.",
      "(E) Deve-se introduzir insulina com 2/3 da dose pela manhã."
    ],
    "correctAnswer": 0,
    "explanation": "No Brasil (critérios da OPAS/MS/FEBRASGO/SBD, baseados na IADPSG), a glicemia de jejum na primeira consulta classifica: < 92 mg/dL normal (fazer TOTG 24–28 semanas); 92–125 mg/dL = diabetes mellitus gestacional; ≥ 126 mg/dL = diabetes prévio (overt).\n\nGlicemia de 92 mg/dL já define diabetes gestacional, sem necessidade de TOTG.",
    "commentary": "Overt diabetes (B): exige jejum ≥ 126 mg/dL, HbA1c ≥ 6,5% ou glicemia ao acaso ≥ 200 mg/dL.\n\nDiabetes tipo 2 (C): não há critério para diabetes fora da gestação.\n\nTOTG com 24–28 semanas (D): só se o jejum inicial for < 92 mg/dL; aqui o diagnóstico já está feito.\n\nInsulina com 2/3 pela manhã (E): o tratamento inicial é dieta e atividade física; insulina só se as metas não forem atingidas.",
    "reference": "OPAS/MS/FEBRASGO/SBD — Rastreamento e diagnóstico de diabetes mellitus gestacional no Brasil (2017)",
    "tags": [
      "diabetes gestacional",
      "glicemia de jejum",
      "pré-natal"
    ]
  },
  {
    "id": "hosbos2025-44",
    "topography": "5.2",
    "topic": "Infecções na gestação",
    "module": "Ginecologia e Obstetrícia",
    "text": "R.T.B., 29 anos, primigesta, idade gestacional de 11 semanas, veio à segunda consulta de pré-natal com glicemia de jejum de 92 mg/dL. IMC de 24 kg/m², sorologia para toxoplasmose: IgG positivo e IgM positivo. Teste de avidez para IgG 90%. Nega comorbidades. Sobre o resultado de sorologia de toxoplasmose do caso, assinale a alternativa correta.",
    "options": [
      "(A) Trata-se de infecção recente de toxoplasmose.",
      "(B) Há de se solicitar nova sorologia em 2 semanas.",
      "(C) Há de se introduzir esquema tríplice com sulfadiazina, pirimetamina e ácido folínico, via oral.",
      "(D) Há de se introduzir espiramicina via oral.",
      "(E) Conduta expectante."
    ],
    "correctAnswer": 4,
    "explanation": "IgG e IgM positivas com avidez de IgG alta (> 60%) no primeiro trimestre indicam infecção antiga, adquirida há mais de 12–16 semanas — antes da concepção. A IgM pode permanecer positiva por meses ou anos (IgM residual).\n\nComo o teste foi feito com 11 semanas, a avidez alta afasta infecção na gestação: não há risco aumentado de transmissão e a conduta é expectante, sem tratamento.",
    "commentary": "Infecção recente (A): a avidez alta afasta infecção nos últimos 3–4 meses.\n\nNova sorologia em 2 semanas (B): é feita quando a avidez é baixa ou não está disponível.\n\nEsquema tríplice (C): usado na infecção fetal confirmada ou após 18 semanas com infecção aguda materna.\n\nEspiramicina (D): indicada na suspeita de infecção aguda materna antes de 16–18 semanas.",
    "reference": "Ministério da Saúde — Protocolo de Notificação e Investigação: Toxoplasmose Gestacional e Congênita (2018) / FEBRASGO — Toxoplasmose e gravidez",
    "tags": [
      "toxoplasmose",
      "teste de avidez",
      "pré-natal",
      "sorologia"
    ]
  },
  {
    "id": "hosbos2025-45",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "T.D.J., 32 anos, GII PI 1C há 2 anos, idade gestacional de 22 semanas, residente na capital de São Paulo, vem à consulta de pré-natal referindo dúvidas com relação à vacinação. A médica constata ausência da vacina de febre amarela e da de gripe do ano corrente. Ainda, as sorologias demonstravam susceptibilidade à hepatite B, IgG e IgM negativos para rubéola. A paciente relata ter recebido vacina do tétano na gestação anterior. Com relação ao caso, assinale a alternativa correta.",
    "options": [
      "(A) A vacina tríplice bacteriana acelular (DTPa) deve ser administrada após as 32 semanas de idade gestacional.",
      "(B) A paciente deve tomar a vacina contra febre amarela, administrada em dose única.",
      "(C) Não há necessidade de se administrar a DTPa, uma vez que a paciente a recebeu há menos de 5 anos.",
      "(D) A vacina contra hepatite B é contraindicada na gestação.",
      "(E) A vacina tríplice viral há de ser administrada após o parto."
    ],
    "correctAnswer": 4,
    "explanation": "A vacina tríplice viral (sarampo, caxumba, rubéola) é de vírus vivo atenuado e contraindicada na gestação. A gestante suscetível à rubéola deve ser vacinada no puerpério, de preferência ainda na maternidade.",
    "commentary": "dTpa após 32 semanas (A): a dTpa é feita a partir de 20 semanas em todas as gestações.\n\nFebre amarela em dose única (B): é vacina viva; na gestação só é aplicada em situação de risco epidemiológico inevitável — São Paulo capital não justifica.\n\nNão precisa de dTpa (C): a dTpa é repetida em cada gestação, independentemente de doses anteriores, para proteger o recém-nascido contra coqueluche.\n\nHepatite B contraindicada (D): é vacina inativada e recomendada para gestantes suscetíveis.",
    "reference": "Ministério da Saúde — Calendário Nacional de Vacinação da Gestante / Manual de Normas e Procedimentos para Vacinação (2024)",
    "tags": [
      "vacinação na gestação",
      "tríplice viral",
      "dTpa",
      "rubéola"
    ]
  },
  {
    "id": "hosbos2025-46",
    "topography": "5.2",
    "topic": "Abortamento",
    "module": "Ginecologia e Obstetrícia",
    "text": "R.C.F., 27 anos, primigesta, idade gestacional cronológica de 8 semanas, sem ultrassom prévio, deu entrada no pronto-socorro com queixa de sangramento vaginal vermelho-vivo em pequena quantidade. Submetida a ultrassom obstétrico inicial que demonstrou DMSG (diâmetro médio do saco gestacional) de 40 mm, CCN (comprimento cabeça-nádega) de 3 mm, vesícula vitelínica de 3 mm e batimentos cardioembrionários ausentes. Ao exame físico: especular: presença de pequena quantidade de sangue coletado em fórnice posterior. Sem sangramento ativo. Ao toque vaginal: colo impérvio, fundo uterino intrapélvico. Assinale a alternativa que apresenta o diagnóstico e a conduta corretos, respectivamente.",
    "options": [
      "(A) Aborto retido; conduta expectante.",
      "(B) Ameaça de abortamento; ergotrate IM.",
      "(C) Aborto em curso; internação para AMIU (aspiração manual intrauterina).",
      "(D) Aborto incompleto; internação para curetagem uterina.",
      "(E) Ameaça de abortamento; novo ultrassom transvaginal em cerca de 10 dias."
    ],
    "correctAnswer": 4,
    "explanation": "Sangramento discreto com colo impérvio caracteriza ameaça de abortamento enquanto não houver critério de gestação inviável.\n\nPara confirmar perda gestacional por ultrassonografia exige-se CCN ≥ 7 mm sem batimentos ou saco gestacional ≥ 25 mm sem embrião. Aqui há embrião de 3 mm sem batimentos — abaixo do corte de 7 mm — e a idade gestacional pela DUM é incerta (sem ultrassom prévio). O achado é suspeito, mas não diagnóstico: repete-se a ultrassonografia em 7–14 dias.",
    "commentary": "Aborto retido (A): ainda não preenche critério de óbito embrionário (CCN < 7 mm).\n\nErgotrate (B): não tem papel na ameaça de abortamento; uterotônico é usado após esvaziamento.\n\nAborto em curso (C): cursaria com colo dilatado, sangramento intenso e cólicas.\n\nAborto incompleto (D): exige eliminação parcial do conteúdo, colo aberto e restos ovulares.",
    "reference": "SRU Consensus — Diagnostic Criteria for Nonviable Pregnancy Early in the First Trimester (NEJM, 2013) / FEBRASGO — Abortamento",
    "tags": [
      "ameaça de abortamento",
      "ultrassonografia obstétrica",
      "perda gestacional"
    ]
  },
  {
    "id": "hosbos2025-47",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "O ácido fólico é um importante e essencial micronutriente envolvido na síntese de ácido nucleico, aminoácidos, divisão celular, crescimento de tecidos e metilação do DNA. Sobre a suplementação de ácido fólico na gestação, assinale a alternativa correta.",
    "options": [
      "(A) É recomendada a suplementação na dose de 400 mcg/dia para pacientes em uso de anticonvulsivantes.",
      "(B) A Organização Mundial da Saúde recomenda a suplementação de 5 mg/dia.",
      "(C) A deficiência de ácido fólico pode aumentar o risco de defeito na formação da parede abdominal do feto.",
      "(D) Novos estudos propõem que o ácido fólico seja suplementado na sua forma ativa (o L metilfolato), devido à alta prevalência de pacientes com polimorfismo genético da enzima metileno tetra-hidro-folato redutase (MTHFR).",
      "(E) O ácido fólico é conhecido também como vitamina B6, uma vitamina hidrossolúvel."
    ],
    "correctAnswer": 3,
    "explanation": "O ácido fólico precisa ser convertido na forma ativa (5-metiltetra-hidrofolato) pela enzima MTHFR. Polimorfismos dessa enzima são comuns, e alguns estudos propõem suplementar o L-metilfolato para contornar essa limitação — foi o que a banca considerou correto, porque o enunciado só diz que \"novos estudos propõem\".\n\nNa prática, as diretrizes (OMS, MS, FEBRASGO) seguem recomendando ácido fólico 400 µg/dia desde pelo menos 30 dias antes da concepção até 12 semanas, porque a eficácia na prevenção de defeitos do tubo neural foi comprovada com ácido fólico.",
    "commentary": "400 µg em usuárias de anticonvulsivante (A): alto risco (anticonvulsivantes, defeito do tubo neural prévio) recebe 4–5 mg/dia.\n\nOMS recomenda 5 mg/dia (B): a OMS recomenda 400 µg/dia na população geral.\n\nDefeito de parede abdominal (C): a deficiência de folato se associa a defeitos do tubo neural.\n\nVitamina B6 (E): ácido fólico é a vitamina B9; B6 é a piridoxina.",
    "reference": "WHO recommendations on antenatal care (2016) / FEBRASGO — Suplementação na gestação",
    "tags": [
      "ácido fólico",
      "MTHFR",
      "pré-natal",
      "defeitos do tubo neural"
    ]
  },
  {
    "id": "hosbos2025-48",
    "topography": "5.2",
    "topic": "Placenta prévia",
    "module": "Ginecologia e Obstetrícia",
    "text": "G.V.B., 34 anos, GIII PII 2C A0, idade gestacional de 37 semanas, deu entrada no pronto-socorro obstétrico com queixa de sangramento vaginal vermelho-vivo, sem outras queixas. Ao exame físico: PA = 110 x 70 mmHg, AU = 35 cm, BCF = 130 bpm, dinâmica uterina ausente, especular: sangramento vermelho-vivo exteriorizando-se pelo orifício externo do colo uterino De acordo com o caso, assinale a alternativa que apresenta o diagnóstico mais provável.",
    "options": [
      "(A) Placenta prévia.",
      "(B) Descolamento prematuro de placenta.",
      "(C) Rotura de vasa prévia.",
      "(D) Rotura uterina.",
      "(E) Rotura de seio venoso."
    ],
    "correctAnswer": 0,
    "explanation": "Sangramento vaginal vermelho-vivo, indolor, sem contrações, com tônus normal e feto bem, em multípara com duas cesáreas anteriores (fator de risco importante): placenta prévia.\n\nO toque vaginal deve ser evitado até a localização placentária por ultrassonografia.",
    "commentary": "DPP (B): sangramento escuro, dor, hipertonia uterina e frequentemente sofrimento fetal e hipertensão.\n\nVasa prévia (C): sangramento na rotura das membranas com sofrimento fetal agudo imediato.\n\nRotura uterina (D): dor súbita intensa, parada das contrações, perda dos batimentos e partes fetais palpáveis.\n\nRotura de seio marginal (E): diagnóstico de exclusão, com sangramento discreto e placenta normoinserida.",
    "reference": "FEBRASGO — Placenta prévia e acretismo placentário (Protocolo, 2021)",
    "tags": [
      "placenta prévia",
      "sangramento da segunda metade",
      "cesárea anterior"
    ]
  },
  {
    "id": "hosbos2025-49",
    "topography": "5.2",
    "topic": "Placenta prévia",
    "module": "Ginecologia e Obstetrícia",
    "text": "G.V.B., 34 anos, GIII PII 2C A0, idade gestacional de 37 semanas, deu entrada no pronto-socorro obstétrico com queixa de sangramento vaginal vermelho-vivo, sem outras queixas. Ao exame físico: PA = 110 x 70 mmHg, AU = 35 cm, BCF = 130 bpm, dinâmica uterina ausente, especular: sangramento vermelho-vivo exteriorizando-se pelo orifício externo do colo uterino. Assinale a alternativa que apresenta a conduta correta.",
    "options": [
      "(A) Indução do trabalho de parto com misoprostol.",
      "(B) Passagem de sonda de Foley para a dilatação do colo uterino e a interrupção do sangramento.",
      "(C) Indução do trabalho de parto com ocitocina.",
      "(D) Cesárea.",
      "(E) Expectante e controle do sangramento."
    ],
    "correctAnswer": 3,
    "explanation": "Placenta prévia com sangramento em gestação de termo (37 semanas): a conduta é resolução por cesárea. Duas cesáreas anteriores aumentam o risco de acretismo, o que deve ser avaliado e preparado (reserva de sangue, equipe experiente).",
    "commentary": "Indução com misoprostol (A): contraindicada — prostaglandina em útero com duas cicatrizes e placenta prévia.\n\nSonda de Foley (B): contraindicada na placenta prévia; não interrompe sangramento.\n\nIndução com ocitocina (C): parto vaginal só seria cogitado em placenta baixa a mais de 2 cm do orifício interno, e não com duas cesáreas.\n\nConduta expectante (E): reservada para gestações pré-termo com sangramento controlado; no termo, resolve-se.",
    "reference": "FEBRASGO — Placenta prévia e acretismo placentário (Protocolo, 2021)",
    "tags": [
      "placenta prévia",
      "cesárea",
      "conduta obstétrica"
    ]
  },
  {
    "id": "hosbos2025-50",
    "topography": "5.2",
    "topic": "Rotura prematura de membranas",
    "module": "Ginecologia e Obstetrícia",
    "text": "R.T.V., 38 anos, GII PI 1N A0, IG 35 semanas, HIV positivo, deu entrada no pronto-socorro queixando-se de perda de líquido via vaginal há 1 hora. Em uso de terapia tríplice antiretroviral, há 3 meses. CD4 180/mcL, carga viral 2200 cópias/mL. Sem outras queixas. Ao exame físico: dinâmica uterina ausente, toque vaginal: colo impérvio, grosso e posterior. Especular: saída de líquido claro sem grumos pelo orifício externo do colo uterino.",
    "options": [
      "(A) AZT dose de ataque e manutenção e parto cesariano.",
      "(B) Administrar corticoide para maturação pulmonar fetal, AZT dose de ataque e inibição do trabalho de parto.",
      "(C) Administrar ampicilina e AZT dose de ataque e de manutenção e indução do trabalho de parto com misoprostol.",
      "(D) Administrar sulfato de magnésio e AZT dose de ataque e de manutenção e parto cesariano 3 horas após.",
      "(E) Internação, antibioticoprofilaxia com ampicilina por 24 horas, controle de ILA e vitalidade fetal até 37 semanas de idade gestacional."
    ],
    "correctAnswer": 0,
    "explanation": "Gestante com HIV e carga viral > 1.000 cópias/mL após 34 semanas tem indicação de cesárea para reduzir transmissão vertical. Com rotura de membranas, o tempo de bolsa rota aumenta o risco de transmissão, então a cesárea é feita assim que possível.\n\nAZT intravenoso: dose de ataque de 2 mg/kg na primeira hora e manutenção de 1 mg/kg/h até o clampeamento do cordão (idealmente iniciado 3 horas antes da cesárea, sem atrasar o parto na bolsa rota).",
    "commentary": "Corticoide e inibição do trabalho de parto (B): com 35 semanas não há tocólise nem corticoide de rotina; prolongar a bolsa rota aumenta a transmissão.\n\nIndução com misoprostol (C): com carga viral > 1.000, a via vaginal está contraindicada.\n\nSulfato de magnésio (D): neuroproteção é para menos de 32 semanas.\n\nConduta expectante até 37 semanas (E): contraindicada pelo risco de transmissão vertical e infecção.",
    "reference": "Ministério da Saúde — PCDT para Prevenção da Transmissão Vertical de HIV, Sífilis e Hepatites Virais (2022)",
    "tags": [
      "HIV na gestação",
      "transmissão vertical",
      "AZT",
      "rotura prematura de membranas"
    ]
  },
  {
    "id": "hosbos2025-51",
    "topography": "5.2",
    "topic": "Gravidez ectópica",
    "module": "Ginecologia e Obstetrícia",
    "text": "F.L.D., 37 anos, prole constituída, deu entrada no pronto-socorro com sangramento vaginal escuro em pequena quantidade, além de dor de forte intensidade em hipogástrio, de início súbito. História de DUM há 2 meses. Ao exame físico: PA = 80 x 50 mmHg, hipocorada ++/4+. Abdome: dor à descompressão brusca positiva. Toque vaginal bimanual: colo amolecido, impérvio, fundo uterino intrapélvico. Assinale a alternativa que apresenta a primeira hipótese diagnóstica.",
    "options": [
      "(A) Apendicite aguda.",
      "(B) Torção ovariana.",
      "(C) Gestação molar.",
      "(D) Abortamento em curso.",
      "(E) Gestação ectópica rota."
    ],
    "correctAnswer": 4,
    "explanation": "Atraso menstrual de 2 meses, dor súbita intensa, sangramento escuro discreto, hipotensão, palidez e irritação peritoneal: gestação ectópica rota com hemoperitônio e choque hemorrágico.\n\nA conduta é estabilização e cirurgia imediata (salpingectomia, por laparotomia na instabilidade).",
    "commentary": "Apendicite (A): não explica atraso menstrual, choque hemorrágico e sangramento vaginal.\n\nTorção ovariana (B): dor súbita, mas sem atraso menstrual nem choque hemorrágico.\n\nMola (C): útero aumentado para a idade gestacional, sangramento e hiperêmese; não causa hemoperitônio.\n\nAbortamento em curso (D): colo dilatado, sangramento vaginal abundante; a hipotensão seria proporcional ao sangramento externo, que aqui é pequeno.",
    "reference": "FEBRASGO — Gravidez ectópica (Protocolo nº 22, 2021)",
    "tags": [
      "gravidez ectópica",
      "abdome agudo hemorrágico",
      "choque hemorrágico"
    ]
  },
  {
    "id": "hosbos2025-52",
    "topography": "5.1",
    "topic": "Climatério e menopausa",
    "module": "Ginecologia e Obstetrícia",
    "text": "E.T.O., 53 anos, vem à consulta ambulatorial referindo fogachos intensos, irritabilidade, insônia e falha de memória. Hipertensão crônica controlada, em uso de IECA. IMC 30 kg/m². Hipercolesterolemia. Sem outras comorbidades. Nega alteração de libido. Histerectomia anterior por miomatose uterina. De acordo com o caso, assinale a alternativa que apresenta o tratamento correto.",
    "options": [
      "(A) Estrogênio e progesterona via oral.",
      "(B) Estrogênio, progesterona e testosterona via transdérmica.",
      "(C) Estrogênio e testosterona via transdérmica.",
      "(D) Estrogênio via transdérmica.",
      "(E) Cloridrato de desvenlafaxina via oral."
    ],
    "correctAnswer": 3,
    "explanation": "Mulher histerectomizada não precisa de progestagênio (ele serve só para proteger o endométrio), então a terapia hormonal é com estrogênio isolado.\n\nPela obesidade, hipertensão e dislipidemia, prefere-se a via transdérmica, que evita a primeira passagem hepática, tem menor risco de tromboembolismo e efeito neutro sobre triglicérides e pressão.",
    "commentary": "Estrogênio + progesterona oral (A): progesterona desnecessária sem útero; a via oral é pior para quem tem risco cardiovascular.\n\nCom testosterona (B e C): testosterona é indicada apenas no transtorno do desejo sexual hipoativo; a paciente nega alteração da libido.\n\nDesvenlafaxina (E): alternativa não hormonal quando há contraindicação à terapia hormonal, o que não é o caso.",
    "reference": "Consenso Brasileiro de Terapêutica Hormonal da Menopausa (SOBRAC, 2018) / The 2022 Hormone Therapy Position Statement (NAMS)",
    "tags": [
      "climatério",
      "terapia hormonal",
      "estrogênio transdérmico",
      "histerectomia"
    ]
  },
  {
    "id": "hosbos2025-53",
    "topography": "5.1",
    "topic": "Mioma uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Miomas ou leiomiomas são tumores genitais mais frequentes entre as mulheres, podendo ser encontrados em cerca de 70% delas, muitas vezes acidentalmente, em ultrassonografia de rotina. Sobre a abordagem dos miomas uterinos, assinale a alternativa correta.",
    "options": [
      "(A) A embolização das artérias uterinas é um procedimento invasivo por cirurgia aberta, que poupa o útero.",
      "(B) Como os análogos de GnRH têm efeito semelhante ao da menopausa, devem ser utilizados apenas em mulheres com mais de 45 anos de idade.",
      "(C) Na ablação por radiofrequência, o dano tecidual é grande, gerando desfechos ruins relacionados à possibilidade de gestação pós-procedimento.",
      "(D) Diante perfuração uterina com energia na miomectomia por histeroscopia, deve-se sempre realizar laparoscopia para avaliação de lesões de alças intestinais.",
      "(E) Quando o volume uterino é maior do que 100 cc, está contraindicada a histerectomia minimamente invasiva."
    ],
    "correctAnswer": 3,
    "explanation": "Na histeroscopia cirúrgica, a perfuração com instrumento energizado (alça elétrica, laser) pode queimar alças intestinais, bexiga ou vasos sem que se veja. Por isso a perfuração com energia exige sempre laparoscopia (ou laparotomia) para inspecionar a cavidade; perfurações mecânicas pequenas, sem energia, podem ser observadas.",
    "commentary": "Embolização por cirurgia aberta (A): a embolização é procedimento percutâneo, por radiologia intervencionista.\n\nAnálogos de GnRH só acima de 45 anos (B): são usados por tempo limitado em qualquer idade, por exemplo para reduzir o mioma e corrigir anemia antes da cirurgia.\n\nRadiofrequência com dano grande (C): a ablação por radiofrequência é minimamente invasiva e preserva o útero; há gestações descritas após o procedimento.\n\nÚtero > 100 cc contraindica cirurgia minimamente invasiva (E): úteros bem maiores podem ser retirados por laparoscopia ou via vaginal.",
    "reference": "FEBRASGO — Miomatose uterina (Protocolo, 2021) / AAGL Practice Report: Practice Guidelines for the Management of Hysteroscopic Distending Media",
    "tags": [
      "mioma uterino",
      "histeroscopia",
      "perfuração uterina"
    ]
  },
  {
    "id": "hosbos2025-54",
    "topography": "5.1",
    "topic": "Climatério e menopausa",
    "module": "Ginecologia e Obstetrícia",
    "text": "Diversos mecanismos biológicos estão potencialmente ligados à relação entre alterações hormonais da pós-menopausa, comprometimento cognitivo e início da demência. Assinale a alternativa que apresenta o hormônio que possui diretamente grande impacto nos processos neurais por meio de ações genômicas e não genômicas, incluindo alterações na espinogênese e sinaptogênese, no número neuronal e nas taxas metabólicas de glicose.",
    "options": [
      "(A) Estrogênio.",
      "(B) Progesterona.",
      "(C) FSH.",
      "(D) LH.",
      "(E) Testosterona."
    ],
    "correctAnswer": 0,
    "explanation": "O estrogênio tem receptores amplamente distribuídos no cérebro (hipocampo, córtex pré-frontal). Por ações genômicas e não genômicas, ele estimula a formação de espinhas dendríticas e sinapses, preserva neurônios e aumenta o metabolismo cerebral da glicose.\n\nA queda do estrogênio na menopausa é o principal mecanismo hormonal estudado na relação entre menopausa e declínio cognitivo.",
    "commentary": "Progesterona (B): tem ações neuroativas (por metabólitos como a alopregnanolona), mas não é o hormônio central nesse processo.\n\nFSH (C) e LH (D): sobem na menopausa; há estudos experimentais, mas sem o papel direto descrito.\n\nTestosterona (E): tem efeitos neurais menores nas mulheres.",
    "reference": "The 2022 Hormone Therapy Position Statement of The North American Menopause Society",
    "tags": [
      "menopausa",
      "estrogênio",
      "cognição",
      "demência"
    ]
  },
  {
    "id": "hosbos2025-55",
    "topography": "5.1",
    "topic": "Vaginose bacteriana",
    "module": "Ginecologia e Obstetrícia",
    "text": "A vaginose bacteriana é causa de vulvovaginite. Sobre essa alteração, assinale a alternativa correta.",
    "options": [
      "(A) O tratamento está indicado somente para pacientes sintomáticos.",
      "(B) Os parceiros sexuais devem ser tratados com metronidazol 500 mg de 12/12 horas por 7 dias.",
      "(C) A paciente deve orientada a evitar consumo de álcool por cerca de 24 - 72 horas após a administração de metronidazol.",
      "(D) A secreção vaginal é caracterizada por corrimento vaginal homogêneo, com pH < 4,5.",
      "(E) É considerada infecção sexualmente transmissível."
    ],
    "correctAnswer": 2,
    "explanation": "O metronidazol tem efeito semelhante ao do dissulfiram (antabuse): com álcool, provoca náuseas, vômitos, rubor e taquicardia. Por isso a paciente deve evitar bebida alcoólica durante o tratamento e por 24–72 horas após a última dose.",
    "commentary": "Tratar só sintomáticas (A): também se tratam gestantes sintomáticas e mulheres que vão passar por procedimentos ginecológicos (inserção de DIU, histerectomia).\n\nTratar parceiros (B): a vaginose não é IST e o tratamento do parceiro não reduz recorrência.\n\npH < 4,5 (D): na vaginose o pH vaginal é > 4,5; o corrimento é homogêneo, acinzentado e com odor de peixe.\n\nIST (E): é um desequilíbrio da microbiota vaginal (perda de lactobacilos), associado à atividade sexual, mas não é IST.",
    "reference": "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022)",
    "tags": [
      "vaginose bacteriana",
      "metronidazol",
      "vulvovaginites"
    ]
  },
  {
    "id": "hosbos2025-56",
    "topography": "5.1",
    "topic": "Câncer de endométrio",
    "module": "Ginecologia e Obstetrícia",
    "text": "Dentre as alternativas a seguir, assinale a que apresenta a principal causa de sangramento uterino pós-menopausa.",
    "options": [
      "(A) Pólipo endometrial.",
      "(B) Cisto ovariano.",
      "(C) Uso de tamoxifeno.",
      "(D) Mioma submucoso.",
      "(E) Atrofia endometrial."
    ],
    "correctAnswer": 4,
    "explanation": "A atrofia endometrial é a causa mais comum de sangramento pós-menopausa (cerca de 60–80% dos casos). Ainda assim, todo sangramento pós-menopausa deve ser investigado para excluir câncer de endométrio (cerca de 10% dos casos), com ultrassonografia transvaginal (espessura > 4 mm investigar) e, se necessário, histeroscopia com biópsia.",
    "commentary": "Pólipo endometrial (A): causa frequente, mas menos que a atrofia.\n\nCisto ovariano (B): não é causa de sangramento uterino.\n\nTamoxifeno (C): aumenta risco de pólipos, hiperplasia e câncer de endométrio, mas só em usuárias.\n\nMioma submucoso (D): mais comum na menacme; tende a regredir após a menopausa.",
    "reference": "FEBRASGO — Sangramento uterino pós-menopausa / ACOG Committee Opinion nº 734 (2018)",
    "tags": [
      "sangramento pós-menopausa",
      "atrofia endometrial",
      "câncer de endométrio"
    ]
  },
  {
    "id": "hosbos2025-57",
    "topography": "5.1",
    "topic": "Sangramento uterino anormal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Adolescente de 18 anos de idade, sexo feminino, ciclos menstruais regulares, DUM: há 10 dias, MAC: DIU de cobre, sem comorbidades. Deu entrada no pronto-socorro ginecológico com sangramento vaginal em grande quantidade. Atividade sexual recente. Nega episódio semelhante prévio. Nega dor tipo cólica. PA = 90 x 50 mmHg, FC = 105 bpm, TAX = 36 graus Celsius. Assinale a alternativa que apresenta a conduta correta e o diagnóstico mais provável.",
    "options": [
      "(A) Ultrassom transvaginal; torção ovariana.",
      "(B) Beta HCG quantitativo; gestação ectópica rota.",
      "(C) Beta HCG quantitativo; gestação molar.",
      "(D) Toque vaginal; abortamento em curso.",
      "(E) Exame especular; laceração vaginal."
    ],
    "correctAnswer": 4,
    "explanation": "Jovem com sangramento abundante e instabilidade hemodinâmica logo após relação sexual, sem cólicas, ciclos regulares e usuária de DIU: a primeira hipótese é laceração vaginal por trauma coital. O primeiro passo é o exame especular, que localiza a lesão e permite a sutura hemostática.",
    "commentary": "Ultrassonografia; torção ovariana (A): torção causa dor, não sangramento vaginal abundante.\n\nβ-hCG; ectópica rota (B): o sangramento da ectópica rota é interno; o vaginal é discreto e escuro.\n\nβ-hCG; mola (C): sem atraso menstrual (DUM há 10 dias), improvável.\n\nToque; abortamento (D): não há atraso menstrual nem cólica; o especular vem antes do toque para ver a fonte do sangramento.",
    "reference": "Berek & Novak's Gynecology, 16ª ed. — Trauma genital",
    "tags": [
      "laceração vaginal",
      "sangramento genital",
      "exame especular"
    ]
  },
  {
    "id": "hosbos2025-58",
    "topography": "5.1",
    "topic": "Câncer de colo uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "R.G.B., 27 anos, submetida à colpocitologia do colo uterino, com diagnóstico de lesão intraepitelial escamosa de baixo grau. Assinale a alternativa que apresenta a conduta adequada, de acordo com o Ministério da Saúde e o Instituto Nacional de Câncer de 2016 (Inca-MS).",
    "options": [
      "(A) Nova coleta de colpocitologia em 6 meses.",
      "(B) Acompanhamento anual.",
      "(C) Vacina HPV esquema de 2 doses.",
      "(D) Colposcopia.",
      "(E) CAF (cauterização de alta frequência)."
    ],
    "correctAnswer": 0,
    "explanation": "Pelas Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (INCA, 2016), mulheres com 25 anos ou mais com lesão intraepitelial escamosa de baixo grau (LSIL) repetem a citologia em 6 meses.\n\nSe a citologia de repetição vier normal duas vezes seguidas, volta-se ao rastreamento trienal; se persistir alterada, encaminha-se à colposcopia.",
    "commentary": "Acompanhamento anual (B): mulheres com menos de 25 anos e LSIL repetem a citologia em 3 anos; a partir de 25, em 6 meses.\n\nVacina HPV (C): não é conduta para lesão já estabelecida; aos 27 anos, a vacina pelo SUS também não está prevista nessa situação.\n\nColposcopia imediata (D): reservada para ASC-H, HSIL, AGC ou LSIL persistente.\n\nCAF (E): tratamento excisional para lesão de alto grau confirmada.",
    "reference": "INCA — Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (2016)",
    "tags": [
      "câncer de colo uterino",
      "rastreamento",
      "LSIL",
      "citologia oncótica"
    ]
  },
  {
    "id": "hosbos2025-59",
    "topography": "6.1",
    "topic": "Vasculites",
    "module": "Ginecologia e Obstetrícia",
    "text": "E.N.F., 27 anos de idade, vem ao pronto-socorro ginecológico queixando-se de úlcera genital dolorosa em lábio menor de cerca de 1 cm, sem padrão vesiculoso. Refere úlceras aftosas recorrentes no último ano, além de diagnóstico prévio de uveíte. De acordo com o caso clínico, assinale a alternativa que apresenta o provável diagnóstico",
    "options": [
      "(A) Cancro mole.",
      "(B) Donovanose.",
      "(C) Sífilis primária.",
      "(D) Úlcera de Lipschütz.",
      "(E) Doença de Behçet."
    ],
    "correctAnswer": 4,
    "explanation": "Úlcera genital dolorosa, aftas orais recorrentes e uveíte compõem a doença de Behçet, uma vasculite de vasos de calibre variável. Os critérios internacionais (ICBD) pontuam aftas orais, úlceras genitais e lesões oculares, além de lesões cutâneas, neurológicas, vasculares e patergia.",
    "commentary": "Cancro mole (A): úlceras múltiplas, dolorosas, com fundo purulento e linfonodo que fistuliza; sem aftas nem uveíte.\n\nDonovanose (B): úlcera indolor, crônica, vermelho-viva, que sangra fácil.\n\nSífilis primária (C): cancro duro, único e INDOLOR.\n\nÚlcera de Lipschütz (D): úlcera aguda em adolescentes, geralmente após infecção viral (EBV), sem recorrência nem uveíte.",
    "reference": "International Criteria for Behçet's Disease (ICBD, 2014) / EULAR recommendations for Behçet's syndrome (2018)",
    "tags": [
      "doença de Behçet",
      "úlcera genital",
      "uveíte",
      "vasculites"
    ]
  },
  {
    "id": "hosbos2025-60",
    "topography": "12",
    "topic": "Cuidados paliativos",
    "module": "Ginecologia e Obstetrícia",
    "text": "G.B.D., 63 anos, trata um câncer de ovário há 11 meses. Já não fala, alimenta-se por sonda e quase não responde a estímulos. A fase terminal da doença levou a família e a própria paciente a aceitarem os cuidados paliativos. A respeito dos cuidados paliativos e terminalidade, assinale a alternativa correta.",
    "options": [
      "(A) A paciente deve permanecer sedada para evitar a angústia dos familiares com seu sofrimento e deve receber terapias desproporcionais para manutenção da vida.",
      "(B) A participação da família e a obtenção de consentimento no processo decisório da paliação devem ser evitadas pela equipe de saúde responsável pelo paciente.",
      "(C) O médico ginecologista/oncologista deve evitar quaisquer intervenções de abordagem espiritual ou religiosa com paciente em cuidados paliativos, uma vez que tal ação poderá causar constrangimento ao indivíduo, à família ou aos cuidadores.",
      "(D) O cuidado paliativo deve ser centrado na doença, sendo que a prioridade passa a ser o controle glicêmico, profilaxias e exames.",
      "(E) O cuidado paliativo deve ser direcionado à paciente e sua família, e torna-se necessário frente ao quadro de doenças oncológicas, cuja perspectiva de cura torna-se restrita, e a ameaça à vida é iminente."
    ],
    "correctAnswer": 4,
    "explanation": "Cuidados paliativos são centrados na pessoa e em sua família, não na doença. Devem ser oferecidos desde o diagnóstico de doença que ameaça a vida e se intensificam quando o tratamento modificador perde a capacidade de curar, com controle de sintomas, atenção psicossocial e espiritual e respeito à autonomia.",
    "commentary": "Sedação de rotina e terapias desproporcionais (A): sedação paliativa tem indicação própria (sintoma refratário) e terapias desproporcionais configuram distanásia.\n\nEvitar participação da família (B): a família participa das decisões, e o consentimento é parte do processo.\n\nEvitar abordagem espiritual (C): a dimensão espiritual faz parte do cuidado paliativo, respeitando as crenças do paciente.\n\nCentrado na doença com controle glicêmico e exames (D): o foco é o conforto; medidas sem benefício são desescalonadas.",
    "reference": "Manual de Cuidados Paliativos ANCP, 2ª ed. / Resolução CFM nº 1.805/2006",
    "tags": [
      "cuidados paliativos",
      "terminalidade",
      "bioética",
      "ginecologia oncológica"
    ]
  },
  {
    "id": "hosbos2025-61",
    "topography": "14",
    "topic": "Parada cardiorrespiratória",
    "module": "Pediatria",
    "text": "Um médico observou à sua frente, no ponto de ônibus, durante o trajeto para seu plantão, que uma criança, de aproximadamente 5 anos, subitamente agachou-se, bastante pálida e sudorética, e desfaleceu. Em posse de sua máscara para ventilação boca-máscara, ele iniciou o primeiro atendimento à criança. Ela estava inconsciente, não apresentava movimentos torácicos e nem pulso carotídeo palpável. Solicitou, então, que alguém acionasse o Serviço de atendimento médico de urgência (SAMU) para que trouxesse um DEA (desfibrilador externo automático). Considerando a situação apresentada, qual das seguintes afirmativas é correta sobre a conduta a ser realizada?",
    "options": [
      "(A) Realizar compressões torácicas de forma contínua, realizando concomitantemente uma ventilação a cada 2 ou 3 segundos, caso apareça um segundo socorrista.",
      "(B) Realizar compressões torácicas e ventilação com a máscara, mantendo a relação de duas ventilações seguidas por 30 compressões.",
      "(C) Realizar compressões torácicas em uma frequência mínima de 120 movimentos por minuto e máxima de 150 movimentos por minuto.",
      "(D) Realizar compressões torácicas com pelo menos 6 e, no máximo, 8 centímetros de profundidade.",
      "(E) Após chegada do DEA, e instalação das pás, manter as compressões torácicas e ventilação por, pelo menos, 2 minutos."
    ],
    "correctAnswer": 1,
    "explanation": "Criança inconsciente, sem respiração e sem pulso: PCR. Um socorrista leigo ou profissional sozinho faz ciclos de 30 compressões e 2 ventilações (com 2 socorristas profissionais, 15:2), com compressões de 100–120/min e profundidade de cerca de 5 cm (1/3 do diâmetro anteroposterior do tórax).\n\nA relação 30:2 com ventilação por máscara é a alternativa correta (a ordem em que a alternativa cita os números não muda o ciclo).",
    "commentary": "Compressões contínuas com ventilação a cada 2–3 s (A): esse ritmo é usado com via aérea avançada; sem ela, mantém-se 30:2 (ou 15:2 com dois socorristas).\n\n120 a 150 por minuto (C): a frequência é de 100 a 120 por minuto.\n\n6 a 8 cm de profundidade (D): na criança, cerca de 5 cm; 5–6 cm é a profundidade do adulto.\n\nManter RCP por 2 minutos após instalar o DEA (E): instaladas as pás, o DEA analisa o ritmo imediatamente; a RCP é retomada logo após o choque ou a análise.",
    "reference": "AHA Guidelines for CPR and ECC — Pediatric Basic Life Support (2020/2025)",
    "tags": [
      "parada cardiorrespiratória",
      "suporte básico de vida",
      "RCP pediátrica"
    ]
  },
  {
    "id": "hosbos2025-62",
    "topography": "11",
    "topic": "Desidratação",
    "module": "Pediatria",
    "text": "Lactente, sexo masculino, com 18 meses, previamente hígido, é levado à Unidade de Pronto Atendimento com quadro de diarreia, com fezes líquidas sem muco ou sangue. Além disso, apresenta vômitos e febre há 24 horas. Ao exame físico, o paciente está sonolento, hipotônico, com olhos fundos, mucosas secas e há ausência de lágrimas. O tempo de enchimento capilar é de mais de 4 segundos. Nesse caso, qual tratamento inicial deve ser ministrado, segundo o fluxograma mais recente do Ministério da Saúde, de 2023?",
    "options": [
      "(A) Solução de reidratação oral de 50 a 100 mL/kg por via oral, por um período de 4 a 6 horas.",
      "(B) Solução de reidratação oral de 50 a 100 mL/kg por gastróclise, por um período de 4 a 6 horas.",
      "(C) Soro fisiológico a 0,9% 30 mL/kg por via endovenosa em 30 minutos.",
      "(D) Soro fisiológico a 0,9% 20 mL/kg por via endovenosa em 1 hora.",
      "(E) Solução de Ringer-Lactato, 50 mL/kg por via endovenosa em 1 hora."
    ],
    "correctAnswer": 2,
    "explanation": "Sonolência, hipotonia, olhos fundos, ausência de lágrimas, mucosas secas e enchimento capilar > 4 segundos: desidratação grave (choque) — Plano C.\n\nNo Plano C, a criança com 1 ano ou mais recebe uma fase rápida de soro fisiológico 0,9% 30 mL/kg em 30 minutos, seguida de 70 mL/kg em 2 horas e 30 minutos, com reavaliação frequente. Menores de 1 ano recebem a mesma fase em ritmo mais lento (30 mL/kg em 1 hora e 70 mL/kg em 5 horas). Assim que a criança puder beber, oferece-se também SRO.",
    "commentary": "SRO via oral (A): Plano B, para desidratação sem sinais de gravidade.\n\nSRO por gastróclise (B): alternativa no Plano B quando há vômitos persistentes, não no choque.\n\nSF 20 mL/kg em 1 hora (D): em choque, a expansão é feita em 30 minutos; em 1 hora é lento demais.\n\nRinger 50 mL/kg em 1 hora (E): volume e velocidade fora do protocolo.",
    "reference": "Ministério da Saúde — Manejo do paciente com diarreia (cartaz/fluxograma, 2023)",
    "tags": [
      "desidratação",
      "diarreia aguda",
      "plano C",
      "choque hipovolêmico"
    ]
  },
  {
    "id": "hosbos2025-63",
    "topography": "11",
    "topic": "Obesidade infantil",
    "module": "Pediatria",
    "text": "Pré-escolar, sexo masculino, com 3 anos e sete meses de idade, procura a Unidade Básica de Saúde para a realização de uma consulta pediátrica de rotina. Durante a antropometria, verifica-se, pela interpretação da atual curva de crescimento de referência, peso para idade no escore-z: +2,60, estatura para idade no escore-z: -0,70 e índice de massa corporal no escore-z: +2,08. A partir dos dados observados, a conduta médica correta para dar prosseguimento ao cuidado com a criança é",
    "options": [
      "(A) tranquilizar a mãe, pois a criança apresenta peso e estatura adequados para sua idade.",
      "(B) solicitar radiografia de punho e mão, pois a criança apresenta baixa estatura para sua idade.",
      "(C) realizar encaminhamento para endocrinopediatra, pois a criança apresenta sobrepeso e baixa estatura.",
      "(D) orientar acerca de estilo de vida, pois a criança se encontra com sobrepeso, apesar de estar com estatura adequada.",
      "(E) introduzir dieta com restrições, pois a criança é classificada como obesa."
    ],
    "correctAnswer": 3,
    "explanation": "Para crianças de 0 a 5 anos (curvas da OMS), o IMC para idade classifica: escore-z > +1 a +2 risco de sobrepeso; > +2 a +3 sobrepeso; > +3 obesidade. Estatura para idade ≥ −2 é adequada.\n\nIMC z +2,08 (sobrepeso) com estatura z −0,70 (adequada): a conduta é orientação sobre alimentação, atividade física e estilo de vida, com acompanhamento.",
    "commentary": "Peso e estatura adequados (A): o IMC está na faixa de sobrepeso.\n\nRadiografia para baixa estatura (B): baixa estatura é z < −2; aqui está adequada.\n\nEncaminhar ao endocrinologista por sobrepeso e baixa estatura (C): a estatura é normal e o sobrepeso é manejado na atenção primária.\n\nDieta restritiva por obesidade (E): obesidade em menores de 5 anos é z > +3; e dietas restritivas não são recomendadas na infância.",
    "reference": "Ministério da Saúde — Orientações para a coleta e análise de dados antropométricos (SISVAN) / SBP — Manual de Obesidade na Infância e Adolescência (2019)",
    "tags": [
      "sobrepeso",
      "curvas de crescimento",
      "escore-z",
      "puericultura"
    ]
  },
  {
    "id": "hosbos2025-64",
    "topography": "10",
    "topic": "Sífilis",
    "module": "Pediatria",
    "text": "Lactente, sexo masculino, com 3 meses, é trazido ao ambulatório de Pediatria. A mãe refere que, há um mês, a criança iniciou coriza mucossanguinolenta e irritabilidade com choro fácil. Ao nascimento, o peso foi de 2100g, o perímetro cefálico foi de 34 cm e o comprimento de 48cm. Ao exame físico verifica-se dor à mobilização de braço esquerdo com choro intenso, coriza mucossanguinolenta bilateral e erosões em lábio superior. A criança apresenta palidez cutâneo-mucosa +++/4+ e fígado a 3 cm do rebordo costal direito. Considerando a principal hipótese diagnóstica, quais são, respectivamente, o exame a ser solicitado e o resultado mais provável?",
    "options": [
      "(A) Tomografia computadorizada de crânio; pólipos em seios da face.",
      "(B) Tomografia computadorizada de crânio; calcificações cranianas periventriculares.",
      "(C) Radiografia simples de crânio; suturas cranianas precocemente soldadas.",
      "(D) Radiografia de ossos longos; lesões osteolíticas e espessamentos periostais.",
      "(E) Tomografia de abdome; microinfartos esplênicos."
    ],
    "correctAnswer": 3,
    "explanation": "Lactente de 3 meses com rinite mucossanguinolenta (\"coriza sifilítica\"), lesões periorais, hepatomegalia, anemia e dor à mobilização do braço (pseudoparalisia de Parrot): sífilis congênita precoce.\n\nO exame que reforça o diagnóstico é a radiografia de ossos longos, que mostra periostite, osteocondrite e lesões osteolíticas metafisárias (sinal de Wimberger na tíbia).",
    "commentary": "TC de crânio com pólipos nasais (A): os pólipos não fazem parte do quadro.\n\nCalcificações periventriculares (B): típicas do citomegalovírus congênito (na toxoplasmose são difusas).\n\nSuturas soldadas (C): craniossinostose, sem relação com o quadro.\n\nMicroinfartos esplênicos (E): não são achado da sífilis congênita.",
    "reference": "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022) — Sífilis congênita",
    "tags": [
      "sífilis congênita",
      "pseudoparalisia de Parrot",
      "periostite"
    ]
  },
  {
    "id": "hosbos2025-65",
    "topography": "11",
    "topic": "ITU pediátrica",
    "module": "Pediatria",
    "text": "Lactente, sexo masculino, com 15 meses de idade, é atendido em pronto-socorro, com história de febre há dois dias. A mãe da criança relata que a temperatura máxima atingida foi de 38,5 °C. O exame físico não evidencia nenhuma alteração. A criança apresenta-se ativa e consegue ingerir líquidos normalmente. O médico solicita exame de urina, que evidencia: 15 piócitos por campo, nitrito (+) e estearase (+). Solicita também urocultura qualitativa e quantitativa com antibiograma, embora não haja antecedente de infecção do trato urinário. Considerando o quadro descrito, qual a conduta apropriada nesse caso?",
    "options": [
      "(A) Internar a criança, introduzir antibiótico endovenoso e solicitar uretrocistografia miccional após melhora dos sintomas.",
      "(B) Internar a criança, introduzir antibiótico endovenoso e solicitar ultrassonografia de rins e vias urinárias imediatamente.",
      "(C) Prescrever antibiótico por via oral, a ser administrado em casa, e solicitar uretrocistografia miccional após 48 horas após término do tratamento.",
      "(D) Prescrever antibiótico por via oral, a ser administrado em casa, e não solicitar nenhum exame de imagem após o término do tratamento.",
      "(E) Prescrever antibiótico por via oral, a ser administrado em casa, e solicitar ultrassonografia de rins e vias urinárias após resultado da urocultura e término do tratamento"
    ],
    "correctAnswer": 4,
    "explanation": "Lactente de 15 meses com febre, bom estado geral, aceitando via oral e exame de urina sugestivo de infecção (piúria, nitrito e esterase positivos): ITU febril sem sinais de gravidade, tratada com antibiótico oral ambulatorial após coleta de urocultura.\n\nApós o primeiro episódio de ITU febril em menores de 2 anos, recomenda-se ultrassonografia de rins e vias urinárias; a uretrocistografia miccional fica para US alterada ou ITU recorrente.",
    "commentary": "Internar com antibiótico IV e uretrocistografia (A): sem toxemia, vômitos ou idade < 2 meses, não há indicação de internação; a UCM não é rotina no primeiro episódio.\n\nInternar e US imediata (B): US imediata só se houver evolução atípica ou suspeita de complicação.\n\nUCM 48 horas após o tratamento (C): não é rotina após o primeiro episódio com US normal.\n\nSem exame de imagem (D): a US de rins e vias urinárias é recomendada após a primeira ITU febril nessa idade.",
    "reference": "SBP — Documento Científico: Infecção do Trato Urinário (2021) / AAP Clinical Practice Guideline — UTI (2011, reafirmado 2016)",
    "tags": [
      "infecção do trato urinário",
      "ITU febril",
      "ultrassonografia renal"
    ]
  },
  {
    "id": "hosbos2025-66",
    "topography": "11",
    "topic": "Calendário vacinal",
    "module": "Pediatria",
    "text": "Lactente, sexo feminino, acaba de completar 15 meses de idade e é trazida para a Unidade Básica de Saúde para consulta de rotina quando o pediatra indica a realização das vacinas preconizadas para essa idade. De acordo com o Programa Nacional de Imunizações, que vacinas a criança deverá receber, considerando-se que recebeu todas as vacinas recomendadas até os doze meses de idade?",
    "options": [
      "(A) Reforço da anti-pneumocócica-10 valente.",
      "(B) Reforço da anti-meningococócica C.",
      "(C) Segunda dose da vacina para varicela.",
      "(D) Vacina contra a hepatite A.",
      "(E) Reforço da anti-meningocócica ACWY."
    ],
    "correctAnswer": 3,
    "explanation": "Aos 15 meses, o calendário do PNI prevê: 1º reforço da DTP, 1º reforço da poliomielite, tetraviral (ou segunda dose de sarampo-caxumba-rubéola + varicela) e hepatite A (dose única).\n\nEntre as alternativas, a vacina dessa idade é a hepatite A.",
    "commentary": "Reforço da pneumo-10 (A): é aos 12 meses.\n\nReforço da meningo C (B): aos 12 meses (hoje com a meningo ACWY).\n\nSegunda dose de varicela (C): é aos 4 anos; aos 15 meses é a primeira dose (na tetraviral).\n\nReforço da ACWY (E): a ACWY entra aos 12 meses como reforço e depois na adolescência (11–14 anos).",
    "reference": "Ministério da Saúde — Calendário Nacional de Vacinação da Criança (2024)",
    "tags": [
      "calendário vacinal",
      "hepatite A",
      "imunização"
    ]
  },
  {
    "id": "hosbos2025-67",
    "topography": "11",
    "topic": "Bronquiolite",
    "module": "Pediatria",
    "text": "Lactente, sexo masculino, com 9 meses de idade, admitido no pronto-socorro com história de tosse há três dias. A mãe relata que a criança está mais pálida, mais sonolenta e com dificuldade para respirar, a ponto de impedir a ingestão dos alimentos. Ao exame físico, a criança apresenta-se em regular estado geral, com discreta cianose de extremidades, afebril, com sibilância e frequência respiratória de 62 irpm. Há tiragem intercostal e subcostal. Uma radiografia de tórax na posição anteroposterior revela apenas retificação dos arcos costais. Sobre esse quadro clínico, assinale a afirmativa correta.",
    "options": [
      "(A) Deve-se internar a criança para iniciar oxigenioterapia e antibioticoterapia de amplo espectro devido aos sinais de gravidade.",
      "(B) Deve-se internar a criança para manutenção de hidratação e oxigenioterapia.",
      "(C) Deve-se administrar uma dose de corticosteroide por via parenteral e inaloterapia com broncodilatador no pronto-socorro para observar eventual melhora ou resolução do desconforto respiratório.",
      "(D) Deve-se administrar inalação adrenalina, no pronto atendimento, como teste terapêutico inicial.",
      "(E) Deve-se considerar essa criança como tendo uma síndrome de pneumonia afebril do lactente, devendo receber prescrição de antibiótico macrolídeo."
    ],
    "correctAnswer": 1,
    "explanation": "Lactente de 9 meses com sibilância, taquipneia (62 irpm), tiragem, cianose de extremidades e dificuldade para se alimentar, com radiografia mostrando só hiperinsuflação (retificação de arcos costais): bronquiolite viral aguda com sinais de gravidade.\n\nO tratamento é de suporte: internação, oxigênio para manter SatO₂ ≥ 90–92%, hidratação (por sonda ou venosa) e aspiração nasal.",
    "commentary": "Antibiótico de amplo espectro (A): a bronquiolite é viral; sem foco bacteriano, antibiótico não tem indicação.\n\nCorticoide e broncodilatador (C): não reduzem internação nem gravidade e não são recomendados de rotina.\n\nAdrenalina inalatória (D): não é recomendada de rotina na bronquiolite.\n\nPneumonia afebril do lactente com macrolídeo (E): é causada por Chlamydia trachomatis em menores de 3–4 meses, com tosse em staccato e conjuntivite.",
    "reference": "SBP — Diretrizes para o manejo da infecção causada pelo vírus sincicial respiratório (2017) / AAP Bronchiolitis Guideline (2014)",
    "tags": [
      "bronquiolite",
      "vírus sincicial respiratório",
      "oxigenoterapia",
      "sibilância"
    ]
  },
  {
    "id": "hosbos2025-68",
    "topography": "1.1",
    "topic": "Epilepsia",
    "module": "Pediatria",
    "text": "Adolescente, sexo masculino, com 12 anos de idade, com diagnóstico de epilepsia, chega ao pronto-socorro inconsciente, com movimentos tônico-clônicos generalizados, cianótico, com desvio do olhar e sialorreia. A mãe informa que o adolescente iniciou a crise há cerca de 20 minutos, sem recuperar a consciência ao longo do trajeto até o hospital. Na sala de emergência, foi administrado diazepam endovenoso por 3 vezes, com intervalo de 5 minutos entre as doses. Apesar da intervenção terapêutica, o paciente mantém o quadro convulsivo. Nesse caso, a próxima conduta médica deve ser administrar",
    "options": [
      "(A) topiramato por infusão endovenosa contínua.",
      "(B) fenitoína em dose de ataque endovenosa.",
      "(C) diazepam em dose dobrada endovenosa.",
      "(D) tiopental por cânula endotraqueal.",
      "(E) midazolan em dose dobrada, por via retal."
    ],
    "correctAnswer": 1,
    "explanation": "Crise há mais de 5 minutos (aqui, mais de 30) é estado de mal epiléptico. A sequência: benzodiazepínico (até 2 doses), depois droga de segunda linha — fenitoína (ou fosfenitoína) 20 mg/kg IV, ou levetiracetam/valproato. Persistindo, é estado de mal refratário, tratado com midazolam ou tiopental em infusão contínua na UTI, com intubação.",
    "commentary": "Topiramato em infusão contínua (A): não existe formulação IV; não é droga do estado de mal.\n\nDiazepam em dose dobrada (C): mais de 2 doses de benzodiazepínico aumentam depressão respiratória sem benefício.\n\nTiopental por cânula (D): o tiopental é usado no estado de mal refratário por via venosa, não endotraqueal.\n\nMidazolam retal em dose dobrada (E): a via retal/nasal/bucal é alternativa inicial sem acesso venoso, não etapa após benzodiazepínicos IV.",
    "reference": "American Epilepsy Society Guideline — Treatment of Convulsive Status Epilepticus in Children and Adults (2016) / SBP — Estado de mal epiléptico",
    "tags": [
      "estado de mal epiléptico",
      "fenitoína",
      "emergência pediátrica"
    ]
  },
  {
    "id": "hosbos2025-69",
    "module": "Pediatria",
    "text": "Um adolescente, sexo masculino, com 14 anos de idade é atendido no serviço de emergência por apresentar \"perda de força nas pernas\". Segundo a família, o adolescente está \"doente\" há cerca de 20 dias; na primeira semana teve febre que durou 4 dias, dor de garganta, dores no corpo e fadiga. Procurou atendimento, quando foi diagnosticado com amigdalite, por apresentar \"pus\" na orofaringe, recebendo amoxicilina por 7 dias. Durante esse tratamento apresentou manchas vermelhas levemente pruriginosas no corpo. Após o desaparecimento da febre, ele persistiu com desânimo e cansaço e, há 2 dias, começou a queixar-se de dor e formigamento nos pés e pernas, com dificuldade progressiva para caminhar. Hoje não havia conseguido levantar-se da cama. Ao exame físico, o paciente apresenta paraparesia simétrica e leve diminuição de força muscular em membros superiores, reflexos osteotendinosos abolidos nos membros inferiores. Com relação a esse quadro clínico, quais são as principais hipóteses diagnósticas?",
    "options": [
      "(A) Dengue; meningite asséptica.",
      "(B) Mononucleose infecciosa; polirradiculoneuropatia aguda.",
      "(C) Dengue; síndrome de Guillain-Barré.",
      "(D) Mononucleose infecciosa; encefalite viral por EBV.",
      "(E) Reação alérgica grave à amoxicilina; trombose de seio cavernoso."
    ],
    "correctAnswer": 1,
    "explanation": "Faringoamigdalite exsudativa com febre e fadiga em adolescente, que fez exantema ao usar amoxicilina, sugere mononucleose infecciosa (EBV). Duas semanas depois, surge fraqueza ascendente, simétrica, com arreflexia e parestesias: síndrome de Guillain-Barré (polirradiculoneuropatia inflamatória desmielinizante aguda), que tem o EBV entre os gatilhos infecciosos.",
    "commentary": "Dengue e meningite asséptica (A): não explica exsudato amigdaliano nem arreflexia com paraparesia.\n\nDengue e Guillain-Barré (C): a dengue não causa amigdalite purulenta; o exantema pela amoxicilina aponta para EBV.\n\nEncefalite por EBV (D): haveria alteração de consciência ou crises, não paralisia flácida arrefléxica.\n\nAlergia e trombose de seio cavernoso (E): trombose do seio cavernoso causa proptose, oftalmoplegia e febre, não paraparesia.",
    "reference": "Nelson Textbook of Pediatrics, 21ª ed. — Mononucleose infecciosa / Síndrome de Guillain-Barré",
    "tags": [
      "mononucleose infecciosa",
      "síndrome de Guillain-Barré",
      "vírus Epstein-Barr"
    ]
  },
  {
    "id": "hosbos2025-70",
    "topography": "11",
    "topic": "Pneumonia infantil",
    "module": "Pediatria",
    "text": "Pré-escolar, sexo masculino, 3 anos de idade, é atendido em uma Unidade Básica de Saúde com quadro de tosse com catarro e febre alta há 3 dias, associado à dificuldade para respirar. No exame físico apresenta-se afebril (medicado há 1 hora), corado, hidratado, com boa perfusão periférica, com FC frequência cardíaca de 100 bpm e frequência respiratória de 45 irpm. O paciente não apresenta retração subcostal e tiragens intercostais, mas tem murmúrio vesicular diminuído em base de hemitórax esquerdo. Não há disponibilidade de exames de imagem na Unidade de Saúde. Segundo o Programa de Atenção Integrada das Doenças Prevalentes na Infância (AIDPI) do Ministério da Saúde para identificação das infecções respiratórias agudas, assinale a alternativa correta.",
    "options": [
      "(A) A criança tem uma pneumonia que pode ser tratada ambulatorialmente com amoxicilina.",
      "(B) A criança tem uma pneumonia grave, que deve ser encaminhada ao hospital e ser tratada com penicilina cristalina.",
      "(C) A criança tem um quadro de infecção de vias aéreas superiores que não deve ser tratada com antibióticos.",
      "(D) A criança tem um quadro de pneumonia não grave, mas há sinais de perigo e, portanto, deve ser encaminhada ao hospital.",
      "(E) A criança tem um quadro de pneumonia não grave e deve receber um antibiótico da classe dos macrolídeos, devido ao atual perfil de sensibilidade do principal agente etiológico envolvido."
    ],
    "correctAnswer": 0,
    "explanation": "Pela AIDPI, criança de 1 a 5 anos com tosse e frequência respiratória ≥ 40 irpm tem pneumonia. Sem tiragem subcostal, estridor em repouso ou sinais gerais de perigo (não consegue beber, vomita tudo, convulsões, letargia), é pneumonia não grave: tratamento ambulatorial com amoxicilina e retorno em 2–3 dias.\n\nA criança tem FR de 45 irpm, sem tiragem e em bom estado geral.",
    "commentary": "Pneumonia grave com penicilina cristalina (B): não há tiragem nem sinais de perigo.\n\nIVAS sem antibiótico (C): FR ≥ 40 com febre e tosse classifica pneumonia.\n\nSinais de perigo (D): a criança está ativa, corada e hidratada — não há sinais de perigo.\n\nMacrolídeo (E): o principal agente é o pneumococo, sensível à amoxicilina; macrolídeo se reserva para atípicos.",
    "reference": "Ministério da Saúde/OPAS — AIDPI: Atenção Integrada às Doenças Prevalentes na Infância (2017)",
    "tags": [
      "pneumonia",
      "AIDPI",
      "frequência respiratória",
      "amoxicilina"
    ]
  },
  {
    "id": "hosbos2025-71",
    "topography": "11",
    "topic": "Aleitamento materno",
    "module": "Pediatria",
    "text": "Recém-nascido, sexo feminino, nascido a termo, está no décimo segundo dia de vida, em aleitamento materno exclusivo. Na saída da maternidade havia perdido 8% do peso de nascimento, com peso de alta de 3000g. Veio 10 dias após a alta hospitalar (um protocolo para todos os partos ocorridos nessa maternidade) e verifica-se que a mãe se queixa de que \"a criança parece mamar muito\", \"eventualmente regurgita\" e \"ainda não sabe o que é dia ou noite para mamar\". Seu peso atual é 3260g. Não se identificam anormalidades no exame físico.",
    "options": [
      "(A) Manter o aleitamento materno e seguir acompanhando nas consultas de rotina, tranquilizando a mãe sobre suas queixas.",
      "(B) Verificar a pega e a posição da mamada, para identificar o problema que seguramente explicará o ganho ponderal insatisfatório.",
      "(C) Introduzir, temporariamente, complementação com fórmula infantil de partida, com composição nutricional adequada à idade.",
      "(D) Introduzir fórmula anti-refluxo e agendar nova avaliação em 48 horas para avaliar ganho ponderal.",
      "(E) Solicitar análise da urina, por possível quadro de infecção que compromete o ganho ponderal."
    ],
    "correctAnswer": 0,
    "explanation": "O bebê saiu da maternidade com 3.000 g e agora tem 3.260 g: ganhou 260 g em 10 dias (26 g/dia), dentro do esperado (20–30 g/dia). Mamar com frequência, regurgitar ocasionalmente e não ter ritmo dia/noite são comportamentos normais do recém-nascido.\n\nA conduta é manter o aleitamento exclusivo, tranquilizar a mãe e seguir com as consultas de rotina.",
    "commentary": "Ganho ponderal insatisfatório (B): o ganho está adequado; observar a mamada é sempre útil, mas não há problema a explicar.\n\nComplemento com fórmula (C): desnecessário e prejudica o aleitamento exclusivo.\n\nFórmula antirrefluxo (D): regurgitação sem prejuízo de ganho de peso é fisiológica.\n\nExame de urina (E): ganho de peso adequado e exame normal não sugerem infecção.",
    "reference": "Ministério da Saúde — Caderno de Atenção Básica nº 23: Saúde da Criança — Aleitamento Materno e Alimentação Complementar (2015)",
    "tags": [
      "aleitamento materno",
      "ganho de peso",
      "puericultura",
      "recém-nascido"
    ]
  },
  {
    "id": "hosbos2025-72",
    "topography": "11",
    "topic": "Anemia ferropriva",
    "module": "Pediatria",
    "text": "Lactente, com 60 dias de vida, nascida a termo, adequada para idade gestacional, está amamentada com leite materno exclusivamente. Na ocasião da consulta de puericultura, por apresentar discreta palidez, o médico solicitou eritrograma, que apresentou os seguintes resultados: hemoglobina = 10,7 mg/dl e hematócrito = 30,8%. Assinale a alternativa correta sobre a principal hipótese diagnóstica a ser elaborada pelo médico e a conduta mais adequada.",
    "options": [
      "(A) A anemia falciforme deve ser considerada e o teste do pezinho para a avaliação da hemoglobina deve se repetido.",
      "(B) A anemia por deficiência de folatos deve ser considerada e, na ausência de suplementação dessa vitamina durante a gestação, o nível de folato deve ser dosado na criança.",
      "(C) A anemia ferropriva é a condição mais prevalente em crianças com esse quadro e a suplementação com 1mg/kg/dia de ferro deve ser imediatamente iniciada.",
      "(D) A anemia por carência de ferro é a principal hipótese diagnóstica e a dosagem de ferritina e proteína C reativa é mandatória para essa criança.",
      "(E) A anemia não deve ser considerada patológica nessa idade e não há ainda indicação de suplementação profilática nesse momento."
    ],
    "correctAnswer": 4,
    "explanation": "Entre 6 e 12 semanas de vida ocorre a anemia fisiológica do lactente: após o nascimento, a oxigenação melhora, a eritropoetina cai e a hemoglobina atinge o nadir (cerca de 9–11 g/dL no termo). Hb de 10,7 g/dL aos 60 dias está dentro do esperado e não é patológica.\n\nA suplementação profilática de ferro no lactente a termo de peso adequado começa aos 3 meses (SBP) ou aos 6 meses (MS); aos 2 meses ainda não está indicada.",
    "commentary": "Anemia falciforme (A): a hemoglobina fetal protege nos primeiros meses, e a triagem neonatal já identifica a doença.\n\nDeficiência de folato (B): rara em lactente amamentado; não se dosa folato de rotina.\n\nIniciar ferro 1 mg/kg/dia agora (C): anemia ferropriva é rara antes dos 4–6 meses no termo, pelas reservas do nascimento.\n\nFerritina e PCR obrigatórias (D): a hipótese principal é anemia fisiológica, sem indicação de investigar carência de ferro.",
    "reference": "SBP — Consenso sobre Anemia Ferropriva: mais que uma doença, uma urgência médica (2018, atualizado 2021)",
    "tags": [
      "anemia fisiológica do lactente",
      "anemia ferropriva",
      "puericultura",
      "suplementação de ferro"
    ]
  },
  {
    "id": "hosbos2025-73",
    "topography": "14",
    "topic": "Parada cardiorrespiratória",
    "module": "Pediatria",
    "text": "Adolescente, sexo feminino, após tentativa de suicídio com ingestão de comprimidos de antidepressivo tricíclico, apresentou parada cardiorrespiratória na sala de emergência. Durante a reanimação cardiopulmonar, observou-se o seguinte ritmo no monitor cardíaco:\n\nAssinale a alternativa que apresenta o diagnóstico correto da situação e a conduta relacionada.",
    "options": [
      "(A) Taquicardia supraventricular, que será tratada com choque (no modo não sincronizado)",
      "(B) Fibrilação ventricular, que será tratada com cardioversão (choque no modo sincronizado).",
      "(C) Fibrilação ventricular, que será tratada com desfibrilação (choque no modo sincronizado).",
      "(D) Taquicardia ventricular, que será tratada com cardioversão (choque no modo sincronizado).",
      "(E) Taquicardia ventricular, que será tratada com adrenalina e, após, com desfibrilação (choque no modo não sincronizado)."
    ],
    "correctAnswer": 3,
    "explanation": "O traçado mostra taquicardia regular, de QRS largo e monomórfico, com frequência alta: taquicardia ventricular. Na intoxicação por tricíclicos, o bloqueio dos canais de sódio alarga o QRS e favorece TV.\n\nA banca considerou TV tratada com cardioversão sincronizada, conduta correta para TV COM pulso e instável. Como o enunciado diz que a paciente está em parada cardiorrespiratória, a TV é sem pulso — ritmo chocável, tratado com desfibrilação (choque não sincronizado), RCP e adrenalina após o segundo choque, além de bicarbonato de sódio pela intoxicação por tricíclico.",
    "commentary": "Taquicardia supraventricular (A): o QRS é largo; a TSV tem QRS estreito e, quando instável, recebe cardioversão sincronizada.\n\nFibrilação ventricular com cardioversão (B): o traçado é regular e organizado, não caótico; e FV se trata com desfibrilação.\n\nFibrilação ventricular com desfibrilação sincronizada (C): o ritmo não é FV, e a desfibrilação é, por definição, não sincronizada.\n\nTV com adrenalina antes da desfibrilação (E): em ritmo chocável, o choque vem primeiro; a adrenalina entra após o segundo choque. Fora da ordem, é a alternativa mais próxima da conduta para TV sem pulso.",
    "reference": "AHA Guidelines for CPR and ECC — Pediatric Advanced Life Support (2020/2025)",
    "tags": [
      "taquicardia ventricular",
      "parada cardiorrespiratória",
      "intoxicação por tricíclicos",
      "eletrocardiograma",
      "desfibrilação"
    ],
    "image": "/images/hosbos2025-73.webp",
    "alert": "Gabarito oficial discutível: o enunciado descreve parada cardiorrespiratória; taquicardia ventricular sem pulso é tratada com desfibrilação (choque não sincronizado), não com cardioversão sincronizada."
  },
  {
    "id": "hosbos2025-74",
    "module": "Pediatria",
    "text": "Adolescente, sexo masculino, 13 anos, com febre há 6 dias, associada à irritabilidade, dor abdominal e diarreia aquosa nos últimos 3 dias, além de erupção cutânea escarlatiniforme e eritema labial. O adolescente foi internado e, cerca de 12 horas após admissão, evoluiu com choque cardiogênico, edema em face, extremidades e parede abdominal com rebaixamento do fígado. Os exames revelam hemograma com leucócitose e neutrofilia, sem alteração dos eritrócitos ou das plaquetas. VHS 60 mm/h, PCR 120 mg/dL, troponina 17397 ng/mL, ferritina 1956 mcg/L, D-dímero 1045 ng/mL, fibrinogênio 475 mg/dL. Sorologia para dengue IgM (-) e IgG (+), para SarsCov-2, IgM (-) e IgG (+), com RT-PCR para Sars-Cov-2 (-). Tomografia de tórax normal. Ecocardiograma com importante disfunção de ventrículo esquerdo e discreto derrame pericárdico, sem alterações na morfologia das artérias coronárias para a idade. Qual a hipótese diagnóstica mais provável?",
    "options": [
      "(A) Artrite Idiopática Juvenil forma Sistêmica.",
      "(B) Dengue Hemorrágica.",
      "(C) Lupus Eritematoso Sistêmico.",
      "(D) Síndrome do choque tóxico estafilocócico.",
      "(E) Síndrome Inflamatória Multissistêmica pós-COVID."
    ],
    "correctAnswer": 4,
    "explanation": "Adolescente com febre persistente, sintomas gastrointestinais, exantema, alteração de mucosa labial e choque cardiogênico com disfunção ventricular, marcadores inflamatórios muito elevados (PCR, ferritina, D-dímero, troponina) e evidência de infecção prévia por SARS-CoV-2 (IgG positiva, PCR negativo): síndrome inflamatória multissistêmica pediátrica (SIM-P) associada à COVID-19.\n\nO tratamento é imunoglobulina IV e corticoide, com suporte hemodinâmico.",
    "commentary": "AIJ sistêmica (A): febre diária em picos, exantema evanescente e artrite; choque cardiogênico com troponina tão alta não é típico.\n\nDengue hemorrágica (B): a sorologia não indica infecção aguda (IgM negativa) e haveria plaquetopenia e hemoconcentração.\n\nLES (C): cursaria com citopenias, autoanticorpos e acometimento renal; não explica o quadro agudo pós-infeccioso.\n\nChoque tóxico estafilocócico (D): choque com eritrodermia e descamação, geralmente com foco (tampão, ferida); disfunção miocárdica grave e IgG para SARS-CoV-2 favorecem SIM-P.",
    "reference": "Ministério da Saúde — Síndrome Inflamatória Multissistêmica Pediátrica (SIM-P) associada à COVID-19: notificação e manejo / SBP — Documento Científico SIM-P (2020)",
    "tags": [
      "SIM-P",
      "COVID-19",
      "choque cardiogênico",
      "síndrome inflamatória multissistêmica"
    ]
  },
  {
    "id": "hosbos2025-75",
    "topography": "13",
    "topic": "Transtornos de ansiedade",
    "module": "Pediatria",
    "text": "Sobre o Transtorno de Ansiedade de Separação na Infância, assinale a alternativa correta.",
    "options": [
      "(A) Para o diagnóstico, é preciso que os sintomas tenham duração maior do que quatro semanas.",
      "(B) A resistência persistente de dormir fora de casa ou de dormir sem estar próximo de uma figura de apego não se constitui um critério diagnóstico, pois é mais indicativa de problemas familiares na condução da independência da criança.",
      "(C) Delírios ou alucinações relativas à separação são frequentemente identificados nos relatos das crianças e adolescentes com esse transtorno.",
      "(D) Queixas frequentes de sintomas físicos, como dor de cabeça ou dor abdominal, não devem ser considerados critérios para esse transtorno, que se apresenta somente com manifestações comportamentais e emocionais.",
      "(E) O diagnóstico não pode ser realizado antes dos seis anos de idade da criança, quando a criança comumente entra na escola."
    ],
    "correctAnswer": 0,
    "explanation": "Pelo DSM-5, o transtorno de ansiedade de separação exige medo ou ansiedade excessivos e inapropriados para o nível de desenvolvimento em relação à separação das figuras de apego, com pelo menos 3 de 8 critérios, durando no mínimo 4 semanas em crianças e adolescentes (6 meses em adultos) e causando prejuízo.",
    "commentary": "Recusa de dormir fora de casa não é critério (B): é um dos critérios do DSM-5.\n\nDelírios e alucinações frequentes (C): não fazem parte do quadro; se houver, sugerem outro diagnóstico.\n\nQueixas somáticas não contam (D): dores de cabeça e abdominais diante da separação são critério.\n\nSó após os 6 anos (E): não há idade mínima; o diagnóstico pode ser feito em pré-escolares, desde que a ansiedade seja excessiva para a idade.",
    "reference": "American Psychiatric Association — DSM-5-TR (2022)",
    "tags": [
      "transtorno de ansiedade de separação",
      "DSM-5",
      "psiquiatria infantil"
    ]
  },
  {
    "id": "hosbos2025-76",
    "topography": "10",
    "topic": "Tuberculose",
    "module": "Pediatria",
    "text": "Pré-escolar, sexo feminino, com 7 anos é diagnosticada com tuberculose em um familiar agregado que mora em casa, que iniciou o tratamento específico há 2 semanas. A criança não apresenta tosse, febre ou quaisquer sintomas e recebeu a vacina BCG ao nascimento. Sobre a investigação e conduta para essa criança, é correto afirmar que",
    "options": [
      "(A) deve-se solicitar radiografia do tórax e prova tuberculínica; se a radiografia for normal e a prova tuberculínica de 3 mm, dar alta para a criança.",
      "(B) deve-se solicitar apenas prova tuberculínica; se 11 mm, iniciar o tratamento com esquema quádruplo, independentemente de qualquer achado radiológico.",
      "(C) deve-se solicitar prova tuberculínica e radiografia de tórax; se 7 mm, sem achados radiológicos, indicar tratamento da infecção latente.",
      "(D) deve-se iniciar tratamento profilático com isoniazida ou rifampicina até 3 meses após a negativação do escarro da mãe.",
      "(E) solicitar apenas exame radiológico do tórax; se a radiografia for anormal, iniciar tratamento de infecção latente."
    ],
    "correctAnswer": 2,
    "explanation": "Criança assintomática contato de tuberculose pulmonar: faz-se prova tuberculínica (PT) e radiografia de tórax. Pelo Manual de Recomendações do MS (2019), em contatos a PT ≥ 5 mm indica infecção latente, independentemente do tempo de BCG.\n\nCom PT de 7 mm e radiografia normal, trata-se a infecção latente (isoniazida por 6–9 meses ou rifampicina por 4 meses).",
    "commentary": "PT de 3 mm e alta (A): PT < 5 mm em contato deve ser repetida em 8 semanas para detectar viragem.\n\nEsquema quádruplo com PT de 11 mm independentemente da radiografia (B): sem doença ativa (assintomática, radiografia normal), trata-se infecção latente; e a criança < 10 anos usa esquema RHZ, não quádruplo.\n\nProfilaxia até negativar o escarro (D): a decisão depende da PT e da radiografia; a duração do tratamento é fixa.\n\nSó radiografia (E): a radiografia alterada sugere doença ativa, que não se trata como infecção latente.",
    "reference": "Ministério da Saúde — Manual de Recomendações para o Controle da Tuberculose no Brasil, 2ª ed. (2019)",
    "tags": [
      "tuberculose",
      "infecção latente",
      "prova tuberculínica",
      "contato domiciliar"
    ]
  },
  {
    "id": "hosbos2025-77",
    "topography": "4.1",
    "topic": "Síndrome nefrótica",
    "module": "Pediatria",
    "text": "Pré-escolar, sexo feminino, com 4 anos é diagnosticada com síndrome nefrótica após apresentar edema periorbital, ascite e ganho de peso significativo nas últimas semanas. Os exames laboratoriais mostram proteinúria maciça, hipoalbuminemia e hiperlipidemia. Após investigação adicional, é confirmado que a paciente apresenta a causa mais comum dessa síndrome clínica nessa faixa etária. Não há história uso de medicamentos que possam explicar a condição. A paciente não apresenta hipertensão ou insuficiência renal. Com base na descrição desse quadro clínico, qual é o tratamento inicial mais apropriado para essa paciente?",
    "options": [
      "(A) Ciclosporina.",
      "(B) Prednisona.",
      "(C) Ciclofosfamida.",
      "(D) Micofenolato de mofetila.",
      "(E) Rituximabe."
    ],
    "correctAnswer": 1,
    "explanation": "Síndrome nefrótica pura (sem hipertensão, hematúria ou insuficiência renal) entre 1 e 10 anos é, na grande maioria, doença por lesão mínima. O tratamento inicial é corticoide oral — prednisona 60 mg/m²/dia (ou 2 mg/kg/dia) por 4–6 semanas, seguida de dias alternados — sem necessidade de biópsia.",
    "commentary": "Ciclosporina (A): para corticorresistência ou dependência.\n\nCiclofosfamida (C): poupadora de corticoide em recidivas frequentes.\n\nMicofenolato (D): opção para corticodependência.\n\nRituximabe (E): reservado para formas dependentes/resistentes a outros imunossupressores.",
    "reference": "KDIGO 2021 Clinical Practice Guideline for the Management of Glomerular Diseases / SBP — Síndrome nefrótica idiopática",
    "tags": [
      "síndrome nefrótica",
      "lesão mínima",
      "prednisona"
    ]
  },
  {
    "id": "hosbos2025-78",
    "topography": "11",
    "topic": "Puericultura",
    "module": "Pediatria",
    "text": "Adolescente, 14 anos e 4 meses, sexo masculino, procurou o pediatra com preocupações sobre sua estrutura. Gestação e parto ocorreram sem anormalidades. Ao nascer, o peso foi 3 100 g e o comprimento, 50 cm. O desenvolvimento neuropsicomotor foi adequado. Família refere bom desempenho na escola e não há antecedentes de doenças crônicas. Com idade de 13 anos, passou por uma consulta com um endocrinologista, que não encontrou nenhuma anormalidade e suas medidas foram: peso = 40 kg e estatura = 150 cm (escore z: -0,8). A idade óssea naquele momento era de 10 anos e 11 meses. Na consulta atual, exame físico não apresenta anormalidades, o pênis é infantil e os testículos são menores que 3 cm³ bilateralmente e a estatura é 158 cm (escore z: -1,0). A mãe tem 165 cm e o pai tem 177 cm. Sobre o quadro apresentado por esse adolescente, é correto afirmar que",
    "options": [
      "(A) o adolescente apresenta uma velocidade de crescimento não compatível com a sua maturação sexual.",
      "(B) deve-se investigar a possibilidade de deficiência de hormônio de crescimento.",
      "(C) trata-se, possivelmente, de uma baixa estatura familiar.",
      "(D) nesse momento o adolescente encontra-se mais baixo que 85% da população da mesma idade.",
      "(E) o adolescente não apresenta critérios para atraso puberal."
    ],
    "correctAnswer": 3,
    "explanation": "Escore-z de estatura −1,0 corresponde aproximadamente ao percentil 16: o adolescente é mais baixo que cerca de 84–85% dos meninos da mesma idade.\n\nO quadro é de atraso constitucional do crescimento e da puberdade: estatura normal-baixa, idade óssea atrasada (cerca de 2 anos), testículos < 4 mL aos 14 anos (atraso puberal) e velocidade de crescimento compatível com o estádio pré-puberal (8 cm em ~16 meses).",
    "commentary": "Velocidade incompatível com a maturação (A): ~6 cm/ano é adequado para um menino ainda pré-puberal.\n\nDeficiência de GH (B): a estatura se mantém no canal (z −0,8 para −1,0) e a velocidade é normal, sem sinais de deficiência hormonal.\n\nBaixa estatura familiar (C): a altura-alvo é de cerca de 177,5 cm (z perto de 0); na baixa estatura familiar a idade óssea é compatível com a cronológica.\n\nSem critério de atraso puberal (E): ausência de aumento testicular (≥ 4 mL) aos 14 anos define atraso puberal.",
    "reference": "SBP — Departamento de Endocrinologia: Baixa estatura e atraso constitucional do crescimento e da puberdade",
    "tags": [
      "atraso constitucional do crescimento",
      "atraso puberal",
      "baixa estatura",
      "escore-z"
    ]
  },
  {
    "id": "hosbos2025-79",
    "topography": "11",
    "topic": "Doença de Kawasaki",
    "module": "Pediatria",
    "text": "Pré-escolar, sexo masculino, de 4 anos e 6 meses é levado ao pronto-socorro com febre alta, persistente há 6 dias. Há uma semana retornou de uma viagem da Europa. Os pais relatam que ele tem estado bastante irritado e apresenta vermelhidão nos olhos. Durante o exame físico, o médico observa língua “em morango”, lábios edemaciados e rachados, eritema nas palmas das mãos e plantas dos pés, além de uma erupção cutânea maculopapular no tronco. Não há sinais de infecção respiratória ou gastrointestinal. Os exames laboratoriais revelam leucócitose com neutrofilia, elevação da proteína C-reativa (PCR) e da velocidade de hemossedimentação (VHS). Com base no caso clínico, qual é o diagnóstico mais provável para esse paciente?",
    "options": [
      "(A) Escarlatina.",
      "(B) Síndrome de Stevens-Johnson.",
      "(C) Doença de Kawasaki.",
      "(D) Sarampo.",
      "(E) Artrite Idiopática Juvenil forma Sistêmica."
    ],
    "correctAnswer": 2,
    "explanation": "Febre há 5 dias ou mais com pelo menos 4 de 5 critérios — conjuntivite não exsudativa, alterações de lábios e cavidade oral (lábios fissurados, língua em framboesa), alterações de extremidades (eritema/edema de mãos e pés), exantema polimorfo e linfonodomegalia cervical — define a doença de Kawasaki. O paciente tem febre há 6 dias e 4 critérios.\n\nO tratamento é imunoglobulina IV 2 g/kg e ácido acetilsalicílico, para reduzir o risco de aneurismas coronarianos.",
    "commentary": "Escarlatina (A): exantema áspero (em lixa), sinal de Pastia e faringite; sem conjuntivite.\n\nStevens-Johnson (B): lesões bolhosas, descolamento cutâneo e mucosite erosiva, geralmente após medicamento.\n\nSarampo (D): exantema que começa na face, com tosse, coriza e manchas de Koplik; a viagem é um distrator.\n\nAIJ sistêmica (E): febre em picos diários, exantema evanescente e artrite.",
    "reference": "AHA Scientific Statement — Diagnosis, Treatment, and Long-Term Management of Kawasaki Disease (2017)",
    "tags": [
      "doença de Kawasaki",
      "febre prolongada",
      "vasculites"
    ]
  },
  {
    "id": "hosbos2025-80",
    "topography": "14",
    "topic": "Emergências pediátricas",
    "module": "Pediatria",
    "text": "Assinale a alternativa correta sobre a recepção do recém-nascido e a reanimação neonatal de uma criança que nasceu com mais de 34 semanas, de acordo com as recomendações mais atuais do Programa de Reanimação Neonatal da Sociedade Brasileira de Pediatria.",
    "options": [
      "(A) O clampeamento do cordão umbilical de uma criança que nasceu bem, chorando e com bom tônus deve ser realizado após 1 minuto de vida, com a criança em contato pele-a-pele com a mãe.",
      "(B) Recém-nascido que nasce com mecônio, em apneia e frequência cardíaca maior que 100 batimentos por minuto, deve receber prioritariamente uma única aspiração das vias aéreas com cânula orotraqueal.",
      "(C) Se após os passos iniciais na mesa de reanimação, a frequência cardíaca do bebê está menor que 100 batimentos por minuto, deve-se iniciar a ventilação com pressão positiva com oxigênio à 30%.",
      "(D) Durante a ventilação com pressão positiva, a criança deve ser monitorada apenas com monitor cardíaco; não se deve ligar um oxímetro de pulso para acompanhar a saturação de oxigênio, pela baixa sensibilidade desse teste.",
      "(E) A técnica combinada de ventilação e compressão deve ser realizada sempre com 2 movimentos de ventilação e 15 compressões torácicas, na presença de dois profissionais treinados em reanimação pediátrica neonatal."
    ],
    "correctAnswer": 0,
    "explanation": "Pelo Programa de Reanimação Neonatal da SBP (2022), o recém-nascido ≥ 34 semanas que nasce com boa vitalidade (respira/chora e tem bom tônus) deve ter o clampeamento do cordão feito após pelo menos 1 minuto (60 segundos), já em contato pele a pele com a mãe.",
    "commentary": "Aspiração traqueal no mecônio (B): não se faz aspiração traqueal de rotina; com apneia, a prioridade é iniciar a ventilação nos primeiros 60 segundos.\n\nVPP com O₂ a 30% (C): no ≥ 34 semanas a ventilação começa com ar ambiente (21%).\n\nSem oxímetro durante VPP (D): o oxímetro de pulso no membro superior direito é recomendado para guiar a oferta de oxigênio, junto com o monitor cardíaco.\n\nRelação 2:15 (E): no período neonatal a relação é 3 compressões para 1 ventilação.",
    "reference": "SBP — Programa de Reanimação Neonatal: Reanimação do recém-nascido ≥ 34 semanas em sala de parto (Diretrizes 2022)",
    "tags": [
      "reanimação neonatal",
      "clampeamento do cordão",
      "sala de parto"
    ]
  },
  {
    "id": "hosbos2025-81",
    "topography": "15",
    "topic": "Rastreamento",
    "module": "Saúde Coletiva",
    "text": "Percebendo um aumento significativo nos casos de glaucoma entre os habitantes de um determinado município ao longo dos últimos anos, a secretaria municipal de saúde decidiu implementar um programa de prevenção, com o objetivo de reduzir a incidência dessa patologia. O programa foi constituído por campanhas para a realização de exames oftalmológicos regulares, com o objetivo de detectar precocemente casos da doença. É correto afirmar que o nível de prevenção prioritariamente abordado foi o da prevenção",
    "options": [
      "(A) primária.",
      "(B) secundária.",
      "(C) terciária.",
      "(D) quaternária.",
      "(E) quintenária."
    ],
    "correctAnswer": 1,
    "explanation": "Pelos níveis de prevenção de Leavell e Clark, a prevenção secundária abrange o diagnóstico precoce e o tratamento oportuno, quando a doença já existe mas ainda não causou dano maior. Campanhas de exames oftalmológicos para detectar glaucoma cedo são, portanto, prevenção secundária.\n\nO programa não reduz a incidência (que depende de evitar o aparecimento da doença), mas reduz a cegueira causada por ela.",
    "commentary": "Primária (A): age antes da doença (promoção da saúde e proteção específica, como vacinas).\n\nTerciária (C): reabilitação e redução de sequelas da doença estabelecida.\n\nQuaternária (D): evitar intervenções desnecessárias e o excesso de medicalização.\n\nQuintenária (E): não faz parte da classificação clássica de Leavell e Clark (o termo aparece em propostas recentes ligadas ao cuidado com o profissional de saúde).",
    "reference": "Leavell HR, Clark EG. Preventive Medicine for the Doctor in his Community / Rouquayrol MZ. Epidemiologia & Saúde, 8ª ed.",
    "tags": [
      "níveis de prevenção",
      "prevenção secundária",
      "glaucoma",
      "rastreamento"
    ]
  },
  {
    "id": "hosbos2025-82",
    "topography": "1.2",
    "topic": "Catarata",
    "module": "Pediatria",
    "text": "Durante um exame de rotina em um recém-nascido, o médico da Unidade Básica de Saúde (UBS) observa a ausência do reflexo vermelho ao aplicar o teste de Bruckner. Assinale a alternativa que apresenta a conduta mais adequada a ser tomada por ele, nesse caso.",
    "options": [
      "(A) Tranquilizar os pais, informá-los de que o resultado pode ser um falso positivo e aguardar para realizar novos exames em algumas semanas.",
      "(B) Orientar os pais a introduzirem uma dieta rica em vitamina A, pois a sua deficiência pode causar a ausência do reflexo vermelho.",
      "(C) Prescrever colírios lubrificantes e voltar a aplicar o teste na próxima consulta de rotina.",
      "(D) Diagnosticar catarata congênita imediatamente e encaminhar para tratamento cirúrgico.",
      "(E) Encaminhar imediatamente a criança para avaliação oftalmológica especializada."
    ],
    "correctAnswer": 4,
    "explanation": "O teste do reflexo vermelho (teste do olhinho, Bruckner) faz a triagem de doenças que obstruem o eixo visual: catarata congênita, glaucoma congênito, retinoblastoma, opacidades de córnea e grandes alterações de retina.\n\nReflexo ausente, assimétrico ou duvidoso exige encaminhamento imediato ao oftalmologista, pois o diagnóstico precoce é decisivo para a visão (ambliopia) e, no retinoblastoma, para a vida.",
    "commentary": "Aguardar novos exames em semanas (A): não se espera; cada semana de atraso piora o prognóstico visual.\n\nVitamina A (B): a deficiência de vitamina A causa xeroftalmia, não ausência de reflexo vermelho.\n\nColírio lubrificante e repetir na próxima consulta (C): atrasa o diagnóstico.\n\nDiagnosticar catarata e encaminhar à cirurgia (D): a ausência do reflexo tem várias causas (inclusive retinoblastoma); o diagnóstico é do oftalmologista.",
    "reference": "SBP — Diretrizes sobre o teste do reflexo vermelho / Ministério da Saúde — Diretrizes de Atenção à Saúde Ocular na Infância (2016)",
    "tags": [
      "teste do reflexo vermelho",
      "catarata congênita",
      "retinoblastoma",
      "triagem neonatal"
    ]
  },
  {
    "id": "hosbos2025-83",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "A Constituição Federal, ao tratar do Sistema Único de Saúde (SUS), estabelece que ele deve ter como diretriz, dentre outras,",
    "options": [
      "(A) a descentralização, com direção única apenas na esfera do gestor federal.",
      "(B) a participação da sociedade por meio das entidades representativas dos profissionais da saúde.",
      "(C) a cogestão dos serviços públicos pelas organizações sociais (OS).",
      "(D) o atendimento integral, com prioridade para as atividades preventivas.",
      "(E) a gratuidade integral dos serviços de baixa complexidade, e parcial dos de alta e média complexidade."
    ],
    "correctAnswer": 3,
    "explanation": "O artigo 198 da Constituição Federal define as diretrizes do SUS: descentralização, com direção única em cada esfera de governo; atendimento integral, com prioridade para as atividades preventivas, sem prejuízo dos serviços assistenciais; e participação da comunidade.",
    "commentary": "Direção única só na esfera federal (A): a direção é única em CADA esfera de governo (federal, estadual e municipal).\n\nParticipação por entidades de profissionais (B): a diretriz é a participação da comunidade (usuários, trabalhadores, gestores e prestadores).\n\nCogestão pelas organizações sociais (C): não consta da Constituição.\n\nGratuidade parcial na média e alta complexidade (E): as ações e serviços do SUS são gratuitos em todos os níveis.",
    "reference": "Constituição Federal de 1988, art. 198",
    "tags": [
      "SUS",
      "constituição Federal",
      "diretrizes do SUS",
      "integralidade"
    ]
  },
  {
    "id": "hosbos2025-84",
    "topography": "15",
    "topic": "Estratégia Saúde da Família",
    "module": "Saúde Coletiva",
    "text": "A Política Nacional de Atenção Básica do SUS, visando à sua expansão e consolidação, tem como estratégia prioritária",
    "options": [
      "(A) a Saúde da Família.",
      "(B) a rede de referência e contrarreferência.",
      "(C) a democratização da gestão.",
      "(D) a otimização dos gastos.",
      "(E) as parcerias público-privadas."
    ],
    "correctAnswer": 0,
    "explanation": "A Política Nacional de Atenção Básica (Portaria nº 2.436/2017) estabelece a Saúde da Família como estratégia prioritária para expansão e consolidação da Atenção Básica.",
    "commentary": "Referência e contrarreferência (B): é um mecanismo de organização da rede, não a estratégia prioritária da PNAB.\n\nDemocratização da gestão (C): é um princípio de gestão do SUS, não a estratégia da PNAB.\n\nOtimização dos gastos (D): não é a estratégia definida pela PNAB.\n\nParcerias público-privadas (E): não constam como estratégia da atenção básica.",
    "reference": "Ministério da Saúde — Política Nacional de Atenção Básica (Portaria nº 2.436/2017)",
    "tags": [
      "PNAB",
      "estratégia Saúde da Família",
      "atenção primária"
    ]
  },
  {
    "id": "hosbos2025-85",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "Considerando recomendações da Organização Mundial de Saúde e visando à melhoria dos serviços, o aumento da resolutividade e o incremento de diferentes opções preventivas e terapêuticas no SUS, o Ministério da Saúde aprovou a Política Nacional de Práticas Integrativas e Complementares, que inclui, dentre outras terapias, a",
    "options": [
      "(A) homeopatia, a fitoterapia e a cromoterapia.",
      "(B) homeopatia, a acupuntura e a apiterapia.",
      "(C) fitoterapia, o termalismo social e a crenoterapia.",
      "(D) acupuntura, o Reiki e a aromoterapia.",
      "(E) cristaloterapia, a terapia do som e a acupuntura."
    ],
    "correctAnswer": 2,
    "explanation": "A Política Nacional de Práticas Integrativas e Complementares (PNPIC, 2006) incluiu inicialmente medicina tradicional chinesa/acupuntura, homeopatia, plantas medicinais e fitoterapia, termalismo social/crenoterapia e medicina antroposófica. Em 2017 e 2018 foram acrescentadas outras práticas (arteterapia, ayurveda, meditação, reiki, aromaterapia, apiterapia, cromoterapia, bioenergética etc.), totalizando 29.\n\nA alternativa C reúne práticas da PNPIC original, sem nenhum item fora da política; a banca a considerou a correta.",
    "commentary": "Homeopatia, fitoterapia e cromoterapia (A): todas hoje fazem parte da PNPIC (a cromoterapia desde 2018), mas a banca considerou só a combinação da política original.\n\nHomeopatia, acupuntura e apiterapia (B): a apiterapia entrou em 2018; mesma observação.\n\nAcupuntura, reiki e aromaterapia (D): reiki (2017) e aromaterapia (2018) foram incorporadas depois.\n\nCristaloterapia e terapia do som (E): não integram a PNPIC.",
    "reference": "Ministério da Saúde — Política Nacional de Práticas Integrativas e Complementares no SUS (Portarias nº 971/2006, 849/2017 e 702/2018)",
    "tags": [
      "PNPIC",
      "práticas integrativas",
      "SUS"
    ],
    "alert": "Gabarito discutível: após as ampliações de 2017 e 2018, as práticas citadas em A, B e D também passaram a integrar a PNPIC; a banca considerou apenas a combinação da política original de 2006."
  },
  {
    "id": "hosbos2025-86",
    "topography": "15",
    "topic": "Saúde do idoso",
    "module": "Saúde Coletiva",
    "text": "Paciente, senhora idosa com 75 anos de idade, passa por consulta médica em unidade de saúde do SUS, acompanhada de sua filha, por quem demonstra carinho, afeto e confiança. Ela demonstra dificuldades em relatar suas queixas de saúde, fazendo com que a filha responda às perguntas que lhes são feitas. Considerando os preceitos da Política Nacional de Humanização – HumanizaSUS, assinale a alternativa que corresponde à ação mais adequada, visando garantir o atendimento humanizado e respeitar a autonomia da paciente.",
    "options": [
      "(A) Perguntar diretamente à filha quais são os problemas de saúde para evitar o constrangimento da paciente.",
      "(B) Solicitar que a filha saia da sala para garantir que a paciente se sinta à vontade para falar sobre sua saúde",
      "(C) Explicar à paciente e à sua filha a importância da participação direta da paciente e encorajá-la a expressar suas preocupações, oferecendo um ambiente acolhedor e respeitoso.",
      "(D) Encerrar a consulta o mais rapidamente possível e agendar um retorno, na expectativa de que a paciente se sinta mais confortável na próxima vez.",
      "(E) Prescrever um tratamento básico sem aprofundar a avaliação, considerando a falta de informações diretas da paciente."
    ],
    "correctAnswer": 2,
    "explanation": "A Política Nacional de Humanização valoriza o acolhimento, a autonomia e o protagonismo do usuário. Diante de uma idosa que tem dificuldade em se expressar, mas tem vínculo de confiança com a filha, o adequado é incluir a acompanhante e, ao mesmo tempo, estimular a paciente a falar por si, em ambiente acolhedor.",
    "commentary": "Perguntar só à filha (A): retira a autonomia e o protagonismo da paciente.\n\nRetirar a filha da sala (B): a paciente confia na filha; excluí-la sem motivo pode gerar desconforto e perder informações.\n\nEncerrar e remarcar (D): nega o atendimento e o acolhimento.\n\nPrescrever sem avaliar (E): contraria a boa prática e a integralidade.",
    "reference": "Ministério da Saúde — Política Nacional de Humanização (HumanizaSUS), 2003/2013",
    "tags": [
      "HumanizaSUS",
      "acolhimento",
      "autonomia",
      "saúde do idoso"
    ]
  },
  {
    "id": "hosbos2025-87",
    "topography": "15",
    "topic": "Imunização",
    "module": "Saúde Coletiva",
    "text": "A Vacina BCG é disponibilizada pelo Programa Nacional de Imunização do Ministério da Saúde. Segundo as orientações do Ministério, é correto afirmar que",
    "options": [
      "(A) ela deve ser administrada em dose única, o mais precocemente possível, de preferência na primeira consulta da criança no ambulatório de pediatria.",
      "(B) ela deve ser administrada em 3 doses, logo após o nascimento e com 3 e 6 meses de idade.",
      "(C) a identificação da cicatriz vacinal não pode ser usada como comprovação de que a vacina foi aplicada.",
      "(D) não há contraindicação da vacina para gestantes e pessoas imunodeprimidas.",
      "(E) em crianças nascidas com peso inferior a 2 kg, deve-se adiar a vacinação até que atinjam esse peso."
    ],
    "correctAnswer": 4,
    "explanation": "A BCG é feita em dose única, ao nascer, de preferência ainda na maternidade. Recém-nascidos com menos de 2.000 g devem esperar atingir esse peso, porque a pele muito fina aumenta o risco de reações locais e a aplicação intradérmica é difícil.",
    "commentary": "Na primeira consulta ambulatorial (A): deve ser aplicada o mais cedo possível, de preferência na maternidade, nas primeiras 12 horas.\n\nTrês doses (B): é dose única.\n\nCicatriz não comprova vacinação (C): o registro é a comprovação principal, mas a cicatriz é um indicativo; além disso, a ausência de cicatriz não exige revacinação.\n\nSem contraindicação em gestantes e imunodeprimidos (D): é vacina viva atenuada, contraindicada nessas situações.",
    "reference": "Ministério da Saúde — Manual de Normas e Procedimentos para Vacinação (2024) / Nota técnica sobre BCG",
    "tags": [
      "BCG",
      "imunização",
      "calendário vacinal"
    ]
  },
  {
    "id": "hosbos2025-88",
    "topography": "15",
    "topic": "Saúde do trabalhador",
    "module": "Saúde Coletiva",
    "text": "Após vários anos atuando em um hospital de alta complexidade, uma profissional da área da saúde começou a manifestar sintomas como fadiga crônica, desinteresse pelas atividades laborais, dificuldade de concentração, irritabilidade persistente e uma sensação constante de esgotamento emocional e de incapacidade para cumprir todas as suas responsabilidades. Assinale a alternativa que melhor explica a possível condição dessa trabalhadora.",
    "options": [
      "(A) Transtorno de ansiedade generalizada, desencadeado pela pressão do trabalho.",
      "(B) Síndrome de Burnout, resultante do estresse crônico no trabalho.",
      "(C) Depressão major, causada por fatores externos à rotina profissional.",
      "(D) Transtorno bipolar, caracterizado por oscilações de humor intensas."
    ],
    "correctAnswer": 1,
    "explanation": "Exaustão emocional, distanciamento/desinteresse pelo trabalho e sensação de incapacidade (baixa realização profissional) relacionados ao estresse crônico no trabalho caracterizam a síndrome de burnout. A CID-11 a classifica como fenômeno ocupacional (QD85), e no Brasil é reconhecida como doença relacionada ao trabalho.",
    "commentary": "Ansiedade generalizada (A): preocupação excessiva com múltiplos temas, não restrita ao trabalho.\n\nDepressão por fatores externos ao trabalho (C): o quadro está claramente ligado à rotina profissional.\n\nTranstorno bipolar (D): exigiria episódios de mania ou hipomania.",
    "reference": "OMS — CID-11 (QD85 Burnout) / Ministério da Saúde — Lista de Doenças Relacionadas ao Trabalho (Portaria nº 1.999/2023)",
    "tags": [
      "síndrome de burnout",
      "saúde do trabalhador",
      "saúde mental"
    ]
  },
  {
    "id": "hosbos2025-89",
    "topography": "15",
    "topic": "Ética médica",
    "module": "Saúde Coletiva",
    "text": "Um jovem de 22 anos, estudante universitário, apresenta sinais de transtorno mental e decide procurar ajuda em um hospital psiquiátrico. Após avaliação, o médico recomenda a sua internação voluntária. O paciente concorda e assina a declaração de consentimento. No entanto, após alguns dias, ele começa a se sentir melhor e deseja sair do hospital. De acordo com o que dispõe a legislação sobre a proteção e os direitos das pessoas com transtornos mentais, assinale a alternativa que apresenta o procedimento mais adequado.",
    "options": [
      "(A) O paciente deve fazer uma solicitação escrita para a alta, que deve ser analisada pelo médico assistente.",
      "(B) O paciente deve solicitar a alta por meio de um familiar, que deve assinar um documento.",
      "(C) O médico assistente deve determinar a alta, independentemente do desejo do paciente.",
      "(D) A alta deve ser concedida automaticamente após 7 dias de internação.",
      "(E) A alta só pode ser concedida após a avaliação de um juiz competente."
    ],
    "correctAnswer": 0,
    "explanation": "Pela Lei nº 10.216/2001, a internação voluntária é aquela consentida pelo paciente, que assina declaração no momento da admissão. O término da internação voluntária se dá por solicitação escrita do paciente ou por determinação do médico assistente.",
    "commentary": "Alta por meio de familiar (B): a solicitação por familiar ou responsável é o caminho para encerrar a internação INvoluntária.\n\nMédico decide independentemente do desejo do paciente (C): na voluntária, o pedido escrito do paciente é suficiente para iniciar o término.\n\nAlta automática em 7 dias (D): não existe prazo automático.\n\nNecessidade de juiz (E): aplica-se à internação compulsória, determinada pela Justiça.",
    "reference": "Lei nº 10.216/2001 (Lei da Reforma Psiquiátrica), art. 7º",
    "tags": [
      "internação psiquiátrica",
      "lei 10.216",
      "saúde mental",
      "legislação"
    ]
  },
  {
    "id": "hosbos2025-90",
    "topography": "15",
    "topic": "Atenção Primária",
    "module": "Saúde Coletiva",
    "text": "A estratégia Consultório na Rua foi instituída pela Política Nacional de Atenção Básica, em 2011, visando ampliar o acesso da população em situação de rua aos serviços de saúde. Faz parte das atribuições das suas equipes técnicas",
    "options": [
      "(A) realizar atendimentos médicos apenas em consultórios fixos, provendo meios para o encaminhamento dos pacientes em situação de rua.",
      "(B) oferecer atenção integral à saúde das pessoas em situação de rua, atuando de forma itinerante e em parceria com outras instituições de saúde e assistência social.",
      "(C) focar exclusivamente na saúde mental, sem considerar outras necessidades de saúde da população em situação de rua.",
      "(D) atuar apenas durante o horário comercial, limitando o acesso das pessoas em situação de rua aos serviços de saúde.",
      "(E) desenvolver ações de saúde apenas em áreas urbanas, sem qualquer possibilidade de flexibilização para atender habitantes de áreas rurais ou periurbanas."
    ],
    "correctAnswer": 1,
    "explanation": "As equipes de Consultório na Rua oferecem atenção integral à saúde da população em situação de rua, de forma itinerante, desenvolvendo ações compartilhadas com as UBS, CAPS, serviços de urgência e a rede de assistência social.",
    "commentary": "Só em consultórios fixos (A): o trabalho é itinerante, onde as pessoas estão.\n\nFoco exclusivo em saúde mental (C): o cuidado é integral (clínico, saúde mental, álcool e drogas, IST, tuberculose).\n\nSó em horário comercial (D): o horário é adaptado às necessidades da população, inclusive noturno.\n\nSó em áreas urbanas, sem flexibilização (E): a política permite adaptação às realidades locais.",
    "reference": "Ministério da Saúde — Manual sobre o cuidado à saúde junto à população em situação de rua (2012) / PNAB 2017",
    "tags": [
      "consultório na Rua",
      "população em situação de rua",
      "atenção primária"
    ]
  },
  {
    "id": "hosbos2025-91",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "O princípio do SUS que se refere ao conjunto integrado e contínuo de ações e serviços preventivos e curativos, tanto individuais quanto coletivos, necessários para cada caso em todos os níveis de complexidade do sistema, é denominado de",
    "options": [
      "(A) universalidade de acesso aos serviços de saúde.",
      "(B) preservação da autonomia das pessoas.",
      "(C) igualdade da assistência à saúde.",
      "(D) integralidade de assistência.",
      "(E) descentralização político-administrativa."
    ],
    "correctAnswer": 3,
    "explanation": "A Lei nº 8.080/1990 (art. 7º, II) define a integralidade de assistência como o conjunto articulado e contínuo de ações e serviços preventivos e curativos, individuais e coletivos, exigidos para cada caso em todos os níveis de complexidade do sistema.",
    "commentary": "Universalidade (A): acesso aos serviços em todos os níveis de assistência para todas as pessoas.\n\nPreservação da autonomia (B): defesa da integridade física e moral das pessoas.\n\nIgualdade (C): assistência sem preconceitos ou privilégios de qualquer espécie.\n\nDescentralização (E): direção única em cada esfera de governo, com ênfase na municipalização.",
    "reference": "Lei nº 8.080/1990, art. 7º",
    "tags": [
      "princípios do SUS",
      "integralidade",
      "lei 8.080"
    ]
  },
  {
    "id": "hosbos2025-92",
    "topography": "15",
    "topic": "Vigilância epidemiológica",
    "module": "Saúde Coletiva",
    "text": "O conjunto de ações que proporcionam o conhecimento, a detecção ou prevenção de qualquer mudança nos fatores determinantes e condicionantes de saúde individual ou coletiva, com a finalidade de recomendar e adotar as medidas de prevenção e controle das doenças ou agravos, refere-se ao conceito de",
    "options": [
      "(A) Vigilância Epidemiológica.",
      "(B) Promoção da Saúde.",
      "(C) Educação em Saúde.",
      "(D) Planejamento Sanitário.",
      "(E) Atenção Primária à Saúde."
    ],
    "correctAnswer": 0,
    "explanation": "A definição transcrita é a de vigilância epidemiológica pela Lei nº 8.080/1990 (art. 6º, § 2º): conjunto de ações que proporciona o conhecimento, a detecção ou a prevenção de qualquer mudança nos fatores determinantes e condicionantes da saúde individual ou coletiva, para recomendar e adotar medidas de prevenção e controle.",
    "commentary": "Promoção da saúde (B): ações para melhorar as condições de vida e capacitar a comunidade.\n\nEducação em saúde (C): processo pedagógico de construção de conhecimentos.\n\nPlanejamento sanitário (D): processo de gestão para definir prioridades e ações.\n\nAtenção primária (E): nível de atenção, porta de entrada do sistema.",
    "reference": "Lei nº 8.080/1990, art. 6º, § 2º",
    "tags": [
      "vigilância epidemiológica",
      "lei 8.080",
      "conceitos"
    ]
  },
  {
    "id": "hosbos2025-93",
    "topography": "15",
    "topic": "Vigilância epidemiológica",
    "module": "Saúde Coletiva",
    "text": "Segundo a Lista Nacional de Notificação Compulsória de Doenças, Agravos e Eventos de Saúde Pública, os casos de \"Doença aguda pelo vírus Zika em gestante\" são de notificação imediata junto ao Sistema de Informação de Agravos de Notificação (Sinan). Isso significa que devem ser obrigatoriamente notificados",
    "options": [
      "(A) no ato do diagnóstico.",
      "(B) no mesmo dia do diagnóstico.",
      "(C) em até 12 horas após o diagnóstico.",
      "(D) em até 24 horas após o diagnóstico.",
      "(E) em até 48 horas após o diagnóstico."
    ],
    "correctAnswer": 3,
    "explanation": "Pela Portaria de Consolidação nº 4/2017 (lista nacional de notificação compulsória), notificação imediata é aquela feita em até 24 horas a partir do conhecimento da ocorrência, pelo meio de comunicação mais rápido. A notificação semanal é feita em até 7 dias.",
    "commentary": "No ato do diagnóstico (A): o prazo legal é de até 24 horas.\n\nNo mesmo dia (B): o prazo é de 24 horas, que pode ultrapassar o dia do diagnóstico.\n\nAté 12 horas (C): não existe esse prazo na legislação.\n\nAté 48 horas (E): ultrapassa o prazo de 24 horas.",
    "reference": "Ministério da Saúde — Portaria de Consolidação nº 4/2017, Anexo V (Lista Nacional de Notificação Compulsória)",
    "tags": [
      "notificação compulsória",
      "vigilância epidemiológica",
      "zika"
    ]
  },
  {
    "id": "hosbos2025-94",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "A instância de controle social do SUS, de caráter permanente e deliberativo, composta por representantes do governo, prestadores de serviço, profissionais de saúde e usuários, que atua na formulação de estratégias e no controle da execução da política de saúde no âmbito municipal, inclusive nos aspectos econômicos e financeiros, é",
    "options": [
      "(A) a Conferência Municipal de Saúde.",
      "(B) o Conselho Municipal de Saúde.",
      "(C) a Câmara Municipal de Vereadores.",
      "(D) a Secretaria Municipal de Saúde.",
      "(E) a Comissão Intergestores de Saúde."
    ],
    "correctAnswer": 1,
    "explanation": "Pela Lei nº 8.142/1990, o Conselho de Saúde tem caráter permanente e deliberativo, é composto por governo, prestadores, profissionais de saúde e usuários (estes com 50% das vagas) e atua na formulação de estratégias e no controle da execução da política de saúde, inclusive nos aspectos econômicos e financeiros.",
    "commentary": "Conferência de Saúde (A): reúne-se a cada 4 anos para avaliar a situação de saúde e propor diretrizes; não é permanente.\n\nCâmara de Vereadores (C): é o Poder Legislativo, não instância de controle social do SUS.\n\nSecretaria de Saúde (D): é o órgão gestor.\n\nComissão Intergestores (E): espaço de pactuação entre gestores (CIT, CIB, CIR), sem participação de usuários.",
    "reference": "Lei nº 8.142/1990, art. 1º",
    "tags": [
      "controle social",
      "conselho de saúde",
      "lei 8.142"
    ]
  },
  {
    "id": "hosbos2025-95",
    "topography": "15",
    "topic": "Imunização",
    "module": "Saúde Coletiva",
    "text": "Uma jovem de 17 anos de idade procura a unidade de saúde, solicitando informações sobre dose de reforço da vacina contra febre amarela. Relata que já foi vacinada contra essa doença anteriormente. Recomenda-se a aplicação da dose de reforço, caso ela",
    "options": [
      "(A) vá viajar para região ou país onde a doença seja endêmica.",
      "(B) esteja grávida.",
      "(C) tenha tomado a primeira dose há mais de 5 anos.",
      "(D) tenha tomado a primeira dose há mais de 10 anos.",
      "(E) tenha recebido a primeira dose antes de completar 5 anos de idade."
    ],
    "correctAnswer": 4,
    "explanation": "Pelo calendário do PNI, a vacina de febre amarela é feita aos 9 meses, com reforço aos 4 anos. Quem recebeu a primeira dose antes dos 5 anos e não tomou o reforço deve receber uma dose adicional. Quem foi vacinado a partir dos 5 anos tem dose única, sem reforço.",
    "commentary": "Viagem a área endêmica (A): quem tem esquema completo não precisa de reforço para viajar.\n\nGestação (B): a vacina é, em geral, contraindicada na gestação.\n\nPrimeira dose há mais de 5 anos (C) ou 10 anos (D): o reforço a cada 10 anos foi abolido; o critério é a idade em que a dose foi recebida.",
    "reference": "Ministério da Saúde — Calendário Nacional de Vacinação (2024) / Nota técnica sobre a vacina de febre amarela",
    "tags": [
      "febre amarela",
      "imunização",
      "calendário vacinal",
      "adolescente"
    ]
  },
  {
    "id": "hosbos2025-96",
    "topography": "15",
    "topic": "Epidemiologia",
    "module": "Saúde Coletiva",
    "text": "Um dos mais importantes indicadores em saúde pública é o coeficiente de mortalidade infantil. Seu cálculo, para uma determinada área e período de tempo, é feito estabelecendo-se a relação entre o número de óbitos de menores de",
    "options": [
      "(A) 1 ano pelo número total de óbitos.",
      "(B) 1 mês pelo número total de partos.",
      "(C) 1 ano pelo número total de partos.",
      "(D) 1 ano pelo número de nascidos vivos.",
      "(E) 1 mês pelo número de nascidos vivos."
    ],
    "correctAnswer": 3,
    "explanation": "Coeficiente de mortalidade infantil = número de óbitos de menores de 1 ano ÷ número de nascidos vivos no mesmo local e período × 1.000.",
    "commentary": "Óbitos de < 1 ano pelo total de óbitos (A): isso é mortalidade proporcional (Swaroop-Uemura usa ≥ 50 anos).\n\nÓbitos de < 1 mês por partos (B): o denominador correto é nascidos vivos, e < 28 dias define a mortalidade neonatal.\n\nÓbitos de < 1 ano por partos (C): partos incluem natimortos e gemelares, distorcendo o denominador.\n\nÓbitos de < 1 mês por nascidos vivos (E): corresponde à mortalidade neonatal (até 27 dias), não à infantil.",
    "reference": "RIPSA — Indicadores básicos para a saúde no Brasil, 2ª ed. (2008)",
    "tags": [
      "mortalidade infantil",
      "indicadores de saúde",
      "epidemiologia"
    ]
  },
  {
    "id": "hosbos2025-97",
    "topography": "15",
    "topic": "Testes diagnósticos",
    "module": "Saúde Coletiva",
    "text": "Em uma situação em que o correto diagnóstico de uma doença e o seu tratamento precoce são importantes para se evitar evoluções desfavoráveis, é importante que o procedimento diagnóstico tenha alta",
    "options": [
      "(A) reprodutibilidade.",
      "(B) validade.",
      "(C) precisão.",
      "(D) especificidade.",
      "(E) sensibilidade."
    ],
    "correctAnswer": 4,
    "explanation": "Quando deixar de diagnosticar uma doença tem consequências graves e há tratamento eficaz se iniciado cedo, o teste deve ter alta sensibilidade: identifica quase todos os doentes (poucos falsos-negativos). Um teste sensível negativo afasta a doença.",
    "commentary": "Reprodutibilidade (A): é a capacidade de repetir resultados semelhantes; não garante detectar os doentes.\n\nValidade (B): é termo geral (sensibilidade e especificidade juntas); a pergunta pede a característica específica.\n\nPrecisão (C): sinônimo de reprodutibilidade, não de capacidade de detecção.\n\nEspecificidade (D): prioriza evitar falsos-positivos, importante quando o falso-positivo traz dano (tratamento agressivo, estigma).",
    "reference": "Fletcher RH. Epidemiologia Clínica: Elementos Essenciais, 5ª ed.",
    "tags": [
      "testes diagnósticos",
      "sensibilidade",
      "especificidade"
    ]
  },
  {
    "id": "hosbos2025-98",
    "topography": "15",
    "topic": "Estudos epidemiológicos",
    "module": "Saúde Coletiva",
    "text": "Para se estabelecer a relação entre a exposição a hipotético fator de risco para a ocorrência de determinada doença, foram selecionados dois grupos de pessoas com caraterísticas semelhantes (100 pessoas em cada grupo), sendo um grupo exposto ao fator de risco e o outro não exposto. Ao longo de um ano, foram registrados 10 casos da doença no primeiro grupo e 5 casos no segundo grupo. Esse modelo de investigação epidemiológica é denominado estudo de",
    "options": [
      "(A) prevalência.",
      "(B) corte transversal.",
      "(C) coorte.",
      "(D) caso-controle.",
      "(E) ensaio clínico."
    ],
    "correctAnswer": 2,
    "explanation": "Os grupos foram formados pela EXPOSIÇÃO (exposto e não exposto) e acompanhados ao longo do tempo para ver quem desenvolve a doença: estudo de coorte (prospectivo). A exposição não foi atribuída pelo pesquisador, então não é ensaio clínico.",
    "commentary": "Prevalência (A) e corte transversal (B): avaliam exposição e doença em um único momento, sem seguimento.\n\nCaso-controle (D): parte da doença (casos e controles) e investiga a exposição no passado.\n\nEnsaio clínico (E): o pesquisador aloca a intervenção; aqui a exposição é natural.",
    "reference": "Rouquayrol MZ. Epidemiologia & Saúde, 8ª ed. — Desenhos de estudo",
    "tags": [
      "estudo de coorte",
      "desenhos de estudo",
      "epidemiologia"
    ]
  },
  {
    "id": "hosbos2025-99",
    "topography": "15",
    "topic": "Bioestatística",
    "module": "Saúde Coletiva",
    "text": "Para se estabelecer a relação entre a exposição a hipotético fator de risco para a ocorrência de determinada doença, foram selecionados dois grupos de pessoas com caraterísticas semelhantes (100 pessoas em cada grupo), sendo um grupo exposto ao fator de risco e o outro não exposto. Ao longo de um ano, foram registrados 10 casos da doença no primeiro grupo e 5 casos no segundo grupo. Qual é o valor do risco relativo nesse estudo?",
    "options": [
      "(A) 0.5",
      "(B) 1",
      "(C) 2",
      "(D) 5",
      "(E) 10"
    ],
    "correctAnswer": 2,
    "explanation": "Incidência nos expostos = 10/100 = 0,10. Incidência nos não expostos = 5/100 = 0,05.\n\nRisco relativo = 0,10 ÷ 0,05 = 2. Os expostos têm o dobro do risco de adoecer.",
    "commentary": "0,5 (A): seria a razão invertida (não expostos ÷ expostos).\n\n1 (B): indicaria ausência de associação.\n\n5 (D): corresponde ao número de casos nos não expostos, não a uma razão.\n\n10 (E): corresponde ao número de casos nos expostos.",
    "reference": "Fletcher RH. Epidemiologia Clínica: Elementos Essenciais, 5ª ed. — Risco",
    "tags": [
      "risco relativo",
      "medidas de associação",
      "estudo de coorte"
    ]
  },
  {
    "id": "hosbos2025-100",
    "topography": "15",
    "topic": "Bioestatística",
    "module": "Saúde Coletiva",
    "text": "Para se estabelecer a relação entre a exposição a hipotético fator de risco para a ocorrência de determinada doença, foram selecionados dois grupos de pessoas com caraterísticas semelhantes (100 pessoas em cada grupo), sendo um grupo exposto ao fator de risco e o outro não exposto. Ao longo de um ano, foram registrados 10 casos da doença no primeiro grupo e 5 casos no segundo grupo. Qual é o valor do risco atribuível nesse estudo?",
    "options": [
      "(A) 0.05",
      "(B) 0.5",
      "(C) 1",
      "(D) 5",
      "(E) 10"
    ],
    "correctAnswer": 0,
    "explanation": "Risco atribuível (diferença de riscos) = incidência nos expostos − incidência nos não expostos = 0,10 − 0,05 = 0,05 (5 casos por 100 expostos em um ano).\n\nÉ o excesso de risco que pode ser atribuído à exposição.",
    "commentary": "0,5 (B): seria a razão invertida dos riscos, não a diferença.\n\n1 (C): não corresponde a nenhum cálculo do estudo.\n\n5 (D): seria a diferença em casos absolutos (10 − 5), sem dividir pelo número de pessoas; expressa como risco, é 0,05.\n\n10 (E): número de casos nos expostos.",
    "reference": "Fletcher RH. Epidemiologia Clínica: Elementos Essenciais, 5ª ed. — Risco",
    "tags": [
      "risco atribuível",
      "medidas de associação",
      "estudo de coorte"
    ]
  }
];
