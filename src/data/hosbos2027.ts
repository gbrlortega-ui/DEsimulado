import { Question } from '../types';

// HOS-BOS 2027 — Hospital Oftalmológico de Sorocaba / Banco de Olhos de Sorocaba (residência médica, Vunesp, 18/10/2026). 100 questões.
// Gabarito conferido no gabarito comentado do AjudaMédico; explicações com texto próprio.
export const HOSBOS_2027_QUESTIONS: Question[] = [
  {
    "id": "hosbos2027-1",
    "topography": "3.1",
    "topic": "Doença hemorroidária",
    "module": "Cirurgia",
    "text": "Homem de 34 anos chega ao pronto-socorro com queixa de sangramento anal há 3 dias. Ele relata que o sangramento começou em pequena quantidade, com fezes avermelhadas e muco. Notou presença de “tumoração” anal que sai do ânus durante a evacuação e exige que o paciente a empurre de volta para dentro, manualmente. O paciente tem um histórico de constipação crônica.\n\nDiante do exposto, pode-se afirmar que a etiologia e classificação da doença que causou o sangramento do paciente é:",
    "options": [
      "(A) Hemorroida interna de 1º grau.",
      "(B) Hemorroida interna de 2º grau.",
      "(C) Hemorroida interna de 3º grau.",
      "(D) Hemorroida interna de 4º grau.",
      "(E) Trombose hemorroidária externa."
    ],
    "correctAnswer": 2,
    "explanation": "Sangramento vermelho vivo às evacuações em paciente constipado, com mamilo hemorroidário que se exterioriza durante a evacuação e só retorna com redução manual: doença hemorroidária interna de 3º grau (classificação de Goligher).\n\nA classificação depende do prolapso: 1º grau sem prolapso; 2º grau com prolapso e redução espontânea; 3º grau com redução manual; 4º grau com prolapso permanente e irredutível.",
    "commentary": "1º grau (A): sangra, mas não prolapsa.\n\n2º grau (B): prolapsa e volta sozinha, sem necessidade de redução manual.\n\n4º grau (D): o prolapso é permanente e não se reduz.\n\nTrombose hemorroidária externa (E): nódulo perianal doloroso, arroxeado, abaixo da linha pectínea, sem prolapso redutível.",
    "reference": "Diretrizes da Sociedade Brasileira de Coloproctologia / ASCRS Clinical Practice Guidelines for Hemorrhoids (2024)",
    "tags": [
      "coloproctologia",
      "doença hemorroidária",
      "classificação de Goligher"
    ]
  },
  {
    "id": "hosbos2027-2",
    "topography": "3.4",
    "topic": "Pancreatite aguda",
    "module": "Cirurgia",
    "text": "Homem de 36 anos deu entrada na emergência com quadro de dor abdominal em faixa (início há cerca de 8 horas), náuseas, vários episódios de vômitos e distensão abdominal discreta. Refere ingestão ocasional de bebidas alcoólicas, sem história de consumo crônico ou abusivo. Após as medidas iniciais, foram realizados os seguintes exames diagnósticos:\n• Hemograma: 12.000 leucócitos.\n• PCR: 29 mg/L (valor de referência < 3 mg/L).\n• Amilase: 726 U/L (valor de referência 25 e 125 U/L).\n• Lipase: 456 U/L (valor de referência até 60 U/L).\n• Bilirrubinas, fosfatase alcalina, gama-GT e transaminases sem alterações importantes.\n• Ultrassonografia de abdome: sem alterações.\n• Tomografia abdominal: demonstrada na imagem. (https://laccufjfgv.wixsite.com/clinicacirurgica)\n\nNesse caso, as atuais diretrizes recomendam realizar",
    "options": [
      "(A) O exame de colangiopancreatografia retrógrada endoscópica precocemente, nas primeiras 24 horas após a admissão do paciente na emergência.",
      "(B) Nova tomografia contrastada, após aproximadamente 72 horas, caso haja indicação clínica, pois a tomografia apresentada na imagem foi realizada precocemente, não permitindo avaliação definitiva da presença de necrose pancreática.",
      "(C) Ecoendoscopia de 10 a 14 dias após o início do quadro clínico, já que a necrose pancreática, em geral, se estabelece nesse período.",
      "(D) Realizar colangiorressonância sem contraste iodado, pois este pode causar agravo do processo inflamatório pancreático.",
      "(E) Tomografia em todos os casos de pancreatite aguda para confirmação diagnóstica, mesmo nos casos leves com apresentação clínica clássica e enzimas pancreáticas alteradas, o que ratifica sua necessidade dentre os exames diagnósticos realizados nesse paciente."
    ],
    "correctAnswer": 1,
    "explanation": "Pancreatite aguda (dor em faixa e lipase acima de 3 vezes o normal) sem colestase e com ultrassonografia sem litíase. A tomografia mostra pâncreas aumentado e edemaciado, feita nas primeiras horas.\n\nO diagnóstico já estava feito pela clínica e pelas enzimas; a TC precoce não estava indicada e subestima a necrose, que só se define após 72 horas. Se houver piora ou falta de melhora, a recomendação é uma TC contrastada após cerca de 72 horas (ou 5–7 dias) para avaliar necrose e complicações locais.",
    "commentary": "CPRE em 24 h (A): indicada só na colangite associada; não há colestase nem litíase.\n\nEcoendoscopia em 10–14 dias para necrose (C): a necrose se avalia por TC contrastada; a ecoendoscopia serve para investigar microlitíase em pancreatite idiopática, depois da fase aguda.\n\nColangiorressonância porque o contraste agrava a pancreatite (D): o contraste iodado não piora a pancreatite; não há indicação desse exame agora.\n\nTC em todos os casos (E): a TC não é necessária quando a clínica e as enzimas confirmam o diagnóstico.",
    "reference": "ACG Guideline: Management of Acute Pancreatitis (2024) / Classificação de Atlanta revisada",
    "tags": [
      "cirurgia geral",
      "pancreatite aguda",
      "tomografia",
      "necrose pancreática"
    ],
    "image": "/images/hosbos2027-2.webp"
  },
  {
    "id": "hosbos2027-3",
    "topography": "3.4",
    "topic": "Pancreatite crônica",
    "module": "Cirurgia",
    "text": "Homem de 48 anos procura atendimento ambulatorial por dor abdominal recorrente há cerca de três anos, localizada em epigástrio, irradiada para dorso, com piora após alimentação e alívio parcial ao inclinar o tronco anteriormente. Refere perda ponderal de 12 kg no último ano, episódios frequentes de diarreia volumosa e gordurosa e antecedente de etilismo crônico ininterrupto por mais de 20 anos. Ao exame físico, apresenta-se emagrecido, com discreta dor à palpação profunda do epigástrio. Exames laboratoriais demonstram elastase fecal reduzida e deficiência de vitaminas lipossolúveis; glicemia de jejum de 178 mg/dL, hemoglobina glicada de 8,1%, amilase e lipase normais. Foi realizada tomografia computadorizada de abdome, evidenciando atrofia pancreática difusa, dilatação irregular do ducto pancreático principal e múltiplas calcificações grosseiras distribuídas pelo parênquima pancreático, predominantemente em cabeça e corpo do pâncreas.\n\nDiante do quadro clínico e dos achados tomográficos, qual é a conduta mais adequada nesse momento?",
    "options": [
      "(A) Indicar antibioticoterapia profilática de amplo espectro e jejum prolongado para evitar progressão inflamatória pancreática.",
      "(B) Solicitar CPRE terapêutica de urgência para drenagem pancreática, independentemente da intensidade dos sintomas.",
      "(C) Indicar videolaparoscopia para biópsia pancreática para confirmação diagnóstica e avaliação do grau de diferenciação neoplásica.",
      "(D) Indicar pancreatectomia total imediata devido ao elevado risco de adenocarcinoma pancreático.",
      "(E) Instituir reposição de enzimas pancreáticas associada a analgesia, cessação do etilismo e suporte nutricional."
    ],
    "correctAnswer": 4,
    "explanation": "Etilista crônico com dor epigástrica recorrente irradiada para o dorso, esteatorreia, emagrecimento, elastase fecal baixa, deficiência de vitaminas lipossolúveis, diabetes e TC com calcificações, atrofia e dilatação ductal: pancreatite crônica com insuficiência exócrina e endócrina.\n\nO tratamento inicial é clínico: abstinência alcoólica (e de tabaco), reposição de enzimas pancreáticas com as refeições, analgesia escalonada, suporte nutricional com vitaminas lipossolúveis e controle do diabetes. Procedimentos endoscópicos ou cirúrgicos ficam para dor refratária ou complicações.",
    "commentary": "Antibiótico profilático e jejum (A): não há infecção, e o jejum agravaria a desnutrição.\n\nCPRE de urgência (B): a drenagem ductal é eletiva e reservada à dor refratária com obstrução ductal; não é urgência.\n\nBiópsia laparoscópica (C): os achados são típicos de pancreatite crônica; biópsia só se houver lesão suspeita de neoplasia.\n\nPancreatectomia total imediata (D): cirurgia de exceção, para dor intratável; o risco de câncer não justifica ressecção profilática.",
    "reference": "Consenso Brasileiro de Pancreatite Crônica / ACG Clinical Guideline: Chronic Pancreatitis (2020)",
    "tags": [
      "cirurgia geral",
      "pancreatite crônica",
      "insuficiência pancreática exócrina",
      "etilismo"
    ]
  },
  {
    "id": "hosbos2027-4",
    "topography": "3.1",
    "topic": "Diverticulose/diverticulite",
    "module": "Cirurgia",
    "text": "Uma paciente de 49 anos, hipertensa e diabética, procura o pronto atendimento com quadro de dor abdominal intensa localizada em fossa ilíaca esquerda há três dias, associada a febre (38,5°C), inapetência e queda do estado geral. Ao exame físico, apresenta dor à palpação profunda e sinais de irritação peritoneal localizada em fossa ilíaca esquerda, sem sinais de peritonite generalizada. A tomografia computadorizada de abdome revela presença de divertículos no sigmoide e abscesso pélvico de 7,0 cm.\n\nConsiderando as diretrizes atuais, assinale a alternativa que apresenta, correta e respectivamente, a classificação de Hinchey e a conduta inicial indicada para essa paciente.",
    "options": [
      "(A) Hinchey Ia – Antibioticoterapia oral em regime ambulatorial, com seguimento clínico rigoroso.",
      "(B) Hinchey II – Internação hospitalar, antibioticoterapia intravenosa e drenagem percutânea guiada por imagem, quando tecnicamente viável.",
      "(C) Hinchey III – Laparotomia exploradora com colectomia segmentar e colostomia terminal (procedimento de Hartmann).",
      "(D) Hinchey IV – Colonoscopia de urgência para confirmação diagnóstica e eventual drenagem endoscópica da coleção.",
      "(E) Hinchey IV – Ressonância magnética da pelve para melhor elucidação diagnóstica e facilitar a abordagem percutânea."
    ],
    "correctAnswer": 1,
    "explanation": "Diverticulite aguda com abscesso pélvico de 7 cm, sem peritonite generalizada: estágio II de Hinchey (abscesso pélvico ou retroperitoneal distante). O estágio I é o abscesso pericólico.\n\nAbscessos maiores que 3–4 cm devem ser tratados com internação, antibiótico intravenoso e drenagem percutânea guiada por imagem quando houver acesso seguro.",
    "commentary": "Hinchey Ia ambulatorial (A): Ia é inflamação pericólica sem abscesso; um abscesso de 7 cm exige internação.\n\nHinchey III com Hartmann (C): III é peritonite purulenta generalizada, ausente aqui.\n\nHinchey IV com colonoscopia (D): IV é peritonite fecal; e a colonoscopia é contraindicada na fase aguda pelo risco de perfuração.\n\nHinchey IV com ressonância (E): classificação errada; a TC já define o caso e orienta a drenagem.",
    "reference": "ASCRS Clinical Practice Guidelines for Left-Sided Colonic Diverticulitis (2020) / Classificação de Hinchey modificada",
    "tags": [
      "coloproctologia",
      "diverticulite",
      "classificação de Hinchey",
      "drenagem percutânea"
    ]
  },
  {
    "id": "hosbos2027-5",
    "module": "Cirurgia",
    "text": "Mulher, 24 anos, internada em Instituição Psiquiátrica, apresenta-se com história de dor epigástrica, plenitude pós-prandial, vômitos recorrentes e perda ponderal progressiva. Ao exame físico, apresenta massa palpável em epigástrio. A endoscopia digestiva alta confirmou tratar-se de um tricobezoar volumoso ocupando quase toda a cavidade gástrica e ausência de prolongamento da massa para o duodeno ou jejuno. A tomografia evidencia conteúdo intragástrico heterogêneo, sem sinais de infiltração parietal. Optou-se por tratamento cirúrgico. No intraoperatório, estômago apresentava volume aumentado, com aspecto perfusional preservado e sem sinais de perfuração. O material removido do interior do estômago correspondia a um tricobezoar.\n\nCom base nesse cenário, assinale a alternativa correta.",
    "options": [
      "(A) A gastrotomia com remoção completa da massa, seguida de rafia gástrica, representou estratégia adequada.",
      "(B) A cirurgia poderia ter sido evitada, uma vez que a fragmentação endoscópica da massa compacta deveria ser a abordagem inicial.",
      "(C) A cirurgia poderia ter sido evitada, pois dever-se-ia tentar a dissolução química associada a procinéticos antes de indicar cirurgia.",
      "(D) A gastrectomia parcial seria preferível nesses casos, a fim de se evitar recidiva do quadro.",
      "(E) A gastrectomia total seria a estratégia mais eficaz para essa situação, desde que o distúrbio psiquiátrico estivesse sob controle."
    ],
    "correctAnswer": 0,
    "explanation": "Tricobezoar volumoso, que ocupa quase todo o estômago, sem extensão ao delgado (não é síndrome de Rapunzel) e sem perfuração ou isquemia. Tricobezoares grandes são compactos e raramente se fragmentam por endoscopia, e não se dissolvem quimicamente.\n\nO tratamento de escolha é cirúrgico: gastrotomia, retirada completa da massa e gastrorrafia. Além disso, é obrigatório o acompanhamento psiquiátrico da tricotilomania e tricofagia para evitar recidiva.",
    "commentary": "Fragmentação endoscópica (B): funciona em bezoares pequenos; em tricobezoar volumoso costuma falhar e prolongar a anestesia.\n\nDissolução química com procinéticos (C): eficaz em fitobezoares (Coca-Cola, celulase), não em tricobezoares.\n\nGastrectomia parcial (D): não há lesão gástrica que justifique ressecção; a recidiva se previne tratando o transtorno psiquiátrico.\n\nGastrectomia total (E): mutilação desnecessária sem relação com o problema.",
    "reference": "Sabiston Tratado de Cirurgia, 21ª ed. — Estômago / Revisões sobre bezoares gástricos",
    "tags": [
      "cirurgia geral",
      "tricobezoar",
      "tricotilomania"
    ]
  },
  {
    "id": "hosbos2027-6",
    "topography": "16",
    "topic": "Isquemia mesentérica",
    "module": "Cirurgia",
    "text": "Mulher de 59 anos, portadora de fibrilação atrial crônica, em uso irregular de anticoagulante oral, apresenta dor abdominal desproporcional, súbita, há 6 horas, pós-prandial, de forte intensidade, de localização difusa. Exame físico: PA: 110 x 70 mmHg; FC: 102 bpm; FR: 20 mrpm; SatO₂: 96%; Temp. : 37,3 °C. Gasometria arterial: Lactato = 28,2 mmol/L (valor de referência: 0,5 a 1,6 mmol/L). Hemograma: leucócitose (22.000). A angiotomografia evidencia oclusão aguda da artéria mesentérica superior, associada a pneumatose intestinal e gás portal.\n\nDiante do exposto, assinale a abordagem mais indicada.",
    "options": [
      "(A) Anticoagulação plena e observação em UTI.",
      "(B) Laparoscopia diagnóstica com biópsia de alça e conduta expectante.",
      "(C) Trombólise intra-arterial endovascular imediata, sem cirurgia.",
      "(D) Laparotomia urgente com embolectomia mesentérica e avaliação de viabilidade intestinal.",
      "(E) Arteriografia para complementação diagnóstica e revascularização eletiva após 48 horas."
    ],
    "correctAnswer": 3,
    "explanation": "Fibrilação atrial com anticoagulação irregular e dor abdominal súbita, desproporcional ao exame, por oclusão aguda da artéria mesentérica superior (provável embolia). Lactato muito alto, leucocitose, pneumatose e gás portal indicam isquemia transmural e provável necrose intestinal.\n\nCom sinais de necrose, a conduta é laparotomia de urgência para revascularização (embolectomia) e avaliação da viabilidade intestinal, com ressecção do segmento inviável e, frequentemente, cirurgia de second look. Anticoagulação com heparina se inicia logo no diagnóstico.",
    "commentary": "Anticoagulação e observação (A): insuficiente diante de sinais de necrose.\n\nLaparoscopia com conduta expectante (B): a laparoscopia avalia mal a viabilidade, e a conduta expectante é inaceitável.\n\nTrombólise endovascular isolada (C): só pode ser considerada sem sinais de peritonite ou necrose; aqui é contraindicada como tratamento exclusivo.\n\nArteriografia e revascularização eletiva (E): atrasar 48 horas significa perda intestinal e morte.",
    "reference": "ESVS 2017 Guidelines on Mesenteric Arterial Disease / WSES Guidelines on Acute Mesenteric Ischemia (2022)",
    "tags": [
      "cirurgia vascular",
      "isquemia mesentérica aguda",
      "fibrilação atrial",
      "abdome agudo"
    ]
  },
  {
    "id": "hosbos2027-7",
    "topography": "14",
    "topic": "Trauma",
    "module": "Cirurgia",
    "text": "Um homem de 50 anos sofreu queda da escada (altura estimada 2 metros), caindo ao solo em posição supina. Foi atendido inicialmente por unidade do Corpo de Bombeiros e transportado à unidade de Emergência consciente e orientado, com sinais vitais iniciais estáveis (PA = 126 x 82 mmHg; FC = 88 bpm) e sob protocolo (colar cervical, prancha rígida e cobertor térmico). Na admissão da sala de emergência, foi realizado o atendimento inicial, de acordo com os preceitos do ATLS™, onde se observou que o paciente apresenta paralisia dos membros inferiores e perda de sensibilidade abaixo da cintura. O exame neurológico demonstra paraplegia flácida, arreflexia profunda e ausência do reflexo bulbocavernoso.\n\nDiante do exposto, assinale a alternativa correta.",
    "options": [
      "(A) O quadro é compatível com choque medular (spinal shock), e a ausência do reflexo bulbocavernoso indica persistência dessa fase, devendo a completude da lesão neurológica ser reavaliada após o retorno dos reflexos.",
      "(B) O paciente encontra-se em choque neurogênico, devendo receber expansão volêmica agressiva e vasopressores para tratamento da hipotensão característica.",
      "(C) A ausência do reflexo bulbocavernoso confirma lesão medular completa definitiva, indicando mau prognóstico funcional irreversível.",
      "(D) Está indicada administração imediata de metilprednisolona em altas doses nas primeiras oito horas após o trauma, por reduzir comprovadamente a morbidade neurológica.",
      "(E) A realização imediata de punção lombar está indicada para confirmação diagnóstica da lesão medular antes dos exames de imagem."
    ],
    "correctAnswer": 0,
    "explanation": "Paraplegia flácida, arreflexia e ausência do reflexo bulbocavernoso logo após trauma raquimedular caracterizam o choque medular (spinal shock): perda transitória de toda a função reflexa abaixo da lesão.\n\nEnquanto o reflexo bulbocavernoso estiver ausente, não é possível afirmar que a lesão é completa. A classificação definitiva (ASIA) é feita após o retorno desse reflexo, geralmente em 24–72 horas. O paciente está hemodinamicamente estável, portanto não há choque neurogênico.",
    "commentary": "Choque neurogênico (B): seria hipotensão com bradicardia por perda simpática; o paciente tem PA e FC normais. Choque neurogênico e choque medular são entidades diferentes.\n\nLesão completa definitiva (C): na fase de choque medular não se pode definir completude.\n\nMetilprednisolona em altas doses (D): não é recomendada de rotina pelo ATLS, por benefício não comprovado e aumento de complicações.\n\nPunção lombar (E): não tem papel no diagnóstico do trauma raquimedular; a investigação é por imagem.",
    "reference": "ATLS — Advanced Trauma Life Support, 11ª ed. — Trauma de coluna e medula espinhal",
    "tags": [
      "trauma",
      "trauma raquimedular",
      "choque medular",
      "reflexo bulbocavernoso"
    ]
  },
  {
    "id": "hosbos2027-8",
    "topography": "16",
    "topic": "Trauma abdominal",
    "module": "Cirurgia",
    "text": "Uma criança de 6 anos é trazida ao pronto-socorro de um centro especializado em trauma pediátrico após sofrer queda de um brinquedo em um parque de diversões. Apresenta dor abdominal localizada no hipocôndrio direito, sem sinais de irritação peritoneal. Está consciente e hemodinamicamente estável. O e-FAST detecta a presença de líquido no espaço de Morrison. A tomografia computadorizada de abdome, realizada com contraste intravenoso, evidencia lesão hepática grau I, segundo a classificação da American Association for the Surgery of Trauma (AAST).\n\nDiante do quadro apresentado, assinale a alternativa que apresenta a conduta adequada.",
    "options": [
      "(A) Indicar laparotomia exploradora imediata devido à presença de líquido livre intraperitoneal identificado pelo e-FAST.",
      "(B) Internar a criança em unidade de terapia intensiva, manter jejum absoluto por 72 horas e repetir tomografia abdominal após 24 horas, independentemente da evolução clínica.",
      "(C) Instituir tratamento não operatório com observação clínica, monitorização seriada, controle da dor e retorno gradual às atividades conforme evolução clínica, sem necessidade de tomografia de controle de rotina.",
      "(D) Realizar embolização seletiva da artéria hepática devido ao risco elevado de ressangramento das lesões hepáticas traumáticas.",
      "(E) Indicar drenagem percutânea guiada por ultrassonografia do hematoma subcapsular, para reduzir o risco de ruptura hepática tardia."
    ],
    "correctAnswer": 2,
    "explanation": "Criança estável com lesão hepática grau I (AAST) e líquido livre. Em crianças, mais de 90% das lesões de órgãos sólidos são tratadas sem cirurgia, e a decisão se baseia na estabilidade hemodinâmica, não no grau da lesão nem na presença de líquido.\n\nA conduta é o tratamento não operatório: observação, monitorização clínica e laboratorial seriada, analgesia e retorno gradual às atividades. TC de controle de rotina não é recomendada, só se houver mudança clínica.",
    "commentary": "Laparotomia pelo líquido livre (A): líquido livre em paciente estável não indica cirurgia.\n\nUTI, jejum de 72 h e TC em 24 h (B): lesões de baixo grau dispensam UTI e jejum prolongado, e a TC de rotina não é recomendada.\n\nEmbolização (D): reservada a sangramento ativo (blush) ou instabilidade transitória, não a lesão grau I.\n\nDrenagem percutânea do hematoma (E): não há indicação; ruptura tardia é rara em lesões de baixo grau.",
    "reference": "APSA Guideline — Blunt Liver and Spleen Injury in Children (2019) / ATLS 11ª ed. — Trauma pediátrico",
    "tags": [
      "cirurgia pediátrica",
      "trauma abdominal",
      "trauma hepático",
      "tratamento não operatório"
    ]
  },
  {
    "id": "hosbos2027-9",
    "topography": "16",
    "topic": "Perfuração de víscera oca",
    "module": "Cirurgia",
    "text": "Homem de 49 anos, com histórico de dispepsia de longa data, é admitido no pronto-socorro com dor abdominal súbita, de forte intensidade, localizada inicialmente em epigástrio e que rapidamente se disseminou para todo o abdome. Refere náuseas, um episódio de vômito, e relata uso de anti-inflamatórios não esteroidais para artrose de joelho direito. Ao exame físico, encontra-se taquicárdico (FC: 124 bpm), hipotenso (PA: 94 x 63 mmHg), com rigidez abdominal difusa e descompressão brusca positiva. Exames laboratoriais:\n• Leucograma: leucócitose com desvio à esquerda (18.700/mm³, bastões 12%); eritrograma sem alterações.\n• PCR: 187 mg/L\n• Lactato sérico: 4,2 mmol/L\n• Creatinina: 1,9 mg/dL\n• Amilase: 112 U/L\n• Radiografia de tórax apresentada: (Freitas Junior, W. R. et al. Rev. Assoc. Med. Bras. 2011; 57(6):614)\n\nDiante do quadro clínico e radiográfico, assinale a alternativa que apresenta a conduta adequada.",
    "options": [
      "(A) Instituir antibioticoterapia de amplo espectro, inibidor de bomba de prótons intravenoso, e realizar tomografia computadorizada de abdome com contraste após estabilização hemodinâmica.",
      "(B) Instituir ressuscitação inicial e antibioticoterapia de amplo espectro, seguida de abordagem cirúrgica de urgência para controle da contaminação e correção da perfuração, utilizando fechamento primário, com ou sem reforço omental, conforme os achados intraoperatórios.",
      "(C) Submeter o paciente a endoscopia digestiva alta de urgência para confirmação diagnóstica e tentativa de tratamento endoscópico da lesão perfurada.",
      "(D) Indicar tratamento clínico exclusivo com antibióticos, inibidor de bomba de prótons e jejum, considerando o alto risco cirúrgico imediato.",
      "(E) Realizar laparoscopia diagnóstica eletiva após 24 horas de antibióticos, visando melhor delimitação da lesão e programação cirúrgica definitiva."
    ],
    "correctAnswer": 1,
    "explanation": "Dispepsia crônica e uso de AINE, seguidos de dor epigástrica súbita que se generaliza, abdome em tábua e sinais de sepse (taquicardia, hipotensão, lactato elevado, lesão renal). A radiografia de tórax em pé mostra pneumoperitônio (ar sob as cúpulas diafragmáticas): úlcera péptica perfurada.\n\nO tratamento é ressuscitação volêmica, antibiótico de amplo espectro, IBP e cirurgia de urgência para controle do foco. Na úlcera perfurada pequena, faz-se rafia primária, com ou sem reforço de epíplon (Graham), e lavagem da cavidade.",
    "commentary": "TC antes de operar (A): o pneumoperitônio com peritonite e sepse já define a indicação cirúrgica; atrasar piora o prognóstico.\n\nEndoscopia de urgência (C): a insuflação pode agravar o pneumoperitônio; endoscopia não é conduta na úlcera perfurada com peritonite.\n\nTratamento clínico exclusivo (D): o manejo não operatório (Taylor) só se aplica a casos selecionados, estáveis e sem peritonite difusa.\n\nLaparoscopia eletiva em 24 h (E): o controle do foco deve ser imediato no paciente séptico.",
    "reference": "WSES Guidelines on Perforated and Bleeding Peptic Ulcer (2020)",
    "tags": [
      "cirurgia geral",
      "úlcera péptica perfurada",
      "pneumoperitônio",
      "abdome agudo perfurativo"
    ],
    "image": "/images/hosbos2027-9.webp"
  },
  {
    "id": "hosbos2027-10",
    "module": "Cirurgia",
    "text": "Homem de 65 anos, tabagista, com carga tabágica de 40 maços-ano, apresenta perda ponderal importante e disfagia progressiva para alimentos sólidos há quatro meses. A endoscopia digestiva alta evidencia lesão estenosante no terço médio do esôfago, cuja biópsia revela carcinoma espinocelular bem diferenciado. O estadiamento clínico demonstra tumor cT3N0M0. O paciente apresenta condições clínicas para tratamento cirúrgico.\n\nDiante do quadro apresentado, assinale a conduta terapêutica apropriada.",
    "options": [
      "(A) Radioterapia exclusiva.",
      "(B) Esofagectomia imediata.",
      "(C) Dilatação endoscópica e dieta pastosa.",
      "(D) Quimiorradioterapia neoadjuvante seguida de esofagectomia.",
      "(E) Colocação de endoprótese esofágica."
    ],
    "correctAnswer": 3,
    "explanation": "Carcinoma espinocelular de esôfago torácico médio, localmente avançado (cT3N0M0), em paciente operável.\n\nPara tumores T3 ou com linfonodos positivos, o padrão é a quimiorradioterapia neoadjuvante (protocolo CROSS: carboplatina, paclitaxel e radioterapia) seguida de esofagectomia, que aumenta a ressecção completa e a sobrevida em relação à cirurgia isolada. No CEC, a quimiorradioterapia definitiva é alternativa para quem não pode ou não quer operar.",
    "commentary": "Radioterapia exclusiva (A): inferior à quimiorradioterapia e reservada a paliação.\n\nEsofagectomia imediata (B): a cirurgia isolada é reservada a tumores precoces (T1–T2N0).\n\nDilatação e dieta pastosa (C): medida paliativa que não trata o câncer.\n\nEndoprótese (E): paliação da disfagia em doença irressecável ou metastática.",
    "reference": "NCCN Guidelines — Esophageal and Esophagogastric Junction Cancers / Estudo CROSS (van Hagen et al., NEJM 2012)",
    "tags": [
      "cirurgia do aparelho digestivo",
      "câncer de esôfago",
      "neoadjuvância"
    ]
  },
  {
    "id": "hosbos2027-11",
    "topography": "1.5",
    "topic": "Câncer de tireoide",
    "module": "Cirurgia",
    "text": "Homem de 36 anos apresenta carcinoma medular da tireoide, hiperparatireoidismo primário e feocromocitoma, associados a uma variante patogênica germinativa no gene RET.\n\nEsse quadro é característico de qual síndrome genética?",
    "options": [
      "(A) Neoplasia Endócrina Múltipla tipo 1 (NEM 1).",
      "(B) Carcinoma medular da tireoide familiar isolado.",
      "(C) Neoplasia Endócrina Múltipla tipo 2B (NEM 2B).",
      "(D) Síndrome de von Hippel-Lindau.",
      "(E) Neoplasia Endócrina Múltipla tipo 2A (NEM 2A)."
    ],
    "correctAnswer": 4,
    "explanation": "Carcinoma medular de tireoide, feocromocitoma e hiperparatireoidismo primário com mutação germinativa no proto-oncogene RET formam a Neoplasia Endócrina Múltipla tipo 2A (síndrome de Sipple).\n\nA NEM 2B também tem carcinoma medular e feocromocitoma, mas não hiperparatireoidismo, e apresenta neuromas de mucosa e hábito marfanoide.",
    "commentary": "NEM 1 (A): hiperparatireoidismo, tumores hipofisários e pancreáticos (gene MEN1); não tem carcinoma medular nem relação com RET.\n\nCMT familiar isolado (B): hoje considerado variante da NEM 2A, mas por definição sem feocromocitoma nem hiperparatireoidismo.\n\nNEM 2B (C): não cursa com hiperparatireoidismo; tem neuromas mucosos e hábito marfanoide.\n\nVon Hippel-Lindau (D): feocromocitoma, hemangioblastomas, carcinoma renal de células claras; gene VHL.",
    "reference": "ATA Revised Guidelines for Medullary Thyroid Carcinoma (2015)",
    "tags": [
      "cirurgia de cabeça e pescoço",
      "NEM 2A",
      "carcinoma medular de tireoide",
      "RET"
    ]
  },
  {
    "id": "hosbos2027-12",
    "topography": "16",
    "topic": "Perfuração de víscera oca",
    "module": "Cirurgia",
    "text": "Mulher de 39 anos apresenta dor abdominal aguda de forte intensidade, iniciada subitamente no epigástrio há duas horas e que rapidamente se tornou difusa. Apresentou um episódio de vômito de conteúdo gástrico. Ao exame físico, encontra-se hemodinamicamente estável. O abdome está plano na inspeção; apresenta à ausculta ausência de ruídos hidroaéreos. À percussão, observa-se desaparecimento da macicez hepática. À palpação, rigidez abdominal difusa.\n\nAssinale a alternativa que apresenta o diagnóstico sindrômico provável e o exame de imagem adequado para sua confirmação e investigação etiológica.",
    "options": [
      "(A) Abdome agudo inflamatório — ultrassonografia abdominal.",
      "(B) Abdome agudo inflamatório — tomografia computadorizada de abdome e pelve.",
      "(C) Abdome agudo obstrutivo — colonoscopia.",
      "(D) Abdome agudo obstrutivo — ultrassonografia abdominal.",
      "(E) Abdome agudo perfurativo — tomografia computadorizada de abdome e pelve."
    ],
    "correctAnswer": 4,
    "explanation": "Dor abdominal súbita e intensa, que se generaliza rapidamente, com abdome em tábua, silêncio abdominal e perda da macicez hepática (sinal de Jobert, por ar livre entre o fígado e a parede): abdome agudo perfurativo.\n\nA tomografia de abdome e pelve é o exame mais sensível para pneumoperitônio, ainda mostra o local provável da perfuração e as complicações e, no paciente estável, orienta a abordagem.",
    "commentary": "Inflamatório com US (A): o sinal de Jobert e a instalação súbita indicam perfuração; a US é pouco sensível para ar livre.\n\nInflamatório com TC (B): o exame está certo, mas a síndrome não.\n\nObstrutivo com colonoscopia (C): não há distensão nem parada de eliminações; colonoscopia é contraindicada na perfuração.\n\nObstrutivo com US (D): a síndrome e o exame estão errados.",
    "reference": "Sabiston Tratado de Cirurgia, 21ª ed. — Abdome agudo",
    "tags": [
      "cirurgia geral",
      "abdome agudo perfurativo",
      "sinal de Jobert",
      "tomografia"
    ]
  },
  {
    "id": "hosbos2027-13",
    "topography": "3.1",
    "topic": "Doença inflamatória intestinal",
    "module": "Cirurgia",
    "text": "Um homem de 29 anos, previamente hígido, apresenta dor abdominal em fossa ilíaca direita há 48 horas, associada a febre de 38,5 °C, diarreia sem sangue e perda ponderal de 6 kg nos últimos três meses. Ao exame físico, apresenta dor à palpação profunda em quadrante inferior direito, sem sinais de irritação peritoneal. Os exames laboratoriais demonstram hemoglobina de 10,2 g/dL, proteína C-reativa elevada e albumina sérica de 2,8 g/dL. A tomografia computadorizada de abdome evidencia espessamento segmentar do íleo terminal, coleção intra-abdominal de 4 cm, adjacente ao mesentério e trajeto fistuloso enteroentérico, achados compatíveis com doença de Crohn penetrante. Após antibioticoterapia e drenagem percutânea guiada por imagem, o paciente evolui com resolução da sepse, mas persiste com doença inflamatória e fistulizante do íleo terminal.\n\nConsiderando o caso apresentado, assinale a alternativa correta.",
    "options": [
      "(A) A colectomia total com ileostomia terminal é o tratamento cirúrgico de escolha, devido ao elevado risco de recorrência após ressecções segmentares do íleo terminal.",
      "(B) O tratamento exclusivamente clínico com terapia biológica deve ser mantido indefinidamente, sendo a cirurgia contraindicada em pacientes com fístula enteroentérica após controle da sepse.",
      "(C) A enteroscopia com biópsia deve ser realizada obrigatoriamente antes da cirurgia para confirmar histologicamente a doença e definir a extensão da ressecção intestinal.",
      "(D) Após o controle da sepse e a adequada otimização clínica e nutricional, a ressecção limitada do segmento ileal acometido, com tratamento da fístula e reconstrução individualizada, preservando-se o máximo possível do intestino delgado, constitui estratégia cirúrgica adequada.",
      "(E) A presença de abscesso intra-abdominal contraindica drenagem percutânea, devido ao risco elevado de disseminação infecciosa e perfuração intestinal."
    ],
    "correctAnswer": 3,
    "explanation": "Doença de Crohn ileal penetrante (fístula enteroentérica e abscesso), já com sepse controlada por antibiótico e drenagem percutânea, mas com doença ileal fistulizante persistente.\n\nO tratamento definitivo é cirúrgico, feito eletivamente após o controle da sepse e a otimização nutricional (com redução do corticoide): ressecção ileocecal ou ileal limitada às margens macroscopicamente livres, tratamento da fístula e anastomose ou estoma conforme as condições, preservando o máximo de intestino.",
    "commentary": "Colectomia total com ileostomia (A): o cólon não está acometido; ressecções devem ser econômicas no Crohn.\n\nSó biológico e cirurgia contraindicada (B): a doença penetrante com fístula persistente é indicação clássica de cirurgia.\n\nEnteroscopia obrigatória (C): o diagnóstico já está estabelecido; a extensão é avaliada por imagem (enterotomografia ou enterorressonância).\n\nAbscesso contraindica drenagem percutânea (E): ao contrário, a drenagem percutânea é a conduta inicial de escolha no abscesso acessível.",
    "reference": "ECCO Guidelines on Therapeutics in Crohn's Disease: Surgical Treatment (2020) / GEDIIB",
    "tags": [
      "coloproctologia",
      "doença de Crohn",
      "doença inflamatória intestinal",
      "fístula"
    ]
  },
  {
    "id": "hosbos2027-14",
    "topography": "16",
    "topic": "Trauma torácico",
    "module": "Cirurgia",
    "text": "Homem de 26 anos, previamente hígido, condutor de veículo, sofre acidente automobilístico com colisão frontal de alta energia contra um poste. É transportado ao pronto-socorro pela equipe de resgate. Na admissão, encontra-se consciente e orientado, com vias aéreas pérvias e colar cervical. Refere dor intensa na região pré-esternal, onde se observa equimose compatível com impacto contra o volante. A percussão torácica e as auscultas pulmonar e cardíaca não apresentam alterações. PA: 122 x 82 mmHg; FC: 92 bpm; FR: 18 mrpm. A radiografia de tórax em incidência AP evidencia alargamento do mediastino superior (imagem apresentada).\n\nConsiderando o mecanismo do trauma e o achado radiográfico, assinale a alternativa que apresenta, correta e respectivamente, a principal lesão a ser investigada e o exame mais indicado para sua confirmação. (ATLS®: Advanced Trauma Life Support Student Course Manual. 11. ed. Chicago: American College of Surgeons, 2025)",
    "options": [
      "(A) Pneumotórax simples — tomografia computadorizada de tórax.",
      "(B) Lesão traumática da aorta torácica — angiotomografia computadorizada de tórax.",
      "(C) Hemotórax volumoso — toracoscopia.",
      "(D) Lesão esofágica — endoscopia digestiva alta.",
      "(E) Lesão traqueobrônquica — broncoscopia."
    ],
    "correctAnswer": 1,
    "explanation": "Colisão frontal de alta energia (desaceleração brusca), equimose no esterno e mediastino alargado na radiografia: a principal suspeita é lesão traumática (contusa) da aorta torácica, geralmente no istmo, junto ao ligamento arterioso.\n\nNo paciente estável, a angiotomografia de tórax é o exame de escolha para confirmar e planejar o tratamento (em geral endovascular). Até lá, controla-se a FC e a PA (PAS cerca de 100 mmHg).",
    "commentary": "Pneumotórax (A): não explica o alargamento do mediastino, e o exame físico é normal.\n\nHemotórax volumoso com toracoscopia (C): a ausculta e a percussão estão normais; a toracoscopia não é exame diagnóstico inicial.\n\nLesão esofágica (D): mais associada a trauma penetrante; não é a principal hipótese pelo mecanismo.\n\nLesão traqueobrônquica (E): causa pneumotórax persistente, enfisema e escape aéreo, ausentes.",
    "reference": "ATLS — Advanced Trauma Life Support, 11ª ed. — Trauma torácico",
    "tags": [
      "trauma",
      "trauma torácico",
      "lesão traumática de aorta",
      "angiotomografia"
    ],
    "image": "/images/hosbos2027-14.webp"
  },
  {
    "id": "hosbos2027-15",
    "topography": "16",
    "topic": "Trauma abdominal",
    "module": "Cirurgia",
    "text": "Homem de 30 anos é admitido em choque hemorrágico após ferimento por projétil de arma de fogo no quadrante superior direito do abdome. Seu tipo sanguíneo é desconhecido. Após ressuscitação inicial com volume limitado de cristaloide aquecido, administrado por dois acessos venosos periféricos calibrosos (14G) em veias antecubitais, permanece em choque. Está indicada laparotomia exploradora imediata para controle da hemorragia.\n\nDiante da persistência do choque hemorrágico, qual é a estratégia de ressuscitação adequada enquanto se providencia o controle cirúrgico imediato da hemorragia?",
    "options": [
      "(A) Ativar imediatamente protocolo de transfusão maciça, com ressuscitação hemostática balanceada concomitante ao controle cirúrgico da hemorragia.",
      "(B) Administrar sangue total AB positivo por acesso venoso central em veia subclávia.",
      "(C) Administrar ácido tranexâmico por via intraóssea em bolus, repetindo-o até atingir PAS > 90 mmHg.",
      "(D) Administrar solução salina hipertônica por via intravenosa e reavaliar após 10 minutos.",
      "(E) Administrar 1.000 mL de Ringer lactato por acesso cirúrgico da veia safena, associado a drogas vasoativas."
    ],
    "correctAnswer": 0,
    "explanation": "Choque hemorrágico que persiste após volume limitado de cristaloide, com indicação de laparotomia: é um respondedor mínimo ou não respondedor.\n\nO ATLS recomenda ativar o protocolo de transfusão maciça e fazer ressuscitação hemostática balanceada (concentrado de hemácias, plasma e plaquetas em proporção próxima de 1:1:1, inicialmente O negativo ou O positivo se o tipo for desconhecido) enquanto se faz o controle cirúrgico. O ácido tranexâmico, quando indicado, é dado em até 3 horas, em dose definida, não titulado pela PA.",
    "commentary": "Sangue AB positivo por subclávia (B): o doador universal de hemácias é O, não AB; e a via periférica calibrosa já é adequada.\n\nTranexâmico intraósseo repetido até PAS > 90 (C): dose fixa (1 g em 10 min mais 1 g em 8 h), não titulada pela pressão.\n\nSalina hipertônica (D): não substitui hemoderivados nem tem benefício comprovado.\n\nRinger 1 L e vasopressor (E): mais cristaloide piora a coagulopatia, e vasopressor no choque hipovolêmico é inadequado.",
    "reference": "ATLS — Advanced Trauma Life Support, 11ª ed. — Choque",
    "tags": [
      "trauma",
      "choque hemorrágico",
      "transfusão maciça",
      "ressuscitação hemostática"
    ]
  },
  {
    "id": "hosbos2027-16",
    "topography": "2.1",
    "topic": "Derrame pleural",
    "module": "Cirurgia",
    "text": "Homem de 67 anos, internado por pneumonia bacteriana, evolui, após sete dias, com febre persistente, dor torácica ventilatório-dependente e dispneia. A tomografia computadorizada de tórax evidencia derrame pleural no hemitórax esquerdo, com espessamento e realce das pleuras. A análise do líquido pleural revela aspecto francamente purulento.\n\nConsiderando o manejo das infecções pleurais e do empiema, assinale a alternativa correta.",
    "options": [
      "(A) Manter antibioticoterapia isolada, pois a maioria dos empiemas apresenta resolução espontânea após o controle da infecção pulmonar primária.",
      "(B) Utilizar punções pleurais seriadas, reservando o dreno torácico para pacientes que apresentem insuficiência respiratória grave.",
      "(C) Evitar drenagem pleural em coleções pleurais purulentas, pois o procedimento aumenta o risco de disseminação da infecção para o parênquima pulmonar.",
      "(D) Indicar toracoscopia para evacuação da coleção purulenta, independentemente da resposta à drenagem e ao tratamento antimicrobiano.",
      "(E) Realizar drenagem pleural adequada associada à antibioticoterapia, visando à evacuação do pus e ao controle da infecção no espaço pleural."
    ],
    "correctAnswer": 4,
    "explanation": "Derrame parapneumônico com pus franco: empiema pleural. O pilar do tratamento é a drenagem pleural adequada (dreno torácico) associada à antibioticoterapia, que evacua a coleção e controla a infecção.\n\nSe a drenagem for insuficiente (loculações, pulmão encarcerado), considera-se fibrinolítico intrapleural (tPA e DNase) ou abordagem cirúrgica por videotoracoscopia (VATS).",
    "commentary": "Antibiótico isolado (A): o empiema não se resolve sem drenagem.\n\nPunções seriadas (B): insuficientes para pus franco; a drenagem por dreno é indicada desde o início.\n\nEvitar drenagem (C): a drenagem é obrigatória e não dissemina a infecção.\n\nToracoscopia independentemente da resposta (D): VATS é indicada na falha da drenagem e dos fibrinolíticos ou em empiema organizado, não de rotina.",
    "reference": "BTS Guideline for Pleural Disease (2023) / AATS Expert Consensus on Empyema (2017)",
    "tags": [
      "cirurgia torácica",
      "empiema pleural",
      "drenagem pleural"
    ]
  },
  {
    "id": "hosbos2027-17",
    "topography": "3.1",
    "topic": "DRGE",
    "module": "Cirurgia",
    "text": "Homem de 63 anos, obeso, com história de doença do refluxo gastroesofágico há aproximadamente 12 anos, em uso irregular de inibidor da bomba de prótons, é submetido à endoscopia digestiva alta por persistência de pirose e regurgitação. O exame evidencia segmento de mucosa colunar no esôfago distal, com extensão de 5 cm acima da junção esofagogástrica, sem lesões nodulares ou ulceradas visíveis. São realizadas biópsias segundo protocolo sistematizado, que demonstram metaplasia intestinal especializada associada a displasia de alto grau, confirmada por revisão de patologista especializado em trato gastrointestinal.\n\nConsiderando os conhecimentos atuais sobre o manejo do esôfago de Barrett e as recomendações das principais diretrizes, assinale a alternativa correta.",
    "options": [
      "(A) O tratamento de escolha é a esofagectomia, independentemente da ausência de lesão visível, devido ao elevado risco de evolução para adenocarcinoma.",
      "(B) O tratamento deve ser exclusivamente clínico, com inibidor da bomba de prótons em dose plena e acompanhamento endoscópico anual, pois a displasia de alto grau não constitui indicação de tratamento ablativo.",
      "(C) Deve-se realizar terapia endoscópica de erradicação da mucosa de Barrett displásica, preferencialmente em centro especializado; caso seja identificada lesão visível, esta deverá ser ressecada endoscopicamente, seguida de ablação do epitélio de Barrett residual.",
      "(D) A fundoplicatura antirrefluxo isoladamente é o tratamento de escolha, pois a correção cirúrgica do refluxo promove regressão da displasia de alto grau e elimina a necessidade de vigilância endoscópica.",
      "(E) A única conduta indicada é a ressecção endoscópica de toda a extensão do esôfago de Barrett, devendo-se evitar métodos ablativos, como a radiofrequência, devido ao risco de recorrência da metaplasia intestinal."
    ],
    "correctAnswer": 2,
    "explanation": "Esôfago de Barrett longo com displasia de alto grau confirmada por patologista especializado, sem lesão visível.\n\nAs diretrizes recomendam terapia endoscópica de erradicação, preferencialmente em centro de referência: ressecção endoscópica de qualquer lesão visível (mucosectomia ou dissecção) seguida de ablação, em geral por radiofrequência, de todo o epitélio de Barrett residual. Depois, mantêm-se IBP e vigilância.",
    "commentary": "Esofagectomia (A): reservada a câncer invasivo além da submucosa superficial ou falha da terapia endoscópica; tem morbidade alta.\n\nSó IBP e vigilância (B): a displasia de alto grau é indicação formal de erradicação endoscópica.\n\nFundoplicatura isolada (D): não faz regredir a displasia nem dispensa vigilância.\n\nRessecção de toda a extensão sem ablação (E): ressecar circunferencialmente um Barrett longo causa estenose; a ablação por radiofrequência é o método de escolha para o epitélio plano.",
    "reference": "ACG Clinical Guideline: Barrett's Esophagus (2022) / ESGE Guideline (2023)",
    "tags": [
      "cirurgia do aparelho digestivo",
      "esôfago de Barrett",
      "displasia de alto grau",
      "terapia endoscópica"
    ]
  },
  {
    "id": "hosbos2027-18",
    "topography": "16",
    "topic": "Pós-operatório",
    "module": "Cirurgia",
    "text": "Mulher de 34 anos, submetida a esplenectomia eletiva por doença hematológica, procura o pronto-socorro duas semanas após o procedimento com febre de 39,5 °C, calafrios e prostração intensa.\n\nConsiderando o risco de infecção grave no paciente asplênico, assinale a alternativa correta.",
    "options": [
      "(A) A paciente apresenta risco aumentado de infecção invasiva por bactérias encapsuladas, devendo a possibilidade de sepse ser prontamente investigada e tratada.",
      "(B) A ausência do baço aumenta principalmente o risco de infecções virais, sendo menos relevante para infecções bacterianas invasivas.",
      "(C) Após esplenectomia eletiva, a vacinação pneumocócica elimina o risco de infecção invasiva e torna desnecessária a investigação imediata da febre.",
      "(D) Na ausência de hipotensão, a antibioticoterapia deve ser postergada até a identificação microbiológica do agente.",
      "(E) O risco aumentado de infecção pós-esplenectomia limita-se aos primeiros 30 dias após a operação."
    ],
    "correctAnswer": 0,
    "explanation": "Pacientes esplenectomizados têm risco aumentado e permanente de infecção fulminante pós-esplenectomia (OPSI), sobretudo por bactérias encapsuladas: pneumococo, meningococo e Haemophilus influenzae tipo b.\n\nFebre em asplênico é emergência médica: colher culturas e iniciar antibiótico empírico de amplo espectro (por exemplo, ceftriaxona) imediatamente, sem esperar hipotensão ou resultados.",
    "commentary": "Risco principalmente viral (B): o risco é bacteriano, por bactérias encapsuladas.\n\nVacina elimina o risco (C): a vacinação reduz mas não elimina o risco.\n\nPostergar antibiótico sem hipotensão (D): a OPSI evolui em horas; o antibiótico deve ser imediato.\n\nRisco só nos primeiros 30 dias (E): o risco persiste por toda a vida, maior nos primeiros anos.",
    "reference": "Guia de imunização de pacientes asplênicos (CRIE/Ministério da Saúde) / British Society for Haematology — Prevention of infection in asplenia (2011)",
    "tags": [
      "cirurgia geral",
      "esplenectomia",
      "asplenia",
      "bactérias encapsuladas"
    ]
  },
  {
    "id": "hosbos2027-19",
    "topography": "16",
    "topic": "Pós-operatório",
    "module": "Cirurgia",
    "text": "Mulher de 45 anos dá entrada na emergência por colecistite aguda litiásica; após as medidas terapêuticas iniciais, é submetida a uma colecistectomia aberta. O cirurgião opta pelo posicionamento de um dreno tubular no espaço sub-hepático direito.\n\nSobre os princípios técnicos e indicações do uso de drenos, assinale a alternativa correta.",
    "options": [
      "(A) Drenos tubulares são preferencialmente indicados para absorver coleções em cavidades fechadas, mas não devem ser utilizados em espaços abertos.",
      "(B) O uso rotineiro de drenos em cirurgias limpas é recomendado para reduzir risco de infecção.",
      "(C) Drenos funcionam como via de saída, mas também podem ser porta de entrada para microrganismos.",
      "(D) A função dos drenos aspirativos é promover irrigação contínua da cavidade.",
      "(E) Drenos laminares permitem mensuração volumétrica precisa do débito."
    ],
    "correctAnswer": 2,
    "explanation": "Os drenos servem como via de saída para coleções, mas o trajeto também funciona como porta de entrada para microrganismos da pele até a cavidade. Por isso devem ser usados com indicação precisa, preferencialmente em sistema fechado, e retirados assim que deixam de ser necessários.",
    "commentary": "Tubulares só em cavidades fechadas (A): drenos tubulares são usados em diversos espaços; a afirmação inverte o conceito.\n\nDreno de rotina em cirurgia limpa (B): não reduz infecção; pode aumentá-la.\n\nDreno aspirativo para irrigação (D): o dreno aspirativo faz sucção contínua; irrigação é outro sistema.\n\nLaminar com mensuração precisa (E): o dreno laminar (Penrose) drena por capilaridade para curativo e não permite medir o débito; isso é característica dos sistemas fechados.",
    "reference": "Sabiston Tratado de Cirurgia, 21ª ed. — Princípios de drenagem cirúrgica",
    "tags": [
      "cirurgia geral",
      "drenos cirúrgicos",
      "infecção de sítio cirúrgico"
    ]
  },
  {
    "id": "hosbos2027-20",
    "module": "Cirurgia",
    "text": "Mulher de 33 anos, em uso de anticoncepcional oral há 10 anos, apresenta lesão hepática de 6,5 cm, identificada incidentalmente à ultrassonografia abdominal. A ressonância magnética é compatível com adenoma hepatocelular, sem sinais de ruptura ou hemorragia. A paciente é assintomática e não apresenta doença hepática crônica.\n\nConsiderando o manejo contemporâneo do adenoma hepatocelular, assinale a alternativa correta.",
    "options": [
      "(A) Em mulheres, todo adenoma hepatocelular maior que 5 cm deve ser submetido à ressecção imediata, independentemente da possibilidade de regressão após suspensão do estímulo hormonal.",
      "(B) A suspensão do anticoncepcional oral permite acompanhamento indefinido, mesmo que a lesão permaneça maior que 5 cm, desde que a paciente permaneça assintomática.",
      "(C) A indicação de ressecção é determinada exclusivamente pelo diâmetro da lesão, não sendo modificada pelo sexo do paciente nem por características moleculares associadas ao risco de transformação maligna.",
      "(D) Deve-se suspender o anticoncepcional oral e acompanhar a evolução da lesão por imagem; diante do tamanho superior a 5 cm e de sua persistência após período de observação, deve-se considerar a ressecção hepática.",
      "(E) A confirmação de adenoma hepatocelular por ressonância magnética torna desnecessária qualquer consideração sobre subtipo ou fatores de risco, pois todos os adenomas apresentam comportamento biológico semelhante."
    ],
    "correctAnswer": 3,
    "explanation": "Adenoma hepatocelular de 6,5 cm em mulher em uso de anticoncepcional, assintomática e sem complicação. A primeira medida é suspender o estrogênio e reavaliar por imagem após cerca de 6 meses, pois muitos regridem.\n\nNas mulheres, a ressecção é indicada se o adenoma permanecer maior que 5 cm após esse período. Nos homens, todo adenoma deve ser ressecado, assim como o subtipo com ativação de β-catenina, de maior risco de malignização.",
    "commentary": "Ressecção imediata em todo > 5 cm (A): a diretriz manda primeiro suspender o estímulo hormonal e reavaliar.\n\nSeguimento indefinido mesmo > 5 cm (B): a persistência acima de 5 cm indica ressecção pelo risco de sangramento e malignização.\n\nSó o diâmetro importa (C): sexo masculino e subtipo β-catenina também indicam ressecção.\n\nSubtipo irrelevante (E): os subtipos moleculares têm riscos diferentes de sangramento e de transformação maligna.",
    "reference": "EASL Clinical Practice Guidelines on Benign Liver Tumours (2016)",
    "tags": [
      "cirurgia hepática",
      "adenoma hepatocelular",
      "anticoncepcional oral"
    ]
  },
  {
    "id": "hosbos2027-21",
    "topography": "2.2",
    "topic": "Hipertensão arterial sistêmica",
    "module": "Clínica Médica",
    "text": "Homem de 47 anos comparece a consulta de rotina assintomático. AP: nega. Exame físico: IMC de 26,8 kg/m², circunferência abdominal de 96 cm, PA: 134 x 86 mmHg (em consulta anterior, há 6 meses, apresentava 136 x 84 mmHg). MRPA: média de 124 x 78 mmHg. Exames laboratoriais: glicemia de jejum: 92 mg/dL, LDL-colesterol: 118 mg/dL, creatinina: 0,9 mg/dL, potássio: 4,3 mEq/L e relação albuminúria/creatininúria de 12 mg/g. Eletrocardiograma normal.\n\nDe acordo com a Diretriz Brasileira de Hipertensão Arterial (2025), a classificação e a conduta indicadas, respectivamente, são:",
    "options": [
      "(A) Hipertensão arterial estágio 1; introduzir combinação de dois anti-hipertensivos.",
      "(B) Hipertensão arterial estágio 1; tratamento não medicamentoso por 6 meses.",
      "(C) Pressão arterial normal; reavaliação anual, sem necessidade de intervenção.",
      "(D) Pré-hipertensão; tratamento não medicamentoso, com mudanças no estilo de vida e monitorização periódica.",
      "(E) Pré-hipertensão; introdução monoterapia com inibidor da enzima conversora de angiotensina."
    ],
    "correctAnswer": 3,
    "explanation": "Pela Diretriz Brasileira de Hipertensão Arterial de 2025, PA de consultório entre 120–139 e/ou 80–89 mmHg é pré-hipertensão. O paciente tem 134 x 86 e 136 x 84 mmHg no consultório, e a MRPA (124 x 78 mmHg) está abaixo do limiar de 130 x 80, o que afasta hipertensão mascarada.\n\nSem diabetes, doença renal, lesão de órgão-alvo ou doença cardiovascular, a conduta é tratamento não medicamentoso (perda de peso, redução de sódio, atividade física, padrão DASH, moderação de álcool) e monitorização periódica da PA.",
    "commentary": "Estágio 1 com combinação (A): os valores não chegam a 140 x 90 mmHg, e a MRPA é normal.\n\nEstágio 1 com MEV por 6 meses (B): a classificação está errada.\n\nPA normal (C): na diretriz de 2025, normal é abaixo de 120 x 80 mmHg.\n\nPré-hipertensão com IECA (E): sem risco cardiovascular alto ou lesão de órgão-alvo, não há indicação de fármaco.",
    "reference": "Diretriz Brasileira de Hipertensão Arterial — SBC/SBH/SBN, 2025",
    "tags": [
      "cardiologia",
      "hipertensão arterial",
      "pré-hipertensão",
      "MRPA"
    ]
  },
  {
    "id": "hosbos2027-22",
    "topography": "2.2",
    "topic": "Fibrilação atrial",
    "module": "Clínica Médica",
    "text": "Mulher de 71 anos refere palpitações há 2 dias. AP: HAS em uso de losartana e DM2 em uso de metformina, nega acidente vascular cerebral, infarto prévio, insuficiência cardíaca ou doença arterial periférica. Exame físico: PA: 128 x 76 mmHg, FC: 96 bpm e ausculta cardíaca com ritmo irregular. Eletrocardiograma: fibrilação atrial. Ecocardiograma: fração de ejeção de 58%, sem outras alterações. Clearance de creatinina estimado de 68 mL/min.\n\nDe acordo com a Diretriz Brasileira de Fibrilação Atrial (2025), a conduta correta quanto à profilaxia de tromboembolismo é",
    "options": [
      "(A) Prescrever anticoagulante oral direto, pois o escore CHA₂DS₂-VA é igual a 3.",
      "(B) Prescrever varfarina, pois os anticoagulantes orais diretos são contraindicados na presença de diabetes.",
      "(C) Prescrever anticoagulante apenas se houver falha na estratégia de controle do ritmo, devido ao risco de sangramento.",
      "(D) Não prescrever anticoagulante, pois o escore de risco é insuficiente para indicar a terapia.",
      "(E) Prescrever ácido acetilsalicílico 100 mg/dia como alternativa à anticoagulação devido ao risco de sangramento."
    ],
    "correctAnswer": 0,
    "explanation": "A Diretriz Brasileira de Fibrilação Atrial de 2025 adota o escore CHA₂DS₂-VA, sem o ponto pelo sexo feminino. Para esta paciente:\n\n• Hipertensão: 1\n• Diabetes: 1\n• Idade 65–74 anos: 1\n\nTotal = 3. Com escore ≥ 2, a anticoagulação está indicada, e os anticoagulantes orais diretos são preferidos à varfarina na FA não valvar. A depuração de creatinina de 68 mL/min permite dose plena.",
    "commentary": "Varfarina porque DOAC é contraindicado no diabetes (B): diabetes não contraindica DOAC.\n\nSó se falhar o controle de ritmo (C): a anticoagulação depende do risco tromboembólico, não da estratégia de ritmo ou frequência.\n\nEscore insuficiente (D): 3 pontos indicam anticoagulação.\n\nAAS como alternativa (E): o AAS não é eficaz na prevenção de AVC na FA e sangra quase tanto quanto os anticoagulantes.",
    "reference": "Diretriz Brasileira de Fibrilação Atrial — SBC, 2025 / ESC 2024 AF Guidelines",
    "tags": [
      "cardiologia",
      "fibrilação atrial",
      "anticoagulação",
      "CHA2DS2-VA"
    ]
  },
  {
    "id": "hosbos2027-23",
    "topography": "2.2",
    "topic": "Endocardite infecciosa",
    "module": "Clínica Médica",
    "text": "Homem de 52 anos refere febre e perda ponderal há 4 semanas. AP: prótese biológica aórtica implantada há 3 anos. Exame físico: PA: 140 x 85 mmHg, ausculta cardíaca com presença de sopro sistólico em foco aórtico, sem outras alterações. Hemoculturas: positivas para Staphylococcus aureus sensível à oxacilina. Ecocardiograma transesofágico: vegetação de 12 mm em face ventricular da prótese, associada a espessamento perianular com cavidade de 15 mm compatível com abscesso de raiz aórtica e regurgitação periprotética moderada. Eletrocardiograma: intervalo PR de 220 ms.\n\nA conduta correta é",
    "options": [
      "(A) Indicar cirurgia eletiva.",
      "(B) Manter antibioticoterapia por 6 semanas.",
      "(C) Encaminhar para cirurgia de urgência.",
      "(D) Implantar marcapasso definitivo.",
      "(E) Manter antibioticoterapia até negativação das hemoculturas por 14 dias."
    ],
    "correctAnswer": 2,
    "explanation": "Endocardite infecciosa de prótese aórtica por Staphylococcus aureus, com abscesso de raiz aórtica, regurgitação periprotética e novo bloqueio AV de 1º grau (PR de 220 ms, sinal de extensão perivalvar).\n\nInfecção perivalvar não controlada (abscesso, fístula, pseudoaneurisma), endocardite de prótese por S. aureus e distúrbio de condução novo indicam cirurgia de urgência (em poucos dias), além da antibioticoterapia prolongada.",
    "commentary": "Cirurgia eletiva (A): com abscesso de raiz, o atraso aumenta a mortalidade; a indicação é de urgência.\n\nSó antibiótico por 6 semanas (B): o antibiótico não esteriliza um abscesso perivalvar; a cirurgia é necessária.\n\nMarcapasso definitivo (D): o PR longo é sinal de extensão do abscesso, cujo tratamento é cirúrgico; não há indicação isolada de marcapasso.\n\nAntibiótico até 14 dias de culturas negativas (E): duração e conduta inadequadas para endocardite complicada de prótese.",
    "reference": "ESC 2023 Guidelines for the Management of Endocarditis / Diretriz Brasileira de Valvopatias (SBC)",
    "tags": [
      "cardiologia",
      "endocardite infecciosa",
      "prótese valvar",
      "abscesso perivalvar"
    ]
  },
  {
    "id": "hosbos2027-24",
    "topography": "14",
    "topic": "Intoxicações",
    "module": "Clínica Médica",
    "text": "Mulher de 22 anos encontra-se com rebaixamento do nível de consciência e crise convulsiva tônico-clônica generalizada após 90 minutos de ingestão intencional de 40 comprimidos de amitriptilina 25 mg. Exame físico: escala de coma de Glasgow: 10, PA: 88 x 50 mmHg, FC: 128 bpm, midríase, pele seca e quente, ausência de ruídos hidroaéreos na ausculta abdominal. Eletrocardiograma: taquicardia sinusal com QRS de 140 ms e onda R proeminente em aVR de 5 mm. Gasometria arterial: pH: 7,25.\n\nA conduta correta é a administração de",
    "options": [
      "(A) Amiodarona endovenosa.",
      "(B) Fenitoína endovenosa.",
      "(C) Flumazenil endovenoso.",
      "(D) Fisostigmina endovenosa.",
      "(E) Bicarbonato de sódio em bolus endovenoso."
    ],
    "correctAnswer": 4,
    "explanation": "Intoxicação grave por antidepressivo tricíclico (1 g de amitriptilina): síndrome anticolinérgica (midríase, pele seca e quente, íleo), convulsão, hipotensão, acidose e cardiotoxicidade por bloqueio dos canais de sódio (QRS > 100 ms e R em aVR > 3 mm).\n\nO tratamento é bicarbonato de sódio em bolus (1–2 mEq/kg), repetido até o estreitamento do QRS, com alvo de pH sérico entre 7,45 e 7,55. A alcalinização e a carga de sódio revertem o bloqueio dos canais de sódio. As convulsões são tratadas com benzodiazepínicos.",
    "commentary": "Amiodarona (A): prolonga o QRS e o QT e piora a cardiotoxicidade; antiarrítmicos classe Ia, Ic e III são contraindicados.\n\nFenitoína (B): bloqueia canais de sódio e é ineficaz nas convulsões tóxicas; usar benzodiazepínico.\n\nFlumazenil (C): pode precipitar convulsões, sobretudo na intoxicação por tricíclicos.\n\nFisostigmina (D): contraindicada com QRS alargado, pelo risco de assistolia.",
    "reference": "Goldfrank's Toxicologic Emergencies / Manual de toxicologia clínica — CIATox",
    "tags": [
      "toxicologia",
      "antidepressivos tricíclicos",
      "bicarbonato de sódio",
      "emergência"
    ]
  },
  {
    "id": "hosbos2027-25",
    "topography": "4.1",
    "topic": "Distúrbios hidroeletrolíticos",
    "module": "Clínica Médica",
    "text": "Homem de 68 anos relata fraqueza muscular progressiva e parestesias. AP: doença renal crônica estágio 4 e insuficiência cardíaca, em uso de enalapril, espironolactona e furosemida. Exame físico: PA: 122 x 70 mmHg, FC: 44 bpm. Exames laboratoriais: potássio: 7,4 mEq/L, creatinina: 3,9 mg/dL, ureia: 140 mg/dL, bicarbonato: 18 mEq/L. Eletrocardiograma: ondas T apiculadas e simétricas, achatamento da onda P e alargamento do QRS para 130 ms.\n\nAlém da suspensão dos medicamentos, a conduta imediata deve ser",
    "options": [
      "(A) Administrar furosemida endovenosa em dose alta.",
      "(B) Administrar gluconato de cálcio endovenoso.",
      "(C) Iniciar insulina regular com glicose endovenoso.",
      "(D) Iniciar por bicarbonato de sódio endovenoso.",
      "(E) Iniciar terapia de substituição renal por hemodiálise."
    ],
    "correctAnswer": 1,
    "explanation": "Hipercalemia grave (K 7,4 mEq/L) com alterações eletrocardiográficas (T apiculada, achatamento de P, QRS de 130 ms) e bradicardia, em paciente com DRC usando IECA e espironolactona.\n\nCom alteração no ECG, a primeira medida é estabilizar a membrana do miocárdio com gluconato de cálcio IV, que age em minutos (sem baixar o potássio). Em seguida: insulina com glicose e beta-2-agonista para deslocar o K para dentro das células, e remoção (diurético, resinas e, se necessário, diálise).",
    "commentary": "Furosemida em alta dose (A): remove potássio lentamente; não protege o coração de imediato.\n\nInsulina com glicose (C): reduz o K em 15–30 minutos, mas vem depois do cálcio quando o ECG está alterado.\n\nBicarbonato (D): efeito modesto, útil sobretudo na acidose grave; não é a medida imediata.\n\nHemodiálise (E): pode ser necessária na DRC, mas leva tempo para iniciar; a estabilização com cálcio vem antes.",
    "reference": "KDIGO — Controversies Conference on Potassium (2020) / UK Kidney Association — Hyperkalaemia Guideline (2023)",
    "tags": [
      "nefrologia",
      "hipercalemia",
      "gluconato de cálcio",
      "eletrocardiograma"
    ]
  },
  {
    "id": "hosbos2027-26",
    "topography": "14",
    "topic": "Parada cardiorrespiratória",
    "module": "Clínica Médica",
    "text": "Homem de 61 anos apresentou parada cardiorrespiratória extra-hospitalar presenciada, em fibrilação ventricular, com retorno à circulação espontânea após 18 minutos de reanimação e duas desfibrilações. Foi admitido na unidade de terapia intensiva em uso de ventilação mecânica, de baixa dose de noradrenalina, escala de coma de Glasgow 5 e temperatura esofágica de admissão de 37,9 ºC.\n\nA conduta deve ser",
    "options": [
      "(A) Induzir hipotermia a 32-34 ºC por 24 horas.",
      "(B) Instituir controle ativo de temperatura com alvo igual ou inferior a 37,5 ºC.",
      "(C) Não instituir controle de temperatura.",
      "(D) Induzir hipotermia a 33 ºC por 72 horas.",
      "(E) Induzir hipotermia a 34-36 ºC por 24 horas."
    ],
    "correctAnswer": 1,
    "explanation": "Paciente comatoso após retorno da circulação espontânea de PCR extra-hospitalar. As recomendações atuais (ILCOR 2023, AHA 2023, ERC 2021) indicam controle ativo da temperatura com o objetivo principal de evitar febre: manter temperatura ≤ 37,5 °C por pelo menos 72 horas.\n\nO estudo TTM2 (2021) não mostrou benefício da hipotermia a 33 °C em relação à normotermia com prevenção ativa de febre.",
    "commentary": "Hipotermia 32–34 °C por 24 h (A): protocolo antigo, sem superioridade demonstrada sobre a prevenção da febre.\n\nNão controlar a temperatura (C): a febre pós-PCR piora o prognóstico neurológico; o controle ativo continua recomendado.\n\n33 °C por 72 h (D): não há respaldo para hipotermia profunda prolongada.\n\n34–36 °C por 24 h (E): ainda é aceito em alguns protocolos, mas o alvo recomendado é prevenir febre (≤ 37,5 °C) por 72 h.",
    "reference": "ILCOR/AHA 2023 Focused Update on Temperature Control after Cardiac Arrest / Dankiewicz et al. — TTM2 (NEJM 2021)",
    "tags": [
      "terapia intensiva",
      "parada cardiorrespiratória",
      "cuidados pós-PCR",
      "controle de temperatura"
    ]
  },
  {
    "id": "hosbos2027-27",
    "topography": "4.1",
    "topic": "Distúrbios ácido-base",
    "module": "Clínica Médica",
    "text": "Homem de 58 anos apresenta vômitos incoercíveis há 4 dias e, nas últimas 12 horas, confusão mental e taquipneia. AP: etilista crônico. Exame físico: PA: 90 x 58 mmHg, FC: 116 bpm, FR: 28 irpm e desidratação 3+/4+. Gasometria arterial: pH: 7,42, PaCO₂: 30 mmHg, bicarbonato: 19 mEq/L, sódio: 138 mEq/L, cloro: 92 mEq/L, potássio: 3,1 mEq/L, albumina: 3,0 g/dL.\n\nOs diagnósticos são",
    "options": [
      "(A) Acidose metabólica com ânion gap elevado, alcalose metabólica e alcalose respiratória.",
      "(B) Acidose metabólica com ânion gap normal, alcalose metabólica e acidose respiratória.",
      "(C) Alcalose metabólica e respiratória.",
      "(D) Acidose metabólica com ânion gap elevado, acidose metabólica com ânion gap normal e alcalose respiratória.",
      "(E) Alcalose respiratória e acidose respiratória."
    ],
    "correctAnswer": 0,
    "explanation": "pH normal não significa equilíbrio. Passo a passo:\n\n• Ânion-gap = 138 – (92 + 19) = 27; corrigido pela albumina de 3,0: cerca de 29,5. Está elevado: acidose metabólica de AG alto (cetoacidose alcoólica, lactato)\n• Delta-delta: o AG subiu cerca de 17 e o bicarbonato caiu só cerca de 5, indicando alcalose metabólica associada (vômitos, cloro baixo)\n• pCO₂ esperada para HCO₃⁻ de 19 = 1,5 × 19 + 8 ≈ 36,5; a medida é 30, logo há alcalose respiratória associada (taquipneia)\n\nSão três distúrbios: acidose metabólica de AG elevado, alcalose metabólica e alcalose respiratória.",
    "commentary": "AG normal e acidose respiratória (B): o AG está elevado e a pCO₂ está abaixo do esperado.\n\nSó alcalose metabólica e respiratória (C): ignora a acidose de AG alto.\n\nDuas acidoses metabólicas (D): não há acidose de AG normal; o delta-delta mostra alcalose metabólica.\n\nAlcalose e acidose respiratórias (E): é impossível ter as duas ao mesmo tempo.",
    "reference": "Harrison — Distúrbios ácido-base / Berend K et al. — Physiological approach to acid-base disturbances (NEJM 2014)",
    "tags": [
      "nefrologia",
      "distúrbios ácido-base",
      "ânion-gap",
      "delta-delta"
    ]
  },
  {
    "id": "hosbos2027-28",
    "topography": "14",
    "topic": "Sepse e choque séptico",
    "module": "Clínica Médica",
    "text": "Mulher de 64 anos refere tosse produtiva, febre e dispneia há 3 dias. AP: HAS, DM2 e insuficiência cardíaca. Exame físico: escala de coma de Glasgow de 14, FR: 30 irpm, saturação de oxigênio de 87% em ar ambiente, PA: 78 x 45 mmHg e FC: 122 bpm. Radiografia de tórax: consolidação em lobo inferior direito. Lactato arterial: 4,2 mmol/L. Foram coletadas hemoculturas e iniciada antibioticoterapia na primeira hora, além de expansão volêmica com 30 mL/kg de cristaloide balanceado. Após a expansão, a paciente apresenta PA: 85 x 42 mmHg.\n\nSegundo as recomendações da Surviving Sepsis Campaign (2026), a conduta imediata é",
    "options": [
      "(A) Administrar hidrocortisona.",
      "(B) Obter acesso venoso central.",
      "(C) Iniciar dobutamina por acesso venoso central.",
      "(D) Iniciar noradrenalina por acesso venoso periférico.",
      "(E) Realizar expansão volêmica com albumina."
    ],
    "correctAnswer": 3,
    "explanation": "Choque séptico de foco pulmonar: hipotensão persistente (PAM cerca de 56 mmHg) após 30 mL/kg de cristaloide, com lactato de 4,2 mmol/L.\n\nA Surviving Sepsis Campaign recomenda noradrenalina como vasopressor de primeira linha, com alvo de PAM ≥ 65 mmHg. Pode ser iniciada em veia periférica para não atrasar, enquanto se obtém acesso central.",
    "commentary": "Hidrocortisona (A): indicada quando há necessidade persistente de vasopressor (noradrenalina ≥ 0,25 µg/kg/min), não antes dele.\n\nObter acesso central (B): não se deve atrasar o vasopressor por esperar o acesso central.\n\nDobutamina (C): inotrópico para disfunção cardíaca com hipoperfusão apesar de volume e vasopressor; não é a primeira droga.\n\nAlbumina (E): pode ser considerada após grandes volumes de cristaloide, mas a prioridade aqui é o vasopressor.",
    "reference": "Surviving Sepsis Campaign: International Guidelines (2021 e atualização) / ILAS",
    "tags": [
      "terapia intensiva",
      "choque séptico",
      "noradrenalina",
      "sepse"
    ]
  },
  {
    "id": "hosbos2027-29",
    "topography": "2.1",
    "topic": "Embolia pulmonar",
    "module": "Clínica Médica",
    "text": "Mulher de 68 anos encontra-se no 22º dia de pós-operatório de artroplastia total de quadril e refere dispneia intensa e súbita. Exame físico: PA: 78 x 50 mmHg, FC: 128 bpm, FR: 32 irpm, saturação de oxigênio de 86% em ar ambiente e turgência jugular. Angiotomografia de tórax: falhas de enchimento em ambas as artérias pulmonares principais, com relação entre os diâmetros do ventrículo direito e do ventrículo esquerdo de 1,3.\n\nA conduta deve ser",
    "options": [
      "(A) Embolectomia cirúrgica.",
      "(B) Anticoagulação plena com heparina de baixo peso molecular.",
      "(C) Anticoagulação oral com rivaroxabana.",
      "(D) Trombólise sistêmica com alteplase associada a heparina não fracionada.",
      "(E) Implante de filtro de veia cava inferior."
    ],
    "correctAnswer": 3,
    "explanation": "Tromboembolismo pulmonar maciço (bilateral, em artérias principais) no pós-operatório de artroplastia, com hipotensão, hipoxemia, turgência jugular e disfunção de VD (relação VD/VE de 1,3): TEP de alto risco.\n\nO tratamento de escolha é a reperfusão por trombólise sistêmica (alteplase 100 mg em 2 h) seguida de heparina não fracionada. A cirurgia há 22 dias é contraindicação relativa, superada pelo risco de morte.",
    "commentary": "Embolectomia cirúrgica (A): reservada a contraindicação absoluta à trombólise ou falha dela.\n\nHBPM isolada (B): conduta do TEP estável; não reperfunde o paciente em choque.\n\nRivaroxabana (C): não é usada na fase instável do TEP de alto risco.\n\nFiltro de veia cava (E): só para contraindicação absoluta à anticoagulação; não trata o êmbolo atual.",
    "reference": "ESC 2019 Guidelines on Acute Pulmonary Embolism / Diretriz da SBPT para TEV",
    "tags": [
      "pneumologia",
      "tromboembolismo pulmonar",
      "trombólise",
      "pós-operatório"
    ]
  },
  {
    "id": "hosbos2027-30",
    "topography": "2.1",
    "topic": "DPOC",
    "module": "Clínica Médica",
    "text": "Homem de 68 anos encontra-se em consulta de rotina e refere dispneia ao caminhar em plano. AP: DPOC em uso regular e com técnica inalatória adequada de associação de broncodilatador de longa ação beta-agonista (LABA) e antimuscarínico (LAMA) e com duas exacerbações moderadas tratadas ambulatorialmente e uma exacerbação com necessidade de internação hospitalar no último ano. Espirometria: VEF1 pós-broncodilatador de 45% do previsto e relação VEF1/CVF de 0,58. Hemograma: eosinófilos de 380 células/mm³.\n\nDe acordo com as recomendações da Global Initiative for Chronic Obstructive Lung Disease (GOLD – 2026), a conduta deve ser",
    "options": [
      "(A) Iniciar corticosteroide oral em dose baixa de manutenção contínua.",
      "(B) Iniciar corticosteroide oral em alta dose por curto período.",
      "(C) Associar roflumilaste.",
      "(D) Associar broncodilatador de curta ação.",
      "(E) Associar corticosteroide inalatório."
    ],
    "correctAnswer": 4,
    "explanation": "DPOC com exacerbações frequentes (duas moderadas e uma com internação no último ano) apesar de LABA+LAMA com técnica adequada, e eosinófilos de 380/mm³.\n\nPelo GOLD, nas exacerbações em uso de LABA+LAMA com eosinófilos ≥ 100 células/mm³ (e especialmente ≥ 300), está indicado escalonar para terapia tripla, associando corticosteroide inalatório.",
    "commentary": "Corticoide oral contínuo (A): não é recomendado na manutenção, pelos efeitos adversos.\n\nCorticoide oral em alta dose curta (B): é tratamento de exacerbação, não ajuste de manutenção.\n\nRoflumilaste (C): opção para VEF₁ < 50% com bronquite crônica e eosinófilos < 100; aqui os eosinófilos favorecem o CI.\n\nBroncodilatador de curta ação (D): é resgate e não reduz exacerbações.",
    "reference": "GOLD — Global Strategy for the Diagnosis, Management and Prevention of COPD (2026)",
    "tags": [
      "pneumologia",
      "DPOC",
      "corticosteroide inalatório",
      "eosinófilos"
    ]
  },
  {
    "id": "hosbos2027-31",
    "topography": "1.1",
    "topic": "Meningite",
    "module": "Clínica Médica",
    "text": "Homem de 22 anos apresenta febre, cefaleia holocraniana intensa e vômitos iniciados há 14 horas. AP: nega. Exame físico: escala de coma de Glasgow 15, rigidez de nuca, sem déficits neurológicos focais, fundo de olho sem papiledema, PA: 118 x 70 mmHg, FC: 104 bpm, temperatura axilar: 39,1 ºC.\n\nA conduta imediata, além da coleta de hemoculturas, deve ser",
    "options": [
      "(A) Realizar tomografia de crânio e, após avaliação desta, realizar punção lombar.",
      "(B) Administrar dexametasona e ceftriaxona.",
      "(C) Administrar aciclovir e ceftriaxona.",
      "(D) Administrar ceftriaxona e aguardar resultado da análise liquórica para iniciar aciclovir.",
      "(E) Administrar ceftriaxona e aguardar confirmação etiológica para iniciar dexametasona."
    ],
    "correctAnswer": 1,
    "explanation": "Jovem com febre, cefaleia intensa, vômitos e rigidez de nuca: meningite bacteriana aguda. Sem déficit focal, papiledema, rebaixamento de consciência, convulsão ou imunossupressão, não há indicação de TC antes da punção lombar.\n\nA prioridade é o tratamento: dexametasona (0,15 mg/kg de 6/6 h, antes ou junto da primeira dose do antibiótico) e ceftriaxona empírica, sem esperar o líquor.",
    "commentary": "TC antes da punção (A): não indicada nesse paciente sem sinais de alerta, e atrasaria o tratamento.\n\nAciclovir e ceftriaxona (C): sem alteração do nível de consciência, crises ou sinais focais, não há suspeita de encefalite herpética; falta a dexametasona.\n\nAguardar líquor para aciclovir (D): falta a dexametasona, cujo benefício depende da administração precoce.\n\nAguardar etiologia para dexametasona (E): ela deve ser dada antes ou junto da primeira dose do antibiótico; depois perde o benefício.",
    "reference": "Diretrizes da IDSA para meningite bacteriana / Guia de Vigilância em Saúde (Meningites) — Ministério da Saúde",
    "tags": [
      "infectologia",
      "meningite bacteriana",
      "dexametasona",
      "ceftriaxona"
    ]
  },
  {
    "id": "hosbos2027-32",
    "topography": "10",
    "topic": "Dengue",
    "module": "Clínica Médica",
    "text": "Mulher de 34 anos refere febre há 5 dias com melhora há 24 horas e evolução atual com dor abdominal intensa e contínua em região epigástrica e vômitos persistentes. Refere teste NS1 positivo há 3 dias. Exame físico: PA: 110 x 70 mmHg, FC: 96 bpm, tempo de enchimento capilar de 2 segundos, extremidades quentes e dor à palpação abdominal difusa. Exames laboratoriais: hematócrito de 46% (basal de 38%), plaquetas de 78.000/mm³.\n\nDe acordo com o manual de manejo clínico da dengue do Ministério da Saúde (2024), a classificação de risco e a conduta, respectivamente, são",
    "options": [
      "(A) Grupo C; internação e transfusão de concentrado de plaquetas.",
      "(B) Grupo B; hidratação oral supervisionada e reavaliação após resultado de exames.",
      "(C) Grupo C; internação e expansão com 10 mL/kg de soro fisiológico a 0,9%.",
      "(D) Grupo D; expansão imediata com 20 mL/kg de soro fisiológico a 0,9%.",
      "(E) Grupo A; alta com sintomáticos, hidratação oral domiciliar e orientações de retorno."
    ],
    "correctAnswer": 2,
    "explanation": "Dengue no período crítico (após a defervescência) com sinais de alarme (dor abdominal intensa e contínua, vômitos persistentes e hemoconcentração de 38% para 46%), mas sem choque (PA normal, enchimento capilar de 2 s, extremidades quentes): grupo C.\n\nConduta do grupo C (Ministério da Saúde, 2024): internação e reposição volêmica imediata com 10 mL/kg de soro fisiológico na primeira hora, com reavaliação clínica e do hematócrito.",
    "commentary": "Grupo C com transfusão de plaquetas (A): plaquetopenia sem sangramento grave não indica transfusão.\n\nGrupo B (B): há sinais de alarme; o grupo B é sem alarme, com comorbidade ou risco social.\n\nGrupo D com 20 mL/kg (D): não há choque nem sinais de gravidade.\n\nGrupo A com alta (E): conduta para dengue sem sinais de alarme e sem risco.",
    "reference": "Dengue: diagnóstico e manejo clínico, adulto e criança — Ministério da Saúde, 6ª ed., 2024",
    "tags": [
      "infectologia",
      "dengue",
      "sinais de alarme",
      "hidratação"
    ]
  },
  {
    "id": "hosbos2027-33",
    "topography": "6.1",
    "topic": "Vasculites",
    "module": "Clínica Médica",
    "text": "Mulher de 74 anos refere cefaleia de início recente, de localização temporal à direita, associada a dor ao mastigar, que a obriga a interromper as refeições. Relata ainda dois episódios de perda visual transitória no olho direito nas últimas 48 horas, além de dor e rigidez em cinturas escapular e pélvica há 3 meses. Exame físico: artéria temporal direita espessada e dolorosa à palpação, com pulso reduzido. Exames laboratoriais: VHS: 92 mm/h e PCR: 11 mg/dL.\n\nCom relação ao caso descrito, assinale a alternativa correta.",
    "options": [
      "(A) A biópsia de artéria temporal negativa exclui o diagnóstico, uma vez que o acometimento vascular é difuso e homogêneo.",
      "(B) O tratamento deve ser postergado até o resultado da biópsia de artéria temporal, para não comprometer a sua acurácia diagnóstica.",
      "(C) Deve-se iniciar imediatamente corticoterapia sistêmica em altas doses, pelo risco de perda visual permanente, mantendo-se a indicação de biópsia.",
      "(D) A associação com polimialgia reumática ocorre em menos de 5% dos casos e, quando presente, modifica a abordagem terapêutica.",
      "(E) Os valores atuais de VHS e PCR reduzem a probabilidade da hipótese inicial, indicando investigação com angiotomografia de crânio."
    ],
    "correctAnswer": 2,
    "explanation": "Idosa com cefaleia temporal nova, claudicação de mandíbula, amaurose fugaz, artéria temporal espessada e dolorosa, polimialgia reumática e VHS e PCR muito elevados: arterite de células gigantes.\n\nCom sintomas visuais, há risco iminente de cegueira irreversível. O corticoide em altas doses deve ser iniciado imediatamente (com pulsoterapia em casos com perda visual), sem esperar a biópsia, que continua indicada e permanece positiva por 2 a 4 semanas após o início do tratamento.",
    "commentary": "Biópsia negativa exclui (A): o acometimento é segmentar (skip lesions), então a biópsia negativa não exclui o diagnóstico.\n\nPostergar o corticoide (B): o risco de cegueira supera a perda mínima de acurácia da biópsia.\n\nPolimialgia em menos de 5% (D): ocorre em cerca de 40–50% dos casos.\n\nVHS e PCR reduzem a probabilidade (E): ao contrário, valores muito elevados reforçam o diagnóstico.",
    "reference": "EULAR 2018 Recommendations for Large Vessel Vasculitis / ACR/VF 2021 Guideline for Giant Cell Arteritis",
    "tags": [
      "reumatologia",
      "arterite de células gigantes",
      "polimialgia reumática",
      "vasculite"
    ]
  },
  {
    "id": "hosbos2027-34",
    "topography": "8",
    "topic": "Hiperaldosteronismo primário",
    "module": "Clínica Médica",
    "text": "Mulher de 48 anos apresenta hipertensão arterial de difícil controle, mantendo PA de 168 x 104 mmHg apesar do uso regular de anlodipino 10 mg/dia, losartana 100 mg/dia e hidroclorotiazida 25 mg/dia. Exames laboratoriais: potássio sérico de 3,1 mEq/L, creatinina de 0,6 mg/dL, bicarbonato de 30 mEq/L e sódio de 143 mEq/L.\n\nA conduta, além de corrigir a hipocalemia, deve ser",
    "options": [
      "(A) Solicitar tomografia computadorizada de adrenais.",
      "(B) Dosar a relação entre aldosterona plasmática e renina.",
      "(C) Iniciar espironolactona.",
      "(D) Dosar aldosterona urinária de 24 horas.",
      "(E) Solicitar cateterismo de veias adrenais."
    ],
    "correctAnswer": 1,
    "explanation": "Hipertensão resistente (PA acima da meta com três classes, incluindo diurético) associada a hipocalemia e alcalose metabólica: alta suspeita de hiperaldosteronismo primário.\n\nO rastreamento é a relação aldosterona/renina plasmática, com o potássio previamente corrigido. Se positiva, faz-se teste confirmatório, TC de adrenais e, se cirúrgico, cateterismo de veias adrenais.",
    "commentary": "TC de adrenais (A): só depois da confirmação bioquímica, pois incidentalomas são comuns.\n\nIniciar espironolactona (C): é o quarto fármaco da hipertensão resistente, mas antes deve-se rastrear hiperaldosteronismo; ela também interfere na relação aldosterona/renina.\n\nAldosterona urinária de 24 h (D): é teste confirmatório (após sobrecarga de sal), não de rastreamento.\n\nCateterismo de veias adrenais (E): última etapa, para lateralização antes da cirurgia.",
    "reference": "Endocrine Society — Clinical Practice Guideline for Primary Aldosteronism / Diretriz Brasileira de Hipertensão Arterial 2025",
    "tags": [
      "endocrinologia",
      "hiperaldosteronismo primário",
      "hipertensão resistente",
      "hipocalemia"
    ]
  },
  {
    "id": "hosbos2027-35",
    "topography": "1.1",
    "topic": "Demências",
    "module": "Clínica Médica",
    "text": "Homem de 74 anos é levado pela esposa ao ambulatório devido a declínio cognitivo progressivo há 2 anos. Ela relata que há dias em que o paciente permanece lúcido e conversa normalmente e outros em que fica sonolento e desconectado, com oscilações marcantes da atenção. Refere ainda que ele vê crianças e animais dentro de casa de forma detalhada e recorrente. Há cerca de 10 anos apresenta episódios noturnos de gritos e movimentos vigorosos durante o sono, chegando a agredi-la involuntariamente. Há 16 meses iniciou lentificação, rigidez e discreto tremor de repouso. Foi prescrito haloperidol para as alucinações, com piora acentuada da rigidez, sonolência e disfagia em 48 horas.\n\nA principal hipótese diagnóstica é",
    "options": [
      "(A) Demência com corpos de Lewy.",
      "(B) Demência da doença de Parkinson.",
      "(C) Hidrocefalia de pressão normal.",
      "(D) Delirium por causa clínica infecciosa oculta.",
      "(E) Doença de Alzheimer com sintomas psicóticos."
    ],
    "correctAnswer": 0,
    "explanation": "Declínio cognitivo com flutuação acentuada da atenção, alucinações visuais detalhadas e recorrentes, transtorno comportamental do sono REM (anos antes) e parkinsonismo, com piora grave ao usar haloperidol (sensibilidade a neurolépticos): demência com corpos de Lewy.\n\nOs critérios de McKeith (2017) consideram centrais as flutuações, as alucinações visuais, o transtorno do sono REM e o parkinsonismo. A demência começou antes ou até 1 ano após o parkinsonismo (regra de 1 ano).",
    "commentary": "Demência da doença de Parkinson (B): o parkinsonismo precede a demência em mais de 1 ano; aqui a cognição piorou antes (2 anos contra 16 meses).\n\nHidrocefalia de pressão normal (C): tríade de marcha magnética, incontinência e demência, sem alucinações ou flutuações.\n\nDelirium (D): quadro agudo; aqui a evolução é de 2 anos, com características típicas de corpos de Lewy.\n\nAlzheimer com psicose (E): começa com memória episódica, sem flutuações marcantes, transtorno do sono REM precoce ou parkinsonismo inicial.",
    "reference": "McKeith IG et al. — Critérios diagnósticos da demência com corpos de Lewy (Neurology, 2017) / Academia Brasileira de Neurologia",
    "tags": [
      "neurologia",
      "demência com corpos de Lewy",
      "demências",
      "sensibilidade a neurolépticos"
    ]
  },
  {
    "id": "hosbos2027-36",
    "module": "Clínica Médica",
    "text": "Mulher de 44 anos iniciou carbamazepina devido a diagnóstico de epilepsia há 4 semanas, há 5 dias evoluiu com febre seguida de exantema morbiliforme e edema facial confluente, que acomete mais de 60% da superfície corporal, com edema facial proeminente. Exame físico: temperatura de 38,8°C, exantema morbiliforme que acomete mais de 60% da superfície corporal e linfonodomegalia cervical e axilar bilateral, sem acometimento de mucosas. Exames laboratoriais: hemograma com leucócitos 14.800/mm³ com 2.400 eosinófilos/mm³ e presença de linfócitos atípicos, AST: 210 U/L, ALT: 265 U/L, creatinina: 1,0 mg/dL e sorologias para hepatites virais negativas.\n\nO diagnóstico e a conduta, além da suspensão da carbamazepina, são, respectivamente:",
    "options": [
      "(A) Síndrome de Stevens-Johnson; administração de imunoglobulina endovenosa.",
      "(B) Exantema simples; introdução de anti-histamínico.",
      "(C) Exantema viral inespecífico; tratamento sintomático.",
      "(D) Pustulose exantemática generalizada aguda; corticoterapia tópica.",
      "(E) Reação a droga com eosinofilia e sintomas sistêmicos (DRESS); corticoterapia sistêmica."
    ],
    "correctAnswer": 4,
    "explanation": "Semanas após carbamazepina: febre, exantema morbiliforme extenso, edema facial, linfonodomegalia, eosinofilia, linfócitos atípicos e hepatite, sem acometimento de mucosas. É reação a droga com eosinofilia e sintomas sistêmicos (DRESS), cuja latência típica é de 2 a 8 semanas.\n\nAlém de suspender o fármaco, trata-se com corticoterapia sistêmica (prednisona cerca de 0,5–1 mg/kg/dia) com retirada lenta, dada a disfunção orgânica (hepática).",
    "commentary": "Stevens-Johnson (A): bolhas, descolamento e mucosite, com latência de 4–28 dias; aqui não há mucosite.\n\nExantema simples (B): não explica febre, eosinofilia, linfócitos atípicos e hepatite.\n\nExantema viral (C): a relação temporal com a carbamazepina e a eosinofilia apontam para DRESS.\n\nPEGA (D): pústulas estéreis disseminadas, de instalação em horas a dias, com neutrofilia.",
    "reference": "Consenso da SBD sobre farmacodermias graves / RegiSCAR — critérios de DRESS",
    "tags": [
      "dermatologia",
      "DRESS",
      "farmacodermia",
      "carbamazepina"
    ]
  },
  {
    "id": "hosbos2027-37",
    "topography": "7.1",
    "topic": "Trombose venosa profunda",
    "module": "Clínica Médica",
    "text": "Mulher de 36 anos apresenta trombose venosa profunda em membro inferior esquerdo. AP: primeiro episódio de trombose venosa profunda há 14 meses em membro inferior direito, estando atualmente em uso regular de rivaroxabana 20 mg/dia. Nega tabagismo, uso de anticoncepcional hormonal, imobilização, cirurgia ou neoplasia. Investigação laboratorial demonstra anticoagulante lúpico positivo em duas ocasiões, separadas por 12 semanas, anticardiolipina IgG em alto título e anti-beta-2-glicoproteína I IgG positivo, também confirmados após 12 semanas.\n\nA conduta deve ser",
    "options": [
      "(A) Aumentar a dose de rivaroxabana para 20 mg duas vezes ao dia.",
      "(B) Substituir a rivaroxabana por apixabana.",
      "(C) Associar hidroxicloroquina.",
      "(D) Substituir a rivaroxabana por varfarina.",
      "(E) Associar ácido acetilsalicílico 100 mg/dia."
    ],
    "correctAnswer": 3,
    "explanation": "Síndrome antifosfolípide trombótica triplo-positiva (anticoagulante lúpico, anticardiolipina e anti-β2-glicoproteína I persistentes), com recorrência de TVP em uso de rivaroxabana.\n\nNa SAF triplo-positiva, os anticoagulantes orais diretos são inferiores à varfarina (mais eventos arteriais, estudo TRAPS) e não devem ser usados. A conduta é trocar por varfarina com alvo de INR entre 2 e 3.",
    "commentary": "Dobrar a rivaroxabana (A): não há respaldo, e a classe é inadequada na SAF de alto risco.\n\nTrocar por apixabana (B): os DOAC em geral são desaconselhados na SAF triplo-positiva.\n\nAssociar hidroxicloroquina (C): pode ser adjuvante, mas não corrige a escolha inadequada do anticoagulante.\n\nAssociar AAS (E): não substitui a troca para varfarina e aumenta o sangramento.",
    "reference": "EULAR Recommendations for the Management of APS in Adults (2019) / ISTH Guidance (2020)",
    "tags": [
      "hematologia",
      "síndrome antifosfolípide",
      "varfarina",
      "trombose venosa profunda"
    ]
  },
  {
    "id": "hosbos2027-38",
    "topography": "9",
    "topic": "Anemia megaloblástica",
    "module": "Clínica Médica",
    "text": "Mulher de 62 anos refere astenia progressiva há 6 meses e parestesias em pés que ascenderam até os joelhos, com instabilidade da marcha e quedas há 2 meses. AP: tireoidite de Hashimoto, em uso de levotiroxina, e vitiligo. Nega cirurgias prévias ou uso de outros medicamentos. Refere hábitos alimentares saudáveis e adequados. Exame físico: palidez cutâneo-mucosa, língua lisa, redução da sensibilidade vibratória e proprioceptiva em membros inferiores, sinal de Romberg positivo, hiper-reflexia patelar e sinal de Babinski bilateral, sem nível sensitivo. Exames: hemoglobina: 8,6 g/dL, volume corpuscular médio: 118 fL, RDW: elevado, leucócitos: 3.400/mm³ com neutrófilos hipersegmentados ao esfregaço, plaquetas: 130.000/mm³, contagem de reticulócitos baixa, desidrogenase lática: 980 U/L, bilirrubina indireta: 1,8 mg/dL.\n\nA conduta deve ser",
    "options": [
      "(A) Realizar reposição de ácido fólico.",
      "(B) Iniciar corticoterapia sistêmica",
      "(C) Solicitar anti-fator intrínseco e anti-células parietais.",
      "(D) Realizar biópsia de medula óssea.",
      "(E) Ajustar a dose de levotiroxina."
    ],
    "correctAnswer": 2,
    "explanation": "Anemia megaloblástica (VCM 118, neutrófilos hipersegmentados, pancitopenia, hemólise intramedular com LDH e bilirrubina indireta elevadas) com degeneração combinada subaguda da medula (perda proprioceptiva e vibratória, Romberg positivo, Babinski), em mulher com outras doenças autoimunes (Hashimoto, vitiligo) e dieta adequada: deficiência de vitamina B12 por anemia perniciosa.\n\nA investigação etiológica é a pesquisa de anticorpos anti-fator intrínseco (mais específico) e anti-células parietais, além da dosagem de B12. A reposição de B12 parenteral deve ser iniciada logo.",
    "commentary": "Ácido fólico (A): repor folato na deficiência de B12 corrige a anemia mas pode agravar o quadro neurológico.\n\nCorticoterapia (B): sem indicação.\n\nBiópsia de medula (D): o quadro é típico de megaloblastose; a medula não é necessária para o diagnóstico.\n\nAjustar levotiroxina (E): o hipotireoidismo não explica a megaloblastose grave nem a mielopatia.",
    "reference": "British Society for Haematology — Guidelines on Cobalamin and Folate Disorders (2014) / Harrison",
    "tags": [
      "hematologia",
      "anemia megaloblástica",
      "anemia perniciosa",
      "vitamina B12",
      "degeneração combinada subaguda"
    ]
  },
  {
    "id": "hosbos2027-39",
    "topography": "9",
    "topic": "Leucemias",
    "module": "Clínica Médica",
    "text": "Homem de 28 anos refere astenia intensa, febre não aferida e sangramento gengival espontâneo, iniciados há 10 dias. Exame físico: palidez cutâneo-mucosa 3+/4+, petéquias em palato e equimoses de grandes dimensões, sem adenomegalias ou visceromegalias. Exames laboratoriais: hemoglobina: 7,8 g/dL, leucócitos: 2.100/mm³, plaquetas: 18.000/mm³, INR de 1,9, tempo de tromboplastina parcial ativada alargado, fibrinogênio de 90 mg/dL e D-dímero elevado. O esfregaço de sangue periférico evidencia células imaturas com granulação azurófila grosseira e múltiplos bastonetes de Auer agrupados em feixes no citoplasma.\n\nA conduta imediata deve ser",
    "options": [
      "(A) Aguardar o resultado do mielograma e pesquisa genética.",
      "(B) Iniciar quimioterapia de indução com daunorrubicina associada a citarabina.",
      "(C) Manter apenas suporte transfusional conforme sinais de sangramento.",
      "(D) Iniciar heparina não fracionada em dose plena.",
      "(E) Iniciar imediatamente ácido trans-retinoico."
    ],
    "correctAnswer": 4,
    "explanation": "Pancitopenia com coagulopatia de consumo (INR e TTPA alargados, fibrinogênio de 90 mg/dL, D-dímero alto) e promielócitos anormais com múltiplos bastonetes de Auer em feixes (células de Faggot): leucemia promielocítica aguda (LMA M3).\n\nA LPA é emergência hematológica pelo risco de hemorragia fatal. O ácido trans-retinoico (ATRA) deve ser iniciado imediatamente, já na suspeita morfológica, sem esperar a confirmação genética da t(15;17)/PML-RARA, junto com suporte transfusional agressivo (plaquetas, crioprecipitado e plasma).",
    "commentary": "Aguardar mielograma e genética (A): atrasar o ATRA aumenta a mortalidade precoce por sangramento.\n\nDaunorrubicina e citarabina (B): esquema 7+3 das demais LMA; na LPA o tratamento se baseia em ATRA associado a trióxido de arsênio ou antraciclina.\n\nSó suporte transfusional (C): necessário, mas insuficiente sem o ATRA.\n\nHeparina plena (D): na LPA o risco predominante é hemorrágico.",
    "reference": "ELN — Management of Acute Promyelocytic Leukemia (Sanz et al., Blood 2019)",
    "tags": [
      "hematologia",
      "leucemia promielocítica aguda",
      "ácido trans-retinoico",
      "coagulação intravascular disseminada"
    ]
  },
  {
    "id": "hosbos2027-40",
    "topography": "8",
    "topic": "Diabetes mellitus tipo 1 e 2",
    "module": "Clínica Médica",
    "text": "Homem de 61 anos está em consulta de rotina assintomático. AP: HAS em uso de losartana 50 mg por dia e DM2 em uso de metformina 850 mg três vezes ao dia e atorvastatina 40 mg por dia. Exame físico: IMC de 27,4 kg/m², PA: 132 x 78 mmHg e ausência de edema. Exames laboratoriais: hemoglobina glicada: 6,9%, creatinina: 1,5 mg/dL com taxa de filtração glomerular estimada de 48 mL/min/1,73 m², relação albuminúria/creatininúria de 480 mg/g confirmada em duas amostras separadas por 3 meses, potássio: 4,3 mEq/L, LDL-colesterol: 68 mg/dL. Sedimento urinário sem hematúria e ultrassonografia renal sem alterações estruturais.\n\nA conduta deve ser",
    "options": [
      "(A) Aumentar a dose de losartana e associar inibidor da SGLT-2.",
      "(B) Suspender a metformina e introduzir sulfonilureia, com ajuste de dose por função renal.",
      "(C) Manter apenas a metformina e reavaliar em 6 meses.",
      "(D) Associar insulina basal noturna.",
      "(E) Aumentar a dose de losartana e restringir a ingestão proteica para 0,4 g/kg/dia."
    ],
    "correctAnswer": 0,
    "explanation": "Diabético e hipertenso com doença renal crônica (TFG de 48, estágio G3a) e albuminúria persistente de 480 mg/g (A3), em dose submáxima de losartana.\n\nPara renoproteção: titular o bloqueador do SRAA até a dose máxima tolerada (losartana 100 mg) e associar inibidor de SGLT-2, que reduz progressão renal e eventos cardiovasculares com TFG ≥ 20. A metformina pode ser mantida com TFG de 48, com atenção à dose.",
    "commentary": "Trocar metformina por sulfonilureia (B): a metformina segue permitida e a sulfonilureia causa hipoglicemia, sem renoproteção.\n\nManter só a metformina (C): deixa de tratar a albuminúria alta e o risco renal.\n\nInsulina basal (D): HbA1c de 6,9% está na meta; o problema é a proteção renal.\n\nRestrição proteica a 0,4 g/kg (E): a recomendação é cerca de 0,8 g/kg/dia; restrição tão intensa causa desnutrição.",
    "reference": "KDIGO 2022 Diabetes in CKD / Diretrizes da SBD 2024",
    "tags": [
      "nefrologia",
      "doença renal diabética",
      "iSGLT2",
      "albuminúria"
    ]
  },
  {
    "id": "hosbos2027-41",
    "topography": "5.1",
    "topic": "Climatério e menopausa",
    "module": "Ginecologia e Obstetrícia",
    "text": "G.M.A., de 49 anos, vem ao consultório ginecológico com queixas de irritabilidade, falha de memória, calorões noturnos e distúrbio de sono. IMC de 30 kg/m², hipertensa crônica controlada, em uso de Enalapril 20mg/dia, histerectomia por miomatose uterina há 6 anos, sem outras comorbidades. Apresentou mamografia recente sem alterações. Dentre os exames laboratoriais, identificado FSH: 80 mUI/mL.\n\nAssinale a alternativa que apresenta o tratamento mais adequado para a paciente do caso clínico.",
    "options": [
      "(A) Estradiol isolado via oral.",
      "(B) Desvenlafaxina 75 mg por dia.",
      "(C) Estradiol mais progesterona, ambos via oral.",
      "(D) Estradiol isolado transdérmico.",
      "(E) Progesterona isolada transdérmica."
    ],
    "correctAnswer": 3,
    "explanation": "Mulher de 49 anos na transição menopausal (FSH de 80) com sintomas vasomotores, alterações de humor, memória e sono: indicação de terapia hormonal, sem contraindicações (mamografia normal, hipertensão controlada).\n\nComo é histerectomizada, não precisa de progestagênio: usa-se estrogênio isolado. Por ser obesa e hipertensa, a via transdérmica é preferível, pois evita a primeira passagem hepática e tem menor risco tromboembólico.",
    "commentary": "Estradiol oral isolado (A): a via oral aumenta o risco de trombose, mais relevante com obesidade e hipertensão.\n\nDesvenlafaxina (B): alternativa não hormonal para quem tem contraindicação à TH, o que não é o caso.\n\nEstradiol e progesterona orais (C): sem útero, o progestagênio é desnecessário e só acrescenta risco.\n\nProgesterona isolada transdérmica (E): não trata os sintomas vasomotores adequadamente e não é esquema padrão.",
    "reference": "Consenso Brasileiro de Terapêutica Hormonal da Menopausa (SOBRAC) / The 2022 Hormone Therapy Position Statement (NAMS)",
    "tags": [
      "ginecologia",
      "climatério",
      "terapia hormonal",
      "estrogênio transdérmico"
    ]
  },
  {
    "id": "hosbos2027-42",
    "topography": "5.1",
    "topic": "Câncer de colo uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "R.B.A., 27 anos, submetida a exame para rastreamento do câncer de colo uterino. Resultado do DNA-HPV oncogênico: HPV subtipo 16 positivo.\n\nDe acordo com as novas Diretrizes do Ministério da Saúde para o Rastreamento do Câncer do Colo Uterino, assinale a alternativa que representa a conduta adequada.",
    "options": [
      "(A) Novo rastreamento em 5 anos.",
      "(B) Novo rastreamento em 6 meses.",
      "(C) Solicitar Papanicolaou (citologia líquida).",
      "(D) Solicitar Colposcopia.",
      "(E) Indicar CAF (cauterização alta frequência)."
    ],
    "correctAnswer": 3,
    "explanation": "Nas novas Diretrizes do Ministério da Saúde para rastreamento do câncer do colo do útero (com teste de DNA-HPV oncogênico a partir dos 25 anos), um resultado positivo para HPV 16 e/ou 18 leva diretamente à colposcopia.\n\nSe o teste for positivo para outros tipos oncogênicos (não 16/18), faz-se citologia reflexa (de preferência em base líquida) para triagem.",
    "commentary": "Novo rastreamento em 5 anos (A): intervalo para teste de HPV negativo.\n\nRepetir em 6 meses (B): não é a conduta para HPV 16, de maior risco.\n\nPapanicolaou (C): a citologia reflexa é para HPV de outros tipos oncogênicos, não 16/18.\n\nCAF (E): tratamento excisional só após diagnóstico colposcópico ou histológico de lesão de alto grau.",
    "reference": "Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero — Parte I: rastreamento organizado com teste de DNA-HPV (INCA/MS)",
    "tags": [
      "ginecologia",
      "rastreamento",
      "câncer do colo do útero",
      "HPV",
      "colposcopia"
    ]
  },
  {
    "id": "hosbos2027-43",
    "topography": "15",
    "topic": "Imunização",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 53 anos vem ao consultório ginecológico para consulta de rotina e, durante o atendimento, solicita esclarecimentos sobre as vacinas indicadas para sua faixa etária. Nega comorbidades ou alergias. Refere ter tomado 1 dose da vacina contra febre amarela em 2022. Trouxe sorologias: anti Hbs reagente e HbsAg não reagente. Alega episódio de herpes zoster há 6 meses.\n\nDe acordo com o caso acima e em relação às Orientações e Recomendações da Febrasgo sobre o Programa Vacinal para Mulheres, assinale a alternativa correta.",
    "options": [
      "(A) Não é indicada segunda dose da vacina contra febre amarela.",
      "(B) A paciente deve receber, a princípio, uma dose da VPC 13 (vacina pneumocócica).",
      "(C) Como já teve herpes zoster, não deve receber a vacina contra a doença.",
      "(D) A vacina contra HPV tem contra indicação absoluta nesta faixa etária.",
      "(E) A paciente deve receber a dose de reforço da dTpa a cada 5 anos."
    ],
    "correctAnswer": 0,
    "explanation": "Pelas orientações vigentes do Ministério da Saúde (seguidas pela Febrasgo), quem recebeu uma dose da vacina contra febre amarela após os 5 anos de idade é considerado vacinado por toda a vida: não há indicação de segunda dose.\n\nA paciente já tem imunidade para hepatite B (anti-HBs reagente) e pode receber a vacina contra herpes-zóster (recombinante), respeitando cerca de 1 ano após o episódio.",
    "commentary": "VPC13 de rotina (B): a vacinação pneumocócica é recomendada a partir dos 60 anos ou com comorbidades; ela não tem indicação aos 53 anos sem comorbidade.\n\nNão vacinar contra zóster por ter tido zóster (C): episódio prévio não contraindica; a vacina reduz recorrências.\n\nHPV com contraindicação absoluta (D): não há contraindicação; o limite etário é de indicação e disponibilidade, não de segurança.\n\ndTpa a cada 5 anos (E): o reforço de dT/dTpa é a cada 10 anos (5 anos só em ferimentos de risco).",
    "reference": "Febrasgo — Programa Vacinal para Mulheres (2021) / Calendário de vacinação do adulto — PNI",
    "tags": [
      "ginecologia",
      "imunização",
      "vacinação da mulher",
      "febre amarela"
    ]
  },
  {
    "id": "hosbos2027-44",
    "topography": "5.1",
    "topic": "Contracepção",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente no terceiro dia pós parto vaginal, IMC 30 kg/m², em amamentação materna exclusiva, solicita, antes da alta, um método contraceptivo para ser iniciado de imediato, pois refere prole constituída. Nega outras comorbidades ou tabagismo.\n\nDe acordo com os Critérios de Elegibilidade dos Métodos Anticoncepcionais no Puerpério, assinale a alternativa que representa o método anticoncepcional mais adequado para essa paciente.",
    "options": [
      "(A) DIU de cobre.",
      "(B) DIU de levonorgestrel.",
      "(C) Anel vaginal.",
      "(D) Adesivo transdérmico.",
      "(E) Implante de etonogestrel."
    ],
    "correctAnswer": 4,
    "explanation": "Puérpera no 3º dia, amamentando exclusivamente, que quer método imediato e de longa duração. Pelos Critérios de Elegibilidade da OMS:\n\n• Métodos só de progestagênio (implante, injetável trimestral, minipílula) são categoria 1 em qualquer momento do puerpério, inclusive durante a amamentação\n• DIU (cobre ou LNG) é categoria 1/2 até 48 horas pós-parto ou a partir de 4 semanas; entre 48 horas e 4 semanas é categoria 3\n\nNo 3º dia, o implante de etonogestrel é o mais adequado.",
    "commentary": "DIU de cobre (A): entre 48 h e 4 semanas pós-parto é categoria 3, pelo risco de expulsão e perfuração.\n\nDIU de levonorgestrel (B): mesma restrição de tempo do DIU de cobre.\n\nAnel vaginal (C): contém estrogênio; contraindicado (categoria 4) antes de 6 semanas em lactantes.\n\nAdesivo (D): também combinado com estrogênio, com a mesma restrição.",
    "reference": "Critérios Médicos de Elegibilidade para Uso de Métodos Anticoncepcionais — OMS, 5ª ed. / Febrasgo",
    "tags": [
      "ginecologia",
      "contracepção",
      "puerpério",
      "implante de etonogestrel"
    ]
  },
  {
    "id": "hosbos2027-45",
    "topography": "11",
    "topic": "Puericultura",
    "module": "Ginecologia e Obstetrícia",
    "text": "Assinale a alternativa que indica a avaliação de meninas para puberdade tardia, de acordo com a Academia Americana de Pediatria e Colégio Americano de Obstetras e Ginecologistas.",
    "options": [
      "(A) Ausência de menarca em até 1 ano após a telarca.",
      "(B) Ausência de brotos mamários aos 13 anos de idade.",
      "(C) Ausência de menarca aos 14 anos de idade.",
      "(D) Menarca ocorrendo antes da telarca.",
      "(E) Pubarca ocorrendo antes da telarca."
    ],
    "correctAnswer": 1,
    "explanation": "Em meninas, a puberdade é considerada atrasada e deve ser investigada quando não há desenvolvimento mamário (telarca, M2 de Tanner) aos 13 anos — cerca de 2 a 2,5 desvios-padrão acima da média.\n\nTambém é indicação de avaliação a ausência de menarca aos 15 anos ou mais de 3 anos após a telarca.",
    "commentary": "Ausência de menarca até 1 ano após a telarca (A): o intervalo normal é de 2 a 3 anos; investiga-se se passar de 3.\n\nAusência de menarca aos 14 anos (C): o critério de amenorreia primária é 15 anos (com telarca presente).\n\nMenarca antes da telarca (D): sequência anômala que merece investigação, mas não é o critério de puberdade tardia.\n\nPubarca antes da telarca (E): pode ocorrer como variação normal (cerca de 15% das meninas).",
    "reference": "ACOG Committee Opinion 651 (Menstruation in Girls and Adolescents) / AAP — Delayed Puberty",
    "tags": [
      "ginecologia",
      "ginecologia infanto-puberal",
      "puberdade tardia"
    ]
  },
  {
    "id": "hosbos2027-46",
    "module": "Ginecologia e Obstetrícia",
    "text": "O ciclo menstrual caracteriza-se por uma série de eventos que ocorrem em diversos níveis do eixo “hipotálamo-hipófise-ovário”.\n\nEm relação a esse ciclo, assinale a alternativa correta.",
    "options": [
      "(A) A hipófise posterior produz FSH, LH e TSH e cada hormônio é produzido por uma célula diferente.",
      "(B) A inibina é um peptídeo produzido no ovário pelas células da teca e está ligada a SHBG.",
      "(C) O GnRH é sintetizado no hipotálamo e é liberado de forma pulsátil na circulação porta-hipofisária.",
      "(D) O GnRH age sobre a neuro hipófise estimulando a secreção de FSH e LH.",
      "(E) Estrogênio e progesterona são gonadotrofinas que fazem feedback negativo na adeno-hipófise."
    ],
    "correctAnswer": 2,
    "explanation": "O GnRH é um decapeptídeo sintetizado no hipotálamo (núcleo arqueado) e liberado de forma pulsátil no sistema porta hipotálamo-hipofisário. A frequência e a amplitude desses pulsos determinam a secreção de FSH e LH pela adeno-hipófise.\n\nA liberação contínua, como ocorre com os análogos de GnRH, dessensibiliza os receptores e suprime o eixo.",
    "commentary": "Hipófise posterior produz FSH, LH e TSH (A): essas glicoproteínas são da adeno-hipófise (anterior); FSH e LH vêm do mesmo gonadotrofo.\n\nInibina da teca ligada à SHBG (B): a inibina é produzida pelas células da granulosa e não se liga à SHBG, que transporta esteroides sexuais.\n\nGnRH age sobre a neuro-hipófise (D): age sobre a adeno-hipófise.\n\nEstrogênio e progesterona são gonadotrofinas (E): são esteroides ovarianos; gonadotrofinas são FSH e LH.",
    "reference": "Speroff — Endocrinologia Ginecológica Clínica e Infertilidade / Febrasgo — Tratado de Ginecologia",
    "tags": [
      "ginecologia",
      "ciclo menstrual",
      "eixo hipotálamo-hipófise-ovário",
      "GnRH"
    ]
  },
  {
    "id": "hosbos2027-47",
    "topography": "5.1",
    "topic": "Vaginose bacteriana",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 30 anos queixando-se de secreção amarelada, de odor fétido. O esfregaço do conteúdo vaginal demonstrou uma alta adesão entre as estruturas (clue cells), o Whiff test veio positivo.\n\nAssinale a alternativa que representa o diagnóstico e o provável valor de pH encontrado na secreção.",
    "options": [
      "(A) Vaginite descamativa; pH > 5.",
      "(B) Tricomoníase; pH > 5.",
      "(C) Candidíase; pH < 4,5.",
      "(D) Vaginose bacteriana; pH de 5.",
      "(E) Vaginose citolítica; pH 3,5."
    ],
    "correctAnswer": 3,
    "explanation": "Corrimento acinzentado ou amarelado com odor fétido, clue cells (células-alvo) e teste das aminas (Whiff) positivo preenchem os critérios de Amsel para vaginose bacteriana.\n\nO quarto critério é o pH vaginal acima de 4,5, compatível com o valor de 5. O tratamento é metronidazol.",
    "commentary": "Vaginite descamativa (A): inflamatória, com leucócitos e células parabasais, sem clue cells.\n\nTricomoníase (B): pode ter pH > 5 e Whiff positivo, mas o achado é o protozoário móvel, não as clue cells.\n\nCandidíase (C): pH < 4,5, corrimento grumoso e prurido; pseudo-hifas, sem odor.\n\nVaginose citolítica (E): excesso de lactobacilos com lise celular, pH ácido, sem clue cells nem odor.",
    "reference": "PCDT para Atenção Integral às Pessoas com IST — Ministério da Saúde, 2022 / Critérios de Amsel",
    "tags": [
      "ginecologia",
      "vaginose bacteriana",
      "critérios de Amsel",
      "corrimento vaginal"
    ]
  },
  {
    "id": "hosbos2027-48",
    "topography": "5.1",
    "topic": "Mioma uterino",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 42 anos, GIII PIII A0, IMC 32 kg/m², assintomática, submetida a ultrassom transvaginal que identificou: útero com volume aumentado de 180 cc e presença de nódulo miometrial com limites precisos, localizado em região subserosa, fúndica lateral esquerda, medindo 5 cm de diâmetro, sugestivo de mioma.\n\nAssinale a alternativa que representa a conduta mais adequada.",
    "options": [
      "(A) Miomectomia.",
      "(B) Histerectomia total ou subtotal.",
      "(C) Tratamento com análogo de GnRH.",
      "(D) Progesterona por 14 dias na segunda fase do ciclo menstrual.",
      "(E) Expectante, com controle ultrassonográfico anual."
    ],
    "correctAnswer": 4,
    "explanation": "Mioma subseroso único de 5 cm em mulher assintomática, sem desejo reprodutivo declarado e sem alteração do ciclo.\n\nMiomas assintomáticos não exigem tratamento: a conduta é expectante, com seguimento clínico e ultrassonográfico periódico. O tratamento fica reservado para sangramento, dor, compressão, infertilidade ou crescimento suspeito.",
    "commentary": "Miomectomia (A): não há sintomas ou indicação reprodutiva que a justifique.\n\nHisterectomia (B): tratamento definitivo para sintomáticas com prole completa, não para mioma assintomático.\n\nAnálogo de GnRH (C): uso temporário pré-operatório ou na perimenopausa sintomática; efeitos adversos limitam o uso.\n\nProgesterona na segunda fase (D): não reduz o mioma e não há sangramento a controlar.",
    "reference": "Febrasgo — Miomatose uterina (protocolo) / ACOG Practice Bulletin 228 (2021)",
    "tags": [
      "ginecologia",
      "mioma uterino",
      "conduta expectante"
    ]
  },
  {
    "id": "hosbos2027-49",
    "topography": "5.1",
    "topic": "Sangramento uterino anormal",
    "module": "Ginecologia e Obstetrícia",
    "text": "G.B.V., 18 anos, com queixa de amenorreia primária. Ao exame físico: estatura 1,75m, IMC 21 kg/m², mamas desenvolvidas (Tanner M4), pelos pubianos e axilares escassos (Tanner P1) e abaulamento sugestivo de hérnia inguinal bilateral. Paciente nega atividade sexual. Ultrassom pélvico revela: ausência de útero e ovários.\n\nDe acordo com o caso acima, assinale a alternativa que representa o diagnóstico mais provável.",
    "options": [
      "(A) Síndrome de Mayer-Rokitansky-Kuster-Hauser (Agenesia mulleriana).",
      "(B) Disgenesia gonadal pura (Síndrome de Swyer).",
      "(C) Síndrome da insensibilidade completa aos androgênios.",
      "(D) Hiperplasia adrenal congênita forma não-clássica.",
      "(E) Síndrome de Turner."
    ],
    "correctAnswer": 2,
    "explanation": "Amenorreia primária em fenótipo feminino alto, com mamas bem desenvolvidas, pelos pubianos e axilares ausentes ou escassos, hérnias inguinais bilaterais (testículos) e ausência de útero e ovários: síndrome de insensibilidade completa aos androgênios (cariótipo 46,XY).\n\nOs testículos produzem testosterona, que é aromatizada em estrogênio (por isso as mamas), mas os receptores androgênicos não funcionam (por isso não há pelos). O hormônio antimülleriano impede a formação de útero e trompas.",
    "commentary": "MRKH (A): agenesia mülleriana em 46,XX, com ovários normais e pelos normais.\n\nDisgenesia gonadal pura (B): gônadas em fita sem estrogênio, logo sem desenvolvimento mamário, e com útero presente.\n\nHAC não clássica (D): causa hiperandrogenismo, com útero e ovários presentes.\n\nTurner (E): baixa estatura, sem mamas (falência ovariana) e com útero presente.",
    "reference": "Speroff — Endocrinologia Ginecológica Clínica / Febrasgo — Amenorreia",
    "tags": [
      "ginecologia",
      "amenorreia primária",
      "insensibilidade androgênica",
      "distúrbios da diferenciação sexual"
    ]
  },
  {
    "id": "hosbos2027-50",
    "topography": "5.2",
    "topic": "Pré-eclâmpsia",
    "module": "Ginecologia e Obstetrícia",
    "text": "F.B.C., 18 anos, primigesta, gestação gemelar diacoriônica e diamniótica, com idade gestacional de 33 semanas, deu entrada no PSO com PA de 170 x 110 mmHg, sintomas de escotomas, dor epigástrica e cefaleia fronto-occipital. Nega história de aumento de PA prévio nesta gestação.\n\nAssinale a alternativa que representa o diagnóstico correto.",
    "options": [
      "(A) Hipertensão gestacional.",
      "(B) Pré-eclâmpsia superajuntada.",
      "(C) Hipertensão arterial crônica.",
      "(D) Iminência de eclâmpsia.",
      "(E) Eclâmpsia."
    ],
    "correctAnswer": 3,
    "explanation": "Gestante de 33 semanas, sem hipertensão prévia, com PA de 170 x 110 mmHg (grave) e sintomas de comprometimento neurológico e hepático: escotomas, cefaleia e dor epigástrica.\n\nÉ pré-eclâmpsia grave com sinais de iminência de eclâmpsia. A conduta é sulfato de magnésio para prevenir convulsão, anti-hipertensivo de ação rápida e estabilização para a resolução da gestação.",
    "commentary": "Hipertensão gestacional (A): não explica os sintomas de lesão de órgão-alvo, que definem a pré-eclâmpsia com gravidade.\n\nPré-eclâmpsia superajuntada (B): pressupõe hipertensão crônica prévia, que ela nega.\n\nHipertensão crônica (C): exigiria hipertensão antes de 20 semanas ou antes da gestação.\n\nEclâmpsia (E): exige convulsão tônico-clônica, que não ocorreu.",
    "reference": "Febrasgo/RBEHG — Pré-eclâmpsia (protocolo 2023) / Manual de Gestação de Alto Risco — MS, 2022",
    "tags": [
      "obstetrícia",
      "pré-eclâmpsia",
      "iminência de eclâmpsia",
      "sulfato de magnésio"
    ]
  },
  {
    "id": "hosbos2027-51",
    "topography": "5.2",
    "topic": "Pré-natal",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente vem para avaliação pela medicina fetal, para ser submetida ao primeiro ultrassom da gestação. Refere idade gestacional cronológica de 8 semanas. À imagem, identificados 2 sacos gestacionais e 2 embriões, sendo 1 em cada saco gestacional.\n\nDe acordo com o caso apresentado e com os conhecimentos sobre gemelidade, assinale a alternativa correta.",
    "options": [
      "(A) A presença de 2 sacos gestacionais confirma gestação dizigótica.",
      "(B) Presença de 2 sacos gestacionais indica gestação monocoriônica e diamniótica.",
      "(C) A presença de 2 sacos gestacionais origina o sinal do lâmbda.",
      "(D) O sinal do T é característico de gestação dicoriônica.",
      "(E) Nesta gestação será identificada 1 placenta."
    ],
    "correctAnswer": 2,
    "explanation": "Dois sacos gestacionais separados, cada um com um embrião, na ultrassonografia de 8 semanas, indicam gestação dicoriônica e diamniótica.\n\nNa dicoriônica, o tecido coriônico se insinua entre as membranas na inserção placentária e forma o sinal do lambda (ou do twin peak). Na monocoriônica diamniótica, a membrana fina forma o sinal do T. A corionicidade é mais bem definida no primeiro trimestre.",
    "commentary": "Confirma dizigótica (A): cerca de 1/3 dos monozigóticos (divisão até o 3º dia) também são dicoriônicos; a corionicidade não define a zigoticidade.\n\nMonocoriônica diamniótica (B): esta tem um único saco coriônico com duas cavidades amnióticas.\n\nSinal do T na dicoriônica (D): o sinal do T é da monocoriônica.\n\nUma placenta (E): na dicoriônica há duas placentas (que podem se fundir, mas os córions são separados).",
    "reference": "ISUOG Practice Guidelines: role of ultrasound in twin pregnancy / Zugaib Obstetrícia",
    "tags": [
      "obstetrícia",
      "gestação gemelar",
      "corionicidade",
      "sinal do lambda"
    ]
  },
  {
    "id": "hosbos2027-52",
    "topography": "5.2",
    "topic": "Trabalho de parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Quando riscos maternos e fetais sobrepujam os benefícios representados pela permanência do feto dentro do útero, a interrupção da gestação está indicada.\n\nIndique a alternativa que pode representar, respectivamente, uma indicação e uma contra-indicação à indução do trabalho de parto, visando o parto vaginal.",
    "options": [
      "(A) Pós datismo; óbito fetal.",
      "(B) Oligoâmnio absoluto; crescimento intra-uterino restrito.",
      "(C) HIV positivo com carga viral > 1000; corioamnionite.",
      "(D) Iteratividade; Diabetes gestacional.",
      "(E) Amniorrexe e idade gestacional de 37 semanas; herpes genital ativa."
    ],
    "correctAnswer": 4,
    "explanation": "A ruptura prematura de membranas no termo (37 semanas) é indicação de resolução da gestação, e a indução é adequada se não houver contraindicação ao parto vaginal.\n\nO herpes genital com lesão ativa (ou pródromos) no trabalho de parto contraindica o parto vaginal pelo risco de herpes neonatal; a via indicada é a cesárea.",
    "commentary": "Pós-datismo; óbito fetal (A): o pós-datismo indica indução, mas o óbito fetal não contraindica, e a via vaginal é preferível.\n\nOligoâmnio; CIUR (B): o CIUR não é contraindicação à indução em boa vitalidade fetal.\n\nHIV com carga viral > 1000; corioamnionite (C): HIV com carga viral > 1000 indica cesárea eletiva, não indução; a corioamnionite indica resolução e não contraindica parto vaginal.\n\nIteratividade; DMG (D): a iteratividade (duas ou mais cesáreas) é contraindicação relativa à indução, e o DMG não contraindica.",
    "reference": "Febrasgo — Indução do trabalho de parto / ACOG Practice Bulletin 107",
    "tags": [
      "obstetrícia",
      "indução do parto",
      "herpes genital",
      "ruptura prematura de membranas"
    ]
  },
  {
    "id": "hosbos2027-53",
    "topography": "5.2",
    "topic": "Diabetes gestacional",
    "module": "Ginecologia e Obstetrícia",
    "text": "R.D.S., 30 anos, primigesta, idade gestacional de 12 semanas, vem em segunda consulta de pré natal com resultado de glicemia de jejum de 94 mg/dL.\n\nDe acordo com o resultado de glicemia, assinale a alternativa correta.",
    "options": [
      "(A) Deve-se solicitar o TOTG (teste oral de tolerância à glicose) com idade gestacional entre 24-28 semanas.",
      "(B) Trata-se de diabetes gestacional.",
      "(C) Trata-se de overt diabetes.",
      "(D) Deve-se solicitar a hemoglobina glicada para diagnóstico.",
      "(E) Deve-se introduzir insulina para controle glicêmico."
    ],
    "correctAnswer": 1,
    "explanation": "No protocolo brasileiro (OPAS/MS/Febrasgo/SBD, 2017), a glicemia de jejum colhida na primeira consulta (antes de 20 semanas) entre 92 e 125 mg/dL já define diabetes mellitus gestacional, sem necessidade de TOTG.\n\nCom 94 mg/dL, o diagnóstico é DMG. A conduta inicial é orientação nutricional, atividade física e automonitorização da glicemia.",
    "commentary": "TOTG com 24–28 semanas (A): reservado a quem tem jejum inicial < 92 mg/dL.\n\nOvert diabetes (C): exige jejum ≥ 126 mg/dL, HbA1c ≥ 6,5% ou glicemia aleatória ≥ 200 mg/dL.\n\nHbA1c para diagnóstico (D): não é usada para diagnosticar DMG.\n\nInsulina já (E): a primeira linha é dieta e atividade física; a insulina entra se a meta não for atingida.",
    "reference": "Rastreamento e diagnóstico de diabetes mellitus gestacional no Brasil — OPAS/MS/Febrasgo/SBD, 2017",
    "tags": [
      "obstetrícia",
      "diabetes mellitus gestacional",
      "pré-natal",
      "glicemia de jejum"
    ]
  },
  {
    "id": "hosbos2027-54",
    "topography": "5.2",
    "topic": "Trabalho de parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "A taxa de prematuridade no Brasil está em torno de 11 - 12% dos nascimentos. A cerclagem uterina é um procedimento realizado para prevenir o nascimento antes das 37 semanas de idade gestacional. Dentre as alternativas a seguir, assinale a que representa indicação desta conduta, de acordo com a ACOG (American College of Obstetricians and Gynecologists) e FEBRASGO (Federação Brasileira de Ginecologia e Obstetrícia).",
    "options": [
      "(A) Em pacientes primigestas, assintomáticas, com colo uterino de 23 mm.",
      "(B) Quando há abertura do colo uterino após cerclagem prévia.",
      "(C) Em gestações gemelares.",
      "(D) Em pacientes com anomalias mullerianas.",
      "(E) Em pacientes com colo curto e trabalho de parto prematuro anterior com IG ≤ 34 semanas."
    ],
    "correctAnswer": 4,
    "explanation": "Pela ACOG e pela Febrasgo, a cerclagem está indicada em:\n\n• História de insuficiência istmocervical (perdas no 2º trimestre indolores)\n• Gestante com parto prematuro espontâneo anterior (< 34 semanas) e colo curto (< 25 mm) antes de 24 semanas\n• Dilatação cervical indolor no 2º trimestre (cerclagem de emergência)\n\nA alternativa E corresponde à indicação por ultrassonografia.",
    "commentary": "Primigesta com colo de 23 mm (A): sem parto prematuro prévio, o colo curto é tratado com progesterona vaginal, não cerclagem.\n\nAbertura do colo após cerclagem prévia (B): não indica nova cerclagem de rotina.\n\nGestação gemelar (C): cerclagem não reduz prematuridade em gemelares sem outra indicação.\n\nAnomalias müllerianas (D): não são indicação isolada de cerclagem.",
    "reference": "ACOG Practice Bulletin 142 (Cerclage) / Febrasgo — Prevenção do parto pré-termo",
    "tags": [
      "obstetrícia",
      "prematuridade",
      "cerclagem",
      "colo curto"
    ]
  },
  {
    "id": "hosbos2027-55",
    "topography": "5.2",
    "topic": "Assistência ao parto",
    "module": "Ginecologia e Obstetrícia",
    "text": "Embora a distocia de ombro apresente risco adicional pela macrossomia fetal, mais de 50% dos casos ocorrem em RN de peso normal e não pode ser prevista. Desse modo, é essencial que o profissional médico esteja apto em executar, habilmente, as manobras para desimpactar o ombro e tenha cuidados efetivos.\n\nAssinale a alternativa que representa a primeira conduta a ser realizada para a resolução de distocia de ombro.",
    "options": [
      "(A) Manobra de Gaskin.",
      "(B) Manobra de McRoberts com pressão supra púbica.",
      "(C) Manobra de Zavanelli;",
      "(D) Manobra de Jacquemier.",
      "(E) Manobra de Rubin II e Wood."
    ],
    "correctAnswer": 1,
    "explanation": "Diante da distocia de ombro, a primeira medida (sequência ALEERTA/HELPERR) é chamar ajuda e realizar a manobra de McRoberts (hiperflexão das coxas sobre o abdome), associada à pressão suprapúbica (manobra de Rubin I).\n\nAs duas juntas resolvem a maioria dos casos. Depois vêm as manobras rotacionais (Rubin II, Woods), a retirada do braço posterior (Jacquemier), a posição de quatro apoios (Gaskin) e, como último recurso, Zavanelli.",
    "commentary": "Gaskin (A): pode ser usada, mas não é a primeira conduta padronizada.\n\nZavanelli (C): recolocação do polo cefálico para cesárea, último recurso.\n\nJacquemier (D): retirada do braço posterior, manobra de segunda linha.\n\nRubin II e Woods (E): manobras rotacionais internas, tentadas após falha de McRoberts com pressão suprapúbica.",
    "reference": "RCOG Green-top Guideline 42 (Shoulder Dystocia) / ACOG Practice Bulletin 178",
    "tags": [
      "obstetrícia",
      "distocia de ombro",
      "manobra de McRoberts"
    ]
  },
  {
    "id": "hosbos2027-56",
    "topography": "5.2",
    "topic": "Infecções na gestação",
    "module": "Ginecologia e Obstetrícia",
    "text": "D.B.V., 28 anos, GII PII 1N 1C (há 3 anos) A0, idade gestacional de 37 semanas, vem ao PS com queixa de perda de líquido via vaginal há cerca de 20 horas. Ao exame especular: saída de líquido claro com grumos pelo orifício externo do colo uterino. Ao toque vaginal: colo 4 cm, grosso-médio e medianizado. Dinâmica uterina: 3/10’/30”. Estreptococo beta hemolítico do grupo B: desconhecido. Cardiotocografia: normal.\n\nDe acordo com o caso apresentado, assinale a conduta correta.",
    "options": [
      "(A) Corticoide IM, ampicilina dose de ataque e parto cesariano.",
      "(B) Misoprostol VV para indução do trabalho de parto.",
      "(C) Penicilina G cristalina dose de ataque e manutenção e condução do trabalho de parto.",
      "(D) Corticoide IM, ocitocina EV e condução do trabalho de parto.",
      "(E) Assistência ao parto humanizado, sem intervenção neste momento."
    ],
    "correctAnswer": 2,
    "explanation": "Gestante a termo, em trabalho de parto ativo (4 cm, 3 contrações em 10 minutos), com bolsa rota há 20 horas e status do estreptococo do grupo B desconhecido.\n\nCom pesquisa de GBS desconhecida e bolsa rota há 18 horas ou mais, está indicada a profilaxia intraparto: penicilina G cristalina em dose de ataque e manutenção até o parto. Como já está em trabalho de parto, conduz-se o parto vaginal. A cesárea anterior há 3 anos não contraindica o parto vaginal.",
    "commentary": "Corticoide, ampicilina e cesárea (A): corticoide não se usa a termo, e não há indicação de cesárea.\n\nMisoprostol (B): ela já está em trabalho de parto, e misoprostol é contraindicado com cesárea prévia.\n\nCorticoide e ocitocina (D): corticoide não está indicado a termo, e falta a profilaxia para GBS.\n\nSem intervenção (E): ignora a profilaxia para GBS indicada pela bolsa rota prolongada.",
    "reference": "ACOG Committee Opinion 797 (GBS) / Manual de Gestação de Alto Risco — MS, 2022",
    "tags": [
      "obstetrícia",
      "estreptococo do grupo B",
      "ruptura prematura de membranas",
      "profilaxia intraparto"
    ]
  },
  {
    "id": "hosbos2027-57",
    "topography": "14",
    "topic": "Emergências obstétricas",
    "module": "Ginecologia e Obstetrícia",
    "text": "Sobre a intubação orotraqueal em gestantes no terceiro trimestre, assinale a alternativa correta.",
    "options": [
      "(A) Deve ser evitada, mesmo em cenários críticos, por risco de hipotensão materna e hipoperfusão placentária.",
      "(B) O risco de aspiração é semelhante ao da população geral.",
      "(C) A pré-oxigenação é menos importante, por conta da maior reserva pulmonar.",
      "(D) O risco de aspiração deve-se ao esvaziamento gástrico acelerado.",
      "(E) Pode ser mais difícil, em razão das alterações anatômicas próprias da gestação."
    ],
    "correctAnswer": 4,
    "explanation": "Na gestante de terceiro trimestre, a via aérea é potencialmente difícil: edema de mucosa, ingurgitamento capilar, aumento das mamas e do peso dificultam a laringoscopia e a ventilação.\n\nHá também menor tolerância à apneia (menor capacidade residual funcional e maior consumo de O₂) e maior risco de aspiração (relaxamento do esfíncter esofágico inferior pela progesterona, pressão abdominal aumentada). Pré-oxigenação adequada e planejamento da via aérea difícil são obrigatórios.",
    "commentary": "Deve ser evitada (A): quando indicada, a intubação não deve ser adiada; a hipoxemia materna é mais perigosa para o feto.\n\nRisco de aspiração igual (B): o risco é maior que na população geral.\n\nPré-oxigenação menos importante (C): é ainda mais importante, pela dessaturação rápida.\n\nEsvaziamento gástrico acelerado (D): o esvaziamento está retardado ou normal, e o esfíncter esofágico inferior é incompetente.",
    "reference": "Obstetric Anaesthetists' Association/DAS — Difficult and failed tracheal intubation in obstetrics (2015)",
    "tags": [
      "obstetrícia",
      "via aérea difícil",
      "intubação orotraqueal",
      "anestesia obstétrica"
    ]
  },
  {
    "id": "hosbos2027-58",
    "topography": "14",
    "topic": "Emergências obstétricas",
    "module": "Ginecologia e Obstetrícia",
    "text": "Sobre a realização da cesariana perimortem, em gestantes com idade gestacional acima de 20-24 semanas, assinale a alternativa que representa as informações corretas.",
    "options": [
      "(A) Deve-se aguardar a confirmação formal de vitalidade fetal antes de ser iniciada.",
      "(B) Deve ser realizada imediatamente após a intubação, independentemente do tempo de parada.",
      "(C) Deve ser realizada após 4-5 minutos de manobras de RCP sem sucesso.",
      "(D) A paciente deve ser encaminhada ao centro cirúrgico para o procedimento.",
      "(E) Não deve ser realizado, uma vez que trata-se de feto inviável."
    ],
    "correctAnswer": 2,
    "explanation": "Na parada cardiorrespiratória em gestante com útero acima da cicatriz umbilical (cerca de 20 semanas ou mais), se não houver retorno da circulação após cerca de 4 minutos de RCP de alta qualidade, inicia-se a cesárea perimortem, com o objetivo de extrair o feto até o 5º minuto.\n\nO procedimento é feito no local da parada, sem transporte. A descompressão aortocava melhora a RCP materna e é feita primariamente em benefício da mãe.",
    "commentary": "Aguardar confirmação da vitalidade fetal (A): não se deve perder tempo; o benefício é materno e fetal.\n\nLogo após a intubação (B): o momento é definido pelo tempo de RCP sem sucesso, não pela intubação.\n\nLevar ao centro cirúrgico (D): o transporte atrasa; a cesárea é feita no local.\n\nNão realizar porque o feto é inviável (E): mesmo com feto inviável, a cesárea melhora as chances de reanimação materna.",
    "reference": "AHA 2020/2023 — Cardiac Arrest in Pregnancy / Febrasgo",
    "tags": [
      "obstetrícia",
      "parada cardiorrespiratória",
      "cesárea perimortem"
    ]
  },
  {
    "id": "hosbos2027-59",
    "topography": "5.2",
    "topic": "Abortamento",
    "module": "Ginecologia e Obstetrícia",
    "text": "P.M.C., 27 anos, primigesta, idade gestacional cronológica de 7 semanas, vem ao pronto socorro queixando-se de sangramento vaginal de início há cerca de 2 dias, associado a cólicas leves. Ao exame: toque vaginal: colo impérvio e amolecido. Abdome: fundo uterino intra-pélvico. Anexos não palpáveis. Dor à descompressão brusca negativa. Especular: pequena quantidade de sangue coletado em fórnice posterior. À ultrassonografia transvaginal: saco gestacional intra-uterino, com eco embrionário de 3 mm, sem batimentos cardioembrionários. Ovários sem alterações.\n\nAssinale a alternativa que representa o diagnóstico correto.",
    "options": [
      "(A) Ameaça de abortamento.",
      "(B) Abortamento retido.",
      "(C) Abortamento inevitável.",
      "(D) Abortamento completo.",
      "(E) Gestação molar."
    ],
    "correctAnswer": 0,
    "explanation": "Sangramento discreto, cólicas leves, colo impérvio e embrião de 3 mm sem batimentos cardíacos com 7 semanas.\n\nA ausência de BCF só confirma perda gestacional quando o comprimento cabeça-nádega é ≥ 7 mm (ou com saco gestacional ≥ 25 mm sem embrião). Com embrião de 3 mm, a gestação pode ser viável e ainda muito inicial. O diagnóstico é ameaça de abortamento, com nova ultrassonografia em 7 a 14 dias.",
    "commentary": "Abortamento retido (B): exigiria CCN ≥ 7 mm sem BCF ou ausência de BCF em exame seriado.\n\nAbortamento inevitável (C): exige colo dilatado ou sangramento intenso.\n\nAbortamento completo (D): exige cavidade vazia após eliminação do conteúdo.\n\nGestação molar (E): imagem em 'flocos de neve' ou cística, sem embrião normal.",
    "reference": "ACOG Practice Bulletin 200 (Early Pregnancy Loss) / Doubilet et al. — NEJM 2013",
    "tags": [
      "obstetrícia",
      "abortamento",
      "sangramento da primeira metade",
      "ultrassonografia"
    ]
  },
  {
    "id": "hosbos2027-60",
    "topography": "5.2",
    "topic": "Puerpério",
    "module": "Ginecologia e Obstetrícia",
    "text": "R.G.V., 32 anos, puérpera no décimo dia pós parto vaginal, sem comorbidades, vem ao consultório para avaliação e queixa-se de sentimentos de tristeza, crises de choro frequentes, com emotividade exacerbada, hipersensibilidade e labilidade emocional, desde o terceiro dia pós parto. Refere ainda cansaço e preocupações com relação ao cuidado com o bebê.\n\nDe acordo com o quadro acima, assinale a alternativa que representa o diagnóstico mais provável.",
    "options": [
      "(A) Psicose puerperal.",
      "(B) Transtorno de estresse pós traumático no pós parto (TEPT-pós-parto).",
      "(C) Depressão pós parto.",
      "(D) Depressão prévia à gestação.",
      "(E) Blues puerperal."
    ],
    "correctAnswer": 4,
    "explanation": "Tristeza, choro fácil, labilidade emocional e preocupação com o bebê iniciados no 3º dia pós-parto, autolimitados e sem prejuízo funcional grave: blues puerperal (melancolia da maternidade).\n\nAcomete até 80% das puérperas, tem pico entre o 3º e o 5º dia e se resolve espontaneamente em até cerca de 2 semanas. A conduta é acolhimento, apoio e vigilância: se persistir além de 2 semanas ou houver piora, pensar em depressão pós-parto.",
    "commentary": "Psicose puerperal (A): quadro grave com delírios, alucinações e desorganização.\n\nTEPT pós-parto (B): exigiria parto traumático com revivescências e evitação.\n\nDepressão pós-parto (C): dura mais de 2 semanas, com prejuízo funcional e sintomas depressivos maiores; aqui estamos no 10º dia.\n\nDepressão prévia (D): não há história anterior à gestação.",
    "reference": "Febrasgo — Transtornos psiquiátricos no puerpério / ACOG Clinical Practice Guideline 4 (2023)",
    "tags": [
      "obstetrícia",
      "puerpério",
      "blues puerperal",
      "saúde mental perinatal"
    ]
  },
  {
    "id": "hosbos2027-61",
    "topography": "11",
    "topic": "Maus-tratos infantis",
    "module": "Pediatria",
    "text": "As violências contra a criança e o adolescente constituem grave problema de saúde pública e importante causa de morbimortalidade. Cabe ao médico, em sua prática clínica, reconhecer as diferentes formas de violência bem como as implicações legais e as condutas de notificação e proteção previstas na legislação brasileira, em especial no Estatuto da Criança e do Adolescente (ECA).\n\nConsiderando os conceitos atuais sobre o tema, assinale a alternativa correta.",
    "options": [
      "(A) O abandono afetivo, caracterizado pela omissão dos pais ou responsáveis no dever de prestar assistência afetiva aos filhos, é expressamente reconhecido como ato ilícito civil, sujeito a reparação de danos, sem prejuízo de outras sanções cabíveis.",
      "(B) A negligência contra a criança e o adolescente caracteriza-se exclusivamente pela omissão dos pais ou responsáveis no provimento das necessidades de natureza afetiva e emocional, não abrangendo a falta de cuidados básicos de saúde, alimentação, higiene e supervisão.",
      "(C) O bullying, definido como intimidação sistemática praticada no ambiente escolar ou de convívio social, configura violência apenas quando há agressão física direta entre os pares, não se reconhecendo formas de violência psicológica ou virtual nesse contexto.",
      "(D) A pornografia infantil, embora constitua grave violação dos direitos da criança e do adolescente, não é considerada forma de violência sexual para fins de notificação compulsória pelo profissional de saúde, restringindo-se às esferas penal e administrativa.",
      "(E) Os maus-tratos físicos, para serem caracterizados como violência contra a criança e o adolescente, exigem a presença de lesões corporais visíveis e de gravidade moderada a intensa, não se configurando diante de lesões leves, contusões discretas ou da simples suspeita de agressão."
    ],
    "correctAnswer": 0,
    "explanation": "O ECA, alterado em 2025, passou a reconhecer expressamente o abandono afetivo — omissão dos pais ou responsáveis no dever de assistência afetiva (convívio, cuidado, orientação) — como ato ilícito civil, sujeito a reparação de danos, sem prejuízo de outras sanções.\n\nAs demais alternativas restringem indevidamente conceitos de violência que são amplos.",
    "commentary": "Negligência só afetiva (B): a negligência inclui omissão de cuidados básicos (saúde, alimentação, higiene, educação, supervisão).\n\nBullying só com agressão física (C): a Lei 13.185/2015 inclui violência verbal, psicológica e virtual (cyberbullying).\n\nPornografia infantil fora da notificação (D): é forma de violência sexual (exploração) e entra na notificação de violência.\n\nMaus-tratos exigem lesão moderada a grave (E): qualquer lesão, mesmo leve, e a simples suspeita já obrigam a notificação.",
    "reference": "Estatuto da Criança e do Adolescente (Lei nº 8.069/1990) e atualizações / SBP — Manual de atendimento às crianças e adolescentes vítimas de violência",
    "tags": [
      "pediatria",
      "violência infantil",
      "ECA",
      "maus-tratos"
    ]
  },
  {
    "id": "hosbos2027-62",
    "topography": "11",
    "topic": "Desidratação",
    "module": "Pediatria",
    "text": "Criança de 2 anos e 4 meses, com 12 kg, é levada ao pronto-socorro com diarreia aquosa há 2 dias e vômitos esporádicos. Ao exame, apresenta-se irritada e intranquila, olhos fundos, choro sem lágrimas, boca e língua secas, sede aumentada (bebe rápido e avidamente) e pulso cheio. O pediatra classifica o estado de desidratação e opta pelo plano B recomendado pelo Ministério da Saúde.\n\nSobre o manejo clínico correto dessa situação, assinale a alternativa correta.",
    "options": [
      "(A) A solução de sais de reidratação oral (SRO) deve ser oferecida em volume de 50 a 100 ml/kg (média de 75 ml/kg), administrado em pequenas quantidades e maior frequência, ao longo de 4 a 6 horas, no estabelecimento de saúde, com reavaliação periódica do estado de hidratação; se os sinais de desidratação desaparecerem, o paciente passa a seguir o plano A.",
      "(B) A reidratação oral deve ser realizada no domicílio, oferecendo-se à criança 100 a 200 ml de SRO após cada evacuação diarreica, sem necessidade de permanência no serviço de saúde, uma vez que a ausência de vômitos persistentes garante a correção do déficit hídrico.",
      "(C) Na vigência de vômitos persistentes durante o plano B, a conduta correta é suspender a oferta de SRO e iniciar hidratação endovenosa imediata, pois a via oral está contraindicada em qualquer criança que apresente vômitos durante a reidratação.",
      "(D) A quantidade total de SRO a ser administrada no plano B é fixa e independente da sede do paciente, devendo ser infundida em até 2 horas, e a criança deve permanecer em observação por pelo menos 6 horas antes de qualquer reavaliação do estado de hidratação.",
      "(E) Se, durante o plano B, a criança mantiver sinais de desidratação após a fase inicial, a conduta é repetir a oferta oral de SRO no mesmo volume, saborizando-se a solução e adicionando-se zinco à prescrição para melhor controle clínico do quadro."
    ],
    "correctAnswer": 0,
    "explanation": "Criança com dois ou mais sinais de desidratação (irritada, olhos fundos, sem lágrimas, mucosas secas, sedenta) e sem sinais de gravidade: desidratação, tratada pelo plano B do Ministério da Saúde.\n\nNo plano B, a terapia de reidratação oral é feita na unidade de saúde: SRO de 50 a 100 mL/kg (média de 75 mL/kg) em 4 a 6 horas, em pequenas quantidades e com frequência, com reavaliação periódica. Quando os sinais desaparecem, passa-se ao plano A (domiciliar).",
    "commentary": "Reidratar em casa (B): esse é o plano A; no plano B a reidratação é supervisionada no serviço.\n\nVômito contraindica a via oral (C): vômitos não contraindicam a TRO; reduz-se o volume e aumenta-se a frequência, ou usa-se gastróclise.\n\nVolume fixo em 2 h e reavaliação após 6 h (D): o volume é guiado pela sede e a reavaliação é periódica.\n\nRepetir o mesmo volume com zinco e sabor (E): sem melhora após o plano B, a conduta é gastróclise ou plano C; não se adiciona sabor à SRO.",
    "reference": "Manejo do paciente com diarreia — Ministério da Saúde (cartaz Planos A, B e C) / SBP",
    "tags": [
      "pediatria",
      "diarreia aguda",
      "desidratação",
      "terapia de reidratação oral"
    ]
  },
  {
    "id": "hosbos2027-63",
    "module": "Pediatria",
    "text": "Escolar do sexo feminino, com 7 anos, iniciará quimioterapia para leucemia linfoblástica aguda, com esquema que inclui também uso de corticosteroides. Na avaliação pré-tratamento, a mãe relata que a menina apresenta, há algumas semanas, dor abdominal intermitente, náuseas, episódios de diarreia com muco e prurido anal, além de cansaço. A criança vive em área rural, costuma andar descalça e tem história de contato com solo e água de córregos. Ao exame físico, não há sinais de desnutrição, e os exames iniciais mostram discreta eosinofilia.\n\nConsiderando o risco de complicações graves após a imunossupressão, o pediatra deve",
    "options": [
      "(A) Considerar a hipótese de estrongiloidíase e investigá-la antes do início da imunossupressão, pois o Strongyloides stercoralis possui ciclo de autoinfecção.",
      "(B) Atribuir o quadro à ascaridíase, uma vez que o Ascaris lumbricoides é o nematelminto mais prevalente nessa faixa etária e sua migração larval pulmonar explica a eosinofilia, não havendo risco de disseminação sistêmica.",
      "(C) Considerar o quadro como manifestação de enterobíase, pois o prurido anal é o sintoma mais característico dessa parasitose, e orientar apenas medidas de higiene, já que a infecção por Enterobius vermicularis é autolimitada e não traz risco adicional com a imunossupressão.",
      "(D) Interpretar a eosinofilia e os sintomas gastrointestinais como manifestação confundidora da própria leucemia, afastando a necessidade de investigação parasitológica, uma vez que a eosinofilia é um achado esperado e inespecífico em doenças hematológicas.",
      "(E) Indicar tratamento empírico imediato com albendazol em dose única para todos os nematelmintos, sem necessidade de investigação prévia, pois essa conduta elimina igualmente todos os nematelmintos e previne qualquer risco de disseminação durante a imunossupressão."
    ],
    "correctAnswer": 0,
    "explanation": "Criança de área rural que anda descalça, com sintomas gastrointestinais, prurido anal e eosinofilia, prestes a receber corticoide e quimioterapia. O grande risco é a estrongiloidíase: o Strongyloides stercoralis tem ciclo de autoinfecção.\n\nCom imunossupressão, sobretudo por corticoide, pode haver hiperinfecção e disseminação com alta mortalidade. A conduta é investigar (parasitológico seriado com método de Baermann-Moraes, sorologia) e tratar com ivermectina antes da imunossupressão, ou tratar empiricamente quando não for possível investigar a tempo.",
    "commentary": "Ascaridíase (B): não tem autoinfecção nem hiperinfecção com corticoide; não é a preocupação principal.\n\nEnterobíase (C): explica o prurido anal, mas não elimina o risco de estrongiloidíase, que é o que importa antes da imunossupressão.\n\nAtribuir à leucemia (D): a eosinofilia com epidemiologia compatível exige investigar parasitose.\n\nAlbendazol dose única (E): é pouco eficaz contra Strongyloides; a droga de escolha é a ivermectina.",
    "reference": "Tratado de Pediatria SBP — Parasitoses intestinais / CDC — Strongyloidiasis",
    "tags": [
      "pediatria",
      "estrongiloidíase",
      "imunossupressão",
      "parasitoses intestinais"
    ]
  },
  {
    "id": "hosbos2027-64",
    "topography": "11",
    "topic": "Anemia ferropriva",
    "module": "Pediatria",
    "text": "Na puericultura, a prevenção da deficiência de ferro e da anemia ferropriva é uma das principais atribuições do médico, dada a alta prevalência e o impacto da carência de ferro no neurodesenvolvimento. Em uma manhã de consultas, o pediatra atende a duas crianças: Bento, recém-nascido a termo, peso adequado para a idade gestacional, em aleitamento materno exclusivo e sem fatores de risco; e Alice, recém-nascida prematura (idade gestacional de 34 semanas), peso ao nascer de 1.800 g, também em aleitamento materno. As mães das duas crianças fizeram pré-natal adequado e os partos não ocorreram com sangramentos de risco.\n\nConsiderando a recomendação atual da Sociedade Brasileira de Pediatria para a suplementação profilática de ferro, assinale a alternativa correta.",
    "options": [
      "(A) Bento e Alice devem iniciar a suplementação de ferro aos 6 meses de vida, ambos com a mesma dose de 1 mg/kg/dia de ferro elementar, uma vez que a prematuridade não altera a necessidade de ferro profilático no primeiro ano de vida.",
      "(B) Bento, por estar em aleitamento materno exclusivo, não necessita de suplementação profilática de ferro, pois o leite materno fornece quantidade suficiente do mineral para suprir as necessidades até o final do primeiro ano de vida.",
      "(C) Para Bento, a profilaxia deve ser iniciada aos 6 meses de vida, com dose fixa de 10 a 12,5 mg/dia de ferro elementar, administrada em dois ciclos de 3 meses; para Alice, prematura, a suplementação deve ser iniciada mais precocemente (a partir dos 30 dias de vida), com dose ajustada ao peso, maior que a do lactente a termo.",
      "(D) Alice, por ser prematura, deve receber dose profilática de ferro menor que a do lactente a termo, iniciando aos 6 meses de vida, já que o risco de intoxicação por ferro é maior nos prematuros muito jovens, particularmente os que apresentaram intercorrências infecciosas.",
      "(E) Bento deve iniciar a suplementação de ferro aos 90 dias de vida com dose calculada a partir do peso, e Alice deve iniciar aos 30 dias com dose fixa de 10 mg/dia continuadamente durante os dois primeiros anos de vida."
    ],
    "correctAnswer": 2,
    "explanation": "Recomendação da SBP para profilaxia de ferro:\n\n• Lactente a termo, peso adequado, em aleitamento materno: 1 mg/kg/dia de ferro elementar dos 3 aos 24 meses\n• Prematuros e baixo peso: a partir dos 30 dias, com doses maiores conforme o peso (2 mg/kg/dia acima de 1.500 g, até 4 mg/kg/dia em pesos menores) no primeiro ano, e 1 mg/kg/dia no segundo ano\n\nO gabarito considerou correta a alternativa C, que reflete o esquema do Ministério da Saúde (PNSF) para o termo e a regra da SBP para o prematuro: início precoce e dose maior.",
    "commentary": "Ambos aos 6 meses com a mesma dose (A): o prematuro precisa de início precoce e dose maior.\n\nLeite materno basta (B): os estoques de ferro do lactente se esgotam por volta dos 4–6 meses; a profilaxia é recomendada.\n\nPrematura com dose menor aos 6 meses (D): é o contrário — mais cedo e com dose maior.\n\nBento aos 90 dias e Alice com dose fixa por 2 anos (E): a dose do prematuro é calculada pelo peso, não fixa.",
    "reference": "SBP — Consenso sobre anemia ferropriva (2018/2021) / Programa Nacional de Suplementação de Ferro (MS)",
    "tags": [
      "pediatria",
      "anemia ferropriva",
      "suplementação de ferro",
      "prematuridade"
    ],
    "alert": "A SBP recomenda para o lactente a termo 1 mg/kg/dia a partir dos 3 meses; a dose fixa a partir dos 6 meses citada na alternativa correta corresponde ao esquema do Programa Nacional de Suplementação de Ferro. O gabarito oficial é C."
  },
  {
    "id": "hosbos2027-65",
    "topography": "7.2",
    "topic": "Impetigo",
    "module": "Pediatria",
    "text": "As infecções bacterianas da pele são motivo frequente de consulta e, quando não reconhecidas e tratadas precocemente, podem evoluir com complicações locais e sistêmicas.\n\nSobre essas infecções, assinale a alternativa correta.",
    "options": [
      "(A) A erisipela é uma infecção que acomete a derme profunda e o tecido celular subcutâneo, apresentando-se com placa eritematosa mal delimitada, de bordas imprecisas, sendo sua principal complicação a formação de abscesso local, o que torna obrigatório o uso de antibiótico com cobertura para anaeróbios.",
      "(B) O furúnculo é uma infecção profunda do folículo piloso causada por Streptococcus pyogenes, e seu tratamento, sempre que possível, é a drenagem cirúrgica, sem necessidade de antibioticoterapia.",
      "(C) A celulite é uma infecção superficial que se restringe à epiderme e à derme superficial, apresentando-se como área eritematosa bem delimitada e elevada, com bordas nítidas, sendo o tratamento de escolha o antibiótico tópico em todos os casos.",
      "(D) O abscesso cutâneo caracteriza-se por coleção purulenta bem delimitada que, na maioria dos casos, pode ser tratada apenas com antibioticoterapia sistêmica, sendo a drenagem em crianças pequenas contraindicada por risco de disseminação da infecção.",
      "(E) O impetigo não bolhoso caracteriza-se por lesões crostosas amareladas (“melicéricas”) que podem acometer a região perioral e perinasal, sendo causado principalmente pelo Staphylococcus aureus e pelo Streptococcus pyogenes; seu tratamento em casos localizados consiste em antibiótico tópico."
    ],
    "correctAnswer": 4,
    "explanation": "O impetigo não bolhoso é a forma mais comum: vesicopústulas que evoluem para crostas melicéricas (cor de mel), sobretudo ao redor do nariz e da boca, causadas por Staphylococcus aureus e Streptococcus pyogenes.\n\nNas formas localizadas, o tratamento é antibiótico tópico (mupirocina ou ácido fusídico) e higiene. Formas extensas exigem antibiótico sistêmico.",
    "commentary": "Erisipela (A): acomete a derme superficial e os linfáticos, com placa bem delimitada e bordas elevadas, causada por estreptococo; não exige cobertura anaeróbia.\n\nFurúnculo por S. pyogenes (B): o agente é S. aureus; furúnculos flutuantes são drenados.\n\nCelulite superficial e bem delimitada com antibiótico tópico (C): a celulite é profunda (derme e subcutâneo), com bordas mal definidas, e exige antibiótico sistêmico.\n\nAbscesso só com antibiótico e drenagem contraindicada (D): o tratamento principal do abscesso é a drenagem, também em crianças.",
    "reference": "Tratado de Pediatria SBP — Infecções de pele / IDSA — Skin and Soft Tissue Infections (2014)",
    "tags": [
      "pediatria",
      "dermatologia",
      "impetigo",
      "infecções de pele"
    ]
  },
  {
    "id": "hosbos2027-66",
    "topography": "7.2",
    "topic": "Escabiose",
    "module": "Pediatria",
    "text": "Pré-escolar do sexo masculino, com 4 anos, apresenta queixa de coceira intensa há cerca de 2 semanas, que piora à noite e atrapalha o sono. O pai, que o trouxe à consulta, tem “rinite” e “pele seca” e diz que também apresenta prurido na pele há algumas semanas. Ao exame, observam-se pequenas pápulas eritematosas e vesículas em região interdigital das mãos, punhos, axilas e região genital, além de escoriações por coçadura. Não há febre, e a criança está em bom estado geral.\n\nConsiderando a principal hipótese diagnóstica, assinale a alternativa correta sobre o seu tratamento.",
    "options": [
      "(A) O tratamento de escolha dessa condição baseia-se fundamentalmente na restauração da barreira cutânea com uso contínuo de cremes hidratantes, mas pode-se usar corticosteroides tópicos de média potência para alívio dos sintomas atuais.",
      "(B) O tratamento consiste fundamentalmente no uso de antifúngico tópico, com orientação para que o paciente evite coçadura, pois há possibilidade de autoinoculação e disseminação.",
      "(C) A impetiginização secundária sugerida pelo exame clínico indica a utilização de antibiótico tópico, que também deve ser aplicado em todos os contatos sintomáticos.",
      "(D) O tratamento dessa doença deve ser realizado em todos os contatos domiciliares, mesmo nos assintomáticos e na ausência de lesões evidentes.",
      "(E) Trata-se de uma condição autolimitada que não requer tratamento específico, devendo-se apenas orientar medidas de repelência de insetos adequadas à idade."
    ],
    "correctAnswer": 3,
    "explanation": "Prurido intenso, pior à noite, com pápulas e vesículas em interdígitos, punhos, axilas e genitais, e familiar com prurido simultâneo: escabiose (sarna).\n\nO tratamento deve incluir todos os contatos domiciliares e íntimos ao mesmo tempo, mesmo assintomáticos (que podem estar no período de incubação), além da lavagem de roupas de cama e de uso. Usa-se permetrina 5% tópica ou ivermectina oral (acima de 15 kg).",
    "commentary": "Hidratação e corticoide tópico (A): tratamento da dermatite atópica; o padrão de distribuição e o contato apontam escabiose.\n\nAntifúngico tópico (B): não trata ectoparasitose.\n\nAntibiótico tópico para impetiginização (C): não há sinais descritos de infecção secundária, e o antibiótico não trata a escabiose.\n\nAutolimitada com repelente (E): a escabiose não regride sozinha nem se previne com repelente.",
    "reference": "Tratado de Pediatria SBP — Ectoparasitoses / Consenso da SBD",
    "tags": [
      "pediatria",
      "dermatologia",
      "escabiose",
      "contatos"
    ]
  },
  {
    "id": "hosbos2027-67",
    "module": "Pediatria",
    "text": "Na sala de parto, acaba de nascer uma criança a termo, de 3.200 g, respirando e tônus normal, nascido de parto vaginal. Não há circular de cordão. A gestação foi de baixo risco e a mãe não apresenta comorbidades. A equipe de enfermagem pergunta qual deve ser a conduta quanto ao clampeamento do cordão umbilical.\n\nConsiderando as recomendações atuais da Sociedade Brasileira de Pediatria, assinale a alternativa correta.",
    "options": [
      "(A) Deve-se realizar o clampeamento do cordão após 1 minuto ou até a cessação dos batimentos do cordão, conduta que aumenta a transferência placentária de sangue e melhora os estoques de ferro, com redução do risco de anemia.",
      "(B) O clampeamento do cordão nos primeiros 15 a 30 segundos é a conduta de escolha para esse recém-nascido, pois evita a policitemia e a hiperbilirrubinemia.",
      "(C) O clampeamento deve ser realizado imediatamente após a colocação do recém-nascido sobre o abdome materno, em contato pele a pele, e deve ser precedido por ordenha de cerca de 10 a 15 segundos.",
      "(D) O clampeamento do cordão deve ser feito após cerca de 30 segundos do nascimento, concomitantemente ao estímulo dorsal com movimentos circulares, podendo ser realizada também a manobra de ordenha.",
      "(E) O clampeamento do cordão deve ser imediato, pois a criança não está chorando vigorosamente e, portanto, deverá ser conduzida ao berço de reanimação para secagem e procedimentos iniciais da reanimação."
    ],
    "correctAnswer": 0,
    "explanation": "Recém-nascido a termo com boa vitalidade (respirando e com tônus normal): pela SBP, recomenda-se o clampeamento tardio do cordão, após 1 a 3 minutos (ou após cessarem os batimentos), com o bebê em contato pele a pele com a mãe.\n\nO clampeamento tardio aumenta a transfusão placentária e os estoques de ferro, reduzindo a anemia nos primeiros meses, sem aumento clinicamente relevante de policitemia que necessite tratamento.",
    "commentary": "Clampeamento em 15–30 s (B): é clampeamento precoce, sem indicação num RN vigoroso.\n\nImediato com ordenha (C): a ordenha do cordão não é recomendada no RN a termo vigoroso.\n\n30 s com estímulo dorsal e ordenha (D): o RN está respirando; estímulos e ordenha não estão indicados.\n\nImediato porque não chora vigorosamente (E): respirar com tônus normal é boa vitalidade; o choro não é obrigatório.",
    "reference": "Reanimação do recém-nascido ≥ 34 semanas em sala de parto — Diretrizes da SBP, 2022",
    "tags": [
      "neonatologia",
      "clampeamento do cordão",
      "sala de parto"
    ]
  },
  {
    "id": "hosbos2027-68",
    "topography": "1.1",
    "topic": "TCE",
    "module": "Pediatria",
    "text": "Pré-escolar do sexo masculino, com 2 anos e 4 meses, previamente hígida, é levada ao pronto-socorro 1 hora após queda de aproximadamente 70 cm de altura (altura do assento de uma cadeira), batendo a cabeça no chão. A mãe nega perda de consciência, vômitos, convulsão ou sonolência. Ao exame, a criança está ativa, interage normalmente, com Escala de Coma de Glasgow (ECG) 15, sem sinais de fratura de base de crânio, com pequeno hematoma de couro cabeludo na região frontal de cerca de 1 cm e sem déficit neurológico.\n\nConsiderando as orientações do PECARN (Pediatric Emergency Care Applied Research Network) e da Sociedade Brasileira de Pediatria (SBP) para o manejo do TCE leve nessa faixa etária, assinale a alternativa correta.",
    "options": [
      "(A) A presença de qualquer queda de altura superior a 70 cm, independentemente dos demais achados, é critério de alto risco pelo PECARN, tornando obrigatória a realização de TC de crânio em todas as crianças dessa faixa etária.",
      "(B) A criança apresenta critérios de baixo risco para lesão intracraniana clinicamente importante, sendo recomendada a alta, com orientação para os cuidadores observarem clinicamente a criança, sem necessidade de tomografia computadorizada (TC) de crânio.",
      "(C) Por ser uma criança de 2 anos, a presença de hematoma de couro cabeludo é critério de alto risco, indicando TC de crânio imediatamente nesse caso.",
      "(D) A ausência de perda de consciência e de vômitos exclui completamente a possibilidade de lesão intracraniana, sendo orientada a alta após período de 8 horas de observação no pronto-socorro, sem necessidade de exames complementares.",
      "(E) O manejo recomendado é a realização de radiografia simples de crânio como triagem inicial, pois esse exame apresenta alta sensibilidade para detectar lesão intracraniana."
    ],
    "correctAnswer": 1,
    "explanation": "Pelo PECARN para crianças menores de 2 anos, o baixo risco exige: ECG 15, sem alteração de estado mental, sem fratura palpável, sem hematoma de couro cabeludo não frontal, sem perda de consciência ≥ 5 segundos, mecanismo não grave e comportamento normal segundo os pais. Para 2 anos ou mais, usa-se outro conjunto: sem vômitos, sem cefaleia intensa, sem sinais de fratura de base, mecanismo não grave.\n\nAos 2 anos e 4 meses, com queda de cerca de 70 cm, ECG 15, exame normal e hematoma frontal pequeno, a criança é de muito baixo risco (< 0,05% de lesão intracraniana importante). Não há indicação de TC: alta com orientação de observação domiciliar.",
    "commentary": "Queda > 70 cm obrigatória TC (A): queda de altura grave é > 1,5 m para ≥ 2 anos (> 90 cm para < 2 anos); e mesmo assim indicaria observação ou TC, não TC obrigatória.\n\nHematoma de couro cabeludo (C): no PECARN, só o hematoma não frontal em menor de 2 anos é critério; esta criança tem mais de 2 anos e o hematoma é frontal.\n\nExclui completamente lesão (D): nenhum achado exclui completamente; e a observação obrigatória de 8 h não é exigida.\n\nRadiografia de crânio (E): tem baixa sensibilidade para lesão intracraniana e não é recomendada.",
    "reference": "Kuppermann N et al. — PECARN (Lancet 2009) / SBP — TCE leve na infância",
    "tags": [
      "pediatria",
      "traumatismo cranioencefálico",
      "PECARN",
      "emergência pediátrica"
    ]
  },
  {
    "id": "hosbos2027-69",
    "topography": "1.3",
    "topic": "Otite média aguda",
    "module": "Pediatria",
    "text": "O uso racional de antibióticos é um dos pilares da prática pediátrica, e a decisão de prescrever antimicrobianos em infecções de vias aéreas deve considerar a etiologia mais provável, a gravidade e o risco de complicações. Considere os pacientes a seguir e assinale a alternativa em que está indicada a antibioticoterapia sistêmica.",
    "options": [
      "(A) Criança de 3 anos com rinorreia com secreção esverdeada há 4 dias, tosse predominantemente noturna e temperatura de 38 °C, em bom estado geral.",
      "(B) Adolescente de 14 anos com quadro febre há 3 dias, faringoamigdalite exsudativa, linfadenopatia cervical, astenia, hepatomegalia e hemograma com linfocitose atípica.",
      "(C) Criança de 4 anos com otalgia, prurido e dor à manipulação do pavilhão auricular esquerdo, com edema no canal auditivo e secreção no conduto auditivo externo, sem abaulamento da membrana timpânica.",
      "(D) Criança de 18 meses com febre de 39 graus há 2 dias, tosse, diarreia e dor de ouvido, com abaulamento bilateral da membrana timpânica.",
      "(E) Criança de 2 anos e 6 meses com quadro de febre, odinofagia e presença de vesículas em orofaringe posterior, sem lesões em gengivas ou mucosa jugal."
    ],
    "correctAnswer": 3,
    "explanation": "Criança de 18 meses com febre alta, otalgia e abaulamento bilateral da membrana timpânica: otite média aguda bilateral.\n\nEm menores de 2 anos com OMA bilateral, ou em qualquer idade com sinais graves, o antibiótico (amoxicilina) está indicado de imediato, sem a opção de observação vigilante.",
    "commentary": "Rinossinusite com 4 dias (A): o quadro viral comum dura até 10 dias; a secreção esverdeada não indica antibiótico.\n\nMononucleose (B): faringoamigdalite com linfocitose atípica e hepatomegalia é viral; amoxicilina pode até causar exantema.\n\nOtite externa (C): tratamento tópico (antibiótico com ou sem corticoide em gotas), não sistêmico.\n\nHerpangina (E): vesículas na orofaringe posterior, causadas por enterovírus; tratamento sintomático.",
    "reference": "AAP Clinical Practice Guideline: Acute Otitis Media (2013) / SBP — Uso racional de antimicrobianos",
    "tags": [
      "pediatria",
      "otite média aguda",
      "antibioticoterapia",
      "infecções de vias aéreas"
    ]
  },
  {
    "id": "hosbos2027-70",
    "topography": "11",
    "topic": "Calendário vacinal",
    "module": "Pediatria",
    "text": "Assinale a alternativa que apresenta uma situação clínica correta em relação ao calendário nacional atualizado proposto pelo Programa Nacional de Imunizações.",
    "options": [
      "(A) Lactente de 4 meses deve receber a dose zero da vacina de sarampo, durante a vigência de um surto da doença na sua região, mas a dose não será considerada para fins de proteção completa, devendo ainda receber mais duas doses na sua vida.",
      "(B) Lactente de 12 meses pode receber a primeira dose da vacina contra o rotavírus, que não foi administrada no momento mais adequado, pelo fato de a criança ter apresentado uma intussuscepção intestinal.",
      "(C) Escolar de 4 anos deve receber uma quinta dose (segundo reforço) de vacina contra a poliomielite inativada, independentemente de apresentar uma imunodeficiência.",
      "(D) Lactente de 4 meses pode receber a segunda dose da vacina pentavalente celular brasileira, mesmo tendo apresentado quadro hipotônico hiporresponsivo após a primeira dose desse imunizante.",
      "(E) Escolar de 6 anos de idade, imunocompetente, deve receber nova dose do imunizante contra os meningococos ACWY, pois níveis maiores e circulantes de anticorpos garantem maior proteção contra a infecção grave por esses agentes."
    ],
    "correctAnswer": 2,
    "explanation": "Com a substituição completa da VOP pela VIP, o calendário de poliomielite passou a ser: três doses de VIP (2, 4 e 6 meses), 1º reforço aos 15 meses e 2º reforço aos 4 anos — cinco doses no total.\n\nComo a VIP é inativada, pode ser aplicada inclusive em imunodeprimidos e seus contatos, ao contrário da VOP. Assim, aos 4 anos a criança deve receber a quinta dose (2º reforço) de VIP, independentemente de imunodeficiência.",
    "commentary": "Dose zero de sarampo aos 4 meses (A): a dose zero é aplicada dos 6 aos 11 meses em situação de surto.\n\nRotavírus aos 12 meses após intussuscepção (B): há idade máxima para a vacina, e intussuscepção prévia é contraindicação.\n\nPentavalente após episódio hipotônico-hiporresponsivo (D): as doses seguintes devem ser com DTP acelular (CRIE), não com a pentavalente de células inteiras.\n\nACWY aos 6 anos (E): não há dose de rotina nessa idade; a vacina está prevista no reforço de 12 meses e na adolescência.",
    "reference": "Calendário Nacional de Vacinação — PNI/Ministério da Saúde (atualização da VIP, 2024–2025) / Manual dos CRIE",
    "tags": [
      "pediatria",
      "imunização",
      "poliomielite",
      "VIP",
      "calendário vacinal"
    ]
  },
  {
    "id": "hosbos2027-71",
    "topography": "5.2",
    "topic": "Puerpério",
    "module": "Pediatria",
    "text": "Primípara, 26 anos, retorna à consulta no 11º dia pós-parto com queixa de dor intensa e progressiva na mama esquerda, iniciada há 3 dias. Relata que a dor é contínua, em queimação, com piora durante e após as mamadas, e que vem apresentando febre de 39 ºC, calafrios e mal-estar desde o dia anterior. Ao exame, observa-se área de eritema e calor localizada no quadrante súpero-externo da mama esquerda, com enduração e dor à palpação, porém sem flutuação. A pega do bebê foi avaliada e está adequada, sem fissuras mamilares.\n\nConsiderando o diagnóstico mais provável e a conduta clínica mais adequada nesse momento, assinale a alternativa correta.",
    "options": [
      "(A) O quadro é compatível com mastite bacteriana aguda, sendo indicado manter a amamentação na mama afetada, esvaziá-la adequadamente, usar analgésico (preferencialmente ibuprofeno) e iniciar antibioticoterapia com cobertura para Staphylococcus aureus (ex.: cefalexina), mesmo na ausência de flutuação.",
      "(B) O quadro é compatível com ingurgitamento mamário fisiológico, sendo contraindicada a amamentação na mama afetada até a resolução do processo inflamatório, devendo-se realizar ordenha manual e compressas quentes, sem necessidade de antibiótico.",
      "(C) A presença de febre alta, calafrios e enduração localizada indica abscesso mamário já formado, sendo obrigatória a drenagem cirúrgica imediata, com suspensão da amamentação na mama acometida e antibioticoterapia parenteral de amplo espectro.",
      "(D) O quadro é compatível com candidíase mamária, sendo indicado tratar simultaneamente a mãe (antifúngico tópico) e o bebê (nistatina oral), além de suspender temporariamente a amamentação na mama afetada até a negativação do fungo.",
      "(E) A dor em queimação com piora após as mamadas e o eritema localizado sugerem fenômeno de Raynaud do mamilo, sendo indicado aquecimento local, compressas mornas e, se necessário, nifedipino, sem necessidade de antibioticoterapia."
    ],
    "correctAnswer": 0,
    "explanation": "Puérpera no 11º dia com dor mamária progressiva, área localizada de eritema, calor e enduração, febre de 39 °C e calafrios, sem flutuação: mastite lactacional aguda (provável infecção bacteriana), sem abscesso.\n\nA conduta é manter a amamentação (inclusive na mama afetada) e garantir o esvaziamento eficiente, com analgesia e anti-inflamatório (ibuprofeno). Com sintomas sistêmicos e mais de 24 horas sem melhora, associa-se antibiótico com cobertura para S. aureus (cefalexina ou dicloxacilina) por 10 a 14 dias.",
    "commentary": "Ingurgitamento com suspensão da amamentação (B): o ingurgitamento é bilateral e difuso, sem febre alta; e suspender a amamentação piora a estase.\n\nAbscesso com drenagem obrigatória (C): não há flutuação; abscesso se confirma por ultrassonografia, e mesmo nele a amamentação pode continuar.\n\nCandidíase (D): dor em agulhada sem febre ou sinais inflamatórios localizados; não exige suspender a amamentação.\n\nRaynaud do mamilo (E): palidez e dor mamilar ao frio, sem febre nem enduração.",
    "reference": "Academy of Breastfeeding Medicine — Clinical Protocol #36: The Mastitis Spectrum (2022) / Ministério da Saúde — Saúde da criança: aleitamento materno",
    "tags": [
      "aleitamento materno",
      "mastite",
      "puerpério"
    ]
  },
  {
    "id": "hosbos2027-72",
    "topography": "1.1",
    "topic": "Epilepsia",
    "module": "Pediatria",
    "text": "Lactente de 5 meses, sexo masculino, previamente hígido, é trazido pela mãe com queixa de “espasmos” desde os 4 meses. A mãe descreve que, principalmente ao acordar, o bebê apresenta episódios breves e repetitivos de flexão súbita de tronco, cabeça e membros (“como se fosse abraçar o próprio corpo”), em salvas, durando segundos, seguidos de choro. Nos últimos dias, a mãe nota que o bebê deixou de seguir objetos com o olhar e parece não a reconhecer como antes. Ao exame neurológico, não há sinais focais, e o perímetro cefálico está em percentil 50.\n\nConsiderando a principal hipótese diagnóstica, assinale a alternativa correta.",
    "options": [
      "(A) O quadro é compatível com crises febris subclínicas, uma vez que os episódios são breves, em salvas e ocorrem ao despertar, não havendo necessidade de investigação neurofisiológica, pois a condição é benigna e autolimitada.",
      "(B) O quadro é compatível com síndrome de West, sendo o diagnóstico clínico confirmado pelo EEG.",
      "(C) A descrição materna de movimentos breves e repetitivos ao acordar é compatível com mioclonias fisiológicas do sono, um fenômeno benigno do lactente que não requer investigação.",
      "(D) O quadro é compatível com espasmos do choro desencadeado por estímulo emocional, sendo o tratamento de escolha a orientação familiar e a suplementação de ferro, sem necessidade de EEG.",
      "(E) A regressão do desenvolvimento associada a movimentos em salvas indica encefalopatia hipóxico-isquêmica sequelar, sendo o diagnóstico confirmado por neuroimagem."
    ],
    "correctAnswer": 1,
    "explanation": "Lactente de 5 meses com espasmos em flexão em salvas, sobretudo ao despertar, e regressão do desenvolvimento (perda do contato visual): síndrome de West (espasmos epilépticos infantis).\n\nA tríade clássica é espasmos, regressão do desenvolvimento e hipsarritmia no EEG. O EEG é obrigatório e urgente para confirmar. O tratamento (ACTH, prednisolona em alta dose ou vigabatrina, especialmente na esclerose tuberosa) deve começar logo.",
    "commentary": "Crises febris subclínicas (A): não existe essa entidade; espasmos com regressão exigem EEG urgente.\n\nMioclonias do sono (C): ocorrem durante o sono, sem regressão e sem salvas ao despertar.\n\nPerda de fôlego (D): desencadeada por choro ou frustração, com cianose ou palidez; não há regressão.\n\nEncefalopatia hipóxico-isquêmica (E): ela pode ser uma causa da síndrome de West, mas não há história perinatal; e a confirmação diagnóstica é pelo EEG.",
    "reference": "ILAE — Infantile Epileptic Spasms Syndrome (2022) / Tratado de Pediatria SBP — Epilepsias da infância",
    "tags": [
      "pediatria",
      "neurologia infantil",
      "síndrome de West",
      "espasmos infantis"
    ]
  },
  {
    "id": "hosbos2027-73",
    "topography": "4.1",
    "topic": "Síndrome nefrótica",
    "module": "Pediatria",
    "text": "Pré-escolar do sexo masculino, com 3 anos, previamente hígido, é levado ao pronto-socorro com edema periorbitário matinal há 5 dias, que evoluiu para edema de membros inferiores e aumento do volume abdominal. A mãe nega hematúria, disúria, febre ou uso de medicamentos. Ao exame: peso 16 kg; PA: 90 x 60 mmHg; edema depressível de membros inferiores e abdome distendido com macicez móvel. Exames: urina tipo I com proteinúria +++ (densidade 1.020, sem hematúria); proteinúria de 24h de 80 mg/kg/dia; albumina sérica: 1,8 g/dL; colesterol total: 320 mg/dL; ureia e creatinina normais; complemento (C3 e C4) normal.\n\nConsiderando a principal hipótese diagnóstica, assinale a alternativa correta.",
    "options": [
      "(A) O diagnóstico exige biópsia renal obrigatória na apresentação inicial para confirmação de lesões mínimas, e o tratamento de escolha é a ciclosporina como primeira linha, uma vez que a corticoterapia é contraindicada nessa idade.",
      "(B) O diagnóstico é essencialmente clínico-laboratorial, não sendo necessária a biópsia renal na apresentação inicial; o tratamento de escolha é a prednisona oral por 4 a 6 semanas, com expectativa de resposta completa (remissão) na maioria dos casos.",
      "(C) A presença de hipoalbuminemia grave e hipercolesterolemia indica etiologia secundária, sendo mandatória a pesquisa de autoanticorpos e o início imediato de imunossupressor, sem corticoterapia.",
      "(D) O quadro é compatível com glomerulonefrite aguda pós-estreptocócica, caracterizada por proteinúria nefrótica, hipoalbuminemia e complemento normal, sendo o tratamento de escolha a penicilina e a restrição hídrica rigorosa, sem uso de corticoide.",
      "(E) A conduta inicial correta é a restrição hídrica e de sódio associada ao uso de diurético de alça em altas doses desde o primeiro dia, além de anti-hipertensivo de rotina, sendo a corticoterapia reservada apenas para os casos que não apresentarem melhora do edema em 48 horas."
    ],
    "correctAnswer": 1,
    "explanation": "Criança de 3 anos com edema, proteinúria nefrótica (≥ 40 mg/m²/h ou ≥ 50 mg/kg/dia), hipoalbuminemia < 2,5 g/dL e hipercolesterolemia, sem hematúria, sem hipertensão, com função renal e complemento normais: síndrome nefrótica idiopática, provavelmente doença por lesões mínimas.\n\nNessa faixa (1 a 10 anos) e com apresentação típica, a biópsia não é necessária no início. O tratamento é prednisona oral (60 mg/m²/dia ou 2 mg/kg/dia) por 4 a 6 semanas, seguida de dias alternados. A maioria (cerca de 80–90%) entra em remissão (corticossensível).",
    "commentary": "Biópsia obrigatória e ciclosporina (A): a biópsia fica para casos atípicos ou corticorresistentes, e o corticoide é a primeira linha.\n\nHipoalbuminemia indica causa secundária (C): hipoalbuminemia e hipercolesterolemia fazem parte da definição da síndrome nefrótica.\n\nGlomerulonefrite pós-estreptocócica (D): é nefrítica (hematúria, hipertensão, C3 baixo), não nefrótica.\n\nDiurético em alta dose e corticoide só sem melhora (E): diurético pode agravar a hipovolemia; o corticoide é o tratamento inicial.",
    "reference": "KDIGO 2021 Glomerular Diseases / SBP — Síndrome nefrótica idiopática",
    "tags": [
      "pediatria",
      "nefrologia pediátrica",
      "síndrome nefrótica",
      "corticoterapia"
    ]
  },
  {
    "id": "hosbos2027-74",
    "topography": "11",
    "topic": "Puericultura",
    "module": "Pediatria",
    "text": "Lactente do sexo masculino, com 35 dias de vida, nascido a termo e com 3.400 g, apresenta resultado da triagem neonatal biológica com dosagem de tripsina imunorreativa (TIR) elevada na primeira amostra, coletada com 49 horas de vida. A criança está assintomática, em aleitamento materno exclusivo e com bom ganho ponderal.\n\nCom relação à condução desse caso de acordo com as recomendações do Ministério da Saúde, assinale a alternativa correta.",
    "options": [
      "(A) O valor da TIR não deve ser considerado, pois foi colhido fora da janela de tempo preconizada para coleta da triagem neonatal biológica e, portanto, esse exame deve ser repetido.",
      "(B) O valor da TIR dessa criança deve ser comparado a outro teste de triagem (retestagem), antes de a criança ser submetida a teste confirmatório.",
      "(C) A criança deve ser encaminhada para a realização do teste do suor, o exame padrão-ouro para confirmação do diagnóstico provável.",
      "(D) A criança deve ser encaminhada inicialmente para a realização de exame genético para identificação da mutação e introdução de tratamento específico, independentemente de ser assintomática.",
      "(E) O tratamento específico deve ser introduzido o mais rapidamente possível, pelo risco de dano neurológico que a postergação do diagnóstico pode acarretar, independentemente de qualquer outro exame."
    ],
    "correctAnswer": 2,
    "explanation": "Na triagem neonatal da fibrose cística, uma TIR elevada na primeira amostra (entre o 3º e o 5º dia) exige uma segunda TIR até 30 dias de vida. Se esta também estiver alterada, encaminha-se para o teste do suor.\n\nCom 35 dias, já passou o prazo em que a segunda TIR é válida (ela perde confiabilidade após cerca de 30 dias). Por isso a criança deve ir diretamente para o teste do suor, padrão-ouro para confirmar a fibrose cística.",
    "commentary": "Coleta fora da janela (A): a coleta com 49 horas (dentro de 48 h a 5 dias) foi válida.\n\nRetestagem com nova TIR (B): após 30 dias, a TIR deixa de ser confiável.\n\nExame genético primeiro (D): o confirmatório inicial é o teste do suor; a genética complementa.\n\nTratar sem confirmar e risco neurológico (E): fibrose cística não exige tratamento antes da confirmação, e o risco principal é pulmonar e nutricional, não neurológico.",
    "reference": "Manual Técnico de Triagem Neonatal Biológica — Ministério da Saúde, 2016",
    "tags": [
      "neonatologia",
      "triagem neonatal",
      "fibrose cística",
      "teste do suor"
    ]
  },
  {
    "id": "hosbos2027-75",
    "topography": "11",
    "topic": "Puericultura",
    "module": "Pediatria",
    "text": "Mãe de uma criança de 2 anos, em consulta de puericultura, pergunta ao médico como deve realizar a escovação dos dentes da filha e qual creme dental deve utilizar. Ela relata que a criança aceita bem a escovação, mas que costuma engolir parte da espuma do creme dental.\n\nConsiderando as recomendações atuais de saúde bucal para a primeira infância, assinale a alternativa correta.",
    "options": [
      "(A) Deve-se utilizar creme dental com flúor, na quantidade de menos de um grão de arroz (para crianças menores de 3 anos), pois a quantidade de creme dental é mais importante que a concentração de flúor para equilibrar o efeito anticariogênico e o risco de fluorose.",
      "(B) Deve-se utilizar creme dental sem flúor até os 6 anos de idade, pois o flúor em crianças pequenas causa fluorose dentária, sendo o uso de creme dental com flúor contraindicado até os 6 anos de idade.",
      "(C) A escovação deve ser realizada apenas uma vez ao dia, com creme dental com flúor, pois a escovação mais frequente aumenta o risco de ingestão e intoxicação.",
      "(D) Deve-se utilizar creme dental com flúor na concentração máxima disponível (acima de 1.500 ppm), na quantidade de um grão de arroz para todas as idades até 6 anos, pois quanto maior a concentração de flúor, maior a prevenção de cárie, sem qualquer risco adicional de fluorose.",
      "(E) A escovação deve ser iniciada apenas após a erupção de todos os dentes decíduos (por volta dos 3 anos), sendo contraindicada antes dessa idade, e o creme dental deve ser utilizado somente a partir dos 6 anos, com orientação de não engolir."
    ],
    "correctAnswer": 0,
    "explanation": "A recomendação atual (SBP e Ministério da Saúde/Brasil Sorridente) é escovar com creme dental fluoretado de concentração convencional (1.000 a 1.500 ppm de flúor) desde o primeiro dente.\n\nO controle do risco de fluorose é feito pela quantidade: um grão de arroz cru (ou menos) para menores de 3 anos e o tamanho de um grão de ervilha dos 3 aos 6 anos, sempre com supervisão de um adulto e pelo menos duas vezes ao dia.",
    "commentary": "Sem flúor até 6 anos (B): creme sem flúor não previne cárie; a fluorose se evita controlando a quantidade.\n\nUma vez ao dia (C): recomenda-se pelo menos duas vezes ao dia.\n\nConcentração máxima acima de 1.500 ppm (D): cremes com alta concentração não são indicados para crianças pequenas.\n\nEscovar só após todos os dentes (E): a higiene começa com a erupção do primeiro dente.",
    "reference": "SBP — Saúde bucal na primeira infância / Ministério da Saúde — Guia de recomendações para o uso de fluoretos",
    "tags": [
      "pediatria",
      "puericultura",
      "saúde bucal",
      "flúor"
    ]
  },
  {
    "id": "hosbos2027-76",
    "topography": "11",
    "topic": "Desenvolvimento neuropsicomotor",
    "module": "Pediatria",
    "text": "Lactente de 23 meses, do sexo masculino, é levado à consulta de puericultura. A mãe relata que acha que seu filho está com comportamento “estranho”.\n\nConsiderando a identificação de características do transtorno do espectro autista (TEA) nessa faixa etária, assinale a alternativa que descreve uma manifestação clássica do TEA e que faz parte dos critérios diagnósticos dessa condição.",
    "options": [
      "(A) A criança apresenta crises de birra intensas e desproporcionais quando contrariada, com choro, gritos e atitudes desafiadoras, que melhoram rapidamente quando a mãe cede ao pedido.",
      "(B) A criança apresenta medo intenso e persistente de separação da mãe, com choro e busca de contato físico sempre que ela se afasta, mesmo em ambientes conhecidos.",
      "(C) A criança apresenta episódios de parada respiratória com cianose desencadeados por choro intenso ou frustração, seguidos de recuperação rápida e espontânea.",
      "(D) A criança apresenta regressão de habilidades sociais e de comunicação previamente adquiridas associada à ausência de gestos de apontar e de atenção compartilhada, preferindo brincar sozinha com objetos giratórios.",
      "(E) A criança apresenta movimentos rítmicos e repetitivos do tronco e da cabeça apenas no momento de adormecer ou ao acordar, que cessam espontaneamente quando ela desperta completamente e interage com o ambiente."
    ],
    "correctAnswer": 3,
    "explanation": "No DSM-5-TR, os critérios do TEA incluem déficits persistentes na comunicação e interação social (reciprocidade, comunicação não verbal como apontar e atenção compartilhada) e padrões restritos e repetitivos de comportamento e interesses (por exemplo, fixação por objetos giratórios).\n\nA regressão de habilidades sociais e de linguagem entre 15 e 24 meses ocorre em parte das crianças e é sinal de alerta importante. A alternativa D reúne manifestações clássicas.",
    "commentary": "Birras que cedem quando atendidas (A): comportamento comum da idade, sem relação específica com TEA.\n\nAnsiedade de separação (B): busca de contato com a mãe indica vínculo social preservado.\n\nPerda de fôlego (C): fenômeno benigno, não critério de TEA.\n\nMovimentos rítmicos só ao adormecer (E): estereotipias do sono benignas (rhythmic movement disorder), não critério de TEA.",
    "reference": "DSM-5-TR / SBP — Manual de Orientação: Transtorno do Espectro do Autismo (2019)",
    "tags": [
      "pediatria",
      "transtorno do espectro autista",
      "desenvolvimento infantil"
    ]
  },
  {
    "id": "hosbos2027-77",
    "module": "Pediatria",
    "text": "Considere o caso de um recém-nascido com 3 semanas de vida, nascido a termo (39 semanas) e com peso de 3.300 g, de parto vaginal sem intercorrências, Apgar 9/10.\n\nAssinale a alternativa que apresenta corretamente a adequada correlação entre um achado identificado no exame físico desse bebê e a conduta apropriada.",
    "options": [
      "(A) Descamação fina localizada nos tornozelos – uso de sabonetes esfoliantes.",
      "(B) Pápula eritematosa friável, úmida de base ampla, assintomática, no centro do umbigo – antibiótico tópico.",
      "(C) Micropápulas esbranquiçadas em gengiva – suspensão da amamentação e avaliação odontológica.",
      "(D) Micropápulas peroladas puntiformes no nariz, sem base eritematosa – uso de corticosteroides tópicos.",
      "(E) Mancha eritematosa com área localizada de teleangiectasia, circundada por um halo, de cerca de 4 mm, em região frontotemporal, compatível com lesão vascular – encaminhamento para especialista."
    ],
    "correctAnswer": 4,
    "explanation": "Mancha eritematosa com telangiectasias e halo pálido, surgida nas primeiras semanas de vida, é a lesão precursora típica do hemangioma infantil, que tende a crescer rapidamente nos primeiros meses.\n\nNa região frontotemporal (face), há risco de complicação funcional ou estética e de associação com síndromes (PHACE, em lesões segmentares). O encaminhamento precoce ao especialista é necessário para avaliar o início de propranolol na fase proliferativa.",
    "commentary": "Descamação fisiológica com esfoliante (A): a descamação é normal e não exige produto esfoliante.\n\nGranuloma umbilical com antibiótico tópico (B): o tratamento é cauterização com nitrato de prata, não antibiótico.\n\nCistos gengivais com suspensão da amamentação (C): pérolas de Epstein ou nódulos de Bohn são benignos e somem sozinhos; não se suspende a amamentação.\n\nMília com corticoide tópico (D): mília regride espontaneamente e não precisa de tratamento.",
    "reference": "AAP Clinical Practice Guideline for Infantile Hemangiomas (2019) / Tratado de Pediatria SBP — Dermatologia neonatal",
    "tags": [
      "neonatologia",
      "dermatologia pediátrica",
      "hemangioma infantil"
    ]
  },
  {
    "id": "hosbos2027-78",
    "topography": "11",
    "topic": "Puericultura",
    "module": "Pediatria",
    "text": "Adolescente do sexo masculino, com 14 anos e 3 meses, é levado à consulta pela mãe, preocupada porque “o corpo do filho não está se desenvolvendo”. A mãe relata que ele sempre foi o mais baixo da turma e que o pai “também se desenvolveu tarde”. Ao exame: peso e estatura no percentil 10, com velocidade de crescimento compatível com sua idade óssea; volume testicular de 3 mL bilateralmente (estágio G1 de Tanner), sem pelos pubianos (P1); idade óssea (radiografia de carpo) de 12 anos. O adolescente nega queixas, refere olfato normal e não apresenta outras alterações ao exame físico.\n\nCom relação a esse quadro clínico, assinale a alternativa correta.",
    "options": [
      "(A) O quadro é mais compatível com retardo constitucional do crescimento e da puberdade (RCCP), a causa mais comum de atraso puberal no sexo masculino, caracterizado por idade óssea atrasada e história familiar positiva de puberdade tardia; a conduta inicial é tranquilizar a família e acompanhar, pois a puberdade pode ocorrer espontaneamente, ainda que tardiamente.",
      "(B) A ausência de aumento do volume testicular aos 14 anos e 3 meses, associada à idade óssea atrasada, é indicativa de hipogonadismo hipogonadotrófico permanente, sendo obrigatório o início imediato de reposição com testosterona, independentemente da história familiar e da velocidade de crescimento.",
      "(C) O achado de idade óssea atrasada em relação à idade cronológica afasta a possibilidade de retardo constitucional, sendo o diagnóstico mais provável o de hipogonadismo hipergonadotrófico (falência testicular primária), que exige dosagem de gonadotrofinas para confirmação e encaminhamento ao especialista.",
      "(D) A presença de olfato normal e a ausência de outras alterações excluem o diagnóstico de síndrome de Kallmann, mas confirmam que o atraso puberal é de causa genética irreversível, sendo indicada a reposição hormonal imediata para garantir o crescimento final.",
      "(E) O quadro descrito é compatível com hipogonadismo hipogonadotrófico por síndrome de Kallmann, pois a defasagem da idade óssea e o volume testicular de 3 mL aos 14 anos são patognomônicos dessa síndrome, sendo indicada a reposição de testosterona e a investigação do olfato com exames subsidiários, pela não especificidade da simples pergunta “se cheira bem”."
    ],
    "correctAnswer": 0,
    "explanation": "Menino com 14 anos e 3 meses, sem sinais puberais (testículos de 3 mL, G1P1), baixa estatura com velocidade de crescimento adequada para a idade óssea, idade óssea atrasada (12 anos) e pai com puberdade tardia: retardo constitucional do crescimento e da puberdade (RCCP).\n\nÉ a causa mais comum de atraso puberal em meninos (diagnóstico de exclusão). A conduta inicial é tranquilizar e acompanhar a velocidade de crescimento e o desenvolvimento puberal. Ciclo curto de testosterona em baixa dose pode ser considerado se houver impacto psicossocial importante.",
    "commentary": "Hipogonadismo hipogonadotrófico permanente (B): a idade óssea atrasada e a história familiar favorecem o RCCP; não há indicação imediata de testosterona.\n\nHipogonadismo hipergonadotrófico (C): a idade óssea atrasada é típica do RCCP, não o afasta.\n\nCausa genética irreversível (D): nada no quadro sugere isso.\n\nKallmann patognomônico (E): os achados não são patognomônicos; Kallmann cursa com anosmia ou hiposmia.",
    "reference": "Tratado de Pediatria SBP — Puberdade atrasada / Palmert MR, Dunkel L — Delayed Puberty (NEJM 2012)",
    "tags": [
      "pediatria",
      "endocrinologia pediátrica",
      "atraso puberal",
      "retardo constitucional"
    ]
  },
  {
    "id": "hosbos2027-79",
    "topography": "11",
    "topic": "Bronquiolite",
    "module": "Pediatria",
    "text": "Lactente de 4 meses, previamente hígido, é admitido na emergência com quadro de coriza há 3 dias, tosse, sibilância e dificuldade respiratória progressiva. Ao exame: FR: 62 irpm; FC: 158 bpm; SatO₂ 90% em ar ambiente; tiragem subcostal e intercostal e sibilância difusa à ausculta. Após oxigenoterapia por cateter nasal de baixo fluxo (2 L/min), mantém SatO₂ 93%, porém com persistência de desconforto respiratório. O médico considera iniciar cateter nasal de alto fluxo (CNAF).\n\nSobre o uso desse dispositivo nessa doença, assinale a alternativa correta.",
    "options": [
      "(A) O CNAF fornece mistura aquecida e umidificada de ar e oxigênio em fluxos elevados, gerando pressão positiva indireta nas vias aéreas, lavagem do espaço morto nasofaríngeo e redução do trabalho respiratório, sendo uma opção para evitar ou adiar a intubação em casos de insuficiência respiratória leve a moderada.",
      "(B) O CNAF é um dispositivo de ventilação não invasiva que entrega pressão positiva contínua fixa e mensurável nas vias aéreas, equivalente à CPAP, sendo capaz de fornecer um valor exato e previsível de pressão expiratória final (PEEP) em todos os pacientes, independentemente do fluxo e da abertura bucal.",
      "(C) O CNAF está contraindicado em lactentes menores de 6 meses com a doença apresentada por esse lactente, pois nessa faixa etária o dispositivo aumenta o risco de barotrauma e de síndrome de escape de ar, sendo preferível iniciar diretamente a ventilação mecânica invasiva.",
      "(D) O CNAF deve ser utilizado apenas como suporte de oxigênio de baixo fluxo, com fluxos inferiores a 1 L/min, pois fluxos elevados causam, obrigatoriamente, distensão gástrica grave e vômitos, sendo proibida a alimentação durante o uso do dispositivo.",
      "(E) O CNAF não altera o trabalho respiratório nem o desconforto do lactente, funcionando apenas como fonte de oxigênio, sendo sua principal limitação a impossibilidade de fornecer fluxos acima de 2 L/min em crianças pequenas."
    ],
    "correctAnswer": 0,
    "explanation": "Lactente de 4 meses com bronquiolite viral aguda e desconforto respiratório persistente mesmo com O₂ de baixo fluxo.\n\nO cateter nasal de alto fluxo fornece gás aquecido e umidificado em fluxo elevado (cerca de 1–2 L/kg/min). Ele gera pressão positiva modesta e variável, lava o espaço morto da nasofaringe e reduz o trabalho respiratório. É opção para insuficiência respiratória leve a moderada, com objetivo de evitar ou adiar a intubação.",
    "commentary": "Equivale a CPAP com PEEP exata (B): a pressão gerada varia com o fluxo, o tamanho da cânula e a abertura da boca; não é mensurável nem fixa.\n\nContraindicado abaixo de 6 meses (C): é amplamente usado em lactentes jovens com bronquiolite.\n\nFluxo < 1 L/min (D): isso seria baixo fluxo; o CNAF usa fluxos elevados, e a alimentação pode ser mantida conforme a tolerância.\n\nNão altera o trabalho respiratório (E): o CNAF reduz o trabalho respiratório e fornece fluxos bem acima de 2 L/min.",
    "reference": "SBP — Bronquiolite viral aguda (2024) / Franklin D et al. — PARIS trial (NEJM 2018)",
    "tags": [
      "pediatria",
      "bronquiolite",
      "cateter nasal de alto fluxo",
      "insuficiência respiratória"
    ]
  },
  {
    "id": "hosbos2027-80",
    "topography": "1.3",
    "topic": "Surdez",
    "module": "Pediatria",
    "text": "Em uma maternidade, são avaliados dois recém-nascidos: Rafael, nascido a termo, peso de 3.200 g, sem indicadores de risco para deficiência auditiva, que realizou a triagem auditiva com 30 horas de vida, com resultado “falha” em ambas as orelhas; e Beatriz, nascida com 28 semanas de gestação, peso de 1.400 g, permanecendo em UTI neonatal há 8 dias, em ventilação mecânica.\n\nConsiderando as recomendações atuais de triagem auditiva neonatal (Ministério da Saúde), assinale a alternativa correta.",
    "options": [
      "(A) Beatriz apresenta maior risco de perda auditiva por motivos cocleares, sendo que o exame de emissões otoacústicas deve ser o primeiro a ser realizado na triagem.",
      "(B) Rafael realizou o exame de triagem auditiva fora do período estabelecido e, portanto, o resultado “falha” não deve ser considerado, e a triagem deve ser repetida.",
      "(C) Beatriz apresenta indicadores de risco para perda auditiva do tipo 2 e deve ser submetida ao exame de potencial evocado de tronco encefálico automatizado.",
      "(D) O exame que Rafael deve ter realizado na triagem foi o exame de potencial evocado de tronco encefálico automatizado; a “falha” apresentada deve ser confirmada com a repetição do exame.",
      "(E) A instituição da triagem auditiva neonatal com exames específicos dispensa a avaliação clínica do desenvolvimento da linguagem e localização sonora que eram muito inespecíficos para a detecção do déficit auditivo."
    ],
    "correctAnswer": 2,
    "explanation": "Pela triagem auditiva neonatal do Ministério da Saúde:\n\n• RN sem indicador de risco: emissões otoacústicas evocadas (EOAE) entre 24–48 h e até 1 mês; se falhar, reteste com EOAE e, persistindo, PEATE e avaliação diagnóstica\n• RN com indicador de risco (UTI neonatal > 5 dias, ventilação mecânica, prematuridade, ototóxicos etc.): PEATE automático, pelo risco de perda retrococlear (neuropatia auditiva), que as EOAE não detectam\n\nBeatriz (28 semanas, UTI e ventilação mecânica) tem indicador de risco e deve fazer o PEATE automático.",
    "commentary": "Emissões otoacústicas primeiro para Beatriz (A): no RN de risco o primeiro exame é o PEATE-A, porque o risco é também retrococlear.\n\nExame de Rafael fora do período (B): 30 horas está dentro da janela adequada.\n\nRafael devia fazer PEATE-A (D): sem risco, o exame indicado é a EOAE.\n\nDispensa avaliação clínica da audição (E): o acompanhamento do desenvolvimento da linguagem e da audição continua necessário.",
    "reference": "Diretrizes de Atenção da Triagem Auditiva Neonatal — Ministério da Saúde, 2012",
    "tags": [
      "neonatologia",
      "triagem auditiva neonatal",
      "PEATE",
      "emissões otoacústicas"
    ]
  },
  {
    "id": "hosbos2027-81",
    "topography": "15",
    "topic": "Saúde do trabalhador",
    "module": "Saúde Coletiva",
    "text": "Um entregador de 29 anos de idade, que trabalha para uma empresa, fazendo entregas com mediação por aplicativo, sofre um acidente de trânsito quando se dirigia ao seu destino, com sua moto, transportando alguns sanduíches para o cliente. Sofre uma fratura de tíbia direita. Ele é socorrido em um hospital e depois de intervenção cirúrgica recebe alta hospitalar e orientações para permanecer em casa se recuperando. A Equipe de Saúde da Família (ESF) mantém acompanhamento e constata que no hospital não foi feita a notificação no Sistema de Informação de Agravos de Notificação (SINAN).\n\nAssinale a alternativa correta quanto a essa questão.",
    "options": [
      "(A) O paciente deve ser reencaminhado ao hospital para que seja feita a notificação como acidente de trânsito, pois somente o serviço que realizou o primeiro atendimento deve fazê-lo.",
      "(B) Trata-se de um acidente de trabalho e, como qualquer serviço de saúde pode notificar o caso, a Unidade Básica de Saúde (UBS) pode fazê-lo.",
      "(C) A ESF deve alertar o ambulatório de ortopedia sobre a necessidade de notificação como acidente de trajeto pelo serviço especializado em uma das consultas de acompanhamento.",
      "(D) Passado o prazo de 24 horas sem que a notificação do acidente de trabalho tenha sido feita, somente com ordem judicial é possível corrigir essa falha.",
      "(E) O caso é de notificação no SINAN somente se o trabalhador for registrado pela empresa formalmente."
    ],
    "correctAnswer": 1,
    "explanation": "O acidente ocorreu durante a jornada de trabalho, a serviço da empresa e mediado por aplicativo: é acidente de trabalho (típico). Se fosse no deslocamento entre casa e trabalho, seria de trajeto, também equiparado a acidente de trabalho para a vigilância.\n\nNo SINAN, todo acidente de trabalho (com mutilação, grave ou fatal, e em crianças e adolescentes) é de notificação compulsória, independentemente do vínculo formal. A notificação pode ser feita por qualquer serviço que identifique o caso, inclusive a UBS.",
    "commentary": "Reencaminhar ao hospital (A): não existe exclusividade do primeiro serviço; o deslocamento seria desnecessário.\n\nAmbulatório de ortopedia notificar (C): qualquer serviço pode notificar, e a ESF que identificou a falha deve fazê-lo.\n\nSó com ordem judicial após 24 h (D): a notificação pode ser feita a qualquer momento; o prazo não impede notificação tardia.\n\nSó com registro formal (E): a notificação independe do vínculo empregatício (formal, informal, autônomo ou por aplicativo).",
    "reference": "Portaria de Consolidação nº 4/2017 e Lista Nacional de Notificação Compulsória / Política Nacional de Saúde do Trabalhador e da Trabalhadora",
    "tags": [
      "saúde coletiva",
      "saúde do trabalhador",
      "acidente de trabalho",
      "notificação compulsória",
      "SINAN"
    ]
  },
  {
    "id": "hosbos2027-82",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "No Brasil, existe uma Política Nacional de Segurança Alimentar e Nutricional - PNSAN, com o objetivo geral de promover a segurança alimentar e nutricional.\n\nAssinale uma ação que faça parte dos objetivos da PNSAN.",
    "options": [
      "(A) Mobilizar instituições religiosas de todos os matizes para que anualmente realizem atividades beneficentes para arrecadação de alimentos não perecíveis e distribuição gratuita nas comunidades carentes.",
      "(B) Incentivar as escolas de nutrição do país para que os estudantes promovam cursos sobre alimentos e seu valor nutricional para a população pelo menos uma vez por ano, de modo que o conhecimento sobre o assunto seja compartilhado.",
      "(C) Padronizar para todas as escolas do país um cardápio mínimo que contenha todos os nutrientes necessários para o desenvolvimento adequado das crianças e jovens, estudantes do ensino fundamental.",
      "(D) Realizar campanhas de esclarecimento sobre os benefícios dos alimentos in natura, de base agroecológica em escolas e comunidades carentes, onde vivem os maiores consumidores de alimentos ultraprocessados do país.",
      "(E) Promover sistemas sustentáveis de base agroecológica, que respeitem a biodiversidade e fortaleçam a agricultura familiar, os povos indígenas e as comunidades tradicionais e que assegurem o acesso à alimentação adequada e saudável, respeitada a diversidade da cultura alimentar nacional."
    ],
    "correctAnswer": 4,
    "explanation": "A Política Nacional de Segurança Alimentar e Nutricional (Decreto nº 7.272/2010) tem entre suas diretrizes promover sistemas sustentáveis de base agroecológica de produção e distribuição de alimentos, fortalecendo a agricultura familiar, os povos indígenas e as comunidades tradicionais.\n\nTambém busca assegurar o acesso à alimentação adequada e saudável respeitando a diversidade cultural. A abordagem é estrutural e intersetorial, ligada ao Direito Humano à Alimentação Adequada, e não assistencialista.",
    "commentary": "Arrecadação por instituições religiosas (A): ação filantrópica pontual, não diretriz da PNSAN.\n\nCursos anuais de escolas de nutrição (B): não faz parte dos objetivos da política.\n\nCardápio mínimo padronizado (C): o PNAE valoriza cardápios regionais e respeito à cultura alimentar, não padronização nacional.\n\nCampanhas em comunidades carentes como maiores consumidoras de ultraprocessados (D): a premissa é incorreta e a ação é restrita; não é diretriz da PNSAN.",
    "reference": "Decreto nº 7.272/2010 (PNSAN) / Lei nº 11.346/2006 (LOSAN)",
    "tags": [
      "saúde coletiva",
      "segurança alimentar e nutricional",
      "políticas públicas",
      "agricultura familiar"
    ]
  },
  {
    "id": "hosbos2027-83",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "O Subsistema de Atenção à Saúde Indígena, componente do Sistema Único de Saúde – SUS, foi criado em 1999.\n\nAssinale a alternativa correta sobre esse tema.",
    "options": [
      "(A) Uma das características desse Subsistema é ter uma sala específica para o atendimento dessa população nas Unidades Básicas de Saúde (UBS) das regiões onde há mais indígenas.",
      "(B) O Subsistema de Atenção à Saúde Indígena tem como base os Distritos Sanitários Especiais Indígenas.",
      "(C) As populações indígenas devem ter acesso garantido ao SUS, pelo menos no que concerne a ações da atenção primária.",
      "(D) A União deve manter dados do Subsistema de Atenção à Saúde Indígena separados dos sistemas de informação da rede do SUS.",
      "(E) As populações indígenas são obrigadas a ocupar assento Conselho Nacional de Saúde e os Conselhos Estaduais e Municipais de Saúde."
    ],
    "correctAnswer": 1,
    "explanation": "O Subsistema de Atenção à Saúde Indígena (SasiSUS), criado pela Lei nº 9.836/1999 (Lei Arouca), é organizado com base nos Distritos Sanitários Especiais Indígenas (DSEI): 34 unidades gestoras descentralizadas, geridas pela SESAI/MS, responsáveis pela atenção primária nos territórios.\n\nOs casos de maior complexidade são referenciados à rede do SUS.",
    "commentary": "Sala específica nas UBS (A): o modelo são os DSEI, polos base e equipes multidisciplinares nos territórios, não salas nas UBS.\n\nAcesso garantido só à atenção primária (C): os indígenas têm acesso integral a todos os níveis do SUS.\n\nDados separados do SUS (D): a lei prevê integração das informações com os sistemas do SUS.\n\nObrigação de ocupar assento nos conselhos (E): a lei garante o direito de participação nos conselhos, não uma obrigação.",
    "reference": "Lei nº 9.836/1999 / Política Nacional de Atenção à Saúde dos Povos Indígenas",
    "tags": [
      "saúde coletiva",
      "saúde indígena",
      "SasiSUS",
      "DSEI"
    ]
  },
  {
    "id": "hosbos2027-84",
    "topography": "15",
    "topic": "Saúde da mulher",
    "module": "Saúde Coletiva",
    "text": "Uma UBS fica situada em uma região periférica de uma cidade de aproximadamente 400 mil pessoas. Um dos atendimentos de um determinado dia chamou a atenção da equipe de saúde. Clara, 32 anos, usuária desta unidade, casada há 10 anos, mora com o marido e dois filhos, de 3 e 7 anos de idade. Ela é diarista e o marido é segurança noturno em um galpão de logística. Ela compareceu à UBS em dia não agendado, mostrando-se apreensiva. A equipe percebeu que ela queria falar alguma coisa, mas algo a fez recuar. Seus braços estavam com hematomas e houve suspeita de violência física.\n\nAssinale a alternativa correta sobre esse caso.",
    "options": [
      "(A) O caso deve ser de violência doméstica e é importante que a equipe converse com Clara, incentivando-a a fazer uma denúncia contra o marido na Delegacia da Mulher.",
      "(B) A equipe da UBS deve, sem que Clara saiba, procurar o marido para esclarecer que seu comportamento é inadequado e orientá-lo.",
      "(C) O caso pode ser de violência doméstica ou de violência em alguma das casas onde trabalha e o primeiro passo é buscar o diálogo com ela para apurar o que acontece.",
      "(D) A equipe da UBS deve, sem que Clara saiba, estabelecer contato com alguém da família de Clara para ficarem atentos quanto ao comportamento do marido.",
      "(E) A equipe da UBS deve alertar a polícia para que esta faça uma investigação e descubra o que acontece com Clara."
    ],
    "correctAnswer": 2,
    "explanation": "Mulher que procura a UBS fora de agenda, apreensiva, hesitante e com hematomas nos braços: sinais sugestivos de violência, mas o autor e o contexto são desconhecidos (pode ser doméstica ou no trabalho, como diarista).\n\nO primeiro passo é acolher e criar espaço de escuta qualificada e privada, respeitando a autonomia da mulher, para compreender a situação. Daí decorrem a notificação compulsória da violência no SINAN e a articulação com a rede de proteção, construída junto com ela.",
    "commentary": "Concluir violência doméstica e incentivar denúncia (A): presume o autor e pressiona a decisão; a denúncia é escolha da mulher adulta.\n\nProcurar o marido escondido (B): quebra o sigilo e pode aumentar o risco de violência.\n\nAvisar familiares escondido (D): viola sigilo e autonomia, além de expô-la a risco.\n\nAcionar a polícia (E): na mulher adulta, a comunicação à polícia sem consentimento é exceção (risco iminente à vida); a regra é notificar à vigilância e acolher.",
    "reference": "Norma Técnica — Atenção às mulheres em situação de violência (MS) / Lei nº 10.778/2003 e atualizações",
    "tags": [
      "saúde coletiva",
      "violência contra a mulher",
      "acolhimento",
      "atenção primária"
    ]
  },
  {
    "id": "hosbos2027-85",
    "topography": "15",
    "topic": "Saúde do idoso",
    "module": "Saúde Coletiva",
    "text": "Dona Mirian tem 78 anos de idade e mora sozinha, em uma cidade de aproximadamente 50 mil habitantes. Após 60 anos de casada, acaba de perder o marido com quem vivia harmoniosamente. Mantém autonomia e boa saúde. Seus filhos moram no outro lado da mesma cidade. É usuária da UBS perto de sua casa e recebe orientações quanto aos seus hábitos e cuidados com a saúde.\n\nAssinale a alternativa correta, sobre a atenção da equipe a esta idosa.",
    "options": [
      "(A) A ingestão de água deve ser feita com cuidado por pessoas idosas para não sobrecarregar o coração e os rins.",
      "(B) Os alimentos menos perecíveis são indicados para idosos para que se evitem infecções gastrointestinais com a ingestão de alimentos in natura contaminados.",
      "(C) A atividade física cotidiana foi interrompida com a morte do marido mas deve ser retomada após o período de luto.",
      "(D) Como dona Mirian tornou-se viúva recentemente, é preciso que a equipe da UBS esteja atenta às diferentes fases do luto e a eventuais repercussões sobre a saúde.",
      "(E) Dona Mirian deve ser orientada a se alimentar frugalmente para não ganhar peso."
    ],
    "correctAnswer": 3,
    "explanation": "Idosa autônoma que acabou de perder o companheiro de 60 anos. O luto é um momento de vulnerabilidade, com risco de isolamento, piora da saúde, desorganização de hábitos e evolução para luto prolongado ou depressão.\n\nA equipe da atenção primária deve acompanhar ativamente, reconhecer as fases do luto, oferecer escuta, mobilizar a rede de apoio (filhos, comunidade) e estar atenta a repercussões na saúde.",
    "commentary": "Cuidado com a ingestão de água (A): idosos têm menor sensação de sede e devem ser estimulados a hidratar-se, não o contrário.\n\nPreferir alimentos menos perecíveis (B): o Guia Alimentar recomenda alimentos in natura e minimamente processados, com higiene adequada.\n\nRetomar a atividade física só após o luto (C): a atividade física deve ser mantida e ajuda a enfrentar o luto.\n\nComer frugalmente para não ganhar peso (E): o risco no idoso enlutado é a perda de peso e a desnutrição.",
    "reference": "Caderno de Atenção Básica nº 19 — Envelhecimento e Saúde da Pessoa Idosa (MS) / Guia Alimentar para a População Brasileira",
    "tags": [
      "saúde coletiva",
      "saúde da pessoa idosa",
      "luto",
      "atenção primária"
    ]
  },
  {
    "id": "hosbos2027-86",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "Leia o texto a seguir: “Entre as várias medicinas populares praticadas no Brasil, estudamos especialmente a chamada ‘pajelança cabocla’, muito popular sobretudo na Amazônia rural, composta por um conjunto de práticas de cura xamanística, com origem em crenças e costumes dos antigos índios Tupinambás, sincretizados pelo contato com o branco e o negro, desde pelo menos a segunda metade do século XVIII.” (Raymundo Heraldo Maués, Medicinas Populares e “Pajelança Cabocla” na Amazônia. In: Maria C. S. Minayo e Paulo C. Alves, Saúde e doença, um olhar antropológico, 1994).\n\nAssinale a alternativa correta sobre o tema.",
    "options": [
      "(A) As medicinas populares devem ser compreendidas, pois algumas de suas práticas são disseminadas em determinadas populações e podem influenciar a relação entre trabalhadores da saúde e usuários do SUS.",
      "(B) As medicinas populares não acrescentam conhecimento à medicina baseada em estudos científicos e seus pilares devem ser refutados para que não haja prejuízo às populações.",
      "(C) As medicinas populares, por terem surgido no século XVIII, têm conhecimentos ultrapassados pela medicina moderna.",
      "(D) As práticas das medicinas populares, em geral, são incompatíveis com as práticas da medicina moderna.",
      "(E) Algumas práticas de terapias integrativas e complementares (PIC), como por exemplo, a acupuntura e homeopatia, têm relação direta com as medicinas populares."
    ],
    "correctAnswer": 0,
    "explanation": "O texto, de antropologia da saúde, aborda a pajelança cabocla como prática de cura culturalmente enraizada. Compreender as medicinas populares é importante porque elas moldam como as pessoas entendem o adoecimento e buscam cuidado.\n\nIsso influencia a relação com os profissionais e a adesão aos tratamentos no SUS. A abordagem culturalmente sensível, sem preconceito, melhora o vínculo e o cuidado.",
    "commentary": "Medicinas populares devem ser refutadas (B): visão etnocêntrica; o diálogo é mais efetivo que a refutação.\n\nConhecimentos ultrapassados por terem surgido no século XVIII (C): a antiguidade não define validade, e o texto não as reduz a isso.\n\nIncompatíveis com a medicina moderna (D): podem coexistir; muitos usuários recorrem a ambas.\n\nAcupuntura e homeopatia ligadas às medicinas populares (E): são sistemas médicos estruturados (medicina tradicional chinesa, homeopatia) incluídos na PNPIC, não derivados das medicinas populares brasileiras.",
    "reference": "Minayo MCS, Alves PC (orgs.) — Saúde e doença: um olhar antropológico (Fiocruz, 1994) / PNPIC",
    "tags": [
      "saúde coletiva",
      "antropologia da saúde",
      "medicinas populares",
      "competência cultural"
    ]
  },
  {
    "id": "hosbos2027-87",
    "topography": "15",
    "topic": "Saúde do trabalhador",
    "module": "Saúde Coletiva",
    "text": "Durante a sua jornada de trabalho, uma farmacêutica é rendida na farmácia onde trabalha e é ameaçada pelo assaltante, com uma arma de fogo apontada em sua cabeça, para que abra o armário onde se encontram canetas emagrecedoras. Quando estava prestes a ceder, ouve-se uma sirene e os assaltantes desistem do assalto e fogem. Passado o susto, a farmacêutica prosseguiu trabalhando, mas após 10 dias começa a sonhar com cenas do ocorrido, passando a ter revivescências e dificuldades de voltar ao local de trabalho. Feita a hipótese de Transtorno do Estresse Pós-Traumático (TEPT), assinale a alternativa correta quanto à notificação no SINAN.",
    "options": [
      "(A) O TEPT é de notificação compulsória apenas nos casos de violência sexual e na situação do enunciado, nada deve ser feito quanto à notificação.",
      "(B) O diagnóstico deve estar incorreto, pois os sintomas apareceram muitos dias após o ocorrido.",
      "(C) Deve se tratar de TEPT pós-assalto em situação de trabalho, de modo que deve ser notificado como transtorno mental relacionado ao trabalho.",
      "(D) O caso deve ser notificado no SINAN apenas após confirmação do diagnóstico.",
      "(E) O SINAN é alimentado apenas por doenças infectocontagiosas e, portanto, não cabe a notificação de um transtorno mental."
    ],
    "correctAnswer": 2,
    "explanation": "Transtorno de estresse pós-traumático após assalto à mão armada durante o trabalho (o início dos sintomas dias depois é compatível com o quadro): transtorno mental relacionado ao trabalho.\n\nOs transtornos mentais relacionados ao trabalho integram a Lista Nacional de Notificação Compulsória e devem ser notificados no SINAN. A notificação ocorre na suspeita, com nexo com o trabalho.",
    "commentary": "Só em violência sexual (A): o TEPT relacionado ao trabalho é notificável como transtorno mental relacionado ao trabalho.\n\nDiagnóstico incorreto pelo atraso (B): sintomas que começam dias a semanas após o trauma são compatíveis com TEPT (o diagnóstico exige duração acima de 1 mês).\n\nSó após confirmação (D): a notificação de agravos relacionados ao trabalho é feita na suspeita.\n\nSINAN só para doenças infecciosas (E): o SINAN inclui agravos não transmissíveis, como violências, acidentes e doenças relacionadas ao trabalho.",
    "reference": "Lista Nacional de Notificação Compulsória (Portaria de Consolidação nº 4/2017 e atualizações) / Protocolo de Transtornos Mentais Relacionados ao Trabalho (MS)",
    "tags": [
      "saúde coletiva",
      "saúde do trabalhador",
      "transtorno de estresse pós-traumático",
      "notificação compulsória"
    ]
  },
  {
    "id": "hosbos2027-88",
    "topography": "15",
    "topic": "Epidemiologia",
    "module": "Saúde Coletiva",
    "text": "Por milhares de anos, as epidemias foram consideradas consequências de julgamentos divinos sobre a perversidade do ser humano. Apaziguando-se os deuses irados, evitar-se-iam as punições. No Egito, por exemplo, Sekhmet, deusa da pestilência, provocava epidemias, se irritada, e as extinguia quando acalmada. Essa teoria teúrgica da doença perdurou por vários milênios. Mas a seu lado se desenvolveu, aos poucos, a ideia de dever-se a pestilência a causas naturais, ligadas, em especial, a clima e ambiente físico. Essa grande liberação do pensamento teve lugar na Grécia e culminou, durante os séculos 5º e 6º antes de Cristo, nas primeiras tentativas de se criar uma teoria científica, racional, a respeito da causação de doença.\n\nCom base no enunciado, assinale a alternativa correta.",
    "options": [
      "(A) A partir dos séculos V e VI antes de Cristo, na Grécia, os médicos passaram a desenvolver pesquisas válidas até a atualidade.",
      "(B) O texto se refere aos diversos pensamentos sobre doenças da Idade Média.",
      "(C) A religião católica sempre foi um obstáculo à ciência e à racionalidade na busca das causas das doenças.",
      "(D) Depreende-se que o pensamento médico grego sobre a causação das doenças era destituído de aspectos religiosos.",
      "(E) O enunciado se refere a teorias sobre o adoecimento em diferentes civilizações ao longo de séculos."
    ],
    "correctAnswer": 4,
    "explanation": "O texto percorre diferentes explicações sobre a causa das doenças em diferentes civilizações e épocas: a concepção teúrgica (divina) no Egito e outros povos e o surgimento, na Grécia, de explicações naturais ligadas ao clima e ao ambiente.\n\nA alternativa E é a única que descreve corretamente o conteúdo do enunciado, sem extrapolar.",
    "commentary": "Pesquisas gregas válidas até hoje (A): o texto fala em primeiras tentativas de teoria racional, não em resultados válidos atualmente.\n\nIdade Média (B): o texto trata da Antiguidade (Egito e Grécia dos séculos V e VI a.C.).\n\nReligião católica obstáculo (C): o texto não trata do catolicismo, e a generalização é indevida.\n\nPensamento grego sem aspectos religiosos (D): o texto não afirma isso; o pensamento grego conviveu com elementos religiosos.",
    "reference": "Rosen G — Uma história da saúde pública / Scliar M — História do conceito de saúde",
    "tags": [
      "saúde coletiva",
      "história da saúde pública",
      "teorias da causalidade",
      "epidemiologia"
    ]
  },
  {
    "id": "hosbos2027-89",
    "topography": "15",
    "topic": "Saúde do trabalhador",
    "module": "Saúde Coletiva",
    "text": "Em uma determinada cidade de pequeno porte, observa-se um crescimento de problemas respiratórios na população. Com a hipótese de que o trabalho rural poderia ser determinante nesse tipo de adoecimento, a secretaria de saúde resolve realizar um estudo com 1500 trabalhadores que eram vinculados a diferentes estabelecimentos. O trabalho de campo foi realizado durante 5 semanas, na safra de verão e foram utilizados 2 questionários: um para obtenção de dados dos estabelecimentos e outro, dos trabalhadores. Dos estabelecimentos, foram coletados dados sobre o tipo de produção agrícola (principais culturas e principais rebanhos de aves, bovinos, suínos e equinos) e uso de rações industriais. Dos trabalhadores, foram coletados dados de sintomas relacionados à asma, às doenças pulmonares persistentes e à bronquite. O estudo mostrou alta prevalência dos sintomas respiratórios e revelou que o trabalho na avicultura apresenta riscos elevados de doença respiratória crônica.\n\nCom base nesse enunciado, assinale a alternativa correta.",
    "options": [
      "(A) O estudo epidemiológico foi de delineamento transversal e possibilitou estabelecer inequívoca relação de causalidade entre exposição a poeiras do trabalho rural e problemas respiratórios.",
      "(B) O estudo fundamenta a necessidade de se planejar a criação de mais serviços de saúde especializados em doenças respiratórias.",
      "(C) O delineamento do estudo epidemiológico descrito tem baixo poder analítico, inapropriado para testar hipóteses causais.",
      "(D) Independentemente de estudos, a medida prioritária é a distribuição de máscaras a todos os trabalhadores rurais e o uso obrigatório durante toda a jornada de trabalho.",
      "(E) O estudo referido tem como uma desvantagem alto custo de execução, mas tem alto poder analítico."
    ],
    "correctAnswer": 2,
    "explanation": "O estudo coletou exposição e sintomas ao mesmo tempo, em um único período (5 semanas), numa amostra de trabalhadores: é um estudo transversal (de prevalência).\n\nComo não se sabe se a exposição precedeu o desfecho, o desenho tem baixo poder analítico para testar hipóteses causais. Serve para descrever prevalências e gerar hipóteses.",
    "commentary": "Causalidade inequívoca (A): estudos transversais não estabelecem causalidade.\n\nMais serviços especializados (B): o estudo aponta exposição ocupacional; a prioridade seria vigilância e prevenção, não serviços especializados.\n\nMáscaras independentemente de estudos (D): medida isolada, sem considerar a hierarquia de controle de riscos nem a evidência.\n\nAlto custo e alto poder analítico (E): o transversal é relativamente barato e tem baixo poder analítico.",
    "reference": "Medronho — Epidemiologia / Rouquayrol — Epidemiologia & Saúde",
    "tags": [
      "epidemiologia",
      "estudo transversal",
      "saúde do trabalhador",
      "desenhos de estudo"
    ]
  },
  {
    "id": "hosbos2027-90",
    "topography": "15",
    "topic": "Epidemiologia",
    "module": "Saúde Coletiva",
    "text": "Uma doença X tem taxa de letalidade maior do que a doença Y.\n\nAssinale a alternativa correta sobre essa informação.",
    "options": [
      "(A) A doença X é aguda e a doença Y é crônica.",
      "(B) Morrem mais pessoas com a doença X na sua fase inicial do que pessoas com a doença Y.",
      "(C) A doença X é uma doença infecciosa e a doença Y não.",
      "(D) Morrem mais pessoas pela doença X em relação a pessoas que tiveram ou têm a doença.",
      "(E) A doença X acomete pessoas de mais idade."
    ],
    "correctAnswer": 3,
    "explanation": "Letalidade = número de óbitos pela doença dividido pelo número de doentes (casos), em determinado período. Expressa a gravidade da doença, ou seja, a proporção de doentes que morrem dela.\n\nSe X tem letalidade maior que Y, entre as pessoas que têm ou tiveram X, morre proporcionalmente mais gente do que entre os doentes de Y. Não confundir com mortalidade, que usa a população total no denominador.",
    "commentary": "X aguda e Y crônica (A): a letalidade não informa a evolução temporal da doença.\n\nMortes na fase inicial (B): a letalidade não indica em que fase os óbitos ocorrem.\n\nX infecciosa (C): a medida não define a natureza da doença.\n\nX acomete mais idosos (E): a letalidade não informa a faixa etária acometida.",
    "reference": "Rouquayrol — Epidemiologia & Saúde / Medronho — Epidemiologia",
    "tags": [
      "epidemiologia",
      "letalidade",
      "indicadores de saúde"
    ]
  },
  {
    "id": "hosbos2027-91",
    "topography": "15",
    "topic": "Estudos epidemiológicos",
    "module": "Saúde Coletiva",
    "text": "Há 7 anos, um grupo de pesquisadores acompanha uma população de trabalhadores que trabalhava em determinada empresa, cujo processo de trabalho utilizava amianto. Além da avaliação de saúde, são feitos exames complementares para detecção de doenças relacionadas à exposição dessa fibra. Entre outros objetivos, busca-se calcular o coeficiente de incidência de cada doença.\n\nAssinale a alternativa correta sobre esse estudo.",
    "options": [
      "(A) Trata-se de um estudo de fácil execução, que fornece o risco atribuível apenas do conjunto das doenças.",
      "(B) Trata-se de um estudo de alto poder analítico, que pode fornecer o risco atribuível de cada doença.",
      "(C) É um estudo vulnerável a perdas, de baixo poder analítico.",
      "(D) É um estudo cujo ponto forte é o seu baixo custo e alto poder descritivo.",
      "(E) É um estudo cujo desenho é simples e adequado principalmente para doenças raras."
    ],
    "correctAnswer": 1,
    "explanation": "Acompanha-se por 7 anos uma população exposta ao amianto, medindo-se a incidência de cada doença: é um estudo de coorte (prospectivo).\n\nA coorte tem alto poder analítico, permite calcular incidência, risco relativo e risco atribuível para vários desfechos (cada doença) a partir de uma mesma exposição, e estabelece temporalidade. Por outro lado, é caro, longo e sujeito a perdas de seguimento.",
    "commentary": "Fácil execução e só risco do conjunto (A): coortes são complexas e permitem calcular o risco de cada desfecho.\n\nBaixo poder analítico (C): é vulnerável a perdas, mas tem alto poder analítico.\n\nBaixo custo e alto poder descritivo (D): coortes são caras; seu ponto forte é o poder analítico.\n\nAdequado para doenças raras (E): para doenças raras o desenho indicado é o caso-controle; a coorte serve para exposições raras.",
    "reference": "Medronho — Epidemiologia / Fletcher — Epidemiologia Clínica",
    "tags": [
      "epidemiologia",
      "estudo de coorte",
      "incidência",
      "saúde do trabalhador"
    ]
  },
  {
    "id": "hosbos2027-92",
    "topography": "2.1",
    "topic": "Tabagismo",
    "module": "Saúde Coletiva",
    "text": "A prevalência de tabagismo é o resultado da iniciação (novos usuários de tabaco) e da interrupção do consumo (por cessação do tabagismo ou morte). A identificação dos fatores determinantes da iniciação e da cessação do tabagismo é, portanto, fundamental para o planejamento de ações específicas para o controle do tabaco. O Brasil dispõe de um robusto sistema de pesquisa e vigilância que possibilita a produção de estimativas nacionais e regionais sobre o uso do tabaco, exposição ambiental à sua fumaça, cessação, exposição à propaganda pró e antitabaco, conhecimentos e atitudes, preço médio e gasto médio mensal com cigarros industrializados, dentre outras informações. Estudo publicado em dezembro de 2025, com base em dados do Vigitel, mostra que o índice caiu de 15,7% em 2006 para 9,3% em 2023. A proporção de fumantes no Brasil continua em queda, mas em ritmo mais lento.\n\nAssinale a alternativa correta sobre o tabagismo.",
    "options": [
      "(A) Apesar de importante para a saúde, o controle do tabaco no Brasil representa prioritariamente uma tentativa de combate a um hábito tradicional popular.",
      "(B) O controle do tabaco é uma necessidade em saúde pública reconhecida consensualmente na sociedade.",
      "(C) A Política Nacional de Controle do Tabaco tem como ação central campanhas antitabaco dirigidas a várias faixas etárias.",
      "(D) O uso do cigarro eletrônico é um recurso importante no processo de interrupção do consumo de tabaco no Brasil.",
      "(E) A Organização Mundial da Saúde reconhece transtornos mentais e comportamentais decorrentes do consumo da nicotina."
    ],
    "correctAnswer": 4,
    "explanation": "A OMS, na CID-10 (F17) e na CID-11 (6C4A), reconhece os transtornos mentais e comportamentais devidos ao uso de tabaco ou nicotina, incluindo dependência e abstinência.\n\nO tabagismo é uma doença crônica causada pela dependência à nicotina, e não apenas um hábito ou fator de risco.",
    "commentary": "Combate a um hábito tradicional (A): o tabagismo é dependência química e principal causa evitável de morte; não se trata de combater um hábito.\n\nConsenso social (B): há resistência de interesses econômicos (indústria do tabaco); não é consensual.\n\nAção central em campanhas (C): a política é multifacetada (legislação, tributação, ambientes livres, advertências, tratamento), alinhada à Convenção-Quadro.\n\nCigarro eletrônico na cessação (D): no Brasil, a Anvisa proíbe a comercialização (RDC 855/2024), e ele não é recomendado como método de cessação.",
    "reference": "CID-11 (OMS) / Política Nacional de Controle do Tabaco — INCA / Convenção-Quadro para o Controle do Tabaco",
    "tags": [
      "saúde coletiva",
      "tabagismo",
      "dependência de nicotina"
    ]
  },
  {
    "id": "hosbos2027-93",
    "topography": "13",
    "topic": "Dependência química",
    "module": "Saúde Coletiva",
    "text": "Os problemas relacionados ao consumo de álcool são muito prevalentes e responsáveis por grande peso na carga de doenças, representando um grande ônus social e econômico. É fator causal para mais de 200 doenças e lesões, entre elas distúrbios mentais e comportamentais, incluindo transtornos por uso de álcool, doenças não transmissíveis graves, como cirrose hepática, alguns tipos de câncer e doenças cardiovasculares, além das lesões resultantes de violência e acidentes de trânsito.\n\nAssinale a alternativa correta.",
    "options": [
      "(A) A tendência atual é de classificar como grave qualquer consumo de álcool pelo grande potencial de causador de agravos múltiplos à saúde, físicos e psíquicos.",
      "(B) O uso de álcool, resultando no fracasso em desempenhar papeis importantes no trabalho, na escola ou em casa é um critério absoluto para definir um padrão problemático de uso de álcool considerado grave.",
      "(C) A maioria das pessoas que desenvolvem transtornos relacionados ao álcool o faz após o fim da faixa dos 30 anos.",
      "(D) Para definir um padrão problemático de uso de álcool são utilizados vários critérios, entre os quais desejo persistente ou esforços mal sucedidos no sentido de reduzir ou controlar o uso de álcool durante um período de 12 meses.",
      "(E) São considerados abstêmios os indivíduos sem consumo de álcool nos últimos cinco anos."
    ],
    "correctAnswer": 3,
    "explanation": "No DSM-5-TR, o transtorno por uso de álcool é definido por 2 ou mais de 11 critérios em 12 meses, e um deles é o desejo persistente ou esforços malsucedidos de reduzir ou controlar o uso.\n\nA gravidade se gradua pelo número de critérios: leve (2–3), moderado (4–5) e grave (6 ou mais).",
    "commentary": "Qualquer consumo é grave (A): a gravidade depende do número de critérios, não de qualquer consumo.\n\nFracasso em papéis como critério absoluto de gravidade (B): é um dos 11 critérios; nenhum isolado define gravidade.\n\nMaioria após os 30 anos (C): a maioria desenvolve o transtorno no fim da adolescência e entre os 20 e 30 anos.\n\nAbstêmio sem consumo há 5 anos (E): abstêmio é quem não consumiu álcool nos últimos 12 meses (ou nunca bebeu), conforme os inquéritos usuais.",
    "reference": "DSM-5-TR / OMS — Global status report on alcohol and health",
    "tags": [
      "saúde coletiva",
      "psiquiatria",
      "transtorno por uso de álcool",
      "DSM-5-TR"
    ]
  },
  {
    "id": "hosbos2027-94",
    "topography": "15",
    "topic": "SUS",
    "module": "Saúde Coletiva",
    "text": "Um serviço de emergência em uma cidade de pequeno porte observa que tem atendido um crescente número de jovens alcoolizados trazidos de festas, principalmente durante as madrugadas. São registrados, além do consumo exagerado do álcool, casos de brigas e lesões físicas ocorridos nessas ocasiões. Ao mesmo tempo, equipes de algumas unidades básicas de saúde recebem usuárias, mães de jovens, que demonstram preocupação com alcoolismo entre seus filhos. Esse assunto é trazido em uma reunião da vigilância em saúde para se pensar em formas de atuação do SUS.\n\nAssinale a alternativa correta.",
    "options": [
      "(A) É importante que haja um plano de ações intersetoriais pois o controle do consumo de álcool deve ser abordado nos aspectos sanitários, legais sociais, econômicos e culturais.",
      "(B) O SUS deve prioritariamente alertar os pais quanto aos efeitos negativos do álcool na saúde de jovens para que instituam no âmbito das famílias condutas responsáveis.",
      "(C) A Prefeitura deve incentivar a diminuição do consumo de álcool instituindo um certificado de boa conduta aos jovens que se mantiverem abstêmios por pelo menos um ano.",
      "(D) A fé é uma aliada do combate ao consumo de álcool, de forma que o SUS deve centrar sua ação em conversas com os padres, pastores e líderes das diversas religiões para que estejam atentos a esse problema percebido pelo SUS e familiares.",
      "(E) A Prefeitura deve fazer uma campanha em larga escala para que toda a população se conscientize dos malefícios do consumo de álcool para que cada família promova ações que desestimulem os jovens a adquirir esse hábito."
    ],
    "correctAnswer": 0,
    "explanation": "O consumo nocivo de álcool por jovens, com violência e lesões, é um problema complexo com determinantes sanitários, legais, sociais, econômicos e culturais.\n\nA resposta efetiva é intersetorial: saúde, educação, segurança, fiscalização da venda a menores, regulação de horários e de eventos, assistência social e comunidade, coordenados pela vigilância em saúde. Assim recomenda a OMS (SAFER) e a Política Nacional sobre o Álcool.",
    "commentary": "Prioridade em alertar pais (B): ação isolada e insuficiente para um problema populacional.\n\nCertificado de boa conduta (C): medida sem base em evidência e de caráter moralizante.\n\nCentrar a ação em líderes religiosos (D): estratégia restrita, não intersetorial e não laica.\n\nCampanha em larga escala que responsabiliza as famílias (E): campanhas isoladas têm efeito limitado; faltam regulação e ação intersetorial.",
    "reference": "OMS — Iniciativa SAFER / Política Nacional sobre o Álcool (Decreto nº 6.117/2007)",
    "tags": [
      "saúde coletiva",
      "álcool",
      "intersetorialidade",
      "promoção da saúde"
    ]
  },
  {
    "id": "hosbos2027-95",
    "topography": "15",
    "topic": "Saúde do trabalhador",
    "module": "Saúde Coletiva",
    "text": "Em uma cidade de médio porte são promovidos vários megaeventos para os quais vão pessoas de diversos municípios vizinhos. Em todas as ocasiões são contratadas empresas que, em pouco tempo, montam grandes estruturas metálicas para as apresentações ao ar livre. A vigilância em saúde dessa cidade identifica vários acidentes, inclusive com mortes, principalmente entre trabalhadores terceirizados nos processos de montagem e desmontagem. Uma rápida análise da situação detecta que trabalhadores são contratados por empreitada, e as empresas trabalham com prazos curtos para as entregas às promotoras dos eventos.\n\nAssinale a alternativa correta quanto ao papel do SUS nessa situação.",
    "options": [
      "(A) O SUS deve exigir que as empresas realizem palestras sobre questões referentes à segurança no trabalho para prevenir ocorrências citadas no enunciado.",
      "(B) Trata-se de uma situação com repercussões na saúde dos trabalhadores e novas ocorrências devem ser prevenidas com uma atuação intersetorial, além do SUS.",
      "(C) O SUS deve prestar assistência adequada aos trabalhadores acidentados, mas ações preventivas de novas ocorrências extrapolam suas atribuições.",
      "(D) A Prefeitura deve tornar obrigatório um processo de treinamento para todos os trabalhadores para prevenir novas ocorrências.",
      "(E) O SUS deve notificar o Ministério do Trabalho e Emprego para proibir a contratação de terceirizados e fiscalizar o trabalho, atribuição exclusiva da auditoria da Pasta."
    ],
    "correctAnswer": 1,
    "explanation": "Acidentes graves e fatais em trabalhadores terceirizados de montagem de estruturas, com contratação por empreitada e prazos curtos, refletem a organização precária do trabalho.\n\nO SUS tem atribuição constitucional de executar ações de saúde do trabalhador (art. 200 da Constituição; Lei 8.080/90) por meio da vigilância em saúde do trabalhador (VISAT), incluindo inspeção dos ambientes. A prevenção eficaz exige atuação intersetorial, com Ministério do Trabalho, Ministério Público do Trabalho, prefeitura (licenciamento de eventos) e Corpo de Bombeiros.",
    "commentary": "Exigir palestras (A): medida educativa isolada, que ignora a organização do trabalho (prazos, terceirização).\n\nPrevenção extrapola o SUS (C): a vigilância e a prevenção em saúde do trabalhador são atribuições do SUS.\n\nTreinamento obrigatório pela prefeitura (D): treinamento isolado não altera as condições que geram os acidentes.\n\nProibir terceirizados e fiscalização exclusiva do MTE (E): a fiscalização não é exclusiva do MTE (a VISAT do SUS também atua), e proibir terceirização não é atribuição do SUS.",
    "reference": "Constituição Federal, art. 200 / Lei nº 8.080/1990 / Política Nacional de Saúde do Trabalhador e da Trabalhadora (Portaria nº 1.823/2012)",
    "tags": [
      "saúde coletiva",
      "saúde do trabalhador",
      "acidente de trabalho",
      "intersetorialidade"
    ]
  },
  {
    "id": "hosbos2027-96",
    "topography": "3.2",
    "topic": "Hepatites virais",
    "module": "Saúde Coletiva",
    "text": "A hepatite B é uma doença infecciosa crônica de relevância em saúde pública, causada pelo vírus da hepatite B (HBV).\n\nAssinale a alternativa correta sobre essa doença.",
    "options": [
      "(A) A hepatite B é mais diagnosticada, entre as mulheres gestantes, de idade entre 20 e 24 anos, quando o teste é realizado.",
      "(B) Muitas vezes a hepatite B é diagnosticada décadas após a infecção, com sinais relacionados a outras doenças do fígado, que costumam manifestar-se apenas em fases mais avançadas da doença.",
      "(C) Quando diagnosticada, a hepatite B deve ser notificada no SINAN no prazo de 24 horas, principalmente em gestantes.",
      "(D) São considerados casos de hepatite B apenas os que apresentam HbsAg reagente, anti-HBc IgM reagente.",
      "(E) A ficha de notificação da hepatite B no SINAN é específica para a doença e contém, entre outras informações, a existência de exposição a medicamentos injetáveis, e à hemodiálise."
    ],
    "correctAnswer": 1,
    "explanation": "A hepatite B crônica costuma ser assintomática por anos ou décadas, e muitos pacientes só são diagnosticados quando surgem manifestações de doença hepática avançada (cirrose, hepatocarcinoma).\n\nPor isso a testagem ampla (teste rápido de HBsAg na atenção primária e no pré-natal) e a vacinação são estratégias centrais.",
    "commentary": "Mais diagnosticada em gestantes de 20–24 anos (A): a afirmação não corresponde aos dados epidemiológicos; a maior detecção ocorre em faixas etárias mais velhas.\n\nNotificação em 24 h (C): as hepatites virais são de notificação semanal.\n\nCaso só com HBsAg e anti-HBc IgM reagentes (D): também se define caso com HBsAg reagente isolado, HBV-DNA detectável, entre outros critérios.\n\nFicha específica da hepatite B (E): a ficha do SINAN é única para as hepatites virais, não específica da hepatite B.",
    "reference": "Boletim Epidemiológico de Hepatites Virais — MS / PCDT de Hepatite B e Coinfecções (2023)",
    "tags": [
      "saúde coletiva",
      "hepatite B",
      "vigilância epidemiológica"
    ]
  },
  {
    "id": "hosbos2027-97",
    "topography": "15",
    "topic": "Saúde do idoso",
    "module": "Saúde Coletiva",
    "text": "Assinale a alternativa correta, segundo o Estatuto da Pessoa Idosa.",
    "options": [
      "(A) A pessoa idosa, desde que comprove situação de vulnerabilidade, tem direito à medicação gratuita pelo SUS, especialmente aquela de uso continuado.",
      "(B) A partir dos 60 anos de idade, é permitida cobrança de valores diferenciados em razão da idade pelos planos de saúde.",
      "(C) As pessoas idosas com mais de 80 anos, em todo atendimento de saúde, têm preferência especial sobre as demais pessoas idosas, exceto em caso de emergência.",
      "(D) Toda pessoa idosa internada ou em observação tem direito a acompanhante, desde que seja parente próximo.",
      "(E) A partir dos 80 anos, os familiares mais próximos da pessoa idosa têm o direito de optar pelo tratamento de saúde que lhe for reputado mais favorável."
    ],
    "correctAnswer": 2,
    "explanation": "O Estatuto da Pessoa Idosa (Lei nº 10.741/2003, alterada pela Lei nº 13.466/2017) garante prioridade especial aos maiores de 80 anos sobre os demais idosos em todos os atendimentos, exceto nos casos de emergência, em que prevalece a gravidade.",
    "commentary": "Medicação gratuita só com vulnerabilidade (A): o fornecimento gratuito de medicamentos de uso continuado é garantido sem exigência de comprovar vulnerabilidade.\n\nCobrança diferenciada por idade (B): o Estatuto veda discriminação do idoso nos planos de saúde por cobrança de valores diferenciados em razão da idade.\n\nAcompanhante só se parente próximo (D): o direito a acompanhante não é restrito a parentes.\n\nFamiliares escolhem o tratamento a partir dos 80 anos (E): a pessoa idosa no domínio de suas faculdades decide; os familiares só decidem quando ela não tem condições.",
    "reference": "Estatuto da Pessoa Idosa — Lei nº 10.741/2003 (arts. 3º, 15, 16, 17)",
    "tags": [
      "saúde coletiva",
      "estatuto da pessoa idosa",
      "legislação",
      "saúde da pessoa idosa"
    ]
  },
  {
    "id": "hosbos2027-98",
    "topography": "15",
    "topic": "Vigilância epidemiológica",
    "module": "Saúde Coletiva",
    "text": "Em março de 2026, o Ministério da Saúde promoveu mudanças na Lista Nacional de Notificação Compulsória de doenças, agravos e eventos de saúde pública, nos serviços de saúde públicos e privados em todo o território nacional.\n\nAssinale a alternativa que contém uma dessas mudanças.",
    "options": [
      "(A) A Síndrome Gripal suspeita de covid-19, passa a ser Síndrome Gripal por covid-19 confirmada.",
      "(B) Os casos de febre do Oropouche passam a ser de notificação imediata.",
      "(C) As hepatites virais passam a ser de notificação imediata.",
      "(D) A varicela que era de notificação imediata passou a ser de notificação semanal.",
      "(E) A violência sexual que era de notificação semanal passou a ser de notificação mediata."
    ],
    "correctAnswer": 0,
    "explanation": "Segundo o gabarito, na atualização de março de 2026 da Lista Nacional de Notificação Compulsória a covid-19 deixou de ser um item próprio e foi incorporada ao item de síndrome gripal. O antigo item 'Síndrome Gripal suspeita de covid-19' passou a ser 'Síndrome Gripal por covid-19 confirmada', exigindo confirmação laboratorial para a notificação individual.\n\nAs demais alternativas não correspondem às mudanças da portaria.",
    "commentary": "Oropouche passa a imediata (B): a febre do Oropouche já era de notificação imediata antes dessa atualização.\n\nHepatites virais imediatas (C): as hepatites virais continuam de notificação semanal.\n\nVaricela imediata para semanal (D): não corresponde às mudanças da atualização.\n\nViolência sexual semanal para mediata (E): a violência sexual é de notificação imediata (até 24 horas) ao município.",
    "reference": "Lista Nacional de Notificação Compulsória — atualização de 2026 (Ministério da Saúde)",
    "tags": [
      "saúde coletiva",
      "vigilância epidemiológica",
      "notificação compulsória",
      "covid-19"
    ],
    "alert": "Questão sobre uma atualização normativa recente (março de 2026). A explicação segue o gabarito; confira o texto da portaria vigente."
  },
  {
    "id": "hosbos2027-99",
    "topography": "13",
    "topic": "Dependência química",
    "module": "Saúde Coletiva",
    "text": "Ivan é bancário, casado, tem 35 anos e duas filhas de 7 e 9 anos de idade. Há pouco mais de um ano começou jogar e fazer apostas, com prejuízos financeiros, o que, por vezes, traz repercussão sobre o orçamento doméstico. Sua esposa, professora, tem notado mudanças do sono, de seu humor e comportamento nos últimos meses, tornando-se ansioso, irritadiço e inquieto quando não está jogando.\n\nAssinale a alternativa correta sobre esse caso.",
    "options": [
      "(A) A esposa deve usar as filhas para que conversem com o pai para que ele perceba a mudança que se processa em seu cotidiano.",
      "(B) A constituição de uma rede de monitoramento acirrado de amigos é a melhor opção para coibir a compulsão por jogo e apostas.",
      "(C) O enunciado fala de sinais de alerta para o transtorno do jogo ou ludopatia, condição conhecida como mania de jogos ou apostas.",
      "(D) Sem que Ivan perceba, a esposa deve tentar ocupar todo o tempo livre dele com tarefas domésticas.",
      "(E) A esposa deve lhe dar um medicamento que uma amiga sua, com o mesmo problema, fez uso."
    ],
    "correctAnswer": 2,
    "explanation": "Apostas frequentes há mais de um ano, com prejuízo financeiro e familiar e com irritabilidade, inquietação e ansiedade quando não está jogando (sintomas semelhantes à abstinência): sinais de transtorno do jogo (jogo patológico ou ludopatia).\n\nO DSM-5-TR o classifica entre os transtornos relacionados a substâncias e aditivos. A conduta é avaliação profissional e tratamento (terapia cognitivo-comportamental, grupos de apoio como os Jogadores Anônimos, abordagem familiar e manejo financeiro), na RAPS.",
    "commentary": "Usar as filhas (A): expõe as crianças e não é estratégia terapêutica.\n\nRede de monitoramento acirrado (B): controle externo isolado não trata a dependência e pode gerar conflito.\n\nOcupar o tempo dele sem que perceba (D): estratégia manipulativa e ineficaz.\n\nMedicamento de uma amiga (E): automedicação sem avaliação é inadequada e perigosa.",
    "reference": "DSM-5-TR — Transtorno do jogo / Ministério da Saúde — Rede de Atenção Psicossocial",
    "tags": [
      "saúde coletiva",
      "psiquiatria",
      "transtorno do jogo",
      "apostas"
    ]
  },
  {
    "id": "hosbos2027-100",
    "topography": "15",
    "topic": "Imunização",
    "module": "Saúde Coletiva",
    "text": "Assinale a alternativa que contém as vacinas que devem ser ministradas à criança ao nascer.",
    "options": [
      "(A) Sarampo e hepatite A.",
      "(B) Poliomielite inativada (VIP) e hepatite B.",
      "(C) Penta (DTP+Hib+HB) e BCG.",
      "(D) BCG e hepatite B.",
      "(E) Meningocócica C e rotavírus humano."
    ],
    "correctAnswer": 3,
    "explanation": "Pelo Calendário Nacional de Vacinação, ao nascer a criança deve receber a BCG (dose única, contra as formas graves de tuberculose) e a vacina de hepatite B (dose ao nascer, idealmente nas primeiras 12 a 24 horas, para prevenir a transmissão vertical).",
    "commentary": "Sarampo e hepatite A (A): a tríplice viral começa aos 12 meses e a hepatite A aos 15 meses.\n\nVIP e hepatite B (B): a VIP começa aos 2 meses.\n\nPenta e BCG (C): a pentavalente começa aos 2 meses; ao nascer a hepatite B é monovalente.\n\nMeningocócica C e rotavírus (E): começam aos 3 e aos 2 meses, respectivamente.",
    "reference": "Calendário Nacional de Vacinação da Criança — PNI/Ministério da Saúde",
    "tags": [
      "saúde coletiva",
      "imunização",
      "calendário vacinal",
      "recém-nascido"
    ]
  }
];
